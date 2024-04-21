/**
 * @fileoverview This file defines the structure of an entitlement and the types of entitlements in the context of Discord's monetization API.
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#entitlement-resource}
 */

import type { Snowflake } from "../global";

/**
 * @typedef {object} EntitlementStructure
 * @description Enum for entitlement types.
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#entitlement-object-entitlement-structure}
 * @property
 */
export type EntitlementStructure = {
	application_id: Snowflake;
	deleted: boolean;
	ends_at?: string;
	guild_id?: Snowflake;
	id: Snowflake;
	sku_id: Snowflake;
	starts_at?: string;
	type: EntitlementTypes;
	user_id?: Snowflake;
};

//
/**
 * @enum {object}
 * @description Enum for entitlement types.
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#entitlement-object-entitlement-types}
 */
export enum EntitlementTypes {
	ApplicationSubscription = 8,
}
