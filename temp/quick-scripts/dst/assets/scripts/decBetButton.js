
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/decBetButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '71bd3ud10FANbZ3VcXhLvvA', 'decBetButton');
// scripts/decBetButton.js

"use strict";

cc.Class({
  "extends": cc.Component,
  onLoad: function onLoad() {
    var button = this.node.getComponent(cc.Button);
    button.node.on('click', function () {
      var currentBetValue = cc.find('Canvas/Game/Machine/UI/BetPanel/Value').getComponent(cc.Label);
      var currentBet = parseFloat(currentBetValue.string);

      if (currentBet > cc.store.minBet && currentBet <= cc.store.maxBet) {
        if (currentBet <= 1) {
          currentBetValue.string = cc.store.currentBet = parseFloat((currentBet - 0.1).toPrecision(12));
        } else if (currentBet <= 10) {
          currentBetValue.string = cc.store.currentBet = currentBet - 1;
        } else {
          currentBetValue.string = cc.store.currentBet = currentBet - 10;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZGVjQmV0QnV0dG9uLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJvbkxvYWQiLCJidXR0b24iLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiQnV0dG9uIiwib24iLCJjdXJyZW50QmV0VmFsdWUiLCJmaW5kIiwiTGFiZWwiLCJjdXJyZW50QmV0IiwicGFyc2VGbG9hdCIsInN0cmluZyIsInN0b3JlIiwibWluQmV0IiwibWF4QmV0IiwidG9QcmVjaXNpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBR1BDLEVBQUFBLE1BSE8sb0JBR0U7QUFDUCxRQUFNQyxNQUFNLEdBQUcsS0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCTixFQUFFLENBQUNPLE1BQTFCLENBQWY7QUFDQUgsSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVlHLEVBQVosQ0FBZSxPQUFmLEVBQXdCLFlBQU07QUFDNUIsVUFBTUMsZUFBZSxHQUFHVCxFQUFFLENBQUNVLElBQUgsQ0FBUSx1Q0FBUixFQUFpREosWUFBakQsQ0FBOEROLEVBQUUsQ0FBQ1csS0FBakUsQ0FBeEI7QUFDQSxVQUFNQyxVQUFVLEdBQUdDLFVBQVUsQ0FBQ0osZUFBZSxDQUFDSyxNQUFqQixDQUE3Qjs7QUFDQSxVQUFJRixVQUFVLEdBQUdaLEVBQUUsQ0FBQ2UsS0FBSCxDQUFTQyxNQUF0QixJQUFnQ0osVUFBVSxJQUFJWixFQUFFLENBQUNlLEtBQUgsQ0FBU0UsTUFBM0QsRUFBbUU7QUFDakUsWUFBR0wsVUFBVSxJQUFFLENBQWYsRUFBaUI7QUFDZkgsVUFBQUEsZUFBZSxDQUFDSyxNQUFoQixHQUF5QmQsRUFBRSxDQUFDZSxLQUFILENBQVNILFVBQVQsR0FBc0JDLFVBQVUsQ0FBQyxDQUFDRCxVQUFVLEdBQUcsR0FBZCxFQUFtQk0sV0FBbkIsQ0FBK0IsRUFBL0IsQ0FBRCxDQUF6RDtBQUNELFNBRkQsTUFFTSxJQUFHTixVQUFVLElBQUUsRUFBZixFQUFrQjtBQUN0QkgsVUFBQUEsZUFBZSxDQUFDSyxNQUFoQixHQUF5QmQsRUFBRSxDQUFDZSxLQUFILENBQVNILFVBQVQsR0FBc0JBLFVBQVUsR0FBRyxDQUE1RDtBQUNELFNBRkssTUFFRDtBQUNISCxVQUFBQSxlQUFlLENBQUNLLE1BQWhCLEdBQXlCZCxFQUFFLENBQUNlLEtBQUgsQ0FBU0gsVUFBVCxHQUFzQkEsVUFBVSxHQUFHLEVBQTVEO0FBQ0Q7QUFDRjtBQUNGLEtBWkQ7QUFhRDtBQWxCTSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICBjb25zdCBidXR0b24gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICBidXR0b24ubm9kZS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRCZXRWYWx1ZSA9IGNjLmZpbmQoJ0NhbnZhcy9HYW1lL01hY2hpbmUvVUkvQmV0UGFuZWwvVmFsdWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICBjb25zdCBjdXJyZW50QmV0ID0gcGFyc2VGbG9hdChjdXJyZW50QmV0VmFsdWUuc3RyaW5nKTtcclxuICAgICAgaWYgKGN1cnJlbnRCZXQgPiBjYy5zdG9yZS5taW5CZXQgJiYgY3VycmVudEJldCA8PSBjYy5zdG9yZS5tYXhCZXQpIHtcclxuICAgICAgICBpZihjdXJyZW50QmV0PD0xKXtcclxuICAgICAgICAgIGN1cnJlbnRCZXRWYWx1ZS5zdHJpbmcgPSBjYy5zdG9yZS5jdXJyZW50QmV0ID0gcGFyc2VGbG9hdCgoY3VycmVudEJldCAtIDAuMSkudG9QcmVjaXNpb24oMTIpKSA7XHJcbiAgICAgICAgfWVsc2UgaWYoY3VycmVudEJldDw9MTApe1xyXG4gICAgICAgICAgY3VycmVudEJldFZhbHVlLnN0cmluZyA9IGNjLnN0b3JlLmN1cnJlbnRCZXQgPSBjdXJyZW50QmV0IC0gMTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIGN1cnJlbnRCZXRWYWx1ZS5zdHJpbmcgPSBjYy5zdG9yZS5jdXJyZW50QmV0ID0gY3VycmVudEJldCAtIDEwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuIl19