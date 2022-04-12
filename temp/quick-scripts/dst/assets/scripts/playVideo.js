
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

              if (PublicSetUp.sound == 1) {
                cc.audioEngine.playEffect(PublicSetUp.audio1, true);
              }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGxheVZpZGVvLmpzIl0sIm5hbWVzIjpbIlB1YmxpY1NldFVwIiwicmVxdWlyZSIsInBsYXlWaWRlbyIsInZpZGVvUGxheWVyTm9kZSIsInZpZGVvQnVuZGxlIiwicGxheWluZyIsIm9uRG9uZSIsInBsYXllciIsImVuYWJsZWQiLCJjbGlwIiwibmFtZSIsImNjIiwiZmluZCIsIm9uIiwicGxheSIsInNvdW5kIiwiYXVkaW9FbmdpbmUiLCJwbGF5RWZmZWN0IiwiYXVkaW8xIiwiYWN0aXZlIiwiYXNzZXRNYW5hZ2VyIiwiZ2V0QnVuZGxlIiwibGlzdCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImdldCIsIlZpZGVvQ2xpcCIsImRvbmUiLCJsb2FkIiwiZXJyb3IiLCJhc3NldCIsImNvIiwid2FpdFVudGlsIiwiZ2V0Q29tcG9uZW50IiwiVmlkZW9QbGF5ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7Ozs7QUFEQSxJQUFJQSxXQUFXLEdBQUNDLE9BQU8sQ0FBQyxhQUFELENBQXZCOztBQUVBLElBQU1DLFNBQVMsR0FBSSxZQUFZO0FBQzdCLE1BQUlDLGVBQWUsR0FBRyxJQUF0QjtBQUNBLE1BQUlDLFdBQVcsR0FBRyxJQUFsQjtBQUNBLE1BQUlDLE9BQU8sR0FBRyxLQUFkOztBQUVBLFdBQVNDLE1BQVQsQ0FBZ0JDLE1BQWhCLEVBQXdCO0FBQ3RCQSxJQUFBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsS0FBakI7QUFDQUQsSUFBQUEsTUFBTSxDQUFDRSxJQUFQLEdBQWMsSUFBZDtBQUNBSixJQUFBQSxPQUFPLEdBQUcsS0FBVjtBQUNEOztBQUVELDhDQUFPLFNBQVVILFNBQVYsQ0FBb0JRLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUNEUCxlQUFlLEtBQUssSUFEbkI7QUFBQTtBQUFBO0FBQUE7O0FBRUhBLFlBQUFBLGVBQWUsR0FBR1EsRUFB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cG9ydCBjbyBmcm9tICcuL2NvLmNjJztcclxubGV0IFB1YmxpY1NldFVwPXJlcXVpcmUoJ1B1YmxpY1NldFVwJyk7XHJcbmltcG9ydCBzb3VuZCBmcm9tICcuL3NvdW5kJztcclxuY29uc3QgcGxheVZpZGVvID0gKGZ1bmN0aW9uICgpIHtcclxuICBsZXQgdmlkZW9QbGF5ZXJOb2RlID0gbnVsbDtcclxuICBsZXQgdmlkZW9CdW5kbGUgPSBudWxsO1xyXG4gIGxldCBwbGF5aW5nID0gZmFsc2U7XHJcblxyXG4gIGZ1bmN0aW9uIG9uRG9uZShwbGF5ZXIpIHtcclxuICAgIHBsYXllci5lbmFibGVkID0gZmFsc2U7XHJcbiAgICBwbGF5ZXIuY2xpcCA9IG51bGw7XHJcbiAgICBwbGF5aW5nID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZnVuY3Rpb24qIHBsYXlWaWRlbyhuYW1lKSB7XHJcbiAgICBpZiAodmlkZW9QbGF5ZXJOb2RlID09PSBudWxsKSB7XHJcbiAgICAgIHZpZGVvUGxheWVyTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcy9HYW1lL01hY2hpbmUvUGVyZm9ybWFuY2UvVmlkZW9QbGF5ZXInKTtcclxuICAgICAgaWYgKHZpZGVvUGxheWVyTm9kZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmlkZW9QbGF5ZXJOb2RlLm9uKCdyZWFkeS10by1wbGF5JywgcGxheWVyID0+IHtcclxuICAgICAgICBwbGF5ZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgcGxheWVyLnBsYXkoKTtcclxuICAgICAgICBpZihQdWJsaWNTZXRVcC5zb3VuZD09MSl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChQdWJsaWNTZXRVcC5hdWRpbzEsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjYy5maW5kKCdDYW52YXMvR2FtZS9NYWNoaW5lL1BhcnRpY2xlX2NvaW4nKS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICBjYy5maW5kKCdDYW52YXMvR2FtZS9NYWNoaW5lL1ZpZGVvRnJhbWUnKS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB2aWRlb1BsYXllck5vZGUub24oJ2Vycm9yJywgb25Eb25lKTtcclxuXHJcbiAgICAgIHZpZGVvUGxheWVyTm9kZS5vbignY29tcGxldGVkJywgb25Eb25lKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodmlkZW9CdW5kbGUgPT0gbnVsbCkge1xyXG4gICAgICB2aWRlb0J1bmRsZSA9IGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUoJ21wNCcpO1xyXG4gICAgICBpZiAodmlkZW9CdW5kbGUgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAobmFtZSA9PT0gJ3JhbmRvbScpIHtcclxuICAgICAgY29uc3QgbGlzdCA9IFsnTElORV9NT1ZJRV8xNjQzMTA1OTQxNzc4JywgJ0xJTkVfTU9WSUVfMTY0MzEwNTk0ODc5MSddO1xyXG4gICAgICBuYW1lID0gbGlzdFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsaXN0Lmxlbmd0aCldO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjbGlwID0gdmlkZW9CdW5kbGUuZ2V0KG5hbWUsIGNjLlZpZGVvQ2xpcCk7XHJcbiAgICBpZiAoY2xpcCA9PSBudWxsKSB7XHJcbiAgICAgIGxldCBkb25lID0gZmFsc2U7XHJcbiAgICAgIHZpZGVvQnVuZGxlLmxvYWQobmFtZSwgY2MuVmlkZW9DbGlwLCAoZXJyb3IsIGFzc2V0KSA9PiB7XHJcbiAgICAgICAgZG9uZSA9IHRydWU7XHJcbiAgICAgICAgaWYgKCFlcnJvcikge1xyXG4gICAgICAgICAgY2xpcCA9IGFzc2V0O1xyXG4gICAgICAgICAgLy8gY2xpcC5hZGRSZWYoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgeWllbGQgY28ud2FpdFVudGlsKCgpID0+IGRvbmUgPT09IHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjbGlwICE9IG51bGwpIHtcclxuICAgICAgdmlkZW9QbGF5ZXJOb2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikuY2xpcCA9IGNsaXA7XHJcbiAgICAgIHBsYXlpbmcgPSB0cnVlO1xyXG4gICAgICB5aWVsZCBjby53YWl0VW50aWwoKCkgPT4gcGxheWluZyA9PT0gZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwbGF5VmlkZW87XHJcbiJdfQ==