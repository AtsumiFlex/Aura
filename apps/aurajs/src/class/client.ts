import type { IntegerInfer } from "@aurajs/core";
import { GatewayOpcodes } from "@aurajs/core";
import type {
	GatewayIntents,
	GatewayPresenceUpdateStructureInfer,
	GatewayWebSocketOptionsInfer,
	IdentifyStructureInfer,
} from "@aurajs/gateway";
import { GatewayWebSocket } from "@aurajs/gateway";
import type { RestOptions } from "@aurajs/rest";
import { GetGatewayBot, Rest } from "@aurajs/rest";
import EventEmitter from "eventemitter3";

export type ClientOptions = {
	intents: GatewayIntents[];
	large_threshold?: IntegerInfer;
	presence?: GatewayPresenceUpdateStructureInfer;
	rest?: RestOptions;
	shard?: "auto" | [IntegerInfer, IntegerInfer];
	ws?: GatewayWebSocketOptionsInfer;
};

export class Client<T> extends EventEmitter {
	public constructor(public token: string, public options: ClientOptions) {
		super();
		void this._connect();
	}

	public get rest() {
		return new Rest(this.token, this.options?.rest);
	}

	public get ws() {
		return new GatewayWebSocket(this.options?.ws);
	}

	private async _connect() {
		let shard: [IntegerInfer, IntegerInfer] | undefined;
		if (this.options.shard === "auto") {
			const gateway = await this.rest.makeRequest(GetGatewayBot());
			shard = [0, gateway.shards];
		} else {
			shard = this.options.shard;
		}

		this.ws.on("open", () => {
			const identify: IdentifyStructureInfer = {
				token: this.token,
				intents: this.options.intents.reduce((a, b) => a | b, 0),
				properties: {
					os: "linux",
					browser: "aurajs",
					device: "aurajs",
				},
				compress: this.options.ws?.compress ?? false,
				presence: this.options.presence,
				large_threshold: this.options.large_threshold ?? 50,
				shard,
			};

			this.ws.send({
				op: GatewayOpcodes.Identify,
				t: null,
				s: null,
				d: identify,
			});
		});
	}
}
