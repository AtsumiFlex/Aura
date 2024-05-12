/**
 * Audit Logs Resource
 *
 * When an administrative action is performed in a guild, an entry is added to its audit log. Viewing audit logs requires the VIEW_AUDIT_LOG permission and can be fetched by apps using the GET /guilds/{guild.id}/audit-logs endpoint, or seen by users in the guild's Server Settings. All audit log entries are stored for 45 days.
 *
 * When an app is performing an eligible action using the APIs, it can pass an X-Audit-Log-Reason header to indicate why the action was taken. More information is in the audit log entry section.
 *
 * @see {@link https://discord.com/developers/docs/resources/audit-log#audit-logs-resource}
 */

import { z } from "zod";
import { Snowflake } from "../globals/formatters";
import { ChannelStructure, OverwriteTypesEnum } from "./channels";
import { GuildScheduledEventStructure, IntegrationStructure } from "./guilds";
import { ApplicationCommandStructure } from "./interactions";
import { AutoModerationRuleStructure } from "./moderations";
import { UserStructure } from "./users";
import { WebhookStructure } from "./webhooks";

/**
 * Audit Log Change Structure
 *
 * Some events don't follow the same pattern as other audit log events. Details about these exceptions are explained in the next section.
 *
 * @see {@link https://discord.com/developers/docs/resources/audit-log#audit-log-change-object-audit-log-change-structure}
 */
export const AuditLogChangeStructure = z.object({
	/**
	 * New value of the key
	 */
	new_value: z.any().optional(),
	/**
	 * Old value of the key
	 */
	old_value: z.any().optional(),
	/**
	 * Name of the changed entity, with a few exceptions
	 */
	key: z.string(),
});

/**
 * Audit Log Change Structure Infer
 *
 * The inferred type of the {@link AuditLogChangeStructure} zod schema.
 */
export type AuditLogChangeStructureInfer = z.infer<typeof AuditLogChangeStructure>;

/**
 * Optional Audit Entry Info
 *
 * @see {@link https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-optional-audit-entry-info}
 */
export const OptionalAuditEntryInfo = z.object({
	/**
	 * ID of the app whose permissions were targeted
	 */
	application_id: Snowflake.optional(),
	/**
	 * Name of the Auto Moderation rule that was triggered
	 */
	auto_moderation_rule_name: z.string().optional(),
	/**
	 * Trigger type of the Auto Moderation rule that was triggered
	 */
	auto_moderation_rule_trigger_type: z.string().optional(),
	/**
	 * Channel in which the entities were targeted
	 */
	channel_id: Snowflake.optional(),
	/**
	 * Number of entities that were targeted
	 */
	count: z.string().optional(),
	/**
	 * Number of days after which inactive members were kicked
	 */
	delete_member_days: z.string().optional(),
	/**
	 * ID of the overwritten entity
	 */
	id: Snowflake.optional(),
	/**
	 * Number of members removed by the prune
	 */
	members_removed: z.string().optional(),
	/**
	 * ID of the message that was targeted
	 */
	message_id: Snowflake.optional(),
	/**
	 * Name of the role if type is "0" (not present if type is "1")
	 */
	role_name: z.union([z.literal("0"), z.literal("1")]).optional(),
	/**
	 * Type of overwritten entity - role ("0") or member ("1")
	 */
	type: OverwriteTypesEnum.optional(),
	/**
	 * The type of integration which performed the action
	 */
	integration_type: z.string().optional(),
});

/**
 * Optional Audit Entry Info Infer
 *
 * The inferred type of the {@link OptionalAuditEntryInfo} zod schema.
 */
export type OptionalAuditEntryInfoInfer = z.infer<typeof OptionalAuditEntryInfo>;

/**
 * Audit Log Events
 *
 * The table below lists audit log events and values (the action_type field) that your app may receive.
 *
 * The Object Changed column notes which object's values may be included in the entry. Though there are exceptions, possible keys in the changes array typically correspond to the object's fields. The descriptions and types for those fields can be found in the linked documentation for the object.
 *
 * If no object is noted, there won't be a changes array in the entry, though other fields like the target_id still exist and many have fields in the options array.
 *
 * @see {@link https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-events}
 */
