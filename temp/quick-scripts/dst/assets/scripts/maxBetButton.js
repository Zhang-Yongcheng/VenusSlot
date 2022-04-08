
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/maxBetButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '425daQsnfJASJOUlZYhhJGG', 'maxBetButton');
// scripts/maxBetButton.js

"use strict";

cc.Class({
  "extends": cc.Component,
  onLoad: function onLoad() {
    var button = this.node.getComponent(cc.Button);
    button.node.on('click', function () {
      var currentBetValue = cc.find('Canvas/Game/Machine/UI/BetPanel/Value').getComponent(cc.Label);
      var currentBet = parseInt(currentBetValue.string);

      if (currentBet !== cc.store.maxBet) {
        currentBetValue.string = cc.store.currentBet = cc.store.maxBet;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWF4QmV0QnV0dG9uLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJvbkxvYWQiLCJidXR0b24iLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiQnV0dG9uIiwib24iLCJjdXJyZW50QmV0VmFsdWUiLCJmaW5kIiwiTGFiZWwiLCJjdXJyZW50QmV0IiwicGFyc2VJbnQiLCJzdHJpbmciLCJzdG9yZSIsIm1heEJldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDUCxhQUFTRCxFQUFFLENBQUNFLFNBREw7QUFHUEMsRUFBQUEsTUFITyxvQkFHRTtBQUNQLFFBQU1DLE1BQU0sR0FBRyxLQUFLQyxJQUFMLENBQVVDLFlBQVYsQ0FBdUJOLEVBQUUsQ0FBQ08sTUFBMUIsQ0FBZjtBQUNBSCxJQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWUcsRUFBWixDQUFlLE9BQWYsRUFBd0IsWUFBTTtBQUM1QixVQUFNQyxlQUFlLEdBQUdULEVBQUUsQ0FBQ1UsSUFBSCxDQUFRLHVDQUFSLEVBQWlESixZQUFqRCxDQUE4RE4sRUFBRSxDQUFDVyxLQUFqRSxDQUF4QjtBQUNBLFVBQU1DLFVBQVUsR0FBR0MsUUFBUSxDQUFDSixlQUFlLENBQUNLLE1BQWpCLENBQTNCOztBQUNBLFVBQUlGLFVBQVUsS0FBS1osRUFBRSxDQUFDZSxLQUFILENBQVNDLE1BQTVCLEVBQW9DO0FBQ2xDUCxRQUFBQSxlQUFlLENBQUNLLE1BQWhCLEdBQXlCZCxFQUFFLENBQUNlLEtBQUgsQ0FBU0gsVUFBVCxHQUFzQlosRUFBRSxDQUFDZSxLQUFILENBQVNDLE1BQXhEO0FBQ0Q7QUFDRixLQU5EO0FBT0Q7QUFaTSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICBjb25zdCBidXR0b24gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICBidXR0b24ubm9kZS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRCZXRWYWx1ZSA9IGNjLmZpbmQoJ0NhbnZhcy9HYW1lL01hY2hpbmUvVUkvQmV0UGFuZWwvVmFsdWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICBjb25zdCBjdXJyZW50QmV0ID0gcGFyc2VJbnQoY3VycmVudEJldFZhbHVlLnN0cmluZyk7XHJcbiAgICAgIGlmIChjdXJyZW50QmV0ICE9PSBjYy5zdG9yZS5tYXhCZXQpIHtcclxuICAgICAgICBjdXJyZW50QmV0VmFsdWUuc3RyaW5nID0gY2Muc3RvcmUuY3VycmVudEJldCA9IGNjLnN0b3JlLm1heEJldDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuIl19