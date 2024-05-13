/**
 * Channels Resource
 *
 * Channels are a way to communicate with other users in a server. They can be text channels for text-based communication, or voice channels for audio-based communication.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#channels-resource}
 */

import { z } from "zod";
import { Integer, ISO8601Timestamp, Snowflake } from "../globals/formatters";
import { DiscordHeaders } from "../globals/headers";
import type { ApplicationIntegrationTypes, ApplicationStructureInfer } from "./applications";
import { ApplicationIntegrationTypesEnum, ApplicationStructure } from "./applications";
import { EmojiStructure } from "./emojis";
import type { GuildMemberStructureInfer } from "./guilds";
import { GuildMemberStructure } from "./guilds";
import type { InteractionType } from "./interactions";
import {
	InteractionTypeEnum,
	MessageComponentsStructure,
	MessageInteractionStructure,
	ResolvedDataStructure,
} from "./interactions";
import type { PollCreateRequestStructureInfer } from "./polls";
import { PollCreateRequestStructure } from "./polls";
import { RoleStructure } from "./roles";
import type { StickerItemStructureInfer, StickerStructureInfer } from "./stickers";
import { StickerItemStructure, StickerStructure } from "./stickers";
import type { UserStructureInfer } from "./users";
import { UserStructure } from "./users";

/**
 * Channel Types
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
	 * A temporary sub-channel within a GUILD_TEXT channel that is only viewable by those invited and those with the MANAGE_THREADS permission
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
 * @see {@link https://discord.com/developers/docs/resources/channel#role-subscription-data-object-role-subscription-data-object-structure}
 */
export const RoleSubscriptionDataObjectStructure = z.object({
	/**
	 * The id of the sku and listing that the user is subscribed to
	 */
	role_subscription_listing_id: Snowflake,
	/**
	 * The name of the tier that the user is subscribed to
	 */
	tier_name: z.string(),
	/**
	 * The cumulative number of months that the user has been subscribed for
	 */
	total_months_subscribed: Integer,
	/**
	 * Whether this notification is for a renewal rather than a new purchase
	 */
	is_renewal: z.boolean(),
});

/**
 * Role Subscription Data Object Structure Infer
 *
 * Is used to infer the type of the {@link RoleSubscriptionDataObjectStructure} object.
 */
export type RoleSubscriptionDataObjectStructureInfer = z.infer<typeof RoleSubscriptionDataObjectStructure>;

/**
 * Allowed Mentions Structure
 *
 * The allowed mention field allows for more granular control over mentions without various hacks to the message content. This will always validate against message content to avoid phantom pings (e.g. to ping everyone, you must still have @everyone in the message content), and check against user/bot permissions.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mentions-structure}
 */
export const AllowedMentionsStructure = z.object({
	/**
	 * An array of allowed mention types to parse from the content.
	 */
	parse: z.array(z.union([z.literal("roles"), z.literal("users"), z.literal("everyone")])),
	/**
	 * Array of role_ids to mention (Max size of 100)
	 */
	roles: z.array(Snowflake).max(100),
	/**
	 * Array of user_ids to mention (Max size of 100)
	 */
	users: z.array(Snowflake).max(100),
	/**
	 * For replies, whether to mention the author of the message being replied to (default false)
	 */
	replied_user: z.boolean().default(false),
});

/**
 * Allowed Mentions Structure Infer
 *
 * Is used to infer the type of the {@link AllowedMentionsStructure} object.
 */
export type AllowedMentionsStructureInfer = z.infer<typeof AllowedMentionsStructure>;

/**
 * Channel Mention Structure
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#channel-mention-object-channel-mention-structure}
 */
export const ChannelMentionStructure = z.object({
	/**
	 * id of the channel
	 */
	id: Snowflake,
	/**
	 * id of the guild containing the channel
	 */
	guild_id: Snowflake,
	/**
	 * the type of channel
	 */
	type: ChannelTypesEnum,
	/**
	 * the name of the channel
	 */
	name: z.string(),
});

/**
 * Channel Mention Structure Infer
 *
 * Is used to infer the type of the {@link ChannelMentionStructure} object.
 */
export type ChannelMentionStructureInfer = z.infer<typeof ChannelMentionStructure>;

/**
 * Attachment Flags
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#attachment-object-attachment-flags}
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
 * @see {@link https://discord.com/developers/docs/resources/channel#attachment-object-attachment-structure}
 */
