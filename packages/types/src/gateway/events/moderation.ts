import { z } from "zod";
import { Snowflake } from "../../globals";
import { AutoModerationAction, AutoModerationRuleTriggerTypeEnum } from "../../structure/moderation";

export const GatewayAutoModerationActionExecutionEventFields = z.object({
	guild_id: Snowflake,
	action: AutoModerationAction,
	rule_id: Snowflake,
	rule_trigger_type: AutoModerationRuleTriggerTypeEnum,
	user_id: Snowflake,
	channel_id: Snowflake.optional(),
	message_id: Snowflake.optional(),
	alert_system_message_id: Snowflake.optional(),
	content: z.string().optional(),
	matched_keyword: z.string().nullable(),
	matched_content: z.string().nullable().optional(),
});
export type GatewayAutoModerationActionExecutionEventInfer = z.infer<typeof GatewayAutoModerationActionExecutionEventFields>;
