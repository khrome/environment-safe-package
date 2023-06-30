import { isBrowser, isJsDom } from 'browser-or-node';
import * as mod from 'module';
import * as path from 'path';
let internalRequire = null;
if(typeof require !== 'undefined') internalRequire = require;
const ensureRequire = ()=> (!internalRequire) && (internalRequire = mod.createRequire(import.meta.url));

/**
 * A number, or a string containing a number.
 * @typedef { object } JSON
 */

/**
 * The basedir for fetching the package (defaults to '..').
 * @var {number} foo
 */
export let baseDir = '..';

/**
 * This function fetches the package in a uniform way
 * @async
 * @function getPackage
 * @returns { JSON } packageData
 */
export const getPackage = async ()=>{
    if(isBrowser || isJsDom){
        const url = `${baseDir}/package.json`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }else{
        ensureRequire();
        return internalRequire(path.join(process.cwd(), 'package.json'));
    }
};