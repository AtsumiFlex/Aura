import { Buffer } from "node:buffer";
import { URL } from "node:url";
import type { IntegerInfer, SnowflakeInfer } from "@luna/core";
import { CDN_BASE_URL, ImageFormats } from "@luna/core";
import { request } from "undici";

export type CDNEndpointOptions = {
	gif?: boolean;
	path: string;
};

export type CDNAttachment = {
	ex?: string;
	hm?: string;
	is?: string;
	size?: IntegerInfer;
};

/**
 * Class representing the Discord CDN.
 * Provides methods to generate URLs for various Discord resources.
 */
export class CDN {
	private _stickerBaseURL = "https://media.discordapp.net/stickers";

	private _baseURL = CDN_BASE_URL;

	/**
	 * Checks if the hash begins with "a_".
	 *
	 * @param {string} hash - The hash string to check.
	 * @returns {boolean} True if the hash starts with "a_", otherwise false.
	 */
	public isHashBeginsWith_a(hash: string): boolean {
		return hash.startsWith("a_");
	}

	/**
	 * Generates the URL for a custom emoji.
	 *
	 * @param {SnowflakeInfer} emojiId - The ID of the emoji.
	 * @param {ImageFormats} [format] - The format of the image.
	 * @returns {CDNEndpointOptions} The endpoint options.
	 * @example
	 * const options = cdn.customEmoji('123456789012345678');
	 * console.log(options); // Outputs: { path: 'https://cdn.discordapp.com/emojis/123456789012345678.png' }
	 */
	public customEmoji(emojiId: SnowflakeInfer, format: ImageFormats.GIF | ImageFormats.JPEG | ImageFormats.JPG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG): CDNEndpointOptions {
		return { path: `${this._baseURL}/emojis/${emojiId}.${format}` };
	}

	/**
	 * Generates the URL for a guild icon.
	 *
	 * @param {SnowflakeInfer} guildId - The ID of the guild.
	 * @param {string} iconHash - The hash of the icon.
	 * @param {ImageFormats} [format] - The format of the image.
	 * @returns {CDNEndpointOptions} The endpoint options.
	 * @example
	 * const options = cdn.guildIcon('123456789012345678', 'iconHash');
	 * console.log(options); // Outputs: { path: 'https://cdn.discordapp.com/icons/123456789012345678/iconHash.png' }
	 */
	public guildIcon(guildId: SnowflakeInfer, iconHash: string, format: ImageFormats.GIF | ImageFormats.JPEG | ImageFormats.JPG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG): CDNEndpointOptions {
		return {
			path: `${this._baseURL}/icons/${guildId}/${iconHash}.${format}`,
			gif: this.isHashBeginsWith_a(iconHash),
		};
	}

	/**
	 * Generates the URL for a guild splash image.
	 *
	 * @param {SnowflakeInfer} guildId - The ID of the guild.
	 * @param {string} splashHash - The hash of the splash image.
	 * @param {ImageFormats} [format] - The format of the image.
	 * @returns {CDNEndpointOptions} The endpoint options.
	 * @example
	 * const options = cdn.guildSplash('123456789012345678', 'splashHash');
	 * console.log(options); // Outputs: { path: 'https://cdn.discordapp.com/splashes/123456789012345678/splashHash.png' }
	 */
	public guildSplash(guildId: SnowflakeInfer, splashHash: string, format: ImageFormats.JPEG | ImageFormats.JPG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG): CDNEndpointOptions {
		return { path: `${this._baseURL}/splashes/${guildId}/${splashHash}.${format}` };
	}

	/**
	 * Generates the URL for a guild discovery splash image.
	 *
	 * @param {SnowflakeInfer} guildId - The ID of the guild.
	 * @param {string} discoverySplashHash - The hash of the discovery splash image.
	 * @param {ImageFormats} [format] - The format of the image.
	 * @returns {CDNEndpointOptions} The endpoint options.
	 * @example
	 * const options = cdn.guildDiscoverySplash('123456789012345678', 'discoverySplashHash');
	 * console.log(options); // Outputs: { path: 'https://cdn.discordapp.com/discovery-splashes/123456789012345678/discoverySplashHash.png' }
	 */
	public guildDiscoverySplash(guildId: SnowflakeInfer, discoverySplashHash: string, format: ImageFormats.JPEG | ImageFormats.JPG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG): CDNEndpointOptions {
		return { path: `${this._baseURL}/discovery-splashes/${guildId}/${discoverySplashHash}.${format}` };
	}

