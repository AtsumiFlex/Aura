/**
 * Voice Resource
 *
 * @see {@link https://discord.com/developers/docs/resources/voice#voice-resource}
 */

import { z } from "zod";
import { ISO8601Timestamp, Snowflake } from "../globals/formatters";
import { GuildMemberStructure } from "./guilds";

/**
 * Voice Region Structure
 *
 * @see {@link https://discord.com/developers/docs/resources/voice#voice-region-object-voice-region-structure}
 */
export const VoiceRegionStructure = z.object({
	/**
	 * Unique ID for the region
	 */
	id: z.string(),
	/**
	 * Name of the region
	 */
	name: z.string(),
	/**
	 * True for a single server that is closest to the current user's client
	 */
	optimal: z.boolean(),
	/**
	 * Whether this is a deprecated voice region (avoid switching to these)
	 */
	deprecated: z.boolean(),
	/**
	 * Whether this is a custom voice region (used for events/etc)
	 */
	custom: z.boolean(),
});

/**
 * Voice Region Structure Infer
 *
 * Is used to infer the type of the {@link VoiceRegionStructure} object.
 */
export type VoiceRegionStructureInfer = z.infer<typeof VoiceRegionStructure>;

/**
 * Voice State Structure
 *
 * @see {@link https://discord.com/developers/docs/resources/voice#voice-state-object-voice-state-structure}
 */
export const VoiceStateStructure = z.object({
	/**
	 * The guild id this voice state is for
	 */
	guild_id: Snowflake.optional(),
	/**
	 * The channel id this user is connected to
	 */
	channel_id: Snowflake.nullable(),
	/**
	 * The user id this voice state is for
	 */
	user_id: Snowflake,
	/**
	 * The guild member this voice state is for
	 */
	member: GuildMemberStructure.partial().optional(),
	/**
	 * The session id for this voice state
	 */
	session_id: z.string(),
	/**
	 * Whether this user is deafened by the server
	 */
	deaf: z.boolean(),
	/**
	 * Whether this user is muted by the server
	 */
	mute: z.boolean(),
	/**
	 * Whether this user is locally deafened
	 */
	self_deaf: z.boolean(),
	/**
	 * Whether this user is locally muted
	 */
	self_mute: z.boolean(),
	/**
	 * Whether this user is streaming using "Go Live"
	 */
	self_stream: z.boolean().optional(),
	/**
	 * Whether this user's camera is enabled
	 */
	self_video: z.boolean(),
	/**
	 * Whether this user's permission to speak is denied
	 */
	suppress: z.boolean(),
	/**
	 * The time at which the user requested to speak
	 */
	request_to_speak_timestamp: ISO8601Timestamp.nullable(),
});

/**
 * Voice State Structure Infer
 *
 * Is used to infer the type of the {@link VoiceStateStructure} object.
 */
export type VoiceStateStructureInfer = z.infer<typeof VoiceStateStructure>;
