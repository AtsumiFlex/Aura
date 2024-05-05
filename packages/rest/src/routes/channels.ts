import type {
	ChannelStructureInfer,
	FollowedChannelStructureInfer,
	InviteMetadataStructureInfer,
	InviteStructureInfer,
	MessageStructureInfer,
	SnowflakeInfer,
	ThreadMemberStructureInfer,
	UserStructureInfer,
} from "@aurajs/core";
import {
	AllowedMentionsStructure,
	AttachmentStructure,
	ChannelFlagsEnum,
	ChannelStructure,
	ChannelTypes,
	ChannelTypesEnum,
	DefaultReactionStructure,
	EmbedStructure,
	ForumLayoutTypesEnum,
	ForumTagStructure,
	GuildMemberStructure,
	Integer,
	InviteTargetTypesEnum,
	ISO8601,
	MessageComponentsStructure,
	MessageFlagsEnum,
	MessageReferenceStructure,
	OverwriteStructure,
	PollCreateRequestObjectStructure,
	Snowflake,
	SortOrderTypesEnum,
} from "@aurajs/core";
import { z } from "zod";
import type { RestRequestOptions } from "../globals/rest";

/**
 * Get Channel
 *
 * Get a channel by ID. Returns a channel object. If the channel is a thread, a thread member object is included in the returned result.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#get-channel}
 */
export function GetChannel<T extends ChannelStructureInfer | ThreadMemberStructureInfer>(channelId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/channels/${channelId}`,
		method: "GET",
	};
}

/**
 * JSON Modify Channel (Group DM)
 *
 * Modify the settings of a group DM channel. Only the owner of the channel can modify it.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#modify-channel}
 */
export const JSONModifyChannelGroupDM = z.object({
	name: z.string().min(1).max(100).optional(),
	icon: z.string().optional(),
});

/**
 * JSON Modify Channel Infer (Group DM)
 *
 * The inferred type of the {@link JSONModifyChannelGroupDM} zod object.
 */
export type JSONModifyChannelGroupDMInfer = z.infer<typeof JSONModifyChannelGroupDM>;

/**
 * JSON Modify Channel (Guild Channel)
 *
 * Modify the settings of a channel. Requires the `MANAGE_CHANNELS` permission for the guild. Returns the updated channel on success. Fires a Channel Update Gateway event.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#modify-channel}
 */
export const JSONModifyChannelGuildChannel = z.object({
	name: z.string().min(1).max(100).optional(),
	type: ChannelTypesEnum.optional(),
	position: Integer.optional().nullable(),
	topic: z.string().min(0).max(1_024).optional().nullable(),
	nsfw: z.boolean().optional().nullable(),
	rate_limit_per_user: Integer.min(0).max(21_600).optional().nullable(),
	bitrate: Integer.min(8_000).optional().nullable(),
	user_limit: Integer.max(99).optional().nullable(),
	permission_overwrites: z.array(OverwriteStructure).optional().nullable(),
	parent_id: Snowflake.optional().nullable(),
	rtc_region: z.string().optional().nullable(),
	video_quality_mode: z.number().int().optional(),
	default_auto_archive_duration: z.number().int().optional(),
	flags: ChannelFlagsEnum.optional(),
	available_tags: z.array(ForumTagStructure).optional(),
	default_reaction_emoji: DefaultReactionStructure.optional(),
	default_thread_rate_limit_per_user: z.number().int().optional(),
	default_sort_order: SortOrderTypesEnum.optional(),
	default_forum_layout: ForumLayoutTypesEnum.optional(),
});

/**
 * JSON Modify Channel Infer (Guild Channel)
 *
 * The inferred type of the {@link JSONModifyChannelGuildChannel} zod object.
 */
export type JSONModifyChannelGuildChannelInfer = z.infer<typeof JSONModifyChannelGuildChannel>;

/**
 * JSON Modify Channel (Thread)
 *
 * Modify the settings of a thread. Requires the `MANAGE_THREADS` permission. Returns the updated thread on success. Fires a Thread Update Gateway event.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#modify-channel}
 */
export const JSONModifyChannelThread = z.object({
	name: z.string().min(1).max(100).optional(),
	archived: z.boolean().optional(),
	auto_archive_duration: Integer.optional(),
	locked: z.boolean().optional(),
	invitable: z.boolean().optional(),
	rate_limit_per_user: Integer.optional(),
	flags: ChannelFlagsEnum.optional(),
	applied_tags: z.array(Snowflake).optional(),
});

/**
 * JSON Modify Channel Infer (Thread)
 *
 * The inferred type of the {@link JSONModifyChannelThread} zod object.
 */
export type JSONModifyChannelThreadInfer = z.infer<typeof JSONModifyChannelThread>;

/**
 * Modify Channel
 *
 * Update a channel's settings. Requires the `MANAGE_CHANNELS` permission for the guild. Returns the updated channel on success. Fires a Channel Update Gateway event.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#modify-channel}
 */
export function ModifyChannel<T extends ChannelStructureInfer>(channelId: SnowflakeInfer, channelType: ChannelTypes, json: JSONModifyChannelGroupDMInfer | JSONModifyChannelGuildChannelInfer | JSONModifyChannelThreadInfer): RestRequestOptions<T> {
	let body: unknown;
	if (channelType === ChannelTypes.GuildText || channelType === ChannelTypes.GuildVoice || channelType === ChannelTypes.GuildCategory) {
		body = JSONModifyChannelGuildChannel.parse(json);
	} else if (channelType === ChannelTypes.GroupDM) {
		body = JSONModifyChannelGroupDM.parse(json);
	} else if (channelType === ChannelTypes.AnnouncementThread || channelType === ChannelTypes.PrivateThread || channelType === ChannelTypes.PublicThread) {
		body = JSONModifyChannelThread.parse(json);
	}

	return {
		url: `/channels/${channelId}`,
		method: "PATCH",
		body,
	};
}

/**
 * Delete/Close Channel
 *
 * Delete a channel, or close a private message. Requires the `MANAGE_CHANNELS` permission for the guild. Deleting a category does not delete its child channels; they will have their parent_id removed and a Channel Update Gateway event will fire for each of them. Returns a channel on success, and a 204 No Content on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#deleteclose-channel}
 */
export function DeleteChannel<T extends ChannelStructureInfer>(channelId: SnowflakeInfer, reason: string): RestRequestOptions<T> {
	return {
		url: `/channels/${channelId}`,
		method: "DELETE",
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * Query Get Channel Messages
 *
 * Returns the messages for a channel. If operating on a guild channel, this endpoint requires the `VIEW_CHANNEL` permission to be present on the current user. If the current user is missing the `READ_MESSAGE_HISTORY` permission in the channel, then this will return no messages (since they cannot read the message history). Returns an array of message objects on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#get-channel-messages}
 */
export const QueryGetChannelMessages = z.object({
	around: Snowflake.optional(),
	before: Snowflake.optional(),
	after: Snowflake.optional(),
	limit: Integer.min(1).max(100).default(50).optional(),
});

/**
 * Query Get Channel Messages Infer
 *
 * The inferred type of the {@link QueryGetChannelMessages} zod object.
 */
export type QueryGetChannelMessagesInfer = z.infer<typeof QueryGetChannelMessages>;

/**
 * Get Channel Messages
 *
 * Returns the messages for a channel. If operating on a guild channel, this endpoint requires the `VIEW_CHANNEL` permission to be present on the current user. If the current user is missing the `READ_MESSAGE_HISTORY` permission in the channel, then this will return no messages (since they cannot read the message history). Returns an array of message objects on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#get-channel-messages}
 */
export function GetChannelMessages<T extends MessageStructureInfer[]>(channelId: SnowflakeInfer, query: QueryGetChannelMessagesInfer): RestRequestOptions<T> {
	return {
		url: `/channels/${channelId}/messages`,
		method: "GET",
		query,
	};
}

/**
 * Get Channel Message
 *
 * Returns a specific message in the channel. If operating on a guild channel, this endpoint requires the `READ_MESSAGE_HISTORY` permission to be present on the current user.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#get-channel-message}
 */
export function GetChannelMessage<T extends MessageStructureInfer>(channelId: SnowflakeInfer, messageId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/channels/${channelId}/messages/${messageId}`,
		method: "GET",
	};
}

