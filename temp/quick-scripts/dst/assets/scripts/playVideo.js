
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
              cc.audioEngine.playEffect(PublicSetUp.audio["0014"], false);

              if (index === 0 || index === 6 || index === 7) {
                if (PublicSetUp.sound == 1) {
                  cc.audioEngine.playEffect(PublicSetUp.audio["0021"], false);
                }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGxheVZpZGVvLmpzIl0sIm5hbWVzIjpbIlB1YmxpY1NldFVwIiwicmVxdWlyZSIsInBsYXlWaWRlbyIsInZpZGVvUGxheWVyTm9kZSIsInZpZGVvQnVuZGxlIiwicGxheWluZyIsIm9uRG9uZSIsInBsYXllciIsImVuYWJsZWQiLCJjbGlwIiwiY2MiLCJmaW5kIiwiYWN0aXZlIiwibmFtZSIsImluZGV4Iiwib24iLCJwbGF5IiwiYXVkaW9FbmdpbmUiLCJwbGF5RWZmZWN0IiwiYXVkaW8iLCJzb3VuZCIsImFzc2V0TWFuYWdlciIsImdldEJ1bmRsZSIsImxpc3QiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJTdHJpbmciLCJnZXQiLCJWaWRlb0NsaXAiLCJkb25lIiwibG9hZCIsImVycm9yIiwiYXNzZXQiLCJjbyIsIndhaXRVbnRpbCIsImdldENvbXBvbmVudCIsIlZpZGVvUGxheWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0EsSUFBSUEsV0FBVyxHQUFDQyxPQUFPLENBQUMsYUFBRCxDQUF2Qjs7QUFDQSxJQUFNQyxTQUFTLEdBQUksWUFBWTtBQUM3QixNQUFJQyxlQUFlLEdBQUcsSUFBdEI7QUFDQSxNQUFJQyxXQUFXLEdBQUcsSUFBbEI7QUFDQSxNQUFJQyxPQUFPLEdBQUcsS0FBZDs7QUFFQSxXQUFTQyxNQUFULENBQWdCQyxNQUFoQixFQUF3QjtBQUN0QkEsSUFBQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLEtBQWpCO0FBQ0FELElBQUFBLE1BQU0sQ0FBQ0UsSUFBUCxHQUFjLElBQWQ7QUFDQUosSUFBQUEsT0FBTyxHQUFHLEtBQVY7QUFDQUssSUFBQUEsRUFBRSxDQUFDQyxJQUFILENBQVEsZ0NBQVIsRUFBMENDLE1BQTFDLEdBQWlELEtBQWpEO0FBQ0FGLElBQUFBLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRLG1DQUFSLEVBQTZDQyxNQUE3QyxHQUFvRCxLQUFw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O0FBc0RILG1CQUFNQyxlQUFHQyxTQUFILENBQWE7QUFBQSxxQkFBTUwsSUFBSSxLQUFLLElBQWY7QUFBQSxhQUFiLENBQU47O0FBdERHO0FBQUEsa0JBeUREdEIsSUFBSSxJQUFJLElBekRQO0FBQUE7QUFBQTtBQUFBOztBQTBESE4sWUFBQUEsZUFBZSxDQUFDa0MsWUFBaEIsQ0FBNkIzQixFQUFFLENBQUM0QixXQUFoQyxFQUE2QzdCLElBQTdDLEdBQW9EQSxJQUFwRDtBQUNBSixZQUFBQSxPQUFPLEdBQUcsSUFBVjtBQTNERztBQTRESCxtQkFBTThCLGVBQUdDLFNBQUgsQ0FBYTtBQUFBLHFCQUFNL0IsT0FBTyxLQUFLLEtBQWxCO0FBQUEsYUFBYixDQUFOOztBQTVERztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBVUgsU0FBVjtBQUFBLEdBQVA7QUErREQsQ0E1RWlCLEVBQWxCOztlQThFZUEiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbyBmcm9tICcuL2NvLmNjJztcclxubGV0IFB1YmxpY1NldFVwPXJlcXVpcmUoJ1B1YmxpY1NldFVwJyk7XHJcbmNvbnN0IHBsYXlWaWRlbyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgbGV0IHZpZGVvUGxheWVyTm9kZSA9IG51bGw7XHJcbiAgbGV0IHZpZGVvQnVuZGxlID0gbnVsbDtcclxuICBsZXQgcGxheWluZyA9IGZhbHNlO1xyXG5cclxuICBmdW5jdGlvbiBvbkRvbmUocGxheWVyKSB7XHJcbiAgICBwbGF5ZXIuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgcGxheWVyLmNsaXAgPSBudWxsO1xyXG4gICAgcGxheWluZyA9IGZhbHNlO1xyXG4gICAgY2MuZmluZCgnQ2FudmFzL0dhbWUvTWFjaGluZS9WaWRlb0ZyYW1lJykuYWN0aXZlPWZhbHNlO1xyXG4gICAgY2MuZmluZCgnQ2FudmFzL0dhbWUvTWFjaGluZS9QYXJ0aWNsZV9jb2luJykuYWN0aXZlPWZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uKiBwbGF5VmlkZW8obmFtZSxpbmRleCkge1xyXG4gICAgaWYgKHZpZGVvUGxheWVyTm9kZSA9PT0gbnVsbCkge1xyXG4gICAgICB2aWRlb1BsYXllck5vZGUgPSBjYy5maW5kKCdDYW52YXMvR2FtZS9NYWNoaW5lL1BlcmZvcm1hbmNlL1ZpZGVvUGxheWVyJyk7XHJcbiAgICAgIGlmICh2aWRlb1BsYXllck5vZGUgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZpZGVvUGxheWVyTm9kZS5vbigncmVhZHktdG8tcGxheScsIHBsYXllciA9PiB7XHJcbiAgICAgICAgcGxheWVyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHBsYXllci5wbGF5KCk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChQdWJsaWNTZXRVcC5hdWRpb1tcIjAwMTRcIl0sIGZhbHNlKTtcclxuICAgICAgICBpZiAoaW5kZXggPT09IDAgfHwgaW5kZXggPT09IDYgfHwgaW5kZXggPT09IDcpe1xyXG4gICAgICAgICAgaWYoUHVibGljU2V0VXAuc291bmQ9PTEpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChQdWJsaWNTZXRVcC5hdWRpb1tcIjAwMjFcIl0sIGZhbHNlKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjYy5maW5kKCdDYW52YXMvR2FtZS9NYWNoaW5lL1BhcnRpY2xlX2NvaW4nKS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL0dhbWUvTWFjaGluZS9WaWRlb0ZyYW1lJykuYWN0aXZlPXRydWU7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdmlkZW9QbGF5ZXJOb2RlLm9uKCdlcnJvcicsIG9uRG9uZSk7XHJcblxyXG4gICAgICB2aWRlb1BsYXllck5vZGUub24oJ2NvbXBsZXRlZCcsIG9uRG9uZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZpZGVvQnVuZGxlID09IG51bGwpIHtcclxuICAgICAgdmlkZW9CdW5kbGUgPSBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKCdtcDQnKTtcclxuICAgICAgaWYgKHZpZGVvQnVuZGxlID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5hbWUgPT09ICdyYW5kb20nKSB7XHJcbiAgICAgIGNvbnN0IGxpc3QgPSBbJ0xJTkVfTU9WSUVfMTY0MzEwNTk0MTc3OCcsICdMSU5FX01PVklFXzE2NDMxMDU5NDg3OTEnXTtcclxuICAgICAgbmFtZSA9IGxpc3RbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGlzdC5sZW5ndGgpXTtcclxuICAgIH1lbHNlIGlmKG5hbWUgPT09ICdpbmRleCcpe1xyXG5cclxuICAgICAgbmFtZSA9IFN0cmluZyhpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNsaXAgPSB2aWRlb0J1bmRsZS5nZXQobmFtZSwgY2MuVmlkZW9DbGlwKTtcclxuICAgIGlmIChjbGlwID09IG51bGwpIHtcclxuICAgICAgbGV0IGRvbmUgPSBmYWxzZTtcclxuICAgICAgdmlkZW9CdW5kbGUubG9hZChuYW1lLCBjYy5WaWRlb0NsaXAsIChlcnJvciwgYXNzZXQpID0+IHtcclxuICAgICAgICBkb25lID0gdHJ1ZTtcclxuICAgICAgICBpZiAoIWVycm9yKSB7XHJcbiAgICAgICAgICBjbGlwID0gYXNzZXQ7XHJcbiAgICAgICAgICAvLyBjbGlwLmFkZFJlZigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB5aWVsZCBjby53YWl0VW50aWwoKCkgPT4gZG9uZSA9PT0gdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNsaXAgIT0gbnVsbCkge1xyXG4gICAgICB2aWRlb1BsYXllck5vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKS5jbGlwID0gY2xpcDtcclxuICAgICAgcGxheWluZyA9IHRydWU7XHJcbiAgICAgIHlpZWxkIGNvLndhaXRVbnRpbCgoKSA9PiBwbGF5aW5nID09PSBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBsYXlWaWRlbztcclxuIl19