import { Integer } from "@aurajs/core";
import { z } from "zod";

/**
 * Hello
 *
 * Sent on connection to the websocket. Defines the heartbeat interval that an app should heartbeat to.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#hello-hello-structure}
 */
export const HelloStructure = z.object({
	/**
	 * Interval (in milliseconds) an app should heartbeat with
	 */
	heartbeat_interval: Integer,
});

/**
 * Hello Infer
 *
 * Is used to infer the type of the {@link HelloStructure} object.
 */
export type HelloInfer = z.infer<typeof HelloStructure>;
