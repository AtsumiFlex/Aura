/**
 * Stage Instance Resource
 *
 * Stage instances are live audio-based events in a Guild. They are considered different from Stages as they are not ephemeral and are considered to be always live.
 *
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#stage-instance-resource}
 */

import { z } from "zod";
import { Snowflake } from "../globals/formatters";

/**
 * Privacy Level
 *
 * The privacy level of the stage instance.
 *
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-privacy-level}
 */
export enum PrivacyLevel {
	/**
	 * The Stage instance is visible publicly. (deprecated)
	 *
	 * @deprecated
	 */
	Public = 1,
	/**
	 * The Stage instance is visible to only guild members.
	 */
	GuildOnly = 2,
}

/**
 * Privacy Level Enum
 *
 * Is a zod enum that represents the available {@link PrivacyLevel}.
 */
export const PrivacyLevelEnum = z.nativeEnum(PrivacyLevel);

/**
 * Stage Instance Structure
 *
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-stage-instance-structure}
 */
export const StageInstanceStructure = z.object({
	/**
	 * The id of this Stage instance
	 */
	id: Snowflake,
	/**
	 * The guild id of the associated Stage channel
	 */
	guild_id: Snowflake,
	/**
	 * The id of the associated Stage channel
	 */
	channel_id: Snowflake,
	/**
	 * The topic of the Stage instance (1-120 characters)
	 */
	topic: z.string().min(1).max(120),
	/**
	 * The privacy level of the Stage instance
	 */
	privacy_level: PrivacyLevelEnum,
	/**
	 * Whether or not Stage Discovery is disabled (deprecated)
	 *
	 * @deprecated
	 */
	discoverable_disabled: z.boolean(),
	/**
	 * The id of the scheduled event for this Stage instance
	 */
	guild_scheduled_event_id: Snowflake.nullable(),
});

/**
 * Stage Instance Structure Infer
 *
 * The inferred type of {@link StageInstanceStructure}
 */
export type StageInstanceStructureInfer = z.infer<typeof StageInstanceStructure>;