/**
 * JSON Create Message
 *
 * Create a new message in a channel. Returns a message object. The provided content can be a string, file object, or embed object. If the `content` is an object, this requires the `EMBED_LINKS` permission. If the `content` is a file, the `file` object must be provided with the `content` type. Fires a Message Create Gateway event. If operating on a guild channel, this endpoint requires the `SEND_MESSAGES` permission to be present on the current user.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#create-message}
 */
export const JSONCreateMessage = z.object({
	content: z.string().max(2_000).optional(),
	nonce: z.union([Integer, z.string()]).optional(),
	tts: z.boolean().optional(),
	embeds: z.array(EmbedStructure).optional(),
	allowed_mentions: AllowedMentionsStructure.optional(),
	message_reference: MessageReferenceStructure.optional(),
	components: z.array(MessageComponentsStructure).optional(),
	sticker_ids: z.array(Snowflake).optional(),
	files: z.any().optional(),
	payload_json: z.string().optional(),
	attachments: z.array(AttachmentStructure).optional(),
	flags: MessageFlagsEnum.optional(),
	enforce_nonce: z.boolean().optional(),
	poll: PollCreateRequestObjectStructure.optional(),
});

/**
 * JSON Create Message Infer
 *
 * The inferred type of the {@link JSONCreateMessage} zod object.
 */
export type JSONCreateMessageInfer = z.infer<typeof JSONCreateMessage>;

/**
 * Create Message
 *
 * Create a new message in a channel. Returns a message object. The provided content can be a string, file object, or embed object. If the `content` is an object, this requires the `EMBED_LINKS` permission. If the `content` is a file, the `file` object must be provided with the `content` type. Fires a Message Create Gateway event. If operating on a guild channel, this endpoint requires the `SEND_MESSAGES` permission to be present on the current user.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#create-message}
 */
export function CreateMessage<T extends MessageStructureInfer>(channelId: SnowflakeInfer, json: JSONCreateMessageInfer): RestRequestOptions<T> {
	return {
		url: `/channels/${channelId}/messages`,
		method: "POST",
		body: JSONCreateMessage.parse(json),
	};
}

/**
 * Crosspost Message
 *
 * Publishes a message in a News Channel to following channels. Returns a message object. Fires a Message Create Gateway event. If operating on a guild channel, this endpoint requires the `SEND_MESSAGES` permission to be present on the current user.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#crosspost-message}
 */
export function CrosspostMessage<T extends MessageStructureInfer>(channelId: SnowflakeInfer, messageId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/channels/${channelId}/messages/${messageId}/crosspost`,
		method: "POST",
	};
}

/**
 * Create Reaction
 *
 * Create a reaction for the message. This endpoint requires the `READ_MESSAGE_HISTORY` permission to be present on the current user. Additionally, if nobody else has reacted to the message using this emoji, this endpoint requires the `ADD_REACTIONS` permission to be present on the current user. Returns a 204 empty response on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#create-reaction}
 */
export function CreateReaction(channelId: SnowflakeInfer, messageId: SnowflakeInfer, emoji: string): RestRequestOptions<void> {
	return {
		url: `/channels/${channelId}/messages/${messageId}/reactions/${encodeURIComponent(emoji)}/@me`,
		method: "PUT",
	};
}

/**
 * Delete Own Reaction
 *
 * Delete a reaction the current user has made for the message. Returns a 204 empty response on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#delete-own-reaction}
 */
export function DeleteOwnReaction(channelId: SnowflakeInfer, messageId: SnowflakeInfer, emoji: string): RestRequestOptions<void> {
	return {
		url: `/channels/${channelId}/messages/${messageId}/reactions/${encodeURIComponent(emoji)}/@me`,
		method: "DELETE",
	};
}

/**
 * Delete User Reaction
 *
 * Delete another user's reaction to a message. This endpoint requires the `MANAGE_MESSAGES` permission to be present on the current user. Returns a 204 empty response on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#delete-user-reaction}
 */
export function DeleteUserReaction(channelId: SnowflakeInfer, messageId: SnowflakeInfer, emoji: string, userId: SnowflakeInfer): RestRequestOptions<void> {
	return {
		url: `/channels/${channelId}/messages/${messageId}/reactions/${encodeURIComponent(emoji)}/${userId}`,
		method: "DELETE",
	};
}

/**
 * Query Get Reactions
 *
 * Get a list of users that reacted with this emoji. Returns an array of user objects on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#get-reactions}
 */
export const QueryGetReactions = z.object({
	after: Snowflake.optional(),
	limit: Integer.min(1).max(100).default(25).optional(),
});

/**
 * Query Get Reactions Infer
 *
 * The inferred type of the {@link QueryGetReactions} zod object.
 */
export type QueryGetReactionsInfer = z.infer<typeof QueryGetReactions>;

/**
 * Get Reactions
 *
 * Get a list of users that reacted with this emoji. Returns an array of user objects on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#get-reactions}
 */
export function GetReactions<T extends UserStructureInfer[]>(channelId: SnowflakeInfer, messageId: SnowflakeInfer, emoji: string, query?: QueryGetReactionsInfer): RestRequestOptions<T> {
	return {
		url: `/channels/${channelId}/messages/${messageId}/reactions/${encodeURIComponent(emoji)}`,
		method: "GET",
		query: QueryGetReactions.parse(query),
	};
}

/**
 * Delete All Reactions
 *
 * Deletes all reactions on a message. This endpoint requires the `MANAGE_MESSAGES` permission to be present on the current user.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#delete-all-reactions}
 */
export function DeleteAllReactions(channelId: SnowflakeInfer, messageId: SnowflakeInfer): RestRequestOptions<void> {
	return {
		url: `/channels/${channelId}/messages/${messageId}/reactions`,
		method: "DELETE",
	};
}

/**
 * Delete All Reactions for Emoji
 *
 * Deletes all reactions for a given emoji on a message. This endpoint requires the `MANAGE_MESSAGES` permission to be present on the current user.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#delete-all-reactions-for-emoji}
 */
export function DeleteAllReactionsForEmoji(channelId: SnowflakeInfer, messageId: SnowflakeInfer, emoji: string): RestRequestOptions<void> {
	return {
		url: `/channels/${channelId}/messages/${messageId}/reactions/${encodeURIComponent(emoji)}`,
		method: "DELETE",
	};
}

/**
 * JSON Edit Message
 *
 * Edit a previously sent message. The fields `content`, `embeds`, `allowed_mentions`, and `flags` can be updated. If operating on a guild channel, this endpoint requires the `SEND_MESSAGES` permission to be present on the current user. Fires a Message Update Gateway event.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#edit-message}
 */
export const JSONEditMessage = z.object({
	content: z.string().max(2_000).optional(),
	embeds: z.array(EmbedStructure).optional(),
	allowed_mentions: AllowedMentionsStructure.optional(),
	flags: MessageFlagsEnum.optional(),
	components: z.array(MessageComponentsStructure).optional(),
	files: z.any().optional(),
	payload_json: z.string().optional(),
	attachments: z.array(AttachmentStructure).optional(),
});

/**
 * JSON Edit Message Infer
 *
 * The inferred type of the {@link JSONEditMessage} zod object.
 */
export type JSONEditMessageInfer = z.infer<typeof JSONEditMessage>;

/**
 * Edit Message
 *
 * Edit a previously sent message. The fields `content`, `embeds`, `allowed_mentions`, and `flags` can be updated. If operating on a guild channel, this endpoint requires the `SEND_MESSAGES` permission to be present on the current user. Fires a Message Update Gateway event.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#edit-message}
 */
export function EditMessage<T extends MessageStructureInfer>(channelId: SnowflakeInfer, messageId: SnowflakeInfer, json: JSONEditMessageInfer): RestRequestOptions<T> {
	return {
		url: `/channels/${channelId}/messages/${messageId}`,
		method: "PATCH",
		body: JSONEditMessage.parse(json),
	};
}

/**
 * Delete Message
 *
 * Delete a message. If operating on a guild channel and trying to delete a message that was not sent by the current user, this endpoint requires the `MANAGE_MESSAGES` permission. Returns a 204 empty response on success. Fires a Message Delete Gateway event.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#delete-message}
 */
export function DeleteMessage(channelId: SnowflakeInfer, messageId: SnowflakeInfer, reason: string): RestRequestOptions<void> {
	return {
		url: `/channels/${channelId}/messages/${messageId}`,
		method: "DELETE",
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * JSON Bulk Delete Messages
 *
 * Delete multiple messages in a single request. This endpoint can only be used on guild channels and requires the `MANAGE_MESSAGES` permission. Returns a 204 empty response on success. Fires multiple Message Delete Gateway events.
 */
export const JSONBulkDeleteMessages = z.object({ messages: z.array(Snowflake).min(2).max(200) });

/**
 * JSON Bulk Delete Messages Infer
 *
 * The inferred type of the {@link JSONBulkDeleteMessages} zod object.
 */
export type JSONBulkDeleteMessagesInfer = z.infer<typeof JSONBulkDeleteMessages>;

/**
 * Bulk Delete Messages
 *
 * Delete multiple messages in a single request. This endpoint can only be used on guild channels and requires the `MANAGE_MESSAGES` permission. Returns a 204 empty response on success. Fires multiple Message Delete Gateway events.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#bulk-delete-messages}
 */
export function BulkDeleteMessages(channelId: SnowflakeInfer, reason: string, json: JSONBulkDeleteMessagesInfer): RestRequestOptions<void> {
	return {
		url: `/channels/${channelId}/messages/bulk-delete`,
		method: "POST",
		body: JSONBulkDeleteMessages.parse(json),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * JSON Edit Channel Permissions
 *
 * Edit the channel permission overwrites for a user or role in a channel. Only usable for guild channels. Requires the `MANAGE_ROLES` permission. Returns a 204 empty response on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#edit-channel-permissions}
 */
export const JSONEditChannelPermissions = z.object({
	allow: z.string().optional(),
	deny: z.string().optional(),
	type: z.number().int().optional(),
});

/**
 * JSON Edit Channel Permissions Infer
 *
 * The inferred type of the {@link JSONEditChannelPermissions} zod object.
 */
export type JSONEditChannelPermissionsInfer = z.infer<typeof JSONEditChannelPermissions>;

/**
 * Edit Channel Permissions
 *
 * Edit the channel permission overwrites for a user or role in a channel. Only usable for guild channels. Requires the `MANAGE_ROLES` permission. Returns a 204 empty response on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#edit-channel-permissions}
 */
export function EditChannelPermissions(channelId: SnowflakeInfer, overwriteId: SnowflakeInfer, reason: string, json: JSONEditChannelPermissionsInfer): RestRequestOptions<void> {
	return {
		url: `/channels/${channelId}/permissions/${overwriteId}`,
		method: "PUT",
		body: JSONEditChannelPermissions.parse(json),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * Get Channel Invites
 *
 * Get all the invites for a channel. Requires the `MANAGE_CHANNELS` permission.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#get-channel-invites}
 */
export function GetChannelInvites<T extends InviteMetadataStructureInfer[] | InviteStructureInfer[]>(channelId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/channels/${channelId}/invites`,
		method: "GET",
	};
}

