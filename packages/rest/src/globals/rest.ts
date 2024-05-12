import type { AuthorizationTypes, BitwisePermissionFlags, DiscordHeadersInfer, OAuth2Scopes } from "@aurajs/core";
import { ApiVersions, BASE_URL } from "@aurajs/core";
import EventEmitter from "eventemitter3";
import type { Dispatcher } from "undici";
import { request } from "undici";

export type RestMakeRequestOptions<T> = {
	body?: any;
	headers?: DiscordHeadersInfer;
	method: Dispatcher.HttpMethod;
	path: string;
	permissions?: BitwisePermissionFlags[];
	query?: Record<string, unknown>;
	scopes?: OAuth2Scopes[];
	readonly type?: T;
};

export type RestOptions = {
	type: AuthorizationTypes;
	url: string;
	version: ApiVersions;
};

export class Rest extends EventEmitter {
	public constructor(public token: string, public options?: Partial<RestOptions>) {
		super();
	}

	private get _url() {
		const url = this.options?.url ?? BASE_URL;
		const version = this.options?.version ?? ApiVersions.V10;
		return {
			path: `${url}/${version}`,
			version,
		};
	}

	private get _headers(): DiscordHeadersInfer {
		return {
			Authorization: `Bot ${this.token}`,
			"User-Agent": `AuraJs (${this._url.path}, ${this._url.version})`,
			"Content-Type": "application/json",
		};
	}

	public async makeRequest<T>(options: RestMakeRequestOptions<T>): Promise<T> {
		const response = await request(`${this._url.path}${options.path}`, {
			body: options.body ? JSON.stringify(options.body) : undefined,
			query: options.query,
			headers: {
				...this._headers,
				...options.headers,
			},
			method: options.method,
		});

		let data = {} as T;
		for await (const chunk of response.body) {
			data = JSON.parse(chunk.toString());
		}

		return data;
	}
}
