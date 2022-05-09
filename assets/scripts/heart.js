let PublicSetUp=require('PublicSetUp');


let heartcnt=[];
let pos=[[570,292],[570,196],[570,98],[570,0],[570,-103]];
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
        if(cnt!=0 && heartcnt[cnt].active==false){
            if(PublicSetUp.sound==1){
            
                cc.audioEngine.playEffect(PublicSetUp.audio["0012"], false);
              }
            heartcnt[cnt].active=true;
            cc.tween(heartcnt[cnt])
            .to(0,{scale:0.5,position:cc.v2(-117,-23)})
            .to(1,{scale:1,position:cc.v2(pos[cnt][0],pos[cnt][1])})
            .start()

            
        }
        if(cnt==0){
            this.closeHeart();
        }
        // for(let i=0;i<5;i++){
        //     heartcnt[i].active=false;
        // }
        // for(let i=0;i<cnt;i++){
        //     heartcnt[i].active=true;
        // }

    },
    closeHeart(){
        for(let i=0;i<5;i++){
            heartcnt[i].active=false;
            heartcnt[i].setPosition(-177,-23,0);
        }
    }
    // update (dt) {},
});
