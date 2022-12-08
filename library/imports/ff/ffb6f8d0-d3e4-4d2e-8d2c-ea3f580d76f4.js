"use strict";
cc._RF.push(module, 'ffb6fjQ0+RNLo0s6j9YDXb0', 'soundOnButton');
// scripts/soundOnButton.js

"use strict";

var PublicSetUp = require('PublicSetUp');

cc.Class({
  "extends": cc.Component,
  onLoad: function onLoad() {
    var button = this.node.getComponent(cc.Button);
    button.node.on('click', function () {
      if (cc.store.soundEnabled === false) {
        cc.store.soundEnabled = true;
        PublicSetUp.sound = 1;
        cc.audioEngine.playMusic(PublicSetUp.MusicClip, true);
        button.node.active = false;
        button.getComponent(cc.Button).interactable = false;
        var soundOffButton = cc.find('Canvas/Game/Machine/UpUI/Menu/SettingsPanel/SoundOffButton');
        soundOffButton.active = true;
        soundOffButton.getComponent(cc.Button).interactable = true;
      }
    });
  }
});

cc._RF.pop();