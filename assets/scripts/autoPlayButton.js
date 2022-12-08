let PublicSetUp=require('PublicSetUp');
cc.Class({
  extends: cc.Component,
  properties: {


  },

  onLoad() {
    const button = this.node.getComponent(cc.Button);


    button.node.on('click', () => {
      cc.store.auto = false;
      console.log(cc.store.auto);
      const AutoPlayButton = cc.find('Canvas/Game/Machine/UpUI/MenuPanel/ButtonPanel/AutoPlayButton');
      AutoPlayButton.active = false;
      const ManuaPlayButton = cc.find('Canvas/Game/Machine/UpUI/MenuPanel/ButtonPanel/ManuaPlayButton');
      ManuaPlayButton.active = true;

      
    });
  }
});
