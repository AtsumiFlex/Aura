import { GatewayOpcodes, GatewayWebSocket } from "@aurajs/core";

const gateway = new GatewayWebSocket();
gateway.on("connected", () => {
	gateway.ws?.send(JSON.stringify({
		op: GatewayOpcodes.Identify,
		d: {
			token: "",
			intents: [2, 4, 8].reduce((a, b) => a | b, 0),
			properties: {
				os: "linux",
				browser: "aurajs",
				device: "aurajs",
			},
		},
	}));
});
gateway.on("message", (message) => {
	console.log("Received message:", message);
});
