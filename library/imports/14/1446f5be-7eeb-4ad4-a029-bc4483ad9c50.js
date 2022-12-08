"use strict";
cc._RF.push(module, '1446fW+futK1KApvESDrZxQ', 'mainController');
// scripts/mainController.js

"use strict";

var _co = _interopRequireDefault(require("./co.cc"));

var _connectToServer = _interopRequireDefault(require("./connectToServer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PublicSetUp = require('PublicSetUp');

cc.Class({
  "extends": cc.Component,
  properties: {
    MusicClip: {
      "default": null,
      type: cc.AudioClip
    },
    AudioClip: {
      "default": [],
      type: [cc.AudioClip]
    }
  },
  onLoad: function onLoad() {
    this.callback = function () {
      if (PublicSetUp.timeout > 20) {
        this.unschedule(this.callback);
        var message = cc.find('Canvas/Game/message').getComponent("message");
        message.show(1);
      }

      PublicSetUp.timeout++;
    };

    this.schedule(this.callback, 1); // co.enableAutoTick(30);

    for (var i = 0; i < this.AudioClip.length; i++) {
      PublicSetUp.audio[this.AudioClip[i].name] = this.AudioClip[i];
    }

    PublicSetUp.MusicClip = this.MusicClip;
    cc.store = {
      type: 0,
      minBet: 0,
      maxBet: 0,
      cardPot: 0,
      cardRatio: 0,
      cardcnts: 0,
      currentBet: 0,
      freeGameCnts: 0,
      FreeTotalPoint: 0,
      Heart: 0,
      VideoIdx: 0,
      soundEnabled: true,
      BonusGame: 0,
      bonusGameQuestion: 0,
      bonusGameClick: 'right',
      bonusGameWinTime: 0,
      gameResult: {},
      gameResultGotStatus: 0,
      isGameResultGot: function isGameResultGot() {
        return cc.store.gameResultGotStatus === 3;
      },
      playing: false,
      keepAutoState: false,
      auto: false,
      test: 0,
      canPlay: function canPlay() {
        return true;
      },
      mainServer: null,
      lobbyServer: null,
      gameServer: null
    }; // cc.find('Canvas/Game').active = false;
  },
  start: function start() {
    document.oncontextmenu = new Function("return false");
    cc.audioEngine.playMusic(this.MusicClip, true);
    cc.assetManager.loadBundle('mp4', function (error, bundle) {
      if (!error) {
        bundle.preloadDir('./', cc.VideoClip);
      }
    });
    cc.find('Canvas/Game').active = false;
    var getUrlString = location.href;
    var url = new URL(getUrlString);

    if (PublicSetUp.account == "") {
      PublicSetUp.account = url.searchParams.get('WebToken');
      (0, _connectToServer["default"])('213.139.235.73', 6380, url.searchParams.get('WebToken'), PublicSetUp.password, 2);
    } else {
      (0, _connectToServer["default"])('213.139.235.73', 6380, PublicSetUp.account, PublicSetUp.password, 0);
    }
  },
  update: function update() {
    _co["default"].performTick(cc.director._lastUpdate);
  }
});

cc._RF.pop();