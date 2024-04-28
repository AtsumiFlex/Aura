/**
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-resource}
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-guild-structure}
 * @see {@link https://discord.com/developers/docs/resources/guild-template#guild-template-resource}
 */

import type { Locales } from "@aurajs/core";
import type { Integer, ISO8601Timestamp, Snowflake } from "../globals";
import type { OAuth2Scopes } from "../topic/oauth2";
import type {
	ChannelStructure,
	ChannelTypes,
	DefaultReactionStructure,
	OverwriteStructure,
	ThreadMemberStructure,
} from "./channel";
import type { EmojiStructure } from "./emoji";
import type { RoleStructure } from "./role";
import type { StickerStructure } from "./sticker";
import type { UserStructure } from "./user";

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-guild-structure}
 */
export type GuildStructure = {
	afk_channel_id: Snowflake | null;
	afk_timeout: Integer;
	application_id: Snowflake | null;
	approximate_member_count?: Integer;
	approximate_presence_count?: Integer;
	banner: string | null;
	default_message_notifications: DefaultMessageNotificationLevels;
	description: string | null;
	discovery_splash: string | null;
	emojis: EmojiStructure[];
	explicit_content_filter: ExplicitContentFilterLevels;
	features: string[];
	icon: string | null;
	icon_hash?: string | null;
	id: Snowflake;
	max_members: Integer;
	max_presences?: Integer | null;
	max_stage_video_channel_users?: Integer;
	max_video_channel_users?: Integer;
	mfa_level: MFALevels;
	name: string;
	nsfw_level: GuildNSFWLevels;
	owner?: boolean;
	owner_id: Snowflake;
	permissions?: string;
	preferred_locale: Locales;
	premium_progress_bar_enabled: boolean;
	premium_subscription_count?: Integer;
	premium_tier: PremiumTier;
	public_updates_channel_id: Snowflake | null;
	region?: string | null;
	roles: RoleStructure[];
	rules_channel_id: Snowflake | null;
	safety_alerts_channel_id: Snowflake | null;
	splash: string | null;
	stickers?: StickerStructure[];
	system_channel_flags: SystemChannelFlags;
	system_channel_id: Snowflake | null;
	vanity_url_code: string | null;
	verification_level: VerificationLevels;
	welcome_screen?: WelcomeScreenStructure;
	widget_channel_id?: Snowflake | null;
	widget_enabled?: boolean;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-default-message-notification-level}
 */
export enum DefaultMessageNotificationLevels {
	AllMessages = 0,
	OnlyMentions = 1,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-explicit-content-filter-level}
 */
export enum ExplicitContentFilterLevels {
	Disabled = 0,
	MembersWithoutRoles = 1,
	AllMembers = 2,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-mfa-level}
 */
export enum MFALevels {
	None = 0,
	Elevated = 1,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-verification-level}
 */
export enum VerificationLevels {
	None = 0,
	Low = 1,
	Medium = 2,
	High = 3,
	VeryHigh = 4,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-guild-nsfw-level}
 */
export enum GuildNSFWLevels {
	Default = 0,
	Explicit = 2,
	Safe = 1,
	AgeRestricted = 3,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-premium-tier}
 */
export enum PremiumTier {
	None = 0,
	Tier1 = 1,
	Tier2 = 2,
	Tier3 = 3,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-system-channel-flags}
 */
export enum SystemChannelFlags {
	SuppressJoinNotifications = 1,
	SuppressPremiumSubscriptions = 2,
	SuppressGuildReminderNotifications = 4,
	SuppressJoinNotificationReplies = 8,
	SuppressRoleSubscriptionPurchaseNotifications = 16,
	SuppressRoleSubscriptionPurchaseNotificationReplies = 32,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-guild-features}
 */
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

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-preview-object-guild-preview-structure}
 */
export type GuildPreviewStructure = {
	approximate_member_count: Integer;
	approximate_presence_count: Integer;
	description: string | null;
	discovery_splash: string | null;
	emojis: EmojiStructure[];
	features: string[];
	icon: string | null;
	id: Snowflake;
	name: string;
	splash: string | null;
	stickers: StickerStructure[];
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-widget-settings-object-guild-widget-settings-structure}
 */
export type GuildWidgetSettingsStructure = {
	channel_id: Snowflake | null;
	enabled: boolean;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-widget-object-guild-widget-structure}
 */
