import {
	ChannelStructure,
	EmojiStructure,
	GuildMemberStructure,
	GuildScheduledEventStructure,
	Integer,
	ISO8601Timestamp,
	RoleStructure,
	Snowflake,
	StageInstanceStructure,
	StickerStructure,
	UserStructure,
	VoiceStateStructure,
} from "@aurajs/core";
import { z } from "zod";
import { PresenceUpdateEventFields } from "./presences";

/**
 * Guild Scheduled Event User Remove Event Fields
 *
 * Sent when a user is removed from a guild scheduled event
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-scheduled-event-user-remove}
 */
export const GuildScheduledEventUserRemoveEventFields = z.object({
	guild_scheduled_event_id: Snowflake,
	user_id: Snowflake,
	guild_id: Snowflake,
});

/**
 * Guild Scheduled Event User Remove Event Fields Infer
 *
 * Represents the inferred type of the {@link GuildScheduledEventUserRemoveEventFields}
 */
export type GuildScheduledEventUserRemoveEventFieldsInfer = z.infer<typeof GuildScheduledEventUserRemoveEventFields>;

/**
 * Guild Scheduled Event User Add Event Fields
 *
 * Sent when a user is added to a guild scheduled event
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-scheduled-event-user-add}
 */
export const GuildScheduledEventUserAddEventFields = z.object({
	guild_scheduled_event_id: Snowflake,
	user_id: Snowflake,
	guild_id: Snowflake,
});

/**
 * Guild Scheduled Event User Add Event Fields Infer
 *
 * Represents the inferred type of the {@link GuildScheduledEventUserAddEventFields}
 */
export type GuildScheduledEventUserAddEventFieldsInfer = z.infer<typeof GuildScheduledEventUserAddEventFields>;

/**
 * Guild Role Delete Event Fields
 *
 * Sent when a guild role is deleted
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-role-delete}
 */
export const GuildRoleDeleteEventFields = z.object({
	guild_id: Snowflake,
	role_id: Snowflake,
});

/**
 * Guild Role Delete Event Fields Infer
 *
 * Represents the inferred type of the {@link GuildRoleDeleteEventFields}
 */
export type GuildRoleDeleteEventFieldsInfer = z.infer<typeof GuildRoleDeleteEventFields>;

/**
 * Guild Role Update Event Fields
 *
 * Sent when a guild role is updated
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-role-update}
 */
export const GuildRoleUpdateEventFields = z.object({
	guild_id: Snowflake,
	role: RoleStructure,
});

/**
 * Guild Role Update Event Fields Infer
 *
 * Represents the inferred type of the {@link GuildRoleUpdateEventFields}
 */
export type GuildRoleUpdateEventFieldsInfer = z.infer<typeof GuildRoleUpdateEventFields>;

/**
 * Guild Role Create Event Fields
 *
 * Sent when a guild role is created
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-role-create}
 */
export const GuildRoleCreateEventFields = z.object({
	guild_id: Snowflake,
	role: RoleStructure,
});

/**
 * Guild Role Create Event Fields Infer
 *
 * Represents the inferred type of the {@link GuildRoleCreateEventFields}
 */
export type GuildRoleCreateEventFieldsInfer = z.infer<typeof GuildRoleCreateEventFields>;

/**
 * Guild Members Chunk Event Fields
 *
 * Sent in response to Guild Members Request
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-members-chunk}
 */
export const GuildMembersChunkEventFields = z.object({
	guild_id: Snowflake,
	members: z.array(GuildMemberStructure),
	chunk_index: Integer,
	chunk_count: Integer,
	not_found: z.array(z.unknown()).optional(),
	presences: z.array(PresenceUpdateEventFields).optional(),
	nonce: z.string().optional(),
});

/**
 * Guild Members Chunk Event Fields Infer
 *
 * Represents the inferred type of the {@link GuildMembersChunkEventFields}
 */
export type GuildMembersChunkEventFieldsInfer = z.infer<typeof GuildMembersChunkEventFields>;

/**
 * Guild Member Update Event Fields
 *
 * Sent when a guild member is updated
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-member-update}
 */
export const GuildMemberUpdateEventFields = z.object({
	guild_id: Snowflake,
	roles: z.array(Snowflake),
	user: UserStructure,
	nick: z.string().optional().nullable(),
	avatar: z.string().optional().nullable(),
	joined_at: ISO8601Timestamp.nullable(),
	premium_since: ISO8601Timestamp.optional().nullable(),
	deaf: z.boolean().optional(),
	mute: z.boolean().optional(),
	pending: z.boolean().optional(),
	communication_disabled_until: ISO8601Timestamp.optional().nullable(),
});

/**
 * Guild Member Update Event Fields Infer
 *
 * Represents the inferred type of the {@link GuildMemberUpdateEventFields}
 */
export type GuildMemberUpdateEventFieldsInfer = z.infer<typeof GuildMemberUpdateEventFields>;

/**
 * Guild Member Remove Event Fields
 *
 * Sent when a user is removed from a guild
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-member-remove}
 */
