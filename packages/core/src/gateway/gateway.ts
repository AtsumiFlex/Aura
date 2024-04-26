import type Buffer from "node:buffer";
import { clearInterval, clearTimeout, setInterval, setTimeout } from "node:timers";
import EventEmitter from "eventemitter3";
import WebSocket from "ws";
import { GatewayOpcodes } from "../opcodes/gateway";
import type { GatewayPayload } from "./events/globals";

type GatewayConfig = {
	heartbeatIntervalMs?: number;
	reconnectIntervalMs?: number;
};

export class GatewayWebSocket extends EventEmitter {
	public ws: WebSocket | null = null;

	private heartbeatInterval: NodeJS.Timeout | null = null;

	private reconnectInterval: NodeJS.Timeout | null = null;

	private readonly config: GatewayConfig;

	private _url: string = "wss://gateway.discord.gg/?v=10&encoding=json";

	public constructor(config?: GatewayConfig) {
		super();
		this.config = {
			heartbeatIntervalMs: config?.heartbeatIntervalMs ?? 30_000,
			reconnectIntervalMs: config?.reconnectIntervalMs ?? 5_000,
		};
		this.connect();
	}

	public send(data: GatewayPayload): void {
		if (this.ws === null || this.ws.readyState !== WebSocket.OPEN) {
			throw new Error("WebSocket is not connected");
		}

		this.ws.send(JSON.stringify(data));
	}

	public close(code?: number, data?: Buffer | string): void {
		if (this.ws === null) {
			throw new Error("WebSocket is not connected");
		}

		this.stopHeartbeat();
		this.ws.close(code, data);
		this.emit("closed");
	}

	private connect(): void {
		if (this.ws) {
			this.ws.removeAllListeners();
			this.ws.close();
		}

		this.ws = new WebSocket(this._url);
		this.ws.on("open", () => {
			this.startHeartbeat();
			this.emit("connected");
		});
		this.ws.on("message", (data) => {
			this.handleMessage(data);
		});
		this.ws.on("close", () => {
			this.stopHeartbeat();
			this.reconnect();
			this.emit("disconnected");
		});
		this.ws.on("error", (error) => {
			this.emit("error", error);
		});
	}

	private handleMessage(data: WebSocket.Data): void {
		let message;
		try {
			// eslint-disable-next-line @typescript-eslint/no-base-to-string
			message = JSON.parse(data.toString());
		} catch {
			this.emit("error", new Error("Failed to parse incoming message"));
			return;
		}

		this.emit("message", message);
	}

	private startHeartbeat(): void {
		this.heartbeatInterval = setInterval(() => {
			this.send({ op: GatewayOpcodes.Heartbeat });
			this.emit("heartbeat");
		}, this.config.heartbeatIntervalMs);
	}

	private stopHeartbeat(): void {
		if (this.heartbeatInterval) {
			clearInterval(this.heartbeatInterval);
		}
	}

	private reconnect(): void {
		if (this.reconnectInterval) {
			clearTimeout(this.reconnectInterval);
		}

		this.reconnectInterval = setTimeout(() => {
			this.connect();
			this.emit("reconnecting");
		}, this.config.reconnectIntervalMs);
	}
}
