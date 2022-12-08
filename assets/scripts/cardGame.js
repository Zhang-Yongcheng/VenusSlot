const Card = (LeftOrRight ,ele) => { return cc.find(`Canvas/Game/Machine/CardGame/UI/${LeftOrRight}Card/${ele}`) }
cc.Class({
  extends: cc.Component,
  onload() {
  },
  UIReset(){
    for (let i = 1; i <= 4; i++) {
      cc.find(`Canvas/Game/Machine/CardGame/UI/chat/${i}`).active = false;
    }
    Card('right', 'correct').active = false;
    Card('right', 'mistake').active = false;
    Card('left', 'correct').active = false;
    Card('left', 'mistake').active = false;

    Card('right', 'CardHeart').active = false;
    Card('right', 'CardSpade').active = false;
    Card('left', 'CardHeart').active = false;
    Card('left', 'CardSpade').active = false;

    Card('right', 'CardBack').active = true;
    Card('left', 'CardBack').active = true;

    cc.find('Canvas/Game/Machine/CardGame/UI/tip').active = false;
    cc.find('Canvas/Game/Machine/CardGame/UI/tipQuit').active = false;
    cc.find('Canvas/Game/Machine/CardGame/UI/tipTitle').active = false;
    cc.find('Canvas/Game/Machine/CardGame/UI/Particle_coin').active = false;
    cc.find('Canvas/Game/Machine/CardGame/UI/bg50').active = false;

    cc.find('Canvas/Game/Machine/Bg').active = false;
    cc.find('Canvas/Game/Machine/Performance').active = false;
    cc.find('Canvas/Game/Machine/UpUI/MenuPanel').active = false;

    cc.find('Canvas/Game/Machine/CardGame').active = true;
  },
  UIOff() {
    cc.find('Canvas/Game/Machine/Bg').active = true;
    cc.find('Canvas/Game/Machine/Performance').active = true;
    cc.find('Canvas/Game/Machine/UpUI/MenuPanel').active = true;

    cc.find('Canvas/Game/Machine/CardGame').active = false;
  },
  UIChat(state) {
    let type =  Math.floor(Math.random()*2);
    for (let i = 1; i < 4; i++) {
      cc.find(`Canvas/Game/Machine/CardGame/UI/chat/${i}`).active = false;
    }
    if (state === "correct") return cc.find(`Canvas/Game/Machine/CardGame/UI/chat/${type + 1}`).active = true;
    cc.find(`Canvas/Game/Machine/CardGame/UI/chat/${type + 3}`).active = true;
  }
});