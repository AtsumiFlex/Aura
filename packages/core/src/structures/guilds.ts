/**
 * Guild Template Resource - Guild Scheduled Event - Guild Resource
 *
 * Represents a code that when used, creates a guild based on a snapshot of an existing guild.
 * A representation of a scheduled event in a guild.
 * Guilds in Discord represent an isolated collection of users and channels, and are often referred to as "servers" in the UI.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild-template#guild-template-resource}
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event}
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-resource}
 */

import { z } from "zod";
import { OAuth2ScopesEnum } from "../../../utils/src/globals/oauth2";
import { Integer, ISO8601, Snowflake } from "../globals/globals";
import { LocalesEnum } from "../globals/locales";
import { ChannelStructure } from "./channels";
import { EmojiStructure } from "./emojis";
import { RoleStructure } from "./roles";
import { StickerStructure } from "./stickers";
import { UserStructure } from "./user";
import { VoiceRegionStructure } from "./voices";

/**
 * Guild Scheduled Event Prompt Types
 *
 * Represents the prompt type of a scheduled event in a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-onboarding-object-prompt-types}
 */
export enum GuildScheduledEventPromptTypes {
	MultipleChoice = 0,
	Dropdown = 1,
}

/**
 * Guild Scheduled Event Prompt Types Enum
 *
 * Represents the prompt type of a scheduled event in a guild.
 */
export const GuildScheduledEventPromptTypesEnum = z.nativeEnum(GuildScheduledEventPromptTypes);

/**
 * Guild Onboarding Mode
 *
 * Defines the criteria used to satisfy Onboarding constraints that are required for enabling.
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
 * Represents the mode used to satisfy Onboarding constraints that are required for enabling.
 */
export const GuildOnboardingModeEnum = z.nativeEnum(GuildOnboardingMode);

/**
 * Prompt Option Structure
 *
 * Represents a prompt option.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-onboarding-object-prompt-option-structure}
 */
export const PromptOptionStructure = z.object({
	id: Snowflake,
	channel_ids: z.array(Snowflake),
	role_ids: z.array(Snowflake),
	emoji: EmojiStructure.optional(),
	emoji_id: Snowflake.optional(),
	emoji_name: z.string().optional(),
	emoji_animated: z.boolean().optional(),
	title: z.string(),
	description: z.string().nullable(),
});

/**
 * Prompt Option Structure Infer is the inferred type of the PromptOptionStructure zod object.
 */
export type PromptOptionStructureInfer = z.infer<typeof PromptOptionStructure>;

/**
 * Onboarding Prompt Structure
 *
 * Represents a prompt in the onboarding flow.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-onboarding-object-onboarding-prompt-structure}
 */
export const OnboardingPromptStructure = z.object({
	id: Snowflake,
	type: GuildScheduledEventPromptTypesEnum,
	options: z.array(PromptOptionStructure),
	title: z.string(),
	single_select: z.boolean(),
	required: z.boolean(),
	in_onboarding: z.boolean(),
});

/**
 * Onboarding Prompt Structure Infer is the inferred type of the OnboardingPromptStructure zod object.
 */
export type OnboardingPromptStructureInfer = z.infer<typeof OnboardingPromptStructure>;

/**
 * Guild Onboarding Structure
 *
 * Represents the onboarding structure of a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-onboarding-object-guild-onboarding-structure}
 */
export const GuildOnboardingStructure = z.object({
	guild_id: Snowflake,
	prompts: z.array(OnboardingPromptStructure),
	default_channel_ids: z.array(Snowflake),
	enabled: z.boolean(),
	mode: GuildOnboardingModeEnum,
});

/**
 * Guild Onboarding Structure Infer is the inferred type of the GuildOnboardingStructure zod object.
 */
export type GuildOnboardingStructureInfer = z.infer<typeof GuildOnboardingStructure>;

/**
 * Guild Welcome Screen Structure
 *
 * Represents the welcome screen of a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-welcome-screen-object-guild-welcome-screen-structure}
 */
export const WelcomeScreenChannelStructure = z.object({
	channel_id: Snowflake,
	description: z.string(),
	emoji_id: Snowflake.nullable(),
	emoji_name: z.string().nullable(),
});

/**
 * Welcome Screen Channel Structure Infer is the inferred type of the WelcomeScreenChannelStructure zod object.
 */
export type WelcomeScreenChannelStructureInfer = z.infer<typeof WelcomeScreenChannelStructure>;

/**
 * Welcome Screen Structure
 *
 * Represents the welcome screen of a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-welcome-screen-object-guild-welcome-screen-structure}
 */
export const WelcomeScreenStructure = z.object({
	description: z.string().nullable(),
	welcome_channels: z.array(WelcomeScreenChannelStructure),
});

/**
 * Welcome Screen Structure Infer is the inferred type of the WelcomeScreenStructure zod object.
 */
