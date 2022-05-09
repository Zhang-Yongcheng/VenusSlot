
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/playSymbolCol.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2eb7deXGDJNl6WX8kLesyPk', 'playSymbolCol');
// scripts/playSymbolCol.js

"use strict";

exports.__esModule = true;
exports["default"] = playSymbolCol;

var _co = _interopRequireDefault(require("./co.cc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(playSymbolCol);

var PublicSetUp = require('PublicSetUp');

function playSymbolCol(colIndex, speed) {
  var cols, col, spacing, dist0, dist, t0, dt, dy, newDist, movedDist, t1;
  return regeneratorRuntime.wrap(function playSymbolCol$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          cols = cc.find('Canvas/Game/Machine/Performance/Cols');
          col = cols.getChildByName("" + (colIndex + 1));
          spacing = col.children[1].y - col.children[0].y;
          dist0 = col.children[col.childrenCount - 3].y - col.children[0].y;
          dist = dist0;
          t0 = _co["default"].currentRuntime.lastTickTime;
          dt = 0;

        case 7:
          if (!true) {
            _context.next = 22;
            break;
          }

          dy = speed * dt;

          if (dy >= spacing) {
            dy = speed * (1 / 60 * 1000);
          }

          if (dy >= dist) {
            if (cc.store.isGameResultGot() === true) {
              if (col.redist > 0) {
                col.y = col.baseY;
                dy -= dist;
                dist0 = col.children[col.redist].y - col.children[0].y;
                dist = dist0;
                col.redist = 0;
              } else {
                dy = dist;
              }
            } else {
              col.y = col.baseY;
              dy -= dist;
              dist = dist0;
            }
          } else {
            if (col.redist2 > 0) {
              // dist0 = (col.children[col.redist2].y - col.children[0].y) - Math.abs(col.y - col.baseY);
              newDist = col.children[col.redist2].y - col.children[0].y;
              movedDist = dist0 - dist;
              dist0 = newDist - movedDist;
              dist = dist0;
              col.redist2 = 0;
            }
          }

          dist -= dy;
          col.y -= dy;
          _context.next = 15;
          return;

        case 15:
          if (!(dist <= 0)) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("break", 22);

        case 17:
          t1 = _co["default"].currentRuntime.lastTickTime;
          dt = t1 - t0;
          t0 = t1;
          _context.next = 7;
          break;

        case 22:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGxheVN5bWJvbENvbC5qcyJdLCJuYW1lcyI6WyJwbGF5U3ltYm9sQ29sIiwiUHVibGljU2V0VXAiLCJyZXF1aXJlIiwiY29sSW5kZXgiLCJzcGVlZCIsImNvbHMiLCJjYyIsImZpbmQiLCJjb2wiLCJnZXRDaGlsZEJ5TmFtZSIsInNwYWNpbmciLCJjaGlsZHJlbiIsInkiLCJkaXN0MCIsImNoaWxkcmVuQ291bnQiLCJkaXN0IiwidDAiLCJjbyIsImN1cnJlbnRSdW50aW1lIiwibGFzdFRpY2tUaW1lIiwiZHQiLCJkeSIsInN0b3JlIiwiaXNHYW1lUmVzdWx0R290IiwicmVkaXN0IiwiYmFzZVkiLCJyZWRpc3QyIiwibmV3RGlzdCIsIm1vdmVkRGlzdCIsInQxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O21EQUV5QkE7O0FBRHpCLElBQUlDLFdBQVcsR0FBQ0MsT0FBTyxDQUFDLGFBQUQsQ0FBdkI7O0FBQ2UsU0FBVUYsYUFBVixDQUF3QkcsUUFBeEIsRUFBa0NDLEtBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNQQyxVQUFBQSxJQURPLEdBQ0FDLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRLHNDQUFSLENBREE7QUFFUEMsVUFBQUEsR0FGTyxHQUVESCxJQUFJLENBQUNJLGNBQUwsT0FBdUJOLFFBQVEsR0FBRyxDQUFsQyxFQUZDO0FBSVBPLFVBQUFBLE9BSk8sR0FJR0YsR0FBRyxDQUFDRyxRQUFKLENBQWEsQ0FBYixFQUFnQkMsQ0FBaEIsR0FBb0JKLEdBQUcsQ0FBQ0csUUFBSixDQUFhLENBQWIsRUFBZ0JDLENBSnZDO0FBS1RDLFVBQUFBLEtBTFMsR0FLREwsR0FBRyxDQUFDRyxRQUFKLENBQWFILEdBQUcsQ0FBQ00sYUFBSixHQUFvQixDQUFqQyxFQUFvQ0YsQ0FBcEMsR0FBd0NKLEdBQUcsQ0FBQ0csUUFBSixDQUFhLENBQWIsRUFBZ0JDLENBTHZEO0FBTVRHLFVBQUFBLElBTlMsR0FNRkYsS0FORTtBQU9URyxVQUFBQSxFQVBTLEdBT0pDLGVBQUdDLGNBQUgsQ0FBa0JDLFlBUGQ7QUFRVEMsVUFBQUEsRUFSUyxHQVFKLENBUkk7O0FBQUE7QUFBQSxlQVVOLElBVk07QUFBQTtBQUFBO0FBQUE7O0FBWUxDLFVBQUFBLEVBWkssR0FZQWpCLEtBQUssR0FBR2dCLEVBWlI7O0FBY1gsY0FBSUMsRUFBRSxJQUFJWCxPQUFWLEVBQW1CO0FBQ2pCVyxZQUFBQSxFQUFFLEdBQUdqQixLQUFLLElBQUssSUFBSSxFQUFMLEdBQVcsSUFBZixDQUFWO0FBQ0Q7O0FBRUQsY0FBSWlCLEVBQUUsSUFBSU4sSUFBVixFQUFnQjtBQUNkLGdCQUFJVCxFQUFFLENBQUNnQixLQUFILENBQVNDLGVBQVQsT0FBK0IsSUFBbkMsRUFBeUM7QUFDdkMsa0JBQUlmLEdBQUcsQ0FBQ2dCLE1BQUosR0FBYSxDQUFqQixFQUFvQjtBQUNsQmhCLGdCQUFBQSxHQUFHLENBQUNJLENBQUosR0FBUUosR0FBRyxDQUFDaUIsS0FBWjtBQUNBSixnQkFBQUEsRUFBRSxJQUFJTixJQUFOO0FBQ0FGLGdCQUFBQSxLQUFLLEdBQUdMLEdBQUcsQ0FBQ0csUUFBSixDQUFhSCxHQUFHLENBQUNnQixNQUFqQixFQUF5QlosQ0FBekIsR0FBNkJKLEdBQUcsQ0FBQ0csUUFBSixDQUFhLENBQWIsRUFBZ0JDLENBQXJEO0FBQ0FHLGdCQUFBQSxJQUFJLEdBQUdGLEtBQVA7QUFDQUwsZ0JBQUFBLEdBQUcsQ0FBQ2dCLE1BQUosR0FBYSxDQUFiO0FBQ0QsZUFORCxNQU1PO0FBQ0xILGdCQUFBQSxFQUFFLEdBQUdOLElBQUw7QUFDRDtBQUNGLGFBVkQsTUFVTztBQUNMUCxjQUFBQSxHQUFHLENBQUNJLENBQUosR0FBUUosR0FBRyxDQUFDaUIsS0FBWjtBQUNBSixjQUFBQSxFQUFFLElBQUlOLElBQU47QUFDQUEsY0FBQUEsSUFBSSxHQUFHRixLQUFQO0FBQ0Q7QUFDRixXQWhCRCxNQWdCTztBQUNMLGdCQUFJTCxHQUFHLENBQUNrQixPQUFKLEdBQWMsQ0FBbEIsRUFBcUI7QUFDbkI7QUFDTUMsY0FBQUEsT0FGYSxHQUVIbkIsR0FBRyxDQUFDRyxRQUFKLENBQWFILEdBQUcsQ0FBQ2tCLE9BQWpCLEVBQTBCZCxDQUExQixHQUE4QkosR0FBRyxDQUFDRyxRQUFKLENBQWEsQ0FBYixFQUFnQkMsQ0FGM0M7QUFHYmdCLGNBQUFBLFNBSGEsR0FHRGYsS0FBSyxHQUFHRSxJQUhQO0FBSW5CRixjQUFBQSxLQUFLLEdBQUdjLE9BQU8sR0FBR0MsU0FBbEI7QUFDQWIsY0FBQUEsSUFBSSxHQUFHRixLQUFQO0FBQ0FMLGNBQUFBLEdBQUcsQ0FBQ2tCLE9BQUosR0FBYyxDQUFkO0FBRUQ7QUFDRjs7QUFDRFgsVUFBQUEsSUFBSSxJQUFJTSxFQUFSO0FBQ0FiLFVBQUFBLEdBQUcsQ0FBQ0ksQ0FBSixJQUFTUyxFQUFUO0FBOUNXO0FBZ0RYOztBQWhEVztBQUFBLGdCQWtEUE4sSUFBSSxJQUFJLENBbEREO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBc0RMYyxVQUFBQSxFQXRESyxHQXNEQVosZUFBR0MsY0FBSCxDQUFrQkMsWUF0RGxCO0FBdURYQyxVQUFBQSxFQUFFLEdBQUdTLEVBQUUsR0FBR2IsRUFBVjtBQUNBQSxVQUFBQSxFQUFFLEdBQUdhLEVBQUw7QUF4RFc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvIGZyb20gJy4vY28uY2MnO1xyXG5sZXQgUHVibGljU2V0VXA9cmVxdWlyZSgnUHVibGljU2V0VXAnKTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBsYXlTeW1ib2xDb2woY29sSW5kZXgsIHNwZWVkKSB7XHJcbiAgY29uc3QgY29scyA9IGNjLmZpbmQoJ0NhbnZhcy9HYW1lL01hY2hpbmUvUGVyZm9ybWFuY2UvQ29scycpO1xyXG4gIGNvbnN0IGNvbCA9IGNvbHMuZ2V0Q2hpbGRCeU5hbWUoYCR7Y29sSW5kZXggKyAxfWApO1xyXG5cclxuICBjb25zdCBzcGFjaW5nID0gY29sLmNoaWxkcmVuWzFdLnkgLSBjb2wuY2hpbGRyZW5bMF0ueTtcclxuICBsZXQgZGlzdDAgPSBjb2wuY2hpbGRyZW5bY29sLmNoaWxkcmVuQ291bnQgLSAzXS55IC0gY29sLmNoaWxkcmVuWzBdLnk7XHJcbiAgbGV0IGRpc3QgPSBkaXN0MDtcclxuICBsZXQgdDAgPSBjby5jdXJyZW50UnVudGltZS5sYXN0VGlja1RpbWU7XHJcbiAgbGV0IGR0ID0gMDtcclxuXHJcbiAgd2hpbGUgKHRydWUpIHtcclxuXHJcbiAgICBjb25zdCBkeSA9IHNwZWVkICogZHQ7XHJcblxyXG4gICAgaWYgKGR5ID49IHNwYWNpbmcpIHtcclxuICAgICAgZHkgPSBzcGVlZCAqICgoMSAvIDYwKSAqIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkeSA+PSBkaXN0KSB7XHJcbiAgICAgIGlmIChjYy5zdG9yZS5pc0dhbWVSZXN1bHRHb3QoKSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGlmIChjb2wucmVkaXN0ID4gMCkge1xyXG4gICAgICAgICAgY29sLnkgPSBjb2wuYmFzZVk7XHJcbiAgICAgICAgICBkeSAtPSBkaXN0O1xyXG4gICAgICAgICAgZGlzdDAgPSBjb2wuY2hpbGRyZW5bY29sLnJlZGlzdF0ueSAtIGNvbC5jaGlsZHJlblswXS55O1xyXG4gICAgICAgICAgZGlzdCA9IGRpc3QwO1xyXG4gICAgICAgICAgY29sLnJlZGlzdCA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGR5ID0gZGlzdDtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29sLnkgPSBjb2wuYmFzZVk7XHJcbiAgICAgICAgZHkgLT0gZGlzdDtcclxuICAgICAgICBkaXN0ID0gZGlzdDA7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChjb2wucmVkaXN0MiA+IDApIHtcclxuICAgICAgICAvLyBkaXN0MCA9IChjb2wuY2hpbGRyZW5bY29sLnJlZGlzdDJdLnkgLSBjb2wuY2hpbGRyZW5bMF0ueSkgLSBNYXRoLmFicyhjb2wueSAtIGNvbC5iYXNlWSk7XHJcbiAgICAgICAgY29uc3QgbmV3RGlzdCA9IGNvbC5jaGlsZHJlbltjb2wucmVkaXN0Ml0ueSAtIGNvbC5jaGlsZHJlblswXS55O1xyXG4gICAgICAgIGNvbnN0IG1vdmVkRGlzdCA9IGRpc3QwIC0gZGlzdDtcclxuICAgICAgICBkaXN0MCA9IG5ld0Rpc3QgLSBtb3ZlZERpc3Q7XHJcbiAgICAgICAgZGlzdCA9IGRpc3QwO1xyXG4gICAgICAgIGNvbC5yZWRpc3QyID0gMDtcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGRpc3QgLT0gZHk7XHJcbiAgICBjb2wueSAtPSBkeTtcclxuXHJcbiAgICB5aWVsZDtcclxuXHJcbiAgICBpZiAoZGlzdCA8PSAwKSB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHQxID0gY28uY3VycmVudFJ1bnRpbWUubGFzdFRpY2tUaW1lO1xyXG4gICAgZHQgPSB0MSAtIHQwO1xyXG4gICAgdDAgPSB0MTtcclxuICB9XHJcbn1cclxuIl19