"use strict";
cc._RF.push(module, 'f2aafML1QxASK398CLTW68w', 'incBetButton');
// scripts/incBetButton.js

"use strict";

cc.Class({
  "extends": cc.Component,
  onLoad: function onLoad() {
    var button = this.node.getComponent(cc.Button);
    button.node.on('click', function () {
      var currentBetValue = cc.find('Canvas/Game/Machine/UI/BetPanel/Value').getComponent(cc.Label);
      var currentBet = parseFloat(currentBetValue.string);

      if (currentBet >= cc.store.minBet && currentBet < cc.store.maxBet) {
        currentBetValue.string = cc.store.currentBet = currentBet + 10; // if(currentBet<=0.9){
        //   currentBetValue.string = cc.store.currentBet =parseFloat((currentBet + 0.1).toPrecision(12)) ;
        // }else if(currentBet<=9){
        //   currentBetValue.string = cc.store.currentBet = currentBet + 1;
        // }else{
        //   currentBetValue.string = cc.store.currentBet = currentBet + 10;
        // }
      }
    });
  }
});

cc._RF.pop();