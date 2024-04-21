/**
 * @fileoverview This file defines the SKU flags and types in the context of Discord's monetization API.
 * @see {@link https://discord.com/developers/docs/monetization/skus#sku-object-sku-flags}
 */

import type { Snowflake } from "../global";

/**
 * @typedef {object} SkuStructure
 * @description This type represents the structure of a SKU.
 * @see {@link https://discord.com/developers/docs/monetization/skus#sku-object-sku-structure}
 * @property
 */
export type SkuStructure = {
	application_id: Snowflake;
	flags: SkuFlags;
	id: Snowflake;
	name: string;
	slug: string;
	type: SkuTypes;
};

/**
 * @enum {number}
 * @description Enum for SKU types.
 * @see {@link https://discord.com/developers/docs/monetization/skus#sku-object-sku-types}
 */
export enum SkuTypes {
	Subscription = 5,
	SubscriptionGroup = 6,
}

/**
 * @enum {number}
 * @description Enum for SKU flags.
 * @see {@link https://discord.com/developers/docs/monetization/skus#sku-object-sku-flags}
 */
export enum SkuFlags {
	Available = 4,
	GuildSubscription = 128,
	UserSubscription = 256,
}
