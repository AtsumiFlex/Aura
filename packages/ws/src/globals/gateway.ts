import { z } from "zod";
import { ApiVersionEnum } from "../../../core/src/globals/api";
import type { SnowflakeInfer } from "../../../core/src/globals/globals";
import { Integer, Snowflake } from "../../../core/src/globals/globals";
import { ApplicationStructure } from "../../../core/src/structures/applications";
import type { AuditLogEntryStructureInfer } from "../../../core/src/structures/audits";
import type {
	ChannelStructureInfer,
	MessageStructureInfer,
	ThreadMemberStructureInfer,
} from "../../../core/src/structures/channels";
import type { EntitlementStructureInfer } from "../../../core/src/structures/entitlements";
import type {
	GuildMemberStructureInfer,
	GuildScheduledEventStructureInfer,
	GuildStructureInfer,
	IntegrationStructureInfer,
} from "../../../core/src/structures/guilds";
import type {
	GuildApplicationCommandPermissionsStructureInfer,
	InteractionStructureInfer,
} from "../../../core/src/structures/interactions";
import type { AutoModerationRuleStructureInfer } from "../../../core/src/structures/moderations";
import type { StageInstanceStructureInfer } from "../../../core/src/structures/stages";
import type { UserStructureInfer } from "../../../core/src/structures/user";
import { UserStructure } from "../../../core/src/structures/user";
import type { VoiceStateStructureInfer } from "../../../core/src/structures/voices";
import type {
	ChannelPinsUpdateEventFieldsInfer,
	ThreadListSyncEventFieldsInfer,
	ThreadMembersUpdateEventFieldsInfer,
	ThreadMemberUpdateEventExtraFieldsInfer,
} from "../events/channels";
import type {
	GuildBanAddEventFieldsInfer,
	GuildCreateEventFieldsInfer,
	GuildEmojisUpdateEventFieldsInfer,
	GuildIntegrationsUpdateEventFieldsInfer,
	GuildMemberAddEventFieldsInfer,
	GuildMemberRemoveEventFieldsInfer,
	GuildMembersChunkEventFieldsInfer,
	GuildMemberUpdateEventFieldsInfer,
	GuildRoleCreateEventFieldsInfer,
	GuildScheduledEventUserAddEventFieldsInfer,
	GuildScheduledEventUserRemoveEventFieldsInfer,
	GuildStickersUpdateEventFieldsInfer,
} from "../events/guilds";
import type {
	IntegrationCreateEventFieldsInfer,
	IntegrationDeleteEventFieldsInfer,
	IntegrationUpdateEventFieldsInfer,
} from "../events/integrations";
import type { InviteCreateEventFieldsInfer, InviteDeleteEventFieldsInfer } from "../events/invites";
import type {
	MessageCreateEventFieldsInfer,
	MessageDeleteBulkEventFieldsInfer,
	MessageDeleteEventFieldsInfer,
	MessageReactionAddEventFieldsInfer,
	MessageReactionRemoveAllEventFieldsInfer,
	MessageReactionRemoveEmojiEventFieldsInfer,
	MessageReactionRemoveEventFieldsInfer,
} from "../events/messages";
import type { AutoModerationActionExecutionEventFieldsInfer } from "../events/moderations";
import type { MessagePollVoteAddFieldsInfer, MessagePollVoteRemoveFieldsInfer } from "../events/polls";
import type { PresenceUpdateEventFieldsInfer } from "../events/presences";
import { ActivityStructure } from "../events/presences";
import type { TypingStartEventFieldsInfer } from "../events/typings";
import type { VoiceServerUpdateEventFieldsInfer } from "../events/voices";
import type { WebhooksUpdateEventFieldsInfer } from "../events/webhooks";

/**
 * Ready Event Fields
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#ready}
 */
export const ReadyEventFields = z.object({
	v: ApiVersionEnum,
	user: UserStructure,
	guilds: z.array(z.object({
		id: Snowflake,
		unavailable: z.boolean(),
	})),
	session_id: z.string(),
	resume_gateway_url: z.string(),
	shard: z.array(Integer).max(2).optional(),
	application: ApplicationStructure.partial(),
});

/**
 * Ready Event Fields Infer
 *
 * Infer the type of a {@link ReadyEventFields} object.
 */
export type ReadyEventFieldsInfer = z.infer<typeof ReadyEventFields>;

/**
 * Hello Structure
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#hello}
 */
