// https://discord.com/developers/docs/resources/auto-moderation#auto-moderation
import type { Integer, Snowflake } from "../global";

// https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-auto-moderation-rule-structure
export type AutoModerationRuleStructure = {
	actions: AutoModerationActionStructure[];
	creator_id: Snowflake;
	enabled: boolean;
	event_type: EventTypes;
	exempt_channels: Snowflake[];
	exempt_roles: Snowflake[];
	guild_id: Snowflake;
	id: Snowflake;
	name: string;
	trigger_metadata: TriggerMetadata;
	trigger_type: TriggerTypes;
};

// https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-trigger-types
export enum TriggerTypes {
	KEYWORD = 1,
	SPAM = 3,
	KEYWORD_PRESET = 4,
	MENTION_SPAM = 5,
}

// https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-trigger-metadata
export type TriggerMetadata = {
	allow_list: string[];
	keyword_filter: string[];
	mention_raid_protection_enabled: boolean;
	mention_total_limit: Integer;
	presets: KeywordPresetTypes[];
	regex_patterns: string[];
};

// https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-trigger-metadata-field-limits
export type TriggerMetadataFieldLimits = {
	allow_list: TriggerTypes.KEYWORD;
	allow_list_preset: TriggerTypes.KEYWORD;
	keyword_filter: TriggerTypes.KEYWORD;
	regex_patterns: TriggerTypes.KEYWORD_PRESET;
};

// https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-keyword-preset-types
export enum KeywordPresetTypes {
	PROFANITY = 1,
	SEXUAL_CONTENT = 2,
	SLURS = 3,
}

// https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-event-types
export enum EventTypes {
	MESSAGE_SEND = 1,
}

// https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-auto-moderation-action-structure
export type AutoModerationActionStructure = {
	metadata?: ActionMetadata;
	type: ActionTypes;
};

// https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-types
export enum ActionTypes {
	BLOCK_MESSAGE = 1,
	SEND_ALERT_MESSAGE = 2,
	TIMEOUT = 3,
}

// https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-metadata
export type ActionMetadata = {
	channel_id: Snowflake;
	custom_message?: string;
	duration_seconds: Integer;
};
