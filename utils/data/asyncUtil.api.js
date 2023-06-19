"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.freezeThreadAndWait = void 0;
var tslib_1 = require("tslib");
var freezeThreadAndWait = function (delay) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve) {
                setTimeout(resolve, delay);
            })];
    });
}); };
exports.freezeThreadAndWait = freezeThreadAndWait;
//# sourceMappingURL=asyncUtil.api.js.map