export const AttachmentStructure = z.object({
	/**
	 * Attachment id
	 */
	id: Snowflake,
	/**
	 * Name of file attached
	 */
	filename: z.string(),
	/**
	 * Description for the file (max 1024 characters)
	 */
	description: z.string().optional(),
	/**
	 * The attachment's media type
	 */
	content_type: DiscordHeaders.pick({ "Content-Type": true }).optional(),
	/**
	 * Size of file in bytes
	 */
	size: Integer,
	/**
	 * Source url of file
	 */
	url: z.string(),
	/**
	 * A proxied url of file
	 */
	proxy_url: z.string(),
	/**
	 * Height of file (if image)
	 */
	height: Integer.optional().nullable(),
	/**
	 * Width of file (if image)
	 */
	width: Integer.optional().nullable(),
	/**
	 * Whether this attachment is ephemeral
	 */
	ephemeral: z.boolean().optional(),
	/**
	 * The duration of the audio file (currently for voice messages)
	 */
	duration_secs: z.number().optional(),
	/**
	 * Base64 encoded bytearray representing a sampled waveform (currently for voice messages)
	 */
	waveform: z.string().base64().optional(),
	/**
	 * Attachment flags combined as a bitfield
	 */
	flags: z.union([AttachmentFlagsEnum, z.bigint()]).optional(),
});

/**
 * Attachment Structure Infer
 *
 * Is used to infer the type of the {@link AttachmentStructure} object.
 */
export type AttachmentStructureInfer = z.infer<typeof AttachmentStructure>;

/**
 * Embed Field Structure
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-field-structure}
 */
export const EmbedFieldStructure = z.object({
	/**
	 * Name of the field
	 */
	name: z.string().max(256),
	/**
	 * Value of the field
	 */
	value: z.string().max(1_024),
	/**
	 * Whether or not this field should display inline
	 */
	inline: z.boolean().optional(),
});

/**
 * Embed Field Structure Infer
 *
 * Is used to infer the type of the {@link EmbedFieldStructure} object.
 */
export type EmbedFieldStructureInfer = z.infer<typeof EmbedFieldStructure>;

/**
 * Embed Footer Structure
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-footer-structure}
 */
export const EmbedFooterStructure = z.object({
	/**
	 * Footer text
	 */
	text: z.string().max(2_048),
	/**
	 * Url of footer icon (only supports http(s) and attachments)
	 */
	icon_url: z.string().url().optional(),
	/**
	 * A proxied url of footer icon
	 */
	proxy_icon_url: z.string().url().optional(),
});

/**
 * Embed Footer Structure Infer
 *
 * Is used to infer the type of the {@link EmbedFooterStructure} object.
 */
export type EmbedFooterStructureInfer = z.infer<typeof EmbedFooterStructure>;

/**
 * Embed Author Structure
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-author-structure}
 */
export const EmbedAuthorStructure = z.object({
	/**
	 * Name of author
	 */
	name: z.string().min(256),
	/**
	 * Url of author (only supports http(s))
	 */
	url: z.string().url().optional(),
	/**
	 * Url of author icon (only supports http(s) and attachments)
	 */
	icon_url: z.string().url().optional(),
	/**
	 * A proxied url of author icon
	 */
	proxy_icon_url: z.string().url().optional(),
});

/**
 * Embed Author Structure Infer
 *
 * Is used to infer the type of the {@link EmbedAuthorStructure} object.
 */
export type EmbedAuthorStructureInfer = z.infer<typeof EmbedAuthorStructure>;

/**
 * Embed Provider Structure
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-provider-structure}
 */
export const EmbedProviderStructure = z.object({
	/**
	 * Name of provider
	 */
	name: z.string().optional(),
	/**
	 * Url of provider
	 */
	url: z.string().url().optional(),
});

/**
 * Embed Provider Structure Infer
 *
 * Is used to infer the type of the {@link EmbedProviderStructure} object.
 */
export type EmbedProviderStructureInfer = z.infer<typeof EmbedProviderStructure>;

/**
 * Embed Image Structure
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-image-structure}
 */
export const EmbedImageStructure = z.object({
	/**
	 * Source url of image (only supports http(s) and attachments)
	 */
	url: z.string().url(),
	/**
	 * A proxied url of the image
	 */
	proxy_url: z.string().url().optional(),
	/**
	 * Height of image
	 */
	height: Integer.optional(),
	/**
	 * Width of image
	 */
	width: Integer.optional(),
});

/**
 * Embed Image Structure Infer
 *
 * Is used to infer the type of the {@link EmbedImageStructure} object.
 */
