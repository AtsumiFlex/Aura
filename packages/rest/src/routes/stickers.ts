/**
 * @module stickers
 * @description This module provides functions for interacting with the Discord API's sticker endpoints.
 */

import type { SnowflakeInfer, StickerStructureInfer } from "@aurajs/core";
import { BitwisePermissionFlags, Snowflake, StickerPackStructure, zodErrorInterceptor } from "@aurajs/core";
import { FormData } from "undici";
import { z } from "zod";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * @function GetSticker
 * @description Returns a sticker object for the given sticker ID.
 * @param {SnowflakeInfer} stickerId - The ID of the sticker to fetch.
 * @returns {RestMakeRequestOptions<StickerStructureInfer>} An object containing the HTTP method and path for the REST request.
 * @see {@link https://discord.com/developers/docs/resources/sticker#get-sticker}
 */
export function GetSticker(stickerId: SnowflakeInfer): RestMakeRequestOptions<StickerStructureInfer> {
	try {
		return {
			method: "GET",
			path: `/stickers/${Snowflake.parse(stickerId)}`,
		};
	} catch (error) {
		throw zodErrorInterceptor(error);
	}
}

/**
 * @const ResponseListStickerPacks
 * @description A zod schema for the response from the Discord API when listing sticker packs.
 * @see {@link https://discord.com/developers/docs/resources/sticker#list-sticker-packs-response-structure}
 */
export const ResponseListStickerPacks = z.object({ sticker_packs: z.array(StickerPackStructure) });

/**
 * @typedef ResponseListStickerPacksInfer
 * @description The inferred type of the `ResponseListStickerPacks` zod schema.
 */
export type ResponseListStickerPacksInfer = z.infer<typeof ResponseListStickerPacks>;

/**
 * @function ListStickerPacks
 * @description Returns an array of sticker pack objects. This is currently only available for Nitro users.
 * @returns {RestMakeRequestOptions<ResponseListStickerPacksInfer>} An object containing the HTTP method and path for the REST request.
 * @see {@link https://discord.com/developers/docs/resources/sticker#list-sticker-packs}
 */
export function ListStickerPacks(): RestMakeRequestOptions<ResponseListStickerPacksInfer> {
	return {
		method: "GET",
		path: "/sticker-packs",
	};
}

/**
 * @function ListGuildStickers
 * @description Returns an array of sticker objects for the given guild. Includes user fields if the bot has the CREATE_GUILD_EXPRESSIONS or MANAGE_GUILD_EXPRESSIONS permission.
 * @param {SnowflakeInfer} guildId - The ID of the guild to fetch stickers from.
 * @returns {RestMakeRequestOptions<StickerStructureInfer[]>} An object containing the HTTP method and path for the REST request.
 * @see {@link https://discord.com/developers/docs/resources/sticker#list-guild-stickers}
 */
export function ListGuildStickers(guildId: SnowflakeInfer): RestMakeRequestOptions<StickerStructureInfer[]> {
	try {
		return {
			method: "GET",
			path: `/guilds/${Snowflake.parse(guildId)}/stickers`,
			permissions: [BitwisePermissionFlags.CreateGuildExpressions, BitwisePermissionFlags.ManageGuildExpressions],
		};
	} catch (error) {
		throw zodErrorInterceptor(error);
	}
}

/**
 * @function GetGuildSticker
 * @description Returns a sticker object for the given guild and sticker IDs. Includes user fields if the bot has the CREATE_GUILD_EXPRESSIONS or MANAGE_GUILD_EXPRESSIONS permission.
 * @param {SnowflakeInfer} guildId - The ID of the guild.
 * @param {SnowflakeInfer} stickerId - The ID of the sticker to fetch.
 * @returns {RestMakeRequestOptions<StickerStructureInfer>} An object containing the HTTP method and path for the REST request.
 * @see {@link https://discord.com/developers/docs/resources/sticker#get-guild-sticker}
 */
export function GetGuildSticker(guildId: SnowflakeInfer, stickerId: SnowflakeInfer): RestMakeRequestOptions<StickerStructureInfer> {
	try {
		return {
			method: "GET",
			path: `/guilds/${Snowflake.parse(guildId)}/stickers/${Snowflake.parse(stickerId)}`,
			permissions: [BitwisePermissionFlags.CreateGuildExpressions, BitwisePermissionFlags.ManageGuildExpressions],
		};
	} catch (error) {
		throw zodErrorInterceptor(error);
	}
}

/**
 * @const FormCreateGuildSticker
 * @description A zod schema for the form data to create a guild sticker.
 * @see {@link https://discord.com/developers/docs/resources/sticker#create-guild-sticker-form-params}
 */
export const FormCreateGuildSticker = z.object({
	name: z.string().min(2).max(30),
	description: z.string().min(2).max(100).nullable(),
	tags: z.string().max(200),
	file: z.any(),
});

/**
 * @typedef FormCreateGuildStickerInfer
 * @description The inferred type of the `FormCreateGuildSticker` zod schema.
 */
export type FormCreateGuildStickerInfer = z.infer<typeof FormCreateGuildSticker>;

/**
 * @function CreateGuildSticker
 * @description Create a new sticker for the guild. Send a multipart/form-data body. Requires the CREATE_GUILD_EXPRESSIONS permission. Returns the new sticker object on success. Fires a Guild Stickers Update Gateway event.
 * @param {SnowflakeInfer} guildId - The ID of the guild to create the sticker in.
 * @param {string} reason - The reason for creating the sticker.
 * @param {FormCreateGuildStickerInfer} form - The form data for the sticker.
 * @returns {RestMakeRequestOptions<StickerStructureInfer>} An object containing the HTTP method and path for the REST request.
 * @see {@link https://discord.com/developers/docs/resources/sticker#create-guild-sticker}
 */
export function CreateGuildSticker(guildId: SnowflakeInfer, reason: string, form: FormCreateGuildStickerInfer): RestMakeRequestOptions<StickerStructureInfer> {
	try {
		FormCreateGuildSticker.parse(form);
		const data = new FormData();
		data.append("name", form.name);
		data.append("description", form.description);
		data.append("tags", form.tags);
		data.append("file", form.file);

		return {
			method: "POST",
			path: `/guilds/${Snowflake.parse(guildId)}/stickers`,
			body: data,
			permissions: [BitwisePermissionFlags.CreateGuildExpressions],
			headers: {
				"Content-Type": "multipart/form-data",
				"X-Audit-Log-Reason": reason,
			},
		};
	} catch (error) {
		throw zodErrorInterceptor(error);
	}
}

/**
 * @const JSONModifyGuildSticker
 * @description A zod schema for the JSON data to modify a guild sticker.
 * @see {@link https://discord.com/developers/docs/resources/sticker#modify-guild-sticker-json-params}
 */
export const JSONModifyGuildSticker = z.object({
	name: z.string().min(2).max(30).optional(),
	description: z.string().min(2).max(100).nullable().optional().nullable(),
	tags: z.string().max(200).optional(),
});

/**
 * @typedef JSONModifyGuildStickerInfer
 * @description The inferred type of the `JSONModifyGuildSticker` zod schema.
 */
export type JSONModifyGuildStickerInfer = z.infer<typeof JSONModifyGuildSticker>;

/**
 * @function ModifyGuildSticker
 * @description Modify the given sticker. For stickers created by the current user, requires either the CREATE_GUILD_EXPRESSIONS or MANAGE_GUILD_EXPRESSIONS permission. For other stickers, requires the MANAGE_GUILD_EXPRESSIONS permission. Returns the updated sticker object on success. Fires a Guild Stickers Update Gateway event.
 * @param {SnowflakeInfer} guildId - The ID of the guild the sticker is in.
 * @param {SnowflakeInfer} stickerId - The ID of the sticker to modify.
 * @param {string} reason - The reason for modifying the sticker.
 * @param {JSONModifyGuildStickerInfer} data - The JSON data for the sticker modification.
 * @returns {RestMakeRequestOptions<StickerStructureInfer>} An object containing the HTTP method and path for the REST request.
 * @see {@link https://discord.com/developers/docs/resources/sticker#modify-guild-sticker}
 */
export function ModifyGuildSticker(guildId: SnowflakeInfer, stickerId: SnowflakeInfer, reason: string, data: JSONModifyGuildStickerInfer): RestMakeRequestOptions<StickerStructureInfer> {
	try {
		return {
			method: "PATCH",
			path: `/guilds/${Snowflake.parse(guildId)}/stickers/${Snowflake.parse(stickerId)}`,
			body: JSONModifyGuildSticker.parse(data),
			permissions: [BitwisePermissionFlags.CreateGuildExpressions, BitwisePermissionFlags.ManageGuildExpressions],
			headers: { "X-Audit-Log-Reason": reason },
		};
	} catch (error) {
		throw zodErrorInterceptor(error);
	}
}

/**
 * @function DeleteGuildSticker
 * @description Delete the given sticker. For stickers created by the current user, requires either the CREATE_GUILD_EXPRESSIONS or MANAGE_GUILD_EXPRESSIONS permission. For other stickers, requires the MANAGE_GUILD_EXPRESSIONS permission. Returns 204 No Content on success. Fires a Guild Stickers Update Gateway event.
 * @param {SnowflakeInfer} guildId - The ID of the guild the sticker is in.
 * @param {SnowflakeInfer} stickerId - The ID of the sticker to delete.
 * @param {string} reason - The reason for deleting the sticker.
 * @returns {RestMakeRequestOptions<void>} An object containing the HTTP method and path for the REST request.
 * @see {@link https://discord.com/developers/docs/resources/sticker#delete-guild-sticker}
 */
export function DeleteGuildSticker(guildId: SnowflakeInfer, stickerId: SnowflakeInfer, reason: string): RestMakeRequestOptions<void> {
	try {
		return {
			method: "DELETE",
			path: `/guilds/${Snowflake.parse(guildId)}/stickers/${Snowflake.parse(stickerId)}`,
			permissions: [BitwisePermissionFlags.CreateGuildExpressions, BitwisePermissionFlags.ManageGuildExpressions],
			headers: { "X-Audit-Log-Reason": reason },
		};
	} catch (error) {
		throw zodErrorInterceptor(error);
	}
}
