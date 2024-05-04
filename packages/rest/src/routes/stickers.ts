import type { SnowflakeInfer, StickerStructureInfer } from "@aurajs/core";
import { StickerPackStructure } from "@aurajs/core";
import { z } from "zod";
import type { RestRequestOptions } from "../globals/rest";

/**
 * Get Sticker
 *
 * Get a sticker by its ID.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#get-sticker}
 */
export function GetSticker<T extends StickerStructureInfer>(stickerId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/stickers/${stickerId}`,
		method: "GET",
	};
}

/**
 * Response List Sticker Packs
 *
 * Returns an array of sticker pack objects.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#list-sticker-packs}
 */
export const ResponseListStickerPacks = z.array(StickerPackStructure);

/**
 * Response List Sticker Packs Infer
 *
 * Is the inferred type of the {@link ResponseListStickerPacks} zod object.
 */
export type ResponseListStickerPacksInfer = z.infer<typeof ResponseListStickerPacks>;

/**
 * List Sticker Packs
 *
 * Returns an array of sticker pack objects.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#list-sticker-packs}
 */
export function ListStickerPacks<T extends ResponseListStickerPacksInfer>(): RestRequestOptions<T> {
	return {
		url: "/sticker-packs",
		method: "GET",
	};
}

/**
 * Get Guild Sticker
 *
 * Get a guild sticker by its ID.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#get-guild-sticker}
 */
export function GetGuildSticker<T extends StickerStructureInfer>(guildId: SnowflakeInfer, stickerId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/stickers/${stickerId}`,
		method: "GET",
	};
}

/**
 * Form params Create Guild Sticker
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#create-guild-sticker}
 */
export const FormParamCreateGuildSticker = z.object({
	name: z.string().min(2).max(30),
	description: z.string().min(2).max(100),
	tags: z.string().max(200),
	file: z.string(),
});

/**
 * Form params Create Guild Sticker Infer
 *
 * Is the inferred type of the {@link FormParamCreateGuildSticker} zod object.
 */
export type FormParamCreateGuildStickerInfer = z.infer<typeof FormParamCreateGuildSticker>;

/**
 * Create Guild Sticker
 *
 * Create a new sticker for the guild. Requires the MANAGE_EMOJIS_AND_STICKERS permission.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#create-guild-sticker}
 */
export function CreateGuildSticker<T extends StickerStructureInfer>(guildId: SnowflakeInfer, form: FormParamCreateGuildStickerInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/stickers`,
		method: "POST",
		body: FormParamCreateGuildSticker.parse(form),
		headers: { "X-Audit-Log-Reason": `Create Guild Sticker for guild id: ${guildId}` },
	};
}

/**
 * JSON Modify Guild Sticker
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#modify-guild-sticker-json-params}
 */
export const JSONModifyGuildSticker = z.object({
	name: z.string().min(2).max(30),
	description: z.string().min(2).max(100).nullable(),
	tags: z.string().max(200),
});

/**
 * JSON Modify Guild Sticker Infer
 *
 * Is the inferred type of the {@link JSONModifyGuildSticker} zod object.
 */
export type JSONModifyGuildStickerInfer = z.infer<typeof JSONModifyGuildSticker>;

/**
 * Modify Guild Sticker
 *
 * Modify the given sticker. Requires the MANAGE_EMOJIS_AND_STICKERS permission.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#modify-guild-sticker}
 */
export function ModifyGuildSticker<T extends StickerStructureInfer>(guildId: SnowflakeInfer, stickerId: SnowflakeInfer, json?: JSONModifyGuildStickerInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/stickers/${stickerId}`,
		method: "PATCH",
		body: JSONModifyGuildSticker.parse(json),
		headers: { "X-Audit-Log-Reason": `Modify Guild Sticker for guild id: ${guildId}` },
	};
}

/**
 * Delete Guild Sticker
 *
 * Delete the given sticker. Requires the MANAGE_EMOJIS_AND_STICKERS permission.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#delete-guild-sticker}
 */
export function DeleteGuildSticker(guildId: SnowflakeInfer, stickerId: SnowflakeInfer): RestRequestOptions<void> {
	return {
		url: `/guilds/${guildId}/stickers/${stickerId}`,
		method: "DELETE",
		headers: { "X-Audit-Log-Reason": `Delete Guild Sticker for guild id: ${guildId}` },
	};
}
