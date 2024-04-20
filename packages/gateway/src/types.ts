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
	AutoModerationActionExecution: any;
	AutoModerationRuleCreate: any;
	AutoModerationRuleDelete: any;
	AutoModerationRuleUpdate: any;
	ChannelCreate: any;
	ChannelDelete: any;
	ChannelPinsUpdate: any;
	ChannelUpdate: any;
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
	InvalidSession: any;
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
	Ready: any;
	Reconnect: any;
	Resumed: any;
	StageInstanceCreate: any;
	StageInstanceDelete: any;
	StageInstanceUpdate: any;
	ThreadCreate: any;
	ThreadDelete: any;
	ThreadListSync: any;
	ThreadMemberUpdate: any;
	ThreadMembersUpdate: any;
	ThreadUpdate: any;
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

export type ActivityStructure = {
	// TODO: Implement this
};
