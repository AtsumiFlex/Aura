import type { EntitlementStructureInfer, SnowflakeInfer } from "@aurajs/core";
import { Integer, Snowflake } from "@aurajs/core";
import { z } from "zod";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * Query Params List Entitlements
 *
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#list-entitlements}
 */
export const QueryParamsListEntitlements = z.object({
	/**
	 * User ID to look up entitlements for
	 */
	user_id: Snowflake.optional(),
	/**
	 * Optional list of SKU IDs to check entitlements for
	 */
	sku_ids: z.string().optional(),
	/**
	 * Retrieve entitlements before this entitlement ID
	 */
	before: Snowflake.optional(),
	/**
	 * Retrieve entitlements after this entitlement ID
	 */
	after: Snowflake.optional(),
	/**
	 * Number of entitlements to return, 1-100, default 100
	 */
	limit: Integer.min(1).max(100).optional(),
	/**
	 * Guild ID to look up entitlements for
	 */
	guild_id: Snowflake.optional(),
	/**
	 * Whether or not ended entitlements should be omitted
	 */
	exclude_ended: z.boolean().optional(),
});

/**
 * Query Params List Entitlements Infer
 *
 * Is used to infer the type of the {@link QueryParamsListEntitlements} object.
 */
export type QueryParamsListEntitlementsInfer = z.infer<typeof QueryParamsListEntitlements>;

/**
 * List Entitlements
 *
 * Returns all entitlements for a given app, active and expired.
 *
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#list-entitlements}
 */
export function ListEntitlements(applicationId: SnowflakeInfer, query?: QueryParamsListEntitlementsInfer): RestMakeRequestOptions<EntitlementStructureInfer[]> {
	return {
		method: "GET",
		path: `/applications/${Snowflake.parse(applicationId)}/entitlements`,
		query: QueryParamsListEntitlements.parse(query),
	};
}

/**
 * Consume an Entitlement
 *
 * For One-Time Purchase consumable SKUs, marks a given entitlement for the user as consumed. The entitlement will have consumed: true when using List Entitlements.
 *
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#consume-an-entitlement}
 */
export function ConsumeEntitlement(applicationId: SnowflakeInfer, entitlementId: SnowflakeInfer): RestMakeRequestOptions<void> {
	return {
		method: "POST",
		path: `/applications/${Snowflake.parse(applicationId)}/entitlements/${Snowflake.parse(entitlementId)}/consume`,
	};
}

/**
 * JSON Params Create Test Entitlement
 *
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#create-test-entitlement-json-params}
 */
export const JSONParamsCreateTestEntitlement = z.object({
	/**
	 * ID of the SKU to grant the entitlement to
	 */
	sku_id: z.string(),
	/**
	 * ID of the guild or user to grant the entitlement to
	 */
	owner_id: z.string(),
	/**
	 * 1 for a guild subscription, 2 for a user subscription
	 */
	owner_type: z.union([z.literal(1), z.literal(2)]),
});

/**
 * JSON Params Create Test Entitlement Infer
 *
 * Is used to infer the type of the {@link JSONParamsCreateTestEntitlement} object.
 */
export type JSONParamsCreateTestEntitlementInfer = z.infer<typeof JSONParamsCreateTestEntitlement>;

/**
 * Create Test Entitlement
 *
 * Creates a test entitlement for the current user.
 *
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#create-test-entitlement}
 */
export function CreateTestEntitlement(applicationId: SnowflakeInfer, json: JSONParamsCreateTestEntitlementInfer): RestMakeRequestOptions<void> {
	return {
		method: "POST",
		path: `/applications/${Snowflake.parse(applicationId)}/entitlements`,
		body: JSONParamsCreateTestEntitlement.parse(json),
	};
}

/**
 * Delete Test Entitlement
 *
 * Deletes a currently-active test entitlement. Discord will act as though that user or guild no longer has entitlement to your premium offering.
 *
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#delete-test-entitlement}
 */
export function DeleteTestEntitlement(applicationId: SnowflakeInfer, entitlementId: SnowflakeInfer): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/applications/${Snowflake.parse(applicationId)}/entitlements/${Snowflake.parse(entitlementId)}`,
	};
}

