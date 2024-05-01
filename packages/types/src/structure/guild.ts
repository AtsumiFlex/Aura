import { LocalesEnum } from "@aurajs/core";
import { z } from "zod";
import { Integer, ISO8601, Snowflake } from "../globals";
import { Oauth2ScopesEnum } from "../globals/oauth2";
import { ChannelStructure } from "./channel";
import { EmojiStructure } from "./emoji";
import { RoleStructure } from "./role";
import { StickerStructure } from "./sticker";
import { UserStructure } from "./user";

export enum PromptTypes {
	MultipleChoice = 0,
	Dropdown = 1,
}

export const PromptTypesEnum = z.nativeEnum(PromptTypes);

export enum OnboardingMode {
	Default = 0,
	Advanced = 1,
}

export const OnboardingModeEnum = z.nativeEnum(OnboardingMode);

export const PromptOptionStructure = z.object({
	id: Snowflake,
	channel_ids: z.array(Snowflake),
	role_ids: z.array(Snowflake),
	emoji: EmojiStructure.optional(),
	emoji_id: Snowflake.optional(),
	emoji_name: z.string().optional(),
	emoji_animated: z.boolean().optional(),
	title: z.string(),
	description: z.string().optional(),
});
export type PromptOptionInfer = z.infer<typeof PromptOptionStructure>;

export const PromptStructure = z.object({
	id: Snowflake,
	type: PromptTypesEnum,
	options: z.array(PromptOptionStructure),
	title: z.string(),
	single_select: z.boolean(),
	required: z.boolean(),
	in_onboarding: z.boolean(),
});
export type PromptInfer = z.infer<typeof PromptStructure>;

export const GuildOnboardingStructure = z.object({
	guild_id: Snowflake,
	prompts: z.array(PromptStructure),
	default_channel_ids: z.array(Snowflake),
	enabled: z.boolean(),
	mode: OnboardingModeEnum,
});
export type GuildOnboardingInfer = z.infer<typeof GuildOnboardingStructure>;

export const WelcomeScreenChannelStructure = z.object({
	channel_id: Snowflake,
	description: z.string(),
	emoji_id: Snowflake.nullable(),
	emoji_name: z.string().nullable(),
});
export type WelcomeScreenChannelInfer = z.infer<typeof WelcomeScreenChannelStructure>;

export const WelcomeScreenStructure = z.object({
	description: z.string().nullable(),
	welcome_channels: z.array(WelcomeScreenChannelStructure),
});
export type WelcomeScreenInfer = z.infer<typeof WelcomeScreenStructure>;

export const BanStructure = z.object({
	reason: z.string().optional(),
	user: UserStructure,
});
export type BanInfer = z.infer<typeof BanStructure>;

export const IntegrationApplicationStructure = z.object({
	id: Snowflake,
	name: z.string(),
	icon: z.string().nullable(),
	description: z.string(),
	bot: UserStructure.optional(),
});
export type IntegrationApplicationInfer = z.infer<typeof IntegrationApplicationStructure>;

export const IntegrationAccountStructure = z.object({
	id: z.string(),
	name: z.string(),
});

export enum IntegrationExpireBehaviors {
	RemoveRole = 0,
	Kick = 1,
}

export const IntegrationExpireBehaviorsEnum = z.nativeEnum(IntegrationExpireBehaviors);

export const IntegrationStructure = z.object({
	id: Snowflake,
	name: z.string(),
	type: z.string(),
	enabled: z.boolean(),
	syncing: z.boolean().optional(),
	role_id: Snowflake.optional(),
	enable_emoticons: z.boolean().optional(),
	expire_behavior: IntegrationExpireBehaviorsEnum.optional(),
	expire_grace_period: Integer.optional(),
	user: UserStructure.optional(),
	account: IntegrationAccountStructure,
	synced_at: ISO8601.optional(),
	subscriber_count: Integer.optional(),
	revoked: z.boolean().optional(),
	application: IntegrationApplicationStructure.optional(),
	scopes: z.array(Oauth2ScopesEnum).optional(),
});
export type IntegrationInfer = z.infer<typeof IntegrationStructure>;

export enum GuildMemberFlags {
	DidRejoin = 1,
	CompletedOnboarding = 2,
	BypassesVerification = 4,
	StartedOnboarding = 8,
}

export const GuildMemberFlagsEnum = z.nativeEnum(GuildMemberFlags);

export const GuildMemberStructure = z.object({
	user: UserStructure.optional(),
	nick: z.string().optional().nullable(),
	avatar: z.string().optional().nullable(),
	roles: z.array(RoleStructure.pick({ id: true })),
	joined_at: ISO8601,
	premium_since: ISO8601.optional().nullable(),
	deaf: z.boolean(),
	mute: z.boolean(),
	flags: GuildMemberFlagsEnum,
	pending: z.boolean().optional(),
	permissions: z.string().optional(),
	communication_disabled_until: ISO8601.optional().nullable(),
});
export type GuildMemberInfer = z.infer<typeof GuildMemberStructure>;

export const GuildWidgetStructure = z.object({
	id: Snowflake,
	name: z.string(),
	instant_invite: z.string().nullable(),
	channels: z.array(ChannelStructure.partial()),
	members: z.array(UserStructure.partial()),
	presence_count: Integer,
});
export type GuildWidgetInfer = z.infer<typeof GuildWidgetStructure>;

export const GuildWidgetSettingsStructure = z.object({
	enabled: z.boolean(),
	channel_id: Snowflake.optional(),
});
export type GuildWidgetSettingsInfer = z.infer<typeof GuildWidgetSettingsStructure>;

export enum GuildFeatures {
	AnimatedBanner = "ANIMATED_BANNER",
	AnimatedIcon = "ANIMATED_ICON",
	ApplicationCommandPermissionsV2 = "APPLICATION_COMMAND_PERMISSIONS_V2",
	AutoModeration = "AUTO_MODERATION",
	Banner = "BANNER",
	Community = "COMMUNITY",
	CreatorMonetizableProvisional = "CREATOR_MONETIZABLE_PROVISIONAL",
	CreatorStorePage = "CREATOR_STORE_PAGE",
	DeveloperSupportServer = "DEVELOPER_SUPPORT_SERVER",
	Discoverable = "DISCOVERABLE",
	Featurable = "FEATURABLE",
	InviteSplash = "INVITE_SPLASH",
	InvitesDisabled = "INVITES_DISABLED",
	MemberVerificationGateEnabled = "MEMBER_VERIFICATION_GATE_ENABLED",
	MoreStickers = "MORE_STICKERS",
	News = "NEWS",
	Partnered = "PARTNERED",
	PreviewEnabled = "PREVIEW_ENABLED",
	RaidAlertsDisabled = "RAID_ALERTS_DISABLED",
	RoleIcons = "ROLE_ICONS",
	RoleSubscriptionsAvailableForPurchase = "ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE",
	RoleSubscriptionsEnabled = "ROLE_SUBSCRIPTIONS_ENABLED",
	TicketedEventsEnabled = "TICKETED_EVENTS_ENABLED",
	VanityUrl = "VANITY_URL",
	Verified = "VERIFIED",
	VipRegions = "VIP_REGIONS",
	WelcomeScreenEnabled = "WELCOME_SCREEN_ENABLED",
}

export const GuildFeaturesEnum = z.nativeEnum(GuildFeatures);

export const GuildPreviewStructure = z.object({
	id: Snowflake,
	name: z.string(),
	icon: z.string().nullable(),
	splash: z.string().nullable(),
	discovery_splash: z.string().nullable(),
	emojis: z.array(EmojiStructure),
	features: z.array(GuildFeaturesEnum),
	approximate_member_count: Integer,
	approximate_presence_count: Integer,
	description: z.string().nullable(),
	stickers: z.array(StickerStructure),
});
export type GuildPreviewInfer = z.infer<typeof GuildPreviewStructure>;

export enum SystemChannelFlags {
	SuppressJoinNotifications = 1,
	SuppressPremiumSubscriptions = 2,
	SuppressGuildReminderNotifications = 4,
	SuppressJoinNotificationReplies = 8,
	SuppressRoleSubscriptionPurchaseNotifications = 16,
	SuppressRoleSubscriptionPurchaseNotificationReplies = 32,
}

export const SystemChannelFlagsEnum = z.nativeEnum(SystemChannelFlags);

export enum PremiumTier {
	None = 0,
	Tier1 = 1,
	Tier2 = 2,
	Tier3 = 3,
}

export const PremiumTierEnum = z.nativeEnum(PremiumTier);

export enum GuildNSFWLevels {
	Default = 0,
	Explicit = 1,
	Safe = 2,
	AgeRestricted = 3,
}

export const GuildNSFWLevelsEnum = z.nativeEnum(GuildNSFWLevels);

export enum GuildVerificationLevels {
	None = 0,
	Low = 1,
	Medium = 2,
	High = 3,
	VeryHigh = 4,
}

export const GuildVerificationLevelsEnum = z.nativeEnum(GuildVerificationLevels);

export enum GuildMFALevels {
	None = 0,
	Elevated = 1,
}

export const GuildMFALevelsEnum = z.nativeEnum(GuildMFALevels);

export enum GuildExplicitContentFilterLevels {
	Disabled = 0,
	MembersWithoutRoles = 1,
	AllMembers = 2,
}

export const GuildExplicitContentFilterLevelsEnum = z.nativeEnum(GuildExplicitContentFilterLevels);

export enum GuildDefaultMessageNotificationLevels {
	AllMessages = 0,
	OnlyMentions = 1,
}

export const GuildDefaultMessageNotificationLevelsEnum = z.nativeEnum(GuildDefaultMessageNotificationLevels);

