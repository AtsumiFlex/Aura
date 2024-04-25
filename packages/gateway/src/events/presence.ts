/**
 * @fileoverview Presence events
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#presence}
 */

import type { ActivityStructure } from "./activity";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#presence-update-presence-update-event-fields}
 */
export type PresenceUpdateEventFields = {
	activities: ActivityStructure[];
	client_status: ClientStatusObject;
	guild_id: string;
	status: string;
	user: object; // TODO: User object
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#client-status-object}
 */
export type ClientStatusObject = {
	desktop?: string;
	mobile?: string;
	web?: string;
};
