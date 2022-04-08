"use strict";
cc._RF.push(module, 'e0de66QVMBJKYV/WAVPXtub', 'getSymbolAnchor');
// scripts/getSymbolAnchor.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var getSymbolAnchor = function () {
  var cached = {};
  return function getSymbolAnchor(symbolGridIndex) {
    var col = Math.floor(symbolGridIndex / 3);
    var row = symbolGridIndex % 3;
    var path = "Canvas/Game/Machine/Performance/Anchors/" + (col + 1) + "/" + (row + 1);
    var node = cached[path];

    if (node === undefined) {
      node = cached[path] = cc.find(path);
    }

    return node;
  };
}();

var _default = getSymbolAnchor;
exports["default"] = _default;
module.exports = exports["default"];

cc._RF.pop();