cc.Class({
  extends: cc.Component,

  onLoad() {
    const button = this.node.getComponent(cc.Button);
    button.node.on('click', () => {
      if (cc.store.playing === true) {
        cc.store.playing = false;
        const AutoPlayButton = cc.find('Canvas/Game/Machine/UI/playButton');
        AutoPlayButton.active = true;
        const ManuaPlayButton = cc.find('Canvas/Game/Machine/UI/PauseButton');
        ManuaPlayButton.active = false;
      }
    });
  }
});
