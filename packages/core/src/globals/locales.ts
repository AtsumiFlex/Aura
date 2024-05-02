import { z } from "zod";

/**
 * Locales
 *
 * Discord supports a variety of locales that can be used to format timestamps in messages.
 *
 * @see {@link https://discord.com/developers/docs/reference#locales}
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
 * Locales Enum is a zod enum that represents the locales.
 */
export const LocalesEnum = z.nativeEnum(Locales);
