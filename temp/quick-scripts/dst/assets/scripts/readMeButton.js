
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/readMeButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bce97NYoj9IO59QL1TApEv3', 'readMeButton');
// scripts/readMeButton.js

"use strict";

cc.Class({
  "extends": cc.Component,
  onLoad: function onLoad() {
    var button = this.node.getComponent(cc.Button);
    button.node.on('click', function () {});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccmVhZE1lQnV0dG9uLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJvbkxvYWQiLCJidXR0b24iLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiQnV0dG9uIiwib24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBR1BDLEVBQUFBLE1BSE8sb0JBR0U7QUFDUCxRQUFNQyxNQUFNLEdBQUcsS0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCTixFQUFFLENBQUNPLE1BQTFCLENBQWY7QUFDQUgsSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVlHLEVBQVosQ0FBZSxPQUFmLEVBQXdCLFlBQU0sQ0FBRSxDQUFoQztBQUNEO0FBTk0sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgY29uc3QgYnV0dG9uID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgYnV0dG9uLm5vZGUub24oJ2NsaWNrJywgKCkgPT4ge30pO1xyXG4gIH1cclxufSk7XHJcbiJdfQ==