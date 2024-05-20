import { z } from "zod";
import { ISO8601Timestamp, Snowflake } from "../globals/formats";

/**
 * Enum representing entitlement types.
 *
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#entitlement-object-entitlement-types}
 */
export enum EntitlementTypes {
	/**
	 * Entitlement was purchased by the user.
	 */
	Purchase = 1,
	/**
	 * Entitlement for Discord Nitro subscription.
	 */
	PremiumSubscription = 2,
	/**
	 * Entitlement was gifted by the developer.
	 */
	DeveloperGift = 3,
	/**
	 * Entitlement was purchased by a developer in application test mode.
	 */
	TestModePurchase = 4,
	/**
	 * Entitlement was granted when the SKU was free.
	 */
	FreePurchase = 5,
	/**
	 * Entitlement was gifted by another user.
	 */
	UserGift = 6,
	/**
	 * Entitlement was claimed by the user for free as a Nitro Subscriber.
	 */
	PremiumPurchase = 7,
	/**
	 * Entitlement was purchased as an app subscription.
	 */
	ApplicationSubscription = 8,
}

/**
 * Zod schema for validating {@link EntitlementTypes}.
 *
 * @example
 * ```typescript
 * EntitlementTypesEnum.parse(EntitlementTypes.Purchase); // Valid
 * EntitlementTypesEnum.parse(9); // Throws an error
 * ```
 */
export const EntitlementTypesEnum = z.nativeEnum(EntitlementTypes);

/**
 * Schema for validating the structure of an entitlement.
 *
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#entitlement-object-entitlement-structure}
 */
export const EntitlementStructure = z.object({
	/**
	 * ID of the entitlement.
	 *
	 * @example
	 * ```typescript
	 * const entitlementId = "123456789012345678";
	 * ```
	 */
	id: Snowflake,
	/**
	 * ID of the SKU.
	 *
	 * @example
	 * ```typescript
	 * const skuId = "987654321098765432";
	 * ```
	 */
	sku_id: Snowflake,
	/**
	 * ID of the parent application.
	 *
	 * @example
	 * ```typescript
	 * const applicationId = "123456789012345678";
	 * ```
	 */
	application_id: Snowflake,
	/**
	 * ID of the user that is granted access to the entitlement's SKU.
	 *
	 * @example
	 * ```typescript
	 * const userId = "876543210987654321";
	 * ```
	 */
	user_id: Snowflake.optional(),
	/**
	 * Type of entitlement.
	 *
	 * @example
	 * ```typescript
	 * const entitlementType = EntitlementTypes.Purchase;
	 * ```
	 */
	type: EntitlementTypesEnum,
	/**
	 * Whether the entitlement was deleted.
	 *
	 * @example
	 * ```typescript
	 * const isDeleted = false;
	 * ```
	 */
	deleted: z.boolean(),
	/**
	 * Start date at which the entitlement is valid. Not present when using test entitlements.
	 *
	 * @example
	 * ```typescript
	 * const startsAt = "2023-01-01T00:00:00Z";
	 * ```
	 */
	starts_at: ISO8601Timestamp.optional(),
	/**
	 * Date at which the entitlement is no longer valid. Not present when using test entitlements.
	 *
	 * @example
	 * ```typescript
	 * const endsAt = "2024-01-01T00:00:00Z";
	 * ```
	 */
	ends_at: ISO8601Timestamp.optional(),
	/**
	 * ID of the guild that is granted access to the entitlement's SKU.
	 *
	 * @example
	 * ```typescript
	 * const guildId = "123456789012345678";
	 * ```
	 */
	guild_id: Snowflake.optional(),
	/**
	 * For consumable items, whether or not the entitlement has been consumed.
	 *
	 * @example
	 * ```typescript
	 * const isConsumed = true;
	 * ```
	 */
	consumed: z.boolean().optional(),
});

/**
 * The type of the {@link EntitlementStructure} schema.
 */
export type EntitlementStructureInfer = z.infer<typeof EntitlementStructure>;
