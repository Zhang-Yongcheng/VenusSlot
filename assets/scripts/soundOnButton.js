cc.Class({
  extends: cc.Component,

  onLoad() {
    const button = this.node.getComponent(cc.Button);
    button.node.on('click', () => {
      if (cc.store.soundEnabled === false) {
        cc.store.soundEnabled = true;

        button.node.active = false;
        button.getComponent(cc.Button).interactable = false;

        const soundOffButton = cc.find('Canvas/Game/Machine/UI/Menu/SettingsPanel/SoundOffButton');
        soundOffButton.active = true;
        soundOffButton.getComponent(cc.Button).interactable = true;
      }
    });
  }
});
