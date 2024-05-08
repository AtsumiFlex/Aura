import type {
	ApplicationCommandPermissionsStructureInfer,
	AuditLogEntryInfoStructureInfer,
	AutoModerationRuleStructureInfer,
	ChannelStructureInfer,
	EntitlementStructureInfer,
	GatewayOpcodes,
	GuildMemberStructureInfer,
	GuildScheduledEventStructureInfer,
	GuildStructureInfer,
	IntegrationStructureInfer,
	InteractionStructureInfer,
	MessageStructureInfer,
	SnowflakeInfer,
	StageInstanceStructureInfer,
	ThreadMemberStructureInfer,
	UserStructureInfer,
	VoiceStateStructureInfer,
} from "@aurajs/core";
import type {
	ChannelPinsUpdateEventFieldsInfer,
	ThreadListSyncEventFieldsInfer,
	ThreadMembersUpdateEventFieldsInfer,
	ThreadMemberUpdateEventExtraFieldsInfer,
} from "../structures/channels";
import type {
	GuildBanAddEventFieldsInfer,
	GuildBanRemoveEventFieldsInfer,
	GuildCreateEventExtraFieldsInfer,
	GuildEmojisUpdateEventFieldsInfer,
	GuildMemberAddEventFieldsInfer,
	GuildMemberRemoveEventFieldsInfer,
	GuildMembersChunkEventFieldsInfer,
	GuildMemberUpdateEventFieldsInfer,
	GuildRoleCreateEventFieldsInfer,
	GuildRoleDeleteEventFieldsInfer,
	GuildRoleUpdateEventFieldsInfer,
	GuildScheduledEventUserAddEventFieldsInfer,
	GuildScheduledEventUserRemoveEventFieldsInfer,
	GuildStickersUpdateEventFieldsInfer,
	RequestGuildMembersStructureInfer,
} from "../structures/guilds";
import type { HelloStructureInfer } from "../structures/hello";
import type { IdentifyStructureInfer } from "../structures/identity";
import type {
	IntegrationCreateEventFieldsInfer,
	IntegrationDeleteEventFieldsInfer,
	IntegrationUpdateEventFieldsInfer,
} from "../structures/integrations";
import type { InviteCreateEventFieldsInfer, InviteDeleteEventFieldsInfer } from "../structures/invites";
import type {
	MessageCreateEventFieldsInfer,
	MessageDeleteBulkEventFieldsInfer,
	MessageDeleteEventFieldsInfer,
	MessageReactionAddEventFieldsInfer,
	MessageReactionRemoveAllEventFieldsInfer,
	MessageReactionRemoveEmojiEventFieldsInfer,
	MessageReactionRemoveEventFieldsInfer,
} from "../structures/messages";
import type { AutoModerationActionExecutionEventFieldsInfer } from "../structures/moderations";
import type { MessagePollVoteAddFieldsInfer, MessagePollVoteRemoveFieldsInfer } from "../structures/polls";
import type { GatewayPresenceUpdateStructureInfer, PresenceUpdateEventFieldsInfer } from "../structures/presences";
import type { ReadyEventFieldsInfer } from "../structures/ready";
import type { ResumeStructureInfer } from "../structures/resume";
import type { TypingStartEventFieldsInfer } from "../structures/typings";
import type { GatewayVoiceStateUpdateEventFieldsInfer, VoiceServerUpdateEventFieldsInfer } from "../structures/voices";
import type { WebhooksUpdateEventFieldsInfer } from "../structures/webhooks";

