import { BaseWsUrl } from "@aurajs/core";
import WebSocket from "ws";

/*
* OPCODE: 0 - Dispatch
* OPCODE: 1 - Heartbeat
* OPCODE: 2 - Identify / Intents
* OPCODE: 3 - Presence Update
* OPCODE: 4 - Voice State Update
* OPCODE: 5 - Voice Server Ping
* OPCODE: 6 - Resume
* OPCODE: 7 - Reconnect
* OPCODE: 8 - Request Guild Members
* OPCODE: 9 - Invalid Session
* OPCODE: 10 - Hello
* OPCODE: 11 - Heartbeat ACK
*/
type ExampleGatewayEvent = {
	d: any;
	op: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
	s: number;
	t: string;
};

const ws = new WebSocket(`${BaseWsUrl}/?v=10&encoding=json`);

ws.on("open", () => {
	const identifyPayload = {
		op: 2,
		d: {
			token: "YOUR_BOT_TOKEN",
			intents: 513,
			properties: {
				$os: "linux",
				$browser: "my_library",
				$device: "my_library",
			},
		},
	};

	ws.send(JSON.stringify(identifyPayload));
});

ws.on("message", (data) => {
	const payload: ExampleGatewayEvent = JSON.parse(data.toString());
	console.log(payload);

	if (payload.op === 10) {
		// Start sending heartbeat to keep the connection alive
		const heartbeatInterval = payload.d.heartbeat_interval;
		setInterval(() => {
			ws.send(JSON.stringify({
				op: 1,
				d: null,
			}));
		}, heartbeatInterval);
	}
});

ws.on("error", (error) => {
	console.error("WebSocket error:", error);
});

ws.on("close", () => {
	console.log("Disconnected from Discord Gateway");
	// Handle disconnection logic here
	// You may want to attempt to reconnect depending on the reason for disconnection
});
