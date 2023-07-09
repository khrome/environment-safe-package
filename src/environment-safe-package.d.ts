/**
 * A JSON object
 */
declare type JSON = any;

/**
 * set the baseDir
 * @param newBaseDir - The basedir for fetching the package (defaults to '..').
 */
declare function setBaseDir(newBaseDir: string): void;

/**
 * This function fetches the package in a uniform way
 * @returns packageData
 */
declare function getPackage(): JSON;

