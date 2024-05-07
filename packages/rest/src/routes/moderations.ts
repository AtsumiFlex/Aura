import type { AutoModerationRuleStructureInfer, SnowflakeInfer } from "@aurajs/core";
import {
	AutoModerationActionStructure,
	AutoModerationEventTypesEnum,
	AutoModerationTriggerMetadataStructure,
	AutoModerationTriggerTypesEnum,
	Snowflake,
} from "@aurajs/core";
import { z } from "zod";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * List Auto Moderation Rules for Guild
 *
 * Returns an array of auto moderation rules for the given guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-auto-moderation}
 */
export function ListAutoModerationRulesForGuild<T extends AutoModerationRuleStructureInfer[]>(guildId: SnowflakeInfer): RestMakeRequestOptions<T> {
	return {
		method: "GET",
		url: `/guilds/${guildId}/auto-moderation/rules`,
	};
}

/**
 * Get Auto Moderation Rule
 *
 * Returns an auto moderation rule for the given guild and rule ID.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-auto-moderation-rule}
 */
export function GetAutoModerationRule<T extends AutoModerationRuleStructureInfer>(guildId: SnowflakeInfer, ruleId: SnowflakeInfer): RestMakeRequestOptions<T> {
	return {
		method: "GET",
		url: `/guilds/${guildId}/auto-moderation/rules/${ruleId}`,
	};
}

/**
 * JSON Create Auto Moderation Rule
 *
 * Create a new auto moderation rule for the guild. Requires the `MANAGE_GUILD` permission.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#create-guild-auto-moderation-rule}
 */
export const JSONCreateAutoModerationRule = z.object({
	name: z.string(),
	event_type: AutoModerationEventTypesEnum,
	trigger_type: AutoModerationTriggerTypesEnum,
	trigger_metadata: AutoModerationTriggerMetadataStructure.optional(),
	actions: z.array(AutoModerationActionStructure),
	enabled: z.boolean().optional(),
	exempt_roles: z.array(Snowflake).max(20).optional(),
	exempt_channels: z.array(Snowflake).max(50).optional(),
});

/**
 * JSON Create Auto Moderation Rule Infer
 *
 * The inferred type of {@link JSONCreateAutoModerationRule}
 */
export type JSONCreateAutoModerationRuleInfer = z.infer<typeof JSONCreateAutoModerationRule>;

/**
 * Create Auto Moderation Rule
 *
 * Create a new auto moderation rule for the guild. Requires the `MANAGE_GUILD` permission.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#create-guild-auto-moderation-rule}
 */
export function CreateAutoModerationRule<T extends AutoModerationRuleStructureInfer>(guildId: SnowflakeInfer, reason: string, json: JSONCreateAutoModerationRuleInfer): RestMakeRequestOptions<T> {
	return {
		method: "POST",
		url: `/guilds/${guildId}/auto-moderation/rules`,
		body: JSONCreateAutoModerationRule.parse(json),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * JSON Modify Auto Moderation Rule
 *
 * JSON body for the Modify Auto Moderation Rule endpoint.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-auto-moderation-rule}
 */
export const JSONModifyAutoModerationRule = z.object({
	name: z.string().optional(),
	event_type: AutoModerationEventTypesEnum.optional(),
	trigger_metadata: AutoModerationTriggerMetadataStructure.optional(),
	actions: z.array(AutoModerationActionStructure).optional(),
	enabled: z.boolean().optional(),
	exempt_roles: z.array(Snowflake).max(20).optional(),
	exempt_channels: z.array(Snowflake).max(50).optional(),
});

/**
 * JSON Modify Auto Moderation Rule Infer
 *
 * The inferred type of {@link JSONModifyAutoModerationRule}
 */
export type JSONModifyAutoModerationRuleInfer = z.infer<typeof JSONModifyAutoModerationRule>;

/**
 * Modify Auto Moderation Rule
 *
 * Modify the given auto moderation rule. Requires the `MANAGE_GUILD` permission.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-auto-moderation-rule}
 */
export function ModifyAutoModerationRule<T extends AutoModerationRuleStructureInfer>(guildId: SnowflakeInfer, ruleId: SnowflakeInfer, reason: string, json: JSONModifyAutoModerationRuleInfer): RestMakeRequestOptions<T> {
	return {
		method: "PATCH",
		url: `/guilds/${guildId}/auto-moderation/rules/${ruleId}`,
		body: JSONModifyAutoModerationRule.parse(json),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * Delete Auto Moderation Rule
 *
 * Delete the given auto moderation rule. Requires the `MANAGE_GUILD` permission.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#delete-guild-auto-moderation-rule}
 */
export function DeleteAutoModerationRule<T extends void>(guildId: SnowflakeInfer, ruleId: SnowflakeInfer, reason: string): RestMakeRequestOptions<T> {
	return {
		method: "DELETE",
		url: `/guilds/${guildId}/auto-moderation/rules/${ruleId}`,
		headers: { "X-Audit-Log-Reason": reason },
	};
}
