/**
 * Audit Logs Resource
 *
 * When an administrative action is performed in a guild, an entry is added to its audit log. Viewing audit logs requires the VIEW_AUDIT_LOG permission and can be fetched by apps using the GET /guilds/{guild.id}/audit-logs endpoint, or seen by users in the guild's Server Settings. All audit log entries are stored for 45 days.
 *
 * When an app is performing an eligible action using the APIs, it can pass an X-Audit-Log-Reason header to indicate why the action was taken. More information is in the audit log entry section.
 *
 * @see {@link https://discord.com/developers/docs/resources/audit-log#audit-log-object-audit-log-structure}
 */

import { z } from "zod";
import { Snowflake } from "../globals/globals";
import { ChannelStructure } from "./channels";
import { GuildScheduledEventStructure, IntegrationStructure } from "./guilds";
import { ApplicationCommandStructure } from "./interactions";
import { AutoModerationRuleStructure } from "./moderations";
import { UserStructure } from "./user";
import { WebhookStructure } from "./webhooks";

/**
 * Audit Log Change Structure
 *
 * Represents a change in an audit log.
 *
 * @see {@link https://discord.com/developers/docs/resources/audit-log#audit-log-change-object-audit-log-change-structure}
 */
export const AuditLogChangeStructure = z.object({
	new_value: z.any().optional(),
	old_value: z.any().optional(),
	key: z.string(),
});

/**
 * Audit Log Change Structure Infer
 *
 * The inferred type of the AuditLogChangeStructure zod object.
 */
export type AuditLogChangeStructureInfer = z.infer<typeof AuditLogChangeStructure>;

/**
 * Optional Audit Entry Info
 *
 * Represents the optional audit entry info.
 *
 * @see {@link https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-entry-structure}
 */
export const OptionalAuditEntryInfo = z.object({
	application_id: Snowflake,
	auto_moderation_rule_name: z.string(),
	auto_moderation_rule_trigger_type: z.string(),
	channel_id: Snowflake,
	count: z.string(),
	delete_member_days: z.string(),
	id: Snowflake,
	members_removed: z.string(),
	message_id: Snowflake,
	role_name: z.string(),
	type: z.string(),
	integration_type: z.string(),
}).optional();

/**
 * Optional Audit Entry Info Infer
 *
 * The inferred type of the OptionalAuditEntryInfo zod object.
 */
export type OptionalAuditEntryInfoInfer = z.infer<typeof OptionalAuditEntryInfo>;

/**
 * Audit Log Events
 *
 * The types of events that can be found in an audit log.
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
 * AuditLogEventsEnum is a zod enum that represents the audit log events.
 */
export const AuditLogEventsEnum = z.nativeEnum(AuditLogEvents);

/**
 * Audit Log Entry Structure
 *
 * Represents an audit log entry.
 *
 * @see {@link https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-entry-structure}
 */
export const AuditLogEntryStructure = z.object({
	target_id: Snowflake.nullable(),
	changes: z.array(AuditLogChangeStructure).optional(),
	user_id: Snowflake.nullable(),
	id: Snowflake,
	action_type: AuditLogEventsEnum,
	options: OptionalAuditEntryInfo.optional(),
	reason: z.string().optional(),
});

/**
 * Audit Log Entry Structure Infer
 *
 * The inferred type of the AuditLogEntryStructure zod object.
 */
export type AuditLogEntryStructureInfer = z.infer<typeof AuditLogEntryStructure>;

/**
 * Audit Log Structure
 *
 * Represents an audit log.
 *
 * @see {@link https://discord.com/developers/docs/resources/audit-log#audit-log-object-audit-log-structure}
 */
export const AuditLogStructure = z.object({
	application_commands: z.array(ApplicationCommandStructure),
	audit_log_entries: z.array(AuditLogEntryStructure),
	auto_moderation_rules: z.array(AutoModerationRuleStructure),
	guild_scheduled_events: z.array(GuildScheduledEventStructure),
	integrations: z.array(IntegrationStructure.partial()),
	threads: z.array(ChannelStructure.partial()),
	users: z.array(UserStructure),
	webhooks: z.array(WebhookStructure),
});

/**
 * Audit Log Structure Infer
 *
 * The inferred type of the AuditLogStructure zod object.
 */
export type AuditLogStructureInfer = z.infer<typeof AuditLogStructure>;
