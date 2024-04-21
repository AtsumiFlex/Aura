import { clearInterval, setInterval, setTimeout } from "node:timers";
import { BaseWsUrl } from "@aurajs/core";
import { GatewayIntents, GatewayOpcodes } from "@aurajs/types";
import EventEmitter from "eventemitter3";
import WebSocket from "ws";

type ExampleGatewayEvent = {
	d: any;
	op: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
	s: number;
	t: string;
};

class GatewayClient extends EventEmitter {
	private ws: WebSocket | null = null;

	private heartbeatInterval: NodeJS.Timeout | null = null;

	private identified: boolean = false; // Flag pour éviter l'identification multiple

	public constructor() {
		super();
	}

	public connect(): void {
		this.ws = new WebSocket(BaseWsUrl);
		this.identified = false; // Réinitialisation du flag d'identification

		this.ws.on("open", () => {
			console.log("Connected to Discord Gateway");
		});

		this.ws.on("message", (data: WebSocket.Data) => {
			const message = JSON.parse(data.toString());
			this.emit("message", message);
			this.handleMessage(message);
		});

		this.ws.on("close", (code, reason) => {
			console.log(`Disconnected from Discord Gateway with code: ${code}, reason: ${reason}`);
			this.emit("close");
			if (code !== 4_005) {
				setTimeout(() => this.connect(), 5_000);
			}
		});

		this.ws.on("error", (error) => {
			console.error("WebSocket error:", error);
			this.emit("error", error);
		});
	}

	public disconnect(): void {
		if (this.ws) {
			this.ws.close();
			this.ws = null;
		}
	}

	private handleMessage(message: any): void {
		console.log("Received op:", message.op);
		switch (message.op) {
			case 10:
				this.startHeartbeat(message.d.heartbeat_interval);
				if (!this.identified) {
					this.identify();
					this.identified = true; // Marque comme identifié
				}

				break;
			case 11:
				console.log("Heartbeat acknowledged");
				break;
			default:
				console.log("Received message:", message);
				break;
		}
	}

	private startHeartbeat(interval: number): void {
		if (this.heartbeatInterval) {
			clearInterval(this.heartbeatInterval);
		}

		this.heartbeatInterval = setInterval(() => {
			this.sendHeartbeat();
		}, interval);
	}

	private sendHeartbeat(): void {
		if (this.ws && this.ws.readyState === WebSocket.OPEN) {
			const payload = {
				op: GatewayOpcodes.Heartbeat,
				d: null,
			};
			this.ws.send(JSON.stringify(payload));
			console.log("Heartbeat sent");
		}
	}

	private identify(): void {
		if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
			return;
		}

		const intents = [GatewayIntents.Guilds, GatewayIntents.GuildMembers, GatewayIntents.GuildModeration, GatewayIntents.GuildEmojisAndStickers, GatewayIntents.GuildIntegrations, GatewayIntents.GuildWebhooks, GatewayIntents.GuildInvites, GatewayIntents.GuildVoiceStates, GatewayIntents.GuildPresences, GatewayIntents.GuildMessages, GatewayIntents.GuildMessageReactions, GatewayIntents.GuildMessageTyping, GatewayIntents.DirectMessages, GatewayIntents.DirectMessageReactions, GatewayIntents.DirectMessageTyping, GatewayIntents.MessageContent, GatewayIntents.GuildScheduledEvents, GatewayIntents.AutoModerationConfiguration, GatewayIntents.AutoModerationExecution, GatewayIntents.GuildMessagePolls, GatewayIntents.DirectMessagePolls];
		const payload: Partial<ExampleGatewayEvent> = {
			op: GatewayOpcodes.Identify,
			d: {
				token: "my_token",
				intents: intents.reduce((acc, intent) => acc | intent, 0),
				properties: {
					$os: "linux",
					$browser: "my_library",
					$device: "my_library",
				},
			},
		};
		this.ws.send(JSON.stringify(payload));
	}
}

const client = new GatewayClient();
client.on("message", (message) => {
	console.log("Received message:", message);
});
client.connect();
