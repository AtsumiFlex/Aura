/**
 * @see {@link https://discord.com/developers/docs/topics/rate-limits#rate-limits}
 */

import type { JsonErrorCodes } from "@aurajs/opcodes";
import type { Float } from "../globals";

/**
 * @see {@link https://discord.com/developers/docs/topics/rate-limits#header-format-rate-limit-header-examples}
 */
export type RateLimitHeaders = {
	"X-RateLimit-Bucket": string;
	"X-RateLimit-Global"?: boolean;
	"X-RateLimit-Limit": number;
	"X-RateLimit-Remaining": number;
	"X-RateLimit-Reset": number;
	"X-RateLimit-Reset-After": number;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rate-limits#exceeding-a-rate-limit-rate-limit-response-structure}
 */
export type RateLimitResponse = {
	code?: JsonErrorCodes;
	global: boolean;
	message: string;
	retry_after: Float;
};
