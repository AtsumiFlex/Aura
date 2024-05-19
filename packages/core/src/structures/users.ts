import { z } from "zod";
import { Integer, Snowflake } from "../globals/formats";
import { LocalesEnum } from "../globals/locales";

/**
 * Schema for validating Application Role Connection Structure.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#application-role-connection-object-application-role-connection-structure}
 */
export const ApplicationRoleConnectionStructure = z.object({
	/**
	 * The vanity name of the platform a bot has connected (max 50 characters).
	 */
	platform_name: z.string().max(50).nullish(),
	/**
	 * The username on the platform a bot has connected (max 100 characters).
	 */
	platform_username: z.string().max(100).nullish(),
	/**
	 * Object mapping application role connection metadata keys to their string-ified value (max 100 characters) for the user on the platform a bot has connected.
	 */
	metadata: z.record(z.string().max(100)), // TODO: Check if this is correct
});

/**
 * The type of the {@link ApplicationRoleConnectionStructure} schema.
 */
export type ApplicationRoleConnectionStructureInfer = z.infer<typeof ApplicationRoleConnectionStructure>;

/**
 * Enum representing the visibility types for a connection.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#connection-object-visibility-types}
 */
export enum ConnectionVisibilityTypes {
	/**
	 * Invisible to everyone except the user themselves.
	 */
	None = 0,
	/**
	 * Visible to everyone.
	 */
	Everyone = 1,
}

/**
 * Zod schema for validating {@link ConnectionVisibilityTypes}.
 *
 * @example
 * ```typescript
 * ConnectionVisibilityTypesEnum.parse(ConnectionVisibilityTypes.None); // Valid
 * ConnectionVisibilityTypesEnum.parse(2); // Throws an error
 * ```
 */
export const ConnectionVisibilityTypesEnum = z.nativeEnum(ConnectionVisibilityTypes);

/**
 * Enum representing the different services for a connection.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#connection-object-services}
 */
export enum ConnectionServices {
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
 * Zod schema for validating {@link ConnectionServices}.
 *
 * @example
 * ```typescript
 * ConnectionServicesEnum.parse(ConnectionServices.Battlenet); // Valid
 * ConnectionServicesEnum.parse("invalid"); // Throws an error
 * ```
 */
export const ConnectionServicesEnum = z.nativeEnum(ConnectionServices);

/**
 * Schema for validating Connection Structure.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#connection-object-connection-structure}
 */
export const ConnectionStructure = z.object({
	/**
	 * ID of the connection account.
	 */
	id: z.string(),
	/**
	 * The username of the connection account.
	 */
	name: z.string(),
	/**
	 * The service of this connection.
	 */
	type: ConnectionServicesEnum,
	/**
	 * Whether the connection is revoked.
	 */
	revoked: z.boolean().optional(),
	/**
	 * An array of partial server integrations.
	 */
	integrations: z.array(z.unknown() /* TODO: partial server integration*/).optional(),
	/**
	 * Whether the connection is verified.
	 */
	verified: z.boolean(),
	/**
	 * Whether friend sync is enabled for this connection.
	 */
	friend_sync: z.boolean(),
	/**
	 * Whether activities related to this connection will be shown in presence updates.
	 */
	show_activity: z.boolean(),
	/**
	 * Whether this connection has a corresponding third party OAuth2 token.
	 */
	two_way_link: z.boolean(),
	/**
	 * Visibility of this connection.
	 */
	visibility: ConnectionVisibilityTypesEnum,
});

/**
 * The type of the {@link ConnectionStructure} schema.
 */
export type ConnectionStructureInfer = z.infer<typeof ConnectionStructure>;

/**
 * Enum representing the different premium types for a user.
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
 * Zod schema for validating {@link PremiumTypes}.
 *
 * @example
 * ```typescript
 * PremiumTypesEnum.parse(PremiumTypes.None); // Valid
 * PremiumTypesEnum.parse(4); // Throws an error
 * ```
 */
export const PremiumTypesEnum = z.nativeEnum(PremiumTypes);

/**
 * Enum representing the different flags for a user.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#user-object-user-flags}
 */
export enum UserFlags {
	Staff = 1,
	Partner = 2,
	HypeSquad = 4,
	BugHunterLevel1 = 8,
	HouseBravery = 64,
	HouseBrilliance = 128,
	HouseBalance = 256,
	EarlySupporter = 512,
	TeamUser = 1_024,
	BugHunterLevel2 = 16_384,
	VerifiedBot = 65_536,
	VerifiedBotDeveloper = 131_072,
	CertifiedModerator = 262_144,
	BotHTTPInteractions = 524_288,
	ActiveDeveloper = 4_194_304,
}

/**
 * Zod schema for validating {@link UserFlags}.
 *
 * @example
 * ```typescript
 * UserFlagsEnum.parse(UserFlags.Staff); // Valid
 * UserFlagsEnum.parse(2048); // Throws an error
 * ```
 */
export const UserFlagsEnum = z.nativeEnum(UserFlags);

/**
 * Schema for validating User Structure.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#user-object-user-structure}
 */
export const UserStructure = z.object({
	/**
	 * The user's id.
	 */
	id: Snowflake,
	/**
	 * The user's username, not unique across the platform.
	 */
	username: z.string(),
	/**
	 * The user's Discord-tag.
	 */
	discriminator: z.string(),
	/**
	 * The user's display name, if it is set. For bots, this is the application name.
	 */
	global_name: z.string().nullable(),
	/**
	 * The user's avatar hash.
	 */
	avatar: z.string().nullable(),
	/**
	 * Whether the user belongs to an OAuth2 application.
	 */
	bot: z.boolean().optional(),
	/**
	 * Whether the user is an Official Discord System user (part of the urgent message system).
	 */
	system: z.boolean().optional(),
	/**
	 * Whether the user has two factor enabled on their account.
	 */
	mfa_enabled: z.boolean().optional(),
	/**
	 * The user's banner hash.
	 */
	banner: z.string().optional().nullable(),
	/**
	 * The user's banner color encoded as an integer representation of hexadecimal color code.
	 */
	accent_color: Integer.optional().nullable(),
	/**
	 * The user's chosen language option.
	 */
	locale: LocalesEnum.optional(),
	/**
	 * Whether the email on this account has been verified.
	 */
	verified: z.boolean().optional(),
	/**
	 * The user's email.
	 */
	email: z.string().optional().nullable(),
	/**
	 * The flags on a user's account.
	 */
	flags: UserFlagsEnum.optional(),
	/**
	 * The type of Nitro subscription on a user's account.
	 */
	premium_type: PremiumTypesEnum.optional(),
	/**
	 * The public flags on a user's account.
	 */
	public_flags: UserFlagsEnum.optional(),
	/**
	 * The user's avatar decoration hash.
	 */
	avatar_decoration: z.string().optional().nullable(),
});

/**
 * The type of the {@link UserStructure} schema.
 */
export type UserStructureInfer = z.infer<typeof UserStructure>;
