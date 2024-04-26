/**
 * @fileoverview Activity event
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object}
 */

import type { Integer, Snowflake } from "../../base/base";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-structure}
 */
export type ActivityStructure = {
	application_id?: Snowflake;
	assets?: ActivityAssets;
	buttons?: ActivityButtons[];
	created_at: Integer;
	details?: string | null;
	emoji?: ActivityEmoji | null;
	flags?: ActivityFlags;
	instance?: boolean;
	name: string;
	party?: ActivityParty;
	secrets?: ActivitySecrets;
	state?: string | null;
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
