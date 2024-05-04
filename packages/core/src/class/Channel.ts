import type { IntegerInfer, SnowflakeInfer } from "../globals/globals";
import type {
	ChannelFlags,
	ChannelStructureInfer,
	ChannelTypes,
	DefaultReactionStructureInfer,
	ForumLayoutTypes,
	ForumTagStructureInfer,
	OverwriteStructureInfer,
	SortOrderTypes,
	ThreadMemberStructureInfer,
	ThreadMetadataStructureInfer,
	VideoQualityModes,
} from "../structures/channels";
import type { UserStructureInfer } from "../structures/user";

export class Channel {
	public id: string;

	public name?: string | null;

	public type: ChannelTypes;

	public guildId?: string;

	public position?: IntegerInfer;

	public permissionOverwrites: OverwriteStructureInfer[];

	public topic?: string | null;

	public nsfw?: boolean;

	public lastMessageId?: string | null;

	public bitrate?: IntegerInfer;

	public userLimit?: IntegerInfer;

	public rateLimitPerUser?: IntegerInfer;

	public recipients?: UserStructureInfer[];

	public icon?: string;

	public ownerId?: SnowflakeInfer;

	public applicationId?: SnowflakeInfer;

	public managed?: boolean;

	public parentId?: SnowflakeInfer;

	public lastPinTimestamp?: SnowflakeInfer;

	public rtcRegion?: string;

	public videoQualityMode?: VideoQualityModes;

	public messageCount?: IntegerInfer;

	public memberCount?: IntegerInfer;

	public threadMetadata?: ThreadMetadataStructureInfer;

	public member?: ThreadMemberStructureInfer;

	public defaultAutoArchiveDuration?: IntegerInfer;

	public permissions?: string;

	public flags?: ChannelFlags;

	public totalMessageSent?: IntegerInfer;

	public availableTags?: ForumTagStructureInfer[];

	public appliedTags?: SnowflakeInfer[];

	public defaultReactionEmoji?: DefaultReactionStructureInfer | null;

	public defaultThreadRateLimitPerUser?: IntegerInfer;

	public defaultSortOrder?: SortOrderTypes;

	public defaultForumLayout?: ForumLayoutTypes;

	public constructor(data: ChannelStructureInfer) {
		this.id = data.id;
		this.name = data.name;
		this.type = data.type;
		this.guildId = data.guild_id;
		this.position = data.position;
		this.permissionOverwrites = data.permission_overwrites;
		this.topic = data.topic;
		this.nsfw = data.nsfw;
		this.lastMessageId = data.last_message_id;
		this.bitrate = data.bitrate;
		this.userLimit = data.user_limit;
		this.rateLimitPerUser = data.rate_limit_per_user;
		this.recipients = data.recipients;
		this.icon = data.icon;
		this.ownerId = data.owner_id;
		this.applicationId = data.application_id;
		this.managed = data.managed;
		this.parentId = data.parent_id;
		this.lastPinTimestamp = data.last_pin_timestamp;
		this.rtcRegion = data.rtc_region;
		this.videoQualityMode = data.video_quality_mode;
		this.messageCount = data.message_count;
		this.memberCount = data.member_count;
		this.threadMetadata = data.thread_metadata;
		this.member = data.member;
		this.defaultAutoArchiveDuration = data.default_auto_archive_duration;
		this.permissions = data.permissions;
		this.flags = data.flags;
		this.totalMessageSent = data.total_message_sent;
		this.availableTags = data.available_tags;
		this.appliedTags = data.applied_tags;
		this.defaultReactionEmoji = data.default_reaction_emoji;
		this.defaultThreadRateLimitPerUser = data.default_thread_rate_limit_per_user;
		this.defaultSortOrder = data.default_sort_order;
		this.defaultForumLayout = data.default_forum_layout;
	}
}
