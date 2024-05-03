import { z } from "zod";
import { Integer, Snowflake } from "../globals/globals";

/**
 * Role Flags
 *
 * @see {@link https://discord.com/developers/docs/topics/permissions#role-object-role-flags}
 */
export enum RoleFlags {
	/**
	 * Role can be selected by members in an onboarding prompt
	 */
	InPrompt = 1,
}

/**
 * Role Flags Enum is a zod enum that represents the role flags.
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
	bot_id: Snowflake.optional(),
	integration_id: Snowflake.optional(),
	premium_subscriber: z.null().optional(),
	subscription_listing_id: Snowflake.optional(),
	available_for_purchase: z.null().optional(),
	guild_connections: z.null().optional(),
});

/**
 * Role Tags Structure Infer is the inferred type of the RoleTagsStructure zod object.
 */
export type RoleTagsStructureInfer = z.infer<typeof RoleTagsStructure>;

/**
 * Role Structure
 *
 * Roles represent a set of permissions attached to a group of users. Roles have names, colors, and can be "pinned" to the side bar, causing their members to be listed separately. Roles can have separate permission profiles for the global context (guild) and channel context. The @everyone role has the same ID as the guild it belongs to.
 *
 * @see {@link https://discord.com/developers/docs/topics/permissions#role-object}
 */
export const RoleStructure = z.object({
	id: Snowflake,
	name: z.string(),
	color: Integer,
	hoist: z.boolean(),
	icon: z.string().optional().nullable(),
	unicode_emoji: z.string().optional().nullable(),
	position: Integer,
	permissions: z.string(),
	managed: z.boolean(),
	mentionable: z.boolean(),
	tags: RoleTagsStructure.optional(),
	flags: RoleFlagsEnum,
});

/**
 * Role Structure Infer is the inferred type of the RoleStructure zod object.
 */
export type RoleStructureInfer = z.infer<typeof RoleStructure>;