export type WelcomeScreenStructureInfer = z.infer<typeof WelcomeScreenStructure>;

/**
 * Ban Structure
 *
 * Represents a ban in a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-ban-object}
 */
export const BanStructure = z.object({
	reason: z.string().nullable(),
	user: UserStructure,
});

/**
 * Ban Structure Infer is the inferred type of the BanStructure zod object.
 */
export type BanStructureInfer = z.infer<typeof BanStructure>;

/**
 * Integration Application Structure
 *
 * Represents an integration application.
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
 * Integration Application Structure Infer is the inferred type of the IntegrationApplicationStructure zod object.
 */
export type IntegrationApplicationStructureInfer = z.infer<typeof IntegrationApplicationStructure>;

/**
 * Integration Account Structure
 *
 * Represents an integration account.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#integration-account-object-integration-account-structure}
 */
export const IntegrationAccountStructure = z.object({
	id: z.string(),
	name: z.string(),
});

/**
 * Integration Account Structure Infer is the inferred type of the IntegrationAccountStructure zod object.
 */
export type IntegrationAccountStructureInfer = z.infer<typeof IntegrationAccountStructure>;

/**
 * Integration Expire Behaviors Enum
 *
 * Represents the expire behaviors of an integration.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#integration-object-integration-expire-behaviors}
 */
export enum IntegrationExpireBehaviors {
	RemoveRole = 0,
	Kick = 1,
}

/**
 * Integration Expire Behaviors Enum
 *
 * Represents the expire behaviors of an integration.
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
	synced_at: ISO8601.optional(),
	subscriber_count: Integer.optional(),
	revoked: z.boolean().optional(),
	application: IntegrationApplicationStructure.optional(),
	scopes: z.array(OAuth2ScopesEnum).optional(),
});

/**
 * Integration Structure Infer is the inferred type of the IntegrationStructure zod object.
 */
export type IntegrationStructureInfer = z.infer<typeof IntegrationStructure>;

/**
 * Guild Member Flags Enum
 *
 * Represents the flags of a guild member.
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
 * Represents the flags of a guild member.
 */
export const GuildMemberFlagsEnum = z.nativeEnum(GuildMemberFlags);

/**
 * Guild Member Structure
 *
 * Represents a member in a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-structure}
 */
export const GuildMemberStructure = z.object({
	user: UserStructure.optional(),
	nick: z.string().optional().nullable(),
	avatar: z.string().optional().nullable(),
	roles: z.array(Snowflake),
	joined_at: ISO8601,
	premium_since: ISO8601.optional().nullable(),
	deaf: z.boolean(),
	mute: z.boolean(),
	flags: GuildMemberFlagsEnum,
	pending: z.boolean().optional(),
	permissions: z.string().optional(),
	communication_disabled_until: ISO8601.optional().nullable(),
});

/**
 * Guild Member Structure Infer is the inferred type of the GuildMemberStructure zod object.
 */
export type GuildMemberStructureInfer = z.infer<typeof GuildMemberStructure>;

/**
 * Guild Widget Structure
 *
 * Represents the widget of a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-widget-object-guild-widget-structure}
 */
export const GuildWidgetStructure = z.object({
	id: Snowflake,
	name: z.string().min(2).max(100),
	instant_invite: z.string().nullable(),
	channels: z.array(ChannelStructure.partial()),
	members: z.array(UserStructure.partial()),
	presence_count: Integer,
});

/**
 * Guild Widget Structure Infer is the inferred type of the GuildWidgetStructure zod object.
 */
export type GuildWidgetStructureInfer = z.infer<typeof GuildWidgetStructure>;

/**
 * Guild Widget Settings Structure
 *
 * Represents the widget settings of a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-widget-object-guild-widget-settings-structure}
 */
export const GuildWidgetSettingsStructure = z.object({
	enabled: z.boolean(),
	channel_id: Snowflake.nullable(),
});

/**
 * Guild Widget Settings Structure Infer is the inferred type of the GuildWidgetSettingsStructure zod object.
 */
export type GuildWidgetSettingsStructureInfer = z.infer<typeof GuildWidgetSettingsStructure>;

/**
 * Guild Features
 *
 * Represents the features of a guild.
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
 * Represents the features of a guild.
 */
export const GuildFeaturesEnum = z.nativeEnum(GuildFeatures);

/**
 * Guild Preview Structure
 *
 * Represents a preview of a guild.
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
 * Guild Preview Structure Infer is the inferred type of the GuildPreviewStructure zod object.
 */
export type GuildPreviewStructureInfer = z.infer<typeof GuildPreviewStructure>;

/**
 * System Channel Flags Enum
 *
 * Represents the flags of a system channel.
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
 * Represents the flags of a system channel.
 */