	/**
	 * Generates the URL for a guild banner.
	 *
	 * @param {SnowflakeInfer} guildId - The ID of the guild.
	 * @param {string} bannerHash - The hash of the banner.
	 * @param {ImageFormats} [format] - The format of the image.
	 * @returns {CDNEndpointOptions} The endpoint options.
	 * @example
	 * const options = cdn.guildBanner('123456789012345678', 'bannerHash');
	 * console.log(options); // Outputs: { path: 'https://cdn.discordapp.com/banners/123456789012345678/bannerHash.png' }
	 */
	public guildBanner(guildId: SnowflakeInfer, bannerHash: string, format: ImageFormats.GIF | ImageFormats.JPEG | ImageFormats.JPG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG): CDNEndpointOptions {
		return {
			path: `${this._baseURL}/banners/${guildId}/${bannerHash}.${format}`,
			gif: this.isHashBeginsWith_a(bannerHash),
		};
	}

	/**
	 * Generates the URL for a user's default avatar.
	 *
	 * @param {SnowflakeInfer} userId - The ID of the user.
	 * @returns {CDNEndpointOptions} The endpoint options.
	 * @example
	 * const options = cdn.defaultUserAvatar('123456789012345678');
	 * console.log(options); // Outputs: { path: 'https://cdn.discordapp.com/embed/avatars/1.png' }
	 */
	public defaultUserAvatar(userId: SnowflakeInfer): CDNEndpointOptions {
		const hash = (Number(userId) >> 22) % 6;
		return { path: `${this._baseURL}/embed/avatars/${hash}.png` };
	}

	/**
	 * Generates the URL for a user's avatar.
	 *
	 * @param {SnowflakeInfer} userId - The ID of the user.
	 * @param {string} avatarHash - The hash of the avatar.
	 * @param {ImageFormats} [format] - The format of the image.
	 * @returns {CDNEndpointOptions} The endpoint options.
	 * @example
	 * const options = cdn.userAvatar('123456789012345678', 'avatarHash');
	 * console.log(options); // Outputs: { path: 'https://cdn.discordapp.com/avatars/123456789012345678/avatarHash.png' }
	 */
	public userAvatar(userId: SnowflakeInfer, avatarHash: string, format: ImageFormats.GIF | ImageFormats.JPEG | ImageFormats.JPG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG): CDNEndpointOptions {
		return {
			path: `${this._baseURL}/avatars/${userId}/${avatarHash}.${format}`,
			gif: this.isHashBeginsWith_a(avatarHash),
		};
	}

	/**
	 * Generates the URL for a guild member's avatar.
	 *
	 * @param {SnowflakeInfer} guildId - The ID of the guild.
	 * @param {SnowflakeInfer} userId - The ID of the user.
	 * @param {string} avatarHash - The hash of the avatar.
	 * @param {ImageFormats} [format] - The format of the image.
	 * @returns {CDNEndpointOptions} The endpoint options.
	 * @example
	 * const options = cdn.guildMemberAvatar('123456789012345678', '123456789012345678', 'avatarHash');
	 * console.log(options); // Outputs: { path: 'https://cdn.discordapp.com/guilds/123456789012345678/users/123456789012345678/avatars/avatarHash.png' }
	 */
	public guildMemberAvatar(guildId: SnowflakeInfer, userId: SnowflakeInfer, avatarHash: string, format: ImageFormats.GIF | ImageFormats.JPEG | ImageFormats.JPG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG): CDNEndpointOptions {
		return {
			path: `${this._baseURL}/guilds/${guildId}/users/${userId}/avatars/${avatarHash}.${format}`,
			gif: this.isHashBeginsWith_a(avatarHash),
		};
	}

