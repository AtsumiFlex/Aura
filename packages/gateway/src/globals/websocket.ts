import { clearInterval, setInterval, setTimeout } from "node:timers";
import type { IntegerInfer } from "@aurajs/core";
import { ApiVersions, ApiVersionsEnum, GatewayOpcodes } from "@aurajs/core";
import EventEmitter from "eventemitter3";
import WebSocket from "ws";
import { z } from "zod";
import type { GatewayPayloadStructureInfer } from "../events/globals";

export const GatewayWebSocketOptions = z.object({
	compress: z.boolean(),
	encoding: z.union([z.literal("etf"), z.literal("json")]),
	version: ApiVersionsEnum,
});

export type GatewayWebSocketOptionsInfer = z.infer<typeof GatewayWebSocketOptions>;

export class GatewayWebSocket extends EventEmitter {
	public ws: WebSocket | null = null;

	public sessionId: string | null = null;

	private _heartbeatInterval: NodeJS.Timeout | null = null;

	private _heartbeatTimeout: IntegerInfer | null = null;

	private _sequence: number | null = null;

	private _reconnectAttempts = 0;

	public constructor(public options?: Partial<GatewayWebSocketOptionsInfer>) {
		super();
		this._connect();
	}

	private get _url() {
		const version = this.options?.version ?? ApiVersions.V10;
		const encoding = this.options?.encoding ?? "json";
		const compress = this.options?.compress ? "&compress=zlib-stream" : "";
		return `wss://gateway.discord.gg/?v=${version}&encoding=${encoding}${compress}`;
	}

	public send(data: GatewayPayloadStructureInfer) {
		if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
			this.emit("error", new Error("[WS] WebSocket is not open or ready to send data..."));
			return;
		}

		const dataStringify = JSON.stringify(data);
		this.emit("debug", `[WS] Sending data to WebSocket: ${dataStringify}`);
		this.ws.send(dataStringify, (error) => {
			if (error) {
				this.emit("error", error);
			}
		});
	}

	private _connect() {
		this.ws = new WebSocket(this._url);
		this.emit("debug", `[WS] Connecting to WebSocket: ${this.ws.url}`);

		this.ws.on("open", this._onOpen.bind(this));
		this.ws.on("message", this._onMessage.bind(this));
		this.ws.on("error", this._onError.bind(this));
		this.ws.on("close", this._onClose.bind(this));
	}

	private _onError(error: Error) {
		this.emit("error", error);
	}

	private _onClose(code: number, reason: string) {
		this.emit("close", `WebSocket closed: ${code} ${reason} - ${new Date().toISOString()}`);
		if (this._heartbeatInterval) {
			clearInterval(this._heartbeatInterval);
		}

		this.ws = null;
		this._attemptReconnect();
	}

	private _onMessage(data: WebSocket.RawData) {
		const dataString = data.toString();
		this.emit("debug", `[WS] Received data from WebSocket: ${dataString}`);

		let parsedData: GatewayPayloadStructureInfer;
		try {
			parsedData = JSON.parse(dataString);
		} catch (error) {
			this.emit("error", error);
			return;
		}

		this._handleMessage(parsedData);
	}

	private _handleMessage(data: GatewayPayloadStructureInfer) {
		// eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check
		switch (data.op) {
			case GatewayOpcodes.Hello: {
				this._heartbeatTimeout = data.d?.heartbeat_interval;
				this.emit("debug", `[WS] Heartbeat timeout: ${this._heartbeatTimeout} (ms)`);
				this._startHeartbeat();
				break;
			}

			case GatewayOpcodes.Resume: {
				this.sessionId = data.d?.session_id;
				this._sequence = data.d?.seq;
				this.emit("debug", `[WS] Resumed session: ${this.sessionId} with sequence: ${this._sequence}`);
				break;
			}

			case GatewayOpcodes.HeartbeatACK: {
				this.emit("debug", "[WS] Heartbeat ACK received...");
				break;
			}
		}
	}

	private _onOpen() {
		this.emit("debug", "Connected to WebSocket");
		this.emit("open");
	}

	private _startHeartbeat() {
		if (this._heartbeatInterval) {
			clearInterval(this._heartbeatInterval);
		}

		this._heartbeatInterval = setInterval(() => {
			this.send({
				op: GatewayOpcodes.Heartbeat,
				d: this._sequence,
				s: null,
				t: null,
			});
		}, 45_000);
	}

	private _attemptReconnect() {
		if (this._reconnectAttempts < 5) {
			setTimeout(() => {
				this.emit("debug", `Attempting to reconnect - Attempt ${this._reconnectAttempts + 1} - ${new Date().toISOString()}`);
				this._connect();
				this._reconnectAttempts++;
			}, 2 ** this._reconnectAttempts * 1_000);
		} else {
			this.emit("error", new Error("Max reconnect attempts reached"));
		}
	}
}
