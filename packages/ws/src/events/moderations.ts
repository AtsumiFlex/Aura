/**
 * Auto Moderation Gateway
 *
 * This class is responsible for handling auto moderation events.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#auto-moderation}
 */

import { z } from "zod";
import { Snowflake } from "../../../core/src/globals/globals";
import { AutoModerationActionStructure, TriggerTypesEnum } from "../../../core/src/structures/moderations";

/**
 * Auto Moderation Action Execution Event Fields
 *
 * Sent when an auto moderation action is executed.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#auto-moderation-action-execution}
 */
export const AutoModerationActionExecutionEventFields = z.object({
	guild_id: Snowflake,
	action: AutoModerationActionStructure,
	rule_id: Snowflake,
	rule_trigger_type: TriggerTypesEnum,
	user_id: Snowflake,
	channel_id: Snowflake.optional(),
	message_id: Snowflake.optional(),
	alert_system_message_id: Snowflake.optional(),
	content: z.string().nullable(),
	matched_keyword: z.string().nullable(),
	matched_content: z.string().optional().nullable(),
});

/**
 * Auto Moderation Action Execution Event Fields Infer
 *
 * Infer the type of a {@link AutoModerationActionExecutionEventFields} object.
 */
export type AutoModerationActionExecutionEventFieldsInfer = z.infer<typeof AutoModerationActionExecutionEventFields>;
