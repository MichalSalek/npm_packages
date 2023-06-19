"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUndefinedType = void 0;
// Shorthand for undefined type check.
// TypeScript transparent with guard statements. I you need, use then conventional notation (typeof) or optional?.chaining.
//
var isUndefinedType = function (somethingToCheck) { return typeof somethingToCheck === 'undefined'; };
exports.isUndefinedType = isUndefinedType;
//# sourceMappingURL=typesUtil.api.js.map