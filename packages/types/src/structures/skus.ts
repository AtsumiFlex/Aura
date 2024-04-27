/**
 * @see {@link https://discord.com/developers/docs/monetization/skus#sku-resource}
 */

/**
 * @see {@link https://discord.com/developers/docs/monetization/skus#sku-object-sku-structure}
 */
export type SkuStructure = {
	application_id: string;
	flags: SkuFlags;
	id: string;
	name: string;
	slug: string;
	type: SkuTypes;
};

/**
 * @see {@link https://discord.com/developers/docs/monetization/skus#sku-object-sku-types}
 */
export enum SkuTypes {
	Durable = 2,
	Consumable = 3,
	Subscription = 5,
	SubscriptionGroup = 6,
}

/**
 * @see {@link https://discord.com/developers/docs/monetization/skus#sku-object-sku-flags}
 */
export enum SkuFlags {
	Available = 4,
	GuildSubscription = 128,
	UserSubscription = 256,
}
