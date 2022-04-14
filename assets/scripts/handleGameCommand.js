const handleGameCommand = (function () {
  let first3072 = true;

  return function handleGameCommand(vals, pi, gameObj) {
    console.log("--%o",vals);
    switch (vals[0]) {
      case 3072: //　回傳本桌的資訊
        if (first3072 === true) {
          first3072 = false;

          cc.store.userPoints = vals[4];
          cc.find('Canvas/Game/Machine/UI/GamePoint/Value').getComponent(cc.Label).string = cc.store.userPoints;

          cc.store.maxBet = vals[2];
          cc.store.minBet = cc.store.currentBet = vals[3];
          cc.store.gameResult.iGrid = vals[8];

          cc.find('Canvas/Game/Machine/UI/BetPanel/Value').getComponent(cc.Label).string = cc.store.currentBet;

          // console.log(vals[8]);

          // hide login


          // play bg music


          cc.find('Canvas/Game').active = true;
        }
        cc.store.freeGameCnts = vals[9];
        break;

      case 3073: //　回傳押注結果資訊
        if (cc.store.gameResultGotStatus === 1) {
          const { gameResult } = cc.store;
          gameResult.type = vals[1];
          gameResult.iGrid = vals[2];
          gameResult.iLine = vals[3];
          gameResult.iFrame = vals[4];
          gameResult.freeGameNCnts=vals[5];
          gameResult.WinPointLine = vals[6];
          gameResult.WinTotalPoint = vals[7];
          cc.store.userPoints = vals[8];
          gameResult.heart=vals[9];
          gameResult.VideoIdx=vals[10];

           console.log('--'+gameResult.freeGameNCnts);
          // console.log(vals[3]);
          // console.log(vals[4]);

          if (gameResult.iGrid.some(val => val === -1) === false) {
            cc.store.gameResultGotStatus = 2;
          }
        }
        break;

      case 3074: //　通知遊戲端免費遊戲結束
        cc.store.type=1;
        cc.store.FreeTotalPoint=vals[1];
        cc.store.userPoints = vals[2];
        break;
    }
  };
})();

export default handleGameCommand;
