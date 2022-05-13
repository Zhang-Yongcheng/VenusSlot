import co from './co.cc';
import { setSymbol } from './buildSymbols';

function getNodeBoundingBox(node) {
  node.parent._updateWorldMatrix();

  let width = node._contentSize.width;
  let height = node._contentSize.height;
  let rect = cc.rect(-node._anchorPoint.x * width, -node._anchorPoint.y * height, width, height);

  node._calculWorldMatrix();
  rect.transformMat4(rect, node._worldMatrix);
  return rect;
}

const requestGameResult = (function () {
  const coGroup = co.CoroutineGroup('RequestGameResult', { priority: co.CoroutineGroup.NormalPriority + 1 });

  function updateResult(k) {
    const { symbolDataList } = cc.store;
    const { iGrid } = cc.store.gameResult;
    for (let i = 0; i < symbolDataList.length; i++) {
      for (let j = 0; j < 3; j++) {
        const symbolIndex = iGrid[i + 5 * j];
        symbolDataList[i][k - j] = symbolIndex;
        setSymbol(i, k - j, symbolIndex);
      }
    }
  }

  function setRedist(cols, name, value) {
    for (let i = 0; i < cols.childrenCount; i++) {
      const col = cols.getChildByName(`${i + 1}`);
      col[name] = value;
    }
  }

  return function requestGameResult() {
    const cols = cc.find('Canvas/Game/Machine/Performance/Cols');

    setRedist(cols, 'redist', 0);
    setRedist(cols, 'redist2', 0);

    // coGroup.start(function* () {
    //   const colIndex = 0;
    //   const col = cols.getChildByName(`${colIndex + 1}`);
    //   const colsBox = getNodeBoundingBox(cols);

    //   while (true) {
    //     // const seconds = 1 + Math.floor( Math.random() * 5 );
    //     // yield co.waitForSeconds(seconds);

    //     const symbolBox = getNodeBoundingBox(col.children[col.childrenCount - 3]);
    //     if (colsBox.intersects(symbolBox) === true) {
    //       while (true) {
    //         const symbolBox = getNodeBoundingBox(col.children[3]);
    //         if (colsBox.intersects(symbolBox) === true) {
    //           break;
    //         }
    //         yield;
    //       }

    //       const iGrid = new Array(15);
    //       const iLine = new Array(9);
    //       const iFrame = new Array(9);
    //       const WinPointLine = new Array(9);
    //       const WinTotalPoint = 0;

    //       for (let i = 0; i < 9; i++) {
    //         // iLine[i] = Math.random() > 0.85 ? 1 : 0;
    //         iLine[i] = 0;
    //         iFrame[i] = 3 + Math.floor(Math.random() * 3);
    //       }

    //       for (let i = 0; i < 15; i++) {
    //         iGrid[i] = Math.floor(Math.random() * 11);
    //       }

    //       cc.store.gameResult = { iGrid, iLine, iFrame, WinPointLine, WinTotalPoint };

    //       cc.store.gameResultGotStatus = 2;
    //       break;
    //     }
    //     yield;
    //   }
    // });

    cc.store.gameResultGotStatus = 1;

    //const {type} = cc.store.gameResult;
    if(cc.store.type==0){
      cc.store?.gameServer.GetPI().sendData(3162, cc.store.currentBet);
      
    }else{
      cc.store?.gameServer.GetPI().sendData(3162, 0);
    }
    cc.find('Canvas/Game/Machine/UI/GamePoint/Value').getComponent(cc.Label).string=cc.store.userPoints-cc.store.currentBet;
    //console.log(3162);

    coGroup.start(function* () {
      const colIndex = 0;
      const col = cols.getChildByName(`${colIndex + 1}`);
      const colsBox = getNodeBoundingBox(cols);
      let byeond = false;

      while (true) {
        if (cc.store.gameResultGotStatus === 2) {
          if (colsBox.intersects(getNodeBoundingBox(col.children[col.childrenCount - 3])) === true) {
            updateResult(5);
            setRedist(cols, 'redist', 3);

            cc.store.gameResultGotStatus = 3;

            yield co.waitUntil(() => colsBox.intersects(getNodeBoundingBox(col.children[3])) === true);
          } else if (byeond === true || cc.store.playing === false) {
            let t = col.childrenCount - 4;
            while (colsBox.intersects(getNodeBoundingBox(col.children[--t])) !== true);

            const t1 = t + 3;
            updateResult(t1);
            const t2 = t1 - 2;
            setRedist(cols, 'redist2', t2);

            cc.store.gameResultGotStatus = 3;

            yield co.waitUntil(() => colsBox.intersects(getNodeBoundingBox(col.children[t2])) === true);
          } else {
            cc.store.gameResultGotStatus = 3;
          }
          updateResult(cc.store.symbolDataList[colIndex].length - 1);
          break;
        } else {
          if (byeond === false) {
            byeond = colsBox.intersects(getNodeBoundingBox(col.children[col.childrenCount - 3]));
          }
        }
        yield;
      }
    });
  };
})();

export default requestGameResult;
