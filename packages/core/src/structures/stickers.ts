import { z } from "zod";
import { Integer, Snowflake } from "../globals/formats";
import { UserStructure } from "./users";

/**
 * Enum representing the format types of a sticker.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-format-types}
 */
export enum StickerFormatTypes {
	/**
	 * PNG format.
	 */
	PNG = 1,
	/**
	 * APNG format.
	 */
	APNG = 2,
	/**
	 * LOTTIE format.
	 */
	LOTTIE = 3,
	/**
	 * GIF format.
	 */
	GIF = 4,
}

/**
 * Zod schema for validating {@link StickerFormatTypes}.
 *
 * @example
 * ```typescript
 * StickerFormatTypesEnum.parse(StickerFormatTypes.PNG); // Valid
 * StickerFormatTypesEnum.parse(5); // Throws an error
 * ```
 */
export const StickerFormatTypesEnum = z.nativeEnum(StickerFormatTypes);

/**
 * Enum representing the types of a sticker.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-types}
 */
export enum StickerTypes {
	/**
	 * An official sticker in a pack.
	 */
	Standard = 1,
	/**
	 * A sticker uploaded to a guild for the guild's members.
	 */
	Guild = 2,
}

/**
 * Zod schema for validating {@link StickerTypes}.
 *
 * @example
 * ```typescript
 * StickerTypesEnum.parse(StickerTypes.Standard); // Valid
 * StickerTypesEnum.parse(3); // Throws an error
 * ```
 */
export const StickerTypesEnum = z.nativeEnum(StickerTypes);

/**
 * Schema for validating the structure of a sticker.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-structure}
 */
export const StickerStructure = z.object({
	/**
	 * ID of the sticker.
	 *
	 * @example
	 * ```typescript
	 * const stickerId = "123456789012345678";
	 * ```
	 */
	id: Snowflake,
	/**
	 * ID of the pack the sticker is from.
	 *
	 * @example
	 * ```typescript
	 * const packId = "123456789012345678";
	 * ```
	 */
	pack_id: Snowflake.optional(),
	/**
	 * Name of the sticker.
	 *
	 * @example
	 * ```typescript
	 * const name = "Funny Sticker";
	 * ```
	 */
	name: z.string(),
	/**
	 * Description of the sticker.
	 *
	 * @example
	 * ```typescript
	 * const description = "A sticker that makes you laugh";
	 * ```
	 */
	description: z.string().nullable(),
	/**
	 * Autocomplete/suggestion tags for the sticker.
	 *
	 * @example
	 * ```typescript
	 * const tags = "funny,laugh,emoji";
	 * ```
	 */
	tags: z.string().max(200),
	/**
	 * Previously the sticker asset hash, now an empty string.
	 *
	 * @deprecated
	 */
	asset: z.string().optional(),
	/**
	 * Type of sticker.
	 *
	 * @example
	 * ```typescript
	 * const type = StickerTypes.Standard;
	 * ```
	 */
	type: StickerTypesEnum,
	/**
	 * Type of sticker format.
	 *
	 * @example
	 * ```typescript
	 * const formatType = StickerFormatTypes.PNG;
	 * ```
	 */
	format_type: StickerFormatTypesEnum,
	/**
	 * Whether this guild sticker can be used.
	 *
	 * @example
	 * ```typescript
	 * const available = true;
	 * ```
	 */
	available: z.boolean().optional(),
	/**
	 * ID of the guild that owns this sticker.
	 *
	 * @example
	 * ```typescript
	 * const guildId = "123456789012345678";
	 * ```
	 */
	guild_id: Snowflake.optional(),
	/**
	 * The user that uploaded the guild sticker.
	 *
	 * @example
	 * ```typescript
	 * const user = {
	 *   id: "123456789012345678",
	 *   username: "Uploader",
	 *   discriminator: "0001",
	 *   avatar: null
	 * };
	 * ```
	 */
	user: UserStructure.optional(),
	/**
	 * The standard sticker's sort order within its pack.
	 *
	 * @example
	 * ```typescript
	 * const sortValue = 1;
	 * ```
	 */
	sort_value: Integer.optional(),
});

/**
 * The type of the {@link StickerStructure} schema.
 *
 * @example
 * ```typescript
 * const sticker: StickerStructureInfer = {
 *   id: "123456789012345678",
 *   name: "Funny Sticker",
 *   description: "A sticker that makes you laugh",
 *   tags: "funny,laugh,emoji",
 *   type: StickerTypes.Standard,
 *   format_type: StickerFormatTypes.PNG,
 *   available: true,
 *   guild_id: "123456789012345678",
 *   user: {
 *     id: "123456789012345678",
 *     username: "Uploader",
 *     discriminator: "0001",
 *     avatar: null
 *   },
 *   sort_value: 1
 * };
 * ```
 */
export type StickerStructureInfer = z.infer<typeof StickerStructure>;

/**
 * Schema for validating the structure of a sticker item.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-item-object-sticker-item-structure}
 */
export const StickerItemStructure = z.object({
	/**
	 * ID of the sticker.
	 *
	 * @example
	 * ```typescript
	 * const stickerId = "123456789012345678";
	 * ```
	 */
	id: Snowflake,
	/**
	 * Name of the sticker.
	 *
	 * @example
	 * ```typescript
	 * const name = "Funny Sticker";
	 * ```
	 */
	name: z.string(),
	/**
	 * Type of sticker format.
	 *
	 * @example
	 * ```typescript
	 * const formatType = StickerFormatTypes.PNG;
	 * ```
	 */
	format_type: StickerFormatTypesEnum,
});

/**
 * The type of the {@link StickerItemStructure} schema.
 *
 * @example
 * ```typescript
 * const stickerItem: StickerItemStructureInfer = {
 *   id: "123456789012345678",
 *   name: "Funny Sticker",
 *   format_type: StickerFormatTypes.PNG
 * };
 * ```
 */
export type StickerItemStructureInfer = z.infer<typeof StickerItemStructure>;

/**
 * Schema for validating the structure of a sticker pack.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-pack-object-sticker-pack-structure}
 */
export const StickerPackStructure = z.object({
	/**
	 * ID of the sticker pack.
	 *
	 * @example
	 * ```typescript
	 * const packId = "123456789012345678";
	 * ```
	 */
	id: Snowflake,
	/**
	 * The stickers in the pack.
	 *
	 * @example
	 * ```typescript
	 * const stickers = [{ id: "123456789012345678", name: "Funny Sticker", description: "A sticker that makes you laugh", tags: "funny,laugh,emoji", type: StickerTypes.Standard, format_type: StickerFormatTypes.PNG, available: true, guild_id: "123456789012345678", user: { id: "123456789012345678", username: "Uploader", discriminator: "0001", avatar: null }, sort_value: 1 }];
	 * ```
	 */
	stickers: z.array(StickerStructure),
	/**
	 * Name of the sticker pack.
	 *
	 * @example
	 * ```typescript
	 * const name = "Funny Stickers Pack";
	 * ```
	 */
	name: z.string(),
	/**
	 * ID of the pack's SKU.
	 *
	 * @example
	 * ```typescript
	 * const skuId = "123456789012345678";
	 * ```
	 */
	sku_id: Snowflake,
	/**
	 * ID of a sticker in the pack which is shown as the pack's icon.
	 *
	 * @example
	 * ```typescript
	 * const coverStickerId = "123456789012345678";
	 * ```
	 */
	cover_sticker_id: Snowflake.optional(),
	/**
	 * Description of the sticker pack.
	 *
	 * @example
	 * ```typescript
	 * const description = "A pack of funny stickers that will make you laugh.";
	 * ```
	 */
	description: z.string(),
	/**
	 * ID of the sticker pack's banner image.
	 *
	 * @example
	 * ```typescript
	 * const bannerAssetId = "123456789012345678";
	 * ```
	 */
	banner_asset_id: Snowflake.optional(),
});

/**
 * The type of the {@link StickerPackStructure} schema.
 *
 * @example
 * ```typescript
 * const stickerPack: StickerPackStructureInfer = {
 *   id: "123456789012345678",
 *   stickers: [{ id: "123456789012345678", name: "Funny Sticker", description: "A sticker that makes you laugh", tags: "funny,laugh,emoji", type: StickerTypes.Standard, format_type: StickerFormatTypes.PNG, available: true, guild_id: "123456789012345678", user: { id: "123456789012345678", username: "Uploader", discriminator: "0001", avatar: null }, sort_value: 1 }],
 *   name: "Funny Stickers Pack",
 *   sku_id: "123456789012345678",
 *   cover_sticker_id: "123456789012345678",
 *   description: "A pack of funny stickers that will make you laugh.",
 *   banner_asset_id: "123456789012345678"
 * };
 * ```
 */
export type StickerPackStructureInfer = z.infer<typeof StickerPackStructure>;
