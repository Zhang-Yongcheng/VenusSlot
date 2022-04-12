import co from './co.cc';
let PublicSetUp=require('PublicSetUp');
import sound from './sound';
const playVideo = (function () {
  let videoPlayerNode = null;
  let videoBundle = null;
  let playing = false;

  function onDone(player) {
    player.enabled = false;
    player.clip = null;
    playing = false;
  }

  return function* playVideo(name) {
    if (videoPlayerNode === null) {
      videoPlayerNode = cc.find('Canvas/Game/Machine/Performance/VideoPlayer');
      if (videoPlayerNode === null) {
        return;
      }

      videoPlayerNode.on('ready-to-play', player => {
        player.enabled = true;
        player.play();
        if(PublicSetUp.sound==1){
            
          cc.audioEngine.playEffect(PublicSetUp.audio1, true);
        }
        
        cc.find('Canvas/Game/Machine/Particle_coin').active=true;
        cc.find('Canvas/Game/Machine/VideoFrame').active=true;
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
      const list = ['LINE_MOVIE_1643105941778', 'LINE_MOVIE_1643105948791'];
      name = list[Math.floor(Math.random() * list.length)];
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
