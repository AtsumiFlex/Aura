import { z } from "zod";

/**
 * @see {https://discord.com/developers/docs/reference#locales}
 */
export enum Locales {
	bg = "Bulgarian",
	cs = "Czech",
	da = "Danish",
	de = "German",
	el = "Greek",
	"en-GB" = "English, British",
	"en-US" = "English, American",
	"es-419" = "Spanish, Latin American",
	"es-ES" = "Spanish",
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
	"pt-BR" = "Portuguese",
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

export const LocalesEnum = z.nativeEnum(Locales);
