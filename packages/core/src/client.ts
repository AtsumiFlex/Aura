import type { Integer } from "./base/base";
import type { GatewayIdentify, GatewayPresenceUpdateStructure } from "./gateway/events/globals";
import { GatewayWebSocket } from "./gateway/gateway";
import type { GatewayIntents } from "./gateway/intents";
import { GatewayOpcodes } from "./opcodes/gateway";

export type ClientOptions = {
	compress?: boolean;
	intents: GatewayIntents[];
	large_threshold?: number;
	presence?: GatewayPresenceUpdateStructure;
	shard?: "auto" | [Integer, Integer];
};

export class Client extends GatewayWebSocket {
	public token: string | null = null;

	public options: ClientOptions;

	public constructor(token: string, options: ClientOptions) {
		super();
		this.token = token;
		this.options = options;
		this.once("connected", () => {
			const identify: GatewayIdentify = {
				token: this.token!,
				intents: this.options.intents.reduce((acc, curr) => acc | curr, 0),
				large_threshold: this.options.large_threshold ?? 50,
				presence: this.options.presence,
				compress: this.options.compress,
				properties: {
					os: "linux",
					browser: "aurajs",
					device: "aurajs",
				},
			};

			this.send({
				op: GatewayOpcodes.Identify,
				d: identify,
			});
		});
	}
}
