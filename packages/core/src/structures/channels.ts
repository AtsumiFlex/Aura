/**
 * Channels Structure
 *
 * Represents a channel object.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#channel-object-channel-structure}
 */

import { z } from "zod";
import { Integer, ISO8601, Snowflake } from "../globals/globals";
import type { ApplicationIntegrationTypes } from "./applications";
import { ApplicationIntegrationTypesEnum, ApplicationStructure } from "./applications";
import { EmojiStructure } from "./emojis";
import { GuildMemberStructure } from "./guilds";
import type { InteractionTypes } from "./interactions";
import {
	InteractionTypesEnum,
	MessageComponentsStructure,
	MessageInteractionStructure,
} from "./interactions";
import { PollCreateRequestObjectStructure } from "./polls";
import { StickerItemStructure, StickerStructure } from "./stickers";
import type { UserStructureInfer } from "./user";
import { UserStructure } from "./user";

/**
 * Role Subscription Data Object Structure
 *
 * Represents a role subscription data object.
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway#role-subscription-data-object-role-subscription-data-structure}
 */
export const RoleSubscriptionDataStructure = z.object({
	role_subscription_listing_id: Snowflake,
	tier_name: z.string(),
	total_months_subscribed: Integer,
	is_renewal: z.boolean(),
});

/**
 * Role Subscription Data Object Structure Infer
 *
 * The inferred type of the RoleSubscriptionDataStructure zod object.
 */
export type RoleSubscriptionDataStructureInfer = z.infer<typeof RoleSubscriptionDataStructure>;

/**
 * Allowed Mention Types
 *
 * Represents allowed mention types.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mention-types}
 */
export enum AllowedMentionTypes {
	Everyone = "everyone",
	Roles = "roles",
	Users = "users",
}

/**
 * Allowed Mention Types Enum
 *
 * The zod enum for the allowed mention types.
 */
export const AllowedMentionTypesEnum = z.nativeEnum(AllowedMentionTypes);

/**
 * Allowed Mentions Structure
 *
 * Represents allowed mentions structure.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mentions-structure}
 */
export const AllowedMentionsStructure = z.object({
	parse: z.array(AllowedMentionTypesEnum),
	roles: z.array(Snowflake),
	users: z.array(Snowflake),
	replied_user: z.boolean(),
});

/**
 * Allowed Mentions Structure Infer
 *
 * The inferred type of the AllowedMentionsStructure zod object.
 */
export type AllowedMentionsStructureInfer = z.infer<typeof AllowedMentionsStructure>;

/**
 * Channel Mention Structure
 *
 * Represents a channel mention structure.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#channel-mention-object-channel-mention-structure}
 */
export const ChannelMentionStructure = z.object({
	id: Snowflake,
	guild_id: Snowflake,
	type: Integer,
	name: z.string(),
});

/**
 * Channel Mention Structure Infer
 *
 * The inferred type of the ChannelMentionStructure zod object.
 */
export type ChannelMentionStructureInfer = z.infer<typeof ChannelMentionStructure>;

/**
 * Attachment Flags
 *
 * Represents attachment flags.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#attachment-object-attachment-structure}
 */
export enum AttachmentFlags {
	IsRemix = 2,
}

/**
 * Attachment Flags Enum
 *
 * The zod enum for the attachment flags.
 */
export const AttachmentFlagsEnum = z.nativeEnum(AttachmentFlags);

/**
 * Attachment Structure
 *
 * Represents an attachment structure.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#attachment-object-attachment-structure}
 */
export const AttachmentStructure = z.object({
	id: Snowflake,
	filename: z.string(),
	description: z.string().optional(),
	content_type: z.string().optional(),
	size: Integer,
	url: z.string(),
	proxy_url: z.string(),
	height: Integer.optional().nullable(),
	width: Integer.optional().nullable(),
	ephemeral: z.boolean().optional(),
	duration_secs: z.number().optional(),
	waveform: z.string().optional(),
	flags: AttachmentFlagsEnum.optional(),
});

/**
 * Attachment Structure Infer
 *
 * The inferred type of the AttachmentStructure zod object.
 */
export type AttachmentStructureInfer = z.infer<typeof AttachmentStructure>;

