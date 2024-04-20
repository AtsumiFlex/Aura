// https://discord.com/developers/docs/resources/sticker#sticker-resource
import type { Integer, Snowflake } from "./global";
import type { UserStructure } from "./user";

// https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-structure
export type StickerStructure = {
	asset: string;
	available?: boolean;
	description: string | null;
	format_type: StickerFormatType;
	guild_id?: Snowflake;
	id: Snowflake;
	name: string;
	pack_id?: Snowflake;
	sort_value?: Integer;
	tags?: string;
	type: StickerType;
	user?: UserStructure;
};

// https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-types
export enum StickerType {
	Standard = 1,
	Guild = 2,
}

// https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-format-types
export enum StickerFormatType {
	PNG = 1,
	APNG = 2,
	LOTTIE = 3,
	GIF = 4,
}

// https://discord.com/developers/docs/resources/sticker#sticker-item-object-sticker-item-structure
export type StickerItemStructure = {
	format_type: StickerFormatType;
	id: Snowflake;
	name: string;
};

// https://discord.com/developers/docs/resources/sticker#sticker-pack-object-sticker-pack-structure
export type StickerPackStructure = {
	banner_asset_id: Snowflake;
	cover_sticker_id?: Snowflake;
	description: string;
	id: Snowflake;
	name: string;
	sku_id: Snowflake;
	stickers: StickerStructure[];
};
