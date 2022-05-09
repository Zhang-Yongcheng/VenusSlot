
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/login.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '85648I+CixBf4DWMENK4Ole', 'login');
// scripts/login.js

"use strict";

var _connectToServer = _interopRequireDefault(require("./connectToServer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

cc.Class({
  "extends": cc.Component,
  onLoad: function onLoad() {
    var accountEditBox = this.node.getChildByName('Account').getComponent(cc.EditBox);
    var passwordEditBox = this.node.getChildByName('Password').getComponent(cc.EditBox);
    var okButton = this.node.getChildByName('Ok').getComponent(cc.Button);
    okButton.node.on('click', function () {
      if (accountEditBox.string.length === 0 || passwordEditBox.string.length === 0) {
        return;
      }

      accountEditBox.enabled = false;
      passwordEditBox.enabled = false;
      okButton.interactable = false;
      (0, _connectToServer["default"])('213.139.235.73', 6380, accountEditBox.string, passwordEditBox.string);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbG9naW4uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsIm9uTG9hZCIsImFjY291bnRFZGl0Qm94Iiwibm9kZSIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50IiwiRWRpdEJveCIsInBhc3N3b3JkRWRpdEJveCIsIm9rQnV0dG9uIiwiQnV0dG9uIiwib24iLCJzdHJpbmciLCJsZW5ndGgiLCJlbmFibGVkIiwiaW50ZXJhY3RhYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBR1BDLEVBQUFBLE1BSE8sb0JBR0U7QUFDUCxRQUFNQyxjQUFjLEdBQUcsS0FBS0MsSUFBTCxDQUFVQyxjQUFWLENBQXlCLFNBQXpCLEVBQW9DQyxZQUFwQyxDQUFpRFAsRUFBRSxDQUFDUSxPQUFwRCxDQUF2QjtBQUNBLFFBQU1DLGVBQWUsR0FBRyxLQUFLSixJQUFMLENBQVVDLGNBQVYsQ0FBeUIsVUFBekIsRUFBcUNDLFlBQXJDLENBQWtEUCxFQUFFLENBQUNRLE9BQXJELENBQXhCO0FBQ0EsUUFBTUUsUUFBUSxHQUFHLEtBQUtMLElBQUwsQ0FBVUMsY0FBVixDQUF5QixJQUF6QixFQUErQkMsWUFBL0IsQ0FBNENQLEVBQUUsQ0FBQ1csTUFBL0MsQ0FBakI7QUFDQUQsSUFBQUEsUUFBUSxDQUFDTCxJQUFULENBQWNPLEVBQWQsQ0FBaUIsT0FBakIsRUFBMEIsWUFBTTtBQUM5QixVQUFJUixjQUFjLENBQUNTLE1BQWYsQ0FBc0JDLE1BQXRCLEtBQWlDLENBQWpDLElBQXNDTCxlQUFlLENBQUNJLE1BQWhCLENBQXVCQyxNQUF2QixLQUFrQyxDQUE1RSxFQUErRTtBQUM3RTtBQUNEOztBQUNEVixNQUFBQSxjQUFjLENBQUNXLE9BQWYsR0FBeUIsS0FBekI7QUFDQU4sTUFBQUEsZUFBZSxDQUFDTSxPQUFoQixHQUEwQixLQUExQjtBQUNBTCxNQUFBQSxRQUFRLENBQUNNLFlBQVQsR0FBd0IsS0FBeEI7QUFDQSx1Q0FBZ0IsZ0JBQWhCLEVBQWtDLElBQWxDLEVBQXdDWixjQUFjLENBQUNTLE1BQXZELEVBQStESixlQUFlLENBQUNJLE1BQS9FO0FBQ0QsS0FSRDtBQVNEO0FBaEJNLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25uZWN0VG9TZXJ2ZXIgZnJvbSAnLi9jb25uZWN0VG9TZXJ2ZXInO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgY29uc3QgYWNjb3VudEVkaXRCb3ggPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ0FjY291bnQnKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCk7XHJcbiAgICBjb25zdCBwYXNzd29yZEVkaXRCb3ggPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1Bhc3N3b3JkJykuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpO1xyXG4gICAgY29uc3Qgb2tCdXR0b24gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ09rJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICBva0J1dHRvbi5ub2RlLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgaWYgKGFjY291bnRFZGl0Qm94LnN0cmluZy5sZW5ndGggPT09IDAgfHwgcGFzc3dvcmRFZGl0Qm94LnN0cmluZy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgYWNjb3VudEVkaXRCb3guZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICBwYXNzd29yZEVkaXRCb3guZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICBva0J1dHRvbi5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgY29ubmVjdFRvU2VydmVyKCcyMTMuMTM5LjIzNS43MycsIDYzODAsIGFjY291bnRFZGl0Qm94LnN0cmluZywgcGFzc3dvcmRFZGl0Qm94LnN0cmluZyk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iXX0=