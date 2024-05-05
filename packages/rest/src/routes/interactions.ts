import type { ApplicationCommandStructureInfer, InteractionResponseStructureInfer, SnowflakeInfer } from "@aurajs/core";
import {
	AllowedMentionTypesEnum,
	ApplicationCommandPermissionsStructure,
	ApplicationCommandStructure,
	ApplicationCommandTypesEnum,
	ApplicationIntegrationTypesEnum,
	AttachmentStructure,
	EmbedStructure,
	InteractionContextTypesEnum,
	LocalesEnum,
	MessageComponentsStructure,
	MessageFlagsEnum,
	PollCreateRequestObjectStructure,
	Snowflake,
} from "@aurajs/core";
import { z } from "zod";
import type { RestRequestOptions } from "../globals/rest";

/**
 * Query Get Global Application Commands
 *
 * The following parameters can be used to filter which and how many global application commands are returned.
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#get-global-application-commands-query-string-parameters}
 */
export const QueryGetGlobalApplicationCommands = z.object({ with_localizations: z.boolean().default(false).optional() });

/**
 * Query Get Global Application Commands Infer
 *
 * Is the inferred type of the {@link QueryGetGlobalApplicationCommands} zod object.
 */
export type QueryGetGlobalApplicationCommandsInfer = z.infer<typeof QueryGetGlobalApplicationCommands>;

/**
 * Get Global Application Commands
 *
 * Fetch all of the global commands for your application.
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#get-global-application-commands}
 */
export function GetGlobalApplicationCommands<T extends ApplicationCommandStructureInfer>(applicationId: SnowflakeInfer, query?: QueryGetGlobalApplicationCommandsInfer): RestRequestOptions<T> {
	return {
		url: `/applications/${applicationId}/commands`,
		method: "GET",
		query: QueryGetGlobalApplicationCommands.parse(query),
	};
}

/**
 * JSON Create Global Application Command
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#create-global-application-command}
 */
export const JSONCreateGlobalApplicationCommand = z.object({
	name: z.string(),
	name_localizations: z.record(LocalesEnum).optional(),
	description: z.string().optional(),
	description_localizations: z.record(LocalesEnum).optional(),
	options: z.array(ApplicationCommandStructure).optional(),
	default_member_permissions: z.string().optional().nullable(),
	dm_permission: z.boolean().optional().nullable(),
	default_permission: z.boolean().optional(),
	integration_types: z.array(ApplicationIntegrationTypesEnum).optional(),
	contexts: z.array(InteractionContextTypesEnum).optional(),
	type: ApplicationCommandTypesEnum.optional(),
	nsfw: z.boolean().optional(),
});

/**
 * JSON Create Global Application Command Infer
 *
 * Is the inferred type of the {@link JSONCreateGlobalApplicationCommand} zod object.
 */
export type JSONCreateGlobalApplicationCommandInfer = z.infer<typeof JSONCreateGlobalApplicationCommand>;

/**
 * Create Global Application Command
 *
 * Create a new global command. New global commands will be available in all guilds after 1 hour.
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#create-global-application-command}
 */
export function CreateGlobalApplicationCommand<T extends ApplicationCommandStructureInfer>(applicationId: SnowflakeInfer, json: JSONCreateGlobalApplicationCommandInfer): RestRequestOptions<T> {
	return {
		url: `/applications/${applicationId}/commands`,
		method: "POST",
		body: JSONCreateGlobalApplicationCommand.parse(json),
	};
}

/**
 * Get Global Application Command
 *
 * Fetch a global command for your application.
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#get-global-application-command}
 */
