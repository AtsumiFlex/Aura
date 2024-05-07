/**
 * Message Components
 *
 * Components are interactive messages that can be used to create interactive messages.
 *
 * @see {@link https://discord.com/developers/docs/interactions/message-components#message-components}
 */

import { z } from "zod";
import { Integer, Snowflake } from "../globals/formatters";
import { LocalesKeysEnum } from "../globals/locales";
import { ApplicationIntegrationTypesEnum } from "./applications";
import type { ChannelTypes } from "./channels";
import {
	AllowedMentionsStructure,
	AttachmentStructure,
	ChannelStructure,
	ChannelTypesEnum,
	EmbedStructure,
	MessageFlagsEnum,
	MessageStructure,
} from "./channels";
import { EmojiStructure } from "./emojis";
import { EntitlementStructure } from "./entitlements";
import { GuildMemberStructure } from "./guilds";
import { PollCreateRequestStructure } from "./polls";
import { RoleStructure } from "./roles";
import { UserStructure } from "./users";

/**
 * Component Types
 *
 * The types of components.
 *
 * @see {@link https://discord.com/developers/docs/interactions/message-components#component-object-component-types}
 */
export enum ComponentTypes {
	/**
	 * Action Row
	 */
	ActionRow = 1,
	/**
	 * Button
	 */
	Button = 2,
	/**
	 * Select Menu
	 */
	SelectMenu = 3,
	/**
	 * Text Input
	 */
	TextInput = 4,
	/**
	 * User Select
	 */
	UserSelect = 5,
	/**
	 * Role Select
	 */
	RoleSelect = 6,
	/**
	 * Mentionable Select
	 */
	MentionableSelect = 7,
	/**
	 * Channel Select
	 */
	ChannelSelect = 8,
}

/**
 * Component Types Enum
 *
 * Is a zod enum that represents the available {@link ComponentTypes}.
 */
export const ComponentTypesEnum = z.nativeEnum(ComponentTypes);

/**
 * Text Input Styles
 *
 * The styles of text inputs.
 *
 * @see {@link https://discord.com/developers/docs/interactions/message-components#component-object-component-styles}
 */
export enum TextInputStyles {
	/**
	 * Single-line input
	 */
	Short = 1,
	/**
	 * Multi-line input
	 */
	Paragraph = 2,
}

/**
 * Text Input Styles Enum
 *
 * Is a zod enum that represents the available {@link TextInputStyles}.
 */
export const TextInputStylesEnum = z.nativeEnum(TextInputStyles);

/**
 * Text Input Structure
 *
 * Represents a text input component.
 *
 * @see {@link https://discord.com/developers/docs/interactions/message-components#component-object-component-structure}
 */
export const TextInputStructure = z.object({
	type: z.literal(ComponentTypesEnum.enum.TextInput),
	custom_id: z.string().max(100),
	style: TextInputStylesEnum,
	label: z.string().max(45),
	min_length: Integer.min(0).max(4_000).optional(),
	max_length: Integer.min(1).max(4_000).optional(),
	required: z.boolean().optional(),
	value: z.string().max(4_000).optional(),
	placeholder: z.string().max(100).optional(),
});

/**
 * Text Input Structure Infer
 *
 * The inferred type of {@link TextInputStructure}
 */
export type TextInputStructureInfer = z.infer<typeof TextInputStructure>;

/**
 * Select Default Value Structure
 *
 * Represents the default value of a select menu.
 *
 * @see {@link https://discord.com/developers/docs/interactions/message-components#component-object-component-structure}
 */
export const SelectDefaultValueStructure = z.object({
	id: Snowflake,
	type: z.union([z.literal("user"), z.literal("role"), z.literal("channel")]),
});

/**
 * Select Default Value Structure Infer
 *
 * The inferred type of {@link SelectDefaultValueStructure}
 */
export type SelectDefaultValueStructureInfer = z.infer<typeof SelectDefaultValueStructure>;

/**
 * Select Option Structure
 *
 * Represents an option in a select menu.
 *
 * @see {@link https://discord.com/developers/docs/interactions/message-components#component-object-component-structure}
 */
export const SelectOptionStructure = z.object({
	label: z.string().max(100),
	value: z.string().max(100),
	description: z.string().max(100).optional(),
	emoji: EmojiStructure.pick({
		id: true,
		name: true,
		animated: true,
	}).optional(),
	default: z.boolean().optional(),
});

