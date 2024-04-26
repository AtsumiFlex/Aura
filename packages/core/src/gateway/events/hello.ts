/**
 * @fileoverview Hello event
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#hello}
 */

import type { Integer } from "../../base/base";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#hello-hello-structure}
 */
export type HelloStructure = {
	heartbeat_interval: Integer;
};
