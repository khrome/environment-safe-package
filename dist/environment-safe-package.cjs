"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setBaseDir = exports.getPackage = void 0;
var _browserOrNode = require("browser-or-node");
var mod = _interopRequireWildcard(require("module"));
var path = _interopRequireWildcard(require("path"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
let internalRequire = null;
if (typeof require !== 'undefined') internalRequire = require;
const ensureRequire = () => !internalRequire && (internalRequire = mod.createRequire(require('url').pathToFileURL(__filename).toString()));
/**
 * A JSON object
 * @typedef { object } JSON
 */

/**
  * set the baseDir
  * @function setBaseDir
  * @param {string} newBaseDir The basedir for fetching the package (defaults to '..').
  */
let baseDir = '..';
const setBaseDir = value => {
  baseDir = value;
};

/**
 * This function fetches the package in a uniform way
 * @async
 * @function getPackage
 * @returns { JSON } packageData
 */
exports.setBaseDir = setBaseDir;
const getPackage = async (incomingPath, allowErrors) => {
  let thisPath;
  try {
    if (_browserOrNode.isBrowser || _browserOrNode.isJsDom) {
      thisPath = incomingPath ? incomingPath[incomingPath.length - 1] === '/' ? incomingPath + 'package.json' : incomingPath + '/package.json' : 'package.json';
      const url = `${baseDir}/${thisPath}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } else {
      thisPath = incomingPath ? path.join(incomingPath, 'package.json') : path.join(process.cwd(), 'package.json');
      ensureRequire();
      return internalRequire(thisPath);
    }
  } catch (ex) {
    console.log(ex);
    if (allowErrors) throw new Error('Error loading package:' + incomingPath);
  }
};
exports.getPackage = getPackage;