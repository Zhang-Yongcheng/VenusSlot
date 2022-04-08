"use strict";
cc._RF.push(module, '8babavgekZPEpL8e3kJT8gt', 'historyButton');
// scripts/historyButton.js

"use strict";

cc.Class({
  "extends": cc.Component,
  onLoad: function onLoad() {
    var button = this.node.getComponent(cc.Button);
    button.node.on('click', function () {});
  }
});

cc._RF.pop();