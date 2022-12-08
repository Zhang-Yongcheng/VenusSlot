

cc.Class({
  extends: cc.Component,
  properties: {
  
  },

  onLoad() {
    const Card = (LeftOrRight ,ele) => { return cc.find(`Canvas/Game/Machine/CardGame/UI/${LeftOrRight}Card/${ele}`) }
    const button = this.node.getComponent(cc.Button);
    
    button.node.on('click', () => {
      // console.log("left2")
      cc.store.bonusGameClick = 'left'
      let math = Math.floor(Math.random()*2) + 1;
      cc.store?.gameServer.GetPI().sendData(3164, math);
      Card('left', 'CardBack').active = false;
      Card('right', 'CardBack').active = false
    });
  }
});