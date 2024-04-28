import type { Integer, ISO8601Timestamp, Snowflake } from "../globals";
import type { EmojiStructure } from "./emoji";
import type { UserStructure } from "./user";

/**
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-object-poll-object-structure}
 */
export type PollStructure = {
	answers: PollAnswerStructure[];
	expiry: ISO8601Timestamp | null;
	layout_type: LayoutType;
	question: PollMediaStructure;
	results?: PollResultsStructure;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-create-request-object-poll-create-request-object-structure}
 */
export type PollCreateRequestStructure = {
	allow_multiselect: boolean;
	answers: PollAnswerStructure[];
	duration: Integer;
	layout_type?: LayoutType;
	question: PollMediaStructure;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/poll#layout-type}
 */
export enum LayoutType {
	Default = 1,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-media-object-poll-media-object-structure}
 */
export type PollMediaStructure = {
	emoji: EmojiStructure;
	text?: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-answer-object-poll-answer-object-structure}
 */
export type PollAnswerStructure = {
	answer_id: Integer;
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

/**
 * @see {@link https://discord.com/developers/docs/resources/poll#get-answer-voters-query-string-params}
 */
export type QueryGetAnswerVoters = {
	after?: Snowflake;
	limit?: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/poll#get-answer-voters-response-body}
 */
export type ResponseGetAnswerVoters = {
	users: UserStructure[];
};
