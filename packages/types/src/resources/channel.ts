// https://discord.com/developers/docs/resources/channel#channels-resource
import type { RoleStructure } from "@aurajs/permissions";
import type { Float, Integer, Snowflake } from "../global";
import type { ApplicationIntegrationTypes } from "./application";
import type { EmojiStructure } from "./emoji";
import type { GuildMemberStructure } from "./guild";
import type { PollCreateRequestObjectStructure } from "./poll";
import type { StickerItemStructure, StickerStructure } from "./sticker";
import type { UserStructure } from "./user";

// https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
export type ChannelStructure = {
	application_id?: Snowflake;
	available_tags?: ForumTagStructure[];
	bitrate?: Integer;
	default_auto_archive_duration?: Integer;
	default_forum_layout?: ForumLayoutTypes;
	default_reaction_emoji?: DefaultReactionStructure;
	default_sort_order?: ChannelSortOrderTypes;
	default_thread_rate_limit_per_user?: Integer;
	flags?: ChannelFlags;
	guild_id?: Snowflake;
	icon?: string | null;
	id: Snowflake;
	last_message_id?: Snowflake | null;
	last_pin_timestamp?: string | null;
	managed?: boolean;
	member?: ThreadMemberStructure;
	member_count?: Integer;
	message_count?: Integer;
	name?: string | null;
	nsfw?: boolean;
	owner_id?: Snowflake;
	parent_id?: Snowflake | null;
	permission_overwrites: OverwriteStructure[];
	permissions?: string;
	position?: Integer;
	rate_limit_per_user?: Integer;
	recipients?: UserStructure[];
	rtc_region?: string | null;
	thread_metadata?: ThreadMetadataStructure;
	topic?: string | null;
	total_message_sent?: Integer;
	type: ChannelTypes;
	user_limit?: Integer;
	video_quality_mode?: VideoQualityModes;
};

// https://discord.com/developers/docs/resources/channel#channel-object-channel-types
export enum ChannelTypes {
	GUILD_TEXT = 0,
	DM = 1,
	GUILD_VOICE = 2,
	GROUP_DM = 3,
	GUILD_CATEGORY = 4,
	GUILD_ANNOUNCEMENT = 5,
	ANNOUNCEMENT_THREAD = 10,
	PUBLIC_THREAD = 11,
	PRIVATE_THREAD = 12,
	GUILD_STAGE_VOICE = 13,
	GUILD_DIRECTORY = 14,
	GUILD_FORUM = 15,
	GUILD_MEDIA = 16,
}

// https://discord.com/developers/docs/resources/channel#channel-object-video-quality-modes
export enum VideoQualityModes {
	AUTO = 1,
	FULL = 2,
}

// https://discord.com/developers/docs/resources/channel#channel-object-channel-flags
export enum ChannelFlags {
	PINNED = 2,
	REQUIRE_TAG = 16,
	HIDE_MEDIA_DOWNLOAD_OPTIONS = 32_768,
}

// https://discord.com/developers/docs/resources/channel#channel-object-sort-order-types
export enum ChannelSortOrderTypes {
	LATEST_ACTIVITY = 0,
	CREATION_DATE = 1,
}

// https://discord.com/developers/docs/resources/channel#channel-object-forum-layout-types
export enum ForumLayoutTypes {
	NOT_SET = 0,
	LIST_VIEW = 1,
	GALLERY_VIEW = 2,
}

// https://discord.com/developers/docs/resources/channel#message-object-message-structure
export type MessageStructure = {
	activity?: MessageActivityStructure;
	application?: ApplicationIntegrationTypes;
	application_id?: Snowflake;
	attachments: AttachmentStructure[];
	author: UserStructure;
	channel_id: Snowflake;
	// TODO: Channel Object
	components: any[];
	// TODO: Message Components
	content: string;
	edited_timestamp: string | null;
	embeds: EmbedStructure[];
	flags?: MessageFlags;
	id: Snowflake;
	interaction?: any;
	// TODO: Message Interaction Object
	interaction_metadata?: MessageInteractionMetadataStructure;
	mention_channels?: ChannelMentionStructure[];
	mention_everyone: boolean;
	mention_roles: RoleStructure["id"][];
	mentions: UserStructure[];
	message_reference?: MessageReferenceStructure;
	nonce?: Integer | string;
	pinned: boolean;
	poll?: PollCreateRequestObjectStructure;
	position?: Integer;
	reactions?: ReactionStructure[];
	referenced_message?: MessageStructure;
	resolved?: any;
	// TODO: Interaction resolved data
	role_subscription_data?: RoleSubscriptionDataStructure;
	sticker_items?: StickerItemStructure[];
	stickers?: StickerStructure[];
	thread?: any;
	timestamp: string;
	tts: boolean;
	type: MessageTypes;
	webhook_id?: Snowflake;
};

