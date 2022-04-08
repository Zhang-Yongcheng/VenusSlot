
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/playEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '905532h4/pGgooz7sOid5re', 'playEffect');
// scripts/playEffect.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _co = _interopRequireDefault(require("./co.cc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var playEffect = function () {
  var cachedEffectSpriteFrame = {};
  return /*#__PURE__*/regeneratorRuntime.mark(function playEffect(node, duration, loop) {
    var playNode, playSprite, effectSource, t0, done, p, i, effectName, spriteFrame;
    return regeneratorRuntime.wrap(function playEffect$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (loop === void 0) {
              loop = true;
            }

            playNode = node.getChildByName('Effect');

            if (playNode === null) {
              playNode = new cc.Node('Effect');
              playNode.active = false;
              node.addChild(playNode);
            }

            playSprite = playNode.getComponent(cc.Sprite);

            if (playSprite === null) {
              playSprite = playNode.addComponent(cc.Sprite);
            }

            if (!(playNode.active === true)) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return");

          case 7:
            effectSource = cc.find('Canvas/Game/Machine/Performance/Effect');
            _context.prev = 8;
            playNode.active = true;

          case 10:
            if (!true) {
              _context.next = 29;
              break;
            }

            t0 = _co["default"].currentRuntime.lastTickTime;
            done = false;

          case 13:
            if (!(done === false)) {
              _context.next = 25;
              break;
            }

            p = (_co["default"].currentRuntime.lastTickTime - t0) / duration;
            i = Math.floor(effectSource.childrenCount * p);

            if (i >= effectSource.childrenCount) {
              i = effectSource.childrenCount - 1;
              done = true;
            }

            effectName = "SlotEffect_" + i.toString().padStart(5, '0');
            spriteFrame = cachedEffectSpriteFrame[effectName];

            if (spriteFrame === undefined) {
              cachedEffectSpriteFrame[effectName] = spriteFrame = effectSource.getChildByName(effectName).getComponent(cc.Sprite).spriteFrame;
            }

            playSprite.spriteFrame = spriteFrame;
            _context.next = 23;
            return;

          case 23:
            _context.next = 13;
            break;

          case 25:
            if (!(loop !== true)) {
              _context.next = 27;
              break;
            }

            return _context.abrupt("break", 29);

          case 27:
            _context.next = 10;
            break;

          case 29:
            _context.prev = 29;
            playNode.active = false;
            return _context.finish(29);

          case 32:
          case "end":
            return _context.stop();
        }
      }
    }, playEffect, null, [[8,, 29, 32]]);
  });
}();

