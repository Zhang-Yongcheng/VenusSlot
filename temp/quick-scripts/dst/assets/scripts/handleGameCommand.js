
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcaGFuZGxlR2FtZUNvbW1hbmQuanMiXSwibmFtZXMiOlsiaGFuZGxlR2FtZUNvbW1hbmQiLCJmaXJzdDMwNzIiLCJ2YWxzIiwicGkiLCJnYW1lT2JqIiwiY29uc29sZSIsImxvZyIsImNjIiwic3RvcmUiLCJ1c2VyUG9pbnRzIiwiZmluZCIsImdldENvbXBvbmVudCIsIkxhYmVsIiwic3RyaW5nIiwibWF4QmV0IiwibWluQmV0IiwiY3VycmVudEJldCIsImdhbWVSZXN1bHQiLCJpR3JpZCIsImFjdGl2ZSIsImZyZWVHYW1lQ250cyIsImdhbWVSZXN1bHRHb3RTdGF0dXMiLCJ0eXBlIiwiaUxpbmUiLCJpRnJhbWUiLCJmcmVlR2FtZU5DbnRzIiwiV2luUG9pbnRMaW5lIiwiV2luVG90YWxQb2ludCIsImhlYXJ0IiwiVmlkZW9JZHgiLCJzb21lIiwidmFsIiwiRnJlZVRvdGFsUG9pbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsaUJBQWlCLEdBQUksWUFBWTtBQUNyQyxNQUFJQyxTQUFTLEdBQUcsSUFBaEI7QUFFQSxTQUFPLFNBQVNELGlCQUFULENBQTJCRSxJQUEzQixFQUFpQ0MsRUFBakMsRUFBcUNDLE9BQXJDLEVBQThDO0FBQ25EQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQW1CSixJQUFuQjs7QUFDQSxZQUFRQSxJQUFJLENBQUMsQ0FBRCxDQUFaO0FBQ0UsV0FBSyxJQUFMO0FBQVc7QUFDVCxZQUFJRCxTQUFTLEtBQUssSUFBbEIsRUFBd0I7QUFDdEJBLFVBQUFBLFNBQVMsR0FBRyxLQUFaO0FBRUFNLFVBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxVQUFULEdBQXNCUCxJQUFJLENBQUMsQ0FBRCxDQUExQjtBQUNBSyxVQUFBQSxFQUFFLENBQUNHLElBQUgsQ0FBUSx3Q0FBUixFQUFrREMsWUFBbEQsQ0FBK0RKLEVBQUUsQ0FBQ0ssS0FBbEUsRUFBeUVDLE1B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aUVlRiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaGFuZGxlR2FtZUNvbW1hbmQgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGxldCBmaXJzdDMwNzIgPSB0cnVlO1xyXG5cclxuICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlR2FtZUNvbW1hbmQodmFscywgcGksIGdhbWVPYmopIHtcclxuICAgIGNvbnNvbGUubG9nKFwiLS0lb1wiLHZhbHMpO1xyXG4gICAgc3dpdGNoICh2YWxzWzBdKSB7XHJcbiAgICAgIGNhc2UgMzA3MjogLy/jgIDlm57lgrPmnKzmoYznmoTos4foqIpcclxuICAgICAgICBpZiAoZmlyc3QzMDcyID09PSB0cnVlKSB7XHJcbiAgICAgICAgICBmaXJzdDMwNzIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICBjYy5zdG9yZS51c2VyUG9pbnRzID0gdmFsc1s0XTtcclxuICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9HYW1lL01hY2hpbmUvVUkvR2FtZVBvaW50L1ZhbHVlJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBjYy5zdG9yZS51c2VyUG9pbnRzO1xyXG5cclxuICAgICAgICAgIGNjLnN0b3JlLm1heEJldCA9IHZhbHNbMl07XHJcbiAgICAgICAgICBjYy5zdG9yZS5taW5CZXQgPSBjYy5zdG9yZS5jdXJyZW50QmV0ID0gdmFsc1szXTtcclxuICAgICAgICAgIGNjLnN0b3JlLmdhbWVSZXN1bHQuaUdyaWQgPSB2YWxzWzhdO1xyXG5cclxuICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9HYW1lL01hY2hpbmUvVUkvQmV0UGFuZWwvVmFsdWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGNjLnN0b3JlLmN1cnJlbnRCZXQ7XHJcblxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2codmFsc1s4XSk7XHJcblxyXG4gICAgICAgICAgLy8gaGlkZSBsb2dpblxyXG5cclxuXHJcbiAgICAgICAgICAvLyBwbGF5IGJnIG11c2ljXHJcblxyXG5cclxuICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9HYW1lJykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2Muc3RvcmUuZnJlZUdhbWVDbnRzID0gdmFsc1s5XTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgMzA3MzogLy/jgIDlm57lgrPmirzms6jntZDmnpzos4foqIpcclxuICAgICAgICBpZiAoY2Muc3RvcmUuZ2FtZVJlc3VsdEdvdFN0YXR1cyA9PT0gMSkge1xyXG4gICAgICAgICAgY29uc3QgeyBnYW1lUmVzdWx0IH0gPSBjYy5zdG9yZTtcclxuICAgICAgICAgIGdhbWVSZXN1bHQudHlwZSA9IHZhbHNbMV07XHJcbiAgICAgICAgICBnYW1lUmVzdWx0LmlHcmlkID0gdmFsc1syXTtcclxuICAgICAgICAgIGdhbWVSZXN1bHQuaUxpbmUgPSB2YWxzWzNdO1xyXG4gICAgICAgICAgZ2FtZVJlc3VsdC5pRnJhbWUgPSB2YWxzWzRdO1xyXG4gICAgICAgICAgZ2FtZVJlc3VsdC5mcmVlR2FtZU5DbnRzPXZhbHNbNV07XHJcbiAgICAgICAgICBnYW1lUmVzdWx0LldpblBvaW50TGluZSA9IHZhbHNbNl07XHJcbiAgICAgICAgICBnYW1lUmVzdWx0LldpblRvdGFsUG9pbnQgPSB2YWxzWzddO1xyXG4gICAgICAgICAgY2Muc3RvcmUudXNlclBvaW50cyA9IHZhbHNbOF07XHJcbiAgICAgICAgICBnYW1lUmVzdWx0LmhlYXJ0PXZhbHNbOV07XHJcbiAgICAgICAgICBnYW1lUmVzdWx0LlZpZGVvSWR4PXZhbHNbMTBdO1xyXG5cclxuICAgICAgICAgICBjb25zb2xlLmxvZygnLS0nK2dhbWVSZXN1bHQuZnJlZUdhbWVOQ250cyk7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWxzWzNdKTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHNbNF0pO1xyXG5cclxuICAgICAgICAgIGlmIChnYW1lUmVzdWx0LmlHcmlkLnNvbWUodmFsID0+IHZhbCA9PT0gLTEpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBjYy5zdG9yZS5nYW1lUmVzdWx0R290U3RhdHVzID0gMjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIDMwNzQ6IC8v44CA6YCa55+l6YGK5oiy56uv5YWN6LK76YGK5oiy57WQ5p2fXHJcbiAgICAgICAgY2Muc3RvcmUudHlwZT0xO1xyXG4gICAgICAgIGNjLnN0b3JlLkZyZWVUb3RhbFBvaW50PXZhbHNbMV07XHJcbiAgICAgICAgY2Muc3RvcmUudXNlclBvaW50cyA9IHZhbHNbMl07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUdhbWVDb21tYW5kO1xyXG4iXX0=