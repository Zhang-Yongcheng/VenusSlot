
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/score.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c5e7bwe2jFFdoHcFj1/UAud', 'score');
// scripts/score.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var self;
cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    self = this;
    cc.find('Canvas/Game/score/1').active = false;
  },
  run: function run(score) {
    var scoreLab = cc.find('Canvas/Game/score/1');
    scoreLab.getComponent(cc.Label).string = "+" + score;
    cc.tween(scoreLab).call(function () {
      scoreLab.active = true;
    }).to(0, {
      position: cc.v2(-100, 130)
    }).to(1, {
      position: cc.v2(-100, 245)
    }).delay(0.5).call(function () {
      scoreLab.active = false;
    }).start();
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2NvcmUuanMiXSwibmFtZXMiOlsic2VsZiIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnQiLCJmaW5kIiwiYWN0aXZlIiwicnVuIiwic2NvcmUiLCJzY29yZUxhYiIsImdldENvbXBvbmVudCIsIkxhYmVsIiwic3RyaW5nIiwidHdlZW4iLCJjYWxsIiwidG8iLCJwb3NpdGlvbiIsInYyIiwiZGVsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUEsSUFBSjtBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUSxHQUhQO0FBcUJMO0FBRUE7QUFFQUMsRUFBQUEsS0F6QkssbUJBeUJJO0FBQ0xMLElBQUFBLElBQUksR0FBQyxJQUFMO0FBQ0FDLElBQUFBLEVBQUUsQ0FBQ0ssSUFBSCxDQUFRLHFCQUFSLEVBQStCQyxNQUEvQixHQUFzQyxLQUF0QztBQUVILEdBN0JJO0FBK0JMQyxFQUFBQSxHQS9CSyxlQStCREMsS0EvQkMsRUErQks7QUFFTixRQUFJQyxRQUFRLEdBQUdULEVBQUUsQ0FBQ0ssSUFBSCxDQUFRLHFCQUFSLENBQWY7QUFDQUksSUFBQUEsUUFBUSxDQUFDQyxZQUFULENBQXNCVixFQUFFLENBQUNXLEtBQXpCLEVBQWdDQyxNQUFoQyxHQUF1QyxNQUFJSixLQUEzQztBQUNBUixJQUFBQSxFQUFFLENBQUNhLEtBQUgsQ0FBU0osUUFBVCxFQUNLSyxJQURMLENBQ1UsWUFBTTtBQUFFTCxNQUFBQSxRQUFRLENBQUNILE1BQVQsR0FBZ0IsSUFBaEI7QUFBdUIsS0FEekMsRUFFS1MsRUFGTCxDQUVRLENBRlIsRUFFVTtBQUFDQyxNQUFBQSxRQUFRLEVBQUNoQixFQUFFLENBQUNpQixFQUFILENBQU0sQ0FBQyxHQUFQLEVBQVcsR0FBWDtBQUFWLEtBRlYsRUFHS0YsRUFITCxDQUdRLENBSFIsRUFHVTtBQUFDQyxNQUFBQSxRQUFRLEVBQUNoQixFQUFFLENBQUNpQixFQUFILENBQU0sQ0FBQyxHQUFQLEVBQVcsR0FBWDtBQUFWLEtBSFYsRUFJS0MsS0FKTCxDQUlXLEdBSlgsRUFLS0osSUFMTCxDQUtVLFlBQU07QUFBRUwsTUFBQUEsUUFBUSxDQUFDSCxNQUFULEdBQWdCLEtBQWhCO0FBQXdCLEtBTDFDLEVBTUtGLEtBTkw7QUFPSCxHQTFDSSxDQTRDTDs7QUE1Q0ssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbmxldCBzZWxmO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHNlbGY9dGhpcztcclxuICAgICAgICBjYy5maW5kKCdDYW52YXMvR2FtZS9zY29yZS8xJykuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICBydW4oc2NvcmUpe1xyXG5cclxuICAgICAgICBsZXQgc2NvcmVMYWIgPSBjYy5maW5kKCdDYW52YXMvR2FtZS9zY29yZS8xJyk7XHJcbiAgICAgICAgc2NvcmVMYWIuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9XCIrXCIrc2NvcmU7XHJcbiAgICAgICAgY2MudHdlZW4oc2NvcmVMYWIpXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHsgc2NvcmVMYWIuYWN0aXZlPXRydWU7IH0pXHJcbiAgICAgICAgICAgIC50bygwLHtwb3NpdGlvbjpjYy52MigtMTAwLDEzMCl9KVxyXG4gICAgICAgICAgICAudG8oMSx7cG9zaXRpb246Y2MudjIoLTEwMCwyNDUpfSlcclxuICAgICAgICAgICAgLmRlbGF5KDAuNSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4geyBzY29yZUxhYi5hY3RpdmU9ZmFsc2U7IH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19