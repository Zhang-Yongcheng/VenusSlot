
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

            cc.find('Canvas/LoginMessage/gohome').active = true;
            cc.find('Canvas/LoginMessage/text').getComponent(cc.Label).string = "登入失敗";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQmFzZUNtZExvZ2ljLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJPYnNlcnZhYmxlIiwiUGhvdG9uIiwiUGhvdG9uQ29udHJvbGxlciIsIlB1YmxpY1NldFVwIiwiQmFzZUNtZExvZ2ljIiwib2JzZXJ2YWJsZSIsIk1haW5TcnZDbWRMb2dpYyIsInBpIiwiX3BpIiwiX2xiU3J2T2JqIiwiX2FjY291bnQiLCJfcGFzc3dvcmQiLCJwcm90b3R5cGUiLCJSdW5Mb2dpbiIsImFjY291bnQiLCJwYXNzd29yZCIsInR5cGUiLCJfdHlwZSIsIkluaXRDYWxsYmFja0Z1bmN0aW9uIiwiUGVlclN0YXR1c0NhbGxiYWNrIiwiUmVzcG9uc2VDYWxsYmFjayIsIkV2ZW50Q2FsbGJhY2siLCJjb25uZWN0IiwiU2V0TGJTcnZDbWRMb2dpY09iaiIsImxiU3J2Q21kTG9naWNPYmoiLCJzdCIsInNlbGZPYmoiLCJQaG90b25QZWVyIiwiU3RhdHVzQ29kZXMiLCJzZW5kRGF0YSIsInZhbHMiLCJjb25zb2xlIiwibG9nIiwiY2MiLCJmaW5kIiwiYWN0aXZlIiwiZ2V0Q29tcG9uZW50IiwiTGFiZWwiLCJzdHJpbmciLCJDb25uZWN0VG9TZXJ2ZXIiLCJMb2JieVNydkNtZExvZ2ljIiwiZ2FtZWlkIiwidmVyc2lvbmNvZGUiLCJfZ2FtZWlkIiwiX3ZlcnNpb25jb2RlIiwiX2xvZ2luSWQiLCJfbG9naW5LZXkiLCJfZ2FtZVNydk9iaiIsIl9wcm90b2NvbFR5cGUiLCJsb2dpbklkIiwibG9naW5LZXkiLCJwcm90b2NvbFR5cGUiLCJpcCIsInBvcnQiLCJQaG90b25JZiIsIkNvbm5lY3Rpb25Qcm90b2NvbCIsIldzIiwiV3NzIiwiU2V0R2FtZVNydkNtZExvZ2ljT2JqIiwiZ2FtZVNydkNtZExvZ2ljT2JqIiwiR2FtZVNydkJhc2VDbWRMb2dpYyIsIkdhbWVPYmoiLCJfR2FtZUNtZEZ1bmNPYmoiLCJfR2FtZU9iaiIsIlNldEdhbWVDbWRGdW5jIiwiRnVu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QUNBIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IE9ic2VydmFibGUgfSA9IHJlcXVpcmUoJy4vb2JzZXJ2YWJsZS5jYycpO1xyXG5jb25zdCBQaG90b24gPSByZXF1aXJlKCcuL1Bob3Rvbi1KYXZhc2NyaXB0X1NESycpO1xyXG5jb25zdCBQaG90b25Db250cm9sbGVyID0gcmVxdWlyZSgnLi9QaG90b25fSW50ZXJmYWNlJyk7XHJcbmxldCBQdWJsaWNTZXRVcD1yZXF1aXJlKCdQdWJsaWNTZXRVcCcpO1xyXG4vKipcclxuQG5hbWVzcGFjZSBCYXNlQ21kTG9naWNcclxu6JmV55CG55m75YWl44CB5YWl5bGA562J5bqV5bGk6KiK5oGv55SoXHJcbiovXHJcbi8vIHByZXZlbnQgZ2xvYmFscyByZW5hbWluZyBieSBjbG9zdXJlIGNvbXBpbGllclxyXG52YXIgQmFzZUNtZExvZ2ljO1xyXG5cclxuKGZ1bmN0aW9uIChCYXNlQ21kTG9naWMpIHtcclxuICBjb25zdCBvYnNlcnZhYmxlID0gT2JzZXJ2YWJsZSgpO1xyXG4gIC8qKiBcclxuICAgICogXHJcbiAgICBAY2xhc3MgTWFpblNydkNtZExvZ2ljXHJcbiAgICAqL1xyXG4gIHZhciBNYWluU3J2Q21kTG9naWMgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqIFxyXG4gICAgICAgIEBjb25zdHJ1Y3RvclxyXG4gICAgICAgIEBwYXJhbSB7UGhvdG9uQ29udHJvbGxlci5QaG90b25JZn0gcGkgcGhvdG9uIGludGVyZmFjZVxyXG4gICAgICAgICovXHJcbiAgICBmdW5jdGlvbiBNYWluU3J2Q21kTG9naWMocGkpIHtcclxuICAgICAgdGhpcy5fcGkgPSBwaTtcclxuICAgICAgdGhpcy5fbGJTcnZPYmogPSBudWxsO1xyXG4gICAgICB0aGlzLl9hY2NvdW50ID0gJyc7XHJcbiAgICAgIHRoaXMuX3Bhc3N3b3JkID0gJyc7XHJcbiAgICB9IC8vY29uc3RydWN0b3IgZnVuY3Rpb24gZW5kXHJcblxyXG4gICAgLy9sb2dpblxyXG4gICAgTWFpblNydkNtZExvZ2ljLnByb3RvdHlwZS5SdW5Mb2dpbiA9IGZ1bmN0aW9uIChhY2NvdW50LCBwYXNzd29yZCx0eXBlKSB7XHJcbiAgICAgIHRoaXMuX2FjY291bnQgPSBhY2NvdW50O1xyXG4gICAgICB0aGlzLl9wYXNzd29yZCA9IHBhc3N3b3JkO1xyXG4gICAgICB0aGlzLl90eXBlID0gdHlwZTtcclxuICAgICAgdGhpcy5fcGkuSW5pdENhbGxiYWNrRnVuY3Rpb24odGhpcywgdGhpcy5QZWVyU3RhdHVzQ2FsbGJhY2ssIHRoaXMuUmVzcG9uc2VDYWxsYmFjaywgdGhpcy5FdmVudENhbGxiYWNrKTtcclxuICAgICAgdGhpcy5fcGkuY29ubmVjdCgpOyAvL+WwjW1haW4gc2VydmVy5YGa6YCj57eaXHJcbiAgICB9O1xyXG5cclxuICAgIC8vc2V0IGxvYmJ5IHNlcnZlciBjb21tYW5kIGxvZ2ljXHJcbiAgICBNYWluU3J2Q21kTG9naWMucHJvdG90eXBlLlNldExiU3J2Q21kTG9naWNPYmogPSBmdW5jdGlvbiAobGJTcnZDbWRMb2dpY09iaikge1xyXG4gICAgICB0aGlzLl9sYlNydk9iaiA9IGxiU3J2Q21kTG9naWNPYmo7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vcGhvdG9uIHBlZXIgc3RhdHVzIGNhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICBNYWluU3J2Q21kTG9naWMucHJvdG90eXBlLlBlZXJTdGF0dXNDYWxsYmFjayA9IGZ1bmN0aW9uIChzdCwgc2VsZk9iaikge1xyXG4gICAgICBzd2l0Y2ggKHN0KSB7XHJcbiAgICAgICAgY2FzZSBQaG90b24uUGhvdG9uUGVlci5TdGF0dXNDb2Rlcy5jb25uZWN0OiAvL+W3sue2k+mAo+S4iiBtYWluIHNlcnZlclxyXG4gICAgICAgICAgc2VsZk9iai5fcGkuc2VuZERhdGEoMTAxLCBzZWxmT2JqLl9hY2NvdW50LCBzZWxmT2JqLl9wYXNzd29yZCwgc2VsZk9iai5fdHlwZSwgMCwgJycsIDk5OSk7IC8v6YCB5Ye65biz5a+GXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvL3Bob3RvbiBwZWVyIHJlcG9uc2UgY2FsbGJhY2sgZnVuY3Rpb25cclxuICAgIE1haW5TcnZDbWRMb2dpYy5wcm90b3R5cGUuUmVzcG9uc2VDYWxsYmFjayA9IGZ1bmN0aW9uICh2YWxzLCBzZWxmT2JqKSB7XHJcbiAgICAgIHN3aXRjaCAodmFsc1swXSkge1xyXG4gICAgICAgIGNhc2UgMTAxOiAvL3NlcnZlcuerr+eZu+WFpeWbnuWCs+ioiuaBr1xyXG4gICAgICAgICAgaWYgKHZhbHNbMV0gPT0gMSkge1xyXG4gICAgICAgICAgICAvL+aIkOWKn1xyXG4gICAgICAgICAgICAvL+ebtOaOpeetiXNlcnZlcumAmuefpSBsb2JieSBzZXJ2ZXIg6LOH6KiK5YaN5YGa6YCj57eaXHJcblxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAoXHJcbiAgICAgICAgICAgICAgdmFsc1sxXSAvL++8iDDvvJrlpLHmlZcsIDLvvJrniYjmnKzpjK/oqqQsIDPvvJrntq3orbfkuK0sIDQ66YeN6KSH55m75YWlLCA1OuS5i+WJjemBiuaIsuWxgOWwmuacque1kOadnyA277ya5rKS5pyJ6YCy6KGM6YGK5oiy55qE5qyK6ZmQ77yI5rS95a6i5pyN77yJ77yJXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnmbvlhaVNYWluIFNyduWkseaVlycpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eZu+WFpU1haW4gU3J254mI5pys6Yyv6KqkJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTWFpbiBTcnbntq3orbfkuK0nKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNYWluIFNydumHjeikh+eZu+WFpScpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+S5i+WJjemBiuaIsuWxgOWwmuacque1kOadnycpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aykuaciemAsuihjOmBiuaIsueahOasiumZkCcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9Mb2dpbk1lc3NhZ2UvZ29ob21lJykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL0xvZ2luTWVzc2FnZS90ZXh0JykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9XCLnmbvlhaXlpLHmlZdcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJtcyByZXNwb25zZTpcIit2YWxzKTtcclxuICAgIH07XHJcblxyXG4gICAgLy9waG90b24gcGVlciBldmVudCBjYWxsYmFjayBmdW5jdGlvblxyXG4gICAgTWFpblNydkNtZExvZ2ljLnByb3RvdHlwZS5FdmVudENhbGxiYWNrID0gZnVuY3Rpb24gKHZhbHMsIHNlbGZPYmopIHtcclxuICAgICAgc3dpdGNoICh2YWxzWzBdKSB7XHJcbiAgICAgICAgY2FzZSAxMDI6IC8v55SxIG1haW4gc2VydmVy6YCa55+l55qEIGxvYmJ5IHNlcnZlciDos4foqIpcclxuICAgICAgICAgIC8vdmFsc1sxXTpsb2dpbklEXHJcbiAgICAgICAgICAvL3ZhbHNbMl06bG9naW5LZXlcclxuICAgICAgICAgIC8vdmFsc1szXTpwcm90b2NvbCgwOlVua25vd24gMTpVZHAgMjpUY3AgMzpXZWJTb2NrZXQgNDpIdHRwIDU6U2VjdXJlV2ViU29ja2V0KVxyXG4gICAgICAgICAgLy92YWxzWzRdOmlwXHJcbiAgICAgICAgICAvL3ZhbHNbNV06cG9ydFxyXG4gICAgICAgICAgc2VsZk9iai5fbGJTcnZPYmouQ29ubmVjdFRvU2VydmVyKHZhbHNbMV0sIHZhbHNbMl0sIHZhbHNbM10sIHZhbHNbNF0sIHZhbHNbNV0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgLy9jb25zb2xlLmxvZyhcIm1zIGV2ZW50OlwiK2V2dCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBNYWluU3J2Q21kTG9naWM7XHJcbiAgfSkoKTsgLy9jbGFzcyBlbmRcclxuICBCYXNlQ21kTG9naWMuTWFpblNydkNtZExvZ2ljID0gTWFpblNydkNtZExvZ2ljO1xyXG5cclxuICAvKiogXHJcbiAgICAqIFxyXG4gICAgQGNsYXNzIExvYmJ5U3J2Q21kTG9naWNcclxuICAgICovXHJcbiAgdmFyIExvYmJ5U3J2Q21kTG9naWMgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqIFxyXG4gICAgICAgIEBjb25zdHJ1Y3RvclxyXG4gICAgICAgICovXHJcbiAgICBmdW5jdGlvbiBMb2JieVNydkNtZExvZ2ljKGdhbWVpZCwgdmVyc2lvbmNvZGUpIHtcclxuICAgICAgdGhpcy5fcGkgPSBudWxsO1xyXG4gICAgICB0aGlzLl9nYW1laWQgPSBnYW1laWQ7XHJcbiAgICAgIHRoaXMuX3ZlcnNpb25jb2RlID0gdmVyc2lvbmNvZGU7XHJcbiAgICAgIHRoaXMuX2xvZ2luSWQgPSAwO1xyXG4gICAgICB0aGlzLl9sb2dpbktleSA9IDA7XHJcbiAgICAgIHRoaXMuX2dhbWVTcnZPYmogPSBudWxsO1xyXG4gICAgICB0aGlzLl9wcm90b2NvbFR5cGUgPSAwO1xyXG4gICAgfSAvL2NvbnN0cnVjdG9yIGZ1bmN0aW9uIGVuZFxyXG5cclxuICAgIC8vY29ubmVjdCB0byBsb2JieSBzZXJ2ZXJcclxuICAgIExvYmJ5U3J2Q21kTG9naWMucHJvdG90eXBlLkNvbm5lY3RUb1NlcnZlciA9IGZ1bmN0aW9uIChsb2dpbklkLCBsb2dpbktleSwgcHJvdG9jb2xUeXBlLCBpcCwgcG9ydCkge1xyXG4gICAgICB0aGlzLl9sb2dpbklkID0gbG9naW5JZDtcclxuICAgICAgdGhpcy5fbG9naW5LZXkgPSBsb2dpbktleTtcclxuICAgICAgdGhpcy5fcHJvdG9jb2xUeXBlID0gcHJvdG9jb2xUeXBlO1xyXG4gICAgICAvL+ebruWJjeWPquacg+aciSBXZWJTb2NrZXQg5oiWIFNlY3VyZVdlYlNvY2tldCDlhannqK4gcHJvdG9jb2xcclxuICAgICAgaWYgKHByb3RvY29sVHlwZSA9PSAzKSB7XHJcbiAgICAgICAgLy9XZWJTb2NrZXRcclxuICAgICAgICB0aGlzLl9waSA9IG5ldyBQaG90b25Db250cm9sbGVyLlBob3RvbklmKFBob3Rvbi5Db25uZWN0aW9uUHJvdG9jb2wuV3MsIGlwICsgJzonICsgcG9ydCk7XHJcbiAgICAgIH0gZWxzZSBpZiAocHJvdG9jb2xUeXBlID09IDUpIHtcclxuICAgICAgICAvL1NlY3VyZVdlYlNvY2tldFxyXG4gICAgICAgIHRoaXMuX3BpID0gbmV3IFBob3RvbkNvbnRyb2xsZXIuUGhvdG9uSWYoUGhvdG9uLkNvbm5lY3Rpb25Qcm90b2NvbC5Xc3MsIGlwICsgJzonICsgcG9ydCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuX3BpICE9IG51bGwpIHtcclxuICAgICAgICAvL+ioreWumiBQaG90b24gSW50ZXJmYWNlIOeJqeS7tueahCBDYWxsYmFjayBGdW5jdGlvblxyXG4gICAgICAgIHRoaXMuX3BpLkluaXRDYWxsYmFja0Z1bmN0aW9uKHRoaXMsIHRoaXMuUGVlclN0YXR1c0NhbGxiYWNrLCB0aGlzLlJlc3BvbnNlQ2FsbGJhY2ssIHRoaXMuRXZlbnRDYWxsYmFjayk7XHJcbiAgICAgICAgdGhpcy5fcGkuY29ubmVjdCgpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vc2V0IGdhbWUgc2VydmVyIGNvbW1hbmQgbG9naWNcclxuICAgIExvYmJ5U3J2Q21kTG9naWMucHJvdG90eXBlLlNldEdhbWVTcnZDbWRMb2dpY09iaiA9IGZ1bmN0aW9uIChnYW1lU3J2Q21kTG9naWNPYmopIHtcclxuICAgICAgdGhpcy5fZ2FtZVNydk9iaiA9IGdhbWVTcnZDbWRMb2dpY09iajtcclxuICAgIH07XHJcblxyXG4gICAgLy9waG90b24gcGVlciBzdGF0dXMgY2FsbGJhY2sgZnVuY3Rpb25cclxuICAgIExvYmJ5U3J2Q21kTG9naWMucHJvdG90eXBlLlBlZXJTdGF0dXNDYWxsYmFjayA9IGZ1bmN0aW9uIChzdCwgc2VsZk9iaikge1xyXG4gICAgICBzd2l0Y2ggKHN0KSB7XHJcbiAgICAgICAgY2FzZSBQaG90b24uUGhvdG9uUGVlci5TdGF0dXNDb2Rlcy5jb25uZWN0OiAvL+W3sue2k+mAo+S4iiBsb2JieSBzZXJ2ZXJcclxuICAgICAgICAgIHNlbGZPYmouX3BpLnNlbmREYXRhKDEwMSwgc2VsZk9iai5fbG9naW5JZCwgc2VsZk9iai5fbG9naW5LZXkpOyAvL+mAgeWHumxvZ2luIGlkIOiIhyBrZXlcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vcGhvdG9uIHBlZXIgcmVwb25zZSBjYWxsYmFjayBmdW5jdGlvblxyXG4gICAgTG9iYnlTcnZDbWRMb2dpYy5wcm90b3R5cGUuUmVzcG9uc2VDYWxsYmFjayA9IGZ1bmN0aW9uICh2YWxzLCBzZWxmT2JqKSB7XHJcbiAgICAgIHN3aXRjaCAodmFsc1swXSkge1xyXG4gICAgICAgIGNhc2UgMTAyOiAvL+eZu+WFpeeLgOaFi+WbnuimhlxyXG4gICAgICAgICAgaWYgKHZhbHNbMV0gPT0gMSkge1xyXG4gICAgICAgICAgICAvLy8v54uA5oWL5Luj56K877yIMO+8muWkseaVlywgMe+8muaIkOWKnywgMu+8mueJiOacrOmMr+iqpCwgM++8mue2reitt+S4re+8iVxyXG4gICAgICAgICAgICAvL+WKoOWFpemBiuaIsuWxgO+8iHRoaXMuX2dhbWVpZO+8iVxyXG4gICAgICAgICAgICBzZWxmT2JqLl9waS5zZW5kRGF0YSgxMDMsIHNlbGZPYmouX2dhbWVpZCwgLTEsIC0xLCBzZWxmT2JqLl92ZXJzaW9uY29kZSk7XHJcblxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3dpdGNoICh2YWxzWzFdKSB7XHJcbiAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eZu+WFpUxCIFNydiDlpLHmlZcnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnmbvlhaVMQiBTcnbniYjmnKzpjK/oqqQnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMQiBTcnYg57at6K235LitJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIDEwMzogLy9zZXJ2ZXLpgIHlm57nmoRnYW1lIHNlcnZlcumAo+e3muizh+ioilxyXG4gICAgICAgICAgLy92YWxzWzFdOmxvZ2luSURcclxuICAgICAgICAgIC8vdmFsc1syXTpsb2dpbktleVxyXG4gICAgICAgICAgLy92YWxzWzNdOmlwXHJcbiAgICAgICAgICAvL3ZhbHNbNF06cG9ydFxyXG4gICAgICAgICAgLy92YWxzWzVdOnJlc3VsdFxyXG4gICAgICAgICAgaWYgKHZhbHNbNV0gPT0gMSkge1xyXG4gICAgICAgICAgICBzZWxmT2JqLl9nYW1lU3J2T2JqLkNvbm5lY3RUb1NlcnZlcih2YWxzWzFdLCB2YWxzWzJdLCBzZWxmT2JqLl9wcm90b2NvbFR5cGUsIHZhbHNbM10sIHZhbHNbNF0pO1xyXG5cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoXHJcbiAgICAgICAgICAgICAgdmFsc1s1XSAvLzDvvJrpjK/oqqQgMe+8muaIkOWKnyAyOumBiuaIsue2reitt+S4rSAzOueJiOacrOmMr+iqpFxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5Yqg5YWlZ2FtZSBzZXJ2ZXLpgYrmiLLlsYDpjK/oqqQnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHYW1lIFNydiDpgYrmiLLntq3orbfkuK0nKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfopoHmsYLliqDlhaVHYW1lIFNydiDniYjmnKzpjK/oqqQnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgMTA0OiAvL+WKoOWFpWdhbWUgc2VydmVy6YGK5oiy5bGA57WQ5p6c5Zue6KaGKOWboOeCuuWPr+iDveacg+iiq2dhbWUgc2VydmVy5by35Yi25pa357ea77yM5omA5Lul55SxbG9iYnkgc2VydmVy6YCy6KGM5Zue6KaGKVxyXG4gICAgICAgICAgaWYgKHZhbHNbMV0gIT0gMSkge1xyXG4gICAgICAgICAgICAvLy0x77ya5bu656uL5oi/6ZaT5aSx5pWXIDDvvJrpjK/oqqQgMTrmiJDlip8gMu+8mum7nuaVuOS4jei2syAz77ya5rKS5pyJ6YCy6KGM6YGK5oiy55qE5qyK6ZmQ77yI5rS95a6i5pyN77yJIF0sIDTvvJrnhKHlj6/nlKjmiL/plpMsIDXvvJrmraTnjqnlrrbkuYvliY3pgYrmiLLlsYDmnKrntZDmnZ9cclxuICAgICAgICAgICAgc3dpdGNoICh2YWxzWzFdKSB7XHJcbiAgICAgICAgICAgICAgY2FzZSAtMTpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflu7rnq4vmiL/plpPlpLHmlZcnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfliqDlhaXpgYrmiLLpjK/oqqQnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfpu57mlbjkuI3otrMnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmspLmnInpgLLooYzpgYrmiLLnmoTmrIrpmZAnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnhKHlj6/nlKjmiL/plpMnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmraTnjqnlrrbkuYvliY3pgYrmiLLlsYDmnKrntZDmnZ8nKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coJ2xzIHJlc3BvbnNlLCBjbWQ6JyArIHZhbHNbMF0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAvL3Bob3RvbiBwZWVyIGV2ZW50IGNhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICBMb2JieVNydkNtZExvZ2ljLnByb3RvdHlwZS5FdmVudENhbGxiYWNrID0gZnVuY3Rpb24gKHZhbHMsIHNlbGZPYmopIHtcclxuICAgICAgY29uc29sZS5sb2coJ2xzIGV2ZW50LCBjbWQ6JyArIHZhbHNbMF0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gTG9iYnlTcnZDbWRMb2dpYztcclxuICB9KSgpOyAvL2NsYXNzIGVuZFxyXG4gIEJhc2VDbWRMb2dpYy5Mb2JieVNydkNtZExvZ2ljID0gTG9iYnlTcnZDbWRMb2dpYztcclxuXHJcbiAgLyoqIFxyXG4gICAgKiBcclxuICAgIEBjbGFzcyBHYW1lU3J2QmFzZUNtZExvZ2ljXHJcbiAgICAqL1xyXG4gIHZhciBHYW1lU3J2QmFzZUNtZExvZ2ljID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKiBcclxuICAgICAgICBAY29uc3RydWN0b3JcclxuICAgICAgICAqL1xyXG4gICAgZnVuY3Rpb24gR2FtZVNydkJhc2VDbWRMb2dpYyhHYW1lT2JqKSB7XHJcbiAgICAgIHRoaXMuX3BpID0gbnVsbDtcclxuICAgICAgdGhpcy5fR2FtZUNtZEZ1bmNPYmogPSBudWxsO1xyXG4gICAgICB0aGlzLl9sb2dpbklkID0gMDtcclxuICAgICAgdGhpcy5fbG9naW5LZXkgPSAwO1xyXG4gICAgICB0aGlzLl9HYW1lT2JqID0gR2FtZU9iajtcclxuICAgIH0gLy9jb25zdHJ1Y3RvciBmdW5jdGlvbiBlbmRcclxuXHJcbiAgICAvL2Nvbm5lY3QgdG8gZ2FtZSBzZXJ2ZXJcclxuICAgIEdhbWVTcnZCYXNlQ21kTG9naWMucHJvdG90eXBlLkNvbm5lY3RUb1NlcnZlciA9IGZ1bmN0aW9uIChsb2dpbklkLCBsb2dpbktleSwgcHJvdG9jb2xUeXBlLCBpcCwgcG9ydCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnY29ubmVjdCB0byBncyBsb2dpbklkOicgKyBsb2dpbklkICsgJywgbG9naW5LZXk6JyArIGxvZ2luS2V5ICsgJywgcHJvdG9jb2xUeXBlOicgKyBwcm90b2NvbFR5cGUgKyAnLCBpcDonICsgaXAgKyAnLCBwb3J0OicgKyBwb3J0KTtcclxuICAgICAgdGhpcy5fbG9naW5JZCA9IGxvZ2luSWQ7XHJcbiAgICAgIHRoaXMuX2xvZ2luS2V5ID0gbG9naW5LZXk7XHJcbiAgICAgIC8v55uu5YmN5Y+q5pyD5pyJIFdlYlNvY2tldCDmiJYgU2VjdXJlV2ViU29ja2V0IOWFqeeoriBwcm90b2NvbFxyXG4gICAgICBpZiAocHJvdG9jb2xUeXBlID09IDMpIHtcclxuICAgICAgICAvL1dlYlNvY2tldFxyXG4gICAgICAgIHRoaXMuX3BpID0gbmV3IFBob3RvbkNvbnRyb2xsZXIuUGhvdG9uSWYoUGhvdG9uLkNvbm5lY3Rpb25Qcm90b2NvbC5XcywgaXAgKyAnOicgKyBwb3J0KTtcclxuICAgICAgfSBlbHNlIGlmIChwcm90b2NvbFR5cGUgPT0gNSkge1xyXG4gICAgICAgIC8vU2VjdXJlV2ViU29ja2V0XHJcbiAgICAgICAgdGhpcy5fcGkgPSBuZXcgUGhvdG9uQ29udHJvbGxlci5QaG90b25JZihQaG90b24uQ29ubmVjdGlvblByb3RvY29sLldzcywgaXAgKyAnOicgKyBwb3J0KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5fcGkgIT0gbnVsbCkge1xyXG4gICAgICAgIC8v6Kit5a6aIFBob3RvbiBJbnRlcmZhY2Ug54mp5Lu255qEIENhbGxiYWNrIEZ1bmN0aW9uXHJcbiAgICAgICAgdGhpcy5fcGkuSW5pdENhbGxiYWNrRnVuY3Rpb24odGhpcywgdGhpcy5QZWVyU3RhdHVzQ2FsbGJhY2ssIHRoaXMuUmVzcG9uc2VDYWxsYmFjaywgdGhpcy5FdmVudENhbGxiYWNrKTtcclxuICAgICAgICB0aGlzLl9waS5jb25uZWN0KCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy9waG90b24gcGVlciBzdGF0dXMgY2FsbGJhY2sgZnVuY3Rpb25cclxuICAgIEdhbWVTcnZCYXNlQ21kTG9naWMucHJvdG90eXBlLlBlZXJTdGF0dXNDYWxsYmFjayA9IGZ1bmN0aW9uIChzdCwgc2VsZk9iaikge1xyXG4gICAgICBzd2l0Y2ggKHN0KSB7XHJcbiAgICAgICAgY2FzZSBQaG90b24uUGhvdG9uUGVlci5TdGF0dXNDb2Rlcy5jb25uZWN0OiAvL+W3sue2k+mAo+S4iiBnYW1lIHNlcnZlclxyXG4gICAgICAgICAgc2VsZk9iai5fcGkuc2VuZERhdGEoMTAxLCBzZWxmT2JqLl9sb2dpbklkLCBzZWxmT2JqLl9sb2dpbktleSk7IC8v6YCB5Ye6bG9naW4gaWQg6IiHIGtleVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy9waG90b24gcGVlciByZXBvbnNlIGNhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICBHYW1lU3J2QmFzZUNtZExvZ2ljLnByb3RvdHlwZS5SZXNwb25zZUNhbGxiYWNrID0gZnVuY3Rpb24gKHZhbHMsIHNlbGZPYmopIHtcclxuICAgICAgY29uc29sZS5sb2coJ2dzIHJlc3BvbnNlLCBjbWQ6JyArIHZhbHNbMF0pO1xyXG4gICAgICBzd2l0Y2ggKHZhbHNbMF0pIHtcclxuICAgICAgICBjYXNlIDExMTogLy/mlLbliLBnYW1l6YGK5oiy5bGA5bey57aT5rqW5YKZ5a6M5oiQ55qE6KiK5oGv77yI5Y+q5pyD5pyJ5LiA5qyh77yJXHJcbiAgICAgICAgICBzZWxmT2JqLl9waS5zZW5kRGF0YSgzMTYxKTsgLy/pgIHlh7ozMTYx77yM5Y+W5b6X5pys5qGM55qE6LOH6KiKKOmAmuefpXNlcnZlcuWJjeerr+mBiuaIsuW3sue2k+a6luWCmeWwsee3kilcclxuICAgICAgICAgIC8v5oq85rOo54K6MzE2MlxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIC8vIGNhc2UgMzA3MjogLy/jgIDlm57lgrPmnKzmoYznmoTos4foqIpcclxuICAgICAgICAvLyAgIGJyZWFrO1xyXG5cclxuICAgICAgICAvLyBjYXNlIDMwNzM6IC8v44CA5Zue5YKz5oq85rOo57WQ5p6c6LOH6KiKXHJcbiAgICAgICAgLy8gICBicmVhaztcclxuXHJcbiAgICAgICAgLy8gY2FzZSAzMDc0OiAvL+OAgOmAmuefpemBiuaIsuerr+WFjeiyu+mBiuaIsue1kOadn1xyXG4gICAgICAgIC8vICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBzZWxmT2JqLl9HYW1lQ21kRnVuY09iaih2YWxzLCBzZWxmT2JqLl9waSwgc2VsZk9iai5fR2FtZU9iaik7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8vcGhvdG9uIHBlZXIgZXZlbnQgY2FsbGJhY2sgZnVuY3Rpb25cclxuICAgIEdhbWVTcnZCYXNlQ21kTG9naWMucHJvdG90eXBlLkV2ZW50Q2FsbGJhY2sgPSBmdW5jdGlvbiAodmFscywgc2VsZk9iaikge1xyXG4gICAgICBjb25zb2xlLmxvZygnZ3MgZXZlbnQsIGNtZDonICsgdmFsc1swXSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vc2V0IGdhbWUgY21kIGZ1bmN0aW9uXHJcbiAgICBHYW1lU3J2QmFzZUNtZExvZ2ljLnByb3RvdHlwZS5TZXRHYW1lQ21kRnVuYyA9IGZ1bmN0aW9uIChGdW5jT2JqKSB7XHJcbiAgICAgIHRoaXMuX0dhbWVDbWRGdW5jT2JqID0gRnVuY09iajtcclxuICAgIH07XHJcblxyXG4gICAgLy9HZXQgUGhvdG9uIEludGVyZmFjZSBvYmplY3RcclxuICAgIEdhbWVTcnZCYXNlQ21kTG9naWMucHJvdG90eXBlLkdldFBJID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fcGk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBHYW1lU3J2QmFzZUNtZExvZ2ljO1xyXG4gIH0pKCk7IC8vY2xhc3MgZW5kXHJcbiAgQmFzZUNtZExvZ2ljLkdhbWVTcnZCYXNlQ21kTG9naWMgPSBHYW1lU3J2QmFzZUNtZExvZ2ljO1xyXG59KShCYXNlQ21kTG9naWMgfHwgKEJhc2VDbWRMb2dpYyA9IHt9KSk7IC8vbmFtZXNwYWNlIGVuZFxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBCYXNlQ21kTG9naWM7XHJcblxyXG4vKlxyXG4gICAgLy/lhKrlhYjomZXnkIblupXlsaRzZXJ2ZXIgZXZlbnTvvIzmnKromZXnkIbnmoTlsIHljIXmnIPpgI/pgY4gZGVmYXVsdCDlgrPntablpJbpg6jnianku7ZcclxuICAgIFBob3RvbklmLnByb3RvdHlwZS5CYXNlRXZlbnRDYWxsYmFjayA9IGZ1bmN0aW9uKHZhbHMsIG91dE9iail7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJCYXNlRXZlbnRDYWxsYmFja1wiKTtcclxuICAgICAgICBzd2l0Y2godmFsc1swXSl7XHJcbiAgICAgICAgICAgIGNhc2UgMTAyOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vdXRFdmVudENhbGxiYWNrKHZhbHMsIG91dE9iaik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/omZXnkIYgbWFpbiBzZXJ2ZXLnmoTlsIHljIXoqIrmga9cclxuICAgIFBob3RvbklmLnByb3RvdHlwZS5Qcm9jTWFpblNydlJlc3BvbnNlID0gZnVuY3Rpb24odmFscywgb3V0T2JqKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlByb2NNYWluU3J2UmVzcG9uc2UsIGNtZCBpZDpcIit2YWxzWzBdKTtcclxuICAgICAgICBzd2l0Y2godmFsc1swXSl7XHJcbiAgICAgICAgICAgIGNhc2UgMTAxOlxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInZhbHMgMTpcIit2YWxzWzFdKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fb3V0UnNwQ2FsbGJhY2sodmFscywgb3V0T2JqKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy/omZXnkIYgbG9iYnkgc2VydmVy55qE5bCB5YyF6KiK5oGvXHJcbiAgICBQaG90b25JZi5wcm90b3R5cGUuUHJvY0xvYmJ5U3J2UmVzcG9uc2UgPSBmdW5jdGlvbih2YWxzLCBvdXRPYmope1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUHJvY0xvYmJ5U3J2UmVzcG9uc2UsIGNtZCBpZDpcIit2YWxzWzBdKTtcclxuICAgICAgICBzd2l0Y2godmFsc1swXSl7XHJcbiAgICAgICAgICAgIGNhc2UgMTAxOlxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInZhbHMgMTpcIit2YWxzWzFdKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fb3V0UnNwQ2FsbGJhY2sodmFscywgb3V0T2JqKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy/omZXnkIYgZ2FtZSBzZXJ2ZXLnmoTlsIHljIXoqIrmga9cclxuICAgIFBob3RvbklmLnByb3RvdHlwZS5Qcm9jR2FtZVNydlJlc3BvbnNlID0gZnVuY3Rpb24odmFscywgb3V0T2JqKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlByb2NHYW1lU3J2UmVzcG9uc2UsIGNtZCBpZDpcIit2YWxzWzBdKTtcclxuICAgICAgICBzd2l0Y2godmFsc1swXSl7XHJcbiAgICAgICAgICAgIGNhc2UgMTAxOlxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInZhbHMgMTpcIit2YWxzWzFdKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fb3V0UnNwQ2FsbGJhY2sodmFscywgb3V0T2JqKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiovXHJcbiJdfQ==