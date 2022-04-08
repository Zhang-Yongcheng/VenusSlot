"use strict";
cc._RF.push(module, '228bf6KrtxN0qHJ1bjh23br', 'getSymbolSprite');
// scripts/getSymbolSprite.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var getSymbolSprite = function () {
  var cached = {};
  return function getSymbolSprite(symbolIndex) {
    var path = "Canvas/Game/Machine/Performance/Symbols/" + (symbolIndex + 1);
    var symbolSprite = cached[path];

    if (symbolSprite === undefined) {
      symbolSprite = cached[path] = cc.find(path).getComponent(cc.Sprite);
    }

    return symbolSprite;
  };
}();

var _default = getSymbolSprite;
exports["default"] = _default;
module.exports = exports["default"];

cc._RF.pop();