export function GetGlobalApplicationCommand<T extends ApplicationCommandStructureInfer>(applicationId: SnowflakeInfer, commandId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/applications/${applicationId}/commands/${commandId}`,
		method: "GET",
	};
}

/**
 * JSON Edit Global Application Command
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#edit-global-application-command}
 */
export const JSONEditGlobalApplicationCommand = z.object({
	name: z.string().optional(),
	name_localizations: z.record(LocalesEnum).optional(),
	description: z.string().optional(),
	description_localizations: z.record(LocalesEnum).optional(),
	options: z.array(ApplicationCommandStructure).optional(),
	default_member_permissions: z.string().optional().nullable(),
	dm_permission: z.boolean().optional().nullable(),
	default_permission: z.boolean().optional(),
	integration_types: z.array(ApplicationIntegrationTypesEnum).optional(),
	contexts: z.array(InteractionContextTypesEnum).optional(),
	nsfw: z.boolean().optional(),
});

/**
 * JSON Edit Global Application Command Infer
 *
 * Is the inferred type of the {@link JSONEditGlobalApplicationCommand} zod object.
 */
export type JSONEditGlobalApplicationCommandInfer = z.infer<typeof JSONEditGlobalApplicationCommand>;

/**
 * Edit Global Application Command
 *
 * Edit a global command for your application.
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#edit-global-application-command}
 */
export function EditGlobalApplicationCommand<T extends ApplicationCommandStructureInfer>(applicationId: SnowflakeInfer, commandId: SnowflakeInfer, json: JSONEditGlobalApplicationCommandInfer): RestRequestOptions<T> {
	return {
		url: `/applications/${applicationId}/commands/${commandId}`,
		method: "PATCH",
		body: JSONEditGlobalApplicationCommand.parse(json),
	};
}

/**
 * Delete Global Application Command
 *
 * Delete a global command for your application.
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#delete-global-application-command}
 */
export function DeleteGlobalApplicationCommand(applicationId: SnowflakeInfer, commandId: SnowflakeInfer): RestRequestOptions<void> {
	return {
		url: `/applications/${applicationId}/commands/${commandId}`,
		method: "DELETE",
	};
}

/**
 * Bulk Overwrite Global Application Commands
 *
 * Takes a list of application command JSON objects and overwrites the existing global commands for your application.
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-global-application-commands}
 */
export function BulkOverwriteGlobalApplicationCommands<T extends ApplicationCommandStructureInfer[]>(applicationId: SnowflakeInfer, json: JSONCreateGlobalApplicationCommandInfer[]): RestRequestOptions<T> {
	return {
		url: `/applications/${applicationId}/commands`,
		method: "PUT",
		body: JSONCreateGlobalApplicationCommand.array().parse(json),
	};
}

/**
 * Query Get Guild Application Commands
 *
 * The following parameters can be used to filter which and how many guild application commands are returned.
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#get-guild-application-commands-query-string-parameters}
 */
export const QueryGetGuildApplicationCommands = z.object({ with_localizations: z.boolean().default(false).optional() });

/**
 * Query Get Guild Application Commands Infer
 *
 * Is the inferred type of the {@link QueryGetGuildApplicationCommands} zod object.
 */
export type QueryGetGuildApplicationCommandsInfer = z.infer<typeof QueryGetGuildApplicationCommands>;

/**
 * Get Guild Application Commands
 *
 * Fetch all of the commands for your application in a guild.
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#get-guild-application-commands}
 */
export function GetGuildApplicationCommands<T extends ApplicationCommandStructureInfer>(applicationId: SnowflakeInfer, guildId: SnowflakeInfer, query?: QueryGetGuildApplicationCommandsInfer): RestRequestOptions<T> {
	return {
		url: `/applications/${applicationId}/guilds/${guildId}/commands`,
		method: "GET",
		query: QueryGetGuildApplicationCommands.parse(query),
	};
}

/**
 * JSON Create Guild Application Command
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#create-guild-application-command}
 */
export const JSONCreateGuildApplicationCommand = z.object({
	name: z.string(),
	name_localizations: z.record(LocalesEnum).optional(),
	description: z.string().optional(),
	description_localizations: z.record(LocalesEnum).optional(),
	options: z.array(ApplicationCommandStructure).optional(),
	default_member_permissions: z.string().optional().nullable(),
	default_permission: z.boolean().optional(),
	type: ApplicationCommandTypesEnum.optional(),
	nsfw: z.boolean().optional(),
});

/**
 * JSON Create Guild Application Command Infer
 *
 * Is the inferred type of the {@link JSONCreateGuildApplicationCommand} zod object.
 */
export type JSONCreateGuildApplicationCommandInfer = z.infer<typeof JSONCreateGuildApplicationCommand>;

/**
 * Create Guild Application Command
 *
 * Create a new command for your application in a guild. New guild commands will be available in the guild immediately.
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#create-guild-application-command}
 */
export function CreateGuildApplicationCommand<T extends ApplicationCommandStructureInfer>(applicationId: SnowflakeInfer, guildId: SnowflakeInfer, json: JSONCreateGuildApplicationCommandInfer): RestRequestOptions<T> {
	return {
		url: `/applications/${applicationId}/guilds/${guildId}/commands`,
		method: "POST",
		body: JSONCreateGuildApplicationCommand.parse(json),
	};
}

/**
 * Get Guild Application Command
 *
 * Fetch a command for your application in a guild.
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#get-guild-application-command}
 */
export function GetGuildApplicationCommand<T extends ApplicationCommandStructureInfer>(applicationId: SnowflakeInfer, guildId: SnowflakeInfer, commandId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}`,
		method: "GET",
	};
}