/**
 * Embed Field Structure
 *
 * Represents an embed field structure.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-field-structure}
 */
export const EmbedFieldStructure = z.object({
	name: z.string(),
	value: z.string(),
	inline: z.boolean().optional(),
});

/**
 * Embed Field Structure Infer
 *
 * The inferred type of the EmbedFieldStructure zod object.
 */
export type EmbedFieldStructureInfer = z.infer<typeof EmbedFieldStructure>;

/**
 * Embed Footer Structure
 *
 * Represents an embed footer structure.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-footer-structure}
 */
export const EmbedFooterStructure = z.object({
	text: z.string(),
	icon_url: z.string().optional(),
	proxy_icon_url: z.string().optional(),
});

/**
 * Embed Footer Structure Infer
 *
 * The inferred type of the EmbedFooterStructure zod object.
 */
export type EmbedFooterStructureInfer = z.infer<typeof EmbedFooterStructure>;

/**
 * Embed Author Structure
 *
 * Represents an embed author structure.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-author-structure}
 */
export const EmbedAuthorStructure = z.object({
	name: z.string(),
	url: z.string().optional(),
	icon_url: z.string().optional(),
	proxy_icon_url: z.string().optional(),
});

/**
 * Embed Author Structure Infer
 *
 * The inferred type of the EmbedAuthorStructure zod object.
 */
export type EmbedAuthorStructureInfer = z.infer<typeof EmbedAuthorStructure>;

/**
 * Embed Provider Structure
 *
 * Represents an embed provider structure.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-provider-structure}
 */
export const EmbedProviderStructure = z.object({
	name: z.string().optional(),
	url: z.string().optional(),
});

/**
 * Embed Provider Structure Infer
 *
 * The inferred type of the EmbedProviderStructure zod object.
 */
export type EmbedProviderStructureInfer = z.infer<typeof EmbedProviderStructure>;

/**
 * Embed Image Structure
 *
 * Represents an embed image structure.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-image-structure}
 */
export const EmbedImageStructure = z.object({
	url: z.string(),
	proxy_url: z.string().optional(),
	height: Integer.optional(),
	width: Integer.optional(),
});

/**
 * Embed Image Structure Infer
 *
 * The inferred type of the EmbedImageStructure zod object.
 */
export type EmbedImageStructureInfer = z.infer<typeof EmbedImageStructure>;

/**
 * Embed Video Structure
 *
 * Represents an embed video structure.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-video-structure}
 */
export const EmbedVideoStructure = z.object({
	url: z.string(),
	proxy_url: z.string().optional(),
	height: Integer.optional(),
	width: Integer.optional(),
});

/**
 * Embed Video Structure Infer
 *
 * The inferred type of the EmbedVideoStructure zod object.
 */
export type EmbedVideoStructureInfer = z.infer<typeof EmbedVideoStructure>;

/**
 * Embed Thumbnail Structure
 *
 * Represents an embed thumbnail structure.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-thumbnail-structure}
 */
export const EmbedThumbnailStructure = z.object({
	url: z.string(),
	proxy_url: z.string().optional(),
	height: Integer.optional(),
	width: Integer.optional(),
});

/**
 * Embed Thumbnail Structure Infer
 *
 * The inferred type of the EmbedThumbnailStructure zod object.
 */
export type EmbedThumbnailStructureInfer = z.infer<typeof EmbedThumbnailStructure>;

/**
 * Embed Types
 *
 * Embed types are "loosely defined" and, for the most part, are not used by our clients for rendering. Embed attributes power what is rendered. Embed types should be considered deprecated and might be removed in a future API version.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-types}
 */
export const EmbedTypes = z.enum(["rich", "image", "video", "gifv", "article", "link"]);

/**
 * Embed Types Infer
 *
 * The inferred type of the EmbedTypes zod object.
 */
export type EmbedTypesInfer = z.infer<typeof EmbedTypes>;

/**
 * Embed Structure
 *
 * Represents an embed structure.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-structure}
 */
