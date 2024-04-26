import type { Snowflake } from "../../base/base";
import type { StagePrivacyLevels } from "../types/stage";

/**
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#create-stage-instance-json-params}
 */
export type JSONCreateStageInstance = {
	channel_id: Snowflake;
	guild_scheduled_event_id?: Snowflake;
	privacy_level?: StagePrivacyLevels;
	send_start_notification?: boolean;
	topic: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#create-stage-instance}
 */
export function CreateStageInstance(json: JSONCreateStageInstance) {
	return {
		method: "POST",
		path: "/stage-instances",
		body: json,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#get-stage-instance}
 */
export function GetStageInstance(channelId: Snowflake) {
	return {
		method: "GET",
		path: `/stage-instances/${channelId}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#modify-stage-instance-json-params}
 */
export type JSONModifyStageInstance = {
	privacy_level?: StagePrivacyLevels;
	topic?: string | null;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#modify-stage-instance}
 */
export function ModifyStageInstance(channelId: Snowflake, json: JSONModifyStageInstance) {
	return {
		method: "PATCH",
		path: `/stage-instances/${channelId}`,
		body: json,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#delete-stage-instance}
 */
export function DeleteStageInstance(channelId: Snowflake) {
	return {
		method: "DELETE",
		path: `/stage-instances/${channelId}`,
	};
}
