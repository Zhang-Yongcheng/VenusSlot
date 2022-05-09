
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/sound.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bb130IWGFNKM7n3PNczQ2B1', 'sound');
// scripts/sound.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var PublicSetUp = require('PublicSetUp');

var sound = function () {
  return /*#__PURE__*/regeneratorRuntime.mark(function playVideo(id) {
    return regeneratorRuntime.wrap(function playVideo$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('*');

            if (PublicSetUp.sound == 0) {
              cc.audioEngine.playEffect(id, true);
            }

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, playVideo);
  });
}();

var _default = sound;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc291bmQuanMiXSwibmFtZXMiOlsiUHVibGljU2V0VXAiLCJyZXF1aXJlIiwic291bmQiLCJwbGF5VmlkZW8iLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJjYyIsImF1ZGlvRW5naW5lIiwicGxheUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxXQUFXLEdBQUNDLE9BQU8sQ0FBQyxhQUFELENBQXZCOztBQUdBLElBQU1DLEtBQUssR0FBSSxZQUFZO0FBQ3ZCLDhDQUFPLFNBQVVDLFNBQVYsQ0FBb0JDLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSEMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksR0FBWjs7QUFDQSxnQkFBR04sV0FBVyxDQUFDRSxLQUFaLElBQW1CLENBQXRCLEVBQXdCO0FBRXBCSyxjQUFBQSxFQUFFLENBQUNDLFdBQUgsQ0FBZUMsVUFBZixDQUEwQkwsRUFBMUIsRUFBOEIsSUFBOUI7QUFFSDs7QUFORTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBVUQsU0FBVjtBQUFBLEdBQVA7QUFhSCxDQWRhLEVBQWQ7O2VBZWVEIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgUHVibGljU2V0VXA9cmVxdWlyZSgnUHVibGljU2V0VXAnKTtcclxuXHJcblxyXG5jb25zdCBzb3VuZCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24qIHBsYXlWaWRlbyhpZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCcqJyk7XHJcbiAgICAgICAgaWYoUHVibGljU2V0VXAuc291bmQ9PTApe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChpZCwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBcclxuXHJcbn0pKCk7XHJcbmV4cG9ydCBkZWZhdWx0IHNvdW5kOyJdfQ==