import type { Integer, Snowflake } from "../base/base";

/**
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#list-entitlements}
 */
export type QUERYListEntitlements = {
	after?: Snowflake;
	before?: Snowflake;
	exclude_ended?: boolean;
	guild_id?: Snowflake;
	limit?: Integer;
	sku_ids?: Snowflake[];
	user_id?: Snowflake;
};

export function ListEntitlements(applicationId: Snowflake, query: QUERYListEntitlements) {
	return {
		method: "GET",
		path: `/applications/${applicationId}/entitlements`,
		query,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#consume-an-entitlement}
 */
export function ConsumeEntitlement(applicationId: Snowflake, entitlementId: Snowflake) {
	return {
		method: "POST",
		path: `/applications/${applicationId}/entitlements/${entitlementId}/consume`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#create-test-entitlement}
 */
export type JSONCreateTestEntitlement = {
	owner_id: string;
	owner_type: Integer;
	sku_id: string;
};

export function CreateTestEntitlement(applicationId: Snowflake, json: JSONCreateTestEntitlement) {
	return {
		method: "POST",
		path: `/applications/${applicationId}/entitlements`,
		body: json,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#delete-test-entitlement}
 */
export function DeleteTestEntitlement(applicationId: Snowflake, entitlementId: Snowflake) {
	return {
		method: "DELETE",
		path: `/applications/${applicationId}/entitlements/${entitlementId}`,
	};
}
