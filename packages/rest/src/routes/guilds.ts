import type {
	BanStructureInfer,
	ChannelStructureInfer,
	GuildMemberStructureInfer,
	GuildOnboardingStructureInfer,
	GuildPreviewStructureInfer,
	GuildScheduledEventStructureInfer,
	GuildScheduledEventUserStructureInfer,
	GuildStructureInfer,
	GuildTemplateStructureInfer,
	GuildWidgetStructureInfer,
	IntegerInfer,
	IntegrationStructureInfer,
	InviteMetadataStructureInfer,
	InviteStructureInfer,
	RoleStructureInfer,
	SnowflakeInfer,
	VoiceRegionStructureInfer,
	WelcomeScreenStructureInfer,
} from "@aurajs/core";
import {
	ChannelStructure,
	ChannelTypesEnum,
	DefaultMessageNotificationLevelEnum,
	DefaultReactionStructure,
	ExplicitContentFilterLevelEnum,
	ForumLayoutTypesEnum,
	ForumTagStructure,
	GuildFeaturesEnum,
	GuildMemberFlagsEnum,
	GuildOnboardingModeEnum,
	GuildScheduledEventEntityMetadataStructure,
	GuildScheduledEventEntityTypesEnum,
	GuildScheduledEventPrivacyLevelEnum,
	GuildScheduledEventStatusEnum,
	Integer,
	ISO8601,
	LocalesEnum,
	MFALevelEnum,
	OnboardingPromptStructure,
	OverwriteStructure,
	RoleStructure,
	Snowflake,
	SortOrderTypesEnum,
	SystemChannelFlagsEnum,
	ThreadMemberStructure,
	VerificationLevelEnum,
	VideoQualityModesEnum,
	WelcomeScreenChannelStructure,
} from "@aurajs/core";
import { z } from "zod";
import type { RestRequestOptions } from "../globals/rest";

/**
 * Get Guild Template
 *
 * Get a guild template by its code.
 *
 * @see {@link https://discord.com/developers/docs/resources/template#get-guild-template}
 */
export function GetGuildTemplate<T extends GuildTemplateStructureInfer>(templateCode: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/templates/${templateCode}`,
		method: "GET",
	};
}

/**
 * JSON Create Guild from Guild Template
 *
 * @see {@link https://discord.com/developers/docs/resources/template#create-guild-from-guild-template}
 */
export const JSONCreateGuildFromGuildTemplate = z.object({
	name: z.string().min(2).max(100),
	icon: z.string().optional(),
});

/**
 * JSON Create Guild from Guild Template Infer
 *
 * Is the inferred type of the {@link JSONCreateGuildFromGuildTemplate} zod object.
 */
export type JSONCreateGuildFromGuildTemplateInfer = z.infer<typeof JSONCreateGuildFromGuildTemplate>;

/**
 * Create Guild from Guild Template
 *
 * Create a new guild based on a template.
 *
 * @see {@link https://discord.com/developers/docs/resources/template#create-guild-from-guild-template}
 */
export function CreateGuildFromGuildTemplate<T extends JSONCreateGuildFromGuildTemplateInfer>(templateCode: SnowflakeInfer, json: JSONCreateGuildFromGuildTemplateInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/templates/${templateCode}`,
		method: "POST",
		body: JSONCreateGuildFromGuildTemplate.parse(json),
	};
}

/**
 * Get Guild Templates
 *
 * Get a list of guild templates.
 *
 * @see {@link https://discord.com/developers/docs/resources/template#get-guild-templates}
 */
export function GetGuildTemplates<T extends GuildTemplateStructureInfer[]>(guildId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/templates`,
		method: "GET",
	};
}

/**
 * JSON Create Guild Template
 *
 * @see {@link https://discord.com/developers/docs/resources/template#create-guild-template}
 */
export const JSONCreateGuildTemplate = z.object({
	name: z.string().min(1).max(100),
	description: z.string().min(0).max(120).optional().nullable(),
});

/**
 * JSON Create Guild Template Infer
 *
 * Is the inferred type of the {@link JSONCreateGuildTemplate} zod object.
 */
export type JSONCreateGuildTemplateInfer = z.infer<typeof JSONCreateGuildTemplate>;

/**
 * Create Guild Template
 *
 * Create a template for a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/template#create-guild-template}
 */
export function CreateGuildTemplate<T extends GuildTemplateStructureInfer>(guildId: SnowflakeInfer, json: JSONCreateGuildTemplateInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/templates`,
		method: "POST",
		body: JSONCreateGuildTemplate.parse(json),
	};
}

/**
 * Sync Guild Template
 *
 * Syncs the template to the guild's current state.
 *
 * @see {@link https://discord.com/developers/docs/resources/template#sync-guild-template}
 */
export function SyncGuildTemplate<T extends GuildTemplateStructureInfer>(guildId: SnowflakeInfer, templateCode: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/templates/${templateCode}`,
		method: "PUT",
	};
}

/**
 * JSON Modify Guild Template
 *
 * @see {@link https://discord.com/developers/docs/resources/template#modify-guild-template}
 */
export const JSONModifyGuildTemplate = z.object({
	name: z.string().min(1).max(100).optional(),
	description: z.string().min(0).max(120).optional().nullable(),
});

/**
 * JSON Modify Guild Template Infer
 *
 * Is the inferred type of the {@link JSONModifyGuildTemplate} zod object.
 */
export type JSONModifyGuildTemplateInfer = z.infer<typeof JSONModifyGuildTemplate>;

/**
 * Modify Guild Template
 *
 * Modify the template's metadata.
 *
 * @see {@link https://discord.com/developers/docs/resources/template#modify-guild-template}
 */
export function ModifyGuildTemplate<T extends GuildTemplateStructureInfer>(guildId: SnowflakeInfer, templateCode: SnowflakeInfer, json: JSONModifyGuildTemplateInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/templates/${templateCode}`,
		method: "PATCH",
		body: JSONModifyGuildTemplate.parse(json),
	};
}

