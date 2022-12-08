"use strict";
cc._RF.push(module, '547502AtRxEfq8fxpX3tzx8', 'handleGameCommand');
// scripts/handleGameCommand.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _winBonusGame = _interopRequireDefault(require("./winBonusGame.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var handleGameCommand = function () {
  var bonusGameState = 0; // 0: 沒有bonusGame, 1: 進入bonusGame

  var first3072 = true;

  var PublicSetUp = require('PublicSetUp');

  return function handleGameCommand(vals, pi, gameObj) {
    if (vals[0] != 3075) {//console.log("--%o",vals);
    }

    switch (vals[0]) {
      case 3072:
        //　回傳本桌的資訊
        if (bonusGameState === 1) {
          cc.store.userPoints = vals[4];
          bonusGameState = 0; // cc.find('Canvas/Game/Machine/UpUI/MenuPanel/PlayButton').getComponent(cc.Button).enabled = true;

          cc.find('Canvas/Game/Machine/UpUI/MenuPanel/PauseButton').getComponent(cc.Button).enabled = true;

          if (cc.store.auto === true) {
            cc.store.playing = true;
          } else {
            cc.store.playing = false;
            cc.find('Canvas/Game/Machine/UpUI/MenuPanel/playButton').active = true;
          }

          cc.find('Canvas/Game/Machine/UI/PointScore/GameScore/Value').getComponent(cc.Label).string = 0;
          cc.find('Canvas/Game/Machine/UI/PointScore/GamePoint/Value').getComponent(cc.Label).string = cc.store.userPoints;
        }

        if (first3072 === true) {
          first3072 = false;
          cc.store.userPoints = vals[4];
          cc.find('Canvas/Game/Machine/UI/PointScore/GamePoint/Value').getComponent(cc.Label).string = Math.floor(cc.store.userPoints);
          cc.store.maxBet = vals[2];
          cc.store.minBet = cc.store.currentBet = vals[3];
          cc.store.gameResult.iGrid = vals[8];
          cc.find('Canvas/Game/Machine/UpUI/MenuPanel/BetPanel/Value').getComponent(cc.Label).string = cc.store.currentBet; // hide login
          // play bg music

          cc.find('Canvas/LoginMessage').active = false;
          cc.find('Canvas/Game').active = true;
        }

        cc.store.freeGameCnts = vals[9];
        break;

      case 3073:
        //　回傳押注結果資訊
        if (cc.store.gameResultGotStatus === 1) {
          var gameResult = cc.store.gameResult;
          gameResult.type = vals[1];
          gameResult.iGrid = vals[2];
          gameResult.iLine = vals[3];
          gameResult.iFrame = vals[4];
          gameResult.freeGameNCnts = vals[5];
          gameResult.WinPointLine = vals[6];
          gameResult.WinTotalPoint = vals[7];
          cc.store.userPoints = vals[8];
          gameResult.heart = vals[9];
          gameResult.VideoIdx = vals[10];
          cc.store.BonusGame = vals[11];
          bonusGameState = vals[11]; // console.log(vals[3]);
          // console.log(vals[4]);

          if (gameResult.iGrid.some(function (val) {
            return val === -1;
          }) === false) {
            cc.store.gameResultGotStatus = 2;
          }
        }

        break;

      case 3074:
        //　通知遊戲端免費遊戲結束
        cc.store.type = 1;
        cc.store.FreeTotalPoint = vals[1];
        cc.store.userPoints = vals[2];
        break;

      case 3075:
        //　jackpot點數
        PublicSetUp.timeout = 0;
        cc.store.cardPot = vals[1];
        var num = vals[1];
        cc.find('Canvas/Game/Machine/UI/GameJP/Value').getComponent(cc.Label).string = Math.floor(Math.round((num + Number.EPSILON) * 100) / 100);
        break;

      case 3181:
        //　特殊卡牌
        cc.store.cardRatio = vals[1];
        cc.store.cardcnts = vals[2];
        cc.find('Canvas/Game/Card/ProgressBar').getComponent(cc.ProgressBar).progress = cc.store.cardRatio;
        cc.find('Canvas/Game/Card/cardback/Value').getComponent(cc.Label).string = cc.store.cardcnts;

        if (cc.store.cardcnts == 0) {
          cc.find('Canvas/Game/Card/ProgressBar').active = false;
          cc.find('Canvas/Game/Card/cardback').active = false;
        } else {
          cc.find('Canvas/Game/Card/ProgressBar').active = true;
          cc.find('Canvas/Game/Card/cardback').active = true;
        }

        break;

      case 3182:
        // 翻牌遊戲 
        (0, _winBonusGame["default"])(cc.store.bonusGameClick, vals[1], cc.store.bonusGameQuestion, Math.round(vals[2]));
        cc.find('Canvas/Game/Machine/UI/PointScore/GameScore/Value').getComponent(cc.Label).string = Math.round(vals[2]);
        break;
    }
  };
}();

var _default = handleGameCommand;
exports["default"] = _default;
module.exports = exports["default"];

cc._RF.pop();