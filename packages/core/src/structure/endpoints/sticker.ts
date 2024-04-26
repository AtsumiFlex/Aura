import type { Snowflake } from "../../base/base";

/**
 * @see {@link https://discord.com/developers/docs/resources/sticker#get-sticker}
 */
export function GetSticker(stickerId: Snowflake) {
	return {
		method: "GET",
		path: `/stickers/${stickerId}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/sticker#list-sticker-packs}
 */
export function ListStickerPacks() {
	return {
		method: "GET",
		path: "/sticker-packs",
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/sticker#list-guild-stickers}
 */
export function ListGuildStickers(guildId: Snowflake) {
	return {
		method: "GET",
		path: `/guilds/${guildId}/stickers`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/sticker#get-guild-sticker}
 */
export function GetGuildSticker(guildId: Snowflake, stickerId: Snowflake) {
	return {
		method: "GET",
		path: `/guilds/${guildId}/stickers/${stickerId}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/sticker#create-guild-sticker-form-params}
 */
export type FormCreateGuildSticker = {
	description: string;
	file: string;
	name: string;
	tags: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/sticker#create-guild-sticker}
 */
export function CreateGuildSticker(guildId: Snowflake, form: FormCreateGuildSticker) {
	return {
		method: "POST",
		path: `/guilds/${guildId}/stickers`,
		body: form,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/sticker#modify-guild-sticker-json-params}
 */
export type JSONModifyGuildSticker = {
	description: string | null;
	name: string;
	tags: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/sticker#modify-guild-sticker}
 */
export function ModifyGuildSticker(guildId: Snowflake, stickerId: Snowflake, json: JSONModifyGuildSticker) {
	return {
		method: "PATCH",
		path: `/guilds/${guildId}/stickers/${stickerId}`,
		body: json,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/sticker#delete-guild-sticker}
 */
export function DeleteGuildSticker(guildId: Snowflake, stickerId: Snowflake) {
	return {
		method: "DELETE",
		path: `/guilds/${guildId}/stickers/${stickerId}`,
	};
}
