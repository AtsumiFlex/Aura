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
 * Action Metadata
 *
 * Additional data used when an action is executed. Different fields are relevant based on the value of {@link ActionTypes}.
 *
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-metadata}
 */
export const ActionMetadata = z.object({
	/**
	 * The channel to which user content should be logged
	 */
	channel_id: Snowflake,
	/**
	 * Timeout duration in seconds
	 *
	 * Maximum of 2419200 seconds (4 weeks)
	 */
	duration_seconds: Integer.min(0).max(2_419_200),
	/**
	 * Additional explanation that will be shown to members whenever their message is blocked
	 *
	 * Maximum of 150 characters
	 */
	custom_message: z.string().max(150).optional(),
});

/**
 * Action Metadata Infer
 *
 * The inferred zod object from {@link ActionMetadata}
 */
export type ActionMetadataInfer = z.infer<typeof ActionMetadata>;

/**
 * Action Types
 *
 * The type of action to take when a rule triggers.
 *
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-types}
 */
export enum ActionTypes {
	/**
	 * Blocks a member's message and prevents it from being posted. A custom explanation can be specified and shown to members whenever their message is blocked.
	 */
	BlockMessage = 1,
	/**
	 * Logs user content to a specified channel
	 */
	SendAlertMessage = 2,
	/**
	 * Timeout user for a specified duration
	 */
	Timeout = 3,
}

/**
 * Action Types Enum
 *
 * Is a zod enum that represents the available {@link ActionTypes}.
 */
export const ActionTypesEnum = z.nativeEnum(ActionTypes);

/**
 * Auto Moderation Action Structure
 *
 * An action which will execute whenever a rule is triggered.
 *
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object}
 */
export const AutoModerationActionStructure = z.object({
	/**
	 * The type of action to take when a rule triggers
	 */
	type: ActionTypesEnum,
	/**
	 * Additional data used when an action is executed. Different fields are relevant based on the value of {@link ActionTypes}
	 *
	 * @see {@link ActionMetadata}
	 */
	metadata: ActionMetadata.optional(),
});

/**
 * Auto Moderation Action Structure Infer
 *
 * The inferred zod object from {@link AutoModerationActionStructure}
 */
export type AutoModerationActionStructureInfer = z.infer<typeof AutoModerationActionStructure>;

/**
 * Event Types
 *
 * Indicates in what event context a rule should be checked.
 *
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-event-types}
 */
export enum EventTypes {
	/**
	 * When a member sends or edits a message in the guild
	 */
	MessageSend = 1,
}

/**
 * Event Types Enum
 *
 * Is a zod enum that represents the available {@link EventTypes}.
 */
export const EventTypesEnum = z.nativeEnum(EventTypes);

/**
 * Keyword Preset Types
 *
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-keyword-preset-types}
 */
export enum KeywordPresetTypes {
	/**
	 * Words that may be considered forms of swearing or cursing
	 */
	Profanity = 1,
	/**
	 * Words that refer to sexually explicit behavior or activity
	 */
	SexualContent = 2,
	/**
	 * Personal insults or words that may be considered hate speech
	 */
	Slurs = 3,
}

/**
 * Keyword Preset Types Enum
 *
 * Is a zod enum that represents the available {@link KeywordPresetTypes}.
 */
export const KeywordPresetTypesEnum = z.nativeEnum(KeywordPresetTypes);

/**
 * Trigger Metadata Field Limits
 *
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-trigger-metadata-field-limits}
 */
export const TriggerMetadataFieldLimits = z.object({
	/**
	 * Maximum number of keywords that can be included in the filter
	 */
	keyword_filter: z.array(z.string().max(60)).max(1_000),
	/**
	 * Maximum number of regex patterns that can be included in the filter
	 */
	regex_patterns: z.array(z.string().max(260)).max(10),
	/**
	 * Maximum number of keywords that can be included in the allow list
	 */
	allow_list: z.array(z.string().max(60)).max(100),
	/**
	 * Maximum number of keywords that can be included in the allow list for keyword presets
	 */
	allow_list_keyword_preset: z.array(z.string().max(60)).max(1_000),
});