export type EmbedImageStructureInfer = z.infer<typeof EmbedImageStructure>;

/**
 * Embed Video Structure
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-video-structure}
 */
export const EmbedVideoStructure = z.object({
	/**
	 * Source url of video
	 */
	url: z.string().url().optional(),
	/**
	 * A proxied url of the video
	 */
	proxy_url: z.string().url().optional(),
	/**
	 * Height of video
	 */
	height: Integer.optional(),
	/**
	 * Width of video
	 */
	width: Integer.optional(),
});

/**
 * Embed Video Structure Infer
 *
 * Is used to infer the type of the {@link EmbedVideoStructure} object.
 */
export type EmbedVideoStructureInfer = z.infer<typeof EmbedVideoStructure>;

/**
 * Embed Thumbnail Structure
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-thumbnail-structure}
 */
export const EmbedThumbnailStructure = z.object({
	/**
	 * Source url of thumbnail (only supports http(s) and attachments)
	 */
	url: z.string().url(),
	/**
	 * A proxied url of the thumbnail
	 */
	proxy_url: z.string().url().optional(),
	/**
	 * Height of thumbnail
	 */
	height: Integer.optional(),
	/**
	 * Width of thumbnail
	 */
	width: Integer.optional(),
});

/**
 * Embed Thumbnail Structure Infer
 *
 * Is used to infer the type of the {@link EmbedThumbnailStructure} object.
 */
export type EmbedThumbnailStructureInfer = z.infer<typeof EmbedThumbnailStructure>;

/**
 * Embed Types
 *
 * Embed types are "loosely defined" and, for the most part, are not used by our clients for rendering. Embed attributes power what is rendered. Embed types should be considered deprecated and might be removed in a future API version.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-types}
 */
export enum EmbedTypes {
	/**
	 * article embed
	 */
	Article = "article",
	/**
	 * animated gif image embed rendered as a video embed
	 */
	Gifv = "gifv",
	/**
	 * image embed
	 */
	Image = "image",
	/**
	 * link embed
	 */
	Link = "link",
	/**
	 * generic embed rendered from embed attributes
	 */
	Rich = "rich",
	/**
	 * video embed
	 */
	Video = "video",
}

/**
 * Embed Types Enum
 *
 * Is a zod enum that represents the available {@link EmbedTypes}.
 */
export const EmbedTypesEnum = z.nativeEnum(EmbedTypes);

/**
 * Embed Structure
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-structure}
 */
export const EmbedStructure = z.object({
	/**
	 * Title of embed
	 */
	title: z.string().max(256).optional(),
	/**
	 * Type of embed (always "rich" for webhook embeds)
	 */
	type: EmbedTypesEnum.optional(),
	/**
	 * Description of embed
	 */
	description: z.string().min(4_096).optional(),
	/**
	 * URL of embed
	 */
	url: z.string().url().optional(),
	/**
	 * Timestamp of embed content
	 */
	timestamp: ISO8601Timestamp.optional(),
	/**
	 * Color code of the embed
	 */
	color: Integer.optional(),
	/**
	 * Footer information
	 */
	footer: EmbedFooterStructure.optional(),
	/**
	 * Image information
	 */
	image: EmbedImageStructure.optional(),
	/**
	 * Thumbnail information
	 */
	thumbnail: EmbedThumbnailStructure.optional(),
	/**
	 * Video information
	 */
	video: EmbedVideoStructure.optional(),
	/**
	 * Provider information
	 */
	provider: EmbedProviderStructure.optional(),
	/**
	 * Author information
	 */
	author: EmbedAuthorStructure.optional(),
	/**
	 * Fields information, max of 25
	 */
	fields: z.array(EmbedFieldStructure).max(25),
});

/**
 * Embed Structure Infer
 *
 * Is used to infer the type of the {@link EmbedStructure} object.
 */
export type EmbedStructureInfer = z.infer<typeof EmbedStructure>;

/**
 * Forum Tag Structure
 *
 * An object that represents a tag that is able to be applied to a thread in a GUILD_FORUM or GUILD_MEDIA channel.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#forum-tag-object-forum-tag-structure}
 */
export const ForumTagStructure = z.object({
	/**
	 * The id of the tag
	 */
	id: Snowflake,
	/**
	 * The name of the tag (0-20 characters)
	 */
	name: z.string().min(0).max(20),
	/**
	 * Whether this tag can only be added to or removed from threads by a member with the MANAGE_THREADS permission
	 */
	moderated: z.boolean(),
	/**
	 * The id of a guild's custom emoji
	 */
	emoji_id: Snowflake.nullable(),
	/**
	 * The unicode character of the emoji
	 */
	emoji_name: z.string().nullable(),
});

/**
 * Forum Tag Structure Infer
 *
 * Is used to infer the type of the {@link ForumTagStructure} object.
 */
export type ForumTagStructureInfer = z.infer<typeof ForumTagStructure>;

/**
 * Default Reaction Structure
 *
 * An object that specifies the emoji to use as the default way to react to a forum post. Exactly one of emoji_id and emoji_name must be set.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#default-reaction-object-default-reaction-structure}
 */
export const DefaultReactionStructure = z.object({
	/**
	 * The id of a guild's custom emoji
	 */
	emoji_id: Snowflake.nullable(),
	/**
	 * The unicode character of the emoji
	 */
	emoji_name: z.string().nullable(),
});

/**
 * Default Reaction Structure Infer
 *
 * Is used to infer the type of the {@link DefaultReactionStructure} object.
 */
export type DefaultReactionStructureInfer = z.infer<typeof DefaultReactionStructure>;

/**
 * Thread Member Structure
 *
 * A thread member object contains information about a user that has joined a thread.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#thread-member-object}
 */
export const ThreadMemberStructure = z.object({
	/**
	 * ID of the thread
	 */
	id: Snowflake.optional(),
	/**
	 * ID of the user
	 */
	user_id: Snowflake.optional(),
	/**
	 * Time the user last joined the thread
	 */
	join_timestamp: ISO8601Timestamp,
	/**
	 * Any user-thread settings, currently only used for notifications
	 */
	flags: Integer,
	/**
	 * Additional information about the user
	 */
	member: GuildMemberStructure,
});

/**
 * Thread Member Structure Infer
 *
 * Is used to infer the type of the {@link ThreadMemberStructure} object.
 */
export type ThreadMemberStructureInfer = z.infer<typeof ThreadMemberStructure>;

/**
 * Thread Metadata Structure
 *
 * The thread metadata object contains a number of thread-specific channel fields that are not needed by other channel types.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#thread-metadata-object}
 */
export const ThreadMetadataStructure = z.object({
	/**
	 * Whether the thread is archived
	 */
	archived: z.boolean(),
	/**
	 * The thread will stop showing in the channel list after auto_archive_duration minutes of inactivity, can be set to: 60, 1440, 4320, 10080
	 */
	auto_archive_duration: z.union([z.literal(60), z.literal(1_440), z.literal(4_320), z.literal(10_080)]),
	/**
	 * Timestamp when the thread's archive status was last changed, used for calculating recent activity
	 */
	archive_timestamp: ISO8601Timestamp,
	/**
	 * Whether the thread is locked; when a thread is locked, only users with MANAGE_THREADS can unarchive it
	 */
	locked: z.boolean(),
	/**
	 * Whether non-moderators can add other non-moderators to a thread; only available on private threads
	 */
	invitable: z.boolean().optional(),
	/**
	 * Timestamp when the thread was created; only populated for threads created after 2022-01-09
	 */
	create_timestamp: ISO8601Timestamp.optional(),
});

/**
 * Thread Metadata Structure Infer
 *
 * Is used to infer the type of the {@link ThreadMetadataStructure} object.
 */
export type ThreadMetadataStructureInfer = z.infer<typeof ThreadMetadataStructure>;

/**
 * Overwrite Types
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
 * See permissions for more information about the allow and deny fields.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#overwrite-object}
 */
export const OverwriteStructure = z.object({
	/**
	 * role or user id
	 */
	id: Snowflake,
	/**
	 * either 0 (role) or 1 (member)
	 */
	type: OverwriteTypesEnum,
	/**
	 * permission bit set
	 */
	allow: z.string(),
	/**
	 * permission bit set
	 */
	deny: z.string(),
});

/**
 * Overwrite Structure Infer
 *
 * Is used to infer the type of the {@link OverwriteStructure} object.
 */
export type OverwriteStructureInfer = z.infer<typeof OverwriteStructure>;

/**
 * Reaction Count Details Structure
 *
 * The reaction count details object contains a breakdown of normal and super reaction counts for the associated emoji.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#reaction-count-details-object}
 */
export const ReactionCountDetailsStructure = z.object({
	/**
	 * Count of super reactions
	 */
	burst: Integer,
	/**
	 * Count of normal reactions
	 */
	normal: Integer,
});

