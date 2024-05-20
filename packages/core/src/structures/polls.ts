import { z } from "zod";
import { Integer, ISO8601Timestamp } from "../globals/formats";
import { EmojiStructure } from "./emojis";

/**
 * Schema for validating Poll Answer Count Structure.
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-results-object-poll-answer-count-object-structure}
 */
export const PollAnswerCountStructure = z.object({
	/**
	 * The ID of the answer.
	 *
	 * @remarks
	 * A unique identifier for the poll answer.
	 * @example
	 * ```typescript
	 * const answerId = 1;
	 * ```
	 */
	id: Integer,
	/**
	 * The number of votes for this answer.
	 *
	 * @remarks
	 * The total count of votes that this answer has received.
	 * @example
	 * ```typescript
	 * const voteCount = 42;
	 * ```
	 */
	count: Integer,
	/**
	 * Whether the current user voted for this answer.
	 *
	 * @remarks
	 * A boolean indicating if the current user has voted for this answer.
	 * @example
	 * ```typescript
	 * const userVoted = true;
	 * ```
	 */
	me_voted: z.boolean(),
});

/**
 * The type of the {@link PollAnswerCountStructure} schema.
 */
export type PollAnswerCountStructureInfer = z.infer<typeof PollAnswerCountStructure>;

/**
 * Schema for validating Poll Results Structure.
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-results-object-poll-results-object-structure}
 */
export const PollResultsStructure = z.object({
	/**
	 * Whether the votes have been precisely counted.
	 *
	 * @remarks
	 * Indicates if the poll results are finalized and accurate.
	 * @example
	 * ```typescript
	 * const isFinalized = true;
	 * ```
	 */
	is_finalized: z.boolean(),
	/**
	 * The counts for each answer.
	 *
	 * @remarks
	 * An array of answer count objects, each representing the vote count for a specific answer.
	 * @example
	 * ```typescript
	 * const answerCounts = [{ id: 1, count: 42, me_voted: true }];
	 * ```
	 */
	answer_counts: z.array(PollAnswerCountStructure),
});

/**
 * The type of the {@link PollResultsStructure} schema.
 */
export type PollResultsStructureInfer = z.infer<typeof PollResultsStructure>;

/**
 * Schema for validating Poll Media Structure.
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-media-object-poll-media-object-structure}
 */
export const PollMediaStructure = z.object({
	/**
	 * The text content of the poll media.
	 *
	 * @remarks
	 * Optional text that can be associated with the poll.
	 * @example
	 * ```typescript
	 * const pollText = "What is your favorite color?";
	 * ```
	 */
	text: z.string().optional(),
	/**
	 * The emoji associated with the poll.
	 *
	 * @remarks
	 * Optional emoji that can be used in the poll.
	 * @example
	 * ```typescript
	 * const pollEmoji = { id: "123456789012345678", name: "smile" };
	 * ```
	 */
	emoji: EmojiStructure.partial().optional(),
});

/**
 * The type of the {@link PollMediaStructure} schema.
 */
export type PollMediaStructureInfer = z.infer<typeof PollMediaStructure>;

/**
 * Schema for validating Poll Answer Structure.
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-answer-object-poll-answer-object-structure}
 */
export const PollAnswerStructure = z.object({
	/**
	 * The ID of the answer.
	 *
	 * @remarks
	 * A unique identifier for the poll answer.
	 * @example
	 * ```typescript
	 * const answerId = 1;
	 * ```
	 */
	answer_id: Integer,
	/**
	 * The data of the answer.
	 *
	 * @remarks
	 * Contains the media (text and emoji) for the poll answer.
	 * @example
	 * ```typescript
	 * const pollMedia = { text: "Red", emoji: { id: "123456789012345678", name: "red_circle" } };
	 * ```
	 */
	poll_media: PollMediaStructure,
});

/**
 * The type of the {@link PollAnswerStructure} schema.
 */
export type PollAnswerStructureInfer = z.infer<typeof PollAnswerStructure>;

/**
 * Enum representing the different layout types for a poll.
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#layout-type}
 */
export enum PollLayoutTypes {
	/**
	 * The default layout type.
	 */
	Default = 1,
}

/**
 * Zod schema for validating {@link PollLayoutTypes}.
 *
 * @example
 * ```typescript
 * PollLayoutTypesEnum.parse(PollLayoutTypes.Default); // Valid
 * ```
 */
