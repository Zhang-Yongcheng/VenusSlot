//總次數，剩餘次數,狀態  0:正常 1:剛中獎，2:結束
  cc.Class({
    extends: cc.Component,
   
    onLoad() {
      const anim = cc.find('Canvas/Game/FreeSpin/FreeSpins').getComponent(cc.Animation);
      anim.on('finished', () => {
        this.UIShow();
        anim.node.active=false;

      });
    },

    play(){
        const anim = cc.find('Canvas/Game/FreeSpin/FreeSpins').getComponent(cc.Animation);
        anim.node.active=true;
        anim.play();
    },
    UIShow(){
        // cc.find('Canvas/Game/Machine/Bg/3').active=true;
        cc.find('Canvas/Game/Machine/UI/FreeSpinsPanel').active=true;
        cc.find('Canvas/Game/Machine/UI/PointScore').active=false;
        cc.find('Canvas/Game/Machine/UpUI/MenuPanel/BetPanel').active=false;
        cc.find('Canvas/Game/Machine/UpUI/MenuPanel/ButtonPanel').active=false;
        cc.find('Canvas/Game/Machine/UpUI/MenuPanel/ButtonPanel/MaxBetButton').active=false;
        cc.find('Canvas/Game/Machine/UpUI/MenuPanel/ButtonPanel/AutoPlayButton').active=false;
        cc.find('Canvas/Game/Machine/UpUI/MenuPanel/ButtonPanel/ManuaPlayButton').active=false;
    },
    UIOff(){
        // cc.find('Canvas/Game/Machine/Bg/3').active=false;
        cc.find('Canvas/Game/Machine/UI/FreeSpinsPanel').active=false;
        cc.find('Canvas/Game/Machine/UI/PointScore').active=true;
        cc.find('Canvas/Game/Machine/UpUI/MenuPanel/BetPanel').active=true;
        cc.find('Canvas/Game/Machine/UpUI/MenuPanel/ButtonPanel').active=true;
        cc.find('Canvas/Game/Machine/UpUI/MenuPanel/ButtonPanel/MaxBetButton').active=true;
        cc.find('Canvas/Game/Machine/UpUI/MenuPanel/ButtonPanel/AutoPlayButton').active=true;
        cc.find('Canvas/Game/Machine/UpUI/MenuPanel/ButtonPanel/ManuaPlayButton').active=true;
    }
  });