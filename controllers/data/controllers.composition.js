"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllersComposition = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var ControllersComposition = function (_a) {
    var children = _a.children, _b = _a.autostartFunctions, autostartFunctions = _b === void 0 ? [] : _b, _c = _a.JSXControllers, JSXControllers = _c === void 0 ? [] : _c, _d = _a.voidControllers, voidControllers = _d === void 0 ? [] : _d;
    var fireOnce = (0, react_1.useRef)(false);
    (0, react_1.useEffect)(function () {
        if (fireOnce.current)
            return function () { return undefined; };
        fireOnce.current = true;
        autostartFunctions.forEach(function (func) {
            func();
        });
        return function () { return undefined; };
    });
    voidControllers.forEach(function (controller) {
        controller();
    });
    return react_1.default.createElement(react_1.default.Fragment, null,
        JSXControllers.map(function (controller) {
            var calledController = controller();
            if (!calledController) {
                console.error('@msalek/controllers:' + ' Empty called Controller');
            }
            return react_1.default.createElement("aside", { key: calledController.key }, calledController);
        }),
        children);
};
exports.ControllersComposition = ControllersComposition;
//# sourceMappingURL=controllers.composition.js.map