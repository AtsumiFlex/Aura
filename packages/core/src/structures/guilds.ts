/**
 * Guild Resource - Guild Scheduled Event - Guild Template Resource
 *
 * Guilds in Discord represent an isolated collection of users and channels, and are often referred to as "servers" in the UI.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-resource}
 */

import { z } from "zod";
import { Integer, ISO8601Timestamp, Snowflake } from "../globals/formatters";
import { OAuth2ScopesEnum } from "../libs/oauth2";
import { ChannelStructure } from "./channels";
import { EmojiStructure } from "./emojis";
import { RoleStructure } from "./roles";
import { StickerStructure } from "./stickers";
import { UserStructure } from "./users";

/**
 * Guild Prompt Types
 *
 * Represents the available prompt types.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-onboarding-object-prompt-types}
 */
export enum GuildPromptTypes {
	/**
	 * Multiple choice prompt
	 */
	MultipleChoice = 0,
	/**
	 * Dropdown prompt
	 */
	Dropdown = 1,
}

/**
 * Guild Prompt Types Enum
 *
 * Is a zod enum that represents the available {@link GuildPromptTypes}.
 */
export const GuildPromptTypesEnum = z.nativeEnum(GuildPromptTypes);

/**
 * Guild Onboarding Mode
 *
 * Represents the available onboarding modes.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-onboarding-object-onboarding-mode}
 */
export enum GuildOnboardingMode {
	/**
	 * Counts only Default Channels towards constraints
	 */
	Default = 0,
	/**
	 * Counts Default Channels and Questions towards constraints
	 */
	Advanced = 1,
}

/**
 * Guild Onboarding Mode Enum
 *
 * Is a zod enum that represents the available {@link GuildOnboardingMode}.
 */
export const GuildOnboardingModeEnum = z.nativeEnum(GuildOnboardingMode);

/**
 * Guild Prompt Option Structure
 *
 * Represents a prompt option.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-onboarding-object-prompt-option-structure}
 */
