"use strict";
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