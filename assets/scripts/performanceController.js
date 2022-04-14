import buildSymbols from './buildSymbols';
import co from './co.cc';
import playAll from './playAll';
import shuffle from './shuffle';

import requestTableInfo from './requestTableInfo';
import requestGameResult from './requestGameResult';
let PublicSetUp=require('PublicSetUp');

cc.Class({
  extends: cc.Component,
  properties: {
    

  },
  onLoad() {
    //cc.audioEngine.playMusic(this.MusicClip, true);
    cc.find('Symbols', this.node).active = false;
    cc.find('Effect', this.node).active = false;
    const linesNode = cc.find('Lines', this.node);
    for (let i = 0; i < linesNode.childrenCount; i++) {
      linesNode.getChildByName(`${i + 1}`).active = false;
    }

    const anchorsNode = cc.find('Anchors', this.node);
    for (let i = 1; i <= 5; i++) {
      const col = anchorsNode.getChildByName(`${i}`);
      for (let j = 1; j <= 3; j++) {
        const row = col.getChildByName(`${j}`);
        row.getComponent(cc.Sprite).spriteFrame = null;
      }
    }
   
  },

  start() {
    

    cc.store.symbolDataList = new Array(5);
    cc.store.randomSymbolDataList = new Array(cc.store.symbolDataList.length);

    const { symbolDataList, randomSymbolDataList } = cc.store;
    for (let i = 0; i < randomSymbolDataList.length; i++) {
      symbolDataList[i] = new Array(24);
      randomSymbolDataList[i] = new Array(symbolDataList[i].length);
      for (let j = 0, jcnt = randomSymbolDataList[i].length; j < jcnt; j++) {
        randomSymbolDataList[i][j] = Math.floor(Math.random() * 11);
      }
    }

    const { iGrid } = cc.store.gameResult;
    for (let i = 0; i < symbolDataList.length; i++) {
      shuffle(randomSymbolDataList[i]);

      let j, k;

      j = 0;
      while (j < 3) {
        symbolDataList[i][j] = iGrid[i + 5 * (2 - j)];
        j++;
      }

      k = symbolDataList[i].length;
      while (j < k) {
        symbolDataList[i][j] = randomSymbolDataList[i][j];
        j++;
      }
    }
    buildSymbols(symbolDataList);

    co.start(function* () {
      while (true) {
        cc.store.gameResultGotStatus = 0;

        const { symbolDataList, randomSymbolDataList } = cc.store;
        const iGrid0 = cc.store.gameResult.iGrid;
        for (let i = 0; i < symbolDataList.length; i++) {
          shuffle(randomSymbolDataList[i]);

          let j, k;

          j = 0;
          k = symbolDataList[i].length - 1;
          while (j < 3) {
            symbolDataList[i][j] = iGrid0[i + 5 * (2 - j)];
            symbolDataList[i][k - j] = iGrid0[i + 5 * j];
            j++;
          }

          k = symbolDataList[i].length - 3;
          while (j < k) {
            symbolDataList[i][j] = randomSymbolDataList[i][j];
            j++;
          }
        }
        buildSymbols(symbolDataList);

        
        yield co.waitUntil(() => cc.store.playing === true);

        requestGameResult();
        
        yield playAll();

        requestTableInfo();

        if (cc.store.playing === true) {
          if(cc.store.auto==false){
            cc.store.playing=false;
            const AutoPlayButton = cc.find('Canvas/Game/Machine/UI/playButton');
            AutoPlayButton.active = true;
            const ManuaPlayButton = cc.find('Canvas/Game/Machine/UI/PauseButton');
            ManuaPlayButton.active = false;
          }
          yield co.waitForSeconds(1.2);
        }
      }
    });
  }
});
