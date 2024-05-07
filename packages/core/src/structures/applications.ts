/**
 * Application Role Connection Metadata
 *
 * Represents the metadata of an application role connection.
 *
 * @see {@link https://discord.com/developers/docs/resources/application-role-connection-metadata#application-role-connection-metadata}
 */

import { z } from "zod";
import { LocalesKeysEnum } from "../globals/locales";

/**
 * Application Role Connection Metadata Type
 *
 * The type of the metadata of an application role connection.
 *
 * @see {@link https://discord.com/developers/docs/resources/application-role-connection-metadata#application-role-connection-metadata-object-application-role-connection-metadata-type}
 */
export enum ApplicationRoleConnectionMetadataTypes {
	/**
	 * The metadata value (integer) is less than or equal to the guild's configured value (integer)
	 */
	IntegerLessThanOrEqual = 1,
	/**
	 * The metadata value (integer) is greater than or equal to the guild's configured value (integer)
	 */
	IntegerGreaterThanOrEqual = 2,
	/**
	 * The metadata value (integer) is equal to the guild's configured value (integer)
	 */
	IntegerEqual = 3,
	/**
	 * The metadata value (integer) is not equal to the guild's configured value (integer)
	 */
	IntegerNotEqual = 4,
	/**
	 * The metadata value (ISO8601 string) is less than or equal to the guild's configured value (integer; days before current date)
	 */
	DateTimeLessThanOrEqual = 5,
	/**
	 * The metadata value (ISO8601 string) is greater than or equal to the guild's configured value (integer; days before current date)
	 */
	DateTimeGreaterThanOrEqual = 6,
	/**
	 * The metadata value (integer) is equal to the guild's configured value (integer; 1)
	 */
	BooleanEqual = 7,
	/**
	 * The metadata value (integer) is not equal to the guild's configured value (integer; 1)
	 */
	BooleanNotEqual = 8,
}

/**
 * Application Role Connection Metadata Type Enum
 *
 * Is a zod enum that represents the available {@link ApplicationRoleConnectionMetadataTypes}.
 */
export const ApplicationRoleConnectionMetadataTypesEnum = z.nativeEnum(ApplicationRoleConnectionMetadataTypes);

/**
 * Application Role Connection Metadata Structure
 *
 * Represents the metadata of an application role connection.
 *
 * @see {@link https://discord.com/developers/docs/resources/application-role-connection-metadata#application-role-connection-metadata-object-application-role-connection-metadata-structure}
 */
export const ApplicationRoleConnectionMetadataStructure = z.object({
	type: ApplicationRoleConnectionMetadataTypesEnum,
	key: z.string().regex(/^[\d_a-z]{1,50}$/),
	name: z.string().min(1).max(100),
	name_localizations: z.record(LocalesKeysEnum, z.string().min(1).max(100)).optional(),
	description: z.string().min(1).max(200),
	description_localizations: z.record(LocalesKeysEnum, z.string().min(1).max(200)).optional(),
});

/**
 * Application Role Connection Metadata Structure Infer
 *
 * The inferred type of {@link ApplicationRoleConnectionMetadataStructure}
 */
export type ApplicationRoleConnectionMetadataStructureInfer = z.infer<typeof ApplicationRoleConnectionMetadataStructure>;

