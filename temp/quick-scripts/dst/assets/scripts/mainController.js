
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/mainController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
    // co.enableAutoTick(30);
    PublicSetUp.audio1 = this.AudioClip[0];
    PublicSetUp.MusicClip = this.MusicClip;
    cc.store = {
      type: 0,
      minBet: 0,
      maxBet: 0,
      currentBet: 0,
      freeGameCnts: 0,
      FreeTotalPoint: 0,
      soundEnabled: true,
      gameResult: {},
      gameResultGotStatus: 0,
      isGameResultGot: function isGameResultGot() {
        return cc.store.gameResultGotStatus === 3;
      },
      playing: false,
      canPlay: function canPlay() {
        return true;
      },
      mainServer: null,
      lobbyServer: null,
      gameServer: null
    }; // cc.find('Canvas/Game').active = false;
  },
  start: function start() {
    cc.audioEngine.playMusic(this.MusicClip, true);
    cc.assetManager.loadBundle('mp4', function (error, bundle) {
      if (!error) {
        bundle.preloadDir('./', cc.VideoClip);
      }
    });
    console.log(PublicSetUp.account);
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWFpbkNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiUHVibGljU2V0VXAiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJNdXNpY0NsaXAiLCJ0eXBlIiwiQXVkaW9DbGlwIiwib25Mb2FkIiwiYXVkaW8xIiwic3RvcmUiLCJtaW5CZXQiLCJtYXhCZXQiLCJjdXJyZW50QmV0IiwiZnJlZUdhbWVDbnRzIiwiRnJlZVRvdGFsUG9pbnQiLCJzb3VuZEVuYWJsZWQiLCJnYW1lUmVzdWx0IiwiZ2FtZVJlc3VsdEdvdFN0YXR1cyIsImlzR2FtZVJlc3VsdEdvdCIsInBsYXlpbmciLCJjYW5QbGF5IiwibWFpblNlcnZlciIsImxvYmJ5U2VydmVyIiwiZ2FtZVNlcnZlciIsInN0YXJ0IiwiYXVkaW9FbmdpbmUiLCJwbGF5TXVzaWMiLCJhc3NldE1hbmFnZXIiLCJsb2FkQnVuZGxlIiwiZXJyb3IiLCJidW5kbGUiLCJwcmVsb2FkRGlyIiwiVmlkZW9DbGlwIiwiY29uc29sZSIsImxvZyIsImFjY291bnQiLCJmaW5kIiwiYWN0aXZlIiwiZ2V0VXJsU3RyaW5nIiwibG9jYXRpb24iLCJocmVmIiwidXJsIiwiVVJMIiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwicGFzc3dvcmQiLCJ1cGRhdGUiLCJjbyIsInBlcmZvcm1UaWNrIiwiZGlyZWN0b3IiLCJfbGFzdFVwZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBLElBQUlBLFdBQVcsR0FBQ0MsT0FBTyxDQUFDLGFBQUQsQ0FBdkI7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBR1BDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxTQUFTLEVBQUU7QUFDVCxpQkFBUyxJQURBO0FBRVRDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZBLEtB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bnRlbnQiOlsiaW1wb3J0IGNvIGZyb20gJy4vY28uY2MnO1xyXG5pbXBvcnQgY29ubmVjdFRvU2VydmVyIGZyb20gJy4vY29ubmVjdFRvU2VydmVyJztcclxubGV0IFB1YmxpY1NldFVwPXJlcXVpcmUoJ1B1YmxpY1NldFVwJyk7XHJcbmNjLkNsYXNzKHtcclxuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIE11c2ljQ2xpcDoge1xyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICB0eXBlOiBjYy5BdWRpb0NsaXAsXHJcbiAgfSxcclxuXHJcbiAgICBBdWRpb0NsaXA6IHtcclxuICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgIHR5cGU6IFtjYy5BdWRpb0NsaXBdLFxyXG4gIH0sXHJcblxyXG4gIH0sXHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIC8vIGNvLmVuYWJsZUF1dG9UaWNrKDMwKTtcclxuICAgIFB1YmxpY1NldFVwLmF1ZGlvMSA9IHRoaXMuQXVkaW9DbGlwWzBdO1xyXG4gICAgUHVibGljU2V0VXAuTXVzaWNDbGlwPXRoaXMuTXVzaWNDbGlwO1xyXG4gICAgY2Muc3RvcmUgPSB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIG1pbkJldDogMCxcclxuICAgICAgbWF4QmV0OiAwLFxyXG4gICAgICBjdXJyZW50QmV0OiAwLFxyXG4gICAgICBmcmVlR2FtZUNudHM6IDAsXHJcbiAgICAgIEZyZWVUb3RhbFBvaW50OiAwLFxyXG4gICAgICBzb3VuZEVuYWJsZWQ6IHRydWUsXHJcblxyXG4gICAgICBnYW1lUmVzdWx0OiB7fSxcclxuICAgICAgZ2FtZVJlc3VsdEdvdFN0YXR1czogMCxcclxuICAgICAgaXNHYW1lUmVzdWx0R290KCkge1xyXG4gICAgICAgIHJldHVybiBjYy5zdG9yZS5nYW1lUmVzdWx0R290U3RhdHVzID09PSAzO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgcGxheWluZzogZmFsc2UsXHJcbiAgICAgIGNhblBsYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBtYWluU2VydmVyOiBudWxsLFxyXG4gICAgICBsb2JieVNlcnZlcjogbnVsbCxcclxuICAgICAgZ2FtZVNlcnZlcjogbnVsbFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjYy5maW5kKCdDYW52YXMvR2FtZScpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gIH0sXHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuTXVzaWNDbGlwLCB0cnVlKTtcclxuXHJcbiAgICBjYy5hc3NldE1hbmFnZXIubG9hZEJ1bmRsZSgnbXA0JywgKGVycm9yLCBidW5kbGUpID0+IHtcclxuICAgICAgaWYgKCFlcnJvcikge1xyXG4gICAgICAgIGJ1bmRsZS5wcmVsb2FkRGlyKCcuLycsIGNjLlZpZGVvQ2xpcCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coUHVibGljU2V0VXAuYWNjb3VudCk7XHJcbiAgICBjYy5maW5kKCdDYW52YXMvR2FtZScpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdmFyIGdldFVybFN0cmluZyA9IGxvY2F0aW9uLmhyZWY7XHJcbiAgICB2YXIgdXJsID0gbmV3IFVSTChnZXRVcmxTdHJpbmcpOyAgXHJcbiAgICBpZihQdWJsaWNTZXRVcC5hY2NvdW50PT1cIlwiKXtcclxuICAgICAgUHVibGljU2V0VXAuYWNjb3VudD11cmwuc2VhcmNoUGFyYW1zLmdldCgnV2ViVG9rZW4nKTtcclxuICAgICAgY29ubmVjdFRvU2VydmVyKCcyMTMuMTM5LjIzNS43MycsIDYzODAsIHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdXZWJUb2tlbicpLCBQdWJsaWNTZXRVcC5wYXNzd29yZCwyKTtcclxuICAgIH1lbHNle1xyXG4gICAgICBjb25uZWN0VG9TZXJ2ZXIoJzIxMy4xMzkuMjM1LjczJywgNjM4MCwgUHVibGljU2V0VXAuYWNjb3VudCwgUHVibGljU2V0VXAucGFzc3dvcmQsMCk7XHJcbiAgICB9XHJcbiAgICBcclxuICB9LFxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICBjby5wZXJmb3JtVGljayhjYy5kaXJlY3Rvci5fbGFzdFVwZGF0ZSk7XHJcblxyXG4gIH1cclxufSk7XHJcbiJdfQ==