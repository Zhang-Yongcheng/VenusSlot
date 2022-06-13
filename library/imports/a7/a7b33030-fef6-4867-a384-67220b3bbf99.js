"use strict";
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

    MainSrvCmdLogic.prototype.GetPI = function () {
      return this._pi;
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
      } //console.log('ls response, cmd:' + vals[0]);

    }; //photon peer event callback function


    LobbySrvCmdLogic.prototype.EventCallback = function (vals, selfObj) {
      console.log('ls event, cmd:' + vals[0]);
    };

    LobbySrvCmdLogic.prototype.GetPI = function () {
      return this._pi;
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
      //console.log('connect to gs loginId:' + loginId + ', loginKey:' + loginKey + ', protocolType:' + protocolType + ', ip:' + ip + ', port:' + port);
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
      if (vals[0] != 3075) {
        console.log('gs response, cmd:' + vals[0] + "--%o", vals);
      }

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