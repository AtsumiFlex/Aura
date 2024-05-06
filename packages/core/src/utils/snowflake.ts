import type { SnowflakeInfer } from "../globals/formatters";

/**
 * Snowflake To Date
 *
 * Converts a Discord Snowflake to a Date object.
 *
 * @see {@link https://discord.com/developers/docs/reference#snowflake-ids-in-pagination-generating-a-snowflake-id-from-a-timestamp-example}
 */
export function snowflakeToDate(snowflake: SnowflakeInfer): Date {
	return new Date(Number((BigInt(snowflake) >> 22n) + 1_420_070_400_000n));
}

/**
 * Date To Snowflake
 *
 * Converts a Date object to a Discord Snowflake.
 *
 * @see {@link https://discord.com/developers/docs/reference#snowflake-ids-in-pagination-generating-a-snowflake-id-from-a-timestamp-example}
 */
export function dateToSnowflake(date: Date): SnowflakeInfer {
	return (BigInt(date.getTime()) - 1_420_070_400_000n << 22n).toString();
}
