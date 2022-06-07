import co from './co.cc';
let PublicSetUp=require('PublicSetUp');
const playVideo = (function () {
  let videoPlayerNode = null;
  let videoBundle = null;
  let playing = false;

  function onDone(player) {
    player.enabled = false;
    player.clip = null;
    playing = false;
    cc.find('Canvas/Game/Machine/VideoFrame').active=false;
    cc.find('Canvas/Game/Machine/Particle_coin').active=false;
  }

  return function* playVideo(name,index) {
    if (videoPlayerNode === null) {
      videoPlayerNode = cc.find('Canvas/Game/Machine/Performance/VideoPlayer');
      if (videoPlayerNode === null) {
        return;
      }

      videoPlayerNode.on('ready-to-play', player => {
        player.enabled = true;
        player.play();
        cc.audioEngine.playEffect(PublicSetUp.audio["0014"], false);
        if (index === 0 || index === 6 || index === 7){
          if(PublicSetUp.sound==1){
            
            cc.audioEngine.playEffect(PublicSetUp.audio["0021"], false);
            
          }
          cc.find('Canvas/Game/Machine/Particle_coin').active=true;
        }
        if(name!='JACKPOT'){
          cc.find('Canvas/Game/Machine/VideoFrame').active=true;
        }else{
          if(PublicSetUp.sound==1){
            
            cc.audioEngine.playEffect(PublicSetUp.audio["0021"], false);
            
          }
        }
        
      });

      videoPlayerNode.on('error', onDone);

      videoPlayerNode.on('completed', onDone);
    }

    if (videoBundle == null) {
      videoBundle = cc.assetManager.getBundle('mp4');
      if (videoBundle === null) {
        return;
      }
    }

    if (name === 'random') {
      const list = ['LINE_MOVIE_1643105946757', 'LINE_MOVIE_1643288149416','LINE_MOVIE_1643288159743'];
      name = list[Math.floor(Math.random() * list.length)];
    }else if(name === 'index'){

      name = String(index);
    }else if(name=='card'){
      name = 'JACKPOT';
    }

    let clip = videoBundle.get(name, cc.VideoClip);
    if (clip == null) {
      let done = false;
      videoBundle.load(name, cc.VideoClip, (error, asset) => {
        done = true;
        if (!error) {
          clip = asset;
          // clip.addRef();
        }
      });

      yield co.waitUntil(() => done === true);
    }

    if (clip != null) {
      videoPlayerNode.getComponent(cc.VideoPlayer).clip = clip;
      playing = true;
      yield co.waitUntil(() => playing === false);
    }
  };
})();

export default playVideo;
