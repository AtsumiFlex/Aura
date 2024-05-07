import type { SnowflakeInfer, StageInstanceStructureInfer } from "@aurajs/core";
import { PrivacyLevelEnum, Snowflake } from "@aurajs/core";
import { z } from "zod";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * JSON Create Stage Instance
 *
 * JSON body for the Create Stage Instance endpoint.
 *
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#create-stage-instance-json-params}
 */
export const JSONCreateStageInstance = z.object({
	channel_id: Snowflake,
	topic: z.string().min(1).max(120),
	privacy_level: PrivacyLevelEnum.optional(),
	send_start_notification: z.boolean().optional(),
	guild_scheduled_event_id: Snowflake.optional(),
});

/**
 * JSON Create Stage Instance Infer
 *
 * The inferred type of {@link JSONCreateStageInstance}
 */
export type JSONCreateStageInstanceInfer = z.infer<typeof JSONCreateStageInstance>;

/**
 * Create Stage Instance
 *
 * Create a new stage instance within a channel.
 *
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#create-stage-instance}
 */
export function CreateStageInstance<T extends StageInstanceStructureInfer>(channelId: SnowflakeInfer, reason: string, json: JSONCreateStageInstanceInfer): RestMakeRequestOptions<T> {
	return {
		method: "POST",
		url: "/stage-instances",
		body: JSONCreateStageInstance.parse(json),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * Get Stage Instance
 *
 * Get a stage instance by its ID.
 *
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#get-stage-instance}
 */
export function GetStageInstance<T extends StageInstanceStructureInfer>(stageId: SnowflakeInfer): RestMakeRequestOptions<T> {
	return {
		method: "GET",
		url: `/stage-instances/${stageId}`,
	};
}

/**
 * JSON Modify Stage Instance
 *
 * JSON body for the Modify Stage Instance endpoint.
 *
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#modify-stage-instance-json-params}
 */
export const JSONModifyStageInstance = z.object({
	topic: z.string().min(1).max(120).optional(),
	privacy_level: PrivacyLevelEnum.optional(),
});

/**
 * JSON Modify Stage Instance Infer
 *
 * The inferred type of {@link JSONModifyStageInstance}
 */
export type JSONModifyStageInstanceInfer = z.infer<typeof JSONModifyStageInstance>;

/**
 * Modify Stage Instance
 *
 * Update a stage instance by ID.
 *
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#modify-stage-instance}
 */
export function ModifyStageInstance<T extends StageInstanceStructureInfer>(stageId: SnowflakeInfer, reason: string, json: JSONModifyStageInstanceInfer): RestMakeRequestOptions<T> {
	return {
		method: "PATCH",
		url: `/stage-instances/${stageId}`,
		body: JSONModifyStageInstance.parse(json),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * Delete Stage Instance
 *
 * Delete a stage instance by its ID.
 *
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#delete-stage-instance}
 */
export function DeleteStageInstance<T extends void>(stageId: SnowflakeInfer, reason: string): RestMakeRequestOptions<T> {
	return {
		method: "DELETE",
		url: `/stage-instances/${stageId}`,
		headers: { "X-Audit-Log-Reason": reason },
	};
}
