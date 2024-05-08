import type { EmojiStructureInfer, GuildStructureInfer, SnowflakeInfer, UserStructureInfer } from "@aurajs/core";
import type { JSONCreateGuildEmojiInfer, JSONModifyGuildEmojiInfer } from "@aurajs/rest";
import { CreateGuildEmoji, DeleteGuildEmoji, GetGuildEmoji, ListGuildEmojis, ModifyGuildEmoji } from "@aurajs/rest";
import type { Client } from "./client";

export class Emojis {
	public id: SnowflakeInfer | null;

	public name: string | null;

	public roles?: SnowflakeInfer[];

	public user?: UserStructureInfer;

	public requireColons?: boolean;

	public managed?: boolean;

	public animated?: boolean;

	public available?: boolean;

	public constructor(data: EmojiStructureInfer) {
		this.id = data.id;
		this.name = data.name;
		this.roles = data.roles;
		this.user = data.user;
		this.requireColons = data.require_colons;
		this.managed = data.managed;
		this.animated = data.animated;
		this.available = data.available;
	}
}

export class GuildEmojis {
	public guild: GuildStructureInfer;

	private readonly _client: Client;

	public constructor(client: Client, guild: GuildStructureInfer) {
		this.guild = guild;
		this._client = client;
	}

	public async list(): Promise<Emojis[]> {
		const response = await this._client.rest.makeRequest(ListGuildEmojis(this.guild.id));
		return response.map((emoji) => this._resolve(emoji));
	}

	public async get(emojiId: SnowflakeInfer): Promise<Emojis> {
		const response = await this._client.rest.makeRequest(GetGuildEmoji(this.guild.id, emojiId));
		return this._resolve(response);
	}

	public async create(json: JSONCreateGuildEmojiInfer, reason?: string): Promise<Emojis> {
		const response = await this._client.rest.makeRequest(CreateGuildEmoji(this.guild.id, this._reason(reason), json));
		return this._resolve(response);
	}

	public async modify(emojiId: SnowflakeInfer, json: JSONModifyGuildEmojiInfer, reason?: string): Promise<Emojis> {
		const response = await this._client.rest.makeRequest(ModifyGuildEmoji(this.guild.id, emojiId, this._reason(reason), json));
		return this._resolve(response);
	}

	public async delete(emojiId: SnowflakeInfer, reason?: string): Promise<void> {
		await this._client.rest.makeRequest(DeleteGuildEmoji(this.guild.id, emojiId, this._reason(reason)));
	}

	public _reason(reason?: string): string {
		return reason ?? "No reason provided.";
	}

	private _resolve(emoji: Emojis | EmojiStructureInfer): Emojis {
		return emoji instanceof Emojis ? emoji : new Emojis(emoji);
	}
}
