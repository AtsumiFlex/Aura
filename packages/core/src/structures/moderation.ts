/**
 * Auto Moderation
 *
 * Auto Moderation is a feature which allows each guild to set up rules that trigger based on some criteria. For example, a rule can trigger whenever a message contains a specific keyword.
 *
 * Rules can be configured to automatically execute actions whenever they trigger. For example, if a user tries to send a message which contains a certain keyword, a rule can trigger and block the message before it is sent.
 *
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation}
 */

import { z } from "zod";
import { Integer, Snowflake } from "../globals/formatters";

/**
 * Auto Moderation Action Metadata Structure
 *
 * Represents the metadata for an auto moderation action.
 *
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-metadata}
 */
export const AutoModerationActionMetadataStructure = z.object({
	channel_id: Snowflake,
	duration_seconds: Integer.max(2_419_200),
	custom_message: z.string().max(150).optional(),
});

/**
 * Auto Moderation Action Metadata Structure Infer
 *
 * The inferred type of {@link AutoModerationActionMetadataStructure}
 */
export type AutoModerationActionMetadataStructureInfer = z.infer<typeof AutoModerationActionMetadataStructure>;

/**
 * Auto Moderation Action Types
 *
 * The types of actions that can be taken by the auto moderation system.
 *
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-types}
 */
export enum AutoModerationActionTypes {
	/**
	 * Blocks a member's message and prevents it from being posted.
	 */
	BlockMessage = 1,
	/**
	 * Logs user content to a specified channel.
	 */
	SendAlertMessage = 2,
	/**
	 * Timeout user for a specified duration.
	 */
	Timeout = 3,
}

/**
 * Auto Moderation Action Types Enum
 *
 * Is a zod enum that represents the available {@link AutoModerationActionTypes}.
 */
export const AutoModerationActionTypesEnum = z.nativeEnum(AutoModerationActionTypes);

/**
 * Auto Moderation Action Structure
 *
 * Represents an action that can be taken by the auto moderation system.
 *
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-auto-moderation-action-structure}
 */
export const AutoModerationActionStructure = z.object({
	type: AutoModerationActionTypesEnum,
	metadata: AutoModerationActionMetadataStructure.optional(),
});

/**
 * Auto Moderation Action Structure Infer
 *
 * The inferred type of {@link AutoModerationActionStructure}
 */
export type AutoModerationActionStructureInfer = z.infer<typeof AutoModerationActionStructure>;

/**
 * Auto Moderation Event Types
 *
 * Indicates in what event context a rule should be checked.
 *
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-event-types}
 */
export enum AutoModerationEventTypes {
	/**
	 * When a member sends or edits a message in the guild.
	 */
	MessageSend = 1,
}

/**
 * Auto Moderation Event Types Enum
 *
 * Is a zod enum that represents the available {@link AutoModerationEventTypes}.
 */
export const AutoModerationEventTypesEnum = z.nativeEnum(AutoModerationEventTypes);

/**
 * Auto Moderation Filter Types
 *
 * The types of filters that can be applied to auto moderation rules.
 *
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-filter-object-filter-types}
 */
export enum AutoModerationFilterTypes {
	/**
	 * Words that may be considered forms of swearing or cursing.
	 */
	Profanity = 1,
	/**
	 * Words that refer to sexually explicit behavior or activity.
	 */
	SexualContent = 2,
	/**
	 * Personal insults or words that may be considered hate speech.
	 */
	Slurs = 3,
}

/**
 * Auto Moderation Filter Types Enum
 *
 * Is a zod enum that represents the available {@link AutoModerationFilterTypes}.
 */
export const AutoModerationFilterTypesEnum = z.nativeEnum(AutoModerationFilterTypes);

/**
 * Auto Moderation Trigger Fields Limits
 *
 * Represents the limits for the fields of an auto moderation trigger.
 *
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-trigger-object-trigger-metadata-field-limits}
 */
export const AutoModerationTriggerFieldsLimits = z.object({
	keyword_filter: z.array(z.string().max(60)).max(1_000),
	regex_patterns: z.array(z.string().max(260)).max(10),
	allow_list: z.union([z.array(z.string().max(60)).max(100), z.array(z.string().max(60)).max(1_000)]),
});

/**
 * Auto Moderation Trigger Fields Limits Infer
 *
 * The inferred type of {@link AutoModerationTriggerFieldsLimits}
 */
export type AutoModerationTriggerFieldsLimitsInfer = z.infer<typeof AutoModerationTriggerFieldsLimits>;

/**
 * Auto Moderation Trigger Metadata Structure
 *
 * Additional data used to determine whether a rule should be triggered. Different fields are relevant based on the value of trigger_type.
 *
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-trigger-object-trigger-metadata}
 */
export const AutoModerationTriggerMetadataStructure = z.object({
	keyword_filter: z.array(z.string()).max(1_000),
	regex_patterns: z.array(z.string()).max(10),
	presets: z.array(AutoModerationFilterTypesEnum),
	allow_list: z.array(z.string()).max(100).max(1_000),
	mention_total_limit: Integer.max(50),
	mention_raid_protection_enabled: z.boolean(),
});

/**
 * Auto Moderation Trigger Metadata Structure Infer
 *
 * The inferred type of {@link AutoModerationTriggerMetadataStructure}
 */
export type AutoModerationTriggerMetadataStructureInfer = z.infer<typeof AutoModerationTriggerMetadataStructure>;

/**
 * Auto Moderation Trigger Types
 *
 * Characterizes the type of content which can trigger the rule.
 *
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-trigger-object-trigger-types}
 */
export enum AutoModerationTriggerTypes {
	/**
	 * Check if content contains words from a user defined list of keywords.
	 */
	Keyword = 1,
	/**
	 * Check if content represents generic spam.
	 */
	Spam = 3,
	/**
	 * Check if content contains words from internal pre-defined wordsets.
	 */
	KeywordPreset = 4,
	/**
	 * Check if content contains more unique mentions than allowed.
	 */
	MentionSpam = 5,
}

/**
 * Auto Moderation Trigger Types Enum
 *
 * Is a zod enum that represents the available {@link AutoModerationTriggerTypes}.
 */
export const AutoModerationTriggerTypesEnum = z.nativeEnum(AutoModerationTriggerTypes);

/**
 * Auto Moderation Rule Structure
 *
 * Represents a rule that can be applied to the auto moderation system.
 *
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-auto-moderation-rule-structure}
 */
export const AutoModerationRuleStructure = z.object({
	id: Snowflake,
	guild_id: Snowflake,
	name: z.string(),
	creator_id: Snowflake,
	event_type: AutoModerationEventTypesEnum,
	trigger_type: AutoModerationTriggerTypesEnum,
	trigger_metadata: AutoModerationTriggerMetadataStructure,
	actions: z.array(AutoModerationActionStructure),
	enabled: z.boolean(),
	exempt_roles: z.array(Snowflake).max(20),
	exempt_channels: z.array(Snowflake).max(50),
});

/**
 * Auto Moderation Rule Structure Infer
 *
 * The inferred type of {@link AutoModerationRuleStructure}
 */
export type AutoModerationRuleStructureInfer = z.infer<typeof AutoModerationRuleStructure>;
