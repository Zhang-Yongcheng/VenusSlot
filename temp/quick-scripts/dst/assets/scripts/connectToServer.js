
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/connectToServer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ad6388hSVFLlJETm5TwUemS', 'connectToServer');
// scripts/connectToServer.js

"use strict";

exports.__esModule = true;
exports["default"] = connectToServer;

var _BaseCmdLogic = require("./BaseCmdLogic");

var _handleGameCommand = _interopRequireDefault(require("./handleGameCommand"));

var _Photon_Interface = _interopRequireDefault(require("./Photon_Interface"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function connectToServer(serverHost, serverPort, account, password, type) {
  var mainServer = new _BaseCmdLogic.MainSrvCmdLogic(new _Photon_Interface["default"].PhotonIf('Ws', serverHost + ":" + serverPort));
  var lobbyServer = new _BaseCmdLogic.LobbySrvCmdLogic(101, 1);
  var gameServer = new _BaseCmdLogic.GameSrvBaseCmdLogic({});
  mainServer.SetLbSrvCmdLogicObj(lobbyServer);
  lobbyServer.SetGameSrvCmdLogicObj(gameServer);
  gameServer.SetGameCmdFunc(_handleGameCommand["default"]);
  cc.store.mainServer = mainServer;
  cc.store.lobbyServer = lobbyServer;
  cc.store.gameServer = gameServer;
  mainServer.RunLogin(account, password, type);
}

module.exports = exports["default"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29ubmVjdFRvU2VydmVyLmpzIl0sIm5hbWVzIjpbImNvbm5lY3RUb1NlcnZlciIsInNlcnZlckhvc3QiLCJzZXJ2ZXJQb3J0IiwiYWNjb3VudCIsInBhc3N3b3JkIiwidHlwZSIsIm1haW5TZXJ2ZXIiLCJNYWluU3J2Q21kTG9naWMiLCJQaG90b25Db250cm9sbGVyIiwiUGhvdG9uSWYiLCJsb2JieVNlcnZlciIsIkxvYmJ5U3J2Q21kTG9naWMiLCJnYW1lU2VydmVyIiwiR2FtZVNydkJhc2VDbWRMb2dpYyIsIlNldExiU3J2Q21kTG9naWNPYmoiLCJTZXRHYW1lU3J2Q21kTG9naWNPYmoiLCJTZXRHYW1lQ21kRnVuYyIsImhhbmRsZUdhbWVDb21tYW5kIiwiY2MiLCJzdG9yZSIsIlJ1bkxvZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBRWUsU0FBU0EsZUFBVCxDQUF5QkMsVUFBekIsRUFBcUNDLFVBQXJDLEVBQWlEQyxPQUFqRCxFQUEwREMsUUFBMUQsRUFBbUVDLElBQW5FLEVBQXlFO0FBQ3RGLE1BQU1DLFVBQVUsR0FBRyxJQUFJQyw2QkFBSixDQUFvQixJQUFJQyw2QkFBaUJDLFFBQXJCLENBQThCLElBQTlCLEVBQXVDUixVQUF2QyxTQUFxREMsVUFBckQsQ0FBcEIsQ0FBbkI7QUFDQSxNQUFNUSxXQUFXLEdBQUcsSUFBSUMsOEJBQUosQ0FBcUIsR0FBckIsRUFBMEIsQ0FBMUIsQ0FBcEI7QUFDQSxNQUFNQyxVQUFVLEdBQUcsSUFBSUMsaUNBQUosQ0FBd0IsRUFBeEIsQ0FBbkI7QUFFQVAsRUFBQUEsVUFBVSxDQUFDUSxtQkFBWCxDQUErQkosV0FBL0I7QUFDQUEsRUFBQUEsV0FBVyxDQUFDSyxxQkFBWixDQUFrQ0gsVUFBbEM7QUFDQUEsRUFBQUEsVUFBVSxDQUFDSSxjQUFYLENBQTBCQyw2QkFBMUI7QUFFQUMsRUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVNiLFVBQVQsR0FBc0JBLFVBQXRCO0FBQ0FZLEVBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTVCxXQUFULEdBQXVCQSxXQUF2QjtBQUNBUSxFQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBU1AsVUFBVCxHQUFzQkEsVUFBdEI7QUFFQU4sRUFBQUEsVUFBVSxDQUFDYyxRQUFYLENBQW9CakIsT0FBcEIsRUFBNkJDLFFBQTdCLEVBQXNDQyxJQUF0QztBQUNEIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lU3J2QmFzZUNtZExvZ2ljLCBMb2JieVNydkNtZExvZ2ljLCBNYWluU3J2Q21kTG9naWMgfSBmcm9tICcuL0Jhc2VDbWRMb2dpYyc7XHJcbmltcG9ydCBoYW5kbGVHYW1lQ29tbWFuZCBmcm9tICcuL2hhbmRsZUdhbWVDb21tYW5kJztcclxuaW1wb3J0IFBob3RvbkNvbnRyb2xsZXIgZnJvbSAnLi9QaG90b25fSW50ZXJmYWNlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbm5lY3RUb1NlcnZlcihzZXJ2ZXJIb3N0LCBzZXJ2ZXJQb3J0LCBhY2NvdW50LCBwYXNzd29yZCx0eXBlKSB7XHJcbiAgY29uc3QgbWFpblNlcnZlciA9IG5ldyBNYWluU3J2Q21kTG9naWMobmV3IFBob3RvbkNvbnRyb2xsZXIuUGhvdG9uSWYoJ1dzJywgYCR7c2VydmVySG9zdH06JHtzZXJ2ZXJQb3J0fWApKTtcclxuICBjb25zdCBsb2JieVNlcnZlciA9IG5ldyBMb2JieVNydkNtZExvZ2ljKDEwMSwgMSk7XHJcbiAgY29uc3QgZ2FtZVNlcnZlciA9IG5ldyBHYW1lU3J2QmFzZUNtZExvZ2ljKHt9KTtcclxuXHJcbiAgbWFpblNlcnZlci5TZXRMYlNydkNtZExvZ2ljT2JqKGxvYmJ5U2VydmVyKTtcclxuICBsb2JieVNlcnZlci5TZXRHYW1lU3J2Q21kTG9naWNPYmooZ2FtZVNlcnZlcik7XHJcbiAgZ2FtZVNlcnZlci5TZXRHYW1lQ21kRnVuYyhoYW5kbGVHYW1lQ29tbWFuZCk7XHJcblxyXG4gIGNjLnN0b3JlLm1haW5TZXJ2ZXIgPSBtYWluU2VydmVyO1xyXG4gIGNjLnN0b3JlLmxvYmJ5U2VydmVyID0gbG9iYnlTZXJ2ZXI7XHJcbiAgY2Muc3RvcmUuZ2FtZVNlcnZlciA9IGdhbWVTZXJ2ZXI7XHJcblxyXG4gIG1haW5TZXJ2ZXIuUnVuTG9naW4oYWNjb3VudCwgcGFzc3dvcmQsdHlwZSk7XHJcbn1cclxuIl19