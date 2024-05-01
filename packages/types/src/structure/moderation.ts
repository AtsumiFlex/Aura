import { z } from "zod";
import { Integer, Snowflake } from "../globals";

export const AutoModerationActionMetadata = z.object({
	channel_id: Snowflake.optional(),
	duration_seconds: Integer,
	custom_message: z.string().optional(),
});
export type AutoModerationActionMetadata = z.infer<typeof AutoModerationActionMetadata>;

export enum AutoModerationActionType {
	BlockMessage = 1,
	SendAlertMessage = 2,
	Timeout = 3,
}

export const AutoModerationActionTypeEnum = z.nativeEnum(AutoModerationActionType);

export const AutoModerationAction = z.object({
	type: AutoModerationActionTypeEnum,
	metadata: AutoModerationActionMetadata.optional(),
});
export type AutoModerationAction = z.infer<typeof AutoModerationAction>;

export enum AutoModerationRuleTriggerType {
	Keyword = 1,
	Spam = 3,
	KeywordPreset = 4,
	MentionSpam = 5,
}

export const AutoModerationRuleTriggerTypeEnum = z.nativeEnum(AutoModerationRuleTriggerType);
