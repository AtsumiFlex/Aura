import type { SKUStructureInfer, SnowflakeInfer } from "@aurajs/core";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * List SKUs
 *
 * Returns all SKUs for a given application.
 *
 * @see {@link https://discord.com/developers/docs/monetization/skus#list-skus}
 */
export function ListSKUs<T extends SKUStructureInfer[]>(applicationId: SnowflakeInfer): RestMakeRequestOptions<T> {
	return {
		method: "GET",
		url: `/applications/${applicationId}/skus`,
	};
}
