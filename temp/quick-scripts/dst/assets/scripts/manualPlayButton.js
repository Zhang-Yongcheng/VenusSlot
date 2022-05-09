
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/manualPlayButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b9566A1+5FBDIzPZ8OTD7hx', 'manualPlayButton');
// scripts/manualPlayButton.js

"use strict";

var PublicSetUp = require('PublicSetUp');

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    var button = this.node.getComponent(cc.Button);
    button.node.on('click', function () {
      cc.store.auto = true;
      console.log(cc.store.auto);
      var AutoPlayButton = cc.find('Canvas/Game/Machine/UI/AutoPlayButton');
      AutoPlayButton.active = true;
      var ManuaPlayButton = cc.find('Canvas/Game/Machine/UI/ManuaPlayButton');
      ManuaPlayButton.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWFudWFsUGxheUJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJQdWJsaWNTZXRVcCIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsImJ1dHRvbiIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJCdXR0b24iLCJvbiIsInN0b3JlIiwiYXV0byIsImNvbnNvbGUiLCJsb2ciLCJBdXRvUGxheUJ1dHRvbiIsImZpbmQiLCJhY3RpdmUiLCJNYW51YVBsYXlCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsV0FBVyxHQUFDQyxPQUFPLENBQUMsYUFBRCxDQUF2Qjs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFFTEMsRUFBQUEsVUFBVSxFQUFFLEVBRlA7QUFNTEMsRUFBQUEsTUFOSyxvQkFNSTtBQUNMLFFBQU1DLE1BQU0sR0FBRyxLQUFLQyxJQUFMLENBQVVDLFlBQVYsQ0FBdUJQLEVBQUUsQ0FBQ1EsTUFBMUIsQ0FBZjtBQUVGSCxJQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWUcsRUFBWixDQUFlLE9BQWYsRUFBd0IsWUFBTTtBQUM1QlQsTUFBQUEsRUFBRSxDQUFDVSxLQUFILENBQVNDLElBQVQsR0FBYyxJQUFkO0FBQ0FDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZYixFQUFFLENBQUNVLEtBQUgsQ0FBU0MsSUFBckI7QUFDQSxVQUFNRyxjQUFjLEdBQUdkLEVBQUUsQ0FBQ2UsSUFBSCxDQUFRLHVDQUFSLENBQXZCO0FBQ0FELE1BQUFBLGNBQWMsQ0FBQ0UsTUFBZixHQUF3QixJQUF4QjtBQUNBLFVBQU1DLGVBQWUsR0FBR2pCLEVBQUUsQ0FBQ2UsSUFBSCxDQUFRLHdDQUFSLENBQXhCO0FBQ0FFLE1BQUFBLGVBQWUsQ0FBQ0QsTUFBaEIsR0FBeUIsS0FBekI7QUFFRCxLQVJEO0FBU0Q7QUFsQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IFB1YmxpY1NldFVwPXJlcXVpcmUoJ1B1YmxpY1NldFVwJyk7XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgIFxyXG4gICAgfSxcclxuICBcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjb25zdCBidXR0b24gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgXHJcbiAgICAgIGJ1dHRvbi5ub2RlLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjYy5zdG9yZS5hdXRvPXRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coY2Muc3RvcmUuYXV0byk7XHJcbiAgICAgICAgY29uc3QgQXV0b1BsYXlCdXR0b24gPSBjYy5maW5kKCdDYW52YXMvR2FtZS9NYWNoaW5lL1VJL0F1dG9QbGF5QnV0dG9uJyk7XHJcbiAgICAgICAgQXV0b1BsYXlCdXR0b24uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBNYW51YVBsYXlCdXR0b24gPSBjYy5maW5kKCdDYW52YXMvR2FtZS9NYWNoaW5lL1VJL01hbnVhUGxheUJ1dHRvbicpO1xyXG4gICAgICAgIE1hbnVhUGxheUJ1dHRvbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICBcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgIl19