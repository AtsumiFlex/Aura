// https://discord.com/developers/docs/topics/gateway-events#presence

import type { Integer, Snowflake } from "@aurajs/core";
import type { StatusTypes } from "../types";

// https://discord.com/developers/docs/topics/gateway-events#presence-update-presence-update-event-fields
export type PresenceUpdateEventFields = {
	activities: ActivityStructure[];
	client_status: ClientStatusObject;
	guild_id: Snowflake;
	status: Exclude<"invisible", StatusTypes>;
	user: object;
	// TODO: User object
};

// https://discord.com/developers/docs/topics/gateway-events#client-status-object
export type ClientStatusObject = {
	desktop?: string;
	mobile?: string;
	web?: string;
};

// https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-structure
export type ActivityStructure = {
	application_id?: Snowflake;
	assets?: ActivityAssets;
	buttons?: ActivityButton[];
	created_at: Integer;
	details?: string | null;
	emoji?: ActivityEmoji | null;
	flags?: ActivityFlags;
	id: Snowflake;
	instance?: boolean;
	name: string;
	party?: ActivityParty;
	secrets?: ActivitySecrets;
	state?: string | null;
	sync_id?: string;
	synced_at?: Integer;
	timestamps?: ActivityTimestamps;
	type: ActivityTypes;
	url?: string | null;
};

// https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-types
export enum ActivityTypes {
	GAME = 0,
	STREAMING = 1,
	LISTENING = 2,
	WATCHING = 3,
	CUSTOM = 4,
	COMPETING = 5,
}

// https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-timestamps
export type ActivityTimestamps = {
	end?: Integer;
	start?: Integer;
};

// https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-emoji
export type ActivityEmoji = {
	animated?: boolean;
	id?: Snowflake;
	name: string;
};

// https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-party
export type ActivityParty = {
	id?: string;
	size?: [Integer, Integer];
};

// https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-assets
export type ActivityAssets = {
	large_image?: string;
	large_text?: string;
	small_image?: string;
	small_text?: string;
};

// https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-asset-image
export type ActivityAssetImage = {
	h: string;
	l: string;
};

// https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-secrets
export type ActivitySecrets = {
	join?: string;
	match?: string;
	spectate?: string;
};

// https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-flags
export enum ActivityFlags {
	INSTANCE = 1,
	JOIN = 2,
	SPECTATE = 4,
	JOIN_REQUEST = 8,
	SYNC = 16,
	PLAY = 32,
}

// https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-buttons
export type ActivityButton = {
	label: string;
	url: string;
};

// https://discord.com/developers/docs/topics/gateway-events#typing-start-typing-start-event-fields
export type TypingStartEventFields = {
	channel_id: Snowflake;
	guild_id?: Snowflake;
	member?: object;
	// TODO: Member object
	timestamp: Integer;
	user_id: Snowflake;
};
