import { GatewayWebSocket } from "./websockets";

export class Client extends GatewayWebSocket {
	public constructor() {
		super();
		this.on("connected", () => {});
	}
}
