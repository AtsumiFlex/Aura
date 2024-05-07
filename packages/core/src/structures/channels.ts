/**
 * Channels Resource
 *
 * Channels in Discord represent an isolated set of users and messages.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#channels-resource}
 */

import { z } from "zod";
import { Integer, ISO8601Timestamp, Snowflake } from "../globals/formatters";
import { DiscordHeaders } from "../globals/headers";
import { BitwisePermissionFlagsEnum } from "../libs/permissions";
import { ApplicationStructure } from "./applications";
import { EmojiStructure } from "./emojis";
import { GuildMemberStructure } from "./guilds";
import { MessageInteractionStructure, ResolvedDataStructure } from "./interactions";
import type { PollCreateRequestStructureInfer } from "./polls";
import { PollCreateRequestStructure } from "./polls";
import type { StickerItemStructureInfer, StickerStructureInfer } from "./stickers";
import { StickerItemStructure, StickerStructure } from "./stickers";
import type { UserStructureInfer } from "./users";
import { UserStructure } from "./users";

/**
 * Channel Types
 *
 * The types of channels that are available in Discord.
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
 * Is a zod enum that represents the available {@link ChannelTypes}.
 */
export const ChannelTypesEnum = z.nativeEnum(ChannelTypes);

/**
 * Role Subscription Data Object Structure
 *
 * Represents the subscription data of a role.
 *
 * @see {@link https://discord.com/developers/docs/topics/permissions#role-object-role-subscription-data-structure}
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
 * The inferred type of {@link RoleSubscriptionDataStructure}
 */
export type RoleSubscriptionDataStructureInfer = z.infer<typeof RoleSubscriptionDataStructure>;

/**
 * Allowed Mention Types
 *
 * The types of mentions that are allowed in a message.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#allowed-mention-types}
 */
export enum AllowedMentionTypes {
	/**
	 * Controls @everyone and @here mentions
	 */
	Everyone = "everyone",
	/**
	 * Controls role mentions
	 */
	Roles = "roles",
	/**
	 * Controls user mentions
	 */
	Users = "users",
}

/**
 * Allowed Mention Types Enum
 *
 * Is a zod enum that represents the available {@link AllowedMentionTypes}.
 */
export const AllowedMentionTypesEnum = z.nativeEnum(AllowedMentionTypes);

/**
 * Allowed Mentions Structure
 *
 * Represents the allowed mentions of a message.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#allowed-mentions-object}
 */
export const AllowedMentionsStructure = z.object({
	parse: z.array(AllowedMentionTypesEnum),
	roles: z.array(Snowflake).max(100),
	users: z.array(Snowflake).max(100),
	replied_user: z.boolean(),
});

/**
 * Allowed Mentions Structure Infer
 *
 * The inferred type of {@link AllowedMentionsStructure}
 */
export type AllowedMentionsStructureInfer = z.infer<typeof AllowedMentionsStructure>;

/**
 * Channel Mention Structure
 *
 * Represents a mention of a channel.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#channel-mention-object}
 */
export const ChannelMentionStructure = z.object({
	id: Snowflake,
	guild_id: Snowflake,
	type: ChannelTypesEnum,
	name: z.string(),
});

/**
 * Channel Mention Structure Infer
 *
 * The inferred type of {@link ChannelMentionStructure}
 */
export type ChannelMentionStructureInfer = z.infer<typeof ChannelMentionStructure>;

/**
 * Attachment Flags
 *
 * Flags that are present on an attachment.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#attachment-object-attachment-structure}
 */
export enum AttachmentFlags {
	/**
	 * This attachment has been edited using the remix feature on mobile
	 */
	IsRemix = 4,
}

/**
 * Attachment Flags Enum
 *
 * Is a zod enum that represents the available {@link AttachmentFlags}.
 */
export const AttachmentFlagsEnum = z.nativeEnum(AttachmentFlags);

/**
 * Attachment Structure
 *
 * Represents an attachment.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#attachment-object-attachment-structure}
 */
export const AttachmentStructure = z.object({
	id: Snowflake,
	filename: z.string(),
	description: z.string().max(1_024).optional(),
	content_type: DiscordHeaders.shape["Content-Type"].optional(),
	size: Integer,
	url: z.string(),
	proxy_url: z.string(),
	height: Integer.optional().nullable(),
	width: Integer.optional().nullable(),
	ephemeral: z.boolean().optional(),
	duration_secs: z.number().optional(),
	waveform: z.string().base64().optional(),
	flags: z.union([AttachmentFlagsEnum, z.bigint()]).optional(),
});

