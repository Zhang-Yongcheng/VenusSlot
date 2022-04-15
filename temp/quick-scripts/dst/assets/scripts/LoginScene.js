
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/LoginScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ef982lYOk5KN6pGFtYS93Kz', 'LoginScene');
// scripts/LoginScene.js

"use strict";

var PublicSetUp = require('PublicSetUp');

var loadCount = 0;
cc.Class({
  "extends": cc.Component,
  properties: {
    AudioClip: {
      "default": [],
      type: [cc.AudioClip]
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    PublicSetUp.audio1 = this.AudioClip[0];
  },
  start: function start() {
    //Token登入
    var getUrlString = location.href;
    var url = new URL(getUrlString);

    if (url.searchParams.get('WebToken') != null) {
      cc.find("Canvas/Login").active = false;
      cc.director.loadScene('slot');
      return;
    } //帳號登入


    var accountEditBox = cc.find("Canvas/Login/Account").getComponent(cc.EditBox);
    var passwordEditBox = cc.find("Canvas/Login/Password").getComponent(cc.EditBox);
    var message = cc.find("Canvas/Login/message").getComponent(cc.Label); //accountEditBox.string='gtest001';
    //passwordEditBox.string='gtest001';

    var okButton = cc.find("Canvas/Login/Ok").getComponent(cc.Button);
    okButton.node.on('click', function () {
      if (accountEditBox.string.length === 0 || passwordEditBox.string.length === 0) {
        return;
      }

      PublicSetUp.loginType = 0;
      PublicSetUp.account = accountEditBox.string;
      PublicSetUp.password = passwordEditBox.string;
      cc.find("Canvas/lock").active = true;
      cc.director.loadScene('slot');
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTG9naW5TY2VuZS5qcyJdLCJuYW1lcyI6WyJQdWJsaWNTZXRVcCIsInJlcXVpcmUiLCJsb2FkQ291bnQiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIkF1ZGlvQ2xpcCIsInR5cGUiLCJvbkxvYWQiLCJhdWRpbzEiLCJzdGFydCIsImdldFVybFN0cmluZyIsImxvY2F0aW9uIiwiaHJlZiIsInVybCIsIlVSTCIsInNlYXJjaFBhcmFtcyIsImdldCIsImZpbmQiLCJhY3RpdmUiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsImFjY291bnRFZGl0Qm94IiwiZ2V0Q29tcG9uZW50IiwiRWRpdEJveCIsInBhc3N3b3JkRWRpdEJveCIsIm1lc3NhZ2UiLCJMYWJlbCIsIm9rQnV0dG9uIiwiQnV0dG9uIiwibm9kZSIsIm9uIiwic3RyaW5nIiwibGVuZ3RoIiwibG9naW5UeXBlIiwiYWNjb3VudCIsInBhc3N3b3JkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFdBQVcsR0FBQ0MsT0FBTyxDQUFDLGFBQUQsQ0FBdkI7O0FBR0EsSUFBSUMsU0FBUyxHQUFHLENBQWhCO0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxTQUFTLEVBQUU7QUFDVCxpQkFBUyxFQURBO0FBRVRDLE1BQUFBLElBQUksRUFBRSxDQUFDTCxFQUFFLENBQUNJLFNBQUo7QUFGRztBQURELEdBSFA7QUFVTDtBQUVDRSxFQUFBQSxNQVpJLG9CQVlNO0FBQ1RULElBQUFBLFdBQVcsQ0FBQ1UsTUFBWixHQUFxQixLQUFLSCxTQUFMLENBQWUsQ0FBZixDQUFyQjtBQUlBLEdBakJHO0FBbUJMSSxFQUFBQSxLQW5CSyxtQkFtQkk7QUFFUDtBQUNBLFFBQUlDLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxJQUE1QjtBQUNBLFFBQUlDLEdBQUcsR0FBRyxJQUFJQyxHQUFKLENBQVFKLFlBQVIsQ0FBVjs7QUFFQSxRQUFHRyxHQUFHLENBQUNFLFlBQUosQ0FBaUJDLEdBQWpCLENBQXFCLFVBQXJCLEtBQWtDLElBQXJDLEVBQTBDO0FBQ3hDZixNQUFBQSxFQUFFLENBQUNnQixJQUFILENBQVEsY0FBUixFQUF3QkMsTUFBeEIsR0FBK0IsS0FBL0I7QUFDQWpCLE1BQUFBLEVBQUUsQ0FBQ2tCLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixNQUF0QjtBQUNBO0FBQ0QsS0FWTSxDQVlQOzs7QUFDQSxRQUFJQyxjQUFjLEdBQUdwQixFQUFFLENBQUNnQixJQUFILENBQVEsc0JBQVIsRUFBZ0NLLFlBQWhDLENBQTZDckIsRUFBRSxDQUFDc0IsT0FBaEQsQ0FBckI7QUFDRSxRQUFJQyxlQUFlLEdBQUd2QixFQUFFLENBQUNnQixJQUFILENBQVEsdUJBQVIsRUFBaUNLLFlBQWpDLENBQThDckIsRUFBRSxDQUFDc0IsT0FBakQsQ0FBdEI7QUFDQSxRQUFJRSxPQUFPLEdBQUd4QixFQUFFLENBQUNnQixJQUFILENBQVEsc0JBQVIsRUFBZ0NLLFlBQWhDLENBQTZDckIsRUFBRSxDQUFDeUIsS0FBaEQsQ0FBZCxDQWZLLENBaUJMO0FBQ0E7O0FBQ0EsUUFBTUMsUUFBUSxHQUFHMUIsRUFBRSxDQUFDZ0IsSUFBSCxDQUFRLGlCQUFSLEVBQTJCSyxZQUEzQixDQUF3Q3JCLEVBQUUsQ0FBQzJCLE1BQTNDLENBQWpCO0FBRUFELElBQUFBLFFBQVEsQ0FBQ0UsSUFBVCxDQUFjQyxFQUFkLENBQWlCLE9BQWpCLEVBQTBCLFlBQU07QUFDOUIsVUFBSVQsY0FBYyxDQUFDVSxNQUFmLENBQXNCQyxNQUF0QixLQUFpQyxDQUFqQyxJQUFzQ1IsZUFBZSxDQUFDTyxNQUFoQixDQUF1QkMsTUFBdkIsS0FBa0MsQ0FBNUUsRUFBK0U7QUFDN0U7QUFDRDs7QUFDRGxDLE1BQUFBLFdBQVcsQ0FBQ21DLFNBQVosR0FBc0IsQ0FBdEI7QUFDQW5DLE1BQUFBLFdBQVcsQ0FBQ29DLE9BQVosR0FBb0JiLGNBQWMsQ0FBQ1UsTUFBbkM7QUFDQWpDLE1BQUFBLFdBQVcsQ0FBQ3FDLFFBQVosR0FBcUJYLGVBQWUsQ0FBQ08sTUFBckM7QUFDQTlCLE1BQUFBLEVBQUUsQ0FBQ2dCLElBQUgsQ0FBUSxhQUFSLEVBQXVCQyxNQUF2QixHQUE4QixJQUE5QjtBQUVBakIsTUFBQUEsRUFBRSxDQUFDa0IsUUFBSCxDQUFZQyxTQUFaLENBQXNCLE1BQXRCO0FBQ0QsS0FWRDtBQWVILEdBdkRJLENBeURMOztBQXpESyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgUHVibGljU2V0VXA9cmVxdWlyZSgnUHVibGljU2V0VXAnKTtcclxuXHJcblxyXG5sZXQgbG9hZENvdW50ID0gMDtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgQXVkaW9DbGlwOiB7XHJcbiAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgdHlwZTogW2NjLkF1ZGlvQ2xpcF0sXHJcbiAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAgb25Mb2FkICgpIHtcclxuICAgICAgUHVibGljU2V0VXAuYXVkaW8xID0gdGhpcy5BdWRpb0NsaXBbMF07XHJcblxyXG5cclxuICAgXHJcbiAgICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgICAvL1Rva2Vu55m75YWlXHJcbiAgICAgIHZhciBnZXRVcmxTdHJpbmcgPSBsb2NhdGlvbi5ocmVmO1xyXG4gICAgICB2YXIgdXJsID0gbmV3IFVSTChnZXRVcmxTdHJpbmcpOyAgIFxyXG5cclxuICAgICAgaWYodXJsLnNlYXJjaFBhcmFtcy5nZXQoJ1dlYlRva2VuJykhPW51bGwpe1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTG9naW5cIikuYWN0aXZlPWZhbHNlXHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdzbG90Jyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvL+W4s+iZn+eZu+WFpVxyXG4gICAgICBsZXQgYWNjb3VudEVkaXRCb3ggPSBjYy5maW5kKFwiQ2FudmFzL0xvZ2luL0FjY291bnRcIikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpO1xyXG4gICAgICAgIGxldCBwYXNzd29yZEVkaXRCb3ggPSBjYy5maW5kKFwiQ2FudmFzL0xvZ2luL1Bhc3N3b3JkXCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KTtcclxuICAgICAgICBsZXQgbWVzc2FnZSA9IGNjLmZpbmQoXCJDYW52YXMvTG9naW4vbWVzc2FnZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG5cclxuICAgICAgICAvL2FjY291bnRFZGl0Qm94LnN0cmluZz0nZ3Rlc3QwMDEnO1xyXG4gICAgICAgIC8vcGFzc3dvcmRFZGl0Qm94LnN0cmluZz0nZ3Rlc3QwMDEnO1xyXG4gICAgICAgIGNvbnN0IG9rQnV0dG9uID0gY2MuZmluZChcIkNhbnZhcy9Mb2dpbi9Pa1wiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuXHJcbiAgICAgICAgb2tCdXR0b24ubm9kZS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoYWNjb3VudEVkaXRCb3guc3RyaW5nLmxlbmd0aCA9PT0gMCB8fCBwYXNzd29yZEVkaXRCb3guc3RyaW5nLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBQdWJsaWNTZXRVcC5sb2dpblR5cGU9MDtcclxuICAgICAgICAgIFB1YmxpY1NldFVwLmFjY291bnQ9YWNjb3VudEVkaXRCb3guc3RyaW5nO1xyXG4gICAgICAgICAgUHVibGljU2V0VXAucGFzc3dvcmQ9cGFzc3dvcmRFZGl0Qm94LnN0cmluZztcclxuICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvbG9ja1wiKS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdzbG90Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICBcclxuICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19