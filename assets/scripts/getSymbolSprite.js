const getSymbolSprite = (function () {
  const cached = {};

  return function getSymbolSprite(symbolIndex) {
    const path = `Canvas/Game/Machine/Performance/Symbols/${symbolIndex + 1}`;
    let symbolSprite = cached[path];
    if (symbolSprite === undefined) {
      symbolSprite = cached[path] = cc.find(path).getComponent(cc.Sprite);
    }
    return symbolSprite;
  };
})();

export default getSymbolSprite;
