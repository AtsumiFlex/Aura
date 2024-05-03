/**
 * Poll Resource
 *
 * Polls are a type of message that allows users to vote on a question with a set of answers.
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-resource}
 */
import { z } from "zod";
import { Integer, ISO8601 } from "../globals/globals";
import { EmojiStructure } from "./emojis";

/**
 * Poll Answer Count Structure
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-results-object-poll-answer-count-object-structure}
 */
export const PollAnswerCountStructure = z.object({
	id: Integer,
	count: Integer,
	me_voted: z.boolean(),
});

/**
 * Poll Answer Count Structure Infer is the inferred type of the PollAnswerCountStructure zod object.
 */
export type PollAnswerCountStructureInfer = z.infer<typeof PollAnswerCountStructure>;

/**
 * Poll Results Object Structure
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-results-object}
 */
export const PollResultsObjectStructure = z.object({
	is_finalized: z.boolean(),
	answer_counts: z.array(PollAnswerCountStructure),
});

/**
 * Poll Results Object Structure Infer is the inferred type of the PollResultsObjectStructure zod object.
 */
export type PollResultsObjectStructureInfer = z.infer<typeof PollResultsObjectStructure>;

/**
 * Poll Media Object Structure
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-media-object}
 */
export const PollMediaObjectStructure = z.object({
	text: z.string().optional(),
	emoji: EmojiStructure.partial().optional(),
});

/**
 * Poll Media Object Structure Infer is the inferred type of the PollMediaObjectStructure zod object.
 */
export type PollMediaObjectStructureInfer = z.infer<typeof PollMediaObjectStructure>;

/**
 * Poll Answer Object Structure
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-answer-object}
 */
export const PollAnswerObjectStructure = z.object({
	answer_id: Integer,
	poll_media: PollMediaObjectStructure,
});

/**
 * Poll Answer Object Structure Infer is the inferred type of the PollAnswerObjectStructure zod object.
 */
export type PollAnswerObjectStructureInfer = z.infer<typeof PollAnswerObjectStructure>;

/**
 * Poll Layout Types
 *
 * Poll layout types denote the type of layout for a poll.
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-layout-types}
 */
export enum PollLayoutTypes {
	/**
	 * The, uhm, default layout type.
	 */
	Default = 1,
}

/**
 * PollLayoutTypesEnum is a zod enum that represents the poll layout types.
 */
export const PollLayoutTypesEnum = z.nativeEnum(PollLayoutTypes);

/**
 * Poll Create Request Object Structure
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-create-request-object}
 */
export const PollCreateRequestObjectStructure = z.object({
	question: PollMediaObjectStructure,
	answers: z.array(PollAnswerObjectStructure),
	duration: Integer,
	allow_multiselect: z.boolean(),
	layout_type: PollLayoutTypesEnum.optional(),
});

/**
 * Poll Create Request Object Structure Infer is the inferred type of the PollCreateRequestObjectStructure zod object.
 */
export type PollCreateRequestObjectStructureInfer = z.infer<typeof PollCreateRequestObjectStructure>;

/**
 * Poll Object Structure
 *
 * Polls are a type of message that allows users to vote on a question with a set of answers.
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-object}
 */
export const PollObjectStructure = z.object({
	question: PollMediaObjectStructure,
	answers: z.array(PollAnswerObjectStructure),
	expiry: ISO8601.optional(),
	allow_multiselect: z.boolean(),
	layout_type: PollLayoutTypesEnum,
	results: PollResultsObjectStructure.optional(),
});

/**
 * Poll Object Structure Infer is the inferred type of the PollObjectStructure zod object.
 */
export type PollObjectStructureInfer = z.infer<typeof PollObjectStructure>;
