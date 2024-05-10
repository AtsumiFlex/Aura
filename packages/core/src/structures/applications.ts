/**
 * Application Role Connection Metadata - Application Resource
 *
 * A representation of role connection metadata for an application.
 *
 * Applications (or "apps") are containers for developer platform features, and can be installed to Discord servers and/or user accounts.
 *
 * @see {@link https://discord.com/developers/docs/resources/application-role-connection-metadata#application-role-connection-metadata}
 * @see {@link https://discord.com/developers/docs/resources/application#application-resource}
 */

import { z } from "zod";
import { Integer, Snowflake } from "../globals/formatters";
import { LocalesKeys } from "../globals/locales";
import { OAuth2ScopesEnum } from "../libs/oauth2";
import { GuildStructure } from "./guilds";
import { TeamMemberObject } from "./teams";
import { UserStructure } from "./users";

/**
 * Application Role Connection Metadata Type
 *
 * @see {@link https://discord.com/developers/docs/resources/application-role-connection-metadata#application-role-connection-metadata-object-application-role-connection-metadata-type}
 */
export enum ApplicationRoleConnectionMetadataType {
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
 * Is a zod enum that represents the available {@link ApplicationRoleConnectionMetadataType}.
 */
export const ApplicationRoleConnectionMetadataTypeEnum = z.nativeEnum(ApplicationRoleConnectionMetadataType);

/**
 * Application Role Connection Metadata Structure
 *
 * A representation of role connection metadata for an application.
 *
 * @see {@link https://discord.com/developers/docs/resources/application-role-connection-metadata#application-role-connection-metadata-object-application-role-connection-metadata-structure}
 */
export const ApplicationRoleConnectionMetadataStructure = z.object({
	/**
	 * Type of metadata value
	 *
	 * @see {@link ApplicationRoleConnectionMetadataType}
	 */
	type: ApplicationRoleConnectionMetadataTypeEnum,
	/**
	 * Dictionary key for the metadata field (must be a-z, 0-9, or _ characters; 1-50 characters)
	 */
	key: z.string().min(1).max(50),
	/**
	 * Name of the metadata field (1-100 characters)
	 */
	name: z.string().min(1).max(100),
	/**
	 * Translations of the name
	 */
	name_localizations: z.record(LocalesKeys, z.string()).optional(),
	/**
	 * Description of the metadata field (1-200 characters)
	 */
	description: z.string().min(1).max(200),
	/**
	 * Translations of the description
	 */
	description_localizations: z.record(LocalesKeys, z.string()).optional(),
});

/**
 * Application Role Connection Metadata Structure Infer
 *
 * The inferred zod object from {@link ApplicationRoleConnectionMetadataStructure}
 */
export type ApplicationRoleConnectionMetadataStructureInfer = z.infer<typeof ApplicationRoleConnectionMetadataStructure>;

/**
 * Install Params Structure
 *
 * @see {@link https://discord.com/developers/docs/resources/application#install-params-object-install-params-structure}
 */
export const InstallParamsStructure = z.object({
	/**
	 * Scopes to add the application to the server with
	 */
	scopes: z.array(OAuth2ScopesEnum),
	/**
	 * Permissions to request for the bot role
	 */
	permissions: z.string(),
});

/**
 * Install Params Structure Infer
 *
 * The inferred zod object from {@link InstallParamsStructure}
 */
export type InstallParamsStructureInfer = z.infer<typeof InstallParamsStructure>;

/**
 * Application Flags
 *
 * @see {@link https://discord.com/developers/docs/resources/application#application-object-application-flags}
 */
export enum ApplicationFlags {
	/**
	 * Indicates if an app uses the Auto Moderation API
	 */
	ApplicationAutoModerationRuleCreateBadge = 64,
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
 * @see {@link https://discord.com/developers/docs/resources/application#application-object-application-integration-type-configuration-object}
 */
export const ApplicationIntegrationTypeConfigurationStructure = z.object({
	/**
	 * Install params for each installation context's default in-app authorization link
	 */
	oauth2_install_params: InstallParamsStructure.optional(),
});

/**
 * Application Integration Type Configuration Structure Infer
 *
 * The inferred zod object from {@link ApplicationIntegrationTypeConfigurationStructure}
 */
export type ApplicationIntegrationTypeConfigurationStructureInfer = z.infer<typeof ApplicationIntegrationTypeConfigurationStructure>;

/**
 * Application Integration Types
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
 * @see {@link https://discord.com/developers/docs/resources/application#application-object-application-structure}
 */
export const ApplicationStructure = z.object({
	/**
	 * ID of the app
	 */
	id: Snowflake,
	/**
	 * Name of the app
	 */
	name: z.string(),
	/**
	 * Icon hash of the app
	 */
	icon: z.string().nullable(),
	/**
	 * Description of the app
	 */
	description: z.string(),
	/**
	 * List of RPC origin URLs, if RPC is enabled
	 */
	rpc_origins: z.array(z.string()).optional(),
	/**
	 * When false, only the app owner can add the app to guilds
	 */
	bot_public: z.boolean(),
	/**
	 * When true, the app's bot will only join upon completion of the full OAuth2 code grant flow
	 */
	bot_require_code_grant: z.boolean(),
	/**
	 * Partial user object for the bot user associated with the app
	 */
	bot: UserStructure.partial().optional(),
	/**
	 * URL of the app's Terms of Service
	 */
	terms_of_service_url: z.string().optional(),
	/**
	 * URL of the app's Privacy Policy
	 */
	privacy_policy_url: z.string().optional(),
	/**
	 * Partial user object for the owner of the app
	 */
	owner: UserStructure.partial().optional(),
	/**
	 * deprecated and will be removed in v11. An empty string.
	 *
	 * @deprecated
	 */
	summary: z.string().optional(),
	/**
	 * Hex encoded key for verification in interactions and the GameSDK's GetTicket
	 */
	verify_key: z.string(),
	/**
	 * If the app belongs to a team, this will be a list of the members of that team
	 */
	team: TeamMemberObject.nullable(),
	/**
	 * Guild associated with the app. For example, a developer support server.
	 */
	guild_id: Snowflake.optional(),
	/**
	 * Partial object of the associated guild
	 */
	guild: GuildStructure.partial().optional(),
	/**
	 * If this app is a game sold on Discord, this field will be the id of the "Game SKU" that is created, if exists
	 */
	primary_sku_id: Snowflake.optional(),
	/**
	 * If this app is a game sold on Discord, this field will be the URL slug that links to the store page
	 */
	slug: z.string().optional(),
	/**
	 * App's default rich presence invite cover image hash
	 */
	cover_image: z.string().optional(),
	/**
	 * App's public flags
	 */
	flags: ApplicationFlagsEnum.optional(),
	/**
	 * Approximate count of guilds the app has been added to
	 */
	approximate_guild_count: Integer.optional(),
	/**
	 * Array of redirect URIs for the app
	 */
	redirect_uris: z.array(z.string()).optional(),
	/**
	 * Interactions endpoint URL for the app
	 */
	interactions_endpoint_url: z.string().optional(),
	/**
	 * Role connection verification URL for the app
	 */
	role_connections_verification_url: z.string().optional(),
	/**
	 * List of tags describing the content and functionality of the app. Max of 5 tags.
	 */
	tags: z.array(z.string()).max(5).optional(),
	/**
	 * Settings for the app's default in-app authorization link, if enabled
	 */
	install_params: InstallParamsStructure.optional(),
	/**
	 * In preview. Default scopes and permissions for each supported installation context. Value for each key is an integration type configuration object
	 */
	integration_types_config: z.record(ApplicationIntegrationTypesEnum, ApplicationIntegrationTypeConfigurationStructure).optional(),
	/**
	 * Default custom authorization URL for the app, if enabled
	 */
	custom_install_url: z.string().optional(),
});

/**
 * Application Structure Infer
 *
 * The inferred zod object from {@link ApplicationStructure}
 */
export type ApplicationStructureInfer = z.infer<typeof ApplicationStructure>;
