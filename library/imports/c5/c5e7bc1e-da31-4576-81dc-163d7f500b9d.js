"use strict";
cc._RF.push(module, 'c5e7bwe2jFFdoHcFj1/UAud', 'score');
// scripts/score.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var self;
cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    self = this;
    cc.find('Canvas/Game/score/1').active = false;
  },
  run: function run(score) {
    var scoreLab = cc.find('Canvas/Game/score/1');
    scoreLab.getComponent(cc.Label).string = "+" + score;
    cc.tween(scoreLab).call(function () {
      scoreLab.active = true;
    }).to(0, {
      position: cc.v2(-100, 130)
    }).to(1, {
      position: cc.v2(-100, 245)
    }).delay(0.5).call(function () {
      scoreLab.active = false;
    }).start();
  } // update (dt) {},

});

cc._RF.pop();