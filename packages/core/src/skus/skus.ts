import type { Snowflake } from "../base/base";

/**
 * @see {@link https://discord.com/developers/docs/monetization/skus#sku-object-sku-structure}
 */
export type SKUStructure = {
	application_id: Snowflake;
	flags: SKUFlags;
	id: Snowflake;
	name: string;
	slug: string;
	type: SKUTypes;
};

/**
 * @see {@link https://discord.com/developers/docs/monetization/skus#sku-object-sku-types}
 */
export enum SKUTypes {
	Durable = 2,
	Consumable = 3,
	Subscription = 5,
	SubscriptionGroup = 6,
}

/**
 * @see {@link https://discord.com/developers/docs/monetization/skus#sku-object-sku-flags}
 */
export enum SKUFlags {
	Available = 4,
	GuildSubscription = 128,
	UserSubscription = 256,
}
