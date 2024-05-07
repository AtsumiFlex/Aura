/**
 * Audit Logs Resource
 *
 * Audit logs are a detailed record of the actions that are taken by users, bots, and the system that is running the application. They can be used to diagnose issues and to ensure that the system is running as expected.
 *
 * @see {@link https://discord.com/developers/docs/resources/audit-log#audit-log-object-audit-log-structure}
 */

import { z } from "zod";
import { Snowflake } from "../globals/formatters";
import type { ChannelStructureInfer, OverwriteStructureInfer } from "./channels";
import { ChannelStructure } from "./channels";
import type { EmojiStructureInfer } from "./emojis";
import type {
	GuildMemberStructureInfer,
	GuildScheduledEventStructureInfer,
	GuildStructureInfer,
	IntegrationStructureInfer,
} from "./guilds";
import {
	GuildScheduledEventStructure,
	IntegrationStructure,
} from "./guilds";
import type { InviteMetadataStructureInfer, InviteStructureInfer } from "./invites";
import type { AutoModerationRuleStructureInfer } from "./moderation";
import { AutoModerationRuleStructure } from "./moderation";
import type { RoleStructureInfer } from "./roles";
import type { StageInstanceStructureInfer } from "./stages";
import type { StickerStructureInfer } from "./stickers";
import { UserStructure } from "./users";
import type { WebhookStructureInfer } from "./webhooks";
import { WebhookStructure } from "./webhooks";

/**
 * Audit Log Change Structure
 *
 * Represents a change in an audit log.
 *
 * @see {@link https://discord.com/developers/docs/resources/audit-log#audit-log-object-audit-log-change-structure}
 */
export const AuditLogChangeStructure = z.object({
	key: z.string(),
	new_value: z.any().optional(),
	old_value: z.any().optional(),
});

/**
 * Audit Log Change Structure Infer
 *
 * The inferred type of {@link AuditLogChangeStructure}
 */
export type AuditLogChangeStructureInfer = z.infer<typeof AuditLogChangeStructure>;

/**
 * Audit Log Entry Info Structure
 *
 * Represents the optional audit log entry info.
 *
 * @see {@link https://discord.com/developers/docs/resources/audit-log#audit-log-object-audit-log-entry-info-structure}
 */
export const AuditLogEntryInfoStructure = z.object({
	application_id: Snowflake.optional(),
	auto_moderation_rule_name: z.string().optional(),
	auto_moderation_rule_trigger_type: z.string().optional(),
	channel_id: Snowflake.optional(),
	count: z.string().optional(),
	delete_member_days: z.string().optional(),
	id: Snowflake.optional(),
	members_removed: z.string().optional(),
	message_id: Snowflake.optional(),
	role_name: z.string().optional(),
	type: z.string().optional(),
	integration_type: z.string().optional(),
});

/**
 * Audit Log Entry Info Structure Infer
 *
 * The inferred type of {@link AuditLogEntryInfoStructure}
 */
export type AuditLogEntryInfoStructureInfer = z.infer<typeof AuditLogEntryInfoStructure>;

/**
 * Audit Log Events
 *
 * The types of audit log events.
 *
 * @see {@link https://discord.com/developers/docs/resources/audit-log#audit-log-object-audit-log-events}
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
 * Audit Log Events Changes
 *
 * The types of audit log events changes.
 */
