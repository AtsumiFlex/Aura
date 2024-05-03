/**
 * Message Components - Application Commands - Interactions
 *
 * An Interaction is the message that your application receives when a user uses an application command or a message component.
 *
 * For Slash Commands, it includes the values that the user submitted.
 *
 * For User Commands and Message Commands, it includes the resolved user or message on which the action was taken.
 *
 * For Message Components it includes identifying information about the component that was used. It will also include some metadata about how the interaction was triggered: the guild_id, channel, member and other fields. You can find all the values in our data models below.
 *
 * Application commands are native ways to interact with apps in the Discord client. There are 3 types of commands accessible in different interfaces: the chat input, a message's context menu (top-right menu or right-clicking in a message), and a user's context menu (right-clicking on a user).
 *
 * Message components—we'll call them "components" moving forward—are a framework for adding interactive elements to the messages your app or bot sends. They're accessible, customizable, and easy to use.
 *
 * There are several different types of components; this documentation will outline the basics of this new framework and each example.
 *
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interactions}
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-commands}
 * @see {@link https://discord.com/developers/docs/interactions/message-components#message-components}
 */

import { z } from "zod";
import type { IntegerInfer } from "../globals/globals";
import { Integer, Snowflake } from "../globals/globals";
import type { Locales } from "../globals/locales";
import { LocalesEnum } from "../globals/locales";
import { ApplicationIntegrationTypesEnum } from "./applications";
import {
	AllowedMentionTypesEnum,
	AttachmentStructure,
	ChannelStructure,
	EmbedStructure,
	MessageFlagsEnum,
	MessageStructure,
} from "./channels";
import { EmojiStructure } from "./emojis";
import { EntitlementStructure } from "./entitlements";
import { GuildMemberStructure } from "./guilds";
import { PollCreateRequestObjectStructure } from "./polls";
import { RoleStructure } from "./roles";
import { UserStructure } from "./user";

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
 * ComponentTypesEnum is a zod enum that represents the component types.
 */
export const ComponentTypesEnum = z.nativeEnum(ComponentTypes);

/**
 * Interaction Types
 *
 * @see {@link https://discord.com/developers/docs/interactions/message-components#interaction-object-interaction-type}
 */

export enum InteractionTypes {
	/**
	 * ACK a Ping
	 */
	Ping = 1,
	/**
	 * A command invocation
	 */
	ApplicationCommand = 2,
	/**
	 * A message component interaction
	 */
	MessageComponent = 3,
	/**
	 * An autocomplete interaction
	 */
	ApplicationCommandAutocomplete = 4,
	/**
	 * A modal submit interaction
	 */
	ModalSubmit = 5,
}

/**
 * InteractionTypesEnum is a zod enum that represents the interaction types.
 */
export const InteractionTypesEnum = z.nativeEnum(InteractionTypes);

/**
 * Text Input Styles
 *
 * @see {@link https://discord.com/developers/docs/interactions/message-components#text-input-styles}
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
 * TextInputStylesEnum is a zod enum that represents the text input styles.
 */
export const TextInputStylesEnum = z.nativeEnum(TextInputStyles);

/**
 * Text Input Structure
 *
 * Represents a text input.
 *
 * @see {@link https://discord.com/developers/docs/interactions/message-components#text-input}
 */
export const TextInputStructure = z.object({
	type: z.literal(ComponentTypesEnum.enum.TextInput),
	custom_id: z.string(),
	style: TextInputStylesEnum,
	label: z.string(),
	min_length: Integer.min(0).max(4_000).optional(),
	max_length: Integer.min(1).max(4_000).optional(),
	required: z.boolean().optional(),
	value: z.string().max(4_000).optional(),
	placeholder: z.string().max(100).optional(),
});

/**
 * TextInputStructureInfer
 *
 * The inferred type of the TextInputStructure zod object.
 */
export type TextInputStructureInfer = z.infer<typeof TextInputStructure>;

/**
 * Select Default Value Structure
 *
 * Represents the default value for a select menu.
 *
 * @see {@link https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-option-default}
 */
export const SelectDefaultValueStructure = z.object({
	id: z.string(),
	type: z.enum(["user", "role", "channel"]),
});

/**
 * SelectDefaultValueStructureInfer
 *
 * The inferred type of the SelectDefaultValueStructure zod object.
 */
export type SelectDefaultValueStructureInfer = z.infer<typeof SelectDefaultValueStructure>;

/**
 * Select Option Structure
 *
 * Represents a select option.
 *
 * @see {@link https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-option}
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
 * SelectOptionStructureInfer
 *
 * The inferred type of the SelectOptionStructure zod object.
 */
export type SelectOptionStructureInfer = z.infer<typeof SelectOptionStructure>;

/**
 * Select Menu Structure
 *
 * Represents a select menu.
 *
 * @see {@link https://discord.com/developers/docs/interactions/message-components#select-menu-object}
 */
export const SelectMenuStructure = z.object({
	type: z.literal(ComponentTypesEnum.enum.StringSelect),
	custom_id: z.string(),
	options: z.array(SelectOptionStructure).optional(),
	channel_types: z.array(z.number()).optional(),
	placeholder: z.string().max(150).optional(),
	default_values: z.array(SelectDefaultValueStructure).optional(),
	min_values: Integer.min(0).max(25).optional(),
	max_values: Integer.min(1).max(25).optional(),
	disabled: z.boolean().optional(),
});

/**
 * SelectMenuStructureInfer
 *
 * The inferred type of the SelectMenuStructure zod object.
 */
export type SelectMenuStructureInfer = z.infer<typeof SelectMenuStructure>;

/**
 * Button Styles
 *
 * @see {@link https://discord.com/developers/docs/interactions/message-components#button-object-button-styles}
 */
export enum ButtonStyles {
	/**
	 * Blurple button
	 */
	Primary = 1,
	/**
	 * Grey button
	 */
	Secondary = 2,
	/**
	 * Green button
	 */
	Success = 3,
	/**
	 * Red button
	 */
	Danger = 4,
	/**
	 * Grey button that navigates to a URL
	 */
	Link = 5,
}

/**
 * ButtonStylesEnum is a zod enum that represents the button styles.
 */
export const ButtonStylesEnum = z.nativeEnum(ButtonStyles);

/**
 * Button Structure
 *
 * Represents a button.
 *
 * @see {@link https://discord.com/developers/docs/interactions/message-components#button-object}
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
 * ButtonStructureInfer
 *
 * The inferred type of the ButtonStructure zod object.
 */
export type ButtonStructureInfer = z.infer<typeof ButtonStructure>;

/**
 * Application Command Permission Type
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
 * ApplicationCommandPermissionTypeEnum is a zod enum that represents the application command permission types.
 */
export const ApplicationCommandPermissionTypeEnum = z.nativeEnum(ApplicationCommandPermissionType);

/**
 * Application Command Permissions Structure
 *
 * Represents the permissions for an application command.
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object}
 */
export const ApplicationCommandPermissionsStructure = z.object({
	id: z.string(),
	type: ApplicationCommandPermissionTypeEnum,
	permission: z.boolean(),
});

/**
 * ApplicationCommandPermissionsStructureInfer
 *
 * The inferred type of the ApplicationCommandPermissionsStructure zod object.
 */
export type ApplicationCommandPermissionsStructureInfer = z.infer<typeof ApplicationCommandPermissionsStructure>;

/**
 * Guild Application Command Permissions Structure
 *
 * Returned when fetching the permissions for an app's command(s) in a guild.
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#get-guild-application-command-permissions}
 */
export const GuildApplicationCommandPermissionsStructure = z.object({
	id: Snowflake,
	application_id: Snowflake,
	guild_id: Snowflake,
	permissions: z.array(ApplicationCommandPermissionsStructure),
});

/**
 * GuildApplicationCommandPermissionsStructureInfer
 *
 * The inferred type of the GuildApplicationCommandPermissionsStructure zod object.
 */
export type GuildApplicationCommandPermissionsStructureInfer = z.infer<typeof GuildApplicationCommandPermissionsStructure>;

/**
 * Application Command Option Choice Structure
 *
 * If you specify choices for an option, they are the only valid values for a user to pick
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-option-choice-object-application-command-option-choice-structure}
 */
export const ApplicationCommandOptionChoiceStructure = z.object({
	name: z.string().max(100),
	name_localizations: z.record(LocalesEnum).optional(),
	value: z.union([z.string(), Integer]),
});

/**
 * ApplicationCommandOptionChoiceStructureInfer
 *
 * The inferred type of the ApplicationCommandOptionChoiceStructure zod object.
 */
export type ApplicationCommandOptionChoiceStructureInfer = z.infer<typeof ApplicationCommandOptionChoiceStructure>;

/**
 * Application Command Option Types
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
 * ApplicationCommandOptionTypeEnum is a zod enum that represents the application command option types.
 */
export const ApplicationCommandOptionTypeEnum = z.nativeEnum(ApplicationCommandOptionType);

/**
 * ApplicationCommandOptionStructureInfer
 *
 * The inferred type of the ApplicationCommandOptionStructure zod object.
 */
export type ApplicationCommandOptionStructureInfer = {
	autocomplete?: boolean;
	channel_types?: number[];
	choices?: ApplicationCommandOptionChoiceStructureInfer[];
	description: string;
	description_localizations?: Record<Locales, string>;
	max_length?: IntegerInfer;
	max_value?: number;
	min_length?: IntegerInfer;
	min_value?: number;
	name: string;
	name_localizations?: Record<Locales, string>;
	options?: ApplicationCommandOptionStructureInfer[];
	required?: boolean;
	type: ApplicationCommandOptionType;
};

/**
 * Application Command Option Structure
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-option-object-application-command-option-structure}
 */
export const ApplicationCommandOptionStructure: z.ZodType<ApplicationCommandOptionStructureInfer> = z.object({
	type: ApplicationCommandOptionTypeEnum,
	name: z.string().max(32),
	name_localizations: z.record(LocalesEnum).optional(),
	description: z.string().max(100),
	description_localizations: z.record(LocalesEnum).optional(),
	required: z.boolean().optional(),
	choices: z.array(ApplicationCommandOptionChoiceStructure).optional(),
	options: z.array(z.lazy(() => ApplicationCommandOptionStructure)).optional(),
	channel_types: z.array(z.number()).optional(),
	min_value: z.union([Integer, z.number()]).optional(),
	max_value: z.union([Integer, z.number()]).optional(),
	min_length: Integer.min(0).max(6_000).optional(),
	max_length: Integer.min(1).max(6_000).optional(),
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
 * ApplicationCommandTypesEnum is a zod enum that represents the application command types.
 */
export const ApplicationCommandTypesEnum = z.nativeEnum(ApplicationCommandTypes);

/**
 * Modal Structure
 *
 * Represents a modal.
 *
 * @see {@link https://discord.com/developers/docs/interactions/message-components#modal}
 */
export const ModalStructure = z.object({
	custom_id: z.string().max(100),
	title: z.string().max(45),
	components: z.array(TextInputStructure),
});

/**
 * ModalStructureInfer
 *
 * The inferred type of the ModalStructure zod object.
 */
export type ModalStructureInfer = z.infer<typeof ModalStructure>;

/**
 * Autocomplete Structure
 *
 * Represents an autocomplete.
 *
 * @see {@link https://discord.com/developers/docs/interactions/message-components#autocomplete}
 */
export const AutocompleteStructure = z.object({ choices: z.array(ApplicationCommandOptionChoiceStructure) });

/**
 * AutocompleteStructureInfer
 *
 * The inferred type of the AutocompleteStructure zod object.
 */
export type AutocompleteStructureInfer = z.infer<typeof AutocompleteStructure>;

/**
 * Message Components
 *
 * @see {@link https://discord.com/developers/docs/interactions/message-components#message-components}
 */
export const MessageComponentsStructure = z.object({
	type: ComponentTypesEnum,
	components: z.array(z.union([ButtonStructure, SelectMenuStructure, TextInputStructure])),
});

/**
 * MessageComponentsStructureInfer
 *
 * The inferred type of the MessageComponentsStructure zod object.
 */
export type MessageComponentsStructureInfer = z.infer<typeof MessageComponentsStructure>;

/**
 * Interaction Callback Data Structure
 *
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-data-structure}
 */
export const InteractionCallbackDataStructure = z.object({
	tts: z.boolean().optional(),
	content: z.string().optional(),
	embeds: z.array(EmbedStructure).max(10).optional(),
	allowed_mentions: AllowedMentionTypesEnum.optional(),
	flags: MessageFlagsEnum.optional(),
	components: z.array(MessageComponentsStructure).optional(),
	attachments: z.array(AttachmentStructure).optional(),
	poll: PollCreateRequestObjectStructure.optional(),
});

/**
 * InteractionCallbackDataStructureInfer
 *
 * The inferred type of the InteractionCallbackDataStructure zod object.
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
	 * respond to an interaction with a message
	 */
	ChannelMessageWithSource = 4,
	/**
	 * ACK an interaction and edit a response later, the user sees a loading state
	 */
	DeferredChannelMessageWithSource = 5,
	/**
	 * for components, ACK an interaction and edit the original message later; the user does not see a loading state
	 */
	DeferredUpdateMessage = 6,
	/**
	 * for components, edit the message the component was attached to
	 */
	UpdateMessage = 7,
	/**
	 * respond to an autocomplete interaction with suggested choices
	 */
	ApplicationCommandAutocompleteResult = 8,
	/**
	 * respond to an interaction with a popup modal
	 */
	Modal = 9,
	/**
	 * respond to an interaction with an upgrade button, only available for apps with monetization enabled
	 */
	PremiumRequired = 10,
}

/**
 * InteractionCallbackTypeEnum is a zod enum that represents the interaction callback types.
 */
export const InteractionCallbackTypeEnum = z.nativeEnum(InteractionCallbackType);

/**
 * Interaction Response Structure
 *
 * Represents an interaction response.
 *
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-response-structure}
 */
export const InteractionResponseStructure = z.object({
	type: InteractionCallbackTypeEnum,
	data: InteractionCallbackDataStructure.optional(),
});

/**
 * InteractionResponseStructureInfer
 *
 * The inferred type of the InteractionResponseStructure zod object.
 */
export type InteractionResponseStructureInfer = z.infer<typeof InteractionResponseStructure>;

/**
 * Message Interaction Structure
 *
 * Represents an interaction.
 *
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure}
 */
export const MessageInteractionStructure = z.object({
	id: Snowflake,
	type: InteractionTypesEnum,
	name: z.string(),
	user: UserStructure.optional(),
	member: GuildMemberStructure.partial().optional(),
});

/**
 * MessageInteractionStructureInfer
 *
 * The inferred type of the MessageInteractionStructure zod object.
 */
export type MessageInteractionStructureInfer = z.infer<typeof MessageInteractionStructure>;

/**
 * ApplicationCommandInteractionDataOptionStructureInfer
 *
 * The inferred type of the ApplicationCommandInteractionDataOptionStructure zod object.
 */
export type ApplicationCommandInteractionDataOptionStructureInfer = {
	focused?: boolean;
	name: string;
	options?: ApplicationCommandInteractionDataOptionStructureInfer[];
	type: ApplicationCommandOptionType;
	value?: IntegerInfer | boolean | string;
};

/**
 * Application Command Interaction Data Option Structure
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#interaction-applicationcommandinteractiondataoption}
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
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#interaction-resolved}
 */
export const ResolvedDataStructure = z.object({
	users: z.record(UserStructure).optional(),
	members: z.record(GuildMemberStructure.partial()).optional(),
	roles: z.record(RoleStructure).optional(),
	channels: z.record(ChannelStructure.partial()).optional(),
	messages: z.record(MessageStructure.partial()).optional(),
	attachments: z.record(AttachmentStructure).optional(),
});

/**
 * ResolvedDataStructureInfer
 *
 * The inferred type of the ResolvedDataStructure zod object.
 */
export type ResolvedDataStructureInfer = z.infer<typeof ResolvedDataStructure>;

/**
 * Modal Submit Data Structure
 *
 * Represents the data submitted by the user in a modal.
 *
 * @see {@link https://discord.com/developers/docs/interactions/message-components#modal-submit}
 */
export const ModalSubmitDataStructure = z.object({
	custom_id: z.string(),
	components: z.array(MessageComponentsStructure),
});

/**
 * ModalSubmitDataStructureInfer
 *
 * The inferred type of the ModalSubmitDataStructure zod object.
 */
export type ModalSubmitDataStructureInfer = z.infer<typeof ModalSubmitDataStructure>;

/**
 * Message Component Data Structure
 *
 * Represents the data submitted by the user in a message component.
 *
 * @see {@link https://discord.com/developers/docs/interactions/message-components#message-component-data}
 */
export const MessageComponentDataStructure = z.object({
	custom_id: z.string(),
	component_type: ComponentTypesEnum,
	values: z.array(SelectOptionStructure).optional(),
	resolved: ResolvedDataStructure.optional(),
});

/**
 * MessageComponentDataStructureInfer
 *
 * The inferred type of the MessageComponentDataStructure zod object.
 */
export type MessageComponentDataStructureInfer = z.infer<typeof MessageComponentDataStructure>;

/**
 * Application Command Data Structure
 *
 * Represents the data submitted by the user in an application command.
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#interaction-applicationcommandinteractiondata}
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
 * ApplicationCommandDataStructureInfer
 *
 * The inferred type of the ApplicationCommandDataStructure zod object.
 */
export type ApplicationCommandDataStructureInfer = z.infer<typeof ApplicationCommandDataStructure>;

/**
 * Interaction Context Types
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#interaction-context-types}
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
 * InteractionContextTypesEnum is a zod enum that represents the interaction context types.
 */
export const InteractionContextTypesEnum = z.nativeEnum(InteractionContextTypes);

/**
 * Application Command Structure
 *
 * Represents an application command.
 *
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-object}
 */
export const ApplicationCommandStructure = z.object({
	id: Snowflake,
	type: ApplicationCommandTypesEnum.optional(),
	application_id: Snowflake,
	guild_id: Snowflake.optional(),
	name: z.string().max(32),
	name_localizations: z.record(LocalesEnum).optional(),
	description: z.string().max(100),
	description_localizations: z.record(LocalesEnum).optional(),
	options: z.array(ApplicationCommandOptionStructure).optional(),
	default_member_permissions: z.string().optional(),
	dm_permission: z.boolean().optional(),
	default_permission: z.boolean().optional(),
	nsfw: z.boolean().optional(),
	integration_types: z.array(ApplicationIntegrationTypesEnum).optional(),
	contexts: z.array(InteractionContextTypesEnum).optional(),
	version: Snowflake,
});

/**
 * ApplicationCommandStructureInfer
 *
 * The inferred type of the ApplicationCommandStructure zod object.
 */
export type ApplicationCommandStructureInfer = z.infer<typeof ApplicationCommandStructure>;

/**
 * Interaction Structure
 *
 * Represents an interaction.
 *
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure}
 */
export const InteractionStructure = z.object({
	id: Snowflake,
	application_id: Snowflake,
	type: InteractionTypesEnum,
	data: ApplicationCommandDataStructure.optional(),
	guild_id: Snowflake.optional(),
	channel: ChannelStructure.partial().optional(),
	channel_id: Snowflake.optional(),
	member: GuildMemberStructure.optional(),
	user: UserStructure.optional(),
	token: z.string(),
	version: Snowflake,
	message: MessageStructure.optional(),
	app_permissions: z.string().optional(),
	locale: z.string().optional(),
	guild_locale: z.string().optional(),
	entitlements: z.array(EntitlementStructure).optional(),
	authorizing_integration_owners: z.record(ApplicationIntegrationTypesEnum).optional(),
	context: InteractionContextTypesEnum.optional(),
});

/**
 * InteractionStructureInfer
 *
 * The inferred type of the InteractionStructure zod object.
 */
export type InteractionStructureInfer = z.infer<typeof InteractionStructure>;
