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
import { LocalesEnum, LocalesKeys } from "../globals/locales";
import { ApplicationIntegrationTypesEnum } from "./applications";
import {
	AllowedMentionsStructure,
	AttachmentStructure,
	ChannelStructure,
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
	 * Supports up to 10 embeds
	 */
	embeds: z.array(EmbedStructure).max(10).optional(),
	/**
	 * Allowed mentions object
	 */
	allowed_mentions: AllowedMentionsStructure.optional(),
	/**
	 * Message flags combined as a bitfield (only SUPPRESS_EMBEDS, EPHEMERAL, and SUPPRESS_NOTIFICATIONS can be set)
	 */
	flags: z.union([z.literal(MessageFlagsEnum.enum.SuppressEmbeds), z.literal(MessageFlagsEnum.enum.Ephemeral), z.literal(MessageFlagsEnum.enum.SuppressNotifications), z.bigint()]).optional(),
	/**
	 * TODO: Message components
	 */
	components: z.array(z.object({})).optional(),
	/**
	 * Attachment objects with filename and description
	 */
	attachments: z.array(AttachmentStructure).optional(),
	/**
	 * A poll!
	 */
	poll: PollCreateRequestStructure.optional(),
});

/**
 * Interaction Callback Data Structure Infer
 *
 * Is used to infer the type of the {@link InteractionCallbackDataStructure} object.
 */
export type InteractionCallbackDataStructureInfer = z.infer<typeof InteractionCallbackDataStructure>;

/**
 * Interaction Callback Type
 *
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-type}
 */
export enum InteractionCallbackType {
	/**
	 * ACK a Ping
	 */
	Pong = 1,
	/**
	 * Respond to an interaction with a message
	 */
	ChannelMessageWithSource = 4,
	/**
	 * ACK an interaction and edit a response later, the user sees a loading state
	 */
	DeferredChannelMessageWithSource = 5,
	/**
	 * For components, ACK an interaction and edit the original message later; the user does not see a loading state
	 */
	DeferredUpdateMessage = 6,
	/**
	 * For components, edit the message the component was attached to
	 */
	UpdateMessage = 7,
	/**
	 * Respond to an autocomplete interaction with suggested choices
	 */
	ApplicationCommandAutocompleteResult = 8,
	/**
	 * Respond to an interaction with a popup modal
	 */
	Modal = 9,
	/**
	 * Respond to an interaction with an upgrade button, only available for apps with monetization enabled
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
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-response-structure}
 */
export const InteractionResponseStructure = z.object({
	/**
	 * The type of response
	 */
	type: InteractionCallbackTypeEnum,
	/**
	 * An optional response message
	 */
	data: InteractionCallbackDataStructure.optional(),
});

/**
 * Interaction Response Structure Infer
 *
 * Is used to infer the type of the {@link InteractionResponseStructure} object.
 */
export type InteractionResponseStructureInfer = z.infer<typeof InteractionResponseStructure>;

/**
 * Message Interaction Structure
 *
 * This is sent on the message object when the message is a response to an Interaction without an existing message.
 *
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#message-interaction-object-message-interaction-structure}
 */
export const MessageInteractionStructure = z.object({
	/**
	 * ID of the interaction
	 */
	id: Snowflake,
	/**
	 * The type of interaction
	 */
	type: InteractionTypeEnum,
	/**
	 * The name of the interaction
	 */
	name: z.string(),
	/**
	 * The user who invoked the interaction
	 */
	user: UserStructure,
	/**
	 * Member who invoked the interaction in the guild
	 */
	member: GuildMemberStructure.partial().optional(),
});

/**
 * Message Interaction Structure Infer
 *
 * Is used to infer the type of the {@link MessageInteractionStructure} object.
 */
export type MessageInteractionStructureInfer = z.infer<typeof MessageInteractionStructure>;

/**
 * Application Command Interaction Data Option Structure Infer
 *
 * Is used to infer the type of the {@link ApplicationCommandInteractionDataOptionStructure} object.
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
 * All options have names, and an option can either be a parameter and input value--in which case value will be set--or it can denote a subcommand or group--in which case it will contain a top-level key and another array of options.
 *
 * value and options are mutually exclusive.
 *
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-interaction-data-option-structure}
 */
export const ApplicationCommandInteractionDataOptionStructure: z.ZodType<ApplicationCommandInteractionDataOptionStructureInfer> = z.object({
	/**
	 * Name of the parameter
	 */
	name: z.string(),
	/**
	 * Value of application command option type
	 */
	type: ApplicationCommandOptionTypeEnum,
	/**
	 * Value of the option resulting from user input
	 */
	value: z.union([z.string(), Integer, z.boolean()]).optional(),
	/**
	 * Present if this option is a group or subcommand
	 */
	options: z.array(z.lazy(() => ApplicationCommandInteractionDataOptionStructure)).optional(),
	/**
	 * true if this option is the currently focused option for autocomplete
	 */
	focused: z.boolean().optional(),
});

/**
 * Resolved Data Structure
 *
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-resolved-data-structure}
 */
export const ResolvedDataStructure = z.object({
	users: z.record(Snowflake, UserStructure).optional(),
	members: z.record(Snowflake, GuildMemberStructure.partial()).optional(),
	roles: z.record(Snowflake, RoleStructure).optional(),
	channels: z.record(Snowflake, ChannelStructure).optional(),
	messages: z.record(Snowflake, MessageStructure).optional(),
	attachments: z.record(Snowflake, AttachmentStructure).optional(),
});

/**
 * Resolved Data Structure Infer
 *
 * Is used to infer the type of the {@link ResolvedDataStructure} object.
 */
export type ResolvedDataStructureInfer = z.infer<typeof ResolvedDataStructure>;

/**
 * Modal Submit Data Structure
 *
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-modal-submit-data-structure}
 */
export const ModalSubmitDataStructure = z.object({
	/**
	 * The custom_id of the modal
	 */
	custom_id: z.string(),
	/**
	 * The values submitted by the user
	 *
	 * TODO: array of message components
	 */
	components: z.array(z.object({})),
});

/**
 * Modal Submit Data Structure Infer
 *
 * Is used to infer the type of the {@link ModalSubmitDataStructure} object.
 */
export type ModalSubmitDataStructureInfer = z.infer<typeof ModalSubmitDataStructure>;

/**
 * Message Component Data Structure
 *
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-message-component-data-structure}
 */
export const MessageComponentDataStructure = z.object({
	/**
	 * The custom_id of the component
	 */
	custom_id: z.string(),
	/**
	 * The type of the component
	 */
	component_type: z.number(),
	/**
	 * Values the user selected in a select menu component
	 */
	values: z.array(SelectOptionStructure).optional(),
	/**
	 * Resolved entities from selected options
	 */
	resolved: ResolvedDataStructure.optional(),
});

/**
 * Message Component Data Structure Infer
 *
 * Is used to infer the type of the {@link MessageComponentDataStructure} object.
 */
export type MessageComponentDataStructureInfer = z.infer<typeof MessageComponentDataStructure>;

/**
 * Application Command Data Structure
 *
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-interaction-data-structure}
 */
export const ApplicationCommandDataStructure = z.object({
	/**
	 * The ID of the invoked command
	 */
	id: Snowflake,
	/**
	 * The name of the invoked command
	 */
	name: z.string(),
	/**
	 * The type of the invoked command
	 */
	type: InteractionTypeEnum,
	/**
	 * Converted users + roles + channels + attachments
	 */
	resolved: ResolvedDataStructure.optional(),
	/**
	 * The params + values from the user
	 */
	options: z.array(ApplicationCommandInteractionDataOptionStructure).optional(),
	/**
	 * The ID of the guild the command is registered to
	 */
	guild_id: Snowflake.optional(),
	/**
	 * The ID of the user or message targeted by a user or message command
	 */
	target_id: Snowflake.optional(),
});

/**
 * Application Command Data Structure Infer
 *
 * Is used to infer the type of the {@link ApplicationCommandDataStructure} object.
 */
export type ApplicationCommandDataStructureInfer = z.infer<typeof ApplicationCommandDataStructure>;

/**
 * Interaction Context Types
 *
 * Context in Discord where an interaction can be used, or where it was triggered from. Details about using interaction contexts for application commands is in the commands context documentation.
 *
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-context-types}
 */
export enum InteractionContextTypes {
	/**
	 * Interaction can be used within servers
	 */
	Guild = 0,
	/**
	 * Interaction can be used within DMs with the app's bot user
	 */
	BotDM = 1,
	/**
	 * Interaction can be used within Group DMs and DMs other than the app's bot user
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
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure}
 */
export const InteractionStructure = z.object({
	/**
	 * ID of the interaction
	 */
	id: Snowflake,
	/**
	 * ID of the application this interaction is for
	 */
	application_id: Snowflake,
	/**
	 * Type of interaction
	 */
	type: InteractionTypeEnum,
	/**
	 * Interaction data payload
	 */
	data: z.union([ApplicationCommandDataStructure, MessageComponentDataStructure, ModalSubmitDataStructure, AutocompleteStructure]).optional(),
	/**
	 * Guild that the interaction was sent from
	 */
	guild_id: Snowflake.optional(),
	/**
	 * Channel that the interaction was sent from
	 */
	channel: ChannelStructure.partial().optional(),
	/**
	 * Channel that the interaction was sent from
	 */
	channel_id: Snowflake.optional(),
	/**
	 * Guild member data for the invoking user, including permissions
	 */
	member: GuildMemberStructure.optional(),
	/**
	 * User object for the invoking user, if invoked in a DM
	 */
	user: UserStructure.optional(),
	/**
	 * Continuation token for responding to the interaction
	 */
	token: z.string(),
	/**
	 * Read-only property, always 1
	 */
	version: z.number(),
	/**
	 * For components, the message they were attached to
	 */
	message: MessageStructure.optional(),
	/**
	 * Bitwise set of permissions the app has in the source location of the interaction
	 */
	app_permissions: z.string().optional(),
	/**
	 * Selected language of the invoking user
	 */
	locale: LocalesEnum.optional(),
	/**
	 * Guild's preferred locale, if invoked in a guild
	 */
	guild_locale: LocalesEnum.optional(),
	/**
	 * For monetized apps, any entitlements for the invoking user, representing access to premium SKUs
	 */
	entitlements: z.array(EntitlementStructure).optional(),
	/**
	 * Mapping of installation contexts that the interaction was authorized for to related user or guild IDs. See Authorizing Integration Owners Object for details
	 */
	authorizing_integration_owners: z.record(ApplicationIntegrationTypesEnum, z.string()).optional(),
	/**
	 * Context where the interaction was triggered from
	 */
	context: InteractionContextTypesEnum.optional(),
});

/**
 * Interaction Structure Infer
 *
 * Is used to infer the type of the {@link InteractionStructure} object.
 */
export type InteractionStructureInfer = z.infer<typeof InteractionStructure>;
