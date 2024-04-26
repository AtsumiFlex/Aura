import type { Integer, ISO8601Timestamp } from "../../base/base";

/**
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-object-poll-object-structure}
 */
export type PollStructure = {
	allow_multiselect: boolean;
	answers: PollAnswerStructure[];
	expiry: ISO8601Timestamp | null;
	layout_type: LayoutTypes;
	question: PollMediaStructure;
	results?: PollResultsStructure;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-create-request-object-poll-create-request-object-structure}
 */
export type PollCreateRequestStructure = {
	allow_multiselect: boolean;
	answer: PollMediaStructure[];
	duration: Integer;
	layout_type?: LayoutTypes;
	question: PollMediaStructure;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/poll#layout-type}
 */
export enum LayoutTypes {
	Default = 1,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-media-object-poll-media-object-structure}
 */
export type PollMediaStructure = {
	emoji?: object; // TODO: partial emoji
	text?: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-answer-object-poll-answer-object-structure}
 */
export type PollAnswerStructure = {
	answer_id?: Integer;
	poll_media?: PollMediaStructure;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-results-object-poll-results-object-structure}
 */
export type PollResultsStructure = {
	answer_counts: PollAnswerCountStructure[];
	is_finalized: boolean;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-results-object-poll-answer-count-object-structure}
 */
export type PollAnswerCountStructure = {
	count: Integer;
	id: Integer;
	me_voted: boolean;
};
