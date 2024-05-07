import type { ApplicationStructureInfer } from "@aurajs/core";
import { ApplicationStructure, ISO8601Timestamp, OAuth2ScopesEnum, UserStructure } from "@aurajs/core";
import { z } from "zod";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * Get Current Bot Application Information
 *
 * Get information about the current bot application.
 *
 * @see {@link https://discord.com/developers/docs/topics/oauth2#get-current-bot-application-information}
 */
export function GetCurrentBotApplicationInformation<T extends ApplicationStructureInfer>(): RestMakeRequestOptions<T> {
	return {
		method: "GET",
		url: "/oauth2/applications/@me",
	};
}

/**
 * Response Get Current Authorization Information
 *
 * The response structure for the GetCurrentBotApplicationInformation endpoint.
 *
 * @see {@link https://discord.com/developers/docs/topics/oauth2#get-current-authorization-information-response-structure}
 */
export const ResponseGetCurrentAuthorizationInformation = z.object({
	application: ApplicationStructure.partial(),
	scopes: z.array(OAuth2ScopesEnum),
	expires: ISO8601Timestamp,
	user: UserStructure.optional(),
});

/**
 * Response Get Current Authorization Information Infer
 *
 * The inferred type of {@link ResponseGetCurrentAuthorizationInformation}
 */
export type ResponseGetCurrentAuthorizationInformationInfer = z.infer<typeof ResponseGetCurrentAuthorizationInformation>;

/**
 * Get Current Authorization Information
 *
 * Get information about the current authorization.
 *
 * @see {@link https://discord.com/developers/docs/topics/oauth2#get-current-authorization-information}
 */
export function GetCurrentAuthorizationInformation<T extends ResponseGetCurrentAuthorizationInformationInfer>(): RestMakeRequestOptions<T> {
	return {
		method: "GET",
		url: "/oauth2/@me",
	};
}