/**
 * Create Channel Invite
 *
 * Create a new invite object for the channel. Requires the `CREATE_INSTANT_INVITE` permission.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#create-channel-invite}
 */
export const JSONCreateChannelInvite = z.object({
	max_age: Integer.min(0).max(604_800).optional(),
	max_uses: Integer.min(0).max(100).optional(),
	temporary: z.boolean().optional(),
	unique: z.boolean().optional(),
	target_type: InviteTargetTypesEnum.optional(),
	target_user_id: Snowflake.optional(),
	target_application_id: Snowflake.optional(),
});

/**
 * JSON Create Channel Invite Infer
 *
 * The inferred type of the {@link JSONCreateChannelInvite} zod object.
 */
export type JSONCreateChannelInviteInfer = z.infer<typeof JSONCreateChannelInvite>;

/**
 * Create Channel Invite
 *
 * Create a new invite object for the channel. Requires the `CREATE_INSTANT_INVITE` permission.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#create-channel-invite}
 */
export function CreateChannelInvite<T extends InviteMetadataStructureInfer | InviteStructureInfer>(channelId: SnowflakeInfer, json: JSONCreateChannelInviteInfer): RestRequestOptions<T> {
	return {
		url: `/channels/${channelId}/invites`,
		method: "POST",
		body: JSONCreateChannelInvite.parse(json),
	};
}