/**
 * Delete Guild Template
 *
 * Delete a guild template.
 *
 * @see {@link https://discord.com/developers/docs/resources/template#delete-guild-template}
 */
export function DeleteGuildTemplate(guildId: SnowflakeInfer, templateCode: SnowflakeInfer): RestRequestOptions<void> {
	return {
		url: `/guilds/${guildId}/templates/${templateCode}`,
		method: "DELETE",
	};
}

/**
 * Query List Scheduled Events for Guild
 *
 * Get a list of scheduled events for a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#list-scheduled-events-for-guild-query-string-params}
 */
export const QueryListScheduledEventsForGuild = z.object({ with_user_count: z.boolean().optional() });

/**
 * Query List Scheduled Events for Guild Infer
 *
 * Is the inferred type of the {@link QueryListScheduledEventsForGuild} zod object.
 */
export type QueryListScheduledEventsForGuildInfer = z.infer<typeof QueryListScheduledEventsForGuild>;

/**
 * List Scheduled Events for Guild
 *
 * Get a list of scheduled events for a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#list-scheduled-events-for-guild}
 */
export function ListScheduledEventsForGuild<T extends GuildScheduledEventStructureInfer>(guildId: SnowflakeInfer, query?: QueryListScheduledEventsForGuildInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/scheduled-events`,
		method: "GET",
		query: QueryListScheduledEventsForGuild.parse(query),
	};
}

/**
 * JSON Create Guild Scheduled Event
 *
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#create-guild-scheduled-event-json-params}
 */
export const JSONCreateGuildScheduledEvent = z.object({
	channel_id: Snowflake.optional().nullable(),
	entity_metadata: GuildScheduledEventEntityMetadataStructure.optional(),
	name: z.string(),
	privacy_level: GuildScheduledEventPrivacyLevelEnum,
	scheduled_start_time: ISO8601,
	scheduled_end_time: ISO8601.optional(),
	description: z.string().optional(),
	entity_type: GuildScheduledEventEntityTypesEnum,
	image: z.string().optional(),
});

/**
 * JSON Create Guild Scheduled Event Infer
 *
 * Is the inferred type of the {@link JSONCreateGuildScheduledEvent} zod object.
 */
export type JSONCreateGuildScheduledEventInfer = z.infer<typeof JSONCreateGuildScheduledEvent>;

/**
 * Create Guild Scheduled Event
 *
 * Create a scheduled event for a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#create-guild-scheduled-event}
 */
export function CreateGuildScheduledEvent<T extends GuildScheduledEventStructureInfer>(guildId: SnowflakeInfer, json: JSONCreateGuildScheduledEventInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/scheduled-events`,
		method: "POST",
		body: JSONCreateGuildScheduledEvent.parse(json),
	};
}

/**
 * Query Get Guild Scheduled Event
 *
 * Get a scheduled event by its ID.
 */
export const QueryGetGuildScheduledEvent = z.object({ with_user_count: z.boolean().optional() });

/**
 * Query Get Guild Scheduled Event Infer
 *
 * Is the inferred type of the {@link QueryGetGuildScheduledEvent} zod object.
 */
export type QueryGetGuildScheduledEventInfer = z.infer<typeof QueryGetGuildScheduledEvent>;

/**
 * Get Guild Scheduled Event
 *
 * Get a scheduled event by its ID.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#get-guild-scheduled-event}
 */
export function GetGuildScheduledEvent<T extends GuildScheduledEventStructureInfer>(guildId: SnowflakeInfer, scheduledEventId: SnowflakeInfer, query?: QueryGetGuildScheduledEventInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/scheduled-events/${scheduledEventId}`,
		method: "GET",
		query: QueryGetGuildScheduledEvent.parse(query),
	};
}

/**
 * JSON Modify Guild Scheduled Event
 *
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#modify-guild-scheduled-event-json-params}
 */
export const JSONModifyGuildScheduledEvent = z.object({
	channel_id: Snowflake.optional().nullable(),
	entity_metadata: GuildScheduledEventEntityMetadataStructure.optional(),
	name: z.string().optional(),
	privacy_level: GuildScheduledEventPrivacyLevelEnum.optional(),
	scheduled_start_time: ISO8601.optional(),
	scheduled_end_time: ISO8601.optional(),
	description: z.string().optional().nullable(),
	entity_type: GuildScheduledEventEntityTypesEnum.optional(),
	status: GuildScheduledEventStatusEnum.optional(),
	image: z.string().optional(),
});

/**
 * JSON Modify Guild Scheduled Event Infer
 *
 * Is the inferred type of the {@link JSONModifyGuildScheduledEvent} zod object.
 */
export type JSONModifyGuildScheduledEventInfer = z.infer<typeof JSONModifyGuildScheduledEvent>;

/**
 * Modify Guild Scheduled Event
 *
 * Modify a scheduled event for a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#modify-guild-scheduled-event}
 */
export function ModifyGuildScheduledEvent<T extends GuildScheduledEventStructureInfer>(guildId: SnowflakeInfer, scheduledEventId: SnowflakeInfer, json: JSONModifyGuildScheduledEventInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/scheduled-events/${scheduledEventId}`,
		method: "PATCH",
		body: JSONModifyGuildScheduledEvent.parse(json),
	};
}