/**
 * JSON Edit Guild Application Command
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#edit-guild-application-command}
 */
export const JSONEditGuildApplicationCommand = z.object({
	name: z.string().optional(),
	name_localizations: z.record(LocalesEnum).optional(),
	description: z.string().optional(),
	description_localizations: z.record(LocalesEnum).optional(),
	options: z.array(ApplicationCommandStructure).optional(),
	default_member_permissions: z.string().optional().nullable(),
	default_permission: z.boolean().optional(),
	nsfw: z.boolean().optional(),
});

/**
 * JSON Edit Guild Application Command Infer
 *
 * Is the inferred type of the {@link JSONEditGuildApplicationCommand} zod object.
 */
export type JSONEditGuildApplicationCommandInfer = z.infer<typeof JSONEditGuildApplicationCommand>;

/**
 * Edit Guild Application Command
 *
 * Edit a command for your application in a guild.
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#edit-guild-application-command}
 */
export function EditGuildApplicationCommand<T extends ApplicationCommandStructureInfer>(applicationId: SnowflakeInfer, guildId: SnowflakeInfer, commandId: SnowflakeInfer, json: JSONEditGuildApplicationCommandInfer): RestRequestOptions<T> {
	return {
		url: `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}`,
		method: "PATCH",
		body: JSONEditGuildApplicationCommand.parse(json),
	};
}

/**
 * Delete Guild Application Command
 *
 * Delete a command for your application in a guild.
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#delete-guild-application-command}
 */
export function DeleteGuildApplicationCommand(applicationId: SnowflakeInfer, guildId: SnowflakeInfer, commandId: SnowflakeInfer): RestRequestOptions<void> {
	return {
		url: `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}`,
		method: "DELETE",
	};
}

/**
 * JSON Bulk Overwrite Guild Application Commands
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-guild-application-commands-json-params}
 */
export const JSONBulkOverwriteGuildApplicationCommands = z.array(z.object({
	id: Snowflake.optional(),
	name: z.string().min(1).max(32),
	name_localizations: z.record(LocalesEnum).optional().nullable(),
	description: z.string().min(1).max(100),
	description_localizations: z.record(LocalesEnum).optional(),
	options: z.array(ApplicationCommandStructure).optional(),
	default_member_permissions: z.string().optional().nullable(),
	dm_permission: z.boolean().optional().nullable(),
	default_permission: z.boolean().optional(),
	integration_types: z.array(ApplicationIntegrationTypesEnum).optional(),
	contexts: z.array(InteractionContextTypesEnum).optional(),
	type: ApplicationCommandTypesEnum.default(ApplicationCommandTypesEnum.enum.ChatInput).optional(),
	nsfw: z.boolean().optional(),
}));

