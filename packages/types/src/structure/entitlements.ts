import { z } from "zod";
import { ISO8601, Snowflake } from "../globals";

export enum EntitlementTypes {
	Purchase = 1,
	PremiumSubscription = 2,
	DeveloperGift = 3,
	TestModePurchase = 4,
	FreePurchase = 5,
	UserGift = 6,
	PremiumPurchase = 7,
	ApplicationSubscription = 8,
}

export const EntitlementTypesEnum = z.nativeEnum(EntitlementTypes);

export const EntitlementStructure = z.object({
	id: Snowflake,
	sku_id: Snowflake,
	application_id: Snowflake,
	user_id: Snowflake.optional(),
	type: EntitlementTypesEnum,
	deleted: z.boolean(),
	starts_at: ISO8601.optional(),
	ends_at: ISO8601.optional(),
	guild_id: Snowflake.optional(),
	consumed: z.boolean().optional(),
});
export type EntitlementInfer = z.infer<typeof EntitlementStructure>;
