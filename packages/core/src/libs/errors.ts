import { z } from "zod";

/**
 * Zod Error Message
 *
 * Returns a string that represents the error message from a ZodError.
 *
 * @param error The ZodError to get the message from.
 */
export function zodErrorMessage(error: z.ZodError | unknown): string {
	if (error instanceof z.ZodError) {
		return error.errors.map((error) => error.message).join("\n");
	}

	return "An unknown error occurred.";
}
