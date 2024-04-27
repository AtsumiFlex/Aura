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

/**
 * @see {@link https://discord.com/developers/docs/reference#snowflakes}
 */
export type Snowflake = string;
export type Integer = number;
export type Double = number;
export type Float = number;
export type ISO8601Timestamp = string;
export type If<T, Y, N> = T extends true ? Y : N;
export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = {
	[K in Keys]-?: Partial<Pick<T, Exclude<Keys, K>>> & Required<Pick<T, K>>;
}[Keys];
export type RequireOnlyOne<T, Keys extends keyof T = keyof T> = {
	[K in Keys]-?: Partial<Record<Exclude<Keys, K>, undefined>> & Required<Pick<T, K>>;
}[Keys];
