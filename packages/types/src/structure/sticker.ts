import { z } from "zod";
import { Integer, Snowflake } from "../globals";
import { UserStructure } from "./user";

export enum StickerFormatTypes {
	PNG = 1,
	APNG = 2,
	LOTTIE = 3,
	GIF = 4,
}

export const StickerFormatTypesEnum = z.nativeEnum(StickerFormatTypes);

export enum StickerTypes {
	Standard = 1,
	Guild = 2,
}

export const StickerTypesEnum = z.nativeEnum(StickerTypes);

export const StickerStructure = z.object({
	id: Snowflake,
	pack_id: Snowflake.optional(),
	name: z.string(),
	description: z.string().nullable(),
	tags: z.string(),
	asset: z.string().optional(),
	type: StickerTypesEnum,
	format_type: StickerFormatTypesEnum,
	available: z.boolean().optional(),
	guild_id: Snowflake.optional(),
	user: UserStructure.optional(),
	sort_value: Integer.optional(),
});
export type StickerInfer = z.infer<typeof StickerStructure>;

export const StickerItemStructure = z.object({
	id: Snowflake,
	name: z.string(),
	format_type: StickerFormatTypesEnum,
});
export type StickerItemInfer = z.infer<typeof StickerItemStructure>;

export const StickerPackStructure = z.object({
	id: Snowflake,
	stickers: z.array(StickerStructure),
	name: z.string(),
	sku_id: Snowflake,
	cover_sticker_id: Snowflake.optional(),
	description: z.string(),
	banner_asset_id: Snowflake.optional(),
});
export type StickerPackInfer = z.infer<typeof StickerPackStructure>;