export const EmbedStructure = z.object({
	title: z.string().optional(),
	type: EmbedTypes.optional(),
	description: z.string().optional(),
	url: z.string().optional(),
	timestamp: z.string().optional(),
	color: Integer.optional(),
	footer: EmbedFooterStructure.optional(),
	image: EmbedImageStructure.optional(),
	thumbnail: EmbedThumbnailStructure.optional(),
	video: EmbedVideoStructure.optional(),
	provider: EmbedProviderStructure.optional(),
	author: EmbedAuthorStructure.optional(),
	fields: z.array(EmbedFieldStructure).max(25).optional(),
});

/**
 * Embed Structure Infer
 *
 * The inferred type of the EmbedStructure zod object.
 */
export type EmbedStructureInfer = z.infer<typeof EmbedStructure>;

/**
 * Forum Tag Structure
 *
 * Represents a forum tag structure.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#forum-tag-object-forum-tag-structure}
 */
export const ForumTagStructure = z.object({
	id: Snowflake,
	name: z.string(),
	moderated: z.boolean(),
	emoji_id: Snowflake.optional(),
	emoji_name: z.string().optional(),
});

/**
 * Forum Tag Structure Infer
 *
 * The inferred type of the ForumTagStructure zod object.
 */
export type ForumTagStructureInfer = z.infer<typeof ForumTagStructure>;

/**
 * Default Reaction Structure
 *
 * Represents a default reaction structure.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#default-reaction-object-default-reaction-structure}
 */
export const DefaultReactionStructure = z.object({
	emoji_id: Snowflake.optional(),
	emoji_name: z.string().optional(),
});

/**
 * Default Reaction Structure Infer
 *
 * The inferred type of the DefaultReactionStructure zod object.
 */
export type DefaultReactionStructureInfer = z.infer<typeof DefaultReactionStructure>;

/**
 * Thread Member Structure
 *
 * Represents a thread member structure.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#thread-member-object-thread-member-structure}
 */
export const ThreadMemberStructure = z.object({
	id: Snowflake.optional(),
	user_id: Snowflake.optional(),
	join_timestamp: ISO8601.optional(),
	flags: Integer.optional(),
	member: GuildMemberStructure.optional(),
});

/**
 * Thread Member Structure Infer
 *
 * The inferred type of the ThreadMemberStructure zod object.
 */
export type ThreadMemberStructureInfer = z.infer<typeof ThreadMemberStructure>;

/**
 * Thread Metadata Structure
 *
 * Represents a thread metadata structure.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#thread-metadata-object-thread-metadata-structure}
 */
export const ThreadMetadataStructure = z.object({
	archived: z.boolean(),
	auto_archive_duration: Integer,
	archive_timestamp: ISO8601,
	locked: z.boolean(),
	invitable: z.boolean().optional(),
	create_timestamp: ISO8601.optional().nullable(),
});

/**
 * Thread Metadata Structure Infer
 *
 * The inferred type of the ThreadMetadataStructure zod object.
 */
export type ThreadMetadataStructureInfer = z.infer<typeof ThreadMetadataStructure>;

/**
 * Overwrite Types
 *
 * Represents overwrite types.
 */
export enum OverwriteTypes {
	Role = 0,
	Member = 1,
}

/**
 * Overwrite Types Enum
 *
 * The zod enum for the overwrite types.
 */
export const OverwriteTypesEnum = z.nativeEnum(OverwriteTypes);

/**
 * Overwrite Structure
 *
 * Represents an overwrite structure.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#overwrite-object-overwrite-structure}
 */
export const OverwriteStructure = z.object({
	id: Snowflake,
	type: OverwriteTypesEnum,
	allow: z.string(),
	deny: z.string(),
});

/**
 * Overwrite Structure Infer
 *
 * The inferred type of the OverwriteStructure zod object.
 */
export type OverwriteStructureInfer = z.infer<typeof OverwriteStructure>;

/**
 * Reaction Count Details Structure
 *
 * Represents a reaction count details structure.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#reaction-count-details-object-reaction-count-details-structure}
 */
export const ReactionCountDetailsStructure = z.object({
	burst: Integer,
	normal: Integer,
});

/**
 * Reaction Count Details Structure Infer
 *
 * The inferred type of the ReactionCountDetailsStructure zod object.
 */
export type ReactionCountDetailsStructureInfer = z.infer<typeof ReactionCountDetailsStructure>;

/**
 * Reaction Structure
 *
 * Represents a reaction structure.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#reaction-object-reaction-structure}
 */