export type AuditLogEventsChanges = {
	[AuditLogEvents.GuildUpdate]: [guild: GuildStructureInfer];
	[AuditLogEvents.ChannelCreate]: [channel: ChannelStructureInfer];
	[AuditLogEvents.ChannelUpdate]: [channel: ChannelStructureInfer];
	[AuditLogEvents.ChannelDelete]: [channel: ChannelStructureInfer];
	[AuditLogEvents.ChannelOverwriteCreate]: [channelOverwrite: OverwriteStructureInfer];
	[AuditLogEvents.ChannelOverwriteUpdate]: [channelOverwrite: OverwriteStructureInfer];
	[AuditLogEvents.ChannelOverwriteDelete]: [channelOverwrite: OverwriteStructureInfer];
	[AuditLogEvents.MemberKick]: [member: unknown];
	[AuditLogEvents.MemberPrune]: [member: unknown];
	[AuditLogEvents.MemberBanAdd]: [member: unknown];
	[AuditLogEvents.MemberBanRemove]: [member: unknown];
	[AuditLogEvents.MemberUpdate]: [member: GuildMemberStructureInfer];
	[AuditLogEvents.MemberRoleUpdate]: [role: Partial<RoleStructureInfer>];
	[AuditLogEvents.MemberMove]: [member: unknown];
	[AuditLogEvents.MemberDisconnect]: [member: unknown];
	[AuditLogEvents.BotAdd]: [bot: unknown];
	[AuditLogEvents.RoleCreate]: [role: RoleStructureInfer];
	[AuditLogEvents.RoleUpdate]: [role: RoleStructureInfer];
	[AuditLogEvents.RoleDelete]: [role: RoleStructureInfer];
	[AuditLogEvents.InviteCreate]: [invite: InviteMetadataStructureInfer | InviteStructureInfer];
	[AuditLogEvents.InviteUpdate]: [invite: InviteMetadataStructureInfer | InviteStructureInfer];
	[AuditLogEvents.InviteDelete]: [invite: InviteMetadataStructureInfer | InviteStructureInfer];
	[AuditLogEvents.WebhookCreate]: [webhook: WebhookStructureInfer];
	[AuditLogEvents.WebhookUpdate]: [webhook: WebhookStructureInfer];
	[AuditLogEvents.WebhookDelete]: [webhook: WebhookStructureInfer];
	[AuditLogEvents.EmojiCreate]: [emoji: EmojiStructureInfer];
	[AuditLogEvents.EmojiUpdate]: [emoji: EmojiStructureInfer];
	[AuditLogEvents.EmojiDelete]: [emoji: EmojiStructureInfer];
	[AuditLogEvents.MessageDelete]: [message: unknown];
	[AuditLogEvents.MessageBulkDelete]: [messages: unknown];
	[AuditLogEvents.MessagePin]: [message: unknown];
	[AuditLogEvents.MessageUnpin]: [message: unknown];
	[AuditLogEvents.IntegrationCreate]: [integration: IntegrationStructureInfer];
	[AuditLogEvents.IntegrationUpdate]: [integration: IntegrationStructureInfer];
	[AuditLogEvents.IntegrationDelete]: [integration: IntegrationStructureInfer];
	[AuditLogEvents.StageInstanceCreate]: [stageInstance: StageInstanceStructureInfer];
	[AuditLogEvents.StageInstanceUpdate]: [stageInstance: StageInstanceStructureInfer];
	[AuditLogEvents.StageInstanceDelete]: [stageInstance: StageInstanceStructureInfer];
	[AuditLogEvents.StickerCreate]: [sticker: StickerStructureInfer];
	[AuditLogEvents.StickerUpdate]: [sticker: StickerStructureInfer];
	[AuditLogEvents.StickerDelete]: [sticker: StickerStructureInfer];
	[AuditLogEvents.GuildScheduledEventCreate]: [event: GuildScheduledEventStructureInfer];
	[AuditLogEvents.GuildScheduledEventUpdate]: [event: GuildScheduledEventStructureInfer];
	[AuditLogEvents.GuildScheduledEventDelete]: [event: GuildScheduledEventStructureInfer];
	[AuditLogEvents.ThreadCreate]: [thread: ChannelStructureInfer];
	[AuditLogEvents.ThreadUpdate]: [thread: ChannelStructureInfer];
	[AuditLogEvents.ThreadDelete]: [thread: ChannelStructureInfer];
	[AuditLogEvents.ApplicationCommandPermissionUpdate]: [command: ApplicationCommandPermissionStructureInfer];
	[AuditLogEvents.AutoModerationRuleCreate]: [rule: AutoModerationRuleStructureInfer];
	[AuditLogEvents.AutoModerationRuleUpdate]: [rule: AutoModerationRuleStructureInfer];
	[AuditLogEvents.AutoModerationRuleDelete]: [rule: AutoModerationRuleStructureInfer];
	[AuditLogEvents.AutoModerationBlockMessage]: [message: unknown];
	[AuditLogEvents.AutoModerationFlagToChannel]: [message: unknown];
	[AuditLogEvents.AutoModerationUserCommunicationDisabled]: [member: unknown];
	[AuditLogEvents.CreatorMonetizationRequestCreated]: [request: unknown];
	[AuditLogEvents.CreatorMonetizationTermsAccepted]: [terms: unknown];
};

/**
 * Audit Log Entry Structure
 *
 * Represents an audit log entry.
 *
 * @see {@link https://discord.com/developers/docs/resources/audit-log#audit-log-object-audit-log-entry-structure}
 */
export const AuditLogEntryStructure = z.object({
	target_id: Snowflake.nullable(),
	changes: z.array(AuditLogChangeStructure).optional(),
	user_id: Snowflake.nullable(),
	id: Snowflake,
	action_type: AuditLogEventsEnum,
	options: AuditLogEntryInfoStructure.optional(),
	reason: z.string().min(1).max(512).optional(),
});

/**
 * Audit Log Entry Structure Infer
 *
 * The inferred type of {@link AuditLogEntryStructure}
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
	application_commands: z.array(ApplicationCommandStructure).optional(),
	audit_log_entries: z.array(AuditLogEntryStructure),
	auto_moderation_rules: z.array(AutoModerationRuleStructure).optional(),
	guild_scheduled_events: z.array(GuildScheduledEventStructure).optional(),
	integrations: z.array(IntegrationStructure.partial()).optional(),
	threads: z.array(ChannelStructure.partial()).optional(),
	users: z.array(UserStructure),
	webhooks: z.array(WebhookStructure).optional(),
});

/**
 * Audit Log Structure Infer
 *
 * The inferred type of {@link AuditLogStructure}
 */
export type AuditLogStructureInfer = z.infer<typeof AuditLogStructure>;