/**
 * Select Option Structure Infer
 *
 * The inferred type of {@link SelectOptionStructure}
 */
export type SelectOptionStructureInfer = z.infer<typeof SelectOptionStructure>;

/**
 * Select Menu Structure
 *
 * Represents a select menu component.
 *
 * @see {@link https://discord.com/developers/docs/interactions/message-components#component-object-component-structure}
 */
export const SelectMenuStructure = z.object({
	type: z.union([z.literal(ComponentTypesEnum.enum.SelectMenu), z.literal(ComponentTypesEnum.enum.UserSelect), z.literal(ComponentTypesEnum.enum.RoleSelect), z.literal(ComponentTypesEnum.enum.MentionableSelect), z.literal(ComponentTypesEnum.enum.ChannelSelect)]),
	custom_id: z.string().max(100),
	options: z.array(SelectOptionStructure).optional(),
	channel_types: z.array(ChannelTypesEnum).optional(),
	placeholder: z.string().max(150).optional(),
	default_values: z.array(SelectDefaultValueStructure).optional(),
	min_values: Integer.min(0).max(25).optional(),
	max_values: Integer.min(1).max(25).optional(),
	disabled: z.boolean().optional(),
});

/**
 * Select Menu Structure Infer
 *
 * The inferred type of {@link SelectMenuStructure}
 */
export type SelectMenuStructureInfer = z.infer<typeof SelectMenuStructure>;

/**
 * Button Styles
 *
 * The styles of buttons.
 *
 * @see {@link https://discord.com/developers/docs/interactions/message-components#component-object-component-styles}
 */
export enum ButtonStyles {
	/**
	 * Primary
	 */
	Primary = 1,
	/**
	 * Secondary
	 */
	Secondary = 2,
	/**
	 * Success
	 */
	Success = 3,
	/**
	 * Danger
	 */
	Danger = 4,
	/**
	 * Link
	 */
	Link = 5,
}

/**
 * Button Styles Enum
 *
 * Is a zod enum that represents the available {@link ButtonStyles}.
 */
export const ButtonStylesEnum = z.nativeEnum(ButtonStyles);

/**
 * Button Structure
 *
 * Represents a button component.
 *
 * @see {@link https://discord.com/developers/docs/interactions/message-components#component-object-component-structure}
 */
export const ButtonStructure = z.object({
	type: z.literal(ComponentTypesEnum.enum.Button),
	style: ButtonStylesEnum,
	label: z.string().max(80).optional(),
	emoji: EmojiStructure.pick({
		id: true,
		name: true,
		animated: true,
	}).optional(),
	custom_id: z.string().max(100).optional(),
	url: z.string().optional(),
	disabled: z.boolean().optional(),
});

/**
 * Button Structure Infer
 *
 * The inferred type of {@link ButtonStructure}
 */
export type ButtonStructureInfer = z.infer<typeof ButtonStructure>;

/**
 * Application Command Permission Type
 *
 * The types of application command permissions.
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-application-command-permission-type}
 */
export enum ApplicationCommandPermissionType {
	/**
	 * Role
	 */
	Role = 1,
	/**
	 * User
	 */
	User = 2,
	/**
	 * Channel
	 */
	Channel = 3,
}

/**
 * Application Command Permission Type Enum
 *
 * Is a zod enum that represents the available {@link ApplicationCommandPermissionType}.
 */
export const ApplicationCommandPermissionTypeEnum = z.nativeEnum(ApplicationCommandPermissionType);

/**
 * Application Command Permissions Structure
 *
 * Application command permissions allow you to enable or disable commands for specific users, roles, or channels within a guild.
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-application-command-permission-structure}
 */
export const ApplicationCommandPermissionsStructure = z.object({
	id: Snowflake,
	type: ApplicationCommandPermissionTypeEnum,
	permission: z.boolean(),
});

/**
 * Application Command Permissions Structure Infer
 *
 * The inferred type of {@link ApplicationCommandPermissionsStructure}
 */
export type ApplicationCommandPermissionsStructureInfer = z.infer<typeof ApplicationCommandPermissionsStructure>;

/**
 * Guild Application Command Permissions Structure
 *
 * Returned when fetching the permissions for an app's command(s) in a guild.
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-guild-application-command-permissions-structure}
 */
export const GuildApplicationCommandPermissionsStructure = z.object({
	id: Snowflake,
	application_id: Snowflake,
	guild_id: Snowflake,
	permissions: z.array(ApplicationCommandPermissionsStructure),
});

/**
 * Guild Application Command Permissions Structure Infer
 *
 * The inferred type of {@link GuildApplicationCommandPermissionsStructure}
 */
export type GuildApplicationCommandPermissionsStructureInfer = z.infer<typeof GuildApplicationCommandPermissionsStructure>;

/**
 * Application Command Option Choice Structure
 *
 * If you specify choices for an option, they are the only valid values for a user to pick
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-option-choice-structure}
 */
export const ApplicationCommandOptionChoiceStructure = z.object({
	name: z.string().max(100),
	name_localizations: z.record(LocalesKeysEnum, z.string()).optional(),
	value: z.union([z.string(), Integer]),
});

/**
 * Application Command Option Choice Structure Infer
 *
 * The inferred type of {@link ApplicationCommandOptionChoiceStructure}
 */
export type ApplicationCommandOptionChoiceStructureInfer = z.infer<typeof ApplicationCommandOptionChoiceStructure>;

/**
 * Application Command Option Type
 *
 * The types of application command options.
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-option-type}
 */
export enum ApplicationCommandOptionType {
	/**
	 * Sub Command
	 */
	SubCommand = 1,
	/**
	 * Sub Command Group
	 */
	SubCommandGroup = 2,
	/**
	 * String
	 */
	String = 3,
	/**
	 * Integer
	 */
	Integer = 4,
	/**
	 * Boolean
	 */
	Boolean = 5,
	/**
	 * User
	 */
	User = 6,
	/**
	 * Channel
	 */
	Channel = 7,
	/**
	 * Role
	 */
	Role = 8,
	/**
	 * Mentionable
	 */
	Mentionable = 9,
	/**
	 * Number
	 */
	Number = 10,
	/**
	 * Attachment
	 */
	Attachment = 11,
}

/**
 * Application Command Option Type Enum
 *
 * Is a zod enum that represents the available {@link ApplicationCommandOptionType}.
 */
export const ApplicationCommandOptionTypeEnum = z.nativeEnum(ApplicationCommandOptionType);

/**
 * Application Command Option Structure Infer
 *
 * The inferred type of {@link ApplicationCommandOptionStructure}
 */
export type ApplicationCommandOptionStructureInfer = {
	autocomplete?: boolean | null;
	channel_types?: ChannelTypes[] | null;
	choices?: ApplicationCommandOptionChoiceStructureInfer[] | null;
	description: string;
	description_localizations?: Record<string, string> | null;
	max_length?: number | null;
	max_value?: number | null;
	min_length?: number | null;
	min_value?: number | null;
	name: string;
	name_localizations?: Record<string, string> | null;
	options?: ApplicationCommandOptionStructureInfer[] | null;
	required?: boolean | null;
	type: ApplicationCommandOptionType;
};

/**
 * Application Command Option Structure
 *
 * Represents an option for an application command.
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-option-structure}
 */
export const ApplicationCommandOptionStructure: z.ZodType<ApplicationCommandOptionStructureInfer> = z.object({
	type: ApplicationCommandOptionTypeEnum,
	name: z.string().min(1).max(32),
	name_localizations: z.record(LocalesKeysEnum, z.string().min(1).max(32)).optional().nullable(),
	description: z.string().min(1).max(100),
	description_localizations: z.record(LocalesKeysEnum, z.string().min(1).max(100)).optional().nullable(),
	required: z.boolean().optional(),
	choices: z.array(ApplicationCommandOptionChoiceStructure).optional(),
	options: z.array(z.lazy(() => ApplicationCommandOptionStructure)).optional(),
	channel_types: z.array(ChannelTypesEnum).optional(),
	min_value: Integer.optional(),
	max_value: Integer.optional(),
	min_length: Integer.min(0).max(6_000).optional(),
	max_length: Integer.min(1).max(6_000).optional(),
	autocomplete: z.boolean().optional(),
});

/**
 * Application Command Types
 *
 * The types of application commands.
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-types}
 */
