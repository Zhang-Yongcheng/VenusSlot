cc.Class({
  extends: cc.Component,

  onLoad() {
    const button = this.node.getComponent(cc.Button);
    button.node.on('click', () => {
      cc.store?.gameServer.GetPI().disconnect();
      cc.store?.lobbyServer.GetPI().disconnect();
      cc.store?.mainServer.GetPI().disconnect();
      this.scheduleOnce(function() {
        window.location.href("https://sa.bcbtop.top/");
    }, 1);
    });
  }
});
