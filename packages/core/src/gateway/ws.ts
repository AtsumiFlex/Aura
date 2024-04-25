import type Buffer from "node:buffer";
import { clearInterval, clearTimeout, setInterval, setTimeout } from "node:timers";
import EventEmitter from "eventemitter3";
import WebSocket from "ws";
import { GatewayOpcodes } from "../opcodes/gateway";

export class GatewayWebSocket extends EventEmitter {
	private heartbeatInterval: NodeJS.Timeout | null = null;

	private reconnectInterval: NodeJS.Timeout | null = null;

	private _ws: WebSocket | null = null;

	private _url: string = "wss://gateway.discord.gg/?v=10&encoding=json";

	public constructor() {
		super();
		this.connect();
	}

	public send(data: any): void {
		if (this._ws === null || this._ws.readyState !== WebSocket.OPEN) {
			throw new Error("WebSocket is not connected");
		}

		this._ws.send(JSON.stringify(data));
	}

	public close(code?: number | undefined, data?: Buffer | string | undefined): void {
		if (this._ws === null) {
			throw new Error("WebSocket is not connected");
		}

		this.stopHeartbeat();
		this._ws.close(code, data);
		this._ws = null;
	}

	public destroy(): void {
		this.close();
		if (this.reconnectInterval) {
			clearTimeout(this.reconnectInterval);
			this.reconnectInterval = null;
		}
	}

	private connect(): void {
		if (this._ws !== null) {
			return;
		}

		this._ws = new WebSocket(this._url);
		this._ws.on("open", () => {
			this.startHeartbeat();
			this.emit("open");
		});

		this._ws.on("message", (data) => {
			// eslint-disable-next-line @typescript-eslint/no-base-to-string
			this.emit("message", JSON.stringify(JSON.parse(data.toString())));
		});

		this._ws.on("error", (error) => {
			this.emit("error", error);
		});

		this._ws.on("close", (closEvent) => {
			this.emit("close", closEvent);
			this.stopHeartbeat();
			this.reconnect();
		});
	}

	private startHeartbeat() {
		this.heartbeatInterval = setInterval(() => {
			this.send({
				op: GatewayOpcodes.Heartbeat,
				d: Date.now(),
			});
		}, 45_000);
	}

	private stopHeartbeat() {
		if (this.heartbeatInterval) {
			clearInterval(this.heartbeatInterval);
			this.heartbeatInterval = null;
		}
	}

	private reconnect() {
		if (!this.reconnectInterval) {
			this.reconnectInterval = setTimeout(() => {
				this.connect();
			}, 5_000);
		}
	}
}
