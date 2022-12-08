let PublicSetUp=require('PublicSetUp');

cc.Class({
  extends: cc.Component,

  onLoad() {
    const button = this.node.getComponent(cc.Button);
    button.node.on('click', () => {
      if (cc.store.soundEnabled === true) {
        cc.store.soundEnabled = false;
        button.node.active = false;
        PublicSetUp.sound=0;
        button.getComponent(cc.Button).interactable = false;
        cc.audioEngine.stopAll();
        cc.audioEngine.stopMusic();
        const soundOnButton = cc.find('Canvas/Game/Machine/UpUI/Menu/SettingsPanel/SoundOnButton');
        soundOnButton.active = true;
        soundOnButton.getComponent(cc.Button).interactable = true;
      }
    });
  }
});
