import type {
	AuditLogEntryStructure,
	AutoModerationRuleStructure,
	ChannelStructure,
	EntitlementStructure,
	GuildMemberStructure,
	GuildScheduledEventStructure,
	GuildStructure,
	Integer,
	IntegrationStructure,
	InteractionStructure,
	MessageStructure,
	Snowflake,
	StageInstanceStructure,
	ThreadMemberStructure,
	UserStructure,
	VoiceStateStructure,
} from "@aurajs/types";
import type { AutoModerationActionExecutionEventFields } from "./auto";
import type { ChannelPinsUpdateEventFields, ThreadListSyncEventFields, ThreadMembersUpdateEventFields } from "./channel";
import type {
	GuildBanAddEventFields,
	GuildBanRemoveEventFields,
	GuildCreateExtraFields,
	GuildEmojisUpdateEventFields,
	GuildIntegrationsUpdateEventFields,
	GuildMemberAddExtraFields,
	GuildMemberRemoveEventFields,
	GuildMembersChunkEventFields,
	GuildMemberUpdateEventFields,
	GuildRoleCreateEventFields,
	GuildRoleDeleteEventFields,
	GuildRoleUpdateEventFields,
	GuildScheduledEventUserAddEventFields,
	GuildScheduledEventUserRemoveEventFields,
	GuildStickersUpdateEventFields,
} from "./guilds";
import type {
	IntegrationCreateEventAdditionalFields,
	IntegrationDeleteEventFields,
	IntegrationUpdateEventAdditionalFields,
} from "./integrations";
import type { InviteCreateEventFields, InviteDeleteEventFields } from "./invites";
import type {
	MessageCreateExtraFields,
	MessageDeleteBulkEventFields,
	MessageDeleteEventFields,
	MessageReactionAddEventFields,
	MessageReactionRemoveAllEventFields,
	MessageReactionRemoveEmojiEventFields,
	MessageReactionRemoveEventFields,
} from "./message";
import type { MessagePollVoteAddFields, MessagePollVoteRemoveFields } from "./polls";
import type { ActivityStructure, PresenceUpdateEventFields, TypingStartEventFields } from "./presences";
import type { HelloStructure, ReadyEventFields } from "./ready";
import type { VoiceServerUpdateEventFields } from "./voice";
import type { WebhooksUpdateEventFields } from "./webhooks";

// https://discord.com/developers/docs/topics/gateway-events#payload-structure
export type PayloadStructure = {
	d: object | null;
	op: Integer;
	s: Integer | null;
	t: string | null;
};

// https://discord.com/developers/docs/topics/gateway-events#identify-identify-structure
export type IdentifyStructure = {
	compress?: boolean;
	intents: Integer;
	large_threshold?: Integer;
	presence?: GatewayPresenceUpdateStructure;
	properties: IdentifyConnectionProperties;
	shard?: [Integer, Integer];
	token: string;
};

// https://discord.com/developers/docs/topics/gateway-events#identify-identify-connection-properties
export type IdentifyConnectionProperties = {
	browser: string;
	device: string;
	os: string;
};

// https://discord.com/developers/docs/topics/gateway-events#resume-resume-structure
export type ResumeStructure = {
	seq: Integer;
	session_id: string;
	token: string;
};

// https://discord.com/developers/docs/topics/gateway-events#request-guild-members-request-guild-members-structure
export type RequestGuildMembersStructure = {
	guild_id: Snowflake;
	limit: Integer;
	nonce?: string;
	presences?: boolean;
	query?: string;
	user_ids?: Snowflake | Snowflake[];
};

// https://discord.com/developers/docs/topics/gateway-events#update-voice-state-gateway-voice-state-update-structure
export type GatewayVoiceStateUpdateStructure = {
	channel_id: Snowflake | null;
	guild_id: Snowflake;
	self_deaf: boolean;
	self_mute: boolean;
};

// https://discord.com/developers/docs/topics/gateway-events#update-presence-gateway-presence-update-structure
export type GatewayPresenceUpdateStructure = {
	activities: ActivityStructure;
	since: Integer | null;
};

// https://discord.com/developers/docs/topics/gateway-events#update-presence-status-types
export type StatusTypes = "dnd" | "idle" | "invisible" | "offline" | "online";

