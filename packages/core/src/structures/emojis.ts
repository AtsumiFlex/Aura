/**
 * Emoji Resource
 *
 * Emojis are used to represent a variety of things in Discord, such as a user's status, a server's custom emoji, and more. Emojis are separated into two categories: standard emojis, which are standard Unicode emojis, and custom emojis, which are uploaded images that can be used in a server with Discord Nitro.
 *
 * @see {@link https://discord.com/developers/docs/resources/emoji#emoji-resource}
 */

import { z } from "zod";
import { Snowflake } from "../globals/formatters";
import { UserStructure } from "./users";

/**
 * Emoji Structure
 *
 * Represents an emoji.
 *
 * @see {@link https://discord.com/developers/docs/resources/emoji#emoji-object-emoji-structure}
 */
export const EmojiStructure = z.object({
	id: Snowflake.nullable(),
	name: z.string().nullable(),
	roles: z.array(Snowflake),
	user: UserStructure.optional(),
	require_colons: z.boolean(),
	managed: z.boolean().optional(),
	animated: z.boolean().optional(),
	available: z.boolean().optional(),
});

/**
 * Emoji Structure Infer
 *
 * The inferred type of {@link EmojiStructure}
 */
export type EmojiStructureInfer = z.infer<typeof EmojiStructure>;
