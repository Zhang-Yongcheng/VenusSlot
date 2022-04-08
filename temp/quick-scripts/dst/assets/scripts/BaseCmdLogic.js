
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/BaseCmdLogic.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a7b33Aw/vZIZ6OEZyILO7+Z', 'BaseCmdLogic');
// scripts/BaseCmdLogic.js

"use strict";

var _require = require('./observable.cc'),
    Observable = _require.Observable;

var Photon = require('./Photon-Javascript_SDK');

var PhotonController = require('./Photon_Interface');

var PublicSetUp = require('PublicSetUp');
/**
@namespace BaseCmdLogic
處理登入、入局等底層訊息用
*/
// prevent globals renaming by closure compilier


var BaseCmdLogic;

(function (BaseCmdLogic) {
  var observable = Observable();
  /** 
    * 
    @class MainSrvCmdLogic
    */

  var MainSrvCmdLogic = function () {
    /** 
        @constructor
        @param {PhotonController.PhotonIf} pi photon interface
        */
    function MainSrvCmdLogic(pi) {
      this._pi = pi;
      this._lbSrvObj = null;
      this._account = '';
      this._password = '';
    } //constructor function end
    //login


    MainSrvCmdLogic.prototype.RunLogin = function (account, password, type) {
      this._account = account;
      this._password = password;
      this._type = type;

      this._pi.InitCallbackFunction(this, this.PeerStatusCallback, this.ResponseCallback, this.EventCallback);

      this._pi.connect(); //對main server做連線

    }; //set lobby server command logic


    MainSrvCmdLogic.prototype.SetLbSrvCmdLogicObj = function (lbSrvCmdLogicObj) {
      this._lbSrvObj = lbSrvCmdLogicObj;
    }; //photon peer status callback function


    MainSrvCmdLogic.prototype.PeerStatusCallback = function (st, selfObj) {
      switch (st) {
        case Photon.PhotonPeer.StatusCodes.connect:
          //已經連上 main server
          selfObj._pi.sendData(101, selfObj._account, selfObj._password, selfObj._type, 0, '', 999); //送出帳密


          break;
      }
    }; //photon peer reponse callback function


    MainSrvCmdLogic.prototype.ResponseCallback = function (vals, selfObj) {
      switch (vals[0]) {
        case 101:
          //server端登入回傳訊息
          if (vals[1] == 1) {//成功
            //直接等server通知 lobby server 資訊再做連線
          } else {
            switch (vals[1] //（0：失敗, 2：版本錯誤, 3：維護中, 4:重複登入, 5:之前遊戲局尚未結束 6：沒有進行遊戲的權限（洽客服））
            ) {
              case 0:
                console.log('登入Main Srv失敗');
                break;

              case 2:
                console.log('登入Main Srv版本錯誤');
                break;

              case 3:
                console.log('Main Srv維護中');
                break;

              case 4:
                console.log('Main Srv重複登入');
                break;

              case 5:
                console.log('之前遊戲局尚未結束');
                break;

              case 6:
                console.log('沒有進行遊戲的權限');
                break;
            }
          }

          break;
      } //console.log("ms response:"+vals);

    }; //photon peer event callback function


    MainSrvCmdLogic.prototype.EventCallback = function (vals, selfObj) {
      switch (vals[0]) {
        case 102:
          //由 main server通知的 lobby server 資訊
          //vals[1]:loginID
          //vals[2]:loginKey
          //vals[3]:protocol(0:Unknown 1:Udp 2:Tcp 3:WebSocket 4:Http 5:SecureWebSocket)
          //vals[4]:ip
          //vals[5]:port
          selfObj._lbSrvObj.ConnectToServer(vals[1], vals[2], vals[3], vals[4], vals[5]);

          break;
      } //console.log("ms event:"+evt);

    };

    return MainSrvCmdLogic;
  }(); //class end


  BaseCmdLogic.MainSrvCmdLogic = MainSrvCmdLogic;
  /** 
    * 
    @class LobbySrvCmdLogic
    */

  var LobbySrvCmdLogic = function () {
    /** 
        @constructor
        */
    function LobbySrvCmdLogic(gameid, versioncode) {
      this._pi = null;
      this._gameid = gameid;
      this._versioncode = versioncode;
      this._loginId = 0;
      this._loginKey = 0;
      this._gameSrvObj = null;
      this._protocolType = 0;
    } //constructor function end
    //connect to lobby server


    LobbySrvCmdLogic.prototype.ConnectToServer = function (loginId, loginKey, protocolType, ip, port) {
      this._loginId = loginId;
      this._loginKey = loginKey;
      this._protocolType = protocolType; //目前只會有 WebSocket 或 SecureWebSocket 兩種 protocol

      if (protocolType == 3) {
        //WebSocket
        this._pi = new PhotonController.PhotonIf(Photon.ConnectionProtocol.Ws, ip + ':' + port);
      } else if (protocolType == 5) {
        //SecureWebSocket
        this._pi = new PhotonController.PhotonIf(Photon.ConnectionProtocol.Wss, ip + ':' + port);
      }

      if (this._pi != null) {
        //設定 Photon Interface 物件的 Callback Function
        this._pi.InitCallbackFunction(this, this.PeerStatusCallback, this.ResponseCallback, this.EventCallback);

        this._pi.connect();
      }
    }; //set game server command logic


    LobbySrvCmdLogic.prototype.SetGameSrvCmdLogicObj = function (gameSrvCmdLogicObj) {
      this._gameSrvObj = gameSrvCmdLogicObj;
    }; //photon peer status callback function


    LobbySrvCmdLogic.prototype.PeerStatusCallback = function (st, selfObj) {
      switch (st) {
        case Photon.PhotonPeer.StatusCodes.connect:
          //已經連上 lobby server
          selfObj._pi.sendData(101, selfObj._loginId, selfObj._loginKey); //送出login id 與 key


          break;
      }
    }; //photon peer reponse callback function


    LobbySrvCmdLogic.prototype.ResponseCallback = function (vals, selfObj) {
      switch (vals[0]) {
        case 102:
          //登入狀態回覆
          if (vals[1] == 1) {
            ////狀態代碼（0：失敗, 1：成功, 2：版本錯誤, 3：維護中）
            //加入遊戲局（this._gameid）
            selfObj._pi.sendData(103, selfObj._gameid, -1, -1, selfObj._versioncode);
          } else {
            switch (vals[1]) {
              case 0:
                console.log('登入LB Srv 失敗');
                break;

              case 2:
                console.log('登入LB Srv版本錯誤');
                break;

              case 3:
                console.log('LB Srv 維護中');
                break;
            }
          }

          break;

        case 103:
          //server送回的game server連線資訊
          //vals[1]:loginID
          //vals[2]:loginKey
          //vals[3]:ip
          //vals[4]:port
          //vals[5]:result
          if (vals[5] == 1) {
            selfObj._gameSrvObj.ConnectToServer(vals[1], vals[2], selfObj._protocolType, vals[3], vals[4]);
          } else {
            switch (vals[5] //0：錯誤 1：成功 2:遊戲維護中 3:版本錯誤
            ) {
              case 0:
                console.log('加入game server遊戲局錯誤');
                break;

              case 2:
                console.log('Game Srv 遊戲維護中');
                break;

              case 3:
                console.log('要求加入Game Srv 版本錯誤');
                break;
            }
          }

          break;

        case 104:
          //加入game server遊戲局結果回覆(因為可能會被game server強制斷線，所以由lobby server進行回覆)
          if (vals[1] != 1) {
            //-1：建立房間失敗 0：錯誤 1:成功 2：點數不足 3：沒有進行遊戲的權限（洽客服） ], 4：無可用房間, 5：此玩家之前遊戲局未結束
            switch (vals[1]) {
              case -1:
                console.log('建立房間失敗');
                break;

              case 0:
                console.log('加入遊戲錯誤');
                break;

              case 2:
                console.log('點數不足');
                break;

              case 3:
                console.log('沒有進行遊戲的權限');
                break;

              case 4:
                console.log('無可用房間');
                break;

              case 5:
                console.log('此玩家之前遊戲局未結束');
                break;
            }
          }

          break;
      }

      console.log('ls response, cmd:' + vals[0]);
    }; //photon peer event callback function


    LobbySrvCmdLogic.prototype.EventCallback = function (vals, selfObj) {
      console.log('ls event, cmd:' + vals[0]);
    };

    return LobbySrvCmdLogic;
  }(); //class end


  BaseCmdLogic.LobbySrvCmdLogic = LobbySrvCmdLogic;
  /** 
    * 
    @class GameSrvBaseCmdLogic
    */

  var GameSrvBaseCmdLogic = function () {
    /** 
        @constructor
        */
    function GameSrvBaseCmdLogic(GameObj) {
      this._pi = null;
      this._GameCmdFuncObj = null;
      this._loginId = 0;
      this._loginKey = 0;
      this._GameObj = GameObj;
    } //constructor function end
    //connect to game server


    GameSrvBaseCmdLogic.prototype.ConnectToServer = function (loginId, loginKey, protocolType, ip, port) {
      console.log('connect to gs loginId:' + loginId + ', loginKey:' + loginKey + ', protocolType:' + protocolType + ', ip:' + ip + ', port:' + port);
      this._loginId = loginId;
      this._loginKey = loginKey; //目前只會有 WebSocket 或 SecureWebSocket 兩種 protocol

      if (protocolType == 3) {
        //WebSocket
        this._pi = new PhotonController.PhotonIf(Photon.ConnectionProtocol.Ws, ip + ':' + port);
      } else if (protocolType == 5) {
        //SecureWebSocket
        this._pi = new PhotonController.PhotonIf(Photon.ConnectionProtocol.Wss, ip + ':' + port);
      }

      if (this._pi != null) {
        //設定 Photon Interface 物件的 Callback Function
        this._pi.InitCallbackFunction(this, this.PeerStatusCallback, this.ResponseCallback, this.EventCallback);

        this._pi.connect();
      }
    }; //photon peer status callback function


    GameSrvBaseCmdLogic.prototype.PeerStatusCallback = function (st, selfObj) {
      switch (st) {
        case Photon.PhotonPeer.StatusCodes.connect:
          //已經連上 game server
          selfObj._pi.sendData(101, selfObj._loginId, selfObj._loginKey); //送出login id 與 key


          break;
      }
    }; //photon peer reponse callback function


    GameSrvBaseCmdLogic.prototype.ResponseCallback = function (vals, selfObj) {
      console.log('gs response, cmd:' + vals[0]);

      switch (vals[0]) {
        case 111:
          //收到game遊戲局已經準備完成的訊息（只會有一次）
          selfObj._pi.sendData(3161); //送出3161，取得本桌的資訊(通知server前端遊戲已經準備就緒)
          //押注為3162


          break;
        // case 3072: //　回傳本桌的資訊
        //   break;
        // case 3073: //　回傳押注結果資訊
        //   break;
        // case 3074: //　通知遊戲端免費遊戲結束
        //   break;

        default:
          selfObj._GameCmdFuncObj(vals, selfObj._pi, selfObj._GameObj);

          break;
      }
    }; //photon peer event callback function


    GameSrvBaseCmdLogic.prototype.EventCallback = function (vals, selfObj) {
      console.log('gs event, cmd:' + vals[0]);
    }; //set game cmd function


    GameSrvBaseCmdLogic.prototype.SetGameCmdFunc = function (FuncObj) {
      this._GameCmdFuncObj = FuncObj;
    }; //Get Photon Interface object


    GameSrvBaseCmdLogic.prototype.GetPI = function () {
      return this._pi;
    };

    return GameSrvBaseCmdLogic;
  }(); //class end


  BaseCmdLogic.GameSrvBaseCmdLogic = GameSrvBaseCmdLogic;
})(BaseCmdLogic || (BaseCmdLogic = {})); //namespace end