export enum ApplicationCommandTypes {
	/**
	 * Slash Command
	 */
	ChatInput = 1,
	/**
	 * User Command
	 */
	User = 2,
	/**
	 * Message Command
	 */
	Message = 3,
}

/**
 * Application Command Types Enum
 *
 * Is a zod enum that represents the available {@link ApplicationCommandTypes}.
 */
export const ApplicationCommandTypesEnum = z.nativeEnum(ApplicationCommandTypes);

/**
 * Application Command Structure
 *
 * Represents an application command.
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure}
 */
export const ApplicationCommandStructure = z.object({
	id: Snowflake,
	type: ApplicationCommandTypesEnum.optional(),
	application_id: Snowflake,
	guild_id: Snowflake.optional(),
	name: z.string().min(1).max(32),
	name_localizations: z.record(LocalesKeysEnum, z.string().min(1).max(32)).optional().nullable(),
	description: z.string().min(1).max(100),
	description_localizations: z.record(LocalesKeysEnum, z.string().min(1).max(100)).optional().nullable(),
	options: z.array(ApplicationCommandOptionStructure).optional(),
	default_member_permissions: z.string().nullable(),
	dm_permission: z.boolean().optional(),
	default_permission: z.boolean().optional().nullable(),
	nsfw: z.boolean().optional(),
	integration_types: z.array(ApplicationIntegrationTypesEnum).optional().nullable(),
	contexts: z.array(z.string()).optional().nullable(), // TODO: Interaction Context Types
	version: Snowflake,
});

/**
 * Application Command Structure Infer
 *
 * The inferred type of {@link ApplicationCommandStructure}
 */
export type ApplicationCommandStructureInfer = z.infer<typeof ApplicationCommandStructure>;

/**
 * Modal Structure
 *
 * Represents a modal component.
 *
 * @see {@link https://discord.com/developers/docs/interactions/message-components#component-object-component-structure}
 */
export const ModalStructure = z.object({
	custom_id: z.string().max(100),
	title: z.string().max(45),
	components: z.array(TextInputStructure).min(1).max(5),
});

/**
 * Modal Structure Infer
 *
 * The inferred type of {@link ModalStructure}
 */
export type ModalStructureInfer = z.infer<typeof ModalStructure>;

/**
 * Autocomplete Structure
 *
 * Represents an autocomplete component.
 *
 * @see {@link https://discord.com/developers/docs/interactions/message-components#component-object-component-structure}
 */
export const AutocompleteStructure = z.object({ choices: z.array(ApplicationCommandOptionChoiceStructure).max(25) });

/**
 * Autocomplete Structure Infer
 *
 * The inferred type of {@link AutocompleteStructure}
 */
export type AutocompleteStructureInfer = z.infer<typeof AutocompleteStructure>;

/**
 * Interaction Callback Data Structure
 *
 * Represents the data for an interaction callback.
 *
 * @see {@link https://discord.com/developers/docs/interactions/slash-commands#interaction-response-object-interaction-callback-data-structure}
 */
export const InteractionCallbackDataStructure = z.object({
	tts: z.boolean().optional(),
	content: z.string().optional(),
	embeds: z.array(EmbedStructure).max(10).optional(),
	allowed_mentions: AllowedMentionsStructure.optional(),
	flags: MessageFlagsEnum.optional(),
	components: z.array(z.any()).optional(), // TODO: Message Components
	attachments: z.array(AttachmentStructure.partial()).optional(),
	poll: PollCreateRequestStructure.optional(),
});

/**
 * Interaction Callback Data Structure Infer
 *
 * The inferred type of {@link InteractionCallbackDataStructure}
 */
export type InteractionCallbackDataStructureInfer = z.infer<typeof InteractionCallbackDataStructure>;

/**
 * Interaction Callback Type
 *
 * The types of interaction callback.
 *
 * @see {@link https://discord.com/developers/docs/interactions/slash-commands#interaction-response-object-interaction-callback-type}
 */