export const GuildPromptOptionStructure = z.object({
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

/**
 * Guild Prompt Option Structure Infer
 *
 * The inferred type of {@link GuildPromptOptionStructure}
 */
export type GuildPromptOptionStructureInfer = z.infer<typeof GuildPromptOptionStructure>;

/**
 * Guild Onboarding Prompt Structure
 *
 * Represents an onboarding prompt.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-onboarding-object-onboarding-prompt-structure}
 */
export const GuildOnboardingPromptStructure = z.object({
	id: Snowflake,
	type: GuildPromptTypesEnum,
	options: z.array(GuildPromptOptionStructure),
	title: z.string(),
	single_select: z.boolean(),
	required: z.boolean(),
	in_onboarding: z.boolean(),
});

/**
 * Guild Onboarding Prompt Structure Infer
 *
 * The inferred type of {@link GuildOnboardingPromptStructure}
 */
export type GuildOnboardingPromptStructureInfer = z.infer<typeof GuildOnboardingPromptStructure>;

/**
 * Guild Onboarding Structure
 *
 * Represents the onboarding of a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-onboarding-object-guild-onboarding-structure}
 */
export const GuildOnboardingStructure = z.object({
	guild_id: Snowflake,
	prompts: z.array(GuildOnboardingPromptStructure),
	default_channel_ids: z.array(Snowflake),
	enabled: z.boolean(),
	mode: GuildOnboardingModeEnum,
});

/**
 * Guild Onboarding Structure Infer
 *
 * The inferred type of {@link GuildOnboardingStructure}
 */
export type GuildOnboardingStructureInfer = z.infer<typeof GuildOnboardingStructure>;

/**
 * Welcome Screen Channel Structure
 *
 * Represents a channel in the welcome screen.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-channel-structure}
 */
export const WelcomeScreenChannelStructure = z.object({
	channel_id: Snowflake,
	description: z.string(),
	emoji_id: Snowflake.nullable(),
	emoji_name: z.string().nullable(),
});

/**
 * Welcome Screen Channel Structure Infer
 *
 * The inferred type of {@link WelcomeScreenChannelStructure}
 */
export type WelcomeScreenChannelStructureInfer = z.infer<typeof WelcomeScreenChannelStructure>;

/**
 * Welcome Screen Structure
 *
 * Represents the welcome screen of a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-structure}
 */
export const WelcomeScreenStructure = z.object({
	description: z.string().nullable(),
	welcome_channels: z.array(WelcomeScreenChannelStructure).max(5),
});

/**
 * Welcome Screen Structure Infer
 *
 * The inferred type of {@link WelcomeScreenStructure}
 */
export type WelcomeScreenStructureInfer = z.infer<typeof WelcomeScreenStructure>;

/**
 * Ban Structure
 *
 * Represents a ban.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#ban-object-ban-structure}
 */
export const BanStructure = z.object({
	reason: z.string().nullable(),
	user: UserStructure,
});

/**
 * Ban Structure Infer
 *
 * The inferred type of {@link BanStructure}
 */
export type BanStructureInfer = z.infer<typeof BanStructure>;

/**
 * Integration Application Structure
 *
 * Represents the application of an integration.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#integration-application-object-integration-application-structure}
 */
export const IntegrationApplicationStructure = z.object({
	id: Snowflake,
	name: z.string(),
	icon: z.string().nullable(),
	description: z.string(),
	bot: UserStructure.optional(),
});

/**
 * Integration Application Structure Infer
 *
 * The inferred type of {@link IntegrationApplicationStructure}
 */
export type IntegrationApplicationStructureInfer = z.infer<typeof IntegrationApplicationStructure>;

/**
 * Integration Account Structure
 *
 * Represents the account of an integration.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#integration-account-object-integration-account-structure}
 */
export const IntegrationAccountStructure = z.object({
	id: z.string(),
	name: z.string(),
});

/**
 * Integration Account Structure Infer
 *
 * The inferred type of {@link IntegrationAccountStructure}
 */
export type IntegrationAccountStructureInfer = z.infer<typeof IntegrationAccountStructure>;

/**
 * Integration Expire Behaviors
 *
 * Represents the available expire behaviors.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#integration-object-integration-expire-behaviors}
 */
export enum IntegrationExpireBehaviors {
	/**
	 * Remove role
	 */
	RemoveRole = 0,
	/**
	 * Kick
	 */
	Kick = 1,
}

/**
 * Integration Expire Behaviors Enum
 *
 * Is a zod enum that represents the available {@link IntegrationExpireBehaviors}.
 */
export const IntegrationExpireBehaviorsEnum = z.nativeEnum(IntegrationExpireBehaviors);

/**
 * Integration Structure
 *
 * Represents an integration.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#integration-object-integration-structure}
 */
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
	synced_at: ISO8601Timestamp.optional(),
	subscriber_count: Integer.optional(),
	revoked: z.boolean().optional(),
	application: IntegrationApplicationStructure.optional(),
	scopes: z.array(OAuth2ScopesEnum).optional(),
});

/**
 * Integration Structure Infer
 *
 * The inferred type of {@link IntegrationStructure}
 */
export type IntegrationStructureInfer = z.infer<typeof IntegrationStructure>;

/**
 * Guild Member Flags
 *
 * Flags that are present on a guild member.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-flags}
 */
export enum GuildMemberFlags {
	/**
	 * Member has left and rejoined the guild
	 */
	DidRejoin = 1,
	/**
	 * Member has completed onboarding
	 */
	CompletedOnboarding = 2,
	/**
	 * Member is exempt from guild verification requirements
	 */
	BypassesVerification = 4,
	/**
	 * Member has started onboarding
	 */
	StartedOnboarding = 8,
}

/**
 * Guild Member Flags Enum
 *
 * Is a zod enum that represents the available {@link GuildMemberFlags}.
 */
export const GuildMemberFlagsEnum = z.nativeEnum(GuildMemberFlags);

/**
 * Guild Member Structure
 *
 * Represents a guild member.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-structure}
 */
export const GuildMemberStructure = z.object({
	user: UserStructure.optional(),
	nick: z.string().optional().nullable(),
	avatar: z.string().optional().nullable(),
	roles: z.array(Snowflake),
	joined_at: ISO8601Timestamp,
	premium_since: ISO8601Timestamp.optional().nullable(),
	deaf: z.boolean(),
	mute: z.boolean(),
	flags: GuildMemberFlagsEnum.optional(),
	pending: z.boolean().optional(),
	permissions: z.string().optional(),
	communication_disabled_until: ISO8601Timestamp.optional().nullable(),
});

/**
 * Guild Member Structure Infer
 *
 * The inferred type of {@link GuildMemberStructure}
 */
export type GuildMemberStructureInfer = z.infer<typeof GuildMemberStructure>;

/**
 * Guild Widget Structure
 *
 * Represents a guild widget.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-widget-object-guild-widget-structure}
 */
export const GuildWidgetStructure = z.object({
	id: Snowflake,
	name: z.string().min(2).max(100),
	instant_invite: z.string().optional(),
	channels: z.array(ChannelStructure.partial()),
	members: z.array(UserStructure.partial()),
	presence_count: Integer,
});

/**
 * Guild Widget Structure Infer
 *
 * The inferred type of {@link GuildWidgetStructure}
 */
export type GuildWidgetStructureInfer = z.infer<typeof GuildWidgetStructure>;

/**
 * Guild Widget Settings Structure
 *
 * Represents the settings of a guild widget.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-widget-object-guild-widget-settings-structure}
 */
export const GuildWidgetSettingsStructure = z.object({
	enabled: z.boolean(),
	channel_id: Snowflake.optional(),
});

/**
 * Guild Widget Settings Structure Infer
 *
 * The inferred type of {@link GuildWidgetSettingsStructure}
 */
export type GuildWidgetSettingsStructureInfer = z.infer<typeof GuildWidgetSettingsStructure>;

/**
 * Guild Features
 *
 * Represents the available guild features.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-guild-features}
 */
export enum GuildFeatures {
	/**
	 * Guild has access to set an animated guild banner image
	 */
	AnimatedBanner = "ANIMATED_BANNER",
	/**
	 * Guild has access to set an animated guild icon
	 */
	AnimatedIcon = "ANIMATED_ICON",
	/**
	 * Guild is using the old permissions configuration behavior
	 */
	ApplicationCommandPermissionsV2 = "APPLICATION_COMMAND_PERMISSIONS_V2",
	/**
	 * Guild has set up auto moderation rules
	 */
	AutoModeration = "AUTO_MODERATION",
	/**
	 * Guild has access to set a guild banner image
	 */
	Banner = "BANNER",
	/**
	 * Guild can enable welcome screen, Membership Screening, stage channels and discovery, and receives community updates
	 */
	Community = "COMMUNITY",
	/**
	 * Guild has enabled monetization
	 */
	CreatorMonetizableProvisional = "CREATOR_MONETIZABLE_PROVISIONAL",
	/**
	 * Guild has enabled the role subscription promo page
	 */
	CreatorStorePage = "CREATOR_STORE_PAGE",
	/**
	 * Guild has been set as a support server on the App Directory
	 */
	DeveloperSupportServer = "DEVELOPER_SUPPORT_SERVER",
	/**
	 * Guild is able to be discovered in the directory
	 */
	Discoverable = "DISCOVERABLE",
	/**
	 * Guild is able to be featured in the directory
	 */
	Featurable = "FEATURABLE",
	/**
	 * Guild has access to set an invite splash background
	 */
	InviteSplash = "INVITE_SPLASH",
	/**
	 * Guild has paused invites, preventing new users from joining
	 */
	InvitesDisabled = "INVITES_DISABLED",
	/**
	 * Guild has enabled Membership Screening
	 */
	MemberVerificationGateEnabled = "MEMBER_VERIFICATION_GATE_ENABLED",
	/**
	 * Guild has increased custom sticker slots
	 */
	MoreStickers = "MORE_STICKERS",
	/**
	 * Guild has access to create announcement channels
	 */
	News = "NEWS",
	/**
	 * Guild is partnered
	 */
	Partnered = "PARTNERED",
	/**
	 * Guild can be previewed before joining via Membership Screening or the directory
	 */
	PreviewEnabled = "PREVIEW_ENABLED",
	/**
	 * Guild has disabled alerts for join raids in the configured safety alerts channel
	 */
	RaidAlertsDisabled = "RAID_ALERTS_DISABLED",
	/**
	 * Guild is able to set role icons
	 */
	RoleIcons = "ROLE_ICONS",
	/**
	 * Guild has role subscriptions that can be purchased
	 */
	RoleSubscriptionsAvailableForPurchase = "ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE",
	/**
	 * Guild has enabled role subscriptions
	 */
	RoleSubscriptionsEnabled = "ROLE_SUBSCRIPTIONS_ENABLED",
	/**
	 * Guild has enabled ticketed events
	 */
	TicketedEventsEnabled = "TICKETED_EVENTS_ENABLED",
	/**
	 * Guild has access to set a vanity URL
	 */
	VanityUrl = "VANITY_URL",
	/**
	 * Guild is verified
	 */
	Verified = "VERIFIED",
	/**
	 * Guild has access to set 384kbps bitrate in voice (previously VIP voice servers)
	 */
	VipRegions = "VIP_REGIONS",
	/**
	 * Guild has enabled the welcome screen
	 */
	WelcomeScreenEnabled = "WELCOME_SCREEN_ENABLED",
}