// https://discord.com/developers/docs/resources/channel#message-object-message-types
export enum MessageTypes {
	DEFAULT = 0,
	RECIPIENT_ADD = 1,
	RECIPIENT_REMOVE = 2,
	CALL = 3,
	CHANNEL_NAME_CHANGE = 4,
	CHANNEL_ICON_CHANGE = 5,
	CHANNEL_PINNED_MESSAGE = 6,
	USER_JOIN = 7,
	GUILD_BOOST = 8,
	GUILD_BOOST_TIER_1 = 9,
	GUILD_BOOST_TIER_2 = 10,
	GUILD_BOOST_TIER_3 = 11,
	CHANNEL_FOLLOW_ADD = 12,
	GUILD_DISCOVERY_DISQUALIFIED = 14,
	GUILD_DISCOVERY_REQUALIFIED = 15,
	GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING = 16,
	GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING = 17,
	THREAD_CREATED = 18,
	REPLY = 19,
	CHAT_INPUT_COMMAND = 20,
	THREAD_STARTER_MESSAGE = 21,
	GUILD_INVITE_REMINDER = 22,
	CONTEXT_MENU_COMMAND = 23,
	AUTO_MODERATION_ACTION = 24,
	ROLE_SUBSCRIPTION_PURCHASE = 25,
	INTERACTION_PREMIUM_UPSELL = 26,
	STAGE_START = 27,
	STAGE_END = 28,
	STAGE_SPEAKER = 29,
	STAGE_TOPIC = 31,
	GUILD_APPLICATION_PREMIUM_SUBSCRIPTION = 32,
}

// https://discord.com/developers/docs/resources/channel#message-object-message-activity-structure
export type MessageActivityStructure = {
	party_id?: any;
	// TODO: Rich Presence Party ID
	type: MessageActivityTypes;
};

// https://discord.com/developers/docs/resources/channel#message-object-message-activity-types
export enum MessageActivityTypes {
	JOIN = 1,
	SPECTATE = 2,
	LISTEN = 3,
	JOIN_REQUEST = 5,
}

// https://discord.com/developers/docs/resources/channel#message-object-message-flags
export enum MessageFlags {
	CROSSPOSTED = 1,
	IS_CROSSPOST = 2,
	SUPPRESS_EMBEDS = 4,
	SOURCE_MESSAGE_DELETED = 8,
	URGENT = 16,
	HAS_THREAD = 32,
	EPHEMERAL = 64,
	LOADING = 128,
	FAILED_TO_MENTION_SOME_ROLES_IN_THREAD = 256,
	SUPPRESS_NOTIFICATIONS = 4_096,
	IS_VOICE_MESSAGE = 8_192,
}

// https://discord.com/developers/docs/resources/channel#message-interaction-metadata-object-message-interaction-metadata-structure
export type MessageInteractionMetadataStructure = {
	authorizing_integration_owners: Record<ApplicationIntegrationTypes, string>;
	id: Snowflake;
	interacted_message_id?: Snowflake;
	original_response_message_id?: Snowflake;
	triggering_interaction_metadata?: MessageInteractionMetadataStructure;
	type: any;
	// TODO: Interaction Type
	user_id: Snowflake;
};

// https://discord.com/developers/docs/resources/channel#message-reference-object-message-reference-structure
export type MessageReferenceStructure = {
	channel_id?: Snowflake;
	fail_if_not_exists?: boolean;
	guild_id?: Snowflake;
	message_id?: Snowflake;
};

// https://discord.com/developers/docs/resources/channel#followed-channel-object-followed-channel-structure
export type FollowedChannelStructure = {
	channel_id: Snowflake;
	webhook_id: Snowflake;
};

// https://discord.com/developers/docs/resources/channel#reaction-object-reaction-structure
export type ReactionStructure = {
	burst_colors: string[];
	count: Integer;
	count_details: ReactionCountDetailsStructure;
	emoji: EmojiStructure;
	me: boolean;
	me_burst: boolean;
};

// https://discord.com/developers/docs/resources/channel#reaction-count-details-object-reaction-count-details-structure
export type ReactionCountDetailsStructure = {
	burst: Integer;
	normal: Integer;
};

// https://discord.com/developers/docs/resources/channel#overwrite-object-overwrite-structure
export enum OverwriteTypes {
	Role = 0,
	Member = 1,
}

export type OverwriteStructure = {
	allow: string;
	deny: string;
	id: Snowflake;
	type: OverwriteTypes;
};

