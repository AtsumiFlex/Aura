import { z } from "zod";
import { Float } from "../globals";
import { JSONErrorCodesEnum } from "./opcodes";

export const RateLimitResponse = z.object({
	message: z.string(),
	retry_after: Float,
	global: z.boolean(),
	code: JSONErrorCodesEnum.optional(),
});
export type RateLimitResponseInfer = z.infer<typeof RateLimitResponse>;
