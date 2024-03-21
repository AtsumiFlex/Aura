import type { AuthorizationHeaderType } from "../types";

export const BaseUrl = "https://discord.com/api";

export const AuthorizationHeader = (type: AuthorizationHeaderType, token: string) => ({ Authorization: `${type} ${token}` });
