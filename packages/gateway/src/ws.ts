import { BaseWsUrl } from "@aurajs/core";
import WebSocket from "ws";

export class Gateway extends WebSocket {
	public constructor() {
		super(BaseWsUrl);
	}
}
