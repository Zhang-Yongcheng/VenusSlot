cc.Class({
  extends: cc.Component,

  start() {
    this.node.getComponent(cc.VideoPlayer).enabled = false;
  }
});
