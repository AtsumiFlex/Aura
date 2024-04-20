import type { Integer, Snowflake } from "@aurajs/core";
import type { AutoModerationActionExecutionEventFields } from "./events/auto";
import type {
	ChannelPinsUpdateEventFields,
	ThreadListSyncEventFields,
	ThreadMembersUpdateEventFields,
} from "./events/channel";
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
} from "./events/guilds";
import type {
	IntegrationCreateEventAdditionalFields,
	IntegrationDeleteEventFields,
	IntegrationUpdateEventAdditionalFields,
} from "./events/integrations";
import type { InviteCreateEventFields, InviteDeleteEventFields } from "./events/invites";
import type {
	MessageCreateExtraFields,
	MessageDeleteBulkEventFields,
	MessageDeleteEventFields,
	MessageReactionAddEventFields,
	MessageReactionRemoveAllEventFields,
	MessageReactionRemoveEmojiEventFields,
	MessageReactionRemoveEventFields,
} from "./events/message";
import type { MessagePollVoteAddFields, MessagePollVoteRemoveFields } from "./events/polls";
import type { ActivityStructure, PresenceUpdateEventFields, TypingStartEventFields } from "./events/presences";
import type { HelloStructure, ReadyEventFields } from "./events/ready";
import type { VoiceServerUpdateEventFields } from "./events/voice";
import type { WebhooksUpdateEventFields } from "./events/webhooks";

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
	AutoModerationRuleCreate: any;
	// TODO: Auto Moderation Rule Structure
	AutoModerationRuleDelete: any;
	// TODO: Auto Moderation Rule Structure
	AutoModerationRuleUpdate: any;
	// TODO: Auto Moderation Rule Structure
	ChannelCreate: any;
	// TODO: Channel Structure
	ChannelDelete: any;
	// TODO: Channel Structure
	ChannelPinsUpdate: ChannelPinsUpdateEventFields;
	ChannelUpdate: any;
	// TODO: Channel Structure
	EntitlementCreate: any;
	EntitlementDelete: any;
	EntitlementUpdate: any;
	GuildAuditLogEntryCreate: any;
	GuildBanAdd: GuildBanAddEventFields;
	GuildBanRemove: GuildBanRemoveEventFields;
	GuildCreate: GuildCreateExtraFields;
	GuildDelete: any;
	GuildEmojisUpdate: GuildEmojisUpdateEventFields;
	GuildIntegrationsUpdate: GuildIntegrationsUpdateEventFields;
	GuildMemberAdd: GuildMemberAddExtraFields;
	// TODO: And Guild Member Object
	GuildMemberRemove: GuildMemberRemoveEventFields;
	GuildMemberUpdate: GuildMemberUpdateEventFields;
	GuildMembersChunk: GuildMembersChunkEventFields;
	GuildRoleCreate: GuildRoleCreateEventFields;
	GuildRoleDelete: GuildRoleDeleteEventFields;
	GuildRoleUpdate: GuildRoleUpdateEventFields;
	GuildScheduledEventCreate: any;
	GuildScheduledEventDelete: any;
	GuildScheduledEventUpdate: any;
	GuildScheduledEventUserAdd: GuildScheduledEventUserAddEventFields;
	GuildScheduledEventUserRemove: GuildScheduledEventUserRemoveEventFields;
	GuildStickersUpdate: GuildStickersUpdateEventFields;
	GuildUpdate: any;
	Hello: HelloStructure;
	IntegrationCreate: IntegrationCreateEventAdditionalFields;
	// TODO: And Integration Structure
	IntegrationDelete: IntegrationDeleteEventFields;
	IntegrationUpdate: IntegrationUpdateEventAdditionalFields;
	// TODO: And Integration Structure
	InteractionCreate: any;
	InvalidSession: false;
	InviteCreate: InviteCreateEventFields;
	InviteDelete: InviteDeleteEventFields;
	MessageCreate: MessageCreateExtraFields;
	// TODO: And Message Structure
	MessageDelete: MessageDeleteEventFields;
	MessageDeleteBulk: MessageDeleteBulkEventFields;
	MessagePollVoteAdd: MessagePollVoteAddFields;
	MessagePollVoteRemove: MessagePollVoteRemoveFields;
	MessageReactionAdd: MessageReactionAddEventFields;
	MessageReactionRemove: MessageReactionRemoveEventFields;
	MessageReactionRemoveAll: MessageReactionRemoveAllEventFields;
	MessageReactionRemoveEmoji: MessageReactionRemoveEmojiEventFields;
	MessageUpdate: any;
	PresenceUpdate: PresenceUpdateEventFields;
	Ready: ReadyEventFields;
	Reconnect: null;
	Resumed: ResumeStructure;
	StageInstanceCreate: any;
	StageInstanceDelete: any;
	StageInstanceUpdate: any;
	ThreadCreate: any;
	// TODO: Channel Structure
	ThreadDelete: any;
	// TODO: Channel Structure
	ThreadListSync: ThreadListSyncEventFields;
	ThreadMemberUpdate: ThreadMembersUpdateEventFields;
	ThreadMembersUpdate: any;
	ThreadUpdate: any;
	// TODO: Channel Structure
	TypingStart: TypingStartEventFields;
	UserUpdate: any;
	VoiceServerUpdate: VoiceServerUpdateEventFields;
	VoiceStateUpdate: any;
	WebhooksUpdate: WebhooksUpdateEventFields;
};