/**
 * Delete Guild Scheduled Event
 *
 * Delete a scheduled event for a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#delete-guild-scheduled-event}
 */
export function DeleteGuildScheduledEvent(guildId: SnowflakeInfer, scheduledEventId: SnowflakeInfer): RestRequestOptions<void> {
	return {
		url: `/guilds/${guildId}/scheduled-events/${scheduledEventId}`,
		method: "DELETE",
	};
}

/**
 * Query Get Guild Scheduled Event Users
 *
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#get-guild-scheduled-event-users-query-string-params}
 */
export const QueryGetGuildScheduledEventUsers = z.object({
	limit: z.number().min(1).max(100).default(100).optional(),
	with_member: z.boolean().default(false).optional(),
	before: Snowflake.optional(),
	after: Snowflake.optional(),
});

/**
 * Query Get Guild Scheduled Event Users Infer
 *
 * Is the inferred type of the {@link QueryGetGuildScheduledEventUsers} zod object.
 */
export type QueryGetGuildScheduledEventUsersInfer = z.infer<typeof QueryGetGuildScheduledEventUsers>;

/**
 * Get Guild Scheduled Event Users
 *
 * Get a list of users who have RSVPed to a scheduled event.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#get-guild-scheduled-event-users}
 */
export function GetGuildScheduledEventUsers<T extends GuildScheduledEventUserStructureInfer[]>(guildId: SnowflakeInfer, scheduledEventId: SnowflakeInfer, query?: QueryGetGuildScheduledEventUsersInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/scheduled-events/${scheduledEventId}/users`,
		method: "GET",
		query: QueryGetGuildScheduledEventUsers.parse(query),
	};
}

/**
 * JSON Create Guild
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#create-guild-json-params}
 */
export const JSONCreateGuild = z.object({
	name: z.string().min(2).max(100),
	region: z.string().optional().nullable(),
	icon: z.string().optional(),
	verification_level: VerificationLevelEnum.optional(),
	default_message_notifications: DefaultMessageNotificationLevelEnum.optional(),
	explicit_content_filter: ExplicitContentFilterLevelEnum.optional(),
	roles: z.array(RoleStructure).optional(),
	channels: z.array(ChannelStructure.partial()).optional(),
	afk_channel_id: Snowflake.optional(),
	afk_timeout: z.union([z.literal(60), z.literal(300), z.literal(900), z.literal(1_800), z.literal(3_600)]).optional(),
	system_channel_id: Snowflake.optional(),
	system_channel_flags: SystemChannelFlagsEnum.optional(),
});

/**
 * JSON Create Guild Infer
 *
 * Is the inferred type of the {@link JSONCreateGuild} zod object.
 */
export type JSONCreateGuildInfer = z.infer<typeof JSONCreateGuild>;

/**
 * Create Guild
 *
 * Create a new guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#create-guild}
 */
export function CreateGuild<T extends GuildStructureInfer>(json: JSONCreateGuildInfer): RestRequestOptions<T> {
	return {
		url: "/guilds",
		method: "POST",
		body: JSONCreateGuild.parse(json),
	};
}

/**
 * Query Get Guild
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-query-string-params}
 */
export const QueryGetGuild = z.object({ with_counts: z.boolean().default(false).optional() });

/**
 * Query Get Guild Infer
 *
 * Is the inferred type of the {@link QueryGetGuild} zod object.
 */
export type QueryGetGuildInfer = z.infer<typeof QueryGetGuild>;

/**
 * Get Guild
 *
 * Get a guild by its ID.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild}
 */
export function GetGuild<T extends GuildStructureInfer>(guildId: SnowflakeInfer, query?: QueryGetGuildInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}`,
		method: "GET",
		query: QueryGetGuild.parse(query),
	};
}

/**
 * Get Guild Preview
 *
 * Get the preview of a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-preview}
 */
export function GetGuildPreview<T extends GuildPreviewStructureInfer>(guildId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/preview`,
		method: "GET",
	};
}

/**
 * JSON Modify Guild
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-json-params}
 */
export const JSONModifyGuild = z.object({
	name: z.string().optional(),
	region: z.string().optional().nullable().nullable(),
	verification_level: VerificationLevelEnum.optional().nullable(),
	default_message_notifications: DefaultMessageNotificationLevelEnum.optional().nullable(),
	explicit_content_filter: ExplicitContentFilterLevelEnum.optional().nullable(),
	afk_channel_id: Snowflake.optional().nullable(),
	afk_timeout: z.union([z.literal(60), z.literal(300), z.literal(900), z.literal(1_800), z.literal(3_600)]).optional(),
	icon: z.string().optional().nullable(),
	owner_id: Snowflake.optional(),
	splash: z.string().optional().nullable(),
	discovery_splash: z.string().optional().nullable(),
	banner: z.string().optional().nullable(),
	system_channel_id: Snowflake.optional().nullable(),
	system_channel_flags: SystemChannelFlagsEnum.optional(),
	rules_channel_id: Snowflake.optional().nullable(),
	public_updates_channel_id: Snowflake.optional().nullable(),
	preferred_locale: LocalesEnum.optional().nullable(),
	features: z.array(GuildFeaturesEnum).optional(),
	description: z.string().optional().nullable(),
	premium_progress_bar_enabled: z.boolean().optional(),
	safety_alerts_channel_id: Snowflake.optional().nullable(),
});

/**
 * JSON Modify Guild Infer
 *
 * Is the inferred type of the {@link JSONModifyGuild} zod object.
 */
export type JSONModifyGuildInfer = z.infer<typeof JSONModifyGuild>;

/**
 * Modify Guild
 *
 * Modify a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild}
 */
export function ModifyGuild<T extends GuildStructureInfer>(guildId: SnowflakeInfer, json: JSONModifyGuildInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}`,
		method: "PATCH",
		body: JSONModifyGuild.parse(json),
	};
}

