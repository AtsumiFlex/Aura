import type {
	ApplicationRoleConnectionMetadataStructureInfer,
	ApplicationStructureInfer,
	SnowflakeInfer,
} from "@aurajs/core";
import {
	ApplicationFlagsEnum,
	ApplicationIntegrationTypeConfigurationStructure,
	ApplicationIntegrationTypesEnum,
	InstallParamsStructure,
} from "@aurajs/core";
import { z } from "zod";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * Get Application Role Connection Metadata Records
 *
 * Get a list of application role connection metadata records.
 *
 * @see {@link https://discord.com/developers/docs/topics/oauth2#get-application-role-connection-metadata-records}
 */
export function GetApplicationRoleConnectionMetadataRecords<T extends ApplicationRoleConnectionMetadataStructureInfer[]>(applicationId: SnowflakeInfer): RestMakeRequestOptions<T> {
	return {
		method: "GET",
		url: `/applications/${applicationId}/role-connections/metadata`,
	};
}

/**
 * Update Application Role Connection Metadata Records
 *
 * Update a list of application role connection metadata records.
 *
 * @see {@link https://discord.com/developers/docs/topics/oauth2#update-application-role-connection-metadata-records}
 */
export function UpdateApplicationRoleConnectionMetadataRecords<T extends ApplicationRoleConnectionMetadataStructureInfer[]>(applicationId: SnowflakeInfer): RestMakeRequestOptions<T> {
	return {
		method: "PUT",
		url: `/applications/${applicationId}/role-connections/metadata`,
	};
}

/**
 * Get Current Application
 *
 * Get information about the current application.
 *
 * @see {@link https://discord.com/developers/docs/topics/oauth2#get-current-application-information}
 */
export function GetCurrentApplication<T extends ApplicationStructureInfer>(): RestMakeRequestOptions<T> {
	return {
		method: "GET",
		url: "/applications/@me",
	};
}

/**
 * JSON Edit Current Application
 *
 * Modify the current application.
 *
 * @see {@link https://discord.com/developers/docs/topics/oauth2#edit-current-application-information}
 */
export const JSONEditCurrentApplication = z.object({
	custom_install_url: z.string().optional(),
	description: z.string().optional(),
	role_connections_verification_url: z.string().optional(),
	install_params: InstallParamsStructure.optional(),
	integration_types_config: z.record(ApplicationIntegrationTypesEnum, ApplicationIntegrationTypeConfigurationStructure).optional(),
	flags: ApplicationFlagsEnum.optional(),
	icon: z.string().optional().nullable(),
	cover_image: z.string().optional().nullable(),
	interactions_endpoint_url: z.string().optional(),
	tags: z.array(z.string().max(20)).max(5).optional(),
});

/**
 * JSON Edit Current Application Infer
 *
 * The inferred type of {@link JSONEditCurrentApplication}
 */
export type JSONEditCurrentApplicationInfer = z.infer<typeof JSONEditCurrentApplication>;

/**
 * Edit Current Application
 *
 * Modify the current application.
 *
 * @see {@link https://discord.com/developers/docs/topics/oauth2#edit-current-application-information}
 */
export function EditCurrentApplication<T extends ApplicationStructureInfer>(json: JSONEditCurrentApplicationInfer): RestMakeRequestOptions<T> {
	return {
		method: "PATCH",
		url: "/applications/@me",
		body: JSONEditCurrentApplication.parse(json),
	};
}
