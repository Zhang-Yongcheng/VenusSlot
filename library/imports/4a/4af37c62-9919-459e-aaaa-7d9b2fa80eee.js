"use strict";
cc._RF.push(module, '4af37ximRlFnqqqfZsvqA7u', 'buildSymbols');
// scripts/buildSymbols.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;
exports.setSymbol = setSymbol;

var _getSymbolAnchor = _interopRequireDefault(require("./getSymbolAnchor"));

var _getSymbolSprite = _interopRequireDefault(require("./getSymbolSprite"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function setSymbol(colIndex, childIndex, symbolIndex) {
  var col = cc.find("Canvas/Game/Machine/Performance/Cols/" + (colIndex + 1));
  var child = col.getChildByName("" + (childIndex + 1));
  var sprite = child.getComponent(cc.Sprite);
  sprite.spriteFrame = (0, _getSymbolSprite["default"])(symbolIndex).spriteFrame;
}

function createSymbol(col, childIndex, symbolIndex, spacing) {
  var childName = childIndex < 0 ? "" + childIndex : "" + (childIndex + 1);
  var child = col.getChildByName(childName);

  if (child === null) {
    child = new cc.Node(childName);
    child.y = childIndex * spacing;
    col.addChild(child);
  }

  var sprite = child.getComponent(cc.Sprite);

  if (sprite === null) {
    sprite = child.addComponent(cc.Sprite);
    sprite.sizeMode = cc.Sprite.SizeMode.RAW;
  }

  sprite.spriteFrame = (0, _getSymbolSprite["default"])(symbolIndex).spriteFrame;
}

function buildSymbolCol(colTable, colIndex, spacing) {
  var col = cc.find("Canvas/Game/Machine/Performance/Cols/" + (colIndex + 1));

  for (var i = 0; i < colTable.length; i++) {
    createSymbol(col, i, colTable[i], spacing);
  }
}

var buildSymbols = function () {
  var spacing;
  return function buildSymbols(symbolColTable) {
    var anchorsNode = cc.find('Canvas/Game/Machine/Performance/Anchors');
    var colsNode = cc.find('Canvas/Game/Machine/Performance/Cols');

    for (var i = 1; i <= 5; i++) {
      var col = colsNode.getChildByName("" + i);
      var anchor = anchorsNode.getChildByName("" + i);
      col.x = anchor.x;
      col.y = anchor.getChildByName('3').y;
      col.baseY = col.y;
    }

    if (spacing === undefined) {
      var anchor1 = anchorsNode.getChildByName('1');
      spacing = Math.abs(anchor1.getChildByName('1').y - anchor1.getChildByName('2').y);
    }

    for (var _i = 0; _i < symbolColTable.length; _i++) {
      buildSymbolCol(symbolColTable[_i], _i, spacing);
    }
  };
}();

var _default = buildSymbols;
exports["default"] = _default;

cc._RF.pop();