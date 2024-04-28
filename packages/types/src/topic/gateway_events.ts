/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#gateway-events}
 */

import type { ApiVersion } from "@aurajs/core";
import type { Integer, ISO8601Timestamp, Snowflake } from "../globals";
import type { ApplicationStructure } from "../structures/application";
import type { AuditLogEntryStructure } from "../structures/audit";
import type { ChannelStructure, MessageStructure, ThreadMemberStructure } from "../structures/channel";
import type { EmojiStructure } from "../structures/emoji";
import type { EntitlementStructure } from "../structures/entitlements";
import type {
	GuildMemberStructure,
	GuildScheduledEventStructure,
	GuildStructure,
	IntegrationStructure,
} from "../structures/guild";
import type { GuildApplicationCommandPermissionStructure, InteractionStructure } from "../structures/interactions";
import type { AutoModerationActionStructure, AutoModerationRuleStructure } from "../structures/moderation";
import type { RoleStructure } from "../structures/role";
import type { StageInstanceStructure } from "../structures/stage";
import type { StickerStructure } from "../structures/sticker";
import type { UserStructure } from "../structures/user";
import type { VoiceStateStructure } from "../structures/voice";
import type { GatewayIntentBits } from "./gateway";
import type { GatewayOpcodes } from "./opcodes";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#payload-structure}
 */
