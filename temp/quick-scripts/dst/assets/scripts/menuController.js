
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/menuController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '94c83znD15MILrkKX56KJvR', 'menuController');
// scripts/menuController.js

"use strict";

var _co = _interopRequireDefault(require("./co.cc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    var _marked = /*#__PURE__*/regeneratorRuntime.mark(doDropDown);

    var settingsPanel = cc.find('SettingsPanel', this.node);
    settingsPanel.y = this.node.height;

    function doDropDown() {
      var speed, t0, dt, dy, sd, t1;
      return regeneratorRuntime.wrap(function doDropDown$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(droppingDown === 1 || droppingDown === 2)) {
                _context.next = 23;
                break;
              }

              _context.prev = 1;
              speed = 1.6;
              t0 = _co["default"].currentRuntime.lastTickTime;
              dt = 0;

            case 5:
              if (!true) {
                _context.next = 20;
                break;
              }

              dy = speed * dt;

              if (dy > dist) {
                dy = dist;
              }

              dist -= dy;
              sd = droppingDown === 1 ? -1 : +1;
              settingsPanel.y += dy * sd;
              _context.next = 13;
              return;

            case 13:
              if (!(dist <= 0)) {
                _context.next = 15;
                break;
              }

              return _context.abrupt("break", 20);

            case 15:
              t1 = _co["default"].currentRuntime.lastTickTime;
              dt = t1 - t0;
              t0 = t1;
              _context.next = 5;
              break;

            case 20:
              _context.prev = 20;
              coRunning = null;
              return _context.finish(20);

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _marked, null, [[1,, 20, 23]]);
    }

    var droppingDown = 0;
    var maxDist = this.node.height;
    var dist = 0;
    var coRunning = null;

    this.dropDown = function () {
      if (droppingDown === 1) {
        droppingDown = 2;
      } else if (droppingDown === 0 || droppingDown === 2) {
        droppingDown = 1;
      }

      dist = dist === 0 ? maxDist : maxDist - dist;

      if (coRunning === null) {
        coRunning = _co["default"].start(doDropDown);
      }
    };
  },
  start: function start() {
    var settingsPanel = cc.find('SettingsPanel', this.node);

    if (cc.store.soundEnabled === true) {
      var soundOnButton = cc.find('SoundOnButton', settingsPanel);
      soundOnButton.active = false;
      soundOnButton.getComponent(cc.Button).interactable = false;
      var soundOffButton = cc.find('SoundOffButton', settingsPanel);
      soundOffButton.active = true;
      soundOffButton.getComponent(cc.Button).interactable = true;
    } else {
      var _soundOnButton = cc.find('SoundOnButton', settingsPanel);

      _soundOnButton.active = true;
      _soundOnButton.getComponent(cc.Button).interactable = true;

      var _soundOffButton = cc.find('SoundOffButton', settingsPanel);

      _soundOffButton.active = false;
      _soundOffButton.getComponent(cc.Button).interactable = false;
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWVudUNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJkb0Ryb3BEb3duIiwic2V0dGluZ3NQYW5lbCIsImZpbmQiLCJub2RlIiwieSIsImhlaWdodCIsImRyb3BwaW5nRG93biIsInNwZWVkIiwidDAiLCJjbyIsImN1cnJlbnRSdW50aW1lIiwibGFzdFRpY2tUaW1lIiwiZHQiLCJkeSIsImRpc3QiLCJzZCIsInQxIiwiY29SdW5uaW5nIiwibWF4RGlzdCIsImRyb3BEb3duIiwic3RhcnQiLCJzdG9yZSIsInNvdW5kRW5hYmxlZCIsInNvdW5kT25CdXR0b24iLCJhY3RpdmUiLCJnZXRDb21wb25lbnQiLCJCdXR0b24iLCJpbnRlcmFjdGFibGUiLCJzb3VuZE9mZkJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNQLGFBQVNELEVBQUUsQ0FBQ0UsU0FETDtBQUdQQyxFQUFBQSxVQUFVLEVBQUUsRUFITDtBQUtQQyxFQUFBQSxNQUxPLG9CQUtFO0FBQUEsdURBSUdDLFVBSkg7O0FBQ1AsUUFBTUMsYUFBYSxHQUFHTixFQUFFLENBQUNPLElBQUgsQ0FBUSxlQUFSLEVBQXlCLEtBQUtDLElBQTlCLENBQXRCO0FBQ0FGLElBQUFBLGFBQWEsQ0FBQ0csQ0FBZCxHQUFrQixLQUFLRCxJQUFMLENBQVVFLE1BQTVCOztBQUVBLGFBQVVMLFVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQ01NLFlBQVksS0FBSyxDQUFqQixJQUFzQkEsWUFBWSxLQUFLLENBRDdDO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBR1lDLGNBQUFBLEtBSFosR0FHb0IsR0FIcEI7QUFLVUMsY0FBQUEsRUFMVixHQUtlQyxlQUFHQyxjQUFILENBQWtCQyxZQUxqQztBQU1VQyxjQUFB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QTJCOUIsRUFBRSxDQUFDK0IsTUFBOUIsRUFBc0NDLFlBQXRDLEdBQXFELElBQXJEOztBQUVBLFVBQU1DLGVBQWMsR0FBR2pDLEVBQUUsQ0FBQ08sSUFBSCxDQUFRLGdCQUFSLEVBQTBCRCxhQUExQixDQUF2Qjs7QUFDQTJCLE1BQUFBLGVBQWMsQ0FBQ0osTUFBZixHQUF3QixLQUF4QjtBQUNBSSxNQUFBQSxlQUFjLENBQUNILFlBQWYsQ0FBNEI5QixFQUFFLENBQUMrQixNQUEvQixFQUF1Q0MsWUFBdkMsR0FBc0QsS0FBdEQ7QUFDRDtBQUNGO0FBaEZNLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbyBmcm9tICcuL2NvLmNjJztcclxuXHJcbmNjLkNsYXNzKHtcclxuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gIHByb3BlcnRpZXM6IHt9LFxyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICBjb25zdCBzZXR0aW5nc1BhbmVsID0gY2MuZmluZCgnU2V0dGluZ3NQYW5lbCcsIHRoaXMubm9kZSk7XHJcbiAgICBzZXR0aW5nc1BhbmVsLnkgPSB0aGlzLm5vZGUuaGVpZ2h0O1xyXG5cclxuICAgIGZ1bmN0aW9uKiBkb0Ryb3BEb3duKCkge1xyXG4gICAgICBpZiAoZHJvcHBpbmdEb3duID09PSAxIHx8IGRyb3BwaW5nRG93biA9PT0gMikge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCBzcGVlZCA9IDEuNjtcclxuXHJcbiAgICAgICAgICBsZXQgdDAgPSBjby5jdXJyZW50UnVudGltZS5sYXN0VGlja1RpbWU7XHJcbiAgICAgICAgICBsZXQgZHQgPSAwO1xyXG5cclxuICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGR5ID0gc3BlZWQgKiBkdDtcclxuICAgICAgICAgICAgaWYgKGR5ID4gZGlzdCkge1xyXG4gICAgICAgICAgICAgIGR5ID0gZGlzdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXN0IC09IGR5O1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2QgPSBkcm9wcGluZ0Rvd24gPT09IDEgPyAtMSA6ICsxO1xyXG4gICAgICAgICAgICBzZXR0aW5nc1BhbmVsLnkgKz0gZHkgKiBzZDtcclxuXHJcbiAgICAgICAgICAgIHlpZWxkO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRpc3QgPD0gMCkge1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0MSA9IGNvLmN1cnJlbnRSdW50aW1lLmxhc3RUaWNrVGltZTtcclxuICAgICAgICAgICAgZHQgPSB0MSAtIHQwO1xyXG4gICAgICAgICAgICB0MCA9IHQxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICBjb1J1bm5pbmcgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBkcm9wcGluZ0Rvd24gPSAwO1xyXG4gICAgY29uc3QgbWF4RGlzdCA9IHRoaXMubm9kZS5oZWlnaHQ7XHJcbiAgICBsZXQgZGlzdCA9IDA7XHJcbiAgICBsZXQgY29SdW5uaW5nID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLmRyb3BEb3duID0gKCkgPT4ge1xyXG4gICAgICBpZiAoZHJvcHBpbmdEb3duID09PSAxKSB7XHJcbiAgICAgICAgZHJvcHBpbmdEb3duID0gMjtcclxuICAgICAgfSBlbHNlIGlmIChkcm9wcGluZ0Rvd24gPT09IDAgfHwgZHJvcHBpbmdEb3duID09PSAyKSB7XHJcbiAgICAgICAgZHJvcHBpbmdEb3duID0gMTtcclxuICAgICAgfVxyXG4gICAgICBkaXN0ID0gZGlzdCA9PT0gMCA/IG1heERpc3QgOiBtYXhEaXN0IC0gZGlzdDtcclxuICAgICAgaWYgKGNvUnVubmluZyA9PT0gbnVsbCkge1xyXG4gICAgICAgIGNvUnVubmluZyA9IGNvLnN0YXJ0KGRvRHJvcERvd24pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0sXHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgY29uc3Qgc2V0dGluZ3NQYW5lbCA9IGNjLmZpbmQoJ1NldHRpbmdzUGFuZWwnLCB0aGlzLm5vZGUpO1xyXG4gICAgaWYgKGNjLnN0b3JlLnNvdW5kRW5hYmxlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICBjb25zdCBzb3VuZE9uQnV0dG9uID0gY2MuZmluZCgnU291bmRPbkJ1dHRvbicsIHNldHRpbmdzUGFuZWwpO1xyXG4gICAgICBzb3VuZE9uQnV0dG9uLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICBzb3VuZE9uQnV0dG9uLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgY29uc3Qgc291bmRPZmZCdXR0b24gPSBjYy5maW5kKCdTb3VuZE9mZkJ1dHRvbicsIHNldHRpbmdzUGFuZWwpO1xyXG4gICAgICBzb3VuZE9mZkJ1dHRvbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICBzb3VuZE9mZkJ1dHRvbi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3Qgc291bmRPbkJ1dHRvbiA9IGNjLmZpbmQoJ1NvdW5kT25CdXR0b24nLCBzZXR0aW5nc1BhbmVsKTtcclxuICAgICAgc291bmRPbkJ1dHRvbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICBzb3VuZE9uQnV0dG9uLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XHJcblxyXG4gICAgICBjb25zdCBzb3VuZE9mZkJ1dHRvbiA9IGNjLmZpbmQoJ1NvdW5kT2ZmQnV0dG9uJywgc2V0dGluZ3NQYW5lbCk7XHJcbiAgICAgIHNvdW5kT2ZmQnV0dG9uLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICBzb3VuZE9mZkJ1dHRvbi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG4iXX0=