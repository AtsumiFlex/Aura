import type { SkuStructureInfer } from "@aurajs/core";
import type { RestRequestOptions } from "../globals/rest";

/**
 * List SKUs
 *
 * Returns a list of SKUs for a store listing.
 *
 * @see {@link https://discord.com/developers/docs/resources/store#list-skus}
 */
export function ListSKUs<T extends SkuStructureInfer[]>(applicationId: string): RestRequestOptions<T> {
	return {
		url: `/applications/${applicationId}/skus`,
		method: "GET",
	};
}