	/**
	 * Generates the URL for a user's avatar decoration.
	 *
	 * @param {SnowflakeInfer} userId - The ID of the user.
	 * @param {string} decorationHash - The hash of the avatar decoration.
	 * @returns {CDNEndpointOptions} The endpoint options.
	 * @example
	 * const options = cdn.userAvatarDecoration('123456789012345678', 'decorationHash');
	 * console.log(options); // Outputs: { path: 'https://cdn.discordapp.com/avatar-decorations/123456789012345678/decorationHash.png' }
	 */
	public userAvatarDecoration(userId: SnowflakeInfer, decorationHash: string): CDNEndpointOptions {
		return { path: `${this._baseURL}/avatar-decorations/${userId}/${decorationHash}.png` };
	}

	/**
	 * Generates the URL for an application icon.
	 *
	 * @param {SnowflakeInfer} applicationId - The ID of the application.
	 * @param {string} iconHash - The hash of the icon.
	 * @param {ImageFormats} [format] - The format of the image.
	 * @returns {CDNEndpointOptions} The endpoint options.
	 * @example
	 * const options = cdn.applicationIcon('123456789012345678', 'iconHash');
	 * console.log(options); // Outputs: { path: 'https://cdn.discordapp.com/app-icons/123456789012345678/iconHash.png' }
	 */
	public applicationIcon(applicationId: SnowflakeInfer, iconHash: string, format: ImageFormats.JPEG | ImageFormats.JPG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG): CDNEndpointOptions {
		return { path: `${this._baseURL}/app-icons/${applicationId}/${iconHash}.${format}` };
	}

	/**
	 * Generates the URL for an application cover image.
	 *
	 * @param {SnowflakeInfer} applicationId - The ID of the application.
	 * @param {string} coverHash - The hash of the cover image.
	 * @param {ImageFormats} [format] - The format of the image.
	 * @returns {CDNEndpointOptions} The endpoint options.
	 * @example
	 * const options = cdn.applicationCover('123456789012345678', 'coverHash');
	 * console.log(options); // Outputs: { path: 'https://cdn.discordapp.com/app-icons/123456789012345678/coverHash.png' }
	 */
	public applicationCover(applicationId: SnowflakeInfer, coverHash: string, format: ImageFormats.JPEG | ImageFormats.JPG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG): CDNEndpointOptions {
		return { path: `${this._baseURL}/app-icons/${applicationId}/${coverHash}.${format}` };
	}

	/**
	 * Generates the URL for an application asset.
	 *
	 * @param {SnowflakeInfer} applicationId - The ID of the application.
	 * @param {string} assetHash - The hash of the asset.
	 * @param {ImageFormats} [format] - The format of the image.
	 * @returns {CDNEndpointOptions} The endpoint options.
	 * @example
	 * const options = cdn.applicationAsset('123456789012345678', 'assetHash');
	 * console.log(options); // Outputs: { path: 'https://cdn.discordapp.com/app-assets/123456789012345678/assetHash.png' }
	 */
	public applicationAsset(applicationId: SnowflakeInfer, assetHash: string, format: ImageFormats.JPEG | ImageFormats.JPG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG): CDNEndpointOptions {
		return { path: `${this._baseURL}/app-assets/${applicationId}/${assetHash}.${format}` };
	}

	/**
	 * Generates the URL for an achievement icon.
	 *
	 * @param {SnowflakeInfer} applicationId - The ID of the application.
	 * @param {SnowflakeInfer} achievementId - The ID of the achievement.
	 * @param {string} iconHash - The hash of the icon.
	 * @param {ImageFormats} [format] - The format of the image.
	 * @returns {CDNEndpointOptions} The endpoint options.
	 * @example
	 * const options = cdn.achievementIcon('123456789012345678', '123456789012345678', 'iconHash');
	 * console.log(options); // Outputs: { path: 'https://cdn.discordapp.com/app-assets/123456789012345678/achievements/123456789012345678/icons/iconHash.png' }
	 */
	public achievementIcon(applicationId: SnowflakeInfer, achievementId: SnowflakeInfer, iconHash: string, format: ImageFormats.JPEG | ImageFormats.JPG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG): CDNEndpointOptions {
		return { path: `${this._baseURL}/app-assets/${applicationId}/achievements/${achievementId}/icons/${iconHash}.${format}` };
	}

