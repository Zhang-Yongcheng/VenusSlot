import co from './co.cc';
const Card = (LeftOrRight ,ele) => { return cc.find(`Canvas/Game/Machine/CardGame/UI/${LeftOrRight}Card/${ele}`) }
const CardMaskAnimate = (LeftOrRight ,mask) => {  // 左右贏或輸
  cc.find('Canvas/Game/Machine/CardGame').getComponent('cardGame').UIChat(mask)
  cc.find(`Canvas/Game/Machine/CardGame/UI/${LeftOrRight}Card/${mask}/bg`).getComponent(cc.Animation).active=true
  cc.find(`Canvas/Game/Machine/CardGame/UI/${LeftOrRight}Card/${mask}/bg`).getComponent(cc.Animation).play()
  Card(LeftOrRight, mask).active = true;
}
export default function winGame (click, isWin, question, point) { 

  setTimeout(() => {
    cc.find('Canvas/Game/Machine/CardGame/UI/bg50').active = true
    if (cc.store.bonusGameWinTime === 2 && isWin === 1) { //至少玩 cc.store.bonusGameWinTime + 1局
      cc.find('Canvas/Game/Machine/CardGame/UI/tipQuit').active = true;
      cc.find('Canvas/Game/Machine/CardGame/UI/tipTitle').active = true;
      cc.find('Canvas/Game/Machine/CardGame/UI/tipTitle/Value').getComponent(cc.Label).string
        = cc.find('Canvas/Game/Machine/CardGame/UI/tipTitle/ValueShadow').getComponent(cc.Label).string
        = "恭喜完成闖關";
      cc.find('Canvas/Game/Machine/CardGame/UI/tipTitle/tipPoint').getComponent(cc.Label).string = `總計 ${point} 得分`

      // 判斷輸贏的TipUI
    } else if (isWin === 1) { 
      cc.find('Canvas/Game/Machine/CardGame/UI/tip').active = true;
      cc.find('Canvas/Game/Machine/CardGame/UI/tipTitle').active = true;
      cc.find('Canvas/Game/Machine/CardGame/UI/tipTitle/Value').getComponent(cc.Label).string
        = cc.find('Canvas/Game/Machine/CardGame/UI/tipTitle/ValueShadow').getComponent(cc.Label).string
        = "是否繼續?";
      cc.find('Canvas/Game/Machine/CardGame/UI/tipTitle/tipPoint').getComponent(cc.Label).string = `總計 ${point} 得分`

    } else if (isWin === 0 ) {
      cc.find('Canvas/Game/Machine/CardGame/UI/tipQuit').active = true;
      cc.find('Canvas/Game/Machine/CardGame/UI/tipTitle').active = true;
      cc.find('Canvas/Game/Machine/CardGame/UI/tipTitle/Value').getComponent(cc.Label).string
        = cc.find('Canvas/Game/Machine/CardGame/UI/tipTitle/ValueShadow').getComponent(cc.Label).string
        = "下次再努力";
      cc.find('Canvas/Game/Machine/CardGame/UI/tipTitle/tipPoint').getComponent(cc.Label).string = '';
    }
  },1300)

  let type = (click === 'left' && isWin === 0 && question === 1) ? 1
  : (click === 'left' && isWin === 0 && question === 2) ? 2
  : (click === 'left' && isWin === 1 && question === 1) ? 3 
  : (click === 'left' && isWin === 1 && question === 2) ? 4
  : (click === 'right' && isWin === 0 && question === 1) ? 5
  : (click === 'right' && isWin === 0 && question === 2) ? 6
  : (click === 'right' && isWin === 1 && question === 1) ? 7
  : (click === 'right' && isWin === 1 && question === 2) ? 8 
  : click === 'none' ? 9
  : 10

  switch (type) {
    case 1:  // 左 輸 黑桃
      CardMaskAnimate('left', 'mistake')

      Card('left', 'CardSpade').active = true;
      Card('right', 'CardHeart').active = true;
    break;
    case 2: // 左 輸 紅心
      CardMaskAnimate('left', 'mistake')

      Card('left', 'CardHeart').active = true;
      Card('right', 'CardSpade').active = true;
    break;
    case 3: // 左 贏 黑桃
      CardMaskAnimate('left', 'correct')
      cc.find('Canvas/Game/Machine/CardGame/UI/Particle_coin').active=true;

      Card('left', 'CardHeart').active = true;
      Card('right', 'CardSpade').active = true;
    break;
    case 4: // 左 贏 紅心
      CardMaskAnimate('left', 'correct')
      cc.find('Canvas/Game/Machine/CardGame/UI/Particle_coin').active=true;

      Card('left', 'CardSpade').active = true;
      Card('right', 'CardHeart').active = true;
    break;
    case 5: // 右 輸 黑桃
      CardMaskAnimate('right', 'mistake')

      Card('left', 'CardHeart').active = true;
      Card('right', 'CardSpade').active = true;
    break;
    case 6: // 右 輸 紅心
      CardMaskAnimate('right', 'mistake')

      Card('left', 'CardSpade').active = true;
      Card('right', 'CardHeart').active = true;
    break;
    case 7: // 右 贏 紅心
      CardMaskAnimate('right', 'correct')
      cc.find('Canvas/Game/Machine/CardGame/UI/Particle_coin').active=true;

      Card('left', 'CardSpade').active = true;
      Card('right', 'CardHeart').active = true;
    break;
    case 8: // 右 贏 黑桃
      CardMaskAnimate('right', 'correct')
      cc.find('Canvas/Game/Machine/CardGame/UI/Particle_coin').active=true;

      Card('left', 'CardHeart').active = true;
      Card('right', 'CardSpade').active = true;
    break; 
    case 9: // 退出
      cc.store?.gameServer.GetPI().sendData(3161);
    break;
  }
}