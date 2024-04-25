/**
 * @fileoverview Voice event
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#voice}
 */

import type { Snowflake } from "@aurajs/core";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#voice-server-update-voice-server-update-event-fields}
 */
export type VoiceServerUpdateEventFields = {
	endpoint: string | null;
	guild_id: Snowflake;
	token: string;
};
