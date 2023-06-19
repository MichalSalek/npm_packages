import React, { useEffect, useRef } from 'react';
export var ControllersComposition = function (_a) {
    var children = _a.children, _b = _a.autostartFunctions, autostartFunctions = _b === void 0 ? [] : _b, _c = _a.JSXControllers, JSXControllers = _c === void 0 ? [] : _c, _d = _a.voidControllers, voidControllers = _d === void 0 ? [] : _d;
    var fireOnce = useRef(false);
    useEffect(function () {
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
    return React.createElement(React.Fragment, null,
        JSXControllers.map(function (controller) {
            var calledController = controller();
            if (!calledController) {
                console.error('@msalek/controllers:' + ' Empty called Controller');
            }
            return React.createElement("aside", { key: calledController.key }, calledController);
        }),
        children);
};
//# sourceMappingURL=controllers.composition.js.map