import { z } from "zod";
import { Snowflake } from "../globals";

export enum StagePrivacyLevel {
	Public = 1,
	GuildOnly = 2,
}

export const StagePrivacyLevelEnum = z.nativeEnum(StagePrivacyLevel);

export const StageInstanceStructure = z.object({
	id: Snowflake,
	guild_id: Snowflake,
	channel_id: Snowflake,
	topic: z.string(),
	privacy_level: StagePrivacyLevelEnum,
	discoverable_disabled: z.boolean(),
	guild_scheduled_event_id: Snowflake.nullable(),
});
export type StageInstanceInfer = z.infer<typeof StageInstanceStructure>;
