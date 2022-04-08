cc.Class({
  extends: cc.Component,

  onLoad() {
    const button = this.node.getComponent(cc.Button);
    button.node.on('click', () => {
      if (cc.store.canPlay() === true && cc.store.playing === false) {
        cc.store.playing = true;
      }
    });
  }
});
