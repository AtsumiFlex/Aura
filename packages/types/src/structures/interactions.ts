/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interactions}
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-commands}
 * @see {@link https://discord.com/developers/docs/interactions/message-components#message-components}
 */

import type { Locales } from "@aurajs/core";
import type { Double, Integer, Snowflake } from "../globals";
import type { ApplicationIntegrationTypes } from "./application";
import type { AttachmentStructure, ChannelStructure, ChannelTypes, EmbedStructure, MessageStructure } from "./channel";
import type { EmojiStructure } from "./emoji";
import type { EntitlementStructure } from "./entitlements";
import type { GuildMemberStructure } from "./guild";
import type { PollCreateRequestStructure } from "./poll";
import type { RoleStructure } from "./role";
import type { UserStructure } from "./user";

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure}
 */
export type InteractionStructure = {
	app_permissions?: string;
	application_id: Snowflake;
	authorizing_integration_owners?: Record<ApplicationIntegrationTypes, Snowflake>;
	channel?: ChannelStructure;
	channel_id?: Snowflake;
	context?: InteractionContextTypes;
	data?: ApplicationCommandDataStructure | MessageComponentDataStructure | ModalSubmitDataStructure;
	entitlements?: EntitlementStructure[];
	guild_id?: Snowflake;
	guild_locale?: string;
	id: Snowflake;
	locale?: string;
	member?: GuildMemberStructure;
	message?: MessageStructure;
	token: string;
	type: InteractionTypes;
	user?: UserStructure;
	version: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-type}
 */
export enum InteractionTypes {
	Ping = 1,
	ApplicationCommand = 2,
	MessageComponent = 3,
	ApplicationCommandAutocomplete = 4,
	ModalSubmit = 5,
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-context-types}
 */
export enum InteractionContextTypes {
	Guild = 0,
	BotDM = 1,
	PrivateChannel = 2,
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-data-structure}
 */
export type ApplicationCommandDataStructure = {
	guild_id?: Snowflake;
	id: Snowflake;
	name: string;
	options?: ApplicationCommandInteractionDataOptionStructure[];
	resolved?: ResolvedDataStructure;
	target_id?: Snowflake;
	type: ApplicationCommandOptionType;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-message-component-data-structure}
 */
export type MessageComponentDataStructure = {
	component_type: ComponentTypes;
	custom_id: string;
	resolved?: ResolvedDataStructure;
	values?: SelectMenuOptionStructure[];
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-modal-submit-data-structure}
 */
export type ModalSubmitDataStructure = {
	components: MessageComponentStructure[];
	custom_id: string;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-resolved-data-structure}
 */
export type ResolvedDataStructure = {
	attachments?: Record<Snowflake, AttachmentStructure>;
	channels?: Record<Snowflake, ChannelStructure>;
	members?: Record<Snowflake, GuildMemberStructure>;
	messages?: Record<Snowflake, MessageStructure>;
	roles?: Record<Snowflake, RoleStructure>;
	users?: Record<Snowflake, UserStructure>;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-interaction-data-option-structure}
 */
