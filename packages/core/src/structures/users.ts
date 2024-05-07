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
import { ApplicationRoleConnectionMetadataStructure } from "./applications";
import { IntegrationStructure } from "./guilds";

/**
 * Application Role Connection Structure
 *
 * The role connection object that an application has attached to a user.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#application-role-connection-object-application-role-connection-structure}
 */
export const ApplicationRoleConnectionStructure = z.object({
	platform_name: z.string().max(50).nullable(),
	platform_username: z.string().max(100).nullable(),
	metadata: z.record(z.string().regex(/^[\d_a-z]{1,50}$/), ApplicationRoleConnectionMetadataStructure).optional(),
});

/**
 * Application Role Connection Structure Infer
 *
 * The inferred type of {@link ApplicationRoleConnectionStructure}
 */
export type ApplicationRoleConnectionStructureInfer = z.infer<typeof ApplicationRoleConnectionStructure>;

/**
 * Visibility Types
 *
 * The visibility of a user's activity.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#activity-object-activity-visibility-types}
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
 * User Services
 *
 * Represents the services that are connected to a user.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#connection-object-services}
 */
export const UserServices = z.enum(["battlenet", "bungie", "ebay", "epicgames", "facebook", "github", "instagram", "leagueoflegends", "paypal", "playstation", "reddit", "riotgames", "spotify", "skype", "steam", "tiktok", "twitch", "twitter", "xbox", "youtube"]);

/**
 * User Services Infer
 *
 * The inferred type of {@link UserServices}
 */
export type UserServicesInfer = z.infer<typeof UserServices>;

/**
 * Connection Structure
 *
 * Represents a connection object that the user has attached.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#connection-object-connection-structure}
 */
export const ConnectionStructure = z.object({
	id: z.string(),
	name: z.string(),
	type: UserServices,
	revoked: z.boolean().optional(),
	integrations: z.array(z.lazy(() => IntegrationStructure.partial())).optional(),
	verified: z.boolean(),
	friend_sync: z.boolean(),
	show_activity: z.boolean(),
	two_way_link: z.boolean(),
	visibility: VisibilityTypesEnum,
});

/**
 * Connection Structure Infer
 *
 * The inferred type of {@link ConnectionStructure}
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
	/**
	 * None
	 */
	None = 0,
	/**
	 * Nitro Classic
	 */
	NitroClassic = 1,
	/**
	 * Nitro
	 */
	Nitro = 2,
	/**
	 * Nitro Basic
	 */
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
 * The user's flags.
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
	BotHttpInteractions = 524_288,
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
 * Represents a user in Discord.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#user-object-user-structure}
 */
export const UserStructure = z.object({
	id: Snowflake,
	username: z.string(),
	discriminator: z.string(),
	global_name: z.string().nullable(),
	avatar: z.string().nullable(),
	bot: z.boolean().optional(),
	system: z.boolean().optional(),
	mfa_enabled: z.boolean().optional(),
	banner: z.string().optional().nullable(),
	accent_color: Integer.optional().nullable(),
	locale: LocalesEnum.optional(),
	verified: z.boolean().optional(),
	email: z.string().optional().nullable(),
	flags: UserFlagsEnum.optional(),
	premium_type: PremiumTypesEnum.optional(),
	public_flags: UserFlagsEnum.optional(),
	avatar_decoration: z.string().optional().nullable(),
});

/**
 * User Structure Infer
 *
 * The inferred type of {@link UserStructure}
 */
export type UserStructureInfer = z.infer<typeof UserStructure>;
