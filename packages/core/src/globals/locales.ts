import { z } from "zod";

/**
 * Enum representing the various locales supported by Discord.
 *
 * @see {@link https://discord.com/developers/docs/reference#locales}
 */
export enum Locales {
	/**
	 * Bulgarian
	 */
	bg = "Bulgarian",

	/**
	 * Czech
	 */
	cs = "Czech",

	/**
	 * Danish
	 */
	da = "Danish",

	/**
	 * German
	 */
	de = "German",

	/**
	 * Greek
	 */
	el = "Greek",

	/**
	 * UK English
	 */
	"en-GB" = "UK-English",

	/**
	 * US English
	 */
	"en-US" = "US-English",

	/**
	 * Latin American Spanish
	 */
	"es-419" = "LATAM-Español",

	/**
	 * Spanish
	 */
	"es-ES" = "Spanish",

	/**
	 * Finnish
	 */
	fi = "Finnish",

	/**
	 * French
	 */
	fr = "French",

	/**
	 * Hindi
	 */
	hi = "Hindi",

	/**
	 * Croatian
	 */
	hr = "Croatian",

	/**
	 * Hungarian
	 */
	hu = "Hungarian",

	/**
	 * Indonesian
	 */
	id = "Indonesian",

	/**
	 * Italian
	 */
	it = "Italian",

	/**
	 * Japanese
	 */
	ja = "Japanese",

	/**
	 * Korean
	 */
	ko = "Korean",

	/**
	 * Lithuanian
	 */
	lt = "Lithuanian",

	/**
	 * Dutch
	 */
	nl = "Dutch",

	/**
	 * Norwegian
	 */
	no = "Norwegian",

	/**
	 * Polish
	 */
	pl = "Polish",

	/**
	 * Brazilian Portuguese
	 */
	"pt-BR" = "Portuguese",

	/**
	 * Romanian
	 */
	ro = "Romanian",

	/**
	 * Russian
	 */
	ru = "Russian",

	/**
	 * Swedish
	 */
	"sv-SE" = "Swedish",

	/**
	 * Thai
	 */
	th = "Thai",

	/**
	 * Turkish
	 */
	tr = "Turkish",

	/**
	 * Ukrainian
	 */
	uk = "Ukrainian",

	/**
	 * Vietnamese
	 */
	vi = "Vietnamese",

	/**
	 * Chinese (Simplified)
	 */
	"zh-CN" = "Chinese",

	/**
	 * Chinese (Traditional, Taiwan)
	 */
	"zh-TW" = "Chinese-Taiwan",
}

/**
 * Zod schema for validating the {@link Locales} enum.
 */
export const LocalesEnum = z.nativeEnum(Locales);