module.exports = BaseCmdLogic;
/*
    //優先處理底層server event，未處理的封包會透過 default 傳給外部物件
    PhotonIf.prototype.BaseEventCallback = function(vals, outObj){
        console.log("BaseEventCallback");
        switch(vals[0]){
            case 102:
                break;
            default:
                this._outEventCallback(vals, outObj);
                break;
        }
    }

    //處理 main server的封包訊息
    PhotonIf.prototype.ProcMainSrvResponse = function(vals, outObj){
        console.log("ProcMainSrvResponse, cmd id:"+vals[0]);
        switch(vals[0]){
            case 101:
                //console.log("vals 1:"+vals[1]);
                break;
            default:
                this._outRspCallback(vals, outObj);
                break;
        }
    };

    //處理 lobby server的封包訊息
    PhotonIf.prototype.ProcLobbySrvResponse = function(vals, outObj){
        console.log("ProcLobbySrvResponse, cmd id:"+vals[0]);
        switch(vals[0]){
            case 101:
                //console.log("vals 1:"+vals[1]);
                break;
            default:
                this._outRspCallback(vals, outObj);
                break;
        }
    };

    //處理 game server的封包訊息
    PhotonIf.prototype.ProcGameSrvResponse = function(vals, outObj){
        console.log("ProcGameSrvResponse, cmd id:"+vals[0]);
        switch(vals[0]){
            case 101:
                //console.log("vals 1:"+vals[1]);
                break;
            default:
                this._outRspCallback(vals, outObj);
                break;
        }
    };
*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQmFzZUNtZExvZ2ljLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJPYnNlcnZhYmxlIiwiUGhvdG9uIiwiUGhvdG9uQ29udHJvbGxlciIsIlB1YmxpY1NldFVwIiwiQmFzZUNtZExvZ2ljIiwib2JzZXJ2YWJsZSIsIk1haW5TcnZDbWRMb2dpYyIsInBpIiwiX3BpIiwiX2xiU3J2T2JqIiwiX2FjY291bnQiLCJfcGFzc3dvcmQiLCJwcm90b3R5cGUiLCJSdW5Mb2dpbiIsImFjY291bnQiLCJwYXNzd29yZCIsInR5cGUiLCJfdHlwZSIsIkluaXRDYWxsYmFja0Z1bmN0aW9uIiwiUGVlclN0YXR1c0NhbGxiYWNrIiwiUmVzcG9uc2VDYWxsYmFjayIsIkV2ZW50Q2FsbGJhY2siLCJjb25uZWN0IiwiU2V0TGJTcnZDbWRMb2dpY09iaiIsImxiU3J2Q21kTG9naWNPYmoiLCJzdCIsInNlbGZPYmoiLCJQaG90b25QZWVyIiwiU3RhdHVzQ29kZXMiLCJzZW5kRGF0YSIsInZhbHMiLCJjb25zb2xlIiwibG9nIiwiQ29ubmVjdFRvU2VydmVyIiwiTG9iYnlTcnZDbWRMb2dpYyIsImdhbWVpZCIsInZlcnNpb25jb2RlIiwiX2dhbWVpZCIsIl92ZXJzaW9uY29kZSIsIl9sb2dpbklkIiwiX2xvZ2luS2V5IiwiX2dhbWVTcnZPYmoiLCJfcHJvdG9jb2xUeXBlIiwibG9naW5JZCIsImxvZ2luS2V5IiwicHJvdG9jb2xUeXBlIiwiaXAiLCJwb3J0IiwiUGhvdG9uSWYiLCJDb25uZWN0aW9uUHJvdG9jb2wiLCJXcyIsIldzcyIsIlNldEdhbWVTcnZDbWRMb2dpY09iaiIsImdhbWVTcnZDbWRMb2dpY09iaiIsIkdhbWVTcnZCYXNlQ21kTG9naWMiLCJHYW1lT2JqIiwiX0dhbWVDbWRGdW5jT2JqIiwiX0dhbWVPYmoiLCJTZXRHYW1lQ21kRnVuYyIsIkZ1bmNPYmoiLCJHZXRQSSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7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QUNBd0IsSUFBQUEsbUJBQW1CLENBQUMxQyxTQUFwQixDQUE4QjhDLGNBQTlCLEdBQStDLFVBQVVDLE9BQVYsRUFBbUI7QUFDaEUsV0FBS0gsZUFBTCxHQUF1QkcsT0FBdkI7QUFDRCxLQUZELENBdEVxQyxDQTBFckM7OztBQUNBTCxJQUFBQSxtQkFBbUIsQ0FBQzFDLFNBQXBCLENBQThCZ0QsS0FBOUIsR0FBc0MsWUFBWTtBQUNoRCxhQUFPLEtBQUtwRCxHQUFaO0FBQ0QsS0FGRDs7QUFJQSxXQUFPOEMsbUJBQVA7QUFDRCxHQWhGeUIsRUFBMUIsQ0FyUHVCLENBcVVqQjs7O0FBQ05sRCxFQUFBQSxZQUFZLENBQUNrRCxtQkFBYixHQUFtQ0EsbUJBQW5DO0FBQ0QsQ0F2VUQsRUF1VUdsRCxZQUFZLEtBQUtBLFlBQVksR0FBRyxFQUFwQixDQXZVZixHQXVVeUM7OztBQUV6Q3lELE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjFELFlBQWpCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgT2JzZXJ2YWJsZSB9ID0gcmVxdWlyZSgnLi9vYnNlcnZhYmxlLmNjJyk7XHJcbmNvbnN0IFBob3RvbiA9IHJlcXVpcmUoJy4vUGhvdG9uLUphdmFzY3JpcHRfU0RLJyk7XHJcbmNvbnN0IFBob3RvbkNvbnRyb2xsZXIgPSByZXF1aXJlKCcuL1Bob3Rvbl9JbnRlcmZhY2UnKTtcclxubGV0IFB1YmxpY1NldFVwPXJlcXVpcmUoJ1B1YmxpY1NldFVwJyk7XHJcbi8qKlxyXG5AbmFtZXNwYWNlIEJhc2VDbWRMb2dpY1xyXG7omZXnkIbnmbvlhaXjgIHlhaXlsYDnrYnlupXlsaToqIrmga/nlKhcclxuKi9cclxuLy8gcHJldmVudCBnbG9iYWxzIHJlbmFtaW5nIGJ5IGNsb3N1cmUgY29tcGlsaWVyXHJcbnZhciBCYXNlQ21kTG9naWM7XHJcblxyXG4oZnVuY3Rpb24gKEJhc2VDbWRMb2dpYykge1xyXG4gIGNvbnN0IG9ic2VydmFibGUgPSBPYnNlcnZhYmxlKCk7XHJcbiAgLyoqIFxyXG4gICAgKiBcclxuICAgIEBjbGFzcyBNYWluU3J2Q21kTG9naWNcclxuICAgICovXHJcbiAgdmFyIE1haW5TcnZDbWRMb2dpYyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKiogXHJcbiAgICAgICAgQGNvbnN0cnVjdG9yXHJcbiAgICAgICAgQHBhcmFtIHtQaG90b25Db250cm9sbGVyLlBob3RvbklmfSBwaSBwaG90b24gaW50ZXJmYWNlXHJcbiAgICAgICAgKi9cclxuICAgIGZ1bmN0aW9uIE1haW5TcnZDbWRMb2dpYyhwaSkge1xyXG4gICAgICB0aGlzLl9waSA9IHBpO1xyXG4gICAgICB0aGlzLl9sYlNydk9iaiA9IG51bGw7XHJcbiAgICAgIHRoaXMuX2FjY291bnQgPSAnJztcclxuICAgICAgdGhpcy5fcGFzc3dvcmQgPSAnJztcclxuICAgIH0gLy9jb25zdHJ1Y3RvciBmdW5jdGlvbiBlbmRcclxuXHJcbiAgICAvL2xvZ2luXHJcbiAgICBNYWluU3J2Q21kTG9naWMucHJvdG90eXBlLlJ1bkxvZ2luID0gZnVuY3Rpb24gKGFjY291bnQsIHBhc3N3b3JkLHR5cGUpIHtcclxuICAgICAgdGhpcy5fYWNjb3VudCA9IGFjY291bnQ7XHJcbiAgICAgIHRoaXMuX3Bhc3N3b3JkID0gcGFzc3dvcmQ7XHJcbiAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xyXG4gICAgICB0aGlzLl9waS5Jbml0Q2FsbGJhY2tGdW5jdGlvbih0aGlzLCB0aGlzLlBlZXJTdGF0dXNDYWxsYmFjaywgdGhpcy5SZXNwb25zZUNhbGxiYWNrLCB0aGlzLkV2ZW50Q2FsbGJhY2spO1xyXG4gICAgICB0aGlzLl9waS5jb25uZWN0KCk7IC8v5bCNbWFpbiBzZXJ2ZXLlgZrpgKPnt5pcclxuICAgIH07XHJcblxyXG4gICAgLy9zZXQgbG9iYnkgc2VydmVyIGNvbW1hbmQgbG9naWNcclxuICAgIE1haW5TcnZDbWRMb2dpYy5wcm90b3R5cGUuU2V0TGJTcnZDbWRMb2dpY09iaiA9IGZ1bmN0aW9uIChsYlNydkNtZExvZ2ljT2JqKSB7XHJcbiAgICAgIHRoaXMuX2xiU3J2T2JqID0gbGJTcnZDbWRMb2dpY09iajtcclxuICAgIH07XHJcblxyXG4gICAgLy9waG90b24gcGVlciBzdGF0dXMgY2FsbGJhY2sgZnVuY3Rpb25cclxuICAgIE1haW5TcnZDbWRMb2dpYy5wcm90b3R5cGUuUGVlclN0YXR1c0NhbGxiYWNrID0gZnVuY3Rpb24gKHN0LCBzZWxmT2JqKSB7XHJcbiAgICAgIHN3aXRjaCAoc3QpIHtcclxuICAgICAgICBjYXNlIFBob3Rvbi5QaG90b25QZWVyLlN0YXR1c0NvZGVzLmNvbm5lY3Q6IC8v5bey57aT6YCj5LiKIG1haW4gc2VydmVyXHJcbiAgICAgICAgICBzZWxmT2JqLl9waS5zZW5kRGF0YSgxMDEsIHNlbGZPYmouX2FjY291bnQsIHNlbGZPYmouX3Bhc3N3b3JkLCBzZWxmT2JqLl90eXBlLCAwLCAnJywgOTk5KTsgLy/pgIHlh7rluLPlr4ZcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vcGhvdG9uIHBlZXIgcmVwb25zZSBjYWxsYmFjayBmdW5jdGlvblxyXG4gICAgTWFpblNydkNtZExvZ2ljLnByb3RvdHlwZS5SZXNwb25zZUNhbGxiYWNrID0gZnVuY3Rpb24gKHZhbHMsIHNlbGZPYmopIHtcclxuICAgICAgc3dpdGNoICh2YWxzWzBdKSB7XHJcbiAgICAgICAgY2FzZSAxMDE6IC8vc2VydmVy56uv55m75YWl5Zue5YKz6KiK5oGvXHJcbiAgICAgICAgICBpZiAodmFsc1sxXSA9PSAxKSB7XHJcbiAgICAgICAgICAgIC8v5oiQ5YqfXHJcbiAgICAgICAgICAgIC8v55u05o6l562Jc2VydmVy6YCa55+lIGxvYmJ5IHNlcnZlciDos4foqIrlho3lgZrpgKPnt5pcclxuXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKFxyXG4gICAgICAgICAgICAgIHZhbHNbMV0gLy/vvIgw77ya5aSx5pWXLCAy77ya54mI5pys6Yyv6KqkLCAz77ya57at6K235LitLCA0OumHjeikh+eZu+WFpSwgNTrkuYvliY3pgYrmiLLlsYDlsJrmnKrntZDmnZ8gNu+8muaykuaciemAsuihjOmBiuaIsueahOasiumZkO+8iOa0veWuouacje+8ie+8iVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55m75YWlTWFpbiBTcnblpLHmlZcnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnmbvlhaVNYWluIFNydueJiOacrOmMr+iqpCcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ01haW4gU3J257at6K235LitJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTWFpbiBTcnbph43opIfnmbvlhaUnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfkuYvliY3pgYrmiLLlsYDlsJrmnKrntZDmnZ8nKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmspLmnInpgLLooYzpgYrmiLLnmoTmrIrpmZAnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgLy9jb25zb2xlLmxvZyhcIm1zIHJlc3BvbnNlOlwiK3ZhbHMpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvL3Bob3RvbiBwZWVyIGV2ZW50IGNhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICBNYWluU3J2Q21kTG9naWMucHJvdG90eXBlLkV2ZW50Q2FsbGJhY2sgPSBmdW5jdGlvbiAodmFscywgc2VsZk9iaikge1xyXG4gICAgICBzd2l0Y2ggKHZhbHNbMF0pIHtcclxuICAgICAgICBjYXNlIDEwMjogLy/nlLEgbWFpbiBzZXJ2ZXLpgJrnn6XnmoQgbG9iYnkgc2VydmVyIOizh+ioilxyXG4gICAgICAgICAgLy92YWxzWzFdOmxvZ2luSURcclxuICAgICAgICAgIC8vdmFsc1syXTpsb2dpbktleVxyXG4gICAgICAgICAgLy92YWxzWzNdOnByb3RvY29sKDA6VW5rbm93biAxOlVkcCAyOlRjcCAzOldlYlNvY2tldCA0Okh0dHAgNTpTZWN1cmVXZWJTb2NrZXQpXHJcbiAgICAgICAgICAvL3ZhbHNbNF06aXBcclxuICAgICAgICAgIC8vdmFsc1s1XTpwb3J0XHJcbiAgICAgICAgICBzZWxmT2JqLl9sYlNydk9iai5Db25uZWN0VG9TZXJ2ZXIodmFsc1sxXSwgdmFsc1syXSwgdmFsc1szXSwgdmFsc1s0XSwgdmFsc1s1XSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICAvL2NvbnNvbGUubG9nKFwibXMgZXZlbnQ6XCIrZXZ0KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIE1haW5TcnZDbWRMb2dpYztcclxuICB9KSgpOyAvL2NsYXNzIGVuZFxyXG4gIEJhc2VDbWRMb2dpYy5NYWluU3J2Q21kTG9naWMgPSBNYWluU3J2Q21kTG9naWM7XHJcblxyXG4gIC8qKiBcclxuICAgICogXHJcbiAgICBAY2xhc3MgTG9iYnlTcnZDbWRMb2dpY1xyXG4gICAgKi9cclxuICB2YXIgTG9iYnlTcnZDbWRMb2dpYyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKiogXHJcbiAgICAgICAgQGNvbnN0cnVjdG9yXHJcbiAgICAgICAgKi9cclxuICAgIGZ1bmN0aW9uIExvYmJ5U3J2Q21kTG9naWMoZ2FtZWlkLCB2ZXJzaW9uY29kZSkge1xyXG4gICAgICB0aGlzLl9waSA9IG51bGw7XHJcbiAgICAgIHRoaXMuX2dhbWVpZCA9IGdhbWVpZDtcclxuICAgICAgdGhpcy5fdmVyc2lvbmNvZGUgPSB2ZXJzaW9uY29kZTtcclxuICAgICAgdGhpcy5fbG9naW5JZCA9IDA7XHJcbiAgICAgIHRoaXMuX2xvZ2luS2V5ID0gMDtcclxuICAgICAgdGhpcy5fZ2FtZVNydk9iaiA9IG51bGw7XHJcbiAgICAgIHRoaXMuX3Byb3RvY29sVHlwZSA9IDA7XHJcbiAgICB9IC8vY29uc3RydWN0b3IgZnVuY3Rpb24gZW5kXHJcblxyXG4gICAgLy9jb25uZWN0IHRvIGxvYmJ5IHNlcnZlclxyXG4gICAgTG9iYnlTcnZDbWRMb2dpYy5wcm90b3R5cGUuQ29ubmVjdFRvU2VydmVyID0gZnVuY3Rpb24gKGxvZ2luSWQsIGxvZ2luS2V5LCBwcm90b2NvbFR5cGUsIGlwLCBwb3J0KSB7XHJcbiAgICAgIHRoaXMuX2xvZ2luSWQgPSBsb2dpbklkO1xyXG4gICAgICB0aGlzLl9sb2dpbktleSA9IGxvZ2luS2V5O1xyXG4gICAgICB0aGlzLl9wcm90b2NvbFR5cGUgPSBwcm90b2NvbFR5cGU7XHJcbiAgICAgIC8v55uu5YmN5Y+q5pyD5pyJIFdlYlNvY2tldCDmiJYgU2VjdXJlV2ViU29ja2V0IOWFqeeoriBwcm90b2NvbFxyXG4gICAgICBpZiAocHJvdG9jb2xUeXBlID09IDMpIHtcclxuICAgICAgICAvL1dlYlNvY2tldFxyXG4gICAgICAgIHRoaXMuX3BpID0gbmV3IFBob3RvbkNvbnRyb2xsZXIuUGhvdG9uSWYoUGhvdG9uLkNvbm5lY3Rpb25Qcm90b2NvbC5XcywgaXAgKyAnOicgKyBwb3J0KTtcclxuICAgICAgfSBlbHNlIGlmIChwcm90b2NvbFR5cGUgPT0gNSkge1xyXG4gICAgICAgIC8vU2VjdXJlV2ViU29ja2V0XHJcbiAgICAgICAgdGhpcy5fcGkgPSBuZXcgUGhvdG9uQ29udHJvbGxlci5QaG90b25JZihQaG90b24uQ29ubmVjdGlvblByb3RvY29sLldzcywgaXAgKyAnOicgKyBwb3J0KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5fcGkgIT0gbnVsbCkge1xyXG4gICAgICAgIC8v6Kit5a6aIFBob3RvbiBJbnRlcmZhY2Ug54mp5Lu255qEIENhbGxiYWNrIEZ1bmN0aW9uXHJcbiAgICAgICAgdGhpcy5fcGkuSW5pdENhbGxiYWNrRnVuY3Rpb24odGhpcywgdGhpcy5QZWVyU3RhdHVzQ2FsbGJhY2ssIHRoaXMuUmVzcG9uc2VDYWxsYmFjaywgdGhpcy5FdmVudENhbGxiYWNrKTtcclxuICAgICAgICB0aGlzLl9waS5jb25uZWN0KCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy9zZXQgZ2FtZSBzZXJ2ZXIgY29tbWFuZCBsb2dpY1xyXG4gICAgTG9iYnlTcnZDbWRMb2dpYy5wcm90b3R5cGUuU2V0R2FtZVNydkNtZExvZ2ljT2JqID0gZnVuY3Rpb24gKGdhbWVTcnZDbWRMb2dpY09iaikge1xyXG4gICAgICB0aGlzLl9nYW1lU3J2T2JqID0gZ2FtZVNydkNtZExvZ2ljT2JqO1xyXG4gICAgfTtcclxuXHJcbiAgICAvL3Bob3RvbiBwZWVyIHN0YXR1cyBjYWxsYmFjayBmdW5jdGlvblxyXG4gICAgTG9iYnlTcnZDbWRMb2dpYy5wcm90b3R5cGUuUGVlclN0YXR1c0NhbGxiYWNrID0gZnVuY3Rpb24gKHN0LCBzZWxmT2JqKSB7XHJcbiAgICAgIHN3aXRjaCAoc3QpIHtcclxuICAgICAgICBjYXNlIFBob3Rvbi5QaG90b25QZWVyLlN0YXR1c0NvZGVzLmNvbm5lY3Q6IC8v5bey57aT6YCj5LiKIGxvYmJ5IHNlcnZlclxyXG4gICAgICAgICAgc2VsZk9iai5fcGkuc2VuZERhdGEoMTAxLCBzZWxmT2JqLl9sb2dpbklkLCBzZWxmT2JqLl9sb2dpbktleSk7IC8v6YCB5Ye6bG9naW4gaWQg6IiHIGtleVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy9waG90b24gcGVlciByZXBvbnNlIGNhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICBMb2JieVNydkNtZExvZ2ljLnByb3RvdHlwZS5SZXNwb25zZUNhbGxiYWNrID0gZnVuY3Rpb24gKHZhbHMsIHNlbGZPYmopIHtcclxuICAgICAgc3dpdGNoICh2YWxzWzBdKSB7XHJcbiAgICAgICAgY2FzZSAxMDI6IC8v55m75YWl54uA5oWL5Zue6KaGXHJcbiAgICAgICAgICBpZiAodmFsc1sxXSA9PSAxKSB7XHJcbiAgICAgICAgICAgIC8vLy/ni4DmhYvku6PnorzvvIgw77ya5aSx5pWXLCAx77ya5oiQ5YqfLCAy77ya54mI5pys6Yyv6KqkLCAz77ya57at6K235Lit77yJXHJcbiAgICAgICAgICAgIC8v5Yqg5YWl6YGK5oiy5bGA77yIdGhpcy5fZ2FtZWlk77yJXHJcbiAgICAgICAgICAgIHNlbGZPYmouX3BpLnNlbmREYXRhKDEwMywgc2VsZk9iai5fZ2FtZWlkLCAtMSwgLTEsIHNlbGZPYmouX3ZlcnNpb25jb2RlKTtcclxuXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHZhbHNbMV0pIHtcclxuICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55m75YWlTEIgU3J2IOWkseaVlycpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eZu+WFpUxCIFNydueJiOacrOmMr+iqpCcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0xCIFNydiDntq3orbfkuK0nKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgMTAzOiAvL3NlcnZlcumAgeWbnueahGdhbWUgc2VydmVy6YCj57ea6LOH6KiKXHJcbiAgICAgICAgICAvL3ZhbHNbMV06bG9naW5JRFxyXG4gICAgICAgICAgLy92YWxzWzJdOmxvZ2luS2V5XHJcbiAgICAgICAgICAvL3ZhbHNbM106aXBcclxuICAgICAgICAgIC8vdmFsc1s0XTpwb3J0XHJcbiAgICAgICAgICAvL3ZhbHNbNV06cmVzdWx0XHJcbiAgICAgICAgICBpZiAodmFsc1s1XSA9PSAxKSB7XHJcbiAgICAgICAgICAgIHNlbGZPYmouX2dhbWVTcnZPYmouQ29ubmVjdFRvU2VydmVyKHZhbHNbMV0sIHZhbHNbMl0sIHNlbGZPYmouX3Byb3RvY29sVHlwZSwgdmFsc1szXSwgdmFsc1s0XSk7XHJcblxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3dpdGNoIChcclxuICAgICAgICAgICAgICB2YWxzWzVdIC8vMO+8mumMr+iqpCAx77ya5oiQ5YqfIDI66YGK5oiy57at6K235LitIDM654mI5pys6Yyv6KqkXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfliqDlhaVnYW1lIHNlcnZlcumBiuaIsuWxgOmMr+iqpCcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dhbWUgU3J2IOmBiuaIsue2reitt+S4rScpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+imgeaxguWKoOWFpUdhbWUgU3J2IOeJiOacrOmMr+iqpCcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAxMDQ6IC8v5Yqg5YWlZ2FtZSBzZXJ2ZXLpgYrmiLLlsYDntZDmnpzlm57opoYo5Zug54K65Y+v6IO95pyD6KKrZ2FtZSBzZXJ2ZXLlvLfliLbmlrfnt5rvvIzmiYDku6XnlLFsb2JieSBzZXJ2ZXLpgLLooYzlm57opoYpXHJcbiAgICAgICAgICBpZiAodmFsc1sxXSAhPSAxKSB7XHJcbiAgICAgICAgICAgIC8vLTHvvJrlu7rnq4vmiL/plpPlpLHmlZcgMO+8mumMr+iqpCAxOuaIkOWKnyAy77ya6bue5pW45LiN6LazIDPvvJrmspLmnInpgLLooYzpgYrmiLLnmoTmrIrpmZDvvIjmtL3lrqLmnI3vvIkgXSwgNO+8mueEoeWPr+eUqOaIv+mWkywgNe+8muatpOeOqeWutuS5i+WJjemBiuaIsuWxgOacque1kOadn1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHZhbHNbMV0pIHtcclxuICAgICAgICAgICAgICBjYXNlIC0xOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+W7uueri+aIv+mWk+WkseaVlycpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+WKoOWFpemBiuaIsumMr+iqpCcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+m7nuaVuOS4jei2sycpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aykuaciemAsuihjOmBiuaIsueahOasiumZkCcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eEoeWPr+eUqOaIv+mWkycpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+atpOeOqeWutuS5i+WJjemBiuaIsuWxgOacque1kOadnycpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZygnbHMgcmVzcG9uc2UsIGNtZDonICsgdmFsc1swXSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vcGhvdG9uIHBlZXIgZXZlbnQgY2FsbGJhY2sgZnVuY3Rpb25cclxuICAgIExvYmJ5U3J2Q21kTG9naWMucHJvdG90eXBlLkV2ZW50Q2FsbGJhY2sgPSBmdW5jdGlvbiAodmFscywgc2VsZk9iaikge1xyXG4gICAgICBjb25zb2xlLmxvZygnbHMgZXZlbnQsIGNtZDonICsgdmFsc1swXSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBMb2JieVNydkNtZExvZ2ljO1xyXG4gIH0pKCk7IC8vY2xhc3MgZW5kXHJcbiAgQmFzZUNtZExvZ2ljLkxvYmJ5U3J2Q21kTG9naWMgPSBMb2JieVNydkNtZExvZ2ljO1xyXG5cclxuICAvKiogXHJcbiAgICAqIFxyXG4gICAgQGNsYXNzIEdhbWVTcnZCYXNlQ21kTG9naWNcclxuICAgICovXHJcbiAgdmFyIEdhbWVTcnZCYXNlQ21kTG9naWMgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqIFxyXG4gICAgICAgIEBjb25zdHJ1Y3RvclxyXG4gICAgICAgICovXHJcbiAgICBmdW5jdGlvbiBHYW1lU3J2QmFzZUNtZExvZ2ljKEdhbWVPYmopIHtcclxuICAgICAgdGhpcy5fcGkgPSBudWxsO1xyXG4gICAgICB0aGlzLl9HYW1lQ21kRnVuY09iaiA9IG51bGw7XHJcbiAgICAgIHRoaXMuX2xvZ2luSWQgPSAwO1xyXG4gICAgICB0aGlzLl9sb2dpbktleSA9IDA7XHJcbiAgICAgIHRoaXMuX0dhbWVPYmogPSBHYW1lT2JqO1xyXG4gICAgfSAvL2NvbnN0cnVjdG9yIGZ1bmN0aW9uIGVuZFxyXG5cclxuICAgIC8vY29ubmVjdCB0byBnYW1lIHNlcnZlclxyXG4gICAgR2FtZVNydkJhc2VDbWRMb2dpYy5wcm90b3R5cGUuQ29ubmVjdFRvU2VydmVyID0gZnVuY3Rpb24gKGxvZ2luSWQsIGxvZ2luS2V5LCBwcm90b2NvbFR5cGUsIGlwLCBwb3J0KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdjb25uZWN0IHRvIGdzIGxvZ2luSWQ6JyArIGxvZ2luSWQgKyAnLCBsb2dpbktleTonICsgbG9naW5LZXkgKyAnLCBwcm90b2NvbFR5cGU6JyArIHByb3RvY29sVHlwZSArICcsIGlwOicgKyBpcCArICcsIHBvcnQ6JyArIHBvcnQpO1xyXG4gICAgICB0aGlzLl9sb2dpbklkID0gbG9naW5JZDtcclxuICAgICAgdGhpcy5fbG9naW5LZXkgPSBsb2dpbktleTtcclxuICAgICAgLy/nm67liY3lj6rmnIPmnIkgV2ViU29ja2V0IOaIliBTZWN1cmVXZWJTb2NrZXQg5YWp56iuIHByb3RvY29sXHJcbiAgICAgIGlmIChwcm90b2NvbFR5cGUgPT0gMykge1xyXG4gICAgICAgIC8vV2ViU29ja2V0XHJcbiAgICAgICAgdGhpcy5fcGkgPSBuZXcgUGhvdG9uQ29udHJvbGxlci5QaG90b25JZihQaG90b24uQ29ubmVjdGlvblByb3RvY29sLldzLCBpcCArICc6JyArIHBvcnQpO1xyXG4gICAgICB9IGVsc2UgaWYgKHByb3RvY29sVHlwZSA9PSA1KSB7XHJcbiAgICAgICAgLy9TZWN1cmVXZWJTb2NrZXRcclxuICAgICAgICB0aGlzLl9waSA9IG5ldyBQaG90b25Db250cm9sbGVyLlBob3RvbklmKFBob3Rvbi5Db25uZWN0aW9uUHJvdG9jb2wuV3NzLCBpcCArICc6JyArIHBvcnQpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLl9waSAhPSBudWxsKSB7XHJcbiAgICAgICAgLy/oqK3lrpogUGhvdG9uIEludGVyZmFjZSDnianku7bnmoQgQ2FsbGJhY2sgRnVuY3Rpb25cclxuICAgICAgICB0aGlzLl9waS5Jbml0Q2FsbGJhY2tGdW5jdGlvbih0aGlzLCB0aGlzLlBlZXJTdGF0dXNDYWxsYmFjaywgdGhpcy5SZXNwb25zZUNhbGxiYWNrLCB0aGlzLkV2ZW50Q2FsbGJhY2spO1xyXG4gICAgICAgIHRoaXMuX3BpLmNvbm5lY3QoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvL3Bob3RvbiBwZWVyIHN0YXR1cyBjYWxsYmFjayBmdW5jdGlvblxyXG4gICAgR2FtZVNydkJhc2VDbWRMb2dpYy5wcm90b3R5cGUuUGVlclN0YXR1c0NhbGxiYWNrID0gZnVuY3Rpb24gKHN0LCBzZWxmT2JqKSB7XHJcbiAgICAgIHN3aXRjaCAoc3QpIHtcclxuICAgICAgICBjYXNlIFBob3Rvbi5QaG90b25QZWVyLlN0YXR1c0NvZGVzLmNvbm5lY3Q6IC8v5bey57aT6YCj5LiKIGdhbWUgc2VydmVyXHJcbiAgICAgICAgICBzZWxmT2JqLl9waS5zZW5kRGF0YSgxMDEsIHNlbGZPYmouX2xvZ2luSWQsIHNlbGZPYmouX2xvZ2luS2V5KTsgLy/pgIHlh7psb2dpbiBpZCDoiIcga2V5XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvL3Bob3RvbiBwZWVyIHJlcG9uc2UgY2FsbGJhY2sgZnVuY3Rpb25cclxuICAgIEdhbWVTcnZCYXNlQ21kTG9naWMucHJvdG90eXBlLlJlc3BvbnNlQ2FsbGJhY2sgPSBmdW5jdGlvbiAodmFscywgc2VsZk9iaikge1xyXG4gICAgICBjb25zb2xlLmxvZygnZ3MgcmVzcG9uc2UsIGNtZDonICsgdmFsc1swXSk7XHJcbiAgICAgIHN3aXRjaCAodmFsc1swXSkge1xyXG4gICAgICAgIGNhc2UgMTExOiAvL+aUtuWIsGdhbWXpgYrmiLLlsYDlt7LntpPmupblgpnlrozmiJDnmoToqIrmga/vvIjlj6rmnIPmnInkuIDmrKHvvIlcclxuICAgICAgICAgIHNlbGZPYmouX3BpLnNlbmREYXRhKDMxNjEpOyAvL+mAgeWHujMxNjHvvIzlj5blvpfmnKzmoYznmoTos4foqIoo6YCa55+lc2VydmVy5YmN56uv6YGK5oiy5bey57aT5rqW5YKZ5bCx57eSKVxyXG4gICAgICAgICAgLy/mirzms6jngrozMTYyXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgLy8gY2FzZSAzMDcyOiAvL+OAgOWbnuWCs+acrOahjOeahOizh+ioilxyXG4gICAgICAgIC8vICAgYnJlYWs7XHJcblxyXG4gICAgICAgIC8vIGNhc2UgMzA3MzogLy/jgIDlm57lgrPmirzms6jntZDmnpzos4foqIpcclxuICAgICAgICAvLyAgIGJyZWFrO1xyXG5cclxuICAgICAgICAvLyBjYXNlIDMwNzQ6IC8v44CA6YCa55+l6YGK5oiy56uv5YWN6LK76YGK5oiy57WQ5p2fXHJcbiAgICAgICAgLy8gICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHNlbGZPYmouX0dhbWVDbWRGdW5jT2JqKHZhbHMsIHNlbGZPYmouX3BpLCBzZWxmT2JqLl9HYW1lT2JqKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy9waG90b24gcGVlciBldmVudCBjYWxsYmFjayBmdW5jdGlvblxyXG4gICAgR2FtZVNydkJhc2VDbWRMb2dpYy5wcm90b3R5cGUuRXZlbnRDYWxsYmFjayA9IGZ1bmN0aW9uICh2YWxzLCBzZWxmT2JqKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdncyBldmVudCwgY21kOicgKyB2YWxzWzBdKTtcclxuICAgIH07XHJcblxyXG4gICAgLy9zZXQgZ2FtZSBjbWQgZnVuY3Rpb25cclxuICAgIEdhbWVTcnZCYXNlQ21kTG9naWMucHJvdG90eXBlLlNldEdhbWVDbWRGdW5jID0gZnVuY3Rpb24gKEZ1bmNPYmopIHtcclxuICAgICAgdGhpcy5fR2FtZUNtZEZ1bmNPYmogPSBGdW5jT2JqO1xyXG4gICAgfTtcclxuXHJcbiAgICAvL0dldCBQaG90b24gSW50ZXJmYWNlIG9iamVjdFxyXG4gICAgR2FtZVNydkJhc2VDbWRMb2dpYy5wcm90b3R5cGUuR2V0UEkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9waTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIEdhbWVTcnZCYXNlQ21kTG9naWM7XHJcbiAgfSkoKTsgLy9jbGFzcyBlbmRcclxuICBCYXNlQ21kTG9naWMuR2FtZVNydkJhc2VDbWRMb2dpYyA9IEdhbWVTcnZCYXNlQ21kTG9naWM7XHJcbn0pKEJhc2VDbWRMb2dpYyB8fCAoQmFzZUNtZExvZ2ljID0ge30pKTsgLy9uYW1lc3BhY2UgZW5kXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2VDbWRMb2dpYztcclxuXHJcbi8qXHJcbiAgICAvL+WEquWFiOiZleeQhuW6leWxpHNlcnZlciBldmVudO+8jOacquiZleeQhueahOWwgeWMheacg+mAj+mBjiBkZWZhdWx0IOWCs+e1puWklumDqOeJqeS7tlxyXG4gICAgUGhvdG9uSWYucHJvdG90eXBlLkJhc2VFdmVudENhbGxiYWNrID0gZnVuY3Rpb24odmFscywgb3V0T2JqKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkJhc2VFdmVudENhbGxiYWNrXCIpO1xyXG4gICAgICAgIHN3aXRjaCh2YWxzWzBdKXtcclxuICAgICAgICAgICAgY2FzZSAxMDI6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuX291dEV2ZW50Q2FsbGJhY2sodmFscywgb3V0T2JqKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+iZleeQhiBtYWluIHNlcnZlcueahOWwgeWMheioiuaBr1xyXG4gICAgUGhvdG9uSWYucHJvdG90eXBlLlByb2NNYWluU3J2UmVzcG9uc2UgPSBmdW5jdGlvbih2YWxzLCBvdXRPYmope1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUHJvY01haW5TcnZSZXNwb25zZSwgY21kIGlkOlwiK3ZhbHNbMF0pO1xyXG4gICAgICAgIHN3aXRjaCh2YWxzWzBdKXtcclxuICAgICAgICAgICAgY2FzZSAxMDE6XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwidmFscyAxOlwiK3ZhbHNbMV0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vdXRSc3BDYWxsYmFjayh2YWxzLCBvdXRPYmopO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvL+iZleeQhiBsb2JieSBzZXJ2ZXLnmoTlsIHljIXoqIrmga9cclxuICAgIFBob3RvbklmLnByb3RvdHlwZS5Qcm9jTG9iYnlTcnZSZXNwb25zZSA9IGZ1bmN0aW9uKHZhbHMsIG91dE9iail7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQcm9jTG9iYnlTcnZSZXNwb25zZSwgY21kIGlkOlwiK3ZhbHNbMF0pO1xyXG4gICAgICAgIHN3aXRjaCh2YWxzWzBdKXtcclxuICAgICAgICAgICAgY2FzZSAxMDE6XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwidmFscyAxOlwiK3ZhbHNbMV0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vdXRSc3BDYWxsYmFjayh2YWxzLCBvdXRPYmopO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvL+iZleeQhiBnYW1lIHNlcnZlcueahOWwgeWMheioiuaBr1xyXG4gICAgUGhvdG9uSWYucHJvdG90eXBlLlByb2NHYW1lU3J2UmVzcG9uc2UgPSBmdW5jdGlvbih2YWxzLCBvdXRPYmope1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUHJvY0dhbWVTcnZSZXNwb25zZSwgY21kIGlkOlwiK3ZhbHNbMF0pO1xyXG4gICAgICAgIHN3aXRjaCh2YWxzWzBdKXtcclxuICAgICAgICAgICAgY2FzZSAxMDE6XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwidmFscyAxOlwiK3ZhbHNbMV0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vdXRSc3BDYWxsYmFjayh2YWxzLCBvdXRPYmopO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuKi9cclxuIl19