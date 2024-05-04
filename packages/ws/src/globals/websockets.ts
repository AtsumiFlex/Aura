import { clearInterval, setInterval } from "node:timers";
import EventEmitter from "eventemitter3";
import type { MessageEvent } from "ws";
import WebSocket from "ws";
import type { GatewayPayloadInfer } from "./gateway";

export class GatewayWebSocket extends EventEmitter {
	public ws: WebSocket | null = null;

	private readonly _url: string = "wss://gateway.discord.gg/?v=10&encoding=json";

	private _heartbeatInterval: NodeJS.Timeout | null = null;

	private _sequence: number | null = null;

	public constructor() {
		super();
		this.connect();
	}

	private connect() {
		this.ws = new WebSocket(this._url);

		this.ws.on("open", () => {
			console.log("Connected to the Discord Gateway");
			this.emit("connected");
			this.startHeartbeat();
		});

		this.ws.on("message", (data: MessageEvent) => {
			console.log("Message from Discord:", data);
			this.handleMessage(data);
		});

		this.ws.on("error", (error) => {
			console.error("WebSocket error:", error);
			this.emit("error", error);
		});

		this.ws.on("close", (code, reason) => {
			console.log(`WebSocket closed: ${code} ${reason}`);
			this.cleanup();
			this.emit("disconnected", code, reason);
		});
	}

	private handleMessage(data: WebSocket.MessageEvent) {
		const message: GatewayPayloadInfer = JSON.parse(data.toString());
		if (message.s) {
			this._sequence = message.s;
		}

		// this.emit(message.t, GatewayEventExtends[message.t] ? GatewayEventExtends[message.t] : message.d); TODO: A le faire de tout urgence
	}

	private startHeartbeat() {
		const interval = 41_250;
		this._heartbeatInterval = setInterval(() => {
			if (this.ws && this.ws.readyState === WebSocket.OPEN) {
				this.ws.send(JSON.stringify({
					op: 1,
					d: this._sequence,
				}));
				this.emit("debug", "Heartbeat sent");
			}
		}, interval);
	}

	private cleanup() {
		if (this._heartbeatInterval) {
			clearInterval(this._heartbeatInterval);
			this._heartbeatInterval = null;
		}

		this.ws = null;
		this._sequence = null;
	}
}
