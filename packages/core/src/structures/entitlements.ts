/**
 * Entitlement Resource
 *
 * Entitlements in Discord represent that a user or guild has access to a premium offering in your application.
 *
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#entitlement-resource}
 */

import { z } from "zod";
import { ISO8601, Snowflake } from "../globals/globals";

/**
 * Entitlement Types
 *
 * For entitlements, the type field will be either USER or GUILD. This field is used to differentiate between user and server entitlements.
 *
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#entitlement-object-entitlement-types}
 */
export enum EntitlementTypes {
	/**
	 * Entitlement was purchased by user
	 */
	Purchase = 1,
	/**
	 * Entitlement for Discord Nitro subscription
	 */
	PremiumSubscription = 2,
	/**
	 * Entitlement was gifted by developer
	 */
	DeveloperGift = 3,
	/**
	 * Entitlement was purchased by a dev in application test mode
	 */
	TestModePurchase = 4,
	/**
	 * Entitlement was granted when the SKU was free
	 */
	FreePurchase = 5,
	/**
	 * Entitlement was gifted by another user
	 */
	UserGift = 6,
	/**
	 * Entitlement was claimed by user for free as a Nitro Subscriber
	 */
	PremiumPurchase = 7,
	/**
	 * Entitlement was purchased as an app subscription
	 */
	ApplicationSubscription = 8,
}

/**
 * EntitlementTypesEnum is a zod enum that represents the entitlement types.
 */
export const EntitlementTypesEnum = z.nativeEnum(EntitlementTypes);

/**
 * Entitlement Structure
 *
 * Entitlements in Discord represent that a user or guild has access to a premium offering in your application.
 *
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#entitlement-object-entitlement-structure}
 */
export const EntitlementStructure = z.object({
	id: Snowflake,
	sku_id: Snowflake,
	application_id: Snowflake,
	user_id: Snowflake.optional(),
	type: EntitlementTypesEnum,
	deleted: z.boolean(),
	starts_at: ISO8601.optional(),
	ends_at: ISO8601.optional(),
	guild_id: Snowflake.optional(),
	consumed: z.boolean().optional(),
});

/**
 * Entitlement Structure Infer is the inferred type of the EntitlementStructure zod object.
 */
export type EntitlementStructureInfer = z.infer<typeof EntitlementStructure>;
