import { AutoModerationActionStructure, AutoModerationTriggerTypesEnum, Snowflake } from "@aurajs/core";
import { z } from "zod";

/**
 * Auto Moderation Action Execution Event Fields
 *
 * Sent when an auto moderation action is executed
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#auto-moderation-action-execution}
 */
export const AutoModerationActionExecutionEventFields = z.object({
	guild_id: Snowflake,
	action: AutoModerationActionStructure,
	rule_id: Snowflake,
	rule_trigger_type: AutoModerationTriggerTypesEnum,
	user_id: Snowflake,
	channel_id: Snowflake.optional(),
	message_id: Snowflake.optional(),
	alert_system_message_id: Snowflake.optional(),
	content: z.string().nullable(),
	matched_keyword: z.string().optional(),
	matched_content: z.string().optional().nullable(),
});

/**
 * Auto Moderation Action Execution Event Fields Infer
 *
 * Represents the inferred type of the {@link AutoModerationActionExecutionEventFields}
 */
export type AutoModerationActionExecutionEventFieldsInfer = z.infer<typeof AutoModerationActionExecutionEventFields>;