export const PollLayoutTypesEnum = z.nativeEnum(PollLayoutTypes);

/**
 * Schema for validating Poll Create Request Structure.
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-create-request-object-poll-create-request-object-structure}
 */
export const PollCreateRequestStructure = z.object({
	/**
	 * The question of the poll. Only text is supported.
	 *
	 * @remarks
	 * The main question or prompt for the poll.
	 * @example
	 * ```typescript
	 * const question = { text: "What is your favorite color?" };
	 * ```
	 */
	question: PollMediaStructure,
	/**
	 * Each of the answers available in the poll, up to 10.
	 *
	 * @remarks
	 * An array of possible answers to the poll question.
	 * @example
	 * ```typescript
	 * const answers = [
	 *   { answer_id: 1, poll_media: { text: "Red" } },
	 *   { answer_id: 2, poll_media: { text: "Blue" } },
	 * ];
	 * ```
	 */
	answers: z.array(PollAnswerStructure),
	/**
	 * Number of hours the poll should be open for, up to 7 days.
	 *
	 * @remarks
	 * The duration in hours for which the poll will remain open.
	 * @example
	 * ```typescript
	 * const duration = 24;
	 * ```
	 */
	duration: Integer.min(1).max(168),
	/**
	 * Whether a user can select multiple answers.
	 *
	 * @remarks
	 * A boolean indicating if multiple answers can be selected by a single user.
	 * @example
	 * ```typescript
	 * const allowMultiselect = true;
	 * ```
	 */
	allow_multiselect: z.boolean(),
	/**
	 * The layout type of the poll. Defaults to Default.
	 *
	 * @remarks
	 * The layout type for displaying the poll.
	 * @example
	 * ```typescript
	 * const layoutType = PollLayoutTypes.Default;
	 * ```
	 */
	layout_type: PollLayoutTypesEnum.optional(),
});

/**
 * The type of the {@link PollCreateRequestStructure} schema.
 */
export type PollCreateRequestStructureInfer = z.infer<typeof PollCreateRequestStructure>;

/**
 * Schema for validating Poll Structure.
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-object-poll-object-structure}
 */
export const PollStructure = z.object({
	/**
	 * The question of the poll. Only text is supported.
	 *
	 * @remarks
	 * The main question or prompt for the poll.
	 * @example
	 * ```typescript
	 * const question = { text: "What is your favorite color?" };
	 * ```
	 */
	question: PollMediaStructure,
	/**
	 * Each of the answers available in the poll.
	 *
	 * @remarks
	 * An array of possible answers to the poll question.
	 * @example
	 * ```typescript
	 * const answers = [
	 *   { answer_id: 1, poll_media: { text: "Red" } },
	 *   { answer_id: 2, poll_media: { text: "Blue" } },
	 * ];
	 * ```
	 */
	answers: z.array(PollAnswerStructure),
	/**
	 * The time when the poll ends.
	 *
	 * @remarks
	 * The ISO8601 timestamp indicating when the poll will expire.
	 * @example
	 * ```typescript
	 * const expiry = "2024-06-01T12:00:00Z";
	 * ```
	 */
	expiry: ISO8601Timestamp.nullable(),
	/**
	 * Whether a user can select multiple answers.
	 *
	 * @remarks
	 * A boolean indicating if multiple answers can be selected by a single user.
	 * @example
	 * ```typescript
	 * const allowMultiselect = true;
	 * ```
	 */
	allow_multiselect: z.boolean(),
	/**
	 * The layout type of the poll.
	 *
	 * @remarks
	 * The layout type for displaying the poll.
	 * @example
	 * ```typescript
	 * const layoutType = PollLayoutTypes.Default;
	 * ```
	 */
	layout_type: PollLayoutTypesEnum,
	/**
	 * The results of the poll.
	 *
	 * @remarks
	 * An optional object containing the results of the poll.
	 * @example
	 * ```typescript
	 * const results = {
	 *   is_finalized: true,
	 *   answer_counts: [{ id: 1, count: 42, me_voted: true }],
	 * };
	 * ```
	 */
	results: PollResultsStructure.optional(),
});

/**
 * The type of the {@link PollStructure} schema.
 */
export type PollStructureInfer = z.infer<typeof PollStructure>;
