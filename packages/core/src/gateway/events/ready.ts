/**
 * @fileoverview
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#ready}
 */

import type { APIVersions, Integer } from "../../base/base";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#ready-ready-event-fields}
 */
export type ReadyEventFields = {
	guilds: object[]; // TODO: UnavailableGuild object
	resume_gateway_url: string;
	session_id: string;
	shard?: [shard_id: Integer, num_shards: Integer];
	user: object; // TODO: User object
	v: APIVersions;
};
