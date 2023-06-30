import { isBrowser, isJsDom } from 'browser-or-node';
import * as mod from 'module';
import * as path from 'path';
let require = null;
const ensureRequire = ()=> (!require) && (require = mod.createRequire(import.meta.url));

export let baseDir = '..';
export const getPackage = async ()=>{
    if(isBrowser || isJsDom){
        const url = `${baseDir}/package.json`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }else{
        ensureRequire();
        return require(path.join(process.cwd(), 'package.json'));
    }
}