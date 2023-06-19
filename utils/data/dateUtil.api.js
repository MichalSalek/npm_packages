"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDateNowInString = void 0;
var getDateNowInString = function (_a) {
    var _b = _a === void 0 ? { withTimestamp: true, getISOFormat: true } : _a, _c = _b.withTimestamp, withTimestamp = _c === void 0 ? true : _c, _d = _b.getISOFormat, getISOFormat = _d === void 0 ? true : _d;
    var dateNow = new Date();
    if (getISOFormat) {
        return "".concat(withTimestamp ? '[' + Date.now() + ']' : '', " ").concat(dateNow.toISOString());
    }
    else {
        var date = dateNow.toLocaleDateString('en-us', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        });
        return "".concat(withTimestamp ? '[' + Date.now() + ']' : '', " ").concat(date);
    }
};
exports.getDateNowInString = getDateNowInString;
//# sourceMappingURL=dateUtil.api.js.map