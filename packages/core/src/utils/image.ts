/**
 * ImageData function
 *
 * This function is used to create a data URL for an image. A data URL is a URI scheme that allows you to include data in-line in web pages as if they were external resources. This can be useful for small images, as it saves HTTP requests.
 *
 * The function takes two parameters: `type` and `data`. The `type` parameter is a string that specifies the MIME type of the image, which can be "image/gif", "image/jpeg", or "image/png". The `data` parameter is a string of the base64 encoded image data.
 *
 * The function returns a string that is the data URL for the image. The format of the returned string is "data:[<mediatype>][;base64],<data>", where [<mediatype>] is the MIME type of the image, and <data> is the base64 encoded image data.
 *
 * @param {("image/gif" | "image/jpeg" | "image/png")} type - The MIME type of the image.
 * @param {string} data - The base64 encoded image data.
 * @returns {string} The data URL for the image.
 * @see {@link https://discord.com/developers/docs/reference#image-data}
 */
export function ImageData(type: "image/gif" | "image/jpeg" | "image/png", data: string): string {
	return `data:${type};base64,${data}`;
}
