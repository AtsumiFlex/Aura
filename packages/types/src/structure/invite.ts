import { z } from "zod";

export enum InviteTargetTypes {
	Stream = 1,
	EmbeddedApplication = 2,
}

export const InviteTargetTypesEnum = z.nativeEnum(InviteTargetTypes);
