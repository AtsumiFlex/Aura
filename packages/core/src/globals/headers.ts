import { z } from "zod";
import { Integer } from "./formats";

/**
 * Schema for validating Discord headers using Zod.
 *
 * @see https://discord.com/developers/docs/intro
 * @example
 * const headers = {
 *   Authorization: "Bot YOUR_TOKEN",
 *   "User-Agent": "DiscordBot (https://yourdomain.com, v1.0)",
 *   "Content-Type": "application/json",
 *   "Retry-After": 120,
 *   "X-Audit-Log-Reason": "Updating user role",
 *   "X-Signature-Ed25519": 123456789,
 *   "X-Signature-Timestamp": 1615892877,
 *   "X-RateLimit-Limit": 100,
 *   "X-RateLimit-Remaining": 99,
 *   "X-RateLimit-Reset": 1615892927,
 *   "X-RateLimit-Reset-After": 60,
 *   "X-RateLimit-Bucket": "abcd1234",
 *   "X-RateLimit-Global": "false",
 *   "X-RateLimit-Scope": "channel"
 * };
 * const parsedHeaders = DiscordHeaders.parse(headers);
 */
export const DiscordHeaders = z.object({
	/**
	 * Authorization token for API requests.
	 *
	 * @example
	 * "Authorization": "Bot YOUR_TOKEN"
	 */
	Authorization: z.string(),

	/**
	 * User agent making the request.
	 *
	 * @example
	 * "User-Agent": "DiscordBot (https://yourdomain.com, v1.0)"
	 */
	"User-Agent": z.string(),

	/**
	 * Content type of the request.
	 *
	 * @example
	 * "Content-Type": "application/json"
	 */
	"Content-Type": z.union([z.literal("application/json"), z.literal("application/ld+json"), z.literal("application/msword"), z.literal("application/pdf"), z.literal("application/sql"), z.literal("application/vnd.api+json"), z.literal("application/vnd.microsoft.portable-executable"), z.literal("application/vnd.ms-excel"), z.literal("application/vnd.ms-powerpoint"), z.literal("application/vnd.oasis.opendocument.text"), z.literal("application/vnd.openxmlformats-officedocument.presentationml.presentation"), z.literal("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"), z.literal("application/vnd.openxmlformats-officedocument.wordprocessingml.document"), z.literal("application/x-www-form-urlencoded"), z.literal("application/xml"), z.literal("application/zip"), z.literal("application/zstd"), z.literal("audio/mpeg"), z.literal("audio/ogg"), z.literal("image/avif"), z.literal("image/jpeg"), z.literal("image/png"), z.literal("image/svg+xml"), z.literal("image/tiff"), z.literal("model/obj"), z.literal("multipart/form-data"), z.literal("text/plain"), z.literal("text/css"), z.literal("text/csv"), z.literal("text/html"), z.literal("text/javascript"), z.literal("text/xml")]),

	/**
	 * Time to wait before retrying the request after a rate limit is exceeded.
	 *
	 * @example
	 * "Retry-After": 120
	 */
	"Retry-After": Integer,

	/**
	 * Reason included in audit logs.
	 *
	 * @example
	 * "X-Audit-Log-Reason": "Updating user role"
	 */
	"X-Audit-Log-Reason": z.string(),

	/**
	 * ED25519 signature of the request.
	 *
	 * @example
	 * "X-Signature-Ed25519": 123456789
	 * @see {@link https://discord.com/developers/docs/topics/gateway#connecting-to-the-gateway}
	 */
	"X-Signature-Ed25519": Integer,

	/**
	 * Timestamp of the signature.
	 *
	 * @example
	 * "X-Signature-Timestamp": 1615892877
	 */
	"X-Signature-Timestamp": Integer,

	/**
	 * Rate limit for the requests.
	 *
	 * @example
	 * "X-RateLimit-Limit": 100
	 */
	"X-RateLimit-Limit": Integer,

	/**
	 * Number of requests remaining before reaching the rate limit.
	 *
	 * @example
	 * "X-RateLimit-Remaining": 99
	 */
	"X-RateLimit-Remaining": Integer,

	/**
	 * Time when the rate limit will reset.
	 *
	 * @example
	 * "X-RateLimit-Reset": 1615892927
	 */
	"X-RateLimit-Reset": Integer,

	/**
	 * Duration before the rate limit resets.
	 *
	 * @example
	 * "X-RateLimit-Reset-After": 60
	 */
	"X-RateLimit-Reset-After": Integer,

	/**
	 * Rate limit bucket identifier.
	 *
	 * @example
	 * "X-RateLimit-Bucket": "abcd1234"
	 */
	"X-RateLimit-Bucket": z.string(),

	/**
	 * Indicator of global rate limit.
	 *
	 * @example
	 * "X-RateLimit-Global": "false"
	 */
	"X-RateLimit-Global": z.string(),

	/**
	 * Scope of the rate limit.
	 *
	 * @example
	 * "X-RateLimit-Scope": "channel"
	 */
	"X-RateLimit-Scope": z.string(),
});

/**
 * Inferred type from the {@link DiscordHeaders} validation schema.
 */
export type DiscordHeadersInfer = z.infer<typeof DiscordHeaders>;
