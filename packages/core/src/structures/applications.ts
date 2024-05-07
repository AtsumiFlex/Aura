/**
 * Application Role Connection Metadata - Application Resource
 *
 * Represents the metadata of an application role connection.
 *
 * @see {@link https://discord.com/developers/docs/resources/application-role-connection-metadata#application-role-connection-metadata | https://discord.com/developers/docs/resources/application#application-resource}
 */

import { z } from "zod";
import { Snowflake } from "../globals/formatters";
import { LocalesKeysEnum } from "../globals/locales";
import { OAuth2ScopesEnum } from "../libs/oauth2";
import { GuildStructure } from "./guilds";
import { TeamStructure } from "./teams";
import { UserStructure } from "./users";

/**
 * Application Role Connection Metadata Type
 *
 * The type of the metadata of an application role connection.
 *
 * @see {@link https://discord.com/developers/docs/resources/application-role-connection-metadata#application-role-connection-metadata-object-application-role-connection-metadata-type}
 */
export enum ApplicationRoleConnectionMetadataTypes {
	/**
	 * The metadata value (integer) is less than or equal to the guild's configured value (integer)
	 */
	IntegerLessThanOrEqual = 1,
	/**
	 * The metadata value (integer) is greater than or equal to the guild's configured value (integer)
	 */
	IntegerGreaterThanOrEqual = 2,
	/**
	 * The metadata value (integer) is equal to the guild's configured value (integer)
	 */
	IntegerEqual = 3,
	/**
	 * The metadata value (integer) is not equal to the guild's configured value (integer)
	 */
	IntegerNotEqual = 4,
	/**
	 * The metadata value (ISO8601 string) is less than or equal to the guild's configured value (integer; days before current date)
	 */
	DateTimeLessThanOrEqual = 5,
	/**
	 * The metadata value (ISO8601 string) is greater than or equal to the guild's configured value (integer; days before current date)
	 */
	DateTimeGreaterThanOrEqual = 6,
	/**
	 * The metadata value (integer) is equal to the guild's configured value (integer; 1)
	 */
	BooleanEqual = 7,
	/**
	 * The metadata value (integer) is not equal to the guild's configured value (integer; 1)
	 */
	BooleanNotEqual = 8,
}

/**
 * Application Role Connection Metadata Type Enum
 *
 * Is a zod enum that represents the available {@link ApplicationRoleConnectionMetadataTypes}.
 */
export const ApplicationRoleConnectionMetadataTypesEnum = z.nativeEnum(ApplicationRoleConnectionMetadataTypes);

/**
 * Application Role Connection Metadata Structure
 *
 * Represents the metadata of an application role connection.
 *
 * @see {@link https://discord.com/developers/docs/resources/application-role-connection-metadata#application-role-connection-metadata-object-application-role-connection-metadata-structure}
 */
export const ApplicationRoleConnectionMetadataStructure = z.object({
	type: ApplicationRoleConnectionMetadataTypesEnum,
	key: z.string().regex(/^[\d_a-z]{1,50}$/),
	name: z.string().min(1).max(100),
	name_localizations: z.record(LocalesKeysEnum, z.string().min(1).max(100)).optional(),
	description: z.string().min(1).max(200),
	description_localizations: z.record(LocalesKeysEnum, z.string().min(1).max(200)).optional(),
});

/**
 * Application Role Connection Metadata Structure Infer
 *
 * The inferred type of {@link ApplicationRoleConnectionMetadataStructure}
 */
export type ApplicationRoleConnectionMetadataStructureInfer = z.infer<typeof ApplicationRoleConnectionMetadataStructure>;

/**
 * Install Params Structure
 *
 * Represents the parameters to install an application.
 *
 * @see {@link https://discord.com/developers/docs/resources/application#install-params-object}
 */
export const InstallParamsStructure = z.object({
	scopes: z.array(OAuth2ScopesEnum),
	permissions: z.string(),
});

/**
 * Install Params Structure Infer
 *
 * The inferred type of {@link InstallParamsStructure}
 */
export type InstallParamsStructureInfer = z.infer<typeof InstallParamsStructure>;

/**
 * Application Flags
 *
 * Flags that are present on an application.
 *
 * @see {@link https://discord.com/developers/docs/resources/application#application-object-application-flags}
 */
