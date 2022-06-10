"use strict";
cc._RF.push(module, 'e0f0fpDjTFD5KItGQKTAbjQ', 'homeButton');
// scripts/homeButton.js

"use strict";

cc.Class({
  "extends": cc.Component,
  onLoad: function onLoad() {
    var _this = this;

    var button = this.node.getComponent(cc.Button);
    button.node.on('click', function () {
      var _cc$store, _cc$store2, _cc$store3;

      (_cc$store = cc.store) == null ? void 0 : _cc$store.gameServer.GetPI().disconnect();
      (_cc$store2 = cc.store) == null ? void 0 : _cc$store2.lobbyServer.GetPI().disconnect();
      (_cc$store3 = cc.store) == null ? void 0 : _cc$store3.mainServer.GetPI().disconnect();

      _this.scheduleOnce(function () {
        window.location.href("https://sa.bcbtop.top/");
      }, 1);
    });
  }
});

cc._RF.pop();