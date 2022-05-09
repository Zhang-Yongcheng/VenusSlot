
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

var PublicSetUp = require('PublicSetUp');

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    var button = this.node.getComponent(cc.Button);
    button.node.on('click', function () {
      cc.store.auto = false;
      console.log(cc.store.auto);
      var AutoPlayButton = cc.find('Canvas/Game/Machine/UI/AutoPlayButton');
      AutoPlayButton.active = false;
      var ManuaPlayButton = cc.find('Canvas/Game/Machine/UI/ManuaPlayButton');
      ManuaPlayButton.active = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYXV0b1BsYXlCdXR0b24uanMiXSwibmFtZXMiOlsiUHVibGljU2V0VXAiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJidXR0b24iLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiQnV0dG9uIiwib24iLCJzdG9yZSIsImF1dG8iLCJjb25zb2xlIiwibG9nIiwiQXV0b1BsYXlCdXR0b24iLCJmaW5kIiwiYWN0aXZlIiwiTWFudWFQbGF5QnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFdBQVcsR0FBQ0MsT0FBTyxDQUFDLGFBQUQsQ0FBdkI7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBRVBDLEVBQUFBLFVBQVUsRUFBRSxFQUZMO0FBT1BDLEVBQUFBLE1BUE8sb0JBT0U7QUFDUCxRQUFNQyxNQUFNLEdBQUcsS0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCUCxFQUFFLENBQUNRLE1BQTFCLENBQWY7QUFHQUgsSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVlHLEVBQVosQ0FBZSxPQUFmLEVBQXdCLFlBQU07QUFDNUJULE1BQUFBLEVBQUUsQ0FBQ1UsS0FBSCxDQUFTQyxJQUFULEdBQWdCLEtBQWhCO0FBQ0FDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZYixFQUFFLENBQUNVLEtBQUgsQ0FBU0MsSUFBckI7QUFDQSxVQUFNRyxjQUFjLEdBQUdkLEVBQUUsQ0FBQ2UsSUFBSCxDQUFRLHVDQUFSLENBQXZCO0FBQ0FELE1BQUFBLGNBQWMsQ0FBQ0UsTUFBZixHQUF3QixLQUF4QjtBQUNBLFVBQU1DLGVBQWUsR0FBR2pCLEVBQUUsQ0FBQ2UsSUFBSCxDQUFRLHdDQUFSLENBQXhCO0FBQ0FFLE1BQUFBLGVBQWUsQ0FBQ0QsTUFBaEIsR0FBeUIsSUFBekI7QUFHRCxLQVREO0FBVUQ7QUFyQk0sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IFB1YmxpY1NldFVwPXJlcXVpcmUoJ1B1YmxpY1NldFVwJyk7XHJcbmNjLkNsYXNzKHtcclxuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgcHJvcGVydGllczoge1xyXG5cclxuXHJcbiAgfSxcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgY29uc3QgYnV0dG9uID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG5cclxuXHJcbiAgICBidXR0b24ubm9kZS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNjLnN0b3JlLmF1dG8gPSBmYWxzZTtcclxuICAgICAgY29uc29sZS5sb2coY2Muc3RvcmUuYXV0byk7XHJcbiAgICAgIGNvbnN0IEF1dG9QbGF5QnV0dG9uID0gY2MuZmluZCgnQ2FudmFzL0dhbWUvTWFjaGluZS9VSS9BdXRvUGxheUJ1dHRvbicpO1xyXG4gICAgICBBdXRvUGxheUJ1dHRvbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgY29uc3QgTWFudWFQbGF5QnV0dG9uID0gY2MuZmluZCgnQ2FudmFzL0dhbWUvTWFjaGluZS9VSS9NYW51YVBsYXlCdXR0b24nKTtcclxuICAgICAgTWFudWFQbGF5QnV0dG9uLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICBcclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiJdfQ==