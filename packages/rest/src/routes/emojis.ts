import type { EmojiStructureInfer, SnowflakeInfer } from "@aurajs/core";
import { BitwisePermissionFlags, Snowflake, zodErrorInterceptor } from "@aurajs/core";
import { z } from "zod";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * List Guild Emojis
 *
 * Returns a list of emoji objects for the given guild. Includes user fields if the bot has the CREATE_GUILD_EXPRESSIONS or MANAGE_GUILD_EXPRESSIONS permission.
 *
 * @see {@link https://discord.com/developers/docs/resources/emoji#list-guild-emojis}
 */
export function ListGuildEmojis(guildId: SnowflakeInfer): RestMakeRequestOptions<EmojiStructureInfer[]> {
	try {
		return {
			method: "GET",
			path: `/guilds/${Snowflake.parse(guildId)}/emojis`,
			permissions: [BitwisePermissionFlags.CreateGuildExpressions, BitwisePermissionFlags.ManageGuildExpressions],
		};
	} catch (error) {
		throw zodErrorInterceptor(error);
	}
}

/**
 * Get Guild Emoji
 *
 * Returns an emoji object for the given guild and emoji IDs. Includes user fields if the bot has the CREATE_GUILD_EXPRESSIONS or MANAGE_GUILD_EXPRESSIONS permission.
 *
 * @see {@link https://discord.com/developers/docs/resources/emoji#get-guild-emoji}
 */
export function GetGuildEmoji(guildId: SnowflakeInfer, emojiId: SnowflakeInfer): RestMakeRequestOptions<EmojiStructureInfer> {
	try {
		return {
			method: "GET",
			path: `/guilds/${Snowflake.parse(guildId)}/emojis/${Snowflake.parse(emojiId)}`,
			permissions: [BitwisePermissionFlags.CreateGuildExpressions, BitwisePermissionFlags.ManageGuildExpressions],
		};
	} catch (error) {
		throw zodErrorInterceptor(error);
	}
}

/**
 * JSON Params Create Guild Emoji
 *
 * @see {@link https://discord.com/developers/docs/resources/emoji#create-guild-emoji-json-params}
 */
export const JSONParamsCreateGuildEmoji = z.object({
	/**
	 * Name of the emoji
	 */
	name: z.string(),
	/**
	 * Image data
	 */
	image: z.string(),
	/**
	 * Roles allowed to use this emoji
	 */
	roles: z.array(Snowflake),
});

/**
 * JSON Params Create Guild Emoji Infer
 *
 * Is used to infer the type of the {@link JSONParamsCreateGuildEmoji} object.
 */
export type JSONParamsCreateGuildEmojiInfer = z.infer<typeof JSONParamsCreateGuildEmoji>;

/**
 * Create Guild Emoji
 *
 * Create a new emoji for the guild. Requires the CREATE_GUILD_EXPRESSIONS permission. Returns the new emoji object on success. Fires a Guild Emojis Update Gateway event.
 *
 * @see {@link https://discord.com/developers/docs/resources/emoji#create-guild-emoji}
 */
export function CreateGuildEmoji(guildId: SnowflakeInfer, reason: string, json: JSONParamsCreateGuildEmojiInfer): RestMakeRequestOptions<EmojiStructureInfer> {
	try {
		return {
			method: "POST",
			path: `/guilds/${Snowflake.parse(guildId)}/emojis`,
			body: JSONParamsCreateGuildEmoji.parse(json),
			permissions: [BitwisePermissionFlags.CreateGuildExpressions],
			headers: { "X-Audit-Log-Reason": reason },
		};
	} catch (error) {
		throw zodErrorInterceptor(error);
	}
}

/**
 * JSON Params Modify Guild Emoji
 *
 * @see {@link https://discord.com/developers/docs/resources/emoji#modify-guild-emoji-json-params}
 */
export const JSONParamsModifyGuildEmoji = z.object({
	/**
	 * Name of the emoji
	 */
	name: z.string(),
	/**
	 * Roles allowed to use this emoji
	 */
	roles: z.array(Snowflake),
});

/**
 * JSON Params Modify Guild Emoji Infer
 *
 * Is used to infer the type of the {@link JSONParamsModifyGuildEmoji} object.
 */
export type JSONParamsModifyGuildEmojiInfer = z.infer<typeof JSONParamsModifyGuildEmoji>;

/**
 * Modify Guild Emoji
 *
 * Modify the given emoji. Requires the MANAGE_GUILD_EXPRESSIONS permission. Returns the updated emoji object on success. Fires a Guild Emojis Update Gateway event.
 *
 * @see {@link https://discord.com/developers/docs/resources/emoji#modify-guild-emoji}
 */
export function ModifyGuildEmoji(guildId: SnowflakeInfer, emojiId: SnowflakeInfer, reason: string, json: JSONParamsModifyGuildEmojiInfer): RestMakeRequestOptions<EmojiStructureInfer> {
	try {
		return {
			method: "PATCH",
			path: `/guilds/${Snowflake.parse(guildId)}/emojis/${Snowflake.parse(emojiId)}`,
			body: JSONParamsModifyGuildEmoji.parse(json),
			permissions: [BitwisePermissionFlags.CreateGuildExpressions, BitwisePermissionFlags.ManageGuildExpressions],
			headers: { "X-Audit-Log-Reason": reason },
		};
	} catch (error) {
		throw zodErrorInterceptor(error);
	}
}

/**
 * Delete Guild Emoji
 *
 * Delete the given emoji. Requires the MANAGE_GUILD_EXPRESSIONS permission. Returns 204 No Content on success. Fires a Guild Emojis Update Gateway event.
 *
 * @see {@link https://discord.com/developers/docs/resources/emoji#delete-guild-emoji}
 */
export function DeleteGuildEmoji(guildId: SnowflakeInfer, emojiId: SnowflakeInfer, reason: string): RestMakeRequestOptions<void> {
	try {
		return {
			method: "DELETE",
			path: `/guilds/${Snowflake.parse(guildId)}/emojis/${Snowflake.parse(emojiId)}`,
			permissions: [BitwisePermissionFlags.CreateGuildExpressions, BitwisePermissionFlags.ManageGuildExpressions],
			headers: { "X-Audit-Log-Reason": reason },
		};
	} catch (error) {
		throw zodErrorInterceptor(error);
	}
}
