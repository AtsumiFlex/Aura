/**
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-resource}
 */

import type Buffer from "node:buffer";
import type { Snowflake } from "../globals";
import type { UserStructure } from "./user";

/**
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-structure}
 */
export type StickerStructure = {
	asset?: string;
	available?: boolean;
	description?: string;
	format_type: StickerFormatTypes;
	guild_id?: Snowflake;
	id: Snowflake;
	name: string;
	pack_id?: Snowflake;
	sort_value?: number;
	tags: string;
	type: StickerTypes;
	user?: UserStructure;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-types}
 */
export enum StickerTypes {
	Standard = 1,
	Guild = 2,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-format-types}
 */
export enum StickerFormatTypes {
	PNG = 1,
	APNG = 2,
	Lottie = 3,
	GIF = 4,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-item-object-sticker-item-structure}
 */
export type StickerItemStructure = {
	format_type: StickerFormatTypes;
	id: Snowflake;
	name: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-pack-object-sticker-pack-structure}
 */
export type StickerPackStructure = {
	banner_asset_id?: Snowflake;
	cover_sticker_id?: Snowflake;
	description: string;
	id: Snowflake;
	name: string;
	sku_id: Snowflake;
	stickers: StickerStructure[];
};

/**
 * @see {@link https://discord.com/developers/docs/resources/sticker#list-sticker-packs-response-structure}
 */
export type ResponseListStickerPacks = {
	sticker_packs: StickerPackStructure[];
};

/**
 * @see {@link https://discord.com/developers/docs/resources/sticker#create-guild-sticker-form-params}
 */
export type FormCreateGuildSticker = {
	description: string;
	file: Buffer;
	name: string;
	tags: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/sticker#modify-guild-sticker-json-params}
 */
export type JSONModifyGuildSticker = {
	description: string | null;
	name: string;
	tags: string;
};
