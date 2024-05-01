import { z } from "zod";
import { Integer, ISO8601 } from "../globals";
import { EmojiStructure } from "./emoji";

export const PollAnswerCountStructure = z.object({
	id: Integer,
	count: Integer,
	me_voted: z.boolean(),
});
export type PollAnswerCountInfer = z.infer<typeof PollAnswerCountStructure>;

export const PollResultsStructure = z.object({
	is_finalized: z.boolean(),
	answer_counts: z.array(PollAnswerCountStructure),
});
export type PollResultsInfer = z.infer<typeof PollResultsStructure>;

export const PollMediaObjectStructure = z.object({
	text: z.string().optional(),
	emoji: EmojiStructure.partial().optional(),
});
export type PollMediaObjectInfer = z.infer<typeof PollMediaObjectStructure>;

export const PollAnswerObjectStructure = z.object({
	answer_id: Integer,
	poll_media: PollMediaObjectStructure,
});
export type PollAnswerObjectInfer = z.infer<typeof PollAnswerObjectStructure>;

export enum PollLayoutType {
	Default = 1,
}

export const PollLayoutTypeEnum = z.nativeEnum(PollLayoutType);

export const PollCreateRequestStructure = z.object({
	question: PollMediaObjectStructure,
	answers: z.array(PollAnswerObjectStructure).max(10),
	duration: Integer,
	allow_multiselect: z.boolean(),
	layout_type: PollLayoutTypeEnum.optional(),
});
export type PollCreateRequestInfer = z.infer<typeof PollCreateRequestStructure>;

export const PollObjectStructure = z.object({
	question: PollMediaObjectStructure,
	answers: z.array(PollAnswerObjectStructure),
	expiry: ISO8601.nullable(),
	allow_multiselect: z.boolean(),
	layout_type: PollLayoutTypeEnum,
	results: PollResultsStructure.optional(),
});
export type PollObjectInfer = z.infer<typeof PollObjectStructure>;
