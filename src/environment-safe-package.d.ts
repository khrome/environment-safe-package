/**
 * A JSON object
 */
declare type JSON = any;

/**
 * The basedir for fetching the package (defaults to '..').
 */
declare var baseDir: number;

/**
 * This function fetches the package in a uniform way
 * @returns packageData
 */
declare function getPackage(): JSON;

