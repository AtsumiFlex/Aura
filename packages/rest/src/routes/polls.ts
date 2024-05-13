import type { MessageStructureInfer, SnowflakeInfer } from "@aurajs/core";
import { Snowflake, UserStructure } from "@aurajs/core";
import { z } from "zod";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * Response Get Answer Voters
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#get-answer-voters-response-body}
 */
export const ResponseGetAnswerVoters = z.object({
	/**
	 * The users that voted for this answer
	 */
	users: z.array(UserStructure),
});

/**
 * Response Get Answer Voters Infer
 *
 * Is used to infer the type of the {@link ResponseGetAnswerVoters} object.
 */
export type ResponseGetAnswerVotersInfer = z.infer<typeof ResponseGetAnswerVoters>;

/**
 * Query Get Answer Voters
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#get-answer-voters-query-string-params}
 */
export const QueryGetAnswerVoters = z.object({
	/**
	 * Get users after this user ID
	 */
	after: Snowflake.optional(),
	/**
	 * Max number of users to return (1-100)
	 */
	limit: z.number().int().min(1).max(100).default(25).optional(),
});

/**
 * Query Get Answer Voters Infer
 *
 * Is used to infer the type of the {@link QueryGetAnswerVoters} object.
 */
export type QueryGetAnswerVotersInfer = z.infer<typeof QueryGetAnswerVoters>;

/**
 * Get Answer Voters
 *
 * Get a list of users that voted for this specific answer.
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#get-answer-voters}
 */
export function GetAnswerVoters(channelId: SnowflakeInfer, messageId: SnowflakeInfer, answerId: SnowflakeInfer): RestMakeRequestOptions<ResponseGetAnswerVotersInfer> {
	return {
		method: "GET",
		path: `/channels/${Snowflake.parse(channelId)}/polls/${Snowflake.parse(messageId)}/answers/${Snowflake.parse(answerId)}`,
	};
}

/**
 * End Poll
 *
 * Immediately ends the poll. You cannot end polls from other users.
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#end-poll}
 */
export function EndPoll(channelId: SnowflakeInfer, messageId: SnowflakeInfer): RestMakeRequestOptions<MessageStructureInfer> {
	return {
		method: "DELETE",
		path: `/channels/${Snowflake.parse(channelId)}/polls/${Snowflake.parse(messageId)}/expire`,
	};
}
