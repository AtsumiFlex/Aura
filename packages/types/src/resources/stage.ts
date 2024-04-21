// https://discord.com/developers/docs/resources/stage-instance#stage-instance-resource
import type { Snowflake } from "../global";

// https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-stage-instance-structure
export type StageInstanceStructure = {
	channel_id: Snowflake;
	discoverable_disabled: boolean;
	guild_id: Snowflake;
	guild_scheduled_event_id: Snowflake | null;
	id: Snowflake;
	privacy_level: PrivacyLevel;
	topic: string;
};

// https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-privacy-level
export enum PrivacyLevel {
	Public = 1,
	GuildOnly = 2,
}