/**
 * JSON Bulk Overwrite Guild Application Commands Infer
 *
 * Is the inferred type of the {@link JSONBulkOverwriteGuildApplicationCommands} zod object.
 */
export type JSONBulkOverwriteGuildApplicationCommandsInfer = z.infer<typeof JSONBulkOverwriteGuildApplicationCommands>;

/**
 * Bulk Overwrite Guild Application Commands
 *
 * Takes a list of application command JSON objects and overwrites the existing guild commands for your application in a guild.
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-guild-application-commands}
 */
export function BulkOverwriteGuildApplicationCommands<T extends ApplicationCommandStructureInfer[]>(applicationId: SnowflakeInfer, guildId: SnowflakeInfer, json: JSONBulkOverwriteGuildApplicationCommandsInfer): RestRequestOptions<T> {
	return {
		url: `/applications/${applicationId}/guilds/${guildId}/commands`,
		method: "PUT",
		body: JSONBulkOverwriteGuildApplicationCommands.parse(json),
	};
}

/**
 * Get Guild Application Command Permissions
 *
 * Fetch command permissions for all commands in a guild.
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#get-guild-application-command-permissions}
 */
export function GetGuildApplicationCommandPermissions<T extends ApplicationCommandStructureInfer[]>(applicationId: SnowflakeInfer, guildId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/applications/${applicationId}/guilds/${guildId}/commands/permissions`,
		method: "GET",
	};
}

/**
 * Get Application Command Permissions
 *
 * Fetch command permissions for a specific command in a guild.
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#get-application-command-permissions}
 */
export function GetApplicationCommandPermissions<T extends ApplicationCommandStructureInfer>(applicationId: SnowflakeInfer, guildId: SnowflakeInfer, commandId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}/permissions`,
		method: "GET",
	};
}

/**
 * JSON Edit Application Command Permissions
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#edit-application-command-permissions}
 */
export const JSONEditApplicationCommandPermissions = z.object({ permissions: z.array(ApplicationCommandPermissionsStructure) });

/**
 * JSON Edit Application Command Permissions Infer
 *
 * Is the inferred type of the {@link JSONEditApplicationCommandPermissions} zod object.
 */
export type JSONEditApplicationCommandPermissionsInfer = z.infer<typeof JSONEditApplicationCommandPermissions>;

/**
 * Edit Application Command Permissions
 *
 * Edit command permissions for a specific command in a guild.
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#edit-application-command-permissions}
 */
export function EditApplicationCommandPermissions<T extends ApplicationCommandStructureInfer>(applicationId: SnowflakeInfer, guildId: SnowflakeInfer, commandId: SnowflakeInfer, json: JSONEditApplicationCommandPermissionsInfer): RestRequestOptions<T> {
	return {
		url: `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}/permissions`,
		method: "PUT",
		body: JSONEditApplicationCommandPermissions.parse(json),
	};
}

/**
 * Create Interaction Response
 *
 * Create a response to an interaction.
 *
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#create-interaction-response}
 */
export function CreateInteractionResponse<T extends ApplicationCommandStructureInfer>(interactionId: SnowflakeInfer, interactionToken: string, json: InteractionResponseStructureInfer): RestRequestOptions<T> {
	return {
		url: `/interactions/${interactionId}/${interactionToken}/callback`,
		method: "POST",
		body: json,
	};
}

/**
 * Get Original Interaction Response
 *
 * Fetch the original response to an interaction.
 *
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#get-original-interaction-response}
 */
export function GetOriginalInteractionResponse<T extends ApplicationCommandStructureInfer>(applicationId: SnowflakeInfer, interactionToken: string): RestRequestOptions<T> {
	return {
		url: `/webhooks/${applicationId}/${interactionToken}/messages/@original`,
		method: "GET",
	};
}

