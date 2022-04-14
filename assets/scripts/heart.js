// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
let heartcnt=[];
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
        for(let i=0;i<5;i++){
            heartcnt[i]=cc.find(`Canvas/Game/heartPanel/${i + 1}`);
            
        }
        this.closeHeart();
    },

    show(cnt){
        for(let i=0;i<5;i++){
            heartcnt[i].active=false;
        }
        for(let i=0;i<cnt;i++){
            heartcnt[i].active=true;
        }
    },
    closeHeart(){
        for(let i=0;i<5;i++){
            heartcnt[i].active=false;
        }
    }
    // update (dt) {},
});
