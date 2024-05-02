/**
 * SKU Resource
 *
 * SKUs (stock-keeping units) in Discord represent premium offerings that can be made available to your application's users or guilds.
 *
 * @see {@link https://discord.com/developers/docs/monetization/skus#sku-resource}
 */

import { z } from "zod";
import { Snowflake } from "../globals/globals";

/**
 * SKU Flags
 *
 * For subscriptions, there are two types of access levels you can offer to users:
 * Guild Subscriptions: A subscription purchased by a user and applied to a single server. Everyone in that server gets your premium benefits.
 * User Subscriptions: A subscription purchased by a user for themselves. They get access to your premium benefits in every server.
 * The flags field can be used to differentiate user and server subscriptions with a bitwise && operator.
 *
 * @see {@link https://discord.com/developers/docs/monetization/skus#sku-object-sku-flags}
 */
export enum SkuFlags {
	/**
	 * SKU is available for purchase
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
 * SkuFlagsEnum is a zod enum that represents the SKU flags.
 */
export const SkuFlagsEnum = z.nativeEnum(SkuFlags);

/**
 * SKU Types
 *
 * For subscriptions, SKUs will have a type of either SUBSCRIPTION represented by type: 5 or SUBSCRIPTION_GROUP represented by type:6. For any current implementations, you will want to use the SKU defined by type: 5. A SUBSCRIPTION_GROUP is automatically created for each SUBSCRIPTION SKU and are not used at this time.
 *
 * @see {@link https://discord.com/developers/docs/monetization/skus#sku-object-sku-types}
 */
export enum SkuTypes {
	/**
	 * Durable one-time purchase
	 */
	Durable = 2,
	/**
	 * Consumable one-time purchase
	 */
	Consumable = 3,
	/**
	 * Represents a recurring subscription
	 */
	Subscription = 5,
	/**
	 * System-generated group for each SUBSCRIPTION SKU created
	 */
	SubscriptionGroup = 6,
}

/**
 * SkuTypesEnum is a zod enum that represents the SKU types.
 */
export const SkuTypesEnum = z.nativeEnum(SkuTypes);

/**
 * SKU Structure
 *
 * SKUs (stock-keeping units) in Discord represent premium offerings that can be made available to your application's users or guilds.
 *
 * @see {@link https://discord.com/developers/docs/monetization/skus#sku-object-sku-structure}
 */
export const SkuStructure = z.object({
	id: Snowflake,
	type: SkuTypesEnum,
	application_id: Snowflake,
	name: z.string(),
	slug: z.string(),
	flags: SkuFlagsEnum,
});

/**
 * SKU Structure Infer is the inferred type of the SkuStructure zod object.
 */
export type SkuStructureInfer = z.infer<typeof SkuStructure>;
