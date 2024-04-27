/**
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#entitlement-resource}
 */

import type { Integer, ISO8601Timestamp, Snowflake } from "../globals";

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
	type: EntitlementType;
	user_id?: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#entitlement-object-entitlement-types}
 */
export enum EntitlementType {
	Purchase = 1,
	PremiumSubscription = 2,
	DeveloperGift = 3,
	TestModePurchase = 4,
	FreePurchase = 5,
	UserGift = 6,
	PremiumPurchase = 7,
	ApplicationSubscription = 8,
}

/**
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#list-entitlements-query-params}
 */
export type ListEntitlementsQuery = {
	after?: Snowflake;
	before?: Snowflake;
	exclude_ended?: boolean;
	guild_id?: Snowflake;
	limit?: Integer;
	sku_ids?: string;
	user_id?: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#create-test-entitlement-json-params}
 */
export type JSONCreateTestEntitlement = {
	owner_id: string;
	owner_type: CreateTestEntitlementType;
	sku_id: string;
};

export enum CreateTestEntitlementType {
	GuildSubscription = 1,
	UserPremiumSubscription = 2,
}
