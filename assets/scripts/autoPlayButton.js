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
      const AutoPlayButton = cc.find('Canvas/Game/Machine/UI/AutoPlayButton');
      AutoPlayButton.active = false;
      AutoPlayButton.getComponent(cc.Button).interactable = false;
      const ManuaPlayButton = cc.find('Canvas/Game/Machine/UI/ManuaPlayButton');
      ManuaPlayButton.active = true;
      ManuaPlayButton.getComponent(cc.Button).interactable = true;

      
    });
  }
});