// https://discord.com/developers/docs/topics/gateway-events#receive-events
export type GatewayReceiveEvents = {
	ApplicationCommandPermissionsUpdate: any;
	AutoModerationActionExecution: AutoModerationActionExecutionEventFields;
	AutoModerationRuleCreate: AutoModerationRuleStructure;
	AutoModerationRuleDelete: AutoModerationRuleStructure;
	AutoModerationRuleUpdate: AutoModerationRuleStructure;
	ChannelCreate: ChannelStructure;
	ChannelDelete: ChannelStructure;
	ChannelPinsUpdate: ChannelPinsUpdateEventFields;
	ChannelUpdate: ChannelStructure;
	EntitlementCreate: EntitlementStructure;
	EntitlementDelete: EntitlementStructure;
	EntitlementUpdate: EntitlementStructure;
	GuildAuditLogEntryCreate: AuditLogEntryStructure;
	GuildBanAdd: GuildBanAddEventFields;
	GuildBanRemove: GuildBanRemoveEventFields;
	GuildCreate: GuildCreateExtraFields;
	GuildDelete: {
		id: Snowflake;
		unavailable: boolean;
	};
	GuildEmojisUpdate: GuildEmojisUpdateEventFields;
	GuildIntegrationsUpdate: GuildIntegrationsUpdateEventFields;
	GuildMemberAdd: GuildMemberAddExtraFields & GuildMemberStructure;
	GuildMemberRemove: GuildMemberRemoveEventFields;
	GuildMemberUpdate: GuildMemberUpdateEventFields;
	GuildMembersChunk: GuildMembersChunkEventFields;
	GuildRoleCreate: GuildRoleCreateEventFields;
	GuildRoleDelete: GuildRoleDeleteEventFields;
	GuildRoleUpdate: GuildRoleUpdateEventFields;
	GuildScheduledEventCreate: GuildScheduledEventStructure;
	GuildScheduledEventDelete: GuildScheduledEventStructure;
	GuildScheduledEventUpdate: GuildScheduledEventStructure;
	GuildScheduledEventUserAdd: GuildScheduledEventUserAddEventFields;
	GuildScheduledEventUserRemove: GuildScheduledEventUserRemoveEventFields;
	GuildStickersUpdate: GuildStickersUpdateEventFields;
	GuildUpdate: GuildStructure;
	Hello: HelloStructure;
	IntegrationCreate: IntegrationCreateEventAdditionalFields & IntegrationStructure;
	IntegrationDelete: IntegrationDeleteEventFields;
	IntegrationUpdate: IntegrationStructure & IntegrationUpdateEventAdditionalFields;
	InteractionCreate: InteractionStructure;
	InvalidSession: {
		d: boolean;
		op: Integer;
	};
	InviteCreate: InviteCreateEventFields;
	InviteDelete: InviteDeleteEventFields;
	MessageCreate: MessageCreateExtraFields & MessageStructure;
	MessageDelete: MessageDeleteEventFields;
	MessageDeleteBulk: MessageDeleteBulkEventFields;
	MessagePollVoteAdd: MessagePollVoteAddFields;
	MessagePollVoteRemove: MessagePollVoteRemoveFields;
	MessageReactionAdd: MessageReactionAddEventFields;
	MessageReactionRemove: MessageReactionRemoveEventFields;
	MessageReactionRemoveAll: MessageReactionRemoveAllEventFields;
	MessageReactionRemoveEmoji: MessageReactionRemoveEmojiEventFields;
	MessageUpdate: MessageStructure;
	PresenceUpdate: PresenceUpdateEventFields;
	Ready: ReadyEventFields;
	Reconnect: null;
	Resumed: ResumeStructure;
	StageInstanceCreate: StageInstanceStructure;
	StageInstanceDelete: StageInstanceStructure;
	StageInstanceUpdate: StageInstanceStructure;
	ThreadCreate: ChannelStructure;
	ThreadDelete: ChannelStructure;
	ThreadListSync: ThreadListSyncEventFields;
	ThreadMemberUpdate: ThreadMemberStructure;
	ThreadMembersUpdate: ThreadMembersUpdateEventFields;
	ThreadUpdate: ChannelStructure;
	TypingStart: TypingStartEventFields;
	UserUpdate: UserStructure;
	VoiceServerUpdate: VoiceServerUpdateEventFields;
	VoiceStateUpdate: VoiceStateStructure;
	WebhooksUpdate: WebhooksUpdateEventFields;
};

