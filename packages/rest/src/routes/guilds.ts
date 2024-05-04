import type { GuildTemplateStructureInfer, SnowflakeInfer } from "@aurajs/core";
import { z } from "zod";
import type { RestRequestOptions } from "../globals/rest";

/**
 * Get Guild Template
 *
 * Get a guild template by its code.
 *
 * @see {@link https://discord.com/developers/docs/resources/template#get-guild-template}
 */
export function GetGuildTemplate<T extends GuildTemplateStructureInfer>(templateCode: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/templates/${templateCode}`,
		method: "GET",
	};
}

/**
 * JSON Create Guild from Guild Template
 *
 * @see {@link https://discord.com/developers/docs/resources/template#create-guild-from-guild-template}
 */
export const JSONCreateGuildFromGuildTemplate = z.object({
	name: z.string().min(2).max(100),
	icon: z.string().optional(),
});

/**
 * JSON Create Guild from Guild Template Infer
 *
 * Is the inferred type of the {@link JSONCreateGuildFromGuildTemplate} zod object.
 */
export type JSONCreateGuildFromGuildTemplateInfer = z.infer<typeof JSONCreateGuildFromGuildTemplate>;

/**
 * Create Guild from Guild Template
 *
 * Create a new guild based on a template.
 *
 * @see {@link https://discord.com/developers/docs/resources/template#create-guild-from-guild-template}
 */
export function CreateGuildFromGuildTemplate<T extends JSONCreateGuildFromGuildTemplateInfer>(templateCode: SnowflakeInfer, json: JSONCreateGuildFromGuildTemplateInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/templates/${templateCode}`,
		method: "POST",
		body: JSONCreateGuildFromGuildTemplate.parse(json),
	};
}

/**
 * Get Guild Templates
 *
 * Get a list of guild templates.
 *
 * @see {@link https://discord.com/developers/docs/resources/template#get-guild-templates}
 */
export function GetGuildTemplates<T extends GuildTemplateStructureInfer[]>(guildId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/templates`,
		method: "GET",
	};
}

/**
 * JSON Create Guild Template
 *
 * @see {@link https://discord.com/developers/docs/resources/template#create-guild-template}
 */
export const JSONCreateGuildTemplate = z.object({
	name: z.string().min(1).max(100),
	description: z.string().min(0).max(120).optional().nullable(),
});

/**
 * JSON Create Guild Template Infer
 *
 * Is the inferred type of the {@link JSONCreateGuildTemplate} zod object.
 */
export type JSONCreateGuildTemplateInfer = z.infer<typeof JSONCreateGuildTemplate>;

/**
 * Create Guild Template
 *
 * Create a template for a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/template#create-guild-template}
 */
export function CreateGuildTemplate<T extends GuildTemplateStructureInfer>(guildId: SnowflakeInfer, json: JSONCreateGuildTemplateInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/templates`,
		method: "POST",
		body: JSONCreateGuildTemplate.parse(json),
	};
}

/**
 * Sync Guild Template
 *
 * Syncs the template to the guild's current state.
 *
 * @see {@link https://discord.com/developers/docs/resources/template#sync-guild-template}
 */
export function SyncGuildTemplate<T extends GuildTemplateStructureInfer>(guildId: SnowflakeInfer, templateCode: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/templates/${templateCode}`,
		method: "PUT",
	};
}

/**
 * JSON Modify Guild Template
 *
 * @see {@link https://discord.com/developers/docs/resources/template#modify-guild-template}
 */
export const JSONModifyGuildTemplate = z.object({
	name: z.string().min(1).max(100).optional(),
	description: z.string().min(0).max(120).optional().nullable(),
});

/**
 * JSON Modify Guild Template Infer
 *
 * Is the inferred type of the {@link JSONModifyGuildTemplate} zod object.
 */
export type JSONModifyGuildTemplateInfer = z.infer<typeof JSONModifyGuildTemplate>;

/**
 * Modify Guild Template
 *
 * Modify the template's metadata.
 *
 * @see {@link https://discord.com/developers/docs/resources/template#modify-guild-template}
 */
export function ModifyGuildTemplate<T extends GuildTemplateStructureInfer>(guildId: SnowflakeInfer, templateCode: SnowflakeInfer, json: JSONModifyGuildTemplateInfer): RestRequestOptions<T> {
	return {
		url: `/guilds/${guildId}/templates/${templateCode}`,
		method: "PATCH",
		body: JSONModifyGuildTemplate.parse(json),
	};
}

/**
 * Delete Guild Template
 *
 * Delete a guild template.
 *
 * @see {@link https://discord.com/developers/docs/resources/template#delete-guild-template}
 */
export function DeleteGuildTemplate(guildId: SnowflakeInfer, templateCode: SnowflakeInfer): RestRequestOptions<void> {
	return {
		url: `/guilds/${guildId}/templates/${templateCode}`,
		method: "DELETE",
	};
}
