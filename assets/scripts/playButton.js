cc.Class({
  extends: cc.Component,

  onLoad() {
    const button = this.node.getComponent(cc.Button);
    button.node.on('click', () => {
      if (cc.store.canPlay() === true && cc.store.playing === false) {
        if(cc.store.userPoints>=cc.store.currentBet){
          cc.store.playing = true;
          const AutoPlayButton = cc.find('Canvas/Game/Machine/UI/playButton');
          AutoPlayButton.active = false;
          const ManuaPlayButton = cc.find('Canvas/Game/Machine/UI/PauseButton');
          ManuaPlayButton.active = true;


        }else{
          let message=cc.find('Canvas/Game/message').getComponent("message");
          message.show(0);
        }
        
      }
    });
  }
});
