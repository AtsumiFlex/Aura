/**
 * SKU Resource
 *
 * SKUs (stock-keeping units) in Discord represent premium offerings that can be made available to your application's users or guilds.
 *
 * @see {@link https://discord.com/developers/docs/monetization/skus#sku-resource}
 */

import { z } from "zod";
import { Snowflake } from "../globals/formatters";

/**
 * SKU Flags
 *
 * For subscriptions, there are two types of access levels you can offer to users:
 *
 * - Guild Subscriptions: A subscription purchased by a user and applied to a single server. Everyone in that server gets your premium benefits.
 * - User Subscriptions: A subscription purchased by a user for themselves. They get access to your premium benefits in every server.
 *
 * The flags field can be used to differentiate user and server subscriptions with a bitwise && operator.
 *
 * @see {@link https://discord.com/developers/docs/monetization/skus#sku-object-sku-flags}
 */
export enum SKUFlags {
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
 * SKU Flags Enum
 *
 * Is a zod enum that represents the available {@link SKUFlags}.
 */
export const SKUFlagsEnum = z.nativeEnum(SKUFlags);

/**
 * SKU Types
 *
 * For subscriptions, SKUs will have a type of either `SUBSCRIPTION` represented by `type: 5` or `SUBSCRIPTION_GROUP` represented by `type:6`. For any current implementations, you will want to use the SKU defined by `type: 5`. A `SUBSCRIPTION_GROUP` is automatically created for each `SUBSCRIPTION` SKU and are not used at this time.
 *
 * @see {@link https://discord.com/developers/docs/monetization/skus#sku-object-sku-types}
 */
export enum SKUTypes {
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
 * SKU Types Enum
 *
 * Is a zod enum that represents the available {@link SKUTypes}.
 */
export const SKUTypesEnum = z.nativeEnum(SKUTypes);

/**
 * SKU Structure
 *
 * SKUs (stock-keeping units) in Discord represent premium offerings that can be made available to your application's users or guilds.
 *
 * @see {@link https://discord.com/developers/docs/monetization/skus#sku-object-sku-structure}
 */
export const SKUStructure = z.object({
	/**
	 * ID of SKU
	 */
	id: Snowflake,
	/**
	 * Type of SKU
	 *
	 * @see {@link SKUTypes}
	 */
	type: SKUTypesEnum,
	/**
	 * ID of the parent application
	 */
	application_id: Snowflake,
	/**
	 * Customer-facing name of your premium offering
	 */
	name: z.string(),
	/**
	 * System-generated URL slug based on the SKU's name
	 */
	slug: z.string(),
	/**
	 * SKU flags combined as a bitfield
	 *
	 * @see {@link SKUFlags}
	 * @see {@link https://en.wikipedia.org/wiki/Bit_field}
	 */
	flags: z.union([SKUFlagsEnum, z.bigint()]),
});

/**
 * SKU Structure Infer
 *
 * Is used to infer the type of the {@link SKUStructure} object.
 */
export type SKUStructureInfer = z.infer<typeof SKUStructure>;
