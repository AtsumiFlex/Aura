import type {
	ApplicationRoleConnectionMetadataStructureInfer,
	ApplicationStructureInfer,
	SnowflakeInfer,
} from "@aurajs/core";
import { ApplicationFlagsEnum, ApplicationIntegrationTypesEnum, InstallParamsStructure } from "@aurajs/core";
import { z } from "zod";
import type { RestRequestOptions } from "../globals/rest";

/**
 * Get Application Role Connection Metadata Records
 *
 * Returns a list of application role connection metadata records.
 *
 * @see {@link https://discord.com/developers/docs/resources/application#get-application-role-connection-metadata-records}
 */
export function GetApplicationRoleConnectionMetadataRecords<T extends ApplicationRoleConnectionMetadataStructureInfer[]>(applicationId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/applications/${applicationId}/role-connections/metadata`,
		method: "GET",
	};
}

/**
 * Get Current Application
 *
 * Returns the current application for the bot.
 *
 * @see {@link https://discord.com/developers/docs/resources/application#get-current-application-information}
 */
export function GetCurrentApplication<T extends ApplicationStructureInfer>(): RestRequestOptions<T> {
	return {
		url: "/applications/@me",
		method: "GET",
	};
}

/**
 * JSON Edit Current Application
 *
 * @see {@link https://discord.com/developers/docs/resources/application#edit-current-application-information}
 */
export const JSONEditCurrentApplication = z.object({
	custom_install_url: z.string().optional(),
	description: z.string().optional(),
	role_connections_verification_url: z.string().optional(),
	install_params: InstallParamsStructure.optional(),
	integration_types_config: z.record(ApplicationIntegrationTypesEnum).optional(),
	flags: ApplicationFlagsEnum.optional(),
	icon: z.string().optional(),
	cover_image: z.string().optional(),
	interactions_endpoint_url: z.string().optional(),
	tags: z.array(z.string()).max(5).optional(),
});

/**
 * JSON Edit Current Application Infer
 *
 * Is the inferred type of the {@link JSONEditCurrentApplication} zod object.
 */
export type JSONEditCurrentApplicationInfer = z.infer<typeof JSONEditCurrentApplication>;

/**
 * Edit Current Application
 *
 * Edit the current application for the bot.
 *
 * @see {@link https://discord.com/developers/docs/resources/application#edit-current-application-information}
 */
export function EditCurrentApplication<T extends ApplicationStructureInfer>(json: JSONEditCurrentApplicationInfer): RestRequestOptions<T> {
	return {
		url: "/applications/@me",
		method: "PATCH",
		body: JSONEditCurrentApplication.parse(json),
	};
}
