/**
 * Guild Resource - Guild Template Resource - Guild Scheduled Event
 *
 * Guilds in Discord represent an isolated collection of users and channels, and are often referred to as "servers" in the UI.
 *
 * Guild templates are a way to save your guild's settings and channels and apply them to a new guild that you create.
 *
 * A representation of a scheduled event in a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-resource}
 * @see {@link https://discord.com/developers/docs/resources/guild-template#guild-template-resource}
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event}
 */

import {z} from "zod";
import {Integer, ISO8601Timestamp, Snowflake} from "../globals/formatters";
import {OAuth2ScopesEnum} from "../libs/oauth2";
import {ChannelStructure} from "./channels";
import {EmojiStructure} from "./emojis";
import {RoleStructure} from "./roles";
import {StickerStructure} from "./stickers";
import {UserStructure} from "./users";

/**
 * Prompt Types
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-onboarding-object-prompt-types}
 */
export enum PromptTypes {
    MultipleChoice = 0,
    Dropdown = 1,
}

/**
 * Prompt Types Enum
 *
 * Is a zod enum that represents the available {@link PromptTypes}.
 */
export const PromptTypesEnum = z.nativeEnum(PromptTypes);

/**
 * Onboarding Mode
 *
 * Defines the criteria used to satisfy Onboarding constraints that are required for enabling.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-onboarding-object-onboarding-mode}
 */
