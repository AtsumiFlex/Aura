import { z } from "zod";
import { Integer } from "./formats";

/**
 * Schema for validating Discord API request and response headers.
 *
 * This schema uses the `zod` library to define and validate the structure of headers
 * used in communication with the Discord API. Each header field is specified with its
 * expected type and possible values.
 *
 * @example
 * ```typescript
 * const headers = {
 *   Authorization: "Bot YOUR_BOT_TOKEN",
 *   "User-Agent": "YourApp (http://yourapp.com, v1.0)",
 *   "Content-Type": "application/json",
 *   "Retry-After": 120,
 *   "X-Audit-Log-Reason": "Update reason",
 *   "X-Signature-Ed25519": "signature",
 *   "X-Signature-Timestamp": 1625561234,
 *   "X-RateLimit-Limit": 10,
 *   "X-RateLimit-Remaining": 5,
 *   "X-RateLimit-Reset": 1625567890,
 *   "X-RateLimit-Reset-After": 120,
 *   "X-RateLimit-Bucket": "bucket-id",
 *   "X-RateLimit-Global": false,
 *   "X-RateLimit-Scope": "user"
 * };
 *
 * const parsedHeaders = DiscordHeaders.parse(headers);
 * console.log(parsedHeaders); // Outputs the validated headers object.
 * ```
 */
export const DiscordHeaders = z.object({
	/**
	 * The authorization token for Discord API requests.
	 * Typically, this will be in the format "Bot YOUR_BOT_TOKEN".
	 */
	Authorization: z.string(),

	/**
	 * The user agent string to identify the client application making the request.
	 * Example: "YourApp (http://yourapp.com, v1.0)"
	 */
	"User-Agent": z.string(),

	/**
	 * The content type of the request body.
	 * This can be one of several specific MIME types, including "application/json", "text/plain", etc.
	 */
	"Content-Type": z.union([z.literal("application/json"), z.literal("application/ld+json"), z.literal("application/msword"), z.literal("application/pdf"), z.literal("application/sql"), z.literal("application/vnd.api+json"), z.literal("application/vnd.microsoft.portable-executable"), z.literal("application/vnd.ms-excel"), z.literal("application/vnd.ms-powerpoint"), z.literal("application/vnd.oasis.opendocument.text"), z.literal("application/vnd.openxmlformats-officedocument.presentationml.presentation"), z.literal("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"), z.literal("application/vnd.openxmlformats-officedocument.wordprocessingml.document"), z.literal("application/x-www-form-urlencoded"), z.literal("application/xml"), z.literal("application/zip"), z.literal("application/zstd"), z.literal("audio/mpeg"), z.literal("audio/ogg"), z.literal("image/avif"), z.literal("image/jpeg"), z.literal("image/png"), z.literal("image/svg+xml"), z.literal("image/tiff"), z.literal("model/obj"), z.literal("multipart/form-data"), z.literal("text/plain"), z.literal("text/css"), z.literal("text/csv"), z.literal("text/html"), z.literal("text/javascript"), z.literal("text/xml")]),

	/**
	 * The time in seconds to wait before retrying a request.
	 * This is typically used in response to rate limiting.
	 */
	"Retry-After": Integer,

	/**
	 * The reason for the action that is logged in the audit logs.
	 */
	"X-Audit-Log-Reason": z.string(),

	/**
	 * The Ed25519 signature of the request.
	 */
	"X-Signature-Ed25519": z.string(),

	/**
	 * The timestamp (in seconds) when the signature was generated.
	 */
	"X-Signature-Timestamp": Integer,

	/**
	 * The maximum number of requests that can be made in a given time period.
	 */
	"X-RateLimit-Limit": Integer,

	/**
	 * The number of requests remaining in the current rate limit window.
	 */
	"X-RateLimit-Remaining": Integer,

	/**
	 * The Unix timestamp (in seconds) when the rate limit will reset.
	 */
	"X-RateLimit-Reset": Integer,

	/**
	 * The number of seconds until the rate limit resets.
	 */
	"X-RateLimit-Reset-After": Integer,

	/**
	 * A unique identifier for the rate limit bucket.
	 */
	"X-RateLimit-Bucket": z.string(),

	/**
	 * Indicates whether the rate limit is global across all routes.
	 */
	"X-RateLimit-Global": z.boolean(),

	/**
	 * The scope of the rate limit, which can be "user", "global", or "shared".
	 */
	"X-RateLimit-Scope": z.union([z.literal("user"), z.literal("global"), z.literal("shared")]),
});

/**
 * Type representing the structure of Discord API headers.
 *
 * This type is inferred from the {@link DiscordHeaders} schema and can be used for type-checking
 * and ensuring that objects conform to the expected header structure.
 *
 * @example
 * ```typescript
 * const headers: DiscordHeadersInfer = {
 *   Authorization: "Bot YOUR_BOT_TOKEN",
 *   "User-Agent": "YourApp (http://yourapp.com, v1.0)",
 *   "Content-Type": "application/json",
 *   "Retry-After": 120,
 *   "X-Audit-Log-Reason": "Update reason",
 *   "X-Signature-Ed25519": "signature",
 *   "X-Signature-Timestamp": 1625561234,
 *   "X-RateLimit-Limit": 10,
 *   "X-RateLimit-Remaining": 5,
 *   "X-RateLimit-Reset": 1625567890,
 *   "X-RateLimit-Reset-After": 120,
 *   "X-RateLimit-Bucket": "bucket-id",
 *   "X-RateLimit-Global": false,
 *   "X-RateLimit-Scope": "user"
 * };
 * ```
 */
export type DiscordHeadersInfer = z.infer<typeof DiscordHeaders>;