/**
 * Delete Guild
 *
 * Delete a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#delete-guild}
 */
export function DeleteGuild(guildId: SnowflakeInfer): RestRequestOptions<void> {
	return {
		url: `/guilds/${guildId}`,
		method: "DELETE",
	};
}

/**
 * Get Guild Channels
 *
 * Get a list of guild channels.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-channels}
 */
export function GetGuildChannels<T extends ChannelStructureInfer[]>(guildId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/channels`,
		method: "GET",
	};
}

/**
 * JSON Create Guild Channel
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#create-guild-channel-json-params}
 */
export const JSONCreateGuildChannel = z.object({
	name: z.string().min(1).max(100),
	type: ChannelTypesEnum,
	topic: z.string().min(0).max(1_024).optional(),
	bitrate: z.number().min(8_000).optional(),
	user_limit: z.number().optional(),
	rate_limit_per_user: z.number().optional(),
	position: z.number().optional(),
	permission_overwrites: z.array(OverwriteStructure.partial()),
	parent_id: Snowflake.optional(),
	nsfw: z.boolean().optional(),
	rtc_region: z.string().optional(),
	video_quality_mode: VideoQualityModesEnum.optional(),
	default_auto_archive_duration: z.number().optional(),
	default_reaction_emoji: DefaultReactionStructure.optional(),
	available_tags: z.array(ForumTagStructure).optional(),
	default_sort_order: SortOrderTypesEnum.optional(),
	default_forum_layout: ForumLayoutTypesEnum.optional(),
	default_thread_rate_limit_per_user: z.number().optional(),
});

/**
 * JSON Create Guild Channel Infer
 *
 * Is the inferred type of the {@link JSONCreateGuildChannel} zod object.
 */
export type JSONCreateGuildChannelInfer = z.infer<typeof JSONCreateGuildChannel>;

/**
 * Create Guild Channel
 *
 * Create a new channel in a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#create-guild-channel}
 */
export function CreateGuildChannel<T extends ChannelStructureInfer>(guildId: SnowflakeInfer, json: JSONCreateGuildChannelInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/channels`,
		method: "POST",
		body: JSONCreateGuildChannel.parse(json),
	};
}

/**
 * JSON Modify Guild Channel Positions
 *
 * Modify the positions of a set of channel objects.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-channel-positions}
 */
export const JSONModifyGuildChannelPositions = z.array(z.object({
	id: Snowflake,
	position: Integer.optional().nullable(),
	lock_permissions: z.boolean().optional().nullable(),
	parent_id: Snowflake.optional().nullable(),
}));

/**
 * JSON Modify Guild Channel Positions Infer
 *
 * Is the inferred type of the {@link JSONModifyGuildChannelPositions} zod object.
 */
export type JSONModifyGuildChannelPositionsInfer = z.infer<typeof JSONModifyGuildChannelPositions>;

/**
 * Modify Guild Channel Positions
 *
 * Modify the positions of a set of channel objects.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-channel-positions}
 */
export function ModifyGuildChannelPositions<T extends ChannelStructureInfer[]>(guildId: SnowflakeInfer, json: JSONModifyGuildChannelPositionsInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/channels`,
		method: "PATCH",
		body: JSONModifyGuildChannelPositions.parse(json),
	};
}

/**
 * Response List Active Guild Threads
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#list-active-guild-threads}
 */
export const ResponseListActiveGuildThreads = z.object({
	threads: z.array(ChannelStructure),
	members: z.array(ThreadMemberStructure),
});

/**
 * List Active Guild Threads Infer
 *
 * Is the inferred type of the {@link ResponseListActiveGuildThreads} zod object.
 */
export type ResponseListActiveGuildThreadsInfer = z.infer<typeof ResponseListActiveGuildThreads>;

/**
 * List Active Guild Threads
 *
 * Get a list of active threads in a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#list-active-guild-threads}
 */
export function ListActiveGuildThreads<T extends ResponseListActiveGuildThreadsInfer>(guildId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/threads/active`,
		method: "GET",
	};
}

/**
 * Get Guild Member
 *
 * Get a guild member by their ID.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-member}
 */
export function GetGuildMember<T extends GuildMemberStructureInfer>(guildId: SnowflakeInfer, memberId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/members/${memberId}`,
		method: "GET",
	};
}

/**
 * Query List Guild Members
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#list-guild-members-query-string-params}
 */
export const QueryListGuildMembers = z.object({
	limit: Integer.min(1).max(1_000).default(1).optional(),
	after: Snowflake.optional(),
});

/**
 * Query List Guild Members Infer
 *
 * Is the inferred type of the {@link QueryListGuildMembers} zod object.
 */
export type QueryListGuildMembersInfer = z.infer<typeof QueryListGuildMembers>;

/**
 * List Guild Members
 *
 * Get a list of members in a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#list-guild-members}
 */
export function ListGuildMembers<T extends GuildMemberStructureInfer[]>(guildId: SnowflakeInfer, query?: QueryListGuildMembersInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/members`,
		method: "GET",
		query: QueryListGuildMembers.parse(query),
	};
}

/**
 * Query Search Guild Members
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#search-guild-members-query-string-params}
 */
