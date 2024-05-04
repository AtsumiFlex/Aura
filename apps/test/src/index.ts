import { request } from "undici";

export type RestOptions = {
	authenticationType: "Bearer" | "Bot";
	baseUrl?: string;
	cdnUrl?: string;
	version?: number;
};

export class Rest {
	public token: string;

	public authenticationType: "Bearer" | "Bot";

	public baseUrl: string;

	public cdnUrl: string;

	public version: number;

	public constructor(token: string, options: RestOptions) {
		this.token = token;
		this.authenticationType = options.authenticationType;
		this.baseUrl = options.baseUrl ?? "https://discord.com/api";
		this.cdnUrl = options.cdnUrl ?? "https://cdn.discordapp.com";
		this.version = options.version ?? 10;
	}

	private get url() {
		return `${this.baseUrl}/v${this.version}`;
	}

	public async makeRequest(options: any) {
		return request(`${this.url}/${options.url}`, {
			query: options.query,
			body: options.body,
			method: options.method,
			responseHeader: "raw",
			headers: {
				"Content-Type": "application/json",
				Authorization: `${this.authenticationType} ${this.token}`,
			},
		});
	}
}

const rest = new Rest("", { authenticationType: "Bot" });

async function test() {
	const response = await rest.makeRequest({
		url: "users/@me",
		method: "GET",
	});
	for await (const data of response.body) {
		console.log("data", JSON.parse(data));
	}
}

void test();
