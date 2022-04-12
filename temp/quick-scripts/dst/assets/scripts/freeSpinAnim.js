
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/freeSpinAnim.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b0b669BCXVCUpQgg5VRna7b', 'freeSpinAnim');
// scripts/freeSpinAnim.js

"use strict";

//總次數，剩餘次數,狀態  0:正常 1:剛中獎，2:結束
cc.Class({
  "extends": cc.Component,
  onLoad: function onLoad() {
    var _this = this;

    var anim = cc.find('Canvas/Game/FreeSpin/FreeSpins').getComponent(cc.Animation);
    anim.on('finished', function () {
      _this.UIShow();

      anim.node.active = false;
    });
  },
  play: function play() {
    var anim = cc.find('Canvas/Game/FreeSpin/FreeSpins').getComponent(cc.Animation);
    anim.node.active = true;
    anim.play();
  },
  UIShow: function UIShow() {
    cc.find('Canvas/Game/Machine/Bg/3').active = true;
    cc.find('Canvas/Game/Machine/UI/FreeSpinsPanel').active = true;
    cc.find('Canvas/Game/Machine/UI/BetPanel').active = false;
    cc.find('Canvas/Game/Machine/UI/MaxBetButton').active = false;
    cc.find('Canvas/Game/Machine/UI/AutoPlayButton').active = false;
    cc.find('Canvas/Game/Machine/UI/ManuaPlayButton').active = false;
  },
  UIOff: function UIOff() {
    cc.find('Canvas/Game/Machine/Bg/3').active = false;
    cc.find('Canvas/Game/Machine/UI/FreeSpinsPanel').active = false;
    cc.find('Canvas/Game/Machine/UI/BetPanel').active = true;
    cc.find('Canvas/Game/Machine/UI/MaxBetButton').active = true;
    cc.find('Canvas/Game/Machine/UI/AutoPlayButton').active = true;
    cc.find('Canvas/Game/Machine/UI/ManuaPlayButton').active = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZnJlZVNwaW5BbmltLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJvbkxvYWQiLCJhbmltIiwiZmluZCIsImdldENvbXBvbmVudCIsIkFuaW1hdGlvbiIsIm9uIiwiVUlTaG93Iiwibm9kZSIsImFjdGl2ZSIsInBsYXkiLCJVSU9mZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNFQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNQLGFBQVNELEVBQUUsQ0FBQ0UsU0FETDtBQUdQQyxFQUFBQSxNQUhPLG9CQUdFO0FBQUE7O0FBQ1AsUUFBTUMsSUFBSSxHQUFHSixFQUFFLENBQUNLLElBQUgsQ0FBUSxnQ0FBUixFQUEwQ0MsWUFBMUMsQ0FBdUROLEVBQUUsQ0FBQ08sU0FBMUQsQ0FBYjtBQUNBSCxJQUFBQSxJQUFJLENBQUNJLEVBQUwsQ0FBUSxVQUFSLEVBQW9CLFlBQU07QUFDeEIsTUFBQSxLQUFJLENBQUNDLE1BQUw7O0FBQ0FMLE1BQUFBLElBQUksQ0FBQ00sSUFBTCxDQUFVQyxNQUFWLEdBQWlCLEtBQWpCO0FBRUQsS0FKRDtBQUtELEdBVk07QUFZUEMsRUFBQUEsSUFaTyxrQkFZRDtBQUNGLFFBQU1SLElBQUksR0FBR0osRUFBRSxDQUFDSyxJQUFILENBQVEsZ0NBQVIsRUFBMENDLFlBQTFDLENBQXVETixFQUFFLENBQUNPLFNBQTFELENBQWI7QUFDQUgsSUFBQUEsSUFBSSxDQUFDTSxJQUFMLENBQVVDLE1BQVYsR0FBaUIsSUFBakI7QUFDQVAsSUFBQUEsSUFBSSxDQUFDUSxJQUFMO0FBQ0gsR0FoQk07QUFpQlBILEVBQUFBLE1BakJPLG9CQWlCQztBQUNKVCxJQUFBQSxFQUFFLENBQUNLLElBQUgsQ0FBUSwwQkFBUixFQUFvQ00sTUFBcEMsR0FBMkMsSUFBM0M7QUFDQVgsSUFBQUEsRUFBRSxDQUFDSyxJQUFILENBQVEsdUNBQVIsRUFBaURNLE1BQWpELEdBQXdELElBQXhEO0FBQ0FYLElBQUFBLEVBQUUsQ0FBQ0ssSUFBSCxDQUFRLGlDQUFSLEVBQTJDTSxNQUEzQyxHQUFrRCxLQUFsRDtBQUNBWCxJQUFBQSxFQUFFLENBQUNLLElBQUgsQ0FBUSxxQ0FBUixFQUErQ00sTUFBL0MsR0FBc0QsS0FBdEQ7QUFDQVgsSUFBQUEsRUFBRSxDQUFDSyxJQUFILENBQVEsdUNBQVIsRUFBaURNLE1BQWpELEdBQXdELEtBQXhEO0FBQ0FYLElBQUFBLEVBQUUsQ0FBQ0ssSUFBSCxDQUFRLHdDQUFSLEVBQWtETSxNQUFsRCxHQUF5RCxLQUF6RDtBQUNILEdBeEJNO0FBeUJQRSxFQUFBQSxLQXpCTyxtQkF5QkE7QUFDSGIsSUFBQUEsRUFBRSxDQUFDSyxJQUFILENBQVEsMEJBQVIsRUFBb0NNLE1BQXBDLEdBQTJDLEtBQTNDO0FBQ0FYLElBQUFBLEVBQUUsQ0FBQ0ssSUFBSCxDQUFRLHVDQUFSLEVBQWlETSxNQUFqRCxHQUF3RCxLQUF4RDtBQUNBWCxJQUFBQSxFQUFFLENBQUNLLElBQUgsQ0FBUSxpQ0FBUixFQUEyQ00sTUFBM0MsR0FBa0QsSUFBbEQ7QUFDQVgsSUFBQUEsRUFBRSxDQUFDSyxJQUFILENBQVEscUNBQVIsRUFBK0NNLE1BQS9DLEdBQXNELElBQXREO0FBQ0FYLElBQUFBLEVBQUUsQ0FBQ0ssSUFBSCxDQUFRLHVDQUFSLEVBQWlETSxNQUFqRCxHQUF3RCxJQUF4RDtBQUNBWCxJQUFBQSxFQUFFLENBQUNLLElBQUgsQ0FBUSx3Q0FBUixFQUFrRE0sTUFBbEQsR0FBeUQsSUFBekQ7QUFDSDtBQWhDTSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvL+e4veasoeaVuO+8jOWJqemkmOasoeaVuCzni4DmhYsgIDA65q2j5bi4IDE65Ymb5Lit542O77yMMjrntZDmnZ9cclxuICBjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgIFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICBjb25zdCBhbmltID0gY2MuZmluZCgnQ2FudmFzL0dhbWUvRnJlZVNwaW4vRnJlZVNwaW5zJykuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgIGFuaW0ub24oJ2ZpbmlzaGVkJywgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuVUlTaG93KCk7XHJcbiAgICAgICAgYW5pbS5ub2RlLmFjdGl2ZT1mYWxzZTtcclxuXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBwbGF5KCl7XHJcbiAgICAgICAgY29uc3QgYW5pbSA9IGNjLmZpbmQoJ0NhbnZhcy9HYW1lL0ZyZWVTcGluL0ZyZWVTcGlucycpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIGFuaW0ubm9kZS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICBhbmltLnBsYXkoKTtcclxuICAgIH0sXHJcbiAgICBVSVNob3coKXtcclxuICAgICAgICBjYy5maW5kKCdDYW52YXMvR2FtZS9NYWNoaW5lL0JnLzMnKS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICBjYy5maW5kKCdDYW52YXMvR2FtZS9NYWNoaW5lL1VJL0ZyZWVTcGluc1BhbmVsJykuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL0dhbWUvTWFjaGluZS9VSS9CZXRQYW5lbCcpLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICBjYy5maW5kKCdDYW52YXMvR2FtZS9NYWNoaW5lL1VJL01heEJldEJ1dHRvbicpLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICBjYy5maW5kKCdDYW52YXMvR2FtZS9NYWNoaW5lL1VJL0F1dG9QbGF5QnV0dG9uJykuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9HYW1lL01hY2hpbmUvVUkvTWFudWFQbGF5QnV0dG9uJykuYWN0aXZlPWZhbHNlO1xyXG4gICAgfSxcclxuICAgIFVJT2ZmKCl7XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL0dhbWUvTWFjaGluZS9CZy8zJykuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9HYW1lL01hY2hpbmUvVUkvRnJlZVNwaW5zUGFuZWwnKS5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL0dhbWUvTWFjaGluZS9VSS9CZXRQYW5lbCcpLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9HYW1lL01hY2hpbmUvVUkvTWF4QmV0QnV0dG9uJykuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL0dhbWUvTWFjaGluZS9VSS9BdXRvUGxheUJ1dHRvbicpLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9HYW1lL01hY2hpbmUvVUkvTWFudWFQbGF5QnV0dG9uJykuYWN0aXZlPXRydWU7XHJcbiAgICB9XHJcbiAgfSk7Il19