
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Photon_Interface.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1d3092UE5JFUbiiQ9S4HGIj', 'Photon_Interface');
// scripts/Photon_Interface.js

"use strict";

var Photon = require('./Photon-Javascript_SDK');
/**
@namespace PhotonController
*/
// prevent globals renaming by closure compilier


var PhotonController;

(function (PhotonController) {
  /** 
     * 
     @class 
     */
  var PhotonIf = function () {
    /** 
        @constructor
        @param {Photon.ConnectionProtocol} protocol Connection protocol.
        @param {string} address Server address:port.
         */
    function PhotonIf(protocol, address) {
      this._ppr = new Photon.PhotonPeer(protocol, address, '', '');
    } //constructor function end

    /** 
        @設定peer的CallbackFunction
        @param {object} outsideObj The object who own callback function
        @param {Function} stcallback Photonpeer status callback function
        @param {Function} rspcallback Photon server response callback function
        @param {Function} srvevtcallback Photon server event callback function
        */


    PhotonIf.prototype.InitCallbackFunction = function (outsideObj, stcallback, rspcallback, eventcallback) {
      //status callback function
      this._ppr.addPeerStatusListener(Photon.PhotonPeer.StatusCodes.connecting, function () {
        stcallback(Photon.PhotonPeer.StatusCodes.connecting, outsideObj);
      });

      this._ppr.addPeerStatusListener(Photon.PhotonPeer.StatusCodes.connect, function () {
        stcallback(Photon.PhotonPeer.StatusCodes.connect, outsideObj);
      });

      this._ppr.addPeerStatusListener(Photon.PhotonPeer.StatusCodes.connectFailed, function () {
        stcallback(Photon.PhotonPeer.StatusCodes.connectFailed, outsideObj);
      });

      this._ppr.addPeerStatusListener(Photon.PhotonPeer.StatusCodes.disconnect, function () {
        stcallback(Photon.PhotonPeer.StatusCodes.disconnect, outsideObj);
      });

      this._ppr.addPeerStatusListener(Photon.PhotonPeer.StatusCodes.timeout, function () {
        stcallback(Photon.PhotonPeer.StatusCodes.timeout, outsideObj);
      });

      this._ppr.addPeerStatusListener(Photon.PhotonPeer.StatusCodes.error, function () {
        stcallback(Photon.PhotonPeer.StatusCodes.error, outsideObj);
      });

      this._ppr.addPeerStatusListener(Photon.PhotonPeer.StatusCodes.connectClosed, function () {
        stcallback(Photon.PhotonPeer.StatusCodes.connectClosed, outsideObj);
      }); //reponse callback function


      this._ppr.addResponseListener(1, function (data) {
        var jsonstr = JSON.stringify(data);
        var obj = JSON.parse(jsonstr);

        if (obj.errCode == 0) {
          rspcallback(obj.vals, outsideObj);
        } else {
          //something error
          console.log('errCode:' + obj.errCode + ', errMsg:' + obj.errMsg);
        }
      }); //event callback function


      this._ppr.addEventListener(2, function test(b) {
        var jsonstr = JSON.stringify(b);
        var obj = JSON.parse(jsonstr);
        eventcallback(obj.vals, outsideObj);
      });
    }; //connect to server


    PhotonIf.prototype.connect = function () {
      this._ppr.connect();
    }; //send data to server


    PhotonIf.prototype.sendData = function (nCmdId) {
      var op = [0, nCmdId];

      for (var i = 0; i < (arguments.length <= 1 ? 0 : arguments.length - 1); ++i) {
        op.push(i + 1, i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]);
      }

      console.log('send cmd' + op);

      this._ppr.sendOperation(1, op);
    };

    return PhotonIf;
  }(); //class end


  PhotonController.PhotonIf = PhotonIf;
})(PhotonController || (PhotonController = {})); //namespace end


