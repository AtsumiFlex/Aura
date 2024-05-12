import type { GatewayIntents, GatewayWebSocketOptionsInfer } from "@aurajs/gateway";
import { GatewayWebSocket } from "@aurajs/gateway";
import type { RestOptions } from "@aurajs/rest";
import { Rest } from "@aurajs/rest";
import EventEmitter from "eventemitter3";

export type ClientOptions = {
	intents: GatewayIntents[];
	rest: RestOptions;
	ws: GatewayWebSocketOptionsInfer;
};

export class Client extends EventEmitter {
	public constructor(public token: string, public options?: Partial<ClientOptions>) {
		super();
		this.ws.on("open", () => {
			const identify = {};
			this.ws.send(identify);
		});
	}

	public get rest() {
		return new Rest(this.token, this.options?.rest);
	}

	public get ws() {
		return new GatewayWebSocket(this.options?.ws);
	}
}
