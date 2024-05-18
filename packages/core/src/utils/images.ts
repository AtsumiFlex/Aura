import type { Buffer } from "node:buffer";

/**
 * Converts image data to a Data URI.
 *
 * This function takes an image MIME type and a Buffer containing image data,
 * then returns a Data URI that can be used to embed the image directly in HTML or CSS.
 *
 * @param {"image/gif" | "image/jpeg" | "image/png"} type - The MIME type of the image.
 * @param {Buffer} data - The Buffer containing the image data.
 * @returns {string} The Data URI representing the image.
 * @example
 * import { readFileSync } from 'node:fs';
 * import { ImageDataURI } from './path/to/your/module';
 *
 * const imageBuffer = readFileSync('path/to/image.png');
 * const dataURI = ImageDataURI('image/png', imageBuffer);
 * console.log(dataURI); // Outputs: data:image/png;base64,iVBORw0KGgoAAAANSUhEUg...
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs}
 * @see {@link https://nodejs.org/api/buffer.html#buffer_Buffer}
 */
export function ImageDataURI(type: "image/gif" | "image/jpeg" | "image/png", data: Buffer): string {
	return `data:${type};base64,${data.toString("base64")}`;
}
