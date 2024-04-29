import type { Integer, Snowflake } from "index";
import { DiscordEpoch } from "index";

export function snowflakeToInteger(snowflake: Snowflake): Integer {
	const snowflakeBigInt = BigInt(snowflake);
	const integer = (snowflakeBigInt >> BigInt(22)) + BigInt(DiscordEpoch);
	return Number(integer);
}

export function integerToSnowflake(integer: Integer): Snowflake {
	const integerBigInt = BigInt(integer);
	const snowflake = integerBigInt - BigInt(DiscordEpoch) << BigInt(22);
	return snowflake.toString();
}

export function formatImageDataUri(format: "image/gif" | "image/jpeg" | "image/png", data: string): string {
	return `data:${format};base64,${data}`;
}

function createFormData(message: any): FormData {
	const formData = new FormData();

	// Add text fields
	// if (message.content) {
	// 	formData.append("content", message.content);
	// }
	//
	// if (message.tts) {
	// 	formData.append("tts", message.tts.toString());
	// }
	//
	// if (message.embeds) {
	// 	formData.append("payload_json", JSON.stringify({ embeds: message.embeds }));
	// }
	//
	// if (message.message_reference) {
	// 	formData.append("payload_json", JSON.stringify({ message_reference: message.message_reference }));
	// }
	//
	// if (message.attachments) {
	// 	formData.append("payload_json", JSON.stringify({ attachments: message.attachments }));
	// }

	if (message.files) {
		for (const [index, file] of message.files.entries()) {
			formData.append(`files[${index}]`, file.data, file.name);
		}
	}

	return formData;
}
