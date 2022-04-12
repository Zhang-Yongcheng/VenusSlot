
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
      AutoPlayButton.getComponent(cc.Button).interactable = true;
      var ManuaPlayButton = cc.find('Canvas/Game/Machine/UI/ManuaPlayButton');
      ManuaPlayButton.active = false;
      ManuaPlayButton.getComponent(cc.Button).interactable = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWFudWFsUGxheUJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJQdWJsaWNTZXRVcCIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsImJ1dHRvbiIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJCdXR0b24iLCJvbiIsInN0b3JlIiwiYXV0byIsImNvbnNvbGUiLCJsb2ciLCJBdXRvUGxheUJ1dHRvbiIsImZpbmQiLCJhY3RpdmUiLCJpbnRlcmFjdGFibGUiLCJNYW51YVBsYXlCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsV0FBVyxHQUFDQyxPQUFPLENBQUMsYUFBRCxDQUF2Qjs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFFTEMsRUFBQUEsVUFBVSxFQUFFLEVBRlA7QUFNTEMsRUFBQUEsTUFOSyxvQkFNSTtBQUNMLFFBQU1DLE1BQU0sR0FBRyxLQUFLQyxJQUFMLENBQVVDLFlBQVYsQ0FBdUJQLEVBQUUsQ0FBQ1EsTUFBMUIsQ0FBZjtBQUVGSCxJQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWUcsRUFBWixDQUFlLE9BQWYsRUFBd0IsWUFBTTtBQUM1QlQsTUFBQUEsRUFBRSxDQUFDVSxLQUFILENBQVNDLElBQVQsR0FBYyxJQUFkO0FBQ0FDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZYixFQUFFLENBQUNVLEtBQUgsQ0FBU0MsSUFBckI7QUFDQSxVQUFNRyxjQUFjLEdBQUdkLEVBQUUsQ0FBQ2UsSUFBSCxDQUFRLHVDQUFSLENBQXZCO0FBQ0FELE1BQUFBLGNBQWMsQ0FBQ0UsTUFBZixHQUF3QixJQUF4QjtBQUNBRixNQUFBQSxjQUFjLENBQUNQLFlBQWYsQ0FBNEJQLEVBQUUsQ0FBQ1EsTUFBL0IsRUFBdUNTLFlBQXZDLEdBQXNELElBQXREO0FBQ0EsVUFBTUMsZUFBZSxHQUFHbEIsRUFBRSxDQUFDZSxJQUFILENBQVEsd0NBQVIsQ0FBeEI7QUFDQUcsTUFBQUEsZUFBZSxDQUFDRixNQUFoQixHQUF5QixLQUF6QjtBQUNBRSxNQUFBQSxlQUFlLENBQUNYLFlBQWhCLENBQTZCUCxFQUFFLENBQUNRLE1BQWhDLEVBQXdDUyxZQUF4QyxHQUF1RCxLQUF2RDtBQUVELEtBVkQ7QUFXRDtBQXBCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgUHVibGljU2V0VXA9cmVxdWlyZSgnUHVibGljU2V0VXAnKTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgXHJcbiAgICB9LFxyXG4gIFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICBcclxuICAgICAgYnV0dG9uLm5vZGUub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNjLnN0b3JlLmF1dG89dHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjYy5zdG9yZS5hdXRvKTtcclxuICAgICAgICBjb25zdCBBdXRvUGxheUJ1dHRvbiA9IGNjLmZpbmQoJ0NhbnZhcy9HYW1lL01hY2hpbmUvVUkvQXV0b1BsYXlCdXR0b24nKTtcclxuICAgICAgICBBdXRvUGxheUJ1dHRvbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIEF1dG9QbGF5QnV0dG9uLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgTWFudWFQbGF5QnV0dG9uID0gY2MuZmluZCgnQ2FudmFzL0dhbWUvTWFjaGluZS9VSS9NYW51YVBsYXlCdXR0b24nKTtcclxuICAgICAgICBNYW51YVBsYXlCdXR0b24uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgTWFudWFQbGF5QnV0dG9uLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgIFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxuICAiXX0=