"use strict";
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