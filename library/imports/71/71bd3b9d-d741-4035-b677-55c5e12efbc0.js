"use strict";
cc._RF.push(module, '71bd3ud10FANbZ3VcXhLvvA', 'decBetButton');
// scripts/decBetButton.js

"use strict";

cc.Class({
  "extends": cc.Component,
  onLoad: function onLoad() {
    var button = this.node.getComponent(cc.Button);
    button.node.on('click', function () {
      var currentBetValue = cc.find('Canvas/Game/Machine/UI/BetPanel/Value').getComponent(cc.Label);
      var currentBet = parseFloat(currentBetValue.string);

      if (currentBet > cc.store.minBet && currentBet <= cc.store.maxBet) {
        currentBetValue.string = cc.store.currentBet = currentBet - 10; // if(currentBet<=1){
        //   currentBetValue.string = cc.store.currentBet = parseFloat((currentBet - 0.1).toPrecision(12)) ;
        // }else if(currentBet<=10){
        //   currentBetValue.string = cc.store.currentBet = currentBet - 1;
        // }else{
        //   currentBetValue.string = cc.store.currentBet = currentBet - 10;
        // }
      }
    });
  }
});

cc._RF.pop();