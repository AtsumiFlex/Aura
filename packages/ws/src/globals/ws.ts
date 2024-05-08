import { clearInterval, setInterval } from "node:timers";
import { ApiVersions, GatewayOpcodes } from "@aurajs/core";
import EventEmitter from "eventemitter3";
import WebSocket from "ws";
import type { GatewayPayloadStructureInfer } from "../structures/payload";
import type { GatewaySendEvents } from "./events";

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

	public send<T extends keyof GatewaySendEvents>(opcodes: T, ...data: GatewaySendEvents[T]) {
		if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
			this.emit("error", new Error("WebSocket is not connected"));
			return;
		}

		const payload: GatewayPayloadStructureInfer = {
			op: opcodes,
			d: data,
			s: null,
			t: null,
		};

		this.ws.send(JSON.stringify(payload));
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
			this.send(GatewayOpcodes.Heartbeat, null);
		}, this._interval);
	}
}