export type ApplicationCommandInteractionDataOptionStructure = {
	focused?: boolean;
	name: string;
	options?: ApplicationCommandInteractionDataOptionStructure[];
	type: ApplicationCommandOptionType;
	value?: Double | Integer | boolean | string;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#message-interaction-object-message-interaction-structure}
 */
export type MessageInteractionStructure = {
	id: Snowflake;
	member?: GuildMemberStructure;
	name: string;
	type: InteractionCallbackTypes;
	user: UserStructure;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-response-structure}
 */
export type InteractionResponseStructure = {
	data?: AutocompleteStructure | MessageInteractionResponseStructure | ModalStructure;
	type: InteractionCallbackTypes;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-type}
 */
export enum InteractionCallbackTypes {
	Pong = 1,
	ChannelMessageWithSource = 4,
	DeferredChannelMessageWithSource = 5,
	DeferredUpdateMessage = 6,
	UpdateMessage = 7,
	ApplicationCommandAutocompleteResult = 8,
	Modal = 9,
	PremiumRequired = 10,
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-messages}
 */
export type MessageInteractionResponseStructure = {
	allowed_mentions?: object;
	attachments?: object[];
	components?: MessageComponentStructure[];
	content?: string;
	embeds?: EmbedStructure[];
	flags?: Integer;
	poll?: PollCreateRequestStructure;
	tts?: boolean;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-autocomplete}
 */
export type AutocompleteStructure = {
	choices: ApplicationCommandOptionStructure[];
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-modal}
 */
export type ModalStructure = {
	components?: MessageComponentStructure[];
	custom_id?: string;
	title?: string;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure}
 */
export type ApplicationCommandStructure = {
	application_id: Snowflake;
	default_member_permissions?: string;
	default_permission?: boolean;
	description: string;
	description_localizations?: Record<string, Locales>;
	guild_id?: Snowflake;
	id: Snowflake;
	integration_types?: ApplicationIntegrationTypes[];
	name: string;
	name_localizations?: Record<string, Locales>;
	nsfw?: boolean;
	options?: ApplicationCommandOptionStructure[];
	type?: ApplicationCommandTypes;
	version: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-types}
 */
export enum ApplicationCommandTypes {
	ChatInput = 1,
	User = 2,
	Message = 3,
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure}
 */
export type ApplicationCommandOptionStructure = {
	autocomplete?: boolean;
	channel_types?: ChannelTypes[];
	choices?: ApplicationCommandOptionChoiceStructure[];
	description: string;
	description_localizations?: Record<string, Locales>;
	max_length?: Integer;
	max_value?: Double | Integer;
	min_length?: Integer;
	min_value?: Double | Integer;
	name: string;
	name_localizations?: Record<string, Locales>;
	options?: ApplicationCommandOptionStructure[];
	required?: boolean;
	type: ApplicationCommandOptionType;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type}
 */
export enum ApplicationCommandOptionType {
	SubCommand = 1,
	SubCommandGroup = 2,
	String = 3,
	Integer = 4,
	Boolean = 5,
	User = 6,
	Channel = 7,
	Role = 8,
	Mentionable = 9,
	Number = 10,
	Attachment = 11,
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-choice-structure}
 */
export type ApplicationCommandOptionChoiceStructure = {
	name: string;
	name_localizations?: Record<string, Locales>;
	value: Double | Integer | string;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-guild-application-command-permissions-structure}
 */
export type GuildApplicationCommandPermissionStructure = {
	application_id: Snowflake;
	guild_id: Snowflake;
	id: Snowflake;
	permissions: ApplicationCommandPermissionStructure[];
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-application-command-permissions-structure}
 */
export type ApplicationCommandPermissionStructure = {
	id: Snowflake;
	permission: boolean;
	type: ApplicationCommandPermissionType;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-application-command-permission-type}
 */
export enum ApplicationCommandPermissionType {
	Role = 1,
	User = 2,
	Channel = 3,
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#get-global-application-commands-query-string-params}
 */
export type QueryGetGlobalApplicationCommands = {
	with_localization?: boolean;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#create-global-application-command-json-params}
 */
export type JSONCreateGlobalApplicationCommand = {
	default_member_permissions?: string;
	default_permission: boolean;
	description: string;
	description_localizations?: Record<string, Locales>;
	name: string;
	name_localizations?: Record<string, Locales>;
	nsfw?: boolean;
	options?: ApplicationCommandOptionStructure[];
	type?: ApplicationCommandTypes;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#edit-global-application-command-json-params}
 */
export type JSONEditGlobalApplicationCommand = {
	default_member_permissions?: string;
	default_permission: boolean;
	description: string;
	description_localizations?: Record<string, Locales>;
	name: string;
	name_localizations?: Record<string, Locales>;
	nsfw?: boolean;
	options?: ApplicationCommandOptionStructure[];
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#get-guild-application-commands-query-string-params}
 */
export type QueryGetGuildApplicationCommands = {
	with_localization?: boolean;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#create-guild-application-command-json-params}
 */
export type JSONCreateGuildApplicationCommand = {
	default_member_permissions?: string;
	default_permission: boolean;
	description: string;
	description_localizations?: Record<string, Locales>;
	name: string;
	name_localizations?: Record<string, Locales>;
	nsfw?: boolean;
	options?: ApplicationCommandOptionStructure[];
	type?: ApplicationCommandTypes;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#edit-guild-application-command-json-params}
 */
export type JSONEditGuildApplicationCommand = {
	default_member_permissions?: string;
	default_permission: boolean;
	description: string;
	description_localizations?: Record<string, Locales>;
	name: string;
	name_localizations?: Record<string, Locales>;
	nsfw?: boolean;
	options?: ApplicationCommandOptionStructure[];
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-guild-application-commands-bulk-application-command-json-params}
 */
export type JSONBulkOverwriteGuildApplicationCommands = {
	contexts: ApplicationCommandTypes[];
	default_member_permissions?: string;
	default_permission: boolean;
	description: string;
	description_localizations?: Record<string, Locales>;
	dm_permission?: boolean;
	id?: Snowflake;
	integration_types: ApplicationIntegrationTypes[];
	name: string;
	name_localizations?: Record<string, Locales>;
	nsfw?: boolean;
	options?: ApplicationCommandOptionStructure[];
	type?: ApplicationCommandTypes;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#edit-application-command-permissions-json-params}
 */
export type JSONEditApplicationCommandPermissions = {
	permissions: ApplicationCommandPermissionStructure[];
};

export type MessageComponentStructure = {
	components: ButtonStructure[] | SelectMenuStructure[] | TextInputStructure[];
	type: ComponentTypes;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/message-components#component-object-component-types}
 */
export enum ComponentTypes {
	ActionRow = 1,
	Button = 2,
	StringSelect = 3,
	TextInput = 4,
	UserSelect = 5,
	RoleSelect = 6,
	MentionableSelect = 7,
	ChannelSelect = 8,
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/message-components#button-object-button-structure}
 */
export type ButtonStructure = {
	custom_id?: string;
	disabled?: boolean;
	emoji?: Pick<EmojiStructure, "animated" | "id" | "name">;
	label?: string;
	style: ButtonStyles;
	type: ComponentTypes.Button;
	url?: string;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/message-components#button-object-button-styles}
 */
export enum ButtonStyles {
	Primary = 1,
	Secondary = 2,
	Success = 3,
	Danger = 4,
	Link = 5,
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-menu-structure}
 */
export type SelectMenuStructure = {
	custom_id: string;
	disabled?: boolean;
	max_values?: number;
	min_values?: number;
	options: SelectMenuOptionStructure[];
	placeholder?: string;
	type: ComponentTypes.StringSelect;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-option-structure}
 */
export type SelectMenuOptionStructure = {
	default?: boolean;
	description?: string;
	emoji?: Pick<EmojiStructure, "animated" | "id" | "name">;
	label: string;
	value: string;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-default-value-structure}
 */
export type SelectMenuDefaultValue = {
	id: Snowflake;
	type: string;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/message-components#text-input-object-text-input-structure}
 */
export type TextInputStructure = {
	custom_id: string;
	label: string;
	max_length?: number;
	min_length?: number;
	placeholder?: string;
	required?: boolean;
	style: TextInputStyles;
	type: ComponentTypes.TextInput;
	value?: string;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/message-components#text-input-object-text-input-styles}
 */
export enum TextInputStyles {
	Short = 1,
	Paragraph = 2,
}
