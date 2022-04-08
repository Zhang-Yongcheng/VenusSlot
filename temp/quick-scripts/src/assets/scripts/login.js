"use strict";
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