export const QuerySearchGuildMembers = z.object({
	query: z.string(),
	limit: Integer.min(1).max(1_000).default(1).optional(),
});

/**
 * Query Search Guild Members Infer
 *
 * Is the inferred type of the {@link QuerySearchGuildMembers} zod object.
 */
export type QuerySearchGuildMembersInfer = z.infer<typeof QuerySearchGuildMembers>;

/**
 * Search Guild Members
 *
 * Search for guild members by their username or nickname.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#search-guild-members}
 */
export function SearchGuildMembers<T extends GuildMemberStructureInfer[]>(guildId: SnowflakeInfer, query: QuerySearchGuildMembersInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/members/search`,
		method: "GET",
		query: QuerySearchGuildMembers.parse(query),
	};
}

/**
 * JSON Add Guild Member
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#add-guild-member-json-params}
 */
export const JSONAddGuildMember = z.object({
	access_token: z.string(),
	nick: z.string().optional(),
	roles: z.array(Snowflake).optional(),
	mute: z.boolean().optional(),
	deaf: z.boolean().optional(),
});

/**
 * JSON Add Guild Member Infer
 *
 * Is the inferred type of the {@link JSONAddGuildMember} zod object.
 */
export type JSONAddGuildMemberInfer = z.infer<typeof JSONAddGuildMember>;

/**
 * Add Guild Member
 *
 * Adds a user to a guild, provided you have a valid oauth2 access token for the user with the guilds.join scope.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#add-guild-member}
 */
export function AddGuildMember<T extends GuildMemberStructureInfer>(guildId: SnowflakeInfer, userId: SnowflakeInfer, json: JSONAddGuildMemberInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/members/${userId}`,
		method: "PUT",
		body: JSONAddGuildMember.parse(json),
	};
}

/**
 * JSON Modify Guild Member
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-member-json-params}
 */
export const JSONModifyGuildMember = z.object({
	nick: z.string().optional(),
	roles: z.array(Snowflake).optional(),
	mute: z.boolean().optional(),
	deaf: z.boolean().optional(),
	channel_id: Snowflake.optional(),
	communication_disabled_until: ISO8601.optional(),
	flags: GuildMemberFlagsEnum.optional(),
});

/**
 * JSON Modify Guild Member Infer
 *
 * Is the inferred type of the {@link JSONModifyGuildMember} zod object.
 */
export type JSONModifyGuildMemberInfer = z.infer<typeof JSONModifyGuildMember>;

/**
 * Modify Guild Member
 *
 * Modify attributes of a guild member.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-member}
 */
export function ModifyGuildMember<T extends GuildMemberStructureInfer>(guildId: SnowflakeInfer, memberId: SnowflakeInfer, json: JSONModifyGuildMemberInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/members/${memberId}`,
		method: "PATCH",
		body: JSONModifyGuildMember.parse(json),
	};
}

/**
 * JSON Modify Current Member
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-current-member-json-params}
 */
export const JSONModifyCurrentMember = z.object({ nick: z.string().optional().nullable() });

/**
 * JSON Modify Current Member Infer
 *
 * Is the inferred type of the {@link JSONModifyCurrentMember} zod object.
 */
export type JSONModifyCurrentMemberInfer = z.infer<typeof JSONModifyCurrentMember>;

/**
 * Modify Current Member
 *
 * Modify the current user's nickname in a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-current-member}
 */
export function ModifyCurrentMember(guildId: SnowflakeInfer, json: JSONModifyCurrentMemberInfer): RestRequestOptions<void> {
	return {
		url: `/guilds/${guildId}/members/@me`,
		method: "PATCH",
		body: JSONModifyCurrentMember.parse(json),
	};
}

/**
 * Add Guild Member Role
 *
 * Adds a role to a guild member.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#add-guild-member-role}
 */
export function AddGuildMemberRole(guildId: SnowflakeInfer, memberId: SnowflakeInfer, roleId: SnowflakeInfer): RestRequestOptions<void> {
	return {
		url: `/guilds/${guildId}/members/${memberId}/roles/${roleId}`,
		method: "PUT",
	};
}

/**
 * Remove Guild Member Role
 *
 * Removes a role from a guild member.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#remove-guild-member-role}
 */
export function RemoveGuildMemberRole(guildId: SnowflakeInfer, memberId: SnowflakeInfer, roleId: SnowflakeInfer): RestRequestOptions<void> {
	return {
		url: `/guilds/${guildId}/members/${memberId}/roles/${roleId}`,
		method: "DELETE",
	};
}

/**
 * Remove Guild Member
 *
 * Remove a member from a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#remove-guild-member}
 */
export function RemoveGuildMember(guildId: SnowflakeInfer, memberId: SnowflakeInfer): RestRequestOptions<void> {
	return {
		url: `/guilds/${guildId}/members/${memberId}`,
		method: "DELETE",
	};
}

/**
 * JSON Get Guild Bans
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-bans-json-params}
 */
export const JSONGetGuildBans = z.object({
	limit: z.number().min(1).max(1_000).default(1_000).optional(),
	before: Snowflake.optional(),
	after: Snowflake.optional(),
});

/**
 * JSON Get Guild Bans Infer
 *
 * Is the inferred type of the {@link JSONGetGuildBans} zod object.
 */
export type JSONGetGuildBansInfer = z.infer<typeof JSONGetGuildBans>;

/**
 * Get Guild Bans
 *
 * Get a list of bans for a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-bans}
 */
export function GetGuildBans<T extends BanStructureInfer[]>(guildId: SnowflakeInfer, query?: JSONGetGuildBansInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/bans`,
		method: "GET",
		query: JSONGetGuildBans.parse(query),
	};
}

