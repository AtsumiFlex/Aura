import { GatewayOpcodes } from "../opcodes/gateway";
import type { GatewayIntents } from "./intents";
import { GatewayWebSocket } from "./ws";

type ClientGatewayOptions = {
	compress?: boolean;
	intents: GatewayIntents[];
	large_threshold?: number;
	presence?: {
		activity?: {
			name: string;
			type: number;
			url?: string;
		};
		afk?: boolean;
		since?: number;
		status: string;
	}; // TODO: Implement the rest of the presence object
	shard?: "auto" | [number, number];
};

export class ClientGateway extends GatewayWebSocket {
	private readonly options: ClientGatewayOptions;

	private readonly token: string;

	public constructor(token: string, options: ClientGatewayOptions) {
		super();
		this.options = options;
		this.token = token;
		this.on("open", () => {
			this.send({
				op: GatewayOpcodes.Identify,
				d: {
					token: this.token,
					intents: this.options.intents.reduce((acc, intent) => acc | intent, 0),
					properties: {
						os: "linux",
						browser: "aurajs",
						device: "aurajs",
					},
				},
			});
		});
	}
}
