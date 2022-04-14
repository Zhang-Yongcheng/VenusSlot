
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/playVideo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0c65dzSrlBHP6e1UaxRHn2s', 'playVideo');
// scripts/playVideo.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _co = _interopRequireDefault(require("./co.cc"));

var _sound = _interopRequireDefault(require("./sound"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PublicSetUp = require('PublicSetUp');

var playVideo = function () {
  var videoPlayerNode = null;
  var videoBundle = null;
  var playing = false;

  function onDone(player) {
    player.enabled = false;
    player.clip = null;
    playing = false;
    cc.find('Canvas/Game/Machine/VideoFrame').active = false;
    cc.find('Canvas/Game/Machine/Particle_coin').active = false;
  }

  return /*#__PURE__*/regeneratorRuntime.mark(function playVideo(name, index) {
    var list, clip, done;
    return regeneratorRuntime.wrap(function playVideo$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(videoPlayerNode === null)) {
              _context.next = 7;
              break;
            }

            videoPlayerNode = cc.find('Canvas/Game/Machine/Performance/VideoPlayer');

            if (!(videoPlayerNode === null)) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return");

          case 4:
            videoPlayerNode.on('ready-to-play', function (player) {
              player.enabled = true;
              player.play();

              if (PublicSetUp.sound == 1) {
                cc.audioEngine.playEffect(PublicSetUp.audio1, true);
              }

              if (index === 0) {
                cc.find('Canvas/Game/Machine/Particle_coin').active = true;
              }

              cc.find('Canvas/Game/Machine/VideoFrame').active = true;
            });
            videoPlayerNode.on('error', onDone);
            videoPlayerNode.on('completed', onDone);

          case 7:
            if (!(videoBundle == null)) {
              _context.next = 11;
              break;
            }

            videoBundle = cc.assetManager.getBundle('mp4');

            if (!(videoBundle === null)) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return");

          case 11:
            if (name === 'random') {
              list = ['LINE_MOVIE_1643105941778', 'LINE_MOVIE_1643105948791'];
              name = list[Math.floor(Math.random() * list.length)];
            } else if (name === 'index') {
              name = String(index);
            }

            clip = videoBundle.get(name, cc.VideoClip);

            if (!(clip == null)) {
              _context.next = 18;
              break;
            }

            done = false;
            videoBundle.load(name, cc.VideoClip, function (error, asset) {
              done = true;

              if (!error) {
                clip = asset; // clip.addRef();
              }
            });
            _context.next = 18;
            return _co["default"].waitUntil(function () {
              return done === true;
            });

          case 18:
            if (!(clip != null)) {
              _context.next = 23;
              break;
            }

            videoPlayerNode.getComponent(cc.VideoPlayer).clip = clip;
            playing = true;
            _context.next = 23;
            return _co["default"].waitUntil(function () {
              return playing === false;
            });

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, playVideo);
  });
}();

var _default = playVideo;
exports["default"] = _default;
module.exports = exports["default"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGxheVZpZGVvLmpzIl0sIm5hbWVzIjpbIlB1YmxpY1NldFVwIiwicmVxdWlyZSIsInBsYXlWaWRlbyIsInZpZGVvUGxheWVyTm9kZSIsInZpZGVvQnVuZGxlIiwicGxheWluZyIsIm9uRG9uZSIsInBsYXllciIsImVuYWJsZWQiLCJjbGlwIiwiY2MiLCJmaW5kIiwiYWN0aXZlIiwibmFtZSIsImluZGV4Iiwib24iLCJwbGF5Iiwic291bmQiLCJhdWRpb0VuZ2luZSIsInBsYXlFZmZlY3QiLCJhdWRpbzEiLCJhc3NldE1hbmFnZXIiLCJnZXRCdW5kbGUiLCJsaXN0IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiU3RyaW5nIiwiZ2V0IiwiVmlkZW9DbGlwIiwiZG9uZSIsImxvYWQiLCJlcnJvciIsImFzc2V0IiwiY28iLCJ3YWl0VW50aWwiLCJnZXRDb21wb25lbnQiLCJWaWRlb1BsYXllciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7OztBQURBLElBQUlBLFdBQVcsR0FBQ0MsT0FBTyxDQUFDLGFBQUQsQ0FBdkI7O0FBRUEsSUFBTUMsU0FBUyxHQUFJLFlBQVk7QUFDN0IsTUFBSUMsZUFBZSxHQUFHLElBQXRCO0FBQ0EsTUFBSUMsV0FBVyxHQUFHLElBQWxCO0FBQ0EsTUFBSUMsT0FBTyxHQUFHLEtBQWQ7O0FBRUEsV0FBU0MsTUFBVCxDQUFnQkMsTUFBaEIsRUFBd0I7QUFDdEJBLElBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixLQUFqQjtBQUNBRCxJQUFBQSxNQUFNLENBQUNFLElBQVAsR0FBYyxJQUFkO0FBQ0FKLElBQUFBLE9BQU8sR0FBRyxLQUFWO0FBQ0FLLElBQUFBLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRLGdDQUFSLEVBQTBDQyxNQUExQyxHQUFpRCxLQUFqRDtBQUNBRixJQUFBQSxFQUFFLENBQUNDLElBQUgsQ0FBUSxtQ0FBUixFQUE2Q0MsTUFBN0MsR0FB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WUFBaEIsQ0FBNkIzQixFQUFFLENBQUM0QixXQUFoQyxFQUE2QzdCLElBQTdDLEdBQW9EQSxJQUFwRDtBQUNBSixZQUFBQSxPQUFPLEdBQUcsSUFBVjtBQXpERztBQTBESCxtQkFBTThCLGVBQUdDLFNBQUgsQ0FBYTtBQUFBLHFCQUFNL0IsT0FBTyxLQUFLLEtBQWxCO0FBQUEsYUFBYixDQUFOOztBQTFERztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBVUgsU0FBVjtBQUFBLEdBQVA7QUE2REQsQ0ExRWlCLEVBQWxCOztlQTRFZUEiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbyBmcm9tICcuL2NvLmNjJztcclxubGV0IFB1YmxpY1NldFVwPXJlcXVpcmUoJ1B1YmxpY1NldFVwJyk7XHJcbmltcG9ydCBzb3VuZCBmcm9tICcuL3NvdW5kJztcclxuY29uc3QgcGxheVZpZGVvID0gKGZ1bmN0aW9uICgpIHtcclxuICBsZXQgdmlkZW9QbGF5ZXJOb2RlID0gbnVsbDtcclxuICBsZXQgdmlkZW9CdW5kbGUgPSBudWxsO1xyXG4gIGxldCBwbGF5aW5nID0gZmFsc2U7XHJcblxyXG4gIGZ1bmN0aW9uIG9uRG9uZShwbGF5ZXIpIHtcclxuICAgIHBsYXllci5lbmFibGVkID0gZmFsc2U7XHJcbiAgICBwbGF5ZXIuY2xpcCA9IG51bGw7XHJcbiAgICBwbGF5aW5nID0gZmFsc2U7XHJcbiAgICBjYy5maW5kKCdDYW52YXMvR2FtZS9NYWNoaW5lL1ZpZGVvRnJhbWUnKS5hY3RpdmU9ZmFsc2U7XHJcbiAgICBjYy5maW5kKCdDYW52YXMvR2FtZS9NYWNoaW5lL1BhcnRpY2xlX2NvaW4nKS5hY3RpdmU9ZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZnVuY3Rpb24qIHBsYXlWaWRlbyhuYW1lLGluZGV4KSB7XHJcbiAgICBpZiAodmlkZW9QbGF5ZXJOb2RlID09PSBudWxsKSB7XHJcbiAgICAgIHZpZGVvUGxheWVyTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcy9HYW1lL01hY2hpbmUvUGVyZm9ybWFuY2UvVmlkZW9QbGF5ZXInKTtcclxuICAgICAgaWYgKHZpZGVvUGxheWVyTm9kZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmlkZW9QbGF5ZXJOb2RlLm9uKCdyZWFkeS10by1wbGF5JywgcGxheWVyID0+IHtcclxuICAgICAgICBwbGF5ZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgcGxheWVyLnBsYXkoKTtcclxuICAgICAgICBpZihQdWJsaWNTZXRVcC5zb3VuZD09MSl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChQdWJsaWNTZXRVcC5hdWRpbzEsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW5kZXggPT09IDApe1xyXG4gICAgICAgICAgY2MuZmluZCgnQ2FudmFzL0dhbWUvTWFjaGluZS9QYXJ0aWNsZV9jb2luJykuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9HYW1lL01hY2hpbmUvVmlkZW9GcmFtZScpLmFjdGl2ZT10cnVlO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHZpZGVvUGxheWVyTm9kZS5vbignZXJyb3InLCBvbkRvbmUpO1xyXG5cclxuICAgICAgdmlkZW9QbGF5ZXJOb2RlLm9uKCdjb21wbGV0ZWQnLCBvbkRvbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2aWRlb0J1bmRsZSA9PSBudWxsKSB7XHJcbiAgICAgIHZpZGVvQnVuZGxlID0gY2MuYXNzZXRNYW5hZ2VyLmdldEJ1bmRsZSgnbXA0Jyk7XHJcbiAgICAgIGlmICh2aWRlb0J1bmRsZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChuYW1lID09PSAncmFuZG9tJykge1xyXG4gICAgICBjb25zdCBsaXN0ID0gWydMSU5FX01PVklFXzE2NDMxMDU5NDE3NzgnLCAnTElORV9NT1ZJRV8xNjQzMTA1OTQ4NzkxJ107XHJcbiAgICAgIG5hbWUgPSBsaXN0W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxpc3QubGVuZ3RoKV07XHJcbiAgICB9ZWxzZSBpZihuYW1lID09PSAnaW5kZXgnKXtcclxuXHJcbiAgICAgIG5hbWUgPSBTdHJpbmcoaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjbGlwID0gdmlkZW9CdW5kbGUuZ2V0KG5hbWUsIGNjLlZpZGVvQ2xpcCk7XHJcbiAgICBpZiAoY2xpcCA9PSBudWxsKSB7XHJcbiAgICAgIGxldCBkb25lID0gZmFsc2U7XHJcbiAgICAgIHZpZGVvQnVuZGxlLmxvYWQobmFtZSwgY2MuVmlkZW9DbGlwLCAoZXJyb3IsIGFzc2V0KSA9PiB7XHJcbiAgICAgICAgZG9uZSA9IHRydWU7XHJcbiAgICAgICAgaWYgKCFlcnJvcikge1xyXG4gICAgICAgICAgY2xpcCA9IGFzc2V0O1xyXG4gICAgICAgICAgLy8gY2xpcC5hZGRSZWYoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgeWllbGQgY28ud2FpdFVudGlsKCgpID0+IGRvbmUgPT09IHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjbGlwICE9IG51bGwpIHtcclxuICAgICAgdmlkZW9QbGF5ZXJOb2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikuY2xpcCA9IGNsaXA7XHJcbiAgICAgIHBsYXlpbmcgPSB0cnVlO1xyXG4gICAgICB5aWVsZCBjby53YWl0VW50aWwoKCkgPT4gcGxheWluZyA9PT0gZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwbGF5VmlkZW87XHJcbiJdfQ==