import { z } from "zod";

/**
 * Base URL for the Discord API.
 *
 * @see {@link https://discord.com/developers/docs/reference#api-reference-base-url}
 */
export const API_BASE_URL = "https://discord.com/api";

/**
 * Base URL for the Discord CDN.
 *
 * @see {@link https://discord.com/developers/docs/reference#image-formatting-image-base-url}
 */
export const CDN_BASE_URL = "https://cdn.discordapp.com";

/**
 * Discord epoch timestamp used for calculating snowflakes.
 *
 * @example
 * const snowflake = BigInt(Date.now() - DISCORD_EPOCH) << 22n;
 */
export const DISCORD_EPOCH = 1_420_070_400_000n;

/**
 * Enum representing the various versions of the Discord API.
 *
 * @see {@link https://discord.com/developers/docs/reference#api-versioning-api-versions}
 */
export enum ApiVersions {
	/**
	 * Version 10 of the Discord API.
	 */
	V10 = 10,

	/**
	 * Version 9 of the Discord API.
	 */
	V9 = 9,

	/**
	 * @deprecated API v8 is deprecated and will be removed on 2022-08-01.
	 *
	 * Version 8 of the Discord API.
	 */
	V8 = 8,

	/**
	 * @deprecated API v8 is deprecated and will be removed on 2022-08-01.
	 *
	 * Version 7 of the Discord API.
	 */
	V7 = 7,

	/**
	 * @deprecated API v8 is deprecated and will be removed on 2022-08-01.
	 *
	 * Version 6 of the Discord API.
	 */
	V6 = 6,

	/**
	 * @deprecated API v8 is deprecated and will be removed on 2022-08-01.
	 *
	 * Version 5 of the Discord API.
	 */
	V5 = 5,

	/**
	 * @deprecated API v8 is deprecated and will be removed on 2022-08-01.
	 *
	 * Version 4 of the Discord API.
	 */
	V4 = 4,

	/**
	 * @deprecated API v8 is deprecated and will be removed on 2022-08-01.
	 *
	 * Version 3 of the Discord API.
	 */
	V3 = 3,
}

/**
 * Zod schema for validating the {@link ApiVersions} enum.
 */
export const ApiVersionsEnum = z.nativeEnum(ApiVersions);

/**
 * Enum representing the authentication types for the Discord API.
 *
 * @example
 * const authType = AuthenticationTypes.parse("Bot");
 */
export const AuthenticationTypes = z.enum(["Bot", "Bearer"]);
