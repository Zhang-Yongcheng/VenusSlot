
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWFpbkNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiUHVibGljU2V0VXAiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJNdXNpY0NsaXAiLCJ0eXBlIiwiQXVkaW9DbGlwIiwib25Mb2FkIiwiYXVkaW8xIiwic3RvcmUiLCJtaW5CZXQiLCJtYXhCZXQiLCJjdXJyZW50QmV0IiwiZnJlZUdhbWVDbnRzIiwiRnJlZVRvdGFsUG9pbnQiLCJIZWFydCIsIlZpZGVvSWR4Iiwic291bmRFbmFibGVkIiwiZ2FtZVJlc3VsdCIsImdhbWVSZXN1bHRHb3RTdGF0dXMiLCJpc0dhbWVSZXN1bHRHb3QiLCJwbGF5aW5nIiwiYXV0byIsImNhblBsYXkiLCJtYWluU2VydmVyIiwibG9iYnlTZXJ2ZXIiLCJnYW1lU2VydmVyIiwic3RhcnQiLCJhdWRpb0VuZ2luZSIsInBsYXlNdXNpYyIsImFzc2V0TWFuYWdlciIsImxvYWRCdW5kbGUiLCJlcnJvciIsImJ1bmRsZSIsInByZWxvYWREaXIiLCJWaWRlb0NsaXAiLCJmaW5kIiwiYWN0aXZlIiwiZ2V0VXJsU3RyaW5nIiwibG9jYXRpb24iLCJocmVmIiwidXJsIiwiVVJMIiwiYWNjb3VudCIsInNlYXJjaFBhcmFtcyIsImdldCIsInBhc3N3b3JkIiwidXBkYXRlIiwiY28iLCJwZXJmb3JtVGljayIsImRpcmVjdG9yIiwiX2xhc3RVcGRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQSxJQUFJQSxXQUFXLEdBQUNDLE9BQU8sQ0FBQyxhQUFELENBQXZCOztBQUVBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNQLGFBQVNELEVBQUUsQ0FBQ0UsU0FETDtBQUdQQyxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsU0FBUyxFQUFFO0FBQ1QsaUJBQVMsSUFEQTtBQUVUQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FB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RUQ7QUE1RU0sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvIGZyb20gJy4vY28uY2MnO1xyXG5pbXBvcnQgY29ubmVjdFRvU2VydmVyIGZyb20gJy4vY29ubmVjdFRvU2VydmVyJztcclxubGV0IFB1YmxpY1NldFVwPXJlcXVpcmUoJ1B1YmxpY1NldFVwJyk7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICBNdXNpY0NsaXA6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuQXVkaW9DbGlwLFxyXG4gIH0sXHJcblxyXG4gICAgQXVkaW9DbGlwOiB7XHJcbiAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICB0eXBlOiBbY2MuQXVkaW9DbGlwXSxcclxuICB9LFxyXG5cclxuICB9LFxyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICAvLyBjby5lbmFibGVBdXRvVGljaygzMCk7XHJcbiAgICBQdWJsaWNTZXRVcC5hdWRpbzEgPSB0aGlzLkF1ZGlvQ2xpcFswXTtcclxuICAgIFB1YmxpY1NldFVwLk11c2ljQ2xpcD10aGlzLk11c2ljQ2xpcDtcclxuICAgIGNjLnN0b3JlID0ge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICBtaW5CZXQ6IDAsXHJcbiAgICAgIG1heEJldDogMCxcclxuICAgICAgY3VycmVudEJldDogMCxcclxuICAgICAgZnJlZUdhbWVDbnRzOiAwLFxyXG4gICAgICBGcmVlVG90YWxQb2ludDogMCxcclxuICAgICAgSGVhcnQ6MCxcclxuICAgICAgVmlkZW9JZHg6MCxcclxuICAgICAgc291bmRFbmFibGVkOiB0cnVlLFxyXG5cclxuICAgICAgZ2FtZVJlc3VsdDoge30sXHJcbiAgICAgIGdhbWVSZXN1bHRHb3RTdGF0dXM6IDAsXHJcbiAgICAgIGlzR2FtZVJlc3VsdEdvdCgpIHtcclxuICAgICAgICByZXR1cm4gY2Muc3RvcmUuZ2FtZVJlc3VsdEdvdFN0YXR1cyA9PT0gMztcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHBsYXlpbmc6IGZhbHNlLFxyXG4gICAgICBhdXRvOmZhbHNlLFxyXG4gICAgICBjYW5QbGF5KCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgbWFpblNlcnZlcjogbnVsbCxcclxuICAgICAgbG9iYnlTZXJ2ZXI6IG51bGwsXHJcbiAgICAgIGdhbWVTZXJ2ZXI6IG51bGxcclxuICAgIH07XHJcblxyXG4gICAgLy8gY2MuZmluZCgnQ2FudmFzL0dhbWUnKS5hY3RpdmUgPSBmYWxzZTtcclxuICB9LFxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLk11c2ljQ2xpcCwgdHJ1ZSk7XHJcblxyXG4gICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRCdW5kbGUoJ21wNCcsIChlcnJvciwgYnVuZGxlKSA9PiB7XHJcbiAgICAgIGlmICghZXJyb3IpIHtcclxuICAgICAgICBidW5kbGUucHJlbG9hZERpcignLi8nLCBjYy5WaWRlb0NsaXApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjYy5maW5kKCdDYW52YXMvR2FtZScpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdmFyIGdldFVybFN0cmluZyA9IGxvY2F0aW9uLmhyZWY7XHJcbiAgICB2YXIgdXJsID0gbmV3IFVSTChnZXRVcmxTdHJpbmcpOyAgXHJcbiAgICBpZihQdWJsaWNTZXRVcC5hY2NvdW50PT1cIlwiKXtcclxuICAgICAgUHVibGljU2V0VXAuYWNjb3VudD11cmwuc2VhcmNoUGFyYW1zLmdldCgnV2ViVG9rZW4nKTtcclxuICAgICAgY29ubmVjdFRvU2VydmVyKCcyMTMuMTM5LjIzNS43MycsIDYzODAsIHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdXZWJUb2tlbicpLCBQdWJsaWNTZXRVcC5wYXNzd29yZCwyKTtcclxuICAgIH1lbHNle1xyXG4gICAgICBjb25uZWN0VG9TZXJ2ZXIoJzIxMy4xMzkuMjM1LjczJywgNjM4MCwgUHVibGljU2V0VXAuYWNjb3VudCwgUHVibGljU2V0VXAucGFzc3dvcmQsMCk7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgY28ucGVyZm9ybVRpY2soY2MuZGlyZWN0b3IuX2xhc3RVcGRhdGUpO1xyXG5cclxuICB9XHJcbn0pO1xyXG4iXX0=