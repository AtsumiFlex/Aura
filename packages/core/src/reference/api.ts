/**
 * @description Discord's API is based around two core layers, a HTTPS/REST API for general operations, and persistent secure WebSocket based connection for sending and subscribing to real-time events. The most common use case of the Discord API will be providing a service, or access to a platform through the OAuth2 API.
 * @see {@link https://discord.com/developers/docs/reference#api-reference | Discord API Reference}
 */

// Importing Integer type from extra module
import type { Integer } from "./extra";

/**
 * Base URL for Discord's API
 *
 * @see {@link https://discord.com/developers/docs/reference#api-reference-base-url}
 */
export const BaseUrlApi = "https://discord.com/api";

/**
 * Base URL for Discord's CDN
 *
 * @see {@link https://discord.com/developers/docs/reference#image-formatting-image-base-url}
 */
export const BaseUrlCdn = "https://cdn.discordapp.com";

/**
 * Enum for Discord's API versions
 *
 * @see {@link https://discord.com/developers/docs/reference#api-versioning-api-versions}
 */
export enum ApiVersion {
	V3 = 3,
	V4 = 4,
	V5 = 5,
	V6 = 6,
	V7 = 7,
	V8 = 8,
	V9 = 9,
	V10 = 10,
}

/**
 * Type for Discord's API array error
 *
 * @see {@link https://discord.com/developers/docs/reference#error-messages-array-error}
 */
export type ApiArrayError = {
	code: Integer;
	errors: {
		[key: string]: {
			[key: string]: {
				[key: string]: {
					_errors: { code: string; message: string; }[];
				};
			};
		};
	};
	message: string;
};

/**
 * Type for Discord's API object error
 *
 * @see {@link https://discord.com/developers/docs/reference#error-messages-object-error}
 */
export type ApiObjectError = {
	code: Integer;
	errors: {
		[key: string]: {
			_errors: { code: string; message: string; }[];
		};
	};
	message: string;
};

/**
 * Type for Discord's API request error
 *
 * @see {@link https://discord.com/developers/docs/reference#error-messages-request-error}
 */
export type ApiRequestError = {
	code: Integer;
	errors: {
		_errors: { code: string; message: string; }[];
	};
	message: string;
};

/**
 * Type for Discord's API authentication types
 *
 * @see {@link https://discord.com/developers/docs/reference#authentication}
 */
export type ApiAuthenticationType = "Bearer" | "Bot";

/**
 * Type for Discord's API authentication header
 */
export type ApiAuthenticationHeader = {
	Authorization: string;
	"User-Agent"?: string;
	"X-RateLimit-Bucket"?: string;
	"X-RateLimit-Global"?: boolean;
	"X-RateLimit-Limit"?: number;
	"X-RateLimit-Remaining"?: number;
	"X-RateLimit-Reset"?: number;
	"X-RateLimit-Reset-After"?: number;
	"X-RateLimit-Scope"?: "global" | "shared" | "user";
};

/**
 * Type for Discord's Snowflake ID
 *
 * @see {@link https://discord.com/developers/docs/reference#snowflakes}
 */
export type Snowflake = string;

/**
 * Constant for Discord's Epoch time
 */
export const DiscordEpoch = 1_420_070_400_000;