export enum ApplicationFlags {
	/**
	 * Indicates if an app uses the Auto Moderation API
	 */
	AutoModerationRuleCreateBadge = 64,
	/**
	 * Intent required for bots in 100 or more servers to receive presence_update events
	 */
	GatewayPresence = 4_096,
	/**
	 * Intent required for bots in under 100 servers to receive presence_update events, found on the Bot page in your app's settings
	 */
	GatewayPresenceLimited = 8_192,
	/**
	 * Intent required for bots in 100 or more servers to receive member-related events like guild_member_add. See the list of member-related events under GUILD_MEMBERS
	 */
	GatewayGuildMembers = 16_384,
	/**
	 * Intent required for bots in under 100 servers to receive member-related events like guild_member_add, found on the Bot page in your app's settings. See the list of member-related events under GUILD_MEMBERS
	 */
	GatewayGuildMembersLimited = 32_768,
	/**
	 * Indicates unusual growth of an app that prevents verification
	 */
	VerificationPendingGuildLimit = 65_536,
	/**
	 * Indicates if an app is embedded within the Discord client (currently unavailable publicly)
	 */
	Embedded = 131_072,
	/**
	 * Intent required for bots in 100 or more servers to receive message content
	 */
	GatewayMessageContent = 262_144,
	/**
	 * Intent required for bots in under 100 servers to receive message content, found on the Bot page in your app's settings
	 */
	GatewayMessageContentLimited = 524_288,
	/**
	 * Indicates if an app has registered global application commands
	 */
	ApplicationCommandBadge = 8_388_608,
}

/**
 * Application Flags Enum
 *
 * Is a zod enum that represents the available {@link ApplicationFlags}.
 */
export const ApplicationFlagsEnum = z.nativeEnum(ApplicationFlags);

/**
 * Application Integration Type Configuration Structure
 *
 * Represents the configuration of an application integration type.
 *
 * @see {@link https://discord.com/developers/docs/resources/application#application-integration-type-configuration-object}
 */
export const ApplicationIntegrationTypeConfigurationStructure = z.object({ oauth2_install_params: InstallParamsStructure.optional() });

/**
 * Application Integration Type Configuration Structure Infer
 *
 * The inferred type of {@link ApplicationIntegrationTypeConfigurationStructure}
 */
export type ApplicationIntegrationTypeConfigurationStructureInfer = z.infer<typeof ApplicationIntegrationTypeConfigurationStructure>;

/**
 * Application Integration Types
 *
 * Where an app can be installed, also called its supported installation contexts.
 *
 * @see {@link https://discord.com/developers/docs/resources/application#application-object-application-integration-types}
 */
export enum ApplicationIntegrationTypes {
	/**
	 * App is installable to servers
	 */
	GuildInstall = 0,
	/**
	 * App is installable to users
	 */
	UserInstall = 1,
}

/**
 * Application Integration Types Enum
 *
 * Is a zod enum that represents the available {@link ApplicationIntegrationTypes}.
 */
export const ApplicationIntegrationTypesEnum = z.nativeEnum(ApplicationIntegrationTypes);

/**
 * Application Structure
 *
 * Represents an application.
 *
 * @see {@link https://discord.com/developers/docs/resources/application#application-object-application-structure}
 */
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
	/**
	 * @deprecated
	 */
	summary: z.string().optional(),
	verify_key: z.string(),
	team: TeamStructure.nullable(),
	guild_id: z.string().optional(),
	guild: GuildStructure.partial().optional(),
	primary_sku_id: z.string().optional(),
	slug: z.string().optional(),
	cover_image: z.string().optional(),
	flags: z.number().optional(),
	approximate_guild_count: z.number().optional(),
	redirect_uris: z.array(z.string()).optional(),
	interactions_endpoint_url: z.string().optional(),
	role_connections_verification_url: z.string().optional(),
	tags: z.array(z.string()).optional(),
	install_params: InstallParamsStructure.optional(),
	integration_types_config: z.record(ApplicationIntegrationTypesEnum, ApplicationIntegrationTypeConfigurationStructure).optional(),
	custom_install_url: z.string().optional(),
});

/**
 * Application Structure Infer
 *
 * The inferred type of {@link ApplicationStructure}
 */
export type ApplicationStructureInfer = z.infer<typeof ApplicationStructure>;
