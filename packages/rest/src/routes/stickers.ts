import type { SnowflakeInfer, StickerPackStructureInfer, StickerStructureInfer } from "@aurajs/core";
import { z } from "zod";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * Get Sticker
 *
 * Returns a sticker object for the given sticker ID.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#get-sticker}
 */
export function GetSticker<T extends StickerStructureInfer>(stickerId: SnowflakeInfer): RestMakeRequestOptions<T> {
	return {
		method: "GET",
		url: `/stickers/${stickerId}`,
	};
}

/**
 * List Sticker Packs
 *
 * Returns an array of sticker pack objects.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#list-sticker-packs}
 */
export function ListStickerPacks<T extends StickerPackStructureInfer[]>(): RestMakeRequestOptions<T> {
	return {
		method: "GET",
		url: "/sticker-packs",
	};
}

/**
 * List Guild Stickers
 *
 * Returns an array of sticker objects for the given guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#list-guild-stickers}
 */
export function ListGuildStickers<T extends StickerStructureInfer[]>(guildId: SnowflakeInfer): RestMakeRequestOptions<T> {
	return {
		method: "GET",
		url: `/guilds/${guildId}/stickers`,
	};
}

/**
 * Get Guild Sticker
 *
 * Returns a sticker object for the given guild and sticker ID.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#get-guild-sticker}
 */
export function GetGuildSticker<T extends StickerStructureInfer>(guildId: SnowflakeInfer, stickerId: SnowflakeInfer): RestMakeRequestOptions<T> {
	return {
		method: "GET",
		url: `/guilds/${guildId}/stickers/${stickerId}`,
	};
}

/**
 * JSON Create Guild Sticker
 *
 * Create a new sticker for the guild. Requires the `MANAGE_EMOJIS_AND_STICKERS` permission.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#create-guild-sticker}
 */
export const JSONCreateGuildSticker = z.object({
	name: z.string().min(2).max(30),
	description: z.string().min(2).max(200),
	tags: z.string().max(200),
	file: z.string().base64(), // TODO: A vérifier
});

/**
 * JSON Create Guild Sticker Infer
 *
 * The inferred type of {@link JSONCreateGuildSticker}
 */
export type JSONCreateGuildStickerInfer = z.infer<typeof JSONCreateGuildSticker>;

/**
 * Create Guild Sticker
 *
 * Create a new sticker for the guild. Requires the `MANAGE_EMOJIS_AND_STICKERS` permission.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#create-guild-sticker}
 */
export function CreateGuildSticker<T extends StickerStructureInfer>(guildId: SnowflakeInfer, reason: string, json: JSONCreateGuildStickerInfer): RestMakeRequestOptions<T> {
	return {
		method: "POST",
		url: `/guilds/${guildId}/stickers`,
		body: JSONCreateGuildSticker.parse(json),
		headers: {
			"X-Audit-Log-Reason": reason,
			"Content-Type": "multipart/form-data",
		},
	};
}

/**
 * JSON Modify Guild Sticker
 *
 * Modify the given sticker. Requires the `MANAGE_EMOJIS_AND_STICKERS` permission.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#modify-guild-sticker}
 */
export const JSONModifyGuildSticker = z.object({
	name: z.string().min(2).max(30).optional(),
	description: z.string().min(2).max(200).optional().nullable(),
	tags: z.string().max(200).optional(),
});

/**
 * JSON Modify Guild Sticker Infer
 *
 * The inferred type of {@link JSONModifyGuildSticker}
 */
export type JSONModifyGuildStickerInfer = z.infer<typeof JSONModifyGuildSticker>;

/**
 * Modify Guild Sticker
 *
 * Modify the given sticker. Requires the `MANAGE_EMOJIS_AND_STICKERS` permission.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#modify-guild-sticker}
 */
export function ModifyGuildSticker<T extends StickerStructureInfer>(guildId: SnowflakeInfer, stickerId: SnowflakeInfer, reason: string, json: JSONModifyGuildStickerInfer): RestMakeRequestOptions<T> {
	return {
		method: "PATCH",
		url: `/guilds/${guildId}/stickers/${stickerId}`,
		body: JSONModifyGuildSticker.parse(json),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * Delete Guild Sticker
 *
 * Delete the given sticker. Requires the `MANAGE_EMOJIS_AND_STICKERS` permission.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#delete-guild-sticker}
 */
export function DeleteGuildSticker<T extends void>(guildId: SnowflakeInfer, stickerId: SnowflakeInfer): RestMakeRequestOptions<T> {
	return {
		method: "DELETE",
		url: `/guilds/${guildId}/stickers/${stickerId}`,
	};
}
