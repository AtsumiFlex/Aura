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
 * Sent when a user has unsubscribed from a guild scheduled event.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-scheduled-event-user-remove-guild-scheduled-event-user-remove-event-fields}
 */
export const GuildScheduledEventUserRemoveEventFields = z.object({
	/**
	 * ID of the guild scheduled event
	 */
	guild_scheduled_event_id: Snowflake,
	/**
	 * ID of the user
	 */
	user_id: Snowflake,
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
});

/**
 * Guild Scheduled Event User Remove Event Fields Infer
 *
 * Is used to infer the type of the {@link GuildScheduledEventUserRemoveEventFields} object.
 */
export type GuildScheduledEventUserRemoveEventFieldsInfer = z.infer<typeof GuildScheduledEventUserRemoveEventFields>;

/**
 * Guild Scheduled Event User Add Event Fields
 *
 * Sent when a user has subscribed to a guild scheduled event.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-scheduled-event-user-add-guild-scheduled-event-user-add-event-fields}
 */
export const GuildScheduledEventUserAddEventFields = z.object({
	/**
	 * ID of the guild scheduled event
	 */
	guild_scheduled_event_id: Snowflake,
	/**
	 * ID of the user
	 */
	user_id: Snowflake,
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
});

/**
 * Guild Scheduled Event User Add Event Fields Infer
 *
 * Is used to infer the type of the {@link GuildScheduledEventUserAddEventFields} object.
 */
export type GuildScheduledEventUserAddEventFieldsInfer = z.infer<typeof GuildScheduledEventUserAddEventFields>;

/**
 * Guild Role Delete Event Fields
 *
 * Sent when a guild role is deleted.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-role-delete-guild-role-delete-event-fields}
 */
export const GuildRoleDeleteEventFields = z.object({
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
	/**
	 * ID of the role
	 */
	role_id: Snowflake,
});

/**
 * Guild Role Delete Event Fields Infer
 *
 * Is used to infer the type of the {@link GuildRoleDeleteEventFields} object.
 */
export type GuildRoleDeleteEventFieldsInfer = z.infer<typeof GuildRoleDeleteEventFields>;

/**
 * Guild Role Update Event Fields
 *
 * Sent when a guild role is updated.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-role-update-guild-role-update-event-fields}
 */
export const GuildRoleUpdateEventFields = z.object({
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
	/**
	 * Role that was updated
	 */
	role: RoleStructure,
});

/**
 * Guild Role Update Event Fields Infer
 *
 * Is used to infer the type of the {@link GuildRoleUpdateEventFields} object.
 */
export type GuildRoleUpdateEventFieldsInfer = z.infer<typeof GuildRoleUpdateEventFields>;

/**
 * Guild Role Create Event Fields
 *
 * Sent when a new guild role is created.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-role-create-guild-role-create-event-fields}
 */
export const GuildRoleCreateEventFields = z.object({
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
	/**
	 * Role that was created
	 */
	role: RoleStructure,
});

/**
 * Guild Role Create Event Fields Infer
 *
 * Is used to infer the type of the {@link GuildRoleCreateEventFields} object.
 */
export type GuildRoleCreateEventFieldsInfer = z.infer<typeof GuildRoleCreateEventFields>;

/**
 * Guild Members Chunk Event Fields
 *
 * Sent when a chunk of guild members is received (all members come from the same guild).
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-members-chunk-guild-members-chunk-event-fields}
 */
export const GuildMembersChunkEventFields = z.object({
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
	/**
	 * Set of guild members
	 */
	members: z.array(GuildMemberStructure),
	/**
	 * Chunk index in the expected chunks for this response (0 <= chunk_index < chunk_count)
	 */
	chunk_index: Integer,
	/**
	 * Total number of expected chunks for this response
	 */
	chunk_count: Integer,
	/**
	 * When passing an invalid ID to REQUEST_GUILD_MEMBERS, it will be returned here
	 */
	not_found: z.array(z.unknown()).optional(),
	/**
	 * When passing true to REQUEST_GUILD_MEMBERS, presences of the returned members will be here
	 */
	presences: z.array(PresenceUpdateEventFields).optional(),
	/**
	 * Nonce used in the Guild Members Request
	 */
	nonce: z.string().optional(),
});

