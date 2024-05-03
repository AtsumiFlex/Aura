import { z } from "zod";
import { Snowflake } from "../globals/globals";
import { RoleStructure } from "./roles";
import { UserStructure } from "./user";

/**
 * Emoji Structure
 *
 * Emojis are used to represent a server's custom emoji.
 *
 * @see {@link https://discord.com/developers/docs/resources/emoji#emoji-object}
 */
export const EmojiStructure = z.object({
	id: Snowflake.nullable(),
	name: z.string().nullable(),
	roles: z.array(RoleStructure.pick({ id: true })).optional(),
	user: UserStructure.optional(),
	require_colons: z.boolean().optional(),
	managed: z.boolean().optional(),
	animated: z.boolean().optional(),
	available: z.boolean().optional(),
});

/**
 * Emoji Structure Infer is the inferred type of the EmojiStructure zod object.
 */
export type EmojiStructureInfer = z.infer<typeof EmojiStructure>;
