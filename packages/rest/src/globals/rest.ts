import type { DiscordHeadersInfer } from "@aurajs/core";
import { ApiVersions, BASE_URL, CDN_URL } from "@aurajs/core";
import type { Dispatcher } from "undici";
import { request } from "undici";

export type RestMakeRequestOptions = Pick<Dispatcher.DispatchOptions, "method" | "query"> & {
	body?: any;
	headers?: DiscordHeadersInfer;
	url: string;
};

export class Rest {
	public token: string | null = null;

	public version = ApiVersions.V10;

	public api = BASE_URL;

	public cdn = CDN_URL;

	public constructor(token: string | null) {
		this.token = token;
	}

	public get headers(): Pick<DiscordHeadersInfer, "Authorization" | "User-Agent"> {
		return {
			Authorization: `Bot ${this.token}`,
			"User-Agent": `AuraJs (${this.api}, ${this.version})`,
		};
	}

	public async makeRequest(options: RestMakeRequestOptions) {
		const response = await request(`${this.api}${options.url}`, {
			method: options.method,
			body: options.body,
			query: options.query,
			headers: {
				...this.headers,
				...options.headers,
			},
		});

		let data = "";
		for await (const chunk of response.body) {
			data += chunk;
		}

		return JSON.parse(data);
	}
}
