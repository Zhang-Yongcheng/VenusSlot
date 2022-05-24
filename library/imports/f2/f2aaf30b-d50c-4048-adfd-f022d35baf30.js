"use strict";
cc._RF.push(module, 'f2aafML1QxASK398CLTW68w', 'incBetButton');
// scripts/incBetButton.js

"use strict";

var isTouch;
var touchTime;
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
    isTouch = false;
    touchTime = null;
    button.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
    button.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
  },
  touchStart: function touchStart() {
    isTouch = true;
    touchTime = new Date();
  },
  touchHold: function touchHold() {
    if (isTouch && touchTime != null) {
      var touchHoldTime = new Date();
      var millisecons = touchHoldTime.getTime() - touchTime.getTime();

      if (millisecons > 300) {
        isTouch = true;
        var currentBetValue = cc.find('Canvas/Game/Machine/UI/BetPanel/Value').getComponent(cc.Label);
        var currentBet = parseFloat(currentBetValue.string);

        if (currentBet >= cc.store.minBet && currentBet < cc.store.maxBet) {
          currentBetValue.string = cc.store.currentBet = currentBet + 10;
        }
      }
    }
  },
  touchEnd: function touchEnd() {
    isTouch = false;
    touchTime = null;
  },
  update: function update() {
    if (isTouch) {
      this.touchHold();
    }
  }
});

cc._RF.pop();