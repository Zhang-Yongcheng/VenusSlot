export default function requestTableInfo() {
  // bonusGame
  if (cc.store.BonusGame == 1) {
    
    cc.store.playing = false

    cc.store.bonusGameQuestion = Math.floor(Math.random()*2) + 1;
    cc.find('Canvas/Game/Machine/CardGame/UI/cardQuestion').getComponent(cc.Label).string = (cc.store.bonusGameQuestion === 1) ? '請選出 紅桃' : '請選出 黑桃'
    
    cc.find('Canvas/Game/Machine/CardGame').getComponent('cardGame').UIReset();
    return

  } else {

    cc.store?.gameServer.GetPI().sendData(3161);

  }
}