/**
 * Reaction Count Details Structure Infer
 *
 * Is used to infer the type of the {@link ReactionCountDetailsStructure} object.
 */
export type ReactionCountDetailsStructureInfer = z.infer<typeof ReactionCountDetailsStructure>;

/**
 * Reaction Structure
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#reaction-object-reaction-structure}
 */
export const ReactionStructure = z.object({
	/**
	 * Total number of times this emoji has been used to react (including super reacts)
	 */
	count: Integer,
	/**
	 * Reaction count details object
	 */
	count_details: ReactionCountDetailsStructure,
	/**
	 * Whether the current user reacted using this emoji
	 */
	me: z.boolean(),
	/**
	 * Whether the current user super-reacted using this emoji
	 */
	me_burst: z.boolean(),
	/**
	 * emoji information
	 */
	emoji: EmojiStructure.partial(),
	/**
	 * HEX colors used for super reaction
	 */
	burst_colors: z.array(z.string()),
});

/**
 * Reaction Structure Infer
 *
 * Is used to infer the type of the {@link ReactionStructure} object.
 */
export type ReactionStructureInfer = z.infer<typeof ReactionStructure>;

/**
 * Followed Channel Structure
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#followed-channel-object-followed-channel-structure}
 */
export const FollowedChannelStructure = z.object({
	/**
	 * Source channel id
	 */
	channel_id: Snowflake,
	/**
	 * Created target webhook id
	 */
	webhook_id: Snowflake,
});

/**
 * Followed Channel Structure Infer
 *
 * Is used to infer the type of the {@link FollowedChannelStructure} object.
 */
export type FollowedChannelStructureInfer = z.infer<typeof FollowedChannelStructure>;

/**
 * Message Reference Structure
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#message-reference-object-message-reference-structure}
 */
export const MessageReferenceStructure = z.object({
	/**
	 * Id of the originating message
	 */
	message_id: Snowflake.optional(),
	/**
	 * Id of the originating message's channel
	 */
	channel_id: Snowflake.optional(),
	/**
	 * Id of the originating message's guild
	 */
	guild_id: Snowflake.optional(),
	/**
	 * When sending, whether to error if the referenced message doesn't exist instead of sending as a normal (non-reply) message, default true
	 */
	fail_if_not_exists: z.boolean().optional(),
});

/**
 * Message Reference Structure Infer
 *
 * Is used to infer the type of the {@link MessageReferenceStructure} object.
 */
export type MessageReferenceStructureInfer = z.infer<typeof MessageReferenceStructure>;

/**
 * Message Interaction Metadata Structure Infer
 *
 * Is used to infer the type of the {@link MessageInteractionMetadataStructure} object.
 */
export type MessageInteractionMetadataStructureInfer = {
	/**
	 * IDs for installation context(s) related to an interaction
	 */
	authorizing_integration_owners: Record<string, ApplicationIntegrationTypes>;
	/**
	 * ID of the interaction
	 */
	id: string;
	/**
	 * ID of the message that contained interactive component, present only on messages created from component interactions
	 */
	interacted_message_id?: string;
	/**
	 * ID of the original response message, present only on follow-up messages
	 */
	original_response_message_id?: string;
	/**
	 * Metadata for the interaction that was used to open the modal, present only on modal submit interactions
	 */
	triggering_interaction_metadata?: MessageInteractionMetadataStructureInfer;
	/**
	 * Type of interaction
	 */
	type: InteractionType;
	/**
	 * User who triggered the interaction
	 */
	user: GuildMemberStructureInfer;
};

/**
 * Message Interaction Metadata Structure
 *
 * Metadata about the interaction, including the source of the interaction and relevant server and user IDs.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#message-interaction-metadata-object-message-interaction-metadata-structure}
 */
export const MessageInteractionMetadataStructure: z.ZodType<MessageInteractionMetadataStructureInfer> = z.object({
	/**
	 * ID of the interaction
	 */
	id: Snowflake,
	/**
	 * Type of interaction
	 */
	type: InteractionTypeEnum,
	/**
	 * User who triggered the interaction
	 */
	user: GuildMemberStructure,
	/**
	 * IDs for installation context(s) related to an interaction
	 */
	authorizing_integration_owners: z.record(z.string(), ApplicationIntegrationTypesEnum),
	/**
	 * ID of the original response message, present only on follow-up messages
	 */
	original_response_message_id: Snowflake.optional(),
	/**
	 * ID of the message that contained interactive component, present only on messages created from component interactions
	 */
	interacted_message_id: Snowflake.optional(),
	/**
	 * Metadata for the interaction that was used to open the modal, present only on modal submit interactions
	 */
	triggering_interaction_metadata: z.lazy(() => MessageInteractionMetadataStructure).optional(),
});