/**
 * Guild Members Chunk Event Fields Infer
 *
 * Is used to infer the type of the {@link GuildMembersChunkEventFields} object.
 */
export type GuildMembersChunkEventFieldsInfer = z.infer<typeof GuildMembersChunkEventFields>;

/**
 * Guild Member Update Event Fields
 *
 * Sent when a guild member is updated. This will also fire when the user object of a guild member changes.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-member-update-guild-member-update-event-fields}
 */
export const GuildMemberUpdateEventFields = z.object({
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
	/**
	 * User role ids
	 */
	roles: z.array(Snowflake),
	/**
	 * User
	 */
	user: GuildMemberStructure,
	/**
	 * Nickname of the user in the guild
	 */
	nick: z.string().optional(),
	/**
	 * Member's guild avatar hash
	 */
	avatar: z.string().optional(),
	/**
	 * When the user joined the guild
	 */
	joined_at: ISO8601Timestamp.nullable(),
	/**
	 * When the user starting boosting the guild
	 */
	premium_since: ISO8601Timestamp.nullable(),
	/**
	 * Whether the user is deafened in voice channels
	 */
	deaf: z.boolean().optional(),
	/**
	 * Whether the user is muted in voice channels
	 */
	mute: z.boolean().optional(),
	/**
	 * Whether the user has not yet passed the guild's Membership Screening requirements
	 */
	pending: z.boolean().optional(),
	/**
	 * When the user's timeout will expire and the user will be able to communicate in the guild again, null or a time in the past if the user is not timed out
	 */
	communication_disabled_until: ISO8601Timestamp.optional().nullable(),
});

/**
 * Guild Member Update Event Fields Infer
 *
 * Is used to infer the type of the {@link GuildMemberUpdateEventFields} object.
 */
export type GuildMemberUpdateEventFieldsInfer = z.infer<typeof GuildMemberUpdateEventFields>;

/**
 * Guild Member Remove Event Fields
 *
 * Sent when a guild member is removed from a guild (leave/kick/ban).
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-member-remove-guild-member-remove-event-fields}
 */
export const GuildMemberRemoveEventFields = z.object({
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
	/**
	 * The user who was removed
	 */
	user: UserStructure,
});

/**
 * Guild Member Remove Event Fields Infer
 *
 * Is used to infer the type of the {@link GuildMemberRemoveEventFields} object.
 */
export type GuildMemberRemoveEventFieldsInfer = z.infer<typeof GuildMemberRemoveEventFields>;

/**
 * Guild Member Add Extra Fields
 *
 * Additional fields for the Guild Member Add Event.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-member-add-guild-member-add-extra-fields}
 */
export const GuildMemberAddExtraFields = z.object({
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
});

/**
 * Guild Member Add Extra Fields Infer
 *
 * Is used to infer the type of the {@link GuildMemberAddExtraFields} object.
 */
export type GuildMemberAddExtraFieldsInfer = z.infer<typeof GuildMemberAddExtraFields>;

/**
 * Guild Integrations Update Event Fields
 *
 * Sent when a guild integration is updated.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-integrations-update-guild-integrations-update-event-fields}
 */
export const GuildIntegrationsUpdateEventFields = z.object({
	/**
	 * ID of the guild whose integrations were updated
	 */
	guild_id: Snowflake,
});

/**
 * Guild Integrations Update Event Fields Infer
 *
 * Is used to infer the type of the {@link GuildIntegrationsUpdateEventFields} object.
 */
export type GuildIntegrationsUpdateEventFieldsInfer = z.infer<typeof GuildIntegrationsUpdateEventFields>;

/**
 * Guild Stickers Update Event Fields
 *
 * Sent when a guild's stickers are updated.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-stickers-update-guild-stickers-update-event-fields}
 */
export const GuildStickersUpdateEventFields = z.object({
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
	/**
	 * Array of stickers
	 */
	stickers: z.array(StickerStructure),
});

