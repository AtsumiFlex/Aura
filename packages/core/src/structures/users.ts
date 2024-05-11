/**
 * Users Resource
 *
 * Users in Discord are generally considered the base entity. Users can spawn across the entire platform, be members of guilds, participate in text and voice chat, and much more. Users are separated by a distinction of "bot" vs "normal." Although they are similar, bot users are automated users that are "owned" by another user. Unlike normal users, bot users do not have a limitation on the number of Guilds they can be a part of.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#users-resource}
 */

import { z } from "zod";
import { Integer, Snowflake } from "../globals/formatters";
import { LocalesEnum } from "../globals/locales";
import { IntegrationStructure } from "./guilds";

/**
 * Application Role Connection Structure
 *
 * The role connection object that an application has attached to a user.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#application-role-connection-object}
 */
export const ApplicationRoleConnectionStructure = z.object({
	/**
	 * The vanity name of the platform a bot has connected (max 50 characters)
	 */
	platform_name: z.string().max(50).nullable(),
	/**
	 * The username on the platform a bot has connected (max 100 characters)
	 */
	platform_username: z.string().max(100).nullable(),
	/**
	 * TODO: Object mapping application role connection metadata keys to their string-ified value (max 100 characters) for the user on the platform a bot has connected
	 */
	metadata: z.object({}).optional(),
});

/**
 * Application Role Connection Structure Infer
 *
 * The inferred zod object from {@link ApplicationRoleConnectionStructure}
 */
export type ApplicationRoleConnectionStructureInfer = z.infer<typeof ApplicationRoleConnectionStructure>;

/**
 * Visibility Types
 *
 * The visibility of the user's activity
 *
 * @see {@link https://discord.com/developers/docs/resources/user#connection-object-visibility-types}
 */
export enum VisibilityTypes {
	/**
	 * Invisible to everyone except the user themselves
	 */
	None = 0,
	/**
	 * Visible to everyone
	 */
	Everyone = 1,
}

/**
 * Visibility Types Enum
 *
 * Is a zod enum that represents the available {@link VisibilityTypes}.
 */
export const VisibilityTypesEnum = z.nativeEnum(VisibilityTypes);

/**
 * Services
 *
 * The services that the user is connected to.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#connection-object-services}
 */
export enum Services {
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
 * Services Enum
 *
 * Is a zod enum that represents the available {@link Services}.
 */
export const ServicesEnum = z.nativeEnum(Services);

/**
 * Connection Structure
 *
 * The connection object that the user has attached.
 */
export const ConnectionStructure = z.object({
	/**
	 * Id of the connection account
	 */
	id: z.string(),
	/**
	 * The username of the connection account
	 */
	name: z.string(),
	/**
	 * The service of this connection
	 *
	 * @see {@link Services}
	 */
	type: ServicesEnum,
	/**
	 * Whether the connection is revoked
	 */
	revoked: z.boolean().optional(),
	/**
	 * An array of partial server integrations
	 */
	integrations: z.array(z.lazy(() => IntegrationStructure.partial())).optional(),
	/**
	 * Whether the connection is verified
	 */
	verified: z.boolean(),
	/**
	 * Whether friend sync is enabled for this connection
	 */
	friend_sync: z.boolean(),
	/**
	 * Whether activities related to this connection will be shown in presence updates
	 */
	show_activity: z.boolean(),
	/**
	 * Whether this connection has a corresponding third party OAuth2 token
	 */
	two_way_link: z.boolean(),
	/**
	 * Visibility of this connection
	 *
	 * @see {@link VisibilityTypes}
	 */
	visibility: VisibilityTypesEnum,
});

/**
 * Connection Structure Infer
 *
 * The inferred zod object from {@link ConnectionStructure}
 */
export type ConnectionStructureInfer = z.infer<typeof ConnectionStructure>;

/**
 * Premium Types
 *
 * Premium types denote the level of premium a user has. Visit the Nitro page to learn more about the premium plans we currently offer.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#user-object-premium-types}
 */
export enum PremiumTypes {
	None = 0,
	NitroClassic = 1,
	Nitro = 2,
	NitroBasic = 3,
}

/**
 * Premium Types Enum
 *
 * Is a zod enum that represents the available {@link PremiumTypes}.
 */
export const PremiumTypesEnum = z.nativeEnum(PremiumTypes);

/**
 * User Flags
 *
 * @see {@link https://discord.com/developers/docs/resources/user#user-object-user-flags}
 */
export enum UserFlags {
	/**
	 * Discord Employee
	 */
	Staff = 1,
	/**
	 * Partnered Server Owner
	 */
	Partner = 2,
	/**
	 * HypeSquad Events Member
	 */
	HypeSquad = 4,
	/**
	 * Bug Hunter Level 1
	 */
	BugHunterLevel1 = 8,
	/**
	 * House Bravery Member
	 */
	HypeSquadOnlineHouse1 = 64,
	/**
	 * House Brilliance Member
	 */
	HypeSquadOnlineHouse2 = 128,
	/**
	 * House Balance Member
	 */
	HypeSquadOnlineHouse3 = 256,
	/**
	 * Early Nitro Supporter
	 */
	PremiumEarlySupporter = 512,
	/**
	 * User is a team
	 */
	TeamPseudoUser = 1_024,
	/**
	 * Bug Hunter Level 2
	 */
	BugHunterLevel2 = 16_384,
	/**
	 * Verified Bot
	 */
	VerifiedBot = 65_536,
	/**
	 * Early Verified Bot Developer
	 */
	VerifiedDeveloper = 131_072,
	/**
	 * Moderator Programs Alumni
	 */
	CertifiedModerator = 262_144,
	/**
	 * Bot uses only HTTP interactions and is shown in the online member list
	 */
	BotHTTPInteractions = 524_288,
	/**
	 * User is an Active Developer
	 */
	ActiveDeveloper = 4_194_304,
}

/**
 * User Flags Enum
 *
 * Is a zod enum that represents the available {@link UserFlags}.
 */
export const UserFlagsEnum = z.nativeEnum(UserFlags);

/**
 * User Structure
 *
 * @see {@link https://discord.com/developers/docs/resources/user#user-object-user-structure}
 */
export const UserStructure = z.object({
	/**
	 * The user's id
	 */
	id: Snowflake,
	/**
	 * The user's username, not unique across the platform
	 */
	username: z.string(),
	/**
	 * The user's Discord-tag
	 */
	discriminator: z.string(),
	/**
	 * The user's display name, if it is set. For bots, this is the application name
	 */
	global_name: z.string().nullable(),
	/**
	 * The user's avatar hash
	 */
	avatar: z.string().nullable(),
	/**
	 * Whether the user belongs to an OAuth2 application
	 */
	bot: z.boolean().optional(),
	/**
	 * Whether the user is an Official Discord System user (part of the urgent message system)
	 */
	system: z.boolean().optional(),
	/**
	 * Whether the user has two factor enabled on their account
	 */
	mfa_enabled: z.boolean().optional(),
	/**
	 * The user's banner hash
	 */
	banner: z.string().optional().nullable(),
	/**
	 * The user's banner color encoded as an integer representation of hexadecimal color code
	 */
	accent_color: Integer.optional().nullable(),
	/**
	 * The user's chosen language option
	 */
	locale: LocalesEnum.optional(),
	/**
	 * Whether the email on this account has been verified
	 */
	verified: z.boolean().optional(),
	/**
	 * The user's email
	 */
	email: z.string().optional().nullable(),
	/**
	 * The flags on a user's account
	 *
	 * @see {@link UserFlags}
	 */
	flags: UserFlagsEnum.optional(),
	/**
	 * The type of Nitro subscription on a user's account
	 *
	 * @see {@link PremiumTypes}
	 */
	premium_type: PremiumTypesEnum.optional(),
	/**
	 * The public flags on a user's account
	 *
	 * @see {@link UserFlags}
	 */
	public_flags: UserFlagsEnum.optional(),
	/**
	 * The user's avatar decoration hash
	 */
	avatar_decoration: z.string().optional().nullable(),
});

/**
 * User Structure Infer
 *
 * The inferred zod object from {@link UserStructure}
 */
export type UserStructureInfer = z.infer<typeof UserStructure>;
