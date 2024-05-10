/**
 * Application Role Connection Metadata
 *
 * A representation of role connection metadata for an application.
 *
 * @see {@link https://discord.com/developers/docs/resources/application-role-connection-metadata#application-role-connection-metadata}
 */

import { z } from "zod";
import { LocalesKeys } from "../globals/locales";

/**
 * Application Role Connection Metadata Type
 *
 * @see {@link https://discord.com/developers/docs/resources/application-role-connection-metadata#application-role-connection-metadata-object-application-role-connection-metadata-type}
 */
export enum ApplicationRoleConnectionMetadataType {
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
 * Is a zod enum that represents the available {@link ApplicationRoleConnectionMetadataType}.
 */
export const ApplicationRoleConnectionMetadataTypeEnum = z.nativeEnum(ApplicationRoleConnectionMetadataType);

/**
 * Application Role Connection Metadata Structure
 *
 * A representation of role connection metadata for an application.
 *
 * @see {@link https://discord.com/developers/docs/resources/application-role-connection-metadata#application-role-connection-metadata-object-application-role-connection-metadata-structure}
 */
export const ApplicationRoleConnectionMetadataStructure = z.object({
	/**
	 * Type of metadata value
	 *
	 * @see {@link ApplicationRoleConnectionMetadataType}
	 */
	type: ApplicationRoleConnectionMetadataTypeEnum,
	/**
	 * Dictionary key for the metadata field (must be a-z, 0-9, or _ characters; 1-50 characters)
	 */
	key: z.string().min(1).max(50),
	/**
	 * Name of the metadata field (1-100 characters)
	 */
	name: z.string().min(1).max(100),
	/**
	 * Translations of the name
	 */
	name_localizations: z.record(LocalesKeys, z.string()).optional(),
	/**
	 * Description of the metadata field (1-200 characters)
	 */
	description: z.string().min(1).max(200),
	/**
	 * Translations of the description
	 */
	description_localizations: z.record(LocalesKeys, z.string()).optional(),
});

/**
 * Application Role Connection Metadata Structure Infer
 *
 * The inferred zod object from {@link ApplicationRoleConnectionMetadataStructure}
 */
export type ApplicationRoleConnectionMetadataStructureInfer = z.infer<typeof ApplicationRoleConnectionMetadataStructure>;
