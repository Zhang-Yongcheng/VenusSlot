
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

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {//   cc.resources.loadDir("Music/sound/", cc.AudioClip, function (err, Clip) {
    //     if (err) {
    //         cc.error(err);
    //         return;
    //     } else {
    //         for (let i = 0; i < Clip.length; i++) {
    //             PublicSetUp.audio[Clip[i].name] = Clip[i];
    //         }
    //         cc.log(PublicSetUp.audio);
    //     }
    // });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTG9naW5TY2VuZS5qcyJdLCJuYW1lcyI6WyJQdWJsaWNTZXRVcCIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsInN0YXJ0IiwiZ2V0VXJsU3RyaW5nIiwibG9jYXRpb24iLCJocmVmIiwidXJsIiwiVVJMIiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwiZmluZCIsImFjdGl2ZSIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwiYWNjb3VudEVkaXRCb3giLCJnZXRDb21wb25lbnQiLCJFZGl0Qm94IiwicGFzc3dvcmRFZGl0Qm94IiwibWVzc2FnZSIsIkxhYmVsIiwic3RyaW5nIiwib2tCdXR0b24iLCJCdXR0b24iLCJub2RlIiwib24iLCJsZW5ndGgiLCJsb2dpblR5cGUiLCJhY2NvdW50IiwicGFzc3dvcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsV0FBVyxHQUFDQyxPQUFPLENBQUMsYUFBRCxDQUF2Qjs7QUFFQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFPTDtBQUVDQyxFQUFBQSxNQVRJLG9CQVNNLENBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlFLEdBekJHO0FBMkJMQyxFQUFBQSxLQTNCSyxtQkEyQkk7QUFHUDtBQUNBLFFBQUlDLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxJQUE1QjtBQUNBLFFBQUlDLEdBQUcsR0FBRyxJQUFJQyxHQUFKLENBQVFKLFlBQVIsQ0FBVjs7QUFFQSxRQUFHRyxHQUFHLENBQUNFLFlBQUosQ0FBaUJDLEdBQWpCLENBQXFCLFVBQXJCLEtBQWtDLElBQXJDLEVBQTBDO0FBQ3hDWixNQUFBQSxFQUFFLENBQUNhLElBQUgsQ0FBUSxjQUFSLEVBQXdCQyxNQUF4QixHQUErQixLQUEvQjtBQUNBZCxNQUFBQSxFQUFFLENBQUNlLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixNQUF0QjtBQUNBO0FBQ0QsS0FYTSxDQWFQOzs7QUFDQSxRQUFJQyxjQUFjLEdBQUdqQixFQUFFLENBQUNhLElBQUgsQ0FBUSxzQkFBUixFQUFnQ0ssWUFBaEMsQ0FBNkNsQixFQUFFLENBQUNtQixPQUFoRCxDQUFyQjtBQUNFLFFBQUlDLGVBQWUsR0FBR3BCLEVBQUUsQ0FBQ2EsSUFBSCxDQUFRLHVCQUFSLEVBQWlDSyxZQUFqQyxDQUE4Q2xCLEVBQUUsQ0FBQ21CLE9BQWpELENBQXRCO0FBQ0EsUUFBSUUsT0FBTyxHQUFHckIsRUFBRSxDQUFDYSxJQUFILENBQVEsc0JBQVIsRUFBZ0NLLFlBQWhDLENBQTZDbEIsRUFBRSxDQUFDc0IsS0FBaEQsQ0FBZDtBQUVBTCxJQUFBQSxjQUFjLENBQUNNLE1BQWYsR0FBc0IsVUFBdEI7QUFDQUgsSUFBQUEsZUFBZSxDQUFDRyxNQUFoQixHQUF1QixVQUF2QjtBQUNBLFFBQU1DLFFBQVEsR0FBR3hCLEVBQUUsQ0FBQ2EsSUFBSCxDQUFRLGlCQUFSLEVBQTJCSyxZQUEzQixDQUF3Q2xCLEVBQUUsQ0FBQ3lCLE1BQTNDLENBQWpCO0FBRUFELElBQUFBLFFBQVEsQ0FBQ0UsSUFBVCxDQUFjQyxFQUFkLENBQWlCLE9BQWpCLEVBQTBCLFlBQU07QUFDOUIsVUFBSVYsY0FBYyxDQUFDTSxNQUFmLENBQXNCSyxNQUF0QixLQUFpQyxDQUFqQyxJQUFzQ1IsZUFBZSxDQUFDRyxNQUFoQixDQUF1QkssTUFBdkIsS0FBa0MsQ0FBNUUsRUFBK0U7QUFDN0U7QUFDRDs7QUFDRDlCLE1BQUFBLFdBQVcsQ0FBQytCLFNBQVosR0FBc0IsQ0FBdEI7QUFDQS9CLE1BQUFBLFdBQVcsQ0FBQ2dDLE9BQVosR0FBb0JiLGNBQWMsQ0FBQ00sTUFBbkM7QUFDQXpCLE1BQUFBLFdBQVcsQ0FBQ2lDLFFBQVosR0FBcUJYLGVBQWUsQ0FBQ0csTUFBckM7QUFDQXZCLE1BQUFBLEVBQUUsQ0FBQ2EsSUFBSCxDQUFRLGFBQVIsRUFBdUJDLE1BQXZCLEdBQThCLElBQTlCO0FBRUFkLE1BQUFBLEVBQUUsQ0FBQ2UsUUFBSCxDQUFZQyxTQUFaLENBQXNCLE1BQXRCO0FBQ0QsS0FWRDtBQWVILEdBaEVJLENBa0VMOztBQWxFSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgUHVibGljU2V0VXA9cmVxdWlyZSgnUHVibGljU2V0VXAnKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgICBvbkxvYWQgKCkge1xyXG4gICAgLy8gICBjYy5yZXNvdXJjZXMubG9hZERpcihcIk11c2ljL3NvdW5kL1wiLCBjYy5BdWRpb0NsaXAsIGZ1bmN0aW9uIChlcnIsIENsaXApIHtcclxuICAgIC8vICAgICBpZiAoZXJyKSB7XHJcbiAgICAvLyAgICAgICAgIGNjLmVycm9yKGVycik7XHJcbiAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IENsaXAubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgICAgIFB1YmxpY1NldFVwLmF1ZGlvW0NsaXBbaV0ubmFtZV0gPSBDbGlwW2ldO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIGNjLmxvZyhQdWJsaWNTZXRVcC5hdWRpbyk7XHJcblxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0pO1xyXG5cclxuXHJcbiAgIFxyXG4gICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIC8vVG9rZW7nmbvlhaVcclxuICAgICAgdmFyIGdldFVybFN0cmluZyA9IGxvY2F0aW9uLmhyZWY7XHJcbiAgICAgIHZhciB1cmwgPSBuZXcgVVJMKGdldFVybFN0cmluZyk7ICAgXHJcblxyXG4gICAgICBpZih1cmwuc2VhcmNoUGFyYW1zLmdldCgnV2ViVG9rZW4nKSE9bnVsbCl7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9Mb2dpblwiKS5hY3RpdmU9ZmFsc2VcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ3Nsb3QnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8v5biz6Jmf55m75YWlXHJcbiAgICAgIGxldCBhY2NvdW50RWRpdEJveCA9IGNjLmZpbmQoXCJDYW52YXMvTG9naW4vQWNjb3VudFwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCk7XHJcbiAgICAgICAgbGV0IHBhc3N3b3JkRWRpdEJveCA9IGNjLmZpbmQoXCJDYW52YXMvTG9naW4vUGFzc3dvcmRcIikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpO1xyXG4gICAgICAgIGxldCBtZXNzYWdlID0gY2MuZmluZChcIkNhbnZhcy9Mb2dpbi9tZXNzYWdlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcblxyXG4gICAgICAgIGFjY291bnRFZGl0Qm94LnN0cmluZz0nZ3Rlc3QwMDEnO1xyXG4gICAgICAgIHBhc3N3b3JkRWRpdEJveC5zdHJpbmc9J2d0ZXN0MDAxJztcclxuICAgICAgICBjb25zdCBva0J1dHRvbiA9IGNjLmZpbmQoXCJDYW52YXMvTG9naW4vT2tcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcblxyXG4gICAgICAgIG9rQnV0dG9uLm5vZGUub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGFjY291bnRFZGl0Qm94LnN0cmluZy5sZW5ndGggPT09IDAgfHwgcGFzc3dvcmRFZGl0Qm94LnN0cmluZy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgUHVibGljU2V0VXAubG9naW5UeXBlPTA7XHJcbiAgICAgICAgICBQdWJsaWNTZXRVcC5hY2NvdW50PWFjY291bnRFZGl0Qm94LnN0cmluZztcclxuICAgICAgICAgIFB1YmxpY1NldFVwLnBhc3N3b3JkPXBhc3N3b3JkRWRpdEJveC5zdHJpbmc7XHJcbiAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2xvY2tcIikuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnc2xvdCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==