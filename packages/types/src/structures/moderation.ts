/**
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation}
 */

import type { Integer, Snowflake } from "../globals";

/**
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-auto-moderation-rule-structure}
 */
export type AutoModerationRuleStructure = {
	actions: AutoModerationActionStructure[];
	creator_id: Snowflake;
	enabled: boolean;
	event_type: AutoModerationEventTypes;
	exempt_channels: Snowflake[];
	exempt_roles: Snowflake[];
	guild_id: Snowflake;
	id: Snowflake;
	name: string;
	trigger_metadata: AutoModerationRuleTriggerMetadata;
	trigger_type: AutoModerationTriggerTypes;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-trigger-types}
 */
export enum AutoModerationTriggerTypes {
	Keyword = 1,
	Spam = 3,
	KeywordPreset = 4,
	MentionSpam = 5,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-trigger-metadata}
 */
export type AutoModerationRuleTriggerMetadata = {
	allow_list?: string[];
	keyword_filter?: string[];
	mention_raid_protection_enabled?: boolean;
	mention_total_limit?: Integer;
	presets?: AutoModerationKeywordPresetTypes[];
	regex_patterns?: string[];
};

/**
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-keyword-preset-types}
 */
export enum AutoModerationKeywordPresetTypes {
	Profanity = 1,
	SexualContent = 2,
	Slurs = 3,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-event-types}
 */
export enum AutoModerationEventTypes {
	MessageSend = 1,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-auto-moderation-action-structure}
 */
export type AutoModerationActionStructure = {
	metadata?: AutoModerationActionMetadata;
	type: AutoModerationActionTypes;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-types}
 */
export enum AutoModerationActionTypes {
	BlockMessage = 1,
	SendAlertMessage = 2,
	Timeout = 3,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-metadata
 */
export type AutoModerationActionMetadata = {
	channel_id: Snowflake;
	custom_message?: string;
	duration_seconds: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#create-auto-moderation-rule-json-params}
 */
export type JSONCreateAutoModerationRule = {
	actions: AutoModerationActionStructure[];
	enabled?: boolean;
	event_type: AutoModerationEventTypes;
	exempt_channels?: Snowflake[];
	exempt_roles?: Snowflake[];
	name: string;
	trigger_metadata?: AutoModerationRuleTriggerMetadata;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#modify-auto-moderation-rule-json-params}
 */
export type JSONModifyAutoModerationRule = {
	actions: AutoModerationActionStructure[];
	enabled: boolean;
	event_type: AutoModerationEventTypes;
	exempt_channels: Snowflake[];
	exempt_roles: Snowflake[];
	name: string;
	trigger_metadata?: AutoModerationRuleTriggerMetadata;
};
