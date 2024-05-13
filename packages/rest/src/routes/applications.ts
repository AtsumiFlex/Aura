import type {
	ApplicationRoleConnectionMetadataStructureInfer,
	ApplicationStructureInfer,
	SnowflakeInfer,
} from "@aurajs/core";
import {
	ApplicationFlagsEnum,
	ApplicationIntegrationTypesEnum,
	InstallParamsStructure,
	Snowflake,
	zodErrorInterceptor,
} from "@aurajs/core";
import { z } from "zod";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * Get Application Role Connection Metadata Records
 *
 * Returns a list of application role connection metadata objects for the given application.
 *
 * @see {@link https://discord.com/developers/docs/resources/application-role-connection-metadata#get-application-role-connection-metadata-records}
 */
export function GetApplicationRoleConnectionMetadataRecords(applicationId: SnowflakeInfer): RestMakeRequestOptions<ApplicationRoleConnectionMetadataStructureInfer[]> {
	try {
		return {
			method: "GET",
			path: `/applications/${Snowflake.parse(applicationId)}/role-connections/metadata`,
		};
	} catch (error) {
		throw zodErrorInterceptor(error);
	}
}

/**
 * Update Application Role Connection Metadata Records
 *
 * Updates the application role connection metadata records for the given application.
 *
 * @see {@link https://discord.com/developers/docs/resources/application-role-connection-metadata#update-application-role-connection-metadata-records}
 */
export function UpdateApplicationRoleConnectionMetadataRecords(applicationId: SnowflakeInfer, data: ApplicationRoleConnectionMetadataStructureInfer[]): RestMakeRequestOptions<ApplicationRoleConnectionMetadataStructureInfer[]> {
	try {
		return {
			method: "PUT",
			path: `/applications/${Snowflake.parse(applicationId)}/role-connections/metadata`,
			body: data,
		};
	} catch (error) {
		throw zodErrorInterceptor(error);
	}
}

/**
 * Get Current Application
 *
 * Returns the application object associated with the requesting bot user.
 *
 * @see {@link https://discord.com/developers/docs/resources/application#get-current-application}
 */
export function GetCurrentApplication(): RestMakeRequestOptions<ApplicationStructureInfer> {
	return {
		method: "GET",
		path: "/applications/@me",
	};
}

/**
 * JSON Params Edit Current Application
 *
 * @see {@link https://discord.com/developers/docs/resources/application#edit-current-application-json-params}
 */
export const JSONParamsEditCurrentApplication = z.object({
	/**
	 * Default custom authorization URL for the app, if enabled
	 */
	custom_install_url: z.string().optional(),
	/**
	 * Description of the app
	 */
	description: z.string().optional(),
	/**
	 * Role connection verification URL for the app
	 */
	role_connections_verification_url: z.string().optional(),
	/**
	 * Settings for the app's default in-app authorization link, if enabled
	 */
	install_params: InstallParamsStructure.optional(),
	/**
	 *    In preview. Default scopes and permissions for each supported installation context. Value for each key is an integration type configuration object
	 */
	integration_types_config: z.record(z.string(), ApplicationIntegrationTypesEnum).optional(),
	/**
	 * App's public flags
	 */
	flags: z.union([z.literal(ApplicationFlagsEnum.enum.GatewayPresenceLimited), z.literal(ApplicationFlagsEnum.enum.GatewayGuildMembersLimited), z.literal(ApplicationFlagsEnum.enum.GatewayMessageContentLimited)]).optional(),
	/**
	 * Icon for the app
	 */
	icon: z.string().optional(),
	/**
	 * Default rich presence invite cover image for the app
	 */
	cover_image: z.string().optional(),
	/**
	 * Interactions endpoint URL for the app
	 */
	interactions_endpoint_url: z.string().optional(),
	/**
	 * List of tags describing the content and functionality of the app (max of 20 characters per tag). Max of 5 tags.
	 */
	tags: z.array(z.string()).optional(),
});

/**
 * JSON Params Edit Current Application Infer
 *
 * Is used to infer the type of the {@link JSONParamsEditCurrentApplication} object.
 */
export type JSONParamsEditCurrentApplicationInfer = z.infer<typeof JSONParamsEditCurrentApplication>;

/**
 * Edit Current Application
 *
 * Edit properties of the app associated with the requesting bot user. Only properties that are passed will be updated. Returns the updated application object on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/application#edit-current-application}
 */
export function EditCurrentApplication(json: JSONParamsEditCurrentApplicationInfer): RestMakeRequestOptions<ApplicationStructureInfer> {
	return {
		method: "PATCH",
		path: "/applications/@me",
		body: JSONParamsEditCurrentApplication.parse(json),
	};
}
