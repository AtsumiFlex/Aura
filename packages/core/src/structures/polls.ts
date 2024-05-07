/**
 * Poll Resource
 *
 * Polls are a new feature that allows users to create a question with multiple answers and have users vote on the answers.
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-resource}
 */
import { z } from "zod";
import { Integer, ISO8601Timestamp } from "../globals/formatters";
import { EmojiStructure } from "./emojis";

/**
 * Poll Answers Count Object Structure
 *
 * Represents the count of votes for each answer.
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-answers-count-object-poll-answers-count-structure}
 */
export const PollAnswerCountStructure = z.object({
	id: Integer,
	count: Integer,
	me_voted: z.boolean(),
});

/**
 * Poll Answers Count Object Structure Infer
 *
 * The inferred type of {@link PollAnswerCountStructure}
 */
export type PollAnswerCountStructureInfer = z.infer<typeof PollAnswerCountStructure>;

/**
 * Poll Results Object Structure
 *
 * Represents the results of a poll.
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-results-object-poll-results-structure}
 */
export const PollResultsStructure = z.object({
	is_finalized: z.boolean(),
	answer_counts: z.array(PollAnswerCountStructure),
});

/**
 * Poll Results Object Structure Infer
 *
 * The inferred type of {@link PollResultsStructure}
 */
export type PollResultsStructureInfer = z.infer<typeof PollResultsStructure>;

/**
 * Poll Media Object Structure
 *
 * Represents the media of a poll.
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-media-object-poll-media-structure}
 */
export const PollMediaStructure = z.object({
	text: z.string().optional(),
	emoji: EmojiStructure.partial().optional(),
});

/**
 * Poll Media Object Structure Infer
 *
 * The inferred type of {@link PollMediaStructure}
 */
export type PollMediaStructureInfer = z.infer<typeof PollMediaStructure>;

/**
 * Poll Answer Object Structure
 *
 * Represents an answer to a poll.
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-answer-object-poll-answer-structure}
 */
export const PollAnswerStructure = z.object({
	answer_id: Integer,
	poll_media: PollMediaStructure,
});

/**
 * Poll Answer Object Structure Infer
 *
 * The inferred type of {@link PollAnswerStructure}
 */
export type PollAnswerStructureInfer = z.infer<typeof PollAnswerStructure>;

/**
 * Poll Layout Types
 *
 * Layout types for polls.
 */
export enum PollLayoutTypes {
	/**
	 * The default layout type.
	 */
	Default = 1,
}

/**
 * Poll Layout Types Enum
 *
 * Is a zod enum that represents the available {@link PollLayoutTypes}.
 */
export const PollLayoutTypesEnum = z.nativeEnum(PollLayoutTypes);

/**
 * Poll Create Request Object Structure
 *
 * Represents a poll creation request.
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-create-request-object-poll-create-request-structure}
 */
export const PollCreateRequestStructure = z.object({
	question: PollMediaStructure,
	answers: z.array(PollAnswerStructure),
	duration: Integer.min(1).max(168),
	allow_multiselect: z.boolean(),
	layout_type: PollLayoutTypesEnum.optional(),
});

/**
 * Poll Create Request Object Structure Infer
 *
 * The inferred type of {@link PollCreateRequestStructure}
 */
export type PollCreateRequestStructureInfer = z.infer<typeof PollCreateRequestStructure>;

/**
 * Poll Object Structure
 *
 * Represents a poll.
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-object-poll-structure}
 */
export const PollStructure = z.object({
	question: PollMediaStructure,
	answers: z.array(PollAnswerStructure),
	expiry: ISO8601Timestamp.nullable(),
	allow_multiselect: z.boolean(),
	layout_type: PollLayoutTypesEnum,
	results: PollResultsStructure.optional(),
});

/**
 * Poll Object Structure Infer
 *
 * The inferred type of {@link PollStructure}
 */
export type PollStructureInfer = z.infer<typeof PollStructure>;
