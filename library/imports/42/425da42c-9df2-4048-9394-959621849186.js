"use strict";
cc._RF.push(module, '425daQsnfJASJOUlZYhhJGG', 'maxBetButton');
// scripts/maxBetButton.js

"use strict";

cc.Class({
  "extends": cc.Component,
  onLoad: function onLoad() {
    var button = this.node.getComponent(cc.Button);
    button.node.on('click', function () {
      var currentBetValue = cc.find('Canvas/Game/Machine/UpUI/MenuPanel/BetPanel/Value').getComponent(cc.Label);
      var currentBet = parseInt(currentBetValue.string);

      if (currentBet !== cc.store.maxBet) {
        if (cc.store.userPoints >= cc.store.maxBet) {
          currentBetValue.string = cc.store.currentBet = cc.store.maxBet;
        } else {
          currentBetValue.string = cc.store.currentBet = Math.floor(cc.store.userPoints);
        }
      }
    });
  }
});

cc._RF.pop();