export const ReactionStructure = z.object({
	count: Integer,
	count_details: ReactionCountDetailsStructure,
	me: z.boolean(),
	me_burst: z.boolean(),
	emoji: EmojiStructure.partial(),
	burst_colors: z.array(z.string()),
});

/**
 * Reaction Structure Infer
 *
 * The inferred type of the ReactionStructure zod object.
 */
export type ReactionStructureInfer = z.infer<typeof ReactionStructure>;

/**
 * Followed Channel Structure
 *
 * Represents a followed channel structure.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#followed-channel-object-followed-channel-structure}
 */
export const FollowedChannelStructure = z.object({
	channel_id: Snowflake,
	webhook_id: Snowflake,
});

/**
 * Followed Channel Structure Infer
 *
 * The inferred type of the FollowedChannelStructure zod object.
 */
export type FollowedChannelStructureInfer = z.infer<typeof FollowedChannelStructure>;

/**
 * Message Reference Structure
 *
 * Represents a message reference structure.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#message-reference-object-message-reference-structure}
 */
export const MessageReferenceStructure = z.object({
	message_id: Snowflake.optional(),
	channel_id: Snowflake.optional(),
	guild_id: Snowflake.optional(),
	fail_if_not_exists: z.boolean().optional(),
});

/**
 * Message Reference Structure Infer
 *
 * The inferred type of the MessageReferenceStructure zod object.
 */
export type MessageReferenceStructureInfer = z.infer<typeof MessageReferenceStructure>;

/**
 * Message Interaction Metadata Structure Infer
 *
 * The inferred type of the MessageInteractionMetadataStructure zod object.
 */
export type MessageInteractionMetadataStructureInfer = {
	authorizing_integration_owners: Record<string, ApplicationIntegrationTypes>;
	id: string;
	interacted_message_id?: string | null;
	original_response_message_id?: string | null;
	triggering_interaction_metadata?: MessageInteractionMetadataStructureInfer | null;
	type: InteractionTypes;
	user: UserStructureInfer;
};

/**
 * Message Interaction Metadata Structure
 *
 * Represents a message interaction metadata structure.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#message-interaction-object-message-interaction-metadata-structure}
 */
export const MessageInteractionMetadataStructure: z.ZodType<MessageInteractionMetadataStructureInfer> = z.object({
	id: Snowflake,
	type: InteractionTypesEnum,
	user: UserStructure,
	authorizing_integration_owners: z.record(ApplicationIntegrationTypesEnum),
	original_response_message_id: Snowflake.optional(),
	interacted_message_id: Snowflake.optional(),
	triggering_interaction_metadata: z.lazy(() => MessageInteractionMetadataStructure).optional(),
});

/**
 * Message Flags
 *
 * Represents message flags.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#message-object-message-flags}
 */
export enum MessageFlags {
	/**
	 * This message has been published to subscribed channels (via Channel Following)
	 */
	Crossposted = 1,
	/**
	 * This message originated from a message in another channel (via Channel Following)
	 */
	IsCrosspost = 2,
	/**
	 * Do not include any embeds when serializing this message
	 */
	SuppressEmbeds = 4,
	/**
	 * The source message for this crosspost has been deleted (via Channel Following)
	 */
	SourceMessageDeleted = 8,
	/**
	 * This message came from the urgent message system
	 */
	Urgent = 16,
	/**
	 * This message has an associated thread, with the same id as the message
	 */
	HasThread = 32,
	/**
	 * This message is only visible to the user who invoked the Interaction
	 */
	Ephemeral = 64,
	/**
	 * This message is an Interaction Response and the bot is "thinking"
	 */
	Loading = 128,
	/**
	 * This message failed to mention some roles and add their members to the thread
	 */
	FailedToMentionSomeRolesInThread = 256,
	/**
	 * This message will not trigger push and desktop notifications
	 */
	SuppressNotifications = 4_096,
	/**
	 * This message is a voice message
	 */
	IsVoiceMessage = 8_192,
}

/**
 * Message Flags Enum
 *
 * The zod enum for the message flags.
 */
export const MessageFlagsEnum = z.nativeEnum(MessageFlags);

/**
 * Message Activity Types
 *
 * Represents message activity types.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#message-object-message-activity-types}
 */
