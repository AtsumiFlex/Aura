/**
 * @see {@link https://discord.com/developers/docs/topics/permissions#role-object}
 */

import type { Integer, Snowflake } from "../globals";

/**
 * @see {@link https://discord.com/developers/docs/topics/permissions#role-object-role-structure}
 */
export type RoleStructure = {
	color: Integer;
	flags: RoleFlags;
	hoist: boolean;
	icon?: NonNullable<string>;
	id: Snowflake;
	managed: boolean;
	mentionable: boolean;
	name: string;
	permissions: string;
	position: Integer;
	tags?: RoleTagsStructure;
	unicode_emoji?: NonNullable<string>;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/permissions#role-object-role-tags-structure}
 */
export type RoleTagsStructure = {
	available_for_purchase?: null;
	bot_id?: Snowflake;
	guild_connections?: null;
	integration_id?: Snowflake;
	premium_subscriber?: null;
	subscription_listing_id?: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/permissions#role-object-role-flags}
 */
export enum RoleFlags {
	InPrompt = 1,
}
