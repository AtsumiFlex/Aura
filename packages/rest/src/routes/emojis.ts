import type { EmojiStructureInfer, SnowflakeInfer } from "@aurajs/core";
import { Snowflake } from "@aurajs/core";
import { z } from "zod";
import type { RestRequestOptions } from "../globals/rest";

/**
 * List Guild Emojis
 *
 * Returns a list of emoji objects for the given guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/emoji#list-guild-emojis}
 */
export function ListGuildEmojis<T extends EmojiStructureInfer[]>(guildId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/emojis`,
		method: "GET",
	};
}

/**
 * Get Guild Emoji
 *
 * Returns an emoji object for the given guild and emoji IDs.
 *
 * @see {@link https://discord.com/developers/docs/resources/emoji#get-guild-emoji}
 */
export function GetGuildEmoji<T extends EmojiStructureInfer>(guildId: SnowflakeInfer, emojiId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/emojis/${emojiId}`,
		method: "GET",
	};
}

/**
 * JSON Create Guild Emoji
 *
 * @see {@link https://discord.com/developers/docs/resources/emoji#create-guild-emoji}
 */
export const JSONCreateGuildEmoji = z.object({
	name: z.string(),
	image: z.string(),
	roles: z.array(Snowflake).optional(),
});

/**
 * JSON Create Guild Emoji Infer
 *
 * Is the inferred type of the {@link JSONCreateGuildEmoji} zod object.
 */
export type JSONCreateGuildEmojiInfer = z.infer<typeof JSONCreateGuildEmoji>;

/**
 * Create Guild Emoji
 *
 * Create a new emoji for the guild. Requires the 'MANAGE_EMOJIS_AND_STICKERS' permission.
 *
 * @see {@link https://discord.com/developers/docs/resources/emoji#create-guild-emoji}
 */
export function CreateGuildEmoji<T extends EmojiStructureInfer>(guildId: SnowflakeInfer, json: JSONCreateGuildEmojiInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/emojis`,
		method: "POST",
		body: JSONCreateGuildEmoji.parse(json),
	};
}

/**
 * JSON Modify Guild Emoji
 *
 * Modify the given emoji. Requires the 'MANAGE_EMOJIS_AND_STICKERS' permission.
 */
export const JSONModifyGuildEmoji = z.object({
	name: z.string().optional(),
	roles: z.array(Snowflake).optional(),
});

/**
 * JSON Modify Guild Emoji Infer
 *
 * Is the inferred type of the {@link JSONModifyGuildEmoji} zod object.
 */
export type JSONModifyGuildEmojiInfer = z.infer<typeof JSONModifyGuildEmoji>;

/**
 * Modify Guild Emoji
 *
 * Modify the given emoji. Requires the 'MANAGE_EMOJIS_AND_STICKERS' permission.
 *
 * @see {@link https://discord.com/developers/docs/resources/emoji#modify-guild-emoji}
 */
export function ModifyGuildEmoji<T extends EmojiStructureInfer>(guildId: SnowflakeInfer, emojiId: SnowflakeInfer, json: JSONModifyGuildEmojiInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/emojis/${emojiId}`,
		method: "PATCH",
		body: JSONModifyGuildEmoji.parse(json),
	};
}

/**
 * Delete Guild Emoji
 *
 * Delete the given emoji. Requires the 'MANAGE_EMOJIS_AND_STICKERS' permission.
 *
 * @see {@link https://discord.com/developers/docs/resources/emoji#delete-guild-emoji}
 */
export function DeleteGuildEmoji(guildId: SnowflakeInfer, emojiId: SnowflakeInfer): RestRequestOptions<void> {
	return {
		url: `/guilds/${guildId}/emojis/${emojiId}`,
		method: "DELETE",
	};
}