/**
 * Attachment Structure Infer
 *
 * The inferred type of {@link AttachmentStructure}
 */
export type AttachmentStructureInfer = z.infer<typeof AttachmentStructure>;

/**
 * Embed Field Structure
 *
 * Represents a field in an embed.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-field-structure}
 */
export const EmbedFieldStructure = z.object({
	name: z.string().max(256),
	value: z.string().max(1_024),
	inline: z.boolean().optional(),
});

/**
 * Embed Field Structure Infer
 *
 * The inferred type of {@link EmbedFieldStructure}
 */
export type EmbedFieldStructureInfer = z.infer<typeof EmbedFieldStructure>;

/**
 * Embed Footer Structure
 *
 * Represents the footer of an embed.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-footer-structure}
 */
export const EmbedFooterStructure = z.object({
	text: z.string().max(2_048),
	icon_url: z.string().optional(),
	proxy_icon_url: z.string().optional(),
});

/**
 * Embed Footer Structure Infer
 *
 * The inferred type of {@link EmbedFooterStructure}
 */
export type EmbedFooterStructureInfer = z.infer<typeof EmbedFooterStructure>;

/**
 * Embed Author Structure
 *
 * Represents the author of an embed.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-author-structure}
 */
export const EmbedAuthorStructure = z.object({
	name: z.string().max(256),
	url: z.string().optional(),
	icon_url: z.string().optional(),
	proxy_icon_url: z.string().optional(),
});

/**
 * Embed Author Structure Infer
 *
 * The inferred type of {@link EmbedAuthorStructure}
 */
export type EmbedAuthorStructureInfer = z.infer<typeof EmbedAuthorStructure>;

/**
 * Embed Provider Structure
 *
 * Represents the provider of an embed.
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
 * The inferred type of {@link EmbedProviderStructure}
 */
export type EmbedProviderStructureInfer = z.infer<typeof EmbedProviderStructure>;

/**
 * Embed Image Structure
 *
 * Represents the image of an embed.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-image-structure}
 */
export const EmbedImageStructure = z.object({
	url: z.string(),
	proxy_url: z.string().optional(),
	height: Integer.optional().nullable(),
	width: Integer.optional().nullable(),
});

/**
 * Embed Image Structure Infer
 *
 * The inferred type of {@link EmbedImageStructure}
 */
export type EmbedImageStructureInfer = z.infer<typeof EmbedImageStructure>;

/**
 * Embed Video Structure
 *
 * Represents the video of an embed.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-video-structure}
 */
export const EmbedVideoStructure = z.object({
	url: z.string().optional(),
	proxy_url: z.string().optional(),
	height: Integer.optional().nullable(),
	width: Integer.optional().nullable(),
});

/**
 * Embed Video Structure Infer
 *
 * The inferred type of {@link EmbedVideoStructure}
 */
export type EmbedVideoStructureInfer = z.infer<typeof EmbedVideoStructure>;

/**
 * Embed Thumbnail Structure
 *
 * Represents the thumbnail of an embed.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-thumbnail-structure}
 */
export const EmbedThumbnailStructure = z.object({
	url: z.string(),
	proxy_url: z.string().optional(),
	height: Integer.optional().nullable(),
	width: Integer.optional().nullable(),
});

/**
 * Embed Thumbnail Structure Infer
 *
 * The inferred type of {@link EmbedThumbnailStructure}
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
 * Infer the type of {@link EmbedTypes}
 */
export type EmbedTypesInfer = z.infer<typeof EmbedTypes>;

/**
 * Embed Structure
 *
 * Represents an embed.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-structure}
 */
export const EmbedStructure = z.object({
	title: z.string().max(256).optional(),
	type: EmbedTypes.optional(),
	description: z.string().max(4_096).optional(),
	url: z.string().optional(),
	timestamp: ISO8601Timestamp.optional(),
	color: Integer.optional(),
	footer: EmbedFooterStructure.optional(),
	image: EmbedImageStructure.optional(),
	thumbnail: EmbedThumbnailStructure.optional(),
	video: EmbedVideoStructure.optional(),
	provider: EmbedProviderStructure.optional(),
	author: EmbedAuthorStructure.optional(),
	fields: z.array(EmbedFieldStructure).max(25),
});