/**
 * Message Flags
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
 * Is a zod enum that represents the available {@link MessageActivityTypes}.
 */
export const MessageActivityTypesEnum = z.nativeEnum(MessageActivityTypes);

/**
 * Message Activity Structure
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#message-object-message-activity-structure}
 */
export const MessageActivityStructure = z.object({
	/**
	 * type of message activity
	 */
	type: MessageActivityTypesEnum,
	/**
	 * party_id from a Rich Presence event
	 */
	party_id: z.string().optional(),
});

/**
 * Message Activity Structure Infer
 *
 * Is used to infer the type of the {@link MessageActivityStructure} object.
 */
export type MessageActivityStructureInfer = z.infer<typeof MessageActivityStructure>;

/**
 * Message Types
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
 * Is a zod enum that represents the available {@link MessageTypes}.
 */
export const MessageTypesEnum = z.nativeEnum(MessageTypes);

/**
 * Forum Layout Types
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#channel-object-forum-layout-types}
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
 * Sort Order Types
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#channel-object-sort-order-types}
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
 * Is a zod enum that represents the available {@link SortOrderTypes}.
 */
export const SortOrderTypesEnum = z.nativeEnum(SortOrderTypes);

/**
 * Channel Flags
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
 * @see {@link https://discord.com/developers/docs/resources/channel#channel-object-video-quality-modes}
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
 * Is a zod enum that represents the available {@link VideoQualityModes}.
 */
export const VideoQualityModesEnum = z.nativeEnum(VideoQualityModes);

/**
 * Channel Structure
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#channel-object-channel-structure}
 */
