/**
 * A number, or a string containing a number.
 */
declare type JSON = any;

/**
 * The basedir for fetching the package (defaults to '..').
 */
declare var foo: number;

/**
 * This function fetches the package in a uniform way
 * @returns packageData
 */
declare function getPackage(): JSON;

