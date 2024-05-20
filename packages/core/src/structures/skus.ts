import { z } from "zod";
import { Snowflake } from "../globals/formats";

/**
 * Enum representing SKU flags.
 *
 * @see {@link https://discord.com/developers/docs/monetization/skus#sku-object-sku-flags}
 */
export enum SkuFlags {
	/**
	 * SKU is available for purchase.
	 */
	Available = 4,
	/**
	 * Recurring SKU that can be purchased by a user and applied to a single server. Grants access to every user in that server.
	 */
	GuildSubscription = 128,
	/**
	 * Recurring SKU purchased by a user for themselves. Grants access to the purchasing user in every server.
	 */
	UserSubscription = 256,
}

/**
 * Zod schema for validating {@link SkuFlags}.
 *
 * @example
 * ```typescript
 * SkuFlagsEnum.parse(SkuFlags.Available); // Valid
 * SkuFlagsEnum.parse(2); // Throws an error
 * ```
 */
export const SkuFlagsEnum = z.nativeEnum(SkuFlags);

/**
 * Enum representing SKU types.
 *
 * @see {@link https://discord.com/developers/docs/monetization/skus#sku-object-sku-types}
 */
export enum SkuTypes {
	/**
	 * Durable one-time purchase.
	 */
	Durable = 2,
	/**
	 * Consumable one-time purchase.
	 */
	Consumable = 3,
	/**
	 * Represents a recurring subscription.
	 */
	Subscription = 5,
	/**
	 * System-generated group for each SUBSCRIPTION SKU created.
	 */
	SubscriptionGroup = 6,
}

/**
 * Zod schema for validating {@link SkuTypes}.
 *
 * @example
 * ```typescript
 * SkuTypesEnum.parse(SkuTypes.Durable); // Valid
 * SkuTypesEnum.parse(4); // Throws an error
 * ```
 */
export const SkuTypesEnum = z.nativeEnum(SkuTypes);

/**
 * Schema for validating SKU structure.
 *
 * @see {@link https://discord.com/developers/docs/monetization/skus#sku-object-sku-structure}
 */
export const SkuStructure = z.object({
	/**
	 * ID of SKU.
	 *
	 * @example
	 * ```typescript
	 * const skuId = "123456789012345678";
	 * ```
	 */
	id: Snowflake,
	/**
	 * Type of SKU.
	 *
	 * @example
	 * ```typescript
	 * const skuType = SkuTypes.Durable;
	 * ```
	 */
	type: SkuTypesEnum,
	/**
	 * ID of the parent application.
	 *
	 * @example
	 * ```typescript
	 * const applicationId = "987654321098765432";
	 * ```
	 */
	application_id: Snowflake,
	/**
	 * Customer-facing name of your premium offering.
	 *
	 * @example
	 * ```typescript
	 * const skuName = "Premium Membership";
	 * ```
	 */
	name: z.string(),
	/**
	 * System-generated URL slug based on the SKU's name.
	 *
	 * @example
	 * ```typescript
	 * const skuSlug = "premium-membership";
	 * ```
	 */
	slug: z.string(),
	/**
	 * SKU flags combined as a bitfield.
	 *
	 * @example
	 * ```typescript
	 * const skuFlags = SkuFlags.Available | SkuFlags.UserSubscription;
	 * ```
	 */
	flags: z.union([SkuFlagsEnum, z.bigint()]),
});

/**
 * The type of the {@link SkuStructure} schema.
 */
export type SkuStructureInfer = z.infer<typeof SkuStructure>;
