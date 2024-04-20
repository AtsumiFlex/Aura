// https://discord.com/developers/docs/topics/gateway-events#guilds

import type { Integer, Snowflake } from "@aurajs/core";
import type { PresenceUpdateEventFields } from "./presences";

// https://discord.com/developers/docs/topics/gateway-events#guild-create-guild-create-extra-fields
export type GuildCreateExtraFields = {
	channels: object[];
	// TODO: Channel object
	guild_scheduled_events: object[];
	// TODO: GuildScheduledEvent object
	joined_at: string;
	large: boolean;
	member_count: Integer;
	members: object[];
	// TODO: GuildMember object
	presences: PresenceUpdateEventFields[];
	stage_instances: object[];
	// TODO: StageInstance object
	threads: object[];
	// TODO: Thread object
	unavailable?: boolean;
	voice_states: object[];
	// TODO: VoiceState objects
};

// https://discord.com/developers/docs/topics/gateway-events#guild-ban-add-guild-ban-add-event-fields
export type GuildBanAddEventFields = {
	guild_id: Snowflake;
	user: object;
	// TODO: User object
};

// https://discord.com/developers/docs/topics/gateway-events#guild-ban-remove-guild-ban-remove-event-fields
export type GuildBanRemoveEventFields = {
	guild_id: Snowflake;
	user: object;
	// TODO: User object
};

// https://discord.com/developers/docs/topics/gateway-events#guild-emojis-update-guild-emojis-update-event-fields
export type GuildEmojisUpdateEventFields = {
	emojis: object[];
	guild_id: Snowflake;
};

// https://discord.com/developers/docs/topics/gateway-events#guild-stickers-update-guild-stickers-update-event-fields
export type GuildStickersUpdateEventFields = {
	guild_id: Snowflake;
	stickers: object[];
	// TODO: Sticker object
};

// https://discord.com/developers/docs/topics/gateway-events#guild-integrations-update-guild-integrations-update-event-fields
export type GuildIntegrationsUpdateEventFields = {
	guild_id: Snowflake;
};

// https://discord.com/developers/docs/topics/gateway-events#guild-member-add-guild-member-add-extra-fields
export type GuildMemberAddExtraFields = {
	guild_id: Snowflake;
};

// https://discord.com/developers/docs/topics/gateway-events#guild-member-remove-guild-member-remove-event-fields
export type GuildMemberRemoveEventFields = {
	guild_id: Snowflake;
	user: object;
	// TODO: User object
};

// https://discord.com/developers/docs/topics/gateway-events#guild-member-update-guild-member-update-event-fields
export type GuildMemberUpdateEventFields = {
	avatar: string | null;
	communication_disabled_until?: string | null;
	deaf?: boolean;
	guild_id: Snowflake;
	joined_at: string | null;
	mute?: boolean;
	nick?: string | null;
	pending?: boolean;
	premium_since?: string | null;
	roles: Snowflake[];
	user: object;
	// TODO: User object
};

// https://discord.com/developers/docs/topics/gateway-events#guild-members-chunk-guild-members-chunk-event-fields
export type GuildMembersChunkEventFields = {
	chunk_count: Integer;
	chunk_index: Integer;
	guild_id: Snowflake;
	members: object[];
	// TODO: GuildMember object
	nonce?: string;
	not_found?: [];
	presences?: PresenceUpdateEventFields[];
};

// https://discord.com/developers/docs/topics/gateway-events#guild-role-create-guild-role-create-event-fields
export type GuildRoleCreateEventFields = {
	guild_id: Snowflake;
	role: object;
};

// https://discord.com/developers/docs/topics/gateway-events#guild-role-update-guild-role-update-event-fields
export type GuildRoleUpdateEventFields = {
	guild_id: Snowflake;
	role: object;
	// TODO: Role object
};

// https://discord.com/developers/docs/topics/gateway-events#guild-role-delete-guild-role-delete-event-fields
export type GuildRoleDeleteEventFields = {
	guild_id: Snowflake;
	role_id: Snowflake;
};

// https://discord.com/developers/docs/topics/gateway-events#guild-scheduled-event-user-add-guild-scheduled-event-user-add-event-fields
export type GuildScheduledEventUserAddEventFields = {
	guild_id: Snowflake;
	guild_scheduled_event_id: Snowflake;
	user_id: Snowflake;
};

// https://discord.com/developers/docs/topics/gateway-events#guild-scheduled-event-user-remove-guild-scheduled-event-user-remove-event-fields
export type GuildScheduledEventUserRemoveEventFields = {
	guild_id: Snowflake;
	guild_scheduled_event_id: Snowflake;
	user_id: Snowflake;
};