/**
 * Embed Structure Infer
 *
 * The inferred type of {@link EmbedStructure}
 */
export type EmbedStructureInfer = z.infer<typeof EmbedStructure>;

/**
 * Forum Tag Structure
 *
 * Represents a tag in a forum channel.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#forum-tag-object-forum-tag-structure}
 */
export const ForumTagStructure = z.object({
	id: Snowflake,
	name: z.string().min(0).max(20),
	moderated: z.boolean(),
	emoji_id: Snowflake.optional(),
	emoji_name: z.string().optional(),
});

/**
 * Forum Tag Structure Infer
 *
 * The inferred type of {@link ForumTagStructure}
 */
export type ForumTagStructureInfer = z.infer<typeof ForumTagStructure>;

/**
 * Default Reaction Structure
 *
 * Represents a default reaction.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#default-reaction-object}
 */
export const DefaultReactionStructure = z.object({
	emoji_id: Snowflake.optional(),
	emoji_name: z.string().optional(),
});

/**
 * Default Reaction Structure Infer
 *
 * The inferred type of {@link DefaultReactionStructure}
 */
export type DefaultReactionStructureInfer = z.infer<typeof DefaultReactionStructure>;

/**
 * Thread Member Structure
 *
 * Represents a member of a thread.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#thread-member-object-thread-member-structure}
 */
export const ThreadMemberStructure = z.object({
	id: Snowflake.optional(),
	user_id: Snowflake.optional(),
	join_timestamp: ISO8601Timestamp,
	flags: Integer,
	member: z.lazy(() => GuildMemberStructure.optional()),
});

/**
 * Thread Member Structure Infer
 *
 * The inferred type of {@link ThreadMemberStructure}
 */
export type ThreadMemberStructureInfer = z.infer<typeof ThreadMemberStructure>;

/**
 * Thread Metadata Structure
 *
 * Represents the metadata of a thread.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#thread-metadata-object-thread-metadata-structure}
 */
export const ThreadMetadataStructure = z.object({
	archived: z.boolean(),
	auto_archive_duration: z.union([z.literal(60), z.literal(1_440), z.literal(4_320), z.literal(10_080)]),
	archive_timestamp: ISO8601Timestamp,
	locked: z.boolean(),
	invitable: z.boolean().optional(),
	create_timestamp: ISO8601Timestamp.optional(),
});

/**
 * Thread Metadata Structure Infer
 *
 * The inferred type of {@link ThreadMetadataStructure}
 */
export type ThreadMetadataStructureInfer = z.infer<typeof ThreadMetadataStructure>;

/**
 * Overwrite Types
 *
 * The types of permission overwrites that are available in Discord.
 */
export enum OverwriteTypes {
	Role = 0,
	Member = 1,
}

/**
 * Overwrite Types Enum
 *
 * Is a zod enum that represents the available {@link OverwriteTypes}.
 */
export const OverwriteTypesEnum = z.nativeEnum(OverwriteTypes);

/**
 * Overwrite Structure
 *
 * Represents a permission overwrite.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#overwrite-object-overwrite-structure}
 */
export const OverwriteStructure = z.object({
	id: Snowflake,
	type: OverwriteTypesEnum,
	allow: z.array(BitwisePermissionFlagsEnum),
	deny: z.array(BitwisePermissionFlagsEnum),
});

/**
 * Overwrite Structure Infer
 *
 * The inferred type of {@link OverwriteStructure}
 */
export type OverwriteStructureInfer = z.infer<typeof OverwriteStructure>;

/**
 * Reaction Count Details Structure
 *
 * Represents the details of a reaction count.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#reaction-object-reaction-counts}
 */
export const ReactionCountDetailsStructure = z.object({
	burst: Integer,
	normal: Integer,
});

/**
 * Reaction Count Details Structure Infer
 *
 * The inferred type of {@link ReactionCountDetailsStructure}
 */
export type ReactionCountDetailsStructureInfer = z.infer<typeof ReactionCountDetailsStructure>;

/**
 * Reaction Structure
 *
 * Represents a reaction.
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
 * The inferred type of {@link ReactionStructure}
 */
