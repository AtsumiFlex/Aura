/**
 * @see {@link https://discord.com/developers/docs/reference#api-versioning-api-versions}
 */
export enum ApiVersion {
	V10 = 10,
	V9 = 9,
	V8 = 8,
	V7 = 7,
	V6 = 6,
	V5 = 5,
	V4 = 4,
	V3 = 3,
}

/**
 * @see {@link https://discord.com/developers/docs/reference#authentication}
 */
export type AuthenticationType = "Bearer" | "Bot";
