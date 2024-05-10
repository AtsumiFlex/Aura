import { z } from "zod";

/**
 * Locales
 *
 * Locales are used to determine the language of the text in the Discord client.
 *
 * @see {@link https://discord.com/developers/docs/reference#locales}
 */
export enum Locales {
	bg = "Bulgarian",
	cs = "Czech",
	da = "Danish",
	de = "German",
	el = "Greek",
	"en-GB" = "English - UK",
	"en-US" = "English - US",
	"es-419" = "Spanish - Latin America",
	"es-ES" = "Spanish - EU",
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
	"pt-BR" = "Portuguese - Brazil",
	ro = "Romanian",
	ru = "Russian",
	"sv-SE" = "Swedish",
	th = "Thai",
	tr = "Turkish",
	uk = "Ukrainian",
	vi = "Vietnamese",
	"zh-CN" = "Chinese - China",
	"zh-TW" = "Chinese - Taiwan",
}

/**
 * Locales Enum
 *
 * Is a zod enum that represents the available {@link Locales}.
 */
export const LocalesEnum = z.nativeEnum(Locales);

/**
 * Locales Keys
 *
 * The zod keys of the {@link Locales} enum.
 */
export const LocalesKeys = z.enum(["bg", "cs", "da", "de", "el", "en-GB", "en-US", "es-419", "es-ES", "fi", "fr", "hi", "hr", "hu", "id", "it", "ja", "ko", "lt", "nl", "no", "pl", "pt-BR", "ro", "ru", "sv-SE", "th", "tr", "uk", "vi", "zh-CN", "zh-TW"]);
