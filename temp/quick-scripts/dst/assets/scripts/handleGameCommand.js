
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/handleGameCommand.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '547502AtRxEfq8fxpX3tzx8', 'handleGameCommand');
// scripts/handleGameCommand.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var handleGameCommand = function () {
  var first3072 = true;
  return function handleGameCommand(vals, pi, gameObj) {
    console.log("--%o", vals);

    switch (vals[0]) {
      case 3072:
        //　回傳本桌的資訊
        if (first3072 === true) {
          first3072 = false;
          cc.store.userPoints = vals[4];
          cc.find('Canvas/Game/Machine/UI/GamePoint/Value').getComponent(cc.Label).string = cc.store.userPoints;
          cc.store.maxBet = vals[2];
          cc.store.minBet = cc.store.currentBet = vals[3];
          cc.store.gameResult.iGrid = vals[8];
          cc.find('Canvas/Game/Machine/UI/BetPanel/Value').getComponent(cc.Label).string = cc.store.currentBet; // console.log(vals[8]);
          // hide login
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
          console.log('--' + gameResult.freeGameNCnts); // console.log(vals[3]);
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
        cc.store.cardPot = vals[1];
        cc.find('Canvas/Game/Machine/UI/GameJP/Value').getComponent(cc.Label).string = cc.store.cardPot;
        break;

      case 3076:
        //　特殊卡牌
        cc.store.cardRatio = vals[1];
        cc.store.cardcnts = vals[2]; //cc.find('Canvas/Game/Card/ProgressBar').getComponent(cc.ProgressBar).progress = cc.store.cardRatio;

        cc.find('Canvas/Game/Card/cardback/Value').getComponent(cc.Label).string = cc.store.cardcnts;

        if (cc.store.cardcnts == 0) {
          cc.find('Canvas/Game/Card/ProgressBar').active = false;
        }

        break;
    }
  };
}();

var _default = handleGameCommand;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcaGFuZGxlR2FtZUNvbW1hbmQuanMiXSwibmFtZXMiOlsiaGFuZGxlR2FtZUNvbW1hbmQiLCJmaXJzdDMwNzIiLCJ2YWxzIiwicGkiLCJnYW1lT2JqIiwiY29uc29sZSIsImxvZyIsImNjIiwic3RvcmUiLCJ1c2VyUG9pbnRzIiwiZmluZCIsImdldENvbXBvbmVudCIsIkxhYmVsIiwic3RyaW5nIiwibWF4QmV0IiwibWluQmV0IiwiY3VycmVudEJldCIsImdhbWVSZXN1bHQiLCJpR3JpZCIsImFjdGl2ZSIsImZyZWVHYW1lQ250cyIsImdhbWVSZXN1bHRHb3RTdGF0dXMiLCJ0eXBlIiwiaUxpbmUiLCJpRnJhbWUiLCJmcmVlR2FtZU5DbnRzIiwiV2luUG9pbnRMaW5lIiwiV2luVG90YWxQb2ludCIsImhlYXJ0IiwiVmlkZW9JZHgiLCJzb21lIiwidmFsIiwiRnJlZVRvdGFsUG9pbnQiLCJjYXJkUG90IiwiY2FyZFJhdGlvIiwiY2FyZGNudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsaUJBQWlCLEdBQUksWUFBWTtBQUNyQyxNQUFJQyxTQUFTLEdBQUcsSUFBaEI7QUFFQSxTQUFPLFNBQVNELGlCQUFULENBQTJCRSxJQUEzQixFQUFpQ0MsRUFBakMsRUFBcUNDLE9BQXJDLEVBQThDO0FBQ25EQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQW1CSixJQUFuQjs7QUFDQSxZQUFRQSxJQUFJLENBQUMsQ0FBRCxDQUFaO0FBQ0UsV0FBSyxJQUFMO0FBQVc7QUFDVCxZQUFJRCxTQUFTLEtBQUssSUFBbEIsRUFBd0I7QUFDdEJBLFVBQUFBLFNBQVMsR0FBRyxLQUFaO0FBRUFNLFVBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxVQUFULEdBQXNCUCxJQUFJLENBQUMsQ0FBRCxDQUExQjtBQUNBSyxVQUFBQSxFQUFFLENBQUNHLElBQUgsQ0FBUSx3Q0FBUixFQUFrREMsWUFBbEQs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RSxDQUFDQyxLQUFILENBQVNDLFVBQVQsR0FBc0JQLElBQUksQ0FBQyxDQUFELENBQTFCO0FBQ0E7O0FBQ0YsV0FBSyxJQUFMO0FBQVc7QUFDVEssUUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVN5QixPQUFULEdBQWlCL0IsSUFBSSxDQUFDLENBQUQsQ0FBckI7QUFDQUssUUFBQUEsRUFBRSxDQUFDRyxJQUFILENBQVEscUNBQVIsRUFBK0NDLFlBQS9DLENBQTRESixFQUFFLENBQUNLLEtBQS9ELEVBQXNFQyxNQUF0RSxHQUE2RU4sRUFBRSxDQUFDQyxLQUFILENBQVN5QixPQUF0RjtBQUVBOztBQUNGLFdBQUssSUFBTDtBQUFXO0FBQ1QxQixRQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUzBCLFNBQVQsR0FBcUJoQyxJQUFJLENBQUMsQ0FBRCxDQUF6QjtBQUNBSyxRQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUzJCLFFBQVQsR0FBb0JqQyxJQUFJLENBQUMsQ0FBRCxDQUF4QixDQUZGLENBR0U7O0FBQ0FLLFFBQUFBLEVBQUUsQ0FBQ0csSUFBSCxDQUFRLGlDQUFSLEVBQTJDQyxZQUEzQyxDQUF3REosRUFBRSxDQUFDSyxLQUEzRCxFQUFrRUMsTUFBbEUsR0FBMkVOLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTMkIsUUFBcEY7O0FBQ0EsWUFBRzVCLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTMkIsUUFBVCxJQUFtQixDQUF0QixFQUF3QjtBQUN0QjVCLFVBQUFBLEVBQUUsQ0FBQ0csSUFBSCxDQUFRLDhCQUFSLEVBQXdDUyxNQUF4QyxHQUErQyxLQUEvQztBQUNEOztBQUNEO0FBckVKO0FBdUVELEdBekVEO0FBMEVELENBN0V5QixFQUExQjs7ZUErRWVuQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaGFuZGxlR2FtZUNvbW1hbmQgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGxldCBmaXJzdDMwNzIgPSB0cnVlO1xyXG5cclxuICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlR2FtZUNvbW1hbmQodmFscywgcGksIGdhbWVPYmopIHtcclxuICAgIGNvbnNvbGUubG9nKFwiLS0lb1wiLHZhbHMpO1xyXG4gICAgc3dpdGNoICh2YWxzWzBdKSB7XHJcbiAgICAgIGNhc2UgMzA3MjogLy/jgIDlm57lgrPmnKzmoYznmoTos4foqIpcclxuICAgICAgICBpZiAoZmlyc3QzMDcyID09PSB0cnVlKSB7XHJcbiAgICAgICAgICBmaXJzdDMwNzIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICBjYy5zdG9yZS51c2VyUG9pbnRzID0gdmFsc1s0XTtcclxuICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9HYW1lL01hY2hpbmUvVUkvR2FtZVBvaW50L1ZhbHVlJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBjYy5zdG9yZS51c2VyUG9pbnRzO1xyXG5cclxuICAgICAgICAgIGNjLnN0b3JlLm1heEJldCA9IHZhbHNbMl07XHJcbiAgICAgICAgICBjYy5zdG9yZS5taW5CZXQgPSBjYy5zdG9yZS5jdXJyZW50QmV0ID0gdmFsc1szXTtcclxuICAgICAgICAgIGNjLnN0b3JlLmdhbWVSZXN1bHQuaUdyaWQgPSB2YWxzWzhdO1xyXG5cclxuICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9HYW1lL01hY2hpbmUvVUkvQmV0UGFuZWwvVmFsdWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGNjLnN0b3JlLmN1cnJlbnRCZXQ7XHJcblxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2codmFsc1s4XSk7XHJcblxyXG4gICAgICAgICAgLy8gaGlkZSBsb2dpblxyXG5cclxuXHJcbiAgICAgICAgICAvLyBwbGF5IGJnIG11c2ljXHJcbiAgICAgICAgICBjYy5maW5kKCdDYW52YXMvTG9naW5NZXNzYWdlJykuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgY2MuZmluZCgnQ2FudmFzL0dhbWUnKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5zdG9yZS5mcmVlR2FtZUNudHMgPSB2YWxzWzldO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAzMDczOiAvL+OAgOWbnuWCs+aKvOazqOe1kOaenOizh+ioilxyXG4gICAgICAgIGlmIChjYy5zdG9yZS5nYW1lUmVzdWx0R290U3RhdHVzID09PSAxKSB7XHJcbiAgICAgICAgICBjb25zdCB7IGdhbWVSZXN1bHQgfSA9IGNjLnN0b3JlO1xyXG4gICAgICAgICAgZ2FtZVJlc3VsdC50eXBlID0gdmFsc1sxXTtcclxuICAgICAgICAgIGdhbWVSZXN1bHQuaUdyaWQgPSB2YWxzWzJdO1xyXG4gICAgICAgICAgZ2FtZVJlc3VsdC5pTGluZSA9IHZhbHNbM107XHJcbiAgICAgICAgICBnYW1lUmVzdWx0LmlGcmFtZSA9IHZhbHNbNF07XHJcbiAgICAgICAgICBnYW1lUmVzdWx0LmZyZWVHYW1lTkNudHM9dmFsc1s1XTtcclxuICAgICAgICAgIGdhbWVSZXN1bHQuV2luUG9pbnRMaW5lID0gdmFsc1s2XTtcclxuICAgICAgICAgIGdhbWVSZXN1bHQuV2luVG90YWxQb2ludCA9IHZhbHNbN107XHJcbiAgICAgICAgICBjYy5zdG9yZS51c2VyUG9pbnRzID0gdmFsc1s4XTtcclxuICAgICAgICAgIGdhbWVSZXN1bHQuaGVhcnQ9dmFsc1s5XTtcclxuICAgICAgICAgIGdhbWVSZXN1bHQuVmlkZW9JZHg9dmFsc1sxMF07XHJcblxyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKCctLScrZ2FtZVJlc3VsdC5mcmVlR2FtZU5DbnRzKTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHNbM10pO1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2codmFsc1s0XSk7XHJcblxyXG4gICAgICAgICAgaWYgKGdhbWVSZXN1bHQuaUdyaWQuc29tZSh2YWwgPT4gdmFsID09PSAtMSkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGNjLnN0b3JlLmdhbWVSZXN1bHRHb3RTdGF0dXMgPSAyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgMzA3NDogLy/jgIDpgJrnn6XpgYrmiLLnq6/lhY3osrvpgYrmiLLntZDmnZ9cclxuICAgICAgICBjYy5zdG9yZS50eXBlPTE7XHJcbiAgICAgICAgY2Muc3RvcmUuRnJlZVRvdGFsUG9pbnQ9dmFsc1sxXTtcclxuICAgICAgICBjYy5zdG9yZS51c2VyUG9pbnRzID0gdmFsc1syXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAzMDc1OiAvL+OAgGphY2twb3Tpu57mlbhcclxuICAgICAgICBjYy5zdG9yZS5jYXJkUG90PXZhbHNbMV07XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL0dhbWUvTWFjaGluZS9VSS9HYW1lSlAvVmFsdWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1jYy5zdG9yZS5jYXJkUG90O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDMwNzY6IC8v44CA54m55q6K5Y2h54mMXHJcbiAgICAgICAgY2Muc3RvcmUuY2FyZFJhdGlvID0gdmFsc1sxXTtcclxuICAgICAgICBjYy5zdG9yZS5jYXJkY250cyA9IHZhbHNbMl07XHJcbiAgICAgICAgLy9jYy5maW5kKCdDYW52YXMvR2FtZS9DYXJkL1Byb2dyZXNzQmFyJykuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKS5wcm9ncmVzcyA9IGNjLnN0b3JlLmNhcmRSYXRpbztcclxuICAgICAgICBjYy5maW5kKCdDYW52YXMvR2FtZS9DYXJkL2NhcmRiYWNrL1ZhbHVlJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBjYy5zdG9yZS5jYXJkY250cztcclxuICAgICAgICBpZihjYy5zdG9yZS5jYXJkY250cz09MCl7XHJcbiAgICAgICAgICBjYy5maW5kKCdDYW52YXMvR2FtZS9DYXJkL1Byb2dyZXNzQmFyJykuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlR2FtZUNvbW1hbmQ7XHJcbiJdfQ==