import { z } from "zod";
import type { SnowflakeInfer } from "../globals";
import { Integer, ISO8601, Snowflake } from "../globals";
import type { ApplicationInstallationType } from "./application";
import { ApplicationInstallationTypeEnum, ApplicationStructure } from "./application";
import { EmojiStructure } from "./emoji";
import { GuildMemberStructure } from "./guild";
import type { InteractionTypes } from "./interactions";
import {
	InteractionTypesEnum,
	MessageComponentStructure,
	MessageInteractionStructure,
	ResolvedDataStructure,
} from "./interactions";
import { PollCreateRequestStructure } from "./poll";
import { StickerItemStructure, StickerStructure } from "./sticker";
import type { UserInfer } from "./user";
import { UserStructure } from "./user";

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

export const ChannelTypesEnum = z.nativeEnum(ChannelTypes);

export const RoleSubscriptionDataObjectStructure = z.object({
	role_subscription_listing_id: Snowflake,
	tier_name: z.string(),
	total_months_subscribed: Integer,
	is_renewal: z.boolean(),
});
export type RoleSubscriptionDataObjectInfer = z.infer<typeof RoleSubscriptionDataObjectStructure>;

export const AllowedMentionTypes = z.enum(["roles", "users", "everyone"]);

export const AllowedMentionsStructure = z.object({
	parse: z.array(AllowedMentionTypes),
	roles: z.array(Snowflake).max(100),
	users: z.array(Snowflake).max(100),
	replied_user: z.boolean(),
});
export type AllowedMentionsInfer = z.infer<typeof AllowedMentionsStructure>;

export const ChannelMentionStructure = z.object({
	id: Snowflake,
	guild_id: Snowflake,
	type: ChannelTypesEnum,
	name: z.string(),
});
export type ChannelMentionInfer = z.infer<typeof ChannelMentionStructure>;

export enum AttachmentFlags {
	IsRemix = 4,
}

export const AttachmentFlagsEnum = z.nativeEnum(AttachmentFlags);

export const AttachmentStructure = z.object({
	id: Snowflake,
	filename: z.string(),
	description: z.string().optional(),
	content_type: z.string().optional(),
	size: Integer,
	url: z.string(),
	proxy_url: z.string(),
	height: Integer.optional(),
	width: Integer.optional(),
	ephemeral: z.boolean().optional(),
	duration_secs: z.number().optional(),
	waveform: z.string().optional(),
	flags: AttachmentFlagsEnum.optional(),
});
export type AttachmentInfer = z.infer<typeof AttachmentStructure>;

export const EmbedFieldStructure = z.object({
	name: z.string(),
	value: z.string(),
	inline: z.boolean().optional(),
});
export type EmbedFieldInfer = z.infer<typeof EmbedFieldStructure>;

export const EmbedFooterStructure = z.object({
	text: z.string(),
	icon_url: z.string().optional(),
	proxy_icon_url: z.string().optional(),
});
export type EmbedFooterInfer = z.infer<typeof EmbedFooterStructure>;

export const EmbedAuthorStructure = z.object({
	name: z.string(),
	url: z.string().optional(),
	icon_url: z.string().optional(),
	proxy_icon_url: z.string().optional(),
});
export type EmbedAuthorInfer = z.infer<typeof EmbedAuthorStructure>;

export const EmbedProviderStructure = z.object({
	name: z.string().optional(),
	url: z.string().optional(),
});
export type EmbedProviderInfer = z.infer<typeof EmbedProviderStructure>;

export const EmbedImageStructure = z.object({
	url: z.string(),
	proxy_url: z.string().optional(),
	height: Integer.optional(),
	width: Integer.optional(),
});
export type EmbedImageInfer = z.infer<typeof EmbedImageStructure>;

export const EmbedVideoStructure = z.object({
	url: z.string().optional(),
	proxy_url: z.string().optional(),
	height: Integer.optional(),
	width: Integer.optional(),
});
export type EmbedVideoInfer = z.infer<typeof EmbedVideoStructure>;

export const EmbedThumbnailStructure = z.object({
	url: z.string(),
	proxy_url: z.string().optional(),
	height: Integer.optional(),
	width: Integer.optional(),
});
export type EmbedThumbnailInfer = z.infer<typeof EmbedThumbnailStructure>;

export enum EmbedTypes {
	Article = "article",
	Gifv = "gifv",
	Image = "image",
	Link = "link",
	Rich = "rich",
	Video = "video",
}

export const EmbedTypesEnum = z.nativeEnum(EmbedTypes);