export enum MessageActivityTypes {
	Join = 1,
	Spectate = 2,
	Listen = 3,
	JoinRequest = 5,
}

/**
 * Message Activity Types Enum
 *
 * The zod enum for the message activity types.
 */
export const MessageActivityTypesEnum = z.nativeEnum(MessageActivityTypes);

/**
 * Message Activity Structure
 *
 * Represents a message activity structure.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#message-object-message-activity-structure}
 */
export const MessageActivityStructure = z.object({
	type: MessageActivityTypesEnum,
	party_id: z.string().optional(),
});

/**
 * Message Activity Structure Infer
 *
 * The inferred type of the MessageActivityStructure zod object.
 */
export type MessageActivityStructureInfer = z.infer<typeof MessageActivityStructure>;

/**
 * Message Types
 *
 * Represents message types.
 *
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
 * Message Types Enum
 *
 * The zod enum for the message types.
 */
export const MessageTypesEnum = z.nativeEnum(MessageTypes);

/**
 * Forum Layout Types
 *
 * Represents forum layout types.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#forum-layout-types}
 */
export enum ForumLayoutTypes {
	/**
	 * No default has been set for forum channel
	 */
	NotSet = 0,
	/**
	 * Display posts as a list
	 */
	ListView = 1,
	/**
	 * Display posts as a collection of tiles
	 */
	GalleryView = 2,
}

/**
 * Forum Layout Types Enum
 *
 * The zod enum for the forum layout types.
 */
export const ForumLayoutTypesEnum = z.nativeEnum(ForumLayoutTypes);

/**
 * Sort Order Types
 *
 * Represents sort order types.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#sort-order-types}
 */
export enum SortOrderTypes {
	/**
	 * Sort forum posts by activity
	 */
	LatestActivity = 0,
	/**
	 * Sort forum posts by creation time (from most recent to oldest)
	 */
	CreationDate = 1,
}

/**
 * Sort Order Types Enum
 *
 * The zod enum for the sort order types.
 */
export const SortOrderTypesEnum = z.nativeEnum(SortOrderTypes);

/**
 * Channel Flags
 *
 * Represents channel flags.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#channel-object-channel-flags}
 */
export enum ChannelFlags {
	/**
	 * This thread is pinned to the top of its parent GUILD_FORUM or GUILD_MEDIA channel
	 */
	Pinned = 2,
	/**
	 * Whether a tag is required to be specified when creating a thread in a GUILD_FORUM or a GUILD_MEDIA channel. Tags are specified in the applied_tags field.
	 */
	RequireTag = 16,
	/**
	 * When set hides the embedded media download options. Available only for media channels
	 */
	HideMediaDownloadOptions = 32_768,
}

/**
 * Channel Flags Enum
 *
 * The zod enum for the channel flags.
 */
export const ChannelFlagsEnum = z.nativeEnum(ChannelFlags);

/**
 * Video Quality Modes
 *
 * Represents video quality modes.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#video-quality-modes}
 */
export enum VideoQualityModes {
	/**
	 * Discord chooses the quality for optimal performance
	 */
	Auto = 1,
	/**
	 * 720p
	 */
	Full = 2,
}

/**
 * Video Quality Modes Enum
 *
 * The zod enum for the video quality modes.
 */
export const VideoQualityModesEnum = z.nativeEnum(VideoQualityModes);

/**
 * Channel Types
 *
 * Represents channel types.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#channel-object-channel-types}
 */
export enum ChannelTypes {
	/**
	 * A text channel within a server
	 */
	GuildText = 0,
	/**
	 * A direct message between users
	 */
	DM = 1,
	/**
	 * A voice channel within a server
	 */
	GuildVoice = 2,
	/**
	 * A direct message between multiple users
	 */
	GroupDM = 3,
	/**
	 * An organizational category that contains up to 50 channels
	 */
	GuildCategory = 4,
	/**
	 * A channel that users can follow and crosspost into their own server (formerly news channels)
	 */
	GuildAnnouncement = 5,
	/**
	 * A temporary sub-channel within a GUILD_ANNOUNCEMENT channel
	 */
	AnnouncementThread = 10,
	/**
	 * A temporary sub-channel within a GUILD_TEXT or GUILD_FORUM channel
	 */
	PublicThread = 11,
	/**
	 * A temporary sub-channel within a GUILD_TEXT channel that is only viewable by those invited
	 */
	PrivateThread = 12,
	/**
	 * A voice channel for hosting events with an audience
	 */
	GuildStageVoice = 13,
	/**
	 * The channel in a hub containing the listed servers
	 */
	GuildDirectory = 14,
	/**
	 * Channel that can only contain threads
	 */
	GuildForum = 15,
	/**
	 * Channel that can only contain threads, similar to GUILD_FORUM channels
	 */
	GuildMedia = 16,
}

