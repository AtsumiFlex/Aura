/**
 * Role Object
 *
 * Represents a role in a guild.
 *
 * @see {@link https://discord.com/developers/docs/topics/permissions#role-object}
 */

import { z } from "zod";
import { Integer, Snowflake } from "../globals/formatters";

/**
 * Role Flags
 *
 * Flags that are present on a role.
 *
 * @see {@link https://discord.com/developers/docs/topics/permissions#role-object-role-flags}
 */
export enum RoleFlags {
	/**
	 * role can be selected by members in an onboarding prompt
	 */
	InPrompt = 1,
}

/**
 * Role Flags Enum
 *
 * Is a zod enum that represents the available {@link RoleFlags}.
 */
export const RoleFlagsEnum = z.nativeEnum(RoleFlags);

/**
 * Role Tags Structure
 *
 * Represents the tags of a role.
 *
 * @see {@link https://discord.com/developers/docs/topics/permissions#role-object-role-tags-structure}
 */
export const RoleTagsStructure = z.object({
	bot_id: Snowflake.optional(),
	integration_id: Snowflake.optional(),
	premium_subscriber: z.null().optional(),
	subscription_listing_id: Snowflake.optional(),
	available_for_purchase: z.null().optional(),
	guild_connections: z.null().optional(),
});

/**
 * Role Tags Structure Infer
 *
 * The inferred type of {@link RoleTagsStructure}
 */
export type RoleTagsStructureInfer = z.infer<typeof RoleTagsStructure>;

/**
 * Role Structure
 *
 * Represents a role.
 *
 * @see {@link https://discord.com/developers/docs/topics/permissions#role-object}
 */
export const RoleStructure = z.object({
	id: Snowflake,
	name: z.string(),
	color: Integer,
	hoist: z.boolean(),
	icon: z.string().nullable().optional(),
	unicode_emoji: z.string().nullable().optional(),
	position: Integer,
	permissions: z.string(),
	managed: z.boolean(),
	mentionable: z.boolean(),
	tags: RoleTagsStructure.optional(),
	flags: z.union([RoleFlagsEnum, z.bigint()]),
});

/**
 * Role Structure Infer
 *
 * The inferred type of {@link RoleStructure}
 */
export type RoleStructureInfer = z.infer<typeof RoleStructure>;