export enum InteractionCallbackType {
	/**
	 * Pong
	 */
	Pong = 1,
	/**
	 * Channel Message With Source
	 */
	ChannelMessageWithSource = 4,
	/**
	 * Deferred Channel Message With Source
	 */
	DeferredChannelMessageWithSource = 5,
	/**
	 * Deferred Update Message
	 */
	DeferredUpdateMessage = 6,
	/**
	 * Update Message
	 */
	UpdateMessage = 7,
	/**
	 * Application Command Autocomplete Result
	 */
	ApplicationCommandAutocompleteResult = 8,
	/**
	 * Modal
	 */
	Modal = 9,
	/**
	 * Premium Required
	 */
	PremiumRequired = 10,
}

/**
 * Interaction Callback Type Enum
 *
 * Is a zod enum that represents the available {@link InteractionCallbackType}.
 */
export const InteractionCallbackTypeEnum = z.nativeEnum(InteractionCallbackType);

/**
 * Interaction Response Structure
 *
 * Represents an interaction response.
 *
 * @see {@link https://discord.com/developers/docs/interactions/slash-commands#interaction-response-object-interaction-response-structure}
 */
export const InteractionResponseStructure = z.object({
	type: InteractionCallbackTypeEnum,
	data: InteractionCallbackDataStructure.optional(),
});

/**
 * Interaction Response Structure Infer
 *
 * The inferred type of {@link InteractionResponseStructure}
 */
export type InteractionResponseStructureInfer = z.infer<typeof InteractionResponseStructure>;

/**
 * Interaction Types
 *
 * The types of interactions.
 *
 * @see {@link https://discord.com/developers/docs/interactions/slash-commands#interaction-object-interaction-type}
 */
export enum InteractionTypes {
	/**
	 * Ping
	 */
	Ping = 1,
	/**
	 * Application Command
	 */
	ApplicationCommand = 2,
	/**
	 * Message Component
	 */
	MessageComponent = 3,
	/**
	 * Application Command Autocomplete
	 */
	ApplicationCommandAutocomplete = 4,
	/**
	 * Modal Submit
	 */
	ModalSubmit = 5,
}

/**
 * Interaction Types Enum
 *
 * Is a zod enum that represents the available {@link InteractionTypes}.
 */
export const InteractionTypesEnum = z.nativeEnum(InteractionTypes);

/**
 * Message Interaction Structure
 *
 * Represents an interaction.
 *
 * @see {@link https://discord.com/developers/docs/interactions/slash-commands#interaction-object-interaction-structure}
 */
export const MessageInteractionStructure = z.object({
	id: Snowflake,
	type: InteractionTypesEnum,
	name: z.string(),
	user: UserStructure,
	member: GuildMemberStructure.partial().optional(),
});

/**
 * Message Interaction Structure Infer
 *
 * The inferred type of {@link MessageInteractionStructure}
 */
export type MessageInteractionStructureInfer = z.infer<typeof MessageInteractionStructure>;

/**
 * Application Command Interaction Data Option Structure Infer
 *
 * The inferred type of {@link ApplicationCommandInteractionDataOptionStructure}
 */
export type ApplicationCommandInteractionDataOptionStructureInfer = {
	focused?: boolean;
	name: string;
	options?: ApplicationCommandInteractionDataOptionStructureInfer[];
	type: ApplicationCommandOptionType;
	value?: boolean | number | string;
};

/**
 * Application Command Interaction Data Option Structure
 *
 * Represents an option for an application command interaction.
 *
 * @see {@link https://discord.com/developers/docs/interactions/slash-commands#application-command-interaction-data-option-structure}
 */
export const ApplicationCommandInteractionDataOptionStructure: z.ZodType<ApplicationCommandInteractionDataOptionStructureInfer> = z.object({
	name: z.string(),
	type: ApplicationCommandOptionTypeEnum,
	value: z.union([z.string(), Integer, z.boolean()]).optional(),
	options: z.array(z.lazy(() => ApplicationCommandInteractionDataOptionStructure)).optional(),
	focused: z.boolean().optional(),
});

/**
 * Resolved Data Structure
 *
 * Represents the resolved data for an interaction.
 *
 * @see {@link https://discord.com/developers/docs/interactions/slash-commands#resolved-data}
 */
export const ResolvedDataStructure = z.object({
	users: z.record(Snowflake, UserStructure).optional(),
	members: z.record(Snowflake, GuildMemberStructure.partial()).optional(),
	roles: z.record(Snowflake, RoleStructure).optional(),
	channels: z.record(Snowflake, ChannelStructure.partial()).optional(),
	messages: z.record(Snowflake, MessageStructure.partial()).optional(),
	attachments: z.record(Snowflake, AttachmentStructure).optional(),
});

