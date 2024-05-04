/**
 * Guilds Gateway
 *
 * This class is responsible for handling guild events.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#guild}
 */

import { z } from "zod";
import { Integer, ISO8601, Snowflake } from "../../../core/src/globals/globals";
import { ChannelStructure } from "../../../core/src/structures/channels";
import { EmojiStructure } from "../../../core/src/structures/emojis";
import { GuildMemberStructure } from "../../../core/src/structures/guilds";
import { RoleStructure } from "../../../core/src/structures/roles";
import { StageInstanceStructure } from "../../../core/src/structures/stages";
import { StickerStructure } from "../../../core/src/structures/stickers";
import { UserStructure } from "../../../core/src/structures/user";
import { VoiceStateStructure } from "../../../core/src/structures/voices";
import { PresenceUpdateEventFields } from "./presences";

/**
 * Guild Scheduled Event User Remove Event Fields
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#guild-scheduled-event-user-remove}
 */
export const GuildScheduledEventUserRemoveEventFields = z.object({
	guild_scheduled_event_id: Snowflake,
	user_id: Snowflake,
	guild_id: Snowflake,
});

/**
 * Guild Scheduled Event User Remove Event Fields Infer
 *
 * Infer the type of a {@link GuildScheduledEventUserRemoveEventFields} object.
 */
export type GuildScheduledEventUserRemoveEventFieldsInfer = z.infer<typeof GuildScheduledEventUserRemoveEventFields>;

/**
 * Guild Scheduled Event User Add Event Fields
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#guild-scheduled-event-user-add}
 */
export const GuildScheduledEventUserAddEventFields = z.object({
	guild_scheduled_event_id: Snowflake,
	user_id: Snowflake,
	guild_id: Snowflake,
});

/**
 * Guild Scheduled Event User Add Event Fields Infer
 *
 * Infer the type of a {@link GuildScheduledEventUserAddEventFields} object.
 */
export type GuildScheduledEventUserAddEventFieldsInfer = z.infer<typeof GuildScheduledEventUserAddEventFields>;

/**
 * Guild Role Delete Event Fields
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#guild-role-delete}
 */
export const GuildRoleDeleteEventFields = z.object({
	guild_id: Snowflake,
	role_id: Snowflake,
});

/**
 * Guild Role Delete Event Fields Infer
 *
 * Infer the type of a {@link GuildRoleDeleteEventFields} object.
 */
export type GuildRoleDeleteEventFieldsInfer = z.infer<typeof GuildRoleDeleteEventFields>;

/**
 * Guild Role Update Event Fields
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#guild-role-update}
 */
export const GuildRoleUpdateEventFields = z.object({
	guild_id: Snowflake,
	role: RoleStructure,
});

/**
 * Guild Role Update Event Fields Infer
 *
 * Infer the type of a {@link GuildRoleUpdateEventFields} object.
 */
export type GuildRoleUpdateEventFieldsInfer = z.infer<typeof GuildRoleUpdateEventFields>;

/**
 * Guild Role Create Event Fields
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#guild-role-create}
 */
export const GuildRoleCreateEventFields = z.object({
	guild_id: Snowflake,
	role: RoleStructure,
});

/**
 * Guild Role Create Event Fields Infer
 *
 * Infer the type of a {@link GuildRoleCreateEventFields} object.
 */
export type GuildRoleCreateEventFieldsInfer = z.infer<typeof GuildRoleCreateEventFields>;

/**
 * Guild Members Chunk Event Fields
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#guild-members-chunk}
 */
export const GuildMembersChunkEventFields = z.object({
	guild_id: Snowflake,
	members: z.array(GuildMemberStructure),
	chunk_index: Integer,
	chunk_count: Integer,
	not_found: z.array(z.any()).optional(),
	presences: z.array(PresenceUpdateEventFields).optional(),
	nonce: z.string().optional(),
});

/**
 * Guild Members Chunk Event Fields Infer
 *
 * Infer the type of a {@link GuildMembersChunkEventFields} object.
 */
export type GuildMembersChunkEventFieldsInfer = z.infer<typeof GuildMembersChunkEventFields>;

/**
 * Guild Member Update Event Fields
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#guild-member-update}
 */
export const GuildMemberUpdateEventFields = z.object({
	guild_id: Snowflake,
	roles: z.array(Snowflake),
	user: UserStructure,
	nick: z.string().optional().nullable(),
	avatar: z.string().nullable(),
	joined_at: ISO8601.optional().nullable(),
	premium_since: ISO8601.optional().nullable(),
	deaf: z.boolean(),
	mute: z.boolean(),
	pending: z.boolean(),
	communication_disabled_until: ISO8601.optional().nullable(),
});

