import type { AuthenticationTypeInfer } from "@aurajs/core";
import { API_BASE_URL, API_CDN_BASE_URL, ApiVersion } from "@aurajs/core";
import { type Dispatcher, request } from "undici";

export type RestRequestOptions<T> = Partial<Dispatcher.DispatchOptions> & {
	body?: any;
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

	public constructor(token: string, options: RestOptions) {
		this.token = token;
		this.authenticationType = options.authenticationType;
		this.baseUrl = options.baseUrl ?? API_BASE_URL;
		this.cdnUrl = options.cdnUrl ?? API_CDN_BASE_URL;
		this.version = options.version ?? ApiVersion.V10;
	}

	private get url() {
		return `${this.baseUrl}/v${this.version}`;
	}

	public async makeRequest<T>(options: RestRequestOptions<T>): Promise<T> {
		const response = await request(`${this.url}${options.url}`, {
			query: options.query,
			body: options.body,
			method: options.method,
			responseHeader: "raw",
			headers: {
				"Content-Type": "application/json",
				Authorization: `${this.authenticationType} ${this.token}`,
				...options.headers,
			},
		});

		let data = {} as T;

		for await (const chunk of response.body) {
			data = JSON.parse(chunk.toString());
		}

		return data;
	}
}
