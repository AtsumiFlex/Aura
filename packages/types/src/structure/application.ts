import { LocalesEnum } from "@aurajs/core";
import { z } from "zod";
import { Integer, Snowflake } from "../globals";
import { Oauth2ScopesEnum } from "../topic/oauth2";
import { TeamStructure } from "../topic/teams";
import { GuildStructure } from "./guild";
import { UserStructure } from "./user";

export enum ApplicationRoleConnectionMetadataType {
	IntegerLessThanOrEqual = 1,
	IntegerGreaterThanOrEqual = 2,
	IntegerEqual = 3,
	IntegerNotEqual = 4,
	DateTimeLessThanOrEqual = 5,
	DateTimeGreaterThanOrEqual = 6,
	BooleanEqual = 7,
	BooleanNotEqual = 8,
}

export const ApplicationRoleConnectionMetadataTypeEnum = z.nativeEnum(ApplicationRoleConnectionMetadataType);

export const ApplicationRoleConnectionMetadataStructure = z.object({
	type: ApplicationRoleConnectionMetadataTypeEnum,
	key: z.string(),
	name: z.string(),
	name_localizations: z.record(LocalesEnum).optional(),
	description: z.string(),
	description_localizations: z.record(LocalesEnum).optional(),
});
export type ApplicationRoleConnectionMetadataInfer = z.infer<typeof ApplicationRoleConnectionMetadataStructure>;

export const InstallParamsStructure = z.object({
	scopes: z.array(Oauth2ScopesEnum),
	permissions: z.string(),
});
export type InstallParamsInfer = z.infer<typeof InstallParamsStructure>;

export enum ApplicationFlags {
	ApplicationAutoModerationRuleCreateBadge = 64,
	GatewayPresence = 4_096,
	GatewayPresenceLimited = 8_192,
	GatewayGuildMembers = 16_384,
	GatewayGuildMembersLimited = 32_768,
	VerificationPendingGuildLimit = 65_536,
	Embedded = 131_072,
	GatewayMessageContent = 262_144,
	GatewayMessageContentLimited = 524_288,
	ApplicationCommandBadge = 8_388_608,
}

export const ApplicationFlagsEnum = z.nativeEnum(ApplicationFlags);

export const ApplicationIntegrationTypeConfigurationStructure = z.object({ oauth2_install_params: InstallParamsStructure.optional() });

export enum ApplicationInstallationType {
	GuildInstall = 0,
	UserInstall = 1,
}

export const ApplicationInstallationTypeEnum = z.nativeEnum(ApplicationInstallationType);

export const ApplicationStructure = z.object({
	id: Snowflake,
	name: z.string(),
	icon: z.string().nullable(),
	description: z.string(),
	rpc_origins: z.array(z.string()).optional(),
	bot_public: z.boolean(),
	bot_require_code_grant: z.boolean(),
	bot: UserStructure.partial().optional(),
	terms_of_service_url: z.string().optional(),
	privacy_policy_url: z.string().optional(),
	owner: UserStructure.partial().optional(),
	summary: z.string().optional(),
	verify_key: z.string(),
	team: TeamStructure.nullable(),
	guild_id: Snowflake.optional(),
	guild: GuildStructure.optional(),
	primary_sku_id: Snowflake.optional(),
	slug: z.string().optional(),
	cover_image: z.string().optional(),
	flags: ApplicationFlagsEnum.optional(),
	approximate_guild_count: Integer.optional(),
	redirect_uris: z.array(z.string()).optional(),
	interactions_endpoint_url: z.string().optional(),
	role_connections_verification_url: z.string().optional(),
	tags: z.array(z.string()).optional(),
	install_params: InstallParamsStructure.optional(),
	integration_types_config: z.record(ApplicationIntegrationTypeConfigurationStructure).optional(),
	custom_install_url: z.string().optional(),
});
export type ApplicationInfer = z.infer<typeof ApplicationStructure>;
