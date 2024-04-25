/**
 * @fileoverview Application events
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#application-commands}
 */

import type { Integer, Snowflake } from "@aurajs/core";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#auto-moderation-action-execution-auto-moderation-action-execution-event-fields}
 */
export type AutoModerationActionExecutionEventFields = {
	action: object;// TODO: AutoModerationAction object
	alert_system_message_id?: Snowflake;
	channel_id?: Snowflake;
	content: string;
	guild_id: string;
	matched_content: string | null;
	matched_keyword: string | null;
	message_id?: Snowflake;
	rule_id: Snowflake;
	rule_trigger_type: Integer;// TODO: TriggerType
	user_id: Snowflake;
};
