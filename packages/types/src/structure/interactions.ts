import type { Locales } from "@aurajs/core";
import { LocalesEnum } from "@aurajs/core";
import { z } from "zod";
import { Double, Integer, Snowflake } from "../globals";
import { ApplicationInstallationTypeEnum } from "./application";
import {
	AllowedMentionsStructure,
	AttachmentStructure,
	ChannelStructure,
	EmbedStructure,
	MessageStructure,
} from "./channel";
import { EmojiStructure } from "./emoji";
import { GuildMemberStructure } from "./guild";
import { PollCreateRequestStructure } from "./poll";
import { RoleStructure } from "./role";
import { UserStructure } from "./user";

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

export const ComponentTypesEnum = z.nativeEnum(ComponentTypes);

export enum InteractionTypes {
	Ping = 1,
	ApplicationCommand = 2,
	MessageComponent = 3,
	ApplicationCommandAutocomplete = 4,
	ModalSubmit = 5,
}

export const InteractionTypesEnum = z.nativeEnum(InteractionTypes);

export enum TextInputStyles {
	Short = 1,
	Paragraph = 2,
}

export const TextInputStylesEnum = z.nativeEnum(TextInputStyles);

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

export const SelectDefaultValueStructure = z.object({
	id: z.string(),
	type: z.union([z.literal("user"), z.literal("role"), z.literal("channel")]),
});
export type SelectDefaultValueInfer = z.infer<typeof SelectDefaultValueStructure>;

export const SelectOptionStructure = z.object({
	label: z.string().max(100),
	value: z.string().max(100),
	description: z.string().max(100).optional(),
	emoji: EmojiStructure.partial().optional(),
	default: z.boolean().optional(),
});
export type SelectOptionInfer = z.infer<typeof SelectOptionStructure>;

export const SelectMenuStructure = z.object({
	type: z.union([z.literal(ComponentTypesEnum.enum.StringSelect), z.literal(ComponentTypesEnum.enum.UserSelect), z.literal(ComponentTypesEnum.enum.RoleSelect), z.literal(ComponentTypesEnum.enum.MentionableSelect), z.literal(ComponentTypesEnum.enum.ChannelSelect)]),
	custom_id: z.string().max(100),
	options: z.array(SelectOptionStructure).optional(),
	channel_types: z.array(z.string()).optional(),
	placeholder: z.string().max(150).optional(),
	default_values: z.array(SelectDefaultValueStructure).optional(),
	min_values: Integer.min(0).max(25).optional(),
	max_values: Integer.min(1).max(25).optional(),
	disabled: z.boolean().optional(),
});

export enum ButtonStyles {
	Primary = 1,
	Secondary = 2,
	Success = 3,
	Danger = 4,
	Link = 5,
}

export const ButtonStylesEnum = z.nativeEnum(ButtonStyles);

export const ButtonStructure = z.object({
	type: z.literal(ComponentTypesEnum.enum.Button),
	style: ButtonStylesEnum,
	label: z.string().max(80).optional(),
	emoji: EmojiStructure.partial().optional(),
	custom_id: z.string().max(100).optional(),
	url: z.string().optional(),
	disabled: z.boolean().optional(),
});
export type ButtonInfer = z.infer<typeof ButtonStructure>;

export enum ApplicationCommandPermissionTypes {
	Role = 1,
	User = 2,
	Channel = 3,
}

export const ApplicationCommandPermissionTypesEnum = z.nativeEnum(ApplicationCommandPermissionTypes);

export const ApplicationCommandPermissionStructure = z.object({
	id: z.string(),
	type: ApplicationCommandPermissionTypesEnum,
	permission: z.boolean(),
});
export type ApplicationCommandPermissionInfer = z.infer<typeof ApplicationCommandPermissionStructure>;

export const ApplicationCommandPermissionsStructure = z.object({
	id: z.string(),
	application_id: z.string(),
	guild_id: z.string(),
	permissions: z.array(ApplicationCommandPermissionStructure),
});
export type ApplicationCommandPermissionsInfer = z.infer<typeof ApplicationCommandPermissionsStructure>;

export const ApplicationCommandOptionChoiceStructure = z.object({
	name: z.string().max(100),
	name_localizations: z.record(LocalesEnum).optional().nullable(),
	value: z.union([z.string(), Integer, Double]),
});
export type ApplicationCommandOptionChoiceInfer = z.infer<typeof ApplicationCommandOptionChoiceStructure>;

export enum ApplicationCommandOptionTypes {
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

export const ApplicationCommandOptionTypesEnum = z.nativeEnum(ApplicationCommandOptionTypes);

export type ApplicationCommandOptionInfer = {
	autocomplete?: boolean;
	channel_types?: string[];
	choices?: ApplicationCommandOptionChoiceInfer[];
	description: string;
	description_localizations?: Record<Locales, string> | null;
	max_length?: number;
	max_value?: number;
	min_length?: number;
	min_value?: number;
	name: string;
	name_localizations?: Record<Locales, string> | null;
	options?: ApplicationCommandOptionInfer[];
	required?: boolean;
	type: ApplicationCommandOptionTypes;
};

export const ApplicationCommandOptionStructure: z.ZodType<ApplicationCommandOptionInfer> = z.object({
	type: ApplicationCommandOptionTypesEnum,
	name: z.string().max(32),
	name_localizations: z.record(LocalesEnum).optional().nullable(),
	description: z.string().max(100),
	description_localizations: z.record(LocalesEnum).optional().nullable(),
	required: z.boolean().optional(),
	choices: z.array(ApplicationCommandOptionChoiceStructure).optional(),
	options: z.array(z.lazy(() => ApplicationCommandOptionStructure)).optional(),
	channel_types: z.array(z.string()).optional(),
	min_value: z.union([Integer, Double]).optional(),
	max_value: z.union([Integer, Double]).optional(),
	min_length: Integer.min(0).max(6_000).optional(),
	max_length: Integer.min(1).max(6_000).optional(),
	autocomplete: z.boolean().optional(),
});

export enum ApplicationCommandTypes {
	ChatInput = 1,
	User = 2,
	Message = 3,
}

export const ApplicationCommandTypesEnum = z.nativeEnum(ApplicationCommandTypes);

export const ApplicationCommandStructure = z.object({
	id: Snowflake,
	type: ApplicationCommandTypesEnum.optional(),
	application_id: z.string(),
	guild_id: z.string().optional(),
	name: z.string().max(32),
	name_localizations: z.record(LocalesEnum).optional().nullable(),
	description: z.string().max(100),
	description_localizations: z.record(LocalesEnum).optional().nullable(),
	options: z.array(ApplicationCommandOptionStructure).optional(),
	default_member_permissions: z.string().optional(),
	dm_permission: z.boolean().optional(),
	default_permission: z.boolean().optional(),
	nsfw: z.boolean().optional(),
	integration_types: z.array(z.string()).optional(),
	contexts: z.array(z.string()).optional(),
	version: Snowflake,
});
export type ApplicationCommandInfer = z.infer<typeof ApplicationCommandStructure>;

export const ModalStructure = z.object({
	type: z.literal(4),
	custom_id: z.string().max(100),
	title: z.string().max(45),
	components: z.array(TextInputStructure).min(1).max(5),
});
export type ModalInfer = z.infer<typeof ModalStructure>;

export const AutocompleteStructure = z.object({ choices: z.array(ApplicationCommandOptionChoiceStructure).max(25) });
export type AutocompleteInfer = z.infer<typeof AutocompleteStructure>;

export const ComponentStructure = z.object({
	type: ComponentTypesEnum,
	components: z.array(z.union([ButtonStructure, SelectMenuStructure, TextInputStructure, AutocompleteStructure])).optional(),
});

export const MessageComponentStructure = z.object({
	tts: z.boolean().optional(),
	content: z.string().optional(),
	embeds: z.array(z.lazy(() => EmbedStructure)).max(10).optional(),
	allowed_mentions: z.lazy(() => AllowedMentionsStructure).optional(),
	flags: z.number().optional(),
	components: z.array(z.lazy(() => ComponentStructure)).optional(),
	attachments: z.array(z.lazy(() => AttachmentStructure)).optional(),
	poll: z.lazy(() => PollCreateRequestStructure).optional(),
});
export type MessageComponentInfer = z.infer<typeof MessageComponentStructure>;

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

export const InteractionCallbackTypesEnum = z.nativeEnum(InteractionCallbackTypes);

export const InteractionResponseStructure = z.object({
	type: InteractionCallbackTypesEnum,
	data: MessageComponentStructure.optional(),
});
export type InteractionResponseInfer = z.infer<typeof InteractionResponseStructure>;

export const MessageInteractionStructure = z.object({
	id: Snowflake,
	type: InteractionTypesEnum,
	name: z.string(),
	user: UserStructure,
	member: GuildMemberStructure.partial().optional(),
});
export type MessageInteractionInfer = z.infer<typeof MessageInteractionStructure>;

export type ApplicationCommandInteractionDataOptionInfer = {
	focused?: boolean;
	name: string;
	options?: ApplicationCommandInteractionDataOptionInfer[];
	type: ApplicationCommandOptionTypes;
	value?: boolean | number | string;
};

export const ApplicationCommandInteractionDataOptionStructure: z.ZodType<ApplicationCommandInteractionDataOptionInfer> = z.object({
	name: z.string().max(32),
	type: ApplicationCommandOptionTypesEnum,
	value: z.union([z.string(), Integer, Double, z.boolean()]).optional(),
	options: z.array(z.lazy(() => ApplicationCommandInteractionDataOptionStructure)).optional(),
	focused: z.boolean().optional(),
});

export const ResolvedDataStructure = z.object({
	users: z.record(UserStructure),
	members: z.record(GuildMemberStructure.partial()),
	roles: z.record(RoleStructure),
	channels: z.record(ChannelStructure.partial()),
	messages: z.record(MessageStructure.partial()),
	attachments: z.record(AttachmentStructure),
});
export type ResolvedDataInfer = z.infer<typeof ResolvedDataStructure>;

export const ModalSubmitDataStructure = z.object({
	custom_id: z.string(),
	components: z.array(ComponentStructure),
});
export type ModalSubmitDataInfer = z.infer<typeof ModalSubmitDataStructure>;

export const MessageComponentDataStructure = z.object({
	custom_id: z.string(),
	component_type: ComponentTypesEnum,
	values: z.array(SelectOptionStructure).optional(),
	resolved: ResolvedDataStructure.optional(),
});
export type MessageComponentDataInfer = z.infer<typeof MessageComponentDataStructure>;

export const ApplicationCommandDataStructure = z.object({
	id: Snowflake,
	name: z.string(),
	type: InteractionTypesEnum,
	resolved: ResolvedDataStructure.optional(),
	options: z.array(ApplicationCommandInteractionDataOptionStructure).optional(),
	guild_id: Snowflake.optional(),
	target_id: Snowflake.optional(),
});
export type ApplicationCommandInteractionDataInfer = z.infer<typeof ApplicationCommandDataStructure>;

export enum InteractionContextTypes {
	Guild = 0,
	BotDM = 1,
	PrivateChannel = 2,
}

export const InteractionContextTypesEnum = z.nativeEnum(InteractionContextTypes);

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
	entitlements: z.array(z.object({})).optional(),
	authorizing_integration_owners: z.record(ApplicationInstallationTypeEnum).optional(),
	context: InteractionContextTypesEnum.optional(),
});
