import { ApiVersionEnum } from "@aurajs/core";
import { z } from "zod";
import { Integer, Mixed, Snowflake } from "../globals";
import { GatewayOpcodesEnum } from "../globals/opcodes";
import { ApplicationStructure } from "../structure/application";
import { UserStructure } from "../structure/user";
import { GatewayPresenceUpdateFields } from "./events/presences";

export const GatewayReadyFields = z.object({
	v: ApiVersionEnum,
	user: UserStructure,
	guilds: z.array(z.object({
		id: Snowflake,
		unavailable: z.boolean(),
	})),
	session_id: z.string(),
	resume_gateway_url: z.string(),
	shard: z.array(Integer).length(2).optional(),
	application: ApplicationStructure,
});
export type GatewayReadyInfer = z.infer<typeof GatewayReadyFields>;

export const GatewayHelloFields = z.object({ heartbeat_interval: Integer });
export type GatewayHelloInfer = z.infer<typeof GatewayHelloFields>;

export enum GatewayStatusTypes {
	AwayFromKeyboard = "idle",
	DoNotDisturb = "dnd",
	Invisible = "invisible",
	Offline = "offline",
	Online = "online",
}

export const GatewayStatusTypesEnum = z.nativeEnum(GatewayStatusTypes);

export const GatewayVoiceStateUpdateFields = z.object({
	guild_id: Snowflake,
	channel_id: Snowflake.nullable(),
	self_mute: z.boolean(),
	self_deaf: z.boolean(),
});
export type GatewayVoiceStateUpdateInfer = z.infer<typeof GatewayVoiceStateUpdateFields>;

export const GatewayRequestGuildMembersFields = z.object({
	guild_id: Snowflake,
	query: z.string().optional(),
	limit: Integer,
	presences: z.boolean().optional(),
	user_ids: z.union([Snowflake, z.array(Snowflake)]).optional(),
	nonce: z.string().optional(),
});
export type GatewayRequestGuildMembersInfer = z.infer<typeof GatewayRequestGuildMembersFields>;

export const GatewayResumeFields = z.object({
	token: z.string(),
	session_id: z.string(),
	seq: Integer,
});
export type GatewayResumeInfer = z.infer<typeof GatewayResumeFields>;

export const GatewayIdentifyConnectionProperties = z.object({
	os: z.string(),
	browser: z.string(),
	device: z.string(),
});
export type GatewayIdentifyConnectionPropertiesInfer = z.infer<typeof GatewayIdentifyConnectionProperties>;

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

export const GatewayIdentifyFields = z.object({
	token: z.string(),
	properties: GatewayIdentifyConnectionProperties,
	compress: z.boolean().optional(),
	large_threshold: Integer.optional(),
	shard: z.array(Integer).length(2).optional(),
	presence: GatewayPresenceUpdateFields.optional(),
	intents: z.union([GatewayIntentsEnum, GatewayIntentsBitfield]),
});
export type GatewayIdentifyInfer = z.infer<typeof GatewayIdentifyFields>;

export const GatewayPayloadStructure = z.object({
	op: GatewayOpcodesEnum,
	d: Mixed.nullable(),
	s: Integer.nullable().optional(),
	t: z.string().nullable().optional(),
});
export type GatewayPayloadInfer = z.infer<typeof GatewayPayloadStructure>;

export const GatewayURLQueryStringParams = z.object({
	v: ApiVersionEnum,
	encoding: z.union([z.literal("json"), z.literal("etf")]),
	compress: z.literal("zlib-stream").optional(),
});
export type GatewayURLQueryStringParamsInfer = z.infer<typeof GatewayURLQueryStringParams>;

