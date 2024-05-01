import { z } from "zod";
import { ISO8601, Snowflake } from "../globals";
import { GuildMemberStructure } from "./guild";

export const VoiceRegionStructure = z.object({
	id: z.string(),
	name: z.string(),
	optimal: z.boolean(),
	deprecated: z.boolean(),
	custom: z.boolean(),
});
export type VoiceRegionInfer = z.infer<typeof VoiceRegionStructure>;

export const VoiceStateStructure = z.object({
	guild_id: Snowflake.optional(),
	channel_id: Snowflake.nullable(),
	user_id: z.string(),
	member: GuildMemberStructure.optional(),
	session_id: z.string(),
	deaf: z.boolean(),
	mute: z.boolean(),
	self_deaf: z.boolean(),
	self_mute: z.boolean(),
	self_stream: z.boolean().optional(),
	self_video: z.boolean(),
	suppress: z.boolean(),
	request_to_speak_timestamp: ISO8601.nullable(),
});
export type VoiceStateInfer = z.infer<typeof VoiceStateStructure>;