export const GuildMemberRemoveEventFields = z.object({
	guild_id: Snowflake,
	user: UserStructure,
});

/**
 * Guild Member Remove Event Fields Infer
 *
 * Represents the inferred type of the {@link GuildMemberRemoveEventFields}
 */
export type GuildMemberRemoveEventFieldsInfer = z.infer<typeof GuildMemberRemoveEventFields>;

/**
 * Guild Member Add Event Fields
 *
 * Sent when a new user joins a guild
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-member-add}
 */
export const GuildMemberAddEventFields = z.object({ guild_id: Snowflake });

/**
 * Guild Member Add Event Fields Infer
 *
 * Represents the inferred type of the {@link GuildMemberAddEventFields}
 */
export type GuildMemberAddEventFieldsInfer = z.infer<typeof GuildMemberAddEventFields>;

/**
 * Guild Integrations Update Event Fields
 *
 * Sent when a guild's integrations are updated
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-integrations-update}
 */
export const GuildIntegrationsUpdateEventFields = z.object({ guild_id: Snowflake });

/**
 * Guild Integrations Update Event Fields Infer
 *
 * Represents the inferred type of the {@link GuildIntegrationsUpdateEventFields}
 */
export type GuildIntegrationsUpdateEventFieldsInfer = z.infer<typeof GuildIntegrationsUpdateEventFields>;

/**
 * Guild Stickers Update Event Fields
 *
 * Sent when a guild's stickers are updated
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-stickers-update}
 */
export const GuildStickersUpdateEventFields = z.object({
	guild_id: Snowflake,
	stickers: z.array(StickerStructure),
});

/**
 * Guild Stickers Update Event Fields Infer
 *
 * Represents the inferred type of the {@link GuildStickersUpdateEventFields}
 */
export type GuildStickersUpdateEventFieldsInfer = z.infer<typeof GuildStickersUpdateEventFields>;

/**
 * Guild Emojis Update Event Fields
 *
 * Sent when a guild's emojis are updated
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-emojis-update}
 */
export const GuildEmojisUpdateEventFields = z.object({
	guild_id: Snowflake,
	emojis: z.array(EmojiStructure),
});

/**
 * Guild Emojis Update Event Fields Infer
 *
 * Represents the inferred type of the {@link GuildEmojisUpdateEventFields}
 */
export type GuildEmojisUpdateEventFieldsInfer = z.infer<typeof GuildEmojisUpdateEventFields>;

/**
 * Guild Ban Remove Event Fields
 *
 * Sent when a user is unbanned from a guild
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-ban-remove}
 */
export const GuildBanRemoveEventFields = z.object({
	guild_id: Snowflake,
	user: UserStructure,
});

/**
 * Guild Ban Remove Event Fields Infer
 *
 * Represents the inferred type of the {@link GuildBanRemoveEventFields}
 */
export type GuildBanRemoveEventFieldsInfer = z.infer<typeof GuildBanRemoveEventFields>;

/**
 * Guild Ban Add Event Fields
 *
 * Sent when a user is banned from a guild
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-ban-add}
 */
export const GuildBanAddEventFields = z.object({
	guild_id: Snowflake,
	user: UserStructure,
});

/**
 * Guild Ban Add Event Fields Infer
 *
 * Represents the inferred type of the {@link GuildBanAddEventFields}
 */
export type GuildBanAddEventFieldsInfer = z.infer<typeof GuildBanAddEventFields>;

/**
 * Guild Create Event Fields
 *
 * Sent when a new guild is created
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-create}
 */
export const GuildCreateEventExtraFields = z.object({
	joined_at: ISO8601Timestamp.optional(),
	large: z.boolean().optional(),
	unavailable: z.boolean().optional(),
	member_count: Integer.optional(),
	voice_states: z.array(VoiceStateStructure).optional(),
	members: z.array(GuildMemberStructure).optional(),
	channels: z.array(ChannelStructure).optional(),
	threads: z.array(ChannelStructure).optional(),
	presences: z.array(PresenceUpdateEventFields.partial()).optional(),
	stage_instances: z.array(StageInstanceStructure).optional(),
	guild_scheduled_events: z.array(GuildScheduledEventStructure).optional(),
});

/**
 * Guild Create Event Fields Infer
 *
 * Represents the inferred type of the {@link GuildCreateEventExtraFields}
 */
export type GuildCreateEventExtraFieldsInfer = z.infer<typeof GuildCreateEventExtraFields>;

/**
 * Request Guild Members Structure
 *
 * Represents the structure of the Request Guild Members payload
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#request-guild-members}
 */
export const RequestGuildMembersStructure = z.object({
	guild_id: Snowflake,
	query: z.string().optional(),
	limit: Integer,
	presences: z.boolean().optional(),
	user_ids: z.union([Snowflake, z.array(Snowflake)]).optional(),
	nonce: z.string().optional(),
});

/**
 * Request Guild Members Structure Infer
 *
 * Represents the inferred type of the {@link RequestGuildMembersStructure}
 */
export type RequestGuildMembersStructureInfer = z.infer<typeof RequestGuildMembersStructure>;
