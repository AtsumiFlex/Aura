import { GatewayIntents } from "@aurajs/ws";
import { Client } from "./class/client";

const client = new Client("", { intents: [GatewayIntents.Guilds] });
client.ws.on("debug", (message) => {
	console.log(message);
});
client.ws.on("close", (code, reason) => {
	console.log(code, reason);
});
client.ws.on("error", (error) => {
	console.log(error);
});
