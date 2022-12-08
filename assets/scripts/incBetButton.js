
let isTouch;
let touchTime;
cc.Class({
  extends: cc.Component,

  onLoad() {
    const button = this.node.getComponent(cc.Button);
    button.node.on('click', () => {
      const currentBetValue = cc.find('Canvas/Game/Machine/UpUI/MenuPanel/BetPanel/Value').getComponent(cc.Label);
      const currentBet = parseFloat(currentBetValue.string);
      if(currentBet>cc.store.maxBet){
        currentBetValue.string=cc.store.currentBet=cc.store.maxBet;
      }
      if (currentBet >= cc.store.minBet && currentBet < cc.store.maxBet) {
        if(cc.store.userPoints>=currentBet + 10){
          currentBetValue.string = cc.store.currentBet = currentBet + 10;
        }else{
          let message=cc.find('Canvas/Game/message').getComponent("message");
          message.show(0);
        }
        
        // if(currentBet<=0.9){
        //   currentBetValue.string = cc.store.currentBet =parseFloat((currentBet + 0.1).toPrecision(12)) ;
        // }else if(currentBet<=9){
        //   currentBetValue.string = cc.store.currentBet = currentBet + 1;
        // }else{
        //   currentBetValue.string = cc.store.currentBet = currentBet + 10;
        // }
        
      }
    });

  isTouch=false
  touchTime=null;
  button.node.on(cc.Node.EventType.TOUCH_START,this.touchStart,this);

  button.node.on(cc.Node.EventType.TOUCH_END,this.touchEnd,this);
  },
  touchStart(){
    isTouch=true;
    touchTime=new Date();
  },

  touchHold(){
    if(isTouch && touchTime!=null){
      let touchHoldTime=new Date();
      let millisecons=touchHoldTime.getTime()-touchTime.getTime();
      if(millisecons>300){
        isTouch=true;
        const currentBetValue = cc.find('Canvas/Game/Machine/UpUI/MenuPanel/BetPanel/Value').getComponent(cc.Label);
        const currentBet = parseFloat(currentBetValue.string);
        if (currentBet >= cc.store.minBet && currentBet < cc.store.maxBet) {
          if(cc.store.userPoints>=currentBet + 10){
            currentBetValue.string = cc.store.currentBet = currentBet + 10;
          }else{
            let message=cc.find('Canvas/Game/message').getComponent("message");
            message.show(0);
          }
          
 
          
        }
      }
    }
  },

  touchEnd(){
    isTouch=false;
    touchTime=null;
  },

  update() {
 
   if(isTouch){
     this.touchHold();
   }

  }

});
