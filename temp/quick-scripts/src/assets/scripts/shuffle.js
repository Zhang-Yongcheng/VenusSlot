"use strict";
cc._RF.push(module, '3088bIf7hFLLb+KojLFSOpO', 'shuffle');
// scripts/shuffle.js

"use strict";

exports.__esModule = true;
exports["default"] = shuffle;

function shuffle(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
  }
}

module.exports = exports["default"];

cc._RF.pop();