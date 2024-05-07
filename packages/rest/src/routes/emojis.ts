import type { EmojiStructureInfer, SnowflakeInfer } from "@aurajs/core";
import { Snowflake } from "@aurajs/core";
import { z } from "zod";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * List Guild Emojis
 *
 * Returns an array of emoji objects for the given guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/emoji#list-guild-emojis}
 */
export function ListGuildEmojis<T extends EmojiStructureInfer[]>(guildId: SnowflakeInfer): RestMakeRequestOptions<T> {
	return {
		method: "GET",
		url: `/guilds/${guildId}/emojis`,
	};
}

/**
 * Get Guild Emoji
 *
 * Returns an emoji object for the given guild and emoji IDs.
 *
 * @see {@link https://discord.com/developers/docs/resources/emoji#get-guild-emoji}
 */
export function GetGuildEmoji<T extends EmojiStructureInfer>(guildId: SnowflakeInfer, emojiId: SnowflakeInfer): RestMakeRequestOptions<T> {
	return {
		method: "GET",
		url: `/guilds/${guildId}/emojis/${emojiId}`,
	};
}

/**
 * JSON Create Guild Emoji
 *
 * Create a new emoji for the guild. Requires the `MANAGE_EMOJIS_AND_STICKERS` permission.
 *
 * @see {@link https://discord.com/developers/docs/resources/emoji#create-guild-emoji}
 */
export const JSONCreateGuildEmoji = z.object({
	name: z.string(),
	image: z.string(),
	roles: z.array(Snowflake),
});

/**
 * JSON Create Guild Emoji Infer
 *
 * The inferred type of {@link JSONCreateGuildEmoji}
 */
export type JSONCreateGuildEmojiInfer = z.infer<typeof JSONCreateGuildEmoji>;

/**
 * Create Guild Emoji
 *
 * Create a new emoji for the guild. Requires the `MANAGE_EMOJIS_AND_STICKERS` permission.
 *
 * @see {@link https://discord.com/developers/docs/resources/emoji#create-guild-emoji}
 */
export function CreateGuildEmoji<T extends EmojiStructureInfer>(guildId: SnowflakeInfer, reason: string, json: JSONCreateGuildEmojiInfer): RestMakeRequestOptions<T> {
	return {
		method: "POST",
		url: `/guilds/${guildId}/emojis`,
		body: JSONCreateGuildEmoji.parse(json),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * JSON Modify Guild Emoji
 *
 * Modify the given emoji. Requires the `MANAGE_EMOJIS_AND_STICKERS` permission.
 *
 * @see {@link https://discord.com/developers/docs/resources/emoji#modify-guild-emoji}
 */
export const JSONModifyGuildEmoji = z.object({
	name: z.string().optional(),
	roles: z.array(Snowflake).optional().nullable(),
});

/**
 * JSON Modify Guild Emoji Infer
 *
 * The inferred type of {@link JSONModifyGuildEmoji}
 */
export type JSONModifyGuildEmojiInfer = z.infer<typeof JSONModifyGuildEmoji>;

/**
 * Modify Guild Emoji
 *
 * Modify the given emoji. Requires the `MANAGE_EMOJIS_AND_STICKERS` permission.
 *
 * @see {@link https://discord.com/developers/docs/resources/emoji#modify-guild-emoji}
 */
export function ModifyGuildEmoji<T extends EmojiStructureInfer>(guildId: SnowflakeInfer, emojiId: SnowflakeInfer, reason: string, json: JSONModifyGuildEmojiInfer): RestMakeRequestOptions<T> {
	return {
		method: "PATCH",
		url: `/guilds/${guildId}/emojis/${emojiId}`,
		body: JSONModifyGuildEmoji.parse(json),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * Delete Guild Emoji
 *
 * Delete the given emoji. Requires the `MANAGE_EMOJIS_AND_STICKERS` permission.
 *
 * @see {@link https://discord.com/developers/docs/resources/emoji#delete-guild-emoji}
 */
export function DeleteGuildEmoji<T extends void>(guildId: SnowflakeInfer, emojiId: SnowflakeInfer, reason: string): RestMakeRequestOptions<T> {
	return {
		method: "DELETE",
		url: `/guilds/${guildId}/emojis/${emojiId}`,
		headers: { "X-Audit-Log-Reason": reason },
	};
}
