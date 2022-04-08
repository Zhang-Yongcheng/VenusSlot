
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/soundOffButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c7e77eYJVZJbpCXbZ8oqtld', 'soundOffButton');
// scripts/soundOffButton.js

"use strict";

cc.Class({
  "extends": cc.Component,
  onLoad: function onLoad() {
    var button = this.node.getComponent(cc.Button);
    button.node.on('click', function () {
      if (cc.store.soundEnabled === true) {
        cc.store.soundEnabled = false;
        button.node.active = false;
        button.getComponent(cc.Button).interactable = false;
        var soundOnButton = cc.find('Canvas/Game/Machine/UI/Menu/SettingsPanel/SoundOnButton');
        soundOnButton.active = true;
        soundOnButton.getComponent(cc.Button).interactable = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc291bmRPZmZCdXR0b24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsIm9uTG9hZCIsImJ1dHRvbiIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJCdXR0b24iLCJvbiIsInN0b3JlIiwic291bmRFbmFibGVkIiwiYWN0aXZlIiwiaW50ZXJhY3RhYmxlIiwic291bmRPbkJ1dHRvbiIsImZpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBR1BDLEVBQUFBLE1BSE8sb0JBR0U7QUFDUCxRQUFNQyxNQUFNLEdBQUcsS0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCTixFQUFFLENBQUNPLE1BQTFCLENBQWY7QUFDQUgsSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVlHLEVBQVosQ0FBZSxPQUFmLEVBQXdCLFlBQU07QUFDNUIsVUFBSVIsRUFBRSxDQUFDUyxLQUFILENBQVNDLFlBQVQsS0FBMEIsSUFBOUIsRUFBb0M7QUFDbENWLFFBQUFBLEVBQUUsQ0FBQ1MsS0FBSCxDQUFTQyxZQUFULEdBQXdCLEtBQXhCO0FBRUFOLFFBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTSxNQUFaLEdBQXFCLEtBQXJCO0FBQ0FQLFFBQUFBLE1BQU0sQ0FBQ0UsWUFBUCxDQUFvQk4sRUFBRSxDQUFDTyxNQUF2QixFQUErQkssWUFBL0IsR0FBOEMsS0FBOUM7QUFFQSxZQUFNQyxhQUFhLEdBQUdiLEVBQUUsQ0FBQ2MsSUFBSCxDQUFRLHlEQUFSLENBQXRCO0FBQ0FELFFBQUFBLGFBQWEsQ0FBQ0YsTUFBZCxHQUF1QixJQUF2QjtBQUNBRSxRQUFBQSxhQUFhLENBQUNQLFlBQWQsQ0FBMkJOLEVBQUUsQ0FBQ08sTUFBOUIsRUFBc0NLLFlBQXRDLEdBQXFELElBQXJEO0FBQ0Q7QUFDRixLQVhEO0FBWUQ7QUFqQk0sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgY29uc3QgYnV0dG9uID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgYnV0dG9uLm5vZGUub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBpZiAoY2Muc3RvcmUuc291bmRFbmFibGVkID09PSB0cnVlKSB7XHJcbiAgICAgICAgY2Muc3RvcmUuc291bmRFbmFibGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGJ1dHRvbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGJ1dHRvbi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3Qgc291bmRPbkJ1dHRvbiA9IGNjLmZpbmQoJ0NhbnZhcy9HYW1lL01hY2hpbmUvVUkvTWVudS9TZXR0aW5nc1BhbmVsL1NvdW5kT25CdXR0b24nKTtcclxuICAgICAgICBzb3VuZE9uQnV0dG9uLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgc291bmRPbkJ1dHRvbi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iXX0=