export type GatewayPayload<T extends keyof GatewaySendEvents> = {
	d?: GatewaySendEvents[T];
	op: T;
	s?: Integer;
	t?: string;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#send-events}
 */
export type GatewaySendEvents = {
	[GatewayOpcodes.Identify]: GatewayIdentifyStructure;
	[GatewayOpcodes.Resume]: GatewayResumeStructure;
	[GatewayOpcodes.Heartbeat]: Integer;
	[GatewayOpcodes.RequestGuildMembers]: GatewayRequestGuildMembersStructure;
	[GatewayOpcodes.VoiceStateUpdate]: GatewayVoiceStateUpdateStructure;
	[GatewayOpcodes.PresenceUpdate]: GatewayPresenceUpdateStructure;
	[GatewayOpcodes.Dispatch]: GatewayReceiveEvents;
	[GatewayOpcodes.Reconnect]: null;
	[GatewayOpcodes.InvalidSession]: false;
	[GatewayOpcodes.Hello]: HelloEventFields;
	[GatewayOpcodes.HeartbeatAck]: null;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#identify-identify-structure}
 */
export type GatewayIdentifyStructure = {
	compress?: boolean;
	intents: GatewayIntentBits[];
	large_threshold?: Integer;
	presence?: GatewayPresenceUpdateStructure;
	properties: GatewayIdentifyConnectionProperties;
	shard?: [shard_id: Integer, num_shards: Integer];
	token: string;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#identify-identify-connection-properties}
 */
export type GatewayIdentifyConnectionProperties = {
	browser: string;
	device: string;
	os: string;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#resume-resume-structure}
 */
export type GatewayResumeStructure = {
	seq: Integer;
	session_id: string;
	token: string;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#request-guild-members-request-guild-members-structure}
 */
export type GatewayRequestGuildMembersStructure = {
	guild_id: Snowflake;
	limit: Integer;
	nonce?: string;
	presences?: boolean;
	query?: string;
	user_ids?: Snowflake | Snowflake[];
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#update-voice-state-gateway-voice-state-update-structure}
 */
export type GatewayVoiceStateUpdateStructure = {
	channel_id: Snowflake | null;
	guild_id: Snowflake;
	self_deaf: boolean;
	self_mute: boolean;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#update-presence-gateway-presence-update-structure}
 */
export type GatewayPresenceUpdateStructure = {
	activities: ActivityStructure[];
	afk: boolean;
	since: Integer | null;
	status: StatusTypes;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#update-presence-status-types}
 */
export enum StatusTypes {
	AwayFromKeyboard = "idle",
	DoNotDisturb = "dnd",
	Invisible = "invisible",
	Offline = "offline",
	Online = "online",
}

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#receive-events}
 */
export enum GatewayReceiveEvents {
	ApplicationCommandPermissionsUpdate = "APPLICATION_COMMAND_PERMISSIONS_UPDATE",
	AutoModerationActionExecution = "AUTO_MODERATION_ACTION_EXECUTION",
	AutoModerationRuleCreate = "AUTO_MODERATION_RULE_CREATE",
	AutoModerationRuleDelete = "AUTO_MODERATION_RULE_DELETE",
	AutoModerationRuleUpdate = "AUTO_MODERATION_RULE_UPDATE",
	ChannelCreate = "CHANNEL_CREATE",
	ChannelDelete = "CHANNEL_DELETE",
	ChannelPinsUpdate = "CHANNEL_PINS_UPDATE",
	ChannelUpdate = "CHANNEL_UPDATE",
	EntitlementCreate = "ENTITLEMENT_CREATE",
	EntitlementDelete = "ENTITLEMENT_DELETE",
	EntitlementUpdate = "ENTITLEMENT_UPDATE",
	GuildAuditLogEntryCreate = "GUILD_AUDIT_LOG_ENTRY_CREATE",
	GuildBanAdd = "GUILD_BAN_ADD",
	GuildBanRemove = "GUILD_BAN_REMOVE",
	GuildCreate = "GUILD_CREATE",
	GuildDelete = "GUILD_DELETE",
	GuildEmojisUpdate = "GUILD_EMOJIS_UPDATE",
	GuildIntegrationsUpdate = "GUILD_INTEGRATIONS_UPDATE",
	GuildMemberAdd = "GUILD_MEMBER_ADD",
	GuildMemberRemove = "GUILD_MEMBER_REMOVE",
	GuildMemberUpdate = "GUILD_MEMBER_UPDATE",
	GuildMembersChunk = "GUILD_MEMBERS_CHUNK",
	GuildRoleCreate = "GUILD_ROLE_CREATE",
	GuildRoleDelete = "GUILD_ROLE_DELETE",
	GuildRoleUpdate = "GUILD_ROLE_UPDATE",
	GuildScheduledEventCreate = "GUILD_SCHEDULED_EVENT_CREATE",
	GuildScheduledEventDelete = "GUILD_SCHEDULED_EVENT_DELETE",
	GuildScheduledEventUpdate = "GUILD_SCHEDULED_EVENT_UPDATE",
	GuildScheduledEventUserAdd = "GUILD_SCHEDULED_EVENT_USER_ADD",
	GuildScheduledEventUserRemove = "GUILD_SCHEDULED_EVENT_USER_REMOVE",
	GuildStickersUpdate = "GUILD_STICKERS_UPDATE",
	GuildUpdate = "GUILD_UPDATE",
	Hello = "HELLO",
	IntegrationCreate = "INTEGRATION_CREATE",
	IntegrationDelete = "INTEGRATION_DELETE",
	IntegrationUpdate = "INTEGRATION_UPDATE",
	InteractionCreate = "INTERACTION_CREATE",
	InvalidSession = "INVALID_SESSION",
	InviteCreate = "INVITE_CREATE",
	InviteDelete = "INVITE_DELETE",
	MessageCreate = "MESSAGE_CREATE",
	MessageDelete = "MESSAGE_DELETE",
	MessageDeleteBulk = "MESSAGE_DELETE_BULK",
	MessagePollVoteAdd = "MESSAGE_POLL_VOTE_ADD",
	MessagePollVoteRemove = "MESSAGE_POLL_VOTE_REMOVE",
	MessageReactionAdd = "MESSAGE_REACTION_ADD",
	MessageReactionRemove = "MESSAGE_REACTION_REMOVE",
	MessageReactionRemoveAll = "MESSAGE_REACTION_REMOVE_ALL",
	MessageReactionRemoveEmoji = "MESSAGE_REACTION_REMOVE_EMOJI",
	MessageUpdate = "MESSAGE_UPDATE",
	PresenceUpdate = "PRESENCE_UPDATE",
	Ready = "READY",
	Reconnect = "RECONNECT",
	Resumed = "RESUMED",
	StageInstanceCreate = "STAGE_INSTANCE_CREATE",
	StageInstanceDelete = "STAGE_INSTANCE_DELETE",
	StageInstanceUpdate = "STAGE_INSTANCE_UPDATE",
	ThreadCreate = "THREAD_CREATE",
	ThreadDelete = "THREAD_DELETE",
	ThreadListSync = "THREAD_LIST_SYNC",
	ThreadMemberUpdate = "THREAD_MEMBER_UPDATE",
	ThreadMembersUpdate = "THREAD_MEMBERS_UPDATE",
	ThreadUpdate = "THREAD_UPDATE",
	TypingStart = "TYPING_START",
	UserUpdate = "USER_UPDATE",
	VoiceServerUpdate = "VOICE_SERVER_UPDATE",
	VoiceStateUpdate = "VOICE_STATE_UPDATE",
	WebhooksUpdate = "WEBHOOKS_UPDATE",
}

export type GatewayReceiveEventsOptions = {
	[GatewayReceiveEvents.Hello]: [hello: HelloEventFields];
	[GatewayReceiveEvents.Ready]: [ready: ReadyEventFields];
	[GatewayReceiveEvents.Resumed]: [resumed: GatewayResumeStructure];
	[GatewayReceiveEvents.Reconnect]: [reconnect: null];
	[GatewayReceiveEvents.InvalidSession]: [invalidSession: false];
	[GatewayReceiveEvents.ApplicationCommandPermissionsUpdate]: [applicationCommandPermissionsUpdate: GuildApplicationCommandPermissionStructure];
	[GatewayReceiveEvents.AutoModerationRuleCreate]: [autoModerationRuleCreate: AutoModerationRuleStructure];
	[GatewayReceiveEvents.AutoModerationRuleUpdate]: [autoModerationRuleUpdate: AutoModerationRuleStructure];
	[GatewayReceiveEvents.AutoModerationRuleDelete]: [autoModerationRuleDelete: AutoModerationRuleStructure];
	[GatewayReceiveEvents.AutoModerationActionExecution]: [autoModerationActionExecution: AutoModerationActionExecutionEventFields];
	[GatewayReceiveEvents.ChannelCreate]: [channelCreate: ChannelStructure];
	[GatewayReceiveEvents.ChannelUpdate]: [channelUpdate: ChannelStructure];
	[GatewayReceiveEvents.ChannelDelete]: [channelDelete: ChannelStructure];
	[GatewayReceiveEvents.ChannelPinsUpdate]: [channelPinsUpdate: ChannelPinsUpdateEventFields];
	[GatewayReceiveEvents.ThreadCreate]: [threadCreate: ChannelStructure];
	[GatewayReceiveEvents.ThreadUpdate]: [threadUpdate: ChannelStructure];
	[GatewayReceiveEvents.ThreadDelete]: [threadDelete: ChannelStructure];
	[GatewayReceiveEvents.ThreadListSync]: [threadListSync: ThreadListSyncEventFields];
	[GatewayReceiveEvents.ThreadMemberUpdate]: [threadMemberUpdate: ThreadMemberStructure & ThreadMemberUpdateExtraFields];
	[GatewayReceiveEvents.ThreadMembersUpdate]: [threadMembersUpdate: ThreadMembersUpdateEventFields];
	[GatewayReceiveEvents.EntitlementCreate]: [entitlementCreate: EntitlementStructure];
	[GatewayReceiveEvents.EntitlementUpdate]: [entitlementUpdate: EntitlementStructure];
	[GatewayReceiveEvents.EntitlementDelete]: [entitlementDelete: EntitlementStructure];
	[GatewayReceiveEvents.GuildCreate]: [guildCreate: GuildCreateExtraFields];
	[GatewayReceiveEvents.GuildUpdate]: [guildUpdate: GuildStructure];
	[GatewayReceiveEvents.GuildDelete]: [guildDelete: {
		id: Snowflake;
		unavailable: boolean;
	}];
	[GatewayReceiveEvents.GuildAuditLogEntryCreate]: [guildAuditLogEntryCreate: AuditLogEntryStructure];
	[GatewayReceiveEvents.GuildBanAdd]: [guildBanAdd: GuildBanAddEventFields];
	[GatewayReceiveEvents.GuildBanRemove]: [guildBanRemove: GuildBanRemoveEventFields];
	[GatewayReceiveEvents.GuildEmojisUpdate]: [guildEmojisUpdate: GuildEmojisUpdateEventFields];
	[GatewayReceiveEvents.GuildStickersUpdate]: [guildStickersUpdate: GuildStickersUpdateEventFields];
	[GatewayReceiveEvents.GuildIntegrationsUpdate]: [guildIntegrationsUpdate: GuildIntegrationsUpdateEventFields];
	[GatewayReceiveEvents.GuildMemberAdd]: [guildMemberAdd: GuildMemberAddExtraFields & GuildMemberStructure];
	[GatewayReceiveEvents.GuildMemberRemove]: [guildMemberRemove: GuildMemberRemoveEventFields];
	[GatewayReceiveEvents.GuildMemberUpdate]: [guildMemberUpdate: GuildMemberUpdateEventFields];
	[GatewayReceiveEvents.GuildMembersChunk]: [guildMembersChunk: GuildMembersChunkEventFields];
	[GatewayReceiveEvents.GuildRoleCreate]: [guildRoleCreate: GuildRoleCreateEventFields];
	[GatewayReceiveEvents.GuildRoleUpdate]: [guildRoleUpdate: GuildRoleUpdateEventFields];
	[GatewayReceiveEvents.GuildRoleDelete]: [guildRoleDelete: GuildRoleDeleteEventFields];
	[GatewayReceiveEvents.GuildScheduledEventCreate]: [guildScheduledEventCreate: GuildScheduledEventStructure];
	[GatewayReceiveEvents.GuildScheduledEventUpdate]: [guildScheduledEventUpdate: GuildScheduledEventStructure];
	[GatewayReceiveEvents.GuildScheduledEventDelete]: [guildScheduledEventDelete: GuildScheduledEventStructure];
	[GatewayReceiveEvents.GuildScheduledEventUserAdd]: [guildScheduledEventUserAdd: GuildScheduledEventUserAddEventFields];
	[GatewayReceiveEvents.GuildScheduledEventUserRemove]: [guildScheduledEventUserRemove: GuildScheduledEventUserRemoveEventFields];
	[GatewayReceiveEvents.IntegrationCreate]: [integrationCreate: IntegrationCreateEventAdditionalFields & IntegrationStructure];
	[GatewayReceiveEvents.IntegrationUpdate]: [integrationUpdate: IntegrationStructure & IntegrationUpdateEventAdditionalFields];
	[GatewayReceiveEvents.IntegrationDelete]: [integrationDelete: IntegrationDeleteEventFields];
	[GatewayReceiveEvents.InteractionCreate]: [interactionCreate: InteractionStructure];
	[GatewayReceiveEvents.InviteCreate]: [inviteCreate: InviteCreateEventFields];
	[GatewayReceiveEvents.InviteDelete]: [inviteDelete: InviteDeleteEventFields];
	[GatewayReceiveEvents.MessageCreate]: [messageCreate: MessageCreateExtraFields & MessageStructure];
	[GatewayReceiveEvents.MessageUpdate]: [messageUpdate: MessageStructure];
	[GatewayReceiveEvents.MessageDelete]: [messageDelete: MessageDeleteEventFields];
	[GatewayReceiveEvents.MessageDeleteBulk]: [messageDeleteBulk: MessageDeleteBulkEventFields];
	[GatewayReceiveEvents.MessageReactionAdd]: [messageReactionAdd: MessageReactionAddEventFields];
	[GatewayReceiveEvents.MessageReactionRemove]: [messageReactionRemove: MessageReactionRemoveEventFields];
	[GatewayReceiveEvents.MessageReactionRemoveAll]: [messageReactionRemoveAll: MessageReactionRemoveAllEventFields];
	[GatewayReceiveEvents.MessageReactionRemoveEmoji]: [messageReactionRemoveEmoji: MessageReactionRemoveEmojiEventFields];
	[GatewayReceiveEvents.PresenceUpdate]: [presenceUpdate: PresenceUpdateEventFields];
	[GatewayReceiveEvents.StageInstanceCreate]: [stageInstanceCreate: StageInstanceStructure];
	[GatewayReceiveEvents.StageInstanceUpdate]: [stageInstanceUpdate: StageInstanceStructure];
	[GatewayReceiveEvents.StageInstanceDelete]: [stageInstanceDelete: StageInstanceStructure];
	[GatewayReceiveEvents.TypingStart]: [typingStart: TypingStartEventFields];
	[GatewayReceiveEvents.UserUpdate]: [userUpdate: UserStructure];
	[GatewayReceiveEvents.VoiceStateUpdate]: [voiceStateUpdate: VoiceStateStructure];
	[GatewayReceiveEvents.VoiceServerUpdate]: [voiceServerUpdate: VoiceServerUpdateEventFields];
	[GatewayReceiveEvents.WebhooksUpdate]: [webhooksUpdate: WebhooksUpdateEventFields];
	[GatewayReceiveEvents.MessagePollVoteAdd]: [messagePollVoteAdd: MessagePollVoteAddFields];
	[GatewayReceiveEvents.MessagePollVoteRemove]: [messagePollVoteRemove: MessagePollVoteRemoveFields];
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#hello-hello-structure}
 */
export type HelloEventFields = {
	heartbeat_interval: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#ready-ready-event-fields}
 */
export type ReadyEventFields = {
	application: ApplicationStructure;
	guilds: {
		id: Snowflake;
		unavailable?: boolean;
	};
	resume_gateway_url: string;
	session_id: string;
	shard?: [shard_id: Integer, num_shards: Integer];
	user: UserStructure;
	v: ApiVersion;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#auto-moderation-action-execution-auto-moderation-action-execution-event-fields}
 */
export type AutoModerationActionExecutionEventFields = {
	actions: AutoModerationActionStructure[];
	alert_system_message_id?: Snowflake;
	channel_id?: Snowflake;
	content: string;
	guild_id: Snowflake;
	matched_content?: NonNullable<string>;
	matched_keyword: NonNullable<string>;
	message_id?: Snowflake;
	rule_id: Snowflake;
	rule_trigger_type: Integer;
	user_id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#thread-list-sync-thread-list-sync-event-fields}
 */
export type ThreadListSyncEventFields = {
	channel_ids: Snowflake[];
	guild_id: Snowflake;
	members: ThreadMemberStructure[];
	threads: ChannelStructure[];
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#thread-member-update-thread-member-update-event-extra-fields}
 */
export type ThreadMemberUpdateExtraFields = {
	guild_id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#thread-members-update-thread-members-update-event-fields}
 */
export type ThreadMembersUpdateEventFields = {
	added_members?: ThreadMemberStructure[];
	guild_id: Snowflake;
	id: Snowflake;
	member_count: Integer;
	removed_member_ids?: Snowflake[];
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#channel-pins-update-channel-pins-update-event-fields}
 */
export type ChannelPinsUpdateEventFields = {
	channel_id: Snowflake;
	guild_id?: Snowflake;
	last_pin_timestamp?: ISO8601Timestamp | null;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-create-guild-create-extra-fields}
 */
export type GuildCreateExtraFields = {
	channels: ChannelStructure[];
	guild_scheduled_events: GuildScheduledEventStructure[];
	joined_at?: ISO8601Timestamp;
	large: boolean;
	member_count: Integer;
	members: GuildMemberStructure[];
	presences: PresenceUpdateEventFields[];
	stage_instances: StageInstanceStructure[];
	threads: ChannelStructure[];
	unavailable?: boolean;
	voice_states: VoiceStateStructure[];
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-ban-add-guild-ban-add-event-fields}
 */
export type GuildBanAddEventFields = {
	guild_id: Snowflake;
	user: UserStructure;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-ban-remove-guild-ban-remove-event-fields}
 */
export type GuildBanRemoveEventFields = {
	guild_id: Snowflake;
	user: UserStructure;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-emojis-update-guild-emojis-update-event-fields}
 */
export type GuildEmojisUpdateEventFields = {
	emojis: EmojiStructure[];
	guild_id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-stickers-update-guild-stickers-update-event-fields}
 */
export type GuildStickersUpdateEventFields = {
	guild_id: Snowflake;
	stickers: StickerStructure[];
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
	user: UserStructure;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-member-update-guild-member-update-event-fields}
 */
export type GuildMemberUpdateEventFields = {
	avatar?: string;
	communication_disabled_until?: ISO8601Timestamp | null;
	deaf: boolean;
	guild_id: Snowflake;
	joined_at?: ISO8601Timestamp | null;
	mute: boolean;
	nick?: string;
	pending: boolean;
	premium_since?: string;
	roles: Snowflake[];
	user: UserStructure;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-members-chunk-guild-members-chunk-event-fields}
 */
export type GuildMembersChunkEventFields = {
	chunk_count: Integer;
	chunk_index: Integer;
	guild_id: Snowflake;
	members: GuildMemberStructure[];
	nonce?: string;
	not_found?: Snowflake[];
	presences?: PresenceUpdateEventFields[];
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-role-create-guild-role-create-event-fields}
 */
export type GuildRoleCreateEventFields = {
	guild_id: Snowflake;
	role: RoleStructure;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-role-update-guild-role-update-event-fields}
 */
export type GuildRoleUpdateEventFields = {
	guild_id: Snowflake;
	role: RoleStructure;
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

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#integration-create-integration-create-event-additional-fields}
 */
export type IntegrationCreateEventAdditionalFields = {
	guild_id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#integration-update-integration-update-event-additional-fields}
 */
export type IntegrationUpdateEventAdditionalFields = {
	guild_id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#integration-delete-integration-delete-event-fields}
 */
export type IntegrationDeleteEventFields = {
	application_id?: Snowflake;
	guild_id: Snowflake;
	id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#invite-create-invite-create-event-fields}
 */
export type InviteCreateEventFields = {
	channel_id: Snowflake;
	code: string;
	created_at: string;
	guild_id?: Snowflake;
	inviter?: UserStructure;
	max_age: Integer;
	max_uses: Integer;
	target_application?: ApplicationStructure;
	target_type?: Integer;
	target_user?: UserStructure;
	temporary: boolean;
	uses: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#invite-delete-invite-delete-event-fields}
 */
export type InviteDeleteEventFields = {
	channel_id: Snowflake;
	code: string;
	guild_id?: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-create-message-create-extra-fields}
 */
export type MessageCreateExtraFields = {
	guild_id?: Snowflake;
	member?: GuildMemberStructure;
	mentions: (GuildMemberStructure & UserStructure)[];
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-delete-message-delete-event-fields}
 */
export type MessageDeleteEventFields = {
	channel_id: Snowflake;
	guild_id?: Snowflake;
	id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-delete-bulk-message-delete-bulk-event-fields}
 */
export type MessageDeleteBulkEventFields = {
	channel_id: Snowflake;
	guild_id?: Snowflake;
	ids: Snowflake[];
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-reaction-add-message-reaction-add-event-fields}
 */
export type MessageReactionAddEventFields = {
	channel_id: Snowflake;
	emoji: EmojiStructure;
	guild_id?: Snowflake;
	member?: GuildMemberStructure;
	message_author_id?: Snowflake;
	message_id: Snowflake;
	user_id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-reaction-remove-message-reaction-remove-event-fields}
 */
export type MessageReactionRemoveEventFields = {
	channel_id: Snowflake;
	emoji: EmojiStructure;
	guild_id?: Snowflake;
	message_id: Snowflake;
	user_id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-reaction-remove-all-message-reaction-remove-all-event-fields}
 */
export type MessageReactionRemoveAllEventFields = {
	channel_id: Snowflake;
	guild_id?: Snowflake;
	message_id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-reaction-remove-emoji-message-reaction-remove-emoji-event-fields}
 */
export type MessageReactionRemoveEmojiEventFields = {
	channel_id: Snowflake;
	emoji: EmojiStructure;
	guild_id?: Snowflake;
	message_id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#presence-update-presence-update-event-fields}
 */
export type PresenceUpdateEventFields = {
	activities: ActivityStructure[];
	client_status: ClientStatus;
	guild_id: Snowflake;
	status: string;
	user: UserStructure;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#client-status-object}
 */
export type ClientStatus = {
	desktop?: string;
	mobile?: string;
	web?: string;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-structure}
 */
export type ActivityStructure = {
	application_id?: Snowflake;
	assets?: ActivityAssets;
	buttons?: ActivityButtons[];
	created_at: Integer;
	details?: string;
	emoji?: ActivityEmoji;
	flags?: ActivityFlags;
	instance?: boolean;
	name: string;
	party?: ActivityParty;
	secrets?: ActivitySecrets;
	state?: string;
	timestamps?: ActivityTimestamps;
	type: ActivityTypes;
	url?: string | null;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-types}
 */
export enum ActivityTypes {
	Game = 0,
	Streaming = 1,
	Listening = 2,
	Watching = 3,
	Custom = 4,
	Competing = 5,
}

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-timestamps}
 */
export type ActivityTimestamps = {
	end?: Integer;
	start?: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-emoji}
 */
export type ActivityEmoji = {
	animated?: boolean;
	id?: Snowflake;
	name: string;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-party}
 */
export type ActivityParty = {
	id?: string;
	size?: [current_size: Integer, max_size: Integer];
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-assets}
 */
export type ActivityAssets = {
	large_image?: string;
	large_text?: string;
	small_image?: string;
	small_text?: string;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-secrets}
 */
export type ActivitySecrets = {
	join?: string;
	match?: string;
	spectate?: string;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-flags}
 */
export enum ActivityFlags {
	Instance = 1,
	Join = 2,
	Spectate = 4,
	JoinRequest = 8,
	Sync = 16,
	Play = 32,
	PartyPrivacyFriends = 64,
	PartyPrivacyVoiceChannel = 128,
	Embedded = 256,
}

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-buttons}
 */
export type ActivityButtons = {
	label: string;
	url: string;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#typing-start-typing-start-event-fields}
 */
export type TypingStartEventFields = {
	channel_id: Snowflake;
	guild_id?: Snowflake;
	member?: GuildMemberStructure;
	timestamp: Integer;
	user_id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#voice-server-update-voice-server-update-event-fields}
 */
export type VoiceServerUpdateEventFields = {
	endpoint: string | null;
	guild_id: Snowflake;
	token: string;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#webhooks-update-webhooks-update-event-fields}
 */
export type WebhooksUpdateEventFields = {
	channel_id: Snowflake;
	guild_id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-poll-vote-add-message-poll-vote-add-fields}
 */
export type MessagePollVoteAddFields = {
	answer_id: Integer;
	channel_id: Snowflake;
	guild_id?: Snowflake;
	message_id: Snowflake;
	user_id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-poll-vote-remove-message-poll-vote-remove-fields}
 */
export type MessagePollVoteRemoveFields = {
	answer_id: Integer;
	channel_id: Snowflake;
	guild_id?: Snowflake;
	message_id: Snowflake;
	user_id: Snowflake;
};
