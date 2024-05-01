import { LocalesEnum } from "@aurajs/core";
import { z } from "zod";
import { Mixed, Snowflake } from "../globals";

export const ApplicationRoleConnectionStructure = z.object({
	platform_name: z.string().nullable(),
	platform_username: z.string().nullable(),
	metadata: z.record(z.string()),
});
export type ApplicationRoleConnectionInfer = z.infer<typeof ApplicationRoleConnectionStructure>;

export enum ApplicationRoleVisibilityTypes {
	None = 0,
	Everyone = 1,
}

export const ApplicationRoleVisibilityTypesEnum = z.nativeEnum(ApplicationRoleVisibilityTypes);

export enum UserServiceTypes {
	Battlenet = "battlenet",
	Bungie = "bungie",
	Ebay = "ebay",
	EpicGames = "epicgames",
	Facebook = "facebook",
	Github = "github",
	Instagram = "instagram",
	LeagueOfLegends = "leagueoflegends",
	Paypal = "paypal",
	Playstation = "playstation",
	Reddit = "reddit",
	RiotGames = "riotgames",
	Skype = "skype",
	Spotify = "spotify",
	Steam = "steam",
	Tiktok = "tiktok",
	Twitch = "twitch",
	Twitter = "twitter",
	Xbox = "xbox",
	Youtube = "youtube",
}

export const UserServiceTypesEnum = z.nativeEnum(UserServiceTypes);

export const UserConnectionStructure = z.object({
	id: z.string(),
	name: z.string(),
	type: UserServiceTypesEnum,
	revoked: z.boolean().optional(),
	integrations: z.array(Mixed.optional()), // TODO: an array of partial server integrations
	verified: z.boolean(),
	friend_sync: z.boolean(),
	show_activity: z.boolean(),
	two_way_link: z.boolean(),
	visibility: ApplicationRoleVisibilityTypesEnum,
});
export type UserConnectionInfer = z.infer<typeof UserConnectionStructure>;

export enum UserPremiumTypes {
	None = 0,
	NitroClassic = 1,
	Nitro = 2,
	NitroBasic = 3,
}

export const UserPremiumTypesEnum = z.nativeEnum(UserPremiumTypes);

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

export const UserFlagsEnum = z.nativeEnum(UserFlags);

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
	accent_color: z.number().optional().nullable(),
	locale: LocalesEnum.optional(),
	verified: z.boolean().optional(),
	email: z.string().optional().nullable(),
	flags: UserFlagsEnum.optional(),
	premium_type: UserPremiumTypesEnum.optional(),
	public_flags: UserFlagsEnum.optional(),
	avatar_decoration: z.string().optional().nullable(),
});
export type UserInfer = z.infer<typeof UserStructure>;
