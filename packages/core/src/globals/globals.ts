/**
 * The zod library is imported to validate and parse data.
 */
import { z } from "zod";

/**
 * Snowflake is a zod schema that validates if a string is a valid snowflake.
 * A snowflake is a unique ID used by Discord, which is a string of 17 to 19 digits.
 * If the string does not match the snowflake pattern, it will return a validation error with the message "Value is not a valid snowflake."
 */
export const Snowflake = z.string().refine((value) => /^\d{17,19}$/.test(value), { message: "Value is not a valid snowflake." });

/**
 * SnowflakeInfer is a type alias for the inferred type of the Snowflake schema.
 */
export type SnowflakeInfer = z.infer<typeof Snowflake>;

/**
 * Integer is a zod schema that validates if a number is an integer.
 */
export const Integer = z.number().int();

/**
 * IntegerInfer is a type alias for the inferred type of the Integer schema.
 */
export type IntegerInfer = z.infer<typeof Integer>;
