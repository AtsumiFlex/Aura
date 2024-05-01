import { z } from "zod";

export const Snowflake = z.string().refine((value) => /^\d{17,19}$/.test(value), { message: "Value is not a valid Snowflake" });
export type SnowflakeInfer = z.infer<typeof Snowflake>;
export const ISO8601 = z.string().refine((value) => /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?<temp1>\.\d{3})?Z$/.test(value), { message: "Value is not a valid ISO8601 string" });
export type ISO8601Infer = z.infer<typeof ISO8601>;
export const Integer = z.number().int();
export type IntegerInfer = z.infer<typeof Integer>;
export const Float = z.number();
export type FloatInfer = z.infer<typeof Float>;
export const Double = z.number();
export type DoubleInfer = z.infer<typeof Double>;
export const Mixed = z.any();
export type MixedInfer = z.infer<typeof Mixed>;
