let PublicSetUp=require('PublicSetUp');


const sound = (function () {
    return function* playVideo(id) {
        console.log('*');
        if(PublicSetUp.sound==0){
            
            cc.audioEngine.playEffect(id, true);

        }


    };

    

})();
export default sound;