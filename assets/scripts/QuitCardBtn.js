cc.Class({
  extends: cc.Component,
  properties: {
  
  },



  onLoad() {

    const cardGame = cc.find('Canvas/Game/Machine/CardGame')
    const gameBg = cc.find('Canvas/Game/Machine/Bg')
    const gamePerformance = cc.find('Canvas/Game/Machine/Performance')
    const gameMenuPanel = cc.find('Canvas/Game/Machine/UpUI/MenuPanel')

    // const scoreValue = cc.find('Canvas/Game/Machine/UI/PointScore/GameScore/Value')

    const button = this.node.getComponent(cc.Button);

    button.node.on('click', () => {

      cc.find('Canvas/Game/Machine/CardGame').getComponent('cardGame').UIReset();

      cardGame.active = false;
      
      gameMenuPanel.active = true;
      gameBg.active = true;
      gamePerformance.active = true;


      // scoreValue.getComponent(cc.Label).string = 0

      cc.store.bonusGameClick = 'none'
      cc.store?.gameServer.GetPI().sendData(3164, 255);
      cc.store.bonusGameWinTime = 0;

    });
  }
});