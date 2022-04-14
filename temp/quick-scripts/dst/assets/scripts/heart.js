
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/heart.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c94f9cVvGFGx73Qv9W4Be5r', 'heart');
// scripts/heart.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var heartcnt = [];
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
    for (var i = 0; i < 5; i++) {
      heartcnt[i] = cc.find("Canvas/Game/heartPanel/" + (i + 1));
    }

    this.closeHeart();
  },
  show: function show(cnt) {
    for (var i = 0; i < 5; i++) {
      heartcnt[i].active = false;
    }

    for (var _i = 0; _i < cnt; _i++) {
      heartcnt[_i].active = true;
    }
  },
  closeHeart: function closeHeart() {
    for (var i = 0; i < 5; i++) {
      heartcnt[i].active = false;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcaGVhcnQuanMiXSwibmFtZXMiOlsiaGVhcnRjbnQiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0IiwiaSIsImZpbmQiLCJjbG9zZUhlYXJ0Iiwic2hvdyIsImNudCIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxRQUFRLEdBQUMsRUFBYjtBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUSxHQUhQO0FBcUJMO0FBRUE7QUFFQUMsRUFBQUEsS0F6QkssbUJBeUJJO0FBQ0wsU0FBSSxJQUFJQyxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUMsQ0FBZCxFQUFnQkEsQ0FBQyxFQUFqQixFQUFvQjtBQUNoQk4sTUFBQUEsUUFBUSxDQUFDTSxDQUFELENBQVIsR0FBWUwsRUFBRSxDQUFDTSxJQUFILDhCQUFrQ0QsQ0FBQyxHQUFHLENBQXRDLEVBQVo7QUFFSDs7QUFDRCxTQUFLRSxVQUFMO0FBQ0gsR0EvQkk7QUFpQ0xDLEVBQUFBLElBakNLLGdCQWlDQUMsR0FqQ0EsRUFpQ0k7QUFDTCxTQUFJLElBQUlKLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQyxDQUFkLEVBQWdCQSxDQUFDLEVBQWpCLEVBQW9CO0FBQ2hCTixNQUFBQSxRQUFRLENBQUNNLENBQUQsQ0FBUixDQUFZSyxNQUFaLEdBQW1CLEtBQW5CO0FBQ0g7O0FBQ0QsU0FBSSxJQUFJTCxFQUFDLEdBQUMsQ0FBVixFQUFZQSxFQUFDLEdBQUNJLEdBQWQsRUFBa0JKLEVBQUMsRUFBbkIsRUFBc0I7QUFDbEJOLE1BQUFBLFFBQVEsQ0FBQ00sRUFBRCxDQUFSLENBQVlLLE1BQVosR0FBbUIsSUFBbkI7QUFDSDtBQUNKLEdBeENJO0FBeUNMSCxFQUFBQSxVQXpDSyx3QkF5Q087QUFDUixTQUFJLElBQUlGLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQyxDQUFkLEVBQWdCQSxDQUFDLEVBQWpCLEVBQW9CO0FBQ2hCTixNQUFBQSxRQUFRLENBQUNNLENBQUQsQ0FBUixDQUFZSyxNQUFaLEdBQW1CLEtBQW5CO0FBQ0g7QUFDSixHQTdDSSxDQThDTDs7QUE5Q0ssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbmxldCBoZWFydGNudD1bXTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBmb3IobGV0IGk9MDtpPDU7aSsrKXtcclxuICAgICAgICAgICAgaGVhcnRjbnRbaV09Y2MuZmluZChgQ2FudmFzL0dhbWUvaGVhcnRQYW5lbC8ke2kgKyAxfWApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbG9zZUhlYXJ0KCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNob3coY250KXtcclxuICAgICAgICBmb3IobGV0IGk9MDtpPDU7aSsrKXtcclxuICAgICAgICAgICAgaGVhcnRjbnRbaV0uYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IGk9MDtpPGNudDtpKyspe1xyXG4gICAgICAgICAgICBoZWFydGNudFtpXS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY2xvc2VIZWFydCgpe1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8NTtpKyspe1xyXG4gICAgICAgICAgICBoZWFydGNudFtpXS5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=