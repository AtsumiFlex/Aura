/**
 * Users Resource
 *
 * Users in Discord are generally considered the base entity. Users can spawn across the entire platform, be members of guilds, participate in text and voice chat, and much more. Users are separated by a distinction of "bot" vs "normal." Although they are similar, bot users are automated users that are "owned" by another user. Unlike normal users, bot users do not have a limitation on the number of Guilds they can be a part of.
 *
 * Usernames and Nicknames
 * Discord enforces the following restrictions for usernames and nicknames:
 *
 * Names can contain most valid unicode characters. We limit some zero-width and non-rendering characters.
 * Usernames must be between 2 and 32 characters long.
 * Nicknames must be between 1 and 32 characters long.
 * Names are sanitized and trimmed of leading, trailing, and excessive internal whitespace.
 * The following restrictions are additionally enforced for usernames:
 *
 * Usernames cannot contain the following substrings: @, #, :, ```, discord
 * Usernames cannot be: everyone, here
 * There are other rules and restrictions not shared here for the sake of spam and abuse mitigation, but the majority of users won't encounter them. It's important to properly handle all error messages returned by Discord when editing or updating names.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#users-resource}
 */

import { z } from "zod";
import { Integer, Snowflake } from "../globals/globals";
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
	platform_name: z.string().optional(),
	platform_username: z.string().optional(),
	metadata: z.record(ApplicationRoleConnectionMetadataStructure).optional(),
});

/**
 * Application Role Connection Structure Infer is the inferred type of the ApplicationRoleConnectionStructure zod object.
 */
export type ApplicationRoleConnectionStructureInfer = z.infer<typeof ApplicationRoleConnectionStructure>;

/**
 * Visibility Types
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
 * VisibilityTypesEnum is a zod enum that represents the visibility types.
 */
export const VisibilityTypesEnum = z.nativeEnum(VisibilityTypes);

/**
 * User Service
 *
 * Users in Discord are generally considered the base entity. Users can spawn across the entire platform, be members of guilds, participate in text and voice chat, and much more. Users are separated by a distinction of "bot" vs "normal." Although they are similar, bot users are automated users that are "owned" by another user. Unlike normal users, bot users do not have a limitation on the number of Guilds they can be a part of.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#connection-object-services}
 */
export const UserService = z.enum(["battlenet", "bungie", "ebay", "epicgames", "facebook", "github", "instagram", "leagueoflegends", "paypal", "playstation", "reddit", "riotgames", "spotify", "skype", "steam", "tiktok", "twitch", "twitter", "xbox", "youtube"]);

/**
 * UserServiceInfer is a zod enum that represents the user service.
 */
export type UserServiceInfer = z.infer<typeof UserService>;

/**
 * Connection Structure
 *
 * The connection object that the user has attached.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#connection-object-connection-structure}
 */
export const ConnectionStructure = z.object({
	id: z.string(),
	name: z.string(),
	type: UserService,
	revoked: z.boolean().optional(),
	integrations: z.array(IntegrationStructure.partial()).optional(),
	verified: z.boolean(),
	friend_sync: z.boolean(),
	show_activity: z.boolean(),
	two_way_link: z.boolean(),
	visibility: VisibilityTypesEnum,
});

/**
 * Connection Structure Infer is the inferred type of the ConnectionStructure zod object.
 */
export type ConnectionStructureInfer = z.infer<typeof ConnectionStructure>;

/**
 * Premium Types
 *
 * Premium types denote the level of premium a user has.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#premium-types}
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
 * PremiumTypesEnum is a zod enum that represents the premium types.
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
	Staff = 1, // 1 << 0 equals 1
	/**
	 * Partnered Server Owner
	 */
	Partner = 2, // 1 << 1 equals 2
	/**
	 * HypeSquad Events Member
	 */
	HypeSquad = 4, // 1 << 2 equals 4
	/**
	 * Bug Hunter Level 1
	 */
	BugHunterLevel1 = 8, // 1 << 3 equals 8
	/**
	 * House Bravery Member
	 */
	HypeSquadOnlineHouse1 = 64, // 1 << 6 equals 64
	/**
	 * House Brilliance Member
	 */
	HypeSquadOnlineHouse2 = 128, // 1 << 7 equals 128
	/**
	 * House Balance Member
	 */
	HypeSquadOnlineHouse3 = 256, // 1 << 8 equals 256
	/**
	 * Early Nitro Supporter
	 */
	PremiumEarlySupporter = 512, // 1 << 9 equals 512
	/**
	 * User is a team
	 */
	TeamPseudoUser = 1_024, // 1 << 10 equals 1024
	/**
	 * Bug Hunter Level 2
	 */
	BugHunterLevel2 = 16_384, // 1 << 14 equals 16384
	/**
	 * Verified Bot
	 */
	VerifiedBot = 65_536, // 1 << 16 equals 65536
	/**
	 * Early Verified Bot Developer
	 */
	VerifiedDeveloper = 131_072, // 1 << 17 equals 131072
	/**
	 * Moderator Programs Alumni
	 */
	CertifiedModerator = 262_144, // 1 << 18 equals 262144
	/**
	 * Bot uses only HTTP interactions and is shown in the online member list
	 */
	BotHttpInteractions = 524_288, // 1 << 19 equals 524288
	/**
	 * User is an Active Developer
	 */
	ActiveDeveloper = 4_194_304, // 1 << 22 equals 4194304
}

/**
 * UserFlagsEnum is a zod enum that represents the user flags.
 */
export const UserFlagsEnum = z.nativeEnum(UserFlags);

/**
 * User Structure
 *
 * Users in Discord are generally considered the base entity. Users can spawn across the entire platform, be members of guilds, participate in text and voice chat, and much more. Users are separated by a distinction of "bot" vs "normal." Although they are similar, bot users are automated users that are "owned" by another user. Unlike normal users, bot users do not have a limitation on the number of Guilds they can be a part of.
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
 * User Structure Infer is the inferred type of the UserStructure zod object.
 */
export type UserStructureInfer = z.infer<typeof UserStructure>;
