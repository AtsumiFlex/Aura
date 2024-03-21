import type { TimestampStyles } from "../enums";
import type { GuildNavigationTypes } from "../types";

export const userFormat = (userId: number) => `<@${userId}>`;
export const channelFormat = (channelId: number) => `<#${channelId}>`;
export const roleFormat = (roleId: number) => `<@&${roleId}>`;
export const slashCommandFormat = (commandName: string, commandId: number) => `</${commandName}:${commandId}>`;
export const customEmojiFormat = (emojiName: string, emojiId: number, isAnimated: boolean) => {
	const emojiType = isAnimated ? "a" : "";
	return `<${emojiType}:${emojiName}:${emojiId}>`;
};

export const unixTimestamp = (timestamp: number, style?: TimestampStyles) => {
	const withStyle = `<t:${timestamp}:${style}>`;
	const noStyle = `<t:${timestamp}>`;
	return style ? withStyle : noStyle;
};

export const guildNavigationFormat = (guildId: number, guildType: GuildNavigationTypes) => `<${guildId}:${guildType}>`;
