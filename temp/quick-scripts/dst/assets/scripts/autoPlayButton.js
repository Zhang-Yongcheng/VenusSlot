
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/autoPlayButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e82e68PrlpDUKUade1bQ3Zp', 'autoPlayButton');
// scripts/autoPlayButton.js

"use strict";

cc.Class({
  "extends": cc.Component,
  onLoad: function onLoad() {
    var button = this.node.getComponent(cc.Button);
    button.node.on('click', function () {
      if (cc.store.canPlay() === true && cc.store.playing === false) {
        cc.store.playing = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYXV0b1BsYXlCdXR0b24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsIm9uTG9hZCIsImJ1dHRvbiIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJCdXR0b24iLCJvbiIsInN0b3JlIiwiY2FuUGxheSIsInBsYXlpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBR1BDLEVBQUFBLE1BSE8sb0JBR0U7QUFDUCxRQUFNQyxNQUFNLEdBQUcsS0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCTixFQUFFLENBQUNPLE1BQTFCLENBQWY7QUFDQUgsSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVlHLEVBQVosQ0FBZSxPQUFmLEVBQXdCLFlBQU07QUFDNUIsVUFBSVIsRUFBRSxDQUFDUyxLQUFILENBQVNDLE9BQVQsT0FBdUIsSUFBdkIsSUFBK0JWLEVBQUUsQ0FBQ1MsS0FBSCxDQUFTRSxPQUFULEtBQXFCLEtBQXhELEVBQStEO0FBQzdEWCxRQUFBQSxFQUFFLENBQUNTLEtBQUgsQ0FBU0UsT0FBVCxHQUFtQixJQUFuQjtBQUNEO0FBQ0YsS0FKRDtBQUtEO0FBVk0sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgY29uc3QgYnV0dG9uID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgYnV0dG9uLm5vZGUub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBpZiAoY2Muc3RvcmUuY2FuUGxheSgpID09PSB0cnVlICYmIGNjLnN0b3JlLnBsYXlpbmcgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgY2Muc3RvcmUucGxheWluZyA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiJdfQ==