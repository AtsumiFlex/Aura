/**
 * Role Object
 *
 * Roles represent a set of permissions attached to a group of users. Roles have names, colors, and can be "pinned" to the side bar, causing their members to be listed separately. Roles can have separate permission profiles for the global context (guild) and channel context. The @everyone role has the same ID as the guild it belongs to.
 *
 * @see {@link https://discord.com/developers/docs/topics/permissions#role-object}
 */

import { z } from "zod";
import { Integer, Snowflake } from "../globals/formatters";

/**
 * Role Flags
 *
 * @see {@link https://discord.com/developers/docs/topics/permissions#role-object-role-flags}
 */
export enum RoleFlags {
	/**
	 * Role can be selected by members in an onboarding prompt
	 */
	InProgress = 1,
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
 * Tags with type null represent booleans. They will be present and set to null if they are "true", and will be not present if they are "false".
 *
 * @see {@link https://discord.com/developers/docs/topics/permissions#role-object-role-tags-structure}
 */
export const RoleTagsStructure = z.object({
	/**
	 * The id of the bot this role belongs to
	 */
	bot_id: Snowflake.optional(),
	/**
	 * The id of the integration this role belongs to
	 */
	integration_id: Snowflake.optional(),
	/**
	 * Whether this is the guild's Booster role
	 */
	premium_subscriber: z.null().optional(),
	/**
	 * The id of this role's subscription sku and listing
	 */
	subscription_listing_id: Snowflake.optional(),
	/**
	 * Whether this role is available for purchase
	 */
	available_for_purchase: z.null().optional(),
	/**
	 * Whether this role is a guild's linked role
	 */
	guild_connections: z.null().optional(),
});

/**
 * Role Tags Structure Infer
 *
 * The inferred zod object from {@link RoleTagsStructure}
 */
export type RoleTagsStructureInfer = z.infer<typeof RoleTagsStructure>;

/**
 * Role Structure
 *
 * @see {@link https://discord.com/developers/docs/topics/permissions#role-object-role-structure}
 */
export const RoleStructure = z.object({
	/**
	 * ID of the role
	 */
	id: Snowflake,
	/**
	 * Role name
	 */
	name: z.string(),
	/**
	 * Integer representation of hexadecimal color code
	 */
	color: Integer,
	/**
	 * If this role is pinned in the user listing
	 */
	hoist: z.boolean(),
	/**
	 * Role icon hash
	 */
	icon: z.string().optional().nullable(),
	/**
	 * Role unicode emoji
	 */
	unicode_emoji: z.string().optional().nullable(),
	/**
	 * Position of this role
	 */
	position: Integer,
	/**
	 * Permission bit set
	 */
	permissions: z.string(),
	/**
	 * Whether this role is managed by an integration
	 */
	managed: z.boolean(),
	/**
	 * Whether this role is mentionable
	 */
	mentionable: z.boolean(),
	/**
	 * The tags this role has
	 */
	tags: RoleTagsStructure.optional(),
	/**
	 * Role flags combined as a bitfield
	 */
	flags: z.union([RoleFlagsEnum, z.bigint()]),
});

/**
 * Role Structure Infer
 *
 * The inferred zod object from {@link RoleStructure}
 */
export type RoleStructureInfer = z.infer<typeof RoleStructure>;
