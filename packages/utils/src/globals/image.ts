/**
 * Image Data
 *
 * Image data is a Data URI scheme that supports JPG, GIF, and PNG formats. An example Data URI format is...
 *
 * @see {@link https://discord.com/developers/docs/reference#image-data}
 */
export function ImageData(type: "image/gif" | "image/jpeg" | "image/png", data: string): string {
	return `data:${type};base64,${data}`;
}
