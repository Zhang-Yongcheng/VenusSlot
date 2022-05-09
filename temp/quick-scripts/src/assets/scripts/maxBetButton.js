"use strict";
cc._RF.push(module, '425daQsnfJASJOUlZYhhJGG', 'maxBetButton');
// scripts/maxBetButton.js

"use strict";

cc.Class({
  "extends": cc.Component,
  onLoad: function onLoad() {
    var button = this.node.getComponent(cc.Button);
    button.node.on('click', function () {
      var currentBetValue = cc.find('Canvas/Game/Machine/UI/BetPanel/Value').getComponent(cc.Label);
      var currentBet = parseInt(currentBetValue.string);

      if (currentBet !== cc.store.maxBet) {
        currentBetValue.string = cc.store.currentBet = cc.store.maxBet;
      }
    });
  }
});

cc._RF.pop();