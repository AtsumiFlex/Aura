import type { MessageStructureInfer, SnowflakeInfer } from "@aurajs/core";
import { Integer, Snowflake, UserStructure } from "@aurajs/core";
import { z } from "zod";
import type { RestRequestOptions } from "../globals/rest";

/**
 * Query Get Answer Voters
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
 * Is the inferred type of the {@link QueryGetAnswerVoters} zod object.
 */
export type QueryGetAnswerVotersInfer = z.infer<typeof QueryGetAnswerVoters>;

/**
 * Response Get Answer Voters
 *
 * Returns an array of user objects that voted for the answer.
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#get-answer-voters-response-body}
 */
export const ResponseGetAnswerVoters = z.array(UserStructure);

/**
 * Response Get Answer Voters Infer
 *
 * Is the inferred type of the {@link ResponseGetAnswerVoters} zod object.
 */
export type ResponseGetAnswerVotersInfer = z.infer<typeof ResponseGetAnswerVoters>;

/**
 * Get Answer Voters
 *
 * Get the voters of a poll.
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#get-answer-voters}
 */
export function GetAnswerVoters<T extends ResponseGetAnswerVotersInfer>(channelId: SnowflakeInfer, messageId: SnowflakeInfer, answerId: SnowflakeInfer, query?: QueryGetAnswerVotersInfer): RestRequestOptions<T> {
	return {
		url: `/channels/${channelId}/polls/${messageId}/answers/${answerId}/voters`,
		method: "GET",
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
export function EndPoll<T extends MessageStructureInfer>(channelId: SnowflakeInfer, messageId: SnowflakeInfer): RestRequestOptions<T> {
	return {
		url: `/channels/${channelId}/polls/${messageId}/expire`,
		method: "DELETE",
	};
}