// https://discord.com/developers/docs/resources/channel#thread-metadata-object-thread-metadata-structure
export type ThreadMetadataStructure = {
	archive_timestamp: string;
	archived: boolean;
	auto_archive_duration: Integer;
	create_timestamp?: string | null;
	invitable?: boolean;
	locked: boolean;
};

// https://discord.com/developers/docs/resources/channel#thread-member-object-thread-member-structure
export type ThreadMemberStructure = {
	flags: Integer;
	id?: Snowflake;
	join_timestamp: string;
	member: GuildMemberStructure;
	user_id?: Snowflake;
};

// https://discord.com/developers/docs/resources/channel#default-reaction-object-default-reaction-structure
export type DefaultReactionStructure = {
	emoji_id: Snowflake | null;
	emoji_name: string | null;
};

// https://discord.com/developers/docs/resources/channel#forum-tag-object-forum-tag-structure
export type ForumTagStructure = {
	emoji_id: Snowflake | null;
	emoji_name: string | null;
	id: Snowflake;
	moderated: boolean;
	name: string;
};

// https://discord.com/developers/docs/resources/channel#embed-object-embed-structure
export type EmbedStructure = {
	author?: EmbedAuthorStructure;
	color?: Integer;
	description?: string;
	fields?: EmbedFieldStructure[];
	footer?: EmbedFooterStructure;
	image?: EmbedImageStructure;
	provider?: EmbedProviderStructure;
	thumbnail?: EmbedThumbnailStructure;
	timestamp?: string;
	title?: string;
	type?: EmbedTypes;
	url?: string;
	video?: EmbedVideoStructure;
};

// https://discord.com/developers/docs/resources/channel#embed-object-embed-types
export enum EmbedTypes {
	Article = "article",
	Gifv = "gifv",
	Image = "image",
	Link = "link",
	Rich = "rich",
	Video = "video",
}

// https://discord.com/developers/docs/resources/channel#embed-object-embed-thumbnail-structure
export type EmbedThumbnailStructure = {
	height?: Integer;
	proxy_url?: string;
	url: string;
	width?: Integer;
};

// https://discord.com/developers/docs/resources/channel#embed-object-embed-video-structure
export type EmbedVideoStructure = {
	height?: Integer;
	proxy_url?: string;
	url?: string;
	width?: Integer;
};

// https://discord.com/developers/docs/resources/channel#embed-object-embed-image-structure
export type EmbedImageStructure = {
	height?: Integer;
	proxy_url?: string;
	url: string;
	width?: Integer;
};

// https://discord.com/developers/docs/resources/channel#embed-object-embed-provider-structure
export type EmbedProviderStructure = {
	name: string;
	url?: string;
};

// https://discord.com/developers/docs/resources/channel#embed-object-embed-author-structure
export type EmbedAuthorStructure = {
	icon_url?: string;
	name: string;
	proxy_icon_url?: string;
	url?: string;
};

// https://discord.com/developers/docs/resources/channel#embed-object-embed-footer-structure
export type EmbedFooterStructure = {
	icon_url?: string;
	proxy_icon_url?: string;
	text: string;
};

// https://discord.com/developers/docs/resources/channel#embed-object-embed-field-structure
export type EmbedFieldStructure = {
	inline?: boolean;
	name: string;
	value: string;
};

// https://discord.com/developers/docs/resources/channel#attachment-object-attachment-structure
export type AttachmentStructure = {
	content_type?: string;
	description?: string;
	duration_secs: Float;
	ephemeral?: boolean;
	filename: string;
	flags?: AttachmentFlags;
	height?: Integer | null;
	id: Snowflake;
	proxy_url: string;
	size: Integer;
	url: string;
	waveform?: string;
	width?: Integer | null;
};

// https://discord.com/developers/docs/resources/channel#attachment-object-attachment-flags
export enum AttachmentFlags {
	IS_REMIX = 4,
}

// https://discord.com/developers/docs/resources/channel#channel-mention-object-channel-mention-structure
export type ChannelMentionStructure = {
	guild_id: Snowflake;
	id: Snowflake;
	name: string;
	type: number;
	// TODO: Channel Type
};

// https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mention-types
export enum AllowedMentionTypes {
	EveryoneMentions = "everyone",
	RoleMentions = "roles",
	UserMentions = "users",
}

// https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mentions-structure
export type AllowedMentionsStructure = {
	parse: AllowedMentionTypes[];
	replied_user: boolean;
	roles: Snowflake[];
	users: Snowflake[];
};

// https://discord.com/developers/docs/resources/channel#role-subscription-data-object-role-subscription-data-object-structure
export type RoleSubscriptionDataStructure = {
	is_renewal: boolean;
	role_subscriptions_listing_id: Snowflake;
	tier_name: string;
	total_months_subscribed: Integer;
};
