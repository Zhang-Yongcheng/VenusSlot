
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/pauseButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6130716dp1L2KxcVD41hLFh', 'pauseButton');
// scripts/pauseButton.js

"use strict";

cc.Class({
  "extends": cc.Component,
  onLoad: function onLoad() {
    var button = this.node.getComponent(cc.Button);
    button.node.on('click', function () {
      if (cc.store.playing === true) {
        cc.store.playing = false;
        var AutoPlayButton = cc.find('Canvas/Game/Machine/UI/playButton');
        AutoPlayButton.active = true;
        var ManuaPlayButton = cc.find('Canvas/Game/Machine/UI/PauseButton');
        ManuaPlayButton.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGF1c2VCdXR0b24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsIm9uTG9hZCIsImJ1dHRvbiIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJCdXR0b24iLCJvbiIsInN0b3JlIiwicGxheWluZyIsIkF1dG9QbGF5QnV0dG9uIiwiZmluZCIsImFjdGl2ZSIsIk1hbnVhUGxheUJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDUCxhQUFTRCxFQUFFLENBQUNFLFNBREw7QUFHUEMsRUFBQUEsTUFITyxvQkFHRTtBQUNQLFFBQU1DLE1BQU0sR0FBRyxLQUFLQyxJQUFMLENBQVVDLFlBQVYsQ0FBdUJOLEVBQUUsQ0FBQ08sTUFBMUIsQ0FBZjtBQUNBSCxJQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWUcsRUFBWixDQUFlLE9BQWYsRUFBd0IsWUFBTTtBQUM1QixVQUFJUixFQUFFLENBQUNTLEtBQUgsQ0FBU0MsT0FBVCxLQUFxQixJQUF6QixFQUErQjtBQUM3QlYsUUFBQUEsRUFBRSxDQUFDUyxLQUFILENBQVNDLE9BQVQsR0FBbUIsS0FBbkI7QUFDQSxZQUFNQyxjQUFjLEdBQUdYLEVBQUUsQ0FBQ1ksSUFBSCxDQUFRLG1DQUFSLENBQXZCO0FBQ0FELFFBQUFBLGNBQWMsQ0FBQ0UsTUFBZixHQUF3QixJQUF4QjtBQUNBLFlBQU1DLGVBQWUsR0FBR2QsRUFBRSxDQUFDWSxJQUFILENBQVEsb0NBQVIsQ0FBeEI7QUFDQUUsUUFBQUEsZUFBZSxDQUFDRCxNQUFoQixHQUF5QixLQUF6QjtBQUNEO0FBQ0YsS0FSRDtBQVNEO0FBZE0sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgY29uc3QgYnV0dG9uID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgYnV0dG9uLm5vZGUub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBpZiAoY2Muc3RvcmUucGxheWluZyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGNjLnN0b3JlLnBsYXlpbmcgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBBdXRvUGxheUJ1dHRvbiA9IGNjLmZpbmQoJ0NhbnZhcy9HYW1lL01hY2hpbmUvVUkvcGxheUJ1dHRvbicpO1xyXG4gICAgICAgIEF1dG9QbGF5QnV0dG9uLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgTWFudWFQbGF5QnV0dG9uID0gY2MuZmluZCgnQ2FudmFzL0dhbWUvTWFjaGluZS9VSS9QYXVzZUJ1dHRvbicpO1xyXG4gICAgICAgIE1hbnVhUGxheUJ1dHRvbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuIl19