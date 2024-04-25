import type { GatewayOpcodes, Integer, Snowflake } from "@aurajs/core";
import type { ActivityStructure } from "./activity";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#payload-structure}
 */
export type GatewayPayload = {
	d: object;
	op: GatewayOpcodes;
	s: Integer;
	t: string;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#identify-identify-structure}
 */
export type GatewayIdentify = {
	compress?: boolean;
	large_threshold?: Integer;
	presence: GatewayPresenceUpdateStructure; // TODO: A voir si c'est bien ça
	properties: GatewayIdentifyConnectionProperties;
	shard?: [Integer, Integer];
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
export type GatewayResume = {
	seq: Integer;
	session_id: string;
	token: string;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#request-guild-members-request-guild-members-structure}
 */
export type RequestGuildMembersStructure = {
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
	Dnd = "dnd",
	Idle = "idle",
	Invisible = "invisible",
	Offline = "offline",
	Online = "online",
}
