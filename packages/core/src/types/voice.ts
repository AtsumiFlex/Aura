// https://discord.com/developers/docs/resources/voice#voice-resource
import type { Snowflake } from "./global";

// https://discord.com/developers/docs/resources/voice#voice-state-object-voice-state-structure
export type VoiceStateStructure = {
	channel_id: Snowflake | null;
	deaf: boolean;
	guild_id?: Snowflake;
	member?: object;
	// TODO: Guild Member Object
	mute: boolean;
	request_to_speak_timestamp: string | null;
	self_deaf: boolean;
	self_mute: boolean;
	self_stream?: boolean;
	self_video: boolean;
	session_id: string;
	suppress: boolean;
	user_id: Snowflake;
};

// https://discord.com/developers/docs/resources/voice#voice-region-object-voice-region-structure
export type VoiceRegionStructure = {
	custom: boolean;
	deprecated: boolean;
	id: string;
	name: string;
	optimal: boolean;
};
