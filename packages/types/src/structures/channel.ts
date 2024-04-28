/**
 * @see {@link https://discord.com/developers/docs/resources/channel#channels-resource}
 */

import type { Integer, ISO8601Timestamp, Snowflake } from "../globals";
import type { ApplicationStructure } from "./application";
import type { EmojiStructure } from "./emoji";
import type { GuildMemberStructure } from "./guild";
import type { InteractionTypes, MessageInteractionStructure, ResolvedDataStructure } from "./interactions";
import type { InviteTargetTypes } from "./invite";
import type { PollCreateRequestStructure } from "./poll";
import type { StickerItemStructure, StickerStructure } from "./sticker";
import type { UserStructure } from "./user";

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#channel-object-channel-structure}
 */
export type ChannelStructure = {
	application_id?: Snowflake;
	applied_tags?: Snowflake[];
	available_tags?: ForumTagStructure[];
	bitrate?: Integer;
	default_auto_archive_duration?: Integer;
	default_forum_layout?: ForumLayoutTypes;
	default_reaction_emoji?: DefaultReactionStructure;
	default_sort_order?: ChannelSortOrderTypes;
	default_thread_rate_limit_per_user?: Integer;
	flags?: number;
	guild_id?: Snowflake;
	icon?: string | null;
	id: Snowflake;
	last_message_id?: Snowflake;
	last_pin_timestamp?: ISO8601Timestamp | null;
	last_pin_timestamp_unix?: number | null;
	managed?: boolean;
	member?: ThreadMemberStructure;
	member_count?: Integer;
	message_count?: Integer;
	name?: string;
	nsfw?: boolean;
	owner_id?: Snowflake;
	parent_id?: Snowflake | null;
	permissions?: string;
	position?: Integer;
	rtc_region?: string | null;
	thread_metadata?: ThreadMetadataStructure;
	topic?: string;
	type: ChannelTypes;
	user_limit?: Integer;
	video_quality_mode?: VideoQualityModes;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#channel-object-channel-types}
 */
export enum ChannelTypes {
	GuildText = 0,
	DM = 1,
	GuildVoice = 2,
	GroupDM = 3,
	GuildCategory = 4,
	GuildAnnouncement = 5,
	AnnouncementThread = 10,
	PublicThread = 11,
	PrivateThread = 12,
	GuildStageVoice = 13,
	GuildDirectory = 14,
	GuildForum = 15,
	GuildMedia = 16,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#channel-object-video-quality-modes}
 */
export enum VideoQualityModes {
	Auto = 1,
	Full = 2,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#channel-object-channel-flags}
 */
export enum ChannelFlags {
	Pinned = 2,
	RequireTag = 16,
	HideMediaDownloadOptions = 32_768,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#channel-object-sort-order-types}
 */
export enum ChannelSortOrderTypes {
	LatestActivity = 0,
	CreationDate = 1,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#channel-object-forum-layout-types}
 */
export enum ForumLayoutTypes {
	NotSet = 0,
	ListView = 1,
	GalleryView = 2,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#message-object-message-structure}
 */
export type MessageStructure = {
	activity?: MessageActivityStructure;
	application?: ApplicationStructure;
	application_id?: Snowflake;
	attachments: AttachmentStructure[];
	author: UserStructure;
	channel_id: Snowflake;
	components?: MessageComponentStructure[];
	content: string;
	edited_timestamp?: ISO8601Timestamp;
	embeds: EmbedStructure[];
	flags?: number;
	id: Snowflake;
	interaction?: MessageInteractionStructure;
	interaction_metadata?: MessageInteractionMetadataStructure;
	mention_channels?: ChannelMentionStructure[];
	mention_everyone: boolean;
	mention_roles: Snowflake[];
	mentions: UserStructure[];
	message_reference?: MessageReferenceStructure;
	nonce?: number | string;
	pinned: boolean;
	poll?: PollCreateRequestStructure;
	position?: number;
	reactions?: ReactionStructure[];
	referenced_message?: MessageStructure;
	resolved?: ResolvedDataStructure;
	role_subscription_data?: RoleSubscriptionDataStructure;
	sticker_items?: StickerItemStructure[];
	stickers?: StickerStructure[];
	thread?: ChannelStructure;
	timestamp: ISO8601Timestamp;
	tts: boolean;
	type: number;
	webhook_id?: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#message-object-message-types}
 */
export enum MessageTypes {
	Default = 0,
	RecipientAdd = 1,
	RecipientRemove = 2,
	Call = 3,
	ChannelNameChange = 4,
	ChannelIconChange = 5,
	ChannelPinnedMessage = 6,
	UserJoin = 7,
	GuildBoost = 8,
	GuildBoostTier1 = 9,
	GuildBoostTier2 = 10,
	GuildBoostTier3 = 11,
	ChannelFollowAdd = 12,
	GuildDiscoveryDisqualified = 14,
	GuildDiscoveryRequalified = 15,
	GuildDiscoveryGracePeriodInitialWarning = 16,
	GuildDiscoveryGracePeriodFinalWarning = 17,
	ThreadCreated = 18,
	Reply = 19,
	ChatInputCommand = 20,
	ThreadStarterMessage = 21,
	GuildInviteReminder = 22,
	ContextMenuCommand = 23,
	AutoModerationAction = 24,
	RoleSubscriptionPurchase = 25,
	InteractionPremiumUpsell = 26,
	StageStart = 27,
	StageEnd = 28,
	StageSpeaker = 29,
	StageTopic = 31,
	GuildApplicationPremiumSubscription = 32,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#message-object-message-activity-structure}
 */
export type MessageActivityStructure = {
	party_id?: string;
	type: MessageActivityTypes;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#message-object-message-activity-types}
 */
export enum MessageActivityTypes {
	Join = 1,
	Spectate = 2,
	Listen = 3,
	JoinRequest = 5,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#message-object-message-flags}
 */
export enum MessageFlags {
	Crossposted = 1,
	IsCrosspost = 2,
	SuppressEmbeds = 4,
	SourceMessageDeleted = 8,
	Urgent = 16,
	HasThread = 32,
	Ephemeral = 64,
	Loading = 128,
	FailedToMentionSomeRolesInThread = 256,
	SuppressNotifications = 4_096,
	IsVoiceMessage = 8_192,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#message-interaction-metadata-object-message-interaction-metadata-structure}
 */
export type MessageInteractionMetadataStructure = {
	authorizing_integration_owners: Record<string, Snowflake>;
	id: Snowflake;
	interacted_message_id?: Snowflake;
	original_response_message_id?: Snowflake;
	triggering_interaction_metadata?: MessageInteractionMetadataStructure;
	type: InteractionTypes;
	user: UserStructure;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#message-reference-object-message-reference-structure}
 */
export type MessageReferenceStructure = {
	channel_id?: Snowflake;
	fail_if_not_exists?: boolean;
	guild_id?: Snowflake;
	message_id?: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#followed-channel-object-followed-channel-structure}
 */
export type FollowedChannelStructure = {
	channel_id: Snowflake;
	webhook_id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#reaction-object-reaction-structure}
 */
export type ReactionStructure = {
	burst_colors: string[];
	count: Integer;
	count_details: ReactionCountDetailsStructure;
	emoji: EmojiStructure;
	me: boolean;
	me_burst: boolean;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#reaction-count-details-object-reaction-count-details-structure}
 */
export type ReactionCountDetailsStructure = {
	burst: Integer;
	normal: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#overwrite-object-overwrite-structure}
 */
export type OverwriteStructure = {
	allow: string;
	deny: string;
	id: Snowflake;
	type: OverwriteTypes;
};

export enum OverwriteTypes {
	Role = 0,
	Member = 1,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#thread-metadata-object-thread-metadata-structure}
 */
export type ThreadMetadataStructure = {
	archive_timestamp: ISO8601Timestamp;
	archived: boolean;
	auto_archive_duration: Integer;
	create_timestamp?: ISO8601Timestamp;
	invitable?: boolean;
	locked: boolean;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#thread-member-object-thread-member-structure}
 */
export type ThreadMemberStructure = {
	flags: Integer;
	id?: Snowflake;
	join_timestamp: ISO8601Timestamp;
	member?: GuildMemberStructure;
	user_id?: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#default-reaction-object-default-reaction-structure}
 */
export type DefaultReactionStructure = {
	emoji_id: Snowflake | null;
	emoji_name: string | null;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#forum-tag-object-forum-tag-structure}
 */
export type ForumTagStructure = {
	emoji_id: Snowflake | null;
	emoji_name: string | null;
	id: Snowflake;
	moderated: boolean;
	name: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-structure}
 */
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

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-types}
 */
export enum EmbedTypes {
	Article = "article",
	GIFV = "gifv",
	Image = "image",
	Link = "link",
	Rich = "rich",
	Video = "video",
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-thumbnail-structure}
 */
export type EmbedThumbnailStructure = {
	height?: Integer;
	proxy_url?: string;
	url: string;
	width?: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-video-structure}
 */
export type EmbedVideoStructure = {
	height?: Integer;
	proxy_url?: string;
	url: string;
	width?: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-image-structure}
 */
export type EmbedImageStructure = {
	height?: Integer;
	proxy_url: string;
	url: string;
	width?: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-provider-structure}
 */
export type EmbedProviderStructure = {
	name?: string;
	url?: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-author-structure}
 */
export type EmbedAuthorStructure = {
	icon_url?: string;
	name: string;
	proxy_icon_url?: string;
	url?: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-footer-structure}
 */
export type EmbedFooterStructure = {
	icon_url?: string;
	proxy_icon_url?: string;
	text: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-field-structure}
 */
export type EmbedFieldStructure = {
	inline?: boolean;
	name: string;
	value: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#attachment-object-attachment-structure}
 */
export type AttachmentStructure = {
	content_type?: string;
	description?: string;
	duration_secs?: number;
	ephemeral?: boolean;
	filename: string;
	flags?: number;
	height?: Integer;
	id: Snowflake;
	proxy_url: string;
	size: Integer;
	url: string;
	waveform?: string;
	width?: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#attachment-object-attachment-flags}
 */
export enum AttachmentFlags {
	IsRemix = 2,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#channel-mention-object-channel-mention-structure}
 */
export type ChannelMentionStructure = {
	guild_id: Snowflake;
	id: Snowflake;
	name: string;
	type: ChannelTypes;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mention-types}
 */
export enum AllowedMentionTypes {
	EveryoneMentions = "everyone",
	RoleMentions = "roles",
	UserMentions = "users",
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mentions-structure}
 */
export type AllowedMentionsStructure = {
	parse: AllowedMentionTypes[];
	replied_user: boolean;
	roles: Snowflake[];
	users: Snowflake[];
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#role-subscription-data-object-role-subscription-data-object-structure}
 */
export type RoleSubscriptionDataStructure = {
	is_renewal: boolean;
	role_subscription_listing_id: Snowflake;
	tier_name: string;
	total_months_subscribed: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#modify-channel-json-params-group-dm}
 */
export type JSONModifyGroupDMChannel = {
	icon: BinaryType;
	name: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#modify-channel-json-params-guild-channel}
 */
export type JSONModifyGuildChannel = {
	available_tags?: ForumTagStructure[];
	bitrate?: Integer;
	default_auto_archive_duration?: Integer;
	default_forum_layout?: ForumLayoutTypes;
	default_reaction_emoji?: DefaultReactionStructure;
	default_sort_order?: ChannelSortOrderTypes;
	default_thread_rate_limit_per_user?: Integer;
	flags?: ChannelFlags;
	name?: string;
	nsfw?: boolean;
	parent_id?: Snowflake;
	permission_overwrites?: OverwriteStructure[];
	position?: Integer;
	rate_limit_per_user?: Integer;
	rtc_region?: string | null;
	topic?: string;
	type?: ChannelTypes;
	user_limit?: Integer;
	video_quality_mode?: VideoQualityModes;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#modify-channel-json-params-thread}
 */
export type JSONModifyThreadChannel = {
	applied_tags?: Snowflake[];
	archived?: boolean;
	auto_archive_duration?: Integer;
	flags?: ChannelFlags;
	invitable?: boolean;
	locked?: boolean;
	name?: string;
	rate_limit_per_user?: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#get-channel-messages-query-string-params}
 */
export type QueryGetChannelMessages = {
	after?: Snowflake;
	around?: Snowflake;
	before?: Snowflake;
	limit?: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#create-message-jsonform-params}
 */
export type JSONCreateMessage = {
	allowed_mentions?: AllowedMentionsStructure;
	attachments?: AttachmentStructure[];
	components?: MessageComponentStructure[];
	content?: string;
	embeds?: EmbedStructure[];
	enforce_nonce?: boolean;
	files?: File[];
	flags?: number;
	message_reference?: MessageReferenceStructure;
	nonce?: number | string;
	payload_json?: string;
	poll?: PollCreateRequestStructure;
	sticker_ids?: Snowflake[];
	tts?: boolean;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#get-reactions-query-string-params}
 */
export type QueryGetReactions = {
	after?: Snowflake;
	limit?: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#edit-message-jsonform-params}
 */
export type JSONEditMessage = {
	allowed_mentions?: AllowedMentionsStructure;
	attachments?: AttachmentStructure[];
	components?: MessageComponentStructure[];
	content?: string;
	embeds?: EmbedStructure[];
	files?: File[];
	flags?: number;
	payload_json?: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#bulk-delete-messages-json-params}
 */
export type JSONBulkDeleteMessages = {
	messages: Snowflake[];
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#edit-channel-permissions-json-params}
 */
export type JSONEditChannelPermissions = {
	allow: string;
	deny: string;
	type: OverwriteTypes;
};

/**
 * @see {@link hhttps://discord.com/developers/docs/resources/channel#create-channel-invite-json-params}
 */
export type JSONCreateChannelInvite = {
	max_age?: Integer;
	max_uses?: Integer;
	target_application_id?: Snowflake;
	target_type?: InviteTargetTypes;
	target_user_id?: Snowflake;
	temporary?: boolean;
	unique?: boolean;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#follow-announcement-channel-json-params}
 */
export type JSONFollowAnnouncementChannel = {
	webhook_channel_id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#group-dm-add-recipient-json-params}
 */
export type JSONGroupDMAddRecipient = {
	access_token: string;
	nick: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#start-thread-from-message-json-params}
 */
export type JSONStartThreadFromMessage = {
	auto_archive_duration?: Integer;
	name: string;
	rate_limit_per_user?: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#start-thread-without-message-json-params}
 */
export type JSONStartThreadWithoutMessage = {
	auto_archive_duration?: Integer;
	invitable?: boolean;
	name: string;
	rate_limit_per_user?: Integer;
	type?: ChannelTypes;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#start-thread-in-forum-or-media-channel-jsonform-params}
 */
export type JSONStartThreadInForumOrMediaChannel = {
	applied_tags?: Snowflake[];
	auto_archive_duration?: Integer;
	files?: File[];
	message: JSONStartThreadInForumOrMediaChannelAndMediaThreadMessage;
	name: string;
	payload_json?: string;
	rate_limit_per_user?: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#start-thread-in-forum-or-media-channel-forum-and-media-thread-message-params-object}
 */
export type JSONStartThreadInForumOrMediaChannelAndMediaThreadMessage = {
	allowed_mentions?: AllowedMentionsStructure;
	attachments?: AttachmentStructure[];
	components?: MessageComponentStructure[];
	content?: string;
	embeds?: EmbedStructure[];
	flags?: number;
	sticker_ids?: Snowflake[];
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#get-thread-member-query-string-params}
 */
export type QueryGetThreadMember = {
	with_member?: boolean;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#list-thread-members-query-string-params}
 */
export type QueryListThreadMembers = {
	after?: Snowflake;
	limit?: Integer;
	with_member?: boolean;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#list-public-archived-threads-query-string-params}
 */
export type QueryListPublicArchivedThreads = {
	before?: ISO8601Timestamp;
	limit?: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#list-public-archived-threads-response-body}
 */
export type ResponseListPublicArchivedThreads = {
	has_more: boolean;
	members: ThreadMemberStructure[];
	threads: ChannelStructure[];
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#list-private-archived-threads-query-string-params}
 */
export type QueryListPrivateArchivedThreads = {
	before?: ISO8601Timestamp;
	limit?: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#list-private-archived-threads-response-body}
 */
export type ResponseListPrivateArchivedThreads = {
	has_more: boolean;
	members: ThreadMemberStructure[];
	threads: ChannelStructure[];
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#list-joined-private-archived-threads-query-string-params}
 */
export type QueryListJoinedPrivateArchivedThreads = {
	before?: Snowflake;
	limit?: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#list-joined-private-archived-threads-response-body}
 */
export type ResponseListJoinedPrivateArchivedThreads = {
	has_more: boolean;
	members: ThreadMemberStructure[];
	threads: ChannelStructure[];
};
