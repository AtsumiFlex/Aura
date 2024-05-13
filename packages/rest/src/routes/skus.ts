import type { SKUStructureInfer, SnowflakeInfer } from "@aurajs/core";
import { Snowflake } from "@aurajs/core";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * List SKUs
 *
 * Returns all SKUs for a given application.
 *
 * @see {@link https://discord.com/developers/docs/monetization/skus#list-skus}
 */
export function ListSKUs(applicationId: SnowflakeInfer): RestMakeRequestOptions<SKUStructureInfer[]> {
	return {
		method: "GET",
		path: `/applications/${Snowflake.parse(applicationId)}/skus`,
	};
}