/**
 * Get Guild Ban
 *
 * Get a ban for a user in a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-ban}
 */
export function GetGuildBan<T extends BanStructureInfer>(guildId: SnowflakeInfer, userId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/bans/${userId}`,
		method: "GET",
	};
}

/**
 * JSON Create Guild Ban
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#create-guild-ban-json-params}
 */
export const JSONCreateGuildBan = z.object({ delete_message_seconds: Integer.min(0).max(604_800).default(0).optional() });

/**
 * JSON Create Guild Ban Infer
 *
 * Is the inferred type of the {@link JSONCreateGuildBan} zod object.
 */
export type JSONCreateGuildBanInfer = z.infer<typeof JSONCreateGuildBan>;

/**
 * Create Guild Ban
 *
 * Create a ban for a user in a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#create-guild-ban}
 */
export function CreateGuildBan(guildId: SnowflakeInfer, userId: SnowflakeInfer, reason: string, json: JSONCreateGuildBanInfer): RestRequestOptions<void> {
	return {
		url: `/guilds/${guildId}/bans/${userId}`,
		method: "PUT",
		body: JSONCreateGuildBan.parse(json),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * Remove Guild Ban
 *
 * Remove a ban for a user in a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#remove-guild-ban}
 */
export function RemoveGuildBan(guildId: SnowflakeInfer, userId: SnowflakeInfer, reason: string): RestRequestOptions<void> {
	return {
		url: `/guilds/${guildId}/bans/${userId}`,
		method: "DELETE",
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * JSON Bulk Guild Ban
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#bulk-guild-ban-json-params}
 */
export const JSONBulkGuildBan = z.object({
	users_ids: z.array(Snowflake),
	delete_message_seconds: Integer.min(0).max(604_800).default(0).optional(),
});

/**
 * JSON Bulk Guild Ban Infer
 *
 * Is the inferred type of the {@link JSONBulkGuildBan} zod object.
 */
export type JSONBulkGuildBanInfer = z.infer<typeof JSONBulkGuildBan>;

/**
 * Response Bulk Guild Ban
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#bulk-guild-ban}
 */
export const ResponseBulkGuildBan = z.object({
	banned_users: z.array(Snowflake),
	failed_users: z.array(Snowflake),
});

/**
 * Response Bulk Guild Ban Infer
 *
 * Is the inferred type of the {@link ResponseBulkGuildBan} zod object.
 */
export type ResponseBulkGuildBanInfer = z.infer<typeof ResponseBulkGuildBan>;

/**
 * Bulk Guild Ban
 *
 * Create a ban for a list of users in a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#bulk-guild-ban}
 */
export function BulkGuildBan<T extends ResponseBulkGuildBanInfer>(guildId: SnowflakeInfer, reason: string, json: JSONBulkGuildBanInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/bans`,
		method: "PUT",
		body: JSONBulkGuildBan.parse(json),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * Get Guild Roles
 *
 * Get a list of roles for a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-roles}
 */
export function GetGuildRoles<T extends RoleStructureInfer[]>(guildId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/roles`,
		method: "GET",
	};
}

/**
 * JSON Create Guild Role
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#create-guild-role-json-params}
 */
export const JSONCreateGuildRole = z.object({
	name: z.string().min(1).max(100).optional(),
	permissions: z.string().optional(),
	color: Integer.optional(),
	hoist: z.boolean().optional(),
	icon: z.string().optional(),
	unicode_emoji: z.string().optional(),
	mentionable: z.boolean().optional(),
});

/**
 * JSON Create Guild Role Infer
 *
 * Is the inferred type of the {@link JSONCreateGuildRole} zod object.
 */
export type JSONCreateGuildRoleInfer = z.infer<typeof JSONCreateGuildRole>;

/**
 * Create Guild Role
 *
 * Create a new role for the guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#create-guild-role}
 */
export function CreateGuildRole<T extends RoleStructureInfer>(guildId: SnowflakeInfer, reason: string, json: JSONCreateGuildRoleInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/roles`,
		method: "POST",
		body: JSONCreateGuildRole.parse(json),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * JSON Modify Guild Role Positions
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-role-positions-json-params}
 */
export const JSONModifyGuildRolePositions = z.array(z.object({
	id: Snowflake,
	position: Integer.optional().nullable(),
}));

/**
 * JSON Modify Guild Role Positions Infer
 *
 * Is the inferred type of the {@link JSONModifyGuildRolePositions} zod object.
 */
export type JSONModifyGuildRolePositionsInfer = z.infer<typeof JSONModifyGuildRolePositions>;

/**
 * Modify Guild Role Positions
 *
 * Modify the positions of a set of role objects.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-role-positions}
 */
export function ModifyGuildRolePositions<T extends RoleStructureInfer[]>(guildId: SnowflakeInfer, reason: string, json: JSONModifyGuildRolePositionsInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/roles`,
		method: "PATCH",
		body: JSONModifyGuildRolePositions.parse(json),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * JSON Modify Guild Role
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-role-json-params}
 */
export const JSONModifyGuildRole = z.object({
	name: z.string().optional(),
	permissions: z.string().optional(),
	color: Integer.optional(),
	hoist: z.boolean().optional(),
	icon: z.string().optional(),
	unicode_emoji: z.string().optional(),
	mentionable: z.boolean().optional(),
});

/**
 * JSON Modify Guild Role Infer
 *
 * Is the inferred type of the {@link JSONModifyGuildRole} zod object.
 */
export type JSONModifyGuildRoleInfer = z.infer<typeof JSONModifyGuildRole>;

/**
 * Modify Guild Role
 *
 * Modify a guild role.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-role}
 */
export function ModifyGuildRole<T extends RoleStructureInfer>(guildId: SnowflakeInfer, roleId: SnowflakeInfer, reason: string, json: JSONModifyGuildRoleInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/roles/${roleId}`,
		method: "PATCH",
		body: JSONModifyGuildRole.parse(json),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * JSON Modify Guild MFA Level
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-mfa-level-json-params}
 */
export const JSONModifyGuildMFALevel = z.object({ level: MFALevelEnum });

/**
 * JSON Modify Guild MFA Level Infer
 *
 * Is the inferred type of the {@link JSONModifyGuildMFALevel} zod object.
 */
export type JSONModifyGuildMFALevelInfer = z.infer<typeof JSONModifyGuildMFALevel>;

/**
 * Modify Guild MFA Level
 *
 * Modify the guild's MFA level.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-mfa-level}
 */
export function ModifyGuildMFALevel(guildId: SnowflakeInfer, reason: string, json: JSONModifyGuildMFALevelInfer): RestRequestOptions<void> {
	return {
		url: `/guilds/${guildId}/mfa`,
		method: "POST",
		body: JSONModifyGuildMFALevel.parse(json),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * Delete Guild Role
 *
 * Delete a guild role.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#delete-guild-role}
 */
export function DeleteGuildRole(guildId: SnowflakeInfer, roleId: SnowflakeInfer, reason: string): RestRequestOptions<void> {
	return {
		url: `/guilds/${guildId}/roles/${roleId}`,
		method: "DELETE",
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * Query Get Guild Prune Count
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-prune-count-query-string-params}
 */
export const QueryGetGuildPruneCount = z.object({
	days: z.number().min(1).optional(),
	include_roles: z.array(Snowflake).optional(),
});

/**
 * Query Get Guild Prune Count Infer
 *
 * Is the inferred type of the {@link QueryGetGuildPruneCount} zod object.
 */
export type QueryGetGuildPruneCountInfer = z.infer<typeof QueryGetGuildPruneCount>;

/**
 * Get Guild Prune Count
 *
 * Returns the number of members that would be removed in a prune operation.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-prune-count}
 */
export function GetGuildPruneCount(guildId: SnowflakeInfer, query?: QueryGetGuildPruneCountInfer): RestRequestOptions<{
	pruned: number;
}> {
	return {
		url: `/guilds/${guildId}/prune`,
		method: "GET",
		query: QueryGetGuildPruneCount.parse(query),
	};
}

/**
 * JSON Begin Guild Prune
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#begin-guild-prune-json-params}
 */
export const JSONBeginGuildPrune = z.object({
	days: Integer.min(1).max(30),
	compute_prune_count: z.boolean(),
	include_roles: z.array(Snowflake),
	reason: z.string().optional(),
});

/**
 * JSON Begin Guild Prune Infer
 *
 * Is the inferred type of the {@link JSONBeginGuildPrune} zod object.
 */
export type JSONBeginGuildPruneInfer = z.infer<typeof JSONBeginGuildPrune>;

/**
 * Begin Guild Prune
 *
 * Begin a prune operation.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#begin-guild-prune}
 */
export function BeginGuildPrune(guildId: SnowflakeInfer, reason: string, json: JSONBeginGuildPruneInfer): RestRequestOptions<{
	pruned: number;
}> {
	return {
		url: `/guilds/${guildId}/prune`,
		method: "POST",
		body: JSONBeginGuildPrune.parse(json),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * Get Guild Voice Regions
 *
 * Get a list of voice regions for a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-voice-regions}
 */
export function GetGuildVoiceRegions<T extends VoiceRegionStructureInfer[]>(guildId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/regions`,
		method: "GET",
	};
}

/**
 * Get Guild Invites
 *
 * Get a list of invites for a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-invites}
 */
export function GetGuildInvites<T extends InviteMetadataStructureInfer[] & InviteStructureInfer[]>(guildId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/invites`,
		method: "GET",
	};
}

/**
 * Get Guild Integrations
 *
 * Get a list of integrations for a guild. Only 50 integrations will be returned per call.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-integrations}
 */
export function GetGuildIntegrations<T extends IntegrationStructureInfer[]>(guildId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/integrations`,
		method: "GET",
	};
}

/**
 * Delete Guild Integration
 *
 * Delete the attached integration for a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#delete-guild-integration}
 */
export function DeleteGuildIntegration(guildId: SnowflakeInfer, integrationId: SnowflakeInfer, reason: string): RestRequestOptions<void> {
	return {
		url: `/guilds/${guildId}/integrations/${integrationId}`,
		method: "DELETE",
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * Get Guild Widget Settings
 *
 * Get the guild widget settings.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-widget-settings}
 */
export function GetGuildWidgetSettings<T extends GuildWidgetStructureInfer>(guildId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/widget`,
		method: "GET",
	};
}

/**
 * Get Guild Widget
 *
 * Get the guild widget.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-widget}
 */
export function GetGuildWidget<T extends GuildWidgetStructureInfer>(guildId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/widget.json`,
		method: "GET",
	};
}

/**
 * Get Guild Vanity URL
 *
 * Get the vanity url invite for a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-vanity-url}
 */
export function GetGuildVanityURL<T extends {
	code: string;
	uses: IntegerInfer;
}>(guildId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/vanity-url`,
		method: "GET",
	};
}

/**
 * Query Get Guild Widget Image
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-widget-image-query-string-params}
 */
export const QueryGetGuildWidgetImage = z.object({ style: z.union([z.literal("shield"), z.literal("banner1"), z.literal("banner2"), z.literal("banner3"), z.literal("banner4")]).optional() });

/**
 * Query Get Guild Widget Image Infer
 *
 * Is the inferred type of the {@link QueryGetGuildWidgetImage} zod object.
 */
export type QueryGetGuildWidgetImageInfer = z.infer<typeof QueryGetGuildWidgetImage>;

/**
 * Get Guild Widget Image
 *
 * Get the guild's widget image.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-widget-image}
 */
export function GetGuildWidgetImage(guildId: SnowflakeInfer, query?: QueryGetGuildWidgetImageInfer): RestRequestOptions<string> {
	return {
		url: `/guilds/${guildId}/widget.png`,
		method: "GET",
		query: QueryGetGuildWidgetImage.parse(query),
	};
}

/**
 * Get Guild Welcome Screen
 *
 * Get the welcome screen of a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-welcome-screen}
 */
export function GetGuildWelcomeScreen<T extends WelcomeScreenStructureInfer>(guildId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/welcome-screen`,
		method: "GET",
	};
}

/**
 * JSON Modify Guild Welcome Screen
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-welcome-screen-json-params}
 */
export const JSONModifyGuildWelcomeScreen = z.object({
	enabled: z.boolean().optional(),
	welcome_channels: z.array(WelcomeScreenChannelStructure).optional(),
	description: z.string().optional(),
});

/**
 * JSON Modify Guild Welcome Screen Infer
 *
 * Is the inferred type of the {@link JSONModifyGuildWelcomeScreen} zod object.
 */
export type JSONModifyGuildWelcomeScreenInfer = z.infer<typeof JSONModifyGuildWelcomeScreen>;

/**
 * Modify Guild Welcome Screen
 *
 * Modify the welcome screen of a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-welcome-screen}
 */
export function ModifyGuildWelcomeScreen<T extends WelcomeScreenStructureInfer>(guildId: SnowflakeInfer, reason: string, json: JSONModifyGuildWelcomeScreenInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/welcome-screen`,
		method: "PATCH",
		body: JSONModifyGuildWelcomeScreen.parse(json),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * Get Guild Onboarding
 *
 * Get the guild onboarding object.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-onboarding}
 */
export function GetGuildOnboarding<T extends GuildOnboardingStructureInfer>(guildId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/onboarding`,
		method: "GET",
	};
}

/**
 * JSON Modify Guild Onboarding
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-onboarding-json-params}
 */
export const JSONModifyGuildOnboarding = z.object({
	prompts: z.array(OnboardingPromptStructure).optional(),
	default_channel_ids: z.array(Snowflake).optional(),
	enabled: z.boolean().optional(),
	mode: GuildOnboardingModeEnum.optional(),
});

/**
 * JSON Modify Guild Onboarding Infer
 *
 * Is the inferred type of the {@link JSONModifyGuildOnboarding} zod object.
 */
export type JSONModifyGuildOnboardingInfer = z.infer<typeof JSONModifyGuildOnboarding>;

/**
 * Modify Guild Onboarding
 *
 * Modify the guild onboarding object.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-onboarding}
 */
export function ModifyGuildOnboarding<T extends GuildOnboardingStructureInfer>(guildId: SnowflakeInfer, reason: string, json: JSONModifyGuildOnboardingInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/onboarding`,
		method: "PATCH",
		body: JSONModifyGuildOnboarding.parse(json),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * JSON Modify Current User Voice State
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-current-user-voice-state-json-params}
 */
export const JSONModifyCurrentUserVoiceState = z.object({
	channel_id: Snowflake.optional(),
	suppress: z.boolean().optional(),
	request_to_speak_timestamp: ISO8601.optional().nullable(),
});

/**
 * JSON Modify Current User Voice State Infer
 *
 * Is the inferred type of the {@link JSONModifyCurrentUserVoiceState} zod object.
 */
export type JSONModifyCurrentUserVoiceStateInfer = z.infer<typeof JSONModifyCurrentUserVoiceState>;

/**
 * Modify Current User Voice State
 *
 * Modify the user's voice state.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-current-user-voice-state}
 */
export function ModifyCurrentUserVoiceState(guildId: SnowflakeInfer, json: JSONModifyCurrentUserVoiceStateInfer): RestRequestOptions<void> {
	return {
		url: `/guilds/${guildId}/voice-states/@me`,
		method: "PATCH",
		body: JSONModifyCurrentUserVoiceState.parse(json),
	};
}

/**
 * JSON Modify User Voice State
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-user-voice-state-json-params}
 */
export const JSONModifyUserVoiceState = z.object({
	channel_id: Snowflake.optional(),
	suppress: z.boolean().optional(),
});

/**
 * JSON Modify User Voice State Infer
 *
 * Is the inferred type of the {@link JSONModifyUserVoiceState} zod object.
 */
export type JSONModifyUserVoiceStateInfer = z.infer<typeof JSONModifyUserVoiceState>;

/**
 * Modify User Voice State
 *
 * Modify a user's voice state.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-user-voice-state}
 */
export function ModifyUserVoiceState(guildId: SnowflakeInfer, userId: SnowflakeInfer, json: JSONModifyUserVoiceStateInfer): RestRequestOptions<void> {
	return {
		url: `/guilds/${guildId}/voice-states/${userId}`,
		method: "PATCH",
		body: JSONModifyUserVoiceState.parse(json),
	};
}
