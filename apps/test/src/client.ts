import type { ClientOptions } from "@aurajs/core";
import { Client } from "@aurajs/core";

export default class Zen extends Client {
	public constructor(token: string, options: ClientOptions) {
		super(token, options);
	}
}