var _default = playEffect;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGxheUVmZmVjdC5qcyJdLCJuYW1lcyI6WyJwbGF5RWZmZWN0IiwiY2FjaGVkRWZmZWN0U3ByaXRlRnJhbWUiLCJub2RlIiwiZHVyYXRpb24iLCJsb29wIiwicGxheU5vZGUiLCJnZXRDaGlsZEJ5TmFtZSIsImNjIiwiTm9kZSIsImFjdGl2ZSIsImFkZENoaWxkIiwicGxheVNwcml0ZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsImFkZENvbXBvbmVudCIsImVmZmVjdFNvdXJjZSIsImZpbmQiLCJ0MCIsImNvIiwiY3VycmVudFJ1bnRpbWUiLCJsYXN0VGlja1RpbWUiLCJkb25lIiwicCIsImkiLCJNYXRoIiwiZmxvb3IiLCJjaGlsZHJlbkNvdW50IiwiZWZmZWN0TmFtZSIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJzcHJpdGVGcmFtZSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBLElBQU1BLFVBQVUsR0FBSSxZQUFZO0FBQzlCLE1BQU1DLHVCQUF1QixHQUFHLEVBQWhDO0FBRUEsOENBQU8sU0FBVUQsVUFBVixDQUFxQkUsSUFBckIsRUFBMkJDLFFBQTNCLEVBQXFDQyxJQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBcUNBLElBQXJDO0FBQXFDQSxjQUFBQSxJQUFyQyxHQUE0QyxJQUE1QztBQUFBOztBQUNEQyxZQUFBQSxRQURDLEdBQ1VILElBQUksQ0FBQ0ksY0FBTCxDQUFvQixRQUFwQixDQURWOztBQUVMLGdCQUFJRCxRQUFRLEtBQUssSUFBakIsRUFBdUI7QUFDckJBLGNBQUFBLFFBQVEsR0FBRyxJQUFJRSxFQUFFLENBQUNDLElBQVAsQ0FBWSxRQUFaLENBQVg7QUFDQUgsY0FBQUEsUUFBUSxDQUFDSSxNQUFULEdBQWtCLEtBQWxCO0FBQ0FQLGNBQUFBLElBQUksQ0FBQ1EsUUFBTCxDQUFjTCxRQUFkO0FBQ0Q7O0FBRUdNLFlBQUFBLFVBUkMsR0FRWU4sUUFBUSxDQUFDTyxZQUFULENBQXNCTCxFQUFFLENBQUNNLE1BQXpCLENBUlo7O0FBU0wsZ0JBQUlGLFVBQVUsS0FBSyxJQUFuQixFQUF5QjtBQUN2QkEsY0FBQUEsVUFBVSxHQUFHTixRQUFRLENBQUNTLFlBQVQsQ0FBc0JQLEVBQUUsQ0FBQ00sTUFBekIsQ0FBYjtBQUNEOztBQVhJLGtCQWFEUixRQUFRLENBQUNJLE1BQVQsS0FBb0IsSUFibkI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFpQkNNLFlBQUFBLFlBakJELEdBaUJnQlIsRUFBRSxDQUFDUyxJQUFILENBQVEsd0NBQVIsQ0FqQmhCO0FBQUE7QUFvQkhYLFlBQUFBLFFBQVEsQ0FBQ0ksTUFBVCxHQUFrQixJQUFsQjs7QUFwQkc7QUFBQSxpQkFzQkksSUF0Qko7QUFBQTtBQUFBO0FBQUE7O0FBdUJLUSxZQUFBQSxFQXZCTCxHQXVCVUMsZUFBR0MsY0FBSCxDQUFrQkMsWUF2QjVCO0FBeUJRQyxZQUFBQSxJQXpCUixHQXlCZSxLQXpCZjs7QUFBQTtBQUFBLGtCQXlCc0JBLElBQUksS0FBSyxLQXpCL0I7QUFBQTtBQUFBO0FBQUE7O0FBMEJPQyxZQUFBQSxDQTFCUCxHQTBCVyxDQUFDSixlQUFHQyxjQUFILENBQWtCQyxZQUFsQixHQUFpQ0gsRUFBbEMsSUFBd0NkLFFBMUJuRDtBQTJCS29CLFlBQUFBLENBM0JMLEdBMkJTQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1YsWUFBWSxDQUFDVyxhQUFiLEdBQTZCSixDQUF4QyxDQTNCVDs7QUE0QkMsZ0JBQUlDLENBQUMsSUFBSVIsWUFBWSxDQUFDVyxhQUF0QixFQUFxQztBQUNuQ0gsY0FBQUEsQ0FBQyxHQUFHUixZQUFZLENBQUNXLGFBQWIsR0FBNkIsQ0FBakM7QUFDQUwsY0FBQUEsSUFBSSxHQUFHLElBQVA7QUFDRDs7QUFFS00sWUFBQUEsVUFqQ1AsbUJBaUNrQ0osQ0FBQyxDQUFDSyxRQUFGLEdBQWFDLFFBQWIsQ0FBc0IsQ0FBdEIsRUFBeUIsR0FBekIsQ0FqQ2xDO0FBa0NLQyxZQUFBQSxXQWxDTCxHQWtDbUI3Qix1QkFBdUIsQ0FBQzBCLFVBQUQsQ0FsQzFDOztBQW1DQyxnQkFBSUcsV0FBVyxLQUFLQyxTQUFwQixFQUErQjtBQUM3QjlCLGNBQUFBLHVCQUF1QixDQUFDMEIsVUFBRCxDQUF2QixHQUFzQ0csV0FBVyxHQUFHZixZQUFZLENBQUNULGNBQWIsQ0FBNEJxQixVQUE1QixFQUF3Q2YsWUFBeEMsQ0FBcURMLEVBQUUsQ0FBQ00sTUFBeEQsRUFBZ0VpQixXQUFwSDtBQUNEOztBQUNEbkIsWUFBQUEsVUFBVSxDQUFDbUIsV0FBWCxHQUF5QkEsV0FBekI7QUF0Q0Q7QUF3Q0M7O0FBeENEO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGtCQTJDRzFCLElBQUksS0FBSyxJQTNDWjtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQWdESEMsWUFBQUEsUUFBUSxDQUFDSSxNQUFULEdBQWtCLEtBQWxCO0FBaERHOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFVVCxVQUFWO0FBQUEsR0FBUDtBQW1ERCxDQXREa0IsRUFBbkI7O2VBd0RlQSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvIGZyb20gJy4vY28uY2MnO1xyXG5cclxuY29uc3QgcGxheUVmZmVjdCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgY2FjaGVkRWZmZWN0U3ByaXRlRnJhbWUgPSB7fTtcclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uKiBwbGF5RWZmZWN0KG5vZGUsIGR1cmF0aW9uLCBsb29wID0gdHJ1ZSkge1xyXG4gICAgbGV0IHBsYXlOb2RlID0gbm9kZS5nZXRDaGlsZEJ5TmFtZSgnRWZmZWN0Jyk7XHJcbiAgICBpZiAocGxheU5vZGUgPT09IG51bGwpIHtcclxuICAgICAgcGxheU5vZGUgPSBuZXcgY2MuTm9kZSgnRWZmZWN0Jyk7XHJcbiAgICAgIHBsYXlOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICBub2RlLmFkZENoaWxkKHBsYXlOb2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcGxheVNwcml0ZSA9IHBsYXlOb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgaWYgKHBsYXlTcHJpdGUgPT09IG51bGwpIHtcclxuICAgICAgcGxheVNwcml0ZSA9IHBsYXlOb2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwbGF5Tm9kZS5hY3RpdmUgPT09IHRydWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVmZmVjdFNvdXJjZSA9IGNjLmZpbmQoJ0NhbnZhcy9HYW1lL01hY2hpbmUvUGVyZm9ybWFuY2UvRWZmZWN0Jyk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgcGxheU5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgY29uc3QgdDAgPSBjby5jdXJyZW50UnVudGltZS5sYXN0VGlja1RpbWU7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGRvbmUgPSBmYWxzZTsgZG9uZSA9PT0gZmFsc2U7ICkge1xyXG4gICAgICAgICAgY29uc3QgcCA9IChjby5jdXJyZW50UnVudGltZS5sYXN0VGlja1RpbWUgLSB0MCkgLyBkdXJhdGlvbjtcclxuICAgICAgICAgIGxldCBpID0gTWF0aC5mbG9vcihlZmZlY3RTb3VyY2UuY2hpbGRyZW5Db3VudCAqIHApO1xyXG4gICAgICAgICAgaWYgKGkgPj0gZWZmZWN0U291cmNlLmNoaWxkcmVuQ291bnQpIHtcclxuICAgICAgICAgICAgaSA9IGVmZmVjdFNvdXJjZS5jaGlsZHJlbkNvdW50IC0gMTtcclxuICAgICAgICAgICAgZG9uZSA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY29uc3QgZWZmZWN0TmFtZSA9IGBTbG90RWZmZWN0XyR7aS50b1N0cmluZygpLnBhZFN0YXJ0KDUsICcwJyl9YDtcclxuICAgICAgICAgIGxldCBzcHJpdGVGcmFtZSA9IGNhY2hlZEVmZmVjdFNwcml0ZUZyYW1lW2VmZmVjdE5hbWVdO1xyXG4gICAgICAgICAgaWYgKHNwcml0ZUZyYW1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY2FjaGVkRWZmZWN0U3ByaXRlRnJhbWVbZWZmZWN0TmFtZV0gPSBzcHJpdGVGcmFtZSA9IGVmZmVjdFNvdXJjZS5nZXRDaGlsZEJ5TmFtZShlZmZlY3ROYW1lKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHBsYXlTcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuXHJcbiAgICAgICAgICB5aWVsZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChsb29wICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHBsYXlOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwbGF5RWZmZWN0O1xyXG4iXX0=