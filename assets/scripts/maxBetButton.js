cc.Class({
  extends: cc.Component,

  onLoad() {
    const button = this.node.getComponent(cc.Button);
    button.node.on('click', () => {
      
      const currentBetValue = cc.find('Canvas/Game/Machine/UpUI/MenuPanel/BetPanel/Value').getComponent(cc.Label);
      const currentBet = parseInt(currentBetValue.string);
      if (currentBet !== cc.store.maxBet) {
        if(cc.store.userPoints>=cc.store.maxBet){
          currentBetValue.string = cc.store.currentBet = cc.store.maxBet;
        }else{
          currentBetValue.string= cc.store.currentBet =Math.floor(cc.store.userPoints);
        }
        
      }
    });
  }
});