export const SystemChannelFlagsEnum = z.nativeEnum(SystemChannelFlags);

/**
 * Premium Tier Enum
 *
 * Represents the premium tier of a guild.
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
 * Represents the premium tier of a guild.
 */
export const PremiumTierEnum = z.nativeEnum(PremiumTier);

/**
 * Guild NSFW Level Enum
 *
 * Represents the NSFW level of a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-guild-nsfw-level}
 */
export enum GuildNSFWLevel {
	/**
	 * Explicit content is allowed in the guild
	 */
	Explicit = 1,
	/**
	 * Explicit content is disallowed in the guild
	 */
	Safe = 2,
	/**
	 * Explicit content is allowed in the guild, but only for users aged 18 and over
	 */
	AgeRestricted = 3,
}

/**
 * Guild NSFW Level Enum
 *
 * Represents the NSFW level of a guild.
 */
export const GuildNSFWLevelEnum = z.nativeEnum(GuildNSFWLevel);

/**
 * Verification Level
 *
 * Represents the verification level of a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-verification-level}
 */
export enum VerificationLevel {
	/**
	 * Unrestricted
	 */
	None = 0,
	/**
	 * Must have verified email on account
	 */
	Low = 1,
	/**
	 * Must be registered on Discord for longer than 5 minutes
	 */
	Medium = 2,
	/**
	 * Must be a member of the server for longer than 10 minutes
	 */
	High = 3,
	/**
	 * Must have a verified phone number
	 */
	VeryHigh = 4,
}

/**
 * Verification Level Enum
 *
 * Represents the verification level of a guild.
 */
export const VerificationLevelEnum = z.nativeEnum(VerificationLevel);

/**
 * MFA Level
 *
 * Represents the MFA level of a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-mfa-level}
 */
export enum MFALevel {
	/**
	 * Guild has no MFA/2FA requirement for moderation actions
	 */
	None = 0,
	/**
	 * Guild has a 2FA requirement for moderation actions
	 */
	Elevated = 1,
}

/**
 * MFA Level Enum
 *
 * Represents the MFA level of a guild.
 */
export const MFALevelEnum = z.nativeEnum(MFALevel);

/**
 * Explicit Content Filter Level
 *
 * Represents the explicit content filter level of a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-explicit-content-filter-level}
 */
export enum ExplicitContentFilterLevel {
	/**
	 * Media content will not be scanned
	 */
	Disabled = 0,
	/**
	 * Media content sent by members without roles will be scanned
	 */
	MembersWithoutRoles = 1,
	/**
	 * Media content sent by all members will be scanned
	 */
	AllMembers = 2,
}

/**
 * Explicit Content Filter Level Enum
 *
 * Represents the explicit content filter level of a guild.
 */
export const ExplicitContentFilterLevelEnum = z.nativeEnum(ExplicitContentFilterLevel);

/**
 * Default Message Notification Level
 *
 * Represents the default message notification level of a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-default-message-notification-level}
 */
export enum DefaultMessageNotificationLevel {
	/**
	 * Members will receive notifications for all messages by default
	 */
	AllMessages = 0,
	/**
	 * Members will receive notifications only for messages that @mention them by default
	 */
	OnlyMentions = 1,
}

/**
 * Default Message Notification Level Enum
 *
 * Represents the default message notification level of a guild.
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
	icon: z.string().nullable(),
	icon_hash: z.string().nullable(),
	splash: z.string().nullable(),
	discovery_splash: z.string().nullable(),
	owner: z.boolean().optional(),
	owner_id: Snowflake,
	permissions: z.string().optional(),
	region: VoiceRegionStructure.pick({ id: true }).optional().nullable(),
	afk_channel_id: Snowflake.optional(),
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
	system_channel_id: Snowflake.nullable(),
	system_channel_flags: SystemChannelFlagsEnum,
	rules_channel_id: Snowflake.nullable(),
	max_presences: Integer.optional().nullable(),
	max_members: Integer,
	vanity_url_code: z.string().nullable(),
	description: z.string().nullable(),
	banner: z.string().nullable(),
	premium_tier: PremiumTierEnum,
	premium_subscription_count: Integer.optional(),
	preferred_locale: LocalesEnum,
	public_updates_channel_id: Snowflake.optional(),
	max_video_channel_users: Integer.optional(),
	max_stage_video_channel_users: Integer.optional(),
	approximate_member_count: Integer.optional(),
	approximate_presence_count: Integer.optional(),
	welcome_screen: WelcomeScreenStructure.optional(),
	nsfw_level: GuildNSFWLevelEnum,
	stickers: z.array(StickerStructure).optional(),
	premium_progress_bar_enabled: z.boolean().optional(),
	safety_alerts_channel_id: Snowflake.nullable(),
});

/**
 * Guild Structure Infer is the inferred type of the GuildStructure zod object.
 */
