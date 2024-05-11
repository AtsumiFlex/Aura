import { z } from "zod";

/**
 * List of Intents
 *
 * Below is a list of all intents and the Gateway events associated with them. Any events not listed means it's not associated with an intent and will always be sent to your app.
 *
 * All events, including those that aren't associated with an intent, are in the Gateway events documentation.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#list-of-intents}
 */
export enum GatewayIntents {
	/**
	 * GUILD_CREATE
	 * GUILD_UPDATE
	 * GUILD_DELETE
	 * GUILD_ROLE_CREATE
	 * GUILD_ROLE_UPDATE
	 * GUILD_ROLE_DELETE
	 * CHANNEL_CREATE
	 * CHANNEL_UPDATE
	 * CHANNEL_DELETE
	 * CHANNEL_PINS_UPDATE
	 * THREAD_CREATE
	 * THREAD_UPDATE
	 * THREAD_DELETE
	 * THREAD_LIST_SYNC
	 * THREAD_MEMBER_UPDATE
	 * THREAD_MEMBERS_UPDATE
	 * STAGE_INSTANCE_CREATE
	 * STAGE_INSTANCE_UPDATE
	 * STAGE_INSTANCE_DELETE
	 */
	Guilds = 1,
	/**
	 * GUILD_MEMBER_ADD
	 * GUILD_MEMBER_UPDATE
	 * GUILD_MEMBER_REMOVE
	 * THREAD_MEMBERS_UPDATE
	 */
	GuildMembers = 2,
	/**
	 * GUILD_AUDIT_LOG_ENTRY_CREATE
	 * GUILD_BAN_ADD
	 * GUILD_BAN_REMOVE
	 */
	GuildModeration = 4,
	/**
	 * GUILD_EMOJIS_UPDATE
	 * GUILD_STICKERS_UPDATE
	 */
	GuildEmojisAndStickers = 8,
	/**
	 * GUILD_INTEGRATIONS_UPDATE
	 * INTEGRATION_CREATE
	 * INTEGRATION_UPDATE
	 * INTEGRATION_DELETE
	 */
	GuildIntegrations = 16,
	/**
	 * WEBHOOKS_UPDATE
	 */
	GuildWebhooks = 32,
	/**
	 * INVITE_CREATE
	 * INVITE_DELETE
	 */
	GuildInvites = 64,
	/**
	 * VOICE_STATE_UPDATE
	 */
	GuildVoiceStates = 128,
	/**
	 * PRESENCE_UPDATE
	 */
	GuildPresences = 256,
	/**
	 * MESSAGE_CREATE
	 * MESSAGE_UPDATE
	 * MESSAGE_DELETE
	 * MESSAGE_DELETE_BULK
	 */
	GuildMessages = 512,
	/**
	 * MESSAGE_REACTION_ADD
	 * MESSAGE_REACTION_REMOVE
	 * MESSAGE_REACTION_REMOVE_ALL
	 * MESSAGE_REACTION_REMOVE_EMOJI
	 */
	GuildMessageReactions = 1_024,
	/**
	 * TYPING_START
	 */
	GuildMessageTyping = 2_048,
	/**
	 * MESSAGE_CREATE
	 * MESSAGE_UPDATE
	 * MESSAGE_DELETE
	 * CHANNEL_PINS_UPDATE
	 */
	DirectMessages = 4_096,
	/**
	 * MESSAGE_REACTION_ADD
	 * MESSAGE_REACTION_REMOVE
	 * MESSAGE_REACTION_REMOVE_ALL
	 * MESSAGE_REACTION_REMOVE_EMOJI
	 */
	DirectMessageReactions = 8_192,
	/**
	 * TYPING_START
	 */
	DirectMessageTyping = 16_384,
	/**
	 * MESSAGE_CONTENT
	 */
	MessageContent = 32_768,
	/**
	 * GUILD_SCHEDULED_EVENT_CREATE
	 * GUILD_SCHEDULED_EVENT_UPDATE
	 * GUILD_SCHEDULED_EVENT_DELETE
	 * GUILD_SCHEDULED_EVENT_USER_ADD
	 * GUILD_SCHEDULED_EVENT_USER_REMOVE
	 */
	GuildScheduledEvents = 65_536,
	/**
	 * AUTO_MODERATION_RULE_CREATE
	 * AUTO_MODERATION_RULE_UPDATE
	 * AUTO_MODERATION_RULE_DELETE
	 */
	AutoModerationConfiguration = 1_048_576,
	/**
	 * AUTO_MODERATION_ACTION_EXECUTION
	 */
	AutoModerationExecution = 2_097_152,
	/**
	 * MESSAGE_POLL_VOTE_ADD
	 * MESSAGE_POLL_VOTE_REMOVE
	 */
	GuildMessagePolls = 16_777_216,
	/**
	 * MESSAGE_POLL_VOTE_ADD
	 * MESSAGE_POLL_VOTE_REMOVE
	 */
	DirectMessagePolls = 33_554_432,
}

/**
 * Gateway Intents Enum
 *
 * Is a zod enum that represents the available {@link GatewayIntents}.
 */
export const GatewayIntentsEnum = z.nativeEnum(GatewayIntents);
