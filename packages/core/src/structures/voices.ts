/**
 * Voice Resource
 *
 * Used to represent a user's voice connection status.
 *
 * @see {@link https://discord.com/developers/docs/resources/voice#voice-resource}
 */

import { z } from "zod";
import { ISO8601, Snowflake } from "../globals/globals";

/**
 * Voice Region Structure
 *
 * Represents a voice region.
 *
 * @see {@link https://discord.com/developers/docs/resources/voice#voice-region-object-voice-region-structure}
 */
export const VoiceRegionStructure = z.object({
	id: z.string(),
	name: z.string(),
	optimal: z.boolean(),
	deprecated: z.boolean(),
	custom: z.boolean(),
});

/**
 * Voice Region Structure Infer
 *
 * The inferred type of the VoiceRegionStructure zod object.
 */
export type VoiceRegionStructureInfer = z.infer<typeof VoiceRegionStructure>;

/**
 * Voice State Structure
 *
 * Represents a user's voice connection status.
 *
 * @see {@link https://discord.com/developers/docs/resources/voice#voice-state-object-voice-state-structure}
 */
export const VoiceStateStructure = z.object({
	guild_id: Snowflake.optional(),
	channel_id: Snowflake.nullable(),
	user_id: Snowflake,
	member: z.any().optional(), // TODO: Guild Member Structure
	session_id: z.string(),
	deaf: z.boolean(),
	mute: z.boolean(),
	self_deaf: z.boolean(),
	self_mute: z.boolean(),
	self_stream: z.boolean().optional(),
	self_video: z.boolean(),
	suppress: z.boolean(),
	request_to_speak_timestamp: ISO8601.optional(),
});

/**
 * Voice State Structure Infer
 *
 * The inferred type of the VoiceStateStructure zod object.
 */
export type VoiceStateStructureInfer = z.infer<typeof VoiceStateStructure>;
