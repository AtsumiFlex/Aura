// https://discord.com/developers/docs/interactions/application-commands#application-commands
import type { Integer, Snowflake } from "../global";
import type { Locales } from "../locales";
import type { BitwisePermissionFlags } from "../permission";
import type { ApplicationIntegrationTypes } from "../resources/application";
import type { ChannelTypes } from "../resources/channel";
import type { InteractionContextTypes } from "./responding";

// https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure
export type ApplicationCommandStructure = {
	application_id: Snowflake;
	contexts?: InteractionContextTypes[];
	default_member_permissions: BitwisePermissionFlags[];
	description: string;
	description_localizations?: Record<Locales, string> | null;
	dm_permissions?: boolean | null;
	guild_id?: Snowflake;
	id: Snowflake;
	integration_types?: ApplicationIntegrationTypes[];
	name: string;
	name_localizations?: Record<Locales, string> | null;
	nsfw?: boolean;
	options?: ApplicationCommandOptionStructure[];
	type: ApplicationCommandTypes;
	version: Snowflake;
};

// https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-types
export enum ApplicationCommandTypes {
	ChatInput = 1,
	User = 2,
	Message = 3,
}

// https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
export type ApplicationCommandOptionStructure = {
	autocomplete?: boolean;
	channel_types?: ChannelTypes[];
	choices?: ApplicationCommandOptionChoiceStructure[];
	description: string;
	description_localizations?: Record<Locales, string> | null;
	max_length?: Integer;
	max_value?: Integer;
	min_length?: Integer;
	min_value?: Integer;
	name: string;
	name_localizations?: Record<Locales, string> | null;
	options?: ApplicationCommandOptionStructure[];
	required?: boolean;
	type: ApplicationCommandOptionType;
};

// https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type
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

// https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-choice-structure
export type ApplicationCommandOptionChoiceStructure = {
	name: string;
	name_localizations?: Record<Locales, string>;
	value: Integer | string;
};

// https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-guild-application-command-permissions-structure
export type GuildApplicationCommandPermissionsStructure = {
	application_id: Snowflake;
	guild_id: Snowflake;
	id: Snowflake;
	permissions: ApplicationCommandPermissionsStructure[];
};

// https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-application-command-permissions-structure
export type ApplicationCommandPermissionsStructure = {
	id: Snowflake;
	permission: boolean;
	type: ApplicationCommandPermissionType;
};

// https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-application-command-permission-type
export enum ApplicationCommandPermissionType {
	Role = 1,
	User = 2,
	Channel = 3,
}
