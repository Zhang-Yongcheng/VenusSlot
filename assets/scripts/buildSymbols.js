import getSymbolAnchor from './getSymbolAnchor';
import getSymbolSprite from './getSymbolSprite';

export function setSymbol(colIndex, childIndex, symbolIndex) {
  const col = cc.find(`Canvas/Game/Machine/Performance/Cols/${colIndex + 1}`);
  const child = col.getChildByName(`${childIndex + 1}`);
  const sprite = child.getComponent(cc.Sprite);
  sprite.spriteFrame = getSymbolSprite(symbolIndex).spriteFrame;
}

function createSymbol(col, childIndex, symbolIndex, spacing) {
  const childName = childIndex < 0 ? `${childIndex}` : `${childIndex + 1}`;
  let child = col.getChildByName(childName);
  if (child === null) {
    child = new cc.Node(childName);
    child.y = childIndex * spacing;
    col.addChild(child);
  }

  let sprite = child.getComponent(cc.Sprite);
  if (sprite === null) {
    sprite = child.addComponent(cc.Sprite);
    sprite.sizeMode = cc.Sprite.SizeMode.RAW;
  }
  sprite.spriteFrame = getSymbolSprite(symbolIndex).spriteFrame;
}

function buildSymbolCol(colTable, colIndex, spacing) {
  const col = cc.find(`Canvas/Game/Machine/Performance/Cols/${colIndex + 1}`);
  for (let i = 0; i < colTable.length; i++) {
    createSymbol(col, i, colTable[i], spacing);
  }
}

const buildSymbols = (function () {
  let spacing;

  return function buildSymbols(symbolColTable) {
    const anchorsNode = cc.find('Canvas/Game/Machine/Performance/Anchors');
    const colsNode = cc.find('Canvas/Game/Machine/Performance/Cols');
    for (let i = 1; i <= 5; i++) {
      const col = colsNode.getChildByName(`${i}`);
      const anchor = anchorsNode.getChildByName(`${i}`);
      col.x = anchor.x;
      col.y = anchor.getChildByName('3').y;
      col.baseY = col.y;
    }

    if (spacing === undefined) {
      const anchor1 = anchorsNode.getChildByName('1');
      spacing = Math.abs(anchor1.getChildByName('1').y - anchor1.getChildByName('2').y);
    }

    for (let i = 0; i < symbolColTable.length; i++) {
      buildSymbolCol(symbolColTable[i], i, spacing);
    }
  };
})();

export default buildSymbols;