/**
 * Delete Channel Permission
 *
 * Delete a channel permission overwrite for a user or role in a channel. Only usable for guild channels. Requires the `MANAGE_ROLES` permission. Returns a 204 empty response on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#delete-channel-permission}
 */
export function DeleteChannelPermission(channelId: SnowflakeInfer, overwriteId: SnowflakeInfer, reason: string): RestRequestOptions<void> {
	return {
		url: `/channels/${channelId}/permissions/${overwriteId}`,
		method: "DELETE",
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * JSON Follow Announcement Channel
 *
 * Follow a News Channel to send messages to a target channel. Requires the `MANAGE_WEBHOOKS` permission in the target channel. Returns a follow object.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#follow-announcement-channel}
 */
export const JSONFollowAnnouncementChannel = z.object({ webhook_channel_id: Snowflake });

/**
 * JSON Follow Announcement Channel Infer
 *
 * The inferred type of the {@link JSONFollowAnnouncementChannel} zod object.
 */
export type JSONFollowAnnouncementChannelInfer = z.infer<typeof JSONFollowAnnouncementChannel>;

/**
 * Follow Announcement Channel
 *
 * Follow a News Channel to send messages to a target channel. Requires the `MANAGE_WEBHOOKS` permission in the target channel. Returns a follow object.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#follow-announcement-channel}
 */
export function FollowAnnouncementChannel<T extends FollowedChannelStructureInfer>(channelId: SnowflakeInfer, json: JSONFollowAnnouncementChannelInfer): RestRequestOptions<T> {
	return {
		url: `/channels/${channelId}/followers`,
		method: "POST",
		body: JSONFollowAnnouncementChannel.parse(json),
	};
}

/**
 * Trigger Typing Indicator
 *
 * Post a typing indicator for the specified channel. Generally, bots should not implement this route. However, if a bot is responding to a command and expects the computation to take a few seconds, this endpoint may be called to let the user know that the bot is processing their message. Returns a 204 empty response on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#trigger-typing-indicator}
 */
export function TriggerTypingIndicator(channelId: SnowflakeInfer): RestRequestOptions<void> {
	return {
		url: `/channels/${channelId}/typing`,
		method: "POST",
	};
}

/**
 * Get Pinned Messages
 *
 * Returns all pinned messages in the channel as an array of message objects.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#get-pinned-messages}
 */
export function GetPinnedMessages<T extends MessageStructureInfer[]>(channelId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/channels/${channelId}/pins`,
		method: "GET",
	};
}

/**
 * Pin Message
 *
 * Pin a message in a channel. Requires the `MANAGE_MESSAGES` permission. Returns a 204 empty response on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#pin-message}
 */
export function PinMessage(channelId: SnowflakeInfer, messageId: SnowflakeInfer, reason: string): RestRequestOptions<void> {
	return {
		url: `/channels/${channelId}/pins/${messageId}`,
		method: "PUT",
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * Unpin Message
 *
 * Delete a pinned message in a channel. Requires the `MANAGE_MESSAGES` permission. Returns a 204 empty response on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#unpin-message}
 */
export function UnpinMessage(channelId: SnowflakeInfer, messageId: SnowflakeInfer, reason: string): RestRequestOptions<void> {
	return {
		url: `/channels/${channelId}/pins/${messageId}`,
		method: "DELETE",
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * JSON Group DM Add Recipient
 *
 * Adds a recipient to a Group DM using their access token. Requires the `MANAGE_CHANNELS` permission. Returns a 204 empty response on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#group-dm-add-recipient}
 */
export const JSONGroupDMAddRecipient = z.object({
	access_token: z.string(),
	nick: z.string().optional(),
});

/**
 * JSON Group DM Add Recipient Infer
 *
 * The inferred type of the {@link JSONGroupDMAddRecipient} zod object.
 */
export type JSONGroupDMAddRecipientInfer = z.infer<typeof JSONGroupDMAddRecipient>;

/**
 * Group DM Add Recipient
 *
 * Adds a recipient to a Group DM using their access token. Requires the `MANAGE_CHANNELS` permission. Returns a 204 empty response on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#group-dm-add-recipient}
 */
export function GroupDMAddRecipient(channelId: SnowflakeInfer, userId: SnowflakeInfer, json: JSONGroupDMAddRecipientInfer): RestRequestOptions<void> {
	return {
		url: `/channels/${channelId}/recipients/${userId}`,
		method: "PUT",
		body: JSONGroupDMAddRecipient.parse(json),
	};
}

/**
 * Group DM Remove Recipient
 *
 * Removes a recipient from a Group DM. Requires the `MANAGE_CHANNELS` permission. Returns a 204 empty response on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#group-dm-remove-recipient}
 */
export function GroupDMRemoveRecipient(channelId: SnowflakeInfer, userId: SnowflakeInfer): RestRequestOptions<void> {
	return {
		url: `/channels/${channelId}/recipients/${userId}`,
		method: "DELETE",
	};
}

/**
 * JSON Start Thread from Message
 *
 * Create a new thread from a message. This endpoint can only be used on News Channels and Text Channels. Requires the `SEND_MESSAGES` permission in the current channel. Returns a thread channel on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#start-thread-with-message}
 */
export const JSONStartThreadFromMessage = z.object({
	name: z.string().min(1).max(100),
	auto_archive_duration: z.union([z.literal(60), z.literal(1_440), z.literal(4_320), z.literal(10_080)]).optional(),
	rate_limit_per_user: Integer.min(0).max(21_600).optional(),
});

/**
 * JSON Start Thread from Message Infer
 *
 * The inferred type of the {@link JSONStartThreadFromMessage} zod object.
 */
export type JSONStartThreadFromMessageInfer = z.infer<typeof JSONStartThreadFromMessage>;

/**
 * Start Thread from Message
 *
 * Create a new thread from a message. This endpoint can only be used on News Channels and Text Channels. Requires the `SEND_MESSAGES` permission in the current channel. Returns a thread channel on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#start-thread-with-message}
 */
export function StartThreadFromMessage<T extends ChannelStructureInfer>(channelId: SnowflakeInfer, messageId: SnowflakeInfer, reason: string, json: JSONStartThreadFromMessageInfer): RestRequestOptions<T> {
	return {
		url: `/channels/${channelId}/messages/${messageId}/threads`,
		method: "POST",
		body: JSONStartThreadFromMessage.parse(json),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * JSON Start Thread without Message
 *
 * Create a new thread without a message. This endpoint can only be used on News Channels and Text Channels. Requires the `SEND_MESSAGES` permission in the current channel. Returns a thread channel on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#start-thread-without-message}
 */
export const JSONStartThreadWithoutMessage = z.object({
	name: z.string().min(1).max(100),
	auto_archive_duration: z.union([z.literal(60), z.literal(1_440), z.literal(4_320), z.literal(10_080)]).optional(),
	type: z.union([z.literal(ChannelTypesEnum.enum.PublicThread), z.literal(ChannelTypesEnum.enum.PrivateThread), z.literal(ChannelTypesEnum.enum.AnnouncementThread)]).optional(),
	invitable: z.boolean().optional(),
	rate_limit_per_user: Integer.min(0).max(21_600).optional(),
});

/**
 * JSON Start Thread without Message Infer
 *
 * The inferred type of the {@link JSONStartThreadWithoutMessage} zod object.
 */
export type JSONStartThreadWithoutMessageInfer = z.infer<typeof JSONStartThreadWithoutMessage>;

/**
 * Start Thread without Message
 *
 * Create a new thread without a message. This endpoint can only be used on News Channels and Text Channels. Requires the `SEND_MESSAGES` permission in the current channel. Returns a thread channel on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#start-thread-without-message}
 */
export function StartThreadWithoutMessage<T extends ChannelStructureInfer>(channelId: SnowflakeInfer, reason: string, json: JSONStartThreadWithoutMessageInfer): RestRequestOptions<T> {
	return {
		url: `/channels/${channelId}/threads`,
		method: "POST",
		body: JSONStartThreadWithoutMessage.parse(json),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * JSON Start Thread in Forum or Media Channel
 *
 * Create a new thread in a forum or media channel. This endpoint can only be used on News Channels and Text Channels. Requires the `SEND_MESSAGES` permission in the current channel. Returns a thread channel on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#start-thread-without-message}
 */
export const JSONStartThreadInForumOrMediaChannel = z.object({
	name: z.string().min(1).max(100),
	auto_archive_duration: z.union([z.literal(60), z.literal(1_440), z.literal(4_320), z.literal(10_080)]).optional(),
	rate_limit_per_user: Integer.min(0).max(21_600).optional(),
	message: z.string().optional(),
	applied_tags: z.array(Snowflake).optional(),
	files: z.any().optional(),
	payload_json: z.string().optional(),
});

/**
 * JSON Start Thread in Forum or Media Channel Infer
 *
 * The inferred type of the {@link JSONStartThreadInForumOrMediaChannel} zod object.
 */
export type JSONStartThreadInForumOrMediaChannelInfer = z.infer<typeof JSONStartThreadInForumOrMediaChannel>;

/**
 * Start Thread in Forum or Media Channel
 *
 * Create a new thread in a forum or media channel. This endpoint can only be used on News Channels and Text Channels. Requires the `SEND_MESSAGES` permission in the current channel. Returns a thread channel on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#start-thread-without-message}
 */
export function StartThreadInForumOrMediaChannel<T extends ChannelStructureInfer>(channelId: SnowflakeInfer, reason: string, json: JSONStartThreadInForumOrMediaChannelInfer): RestRequestOptions<T> {
	return {
		url: `/channels/${channelId}/threads`,
		method: "POST",
		body: JSONStartThreadInForumOrMediaChannel.parse(json),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * Join Thread
 *
 * Adds the current user to a thread. Requires the `SEND_MESSAGES` permission in the thread. Returns a 204 empty response on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#join-thread}
 */
export function JoinThread(channelId: SnowflakeInfer): RestRequestOptions<void> {
	return {
		url: `/channels/${channelId}/thread-members/@me`,
		method: "PUT",
	};
}

/**
 * Add Thread Member
 *
 * Adds another member to a thread. Requires the `MANAGE_THREADS` permission. Returns a 204 empty response on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#add-thread-member}
 */
export function AddThreadMember(channelId: SnowflakeInfer, userId: SnowflakeInfer): RestRequestOptions<void> {
	return {
		url: `/channels/${channelId}/thread-members/${userId}`,
		method: "PUT",
	};
}

/**
 * Leave Thread
 *
 * Removes the current user from a thread. Requires the `SEND_MESSAGES` permission in the thread. Returns a 204 empty response on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#leave-thread}
 */
export function LeaveThread(channelId: SnowflakeInfer): RestRequestOptions<void> {
	return {
		url: `/channels/${channelId}/thread-members/@me`,
		method: "DELETE",
	};
}

/**
 * Remove Thread Member
 *
 * Removes another member from a thread. Requires the `MANAGE_THREADS` permission. Returns a 204 empty response on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#remove-thread-member}
 */
export function RemoveThreadMember(channelId: SnowflakeInfer, userId: SnowflakeInfer): RestRequestOptions<void> {
	return {
		url: `/channels/${channelId}/thread-members/${userId}`,
		method: "DELETE",
	};
}

/**
 * Query Get Thread Member
 *
 * Get a thread member object for the current user in a thread. Returns a thread member object on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#get-thread-member}
 */
export const QueryGetThreadMember = z.object({ with_member: z.boolean().optional() });

/**
 * Query Get Thread Member Infer
 *
 * The inferred type of the {@link QueryGetThreadMember} zod object.
 */
export type QueryGetThreadMemberInfer = z.infer<typeof QueryGetThreadMember>;

/**
 * Get Thread Member
 *
 * Get a thread member object for the current user in a thread. Returns a thread member object on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#get-thread-member}
 */
export function GetThreadMember<T extends ThreadMemberStructureInfer>(channelId: SnowflakeInfer, userId: SnowflakeInfer, query?: QueryGetThreadMemberInfer): RestRequestOptions<T> {
	return {
		url: `/channels/${channelId}/thread-members/${userId}`,
		method: "GET",
		query: QueryGetThreadMember.parse(query),
	};
}

/**
 * Query List Thread Members
 *
 * Get a list of thread members objects for the current user in a thread. Returns a list of thread member objects on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#list-thread-members}
 */
export const QueryListThreadMembers = z.object({
	limit: Integer.min(1).max(100).default(100).optional(),
	before: Snowflake.optional(),
	after: Snowflake.optional(),
});

/**
 * Query List Thread Members Infer
 *
 * The inferred type of the {@link QueryListThreadMembers} zod object.
 */
export type QueryListThreadMembersInfer = z.infer<typeof QueryListThreadMembers>;

/**
 * List Thread Members
 *
 * Get a list of thread members objects for the current user in a thread. Returns a list of thread member objects on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#list-thread-members}
 */
export function ListThreadMembers<T extends ThreadMemberStructureInfer[]>(channelId: SnowflakeInfer, query?: QueryListThreadMembersInfer): RestRequestOptions<T> {
	return {
		url: `/channels/${channelId}/thread-members`,
		method: "GET",
		query: QueryListThreadMembers.parse(query),
	};
}

/**
 * Query List Public Archived Threads
 *
 * Get a list of archived public threads in a channel. Returns a list of thread member objects on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#list-public-archived-threads}
 */
export const QueryListPublicArchivedThreads = z.object({
	before: ISO8601.optional(),
	limit: Integer.min(1).max(100).default(50).optional(),
});

/**
 * Query List Public Archived Threads Infer
 *
 * The inferred type of the {@link QueryListPublicArchivedThreads} zod object.
 */
export type QueryListPublicArchivedThreadsInfer = z.infer<typeof QueryListPublicArchivedThreads>;

/**
 * Response List Public Archived Threads
 *
 * Get a list of archived public threads in a channel. Returns a list of thread member objects on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#list-public-archived-threads}
 */
export const ResponseListPublicArchivedThreads = z.object({
	threads: z.array(ChannelStructure),
	members: z.array(GuildMemberStructure),
	has_more: z.boolean(),
});

/**
 * Response List Public Archived Threads Infer
 *
 * The inferred type of the {@link ResponseListPublicArchivedThreads} zod object.
 */
export type ResponseListPublicArchivedThreadsInfer = z.infer<typeof ResponseListPublicArchivedThreads>;

/**
 * List Public Archived Threads
 *
 * Get a list of archived public threads in a channel. Returns a list of thread member objects on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#list-public-archived-threads}
 */
export function ListPublicArchivedThreads<T extends ResponseListPublicArchivedThreadsInfer>(channelId: SnowflakeInfer, query?: QueryListPublicArchivedThreadsInfer): RestRequestOptions<T> {
	return {
		url: `/channels/${channelId}/threads/archived/public`,
		method: "GET",
		query: QueryListPublicArchivedThreads.parse(query),
	};
}

/**
 * Query List Private Archived Threads
 *
 * Get a list of archived private threads in a channel. Returns a list of thread member objects on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#list-private-archived-threads}
 */
export const QueryListPrivateArchivedThreads = z.object({
	before: ISO8601.optional(),
	limit: Integer.min(1).max(100).default(50).optional(),
});

/**
 * Query List Private Archived Threads Infer
 *
 * The inferred type of the {@link QueryListPrivateArchivedThreads} zod object.
 */
export type QueryListPrivateArchivedThreadsInfer = z.infer<typeof QueryListPrivateArchivedThreads>;

/**
 * Response List Private Archived Threads
 *
 * Get a list of archived private threads in a channel. Returns a list of thread member objects on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#list-private-archived-threads}
 */
export const ResponseListPrivateArchivedThreads = z.object({
	threads: z.array(ChannelStructure),
	members: z.array(GuildMemberStructure),
	has_more: z.boolean(),
});

/**
 * Response List Private Archived Threads Infer
 *
 * The inferred type of the {@link ResponseListPrivateArchivedThreads} zod object.
 */
export type ResponseListPrivateArchivedThreadsInfer = z.infer<typeof ResponseListPrivateArchivedThreads>;

/**
 * List Private Archived Threads
 *
 * Get a list of archived private threads in a channel. Returns a list of thread member objects on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#list-private-archived-threads}
 */
export function ListPrivateArchivedThreads<T extends ResponseListPrivateArchivedThreadsInfer>(channelId: SnowflakeInfer, query?: QueryListPrivateArchivedThreadsInfer): RestRequestOptions<T> {
	return {
		url: `/channels/${channelId}/threads/archived/private`,
		method: "GET",
		query: QueryListPrivateArchivedThreads.parse(query),
	};
}

/**
 * Query List Joined Private Archived Threads
 *
 * Get a list of archived private threads that the current user has joined in a channel. Returns a list of thread member objects on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#list-joined-private-archived-threads}
 */
export const QueryListJoinedPrivateArchivedThreads = z.object({
	before: ISO8601.optional(),
	limit: Integer.min(1).max(100).default(50).optional(),
});

/**
 * Query List Joined Private Archived Threads Infer
 *
 * The inferred type of the {@link QueryListJoinedPrivateArchivedThreads} zod object.
 */
export type QueryListJoinedPrivateArchivedThreadsInfer = z.infer<typeof QueryListJoinedPrivateArchivedThreads>;

/**
 * Response List Joined Private Archived Threads
 *
 * Get a list of archived private threads that the current user has joined in a channel. Returns a list of thread member objects on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#list-joined-private-archived-threads}
 */
export const ResponseListJoinedPrivateArchivedThreads = z.object({
	threads: z.array(ChannelStructure),
	members: z.array(GuildMemberStructure),
	has_more: z.boolean(),
});

/**
 * Response List Joined Private Archived Threads Infer
 *
 * The inferred type of the {@link ResponseListJoinedPrivateArchivedThreads} zod object.
 */
export type ResponseListJoinedPrivateArchivedThreadsInfer = z.infer<typeof ResponseListJoinedPrivateArchivedThreads>;

/**
 * List Joined Private Archived Threads
 *
 * Get a list of archived private threads that the current user has joined in a channel. Returns a list of thread member objects on success.
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#list-joined-private-archived-threads}
 */
export function ListJoinedPrivateArchivedThreads<T extends ResponseListJoinedPrivateArchivedThreadsInfer>(channelId: SnowflakeInfer, query?: QueryListJoinedPrivateArchivedThreadsInfer): RestRequestOptions<T> {
	return {
		url: `/channels/${channelId}/users/@me/threads/archived/private`,
		method: "GET",
		query: QueryListJoinedPrivateArchivedThreads.parse(query),
	};
}
