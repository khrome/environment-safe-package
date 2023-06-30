"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPackage = exports.baseDir = void 0;
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
 * The basedir for fetching the package (defaults to '..').
 * @var {number} foo
 */
let baseDir = '..';

/**
 * This function fetches the package in a uniform way
 * @async
 * @function getPackage
 * @returns { JSON } packageData
 */
exports.baseDir = baseDir;
const getPackage = async () => {
  if (_browserOrNode.isBrowser || _browserOrNode.isJsDom) {
    const url = `${baseDir}/package.json`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } else {
    ensureRequire();
    return internalRequire(path.join(process.cwd(), 'package.json'));
  }
};
exports.getPackage = getPackage;