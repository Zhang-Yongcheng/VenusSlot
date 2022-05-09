
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/playButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '34956yDn7NGKbw+iIlWp/76', 'playButton');
// scripts/playButton.js

"use strict";

cc.Class({
  "extends": cc.Component,
  onLoad: function onLoad() {
    var button = this.node.getComponent(cc.Button);
    button.node.on('click', function () {
      if (cc.store.canPlay() === true && cc.store.playing === false) {
        cc.store.playing = true;
        var AutoPlayButton = cc.find('Canvas/Game/Machine/UI/playButton');
        AutoPlayButton.active = false;
        var ManuaPlayButton = cc.find('Canvas/Game/Machine/UI/PauseButton');
        ManuaPlayButton.active = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGxheUJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwib25Mb2FkIiwiYnV0dG9uIiwibm9kZSIsImdldENvbXBvbmVudCIsIkJ1dHRvbiIsIm9uIiwic3RvcmUiLCJjYW5QbGF5IiwicGxheWluZyIsIkF1dG9QbGF5QnV0dG9uIiwiZmluZCIsImFjdGl2ZSIsIk1hbnVhUGxheUJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDUCxhQUFTRCxFQUFFLENBQUNFLFNBREw7QUFHUEMsRUFBQUEsTUFITyxvQkFHRTtBQUNQLFFBQU1DLE1BQU0sR0FBRyxLQUFLQyxJQUFMLENBQVVDLFlBQVYsQ0FBdUJOLEVBQUUsQ0FBQ08sTUFBMUIsQ0FBZjtBQUNBSCxJQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWUcsRUFBWixDQUFlLE9BQWYsRUFBd0IsWUFBTTtBQUM1QixVQUFJUixFQUFFLENBQUNTLEtBQUgsQ0FBU0MsT0FBVCxPQUF1QixJQUF2QixJQUErQlYsRUFBRSxDQUFDUyxLQUFILENBQVNFLE9BQVQsS0FBcUIsS0FBeEQsRUFBK0Q7QUFDN0RYLFFBQUFBLEVBQUUsQ0FBQ1MsS0FBSCxDQUFTRSxPQUFULEdBQW1CLElBQW5CO0FBQ0EsWUFBTUMsY0FBYyxHQUFHWixFQUFFLENBQUNhLElBQUgsQ0FBUSxtQ0FBUixDQUF2QjtBQUNBRCxRQUFBQSxjQUFjLENBQUNFLE1BQWYsR0FBd0IsS0FBeEI7QUFDQSxZQUFNQyxlQUFlLEdBQUdmLEVBQUUsQ0FBQ2EsSUFBSCxDQUFRLG9DQUFSLENBQXhCO0FBQ0FFLFFBQUFBLGVBQWUsQ0FBQ0QsTUFBaEIsR0FBeUIsSUFBekI7QUFDRDtBQUNGLEtBUkQ7QUFTRDtBQWRNLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgIGJ1dHRvbi5ub2RlLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgaWYgKGNjLnN0b3JlLmNhblBsYXkoKSA9PT0gdHJ1ZSAmJiBjYy5zdG9yZS5wbGF5aW5nID09PSBmYWxzZSkge1xyXG4gICAgICAgIGNjLnN0b3JlLnBsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IEF1dG9QbGF5QnV0dG9uID0gY2MuZmluZCgnQ2FudmFzL0dhbWUvTWFjaGluZS9VSS9wbGF5QnV0dG9uJyk7XHJcbiAgICAgICAgQXV0b1BsYXlCdXR0b24uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgTWFudWFQbGF5QnV0dG9uID0gY2MuZmluZCgnQ2FudmFzL0dhbWUvTWFjaGluZS9VSS9QYXVzZUJ1dHRvbicpO1xyXG4gICAgICAgIE1hbnVhUGxheUJ1dHRvbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iXX0=