export enum AuditLogEvents {
	/**
	 * Server settings were updated
	 */
	GuildUpdate = 1,
	/**
	 * Channel was created
	 */
	ChannelCreate = 10,
	/**
	 * Channel settings were updated
	 */
	ChannelUpdate = 11,
	/**
	 * Channel was deleted
	 */
	ChannelDelete = 12,
	/**
	 * Permission overwrite was added to a channel
	 */
	ChannelOverwriteCreate = 13,
	/**
	 * Permission overwrite was updated for a channel
	 */
	ChannelOverwriteUpdate = 14,
	/**
	 * Permission overwrite was deleted from a channel
	 */
	ChannelOverwriteDelete = 15,
	/**
	 * Member was removed from server
	 */
	MemberKick = 20,
	/**
	 * Members were pruned from server
	 */
	MemberPrune = 21,
	/**
	 * Member was banned from server
	 */
	MemberBanAdd = 22,
	/**
	 * Server ban was lifted for a member
	 */
	MemberBanRemove = 23,
	/**
	 * Member was updated in server
	 */
	MemberUpdate = 24,
	/**
	 * Member was added or removed from a role
	 */
	MemberRoleUpdate = 25,
	/**
	 * Member was moved to a different voice channel
	 */
	MemberMove = 26,
	/**
	 * Member was disconnected from a voice channel
	 */
	MemberDisconnect = 27,
	/**
	 * Bot user was added to server
	 */
	BotAdd = 28,
	/**
	 * Role was created
	 */
	RoleCreate = 30,
	/**
	 * Role was edited
	 */
	RoleUpdate = 31,
	/**
	 * Role was deleted
	 */
	RoleDelete = 32,
	/**
	 * Server invite was created
	 */
	InviteCreate = 40,
	/**
	 * Server invite was updated
	 */
	InviteUpdate = 41,
	/**
	 * Server invite was deleted
	 */
	InviteDelete = 42,
	/**
	 * Webhook was created
	 */
	WebhookCreate = 50,
	/**
	 * Webhook properties or channel were updated
	 */
	WebhookUpdate = 51,
	/**
	 * Webhook was deleted
	 */
	WebhookDelete = 52,
	/**
	 * Emoji was created
	 */
	EmojiCreate = 60,
	/**
	 * Emoji name was updated
	 */
	EmojiUpdate = 61,
	/**
	 * Emoji was deleted
	 */
	EmojiDelete = 62,
	/**
	 * Single message was deleted
	 */
	MessageDelete = 72,
	/**
	 * Multiple messages were deleted
	 */
	MessageBulkDelete = 73,
	/**
	 * Message was pinned to a channel
	 */
	MessagePin = 74,
	/**
	 * Message was unpinned from a channel
	 */
	MessageUnpin = 75,
	/**
	 * App was added to server
	 */
	IntegrationCreate = 80,
	/**
	 * App was updated (as an example, its scopes were updated)
	 */
	IntegrationUpdate = 81,
	/**
	 * App was removed from server
	 */
	IntegrationDelete = 82,
	/**
	 * Stage instance was created (stage channel becomes live)
	 */
	StageInstanceCreate = 83,
	/**
	 * Stage instance details were updated
	 */
	StageInstanceUpdate = 84,
	/**
	 * Stage instance was deleted (stage channel no longer live)
	 */
	StageInstanceDelete = 85,
	/**
	 * Sticker was created
	 */
	StickerCreate = 90,
	/**
	 * Sticker details were updated
	 */
	StickerUpdate = 91,
	/**
	 * Sticker was deleted
	 */
	StickerDelete = 92,
	/**
	 * Event was created
	 */
	GuildScheduledEventCreate = 100,
	/**
	 * Event was updated
	 */
	GuildScheduledEventUpdate = 101,
	/**
	 * Event was cancelled
	 */
	GuildScheduledEventDelete = 102,
	/**
	 * Thread was created in a channel
	 */
	ThreadCreate = 110,
	/**
	 * Thread was updated
	 */
	ThreadUpdate = 111,
	/**
	 * Thread was deleted
	 */
	ThreadDelete = 112,
	/**
	 * Permissions were updated for a command
	 */
	ApplicationCommandPermissionUpdate = 121,
	/**
	 * Auto Moderation rule was created
	 */
	AutoModerationRuleCreate = 140,
	/**
	 * Auto Moderation rule was updated
	 */
	AutoModerationRuleUpdate = 141,
	/**
	 * Auto Moderation rule was deleted
	 */
	AutoModerationRuleDelete = 142,
	/**
	 * Message was blocked by Auto Moderation
	 */
	AutoModerationBlockMessage = 143,
	/**
	 * Message was flagged by Auto Moderation
	 */
	AutoModerationFlagToChannel = 144,
	/**
	 * Member was timed out by Auto Moderation
	 */
	AutoModerationUserCommunicationDisabled = 145,
	/**
	 * Creator monetization request was created
	 */
	CreatorMonetizationRequestCreated = 150,
	/**
	 * Creator monetization terms were accepted
	 */
	CreatorMonetizationTermsAccepted = 151,
}

