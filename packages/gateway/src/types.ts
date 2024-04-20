import type { Integer, Snowflake } from "@aurajs/core";

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
	ChannelPinsUpdate: any;
	// TODO: Channel Structure
	ChannelUpdate: any;
	// TODO: Channel Structure
	EntitlementCreate: any;
	EntitlementDelete: any;
	EntitlementUpdate: any;
	GuildAuditLogEntryCreate: any;
	GuildBanAdd: any;
	GuildBanRemove: any;
	GuildCreate: any;
	GuildDelete: any;
	GuildEmojisUpdate: any;
	GuildIntegrationsUpdate: any;
	GuildMemberAdd: any;
	GuildMemberRemove: any;
	GuildMemberUpdate: any;
	GuildMembersChunk: any;
	GuildRoleCreate: any;
	GuildRoleDelete: any;
	GuildRoleUpdate: any;
	GuildScheduledEventCreate: any;
	GuildScheduledEventDelete: any;
	GuildScheduledEventUpdate: any;
	GuildScheduledEventUserAdd: any;
	GuildScheduledEventUserRemove: any;
	GuildStickersUpdate: any;
	GuildUpdate: any;
	Hello: HelloStructure;
	IntegrationCreate: any;
	IntegrationDelete: any;
	IntegrationUpdate: any;
	InteractionCreate: any;
	InvalidSession: false;
	InviteCreate: any;
	InviteDelete: any;
	MessageCreate: any;
	MessageDelete: any;
	MessageDeleteBulk: any;
	MessagePollVoteAdd: any;
	MessagePollVoteRemove: any;
	MessageReactionAdd: any;
	MessageReactionRemove: any;
	MessageReactionRemoveAll: any;
	MessageReactionRemoveEmoji: any;
	MessageUpdate: any;
	PresenceUpdate: any;
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
	ThreadMemberUpdate: any;
	ThreadMembersUpdate: any;
	ThreadUpdate: any;
	// TODO: Channel Structure
	TypingStart: any;
	UserUpdate: any;
	VoiceServerUpdate: any;
	VoiceStateUpdate: any;
	WebhooksUpdate: any;
};

// https://discord.com/developers/docs/topics/gateway-events#hello-hello-structure
export type HelloStructure = {
	heartbeat_interval: Integer;
};

// https://discord.com/developers/docs/topics/gateway-events#ready-ready-event-fields
export type ReadyEventFields = {
	application: object;
	// TODO: Application Structure
	guilds: object;
	// TODO: UnavailableGuild Structure
	resume_gateway_url: string;
	session_id: string;
	shard?: [Integer, Integer];
	user: object;
	// TODO: User Structure
	v: Integer;
};

// https://discord.com/developers/docs/topics/gateway-events#auto-moderation-action-execution-auto-moderation-action-execution-event-fields
export type AutoModerationActionExecutionEventFields = {
	action: object;
	// TODO: Auto Moderation Action Object
	alert_system_message_id?: Snowflake;
	channel_id?: Snowflake;
	content: string;
	guild_id: Snowflake;
	matched_content: string | null;
	matched_keyword: string | null;
	message_id?: Snowflake;
	rule_id: Snowflake;
	rule_trigger_type: any;
	// TODO: Trigger Types
	user_id: Snowflake;
};

// https://discord.com/developers/docs/topics/gateway-events#thread-list-sync-thread-list-sync-event-fields
export type ThreadListSyncEventFields = {
	channel_ids?: Snowflake[];
	guild_id: Snowflake;
	members: object[];
	// TODO: Thread Member Structure
	threads: object[];
	// TODO: Channel Structure
};

export type ActivityStructure = {
	// TODO: Implement this
};
