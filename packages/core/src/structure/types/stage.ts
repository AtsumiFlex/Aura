import type { Snowflake } from "../../base/base";

/**
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-stage-instance-structure}
 */
export type StageInstanceStructure = {
	channel_id: Snowflake;
	discoverable_disabled: boolean;
	guild_id: Snowflake;
	guild_scheduled_event_id: Snowflake | null;
	id: Snowflake;
	privacy_level: StagePrivacyLevels;
	topic: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-privacy-level}
 */
export enum StagePrivacyLevels {
	Public = 1,
	GuildOnly = 2,
}
