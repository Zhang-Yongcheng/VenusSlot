// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
let PublicSetUp=require('PublicSetUp');
let card=[];

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        card[0] = cc.find("Canvas/Game/Card/cardback/card");
    },

    show(){
        if(PublicSetUp.sound==1){
            
            cc.audioEngine.playEffect(PublicSetUp.audio["0012"], false);
          }
        card[0].active=true
        cc.tween(card[0])
        .to(0,{scale:0.5,position:cc.v2(0,0)})
        .to(1,{scale:4,position:cc.v2(481,-186)})
        .delay(2)
        .call(() => { card[0].active=false })
        .start()
    }
    // update (dt) {},
});
