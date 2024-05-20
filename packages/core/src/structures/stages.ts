import { z } from "zod";
import { Snowflake } from "../globals/formats";

/**
 * Enum representing the privacy levels of a Stage instance.
 *
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-privacy-level}
 */
export enum StagePrivacyLevels {
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
 * Zod schema for validating {@link StagePrivacyLevels}.
 *
 * @example
 * ```typescript
 * StagePrivacyLevel.parse(StagePrivacyLevels.GuildOnly); // Valid
 * StagePrivacyLevel.parse(3); // Throws an error
 * ```
 */
export const StagePrivacyLevel = z.nativeEnum(StagePrivacyLevels);

/**
 * Schema for validating the structure of a Stage instance.
 *
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-stage-instance-structure}
 */
export const StageInstanceStructure = z.object({
	/**
	 * The ID of this Stage instance.
	 *
	 * @example
	 * ```typescript
	 * const stageInstanceId = "123456789012345678";
	 * ```
	 */
	id: Snowflake,
	/**
	 * The guild ID of the associated Stage channel.
	 *
	 * @example
	 * ```typescript
	 * const guildId = "123456789012345678";
	 * ```
	 */
	guild_id: Snowflake,
	/**
	 * The ID of the associated Stage channel.
	 *
	 * @example
	 * ```typescript
	 * const channelId = "123456789012345678";
	 * ```
	 */
	channel_id: Snowflake,
	/**
	 * The topic of the Stage instance (1-120 characters).
	 *
	 * @example
	 * ```typescript
	 * const topic = "Stage instance discussion topic";
	 * ```
	 */
	topic: z.string().min(1).max(120),
	/**
	 * The privacy level of the Stage instance.
	 *
	 * @example
	 * ```typescript
	 * const privacyLevel = StagePrivacyLevels.GuildOnly;
	 * ```
	 */
	privacy_level: StagePrivacyLevel,
	/**
	 * Whether or not Stage Discovery is disabled (deprecated).
	 *
	 * @example
	 * ```typescript
	 * const isDiscoverableDisabled = true;
	 * ```
	 */
	discoverable_disabled: z.boolean().optional(),
	/**
	 * The ID of the scheduled event for this Stage instance.
	 *
	 * @example
	 * ```typescript
	 * const scheduledEventId = "123456789012345678";
	 * ```
	 */
	guild_scheduled_event_id: Snowflake.nullable(),
});

/**
 * The type of the {@link StageInstanceStructure} schema.
 */
export type StageInstanceStructureInfer = z.infer<typeof StageInstanceStructure>;
