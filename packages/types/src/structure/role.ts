import { z } from "zod";
import { Integer, Snowflake } from "../globals";

export enum RoleFlags {
	IN_PROMPT = 1,
}

export const RoleFlagsEnum = z.nativeEnum(RoleFlags);

export const RoleTagsStructure = z.object({
	bot_id: Snowflake.optional(),
	integration_id: Snowflake.optional(),
	premium_subscriber: z.null().optional(),
	subscription_listing_id: Snowflake.optional(),
	available_for_purchase: z.null().optional(),
	guild_connections: z.null().optional(),
});
export type RoleTagsInfer = z.infer<typeof RoleTagsStructure>;

export const RoleStructure = z.object({
	id: Snowflake,
	name: z.string(),
	color: z.number(),
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
export type RoleInfer = z.infer<typeof RoleStructure>;
