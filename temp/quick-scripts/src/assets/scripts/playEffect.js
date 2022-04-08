"use strict";
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