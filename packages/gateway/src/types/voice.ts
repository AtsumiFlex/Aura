/**
 * @fileoverview This file defines the types for the voice server update event in the application.
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#voice}
 */

import type { Snowflake } from "@aurajs/types";

/**
 * @typedef {object} VoiceServerUpdateEventFields
 * @description Type for the fields of the VoiceServerUpdate event.
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#voice-server-update-voice-server-update-event-fields}
 * @property
 */
export type VoiceServerUpdateEventFields = {
	endpoint: string;
	guild_id: Snowflake;
	token: string;
};
