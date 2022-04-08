
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/lineFrames.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '39601ETg/9KGoLPsbyMzon/', 'lineFrames');
// scripts/lineFrames.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;
// 0 3 6  9 12
// 1 4 7 10 13
// 2 5 8 11 14
var lineFrames = {
  1: [1, 4, 7, 10, 13],
  2: [0, 3, 6, 9, 12],
  3: [2, 5, 8, 11, 14],
  4: [0, 4, 8, 10, 12],
  5: [2, 4, 6, 10, 14],
  6: [0, 3, 7, 9, 12],
  7: [2, 5, 7, 11, 14],
  8: [1, 5, 8, 11, 13],
  9: [1, 3, 6, 9, 13]
};
var _default = lineFrames;
exports["default"] = _default;
module.exports = exports["default"];

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGluZUZyYW1lcy5qcyJdLCJuYW1lcyI6WyJsaW5lRnJhbWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHO0FBQ2pCLEtBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxFQUFWLEVBQWMsRUFBZCxDQURjO0FBRWpCLEtBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsRUFBYixDQUZjO0FBR2pCLEtBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxFQUFWLEVBQWMsRUFBZCxDQUhjO0FBSWpCLEtBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxFQUFWLEVBQWMsRUFBZCxDQUpjO0FBS2pCLEtBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxFQUFWLEVBQWMsRUFBZCxDQUxjO0FBTWpCLEtBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsRUFBYixDQU5jO0FBT2pCLEtBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxFQUFWLEVBQWMsRUFBZCxDQVBjO0FBUWpCLEtBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxFQUFWLEVBQWMsRUFBZCxDQVJjO0FBU2pCLEtBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsRUFBYjtBQVRjLENBQW5CO2VBWWVBIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyAwIDMgNiAgOSAxMlxyXG4vLyAxIDQgNyAxMCAxM1xyXG4vLyAyIDUgOCAxMSAxNFxyXG5cclxuY29uc3QgbGluZUZyYW1lcyA9IHtcclxuICAxOiBbMSwgNCwgNywgMTAsIDEzXSxcclxuICAyOiBbMCwgMywgNiwgOSwgMTJdLFxyXG4gIDM6IFsyLCA1LCA4LCAxMSwgMTRdLFxyXG4gIDQ6IFswLCA0LCA4LCAxMCwgMTJdLFxyXG4gIDU6IFsyLCA0LCA2LCAxMCwgMTRdLFxyXG4gIDY6IFswLCAzLCA3LCA5LCAxMl0sXHJcbiAgNzogWzIsIDUsIDcsIDExLCAxNF0sXHJcbiAgODogWzEsIDUsIDgsIDExLCAxM10sXHJcbiAgOTogWzEsIDMsIDYsIDksIDEzXVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbGluZUZyYW1lcztcclxuIl19