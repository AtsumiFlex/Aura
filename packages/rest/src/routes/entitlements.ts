import type { SnowflakeInfer } from "@aurajs/core";
import { Snowflake } from "@aurajs/core";
import { z } from "zod";
import type { RestRequestOptions } from "../globals/rest";

/**
 * Query List Entitlements
 *
 * @see {@link https://discord.com/developers/docs/resources/entitlement#get-entitlements-query-string-params}
 */
export const QueryListEntitlements = z.object({
	user_id: Snowflake.nullable().optional(),
	sku_ids: z.string().optional(),
	before: Snowflake.nullable().optional(),
	after: Snowflake.nullable().optional(),
	limit: z.number().int().min(1).max(100).default(100).optional(),
	guild_id: Snowflake.nullable().optional(),
	exclude_ended: z.boolean().optional(),
});

/**
 * Query List Entitlements Infer
 *
 * Is the inferred type of the {@link QueryListEntitlements} zod object.
 */
export type QueryListEntitlementsInfer = z.infer<typeof QueryListEntitlements>;

/**
 * List Entitlements
 *
 * Returns a list of entitlements for a user.
 *
 * @see {@link https://discord.com/developers/docs/resources/entitlement#get-entitlements}
 */
export function ListEntitlements<T>(applicationId: SnowflakeInfer, query?: QueryListEntitlementsInfer): RestRequestOptions<T> {
	return {
		url: `/applications/${applicationId}/entitlements`,
		method: "GET",
		query: QueryListEntitlements.parse(query),
	};
}

/**
 * Consume an Entitlement
 *
 * Consume an entitlement.
 *
 * @see {@link https://discord.com/developers/docs/resources/entitlement#consume-entitlement}
 */
export function ConsumeEntitlement(applicationId: SnowflakeInfer, entitlementId: SnowflakeInfer): RestRequestOptions<void> {
	return {
		url: `/applications/${applicationId}/entitlements/${entitlementId}/consume`,
		method: "POST",
	};
}

/**
 * JSON Create Test Entitlement Owner Types
 */
export enum JSONCreateTestEntitlementOwnerTypes {
	Guild = 1,
	User = 2,
}

/**
 * JSON Create Test Entitlement Owner Types Enum
 *
 * Is the inferred type of the {@link JSONCreateTestEntitlementOwnerTypes} enum.
 */
export const JSONCreateTestEntitlementOwnerTypesEnum = z.nativeEnum(JSONCreateTestEntitlementOwnerTypes);

/**
 * JSON Create Test Entitlement
 *
 * @see {@link https://discord.com/developers/docs/resources/entitlement#create-test-entitlement-json-params}
 */
export const JSONCreateTestEntitlement = z.object({
	sku_id: z.string(),
	owner_id: z.string(),
	owner_type: JSONCreateTestEntitlementOwnerTypesEnum,
});

/**
 * JSON Create Test Entitlement Infer
 *
 * Is the inferred type of the {@link JSONCreateTestEntitlement} zod object.
 */
export type JSONCreateTestEntitlementInfer = z.infer<typeof JSONCreateTestEntitlement>;

/**
 * Create Test Entitlement
 *
 * Create a test entitlement.
 *
 * @see {@link https://discord.com/developers/docs/resources/entitlement#create-test-entitlement}
 */
export function CreateTestEntitlement<T>(applicationId: SnowflakeInfer, json: JSONCreateTestEntitlementInfer): RestRequestOptions<T> {
	return {
		url: `/applications/${applicationId}/entitlements`,
		method: "POST",
		body: JSONCreateTestEntitlement.parse(json),
	};
}

/**
 * Delete Test Entitlement
 *
 * Delete a test entitlement.
 *
 * @see {@link https://discord.com/developers/docs/resources/entitlement#delete-test-entitlement}
 */
export function DeleteTestEntitlement(applicationId: SnowflakeInfer, entitlementId: SnowflakeInfer): RestRequestOptions<void> {
	return {
		url: `/applications/${applicationId}/entitlements/${entitlementId}`,
		method: "DELETE",
	};
}
