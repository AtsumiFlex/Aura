/**
 * @see {@link https://discord.com/developers/docs/resources/emoji#emoji-resource}
 */

import type { Snowflake } from "../globals";
import type { RoleStructure } from "./role";
import type { UserStructure } from "./user";

/**
 * @see {@link https://discord.com/developers/docs/resources/emoji#emoji-object-emoji-structure}
 */
export type EmojiStructure = {
	animated?: boolean;
	available?: boolean;
	id: Snowflake | null;
	managed?: boolean;
	name: string | null;
	require_colons?: boolean;
	roles?: RoleStructure["id"][];
	user?: UserStructure;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/emoji#create-guild-emoji-json-params}
 */
export type JSONCreateGuildEmoji = {
	image: string;
	name: string;
	roles?: Snowflake[];
};

/**
 * @see {@link https://discord.com/developers/docs/resources/emoji#modify-guild-emoji-json-params}
 */
export type JSONModifyGuildEmoji = {
	name: string;
	roles?: Snowflake[];
};