/**
 * Guild Member Update Event Fields Infer
 *
 * Infer the type of a {@link GuildMemberUpdateEventFields} object.
 */
export type GuildMemberUpdateEventFieldsInfer = z.infer<typeof GuildMemberUpdateEventFields>;

/**
 * Guild Member Remove Event Fields
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#guild-member-remove}
 */
export const GuildMemberRemoveEventFields = z.object({
	guild_id: Snowflake,
	user: UserStructure,
});

/**
 * Guild Member Remove Event Fields Infer
 *
 * Infer the type of a {@link GuildMemberRemoveEventFields} object.
 */
export type GuildMemberRemoveEventFieldsInfer = z.infer<typeof GuildMemberRemoveEventFields>;

/**
 * Guild Member Add Event Fields
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#guild-member-add}
 */
export const GuildMemberAddEventFields = z.object({ guild_id: Snowflake });

/**
 * Guild Member Add Event Fields Infer
 *
 * Infer the type of a {@link GuildMemberAddEventFields} object.
 */
export type GuildMemberAddEventFieldsInfer = z.infer<typeof GuildMemberAddEventFields>;

/**
 * Guild Integrations Update Event Fields
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#guild-integrations-update}
 */
export const GuildIntegrationsUpdateEventFields = z.object({ guild_id: Snowflake });

/**
 * Guild Integrations Update Event Fields Infer
 *
 * Infer the type of a {@link GuildIntegrationsUpdateEventFields} object.
 */
export type GuildIntegrationsUpdateEventFieldsInfer = z.infer<typeof GuildIntegrationsUpdateEventFields>;

/**
 * Guild Stickers Update Event Fields
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#guild-stickers-update}
 */
export const GuildStickersUpdateEventFields = z.object({
	guild_id: Snowflake,
	stickers: z.array(StickerStructure),
});

/**
 * Guild Stickers Update Event Fields Infer
 *
 * Infer the type of a {@link GuildStickersUpdateEventFields} object.
 */
export type GuildStickersUpdateEventFieldsInfer = z.infer<typeof GuildStickersUpdateEventFields>;

/**
 * Guild Emojis Update Event Fields
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#guild-emojis-update}
 */
export const GuildEmojisUpdateEventFields = z.object({
	guild_id: Snowflake,
	emojis: z.array(EmojiStructure),
});

/**
 * Guild Emojis Update Event Fields Infer
 *
 * Infer the type of a {@link GuildEmojisUpdateEventFields} object.
 */
export type GuildEmojisUpdateEventFieldsInfer = z.infer<typeof GuildEmojisUpdateEventFields>;

/**
 * Guild Ban Remove Event Fields
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#guild-ban-remove}
 */
export const GuildBanRemoveEventFields = z.object({
	guild_id: Snowflake,
	user: UserStructure,
});

/**
 * Guild Ban Remove Event Fields Infer
 *
 * Infer the type of a {@link GuildBanRemoveEventFields} object.
 */
export type GuildBanRemoveEventFieldsInfer = z.infer<typeof GuildBanRemoveEventFields>;

/**
 * Guild Ban Add Event Fields
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#guild-ban-add}
 */
export const GuildBanAddEventFields = z.object({
	guild_id: Snowflake,
	user: UserStructure,
});

/**
 * Guild Ban Add Event Fields Infer
 *
 * Infer the type of a {@link GuildBanAddEventFields} object.
 */
export type GuildBanAddEventFieldsInfer = z.infer<typeof GuildBanAddEventFields>;

/**
 * Guild Create Event Fields
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#guild-create}
 */
export const GuildCreateEventFields = z.object({
	joined_at: ISO8601,
	large: z.boolean(),
	unavailable: z.boolean(),
	member_count: Integer,
	voice_states: z.array(VoiceStateStructure),
	members: z.array(GuildMemberStructure),
	channels: z.array(ChannelStructure),
	threads: z.array(ChannelStructure),
	presences: z.array(PresenceUpdateEventFields.partial()),
	stage_instances: z.array(StageInstanceStructure),
	guild_scheduled_events: z.array(GuildScheduledEventUserAddEventFields),
});

/**
 * Guild Create Event Fields Infer
 *
 * Infer the type of a {@link GuildCreateEventFields} object.
 */
export type GuildCreateEventFieldsInfer = z.infer<typeof GuildCreateEventFields>;
