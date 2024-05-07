import type { EntitlementStructureInfer, SnowflakeInfer } from "@aurajs/core";
import { Integer, Snowflake } from "@aurajs/core";
import { z } from "zod";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * Query List Entitlements
 *
 * Query parameters for the List Entitlements endpoint.
 *
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#list-entitlements-query-string-params}
 */
export const QueryListEntitlements = z.object({
	user_id: Snowflake.optional(),
	sku_ids: z.array(Snowflake).transform((snowflakes) => snowflakes.join(",")).optional(),
	before: Snowflake.optional(),
	after: Snowflake.optional(),
	limit: Integer.optional(),
	guild_id: Snowflake.optional(),
	exclude_ended: z.boolean().optional(),
});

/**
 * Query List Entitlements Infer
 *
 * The inferred type of {@link QueryListEntitlements}
 */
export type QueryListEntitlementsInfer = z.infer<typeof QueryListEntitlements>;

/**
 * List Entitlements
 *
 * Returns all entitlements for a given app, active and expired.
 *
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#list-entitlements}
 */
export function ListEntitlements<T extends EntitlementStructureInfer[]>(applicationId: SnowflakeInfer, query?: QueryListEntitlementsInfer): RestMakeRequestOptions<T> {
	return {
		method: "GET",
		url: `/applications/${applicationId}/entitlements`,
		query: QueryListEntitlements.parse(query),
	};
}

/**
 * Consume an Entitlement
 *
 * Consumes an entitlement for a given user.
 *
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#consume-entitlement}
 */
export function ConsumeEntitlement<T extends void>(applicationId: SnowflakeInfer, entitlementId: SnowflakeInfer): RestMakeRequestOptions<T> {
	return {
		method: "POST",
		url: `/applications/${applicationId}/entitlements/${entitlementId}/consume`,
	};
}

/**
 * JSON Create Test Entitlement
 *
 * JSON body for the Create Test Entitlement endpoint.
 *
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#create-test-entitlement-json-params}
 */
export const JSONCreateTestEntitlement = z.object({
	sku_id: z.string(),
	owner_id: z.string(),
	owner_type: z.union([z.literal(1), z.literal(2)]),
});

/**
 * JSON Create Test Entitlement Infer
 *
 * The inferred type of {@link JSONCreateTestEntitlement}
 */
export type JSONCreateTestEntitlementInfer = z.infer<typeof JSONCreateTestEntitlement>;

/**
 * Create Test Entitlement
 *
 * Creates a test entitlement for a given user.
 *
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#create-test-entitlement}
 */
export function CreateTestEntitlement<T extends void>(applicationId: SnowflakeInfer, json: JSONCreateTestEntitlementInfer): RestMakeRequestOptions<T> {
	return {
		method: "POST",
		url: `/applications/${applicationId}/entitlements`,
		body: JSONCreateTestEntitlement.parse(json),
	};
}

/**
 * Delete Test Entitlement
 *
 * Deletes a test entitlement for a given user.
 *
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#delete-test-entitlement}
 */
export function DeleteTestEntitlement<T extends void>(applicationId: SnowflakeInfer, entitlementId: SnowflakeInfer): RestMakeRequestOptions<T> {
	return {
		method: "DELETE",
		url: `/applications/${applicationId}/entitlements/${entitlementId}`,
	};
}
