
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
    var message = cc.find("Canvas/Login/message").getComponent(cc.Label);
    accountEditBox.string = 'gtest001';
    passwordEditBox.string = 'gtest001';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTG9naW5TY2VuZS5qcyJdLCJuYW1lcyI6WyJQdWJsaWNTZXRVcCIsInJlcXVpcmUiLCJsb2FkQ291bnQiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIkF1ZGlvQ2xpcCIsInR5cGUiLCJvbkxvYWQiLCJhdWRpbzEiLCJzdGFydCIsImdldFVybFN0cmluZyIsImxvY2F0aW9uIiwiaHJlZiIsInVybCIsIlVSTCIsInNlYXJjaFBhcmFtcyIsImdldCIsImZpbmQiLCJhY3RpdmUiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsImFjY291bnRFZGl0Qm94IiwiZ2V0Q29tcG9uZW50IiwiRWRpdEJveCIsInBhc3N3b3JkRWRpdEJveCIsIm1lc3NhZ2UiLCJMYWJlbCIsInN0cmluZyIsIm9rQnV0dG9uIiwiQnV0dG9uIiwibm9kZSIsIm9uIiwibGVuZ3RoIiwibG9naW5UeXBlIiwiYWNjb3VudCIsInBhc3N3b3JkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFdBQVcsR0FBQ0MsT0FBTyxDQUFDLGFBQUQsQ0FBdkI7O0FBR0EsSUFBSUMsU0FBUyxHQUFHLENBQWhCO0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxTQUFTLEVBQUU7QUFDVCxpQkFBUyxFQURBO0FBRVRDLE1BQUFBLElBQUksRUFBRSxDQUFDTCxFQUFFLENBQUNJLFNBQUo7QUFGRztBQURELEdBSFA7QUFVTDtBQUVDRSxFQUFBQSxNQVpJLG9CQVlNO0FBQ1RULElBQUFBLFdBQVcsQ0FBQ1UsTUFBWixHQUFxQixLQUFLSCxTQUFMLENBQWUsQ0FBZixDQUFyQjtBQUlBLEdBakJHO0FBbUJMSSxFQUFBQSxLQW5CSyxtQkFtQkk7QUFFUDtBQUNBLFFBQUlDLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxJQUE1QjtBQUNBLFFBQUlDLEdBQUcsR0FBRyxJQUFJQyxHQUFKLENBQVFKLFlBQVIsQ0FBVjs7QUFFQSxRQUFHRyxHQUFHLENBQUNFLFlBQUosQ0FBaUJDLEdBQWpCLENBQXFCLFVBQXJCLEtBQWtDLElBQXJDLEVBQTBDO0FBQ3hDZixNQUFBQSxFQUFFLENBQUNnQixJQUFILENBQVEsY0FBUixFQUF3QkMsTUFBeEIsR0FBK0IsS0FBL0I7QUFDQWpCLE1BQUFBLEVBQUUsQ0FBQ2tCLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixNQUF0QjtBQUNBO0FBQ0QsS0FWTSxDQVlQOzs7QUFDQSxRQUFJQyxjQUFjLEdBQUdwQixFQUFFLENBQUNnQixJQUFILENBQVEsc0JBQVIsRUFBZ0NLLFlBQWhDLENBQTZDckIsRUFBRSxDQUFDc0IsT0FBaEQsQ0FBckI7QUFDRSxRQUFJQyxlQUFlLEdBQUd2QixFQUFFLENBQUNnQixJQUFILENBQVEsdUJBQVIsRUFBaUNLLFlBQWpDLENBQThDckIsRUFBRSxDQUFDc0IsT0FBakQsQ0FBdEI7QUFDQSxRQUFJRSxPQUFPLEdBQUd4QixFQUFFLENBQUNnQixJQUFILENBQVEsc0JBQVIsRUFBZ0NLLFlBQWhDLENBQTZDckIsRUFBRSxDQUFDeUIsS0FBaEQsQ0FBZDtBQUVBTCxJQUFBQSxjQUFjLENBQUNNLE1BQWYsR0FBc0IsVUFBdEI7QUFDQUgsSUFBQUEsZUFBZSxDQUFDRyxNQUFoQixHQUF1QixVQUF2QjtBQUNBLFFBQU1DLFFBQVEsR0FBRzNCLEVBQUUsQ0FBQ2dCLElBQUgsQ0FBUSxpQkFBUixFQUEyQkssWUFBM0IsQ0FBd0NyQixFQUFFLENBQUM0QixNQUEzQyxDQUFqQjtBQUVBRCxJQUFBQSxRQUFRLENBQUNFLElBQVQsQ0FBY0MsRUFBZCxDQUFpQixPQUFqQixFQUEwQixZQUFNO0FBQzlCLFVBQUlWLGNBQWMsQ0FBQ00sTUFBZixDQUFzQkssTUFBdEIsS0FBaUMsQ0FBakMsSUFBc0NSLGVBQWUsQ0FBQ0csTUFBaEIsQ0FBdUJLLE1BQXZCLEtBQWtDLENBQTVFLEVBQStFO0FBQzdFO0FBQ0Q7O0FBQ0RsQyxNQUFBQSxXQUFXLENBQUNtQyxTQUFaLEdBQXNCLENBQXRCO0FBQ0FuQyxNQUFBQSxXQUFXLENBQUNvQyxPQUFaLEdBQW9CYixjQUFjLENBQUNNLE1BQW5DO0FBQ0E3QixNQUFBQSxXQUFXLENBQUNxQyxRQUFaLEdBQXFCWCxlQUFlLENBQUNHLE1BQXJDO0FBQ0ExQixNQUFBQSxFQUFFLENBQUNnQixJQUFILENBQVEsYUFBUixFQUF1QkMsTUFBdkIsR0FBOEIsSUFBOUI7QUFFQWpCLE1BQUFBLEVBQUUsQ0FBQ2tCLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixNQUF0QjtBQUNELEtBVkQ7QUFlSCxHQXZESSxDQXlETDs7QUF6REssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IFB1YmxpY1NldFVwPXJlcXVpcmUoJ1B1YmxpY1NldFVwJyk7XHJcblxyXG5cclxubGV0IGxvYWRDb3VudCA9IDA7XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgIEF1ZGlvQ2xpcDoge1xyXG4gICAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgIHR5cGU6IFtjYy5BdWRpb0NsaXBdLFxyXG4gICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgIFB1YmxpY1NldFVwLmF1ZGlvMSA9IHRoaXMuQXVkaW9DbGlwWzBdO1xyXG5cclxuXHJcbiAgIFxyXG4gICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgICAgLy9Ub2tlbueZu+WFpVxyXG4gICAgICB2YXIgZ2V0VXJsU3RyaW5nID0gbG9jYXRpb24uaHJlZjtcclxuICAgICAgdmFyIHVybCA9IG5ldyBVUkwoZ2V0VXJsU3RyaW5nKTsgICBcclxuXHJcbiAgICAgIGlmKHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdXZWJUb2tlbicpIT1udWxsKXtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0xvZ2luXCIpLmFjdGl2ZT1mYWxzZVxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnc2xvdCcpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy/luLPomZ/nmbvlhaVcclxuICAgICAgbGV0IGFjY291bnRFZGl0Qm94ID0gY2MuZmluZChcIkNhbnZhcy9Mb2dpbi9BY2NvdW50XCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KTtcclxuICAgICAgICBsZXQgcGFzc3dvcmRFZGl0Qm94ID0gY2MuZmluZChcIkNhbnZhcy9Mb2dpbi9QYXNzd29yZFwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCk7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBjYy5maW5kKFwiQ2FudmFzL0xvZ2luL21lc3NhZ2VcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuXHJcbiAgICAgICAgYWNjb3VudEVkaXRCb3guc3RyaW5nPSdndGVzdDAwMSc7XHJcbiAgICAgICAgcGFzc3dvcmRFZGl0Qm94LnN0cmluZz0nZ3Rlc3QwMDEnXHJcbiAgICAgICAgY29uc3Qgb2tCdXR0b24gPSBjYy5maW5kKFwiQ2FudmFzL0xvZ2luL09rXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG5cclxuICAgICAgICBva0J1dHRvbi5ub2RlLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgIGlmIChhY2NvdW50RWRpdEJveC5zdHJpbmcubGVuZ3RoID09PSAwIHx8IHBhc3N3b3JkRWRpdEJveC5zdHJpbmcubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFB1YmxpY1NldFVwLmxvZ2luVHlwZT0wO1xyXG4gICAgICAgICAgUHVibGljU2V0VXAuYWNjb3VudD1hY2NvdW50RWRpdEJveC5zdHJpbmc7XHJcbiAgICAgICAgICBQdWJsaWNTZXRVcC5wYXNzd29yZD1wYXNzd29yZEVkaXRCb3guc3RyaW5nO1xyXG4gICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9sb2NrXCIpLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ3Nsb3QnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgIFxyXG4gICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=