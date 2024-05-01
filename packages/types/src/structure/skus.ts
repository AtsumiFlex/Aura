import { z } from "zod";
import { Snowflake } from "../globals";

export enum SKUFlags {
	Available = 4,
	GuildSubscription = 128,
	UserSubscription = 256,
}

export const SKUFlagsEnum = z.nativeEnum(SKUFlags);

export enum SKUTypes {
	Durable = 2,
	Consumable = 3,
	Subscription = 5,
	SubscriptionGroup = 6,
}

export const SKUTypesEnum = z.nativeEnum(SKUTypes);

export const SKUStructure = z.object({
	id: Snowflake,
	type: SKUTypesEnum,
	application_id: Snowflake,
	name: z.string(),
	slug: z.string(),
	flags: SKUFlagsEnum,
});
export type SKUInfer = z.infer<typeof SKUStructure>;
