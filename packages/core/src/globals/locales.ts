import { z } from "zod";

/**
 * Enum representing the available locales for Discord.
 *
 * Each key is a locale code used by Discord, and the value is the corresponding language name.
 *
 * @see {@link https://discord.com/developers/docs/reference#locales} for the complete list of supported locales and their descriptions.
 * @example
 * ```typescript
 * const locale: Locales = Locales["en-US"];
 * console.log(locale); // Outputs: "English - US"
 * ```
 */
export enum Locales {
	bg = "Bulgarian",
	cs = "Czech",
	da = "Danish",
	de = "German",
	el = "Greek",
	"en-GB" = "English - UK",
	"en-US" = "English - US",
	"es-419" = "Spanish, Latin America",
	"es-ES" = "Spanish, Spain",
	fi = "Finnish",
	fr = "French",
	hi = "Hindi",
	hr = "Croatian",
	hu = "Hungarian",
	id = "Indonesian",
	it = "Italian",
	ja = "Japanese",
	ko = "Korean",
	lt = "Lithuanian",
	nl = "Dutch",
	no = "Norwegian",
	pl = "Polish",
	"pt-BR" = "Portuguese, Brazil",
	ro = "Romanian",
	ru = "Russian",
	"sv-SE" = "Swedish",
	th = "Thai",
	tr = "Turkish",
	uk = "Ukrainian",
	vi = "Vietnamese",
	"zh-CN" = "Chinese, Simplified",
	"zh-TW" = "Chinese, Traditional",
}

/**
 * Zod schema for validating values against the {@link Locales} enum.
 *
 * This schema can be used to ensure that a given value is one of the valid locales defined in the {@link Locales} enum.
 *
 * @example
 * ```typescript
 * const locale = "en-US";
 * const parsedLocale = LocalesEnum.parse(locale); // Validates successfully
 * console.log(parsedLocale); // Outputs: "en-US"
 * ```
 */
export const LocalesEnum = z.nativeEnum(Locales);
