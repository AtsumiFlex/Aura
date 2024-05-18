import { z } from "zod";

/**
 * The base URL for the Discord API.
 *
 * @see {@link https://discord.com/developers/docs/reference#api-reference-base-url}
 */
export const API_BASE_URL = "https://discord.com/api";

/**
 * The epoch time used by Discord for generating snowflake IDs.
 *
 * @remarks
 * Discord uses a custom epoch (starting point) to generate unique IDs called snowflakes. This epoch is set to the first second of the year 2015.
 * @example
 * ```typescript
 * console.log(DISCORD_EPOCH); // Outputs: 1420070400000n
 * ```
 */
export const DISCORD_EPOCH = 1_420_070_400_000n;

/**
 * Enum representing the different versions of the Discord API.
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
	 * Version 8 of the Discord API.
	 *
	 * @deprecated API v8 is deprecated and will be removed on 2022-08-01
	 */
	V8 = 8,
	/**
	 * Version 7 of the Discord API.
	 *
	 * @deprecated API v7 is deprecated and will be removed on 2022-08-01
	 */
	V7 = 7,
	/**
	 * Version 6 of the Discord API.
	 *
	 * @deprecated API v6 is deprecated and will be removed on 2022-08-01
	 * @default
	 */
	V6 = 6,
	/**
	 * Version 5 of the Discord API.
	 *
	 * @deprecated API v5 is deprecated and will be removed on 2022-08-01
	 */
	V5 = 5,
	/**
	 * Version 4 of the Discord API.
	 *
	 * @deprecated API v4 is deprecated and will be removed on 2022-08-01
	 */
	V4 = 4,
	/**
	 * Version 3 of the Discord API.
	 *
	 * @deprecated API v3 is deprecated and will be removed on 2022-08-01
	 */
	V3 = 3,
}

/**
 * Zod schema for validating API version enums.
 *
 * @example
 * ```typescript
 * ApiVersionsEnum.parse(ApiVersions.V10); // Valid
 * ApiVersionsEnum.parse(11); // Throws an error
 * ```
 */
export const ApiVersionsEnum = z.nativeEnum(ApiVersions);

/**
 * Enum representing the different authentication types for the Discord API.
 *
 * @see {@link https://discord.com/developers/docs/reference#authentication}
 * @example
 * ```typescript
 * const authType = AuthenticationType.parse("Bot");
 * console.log(authType); // Outputs: "Bot"
 * ```
 */
export const AuthenticationType = z.enum(["Bot", "Bearer"]);
