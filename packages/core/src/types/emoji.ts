// https://discord.com/developers/docs/resources/emoji#emoji-resource
import type { RoleStructure } from "@aurajs/permissions";
import type { Snowflake } from "./global";
import type { UserStructure } from "./user";

// https://discord.com/developers/docs/resources/emoji#emoji-object-emoji-structure
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
