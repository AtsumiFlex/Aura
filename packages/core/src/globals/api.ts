import { z } from "zod";

/**
 * @see {https://discord.com/developers/docs/reference#api-reference-base-url}
 */
export const API_BASE_URL = "https://discord.com/api";

/**
 * @see {https://discord.com/developers/docs/reference#image-formatting-image-base-url}
 */
export const CDN_URL = "https://cdn.discordapp.com";

export const DISCORD_EPOCH = 1_420_070_400_000n;

/**
 * @see {https://discord.com/developers/docs/reference#api-versioning-api-versions}
 */
export enum ApiVersions {
	/**
	 * @deprecated
	 */
	V3 = 3,
	/**
	 * @deprecated
	 */
	V4 = 4,
	/**
	 * @deprecated
	 */
	V5 = 5,
	/**
	 * @deprecated
	 * @default
	 */
	V6 = 6,
	/**
	 * @deprecated
	 */
	V7 = 7,
	/**
	 * @deprecated
	 */
	V8 = 8,
	V9 = 9,
	V10 = 10,
}

export const ApiVersionsEnum = z.nativeEnum(ApiVersions);

/**
 * @see {https://discord.com/developers/docs/reference#authentication}
 */
export enum AuthenticationTypes {
	Bearer = "Bearer",
	Bot = "Bot",
}

export const AuthenticationTypesEnum = z.nativeEnum(AuthenticationTypes);
