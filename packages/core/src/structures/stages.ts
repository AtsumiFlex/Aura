/**
 * Stage Instance Resource
 *
 * A Stage instance is a special type of voice channel that allows users to present to a set audience.
 *
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#stage-instance-resource}
 */

import { z } from "zod";
import { Snowflake } from "../globals/globals";

/**
 * Privacy Level
 *
 * The privacy level of a Stage instance.
 *
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-privacy-level}
 */
export enum PrivacyLevel {
	/**
	 * The Stage instance is visible publicly. (deprecated)
	 */
	Public = 1,
	/**
	 * The Stage instance is visible to only guild members.
	 */
	GuildOnly = 2,
}

/**
 * PrivacyLevelEnum is a zod enum that represents the privacy levels.
 */
export const PrivacyLevelEnum = z.nativeEnum(PrivacyLevel);

/**
 * Stage Instance Structure
 *
 * A Stage instance is a special type of voice channel that allows users to present to a set audience.
 *
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-stage-instance-structure}
 */
export const StageInstanceStructure = z.object({
	id: Snowflake,
	guild_id: Snowflake,
	channel_id: Snowflake,
	topic: z.string(),
	privacy_level: PrivacyLevelEnum,
	discoverable_disabled: z.boolean(),
	guild_scheduled_event_id: Snowflake.nullable(),
});

/**
 * Stage Instance Structure Infer is the inferred type of the StageInstanceStructure zod object.
 */
export type StageInstanceStructureInfer = z.infer<typeof StageInstanceStructure>;
