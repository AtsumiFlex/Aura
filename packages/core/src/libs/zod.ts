import { z } from "zod";

/**
 * @function zodErrorInterceptor
 * @description This function intercepts errors thrown by zod and returns a new Error object with a formatted error message.
 * If the error is an instance of z.ZodError, it extracts the error messages from the zod error object, joins them into a single string, and uses that string as the message for the new Error object.
 * If the error is not an instance of z.ZodError, it returns a new Error object with a generic error message.
 * @param {unknown} error - The error to intercept. This is expected to be an instance of z.ZodError, but it can be any value.
 * @returns {Error} A new Error object with a formatted error message.
 */
export function zodErrorInterceptor(error: unknown): Error {
	if (error instanceof z.ZodError) {
		return new Error(error.errors.map((err) => err.message).join(", "));
	}

	return new Error("An unknown error occurred.");
}
