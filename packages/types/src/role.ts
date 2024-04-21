// https://discord.com/developers/docs/topics/permissions#role-object
import type { Integer, Snowflake } from "./global";

// https://discord.com/developers/docs/topics/permissions#role-object-role-structure
export type RoleStructure = {
	color: Integer;
	flags: RoleFlags;
	hoist: boolean;
	icon?: string | null;
	id: Snowflake;
	managed: boolean;
	mentionable: boolean;
	name: string;
	permissions: string;
	position: Integer;
	tags?: RoleTagsStructure;
	unicode_emoji?: string | null;
};

// https://discord.com/developers/docs/topics/permissions#role-object-role-tags-structure
export type RoleTagsStructure = {
	available_for_purchase?: null;
	bot_id?: Snowflake;
	guild_connections?: null;
	integration_id?: Snowflake;
	premium_subscriber?: null;
	subscription_listing_id?: Snowflake;
};

// https://discord.com/developers/docs/topics/permissions#role-object-role-flags
export enum RoleFlags {
	InPrompt = 1,
}
