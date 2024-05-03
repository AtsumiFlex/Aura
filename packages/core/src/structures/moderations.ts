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
import { Integer, Snowflake } from "../globals/globals";

/**
 * Auto Moderation Action Metadata Structure
 *
 * Represents the metadata for an auto moderation action.
 *
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-metadata-object-auto-moderation-action-metadata-structure}
 */
export const AutoModerationActionMetadataStructure = z.object({
	channel_id: Snowflake,
	duration_seconds: Integer.max(2_419_200),
	custom_message: z.string().max(150).optional(),
});

/**
 * Auto Moderation Action Metadata Structure Infer
 *
 * The inferred type of the AutoModerationActionMetadataStructure zod object.
 */
export type AutoModerationActionMetadataStructureInfer = z.infer<typeof AutoModerationActionMetadataStructure>;

/**
 * Action Types
 *
 * The types of actions that can be taken by auto moderation.
 *
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-metadata-object-auto-moderation-action-metadata-structure}
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
 * ActionTypesEnum is a zod enum that represents the action types.
 */
export const ActionTypesEnum = z.nativeEnum(ActionTypes);

/**
 * Auto Moderation Action Structure
 *
 * Represents an auto moderation action.
 *
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-auto-moderation-action-structure}
 */
export const AutoModerationActionStructure = z.object({
	type: ActionTypesEnum,
	metadata: AutoModerationActionMetadataStructure.optional(),
});

/**
 * Auto Moderation Action Structure Infer
 *
 * The inferred type of the AutoModerationActionStructure zod object.
 */
export type AutoModerationActionStructureInfer = z.infer<typeof AutoModerationActionStructure>;

/**
 * Event Types
 *
 * Indicates in what event context a rule should be checked.
 *
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-auto-moderation-rule-structure}
 */
export enum EventTypes {
	/**
	 * When a member sends or edits a message in the guild
	 */
	MessageSend = 1,
}

/**
 * EventTypesEnum is a zod enum that represents the event types.
 */
export const EventTypesEnum = z.nativeEnum(EventTypes);

/**
 * Keyword Preset Types
 *
 * The types of keyword presets that can be used for auto moderation.
 *
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-auto-moderation-rule-structure}
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
 * KeywordPresetTypesEnum is a zod enum that represents the keyword preset types.
 */
export const KeywordPresetTypesEnum = z.nativeEnum(KeywordPresetTypes);

/**
 * Trigger Metadata
 *
 * Additional data used to determine whether a rule should be triggered. Different fields are relevant based on the value of trigger_type.
 *
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-auto-moderation-rule-structure}
 */
export const TriggerMetadata = z.object({
	keyword_filter: z.array(z.string()).max(1_000).optional(),
	regex_patterns: z.array(z.string()).max(10).optional(),
	presets: z.array(KeywordPresetTypesEnum).optional(),
	allow_list: z.array(z.string()).max(100).optional(),
	mention_total_limit: Integer.max(50).optional(),
	mention_raid_protection_enabled: z.boolean().optional(),
});

/**
 * Trigger Metadata Infer
 *
 * The inferred type of the TriggerMetadata zod object.
 */
export type TriggerMetadataInfer = z.infer<typeof TriggerMetadata>;

/**
 * Trigger Types
 *
 * Characterizes the type of content which can trigger the rule.
 *
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-auto-moderation-rule-structure}
 */
export enum TriggerTypes {
	/**
	 * Check if content contains words from a user defined list of keywords
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
 * TriggerTypesEnum is a zod enum that represents the trigger types.
 */
export const TriggerTypesEnum = z.nativeEnum(TriggerTypes);

/**
 * Auto Moderation Rule Structure
 *
 * Represents an auto moderation rule.
 *
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-auto-moderation-rule-structure}
 */
export const AutoModerationRuleStructure = z.object({
	id: Snowflake,
	guild_id: Snowflake,
	name: z.string(),
	creator_id: Snowflake,
	event_type: EventTypesEnum,
	trigger_type: TriggerTypesEnum,
	trigger_metadata: TriggerMetadata,
	actions: z.array(AutoModerationActionStructure),
	enabled: z.boolean(),
	exempt_roles: z.array(Snowflake).max(20),
	exempt_channels: z.array(Snowflake).max(50),
});

/**
 * Auto Moderation Rule Structure Infer
 *
 * The inferred type of the AutoModerationRuleStructure zod object.
 */
export type AutoModerationRuleStructureInfer = z.infer<typeof AutoModerationRuleStructure>;