module.exports = PhotonController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGhvdG9uX0ludGVyZmFjZS5qcyJdLCJuYW1lcyI6WyJQaG90b24iLCJyZXF1aXJlIiwiUGhvdG9uQ29udHJvbGxlciIsIlBob3RvbklmIiwicHJvdG9jb2wiLCJhZGRyZXNzIiwiX3BwciIsIlBob3RvblBlZXIiLCJwcm90b3R5cGUiLCJJbml0Q2FsbGJhY2tGdW5jdGlvbiIsIm91dHNpZGVPYmoiLCJzdGNhbGxiYWNrIiwicnNwY2FsbGJhY2siLCJldmVudGNhbGxiYWNrIiwiYWRkUGVlclN0YXR1c0xpc3RlbmVyIiwiU3RhdHVzQ29kZXMiLCJjb25uZWN0aW5nIiwiY29ubmVjdCIsImNvbm5lY3RGYWlsZWQiLCJkaXNjb25uZWN0IiwidGltZW91dCIsImVycm9yIiwiY29ubmVjdENsb3NlZCIsImFkZFJlc3BvbnNlTGlzdGVuZXIiLCJkYXRhIiwianNvbnN0ciIsIkpTT04iLCJzdHJpbmdpZnkiLCJvYmoiLCJwYXJzZSIsImVyckNvZGUiLCJ2YWxzIiwiY29uc29sZSIsImxvZyIsImVyck1zZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZXN0IiwiYiIsInNlbmREYXRhIiwibkNtZElkIiwib3AiLCJpIiwicHVzaCIsInNlbmRPcGVyYXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLE1BQU0sR0FBR0MsT0FBTyxDQUFDLHlCQUFELENBQXRCO0FBRUE7QUFDQTtBQUNBO0FBRUE7OztBQUNBLElBQUlDLGdCQUFKOztBQUNBLENBQUMsVUFBVUEsZ0JBQVYsRUFBNEI7QUFDM0I7QUFDRjtBQUNBO0FBQ0E7QUFDRSxNQUFJQyxRQUFRLEdBQUksWUFBWTtBQUMxQjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0ksYUFBU0EsUUFBVCxDQUFrQkMsUUFBbEIsRUFBNEJDLE9BQTVCLEVBQXFDO0FBQ25DLFdBQUtDLElBQUwsR0FBWSxJQUFJTixNQUFNLENBQUNPLFVBQVgs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RUFBM0I7QUFDRCxLQVJEOztBQVVBLFdBQU9yQyxRQUFQO0FBQ0QsR0FwRmMsRUFBZixDQUwyQixDQXlGckI7OztBQUNORCxFQUFBQSxnQkFBZ0IsQ0FBQ0MsUUFBakIsR0FBNEJBLFFBQTVCO0FBQ0QsQ0EzRkQsRUEyRkdELGdCQUFnQixLQUFLQSxnQkFBZ0IsR0FBRyxFQUF4QixDQTNGbkIsR0EyRmlEOzs7QUFFakQwQyxNQUFNLENBQUNDLE9BQVAsR0FBaUIzQyxnQkFBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFBob3RvbiA9IHJlcXVpcmUoJy4vUGhvdG9uLUphdmFzY3JpcHRfU0RLJyk7XHJcblxyXG4vKipcclxuQG5hbWVzcGFjZSBQaG90b25Db250cm9sbGVyXHJcbiovXHJcblxyXG4vLyBwcmV2ZW50IGdsb2JhbHMgcmVuYW1pbmcgYnkgY2xvc3VyZSBjb21waWxpZXJcclxudmFyIFBob3RvbkNvbnRyb2xsZXI7XHJcbihmdW5jdGlvbiAoUGhvdG9uQ29udHJvbGxlcikge1xyXG4gIC8qKiBcclxuICAgICAqIFxyXG4gICAgIEBjbGFzcyBcclxuICAgICAqL1xyXG4gIHZhciBQaG90b25JZiA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKiogXHJcbiAgICAgICAgQGNvbnN0cnVjdG9yXHJcbiAgICAgICAgQHBhcmFtIHtQaG90b24uQ29ubmVjdGlvblByb3RvY29sfSBwcm90b2NvbCBDb25uZWN0aW9uIHByb3RvY29sLlxyXG4gICAgICAgIEBwYXJhbSB7c3RyaW5nfSBhZGRyZXNzIFNlcnZlciBhZGRyZXNzOnBvcnQuXHJcbiAgICAgICAgICovXHJcbiAgICBmdW5jdGlvbiBQaG90b25JZihwcm90b2NvbCwgYWRkcmVzcykge1xyXG4gICAgICB0aGlzLl9wcHIgPSBuZXcgUGhvdG9uLlBob3RvblBlZXIocHJvdG9jb2wsIGFkZHJlc3MsICcnLCAnJyk7XHJcbiAgICB9IC8vY29uc3RydWN0b3IgZnVuY3Rpb24gZW5kXHJcblxyXG4gICAgLyoqIFxyXG4gICAgICAgIEDoqK3lrppwZWVy55qEQ2FsbGJhY2tGdW5jdGlvblxyXG4gICAgICAgIEBwYXJhbSB7b2JqZWN0fSBvdXRzaWRlT2JqIFRoZSBvYmplY3Qgd2hvIG93biBjYWxsYmFjayBmdW5jdGlvblxyXG4gICAgICAgIEBwYXJhbSB7RnVuY3Rpb259IHN0Y2FsbGJhY2sgUGhvdG9ucGVlciBzdGF0dXMgY2FsbGJhY2sgZnVuY3Rpb25cclxuICAgICAgICBAcGFyYW0ge0Z1bmN0aW9ufSByc3BjYWxsYmFjayBQaG90b24gc2VydmVyIHJlc3BvbnNlIGNhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICAgICAgQHBhcmFtIHtGdW5jdGlvbn0gc3J2ZXZ0Y2FsbGJhY2sgUGhvdG9uIHNlcnZlciBldmVudCBjYWxsYmFjayBmdW5jdGlvblxyXG4gICAgICAgICovXHJcbiAgICBQaG90b25JZi5wcm90b3R5cGUuSW5pdENhbGxiYWNrRnVuY3Rpb24gPSBmdW5jdGlvbiAob3V0c2lkZU9iaiwgc3RjYWxsYmFjaywgcnNwY2FsbGJhY2ssIGV2ZW50Y2FsbGJhY2spIHtcclxuICAgICAgLy9zdGF0dXMgY2FsbGJhY2sgZnVuY3Rpb25cclxuICAgICAgdGhpcy5fcHByLmFkZFBlZXJTdGF0dXNMaXN0ZW5lcihQaG90b24uUGhvdG9uUGVlci5TdGF0dXNDb2Rlcy5jb25uZWN0aW5nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc3RjYWxsYmFjayhQaG90b24uUGhvdG9uUGVlci5TdGF0dXNDb2Rlcy5jb25uZWN0aW5nLCBvdXRzaWRlT2JqKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLl9wcHIuYWRkUGVlclN0YXR1c0xpc3RlbmVyKFBob3Rvbi5QaG90b25QZWVyLlN0YXR1c0NvZGVzLmNvbm5lY3QsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzdGNhbGxiYWNrKFBob3Rvbi5QaG90b25QZWVyLlN0YXR1c0NvZGVzLmNvbm5lY3QsIG91dHNpZGVPYmopO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuX3Bwci5hZGRQZWVyU3RhdHVzTGlzdGVuZXIoUGhvdG9uLlBob3RvblBlZXIuU3RhdHVzQ29kZXMuY29ubmVjdEZhaWxlZCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHN0Y2FsbGJhY2soUGhvdG9uLlBob3RvblBlZXIuU3RhdHVzQ29kZXMuY29ubmVjdEZhaWxlZCwgb3V0c2lkZU9iaik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5fcHByLmFkZFBlZXJTdGF0dXNMaXN0ZW5lcihQaG90b24uUGhvdG9uUGVlci5TdGF0dXNDb2Rlcy5kaXNjb25uZWN0LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc3RjYWxsYmFjayhQaG90b24uUGhvdG9uUGVlci5TdGF0dXNDb2Rlcy5kaXNjb25uZWN0LCBvdXRzaWRlT2JqKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLl9wcHIuYWRkUGVlclN0YXR1c0xpc3RlbmVyKFBob3Rvbi5QaG90b25QZWVyLlN0YXR1c0NvZGVzLnRpbWVvdXQsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzdGNhbGxiYWNrKFBob3Rvbi5QaG90b25QZWVyLlN0YXR1c0NvZGVzLnRpbWVvdXQsIG91dHNpZGVPYmopO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuX3Bwci5hZGRQZWVyU3RhdHVzTGlzdGVuZXIoUGhvdG9uLlBob3RvblBlZXIuU3RhdHVzQ29kZXMuZXJyb3IsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzdGNhbGxiYWNrKFBob3Rvbi5QaG90b25QZWVyLlN0YXR1c0NvZGVzLmVycm9yLCBvdXRzaWRlT2JqKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLl9wcHIuYWRkUGVlclN0YXR1c0xpc3RlbmVyKFBob3Rvbi5QaG90b25QZWVyLlN0YXR1c0NvZGVzLmNvbm5lY3RDbG9zZWQsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzdGNhbGxiYWNrKFBob3Rvbi5QaG90b25QZWVyLlN0YXR1c0NvZGVzLmNvbm5lY3RDbG9zZWQsIG91dHNpZGVPYmopO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vcmVwb25zZSBjYWxsYmFjayBmdW5jdGlvblxyXG4gICAgICB0aGlzLl9wcHIuYWRkUmVzcG9uc2VMaXN0ZW5lcigxLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHZhciBqc29uc3RyID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgICAgICAgdmFyIG9iaiA9IEpTT04ucGFyc2UoanNvbnN0cik7XHJcbiAgICAgICAgaWYgKG9iai5lcnJDb2RlID09IDApIHtcclxuICAgICAgICAgIHJzcGNhbGxiYWNrKG9iai52YWxzLCBvdXRzaWRlT2JqKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy9zb21ldGhpbmcgZXJyb3JcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJDb2RlOicgKyBvYmouZXJyQ29kZSArICcsIGVyck1zZzonICsgb2JqLmVyck1zZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vZXZlbnQgY2FsbGJhY2sgZnVuY3Rpb25cclxuICAgICAgdGhpcy5fcHByLmFkZEV2ZW50TGlzdGVuZXIoMiwgZnVuY3Rpb24gdGVzdChiKSB7XHJcbiAgICAgICAgdmFyIGpzb25zdHIgPSBKU09OLnN0cmluZ2lmeShiKTtcclxuICAgICAgICB2YXIgb2JqID0gSlNPTi5wYXJzZShqc29uc3RyKTtcclxuICAgICAgICBldmVudGNhbGxiYWNrKG9iai52YWxzLCBvdXRzaWRlT2JqKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vY29ubmVjdCB0byBzZXJ2ZXJcclxuICAgIFBob3RvbklmLnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLl9wcHIuY29ubmVjdCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvL3NlbmQgZGF0YSB0byBzZXJ2ZXJcclxuICAgIFBob3RvbklmLnByb3RvdHlwZS5zZW5kRGF0YSA9IGZ1bmN0aW9uIChuQ21kSWQsIC4uLmFyZ3MpIHtcclxuICAgICAgdmFyIG9wID0gWzAsIG5DbWRJZF07XHJcblxyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBvcC5wdXNoKGkgKyAxLCBhcmdzW2ldKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZygnc2VuZCBjbWQnK29wKTtcclxuICAgICAgdGhpcy5fcHByLnNlbmRPcGVyYXRpb24oMSwgb3ApO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gUGhvdG9uSWY7XHJcbiAgfSkoKTsgLy9jbGFzcyBlbmRcclxuICBQaG90b25Db250cm9sbGVyLlBob3RvbklmID0gUGhvdG9uSWY7XHJcbn0pKFBob3RvbkNvbnRyb2xsZXIgfHwgKFBob3RvbkNvbnRyb2xsZXIgPSB7fSkpOyAvL25hbWVzcGFjZSBlbmRcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUGhvdG9uQ29udHJvbGxlcjtcclxuIl19