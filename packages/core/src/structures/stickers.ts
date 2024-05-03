/**
 * Sticker Resource
 *
 * Stickers are a type of image that can be sent in a message with a Guild. They are a type of emoji that can be used in a Guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-resource}
 */

import { z } from "zod";
import { Integer, Snowflake } from "../globals/globals";
import { UserStructure } from "./user";

/**
 * Sticker Structure
 *
 * Stickers are a type of image that can be sent in a message with a Guild. They are a type of emoji that can be used in a Guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-object}
 */
export enum StickerFormatTypes {
	PNG = 1,
	APNG = 2,
	LOTTIE = 3,
	GIF = 4,
}

/**
 * Sticker Format Types Enum is a zod enum that represents the sticker format types.
 */
export const StickerFormatTypesEnum = z.nativeEnum(StickerFormatTypes);

/**
 * Sticker Item Structure
 *
 * Sticker items are the individual stickers in a sticker pack.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-item-object}
 */
export const StickerItemStructure = z.object({
	id: Snowflake,
	name: z.string(),
	format_type: StickerFormatTypesEnum,
});

/**
 * Sticker Types
 *
 * Sticker types denote the type of sticker.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-types}
 */
export enum StickerTypes {
	Standard = 1,
	Guild = 2,
}

/**
 * Sticker Types Enum is a zod enum that represents the sticker types.
 */
export const StickerTypesEnum = z.nativeEnum(StickerTypes);

/**
 * Sticker Structure
 *
 * Stickers are a type of image that can be sent in a message with a Guild. They are a type of emoji that can be used in a Guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-object}
 */
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

/**
 * Sticker Structure Infer is the inferred type of the StickerStructure zod object.
 */
export type StickerStructureInfer = z.infer<typeof StickerStructure>;

/**
 * Sticker Pack Structure
 *
 * Sticker packs are a collection of stickers that can be used in a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-pack-object}
 */
export const StickerPackStructure = z.object({
	id: Snowflake,
	stickers: z.array(StickerStructure),
	name: z.string(),
	sku_id: Snowflake,
	cover_sticker_id: Snowflake.optional(),
	description: z.string(),
	banner_asset_id: Snowflake.optional(),
});

/**
 * Sticker Pack Structure Infer is the inferred type of the StickerPackStructure zod object.
 */
export type StickerPackStructureInfer = z.infer<typeof StickerPackStructure>;
