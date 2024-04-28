/**
 * @see {@link https://discord.com/developers/docs/resources/user#users-resource}
 */

import type { Integer, Snowflake } from "../globals";

/**
 * @see {@link https://discord.com/developers/docs/resources/user#user-object-user-structure}
 */
export type UserStructure = {
	accent_color?: Integer | null;
	avatar?: string | null;
	avatar_decoration?: string | null;
	banner?: string | null;
	bot?: boolean;
	discriminator: string;
	email?: string | null;
	flags?: Integer;
	global_name?: string | null;
	id: Snowflake;
	locale?: string;
	mfa_enabled?: boolean;
	premium_type?: Integer;
	public_flags?: Integer;
	system?: boolean;
	username: string;
	verified?: boolean;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/user#user-object-user-flags}
 */
export enum UserFlags {
	Staff = 1,
	Partner = 2,
	HypeSquad = 4,
	BugHunterLevel1 = 8,
	HypeSquadOnlineHouse1 = 64,
	HypeSquadOnlineHouse2 = 128,
	HypeSquadOnlineHouse3 = 256,
	PremiumEarlySupporter = 512,
	TeamPseudoUser = 1_024,
	BugHunterLevel2 = 16_384,
	VerifiedBot = 65_536,
	VerifiedDeveloper = 131_072,
	CertifiedModerator = 262_144,
	BotHTTPInteractions = 524_288,
	ActiveDeveloper = 4_194_304,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/user#user-object-premium-types}
 */
export enum PremiumTypes {
	None = 0,
	NitroClassic = 1,
	Nitro = 2,
	NitroBasic = 3,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/user#connection-object-connection-structure}
 */
export type ConnectionStructure = {
	friend_sync: boolean;
	id: string;
	integrations?: object; // TODO: object mapping integration account id to an array of connection objects
	name: string;
	revoked?: boolean;
	show_activity: boolean;
	two_way_link: boolean;
	type: ConnectionServices;
	verified: boolean;
	visibility: ConnectionVisibilityTypes;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/user#connection-object-services}
 */
export enum ConnectionServices {
	BattleNet = "battlenet",
	Bungie = "bungie",
	EBay = "ebay",
	EpicGames = "epicgames",
	Facebook = "facebook",
	GitHub = "github",
	Instagram = "instagram",
	LeagueOfLegends = "leagueoflegends",
	PayPal = "paypal",
	PlayStation = "playstation",
	Reddit = "reddit",
	RiotGames = "riotgames",
	Skype = "skype",
	Spotify = "spotify",
	Steam = "steam",
	TikTok = "tiktok",
	Twitch = "twitch",
	Twitter = "twitter",
	Xbox = "xbox",
	YouTube = "youtube",
}

/**
 * @see {@link https://discord.com/developers/docs/resources/user#connection-object-visibility-types}
 */
export enum ConnectionVisibilityTypes {
	None = 0,
	Everyone = 1,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/user#application-role-connection-object-application-role-connection-structure}
 */
export type ApplicationRoleConnectionStructure = {
	metadata?: object; // TODO: object mapping application role connection metadata keys to their string-ified value (max 100 characters) for the user on the platform a bot has connected
	platform_name?: string;
	platform_username?: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/user#modify-current-user-json-params}
 */
export type JSONModifyCurrentUserParams = {
	avatar?: string | null;
	username?: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/user#get-current-user-guilds-query-string-params}
 */
export type GetCurrentUserGuildsQuery = {
	after?: Snowflake;
	before?: Snowflake;
	limit?: Integer;
	with_counts?: boolean;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/user#create-dm-json-params}
 */
export type JSONCreateDMParams = {
	recipient_id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/user#create-group-dm-json-params}
 */
export type JSONCreateGroupDMParams = {
	access_tokens: string[];
	nickname: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/user#update-current-user-application-role-connection-json-params}
 */
export type JSONUpdateCurrentUserApplicationRoleConnectionParams = {
	metadata?: object; // TODO: object mapping application role connection metadata keys to their string-ified value (max 100 characters) for the user on the platform a bot has connected
	platform_name?: string;
	platform_username?: string;
};
