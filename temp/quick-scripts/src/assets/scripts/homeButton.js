"use strict";
cc._RF.push(module, 'e0f0fpDjTFD5KItGQKTAbjQ', 'homeButton');
// scripts/homeButton.js

"use strict";

cc.Class({
  "extends": cc.Component,
  onLoad: function onLoad() {
    var button = this.node.getComponent(cc.Button);
    button.node.on('click', function () {
      history.back();
    });
  }
});

cc._RF.pop();