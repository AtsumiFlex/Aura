import { z } from "zod";
import { Snowflake } from "../globals/formats";
import { UserStructure } from "./users";

/**
 * Schema for validating Emoji Structure.
 *
 * @see {@link https://discord.com/developers/docs/resources/emoji#emoji-object-emoji-structure}
 */
export const EmojiStructure = z.object({
	/**
	 * Emoji ID.
	 *
	 * @remarks
	 * The unique identifier for the emoji. This can be null for certain built-in emojis.
	 * @example
	 * const emojiId = "123456789012345678";
	 */
	id: Snowflake.nullable(),
	/**
	 * Emoji name.
	 *
	 * @remarks
	 * The name of the emoji. This can be null for certain built-in emojis.
	 * @example
	 * const emojiName = "smile";
	 */
	name: z.string().nullish(),
	/**
	 * Roles that can use this emoji.
	 *
	 * @remarks
	 * An array of role IDs that are allowed to use this emoji.
	 * @example
	 * const roles = ["123456789012345678", "987654321098765432"];
	 */
	roles: z.array(Snowflake).optional(),
	/**
	 * User that created this emoji.
	 *
	 * @remarks
	 * The user who created the emoji. This field is optional.
	 * @example
	 * const user = { id: "123456789012345678", username: "exampleUser", discriminator: "1234" };
	 */
	user: UserStructure.optional(),
	/**
	 * Whether this emoji must be wrapped in colons.
	 *
	 * @remarks
	 * Indicates if the emoji must be wrapped in colons to be used. This field is optional.
	 * @example
	 * const requireColons = true;
	 */
	require_colons: z.boolean().optional(),
	/**
	 * Whether this emoji is managed.
	 *
	 * @remarks
	 * Indicates if the emoji is managed by an integration. This field is optional.
	 * @example
	 * const managed = false;
	 */
	managed: z.boolean().optional(),
	/**
	 * Whether this emoji is animated.
	 *
	 * @remarks
	 * Indicates if the emoji is animated. This field is optional.
	 * @example
	 * const animated = true;
	 */
	animated: z.boolean().optional(),
	/**
	 * Whether this emoji is available.
	 *
	 * @remarks
	 * Indicates if the emoji is available for use. This field is optional.
	 * @example
	 * const available = true;
	 */
	available: z.boolean().optional(),
});

/**
 * Type representing the structure of an Emoji object as defined by the Discord API.
 *
 * This type is inferred from the {@link EmojiStructure} schema and includes details
 * about the emoji such as its ID, name, associated roles, creator, and various properties
 * like whether it's animated or managed.
 *
 * @example
 * const emoji: Emoji = {
 *   id: "123456789012345678",
 *   name: "smile",
 *   roles: ["234567890123456789"],
 *   user: UserStructure,
 *   require_colons: true,
 *   managed: false,
 *   animated: false,
 *   available: true,
 * };
 */
export type EmojiStructureInfer = z.infer<typeof EmojiStructure>;
