import { z } from "zod";

export enum BitwisePermissionFlags {
	CreateInstantInvite = 1,
	KickMembers = 2,
	BanMembers = 4,
	Administrator = 8,
	ManageChannels = 16,
	ManageGuild = 32,
	AddReactions = 64,
	ViewAuditLog = 128,
	PrioritySpeaker = 256,
	Stream = 512,
	ViewChannel = 1_024,
	SendMessages = 2_048,
	SendTtsMessages = 4_096,
	ManageMessages = 8_192,
	EmbedLinks = 16_384,
	AttachFiles = 32_768,
	ReadMessageHistory = 65_536,
	MentionEveryone = 131_072,
	UseExternalEmojis = 262_144,
	ViewGuildInsights = 524_288,
	Connect = 1_048_576,
	Speak = 2_097_152,
	MuteMembers = 4_194_304,
	DeafenMembers = 8_388_608,
	MoveMembers = 16_777_216,
	UseVad = 33_554_432,
	ChangeNickname = 67_108_864,
	ManageNicknames = 134_217_728,
	ManageRoles = 268_435_456,
	ManageWebhooks = 536_870_912,
	ManageGuildExpressions = 1_073_741_824,
	UseApplicationCommands = 2_147_483_648,
	RequestToSpeak = 4_294_967_296,
	ManageEvents = 8_589_934_592,
	ManageThreads = 17_179_869_184,
	CreatePublicThreads = 34_359_738_368,
	CreatePrivateThreads = 68_719_476_736,
	UseExternalStickers = 137_438_953_472,
	SendMessagesInThreads = 274_877_906_944,
	UseEmbeddedActivities = 549_755_813_888,
	ModerateMembers = 1_099_511_627_776,
	ViewCreatorMonetizationAnalytics = 2_199_023_255_552,
	UseSoundboard = 4_398_046_511_104,
	CreateGuildExpressions = 8_796_093_022_208,
	CreateEvents = 17_592_186_044_416,
	UseExternalSounds = 35_184_372_088_832,
	SendVoiceMessages = 70_368_744_177_664,
	SendPolls = 1_125_899_906_842_624,
}

export const BitwisePermissionFlagsEnum = z.nativeEnum(BitwisePermissionFlags);