/**
 * Query Edit Original Interaction Response
 *
 * The following parameters can be used to filter which and how many original interaction responses are edited.
 *
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#edit-original-interaction-response-query-string-parameters}
 */
export const QueryEditOriginalInteractionResponse = z.object({ thread_id: Snowflake.optional() });

/**
 * Query Edit Original Interaction Response Infer
 *
 * Is the inferred type of the {@link QueryEditOriginalInteractionResponse} zod object.
 */
export type QueryEditOriginalInteractionResponseInfer = z.infer<typeof QueryEditOriginalInteractionResponse>;

/**
 * JSON/Form Edit Original Interaction Response
 *
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#edit-original-interaction-response-json-form-params}
 */
export const JSONEditOriginalInteractionResponse = z.object({
	content: z.string().optional(),
	embeds: z.array(EmbedStructure).max(10).optional(),
	allowed_mentions: z.array(AllowedMentionTypesEnum),
	files: z.string().optional(),
	payload_json: z.string().optional(),
	attachments: z.array(AttachmentStructure.partial()).optional(),
});

/**
 * JSON/Form Edit Original Interaction Response Infer
 *
 * Is the inferred type of the {@link JSONEditOriginalInteractionResponse} zod object.
 */
export type JSONEditOriginalInteractionResponseInfer = z.infer<typeof JSONEditOriginalInteractionResponse>;

/**
 * Edit Original Interaction Response
 *
 * Edit the original response to an interaction.
 *
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#edit-original-interaction-response}
 */
export function EditOriginalInteractionResponse<T extends ApplicationCommandStructureInfer>(applicationId: SnowflakeInfer, interactionToken: string, json: JSONEditOriginalInteractionResponseInfer, query?: QueryEditOriginalInteractionResponseInfer): RestRequestOptions<T> {
	return {
		url: `/webhooks/${applicationId}/${interactionToken}/messages/@original`,
		method: "PATCH",
		body: JSONEditOriginalInteractionResponse.parse(json),
		query: QueryEditOriginalInteractionResponse.parse(query),
	};
}

/**
 * Delete Original Interaction Response
 *
 * Delete the original response to an interaction.
 *
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#delete-original-interaction-response}
 */
export function DeleteOriginalInteractionResponse(applicationId: SnowflakeInfer, interactionToken: string): RestRequestOptions<void> {
	return {
		url: `/webhooks/${applicationId}/${interactionToken}/messages/@original`,
		method: "DELETE",
	};
}

/**
 * Query Create Followup Message
 *
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#create-followup-message-query-string-parameters}
 */
export const QueryCreateFollowupMessage = z.object({
	wait: z.literal(true),
	thread_id: Snowflake.optional(),
});

/**
 * Query Create Followup Message Infer
 *
 * Is the inferred type of the {@link QueryCreateFollowupMessage} zod object.
 */
export type QueryCreateFollowupMessageInfer = z.infer<typeof QueryCreateFollowupMessage>;

/**
 * JSON Create Followup Message
 *
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#create-followup-message-json-form-params}
 */
export const JSONCreateFollowupMessage = z.object({
	content: z.string().optional(),
	username: z.string().optional(),
	avatar_url: z.string().optional(),
	tts: z.boolean().optional(),
	embeds: z.array(EmbedStructure).max(10).optional(),
	allowed_mentions: z.array(AllowedMentionTypesEnum).optional(),
	components: z.array(MessageComponentsStructure).optional(),
	files: z.string().optional(),
	payload_json: z.string().optional(),
	attachments: z.array(AttachmentStructure.partial()).optional(),
	flags: MessageFlagsEnum.optional(),
	thread_name: z.string().optional(),
	applied_tags: z.array(Snowflake).optional(),
	poll: PollCreateRequestObjectStructure.optional(),
});

/**
 * JSON Create Followup Message Infer
 *
 * Is the inferred type of the {@link JSONCreateFollowupMessage} zod object.
 */
export type JSONCreateFollowupMessageInfer = z.infer<typeof JSONCreateFollowupMessage>;

