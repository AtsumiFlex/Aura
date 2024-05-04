import type { SnowflakeInfer, StageInstanceStructureInfer } from "@aurajs/core";
import { PrivacyLevelEnum, Snowflake } from "@aurajs/core";
import { z } from "zod";
import type { RestRequestOptions } from "../globals/rest";

/**
 * JSON Create Stage Instance
 *
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#create-stage-instance-json-params}
 */
export const JSONCreateStageInstance = z.object({
	channel_id: Snowflake,
	topic: z.string().max(120),
	privacy_level: PrivacyLevelEnum.optional(),
	send_start_notification: z.boolean().optional(),
	guild_scheduled_event_id: Snowflake.optional(),
});

/**
 * JSON Create Stage Instance Infer
 *
 * Is the inferred type of the {@link JSONCreateStageInstance} zod object.
 */
export type JSONCreateStageInstanceInfer = z.infer<typeof JSONCreateStageInstance>;

/**
 * Create Stage Instance
 *
 * Create a new Stage instance within a stage channel.
 *
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#create-stage-instance}
 */
export function CreateStageInstance<T extends StageInstanceStructureInfer>(json: JSONCreateStageInstanceInfer): RestRequestOptions<T> {
	return {
		url: "/stage-instances",
		method: "POST",
		body: JSONCreateStageInstance.parse(json),
	};
}

/**
 * Get Stage Instance
 *
 * Get a Stage instance by its ID.
 *
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#get-stage-instance}
 */
export function GetStageInstance<T extends StageInstanceStructureInfer>(stageId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/stage-instances/${stageId}`,
		method: "GET",
	};
}

/**
 * JSON Modify Stage Instance
 *
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#modify-stage-instance-json-params}
 */
export const JSONModifyStageInstance = z.object({
	topic: z.string().max(120).optional(),
	privacy_level: PrivacyLevelEnum.optional(),
});

/**
 * JSON Modify Stage Instance Infer
 *
 * Is the inferred type of the {@link JSONModifyStageInstance} zod object.
 */
export type JSONModifyStageInstanceInfer = z.infer<typeof JSONModifyStageInstance>;

/**
 * Modify Stage Instance
 *
 * Update a Stage instance by its ID.
 *
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#modify-stage-instance}
 */
export function ModifyStageInstance<T extends StageInstanceStructureInfer>(stageId: SnowflakeInfer, json: JSONModifyStageInstanceInfer): RestRequestOptions<T> {
	return {
		url: `/stage-instances/${stageId}`,
		method: "PATCH",
		body: JSONModifyStageInstance.parse(json),
	};
}

/**
 * Delete Stage Instance
 *
 * Delete a Stage instance by its ID.
 *
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#delete-stage-instance}
 */
export function DeleteStageInstance(stageId: SnowflakeInfer): RestRequestOptions<void> {
	return {
		url: `/stage-instances/${stageId}`,
		method: "DELETE",
	};
}
