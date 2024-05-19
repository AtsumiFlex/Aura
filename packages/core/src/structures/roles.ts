import { z } from "zod";
import { Integer, Snowflake } from "../globals/formats";

/**
 * Enum representing the different role flags for a Discord role.
 *
 * @see {@link https://discord.com/developers/docs/topics/permissions#role-object-role-flags}
 */
export enum RoleFlags {
	/**
	 * Role can be selected by members in an onboarding prompt.
	 */
	InPrompt = 1,
}

/**
 * Zod schema for validating {@link RoleFlags}.
 *
 * @example
 * ```typescript
 * RoleFlagsEnum.parse(RoleFlags.InPrompt); // Valid
 * RoleFlagsEnum.parse(2); // Throws an error
 * ```
 */
export const RoleFlagsEnum = z.nativeEnum(RoleFlags);

/**
 * Schema for validating Role Tags Structure.
 *
 * @see {@link https://discord.com/developers/docs/topics/permissions#role-object-role-tags-structure}
 */
export const RoleTagsStructure = z.object({
	/**
	 * The ID of the bot this role belongs to.
	 */
	bot_id: Snowflake.optional(),
	/**
	 * The ID of the integration this role belongs to.
	 */
	integration_id: Snowflake.optional(),
	/**
	 * Whether this is the guild's Booster role.
	 */
	premium_subscriber: z.null().optional(),
	/**
	 * The ID of this role's subscription SKU and listing.
	 */
	subscription_listing_id: Snowflake.optional(),
	/**
	 * Whether this role is available for purchase.
	 */
	available_for_purchase: z.null().optional(),
	/**
	 * Whether this role is a guild's linked role.
	 */
	guild_connections: z.null().optional(),
});

/**
 * The type of the {@link RoleTagsStructure} schema.
 */
export type RoleTagsStructureInfer = z.infer<typeof RoleTagsStructure>;

/**
 * Schema for validating Role Structure.
 *
 * @see {@link https://discord.com/developers/docs/topics/permissions#role-object-role-structure}
 */
export const RoleStructure = z.object({
	/**
	 * The role's ID.
	 *
	 * @remarks
	 * The unique identifier for the role.
	 * @example
	 * ```typescript
	 * const roleId = "123456789012345678";
	 * ```
	 */
	id: Snowflake,
	/**
	 * The role's name.
	 *
	 * @remarks
	 * The name of the role.
	 * @example
	 * ```typescript
	 * const roleName = "Admin";
	 * ```
	 */
	name: z.string(),
	/**
	 * The role's color.
	 *
	 * @remarks
	 * The color of the role, represented as an integer.
	 * @example
	 * ```typescript
	 * const roleColor = 0xFF5733;
	 * ```
	 */
	color: Integer,
	/**
	 * Whether this role is pinned in the user listing.
	 *
	 * @remarks
	 * Indicates if the role is pinned in the user listing.
	 * @example
	 * ```typescript
	 * const isHoisted = true;
	 * ```
	 */
	hoist: z.boolean(),
	/**
	 * The role icon hash.
	 *
	 * @remarks
	 * The hash of the role's icon.
	 * @example
	 * ```typescript
	 * const iconHash = "a_1234567890abcdef1234567890abcdef";
	 * ```
	 */
	icon: z.string().optional().nullable(),
	/**
	 * The role's unicode emoji.
	 *
	 * @remarks
	 * The unicode emoji for the role.
	 * @example
	 * ```typescript
	 * const unicodeEmoji = "😀";
	 * ```
	 */
	unicode_emoji: z.string().optional().nullable(),
	/**
	 * The role's position.
	 *
	 * @remarks
	 * The position of the role in the role list.
	 * @example
	 * ```typescript
	 * const rolePosition = 1;
	 * ```
	 */
	position: Integer,
	/**
	 * The role's permissions.
	 *
	 * @remarks
	 * The permissions granted by the role, represented as a bit set.
	 * @example
	 * ```typescript
	 * const rolePermissions = "104188992";
	 * ```
	 */
	permissions: z.string(),
	/**
	 * Whether this role is managed by an integration.
	 *
	 * @remarks
	 * Indicates if the role is managed by an integration.
	 * @example
	 * ```typescript
	 * const isManaged = false;
	 * ```
	 */
	managed: z.boolean(),
	/**
	 * Whether this role is mentionable.
	 *
	 * @remarks
	 * Indicates if the role can be mentioned.
	 * @example
	 * ```typescript
	 * const isMentionable = true;
	 * ```
	 */
	mentionable: z.boolean(),
	/**
	 * The role tags.
	 *
	 * @remarks
	 * Additional tags for the role, such as the ID of the bot or integration that the role belongs to.
	 * @example
	 * ```typescript
	 * const roleTags = { bot_id: "123456789012345678" };
	 * ```
	 */
	tags: RoleTagsStructure.optional(),
	/**
	 * The role flags.
	 *
	 * @remarks
	 * Flags for the role, indicating additional properties like if the role can be selected in an onboarding prompt.
	 * @example
	 * ```typescript
	 * const roleFlags = RoleFlags.InPrompt;
	 * ```
	 */
	flags: z.union([RoleFlagsEnum, z.bigint()]),
});

/**
 * Type representing the structure of a Role object as defined by the Discord API.
 *
 * This type is inferred from the {@link RoleStructure} schema and includes details
 * about the role such as its ID, name, color, permissions, and various properties
 * like whether it's managed, mentionable, or hoisted in the user listing.
 *
 * @example
 * ```typescript
 * const role: RoleStructureInfer = {
 *   id: "123456789012345678",
 *   name: "Admin",
 *   color: 0xFF5733,
 *   hoist: true,
 *   icon: null,
 *   unicode_emoji: "😀",
 *   position: 1,
 *   permissions: "104188992",
 *   managed: false,
 *   mentionable: true,
 *   tags: { bot_id: "987654321098765432" },
 *   flags: RoleFlags.InPrompt,
 * };
 * ```
 */
export type RoleStructureInfer = z.infer<typeof RoleStructure>;
