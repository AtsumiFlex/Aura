import { clearInterval, setInterval } from "node:timers";
import { ApiVersions, GatewayOpcodes } from "@aurajs/core";
import EventEmitter from "eventemitter3";
import WebSocket from "ws";
import type { GatewayPayloadStructureInfer } from "../structures/payload";

export class GatewayWebSocket extends EventEmitter {
	public ws: WebSocket | null = null;

	public sessionId: string | null = null;

	private _heartbeatInterval: NodeJS.Timeout | null = null;

	private _interval: number = 0;

	public constructor() {
		super();
		this._connect();
	}

	private get _url() {
		return `wss://gateway.discord.gg/?v=${ApiVersions.V10}&encoding=json`;
	}

	public send(data: Partial<GatewayPayloadStructureInfer>) {
		if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
			this.emit("error", new Error("WebSocket is not connected"));
			return;
		}

		this.ws.send(JSON.stringify(data));
	}

	private _connect() {
		this.ws = new WebSocket(this._url);

		this.ws.on("open", () => {
			this.emit("debug", `[WS] Connected to gateway with URL: ${this._url}`);
		});

		this.ws.on("message", (data) => {
			this._handleMessage(JSON.parse(data.toString()));
		});

		this.ws.on("close", (closeEvent, reason) => {
			this.emit("close", closeEvent, JSON.parse(reason.toString()));
		});

		this.ws.on("error", (error) => {
			this.emit("error", error);
		});
	}

	private _handleMessage(data: GatewayPayloadStructureInfer) {
		this.emit("debug", `[WS] Received message from gateway: ${JSON.stringify(data, null, 2)}`);

		if (data.op === GatewayOpcodes.Hello) {
			this._interval = data.d.heartbeat_interval;
			this._heartbeat();
			this.emit("hello");
		} else if (data.op === GatewayOpcodes.Dispatch) {
			this.emit(data.t as string, data.d);
		} else if (data.op === GatewayOpcodes.Reconnect) {
			this.emit("debug", "[WS] Received Reconnect opcode from gateway");
			this.ws?.close();
			this._connect();
		} else if (data.op === GatewayOpcodes.InvalidSession) {
			this.emit("debug", "[WS] Received InvalidSession opcode from gateway");
			this.sessionId = null;
		} else if (data.op === GatewayOpcodes.Resume) {
			this.sessionId = data.d.session_id;
		}
	}

	private _heartbeat() {
		if (this._heartbeatInterval) {
			clearInterval(this._heartbeatInterval);
		}

		this._heartbeatInterval = setInterval(() => {
			this.emit("debug", `[WS] Sending heartbeat to gateway with interval: ${this._interval}ms`);
			this.send({ op: GatewayOpcodes.Heartbeat });
		}, this._interval);
	}
}