export type GuildStructureInfer = z.infer<typeof GuildStructure>;

/**
 * Guild Template Structure
 *
 * Represents a code that when used, creates a guild based on a snapshot of an existing guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild-template#guild-template-object-guild-template-structure}
 */
export const GuildTemplateStructure = z.object({
	code: z.string(),
	name: z.string(),
	description: z.string().nullable(),
	usage_count: Integer,
	creator_id: Snowflake,
	creator: UserStructure,
	created_at: ISO8601,
	updated_at: ISO8601,
	source_guild_id: Snowflake,
	serialized_source_guild: GuildStructure.partial(),
	is_dirty: z.boolean().optional(),
});

/**
 * Guild Template Structure Infer is the inferred type of the GuildTemplateStructure zod object.
 */
export type GuildTemplateStructureInfer = z.infer<typeof GuildTemplateStructure>;

/**
 * Guild Scheduled Event User Structure
 *
 * Represents a user subscribed to a scheduled event in a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-user-object-guild-scheduled-event-user-structure}
 */
export const GuildScheduledEventUserStructure = z.object({
	guild_scheduled_event_id: Snowflake,
	user: UserStructure,
	member: GuildMemberStructure.optional(),
});

/**
 * Guild Scheduled Event User Structure Infer is the inferred type of the GuildScheduledEventUserStructure zod object.
 */
export type GuildScheduledEventUserStructureInfer = z.infer<typeof GuildScheduledEventUserStructure>;

/**
 * Guild Scheduled Event Entity Metadata Structure
 *
 * Represents the metadata of a scheduled event in a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-entity-metadata-object-guild-scheduled-event-entity-metadata-structure}
 */
export const GuildScheduledEventEntityMetadataStructure = z.object({ location: z.string().min(1).max(100).optional() });

/**
 * Guild Scheduled Event Entity Metadata Structure Infer is the inferred type of the GuildScheduledEventEntityMetadataStructure zod object.
 */
export type GuildScheduledEventEntityMetadataStructureInfer = z.infer<typeof GuildScheduledEventEntityMetadataStructure>;

/**
 * Guild Scheduled Event Status Enum
 *
 * Represents the status of a scheduled event in a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-status-enum}
 */
export enum GuildScheduledEventStatus {
	Scheduled = 1,
	Active = 2,
	Completed = 3,
	Canceled = 4,
}

/**
 * Guild Scheduled Event Status Enum
 *
 * Represents the status of a scheduled event in a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-status}
 */
export const GuildScheduledEventStatusEnum = z.nativeEnum(GuildScheduledEventStatus);

/**
 * Guild Scheduled Event Entity Types
 *
 * Represents the type of a scheduled event entity in a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-entity-types}
 */
export enum GuildScheduledEventEntityTypes {
	StageInstance = 1,
	Voice = 2,
	External = 3,
}

/**
 * Guild Scheduled Event Entity Types Enum
 *
 * Represents the type of a scheduled event entity in a guild.
 */
export const GuildScheduledEventEntityTypesEnum = z.nativeEnum(GuildScheduledEventEntityTypes);

/**
 * Guild Scheduled Event Privacy Level
 *
 * Represents the privacy level of a scheduled event in a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-privacy-level}
 */
export enum GuildScheduledEventPrivacyLevel {
	/**
	 * The scheduled event is only accessible to guild members
	 */
	GuildOnly = 2,
}

/**
 * Guild Scheduled Event Privacy Level Enum
 *
 * Represents the privacy level of a scheduled event in a guild.
 */
export const GuildScheduledEventPrivacyLevelEnum = z.nativeEnum(GuildScheduledEventPrivacyLevel);

/**
 * Guild Scheduled Event Structure
 *
 * Represents a scheduled event in a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-structure}
 */
export const GuildScheduledEventStructure = z.object({
	id: Snowflake,
	guild_id: Snowflake,
	channel_id: Snowflake.optional().nullable(),
	creator_id: Snowflake.optional().nullable(),
	name: z.string(),
	description: z.string().optional().nullable(),
	scheduled_start_time: ISO8601,
	scheduled_end_time: ISO8601.optional().nullable(),
	privacy_level: GuildScheduledEventPrivacyLevelEnum,
	status: GuildScheduledEventStatusEnum,
	entity_type: GuildScheduledEventEntityTypesEnum,
	entity_id: Snowflake.nullable(),
	entity_metadata: GuildScheduledEventEntityMetadataStructure.nullable(),
	creator: UserStructure.optional(),
	user_count: Integer.optional(),
	image: z.string().optional().nullable(),
});

/**
 * Guild Scheduled Event Structure Infer is the inferred type of the GuildScheduledEventStructure zod object.
 */
export type GuildScheduledEventStructureInfer = z.infer<typeof GuildScheduledEventStructure>;
