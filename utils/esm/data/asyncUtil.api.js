import { __awaiter, __generator } from "tslib";
export var freezeThreadAndWait = function (delay) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve) {
                setTimeout(resolve, delay);
            })];
    });
}); };
//# sourceMappingURL=asyncUtil.api.js.map