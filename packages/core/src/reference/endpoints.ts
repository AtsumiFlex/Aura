import type { ImageFormats } from "./formats";

type IgnoreLottie = Exclude<ImageFormats, ImageFormats.Lottie>;
type IgnoreLottieAndGif = Exclude<ImageFormats, ImageFormats.GIF | ImageFormats.Lottie>;
type SupportGif = Exclude<ImageFormats, ImageFormats.JPEG | ImageFormats.JPG | ImageFormats.WebP>;

function customEmoji<EmojiId extends Snowflake>(emojiId: Snowflake): `emojis/${EmojiId}.png`;
function customEmoji<EmojiId extends Snowflake, Supports extends IgnoreLottie>(emojiId: Snowflake, format: Supports): `emojis/${EmojiId}.${Supports}`;
function customEmoji(emojiId: Snowflake, format?: IgnoreLottie) {
	return format ? `emojis/${emojiId}.${format}` : `emojis/${emojiId}.png`;
}

function guildIcon<GuildId extends Snowflake, GuildIcon extends string>(guildId: Snowflake, guildIcon: string): `icons/${GuildId}/${GuildIcon}.png`;
function guildIcon<GuildId extends Snowflake, GuildIcon extends string, Supports extends IgnoreLottie>(guildId: Snowflake, guildIcon: string, format: Supports): `icons/${GuildId}/${GuildIcon}.${Supports}`;
function guildIcon(guildId: Snowflake, guildIcon: string, format?: IgnoreLottie) {
	return format ? `icons/${guildId}/${guildIcon}.${format}` : `icons/${guildId}/${guildIcon}.png`;
}

function guildSplash<GuildId extends Snowflake, GuildSplash extends string>(guildId: Snowflake, guildSplash: string): `splashes/${GuildId}/${GuildSplash}.png`;
function guildSplash<GuildId extends Snowflake, GuildSplash extends string, Supports extends IgnoreLottieAndGif>(guildId: Snowflake, guildSplash: string, format: Supports): `splashes/${GuildId}/${GuildSplash}.${Supports}`;
function guildSplash(guildId: Snowflake, guildSplash: string, format?: IgnoreLottieAndGif) {
	return format ? `splashes/${guildId}/${guildSplash}.${format}` : `splashes/${guildId}/${guildSplash}.png`;
}

function guildDiscoverySplash<GuildId extends Snowflake, GuildDiscoverySplash extends string>(guildId: Snowflake, guildDiscoverySplash: string): `discovery-splashes/${GuildId}/${GuildDiscoverySplash}.png`;
function guildDiscoverySplash<GuildId extends Snowflake, GuildDiscoverySplash extends string, Supports extends IgnoreLottieAndGif>(guildId: Snowflake, guildDiscoverySplash: string, format: Supports): `discovery-splashes/${GuildId}/${GuildDiscoverySplash}.${Supports}`;
function guildDiscoverySplash(guildId: Snowflake, guildDiscoverySplash: string, format?: IgnoreLottieAndGif) {
	return format ? `discovery-splashes/${guildId}/${guildDiscoverySplash}.${format}` : `discovery-splashes/${guildId}/${guildDiscoverySplash}.png`;
}

function guildBanner<GuildId extends Snowflake, GuildBanner extends string>(guildId: Snowflake, guildBanner: string): `banners/${GuildId}/${GuildBanner}.png`;
function guildBanner<GuildId extends Snowflake, GuildBanner extends string, Supports extends IgnoreLottie>(guildId: Snowflake, guildBanner: string, format: Supports): `banners/${GuildId}/${GuildBanner}.${Supports}`;
function guildBanner(guildId: Snowflake, guildBanner: string, format?: IgnoreLottie) {
	return format ? `banners/${guildId}/${guildBanner}.${format}` : `banners/${guildId}/${guildBanner}.png`;
}

function userBanner<UserId extends Snowflake, UserBanner extends string>(userId: Snowflake, userBanner: string): `banners/${UserId}/${UserBanner}.png`;
function userBanner<UserId extends Snowflake, UserBanner extends string, Supports extends IgnoreLottie>(userId: Snowflake, userBanner: string, format: Supports): `banners/${UserId}/${UserBanner}.${Supports}`;
function userBanner(userId: Snowflake, userBanner: string, format?: IgnoreLottie) {
	return format ? `banners/${userId}/${userBanner}.${format}` : `banners/${userId}/${userBanner}.png`;
}

function userAvatar<UserId extends Snowflake, UserAvatar extends string>(userId: Snowflake, userAvatar: string): `avatars/${UserId}/${UserAvatar}.png`;
function userAvatar<UserId extends Snowflake, UserAvatar extends string, Supports extends IgnoreLottie>(userId: Snowflake, userAvatar: string, format: Supports): `avatars/${UserId}/${UserAvatar}.${Supports}`;
function userAvatar(userId: Snowflake, userAvatar: string, format?: IgnoreLottie) {
	return format ? `avatars/${userId}/${userAvatar}.${format}` : `avatars/${userId}/${userAvatar}.png`;
}