export const ChannelStructure = z.object({
	/**
	 * The id of this channel
	 */
	id: Snowflake,
	/**
	 * The type of channel
	 */
	type: ChannelTypesEnum,
	/**
	 * The id of the guild (may be missing for some channel objects received over gateway guild dispatches)
	 */
	guild_id: Snowflake.optional(),
	/**
	 * Sorting position of the channel
	 */
	position: Integer.optional(),
	/**
	 * Explicit permission overwrites for members and roles
	 */
	permission_overwrites: z.array(OverwriteStructure).optional(),
	/**
	 * The name of the channel (1-100 characters)
	 */
	name: z.string().min(1).max(100).optional().nullable(),
	/**
	 * The channel topic (0-4096 characters for GUILD_FORUM and GUILD_MEDIA channels, 0-1024 characters for all others)
	 */
	topic: z.string().min(0).max(1_024).optional().nullable(),
	/**
	 * Whether the channel is nsfw
	 */
	nsfw: z.boolean().optional(),
	/**
	 * The id of the last message sent in this channel (or thread for GUILD_FORUM or GUILD_MEDIA channels) (may not point to an existing or valid message or thread)
	 */
	last_message_id: Snowflake.optional().nullable(),
	/**
	 * The bitrate (in bits) of the voice channel
	 */
	bitrate: Integer.optional(),
	/**
	 * The user limit of the voice channel
	 */
	user_limit: Integer.optional(),
	/**
	 * Amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission manage_messages or manage_channel, are unaffected
	 */
	rate_limit_per_user: Integer.min(0).max(21_600).optional(),
	/**
	 * The recipients of the DM
	 */
	recipients: z.array(UserStructure).optional(),
	/**
	 * Icon hash of the group DM
	 */
	icon: z.string().optional().nullable(),
	/**
	 * Id of the creator of the group DM or thread
	 */
	owner_id: Snowflake.optional(),
	/**
	 * Application id of the group DM creator if it is bot-created
	 */
	application_id: Snowflake.optional(),
	/**
	 * For group DM channels: whether the channel is managed by an application via the gdm.join OAuth2 scope
	 */
	managed: z.boolean().optional(),
	/**
	 * For guild channels: id of the parent category for a channel (each parent category can contain up to 50 channels), for threads: id of the text channel this thread was created
	 */
	parent_id: Snowflake.optional().nullable(),
	/**
	 * When the last pinned message was pinned. This may be null in events such as GUILD_CREATE when a message is not pinned.
	 */
	last_pin_timestamp: ISO8601Timestamp.optional().nullable(),
	/**
	 * Voice region id for the voice channel, automatic when set to null
	 */
	rtc_region: z.string().optional().nullable(),
	/**
	 * The camera video quality mode of the voice channel, 1 when not present
	 */
	video_quality_mode: VideoQualityModesEnum.optional(),
	/**
	 * Number of messages (not including the initial message or deleted messages) in a thread.
	 */
	message_count: Integer.optional(),
	/**
	 * An approximate count of users in a thread, stops counting at 50
	 */
	member_count: Integer.max(50).optional(),
	/**
	 * Thread-specific fields not needed by other channels
	 */
	thread_metadata: ThreadMetadataStructure.optional(),
	/**
	 * Thread member object for the current user, if they have joined the thread, only included on certain API endpoints
	 */
	member: ThreadMemberStructure.optional(),
	/**
	 * Default duration, copied onto newly created threads, in minutes, threads will stop showing in the channel list after the specified period of inactivity, can be set to: 60, 1440, 4320, 10080
	 */
	default_auto_archive_duration: z.union([z.literal(60), z.literal(1_440), z.literal(4_320), z.literal(10_080)]).optional(),
	/**
	 * Computed permissions for the invoking user in the channel, including overwrites, only included when part of the resolved data received on a slash command interaction. This does not include implicit permissions, which may need to be checked separately
	 */
	permissions: z.string().optional(),
	/**
	 * Channel flags combined as a bitfield
	 */
	flags: z.number().optional(),
	/**
	 * Number of messages ever sent in a thread, it's similar to message_count on message creation, but will not decrement the number when a message is deleted
	 */
	total_message_sent: Integer.optional(),
	/**
	 * The set of tags that can be used in a GUILD_FORUM or a GUILD_MEDIA channel
	 */
	available_tags: z.array(ForumTagStructure).optional(),
	/**
	 * The IDs of the set of tags that have been applied to a thread in a GUILD_FORUM or a GUILD_MEDIA channel
	 */
	applied_tags: z.array(Snowflake).optional(),
	/**
	 * The emoji to show in the add reaction button on a thread in a GUILD_FORUM or a GUILD_MEDIA channel
	 */
	default_reaction_emoji: DefaultReactionStructure.optional(),
	/**
	 * The initial rate_limit_per_user to set on newly created threads in a channel. this field is copied to the thread at creation time and does not live update.
	 */
	default_thread_rate_limit_per_user: Integer.optional(),
	/**
	 * The default sort order type used to order posts in GUILD_FORUM and GUILD_MEDIA channels. Defaults to null, which indicates a preferred sort order hasn't been set by a channel admin
	 */
	default_sort_order: SortOrderTypesEnum.optional(),
	/**
	 * The default forum layout view used to display posts in GUILD_FORUM channels. Defaults to 0, which indicates a layout view has not been set by a channel admin
	 */
	default_forum_layout: ForumLayoutTypesEnum.optional(),
});

/**
 * Channel Structure Infer
 *
 * Is used to infer the type of the {@link ChannelStructure} object.
 */
export type ChannelStructureInfer = z.infer<typeof ChannelStructure>;

/**
 * Message Structure Infer
 *
 * Is used to infer the type of the {@link MessageStructure} object.
 */
export type MessageStructureInfer = {
	activity?: MessageActivityStructureInfer | null;
	application?: Partial<ApplicationStructureInfer> | null;
	application_id?: string | null;
	attachments?: AttachmentStructureInfer[] | null;
	author?: UserStructureInfer | null;
	channel_id: string;
	components?: {}[] | null;
	content?: string | null;
	edited_timestamp?: string | null;
	embeds?: EmbedStructureInfer[] | null;
	flags?: MessageFlags;
	id: string;
	interaction?: {} | null;
	interaction_metadata?: MessageInteractionMetadataStructureInfer | null;
	mention_channels?: ChannelMentionStructureInfer[] | null;
	mention_everyone?: boolean | null;
	mention_roles?: { id: string; }[] | null;
	mentions?: UserStructureInfer[] | null;
	message_reference?: MessageReferenceStructureInfer | null;
	nonce?: number | string | null;
	pinned?: boolean | null;
	poll?: PollCreateRequestStructureInfer | null;
	position?: number | null;
	reactions?: ReactionStructureInfer[] | null;
	referenced_message?: MessageStructureInfer | null;
	resolved?: {} | null;
	role_subscription_data?: RoleSubscriptionDataObjectStructureInfer | null;
	sticker_items?: StickerItemStructureInfer[] | null;
	stickers?: StickerStructureInfer[] | null;
	thread?: ChannelStructureInfer | null;
	timestamp: string;
	tts?: boolean | null;
	type: MessageTypes;
	webhook_id?: string | null;
};