export const EmbedStructure = z.object({
	title: z.string().optional(),
	type: EmbedTypesEnum.optional(),
	description: z.string().optional(),
	url: z.string().optional(),
	timestamp: ISO8601.optional(),
	color: Integer.optional(),
	footer: EmbedFooterStructure.optional(),
	image: EmbedImageStructure.optional(),
	thumbnail: EmbedThumbnailStructure.optional(),
	video: EmbedVideoStructure.optional(),
	provider: EmbedProviderStructure.optional(),
	author: EmbedAuthorStructure.optional(),
	fields: z.array(EmbedFieldStructure).max(25),
});
export type EmbedInfer = z.infer<typeof EmbedStructure>;

export const ForumTagStructure = z.object({
	id: Snowflake,
	name: z.string(),
	moderated: z.boolean(),
	emoji_id: Snowflake.optional(),
	emoji_name: z.string().optional(),
});
export type ForumTagInfer = z.infer<typeof ForumTagStructure>;

export const DefaultReactionStructure = z.object({
	emoji_id: Snowflake.optional(),
	emoji_name: z.string().optional(),
});
export type DefaultReactionInfer = z.infer<typeof DefaultReactionStructure>;

export const ThreadMemberStructure = z.object({
	id: Snowflake.optional(),
	user_id: Snowflake.optional(),
	join_timestamp: ISO8601.optional(),
	flags: Integer.optional(),
	member: GuildMemberStructure.optional(),
});
export type ThreadMemberInfer = z.infer<typeof ThreadMemberStructure>;

export const ThreadMetadataStructure = z.object({
	archived: z.boolean(),
	auto_archive_duration: Integer,
	archive_timestamp: ISO8601,
	locked: z.boolean(),
	invitable: z.boolean().optional(),
	create_timestamp: ISO8601.optional().nullable(),
});
export type ThreadMetadataInfer = z.infer<typeof ThreadMetadataStructure>;

export enum OverwriteTypes {
	Role = 0,
	Member = 1,
}

export const OverwriteTypesEnum = z.nativeEnum(OverwriteTypes);

export const OverwriteStructure = z.object({
	id: Snowflake,
	type: OverwriteTypesEnum,
	allow: z.string(),
	deny: z.string(),
});
export type OverwriteInfer = z.infer<typeof OverwriteStructure>;

export const ReactionCountDetailsStructure = z.object({
	burst: Integer,
	normal: Integer,
});
export type ReactionCountDetailsInfer = z.infer<typeof ReactionCountDetailsStructure>;

export const ReactionStructure = z.object({
	count: Integer,
	count_details: ReactionCountDetailsStructure,
	me: z.boolean(),
	me_burst: z.boolean(),
	emoji: EmojiStructure.partial(),
	burst_colors: z.array(z.string()),
});
export type ReactionInfer = z.infer<typeof ReactionStructure>;

export const FollowedChannelStructure = z.object({
	channel_id: Snowflake,
	webhook_id: Snowflake,
});
export type FollowedChannelInfer = z.infer<typeof FollowedChannelStructure>;

export const MessageReferenceStructure = z.object({
	message_id: Snowflake.optional(),
	channel_id: Snowflake.optional(),
	guild_id: Snowflake.optional(),
	fail_if_not_exists: z.boolean().optional(),
});
export type MessageReferenceInfer = z.infer<typeof MessageReferenceStructure>;

export type MessageInteractionMetadataInfer = {
	authorizing_integration_owners: Record<string, ApplicationInstallationType>;
	id: SnowflakeInfer;
	interacted_message_id?: SnowflakeInfer;
	original_response_message_id?: SnowflakeInfer;
	triggering_interaction_metadata?: MessageInteractionMetadataInfer;
	type: InteractionTypes;
	user: UserInfer;
};

export const MessageInteractionMetadataStructure: z.ZodType<MessageInteractionMetadataInfer> = z.object({
	id: Snowflake,
	type: InteractionTypesEnum,
	user: UserStructure,
	authorizing_integration_owners: z.record(ApplicationInstallationTypeEnum),
	original_response_message_id: Snowflake.optional(),
	interacted_message_id: Snowflake.optional(),
	triggering_interaction_metadata: z.lazy(() => MessageInteractionMetadataStructure).optional(),
});

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

export const MessageFlagsEnum = z.nativeEnum(MessageFlags);

export enum MessageActivityTypes {
	Join = 1,
	Spectate = 2,
	Listen = 3,
	JoinRequest = 5,
}

