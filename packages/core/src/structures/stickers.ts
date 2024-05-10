/**
 * Sticker Resource
 *
 * Stickers are small images that can be sent in a message. They are bound to a guild and can be used by members of that guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-resource}
 */

import { z } from "zod";
import { Integer, Snowflake } from "../globals/formatters";
import { UserStructure } from "./users";

/**
 * Sticker Format Types
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-format-types}
 */
export enum StickerFormatTypes {
	/**
	 * PNG Image
	 */
	PNG = 1,
	/**
	 * APNG Image
	 */
	APNG = 2,
	/**
	 * Lottie JSON animation
	 */
	Lottie = 3,
	/**
	 * GIF Image
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
 * Sticker Item Structure
 *
 * The smallest amount of data required to render a sticker. A partial sticker object.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-item-object}
 */
export const StickerItemStructure = z.object({
	/**
	 * ID of the sticker
	 */
	id: Snowflake,
	/**
	 * Name of the sticker
	 */
	name: z.string(),
	/**
	 * Type of sticker format
	 *
	 * @see {@link StickerFormatTypes}
	 */
	format_type: StickerFormatTypesEnum,
});

/**
 * Sticker Item Structure Infer
 *
 * The inferred zod object from {@link StickerItemStructure}
 */
export type StickerItemStructureInfer = z.infer<typeof StickerItemStructure>;

/**
 * Sticker Types
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
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-structure}
 */
export const StickerStructure = z.object({
	/**
	 * ID of the sticker
	 */
	id: Snowflake,
	/**
	 * For standard stickers, ID of the pack the sticker is from
	 */
	pack_id: Snowflake.optional(),
	/**
	 * Name of the sticker
	 */
	name: z.string(),
	/**
	 * Description of the sticker
	 */
	description: z.string().nullable(),
	/**
	 * Autocomplete/suggestion tags for the sticker (max 200 characters)
	 */
	tags: z.string(),
	/**
	 * Deprecated previously the sticker asset hash, now an empty string
	 */
	asset: z.string().optional(),
	/**
	 * Type of sticker
	 *
	 * @see {@link StickerTypes}
	 */
	type: StickerTypesEnum,
	/**
	 * Type of sticker format
	 *
	 * @see {@link StickerFormatTypes}
	 */
	format_type: StickerFormatTypesEnum,
	/**
	 * Whether this guild sticker can be used, may be false due to loss of Server Boosts
	 */
	available: z.boolean().optional(),
	/**
	 * ID of the guild that owns this sticker
	 */
	guild_id: Snowflake.optional(),
	/**
	 * The user that uploaded the guild sticker
	 */
	user: UserStructure.optional(),
	/**
	 * The standard sticker's sort order within its pack
	 */
	sort_value: Integer.optional(),
});

/**
 * Sticker Structure Infer
 *
 * The inferred zod object from {@link StickerStructure}
 */
export type StickerStructureInfer = z.infer<typeof StickerStructure>;

/**
 * Sticker Pack Structure
 *
 * Represents a pack of standard stickers.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-pack-object-sticker-pack-structure}
 */
export const StickerPackStructure = z.object({
	/**
	 * ID of the sticker pack
	 */
	id: Snowflake,
	/**
	 * The stickers in the pack
	 *
	 * @see {@link StickerStructure}
	 */
	stickers: z.array(StickerStructure),
	/**
	 * Name of the sticker pack
	 */
	name: z.string(),
	/**
	 * ID of the pack's SKU
	 */
	sku_id: Snowflake,
	/**
	 * ID of a sticker in the pack which is shown as the pack's icon
	 */
	cover_sticker_id: Snowflake.optional(),
	/**
	 * Description of the sticker pack
	 */
	description: z.string(),
	/**
	 * ID of the sticker pack's banner image
	 */
	banner_asset_id: Snowflake.optional(),
});

/**
 * Sticker Pack Structure Infer
 *
 * The inferred zod object from {@link StickerPackStructure}
 */
export type StickerPackStructureInfer = z.infer<typeof StickerPackStructure>;
