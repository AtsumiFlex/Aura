import type { ApiVersion } from "@aurajs/core";
import type { Integer } from "../globals";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway#connecting-gateway-url-query-string-params}
 */
export type GatewayConnectQuery = {
	compress?: "zlib-stream";
	encoding: "etf" | "json";
	v: ApiVersion;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway#list-of-intents}
 */
export enum GatewayIntentBits {
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

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway#get-gateway-bot-json-response}
 */
export type JSONGatewayBotResponse = {
	session_start_limit: SessionStartLimitStructure;
	shards: Integer;
	url: string;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway#session-start-limit-object-session-start-limit-structure}
 */
export type SessionStartLimitStructure = {
	limit: Integer;
	remaining: Integer;
	reset_after: Integer;
	total: Integer;
};