export const HelloStructure = z.object({ heartbeat_interval: Integer });

/**
 * Hello Structure Infer
 *
 * Infer the type of a {@link HelloStructure} object.
 */
export type HelloStructureInfer = z.infer<typeof HelloStructure>;

/**
 * Status Types
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#update-status}
 */
export enum StatusTypes {
	DoNotDisturb = "dnd",
	Idle = "idle",
	Invisible = "invisible",
	Offline = "offline",
	Online = "online",
}

/**
 * Status Types Enum
 *
 * Enum for Status Types {@link StatusTypes}
 */
export const StatusTypesEnum = z.nativeEnum(StatusTypes);

/**
 * Gateway Presence Update Structure
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#update-status}
 */
export const GatewayPresenceUpdateStructure = z.object({
	since: Integer.nullable(),
	activities: z.array(ActivityStructure),
	status: StatusTypesEnum,
	afk: z.boolean(),
});

/**
 * Gateway Presence Update Structure Infer
 *
 * Infer the type of a {@link GatewayPresenceUpdateStructure} object.
 */
export type GatewayPresenceUpdateStructureInfer = z.infer<typeof GatewayPresenceUpdateStructure>;

/**
 * Gateway Voice State Update Structure
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#voice-state-update}
 */
export const GatewayVoiceStateUpdateStructure = z.object({
	guild_id: Snowflake,
	channel_id: Snowflake.nullable(),
	self_mute: z.boolean(),
	self_deaf: z.boolean(),
});

/**
 * Gateway Voice State Update Structure Infer
 *
 * Infer the type of a {@link GatewayVoiceStateUpdateStructure} object.
 */
export type GatewayVoiceStateUpdateStructureInfer = z.infer<typeof GatewayVoiceStateUpdateStructure>;

/**
 * Request Guild Members Structure
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
 * Infer the type of a {@link RequestGuildMembersStructure} object.
 */
export type RequestGuildMembersStructureInfer = z.infer<typeof RequestGuildMembersStructure>;

/**
 * Resume Structure
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#resume}
 */
export const ResumeStructure = z.object({
	token: z.string(),
	session_id: z.string(),
	seq: Integer,
});

/**
 * Resume Structure Infer
 *
 * Infer the type of a {@link ResumeStructure} object.
 */
export type ResumeStructureInfer = z.infer<typeof ResumeStructure>;

/**
 * Identify Connection Properties
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#identify-identify-connection-properties}
 */
export const IdentifyConnectionProperties = z.object({
	os: z.string(),
	browser: z.string(),
	device: z.string(),
});

/**
 * Identify Connection Properties Infer
 *
 * Infer the type of a {@link IdentifyConnectionProperties} object.
 */
export type IdentifyConnectionPropertiesInfer = z.infer<typeof IdentifyConnectionProperties>;

/**
 * Identify Structure
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#identify}
 */
export const IdentifyStructure = z.object({
	token: z.string(),
	properties: IdentifyConnectionProperties,
	compress: z.boolean().optional(),
	large_threshold: Integer.optional(),
	shard: z.array(Integer).max(2).optional(),
	presence: GatewayPresenceUpdateStructure.optional(),
	intents: Integer,
});

/**
 * Identify Structure Infer
 *
 * Infer the type of a {@link IdentifyStructure} object.
 */
export type IdentifyStructureInfer = z.infer<typeof IdentifyStructure>;

/**
 * Gateway Events
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#commands-and-events-gateway-events}
 */
export enum GatewayEvents {
	/**
	 * Application command permission was updated
	 */
	ApplicationCommandPermissionsUpdate = "APPLICATION_COMMAND_PERMISSIONS_UPDATE",
	/**
	 * Auto Moderation rule was triggered and an action was executed (e.g. a message was blocked)
	 */
	AutoModerationActionExecution = "AUTO_MODERATION_ACTION_EXECUTION",
	/**
	 * Auto Moderation rule was created
	 */
	AutoModerationRuleCreate = "AUTO_MODERATION_RULE_CREATE",
	/**
	 * Auto Moderation rule was deleted
	 */
	AutoModerationRuleDelete = "AUTO_MODERATION_RULE_DELETE",
	/**
	 * Auto Moderation rule was updated
	 */
	AutoModerationRuleUpdate = "AUTO_MODERATION_RULE_UPDATE",
	/**
	 * New guild channel created
	 */
	ChannelCreate = "CHANNEL_CREATE",
	/**
	 * Channel was deleted
	 */
	ChannelDelete = "CHANNEL_DELETE",
	/**
	 * Message was pinned or unpinned
	 */
	ChannelPinsUpdate = "CHANNEL_PINS_UPDATE",
	/**
	 * Channel was updated
	 */
	ChannelUpdate = "CHANNEL_UPDATE",
	/**
	 * Entitlement was created
	 */
	EntitlementCreate = "ENTITLEMENT_CREATE",
	/**
	 * Entitlement was deleted
	 */
	EntitlementDelete = "ENTITLEMENT_DELETE",
	/**
	 * Entitlement was updated or renewed
	 */
	EntitlementUpdate = "ENTITLEMENT_UPDATE",
	/**
	 * A guild audit log entry was created
	 */
	GuildAuditLogEntryCreate = "GUILD_AUDIT_LOG_ENTRY_CREATE",
	/**
	 * User was banned from a guild
	 */
	GuildBanAdd = "GUILD_BAN_ADD",
	/**
	 * User was unbanned from a guild
	 */
	GuildBanRemove = "GUILD_BAN_REMOVE",
	/**
	 * Lazy-load for unavailable guild, guild became available, or user joined a new guild
	 */
	GuildCreate = "GUILD_CREATE",
	/**
	 * Guild became unavailable, or user left/was removed from a guild
	 */
	GuildDelete = "GUILD_DELETE",
	/**
	 * Guild emojis were updated
	 */
	GuildEmojisUpdate = "GUILD_EMOJIS_UPDATE",
	/**
	 * Guild integration was updated
	 */
	GuildIntegrationsUpdate = "GUILD_INTEGRATIONS_UPDATE",
	/**
	 * New user joined a guild
	 */
	GuildMemberAdd = "GUILD_MEMBER_ADD",
	/**
	 * User was removed from a guild
	 */
	GuildMemberRemove = "GUILD_MEMBER_REMOVE",
	/**
	 * Guild member was updated
	 */
	GuildMemberUpdate = "GUILD_MEMBER_UPDATE",
	/**
	 * Response to Request Guild Members
	 */
	GuildMembersChunk = "GUILD_MEMBERS_CHUNK",
	/**
	 * Guild role was created
	 */
	GuildRoleCreate = "GUILD_ROLE_CREATE",
	/**
	 * Guild role was deleted
	 */
	GuildRoleDelete = "GUILD_ROLE_DELETE",
	/**
	 * Guild role was updated
	 */
	GuildRoleUpdate = "GUILD_ROLE_UPDATE",
	/**
	 * Guild scheduled event was created
	 */
	GuildScheduledEventCreate = "GUILD_SCHEDULED_EVENT_CREATE",
	/**
	 * Guild scheduled event was deleted
	 */
	GuildScheduledEventDelete = "GUILD_SCHEDULED_EVENT_DELETE",
	/**
	 * Guild scheduled event was updated
	 */
	GuildScheduledEventUpdate = "GUILD_SCHEDULED_EVENT_UPDATE",
	/**
	 * User subscribed to a guild scheduled event
	 */
	GuildScheduledEventUserAdd = "GUILD_SCHEDULED_EVENT_USER_ADD",
	/**
	 * User unsubscribed from a guild scheduled event
	 */
	GuildScheduledEventUserRemove = "GUILD_SCHEDULED_EVENT_USER_REMOVE",
	/**
	 * Guild stickers were updated
	 */
	GuildStickersUpdate = "GUILD_STICKERS_UPDATE",
	/**
	 * Guild was updated
	 */
	GuildUpdate = "GUILD_UPDATE",
	/**
	 * Defines the heartbeat interval
	 */
	Hello = "HELLO",
	/**
	 * Guild integration was created
	 */
	IntegrationCreate = "INTEGRATION_CREATE",
	/**
	 * Guild integration was deleted
	 */
	IntegrationDelete = "INTEGRATION_DELETE",
	/**
	 * Guild integration was updated
	 */
	IntegrationUpdate = "INTEGRATION_UPDATE",
	/**
	 * User used an interaction, such as an Application Command
	 */
	InteractionCreate = "INTERACTION_CREATE",
	/**
	 * Failure response to Identify or Resume or invalid active session
	 */
	InvalidSession = "INVALID_SESSION",
	/**
	 * Invite to a channel was created
	 */
	InviteCreate = "INVITE_CREATE",
	/**
	 * Invite to a channel was deleted
	 */
	InviteDelete = "INVITE_DELETE",
	/**
	 * Message was created
	 */
	MessageCreate = "MESSAGE_CREATE",
	/**
	 * Message was deleted
	 */
	MessageDelete = "MESSAGE_DELETE",
	/**
	 * Multiple messages were deleted at once
	 */
	MessageDeleteBulk = "MESSAGE_DELETE_BULK",
	/**
	 * User voted on a poll
	 */
	MessagePollVoteAdd = "MESSAGE_POLL_VOTE_ADD",
	/**
	 * User removed a vote on a poll
	 */
	MessagePollVoteRemove = "MESSAGE_POLL_VOTE_REMOVE",
	/**
	 * User reacted to a message
	 */
	MessageReactionAdd = "MESSAGE_REACTION_ADD",
	/**
	 * User removed a reaction from a message
	 */
	MessageReactionRemove = "MESSAGE_REACTION_REMOVE",
	/**
	 * All reactions were explicitly removed from a message
	 */
	MessageReactionRemoveAll = "MESSAGE_REACTION_REMOVE_ALL",
	/**
	 * All reactions for a given emoji were explicitly removed from a message
	 */
	MessageReactionRemoveEmoji = "MESSAGE_REACTION_REMOVE_EMOJI",
	/**
	 * Message was edited
	 */
	MessageUpdate = "MESSAGE_UPDATE",
	/**
	 * User was updated
	 */
	PresenceUpdate = "PRESENCE_UPDATE",
	/**
	 * Contains the initial state information
	 */
	Ready = "READY",
	/**
	 * Server is going away, client should reconnect to gateway and resume
	 */
	Reconnect = "RECONNECT",
	/**
	 * Response to Resume
	 */
	Resumed = "RESUMED",
	/**
	 * Stage instance was created
	 */
	StageInstanceCreate = "STAGE_INSTANCE_CREATE",
	/**
	 * Stage instance was deleted or closed
	 */
	StageInstanceDelete = "STAGE_INSTANCE_DELETE",
	/**
	 * Stage instance was updated
	 */
	StageInstanceUpdate = "STAGE_INSTANCE_UPDATE",
	/**
	 * Thread created, also sent when being added to a private thread
	 */
	ThreadCreate = "THREAD_CREATE",
	/**
	 * Thread was deleted
	 */
	ThreadDelete = "THREAD_DELETE",
	/**
	 * Sent when gaining access to a channel, contains all active threads in that channel
	 */
	ThreadListSync = "THREAD_LIST_SYNC",
	/**
	 * Thread member for the current user was updated
	 */
	ThreadMemberUpdate = "THREAD_MEMBER_UPDATE",
	/**
	 * Some user(s) were added to or removed from a thread
	 */
	ThreadMembersUpdate = "THREAD_MEMBERS_UPDATE",
	/**
	 * Thread was updated
	 */
	ThreadUpdate = "THREAD_UPDATE",
	/**
	 * User started typing in a channel
	 */
	TypingStart = "TYPING_START",
	/**
	 * Properties about the user changed
	 */
	UserUpdate = "USER_UPDATE",
	/**
	 * Guild's voice server was updated
	 */
	VoiceServerUpdate = "VOICE_SERVER_UPDATE",
	/**
	 * Someone joined, left, or moved a voice channel
	 */
	VoiceStateUpdate = "VOICE_STATE_UPDATE",
	/**
	 * Guild channel webhook was created, update, or deleted
	 */
	WebhooksUpdate = "WEBHOOKS_UPDATE",
}

/**
 * Gateway Events Enum
 *
 * Enum for Gateway Events {@link GatewayEvents}
 */
export const GatewayEventsEnum = z.nativeEnum(GatewayEvents);

/**
 * Receive Events
 *
 * Receive events are Gateway events encapsulated in an event payload, and are sent by Discord to an app through a Gateway connection. Receive events correspond to events that happen in a Discord server where the app is installed.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#receive-events}
 */
export type GatewayReceiveEvents = {
	[GatewayEvents.Hello]: [hello: HelloStructureInfer];
	[GatewayEvents.Ready]: [ready: ReadyEventFieldsInfer];
	[GatewayEvents.Resumed]: [resumed: ResumeStructureInfer];
	[GatewayEvents.Reconnect]: [reconned: null];
	[GatewayEvents.InvalidSession]: [reconned: false];
	[GatewayEvents.ApplicationCommandPermissionsUpdate]: [applicationData: GuildApplicationCommandPermissionsStructureInfer];
	[GatewayEvents.AutoModerationRuleCreate]: [moderation: AutoModerationRuleStructureInfer];
	[GatewayEvents.AutoModerationRuleUpdate]: [moderation: AutoModerationRuleStructureInfer];
	[GatewayEvents.AutoModerationRuleDelete]: [moderation: AutoModerationRuleStructureInfer];
	[GatewayEvents.AutoModerationActionExecution]: [action: AutoModerationActionExecutionEventFieldsInfer];
	[GatewayEvents.ChannelCreate]: [channel: ChannelStructureInfer];
	[GatewayEvents.ChannelDelete]: [channel: ChannelStructureInfer];
	[GatewayEvents.ChannelDelete]: [channel: ChannelStructureInfer];
	[GatewayEvents.ThreadCreate]: [thread: ChannelStructureInfer];
	[GatewayEvents.ThreadUpdate]: [thread: ChannelStructureInfer];
	[GatewayEvents.ThreadDelete]: [thread: ChannelStructureInfer];
	[GatewayEvents.ThreadListSync]: [thread: ThreadListSyncEventFieldsInfer];
	[GatewayEvents.ThreadMemberUpdate]: [thread: ThreadMemberStructureInfer & ThreadMemberUpdateEventExtraFieldsInfer];
	[GatewayEvents.ThreadMembersUpdate]: [thread: ThreadMemberStructureInfer & ThreadMembersUpdateEventFieldsInfer];
	[GatewayEvents.ChannelPinsUpdate]: [channel: ChannelPinsUpdateEventFieldsInfer];
	[GatewayEvents.EntitlementCreate]: [entitlement: EntitlementStructureInfer];
	[GatewayEvents.EntitlementUpdate]: [entitlement: EntitlementStructureInfer];
	[GatewayEvents.EntitlementDelete]: [entitlement: EntitlementStructureInfer];
	[GatewayEvents.GuildCreate]: [guild: {
		id: SnowflakeInfer;
		unavailable: boolean;
	} | GuildCreateEventFieldsInfer & GuildStructureInfer];
	[GatewayEvents.GuildUpdate]: [guild: GuildStructureInfer];
	[GatewayEvents.GuildDelete]: [guild: GuildCreateEventFieldsInfer | {
		id: SnowflakeInfer;
		unavailable: boolean;
	}];
	[GatewayEvents.GuildAuditLogEntryCreate]: [audit: AuditLogEntryStructureInfer];
	[GatewayEvents.GuildBanAdd]: [ban: GuildBanAddEventFieldsInfer];
	[GatewayEvents.GuildBanRemove]: [ban: GuildBanAddEventFieldsInfer];
	[GatewayEvents.GuildEmojisUpdate]: [emojis: GuildEmojisUpdateEventFieldsInfer];
	[GatewayEvents.GuildStickersUpdate]: [stickers: GuildStickersUpdateEventFieldsInfer];
	[GatewayEvents.GuildIntegrationsUpdate]: [integration: GuildIntegrationsUpdateEventFieldsInfer];
	[GatewayEvents.GuildMemberAdd]: [member: GuildMemberAddEventFieldsInfer & GuildMemberStructureInfer];
	[GatewayEvents.GuildMemberRemove]: [member: GuildMemberRemoveEventFieldsInfer];
	[GatewayEvents.GuildMemberUpdate]: [member: GuildMemberUpdateEventFieldsInfer];
	[GatewayEvents.GuildMembersChunk]: [members: GuildMembersChunkEventFieldsInfer];
	[GatewayEvents.GuildRoleCreate]: [role: GuildRoleCreateEventFieldsInfer];
	[GatewayEvents.GuildRoleUpdate]: [role: GuildRoleCreateEventFieldsInfer];
	[GatewayEvents.GuildRoleDelete]: [role: GuildRoleCreateEventFieldsInfer];
	[GatewayEvents.GuildScheduledEventCreate]: [schedule: GuildScheduledEventStructureInfer];
	[GatewayEvents.GuildScheduledEventUpdate]: [schedule: GuildScheduledEventStructureInfer];
	[GatewayEvents.GuildScheduledEventDelete]: [schedule: GuildScheduledEventStructureInfer];
	[GatewayEvents.GuildScheduledEventUserAdd]: [user: GuildScheduledEventUserAddEventFieldsInfer];
	[GatewayEvents.GuildScheduledEventUserRemove]: [user: GuildScheduledEventUserRemoveEventFieldsInfer];
	[GatewayEvents.IntegrationCreate]: [integrations: IntegrationCreateEventFieldsInfer & IntegrationStructureInfer];
	[GatewayEvents.IntegrationUpdate]: [integrations: IntegrationStructureInfer & IntegrationUpdateEventFieldsInfer];
	[GatewayEvents.IntegrationDelete]: [integrations: IntegrationDeleteEventFieldsInfer & IntegrationStructureInfer];
	[GatewayEvents.InviteCreate]: [invite: InviteCreateEventFieldsInfer];
	[GatewayEvents.InviteDelete]: [invite: InviteDeleteEventFieldsInfer];
	[GatewayEvents.MessageCreate]: [message: MessageCreateEventFieldsInfer & MessageStructureInfer];
	[GatewayEvents.MessageUpdate]: [message: MessageCreateEventFieldsInfer & MessageStructureInfer];
	[GatewayEvents.MessageDelete]: [message: MessageDeleteEventFieldsInfer];
	[GatewayEvents.MessageDeleteBulk]: [messages: MessageDeleteBulkEventFieldsInfer];
	[GatewayEvents.MessageReactionAdd]: [reaction: MessageReactionAddEventFieldsInfer];
	[GatewayEvents.MessageReactionRemove]: [reaction: MessageReactionRemoveEventFieldsInfer];
	[GatewayEvents.MessageReactionRemoveAll]: [reaction: MessageReactionRemoveAllEventFieldsInfer];
	[GatewayEvents.MessageReactionRemoveEmoji]: [reaction: MessageReactionRemoveEmojiEventFieldsInfer];
	[GatewayEvents.PresenceUpdate]: [presence: PresenceUpdateEventFieldsInfer];
	[GatewayEvents.TypingStart]: [typing: TypingStartEventFieldsInfer];
	[GatewayEvents.UserUpdate]: [user: UserStructureInfer];
	[GatewayEvents.VoiceStateUpdate]: [state: VoiceStateStructureInfer];
	[GatewayEvents.VoiceServerUpdate]: [server: VoiceServerUpdateEventFieldsInfer];
	[GatewayEvents.WebhooksUpdate]: [webhooks: WebhooksUpdateEventFieldsInfer];
	[GatewayEvents.InteractionCreate]: [interaction: InteractionStructureInfer];
	[GatewayEvents.StageInstanceCreate]: [stage: StageInstanceStructureInfer];
	[GatewayEvents.StageInstanceUpdate]: [stage: StageInstanceStructureInfer];
	[GatewayEvents.StageInstanceDelete]: [stage: StageInstanceStructureInfer];
	[GatewayEvents.MessagePollVoteAdd]: [poll: MessagePollVoteAddFieldsInfer];
	[GatewayEvents.MessagePollVoteRemove]: [poll: MessagePollVoteRemoveFieldsInfer];
};

