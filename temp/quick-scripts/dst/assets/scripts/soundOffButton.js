
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
        PublicSetUp.sound = 0;
        button.getComponent(cc.Button).interactable = false;
        cc.audioEngine.stopAll();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc291bmRPZmZCdXR0b24uanMiXSwibmFtZXMiOlsiUHVibGljU2V0VXAiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsIm9uTG9hZCIsImJ1dHRvbiIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJCdXR0b24iLCJvbiIsInN0b3JlIiwic291bmRFbmFibGVkIiwiYWN0aXZlIiwic291bmQiLCJpbnRlcmFjdGFibGUiLCJhdWRpb0VuZ2luZSIsInN0b3BBbGwiLCJzdG9wTXVzaWMiLCJzb3VuZE9uQnV0dG9uIiwiZmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxXQUFXLEdBQUNDLE9BQU8sQ0FBQyxhQUFELENBQXZCOztBQUVBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNQLGFBQVNELEVBQUUsQ0FBQ0UsU0FETDtBQUdQQyxFQUFBQSxNQUhPLG9CQUdFO0FBQ1AsUUFBTUMsTUFBTSxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsWUFBVixDQUF1Qk4sRUFBRSxDQUFDTyxNQUExQixDQUFmO0FBQ0FILElBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZRyxFQUFaLENBQWUsT0FBZixFQUF3QixZQUFNO0FBQzVCLFVBQUlSLEVBQUUsQ0FBQ1MsS0FBSCxDQUFTQyxZQUFULEtBQTBCLElBQTlCLEVBQW9DO0FBQ2xDVixRQUFBQSxFQUFFLENBQUNTLEtBQUgsQ0FBU0MsWUFBVCxHQUF3QixLQUF4QjtBQUNBTixRQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWU0sTUFBWixHQUFxQixLQUFyQjtBQUNBYixRQUFBQSxXQUFXLENBQUNjLEtBQVosR0FBa0IsQ0FBbEI7QUFDQVIsUUFBQUEsTUFBTSxDQUFDRSxZQUFQLENBQW9CTixFQUFFLENBQUNPLE1BQXZCLEVBQStCTSxZQUEvQixHQUE4QyxLQUE5QztBQUNBYixRQUFBQSxFQUFFLENBQUNjLFdBQUgsQ0FBZUMsT0FBZjtBQUNBZixRQUFBQSxFQUFFLENBQUNjLFdBQUgsQ0FBZUUsU0FBZjtBQUNBLFlBQU1DLGFBQWEsR0FBR2pCLEVBQUUsQ0FBQ2tCLElBQUgsQ0FBUSx5REFBUixDQUF0QjtBQUNBRCxRQUFBQSxhQUFhLENBQUNOLE1BQWQsR0FBdUIsSUFBdkI7QUFDQU0sUUFBQUEsYUFBYSxDQUFDWCxZQUFkLENBQTJCTixFQUFFLENBQUNPLE1BQTlCLEVBQXNDTSxZQUF0QyxHQUFxRCxJQUFyRDtBQUNEO0FBQ0YsS0FaRDtBQWFEO0FBbEJNLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBQdWJsaWNTZXRVcD1yZXF1aXJlKCdQdWJsaWNTZXRVcCcpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgY29uc3QgYnV0dG9uID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgYnV0dG9uLm5vZGUub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBpZiAoY2Muc3RvcmUuc291bmRFbmFibGVkID09PSB0cnVlKSB7XHJcbiAgICAgICAgY2Muc3RvcmUuc291bmRFbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgYnV0dG9uLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgUHVibGljU2V0VXAuc291bmQ9MDtcclxuICAgICAgICBidXR0b24uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xyXG4gICAgICAgIGNvbnN0IHNvdW5kT25CdXR0b24gPSBjYy5maW5kKCdDYW52YXMvR2FtZS9NYWNoaW5lL1VJL01lbnUvU2V0dGluZ3NQYW5lbC9Tb3VuZE9uQnV0dG9uJyk7XHJcbiAgICAgICAgc291bmRPbkJ1dHRvbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHNvdW5kT25CdXR0b24uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuIl19