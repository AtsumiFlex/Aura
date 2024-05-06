/**
 * API Reference
 * Discord's API is based around two core layers, a HTTPS/REST API for general operations, and persistent secure WebSocket based connection for sending and subscribing to real-time events. The most common use case of the Discord API will be providing a service, or access to a platform through the OAuth2 API.
 *
 * @see {@link https://discord.com/developers/docs/reference#api-reference}
 */

import { z } from "zod";

/**
 * Base URL
 *
 * The base URL for all API requests is `https://discord.com/api`. All requests should be made with the `https` scheme.
 *
 * @see {@link https://discord.com/developers/docs/reference#api-reference-base-url}
 */
export const BASE_URL = "https://discord.com/api";

/**
 * CDN URL
 *
 * The base URL for all CDN requests is `https://cdn.discordapp.com`. All requests should be made with the `https` scheme.
 *
 * @see {@link https://discord.com/developers/docs/reference#image-formatting-image-base-url}
 */
export const CDN_URL = "https://cdn.discordapp.com";

/**
 * API Versioning
 *
 * Discord exposes different versions of our API. You should specify which version to use by including it in the request path like https://discord.com/api/v{version_number}. Omitting the version number from the route will route requests to the current default version (marked below). You can find the change log for the newest API version here.
 *
 * @see {@link https://discord.com/developers/docs/reference#api-versioning | https://discord.com/developers/docs/reference#api-versioning-api-versions}
 */
export enum ApiVersions {
	/**
	 * Available API Versions
	 */
	V10 = 10,
	/**
	 * Available API Versions
	 */
	V9 = 9,
	/**
	 * Deprecated API Versions
	 *
	 * @deprecated
	 */
	V8 = 8,
	/**
	 * Deprecated API Versions
	 *
	 * @deprecated
	 */
	V7 = 7,
	/**
	 * Deprecated API Versions & Default API Version
	 *
	 * @deprecated
	 */
	V6 = 6,
	/**
	 * Discontinued API Versions
	 *
	 * @deprecated
	 */
	V5 = 5,
	/**
	 * Discontinued API Versions
	 *
	 * @deprecated
	 */
	V4 = 4,
	/**
	 * Discontinued API Versions
	 *
	 * @deprecated
	 */
	V3 = 3,
}

/**
 * Api Versions Enum
 *
 * Is a zod enum that represents the available {@link ApiVersions}.
 */
export const ApiVersionsEnum = z.nativeEnum(ApiVersions);

/**
 * Authorization Types
 *
 * The Discord API uses OAuth2 for authentication. OAuth2 is a protocol that lets external apps request authorization to private details in a user's Discord account without getting their password. This is preferred over traditional authentication tokens as OAuth2 tokens can be limited in scope and revoked by the user.
 *
 * @see {@link https://discord.com/developers/docs/reference#api-reference-authorization-types}
 */
export const AuthorizationTypesEnum = z.enum(["Bearer", "Bot"]);

/**
 * Discord Epoch
 *
 * The Discord epoch is 1420070400000.
 *
 * @see {@link https://discord.com/developers/docs/reference#timestamp}
 */
export const DISCORD_EPOCH = 1_420_070_400_000;