function guildMemberAvatar<GuildId extends Snowflake, UserId extends Snowflake, UserAvatar extends string>(guildId: Snowflake, userId: Snowflake, userAvatar: string): `guilds/${GuildId}/users/${UserId}/avatars/${UserAvatar}.png`;
function guildMemberAvatar<GuildId extends Snowflake, UserId extends Snowflake, UserAvatar extends string, Supports extends IgnoreLottieAndGif>(guildId: Snowflake, userId: Snowflake, userAvatar: string, format: Supports): `guilds/${GuildId}/users/${UserId}/avatars/${UserAvatar}.${Supports}`;
function guildMemberAvatar(guildId: Snowflake, userId: Snowflake, userAvatar: string, format?: IgnoreLottieAndGif) {
	return format ? `guilds/${guildId}/users/${userId}/avatars/${userAvatar}.${format}` : `guilds/${guildId}/users/${userId}/avatars/${userAvatar}.png`;
}

function userAvatarDecoration<UserId extends Snowflake, UserAvatarDecoration extends string>(userId: Snowflake, userAvatarDecoration: string): `avatar-decorations/${UserId}/${UserAvatarDecoration}.png`;
function userAvatarDecoration(userId: Snowflake, userAvatarDecoration: string) {
	return `avatar-decorations/${userId}/${userAvatarDecoration}.png`;
}

function applicationIcon<ApplicationId extends Snowflake, ApplicationIcon extends string>(applicationId: Snowflake, applicationIcon: string): `app-icons/${ApplicationId}/${ApplicationIcon}.png`;
function applicationIcon<ApplicationId extends Snowflake, ApplicationIcon extends string, Supports extends IgnoreLottieAndGif>(applicationId: Snowflake, applicationIcon: string, format: Supports): `applications/${ApplicationId}/${ApplicationIcon}.${Supports}`;
function applicationIcon(applicationId: Snowflake, applicationIcon: string, format?: IgnoreLottieAndGif) {
	return format ? `applications/${applicationId}/${applicationIcon}.${format}` : `applications/${applicationId}/${applicationIcon}.png`;
}

function applicationCover<ApplicationId extends Snowflake, ApplicationCover extends string>(applicationId: Snowflake, applicationCover: string): `app-icons/${ApplicationId}/${ApplicationCover}.png`;
function applicationCover<ApplicationId extends Snowflake, ApplicationCover extends string, Supports extends IgnoreLottieAndGif>(applicationId: Snowflake, applicationCover: string, format: Supports): `application-covers/${ApplicationId}/${ApplicationCover}.${Supports}`;
function applicationCover(applicationId: Snowflake, applicationCover: string, format?: IgnoreLottieAndGif) {
	return format ? `application-covers/${applicationId}/${applicationCover}.${format}` : `application-covers/${applicationId}/${applicationCover}.png`;
}

function applicationAsset<ApplicationId extends Snowflake, ApplicationAsset extends string>(applicationId: Snowflake, applicationAsset: string): `app-assets/${ApplicationId}/${ApplicationAsset}.png`;
function applicationAsset<ApplicationId extends Snowflake, ApplicationAsset extends string, Supports extends IgnoreLottieAndGif>(applicationId: Snowflake, applicationAsset: string, format: Supports): `app-assets/${ApplicationId}/${ApplicationAsset}.${Supports}`;
function applicationAsset(applicationId: Snowflake, applicationAsset: string, format?: IgnoreLottieAndGif) {
	return format ? `app-assets/${applicationId}/${applicationAsset}.${format}` : `app-assets/${applicationId}/${applicationAsset}.png`;
}

function achievementIcon<ApplicationId extends Snowflake, AchievementId extends Snowflake, IconHash extends string>(applicationId: Snowflake, achievementId: Snowflake, iconHash: string): `app-assets/${ApplicationId}/achievements/${AchievementId}/icons/${IconHash}.png`;
function achievementIcon<ApplicationId extends Snowflake, AchievementId extends Snowflake, IconHash extends string, Supports extends IgnoreLottieAndGif>(applicationId: Snowflake, achievementId: Snowflake, iconHash: string, format: Supports): `app-assets/${ApplicationId}/achievements/${AchievementId}/icons/${IconHash}.${Supports}`;
function achievementIcon(applicationId: Snowflake, achievementId: Snowflake, iconHash: string, format?: IgnoreLottieAndGif) {
	return format ? `app-assets/${applicationId}/achievements/${achievementId}/icons/${iconHash}.${format}` : `app-assets/${applicationId}/achievements/${achievementId}/icons/${iconHash}.png`;
}

