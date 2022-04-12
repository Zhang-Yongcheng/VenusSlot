"use strict";
cc._RF.push(module, 'b9566A1+5FBDIzPZ8OTD7hx', 'manualPlayButton');
// scripts/manualPlayButton.js

"use strict";

var PublicSetUp = require('PublicSetUp');

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    var button = this.node.getComponent(cc.Button);
    button.node.on('click', function () {
      cc.store.auto = true;
      console.log(cc.store.auto);
      var AutoPlayButton = cc.find('Canvas/Game/Machine/UI/AutoPlayButton');
      AutoPlayButton.active = true;
      AutoPlayButton.getComponent(cc.Button).interactable = true;
      var ManuaPlayButton = cc.find('Canvas/Game/Machine/UI/ManuaPlayButton');
      ManuaPlayButton.active = false;
      ManuaPlayButton.getComponent(cc.Button).interactable = false;
    });
  }
});

cc._RF.pop();