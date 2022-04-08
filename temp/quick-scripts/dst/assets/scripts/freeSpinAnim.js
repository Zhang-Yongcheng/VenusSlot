
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/freeSpinAnim.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b0b669BCXVCUpQgg5VRna7b', 'freeSpinAnim');
// scripts/freeSpinAnim.js

"use strict";

exports.__esModule = true;
exports["default"] = freeSpinAnim;

var _co = _interopRequireDefault(require("./co.cc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(freeSpinAnim);

function freeSpinAnim() {
  var type;
  return regeneratorRuntime.wrap(function freeSpinAnim$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          type = cc.store.gameResult.type;
          console.log(type);

          if (!(type == 2)) {
            _context.next = 7;
            break;
          }

          _context.next = 5;
          return _co["default"].waitForSeconds(5);

        case 5:
          _context.next = 9;
          break;

        case 7:
          _context.next = 9;
          return;

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZnJlZVNwaW5BbmltLmpzIl0sIm5hbWVzIjpbImZyZWVTcGluQW5pbSIsInR5cGUiLCJjYyIsInN0b3JlIiwiZ2FtZVJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJjbyIsIndhaXRGb3JTZWNvbmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O21EQUN5QkE7O0FBQVYsU0FBVUEsWUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSkMsVUFBQUEsSUFESSxHQUNJQyxFQUFFLENBQUNDLEtBQUgsQ0FBU0MsVUFEYixDQUNKSCxJQURJO0FBRVhJLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxJQUFaOztBQUZXLGdCQUdSQSxJQUFJLElBQUUsQ0FIRTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUlQLGlCQUFNTSxlQUFHQyxjQUFILENBQWtCLENBQWxCLENBQU47O0FBSk87QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFNUDs7QUFOTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvIGZyb20gJy4vY28uY2MnO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogZnJlZVNwaW5BbmltKCl7XHJcbiAgICBjb25zdCB7dHlwZX0gPSBjYy5zdG9yZS5nYW1lUmVzdWx0O1xyXG4gICAgY29uc29sZS5sb2codHlwZSk7XHJcbiAgICBpZih0eXBlPT0yKXtcclxuICAgICAgICB5aWVsZCBjby53YWl0Rm9yU2Vjb25kcyg1KTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHlpZWxkXHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG59Il19