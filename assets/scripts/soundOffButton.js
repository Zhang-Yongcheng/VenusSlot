let PublicSetUp=require('PublicSetUp');

cc.Class({
  extends: cc.Component,

  onLoad() {
    const button = this.node.getComponent(cc.Button);
    button.node.on('click', () => {
      if (cc.store.soundEnabled === true) {
        cc.store.soundEnabled = false;
        button.node.active = false;
        button.getComponent(cc.Button).interactable = false;
        cc.audioEngine.stopAll(PublicSetUp.audio1, false);
        cc.audioEngine.stopMusic();
        const soundOnButton = cc.find('Canvas/Game/Machine/UI/Menu/SettingsPanel/SoundOnButton');
        soundOnButton.active = true;
        soundOnButton.getComponent(cc.Button).interactable = true;
      }
    });
  }
});
