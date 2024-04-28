/**
 * @see {@link https://discord.com/developers/docs/resources/audit-log#audit-logs-resource}
 */

import type { Snowflake } from "../globals";
import type { ChannelStructure } from "./channel";
import type { GuildScheduledEventStructure } from "./guild";
import type { ApplicationCommandStructure, InteractionStructure } from "./interactions";
import type { AutoModerationRuleStructure } from "./moderation";
import type { UserStructure } from "./user";
import type { WebhookStructure } from "./webhook";

/**
 * @see {@link https://discord.com/developers/docs/resources/audit-log#audit-log-object-audit-log-structure}
 */
export type AuditLogStructure = {
	application_commands: ApplicationCommandStructure[];
	audit_log_entries: AuditLogEntryStructure[];
	auto_moderation_rules: AutoModerationRuleStructure[];
	guild_scheduled_events: GuildScheduledEventStructure[];
	integrations: InteractionStructure[];
	threads: ChannelStructure[];
	users: UserStructure[];
	webhooks: WebhookStructure[];
};

/**
 * @see {@link https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-entry-structure}
 */
export type AuditLogEntryStructure = {
	action_type: AuditLogEvents;
	changes?: AuditLogChangeStructure[];
	id: Snowflake;
	options?: OptionalAuditEntryInfo;
	reason?: string;
	target_id?: Snowflake;
	user_id?: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-events}
 */
export enum AuditLogEvents {
	GuildUpdate = 1,
	ChannelCreate = 10,
	ChannelUpdate = 11,
	ChannelDelete = 12,
	ChannelOverwriteCreate = 13,
	ChannelOverwriteUpdate = 14,
	ChannelOverwriteDelete = 15,
	MemberKick = 20,
	MemberPrune = 21,
	MemberBanAdd = 22,
	MemberBanRemove = 23,
	MemberUpdate = 24,
	MemberRoleUpdate = 25,
	MemberMove = 26,
	MemberDisconnect = 27,
	BotAdd = 28,
	RoleCreate = 30,
	RoleUpdate = 31,
	RoleDelete = 32,
	InviteCreate = 40,
	InviteUpdate = 41,
	InviteDelete = 42,
	WebhookCreate = 50,
	WebhookUpdate = 51,
	WebhookDelete = 52,
	EmojiCreate = 60,
	EmojiUpdate = 61,
	EmojiDelete = 62,
	MessageDelete = 72,
	MessageBulkDelete = 73,
	MessagePin = 74,
	MessageUnpin = 75,
	IntegrationCreate = 80,
	IntegrationUpdate = 81,
	IntegrationDelete = 82,
	StageInstanceCreate = 83,
	StageInstanceUpdate = 84,
	StageInstanceDelete = 85,
	StickerCreate = 90,
	StickerUpdate = 91,
	StickerDelete = 92,
	GuildScheduledEventCreate = 100,
	GuildScheduledEventUpdate = 101,
	GuildScheduledEventDelete = 102,
	ThreadCreate = 110,
	ThreadUpdate = 111,
	ThreadDelete = 112,
	ApplicationCommandPermissionUpdate = 121,
	AutoModerationRuleCreate = 140,
	AutoModerationRuleUpdate = 141,
	AutoModerationRuleDelete = 142,
	AutoModerationBlockMessage = 143,
	AutoModerationFlagToChannel = 144,
	AutoModerationUserCommunicationDisabled = 145,
	CreatorMonetizationRequestCreated = 150,
	CreatorMonetizationTermsAccepted = 151,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-optional-audit-entry-info}
 */
export type OptionalAuditEntryInfo = {
	application_id?: Snowflake;
	auto_moderation_rule_name?: string;
	auto_moderation_rule_trigger_type?: string;
	channel_id?: Snowflake;
	count?: string;
	delete_member_days?: string;
	id?: Snowflake;
	integration_type?: string;
	members_removed?: string;
	message_id?: Snowflake;
	role_name?: string;
	type?: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/audit-log#audit-log-change-object-audit-log-change-structure}
 */
export type AuditLogChangeStructure = {
	key: string;
	new_value?: any;
	old_value?: any;
};
