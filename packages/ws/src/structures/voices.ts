import { Snowflake } from "@aurajs/core";
import { z } from "zod";

/**
 * Voice Server Update Event Fields
 *
 * Sent when a guild's voice server is updated
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#voice-server-update-voice-server-update-event-fields}
 */
export const VoiceServerUpdateEventFields = z.object({
	token: z.string(),
	guild_id: Snowflake,
	endpoint: z.string().nullable(),
});

/**
 * Voice Server Update Event Fields Infer
 *
 * Represents the inferred type of the {@link VoiceServerUpdateEventFields}
 */
export type VoiceServerUpdateEventFieldsInfer = z.infer<typeof VoiceServerUpdateEventFields>;

/**
 * Gateway Voice State Update Event Fields
 *
 * Sent when a user's voice state changes
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#voice-state-update}
 */
export const GatewayVoiceStateUpdateEventFields = z.object({
	guild_id: Snowflake,
	channel_id: Snowflake.optional(),
	self_mute: z.boolean(),
	self_deaf: z.boolean(),
});

/**
 * Gateway Voice State Update Event Fields Infer
 *
 * Represents the inferred type of the {@link GatewayVoiceStateUpdateEventFields}
 */
export type GatewayVoiceStateUpdateEventFieldsInfer = z.infer<typeof GatewayVoiceStateUpdateEventFields>;