function storePageAsset<ApplicationId extends Snowflake, AssetId extends Snowflake>(applicationId: Snowflake, assetId: Snowflake): `app-assets/${ApplicationId}/store/${AssetId}.png`;
function storePageAsset<ApplicationId extends Snowflake, AssetId extends Snowflake, Supports extends IgnoreLottieAndGif>(applicationId: Snowflake, assetId: Snowflake, format: Supports): `app-assets/${ApplicationId}/store/${AssetId}.${Supports}`;
function storePageAsset(applicationId: Snowflake, assetId: Snowflake, format?: IgnoreLottieAndGif) {
	return format ? `app-assets/${applicationId}/store/${assetId}.${format}` : `app-assets/${applicationId}/store/${assetId}.png`;
}

function teamIcon<TeamId extends Snowflake, TeamIcon extends string>(teamId: Snowflake, teamIcon: string): `team-icons/${TeamId}/${TeamIcon}.png`;
function teamIcon<TeamId extends Snowflake, TeamIcon extends string, Supports extends IgnoreLottieAndGif>(teamId: Snowflake, teamIcon: string, format: Supports): `team-icons/${TeamId}/${TeamIcon}.${Supports}`;
function teamIcon(teamId: Snowflake, teamIcon: string, format?: IgnoreLottieAndGif) {
	return format ? `team-icons/${teamId}/${teamIcon}.${format}` : `team-icons/${teamId}/${teamIcon}.png`;
}

function sticker<StickerId extends Snowflake>(stickerId: Snowflake): `stickers/${StickerId}.png`;
function sticker<StickerId extends Snowflake, Supports extends SupportGif>(stickerId: Snowflake, format: Supports): `stickers/${StickerId}.${Supports}`;
function sticker(stickerId: Snowflake, format?: SupportGif) {
	return format ? `stickers/${stickerId}.${format}` : `stickers/${stickerId}.png`;
}

function roleIcon<RoleId extends Snowflake, RoleIcon extends string>(roleId: Snowflake, roleIcon: string): `role-icons/${RoleId}/${RoleIcon}.png`;
function roleIcon<RoleId extends Snowflake, RoleIcon extends string, Supports extends IgnoreLottieAndGif>(roleId: Snowflake, roleIcon: string, format: Supports): `role-icons/${RoleId}/${RoleIcon}.${Supports}`;
function roleIcon(roleId: Snowflake, roleIcon: string, format?: IgnoreLottieAndGif) {
	return format ? `role-icons/${roleId}/${roleIcon}.${format}` : `role-icons/${roleId}/${roleIcon}.png`;
}

function guildScheduledEventCover<EventId extends Snowflake, EventCover extends string>(eventId: Snowflake, eventCover: string): `guild-events/${EventId}/${EventCover}.png`;
function guildScheduledEventCover<EventId extends Snowflake, EventCover extends string, Supports extends IgnoreLottieAndGif>(eventId: Snowflake, eventCover: string, format: Supports): `guild-events/${EventId}/${EventCover}.${Supports}`;
function guildScheduledEventCover(eventId: Snowflake, eventCover: string, format?: IgnoreLottieAndGif) {
	return format ? `guild-events/${eventId}/${eventCover}.${format}` : `guild-events/${eventId}/${eventCover}.png`;
}

function guildMemberBanner<GuildId extends Snowflake, UserId extends Snowflake, MemberBanner extends string>(guildId: Snowflake, userId: Snowflake, memberBanner: string): `guilds/${GuildId}/users/${UserId}/banners/${MemberBanner}.png`;
function guildMemberBanner<GuildId extends Snowflake, UserId extends Snowflake, MemberBanner extends string, Supports extends IgnoreLottie>(guildId: Snowflake, userId: Snowflake, memberBanner: string, format: Supports): `guilds/${GuildId}/users/${UserId}/banners/${MemberBanner}.${Supports}`;
function guildMemberBanner(guildId: Snowflake, userId: Snowflake, memberBanner: string, format?: IgnoreLottie) {
	return format ? `guilds/${guildId}/users/${userId}/banners/${memberBanner}.${format}` : `guilds/${guildId}/users/${userId}/banners/${memberBanner}.png`;
}

export const CdnEndpoints = {
	CustomEmoji: customEmoji,
	GuildIcon: guildIcon,
	GuildSplash: guildSplash,
	GuildDiscoverySplash: guildDiscoverySplash,
	GuildBanner: guildBanner,
	UserBanner: userBanner,
	UserAvatar: userAvatar,
	GuildMemberAvatar: guildMemberAvatar,
	UserAvatarDecoration: userAvatarDecoration,
	ApplicationIcon: applicationIcon,
	ApplicationCover: applicationCover,
	ApplicationAsset: applicationAsset,
	AchievementIcon: achievementIcon,
	StorePageAsset: storePageAsset,
	TeamIcon: teamIcon,
	Sticker: sticker,
	RoleIcon: roleIcon,
	GuildScheduledEventCover: guildScheduledEventCover,
	GuildMemberBanner: guildMemberBanner,
};
