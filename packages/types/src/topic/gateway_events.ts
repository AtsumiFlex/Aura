/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#gateway-events}
 */

import type { ApiVersion } from "@aurajs/core";
import type { Integer, ISO8601Timestamp, Nullable, Snowflake } from "../globals";
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
	channel_id: Nullable<Snowflake>;
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
	since: Nullable<Integer>;
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
export type GatewayReceiveEvents = {
	// TODO: Add all gateway events
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
	application: object; // TODO: application object
	guilds: object[]; // TODO: unavailable guild objects
	resume_gateway_url: string;
	session_id: string;
	shard?: [shard_id: Integer, num_shards: Integer];
	user: object; // TODO: user object
	v: ApiVersion;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#auto-moderation-action-execution-auto-moderation-action-execution-event-fields}
 */
export type AutoModerationActionExecutionEventFields = {
	actions: object[]; // TODO: auto moderation action objects
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
	members: object[]; // TODO: thread member objects
	threads: object[]; // TODO: channel objects
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
	added_members?: object[]; // TODO: thread member objects
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
	last_pin_timestamp?: Nullable<ISO8601Timestamp>;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-create-guild-create-extra-fields}
 */
export type GuildCreateExtraFields = {
	channels: object[]; // TODO: channel objects
	guild_scheduled_events: object[]; // TODO: guild scheduled event objects
	joined_at?: ISO8601Timestamp;
	large: boolean;
	member_count: Integer;
	members: object[]; // TODO: guild member objects
	presences: object[]; // TODO: partial presence update objects
	stage_instances: object[]; // TODO: stage instance objects
	threads: object[]; // TODO: channel objects
	unavailable?: boolean;
	voice_states: object[]; // TODO: partial voice state objects
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-ban-add-guild-ban-add-event-fields}
 */
export type GuildBanAddEventFields = {
	guild_id: Snowflake;
	user: object; // TODO: user object
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-ban-remove-guild-ban-remove-event-fields}
 */
export type GuildBanRemoveEventFields = {
	guild_id: Snowflake;
	user: object; // TODO: user object
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-emojis-update-guild-emojis-update-event-fields}
 */
export type GuildEmojisUpdateEventFields = {
	emojis: object[]; // TODO: emoji objects
	guild_id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-stickers-update-guild-stickers-update-event-fields}
 */
export type GuildStickersUpdateEventFields = {
	guild_id: Snowflake;
	stickers: object[]; // TODO: sticker objects
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
	user: object; // TODO: user object
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-member-update-guild-member-update-event-fields}
 */
export type GuildMemberUpdateEventFields = {
	avatar?: string;
	communication_disabled_until?: Nullable<ISO8601Timestamp>;
	deaf: boolean;
	guild_id: Snowflake;
	joined_at?: Nullable<ISO8601Timestamp>;
	mute: boolean;
	nick?: string;
	pending: boolean;
	premium_since?: string;
	roles: Snowflake[];
	user: object; // TODO: user object
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-members-chunk-guild-members-chunk-event-fields}
 */
export type GuildMembersChunkEventFields = {
	chunk_count: Integer;
	chunk_index: Integer;
	guild_id: Snowflake;
	members: object[]; // TODO: guild member objects
	nonce?: string;
	not_found?: Snowflake[];
	presences?: object[]; // TODO: presence objects
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-role-create-guild-role-create-event-fields}
 */
export type GuildRoleCreateEventFields = {
	guild_id: Snowflake;
	role: object; // TODO: role object
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-role-update-guild-role-update-event-fields}
 */
export type GuildRoleUpdateEventFields = {
	guild_id: Snowflake;
	role: object; // TODO: role object
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
	inviter?: object; // TODO: user object
	max_age: Integer;
	max_uses: Integer;
	target_application?: object; // TODO: partial application object
	target_type?: Integer;
	target_user?: object; // TODO: user object
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
	member?: object; // TODO: member object
	mentions: object[]; // TODO: array of user objects, with an additional partial member field
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
	emoji: object; // TODO: partial emoji object
	guild_id?: Snowflake;
	member?: object; // TODO: member object
	message_author_id?: Snowflake;
	message_id: Snowflake;
	user_id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-reaction-remove-message-reaction-remove-event-fields}
 */
export type MessageReactionRemoveEventFields = {
	channel_id: Snowflake;
	emoji: object; // TODO: partial emoji object
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
	emoji: object; // TODO: partial emoji object
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
	user: object; // TODO: user object
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
	url?: Nullable<string>;
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
	member?: object; // TODO: member object
	timestamp: Integer;
	user_id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#voice-server-update-voice-server-update-event-fields}
 */
export type VoiceServerUpdateEventFields = {
	endpoint: Nullable<string>;
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