export type ReactionStructureInfer = z.infer<typeof ReactionStructure>;

/**
 * Followed Channel Structure
 *
 * Represents a followed channel.
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
 * The inferred type of {@link FollowedChannelStructure}
 */
export type FollowedChannelStructureInfer = z.infer<typeof FollowedChannelStructure>;

/**
 * Message Reference Structure
 *
 * Represents a message reference.
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
 * The inferred type of {@link MessageReferenceStructure}
 */
export type MessageReferenceStructureInfer = z.infer<typeof MessageReferenceStructure>;

/**
 * Message Interaction Metadata Structure Infer
 *
 * The inferred type of {@link MessageInteractionMetadataStructure}
 */
export type MessageInteractionMetadataStructureInfer = {
	authorizing_integration_owners: Record<string, string>;
	id: string;
	interacted_message_id?: string | null;
	original_response_message_id?: string | null;
	triggering_interaction_metadata?: MessageInteractionMetadataStructureInfer | null;
	type: number;
	user: UserStructureInfer;
};

/**
 * Message Interaction Metadata Structure
 *
 * Represents the metadata of a message interaction.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#message-interaction-object-message-interaction-metadata-structure}
 */
export const MessageInteractionMetadataStructure: z.ZodType<MessageInteractionMetadataStructureInfer> = z.object({
	id: Snowflake,
	type: z.number(), // TODO: Interaction Type
	user: UserStructure,
	authorizing_integration_owners: z.record(z.string()), // TODO: dictionary with keys of application integration types. IDs for installation context(s) related to an interaction. Details in Authorizing Integration Owners Object
	original_response_message_id: Snowflake.optional(),
	interacted_message_id: Snowflake.optional(),
	triggering_interaction_metadata: z.lazy(() => MessageInteractionMetadataStructure).optional(),
});

/**
 * Message Flags
 *
 * Flags that are present on a message.
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
 * Is a zod enum that represents the available {@link MessageFlags}.
 */
export const MessageFlagsEnum = z.nativeEnum(MessageFlags);

/**
 * Message Activity Types
 *
 * The types of message activities that are available in Discord.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#message-object-message-activity-types}
 */
export enum MessageActivityTypes {
	/**
	 * Join a party
	 */
	Join = 1,
	/**
	 * Spectate a game
	 */
	Spectate = 2,
	/**
	 * Listen along
	 */
	Listen = 3,
	/**
	 * Join a request to play
	 */
	JoinRequest = 5,
}

/**
 * Message Activity Types Enum
 *
 * Is a zod enum that represents the available {@link MessageActivityTypes}.
 */
export const MessageActivityTypesEnum = z.nativeEnum(MessageActivityTypes);

/**
 * Message Activity Structure
 *
 * Represents the activity of a message.
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
 * The inferred type of {@link MessageActivityStructure}
 */
export type MessageActivityStructureInfer = z.infer<typeof MessageActivityStructure>;

/**
 * Message Types
 *
 * The types of messages that are available in Discord.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#message-object-message-types}
 */
