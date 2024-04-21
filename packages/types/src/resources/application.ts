// https://discord.com/developers/docs/resources/application#application-resource
import type { Snowflake } from "../global";
import type { Locales } from "../locales";
import type { OAuth2Scopes } from "../oauth2/enum";
import type { BitwisePermissionFlags } from "../permission";
import type { TeamObject } from "../teams";
import type { GuildStructure } from "./guild";
import type { UserStructure } from "./user";

// https://discord.com/developers/docs/resources/application#application-resource
export type ApplicationStructure = {
	approximate_guild_count?: number;
	bot?: UserStructure;
	bot_public: boolean;
	bot_require_code_grant: boolean;
	cover_image?: string;
	custom_install_url?: string;
	description: string;
	flags?: ApplicationFlags;
	guild: GuildStructure;
	guild_id?: Snowflake;
	icon: string | null;
	id: Snowflake;
	install_params?: InstallParamsStructure;
	integration_types_config?: ApplicationIntegrationTypes;
	interactions_endpoint_url?: string;
	name: string;
	owner?: UserStructure;
	primary_sku_id?: Snowflake;
	privacy_policy_url?: string;
	redirect_uris?: string[];
	role_connections_verification_url?: string;
	rpc_origins?: string[];
	slug?: string;
	summary: string;
	tags?: string[];
	team?: TeamObject;
	terms_of_service_url?: string;
	verify_key: string;
};

// https://discord.com/developers/docs/resources/application#application-object-application-integration-types
export enum ApplicationIntegrationTypes {
	GuildInstall = 0,
	UserInstall = 1,
}

// https://discord.com/developers/docs/resources/application#application-object-application-integration-type-configuration-object
export type ApplicationIntegrationTypeConfigurationObject = {
	oauth2_install_params?: InstallParamsStructure;
};

// https://discord.com/developers/docs/resources/application#application-object-application-flags
export enum ApplicationFlags {
	APPLICATION_AUTO_MODERATION_RULE_CREATE_BADGE = 64,
	GATEWAY_PRESENCE = 4_096,
	GATEWAY_PRESENCE_LIMITED = 8_192,
	GATEWAY_GUILD_MEMBERS = 16_384,
	GATEWAY_GUILD_MEMBERS_LIMITED = 32_768,
	VERIFICATION_PENDING_GUILD_LIMIT = 65_536,
	EMBEDDED = 131_072,
	GATEWAY_MESSAGE_CONTENT = 262_144,
	GATEWAY_MESSAGE_CONTENT_LIMITED = 524_288,
	APPLICATION_COMMAND_BADGE = 8_388_608,
}

// https://discord.com/developers/docs/resources/application#install-params-object-install-params-structure
export type InstallParamsStructure = {
	permissions: BitwisePermissionFlags;
	scopes: OAuth2Scopes[];
};

// https://discord.com/developers/docs/resources/application-role-connection-metadata#application-role-connection-metadata-object-application-role-connection-metadata-structure
export type ApplicationRoleConnectionMetadataStructure = {
	description: string;
	description_localizations?: Record<Locales, string>;
	key: string;
	name: string;
	name_localizations?: Record<Locales, string>;
	type: ApplicationRoleConnectionMetadataType;
};

// https://discord.com/developers/docs/resources/application-role-connection-metadata#application-role-connection-metadata-object-application-role-connection-metadata-type
export enum ApplicationRoleConnectionMetadataType {
	INTEGER_LESS_THAN_OR_EQUAL = 1,
	INTEGER_GREATER_THAN_OR_EQUAL = 2,
	INTEGER_EQUAL = 3,
	INTEGER_NOT_EQUAL = 4,
	DATETIME_LESS_THAN_OR_EQUAL = 5,
	DATETIME_GREATER_THAN_OR_EQUAL = 6,
	BOOLEAN_EQUAL = 7,
	BOOLEAN_NOT_EQUAL = 8,
}
