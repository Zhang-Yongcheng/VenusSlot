const getSymbolAnchor = (function () {
  const cached = {};

  return function getSymbolAnchor(symbolGridIndex) {
    const col = Math.floor(symbolGridIndex / 3);
    const row = symbolGridIndex % 3;
    const path = `Canvas/Game/Machine/Performance/Anchors/${col + 1}/${row + 1}`;
    let node = cached[path];
    if (node === undefined) {
      node = cached[path] = cc.find(path);
    }
    return node;
  };
})();

export default getSymbolAnchor;
