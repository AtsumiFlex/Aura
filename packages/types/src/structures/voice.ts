/**
 * @see {@link https://discord.com/developers/docs/resources/voice#voice-resource}
 */

import type { ISO8601Timestamp, Nullable, Snowflake } from "../globals";

/**
 * @see {@link https://discord.com/developers/docs/resources/voice#voice-state-object-voice-state-structure}
 */
export type VoiceStateStructure = {
	channel_id: Nullable<Snowflake>;
	deaf: boolean;
	guild_id?: Snowflake;
	member?: object; // TODO: GuildMemberStructure
	mute: boolean;
	request_to_speak_timestamp: Nullable<ISO8601Timestamp>;
	self_deaf: boolean;
	self_mute: boolean;
	self_stream?: boolean;
	self_video: boolean;
	session_id: string;
	suppress: boolean;
	user_id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/voice#voice-region-object-voice-region-structure}
 */
export type VoiceRegionStructure = {
	custom: boolean;
	deprecated: boolean;
	id: string;
	name: string;
	optimal: boolean;
};
