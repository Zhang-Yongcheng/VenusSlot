"use strict";
cc._RF.push(module, '6130716dp1L2KxcVD41hLFh', 'pauseButton');
// scripts/pauseButton.js

"use strict";

cc.Class({
  "extends": cc.Component,
  onLoad: function onLoad() {
    var button = this.node.getComponent(cc.Button);
    button.node.on('click', function () {
      if (cc.store.playing === true) {
        cc.store.playing = false;
      }
    });
  }
});

cc._RF.pop();