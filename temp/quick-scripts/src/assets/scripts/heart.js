"use strict";
cc._RF.push(module, 'c94f9cVvGFGx73Qv9W4Be5r', 'heart');
// scripts/heart.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var heartcnt = [];
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
    for (var i = 0; i < 5; i++) {
      heartcnt[i] = cc.find("Canvas/Game/heartPanel/" + (i + 1));
    }

    this.closeHeart();
  },
  show: function show(cnt) {
    for (var i = 0; i < 5; i++) {
      heartcnt[i].active = false;
    }

    for (var _i = 0; _i < cnt; _i++) {
      heartcnt[_i].active = true;
    }
  },
  closeHeart: function closeHeart() {
    for (var i = 0; i < 5; i++) {
      heartcnt[i].active = false;
    }
  } // update (dt) {},

});

cc._RF.pop();