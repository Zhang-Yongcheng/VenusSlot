
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
  }

  return /*#__PURE__*/regeneratorRuntime.mark(function playVideo(name) {
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
              cc.audioEngine.playEffect(PublicSetUp.audio1, true);
              cc.find('Canvas/Game/Machine/Particle_coin').active = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGxheVZpZGVvLmpzIl0sIm5hbWVzIjpbIlB1YmxpY1NldFVwIiwicmVxdWlyZSIsInBsYXlWaWRlbyIsInZpZGVvUGxheWVyTm9kZSIsInZpZGVvQnVuZGxlIiwicGxheWluZyIsIm9uRG9uZSIsInBsYXllciIsImVuYWJsZWQiLCJjbGlwIiwibmFtZSIsImNjIiwiZmluZCIsIm9uIiwicGxheSIsImF1ZGlvRW5naW5lIiwicGxheUVmZmVjdCIsImF1ZGlvMSIsImFjdGl2ZSIsImFzc2V0TWFuYWdlciIsImdldEJ1bmRsZSIsImxpc3QiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJnZXQiLCJWaWRlb0NsaXAiLCJkb25lIiwibG9hZCIsImVycm9yIiwiYXNzZXQiLCJjbyIsIndhaXRVbnRpbCIsImdldENvbXBvbmVudCIsIlZpZGVvUGxheWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0EsSUFBSUEsV0FBVyxHQUFDQyxPQUFPLENBQUMsYUFBRCxDQUF2Qjs7QUFDQSxJQUFNQyxTQUFTLEdBQUksWUFBWTtBQUM3QixNQUFJQyxlQUFlLEdBQUcsSUFBdEI7QUFDQSxNQUFJQyxXQUFXLEdBQUcsSUFBbEI7QUFDQSxNQUFJQyxPQUFPLEdBQUcsS0FBZDs7QUFFQSxXQUFTQyxNQUFULENBQWdCQyxNQUFoQixFQUF3QjtBQUN0QkEsSUFBQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLEtBQWpCO0FBQ0FELElBQUFBLE1BQU0sQ0FBQ0UsSUFBUCxHQUFjLElBQWQ7QUFDQUosSUFBQUEsT0FBTyxHQUFHLEtBQVY7QUFDRDs7QUFFRCw4Q0FBTyxTQUFVSCxTQUFWLENBQW9CUSxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDRFAsZUFBZSxLQUFLLElBRG5CO0FBQUE7QUFBQTtBQUFBOztBQUVIQSxZQUFBQSxlQUFlLEdBQUdRLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRLDZDQUFSLENBQWxCOztBQUZHLGtCQUdDVCxlQUFlLEtBQUssSUFIckI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFPSEEsWUFBQUEsZUFBZSxDQUFDVSxFQUFoQixDQUFtQixlQUFuQixFQUFvQyxVQUFBTixNQUFNLEVBQUk7QUFDNUNBLGNBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixJQUFqQjtBQUNBRCxjQUFBQSxNQUFNLENBQUNPLElBQVA7QUFDQUgsY0FBQUEsRUFBRSxDQUFDSSxXQUFILENBQWVDLFVBQWYsQ0FBMEJoQixXQUFXLENBQUNpQixNQUF0QyxFQUE4QyxJQUE5QztBQUVBTixjQUFBQSxFQUFFLENBQUNDLElBQUgsQ0FBUSxtQ0FBUixFQUE2Q00sTUFBN0MsR0FBb0QsSUFBcEQ7QUFDQVAsY0FBQUEsRUFBRSxDQUFDQyxJQUFILENBQVEsZ0NBQVIsRUFBMENNLE1BQTFDLEdBQWlELElBQWpEO0FBQ0QsYUFQRDtBQVNBZixZQUFBQSxlQUFlLENBQUNVLEVBQWhCLENBQW1CLE9BQW5CLEVBQTRCUCxNQUE1QjtBQUVBSCxZQUFBQSxlQUFlLENBQUNVLEVBQWhCLENBQW1CLFdBQW5CLEVBQWdDUCxNQUFoQzs7QUFsQkc7QUFBQSxrQkFxQkRGLFdBQVcsSUFBSSxJQXJCZDtBQUFBO0FBQUE7QUFBQTs7QUFzQkhBLFlBQUFBLFdBQVcsR0FBR08sRUFBRSxDQUFDUSxZQUFILENBQWdCQyxTQUFoQixDQUEwQixLQUExQixDQUFkOztBQXRCRyxrQkF1QkNoQixXQUFXLEtBQUssSUF2QmpCO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBNEJMLGdCQUFJTSxJQUFJLEtBQUssUUFBYixFQUF1QjtBQUNmVyxjQUFBQSxJQURlLEdBQ1IsQ0FBQywwQkFBRCxFQUE2QiwwQkFBN0IsQ0FEUTtBQUVyQlgsY0FBQUEsSUFBSSxHQUFHVyxJQUFJLENBQUNDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JILElBQUksQ0FBQ0ksTUFBaEMsQ0FBRCxDQUFYO0FBQ0Q7O0FBRUdoQixZQUFBQSxJQWpDQyxHQWlDTUwsV0FBVyxDQUFDc0IsR0FBWixDQUFnQmhCLElBQWhCLEVBQXNCQyxFQUFFLENBQUNnQixTQUF6QixDQWpDTjs7QUFBQSxrQkFrQ0RsQixJQUFJLElBQUksSUFsQ1A7QUFBQTtBQUFBO0FBQUE7O0FBbUNDbUIsWUFBQUEsSUFuQ0QsR0FtQ1EsS0FuQ1I7QUFvQ0h4QixZQUFBQSxXQUFXLENBQUN5QixJQUFaLENBQWlCbkIsSUFBakIsRUFBdUJDLEVBQUUsQ0FBQ2dCLFNBQTFCLEVBQXFDLFVBQUNHLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUNyREgsY0FBQUEsSUFBSSxHQUFHLElBQVA7O0FBQ0Esa0JBQUksQ0FBQ0UsS0FBTCxFQUFZO0FBQ1ZyQixnQkFBQUEsSUFBSSxHQUFHc0IsS0FBUCxDQURVLENBRVY7QUFDRDtBQUNGLGFBTkQ7QUFwQ0c7QUE0Q0gsbUJBQU1DLGVBQUdDLFNBQUgsQ0FBYTtBQUFBLHFCQUFNTCxJQUFJLEtBQUssSUFBZjtBQUFBLGFBQWIsQ0FBTjs7QUE1Q0c7QUFBQSxrQkErQ0RuQixJQUFJLElBQUksSUEvQ1A7QUFBQTtBQUFBO0FBQUE7O0FBZ0RITixZQUFBQSxlQUFlLENBQUMrQixZQUFoQixDQUE2QnZCLEVBQUUsQ0FBQ3dCLFdBQWhDLEVBQTZDMUIsSUFBN0MsR0FBb0RBLElBQXBEO0FBQ0FKLFlBQUFBLE9BQU8sR0FBRyxJQUFWO0FBakRHO0FBa0RILG1CQUFNMkIsZUFBR0MsU0FBSCxDQUFhO0FBQUEscUJBQU01QixPQUFPLEtBQUssS0FBbEI7QUFBQSxhQUFiLENBQU47O0FBbERHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFVSCxTQUFWO0FBQUEsR0FBUDtBQXFERCxDQWhFaUIsRUFBbEI7O2VBa0VlQSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvIGZyb20gJy4vY28uY2MnO1xyXG5sZXQgUHVibGljU2V0VXA9cmVxdWlyZSgnUHVibGljU2V0VXAnKTtcclxuY29uc3QgcGxheVZpZGVvID0gKGZ1bmN0aW9uICgpIHtcclxuICBsZXQgdmlkZW9QbGF5ZXJOb2RlID0gbnVsbDtcclxuICBsZXQgdmlkZW9CdW5kbGUgPSBudWxsO1xyXG4gIGxldCBwbGF5aW5nID0gZmFsc2U7XHJcblxyXG4gIGZ1bmN0aW9uIG9uRG9uZShwbGF5ZXIpIHtcclxuICAgIHBsYXllci5lbmFibGVkID0gZmFsc2U7XHJcbiAgICBwbGF5ZXIuY2xpcCA9IG51bGw7XHJcbiAgICBwbGF5aW5nID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZnVuY3Rpb24qIHBsYXlWaWRlbyhuYW1lKSB7XHJcbiAgICBpZiAodmlkZW9QbGF5ZXJOb2RlID09PSBudWxsKSB7XHJcbiAgICAgIHZpZGVvUGxheWVyTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcy9HYW1lL01hY2hpbmUvUGVyZm9ybWFuY2UvVmlkZW9QbGF5ZXInKTtcclxuICAgICAgaWYgKHZpZGVvUGxheWVyTm9kZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmlkZW9QbGF5ZXJOb2RlLm9uKCdyZWFkeS10by1wbGF5JywgcGxheWVyID0+IHtcclxuICAgICAgICBwbGF5ZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgcGxheWVyLnBsYXkoKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KFB1YmxpY1NldFVwLmF1ZGlvMSwgdHJ1ZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL0dhbWUvTWFjaGluZS9QYXJ0aWNsZV9jb2luJykuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL0dhbWUvTWFjaGluZS9WaWRlb0ZyYW1lJykuYWN0aXZlPXRydWU7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdmlkZW9QbGF5ZXJOb2RlLm9uKCdlcnJvcicsIG9uRG9uZSk7XHJcblxyXG4gICAgICB2aWRlb1BsYXllck5vZGUub24oJ2NvbXBsZXRlZCcsIG9uRG9uZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZpZGVvQnVuZGxlID09IG51bGwpIHtcclxuICAgICAgdmlkZW9CdW5kbGUgPSBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKCdtcDQnKTtcclxuICAgICAgaWYgKHZpZGVvQnVuZGxlID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5hbWUgPT09ICdyYW5kb20nKSB7XHJcbiAgICAgIGNvbnN0IGxpc3QgPSBbJ0xJTkVfTU9WSUVfMTY0MzEwNTk0MTc3OCcsICdMSU5FX01PVklFXzE2NDMxMDU5NDg3OTEnXTtcclxuICAgICAgbmFtZSA9IGxpc3RbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGlzdC5sZW5ndGgpXTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY2xpcCA9IHZpZGVvQnVuZGxlLmdldChuYW1lLCBjYy5WaWRlb0NsaXApO1xyXG4gICAgaWYgKGNsaXAgPT0gbnVsbCkge1xyXG4gICAgICBsZXQgZG9uZSA9IGZhbHNlO1xyXG4gICAgICB2aWRlb0J1bmRsZS5sb2FkKG5hbWUsIGNjLlZpZGVvQ2xpcCwgKGVycm9yLCBhc3NldCkgPT4ge1xyXG4gICAgICAgIGRvbmUgPSB0cnVlO1xyXG4gICAgICAgIGlmICghZXJyb3IpIHtcclxuICAgICAgICAgIGNsaXAgPSBhc3NldDtcclxuICAgICAgICAgIC8vIGNsaXAuYWRkUmVmKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHlpZWxkIGNvLndhaXRVbnRpbCgoKSA9PiBkb25lID09PSB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2xpcCAhPSBudWxsKSB7XHJcbiAgICAgIHZpZGVvUGxheWVyTm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpLmNsaXAgPSBjbGlwO1xyXG4gICAgICBwbGF5aW5nID0gdHJ1ZTtcclxuICAgICAgeWllbGQgY28ud2FpdFVudGlsKCgpID0+IHBsYXlpbmcgPT09IGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGxheVZpZGVvO1xyXG4iXX0=