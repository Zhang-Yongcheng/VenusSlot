"use strict";
cc._RF.push(module, 'ea41dwm6KNGRr/Hhs6XSq53', 'requestTableInfo');
// scripts/requestTableInfo.js

"use strict";

exports.__esModule = true;
exports["default"] = requestTableInfo;

function requestTableInfo() {
  var _cc$store;

  (_cc$store = cc.store) == null ? void 0 : _cc$store.gameServer.GetPI().sendData(3161);
}

module.exports = exports["default"];

cc._RF.pop();