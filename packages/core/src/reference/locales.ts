/**
 * @description This module defines the supported languages in the application.
 * @see {@link https://discord.com/developers/docs/reference#locales}
 */

/**
 * Enum for supported languages.
 * Each key represents the language code and the value is the full name of the language in English.
 *
 * @example
 * // To get the full name of the language for the code 'en'
 * const languageName = Locales.en; // 'English'
 */
export enum Locales {
	bg = "Bulgarian",
	cs = "Czech",
	da = "Danish",
	de = "German",
	el = "Greek",
	en = "English",
	es = "Spanish",
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
	pt = "Portuguese",
	ro = "Romanian",
	ru = "Russian",
	sv = "Swedish",
	th = "Thai",
	tr = "Turkish",
	uk = "Ukrainian",
	vi = "Vietnamese",
	zh = "Chinese",
}

/**
 * Type for language code.
 * It is a key of the Locales enum.
 *
 * @example
 * // To define a variable with a language code
 * let languageCode: LocaleString = 'en';
 */
export type LocaleString = keyof typeof Locales;

/**
 * Type for full name of the language.
 * It is a value of the Locales enum.
 *
 * @example
 * // To define a variable with a language name
 * let languageName: LocaleStringName = 'English';
 */
export type LocaleStringName = typeof Locales[LocaleString];
