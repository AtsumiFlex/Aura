// https://discord.com/developers/docs/resources/user#users-resource
import type { Locales } from "../reference/locales";
import type { Snowflake } from "./global";

// https://discord.com/developers/docs/resources/user#user-object-user-structure
export type UserStructure = {
	accent_color?: number | null;
	avatar: string | null;
	avatar_decoration?: string | null;
	banner?: string | null;
	bot?: boolean;
	discriminator: string;
	email?: string | null;
	flags?: UserFlags;
	global_name: string | null;
	id: Snowflake;
	locale?: Locales;
	mfa_enabled?: boolean;
	premium_type?: PremiumTypes;
	public_flags?: UserFlags;
	system?: boolean;
	username: string;
	verified?: boolean;
};

// https://discord.com/developers/docs/resources/user#user-object-user-flags
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
	BotHttpInteractions = 4_194_304,
	ActiveDeveloper = 4_194_304,
}

// https://discord.com/developers/docs/resources/user#user-object-premium-types
export enum PremiumTypes {
	None = 0,
	NitroClassic = 1,
	Nitro = 2,
	NitroBasic = 3,
}

// https://discord.com/developers/docs/resources/user#connection-object-connection-structure
export type ConnectionStructure = {
	friend_sync: boolean;
	id: string;
	integrations?: object[];
	// TODO: an array of partial server integrations
	name: string;
	revoked?: boolean;
	show_activity: boolean;
	two_way_link: boolean;
	type: Services;
	verified: boolean;
	visibility: VisibilityTypes;
};

// https://discord.com/developers/docs/resources/user#connection-object-services
export type Services =
    "battlenet"
    | "bungie"
    | "ebay"
    | "epicgames"
    | "facebook"
    | "github"
    | "instagram"
    | "leagueoflegends"
    | "paypal"
    | "playstation"
    | "reddit"
    | "riotgames"
    | "skype"
    | "spotify"
    | "steam"
    | "tiktok"
    | "twitch"
    | "twitter"
    | "xbox"
    | "youtube";

// https://discord.com/developers/docs/resources/user#connection-object-visibility-types
export enum VisibilityTypes {
	None = 0,
	Everyone = 1,
}

// https://discord.com/developers/docs/resources/user#application-role-connection-object-application-role-connection-structure
export type ApplicationRoleConnectionStructure = {
	metadata: object;
	// TODO: object mapping application role connection metadata keys to their string-ified value (max 100 characters) for the user on the platform a bot has connected
	platform_name: string | null;
	platform_username: string | null;
};
