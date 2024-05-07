/**
 * Sticker Resource
 *
 * Stickers are small images that can be sent in a chat. They are a type of emoji that can be animated.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-resource}
 */

import { z } from "zod";
import { Integer, Snowflake } from "../globals/formatters";
import { UserStructure } from "./users";

/**
 * Sticker Format Types
 *
 * The type of sticker format.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-format-types}
 */
export enum StickerFormatTypes {
	/**
	 * PNG
	 */
	PNG = 1,
	/**
	 * APNG
	 */
	APNG = 2,
	/**
	 * Lottie
	 */
	Lottie = 3,
	/**
	 * GIF
	 */
	GIF = 4,
}

/**
 * Sticker Format Types Enum
 *
 * Is a zod enum that represents the available {@link StickerFormatTypes}.
 */
export const StickerFormatTypesEnum = z.nativeEnum(StickerFormatTypes);

/**
 * Sticker Types
 *
 * The type of sticker.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-types}
 */
export enum StickerTypes {
	/**
	 * An official sticker in a pack
	 */
	Standard = 1,
	/**
	 * A sticker uploaded to a guild for the guild's members
	 */
	Guild = 2,
}

/**
 * Sticker Types Enum
 *
 * Is a zod enum that represents the available {@link StickerTypes}.
 */
export const StickerTypesEnum = z.nativeEnum(StickerTypes);

/**
 * Sticker Structure
 *
 * Represents a sticker.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-structure}
 */
export const StickerStructure = z.object({
	id: Snowflake,
	pack_id: Snowflake.optional(),
	name: z.string(),
	description: z.string().nullable(),
	tags: z.string().max(200).optional(),
	type: StickerTypesEnum,
	format_type: StickerFormatTypesEnum,
	available: z.boolean().optional(),
	guild_id: Snowflake.optional(),
	user: UserStructure.optional(),
	sort_value: Integer.optional(),
});

/**
 * Sticker Structure Infer
 *
 * The inferred type of {@link StickerStructure}
 */
export type StickerStructureInfer = z.infer<typeof StickerStructure>;

/**
 * Sticker Item Structure
 *
 * Represents a sticker item.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-item-structure}
 */
export const StickerItemStructure = z.object({
	id: Snowflake,
	name: z.string(),
	format_type: StickerFormatTypesEnum,
});

/**
 * Sticker Item Structure Infer
 *
 * The inferred type of {@link StickerItemStructure}
 */
export type StickerItemStructureInfer = z.infer<typeof StickerItemStructure>;

/**
 * Sticker Pack Structure
 *
 * Represents a sticker pack.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-pack-structure}
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
 * Sticker Pack Structure Infer
 *
 * The inferred type of {@link StickerPackStructure}
 */
export type StickerPackStructureInfer = z.infer<typeof StickerPackStructure>;
