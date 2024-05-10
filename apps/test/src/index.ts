import { GatewayWebSocket } from "@aurajs/gateway";

const gateway = new GatewayWebSocket();
gateway.on("error", console.error);
gateway.on("debug", console.debug);
gateway.on("close", (code, reason) => {
	console.log(`WebSocket closed with code ${code}: ${reason}`);
});
gateway.on("open", () => {
	gateway.send({
		op: 2,
		s: null,
		t: null,
		d: {
			token: "",
			intents: 513,
			properties: {
				os: "linux",
				browser: "aurajs",
				device: "aurajs",
			},
		},
	});
});
