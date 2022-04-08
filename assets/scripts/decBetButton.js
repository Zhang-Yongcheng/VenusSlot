cc.Class({
  extends: cc.Component,

  onLoad() {
    const button = this.node.getComponent(cc.Button);
    button.node.on('click', () => {
      const currentBetValue = cc.find('Canvas/Game/Machine/UI/BetPanel/Value').getComponent(cc.Label);
      const currentBet = parseFloat(currentBetValue.string);
      if (currentBet > cc.store.minBet && currentBet <= cc.store.maxBet) {
        if(currentBet<=1){
          currentBetValue.string = cc.store.currentBet = parseFloat((currentBet - 0.1).toPrecision(12)) ;
        }else if(currentBet<=10){
          currentBetValue.string = cc.store.currentBet = currentBet - 1;
        }else{
          currentBetValue.string = cc.store.currentBet = currentBet - 10;
        }
      }
    });
  }
});