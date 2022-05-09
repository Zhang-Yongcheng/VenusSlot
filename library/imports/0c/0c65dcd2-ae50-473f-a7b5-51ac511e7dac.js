"use strict";
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