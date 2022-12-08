"use strict";
cc._RF.push(module, 'ea41dwm6KNGRr/Hhs6XSq53', 'requestTableInfo');
// scripts/requestTableInfo.js

"use strict";

exports.__esModule = true;
exports["default"] = requestTableInfo;

function requestTableInfo() {
  // bonusGame
  if (cc.store.BonusGame == 1) {
    cc.store.playing = false;
    cc.store.bonusGameQuestion = Math.floor(Math.random() * 2) + 1;
    cc.find('Canvas/Game/Machine/CardGame/UI/cardQuestion').getComponent(cc.Label).string = cc.store.bonusGameQuestion === 1 ? '請選出 紅桃' : '請選出 黑桃';
    cc.find('Canvas/Game/Machine/CardGame').getComponent('cardGame').UIReset();
    return;
  } else {
    var _cc$store;

    (_cc$store = cc.store) == null ? void 0 : _cc$store.gameServer.GetPI().sendData(3161);
  }
}

module.exports = exports["default"];

cc._RF.pop();