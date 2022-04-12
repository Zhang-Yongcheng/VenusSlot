
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/soundOffButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c7e77eYJVZJbpCXbZ8oqtld', 'soundOffButton');
// scripts/soundOffButton.js

"use strict";

var PublicSetUp = require('PublicSetUp');

cc.Class({
  "extends": cc.Component,
  onLoad: function onLoad() {
    var button = this.node.getComponent(cc.Button);
    button.node.on('click', function () {
      if (cc.store.soundEnabled === true) {
        cc.store.soundEnabled = false;
        button.node.active = false;
        button.getComponent(cc.Button).interactable = false;
        cc.audioEngine.stopAll(PublicSetUp.audio1, false);
        cc.audioEngine.stopMusic();
        var soundOnButton = cc.find('Canvas/Game/Machine/UI/Menu/SettingsPanel/SoundOnButton');
        soundOnButton.active = true;
        soundOnButton.getComponent(cc.Button).interactable = true;
      }
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc291bmRPZmZCdXR0b24uanMiXSwibmFtZXMiOlsiUHVibGljU2V0VXAiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsIm9uTG9hZCIsImJ1dHRvbiIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJCdXR0b24iLCJvbiIsInN0b3JlIiwic291bmRFbmFibGVkIiwiYWN0aXZlIiwiaW50ZXJhY3RhYmxlIiwiYXVkaW9FbmdpbmUiLCJzdG9wQWxsIiwiYXVkaW8xIiwic3RvcE11c2ljIiwic291bmRPbkJ1dHRvbiIsImZpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsV0FBVyxHQUFDQyxPQUFPLENBQUMsYUFBRCxDQUF2Qjs7QUFFQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDUCxhQUFTRCxFQUFFLENBQUNFLFNBREw7QUFHUEMsRUFBQUEsTUFITyxvQkFHRTtBQUNQLFFBQU1DLE1BQU0sR0FBRyxLQUFLQyxJQUFMLENBQVVDLFlBQVYsQ0FBdUJOLEVBQUUsQ0FBQ08sTUFBMUIsQ0FBZjtBQUNBSCxJQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWUcsRUFBWixDQUFlLE9BQWYsRUFBd0IsWUFBTTtBQUM1QixVQUFJUixFQUFFLENBQUNTLEtBQUgsQ0FBU0MsWUFBVCxLQUEwQixJQUE5QixFQUFvQztBQUNsQ1YsUUFBQUEsRUFBRSxDQUFDUyxLQUFILENBQVNDLFlBQVQsR0FBd0IsS0FBeEI7QUFDQU4sUUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVlNLE1BQVosR0FBcUIsS0FBckI7QUFDQVAsUUFBQUEsTUFBTSxDQUFDRSxZQUFQLENBQW9CTixFQUFFLENBQUNPLE1BQXZCLEVBQStCSyxZQUEvQixHQUE4QyxLQUE5QztBQUNBWixRQUFBQSxFQUFFLENBQUNhLFdBQUgsQ0FBZUMsT0FBZixDQUF1QmhCLFdBQVcsQ0FBQ2lCLE1BQW5DLEVBQTJDLEtBQTNDO0FBQ0FmLFFBQUFBLEVBQUUsQ0FBQ2EsV0FBSCxDQUFlRyxTQUFmO0FBQ0EsWUFBTUMsYUFBYSxHQUFHakIsRUFBRSxDQUFDa0IsSUFBSCxDQUFRLHlEQUFSLENBQXRCO0FBQ0FELFFBQUFBLGFBQWEsQ0FBQ04sTUFBZCxHQUF1QixJQUF2QjtBQUNBTSxRQUFBQSxhQUFhLENBQUNYLFlBQWQsQ0FBMkJOLEVBQUUsQ0FBQ08sTUFBOUIsRUFBc0NLLFlBQXRDLEdBQXFELElBQXJEO0FBQ0Q7QUFDRixLQVhEO0FBWUQ7QUFqQk0sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IFB1YmxpY1NldFVwPXJlcXVpcmUoJ1B1YmxpY1NldFVwJyk7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICBjb25zdCBidXR0b24gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICBidXR0b24ubm9kZS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGlmIChjYy5zdG9yZS5zb3VuZEVuYWJsZWQgPT09IHRydWUpIHtcclxuICAgICAgICBjYy5zdG9yZS5zb3VuZEVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBidXR0b24ubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBidXR0b24uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbChQdWJsaWNTZXRVcC5hdWRpbzEsIGZhbHNlKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcclxuICAgICAgICBjb25zdCBzb3VuZE9uQnV0dG9uID0gY2MuZmluZCgnQ2FudmFzL0dhbWUvTWFjaGluZS9VSS9NZW51L1NldHRpbmdzUGFuZWwvU291bmRPbkJ1dHRvbicpO1xyXG4gICAgICAgIHNvdW5kT25CdXR0b24uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBzb3VuZE9uQnV0dG9uLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiJdfQ==