
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
      gameResult: {},
      gameResultGotStatus: 0,
      isGameResultGot: function isGameResultGot() {
        return cc.store.gameResultGotStatus === 3;
      },
      playing: false,
      auto: false,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWFpbkNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiUHVibGljU2V0VXAiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJNdXNpY0NsaXAiLCJ0eXBlIiwiQXVkaW9DbGlwIiwib25Mb2FkIiwiaSIsImxlbmd0aCIsImF1ZGlvIiwibmFtZSIsInN0b3JlIiwibWluQmV0IiwibWF4QmV0IiwiY2FyZFBvdCIsImNhcmRSYXRpbyIsImNhcmRjbnRzIiwiY3VycmVudEJldCIsImZyZWVHYW1lQ250cyIsIkZyZWVUb3RhbFBvaW50IiwiSGVhcnQiLCJWaWRlb0lkeCIsInNvdW5kRW5hYmxlZCIsImdhbWVSZXN1bHQiLCJnYW1lUmVzdWx0R290U3RhdHVzIiwiaXNHYW1lUmVzdWx0R290IiwicGxheWluZyIsImF1dG8iLCJjYW5QbGF5IiwibWFpblNlcnZlciIsImxvYmJ5U2VydmVyIiwiZ2FtZVNlcnZlciIsInN0YXJ0IiwiYXVkaW9FbmdpbmUiLCJwbGF5TXVzaWMiLCJhc3NldE1hbmFnZXIiLCJsb2FkQnVuZGxlIiwiZXJyb3IiLCJidW5kbGUiLCJwcmVsb2FkRGlyIiwiVmlkZW9DbGlwIiwiZmluZCIsImFjdGl2ZSIsImdldFVybFN0cmluZyIsImxvY2F0aW9uIiwiaHJlZiIsInVybCIsIlVSTCIsImFjY291bnQiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJwYXNzd29yZCIsInVwZGF0ZSIsImNvIiwicGVyZm9ybVRpY2siLCJkaXJlY3RvciIsIl9sYXN0VXBkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0EsSUFBSUEsV0FBVyxHQUFDQyxPQUFPLENBQUMsYUFBRCxDQUF2Qjs7QUFFQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDUCxhQUFTRCxFQUFFLENBQUNFLFNBREw7QUFHUEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLFNBQVMs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QUFKLENBQWlCQyxHQUFqQixDQUFxQixVQUFyQixDQUF4QyxFQUEwRXJELFdBQVcsQ0FBQ3NELFFBQXRGLEVBQStGLENBQS9GO0FBQ0QsS0FIRCxNQUdLO0FBQ0gsdUNBQWdCLGdCQUFoQixFQUFrQyxJQUFsQyxFQUF3Q3RELFdBQVcsQ0FBQ21ELE9BQXBELEVBQTZEbkQsV0FBVyxDQUFDc0QsUUFBekUsRUFBa0YsQ0FBbEY7QUFDRDtBQUdGLEdBNUVNO0FBOEVQQyxFQUFBQSxNQTlFTyxvQkE4RUU7QUFDUEMsbUJBQUdDLFdBQUgsQ0FBZXZELEVBQUUsQ0FBQ3dELFFBQUgsQ0FBWUMsV0FBM0I7QUFFRDtBQWpGTSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY28gZnJvbSAnLi9jby5jYyc7XHJcbmltcG9ydCBjb25uZWN0VG9TZXJ2ZXIgZnJvbSAnLi9jb25uZWN0VG9TZXJ2ZXInO1xyXG5sZXQgUHVibGljU2V0VXA9cmVxdWlyZSgnUHVibGljU2V0VXAnKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIE11c2ljQ2xpcDoge1xyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICB0eXBlOiBjYy5BdWRpb0NsaXAsXHJcbiAgfSxcclxuXHJcbiAgICBBdWRpb0NsaXA6IHtcclxuICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgIHR5cGU6IFtjYy5BdWRpb0NsaXBdLFxyXG4gIH0sXHJcblxyXG4gIH0sXHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIC8vIGNvLmVuYWJsZUF1dG9UaWNrKDMwKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5BdWRpb0NsaXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgUHVibGljU2V0VXAuYXVkaW9bdGhpcy5BdWRpb0NsaXBbaV0ubmFtZV0gPSB0aGlzLkF1ZGlvQ2xpcFtpXTtcclxuICB9XHJcbiAgICBQdWJsaWNTZXRVcC5NdXNpY0NsaXA9dGhpcy5NdXNpY0NsaXA7XHJcbiAgICBjYy5zdG9yZSA9IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgbWluQmV0OiAwLFxyXG4gICAgICBtYXhCZXQ6IDAsXHJcbiAgICAgIGNhcmRQb3Q6MCxcclxuICAgICAgY2FyZFJhdGlvOjAsXHJcbiAgICAgIGNhcmRjbnRzOjAsXHJcbiAgICAgIGN1cnJlbnRCZXQ6IDAsXHJcbiAgICAgIGZyZWVHYW1lQ250czogMCxcclxuICAgICAgRnJlZVRvdGFsUG9pbnQ6IDAsXHJcbiAgICAgIEhlYXJ0OjAsXHJcbiAgICAgIFZpZGVvSWR4OjAsXHJcbiAgICAgIHNvdW5kRW5hYmxlZDogdHJ1ZSxcclxuXHJcbiAgICAgIGdhbWVSZXN1bHQ6IHt9LFxyXG4gICAgICBnYW1lUmVzdWx0R290U3RhdHVzOiAwLFxyXG4gICAgICBpc0dhbWVSZXN1bHRHb3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIGNjLnN0b3JlLmdhbWVSZXN1bHRHb3RTdGF0dXMgPT09IDM7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBwbGF5aW5nOiBmYWxzZSxcclxuICAgICAgYXV0bzpmYWxzZSxcclxuICAgICAgY2FuUGxheSgpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIG1haW5TZXJ2ZXI6IG51bGwsXHJcbiAgICAgIGxvYmJ5U2VydmVyOiBudWxsLFxyXG4gICAgICBnYW1lU2VydmVyOiBudWxsXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGNjLmZpbmQoJ0NhbnZhcy9HYW1lJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgfSxcclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5NdXNpY0NsaXAsIHRydWUpO1xyXG5cclxuICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKCdtcDQnLCAoZXJyb3IsIGJ1bmRsZSkgPT4ge1xyXG4gICAgICBpZiAoIWVycm9yKSB7XHJcbiAgICAgICAgYnVuZGxlLnByZWxvYWREaXIoJy4vJywgY2MuVmlkZW9DbGlwKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY2MuZmluZCgnQ2FudmFzL0dhbWUnKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHZhciBnZXRVcmxTdHJpbmcgPSBsb2NhdGlvbi5ocmVmO1xyXG4gICAgdmFyIHVybCA9IG5ldyBVUkwoZ2V0VXJsU3RyaW5nKTsgIFxyXG4gICAgaWYoUHVibGljU2V0VXAuYWNjb3VudD09XCJcIil7XHJcbiAgICAgIFB1YmxpY1NldFVwLmFjY291bnQ9dXJsLnNlYXJjaFBhcmFtcy5nZXQoJ1dlYlRva2VuJyk7XHJcbiAgICAgIGNvbm5lY3RUb1NlcnZlcignMjEzLjEzOS4yMzUuNzMnLCA2MzgwLCB1cmwuc2VhcmNoUGFyYW1zLmdldCgnV2ViVG9rZW4nKSwgUHVibGljU2V0VXAucGFzc3dvcmQsMik7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgY29ubmVjdFRvU2VydmVyKCcyMTMuMTM5LjIzNS43MycsIDYzODAsIFB1YmxpY1NldFVwLmFjY291bnQsIFB1YmxpY1NldFVwLnBhc3N3b3JkLDApO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGNvLnBlcmZvcm1UaWNrKGNjLmRpcmVjdG9yLl9sYXN0VXBkYXRlKTtcclxuXHJcbiAgfVxyXG59KTtcclxuIl19