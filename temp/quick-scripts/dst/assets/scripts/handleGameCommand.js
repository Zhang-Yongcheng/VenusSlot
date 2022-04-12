
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcaGFuZGxlR2FtZUNvbW1hbmQuanMiXSwibmFtZXMiOlsiaGFuZGxlR2FtZUNvbW1hbmQiLCJmaXJzdDMwNzIiLCJ2YWxzIiwicGkiLCJnYW1lT2JqIiwiY29uc29sZSIsImxvZyIsImNjIiwic3RvcmUiLCJ1c2VyUG9pbnRzIiwiZmluZCIsImdldENvbXBvbmVudCIsIkxhYmVsIiwic3RyaW5nIiwibWF4QmV0IiwibWluQmV0IiwiY3VycmVudEJldCIsImdhbWVSZXN1bHQiLCJpR3JpZCIsImFjdGl2ZSIsImZyZWVHYW1lQ250cyIsImdhbWVSZXN1bHRHb3RTdGF0dXMiLCJ0eXBlIiwiaUxpbmUiLCJpRnJhbWUiLCJmcmVlR2FtZU5DbnRzIiwiV2luUG9pbnRMaW5lIiwiV2luVG90YWxQb2ludCIsInNvbWUiLCJ2YWwiLCJGcmVlVG90YWxQb2ludCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxpQkFBaUIsR0FBSSxZQUFZO0FBQ3JDLE1BQUlDLFNBQVMsR0FBRyxJQUFoQjtBQUVBLFNBQU8sU0FBU0QsaUJBQVQsQ0FBMkJFLElBQTNCLEVBQWlDQyxFQUFqQyxFQUFxQ0MsT0FBckMsRUFBOEM7QUFDbkRDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBbUJKLElBQW5COztBQUNBLFlBQVFBLElBQUksQ0FBQyxDQUFELENBQVo7QUFDRSxXQUFLLElBQUw7QUFBVztBQUNULFlBQUlELFNBQVMsS0FBSyxJQUFsQixFQUF3QjtBQUN0QkEsVUFBQUEsU0FBUyxHQUFHLEtBQVo7QUFFQU0sVUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVNDLFVBQVQsR0FBc0JQLElBQUksQ0FBQyxDQUFELENBQTFCO0FBQ0FLLFVBQUFBLEVBQUUsQ0FBQ0csSUFBSCxDQUFRLHdDQUFSLEVBQWtEQyxZQUFsRCxDQUErREosRUFBRSxDQUFDSyxLQUFsRSxFQUF5RUMsTUFBekUsR0FBa0ZOLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxVQUEzRjtBQUVBRixVQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBU00sTUFBVCxHQUFrQlosSUFBSSxDQUFDLENBQUQsQ0FBdEI7QUFDQUssVUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVNPLE1BQVQsR0FBa0JSLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTUSxVQUFULEdBQXNCZCxJQUFJLENBQUMsQ0FBRCxDQUE1QztBQUNBSyxVQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBU1MsVUFBVCxDQUFvQkMsS0FBcEIsR0FBNEJoQixJQUFJLENBQUMsQ0FBRCxDQUFoQztBQUVBSyxVQUFBQSxFQUFFLENBQUNHLElBQUgsQ0FBUSx1Q0FBUixFQUFpREMsWUFBakQsQ0FBOERKLEVBQUUsQ0FBQ0ssS0FBakUsRUFBd0VDLE1BQXhFLEdBQWlGTixFQUFFLENBQUNDLEtBQUgsQ0FBU1EsVUFBMUYsQ0FWc0IsQ0FZdEI7QUFFQTtBQUdBOztBQUdBVCxVQUFBQSxFQUFFLENBQUNHLElBQUgsQ0FBUSxhQUFSLEVBQXVCUyxNQUF2QixHQUFnQyxJQUFoQztBQUNEOztBQUNEWixRQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBU1ksWUFBVCxHQUF3QmxCLElBQUksQ0FBQyxDQUFELENBQTVCO0FBQ0E7O0FBRUYsV0FBSyxJQUFMO0FBQVc7QUFDVCxZQUFJSyxFQUFFLENBQUNDLEtBQUgsQ0FBU2EsbUJBQVQsS0FBaUMsQ0FBckMsRUFBd0M7QUFDdEMsY0FBUUosVUFBUixHQUF1QlYsRUFBRSxDQUFDQyxLQUExQixDQUFRUyxVQUFSO0FBQ0FBLFVBQUFBLFVBQVUsQ0FBQ0ssSUFBWCxHQUFrQnBCLElBQUksQ0FBQyxDQUFELENBQXRCO0FBQ0FlLFVBQUFBLFVBQVUsQ0FBQ0MsS0FBWCxHQUFtQmhCLElBQUksQ0FBQyxDQUFELENBQXZCO0FBQ0FlLFVBQUFBLFVBQVUsQ0FBQ00sS0FBWCxHQUFtQnJCLElBQUksQ0FBQyxDQUFELENBQXZCO0FBQ0FlLFVBQUFBLFVBQVUsQ0FBQ08sTUFBWCxHQUFvQnRCLElBQUksQ0FBQyxDQUFELENBQXhCO0FBQ0FlLFVBQUFBLFVBQVUsQ0FBQ1EsYUFBWCxHQUF5QnZCLElBQUksQ0FBQyxDQUFELENBQTdCO0FBQ0FlLFVBQUFBLFVBQVUsQ0FBQ1MsWUFBWCxHQUEwQnhCLElBQUksQ0FBQyxDQUFELENBQTlCO0FBQ0FlLFVBQUFBLFVBQVUsQ0FBQ1UsYUFBWCxHQUEyQnpCLElBQUksQ0FBQyxDQUFELENBQS9CO0FBRUFLLFVBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxVQUFULEdBQXNCUCxJQUFJLENBQUMsQ0FBRCxDQUExQjtBQUVDRyxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFLVyxVQUFVLENBQUNRLGFBQTVCLEVBWnFDLENBYXRDO0FBQ0E7O0FBRUEsY0FBSVIsVUFBVSxDQUFDQyxLQUFYLENBQWlCVSxJQUFqQixDQUFzQixVQUFBQyxHQUFHO0FBQUEsbUJBQUlBLEdBQUcsS0FBSyxDQUFDLENBQWI7QUFBQSxXQUF6QixNQUE2QyxLQUFqRCxFQUF3RDtBQUN0RHRCLFlBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTYSxtQkFBVCxHQUErQixDQUEvQjtBQUNEO0FBQ0Y7O0FBQ0Q7O0FBRUYsV0FBSyxJQUFMO0FBQVc7QUFDVGQsUUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVNjLElBQVQsR0FBYyxDQUFkO0FBQ0FmLFFBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTc0IsY0FBVCxHQUF3QjVCLElBQUksQ0FBQyxDQUFELENBQTVCO0FBQ0FLLFFBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxVQUFULEdBQXNCUCxJQUFJLENBQUMsQ0FBRCxDQUExQjtBQUNBO0FBdERKO0FBd0RELEdBMUREO0FBMkRELENBOUR5QixFQUExQjs7ZUFnRWVGIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBoYW5kbGVHYW1lQ29tbWFuZCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgbGV0IGZpcnN0MzA3MiA9IHRydWU7XHJcblxyXG4gIHJldHVybiBmdW5jdGlvbiBoYW5kbGVHYW1lQ29tbWFuZCh2YWxzLCBwaSwgZ2FtZU9iaikge1xyXG4gICAgY29uc29sZS5sb2coXCItLSVvXCIsdmFscyk7XHJcbiAgICBzd2l0Y2ggKHZhbHNbMF0pIHtcclxuICAgICAgY2FzZSAzMDcyOiAvL+OAgOWbnuWCs+acrOahjOeahOizh+ioilxyXG4gICAgICAgIGlmIChmaXJzdDMwNzIgPT09IHRydWUpIHtcclxuICAgICAgICAgIGZpcnN0MzA3MiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgIGNjLnN0b3JlLnVzZXJQb2ludHMgPSB2YWxzWzRdO1xyXG4gICAgICAgICAgY2MuZmluZCgnQ2FudmFzL0dhbWUvTWFjaGluZS9VSS9HYW1lUG9pbnQvVmFsdWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGNjLnN0b3JlLnVzZXJQb2ludHM7XHJcblxyXG4gICAgICAgICAgY2Muc3RvcmUubWF4QmV0ID0gdmFsc1syXTtcclxuICAgICAgICAgIGNjLnN0b3JlLm1pbkJldCA9IGNjLnN0b3JlLmN1cnJlbnRCZXQgPSB2YWxzWzNdO1xyXG4gICAgICAgICAgY2Muc3RvcmUuZ2FtZVJlc3VsdC5pR3JpZCA9IHZhbHNbOF07XHJcblxyXG4gICAgICAgICAgY2MuZmluZCgnQ2FudmFzL0dhbWUvTWFjaGluZS9VSS9CZXRQYW5lbC9WYWx1ZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gY2Muc3RvcmUuY3VycmVudEJldDtcclxuXHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWxzWzhdKTtcclxuXHJcbiAgICAgICAgICAvLyBoaWRlIGxvZ2luXHJcblxyXG5cclxuICAgICAgICAgIC8vIHBsYXkgYmcgbXVzaWNcclxuXHJcblxyXG4gICAgICAgICAgY2MuZmluZCgnQ2FudmFzL0dhbWUnKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5zdG9yZS5mcmVlR2FtZUNudHMgPSB2YWxzWzldO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAzMDczOiAvL+OAgOWbnuWCs+aKvOazqOe1kOaenOizh+ioilxyXG4gICAgICAgIGlmIChjYy5zdG9yZS5nYW1lUmVzdWx0R290U3RhdHVzID09PSAxKSB7XHJcbiAgICAgICAgICBjb25zdCB7IGdhbWVSZXN1bHQgfSA9IGNjLnN0b3JlO1xyXG4gICAgICAgICAgZ2FtZVJlc3VsdC50eXBlID0gdmFsc1sxXTtcclxuICAgICAgICAgIGdhbWVSZXN1bHQuaUdyaWQgPSB2YWxzWzJdO1xyXG4gICAgICAgICAgZ2FtZVJlc3VsdC5pTGluZSA9IHZhbHNbM107XHJcbiAgICAgICAgICBnYW1lUmVzdWx0LmlGcmFtZSA9IHZhbHNbNF07XHJcbiAgICAgICAgICBnYW1lUmVzdWx0LmZyZWVHYW1lTkNudHM9dmFsc1s1XTtcclxuICAgICAgICAgIGdhbWVSZXN1bHQuV2luUG9pbnRMaW5lID0gdmFsc1s2XTtcclxuICAgICAgICAgIGdhbWVSZXN1bHQuV2luVG90YWxQb2ludCA9IHZhbHNbN107XHJcblxyXG4gICAgICAgICAgY2Muc3RvcmUudXNlclBvaW50cyA9IHZhbHNbOF07XHJcblxyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKCctLScrZ2FtZVJlc3VsdC5mcmVlR2FtZU5DbnRzKTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHNbM10pO1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2codmFsc1s0XSk7XHJcblxyXG4gICAgICAgICAgaWYgKGdhbWVSZXN1bHQuaUdyaWQuc29tZSh2YWwgPT4gdmFsID09PSAtMSkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGNjLnN0b3JlLmdhbWVSZXN1bHRHb3RTdGF0dXMgPSAyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgMzA3NDogLy/jgIDpgJrnn6XpgYrmiLLnq6/lhY3osrvpgYrmiLLntZDmnZ9cclxuICAgICAgICBjYy5zdG9yZS50eXBlPTE7XHJcbiAgICAgICAgY2Muc3RvcmUuRnJlZVRvdGFsUG9pbnQ9dmFsc1sxXTtcclxuICAgICAgICBjYy5zdG9yZS51c2VyUG9pbnRzID0gdmFsc1syXTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlR2FtZUNvbW1hbmQ7XHJcbiJdfQ==