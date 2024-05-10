/**
 * Poll Resource
 *
 * A poll is... well... a poll! It holds information about a poll!
 *
 * The poll object has a lot of levels and nested structures. It was also designed to support future extensibility, so some fields may appear to be more complex than necessary.
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-resource}
 */

import { z } from "zod";
import { Integer, ISO8601Timestamp } from "../globals/formatters";
import { EmojiStructure } from "./emojis";

/**
 * Poll Answer Count Object Structure
 *
 * The answer count object of a poll.
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-results-object-poll-answer-count-object-structure}
 */
export const PollAnswerCountStructure = z.object({
	/**
	 * The answer_id
	 */
	id: Integer,
	/**
	 * The number of votes for this answer
	 */
	count: Integer,
	/**
	 * Whether the current user voted for this answer
	 */
	me_voted: z.boolean(),
});

/**
 * Poll Answer Count Object Structure Infer
 *
 * The inferred zod object from {@link PollAnswerCountStructure}
 */
export type PollAnswerCountStructureInfer = z.infer<typeof PollAnswerCountStructure>;

/**
 * Poll Results Object Structure
 *
 * The results object of a poll.
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-results-object-poll-results-object-structure}
 */
export const PollResultsStructure = z.object({
	/**
	 * Whether the votes have been precisely counted
	 */
	is_finalized: z.boolean(),
	/**
	 * The counts for each answer
	 *
	 * @see {@link PollAnswerCountStructure}
	 */
	answer_counts: z.array(PollAnswerCountStructure),
});

/**
 * Poll Results Object Structure Infer
 *
 * The inferred zod object from {@link PollResultsStructure}
 */
export type PollResultsStructureInfer = z.infer<typeof PollResultsStructure>;

/**
 * Poll Media Object Structure
 *
 * The poll media object is a common object that backs both the question and answers. The intention is that it allows us to extensibly add new ways to display things in the future. For now, question only supports text, while answers can have an optional emoji.
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-media-object-poll-media-object-structure}
 */
export const PollMediaStructure = z.object({
	/**
	 * The text of the field
	 */
	text: z.string().optional(),
	/**
	 * The emoji of the field
	 */
	emoji: EmojiStructure.partial().optional(),
});

/**
 * Poll Media Object Structure Infer
 *
 * The inferred zod object from {@link PollMediaStructure}
 */
export type PollMediaStructureInfer = z.infer<typeof PollMediaStructure>;

/**
 * Poll Answer Object Structure
 *
 * The answer object of a poll.
 *
 * The answer_id is a number that labels each answer. As an implementation detail, it currently starts at 1 for the first answer and goes up sequentially. We recommend against depending on this sequence.
 *
 * Currently, there is a maximum of 10 answers per poll.
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-answer-object-poll-answer-object-structure}
 */
export const PollAnswerStructure = z.object({
	/**
	 * The answer_id
	 */
	id: Integer,
	/**
	 * The data of the answer
	 *
	 * @see {@link PollMediaStructure}
	 */
	poll_media: PollMediaStructure,
});

/**
 * Poll Answer Object Structure Infer
 *
 * The inferred zod object from {@link PollAnswerStructure}
 */
export type PollAnswerStructureInfer = z.infer<typeof PollAnswerStructure>;

/**
 * Layout Type
 *
 * We might have different layouts for polls in the future. For now though, this number will be 1.
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#layout-type}
 */
export enum LayoutType {
	/**
	 * The, uhm, default layout type.
	 */
	Default = 1,
}

/**
 * Layout Type Enum
 *
 * Is a zod enum that represents the available {@link LayoutType}.
 */
export const LayoutTypeEnum = z.nativeEnum(LayoutType);

/**
 * Poll Create Request Object Structure
 *
 * This is the request object used when creating a poll across the different endpoints. It is similar but not exactly identical to the main poll object. The main difference is that the request has duration which eventually becomes expiry.
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-create-request-object}
 */
export const PollCreateRequestStructure = z.object({
	/**
	 * The question of the poll. Only text is supported.
	 *
	 * @see {@link PollMediaStructure}
	 */
	question: PollMediaStructure,
	/**
	 * Each of the answers available in the poll, up to 10
	 *
	 * @see {@link PollAnswerStructure}
	 */
	answers: z.array(PollAnswerStructure).max(10),
	/**
	 * Number of hours the poll should be open for, up to 7 days
	 */
	duration: Integer.max(168),
	/**
	 * Whether a user can select multiple answers
	 */
	allow_multiselect: z.boolean(),
	/**
	 * The layout type of the poll. Defaults to... DEFAULT!
	 *
	 * @see {@link LayoutType}
	 */
	layout_type: LayoutTypeEnum.optional(),
});

/**
 * Poll Create Request Object Structure Infer
 *
 * The inferred zod object from {@link PollCreateRequestStructure}
 */
export type PollCreateRequestStructureInfer = z.infer<typeof PollCreateRequestStructure>;

/**
 * Poll Object Structure
 *
 * The poll object is a complex object that holds information about a poll. It is used in the poll endpoints.
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-object-poll-object-structure}
 */
export const PollStructure = z.object({
	/**
	 * The question of the poll. Only text is supported.
	 *
	 * @see {@link PollMediaStructure}
	 */
	question: PollMediaStructure,
	/**
	 * Each of the answers available in the poll
	 *
	 * @see {@link PollAnswerStructure}
	 */
	answers: z.array(PollAnswerStructure),
	/**
	 * The time when the poll ends
	 */
	expiry: ISO8601Timestamp.nullable(),
	/**
	 * Whether a user can select multiple answers
	 */
	allow_multiselect: z.boolean(),
	/**
	 * The layout type of the poll
	 *
	 * @see {@link LayoutType}
	 */
	layout_type: LayoutTypeEnum,
	/**
	 * The results of the poll
	 *
	 * @see {@link PollResultsStructure}
	 */
	results: PollResultsStructure.optional(),
});

/**
 * Poll Object Structure Infer
 *
 * The inferred zod object from {@link PollStructure}
 */
export type PollStructureInfer = z.infer<typeof PollStructure>;
