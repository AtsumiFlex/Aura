/**
 * @see {@link https://discord.com/developers/docs/resources/application#application-resource}
 */

import type { Locales } from "@aurajs/core";
import type { Snowflake } from "../globals";
import type { OAuth2Scopes } from "../topic/oauth2";
import type { TeamObject } from "../topic/teams";
import type { UserStructure } from "./user";

/**
 * @see {@link https://discord.com/developers/docs/resources/application#application-object-application-structure}
 */
export type ApplicationStructure = {
	approximate_guild_count?: number;
	bot?: Partial<UserStructure>;
	bot_public: boolean;
	bot_require_code_grant: boolean;
	cover_image?: string;
	custom_install_url?: string;
	description: string;
	flags?: number;
	guild?: Partial<object>; // TODO: partial guild
	guild_id?: Snowflake;
	icon: string | null;
	id: Snowflake;
	install_params?: InstallParamsStructure;
	integration_types_config?: Record<string, ApplicationIntegrationTypeConfig>;
	interactions_endpoint_url?: string;
	name: string;
	owner?: Partial<UserStructure>;
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

/**
 * @see {@link https://discord.com/developers/docs/resources/application#application-object-application-integration-types}
 */
export enum ApplicationIntegrationTypes {
	GuildInstall = 0,
	UserInstall = 1,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/application#application-object-application-integration-type-configuration-object}
 */
export type ApplicationIntegrationTypeConfig = {
	oauth2_install_params?: InstallParamsStructure;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/application#application-object-application-flags}
 */
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

/**
 * @see {@link https://discord.com/developers/docs/resources/application#install-params-object-install-params-structure}
 */
export type InstallParamsStructure = {
	permissions: string;
	scopes: OAuth2Scopes[];
};

/**
 * @see {@link https://discord.com/developers/docs/resources/application#edit-current-application-json-params}
 */
export type JSONEditCurrentApplication = {
	cover_image?: string;
	custom_install_url?: string;
	description?: string;
	flags?: number;
	icon?: string;
	install_params?: InstallParamsStructure;
	integration_types_config?: Record<string, ApplicationIntegrationTypeConfig>;
	interactions_endpoint_url?: string;
	role_connections_verification_url?: string;
	tags?: string[];
};

/**
 * @see {@link https://discord.com/developers/docs/resources/application-role-connection-metadata#application-role-connection-metadata-object-application-role-connection-metadata-structure}
 */
export type ApplicationRoleConnectionMetadataStructure = {
	description: string;
	description_localizations?: Record<string, Locales>;
	key: string;
	name: string;
	name_localizations?: Record<string, Locales>;
	type: ApplicationRoleConnectionMetadataType;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/application-role-connection-metadata#application-role-connection-metadata-object-application-role-connection-metadata-type}
 */
export enum ApplicationRoleConnectionMetadataType {
	IntegerLessThanOrEqual = 1,
	IntegerGreaterThanOrEqual = 2,
	IntegerEqual = 3,
	IntegerNotEqual = 4,
	DatetimeLessThanOrEqual = 5,
	DatetimeGreaterThanOrEqual = 6,
	BooleanEqual = 7,
	BooleanNotEqual = 8,
}
