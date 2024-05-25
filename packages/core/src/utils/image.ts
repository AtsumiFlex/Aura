/**
 * @see {https://discord.com/developers/docs/reference#image-data}
 */
export function ImageDataURI(data: string, format: "image/gif" | "image/jpeg" | "image/png"): string {
	return `data:image/${format};base64,${data}`;
}
