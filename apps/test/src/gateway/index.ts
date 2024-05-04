import type { Test } from "./extends";
import { GatewayWebSocket } from "./websockets";

const gateway = new GatewayWebSocket();
gateway.on("connected", () => {
	gateway.ws?.send(JSON.stringify({
		op: 2,
		d: {
			token: "",
			intents: [1, 2, 4, 8].reduce((a, b) => a | b, 0),
			properties: {
				os: "linux",
				browser: "aurajs",
				device: "aurajs",
			},
		},
	}));
});
gateway.on("CHANNEL_CREATE", (channel: Test) => {
	console.log("EVENT EMITTED:", channel.id);
});