export enum OnboardingMode {
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
 * Onboarding Mode Enum
 *
 * Is a zod enum that represents the available {@link OnboardingMode}.
 */
export const OnboardingModeEnum = z.nativeEnum(OnboardingMode);

/**
 * Prompt Option Structure
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-onboarding-object-prompt-option-structure}
 */
export const PromptOptionStructure = z.object({
    /**
     * ID of the prompt option
     */
    id: Snowflake,
    /**
     * IDs for channels a member is added to when the option is selected
     */
    channel_ids: z.array(Snowflake),
    /**
     * IDs for roles assigned to a member when the option is selected
     */
    role_ids: z.array(Snowflake),
    /**
     * Emoji of the option (see below)
     *
     * @see {@link EmojiStructure}
     */
    emoji: EmojiStructure.optional(),
    /**
     * Emoji ID of the option (see below)
     */
    emoji_id: Snowflake.optional(),
    /**
     * Emoji name of the option (see below)
     */
    emoji_name: z.string().optional(),
    /**
     * Whether the emoji is animated (see below)
     */
    emoji_animated: z.boolean().optional(),
    /**
     * Title of the option
     */
    title: z.string(),
    /**
     * Description of the option
     */
    description: z.string().nullable(),
});

/**
 * Prompt Option Structure Infer
 *
 * The inferred zod object from {@link PromptOptionStructure}
 */
export type PromptOptionStructureInfer = z.infer<typeof PromptOptionStructure>;

/**
 * Onboarding Prompt Structure
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-onboarding-object-onboarding-prompt-structure}
 */
export const OnboardingPromptStructure = z.object({
    /**
     * ID of the prompt
     */
    id: Snowflake,
    /**
     * Type of prompt
     *
     * @see {@link PromptTypes}
     */
    type: PromptTypesEnum,
    /**
     * Options available within the prompt
     *
     * @see {@link PromptOptionStructure}
     */
    options: z.array(PromptOptionStructure),
    /**
     * Title of the prompt
     */
    title: z.string(),
    /**
     * Indicates whether users are limited to selecting one option for the prompt
     */
    single_select: z.boolean(),
    /**
     * Indicates whether the prompt is required before a user completes the onboarding flow
     */
    required: z.boolean(),
    /**
     * Indicates whether the prompt is present in the onboarding flow. If false, the prompt will only appear in the Channels & Roles tab
     */
    in_onboarding: z.boolean(),
});

/**
 * Onboarding Prompt Structure Infer
 *
 * The inferred zod object from {@link OnboardingPromptStructure}
 */
export type OnboardingPromptStructureInfer = z.infer<typeof OnboardingPromptStructure>;

/**
 * Guild Onboarding Structure
 *
 * Represents the onboarding flow for a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-onboarding-object-guild-onboarding-structure}
 */
export const GuildOnboardingStructure = z.object({
    /**
     * ID of the guild this onboarding is part of
     */
    guild_id: Snowflake,
    /**
     * Prompts shown during onboarding and in customize community
     *
     * @see {@link OnboardingPromptStructure}
     */
    prompts: z.array(OnboardingPromptStructure),
    /**
     * Channel IDs that members get opted into automatically
     */
    default_channel_ids: z.array(Snowflake),
    /**
     * Whether onboarding is enabled in the guild
     */
    enabled: z.boolean(),
    /**
     * Current mode of onboarding
     *
     * @see {@link OnboardingMode}
     */
    mode: OnboardingModeEnum,
});

/**
 * Guild Onboarding Structure Infer
 *
 * The inferred zod object from {@link GuildOnboardingStructure}
 */
export type GuildOnboardingStructureInfer = z.infer<typeof GuildOnboardingStructure>;

/**
 * Welcome Screen Channel Structure
 *
 * Represents a channel in the welcome screen of a Community guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-channel-structure}
 */
export const WelcomeScreenChannelStructure = z.object({
    /**
     * The channel's id
     */
    channel_id: Snowflake,
    /**
     * The description shown for the channel
     */
    description: z.string(),
    /**
     * The emoji id, if the emoji is custom
     */
    emoji_id: Snowflake.nullable(),
    /**
     * The emoji name if custom, the unicode character if standard, or null if no emoji is set
     */
    emoji_name: z.string().nullable(),
});

/**
 * Welcome Screen Channel Structure Infer
 *
 * The inferred zod object from {@link WelcomeScreenChannelStructure}
 */
export type WelcomeScreenChannelStructureInfer = z.infer<typeof WelcomeScreenChannelStructure>;

/**
 * Welcome Screen Structure
 *
 * Represents the welcome screen of a Community guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-structure}
 */
export const WelcomeScreenStructure = z.object({
    /**
     * The server description shown in the welcome screen
     */
    description: z.string().nullable(),
    /**
     * The channels shown in the welcome screen, up to 5
     *
     * @see {@link WelcomeScreenChannelStructure}
     */
    welcome_channels: z.array(WelcomeScreenChannelStructure).max(5),
});

/**
 * Welcome Screen Structure Infer
 *
 * The inferred zod object from {@link WelcomeScreenStructure}
 */
export type WelcomeScreenStructureInfer = z.infer<typeof WelcomeScreenStructure>;

/**
 * Ban Structure
 *
 * Represents a ban for a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#ban-object-ban-structure}
 */
export const BanStructure = z.object({
    /**
     * The reason for the ban
     */
    reason: z.string().nullable(),
    /**
     * The banned user
     *
     * @see {@link UserStructure}
     */
    user: UserStructure,
});

/**
 * Ban Structure Infer
 *
 * The inferred zod object from {@link BanStructure}
 */
export type BanStructureInfer = z.infer<typeof BanStructure>;

/**
 * Integration Application Structure
 *
 * Represents an application for an integration.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#integration-application-object-integration-application-structure}
 */
export const IntegrationApplicationStructure = z.object({
    /**
     * The id of the app
     */
    id: Snowflake,
    /**
     * The name of the app
     */
    name: z.string(),
    /**
     * The icon hash of the app
     */
    icon: z.string().nullable(),
    /**
     * The description of the app
     */
    description: z.string(),
    /**
     * The bot associated with this application
     *
     * @see {@link UserStructure}
     */
    bot: UserStructure.optional(),
});

/**
 * Integration Application Structure Infer
 *
 * The inferred zod object from {@link IntegrationApplicationStructure}
 */
export type IntegrationApplicationStructureInfer = z.infer<typeof IntegrationApplicationStructure>;

/**
 * Integration Account Structure
 *
 * Represents an account for an integration.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#integration-account-object-integration-account-structure}
 */
export const IntegrationAccountStructure = z.object({
    /**
     * ID of the account
     */
    id: z.string(),
    /**
     * Name of the account
     */
    name: z.string(),
});

/**
 * Integration Account Structure Infer
 *
 * The inferred zod object from {@link IntegrationAccountStructure}
 */
export type IntegrationAccountStructureInfer = z.infer<typeof IntegrationAccountStructure>;

/**
 * Integration Expire Behaviors
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
 * Represents an integration for a guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#integration-object-integration-structure}
 */
export const IntegrationStructure = z.object({
    /**
     * Integration id
     */
    id: Snowflake,
    /**
     * Integration name
     */
    name: z.string(),
    /**
     * Integration type (twitch, youtube, discord, or guild_subscription)
     */
    type: z.union([z.literal("twitch"), z.literal("youtube"), z.literal("discord"), z.literal("guild_subscription")]),
    /**
     * Is this integration enabled
     */
    enabled: z.boolean(),
    /**
     * Is this integration syncing
     */
    syncing: z.boolean().optional(),
    /**
     * ID that this integration uses for "subscribers"
     */
    role_id: Snowflake.optional(),
    /**
     * Whether emoticons should be synced for this integration (twitch only currently)
     */
    enable_emoticons: z.boolean().optional(),
    /**
     * The behavior of expiring subscribers
     *
     * @see {@link IntegrationExpireBehaviors}
     */
    expire_behavior: IntegrationExpireBehaviorsEnum.optional(),
    /**
     * The grace period (in days) before expiring subscribers
     */
    expire_grace_period: Integer.optional(),
    /**
     * User for this integration
     *
     * @see {@link UserStructure}
     */
    user: UserStructure.optional(),
    /**
     * Integration account information
     *
     * @see {@link IntegrationAccountStructure}
     */
    account: IntegrationAccountStructure,
    /**
     * When this integration was last synced
     */
    synced_at: ISO8601Timestamp.optional(),
    /**
     * How many subscribers this integration has
     */
    subscriber_count: Integer.optional(),
    /**
     * Has this integration been revoked
     */
    revoked: z.boolean().optional(),
    /**
     * The bot/OAuth2 application for discord integrations
     *
     * @see {@link IntegrationApplicationStructure}
     */
    application: IntegrationApplicationStructure.optional(),
    /**
     * The scopes the application has been authorized for
     */
    scopes: z.array(OAuth2ScopesEnum).optional(),
});

/**
 * Integration Structure Infer
 *
 * The inferred zod object from {@link IntegrationStructure}
 */
export type IntegrationStructureInfer = z.infer<typeof IntegrationStructure>;

/**
 * Guild Member Flags
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
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-structure}
 */
export const GuildMemberStructure = z.object({
    /**
     * The user this guild member represents
     *
     * @see {@link UserStructure}
     */
    user: UserStructure.optional(),
    /**
     * This user's guild nickname
     */
    nick: z.string().optional().nullable(),
    /**
     * The member's guild avatar hash
     */
    avatar: z.string().optional().nullable(),
    /**
     * Array of role object ids
     */
    roles: z.array(Snowflake),
    /**
     * When the user joined the guild
     */
    joined_at: ISO8601Timestamp,
    /**
     * When the user started boosting the guild
     */
    premium_since: ISO8601Timestamp.optional(),
    /**
     * Whether the user is deafened in voice channels
     */
    deaf: z.boolean(),
    /**
     * Whether the user is muted in voice channels
     */
    mute: z.boolean(),
    /**
     * Guild member flags represented as a bit set, defaults to 0
     *
     * @see {@link GuildMemberFlags}
     */
    flags: GuildMemberFlagsEnum,
    /**
     * Whether the user has not yet passed the guild's Membership Screening requirements
     */
    pending: z.boolean().optional(),
    /**
     * Total permissions of the member in the channel, including overwrites, returned when in the interaction object
     */
    permissions: z.string().optional(),
    /**
     * When the user's timeout will expire and the user will be able to communicate in the guild again, null or a time in the past if the user is not timed out
     */
    communication_disabled_until: ISO8601Timestamp.optional(),
});

/**
 * Guild Member Structure Infer
 *
 * The inferred zod object from {@link GuildMemberStructure}
 */
export type GuildMemberStructureInfer = z.infer<typeof GuildMemberStructure>;

/**
 * Guild Widget Structure
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-widget-object-guild-widget-structure}
 */
export const GuildWidgetStructure = z.object({
    /**
     * Guild ID
     */
    id: Snowflake,
    /**
     * Guild Name (2-100 characters)
     */
    name: z.string().min(2).max(100),
    /**
     * Instant Invite for the guild's specified widget invite channel
     */
    instant_invite: z.string().optional(),
    /**
     * Voice and stage channels which are accessible by @everyone
     */
    channels: z.array(ChannelStructure),
    /**
     * Special widget user objects that include user's presence (Limit 100)
     */
    members: z.array(UserStructure.partial()),
    /**
     * Number of online members in this guild
     */
    presence_count: Integer,
});

/**
 * Guild Widget Structure Infer
 *
 * The inferred zod object from {@link GuildWidgetStructure}
 */
export type GuildWidgetStructureInfer = z.infer<typeof GuildWidgetStructure>;

/**
 * Guild Widget Settings Structure
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-widget-settings-object-guild-widget-settings-structure}
 */
export const GuildWidgetSettingsStructure = z.object({
    /**
     * Whether the widget is enabled
     */
    enabled: z.boolean(),
    /**
     * The widget channel id
     */
    channel_id: Snowflake.nullable(),
});

/**
 * Guild Widget Settings Structure Infer
 *
 * The inferred zod object from {@link GuildWidgetSettingsStructure}
 */
export type GuildWidgetSettingsStructureInfer = z.infer<typeof GuildWidgetSettingsStructure>;

/**
 * Guild Features
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
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-preview-object-guild-preview-structure}
 */
export const GuildPreviewStructure = z.object({
    /**
     * Guild ID
     */
    id: Snowflake,
    /**
     * Guild Name (2-100 characters)
     */
    name: z.string().min(2).max(100),
    /**
     * Guild Icon Hash
     */
    icon: z.string().nullable(),
    /**
     * Guild Splash Hash
     */
    splash: z.string().nullable(),
    /**
     * Guild Discovery Splash Hash
     */
    discovery_splash: z.string().nullable(),
    /**
     * Custom Guild Emojis
     *
     * @see {@link EmojiStructure}
     */
    emojis: z.array(EmojiStructure),
    /**
     * Enabled Guild Features
     */
    features: z.array(GuildFeaturesEnum),
    /**
     * Approximate Number of Members in this Guild
     */
    approximate_member_count: Integer,
    /**
     * Approximate Number of Online Members in this Guild
     */
    approximate_presence_count: Integer,
    /**
     * The Description for the Guild
     */
    description: z.string().nullable(),
    /**
     * Custom Guild Stickers
     */
    stickers: z.array(StickerStructure),
});

/**
 * System Channel Flags
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
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-guild-structure}
 */
export const GuildStructure = z.object({
    /**
     * Guild ID
     */
    id: Snowflake,
    /**
     * Guild Name (2-100 characters, excluding trailing and leading whitespace)
     */
    name: z.string().min(2).max(100),
    /**
     * Guild Icon Hash
     */
    icon: z.string().nullable(),
    /**
     * Guild Splash Hash
     */
    splash: z.string().nullable(),
    /**
     * Discovery Splash Hash; only present for guilds with the "DISCOVERABLE" feature
     */
    discovery_splash: z.string().nullable(),
    /**
     * True if the user is the owner of the guild
     */
    owner: z.boolean().optional(),
    /**
     * ID of Owner
     */
    owner_id: Snowflake,
    /**
     * Total permissions for the user in the guild (excludes overwrites and implicit permissions)
     */
    permissions: z.string().optional(),
    /**
     * Voice Region ID for the guild (deprecated)
     */
    region: z.string().nullable(),
    /**
     * ID of AFK Channel
     */
    afk_channel_id: Snowflake.optional(),
    /**
     * AFK Timeout in Seconds
     */
    afk_timeout: Integer,
    /**
     * True if the server widget is enabled
     */
    widget_enabled: z.boolean().optional(),
    /**
     * The Channel ID that the widget will generate an invite to, or null if set to no invite
     */
    widget_channel_id: Snowflake.optional(),
    /**
     * Verification Level Required for the Guild
     */
    verification_level: VerificationLevelEnum,
    /**
     * Default Message Notifications Level
     */
    default_message_notifications: DefaultMessageNotificationLevelEnum,
    /**
     * Explicit Content Filter Level
     */
    explicit_content_filter: ExplicitContentFilterLevelEnum,
    /**
     * Roles in the Guild
     *
     * @see {@link RoleStructure}
     */
    roles: z.array(RoleStructure),
    /**
     * Custom Guild Emojis
     *
     * @see {@link EmojiStructure}
     */
    emojis: z.array(EmojiStructure),
    /**
     * Enabled Guild Features
     */
    features: z.array(GuildFeaturesEnum),
    /**
     * Required MFA Level for the Guild
     */
    mfa_level: MFALevelEnum,
    /**
     * Application ID of the Guild Creator if it is bot-created
     */
    application_id: Snowflake.optional(),
    /**
     * The ID of the Channel where guild notices such as welcome messages and boost events are posted
     */
    system_channel_id: Snowflake.optional(),
    /**
     * System Channel Flags
     *
     * @see {@link SystemChannelFlags}
     */
    system_channel_flags: SystemChannelFlagsEnum,
    /**
     * The ID of the Channel where Community guilds can display rules and/or guidelines
     */
    rules_channel_id: Snowflake.optional(),
    /**
     * The maximum number of presences for the guild (null is always returned, apart from the largest of guilds)
     */
    max_presences: Integer.optional(),
    /**
     * The maximum number of members for the guild
     */
    max_members: Integer.optional(),
    /**
     * The Vanity URL Code for the Guild
     */
    vanity_url_code: z.string().nullable(),
    /**
     * The Description of a Guild
     */
    description: z.string().nullable(),
    /**
     * Banner Hash
     */
    banner: z.string().nullable(),
    /**
     * Premium Tier (Server Boost Level)
     *
     * @see {@link PremiumTier}
     */
    premium_tier: PremiumTierEnum,
    /**
     * The number of boosts this guild currently has
     */
    premium_subscription_count: Integer.optional(),
    /**
     * The preferred locale of a Community guild; used in server discovery and notices from Discord, and sent in interactions; defaults to "en-US"
     */
    preferred_locale: z.string(),
    /**
     * The ID of the Channel where admins and moderators of Community guilds receive notices from Discord
     */
    public_updates_channel_id: Snowflake.optional(),
    /**
     * The maximum amount of users in a video channel
     */
    max_video_channel_users: Integer.optional(),
    /**
     * The maximum amount of users in a stage video channel
     */
    max_stage_video_channel_users: Integer.optional(),
    /**
     * Approximate Number of Members in this Guild
     */
    approximate_member_count: Integer.optional(),
    /**
     * Approximate Number of Non-Offline Members in this Guild
     */
    approximate_presence_count: Integer.optional(),
    /**
     * The welcome screen of a Community guild, shown to new members, returned in an Invite's guild object
     *
     * @see {@link WelcomeScreenStructure}
     */
    welcome_screen: WelcomeScreenStructure.optional(),
    /**
     * Guild NSFW Level
     *
     * @see {@link GuildNSFWLevel}
     */
    nsfw_level: GuildNSFWLevelEnum,
    /**
     * Custom Guild Stickers
     *
     * @see {@link StickerStructure}
     */
    stickers: z.array(StickerStructure),
    /**
     * Whether the guild has the boost progress bar enabled
     */
    premium_progress_bar_enabled: z.boolean(),
    /**
     * The ID of the Channel where admins and moderators of Community guilds receive safety alerts from Discord
     */
    safety_alerts_channel_id: Snowflake.optional(),
});

/**
 * Guild Structure Infer
 *
 * The inferred zod object from {@link GuildStructure}
 */
export type GuildStructureInfer = z.infer<typeof GuildStructure>;

/**
 * Guild Template Structure
 *
 * Represents a code that when used, creates a guild based on a snapshot of an existing guild.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild-template#guild-template-object}
 */
export const GuildTemplateStructure = z.object({
    /**
     * The template code (unique ID)
     */
    code: z.string(),
    /**
     * The template name
     */
    name: z.string(),
    /**
     * The description for the template
     */
    description: z.string().nullable(),
    /**
     * Number of times this template has been used
     */
    usage_count: z.number(),
    /**
     * The ID of the user who created the template
     */
    creator_id: Snowflake,
    /**
     * The user who created the template
     *
     * @see {@link UserStructure}
     */
    creator: UserStructure,
    /**
     * When this template was created
     */
    created_at: ISO8601Timestamp,
    /**
     * When this template was last synced to the source guild
     */
    updated_at: ISO8601Timestamp,
    /**
     * The ID of the guild this template is based on
     */
    source_guild_id: Snowflake,
    /**
     * The guild snapshot this template contains
     *
     * @see {@link GuildStructure}
     */
    serialized_source_guild: GuildStructure.partial(),
    /**
     * Whether the template has unsynced changes
     */
    is_dirty: z.boolean().nullable(),
});

/**
 * Guild Template Structure Infer
 *
 * The inferred zod object from {@link GuildTemplateStructure}
 */
export type GuildTemplateStructureInfer = z.infer<typeof GuildTemplateStructure>;

/**
 * Guild Scheduled Event User Structure
 *
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-user-object-guild-scheduled-event-user-structure}
 */
export const GuildScheduledEventUserStructure = z.object({
    /**
     * The scheduled event id which the user subscribed to
     */
    guild_scheduled_event_id: Snowflake,
    /**
     * User which subscribed to an event
     *
     * @see {@link UserStructure}
     */
    user: UserStructure,
    /**
     * Guild member data for this user for the guild which this event belongs to, if any
     *
     * @see {@link GuildMemberStructure}
     */
    member: GuildMemberStructure.optional(),
});

/**
 * Guild Scheduled Event User Structure Infer
 *
 * The inferred zod object from {@link GuildScheduledEventUserStructure}
 */
export type GuildScheduledEventUserStructureInfer = z.infer<typeof GuildScheduledEventUserStructure>;

/**
 * Guild Scheduled Event Entity Metadata
 *
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-entity-metadata}
 */
export const GuildScheduledEventEntityMetadata = z.object({
    /**
     * Location of the event (1-100 characters)
     */
    location: z.string().min(1).max(100).optional(),
});

/**
 * Guild Scheduled Event Entity Metadata Infer
 *
 * The inferred zod object from {@link GuildScheduledEventEntityMetadata}
 */
export type GuildScheduledEventEntityMetadataInfer = z.infer<typeof GuildScheduledEventEntityMetadata>;

/**
 * Guild Scheduled Event Status
 *
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-status}
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
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-entity-types}
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
 * Is a zod enum that represents the available {@link GuildScheduledEventPrivacyLevel}.
 */
export const GuildScheduledEventPrivacyLevelEnum = z.nativeEnum(GuildScheduledEventPrivacyLevel);

/**
 * Guild Scheduled Event Structure
 *
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-structure}
 */
export const GuildScheduledEventStructure = z.object({
    /**
     * The id of the scheduled event
     */
    id: Snowflake,
    /**
     * The guild id which the scheduled event belongs to
     */
    guild_id: Snowflake,
    /**
     * The channel id in which the scheduled event will be hosted, or null if scheduled entity type is EXTERNAL
     */
    channel_id: Snowflake.nullable(),
    /**
     * The id of the user that created the scheduled event
     */
    creator_id: Snowflake.optional().nullable(),
    /**
     * The name of the scheduled event (1-100 characters)
     */
    name: z.string().min(1).max(100),
    /**
     * The description of the scheduled event (1-1000 characters)
     */
    description: z.string().min(1).max(1_000).optional().nullable(),
    /**
     * The time the scheduled event will start
     */
    scheduled_start_time: ISO8601Timestamp,
    /**
     * The time the scheduled event will end, required if entity_type is EXTERNAL
     */
    scheduled_end_time: ISO8601Timestamp.nullable(),
    /**
     * The privacy level of the scheduled event
     */
    privacy_level: GuildScheduledEventPrivacyLevelEnum,
    /**
     * The status of the scheduled event
     */
    status: GuildScheduledEventStatusEnum,
    /**
     * The type of the scheduled event
     */
    entity_type: GuildScheduledEventEntityTypesEnum,
    /**
     * The id of an entity associated with a guild scheduled event
     */
    entity_id: Snowflake.nullable(),
    /**
     * Additional metadata for the guild scheduled event
     */
    entity_metadata: GuildScheduledEventEntityMetadata.nullable(),
    /**
     * The user that created the scheduled event
     */
    creator: UserStructure.optional(),
    /**
     * The number of users subscribed to the scheduled event
     */
    user_count: Integer.optional(),
    /**
     * The cover image hash of the scheduled event
     */
    image: z.string().optional().nullable(),
});

/**
 * Guild Scheduled Event Structure Infer
 *
 * The inferred zod object from {@link GuildScheduledEventStructure}
 */
export type GuildScheduledEventStructureInfer = z.infer<typeof GuildScheduledEventStructure>;
