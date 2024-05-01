import { ApiVersionEnum } from "@aurajs/core";
import { z } from "zod";
import { Integer, Mixed, Snowflake } from "../globals";
import { GatewayOpcodesEnum } from "./opcodes";

export const GatewayURLQueryStringParams = z.object({
	v: ApiVersionEnum,
	encoding: z.union([z.literal("json"), z.literal("etf")]),
	compress: z.literal("zlib-stream").optional(),
});
export type GatewayURLQueryStringParamsInfer = z.infer<typeof GatewayURLQueryStringParams>;

export enum GatewayIntents {
	Guilds = 1,
	GuildMembers = 2,
	GuildModeration = 4,
	GuildEmojisAndStickers = 8,
	GuildIntegrations = 16,
	GuildWebhooks = 32,
	GuildInvites = 64,
	GuildVoiceStates = 128,
	GuildPresences = 256,
	GuildMessages = 512,
	GuildMessageReactions = 1_024,
	GuildMessageTyping = 2_048,
	DirectMessages = 4_096,
	DirectMessageReactions = 8_192,
	DirectMessageTyping = 16_384,
	MessageContent = 32_768,
	GuildScheduledEvents = 65_536,
	AutoModerationConfiguration = 1_048_576,
	AutoModerationExecution = 2_097_152,
	GuildMessagePolls = 16_777_216,
	DirectMessagePolls = 33_554_432,
}

export const GatewayIntentsEnum = z.nativeEnum(GatewayIntents);
export const GatewayIntentsBitfield = z.number().int().min(1).max(65_535);

export const GatewayPayloadStructure = z.object({
	op: GatewayOpcodesEnum,
	d: Mixed.nullable(),
	s: Integer.nullable(),
	t: z.string().nullable(),
});
export type GatewayPayloadInfer = z.infer<typeof GatewayPayloadStructure>;

export const GatewayMessagePollVoteAddFields = z.object({
	user_id: Snowflake,
	channel_id: Snowflake,
	message_id: Snowflake,
	guild_id: Snowflake.optional(),
	answer_id: Integer,
});
export type GatewayMessagePollVoteAddInfer = z.infer<typeof GatewayMessagePollVoteAddFields>;

export const GatewayMessagePollVoteRemoveFields = z.object({
	user_id: Snowflake,
	channel_id: Snowflake,
	message_id: Snowflake,
	guild_id: Snowflake.optional(),
	answer_id: Integer,
});
export type GatewayMessagePollVoteRemoveInfer = z.infer<typeof GatewayMessagePollVoteRemoveFields>;
