/**
 * @module User
 * @description This module defines the structure of a user in the application.
 * @see {@link https://discord.com/developers/docs/resources/user#users-resource}
 */

// Importing necessary types
import type { Snowflake } from "../reference/api";
import type { Integer } from "../reference/extra";
import type { LocaleString } from "../reference/locales";

/**
 * @description Represents the structure of a user.
 * @see {@link https://discord.com/developers/docs/resources/user#user-object-user-structure}
 */
export type UserStructure = {
	accent_color?: Integer | null;
	avatar: string | null;
	avatar_decoration?: string | null;
	banner?: string | null;
	bio?: string | null;
	bot?: boolean;
	clan?: string | null;
	discriminator: string;
	email?: string | null;
	flags?: UserFlags;
	global_name: string | null;
	id: Snowflake;
	locale?: LocaleString | null;
	mfa_enabled?: boolean;
	premium_type?: UserPremiumTypes;
	public_flags?: UserFlags;
	system?: boolean;
	username: string;
	verified?: boolean;
};

/**
 * @description Represents the flags of a user.
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
	BotHttpInteractions = 524_288,
	ActiveDeveloper = 4_194_304,
}

/**
 * @description Represents the premium types of a user.
 * @see {@link https://discord.com/developers/docs/resources/user#user-object-premium-types}
 */
export enum UserPremiumTypes {
	None = 0,
	NitroClassic = 1,
	Nitro = 2,
	NitroBasic = 3,
}

/**
 * @description Represents a connection of a user.
 * @see {@link https://discord.com/developers/docs/resources/user#connection-object-connection-structure}
 */
export type Connection = {
	friend_sync: boolean;
	id: string;
	integrations?: PartialServerIntegration[];
	name: string;
	revoked?: boolean;
	show_activity: boolean;
	two_way_link: boolean;
	type: ConnectionServicesTypes;
	verified: boolean;
	visibility: ConnectionVisibilityTypes;
};

/**
 * @description Represents the services types of a connection.
 * @see {@link https://discord.com/developers/docs/resources/user#connection-object-services}
 */
export type ConnectionServicesTypes =
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

/**
 * @description Represents the visibility types of a connection.
 * @see {@link https://discord.com/developers/docs/resources/user#connection-object-visibility-types}
 */
export enum ConnectionVisibilityTypes {
	None = 0,
	Everyone = 1,
}

/**
 * @description Represents an application role connection.
 * @see {@link https://discord.com/developers/docs/resources/user#application-role-connection-object-application-role-connection-structure}
 */
export type ApplicationRoleConnection = {
	metadata: Record<string, string>;
	platform_name?: string;
	platform_username?: string;
};
