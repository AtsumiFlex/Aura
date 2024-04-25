/**
 * @see {@link https://discord.com/developers/docs/reference#api-versioning-api-versions}
 */
export enum APIVersions {
	V10 = "10",
	V3 = "3",
	V4 = "4",
	V5 = "5",
	V6 = "6",
	V7 = "7",
	V8 = "8",
	V9 = "9",
}

/**
 * @see {@link https://discord.com/developers/docs/reference#authentication}
 */
export type AuthenticationType = "Bearer" | "Bot";

export type SetString<T extends bigint | boolean | number | string | null | undefined> = `${T}`;
export type Snowflake = `${bigint}`;
export type Integer = number;
