import { z } from "zod";

/**
 * Header Format
 *
 * The Authorization header is a string that contains the credentials to authenticate a user agent with a server. The server can use the Authorization header to determine the type of authentication that is being used and the credentials that are being sent.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization}
 */
export const RateLimitHeaderEnum = z.enum(["X-RateLimit-Limit", "X-RateLimit-Remaining", "X-RateLimit-Reset", "X-RateLimit-Reset-After", "X-RateLimit-Bucket", "X-RateLimit-Global", "X-RateLimit-Scope", "Retry-After"]);

/**
 * Rate Limit Header Infer
 *
 * Is a zod infer that represents the {@link RateLimitHeaderEnum}.
 */
export type RateLimitHeaderInfer = z.infer<typeof RateLimitHeaderEnum>;
