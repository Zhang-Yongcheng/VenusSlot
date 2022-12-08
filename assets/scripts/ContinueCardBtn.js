cc.Class({
  extends: cc.Component,
  properties: {
  
  },



  onLoad() {

    const Card = (LeftOrRight ,ele) => { return cc.find(`Canvas/Game/Machine/CardGame/UI/${LeftOrRight}Card/${ele}`) }

    const button = this.node.getComponent(cc.Button);
    button.node.on('click', () => {

      cc.store.bonusGameWinTime += 1;
      console.log(cc.store.bonusGameWinTime)
      cc.store.bonusGameQuestion = Math.floor(Math.random()*2) + 1;

      cc.find('Canvas/Game/Machine/CardGame/UI/cardQuestion')
        .getComponent(cc.Label).string = (cc.store.bonusGameQuestion === 1) ? '請選出 紅心' : '請選出 黑桃'

      cc.find('Canvas/Game/Machine/CardGame').getComponent('cardGame').UIReset();

    });
  }
});