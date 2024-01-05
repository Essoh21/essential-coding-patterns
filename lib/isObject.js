"use strict";

/**
 * Check if input is an Object other than array or null
 * @param{any} -any input
 * @returns{boolean} -true if param is an Object and not null or array
 */

export default function isObject(obj) {
  return !Array.isArray(obj) && obj !== null && typeof obj === "object";
}
