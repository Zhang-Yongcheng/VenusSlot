
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/heart.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c94f9cVvGFGx73Qv9W4Be5r', 'heart');
// scripts/heart.js

"use strict";

var PublicSetUp = require('PublicSetUp');

var heartcnt = [];
var pos = [[570, 292], [570, 196], [570, 98], [570, 0], [570, -103]];
cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    for (var i = 0; i < 5; i++) {
      heartcnt[i] = cc.find("Canvas/Game/heartPanel/" + (i + 1));
    }

    this.closeHeart();
  },
  show: function show(cnt) {
    if (cnt != 0 && heartcnt[cnt].active == false) {
      if (PublicSetUp.sound == 1) {
        cc.audioEngine.playEffect(PublicSetUp.audio["0012"], false);
      }

      heartcnt[cnt].active = true;
      cc.tween(heartcnt[cnt]).to(0, {
        scale: 0.5,
        position: cc.v2(-117, -23)
      }).to(1, {
        scale: 1,
        position: cc.v2(pos[cnt][0], pos[cnt][1])
      }).start();
    }

    if (cnt == 0) {
      this.closeHeart();
    } // for(let i=0;i<5;i++){
    //     heartcnt[i].active=false;
    // }
    // for(let i=0;i<cnt;i++){
    //     heartcnt[i].active=true;
    // }

  },
  closeHeart: function closeHeart() {
    for (var i = 0; i < 5; i++) {
      heartcnt[i].active = false;
      heartcnt[i].setPosition(-177, -23, 0);
    }
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcaGVhcnQuanMiXSwibmFtZXMiOlsiUHVibGljU2V0VXAiLCJyZXF1aXJlIiwiaGVhcnRjbnQiLCJwb3MiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0IiwiaSIsImZpbmQiLCJjbG9zZUhlYXJ0Iiwic2hvdyIsImNudCIsImFjdGl2ZSIsInNvdW5kIiwiYXVkaW9FbmdpbmUiLCJwbGF5RWZmZWN0IiwiYXVkaW8iLCJ0d2VlbiIsInRvIiwic2NhbGUiLCJwb3NpdGlvbiIsInYyIiwic2V0UG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsV0FBVyxHQUFDQyxPQUFPLENBQUMsYUFBRCxDQUF2Qjs7QUFHQSxJQUFJQyxRQUFRLEdBQUMsRUFBYjtBQUNBLElBQUlDLEdBQUcsR0FBQyxDQUFDLENBQUMsR0FBRCxFQUFLLEdBQUwsQ0FBRCxFQUFXLENBQUMsR0FBRCxFQUFLLEdBQUwsQ0FBWCxFQUFxQixDQUFDLEdBQUQsRUFBSyxFQUFMLENBQXJCLEVBQThCLENBQUMsR0FBRCxFQUFLLENBQUwsQ0FBOUIsRUFBc0MsQ0FBQyxHQUFELEVBQUssQ0FBQyxHQUFOLENBQXRDLENBQVI7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLENBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZlEsR0FIUDtBQXFCTDtBQUVBO0FBRUFDLEVBQUFBLEtBekJLLG1CQXlCSTtBQUNMLFNBQUksSUFBSUMsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDLENBQWQsRUFBZ0JBLENBQUMsRUFBakIsRUFBb0I7QUFDaEJQLE1BQUFBLFFBQVEsQ0FBQ08sQ0FBRCxDQUFSLEdBQVlMLEVBQUUsQ0FBQ00sSUFBSCw4QkFBa0NELENBQUMsR0FBRyxDQUF0QyxFQUFaO0FBRUg7O0FBR0QsU0FBS0UsVUFBTDtBQUdILEdBbkNJO0FBcUNMQyxFQUFBQSxJQXJDSyxnQkFxQ0FDLEdBckNBLEVBcUNJO0FBQ0wsUUFBR0EsR0FBRyxJQUFFLENBQUwsSUFBVVgsUUFBUSxDQUFDVyxHQUFELENBQVIsQ0FBY0MsTUFBZCxJQUFzQixLQUFuQyxFQUF5QztBQUNyQyxVQUFHZCxXQUFXLENBQUNlLEtBQVosSUFBbUIsQ0FBdEIsRUFBd0I7QUFFcEJYLFFBQUFBLEVBQUUsQ0FBQ1ksV0FBSCxDQUFlQyxVQUFmLENBQTBCakIsV0FBVyxDQUFDa0IsS0FBWixDQUFrQixNQUFsQixDQUExQixFQUFxRCxLQUFyRDtBQUNEOztBQUNIaEIsTUFBQUEsUUFBUSxDQUFDVyxHQUFELENBQVIsQ0FBY0MsTUFBZCxHQUFxQixJQUFyQjtBQUNBVixNQUFBQSxFQUFFLENBQUNlLEtBQUgsQ0FBU2pCLFFBQVEsQ0FBQ1csR0FBRCxDQUFqQixFQUNDTyxFQURELENBQ0ksQ0FESixFQUNNO0FBQUNDLFFBQUFBLEtBQUssRUFBQyxHQUFQO0FBQVdDLFFBQUFBLFFBQVEsRUFBQ2xCLEVBQUUsQ0FBQ21CLEVBQUgsQ0FBTSxDQUFDLEdBQVAsRUFBVyxDQUFDLEVBQVo7QUFBcEIsT0FETixFQUVDSCxFQUZELENBRUksQ0FGSixFQUVNO0FBQUNDLFFBQUFBLEtBQUssRUFBQyxDQUFQO0FBQVNDLFFBQUFBLFFBQVEsRUFBQ2xCLEVBQUUsQ0FBQ21CLEVBQUgsQ0FBTXBCLEdBQUcsQ0FBQ1UsR0FBRCxDQUFILENBQVMsQ0FBVCxDQUFOLEVBQWtCVixHQUFHLENBQUNVLEdBQUQsQ0FBSCxDQUFTLENBQVQsQ0FBbEI7QUFBbEIsT0FGTixFQUdDTCxLQUhEO0FBTUg7O0FBQ0QsUUFBR0ssR0FBRyxJQUFFLENBQVIsRUFBVTtBQUNOLFdBQUtGLFVBQUw7QUFDSCxLQWhCSSxDQWlCTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUgsR0E3REk7QUE4RExBLEVBQUFBLFVBOURLLHdCQThETztBQUNSLFNBQUksSUFBSUYsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDLENBQWQsRUFBZ0JBLENBQUMsRUFBakIsRUFBb0I7QUFDaEJQLE1BQUFBLFFBQVEsQ0FBQ08sQ0FBRCxDQUFSLENBQVlLLE1BQVosR0FBbUIsS0FBbkI7QUFDQVosTUFBQUEsUUFBUSxDQUFDTyxDQUFELENBQVIsQ0FBWWUsV0FBWixDQUF3QixDQUFDLEdBQXpCLEVBQTZCLENBQUMsRUFBOUIsRUFBaUMsQ0FBakM7QUFDSDtBQUNKLEdBbkVJLENBb0VMOztBQXBFSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgUHVibGljU2V0VXA9cmVxdWlyZSgnUHVibGljU2V0VXAnKTtcclxuXHJcblxyXG5sZXQgaGVhcnRjbnQ9W107XHJcbmxldCBwb3M9W1s1NzAsMjkyXSxbNTcwLDE5Nl0sWzU3MCw5OF0sWzU3MCwwXSxbNTcwLC0xMDNdXTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBmb3IobGV0IGk9MDtpPDU7aSsrKXtcclxuICAgICAgICAgICAgaGVhcnRjbnRbaV09Y2MuZmluZChgQ2FudmFzL0dhbWUvaGVhcnRQYW5lbC8ke2kgKyAxfWApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHRoaXMuY2xvc2VIZWFydCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgc2hvdyhjbnQpe1xyXG4gICAgICAgIGlmKGNudCE9MCAmJiBoZWFydGNudFtjbnRdLmFjdGl2ZT09ZmFsc2Upe1xyXG4gICAgICAgICAgICBpZihQdWJsaWNTZXRVcC5zb3VuZD09MSl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChQdWJsaWNTZXRVcC5hdWRpb1tcIjAwMTJcIl0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGhlYXJ0Y250W2NudF0uYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGhlYXJ0Y250W2NudF0pXHJcbiAgICAgICAgICAgIC50bygwLHtzY2FsZTowLjUscG9zaXRpb246Y2MudjIoLTExNywtMjMpfSlcclxuICAgICAgICAgICAgLnRvKDEse3NjYWxlOjEscG9zaXRpb246Y2MudjIocG9zW2NudF1bMF0scG9zW2NudF1bMV0pfSlcclxuICAgICAgICAgICAgLnN0YXJ0KClcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjbnQ9PTApe1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlSGVhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZm9yKGxldCBpPTA7aTw1O2krKyl7XHJcbiAgICAgICAgLy8gICAgIGhlYXJ0Y250W2ldLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZm9yKGxldCBpPTA7aTxjbnQ7aSsrKXtcclxuICAgICAgICAvLyAgICAgaGVhcnRjbnRbaV0uYWN0aXZlPXRydWU7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgIH0sXHJcbiAgICBjbG9zZUhlYXJ0KCl7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTw1O2krKyl7XHJcbiAgICAgICAgICAgIGhlYXJ0Y250W2ldLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICAgICAgaGVhcnRjbnRbaV0uc2V0UG9zaXRpb24oLTE3NywtMjMsMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=