export const GuildStructure = z.object({
	id: Snowflake,
	name: z.string(),
	icon: z.string().optional().nullable(),
	icon_hash: z.string().optional().nullable(),
	splash: z.string().optional().nullable(),
	discovery_splash: z.string().optional().nullable(),
	owner: z.boolean().optional(),
	owner_id: Snowflake,
	permissions: z.string().optional(),
	region: z.string().optional().nullable(),
	afk_channel_id: Snowflake.optional(),
	afk_timeout: Integer,
	widget_enabled: z.boolean().optional(),
	widget_channel_id: Snowflake.optional().nullable(),
	verification_level: GuildVerificationLevelsEnum,
	default_message_notifications: GuildDefaultMessageNotificationLevelsEnum,
	explicit_content_filter: GuildExplicitContentFilterLevelsEnum,
	roles: z.array(RoleStructure),
	emojis: z.array(EmojiStructure),
	features: z.array(GuildFeaturesEnum),
	mfa_level: GuildMFALevelsEnum,
	application_id: Snowflake.optional(),
	system_channel_id: Snowflake.optional(),
	system_channel_flags: Integer,
	rules_channel_id: Snowflake.optional(),
	max_presences: Integer.optional().nullable(),
	max_members: Integer,
	vanity_url_code: z.string().optional().nullable(),
	description: z.string().optional().nullable(),
	banner: z.string().optional().nullable(),
	premium_tier: PremiumTierEnum,
	premium_subscription_count: Integer.optional(),
	preferred_locale: LocalesEnum,
	public_updates_channel_id: Snowflake.optional(),
	max_video_channel_users: Integer.optional(),
	max_stage_video_channel_users: Integer.optional(),
	approximate_member_count: Integer.optional(),
	approximate_presence_count: Integer.optional(),
	welcome_screen: WelcomeScreenStructure.optional(),
	nsfw_level: GuildNSFWLevelsEnum,
	stickers: z.array(StickerStructure),
	premium_progress_bar_enabled: z.boolean(),
	safety_alerts_channel_id: Snowflake.optional(),
});
export type GuildInfer = z.infer<typeof GuildStructure>;

export const GuildTemplateStructure = z.object({
	code: z.string(),
	name: z.string(),
	description: z.string().optional(),
	usage_count: Integer,
	creator_id: Snowflake,
	creator: UserStructure,
	created_at: ISO8601,
	updated_at: ISO8601,
	source_guild_id: Snowflake,
	serialized_source_guild: GuildStructure.partial(),
	is_dirty: z.boolean().optional(),
});
export type GuildTemplateInfer = z.infer<typeof GuildTemplateStructure>;

export const GuildScheduledEventUserStructure = z.object({
	guild_scheduled_event_id: Snowflake,
	user: UserStructure,
	member: GuildMemberStructure.optional(),
});
export type GuildScheduledEventUserInfer = z.infer<typeof GuildScheduledEventUserStructure>;

export const GuildScheduledEventEntityMetadataStructure = z.object({ location: z.string().min(1).max(100).optional() });
export type GuildScheduledEventEntityMetadataInfer = z.infer<typeof GuildScheduledEventEntityMetadataStructure>;

export enum GuildScheduledEventStatus {
	Scheduled = 1,
	Active = 2,
	Completed = 3,
	Canceled = 4,
}

export const GuildScheduledEventStatusEnum = z.nativeEnum(GuildScheduledEventStatus);

export enum GuildScheduledEventEntityTypes {
	StageInstance = 1,
	Voice = 2,
	External = 3,
}

export const GuildScheduledEventEntityTypesEnum = z.nativeEnum(GuildScheduledEventEntityTypes);

export enum GuildScheduledEventPrivacyLevels {
	GuildOnly = 2,
}

export const GuildScheduledEventPrivacyLevelsEnum = z.nativeEnum(GuildScheduledEventPrivacyLevels);

export const GuildScheduledEventStructure = z.object({
	id: Snowflake,
	guild_id: Snowflake,
	channel_id: Snowflake.nullable(),
	creator_id: Snowflake.nullable(),
	name: z.string().min(1).max(100),
	description: z.string().min(1).max(1_000).optional().nullable(),
	scheduled_start_time: ISO8601,
	scheduled_end_time: ISO8601.nullable(),
	privacy_level: GuildScheduledEventPrivacyLevelsEnum,
	status: GuildScheduledEventStatusEnum,
	entity_type: GuildScheduledEventEntityTypesEnum,
	entity_id: Snowflake.nullable(),
	entity_metadata: GuildScheduledEventEntityMetadataStructure.optional(),
	creator: UserStructure.optional(),
	user_count: Integer.optional(),
	image: z.string().optional().nullable(),
});
export type GuildScheduledEventInfer = z.infer<typeof GuildScheduledEventStructure>;
