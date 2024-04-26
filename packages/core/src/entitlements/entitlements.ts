import type { ISO8601Timestamp, Snowflake } from "../base/base";

/**
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#entitlement-object-entitlement-structure}
 */
export type EntitlementStructure = {
	application_id: Snowflake;
	consumed?: boolean;
	deleted: boolean;
	ends_at?: ISO8601Timestamp;
	guild_id?: Snowflake;
	id: Snowflake;
	sku_id: Snowflake;
	starts_at?: ISO8601Timestamp;
	type: EntitlementTypes;
	user_id?: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#entitlement-object-entitlement-types}
 */
export enum EntitlementTypes {
	Purchase = 1,
	PremiumSubscription = 2,
	DeveloperGift = 3,
	TestModePurchase = 4,
	FreePurchase = 5,
	UserGift = 6,
	PremiumPurchase = 7,
	ApplicationSubscription = 8,
}
