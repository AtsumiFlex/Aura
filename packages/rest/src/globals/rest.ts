import { setTimeout } from "node:timers";
import type { URL } from "node:url";
import type { AuthenticationTypeInfer } from "@aurajs/core";
import { API_BASE_URL, API_CDN_BASE_URL, ApiVersion } from "@aurajs/core";
import { HttpResponseCodes } from "@aurajs/utils";
import { type Dispatcher, request } from "undici";
import type { IncomingHttpHeaders } from "undici/types/header";

export type RestRequestOptions<T> = {
	body?: any;
	headers?: IncomingHttpHeaders | Iterable<[string, string[] | string | undefined]> | string[] | null;
	method: Dispatcher.HttpMethod;
	origin?: URL | string;
	path?: string;
	query?: Record<string, any>;
	type?: T;
	url: string;
};

export type RestOptions = {
	authenticationType: AuthenticationTypeInfer;
	baseUrl?: string;
	cdnUrl?: string;
	version?: ApiVersion;
};

export class Rest {
	public token: string;

	public authenticationType: AuthenticationTypeInfer;

	public baseUrl: string;

	public cdnUrl: string;

	public version: ApiVersion;

	private rateLimitCache: Map<string, { limit: number; remaining: number; reset: number; }> = new Map();

	public constructor(token: string, options: RestOptions) {
		this.token = token;
		this.authenticationType = options.authenticationType;
		this.baseUrl = options.baseUrl ?? API_BASE_URL;
		this.cdnUrl = options.cdnUrl ?? API_CDN_BASE_URL;
		this.version = options.version ?? ApiVersion.V10;
	}

	private get defaultHeaders(): IncomingHttpHeaders {
		return {
			Authorization: `${this.authenticationType} ${this.token}`,
			"Content-Type": "application/json",
			"User-Agent": `@aurajs/rest (${this.baseUrl} 10)`,
		};
	}

	private get url() {
		return `${this.baseUrl}/v${this.version}`;
	}

	public async makeRequest<T>(options: RestRequestOptions<T>): Promise<T> {
		if (!options.method || !options.url) {
			throw new Error("Invalid request parameters: Method and URL must be provided.");
		}

		const endpoint = `${this.url}${options.url}`;

		const rateLimit = this.rateLimitCache.get(endpoint);
		if (rateLimit && rateLimit.remaining <= 0 && Date.now() < rateLimit.reset) {
			await new Promise((resolve) => {
				setTimeout(resolve, rateLimit.reset - Date.now());
			});
		}

		const response = await request(endpoint, {
			query: options.query,
			body: options.body,
			method: options.method,
			responseHeader: "raw",
			headers: {
				...this.defaultHeaders,
				...options.headers,
			},
		});

		const rateLimitHeaders = {
			limit: Number.parseInt((response.headers["x-ratelimit-limit"] as string), 10),
			remaining: Number.parseInt((response.headers["x-ratelimit-remaining"] as string), 10),
			reset: Number.parseInt((response.headers["x-ratelimit-reset"] as string), 10) * 1_000,
		};
		this.rateLimitCache.set(endpoint, rateLimitHeaders);

		if (response.statusCode === HttpResponseCodes.TooManyRequests) {
			const retryAfter = Number.parseInt((response.headers["retry-after"] as string), 10) * 1_000;
			await new Promise((resolve) => {
				setTimeout(resolve, retryAfter);
			});
			return this.makeRequest(options);
		}

		let data = "";
		for await (const chunk of response.body) {
			data += chunk.toString();
		}

		return JSON.parse(data) as T;
	}
}