/**
 * Guild Features Enum
 *
 * Is a zod enum that represents the available {@link GuildFeatures}.
 */
export const GuildFeaturesEnum = z.nativeEnum(GuildFeatures);

/**
 * Guild Preview Structure
 *
 * Represents a guild preview.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-preview-object-guild-preview-structure}
 */
export const GuildPreviewStructure = z.object({
	id: Snowflake,
	name: z.string().min(2).max(100),
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

/**
 * Guild Preview Structure Infer
 *
 * The inferred type of {@link GuildPreviewStructure}
 */
export type GuildPreviewStructureInfer = z.infer<typeof GuildPreviewStructure>;

/**
 * System Channel Flags
 *
 * Flags that are present on a system channel.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-system-channel-flags}
 */
export enum SystemChannelFlags {
	/**
	 * Suppress member join notifications
	 */
	SuppressJoinNotifications = 1,
	/**
	 * Suppress server boost notifications
	 */
	SuppressPremiumSubscriptions = 2,
	/**
	 * Suppress server setup tips
	 */
	SuppressGuildReminderNotifications = 4,
	/**
	 * Hide member join sticker reply buttons
	 */
	SuppressJoinNotificationReplies = 8,
	/**
	 * Suppress role subscription purchase and renewal notifications
	 */
	SuppressRoleSubscriptionPurchaseNotifications = 16,
	/**
	 * Hide role subscription sticker reply buttons
	 */
	SuppressRoleSubscriptionPurchaseNotificationReplies = 32,
}

/**
 * System Channel Flags Enum
 *
 * Is a zod enum that represents the available {@link SystemChannelFlags}.
 */
export const SystemChannelFlagsEnum = z.nativeEnum(SystemChannelFlags);

/**
 * Premium Tier
 *
 * Represents the available premium tiers.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-premium-tier}
 */
export enum PremiumTier {
	/**
	 * Guild has not unlocked any Server Boost perks
	 */
	None = 0,
	/**
	 * Guild has unlocked Server Boost level 1 perks
	 */
	Tier1 = 1,
	/**
	 * Guild has unlocked Server Boost level 2 perks
	 */
	Tier2 = 2,
	/**
	 * Guild has unlocked Server Boost level 3 perks
	 */
	Tier3 = 3,
}

/**
 * Premium Tier Enum
 *
 * Is a zod enum that represents the available {@link PremiumTier}.
 */
export const PremiumTierEnum = z.nativeEnum(PremiumTier);

/**
 * Guild NSFW Level
 *
 * Represents the available NSFW levels.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-guild-nsfw-level}
 */
export enum GuildNSFWLevel {
	/**
	 * Default
	 */
	Default = 0,
	/**
	 * Explicit
	 */
	Explicit = 1,
	/**
	 * Safe
	 */
	Safe = 2,
	/**
	 * Age Restricted
	 */
	AgeRestricted = 3,
}

/**
 * Guild NSFW Level Enum
 *
 * Is a zod enum that represents the available {@link GuildNSFWLevel}.
 */
export const GuildNSFWLevelEnum = z.nativeEnum(GuildNSFWLevel);

/**
 * Verification Level
 *
 * Represents the available verification levels.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-verification-level}
 */
export enum VerificationLevel {
	/**
	 * unrestricted
	 */
	None = 0,
	/**
	 * must have verified email on account
	 */
	Low = 1,
	/**
	 * must be registered on Discord for longer than 5 minutes
	 */
	Medium = 2,
	/**
	 * must be a member of the server for longer than 10 minutes
	 */
	High = 3,
	/**
	 * must have a verified phone number
	 */
	VeryHigh = 4,
}

/**
 * Verification Level Enum
 *
 * Is a zod enum that represents the available {@link VerificationLevel}.
 */
export const VerificationLevelEnum = z.nativeEnum(VerificationLevel);

/**
 * MFA Level
 *
 * Represents the available MFA levels.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-mfa-level}
 */
export enum MFALevel {
	/**
	 * guild has no MFA/2FA requirement for moderation actions
	 */
	None = 0,
	/**
	 * guild has a 2FA requirement for moderation actions
	 */
	Elevated = 1,
}

/**
 * MFA Level Enum
 *
 * Is a zod enum that represents the available {@link MFALevel}.
 */
export const MFALevelEnum = z.nativeEnum(MFALevel);

/**
 * Explicit Content Filter Level
 *
 * Represents the available explicit content filter levels.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-explicit-content-filter-level}
 */
export enum ExplicitContentFilterLevel {
	/**
	 * media content will not be scanned
	 */
	Disabled = 0,
	/**
	 * media content sent by members without roles will be scanned
	 */
	MembersWithoutRoles = 1,
	/**
	 * media content sent by all members will be scanned
	 */
	AllMembers = 2,
}

/**
 * Explicit Content Filter Level Enum
 *
 * Is a zod enum that represents the available {@link ExplicitContentFilterLevel}.
 */
export const ExplicitContentFilterLevelEnum = z.nativeEnum(ExplicitContentFilterLevel);

/**
 * Default Message Notification Level
 *
 * Represents the available default message notification levels.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-default-message-notification-level}
 */
export enum DefaultMessageNotificationLevel {
	/**
	 * members will receive notifications for all messages by default
	 */
	AllMessages = 0,
	/**
	 * members will receive notifications only for messages that @mention them by default
	 */
	OnlyMentions = 1,
}

/**
 * Default Message Notification Level Enum
 *
 * Is a zod enum that represents the available {@link DefaultMessageNotificationLevel}.
 */
export const DefaultMessageNotificationLevelEnum = z.nativeEnum(DefaultMessageNotificationLevel);

/**
 * Guild Structure
 *
 * Represents a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-guild-structure}
 */
export const GuildStructure = z.object({
	id: Snowflake,
	name: z.string().min(2).max(100),
	icon: z.string().optional(),
	icon_hash: z.string().optional().nullable(),
	splash: z.string().nullable(),
	discovery_splash: z.string().nullable(),
	owner: z.boolean().optional(),
	owner_id: Snowflake,
	permissions: z.string().optional(),
	region: z.string().optional().nullable(),
	afk_channel_id: Snowflake.nullable(),
	afk_timeout: Integer,
	widget_enabled: z.boolean().optional(),
	widget_channel_id: Snowflake.optional(),
	verification_level: VerificationLevelEnum,
	default_message_notifications: DefaultMessageNotificationLevelEnum,
	explicit_content_filter: ExplicitContentFilterLevelEnum,
	roles: z.array(RoleStructure),
	emojis: z.array(EmojiStructure),
	features: z.array(GuildFeaturesEnum),
	mfa_level: MFALevelEnum,
	application_id: Snowflake.nullable(),
	system_channel_id: Snowflake.optional().nullable(),
	system_channel_flags: SystemChannelFlagsEnum,
	rules_channel_id: Snowflake.optional(),
	max_presences: Integer.optional(),
	max_members: Integer,
	vanity_url_code: z.string().optional(),
	description: z.string().optional(),
	banner: z.string().nullable(),
	premium_tier: PremiumTierEnum,
	premium_subscription_count: Integer.optional(),
	preferred_locale: z.string(),
	public_updates_channel_id: Snowflake.nullable(),
	max_video_channel_users: Integer.optional(),
	max_stage_video_channel_users: Integer.optional(),
	approximate_member_count: Integer.optional(),
	approximate_presence_count: Integer.optional(),
	welcome_screen: WelcomeScreenStructure.optional(),
	nsfw_level: GuildNSFWLevelEnum,
	stickers: z.array(StickerStructure).optional(),
	premium_progress_bar_enabled: z.boolean(),
	safety_alerts_channel_id: Snowflake.nullable(),
});

/**
 * Guild Structure Infer
 *
 * The inferred type of {@link GuildStructure}
 */
export type GuildStructureInfer = z.infer<typeof GuildStructure>;

/**
 * Guild Scheduled Event User Structure
 *
 * Represents a user subscribed to a scheduled event.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-scheduled-event-object-guild-scheduled-event-user-structure}
 */
export const GuildScheduledEventUserStructure = z.object({
	guild_scheduled_event_id: Snowflake,
	user: UserStructure,
	member: GuildMemberStructure.optional(),
});

/**
 * Guild Scheduled Event User Structure Infer
 *
 * The inferred type of {@link GuildScheduledEventUserStructure}
 */
export type GuildScheduledEventUserStructureInfer = z.infer<typeof GuildScheduledEventUserStructure>;

/**
 * Guild Scheduled Event Entity Structure
 *
 * Represents a scheduled event in a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-scheduled-event-object-guild-scheduled-event-structure}
 */
export const GuildScheduledEventEntityStructure = z.object({ location: z.string().min(1).max(100).optional() });

/**
 * Guild Scheduled Event Structure Infer
 *
 * The inferred type of {@link GuildScheduledEventEntityStructure}
 */
export type GuildScheduledEventEntityStructureInfer = z.infer<typeof GuildScheduledEventEntityStructure>;

/**
 * Guild Scheduled Event Status
 *
 * Represents the available scheduled event statuses.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-scheduled-event-object-guild-scheduled-event-status}
 */
export enum GuildScheduledEventStatus {
	/**
	 * Scheduled
	 */
	Scheduled = 1,
	/**
	 * Active
	 */
	Active = 2,
	/**
	 * Completed
	 */
	Completed = 3,
	/**
	 * Canceled
	 */
	Canceled = 4,
}

/**
 * Guild Scheduled Event Status Enum
 *
 * Is a zod enum that represents the available {@link GuildScheduledEventStatus}.
 */
export const GuildScheduledEventStatusEnum = z.nativeEnum(GuildScheduledEventStatus);

/**
 * Guild Scheduled Event Entity Types
 *
 * Represents the available scheduled event entity types.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-scheduled-event-object-guild-scheduled-event-entity-types}
 */
export enum GuildScheduledEventEntityTypes {
	/**
	 * Stage Instance
	 */
	StageInstance = 1,
	/**
	 * Voice
	 */
	Voice = 2,
	/**
	 * External
	 */
	External = 3,
}

/**
 * Guild Scheduled Event Entity Types Enum
 *
 * Is a zod enum that represents the available {@link GuildScheduledEventEntityTypes}.
 */
export const GuildScheduledEventEntityTypesEnum = z.nativeEnum(GuildScheduledEventEntityTypes);

/**
 * Guild Scheduled Event Privacy Level
 *
 * Represents the available scheduled event privacy levels.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-scheduled-event-object-guild-scheduled-event-privacy-level}
 */
export enum GuildScheduledEventPrivacyLevel {
	/**
	 * Guild Only
	 */
	GuildOnly = 2,
}

/**
 * Guild Scheduled Event Privacy Level Enum
 *
 * Is a zod enum that represents the available {@link GuildScheduledEventPrivacyLevel}.
 */
export const GuildScheduledEventPrivacyLevelEnum = z.nativeEnum(GuildScheduledEventPrivacyLevel);

/**
 * Guild Scheduled Event Structure
 *
 * Represents a scheduled event in a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-scheduled-event-object-guild-scheduled-event-structure}
 */
export const GuildScheduledEventStructure = z.object({
	id: Snowflake,
	guild_id: Snowflake,
	channel_id: Snowflake.optional().nullable(),
	creator_id: Snowflake.optional().nullable(),
	name: z.string().min(1).max(100),
	description: z.string().optional().nullable(),
	scheduled_start_time: ISO8601Timestamp,
	scheduled_end_time: ISO8601Timestamp.optional().nullable(),
	privacy_level: GuildScheduledEventPrivacyLevelEnum,
	status: GuildScheduledEventStatusEnum,
	entity_type: GuildScheduledEventEntityTypesEnum,
	entity_id: Snowflake.optional().nullable(),
	entity_metadata: GuildScheduledEventEntityStructure.optional().nullable(),
	creator: UserStructure.optional(),
	user_count: Integer.optional(),
	image: z.string().optional().nullable(),
});

/**
 * Guild Scheduled Event Structure Infer
 *
 * The inferred type of {@link GuildScheduledEventStructure}
 */
export type GuildScheduledEventStructureInfer = z.infer<typeof GuildScheduledEventStructure>;

/**
 * Guild Template Structure
 *
 * Represents a guild template.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-template-object-guild-template-structure}
 */
export const GuildTemplateStructure = z.object({
	code: z.string(),
	name: z.string(),
	description: z.string().nullable(),
	usage_count: Integer,
	creator_id: Snowflake,
	creator: UserStructure,
	created_at: ISO8601Timestamp,
	updated_at: ISO8601Timestamp,
	source_guild_id: Snowflake,
	serialized_source_guild: GuildStructure.partial(),
	is_dirty: z.boolean().nullable(),
});

/**
 * Guild Template Structure Infer
 *
 * The inferred type of {@link GuildTemplateStructure}
 */
export type GuildTemplateStructureInfer = z.infer<typeof GuildTemplateStructure>;