/**
 * Receive Events
 *
 * Receive events are Gateway events encapsulated in an event payload, and are sent by Discord to an app through a Gateway connection. Receive events correspond to events that happen in a Discord server where the app is installed.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#receive-receive-events}
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

export type GatewayEvents = {
	[GatewayReceiveEvents.Hello]: [hello: HelloStructureInfer];
	[GatewayReceiveEvents.Ready]: [ready: ReadyEventFieldsInfer];
	[GatewayReceiveEvents.Resumed]: [resumed: ResumeStructureInfer];
	[GatewayReceiveEvents.Reconnect]: [resumed: null];
	[GatewayReceiveEvents.InvalidSession]: [resumed: false];
	[GatewayReceiveEvents.ApplicationCommandPermissionsUpdate]: [resumed: ApplicationCommandPermissionsStructureInfer];
	[GatewayReceiveEvents.AutoModerationRuleCreate]: [rule: AutoModerationRuleStructureInfer];
	[GatewayReceiveEvents.AutoModerationRuleUpdate]: [rule: AutoModerationRuleStructureInfer];
	[GatewayReceiveEvents.AutoModerationRuleDelete]: [rule: AutoModerationRuleStructureInfer];
	[GatewayReceiveEvents.AutoModerationActionExecution]: [action: AutoModerationActionExecutionEventFieldsInfer];
	[GatewayReceiveEvents.ChannelCreate]: [channel: ChannelStructureInfer];
	[GatewayReceiveEvents.ChannelUpdate]: [channel: Omit<ChannelStructureInfer, "last_message_id">];
	[GatewayReceiveEvents.ChannelDelete]: [channel: ChannelStructureInfer];
	[GatewayReceiveEvents.ThreadCreate]: [thread: ChannelStructureInfer & ThreadMemberStructureInfer];
	[GatewayReceiveEvents.ThreadUpdate]: [thread: Omit<ChannelStructureInfer, "last_message_id">];
	[GatewayReceiveEvents.ThreadDelete]: [thread: Pick<ChannelStructureInfer, "guild_id" | "id" | "parent_id" | "type">];
	[GatewayReceiveEvents.ThreadListSync]: [thread: ThreadListSyncEventFieldsInfer];
	[GatewayReceiveEvents.ThreadMemberUpdate]: [thread: ThreadMemberStructureInfer & ThreadMemberUpdateEventExtraFieldsInfer];
	[GatewayReceiveEvents.ThreadMembersUpdate]: [thread: ThreadMembersUpdateEventFieldsInfer];
	[GatewayReceiveEvents.ChannelPinsUpdate]: [channel: ChannelPinsUpdateEventFieldsInfer];
	[GatewayReceiveEvents.EntitlementCreate]: [entitlement: EntitlementStructureInfer];
	[GatewayReceiveEvents.EntitlementUpdate]: [entitlement: EntitlementStructureInfer];
	[GatewayReceiveEvents.EntitlementDelete]: [entitlement: EntitlementStructureInfer];
	[GatewayReceiveEvents.GuildCreate]: [guild: GuildCreateEventExtraFieldsInfer & GuildStructureInfer];
	[GatewayReceiveEvents.GuildUpdate]: [guild: GuildStructureInfer];
	[GatewayReceiveEvents.GuildDelete]: [guild: {
		id: SnowflakeInfer;
		unavailable: boolean;
	}];
	[GatewayReceiveEvents.GuildAuditLogEntryCreate]: [audit: AuditLogEntryInfoStructureInfer];
	[GatewayReceiveEvents.GuildBanAdd]: [ban: GuildBanAddEventFieldsInfer];
	[GatewayReceiveEvents.GuildBanRemove]: [ban: GuildBanRemoveEventFieldsInfer];
	[GatewayReceiveEvents.GuildEmojisUpdate]: [emoji: GuildEmojisUpdateEventFieldsInfer];
	[GatewayReceiveEvents.GuildStickersUpdate]: [stickers: GuildStickersUpdateEventFieldsInfer];
	[GatewayReceiveEvents.GuildIntegrationsUpdate]: [integrations: IntegrationUpdateEventFieldsInfer];
	[GatewayReceiveEvents.GuildMemberAdd]: [member: GuildMemberAddEventFieldsInfer & GuildMemberStructureInfer];
	[GatewayReceiveEvents.GuildMemberRemove]: [member: GuildMemberRemoveEventFieldsInfer];
	[GatewayReceiveEvents.GuildMemberUpdate]: [member: GuildMemberUpdateEventFieldsInfer];
	[GatewayReceiveEvents.GuildMembersChunk]: [member: GuildMembersChunkEventFieldsInfer];
	[GatewayReceiveEvents.GuildRoleCreate]: [role: GuildRoleCreateEventFieldsInfer];
	[GatewayReceiveEvents.GuildRoleUpdate]: [role: GuildRoleUpdateEventFieldsInfer];
	[GatewayReceiveEvents.GuildRoleDelete]: [role: GuildRoleDeleteEventFieldsInfer];
	[GatewayReceiveEvents.GuildScheduledEventCreate]: [scheduled: GuildScheduledEventStructureInfer];
	[GatewayReceiveEvents.GuildScheduledEventUpdate]: [scheduled: GuildScheduledEventStructureInfer];
	[GatewayReceiveEvents.GuildScheduledEventDelete]: [scheduled: GuildScheduledEventStructureInfer];
	[GatewayReceiveEvents.GuildScheduledEventUserAdd]: [user: GuildScheduledEventUserAddEventFieldsInfer];
	[GatewayReceiveEvents.GuildScheduledEventUserRemove]: [user: GuildScheduledEventUserRemoveEventFieldsInfer];
	[GatewayReceiveEvents.IntegrationCreate]: [integration: IntegrationCreateEventFieldsInfer & IntegrationStructureInfer];
	[GatewayReceiveEvents.IntegrationUpdate]: [integration: IntegrationStructureInfer & IntegrationUpdateEventFieldsInfer];
	[GatewayReceiveEvents.IntegrationDelete]: [integration: IntegrationDeleteEventFieldsInfer & IntegrationStructureInfer];
	[GatewayReceiveEvents.InviteCreate]: [invite: InviteCreateEventFieldsInfer];
	[GatewayReceiveEvents.InviteDelete]: [invite: InviteDeleteEventFieldsInfer];
	[GatewayReceiveEvents.MessageCreate]: [message: MessageCreateEventFieldsInfer & MessageStructureInfer];
	[GatewayReceiveEvents.MessageUpdate]: [message: MessageCreateEventFieldsInfer & MessageStructureInfer];
	[GatewayReceiveEvents.MessageDelete]: [message: MessageDeleteEventFieldsInfer];
	[GatewayReceiveEvents.MessageDeleteBulk]: [messages: MessageDeleteBulkEventFieldsInfer];
	[GatewayReceiveEvents.MessageReactionAdd]: [reaction: MessageReactionAddEventFieldsInfer];
	[GatewayReceiveEvents.MessageReactionRemove]: [reaction: MessageReactionRemoveEventFieldsInfer];
	[GatewayReceiveEvents.MessageReactionRemoveAll]: [reactions: MessageReactionRemoveAllEventFieldsInfer];
	[GatewayReceiveEvents.MessageReactionRemoveEmoji]: [reaction: MessageReactionRemoveEmojiEventFieldsInfer];
	[GatewayReceiveEvents.PresenceUpdate]: [presence: PresenceUpdateEventFieldsInfer];
	[GatewayReceiveEvents.TypingStart]: [typing: TypingStartEventFieldsInfer];
	[GatewayReceiveEvents.UserUpdate]: [user: UserStructureInfer];
	[GatewayReceiveEvents.VoiceStateUpdate]: [state: VoiceStateStructureInfer];
	[GatewayReceiveEvents.VoiceServerUpdate]: [server: VoiceServerUpdateEventFieldsInfer];
	[GatewayReceiveEvents.WebhooksUpdate]: [webhooks: WebhooksUpdateEventFieldsInfer];
	[GatewayReceiveEvents.InteractionCreate]: [interaction: InteractionStructureInfer];
	[GatewayReceiveEvents.StageInstanceCreate]: [stage: StageInstanceStructureInfer];
	[GatewayReceiveEvents.StageInstanceUpdate]: [stage: StageInstanceStructureInfer];
	[GatewayReceiveEvents.StageInstanceDelete]: [stage: StageInstanceStructureInfer];
	[GatewayReceiveEvents.MessagePollVoteAdd]: [poll: MessagePollVoteAddFieldsInfer];
	[GatewayReceiveEvents.MessagePollVoteRemove]: [poll: MessagePollVoteRemoveFieldsInfer];
};

/**
 * Send Events
 *
 * Send events are Gateway events encapsulated in an event payload, and are sent by an app to Discord through a Gateway connection. Send events correspond to actions that an app takes in a Discord server where the app is installed.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#send-send-events}
 */
export type GatewaySendEvents = {
	[GatewayOpcodes.Identify]: [identify: IdentifyStructureInfer];
	[GatewayOpcodes.Resume]: [resume: ResumeStructureInfer];
	[GatewayOpcodes.Heartbeat]: [heartbeat: null];
	[GatewayOpcodes.RequestGuildMembers]: [members: RequestGuildMembersStructureInfer];
	[GatewayOpcodes.VoiceStateUpdate]: [state: GatewayVoiceStateUpdateEventFieldsInfer];
	[GatewayOpcodes.PresenceUpdate]: [presence: GatewayPresenceUpdateStructureInfer];
};
