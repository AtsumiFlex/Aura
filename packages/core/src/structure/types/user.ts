import type { Integer, Snowflake } from "../../base/base";
import type { Locales } from "../../base/locales";

/**
 * @see {@link https://discord.com/developers/docs/resources/user#user-object-user-structure}
 */
export type UserStructure = {
	accent_color?: Integer | null;
	avatar: string | null;
	avatar_decoration?: string | null;
	banner?: string | null;
	bot?: boolean;
	discriminator: string;
	email?: string | null;
	flags?: UserObjectFlags;
	global_name: string | null;
	id: Snowflake;
	locale?: Locales;
	mfa_enabled?: boolean;
	premium_type?: UserObjectPremiumTypes;
	public_flags?: UserObjectFlags;
	system?: boolean;
	username: string;
	verified?: boolean;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/user#user-object-user-flags}
 */
export enum UserObjectFlags {
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
export enum UserObjectPremiumTypes {
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
	integrations?: object[]; // TODO: an array of partial server integrations
	name: string;
	revoked?: boolean;
	show_activity: boolean;
	two_way_link: boolean;
	type: ConnectionObjectServices;
	verified: boolean;
	visibility: ConnectionObjectVisibilityTypes;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/user#connection-object-services}
 */
export enum ConnectionObjectServices {
	Battlenet = "battlenet",
	Bungie = "bungie",
	Ebay = "ebay",
	Epicgames = "epicgames",
	Facebook = "facebook",
	Github = "github",
	Instagram = "instagram",
	Leagueoflegends = "leagueoflegends",
	Paypal = "paypal",
	Playstation = "playstation",
	Reddit = "reddit",
	Riotgames = "riotgames",
	Skype = "skype",
	Spotify = "spotify",
	Steam = "steam",
	Tiktok = "tiktok",
	Twitch = "twitch",
	Twitter = "twitter",
	Xbox = "xbox",
	Youtube = "youtube",
}

/**
 * @see {@link https://discord.com/developers/docs/resources/user#connection-object-visibility-types}
 */
export enum ConnectionObjectVisibilityTypes {
	None = 0,
	Everyone = 1,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/user#application-role-connection-object-application-role-connection-structure}
 */
export type ApplicationRoleConnectionStructure = {
	metadata: object; // TODO: object mapping application role connection metadata keys to their string-ified value (max 100 characters) for the user on the platform a bot has connected
	platform_name: string | null;
	platform_username: string | null;
};
