
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/soundOnButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ffb6fjQ0+RNLo0s6j9YDXb0', 'soundOnButton');
// scripts/soundOnButton.js

"use strict";

cc.Class({
  "extends": cc.Component,
  onLoad: function onLoad() {
    var button = this.node.getComponent(cc.Button);
    button.node.on('click', function () {
      if (cc.store.soundEnabled === false) {
        cc.store.soundEnabled = true;
        button.node.active = false;
        button.getComponent(cc.Button).interactable = false;
        var soundOffButton = cc.find('Canvas/Game/Machine/UI/Menu/SettingsPanel/SoundOffButton');
        soundOffButton.active = true;
        soundOffButton.getComponent(cc.Button).interactable = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc291bmRPbkJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwib25Mb2FkIiwiYnV0dG9uIiwibm9kZSIsImdldENvbXBvbmVudCIsIkJ1dHRvbiIsIm9uIiwic3RvcmUiLCJzb3VuZEVuYWJsZWQiLCJhY3RpdmUiLCJpbnRlcmFjdGFibGUiLCJzb3VuZE9mZkJ1dHRvbiIsImZpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBR1BDLEVBQUFBLE1BSE8sb0JBR0U7QUFDUCxRQUFNQyxNQUFNLEdBQUcsS0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCTixFQUFFLENBQUNPLE1BQTFCLENBQWY7QUFDQUgsSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVlHLEVBQVosQ0FBZSxPQUFmLEVBQXdCLFlBQU07QUFDNUIsVUFBSVIsRUFBRSxDQUFDUyxLQUFILENBQVNDLFlBQVQsS0FBMEIsS0FBOUIsRUFBcUM7QUFDbkNWLFFBQUFBLEVBQUUsQ0FBQ1MsS0FBSCxDQUFTQyxZQUFULEdBQXdCLElBQXhCO0FBRUFOLFFBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTSxNQUFaLEdBQXFCLEtBQXJCO0FBQ0FQLFFBQUFBLE1BQU0sQ0FBQ0UsWUFBUCxDQUFvQk4sRUFBRSxDQUFDTyxNQUF2QixFQUErQkssWUFBL0IsR0FBOEMsS0FBOUM7QUFFQSxZQUFNQyxjQUFjLEdBQUdiLEVBQUUsQ0FBQ2MsSUFBSCxDQUFRLDBEQUFSLENBQXZCO0FBQ0FELFFBQUFBLGNBQWMsQ0FBQ0YsTUFBZixHQUF3QixJQUF4QjtBQUNBRSxRQUFBQSxjQUFjLENBQUNQLFlBQWYsQ0FBNEJOLEVBQUUsQ0FBQ08sTUFBL0IsRUFBdUNLLFlBQXZDLEdBQXNELElBQXREO0FBQ0Q7QUFDRixLQVhEO0FBWUQ7QUFqQk0sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgY29uc3QgYnV0dG9uID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgYnV0dG9uLm5vZGUub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBpZiAoY2Muc3RvcmUuc291bmRFbmFibGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgIGNjLnN0b3JlLnNvdW5kRW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGJ1dHRvbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGJ1dHRvbi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3Qgc291bmRPZmZCdXR0b24gPSBjYy5maW5kKCdDYW52YXMvR2FtZS9NYWNoaW5lL1VJL01lbnUvU2V0dGluZ3NQYW5lbC9Tb3VuZE9mZkJ1dHRvbicpO1xyXG4gICAgICAgIHNvdW5kT2ZmQnV0dG9uLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgc291bmRPZmZCdXR0b24uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuIl19