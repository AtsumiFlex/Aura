/**
 * Entitlement Resource
 *
 * Entitlements in Discord represent that a user or guild has access to a premium offering in your application.
 *
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#entitlement-resource}
 */

import { z } from "zod";
import { ISO8601Timestamp, Snowflake } from "../globals/formatters";

/**
 * Entitlement Types
 *
 * For subscriptions, entitlements will have a type of either SUBSCRIPTION represented by type: 1 or SUBSCRIPTION_GROUP represented by type: 2. For any current implementations, you will want to use the entitlement defined by type: 1. A SUBSCRIPTION_GROUP is automatically created for each SUBSCRIPTION entitlement and are not used at this time.
 *
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#entitlement-types}
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
 * Entitlement Types Enum
 *
 * Is a zod enum that represents the available {@link EntitlementTypes}.
 */
export const EntitlementTypesEnum = z.nativeEnum(EntitlementTypes);

/**
 * Entitlement Structure
 *
 * The entitlement object represents a user or guild's access to a premium offering in your application.
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
	starts_at: ISO8601Timestamp.optional(),
	ends_at: ISO8601Timestamp.optional(),
	guild_id: Snowflake.optional(),
	consumed: z.boolean().optional(),
});

/**
 * Entitlement Structure Infer
 *
 * Is used to infer the type of the {@link EntitlementStructure} object.
 */
export type EntitlementStructureInfer = z.infer<typeof EntitlementStructure>;