export const MessageActivityTypesEnum = z.nativeEnum(MessageActivityTypes);

export const MessageActivityStructure = z.object({
	type: MessageActivityTypesEnum,
	party_id: z.string().optional(),
});

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

export const MessageTypesEnum = z.nativeEnum(MessageTypes);

export enum ForumLayoutTypes {
	NotSet = 0,
	ListView = 1,
	GalleryView = 2,
}

export const ForumLayoutTypesEnum = z.nativeEnum(ForumLayoutTypes);

export enum ForumSortOrderTypes {
	LatestActivity = 0,
	CreationDate = 1,
}

export const ForumSortOrderTypesEnum = z.nativeEnum(ForumSortOrderTypes);

export enum ChannelFlags {
	Pinned = 2,
	RequireTag = 16,
	HideMediaDownloadOptions = 32_768,
}

export const ChannelFlagsEnum = z.nativeEnum(ChannelFlags);

export enum VideoQualityModes {
	Auto = 1,
	Full = 2,
}

export const VideoQualityModesEnum = z.nativeEnum(VideoQualityModes);
export const ChannelStructure = z.object({
	id: Snowflake,
	type: ChannelTypesEnum,
	guild_id: Snowflake.optional(),
	position: Integer.optional(),
	permission_overwrites: z.array(OverwriteStructure),
	name: z.string().optional(),
	topic: z.string().optional(),
	nsfw: z.boolean(),
	last_message_id: Snowflake.optional(),
	bitrate: Integer.optional(),
	user_limit: Integer.optional(),
	rate_limit_per_user: Integer.optional(),
	recipients: z.array(UserStructure),
	icon: z.string().optional(),
	owner_id: Snowflake.optional(),
	application_id: Snowflake.optional(),
	managed: z.boolean(),
	parent_id: Snowflake.optional(),
	last_pin_timestamp: ISO8601.optional(),
	rtc_region: z.string().optional(),
	video_quality_mode: VideoQualityModesEnum.optional(),
	message_count: Integer.optional(),
	member_count: Integer.optional(),
	thread_metadata: ThreadMetadataStructure.optional(),
	member: ThreadMemberStructure.optional(),
	default_auto_archive_duration: Integer.optional(),
	permissions: z.string().optional(),
	flags: Integer.optional(),
	total_message_sent: Integer.optional(),
	available_tags: z.array(ForumTagStructure),
	applied_tags: z.array(Snowflake),
	default_reaction_emoji: DefaultReactionStructure.optional(),
	default_thread_rate_limit_per_user: Integer.optional(),
	default_sort_order: ForumSortOrderTypesEnum.optional(),
	default_forum_layout: ForumLayoutTypesEnum,
});
export type ChannelInfer = z.infer<typeof ChannelStructure>;

export const MessageStructure = z.object({
	id: Snowflake,
	channel_id: Snowflake,
	author: UserStructure,
	content: z.string(),
	timestamp: ISO8601,
	edited_timestamp: ISO8601.optional().nullable(),
	tts: z.boolean(),
	mention_everyone: z.boolean(),
	mentions: z.array(UserStructure),
	mention_roles: z.array(Snowflake),
	mention_channels: z.array(ChannelMentionStructure).optional(),
	attachments: z.array(AttachmentStructure),
	embeds: z.array(EmbedStructure).optional(),
	reactions: z.array(ReactionStructure).optional(),
	nonce: z.union([z.string(), z.number()]).optional(),
	pinned: z.boolean(),
	webhook_id: Snowflake.optional(),
	type: MessageTypesEnum,
	activity: MessageActivityStructure.optional(),
	application: ApplicationStructure.partial().optional(),
	application_id: Snowflake.optional(),
	message_reference: MessageReferenceStructure.optional(),
	flags: z.number().optional(),
	referenced_message: z.lazy(() => MessageStructure).optional(),
	interaction_metadata: MessageInteractionMetadataStructure.optional(),
	interaction: MessageInteractionStructure.optional(),
	thread: ChannelStructure.optional(),
	components: z.array(MessageComponentStructure).optional(),
	sticker_items: z.array(StickerItemStructure).optional(),
	stickers: z.array(StickerStructure).optional(),
	position: z.number().optional(),
	role_subscription_data: RoleSubscriptionDataObjectStructure.optional(),
	resolved: ResolvedDataStructure.optional(),
	poll: PollCreateRequestStructure.optional(),
});
export type MessageInfer = z.infer<typeof MessageStructure>;
