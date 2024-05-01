import { z } from "zod";

export const BaseUrl = "https://discord.com/api";
export const BaseCdnUrl = "https://cdn.discordapp.com";

export enum ApiVersion {
	V10 = 10,
	V9 = 9,
	V8 = 8,
	V7 = 7,
	V6 = 6,
	V5 = 5,
	V4 = 4,
	V3 = 3,
}

export const ApiVersionEnum = z.nativeEnum(ApiVersion);

export const ApiArrayError = z.object({
	code: z.number(),
	errors: z.record(z.record(z.record(z.object({
		_errors: z.array(z.object({
			code: z.string(),
			message: z.string(),
		})),
	})))),
	message: z.string(),
});
export type ApiArrayErrorInfer = z.infer<typeof ApiArrayError>;

export const ApiObjectError = z.object({
	code: z.number(),
	errors: z.record(z.object({
		_errors: z.array(z.object({
			code: z.string(),
			message: z.string(),
		})),
	})),
	message: z.string(),
});
export type ApiObjectErrorInfer = z.infer<typeof ApiObjectError>;

export const ApiRequestError = z.object({
	code: z.number(),
	errors: z.object({
		_errors: z.array(z.object({
			code: z.string(),
			message: z.string(),
		})),
	}),
	message: z.string(),
});
export type ApiRequestErrorInfer = z.infer<typeof ApiRequestError>;

export const AuthenticationType = z.union([z.literal("Bearer"), z.literal("Bot")]);
export type AuthenticationTypeInfer = z.infer<typeof AuthenticationType>;

export const ApiAuthenticationHeader = z.object({
	Authorization: z.string(),
	"User-Agent": z.string(),
	"X-RateLimit-Bucket": z.string(),
	"X-RateLimit-Global": z.boolean(),
	"X-RateLimit-Limit": z.number(),
	"X-RateLimit-Remaining": z.number(),
	"X-RateLimit-Reset": z.number(),
	"X-RateLimit-Reset-After": z.number(),
	"X-RateLimit-Scope": z.union([z.literal("global"), z.literal("shared"), z.literal("user")]),
}).partial();
export type ApiAuthenticationHeaderInfer = z.infer<typeof ApiAuthenticationHeader>;

export const DiscordEpoch = 1_420_070_400_000n;
