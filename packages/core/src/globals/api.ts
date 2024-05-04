import { z } from "zod";
import { IntegerInfer } from "./globals";

/**
 * API Reference
 *
 * Discord's API is based around two core layers, a HTTPS/REST API for general operations, and persistent secure WebSocket based connection for sending and subscribing to real-time events. The most common use case of the Discord API will be providing a service, or access to a platform through the OAuth2 API.
 *
 * @see {@link https://discord.com/developers/docs/reference#api-reference | @link https://discord.com/developers/docs/reference#api-reference-base-url}
 */
export const API_BASE_URL = "https://discord.com/api";

/**
 * CDN Base Url
 *
 * The base URL for all images.
 *
 * @see {@link https://discord.com/developers/docs/reference#image-formatting-image-base-url}
 */
export const API_CDN_BASE_URL = "https://cdn.discordapp.com/";

/**
 * API Versioning
 *
 * @enum {IntegerInfer}
 * Discord exposes different versions of our API. You should specify which version to use by including it in the request path like https://discord.com/api/v{version_number}. Omitting the version number from the route will route requests to the current default version (marked below). You can find the change log for the newest API version here.
 * @see {@link https://discord.com/developers/docs/reference#api-versioning}
 * @example
 * https://discord.com/api/v10
 */
export enum ApiVersion {
	/**
	 * The current default version of the API.
	 */
	V10 = 10,
	/**
	 * The previous version of the API.
	 */
	V9 = 9,
	/**
	 * The version before the previous version of the API.
	 *
	 * @deprecated
	 */
	V8 = 8,
	/**
	 * The version before the previous version of the API.
	 *
	 * @deprecated
	 */
	V7 = 7,
	/**
	 * The version before the previous version of the API.
	 *
	 * @deprecated
	 */
	V6 = 6,
	/**
	 * The version before the previous version of the API.
	 *
	 * @deprecated
	 */
	V5 = 5,
	/**
	 * The version before the previous version of the API.
	 *
	 * @deprecated
	 */
	V4 = 4,
	/**
	 * The version before the previous version of the API.
	 *
	 * @deprecated
	 */
	V3 = 3,
}

/**
 * API Version Enum is a zod enum that represents the API version.
 */
export const ApiVersionEnum = z.nativeEnum(ApiVersion);

/**
 * Authentication
 *
 * Discord uses OAuth2 for providing authentication. OAuth2 is a protocol that lets external apps request authorization to private details in a user's Discord account without getting their password. This is preferred over traditional authentication for its security benefits.
 *
 * @see {@link https://discord.com/developers/docs/reference#authentication}
 */
export const AuthenticationType = z.union([z.literal("Bot"), z.literal("Bearer")]);

/**
 * Authentication Type Infer is the inferred type of the AuthenticationType zod union.
 */
export type AuthenticationTypeInfer = z.infer<typeof AuthenticationType>;

export const AuthenticationHeader = z.object({ Authorization: z.union([AuthenticationType, z.string()]) });

/**
 * Authentication Header Infer is the inferred type of the AuthenticationHeader zod object.
 */
export type AuthenticationHeaderInfer = z.infer<typeof AuthenticationHeader>;

/**
 * Discord Epoch
 *
 * Discord uses a special epoch for our snowflake generation. This means that the timestamp is stored in the first 42 bits of the snowflake. This gives us a maximum timestamp of 2^42 or 4,398,046,511,104 or around 69 years. This gives us until 2080 to make sure we have a new solution.
 */
export const DISCORD_EPOCH = 1_420_070_400_000n;
