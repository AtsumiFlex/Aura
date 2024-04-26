/**
 * @fileoverview Guilds event
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guilds}
 */

import type { Integer, ISO8601Timestamp, Snowflake } from "../../base/base";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-create-guild-create-extra-fields}
 */
export type GuildCreateExtraFields = {
	channels: object[]; // TODO: Channel Structure
	guild_scheduled_events: object[]; // TODO: Guild Scheduled Event Structure
	joined_at: ISO8601Timestamp;
	large: boolean;
	member_count: Integer;
	members: object[]; // TODO: Guild Member Structure
	presences: object[]; // TODO: Presence Update Structure
	stage_instances: object[]; // TODO: Stage Instance Structure
	threads: object[]; // TODO: Thread Structure
	unavailable: boolean;
	voice_states: object[]; // TODO: Voice State Structure
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-ban-add-guild-ban-add-event-fields}
 */
export type GuildBanAddEventFields = {
	guild_id: Snowflake;
	user: object; // TODO: User object
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-ban-remove-guild-ban-remove-event-fields}
 */
export type GuildBanRemoveEventFields = {
	guild_id: Snowflake;
	user: object; // TODO: User object
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-emojis-update-guild-emojis-update-event-fields}
 */
export type GuildEmojisUpdateEventFields = {
	emojis: object[]; // TODO: Emoji object
	guild_id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-stickers-update-guild-stickers-update-event-fields}
 */
export type GuildStickersUpdateEventFields = {
	guild_id: Snowflake;
	stickers: object[]; // TODO: Sticker object
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-integrations-update-guild-integrations-update-event-fields}
 */
export type GuildIntegrationsUpdateEventFields = {
	guild_id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-member-add-guild-member-add-extra-fields}
 */
export type GuildMemberAddExtraFields = {
	guild_id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-member-remove-guild-member-remove-event-fields}
 */
export type GuildMemberRemoveEventFields = {
	guild_id: Snowflake;
	user: object; // TODO: User object
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-member-update-guild-member-update-event-fields}
 */
export type GuildMemberUpdateEventFields = {
	avatar?: string | null;
	communication_disabled_util?: ISO8601Timestamp | null;
	deaf?: boolean;
	guild_id: Snowflake;
	joined_at: ISO8601Timestamp | null;
	mute?: boolean;
	nick?: string;
	pending?: boolean;
	premium_since?: ISO8601Timestamp | null;
	roles: Snowflake[];
	user: object; // TODO: User object
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-members-chunk-guild-members-chunk-event-fields}
 */
export type GuildMembersChunkEventFields = {
	chunk_count: number;
	chunk_index: number;
	guild_id: Snowflake;
	members: object[]; // TODO: GuildMember object
	nonce?: string;
	not_found?: Snowflake[];
	presences?: object[]; // TODO: Presence Update Structure
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-role-create-guild-role-create-event-fields}
 */
export type GuildRoleCreateEventFields = {
	guild_id: Snowflake;
	role: object; // TODO: Role object
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-role-update-guild-role-update-event-fields}
 */
export type GuildRoleUpdateEventFields = {
	guild_id: Snowflake;
	role: object; // TODO: Role object
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-role-delete-guild-role-delete-event-fields}
 */
export type GuildRoleDeleteEventFields = {
	guild_id: Snowflake;
	role_id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-scheduled-event-user-add-guild-scheduled-event-user-add-event-fields}
 */
export type GuildScheduledEventUserAddEventFields = {
	guild_id: Snowflake;
	guild_scheduled_event_id: Snowflake;
	user_id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-scheduled-event-user-remove-guild-scheduled-event-user-remove-event-fields}
 */
export type GuildScheduledEventUserRemoveEventFields = {
	guild_id: Snowflake;
	guild_scheduled_event_id: Snowflake;
	user_id: Snowflake;
};