	/**
	 * Generates the URL for a store page asset.
	 *
	 * @param {SnowflakeInfer} applicationId - The ID of the application.
	 * @param {string} assetHash - The hash of the asset.
	 * @param {ImageFormats} [format] - The format of the image.
	 * @returns {CDNEndpointOptions} The endpoint options.
	 * @example
	 * const options = cdn.storePageAsset('123456789012345678', 'assetHash');
	 * console.log(options); // Outputs: { path: 'https://cdn.discordapp.com/app-assets/123456789012345678/store/assetHash.png' }
	 */
	public storePageAsset(applicationId: SnowflakeInfer, assetHash: string, format: ImageFormats.JPEG | ImageFormats.JPG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG): CDNEndpointOptions {
		return { path: `${this._baseURL}/app-assets/${applicationId}/store/${assetHash}.${format}` };
	}

	/**
	 * Generates the URL for a sticker pack banner.
	 *
	 * @param {SnowflakeInfer} stickerPackId - The ID of the sticker pack.
	 * @param {string} bannerHash - The hash of the banner.
	 * @param {ImageFormats} [format] - The format of the image.
	 * @returns {CDNEndpointOptions} The endpoint options.
	 * @example
	 * const options = cdn.stickerPackBanner('123456789012345678', 'bannerHash');
	 * console.log(options); // Outputs: { path: 'https://cdn.discordapp.com/app-assets/123456789012345678/store/bannerHash.png' }
	 */
	public stickerPackBanner(stickerPackId: SnowflakeInfer, bannerHash: string, format: ImageFormats.JPEG | ImageFormats.JPG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG): CDNEndpointOptions {
		return { path: `${this._baseURL}/app-assets/${stickerPackId}/store/${bannerHash}.${format}` };
	}

	/**
	 * Generates the URL for a team icon.
	 *
	 * @param {SnowflakeInfer} teamId - The ID of the team.
	 * @param {string} iconHash - The hash of the icon.
	 * @param {ImageFormats} [format] - The format of the image.
	 * @returns {CDNEndpointOptions} The endpoint options.
	 * @example
	 * const options = cdn.teamIcon('123456789012345678', 'iconHash');
	 * console.log(options); // Outputs: { path: 'https://cdn.discordapp.com/team-icons/123456789012345678/iconHash.png' }
	 */
	public teamIcon(teamId: SnowflakeInfer, iconHash: string, format: ImageFormats.JPEG | ImageFormats.JPG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG): CDNEndpointOptions {
		return { path: `${this._baseURL}/team-icons/${teamId}/${iconHash}.${format}` };
	}

	/**
	 * Generates the URL for a sticker.
	 *
	 * @param {SnowflakeInfer} stickerId - The ID of the sticker.
	 * @param {ImageFormats} [format] - The format of the image.
	 * @returns {CDNEndpointOptions} The endpoint options.
	 * @example
	 * const options = cdn.sticker('123456789012345678');
	 * console.log(options); // Outputs: { path: 'https://cdn.discordapp.com/stickers/123456789012345678.png' }
	 */
	public sticker(stickerId: SnowflakeInfer, format: ImageFormats.GIF | ImageFormats.Lottie | ImageFormats.PNG = ImageFormats.PNG): CDNEndpointOptions {
		return { path: `${this._stickerBaseURL}/stickers/${stickerId}.${format}` };
	}