/**
 * Guild Stickers Update Event Fields Infer
 *
 * Is used to infer the type of the {@link GuildStickersUpdateEventFields} object.
 */
export type GuildStickersUpdateEventFieldsInfer = z.infer<typeof GuildStickersUpdateEventFields>;

/**
 * Guild Emojis Update Event Fields
 *
 * Sent when a guild's emojis have been updated.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-emojis-update-guild-emojis-update-event-fields}
 */
export const GuildEmojisUpdateEventFields = z.object({
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
	/**
	 * Array of emojis
	 */
	emojis: z.array(EmojiStructure),
});

/**
 * Guild Emojis Update Event Fields Infer
 *
 * Is used to infer the type of the {@link GuildEmojisUpdateEventFields} object.
 */
export type GuildEmojisUpdateEventFieldsInfer = z.infer<typeof GuildEmojisUpdateEventFields>;

/**
 * Guild Ban Remove Event Fields
 *
 * Sent when a user is unbanned from a guild.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-ban-remove-guild-ban-remove-event-fields}
 */
export const GuildBanRemoveEventFields = z.object({
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
	/**
	 * User who was unbanned
	 */
	user: UserStructure,
});

/**
 * Guild Ban Remove Event Fields Infer
 *
 * Is used to infer the type of the {@link GuildBanRemoveEventFields} object.
 */
export type GuildBanRemoveEventFieldsInfer = z.infer<typeof GuildBanRemoveEventFields>;

/**
 * Guild Ban Add Event Fields
 *
 * Sent when a user is banned from a guild.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-ban-add-guild-ban-add-event-fields}
 */
export const GuildBanAddEventFields = z.object({
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
	/**
	 * User who was banned
	 */
	user: UserStructure,
});

/**
 * Guild Ban Add Event Fields Infer
 *
 * Is used to infer the type of the {@link GuildBanAddEventFields} object.
 */
export type GuildBanAddEventFieldsInfer = z.infer<typeof GuildBanAddEventFields>;

/**
 * Guild Create Extra Fields
 *
 * This event can be sent in three different scenarios:
 *
 * When a user is initially connecting, to lazily load and backfill information for all unavailable guilds sent in the Ready event. Guilds that are unavailable due to an outage will send a Guild Delete event.
 * When a Guild becomes available again to the client.
 * When the current user joins a new Guild.
 * During an outage, the guild object in scenarios 1 and 3 may be marked as unavailable.
 * The inner payload can be:
 *
 * An available Guild: a guild object with extra fields, as noted below.
 * An unavailable Guild: an unavailable guild object.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-create-guild-create-extra-fields}
 */
export const GuildCreateExtraFields = z.object({
	/**
	 * When this guild was joined at
	 */
	joined_at: ISO8601Timestamp,
	/**
	 * true if this is considered a large guild
	 */
	large: z.boolean(),
	/**
	 * true if this guild is unavailable due to an outage
	 */
	unavailable: z.boolean().optional(),
	/**
	 * Total number of members in this guild
	 */
	member_count: Integer,
	/**
	 * States of members currently in voice channels; lacks the guild_id key
	 */
	voice_states: z.array(VoiceStateStructure),
	/**
	 * Users in the guild
	 */
	members: z.array(GuildMemberStructure),
	/**
	 * Channels in the guild
	 */
	channels: z.array(ChannelStructure),
	/**
	 * All active threads in the guild that current user has permission to view
	 */
	threads: z.array(ChannelStructure),
	/**
	 * Presences of the members in the guild, will only include non-offline members if the size is greater than large threshold
	 */
	presences: z.array(PresenceUpdateEventFields.partial()),
	/**
	 * Stage instances in the guild
	 */
	stage_instances: z.array(StageInstanceStructure),
	/**
	 * Scheduled events in the guild
	 */
	guild_scheduled_events: z.array(GuildScheduledEventStructure),
});

/**
 * Guild Create Extra Fields Infer
 *
 * Is used to infer the type of the {@link GuildCreateExtraFields} object.
 */
export type GuildCreateExtraFieldsInfer = z.infer<typeof GuildCreateExtraFields>;
