"use strict";
cc._RF.push(module, 'c7e77eYJVZJbpCXbZ8oqtld', 'soundOffButton');
// scripts/soundOffButton.js

"use strict";

var PublicSetUp = require('PublicSetUp');

cc.Class({
  "extends": cc.Component,
  onLoad: function onLoad() {
    var button = this.node.getComponent(cc.Button);
    button.node.on('click', function () {
      if (cc.store.soundEnabled === true) {
        cc.store.soundEnabled = false;
        button.node.active = false;
        button.getComponent(cc.Button).interactable = false;
        cc.audioEngine.stopAll(PublicSetUp.audio1, false);
        cc.audioEngine.stopMusic();
        var soundOnButton = cc.find('Canvas/Game/Machine/UI/Menu/SettingsPanel/SoundOnButton');
        soundOnButton.active = true;
        soundOnButton.getComponent(cc.Button).interactable = true;
      }
    });
  }
});

cc._RF.pop();