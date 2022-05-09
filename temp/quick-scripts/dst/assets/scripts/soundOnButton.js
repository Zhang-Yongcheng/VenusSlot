
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/soundOnButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ffb6fjQ0+RNLo0s6j9YDXb0', 'soundOnButton');
// scripts/soundOnButton.js

"use strict";

var PublicSetUp = require('PublicSetUp');

cc.Class({
  "extends": cc.Component,
  onLoad: function onLoad() {
    var button = this.node.getComponent(cc.Button);
    button.node.on('click', function () {
      if (cc.store.soundEnabled === false) {
        cc.store.soundEnabled = true;
        PublicSetUp.sound = 1;
        cc.audioEngine.playMusic(PublicSetUp.MusicClip, true);
        button.node.active = false;
        button.getComponent(cc.Button).interactable = false;
        var soundOffButton = cc.find('Canvas/Game/Machine/UI/Menu/SettingsPanel/SoundOffButton');
        soundOffButton.active = true;
        soundOffButton.getComponent(cc.Button).interactable = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc291bmRPbkJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJQdWJsaWNTZXRVcCIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwib25Mb2FkIiwiYnV0dG9uIiwibm9kZSIsImdldENvbXBvbmVudCIsIkJ1dHRvbiIsIm9uIiwic3RvcmUiLCJzb3VuZEVuYWJsZWQiLCJzb3VuZCIsImF1ZGlvRW5naW5lIiwicGxheU11c2ljIiwiTXVzaWNDbGlwIiwiYWN0aXZlIiwiaW50ZXJhY3RhYmxlIiwic291bmRPZmZCdXR0b24iLCJmaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFdBQVcsR0FBQ0MsT0FBTyxDQUFDLGFBQUQsQ0FBdkI7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBR1BDLEVBQUFBLE1BSE8sb0JBR0U7QUFDUCxRQUFNQyxNQUFNLEdBQUcsS0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCTixFQUFFLENBQUNPLE1BQTFCLENBQWY7QUFDQUgsSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVlHLEVBQVosQ0FBZSxPQUFmLEVBQXdCLFlBQU07QUFDNUIsVUFBSVIsRUFBRSxDQUFDUyxLQUFILENBQVNDLFlBQVQsS0FBMEIsS0FBOUIsRUFBcUM7QUFDbkNWLFFBQUFBLEVBQUUsQ0FBQ1MsS0FBSCxDQUFTQyxZQUFULEdBQXdCLElBQXhCO0FBQ0FaLFFBQUFBLFdBQVcsQ0FBQ2EsS0FBWixHQUFrQixDQUFsQjtBQUNBWCxRQUFBQSxFQUFFLENBQUNZLFdBQUgsQ0FBZUMsU0FBZixDQUF5QmYsV0FBVyxDQUFDZ0IsU0FBckMsRUFBZ0QsSUFBaEQ7QUFDQVYsUUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVlVLE1BQVosR0FBcUIsS0FBckI7QUFDQVgsUUFBQUEsTUFBTSxDQUFDRSxZQUFQLENBQW9CTixFQUFFLENBQUNPLE1BQXZCLEVBQStCUyxZQUEvQixHQUE4QyxLQUE5QztBQUVBLFlBQU1DLGNBQWMsR0FBR2pCLEVBQUUsQ0FBQ2tCLElBQUgsQ0FBUSwwREFBUixDQUF2QjtBQUNBRCxRQUFBQSxjQUFjLENBQUNGLE1BQWYsR0FBd0IsSUFBeEI7QUFDQUUsUUFBQUEsY0FBYyxDQUFDWCxZQUFmLENBQTRCTixFQUFFLENBQUNPLE1BQS9CLEVBQXVDUyxZQUF2QyxHQUFzRCxJQUF0RDtBQUNEO0FBQ0YsS0FaRDtBQWFEO0FBbEJNLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5sZXQgUHVibGljU2V0VXA9cmVxdWlyZSgnUHVibGljU2V0VXAnKTtcclxuY2MuQ2xhc3Moe1xyXG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgY29uc3QgYnV0dG9uID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgYnV0dG9uLm5vZGUub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBpZiAoY2Muc3RvcmUuc291bmRFbmFibGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgIGNjLnN0b3JlLnNvdW5kRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgUHVibGljU2V0VXAuc291bmQ9MTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWMoUHVibGljU2V0VXAuTXVzaWNDbGlwLCB0cnVlKTtcclxuICAgICAgICBidXR0b24ubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBidXR0b24uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IHNvdW5kT2ZmQnV0dG9uID0gY2MuZmluZCgnQ2FudmFzL0dhbWUvTWFjaGluZS9VSS9NZW51L1NldHRpbmdzUGFuZWwvU291bmRPZmZCdXR0b24nKTtcclxuICAgICAgICBzb3VuZE9mZkJ1dHRvbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHNvdW5kT2ZmQnV0dG9uLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiJdfQ==