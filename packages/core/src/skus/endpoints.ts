import type { Snowflake } from "../base/base";

/**
 * @see {@link https://discord.com/developers/docs/monetization/skus#list-skus}
 */
export function ListSKUs(applicationId: Snowflake) {
	return {
		method: "GET",
		path: `/applications/${applicationId}/skus`,
	};
}