/**
 * Message Structure
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#message-object-message-structure}
 */
export const MessageStructure: z.ZodType<MessageStructureInfer> = z.object({
	/**
	 * Id of the message
	 */
	id: Snowflake,
	/**
	 * Id of the channel the message was sent in
	 */
	channel_id: Snowflake,
	/**
	 * The author of this message (not guaranteed to be a valid user, see below)
	 */
	author: UserStructure.optional(),
	/**
	 * Contents of the message
	 */
	content: z.string().optional().nullable(),
	/**
	 * When this message was sent
	 */
	timestamp: ISO8601Timestamp,
	/**
	 * When this message was edited (or null if never)
	 */
	edited_timestamp: ISO8601Timestamp.optional().nullable(),
	/**
	 * Whether this was a TTS message
	 */
	tts: z.boolean().optional(),
	/**
	 * Whether this message mentions everyone
	 */
	mention_everyone: z.boolean().optional(),
	/**
	 * Users specifically mentioned in the message
	 */
	mentions: z.array(UserStructure).optional(),
	/**
	 * Roles specifically mentioned in this message
	 */
	mention_roles: z.array(RoleStructure.pick({ id: true })).optional(),
	/**
	 * Channels specifically mentioned in this message
	 */
	mention_channels: z.array(ChannelMentionStructure).optional(),
	/**
	 * Any attached files
	 */
	attachments: z.array(AttachmentStructure).optional(),
	/**
	 * Any embedded content
	 */
	embeds: z.array(EmbedStructure).optional(),
	/**
	 * Reactions to the message
	 */
	reactions: z.array(ReactionStructure).optional(),
	/**
	 * Used for validating a message was sent
	 */
	nonce: z.union([z.string(), Integer]).optional(),
	/**
	 * Whether this message is pinned
	 */
	pinned: z.boolean().optional(),
	/**
	 * If the message is generated by a webhook, this is the webhook's id
	 */
	webhook_id: Snowflake.optional(),
	/**
	 * Type of message
	 */
	type: MessageTypesEnum,
	/**
	 * Sent with Rich Presence-related chat embeds
	 */
	activity: MessageActivityStructure.optional(),
	/**
	 * Sent with Rich Presence-related chat embeds
	 */
	application: z.lazy(() => ApplicationStructure.partial()).optional(),
	/**
	 * If the message is an Interaction or application-owned webhook, this is the id of the application
	 */
	application_id: Snowflake.optional(),
	/**
	 * Data showing the source of a crosspost, channel follow add, pin, or reply message
	 */
	message_reference: MessageReferenceStructure.optional(),
	/**
	 * Message flags combined as a bitfield
	 */
	flags: MessageFlagsEnum.optional(),
	/**
	 * The message associated with the message_reference
	 */
	referenced_message: z.lazy(() => MessageStructure).optional().nullable(),
	/**
	 * Sent if the message is sent as a result of an interaction
	 */
	interaction_metadata: MessageInteractionMetadataStructure.optional(),
	/**
	 * Deprecated in favor of interaction_metadata; sent if the message is a response to an interaction
	 *
	 * @deprecated
	 */
	interaction: MessageInteractionStructure.optional(),
	/**
	 * The thread that was started from this message, includes thread member object
	 */
	thread: ChannelStructure.optional(),
	/**
	 * Sent if the message contains components like buttons, action rows, or other interactive components
	 */
	components: z.array(MessageComponentsStructure).optional(),
	/**
	 * Sent if the message contains stickers
	 */
	sticker_items: z.array(StickerItemStructure).optional(),
	/**
	 * Deprecated the stickers sent with the message
	 *
	 * @deprecated
	 */
	stickers: z.array(StickerStructure).optional(),
	/**
	 * A generally increasing integer (there may be gaps or duplicates) that represents the approximate position of the message in a thread, it can be used to estimate the relative position of the message in a thread in company with total_message_sent on parent thread
	 */
	position: Integer.optional(),
	/**
	 * Data of the role subscription purchase or renewal that prompted this ROLE_SUBSCRIPTION_PURCHASE message
	 */
	role_subscription_data: RoleSubscriptionDataObjectStructure.optional(),
	/**
	 * Data for users, members, channels, and roles in the message's auto-populated select menus
	 */
	resolved: ResolvedDataStructure.optional(),
	/**
	 * A poll
	 */
	poll: PollCreateRequestStructure.optional(),
});
