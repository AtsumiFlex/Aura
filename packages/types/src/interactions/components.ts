// https://discord.com/developers/docs/interactions/message-components#message-components
import type { Integer, Snowflake } from "../global";
import type { ChannelTypes } from "../resources/channel";
import type { EmojiStructure } from "../resources/emoji";

// https://discord.com/developers/docs/interactions/message-components#component-object-component-types
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

// https://discord.com/developers/docs/interactions/message-components#button-object-button-structure
export type ButtonStructure = {
	custom_id?: string;
	disabled?: boolean;
	emoji?: Pick<EmojiStructure, "animated" | "id" | "name">;
	label?: string;
	style: ButtonStyles;
	type: ComponentTypes.Button;
	url?: string;
};

// https://discord.com/developers/docs/interactions/message-components#button-object-button-styles
export enum ButtonStyles {
	Primary = 1,
	Secondary = 2,
	Success = 3,
	Danger = 4,
	Link = 5,
}

// https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-menu-structure
export type SelectMenuStructure = {
	channel_types?: ChannelTypes[];
	custom_id: string;
	default_value?: SelectMenuDefaultValue[];
	disabled?: boolean;
	max_values?: number;
	min_values?: number;
	options?: SelectMenuOptionStructure[];
	placeholder?: string;
	type: ComponentTypes.ChannelSelect | ComponentTypes.MentionableSelect | ComponentTypes.RoleSelect | ComponentTypes.StringSelect | ComponentTypes.UserSelect;
};

// https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-option-structure
export type SelectMenuOptionStructure = {
	default?: boolean;
	description?: string;
	emoji?: Pick<EmojiStructure, "animated" | "id" | "name">;
	label: string;
	value: string;
};

// https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-default-value-structure
export type SelectMenuDefaultValue = {
	id: Snowflake;
	type: string;
};

// https://discord.com/developers/docs/interactions/message-components#text-input-object-text-input-structure
export type TextInputStructure = {
	custom_id: string;
	label: string;
	max_length?: Integer;
	min_length?: Integer;
	placeholder?: string;
	required?: boolean;
	style: TextInputStyles;
	type: ComponentTypes.TextInput;
	value?: string;
};

// https://discord.com/developers/docs/interactions/message-components#text-input-object-text-input-styles
export enum TextInputStyles {
	Short = 1,
	Paragraph = 2,
}
