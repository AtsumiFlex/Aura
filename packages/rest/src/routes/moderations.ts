import type { AutoModerationRuleStructureInfer, SnowflakeInfer } from "@aurajs/core";
import {
	AutoModerationActionStructure,
	EventTypesEnum,
	Snowflake,
	TriggerMetadata,
	TriggerTypesEnum,
} from "@aurajs/core";
import { z } from "zod";
import type { RestRequestOptions } from "../globals/rest";

/**
 * List Auto Moderation Rules for Guild
 *
 * Returns a list of auto moderation rules for the guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-auto-moderation}
 */
export function ListAutoModerationRulesForGuild<T extends AutoModerationRuleStructureInfer>(guildId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/auto-moderation/rules`,
		method: "GET",
	};
}

/**
 * Get Auto Moderation Rule
 *
 * Returns an auto moderation rule for the guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-auto-moderation-rule}
 */
export function GetAutoModerationRule<T extends AutoModerationRuleStructureInfer>(guildId: SnowflakeInfer, ruleId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/auto-moderation/rules/${ruleId}`,
		method: "GET",
	};
}

/**
 * JSON Create Auto Moderation Rule
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#create-guild-auto-moderation-rule}
 */
export const JSONCreateAutoModerationRule = z.object({
	name: z.string(),
	event_type: EventTypesEnum,
	trigger_type: TriggerTypesEnum,
	trigger_metadata: TriggerMetadata.optional(),
	actions: z.array(AutoModerationActionStructure).optional(),
	enabled: z.boolean().optional(),
	exempt_roles: z.array(Snowflake).max(20).optional(),
	exempt_channels: z.array(Snowflake).max(50).optional(),
});

/**
 * JSON Create Auto Moderation Rule Infer
 *
 * Is the inferred type of the {@link JSONCreateAutoModerationRule} zod object.
 */
export type JSONCreateAutoModerationRuleInfer = z.infer<typeof JSONCreateAutoModerationRule>;

/**
 * Create Auto Moderation Rule
 *
 * Create a new auto moderation rule for the guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#create-guild-auto-moderation-rule}
 */
export function CreateAutoModerationRule<T extends AutoModerationRuleStructureInfer>(guildId: SnowflakeInfer, json: JSONCreateAutoModerationRuleInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/auto-moderation/rules`,
		method: "POST",
		body: JSONCreateAutoModerationRule.parse(json),
	};
}

/**
 * JSON Modify Auto Moderation Rule
 *
 * Modify the given auto moderation rule.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-auto-moderation-rule}
 */
export const JSONModifyAutoModerationRule = z.object({
	name: z.string().optional(),
	event_type: EventTypesEnum.optional(),
	trigger_metadata: TriggerMetadata.optional(),
	actions: z.array(AutoModerationActionStructure).optional(),
	enabled: z.boolean().optional(),
	exempt_roles: z.array(Snowflake).optional(),
	exempt_channels: z.array(Snowflake).optional(),
});

/**
 * JSON Modify Auto Moderation Rule Infer
 *
 * Is the inferred type of the {@link JSONModifyAutoModerationRule} zod object.
 */
export type JSONModifyAutoModerationRuleInfer = z.infer<typeof JSONModifyAutoModerationRule>;

/**
 * Modify Auto Moderation Rule
 *
 * Modify the given auto moderation rule.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-auto-moderation-rule}
 */
export function ModifyAutoModerationRule<T extends AutoModerationRuleStructureInfer>(guildId: SnowflakeInfer, ruleId: SnowflakeInfer, json: JSONModifyAutoModerationRuleInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/auto-moderation/rules/${ruleId}`,
		method: "PATCH",
		body: JSONModifyAutoModerationRule.parse(json),
	};
}

/**
 * Delete Auto Moderation Rule
 *
 * Delete the given auto moderation rule.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#delete-guild-auto-moderation-rule}
 */
export function DeleteAutoModerationRule(guildId: SnowflakeInfer, ruleId: SnowflakeInfer): RestRequestOptions<void> {
	return {
		url: `/guilds/${guildId}/auto-moderation/rules/${ruleId}`,
		method: "DELETE",
	};
}
