/**
 * Emoji Resource
 *
 * Emojis are the characters or images that represent emotions, things, or ideas. They are used in Discord messages, reactions, and in the case of stickers, they can be used in voice channels.
 *
 * @see {@link https://discord.com/developers/docs/resources/emoji#emoji-resource}
 */

import { z } from "zod";
import { Snowflake } from "../globals/formatters";
import { RoleStructure } from "./roles";
import { UserStructure } from "./users";

/**
 * Emoji Structure
 *
 * @see {@link https://discord.com/developers/docs/resources/emoji#emoji-object-emoji-structure}
 */
export const EmojiStructure = z.object({
	/**
	 * Emoji ID
	 */
	id: Snowflake.nullable(),
	/**
	 * Emoji name
	 */
	name: z.string().nullable(),
	/**
	 * Roles allowed to use this emoji
	 */
	roles: z.array(RoleStructure).optional(),
	/**
	 * User that created this emoji
	 */
	user: UserStructure.optional(),
	/**
	 * Whether this emoji must be wrapped in colons
	 */
	require_colons: z.boolean().optional(),
	/**
	 * Whether this emoji is managed
	 */
	managed: z.boolean().optional(),
	/**
	 * Whether this emoji is animated
	 */
	animated: z.boolean().optional(),
	/**
	 * Whether this emoji can be used, may be false due to loss of Server Boosts
	 */
	available: z.boolean().optional(),
});

/**
 * Emoji Structure Infer
 *
 * The inferred zod object from {@link EmojiStructure}
 */
export type EmojiStructureInfer = z.infer<typeof EmojiStructure>;