/**
 * Create Followup Message
 *
 * Create a followup message for an interaction.
 *
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#create-followup-message}
 */
export function CreateFollowupMessage<T extends ApplicationCommandStructureInfer>(applicationId: SnowflakeInfer, interactionToken: string, json: JSONCreateFollowupMessageInfer, query?: QueryCreateFollowupMessageInfer): RestRequestOptions<T> {
	return {
		url: `/webhooks/${applicationId}/${interactionToken}`,
		method: "POST",
		body: JSONCreateFollowupMessage.parse(json),
		query: QueryCreateFollowupMessage.parse(query),
	};
}

/**
 * Get Followup Message
 *
 * Fetch a followup message for an interaction.
 *
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#get-followup-message}
 */
export function GetFollowupMessage<T extends ApplicationCommandStructureInfer>(applicationId: SnowflakeInfer, interactionToken: string, messageId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/webhooks/${applicationId}/${interactionToken}/messages/${messageId}`,
		method: "GET",
	};
}

/**
 * Query Edit Followup Message
 *
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#edit-followup-message-query-string-parameters}
 */
export const QueryEditFollowupMessage = z.object({ thread_id: Snowflake.optional() });

/**
 * Query Edit Followup Message Infer
 *
 * Is the inferred type of the {@link QueryEditFollowupMessage} zod object.
 */
export type QueryEditFollowupMessageInfer = z.infer<typeof QueryEditFollowupMessage>;

/**
 * JSON Edit Followup Message
 *
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#edit-followup-message-json-form-params}
 */
export const JSONEditFollowupMessage = z.object({
	content: z.string().optional(),
	embeds: z.array(EmbedStructure).max(10).optional(),
	allowed_mentions: z.array(AllowedMentionTypesEnum).optional(),
	components: z.array(MessageComponentsStructure).optional(),
	files: z.string().optional(),
	payload_json: z.string().optional(),
	attachments: z.array(AttachmentStructure.partial()).optional(),
});

/**
 * JSON Edit Followup Message Infer
 *
 * Is the inferred type of the {@link JSONEditFollowupMessage} zod object.
 */
export type JSONEditFollowupMessageInfer = z.infer<typeof JSONEditFollowupMessage>;

/**
 * Edit Followup Message
 *
 * Edit a followup message for an interaction.
 *
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#edit-followup-message}
 */
export function EditFollowupMessage<T extends ApplicationCommandStructureInfer>(applicationId: SnowflakeInfer, interactionToken: string, messageId: SnowflakeInfer, json: JSONEditFollowupMessageInfer, query?: QueryEditFollowupMessageInfer): RestRequestOptions<T> {
	return {
		url: `/webhooks/${applicationId}/${interactionToken}/messages/${messageId}`,
		method: "PATCH",
		body: JSONEditFollowupMessage.parse(json),
		query: QueryEditFollowupMessage.parse(query),
	};
}

/**
 * Query Delete Followup Message
 *
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#delete-webhook-message-query-string-parameters}
 */
export const QueryDeleteFollowupMessage = z.object({ thread_id: Snowflake.optional() });

/**
 * Query Delete Webhook Message Infer
 *
 * Is the inferred type of the {@link QueryDeleteFollowupMessage} zod object.
 */
export type QueryDeleteFollowupMessageInfer = z.infer<typeof QueryDeleteFollowupMessage>;

/**
 * Delete Webhook Message
 *
 * Delete a followup message for an interaction.
 *
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#delete-webhook-message}
 */
export function DeleteFollowupMessage(applicationId: SnowflakeInfer, interactionToken: string, messageId: SnowflakeInfer, query?: QueryDeleteFollowupMessageInfer): RestRequestOptions<void> {
	return {
		url: `/webhooks/${applicationId}/${interactionToken}/messages/${messageId}`,
		method: "DELETE",
		query: QueryDeleteFollowupMessage.parse(query),
	};
}
