import { z } from "zod";
import { Integer, Snowflake } from "../globals";

export const AutoModerationActionMetadata = z.object({
	channel_id: Snowflake.optional(),
	duration_seconds: Integer,
	custom_message: z.string().optional(),
});
export type AutoModerationActionMetadataInfer = z.infer<typeof AutoModerationActionMetadata>;

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
export type AutoModerationActionInfer = z.infer<typeof AutoModerationAction>;

export enum AutoModerationRuleEventType {
	MessageSend = 1,
}

export const AutoModerationRuleEventTypeEnum = z.nativeEnum(AutoModerationRuleEventType);

export enum AutoModerationRuleKeywordPresetType {
	Profanity = 1,
	SexualContent = 2,
	Slurs = 3,
}

export const AutoModerationRuleKeywordPresetTypeEnum = z.nativeEnum(AutoModerationRuleKeywordPresetType);

export enum AutoModerationRuleTriggerType {
	Keyword = 1,
	Spam = 3,
	KeywordPreset = 4,
	MentionSpam = 5,
}

export const AutoModerationRuleTriggerTypeEnum = z.nativeEnum(AutoModerationRuleTriggerType);

export const AutoModerationRuleTriggerMetadata = z.object({
	keyword_filter: z.array(z.string()).max(1_000),
	regex_patterns: z.array(z.string()).max(10),
	allow_list: z.array(z.string()).max(100),
});
export type AutoModerationRuleTriggerMetadataInfer = z.infer<typeof AutoModerationRuleTriggerMetadata>;

export const AutoModerationTriggerMetadata = z.object({
	keyword_filter: z.array(z.string()).max(1_000),
	regex_patterns: z.array(z.string()).max(10),
	presets: z.array(AutoModerationRuleKeywordPresetTypeEnum),
	allow_list: z.array(z.string()).max(100),
	mention_total_limit: Integer,
	mention_raid_protection_enabled: z.boolean(),
});
export type AutoModerationTriggerMetadataInfer = z.infer<typeof AutoModerationTriggerMetadata>;

export const AutoModerationRuleStructure = z.object({
	id: Snowflake,
	guild_id: Snowflake,
	name: z.string(),
	creator_id: Snowflake,
	event_type: AutoModerationRuleEventTypeEnum,
	trigger_type: AutoModerationRuleTriggerTypeEnum,
	trigger_metadata: AutoModerationRuleTriggerMetadata.optional(),
	actions: z.array(AutoModerationAction),
	enabled: z.boolean(),
	exempt_roles: z.array(Snowflake).max(20),
	exempt_channels: z.array(Snowflake).max(50),
});
export type AutoModerationRuleInfer = z.infer<typeof AutoModerationRuleStructure>;
