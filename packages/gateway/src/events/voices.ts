import { Snowflake } from "@aurajs/core";
import { z } from "zod";

/**
 * Voice Server Update Event Fields
 *
 * Sent when a guild's voice server is updated. This is sent when initially connecting to voice, and when the current voice instance fails over to a new server.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#voice-server-update-voice-server-update-event-fields}
 */
export const VoiceServerUpdateEventFields = z.object({
	/**
	 * Voice connection token
	 */
	token: z.string(),
	/**
	 * Guild this voice server update is for
	 */
	guild_id: Snowflake,
	/**
	 * Voice server host
	 */
	endpoint: z.string().nullable(),
});

/**
 * Voice Server Update Event Fields Infer
 *
 * Is used to infer the type of the {@link VoiceServerUpdateEventFields} object.
 */
export type VoiceServerUpdateEventFieldsInfer = z.infer<typeof VoiceServerUpdateEventFields>;
