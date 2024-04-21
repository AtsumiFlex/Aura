// https://discord.com/developers/docs/resources/poll#poll-resource
import type { Integer } from "../global";

// https://discord.com/developers/docs/resources/poll#poll-object-poll-object-structure
export type PollStructure = {
	allow_multiselect: boolean;
	answers: PollAnswerStructure[];
	expiry: string | null;
	layout_type: LayoutType;
	question: PollMediaStructure;
	results?: PollResultsStructure;
};

// https://discord.com/developers/docs/resources/poll#poll-create-request-object-poll-create-request-object-structure
export type PollCreateRequestObjectStructure = {
	allow_multiselect: boolean;
	answers: PollMediaStructure[];
	duration: Integer;
	layout_type?: LayoutType;
	question: PollMediaStructure;
};

// https://discord.com/developers/docs/resources/poll#layout-type
export enum LayoutType {
	Default = 1,
}

// https://discord.com/developers/docs/resources/poll#poll-media-object-poll-media-object-structure
export type PollMediaStructure = {
	emoji?: object;
	text?: string;
	// TODO: Emoji Object
};

// https://discord.com/developers/docs/resources/poll#poll-answer-object-poll-answer-object-structure
export type PollAnswerStructure = {
	answer_id: Integer;
	poll_media: PollMediaStructure;
};

// https://discord.com/developers/docs/resources/poll#poll-results-object-poll-results-object-structure
export type PollResultsStructure = {
	answers_counts: PollAnswerCountStructure[];
	is_finalized: boolean;
};

// https://discord.com/developers/docs/resources/poll#poll-results-object-poll-answer-count-object-structure
export type PollAnswerCountStructure = {
	count: Integer;
	id: Integer;
	me_voted: boolean;
};
