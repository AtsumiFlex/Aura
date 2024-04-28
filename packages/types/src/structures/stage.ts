/**
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#stage-instance-resource}
 */
import type { Snowflake } from "../globals";

/**
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-stage-instance-structure}
 */
export type StageInstanceStructure = {
	channel_id: Snowflake;
	discoverable_disabled: boolean;
	guild_id: Snowflake;
	guild_scheduled_event_id?: Snowflake | null;
	id: Snowflake;
	privacy_level: PrivacyLevel;
	topic: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-privacy-level}
 */
export enum PrivacyLevel {
	Public = 1,
	GuildOnly = 2,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#create-stage-instance-json-params}
 */
export type JSONCreateStageInstance = {
	channel_id: Snowflake;
	guild_scheduled_event_id?: Snowflake;
	privacy_level?: PrivacyLevel;
	send_start_notification?: boolean;
	topic: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#modify-stage-instance-json-params}
 */
export type JSONModifyStageInstance = {
	privacy_level?: PrivacyLevel;
	topic?: string;
};
