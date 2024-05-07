import type { MessageStructureInfer, SnowflakeInfer } from "@aurajs/core";
import { Integer, Snowflake, UserStructure } from "@aurajs/core";
import { z } from "zod";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * Query Get Answer Voters
 *
 * Get a list of users that voted for this option.
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#get-answer-voters-query-string-params}
 */
export const QueryGetAnswerVoters = z.object({
	after: Snowflake.optional(),
	limit: Integer.min(1).max(100).default(25).optional(),
});

/**
 * Query Get Answer Voters Infer
 *
 * The inferred type of {@link QueryGetAnswerVoters}
 */
export type QueryGetAnswerVotersInfer = z.infer<typeof QueryGetAnswerVoters>;

/**
 * Response Get Answer Voters
 *
 * The response structure for the GetAnswerVoters endpoint.
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#get-answer-voters-response-object}
 */
export const ResponseGetAnswerVoters = z.object({ users: z.array(UserStructure) });

/**
 * Response Get Answer Voters Infer
 *
 * The inferred type of {@link ResponseGetAnswerVoters}
 */
export type ResponseGetAnswerVotersInfer = z.infer<typeof ResponseGetAnswerVoters>;

/**
 * Get Answer Voters
 *
 * Get a list of users that voted for this option.
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#get-answer-voters}
 */
export function GetAnswerVoters<T extends ResponseGetAnswerVotersInfer>(channelId: SnowflakeInfer, messageId: SnowflakeInfer, answerId: SnowflakeInfer, query?: QueryGetAnswerVotersInfer): RestMakeRequestOptions<T> {
	return {
		method: "GET",
		url: `/channels/${channelId}/polls/${messageId}/answers/${answerId}`,
		query: QueryGetAnswerVoters.parse(query),
	};
}

/**
 * End Poll
 *
 * Ends a poll and publishes the results.
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#end-poll}
 */
export function EndPoll<T extends MessageStructureInfer>(channelId: SnowflakeInfer, messageId: SnowflakeInfer): RestMakeRequestOptions<T> {
	return {
		method: "POST",
		url: `/channels/${channelId}/polls/${messageId}/expire`,
	};
}