/**
 * Channel Types Enum
 *
 * The zod enum for the channel types.
 */
export const ChannelTypesEnum = z.nativeEnum(ChannelTypes);
/**
 * Channel Structure
 *
 * Represents a channel object.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#channel-object-channel-structure}
 */
export const ChannelStructure = z.object({
	id: Snowflake,
	type: ChannelTypesEnum,
	guild_id: Snowflake.optional(),
	position: Integer.optional(),
	permission_overwrites: z.array(OverwriteStructure),
	name: z.string().optional().nullable(),
	topic: z.string().optional().nullable(),
	nsfw: z.boolean().optional(),
	last_message_id: Snowflake.optional().nullable(),
	bitrate: Integer.optional(),
	user_limit: Integer.optional(),
	rate_limit_per_user: Integer.optional(),
	recipients: z.array(UserStructure).optional(),
	icon: z.string().optional(),
	owner_id: Snowflake.optional(),
	application_id: Snowflake.optional(),
	managed: z.boolean().optional(),
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
	flags: ChannelFlagsEnum.optional(),
	total_message_sent: Integer.optional(),
	available_tags: z.array(ForumTagStructure).optional(),
	applied_tags: z.array(Snowflake).optional(),
	default_reaction_emoji: DefaultReactionStructure.optional().nullable(),
	default_thread_rate_limit_per_user: Integer.optional(),
	default_sort_order: SortOrderTypesEnum.optional(),
	default_forum_layout: ForumLayoutTypesEnum.optional(),
});

/**
 * Channel Structure Infer
 *
 * The inferred type of the ChannelStructure zod object.
 */
export type ChannelStructureInfer = z.infer<typeof ChannelStructure>;

/**
 * Message Structure
 *
 * Represents a message structure.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#message-object-message-structure}
 */
export const MessageStructure = z.object({
	id: Snowflake,
	channel_id: Snowflake,
	author: UserStructure.optional(),
	content: z.string(),
	timestamp: ISO8601,
	edited_timestamp: ISO8601.optional().nullable(),
	tts: z.boolean(),
	mention_everyone: z.boolean(),
	mentions: z.array(UserStructure),
	mention_roles: z.array(Snowflake),
	mention_channels: z.array(ChannelMentionStructure).optional(),
	attachments: z.array(AttachmentStructure),
	embeds: z.array(EmbedStructure),
	reactions: z.array(ReactionStructure).optional(),
	nonce: z.union([z.string(), z.number()]).optional(),
	pinned: z.boolean(),
	webhook_id: Snowflake.optional(),
	type: MessageTypesEnum,
	activity: MessageActivityStructure.optional(),
	application: ApplicationStructure.partial().optional(),
	application_id: Snowflake.optional(),
	message_reference: MessageReferenceStructure.optional(),
	flags: MessageFlagsEnum.optional(),
	referenced_message: z.any().optional().nullable(), // TODO: Message Structure
	interaction_metadata: MessageInteractionMetadataStructure.optional(),
	interaction: MessageInteractionStructure.optional(),
	thread: ChannelStructure.optional(),
	components: z.array(MessageComponentsStructure).optional(),
	sticker_items: z.array(StickerItemStructure).optional(),
	stickers: z.array(StickerStructure).optional(),
	position: z.number().optional(),
	role_subscription_data: RoleSubscriptionDataStructure.optional(),
	// resolved: ResolvedDataStructure.optional(), // TODO: Problem with resolved
	poll: PollCreateRequestObjectStructure.optional(),
});

/**
 * Message Structure Infer
 *
 * The inferred type of the MessageStructure zod object.
 */
export type MessageStructureInfer = z.infer<typeof MessageStructure>;
