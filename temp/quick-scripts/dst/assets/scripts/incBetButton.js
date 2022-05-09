
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/incBetButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f2aafML1QxASK398CLTW68w', 'incBetButton');
// scripts/incBetButton.js

"use strict";

cc.Class({
  "extends": cc.Component,
  onLoad: function onLoad() {
    var button = this.node.getComponent(cc.Button);
    button.node.on('click', function () {
      var currentBetValue = cc.find('Canvas/Game/Machine/UI/BetPanel/Value').getComponent(cc.Label);
      var currentBet = parseFloat(currentBetValue.string);

      if (currentBet >= cc.store.minBet && currentBet < cc.store.maxBet) {
        if (currentBet <= 0.9) {
          currentBetValue.string = cc.store.currentBet = parseFloat((currentBet + 0.1).toPrecision(12));
        } else if (currentBet <= 9) {
          currentBetValue.string = cc.store.currentBet = currentBet + 1;
        } else {
          currentBetValue.string = cc.store.currentBet = currentBet + 10;
        }
      }
    });
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcaW5jQmV0QnV0dG9uLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJvbkxvYWQiLCJidXR0b24iLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiQnV0dG9uIiwib24iLCJjdXJyZW50QmV0VmFsdWUiLCJmaW5kIiwiTGFiZWwiLCJjdXJyZW50QmV0IiwicGFyc2VGbG9hdCIsInN0cmluZyIsInN0b3JlIiwibWluQmV0IiwibWF4QmV0IiwidG9QcmVjaXNpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBR1BDLEVBQUFBLE1BSE8sb0JBR0U7QUFDUCxRQUFNQyxNQUFNLEdBQUcsS0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCTixFQUFFLENBQUNPLE1BQTFCLENBQWY7QUFDQUgsSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVlHLEVBQVosQ0FBZSxPQUFmLEVBQXdCLFlBQU07QUFDNUIsVUFBTUMsZUFBZSxHQUFHVCxFQUFFLENBQUNVLElBQUgsQ0FBUSx1Q0FBUixFQUFpREosWUFBakQsQ0FBOEROLEVBQUUsQ0FBQ1csS0FBakUsQ0FBeEI7QUFDQSxVQUFNQyxVQUFVLEdBQUdDLFVBQVUsQ0FBQ0osZUFBZSxDQUFDSyxNQUFqQixDQUE3Qjs7QUFDQSxVQUFJRixVQUFVLElBQUlaLEVBQUUsQ0FBQ2UsS0FBSCxDQUFTQyxNQUF2QixJQUFpQ0osVUFBVSxHQUFHWixFQUFFLENBQUNlLEtBQUgsQ0FBU0UsTUFBM0QsRUFBbUU7QUFDakUsWUFBR0wsVUFBVSxJQUFFLEdBQWYsRUFBbUI7QUFDakJILFVBQUFBLGVBQWUsQ0FBQ0ssTUFBaEIsR0FBeUJkLEVBQUUsQ0FBQ2UsS0FBSCxDQUFTSCxVQUFULEdBQXFCQyxVQUFVLENBQUMsQ0FBQ0QsVUFBVSxHQUFHLEdBQWQsRUFBbUJNLFdBQW5CLENBQStCLEVBQS9CLENBQUQsQ0FBeEQ7QUFDRCxTQUZELE1BRU0sSUFBR04sVUFBVSxJQUFFLENBQWYsRUFBaUI7QUFDckJILFVBQUFBLGVBQWUsQ0FBQ0ssTUFBaEIsR0FBeUJkLEVBQUUsQ0FBQ2UsS0FBSCxDQUFTSCxVQUFULEdBQXNCQSxVQUFVLEdBQUcsQ0FBNUQ7QUFDRCxTQUZLLE1BRUQ7QUFDSEgsVUFBQUEsZUFBZSxDQUFDSyxNQUFoQixHQUF5QmQsRUFBRSxDQUFDZSxLQUFILENBQVNILFVBQVQsR0FBc0JBLFVBQVUsR0FBRyxFQUE1RDtBQUNEO0FBRUY7QUFDRixLQWJEO0FBY0Q7QUFuQk0sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgY29uc3QgYnV0dG9uID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgYnV0dG9uLm5vZGUub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50QmV0VmFsdWUgPSBjYy5maW5kKCdDYW52YXMvR2FtZS9NYWNoaW5lL1VJL0JldFBhbmVsL1ZhbHVlJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgY29uc3QgY3VycmVudEJldCA9IHBhcnNlRmxvYXQoY3VycmVudEJldFZhbHVlLnN0cmluZyk7XHJcbiAgICAgIGlmIChjdXJyZW50QmV0ID49IGNjLnN0b3JlLm1pbkJldCAmJiBjdXJyZW50QmV0IDwgY2Muc3RvcmUubWF4QmV0KSB7XHJcbiAgICAgICAgaWYoY3VycmVudEJldDw9MC45KXtcclxuICAgICAgICAgIGN1cnJlbnRCZXRWYWx1ZS5zdHJpbmcgPSBjYy5zdG9yZS5jdXJyZW50QmV0ID1wYXJzZUZsb2F0KChjdXJyZW50QmV0ICsgMC4xKS50b1ByZWNpc2lvbigxMikpIDtcclxuICAgICAgICB9ZWxzZSBpZihjdXJyZW50QmV0PD05KXtcclxuICAgICAgICAgIGN1cnJlbnRCZXRWYWx1ZS5zdHJpbmcgPSBjYy5zdG9yZS5jdXJyZW50QmV0ID0gY3VycmVudEJldCArIDE7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBjdXJyZW50QmV0VmFsdWUuc3RyaW5nID0gY2Muc3RvcmUuY3VycmVudEJldCA9IGN1cnJlbnRCZXQgKyAxMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiJdfQ==