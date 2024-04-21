// https://discord.com/developers/docs/interactions/receiving-and-responding#interactions
import type { Integer, Snowflake } from "../global";
import type { Locales } from "../locales";
import type { EntitlementStructure } from "../monetization/entitlement";
import type { ApplicationIntegrationTypes } from "../resources/application";
import type {
	AllowedMentionsStructure,
	AttachmentStructure,
	ChannelStructure,
	EmbedStructure,
	MessageFlags,
	MessageStructure,
} from "../resources/channel";
import type { GuildMemberStructure, GuildStructure } from "../resources/guild";
import type { PollCreateRequestObjectStructure } from "../resources/poll";
import type { UserStructure } from "../resources/user";
import type { RoleStructure } from "../role";
import type {
	ApplicationCommandOptionChoiceStructure,
	ApplicationCommandOptionType,
	ApplicationCommandStructure,
} from "./application";
import type { ComponentTypes } from "./components";

// https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
export type InteractionStructure = {
	app_permissions: string;
	application_id: Snowflake;
	authorizing_integration_owners: ApplicationIntegrationTypes[];
	channel_id?: Snowflake;
	context: InteractionContextTypes;
	data?: ApplicationCommandDataStructure;
	entitlements: EntitlementStructure[];
	guild_id?: Snowflake;
	guild_locale: GuildStructure["preferred_locale"];
	id: Snowflake;
	locale?: Locales;
	member?: GuildMemberStructure;
	message?: MessageStructure;
	token: string;
	type: InteractionTypes;
	user?: UserStructure;
	version: Integer;
};

// https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-type
export enum InteractionTypes {
	Ping = 1,
	ApplicationCommand = 2,
	MessageComponent = 3,
	ApplicationCommandAutocomplete = 4,
	ModalSubmit = 5,
}

// https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-context-types
export enum InteractionContextTypes {
	Guild = 1,
	Bot = 2,
	Private = 3,
}

// https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-data-structure
export type ApplicationCommandDataStructure = {
	guild_id?: Snowflake;
	id: Snowflake;
	name: string;
	options?: ApplicationCommandInteractionDataOptionStructure[];
	resolved?: ResolvedDataStructure;
	target_id?: Snowflake;
	type: ApplicationCommandStructure["type"];
};

// https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-message-component-data-structure
export type MessageComponentDataStructure = {
	component_type: ComponentTypes;
	custom_id: string;
	resolved?: ResolvedDataStructure;
	values?: string[];
};

// https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-modal-submit-data-structure
export type ModalSubmitDataStructure = {
	components: any[];
	// TODO: Array of components
	custom_id: string;
};

// https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-resolved-data-structure
export type ResolvedDataStructure = {
	attachments?: Record<Snowflake, AttachmentStructure>;
	channels?: Record<Snowflake, ChannelStructure>;
	members?: Record<Snowflake, GuildMemberStructure>;
	messages?: Record<Snowflake, MessageStructure>;
	roles?: Record<Snowflake, RoleStructure>;
	users?: Record<Snowflake, UserStructure>;
};

// https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-interaction-data-option-structure
export type ApplicationCommandInteractionDataOptionStructure = {
	focused?: boolean;
	name: string;
	options?: ApplicationCommandInteractionDataOptionStructure[];
	type: ApplicationCommandOptionType;
	value?: Integer | boolean | string;
};

// https://discord.com/developers/docs/interactions/receiving-and-responding#message-interaction-object-message-interaction-structure
export type MessageInteractionStructure = {
	id: string;
	member: GuildMemberStructure;
	name: string;
	type: InteractionTypes;
	user: UserStructure;
};

// https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-response-structure
export type InteractionResponseStructure = {
	data?: AutocompleteCallbackData | MessageCallbackData | ModalCallbackData;
	type: InteractionCallbackTypes;
};

// https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-type
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

// https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-messages
export type MessageCallbackData = {
	allowed_mentions?: AllowedMentionsStructure;
	attachments?: AttachmentStructure[];
	components: any[];
	// TODO: Array of components
	content?: string;
	embeds?: EmbedStructure[];
	flags?: MessageFlags;
	poll?: PollCreateRequestObjectStructure;
	tts?: boolean;
};

// https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-autocomplete
export type AutocompleteCallbackData = {
	choices: ApplicationCommandOptionChoiceStructure[];
};

// https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-modal
export type ModalCallbackData = {
	components: any[];
	// TODO: Array of components
	custom_id: string;
	title: string;
};
