// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
let txt=[
    '餘額不足'
]
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

    onLoad () {
        const button = cc.find('Canvas/Game/message/OK').getComponent(cc.Button);
        button.node.on('click', () => {
           cc.find('Canvas/Game/message/OK').active=false;
           cc.find('Canvas/Game/message/bg').active=false;
           cc.find('Canvas/Game/message/txt').active=false;

          });

    },

    start () {


    },
    
    show(txtNum){
        cc.find('Canvas/Game/message/OK').active=true;
        cc.find('Canvas/Game/message/bg').active=true;
        cc.find('Canvas/Game/message/txt').active=true;
        const lab=cc.find('Canvas/Game/message/txt').getComponent(cc.Label);
        lab.string=txt[0];
    }

    // update (dt) {},
});
