import co from './co.cc';
import connectToServer from './connectToServer';
let PublicSetUp=require('PublicSetUp');

cc.Class({
  extends: cc.Component,

  properties: {
    MusicClip: {
      default: null,
      type: cc.AudioClip,
  },

    AudioClip: {
      default: [],
      type: [cc.AudioClip],
  },

  },

  onLoad() {
    // co.enableAutoTick(30);
    //PublicSetUp.audio1 = this.AudioClip[0];
    for (let i = 0; i < this.AudioClip.length; i++) {
      PublicSetUp.audio[this.AudioClip[i].name] = this.AudioClip[i];
  }
    PublicSetUp.MusicClip=this.MusicClip;
    cc.store = {
      type: 0,
      minBet: 0,
      maxBet: 0,
      cardPot:0,
      cardRatio:0,
      cardcnts:0,
      currentBet: 0,
      freeGameCnts: 0,
      FreeTotalPoint: 0,
      Heart:0,
      VideoIdx:0,
      soundEnabled: true,

      gameResult: {},
      gameResultGotStatus: 0,
      isGameResultGot() {
        return cc.store.gameResultGotStatus === 3;
      },

      playing: false,
      auto:false,
      canPlay() {
        return true;
      },

      mainServer: null,
      lobbyServer: null,
      gameServer: null
    };

    // cc.find('Canvas/Game').active = false;
  },

  start() {
    cc.audioEngine.playMusic(this.MusicClip, true);

    cc.assetManager.loadBundle('mp4', (error, bundle) => {
      if (!error) {
        bundle.preloadDir('./', cc.VideoClip);
      }
    });

    cc.find('Canvas/Game').active = false;
    var getUrlString = location.href;
    var url = new URL(getUrlString);  
    if(PublicSetUp.account==""){
      PublicSetUp.account=url.searchParams.get('WebToken');
      connectToServer('213.139.235.73', 6380, url.searchParams.get('WebToken'), PublicSetUp.password,2);
    }else{
      connectToServer('213.139.235.73', 6380, PublicSetUp.account, PublicSetUp.password,0);
    }
    

  },

  update() {
    co.performTick(cc.director._lastUpdate);

  }
});
