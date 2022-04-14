let PublicSetUp=require('PublicSetUp');
cc.Class({
    extends: cc.Component,
    properties: {
    
    },
  
    onLoad() {
        const button = this.node.getComponent(cc.Button);
  
      button.node.on('click', () => {
        cc.store.auto=true;
        console.log(cc.store.auto);
        const AutoPlayButton = cc.find('Canvas/Game/Machine/UI/AutoPlayButton');
        AutoPlayButton.active = true;
        const ManuaPlayButton = cc.find('Canvas/Game/Machine/UI/ManuaPlayButton');
        ManuaPlayButton.active = false;
     
      });
    }
  });
  