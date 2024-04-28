/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#rpc}
 */

import type { Float, Integer, Snowflake } from "../globals";
import type { ChannelStructure, MessageStructure } from "../structures/channel";
import type { GuildStructure } from "../structures/guild";
import type { UserStructure } from "../structures/user";
import type { VoiceStateStructure } from "../structures/voice";
import type { ActivityStructure } from "./gateway_events";
import type { OAuth2Scopes } from "./oauth2";
import type { RpcErrorCodes } from "./opcodes";

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#rpc-rpc-versions}
 */
export enum RpcVersions {
	V1 = 1,
}

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#payloads-payload-structure}
 */
export type RpcPayload = {
	args: object;
	cmd: RpcCommands;
	data: object;
	evt: RpcEvents;
	nonce: string;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#commands-and-events-rpc-commands}
 */
export enum RpcCommands {
	Authenticate = "AUTHENTICATE",
	Authorize = "AUTHORIZE",
	CloseActivityRequest = "CLOSE_ACTIVITY_REQUEST",
	Dispatch = "DISPATCH",
	GetChannel = "GET_CHANNEL",
	GetChannels = "GET_CHANNELS",
	GetGuild = "GET_GUILD",
	GetGuilds = "GET_GUILDS",
	GetSelectedVoiceChannel = "GET_SELECTED_VOICE_CHANNEL",
	GetVoiceSettings = "GET_VOICE_SETTINGS",
	SelectTextChannel = "SELECT_TEXT_CHANNEL",
	SelectVoiceChannel = "SELECT_VOICE_CHANNEL",
	SendActivityJoinInvite = "SEND_ACTIVITY_JOIN_INVITE",
	SetActivity = "SET_ACTIVITY",
	SetCertifiedDevices = "SET_CERTIFIED_DEVICES",
	SetUserVoiceSettings = "SET_USER_VOICE_SETTINGS",
	SetVoiceSettings = "SET_VOICE_SETTINGS",
	Subscribe = "SUBSCRIBE",
	Unsubscribe = "UNSUBSCRIBE",
}

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#commands-and-events-rpc-commands}
 */
export type RpcClientCommands = {
	[RpcCommands.Authorize]: [authorize: AuthorizeArgumentStructure];
	[RpcCommands.Authenticate]: [authenticate: AuthenticateArgumentStructure];
	[RpcCommands.GetGuilds]: [guild: GetGuildsResponseStructure];
	[RpcCommands.GetGuild]: [guild: GetGuildArgumentStructure];
	[RpcCommands.GetChannel]: [channel: GetChannelArgumentStructure];
	[RpcCommands.GetChannels]: [channels: GetChannelsArgumentStructure];
	[RpcCommands.GetSelectedVoiceChannel]: [voiceChannel: SelectVoiceChannelArgumentStructure];
	[RpcCommands.GetVoiceSettings]: [voiceSettings: GetVoiceSettingsResponseStructure];
	[RpcCommands.SetUserVoiceSettings]: [voiceSettings: SetUserVoiceSettingsArgumentAndResponseStructure];
	[RpcCommands.SelectVoiceChannel]: [voiceChannel: SelectVoiceChannelArgumentStructure];
	[RpcCommands.SelectTextChannel]: [textChannel: SelectTextChannelArgumentStructure];
	[RpcCommands.SetVoiceSettings]: [voiceSettings: SetVoiceSettingsArgumentAndResponseStructure];
	[RpcCommands.Subscribe]: [subscribe: SubscribeResponseStructure];
	[RpcCommands.Unsubscribe]: [unsubscribe: UnsubscribeResponseStructure];
	[RpcCommands.SetCertifiedDevices]: [certifiedDevices: SetCertifiedDevicesArgumentStructure];
	[RpcCommands.SetActivity]: [activity: SetActivityArgumentStructure];
	[RpcCommands.SendActivityJoinInvite]: [activityJoinInvite: SendActivityJoinInviteArgumentStructure];
	[RpcCommands.CloseActivityRequest]: [closeActivityRequest: CloseActivityRequestArgumentStructure];
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#commands-and-events-rpc-events}
 */
export enum RpcEvents {
	ActivityJoin = "ACTIVITY_JOIN",
	ActivityJoinRequest = "ACTIVITY_JOIN_REQUEST",
	ActivitySpectate = "ACTIVITY_SPECTATE",
	ChannelCreate = "CHANNEL_CREATE",
	Error = "ERROR",
	GuildCreate = "GUILD_CREATE",
	GuildStatus = "GUILD_STATUS",
	MessageCreate = "MESSAGE_CREATE",
	MessageDelete = "MESSAGE_DELETE",
	MessageUpdate = "MESSAGE_UPDATE",
	NotificationCreate = "NOTIFICATION_CREATE",
	Ready = "READY",
	SpeakingStart = "SPEAKING_START",
	SpeakingStop = "SPEAKING_STOP",
	VoiceChannelSelect = "VOICE_CHANNEL_SELECT",
	VoiceConnectionStatus = "VOICE_CONNECTION_STATUS",
	VoiceSettingsUpdate = "VOICE_SETTINGS_UPDATE",
	VoiceStateCreate = "VOICE_STATE_CREATE",
	VoiceStateDelete = "VOICE_STATE_DELETE",
	VoiceStateUpdate = "VOICE_STATE_UPDATE",
}

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#commands-and-events-rpc-events}
 */
export type RpcClientEvents = {
	[RpcEvents.Ready]: [ready: ReadyDispatchDataStructure];
	[RpcEvents.Error]: [error: ErrorDataStructure];
	[RpcEvents.GuildCreate]: [guild: GuildCreateDispatchDataStructure];
	[RpcEvents.ChannelCreate]: [channel: ChannelCreateDispatchDataStructure];
	[RpcEvents.VoiceChannelSelect]: [voiceChannelSelect: VoiceChannelSelectDispatchDataStructure];
	[RpcEvents.VoiceConnectionStatus]: [voiceConnectionStatus: VoiceConnectionStatusDispatchDataStructure];
	[RpcEvents.VoiceStateCreate]: [voiceState: VoiceStateArgumentStructure];
	[RpcEvents.VoiceStateDelete]: [voiceState: VoiceStateArgumentStructure];
	[RpcEvents.VoiceStateUpdate]: [voiceState: VoiceStateArgumentStructure];
	[RpcEvents.MessageCreate]: [message: MessageArgumentStructure];
	[RpcEvents.MessageDelete]: [message: MessageArgumentStructure];
	[RpcEvents.MessageUpdate]: [message: MessageArgumentStructure];
	[RpcEvents.SpeakingStart]: [speaking: SpeakingArgumentStructure];
	[RpcEvents.SpeakingStop]: [speaking: SpeakingArgumentStructure];
	[RpcEvents.NotificationCreate]: [notification: NotificationCreateDispatchDataStructure];
	[RpcEvents.ActivityJoin]: [activityJoin: ActivityJoinDispatchDataStructure];
	[RpcEvents.ActivitySpectate]: [activitySpectate: ActivitySpectateDispatchDataStructure];
	[RpcEvents.ActivityJoinRequest]: [activityJoinRequest: ActivityJoinRequestDataStructure];
	[RpcEvents.GuildStatus]: [guildStatus: GuildStatusArgumentStructure];
	[RpcEvents.VoiceSettingsUpdate]: [voiceSettings: SetVoiceSettingsArgumentAndResponseStructure];
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#authorize-authorize-argument-structure}
 */
export type AuthorizeArgumentStructure = {
	client_id: string;
	rpc_token: string;
	scopes: OAuth2Scopes[];
	username: string;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#authorize-authorize-response-structure}
 */
export type AuthorizeResponseStructure = {
	code: string;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#authenticate-authenticate-argument-structure}
 */
export type AuthenticateArgumentStructure = {
	access_token: string;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#authenticate-authenticate-response-structure}
 */
export type AuthenticateResponseStructure = {
	application: OAuth2ApplicationStructure;
	expires: string;
	scopes: OAuth2Scopes[];
	user: UserStructure;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#authenticate-oauth2-application-structure}
 */
export type OAuth2ApplicationStructure = {
	description: string;
	icon: string;
	id: Snowflake;
	name: string;
	rpc_origins: string[];
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#getguilds-get-guilds-response-structure}
 */
export type GetGuildsResponseStructure = {
	guilds: GuildStructure[];
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#getguild-get-guild-argument-structure}
 */
export type GetGuildArgumentStructure = {
	guild_id: string;
	timeout: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#getguild-get-guild-response-structure}
 */
export type GetGuildResponseStructure = {
	icon_url: string;
	id: string;
	members: UserStructure[];
	name: string;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#getchannel-get-channel-argument-structure}
 */
export type GetChannelArgumentStructure = {
	channel_id: string;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#getchannel-get-channel-response-structure}
 */
export type GetChannelResponseStructure = {
	bitrate: Integer;
	guild_id: Snowflake;
	id: Snowflake;
	messages: MessageStructure[];
	name: string;
	position: Integer;
	topic: string;
	type: Integer;
	user_limit: Integer;
	voice_states: VoiceStateStructure[];
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#getchannels-get-channels-argument-structure}
 */
export type GetChannelsArgumentStructure = {
	guild_id: string;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#getchannels-get-channels-response-structure}
 */
export type GetChannelsResponseStructure = {
	channels: ChannelStructure[];
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#setuservoicesettings-set-user-voice-settings-argument-and-response-structure}
 */
export type SetUserVoiceSettingsArgumentAndResponseStructure = {
	mute?: boolean;
	pan?: SetUserVoiceSettingsPanObject;
	user_id: string;
	volume?: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#setuservoicesettings-pan-object}
 */
export type SetUserVoiceSettingsPanObject = {
	left: Float;
	right: Float;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#selectvoicechannel-select-voice-channel-argument-structure}
 */
export type SelectVoiceChannelArgumentStructure = {
	channel_id: string;
	force: boolean;
	navigate: boolean;
	timeout: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#selecttextchannel-select-text-channel-argument-structure}
 */
export type SelectTextChannelArgumentStructure = {
	channel_id: string;
	timeout: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#getvoicesettings-get-voice-settings-response-structure}
 */
export type GetVoiceSettingsResponseStructure = {
	automatic_gain_control: boolean;
	deaf: boolean;
	echo_cancellation: boolean;
	input: GetVoiceSettingsVoiceSettingsInputObject;
	mode: GetVoiceSettingsVoiceSettingsModeObject;
	mute: boolean;
	noise_suppression: boolean;
	output: GetVoiceSettingsVoiceSettingsOutputObject;
	qos: boolean;
	silence_warning: boolean;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#getvoicesettings-voice-settings-input-object}
 */
export type GetVoiceSettingsVoiceSettingsInputObject = {
	available_devices: { id: Snowflake; name: string; }[];
	device_id: string;
	volume: Float;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#getvoicesettings-voice-settings-output-object}
 */
export type GetVoiceSettingsVoiceSettingsOutputObject = {
	available_devices: { id: Snowflake; name: string; }[];
	device_id: string;
	volume: Float;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#getvoicesettings-voice-settings-mode-object}
 */
export type GetVoiceSettingsVoiceSettingsModeObject = {
	auto_threshold: boolean;
	delay: Float;
	shortcut: GetVoiceSettingsShortcutKeyComboObject;
	threshold: Float;
	type: "PUSH_TO_TALK" | "VOICE_ACTIVITY";
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#getvoicesettings-shortcut-key-combo-object}
 */
export type GetVoiceSettingsShortcutKeyComboObject = {
	code: Integer;
	name: string;
	type: GetVoiceSettingsKeyTypes;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#getvoicesettings-key-types}
 */
export enum GetVoiceSettingsKeyTypes {
	KeyboardKey = 0,
	MouseButton = 1,
	KeyboardModifierKey = 2,
	GamepadButton = 3,
}

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#setvoicesettings-set-voice-settings-argument-and-response-structure}
 */
export type SetVoiceSettingsArgumentAndResponseStructure = {
	automatic_gain_control: boolean;
	deaf: boolean;
	echo_cancellation: boolean;
	input: GetVoiceSettingsVoiceSettingsInputObject;
	mode: GetVoiceSettingsVoiceSettingsModeObject;
	mute: boolean;
	noise_suppression: boolean;
	output: GetVoiceSettingsVoiceSettingsOutputObject;
	qos: boolean;
	silence_warning: boolean;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#subscribe-subscribe-response-structure}
 */
export type SubscribeResponseStructure = {
	evt: string;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#unsubscribe-unsubscribe-response-structure}
 */
export type UnsubscribeResponseStructure = {
	evt: string;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#setcertifieddevices-set-certified-devices-argument-structure}
 */
export type SetCertifiedDevicesArgumentStructure = {
	devices: SetCertifiedDevicesDeviceObject[];
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#setcertifieddevices-device-object}
 */
export type SetCertifiedDevicesDeviceObject = {
	automatic_gain_control?: boolean;
	echo_cancellation?: boolean;
	hardware_mute?: boolean;
	id: string;
	model: SetCertifiedDevicesModelObject;
	noise_suppression?: boolean;
	related: string[];
	type: DeviceType;
	vendor: SetCertifiedDevicesVendorObject;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#setcertifieddevices-vendor-object}
 */
export type SetCertifiedDevicesVendorObject = {
	name: string;
	url: string;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#setcertifieddevices-model-object}
 */
export type SetCertifiedDevicesModelObject = {
	name: string;
	url: string;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#setcertifieddevices-device-type}
 */
export enum DeviceType {
	AudioInput = "audioinput",
	AudioOutput = "audiooutput",
	VideoInput = "videoinput",
}

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#setactivity-set-activity-argument-structure}
 */
export type SetActivityArgumentStructure = {
	activity: ActivityStructure;
	pid: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#sendactivityjoininvite-send-activity-join-invite-argument-structure}
 */
export type SendActivityJoinInviteArgumentStructure = {
	user_id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#closeactivityrequest-close-activity-request-argument-structure}
 */
export type CloseActivityRequestArgumentStructure = {
	user_id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#ready-ready-dispatch-data-structure}
 */
export type ReadyDispatchDataStructure = {
	config: RpcServerConfigurationObject;
	user: UserStructure;
	v: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#ready-rpc-server-configuration-object}
 */
export type RpcServerConfigurationObject = {
	api_endpoint: string;
	cdn_host: string;
	environment: string;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#error-error-data-structure}
 */
export type ErrorDataStructure = {
	code: RpcErrorCodes;
	message: string;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#guildstatus-guild-status-argument-structure}
 */
export type GuildStatusArgumentStructure = {
	guild_id: string;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#guildstatus-guild-status-dispatch-data-structure}
 */
export type GuildStatusDispatchDataStructure = {
	guild: GuildStructure;
	online: 0;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#guildcreate-guild-create-dispatch-data-structure}
 */
export type GuildCreateDispatchDataStructure = {
	id: string;
	name: string;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#channelcreate-channel-create-dispatch-data-structure}
 */
export type ChannelCreateDispatchDataStructure = {
	id: string;
	name: string;
	type: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#voicechannelselect-voice-channel-select-dispatch-data-structure}
 */
export type VoiceChannelSelectDispatchDataStructure = {
	channel_id: string;
	guild_id: string;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#voicestatecreatevoicestateupdatevoicestatedelete-voice-state-argument-structure}
 */
export type VoiceStateArgumentStructure = {
	channel_id: string;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#voiceconnectionstatus-voice-connection-status-dispatch-data-structure}
 */
export type VoiceConnectionStatusDispatchDataStructure = {
	average_ping: Integer;
	hostname: string;
	last_ping: Integer;
	pings: Integer[];
	stata: VoiceConnectionStates;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#voiceconnectionstatus-voice-connection-states}
 */
export enum VoiceConnectionStates {
	Authenticating = "AUTHENTICATING",
	AwaitingEndpoint = "AWAITING_ENDPOINT",
	Connected = "CONNECTED",
	Connecting = "CONNECTING",
	Disconnected = "DISCONNECTED",
	IceChecking = "ICE_CHECKING",
	NoRoute = "NO_ROUTE",
	VoiceConnected = "VOICE_CONNECTED",
	VoiceConnecting = "VOICE_CONNECTING",
	VoiceDisconnected = "VOICE_DISCONNECTED",
}

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#messagecreatemessageupdatemessagedelete-message-argument-structure}
 */
export type MessageArgumentStructure = {
	channel_id: string;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#speakingstartspeakingstop-speaking-argument-structure}
 */
export type SpeakingArgumentStructure = {
	channel_id: string;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#speakingstartspeakingstop-speaking-dispatch-data-structure}
 */
export type SpeakingDispatchDataStructure = {
	user_id: string;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#notificationcreate-notification-create-dispatch-data-structure}
 */
export type NotificationCreateDispatchDataStructure = {
	body: string;
	channel_id: string;
	icon_url: string;
	message: MessageStructure;
	title: string;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#activityjoin-activity-join-dispatch-data-structure}
 */
export type ActivityJoinDispatchDataStructure = {
	secret: string;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#activityspectate-activity-spectate-dispatch-data-structure}
 */
export type ActivitySpectateDispatchDataStructure = {
	secret: string;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rpc#activityjoinrequest-activity-join-request-data-structure}
 */
export type ActivityJoinRequestDataStructure = {
	user: UserStructure;
};
