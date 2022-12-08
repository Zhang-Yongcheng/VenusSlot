"use strict";
cc._RF.push(module, 'e82e68PrlpDUKUade1bQ3Zp', 'autoPlayButton');
// scripts/autoPlayButton.js

"use strict";

var PublicSetUp = require('PublicSetUp');

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    var button = this.node.getComponent(cc.Button);
    button.node.on('click', function () {
      cc.store.auto = false;
      console.log(cc.store.auto);
      var AutoPlayButton = cc.find('Canvas/Game/Machine/UpUI/MenuPanel/ButtonPanel/AutoPlayButton');
      AutoPlayButton.active = false;
      var ManuaPlayButton = cc.find('Canvas/Game/Machine/UpUI/MenuPanel/ButtonPanel/ManuaPlayButton');
      ManuaPlayButton.active = true;
    });
  }
});

cc._RF.pop();