/**
 * Gateway Payload
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#payloads-gateway-payload-structure}
 */
export const GatewayPayload = z.object({
	op: Integer,
	d: z.any().nullable(),
	s: Integer.optional(),
	t: z.string(),
});

/**
 * Gateway Payload Infer
 *
 * Infer the type of a {@link GatewayPayload} object.
 */
export type GatewayPayloadInfer = z.infer<typeof GatewayPayload>;

/**
 * Gateway Intents
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#gateway-intents}
 */
export enum GatewayIntents {
	Guilds = 1,
	GuildMembers = 2,
	GuildModeration = 4,
	GuildEmojisAndStickers = 8,
	GuildIntegrations = 16,
	GuildWebhooks = 32,
	GuildInvites = 64,
	GuildVoiceStates = 128,
	GuildPresences = 256,
	GuildMessages = 512,
	GuildMessageReactions = 1_024,
	GuildMessageTyping = 2_048,
	DirectMessages = 4_096,
	DirectMessageReactions = 8_192,
	DirectMessageTyping = 16_384,
	MessageContent = 32_768,
	GuildScheduledEvents = 65_536,
	AutoModerationConfiguration = 1_048_576,
	AutoModerationExecution = 2_097_152,
	GuildMessagePolls = 16_777_216,
	DirectMessagePolls = 33_554_432,
}

/**
 * Gateway Intents Enum
 *
 * Enum for Gateway Intents {@link GatewayIntents}
 */
export const GatewayIntentsEnum = z.nativeEnum(GatewayIntents);
