"use strict";
cc._RF.push(module, '3df78yNr2lJfpYZ5OYGLZOU', 'videoReady');
// scripts/videoReady.js

"use strict";

cc.Class({
  "extends": cc.Component,
  start: function start() {
    this.node.getComponent(cc.VideoPlayer).enabled = false;
  }
});

cc._RF.pop();