export enum MessageTypes {
	/**
	 * Default message
	 */
	Default = 0,
	/**
	 * Recipient Add
	 */
	RecipientAdd = 1,
	/**
	 * Recipient Remove
	 */
	RecipientRemove = 2,
	/**
	 * Call
	 */
	Call = 3,
	/**
	 * Channel Name Change
	 */
	ChannelNameChange = 4,
	/**
	 * Channel Icon Change
	 */
	ChannelIconChange = 5,
	/**
	 * Channel Pinned Message
	 */
	ChannelPinnedMessage = 6,
	/**
	 * User Join
	 */
	UserJoin = 7,
	/**
	 * Guild Boost
	 */
	GuildBoost = 8,
	/**
	 * Guild Boost Tier 1
	 */
	GuildBoostTier1 = 9,
	/**
	 * Guild Boost Tier 2
	 */
	GuildBoostTier2 = 10,
	/**
	 * Guild Boost Tier 3
	 */
	GuildBoostTier3 = 11,
	/**
	 * Channel Follow Add
	 */
	ChannelFollowAdd = 12,
	/**
	 * Guild Discovery Disqualified
	 */
	GuildDiscoveryDisqualified = 14,
	/**
	 * Guild Discovery Requalified
	 */
	GuildDiscoveryRequalified = 15,
	/**
	 * Guild Discovery Grace Period Initial Warning
	 */
	GuildDiscoveryGracePeriodInitialWarning = 16,
	/**
	 * Guild Discovery Grace Period Final Warning
	 */
	GuildDiscoveryGracePeriodFinalWarning = 17,
	/**
	 * Thread Created
	 */
	ThreadCreated = 18,
	/**
	 * Reply
	 */
	Reply = 19,
	/**
	 * Chat Input Command
	 */
	ChatInputCommand = 20,
	/**
	 * Thread Starter Message
	 */
	ThreadStarterMessage = 21,
	/**
	 * Guild Invite Reminder
	 */
	GuildInviteReminder = 22,
	/**
	 * Context Menu Command
	 */
	ContextMenuCommand = 23,
	/**
	 * Auto Moderation Action
	 */
	AutoModerationAction = 24,
	/**
	 * Role Subscription Purchase
	 */
	RoleSubscriptionPurchase = 25,
	/**
	 * Interaction Premium Upsell
	 */
	InteractionPremiumUpsell = 26,
	/**
	 * Stage Start
	 */
	StageStart = 27,
	/**
	 * Stage End
	 */
	StageEnd = 28,
	/**
	 * Stage Speaker
	 */
	StageSpeaker = 29,
	/**
	 * Stage Topic
	 */
	StageTopic = 31,
	/**
	 * Guild Application Premium Subscription
	 */
	GuildApplicationPremiumSubscription = 32,
}

/**
 * Message Types Enum
 *
 * Is a zod enum that represents the available {@link MessageTypes}.
 */
export const MessageTypesEnum = z.nativeEnum(MessageTypes);

/**
 * Forum Layout Types
 *
 * The types of layouts that are available in a forum channel.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#forum-channel-object-forum-layout-types}
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
 * Is a zod enum that represents the available {@link ForumLayoutTypes}.
 */
export const ForumLayoutTypesEnum = z.nativeEnum(ForumLayoutTypes);

/**
 * Forum Sort Order Types
 *
 * The types of sort orders that are available in a forum channel.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#forum-channel-object-forum-sort-order-types}
 */
