import { z } from "zod";

/**
 * Headers
 *
 * Headers are used to send and receive data between the client and server.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Headers
 */
export const DiscordHeaders = z.object({
	/**
	 * Authorization
	 *
	 * The Authorization header is used to authenticate a request with the server, allowing the server to know which user is making the request.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization
	 * @example Authorization: Bot $token
	 */
	Authorization: z.string().optional(),
	/**
	 * Content-Type
	 *
	 * The Content-Type header is used to specify the media type of the resource.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type
	 * @example Content-Type: application/json
	 */
	"Content-Type": z.union([z.literal("application/json"), z.literal("application/x-www-form-urlencoded"), z.literal("multipart/form-data")]).optional(),
	/**
	 * User-Agent
	 *
	 * The User-Agent header is used to identify the client making the request.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent
	 * @example User-Agent: DiscordBot ($url, $versionNumber)
	 */
	"User-Agent": z.string().optional(),
	/**
	 * X-RateLimit-Limit
	 *
	 * The maximum number of requests that the consumer is permitted to make to the server in a given time period.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-RateLimit-Limit
	 */
	"X-RateLimit-Limit": z.string().optional(),
	/**
	 * X-RateLimit-Remaining
	 *
	 * The number of remaining requests that can be made
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-RateLimit-Remaining
	 */
	"X-RateLimit-Remaining": z.string().optional(),
	/**
	 * X-RateLimit-Reset
	 *
	 * Epoch time (seconds since 00:00:00 UTC on January 1, 1970) at which the rate limit resets
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-RateLimit-Reset
	 */
	"X-RateLimit-Reset": z.string().optional(),
	/**
	 * X-RateLimit-Reset-After
	 *
	 * Total time (in seconds) of when the current rate limit bucket will reset. Can have decimals to match previous millisecond ratelimit precision
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-RateLimit-Reset-After
	 */
	"X-RateLimit-Reset-After": z.string().optional(),
	/**
	 * X-RateLimit-Bucket
	 *
	 * A unique string denoting the rate limit being encountered (non-inclusive of top-level resources in the path)
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-RateLimit-Bucket
	 */
	"X-RateLimit-Bucket": z.string().optional(),
	/**
	 * X-RateLimit-Global
	 *
	 * Returned only on HTTP 429 responses if the rate limit encountered is the global rate limit (not per-route)
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-RateLimit-Global
	 */
	"X-RateLimit-Global": z.string().optional(),
	/**
	 * X-RateLimit-Scope
	 *
	 * Returned only on HTTP 429 responses. Value can be user (per bot or user limit), bot (per bot limit), or global (global limit) to help identify the scope of the rate limit.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-RateLimit-Scope
	 */
	"X-RateLimit-Scope": z.string().optional(),
	/**
	 * X-Signature-Ed25519
	 *
	 * The Ed25519 signature of the request body.
	 *
	 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#security-and-authorization
	 */
	"X-Signature-Ed25519": z.string().optional(),
	/**
	 * X-Signature-Timestamp
	 *
	 * The timestamp of the request.
	 *
	 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#security-and-authorization
	 */
	"X-Signature-Timestamp": z.string().optional(),
	/**
	 * X-Audit-Log-Reason
	 *
	 * The reason for the audit log action.
	 *
	 * @see https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-events
	 */
	"X-Audit-Log-Reason": z.string().optional(),
});

/**
 * Discord Headers Infer
 *
 * Is used to infer the type of the {@link DiscordHeaders} object.
 */
export type DiscordHeadersInfer = z.infer<typeof DiscordHeaders>;
