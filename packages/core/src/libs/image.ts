/**
 * Convert image data to data URL
 *
 * @param format
 * @param data
 */
export function imageData(format: "image/gif" | "image/jpeg" | "image/png", data: string) {
	return `data:image/${format};base64,${data}`;
}
