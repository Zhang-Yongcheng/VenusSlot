
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/autoPlayButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e82e68PrlpDUKUade1bQ3Zp', 'autoPlayButton');
// scripts/autoPlayButton.js

"use strict";

var PublicSetUp = require('PublicSetUp');

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    var button = this.node.getComponent(cc.Button);
    button.node.on('click', function () {
      cc.store.auto = false;
      console.log(cc.store.auto);
      var AutoPlayButton = cc.find('Canvas/Game/Machine/UI/AutoPlayButton');
      AutoPlayButton.active = false;
      AutoPlayButton.getComponent(cc.Button).interactable = false;
      var ManuaPlayButton = cc.find('Canvas/Game/Machine/UI/ManuaPlayButton');
      ManuaPlayButton.active = true;
      ManuaPlayButton.getComponent(cc.Button).interactable = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYXV0b1BsYXlCdXR0b24uanMiXSwibmFtZXMiOlsiUHVibGljU2V0VXAiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJidXR0b24iLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiQnV0dG9uIiwib24iLCJzdG9yZSIsImF1dG8iLCJjb25zb2xlIiwibG9nIiwiQXV0b1BsYXlCdXR0b24iLCJmaW5kIiwiYWN0aXZlIiwiaW50ZXJhY3RhYmxlIiwiTWFudWFQbGF5QnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFdBQVcsR0FBQ0MsT0FBTyxDQUFDLGFBQUQsQ0FBdkI7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBRVBDLEVBQUFBLFVBQVUsRUFBRSxFQUZMO0FBT1BDLEVBQUFBLE1BUE8sb0JBT0U7QUFDUCxRQUFNQyxNQUFNLEdBQUcsS0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCUCxFQUFFLENBQUNRLE1BQTFCLENBQWY7QUFHQUgsSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVlHLEVBQVosQ0FBZSxPQUFmLEVBQXdCLFlBQU07QUFDNUJULE1BQUFBLEVBQUUsQ0FBQ1UsS0FBSCxDQUFTQyxJQUFULEdBQWdCLEtBQWhCO0FBQ0FDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZYixFQUFFLENBQUNVLEtBQUgsQ0FBU0MsSUFBckI7QUFDQSxVQUFNRyxjQUFjLEdBQUdkLEVBQUUsQ0FBQ2UsSUFBSCxDQUFRLHVDQUFSLENBQXZCO0FBQ0FELE1BQUFBLGNBQWMsQ0FBQ0UsTUFBZixHQUF3QixLQUF4QjtBQUNBRixNQUFBQSxjQUFjLENBQUNQLFlBQWYsQ0FBNEJQLEVBQUUsQ0FBQ1EsTUFBL0IsRUFBdUNTLFlBQXZDLEdBQXNELEtBQXREO0FBQ0EsVUFBTUMsZUFBZSxHQUFHbEIsRUFBRSxDQUFDZSxJQUFILENBQVEsd0NBQVIsQ0FBeEI7QUFDQUcsTUFBQUEsZUFBZSxDQUFDRixNQUFoQixHQUF5QixJQUF6QjtBQUNBRSxNQUFBQSxlQUFlLENBQUNYLFlBQWhCLENBQTZCUCxFQUFFLENBQUNRLE1BQWhDLEVBQXdDUyxZQUF4QyxHQUF1RCxJQUF2RDtBQUdELEtBWEQ7QUFZRDtBQXZCTSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgUHVibGljU2V0VXA9cmVxdWlyZSgnUHVibGljU2V0VXAnKTtcclxuY2MuQ2xhc3Moe1xyXG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICBwcm9wZXJ0aWVzOiB7XHJcblxyXG5cclxuICB9LFxyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICBjb25zdCBidXR0b24gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcblxyXG5cclxuICAgIGJ1dHRvbi5ub2RlLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY2Muc3RvcmUuYXV0byA9IGZhbHNlO1xyXG4gICAgICBjb25zb2xlLmxvZyhjYy5zdG9yZS5hdXRvKTtcclxuICAgICAgY29uc3QgQXV0b1BsYXlCdXR0b24gPSBjYy5maW5kKCdDYW52YXMvR2FtZS9NYWNoaW5lL1VJL0F1dG9QbGF5QnV0dG9uJyk7XHJcbiAgICAgIEF1dG9QbGF5QnV0dG9uLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICBBdXRvUGxheUJ1dHRvbi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgY29uc3QgTWFudWFQbGF5QnV0dG9uID0gY2MuZmluZCgnQ2FudmFzL0dhbWUvTWFjaGluZS9VSS9NYW51YVBsYXlCdXR0b24nKTtcclxuICAgICAgTWFudWFQbGF5QnV0dG9uLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIE1hbnVhUGxheUJ1dHRvbi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG5cclxuICAgICAgXHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iXX0=