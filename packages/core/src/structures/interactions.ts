/**
 * Message Components - Application Commands - Interactions
 *
 * Message components—we'll call them "components" moving forward—are a framework for adding interactive elements to the messages your app or bot sends. They're accessible, customizable, and easy to use.
 *
 * There are several different types of components; this documentation will outline the basics of this new framework and each example.
 *
 * ---
 *
 * Application commands are native ways to interact with apps in the Discord client. There are 3 types of commands accessible in different interfaces: the chat input, a message's context menu (top-right menu or right-clicking in a message), and a user's context menu (right-clicking on a user).
 *
 * ---
 *
 * An Interaction is the message that your application receives when a user uses an application command or a message component.
 *
 * For Slash Commands, it includes the values that the user submitted.
 *
 * For User Commands and Message Commands, it includes the resolved user or message on which the action was taken.
 *
 * For Message Components it includes identifying information about the component that was used. It will also include some metadata about how the interaction was triggered: the guild_id, channel, member and other fields. You can find all the values in our data models below.
 *
 * @see {@link https://discord.com/developers/docs/interactions/message-components#message-components}
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-commands}
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interactions}
 */

import { z } from "zod";
import { Integer, Snowflake } from "../globals/formatters";
import { LocalesKeys } from "../globals/locales";
import { ApplicationIntegrationTypesEnum } from "./applications";
import { EmojiStructure } from "./emojis";
import { PollCreateRequestStructure } from "./polls";

/**
 * Component Types
 *
 * @see {@link https://discord.com/developers/docs/interactions/message-components#component-object-component-types}
 */
export enum ComponentTypes {
	/**
	 * Container for other components
	 */
	ActionRow = 1,
	/**
	 * Button object
	 */
	Button = 2,
	/**
	 * Select menu for picking from defined text options
	 */
	StringSelect = 3,
	/**
	 * Text input object
	 */
	TextInput = 4,
	/**
	 * Select menu for users
	 */
	UserSelect = 5,
	/**
	 * Select menu for roles
	 */
	RoleSelect = 6,
	/**
	 * Select menu for mentionables (users and roles)
	 */
	MentionableSelect = 7,
	/**
	 * Select menu for channels
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
 * Interaction Type
 *
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-type}
 */
export enum InteractionType {
	Ping = 1,
	ApplicationCommand = 2,
	MessageComponent = 3,
	ApplicationCommandAutocomplete = 4,
	ModalSubmit = 5,
}

/**
 * Interaction Type Enum
 *
 * Is a zod enum that represents the available {@link InteractionType}.
 */
export const InteractionTypeEnum = z.nativeEnum(InteractionType);

/**
 * Text Input Styles
 *
 * @see {@link https://discord.com/developers/docs/interactions/message-components#text-input-object-text-input-styles}
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
 * @see {@link https://discord.com/developers/docs/interactions/message-components#text-input-object-text-input-structure}
 */
export const TextInputStructure = z.object({
	/**
	 * 4 for a text input
	 */
	type: z.literal(ComponentTypesEnum.enum.TextInput),
	/**
	 * Developer-defined identifier for the input; max 100 characters
	 */
	custom_id: z.string().max(100),
	/**
	 * The Text Input Style
	 */
	style: TextInputStylesEnum,
	/**
	 * Label for this component; max 45 characters
	 */
	label: z.string().max(45),
	/**
	 * Minimum input length for a text input; min 0, max 4000
	 */
	min_length: z.number().min(0).max(4_000).optional(),
	/**
	 * Maximum input length for a text input; min 1, max 4000
	 */
	max_length: z.number().min(1).max(4_000).optional(),
	/**
	 * Whether this component is required to be filled (defaults to true)
	 */
	required: z.boolean().default(true).optional(),
	/**
	 * Pre-filled value for this component; max 4000 characters
	 */
	value: z.string().max(4_000).optional(),
	/**
	 * Custom placeholder text if the input is empty; max 100 characters
	 */
	placeholder: z.string().max(100).optional(),
});

/**
 * Text Input Structure Infer
 *
 * Is used to infer the type of the {@link TextInputStructure} object.
 */
export type TextInputStructureInfer = z.infer<typeof TextInputStructure>;

/**
 * Select Default Value Structure
 *
 * @see {@link https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-default-value-structure}
 */
export const SelectDefaultValueStructure = z.object({
	/**
	 * ID of a user, role, or channel
	 */
	id: Snowflake,
	/**
	 * Type of value that id represents. Either "user", "role", or "channel"
	 */
	type: z.union([z.literal("user"), z.literal("role"), z.literal("channel")]),
});

/**
 * Select Default Value Structure Infer
 *
 * Is used to infer the type of the {@link SelectDefaultValueStructure} object.
 */
export type SelectDefaultValueStructureInfer = z.infer<typeof SelectDefaultValueStructure>;

/**
 * Select Option Structure
 *
 * @see {@link https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-option-structure}
 */
export const SelectOptionStructure = z.object({
	/**
	 * User-facing name of the option; max 100 characters
	 */
	label: z.string().max(100),
	/**
	 * Dev-defined value of the option; max 100 characters
	 */
	value: z.string().max(100),
	/**
	 * Additional description of the option; max 100 characters
	 */
	description: z.string().max(100).optional(),
	/**
	 * id, name, and animated
	 */
	emoji: EmojiStructure.pick({
		id: true,
		name: true,
		animated: true,
	}).optional(),
	/**
	 * Will show this option as selected by default
	 */
	default: z.boolean().optional(),
});

/**
 * Select Option Structure Infer
 *
 * Is used to infer the type of the {@link SelectOptionStructure} object.
 */
export type SelectOptionStructureInfer = z.infer<typeof SelectOptionStructure>;

/**
 * Select Menu Structure
 *
 * @see {@link https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-menu-structure}
 */
export const SelectMenuStructure = z.object({
	/**
	 * Type of select menu component (text: 3, user: 5, role: 6, mentionable: 7, channels: 8)
	 */
	type: z.union([z.literal(ComponentTypesEnum.enum.StringSelect), z.literal(ComponentTypesEnum.enum.UserSelect), z.literal(ComponentTypesEnum.enum.RoleSelect), z.literal(ComponentTypesEnum.enum.MentionableSelect), z.literal(ComponentTypesEnum.enum.ChannelSelect)]),
	/**
	 * ID for the select menu; max 100 characters
	 */
	custom_id: z.string().max(100),
	/**
	 * Specified choices in a select menu (only required and available for string selects (type 3); max 25
	 */
	options: z.array(SelectOptionStructure).max(25).optional(),
	/**
	 * TODO: List of channel types to include in the channel select component (type 8)
	 */
	channel_types: z.array(z.string()).optional(),
	/**
	 * Placeholder text if nothing is selected; max 150 characters
	 */
	placeholder: z.string().max(150).optional(),
	/**
	 * List of default values for auto-populated select menu components; number of default values must be in the range defined by min_values and max_values
	 */
	default_values: z.array(SelectDefaultValueStructure).optional(),
	/**
	 * Minimum number of items that must be chosen (defaults to 1); min 0, max 25
	 */
	min_values: z.number().min(0).max(25).default(1).optional(),
	/**
	 * Maximum number of items that can be chosen (defaults to 1); max 25
	 */
	max_values: z.number().min(1).max(25).default(1).optional(),
	/**
	 * Whether select menu is disabled (defaults to false)
	 */
	disabled: z.boolean().default(false).optional(),
});

/**
 * Select Menu Structure Infer
 *
 * Is used to infer the type of the {@link SelectMenuStructure} object.
 */
export type SelectMenuStructureInfer = z.infer<typeof SelectMenuStructure>;

/**
 * Button Styles
 *
 * @see {@link https://discord.com/developers/docs/interactions/message-components#button-object-button-styles}
 */
export enum ButtonStyles {
	/**
	 * blurple
	 */
	Primary = 1,
	/**
	 * grey
	 */
	Secondary = 2,
	/**
	 * green
	 */
	Success = 3,
	/**
	 * red
	 */
	Danger = 4,
	/**
	 * grey, navigates to a URL
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
 * @see {@link https://discord.com/developers/docs/interactions/message-components#button-object-button-structure}
 */
export const ButtonStructure = z.object({
	/**
	 * 2 for a button
	 */
	type: z.literal(ComponentTypesEnum.enum.Button),
	/**
	 * A button style
	 */
	style: ButtonStylesEnum,
	/**
	 * Text that appears on the button; max 80 characters
	 */
	label: z.string().max(80).optional(),
	/**
	 * name, id, and animated
	 */
	emoji: EmojiStructure.pick({
		name: true,
		id: true,
		animated: true,
	}).optional(),
	/**
	 * Developer-defined identifier for the button; max 100 characters
	 */
	custom_id: z.string().max(100).optional(),
	/**
	 * URL for link-style buttons
	 */
	url: z.string().optional(),
	/**
	 * Whether the button is disabled (defaults to false)
	 */
	disabled: z.boolean().default(false).optional(),
});

/**
 * Button Structure Infer
 *
 * Is used to infer the type of the {@link ButtonStructure} object.
 */
export type ButtonStructureInfer = z.infer<typeof ButtonStructure>;

/**
 * Application Command Permission Type
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-application-command-permission-type}
 */
export enum ApplicationCommandPermissionType {
	Role = 1,
	User = 2,
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
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-application-command-permissions-structure}
 */
export const ApplicationCommandPermissionsStructure = z.object({
	/**
	 * ID of the role, user, or channel. It can also be a permission constant
	 */
	id: Snowflake,
	/**
	 * role (1), user (2), or channel (3)
	 */
	type: ApplicationCommandPermissionTypeEnum,
	/**
	 * true to allow, false, to disallow
	 */
	permission: z.boolean(),
});

/**
 * Application Command Permissions Structure Infer
 *
 * Is used to infer the type of the {@link ApplicationCommandPermissionsStructure} object.
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
	/**
	 * ID of the command or the application ID
	 */
	id: Snowflake,
	/**
	 * ID of the application the command belongs to
	 */
	application_id: Snowflake,
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
	/**
	 * Permissions for the command in the guild, max of 100
	 */
	permissions: z.array(ApplicationCommandPermissionsStructure).max(100),
});

/**
 * Guild Application Command Permissions Structure Infer
 *
 * Is used to infer the type of the {@link GuildApplicationCommandPermissionsStructure} object.
 */
export type GuildApplicationCommandPermissionsStructureInfer = z.infer<typeof GuildApplicationCommandPermissionsStructure>;

/**
 * Application Command Option Choice Structure
 *
 * If you specify choices for an option, they are the only valid values for a user to pick
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-choice-structure}
 */
export const ApplicationCommandOptionChoiceStructure = z.object({
	/**
	 * 1-100 character choice name
	 */
	name: z.string().min(1).max(100),
	/**
	 * Localization dictionary for the name field. Values follow the same restrictions as name
	 */
	name_localizations: z.record(LocalesKeys, z.string()).optional(),
	/**
	 * Value for the choice, up to 100 characters if string
	 */
	value: z.union([z.string(), Integer]),
});

/**
 * Application Command Option Choice Structure Infer
 *
 * Is used to infer the type of the {@link ApplicationCommandOptionChoiceStructure} object.
 */
export type ApplicationCommandOptionChoiceStructureInfer = z.infer<typeof ApplicationCommandOptionChoiceStructure>;

/**
 * Application Command Option Type
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type}
 */
export enum ApplicationCommandOptionType {
	/**
	 * Subcommand
	 */
	SubCommand = 1,
	/**
	 * Subcommand group
	 */
	SubCommandGroup = 2,
	/**
	 * String
	 */
	String = 3,
	/**
	 * Any integer between -2^53 and 2^53
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
	 * Includes all channel types + categories
	 */
	Channel = 7,
	/**
	 * Role
	 */
	Role = 8,
	/**
	 * Includes users and roles
	 */
	Mentionable = 9,
	/**
	 * Any double between -2^53 and 2^53
	 */
	Number = 10,
	/**
	 * Attachment object
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
 * Is used to infer the type of the {@link ApplicationCommandOptionStructure} object.
 */
export type ApplicationCommandOptionStructureInfer = {
	autocomplete?: boolean;
	channel_types?: string[];
	choices?: ApplicationCommandOptionChoiceStructureInfer[];
	description: string;
	description_localizations?: Record<string, string>; // TODO: Check les "LocaleKeys" car le types n'est pas bon
	max_length?: number;
	max_value?: number;
	min_length?: number;
	min_value?: number;
	name: string;
	name_localizations?: Record<string, string>; // TODO: Check les "LocaleKeys" car le types n'est pas bon
	options?: ApplicationCommandOptionStructureInfer[];
	required?: boolean;
	type: ApplicationCommandOptionType;
};

/**
 * Application Command Option Structure
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure}
 */
export const ApplicationCommandOptionStructure: z.ZodType<ApplicationCommandOptionStructureInfer> = z.object({
	/**
	 * Type of option
	 */
	type: ApplicationCommandOptionTypeEnum,
	/**
	 * 1-32 character name
	 */
	name: z.string().min(1).max(32),
	/**
	 * Localization dictionary for the name field. Values follow the same restrictions as name
	 */
	name_localizations: z.record(LocalesKeys, z.string()).optional(),
	/**
	 * 1-100 character description
	 */
	description: z.string().min(1).max(100),
	/**
	 * Localization dictionary for the description field. Values follow the same restrictions as description
	 */
	description_localizations: z.record(LocalesKeys, z.string()).optional(),
	/**
	 * If the parameter is required or optional--default false
	 */
	required: z.boolean().default(false).optional(),
	/**
	 * Choices for STRING, INTEGER, and NUMBER types for the user to pick from, max 25
	 */
	choices: z.array(ApplicationCommandOptionChoiceStructure).max(25).optional(),
	/**
	 * If the option is a subcommand or subcommand group type, these nested options will be the parameters
	 */
	options: z.array(z.lazy(() => ApplicationCommandOptionStructure)).optional(),
	/**
	 * TODO: If the option is a channel type, the channels shown will be restricted to these types
	 */
	channel_types: z.array(z.string()).optional(),
	/**
	 * If the option is an INTEGER or NUMBER type, the minimum value permitted
	 */
	min_value: z.union([Integer, z.number()]).optional(),
	/**
	 * If the option is an INTEGER or NUMBER type, the maximum value permitted
	 */
	max_value: z.union([Integer, z.number()]).optional(),
	/**
	 * For option type STRING, the minimum allowed length (minimum of 0, maximum of 6000)
	 */
	min_length: z.number().min(0).max(6_000).optional(),
	/**
	 * For option type STRING, the maximum allowed length (minimum of 1, maximum of 6000)
	 */
	max_length: z.number().min(1).max(6_000).optional(),
	/**
	 * If autocomplete interactions are enabled for this STRING, INTEGER, or NUMBER type option
	 */
	autocomplete: z.boolean().optional(),
});

/**
 * Application Command Types
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-types}
 */
export enum ApplicationCommandTypes {
	/**
	 * Slash commands; a text-based command that shows up when a user types /
	 */
	ChatInput = 1,
	/**
	 * A UI-based command that shows up when you right click or tap on a user
	 */
	User = 2,
	/**
	 * A UI-based command that shows up when you right click or tap on a message
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
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure}
 */
export const ApplicationCommandStructure = z.object({
	/**
	 * Unique ID of command
	 */
	id: Snowflake,
	/**
	 * Type of command, defaults to 1
	 */
	type: ApplicationCommandTypesEnum.optional(),
	/**
	 * ID of the parent application
	 */
	application_id: Snowflake,
	/**
	 * Guild ID of the command, if not global
	 */
	guild_id: Snowflake.optional(),
	/**
	 * Name of command, 1-32 characters
	 */
	name: z.string().min(1).max(32),
	/**
	 * Localization dictionary for name field. Values follow the same restrictions as name
	 */
	name_localizations: z.record(LocalesKeys, z.string()).optional(),
	/**
	 * Description for CHAT_INPUT commands, 1-100 characters. Empty string for USER and MESSAGE commands
	 */
	description: z.string().min(1).max(100),
	/**
	 * Localization dictionary for description field. Values follow the same restrictions as description
	 */
	description_localizations: z.record(LocalesKeys, z.string()).optional(),
	/**
	 * Parameters for the command, max of 25
	 */
	options: z.array(ApplicationCommandOptionStructure).max(25).optional(),
	/**
	 * Set of permissions represented as a bit set
	 */
	default_member_permissions: z.string().optional(),
	/**
	 * Deprecated (use contexts instead); Indicates whether the command is available in DMs with the app, only for globally-scoped commands. By default, commands are visible
	 */
	dm_permission: z.boolean().optional(),
	/**
	 * Not recommended for use as field will soon be deprecated. Indicates whether the command is enabled by default when the app is added to a guild, defaults to true
	 */
	default_permission: z.boolean().optional(),
	/**
	 * Indicates whether the command is age-restricted, defaults to false
	 */
	nsfw: z.boolean().optional(),
	/**
	 * Installation context(s) where the command is available, only for globally-scoped commands. Defaults to GUILD_INSTALL (0)
	 */
	integration_types: z.array(ApplicationIntegrationTypesEnum.default(ApplicationIntegrationTypesEnum.enum.GuildInstall)).optional(),
	/**
	 * TODO: Interaction context(s) where the command can be used, only for globally-scoped commands. By default, all interaction context types included for new commands
	 */
	contexts: z.array(z.string()).optional(),
	/**
	 * Autoincrementing version identifier updated during substantial record changes
	 */
	version: Snowflake,
});

/**
 * Application Command Structure Infer
 *
 * Is used to infer the type of the {@link ApplicationCommandStructure} object.
 */
export type ApplicationCommandStructureInfer = z.infer<typeof ApplicationCommandStructure>;

/**
 * Modal
 *
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-modal}
 */
export const ModalStructure = z.object({
	/**
	 * Developer-defined identifier for the modal; max 100 characters
	 */
	custom_id: z.string().max(100),
	/**
	 * Title of the popup modal; max 45 characters
	 */
	title: z.string().max(45),
	/**
	 * Components that make up the modal
	 *
	 * TODO: Array of Components
	 */
	components: z.array(z.object({})).min(1).max(5),
});

/**
 * Modal Infer
 *
 * Is used to infer the type of the {@link ModalStructure} object.
 */
export type ModalStructureInfer = z.infer<typeof ModalStructure>;

/**
 * Autocomplete Structure
 *
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-autocomplete}
 */
export const AutocompleteStructure = z.object({
	/**
	 * Autocomplete choices (max of 25 choices)
	 */
	choices: z.array(ApplicationCommandOptionChoiceStructure).max(25),
});

/**
 * Autocomplete Infer
 *
 * Is used to infer the type of the {@link AutocompleteStructure} object.
 */
export type AutocompleteStructureInfer = z.infer<typeof AutocompleteStructure>;

/**
 * Interaction Callback Data Structure
 *
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-data-structure}
 */
export const InteractionCallbackDataStructure = z.object({
	/**
	 * Is the response TTS
	 */
	tts: z.boolean().optional(),
	/**
	 * Message content
	 */
	content: z.string().optional(),
	/**
	 * TODO: Supports up to 10 embeds
	 */
	embeds: z.array(z.object({})).max(10).optional(),
	/**
	 * TODO: Allowed mentions object
	 */
	allowed_mentions: z.object({}).optional(),
	/**
	 * TODO: Message flags combined as a bitfield (only SUPPRESS_EMBEDS, EPHEMERAL, and SUPPRESS_NOTIFICATIONS can be set)
	 */
	flags: z.number().optional(),
	/**
	 * TODO: Message components
	 */
	components: z.array(z.object({})).optional(),
	/**
	 * TODO: Attachment objects with filename and description
	 */
	attachments: z.array(z.object({})).optional(),
	/**
	 * A poll!
	 */
	poll: PollCreateRequestStructure.optional(),
});
