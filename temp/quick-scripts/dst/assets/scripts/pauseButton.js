
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGF1c2VCdXR0b24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsIm9uTG9hZCIsImJ1dHRvbiIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJCdXR0b24iLCJvbiIsInN0b3JlIiwicGxheWluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDUCxhQUFTRCxFQUFFLENBQUNFLFNBREw7QUFHUEMsRUFBQUEsTUFITyxvQkFHRTtBQUNQLFFBQU1DLE1BQU0sR0FBRyxLQUFLQyxJQUFMLENBQVVDLFlBQVYsQ0FBdUJOLEVBQUUsQ0FBQ08sTUFBMUIsQ0FBZjtBQUNBSCxJQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWUcsRUFBWixDQUFlLE9BQWYsRUFBd0IsWUFBTTtBQUM1QixVQUFJUixFQUFFLENBQUNTLEtBQUgsQ0FBU0MsT0FBVCxLQUFxQixJQUF6QixFQUErQjtBQUM3QlYsUUFBQUEsRUFBRSxDQUFDUyxLQUFILENBQVNDLE9BQVQsR0FBbUIsS0FBbkI7QUFDRDtBQUNGLEtBSkQ7QUFLRDtBQVZNLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgIGJ1dHRvbi5ub2RlLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgaWYgKGNjLnN0b3JlLnBsYXlpbmcgPT09IHRydWUpIHtcclxuICAgICAgICBjYy5zdG9yZS5wbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiJdfQ==