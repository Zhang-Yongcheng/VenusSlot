
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
    button.node.on('click', function () {
      cc.find('Canvas/Game/readPanel').active = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccmVhZE1lQnV0dG9uLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJvbkxvYWQiLCJidXR0b24iLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiQnV0dG9uIiwib24iLCJmaW5kIiwiYWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNQLGFBQVNELEVBQUUsQ0FBQ0UsU0FETDtBQUdQQyxFQUFBQSxNQUhPLG9CQUdFO0FBQ1AsUUFBTUMsTUFBTSxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsWUFBVixDQUF1Qk4sRUFBRSxDQUFDTyxNQUExQixDQUFmO0FBQ0FILElBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZRyxFQUFaLENBQWUsT0FBZixFQUF3QixZQUFNO0FBRTVCUixNQUFBQSxFQUFFLENBQUNTLElBQUgsQ0FBUSx1QkFBUixFQUFpQ0MsTUFBakMsR0FBd0MsSUFBeEM7QUFDRCxLQUhEO0FBSUQ7QUFUTSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICBjb25zdCBidXR0b24gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICBidXR0b24ubm9kZS5vbignY2xpY2snLCAoKSA9PiB7XHJcblxyXG4gICAgICBjYy5maW5kKCdDYW52YXMvR2FtZS9yZWFkUGFuZWwnKS5hY3RpdmU9dHJ1ZTtcclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiJdfQ==