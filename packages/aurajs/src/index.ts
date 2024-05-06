import type { DiscordHeadersInfer } from "@aurajs/core";
import { DiscordHeaders } from "@aurajs/core";

try {
	const headers: DiscordHeadersInfer = { "Content-Type": "multipart/form-data" };
	DiscordHeaders.parse(headers);
	console.log("Validation réussie !", user);
} catch (error) {
	console.error("Échec de la validation :", error.message);
}
