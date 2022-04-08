cc.Class({
  extends: cc.Component,

  onLoad() {
    const button = this.node.getComponent(cc.Button);
    button.node.on('click', () => {
      const currentBetValue = cc.find('Canvas/Game/Machine/UI/BetPanel/Value').getComponent(cc.Label);
      const currentBet = parseInt(currentBetValue.string);
      if (currentBet !== cc.store.maxBet) {
        currentBetValue.string = cc.store.currentBet = cc.store.maxBet;
      }
    });
  }
});