/**
 * Audit Log Events Enum
 *
 * Is a zod enum that represents the available {@link AuditLogEvents}.
 */
export const AuditLogEventsEnum = z.nativeEnum(AuditLogEvents);

/**
 * Audit Log Entry Structure
 *
 * Each audit log entry represents a single administrative action (or event), indicated by action_type. Most entries contain one to many changes in the changes array that affected an entity in Discord—whether that's a user, channel, guild, emoji, or something else.
 *
 * The information (and structure) of an entry's changes will be different depending on its type. For example, in MEMBER_ROLE_UPDATE events there is only one change: a member is either added or removed from a specific role. However, in CHANNEL_CREATE events there are many changes, including (but not limited to) the channel's name, type, and permission overwrites added. More details are in the change object section.
 *
 * Apps can specify why an administrative action is being taken by passing an X-Audit-Log-Reason request header, which will be stored as the audit log entry's reason field. The X-Audit-Log-Reason header supports 1-512 URL-encoded UTF-8 characters. Reasons are visible to users in the client and to apps when fetching audit log entries with the API.
 *
 * @see {@link https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-entry-structure}
 */
export const AuditLogEntryStructure = z.object({
	/**
	 * ID of the affected entity (webhook, user, role, etc.)
	 */
	target_id: z.string().nullable(),
	/**
	 * Changes made to the target_id
	 */
	changes: z.array(AuditLogChangeStructure).optional(),
	/**
	 * User or app that made the changes
	 */
	user_id: Snowflake.nullable(),
	/**
	 * ID of the entry
	 */
	id: Snowflake,
	/**
	 * Type of action that occurred
	 */
	action_type: AuditLogEventsEnum,
	/**
	 * Additional info for certain event types
	 */
	options: OptionalAuditEntryInfo.optional(),
	/**
	 * Reason for the change (1-512 characters)
	 */
	reason: z.string().min(1).max(512).optional(),
});

/**
 * Audit Log Entry Structure Infer
 *
 * The inferred type of the {@link AuditLogEntryStructure} zod schema.
 */
export type AuditLogEntryStructureInfer = z.infer<typeof AuditLogEntryStructure>;

/**
 * Audit Log Structure
 *
 * @see {@link https://discord.com/developers/docs/resources/audit-log#audit-log-object-audit-log-structure}
 */
export const AuditLogStructure = z.object({
	/**
	 * List of application commands referenced in the audit log
	 */
	application_commands: z.array(ApplicationCommandStructure),
	/**
	 * List of audit log entries, sorted from most to least recent
	 */
	audit_log_entries: z.array(AuditLogEntryStructure),
	/**
	 * List of auto moderation rules referenced in the audit log
	 */
	auto_moderation_rules: z.array(AutoModerationRuleStructure),
	/**
	 * List of guild scheduled events referenced in the audit log
	 */
	guild_scheduled_events: z.array(GuildScheduledEventStructure),
	/**
	 * List of partial integration objects
	 */
	integrations: z.array(IntegrationStructure.partial()),
	/**
	 * List of thread-specific channel objects
	 */
	threads: z.array(ChannelStructure),
	/**
	 * List of users referenced in the audit log
	 */
	users: z.array(UserStructure),
	/**
	 * List of webhooks referenced in the audit log
	 */
	webhooks: z.array(WebhookStructure),
});

/**
 * Audit Log Structure Infer
 *
 * The inferred type of the {@link AuditLogStructure} zod schema.
 */
export type AuditLogStructureInfer = z.infer<typeof AuditLogStructure>;