export enum ForumSortOrderTypes {
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
 * Forum Sort Order Types Enum
 *
 * Is a zod enum that represents the available {@link ForumSortOrderTypes}.
 */
export const ForumSortOrderTypesEnum = z.nativeEnum(ForumSortOrderTypes);

/**
 * Channel Flags
 *
 * Flags that are present on a channel.
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
 * Is a zod enum that represents the available {@link ChannelFlags}.
 */
export const ChannelFlagsEnum = z.nativeEnum(ChannelFlags);

/**
 * Video Quality Modes
 *
 * The types of video quality modes that are available in Discord.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#video-quality-modes}
 */
export enum VideoQualityModes {
	Auto = 1,
	Full = 2,
}

/**
 * Video Quality Modes Enum
 *
 * Is a zod enum that represents the available {@link VideoQualityModes}.
 */
export const VideoQualityModesEnum = z.nativeEnum(VideoQualityModes);

/**
 * Channel Structure
 *
 * Represents a channel.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#channel-object-channel-structure}
 */
export const ChannelStructure = z.object({
	id: Snowflake,
	type: ChannelTypesEnum,
	guild_id: Snowflake.optional(),
	position: Integer.optional(),
	permission_overwrites: z.array(OverwriteStructure),
	name: z.string().optional(),
	topic: z.string().optional(),
	nsfw: z.boolean().optional(),
	last_message_id: Snowflake.optional(),
	bitrate: Integer.optional(),
	user_limit: Integer.optional(),
	rate_limit_per_user: Integer.optional(),
	recipients: z.array(UserStructure),
	icon: z.string().optional().nullable(),
	owner_id: Snowflake.optional(),
	application_id: Snowflake.optional(),
	managed: z.boolean().optional(),
	parent_id: Snowflake.optional().nullable(),
	last_pin_timestamp: ISO8601Timestamp.optional().nullable(),
	rtc_region: z.string().optional().nullable(),
	video_quality_mode: VideoQualityModesEnum.optional(),
	message_count: Integer.optional(),
	member_count: Integer.optional(),
	thread_metadata: ThreadMetadataStructure.optional(),
	member: ThreadMemberStructure.optional(),
	default_auto_archive_duration: z.union([z.literal(60), z.literal(1_440), z.literal(4_320), z.literal(10_080)]).optional(),
	permissions: z.string().optional(),
	flags: z.union([ChannelFlagsEnum, z.bigint()]).optional(),
	total_message_sent: Integer.optional(),
	available_tags: z.array(ForumTagStructure).optional(),
	applied_tags: z.array(Snowflake).optional(),
	default_reaction_emoji: DefaultReactionStructure.optional(),
	default_thread_rate_limit_per_user: Integer.optional(),
	default_sort_order: z.union([ForumSortOrderTypesEnum, z.null()]).optional().nullable(),
	default_forum_layout: ForumLayoutTypesEnum.optional(),
});

/**
 * Channel Structure Infer
 *
 * The inferred type of {@link ChannelStructure}
 */
export type ChannelStructureInfer = z.infer<typeof ChannelStructure>;

/**
 * Message Structure Infer
 *
 * The inferred type of {@link MessageStructure}
 */
export type MessageStructureInfer = {
	activity?: MessageActivityStructureInfer;
	application?: any;
	application_id?: string;
	attachments: AttachmentStructureInfer[];
	author?: UserStructureInfer;
	channel_id: string;
	components?: any[];
	content?: string | null;
	edited_timestamp?: string;
	embeds: EmbedStructureInfer[];
	flags?: MessageFlags;
	id: string;
	interaction?: any;
	interaction_metadata?: MessageInteractionMetadataStructureInfer;
	mention_channels: ChannelMentionStructureInfer[];
	mention_everyone: boolean;
	mention_roles: string[];
	mentions: UserStructureInfer[];
	message_reference?: MessageReferenceStructureInfer;
	nonce?: number | string;
	pinned?: boolean;
	poll?: PollCreateRequestStructureInfer;
	position?: number;
	reactions?: ReactionStructureInfer[];
	referenced_message?: MessageStructureInfer | null;
	resolved?: any;
	role_subscription_data?: RoleSubscriptionDataStructureInfer;
	sticker_items?: StickerItemStructureInfer[];
	stickers?: StickerStructureInfer[];
	thread?: ChannelStructureInfer;
	timestamp: string;
	tts: boolean;
	type: MessageTypes;
	webhook_id?: string;
};

/**
 * Message Structure
 *
 * Represents a message.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#message-object-message-structure}
 */
export const MessageStructure: any /* A Changer le types*/ = z.object({
	id: Snowflake,
	channel_id: Snowflake,
	author: UserStructure.optional(),
	content: z.string().optional().nullable(),
	timestamp: ISO8601Timestamp,
	edited_timestamp: ISO8601Timestamp.optional(),
	tts: z.boolean(),
	mention_everyone: z.boolean(),
	mentions: z.array(UserStructure),
	mention_roles: z.array(Snowflake),
	mention_channels: z.array(ChannelMentionStructure),
	attachments: z.array(AttachmentStructure),
	embeds: z.array(EmbedStructure),
	reactions: z.array(ReactionStructure).optional(),
	nonce: z.union([z.string(), z.number()]).optional(),
	pinned: z.boolean().optional(),
	webhook_id: Snowflake.optional(),
	type: MessageTypesEnum,
	activity: MessageActivityStructure.optional(),
	application: z.lazy(() => ApplicationStructure.optional()),
	application_id: Snowflake.optional(),
	message_reference: MessageReferenceStructure.optional(),
	flags: MessageFlagsEnum.optional(),
	referenced_message: z.lazy(() => MessageStructure).optional().nullable(),
	interaction_metadata: MessageInteractionMetadataStructure.optional(),
	interaction: MessageInteractionStructure.optional(),
	thread: ChannelStructure.optional(),
	components: z.array(z.any()).optional(), // TODO: Component Structure - sent if the message contains components like buttons, action rows, or other interactive components
	sticker_items: z.array(StickerItemStructure).optional(),
	stickers: z.array(StickerStructure).optional(),
	position: Integer.optional(),
	role_subscription_data: RoleSubscriptionDataStructure.optional(),
	resolved: ResolvedDataStructure.optional(), // TODO: Resolved Data
	poll: PollCreateRequestStructure.optional(),
});
