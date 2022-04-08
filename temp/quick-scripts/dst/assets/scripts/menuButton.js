
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/menuButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5d7a75w+adBHZkh/QGIIFoc', 'menuButton');
// scripts/menuButton.js

"use strict";

cc.Class({
  "extends": cc.Component,
  onLoad: function onLoad() {
    var button = this.node.getComponent(cc.Button);
    button.node.on('click', function () {
      cc.find('Canvas/Game/Machine/UI/Menu').getComponent('menuController').dropDown();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWVudUJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwib25Mb2FkIiwiYnV0dG9uIiwibm9kZSIsImdldENvbXBvbmVudCIsIkJ1dHRvbiIsIm9uIiwiZmluZCIsImRyb3BEb3duIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNQLGFBQVNELEVBQUUsQ0FBQ0UsU0FETDtBQUdQQyxFQUFBQSxNQUhPLG9CQUdFO0FBQ1AsUUFBTUMsTUFBTSxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsWUFBVixDQUF1Qk4sRUFBRSxDQUFDTyxNQUExQixDQUFmO0FBQ0FILElBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZRyxFQUFaLENBQWUsT0FBZixFQUF3QixZQUFNO0FBQzVCUixNQUFBQSxFQUFFLENBQUNTLElBQUgsQ0FBUSw2QkFBUixFQUF1Q0gsWUFBdkMsQ0FBb0QsZ0JBQXBELEVBQXNFSSxRQUF0RTtBQUNELEtBRkQ7QUFHRDtBQVJNLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgIGJ1dHRvbi5ub2RlLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY2MuZmluZCgnQ2FudmFzL0dhbWUvTWFjaGluZS9VSS9NZW51JykuZ2V0Q29tcG9uZW50KCdtZW51Q29udHJvbGxlcicpLmRyb3BEb3duKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iXX0=