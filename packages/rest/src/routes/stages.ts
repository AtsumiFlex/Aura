import type { SnowflakeInfer, StageInstanceStructureInfer } from "@aurajs/core";
import { PrivacyLevel, PrivacyLevelEnum, Snowflake } from "@aurajs/core";
import { z } from "zod";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * JSON Params Create Stage Instance
 *
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#create-stage-instance-json-params}
 */
export const JSONParamsCreateStageInstance = z.object({
	/**
	 * The id of the Stage channel
	 */
	channel_id: Snowflake,
	/**
	 * The topic of the Stage instance (1-120 characters)
	 */
	topic: z.string().min(1).max(120),
	/**
	 * The privacy level of the Stage instance (default GUILD_ONLY)
	 */
	privacy_level: PrivacyLevelEnum.default(PrivacyLevel.GuildOnly).optional(),
	/**
	 * Notify @everyone that a Stage instance has started
	 */
	send_start_notification: z.boolean().optional(),
	/**
	 * The guild scheduled event associated with this Stage instance
	 */
	guild_scheduled_event_id: Snowflake.optional(),
});

/**
 * JSON Params Create Stage Instance Infer
 *
 * Is used to infer the type of the {@link JSONParamsCreateStageInstance} object.
 */
export type JSONParamsCreateStageInstanceInfer = z.infer<typeof JSONParamsCreateStageInstance>;

/**
 * Create Stage Instance
 *
 * Creates a new Stage instance associated to a Stage channel. Returns that Stage instance. Fires a Stage Instance Create Gateway event.
 *
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#create-stage-instance}
 */
export function CreateStageInstance(reason: string, json: JSONParamsCreateStageInstanceInfer): RestMakeRequestOptions<StageInstanceStructureInfer> {
	return {
		method: "POST",
		path: "/stage-instances",
		body: JSONParamsCreateStageInstance.parse(json),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * Get Stage Instance
 *
 * Gets the stage instance associated with the Stage channel, if it exists.
 *
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#get-stage-instance}
 */
export function GetStageInstance(channelId: SnowflakeInfer): RestMakeRequestOptions<StageInstanceStructureInfer> {
	return {
		method: "GET",
		path: `/stage-instances/${Snowflake.parse(channelId)}`,
	};
}

/**
 * JSON Params Modify Stage Instance
 *
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#modify-stage-instance-json-params}
 */
export const JSONParamsModifyStageInstance = z.object({
	/**
	 * The topic of the Stage instance (1-120 characters)
	 */
	topic: z.string().min(1).max(120).optional(),
	/**
	 * The privacy level of the Stage instance
	 */
	privacy_level: PrivacyLevelEnum.optional(),
});

/**
 * JSON Params Modify Stage Instance Infer
 *
 * Is used to infer the type of the {@link JSONParamsModifyStageInstance} object.
 */
export type JSONParamsModifyStageInstanceInfer = z.infer<typeof JSONParamsModifyStageInstance>;

/**
 * Modify Stage Instance
 *
 * Updates fields of an existing Stage instance. Returns the updated Stage instance. Fires a Stage Instance Update Gateway event.
 *
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#modify-stage-instance}
 */
export function ModifyStageInstance(channelId: SnowflakeInfer, reason: string, json: JSONParamsModifyStageInstanceInfer): RestMakeRequestOptions<StageInstanceStructureInfer> {
	return {
		method: "PATCH",
		path: `/stage-instances/${Snowflake.parse(channelId)}`,
		body: JSONParamsModifyStageInstance.parse(json),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * Delete Stage Instance
 *
 * Deletes the Stage instance. Returns 204 No Content. Fires a Stage Instance Delete Gateway event.
 *
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#delete-stage-instance}
 */
export function DeleteStageInstance(channelId: SnowflakeInfer, reason: string): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/stage-instances/${Snowflake.parse(channelId)}`,
		headers: { "X-Audit-Log-Reason": reason },
	};
}
