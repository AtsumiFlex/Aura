import { GatewayOpcodes } from "@aurajs/core";
import { Rest } from "@aurajs/rest";
import type { GatewayIntents, IdentifyStructureInfer } from "@aurajs/ws";
import { GatewayWebSocket } from "@aurajs/ws";
import EventEmitter from "eventemitter3";

export type ClientOptions = {
	intents: GatewayIntents[];
};

export class Client extends EventEmitter {
	public token: string;

	public options: ClientOptions;

	public ws = new GatewayWebSocket();

	public constructor(token: string, options: ClientOptions) {
		super();
		this.token = token;
		this.options = options;
		this.ws.on("hello", () => {
			const identity: IdentifyStructureInfer = {
				token: this.token,
				intents: this.options.intents.reduce((acc, curr) => acc | curr, 0),
				properties: {
					os: "linux",
					browser: "aurajs",
					device: "aurajs",
				},
			};

			this.ws.send({
				op: GatewayOpcodes.Identify,
				d: identity,
			});
		});
	}

	public get rest() {
		return new Rest(this.token);
	}
}
