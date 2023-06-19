"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomIntFromNumbersRange = void 0;
var randomIntFromNumbersRange = function (minRange, maxRange) {
    return Math.floor(Math.random() * (maxRange - minRange + 1) + minRange);
};
exports.randomIntFromNumbersRange = randomIntFromNumbersRange;
//# sourceMappingURL=numberUtil.api.js.map