/**
 * Resolved Data Structure Infer
 *
 * The inferred type of {@link ResolvedDataStructure}
 */
export type ResolvedDataStructureInfer = z.infer<typeof ResolvedDataStructure>;

/**
 * Modal Submit Data Structure
 *
 * Represents the data for a modal submit.
 *
 * @see {@link https://discord.com/developers/docs/interactions/message-components#component-object-component-structure}
 */
export const ModalSubmitDataStructure = z.object({
	custom_id: z.string().max(100),
	components: z.array(z.any()).optional(), // TODO: Message Components
});

/**
 * Modal Submit Data Structure Infer
 *
 * The inferred type of {@link ModalSubmitDataStructure}
 */
export type ModalSubmitDataStructureInfer = z.infer<typeof ModalSubmitDataStructure>;

/**
 * Message Component Data Structure
 *
 * Represents the data for a message component.
 *
 * @see {@link https://discord.com/developers/docs/interactions/message-components#component-object-component-structure}
 */
export const MessageComponentDataStructure = z.object({
	custom_id: z.string().max(100),
	component_type: ComponentTypesEnum,
	values: z.array(SelectOptionStructure).optional(),
	resolved: ResolvedDataStructure.optional(),
});

/**
 * Message Component Data Structure Infer
 *
 * The inferred type of {@link MessageComponentDataStructure}
 */
export type MessageComponentDataStructureInfer = z.infer<typeof MessageComponentDataStructure>;

/**
 * Application Command Data Structure
 *
 * Represents the data for an application command.
 *
 * @see {@link https://discord.com/developers/docs/interactions/slash-commands#application-command-interaction-data-structure}
 */
export const ApplicationCommandDataStructure = z.object({
	id: Snowflake,
	name: z.string(),
	type: ApplicationCommandTypesEnum,
	resolved: ResolvedDataStructure.optional(),
	options: z.array(ApplicationCommandInteractionDataOptionStructure).optional(),
	guild_id: Snowflake.optional(),
	target_id: Snowflake.optional(),
});

/**
 * Application Command Data Structure Infer
 *
 * The inferred type of {@link ApplicationCommandDataStructure}
 */
export type ApplicationCommandDataStructureInfer = z.infer<typeof ApplicationCommandDataStructure>;

/**
 * Interaction Context Types
 *
 * The types of interaction contexts.
 *
 * @see {@link https://discord.com/developers/docs/interactions/slash-commands#interaction-object-interaction-context-type}
 */
export enum InteractionContextTypes {
	/**
	 * Guild
	 */
	Guild = 0,
	/**
	 * Bot DM
	 */
	BotDM = 1,
	/**
	 * Private Channel
	 */
	PrivateChannel = 2,
}

/**
 * Interaction Context Types Enum
 *
 * Is a zod enum that represents the available {@link InteractionContextTypes}.
 */
export const InteractionContextTypesEnum = z.nativeEnum(InteractionContextTypes);

/**
 * Interaction Structure
 *
 * Represents an interaction.
 *
 * @see {@link https://discord.com/developers/docs/interactions/slash-commands#interaction-object-interaction-structure}
 */
export const InteractionStructure = z.object({
	id: Snowflake,
	application_id: Snowflake,
	type: InteractionTypesEnum,
	data: ApplicationCommandDataStructure.optional(),
	guild_id: Snowflake.optional(),
	channel: ChannelStructure.partial().optional(),
	channel_id: Snowflake.optional(),
	member: GuildMemberStructure.partial().optional(),
	user: UserStructure.optional(),
	token: z.string(),
	version: Integer,
	message: MessageStructure.partial().optional(),
	app_permissions: z.string().optional(),
	locale: z.string().optional(),
	guild_locale: z.string().optional(),
	entitlements: z.array(EntitlementStructure).optional(),
	authorizing_integration_owners: z.record(ApplicationIntegrationTypesEnum, z.string()).optional(),
	context: InteractionContextTypesEnum.optional(),
});

/**
 * Interaction Structure Infer
 *
 * The inferred type of {@link InteractionStructure}
 */
export type InteractionStructureInfer = z.infer<typeof InteractionStructure>;