export type GuildWidgetStructure = {
	channels: ChannelStructure[];
	id: Snowflake;
	instant_invite?: string;
	members: UserStructure[];
	name: string;
	presence_count: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-structure}
 */
export type GuildMemberStructure = {
	avatar?: string | null;
	communication_disabled_until?: ISO8601Timestamp | null;
	deaf: boolean;
	flags: GuildMemberFlags;
	joined_at: ISO8601Timestamp;
	mute: boolean;
	nick?: string | null;
	pending?: boolean;
	permissions?: string;
	premium_since?: ISO8601Timestamp | null;
	roles: Snowflake[];
	user?: UserStructure;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-flags}
 */
export enum GuildMemberFlags {
	DidRejoin = 1,
	CompletedOnboarding = 2,
	BypassesVerification = 4,
	StartedOnboarding = 8,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#integration-object-integration-structure}
 */
export type IntegrationStructure = {
	account: IntegrationAccountStructure;
	application?: IntegrationApplicationStructure;
	enable_emoticons?: boolean;
	enabled: boolean;
	expire_behavior?: IntegrationExpireBehaviors;
	expire_grace_period?: Integer;
	id: Snowflake;
	name: string;
	revoked?: boolean;
	role_id?: Snowflake;
	scopes?: OAuth2Scopes[];
	subscriber_count?: Integer;
	synced_at?: ISO8601Timestamp;
	syncing?: boolean;
	type: string;
	user?: UserStructure;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#integration-object-integration-expire-behaviors}
 */
export enum IntegrationExpireBehaviors {
	RemoveRole = 0,
	Kick = 1,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#integration-account-object-integration-account-structure}
 */
export type IntegrationAccountStructure = {
	id: Snowflake;
	name: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#integration-application-object-integration-application-structure}
 */
export type IntegrationApplicationStructure = {
	bot?: UserStructure;
	description: string;
	icon: string | null;
	id: Snowflake;
	name: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#ban-object-ban-structure}
 */
export type BanStructure = {
	reason: string | null;
	user: UserStructure;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-structure}
 */
export type WelcomeScreenStructure = {
	description: string | null;
	welcome_channels: WelcomeScreenChannelStructure[];
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-channel-structure}
 */
export type WelcomeScreenChannelStructure = {
	channel_id: Snowflake;
	description: string;
	emoji_id?: Snowflake;
	emoji_name: string | null;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-onboarding-object-guild-onboarding-structure}
 */
export type GuildOnboardingStructure = {
	default_channel_ids: Snowflake[];
	enabled: boolean;
	guild_id: Snowflake;
	mode: GuildOnboardingModes;
	prompts: GuildOnboardingPromptStructure[];
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-onboarding-object-onboarding-prompt-structure}
 */
export type GuildOnboardingPromptStructure = {
	id: Snowflake;
	in_onboarding: boolean;
	options: GuildOnboardingPromptOptionStructure[];
	required: boolean;
	single_select: boolean;
	title: string;
	type: GuildOnboardingPromptTypes;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-onboarding-object-prompt-option-structure}
 */
export type GuildOnboardingPromptOptionStructure = {
	channel_ids: Snowflake[];
	description?: string;
	emoji?: EmojiStructure;
	emoji_animated?: boolean;
	emoji_id?: Snowflake;
	emoji_name?: string;
	id: Snowflake;
	role_ids: Snowflake[];
	title: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-onboarding-object-onboarding-mode}
 */
export enum GuildOnboardingModes {
	OnboardingDefault = 0,
	OnboardingAdvanced = 1,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-onboarding-object-prompt-types}
 */
export enum GuildOnboardingPromptTypes {
	MultipleChoice = 1,
	Dropdown = 2,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#create-guild-json-params}
 */
export type JSONCreateGuild = {
	afk_channel_id?: Snowflake;
	afk_timeout?: Integer;
	channels?: ChannelStructure[];
	default_message_notifications?: DefaultMessageNotificationLevels;
	explicit_content_filter?: ExplicitContentFilterLevels;
	icon?: string;
	name: string;
	region?: string;
	roles?: RoleStructure[];
	system_channel_flags?: SystemChannelFlags;
	system_channel_id?: Snowflake;
	verification_level?: VerificationLevels;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-query-string-params}
 */
export type QueryGetGuild = {
	with_counts?: boolean;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-json-params}
 */
export type JSONModifyGuild = {
	afk_channel_id: Snowflake | null;
	afk_timeout: Integer;
	banner: string | null;
	default_message_notifications: DefaultMessageNotificationLevels | null;
	description: string | null;
	discovery_splash: string | null;
	explicit_content_filter: ExplicitContentFilterLevels | null;
	features: GuildFeatures[];
	icon: string | null;
	name?: string;
	owner_id: Snowflake;
	preferred_locale: Locales | null;
	premium_progress_bar_enabled: boolean;
	public_updates_channel_id?: Snowflake;
	region: string | null;
	rules_channel_id?: Snowflake;
	safety_alerts_channel_id: Snowflake | null;
	splash: string | null;
	system_channel_flags: SystemChannelFlags;
	system_channel_id: Snowflake | null;
	verification_level: VerificationLevels | null;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#create-guild-channel-json-params}
 */
export type JSONCreateGuildChannel = {
	bitrate?: Integer;
	default_auto_archive_duration?: Integer;
	default_forum_layout?: Integer;
	default_reaction_emoji?: DefaultReactionStructure;
	default_sort_order?: Integer;
	default_thread_rate_limit_per_user?: Integer;
	name: string;
	nsfw?: boolean;
	parent_id?: Snowflake;
	permission_overwrites?: OverwriteStructure[];
	position?: Integer;
	rate_limit_per_user?: Integer;
	rtc_region?: string;
	topic?: string;
	type: ChannelTypes;
	user_limit?: Integer;
	video_quality_mode?: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-channel-positions-json-params}
 */
export type JSONModifyGuildChannelPositions = {
	id: Snowflake;
	lock_permissions?: boolean | null;
	parent_id?: Snowflake | null;
	position?: Integer | null;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#list-active-guild-threads-response-body}
 */
export type ListActiveGuildThreadsResponse = {
	members: ThreadMemberStructure[];
	thread_metadata: ChannelStructure[];
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#list-guild-members-query-string-params}
 */
export type QueryListGuildMembers = {
	after: Snowflake;
	limit: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#search-guild-members-query-string-params}
 */
export type QuerySearchGuildMembers = {
	limit: Integer;
	query: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#add-guild-member-json-params}
 */
export type JSONAddGuildMember = {
	access_token: string;
	deaf?: boolean;
	mute?: boolean;
	nick?: string;
	roles?: Snowflake[];
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-member-json-params}
 */
export type JSONModifyGuildMember = {
	channel_id?: Snowflake | null;
	communication_disabled_until?: ISO8601Timestamp | null;
	deaf?: boolean;
	flags?: GuildMemberFlags;
	mute?: boolean;
	nick?: string | null;
	roles?: Snowflake[];
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-current-member-json-params}
 */
export type JSONModifyCurrentMember = {
	nick?: string | null;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-current-user-nick-json-params}
 */
export type JSONModifyCurrentUserNick = {
	nick?: string | null;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-bans-query-string-params}
 */
export type QueryGetGuildBans = {
	after?: Snowflake;
	before?: Snowflake;
	limit?: number;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#create-guild-ban-json-params}
 */
export type JSONCreateGuildBan = {
	delete_message_days?: Integer;
	delete_message_seconds?: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#bulk-guild-ban-json-params}
 */
export type JSONBulkGuildBan = {
	delete_message_seconds?: Integer;
	user_ids: Snowflake[];
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#bulk-guild-ban-bulk-ban-response}
 */
export type BulkGuildBanResponse = {
	banned_users: Snowflake[];
	failed_users: Snowflake[];
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#create-guild-role-json-params}
 */
export type JSONCreateGuildRole = {
	color?: Integer;
	hoist?: boolean;
	icon?: string;
	mentionable?: boolean;
	name?: string;
	permissions?: string;
	unicode_emoji?: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-role-positions-json-params}
 */
export type JSONModifyGuildRolePositions = {
	id: Snowflake;
	position?: Integer | null;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-role-json-params}
 */
export type JSONModifyGuildRole = {
	color?: Integer;
	hoist?: boolean;
	icon?: string;
	mentionable?: boolean;
	name?: string;
	permissions?: string;
	unicode_emoji?: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-mfa-level-json-params}
 */
export type JSONModifyGuildMFALevel = {
	level: MFALevels;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-prune-count-query-string-params}
 */
export type QueryGetGuildPruneCount = {
	days: Integer;
	include_roles?: Snowflake[];
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#begin-guild-prune-json-params}
 */
export type JSONBeginGuildPrune = {
	compute_prune_count?: boolean;
	days: Integer;
	include_roles?: Snowflake[];
	reason?: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-widget-image-query-string-params}
 */
export type QueryGetGuildWidgetImage = {
	style: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-welcome-screen-json-params}
 */
export type JSONModifyGuildWelcomeScreen = {
	description: string;
	enabled: boolean;
	welcome_channels: WelcomeScreenChannelStructure[];
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-onboarding-json-params}
 */
export type JSONModifyGuildOnboarding = {
	default_channel_ids: Snowflake[];
	enabled: boolean;
	mode: GuildOnboardingModes;
	prompts: GuildOnboardingPromptStructure[];
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-current-user-voice-state-json-params}
 */
export type JSONModifyCurrentUserVoiceState = {
	channel_id: Snowflake;
	request_to_speak_timestamp?: ISO8601Timestamp | null;
	suppress?: boolean;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-user-voice-state-json-params}
 */
export type JSONModifyUserVoiceState = {
	channel_id: Snowflake;
	suppress?: boolean;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-structure}
 */
export type GuildScheduledEventStructure = {
	channel_id?: Snowflake;
	creator?: UserStructure;
	creator_id?: Snowflake;
	description?: string | null;
	entity_id: Snowflake;
	entity_metadata?: GuildScheduledEventEntityMetadata | null;
	entity_type: GuildScheduledEventEntityTypes;
	guild_id: Snowflake;
	id: Snowflake;
	image?: string | null;
	name: string;
	privacy_level: GuildScheduledEventPrivacyLevel;
	scheduled_end_time?: ISO8601Timestamp | null;
	scheduled_start_time: ISO8601Timestamp;
	status: GuildScheduledEventStatus;
	user_count?: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-privacy-level}
 */
export enum GuildScheduledEventPrivacyLevel {
	GuildOnly = 2,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-entity-types}
 */
export enum GuildScheduledEventEntityTypes {
	StageInstance = 1,
	Voice = 2,
	External = 3,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-status}
 */
export enum GuildScheduledEventStatus {
	Scheduled = 1,
	Active = 2,
	Completed = 3,
	Cancelled = 4,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-entity-metadata}
 */
export type GuildScheduledEventEntityMetadata = {
	location?: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-user-object-guild-scheduled-event-user-structure}
 */
export type GuildScheduledEventUserStructure = {
	guild_scheduled_event_id: Snowflake;
	member?: GuildMemberStructure;
	user: UserStructure;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#modify-guild-scheduled-event-json-params}
 */
export type JSONModifyGuildScheduledEvent = {
	channel_id?: Snowflake;
	description?: string;
	entity_metadata?: GuildScheduledEventEntityMetadata;
	entity_type?: GuildScheduledEventEntityTypes;
	image?: string;
	name?: string;
	privacy_level?: GuildScheduledEventPrivacyLevel;
	scheduled_end_time?: ISO8601Timestamp;
	scheduled_start_time?: ISO8601Timestamp;
	status?: GuildScheduledEventStatus;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#get-guild-scheduled-event-users-query-string-params}
 */
export type QueryGetGuildScheduledEventUsers = {
	after?: Snowflake;
	before?: Snowflake;
	limit?: Integer;
	with_member?: boolean;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-template#guild-template-object-guild-template-structure}
 */
export type GuildTemplateStructure = {
	code: string;
	created_at: ISO8601Timestamp;
	creator: UserStructure;
	creator_id: Snowflake;
	description?: string | null;
	is_dirty?: boolean | null;
	name: string;
	serialized_source_guild: GuildStructure;
	source_guild_id: Snowflake;
	updated_at: ISO8601Timestamp;
	usage_count: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-template#create-guild-from-guild-template-json-params}
 */
export type JSONCreateGuildFromGuildTemplate = {
	icon?: string;
	name: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-template#create-guild-template-json-params}
 */
export type JSONCreateGuildTemplate = {
	description?: string | null;
	name: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-template#modify-guild-template-json-params}
 */
export type JSONModifyGuildTemplate = {
	description?: string | null;
	name?: string;
};
