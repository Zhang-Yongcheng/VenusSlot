"use strict";
cc._RF.push(module, '5d7a75w+adBHZkh/QGIIFoc', 'menuButton');
// scripts/menuButton.js

"use strict";

cc.Class({
  "extends": cc.Component,
  onLoad: function onLoad() {
    var button = this.node.getComponent(cc.Button);
    button.node.on('click', function () {
      cc.find('Canvas/Game/Machine/UI/Menu').getComponent('menuController').dropDown();
    });
  }
});

cc._RF.pop();