/**
 * Trigger Metadata Field Limits Infer
 *
 * The inferred zod object from {@link TriggerMetadataFieldLimits}
 */
export type TriggerMetadataFieldLimitsInfer = z.infer<typeof TriggerMetadataFieldLimits>;

/**
 * Trigger Metadata
 *
 * Additional data used to determine whether a rule should be triggered. Different fields are relevant based on the value of {@link TriggerTypes}.
 *
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-trigger-metadata}
 */
export const TriggerMetadata = z.object({
	/**
	 * Substrings which will be searched for in content (Maximum of 1000)
	 */
	keyword_filter: z.array(z.string().max(60)).max(1_000),
	/**
	 * Regular expression patterns which will be matched against content (Maximum of 10)
	 */
	regex_patterns: z.array(z.string().max(260)).max(10),
	/**
	 * The internally pre-defined wordsets which will be searched for in content
	 */
	presets: z.array(KeywordPresetTypesEnum),
	/**
	 * Substrings which should not trigger the rule (Maximum of 100 or 1000)
	 */
	allow_list: z.array(z.string().max(60)).max(100).max(1_000),
	/**
	 * Total number of unique role and user mentions allowed per message (Maximum of 50)
	 */
	mention_total_limit: Integer.max(50),
	/**
	 * Whether to automatically detect mention raids
	 */
	mention_raid_protection_enabled: z.boolean(),
});

/**
 * Trigger Metadata Infer
 *
 * The inferred zod object from {@link TriggerMetadata}
 */
export type TriggerMetadataInfer = z.infer<typeof TriggerMetadata>;

/**
 * Trigger Types
 *
 * Characterizes the type of content which can trigger the rule.
 *
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-trigger-types}
 */
export enum TriggerTypes {
	/**
	 * Check if content contains words from a user-defined list of keywords
	 */
	Keyword = 1,
	/**
	 * Check if content represents generic spam
	 */
	Spam = 3,
	/**
	 * Check if content contains words from internal pre-defined wordsets
	 */
	KeywordPreset = 4,
	/**
	 * Check if content contains more unique mentions than allowed
	 */
	MentionSpam = 5,
}

/**
 * Trigger Types Enum
 *
 * Is a zod enum that represents the available {@link TriggerTypes}.
 */
export const TriggerTypesEnum = z.nativeEnum(TriggerTypes);

/**
 * Auto Moderation Rule Structure
 *
 * A rule which will trigger based on some criteria.
 *
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-auto-moderation-rule-structure}
 */
export const AutoModerationRuleStructure = z.object({
	/**
	 * The id of this rule
	 */
	id: Snowflake,
	/**
	 * The id of the guild which this rule belongs to
	 */
	guild_id: Snowflake,
	/**
	 * The rule name
	 */
	name: z.string(),
	/**
	 * The user which first created this rule
	 */
	creator_id: Snowflake,
	/**
	 * The rule event type
	 *
	 * @see {@link EventTypes}
	 */
	event_type: EventTypesEnum,
	/**
	 * The rule trigger type
	 *
	 * @see {@link TriggerTypes}
	 */
	trigger_type: TriggerTypesEnum,
	/**
	 * The rule trigger metadata
	 *
	 * @see {@link TriggerMetadata}
	 */
	trigger_metadata: TriggerMetadata,
	/**
	 * The actions which will execute when the rule is triggered
	 *
	 * @see {@link AutoModerationActionStructure}
	 */
	actions: z.array(AutoModerationActionStructure),
	/**
	 * Whether the rule is enabled
	 */
	enabled: z.boolean(),
	/**
	 * The role ids that should not be affected by the rule
	 *
	 * Maximum of 20
	 */
	exempt_roles: z.array(Snowflake).max(20),
	/**
	 * The channel ids that should not be affected by the rule
	 *
	 * Maximum of 50
	 */
	exempt_channels: z.array(Snowflake).max(50),
});

/**
 * Auto Moderation Rule Structure Infer
 *
 * The inferred zod object from {@link AutoModerationRuleStructure}
 */
export type AutoModerationRuleStructureInfer = z.infer<typeof AutoModerationRuleStructure>;
