import type { ApplicationStructureInfer } from "@aurajs/core";
import {
	ApplicationStructure,
	ISO8601Timestamp,
	OAuth2ScopesEnum,
	UserStructure,
} from "@aurajs/core";
import { z } from "zod";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * Get Current Bot Application Information
 *
 * Returns the bot's application object without the `flags` field.
 *
 * @see {@link https://discord.com/developers/docs/topics/oauth2#get-current-bot-application-information}
 */
export function GetCurrentBotApplicationInformation(): RestMakeRequestOptions<ApplicationStructureInfer> {
	return {
		method: "GET",
		path: "/oauth2/applications/@me",
	};
}

/**
 * Response Get Current Authorization Information
 *
 * @see {@link https://discord.com/developers/docs/topics/oauth2#get-current-authorization-information-response-structure}
 */
export const ResponseGetCurrentAuthorizationInformation = z.object({
	/**
	 * The current application
	 */
	application: ApplicationStructure.partial(),
	/**
	 * The scopes the user has authorized the application for
	 */
	scopes: z.array(OAuth2ScopesEnum),
	/**
	 * When the access token expires
	 */
	expires: ISO8601Timestamp,
	/**
	 * The user who has authorized, if the user has authorized with the identify scope
	 */
	user: UserStructure.optional(),
});

/**
 * Response Get Current Authorization Information Infer
 *
 * Is used to infer the type of the {@link ResponseGetCurrentAuthorizationInformation} object.
 */
export type ResponseGetCurrentAuthorizationInformationInfer = z.infer<typeof ResponseGetCurrentAuthorizationInformation>;

/**
 * Get Current Authorization Information
 *
 * Returns the current authorization information for the bot.
 *
 * @see {@link https://discord.com/developers/docs/topics/oauth2#get-current-authorization-information}
 */
export function GetCurrentAuthorizationInformation(): RestMakeRequestOptions<ResponseGetCurrentAuthorizationInformationInfer> {
	return {
		method: "GET",
		path: "/oauth2/@me",
	};
}