	/**
	 * Generates the URL for a role icon.
	 *
	 * @param {SnowflakeInfer} roleId - The ID of the role.
	 * @param {string} iconHash - The hash of the icon.
	 * @param {ImageFormats} [format] - The format of the image.
	 * @returns {CDNEndpointOptions} The endpoint options.
	 * @example
	 * const options = cdn.roleIcon('123456789012345678', 'iconHash');
	 * console.log(options); // Outputs: { path: 'https://cdn.discordapp.com/role-icons/123456789012345678/iconHash.png' }
	 */
	public roleIcon(roleId: SnowflakeInfer, iconHash: string, format: ImageFormats.JPEG | ImageFormats.JPG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG): CDNEndpointOptions {
		return { path: `${this._baseURL}/role-icons/${roleId}/${iconHash}.${format}` };
	}

	/**
	 * Generates the URL for a guild scheduled event cover image.
	 *
	 * @param {SnowflakeInfer} scheduledEventId - The ID of the scheduled event.
	 * @param {string} coverHash - The hash of the cover image.
	 * @param {ImageFormats} [format] - The format of the image.
	 * @returns {CDNEndpointOptions} The endpoint options.
	 * @example
	 * const options = cdn.guildScheduledEventCover('123456789012345678', 'coverHash');
	 * console.log(options); // Outputs: { path: 'https://cdn.discordapp.com/guild-events/123456789012345678/coverHash.png' }
	 */
	public guildScheduledEventCover(scheduledEventId: SnowflakeInfer, coverHash: string, format: ImageFormats.JPEG | ImageFormats.JPG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG): CDNEndpointOptions {
		return { path: `${this._baseURL}/guild-events/${scheduledEventId}/${coverHash}.${format}` };
	}

	/**
	 * Generates the URL for a guild member banner.
	 *
	 * @param {SnowflakeInfer} guildId - The ID of the guild.
	 * @param {SnowflakeInfer} userId - The ID of the user.
	 * @param {string} bannerHash - The hash of the banner.
	 * @param {ImageFormats} [format] - The format of the image.
	 * @returns {CDNEndpointOptions} The endpoint options.
	 * @example
	 * const options = cdn.guildMemberBanner('123456789012345678', '123456789012345678', 'bannerHash');
	 * console.log(options); // Outputs: { path: 'https://cdn.discordapp.com/guilds/123456789012345678/users/123456789012345678/banners/bannerHash.png' }
	 */
	public guildMemberBanner(guildId: SnowflakeInfer, userId: SnowflakeInfer, bannerHash: string, format: ImageFormats.GIF | ImageFormats.JPEG | ImageFormats.JPG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG): CDNEndpointOptions {
		return {
			path: `${this._baseURL}/guilds/${guildId}/users/${userId}/banners/${bannerHash}.${format}`,
			gif: this.isHashBeginsWith_a(bannerHash),
		};
	}

	/**
	 * Makes a request to the CDN endpoint.
	 *
	 * @param {CDNEndpointOptions} endpoint - The endpoint options.
	 * @param {CDNAttachment} [attachment] - The attachment options.
	 * @returns {Promise<Buffer>} The response data as a Buffer.
	 * @example
	 * const response = await cdn.makeRequest({ path: 'https://cdn.discordapp.com/emojis/123456789012345678.png' });
	 * console.log(response); // Outputs: <Buffer ...>
	 * @example
	 * const responseWithAttachment = await cdn.makeRequest({ path: 'https://cdn.discordapp.com/emojis/123456789012345678.png' }, { ex: '512' });
	 * console.log(responseWithAttachment); // Outputs: <Buffer ...>
	 */
	public async makeRequest(endpoint: CDNEndpointOptions, attachment?: CDNAttachment): Promise<Buffer> {
		const url = new URL(endpoint.path);
		if (endpoint.gif) {
			url.searchParams.set("size", "4096");
		} else if (attachment?.ex) {
			url.searchParams.set("size", attachment.ex);
		} else if (attachment?.hm) {
			url.searchParams.set("size", attachment.hm);
		} else if (attachment?.is) {
			url.searchParams.set("size", attachment.is);
		}

		const response = await request(url.toString());
		const data: Buffer[] = [];
		for await (const chunk of response.body) {
			data.push(chunk);
		}

		return Buffer.concat(data);
	}
}
