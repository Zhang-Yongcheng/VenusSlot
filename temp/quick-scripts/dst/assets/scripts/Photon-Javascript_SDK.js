
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Photon-Javascript_SDK.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b3e2fCQxetN24gGB83KHjgJ', 'Photon-Javascript_SDK');
// scripts/Photon-Javascript_SDK.js

"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}(); /// --------------------------------------------------------------------------------------------------------------------------------------------------------------
/// ------------------- Exitgames.Common
/// --------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
    Exitgames
    @namespace Exitgames
*/

/**
    Exitgames utilities
    @namespace Exitgames.Common
*/


var Exitgames;

(function (Exitgames) {
  var Common;

  (function (Common) {
    var Logger =
    /** @class */
    function () {
      /**
          @classdesc Logger with ability to control logging level.
          Prints messages to browser console.
          Each logging method perfoms toString() calls and default formatting of arguments only after it checks logging level. Therefore disabled level logging method call with plain arguments doesn't involves much overhead.
          But if one prefer custom formatting or some calculation for logging methods arguments he should check logging level before doing this to avoid unnecessary operations:
          if(logger.isLevelEnabled(Logger.Level.DEBUG)) {
              logger.debug("", someCall(x, y), x + "," + y);
          }
          @constructor Exitgames.Common.Logger
          @param {string} [prefix=""] All log messages will be prefixed with that.
          @param {Exitgames.Common.Logger.Level} [level=Level.INFO] Initial logging level.
      */
      function Logger(prefix, level) {
        if (prefix === void 0) {
          prefix = "";
        }

        if (level === void 0) {
          level = Logger.Level.INFO;
        }

        this.prefix = prefix;
        this.level = level;
      }
      /**
          @summary Sets logger prefix.
          @method Exitgames.Common.Logger#setPrefix
          @param {stirng} prefix New prefix.
      */


      Logger.prototype.setPrefix = function (prefix) {
        this.prefix = prefix;
      };
      /**
          @summary Gets logger prefix.
          @method Exitgames.Common.Logger#getPrefix
          @returns {string} Prefix.
      */


      Logger.prototype.getPrefix = function () {
        return this.prefix;
      };
      /**
          @summary Changes current logging level.
          @method Exitgames.Common.Logger#setLevel
          @param {Exitgames.Common.Logger.Level} level New logging level.
      */


      Logger.prototype.setLevel = function (level) {
        level = Math.max(level, Logger.Level.DEBUG);
        level = Math.min(level, Logger.Level.OFF);
        this.level = level;
      };
      /**
          @summary Sets global method to be called on logger.exception call.
          @method Exitgames.Common.Logger#setExceptionHandler
          @param {(string) => boolean} handler Exception handler. Return true to cancel throwing.
      */


      Logger.setExceptionHandler = function (handler) {
        this.exceptionHandler = handler;
      };
      /**
          @summary Checks if logging level active.
          @method Exitgames.Common.Logger#isLevelEnabled
          @param {Exitgames.Common.Logger.Level} level Level to check.
          @returns {boolean} True if level active.
      */


      Logger.prototype.isLevelEnabled = function (level) {
        return level >= this.level;
      };
      /**
          @summary Returns current logging level.
          @method Exitgames.Common.Logger#getLevel
          @returns {Exitgames.Common.Logger.Level} Current logging level.
      */


      Logger.prototype.getLevel = function () {
        return this.level;
      };
      /**
          @summary Logs message if logging level = DEBUG, INFO, WARN, ERROR
          @method Exitgames.Common.Logger#debug
          @param {string} mess Message to log.
          @param {...any} optionalParams For every additional parameter toString() applies and result added to the end of log message after space character.
      */


      Logger.prototype.debug = function (mess) {
        var optionalParams = [];

        for (var _i = 1; _i < arguments.length; _i++) {
          optionalParams[_i - 1] = arguments[_i];
        }

        this.log(Logger.Level.DEBUG, mess, optionalParams);
      };
      /**
          @summary Logs message if logging level = INFO, WARN, ERROR
          @method Exitgames.Common.Logger#info
          @param {string} mess Message to log.
          @param {...any} optionalParams For every additional parameter toString() applies and result added to the end of log message after space character.
      */


      Logger.prototype.info = function (mess) {
        var optionalParams = [];

        for (var _i = 1; _i < arguments.length; _i++) {
          optionalParams[_i - 1] = arguments[_i];
        }

        this.log(Logger.Level.INFO, mess, optionalParams);
      };
      /**
          @summary Logs message if logging level = WARN, ERROR
          @method Exitgames.Common.Logger#warn
          @param {string} mess Message to log.
          @param {...any} optionalParams For every additional parameter toString() applies and result added to the end of log message after space character.
      */


      Logger.prototype.warn = function (mess) {
        var optionalParams = [];

        for (var _i = 1; _i < arguments.length; _i++) {
          optionalParams[_i - 1] = arguments[_i];
        }

        this.log(Logger.Level.WARN, mess, optionalParams);
      };
      /**
          @summary Logs message if logging level = ERROR
          @method Exitgames.Common.Logger#error
          @param {string} mess Message to log.
          @param {...any} optionalParams For every additional parameter toString() applies and result added to the end of log message after space character.
      */


      Logger.prototype.error = function (mess) {
        var optionalParams = [];

        for (var _i = 1; _i < arguments.length; _i++) {
          optionalParams[_i - 1] = arguments[_i];
        }

        this.log(Logger.Level.ERROR, mess, optionalParams);
      };
      /**
          @summary Throws an Error or executes exception handler if set.
          @method Exitgames.Common.Logger#exception
          @param {string} mess Message passed to Error or exception handler.
          @param {...any} optionalParams For every additional parameter toString() applies and result added to the end of log message after space character.
      */


      Logger.prototype.exception = function (code, mess) {
        var optionalParams = [];

        for (var _i = 2; _i < arguments.length; _i++) {
          optionalParams[_i - 2] = arguments[_i];
        }

        if (Logger.exceptionHandler && Logger.exceptionHandler(code, this.format0(mess, optionalParams))) {
          return;
        }

        throw new Error(this.format0("[" + code + "] " + mess, optionalParams));
      };
      /**
          @summary Applies default logger formatting to arguments
          @method Exitgames.Common.Logger#format
          @param {string} mess String to start formatting with.
          @param {...any} optionalParams For every additional parameter toString() applies and result added to the end of formatted string after space character.
          @returns {string} Formatted string.
      */


      Logger.prototype.format = function (mess) {
        var optionalParams = [];

        for (var _i = 1; _i < arguments.length; _i++) {
          optionalParams[_i - 1] = arguments[_i];
        }

        return this.format0(mess, optionalParams);
      };
      /**
          @summary Applies default logger formatting to array of objects.
          @method Exitgames.Common.Logger#format
          @param {string} mess String to start formatting with.
          @param {any[]} optionalParams For every additional parameter toString() applies and result added to the end of formatted string after space character.
          @returns {string} Formatted string.
      */


      Logger.prototype.formatArr = function (mess, optionalParams) {
        return this.format0(mess, optionalParams);
      };

      Logger.prototype.log = function (level, msg, optionalParams) {
        if (level >= this.level) {
          // for global vars console !== undefined throws an error
          if (typeof console !== "undefined" && msg !== undefined) {
            try {
              var logMethod = console[Logger.log_types[level]];

              if (!logMethod) {
                logMethod = console["log"];
              }

              if (logMethod) {
                logMethod.apply(console, [this.prefix, msg].concat(optionalParams));
              }
            } catch (error) {// silently fail
            }
          }
        }
      };

      Logger.prototype.format0 = function (msg, optionalParams) {
        return (this.prefix == "" ? "" : this.prefix + " ") + msg + " " + optionalParams.map(function (x) {
          if (x !== undefined) {
            switch (typeof x) {
              case "object":
                try {
                  return JSON.stringify(x);
                } catch (error) {
                  return x.toString() + "(" + error + ")";
                }

              default:
                return x.toString();
            }
          }
        }).join(" ");
      };
      /**
          @summary Logging levels. Set to restrict log output.
          @member Exitgames.Common.Logger.Level
          @readonly
          @property {number} DEBUG All logging methods enabled.
          @property {number} INFO info(...), warn(...), error(...) methods enabled.
          @property {number} WARN warn(...) and error(...) methods enabled.
          @property {number} ERROR Only error(...) method enabled.
          @property {number} OFF Logging off.
      */


      Logger.Level = {
        //TRACE : 0,
        DEBUG: 1,
        INFO: 2,
        WARN: 3,
        ERROR: 4,
        //FATAL: 5,
        OFF: 6
      };
      Logger.log_types = ["debug", "debug", "info", "warn", "error"];
      return Logger;
    }();

    Common.Logger = Logger;

    var Util =
    /** @class */
    function () {
      function Util() {}

      Util.indexOf = function (arr, item, from) {
        for (var l = arr.length, i = from < 0 ? Math.max(0, l + from) : from || 0; i < l; i++) {
          if (arr[i] === item) {
            return i;
          }
        }

        return -1;
      };

      Util.isArray = function (obj) {
        return Object.prototype.toString.call(obj) === "[object Array]";
      }; //TODO: naming. could be named mergeHashtable or something more specific


      Util.merge = function (target, additional) {
        for (var i in additional) {
          if (additional.hasOwnProperty(i)) {
            target[i] = additional[i];
          }
        }
      };

      Util.getPropertyOrElse = function (obj, prop, defaultValue) {
        if (obj.hasOwnProperty(prop)) {
          return obj[prop];
        } else {
          return defaultValue;
        }
      };

      Util.enumValueToName = function (enumObj, value) {
        for (var i in enumObj) {
          if (value == enumObj[i]) {
            return i;
          }
        }

        return "undefined";
      };

      Util.getEnumKeyByValue = function (enumObj, value) {
        for (var i in enumObj) {
          if (value == enumObj[i]) {
            return i;
          }
        }

        return undefined;
      };

      return Util;
    }();

    Common.Util = Util;
  })(Common = Exitgames.Common || (Exitgames.Common = {}));
})(Exitgames || (Exitgames = {})); /// <reference path="photon-common.ts"/>

/**
    Photon
    @namespace Photon
*/


var Photon;

(function (Photon) {
  /**
      @summary These are the options that can be used as underlying transport protocol.
      @member Photon.ConnectionProtocol
      @readonly
      @property {number} Ws WebSockets connection.
      @property {number} Wss WebSockets Secure connection.
  **/
  var ConnectionProtocol;

  (function (ConnectionProtocol) {
    ConnectionProtocol[ConnectionProtocol["Ws"] = 0] = "Ws";
    ConnectionProtocol[ConnectionProtocol["Wss"] = 1] = "Wss";
  })(ConnectionProtocol = Photon.ConnectionProtocol || (Photon.ConnectionProtocol = {})); // Stubs for extended types used by photon-peer-em (emscripten)


  var TypeExtType =
  /** @class */
  function () {
    function TypeExtType() {}

    return TypeExtType;
  }();

  Photon.TypeExtType = TypeExtType;

  var TypeExt =
  /** @class */
  function () {
    function TypeExt() {}

    TypeExt.Is = function (x) {
      return false;
    };

    TypeExt.Byte = function (x) {
      return x;
    };

    TypeExt.Short = function (x) {
      return x;
    };

    TypeExt.Int = function (x) {
      return x;
    };

    TypeExt.Long = function (x) {
      return x;
    };

    TypeExt.Float = function (x) {
      return x;
    };

    TypeExt.Double = function (x) {
      return x;
    };

    TypeExt.String = function (x) {
      return x;
    };

    TypeExt.Bool = function (x) {
      return x;
    };

    TypeExt.Dict = function (t1, t2, x) {
      return x;
    };

    return TypeExt;
  }();

  Photon.TypeExt = TypeExt;

  var PhotonPeer =
  /** @class */
  function () {
    /**
        @classdesc Instances of the PhotonPeer class are used to connect to a Photon server and communicate with it.
        A PhotonPeer instance allows communication with the Photon Server, which in turn distributes messages to other PhotonPeer clients.
        An application can use more than one PhotonPeer instance, which are treated as separate users on the server.
        Each should have its own listener instance, to separate the operations, callbacks and events.
        @constructor Photon.PhotonPeer
        @param {Photon.ConnectionProtocol} protocol Connection protocol.
        @param {string} address Server address:port.
        @param {string} [subprotocol=""] WebSocket protocol.
        @param {string} [debugName=""] Log messages prefixed with this value.
    */
    function PhotonPeer(protocol, address, subprotocol, debugName) {
      if (subprotocol === void 0) {
        subprotocol = "";
      }

      if (debugName === void 0) {
        debugName = "";
      }

      this.protocol = protocol;
      this.address = address;
      this.subprotocol = subprotocol;
      /**
          @summary Peer sends 'keep alive' message to server as this timeout exceeded after last send operation.
          Set it < 1000 to disable 'keep alive' operation
          @member Photon.PhotonPeer#keepAliveTimeoutMs
          @type {number}
          @default 3000
      */

      this.keepAliveTimeoutMs = 3000;
      this._frame = "~m~";
      this._isConnecting = false;
      this._isConnected = false;
      this._isClosing = false;
      this._peerStatusListeners = {};
      this._eventListeners = {};
      this._responseListeners = {};
      this.lastRtt = 0;
      this.initTimestamp = Date.now();
      this.keepAliveTimer = 0;
      this.url = this.addProtocolPrefix(this.address, this.protocol);
      this._logger = new Exitgames.Common.Logger(debugName && debugName != "" ? debugName + ":" : "");
    }

    PhotonPeer.prototype.addProtocolPrefix = function (address, protocol) {
      var protocolPrefix = {
        ws: "ws://",
        wss: "wss://"
      };

      for (var k in protocolPrefix) {
        if (address.indexOf(protocolPrefix[k]) == 0) {
          return address;
        }
      }

      switch (protocol) {
        case ConnectionProtocol.Ws:
          return protocolPrefix.ws + address;

        case ConnectionProtocol.Wss:
          return protocolPrefix.wss + address;

        default:
          // error
          return protocolPrefix.ws + address;
      }
    };

    PhotonPeer.prototype.Destroy = function () {};
    /**
        @summary Checks if peer is connecting.
        @method Photon.PhotonPeer#isConnecting
        @returns {boolean} True if peer is connecting.
    */


    PhotonPeer.prototype.isConnecting = function () {
      return this._isConnecting;
    };

    PhotonPeer.prototype.getLastRtt = function () {
      return this.lastRtt;
    };
    /**
        @summary Checks if peer is connected.
        @method Photon.PhotonPeer#isConnected
        @returns {boolean} True if peer is connected.
    */


    PhotonPeer.prototype.isConnected = function () {
      return this._isConnected;
    };
    /**
        @summary Checks if peer is closing.
        @method Photon.PhotonPeer#isClosing
        @returns {boolean} True if peer is closing.
    */


    PhotonPeer.prototype.isClosing = function () {
      return this._isClosing;
    };
    /**
        @summary Starts connection to server.
        @method Photon.PhotonPeer#connect
    */


    PhotonPeer.prototype.connect = function (appid) {
      var _this = this;

      this._sessionid = undefined;
      var url = this.url + "/" + appid + "?libversion=4.1.0.0";

      if (this.subprotocol == "") {
        this._socket = new WebSocket(url, "Json");
      } else {
        this._socket = new WebSocket(url, this.subprotocol);
      }

      this._onConnecting(); // Set event handlers.


      this._socket.onopen = function (ev) {//this.logger.debug("onopen");
      };

      this._socket.onmessage = function (ev) {
        var message = _this._decode(ev.data);

        _this._onMessage(message.toString());
      };

      this._socket.onclose = function (ev) {
        _this._logger.debug("onclose: wasClean =", ev.wasClean, ", code=", ev.code, ", reason =", ev.reason);

        if (_this._isConnecting) {
          _this._onConnectFailed(ev);
        } else {
          if (1006 == ev.code) {
            _this._onTimeout();
          }

          _this._onDisconnect();
        }
      };

      this._socket.onerror = function (ev) {
        _this._onError(ev);
      };
    };
    /**
        @summary Disconnects from server.
        @method Photon.PhotonPeer#disconnect
    */


    PhotonPeer.prototype.disconnect = function () {
      this._isClosing = true;

      this._socket.close();
    };
    /**
        @summary Sends operation to the Photon Server.
        @method Photon.PhotonPeer#sendOperation
        @param {number} code Code of operation.
        @param {object} [data] Parameters of operation as a flattened array of key-value pairs: [key1, value1, key2, value2...]
        @param {boolean} [sendReliable=false] Selects if the operation must be acknowledged or not. If false, the operation is not guaranteed to reach the server.
        @param {number} [channelId=0] The channel in which this operation should be sent.
    */


    PhotonPeer.prototype.sendOperation = function (code, data, sendReliable, channelId) {
      if (sendReliable === void 0) {
        sendReliable = false;
      }

      if (channelId === void 0) {
        channelId = 0;
      }

      var sndJSON = {
        "req": code,
        "vals": []
      };

      if (Exitgames.Common.Util.isArray(data)) {
        sndJSON["vals"] = data;
      } else {
        if (data === undefined) {
          sndJSON["vals"] = [];
        } else {
          this._logger.exception(201, "PhotonPeer[sendOperation] - Trying to send non array data:", data);
        }
      }

      this._send(sndJSON);

      this._logger.debug("PhotonPeer[sendOperation] - Sending request:", sndJSON);
    };
    /**
        @summary Registers listener for peer status change.
        @method Photon.PhotonPeer#addPeerStatusListener
        @param {PhotonPeer.StatusCodes} statusCode Status change to this value will be listening.
        @param {Function} callback The listener function that processes the status change. This function don't accept any parameters.
    */


    PhotonPeer.prototype.addPeerStatusListener = function (statusCode, callback) {
      this._addListener(this._peerStatusListeners, statusCode, callback);
    };
    /**
        @summary Registers listener for custom event.
        @method Photon.PhotonPeer#addEventListener
        @param {number} eventCode Custom event code.
        @param {Function} callback The listener function that processes the event. This function may accept object with event content.
    */


    PhotonPeer.prototype.addEventListener = function (eventCode, callback) {
      this._addListener(this._eventListeners, eventCode.toString(), callback);
    };
    /**
        @summary Registers listener for operation response.
        @method Photon.PhotonPeer#addResponseListener
        @param {number} operationCode Operation code.
        @param {Function} callback The listener function that processes the event. This function may accept object with operation response content.
    */


    PhotonPeer.prototype.addResponseListener = function (operationCode, callback) {
      this._addListener(this._responseListeners, operationCode.toString(), callback);
    };
    /**
        @summary Removes listener if exists for peer status change.
        @method Photon.PhotonPeer#removePeerStatusListener
        @param {string} statusCode One of PhotonPeer.StatusCodes to remove listener for.
        @param {Function} callback Listener to remove.
    */


    PhotonPeer.prototype.removePeerStatusListener = function (statusCode, callback) {
      this._removeListener(this._peerStatusListeners, statusCode, callback);
    };
    /**
        @summary Removes listener if exists for custom event.
        @method Photon.PhotonPeer#removeEventListener
        @param {number} eventCode Event code to remove to remove listener for.
        @param {Function} callback Listener to remove.
    */


    PhotonPeer.prototype.removeEventListener = function (eventCode, callback) {
      this._removeListener(this._eventListeners, eventCode.toString(), callback);
    };
    /**
        @summary Removes listener if exists for operation response.
        @method Photon.PhotonPeer#removeResponseListener
        @param {number} operationCode Operation code to remove listener for.
        @param {Function} callback Listener to remove.
    */


    PhotonPeer.prototype.removeResponseListener = function (operationCode, callback) {
      this._removeListener(this._responseListeners, operationCode.toString(), callback);
    };
    /**
        @summary Removes all listeners for peer status change specified.
        @method Photon.PhotonPeer#removePeerStatusListenersForCode
        @param {string} statusCode One of PhotonPeer.StatusCodes to remove all listeners for.
    */


    PhotonPeer.prototype.removePeerStatusListenersForCode = function (statusCode) {
      this._removeListenersForCode(this._peerStatusListeners, statusCode);
    };
    /**
        @summary Removes all listeners for custom event specified.
        @method Photon.PhotonPeer#removeEventListenersForCode
        @param {number} eventCode Event code to remove all listeners for.
    */


    PhotonPeer.prototype.removeEventListenersForCode = function (eventCode) {
      this._removeListenersForCode(this._eventListeners, eventCode.toString());
    };
    /**
        @summary Removes all listeners for operation response specified.
        @method Photon.PhotonPeer#removeResponseListenersForCode
        @param {number} operationCode Operation code to remove all listeners for.
    */


    PhotonPeer.prototype.removeResponseListenersForCode = function (operationCode) {
      this._removeListenersForCode(this._responseListeners, operationCode.toString());
    };
    /**
        @summary Sets peer logger level.
        @method Photon.PhotonPeer#setLogLevel
        @param {Exitgames.Common.Logger.Level} level Logging level.
    */


    PhotonPeer.prototype.setLogLevel = function (level) {
      this._logger.setLevel(level);
    };
    /**
        @summary Called if no listener found for received custom event.
        Override to relay unknown event to user's code or handle known events without listener registration.
        @method Photon.PhotonPeer#onUnhandledEvent
        @param {number} eventCode Code of received event.
        @param {object} [args] Content of received event or empty object.
    */


    PhotonPeer.prototype.onUnhandledEvent = function (eventCode, args) {
      this._logger.warn('PhotonPeer: No handler for event', eventCode, 'registered.');
    };
    /**
        @summary Called if no listener found for received operation response event.
        Override to relay unknown response to user's code or handle known responses without listener registration.
        @method Photon.PhotonPeer#onUnhandledEvent
        @param {number} operationCode Code of received response.
        @param {object} [args] Content of received response or empty object.
    */


    PhotonPeer.prototype.onUnhandledResponse = function (operationCode, args) {
      this._logger.warn('PhotonPeer: No handler for response', operationCode, 'registered.');
    }; // TODO: lite calls this
    // protected


    PhotonPeer.prototype._dispatchEvent = function (code, args) {
      if (!this._dispatch(this._eventListeners, code.toString(), args, "event")) {
        this.onUnhandledEvent(code, args);
      }
    }; // TODO: lite calls this
    // protected


    PhotonPeer.prototype._dispatchResponse = function (code, args) {
      if (!this._dispatch(this._responseListeners, code.toString(), args, "response")) {
        this.onUnhandledResponse(code, args);
      }
    };

    PhotonPeer.prototype._stringify = function (message) {
      if (Object.prototype.toString.call(message) == "[object Object]") {
        if (!JSON) {
          this._logger.exception(202, "PhotonPeer[_stringify] - Trying to encode as JSON, but JSON.stringify is missing.");
        }

        return "~j~" + JSON.stringify(message);
      } else {
        return String(message);
      }
    };

    PhotonPeer.prototype._encode = function (messages) {
      var ret = "",
          message,
          messages = Exitgames.Common.Util.isArray(messages) ? messages : [messages];

      for (var i = 0, l = messages.length; i < l; i++) {
        message = messages[i] === null || messages[i] === undefined ? "" : this._stringify(messages[i]);
        ret += this._frame + message.length + this._frame + message;
      }

      return ret;
    };

    PhotonPeer.prototype._decode = function (data) {
      var messages = [],
          number,
          n,
          newdata = data;
      var nulIndex = data.indexOf("\x00");

      if (nulIndex !== -1) {
        newdata = data.replace(/[\0]/g, "");
      }

      data = newdata;

      do {
        if (data.substr(0, 3) !== this._frame) {
          return messages;
        }

        data = data.substr(3);
        number = "", n = "";

        for (var i = 0, l = data.length; i < l; i++) {
          n = Number(data.substr(i, 1));

          if (data.substr(i, 1) == n) {
            number += n;
          } else {
            data = data.substr(number.length + this._frame.length);
            number = Number(number);
            break;
          }
        }

        messages.push(data.substr(0, number));
        data = data.substr(number);
      } while (data !== "");

      return messages;
    };

    PhotonPeer.prototype._onMessage = function (message) {
      if (message.substr(0, 3) == "~j~") {
        this._onMessageReceived(JSON.parse(message.substr(3)));
      } else {
        if (!this._sessionid) {
          this._sessionid = message;

          this._onConnect();
        } else {
          this._onMessageReceived(message);
        }
      }
    };

    PhotonPeer.prototype.resetKeepAlive = function () {
      var _this = this; //this._logger.debug("reset kep alive: ", Date.now());


      clearTimeout(this.keepAliveTimer);

      if (this.keepAliveTimeoutMs >= 1000) {
        this.keepAliveTimer = setTimeout(function () {
          // send time from peer creation to avoid timestamp overflow on server side
          _this._send((_a = {}, _a["irq"] = 1, _a["vals"] = [1, Date.now() - _this.initTimestamp], _a), true);

          var _a;
        }, this.keepAliveTimeoutMs);
      }
    };

    PhotonPeer.prototype._send = function (data, checkConnected) {
      if (checkConnected === void 0) {
        checkConnected = false;
      }

      var message = this._encode(data);

      if (this._isConnected && !this._isClosing) {
        this.resetKeepAlive(); //this._logger.debug("_send:", message);

        this._socket.send(message);
      } else {
        if (!checkConnected) {
          this._logger.exception(203, 'PhotonPeer[_send] - Operation', data.req, '- failed, "isConnected" is', this._isConnected, ', "isClosing" is', this._isClosing, "!");
        }
      }
    };

    PhotonPeer.prototype._onMessageReceived = function (message) {
      if (typeof message === "object") {
        this._logger.debug("PhotonPeer[_onMessageReceived] - Socket received message:", message); // copy protocol 'message' protocol object to runtime object: the latter's properties can be renamed by minifier.


        var msgJSON = {
          err: message["err"],
          msg: message["msg"],
          vals: message["vals"],
          res: message["res"],
          evt: message["evt"],
          irs: message["irs"]
        };
        var msgErr = msgJSON.err ? msgJSON.err : 0;
        msgJSON.vals = msgJSON.vals !== undefined ? msgJSON.vals : [];

        if (msgJSON.vals.length > 0) {
          msgJSON.vals = this._parseMessageValuesArrayToJSON(msgJSON.vals);
        }

        if (msgJSON.res !== undefined) {
          var code = parseInt(msgJSON.res);

          this._parseResponse(code, msgJSON);
        } else {
          if (msgJSON.evt !== undefined) {
            var code = parseInt(msgJSON.evt);

            this._parseEvent(code, msgJSON);
          } else {
            if (msgJSON.irs !== undefined) {
              var code = parseInt(msgJSON.irs);

              this._parseInternalResponse(code, msgJSON);
            } else {
              this._logger.exception(204, "PhotonPeer[_onMessageReceived] - Received undefined message type:", msgJSON);
            }
          }
        }
      }
    };

    PhotonPeer.prototype._parseMessageValuesArrayToJSON = function (vals) {
      var parsedJSON = {};

      if (Exitgames.Common.Util.isArray(vals)) {
        if (vals.length % 2 == 0) {
          var toParse = vals,
              key,
              value;

          while (toParse.length > 0) {
            key = toParse.shift() + "";
            value = toParse.shift();
            parsedJSON[key] = value;
          }
        } else {
          this._logger.exception(205, "PhotonPeer[_parseMessageValuesToJSON] - Received invalid values array:", vals);
        }
      }

      return parsedJSON;
    };

    PhotonPeer.prototype._parseEvent = function (code, event) {
      switch (code) {
        default:
          this._dispatchEvent(code, {
            vals: event.vals
          });

          break;
      }
    };

    PhotonPeer.prototype._parseResponse = function (code, response) {
      switch (code) {
        default:
          this._dispatchResponse(code, {
            errCode: response.err,
            errMsg: response.msg,
            vals: response.vals
          });

          break;
      }
    };

    PhotonPeer.prototype._parseInternalResponse = function (code, response) {
      this.lastRtt = Date.now() - this.initTimestamp - response.vals[1];

      this._logger.debug("internal response:", response);
    };

    PhotonPeer.prototype._onConnecting = function () {
      this._logger.debug("PhotonPeer[_onConnecting] - Starts connecting", this.url, '..., raising "connecting" event ...');

      this._isConnecting = true;

      this._dispatchPeerStatus(PhotonPeer.StatusCodes.connecting);

      this.resetKeepAlive();
    };

    PhotonPeer.prototype._onConnect = function () {
      this._logger.debug('PhotonPeer[_onConnect] - Connected successfully! Raising "connect" event ...');

      this._isConnecting = false;
      this._isConnected = true;

      this._dispatchPeerStatus(PhotonPeer.StatusCodes.connect);

      this.resetKeepAlive();
    };

    PhotonPeer.prototype._onConnectFailed = function (evt) {
      this._logger.error('PhotonPeer[_onConnectFailed] - Socket connection could not be created:', this.url, this.subprotocol, 'Wrong host or port?\n Raising "connectFailed event ...');

      this._isConnecting = this._isConnected = false;

      this._dispatchPeerStatus(PhotonPeer.StatusCodes.connectFailed);
    };

    PhotonPeer.prototype._onDisconnect = function () {
      var wasConnected = this._isConnected;
      var wasClosing = this._isClosing;

      this._logger.debug('PhotonPeer[_onDisconnect] - Socket closed, raising "disconnect" event ...');

      this._isClosing = this._isConnected = this._isConnecting = false;

      if (wasConnected) {
        if (wasClosing) {
          this._dispatchPeerStatus(PhotonPeer.StatusCodes.disconnect);
        } else {
          this._dispatchPeerStatus(PhotonPeer.StatusCodes.connectClosed);
        }
      }
    };

    PhotonPeer.prototype._onTimeout = function () {
      this._logger.debug('PhotonPeer[_onTimeout] - Client timed out! Raising "timeout" event ...');

      this._dispatchPeerStatus(PhotonPeer.StatusCodes.timeout);
    };

    PhotonPeer.prototype._onError = function (ev) {
      this._logger.error("PhotonPeer[_onError] - Connection error:", arguments[0]);

      this._isConnecting = this._isConnected = this._isClosing = false;

      this._dispatchPeerStatus(PhotonPeer.StatusCodes.error);
    };

    PhotonPeer.prototype._addListener = function (listeners, code, callback) {
      if (!(code in listeners)) {
        listeners[code] = [];
      }

      if (callback && typeof callback === "function") {
        this._logger.debug('PhotonPeer[_addListener] - Adding listener for event', code);

        listeners[code].push(callback);
      } else {
        this._logger.error('PhotonPeer[_addListener] - Listener', code, 'is not a function but of type', typeof callback, '. No listener added!');
      }

      return this;
    };

    PhotonPeer.prototype._dispatch = function (listeners, code, args, debugType) {
      if (code in listeners) {
        var events = listeners[code];

        for (var i = 0, l = events.length; i < l; i++) {
          if (!Exitgames.Common.Util.isArray(args)) {
            args = [args];
          }

          events[i].apply(this, args === undefined ? [] : args);
        }

        return true;
      } else {
        return false;
      }
    };

    PhotonPeer.prototype._dispatchPeerStatus = function (code) {
      if (!this._dispatch(this._peerStatusListeners, code, undefined, "peerStatus")) {
        this._logger.warn('PhotonPeer[_dispatchPeerStatus] - No handler for ', code, 'registered.');
      }
    };

    PhotonPeer.prototype._removeListener = function (listeners, code, callback) {
      if (code in listeners) {
        var prevLenght = listeners[code].length;
        listeners[code] = listeners[code].filter(function (x) {
          return x != callback;
        });

        this._logger.debug('PhotonPeer[_removeListener] - Removing listener for event', code, "removed:", prevLenght - listeners[code].length);
      }

      return this;
    };

    PhotonPeer.prototype._removeListenersForCode = function (listeners, code) {
      this._logger.debug('PhotonPeer[_removeListenersForCode] - Removing all listeners for event', code);

      if (code in listeners) {
        listeners[code] = [];
      }

      return this;
    };
    /**
        @summary Enum for peer status codes.
        Use to subscribe to status changes.
        @member Photon.PhotonPeer.StatusCodes
        @readonly
        @property {string} connecting Is connecting to server.
        @property {string} connect Connected to server.
        @property {string} connectFailed Connection to server failed.
        @property {string} disconnect Disconnected from server.
        @property {string} connectClosed Connection closed by server.
        @property {string} error General connection error.
        @property {string} timeout Disconnected from server for timeout.
    */


    PhotonPeer.StatusCodes = {
      connecting: "connecting",
      connect: "connect",
      connectFailed: "connectFailed",
      disconnect: "disconnect",
      connectClosed: "connectClosed",
      error: "error",
      timeout: "timeout"
    };
    return PhotonPeer;
  }();

  Photon.PhotonPeer = PhotonPeer;
})(Photon || (Photon = {}));
/**
    Photon Load Balancing API
    @namespace Photon.LoadBalancing
*/


var Photon;

(function (Photon) {
  var LoadBalancing;

  (function (LoadBalancing) {
    var WebFlags = {
      HttpForward: 0x01,
      SendAuthCookie: 0x02,
      SendSync: 0x04,
      SendState: 0x08
    };

    var Actor =
    /** @class */
    function () {
      /**
          @classdesc Summarizes a "player" within a room, identified (in that room) by ID (or "actorNr"). Extend to implement custom logic.
          @constructor Photon.LoadBalancing.Actor
          @param {string} name Actor name.
          @param {number} actorNr Actor ID.
          @param {boolean} isLocal Actor is local.
      */
      function Actor(name, actorNr, isLocal) {
        this.name = name;
        this.actorNr = actorNr;
        this.isLocal = isLocal;
        this.customProperties = {};
        this.suspended = false;
      } // public getLoadBalancingClient() { return this.loadBalancingClient; }

      /**
          @summary Actor's room: the room initialized by client for create room operation or room client connected to.
          @method Photon.LoadBalancing.Actor#getRoom
          @returns {Photon.LoadBalancing.Room} Actor's room.
      */


      Actor.prototype.getRoom = function () {
        return this.loadBalancingClient.myRoom();
      };
      /**
          @summary Raises game custom event.
          @method Photon.LoadBalancing.Actor#raiseEvent
          @param {number} eventCode Identifies this type of event (and the content). Your game's event codes can start with 0.
          @param {object} [data] Custom data you want to send along (use null, if none).
          @param {object} [options] Additional options
          @property {object} options Additional options
          @property {number} [options.interestGroup] The ID of the interest group this event goes to (exclusively).
          @property {Photon.LoadBalancing.Constants.EventCaching} [options.cache=EventCaching.DoNotCache] Events can be cached (merged and removed) for players joining later on.
          @property {Photon.LoadBalancing.Constants.ReceiverGroup} [options.receivers=ReceiverGroup.Others] Defines to which group of players the event is passed on.
          @property {number[]} [options.targetActors] Defines the target players who should receive the event (use only for small target groups).
          @property {boolean} [options.webForward=false] Forward to web hook.
      */


      Actor.prototype.raiseEvent = function (eventCode, data, options) {
        if (this.loadBalancingClient) {
          this.loadBalancingClient.raiseEvent(eventCode, data, options);
        }
      };
      /**
          @summary Sets actor name.
          @method Photon.LoadBalancing.Actor#setName
          @param {string} name Actor name.
      */


      Actor.prototype.setName = function (name) {
        this.name = name;
      }; // properties methods

      /**
          @summary Called on every actor properties update: properties set by client, poperties update from server.
          Override to update custom room state.
          @method Photon.LoadBalancing.Actor#onPropertiesChange
          @param {object} changedCustomProps Key-value map of changed properties.
          @param {boolean} [byClient] true if properties set by client.
      */


      Actor.prototype.onPropertiesChange = function (changedCustomProps, byClient) {};
      /**
          @summary Returns custom property by name.
          @method Photon.LoadBalancing.Actor#getCustomProperty
          @param {string} name Name of the property.
          @returns {object} Property or undefined if property not found.
      */


      Actor.prototype.getCustomProperty = function (name) {
        return this.customProperties[name];
      };
      /**
          @summary Returns custom property by name or default value.
          @method Photon.LoadBalancing.Actor#getCustomPropertyOrElse
          @param {string} name Name of the property.
          @param {object} defaultValue Default property value.
          @returns {object} Property or default value if property not found.
      */


      Actor.prototype.getCustomPropertyOrElse = function (name, defaultValue) {
        return Exitgames.Common.Util.getPropertyOrElse(this.customProperties, name, defaultValue);
      };
      /**
          @summary Sets custom property.
          @method Photon.LoadBalancing.Actor#setCustomProperty
          @param {string} name Name of the property.
          @param {object} value Property value.
          @param {boolean} [webForward=false] Forward to web hook.
          @param {object} [expectedValue] Property value expected when update occurs. (CAS : "Check And Swap")
      */


      Actor.prototype.setCustomProperty = function (name, value, webForward, expectedValue) {
        if (webForward === void 0) {
          webForward = false;
        }

        this.customProperties[name] = value;
        var props = {};
        props[name] = value;
        var expectedProps;

        if (expectedValue != undefined) {
          expectedProps = (_a = {}, _a[name] = expectedValue, _a);
        }

        if (this.loadBalancingClient && this.loadBalancingClient.isJoinedToRoom()) {
          this.loadBalancingClient._setPropertiesOfActor(this.actorNr, props, webForward, expectedProps);
        }

        this.onPropertiesChange(props, true);

        var _a;
      };
      /**
          @summary Sets custom properties.
          @method Photon.LoadBalancing.Actor#setCustomProperties
          @param {object} properties Table of properties to set.
          @param {boolean} [webForward=false] Forward to web hook.
          @param {object} [expectedProperties] Table of properties expected when update occurs. (CAS : "Check And Swap")
      */


      Actor.prototype.setCustomProperties = function (properties, webForward, expectedProperties) {
        if (webForward === void 0) {
          webForward = false;
        }

        var props = {};

        for (var name in properties) {
          this.customProperties[name] = properties[name];
          props[name] = properties[name];
        }

        if (this.loadBalancingClient && this.loadBalancingClient.isJoinedToRoom()) {
          this.loadBalancingClient._setPropertiesOfActor(this.actorNr, props, webForward, expectedProperties);
        }

        this.onPropertiesChange(props, true);
      };
      /**
          @summary Returns true if actor is in suspended state.
          @returns {boolean} Actor suspend state.
      **/


      Actor.prototype.isSuspended = function () {
        return this.suspended;
      };

      Actor.prototype._getAllProperties = function () {
        var p = {};
        p[LoadBalancing.Constants.ActorProperties.PlayerName] = this.name;

        for (var k in this.customProperties) {
          p[k] = this.customProperties[k];
        }

        return p;
      };

      Actor.prototype._setLBC = function (lbc) {
        this.loadBalancingClient = lbc;
      };

      Actor.prototype._updateFromResponse = function (vals) {
        this.actorNr = vals[LoadBalancing.Constants.ParameterCode.ActorNr];
        var props = vals[LoadBalancing.Constants.ParameterCode.PlayerProperties];

        if (props !== undefined) {
          var name = props[LoadBalancing.Constants.ActorProperties.PlayerName];

          if (name !== undefined) {
            this.name = name;
          }

          this._updateCustomProperties(props);
        }
      };

      Actor.prototype._updateMyActorFromResponse = function (vals) {
        this.actorNr = vals[LoadBalancing.Constants.ParameterCode.ActorNr];
      };

      Actor.prototype._updateCustomProperties = function (vals) {
        for (var p in vals) {
          this.customProperties[p] = vals[p];
        }

        this.onPropertiesChange(vals, false);
      };

      Actor.prototype._setSuspended = function (s) {
        this.suspended = s;
      };

      Actor._getActorNrFromResponse = function (vals) {
        return vals[LoadBalancing.Constants.ParameterCode.ActorNr];
      };

      return Actor;
    }();

    LoadBalancing.Actor = Actor; // readonly room info from server

    var RoomInfo =
    /** @class */
    function () {
      /**
          @classdesc Used for Room listings of the lobby (not yet joining). Offers the basic info about a room: name, player counts, properties, etc.
          @constructor Photon.LoadBalancing.RoomInfo
          @param {string} name Room name.
      */
      function RoomInfo(name) {
        // standard room properties
        // TODO: access via getters

        /**
            @summary Room name.
            @member Photon.LoadBalancing.RoomInfo#name
            @type {string}
            @readonly
        */
        this.name = "";
        /**
            @summary Joined room Game server address.
            @member Photon.LoadBalancing.RoomInfo#address
            @type {string}
            @readonly
        */

        this.address = "";
        /**
            @summary Max players before room is considered full.
            @member Photon.LoadBalancing.RoomInfo#maxPlayers
            @type {number}
            @readonly
        */

        this.maxPlayers = 0;
        /**
            @summary Shows the room in the lobby's room list. Makes sense only for local room.
            @member Photon.LoadBalancing.RoomInfo#isVisible
            @type {boolean}
            @readonly
        */

        this.isVisible = true;
        /**
            @summary Defines if this room can be joined.
            @member Photon.LoadBalancing.RoomInfo#isOpen
            @type {boolean}
            @readonly
        */

        this.isOpen = true;
        /**
            @summary Count of player currently in room.
            @member Photon.LoadBalancing.RoomInfo#playerCount
            @type {number}
            @readonly
        */

        this.playerCount = 0;
        /**
            @summary Time in ms indicating how long the room instance will be keeped alive in the server room cache after all clients have left the room.
            @member Photon.LoadBalancing.RoomInfo#emptyRoomLiveTime
            @type {number}
            @readonly
        */

        this.emptyRoomLiveTime = 0;
        /**
            @summary Time in ms indicating how long suspended player will be kept in the room.
            @member Photon.LoadBalancing.RoomInfo#suspendedPlayerLiveTime
            @type {number}
            @readonly
        **/

        this.suspendedPlayerLiveTime = 0;
        /**
            @summary Room removed (in room list updates).
            @member Photon.LoadBalancing.RoomInfo#removed
            @type {boolean}
            @readonly
        */

        this.removed = false; // TODO: does end user need this?

        this.cleanupCacheOnLeave = false;
        /**
            @summary Master client set by game server. Note: Not all servers support this currently. If the value of the property is 0, use lowest actorid instead.
            @member Photon.LoadBalancing.RoomInfo#masterClientId
            @type { number }
            @readonly
        */

        this.masterClientId = 0; // custom properties

        this._customProperties = {};
        this._propsListedInLobby = [];
        this.name = name;
      }
      /**
          @summary Called on every room properties update: room creation, properties set by client, poperties update from server.
          Override to update custom room state.
          @method Photon.LoadBalancing.RoomInfo#onPropertiesChange
          @param {object} changedCustomProps Key-value map of changed properties.
          @param {boolean} [byClient] true if called on room creation or properties set by client.
      */


      RoomInfo.prototype.onPropertiesChange = function (changedCustomProps, byClient) {};
      /**
          @summary Returns custom property by name.
          @method Photon.LoadBalancing.RoomInfo#getCustomProperty
          @param {string} name Name of the property.
          @returns {object} Property or undefined if property not found.
      */


      RoomInfo.prototype.getCustomProperty = function (prop) {
        return this._customProperties[prop];
      };
      /**
          @summary Returns custom property by name or default value.
          @method Photon.LoadBalancing.RoomInfo#getCustomPropertyOrElse
          @param {string} name Name of the property.
          @param {object} defaultValue Default property value.
          @returns {object} Property or default value if property not found.
      */


      RoomInfo.prototype.getCustomPropertyOrElse = function (prop, defaultValue) {
        return Exitgames.Common.Util.getPropertyOrElse(this._customProperties, prop, defaultValue);
      };

      RoomInfo.prototype._updateFromMasterResponse = function (vals) {
        this.address = vals[LoadBalancing.Constants.ParameterCode.Address];
        var name = vals[LoadBalancing.Constants.ParameterCode.RoomName];

        if (name) {
          this.name = name;
        }
      };

      RoomInfo.prototype._updateFromProps = function (props) {
        if (props) {
          this.maxPlayers = this.updateIfExists(this.maxPlayers, LoadBalancing.Constants.GameProperties.MaxPlayers, props);
          this.isVisible = this.updateIfExists(this.isVisible, LoadBalancing.Constants.GameProperties.IsVisible, props);
          this.isOpen = this.updateIfExists(this.isOpen, LoadBalancing.Constants.GameProperties.IsOpen, props);
          this.playerCount = this.updateIfExists(this.playerCount, LoadBalancing.Constants.GameProperties.PlayerCount, props);
          this.removed = this.updateIfExists(this.removed, LoadBalancing.Constants.GameProperties.Removed, props);
          this._propsListedInLobby = this.updateIfExists(this._propsListedInLobby, LoadBalancing.Constants.GameProperties.PropsListedInLobby, props);
          this.cleanupCacheOnLeave = this.updateIfExists(this.cleanupCacheOnLeave, LoadBalancing.Constants.GameProperties.CleanupCacheOnLeave, props);
          this.masterClientId = this.updateIfExists(this.masterClientId, LoadBalancing.Constants.GameProperties.MasterClientId, props);
          this.emptyRoomLiveTime = this.updateIfExists(this.emptyRoomLiveTime, LoadBalancing.Constants.GameProperties.EmptyRoomTtl, props);
          this.suspendedPlayerLiveTime = this.updateIfExists(this.suspendedPlayerLiveTime, LoadBalancing.Constants.GameProperties.PlayerTtl, props);
          var changedProps = {};

          for (var k in props) {
            if (parseInt(k).toString() != k) {
              if (this._customProperties[k] !== props[k]) {
                this._customProperties[k] = props[k];
                changedProps[k] = props[k];
              }
            }
          }

          this.onPropertiesChange(changedProps, false);
        }
      };

      RoomInfo.prototype._updateFromEvent = function (payload) {
        if (payload) {
          this.masterClientId = this.updateIfExists(this.masterClientId, LoadBalancing.Constants.ParameterCode.MasterClientId, payload);
        }
      };

      RoomInfo.prototype.updateIfExists = function (prevValue, code, props) {
        if (props.hasOwnProperty(code)) {
          return props[code];
        } else {
          return prevValue;
        }
      };

      return RoomInfo;
    }();

    LoadBalancing.RoomInfo = RoomInfo; // joined room with writable properties

    var Room =
    /** @class */
    function (_super) {
      __extends(Room, _super);
      /**
          @classdesc Represents a room client joins or is joined to. Extend to implement custom logic. Custom properties can be set via setCustomProperty() while being in the room.
          @mixes Photon.LoadBalancing.RoomInfo
          @constructor Photon.LoadBalancing.Room
          @param {string} name Room name.
      */


      function Room(name) {
        return _super.call(this, name) || this;
      } // room created from client via factory always has this field set
      //public getLoadBalancingClient() { return this.loadBalancingClient; }

      /**
          @summary Sets custom property
          @method Photon.LoadBalancing.Room#setCustomProperty
          @param {string} name Name of the property.
          @param {object} value Property value.
          @param {boolean} [webForward=false] Forward to web hook.
          @param {object} [expectedValue] Property value expected when update occurs. (CAS : "Check And Swap")
      */


      Room.prototype.setCustomProperty = function (name, value, webForward, expectedValue) {
        if (webForward === void 0) {
          webForward = false;
        }

        this._customProperties[name] = value;
        var props = {};
        props[name] = value;
        var expectedProps;

        if (expectedValue != undefined) {
          expectedProps = (_a = {}, _a[name] = expectedValue, _a);
        }

        if (this.loadBalancingClient && this.loadBalancingClient.isJoinedToRoom()) {
          this.loadBalancingClient._setPropertiesOfRoom(props, webForward, expectedProps);
        }

        this.onPropertiesChange(props, true);

        var _a;
      };
      /**
          @summary Sets custom property
          @method Photon.LoadBalancing.Room#setCustomProperties
          @param {object} properties Table of properties to set.
          @param {boolean} [webForward=false] Forward to web hook.
          @param {object} [expectedProperties] Table of properties expected when update occurs. (CAS : "Check And Swap")
      */


      Room.prototype.setCustomProperties = function (properties, webForward, expectedProperties) {
        if (webForward === void 0) {
          webForward = false;
        }

        var props = {};

        for (var name in properties) {
          this._customProperties[name] = properties[name];
          props[name] = properties[name];
        }

        if (this.loadBalancingClient && this.loadBalancingClient.isJoinedToRoom()) {
          this.loadBalancingClient._setPropertiesOfRoom(props, webForward, expectedProperties);
        }

        this.onPropertiesChange(props, true);
      };

      Room.prototype.setProp = function (name, value) {
        if (this.loadBalancingClient && this.loadBalancingClient.isJoinedToRoom()) {
          var props = {};
          props[name] = value;

          this.loadBalancingClient._setPropertiesOfRoom(props, false, undefined);
        }
      };
      /**
       * @summary Sets rooms visibility in the lobby's room list.
       * @method Photon.LoadBalancing.Room#setIsVisible
       * @param {boolean} isVisible New visibility value.
      */


      Room.prototype.setIsVisible = function (isVisible) {
        if (this.isVisible != isVisible) {
          this.isVisible = isVisible;
          this.setProp(LoadBalancing.Constants.GameProperties.IsVisible, isVisible);
        }
      };
      /**
       * @summary Sets if this room can be joined.
       * @method Photon.LoadBalancing.Room#setIsOpen
       * @param {boolean} isOpen New property value.
      */


      Room.prototype.setIsOpen = function (isOpen) {
        if (this.isOpen != isOpen) {
          this.isOpen = isOpen;
          this.setProp(LoadBalancing.Constants.GameProperties.IsOpen, isOpen);
        }
      };
      /**
       * @summary Sets max players before room is considered full.
       * @method Photon.LoadBalancing.Room#setMaxPlayers
       * @param {number} maxPlayers New max players value.
      */


      Room.prototype.setMaxPlayers = function (maxPlayers) {
        if (this.maxPlayers != maxPlayers) {
          this.maxPlayers = maxPlayers;
          this.setProp(LoadBalancing.Constants.GameProperties.MaxPlayers, maxPlayers);
        }
      };
      /**
       * @summary Sets room live time in the server room cache after all clients have left the room.
       * @method Photon.LoadBalancing.Room#setEmptyRoomLiveTime
       * @param {number} emptyRoomLiveTime New live time value in ms.
      */


      Room.prototype.setEmptyRoomLiveTime = function (emptyRoomLiveTime) {
        if (this.emptyRoomLiveTime != emptyRoomLiveTime) {
          this.emptyRoomLiveTime = emptyRoomLiveTime;
          this.setProp(LoadBalancing.Constants.GameProperties.EmptyRoomTtl, emptyRoomLiveTime);
        }
      };
      /**
       * @summary Sets time in ms indicating how long suspended player will be kept in the room.
       * @method Photon.LoadBalancing.Room#setSuspendedPlayerLiveTime
       * @param {number} suspendedPlayerLiveTime New live time value in ms.
      */


      Room.prototype.setSuspendedPlayerLiveTime = function (suspendedPlayerLiveTime) {
        if (this.suspendedPlayerLiveTime != suspendedPlayerLiveTime) {
          this.suspendedPlayerLiveTime = suspendedPlayerLiveTime;
          this.setProp(LoadBalancing.Constants.GameProperties.PlayerTtl, suspendedPlayerLiveTime);
        }
      };
      /**
       * @summary Sets expected server plugins.
       * @method Photon.LoadBalancing.Room#setPlugins
       * @param {string[]} plugins New plugins list.
      */


      Room.prototype.setPlugins = function (plugins) {
        this.plugins = plugins;
      };
      /**
          @summary Sets list of the room properties to pass to the RoomInfo list in a lobby.
          @method Photon.LoadBalancing.Room#setPropsListedInLobby
          @param {string[]} props Array of properties names.
      */


      Room.prototype.setPropsListedInLobby = function (props) {
        this._propsListedInLobby = props;
      };

      Room.prototype._setLBC = function (lbc) {
        this.loadBalancingClient = lbc;
      };

      return Room;
    }(RoomInfo);

    LoadBalancing.Room = Room;

    var LoadBalancingClient =
    /** @class */
    function () {
      /**
          @classdesc Implements the Photon LoadBalancing workflow. This class should be extended to handle system or custom events and operation responses.
          @constructor Photon.LoadBalancing.LoadBalancingClient
          @param {Photon.ConnectionProtocol} protocol Connecton protocol.
          @param {string} appId Cloud application ID.
          @param {string} appVersion Cloud application version.
      */
      function LoadBalancingClient(protocol, appId, appVersion) {
        this.appId = appId;
        this.appVersion = appVersion; // protected

        this.autoJoinLobby = true; // hardcoded behaviour; inheritor class can override this
        // options mainly keep state between servers
        // set / cleared in connectToNameServer()(connectToRegionMaster()), connect()
        // lobbyName and lobbyType passed to JoinLobby operation (we don't have separate JoinLobby operation and set them in connect())

        this.connectOptions = {}; // shares lobby info between Master and Game CreateGame calls (createRoomInternal)

        this.createRoomOptions = {}; // shares options between Master and Game JoinGame operations

        this.joinRoomOptions = {};
        this.roomInfos = new Array();
        this.roomInfosDict = {}; // 'by name' access support

        this.actors = {};
        this.actorsArray = []; // actors 'at index' access support (Scirra/Costruct 2)

        this.lowestActorId = 0; // master client support

        this.userAuthType = LoadBalancing.Constants.CustomAuthenticationType.None;
        this.userAuthParameters = "";
        this.userAuthData = "";
        this.lobbyStatsRequestList = new Array(); // protected

        this.state = LoadBalancingClient.State.Uninitialized;
        this.logger = new Exitgames.Common.Logger("Client:");
        this.validNextState = {};
        var serverAddress = "";

        if (typeof protocol == "number") {
          this.connectionProtocol = protocol;

          switch (protocol) {
            case Photon.ConnectionProtocol.Ws:
              this.masterServerAddress = "ws://app-eu.exitgamescloud.com:9090";
              this.nameServerAddress = "ws://ns.exitgames.com:9093";
              break;

            case Photon.ConnectionProtocol.Wss:
              this.masterServerAddress = "wss://app-eu.exitgamescloud.com:19090";
              this.nameServerAddress = "wss://ns.exitgames.com:19093";
              break;

            default:
              var s0 = "wrong_protocol_error";
              this.masterServerAddress = s0;
              this.nameServerAddress = s0;
              this.logger.error("Wrong protocol: ", protocol);
              break;
          }
        } else if (typeof protocol == "string") {
          this.connectionProtocol = Photon.ConnectionProtocol.Ws;
          var s = protocol;
          this.masterServerAddress = s;
          this.nameServerAddress = s;
        } else {
          this.connectionProtocol = Photon.ConnectionProtocol.Ws;
          var s1 = "wrong_protocol_type_error";
          this.masterServerAddress = s1;
          this.nameServerAddress = s1;
          this.logger.error("Wrong protocol type: ", typeof protocol);
        }

        this.initValidNextState();
        this.currentRoom = this.roomFactoryInternal("");
        this._myActor = this.actorFactoryInternal("", -1, true);
        this.addActor(this._myActor);
      } // override to handle system events:

      /**
          @summary Called on client state change. Override to handle it.
          @method Photon.LoadBalancing.LoadBalancingClient#onStateChange
          @param {Photon.LoadBalancing.LoadBalancingClient.State} state New client state.
      */


      LoadBalancingClient.prototype.onStateChange = function (state) {};
      /**
          @summary Called if client error occures. Override to handle it.
          @method Photon.LoadBalancing.LoadBalancingClient#onError
          @param {Photon.LoadBalancing.LoadBalancingClient.PeerErrorCode} errorCode Client error code.
          @param {string} errorMsg Error message.
      */


      LoadBalancingClient.prototype.onError = function (errorCode, errorMsg) {};
      /**
          @summary Called on operation response. Override if need custom workflow or response error handling.
          @method Photon.LoadBalancing.LoadBalancingClient#onOperationResponse
          @param {number} errorCode Server error code.
          @param {string} errorMsg Error message.
          @param {number} code Operation code.
          @param {object} content Operation response content.
      */


      LoadBalancingClient.prototype.onOperationResponse = function (errorCode, errorMsg, code, content) {};
      /**
          @summary Called on custom event. Override to handle it.
          @method Photon.LoadBalancing.LoadBalancingClient#onEvent
          @param {number} code Event code.
          @param {object} content Event content.
          @param {number} actorNr Actor ID event raised by.
      */


      LoadBalancingClient.prototype.onEvent = function (code, content, actorNr) {};
      /**
          @summary Called on room list received from Master server (on connection). Override to handle it.
          @method Photon.LoadBalancing.LoadBalancingClient#onRoomList
          @param {{@link Photon.LoadBalancing.RoomInfo}[]} rooms Room list.
      */


      LoadBalancingClient.prototype.onRoomList = function (rooms) {};
      /**
          @summary Called on room list updates received from Master server. Override to handle it.
          @method Photon.LoadBalancing.LoadBalancingClient#onRoomListUpdate
          @param {{@link Photon.LoadBalancing.RoomInfo}[]} rooms Updated room list.
          @param {{@link Photon.LoadBalancing.RoomInfo}[]} roomsUpdated Rooms whose properties were changed.
          @param {{@link Photon.LoadBalancing.RoomInfo}[]} roomsAdded New rooms in list.
          @param {{@link Photon.LoadBalancing.RoomInfo}[]} roomsRemoved Rooms removed from list.
      */


      LoadBalancingClient.prototype.onRoomListUpdate = function (rooms, roomsUpdated, roomsAdded, roomsRemoved) {}; // TODO: move to Room? Or remove and use Room.onPropertiesChange only?

      /**
          @summary Called on joined room properties changed event. Override to handle it.
          @method Photon.LoadBalancing.LoadBalancingClient#onMyRoomPropertiesChange
      */


      LoadBalancingClient.prototype.onMyRoomPropertiesChange = function () {};
      /**
          @summary Called on actor properties changed event. Override to handle it.
          @method Photon.LoadBalancing.LoadBalancingClient#onActorPropertiesChange
          @param {Photon.LoadBalancing.Actor} actor Actor whose properties were changed.
      */


      LoadBalancingClient.prototype.onActorPropertiesChange = function (actor) {};
      /**
          @summary Called when client joins room. Override to handle it.
          @method Photon.LoadBalancing.LoadBalancingClient#onJoinRoom
          @param {boolean} createdByMe True if room is created by client.
      */


      LoadBalancingClient.prototype.onJoinRoom = function (createdByMe) {};
      /**
          @summary Called when new actor joins the room client joined to. Override to handle it.
          @method Photon.LoadBalancing.LoadBalancingClient#onActorJoin
          @param {Photon.LoadBalancing.Actor} actor New actor.
      */


      LoadBalancingClient.prototype.onActorJoin = function (actor) {};
      /**
          @summary Called when actor leaves the room client joined to. Also called for every actor during room cleanup. Override to handle it.
          @method Photon.LoadBalancing.LoadBalancingClient#onActorLeave
          @param {Photon.LoadBalancing.Actor} actor Actor left the room.
          @param {boolean} cleanup True if called during room cleanup (e.g. on disconnect).
      */


      LoadBalancingClient.prototype.onActorLeave = function (actor, cleanup) {};
      /**
          @summary Called when actor suspended in the room client joined to.Override to handle it.
          @method Photon.LoadBalancing.LoadBalancingClient#onActorSuspend
          @param {Photon.LoadBalancing.Actor} actor Actor suspended in the room.
      */


      LoadBalancingClient.prototype.onActorSuspend = function (actor) {};
      /**
          @summary Called when {@link Photon.LoadBalancing.LoadBalancingClient#findFriends findFriends} request completed. <br/>
          Override to handle request results.
          @method Photon.LoadBalancing.LoadBalancingClient#onFindFriendsResult
          @param {number} errorCode Result error code. 0 if request is successful.
          @param {string} errorMsg Error message.
          @param {object} friends Table with actors names as keys and friend statuses as values: {name1: friendStatus1, name2: friendStatus2, ... }.
          @property {object} friendStatus Friend status.
          @property {boolean} friendStatus.online Online status.
          @property {string} friendStatus.roomId Joined room.
      */


      LoadBalancingClient.prototype.onFindFriendsResult = function (errorCode, errorMsg, friends) {};
      /**
          @summary Called when lobbies statistics update received. <br/>
          Update can be automated by set up during {@link Photon.LoadBalancing.LoadBalancingClient#connect connect} or requested explicitly by {@link Photon.LoadBalancing.LoadBalancingClient#requestLobbyStats requestLobbyStats}. <br/>
          Override to handle request results.
          @method Photon.LoadBalancing.LoadBalancingClient#onLobbyStats
          @param {number} errorCode Result error code. 0 if request is successful. For automated updates is always 0.
          @param {string} errorMsg Error message. For automated updates is always empty.
          @param {object[]} lobbies Array of lobbies statistics: [lobbyStats1, lobbyStats1, ... ].
          @property {object} lobbyStats Lobby statistics.
          @property {string} lobbyStats.lobbyName Lobby name.
          @property {number} lobbyStats.lobbyType Lobby type.
          @property {number} lobbyStats.peerCount The number of players in the lobby (on Master, not playing).
          @property {number} lobbyStats.gameCount The number of games in the lobby.
      */


      LoadBalancingClient.prototype.onLobbyStats = function (errorCode, errorMsg, lobbies) {};
      /**
          @summary Called when application statistics update received. <br/>
          Override to handle request results.
          @method Photon.LoadBalancing.LoadBalancingClient#onAppStats
          @param {number} errorCode Result error code. Currently is always 0.
          @param {string} errorMsg Error message. Currently is always empty.
          @param {object} stats Application statistics.
          @property {object} stats Application statistics.
          @property {number} stats.peerCount Count of players currently online on Game servers.
          @property {number} stats.masterPeerCount Count of players on Master server (looking for game).
          @property {number} stats.gameCount Count of games currently in use (includes invisible and full rooms, so it doesn't match lobby list).
      */


      LoadBalancingClient.prototype.onAppStats = function (errorCode, errorMsg, stats) {};
      /**
          @summary Called when {@link Photon.LoadBalancing.LoadBalancingClient#getRegions getRegions} request completed.<br/>
          Override to handle request results.
          @param {number} errorCode Result error code. 0 if request is successful.
          @param {string} errorMsg Error message.
          @param {object} regions Object with region codes as keys and Master servers addresses as values
      */


      LoadBalancingClient.prototype.onGetRegionsResult = function (errorCode, errorMsg, regions) {};
      /**
          Called when {@link Photon.LoadBalancing.LoadBalancingClient#webRpc webRpc} request completed.<br/>
          Override to handle request results.
          @param {number} errorCode Result error code. 0 if request is successful.
          @param {string} message Error message if errorCode ~ = 0 or optional message returned by remote procedure.
          @param {string} uriPath Request path.
          @param {number} resultCode Result code returned by remote procedure.
          @param {object} data Data returned by remote procedure.
      **/


      LoadBalancingClient.prototype.onWebRpcResult = function (errorCode, message, uriPath, resultCode, data) {};
      /**
          @summary Override with creation of custom room (extended from Room): { return new CustomRoom(...); }
          @method Photon.LoadBalancing.LoadBalancingClient#roomFactory
          @param {string} name Room name. Pass to super() in custom actor constructor.
      */


      LoadBalancingClient.prototype.roomFactory = function (name) {
        return new Room(name);
      };
      /**
          @summary Override with creation of custom actor (extended from Actor): { return new CustomActor(...); }
          @method Photon.LoadBalancing.LoadBalancingClient#actorFactory
          @param {string} name Actor name. Pass to super() in custom room constructor.
          @param {number} actorNr Actor ID. Pass to super() in custom room constructor.
          @param {boolean} isLocal Actor is local. Pass to super() in custom room constructor.
      */


      LoadBalancingClient.prototype.actorFactory = function (name, actorNr, isLocal) {
        return new Actor(name, actorNr, isLocal);
      }; //------------------------

      /**
          @summary Returns local actor.
          Client always has local actor even if not joined.
          @method Photon.LoadBalancing.LoadBalancingClient#myActor
          @returns {Photon.LoadBalancing.Actor} Local actor.
      */


      LoadBalancingClient.prototype.myActor = function () {
        return this._myActor;
      };
      /**
          @summary Returns client's room.
          Client always has it's room even if not joined. It's used for room creation operation.
          @method Photon.LoadBalancing.LoadBalancingClient#myRoom
          @returns {Photon.LoadBalancing.Room} Current room.
      */


      LoadBalancingClient.prototype.myRoom = function () {
        return this.currentRoom;
      };
      /**
          @summary Returns actors in room client currently joined including local actor.
          @method Photon.LoadBalancing.LoadBalancingClient#myRoomActors
          @returns {object} actorNr -> {@link Photon.LoadBalancing.Actor} map of actors in room.
      */


      LoadBalancingClient.prototype.myRoomActors = function () {
        return this.actors;
      };
      /**
          @summary Returns numer of actors in room client currently joined including local actor.
          @method Photon.LoadBalancing.LoadBalancingClient#myRoomActorCount
          @returns {number} Number of actors.
      */


      LoadBalancingClient.prototype.myRoomActorCount = function () {
        return this.actorsArray.length;
      };

      LoadBalancingClient.prototype.myRoomActorsArray = function () {
        return this.actorsArray;
      }; // actors 'at index' access support (Scirra/Costruct 2)                

      /**
          @summary Actor number of the player who's the master of this Room. Note: This changes when the current master leaves the room.
          @member Photon.LoadBalancing.RoomInfo#masterClientId
          @type {number}
          @readonly
      */


      LoadBalancingClient.prototype.myRoomMasterActorNr = function () {
        if (this.myRoom().masterClientId) {
          return this.myRoom().masterClientId;
        } else {
          return this.lowestActorId;
        }
      };

      LoadBalancingClient.prototype.lastRtt = function () {
        return this.gamePeer && this.gamePeer.getLastRtt();
      };

      LoadBalancingClient.prototype.roomFactoryInternal = function (name) {
        if (name === void 0) {
          name = "";
        }

        var r = this.roomFactory(name);

        r._setLBC(this);

        return r;
      };

      LoadBalancingClient.prototype.actorFactoryInternal = function (name, actorNr, isLocal) {
        if (name === void 0) {
          name = "";
        }

        if (actorNr === void 0) {
          actorNr = -1;
        }

        if (isLocal === void 0) {
          isLocal = false;
        }

        var a = this.actorFactory(name, actorNr, isLocal);

        a._setLBC(this);

        return a;
      };
      /**
          @summary Changes default NameServer address and port before connecting to NameServer.
          @method Photon.LoadBalancing.LoadBalancingClient#setNameServerAddress
          @param {string} address New address and port.
      */


      LoadBalancingClient.prototype.setNameServerAddress = function (address) {
        this.nameServerAddress = address;
      };
      /**
          @summary Returns current NameServer address.
          @method Photon.LoadBalancing.LoadBalancingClient#getNameServerAddress
          @returns {string} NameServer address address.
      */


      LoadBalancingClient.prototype.getNameServerAddress = function () {
        return this.nameServerAddress;
      };
      /**
          @summary Changes default Master server address and port before connecting to Master server.
          @method Photon.LoadBalancing.LoadBalancingClient#setMasterServerAddress
          @param {string} address New address and port.
      */


      LoadBalancingClient.prototype.setMasterServerAddress = function (address) {
        this.masterServerAddress = address;
      };
      /**
          @summary Returns current Master server address.
          @method Photon.LoadBalancing.LoadBalancingClient#getMasterServerAddress
          @returns {string} Master server address.
      */


      LoadBalancingClient.prototype.getMasterServerAddress = function () {
        return this.nameServerAddress;
      };
      /**
          @summary Sets optional user id(required by some cloud services)
          @method Photon.LoadBalancing.LoadBalancingClient#setUserId
          @param {string} userId New user id.
      */


      LoadBalancingClient.prototype.setUserId = function (userId) {
        this.userId = userId;
      };
      /**
          @summary Returns previously set user id.
          @method Photon.LoadBalancing.LoadBalancingClient#getUserId
          @returns {string} User id.
      */


      LoadBalancingClient.prototype.getUserId = function () {
        return this.userId;
      };
      /**
          @summary Enables custom authentication and sets it's parameters.
          @method Photon.LoadBalancing.LoadBalancingClient#setCustomAuthentication
          @param {string} authParameters This string must contain any (http get) parameters expected by the used authentication service.
          @param {Photon.LoadBalancing.Constants.CustomAuthenticationType} [authType=Photon.LoadBalancing.Constants.CustomAuthenticationType.Custom] The type of custom authentication provider that should be used.
          @param {any} [authData] The data to be passed-on to the auth service via POST. String passed as is, objects as application/json
      */


      LoadBalancingClient.prototype.setCustomAuthentication = function (authParameters, authType, authData) {
        if (authType === void 0) {
          authType = Photon.LoadBalancing.Constants.CustomAuthenticationType.Custom;
        }

        this.userAuthType = authType;
        this.userAuthParameters = authParameters;
        this.userAuthData = authData;
      }; // TODO: remove backward compatibility (deprecated)

      /**
          @summary Starts connection to Master server.
          @method Photon.LoadBalancing.LoadBalancingClient#connect
          @param {object} [options] Additional options
          @property {object} options Additional options
          @property {boolean} [options.keepMasterConnection=false] Don't disconnect from Master server after joining room.
          @property {string} [options.lobbyName] Name of the lobby connect to.
          @property {Photon.LoadBalancing.Constants.LobbyType} [options.lobbyType=LobbyType.Default] Type of the lobby.
          @property {boolean} [options.lobbyStats=false] If true, Master server will be sending lobbies statistics periodically.<br/> Override {@link Photon.LoadBalancing.LoadBalancingClient#onLobbyStats onLobbyStats} to handle request results.<br/>Alternatively, {@link Photon.LoadBalancing.LoadBalancingClient#requestLobbyStats requestLobbyStats} can be used.
          @returns {boolean} True if current client state allows connection.
      */


      LoadBalancingClient.prototype.connect = function (options) {
        // backward compatibility
        if (typeof options === "boolean") {
          if (options) {
            options = {
              keepMasterConnection: true
            };
          } else {
            options = {
              keepMasterConnection: false
            };
          }
        } //


        if (!options) {
          options = {};
        }

        if (this.checkNextState(LoadBalancingClient.State.ConnectingToMasterserver, true)) {
          this.changeState(LoadBalancingClient.State.ConnectingToMasterserver);
          this.logger.info("Connecting to Master", this.masterServerAddress); // make options copy to protect

          this.connectOptions = {};

          for (var k in options) {
            this.connectOptions[k] = options[k];
          }

          if (this.masterPeer) this.masterPeer.Destroy();
          this.masterPeer = new MasterPeer(this, this.connectionProtocol, this.masterServerAddress, "");
          this.initMasterPeer(this.masterPeer);
          this.masterPeer.connect(this.appId);
          return true;
        } else {
          return false;
        }
      };
      /**
          @summary Starts connection to NameServer.
          @method Photon.LoadBalancing.LoadBalancingClient#connectToNameServer
          @param {object} [options] Additional options
          @property {object} options Additional options
          @property {string} [options.region] Don't disconnect from Master server after joining room.
          @property {string} [options.lobbyName] Name of the lobby connect to.
          @property {Photon.LoadBalancing.Constants.LobbyType} [options.lobbyType=LobbyType.Default] Type of the lobby.
          @property {boolean} [options.lobbyStats=false] If true, Master server will be sending lobbies statistics periodically.<br/> Override {@link Photon.LoadBalancing.LoadBalancingClient#onLobbyStats onLobbyStats} to handle request results.<br/>Alternatively, {@link Photon.LoadBalancing.LoadBalancingClient#requestLobbyStats requestLobbyStats} can be used.
          @property {boolean} [options.keepMasterConnection=false] Don't disconnect from Master server after joining room.
      */


      LoadBalancingClient.prototype.connectToNameServer = function (options) {
        if (!options) {
          options = {};
        }

        if (this.checkNextState(LoadBalancingClient.State.ConnectingToNameServer, true)) {
          this.changeState(LoadBalancingClient.State.ConnectingToNameServer);
          this.logger.info("Connecting to NameServer", this.nameServerAddress); // make options copy to protect

          this.connectOptions = {};

          for (var k in options) {
            this.connectOptions[k] = options[k];
          }

          if (this.nameServerPeer) this.nameServerPeer.Destroy();
          this.nameServerPeer = new NameServerPeer(this, this.connectionProtocol, this.nameServerAddress, "");
          this.initNameServerPeer(this.nameServerPeer);
          this.nameServerPeer.connect(this.appId);
          return true;
        } else {
          return false;
        }
      };

      LoadBalancingClient.prototype.fillCreateRoomOptions = function (op, options) {
        options = options || {};
        var gp = {};
        if (options.isVisible !== undefined) gp[LoadBalancing.Constants.GameProperties.IsVisible] = options.isVisible;
        if (options.isOpen !== undefined) gp[LoadBalancing.Constants.GameProperties.IsOpen] = options.isOpen;
        if (options.maxPlayers !== undefined) gp[LoadBalancing.Constants.GameProperties.MaxPlayers] = options.maxPlayers;
        if (options.propsListedInLobby !== undefined) gp[LoadBalancing.Constants.GameProperties.PropsListedInLobby] = Photon.TypeExt.String(options.propsListedInLobby);

        if (options.customGameProperties !== undefined) {
          for (var p in options.customGameProperties) {
            gp[p] = options.customGameProperties[p];
          }
        }

        op.push(LoadBalancing.Constants.ParameterCode.GameProperties, gp);
        op.push(LoadBalancing.Constants.ParameterCode.CleanupCacheOnLeave, true); //TODO: make this optional?

        op.push(LoadBalancing.Constants.ParameterCode.Broadcast, true); //TODO: make this optional?

        if (options.emptyRoomLiveTime !== undefined) op.push(LoadBalancing.Constants.ParameterCode.EmptyRoomTTL, Photon.TypeExt.Int(options.emptyRoomLiveTime));
        if (options.suspendedPlayerLiveTime !== undefined) op.push(LoadBalancing.Constants.ParameterCode.PlayerTTL, Photon.TypeExt.Int(options.suspendedPlayerLiveTime));
        if (options.plugins !== undefined) op.push(LoadBalancing.Constants.ParameterCode.Plugins, options.plugins); // shold be always set to true by client

        op.push(LoadBalancing.Constants.ParameterCode.CheckUserOnJoin, true);

        if (options.lobbyName) {
          op.push(LoadBalancing.Constants.ParameterCode.LobbyName);
          op.push(options.lobbyName);

          if (options.lobbyType != undefined) {
            op.push(LoadBalancing.Constants.ParameterCode.LobbyType);
            op.push(options.lobbyType);
          }
        }
      };
      /**
          @summary Creates a new room on the server (or fails when the name is already taken). Takes parameters (except name) for new room from myRoom() object. Set them before call.
          @method Photon.LoadBalancing.LoadBalancingClient#createRoomFromMy
          @param {string} [roomName] New room name. Assigned automatically by server if empty or not specified.
          @param {object} [options] Additional options
          @property {object} options Additional options
          @property {string} [options.lobbyName] Name of the lobby to create room in.
          @property {Photon.LoadBalancing.Constants.LobbyType} [options.lobbyType=LobbyType.Default] Type of the lobby.
      */


      LoadBalancingClient.prototype.createRoomFromMy = function (roomName, options) {
        this.currentRoom.name = roomName ? roomName : "";
        options = this.copyCreateOptionsFromMyRoom(options);
        return this.createRoomInternal(this.masterPeer, options);
      };

      LoadBalancingClient.prototype.copyCreateOptionsFromMyRoom = function (options) {
        options = options || {}; //retrieve options from my room

        options.isVisible = this.currentRoom.isVisible;
        options.isOpen = this.currentRoom.isOpen;
        options.maxPlayers = this.currentRoom.maxPlayers;
        options.customGameProperties = this.currentRoom._customProperties;
        options.propsListedInLobby = this.currentRoom._propsListedInLobby;
        options.emptyRoomLiveTime = this.currentRoom.emptyRoomLiveTime;
        options.suspendedPlayerLiveTime = this.currentRoom.suspendedPlayerLiveTime;
        options.plugins = this.currentRoom.plugins;
        return options;
      };
      /**
          @summary Creates a new room on the server (or fails when the name is already taken).
          @method Photon.LoadBalancing.LoadBalancingClient#createRoom
          @param {string} [roomName] The name to create a room with. Must be unique and not in use or can't be created. If not specified or null, the server will assign a GUID as name.
          @param {object} [options] Additional options
          @property {object} options Additional options
          @property {boolean} [options.isVisible=true] Shows the room in the lobby's room list.
          @property {boolean} [options.isOpen=true] Keeps players from joining the room (or opens it to everyone).
          @property {number} [options.maxPlayers=0] Max players before room is considered full (but still listed).
          @property {object} [options.customGameProperties] Custom properties to apply to the room on creation (use string-typed keys but short ones).
          @property {string[]} [options.propsListedInLobby] Defines the custom room properties that get listed in the lobby.
          @property {number} [options.emptyRoomLiveTime=0] Room live time (ms) in the server room cache after all clients have left the room.
          @property {number} [options.suspendedPlayerLiveTime=0] Player live time (ms) in the room after player suspended.
          @property {string[]} [options.plugins] Expected server plugins.
          @property {string} [options.lobbyName] Name of the lobby to create room in.
          @property {Photon.LoadBalancing.Constants.LobbyType} [options.lobbyType=LobbyType.Default] Type of the lobby.
            */


      LoadBalancingClient.prototype.createRoom = function (roomName, options) {
        this.currentRoom = this.roomFactoryInternal(roomName ? roomName : "");
        return this.createRoomInternal(this.masterPeer, options);
      };
      /**
          @summary Joins a room by name and sets this player's properties.
          @method Photon.LoadBalancing.LoadBalancingClient#joinRoom
          @param {string} roomName The name of the room to join. Must be existing already, open and non-full or can't be joined.
          @param {object} [options] Additional options
          @property {object} options Additional options
          @property {string} [options.rejoin=false] Rejoin using current userId.
          @property {boolean} [options.createIfNotExists=false] Create room if not exists.
          @param {object} [createOptions] Room options for creation
          @property {object} createOptions Room options for creation
          @property {boolean} [createOptions.isVisible=true] Shows the room in the lobby's room list.
          @property {boolean} [createOptions.isOpen=true] Keeps players from joining the room (or opens it to everyone).
          @property {number} [createOptions.maxPlayers=0] Max players before room is considered full (but still listed).
          @property {object} [createOptions.customGameProperties] Custom properties to apply to the room on creation (use string-typed keys but short ones).
          @property {string[]} [createOptions.propsListedInLobby] Defines the custom room properties that get listed in the lobby.
          @property {number} [createOptions.emptyRoomLiveTime=0] Room live time (ms) in the server room cache after all clients have left the room.
          @property {number} [createOptions.suspendedPlayerLiveTime=0] Player live time (ms) in the room after player suspended.
          @property {string[]} [createOptions.plugins] Informs the server of the expected plugin setup.
          @property {string} [createOptions.lobbyName=""] Name of the lobby to create room in.
          @property {Photon.LoadBalancing.Constants.LobbyType} [createOptions.lobbyType=LobbyType.Default] Type of the lobby.
            */


      LoadBalancingClient.prototype.joinRoom = function (roomName, options, createOptions) {
        var op = [];

        if (options) {
          if (options.createIfNotExists) {
            op.push(LoadBalancing.Constants.ParameterCode.JoinMode, LoadBalancingClient.JoinMode.CreateIfNotExists);
            this.fillCreateRoomOptions(op, createOptions);
          }

          if (options.rejoin) {
            op.push(LoadBalancing.Constants.ParameterCode.JoinMode, LoadBalancingClient.JoinMode.RejoinOnly);
          }
        }

        this.currentRoom = this.roomFactoryInternal(roomName);
        op.push(LoadBalancing.Constants.ParameterCode.RoomName, roomName);
        this.joinRoomOptions = options || {};
        this.createRoomOptions = createOptions || {};
        this.logger.info("Join Room", roomName, options, createOptions, "...");
        this.masterPeer.sendOperation(LoadBalancing.Constants.OperationCode.JoinGame, op);
        return true;
      };
      /**
          @summary Joins a random, available room.
          This operation fails if all rooms are closed or full.
          @method Photon.LoadBalancing.LoadBalancingClient#joinRandomRoom
          @param {object} [options] Additional options
          @property {object} options Additional options
          @property {object} [options.expectedCustomRoomProperties] If specified, a room will only be joined, if it matches these custom properties. Use null to accept rooms with any properties.
          @property {number} [options.expectedMaxPlayers] If specified, filters for a particular maxPlayer setting. Use 0 to accept any maxPlayer value.
          @property {Photon.LoadBalancing.Constants.MatchmakingMode} [options.matchmakingMode=MatchmakingMode.FillRoom] Selects one of the available matchmaking algorithms.
          @property {string} [options.lobbyName] Name of the lobby to search rooms in.
          @property {Photon.LoadBalancing.Constants.LobbyType} [options.lobbyType=LobbyType.Default] Type of the lobby.
          @property {string} [options.sqlLobbyFilter] Basically the "where" clause of a sql statement. Examples: 'C0 = 1 AND C2 > 50'. 'C5 = "Map2" AND C2 > 10 AND C2 < 20'
      */


      LoadBalancingClient.prototype.joinRandomRoom = function (options) {
        var op = [];

        if (options) {
          if (options.matchingType != undefined && options.matchingType != LoadBalancing.Constants.MatchmakingMode.FillRoom) {
            op.push(LoadBalancing.Constants.ParameterCode.MatchMakingType);
            op.push(options.matchingType);
          }

          var expectedRoomProperties = {};
          var propNonEmpty = false;

          if (options.expectedCustomRoomProperties != undefined) {
            for (var k in options.expectedCustomRoomProperties) {
              expectedRoomProperties[k] = options.expectedCustomRoomProperties[k];
              propNonEmpty = true;
            }
          }

          if (options.expectedMaxPlayers != undefined && options.expectedMaxPlayers > 0) {
            expectedRoomProperties[LoadBalancing.Constants.GameProperties.MaxPlayers] = options.expectedMaxPlayers;
            propNonEmpty = true;
          }

          if (propNonEmpty) {
            op.push(LoadBalancing.Constants.ParameterCode.GameProperties);
            op.push(expectedRoomProperties);
          }

          if (options.lobbyName) {
            op.push(LoadBalancing.Constants.ParameterCode.LobbyName);
            op.push(options.lobbyName);

            if (options.lobbyType != undefined) {
              op.push(LoadBalancing.Constants.ParameterCode.LobbyType);
              op.push(options.lobbyType);
            }
          }

          if (options.sqlLobbyFilter) {
            op.push(LoadBalancing.Constants.ParameterCode.Data);
            op.push(options.sqlLobbyFilter);
          }
        }

        this.logger.info("Join Random Room", options && options.lobbyName, options && options.lobbyType, "...");
        this.masterPeer.sendOperation(LoadBalancing.Constants.OperationCode.JoinRandomGame, op);
        return true;
      };

      LoadBalancingClient.prototype._setPropertiesOfRoom = function (properties, webForward, expectedProperties) {
        var op = [];
        op.push(LoadBalancing.Constants.ParameterCode.Properties);
        op.push(properties);
        op.push(LoadBalancing.Constants.ParameterCode.Broadcast);
        op.push(true);

        if (webForward) {
          op.push(LoadBalancing.Constants.ParameterCode.WebFlags);
          op.push(Photon.TypeExt.Byte(WebFlags.HttpForward));
        }

        if (expectedProperties) {
          op.push(LoadBalancing.Constants.ParameterCode.ExpectedValues);
          op.push(expectedProperties);
        }

        this.gamePeer.sendOperation(LoadBalancing.Constants.OperationCode.SetProperties, op);
      };

      LoadBalancingClient.prototype._setPropertiesOfActor = function (actorNr, properties, webForward, expectedProperties) {
        var op = [];
        op.push(LoadBalancing.Constants.ParameterCode.ActorNr);
        op.push(actorNr);
        op.push(LoadBalancing.Constants.ParameterCode.Properties);
        op.push(properties);
        op.push(LoadBalancing.Constants.ParameterCode.Broadcast);
        op.push(true);

        if (webForward) {
          op.push(LoadBalancing.Constants.ParameterCode.WebFlags);
          op.push(Photon.TypeExt.Byte(WebFlags.HttpForward));
        }

        if (expectedProperties) {
          op.push(LoadBalancing.Constants.ParameterCode.ExpectedValues);
          op.push(expectedProperties);
        }

        this.gamePeer.sendOperation(LoadBalancing.Constants.OperationCode.SetProperties, op);
      };
      /**
          @summary Disconnects from all servers.
          @method Photon.LoadBalancing.LoadBalancingClient#disconnect
      */


      LoadBalancingClient.prototype.disconnect = function () {
        if (this.nameServerPeer) {
          this.nameServerPeer.disconnect();
        }

        this._cleanupNameServerPeerData();

        if (this.masterPeer) {
          this.masterPeer.disconnect();
        }

        this._cleanupMasterPeerData();

        if (this.gamePeer) {
          this.gamePeer.disconnect();
        }

        this._cleanupGamePeerData();

        this.changeState(LoadBalancingClient.State.Disconnected);
      };
      /**
          @summary Disconnects client from Game server keeping player in room (to rejoin later) and connects to Master server if not connected.
          @method Photon.LoadBalancing.LoadBalancingClient#suspendRoom
          @property {object} options Additional options
          @property {boolean} [options.sendAuthCookie] Securely transmit the encrypted object AuthCookie to the web service in PathLeave webhook when available
      */


      LoadBalancingClient.prototype.suspendRoom = function (options) {
        if (this.isJoinedToRoom()) {
          if (this.gamePeer) {
            var params = [];

            if (options) {
              if (options.sendAuthCookie) {
                params.push(LoadBalancing.Constants.ParameterCode.WebFlags, Photon.TypeExt.Byte(WebFlags.SendAuthCookie));
              }
            }

            params.push(LoadBalancing.Constants.ParameterCode.IsInactive, true);
            this.gamePeer.sendOperation(LoadBalancing.Constants.OperationCode.Leave, params);
            this.gamePeerWaitingForDisconnect = true;
          }

          this._cleanupGamePeerData();

          if (this.isConnectedToMaster()) {
            this.changeState(LoadBalancingClient.State.JoinedLobby);
          } else {
            this.changeState(LoadBalancingClient.State.Disconnected);
            this.connect(this.connectOptions);
          }
        }
      };
      /**
          @summary Leaves room and connects to Master server if not connected.
          @method Photon.LoadBalancing.LoadBalancingClient#leaveRoom
          @property {object} options Additional options
          @property {boolean} [options.sendAuthCookie] Securely transmit the encrypted object AuthCookie to the web service in PathLeave webhook when available
      */


      LoadBalancingClient.prototype.leaveRoom = function (options) {
        if (this.isJoinedToRoom()) {
          if (this.gamePeer) {
            var params = [];

            if (options) {
              if (options.sendAuthCookie) {
                params.push(LoadBalancing.Constants.ParameterCode.WebFlags, Photon.TypeExt.Byte(WebFlags.SendAuthCookie));
              }
            }

            this.gamePeer.sendOperation(LoadBalancing.Constants.OperationCode.Leave, params);
            this.gamePeerWaitingForDisconnect = true;
          }

          this._cleanupGamePeerData();

          if (this.isConnectedToMaster()) {
            this.changeState(LoadBalancingClient.State.JoinedLobby);
          } else {
            this.changeState(LoadBalancingClient.State.Disconnected);
            this.connect(this.connectOptions);
          }
        }
      };
      /**
          @summary Raises game custom event
          @method Photon.LoadBalancing.LoadBalancingClient#raiseEvent
          @param {number} eventCode Identifies this type of event (and the content). Your game's event codes can start with 0.
          @param {object} [data] Custom data you want to send along (use null, if none).
          @param {object} [options] Additional options
          @property {object} options Additional options
          @property {number} [options.interestGroup] The ID of the interest group this event goes to (exclusively).
          @property {Photon.LoadBalancing.Constants.EventCaching} [options.cache=EventCaching.DoNotCache] Events can be cached (merged and removed) for players joining later on.
          @property {Photon.LoadBalancing.Constants.ReceiverGroup} [options.receivers=ReceiverGroup.Others] Defines to which group of players the event is passed on.
          @property {number[]} [options.targetActors] Defines the target players who should receive the event (use only for small target groups).
          @property {boolean} [options.webForward=false] Forward to web hook.
      */


      LoadBalancingClient.prototype.raiseEvent = function (eventCode, data, options) {
        if (this.isJoinedToRoom()) {
          this.gamePeer.raiseEvent(eventCode, data, options);
        }
      };
      /**
          @summary Changes client's interest groups (for events in room).<br/>
          Note the difference between passing null and []: null won't add/remove any groups, [] will add/remove all (existing) groups.<br/>
          First, removing groups is executed. This way, you could leave all groups and join only the ones provided.
          @method Photon.LoadBalancing.LoadBalancingClient#changeGroups
          @param {number[]} groupsToRemove Groups to remove from interest. Null will not leave any. A [] will remove all.
          @param {number[]} groupsToAdd Groups to add to interest. Null will not add any. A [] will add all current.
      */


      LoadBalancingClient.prototype.changeGroups = function (groupsToRemove, groupsToAdd) {
        if (this.isJoinedToRoom()) {
          this.logger.debug("Group change:", groupsToRemove, groupsToAdd);
          this.gamePeer.changeGroups(groupsToRemove, groupsToAdd);
        }
      };
      /**
          @summary Requests Master server for actors online status and joined rooms.<br/>
          Override {@link Photon.LoadBalancing.LoadBalancingClient#onFindFriendsResult onFindFriendsResult} to handle request results.
          @method Photon.LoadBalancing.LoadBalancingClient#findFriends
          @param {string[]} friendsToFind Actors names.
      **/


      LoadBalancingClient.prototype.findFriends = function (friendsToFind) {
        if (this.isConnectedToMaster()) {
          if (friendsToFind && typeof friendsToFind == "object") {
            this.findFriendsRequestList = new Array();

            for (var i = 0; i < friendsToFind.length; ++i) {
              if (typeof friendsToFind[i] == "string") {
                this.findFriendsRequestList[i] = friendsToFind[i];
              } else {
                this.logger.error("FindFriends request error:", "Friend name is not a string", i);
                this.onFindFriendsResult(-1, "Friend name is not a string" + " " + i, {});
                return;
              }
            }

            this.logger.debug("Find friends:", friendsToFind);
            this.masterPeer.findFriends(this.findFriendsRequestList);
          } else {
            this.logger.error("FindFriends request error:", "Parameter is not an array");
            this.onFindFriendsResult(-1, "Parameter is not an array", {});
          }
        } else {
          this.logger.error("FindFriends request error:", "Not connected to Master");
          this.onFindFriendsResult(LoadBalancingClient.PeerErrorCode.MasterError, "Not connected to Master", {});
        }
      };
      /**
          @summary Requests Master server for lobbies statistics.<br/>
          Override {@link Photon.LoadBalancing.LoadBalancingClient#onLobbyStats onLobbyStats} to handle request results.<br/>
          Alternatively, automated updates can be set up during {@link Photon.LoadBalancing.LoadBalancingClient#connect connect}.
          @method Photon.LoadBalancing.LoadBalancingClient#requestLobbyStats
          @param {any[]} lobbiesToRequest Array of lobbies id pairs [ [lobbyName1, lobbyType1], [lobbyName2, lobbyType2], ... ]. If not specified or null, statistics for all lobbies requested.
            **/


      LoadBalancingClient.prototype.requestLobbyStats = function (lobbiesToRequest) {
        if (this.isConnectedToMaster()) {
          this.lobbyStatsRequestList = new Array();

          if (lobbiesToRequest) {
            if (typeof lobbiesToRequest == "object") {
              for (var i = 0; i < lobbiesToRequest.length; ++i) {
                var l = lobbiesToRequest[i];

                if (typeof l == "object") {
                  var n = l[0];

                  if (n) {
                    var t;

                    if (l[1] === undefined) {
                      t = LoadBalancing.Constants.LobbyType.Default;
                    } else {
                      if (typeof l[1] == "number") {
                        t = l[1];
                      } else {
                        this.requestLobbyStatsErr("Lobby type is invalid", i);
                        return;
                      }
                    }

                    this.lobbyStatsRequestList[i] = [n.toString(), t];
                  } else {
                    this.requestLobbyStatsErr("Lobby name is empty", i);
                    return;
                  }
                } else {
                  this.requestLobbyStatsErr("Lobby id is not an array", i);
                  return;
                }
              }
            } else {
              this.requestLobbyStatsErr("Parameter is not an array");
              return;
            }
          }

          this.masterPeer.requestLobbyStats(this.lobbyStatsRequestList);
        } else {
          this.logger.error("LobbyState request error:", "Not connected to Master");
          this.onLobbyStats(LoadBalancingClient.PeerErrorCode.MasterError, "Not connected to Master", []);
        }
      };

      LoadBalancingClient.prototype.requestLobbyStatsErr = function (m, other) {
        if (other === void 0) {
          other = "";
        }

        this.logger.error("LobbyState request error:", m, other);
        this.onLobbyStats(-1, m + " " + other, []);
      };
      /**
          @summary Requests NameServer for regions list.<br/>
          Override {@link Photon.LoadBalancing.LoadBalancingClient#onGetRegionsResult onGetRegionsResult} to handle request results.<br/>
          @method Photon.LoadBalancing.LoadBalancingClient#getRegions
      **/


      LoadBalancingClient.prototype.getRegions = function () {
        if (this.isConnectedToNameServer()) {
          this.logger.debug("GetRegions...");
          this.nameServerPeer.getRegions(this.appId);
        } else {
          this.logger.error("GetRegions request error:", "Not connected to NameServer");
          this.onGetRegionsResult(LoadBalancingClient.PeerErrorCode.NameServerError, "Not connected to NameServer", {});
        }
      };
      /**
          @summary Sends web rpc request to Master server.<br/ >
          Override {@link Photon.LoadBalancing.LoadBalancingClient#onWebRpcResult onWebRpcResult} to handle request results.<br/>
          @method Photon.LoadBalancing.LoadBalancingClient#webRpc
          @param {string} uriPath Request path.
          @param {object} parameters Request parameters.
          @param {object} [options] Additional options
          @property {object} options Additional options
          @property {boolean} [options.sendAuthCookie] Defines if the authentication cookie gets sent to a WebHook (if setup)
      **/


      LoadBalancingClient.prototype.webRpc = function (uriPath, parameters, options) {
        if (this.isConnectedToMaster()) {
          this.logger.debug("WebRpc...");
          this.masterPeer.webRpc(uriPath, parameters, options);
        } else if (this.isJoinedToRoom()) {
          this.logger.debug("WebRpc...");
          this.gamePeer.webRpc(uriPath, parameters, options);
        } else {
          this.logger.error("WebRpc request error:", "Connected to neither Master nor Game server");
          this.onWebRpcResult(LoadBalancingClient.PeerErrorCode.MasterError, "Connected to neither Master nor Game server", uriPath, 0, {});
        }
      };
      /**
          @summary Connects to a specific region's Master server, using the NameServer to find the IP.
          Override {@link Photon.LoadBalancing.LoadBalancingClient#onWebRpcResult onWebRpcResult} to handle request results.<br/>
          @method Photon.LoadBalancing.LoadBalancingClient#connectToRegionMaster
          @param {string} region Region connect to Master server of.
          @returns {boolean} True if current client state allows connection.
      **/


      LoadBalancingClient.prototype.connectToRegionMaster = function (region) {
        if (this.isConnectedToNameServer()) {
          this.logger.debug("Connecting to Region Master", region, "...");
          this.nameServerPeer.opAuth(this.appId, this.appVersion, this.userAuthType, this.userAuthParameters, this.userAuthData, this.userId, region);
          return true;
        } else if (this.connectToNameServer({
          region: region
        })) {
          return true;
        } else {
          this.logger.error("Connecting to Region Master error:", "Not connected to NameServer");
          return false;
        }
      };
      /**
          @summary Checks if client is connected to Master server (usually joined to lobby and receives room list updates).
          @method Photon.LoadBalancing.LoadBalancingClient#isConnectedToMaster
          @returns {boolean} True if client is connected to Master server.
      */


      LoadBalancingClient.prototype.isConnectedToMaster = function () {
        return this.masterPeer && this.masterPeer.isConnected();
      };
      /**
          @summary Checks if client is connected to NameServer server.
          @method Photon.LoadBalancing.LoadBalancingClient#isConnectedToNameServer
          @returns {boolean} True if client is connected to NameServer server.
      */


      LoadBalancingClient.prototype.isConnectedToNameServer = function () {
        return this.nameServerPeer && this.nameServerPeer.isConnected();
      };
      /**
          @summary Checks if client is in lobby and ready to join or create game.
          @method Photon.LoadBalancing.LoadBalancingClient#isInLobby
          @returns {boolean} True if client is in lobby.
      */


      LoadBalancingClient.prototype.isInLobby = function () {
        return this.state == LoadBalancingClient.State.JoinedLobby;
      };
      /**
          @summary Checks if client is joined to game.
          @method Photon.LoadBalancing.LoadBalancingClient#isJoinedToRoom
          @returns {boolean} True if client is joined to game.
      */


      LoadBalancingClient.prototype.isJoinedToRoom = function () {
        return this.state == LoadBalancingClient.State.Joined;
      };
      /**
          @deprecated Use isJoinedToRoom()
      */


      LoadBalancingClient.prototype.isConnectedToGame = function () {
        return this.isJoinedToRoom();
      };
      /**
          @summary Current room list from Master server.
          @method Photon.LoadBalancing.LoadBalancingClient#availableRooms
          @returns {{@link Photon.LoadBalancing.RoomInfo}[]} Current room list
      */


      LoadBalancingClient.prototype.availableRooms = function () {
        return this.roomInfos;
      };
      /**
          @summary Sets client logger level
          @method Photon.LoadBalancing.LoadBalancingClient#setLogLevel
          @param {Exitgames.Common.Logger.Level} level Logging level.
      */


      LoadBalancingClient.prototype.setLogLevel = function (level) {
        this.logger.setLevel(level);

        if (this.nameServerPeer) {
          this.nameServerPeer.setLogLevel(level);
        }

        if (this.masterPeer) {
          this.masterPeer.setLogLevel(level);
        }

        if (this.gamePeer) {
          this.gamePeer.setLogLevel(level);
        }
      };

      LoadBalancingClient.prototype.addRoom = function (r) {
        this.roomInfos.push(r);
        this.roomInfosDict[r.name] = r;
      };

      LoadBalancingClient.prototype.clearRooms = function () {
        this.roomInfos = new Array();
        this.roomInfosDict = {};
      };

      LoadBalancingClient.prototype.purgeRemovedRooms = function () {
        this.roomInfos = this.roomInfos.filter(function (x) {
          return !x.removed;
        });

        for (var n in this.roomInfosDict) {
          if (this.roomInfosDict[n].removed) {
            delete this.roomInfosDict[n];
          }
        }
      };

      LoadBalancingClient.prototype.addActor = function (a) {
        this.actors[a.actorNr] = a;
        this.actorsArray.push(a);
        this.currentRoom.playerCount = this.actorsArray.length;
        if (this.lowestActorId == 0 || this.lowestActorId > a.actorNr) this.lowestActorId = a.actorNr;
      };

      LoadBalancingClient.prototype.removeActor = function (actorNr) {
        delete this.actors[actorNr];
        this.actorsArray = this.actorsArray.filter(function (x) {
          return x.actorNr != actorNr;
        });
        this.currentRoom.playerCount = this.actorsArray.length;

        if (this.lowestActorId == actorNr) {
          if (this.actorsArray.length > 0) this.lowestActorId = this.actorsArray.reduce(function (prev, curr) {
            return prev.actorNr < curr.actorNr ? prev : curr;
          }).actorNr;else this.lowestActorId = 0;
        }
      };

      LoadBalancingClient.prototype.clearActors = function () {
        this.actors = {};
        this.actorsArray = [];
        this.currentRoom.playerCount = 0;
        this.lowestActorId = 0;
      };

      LoadBalancingClient.prototype.changeState = function (nextState) {
        this.logger.info("State:", LoadBalancingClient.StateToName(this.state), "->", LoadBalancingClient.StateToName(nextState));
        this.state = nextState;
        this.onStateChange(nextState);
      };

      LoadBalancingClient.prototype.createRoomInternal = function (peer, options) {
        var op = [];
        if (this.currentRoom.name) op.push(LoadBalancing.Constants.ParameterCode.RoomName, this.currentRoom.name);
        this.fillCreateRoomOptions(op, options);

        if (peer === this.masterPeer) {
          this.createRoomOptions = options;
        }

        if (peer === this.gamePeer) {
          op.push(LoadBalancing.Constants.ParameterCode.PlayerProperties);
          op.push(this._myActor._getAllProperties());
        }

        var log = peer == this.gamePeer ? this.gamePeer._logger : this.masterPeer._logger;
        log.info("Create Room", options && options.lobbyName, options && options.lobbyType, "...");
        peer.sendOperation(LoadBalancing.Constants.OperationCode.CreateGame, op);
      };

      LoadBalancingClient.prototype.updateUserIdAndNickname = function (vals, logger) {
        var userId = vals[LoadBalancing.Constants.ParameterCode.UserId];

        if (userId != undefined) {
          this.setUserId(userId);
          logger.info("Setting userId sent by server:", userId);
        }

        var nickname = vals[LoadBalancing.Constants.ParameterCode.Nickname];

        if (nickname != undefined) {
          this.myActor().setName(nickname);
          logger.info("Setting nickname sent by server:", nickname);
        }
      };

      LoadBalancingClient.prototype.initNameServerPeer = function (np) {
        var _this = this;

        np.setLogLevel(this.logger.getLevel()); // errors

        np.addPeerStatusListener(Photon.PhotonPeer.StatusCodes.error, function () {
          _this.changeState(LoadBalancingClient.State.Error);

          _this._onErrorInternal(LoadBalancingClient.PeerErrorCode.NameServerError, "NameServer peer error");
        });
        np.addPeerStatusListener(Photon.PhotonPeer.StatusCodes.connectFailed, function () {
          _this.changeState(LoadBalancingClient.State.Error);

          _this._onErrorInternal(LoadBalancingClient.PeerErrorCode.NameServerConnectFailed, "NameServer peer connect failed. " + _this.nameServerAddress);
        });
        np.addPeerStatusListener(Photon.PhotonPeer.StatusCodes.timeout, function () {
          _this.changeState(LoadBalancingClient.State.Error);

          _this._onErrorInternal(LoadBalancingClient.PeerErrorCode.NameServerTimeout, "NameServer peer timeout");
        });
        np.addPeerStatusListener(Photon.PhotonPeer.StatusCodes.connecting, function () {});
        np.addPeerStatusListener(Photon.PhotonPeer.StatusCodes.connect, function () {
          np._logger.info("Connected");

          _this.changeState(LoadBalancingClient.State.ConnectedToNameServer); // connectToRegionMaster inited connection


          if (_this.connectOptions.region != undefined) {
            np.opAuth(_this.appId, _this.appVersion, _this.userAuthType, _this.userAuthParameters, _this.userAuthData, _this.userId, _this.connectOptions.region);
          }
        });
        np.addPeerStatusListener(Photon.PhotonPeer.StatusCodes.disconnect, function () {
          if (np == _this.nameServerPeer) {
            _this._cleanupNameServerPeerData();

            np._logger.info("Disconnected");
          }
        });
        np.addPeerStatusListener(Photon.PhotonPeer.StatusCodes.connectClosed, function () {
          np._logger.info("Server closed connection");

          _this.changeState(LoadBalancingClient.State.Error);

          _this._onErrorInternal(LoadBalancingClient.PeerErrorCode.NameServerConnectClosed, "NameServer server closed connection");
        }); // events
        // responses - check operation result. data.errCode

        np.addResponseListener(LoadBalancing.Constants.OperationCode.GetRegions, function (data) {
          np._logger.debug("resp GetRegions", data);

          var regions = {};

          if (data.errCode == 0) {
            var r = data.vals[LoadBalancing.Constants.ParameterCode.Region];
            var a = data.vals[LoadBalancing.Constants.ParameterCode.Address];

            for (var i in r) {
              regions[r[i]] = a[i];
            }
          } else {
            np._logger.error("GetRegions request error.", data.errCode);
          }

          _this.onGetRegionsResult(data.errCode, data.errMsg, regions);
        });
        np.addResponseListener(LoadBalancing.Constants.OperationCode.Authenticate, function (data) {
          np._logger.debug("resp Authenticate", data);

          if (data.errCode == 0) {
            np._logger.info("Authenticated");

            np.disconnect();

            _this.updateUserIdAndNickname(data.vals, np._logger);

            _this.masterServerAddress = data.vals[LoadBalancing.Constants.ParameterCode.Address];

            np._logger.info("Connecting to Master server", _this.masterServerAddress, "...");

            _this.connectOptions.userAuthSecret = data.vals[LoadBalancing.Constants.ParameterCode.Secret];

            _this.connect(_this.connectOptions);
          } else {
            _this.changeState(LoadBalancingClient.State.Error);

            _this._onErrorInternal(LoadBalancingClient.PeerErrorCode.NameServerAuthenticationFailed, "NameServer authentication failed: " + data.errCode + " " + data.errMsg);
          }
        });
      }; // protected


      LoadBalancingClient.prototype.initMasterPeer = function (mp) {
        var _this = this;

        mp.setLogLevel(this.logger.getLevel()); // errors

        mp.addPeerStatusListener(Photon.PhotonPeer.StatusCodes.error, function () {
          _this.changeState(LoadBalancingClient.State.Error);

          _this._onErrorInternal(LoadBalancingClient.PeerErrorCode.MasterError, "Master peer error");
        });
        mp.addPeerStatusListener(Photon.PhotonPeer.StatusCodes.connectFailed, function () {
          _this.changeState(LoadBalancingClient.State.Error);

          _this._onErrorInternal(LoadBalancingClient.PeerErrorCode.MasterConnectFailed, "Master peer connect failed: " + _this.masterServerAddress);
        });
        mp.addPeerStatusListener(Photon.PhotonPeer.StatusCodes.timeout, function () {
          _this.changeState(LoadBalancingClient.State.Error);

          _this._onErrorInternal(LoadBalancingClient.PeerErrorCode.MasterTimeout, "Master peer error timeout");
        });
        mp.addPeerStatusListener(Photon.PhotonPeer.StatusCodes.connecting, function () {}); // status

        mp.addPeerStatusListener(Photon.PhotonPeer.StatusCodes.connect, function () {
          //TODO: encryption phase
          mp._logger.info("Connected");

          var op = []; // if NameSever gave us secret

          if (_this.connectOptions.userAuthSecret) {
            op.push(LoadBalancing.Constants.ParameterCode.Secret, _this.connectOptions.userAuthSecret);
            mp.sendOperation(LoadBalancing.Constants.OperationCode.Authenticate, op);

            mp._logger.info("Authenticate with secret...");
          } else {
            op.push(LoadBalancing.Constants.ParameterCode.ApplicationId);
            op.push(_this.appId);
            op.push(LoadBalancing.Constants.ParameterCode.AppVersion);
            op.push(_this.appVersion);

            if (_this.userAuthType != LoadBalancing.Constants.CustomAuthenticationType.None) {
              op.push(LoadBalancing.Constants.ParameterCode.ClientAuthenticationType, Photon.TypeExt.Byte(_this.userAuthType));
              op.push(LoadBalancing.Constants.ParameterCode.ClientAuthenticationParams, _this.userAuthParameters);

              if (_this.userAuthData) {
                op.push(LoadBalancing.Constants.ParameterCode.ClientAuthenticationData, _this.userAuthData);
              }
            }

            if (_this.userId) {
              op.push(LoadBalancing.Constants.ParameterCode.UserId, _this.userId);
            }

            if (_this.connectOptions.lobbyStats) {
              op.push(LoadBalancing.Constants.ParameterCode.LobbyStats, true);
            }

            mp.sendOperation(LoadBalancing.Constants.OperationCode.Authenticate, op);

            mp._logger.info("Authenticate...");
          }
        });
        mp.addPeerStatusListener(Photon.PhotonPeer.StatusCodes.disconnect, function () {
          if (mp == _this.masterPeer) {
            _this._cleanupMasterPeerData();

            mp._logger.info("Disconnected");
          }
        });
        mp.addPeerStatusListener(Photon.PhotonPeer.StatusCodes.connectClosed, function () {
          mp._logger.info("Server closed connection");

          _this.changeState(LoadBalancingClient.State.Error);

          _this._onErrorInternal(LoadBalancingClient.PeerErrorCode.MasterConnectClosed, "Master server closed connection");
        }); //events

        mp.addEventListener(LoadBalancing.Constants.EventCode.GameList, function (data) {
          var gameList = data.vals[LoadBalancing.Constants.ParameterCode.GameList];

          _this.clearRooms();

          for (var g in gameList) {
            var r = new RoomInfo(g);

            r._updateFromProps(gameList[g]);

            _this.addRoom(r);
          }

          _this.onRoomList(_this.roomInfos);

          mp._logger.debug("ev GameList", _this.roomInfos, gameList);
        });
        mp.addEventListener(LoadBalancing.Constants.EventCode.GameListUpdate, function (data) {
          var gameList = data.vals[LoadBalancing.Constants.ParameterCode.GameList];
          var roomsUpdated = new Array();
          var roomsAdded = new Array();
          var roomsRemoved = new Array();

          for (var g in gameList) {
            var exist = _this.roomInfos.filter(function (x) {
              return x.name == g;
            });

            if (exist.length > 0) {
              var r = exist[0];

              r._updateFromProps(gameList[g]);

              if (r.removed) {
                roomsRemoved.push(r);
              } else {
                roomsUpdated.push(r);
              }
            } else {
              var ri = new RoomInfo(g);

              ri._updateFromProps(gameList[g]);

              _this.addRoom(ri);

              roomsAdded.push(ri);
            }
          }

          _this.purgeRemovedRooms();

          _this.onRoomListUpdate(_this.roomInfos, roomsUpdated, roomsAdded, roomsRemoved);

          mp._logger.debug("ev GameListUpdate:", _this.roomInfos, "u:", roomsUpdated, "a:", roomsAdded, "r:", roomsRemoved, gameList);
        }); // responses - check operation result: data.errCode

        mp.addResponseListener(LoadBalancing.Constants.OperationCode.Authenticate, function (data) {
          mp._logger.debug("resp Authenticate", data);

          if (!data.errCode) {
            mp._logger.info("Authenticated");

            _this.updateUserIdAndNickname(data.vals, mp._logger);

            if (data.vals[LoadBalancing.Constants.ParameterCode.Secret] != undefined) {
              _this.connectOptions.userAuthSecret = data.vals[LoadBalancing.Constants.ParameterCode.Secret];
            }

            _this.changeState(LoadBalancingClient.State.ConnectedToMaster);

            var op = [];

            if (_this.connectOptions.lobbyName) {
              op.push(LoadBalancing.Constants.ParameterCode.LobbyName);
              op.push(_this.connectOptions.lobbyName);

              if (_this.connectOptions.lobbyType != undefined) {
                op.push(LoadBalancing.Constants.ParameterCode.LobbyType);
                op.push(_this.connectOptions.lobbyType);
              }
            }

            if (_this.autoJoinLobby) {
              mp.sendOperation(LoadBalancing.Constants.OperationCode.JoinLobby, op);

              mp._logger.info("Join Lobby", _this.connectOptions.lobbyName, _this.connectOptions.lobbyType, "...");
            }
          } else {
            _this.changeState(LoadBalancingClient.State.Error);

            _this._onErrorInternal(LoadBalancingClient.PeerErrorCode.MasterAuthenticationFailed, "Master authentication failed: " + data.errCode + " " + data.errMsg);
          }
        });
        mp.addResponseListener(LoadBalancing.Constants.OperationCode.JoinLobby, function (data) {
          mp._logger.debug("resp JoinLobby", data);

          if (!data.errCode) {
            mp._logger.info("Joined to Lobby");

            _this.changeState(LoadBalancingClient.State.JoinedLobby);
          }

          _this._onOperationResponseInternal2(LoadBalancing.Constants.OperationCode.JoinLobby, data);
        });
        mp.addResponseListener(LoadBalancing.Constants.OperationCode.CreateGame, function (data) {
          mp._logger.debug("resp CreateGame", data);

          if (!data.errCode) {
            _this.currentRoom._updateFromMasterResponse(data.vals);

            mp._logger.debug("Created/Joined " + _this.currentRoom.name);

            _this.connectToGameServer(LoadBalancing.Constants.OperationCode.CreateGame);
          }

          _this._onOperationResponseInternal2(LoadBalancing.Constants.OperationCode.CreateGame, data);
        });
        mp.addResponseListener(LoadBalancing.Constants.OperationCode.JoinGame, function (data) {
          mp._logger.debug("resp JoinGame", data);

          if (!data.errCode) {
            _this.currentRoom._updateFromMasterResponse(data.vals);

            mp._logger.debug("Joined " + _this.currentRoom.name);

            _this.connectToGameServer(LoadBalancing.Constants.OperationCode.JoinGame);
          }

          _this._onOperationResponseInternal2(LoadBalancing.Constants.OperationCode.JoinGame, data);
        });
        mp.addResponseListener(LoadBalancing.Constants.OperationCode.JoinRandomGame, function (data) {
          mp._logger.debug("resp JoinRandomGame", data);

          if (!data.errCode) {
            _this.currentRoom._updateFromMasterResponse(data.vals);

            mp._logger.debug("Joined " + _this.currentRoom.name);

            _this.connectToGameServer(LoadBalancing.Constants.OperationCode.JoinRandomGame);
          }

          _this._onOperationResponseInternal2(LoadBalancing.Constants.OperationCode.JoinRandomGame, data);
        });
        mp.addResponseListener(LoadBalancing.Constants.OperationCode.FindFriends, function (data) {
          mp._logger.debug("resp FindFriends", data);

          var res = {};

          if (!data.errCode) {
            var onlines = data.vals[LoadBalancing.Constants.ParameterCode.FindFriendsResponseOnlineList] || {};
            var roomIds = data.vals[LoadBalancing.Constants.ParameterCode.FindFriendsResponseRoomIdList] || {};

            for (var i = 0; i < _this.findFriendsRequestList.length; ++i) {
              var name = _this.findFriendsRequestList[i];

              if (name) {
                res[name] = {
                  online: onlines[i],
                  roomId: roomIds[i]
                };
              }
            }
          } else {
            mp._logger.error("FindFriends request error:", data.errCode);
          }

          _this.onFindFriendsResult(data.errCode, data.errMsg, res);
        });
        mp.addResponseListener(LoadBalancing.Constants.OperationCode.LobbyStats, function (data) {
          mp._logger.debug("resp LobbyStats", data);

          var res = new Array();

          if (!data.errCode) {
            var names = data.vals[LoadBalancing.Constants.ParameterCode.LobbyName]; // not inited intentionally

            var types = data.vals[LoadBalancing.Constants.ParameterCode.LobbyType] || {};
            var peers = data.vals[LoadBalancing.Constants.ParameterCode.PeerCount] || {};
            var games = data.vals[LoadBalancing.Constants.ParameterCode.GameCount] || {};

            if (names) {
              for (var i = 0; i < names.length; ++i) {
                res[i] = {
                  lobbyName: names[i],
                  lobbyType: types[i],
                  peerCount: peers[i],
                  gameCount: games[i]
                };
              }
            } else {
              for (var i = 0; i < _this.lobbyStatsRequestList.length; ++i) {
                var l = _this.lobbyStatsRequestList[i];
                res[i] = {
                  lobbyName: l[0],
                  lobbyType: l[1],
                  peerCount: peers[i],
                  gameCount: games[i]
                };
              }
            }
          } else {
            mp._logger.error("LobbyStats request error:", data.errCode);
          }

          _this.onLobbyStats(data.errCode, data.errMsg, res);
        });
        mp.addEventListener(LoadBalancing.Constants.EventCode.LobbyStats, function (data) {
          mp._logger.debug("ev LobbyStats", data);

          var res = new Array();
          var names = data.vals[LoadBalancing.Constants.ParameterCode.LobbyName]; // not inited intentionally

          var types = data.vals[LoadBalancing.Constants.ParameterCode.LobbyType] || {};
          var peers = data.vals[LoadBalancing.Constants.ParameterCode.PeerCount] || {};
          var games = data.vals[LoadBalancing.Constants.ParameterCode.GameCount] || {};

          if (names) {
            for (var i = 0; i < names.length; ++i) {
              res[i] = {
                lobbyName: names[i],
                lobbyType: types[i],
                peerCount: peers[i],
                gameCount: games[i]
              };
            }
          }

          _this.onLobbyStats(0, "", res);
        });
        mp.addEventListener(LoadBalancing.Constants.EventCode.AppStats, function (data) {
          mp._logger.debug("ev AppStats", data);

          var res = {
            peerCount: data.vals[LoadBalancing.Constants.ParameterCode.PeerCount],
            masterPeerCount: data.vals[LoadBalancing.Constants.ParameterCode.MasterPeerCount],
            gameCount: data.vals[LoadBalancing.Constants.ParameterCode.GameCount]
          };

          _this.onAppStats(0, "", res);
        });
        mp.addResponseListener(LoadBalancing.Constants.OperationCode.Rpc, mp.webRpcHandler(this));
      };

      LoadBalancingClient.prototype.connectToGameServer = function (masterOpCode) {
        if (!this.connectOptions.keepMasterConnection) {
          this.masterPeer.disconnect();
        }

        if (this.checkNextState(LoadBalancingClient.State.ConnectingToGameserver, true)) {
          this.logger.info("Connecting to Game", this.currentRoom.address);
          if (this.gamePeer) this.gamePeer.Destroy();
          this.gamePeer = new GamePeer(this, this.connectionProtocol, this.currentRoom.address, "");
          this.gamePeerWaitingForDisconnect = false;
          this.initGamePeer(this.gamePeer, masterOpCode);
          this.gamePeer.connect(this.appId);
          this.changeState(LoadBalancingClient.State.ConnectingToGameserver);
          return true;
        } else {
          return false;
        }
      };

      LoadBalancingClient.prototype.initGamePeer = function (gp, masterOpCode) {
        var _this = this;

        gp.setLogLevel(this.logger.getLevel()); // errors

        gp.addPeerStatusListener(Photon.PhotonPeer.StatusCodes.error, function () {
          _this.changeState(LoadBalancingClient.State.Error);

          _this._onErrorInternal(LoadBalancingClient.PeerErrorCode.GameError, "Game peer error");
        });
        gp.addPeerStatusListener(Photon.PhotonPeer.StatusCodes.connectFailed, function () {
          _this.changeState(LoadBalancingClient.State.Error);

          _this._onErrorInternal(LoadBalancingClient.PeerErrorCode.GameConnectFailed, "Game peer connect failed: " + _this.currentRoom.address);
        });
        gp.addPeerStatusListener(Photon.PhotonPeer.StatusCodes.timeout, function () {
          _this.changeState(LoadBalancingClient.State.Error);

          _this._onErrorInternal(LoadBalancingClient.PeerErrorCode.GameTimeout, "Game peer timeout");
        }); // status

        gp.addPeerStatusListener(Photon.PhotonPeer.StatusCodes.connect, function () {
          gp._logger.info("Connected"); //TODO: encryption phase


          var op = [];
          op.push(LoadBalancing.Constants.ParameterCode.ApplicationId);
          op.push(_this.appId);
          op.push(LoadBalancing.Constants.ParameterCode.AppVersion);
          op.push(_this.appVersion);

          if (_this.connectOptions.userAuthSecret != undefined) {
            op.push(LoadBalancing.Constants.ParameterCode.Secret);
            op.push(_this.connectOptions.userAuthSecret);
          }

          if (_this.userAuthType != LoadBalancing.Constants.CustomAuthenticationType.None) {
            op.push(LoadBalancing.Constants.ParameterCode.ClientAuthenticationType);
            op.push(Photon.TypeExt.Byte(_this.userAuthType));
          }

          if (_this.userId) {
            op.push(LoadBalancing.Constants.ParameterCode.UserId, _this.userId);
          }

          gp.sendOperation(LoadBalancing.Constants.OperationCode.Authenticate, op);

          gp._logger.info("Authenticate...");
        });
        gp.addPeerStatusListener(Photon.PhotonPeer.StatusCodes.disconnect, function () {
          if (gp == _this.gamePeer) {
            _this._cleanupGamePeerData();

            gp._logger.info("Disconnected");
          }
        });
        gp.addPeerStatusListener(Photon.PhotonPeer.StatusCodes.connectClosed, function () {
          gp._logger.info("Server closed connection");

          if (!_this.gamePeerWaitingForDisconnect) {
            _this.changeState(LoadBalancingClient.State.Error);

            _this._onErrorInternal(LoadBalancingClient.PeerErrorCode.MasterConnectClosed, "Game server closed connection");
          }
        }); // responses

        gp.addResponseListener(LoadBalancing.Constants.OperationCode.Authenticate, function (data) {
          gp._logger.debug("resp Authenticate", data);

          if (!data.errCode) {
            gp._logger.info("Authenticated");

            gp._logger.info("Connected");

            if (masterOpCode == LoadBalancing.Constants.OperationCode.CreateGame) {
              _this.createRoomInternal(gp, _this.createRoomOptions);
            } else {
              var op = [];
              op.push(LoadBalancing.Constants.ParameterCode.RoomName);
              op.push(_this.currentRoom.name);
              op.push(LoadBalancing.Constants.ParameterCode.Broadcast);
              op.push(true);
              op.push(LoadBalancing.Constants.ParameterCode.PlayerProperties);
              op.push(_this._myActor._getAllProperties());

              if (masterOpCode == LoadBalancing.Constants.OperationCode.JoinGame) {
                if (_this.joinRoomOptions.createIfNotExists) {
                  op.push(LoadBalancing.Constants.ParameterCode.JoinMode, LoadBalancingClient.JoinMode.CreateIfNotExists);

                  _this.fillCreateRoomOptions(op, _this.createRoomOptions);
                }

                if (_this.joinRoomOptions.rejoin) {
                  op.push(LoadBalancing.Constants.ParameterCode.JoinMode, LoadBalancingClient.JoinMode.RejoinOnly);
                }
              }

              gp.sendOperation(LoadBalancing.Constants.OperationCode.JoinGame, op);
            }

            _this.changeState(LoadBalancingClient.State.ConnectedToGameserver);
          } else {
            _this.changeState(LoadBalancingClient.State.Error);

            _this._onErrorInternal(LoadBalancingClient.PeerErrorCode.GameAuthenticationFailed, "Game authentication failed: " + data.errCode + " " + data.errMsg);
          }
        });
        gp.addResponseListener(LoadBalancing.Constants.OperationCode.CreateGame, function (data) {
          gp._logger.debug("resp CreateGame", data);

          if (!data.errCode) {
            _this._myActor._updateMyActorFromResponse(data.vals);

            gp._logger.info("myActor: ", _this._myActor);

            _this.currentRoom._updateFromProps(data.vals[LoadBalancing.Constants.ParameterCode.GameProperties]);

            _this.clearActors();

            _this.addActor(_this._myActor);

            _this.changeState(LoadBalancingClient.State.Joined);

            _this.onJoinRoom(true);
          }

          _this._onOperationResponseInternal2(LoadBalancing.Constants.OperationCode.CreateGame, data);
        });
        gp.addResponseListener(LoadBalancing.Constants.OperationCode.JoinGame, function (data) {
          gp._logger.debug("resp JoinGame", data);

          if (!data.errCode) {
            _this._myActor._updateMyActorFromResponse(data.vals);

            gp._logger.info("myActor: ", _this._myActor);

            _this.clearActors();

            _this.addActor(_this._myActor);

            var actorList = data.vals[LoadBalancing.Constants.ParameterCode.ActorList];
            var actorProps = data.vals[LoadBalancing.Constants.ParameterCode.PlayerProperties];

            if (actorList !== undefined) {
              for (var i = 0; i < actorList.length; i++) {
                var actorNr = actorList[i];
                var props;
                if (actorProps !== undefined) props = actorProps[actorNr];
                var name;

                if (props !== undefined) {
                  name = props[LoadBalancing.Constants.ActorProperties.PlayerName];
                }

                var a;
                if (actorNr == _this._myActor.actorNr) a = _this._myActor;else {
                  a = _this.actorFactoryInternal(name, actorNr);

                  _this.addActor(a);
                }

                if (props !== undefined) {
                  a._updateCustomProperties(props);
                }
              }
            }

            _this.currentRoom._updateFromProps(data.vals[LoadBalancing.Constants.ParameterCode.GameProperties]);

            _this.changeState(LoadBalancingClient.State.Joined);

            _this.onJoinRoom(false);
          }

          _this._onOperationResponseInternal2(LoadBalancing.Constants.OperationCode.JoinGame, data);
        });
        gp.addResponseListener(LoadBalancing.Constants.OperationCode.SetProperties, function (data) {
          gp._logger.debug("resp SetProperties", data);

          _this._onOperationResponseInternal2(LoadBalancing.Constants.OperationCode.SetProperties, data);
        });
        gp.addResponseListener(LoadBalancing.Constants.OperationCode.Leave, function (data) {
          gp._logger.debug("resp Leave", data);

          gp.disconnect();

          _this._onOperationResponseInternal2(LoadBalancing.Constants.OperationCode.Leave, data);
        });
        gp.addResponseListener(LoadBalancing.Constants.OperationCode.Rpc, gp.webRpcHandler(this)); // events

        gp.addEventListener(LoadBalancing.Constants.EventCode.Join, function (data) {
          gp._logger.debug("ev Join", data);

          if (Actor._getActorNrFromResponse(data.vals) === _this._myActor.actorNr) {
            //this._myActor._updateMyActorFromResponse(data.vals);
            _this._myActor._updateFromResponse(data.vals); //                    this.addActor(this._myActor);


            _this.onActorJoin(_this._myActor); // let client read updated properties

          } else {
            var actor = _this.actorFactoryInternal();

            actor._updateFromResponse(data.vals);

            _this.addActor(actor);

            _this.onActorJoin(actor);
          }
        });
        gp.addEventListener(LoadBalancing.Constants.EventCode.Leave, function (data) {
          gp._logger.debug("ev Leave", data);

          _this.myRoom()._updateFromEvent(data.vals); // updating masterClientId


          var actorNr = Actor._getActorNrFromResponse(data.vals);

          if (actorNr && _this.actors[actorNr]) {
            var a = _this.actors[actorNr];

            if (data.vals[LoadBalancing.Constants.ParameterCode.IsInactive]) {
              a._setSuspended(true);

              _this.onActorSuspend(a);
            } else {
              _this.removeActor(actorNr);

              _this.onActorLeave(a, false);
            }
          }
        });
        gp.addEventListener(LoadBalancing.Constants.EventCode.Disconnect, function (data) {
          gp._logger.debug("ev Disconnect", data);

          var actorNr = Actor._getActorNrFromResponse(data.vals);

          if (actorNr && _this.actors[actorNr]) {
            var a = _this.actors[actorNr];

            a._setSuspended(true);

            _this.onActorSuspend(a);
          }
        });
        gp.addEventListener(LoadBalancing.Constants.EventCode.PropertiesChanged, function (data) {
          gp._logger.debug("ev PropertiesChanged", data);

          var targetActorNr = data.vals[LoadBalancing.Constants.ParameterCode.TargetActorNr];

          if (targetActorNr !== undefined && targetActorNr > 0) {
            if (_this.actors[targetActorNr] !== undefined) {
              var actor = _this.actors[targetActorNr];

              actor._updateCustomProperties(data.vals[LoadBalancing.Constants.ParameterCode.Properties]);

              _this.onActorPropertiesChange(actor);
            }
          } else {
            _this.currentRoom._updateFromProps(data.vals[LoadBalancing.Constants.ParameterCode.Properties]);

            _this.onMyRoomPropertiesChange();
          }
        });
      };

      LoadBalancingClient.prototype._cleanupNameServerPeerData = function () {};

      LoadBalancingClient.prototype._cleanupMasterPeerData = function () {};

      LoadBalancingClient.prototype._cleanupGamePeerData = function () {
        for (var i in this.actors) {
          this.onActorLeave(this.actors[i], true);
        }

        this.clearActors();
        this.addActor(this._myActor);
      };

      LoadBalancingClient.prototype._onOperationResponseInternal2 = function (code, data) {
        if (data.errCode) {
          this.logger.warn("Operation", code, "error:", data.errMsg, "(" + data.errCode + ")");
        }

        this.onOperationResponse(data.errCode, data.errMsg, code, data.vals);
      };

      LoadBalancingClient.prototype._onErrorInternal = function (errorCode, errorMsg) {
        this.logger.error("Error:", errorCode, errorMsg);
        this.onError(errorCode, errorMsg);
      }; //TODO: ugly way to init const table


      LoadBalancingClient.prototype.initValidNextState = function () {
        this.validNextState[LoadBalancingClient.State.Error] = [LoadBalancingClient.State.ConnectingToMasterserver, LoadBalancingClient.State.ConnectingToNameServer];
        this.validNextState[LoadBalancingClient.State.Uninitialized] = [LoadBalancingClient.State.ConnectingToMasterserver, LoadBalancingClient.State.ConnectingToNameServer];
        this.validNextState[LoadBalancingClient.State.ConnectedToNameServer] = [LoadBalancingClient.State.ConnectingToMasterserver];
        this.validNextState[LoadBalancingClient.State.Disconnected] = [LoadBalancingClient.State.ConnectingToMasterserver, LoadBalancingClient.State.ConnectingToNameServer];
        this.validNextState[LoadBalancingClient.State.ConnectedToMaster] = [LoadBalancingClient.State.JoinedLobby];
        this.validNextState[LoadBalancingClient.State.JoinedLobby] = [LoadBalancingClient.State.ConnectingToGameserver];
        this.validNextState[LoadBalancingClient.State.ConnectingToGameserver] = [LoadBalancingClient.State.ConnectedToGameserver];
        this.validNextState[LoadBalancingClient.State.ConnectedToGameserver] = [LoadBalancingClient.State.Joined];
      };

      LoadBalancingClient.prototype.checkNextState = function (nextState, dontThrow) {
        if (dontThrow === void 0) {
          dontThrow = false;
        }

        var valid = this.validNextState[this.state];
        var res = valid && valid.indexOf(nextState) >= 0;

        if (!res) {
          if (dontThrow) {
            this.logger.error("LoadBalancingPeer checkNextState fail: " + LoadBalancingClient.StateToName(this.state) + " -> " + LoadBalancingClient.StateToName(nextState));
          } else {
            this.logger.exception(501, "LoadBalancingPeer checkNextState fail: " + LoadBalancingClient.StateToName(this.state) + " -> " + LoadBalancingClient.StateToName(nextState));
          }
        }

        return res;
      };
      /**
          @summary Converts {@link Photon.LoadBalancing.LoadBalancingClient.State State} element to string name.
          @method Photon.LoadBalancing.LoadBalancingClient.StateToName
          @param {Photon.LoadBalancing.LoadBalancingClient.State} state Client state enum element.
          @returns {string} Specified element name or undefined if not found.
      */


      LoadBalancingClient.StateToName = function (value) {
        return Exitgames.Common.Util.getEnumKeyByValue(LoadBalancingClient.State, value);
      };

      LoadBalancingClient.JoinMode = {
        Default: 0,
        CreateIfNotExists: 1,
        //            JoinOrejoin: 2,
        RejoinOnly: 3
      }; // tsc looses all comments after first static member 
      // jsdoc reads comments from any place within class (and may be from any place in file)

      LoadBalancingClient.PeerErrorCode = {
        /**
            @summary Enum for client peers error codes.
            @member Photon.LoadBalancing.LoadBalancingClient.PeerErrorCode
            @readonly
            @property {number} Ok No Error.
            @property {number} MasterError General Master server peer error.
            @property {number} MasterConnectFailed Master server connection error.
            @property {number} MasterConnectClosed Disconnected from Master server.
            @property {number} MasterTimeout Disconnected from Master server for timeout.
            @property {number} MasterEncryptionEstablishError Master server encryption establishing failed.
            @property {number} MasterAuthenticationFailed Master server authentication failed.
            @property {number} GameError General Game server peer error.
            @property {number} GameConnectFailed Game server connection error.
            @property {number} GameConnectClosed Disconnected from Game server.
            @property {number} GameTimeout Disconnected from Game server for timeout.
            @property {number} GameEncryptionEstablishError Game server encryption establishing failed.
            @property {number} GameAuthenticationFailed Game server authentication failed.
            @property {number} NameServerError General NameServer peer error.
            @property {number} NameServerConnectFailed NameServer connection error.
            @property {number} NameServerConnectClosed Disconnected from NameServer.
            @property {number} NameServerTimeout Disconnected from NameServer for timeout.
            @property {number} NameServerEncryptionEstablishError NameServer encryption establishing failed.
            @property {number} NameServerAuthenticationFailed NameServer authentication failed.
         */
        Ok: 0,
        MasterError: 1001,
        MasterConnectFailed: 1002,
        MasterConnectClosed: 1003,
        MasterTimeout: 1004,
        MasterEncryptionEstablishError: 1005,
        MasterAuthenticationFailed: 1101,
        GameError: 2001,
        GameConnectFailed: 2002,
        GameConnectClosed: 2003,
        GameTimeout: 2004,
        GameEncryptionEstablishError: 2005,
        GameAuthenticationFailed: 2101,
        NameServerError: 3001,
        NameServerConnectFailed: 3002,
        NameServerConnectClosed: 3003,
        NameServerTimeout: 3004,
        NameServerEncryptionEstablishError: 3005,
        NameServerAuthenticationFailed: 3101
      };
      LoadBalancingClient.State = {
        /**
            @summary Enum for client states.
            @member Photon.LoadBalancing.LoadBalancingClient.State
            @readonly
            @property {number} Error Critical error occurred.
            @property {number} Uninitialized Client is created but not used yet.
            @property {number} ConnectingToNameServer Connecting to NameServer.
            @property {number} ConnectedToNameServer Connected to NameServer.
            @property {number} ConnectingToMasterserver Connecting to Master (includes connect, authenticate and joining the lobby).
            @property {number} ConnectedToMaster Connected to Master server.
            @property {number} JoinedLobby Connected to Master and joined lobby. Display room list and join/create rooms at will.
            @property {number} ConnectingToGameserver Connecting to Game server(client will authenticate and join/create game).
            @property {number} ConnectedToGameserver Connected to Game server (going to auth and join game).
            @property {number} Joined The client joined room.
            @property {number} Disconnected The client is no longer connected (to any server). Connect to Master to go on.
        */
        Error: -1,
        Uninitialized: 0,
        ConnectingToNameServer: 1,
        ConnectedToNameServer: 2,
        ConnectingToMasterserver: 3,
        ConnectedToMaster: 4,
        JoinedLobby: 5,
        ConnectingToGameserver: 6,
        ConnectedToGameserver: 7,
        Joined: 8,
        Disconnected: 10
      };
      return LoadBalancingClient;
    }();

    LoadBalancing.LoadBalancingClient = LoadBalancingClient; //TODO: internal

    var LbcPeer =
    /** @class */
    function (_super) {
      __extends(LbcPeer, _super);

      function LbcPeer() {
        return _super !== null && _super.apply(this, arguments) || this;
      }

      LbcPeer.prototype.webRpc = function (uriPath, parameters, options) {
        var params = [];
        params.push(LoadBalancing.Constants.ParameterCode.UriPath, uriPath);
        params.push(LoadBalancing.Constants.ParameterCode.RpcCallParams, parameters);

        if (options) {
          if (options.sendAuthCookie) {
            params.push(LoadBalancing.Constants.ParameterCode.WebFlags, Photon.TypeExt.Byte(WebFlags.SendAuthCookie));
          }
        }

        this.sendOperation(LoadBalancing.Constants.OperationCode.Rpc, params);
      };

      LbcPeer.prototype.webRpcHandler = function (lbc) {
        var _this = this;

        return function (d) {
          _this._logger.debug("resp Rpc", d);

          var uriPath, message, data, resultCode;

          if (d.errCode == 0) {
            uriPath = d.vals[LoadBalancing.Constants.ParameterCode.UriPath];
            data = d.vals[LoadBalancing.Constants.ParameterCode.RpcCallRetData];
            resultCode = d.vals[LoadBalancing.Constants.ParameterCode.RpcCallRetCode];
          } else {
            _this._logger.error("WebRpc request error:", d.errCode);
          }

          lbc.onWebRpcResult(d.errCode, d.errMsg, uriPath, resultCode, data);
        };
      };

      return LbcPeer;
    }(Photon.PhotonPeer);

    LoadBalancing.LbcPeer = LbcPeer;

    var NameServerPeer =
    /** @class */
    function (_super) {
      __extends(NameServerPeer, _super);

      function NameServerPeer(client, protocol, address, subprotocol) {
        var _this = _super.call(this, protocol, address, subprotocol, client.logger.getPrefix() + " NameServer") || this;

        _this.client = client;
        return _this;
      } // overrides


      NameServerPeer.prototype.onUnhandledEvent = function (code, args) {
        this.client.onEvent(code, args.vals[LoadBalancing.Constants.ParameterCode.CustomEventContent], args.vals[LoadBalancing.Constants.ParameterCode.ActorNr]);
      };

      NameServerPeer.prototype.onUnhandledResponse = function (code, args) {
        this.client.onOperationResponse(args.errCode, args.errMsg, code, args.vals);
      };

      NameServerPeer.prototype.getRegions = function (appId) {
        var params = [];
        params.push(LoadBalancing.Constants.ParameterCode.ApplicationId, appId);
        this.sendOperation(LoadBalancing.Constants.OperationCode.GetRegions, params, true, 0);
      }; // this = LBC


      NameServerPeer.prototype.opAuth = function (appId, appVersion, userAuthType, userAuthParameters, userAuthData, userId, region) {
        var op = [];
        op.push(LoadBalancing.Constants.ParameterCode.ApplicationId, appId);
        op.push(LoadBalancing.Constants.ParameterCode.AppVersion, appVersion);

        if (userAuthType != LoadBalancing.Constants.CustomAuthenticationType.None) {
          op.push(LoadBalancing.Constants.ParameterCode.ClientAuthenticationType, Photon.TypeExt.Byte(userAuthType));
          op.push(LoadBalancing.Constants.ParameterCode.ClientAuthenticationParams, userAuthParameters);

          if (userAuthData) {
            op.push(LoadBalancing.Constants.ParameterCode.ClientAuthenticationData, userAuthData);
          }
        }

        if (userId) {
          op.push(LoadBalancing.Constants.ParameterCode.UserId, userId);
        } //    		if (this.connectOptions.lobbyStats) {
        //    			op.push(Constants.ParameterCode.LobbyStats, true);
        //    		}


        op.push(LoadBalancing.Constants.ParameterCode.Region, region);
        this.sendOperation(LoadBalancing.Constants.OperationCode.Authenticate, op, true, 0);

        this._logger.info("Authenticate...");
      };

      return NameServerPeer;
    }(LbcPeer);

    LoadBalancing.NameServerPeer = NameServerPeer; //TODO: internal

    var MasterPeer =
    /** @class */
    function (_super) {
      __extends(MasterPeer, _super);

      function MasterPeer(client, protocol, address, subprotocol) {
        var _this = _super.call(this, protocol, address, subprotocol, client.logger.getPrefix() + " Master") || this;

        _this.client = client;
        return _this;
      } // overrides


      MasterPeer.prototype.onUnhandledEvent = function (code, args) {
        this.client.onEvent(code, args.vals[LoadBalancing.Constants.ParameterCode.CustomEventContent], args.vals[LoadBalancing.Constants.ParameterCode.ActorNr]);
      };

      MasterPeer.prototype.onUnhandledResponse = function (code, args) {
        this.client.onOperationResponse(args.errCode, args.errMsg, code, args.vals);
      };

      MasterPeer.prototype.findFriends = function (friendsToFind) {
        var params = [];
        params.push(LoadBalancing.Constants.ParameterCode.FindFriendsRequestList);
        params.push(friendsToFind);
        this.sendOperation(LoadBalancing.Constants.OperationCode.FindFriends, params);
      };

      MasterPeer.prototype.requestLobbyStats = function (lobbiesToRequest) {
        var params = [];

        if (lobbiesToRequest && lobbiesToRequest.length > 0) {
          var n = new Array();
          var t = new Array();

          for (var i = 0; i < lobbiesToRequest.length; ++i) {
            n[i] = lobbiesToRequest[i][0];
            t[i] = lobbiesToRequest[i][1];
          }

          params.push(LoadBalancing.Constants.ParameterCode.LobbyName);
          params.push(n);
          params.push(LoadBalancing.Constants.ParameterCode.LobbyType);
          params.push(t);
        }

        this.sendOperation(LoadBalancing.Constants.OperationCode.LobbyStats, params);
      };

      return MasterPeer;
    }(LbcPeer);

    LoadBalancing.MasterPeer = MasterPeer; //TODO: internal

    var GamePeer =
    /** @class */
    function (_super) {
      __extends(GamePeer, _super);

      function GamePeer(client, protocol, address, subprotocol) {
        var _this = _super.call(this, protocol, address, subprotocol, client.logger.getPrefix() + " Game") || this;

        _this.client = client;
        return _this;
      } // overrides


      GamePeer.prototype.onUnhandledEvent = function (code, args) {
        this.client.onEvent(code, args.vals[LoadBalancing.Constants.ParameterCode.CustomEventContent], args.vals[LoadBalancing.Constants.ParameterCode.ActorNr]);
      }; // overrides


      GamePeer.prototype.onUnhandledResponse = function (code, args) {
        this.client.onOperationResponse(args.errCode, args.errMsg, code, args.vals);
      };

      GamePeer.prototype.raiseEvent = function (eventCode, data, options) {
        if (this.client.isJoinedToRoom()) {
          this._logger.debug("raiseEvent", eventCode, data, options);

          var params = [LoadBalancing.Constants.ParameterCode.Code, Photon.TypeExt.Byte(eventCode), LoadBalancing.Constants.ParameterCode.Data, data];

          if (options) {
            if (options.receivers != undefined && options.receivers !== LoadBalancing.Constants.ReceiverGroup.Others) {
              params.push(LoadBalancing.Constants.ParameterCode.ReceiverGroup);
              params.push(Photon.TypeExt.Byte(options.receivers));
            }

            if (options.cache != undefined && options.cache !== LoadBalancing.Constants.EventCaching.DoNotCache) {
              params.push(LoadBalancing.Constants.ParameterCode.Cache);
              params.push(Photon.TypeExt.Byte(options.cache));
            }

            if (options.interestGroup != undefined) {
              if (this.checkGroupNumber(options.interestGroup)) {
                params.push(LoadBalancing.Constants.ParameterCode.Group);
                params.push(Photon.TypeExt.Byte(options.interestGroup));
              } else {
                this._logger.exception(502, "raiseEvent - Group not a number: " + options.interestGroup);
              }
            }

            if (options.targetActors != undefined) {
              params.push(LoadBalancing.Constants.ParameterCode.ActorList);
              params.push(options.targetActors);
            }

            if (options.webForward) {
              params.push(LoadBalancing.Constants.ParameterCode.WebFlags);
              params.push(Photon.TypeExt.Byte(WebFlags.HttpForward));
            }
          }

          this.sendOperation(LoadBalancing.Constants.OperationCode.RaiseEvent, params);
        } else {
          throw new Error("raiseEvent - Not joined!");
        }
      };

      GamePeer.prototype.changeGroups = function (groupsToRemove, groupsToAdd) {
        var params = [];

        if (groupsToRemove != null && groupsToRemove != undefined) {
          this.checkGroupArray(groupsToRemove, "groupsToRemove");
          params.push(LoadBalancing.Constants.ParameterCode.Remove);
          params.push(Photon.TypeExt.Byte(groupsToRemove));
        }

        if (groupsToAdd != null && groupsToAdd != undefined) {
          this.checkGroupArray(groupsToAdd, "groupsToAdd");
          params.push(LoadBalancing.Constants.ParameterCode.Add);
          params.push(Photon.TypeExt.Byte(groupsToAdd));
        }

        this.sendOperation(LoadBalancing.Constants.OperationCode.ChangeGroups, params);
      };

      GamePeer.prototype.checkGroupNumber = function (g) {
        return !(typeof g != "number" || isNaN(g) || g === Infinity || g === -Infinity);
      };

      GamePeer.prototype.checkGroupArray = function (groups, groupsName) {
        if (Exitgames.Common.Util.isArray(groups)) {
          for (var i = 0; i < groups.length; ++i) {
            var g = groups[i];

            if (this.checkGroupNumber(g)) {} else {
              this._logger.exception(503, "changeGroups - " + groupsName + " (" + groups + ") not an array of numbers: element " + i + " = " + g);
            }
          }
        } else {
          this._logger.exception(504, "changeGroups - groupsToRemove not an array: " + groups);
        }
      };

      return GamePeer;
    }(LbcPeer);

    LoadBalancing.GamePeer = GamePeer;
  })(LoadBalancing = Photon.LoadBalancing || (Photon.LoadBalancing = {}));
})(Photon || (Photon = {}));
/**
    Photon Load Balancing API Constants
    @namespace Photon.LoadBalancing.Constants
*/


var Photon;

(function (Photon) {
  var Lite;

  (function (Lite) {
    var Constants;

    (function (Constants) {
      // Summary:
      //     Lite - keys for parameters of operation requests and responses (short: OpKey).
      //
      // Remarks:
      //     These keys match a definition in the Lite application (part of the server
      //     SDK).  If your game is built as extension of Lite, don't re-use these codes
      //     for your custom events.  These keys are defined per application, so Lite
      //     has different keys than MMO or your custom application. This is why these
      //     are not an enumeration.  Lite and Lite Lobby will use the keys 255 and lower,
      //     to give you room for your own codes.  Keys for operation-parameters could
      //     be assigned on a per operation basis, but it makes sense to have fixed keys
      //     for values which are used throughout the whole application.
      Constants.LiteOpKey = {
        // Summary:
        //     (252) Code for list of players in a room. Currently not used.
        ActorList: 252,
        //
        // Summary:
        //     (254) Code of the Actor of an operation. Used for property get and set.
        ActorNr: 254,
        //
        // Summary:
        //     (249) Code for property set (Hashtable).
        ActorProperties: 249,
        //
        // Summary:
        //     (238) The "Add" operation-parameter can be used to add something to some
        //     list or set. E.g. add groups to player's interest groups.
        Add: 238,
        //
        // Summary:
        //     (250) Code for broadcast parameter of OpSetProperties method.
        Broadcast: 250,
        //
        // Summary:
        //     (247) Code for caching events while raising them.
        Cache: 247,
        //
        // Summary:
        //     (244) Code used when sending some code-related parameter, like OpRaiseEvent's
        //     event-code.
        //
        // Remarks:
        //     This is not the same as the Operation's code, which is no longer sent as
        //     part of the parameter Dictionary in Photon 3.
        Code: 244,
        //
        // Summary:
        //     (245) Code of data of an event. Used in OpRaiseEvent.
        Data: 245,
        //
        // Summary:
        //     (255) Code of the game id (a unique room name). Used in OpJoin.
        GameId: 255,
        //
        // Summary:
        //     (248) Code for property set (Hashtable).
        GameProperties: 248,
        //
        // Summary:
        //     (240) Code for "group" operation-parameter (as used in Op RaiseEvent).
        Group: 240,
        //
        // Summary:
        //     (251) Code for property set (Hashtable). This key is used when sending only
        //     one set of properties.  If either ActorProperties or GameProperties are used
        //     (or both), check those keys.
        Properties: 251,
        //
        // Summary:
        //     (246) Code to select the receivers of events (used in Lite, Operation RaiseEvent).
        ReceiverGroup: 246,
        //
        // Summary:
        //     (239) The "Remove" operation-parameter can be used to remove something from
        //     a list. E.g. remove groups from player's interest groups.
        Remove: 239,
        //
        // Summary:
        //     (253) Code of the target Actor of an operation. Used for property set. Is
        //     0 for game.
        TargetActorNr: 253,
        //
        // Summary:
        //     (236) A parameter indicating how long a room instance should be keeped alive in the 
        //     room cache after all players left the room.
        /// <summary>
        EmptyRoomLiveTime: 236
      }; // Summary:
      //     Lite - Event codes.  These codes are defined by the Lite application's logic
      //     on the server side.  Other application's won't necessarily use these.
      //
      // Remarks:
      //     If your game is built as extension of Lite, don't re-use these codes for
      //     your custom events.

      Constants.LiteEventCode = {
        // Summary:
        //     (255) Event Join: someone joined the game
        Join: 255,
        //
        // Summary:
        //     (254) Event Leave: someone left the game
        Leave: 254,
        //
        // Summary:
        //     (253) Event PropertiesChanged
        PropertiesChanged: 253
      }; // Summary:
      //     Lite - Operation Codes.  This enumeration contains the codes that are given
      //     to the Lite Application's operations. Instead of sending "Join", this enables
      //     us to send the byte 255.
      //
      // Remarks:
      //     Other applications (the MMO demo or your own) could define other operations
      //     and other codes.  If your game is built as extension of Lite, don't re-use
      //     these codes for your custom events.

      Constants.LiteOpCode = {
        // Summary:
        //     (248) Operation code to change interest groups in Rooms (Lite application
        //     and extending ones).
        ChangeGroups: 248,
        //
        // Summary:
        //     (251) Operation code for OpGetProperties.
        GetProperties: 251,
        //
        // Summary:
        //     (255) Code for OpJoin, to get into a room.
        Join: 255,
        //
        // Summary:
        //     (254) Code for OpLeave, to get out of a room.
        Leave: 254,
        //
        // Summary:
        //     (253) Code for OpRaiseEvent (not same as eventCode).
        RaiseEvent: 253,
        //
        // Summary:
        //     (252) Code for OpSetProperties.
        SetProperties: 252
      };
    })(Constants = Lite.Constants || (Lite.Constants = {}));
  })(Lite = Photon.Lite || (Photon.Lite = {}));
})(Photon || (Photon = {}));

(function (Photon) {
  var LoadBalancing;

  (function (LoadBalancing) {
    var Constants;

    (function (Constants) {
      var LiteOpKey = Photon.Lite.Constants.LiteOpKey;
      var LiteOpCode = Photon.Lite.Constants.LiteOpCode;
      var LiteEventCode = Photon.Lite.Constants.LiteEventCode;
      /**
          @summary Master and Game servers error codes.
          @member Photon.LoadBalancing.Constants.ErrorCode
          @readonly
          @property {number} Ok No Error.
          @property {number} OperationNotAllowedInCurrentState Operation can't be executed yet.
          @property {number} InvalidOperationCode The operation you called is not implemented on the server (application) you connect to. Make sure you run the fitting applications.
          @property {number} InternalServerError Something went wrong in the server. Try to reproduce and contact Exit Games.
          @property {number} InvalidAuthentication Authentication failed. Possible cause: AppId is unknown to Photon (in cloud service).
          @property {number} GameIdAlreadyExists GameId (name) already in use (can't create another). Change name.
          @property {number} GameFull Game is full. This can when players took over while you joined the game.
          @property {number} GameClosed Game is closed and can't be joined. Join another game.
          @property {number} NoRandomMatchFound Random matchmaking only succeeds if a room exists thats neither closed nor full. Repeat in a few seconds or create a new room.
          @property {number} GameDoesNotExist Join can fail if the room (name) is not existing (anymore). This can happen when players leave while you join.
          @property {number} MaxCcuReached Authorization on the Photon Cloud failed becaus the concurrent users (CCU) limit of the app's subscription is reached.
          @property {number} InvalidRegion Authorization on the Photon Cloud failed because the app's subscription does not allow to use a particular region's server.
      */

      Constants.ErrorCode = {
        Ok: 0,
        // server - Photon low(er) level: <: 0
        /// <summary>
        /// (-3) Operation can't be executed yet (e.g. OpJoin can't be called before being authenticated, RaiseEvent cant be used before getting into a room).
        /// </summary>
        /// <remarks>
        /// Before you call any operations on the Cloud servers, the automated client workflow must complete its authorization.
        /// In PUN, wait until State is: JoinedLobby (with AutoJoinLobby : true) or ConnectedToMaster (AutoJoinLobby : false)
        /// </remarks>
        OperationNotAllowedInCurrentState: -3,
        /// <summary>(-2) The operation you called is not implemented on the server (application) you connect to. Make sure you run the fitting applications.</summary>
        InvalidOperationCode: -2,
        /// <summary>(-1) Something went wrong in the server. Try to reproduce and contact Exit Games.</summary>
        InternalServerError: -1,
        // server - PhotonNetwork: 0x7FFF and down
        // logic-level error codes start with short.max
        /// <summary>(32767) Authentication failed. Possible cause: AppId is unknown to Photon (in cloud service).</summary>
        InvalidAuthentication: 0x7FFF,
        /// <summary>(32766) GameId (name) already in use (can't create another). Change name.</summary>
        GameIdAlreadyExists: 0x7FFF - 1,
        /// <summary>(32765) Game is full. This can when players took over while you joined the game.</summary>
        GameFull: 0x7FFF - 2,
        /// <summary>(32764) Game is closed and can't be joined. Join another game.</summary>
        GameClosed: 0x7FFF - 3,
        // AlreadyMatched: 0x7FFF - 4,
        /// <summary>(32762) Not in use currently.</summary>
        // ServerFull: 0x7FFF - 5,
        /// <summary>(32761) Not in use currently.</summary>
        // UserBlocked: 0x7FFF - 6,
        /// <summary>(32760) Random matchmaking only succeeds if a room exists thats neither closed nor full. Repeat in a few seconds or create a new room.</summary>
        NoRandomMatchFound: 0x7FFF - 7,
        /// <summary>(32758) Join can fail if the room (name) is not existing (anymore). This can happen when players leave while you join.</summary>
        GameDoesNotExist: 0x7FFF - 9,
        /// <summary>(32757) Authorization on the Photon Cloud failed becaus the concurrent users (CCU) limit of the app's subscription is reached.</summary>
        /// <remarks>
        /// Unless you have a plan with "CCU Burst", clients might fail the authentication step during connect. 
        /// Affected client are unable to call operations. Please note that players who end a game and return 
        /// to the Master server will disconnect and re-connect, which means that they just played and are rejected 
        /// in the next minute / re-connect.
        /// This is a temporary measure. Once the CCU is below the limit, players will be able to connect an play again.
        /// 
        /// OpAuthorize is part of connection workflow but only on the Photon Cloud, this error can happen. 
        /// Self-hosted Photon servers with a CCU limited license won't let a client connect at all.
        /// </remarks>
        MaxCcuReached: 0x7FFF - 10,
        /// <summary>(32756) Authorization on the Photon Cloud failed because the app's subscription does not allow to use a particular region's server.</summary>
        /// <remarks>
        /// Some subscription plans for the Photon Cloud are region-bound. Servers of other regions can't be used then.
        /// Check your Master server address and compare it with your Photon Cloud Dashboard's info.
        /// 
        /// OpAuthorize is part of connection workflow but only on the Photon Cloud, this error can happen. 
        /// Self-hosted Photon servers with a CCU limited license won't let a client connect at all.
        /// </remarks>
        InvalidRegion: 0x7FFF - 11,
        /// <summary>
        /// (32755) Custom Authentication of the user failed due to setup reasons (see Cloud Dashboard) or the provided user data (like username or token). Check error message for details.
        /// </summary>
        CustomAuthenticationFailed: 0x7FFF - 12,
        /// <summary>(32753) The Authentication ticket expired. Usually, this is refreshed behind the scenes. Connect (and authorize) again.</summary>
        AuthenticationTicketExpired: 0x7FF1,
        /// <summary>
        /// (32752) A server-side plugin (or webhook) failed to execute and reported an error. Check the OperationResponse.DebugMessage.
        /// </summary>
        PluginReportedError: 0x7FFF - 15,
        /// <summary>
        /// (32751) CreateGame/JoinGame/Join operation fails if expected plugin does not correspond to loaded one.
        /// </summary>
        PluginMismatch: 0x7FFF - 16,
        /// <summary>
        /// (32750) for join requests. Indicates the current peer already called join and is joined to the room.
        /// </summary>
        JoinFailedPeerAlreadyJoined: 32750,
        /// <summary>
        /// (32749)  for join requests. Indicates the list of InactiveActors already contains an actor with the requested ActorNr or UserId.
        /// </summary>
        JoinFailedFoundInactiveJoiner: 32749,
        /// <summary>
        /// (32748) for join requests. Indicates the list of Actors (active and inactive) did not contain an actor with the requested ActorNr or UserId.
        /// </summary>
        JoinFailedWithRejoinerNotFound: 32748,
        /// <summary>
        /// (32747) for join requests. Note: for future use - Indicates the requested UserId was found in the ExcludedList.
        /// </summary>
        JoinFailedFoundExcludedUserId: 32747,
        /// <summary>
        /// (32746) for join requests. Indicates the list of ActiveActors already contains an actor with the requested ActorNr or UserId.
        /// </summary>
        JoinFailedFoundActiveJoiner: 32746,
        /// <summary>
        /// (32745)  for SetProerties and Raisevent (if flag HttpForward is true) requests. Indicates the maximum allowed http requests per minute was reached.
        /// </summary>
        HttpLimitReached: 32745,
        /// <summary>
        /// (32744) for WebRpc requests. Indicates the the call to the external service failed.
        /// </summary>
        ExternalHttpCallFailed: 32744,
        /// <summary>
        /// (32742) Server error during matchmaking with slot reservation. E.g. the reserved slots can not exceed MaxPlayers.
        /// </summary>
        SlotError: 32742,
        /// <summary>
        /// (32741) Server will react with this error if invalid encryption parameters provided by token
        /// </summary>
        InvalidEncryptionParameters: 32741
      }; /// <summary>
      /// These  values define "well known" properties for an Actor / Player.
      /// </summary>
      /// <remarks>
      /// "Custom properties" have to use a string-type as key. They can be assigned at will.
      /// </remarks>

      Constants.ActorProperties = {
        /// <summary>(255) Name of a player/actor.</summary>
        PlayerName: 255
      };
      /** End user doesn't need this */
      /// <summary>
      /// These  values are for "well known" room/game properties used in Photon Loadbalancing.
      /// </summary>
      /// <remarks>
      /// "Custom properties" have to use a string-type as key. They can be assigned at will.
      /// </remarks>

      Constants.GameProperties = {
        /// <summary>(255) Max number of players that "fit" into this room. 0 is for "unlimited".</summary>
        MaxPlayers: 255,
        /// <summary>(254) Makes this room listed or not in the lobby on Master.</summary>
        IsVisible: 254,
        /// <summary>(253) Allows more players to join a room (or not).</summary>
        IsOpen: 253,
        /// <summary>(252) Current count od players in the room. Used only in the lobby on Master.</summary>
        PlayerCount: 252,
        /// <summary>(251) True if the room is to be removed from room listing (used in update to room list in lobby on Master)</summary>
        Removed: 251,
        /// <summary>(250) A list of the room properties to pass to the RoomInfo list in a lobby. This is used in CreateRoom, which defines this list once per room.</summary>
        PropsListedInLobby: 250,
        /// <summary>Equivalent of Operation Join parameter CleanupCacheOnLeave.</summary>
        CleanupCacheOnLeave: 249,
        /// <summary>(248) Code for MasterClientId, which is synced by server. When sent as op-parameter this is (byte)203. As room property this is (byte)248.</summary>
        /// <remarks>Tightly related to ParameterCode.MasterClientId.</remarks>
        MasterClientId: 248,
        /// <summary>(246) Player Time To Live. How long any player can be inactive (due to disconnect or leave) before the user gets removed from the playerlist (freeing a slot).</summary>
        PlayerTtl: 246,
        /// <summary>(245) Room Time To Live. How long a room stays available (and in server-memory), after the last player becomes inactive. After this time, the room gets persisted or destroyed.</summary>
        EmptyRoomTtl: 245
      };
      /** End user doesn't need this */
      /// <summary>
      /// These values are for events defined by Photon Loadbalancing.
      /// </summary>
      /// <remarks>They start at 255 and go DOWN. Your own in-game events can start at 0.</remarks>

      Constants.EventCode = {
        /// <summary>(230) Initial list of RoomInfos (in lobby on Master)</summary>
        GameList: 230,
        /// <summary>(229) Update of RoomInfos to be merged into "initial" list (in lobby on Master)</summary>
        GameListUpdate: 229,
        /// <summary>(228) Currently not used. State of queueing in case of server-full</summary>
        QueueState: 228,
        /// <summary>(227) Currently not used. Event for matchmaking</summary>
        // Match: 227,
        /// <summary>(226) Event with stats about this application (players, rooms, etc)</summary>
        AppStats: 226,
        /// <summary>(210) Internally used in case of hosting by Azure</summary>
        AzureNodeInfo: 210,
        /// <summary>(255) Event Join: someone joined the game. The new actorNumber is provided as well as the properties of that actor (if set in OpJoin).</summary>
        Join: LiteEventCode.Join,
        /// <summary>(254) Event Leave: The player who left the game can be identified by the actorNumber.</summary>
        Leave: LiteEventCode.Leave,
        /// <summary>(253) When you call OpSetProperties with the broadcast option "on", this event is fired. It contains the properties being set.</summary>
        PropertiesChanged: LiteEventCode.PropertiesChanged,
        /// <summary>(252) When player left game unexpecable and playerTtl > 0 this event is fired</summary>
        Disconnect: 252,
        LobbyStats: 224
      };
      /** End user doesn't need this */
      /// <summary>Codes for parameters of Operations and Events.</summary>

      Constants.ParameterCode = {
        /// <summary>(230) Address of a (Game) server to use.</summary>
        Address: 230,
        /// <summary>(229) Count of players in this application in a rooms (used in stats event)</summary>
        PeerCount: 229,
        /// <summary>(228) Count of games in this application (used in stats event)</summary>
        GameCount: 228,
        /// <summary>(227) Count of players on the Master server (in this app, looking for rooms)</summary>
        MasterPeerCount: 227,
        /// <summary>(225) User's ID</summary>
        UserId: 225,
        /// <summary>(224) Your application's ID: a name on your own Photon or a GUID on the Photon Cloud</summary>
        ApplicationId: 224,
        /// <summary>(223) Not used currently (as "Position"). If you get queued before connect, this is your position</summary>
        Position: 223,
        /// <summary>(223) Modifies the matchmaking algorithm used for OpJoinRandom. Allowed parameter values are defined in enum MatchmakingMode.</summary>
        MatchMakingType: 223,
        /// <summary>(222) List of RoomInfos about open / listed rooms</summary>
        GameList: 222,
        /// <summary>(221) Internally used to establish encryption</summary>
        Secret: 221,
        /// <summary>(220) Version of your application</summary>
        AppVersion: 220,
        /// <summary>(210) Internally used in case of hosting by Azure</summary>
        AzureNodeInfo: 210,
        /// <summary>(209) Internally used in case of hosting by Azure</summary>
        AzureLocalNodeId: 209,
        /// <summary>(208) Internally used in case of hosting by Azure</summary>
        AzureMasterNodeId: 208,
        /// <summary>(255) Code for the gameId/roomName (a unique name per room). Used in OpJoin and similar.</summary>
        RoomName: LiteOpKey.GameId,
        /// <summary>(250) Code for broadcast parameter of OpSetProperties method.</summary>
        Broadcast: LiteOpKey.Broadcast,
        /// <summary>(252) Code for list of players in a room. Currently not used.</summary>
        ActorList: LiteOpKey.ActorList,
        /// <summary>(254) Code of the Actor of an operation. Used for property get and set.</summary>
        ActorNr: LiteOpKey.ActorNr,
        /// <summary>(249) Code for property set (Hashtable).</summary>
        PlayerProperties: LiteOpKey.ActorProperties,
        /// <summary>(245) Code of data/custom content of an event. Used in OpRaiseEvent.</summary>
        CustomEventContent: LiteOpKey.Data,
        /// <summary>(245) Code of data of an event. Used in OpRaiseEvent.</summary>
        Data: LiteOpKey.Data,
        /// <summary>(244) Code used when sending some code-related parameter, like OpRaiseEvent's event-code.</summary>
        /// <remarks>This is not the same as the Operation's code, which is no longer sent as part of the parameter Dictionary in Photon 3.</remarks>
        Code: LiteOpKey.Code,
        /// <summary>(248) Code for property set (Hashtable).</summary>
        GameProperties: LiteOpKey.GameProperties,
        /// <summary>
        /// (251) Code for property-set (Hashtable). This key is used when sending only one set of properties.
        /// If either ActorProperties or GameProperties are used (or both), check those keys.
        /// </summary>
        Properties: LiteOpKey.Properties,
        /// <summary>(253) Code of the target Actor of an operation. Used for property set. Is 0 for game</summary>
        TargetActorNr: LiteOpKey.TargetActorNr,
        /// <summary>(246) Code to select the receivers of events (used in Lite, Operation RaiseEvent).</summary>
        ReceiverGroup: LiteOpKey.ReceiverGroup,
        /// <summary>(247) Code for caching events while raising them.</summary>
        Cache: LiteOpKey.Cache,
        /// <summary>(241) Boolean parameter of CreateGame Operation. If true, server cleans up roomcache of leaving players (their cached events get removed).</summary>
        CleanupCacheOnLeave: 241,
        /// <summary>(240) Code for "group" operation-parameter (as used in Op RaiseEvent).</summary>
        Group: LiteOpKey.Group,
        /// <summary>(239) The "Remove" operation-parameter can be used to remove something from a list. E.g. remove groups from player's interest groups.</summary>
        Remove: LiteOpKey.Remove,
        /// <summary>(238) The "Add" operation-parameter can be used to add something to some list or set. E.g. add groups to player's interest groups.</summary>
        Add: LiteOpKey.Add,
        /// <summary>(236) A parameter indicating how long a room instance should be keeped alive in the room cache after all players left the room.</summary>
        EmptyRoomTTL: LiteOpKey.EmptyRoomLiveTime,
        PlayerTTL: 235,
        Plugins: 204,
        /// <summary>(217) This key's (byte) value defines the target custom authentication type/service the client connects with. Used in OpAuthenticate.</summary>
        ClientAuthenticationType: 217,
        /// <summary>(216) This key's (string) value provides parameters sent to the custom authentication type/service the client connects with. Used in OpAuthenticate.</summary>
        ClientAuthenticationParams: 216,
        ClientAuthenticationData: 214,
        /// <summary>(215) The JoinMode enum defines which variant of joining a room will be executed: Join only if available, create if not exists or re -join.</summary >
        /// <remarks>Replaces CreateIfNotExists which was only a bool -value.</remarks >
        JoinMode: 215,
        /// <summary>(203) Code for MasterClientId, which is synced by server. When sent as op-parameter this is code 203.</summary>
        /// <remarks>Tightly related to GamePropertyKey.MasterClientId.</remarks>
        MasterClientId: 203,
        /// <summary>(1) Used in Op FindFriends request. Value must be string[] of friends to look up.</summary>
        FindFriendsRequestList: 1,
        /// <summary>(1) Used in Op FindFriends response. Contains boolean[] list of online states (false if not online).</summary>
        FindFriendsResponseOnlineList: 1,
        /// <summary>(2) Used in Op FindFriends response. Contains string[] of room names ("" where not known or no room joined).</summary>
        FindFriendsResponseRoomIdList: 2,
        /// <summary>(213) Used in matchmaking-related methods and when creating a room to name a lobby (to join or to attach a room to).</summary>
        LobbyName: 213,
        /// <summary>(212) Used in matchmaking-related methods and when creating a room to define the type of a lobby. Combined with the lobby name this identifies the lobby.</summary>
        LobbyType: 212,
        LobbyStats: 211,
        /// <summary>(210) Used for region values in OpAuth and OpGetRegions.</summary >
        Region: 210,
        IsInactive: 233,
        CheckUserOnJoin: 232,
        /// <summary>(231) Code for "Check And Swap" (CAS) when changing properties.</summary>
        ExpectedValues: 231,
        UriPath: 209,
        RpcCallParams: 208,
        RpcCallRetCode: 207,
        RpcCallRetMessage: 206,
        RpcCallRetData: 208,
        WebFlags: 234,
        // Used by the server in Operation Responses, when it sends the nickname of the client (the user's nickname).
        Nickname: 202
      };
      /**
          @summary Codes for parameters and events used in Photon Load Balancing API.
          @member Photon.LoadBalancing.Constants.OperationCode
          @readonly
          @property {number} Authenticate Authenticates this peer and connects to a virtual application.
          @property {number} JoinLobby Joins lobby (on Master).
          @property {number} LeaveLobby Leaves lobby (on Master).
          @property {number} CreateGame Creates a game (or fails if name exists).
          @property {number} JoinGame Joins room (by name).
          @property {number} JoinRandomGame Joins random room (on Master).
          @property {number} Leave Leaves the room.
          @property {number} RaiseEvent Raises event (in a room, for other actors/players).
          @property {number} SetProperties Sets Properties (of room or actor/player).
          @property {number} GetProperties Gets Properties.
          @property {number} ChangeGroups Changes interest groups in room.
          @property {number} FindFriends Requests Master server for actors online status and joined rooms.
          @property {number} LobbyStats Requests Master server for lobbies statistics.
      */

      Constants.OperationCode = {
        /// <summary>(230) Authenticates this peer and connects to a virtual application</summary>
        Authenticate: 230,
        /// <summary>(229) Joins lobby (on Master)</summary>
        JoinLobby: 229,
        /// <summary>(228) Leaves lobby (on Master)</summary>
        LeaveLobby: 228,
        /// <summary>(227) Creates a game (or fails if name exists)</summary>
        CreateGame: 227,
        /// <summary>(226) Join game (by name)</summary>
        JoinGame: 226,
        /// <summary>(225) Joins random game (on Master)</summary>
        JoinRandomGame: 225,
        // CancelJoinRandom : 224, // obsolete, cause JoinRandom no longer is a "process". now provides result immediately
        /// <summary>(254) Code for OpLeave, to get out of a room.</summary>
        Leave: LiteOpCode.Leave,
        /// <summary>(253) Raise event (in a room, for other actors/players)</summary>
        RaiseEvent: LiteOpCode.RaiseEvent,
        /// <summary>(252) Set Properties (of room or actor/player)</summary>
        SetProperties: LiteOpCode.SetProperties,
        /// <summary>(251) Get Properties</summary>
        GetProperties: LiteOpCode.GetProperties,
        /// <summary>(248) Operation code to change interest groups in Rooms (Lite application and extending ones).</summary>
        ChangeGroups: LiteOpCode.ChangeGroups,
        /// <summary>(222) Request the rooms and online status for a list of friends (by name, which should be unique).</summary>
        FindFriends: 222,
        LobbyStats: 221,
        /// <summary>(220) Gets list of regional servers from a NameServer.</summary>
        GetRegions: 220,
        /// <summary>(219) Rpc Operation.</summary>
        Rpc: 219
      };
      /**
          @summary Options for matchmaking rules for joinRandomGame.
          @member Photon.LoadBalancing.Constants.MatchmakingMode
          @readonly
          @property {number} FillRoom Default. FillRoom Fills up rooms (oldest first) to get players together as fast as possible. Makes most sense with MaxPlayers > 0 and games that can only start with more players.
          @property {number} SerialMatching Distributes players across available rooms sequentially but takes filter into account. Without filter, rooms get players evenly distributed.
          @property {number} RandomMatching Joins a (fully) random room. Expected properties must match but aside from this, any available room might be selected.
      */

      Constants.MatchmakingMode = {
        /// <summary>Fills up rooms (oldest first) to get players together as fast as possible. Default.</summary>
        /// <remarks>Makes most sense with MaxPlayers > 0 and games that can only start with more players.</remarks>
        FillRoom: 0,
        /// <summary>Distributes players across available rooms sequentially but takes filter into account. Without filter, rooms get players evenly distributed.</summary>
        SerialMatching: 1,
        /// <summary>Joins a (fully) random room. Expected properties must match but aside from this, any available room might be selected.</summary>
        RandomMatching: 2
      };
      /**
          @summary Caching options for events.
          @member Photon.LoadBalancing.Constants.EventCaching
          @readonly
          @property {number} DoNotCache Default. Do not cache.
          @property {number} MergeCache Will merge this event's keys with those already cached.
          @property {number} ReplaceCache Replaces the event cache for this eventCode with this event's content.
          @property {number} RemoveCache Removes this event (by eventCode) from the cache.
          @property {number} AddToRoomCache Adds an event to the room's cache.
          @property {number} AddToRoomCacheGlobal Adds this event to the cache for actor 0 (becoming a "globally owned" event in the cache).
          @property {number} RemoveFromRoomCache Remove fitting event from the room's cache.
          @property {number} RemoveFromRoomCacheForActorsLeft Removes events of players who already left the room (cleaning up).
      */

      Constants.EventCaching = {
        // Summary:
        //     Default value (not sent).
        DoNotCache: 0,
        //
        // Summary:
        //     Will merge this event's keys with those already cached.
        MergeCache: 1,
        //
        // Summary:
        //     Replaces the event cache for this eventCode with this event's content.
        ReplaceCache: 2,
        //
        // Summary:
        //     Removes this event (by eventCode) from the cache.
        RemoveCache: 3,
        //
        // Summary:
        //     Adds an event to the room's cache.
        AddToRoomCache: 4,
        //
        // Summary:
        //     Adds this event to the cache for actor 0 (becoming a "globally owned" event
        //     in the cache).
        AddToRoomCacheGlobal: 5,
        //
        // Summary:
        //     Remove fitting event from the room's cache.
        RemoveFromRoomCache: 6,
        //
        // Summary:
        //     Removes events of players who already left the room (cleaning up).
        RemoveFromRoomCacheForActorsLeft: 7
      };
      /**
          @summary Options for choosing room's actors who should receive events.
          @member Photon.LoadBalancing.Constants.ReceiverGroup
          @readonly
          @property {number} Others Default. Anyone else gets my event.
          @property {number} All Everyone in the current room (including this peer) will get this event.
          @property {number} MasterClient The "master client" does not have special rights but is the one who is in this room the longest time.
      */

      Constants.ReceiverGroup = {
        // Summary:
        //     Default value (not sent). Anyone else gets my event.
        Others: 0,
        //
        // Summary:
        //     Everyone in the current room (including this peer) will get this event.
        All: 1,
        //
        // Summary:
        //     The server sends this event only to the actor with the lowest actorNumber.
        //
        // Remarks:
        //     The "master client" does not have special rights but is the one who is in
        //     this room the longest time.
        MasterClient: 2
      };
      /**
          @summary Options for optional "Custom Authentication" services used with Photon.
          @member Photon.LoadBalancing.Constants.CustomAuthenticationType
          @readonly
          @property {number} Custom Default. Use a custom authentification service.
          @property {number} Steam Authenticates users by their Steam Account. Set auth values accordingly.
          @property {number} Facebook Authenticates users by their Facebook Account. Set auth values accordingly.
          @property {number} None Disables custom authentification.
      */

      Constants.CustomAuthenticationType = {
        Custom: 0,
        Steam: 1,
        Facebook: 2,
        None: 255
      };
      /**
          @summary Options of lobby types available. Lobby types might be implemented in certain Photon versions and won't be available on older servers.
          @member Photon.LoadBalancing.Constants.LobbyType
          @readonly
          @property {number} Default This lobby is used unless another is defined by game or JoinRandom. Room-lists will be sent and JoinRandomRoom can filter by matching properties.
          @property {number} SqlLobby This lobby type lists rooms like Default but JoinRandom has a parameter for SQL-like "where" clauses for filtering. This allows bigger, less, or and and combinations.
      **/

      Constants.LobbyType = {
        Default: 0,
        SqlLobby: 2
      };
    })(Constants = LoadBalancing.Constants || (LoadBalancing.Constants = {}));
  })(LoadBalancing = Photon.LoadBalancing || (Photon.LoadBalancing = {}));
})(Photon || (Photon = {})); /// <reference path="photon-common.ts"/>

/**
    Photon Chat API Constants
    @namespace Photon.Chat.Constants
*/


var Photon;

(function (Photon) {
  var Chat;

  (function (Chat) {
    var Constants;

    (function (Constants) {
      Constants.ParameterCode = {
        Channels: 0,
        Channel: 1,
        Messages: 2,
        Message: 3,
        Senders: 4,
        Sender: 5,
        ChannelUserCount: 6,
        UserId: 225,
        MsgId: 8,
        MsgIds: 9,
        SubscribeResults: 15,
        Status: 10,
        Friends: 11,
        SkipMessage: 12,
        HistoryLength: 14,
        WebFlags: 21
      }; //- Codes for parameters and events used in Photon Chat API.

      Constants.OperationCode = {
        Subscribe: 0,
        Unsubscribe: 1,
        Publish: 2,
        SendPrivate: 3,
        ChannelHistory: 4,
        UpdateStatus: 5,
        AddFriendds: 6,
        RemoveFriends: 7 // Removes users from the list that should update you of their status.

      };
      Constants.EventCode = {
        ChatMessages: 0,
        Users: 1,
        PrivateMessage: 2,
        FriendsList: 3,
        StatusUpdate: 4,
        Subscribe: 5,
        Unsubscribe: 6
      };
      /**
          @summary Contains commonly used status values for {@link Photon.Chat.ChatClient#setUserStatus}.You can define your own.<br/>
          While "online"(Online and up), the status message will be sent to anyone who has you on his friend list.<br/>
          Define custom online status values as you like with these rules:<br/>
          0: Means "offline".It will be used when you are not connected. In this status, there is no status message.<br/>
          1: Means "invisible" and is sent to friends as "offline". They see status 0, no message but you can chat.<br/>
          2: And any higher value will be treated as "online". Status can be set.<br/>
          @readonly
          @property {number} Offline Offline.
          @property {number} Invisible Offline. Be invisible to everyone. Sends no message.
          @property {number} Online Online and available.
          @property {number} Away Online but not available.
          @property {number} Dnd Do not disturb.
          @property {number} Lfg Looking For Game / Group. Could be used when you want to be invited or do matchmaking.
          @property {number} Playing Could be used when in a room, playing.
          @member Photon.Chat.Constants.UserStatus
      */

      Constants.UserStatus = {
        Offline: 0,
        Invisible: 1,
        Online: 2,
        Away: 3,
        Dnd: 4,
        Lfg: 5,
        Playing: 6
      };
      /**
          @summary Converts {@link Photon.Chat.Constants.UserStatus} element to string name.
          @param {Photon.Chat.Constants.UserStatus} status User status enum element.
          @returns {string} Specified element name or undefined if not found.
          @method Photon.Chat.Constants.UserStatusToName
      */

      function UserStatusToName(status) {
        return Exitgames.Common.Util.getEnumKeyByValue(Constants.UserStatus, status);
      }

      Constants.UserStatusToName = UserStatusToName;
    })(Constants = Chat.Constants || (Chat.Constants = {}));
  })(Chat = Photon.Chat || (Photon.Chat = {}));
})(Photon || (Photon = {})); /// <reference path="photon-loadbalancing.ts"/>
/// <reference path="photon-chat-constants.ts"/>

/**
    Photon Chat API
    @namespace Photon.Chat
*/


var Photon;

(function (Photon) {
  var Chat;

  (function (Chat) {
    var WebFlags = {
      HttpForward: 0x01,
      SendAuthCookie: 0x02,
      SendSync: 0x04,
      SendState: 0x08
    };
    /**
        @class Photon.Chat.Message
        @classdesc Encapsulates chat message data.
    */

    var Message =
    /** @class */
    function () {
      function Message(sender, content) {
        this.sender = sender;
        this.content = content;
      }
      /**
          @summary Returns message sender.
          @return {string} Message sender.
          @method Photon.Chat.Message#getSender
      */


      Message.prototype.getSender = function () {
        return this.sender;
      };
      /**
          @summary Returns message content.
          @return {any} Message content.
          @method Photon.Chat.Message#getContent
      */


      Message.prototype.getContent = function () {
        return this.content;
      };

      return Message;
    }();

    Chat.Message = Message;
    /**
        @class Photon.Chat.Channel
        @classdesc Represents chat channel.
    */

    var Channel =
    /** @class */
    function () {
      function Channel(name, isPrivat) {
        this.name = name;
        this.isPrivat = isPrivat;
        this.messages = [];
      }
      /**
          @summary Returns channel name (counterpart user id for private channel).
          @return {string} Channel name.
          @method Photon.Chat.Channel#getName
      */


      Channel.prototype.getName = function () {
        return this.name;
      };
      /**
          @summary Returns true if channel is private.
          @return {boolean} Channel private status.
          @method Photon.Chat.Channel#isPrivate
      */


      Channel.prototype.isPrivate = function () {
        return this.isPrivat;
      };
      /**
          @summary Returns messages cache.
          @return {{@link Photon.Chat.Message}[]} Array of messages.
          @method Photon.Chat.Channel#getMessages
      */


      Channel.prototype.getMessages = function () {
        return this.messages;
      };
      /**
          @summary Returns ID of the last message received.
          @return {number} Last message ID.
          @method Photon.Chat.Channel#getLastId
      */


      Channel.prototype.getLastId = function () {
        return this.lastId;
      };
      /**
          @summary Clears messages cache.
          @method Photon.Chat.Channel#clearMessages
      */


      Channel.prototype.clearMessages = function () {
        this.messages.splice(0);
      }; // internal


      Channel.prototype.addMessages = function (senders, messages) {
        var newMessages = [];

        for (var i in senders) {
          if (parseInt(i) < messages.length) {
            var m = new Message(senders[i], messages[i]);
            this.messages.push(m);
            newMessages.push(m);
          }
        }

        return newMessages;
      };

      return Channel;
    }();

    Chat.Channel = Channel;

    var ChatClient =
    /** @class */
    function (_super) {
      __extends(ChatClient, _super);
      /**
          @classdesc Implements the Photon Chat API workflow.<br/>
          This class should be extended to handle system or custom events and operation responses.<br/>
          
          @borrows Photon.LoadBalancing.LoadBalancingClient#setCustomAuthentication
          @borrows Photon.LoadBalancing.LoadBalancingClient#connectToNameServer
          @borrows Photon.LoadBalancing.LoadBalancingClient#getRegions
          @borrows Photon.LoadBalancing.LoadBalancingClient#onGetRegionsResult
          @borrows Photon.LoadBalancing.LoadBalancingClient#isConnectedToNameServer
          @borrows Photon.LoadBalancing.LoadBalancingClient#disconnect
          @borrows Photon.LoadBalancing.LoadBalancingClient#setLogLevel
                @constructor Photon.Chat.ChatClient
          @param {Photon.ConnectionProtocol} protocol Connecton protocol.
          @param {string} appId Cloud application ID.
          @param {string} appVersion Cloud application version.
      */


      function ChatClient(protocol, appId, appVersion) {
        var _this = _super.call(this, protocol, appId, appVersion) || this;

        _this.publicChannels = {};
        _this.privateChannels = {};
        _this.subscribeRequests = [];
        _this.unsubscribeRequests = [];
        _this.autoJoinLobby = false;
        return _this;
      }
      /**
          @summary Called on client state change. Override to handle it.
          @method Photon.Chat.ChatClient#onStateChange
          @param {Photon.Chat.ChatClient.ChatState} state New client state.
      */


      ChatClient.prototype.onStateChange = function (state) {};
      /**
          @summary Called if client error occures. Override to handle it.
          @method Chat.ChatClient#onError
          @param {Chat.ChatClient.ChatPeerErrorCode} errorCode Client error code.
          @param {string} errorMsg Error message.
      */


      ChatClient.prototype.onError = function (errorCode, errorMsg) {};
      /**
          @summary Called when {@link Photon.Chat.ChatClient#subscribe subscribe} request completed.<br/ >
          Override to handle request results.
          @param {object} results Object with channel names as keys and boolean results as values.
          @method Photon.Chat.ChatClient#onSubscribeResult
      */


      ChatClient.prototype.onSubscribeResult = function (results) {};
      /**
          @summary Called when {@link Photon.Chat.ChatClient#unsubscribe unsubscribe} request completed.<br/ >
          Override to handle request results.
          @param {object} results Object with channel names as keys and boolean results as values.
          @method Photon.Chat.ChatClient#onUnsubscribeResult
      */


      ChatClient.prototype.onUnsubscribeResult = function (results) {};
      /**
          @summary Called when new chat messages received.<br/ >
          Override to handle messages receive event.
          @param {string} channelName Chat channel name.
          @param {{@link Photon.Chat.Message}[]} messages Array of received messages.
          @method Photon.Chat.ChatClient#onChatMessages
      */


      ChatClient.prototype.onChatMessages = function (channelName, messages) {};
      /**
          @summary Called when new private message received.<br/ >
          Override to handle message receive event.
          @param {string} channelName Private channel name(counterpart user id).
          @param {Photon.Chat.Message} message Received message.
          @method Photon.Chat.ChatClient#onPrivateMessage
      */


      ChatClient.prototype.onPrivateMessage = function (channelName, message) {};
      /**
          @summary Called when user from friend list changes state.<br/ >
          Override to handle change state event.
          @param {string} userId User id.
          @param {number} status New User status. Predefined {@link Photon.chat.Constants.UserStatus Constants.UserStatus} or custom.
          @param {boolean} gotMessage True if status message updated.
          @param {string} statusMessage Optional status message (may be null even if gotMessage = true).
          @method Photon.Chat.ChatClient#onUserStatusUpdate
      */


      ChatClient.prototype.onUserStatusUpdate = function (userId, status, gotMessage, statusMessage) {};
      /**
          @summary Connects to a specific region's Master server, using the NameServer to find the IP.
          Override {@link Photon.Chat.ChatClient#onWebRpcResult onWebRpcResult} to handle request results.<br/>
          @method Photon.Chat.ChatClient#connectToRegionFrontEnd
          @param {string} region Region connect to Master server of.
          @returns {boolean} True if current client state allows connection.
      **/


      ChatClient.prototype.connectToRegionFrontEnd = function (region) {
        return this.connectToRegionMaster(region);
      };
      /**
          @summary Returns true if client connected to Front End.When connected, client can send messages, subscribe to channels and so on.
          @return {boolean} True if connected.
          @method Photon.Chat.ChatClient#isConnectedToFrontEnd
      */


      ChatClient.prototype.isConnectedToFrontEnd = function () {
        return this.state == ChatClient.ChatState.ConnectedToFrontEnd;
      };
      /**
          @summary Sends operation to subscribe to a list of channels by name.<br/>
          Override {@link Photon.Chat.ChatClient#onSubscribeResult onSubscribeResult} to handle request results.
          @param {string[]} channelNames Array of channel names to subscribe to.
          @param {object} [options] Additional options
          @property {object} options Additional options
          @property {number} [options.historyLength] Controls messages history sent on subscription. Not specified or 0: no history. 1 and higher: number of messages in history. -1: all history.
          @property {number[]} [options.lastIds] Array of IDs of last messages received per channel. Useful when resubscribing to receive only messages we missed.
          @return {boolean} True if operation sent.
          @method Photon.Chat.ChatClient#subscribe
      */


      ChatClient.prototype.subscribe = function (channelNames, options) {
        // backward compatibility
        if (typeof options == "number") {
          options = {
            historyLength: options
          };
        }

        if (this.isConnectedToFrontEnd()) {
          this.logger.debug("Subscribe channels:", channelNames);
          var params = [];
          params.push(Chat.Constants.ParameterCode.Channels, Photon.TypeExt.String(channelNames));

          if (options) {
            if (options.historyLength) {
              params.push(Chat.Constants.ParameterCode.HistoryLength, Photon.TypeExt.Int(options.historyLength));
            }

            if (options.lastIds) {
              params.push(Chat.Constants.ParameterCode.MsgIds, Photon.TypeExt.Int(options.lastIds));

              if (options.historyLength === undefined) {
                params.push(Chat.Constants.ParameterCode.HistoryLength, Photon.TypeExt.Int(-1));
              }
            }
          }

          this.masterPeer.sendOperation(Chat.Constants.OperationCode.Subscribe, params);
          return true;
        } else {
          this.logger.error("subscribe request error:", "Not connected to Front End");
          return false;
        }
      };
      /**
          @summary Sends operation to unsubscribe from a list of channels by name.<br/ >
          Override {@link Photon.Chat.ChatClient#onUnsubscribeResult onUnsubscribeResult} to handle request results.
          @param {string[]} channelNames Array of channel names to unsubscribe from.
          @return {boolean} True if operation sent.
          @method Photon.Chat.ChatClient#unsubscribe
      */


      ChatClient.prototype.unsubscribe = function (channelNames) {
        if (this.isConnectedToFrontEnd()) {
          this.logger.debug("Unsubscribe channels:", channelNames);
          var params = [];
          params.push(Chat.Constants.ParameterCode.Channels, Photon.TypeExt.String(channelNames));
          this.masterPeer.sendOperation(Chat.Constants.OperationCode.Unsubscribe, params);
          return true;
        } else {
          this.logger.error("unsubscribe request error:", "Not connected to Front End");
          return false;
        }
      };
      /**
          @summary Sends a message to a public channel.<br/>
          Channel should be subscribed before publishing to it.
          Everyone in that channel will get the message.
          @param {string} channelName Channel name to send message to.
          @param {any} content Text string or arbitrary data to send.
          @param {object} [options] Additional options
          @property {object} options Additional options
          @property {boolean} [options.webForward] Optionally, private messages can be forwarded as webhooks. Configure webhooks for your Chat app to use this.
          @return {boolean} True if message sent.
          @method Photon.Chat.ChatClient#publishMessage
      */


      ChatClient.prototype.publishMessage = function (channelName, content, options) {
        if (this.isConnectedToFrontEnd()) {
          var params = [];
          params.push(Chat.Constants.ParameterCode.Channel, channelName);
          params.push(Chat.Constants.ParameterCode.Message, content);

          if (options) {
            if (options.webForward) {
              params.push(Chat.Constants.ParameterCode.WebFlags);
              params.push(Photon.TypeExt.Byte(WebFlags.HttpForward));
            }
          }

          this.masterPeer.sendOperation(Chat.Constants.OperationCode.Publish, params);
          return true;
        } else {
          this.logger.error("publishMessage request error:", "Not connected to Front End");
          return false;
        }
      };
      /**
          @summary Sends a private message to a single target user.<br/>
          @param {string} userId User id to send this message to.
          @param {any} content Text string or arbitrary data to send.
          @param {object} [options] Additional options
          @property {object} options Additional options
          @property {boolean} [options.webForward] Optionally, private messages can be forwarded as webhooks. Configure webhooks for your Chat app to use this.
          @return {boolean} True if message sent.
          @method Photon.Chat.ChatClient#sendPrivateMessage
      */


      ChatClient.prototype.sendPrivateMessage = function (userId, content, options) {
        if (this.isConnectedToFrontEnd()) {
          var params = [];
          params.push(Chat.Constants.ParameterCode.UserId, userId);
          params.push(Chat.Constants.ParameterCode.Message, content);

          if (options) {
            if (options.webForward) {
              params.push(Chat.Constants.ParameterCode.WebFlags);
              params.push(Photon.TypeExt.Byte(WebFlags.HttpForward));
            }
          }

          this.masterPeer.sendOperation(Chat.Constants.OperationCode.SendPrivate, params);
          return true;
        } else {
          this.logger.error("sendPrivateMessage request error:", "Not connected to Front End");
          return false;
        }
      };
      /**
          @summary Sets the user's status (pre-defined or custom) and an optional message.<br/>
          The predefined status values can be found in {@link Photon.Chat.Constants.UserStatus Constants.UserStatus}.<br/>
          State UserStatus.Invisible will make you offline for everyone and send no message.
          @param {number} status User status to set.
          @param {string} [message=null] State message.
          @param {boolean} [skipMessage=false] If true { client does not send state message.
          @return {boolean} True if command sent.
          @method Photon.Chat.ChatClient#setUserStatus
      */


      ChatClient.prototype.setUserStatus = function (status, statusMessage, skipMessage) {
        if (statusMessage === void 0) {
          statusMessage = null;
        }

        if (skipMessage === void 0) {
          skipMessage = false;
        }

        if (this.isConnectedToFrontEnd()) {
          var params = [];
          params.push(Chat.Constants.ParameterCode.Status, Photon.TypeExt.Int(status));
          if (skipMessage) params.push(Chat.Constants.ParameterCode.SkipMessage, true);else params.push(Chat.Constants.ParameterCode.Message, statusMessage);
          this.masterPeer.sendOperation(Chat.Constants.OperationCode.UpdateStatus, params);
          return true;
        } else {
          this.logger.error("setUserStatus request error:", "Not connected to Front End");
          return false;
        }
      };
      /**
          @summary Adds users to the list on the Chat Server which will send you status updates for those.
          @tparam string[] userIds Array of user ids.
          @return {boolean} True if command sent.
      */


      ChatClient.prototype.addFriends = function (userIds) {
        if (this.isConnectedToFrontEnd()) {
          var params = [];
          params.push(Chat.Constants.ParameterCode.Friends, Photon.TypeExt.String(userIds));
          this.masterPeer.sendOperation(Chat.Constants.OperationCode.AddFriendds, params);
          return true;
        } else {
          this.logger.error("addFriends request error:", "Not connected to Front End");
          return false;
        }
      };
      /**
          @summary Removes users from the list on the Chat Server which will send you status updates for those.
          @tparam string[] friends Array of user ids.
          @return {boolean} True if command sent.
      */


      ChatClient.prototype.removeFriends = function (userIds) {
        if (this.isConnectedToFrontEnd()) {
          var params = [];
          params.push(Chat.Constants.ParameterCode.Friends, Photon.TypeExt.String(userIds));
          this.masterPeer.sendOperation(Chat.Constants.OperationCode.RemoveFriends, params);
          return true;
        } else {
          this.logger.error("removeFriends request error:", "Not connected to Front End");
          return false;
        }
      };
      /**
          @summary Returns list of public channels client subscribed to.
          @return Channel[] Array of public channels.
      */


      ChatClient.prototype.getPublicChannels = function () {
        return this.publicChannels;
      };
      /**
          @summary Returns list of channels representing current private conversation.
          @return Channel[] Array of private channels.
      */


      ChatClient.prototype.getPrivateChannels = function () {
        return this.privateChannels;
      }; // private


      ChatClient.prototype.getOrAddChannel = function (channels, name, isPrivate) {
        if (channels[name] == undefined) {
          channels[name] = new Channel(name, isPrivate);
        }

        return channels[name];
      }; // internal


      ChatClient.prototype.initMasterPeer = function (mp) {
        var _this = this;

        _super.prototype.initMasterPeer.call(this, mp); // onOperationResponse called if no listener exists
        //mp.addResponseListener(Constants.OperationCode.Publish, (data: any) => {
        //    mp._logger.debug("resp Publish", data.errCode, data.errMsg);
        //});
        //mp.addResponseListener(Constants.OperationCode.SendPrivate, (data: any) => {
        //    mp._logger.debug("resp SendPrivate", data.errCode, data.errMsg);
        //});
        //mp.addResponseListener(Constants.OperationCode.UpdateStatus, (data: any) => {
        //    mp._logger.debug("resp UpdateStatus", data.errCode, data.errMsg);
        //});
        //mp.addResponseListener(Constants.OperationCode.FriendList, (data: any) => {
        //    mp._logger.debug("resp FriendList", data.errCode, data.errMsg);
        //});


        mp.addEventListener(Chat.Constants.EventCode.ChatMessages, function (data) {
          var senders = data.vals[Chat.Constants.ParameterCode.Senders];
          var messages = data.vals[Chat.Constants.ParameterCode.Messages];
          var channelName = data.vals[Chat.Constants.ParameterCode.Channel];
          var ch = _this.publicChannels[channelName];

          if (ch) {
            var newMessages = ch.addMessages(senders, messages);
            ch.lastId = data.vals[Chat.Constants.ParameterCode.MsgId];

            _this.onChatMessages(channelName, newMessages);
          } else {
            mp._logger.warn("ev ChatMessages: Got message from unsubscribed channel ", channelName);
          }
        });
        mp.addEventListener(Chat.Constants.EventCode.PrivateMessage, function (data) {
          var sender = data.vals[Chat.Constants.ParameterCode.Sender];
          var message = data.vals[Chat.Constants.ParameterCode.Message];
          var userId = data.vals[Chat.Constants.ParameterCode.UserId];
          var channelName = "";
          if (_this.getUserId() == sender) channelName = userId;else channelName = sender;

          var ch = _this.getOrAddChannel(_this.privateChannels, channelName, true);

          ch.lastId = data.vals[Chat.Constants.ParameterCode.MsgId];

          _this.onPrivateMessage(channelName, new Message(sender, message));
        });
        mp.addEventListener(Chat.Constants.EventCode.StatusUpdate, function (data) {
          var sender = data.vals[Chat.Constants.ParameterCode.Sender];
          var status = data.vals[Chat.Constants.ParameterCode.Status];
          var message = data.vals[Chat.Constants.ParameterCode.Message];
          var gotMessage = message !== undefined;

          _this.onUserStatusUpdate(sender, status, gotMessage, message);
        });
        mp.addEventListener(Chat.Constants.EventCode.Subscribe, function (data) {
          mp._logger.debug("ev Subscribe", data);

          var res = {};
          var channels = data.vals[Chat.Constants.ParameterCode.Channels] || [];
          var results = data.vals[Chat.Constants.ParameterCode.SubscribeResults] || [];

          for (var i in channels) {
            var ch = channels[i];
            res[ch] = false;

            if (i < results.length && results[i]) {
              _this.getOrAddChannel(_this.publicChannels, ch, false);

              res[ch] = true;
            }
          }

          _this.onSubscribeResult(res);
        });
        mp.addEventListener(Chat.Constants.EventCode.Unsubscribe, function (data) {
          mp._logger.debug("ev Unsubscribe", data);

          var res = {};
          var channels = data.vals[Chat.Constants.ParameterCode.Channels] || [];

          for (var i in channels) {
            var ch = channels[i];
            delete _this.publicChannels[ch];
            res[ch] = true;
          }

          _this.onUnsubscribeResult(res);
        });
      };
      /**
          @summary Converts {@link Photon.Chat.ChatClient.ChatState ChatState} element to string name.
          @method Photon.Chat.ChatClient.StateToName
          @param {Photon.Chat.ChatClient.ChatState} state Client state.
          @returns {string} Specified element name or undefined if not found.
      */


      ChatClient.StateToName = function (value) {
        var x = Exitgames.Common.Util.getEnumKeyByValue(ChatClient.ChatState, value);

        if (x === undefined) {
          // Super class states support - useless since all states overridden but may help somehow when debugging
          return Exitgames.Common.Util.getEnumKeyByValue(ChatClient.State, value);
        } else {
          return x;
        }
      };

      ChatClient.ChatPeerErrorCode = {
        /**
            @summary Enum for client peers error codes.
            @member Photon.Chat.ChatClient.ChatPeerErrorCode
            @readonly
            @property {number} Ok No Error.
            @property {number} FrontEndError General FrontEnd server peer error.
            @property {number} FrontEndConnectFailed FrontEnd server connection error.
            @property {number} FrontEndConnectClosed Disconnected from FrontEnd server.
            @property {number} FrontEndTimeout Disconnected from FrontEnd server for timeout.
            @property {number} FrontEndEncryptionEstablishError FrontEnd server encryption establishing failed.
            @property {number} FrontEndAuthenticationFailed FrontEnd server authentication failed.
            @property {number} NameServerError General NameServer peer error.
            @property {number} NameServerConnectFailed NameServer connection error.
            @property {number} NameServerConnectClosed Disconnected from NameServer.
            @property {number} NameServerTimeout Disconnected from NameServer for timeout.
            @property {number} NameServerEncryptionEstablishError NameServer encryption establishing failed.
            @property {number} NameServerAuthenticationFailed NameServer authentication failed.
         */
        Ok: 0,
        FrontEndError: 1001,
        FrontEndConnectFailed: 1002,
        FrontEndConnectClosed: 1003,
        FrontEndTimeout: 1004,
        FrontEndEncryptionEstablishError: 1005,
        FrontEndAuthenticationFailed: 1101,
        NameServerError: 3001,
        NameServerConnectFailed: 3002,
        NameServerConnectClosed: 3003,
        NameServerTimeout: 3004,
        NameServerEncryptionEstablishError: 300,
        NameServerAuthenticationFailed: 3101
      };
      ChatClient.ChatState = {
        /**
            @summary Enum for client states.
            @member Photon.Chat.ChatClient.ChatState
            @readonly
            @property {number} Error Critical error occurred.
            @property {number} Uninitialized Client is created but not used yet.
            @property {number} ConnectingToNameServer Connecting to NameServer.
            @property {number} ConnectedToNameServer Connected to NameServer.
            @property {number} ConnectingToFrontEnd Connecting to FrontEnd server.
            @property {number} ConnectedToFrontEnd Connected to FrontEnd server.
            @property {number} Disconnected The client is no longer connected (to any server).
        */
        Error: -1,
        Uninitialized: 0,
        ConnectingToNameServer: 1,
        ConnectedToNameServer: 2,
        ConnectingToFrontEnd: 3,
        ConnectedToFrontEnd: 4,
        Disconnected: 10
      };
      return ChatClient;
    }(Photon.LoadBalancing.LoadBalancingClient);

    Chat.ChatClient = ChatClient;
  })(Chat = Photon.Chat || (Photon.Chat = {}));
})(Photon || (Photon = {}));

module.exports = Photon;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGhvdG9uLUphdmFzY3JpcHRfU0RLLmpzIl0sIm5hbWVzIjpbIl9fZXh0ZW5kcyIsImV4dGVuZFN0YXRpY3MiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwiZCIsImIiLCJwIiwiaGFzT3duUHJvcGVydHkiLCJfXyIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiY3JlYXRlIiwiRXhpdGdhbWVzIiwiQ29tbW9uIiwiTG9nZ2VyIiwicHJlZml4IiwibGV2ZWwiLCJMZXZlbCIsIklORk8iLCJzZXRQcmVmaXgiLCJnZXRQcmVmaXgiLCJzZXRMZXZlbCIsIk1hdGgiLCJtYXgiLCJERUJVRyIsIm1pbiIsIk9GRiIsInNldEV4Y2VwdGlvbkhhbmRsZXIiLCJoYW5kbGVyIiwiZXhjZXB0aW9uSGFuZGxlciIsImlzTGV2ZWxFbmFibGVkIiwiZ2V0TGV2ZWwiLCJkZWJ1ZyIsIm1lc3MiLCJvcHRpb25hbFBhcmFtcyIsIl9pIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwibG9nIiwiaW5mbyIsIndhcm4iLCJXQVJOIiwiZXJyb3IiLCJFUlJPUiIsImV4Y2VwdGlvbiIsImNvZGUiLCJmb3JtYXQwIiwiRXJyb3IiLCJmb3JtYXQiLCJmb3JtYXRBcnIiLCJtc2ciLCJjb25zb2xlIiwidW5kZWZpbmVkIiwibG9nTWV0aG9kIiwibG9nX3R5cGVzIiwiYXBwbHkiLCJjb25jYXQiLCJtYXAiLCJ4IiwiSlNPTiIsInN0cmluZ2lmeSIsInRvU3RyaW5nIiwiam9pbiIsIlV0aWwiLCJpbmRleE9mIiwiYXJyIiwiaXRlbSIsImZyb20iLCJsIiwiaSIsImlzQXJyYXkiLCJvYmoiLCJjYWxsIiwibWVyZ2UiLCJ0YXJnZXQiLCJhZGRpdGlvbmFsIiwiZ2V0UHJvcGVydHlPckVsc2UiLCJwcm9wIiwiZGVmYXVsdFZhbHVlIiwiZW51bVZhbHVlVG9OYW1lIiwiZW51bU9iaiIsInZhbHVlIiwiZ2V0RW51bUtleUJ5VmFsdWUiLCJQaG90b24iLCJDb25uZWN0aW9uUHJvdG9jb2wiLCJUeXBlRXh0VHlwZSIsIlR5cGVFeHQiLCJJcyIsIkJ5dGUiLCJTaG9ydCIsIkludCIsIkxvbmciLCJGbG9hdCIsIkRvdWJsZSIsIlN0cmluZyIsIkJvb2wiLCJEaWN0IiwidDEiLCJ0MiIsIlBob3RvblBlZXIiLCJwcm90b2NvbCIsImFkZHJlc3MiLCJzdWJwcm90b2NvbCIsImRlYnVnTmFtZSIsImtlZXBBbGl2ZVRpbWVvdXRNcyIsIl9mcmFtZSIsIl9pc0Nvbm5lY3RpbmciLCJfaXNDb25uZWN0ZWQiLCJfaXNDbG9zaW5nIiwiX3BlZXJTdGF0dXNMaXN0ZW5lcnMiLCJfZXZlbnRMaXN0ZW5lcnMiLCJfcmVzcG9uc2VMaXN0ZW5lcnMiLCJsYXN0UnR0IiwiaW5pdFRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJrZWVwQWxpdmVUaW1lciIsInVybCIsImFkZFByb3RvY29sUHJlZml4IiwiX2xvZ2dlciIsInByb3RvY29sUHJlZml4Iiwid3MiLCJ3c3MiLCJrIiwiV3MiLCJXc3MiLCJEZXN0cm95IiwiaXNDb25uZWN0aW5nIiwiZ2V0TGFzdFJ0dCIsImlzQ29ubmVjdGVkIiwiaXNDbG9zaW5nIiwiY29ubmVjdCIsImFwcGlkIiwiX3RoaXMiLCJfc2Vzc2lvbmlkIiwiX3NvY2tldCIsIldlYlNvY2tldCIsIl9vbkNvbm5lY3RpbmciLCJvbm9wZW4iLCJldiIsIm9ubWVzc2FnZSIsIm1lc3NhZ2UiLCJfZGVjb2RlIiwiZGF0YSIsIl9vbk1lc3NhZ2UiLCJvbmNsb3NlIiwid2FzQ2xlYW4iLCJyZWFzb24iLCJfb25Db25uZWN0RmFpbGVkIiwiX29uVGltZW91dCIsIl9vbkRpc2Nvbm5lY3QiLCJvbmVycm9yIiwiX29uRXJyb3IiLCJkaXNjb25uZWN0IiwiY2xvc2UiLCJzZW5kT3BlcmF0aW9uIiwic2VuZFJlbGlhYmxlIiwiY2hhbm5lbElkIiwic25kSlNPTiIsIl9zZW5kIiwiYWRkUGVlclN0YXR1c0xpc3RlbmVyIiwic3RhdHVzQ29kZSIsImNhbGxiYWNrIiwiX2FkZExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Q29kZSIsImFkZFJlc3BvbnNlTGlzdGVuZXIiLCJvcGVyYXRpb25Db2RlIiwicmVtb3ZlUGVlclN0YXR1c0xpc3RlbmVyIiwiX3JlbW92ZUxpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZVJlc3BvbnNlTGlzdGVuZXIiLCJyZW1vdmVQZWVyU3RhdHVzTGlzdGVuZXJzRm9yQ29kZSIsIl9yZW1vdmVMaXN0ZW5lcnNGb3JDb2RlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lcnNGb3JDb2RlIiwicmVtb3ZlUmVzcG9uc2VMaXN0ZW5lcnNGb3JDb2RlIiwic2V0TG9nTGV2ZWwiLCJvblVuaGFuZGxlZEV2ZW50IiwiYXJncyIsIm9uVW5oYW5kbGVkUmVzcG9uc2UiLCJfZGlzcGF0Y2hFdmVudCIsIl9kaXNwYXRjaCIsIl9kaXNwYXRjaFJlc3BvbnNlIiwiX3N0cmluZ2lmeSIsIl9lbmNvZGUiLCJtZXNzYWdlcyIsInJldCIsIm51bWJlciIsIm4iLCJuZXdkYXRhIiwibnVsSW5kZXgiLCJyZXBsYWNlIiwic3Vic3RyIiwiTnVtYmVyIiwicHVzaCIsIl9vbk1lc3NhZ2VSZWNlaXZlZCIsInBhcnNlIiwiX29uQ29ubmVjdCIsInJlc2V0S2VlcEFsaXZlIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIl9hIiwiY2hlY2tDb25uZWN0ZWQiLCJzZW5kIiwicmVxIiwibXNnSlNPTiIsImVyciIsInZhbHMiLCJyZXMiLCJldnQiLCJpcnMiLCJtc2dFcnIiLCJfcGFyc2VNZXNzYWdlVmFsdWVzQXJyYXlUb0pTT04iLCJwYXJzZUludCIsIl9wYXJzZVJlc3BvbnNlIiwiX3BhcnNlRXZlbnQiLCJfcGFyc2VJbnRlcm5hbFJlc3BvbnNlIiwicGFyc2VkSlNPTiIsInRvUGFyc2UiLCJrZXkiLCJzaGlmdCIsImV2ZW50IiwicmVzcG9uc2UiLCJlcnJDb2RlIiwiZXJyTXNnIiwiX2Rpc3BhdGNoUGVlclN0YXR1cyIsIlN0YXR1c0NvZGVzIiwiY29ubmVjdGluZyIsImNvbm5lY3RGYWlsZWQiLCJ3YXNDb25uZWN0ZWQiLCJ3YXNDbG9zaW5nIiwiY29ubmVjdENsb3NlZCIsInRpbWVvdXQiLCJsaXN0ZW5lcnMiLCJkZWJ1Z1R5cGUiLCJldmVudHMiLCJwcmV2TGVuZ2h0IiwiZmlsdGVyIiwiTG9hZEJhbGFuY2luZyIsIldlYkZsYWdzIiwiSHR0cEZvcndhcmQiLCJTZW5kQXV0aENvb2tpZSIsIlNlbmRTeW5jIiwiU2VuZFN0YXRlIiwiQWN0b3IiLCJuYW1lIiwiYWN0b3JOciIsImlzTG9jYWwiLCJjdXN0b21Qcm9wZXJ0aWVzIiwic3VzcGVuZGVkIiwiZ2V0Um9vbSIsImxvYWRCYWxhbmNpbmdDbGllbnQiLCJteVJvb20iLCJyYWlzZUV2ZW50Iiwib3B0aW9ucyIsInNldE5hbWUiLCJvblByb3BlcnRpZXNDaGFuZ2UiLCJjaGFuZ2VkQ3VzdG9tUHJvcHMiLCJieUNsaWVudCIsImdldEN1c3RvbVByb3BlcnR5IiwiZ2V0Q3VzdG9tUHJvcGVydHlPckVsc2UiLCJzZXRDdXN0b21Qcm9wZXJ0eSIsIndlYkZvcndhcmQiLCJleHBlY3RlZFZhbHVlIiwicHJvcHMiLCJleHBlY3RlZFByb3BzIiwiaXNKb2luZWRUb1Jvb20iLCJfc2V0UHJvcGVydGllc09mQWN0b3IiLCJzZXRDdXN0b21Qcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsImV4cGVjdGVkUHJvcGVydGllcyIsImlzU3VzcGVuZGVkIiwiX2dldEFsbFByb3BlcnRpZXMiLCJDb25zdGFudHMiLCJBY3RvclByb3BlcnRpZXMiLCJQbGF5ZXJOYW1lIiwiX3NldExCQyIsImxiYyIsIl91cGRhdGVGcm9tUmVzcG9uc2UiLCJQYXJhbWV0ZXJDb2RlIiwiQWN0b3JOciIsIlBsYXllclByb3BlcnRpZXMiLCJfdXBkYXRlQ3VzdG9tUHJvcGVydGllcyIsIl91cGRhdGVNeUFjdG9yRnJvbVJlc3BvbnNlIiwiX3NldFN1c3BlbmRlZCIsInMiLCJfZ2V0QWN0b3JOckZyb21SZXNwb25zZSIsIlJvb21JbmZvIiwibWF4UGxheWVycyIsImlzVmlzaWJsZSIsImlzT3BlbiIsInBsYXllckNvdW50IiwiZW1wdHlSb29tTGl2ZVRpbWUiLCJzdXNwZW5kZWRQbGF5ZXJMaXZlVGltZSIsInJlbW92ZWQiLCJjbGVhbnVwQ2FjaGVPbkxlYXZlIiwibWFzdGVyQ2xpZW50SWQiLCJfY3VzdG9tUHJvcGVydGllcyIsIl9wcm9wc0xpc3RlZEluTG9iYnkiLCJfdXBkYXRlRnJvbU1hc3RlclJlc3BvbnNlIiwiQWRkcmVzcyIsIlJvb21OYW1lIiwiX3VwZGF0ZUZyb21Qcm9wcyIsInVwZGF0ZUlmRXhpc3RzIiwiR2FtZVByb3BlcnRpZXMiLCJNYXhQbGF5ZXJzIiwiSXNWaXNpYmxlIiwiSXNPcGVuIiwiUGxheWVyQ291bnQiLCJSZW1vdmVkIiwiUHJvcHNMaXN0ZWRJbkxvYmJ5IiwiQ2xlYW51cENhY2hlT25MZWF2ZSIsIk1hc3RlckNsaWVudElkIiwiRW1wdHlSb29tVHRsIiwiUGxheWVyVHRsIiwiY2hhbmdlZFByb3BzIiwiX3VwZGF0ZUZyb21FdmVudCIsInBheWxvYWQiLCJwcmV2VmFsdWUiLCJSb29tIiwiX3N1cGVyIiwiX3NldFByb3BlcnRpZXNPZlJvb20iLCJzZXRQcm9wIiwic2V0SXNWaXNpYmxlIiwic2V0SXNPcGVuIiwic2V0TWF4UGxheWVycyIsInNldEVtcHR5Um9vbUxpdmVUaW1lIiwic2V0U3VzcGVuZGVkUGxheWVyTGl2ZVRpbWUiLCJzZXRQbHVnaW5zIiwicGx1Z2lucyIsInNldFByb3BzTGlzdGVkSW5Mb2JieSIsIkxvYWRCYWxhbmNpbmdDbGllbnQiLCJhcHBJZCIsImFwcFZlcnNpb24iLCJhdXRvSm9pbkxvYmJ5IiwiY29ubmVjdE9wdGlvbnMiLCJjcmVhdGVSb29tT3B0aW9ucyIsImpvaW5Sb29tT3B0aW9ucyIsInJvb21JbmZvcyIsInJvb21JbmZvc0RpY3QiLCJhY3RvcnMiLCJhY3RvcnNBcnJheSIsImxvd2VzdEFjdG9ySWQiLCJ1c2VyQXV0aFR5cGUiLCJDdXN0b21BdXRoZW50aWNhdGlvblR5cGUiLCJOb25lIiwidXNlckF1dGhQYXJhbWV0ZXJzIiwidXNlckF1dGhEYXRhIiwibG9iYnlTdGF0c1JlcXVlc3RMaXN0Iiwic3RhdGUiLCJTdGF0ZSIsIlVuaW5pdGlhbGl6ZWQiLCJsb2dnZXIiLCJ2YWxpZE5leHRTdGF0ZSIsInNlcnZlckFkZHJlc3MiLCJjb25uZWN0aW9uUHJvdG9jb2wiLCJtYXN0ZXJTZXJ2ZXJBZGRyZXNzIiwibmFtZVNlcnZlckFkZHJlc3MiLCJzMCIsInMxIiwiaW5pdFZhbGlkTmV4dFN0YXRlIiwiY3VycmVudFJvb20iLCJyb29tRmFjdG9yeUludGVybmFsIiwiX215QWN0b3IiLCJhY3RvckZhY3RvcnlJbnRlcm5hbCIsImFkZEFjdG9yIiwib25TdGF0ZUNoYW5nZSIsIm9uRXJyb3IiLCJlcnJvckNvZGUiLCJlcnJvck1zZyIsIm9uT3BlcmF0aW9uUmVzcG9uc2UiLCJjb250ZW50Iiwib25FdmVudCIsIm9uUm9vbUxpc3QiLCJyb29tcyIsIm9uUm9vbUxpc3RVcGRhdGUiLCJyb29tc1VwZGF0ZWQiLCJyb29tc0FkZGVkIiwicm9vbXNSZW1vdmVkIiwib25NeVJvb21Qcm9wZXJ0aWVzQ2hhbmdlIiwib25BY3RvclByb3BlcnRpZXNDaGFuZ2UiLCJhY3RvciIsIm9uSm9pblJvb20iLCJjcmVhdGVkQnlNZSIsIm9uQWN0b3JKb2luIiwib25BY3RvckxlYXZlIiwiY2xlYW51cCIsIm9uQWN0b3JTdXNwZW5kIiwib25GaW5kRnJpZW5kc1Jlc3VsdCIsImZyaWVuZHMiLCJvbkxvYmJ5U3RhdHMiLCJsb2JiaWVzIiwib25BcHBTdGF0cyIsInN0YXRzIiwib25HZXRSZWdpb25zUmVzdWx0IiwicmVnaW9ucyIsIm9uV2ViUnBjUmVzdWx0IiwidXJpUGF0aCIsInJlc3VsdENvZGUiLCJyb29tRmFjdG9yeSIsImFjdG9yRmFjdG9yeSIsIm15QWN0b3IiLCJteVJvb21BY3RvcnMiLCJteVJvb21BY3RvckNvdW50IiwibXlSb29tQWN0b3JzQXJyYXkiLCJteVJvb21NYXN0ZXJBY3Rvck5yIiwiZ2FtZVBlZXIiLCJyIiwiYSIsInNldE5hbWVTZXJ2ZXJBZGRyZXNzIiwiZ2V0TmFtZVNlcnZlckFkZHJlc3MiLCJzZXRNYXN0ZXJTZXJ2ZXJBZGRyZXNzIiwiZ2V0TWFzdGVyU2VydmVyQWRkcmVzcyIsInNldFVzZXJJZCIsInVzZXJJZCIsImdldFVzZXJJZCIsInNldEN1c3RvbUF1dGhlbnRpY2F0aW9uIiwiYXV0aFBhcmFtZXRlcnMiLCJhdXRoVHlwZSIsImF1dGhEYXRhIiwiQ3VzdG9tIiwia2VlcE1hc3RlckNvbm5lY3Rpb24iLCJjaGVja05leHRTdGF0ZSIsIkNvbm5lY3RpbmdUb01hc3RlcnNlcnZlciIsImNoYW5nZVN0YXRlIiwibWFzdGVyUGVlciIsIk1hc3RlclBlZXIiLCJpbml0TWFzdGVyUGVlciIsImNvbm5lY3RUb05hbWVTZXJ2ZXIiLCJDb25uZWN0aW5nVG9OYW1lU2VydmVyIiwibmFtZVNlcnZlclBlZXIiLCJOYW1lU2VydmVyUGVlciIsImluaXROYW1lU2VydmVyUGVlciIsImZpbGxDcmVhdGVSb29tT3B0aW9ucyIsIm9wIiwiZ3AiLCJwcm9wc0xpc3RlZEluTG9iYnkiLCJjdXN0b21HYW1lUHJvcGVydGllcyIsIkJyb2FkY2FzdCIsIkVtcHR5Um9vbVRUTCIsIlBsYXllclRUTCIsIlBsdWdpbnMiLCJDaGVja1VzZXJPbkpvaW4iLCJsb2JieU5hbWUiLCJMb2JieU5hbWUiLCJsb2JieVR5cGUiLCJMb2JieVR5cGUiLCJjcmVhdGVSb29tRnJvbU15Iiwicm9vbU5hbWUiLCJjb3B5Q3JlYXRlT3B0aW9uc0Zyb21NeVJvb20iLCJjcmVhdGVSb29tSW50ZXJuYWwiLCJjcmVhdGVSb29tIiwiam9pblJvb20iLCJjcmVhdGVPcHRpb25zIiwiY3JlYXRlSWZOb3RFeGlzdHMiLCJKb2luTW9kZSIsIkNyZWF0ZUlmTm90RXhpc3RzIiwicmVqb2luIiwiUmVqb2luT25seSIsIk9wZXJhdGlvbkNvZGUiLCJKb2luR2FtZSIsImpvaW5SYW5kb21Sb29tIiwibWF0Y2hpbmdUeXBlIiwiTWF0Y2htYWtpbmdNb2RlIiwiRmlsbFJvb20iLCJNYXRjaE1ha2luZ1R5cGUiLCJleHBlY3RlZFJvb21Qcm9wZXJ0aWVzIiwicHJvcE5vbkVtcHR5IiwiZXhwZWN0ZWRDdXN0b21Sb29tUHJvcGVydGllcyIsImV4cGVjdGVkTWF4UGxheWVycyIsInNxbExvYmJ5RmlsdGVyIiwiRGF0YSIsIkpvaW5SYW5kb21HYW1lIiwiUHJvcGVydGllcyIsIkV4cGVjdGVkVmFsdWVzIiwiU2V0UHJvcGVydGllcyIsIl9jbGVhbnVwTmFtZVNlcnZlclBlZXJEYXRhIiwiX2NsZWFudXBNYXN0ZXJQZWVyRGF0YSIsIl9jbGVhbnVwR2FtZVBlZXJEYXRhIiwiRGlzY29ubmVjdGVkIiwic3VzcGVuZFJvb20iLCJwYXJhbXMiLCJzZW5kQXV0aENvb2tpZSIsIklzSW5hY3RpdmUiLCJMZWF2ZSIsImdhbWVQZWVyV2FpdGluZ0ZvckRpc2Nvbm5lY3QiLCJpc0Nvbm5lY3RlZFRvTWFzdGVyIiwiSm9pbmVkTG9iYnkiLCJsZWF2ZVJvb20iLCJjaGFuZ2VHcm91cHMiLCJncm91cHNUb1JlbW92ZSIsImdyb3Vwc1RvQWRkIiwiZmluZEZyaWVuZHMiLCJmcmllbmRzVG9GaW5kIiwiZmluZEZyaWVuZHNSZXF1ZXN0TGlzdCIsIlBlZXJFcnJvckNvZGUiLCJNYXN0ZXJFcnJvciIsInJlcXVlc3RMb2JieVN0YXRzIiwibG9iYmllc1RvUmVxdWVzdCIsInQiLCJEZWZhdWx0IiwicmVxdWVzdExvYmJ5U3RhdHNFcnIiLCJtIiwib3RoZXIiLCJnZXRSZWdpb25zIiwiaXNDb25uZWN0ZWRUb05hbWVTZXJ2ZXIiLCJOYW1lU2VydmVyRXJyb3IiLCJ3ZWJScGMiLCJwYXJhbWV0ZXJzIiwiY29ubmVjdFRvUmVnaW9uTWFzdGVyIiwicmVnaW9uIiwib3BBdXRoIiwiaXNJbkxvYmJ5IiwiSm9pbmVkIiwiaXNDb25uZWN0ZWRUb0dhbWUiLCJhdmFpbGFibGVSb29tcyIsImFkZFJvb20iLCJjbGVhclJvb21zIiwicHVyZ2VSZW1vdmVkUm9vbXMiLCJyZW1vdmVBY3RvciIsInJlZHVjZSIsInByZXYiLCJjdXJyIiwiY2xlYXJBY3RvcnMiLCJuZXh0U3RhdGUiLCJTdGF0ZVRvTmFtZSIsInBlZXIiLCJDcmVhdGVHYW1lIiwidXBkYXRlVXNlcklkQW5kTmlja25hbWUiLCJVc2VySWQiLCJuaWNrbmFtZSIsIk5pY2tuYW1lIiwibnAiLCJfb25FcnJvckludGVybmFsIiwiTmFtZVNlcnZlckNvbm5lY3RGYWlsZWQiLCJOYW1lU2VydmVyVGltZW91dCIsIkNvbm5lY3RlZFRvTmFtZVNlcnZlciIsIk5hbWVTZXJ2ZXJDb25uZWN0Q2xvc2VkIiwiR2V0UmVnaW9ucyIsIlJlZ2lvbiIsIkF1dGhlbnRpY2F0ZSIsInVzZXJBdXRoU2VjcmV0IiwiU2VjcmV0IiwiTmFtZVNlcnZlckF1dGhlbnRpY2F0aW9uRmFpbGVkIiwibXAiLCJNYXN0ZXJDb25uZWN0RmFpbGVkIiwiTWFzdGVyVGltZW91dCIsIkFwcGxpY2F0aW9uSWQiLCJBcHBWZXJzaW9uIiwiQ2xpZW50QXV0aGVudGljYXRpb25UeXBlIiwiQ2xpZW50QXV0aGVudGljYXRpb25QYXJhbXMiLCJDbGllbnRBdXRoZW50aWNhdGlvbkRhdGEiLCJsb2JieVN0YXRzIiwiTG9iYnlTdGF0cyIsIk1hc3RlckNvbm5lY3RDbG9zZWQiLCJFdmVudENvZGUiLCJHYW1lTGlzdCIsImdhbWVMaXN0IiwiZyIsIkdhbWVMaXN0VXBkYXRlIiwiZXhpc3QiLCJyaSIsIkNvbm5lY3RlZFRvTWFzdGVyIiwiSm9pbkxvYmJ5IiwiTWFzdGVyQXV0aGVudGljYXRpb25GYWlsZWQiLCJfb25PcGVyYXRpb25SZXNwb25zZUludGVybmFsMiIsImNvbm5lY3RUb0dhbWVTZXJ2ZXIiLCJGaW5kRnJpZW5kcyIsIm9ubGluZXMiLCJGaW5kRnJpZW5kc1Jlc3BvbnNlT25saW5lTGlzdCIsInJvb21JZHMiLCJGaW5kRnJpZW5kc1Jlc3BvbnNlUm9vbUlkTGlzdCIsIm9ubGluZSIsInJvb21JZCIsIm5hbWVzIiwidHlwZXMiLCJwZWVycyIsIlBlZXJDb3VudCIsImdhbWVzIiwiR2FtZUNvdW50IiwicGVlckNvdW50IiwiZ2FtZUNvdW50IiwiQXBwU3RhdHMiLCJtYXN0ZXJQZWVyQ291bnQiLCJNYXN0ZXJQZWVyQ291bnQiLCJScGMiLCJ3ZWJScGNIYW5kbGVyIiwibWFzdGVyT3BDb2RlIiwiQ29ubmVjdGluZ1RvR2FtZXNlcnZlciIsIkdhbWVQZWVyIiwiaW5pdEdhbWVQZWVyIiwiR2FtZUVycm9yIiwiR2FtZUNvbm5lY3RGYWlsZWQiLCJHYW1lVGltZW91dCIsIkNvbm5lY3RlZFRvR2FtZXNlcnZlciIsIkdhbWVBdXRoZW50aWNhdGlvbkZhaWxlZCIsImFjdG9yTGlzdCIsIkFjdG9yTGlzdCIsImFjdG9yUHJvcHMiLCJKb2luIiwiRGlzY29ubmVjdCIsIlByb3BlcnRpZXNDaGFuZ2VkIiwidGFyZ2V0QWN0b3JOciIsIlRhcmdldEFjdG9yTnIiLCJkb250VGhyb3ciLCJ2YWxpZCIsIk9rIiwiTWFzdGVyRW5jcnlwdGlvbkVzdGFibGlzaEVycm9yIiwiR2FtZUNvbm5lY3RDbG9zZWQiLCJHYW1lRW5jcnlwdGlvbkVzdGFibGlzaEVycm9yIiwiTmFtZVNlcnZlckVuY3J5cHRpb25Fc3RhYmxpc2hFcnJvciIsIkxiY1BlZXIiLCJVcmlQYXRoIiwiUnBjQ2FsbFBhcmFtcyIsIlJwY0NhbGxSZXREYXRhIiwiUnBjQ2FsbFJldENvZGUiLCJjbGllbnQiLCJDdXN0b21FdmVudENvbnRlbnQiLCJGaW5kRnJpZW5kc1JlcXVlc3RMaXN0IiwiQ29kZSIsInJlY2VpdmVycyIsIlJlY2VpdmVyR3JvdXAiLCJPdGhlcnMiLCJjYWNoZSIsIkV2ZW50Q2FjaGluZyIsIkRvTm90Q2FjaGUiLCJDYWNoZSIsImludGVyZXN0R3JvdXAiLCJjaGVja0dyb3VwTnVtYmVyIiwiR3JvdXAiLCJ0YXJnZXRBY3RvcnMiLCJSYWlzZUV2ZW50IiwiY2hlY2tHcm91cEFycmF5IiwiUmVtb3ZlIiwiQWRkIiwiQ2hhbmdlR3JvdXBzIiwiaXNOYU4iLCJJbmZpbml0eSIsImdyb3VwcyIsImdyb3Vwc05hbWUiLCJMaXRlIiwiTGl0ZU9wS2V5IiwiR2FtZUlkIiwiRW1wdHlSb29tTGl2ZVRpbWUiLCJMaXRlRXZlbnRDb2RlIiwiTGl0ZU9wQ29kZSIsIkdldFByb3BlcnRpZXMiLCJFcnJvckNvZGUiLCJPcGVyYXRpb25Ob3RBbGxvd2VkSW5DdXJyZW50U3RhdGUiLCJJbnZhbGlkT3BlcmF0aW9uQ29kZSIsIkludGVybmFsU2VydmVyRXJyb3IiLCJJbnZhbGlkQXV0aGVudGljYXRpb24iLCJHYW1lSWRBbHJlYWR5RXhpc3RzIiwiR2FtZUZ1bGwiLCJHYW1lQ2xvc2VkIiwiTm9SYW5kb21NYXRjaEZvdW5kIiwiR2FtZURvZXNOb3RFeGlzdCIsIk1heENjdVJlYWNoZWQiLCJJbnZhbGlkUmVnaW9uIiwiQ3VzdG9tQXV0aGVudGljYXRpb25GYWlsZWQiLCJBdXRoZW50aWNhdGlvblRpY2tldEV4cGlyZWQiLCJQbHVnaW5SZXBvcnRlZEVycm9yIiwiUGx1Z2luTWlzbWF0Y2giLCJKb2luRmFpbGVkUGVlckFscmVhZHlKb2luZWQiLCJKb2luRmFpbGVkRm91bmRJbmFjdGl2ZUpvaW5lciIsIkpvaW5GYWlsZWRXaXRoUmVqb2luZXJOb3RGb3VuZCIsIkpvaW5GYWlsZWRGb3VuZEV4Y2x1ZGVkVXNlcklkIiwiSm9pbkZhaWxlZEZvdW5kQWN0aXZlSm9pbmVyIiwiSHR0cExpbWl0UmVhY2hlZCIsIkV4dGVybmFsSHR0cENhbGxGYWlsZWQiLCJTbG90RXJyb3IiLCJJbnZhbGlkRW5jcnlwdGlvblBhcmFtZXRlcnMiLCJRdWV1ZVN0YXRlIiwiQXp1cmVOb2RlSW5mbyIsIlBvc2l0aW9uIiwiQXp1cmVMb2NhbE5vZGVJZCIsIkF6dXJlTWFzdGVyTm9kZUlkIiwiUnBjQ2FsbFJldE1lc3NhZ2UiLCJMZWF2ZUxvYmJ5IiwiU2VyaWFsTWF0Y2hpbmciLCJSYW5kb21NYXRjaGluZyIsIk1lcmdlQ2FjaGUiLCJSZXBsYWNlQ2FjaGUiLCJSZW1vdmVDYWNoZSIsIkFkZFRvUm9vbUNhY2hlIiwiQWRkVG9Sb29tQ2FjaGVHbG9iYWwiLCJSZW1vdmVGcm9tUm9vbUNhY2hlIiwiUmVtb3ZlRnJvbVJvb21DYWNoZUZvckFjdG9yc0xlZnQiLCJBbGwiLCJNYXN0ZXJDbGllbnQiLCJTdGVhbSIsIkZhY2Vib29rIiwiU3FsTG9iYnkiLCJDaGF0IiwiQ2hhbm5lbHMiLCJDaGFubmVsIiwiTWVzc2FnZXMiLCJNZXNzYWdlIiwiU2VuZGVycyIsIlNlbmRlciIsIkNoYW5uZWxVc2VyQ291bnQiLCJNc2dJZCIsIk1zZ0lkcyIsIlN1YnNjcmliZVJlc3VsdHMiLCJTdGF0dXMiLCJGcmllbmRzIiwiU2tpcE1lc3NhZ2UiLCJIaXN0b3J5TGVuZ3RoIiwiU3Vic2NyaWJlIiwiVW5zdWJzY3JpYmUiLCJQdWJsaXNoIiwiU2VuZFByaXZhdGUiLCJDaGFubmVsSGlzdG9yeSIsIlVwZGF0ZVN0YXR1cyIsIkFkZEZyaWVuZGRzIiwiUmVtb3ZlRnJpZW5kcyIsIkNoYXRNZXNzYWdlcyIsIlVzZXJzIiwiUHJpdmF0ZU1lc3NhZ2UiLCJGcmllbmRzTGlzdCIsIlN0YXR1c1VwZGF0ZSIsIlVzZXJTdGF0dXMiLCJPZmZsaW5lIiwiSW52aXNpYmxlIiwiT25saW5lIiwiQXdheSIsIkRuZCIsIkxmZyIsIlBsYXlpbmciLCJVc2VyU3RhdHVzVG9OYW1lIiwic3RhdHVzIiwic2VuZGVyIiwiZ2V0U2VuZGVyIiwiZ2V0Q29udGVudCIsImlzUHJpdmF0IiwiZ2V0TmFtZSIsImlzUHJpdmF0ZSIsImdldE1lc3NhZ2VzIiwiZ2V0TGFzdElkIiwibGFzdElkIiwiY2xlYXJNZXNzYWdlcyIsInNwbGljZSIsImFkZE1lc3NhZ2VzIiwic2VuZGVycyIsIm5ld01lc3NhZ2VzIiwiQ2hhdENsaWVudCIsInB1YmxpY0NoYW5uZWxzIiwicHJpdmF0ZUNoYW5uZWxzIiwic3Vic2NyaWJlUmVxdWVzdHMiLCJ1bnN1YnNjcmliZVJlcXVlc3RzIiwib25TdWJzY3JpYmVSZXN1bHQiLCJyZXN1bHRzIiwib25VbnN1YnNjcmliZVJlc3VsdCIsIm9uQ2hhdE1lc3NhZ2VzIiwiY2hhbm5lbE5hbWUiLCJvblByaXZhdGVNZXNzYWdlIiwib25Vc2VyU3RhdHVzVXBkYXRlIiwiZ290TWVzc2FnZSIsInN0YXR1c01lc3NhZ2UiLCJjb25uZWN0VG9SZWdpb25Gcm9udEVuZCIsImlzQ29ubmVjdGVkVG9Gcm9udEVuZCIsIkNoYXRTdGF0ZSIsIkNvbm5lY3RlZFRvRnJvbnRFbmQiLCJzdWJzY3JpYmUiLCJjaGFubmVsTmFtZXMiLCJoaXN0b3J5TGVuZ3RoIiwibGFzdElkcyIsInVuc3Vic2NyaWJlIiwicHVibGlzaE1lc3NhZ2UiLCJzZW5kUHJpdmF0ZU1lc3NhZ2UiLCJzZXRVc2VyU3RhdHVzIiwic2tpcE1lc3NhZ2UiLCJhZGRGcmllbmRzIiwidXNlcklkcyIsInJlbW92ZUZyaWVuZHMiLCJnZXRQdWJsaWNDaGFubmVscyIsImdldFByaXZhdGVDaGFubmVscyIsImdldE9yQWRkQ2hhbm5lbCIsImNoYW5uZWxzIiwiY2giLCJDaGF0UGVlckVycm9yQ29kZSIsIkZyb250RW5kRXJyb3IiLCJGcm9udEVuZENvbm5lY3RGYWlsZWQiLCJGcm9udEVuZENvbm5lY3RDbG9zZWQiLCJGcm9udEVuZFRpbWVvdXQiLCJGcm9udEVuZEVuY3J5cHRpb25Fc3RhYmxpc2hFcnJvciIsIkZyb250RW5kQXV0aGVudGljYXRpb25GYWlsZWQiLCJDb25uZWN0aW5nVG9Gcm9udEVuZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsU0FBUyxHQUFJLFVBQVEsU0FBS0EsU0FBZCxJQUE2QixZQUFZO0FBQ3JELE1BQUlDLGFBQWEsR0FBR0MsTUFBTSxDQUFDQyxjQUFQLElBQ2Y7QUFBRUMsSUFBQUEsU0FBUyxFQUFFO0FBQWIsZUFBNkJDLEtBQTdCLElBQXNDLFVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUFFRCxJQUFBQSxDQUFDLENBQUNGLFNBQUYsR0FBY0csQ0FBZDtBQUFrQixHQUQzRCxJQUVoQixVQUFVRCxDQUFWLEVBQWFDLENBQWIsRUFB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNnQjFzQixRQUFBQSxLQUFLLEVBQUUsQ0FBQyxDQWJXO0FBY25CZ1QsUUFBQUEsYUFBYSxFQUFFLENBZEk7QUFlbkI4RSxRQUFBQSxzQkFBc0IsRUFBRSxDQWZMO0FBZ0JuQjJHLFFBQUFBLHFCQUFxQixFQUFFLENBaEJKO0FBaUJuQjJQLFFBQUFBLG9CQUFvQixFQUFFLENBakJIO0FBa0JuQnpCLFFBQUFBLG1CQUFtQixFQUFFLENBbEJGO0FBbUJuQjNSLFFBQUFBLFlBQVksRUFBRTtBQW5CSyxPQUF2QjtBQXFCQSxhQUFPMFEsVUFBUDtBQUNILEtBbGMrQixDQWtjOUJ0cEIsTUFBTSxDQUFDMkosYUFBUCxDQUFxQjZGLG1CQWxjUyxDQUFoQzs7QUFtY0EwVyxJQUFBQSxJQUFJLENBQUNvRCxVQUFMLEdBQWtCQSxVQUFsQjtBQUNILEdBdmlCRCxFQXVpQkdwRCxJQUFJLEdBQUdsbUIsTUFBTSxDQUFDa21CLElBQVAsS0FBZ0JsbUIsTUFBTSxDQUFDa21CLElBQVAsR0FBYyxFQUE5QixDQXZpQlY7QUF3aUJILENBMWlCRCxFQTBpQkdsbUIsTUFBTSxLQUFLQSxNQUFNLEdBQUcsRUFBZCxDQTFpQlQ7O0FBNGlCQWlzQixNQUFNLENBQUNDLE9BQVAsR0FBaUJsc0IsTUFBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG4vLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8vIC0tLS0tLS0tLS0tLS0tLS0tLS0gRXhpdGdhbWVzLkNvbW1vblxyXG4vLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLyoqXHJcbiAgICBFeGl0Z2FtZXNcclxuICAgIEBuYW1lc3BhY2UgRXhpdGdhbWVzXHJcbiovXHJcbi8qKlxyXG4gICAgRXhpdGdhbWVzIHV0aWxpdGllc1xyXG4gICAgQG5hbWVzcGFjZSBFeGl0Z2FtZXMuQ29tbW9uXHJcbiovXHJcbnZhciBFeGl0Z2FtZXM7XHJcbihmdW5jdGlvbiAoRXhpdGdhbWVzKSB7XHJcbiAgICB2YXIgQ29tbW9uO1xyXG4gICAgKGZ1bmN0aW9uIChDb21tb24pIHtcclxuICAgICAgICB2YXIgTG9nZ2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBjbGFzc2Rlc2MgTG9nZ2VyIHdpdGggYWJpbGl0eSB0byBjb250cm9sIGxvZ2dpbmcgbGV2ZWwuXHJcbiAgICAgICAgICAgICAgICBQcmludHMgbWVzc2FnZXMgdG8gYnJvd3NlciBjb25zb2xlLlxyXG4gICAgICAgICAgICAgICAgRWFjaCBsb2dnaW5nIG1ldGhvZCBwZXJmb21zIHRvU3RyaW5nKCkgY2FsbHMgYW5kIGRlZmF1bHQgZm9ybWF0dGluZyBvZiBhcmd1bWVudHMgb25seSBhZnRlciBpdCBjaGVja3MgbG9nZ2luZyBsZXZlbC4gVGhlcmVmb3JlIGRpc2FibGVkIGxldmVsIGxvZ2dpbmcgbWV0aG9kIGNhbGwgd2l0aCBwbGFpbiBhcmd1bWVudHMgZG9lc24ndCBpbnZvbHZlcyBtdWNoIG92ZXJoZWFkLlxyXG4gICAgICAgICAgICAgICAgQnV0IGlmIG9uZSBwcmVmZXIgY3VzdG9tIGZvcm1hdHRpbmcgb3Igc29tZSBjYWxjdWxhdGlvbiBmb3IgbG9nZ2luZyBtZXRob2RzIGFyZ3VtZW50cyBoZSBzaG91bGQgY2hlY2sgbG9nZ2luZyBsZXZlbCBiZWZvcmUgZG9pbmcgdGhpcyB0byBhdm9pZCB1bm5lY2Vzc2FyeSBvcGVyYXRpb25zOlxyXG4gICAgICAgICAgICAgICAgaWYobG9nZ2VyLmlzTGV2ZWxFbmFibGVkKExvZ2dlci5MZXZlbC5ERUJVRykpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoXCJcIiwgc29tZUNhbGwoeCwgeSksIHggKyBcIixcIiArIHkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQGNvbnN0cnVjdG9yIEV4aXRnYW1lcy5Db21tb24uTG9nZ2VyXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge3N0cmluZ30gW3ByZWZpeD1cIlwiXSBBbGwgbG9nIG1lc3NhZ2VzIHdpbGwgYmUgcHJlZml4ZWQgd2l0aCB0aGF0LlxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtFeGl0Z2FtZXMuQ29tbW9uLkxvZ2dlci5MZXZlbH0gW2xldmVsPUxldmVsLklORk9dIEluaXRpYWwgbG9nZ2luZyBsZXZlbC5cclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZnVuY3Rpb24gTG9nZ2VyKHByZWZpeCwgbGV2ZWwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggPT09IHZvaWQgMCkgeyBwcmVmaXggPSBcIlwiOyB9XHJcbiAgICAgICAgICAgICAgICBpZiAobGV2ZWwgPT09IHZvaWQgMCkgeyBsZXZlbCA9IExvZ2dlci5MZXZlbC5JTkZPOyB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZWZpeCA9IHByZWZpeDtcclxuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IFNldHMgbG9nZ2VyIHByZWZpeC5cclxuICAgICAgICAgICAgICAgIEBtZXRob2QgRXhpdGdhbWVzLkNvbW1vbi5Mb2dnZXIjc2V0UHJlZml4XHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge3N0aXJuZ30gcHJlZml4IE5ldyBwcmVmaXguXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIExvZ2dlci5wcm90b3R5cGUuc2V0UHJlZml4ID0gZnVuY3Rpb24gKHByZWZpeCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVmaXggPSBwcmVmaXg7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgQHN1bW1hcnkgR2V0cyBsb2dnZXIgcHJlZml4LlxyXG4gICAgICAgICAgICAgICAgQG1ldGhvZCBFeGl0Z2FtZXMuQ29tbW9uLkxvZ2dlciNnZXRQcmVmaXhcclxuICAgICAgICAgICAgICAgIEByZXR1cm5zIHtzdHJpbmd9IFByZWZpeC5cclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTG9nZ2VyLnByb3RvdHlwZS5nZXRQcmVmaXggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcmVmaXg7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgQHN1bW1hcnkgQ2hhbmdlcyBjdXJyZW50IGxvZ2dpbmcgbGV2ZWwuXHJcbiAgICAgICAgICAgICAgICBAbWV0aG9kIEV4aXRnYW1lcy5Db21tb24uTG9nZ2VyI3NldExldmVsXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge0V4aXRnYW1lcy5Db21tb24uTG9nZ2VyLkxldmVsfSBsZXZlbCBOZXcgbG9nZ2luZyBsZXZlbC5cclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTG9nZ2VyLnByb3RvdHlwZS5zZXRMZXZlbCA9IGZ1bmN0aW9uIChsZXZlbCkge1xyXG4gICAgICAgICAgICAgICAgbGV2ZWwgPSBNYXRoLm1heChsZXZlbCwgTG9nZ2VyLkxldmVsLkRFQlVHKTtcclxuICAgICAgICAgICAgICAgIGxldmVsID0gTWF0aC5taW4obGV2ZWwsIExvZ2dlci5MZXZlbC5PRkYpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbCA9IGxldmVsO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IFNldHMgZ2xvYmFsIG1ldGhvZCB0byBiZSBjYWxsZWQgb24gbG9nZ2VyLmV4Y2VwdGlvbiBjYWxsLlxyXG4gICAgICAgICAgICAgICAgQG1ldGhvZCBFeGl0Z2FtZXMuQ29tbW9uLkxvZ2dlciNzZXRFeGNlcHRpb25IYW5kbGVyXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0geyhzdHJpbmcpID0+IGJvb2xlYW59IGhhbmRsZXIgRXhjZXB0aW9uIGhhbmRsZXIuIFJldHVybiB0cnVlIHRvIGNhbmNlbCB0aHJvd2luZy5cclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTG9nZ2VyLnNldEV4Y2VwdGlvbkhhbmRsZXIgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leGNlcHRpb25IYW5kbGVyID0gaGFuZGxlcjtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAc3VtbWFyeSBDaGVja3MgaWYgbG9nZ2luZyBsZXZlbCBhY3RpdmUuXHJcbiAgICAgICAgICAgICAgICBAbWV0aG9kIEV4aXRnYW1lcy5Db21tb24uTG9nZ2VyI2lzTGV2ZWxFbmFibGVkXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge0V4aXRnYW1lcy5Db21tb24uTG9nZ2VyLkxldmVsfSBsZXZlbCBMZXZlbCB0byBjaGVjay5cclxuICAgICAgICAgICAgICAgIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIGxldmVsIGFjdGl2ZS5cclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTG9nZ2VyLnByb3RvdHlwZS5pc0xldmVsRW5hYmxlZCA9IGZ1bmN0aW9uIChsZXZlbCkgeyByZXR1cm4gbGV2ZWwgPj0gdGhpcy5sZXZlbDsgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAc3VtbWFyeSBSZXR1cm5zIGN1cnJlbnQgbG9nZ2luZyBsZXZlbC5cclxuICAgICAgICAgICAgICAgIEBtZXRob2QgRXhpdGdhbWVzLkNvbW1vbi5Mb2dnZXIjZ2V0TGV2ZWxcclxuICAgICAgICAgICAgICAgIEByZXR1cm5zIHtFeGl0Z2FtZXMuQ29tbW9uLkxvZ2dlci5MZXZlbH0gQ3VycmVudCBsb2dnaW5nIGxldmVsLlxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBMb2dnZXIucHJvdG90eXBlLmdldExldmVsID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5sZXZlbDsgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAc3VtbWFyeSBMb2dzIG1lc3NhZ2UgaWYgbG9nZ2luZyBsZXZlbCA9IERFQlVHLCBJTkZPLCBXQVJOLCBFUlJPUlxyXG4gICAgICAgICAgICAgICAgQG1ldGhvZCBFeGl0Z2FtZXMuQ29tbW9uLkxvZ2dlciNkZWJ1Z1xyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtzdHJpbmd9IG1lc3MgTWVzc2FnZSB0byBsb2cuXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0gey4uLmFueX0gb3B0aW9uYWxQYXJhbXMgRm9yIGV2ZXJ5IGFkZGl0aW9uYWwgcGFyYW1ldGVyIHRvU3RyaW5nKCkgYXBwbGllcyBhbmQgcmVzdWx0IGFkZGVkIHRvIHRoZSBlbmQgb2YgbG9nIG1lc3NhZ2UgYWZ0ZXIgc3BhY2UgY2hhcmFjdGVyLlxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBMb2dnZXIucHJvdG90eXBlLmRlYnVnID0gZnVuY3Rpb24gKG1lc3MpIHtcclxuICAgICAgICAgICAgICAgIHZhciBvcHRpb25hbFBhcmFtcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25hbFBhcmFtc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubG9nKExvZ2dlci5MZXZlbC5ERUJVRywgbWVzcywgb3B0aW9uYWxQYXJhbXMpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IExvZ3MgbWVzc2FnZSBpZiBsb2dnaW5nIGxldmVsID0gSU5GTywgV0FSTiwgRVJST1JcclxuICAgICAgICAgICAgICAgIEBtZXRob2QgRXhpdGdhbWVzLkNvbW1vbi5Mb2dnZXIjaW5mb1xyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtzdHJpbmd9IG1lc3MgTWVzc2FnZSB0byBsb2cuXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0gey4uLmFueX0gb3B0aW9uYWxQYXJhbXMgRm9yIGV2ZXJ5IGFkZGl0aW9uYWwgcGFyYW1ldGVyIHRvU3RyaW5nKCkgYXBwbGllcyBhbmQgcmVzdWx0IGFkZGVkIHRvIHRoZSBlbmQgb2YgbG9nIG1lc3NhZ2UgYWZ0ZXIgc3BhY2UgY2hhcmFjdGVyLlxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBMb2dnZXIucHJvdG90eXBlLmluZm8gPSBmdW5jdGlvbiAobWVzcykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbmFsUGFyYW1zID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsUGFyYW1zW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2coTG9nZ2VyLkxldmVsLklORk8sIG1lc3MsIG9wdGlvbmFsUGFyYW1zKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAc3VtbWFyeSBMb2dzIG1lc3NhZ2UgaWYgbG9nZ2luZyBsZXZlbCA9IFdBUk4sIEVSUk9SXHJcbiAgICAgICAgICAgICAgICBAbWV0aG9kIEV4aXRnYW1lcy5Db21tb24uTG9nZ2VyI3dhcm5cclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7c3RyaW5nfSBtZXNzIE1lc3NhZ2UgdG8gbG9nLlxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHsuLi5hbnl9IG9wdGlvbmFsUGFyYW1zIEZvciBldmVyeSBhZGRpdGlvbmFsIHBhcmFtZXRlciB0b1N0cmluZygpIGFwcGxpZXMgYW5kIHJlc3VsdCBhZGRlZCB0byB0aGUgZW5kIG9mIGxvZyBtZXNzYWdlIGFmdGVyIHNwYWNlIGNoYXJhY3Rlci5cclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTG9nZ2VyLnByb3RvdHlwZS53YXJuID0gZnVuY3Rpb24gKG1lc3MpIHtcclxuICAgICAgICAgICAgICAgIHZhciBvcHRpb25hbFBhcmFtcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25hbFBhcmFtc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubG9nKExvZ2dlci5MZXZlbC5XQVJOLCBtZXNzLCBvcHRpb25hbFBhcmFtcyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgQHN1bW1hcnkgTG9ncyBtZXNzYWdlIGlmIGxvZ2dpbmcgbGV2ZWwgPSBFUlJPUlxyXG4gICAgICAgICAgICAgICAgQG1ldGhvZCBFeGl0Z2FtZXMuQ29tbW9uLkxvZ2dlciNlcnJvclxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtzdHJpbmd9IG1lc3MgTWVzc2FnZSB0byBsb2cuXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0gey4uLmFueX0gb3B0aW9uYWxQYXJhbXMgRm9yIGV2ZXJ5IGFkZGl0aW9uYWwgcGFyYW1ldGVyIHRvU3RyaW5nKCkgYXBwbGllcyBhbmQgcmVzdWx0IGFkZGVkIHRvIHRoZSBlbmQgb2YgbG9nIG1lc3NhZ2UgYWZ0ZXIgc3BhY2UgY2hhcmFjdGVyLlxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBMb2dnZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKG1lc3MpIHtcclxuICAgICAgICAgICAgICAgIHZhciBvcHRpb25hbFBhcmFtcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25hbFBhcmFtc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubG9nKExvZ2dlci5MZXZlbC5FUlJPUiwgbWVzcywgb3B0aW9uYWxQYXJhbXMpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IFRocm93cyBhbiBFcnJvciBvciBleGVjdXRlcyBleGNlcHRpb24gaGFuZGxlciBpZiBzZXQuXHJcbiAgICAgICAgICAgICAgICBAbWV0aG9kIEV4aXRnYW1lcy5Db21tb24uTG9nZ2VyI2V4Y2VwdGlvblxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtzdHJpbmd9IG1lc3MgTWVzc2FnZSBwYXNzZWQgdG8gRXJyb3Igb3IgZXhjZXB0aW9uIGhhbmRsZXIuXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0gey4uLmFueX0gb3B0aW9uYWxQYXJhbXMgRm9yIGV2ZXJ5IGFkZGl0aW9uYWwgcGFyYW1ldGVyIHRvU3RyaW5nKCkgYXBwbGllcyBhbmQgcmVzdWx0IGFkZGVkIHRvIHRoZSBlbmQgb2YgbG9nIG1lc3NhZ2UgYWZ0ZXIgc3BhY2UgY2hhcmFjdGVyLlxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBMb2dnZXIucHJvdG90eXBlLmV4Y2VwdGlvbiA9IGZ1bmN0aW9uIChjb2RlLCBtZXNzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9uYWxQYXJhbXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMjsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWxQYXJhbXNbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoTG9nZ2VyLmV4Y2VwdGlvbkhhbmRsZXIgJiYgTG9nZ2VyLmV4Y2VwdGlvbkhhbmRsZXIoY29kZSwgdGhpcy5mb3JtYXQwKG1lc3MsIG9wdGlvbmFsUGFyYW1zKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodGhpcy5mb3JtYXQwKFwiW1wiICsgY29kZSArIFwiXSBcIiArIG1lc3MsIG9wdGlvbmFsUGFyYW1zKSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgQHN1bW1hcnkgQXBwbGllcyBkZWZhdWx0IGxvZ2dlciBmb3JtYXR0aW5nIHRvIGFyZ3VtZW50c1xyXG4gICAgICAgICAgICAgICAgQG1ldGhvZCBFeGl0Z2FtZXMuQ29tbW9uLkxvZ2dlciNmb3JtYXRcclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7c3RyaW5nfSBtZXNzIFN0cmluZyB0byBzdGFydCBmb3JtYXR0aW5nIHdpdGguXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0gey4uLmFueX0gb3B0aW9uYWxQYXJhbXMgRm9yIGV2ZXJ5IGFkZGl0aW9uYWwgcGFyYW1ldGVyIHRvU3RyaW5nKCkgYXBwbGllcyBhbmQgcmVzdWx0IGFkZGVkIHRvIHRoZSBlbmQgb2YgZm9ybWF0dGVkIHN0cmluZyBhZnRlciBzcGFjZSBjaGFyYWN0ZXIuXHJcbiAgICAgICAgICAgICAgICBAcmV0dXJucyB7c3RyaW5nfSBGb3JtYXR0ZWQgc3RyaW5nLlxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBMb2dnZXIucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uIChtZXNzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9uYWxQYXJhbXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWxQYXJhbXNbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXQwKG1lc3MsIG9wdGlvbmFsUGFyYW1zKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAc3VtbWFyeSBBcHBsaWVzIGRlZmF1bHQgbG9nZ2VyIGZvcm1hdHRpbmcgdG8gYXJyYXkgb2Ygb2JqZWN0cy5cclxuICAgICAgICAgICAgICAgIEBtZXRob2QgRXhpdGdhbWVzLkNvbW1vbi5Mb2dnZXIjZm9ybWF0XHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge3N0cmluZ30gbWVzcyBTdHJpbmcgdG8gc3RhcnQgZm9ybWF0dGluZyB3aXRoLlxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHthbnlbXX0gb3B0aW9uYWxQYXJhbXMgRm9yIGV2ZXJ5IGFkZGl0aW9uYWwgcGFyYW1ldGVyIHRvU3RyaW5nKCkgYXBwbGllcyBhbmQgcmVzdWx0IGFkZGVkIHRvIHRoZSBlbmQgb2YgZm9ybWF0dGVkIHN0cmluZyBhZnRlciBzcGFjZSBjaGFyYWN0ZXIuXHJcbiAgICAgICAgICAgICAgICBAcmV0dXJucyB7c3RyaW5nfSBGb3JtYXR0ZWQgc3RyaW5nLlxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBMb2dnZXIucHJvdG90eXBlLmZvcm1hdEFyciA9IGZ1bmN0aW9uIChtZXNzLCBvcHRpb25hbFBhcmFtcykgeyByZXR1cm4gdGhpcy5mb3JtYXQwKG1lc3MsIG9wdGlvbmFsUGFyYW1zKTsgfTtcclxuICAgICAgICAgICAgTG9nZ2VyLnByb3RvdHlwZS5sb2cgPSBmdW5jdGlvbiAobGV2ZWwsIG1zZywgb3B0aW9uYWxQYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChsZXZlbCA+PSB0aGlzLmxldmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9yIGdsb2JhbCB2YXJzIGNvbnNvbGUgIT09IHVuZGVmaW5lZCB0aHJvd3MgYW4gZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIgJiYgbXNnICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsb2dNZXRob2QgPSBjb25zb2xlW0xvZ2dlci5sb2dfdHlwZXNbbGV2ZWxdXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbG9nTWV0aG9kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nTWV0aG9kID0gY29uc29sZVtcImxvZ1wiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2dNZXRob2QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dNZXRob2QuYXBwbHkoY29uc29sZSwgW3RoaXMucHJlZml4LCBtc2ddLmNvbmNhdChvcHRpb25hbFBhcmFtcykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2lsZW50bHkgZmFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBMb2dnZXIucHJvdG90eXBlLmZvcm1hdDAgPSBmdW5jdGlvbiAobXNnLCBvcHRpb25hbFBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGlzLnByZWZpeCA9PSBcIlwiID8gXCJcIiA6IHRoaXMucHJlZml4ICsgXCIgXCIpICsgbXNnICsgXCIgXCIgKyBvcHRpb25hbFBhcmFtcy5tYXAoZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodHlwZW9mIHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJvYmplY3RcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoeCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geC50b1N0cmluZygpICsgXCIoXCIgKyBlcnJvciArIFwiKVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHgudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLmpvaW4oXCIgXCIpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IExvZ2dpbmcgbGV2ZWxzLiBTZXQgdG8gcmVzdHJpY3QgbG9nIG91dHB1dC5cclxuICAgICAgICAgICAgICAgIEBtZW1iZXIgRXhpdGdhbWVzLkNvbW1vbi5Mb2dnZXIuTGV2ZWxcclxuICAgICAgICAgICAgICAgIEByZWFkb25seVxyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtudW1iZXJ9IERFQlVHIEFsbCBsb2dnaW5nIG1ldGhvZHMgZW5hYmxlZC5cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBJTkZPIGluZm8oLi4uKSwgd2FybiguLi4pLCBlcnJvciguLi4pIG1ldGhvZHMgZW5hYmxlZC5cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBXQVJOIHdhcm4oLi4uKSBhbmQgZXJyb3IoLi4uKSBtZXRob2RzIGVuYWJsZWQuXHJcbiAgICAgICAgICAgICAgICBAcHJvcGVydHkge251bWJlcn0gRVJST1IgT25seSBlcnJvciguLi4pIG1ldGhvZCBlbmFibGVkLlxyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtudW1iZXJ9IE9GRiBMb2dnaW5nIG9mZi5cclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTG9nZ2VyLkxldmVsID0ge1xyXG4gICAgICAgICAgICAgICAgLy9UUkFDRSA6IDAsXHJcbiAgICAgICAgICAgICAgICBERUJVRzogMSxcclxuICAgICAgICAgICAgICAgIElORk86IDIsXHJcbiAgICAgICAgICAgICAgICBXQVJOOiAzLFxyXG4gICAgICAgICAgICAgICAgRVJST1I6IDQsXHJcbiAgICAgICAgICAgICAgICAvL0ZBVEFMOiA1LFxyXG4gICAgICAgICAgICAgICAgT0ZGOiA2XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIExvZ2dlci5sb2dfdHlwZXMgPSBbXCJkZWJ1Z1wiLCBcImRlYnVnXCIsIFwiaW5mb1wiLCBcIndhcm5cIiwgXCJlcnJvclwiXTtcclxuICAgICAgICAgICAgcmV0dXJuIExvZ2dlcjtcclxuICAgICAgICB9KCkpO1xyXG4gICAgICAgIENvbW1vbi5Mb2dnZXIgPSBMb2dnZXI7XHJcbiAgICAgICAgdmFyIFV0aWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIFV0aWwoKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgVXRpbC5pbmRleE9mID0gZnVuY3Rpb24gKGFyciwgaXRlbSwgZnJvbSkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbCA9IGFyci5sZW5ndGgsIGkgPSBmcm9tIDwgMCA/IE1hdGgubWF4KDAsIGwgKyBmcm9tKSA6IGZyb20gfHwgMDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhcnJbaV0gPT09IGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBVdGlsLmlzQXJyYXkgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09IFwiW29iamVjdCBBcnJheV1cIjtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLy9UT0RPOiBuYW1pbmcuIGNvdWxkIGJlIG5hbWVkIG1lcmdlSGFzaHRhYmxlIG9yIHNvbWV0aGluZyBtb3JlIHNwZWNpZmljXHJcbiAgICAgICAgICAgIFV0aWwubWVyZ2UgPSBmdW5jdGlvbiAodGFyZ2V0LCBhZGRpdGlvbmFsKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIGFkZGl0aW9uYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWRkaXRpb25hbC5oYXNPd25Qcm9wZXJ0eShpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRbaV0gPSBhZGRpdGlvbmFsW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgVXRpbC5nZXRQcm9wZXJ0eU9yRWxzZSA9IGZ1bmN0aW9uIChvYmosIHByb3AsIGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmpbcHJvcF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBVdGlsLmVudW1WYWx1ZVRvTmFtZSA9IGZ1bmN0aW9uIChlbnVtT2JqLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBlbnVtT2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09IGVudW1PYmpbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwidW5kZWZpbmVkXCI7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIFV0aWwuZ2V0RW51bUtleUJ5VmFsdWUgPSBmdW5jdGlvbiAoZW51bU9iaiwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gZW51bU9iaikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBlbnVtT2JqW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBVdGlsO1xyXG4gICAgICAgIH0oKSk7XHJcbiAgICAgICAgQ29tbW9uLlV0aWwgPSBVdGlsO1xyXG4gICAgfSkoQ29tbW9uID0gRXhpdGdhbWVzLkNvbW1vbiB8fCAoRXhpdGdhbWVzLkNvbW1vbiA9IHt9KSk7XHJcbn0pKEV4aXRnYW1lcyB8fCAoRXhpdGdhbWVzID0ge30pKTtcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cInBob3Rvbi1jb21tb24udHNcIi8+XHJcbi8qKlxyXG4gICAgUGhvdG9uXHJcbiAgICBAbmFtZXNwYWNlIFBob3RvblxyXG4qL1xyXG52YXIgUGhvdG9uO1xyXG4oZnVuY3Rpb24gKFBob3Rvbikge1xyXG4gICAgLyoqXHJcbiAgICAgICAgQHN1bW1hcnkgVGhlc2UgYXJlIHRoZSBvcHRpb25zIHRoYXQgY2FuIGJlIHVzZWQgYXMgdW5kZXJseWluZyB0cmFuc3BvcnQgcHJvdG9jb2wuXHJcbiAgICAgICAgQG1lbWJlciBQaG90b24uQ29ubmVjdGlvblByb3RvY29sXHJcbiAgICAgICAgQHJlYWRvbmx5XHJcbiAgICAgICAgQHByb3BlcnR5IHtudW1iZXJ9IFdzIFdlYlNvY2tldHMgY29ubmVjdGlvbi5cclxuICAgICAgICBAcHJvcGVydHkge251bWJlcn0gV3NzIFdlYlNvY2tldHMgU2VjdXJlIGNvbm5lY3Rpb24uXHJcbiAgICAqKi9cclxuICAgIHZhciBDb25uZWN0aW9uUHJvdG9jb2w7XHJcbiAgICAoZnVuY3Rpb24gKENvbm5lY3Rpb25Qcm90b2NvbCkge1xyXG4gICAgICAgIENvbm5lY3Rpb25Qcm90b2NvbFtDb25uZWN0aW9uUHJvdG9jb2xbXCJXc1wiXSA9IDBdID0gXCJXc1wiO1xyXG4gICAgICAgIENvbm5lY3Rpb25Qcm90b2NvbFtDb25uZWN0aW9uUHJvdG9jb2xbXCJXc3NcIl0gPSAxXSA9IFwiV3NzXCI7XHJcbiAgICB9KShDb25uZWN0aW9uUHJvdG9jb2wgPSBQaG90b24uQ29ubmVjdGlvblByb3RvY29sIHx8IChQaG90b24uQ29ubmVjdGlvblByb3RvY29sID0ge30pKTtcclxuICAgIC8vIFN0dWJzIGZvciBleHRlbmRlZCB0eXBlcyB1c2VkIGJ5IHBob3Rvbi1wZWVyLWVtIChlbXNjcmlwdGVuKVxyXG4gICAgdmFyIFR5cGVFeHRUeXBlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIFR5cGVFeHRUeXBlKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gVHlwZUV4dFR5cGU7XHJcbiAgICB9KCkpO1xyXG4gICAgUGhvdG9uLlR5cGVFeHRUeXBlID0gVHlwZUV4dFR5cGU7XHJcbiAgICB2YXIgVHlwZUV4dCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmdW5jdGlvbiBUeXBlRXh0KCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBUeXBlRXh0LklzID0gZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgVHlwZUV4dC5CeXRlID0gZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHg7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBUeXBlRXh0LlNob3J0ID0gZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHg7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBUeXBlRXh0LkludCA9IGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB4O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgVHlwZUV4dC5Mb25nID0gZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHg7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBUeXBlRXh0LkZsb2F0ID0gZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHg7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBUeXBlRXh0LkRvdWJsZSA9IGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB4O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgVHlwZUV4dC5TdHJpbmcgPSBmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgICAgICByZXR1cm4geDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFR5cGVFeHQuQm9vbCA9IGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB4O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgVHlwZUV4dC5EaWN0ID0gZnVuY3Rpb24gKHQxLCB0MiwgeCkge1xyXG4gICAgICAgICAgICByZXR1cm4geDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBUeXBlRXh0O1xyXG4gICAgfSgpKTtcclxuICAgIFBob3Rvbi5UeXBlRXh0ID0gVHlwZUV4dDtcclxuICAgIHZhciBQaG90b25QZWVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAgICBAY2xhc3NkZXNjIEluc3RhbmNlcyBvZiB0aGUgUGhvdG9uUGVlciBjbGFzcyBhcmUgdXNlZCB0byBjb25uZWN0IHRvIGEgUGhvdG9uIHNlcnZlciBhbmQgY29tbXVuaWNhdGUgd2l0aCBpdC5cclxuICAgICAgICAgICAgQSBQaG90b25QZWVyIGluc3RhbmNlIGFsbG93cyBjb21tdW5pY2F0aW9uIHdpdGggdGhlIFBob3RvbiBTZXJ2ZXIsIHdoaWNoIGluIHR1cm4gZGlzdHJpYnV0ZXMgbWVzc2FnZXMgdG8gb3RoZXIgUGhvdG9uUGVlciBjbGllbnRzLlxyXG4gICAgICAgICAgICBBbiBhcHBsaWNhdGlvbiBjYW4gdXNlIG1vcmUgdGhhbiBvbmUgUGhvdG9uUGVlciBpbnN0YW5jZSwgd2hpY2ggYXJlIHRyZWF0ZWQgYXMgc2VwYXJhdGUgdXNlcnMgb24gdGhlIHNlcnZlci5cclxuICAgICAgICAgICAgRWFjaCBzaG91bGQgaGF2ZSBpdHMgb3duIGxpc3RlbmVyIGluc3RhbmNlLCB0byBzZXBhcmF0ZSB0aGUgb3BlcmF0aW9ucywgY2FsbGJhY2tzIGFuZCBldmVudHMuXHJcbiAgICAgICAgICAgIEBjb25zdHJ1Y3RvciBQaG90b24uUGhvdG9uUGVlclxyXG4gICAgICAgICAgICBAcGFyYW0ge1Bob3Rvbi5Db25uZWN0aW9uUHJvdG9jb2x9IHByb3RvY29sIENvbm5lY3Rpb24gcHJvdG9jb2wuXHJcbiAgICAgICAgICAgIEBwYXJhbSB7c3RyaW5nfSBhZGRyZXNzIFNlcnZlciBhZGRyZXNzOnBvcnQuXHJcbiAgICAgICAgICAgIEBwYXJhbSB7c3RyaW5nfSBbc3VicHJvdG9jb2w9XCJcIl0gV2ViU29ja2V0IHByb3RvY29sLlxyXG4gICAgICAgICAgICBAcGFyYW0ge3N0cmluZ30gW2RlYnVnTmFtZT1cIlwiXSBMb2cgbWVzc2FnZXMgcHJlZml4ZWQgd2l0aCB0aGlzIHZhbHVlLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gUGhvdG9uUGVlcihwcm90b2NvbCwgYWRkcmVzcywgc3VicHJvdG9jb2wsIGRlYnVnTmFtZSkge1xyXG4gICAgICAgICAgICBpZiAoc3VicHJvdG9jb2wgPT09IHZvaWQgMCkgeyBzdWJwcm90b2NvbCA9IFwiXCI7IH1cclxuICAgICAgICAgICAgaWYgKGRlYnVnTmFtZSA9PT0gdm9pZCAwKSB7IGRlYnVnTmFtZSA9IFwiXCI7IH1cclxuICAgICAgICAgICAgdGhpcy5wcm90b2NvbCA9IHByb3RvY29sO1xyXG4gICAgICAgICAgICB0aGlzLmFkZHJlc3MgPSBhZGRyZXNzO1xyXG4gICAgICAgICAgICB0aGlzLnN1YnByb3RvY29sID0gc3VicHJvdG9jb2w7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgQHN1bW1hcnkgUGVlciBzZW5kcyAna2VlcCBhbGl2ZScgbWVzc2FnZSB0byBzZXJ2ZXIgYXMgdGhpcyB0aW1lb3V0IGV4Y2VlZGVkIGFmdGVyIGxhc3Qgc2VuZCBvcGVyYXRpb24uXHJcbiAgICAgICAgICAgICAgICBTZXQgaXQgPCAxMDAwIHRvIGRpc2FibGUgJ2tlZXAgYWxpdmUnIG9wZXJhdGlvblxyXG4gICAgICAgICAgICAgICAgQG1lbWJlciBQaG90b24uUGhvdG9uUGVlciNrZWVwQWxpdmVUaW1lb3V0TXNcclxuICAgICAgICAgICAgICAgIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgICAgICAgICAgICBAZGVmYXVsdCAzMDAwXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHRoaXMua2VlcEFsaXZlVGltZW91dE1zID0gMzAwMDtcclxuICAgICAgICAgICAgdGhpcy5fZnJhbWUgPSBcIn5tflwiO1xyXG4gICAgICAgICAgICB0aGlzLl9pc0Nvbm5lY3RpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5faXNDb25uZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5faXNDbG9zaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuX3BlZXJTdGF0dXNMaXN0ZW5lcnMgPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnMgPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5fcmVzcG9uc2VMaXN0ZW5lcnMgPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0UnR0ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5pbml0VGltZXN0YW1wID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgdGhpcy5rZWVwQWxpdmVUaW1lciA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMudXJsID0gdGhpcy5hZGRQcm90b2NvbFByZWZpeCh0aGlzLmFkZHJlc3MsIHRoaXMucHJvdG9jb2wpO1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIgPSBuZXcgRXhpdGdhbWVzLkNvbW1vbi5Mb2dnZXIoZGVidWdOYW1lICYmIGRlYnVnTmFtZSAhPSBcIlwiID8gZGVidWdOYW1lICsgXCI6XCIgOiBcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgUGhvdG9uUGVlci5wcm90b3R5cGUuYWRkUHJvdG9jb2xQcmVmaXggPSBmdW5jdGlvbiAoYWRkcmVzcywgcHJvdG9jb2wpIHtcclxuICAgICAgICAgICAgdmFyIHByb3RvY29sUHJlZml4ID0ge1xyXG4gICAgICAgICAgICAgICAgd3M6IFwid3M6Ly9cIixcclxuICAgICAgICAgICAgICAgIHdzczogXCJ3c3M6Ly9cIlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBmb3IgKHZhciBrIGluIHByb3RvY29sUHJlZml4KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWRkcmVzcy5pbmRleE9mKHByb3RvY29sUHJlZml4W2tdKSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFkZHJlc3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3dpdGNoIChwcm90b2NvbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBDb25uZWN0aW9uUHJvdG9jb2wuV3M6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb3RvY29sUHJlZml4LndzICsgYWRkcmVzcztcclxuICAgICAgICAgICAgICAgIGNhc2UgQ29ubmVjdGlvblByb3RvY29sLldzczpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvdG9jb2xQcmVmaXgud3NzICsgYWRkcmVzcztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6Ly8gZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvdG9jb2xQcmVmaXgud3MgKyBhZGRyZXNzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBQaG90b25QZWVyLnByb3RvdHlwZS5EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICAgIEBzdW1tYXJ5IENoZWNrcyBpZiBwZWVyIGlzIGNvbm5lY3RpbmcuXHJcbiAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLlBob3RvblBlZXIjaXNDb25uZWN0aW5nXHJcbiAgICAgICAgICAgIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHBlZXIgaXMgY29ubmVjdGluZy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIFBob3RvblBlZXIucHJvdG90eXBlLmlzQ29ubmVjdGluZyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2lzQ29ubmVjdGluZzsgfTtcclxuICAgICAgICBQaG90b25QZWVyLnByb3RvdHlwZS5nZXRMYXN0UnR0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5sYXN0UnR0OyB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAgICBAc3VtbWFyeSBDaGVja3MgaWYgcGVlciBpcyBjb25uZWN0ZWQuXHJcbiAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLlBob3RvblBlZXIjaXNDb25uZWN0ZWRcclxuICAgICAgICAgICAgQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgcGVlciBpcyBjb25uZWN0ZWQuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBQaG90b25QZWVyLnByb3RvdHlwZS5pc0Nvbm5lY3RlZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2lzQ29ubmVjdGVkOyB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAgICBAc3VtbWFyeSBDaGVja3MgaWYgcGVlciBpcyBjbG9zaW5nLlxyXG4gICAgICAgICAgICBAbWV0aG9kIFBob3Rvbi5QaG90b25QZWVyI2lzQ2xvc2luZ1xyXG4gICAgICAgICAgICBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBwZWVyIGlzIGNsb3NpbmcuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBQaG90b25QZWVyLnByb3RvdHlwZS5pc0Nsb3NpbmcgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9pc0Nsb3Npbmc7IH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICAgIEBzdW1tYXJ5IFN0YXJ0cyBjb25uZWN0aW9uIHRvIHNlcnZlci5cclxuICAgICAgICAgICAgQG1ldGhvZCBQaG90b24uUGhvdG9uUGVlciNjb25uZWN0XHJcbiAgICAgICAgKi9cclxuICAgICAgICBQaG90b25QZWVyLnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gKGFwcGlkKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMuX3Nlc3Npb25pZCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgdmFyIHVybCA9IHRoaXMudXJsICsgXCIvXCIgKyBhcHBpZCArIFwiP2xpYnZlcnNpb249NC4xLjAuMFwiO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdWJwcm90b2NvbCA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zb2NrZXQgPSBuZXcgV2ViU29ja2V0KHVybCwgXCJKc29uXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc29ja2V0ID0gbmV3IFdlYlNvY2tldCh1cmwsIHRoaXMuc3VicHJvdG9jb2wpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX29uQ29ubmVjdGluZygpO1xyXG4gICAgICAgICAgICAvLyBTZXQgZXZlbnQgaGFuZGxlcnMuXHJcbiAgICAgICAgICAgIHRoaXMuX3NvY2tldC5vbm9wZW4gPSBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5sb2dnZXIuZGVidWcoXCJvbm9wZW5cIik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuX3NvY2tldC5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gX3RoaXMuX2RlY29kZShldi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLl9vbk1lc3NhZ2UobWVzc2FnZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5fc29ja2V0Lm9uY2xvc2UgPSBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLl9sb2dnZXIuZGVidWcoXCJvbmNsb3NlOiB3YXNDbGVhbiA9XCIsIGV2Lndhc0NsZWFuLCBcIiwgY29kZT1cIiwgZXYuY29kZSwgXCIsIHJlYXNvbiA9XCIsIGV2LnJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuX2lzQ29ubmVjdGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9vbkNvbm5lY3RGYWlsZWQoZXYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKDEwMDYgPT0gZXYuY29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fb25UaW1lb3V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9vbkRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5fc29ja2V0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLl9vbkVycm9yKGV2KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAgICBAc3VtbWFyeSBEaXNjb25uZWN0cyBmcm9tIHNlcnZlci5cclxuICAgICAgICAgICAgQG1ldGhvZCBQaG90b24uUGhvdG9uUGVlciNkaXNjb25uZWN0XHJcbiAgICAgICAgKi9cclxuICAgICAgICBQaG90b25QZWVyLnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pc0Nsb3NpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLl9zb2NrZXQuY2xvc2UoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAgICBAc3VtbWFyeSBTZW5kcyBvcGVyYXRpb24gdG8gdGhlIFBob3RvbiBTZXJ2ZXIuXHJcbiAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLlBob3RvblBlZXIjc2VuZE9wZXJhdGlvblxyXG4gICAgICAgICAgICBAcGFyYW0ge251bWJlcn0gY29kZSBDb2RlIG9mIG9wZXJhdGlvbi5cclxuICAgICAgICAgICAgQHBhcmFtIHtvYmplY3R9IFtkYXRhXSBQYXJhbWV0ZXJzIG9mIG9wZXJhdGlvbiBhcyBhIGZsYXR0ZW5lZCBhcnJheSBvZiBrZXktdmFsdWUgcGFpcnM6IFtrZXkxLCB2YWx1ZTEsIGtleTIsIHZhbHVlMi4uLl1cclxuICAgICAgICAgICAgQHBhcmFtIHtib29sZWFufSBbc2VuZFJlbGlhYmxlPWZhbHNlXSBTZWxlY3RzIGlmIHRoZSBvcGVyYXRpb24gbXVzdCBiZSBhY2tub3dsZWRnZWQgb3Igbm90LiBJZiBmYWxzZSwgdGhlIG9wZXJhdGlvbiBpcyBub3QgZ3VhcmFudGVlZCB0byByZWFjaCB0aGUgc2VydmVyLlxyXG4gICAgICAgICAgICBAcGFyYW0ge251bWJlcn0gW2NoYW5uZWxJZD0wXSBUaGUgY2hhbm5lbCBpbiB3aGljaCB0aGlzIG9wZXJhdGlvbiBzaG91bGQgYmUgc2VudC5cclxuICAgICAgICAqL1xyXG4gICAgICAgIFBob3RvblBlZXIucHJvdG90eXBlLnNlbmRPcGVyYXRpb24gPSBmdW5jdGlvbiAoY29kZSwgZGF0YSwgc2VuZFJlbGlhYmxlLCBjaGFubmVsSWQpIHtcclxuICAgICAgICAgICAgaWYgKHNlbmRSZWxpYWJsZSA9PT0gdm9pZCAwKSB7IHNlbmRSZWxpYWJsZSA9IGZhbHNlOyB9XHJcbiAgICAgICAgICAgIGlmIChjaGFubmVsSWQgPT09IHZvaWQgMCkgeyBjaGFubmVsSWQgPSAwOyB9XHJcbiAgICAgICAgICAgIHZhciBzbmRKU09OID0geyBcInJlcVwiOiBjb2RlLCBcInZhbHNcIjogW10gfTtcclxuICAgICAgICAgICAgaWYgKEV4aXRnYW1lcy5Db21tb24uVXRpbC5pc0FycmF5KGRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICBzbmRKU09OW1widmFsc1wiXSA9IGRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc25kSlNPTltcInZhbHNcIl0gPSBbXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5leGNlcHRpb24oMjAxLCBcIlBob3RvblBlZXJbc2VuZE9wZXJhdGlvbl0gLSBUcnlpbmcgdG8gc2VuZCBub24gYXJyYXkgZGF0YTpcIiwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fc2VuZChzbmRKU09OKTtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmRlYnVnKFwiUGhvdG9uUGVlcltzZW5kT3BlcmF0aW9uXSAtIFNlbmRpbmcgcmVxdWVzdDpcIiwgc25kSlNPTik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgICAgQHN1bW1hcnkgUmVnaXN0ZXJzIGxpc3RlbmVyIGZvciBwZWVyIHN0YXR1cyBjaGFuZ2UuXHJcbiAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLlBob3RvblBlZXIjYWRkUGVlclN0YXR1c0xpc3RlbmVyXHJcbiAgICAgICAgICAgIEBwYXJhbSB7UGhvdG9uUGVlci5TdGF0dXNDb2Rlc30gc3RhdHVzQ29kZSBTdGF0dXMgY2hhbmdlIHRvIHRoaXMgdmFsdWUgd2lsbCBiZSBsaXN0ZW5pbmcuXHJcbiAgICAgICAgICAgIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBsaXN0ZW5lciBmdW5jdGlvbiB0aGF0IHByb2Nlc3NlcyB0aGUgc3RhdHVzIGNoYW5nZS4gVGhpcyBmdW5jdGlvbiBkb24ndCBhY2NlcHQgYW55IHBhcmFtZXRlcnMuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBQaG90b25QZWVyLnByb3RvdHlwZS5hZGRQZWVyU3RhdHVzTGlzdGVuZXIgPSBmdW5jdGlvbiAoc3RhdHVzQ29kZSwgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5fYWRkTGlzdGVuZXIodGhpcy5fcGVlclN0YXR1c0xpc3RlbmVycywgc3RhdHVzQ29kZSwgY2FsbGJhY2spO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICAgIEBzdW1tYXJ5IFJlZ2lzdGVycyBsaXN0ZW5lciBmb3IgY3VzdG9tIGV2ZW50LlxyXG4gICAgICAgICAgICBAbWV0aG9kIFBob3Rvbi5QaG90b25QZWVyI2FkZEV2ZW50TGlzdGVuZXJcclxuICAgICAgICAgICAgQHBhcmFtIHtudW1iZXJ9IGV2ZW50Q29kZSBDdXN0b20gZXZlbnQgY29kZS5cclxuICAgICAgICAgICAgQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGxpc3RlbmVyIGZ1bmN0aW9uIHRoYXQgcHJvY2Vzc2VzIHRoZSBldmVudC4gVGhpcyBmdW5jdGlvbiBtYXkgYWNjZXB0IG9iamVjdCB3aXRoIGV2ZW50IGNvbnRlbnQuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBQaG90b25QZWVyLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50Q29kZSwgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5fYWRkTGlzdGVuZXIodGhpcy5fZXZlbnRMaXN0ZW5lcnMsIGV2ZW50Q29kZS50b1N0cmluZygpLCBjYWxsYmFjayk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgICAgQHN1bW1hcnkgUmVnaXN0ZXJzIGxpc3RlbmVyIGZvciBvcGVyYXRpb24gcmVzcG9uc2UuXHJcbiAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLlBob3RvblBlZXIjYWRkUmVzcG9uc2VMaXN0ZW5lclxyXG4gICAgICAgICAgICBAcGFyYW0ge251bWJlcn0gb3BlcmF0aW9uQ29kZSBPcGVyYXRpb24gY29kZS5cclxuICAgICAgICAgICAgQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGxpc3RlbmVyIGZ1bmN0aW9uIHRoYXQgcHJvY2Vzc2VzIHRoZSBldmVudC4gVGhpcyBmdW5jdGlvbiBtYXkgYWNjZXB0IG9iamVjdCB3aXRoIG9wZXJhdGlvbiByZXNwb25zZSBjb250ZW50LlxyXG4gICAgICAgICovXHJcbiAgICAgICAgUGhvdG9uUGVlci5wcm90b3R5cGUuYWRkUmVzcG9uc2VMaXN0ZW5lciA9IGZ1bmN0aW9uIChvcGVyYXRpb25Db2RlLCBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLl9hZGRMaXN0ZW5lcih0aGlzLl9yZXNwb25zZUxpc3RlbmVycywgb3BlcmF0aW9uQ29kZS50b1N0cmluZygpLCBjYWxsYmFjayk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgICAgQHN1bW1hcnkgUmVtb3ZlcyBsaXN0ZW5lciBpZiBleGlzdHMgZm9yIHBlZXIgc3RhdHVzIGNoYW5nZS5cclxuICAgICAgICAgICAgQG1ldGhvZCBQaG90b24uUGhvdG9uUGVlciNyZW1vdmVQZWVyU3RhdHVzTGlzdGVuZXJcclxuICAgICAgICAgICAgQHBhcmFtIHtzdHJpbmd9IHN0YXR1c0NvZGUgT25lIG9mIFBob3RvblBlZXIuU3RhdHVzQ29kZXMgdG8gcmVtb3ZlIGxpc3RlbmVyIGZvci5cclxuICAgICAgICAgICAgQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgTGlzdGVuZXIgdG8gcmVtb3ZlLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgUGhvdG9uUGVlci5wcm90b3R5cGUucmVtb3ZlUGVlclN0YXR1c0xpc3RlbmVyID0gZnVuY3Rpb24gKHN0YXR1c0NvZGUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbW92ZUxpc3RlbmVyKHRoaXMuX3BlZXJTdGF0dXNMaXN0ZW5lcnMsIHN0YXR1c0NvZGUsIGNhbGxiYWNrKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAgICBAc3VtbWFyeSBSZW1vdmVzIGxpc3RlbmVyIGlmIGV4aXN0cyBmb3IgY3VzdG9tIGV2ZW50LlxyXG4gICAgICAgICAgICBAbWV0aG9kIFBob3Rvbi5QaG90b25QZWVyI3JlbW92ZUV2ZW50TGlzdGVuZXJcclxuICAgICAgICAgICAgQHBhcmFtIHtudW1iZXJ9IGV2ZW50Q29kZSBFdmVudCBjb2RlIHRvIHJlbW92ZSB0byByZW1vdmUgbGlzdGVuZXIgZm9yLlxyXG4gICAgICAgICAgICBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBMaXN0ZW5lciB0byByZW1vdmUuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBQaG90b25QZWVyLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50Q29kZSwgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVtb3ZlTGlzdGVuZXIodGhpcy5fZXZlbnRMaXN0ZW5lcnMsIGV2ZW50Q29kZS50b1N0cmluZygpLCBjYWxsYmFjayk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgICAgQHN1bW1hcnkgUmVtb3ZlcyBsaXN0ZW5lciBpZiBleGlzdHMgZm9yIG9wZXJhdGlvbiByZXNwb25zZS5cclxuICAgICAgICAgICAgQG1ldGhvZCBQaG90b24uUGhvdG9uUGVlciNyZW1vdmVSZXNwb25zZUxpc3RlbmVyXHJcbiAgICAgICAgICAgIEBwYXJhbSB7bnVtYmVyfSBvcGVyYXRpb25Db2RlIE9wZXJhdGlvbiBjb2RlIHRvIHJlbW92ZSBsaXN0ZW5lciBmb3IuXHJcbiAgICAgICAgICAgIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIExpc3RlbmVyIHRvIHJlbW92ZS5cclxuICAgICAgICAqL1xyXG4gICAgICAgIFBob3RvblBlZXIucHJvdG90eXBlLnJlbW92ZVJlc3BvbnNlTGlzdGVuZXIgPSBmdW5jdGlvbiAob3BlcmF0aW9uQ29kZSwgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVtb3ZlTGlzdGVuZXIodGhpcy5fcmVzcG9uc2VMaXN0ZW5lcnMsIG9wZXJhdGlvbkNvZGUudG9TdHJpbmcoKSwgY2FsbGJhY2spO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICAgIEBzdW1tYXJ5IFJlbW92ZXMgYWxsIGxpc3RlbmVycyBmb3IgcGVlciBzdGF0dXMgY2hhbmdlIHNwZWNpZmllZC5cclxuICAgICAgICAgICAgQG1ldGhvZCBQaG90b24uUGhvdG9uUGVlciNyZW1vdmVQZWVyU3RhdHVzTGlzdGVuZXJzRm9yQ29kZVxyXG4gICAgICAgICAgICBAcGFyYW0ge3N0cmluZ30gc3RhdHVzQ29kZSBPbmUgb2YgUGhvdG9uUGVlci5TdGF0dXNDb2RlcyB0byByZW1vdmUgYWxsIGxpc3RlbmVycyBmb3IuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBQaG90b25QZWVyLnByb3RvdHlwZS5yZW1vdmVQZWVyU3RhdHVzTGlzdGVuZXJzRm9yQ29kZSA9IGZ1bmN0aW9uIChzdGF0dXNDb2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbW92ZUxpc3RlbmVyc0ZvckNvZGUodGhpcy5fcGVlclN0YXR1c0xpc3RlbmVycywgc3RhdHVzQ29kZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgICAgQHN1bW1hcnkgUmVtb3ZlcyBhbGwgbGlzdGVuZXJzIGZvciBjdXN0b20gZXZlbnQgc3BlY2lmaWVkLlxyXG4gICAgICAgICAgICBAbWV0aG9kIFBob3Rvbi5QaG90b25QZWVyI3JlbW92ZUV2ZW50TGlzdGVuZXJzRm9yQ29kZVxyXG4gICAgICAgICAgICBAcGFyYW0ge251bWJlcn0gZXZlbnRDb2RlIEV2ZW50IGNvZGUgdG8gcmVtb3ZlIGFsbCBsaXN0ZW5lcnMgZm9yLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgUGhvdG9uUGVlci5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lcnNGb3JDb2RlID0gZnVuY3Rpb24gKGV2ZW50Q29kZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9yZW1vdmVMaXN0ZW5lcnNGb3JDb2RlKHRoaXMuX2V2ZW50TGlzdGVuZXJzLCBldmVudENvZGUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgICAgQHN1bW1hcnkgUmVtb3ZlcyBhbGwgbGlzdGVuZXJzIGZvciBvcGVyYXRpb24gcmVzcG9uc2Ugc3BlY2lmaWVkLlxyXG4gICAgICAgICAgICBAbWV0aG9kIFBob3Rvbi5QaG90b25QZWVyI3JlbW92ZVJlc3BvbnNlTGlzdGVuZXJzRm9yQ29kZVxyXG4gICAgICAgICAgICBAcGFyYW0ge251bWJlcn0gb3BlcmF0aW9uQ29kZSBPcGVyYXRpb24gY29kZSB0byByZW1vdmUgYWxsIGxpc3RlbmVycyBmb3IuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBQaG90b25QZWVyLnByb3RvdHlwZS5yZW1vdmVSZXNwb25zZUxpc3RlbmVyc0ZvckNvZGUgPSBmdW5jdGlvbiAob3BlcmF0aW9uQ29kZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9yZW1vdmVMaXN0ZW5lcnNGb3JDb2RlKHRoaXMuX3Jlc3BvbnNlTGlzdGVuZXJzLCBvcGVyYXRpb25Db2RlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICAgIEBzdW1tYXJ5IFNldHMgcGVlciBsb2dnZXIgbGV2ZWwuXHJcbiAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLlBob3RvblBlZXIjc2V0TG9nTGV2ZWxcclxuICAgICAgICAgICAgQHBhcmFtIHtFeGl0Z2FtZXMuQ29tbW9uLkxvZ2dlci5MZXZlbH0gbGV2ZWwgTG9nZ2luZyBsZXZlbC5cclxuICAgICAgICAqL1xyXG4gICAgICAgIFBob3RvblBlZXIucHJvdG90eXBlLnNldExvZ0xldmVsID0gZnVuY3Rpb24gKGxldmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5zZXRMZXZlbChsZXZlbCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgICAgQHN1bW1hcnkgQ2FsbGVkIGlmIG5vIGxpc3RlbmVyIGZvdW5kIGZvciByZWNlaXZlZCBjdXN0b20gZXZlbnQuXHJcbiAgICAgICAgICAgIE92ZXJyaWRlIHRvIHJlbGF5IHVua25vd24gZXZlbnQgdG8gdXNlcidzIGNvZGUgb3IgaGFuZGxlIGtub3duIGV2ZW50cyB3aXRob3V0IGxpc3RlbmVyIHJlZ2lzdHJhdGlvbi5cclxuICAgICAgICAgICAgQG1ldGhvZCBQaG90b24uUGhvdG9uUGVlciNvblVuaGFuZGxlZEV2ZW50XHJcbiAgICAgICAgICAgIEBwYXJhbSB7bnVtYmVyfSBldmVudENvZGUgQ29kZSBvZiByZWNlaXZlZCBldmVudC5cclxuICAgICAgICAgICAgQHBhcmFtIHtvYmplY3R9IFthcmdzXSBDb250ZW50IG9mIHJlY2VpdmVkIGV2ZW50IG9yIGVtcHR5IG9iamVjdC5cclxuICAgICAgICAqL1xyXG4gICAgICAgIFBob3RvblBlZXIucHJvdG90eXBlLm9uVW5oYW5kbGVkRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnRDb2RlLCBhcmdzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci53YXJuKCdQaG90b25QZWVyOiBObyBoYW5kbGVyIGZvciBldmVudCcsIGV2ZW50Q29kZSwgJ3JlZ2lzdGVyZWQuJyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgICAgQHN1bW1hcnkgQ2FsbGVkIGlmIG5vIGxpc3RlbmVyIGZvdW5kIGZvciByZWNlaXZlZCBvcGVyYXRpb24gcmVzcG9uc2UgZXZlbnQuXHJcbiAgICAgICAgICAgIE92ZXJyaWRlIHRvIHJlbGF5IHVua25vd24gcmVzcG9uc2UgdG8gdXNlcidzIGNvZGUgb3IgaGFuZGxlIGtub3duIHJlc3BvbnNlcyB3aXRob3V0IGxpc3RlbmVyIHJlZ2lzdHJhdGlvbi5cclxuICAgICAgICAgICAgQG1ldGhvZCBQaG90b24uUGhvdG9uUGVlciNvblVuaGFuZGxlZEV2ZW50XHJcbiAgICAgICAgICAgIEBwYXJhbSB7bnVtYmVyfSBvcGVyYXRpb25Db2RlIENvZGUgb2YgcmVjZWl2ZWQgcmVzcG9uc2UuXHJcbiAgICAgICAgICAgIEBwYXJhbSB7b2JqZWN0fSBbYXJnc10gQ29udGVudCBvZiByZWNlaXZlZCByZXNwb25zZSBvciBlbXB0eSBvYmplY3QuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBQaG90b25QZWVyLnByb3RvdHlwZS5vblVuaGFuZGxlZFJlc3BvbnNlID0gZnVuY3Rpb24gKG9wZXJhdGlvbkNvZGUsIGFyZ3MpIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLndhcm4oJ1Bob3RvblBlZXI6IE5vIGhhbmRsZXIgZm9yIHJlc3BvbnNlJywgb3BlcmF0aW9uQ29kZSwgJ3JlZ2lzdGVyZWQuJyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBUT0RPOiBsaXRlIGNhbGxzIHRoaXNcclxuICAgICAgICAvLyBwcm90ZWN0ZWRcclxuICAgICAgICBQaG90b25QZWVyLnByb3RvdHlwZS5fZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uIChjb2RlLCBhcmdzKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fZGlzcGF0Y2godGhpcy5fZXZlbnRMaXN0ZW5lcnMsIGNvZGUudG9TdHJpbmcoKSwgYXJncywgXCJldmVudFwiKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblVuaGFuZGxlZEV2ZW50KGNvZGUsIGFyZ3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBUT0RPOiBsaXRlIGNhbGxzIHRoaXNcclxuICAgICAgICAvLyBwcm90ZWN0ZWRcclxuICAgICAgICBQaG90b25QZWVyLnByb3RvdHlwZS5fZGlzcGF0Y2hSZXNwb25zZSA9IGZ1bmN0aW9uIChjb2RlLCBhcmdzKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fZGlzcGF0Y2godGhpcy5fcmVzcG9uc2VMaXN0ZW5lcnMsIGNvZGUudG9TdHJpbmcoKSwgYXJncywgXCJyZXNwb25zZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblVuaGFuZGxlZFJlc3BvbnNlKGNvZGUsIGFyZ3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBQaG90b25QZWVyLnByb3RvdHlwZS5fc3RyaW5naWZ5ID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChtZXNzYWdlKSA9PSBcIltvYmplY3QgT2JqZWN0XVwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIUpTT04pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIuZXhjZXB0aW9uKDIwMiwgXCJQaG90b25QZWVyW19zdHJpbmdpZnldIC0gVHJ5aW5nIHRvIGVuY29kZSBhcyBKU09OLCBidXQgSlNPTi5zdHJpbmdpZnkgaXMgbWlzc2luZy5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ+an5cIiArIEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZyhtZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgUGhvdG9uUGVlci5wcm90b3R5cGUuX2VuY29kZSA9IGZ1bmN0aW9uIChtZXNzYWdlcykge1xyXG4gICAgICAgICAgICB2YXIgcmV0ID0gXCJcIiwgbWVzc2FnZSwgbWVzc2FnZXMgPSBFeGl0Z2FtZXMuQ29tbW9uLlV0aWwuaXNBcnJheShtZXNzYWdlcykgPyBtZXNzYWdlcyA6IFttZXNzYWdlc107XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gbWVzc2FnZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZXNbaV0gPT09IG51bGwgfHwgbWVzc2FnZXNbaV0gPT09IHVuZGVmaW5lZCA/IFwiXCIgOiB0aGlzLl9zdHJpbmdpZnkobWVzc2FnZXNbaV0pO1xyXG4gICAgICAgICAgICAgICAgcmV0ICs9IHRoaXMuX2ZyYW1lICsgbWVzc2FnZS5sZW5ndGggKyB0aGlzLl9mcmFtZSArIG1lc3NhZ2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJldDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFBob3RvblBlZXIucHJvdG90eXBlLl9kZWNvZGUgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICB2YXIgbWVzc2FnZXMgPSBbXSwgbnVtYmVyLCBuLCBuZXdkYXRhID0gZGF0YTtcclxuICAgICAgICAgICAgdmFyIG51bEluZGV4ID0gZGF0YS5pbmRleE9mKFwiXFx4MDBcIik7XHJcbiAgICAgICAgICAgIGlmIChudWxJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIG5ld2RhdGEgPSBkYXRhLnJlcGxhY2UoL1tcXDBdL2csIFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRhdGEgPSBuZXdkYXRhO1xyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5zdWJzdHIoMCwgMykgIT09IHRoaXMuX2ZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2VzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGF0YSA9IGRhdGEuc3Vic3RyKDMpO1xyXG4gICAgICAgICAgICAgICAgbnVtYmVyID0gXCJcIiwgbiA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGRhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbiA9IE51bWJlcihkYXRhLnN1YnN0cihpLCAxKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuc3Vic3RyKGksIDEpID09IG4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyICs9IG47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gZGF0YS5zdWJzdHIobnVtYmVyLmxlbmd0aCArIHRoaXMuX2ZyYW1lLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlciA9IE51bWJlcihudW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlcy5wdXNoKGRhdGEuc3Vic3RyKDAsIG51bWJlcikpO1xyXG4gICAgICAgICAgICAgICAgZGF0YSA9IGRhdGEuc3Vic3RyKG51bWJlcik7XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKGRhdGEgIT09IFwiXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZXM7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBQaG90b25QZWVyLnByb3RvdHlwZS5fb25NZXNzYWdlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgaWYgKG1lc3NhZ2Uuc3Vic3RyKDAsIDMpID09IFwifmp+XCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX29uTWVzc2FnZVJlY2VpdmVkKEpTT04ucGFyc2UobWVzc2FnZS5zdWJzdHIoMykpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fc2Vzc2lvbmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2Vzc2lvbmlkID0gbWVzc2FnZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vbkNvbm5lY3QoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29uTWVzc2FnZVJlY2VpdmVkKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBQaG90b25QZWVyLnByb3RvdHlwZS5yZXNldEtlZXBBbGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgLy90aGlzLl9sb2dnZXIuZGVidWcoXCJyZXNldCBrZXAgYWxpdmU6IFwiLCBEYXRlLm5vdygpKTtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMua2VlcEFsaXZlVGltZXIpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5rZWVwQWxpdmVUaW1lb3V0TXMgPj0gMTAwMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZWVwQWxpdmVUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNlbmQgdGltZSBmcm9tIHBlZXIgY3JlYXRpb24gdG8gYXZvaWQgdGltZXN0YW1wIG92ZXJmbG93IG9uIHNlcnZlciBzaWRlXHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX3NlbmQoKF9hID0ge30sIF9hW1wiaXJxXCJdID0gMSwgX2FbXCJ2YWxzXCJdID0gWzEsIERhdGUubm93KCkgLSBfdGhpcy5pbml0VGltZXN0YW1wXSwgX2EpLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgICAgICB9LCB0aGlzLmtlZXBBbGl2ZVRpbWVvdXRNcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFBob3RvblBlZXIucHJvdG90eXBlLl9zZW5kID0gZnVuY3Rpb24gKGRhdGEsIGNoZWNrQ29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgIGlmIChjaGVja0Nvbm5lY3RlZCA9PT0gdm9pZCAwKSB7IGNoZWNrQ29ubmVjdGVkID0gZmFsc2U7IH1cclxuICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSB0aGlzLl9lbmNvZGUoZGF0YSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0Nvbm5lY3RlZCAmJiAhdGhpcy5faXNDbG9zaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0S2VlcEFsaXZlKCk7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuX2xvZ2dlci5kZWJ1ZyhcIl9zZW5kOlwiLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NvY2tldC5zZW5kKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjaGVja0Nvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5leGNlcHRpb24oMjAzLCAnUGhvdG9uUGVlcltfc2VuZF0gLSBPcGVyYXRpb24nLCBkYXRhLnJlcSwgJy0gZmFpbGVkLCBcImlzQ29ubmVjdGVkXCIgaXMnLCB0aGlzLl9pc0Nvbm5lY3RlZCwgJywgXCJpc0Nsb3NpbmdcIiBpcycsIHRoaXMuX2lzQ2xvc2luZywgXCIhXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBQaG90b25QZWVyLnByb3RvdHlwZS5fb25NZXNzYWdlUmVjZWl2ZWQgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG1lc3NhZ2UgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5kZWJ1ZyhcIlBob3RvblBlZXJbX29uTWVzc2FnZVJlY2VpdmVkXSAtIFNvY2tldCByZWNlaXZlZCBtZXNzYWdlOlwiLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvcHkgcHJvdG9jb2wgJ21lc3NhZ2UnIHByb3RvY29sIG9iamVjdCB0byBydW50aW1lIG9iamVjdDogdGhlIGxhdHRlcidzIHByb3BlcnRpZXMgY2FuIGJlIHJlbmFtZWQgYnkgbWluaWZpZXIuXHJcbiAgICAgICAgICAgICAgICB2YXIgbXNnSlNPTiA9IHsgZXJyOiBtZXNzYWdlW1wiZXJyXCJdLCBtc2c6IG1lc3NhZ2VbXCJtc2dcIl0sIHZhbHM6IG1lc3NhZ2VbXCJ2YWxzXCJdLCByZXM6IG1lc3NhZ2VbXCJyZXNcIl0sIGV2dDogbWVzc2FnZVtcImV2dFwiXSwgaXJzOiBtZXNzYWdlW1wiaXJzXCJdIH07XHJcbiAgICAgICAgICAgICAgICB2YXIgbXNnRXJyID0gbXNnSlNPTi5lcnIgPyBtc2dKU09OLmVyciA6IDA7XHJcbiAgICAgICAgICAgICAgICBtc2dKU09OLnZhbHMgPSBtc2dKU09OLnZhbHMgIT09IHVuZGVmaW5lZCA/IG1zZ0pTT04udmFscyA6IFtdO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1zZ0pTT04udmFscy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbXNnSlNPTi52YWxzID0gdGhpcy5fcGFyc2VNZXNzYWdlVmFsdWVzQXJyYXlUb0pTT04obXNnSlNPTi52YWxzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChtc2dKU09OLnJlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBwYXJzZUludChtc2dKU09OLnJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyc2VSZXNwb25zZShjb2RlLCBtc2dKU09OKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtc2dKU09OLmV2dCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2RlID0gcGFyc2VJbnQobXNnSlNPTi5ldnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJzZUV2ZW50KGNvZGUsIG1zZ0pTT04pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1zZ0pTT04uaXJzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2RlID0gcGFyc2VJbnQobXNnSlNPTi5pcnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyc2VJbnRlcm5hbFJlc3BvbnNlKGNvZGUsIG1zZ0pTT04pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmV4Y2VwdGlvbigyMDQsIFwiUGhvdG9uUGVlcltfb25NZXNzYWdlUmVjZWl2ZWRdIC0gUmVjZWl2ZWQgdW5kZWZpbmVkIG1lc3NhZ2UgdHlwZTpcIiwgbXNnSlNPTik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFBob3RvblBlZXIucHJvdG90eXBlLl9wYXJzZU1lc3NhZ2VWYWx1ZXNBcnJheVRvSlNPTiA9IGZ1bmN0aW9uICh2YWxzKSB7XHJcbiAgICAgICAgICAgIHZhciBwYXJzZWRKU09OID0ge307XHJcbiAgICAgICAgICAgIGlmIChFeGl0Z2FtZXMuQ29tbW9uLlV0aWwuaXNBcnJheSh2YWxzKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHMubGVuZ3RoICUgMiA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvUGFyc2UgPSB2YWxzLCBrZXksIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICh0b1BhcnNlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0gdG9QYXJzZS5zaGlmdCgpICsgXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0b1BhcnNlLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZEpTT05ba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5leGNlcHRpb24oMjA1LCBcIlBob3RvblBlZXJbX3BhcnNlTWVzc2FnZVZhbHVlc1RvSlNPTl0gLSBSZWNlaXZlZCBpbnZhbGlkIHZhbHVlcyBhcnJheTpcIiwgdmFscyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlZEpTT047XHJcbiAgICAgICAgfTtcclxuICAgICAgICBQaG90b25QZWVyLnByb3RvdHlwZS5fcGFyc2VFdmVudCA9IGZ1bmN0aW9uIChjb2RlLCBldmVudCkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGNvZGUpIHtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGlzcGF0Y2hFdmVudChjb2RlLCB7IHZhbHM6IGV2ZW50LnZhbHMgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFBob3RvblBlZXIucHJvdG90eXBlLl9wYXJzZVJlc3BvbnNlID0gZnVuY3Rpb24gKGNvZGUsIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoY29kZSkge1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kaXNwYXRjaFJlc3BvbnNlKGNvZGUsIHsgZXJyQ29kZTogcmVzcG9uc2UuZXJyLCBlcnJNc2c6IHJlc3BvbnNlLm1zZywgdmFsczogcmVzcG9uc2UudmFscyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgUGhvdG9uUGVlci5wcm90b3R5cGUuX3BhcnNlSW50ZXJuYWxSZXNwb25zZSA9IGZ1bmN0aW9uIChjb2RlLCByZXNwb25zZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RSdHQgPSBEYXRlLm5vdygpIC0gdGhpcy5pbml0VGltZXN0YW1wIC0gcmVzcG9uc2UudmFsc1sxXTtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmRlYnVnKFwiaW50ZXJuYWwgcmVzcG9uc2U6XCIsIHJlc3BvbnNlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFBob3RvblBlZXIucHJvdG90eXBlLl9vbkNvbm5lY3RpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5kZWJ1ZyhcIlBob3RvblBlZXJbX29uQ29ubmVjdGluZ10gLSBTdGFydHMgY29ubmVjdGluZ1wiLCB0aGlzLnVybCwgJy4uLiwgcmFpc2luZyBcImNvbm5lY3RpbmdcIiBldmVudCAuLi4nKTtcclxuICAgICAgICAgICAgdGhpcy5faXNDb25uZWN0aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5fZGlzcGF0Y2hQZWVyU3RhdHVzKFBob3RvblBlZXIuU3RhdHVzQ29kZXMuY29ubmVjdGluZyk7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRLZWVwQWxpdmUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFBob3RvblBlZXIucHJvdG90eXBlLl9vbkNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5kZWJ1ZygnUGhvdG9uUGVlcltfb25Db25uZWN0XSAtIENvbm5lY3RlZCBzdWNjZXNzZnVsbHkhIFJhaXNpbmcgXCJjb25uZWN0XCIgZXZlbnQgLi4uJyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzQ29ubmVjdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLl9pc0Nvbm5lY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuX2Rpc3BhdGNoUGVlclN0YXR1cyhQaG90b25QZWVyLlN0YXR1c0NvZGVzLmNvbm5lY3QpO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0S2VlcEFsaXZlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBQaG90b25QZWVyLnByb3RvdHlwZS5fb25Db25uZWN0RmFpbGVkID0gZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIuZXJyb3IoJ1Bob3RvblBlZXJbX29uQ29ubmVjdEZhaWxlZF0gLSBTb2NrZXQgY29ubmVjdGlvbiBjb3VsZCBub3QgYmUgY3JlYXRlZDonLCB0aGlzLnVybCwgdGhpcy5zdWJwcm90b2NvbCwgJ1dyb25nIGhvc3Qgb3IgcG9ydD9cXG4gUmFpc2luZyBcImNvbm5lY3RGYWlsZWQgZXZlbnQgLi4uJyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzQ29ubmVjdGluZyA9IHRoaXMuX2lzQ29ubmVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuX2Rpc3BhdGNoUGVlclN0YXR1cyhQaG90b25QZWVyLlN0YXR1c0NvZGVzLmNvbm5lY3RGYWlsZWQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgUGhvdG9uUGVlci5wcm90b3R5cGUuX29uRGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHdhc0Nvbm5lY3RlZCA9IHRoaXMuX2lzQ29ubmVjdGVkO1xyXG4gICAgICAgICAgICB2YXIgd2FzQ2xvc2luZyA9IHRoaXMuX2lzQ2xvc2luZztcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmRlYnVnKCdQaG90b25QZWVyW19vbkRpc2Nvbm5lY3RdIC0gU29ja2V0IGNsb3NlZCwgcmFpc2luZyBcImRpc2Nvbm5lY3RcIiBldmVudCAuLi4nKTtcclxuICAgICAgICAgICAgdGhpcy5faXNDbG9zaW5nID0gdGhpcy5faXNDb25uZWN0ZWQgPSB0aGlzLl9pc0Nvbm5lY3RpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHdhc0Nvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHdhc0Nsb3NpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kaXNwYXRjaFBlZXJTdGF0dXMoUGhvdG9uUGVlci5TdGF0dXNDb2Rlcy5kaXNjb25uZWN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Rpc3BhdGNoUGVlclN0YXR1cyhQaG90b25QZWVyLlN0YXR1c0NvZGVzLmNvbm5lY3RDbG9zZWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBQaG90b25QZWVyLnByb3RvdHlwZS5fb25UaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIuZGVidWcoJ1Bob3RvblBlZXJbX29uVGltZW91dF0gLSBDbGllbnQgdGltZWQgb3V0ISBSYWlzaW5nIFwidGltZW91dFwiIGV2ZW50IC4uLicpO1xyXG4gICAgICAgICAgICB0aGlzLl9kaXNwYXRjaFBlZXJTdGF0dXMoUGhvdG9uUGVlci5TdGF0dXNDb2Rlcy50aW1lb3V0KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFBob3RvblBlZXIucHJvdG90eXBlLl9vbkVycm9yID0gZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5lcnJvcihcIlBob3RvblBlZXJbX29uRXJyb3JdIC0gQ29ubmVjdGlvbiBlcnJvcjpcIiwgYXJndW1lbnRzWzBdKTtcclxuICAgICAgICAgICAgdGhpcy5faXNDb25uZWN0aW5nID0gdGhpcy5faXNDb25uZWN0ZWQgPSB0aGlzLl9pc0Nsb3NpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5fZGlzcGF0Y2hQZWVyU3RhdHVzKFBob3RvblBlZXIuU3RhdHVzQ29kZXMuZXJyb3IpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgUGhvdG9uUGVlci5wcm90b3R5cGUuX2FkZExpc3RlbmVyID0gZnVuY3Rpb24gKGxpc3RlbmVycywgY29kZSwgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgaWYgKCEoY29kZSBpbiBsaXN0ZW5lcnMpKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnNbY29kZV0gPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgdHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5kZWJ1ZygnUGhvdG9uUGVlcltfYWRkTGlzdGVuZXJdIC0gQWRkaW5nIGxpc3RlbmVyIGZvciBldmVudCcsIGNvZGUpO1xyXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzW2NvZGVdLnB1c2goY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKCdQaG90b25QZWVyW19hZGRMaXN0ZW5lcl0gLSBMaXN0ZW5lcicsIGNvZGUsICdpcyBub3QgYSBmdW5jdGlvbiBidXQgb2YgdHlwZScsIHR5cGVvZiBjYWxsYmFjaywgJy4gTm8gbGlzdGVuZXIgYWRkZWQhJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBQaG90b25QZWVyLnByb3RvdHlwZS5fZGlzcGF0Y2ggPSBmdW5jdGlvbiAobGlzdGVuZXJzLCBjb2RlLCBhcmdzLCBkZWJ1Z1R5cGUpIHtcclxuICAgICAgICAgICAgaWYgKGNvZGUgaW4gbGlzdGVuZXJzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnRzID0gbGlzdGVuZXJzW2NvZGVdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBldmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFFeGl0Z2FtZXMuQ29tbW9uLlV0aWwuaXNBcnJheShhcmdzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzID0gW2FyZ3NdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBldmVudHNbaV0uYXBwbHkodGhpcywgYXJncyA9PT0gdW5kZWZpbmVkID8gW10gOiBhcmdzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBQaG90b25QZWVyLnByb3RvdHlwZS5fZGlzcGF0Y2hQZWVyU3RhdHVzID0gZnVuY3Rpb24gKGNvZGUpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9kaXNwYXRjaCh0aGlzLl9wZWVyU3RhdHVzTGlzdGVuZXJzLCBjb2RlLCB1bmRlZmluZWQsIFwicGVlclN0YXR1c1wiKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLndhcm4oJ1Bob3RvblBlZXJbX2Rpc3BhdGNoUGVlclN0YXR1c10gLSBObyBoYW5kbGVyIGZvciAnLCBjb2RlLCAncmVnaXN0ZXJlZC4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgUGhvdG9uUGVlci5wcm90b3R5cGUuX3JlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24gKGxpc3RlbmVycywgY29kZSwgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgaWYgKChjb2RlIGluIGxpc3RlbmVycykpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwcmV2TGVuZ2h0ID0gbGlzdGVuZXJzW2NvZGVdLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGxpc3RlbmVyc1tjb2RlXSA9IGxpc3RlbmVyc1tjb2RlXS5maWx0ZXIoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHggIT0gY2FsbGJhY2s7IH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmRlYnVnKCdQaG90b25QZWVyW19yZW1vdmVMaXN0ZW5lcl0gLSBSZW1vdmluZyBsaXN0ZW5lciBmb3IgZXZlbnQnLCBjb2RlLCBcInJlbW92ZWQ6XCIsIHByZXZMZW5naHQgLSBsaXN0ZW5lcnNbY29kZV0ubGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9O1xyXG4gICAgICAgIFBob3RvblBlZXIucHJvdG90eXBlLl9yZW1vdmVMaXN0ZW5lcnNGb3JDb2RlID0gZnVuY3Rpb24gKGxpc3RlbmVycywgY29kZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIuZGVidWcoJ1Bob3RvblBlZXJbX3JlbW92ZUxpc3RlbmVyc0ZvckNvZGVdIC0gUmVtb3ZpbmcgYWxsIGxpc3RlbmVycyBmb3IgZXZlbnQnLCBjb2RlKTtcclxuICAgICAgICAgICAgaWYgKGNvZGUgaW4gbGlzdGVuZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnNbY29kZV0gPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAgICBAc3VtbWFyeSBFbnVtIGZvciBwZWVyIHN0YXR1cyBjb2Rlcy5cclxuICAgICAgICAgICAgVXNlIHRvIHN1YnNjcmliZSB0byBzdGF0dXMgY2hhbmdlcy5cclxuICAgICAgICAgICAgQG1lbWJlciBQaG90b24uUGhvdG9uUGVlci5TdGF0dXNDb2Rlc1xyXG4gICAgICAgICAgICBAcmVhZG9ubHlcclxuICAgICAgICAgICAgQHByb3BlcnR5IHtzdHJpbmd9IGNvbm5lY3RpbmcgSXMgY29ubmVjdGluZyB0byBzZXJ2ZXIuXHJcbiAgICAgICAgICAgIEBwcm9wZXJ0eSB7c3RyaW5nfSBjb25uZWN0IENvbm5lY3RlZCB0byBzZXJ2ZXIuXHJcbiAgICAgICAgICAgIEBwcm9wZXJ0eSB7c3RyaW5nfSBjb25uZWN0RmFpbGVkIENvbm5lY3Rpb24gdG8gc2VydmVyIGZhaWxlZC5cclxuICAgICAgICAgICAgQHByb3BlcnR5IHtzdHJpbmd9IGRpc2Nvbm5lY3QgRGlzY29ubmVjdGVkIGZyb20gc2VydmVyLlxyXG4gICAgICAgICAgICBAcHJvcGVydHkge3N0cmluZ30gY29ubmVjdENsb3NlZCBDb25uZWN0aW9uIGNsb3NlZCBieSBzZXJ2ZXIuXHJcbiAgICAgICAgICAgIEBwcm9wZXJ0eSB7c3RyaW5nfSBlcnJvciBHZW5lcmFsIGNvbm5lY3Rpb24gZXJyb3IuXHJcbiAgICAgICAgICAgIEBwcm9wZXJ0eSB7c3RyaW5nfSB0aW1lb3V0IERpc2Nvbm5lY3RlZCBmcm9tIHNlcnZlciBmb3IgdGltZW91dC5cclxuICAgICAgICAqL1xyXG4gICAgICAgIFBob3RvblBlZXIuU3RhdHVzQ29kZXMgPSB7XHJcbiAgICAgICAgICAgIGNvbm5lY3Rpbmc6IFwiY29ubmVjdGluZ1wiLFxyXG4gICAgICAgICAgICBjb25uZWN0OiBcImNvbm5lY3RcIixcclxuICAgICAgICAgICAgY29ubmVjdEZhaWxlZDogXCJjb25uZWN0RmFpbGVkXCIsXHJcbiAgICAgICAgICAgIGRpc2Nvbm5lY3Q6IFwiZGlzY29ubmVjdFwiLFxyXG4gICAgICAgICAgICBjb25uZWN0Q2xvc2VkOiBcImNvbm5lY3RDbG9zZWRcIixcclxuICAgICAgICAgICAgZXJyb3I6IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgdGltZW91dDogXCJ0aW1lb3V0XCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBQaG90b25QZWVyO1xyXG4gICAgfSgpKTtcclxuICAgIFBob3Rvbi5QaG90b25QZWVyID0gUGhvdG9uUGVlcjtcclxufSkoUGhvdG9uIHx8IChQaG90b24gPSB7fSkpO1xyXG4vKipcclxuICAgIFBob3RvbiBMb2FkIEJhbGFuY2luZyBBUElcclxuICAgIEBuYW1lc3BhY2UgUGhvdG9uLkxvYWRCYWxhbmNpbmdcclxuKi9cclxudmFyIFBob3RvbjtcclxuKGZ1bmN0aW9uIChQaG90b24pIHtcclxuICAgIHZhciBMb2FkQmFsYW5jaW5nO1xyXG4gICAgKGZ1bmN0aW9uIChMb2FkQmFsYW5jaW5nKSB7XHJcbiAgICAgICAgdmFyIFdlYkZsYWdzID0ge1xyXG4gICAgICAgICAgICBIdHRwRm9yd2FyZDogMHgwMSxcclxuICAgICAgICAgICAgU2VuZEF1dGhDb29raWU6IDB4MDIsXHJcbiAgICAgICAgICAgIFNlbmRTeW5jOiAweDA0LFxyXG4gICAgICAgICAgICBTZW5kU3RhdGU6IDB4MDhcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBBY3RvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAY2xhc3NkZXNjIFN1bW1hcml6ZXMgYSBcInBsYXllclwiIHdpdGhpbiBhIHJvb20sIGlkZW50aWZpZWQgKGluIHRoYXQgcm9vbSkgYnkgSUQgKG9yIFwiYWN0b3JOclwiKS4gRXh0ZW5kIHRvIGltcGxlbWVudCBjdXN0b20gbG9naWMuXHJcbiAgICAgICAgICAgICAgICBAY29uc3RydWN0b3IgUGhvdG9uLkxvYWRCYWxhbmNpbmcuQWN0b3JcclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7c3RyaW5nfSBuYW1lIEFjdG9yIG5hbWUuXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge251bWJlcn0gYWN0b3JOciBBY3RvciBJRC5cclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7Ym9vbGVhbn0gaXNMb2NhbCBBY3RvciBpcyBsb2NhbC5cclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZnVuY3Rpb24gQWN0b3IobmFtZSwgYWN0b3JOciwgaXNMb2NhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0b3JOciA9IGFjdG9yTnI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9jYWwgPSBpc0xvY2FsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXN0b21Qcm9wZXJ0aWVzID0ge307XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1c3BlbmRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHB1YmxpYyBnZXRMb2FkQmFsYW5jaW5nQ2xpZW50KCkgeyByZXR1cm4gdGhpcy5sb2FkQmFsYW5jaW5nQ2xpZW50OyB9XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgQHN1bW1hcnkgQWN0b3IncyByb29tOiB0aGUgcm9vbSBpbml0aWFsaXplZCBieSBjbGllbnQgZm9yIGNyZWF0ZSByb29tIG9wZXJhdGlvbiBvciByb29tIGNsaWVudCBjb25uZWN0ZWQgdG8uXHJcbiAgICAgICAgICAgICAgICBAbWV0aG9kIFBob3Rvbi5Mb2FkQmFsYW5jaW5nLkFjdG9yI2dldFJvb21cclxuICAgICAgICAgICAgICAgIEByZXR1cm5zIHtQaG90b24uTG9hZEJhbGFuY2luZy5Sb29tfSBBY3RvcidzIHJvb20uXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIEFjdG9yLnByb3RvdHlwZS5nZXRSb29tID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5sb2FkQmFsYW5jaW5nQ2xpZW50Lm15Um9vbSgpOyB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IFJhaXNlcyBnYW1lIGN1c3RvbSBldmVudC5cclxuICAgICAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLkxvYWRCYWxhbmNpbmcuQWN0b3IjcmFpc2VFdmVudFxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtudW1iZXJ9IGV2ZW50Q29kZSBJZGVudGlmaWVzIHRoaXMgdHlwZSBvZiBldmVudCAoYW5kIHRoZSBjb250ZW50KS4gWW91ciBnYW1lJ3MgZXZlbnQgY29kZXMgY2FuIHN0YXJ0IHdpdGggMC5cclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7b2JqZWN0fSBbZGF0YV0gQ3VzdG9tIGRhdGEgeW91IHdhbnQgdG8gc2VuZCBhbG9uZyAodXNlIG51bGwsIGlmIG5vbmUpLlxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSBBZGRpdGlvbmFsIG9wdGlvbnNcclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7b2JqZWN0fSBvcHRpb25zIEFkZGl0aW9uYWwgb3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtudW1iZXJ9IFtvcHRpb25zLmludGVyZXN0R3JvdXBdIFRoZSBJRCBvZiB0aGUgaW50ZXJlc3QgZ3JvdXAgdGhpcyBldmVudCBnb2VzIHRvIChleGNsdXNpdmVseSkuXHJcbiAgICAgICAgICAgICAgICBAcHJvcGVydHkge1Bob3Rvbi5Mb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5FdmVudENhY2hpbmd9IFtvcHRpb25zLmNhY2hlPUV2ZW50Q2FjaGluZy5Eb05vdENhY2hlXSBFdmVudHMgY2FuIGJlIGNhY2hlZCAobWVyZ2VkIGFuZCByZW1vdmVkKSBmb3IgcGxheWVycyBqb2luaW5nIGxhdGVyIG9uLlxyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtQaG90b24uTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUmVjZWl2ZXJHcm91cH0gW29wdGlvbnMucmVjZWl2ZXJzPVJlY2VpdmVyR3JvdXAuT3RoZXJzXSBEZWZpbmVzIHRvIHdoaWNoIGdyb3VwIG9mIHBsYXllcnMgdGhlIGV2ZW50IGlzIHBhc3NlZCBvbi5cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyW119IFtvcHRpb25zLnRhcmdldEFjdG9yc10gRGVmaW5lcyB0aGUgdGFyZ2V0IHBsYXllcnMgd2hvIHNob3VsZCByZWNlaXZlIHRoZSBldmVudCAodXNlIG9ubHkgZm9yIHNtYWxsIHRhcmdldCBncm91cHMpLlxyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtib29sZWFufSBbb3B0aW9ucy53ZWJGb3J3YXJkPWZhbHNlXSBGb3J3YXJkIHRvIHdlYiBob29rLlxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBBY3Rvci5wcm90b3R5cGUucmFpc2VFdmVudCA9IGZ1bmN0aW9uIChldmVudENvZGUsIGRhdGEsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvYWRCYWxhbmNpbmdDbGllbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRCYWxhbmNpbmdDbGllbnQucmFpc2VFdmVudChldmVudENvZGUsIGRhdGEsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IFNldHMgYWN0b3IgbmFtZS5cclxuICAgICAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLkxvYWRCYWxhbmNpbmcuQWN0b3Ijc2V0TmFtZVxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtzdHJpbmd9IG5hbWUgQWN0b3IgbmFtZS5cclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQWN0b3IucHJvdG90eXBlLnNldE5hbWUgPSBmdW5jdGlvbiAobmFtZSkgeyB0aGlzLm5hbWUgPSBuYW1lOyB9O1xyXG4gICAgICAgICAgICAvLyBwcm9wZXJ0aWVzIG1ldGhvZHNcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAc3VtbWFyeSBDYWxsZWQgb24gZXZlcnkgYWN0b3IgcHJvcGVydGllcyB1cGRhdGU6IHByb3BlcnRpZXMgc2V0IGJ5IGNsaWVudCwgcG9wZXJ0aWVzIHVwZGF0ZSBmcm9tIHNlcnZlci5cclxuICAgICAgICAgICAgICAgIE92ZXJyaWRlIHRvIHVwZGF0ZSBjdXN0b20gcm9vbSBzdGF0ZS5cclxuICAgICAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLkxvYWRCYWxhbmNpbmcuQWN0b3Ijb25Qcm9wZXJ0aWVzQ2hhbmdlXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge29iamVjdH0gY2hhbmdlZEN1c3RvbVByb3BzIEtleS12YWx1ZSBtYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzLlxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtib29sZWFufSBbYnlDbGllbnRdIHRydWUgaWYgcHJvcGVydGllcyBzZXQgYnkgY2xpZW50LlxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBBY3Rvci5wcm90b3R5cGUub25Qcm9wZXJ0aWVzQ2hhbmdlID0gZnVuY3Rpb24gKGNoYW5nZWRDdXN0b21Qcm9wcywgYnlDbGllbnQpIHsgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAc3VtbWFyeSBSZXR1cm5zIGN1c3RvbSBwcm9wZXJ0eSBieSBuYW1lLlxyXG4gICAgICAgICAgICAgICAgQG1ldGhvZCBQaG90b24uTG9hZEJhbGFuY2luZy5BY3RvciNnZXRDdXN0b21Qcm9wZXJ0eVxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtzdHJpbmd9IG5hbWUgTmFtZSBvZiB0aGUgcHJvcGVydHkuXHJcbiAgICAgICAgICAgICAgICBAcmV0dXJucyB7b2JqZWN0fSBQcm9wZXJ0eSBvciB1bmRlZmluZWQgaWYgcHJvcGVydHkgbm90IGZvdW5kLlxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBBY3Rvci5wcm90b3R5cGUuZ2V0Q3VzdG9tUHJvcGVydHkgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gdGhpcy5jdXN0b21Qcm9wZXJ0aWVzW25hbWVdOyB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IFJldHVybnMgY3VzdG9tIHByb3BlcnR5IGJ5IG5hbWUgb3IgZGVmYXVsdCB2YWx1ZS5cclxuICAgICAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLkxvYWRCYWxhbmNpbmcuQWN0b3IjZ2V0Q3VzdG9tUHJvcGVydHlPckVsc2VcclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7c3RyaW5nfSBuYW1lIE5hbWUgb2YgdGhlIHByb3BlcnR5LlxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtvYmplY3R9IGRlZmF1bHRWYWx1ZSBEZWZhdWx0IHByb3BlcnR5IHZhbHVlLlxyXG4gICAgICAgICAgICAgICAgQHJldHVybnMge29iamVjdH0gUHJvcGVydHkgb3IgZGVmYXVsdCB2YWx1ZSBpZiBwcm9wZXJ0eSBub3QgZm91bmQuXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIEFjdG9yLnByb3RvdHlwZS5nZXRDdXN0b21Qcm9wZXJ0eU9yRWxzZSA9IGZ1bmN0aW9uIChuYW1lLCBkZWZhdWx0VmFsdWUpIHsgcmV0dXJuIEV4aXRnYW1lcy5Db21tb24uVXRpbC5nZXRQcm9wZXJ0eU9yRWxzZSh0aGlzLmN1c3RvbVByb3BlcnRpZXMsIG5hbWUsIGRlZmF1bHRWYWx1ZSk7IH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgQHN1bW1hcnkgU2V0cyBjdXN0b20gcHJvcGVydHkuXHJcbiAgICAgICAgICAgICAgICBAbWV0aG9kIFBob3Rvbi5Mb2FkQmFsYW5jaW5nLkFjdG9yI3NldEN1c3RvbVByb3BlcnR5XHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge3N0cmluZ30gbmFtZSBOYW1lIG9mIHRoZSBwcm9wZXJ0eS5cclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZSBQcm9wZXJ0eSB2YWx1ZS5cclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7Ym9vbGVhbn0gW3dlYkZvcndhcmQ9ZmFsc2VdIEZvcndhcmQgdG8gd2ViIGhvb2suXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge29iamVjdH0gW2V4cGVjdGVkVmFsdWVdIFByb3BlcnR5IHZhbHVlIGV4cGVjdGVkIHdoZW4gdXBkYXRlIG9jY3Vycy4gKENBUyA6IFwiQ2hlY2sgQW5kIFN3YXBcIilcclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQWN0b3IucHJvdG90eXBlLnNldEN1c3RvbVByb3BlcnR5ID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCB3ZWJGb3J3YXJkLCBleHBlY3RlZFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAod2ViRm9yd2FyZCA9PT0gdm9pZCAwKSB7IHdlYkZvcndhcmQgPSBmYWxzZTsgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXN0b21Qcm9wZXJ0aWVzW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvcHMgPSB7fTtcclxuICAgICAgICAgICAgICAgIHByb3BzW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB2YXIgZXhwZWN0ZWRQcm9wcztcclxuICAgICAgICAgICAgICAgIGlmIChleHBlY3RlZFZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkUHJvcHMgPSAoX2EgPSB7fSwgX2FbbmFtZV0gPSBleHBlY3RlZFZhbHVlLCBfYSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2FkQmFsYW5jaW5nQ2xpZW50ICYmIHRoaXMubG9hZEJhbGFuY2luZ0NsaWVudC5pc0pvaW5lZFRvUm9vbSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQmFsYW5jaW5nQ2xpZW50Ll9zZXRQcm9wZXJ0aWVzT2ZBY3Rvcih0aGlzLmFjdG9yTnIsIHByb3BzLCB3ZWJGb3J3YXJkLCBleHBlY3RlZFByb3BzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMub25Qcm9wZXJ0aWVzQ2hhbmdlKHByb3BzLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAc3VtbWFyeSBTZXRzIGN1c3RvbSBwcm9wZXJ0aWVzLlxyXG4gICAgICAgICAgICAgICAgQG1ldGhvZCBQaG90b24uTG9hZEJhbGFuY2luZy5BY3RvciNzZXRDdXN0b21Qcm9wZXJ0aWVzXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge29iamVjdH0gcHJvcGVydGllcyBUYWJsZSBvZiBwcm9wZXJ0aWVzIHRvIHNldC5cclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7Ym9vbGVhbn0gW3dlYkZvcndhcmQ9ZmFsc2VdIEZvcndhcmQgdG8gd2ViIGhvb2suXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge29iamVjdH0gW2V4cGVjdGVkUHJvcGVydGllc10gVGFibGUgb2YgcHJvcGVydGllcyBleHBlY3RlZCB3aGVuIHVwZGF0ZSBvY2N1cnMuIChDQVMgOiBcIkNoZWNrIEFuZCBTd2FwXCIpXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIEFjdG9yLnByb3RvdHlwZS5zZXRDdXN0b21Qcm9wZXJ0aWVzID0gZnVuY3Rpb24gKHByb3BlcnRpZXMsIHdlYkZvcndhcmQsIGV4cGVjdGVkUHJvcGVydGllcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHdlYkZvcndhcmQgPT09IHZvaWQgMCkgeyB3ZWJGb3J3YXJkID0gZmFsc2U7IH1cclxuICAgICAgICAgICAgICAgIHZhciBwcm9wcyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXN0b21Qcm9wZXJ0aWVzW25hbWVdID0gcHJvcGVydGllc1tuYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wc1tuYW1lXSA9IHByb3BlcnRpZXNbbmFtZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2FkQmFsYW5jaW5nQ2xpZW50ICYmIHRoaXMubG9hZEJhbGFuY2luZ0NsaWVudC5pc0pvaW5lZFRvUm9vbSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQmFsYW5jaW5nQ2xpZW50Ll9zZXRQcm9wZXJ0aWVzT2ZBY3Rvcih0aGlzLmFjdG9yTnIsIHByb3BzLCB3ZWJGb3J3YXJkLCBleHBlY3RlZFByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5vblByb3BlcnRpZXNDaGFuZ2UocHJvcHMsIHRydWUpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IFJldHVybnMgdHJ1ZSBpZiBhY3RvciBpcyBpbiBzdXNwZW5kZWQgc3RhdGUuXHJcbiAgICAgICAgICAgICAgICBAcmV0dXJucyB7Ym9vbGVhbn0gQWN0b3Igc3VzcGVuZCBzdGF0ZS5cclxuICAgICAgICAgICAgKiovXHJcbiAgICAgICAgICAgIEFjdG9yLnByb3RvdHlwZS5pc1N1c3BlbmRlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN1c3BlbmRlZDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgQWN0b3IucHJvdG90eXBlLl9nZXRBbGxQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHAgPSB7fTtcclxuICAgICAgICAgICAgICAgIHBbTG9hZEJhbGFuY2luZy5Db25zdGFudHMuQWN0b3JQcm9wZXJ0aWVzLlBsYXllck5hbWVdID0gdGhpcy5uYW1lO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgayBpbiB0aGlzLmN1c3RvbVByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBwW2tdID0gdGhpcy5jdXN0b21Qcm9wZXJ0aWVzW2tdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHA7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIEFjdG9yLnByb3RvdHlwZS5fc2V0TEJDID0gZnVuY3Rpb24gKGxiYykgeyB0aGlzLmxvYWRCYWxhbmNpbmdDbGllbnQgPSBsYmM7IH07XHJcbiAgICAgICAgICAgIEFjdG9yLnByb3RvdHlwZS5fdXBkYXRlRnJvbVJlc3BvbnNlID0gZnVuY3Rpb24gKHZhbHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0b3JOciA9IHZhbHNbTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5BY3Rvck5yXTtcclxuICAgICAgICAgICAgICAgIHZhciBwcm9wcyA9IHZhbHNbTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5QbGF5ZXJQcm9wZXJ0aWVzXTtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBwcm9wc1tMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5BY3RvclByb3BlcnRpZXMuUGxheWVyTmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVDdXN0b21Qcm9wZXJ0aWVzKHByb3BzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgQWN0b3IucHJvdG90eXBlLl91cGRhdGVNeUFjdG9yRnJvbVJlc3BvbnNlID0gZnVuY3Rpb24gKHZhbHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0b3JOciA9IHZhbHNbTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5BY3Rvck5yXTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgQWN0b3IucHJvdG90eXBlLl91cGRhdGVDdXN0b21Qcm9wZXJ0aWVzID0gZnVuY3Rpb24gKHZhbHMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHAgaW4gdmFscykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tUHJvcGVydGllc1twXSA9IHZhbHNbcF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uUHJvcGVydGllc0NoYW5nZSh2YWxzLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIEFjdG9yLnByb3RvdHlwZS5fc2V0U3VzcGVuZGVkID0gZnVuY3Rpb24gKHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3VzcGVuZGVkID0gcztcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgQWN0b3IuX2dldEFjdG9yTnJGcm9tUmVzcG9uc2UgPSBmdW5jdGlvbiAodmFscykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHNbTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5BY3Rvck5yXTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIEFjdG9yO1xyXG4gICAgICAgIH0oKSk7XHJcbiAgICAgICAgTG9hZEJhbGFuY2luZy5BY3RvciA9IEFjdG9yO1xyXG4gICAgICAgIC8vIHJlYWRvbmx5IHJvb20gaW5mbyBmcm9tIHNlcnZlclxyXG4gICAgICAgIHZhciBSb29tSW5mbyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAY2xhc3NkZXNjIFVzZWQgZm9yIFJvb20gbGlzdGluZ3Mgb2YgdGhlIGxvYmJ5IChub3QgeWV0IGpvaW5pbmcpLiBPZmZlcnMgdGhlIGJhc2ljIGluZm8gYWJvdXQgYSByb29tOiBuYW1lLCBwbGF5ZXIgY291bnRzLCBwcm9wZXJ0aWVzLCBldGMuXHJcbiAgICAgICAgICAgICAgICBAY29uc3RydWN0b3IgUGhvdG9uLkxvYWRCYWxhbmNpbmcuUm9vbUluZm9cclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFJvb20gbmFtZS5cclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZnVuY3Rpb24gUm9vbUluZm8obmFtZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gc3RhbmRhcmQgcm9vbSBwcm9wZXJ0aWVzXHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBhY2Nlc3MgdmlhIGdldHRlcnNcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgIEBzdW1tYXJ5IFJvb20gbmFtZS5cclxuICAgICAgICAgICAgICAgICAgICBAbWVtYmVyIFBob3Rvbi5Mb2FkQmFsYW5jaW5nLlJvb21JbmZvI25hbWVcclxuICAgICAgICAgICAgICAgICAgICBAdHlwZSB7c3RyaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIEByZWFkb25seVxyXG4gICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHRoaXMubmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICBAc3VtbWFyeSBKb2luZWQgcm9vbSBHYW1lIHNlcnZlciBhZGRyZXNzLlxyXG4gICAgICAgICAgICAgICAgICAgIEBtZW1iZXIgUGhvdG9uLkxvYWRCYWxhbmNpbmcuUm9vbUluZm8jYWRkcmVzc1xyXG4gICAgICAgICAgICAgICAgICAgIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgQHJlYWRvbmx5XHJcbiAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRyZXNzID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgIEBzdW1tYXJ5IE1heCBwbGF5ZXJzIGJlZm9yZSByb29tIGlzIGNvbnNpZGVyZWQgZnVsbC5cclxuICAgICAgICAgICAgICAgICAgICBAbWVtYmVyIFBob3Rvbi5Mb2FkQmFsYW5jaW5nLlJvb21JbmZvI21heFBsYXllcnNcclxuICAgICAgICAgICAgICAgICAgICBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgIEByZWFkb25seVxyXG4gICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHRoaXMubWF4UGxheWVycyA9IDA7XHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICBAc3VtbWFyeSBTaG93cyB0aGUgcm9vbSBpbiB0aGUgbG9iYnkncyByb29tIGxpc3QuIE1ha2VzIHNlbnNlIG9ubHkgZm9yIGxvY2FsIHJvb20uXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lbWJlciBQaG90b24uTG9hZEJhbGFuY2luZy5Sb29tSW5mbyNpc1Zpc2libGVcclxuICAgICAgICAgICAgICAgICAgICBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAgICAgICAgICAgICAgICBAcmVhZG9ubHlcclxuICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICBAc3VtbWFyeSBEZWZpbmVzIGlmIHRoaXMgcm9vbSBjYW4gYmUgam9pbmVkLlxyXG4gICAgICAgICAgICAgICAgICAgIEBtZW1iZXIgUGhvdG9uLkxvYWRCYWxhbmNpbmcuUm9vbUluZm8jaXNPcGVuXHJcbiAgICAgICAgICAgICAgICAgICAgQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgICAgICAgICAgICAgICAgQHJlYWRvbmx5XHJcbiAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgQHN1bW1hcnkgQ291bnQgb2YgcGxheWVyIGN1cnJlbnRseSBpbiByb29tLlxyXG4gICAgICAgICAgICAgICAgICAgIEBtZW1iZXIgUGhvdG9uLkxvYWRCYWxhbmNpbmcuUm9vbUluZm8jcGxheWVyQ291bnRcclxuICAgICAgICAgICAgICAgICAgICBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgIEByZWFkb25seVxyXG4gICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyQ291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgQHN1bW1hcnkgVGltZSBpbiBtcyBpbmRpY2F0aW5nIGhvdyBsb25nIHRoZSByb29tIGluc3RhbmNlIHdpbGwgYmUga2VlcGVkIGFsaXZlIGluIHRoZSBzZXJ2ZXIgcm9vbSBjYWNoZSBhZnRlciBhbGwgY2xpZW50cyBoYXZlIGxlZnQgdGhlIHJvb20uXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lbWJlciBQaG90b24uTG9hZEJhbGFuY2luZy5Sb29tSW5mbyNlbXB0eVJvb21MaXZlVGltZVxyXG4gICAgICAgICAgICAgICAgICAgIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgQHJlYWRvbmx5XHJcbiAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbXB0eVJvb21MaXZlVGltZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICBAc3VtbWFyeSBUaW1lIGluIG1zIGluZGljYXRpbmcgaG93IGxvbmcgc3VzcGVuZGVkIHBsYXllciB3aWxsIGJlIGtlcHQgaW4gdGhlIHJvb20uXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lbWJlciBQaG90b24uTG9hZEJhbGFuY2luZy5Sb29tSW5mbyNzdXNwZW5kZWRQbGF5ZXJMaXZlVGltZVxyXG4gICAgICAgICAgICAgICAgICAgIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgQHJlYWRvbmx5XHJcbiAgICAgICAgICAgICAgICAqKi9cclxuICAgICAgICAgICAgICAgIHRoaXMuc3VzcGVuZGVkUGxheWVyTGl2ZVRpbWUgPSAwO1xyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgQHN1bW1hcnkgUm9vbSByZW1vdmVkIChpbiByb29tIGxpc3QgdXBkYXRlcykuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lbWJlciBQaG90b24uTG9hZEJhbGFuY2luZy5Sb29tSW5mbyNyZW1vdmVkXHJcbiAgICAgICAgICAgICAgICAgICAgQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgICAgICAgICAgICAgICAgQHJlYWRvbmx5XHJcbiAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBkb2VzIGVuZCB1c2VyIG5lZWQgdGhpcz9cclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYW51cENhY2hlT25MZWF2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgQHN1bW1hcnkgTWFzdGVyIGNsaWVudCBzZXQgYnkgZ2FtZSBzZXJ2ZXIuIE5vdGU6IE5vdCBhbGwgc2VydmVycyBzdXBwb3J0IHRoaXMgY3VycmVudGx5LiBJZiB0aGUgdmFsdWUgb2YgdGhlIHByb3BlcnR5IGlzIDAsIHVzZSBsb3dlc3QgYWN0b3JpZCBpbnN0ZWFkLlxyXG4gICAgICAgICAgICAgICAgICAgIEBtZW1iZXIgUGhvdG9uLkxvYWRCYWxhbmNpbmcuUm9vbUluZm8jbWFzdGVyQ2xpZW50SWRcclxuICAgICAgICAgICAgICAgICAgICBAdHlwZSB7IG51bWJlciB9XHJcbiAgICAgICAgICAgICAgICAgICAgQHJlYWRvbmx5XHJcbiAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXN0ZXJDbGllbnRJZCA9IDA7XHJcbiAgICAgICAgICAgICAgICAvLyBjdXN0b20gcHJvcGVydGllc1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VzdG9tUHJvcGVydGllcyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvcHNMaXN0ZWRJbkxvYmJ5ID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgQHN1bW1hcnkgQ2FsbGVkIG9uIGV2ZXJ5IHJvb20gcHJvcGVydGllcyB1cGRhdGU6IHJvb20gY3JlYXRpb24sIHByb3BlcnRpZXMgc2V0IGJ5IGNsaWVudCwgcG9wZXJ0aWVzIHVwZGF0ZSBmcm9tIHNlcnZlci5cclxuICAgICAgICAgICAgICAgIE92ZXJyaWRlIHRvIHVwZGF0ZSBjdXN0b20gcm9vbSBzdGF0ZS5cclxuICAgICAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLkxvYWRCYWxhbmNpbmcuUm9vbUluZm8jb25Qcm9wZXJ0aWVzQ2hhbmdlXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge29iamVjdH0gY2hhbmdlZEN1c3RvbVByb3BzIEtleS12YWx1ZSBtYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzLlxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtib29sZWFufSBbYnlDbGllbnRdIHRydWUgaWYgY2FsbGVkIG9uIHJvb20gY3JlYXRpb24gb3IgcHJvcGVydGllcyBzZXQgYnkgY2xpZW50LlxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBSb29tSW5mby5wcm90b3R5cGUub25Qcm9wZXJ0aWVzQ2hhbmdlID0gZnVuY3Rpb24gKGNoYW5nZWRDdXN0b21Qcm9wcywgYnlDbGllbnQpIHsgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAc3VtbWFyeSBSZXR1cm5zIGN1c3RvbSBwcm9wZXJ0eSBieSBuYW1lLlxyXG4gICAgICAgICAgICAgICAgQG1ldGhvZCBQaG90b24uTG9hZEJhbGFuY2luZy5Sb29tSW5mbyNnZXRDdXN0b21Qcm9wZXJ0eVxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtzdHJpbmd9IG5hbWUgTmFtZSBvZiB0aGUgcHJvcGVydHkuXHJcbiAgICAgICAgICAgICAgICBAcmV0dXJucyB7b2JqZWN0fSBQcm9wZXJ0eSBvciB1bmRlZmluZWQgaWYgcHJvcGVydHkgbm90IGZvdW5kLlxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBSb29tSW5mby5wcm90b3R5cGUuZ2V0Q3VzdG9tUHJvcGVydHkgPSBmdW5jdGlvbiAocHJvcCkgeyByZXR1cm4gdGhpcy5fY3VzdG9tUHJvcGVydGllc1twcm9wXTsgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAc3VtbWFyeSBSZXR1cm5zIGN1c3RvbSBwcm9wZXJ0eSBieSBuYW1lIG9yIGRlZmF1bHQgdmFsdWUuXHJcbiAgICAgICAgICAgICAgICBAbWV0aG9kIFBob3Rvbi5Mb2FkQmFsYW5jaW5nLlJvb21JbmZvI2dldEN1c3RvbVByb3BlcnR5T3JFbHNlXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge3N0cmluZ30gbmFtZSBOYW1lIG9mIHRoZSBwcm9wZXJ0eS5cclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7b2JqZWN0fSBkZWZhdWx0VmFsdWUgRGVmYXVsdCBwcm9wZXJ0eSB2YWx1ZS5cclxuICAgICAgICAgICAgICAgIEByZXR1cm5zIHtvYmplY3R9IFByb3BlcnR5IG9yIGRlZmF1bHQgdmFsdWUgaWYgcHJvcGVydHkgbm90IGZvdW5kLlxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBSb29tSW5mby5wcm90b3R5cGUuZ2V0Q3VzdG9tUHJvcGVydHlPckVsc2UgPSBmdW5jdGlvbiAocHJvcCwgZGVmYXVsdFZhbHVlKSB7IHJldHVybiBFeGl0Z2FtZXMuQ29tbW9uLlV0aWwuZ2V0UHJvcGVydHlPckVsc2UodGhpcy5fY3VzdG9tUHJvcGVydGllcywgcHJvcCwgZGVmYXVsdFZhbHVlKTsgfTtcclxuICAgICAgICAgICAgUm9vbUluZm8ucHJvdG90eXBlLl91cGRhdGVGcm9tTWFzdGVyUmVzcG9uc2UgPSBmdW5jdGlvbiAodmFscykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRyZXNzID0gdmFsc1tMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5QYXJhbWV0ZXJDb2RlLkFkZHJlc3NdO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5hbWUgPSB2YWxzW0xvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuUm9vbU5hbWVdO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBSb29tSW5mby5wcm90b3R5cGUuX3VwZGF0ZUZyb21Qcm9wcyA9IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3BzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXhQbGF5ZXJzID0gdGhpcy51cGRhdGVJZkV4aXN0cyh0aGlzLm1heFBsYXllcnMsIExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLkdhbWVQcm9wZXJ0aWVzLk1heFBsYXllcnMsIHByb3BzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IHRoaXMudXBkYXRlSWZFeGlzdHModGhpcy5pc1Zpc2libGUsIExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLkdhbWVQcm9wZXJ0aWVzLklzVmlzaWJsZSwgcHJvcHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gdGhpcy51cGRhdGVJZkV4aXN0cyh0aGlzLmlzT3BlbiwgTG9hZEJhbGFuY2luZy5Db25zdGFudHMuR2FtZVByb3BlcnRpZXMuSXNPcGVuLCBwcm9wcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJDb3VudCA9IHRoaXMudXBkYXRlSWZFeGlzdHModGhpcy5wbGF5ZXJDb3VudCwgTG9hZEJhbGFuY2luZy5Db25zdGFudHMuR2FtZVByb3BlcnRpZXMuUGxheWVyQ291bnQsIHByb3BzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZWQgPSB0aGlzLnVwZGF0ZUlmRXhpc3RzKHRoaXMucmVtb3ZlZCwgTG9hZEJhbGFuY2luZy5Db25zdGFudHMuR2FtZVByb3BlcnRpZXMuUmVtb3ZlZCwgcHJvcHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Byb3BzTGlzdGVkSW5Mb2JieSA9IHRoaXMudXBkYXRlSWZFeGlzdHModGhpcy5fcHJvcHNMaXN0ZWRJbkxvYmJ5LCBMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5HYW1lUHJvcGVydGllcy5Qcm9wc0xpc3RlZEluTG9iYnksIHByb3BzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFudXBDYWNoZU9uTGVhdmUgPSB0aGlzLnVwZGF0ZUlmRXhpc3RzKHRoaXMuY2xlYW51cENhY2hlT25MZWF2ZSwgTG9hZEJhbGFuY2luZy5Db25zdGFudHMuR2FtZVByb3BlcnRpZXMuQ2xlYW51cENhY2hlT25MZWF2ZSwgcHJvcHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFzdGVyQ2xpZW50SWQgPSB0aGlzLnVwZGF0ZUlmRXhpc3RzKHRoaXMubWFzdGVyQ2xpZW50SWQsIExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLkdhbWVQcm9wZXJ0aWVzLk1hc3RlckNsaWVudElkLCBwcm9wcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbXB0eVJvb21MaXZlVGltZSA9IHRoaXMudXBkYXRlSWZFeGlzdHModGhpcy5lbXB0eVJvb21MaXZlVGltZSwgTG9hZEJhbGFuY2luZy5Db25zdGFudHMuR2FtZVByb3BlcnRpZXMuRW1wdHlSb29tVHRsLCBwcm9wcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdXNwZW5kZWRQbGF5ZXJMaXZlVGltZSA9IHRoaXMudXBkYXRlSWZFeGlzdHModGhpcy5zdXNwZW5kZWRQbGF5ZXJMaXZlVGltZSwgTG9hZEJhbGFuY2luZy5Db25zdGFudHMuR2FtZVByb3BlcnRpZXMuUGxheWVyVHRsLCBwcm9wcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoYW5nZWRQcm9wcyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGsgaW4gcHJvcHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KGspLnRvU3RyaW5nKCkgIT0gaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2N1c3RvbVByb3BlcnRpZXNba10gIT09IHByb3BzW2tdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VzdG9tUHJvcGVydGllc1trXSA9IHByb3BzW2tdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZWRQcm9wc1trXSA9IHByb3BzW2tdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Qcm9wZXJ0aWVzQ2hhbmdlKGNoYW5nZWRQcm9wcywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBSb29tSW5mby5wcm90b3R5cGUuX3VwZGF0ZUZyb21FdmVudCA9IGZ1bmN0aW9uIChwYXlsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGF5bG9hZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFzdGVyQ2xpZW50SWQgPSB0aGlzLnVwZGF0ZUlmRXhpc3RzKHRoaXMubWFzdGVyQ2xpZW50SWQsIExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuTWFzdGVyQ2xpZW50SWQsIHBheWxvYWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBSb29tSW5mby5wcm90b3R5cGUudXBkYXRlSWZFeGlzdHMgPSBmdW5jdGlvbiAocHJldlZhbHVlLCBjb2RlLCBwcm9wcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGNvZGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzW2NvZGVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZXZWYWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIFJvb21JbmZvO1xyXG4gICAgICAgIH0oKSk7XHJcbiAgICAgICAgTG9hZEJhbGFuY2luZy5Sb29tSW5mbyA9IFJvb21JbmZvO1xyXG4gICAgICAgIC8vIGpvaW5lZCByb29tIHdpdGggd3JpdGFibGUgcHJvcGVydGllc1xyXG4gICAgICAgIHZhciBSb29tID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgICAgICAgICBfX2V4dGVuZHMoUm9vbSwgX3N1cGVyKTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAY2xhc3NkZXNjIFJlcHJlc2VudHMgYSByb29tIGNsaWVudCBqb2lucyBvciBpcyBqb2luZWQgdG8uIEV4dGVuZCB0byBpbXBsZW1lbnQgY3VzdG9tIGxvZ2ljLiBDdXN0b20gcHJvcGVydGllcyBjYW4gYmUgc2V0IHZpYSBzZXRDdXN0b21Qcm9wZXJ0eSgpIHdoaWxlIGJlaW5nIGluIHRoZSByb29tLlxyXG4gICAgICAgICAgICAgICAgQG1peGVzIFBob3Rvbi5Mb2FkQmFsYW5jaW5nLlJvb21JbmZvXHJcbiAgICAgICAgICAgICAgICBAY29uc3RydWN0b3IgUGhvdG9uLkxvYWRCYWxhbmNpbmcuUm9vbVxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtzdHJpbmd9IG5hbWUgUm9vbSBuYW1lLlxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBSb29tKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBuYW1lKSB8fCB0aGlzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHJvb20gY3JlYXRlZCBmcm9tIGNsaWVudCB2aWEgZmFjdG9yeSBhbHdheXMgaGFzIHRoaXMgZmllbGQgc2V0XHJcbiAgICAgICAgICAgIC8vcHVibGljIGdldExvYWRCYWxhbmNpbmdDbGllbnQoKSB7IHJldHVybiB0aGlzLmxvYWRCYWxhbmNpbmdDbGllbnQ7IH1cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAc3VtbWFyeSBTZXRzIGN1c3RvbSBwcm9wZXJ0eVxyXG4gICAgICAgICAgICAgICAgQG1ldGhvZCBQaG90b24uTG9hZEJhbGFuY2luZy5Sb29tI3NldEN1c3RvbVByb3BlcnR5XHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge3N0cmluZ30gbmFtZSBOYW1lIG9mIHRoZSBwcm9wZXJ0eS5cclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZSBQcm9wZXJ0eSB2YWx1ZS5cclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7Ym9vbGVhbn0gW3dlYkZvcndhcmQ9ZmFsc2VdIEZvcndhcmQgdG8gd2ViIGhvb2suXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge29iamVjdH0gW2V4cGVjdGVkVmFsdWVdIFByb3BlcnR5IHZhbHVlIGV4cGVjdGVkIHdoZW4gdXBkYXRlIG9jY3Vycy4gKENBUyA6IFwiQ2hlY2sgQW5kIFN3YXBcIilcclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgUm9vbS5wcm90b3R5cGUuc2V0Q3VzdG9tUHJvcGVydHkgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIHdlYkZvcndhcmQsIGV4cGVjdGVkVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh3ZWJGb3J3YXJkID09PSB2b2lkIDApIHsgd2ViRm9yd2FyZCA9IGZhbHNlOyB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXN0b21Qcm9wZXJ0aWVzW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvcHMgPSB7fTtcclxuICAgICAgICAgICAgICAgIHByb3BzW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB2YXIgZXhwZWN0ZWRQcm9wcztcclxuICAgICAgICAgICAgICAgIGlmIChleHBlY3RlZFZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkUHJvcHMgPSAoX2EgPSB7fSwgX2FbbmFtZV0gPSBleHBlY3RlZFZhbHVlLCBfYSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2FkQmFsYW5jaW5nQ2xpZW50ICYmIHRoaXMubG9hZEJhbGFuY2luZ0NsaWVudC5pc0pvaW5lZFRvUm9vbSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQmFsYW5jaW5nQ2xpZW50Ll9zZXRQcm9wZXJ0aWVzT2ZSb29tKHByb3BzLCB3ZWJGb3J3YXJkLCBleHBlY3RlZFByb3BzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMub25Qcm9wZXJ0aWVzQ2hhbmdlKHByb3BzLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAc3VtbWFyeSBTZXRzIGN1c3RvbSBwcm9wZXJ0eVxyXG4gICAgICAgICAgICAgICAgQG1ldGhvZCBQaG90b24uTG9hZEJhbGFuY2luZy5Sb29tI3NldEN1c3RvbVByb3BlcnRpZXNcclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7b2JqZWN0fSBwcm9wZXJ0aWVzIFRhYmxlIG9mIHByb3BlcnRpZXMgdG8gc2V0LlxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtib29sZWFufSBbd2ViRm9yd2FyZD1mYWxzZV0gRm9yd2FyZCB0byB3ZWIgaG9vay5cclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7b2JqZWN0fSBbZXhwZWN0ZWRQcm9wZXJ0aWVzXSBUYWJsZSBvZiBwcm9wZXJ0aWVzIGV4cGVjdGVkIHdoZW4gdXBkYXRlIG9jY3Vycy4gKENBUyA6IFwiQ2hlY2sgQW5kIFN3YXBcIilcclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgUm9vbS5wcm90b3R5cGUuc2V0Q3VzdG9tUHJvcGVydGllcyA9IGZ1bmN0aW9uIChwcm9wZXJ0aWVzLCB3ZWJGb3J3YXJkLCBleHBlY3RlZFByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh3ZWJGb3J3YXJkID09PSB2b2lkIDApIHsgd2ViRm9yd2FyZCA9IGZhbHNlOyB9XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvcHMgPSB7fTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIG5hbWUgaW4gcHJvcGVydGllcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1c3RvbVByb3BlcnRpZXNbbmFtZV0gPSBwcm9wZXJ0aWVzW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzW25hbWVdID0gcHJvcGVydGllc1tuYW1lXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvYWRCYWxhbmNpbmdDbGllbnQgJiYgdGhpcy5sb2FkQmFsYW5jaW5nQ2xpZW50LmlzSm9pbmVkVG9Sb29tKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRCYWxhbmNpbmdDbGllbnQuX3NldFByb3BlcnRpZXNPZlJvb20ocHJvcHMsIHdlYkZvcndhcmQsIGV4cGVjdGVkUHJvcGVydGllcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uUHJvcGVydGllc0NoYW5nZShwcm9wcywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIFJvb20ucHJvdG90eXBlLnNldFByb3AgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvYWRCYWxhbmNpbmdDbGllbnQgJiYgdGhpcy5sb2FkQmFsYW5jaW5nQ2xpZW50LmlzSm9pbmVkVG9Sb29tKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcHMgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wc1tuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEJhbGFuY2luZ0NsaWVudC5fc2V0UHJvcGVydGllc09mUm9vbShwcm9wcywgZmFsc2UsIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBAc3VtbWFyeSBTZXRzIHJvb21zIHZpc2liaWxpdHkgaW4gdGhlIGxvYmJ5J3Mgcm9vbSBsaXN0LlxyXG4gICAgICAgICAgICAgKiBAbWV0aG9kIFBob3Rvbi5Mb2FkQmFsYW5jaW5nLlJvb20jc2V0SXNWaXNpYmxlXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNWaXNpYmxlIE5ldyB2aXNpYmlsaXR5IHZhbHVlLlxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBSb29tLnByb3RvdHlwZS5zZXRJc1Zpc2libGUgPSBmdW5jdGlvbiAoaXNWaXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1Zpc2libGUgIT0gaXNWaXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1Zpc2libGUgPSBpc1Zpc2libGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9wKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLkdhbWVQcm9wZXJ0aWVzLklzVmlzaWJsZSwgaXNWaXNpYmxlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEBzdW1tYXJ5IFNldHMgaWYgdGhpcyByb29tIGNhbiBiZSBqb2luZWQuXHJcbiAgICAgICAgICAgICAqIEBtZXRob2QgUGhvdG9uLkxvYWRCYWxhbmNpbmcuUm9vbSNzZXRJc09wZW5cclxuICAgICAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBpc09wZW4gTmV3IHByb3BlcnR5IHZhbHVlLlxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBSb29tLnByb3RvdHlwZS5zZXRJc09wZW4gPSBmdW5jdGlvbiAoaXNPcGVuKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc09wZW4gIT0gaXNPcGVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc09wZW4gPSBpc09wZW47XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9wKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLkdhbWVQcm9wZXJ0aWVzLklzT3BlbiwgaXNPcGVuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEBzdW1tYXJ5IFNldHMgbWF4IHBsYXllcnMgYmVmb3JlIHJvb20gaXMgY29uc2lkZXJlZCBmdWxsLlxyXG4gICAgICAgICAgICAgKiBAbWV0aG9kIFBob3Rvbi5Mb2FkQmFsYW5jaW5nLlJvb20jc2V0TWF4UGxheWVyc1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4UGxheWVycyBOZXcgbWF4IHBsYXllcnMgdmFsdWUuXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFJvb20ucHJvdG90eXBlLnNldE1heFBsYXllcnMgPSBmdW5jdGlvbiAobWF4UGxheWVycykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWF4UGxheWVycyAhPSBtYXhQbGF5ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXhQbGF5ZXJzID0gbWF4UGxheWVycztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFByb3AoTG9hZEJhbGFuY2luZy5Db25zdGFudHMuR2FtZVByb3BlcnRpZXMuTWF4UGxheWVycywgbWF4UGxheWVycyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBAc3VtbWFyeSBTZXRzIHJvb20gbGl2ZSB0aW1lIGluIHRoZSBzZXJ2ZXIgcm9vbSBjYWNoZSBhZnRlciBhbGwgY2xpZW50cyBoYXZlIGxlZnQgdGhlIHJvb20uXHJcbiAgICAgICAgICAgICAqIEBtZXRob2QgUGhvdG9uLkxvYWRCYWxhbmNpbmcuUm9vbSNzZXRFbXB0eVJvb21MaXZlVGltZVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gZW1wdHlSb29tTGl2ZVRpbWUgTmV3IGxpdmUgdGltZSB2YWx1ZSBpbiBtcy5cclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgUm9vbS5wcm90b3R5cGUuc2V0RW1wdHlSb29tTGl2ZVRpbWUgPSBmdW5jdGlvbiAoZW1wdHlSb29tTGl2ZVRpbWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVtcHR5Um9vbUxpdmVUaW1lICE9IGVtcHR5Um9vbUxpdmVUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbXB0eVJvb21MaXZlVGltZSA9IGVtcHR5Um9vbUxpdmVUaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJvcChMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5HYW1lUHJvcGVydGllcy5FbXB0eVJvb21UdGwsIGVtcHR5Um9vbUxpdmVUaW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEBzdW1tYXJ5IFNldHMgdGltZSBpbiBtcyBpbmRpY2F0aW5nIGhvdyBsb25nIHN1c3BlbmRlZCBwbGF5ZXIgd2lsbCBiZSBrZXB0IGluIHRoZSByb29tLlxyXG4gICAgICAgICAgICAgKiBAbWV0aG9kIFBob3Rvbi5Mb2FkQmFsYW5jaW5nLlJvb20jc2V0U3VzcGVuZGVkUGxheWVyTGl2ZVRpbWVcclxuICAgICAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHN1c3BlbmRlZFBsYXllckxpdmVUaW1lIE5ldyBsaXZlIHRpbWUgdmFsdWUgaW4gbXMuXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFJvb20ucHJvdG90eXBlLnNldFN1c3BlbmRlZFBsYXllckxpdmVUaW1lID0gZnVuY3Rpb24gKHN1c3BlbmRlZFBsYXllckxpdmVUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdXNwZW5kZWRQbGF5ZXJMaXZlVGltZSAhPSBzdXNwZW5kZWRQbGF5ZXJMaXZlVGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VzcGVuZGVkUGxheWVyTGl2ZVRpbWUgPSBzdXNwZW5kZWRQbGF5ZXJMaXZlVGltZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFByb3AoTG9hZEJhbGFuY2luZy5Db25zdGFudHMuR2FtZVByb3BlcnRpZXMuUGxheWVyVHRsLCBzdXNwZW5kZWRQbGF5ZXJMaXZlVGltZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBAc3VtbWFyeSBTZXRzIGV4cGVjdGVkIHNlcnZlciBwbHVnaW5zLlxyXG4gICAgICAgICAgICAgKiBAbWV0aG9kIFBob3Rvbi5Mb2FkQmFsYW5jaW5nLlJvb20jc2V0UGx1Z2luc1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwbHVnaW5zIE5ldyBwbHVnaW5zIGxpc3QuXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFJvb20ucHJvdG90eXBlLnNldFBsdWdpbnMgPSBmdW5jdGlvbiAocGx1Z2lucykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbHVnaW5zID0gcGx1Z2lucztcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAc3VtbWFyeSBTZXRzIGxpc3Qgb2YgdGhlIHJvb20gcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBSb29tSW5mbyBsaXN0IGluIGEgbG9iYnkuXHJcbiAgICAgICAgICAgICAgICBAbWV0aG9kIFBob3Rvbi5Mb2FkQmFsYW5jaW5nLlJvb20jc2V0UHJvcHNMaXN0ZWRJbkxvYmJ5XHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge3N0cmluZ1tdfSBwcm9wcyBBcnJheSBvZiBwcm9wZXJ0aWVzIG5hbWVzLlxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBSb29tLnByb3RvdHlwZS5zZXRQcm9wc0xpc3RlZEluTG9iYnkgPSBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Byb3BzTGlzdGVkSW5Mb2JieSA9IHByb3BzO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBSb29tLnByb3RvdHlwZS5fc2V0TEJDID0gZnVuY3Rpb24gKGxiYykgeyB0aGlzLmxvYWRCYWxhbmNpbmdDbGllbnQgPSBsYmM7IH07XHJcbiAgICAgICAgICAgIHJldHVybiBSb29tO1xyXG4gICAgICAgIH0oUm9vbUluZm8pKTtcclxuICAgICAgICBMb2FkQmFsYW5jaW5nLlJvb20gPSBSb29tO1xyXG4gICAgICAgIHZhciBMb2FkQmFsYW5jaW5nQ2xpZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBjbGFzc2Rlc2MgSW1wbGVtZW50cyB0aGUgUGhvdG9uIExvYWRCYWxhbmNpbmcgd29ya2Zsb3cuIFRoaXMgY2xhc3Mgc2hvdWxkIGJlIGV4dGVuZGVkIHRvIGhhbmRsZSBzeXN0ZW0gb3IgY3VzdG9tIGV2ZW50cyBhbmQgb3BlcmF0aW9uIHJlc3BvbnNlcy5cclxuICAgICAgICAgICAgICAgIEBjb25zdHJ1Y3RvciBQaG90b24uTG9hZEJhbGFuY2luZy5Mb2FkQmFsYW5jaW5nQ2xpZW50XHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge1Bob3Rvbi5Db25uZWN0aW9uUHJvdG9jb2x9IHByb3RvY29sIENvbm5lY3RvbiBwcm90b2NvbC5cclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7c3RyaW5nfSBhcHBJZCBDbG91ZCBhcHBsaWNhdGlvbiBJRC5cclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7c3RyaW5nfSBhcHBWZXJzaW9uIENsb3VkIGFwcGxpY2F0aW9uIHZlcnNpb24uXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIExvYWRCYWxhbmNpbmdDbGllbnQocHJvdG9jb2wsIGFwcElkLCBhcHBWZXJzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcElkID0gYXBwSWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcFZlcnNpb24gPSBhcHBWZXJzaW9uO1xyXG4gICAgICAgICAgICAgICAgLy8gcHJvdGVjdGVkXHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9Kb2luTG9iYnkgPSB0cnVlOyAvLyBoYXJkY29kZWQgYmVoYXZpb3VyOyBpbmhlcml0b3IgY2xhc3MgY2FuIG92ZXJyaWRlIHRoaXNcclxuICAgICAgICAgICAgICAgIC8vIG9wdGlvbnMgbWFpbmx5IGtlZXAgc3RhdGUgYmV0d2VlbiBzZXJ2ZXJzXHJcbiAgICAgICAgICAgICAgICAvLyBzZXQgLyBjbGVhcmVkIGluIGNvbm5lY3RUb05hbWVTZXJ2ZXIoKShjb25uZWN0VG9SZWdpb25NYXN0ZXIoKSksIGNvbm5lY3QoKVxyXG4gICAgICAgICAgICAgICAgLy8gbG9iYnlOYW1lIGFuZCBsb2JieVR5cGUgcGFzc2VkIHRvIEpvaW5Mb2JieSBvcGVyYXRpb24gKHdlIGRvbid0IGhhdmUgc2VwYXJhdGUgSm9pbkxvYmJ5IG9wZXJhdGlvbiBhbmQgc2V0IHRoZW0gaW4gY29ubmVjdCgpKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0T3B0aW9ucyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgLy8gc2hhcmVzIGxvYmJ5IGluZm8gYmV0d2VlbiBNYXN0ZXIgYW5kIEdhbWUgQ3JlYXRlR2FtZSBjYWxscyAoY3JlYXRlUm9vbUludGVybmFsKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVSb29tT3B0aW9ucyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgLy8gc2hhcmVzIG9wdGlvbnMgYmV0d2VlbiBNYXN0ZXIgYW5kIEdhbWUgSm9pbkdhbWUgb3BlcmF0aW9uc1xyXG4gICAgICAgICAgICAgICAgdGhpcy5qb2luUm9vbU9wdGlvbnMgPSB7fTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm9vbUluZm9zID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvb21JbmZvc0RpY3QgPSB7fTsgLy8gJ2J5IG5hbWUnIGFjY2VzcyBzdXBwb3J0XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdG9ycyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RvcnNBcnJheSA9IFtdOyAvLyBhY3RvcnMgJ2F0IGluZGV4JyBhY2Nlc3Mgc3VwcG9ydCAoU2NpcnJhL0Nvc3RydWN0IDIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvd2VzdEFjdG9ySWQgPSAwOyAvLyBtYXN0ZXIgY2xpZW50IHN1cHBvcnRcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlckF1dGhUeXBlID0gTG9hZEJhbGFuY2luZy5Db25zdGFudHMuQ3VzdG9tQXV0aGVudGljYXRpb25UeXBlLk5vbmU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJBdXRoUGFyYW1ldGVycyA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJBdXRoRGF0YSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYmJ5U3RhdHNSZXF1ZXN0TGlzdCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gcHJvdGVjdGVkXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gTG9hZEJhbGFuY2luZ0NsaWVudC5TdGF0ZS5VbmluaXRpYWxpemVkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIgPSBuZXcgRXhpdGdhbWVzLkNvbW1vbi5Mb2dnZXIoXCJDbGllbnQ6XCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZE5leHRTdGF0ZSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlcnZlckFkZHJlc3MgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAocHJvdG9jb2wpID09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25Qcm90b2NvbCA9IHByb3RvY29sO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocHJvdG9jb2wpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBQaG90b24uQ29ubmVjdGlvblByb3RvY29sLldzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXN0ZXJTZXJ2ZXJBZGRyZXNzID0gXCJ3czovL2FwcC1ldS5leGl0Z2FtZXNjbG91ZC5jb206OTA5MFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lU2VydmVyQWRkcmVzcyA9IFwid3M6Ly9ucy5leGl0Z2FtZXMuY29tOjkwOTNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFBob3Rvbi5Db25uZWN0aW9uUHJvdG9jb2wuV3NzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXN0ZXJTZXJ2ZXJBZGRyZXNzID0gXCJ3c3M6Ly9hcHAtZXUuZXhpdGdhbWVzY2xvdWQuY29tOjE5MDkwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWVTZXJ2ZXJBZGRyZXNzID0gXCJ3c3M6Ly9ucy5leGl0Z2FtZXMuY29tOjE5MDkzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzMCA9IFwid3JvbmdfcHJvdG9jb2xfZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFzdGVyU2VydmVyQWRkcmVzcyA9IHMwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lU2VydmVyQWRkcmVzcyA9IHMwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJXcm9uZyBwcm90b2NvbDogXCIsIHByb3RvY29sKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiAocHJvdG9jb2wpID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25Qcm90b2NvbCA9IFBob3Rvbi5Db25uZWN0aW9uUHJvdG9jb2wuV3M7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSBwcm90b2NvbDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hc3RlclNlcnZlckFkZHJlc3MgPSBzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmFtZVNlcnZlckFkZHJlc3MgPSBzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uUHJvdG9jb2wgPSBQaG90b24uQ29ubmVjdGlvblByb3RvY29sLldzO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzMSA9IFwid3JvbmdfcHJvdG9jb2xfdHlwZV9lcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFzdGVyU2VydmVyQWRkcmVzcyA9IHMxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmFtZVNlcnZlckFkZHJlc3MgPSBzMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihcIldyb25nIHByb3RvY29sIHR5cGU6IFwiLCB0eXBlb2YgKHByb3RvY29sKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRWYWxpZE5leHRTdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Um9vbSA9IHRoaXMucm9vbUZhY3RvcnlJbnRlcm5hbChcIlwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX215QWN0b3IgPSB0aGlzLmFjdG9yRmFjdG9yeUludGVybmFsKFwiXCIsIC0xLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQWN0b3IodGhpcy5fbXlBY3Rvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gb3ZlcnJpZGUgdG8gaGFuZGxlIHN5c3RlbSBldmVudHM6XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgQHN1bW1hcnkgQ2FsbGVkIG9uIGNsaWVudCBzdGF0ZSBjaGFuZ2UuIE92ZXJyaWRlIHRvIGhhbmRsZSBpdC5cclxuICAgICAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLkxvYWRCYWxhbmNpbmcuTG9hZEJhbGFuY2luZ0NsaWVudCNvblN0YXRlQ2hhbmdlXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge1Bob3Rvbi5Mb2FkQmFsYW5jaW5nLkxvYWRCYWxhbmNpbmdDbGllbnQuU3RhdGV9IHN0YXRlIE5ldyBjbGllbnQgc3RhdGUuXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIExvYWRCYWxhbmNpbmdDbGllbnQucHJvdG90eXBlLm9uU3RhdGVDaGFuZ2UgPSBmdW5jdGlvbiAoc3RhdGUpIHsgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAc3VtbWFyeSBDYWxsZWQgaWYgY2xpZW50IGVycm9yIG9jY3VyZXMuIE92ZXJyaWRlIHRvIGhhbmRsZSBpdC5cclxuICAgICAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLkxvYWRCYWxhbmNpbmcuTG9hZEJhbGFuY2luZ0NsaWVudCNvbkVycm9yXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge1Bob3Rvbi5Mb2FkQmFsYW5jaW5nLkxvYWRCYWxhbmNpbmdDbGllbnQuUGVlckVycm9yQ29kZX0gZXJyb3JDb2RlIENsaWVudCBlcnJvciBjb2RlLlxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtzdHJpbmd9IGVycm9yTXNnIEVycm9yIG1lc3NhZ2UuXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIExvYWRCYWxhbmNpbmdDbGllbnQucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3JDb2RlLCBlcnJvck1zZykgeyB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IENhbGxlZCBvbiBvcGVyYXRpb24gcmVzcG9uc2UuIE92ZXJyaWRlIGlmIG5lZWQgY3VzdG9tIHdvcmtmbG93IG9yIHJlc3BvbnNlIGVycm9yIGhhbmRsaW5nLlxyXG4gICAgICAgICAgICAgICAgQG1ldGhvZCBQaG90b24uTG9hZEJhbGFuY2luZy5Mb2FkQmFsYW5jaW5nQ2xpZW50I29uT3BlcmF0aW9uUmVzcG9uc2VcclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7bnVtYmVyfSBlcnJvckNvZGUgU2VydmVyIGVycm9yIGNvZGUuXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge3N0cmluZ30gZXJyb3JNc2cgRXJyb3IgbWVzc2FnZS5cclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7bnVtYmVyfSBjb2RlIE9wZXJhdGlvbiBjb2RlLlxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtvYmplY3R9IGNvbnRlbnQgT3BlcmF0aW9uIHJlc3BvbnNlIGNvbnRlbnQuXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIExvYWRCYWxhbmNpbmdDbGllbnQucHJvdG90eXBlLm9uT3BlcmF0aW9uUmVzcG9uc2UgPSBmdW5jdGlvbiAoZXJyb3JDb2RlLCBlcnJvck1zZywgY29kZSwgY29udGVudCkgeyB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IENhbGxlZCBvbiBjdXN0b20gZXZlbnQuIE92ZXJyaWRlIHRvIGhhbmRsZSBpdC5cclxuICAgICAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLkxvYWRCYWxhbmNpbmcuTG9hZEJhbGFuY2luZ0NsaWVudCNvbkV2ZW50XHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge251bWJlcn0gY29kZSBFdmVudCBjb2RlLlxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtvYmplY3R9IGNvbnRlbnQgRXZlbnQgY29udGVudC5cclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7bnVtYmVyfSBhY3Rvck5yIEFjdG9yIElEIGV2ZW50IHJhaXNlZCBieS5cclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTG9hZEJhbGFuY2luZ0NsaWVudC5wcm90b3R5cGUub25FdmVudCA9IGZ1bmN0aW9uIChjb2RlLCBjb250ZW50LCBhY3Rvck5yKSB7IH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgQHN1bW1hcnkgQ2FsbGVkIG9uIHJvb20gbGlzdCByZWNlaXZlZCBmcm9tIE1hc3RlciBzZXJ2ZXIgKG9uIGNvbm5lY3Rpb24pLiBPdmVycmlkZSB0byBoYW5kbGUgaXQuXHJcbiAgICAgICAgICAgICAgICBAbWV0aG9kIFBob3Rvbi5Mb2FkQmFsYW5jaW5nLkxvYWRCYWxhbmNpbmdDbGllbnQjb25Sb29tTGlzdFxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHt7QGxpbmsgUGhvdG9uLkxvYWRCYWxhbmNpbmcuUm9vbUluZm99W119IHJvb21zIFJvb20gbGlzdC5cclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTG9hZEJhbGFuY2luZ0NsaWVudC5wcm90b3R5cGUub25Sb29tTGlzdCA9IGZ1bmN0aW9uIChyb29tcykgeyB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IENhbGxlZCBvbiByb29tIGxpc3QgdXBkYXRlcyByZWNlaXZlZCBmcm9tIE1hc3RlciBzZXJ2ZXIuIE92ZXJyaWRlIHRvIGhhbmRsZSBpdC5cclxuICAgICAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLkxvYWRCYWxhbmNpbmcuTG9hZEJhbGFuY2luZ0NsaWVudCNvblJvb21MaXN0VXBkYXRlXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge3tAbGluayBQaG90b24uTG9hZEJhbGFuY2luZy5Sb29tSW5mb31bXX0gcm9vbXMgVXBkYXRlZCByb29tIGxpc3QuXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge3tAbGluayBQaG90b24uTG9hZEJhbGFuY2luZy5Sb29tSW5mb31bXX0gcm9vbXNVcGRhdGVkIFJvb21zIHdob3NlIHByb3BlcnRpZXMgd2VyZSBjaGFuZ2VkLlxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHt7QGxpbmsgUGhvdG9uLkxvYWRCYWxhbmNpbmcuUm9vbUluZm99W119IHJvb21zQWRkZWQgTmV3IHJvb21zIGluIGxpc3QuXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge3tAbGluayBQaG90b24uTG9hZEJhbGFuY2luZy5Sb29tSW5mb31bXX0gcm9vbXNSZW1vdmVkIFJvb21zIHJlbW92ZWQgZnJvbSBsaXN0LlxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBMb2FkQmFsYW5jaW5nQ2xpZW50LnByb3RvdHlwZS5vblJvb21MaXN0VXBkYXRlID0gZnVuY3Rpb24gKHJvb21zLCByb29tc1VwZGF0ZWQsIHJvb21zQWRkZWQsIHJvb21zUmVtb3ZlZCkgeyB9O1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBtb3ZlIHRvIFJvb20/IE9yIHJlbW92ZSBhbmQgdXNlIFJvb20ub25Qcm9wZXJ0aWVzQ2hhbmdlIG9ubHk/XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgQHN1bW1hcnkgQ2FsbGVkIG9uIGpvaW5lZCByb29tIHByb3BlcnRpZXMgY2hhbmdlZCBldmVudC4gT3ZlcnJpZGUgdG8gaGFuZGxlIGl0LlxyXG4gICAgICAgICAgICAgICAgQG1ldGhvZCBQaG90b24uTG9hZEJhbGFuY2luZy5Mb2FkQmFsYW5jaW5nQ2xpZW50I29uTXlSb29tUHJvcGVydGllc0NoYW5nZVxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBMb2FkQmFsYW5jaW5nQ2xpZW50LnByb3RvdHlwZS5vbk15Um9vbVByb3BlcnRpZXNDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7IH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgQHN1bW1hcnkgQ2FsbGVkIG9uIGFjdG9yIHByb3BlcnRpZXMgY2hhbmdlZCBldmVudC4gT3ZlcnJpZGUgdG8gaGFuZGxlIGl0LlxyXG4gICAgICAgICAgICAgICAgQG1ldGhvZCBQaG90b24uTG9hZEJhbGFuY2luZy5Mb2FkQmFsYW5jaW5nQ2xpZW50I29uQWN0b3JQcm9wZXJ0aWVzQ2hhbmdlXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge1Bob3Rvbi5Mb2FkQmFsYW5jaW5nLkFjdG9yfSBhY3RvciBBY3RvciB3aG9zZSBwcm9wZXJ0aWVzIHdlcmUgY2hhbmdlZC5cclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTG9hZEJhbGFuY2luZ0NsaWVudC5wcm90b3R5cGUub25BY3RvclByb3BlcnRpZXNDaGFuZ2UgPSBmdW5jdGlvbiAoYWN0b3IpIHsgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAc3VtbWFyeSBDYWxsZWQgd2hlbiBjbGllbnQgam9pbnMgcm9vbS4gT3ZlcnJpZGUgdG8gaGFuZGxlIGl0LlxyXG4gICAgICAgICAgICAgICAgQG1ldGhvZCBQaG90b24uTG9hZEJhbGFuY2luZy5Mb2FkQmFsYW5jaW5nQ2xpZW50I29uSm9pblJvb21cclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7Ym9vbGVhbn0gY3JlYXRlZEJ5TWUgVHJ1ZSBpZiByb29tIGlzIGNyZWF0ZWQgYnkgY2xpZW50LlxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBMb2FkQmFsYW5jaW5nQ2xpZW50LnByb3RvdHlwZS5vbkpvaW5Sb29tID0gZnVuY3Rpb24gKGNyZWF0ZWRCeU1lKSB7IH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgQHN1bW1hcnkgQ2FsbGVkIHdoZW4gbmV3IGFjdG9yIGpvaW5zIHRoZSByb29tIGNsaWVudCBqb2luZWQgdG8uIE92ZXJyaWRlIHRvIGhhbmRsZSBpdC5cclxuICAgICAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLkxvYWRCYWxhbmNpbmcuTG9hZEJhbGFuY2luZ0NsaWVudCNvbkFjdG9ySm9pblxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtQaG90b24uTG9hZEJhbGFuY2luZy5BY3Rvcn0gYWN0b3IgTmV3IGFjdG9yLlxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBMb2FkQmFsYW5jaW5nQ2xpZW50LnByb3RvdHlwZS5vbkFjdG9ySm9pbiA9IGZ1bmN0aW9uIChhY3RvcikgeyB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IENhbGxlZCB3aGVuIGFjdG9yIGxlYXZlcyB0aGUgcm9vbSBjbGllbnQgam9pbmVkIHRvLiBBbHNvIGNhbGxlZCBmb3IgZXZlcnkgYWN0b3IgZHVyaW5nIHJvb20gY2xlYW51cC4gT3ZlcnJpZGUgdG8gaGFuZGxlIGl0LlxyXG4gICAgICAgICAgICAgICAgQG1ldGhvZCBQaG90b24uTG9hZEJhbGFuY2luZy5Mb2FkQmFsYW5jaW5nQ2xpZW50I29uQWN0b3JMZWF2ZVxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtQaG90b24uTG9hZEJhbGFuY2luZy5BY3Rvcn0gYWN0b3IgQWN0b3IgbGVmdCB0aGUgcm9vbS5cclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7Ym9vbGVhbn0gY2xlYW51cCBUcnVlIGlmIGNhbGxlZCBkdXJpbmcgcm9vbSBjbGVhbnVwIChlLmcuIG9uIGRpc2Nvbm5lY3QpLlxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBMb2FkQmFsYW5jaW5nQ2xpZW50LnByb3RvdHlwZS5vbkFjdG9yTGVhdmUgPSBmdW5jdGlvbiAoYWN0b3IsIGNsZWFudXApIHsgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAc3VtbWFyeSBDYWxsZWQgd2hlbiBhY3RvciBzdXNwZW5kZWQgaW4gdGhlIHJvb20gY2xpZW50IGpvaW5lZCB0by5PdmVycmlkZSB0byBoYW5kbGUgaXQuXHJcbiAgICAgICAgICAgICAgICBAbWV0aG9kIFBob3Rvbi5Mb2FkQmFsYW5jaW5nLkxvYWRCYWxhbmNpbmdDbGllbnQjb25BY3RvclN1c3BlbmRcclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7UGhvdG9uLkxvYWRCYWxhbmNpbmcuQWN0b3J9IGFjdG9yIEFjdG9yIHN1c3BlbmRlZCBpbiB0aGUgcm9vbS5cclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTG9hZEJhbGFuY2luZ0NsaWVudC5wcm90b3R5cGUub25BY3RvclN1c3BlbmQgPSBmdW5jdGlvbiAoYWN0b3IpIHsgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAc3VtbWFyeSBDYWxsZWQgd2hlbiB7QGxpbmsgUGhvdG9uLkxvYWRCYWxhbmNpbmcuTG9hZEJhbGFuY2luZ0NsaWVudCNmaW5kRnJpZW5kcyBmaW5kRnJpZW5kc30gcmVxdWVzdCBjb21wbGV0ZWQuIDxici8+XHJcbiAgICAgICAgICAgICAgICBPdmVycmlkZSB0byBoYW5kbGUgcmVxdWVzdCByZXN1bHRzLlxyXG4gICAgICAgICAgICAgICAgQG1ldGhvZCBQaG90b24uTG9hZEJhbGFuY2luZy5Mb2FkQmFsYW5jaW5nQ2xpZW50I29uRmluZEZyaWVuZHNSZXN1bHRcclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7bnVtYmVyfSBlcnJvckNvZGUgUmVzdWx0IGVycm9yIGNvZGUuIDAgaWYgcmVxdWVzdCBpcyBzdWNjZXNzZnVsLlxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtzdHJpbmd9IGVycm9yTXNnIEVycm9yIG1lc3NhZ2UuXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge29iamVjdH0gZnJpZW5kcyBUYWJsZSB3aXRoIGFjdG9ycyBuYW1lcyBhcyBrZXlzIGFuZCBmcmllbmQgc3RhdHVzZXMgYXMgdmFsdWVzOiB7bmFtZTE6IGZyaWVuZFN0YXR1czEsIG5hbWUyOiBmcmllbmRTdGF0dXMyLCAuLi4gfS5cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7b2JqZWN0fSBmcmllbmRTdGF0dXMgRnJpZW5kIHN0YXR1cy5cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZnJpZW5kU3RhdHVzLm9ubGluZSBPbmxpbmUgc3RhdHVzLlxyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtzdHJpbmd9IGZyaWVuZFN0YXR1cy5yb29tSWQgSm9pbmVkIHJvb20uXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIExvYWRCYWxhbmNpbmdDbGllbnQucHJvdG90eXBlLm9uRmluZEZyaWVuZHNSZXN1bHQgPSBmdW5jdGlvbiAoZXJyb3JDb2RlLCBlcnJvck1zZywgZnJpZW5kcykgeyB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IENhbGxlZCB3aGVuIGxvYmJpZXMgc3RhdGlzdGljcyB1cGRhdGUgcmVjZWl2ZWQuIDxici8+XHJcbiAgICAgICAgICAgICAgICBVcGRhdGUgY2FuIGJlIGF1dG9tYXRlZCBieSBzZXQgdXAgZHVyaW5nIHtAbGluayBQaG90b24uTG9hZEJhbGFuY2luZy5Mb2FkQmFsYW5jaW5nQ2xpZW50I2Nvbm5lY3QgY29ubmVjdH0gb3IgcmVxdWVzdGVkIGV4cGxpY2l0bHkgYnkge0BsaW5rIFBob3Rvbi5Mb2FkQmFsYW5jaW5nLkxvYWRCYWxhbmNpbmdDbGllbnQjcmVxdWVzdExvYmJ5U3RhdHMgcmVxdWVzdExvYmJ5U3RhdHN9LiA8YnIvPlxyXG4gICAgICAgICAgICAgICAgT3ZlcnJpZGUgdG8gaGFuZGxlIHJlcXVlc3QgcmVzdWx0cy5cclxuICAgICAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLkxvYWRCYWxhbmNpbmcuTG9hZEJhbGFuY2luZ0NsaWVudCNvbkxvYmJ5U3RhdHNcclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7bnVtYmVyfSBlcnJvckNvZGUgUmVzdWx0IGVycm9yIGNvZGUuIDAgaWYgcmVxdWVzdCBpcyBzdWNjZXNzZnVsLiBGb3IgYXV0b21hdGVkIHVwZGF0ZXMgaXMgYWx3YXlzIDAuXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge3N0cmluZ30gZXJyb3JNc2cgRXJyb3IgbWVzc2FnZS4gRm9yIGF1dG9tYXRlZCB1cGRhdGVzIGlzIGFsd2F5cyBlbXB0eS5cclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7b2JqZWN0W119IGxvYmJpZXMgQXJyYXkgb2YgbG9iYmllcyBzdGF0aXN0aWNzOiBbbG9iYnlTdGF0czEsIGxvYmJ5U3RhdHMxLCAuLi4gXS5cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7b2JqZWN0fSBsb2JieVN0YXRzIExvYmJ5IHN0YXRpc3RpY3MuXHJcbiAgICAgICAgICAgICAgICBAcHJvcGVydHkge3N0cmluZ30gbG9iYnlTdGF0cy5sb2JieU5hbWUgTG9iYnkgbmFtZS5cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBsb2JieVN0YXRzLmxvYmJ5VHlwZSBMb2JieSB0eXBlLlxyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtudW1iZXJ9IGxvYmJ5U3RhdHMucGVlckNvdW50IFRoZSBudW1iZXIgb2YgcGxheWVycyBpbiB0aGUgbG9iYnkgKG9uIE1hc3Rlciwgbm90IHBsYXlpbmcpLlxyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtudW1iZXJ9IGxvYmJ5U3RhdHMuZ2FtZUNvdW50IFRoZSBudW1iZXIgb2YgZ2FtZXMgaW4gdGhlIGxvYmJ5LlxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBMb2FkQmFsYW5jaW5nQ2xpZW50LnByb3RvdHlwZS5vbkxvYmJ5U3RhdHMgPSBmdW5jdGlvbiAoZXJyb3JDb2RlLCBlcnJvck1zZywgbG9iYmllcykgeyB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IENhbGxlZCB3aGVuIGFwcGxpY2F0aW9uIHN0YXRpc3RpY3MgdXBkYXRlIHJlY2VpdmVkLiA8YnIvPlxyXG4gICAgICAgICAgICAgICAgT3ZlcnJpZGUgdG8gaGFuZGxlIHJlcXVlc3QgcmVzdWx0cy5cclxuICAgICAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLkxvYWRCYWxhbmNpbmcuTG9hZEJhbGFuY2luZ0NsaWVudCNvbkFwcFN0YXRzXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge251bWJlcn0gZXJyb3JDb2RlIFJlc3VsdCBlcnJvciBjb2RlLiBDdXJyZW50bHkgaXMgYWx3YXlzIDAuXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge3N0cmluZ30gZXJyb3JNc2cgRXJyb3IgbWVzc2FnZS4gQ3VycmVudGx5IGlzIGFsd2F5cyBlbXB0eS5cclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7b2JqZWN0fSBzdGF0cyBBcHBsaWNhdGlvbiBzdGF0aXN0aWNzLlxyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtvYmplY3R9IHN0YXRzIEFwcGxpY2F0aW9uIHN0YXRpc3RpY3MuXHJcbiAgICAgICAgICAgICAgICBAcHJvcGVydHkge251bWJlcn0gc3RhdHMucGVlckNvdW50IENvdW50IG9mIHBsYXllcnMgY3VycmVudGx5IG9ubGluZSBvbiBHYW1lIHNlcnZlcnMuXHJcbiAgICAgICAgICAgICAgICBAcHJvcGVydHkge251bWJlcn0gc3RhdHMubWFzdGVyUGVlckNvdW50IENvdW50IG9mIHBsYXllcnMgb24gTWFzdGVyIHNlcnZlciAobG9va2luZyBmb3IgZ2FtZSkuXHJcbiAgICAgICAgICAgICAgICBAcHJvcGVydHkge251bWJlcn0gc3RhdHMuZ2FtZUNvdW50IENvdW50IG9mIGdhbWVzIGN1cnJlbnRseSBpbiB1c2UgKGluY2x1ZGVzIGludmlzaWJsZSBhbmQgZnVsbCByb29tcywgc28gaXQgZG9lc24ndCBtYXRjaCBsb2JieSBsaXN0KS5cclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTG9hZEJhbGFuY2luZ0NsaWVudC5wcm90b3R5cGUub25BcHBTdGF0cyA9IGZ1bmN0aW9uIChlcnJvckNvZGUsIGVycm9yTXNnLCBzdGF0cykgeyB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IENhbGxlZCB3aGVuIHtAbGluayBQaG90b24uTG9hZEJhbGFuY2luZy5Mb2FkQmFsYW5jaW5nQ2xpZW50I2dldFJlZ2lvbnMgZ2V0UmVnaW9uc30gcmVxdWVzdCBjb21wbGV0ZWQuPGJyLz5cclxuICAgICAgICAgICAgICAgIE92ZXJyaWRlIHRvIGhhbmRsZSByZXF1ZXN0IHJlc3VsdHMuXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge251bWJlcn0gZXJyb3JDb2RlIFJlc3VsdCBlcnJvciBjb2RlLiAwIGlmIHJlcXVlc3QgaXMgc3VjY2Vzc2Z1bC5cclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7c3RyaW5nfSBlcnJvck1zZyBFcnJvciBtZXNzYWdlLlxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtvYmplY3R9IHJlZ2lvbnMgT2JqZWN0IHdpdGggcmVnaW9uIGNvZGVzIGFzIGtleXMgYW5kIE1hc3RlciBzZXJ2ZXJzIGFkZHJlc3NlcyBhcyB2YWx1ZXNcclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTG9hZEJhbGFuY2luZ0NsaWVudC5wcm90b3R5cGUub25HZXRSZWdpb25zUmVzdWx0ID0gZnVuY3Rpb24gKGVycm9yQ29kZSwgZXJyb3JNc2csIHJlZ2lvbnMpIHsgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBDYWxsZWQgd2hlbiB7QGxpbmsgUGhvdG9uLkxvYWRCYWxhbmNpbmcuTG9hZEJhbGFuY2luZ0NsaWVudCN3ZWJScGMgd2ViUnBjfSByZXF1ZXN0IGNvbXBsZXRlZC48YnIvPlxyXG4gICAgICAgICAgICAgICAgT3ZlcnJpZGUgdG8gaGFuZGxlIHJlcXVlc3QgcmVzdWx0cy5cclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7bnVtYmVyfSBlcnJvckNvZGUgUmVzdWx0IGVycm9yIGNvZGUuIDAgaWYgcmVxdWVzdCBpcyBzdWNjZXNzZnVsLlxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgRXJyb3IgbWVzc2FnZSBpZiBlcnJvckNvZGUgfiA9IDAgb3Igb3B0aW9uYWwgbWVzc2FnZSByZXR1cm5lZCBieSByZW1vdGUgcHJvY2VkdXJlLlxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtzdHJpbmd9IHVyaVBhdGggUmVxdWVzdCBwYXRoLlxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtudW1iZXJ9IHJlc3VsdENvZGUgUmVzdWx0IGNvZGUgcmV0dXJuZWQgYnkgcmVtb3RlIHByb2NlZHVyZS5cclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7b2JqZWN0fSBkYXRhIERhdGEgcmV0dXJuZWQgYnkgcmVtb3RlIHByb2NlZHVyZS5cclxuICAgICAgICAgICAgKiovXHJcbiAgICAgICAgICAgIExvYWRCYWxhbmNpbmdDbGllbnQucHJvdG90eXBlLm9uV2ViUnBjUmVzdWx0ID0gZnVuY3Rpb24gKGVycm9yQ29kZSwgbWVzc2FnZSwgdXJpUGF0aCwgcmVzdWx0Q29kZSwgZGF0YSkgeyB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IE92ZXJyaWRlIHdpdGggY3JlYXRpb24gb2YgY3VzdG9tIHJvb20gKGV4dGVuZGVkIGZyb20gUm9vbSk6IHsgcmV0dXJuIG5ldyBDdXN0b21Sb29tKC4uLik7IH1cclxuICAgICAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLkxvYWRCYWxhbmNpbmcuTG9hZEJhbGFuY2luZ0NsaWVudCNyb29tRmFjdG9yeVxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtzdHJpbmd9IG5hbWUgUm9vbSBuYW1lLiBQYXNzIHRvIHN1cGVyKCkgaW4gY3VzdG9tIGFjdG9yIGNvbnN0cnVjdG9yLlxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBMb2FkQmFsYW5jaW5nQ2xpZW50LnByb3RvdHlwZS5yb29tRmFjdG9yeSA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBuZXcgUm9vbShuYW1lKTsgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAc3VtbWFyeSBPdmVycmlkZSB3aXRoIGNyZWF0aW9uIG9mIGN1c3RvbSBhY3RvciAoZXh0ZW5kZWQgZnJvbSBBY3Rvcik6IHsgcmV0dXJuIG5ldyBDdXN0b21BY3RvciguLi4pOyB9XHJcbiAgICAgICAgICAgICAgICBAbWV0aG9kIFBob3Rvbi5Mb2FkQmFsYW5jaW5nLkxvYWRCYWxhbmNpbmdDbGllbnQjYWN0b3JGYWN0b3J5XHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge3N0cmluZ30gbmFtZSBBY3RvciBuYW1lLiBQYXNzIHRvIHN1cGVyKCkgaW4gY3VzdG9tIHJvb20gY29uc3RydWN0b3IuXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge251bWJlcn0gYWN0b3JOciBBY3RvciBJRC4gUGFzcyB0byBzdXBlcigpIGluIGN1c3RvbSByb29tIGNvbnN0cnVjdG9yLlxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtib29sZWFufSBpc0xvY2FsIEFjdG9yIGlzIGxvY2FsLiBQYXNzIHRvIHN1cGVyKCkgaW4gY3VzdG9tIHJvb20gY29uc3RydWN0b3IuXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIExvYWRCYWxhbmNpbmdDbGllbnQucHJvdG90eXBlLmFjdG9yRmFjdG9yeSA9IGZ1bmN0aW9uIChuYW1lLCBhY3Rvck5yLCBpc0xvY2FsKSB7IHJldHVybiBuZXcgQWN0b3IobmFtZSwgYWN0b3JOciwgaXNMb2NhbCk7IH07XHJcbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgQHN1bW1hcnkgUmV0dXJucyBsb2NhbCBhY3Rvci5cclxuICAgICAgICAgICAgICAgIENsaWVudCBhbHdheXMgaGFzIGxvY2FsIGFjdG9yIGV2ZW4gaWYgbm90IGpvaW5lZC5cclxuICAgICAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLkxvYWRCYWxhbmNpbmcuTG9hZEJhbGFuY2luZ0NsaWVudCNteUFjdG9yXHJcbiAgICAgICAgICAgICAgICBAcmV0dXJucyB7UGhvdG9uLkxvYWRCYWxhbmNpbmcuQWN0b3J9IExvY2FsIGFjdG9yLlxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBMb2FkQmFsYW5jaW5nQ2xpZW50LnByb3RvdHlwZS5teUFjdG9yID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fbXlBY3RvcjsgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAc3VtbWFyeSBSZXR1cm5zIGNsaWVudCdzIHJvb20uXHJcbiAgICAgICAgICAgICAgICBDbGllbnQgYWx3YXlzIGhhcyBpdCdzIHJvb20gZXZlbiBpZiBub3Qgam9pbmVkLiBJdCdzIHVzZWQgZm9yIHJvb20gY3JlYXRpb24gb3BlcmF0aW9uLlxyXG4gICAgICAgICAgICAgICAgQG1ldGhvZCBQaG90b24uTG9hZEJhbGFuY2luZy5Mb2FkQmFsYW5jaW5nQ2xpZW50I215Um9vbVxyXG4gICAgICAgICAgICAgICAgQHJldHVybnMge1Bob3Rvbi5Mb2FkQmFsYW5jaW5nLlJvb219IEN1cnJlbnQgcm9vbS5cclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTG9hZEJhbGFuY2luZ0NsaWVudC5wcm90b3R5cGUubXlSb29tID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5jdXJyZW50Um9vbTsgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAc3VtbWFyeSBSZXR1cm5zIGFjdG9ycyBpbiByb29tIGNsaWVudCBjdXJyZW50bHkgam9pbmVkIGluY2x1ZGluZyBsb2NhbCBhY3Rvci5cclxuICAgICAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLkxvYWRCYWxhbmNpbmcuTG9hZEJhbGFuY2luZ0NsaWVudCNteVJvb21BY3RvcnNcclxuICAgICAgICAgICAgICAgIEByZXR1cm5zIHtvYmplY3R9IGFjdG9yTnIgLT4ge0BsaW5rIFBob3Rvbi5Mb2FkQmFsYW5jaW5nLkFjdG9yfSBtYXAgb2YgYWN0b3JzIGluIHJvb20uXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIExvYWRCYWxhbmNpbmdDbGllbnQucHJvdG90eXBlLm15Um9vbUFjdG9ycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuYWN0b3JzOyB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IFJldHVybnMgbnVtZXIgb2YgYWN0b3JzIGluIHJvb20gY2xpZW50IGN1cnJlbnRseSBqb2luZWQgaW5jbHVkaW5nIGxvY2FsIGFjdG9yLlxyXG4gICAgICAgICAgICAgICAgQG1ldGhvZCBQaG90b24uTG9hZEJhbGFuY2luZy5Mb2FkQmFsYW5jaW5nQ2xpZW50I215Um9vbUFjdG9yQ291bnRcclxuICAgICAgICAgICAgICAgIEByZXR1cm5zIHtudW1iZXJ9IE51bWJlciBvZiBhY3RvcnMuXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIExvYWRCYWxhbmNpbmdDbGllbnQucHJvdG90eXBlLm15Um9vbUFjdG9yQ291bnQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmFjdG9yc0FycmF5Lmxlbmd0aDsgfTtcclxuICAgICAgICAgICAgTG9hZEJhbGFuY2luZ0NsaWVudC5wcm90b3R5cGUubXlSb29tQWN0b3JzQXJyYXkgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmFjdG9yc0FycmF5OyB9OyAvLyBhY3RvcnMgJ2F0IGluZGV4JyBhY2Nlc3Mgc3VwcG9ydCAoU2NpcnJhL0Nvc3RydWN0IDIpICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IEFjdG9yIG51bWJlciBvZiB0aGUgcGxheWVyIHdobydzIHRoZSBtYXN0ZXIgb2YgdGhpcyBSb29tLiBOb3RlOiBUaGlzIGNoYW5nZXMgd2hlbiB0aGUgY3VycmVudCBtYXN0ZXIgbGVhdmVzIHRoZSByb29tLlxyXG4gICAgICAgICAgICAgICAgQG1lbWJlciBQaG90b24uTG9hZEJhbGFuY2luZy5Sb29tSW5mbyNtYXN0ZXJDbGllbnRJZFxyXG4gICAgICAgICAgICAgICAgQHR5cGUge251bWJlcn1cclxuICAgICAgICAgICAgICAgIEByZWFkb25seVxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBMb2FkQmFsYW5jaW5nQ2xpZW50LnByb3RvdHlwZS5teVJvb21NYXN0ZXJBY3Rvck5yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubXlSb29tKCkubWFzdGVyQ2xpZW50SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5teVJvb20oKS5tYXN0ZXJDbGllbnRJZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvd2VzdEFjdG9ySWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIExvYWRCYWxhbmNpbmdDbGllbnQucHJvdG90eXBlLmxhc3RSdHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nYW1lUGVlciAmJiB0aGlzLmdhbWVQZWVyLmdldExhc3RSdHQoKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgTG9hZEJhbGFuY2luZ0NsaWVudC5wcm90b3R5cGUucm9vbUZhY3RvcnlJbnRlcm5hbCA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gdm9pZCAwKSB7IG5hbWUgPSBcIlwiOyB9XHJcbiAgICAgICAgICAgICAgICB2YXIgciA9IHRoaXMucm9vbUZhY3RvcnkobmFtZSk7XHJcbiAgICAgICAgICAgICAgICByLl9zZXRMQkModGhpcyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcjtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgTG9hZEJhbGFuY2luZ0NsaWVudC5wcm90b3R5cGUuYWN0b3JGYWN0b3J5SW50ZXJuYWwgPSBmdW5jdGlvbiAobmFtZSwgYWN0b3JOciwgaXNMb2NhbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09IHZvaWQgMCkgeyBuYW1lID0gXCJcIjsgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGFjdG9yTnIgPT09IHZvaWQgMCkgeyBhY3Rvck5yID0gLTE7IH1cclxuICAgICAgICAgICAgICAgIGlmIChpc0xvY2FsID09PSB2b2lkIDApIHsgaXNMb2NhbCA9IGZhbHNlOyB9XHJcbiAgICAgICAgICAgICAgICB2YXIgYSA9IHRoaXMuYWN0b3JGYWN0b3J5KG5hbWUsIGFjdG9yTnIsIGlzTG9jYWwpO1xyXG4gICAgICAgICAgICAgICAgYS5fc2V0TEJDKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGE7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgQHN1bW1hcnkgQ2hhbmdlcyBkZWZhdWx0IE5hbWVTZXJ2ZXIgYWRkcmVzcyBhbmQgcG9ydCBiZWZvcmUgY29ubmVjdGluZyB0byBOYW1lU2VydmVyLlxyXG4gICAgICAgICAgICAgICAgQG1ldGhvZCBQaG90b24uTG9hZEJhbGFuY2luZy5Mb2FkQmFsYW5jaW5nQ2xpZW50I3NldE5hbWVTZXJ2ZXJBZGRyZXNzXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge3N0cmluZ30gYWRkcmVzcyBOZXcgYWRkcmVzcyBhbmQgcG9ydC5cclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTG9hZEJhbGFuY2luZ0NsaWVudC5wcm90b3R5cGUuc2V0TmFtZVNlcnZlckFkZHJlc3MgPSBmdW5jdGlvbiAoYWRkcmVzcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lU2VydmVyQWRkcmVzcyA9IGFkZHJlc3M7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgQHN1bW1hcnkgUmV0dXJucyBjdXJyZW50IE5hbWVTZXJ2ZXIgYWRkcmVzcy5cclxuICAgICAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLkxvYWRCYWxhbmNpbmcuTG9hZEJhbGFuY2luZ0NsaWVudCNnZXROYW1lU2VydmVyQWRkcmVzc1xyXG4gICAgICAgICAgICAgICAgQHJldHVybnMge3N0cmluZ30gTmFtZVNlcnZlciBhZGRyZXNzIGFkZHJlc3MuXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIExvYWRCYWxhbmNpbmdDbGllbnQucHJvdG90eXBlLmdldE5hbWVTZXJ2ZXJBZGRyZXNzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubmFtZVNlcnZlckFkZHJlc3M7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgQHN1bW1hcnkgQ2hhbmdlcyBkZWZhdWx0IE1hc3RlciBzZXJ2ZXIgYWRkcmVzcyBhbmQgcG9ydCBiZWZvcmUgY29ubmVjdGluZyB0byBNYXN0ZXIgc2VydmVyLlxyXG4gICAgICAgICAgICAgICAgQG1ldGhvZCBQaG90b24uTG9hZEJhbGFuY2luZy5Mb2FkQmFsYW5jaW5nQ2xpZW50I3NldE1hc3RlclNlcnZlckFkZHJlc3NcclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7c3RyaW5nfSBhZGRyZXNzIE5ldyBhZGRyZXNzIGFuZCBwb3J0LlxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBMb2FkQmFsYW5jaW5nQ2xpZW50LnByb3RvdHlwZS5zZXRNYXN0ZXJTZXJ2ZXJBZGRyZXNzID0gZnVuY3Rpb24gKGFkZHJlc3MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFzdGVyU2VydmVyQWRkcmVzcyA9IGFkZHJlc3M7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgQHN1bW1hcnkgUmV0dXJucyBjdXJyZW50IE1hc3RlciBzZXJ2ZXIgYWRkcmVzcy5cclxuICAgICAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLkxvYWRCYWxhbmNpbmcuTG9hZEJhbGFuY2luZ0NsaWVudCNnZXRNYXN0ZXJTZXJ2ZXJBZGRyZXNzXHJcbiAgICAgICAgICAgICAgICBAcmV0dXJucyB7c3RyaW5nfSBNYXN0ZXIgc2VydmVyIGFkZHJlc3MuXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIExvYWRCYWxhbmNpbmdDbGllbnQucHJvdG90eXBlLmdldE1hc3RlclNlcnZlckFkZHJlc3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5uYW1lU2VydmVyQWRkcmVzcztcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAc3VtbWFyeSBTZXRzIG9wdGlvbmFsIHVzZXIgaWQocmVxdWlyZWQgYnkgc29tZSBjbG91ZCBzZXJ2aWNlcylcclxuICAgICAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLkxvYWRCYWxhbmNpbmcuTG9hZEJhbGFuY2luZ0NsaWVudCNzZXRVc2VySWRcclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7c3RyaW5nfSB1c2VySWQgTmV3IHVzZXIgaWQuXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIExvYWRCYWxhbmNpbmdDbGllbnQucHJvdG90eXBlLnNldFVzZXJJZCA9IGZ1bmN0aW9uICh1c2VySWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlcklkID0gdXNlcklkO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IFJldHVybnMgcHJldmlvdXNseSBzZXQgdXNlciBpZC5cclxuICAgICAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLkxvYWRCYWxhbmNpbmcuTG9hZEJhbGFuY2luZ0NsaWVudCNnZXRVc2VySWRcclxuICAgICAgICAgICAgICAgIEByZXR1cm5zIHtzdHJpbmd9IFVzZXIgaWQuXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIExvYWRCYWxhbmNpbmdDbGllbnQucHJvdG90eXBlLmdldFVzZXJJZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVzZXJJZDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAc3VtbWFyeSBFbmFibGVzIGN1c3RvbSBhdXRoZW50aWNhdGlvbiBhbmQgc2V0cyBpdCdzIHBhcmFtZXRlcnMuXHJcbiAgICAgICAgICAgICAgICBAbWV0aG9kIFBob3Rvbi5Mb2FkQmFsYW5jaW5nLkxvYWRCYWxhbmNpbmdDbGllbnQjc2V0Q3VzdG9tQXV0aGVudGljYXRpb25cclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7c3RyaW5nfSBhdXRoUGFyYW1ldGVycyBUaGlzIHN0cmluZyBtdXN0IGNvbnRhaW4gYW55IChodHRwIGdldCkgcGFyYW1ldGVycyBleHBlY3RlZCBieSB0aGUgdXNlZCBhdXRoZW50aWNhdGlvbiBzZXJ2aWNlLlxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtQaG90b24uTG9hZEJhbGFuY2luZy5Db25zdGFudHMuQ3VzdG9tQXV0aGVudGljYXRpb25UeXBlfSBbYXV0aFR5cGU9UGhvdG9uLkxvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLkN1c3RvbUF1dGhlbnRpY2F0aW9uVHlwZS5DdXN0b21dIFRoZSB0eXBlIG9mIGN1c3RvbSBhdXRoZW50aWNhdGlvbiBwcm92aWRlciB0aGF0IHNob3VsZCBiZSB1c2VkLlxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHthbnl9IFthdXRoRGF0YV0gVGhlIGRhdGEgdG8gYmUgcGFzc2VkLW9uIHRvIHRoZSBhdXRoIHNlcnZpY2UgdmlhIFBPU1QuIFN0cmluZyBwYXNzZWQgYXMgaXMsIG9iamVjdHMgYXMgYXBwbGljYXRpb24vanNvblxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBMb2FkQmFsYW5jaW5nQ2xpZW50LnByb3RvdHlwZS5zZXRDdXN0b21BdXRoZW50aWNhdGlvbiA9IGZ1bmN0aW9uIChhdXRoUGFyYW1ldGVycywgYXV0aFR5cGUsIGF1dGhEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXV0aFR5cGUgPT09IHZvaWQgMCkgeyBhdXRoVHlwZSA9IFBob3Rvbi5Mb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5DdXN0b21BdXRoZW50aWNhdGlvblR5cGUuQ3VzdG9tOyB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJBdXRoVHlwZSA9IGF1dGhUeXBlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyQXV0aFBhcmFtZXRlcnMgPSBhdXRoUGFyYW1ldGVycztcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlckF1dGhEYXRhID0gYXV0aERhdGE7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IChkZXByZWNhdGVkKVxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IFN0YXJ0cyBjb25uZWN0aW9uIHRvIE1hc3RlciBzZXJ2ZXIuXHJcbiAgICAgICAgICAgICAgICBAbWV0aG9kIFBob3Rvbi5Mb2FkQmFsYW5jaW5nLkxvYWRCYWxhbmNpbmdDbGllbnQjY29ubmVjdFxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSBBZGRpdGlvbmFsIG9wdGlvbnNcclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7b2JqZWN0fSBvcHRpb25zIEFkZGl0aW9uYWwgb3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtib29sZWFufSBbb3B0aW9ucy5rZWVwTWFzdGVyQ29ubmVjdGlvbj1mYWxzZV0gRG9uJ3QgZGlzY29ubmVjdCBmcm9tIE1hc3RlciBzZXJ2ZXIgYWZ0ZXIgam9pbmluZyByb29tLlxyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtzdHJpbmd9IFtvcHRpb25zLmxvYmJ5TmFtZV0gTmFtZSBvZiB0aGUgbG9iYnkgY29ubmVjdCB0by5cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7UGhvdG9uLkxvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLkxvYmJ5VHlwZX0gW29wdGlvbnMubG9iYnlUeXBlPUxvYmJ5VHlwZS5EZWZhdWx0XSBUeXBlIG9mIHRoZSBsb2JieS5cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW29wdGlvbnMubG9iYnlTdGF0cz1mYWxzZV0gSWYgdHJ1ZSwgTWFzdGVyIHNlcnZlciB3aWxsIGJlIHNlbmRpbmcgbG9iYmllcyBzdGF0aXN0aWNzIHBlcmlvZGljYWxseS48YnIvPiBPdmVycmlkZSB7QGxpbmsgUGhvdG9uLkxvYWRCYWxhbmNpbmcuTG9hZEJhbGFuY2luZ0NsaWVudCNvbkxvYmJ5U3RhdHMgb25Mb2JieVN0YXRzfSB0byBoYW5kbGUgcmVxdWVzdCByZXN1bHRzLjxici8+QWx0ZXJuYXRpdmVseSwge0BsaW5rIFBob3Rvbi5Mb2FkQmFsYW5jaW5nLkxvYWRCYWxhbmNpbmdDbGllbnQjcmVxdWVzdExvYmJ5U3RhdHMgcmVxdWVzdExvYmJ5U3RhdHN9IGNhbiBiZSB1c2VkLlxyXG4gICAgICAgICAgICAgICAgQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgY3VycmVudCBjbGllbnQgc3RhdGUgYWxsb3dzIGNvbm5lY3Rpb24uXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIExvYWRCYWxhbmNpbmdDbGllbnQucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgLy8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAob3B0aW9ucykgPT09IFwiYm9vbGVhblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IHsga2VlcE1hc3RlckNvbm5lY3Rpb246IHRydWUgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB7IGtlZXBNYXN0ZXJDb25uZWN0aW9uOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zID0ge307XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja05leHRTdGF0ZShMb2FkQmFsYW5jaW5nQ2xpZW50LlN0YXRlLkNvbm5lY3RpbmdUb01hc3RlcnNlcnZlciwgdHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKExvYWRCYWxhbmNpbmdDbGllbnQuU3RhdGUuQ29ubmVjdGluZ1RvTWFzdGVyc2VydmVyKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiQ29ubmVjdGluZyB0byBNYXN0ZXJcIiwgdGhpcy5tYXN0ZXJTZXJ2ZXJBZGRyZXNzKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBtYWtlIG9wdGlvbnMgY29weSB0byBwcm90ZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0T3B0aW9ucyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGsgaW4gb3B0aW9ucylcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0T3B0aW9uc1trXSA9IG9wdGlvbnNba107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWFzdGVyUGVlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXN0ZXJQZWVyLkRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hc3RlclBlZXIgPSBuZXcgTWFzdGVyUGVlcih0aGlzLCB0aGlzLmNvbm5lY3Rpb25Qcm90b2NvbCwgdGhpcy5tYXN0ZXJTZXJ2ZXJBZGRyZXNzLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRNYXN0ZXJQZWVyKHRoaXMubWFzdGVyUGVlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXN0ZXJQZWVyLmNvbm5lY3QodGhpcy5hcHBJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgQHN1bW1hcnkgU3RhcnRzIGNvbm5lY3Rpb24gdG8gTmFtZVNlcnZlci5cclxuICAgICAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLkxvYWRCYWxhbmNpbmcuTG9hZEJhbGFuY2luZ0NsaWVudCNjb25uZWN0VG9OYW1lU2VydmVyXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIEFkZGl0aW9uYWwgb3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtvYmplY3R9IG9wdGlvbnMgQWRkaXRpb25hbCBvcHRpb25zXHJcbiAgICAgICAgICAgICAgICBAcHJvcGVydHkge3N0cmluZ30gW29wdGlvbnMucmVnaW9uXSBEb24ndCBkaXNjb25uZWN0IGZyb20gTWFzdGVyIHNlcnZlciBhZnRlciBqb2luaW5nIHJvb20uXHJcbiAgICAgICAgICAgICAgICBAcHJvcGVydHkge3N0cmluZ30gW29wdGlvbnMubG9iYnlOYW1lXSBOYW1lIG9mIHRoZSBsb2JieSBjb25uZWN0IHRvLlxyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtQaG90b24uTG9hZEJhbGFuY2luZy5Db25zdGFudHMuTG9iYnlUeXBlfSBbb3B0aW9ucy5sb2JieVR5cGU9TG9iYnlUeXBlLkRlZmF1bHRdIFR5cGUgb2YgdGhlIGxvYmJ5LlxyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtib29sZWFufSBbb3B0aW9ucy5sb2JieVN0YXRzPWZhbHNlXSBJZiB0cnVlLCBNYXN0ZXIgc2VydmVyIHdpbGwgYmUgc2VuZGluZyBsb2JiaWVzIHN0YXRpc3RpY3MgcGVyaW9kaWNhbGx5Ljxici8+IE92ZXJyaWRlIHtAbGluayBQaG90b24uTG9hZEJhbGFuY2luZy5Mb2FkQmFsYW5jaW5nQ2xpZW50I29uTG9iYnlTdGF0cyBvbkxvYmJ5U3RhdHN9IHRvIGhhbmRsZSByZXF1ZXN0IHJlc3VsdHMuPGJyLz5BbHRlcm5hdGl2ZWx5LCB7QGxpbmsgUGhvdG9uLkxvYWRCYWxhbmNpbmcuTG9hZEJhbGFuY2luZ0NsaWVudCNyZXF1ZXN0TG9iYnlTdGF0cyByZXF1ZXN0TG9iYnlTdGF0c30gY2FuIGJlIHVzZWQuXHJcbiAgICAgICAgICAgICAgICBAcHJvcGVydHkge2Jvb2xlYW59IFtvcHRpb25zLmtlZXBNYXN0ZXJDb25uZWN0aW9uPWZhbHNlXSBEb24ndCBkaXNjb25uZWN0IGZyb20gTWFzdGVyIHNlcnZlciBhZnRlciBqb2luaW5nIHJvb20uXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIExvYWRCYWxhbmNpbmdDbGllbnQucHJvdG90eXBlLmNvbm5lY3RUb05hbWVTZXJ2ZXIgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tOZXh0U3RhdGUoTG9hZEJhbGFuY2luZ0NsaWVudC5TdGF0ZS5Db25uZWN0aW5nVG9OYW1lU2VydmVyLCB0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoTG9hZEJhbGFuY2luZ0NsaWVudC5TdGF0ZS5Db25uZWN0aW5nVG9OYW1lU2VydmVyKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiQ29ubmVjdGluZyB0byBOYW1lU2VydmVyXCIsIHRoaXMubmFtZVNlcnZlckFkZHJlc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG1ha2Ugb3B0aW9ucyBjb3B5IHRvIHByb3RlY3RcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3RPcHRpb25zID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayBpbiBvcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3RPcHRpb25zW2tdID0gb3B0aW9uc1trXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5uYW1lU2VydmVyUGVlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lU2VydmVyUGVlci5EZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lU2VydmVyUGVlciA9IG5ldyBOYW1lU2VydmVyUGVlcih0aGlzLCB0aGlzLmNvbm5lY3Rpb25Qcm90b2NvbCwgdGhpcy5uYW1lU2VydmVyQWRkcmVzcywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0TmFtZVNlcnZlclBlZXIodGhpcy5uYW1lU2VydmVyUGVlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lU2VydmVyUGVlci5jb25uZWN0KHRoaXMuYXBwSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBMb2FkQmFsYW5jaW5nQ2xpZW50LnByb3RvdHlwZS5maWxsQ3JlYXRlUm9vbU9wdGlvbnMgPSBmdW5jdGlvbiAob3AsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgdmFyIGdwID0ge307XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5pc1Zpc2libGUgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICBncFtMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5HYW1lUHJvcGVydGllcy5Jc1Zpc2libGVdID0gb3B0aW9ucy5pc1Zpc2libGU7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5pc09wZW4gIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICBncFtMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5HYW1lUHJvcGVydGllcy5Jc09wZW5dID0gb3B0aW9ucy5pc09wZW47XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5tYXhQbGF5ZXJzICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgZ3BbTG9hZEJhbGFuY2luZy5Db25zdGFudHMuR2FtZVByb3BlcnRpZXMuTWF4UGxheWVyc10gPSBvcHRpb25zLm1heFBsYXllcnM7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5wcm9wc0xpc3RlZEluTG9iYnkgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICBncFtMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5HYW1lUHJvcGVydGllcy5Qcm9wc0xpc3RlZEluTG9iYnldID0gUGhvdG9uLlR5cGVFeHQuU3RyaW5nKG9wdGlvbnMucHJvcHNMaXN0ZWRJbkxvYmJ5KTtcclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmN1c3RvbUdhbWVQcm9wZXJ0aWVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwIGluIG9wdGlvbnMuY3VzdG9tR2FtZVByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3BbcF0gPSBvcHRpb25zLmN1c3RvbUdhbWVQcm9wZXJ0aWVzW3BdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9wLnB1c2goTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5HYW1lUHJvcGVydGllcywgZ3ApO1xyXG4gICAgICAgICAgICAgICAgb3AucHVzaChMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5QYXJhbWV0ZXJDb2RlLkNsZWFudXBDYWNoZU9uTGVhdmUsIHRydWUpOyAvL1RPRE86IG1ha2UgdGhpcyBvcHRpb25hbD9cclxuICAgICAgICAgICAgICAgIG9wLnB1c2goTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5Ccm9hZGNhc3QsIHRydWUpOyAvL1RPRE86IG1ha2UgdGhpcyBvcHRpb25hbD9cclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmVtcHR5Um9vbUxpdmVUaW1lICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgb3AucHVzaChMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5QYXJhbWV0ZXJDb2RlLkVtcHR5Um9vbVRUTCwgUGhvdG9uLlR5cGVFeHQuSW50KG9wdGlvbnMuZW1wdHlSb29tTGl2ZVRpbWUpKTtcclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnN1c3BlbmRlZFBsYXllckxpdmVUaW1lICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgb3AucHVzaChMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5QYXJhbWV0ZXJDb2RlLlBsYXllclRUTCwgUGhvdG9uLlR5cGVFeHQuSW50KG9wdGlvbnMuc3VzcGVuZGVkUGxheWVyTGl2ZVRpbWUpKTtcclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnBsdWdpbnMgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICBvcC5wdXNoKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuUGx1Z2lucywgb3B0aW9ucy5wbHVnaW5zKTtcclxuICAgICAgICAgICAgICAgIC8vIHNob2xkIGJlIGFsd2F5cyBzZXQgdG8gdHJ1ZSBieSBjbGllbnRcclxuICAgICAgICAgICAgICAgIG9wLnB1c2goTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5DaGVja1VzZXJPbkpvaW4sIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMubG9iYnlOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3AucHVzaChMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5QYXJhbWV0ZXJDb2RlLkxvYmJ5TmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3AucHVzaChvcHRpb25zLmxvYmJ5TmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMubG9iYnlUeXBlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcC5wdXNoKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuTG9iYnlUeXBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3AucHVzaChvcHRpb25zLmxvYmJ5VHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IENyZWF0ZXMgYSBuZXcgcm9vbSBvbiB0aGUgc2VydmVyIChvciBmYWlscyB3aGVuIHRoZSBuYW1lIGlzIGFscmVhZHkgdGFrZW4pLiBUYWtlcyBwYXJhbWV0ZXJzIChleGNlcHQgbmFtZSkgZm9yIG5ldyByb29tIGZyb20gbXlSb29tKCkgb2JqZWN0LiBTZXQgdGhlbSBiZWZvcmUgY2FsbC5cclxuICAgICAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLkxvYWRCYWxhbmNpbmcuTG9hZEJhbGFuY2luZ0NsaWVudCNjcmVhdGVSb29tRnJvbU15XHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge3N0cmluZ30gW3Jvb21OYW1lXSBOZXcgcm9vbSBuYW1lLiBBc3NpZ25lZCBhdXRvbWF0aWNhbGx5IGJ5IHNlcnZlciBpZiBlbXB0eSBvciBub3Qgc3BlY2lmaWVkLlxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSBBZGRpdGlvbmFsIG9wdGlvbnNcclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7b2JqZWN0fSBvcHRpb25zIEFkZGl0aW9uYWwgb3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtzdHJpbmd9IFtvcHRpb25zLmxvYmJ5TmFtZV0gTmFtZSBvZiB0aGUgbG9iYnkgdG8gY3JlYXRlIHJvb20gaW4uXHJcbiAgICAgICAgICAgICAgICBAcHJvcGVydHkge1Bob3Rvbi5Mb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5Mb2JieVR5cGV9IFtvcHRpb25zLmxvYmJ5VHlwZT1Mb2JieVR5cGUuRGVmYXVsdF0gVHlwZSBvZiB0aGUgbG9iYnkuXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIExvYWRCYWxhbmNpbmdDbGllbnQucHJvdG90eXBlLmNyZWF0ZVJvb21Gcm9tTXkgPSBmdW5jdGlvbiAocm9vbU5hbWUsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFJvb20ubmFtZSA9IHJvb21OYW1lID8gcm9vbU5hbWUgOiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IHRoaXMuY29weUNyZWF0ZU9wdGlvbnNGcm9tTXlSb29tKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlUm9vbUludGVybmFsKHRoaXMubWFzdGVyUGVlciwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIExvYWRCYWxhbmNpbmdDbGllbnQucHJvdG90eXBlLmNvcHlDcmVhdGVPcHRpb25zRnJvbU15Um9vbSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICAgICAgICAgICAgICAgIC8vcmV0cmlldmUgb3B0aW9ucyBmcm9tIG15IHJvb21cclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuaXNWaXNpYmxlID0gdGhpcy5jdXJyZW50Um9vbS5pc1Zpc2libGU7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmlzT3BlbiA9IHRoaXMuY3VycmVudFJvb20uaXNPcGVuO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5tYXhQbGF5ZXJzID0gdGhpcy5jdXJyZW50Um9vbS5tYXhQbGF5ZXJzO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5jdXN0b21HYW1lUHJvcGVydGllcyA9IHRoaXMuY3VycmVudFJvb20uX2N1c3RvbVByb3BlcnRpZXM7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLnByb3BzTGlzdGVkSW5Mb2JieSA9IHRoaXMuY3VycmVudFJvb20uX3Byb3BzTGlzdGVkSW5Mb2JieTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuZW1wdHlSb29tTGl2ZVRpbWUgPSB0aGlzLmN1cnJlbnRSb29tLmVtcHR5Um9vbUxpdmVUaW1lO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5zdXNwZW5kZWRQbGF5ZXJMaXZlVGltZSA9IHRoaXMuY3VycmVudFJvb20uc3VzcGVuZGVkUGxheWVyTGl2ZVRpbWU7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLnBsdWdpbnMgPSB0aGlzLmN1cnJlbnRSb29tLnBsdWdpbnM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucztcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAc3VtbWFyeSBDcmVhdGVzIGEgbmV3IHJvb20gb24gdGhlIHNlcnZlciAob3IgZmFpbHMgd2hlbiB0aGUgbmFtZSBpcyBhbHJlYWR5IHRha2VuKS5cclxuICAgICAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLkxvYWRCYWxhbmNpbmcuTG9hZEJhbGFuY2luZ0NsaWVudCNjcmVhdGVSb29tXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge3N0cmluZ30gW3Jvb21OYW1lXSBUaGUgbmFtZSB0byBjcmVhdGUgYSByb29tIHdpdGguIE11c3QgYmUgdW5pcXVlIGFuZCBub3QgaW4gdXNlIG9yIGNhbid0IGJlIGNyZWF0ZWQuIElmIG5vdCBzcGVjaWZpZWQgb3IgbnVsbCwgdGhlIHNlcnZlciB3aWxsIGFzc2lnbiBhIEdVSUQgYXMgbmFtZS5cclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gQWRkaXRpb25hbCBvcHRpb25zXHJcbiAgICAgICAgICAgICAgICBAcHJvcGVydHkge29iamVjdH0gb3B0aW9ucyBBZGRpdGlvbmFsIG9wdGlvbnNcclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW29wdGlvbnMuaXNWaXNpYmxlPXRydWVdIFNob3dzIHRoZSByb29tIGluIHRoZSBsb2JieSdzIHJvb20gbGlzdC5cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW29wdGlvbnMuaXNPcGVuPXRydWVdIEtlZXBzIHBsYXllcnMgZnJvbSBqb2luaW5nIHRoZSByb29tIChvciBvcGVucyBpdCB0byBldmVyeW9uZSkuXHJcbiAgICAgICAgICAgICAgICBAcHJvcGVydHkge251bWJlcn0gW29wdGlvbnMubWF4UGxheWVycz0wXSBNYXggcGxheWVycyBiZWZvcmUgcm9vbSBpcyBjb25zaWRlcmVkIGZ1bGwgKGJ1dCBzdGlsbCBsaXN0ZWQpLlxyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtvYmplY3R9IFtvcHRpb25zLmN1c3RvbUdhbWVQcm9wZXJ0aWVzXSBDdXN0b20gcHJvcGVydGllcyB0byBhcHBseSB0byB0aGUgcm9vbSBvbiBjcmVhdGlvbiAodXNlIHN0cmluZy10eXBlZCBrZXlzIGJ1dCBzaG9ydCBvbmVzKS5cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7c3RyaW5nW119IFtvcHRpb25zLnByb3BzTGlzdGVkSW5Mb2JieV0gRGVmaW5lcyB0aGUgY3VzdG9tIHJvb20gcHJvcGVydGllcyB0aGF0IGdldCBsaXN0ZWQgaW4gdGhlIGxvYmJ5LlxyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtudW1iZXJ9IFtvcHRpb25zLmVtcHR5Um9vbUxpdmVUaW1lPTBdIFJvb20gbGl2ZSB0aW1lIChtcykgaW4gdGhlIHNlcnZlciByb29tIGNhY2hlIGFmdGVyIGFsbCBjbGllbnRzIGhhdmUgbGVmdCB0aGUgcm9vbS5cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBbb3B0aW9ucy5zdXNwZW5kZWRQbGF5ZXJMaXZlVGltZT0wXSBQbGF5ZXIgbGl2ZSB0aW1lIChtcykgaW4gdGhlIHJvb20gYWZ0ZXIgcGxheWVyIHN1c3BlbmRlZC5cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7c3RyaW5nW119IFtvcHRpb25zLnBsdWdpbnNdIEV4cGVjdGVkIHNlcnZlciBwbHVnaW5zLlxyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtzdHJpbmd9IFtvcHRpb25zLmxvYmJ5TmFtZV0gTmFtZSBvZiB0aGUgbG9iYnkgdG8gY3JlYXRlIHJvb20gaW4uXHJcbiAgICAgICAgICAgICAgICBAcHJvcGVydHkge1Bob3Rvbi5Mb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5Mb2JieVR5cGV9IFtvcHRpb25zLmxvYmJ5VHlwZT1Mb2JieVR5cGUuRGVmYXVsdF0gVHlwZSBvZiB0aGUgbG9iYnkuXHJcbiAgICBcclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTG9hZEJhbGFuY2luZ0NsaWVudC5wcm90b3R5cGUuY3JlYXRlUm9vbSA9IGZ1bmN0aW9uIChyb29tTmFtZSwgb3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Um9vbSA9IHRoaXMucm9vbUZhY3RvcnlJbnRlcm5hbChyb29tTmFtZSA/IHJvb21OYW1lIDogXCJcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVSb29tSW50ZXJuYWwodGhpcy5tYXN0ZXJQZWVyLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAc3VtbWFyeSBKb2lucyBhIHJvb20gYnkgbmFtZSBhbmQgc2V0cyB0aGlzIHBsYXllcidzIHByb3BlcnRpZXMuXHJcbiAgICAgICAgICAgICAgICBAbWV0aG9kIFBob3Rvbi5Mb2FkQmFsYW5jaW5nLkxvYWRCYWxhbmNpbmdDbGllbnQjam9pblJvb21cclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7c3RyaW5nfSByb29tTmFtZSBUaGUgbmFtZSBvZiB0aGUgcm9vbSB0byBqb2luLiBNdXN0IGJlIGV4aXN0aW5nIGFscmVhZHksIG9wZW4gYW5kIG5vbi1mdWxsIG9yIGNhbid0IGJlIGpvaW5lZC5cclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gQWRkaXRpb25hbCBvcHRpb25zXHJcbiAgICAgICAgICAgICAgICBAcHJvcGVydHkge29iamVjdH0gb3B0aW9ucyBBZGRpdGlvbmFsIG9wdGlvbnNcclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7c3RyaW5nfSBbb3B0aW9ucy5yZWpvaW49ZmFsc2VdIFJlam9pbiB1c2luZyBjdXJyZW50IHVzZXJJZC5cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW29wdGlvbnMuY3JlYXRlSWZOb3RFeGlzdHM9ZmFsc2VdIENyZWF0ZSByb29tIGlmIG5vdCBleGlzdHMuXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge29iamVjdH0gW2NyZWF0ZU9wdGlvbnNdIFJvb20gb3B0aW9ucyBmb3IgY3JlYXRpb25cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7b2JqZWN0fSBjcmVhdGVPcHRpb25zIFJvb20gb3B0aW9ucyBmb3IgY3JlYXRpb25cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2NyZWF0ZU9wdGlvbnMuaXNWaXNpYmxlPXRydWVdIFNob3dzIHRoZSByb29tIGluIHRoZSBsb2JieSdzIHJvb20gbGlzdC5cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2NyZWF0ZU9wdGlvbnMuaXNPcGVuPXRydWVdIEtlZXBzIHBsYXllcnMgZnJvbSBqb2luaW5nIHRoZSByb29tIChvciBvcGVucyBpdCB0byBldmVyeW9uZSkuXHJcbiAgICAgICAgICAgICAgICBAcHJvcGVydHkge251bWJlcn0gW2NyZWF0ZU9wdGlvbnMubWF4UGxheWVycz0wXSBNYXggcGxheWVycyBiZWZvcmUgcm9vbSBpcyBjb25zaWRlcmVkIGZ1bGwgKGJ1dCBzdGlsbCBsaXN0ZWQpLlxyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtvYmplY3R9IFtjcmVhdGVPcHRpb25zLmN1c3RvbUdhbWVQcm9wZXJ0aWVzXSBDdXN0b20gcHJvcGVydGllcyB0byBhcHBseSB0byB0aGUgcm9vbSBvbiBjcmVhdGlvbiAodXNlIHN0cmluZy10eXBlZCBrZXlzIGJ1dCBzaG9ydCBvbmVzKS5cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7c3RyaW5nW119IFtjcmVhdGVPcHRpb25zLnByb3BzTGlzdGVkSW5Mb2JieV0gRGVmaW5lcyB0aGUgY3VzdG9tIHJvb20gcHJvcGVydGllcyB0aGF0IGdldCBsaXN0ZWQgaW4gdGhlIGxvYmJ5LlxyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtudW1iZXJ9IFtjcmVhdGVPcHRpb25zLmVtcHR5Um9vbUxpdmVUaW1lPTBdIFJvb20gbGl2ZSB0aW1lIChtcykgaW4gdGhlIHNlcnZlciByb29tIGNhY2hlIGFmdGVyIGFsbCBjbGllbnRzIGhhdmUgbGVmdCB0aGUgcm9vbS5cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBbY3JlYXRlT3B0aW9ucy5zdXNwZW5kZWRQbGF5ZXJMaXZlVGltZT0wXSBQbGF5ZXIgbGl2ZSB0aW1lIChtcykgaW4gdGhlIHJvb20gYWZ0ZXIgcGxheWVyIHN1c3BlbmRlZC5cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7c3RyaW5nW119IFtjcmVhdGVPcHRpb25zLnBsdWdpbnNdIEluZm9ybXMgdGhlIHNlcnZlciBvZiB0aGUgZXhwZWN0ZWQgcGx1Z2luIHNldHVwLlxyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtzdHJpbmd9IFtjcmVhdGVPcHRpb25zLmxvYmJ5TmFtZT1cIlwiXSBOYW1lIG9mIHRoZSBsb2JieSB0byBjcmVhdGUgcm9vbSBpbi5cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7UGhvdG9uLkxvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLkxvYmJ5VHlwZX0gW2NyZWF0ZU9wdGlvbnMubG9iYnlUeXBlPUxvYmJ5VHlwZS5EZWZhdWx0XSBUeXBlIG9mIHRoZSBsb2JieS5cclxuICAgIFxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBMb2FkQmFsYW5jaW5nQ2xpZW50LnByb3RvdHlwZS5qb2luUm9vbSA9IGZ1bmN0aW9uIChyb29tTmFtZSwgb3B0aW9ucywgY3JlYXRlT3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9wID0gW107XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmNyZWF0ZUlmTm90RXhpc3RzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wLnB1c2goTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5Kb2luTW9kZSwgTG9hZEJhbGFuY2luZ0NsaWVudC5Kb2luTW9kZS5DcmVhdGVJZk5vdEV4aXN0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsbENyZWF0ZVJvb21PcHRpb25zKG9wLCBjcmVhdGVPcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMucmVqb2luKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wLnB1c2goTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5Kb2luTW9kZSwgTG9hZEJhbGFuY2luZ0NsaWVudC5Kb2luTW9kZS5SZWpvaW5Pbmx5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRSb29tID0gdGhpcy5yb29tRmFjdG9yeUludGVybmFsKHJvb21OYW1lKTtcclxuICAgICAgICAgICAgICAgIG9wLnB1c2goTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5Sb29tTmFtZSwgcm9vbU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5qb2luUm9vbU9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVSb29tT3B0aW9ucyA9IGNyZWF0ZU9wdGlvbnMgfHwge307XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiSm9pbiBSb29tXCIsIHJvb21OYW1lLCBvcHRpb25zLCBjcmVhdGVPcHRpb25zLCBcIi4uLlwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFzdGVyUGVlci5zZW5kT3BlcmF0aW9uKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLk9wZXJhdGlvbkNvZGUuSm9pbkdhbWUsIG9wKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IEpvaW5zIGEgcmFuZG9tLCBhdmFpbGFibGUgcm9vbS5cclxuICAgICAgICAgICAgICAgIFRoaXMgb3BlcmF0aW9uIGZhaWxzIGlmIGFsbCByb29tcyBhcmUgY2xvc2VkIG9yIGZ1bGwuXHJcbiAgICAgICAgICAgICAgICBAbWV0aG9kIFBob3Rvbi5Mb2FkQmFsYW5jaW5nLkxvYWRCYWxhbmNpbmdDbGllbnQjam9pblJhbmRvbVJvb21cclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gQWRkaXRpb25hbCBvcHRpb25zXHJcbiAgICAgICAgICAgICAgICBAcHJvcGVydHkge29iamVjdH0gb3B0aW9ucyBBZGRpdGlvbmFsIG9wdGlvbnNcclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7b2JqZWN0fSBbb3B0aW9ucy5leHBlY3RlZEN1c3RvbVJvb21Qcm9wZXJ0aWVzXSBJZiBzcGVjaWZpZWQsIGEgcm9vbSB3aWxsIG9ubHkgYmUgam9pbmVkLCBpZiBpdCBtYXRjaGVzIHRoZXNlIGN1c3RvbSBwcm9wZXJ0aWVzLiBVc2UgbnVsbCB0byBhY2NlcHQgcm9vbXMgd2l0aCBhbnkgcHJvcGVydGllcy5cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBbb3B0aW9ucy5leHBlY3RlZE1heFBsYXllcnNdIElmIHNwZWNpZmllZCwgZmlsdGVycyBmb3IgYSBwYXJ0aWN1bGFyIG1heFBsYXllciBzZXR0aW5nLiBVc2UgMCB0byBhY2NlcHQgYW55IG1heFBsYXllciB2YWx1ZS5cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7UGhvdG9uLkxvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLk1hdGNobWFraW5nTW9kZX0gW29wdGlvbnMubWF0Y2htYWtpbmdNb2RlPU1hdGNobWFraW5nTW9kZS5GaWxsUm9vbV0gU2VsZWN0cyBvbmUgb2YgdGhlIGF2YWlsYWJsZSBtYXRjaG1ha2luZyBhbGdvcml0aG1zLlxyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtzdHJpbmd9IFtvcHRpb25zLmxvYmJ5TmFtZV0gTmFtZSBvZiB0aGUgbG9iYnkgdG8gc2VhcmNoIHJvb21zIGluLlxyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtQaG90b24uTG9hZEJhbGFuY2luZy5Db25zdGFudHMuTG9iYnlUeXBlfSBbb3B0aW9ucy5sb2JieVR5cGU9TG9iYnlUeXBlLkRlZmF1bHRdIFR5cGUgb2YgdGhlIGxvYmJ5LlxyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtzdHJpbmd9IFtvcHRpb25zLnNxbExvYmJ5RmlsdGVyXSBCYXNpY2FsbHkgdGhlIFwid2hlcmVcIiBjbGF1c2Ugb2YgYSBzcWwgc3RhdGVtZW50LiBFeGFtcGxlczogJ0MwID0gMSBBTkQgQzIgPiA1MCcuICdDNSA9IFwiTWFwMlwiIEFORCBDMiA+IDEwIEFORCBDMiA8IDIwJ1xyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBMb2FkQmFsYW5jaW5nQ2xpZW50LnByb3RvdHlwZS5qb2luUmFuZG9tUm9vbSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3AgPSBbXTtcclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMubWF0Y2hpbmdUeXBlICE9IHVuZGVmaW5lZCAmJiBvcHRpb25zLm1hdGNoaW5nVHlwZSAhPSBMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5NYXRjaG1ha2luZ01vZGUuRmlsbFJvb20pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3AucHVzaChMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5QYXJhbWV0ZXJDb2RlLk1hdGNoTWFraW5nVHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wLnB1c2gob3B0aW9ucy5tYXRjaGluZ1R5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZXhwZWN0ZWRSb29tUHJvcGVydGllcyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9wTm9uRW1wdHkgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5leHBlY3RlZEN1c3RvbVJvb21Qcm9wZXJ0aWVzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrIGluIG9wdGlvbnMuZXhwZWN0ZWRDdXN0b21Sb29tUHJvcGVydGllcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWRSb29tUHJvcGVydGllc1trXSA9IG9wdGlvbnMuZXhwZWN0ZWRDdXN0b21Sb29tUHJvcGVydGllc1trXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BOb25FbXB0eSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZXhwZWN0ZWRNYXhQbGF5ZXJzICE9IHVuZGVmaW5lZCAmJiBvcHRpb25zLmV4cGVjdGVkTWF4UGxheWVycyA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWRSb29tUHJvcGVydGllc1tMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5HYW1lUHJvcGVydGllcy5NYXhQbGF5ZXJzXSA9IG9wdGlvbnMuZXhwZWN0ZWRNYXhQbGF5ZXJzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wTm9uRW1wdHkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcE5vbkVtcHR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wLnB1c2goTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5HYW1lUHJvcGVydGllcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wLnB1c2goZXhwZWN0ZWRSb29tUHJvcGVydGllcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmxvYmJ5TmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcC5wdXNoKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuTG9iYnlOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3AucHVzaChvcHRpb25zLmxvYmJ5TmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmxvYmJ5VHlwZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wLnB1c2goTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5Mb2JieVR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3AucHVzaChvcHRpb25zLmxvYmJ5VHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuc3FsTG9iYnlGaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3AucHVzaChMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5QYXJhbWV0ZXJDb2RlLkRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcC5wdXNoKG9wdGlvbnMuc3FsTG9iYnlGaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJKb2luIFJhbmRvbSBSb29tXCIsIG9wdGlvbnMgJiYgb3B0aW9ucy5sb2JieU5hbWUsIG9wdGlvbnMgJiYgb3B0aW9ucy5sb2JieVR5cGUsIFwiLi4uXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXN0ZXJQZWVyLnNlbmRPcGVyYXRpb24oTG9hZEJhbGFuY2luZy5Db25zdGFudHMuT3BlcmF0aW9uQ29kZS5Kb2luUmFuZG9tR2FtZSwgb3ApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIExvYWRCYWxhbmNpbmdDbGllbnQucHJvdG90eXBlLl9zZXRQcm9wZXJ0aWVzT2ZSb29tID0gZnVuY3Rpb24gKHByb3BlcnRpZXMsIHdlYkZvcndhcmQsIGV4cGVjdGVkUHJvcGVydGllcykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9wID0gW107XHJcbiAgICAgICAgICAgICAgICBvcC5wdXNoKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuUHJvcGVydGllcyk7XHJcbiAgICAgICAgICAgICAgICBvcC5wdXNoKHByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgICAgICAgb3AucHVzaChMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5QYXJhbWV0ZXJDb2RlLkJyb2FkY2FzdCk7XHJcbiAgICAgICAgICAgICAgICBvcC5wdXNoKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHdlYkZvcndhcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcC5wdXNoKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuV2ViRmxhZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wLnB1c2goUGhvdG9uLlR5cGVFeHQuQnl0ZShXZWJGbGFncy5IdHRwRm9yd2FyZCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGV4cGVjdGVkUHJvcGVydGllcykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wLnB1c2goTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5FeHBlY3RlZFZhbHVlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3AucHVzaChleHBlY3RlZFByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lUGVlci5zZW5kT3BlcmF0aW9uKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLk9wZXJhdGlvbkNvZGUuU2V0UHJvcGVydGllcywgb3ApO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBMb2FkQmFsYW5jaW5nQ2xpZW50LnByb3RvdHlwZS5fc2V0UHJvcGVydGllc09mQWN0b3IgPSBmdW5jdGlvbiAoYWN0b3JOciwgcHJvcGVydGllcywgd2ViRm9yd2FyZCwgZXhwZWN0ZWRQcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3AgPSBbXTtcclxuICAgICAgICAgICAgICAgIG9wLnB1c2goTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5BY3Rvck5yKTtcclxuICAgICAgICAgICAgICAgIG9wLnB1c2goYWN0b3JOcik7XHJcbiAgICAgICAgICAgICAgICBvcC5wdXNoKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuUHJvcGVydGllcyk7XHJcbiAgICAgICAgICAgICAgICBvcC5wdXNoKHByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgICAgICAgb3AucHVzaChMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5QYXJhbWV0ZXJDb2RlLkJyb2FkY2FzdCk7XHJcbiAgICAgICAgICAgICAgICBvcC5wdXNoKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHdlYkZvcndhcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcC5wdXNoKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuV2ViRmxhZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wLnB1c2goUGhvdG9uLlR5cGVFeHQuQnl0ZShXZWJGbGFncy5IdHRwRm9yd2FyZCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGV4cGVjdGVkUHJvcGVydGllcykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wLnB1c2goTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5FeHBlY3RlZFZhbHVlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3AucHVzaChleHBlY3RlZFByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lUGVlci5zZW5kT3BlcmF0aW9uKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLk9wZXJhdGlvbkNvZGUuU2V0UHJvcGVydGllcywgb3ApO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IERpc2Nvbm5lY3RzIGZyb20gYWxsIHNlcnZlcnMuXHJcbiAgICAgICAgICAgICAgICBAbWV0aG9kIFBob3Rvbi5Mb2FkQmFsYW5jaW5nLkxvYWRCYWxhbmNpbmdDbGllbnQjZGlzY29ubmVjdFxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBMb2FkQmFsYW5jaW5nQ2xpZW50LnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubmFtZVNlcnZlclBlZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWVTZXJ2ZXJQZWVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuX2NsZWFudXBOYW1lU2VydmVyUGVlckRhdGEoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hc3RlclBlZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hc3RlclBlZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2xlYW51cE1hc3RlclBlZXJEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lUGVlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBlZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2xlYW51cEdhbWVQZWVyRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShMb2FkQmFsYW5jaW5nQ2xpZW50LlN0YXRlLkRpc2Nvbm5lY3RlZCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgQHN1bW1hcnkgRGlzY29ubmVjdHMgY2xpZW50IGZyb20gR2FtZSBzZXJ2ZXIga2VlcGluZyBwbGF5ZXIgaW4gcm9vbSAodG8gcmVqb2luIGxhdGVyKSBhbmQgY29ubmVjdHMgdG8gTWFzdGVyIHNlcnZlciBpZiBub3QgY29ubmVjdGVkLlxyXG4gICAgICAgICAgICAgICAgQG1ldGhvZCBQaG90b24uTG9hZEJhbGFuY2luZy5Mb2FkQmFsYW5jaW5nQ2xpZW50I3N1c3BlbmRSb29tXHJcbiAgICAgICAgICAgICAgICBAcHJvcGVydHkge29iamVjdH0gb3B0aW9ucyBBZGRpdGlvbmFsIG9wdGlvbnNcclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW29wdGlvbnMuc2VuZEF1dGhDb29raWVdIFNlY3VyZWx5IHRyYW5zbWl0IHRoZSBlbmNyeXB0ZWQgb2JqZWN0IEF1dGhDb29raWUgdG8gdGhlIHdlYiBzZXJ2aWNlIGluIFBhdGhMZWF2ZSB3ZWJob29rIHdoZW4gYXZhaWxhYmxlXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIExvYWRCYWxhbmNpbmdDbGllbnQucHJvdG90eXBlLnN1c3BlbmRSb29tID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzSm9pbmVkVG9Sb29tKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lUGVlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5zZW5kQXV0aENvb2tpZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy5wdXNoKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuV2ViRmxhZ3MsIFBob3Rvbi5UeXBlRXh0LkJ5dGUoV2ViRmxhZ3MuU2VuZEF1dGhDb29raWUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMucHVzaChMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5QYXJhbWV0ZXJDb2RlLklzSW5hY3RpdmUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVQZWVyLnNlbmRPcGVyYXRpb24oTG9hZEJhbGFuY2luZy5Db25zdGFudHMuT3BlcmF0aW9uQ29kZS5MZWF2ZSwgcGFyYW1zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lUGVlcldhaXRpbmdGb3JEaXNjb25uZWN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2xlYW51cEdhbWVQZWVyRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQ29ubmVjdGVkVG9NYXN0ZXIoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKExvYWRCYWxhbmNpbmdDbGllbnQuU3RhdGUuSm9pbmVkTG9iYnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShMb2FkQmFsYW5jaW5nQ2xpZW50LlN0YXRlLkRpc2Nvbm5lY3RlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdCh0aGlzLmNvbm5lY3RPcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgQHN1bW1hcnkgTGVhdmVzIHJvb20gYW5kIGNvbm5lY3RzIHRvIE1hc3RlciBzZXJ2ZXIgaWYgbm90IGNvbm5lY3RlZC5cclxuICAgICAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLkxvYWRCYWxhbmNpbmcuTG9hZEJhbGFuY2luZ0NsaWVudCNsZWF2ZVJvb21cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7b2JqZWN0fSBvcHRpb25zIEFkZGl0aW9uYWwgb3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtib29sZWFufSBbb3B0aW9ucy5zZW5kQXV0aENvb2tpZV0gU2VjdXJlbHkgdHJhbnNtaXQgdGhlIGVuY3J5cHRlZCBvYmplY3QgQXV0aENvb2tpZSB0byB0aGUgd2ViIHNlcnZpY2UgaW4gUGF0aExlYXZlIHdlYmhvb2sgd2hlbiBhdmFpbGFibGVcclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTG9hZEJhbGFuY2luZ0NsaWVudC5wcm90b3R5cGUubGVhdmVSb29tID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzSm9pbmVkVG9Sb29tKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lUGVlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5zZW5kQXV0aENvb2tpZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy5wdXNoKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuV2ViRmxhZ3MsIFBob3Rvbi5UeXBlRXh0LkJ5dGUoV2ViRmxhZ3MuU2VuZEF1dGhDb29raWUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVQZWVyLnNlbmRPcGVyYXRpb24oTG9hZEJhbGFuY2luZy5Db25zdGFudHMuT3BlcmF0aW9uQ29kZS5MZWF2ZSwgcGFyYW1zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lUGVlcldhaXRpbmdGb3JEaXNjb25uZWN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2xlYW51cEdhbWVQZWVyRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQ29ubmVjdGVkVG9NYXN0ZXIoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKExvYWRCYWxhbmNpbmdDbGllbnQuU3RhdGUuSm9pbmVkTG9iYnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShMb2FkQmFsYW5jaW5nQ2xpZW50LlN0YXRlLkRpc2Nvbm5lY3RlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdCh0aGlzLmNvbm5lY3RPcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgQHN1bW1hcnkgUmFpc2VzIGdhbWUgY3VzdG9tIGV2ZW50XHJcbiAgICAgICAgICAgICAgICBAbWV0aG9kIFBob3Rvbi5Mb2FkQmFsYW5jaW5nLkxvYWRCYWxhbmNpbmdDbGllbnQjcmFpc2VFdmVudFxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtudW1iZXJ9IGV2ZW50Q29kZSBJZGVudGlmaWVzIHRoaXMgdHlwZSBvZiBldmVudCAoYW5kIHRoZSBjb250ZW50KS4gWW91ciBnYW1lJ3MgZXZlbnQgY29kZXMgY2FuIHN0YXJ0IHdpdGggMC5cclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7b2JqZWN0fSBbZGF0YV0gQ3VzdG9tIGRhdGEgeW91IHdhbnQgdG8gc2VuZCBhbG9uZyAodXNlIG51bGwsIGlmIG5vbmUpLlxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSBBZGRpdGlvbmFsIG9wdGlvbnNcclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7b2JqZWN0fSBvcHRpb25zIEFkZGl0aW9uYWwgb3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtudW1iZXJ9IFtvcHRpb25zLmludGVyZXN0R3JvdXBdIFRoZSBJRCBvZiB0aGUgaW50ZXJlc3QgZ3JvdXAgdGhpcyBldmVudCBnb2VzIHRvIChleGNsdXNpdmVseSkuXHJcbiAgICAgICAgICAgICAgICBAcHJvcGVydHkge1Bob3Rvbi5Mb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5FdmVudENhY2hpbmd9IFtvcHRpb25zLmNhY2hlPUV2ZW50Q2FjaGluZy5Eb05vdENhY2hlXSBFdmVudHMgY2FuIGJlIGNhY2hlZCAobWVyZ2VkIGFuZCByZW1vdmVkKSBmb3IgcGxheWVycyBqb2luaW5nIGxhdGVyIG9uLlxyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtQaG90b24uTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUmVjZWl2ZXJHcm91cH0gW29wdGlvbnMucmVjZWl2ZXJzPVJlY2VpdmVyR3JvdXAuT3RoZXJzXSBEZWZpbmVzIHRvIHdoaWNoIGdyb3VwIG9mIHBsYXllcnMgdGhlIGV2ZW50IGlzIHBhc3NlZCBvbi5cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyW119IFtvcHRpb25zLnRhcmdldEFjdG9yc10gRGVmaW5lcyB0aGUgdGFyZ2V0IHBsYXllcnMgd2hvIHNob3VsZCByZWNlaXZlIHRoZSBldmVudCAodXNlIG9ubHkgZm9yIHNtYWxsIHRhcmdldCBncm91cHMpLlxyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtib29sZWFufSBbb3B0aW9ucy53ZWJGb3J3YXJkPWZhbHNlXSBGb3J3YXJkIHRvIHdlYiBob29rLlxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBMb2FkQmFsYW5jaW5nQ2xpZW50LnByb3RvdHlwZS5yYWlzZUV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50Q29kZSwgZGF0YSwgb3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNKb2luZWRUb1Jvb20oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBlZXIucmFpc2VFdmVudChldmVudENvZGUsIGRhdGEsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IENoYW5nZXMgY2xpZW50J3MgaW50ZXJlc3QgZ3JvdXBzIChmb3IgZXZlbnRzIGluIHJvb20pLjxici8+XHJcbiAgICAgICAgICAgICAgICBOb3RlIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gcGFzc2luZyBudWxsIGFuZCBbXTogbnVsbCB3b24ndCBhZGQvcmVtb3ZlIGFueSBncm91cHMsIFtdIHdpbGwgYWRkL3JlbW92ZSBhbGwgKGV4aXN0aW5nKSBncm91cHMuPGJyLz5cclxuICAgICAgICAgICAgICAgIEZpcnN0LCByZW1vdmluZyBncm91cHMgaXMgZXhlY3V0ZWQuIFRoaXMgd2F5LCB5b3UgY291bGQgbGVhdmUgYWxsIGdyb3VwcyBhbmQgam9pbiBvbmx5IHRoZSBvbmVzIHByb3ZpZGVkLlxyXG4gICAgICAgICAgICAgICAgQG1ldGhvZCBQaG90b24uTG9hZEJhbGFuY2luZy5Mb2FkQmFsYW5jaW5nQ2xpZW50I2NoYW5nZUdyb3Vwc1xyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtudW1iZXJbXX0gZ3JvdXBzVG9SZW1vdmUgR3JvdXBzIHRvIHJlbW92ZSBmcm9tIGludGVyZXN0LiBOdWxsIHdpbGwgbm90IGxlYXZlIGFueS4gQSBbXSB3aWxsIHJlbW92ZSBhbGwuXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge251bWJlcltdfSBncm91cHNUb0FkZCBHcm91cHMgdG8gYWRkIHRvIGludGVyZXN0LiBOdWxsIHdpbGwgbm90IGFkZCBhbnkuIEEgW10gd2lsbCBhZGQgYWxsIGN1cnJlbnQuXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIExvYWRCYWxhbmNpbmdDbGllbnQucHJvdG90eXBlLmNoYW5nZUdyb3VwcyA9IGZ1bmN0aW9uIChncm91cHNUb1JlbW92ZSwgZ3JvdXBzVG9BZGQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzSm9pbmVkVG9Sb29tKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhcIkdyb3VwIGNoYW5nZTpcIiwgZ3JvdXBzVG9SZW1vdmUsIGdyb3Vwc1RvQWRkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVQZWVyLmNoYW5nZUdyb3Vwcyhncm91cHNUb1JlbW92ZSwgZ3JvdXBzVG9BZGQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IFJlcXVlc3RzIE1hc3RlciBzZXJ2ZXIgZm9yIGFjdG9ycyBvbmxpbmUgc3RhdHVzIGFuZCBqb2luZWQgcm9vbXMuPGJyLz5cclxuICAgICAgICAgICAgICAgIE92ZXJyaWRlIHtAbGluayBQaG90b24uTG9hZEJhbGFuY2luZy5Mb2FkQmFsYW5jaW5nQ2xpZW50I29uRmluZEZyaWVuZHNSZXN1bHQgb25GaW5kRnJpZW5kc1Jlc3VsdH0gdG8gaGFuZGxlIHJlcXVlc3QgcmVzdWx0cy5cclxuICAgICAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLkxvYWRCYWxhbmNpbmcuTG9hZEJhbGFuY2luZ0NsaWVudCNmaW5kRnJpZW5kc1xyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtzdHJpbmdbXX0gZnJpZW5kc1RvRmluZCBBY3RvcnMgbmFtZXMuXHJcbiAgICAgICAgICAgICoqL1xyXG4gICAgICAgICAgICBMb2FkQmFsYW5jaW5nQ2xpZW50LnByb3RvdHlwZS5maW5kRnJpZW5kcyA9IGZ1bmN0aW9uIChmcmllbmRzVG9GaW5kKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0Nvbm5lY3RlZFRvTWFzdGVyKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZnJpZW5kc1RvRmluZCAmJiB0eXBlb2YgKGZyaWVuZHNUb0ZpbmQpID09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5kRnJpZW5kc1JlcXVlc3RMaXN0ID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZnJpZW5kc1RvRmluZC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoZnJpZW5kc1RvRmluZFtpXSkgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmluZEZyaWVuZHNSZXF1ZXN0TGlzdFtpXSA9IGZyaWVuZHNUb0ZpbmRbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihcIkZpbmRGcmllbmRzIHJlcXVlc3QgZXJyb3I6XCIsIFwiRnJpZW5kIG5hbWUgaXMgbm90IGEgc3RyaW5nXCIsIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25GaW5kRnJpZW5kc1Jlc3VsdCgtMSwgXCJGcmllbmQgbmFtZSBpcyBub3QgYSBzdHJpbmdcIiArIFwiIFwiICsgaSwge30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhcIkZpbmQgZnJpZW5kczpcIiwgZnJpZW5kc1RvRmluZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFzdGVyUGVlci5maW5kRnJpZW5kcyh0aGlzLmZpbmRGcmllbmRzUmVxdWVzdExpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJGaW5kRnJpZW5kcyByZXF1ZXN0IGVycm9yOlwiLCBcIlBhcmFtZXRlciBpcyBub3QgYW4gYXJyYXlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25GaW5kRnJpZW5kc1Jlc3VsdCgtMSwgXCJQYXJhbWV0ZXIgaXMgbm90IGFuIGFycmF5XCIsIHt9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihcIkZpbmRGcmllbmRzIHJlcXVlc3QgZXJyb3I6XCIsIFwiTm90IGNvbm5lY3RlZCB0byBNYXN0ZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkZpbmRGcmllbmRzUmVzdWx0KExvYWRCYWxhbmNpbmdDbGllbnQuUGVlckVycm9yQ29kZS5NYXN0ZXJFcnJvciwgXCJOb3QgY29ubmVjdGVkIHRvIE1hc3RlclwiLCB7fSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgQHN1bW1hcnkgUmVxdWVzdHMgTWFzdGVyIHNlcnZlciBmb3IgbG9iYmllcyBzdGF0aXN0aWNzLjxici8+XHJcbiAgICAgICAgICAgICAgICBPdmVycmlkZSB7QGxpbmsgUGhvdG9uLkxvYWRCYWxhbmNpbmcuTG9hZEJhbGFuY2luZ0NsaWVudCNvbkxvYmJ5U3RhdHMgb25Mb2JieVN0YXRzfSB0byBoYW5kbGUgcmVxdWVzdCByZXN1bHRzLjxici8+XHJcbiAgICAgICAgICAgICAgICBBbHRlcm5hdGl2ZWx5LCBhdXRvbWF0ZWQgdXBkYXRlcyBjYW4gYmUgc2V0IHVwIGR1cmluZyB7QGxpbmsgUGhvdG9uLkxvYWRCYWxhbmNpbmcuTG9hZEJhbGFuY2luZ0NsaWVudCNjb25uZWN0IGNvbm5lY3R9LlxyXG4gICAgICAgICAgICAgICAgQG1ldGhvZCBQaG90b24uTG9hZEJhbGFuY2luZy5Mb2FkQmFsYW5jaW5nQ2xpZW50I3JlcXVlc3RMb2JieVN0YXRzXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge2FueVtdfSBsb2JiaWVzVG9SZXF1ZXN0IEFycmF5IG9mIGxvYmJpZXMgaWQgcGFpcnMgWyBbbG9iYnlOYW1lMSwgbG9iYnlUeXBlMV0sIFtsb2JieU5hbWUyLCBsb2JieVR5cGUyXSwgLi4uIF0uIElmIG5vdCBzcGVjaWZpZWQgb3IgbnVsbCwgc3RhdGlzdGljcyBmb3IgYWxsIGxvYmJpZXMgcmVxdWVzdGVkLlxyXG4gICAgXHJcbiAgICAgICAgICAgICoqL1xyXG4gICAgICAgICAgICBMb2FkQmFsYW5jaW5nQ2xpZW50LnByb3RvdHlwZS5yZXF1ZXN0TG9iYnlTdGF0cyA9IGZ1bmN0aW9uIChsb2JiaWVzVG9SZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0Nvbm5lY3RlZFRvTWFzdGVyKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYmJ5U3RhdHNSZXF1ZXN0TGlzdCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2JiaWVzVG9SZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKGxvYmJpZXNUb1JlcXVlc3QpID09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG9iYmllc1RvUmVxdWVzdC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsID0gbG9iYmllc1RvUmVxdWVzdFtpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChsKSA9PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gbFswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxbMV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5Mb2JieVR5cGUuRGVmYXVsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKGxbMV0pID09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGxbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RMb2JieVN0YXRzRXJyKFwiTG9iYnkgdHlwZSBpcyBpbnZhbGlkXCIsIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2JieVN0YXRzUmVxdWVzdExpc3RbaV0gPSBbbi50b1N0cmluZygpLCB0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdExvYmJ5U3RhdHNFcnIoXCJMb2JieSBuYW1lIGlzIGVtcHR5XCIsIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RMb2JieVN0YXRzRXJyKFwiTG9iYnkgaWQgaXMgbm90IGFuIGFycmF5XCIsIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0TG9iYnlTdGF0c0VycihcIlBhcmFtZXRlciBpcyBub3QgYW4gYXJyYXlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXN0ZXJQZWVyLnJlcXVlc3RMb2JieVN0YXRzKHRoaXMubG9iYnlTdGF0c1JlcXVlc3RMaXN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiTG9iYnlTdGF0ZSByZXF1ZXN0IGVycm9yOlwiLCBcIk5vdCBjb25uZWN0ZWQgdG8gTWFzdGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Mb2JieVN0YXRzKExvYWRCYWxhbmNpbmdDbGllbnQuUGVlckVycm9yQ29kZS5NYXN0ZXJFcnJvciwgXCJOb3QgY29ubmVjdGVkIHRvIE1hc3RlclwiLCBbXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIExvYWRCYWxhbmNpbmdDbGllbnQucHJvdG90eXBlLnJlcXVlc3RMb2JieVN0YXRzRXJyID0gZnVuY3Rpb24gKG0sIG90aGVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3RoZXIgPT09IHZvaWQgMCkgeyBvdGhlciA9IFwiXCI7IH1cclxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiTG9iYnlTdGF0ZSByZXF1ZXN0IGVycm9yOlwiLCBtLCBvdGhlcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uTG9iYnlTdGF0cygtMSwgbSArIFwiIFwiICsgb3RoZXIsIFtdKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAc3VtbWFyeSBSZXF1ZXN0cyBOYW1lU2VydmVyIGZvciByZWdpb25zIGxpc3QuPGJyLz5cclxuICAgICAgICAgICAgICAgIE92ZXJyaWRlIHtAbGluayBQaG90b24uTG9hZEJhbGFuY2luZy5Mb2FkQmFsYW5jaW5nQ2xpZW50I29uR2V0UmVnaW9uc1Jlc3VsdCBvbkdldFJlZ2lvbnNSZXN1bHR9IHRvIGhhbmRsZSByZXF1ZXN0IHJlc3VsdHMuPGJyLz5cclxuICAgICAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLkxvYWRCYWxhbmNpbmcuTG9hZEJhbGFuY2luZ0NsaWVudCNnZXRSZWdpb25zXHJcbiAgICAgICAgICAgICoqL1xyXG4gICAgICAgICAgICBMb2FkQmFsYW5jaW5nQ2xpZW50LnByb3RvdHlwZS5nZXRSZWdpb25zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNDb25uZWN0ZWRUb05hbWVTZXJ2ZXIoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKFwiR2V0UmVnaW9ucy4uLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWVTZXJ2ZXJQZWVyLmdldFJlZ2lvbnModGhpcy5hcHBJZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihcIkdldFJlZ2lvbnMgcmVxdWVzdCBlcnJvcjpcIiwgXCJOb3QgY29ubmVjdGVkIHRvIE5hbWVTZXJ2ZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkdldFJlZ2lvbnNSZXN1bHQoTG9hZEJhbGFuY2luZ0NsaWVudC5QZWVyRXJyb3JDb2RlLk5hbWVTZXJ2ZXJFcnJvciwgXCJOb3QgY29ubmVjdGVkIHRvIE5hbWVTZXJ2ZXJcIiwge30pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IFNlbmRzIHdlYiBycGMgcmVxdWVzdCB0byBNYXN0ZXIgc2VydmVyLjxici8gPlxyXG4gICAgICAgICAgICAgICAgT3ZlcnJpZGUge0BsaW5rIFBob3Rvbi5Mb2FkQmFsYW5jaW5nLkxvYWRCYWxhbmNpbmdDbGllbnQjb25XZWJScGNSZXN1bHQgb25XZWJScGNSZXN1bHR9IHRvIGhhbmRsZSByZXF1ZXN0IHJlc3VsdHMuPGJyLz5cclxuICAgICAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLkxvYWRCYWxhbmNpbmcuTG9hZEJhbGFuY2luZ0NsaWVudCN3ZWJScGNcclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7c3RyaW5nfSB1cmlQYXRoIFJlcXVlc3QgcGF0aC5cclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7b2JqZWN0fSBwYXJhbWV0ZXJzIFJlcXVlc3QgcGFyYW1ldGVycy5cclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gQWRkaXRpb25hbCBvcHRpb25zXHJcbiAgICAgICAgICAgICAgICBAcHJvcGVydHkge29iamVjdH0gb3B0aW9ucyBBZGRpdGlvbmFsIG9wdGlvbnNcclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW29wdGlvbnMuc2VuZEF1dGhDb29raWVdIERlZmluZXMgaWYgdGhlIGF1dGhlbnRpY2F0aW9uIGNvb2tpZSBnZXRzIHNlbnQgdG8gYSBXZWJIb29rIChpZiBzZXR1cClcclxuICAgICAgICAgICAgKiovXHJcbiAgICAgICAgICAgIExvYWRCYWxhbmNpbmdDbGllbnQucHJvdG90eXBlLndlYlJwYyA9IGZ1bmN0aW9uICh1cmlQYXRoLCBwYXJhbWV0ZXJzLCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0Nvbm5lY3RlZFRvTWFzdGVyKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhcIldlYlJwYy4uLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hc3RlclBlZXIud2ViUnBjKHVyaVBhdGgsIHBhcmFtZXRlcnMsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5pc0pvaW5lZFRvUm9vbSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoXCJXZWJScGMuLi5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lUGVlci53ZWJScGModXJpUGF0aCwgcGFyYW1ldGVycywgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihcIldlYlJwYyByZXF1ZXN0IGVycm9yOlwiLCBcIkNvbm5lY3RlZCB0byBuZWl0aGVyIE1hc3RlciBub3IgR2FtZSBzZXJ2ZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbldlYlJwY1Jlc3VsdChMb2FkQmFsYW5jaW5nQ2xpZW50LlBlZXJFcnJvckNvZGUuTWFzdGVyRXJyb3IsIFwiQ29ubmVjdGVkIHRvIG5laXRoZXIgTWFzdGVyIG5vciBHYW1lIHNlcnZlclwiLCB1cmlQYXRoLCAwLCB7fSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgQHN1bW1hcnkgQ29ubmVjdHMgdG8gYSBzcGVjaWZpYyByZWdpb24ncyBNYXN0ZXIgc2VydmVyLCB1c2luZyB0aGUgTmFtZVNlcnZlciB0byBmaW5kIHRoZSBJUC5cclxuICAgICAgICAgICAgICAgIE92ZXJyaWRlIHtAbGluayBQaG90b24uTG9hZEJhbGFuY2luZy5Mb2FkQmFsYW5jaW5nQ2xpZW50I29uV2ViUnBjUmVzdWx0IG9uV2ViUnBjUmVzdWx0fSB0byBoYW5kbGUgcmVxdWVzdCByZXN1bHRzLjxici8+XHJcbiAgICAgICAgICAgICAgICBAbWV0aG9kIFBob3Rvbi5Mb2FkQmFsYW5jaW5nLkxvYWRCYWxhbmNpbmdDbGllbnQjY29ubmVjdFRvUmVnaW9uTWFzdGVyXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge3N0cmluZ30gcmVnaW9uIFJlZ2lvbiBjb25uZWN0IHRvIE1hc3RlciBzZXJ2ZXIgb2YuXHJcbiAgICAgICAgICAgICAgICBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBjdXJyZW50IGNsaWVudCBzdGF0ZSBhbGxvd3MgY29ubmVjdGlvbi5cclxuICAgICAgICAgICAgKiovXHJcbiAgICAgICAgICAgIExvYWRCYWxhbmNpbmdDbGllbnQucHJvdG90eXBlLmNvbm5lY3RUb1JlZ2lvbk1hc3RlciA9IGZ1bmN0aW9uIChyZWdpb24pIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQ29ubmVjdGVkVG9OYW1lU2VydmVyKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhcIkNvbm5lY3RpbmcgdG8gUmVnaW9uIE1hc3RlclwiLCByZWdpb24sIFwiLi4uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmFtZVNlcnZlclBlZXIub3BBdXRoKHRoaXMuYXBwSWQsIHRoaXMuYXBwVmVyc2lvbiwgdGhpcy51c2VyQXV0aFR5cGUsIHRoaXMudXNlckF1dGhQYXJhbWV0ZXJzLCB0aGlzLnVzZXJBdXRoRGF0YSwgdGhpcy51c2VySWQsIHJlZ2lvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmNvbm5lY3RUb05hbWVTZXJ2ZXIoeyByZWdpb246IHJlZ2lvbiB9KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJDb25uZWN0aW5nIHRvIFJlZ2lvbiBNYXN0ZXIgZXJyb3I6XCIsIFwiTm90IGNvbm5lY3RlZCB0byBOYW1lU2VydmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAc3VtbWFyeSBDaGVja3MgaWYgY2xpZW50IGlzIGNvbm5lY3RlZCB0byBNYXN0ZXIgc2VydmVyICh1c3VhbGx5IGpvaW5lZCB0byBsb2JieSBhbmQgcmVjZWl2ZXMgcm9vbSBsaXN0IHVwZGF0ZXMpLlxyXG4gICAgICAgICAgICAgICAgQG1ldGhvZCBQaG90b24uTG9hZEJhbGFuY2luZy5Mb2FkQmFsYW5jaW5nQ2xpZW50I2lzQ29ubmVjdGVkVG9NYXN0ZXJcclxuICAgICAgICAgICAgICAgIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIGNsaWVudCBpcyBjb25uZWN0ZWQgdG8gTWFzdGVyIHNlcnZlci5cclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgTG9hZEJhbGFuY2luZ0NsaWVudC5wcm90b3R5cGUuaXNDb25uZWN0ZWRUb01hc3RlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1hc3RlclBlZXIgJiYgdGhpcy5tYXN0ZXJQZWVyLmlzQ29ubmVjdGVkKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgQHN1bW1hcnkgQ2hlY2tzIGlmIGNsaWVudCBpcyBjb25uZWN0ZWQgdG8gTmFtZVNlcnZlciBzZXJ2ZXIuXHJcbiAgICAgICAgICAgICAgICBAbWV0aG9kIFBob3Rvbi5Mb2FkQmFsYW5jaW5nLkxvYWRCYWxhbmNpbmdDbGllbnQjaXNDb25uZWN0ZWRUb05hbWVTZXJ2ZXJcclxuICAgICAgICAgICAgICAgIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIGNsaWVudCBpcyBjb25uZWN0ZWQgdG8gTmFtZVNlcnZlciBzZXJ2ZXIuXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIExvYWRCYWxhbmNpbmdDbGllbnQucHJvdG90eXBlLmlzQ29ubmVjdGVkVG9OYW1lU2VydmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubmFtZVNlcnZlclBlZXIgJiYgdGhpcy5uYW1lU2VydmVyUGVlci5pc0Nvbm5lY3RlZCgpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IENoZWNrcyBpZiBjbGllbnQgaXMgaW4gbG9iYnkgYW5kIHJlYWR5IHRvIGpvaW4gb3IgY3JlYXRlIGdhbWUuXHJcbiAgICAgICAgICAgICAgICBAbWV0aG9kIFBob3Rvbi5Mb2FkQmFsYW5jaW5nLkxvYWRCYWxhbmNpbmdDbGllbnQjaXNJbkxvYmJ5XHJcbiAgICAgICAgICAgICAgICBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBjbGllbnQgaXMgaW4gbG9iYnkuXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIExvYWRCYWxhbmNpbmdDbGllbnQucHJvdG90eXBlLmlzSW5Mb2JieSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlID09IExvYWRCYWxhbmNpbmdDbGllbnQuU3RhdGUuSm9pbmVkTG9iYnk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgQHN1bW1hcnkgQ2hlY2tzIGlmIGNsaWVudCBpcyBqb2luZWQgdG8gZ2FtZS5cclxuICAgICAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLkxvYWRCYWxhbmNpbmcuTG9hZEJhbGFuY2luZ0NsaWVudCNpc0pvaW5lZFRvUm9vbVxyXG4gICAgICAgICAgICAgICAgQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgY2xpZW50IGlzIGpvaW5lZCB0byBnYW1lLlxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBMb2FkQmFsYW5jaW5nQ2xpZW50LnByb3RvdHlwZS5pc0pvaW5lZFRvUm9vbSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlID09IExvYWRCYWxhbmNpbmdDbGllbnQuU3RhdGUuSm9pbmVkO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBkZXByZWNhdGVkIFVzZSBpc0pvaW5lZFRvUm9vbSgpXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIExvYWRCYWxhbmNpbmdDbGllbnQucHJvdG90eXBlLmlzQ29ubmVjdGVkVG9HYW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNKb2luZWRUb1Jvb20oKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAc3VtbWFyeSBDdXJyZW50IHJvb20gbGlzdCBmcm9tIE1hc3RlciBzZXJ2ZXIuXHJcbiAgICAgICAgICAgICAgICBAbWV0aG9kIFBob3Rvbi5Mb2FkQmFsYW5jaW5nLkxvYWRCYWxhbmNpbmdDbGllbnQjYXZhaWxhYmxlUm9vbXNcclxuICAgICAgICAgICAgICAgIEByZXR1cm5zIHt7QGxpbmsgUGhvdG9uLkxvYWRCYWxhbmNpbmcuUm9vbUluZm99W119IEN1cnJlbnQgcm9vbSBsaXN0XHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIExvYWRCYWxhbmNpbmdDbGllbnQucHJvdG90eXBlLmF2YWlsYWJsZVJvb21zID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5yb29tSW5mb3M7IH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgQHN1bW1hcnkgU2V0cyBjbGllbnQgbG9nZ2VyIGxldmVsXHJcbiAgICAgICAgICAgICAgICBAbWV0aG9kIFBob3Rvbi5Mb2FkQmFsYW5jaW5nLkxvYWRCYWxhbmNpbmdDbGllbnQjc2V0TG9nTGV2ZWxcclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7RXhpdGdhbWVzLkNvbW1vbi5Mb2dnZXIuTGV2ZWx9IGxldmVsIExvZ2dpbmcgbGV2ZWwuXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIExvYWRCYWxhbmNpbmdDbGllbnQucHJvdG90eXBlLnNldExvZ0xldmVsID0gZnVuY3Rpb24gKGxldmVsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5zZXRMZXZlbChsZXZlbCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5uYW1lU2VydmVyUGVlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmFtZVNlcnZlclBlZXIuc2V0TG9nTGV2ZWwobGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWFzdGVyUGVlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFzdGVyUGVlci5zZXRMb2dMZXZlbChsZXZlbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lUGVlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBlZXIuc2V0TG9nTGV2ZWwobGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBMb2FkQmFsYW5jaW5nQ2xpZW50LnByb3RvdHlwZS5hZGRSb29tID0gZnVuY3Rpb24gKHIpIHsgdGhpcy5yb29tSW5mb3MucHVzaChyKTsgdGhpcy5yb29tSW5mb3NEaWN0W3IubmFtZV0gPSByOyB9O1xyXG4gICAgICAgICAgICBMb2FkQmFsYW5jaW5nQ2xpZW50LnByb3RvdHlwZS5jbGVhclJvb21zID0gZnVuY3Rpb24gKCkgeyB0aGlzLnJvb21JbmZvcyA9IG5ldyBBcnJheSgpOyB0aGlzLnJvb21JbmZvc0RpY3QgPSB7fTsgfTtcclxuICAgICAgICAgICAgTG9hZEJhbGFuY2luZ0NsaWVudC5wcm90b3R5cGUucHVyZ2VSZW1vdmVkUm9vbXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvb21JbmZvcyA9IHRoaXMucm9vbUluZm9zLmZpbHRlcihmdW5jdGlvbiAoeCkgeyByZXR1cm4gIXgucmVtb3ZlZDsgfSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBuIGluIHRoaXMucm9vbUluZm9zRGljdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJvb21JbmZvc0RpY3Rbbl0ucmVtb3ZlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5yb29tSW5mb3NEaWN0W25dO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgTG9hZEJhbGFuY2luZ0NsaWVudC5wcm90b3R5cGUuYWRkQWN0b3IgPSBmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RvcnNbYS5hY3Rvck5yXSA9IGE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdG9yc0FycmF5LnB1c2goYSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRSb29tLnBsYXllckNvdW50ID0gdGhpcy5hY3RvcnNBcnJheS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb3dlc3RBY3RvcklkID09IDAgfHwgdGhpcy5sb3dlc3RBY3RvcklkID4gYS5hY3Rvck5yKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG93ZXN0QWN0b3JJZCA9IGEuYWN0b3JOcjtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgTG9hZEJhbGFuY2luZ0NsaWVudC5wcm90b3R5cGUucmVtb3ZlQWN0b3IgPSBmdW5jdGlvbiAoYWN0b3JOcikge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuYWN0b3JzW2FjdG9yTnJdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RvcnNBcnJheSA9IHRoaXMuYWN0b3JzQXJyYXkuZmlsdGVyKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4LmFjdG9yTnIgIT0gYWN0b3JOcjsgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRSb29tLnBsYXllckNvdW50ID0gdGhpcy5hY3RvcnNBcnJheS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb3dlc3RBY3RvcklkID09IGFjdG9yTnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RvcnNBcnJheS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvd2VzdEFjdG9ySWQgPSB0aGlzLmFjdG9yc0FycmF5LnJlZHVjZShmdW5jdGlvbiAocHJldiwgY3VycikgeyByZXR1cm4gcHJldi5hY3Rvck5yIDwgY3Vyci5hY3Rvck5yID8gcHJldiA6IGN1cnI7IH0pLmFjdG9yTnI7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvd2VzdEFjdG9ySWQgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBMb2FkQmFsYW5jaW5nQ2xpZW50LnByb3RvdHlwZS5jbGVhckFjdG9ycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0b3JzID0ge307XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdG9yc0FycmF5ID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRSb29tLnBsYXllckNvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMubG93ZXN0QWN0b3JJZCA9IDA7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIExvYWRCYWxhbmNpbmdDbGllbnQucHJvdG90eXBlLmNoYW5nZVN0YXRlID0gZnVuY3Rpb24gKG5leHRTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlN0YXRlOlwiLCBMb2FkQmFsYW5jaW5nQ2xpZW50LlN0YXRlVG9OYW1lKHRoaXMuc3RhdGUpLCBcIi0+XCIsIExvYWRCYWxhbmNpbmdDbGllbnQuU3RhdGVUb05hbWUobmV4dFN0YXRlKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gbmV4dFN0YXRlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblN0YXRlQ2hhbmdlKG5leHRTdGF0ZSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIExvYWRCYWxhbmNpbmdDbGllbnQucHJvdG90eXBlLmNyZWF0ZVJvb21JbnRlcm5hbCA9IGZ1bmN0aW9uIChwZWVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3AgPSBbXTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRSb29tLm5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgb3AucHVzaChMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5QYXJhbWV0ZXJDb2RlLlJvb21OYW1lLCB0aGlzLmN1cnJlbnRSb29tLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxsQ3JlYXRlUm9vbU9wdGlvbnMob3AsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBlZXIgPT09IHRoaXMubWFzdGVyUGVlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlUm9vbU9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHBlZXIgPT09IHRoaXMuZ2FtZVBlZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcC5wdXNoKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuUGxheWVyUHJvcGVydGllcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3AucHVzaCh0aGlzLl9teUFjdG9yLl9nZXRBbGxQcm9wZXJ0aWVzKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIGxvZyA9IHBlZXIgPT0gdGhpcy5nYW1lUGVlciA/IHRoaXMuZ2FtZVBlZXIuX2xvZ2dlciA6IHRoaXMubWFzdGVyUGVlci5fbG9nZ2VyO1xyXG4gICAgICAgICAgICAgICAgbG9nLmluZm8oXCJDcmVhdGUgUm9vbVwiLCBvcHRpb25zICYmIG9wdGlvbnMubG9iYnlOYW1lLCBvcHRpb25zICYmIG9wdGlvbnMubG9iYnlUeXBlLCBcIi4uLlwiKTtcclxuICAgICAgICAgICAgICAgIHBlZXIuc2VuZE9wZXJhdGlvbihMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5PcGVyYXRpb25Db2RlLkNyZWF0ZUdhbWUsIG9wKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgTG9hZEJhbGFuY2luZ0NsaWVudC5wcm90b3R5cGUudXBkYXRlVXNlcklkQW5kTmlja25hbWUgPSBmdW5jdGlvbiAodmFscywgbG9nZ2VyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdXNlcklkID0gdmFsc1tMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5QYXJhbWV0ZXJDb2RlLlVzZXJJZF07XHJcbiAgICAgICAgICAgICAgICBpZiAodXNlcklkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0VXNlcklkKHVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmluZm8oXCJTZXR0aW5nIHVzZXJJZCBzZW50IGJ5IHNlcnZlcjpcIiwgdXNlcklkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBuaWNrbmFtZSA9IHZhbHNbTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5OaWNrbmFtZV07XHJcbiAgICAgICAgICAgICAgICBpZiAobmlja25hbWUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5teUFjdG9yKCkuc2V0TmFtZShuaWNrbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmluZm8oXCJTZXR0aW5nIG5pY2tuYW1lIHNlbnQgYnkgc2VydmVyOlwiLCBuaWNrbmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIExvYWRCYWxhbmNpbmdDbGllbnQucHJvdG90eXBlLmluaXROYW1lU2VydmVyUGVlciA9IGZ1bmN0aW9uIChucCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgICAgIG5wLnNldExvZ0xldmVsKHRoaXMubG9nZ2VyLmdldExldmVsKCkpO1xyXG4gICAgICAgICAgICAgICAgLy8gZXJyb3JzXHJcbiAgICAgICAgICAgICAgICBucC5hZGRQZWVyU3RhdHVzTGlzdGVuZXIoUGhvdG9uLlBob3RvblBlZXIuU3RhdHVzQ29kZXMuZXJyb3IsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jaGFuZ2VTdGF0ZShMb2FkQmFsYW5jaW5nQ2xpZW50LlN0YXRlLkVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fb25FcnJvckludGVybmFsKExvYWRCYWxhbmNpbmdDbGllbnQuUGVlckVycm9yQ29kZS5OYW1lU2VydmVyRXJyb3IsIFwiTmFtZVNlcnZlciBwZWVyIGVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBucC5hZGRQZWVyU3RhdHVzTGlzdGVuZXIoUGhvdG9uLlBob3RvblBlZXIuU3RhdHVzQ29kZXMuY29ubmVjdEZhaWxlZCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNoYW5nZVN0YXRlKExvYWRCYWxhbmNpbmdDbGllbnQuU3RhdGUuRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9vbkVycm9ySW50ZXJuYWwoTG9hZEJhbGFuY2luZ0NsaWVudC5QZWVyRXJyb3JDb2RlLk5hbWVTZXJ2ZXJDb25uZWN0RmFpbGVkLCBcIk5hbWVTZXJ2ZXIgcGVlciBjb25uZWN0IGZhaWxlZC4gXCIgKyBfdGhpcy5uYW1lU2VydmVyQWRkcmVzcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIG5wLmFkZFBlZXJTdGF0dXNMaXN0ZW5lcihQaG90b24uUGhvdG9uUGVlci5TdGF0dXNDb2Rlcy50aW1lb3V0LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2hhbmdlU3RhdGUoTG9hZEJhbGFuY2luZ0NsaWVudC5TdGF0ZS5FcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX29uRXJyb3JJbnRlcm5hbChMb2FkQmFsYW5jaW5nQ2xpZW50LlBlZXJFcnJvckNvZGUuTmFtZVNlcnZlclRpbWVvdXQsIFwiTmFtZVNlcnZlciBwZWVyIHRpbWVvdXRcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIG5wLmFkZFBlZXJTdGF0dXNMaXN0ZW5lcihQaG90b24uUGhvdG9uUGVlci5TdGF0dXNDb2Rlcy5jb25uZWN0aW5nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIG5wLmFkZFBlZXJTdGF0dXNMaXN0ZW5lcihQaG90b24uUGhvdG9uUGVlci5TdGF0dXNDb2Rlcy5jb25uZWN0LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbnAuX2xvZ2dlci5pbmZvKFwiQ29ubmVjdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNoYW5nZVN0YXRlKExvYWRCYWxhbmNpbmdDbGllbnQuU3RhdGUuQ29ubmVjdGVkVG9OYW1lU2VydmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25uZWN0VG9SZWdpb25NYXN0ZXIgaW5pdGVkIGNvbm5lY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuY29ubmVjdE9wdGlvbnMucmVnaW9uICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBucC5vcEF1dGgoX3RoaXMuYXBwSWQsIF90aGlzLmFwcFZlcnNpb24sIF90aGlzLnVzZXJBdXRoVHlwZSwgX3RoaXMudXNlckF1dGhQYXJhbWV0ZXJzLCBfdGhpcy51c2VyQXV0aERhdGEsIF90aGlzLnVzZXJJZCwgX3RoaXMuY29ubmVjdE9wdGlvbnMucmVnaW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIG5wLmFkZFBlZXJTdGF0dXNMaXN0ZW5lcihQaG90b24uUGhvdG9uUGVlci5TdGF0dXNDb2Rlcy5kaXNjb25uZWN0LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5wID09IF90aGlzLm5hbWVTZXJ2ZXJQZWVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9jbGVhbnVwTmFtZVNlcnZlclBlZXJEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5wLl9sb2dnZXIuaW5mbyhcIkRpc2Nvbm5lY3RlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIG5wLmFkZFBlZXJTdGF0dXNMaXN0ZW5lcihQaG90b24uUGhvdG9uUGVlci5TdGF0dXNDb2Rlcy5jb25uZWN0Q2xvc2VkLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbnAuX2xvZ2dlci5pbmZvKFwiU2VydmVyIGNsb3NlZCBjb25uZWN0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNoYW5nZVN0YXRlKExvYWRCYWxhbmNpbmdDbGllbnQuU3RhdGUuRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9vbkVycm9ySW50ZXJuYWwoTG9hZEJhbGFuY2luZ0NsaWVudC5QZWVyRXJyb3JDb2RlLk5hbWVTZXJ2ZXJDb25uZWN0Q2xvc2VkLCBcIk5hbWVTZXJ2ZXIgc2VydmVyIGNsb3NlZCBjb25uZWN0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyBldmVudHNcclxuICAgICAgICAgICAgICAgIC8vIHJlc3BvbnNlcyAtIGNoZWNrIG9wZXJhdGlvbiByZXN1bHQuIGRhdGEuZXJyQ29kZVxyXG4gICAgICAgICAgICAgICAgbnAuYWRkUmVzcG9uc2VMaXN0ZW5lcihMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5PcGVyYXRpb25Db2RlLkdldFJlZ2lvbnMsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbnAuX2xvZ2dlci5kZWJ1ZyhcInJlc3AgR2V0UmVnaW9uc1wiLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVnaW9ucyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmVyckNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IGRhdGEudmFsc1tMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5QYXJhbWV0ZXJDb2RlLlJlZ2lvbl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhID0gZGF0YS52YWxzW0xvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuQWRkcmVzc107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaW9uc1tyW2ldXSA9IGFbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5wLl9sb2dnZXIuZXJyb3IoXCJHZXRSZWdpb25zIHJlcXVlc3QgZXJyb3IuXCIsIGRhdGEuZXJyQ29kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm9uR2V0UmVnaW9uc1Jlc3VsdChkYXRhLmVyckNvZGUsIGRhdGEuZXJyTXNnLCByZWdpb25zKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbnAuYWRkUmVzcG9uc2VMaXN0ZW5lcihMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5PcGVyYXRpb25Db2RlLkF1dGhlbnRpY2F0ZSwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBucC5fbG9nZ2VyLmRlYnVnKFwicmVzcCBBdXRoZW50aWNhdGVcIiwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuZXJyQ29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5wLl9sb2dnZXIuaW5mbyhcIkF1dGhlbnRpY2F0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5wLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlVXNlcklkQW5kTmlja25hbWUoZGF0YS52YWxzLCBucC5fbG9nZ2VyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubWFzdGVyU2VydmVyQWRkcmVzcyA9IGRhdGEudmFsc1tMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5QYXJhbWV0ZXJDb2RlLkFkZHJlc3NdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBucC5fbG9nZ2VyLmluZm8oXCJDb25uZWN0aW5nIHRvIE1hc3RlciBzZXJ2ZXJcIiwgX3RoaXMubWFzdGVyU2VydmVyQWRkcmVzcywgXCIuLi5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNvbm5lY3RPcHRpb25zLnVzZXJBdXRoU2VjcmV0ID0gZGF0YS52YWxzW0xvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuU2VjcmV0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY29ubmVjdChfdGhpcy5jb25uZWN0T3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jaGFuZ2VTdGF0ZShMb2FkQmFsYW5jaW5nQ2xpZW50LlN0YXRlLkVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX29uRXJyb3JJbnRlcm5hbChMb2FkQmFsYW5jaW5nQ2xpZW50LlBlZXJFcnJvckNvZGUuTmFtZVNlcnZlckF1dGhlbnRpY2F0aW9uRmFpbGVkLCBcIk5hbWVTZXJ2ZXIgYXV0aGVudGljYXRpb24gZmFpbGVkOiBcIiArIGRhdGEuZXJyQ29kZSArIFwiIFwiICsgZGF0YS5lcnJNc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvLyBwcm90ZWN0ZWRcclxuICAgICAgICAgICAgTG9hZEJhbGFuY2luZ0NsaWVudC5wcm90b3R5cGUuaW5pdE1hc3RlclBlZXIgPSBmdW5jdGlvbiAobXApIHtcclxuICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICBtcC5zZXRMb2dMZXZlbCh0aGlzLmxvZ2dlci5nZXRMZXZlbCgpKTtcclxuICAgICAgICAgICAgICAgIC8vIGVycm9yc1xyXG4gICAgICAgICAgICAgICAgbXAuYWRkUGVlclN0YXR1c0xpc3RlbmVyKFBob3Rvbi5QaG90b25QZWVyLlN0YXR1c0NvZGVzLmVycm9yLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2hhbmdlU3RhdGUoTG9hZEJhbGFuY2luZ0NsaWVudC5TdGF0ZS5FcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX29uRXJyb3JJbnRlcm5hbChMb2FkQmFsYW5jaW5nQ2xpZW50LlBlZXJFcnJvckNvZGUuTWFzdGVyRXJyb3IsIFwiTWFzdGVyIHBlZXIgZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIG1wLmFkZFBlZXJTdGF0dXNMaXN0ZW5lcihQaG90b24uUGhvdG9uUGVlci5TdGF0dXNDb2Rlcy5jb25uZWN0RmFpbGVkLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2hhbmdlU3RhdGUoTG9hZEJhbGFuY2luZ0NsaWVudC5TdGF0ZS5FcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX29uRXJyb3JJbnRlcm5hbChMb2FkQmFsYW5jaW5nQ2xpZW50LlBlZXJFcnJvckNvZGUuTWFzdGVyQ29ubmVjdEZhaWxlZCwgXCJNYXN0ZXIgcGVlciBjb25uZWN0IGZhaWxlZDogXCIgKyBfdGhpcy5tYXN0ZXJTZXJ2ZXJBZGRyZXNzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbXAuYWRkUGVlclN0YXR1c0xpc3RlbmVyKFBob3Rvbi5QaG90b25QZWVyLlN0YXR1c0NvZGVzLnRpbWVvdXQsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jaGFuZ2VTdGF0ZShMb2FkQmFsYW5jaW5nQ2xpZW50LlN0YXRlLkVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fb25FcnJvckludGVybmFsKExvYWRCYWxhbmNpbmdDbGllbnQuUGVlckVycm9yQ29kZS5NYXN0ZXJUaW1lb3V0LCBcIk1hc3RlciBwZWVyIGVycm9yIHRpbWVvdXRcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIG1wLmFkZFBlZXJTdGF0dXNMaXN0ZW5lcihQaG90b24uUGhvdG9uUGVlci5TdGF0dXNDb2Rlcy5jb25uZWN0aW5nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vIHN0YXR1c1xyXG4gICAgICAgICAgICAgICAgbXAuYWRkUGVlclN0YXR1c0xpc3RlbmVyKFBob3Rvbi5QaG90b25QZWVyLlN0YXR1c0NvZGVzLmNvbm5lY3QsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL1RPRE86IGVuY3J5cHRpb24gcGhhc2VcclxuICAgICAgICAgICAgICAgICAgICBtcC5fbG9nZ2VyLmluZm8oXCJDb25uZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9wID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgTmFtZVNldmVyIGdhdmUgdXMgc2VjcmV0XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmNvbm5lY3RPcHRpb25zLnVzZXJBdXRoU2VjcmV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wLnB1c2goTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5TZWNyZXQsIF90aGlzLmNvbm5lY3RPcHRpb25zLnVzZXJBdXRoU2VjcmV0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXAuc2VuZE9wZXJhdGlvbihMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5PcGVyYXRpb25Db2RlLkF1dGhlbnRpY2F0ZSwgb3ApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtcC5fbG9nZ2VyLmluZm8oXCJBdXRoZW50aWNhdGUgd2l0aCBzZWNyZXQuLi5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcC5wdXNoKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuQXBwbGljYXRpb25JZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wLnB1c2goX3RoaXMuYXBwSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcC5wdXNoKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuQXBwVmVyc2lvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wLnB1c2goX3RoaXMuYXBwVmVyc2lvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy51c2VyQXV0aFR5cGUgIT0gTG9hZEJhbGFuY2luZy5Db25zdGFudHMuQ3VzdG9tQXV0aGVudGljYXRpb25UeXBlLk5vbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wLnB1c2goTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5DbGllbnRBdXRoZW50aWNhdGlvblR5cGUsIFBob3Rvbi5UeXBlRXh0LkJ5dGUoX3RoaXMudXNlckF1dGhUeXBlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcC5wdXNoKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuQ2xpZW50QXV0aGVudGljYXRpb25QYXJhbXMsIF90aGlzLnVzZXJBdXRoUGFyYW1ldGVycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMudXNlckF1dGhEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3AucHVzaChMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5QYXJhbWV0ZXJDb2RlLkNsaWVudEF1dGhlbnRpY2F0aW9uRGF0YSwgX3RoaXMudXNlckF1dGhEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMudXNlcklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcC5wdXNoKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuVXNlcklkLCBfdGhpcy51c2VySWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5jb25uZWN0T3B0aW9ucy5sb2JieVN0YXRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcC5wdXNoKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuTG9iYnlTdGF0cywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbXAuc2VuZE9wZXJhdGlvbihMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5PcGVyYXRpb25Db2RlLkF1dGhlbnRpY2F0ZSwgb3ApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtcC5fbG9nZ2VyLmluZm8oXCJBdXRoZW50aWNhdGUuLi5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBtcC5hZGRQZWVyU3RhdHVzTGlzdGVuZXIoUGhvdG9uLlBob3RvblBlZXIuU3RhdHVzQ29kZXMuZGlzY29ubmVjdCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtcCA9PSBfdGhpcy5tYXN0ZXJQZWVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9jbGVhbnVwTWFzdGVyUGVlckRhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXAuX2xvZ2dlci5pbmZvKFwiRGlzY29ubmVjdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbXAuYWRkUGVlclN0YXR1c0xpc3RlbmVyKFBob3Rvbi5QaG90b25QZWVyLlN0YXR1c0NvZGVzLmNvbm5lY3RDbG9zZWQsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtcC5fbG9nZ2VyLmluZm8oXCJTZXJ2ZXIgY2xvc2VkIGNvbm5lY3Rpb25cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2hhbmdlU3RhdGUoTG9hZEJhbGFuY2luZ0NsaWVudC5TdGF0ZS5FcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX29uRXJyb3JJbnRlcm5hbChMb2FkQmFsYW5jaW5nQ2xpZW50LlBlZXJFcnJvckNvZGUuTWFzdGVyQ29ubmVjdENsb3NlZCwgXCJNYXN0ZXIgc2VydmVyIGNsb3NlZCBjb25uZWN0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvL2V2ZW50c1xyXG4gICAgICAgICAgICAgICAgbXAuYWRkRXZlbnRMaXN0ZW5lcihMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5FdmVudENvZGUuR2FtZUxpc3QsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGdhbWVMaXN0ID0gZGF0YS52YWxzW0xvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuR2FtZUxpc3RdO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNsZWFyUm9vbXMoKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBnIGluIGdhbWVMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gbmV3IFJvb21JbmZvKGcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByLl91cGRhdGVGcm9tUHJvcHMoZ2FtZUxpc3RbZ10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5hZGRSb29tKHIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5vblJvb21MaXN0KF90aGlzLnJvb21JbmZvcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbXAuX2xvZ2dlci5kZWJ1ZyhcImV2IEdhbWVMaXN0XCIsIF90aGlzLnJvb21JbmZvcywgZ2FtZUxpc3QpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBtcC5hZGRFdmVudExpc3RlbmVyKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLkV2ZW50Q29kZS5HYW1lTGlzdFVwZGF0ZSwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtZUxpc3QgPSBkYXRhLnZhbHNbTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5HYW1lTGlzdF07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJvb21zVXBkYXRlZCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByb29tc0FkZGVkID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJvb21zUmVtb3ZlZCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGcgaW4gZ2FtZUxpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4aXN0ID0gX3RoaXMucm9vbUluZm9zLmZpbHRlcihmdW5jdGlvbiAoeCkgeyByZXR1cm4geC5uYW1lID09IGc7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSBleGlzdFswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuX3VwZGF0ZUZyb21Qcm9wcyhnYW1lTGlzdFtnXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoci5yZW1vdmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vbXNSZW1vdmVkLnB1c2gocik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb29tc1VwZGF0ZWQucHVzaChyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByaSA9IG5ldyBSb29tSW5mbyhnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpLl91cGRhdGVGcm9tUHJvcHMoZ2FtZUxpc3RbZ10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWRkUm9vbShyaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb29tc0FkZGVkLnB1c2gocmkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnB1cmdlUmVtb3ZlZFJvb21zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMub25Sb29tTGlzdFVwZGF0ZShfdGhpcy5yb29tSW5mb3MsIHJvb21zVXBkYXRlZCwgcm9vbXNBZGRlZCwgcm9vbXNSZW1vdmVkKTtcclxuICAgICAgICAgICAgICAgICAgICBtcC5fbG9nZ2VyLmRlYnVnKFwiZXYgR2FtZUxpc3RVcGRhdGU6XCIsIF90aGlzLnJvb21JbmZvcywgXCJ1OlwiLCByb29tc1VwZGF0ZWQsIFwiYTpcIiwgcm9vbXNBZGRlZCwgXCJyOlwiLCByb29tc1JlbW92ZWQsIGdhbWVMaXN0KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gcmVzcG9uc2VzIC0gY2hlY2sgb3BlcmF0aW9uIHJlc3VsdDogZGF0YS5lcnJDb2RlXHJcbiAgICAgICAgICAgICAgICBtcC5hZGRSZXNwb25zZUxpc3RlbmVyKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLk9wZXJhdGlvbkNvZGUuQXV0aGVudGljYXRlLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1wLl9sb2dnZXIuZGVidWcoXCJyZXNwIEF1dGhlbnRpY2F0ZVwiLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEuZXJyQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtcC5fbG9nZ2VyLmluZm8oXCJBdXRoZW50aWNhdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVVc2VySWRBbmROaWNrbmFtZShkYXRhLnZhbHMsIG1wLl9sb2dnZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS52YWxzW0xvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuU2VjcmV0XSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNvbm5lY3RPcHRpb25zLnVzZXJBdXRoU2VjcmV0ID0gZGF0YS52YWxzW0xvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuU2VjcmV0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jaGFuZ2VTdGF0ZShMb2FkQmFsYW5jaW5nQ2xpZW50LlN0YXRlLkNvbm5lY3RlZFRvTWFzdGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5jb25uZWN0T3B0aW9ucy5sb2JieU5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wLnB1c2goTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5Mb2JieU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3AucHVzaChfdGhpcy5jb25uZWN0T3B0aW9ucy5sb2JieU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmNvbm5lY3RPcHRpb25zLmxvYmJ5VHlwZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcC5wdXNoKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuTG9iYnlUeXBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcC5wdXNoKF90aGlzLmNvbm5lY3RPcHRpb25zLmxvYmJ5VHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmF1dG9Kb2luTG9iYnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1wLnNlbmRPcGVyYXRpb24oTG9hZEJhbGFuY2luZy5Db25zdGFudHMuT3BlcmF0aW9uQ29kZS5Kb2luTG9iYnksIG9wKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1wLl9sb2dnZXIuaW5mbyhcIkpvaW4gTG9iYnlcIiwgX3RoaXMuY29ubmVjdE9wdGlvbnMubG9iYnlOYW1lLCBfdGhpcy5jb25uZWN0T3B0aW9ucy5sb2JieVR5cGUsIFwiLi4uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jaGFuZ2VTdGF0ZShMb2FkQmFsYW5jaW5nQ2xpZW50LlN0YXRlLkVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX29uRXJyb3JJbnRlcm5hbChMb2FkQmFsYW5jaW5nQ2xpZW50LlBlZXJFcnJvckNvZGUuTWFzdGVyQXV0aGVudGljYXRpb25GYWlsZWQsIFwiTWFzdGVyIGF1dGhlbnRpY2F0aW9uIGZhaWxlZDogXCIgKyBkYXRhLmVyckNvZGUgKyBcIiBcIiArIGRhdGEuZXJyTXNnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIG1wLmFkZFJlc3BvbnNlTGlzdGVuZXIoTG9hZEJhbGFuY2luZy5Db25zdGFudHMuT3BlcmF0aW9uQ29kZS5Kb2luTG9iYnksIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbXAuX2xvZ2dlci5kZWJ1ZyhcInJlc3AgSm9pbkxvYmJ5XCIsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZGF0YS5lcnJDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1wLl9sb2dnZXIuaW5mbyhcIkpvaW5lZCB0byBMb2JieVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2hhbmdlU3RhdGUoTG9hZEJhbGFuY2luZ0NsaWVudC5TdGF0ZS5Kb2luZWRMb2JieSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9vbk9wZXJhdGlvblJlc3BvbnNlSW50ZXJuYWwyKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLk9wZXJhdGlvbkNvZGUuSm9pbkxvYmJ5LCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbXAuYWRkUmVzcG9uc2VMaXN0ZW5lcihMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5PcGVyYXRpb25Db2RlLkNyZWF0ZUdhbWUsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbXAuX2xvZ2dlci5kZWJ1ZyhcInJlc3AgQ3JlYXRlR2FtZVwiLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEuZXJyQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jdXJyZW50Um9vbS5fdXBkYXRlRnJvbU1hc3RlclJlc3BvbnNlKGRhdGEudmFscyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1wLl9sb2dnZXIuZGVidWcoXCJDcmVhdGVkL0pvaW5lZCBcIiArIF90aGlzLmN1cnJlbnRSb29tLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jb25uZWN0VG9HYW1lU2VydmVyKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLk9wZXJhdGlvbkNvZGUuQ3JlYXRlR2FtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9vbk9wZXJhdGlvblJlc3BvbnNlSW50ZXJuYWwyKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLk9wZXJhdGlvbkNvZGUuQ3JlYXRlR2FtZSwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIG1wLmFkZFJlc3BvbnNlTGlzdGVuZXIoTG9hZEJhbGFuY2luZy5Db25zdGFudHMuT3BlcmF0aW9uQ29kZS5Kb2luR2FtZSwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBtcC5fbG9nZ2VyLmRlYnVnKFwicmVzcCBKb2luR2FtZVwiLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEuZXJyQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jdXJyZW50Um9vbS5fdXBkYXRlRnJvbU1hc3RlclJlc3BvbnNlKGRhdGEudmFscyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1wLl9sb2dnZXIuZGVidWcoXCJKb2luZWQgXCIgKyBfdGhpcy5jdXJyZW50Um9vbS5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY29ubmVjdFRvR2FtZVNlcnZlcihMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5PcGVyYXRpb25Db2RlLkpvaW5HYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX29uT3BlcmF0aW9uUmVzcG9uc2VJbnRlcm5hbDIoTG9hZEJhbGFuY2luZy5Db25zdGFudHMuT3BlcmF0aW9uQ29kZS5Kb2luR2FtZSwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIG1wLmFkZFJlc3BvbnNlTGlzdGVuZXIoTG9hZEJhbGFuY2luZy5Db25zdGFudHMuT3BlcmF0aW9uQ29kZS5Kb2luUmFuZG9tR2FtZSwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBtcC5fbG9nZ2VyLmRlYnVnKFwicmVzcCBKb2luUmFuZG9tR2FtZVwiLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEuZXJyQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jdXJyZW50Um9vbS5fdXBkYXRlRnJvbU1hc3RlclJlc3BvbnNlKGRhdGEudmFscyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1wLl9sb2dnZXIuZGVidWcoXCJKb2luZWQgXCIgKyBfdGhpcy5jdXJyZW50Um9vbS5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY29ubmVjdFRvR2FtZVNlcnZlcihMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5PcGVyYXRpb25Db2RlLkpvaW5SYW5kb21HYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX29uT3BlcmF0aW9uUmVzcG9uc2VJbnRlcm5hbDIoTG9hZEJhbGFuY2luZy5Db25zdGFudHMuT3BlcmF0aW9uQ29kZS5Kb2luUmFuZG9tR2FtZSwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIG1wLmFkZFJlc3BvbnNlTGlzdGVuZXIoTG9hZEJhbGFuY2luZy5Db25zdGFudHMuT3BlcmF0aW9uQ29kZS5GaW5kRnJpZW5kcywgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBtcC5fbG9nZ2VyLmRlYnVnKFwicmVzcCBGaW5kRnJpZW5kc1wiLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhLmVyckNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9ubGluZXMgPSBkYXRhLnZhbHNbTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5GaW5kRnJpZW5kc1Jlc3BvbnNlT25saW5lTGlzdF0gfHwge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByb29tSWRzID0gZGF0YS52YWxzW0xvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuRmluZEZyaWVuZHNSZXNwb25zZVJvb21JZExpc3RdIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF90aGlzLmZpbmRGcmllbmRzUmVxdWVzdExpc3QubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuYW1lID0gX3RoaXMuZmluZEZyaWVuZHNSZXF1ZXN0TGlzdFtpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzW25hbWVdID0geyBvbmxpbmU6IG9ubGluZXNbaV0sIHJvb21JZDogcm9vbUlkc1tpXSB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtcC5fbG9nZ2VyLmVycm9yKFwiRmluZEZyaWVuZHMgcmVxdWVzdCBlcnJvcjpcIiwgZGF0YS5lcnJDb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMub25GaW5kRnJpZW5kc1Jlc3VsdChkYXRhLmVyckNvZGUsIGRhdGEuZXJyTXNnLCByZXMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBtcC5hZGRSZXNwb25zZUxpc3RlbmVyKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLk9wZXJhdGlvbkNvZGUuTG9iYnlTdGF0cywgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBtcC5fbG9nZ2VyLmRlYnVnKFwicmVzcCBMb2JieVN0YXRzXCIsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEuZXJyQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZXMgPSBkYXRhLnZhbHNbTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5Mb2JieU5hbWVdOyAvLyBub3QgaW5pdGVkIGludGVudGlvbmFsbHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHR5cGVzID0gZGF0YS52YWxzW0xvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuTG9iYnlUeXBlXSB8fCB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBlZXJzID0gZGF0YS52YWxzW0xvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuUGVlckNvdW50XSB8fCB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGdhbWVzID0gZGF0YS52YWxzW0xvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuR2FtZUNvdW50XSB8fCB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzW2ldID0geyBsb2JieU5hbWU6IG5hbWVzW2ldLCBsb2JieVR5cGU6IHR5cGVzW2ldLCBwZWVyQ291bnQ6IHBlZXJzW2ldLCBnYW1lQ291bnQ6IGdhbWVzW2ldIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF90aGlzLmxvYmJ5U3RhdHNSZXF1ZXN0TGlzdC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsID0gX3RoaXMubG9iYnlTdGF0c1JlcXVlc3RMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc1tpXSA9IHsgbG9iYnlOYW1lOiBsWzBdLCBsb2JieVR5cGU6IGxbMV0sIHBlZXJDb3VudDogcGVlcnNbaV0sIGdhbWVDb3VudDogZ2FtZXNbaV0gfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXAuX2xvZ2dlci5lcnJvcihcIkxvYmJ5U3RhdHMgcmVxdWVzdCBlcnJvcjpcIiwgZGF0YS5lcnJDb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMub25Mb2JieVN0YXRzKGRhdGEuZXJyQ29kZSwgZGF0YS5lcnJNc2csIHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIG1wLmFkZEV2ZW50TGlzdGVuZXIoTG9hZEJhbGFuY2luZy5Db25zdGFudHMuRXZlbnRDb2RlLkxvYmJ5U3RhdHMsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbXAuX2xvZ2dlci5kZWJ1ZyhcImV2IExvYmJ5U3RhdHNcIiwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuYW1lcyA9IGRhdGEudmFsc1tMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5QYXJhbWV0ZXJDb2RlLkxvYmJ5TmFtZV07IC8vIG5vdCBpbml0ZWQgaW50ZW50aW9uYWxseVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0eXBlcyA9IGRhdGEudmFsc1tMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5QYXJhbWV0ZXJDb2RlLkxvYmJ5VHlwZV0gfHwge307XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBlZXJzID0gZGF0YS52YWxzW0xvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuUGVlckNvdW50XSB8fCB7fTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtZXMgPSBkYXRhLnZhbHNbTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5HYW1lQ291bnRdIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuYW1lcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNbaV0gPSB7IGxvYmJ5TmFtZTogbmFtZXNbaV0sIGxvYmJ5VHlwZTogdHlwZXNbaV0sIHBlZXJDb3VudDogcGVlcnNbaV0sIGdhbWVDb3VudDogZ2FtZXNbaV0gfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5vbkxvYmJ5U3RhdHMoMCwgXCJcIiwgcmVzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbXAuYWRkRXZlbnRMaXN0ZW5lcihMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5FdmVudENvZGUuQXBwU3RhdHMsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbXAuX2xvZ2dlci5kZWJ1ZyhcImV2IEFwcFN0YXRzXCIsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlZXJDb3VudDogZGF0YS52YWxzW0xvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuUGVlckNvdW50XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzdGVyUGVlckNvdW50OiBkYXRhLnZhbHNbTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5NYXN0ZXJQZWVyQ291bnRdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lQ291bnQ6IGRhdGEudmFsc1tMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5QYXJhbWV0ZXJDb2RlLkdhbWVDb3VudF1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm9uQXBwU3RhdHMoMCwgXCJcIiwgcmVzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbXAuYWRkUmVzcG9uc2VMaXN0ZW5lcihMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5PcGVyYXRpb25Db2RlLlJwYywgbXAud2ViUnBjSGFuZGxlcih0aGlzKSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIExvYWRCYWxhbmNpbmdDbGllbnQucHJvdG90eXBlLmNvbm5lY3RUb0dhbWVTZXJ2ZXIgPSBmdW5jdGlvbiAobWFzdGVyT3BDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY29ubmVjdE9wdGlvbnMua2VlcE1hc3RlckNvbm5lY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hc3RlclBlZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tOZXh0U3RhdGUoTG9hZEJhbGFuY2luZ0NsaWVudC5TdGF0ZS5Db25uZWN0aW5nVG9HYW1lc2VydmVyLCB0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJDb25uZWN0aW5nIHRvIEdhbWVcIiwgdGhpcy5jdXJyZW50Um9vbS5hZGRyZXNzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lUGVlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lUGVlci5EZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lUGVlciA9IG5ldyBHYW1lUGVlcih0aGlzLCB0aGlzLmNvbm5lY3Rpb25Qcm90b2NvbCwgdGhpcy5jdXJyZW50Um9vbS5hZGRyZXNzLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVQZWVyV2FpdGluZ0ZvckRpc2Nvbm5lY3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRHYW1lUGVlcih0aGlzLmdhbWVQZWVyLCBtYXN0ZXJPcENvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBlZXIuY29ubmVjdCh0aGlzLmFwcElkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKExvYWRCYWxhbmNpbmdDbGllbnQuU3RhdGUuQ29ubmVjdGluZ1RvR2FtZXNlcnZlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIExvYWRCYWxhbmNpbmdDbGllbnQucHJvdG90eXBlLmluaXRHYW1lUGVlciA9IGZ1bmN0aW9uIChncCwgbWFzdGVyT3BDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgZ3Auc2V0TG9nTGV2ZWwodGhpcy5sb2dnZXIuZ2V0TGV2ZWwoKSk7XHJcbiAgICAgICAgICAgICAgICAvLyBlcnJvcnNcclxuICAgICAgICAgICAgICAgIGdwLmFkZFBlZXJTdGF0dXNMaXN0ZW5lcihQaG90b24uUGhvdG9uUGVlci5TdGF0dXNDb2Rlcy5lcnJvciwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNoYW5nZVN0YXRlKExvYWRCYWxhbmNpbmdDbGllbnQuU3RhdGUuRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9vbkVycm9ySW50ZXJuYWwoTG9hZEJhbGFuY2luZ0NsaWVudC5QZWVyRXJyb3JDb2RlLkdhbWVFcnJvciwgXCJHYW1lIHBlZXIgZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGdwLmFkZFBlZXJTdGF0dXNMaXN0ZW5lcihQaG90b24uUGhvdG9uUGVlci5TdGF0dXNDb2Rlcy5jb25uZWN0RmFpbGVkLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2hhbmdlU3RhdGUoTG9hZEJhbGFuY2luZ0NsaWVudC5TdGF0ZS5FcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX29uRXJyb3JJbnRlcm5hbChMb2FkQmFsYW5jaW5nQ2xpZW50LlBlZXJFcnJvckNvZGUuR2FtZUNvbm5lY3RGYWlsZWQsIFwiR2FtZSBwZWVyIGNvbm5lY3QgZmFpbGVkOiBcIiArIF90aGlzLmN1cnJlbnRSb29tLmFkZHJlc3MpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBncC5hZGRQZWVyU3RhdHVzTGlzdGVuZXIoUGhvdG9uLlBob3RvblBlZXIuU3RhdHVzQ29kZXMudGltZW91dCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNoYW5nZVN0YXRlKExvYWRCYWxhbmNpbmdDbGllbnQuU3RhdGUuRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9vbkVycm9ySW50ZXJuYWwoTG9hZEJhbGFuY2luZ0NsaWVudC5QZWVyRXJyb3JDb2RlLkdhbWVUaW1lb3V0LCBcIkdhbWUgcGVlciB0aW1lb3V0XCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyBzdGF0dXNcclxuICAgICAgICAgICAgICAgIGdwLmFkZFBlZXJTdGF0dXNMaXN0ZW5lcihQaG90b24uUGhvdG9uUGVlci5TdGF0dXNDb2Rlcy5jb25uZWN0LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3AuX2xvZ2dlci5pbmZvKFwiQ29ubmVjdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vVE9ETzogZW5jcnlwdGlvbiBwaGFzZVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvcCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wLnB1c2goTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5BcHBsaWNhdGlvbklkKTtcclxuICAgICAgICAgICAgICAgICAgICBvcC5wdXNoKF90aGlzLmFwcElkKTtcclxuICAgICAgICAgICAgICAgICAgICBvcC5wdXNoKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuQXBwVmVyc2lvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgb3AucHVzaChfdGhpcy5hcHBWZXJzaW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuY29ubmVjdE9wdGlvbnMudXNlckF1dGhTZWNyZXQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wLnB1c2goTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5TZWNyZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcC5wdXNoKF90aGlzLmNvbm5lY3RPcHRpb25zLnVzZXJBdXRoU2VjcmV0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLnVzZXJBdXRoVHlwZSAhPSBMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5DdXN0b21BdXRoZW50aWNhdGlvblR5cGUuTm9uZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcC5wdXNoKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuQ2xpZW50QXV0aGVudGljYXRpb25UeXBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3AucHVzaChQaG90b24uVHlwZUV4dC5CeXRlKF90aGlzLnVzZXJBdXRoVHlwZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMudXNlcklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wLnB1c2goTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5Vc2VySWQsIF90aGlzLnVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGdwLnNlbmRPcGVyYXRpb24oTG9hZEJhbGFuY2luZy5Db25zdGFudHMuT3BlcmF0aW9uQ29kZS5BdXRoZW50aWNhdGUsIG9wKTtcclxuICAgICAgICAgICAgICAgICAgICBncC5fbG9nZ2VyLmluZm8oXCJBdXRoZW50aWNhdGUuLi5cIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGdwLmFkZFBlZXJTdGF0dXNMaXN0ZW5lcihQaG90b24uUGhvdG9uUGVlci5TdGF0dXNDb2Rlcy5kaXNjb25uZWN0LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdwID09IF90aGlzLmdhbWVQZWVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9jbGVhbnVwR2FtZVBlZXJEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdwLl9sb2dnZXIuaW5mbyhcIkRpc2Nvbm5lY3RlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGdwLmFkZFBlZXJTdGF0dXNMaXN0ZW5lcihQaG90b24uUGhvdG9uUGVlci5TdGF0dXNDb2Rlcy5jb25uZWN0Q2xvc2VkLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3AuX2xvZ2dlci5pbmZvKFwiU2VydmVyIGNsb3NlZCBjb25uZWN0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghX3RoaXMuZ2FtZVBlZXJXYWl0aW5nRm9yRGlzY29ubmVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jaGFuZ2VTdGF0ZShMb2FkQmFsYW5jaW5nQ2xpZW50LlN0YXRlLkVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX29uRXJyb3JJbnRlcm5hbChMb2FkQmFsYW5jaW5nQ2xpZW50LlBlZXJFcnJvckNvZGUuTWFzdGVyQ29ubmVjdENsb3NlZCwgXCJHYW1lIHNlcnZlciBjbG9zZWQgY29ubmVjdGlvblwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vIHJlc3BvbnNlc1xyXG4gICAgICAgICAgICAgICAgZ3AuYWRkUmVzcG9uc2VMaXN0ZW5lcihMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5PcGVyYXRpb25Db2RlLkF1dGhlbnRpY2F0ZSwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBncC5fbG9nZ2VyLmRlYnVnKFwicmVzcCBBdXRoZW50aWNhdGVcIiwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhLmVyckNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3AuX2xvZ2dlci5pbmZvKFwiQXV0aGVudGljYXRlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3AuX2xvZ2dlci5pbmZvKFwiQ29ubmVjdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFzdGVyT3BDb2RlID09IExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLk9wZXJhdGlvbkNvZGUuQ3JlYXRlR2FtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY3JlYXRlUm9vbUludGVybmFsKGdwLCBfdGhpcy5jcmVhdGVSb29tT3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3AgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wLnB1c2goTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5Sb29tTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcC5wdXNoKF90aGlzLmN1cnJlbnRSb29tLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3AucHVzaChMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5QYXJhbWV0ZXJDb2RlLkJyb2FkY2FzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcC5wdXNoKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3AucHVzaChMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5QYXJhbWV0ZXJDb2RlLlBsYXllclByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3AucHVzaChfdGhpcy5fbXlBY3Rvci5fZ2V0QWxsUHJvcGVydGllcygpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXN0ZXJPcENvZGUgPT0gTG9hZEJhbGFuY2luZy5Db25zdGFudHMuT3BlcmF0aW9uQ29kZS5Kb2luR2FtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5qb2luUm9vbU9wdGlvbnMuY3JlYXRlSWZOb3RFeGlzdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3AucHVzaChMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5QYXJhbWV0ZXJDb2RlLkpvaW5Nb2RlLCBMb2FkQmFsYW5jaW5nQ2xpZW50LkpvaW5Nb2RlLkNyZWF0ZUlmTm90RXhpc3RzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZmlsbENyZWF0ZVJvb21PcHRpb25zKG9wLCBfdGhpcy5jcmVhdGVSb29tT3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5qb2luUm9vbU9wdGlvbnMucmVqb2luKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wLnB1c2goTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5Kb2luTW9kZSwgTG9hZEJhbGFuY2luZ0NsaWVudC5Kb2luTW9kZS5SZWpvaW5Pbmx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncC5zZW5kT3BlcmF0aW9uKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLk9wZXJhdGlvbkNvZGUuSm9pbkdhbWUsIG9wKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jaGFuZ2VTdGF0ZShMb2FkQmFsYW5jaW5nQ2xpZW50LlN0YXRlLkNvbm5lY3RlZFRvR2FtZXNlcnZlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jaGFuZ2VTdGF0ZShMb2FkQmFsYW5jaW5nQ2xpZW50LlN0YXRlLkVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX29uRXJyb3JJbnRlcm5hbChMb2FkQmFsYW5jaW5nQ2xpZW50LlBlZXJFcnJvckNvZGUuR2FtZUF1dGhlbnRpY2F0aW9uRmFpbGVkLCBcIkdhbWUgYXV0aGVudGljYXRpb24gZmFpbGVkOiBcIiArIGRhdGEuZXJyQ29kZSArIFwiIFwiICsgZGF0YS5lcnJNc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgZ3AuYWRkUmVzcG9uc2VMaXN0ZW5lcihMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5PcGVyYXRpb25Db2RlLkNyZWF0ZUdhbWUsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3AuX2xvZ2dlci5kZWJ1ZyhcInJlc3AgQ3JlYXRlR2FtZVwiLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEuZXJyQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fbXlBY3Rvci5fdXBkYXRlTXlBY3RvckZyb21SZXNwb25zZShkYXRhLnZhbHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncC5fbG9nZ2VyLmluZm8oXCJteUFjdG9yOiBcIiwgX3RoaXMuX215QWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jdXJyZW50Um9vbS5fdXBkYXRlRnJvbVByb3BzKGRhdGEudmFsc1tMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5QYXJhbWV0ZXJDb2RlLkdhbWVQcm9wZXJ0aWVzXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNsZWFyQWN0b3JzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmFkZEFjdG9yKF90aGlzLl9teUFjdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2hhbmdlU3RhdGUoTG9hZEJhbGFuY2luZ0NsaWVudC5TdGF0ZS5Kb2luZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5vbkpvaW5Sb29tKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fb25PcGVyYXRpb25SZXNwb25zZUludGVybmFsMihMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5PcGVyYXRpb25Db2RlLkNyZWF0ZUdhbWUsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBncC5hZGRSZXNwb25zZUxpc3RlbmVyKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLk9wZXJhdGlvbkNvZGUuSm9pbkdhbWUsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3AuX2xvZ2dlci5kZWJ1ZyhcInJlc3AgSm9pbkdhbWVcIiwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhLmVyckNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX215QWN0b3IuX3VwZGF0ZU15QWN0b3JGcm9tUmVzcG9uc2UoZGF0YS52YWxzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3AuX2xvZ2dlci5pbmZvKFwibXlBY3RvcjogXCIsIF90aGlzLl9teUFjdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2xlYXJBY3RvcnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWRkQWN0b3IoX3RoaXMuX215QWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWN0b3JMaXN0ID0gZGF0YS52YWxzW0xvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuQWN0b3JMaXN0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFjdG9yUHJvcHMgPSBkYXRhLnZhbHNbTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5QbGF5ZXJQcm9wZXJ0aWVzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjdG9yTGlzdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFjdG9yTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhY3Rvck5yID0gYWN0b3JMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9wcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWN0b3JQcm9wcyAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcyA9IGFjdG9yUHJvcHNbYWN0b3JOcl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IHByb3BzW0xvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLkFjdG9yUHJvcGVydGllcy5QbGF5ZXJOYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjdG9yTnIgPT0gX3RoaXMuX215QWN0b3IuYWN0b3JOcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSA9IF90aGlzLl9teUFjdG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhID0gX3RoaXMuYWN0b3JGYWN0b3J5SW50ZXJuYWwobmFtZSwgYWN0b3JOcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmFkZEFjdG9yKGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLl91cGRhdGVDdXN0b21Qcm9wZXJ0aWVzKHByb3BzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY3VycmVudFJvb20uX3VwZGF0ZUZyb21Qcm9wcyhkYXRhLnZhbHNbTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5HYW1lUHJvcGVydGllc10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jaGFuZ2VTdGF0ZShMb2FkQmFsYW5jaW5nQ2xpZW50LlN0YXRlLkpvaW5lZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLm9uSm9pblJvb20oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fb25PcGVyYXRpb25SZXNwb25zZUludGVybmFsMihMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5PcGVyYXRpb25Db2RlLkpvaW5HYW1lLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgZ3AuYWRkUmVzcG9uc2VMaXN0ZW5lcihMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5PcGVyYXRpb25Db2RlLlNldFByb3BlcnRpZXMsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3AuX2xvZ2dlci5kZWJ1ZyhcInJlc3AgU2V0UHJvcGVydGllc1wiLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fb25PcGVyYXRpb25SZXNwb25zZUludGVybmFsMihMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5PcGVyYXRpb25Db2RlLlNldFByb3BlcnRpZXMsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBncC5hZGRSZXNwb25zZUxpc3RlbmVyKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLk9wZXJhdGlvbkNvZGUuTGVhdmUsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3AuX2xvZ2dlci5kZWJ1ZyhcInJlc3AgTGVhdmVcIiwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3AuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9vbk9wZXJhdGlvblJlc3BvbnNlSW50ZXJuYWwyKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLk9wZXJhdGlvbkNvZGUuTGVhdmUsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBncC5hZGRSZXNwb25zZUxpc3RlbmVyKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLk9wZXJhdGlvbkNvZGUuUnBjLCBncC53ZWJScGNIYW5kbGVyKHRoaXMpKTtcclxuICAgICAgICAgICAgICAgIC8vIGV2ZW50c1xyXG4gICAgICAgICAgICAgICAgZ3AuYWRkRXZlbnRMaXN0ZW5lcihMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5FdmVudENvZGUuSm9pbiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBncC5fbG9nZ2VyLmRlYnVnKFwiZXYgSm9pblwiLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoQWN0b3IuX2dldEFjdG9yTnJGcm9tUmVzcG9uc2UoZGF0YS52YWxzKSA9PT0gX3RoaXMuX215QWN0b3IuYWN0b3JOcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMuX215QWN0b3IuX3VwZGF0ZU15QWN0b3JGcm9tUmVzcG9uc2UoZGF0YS52YWxzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX215QWN0b3IuX3VwZGF0ZUZyb21SZXNwb25zZShkYXRhLnZhbHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRBY3Rvcih0aGlzLl9teUFjdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMub25BY3RvckpvaW4oX3RoaXMuX215QWN0b3IpOyAvLyBsZXQgY2xpZW50IHJlYWQgdXBkYXRlZCBwcm9wZXJ0aWVzXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWN0b3IgPSBfdGhpcy5hY3RvckZhY3RvcnlJbnRlcm5hbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rvci5fdXBkYXRlRnJvbVJlc3BvbnNlKGRhdGEudmFscyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmFkZEFjdG9yKGFjdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMub25BY3RvckpvaW4oYWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgZ3AuYWRkRXZlbnRMaXN0ZW5lcihMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5FdmVudENvZGUuTGVhdmUsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3AuX2xvZ2dlci5kZWJ1ZyhcImV2IExlYXZlXCIsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm15Um9vbSgpLl91cGRhdGVGcm9tRXZlbnQoZGF0YS52YWxzKTsgLy8gdXBkYXRpbmcgbWFzdGVyQ2xpZW50SWRcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYWN0b3JOciA9IEFjdG9yLl9nZXRBY3Rvck5yRnJvbVJlc3BvbnNlKGRhdGEudmFscyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdG9yTnIgJiYgX3RoaXMuYWN0b3JzW2FjdG9yTnJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhID0gX3RoaXMuYWN0b3JzW2FjdG9yTnJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS52YWxzW0xvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuSXNJbmFjdGl2ZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuX3NldFN1c3BlbmRlZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLm9uQWN0b3JTdXNwZW5kKGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVtb3ZlQWN0b3IoYWN0b3JOcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5vbkFjdG9yTGVhdmUoYSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBncC5hZGRFdmVudExpc3RlbmVyKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLkV2ZW50Q29kZS5EaXNjb25uZWN0LCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdwLl9sb2dnZXIuZGVidWcoXCJldiBEaXNjb25uZWN0XCIsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhY3Rvck5yID0gQWN0b3IuX2dldEFjdG9yTnJGcm9tUmVzcG9uc2UoZGF0YS52YWxzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWN0b3JOciAmJiBfdGhpcy5hY3RvcnNbYWN0b3JOcl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBfdGhpcy5hY3RvcnNbYWN0b3JOcl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuX3NldFN1c3BlbmRlZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMub25BY3RvclN1c3BlbmQoYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBncC5hZGRFdmVudExpc3RlbmVyKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLkV2ZW50Q29kZS5Qcm9wZXJ0aWVzQ2hhbmdlZCwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBncC5fbG9nZ2VyLmRlYnVnKFwiZXYgUHJvcGVydGllc0NoYW5nZWRcIiwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldEFjdG9yTnIgPSBkYXRhLnZhbHNbTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5UYXJnZXRBY3Rvck5yXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0QWN0b3JOciAhPT0gdW5kZWZpbmVkICYmIHRhcmdldEFjdG9yTnIgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5hY3RvcnNbdGFyZ2V0QWN0b3JOcl0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFjdG9yID0gX3RoaXMuYWN0b3JzW3RhcmdldEFjdG9yTnJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0b3IuX3VwZGF0ZUN1c3RvbVByb3BlcnRpZXMoZGF0YS52YWxzW0xvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuUHJvcGVydGllc10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMub25BY3RvclByb3BlcnRpZXNDaGFuZ2UoYWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jdXJyZW50Um9vbS5fdXBkYXRlRnJvbVByb3BzKGRhdGEudmFsc1tMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5QYXJhbWV0ZXJDb2RlLlByb3BlcnRpZXNdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMub25NeVJvb21Qcm9wZXJ0aWVzQ2hhbmdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIExvYWRCYWxhbmNpbmdDbGllbnQucHJvdG90eXBlLl9jbGVhbnVwTmFtZVNlcnZlclBlZXJEYXRhID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBMb2FkQmFsYW5jaW5nQ2xpZW50LnByb3RvdHlwZS5fY2xlYW51cE1hc3RlclBlZXJEYXRhID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBMb2FkQmFsYW5jaW5nQ2xpZW50LnByb3RvdHlwZS5fY2xlYW51cEdhbWVQZWVyRGF0YSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5hY3RvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQWN0b3JMZWF2ZSh0aGlzLmFjdG9yc1tpXSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyQWN0b3JzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEFjdG9yKHRoaXMuX215QWN0b3IpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBMb2FkQmFsYW5jaW5nQ2xpZW50LnByb3RvdHlwZS5fb25PcGVyYXRpb25SZXNwb25zZUludGVybmFsMiA9IGZ1bmN0aW9uIChjb2RlLCBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5lcnJDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIud2FybihcIk9wZXJhdGlvblwiLCBjb2RlLCBcImVycm9yOlwiLCBkYXRhLmVyck1zZywgXCIoXCIgKyBkYXRhLmVyckNvZGUgKyBcIilcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uT3BlcmF0aW9uUmVzcG9uc2UoZGF0YS5lcnJDb2RlLCBkYXRhLmVyck1zZywgY29kZSwgZGF0YS52YWxzKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgTG9hZEJhbGFuY2luZ0NsaWVudC5wcm90b3R5cGUuX29uRXJyb3JJbnRlcm5hbCA9IGZ1bmN0aW9uIChlcnJvckNvZGUsIGVycm9yTXNnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihcIkVycm9yOlwiLCBlcnJvckNvZGUsIGVycm9yTXNnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25FcnJvcihlcnJvckNvZGUsIGVycm9yTXNnKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLy9UT0RPOiB1Z2x5IHdheSB0byBpbml0IGNvbnN0IHRhYmxlXHJcbiAgICAgICAgICAgIExvYWRCYWxhbmNpbmdDbGllbnQucHJvdG90eXBlLmluaXRWYWxpZE5leHRTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWROZXh0U3RhdGVbTG9hZEJhbGFuY2luZ0NsaWVudC5TdGF0ZS5FcnJvcl0gPSBbTG9hZEJhbGFuY2luZ0NsaWVudC5TdGF0ZS5Db25uZWN0aW5nVG9NYXN0ZXJzZXJ2ZXIsIExvYWRCYWxhbmNpbmdDbGllbnQuU3RhdGUuQ29ubmVjdGluZ1RvTmFtZVNlcnZlcl07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkTmV4dFN0YXRlW0xvYWRCYWxhbmNpbmdDbGllbnQuU3RhdGUuVW5pbml0aWFsaXplZF0gPSBbTG9hZEJhbGFuY2luZ0NsaWVudC5TdGF0ZS5Db25uZWN0aW5nVG9NYXN0ZXJzZXJ2ZXIsIExvYWRCYWxhbmNpbmdDbGllbnQuU3RhdGUuQ29ubmVjdGluZ1RvTmFtZVNlcnZlcl07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkTmV4dFN0YXRlW0xvYWRCYWxhbmNpbmdDbGllbnQuU3RhdGUuQ29ubmVjdGVkVG9OYW1lU2VydmVyXSA9IFtMb2FkQmFsYW5jaW5nQ2xpZW50LlN0YXRlLkNvbm5lY3RpbmdUb01hc3RlcnNlcnZlcl07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkTmV4dFN0YXRlW0xvYWRCYWxhbmNpbmdDbGllbnQuU3RhdGUuRGlzY29ubmVjdGVkXSA9IFtMb2FkQmFsYW5jaW5nQ2xpZW50LlN0YXRlLkNvbm5lY3RpbmdUb01hc3RlcnNlcnZlciwgTG9hZEJhbGFuY2luZ0NsaWVudC5TdGF0ZS5Db25uZWN0aW5nVG9OYW1lU2VydmVyXTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWROZXh0U3RhdGVbTG9hZEJhbGFuY2luZ0NsaWVudC5TdGF0ZS5Db25uZWN0ZWRUb01hc3Rlcl0gPSBbTG9hZEJhbGFuY2luZ0NsaWVudC5TdGF0ZS5Kb2luZWRMb2JieV07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkTmV4dFN0YXRlW0xvYWRCYWxhbmNpbmdDbGllbnQuU3RhdGUuSm9pbmVkTG9iYnldID0gW0xvYWRCYWxhbmNpbmdDbGllbnQuU3RhdGUuQ29ubmVjdGluZ1RvR2FtZXNlcnZlcl07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkTmV4dFN0YXRlW0xvYWRCYWxhbmNpbmdDbGllbnQuU3RhdGUuQ29ubmVjdGluZ1RvR2FtZXNlcnZlcl0gPSBbTG9hZEJhbGFuY2luZ0NsaWVudC5TdGF0ZS5Db25uZWN0ZWRUb0dhbWVzZXJ2ZXJdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZE5leHRTdGF0ZVtMb2FkQmFsYW5jaW5nQ2xpZW50LlN0YXRlLkNvbm5lY3RlZFRvR2FtZXNlcnZlcl0gPSBbTG9hZEJhbGFuY2luZ0NsaWVudC5TdGF0ZS5Kb2luZWRdO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBMb2FkQmFsYW5jaW5nQ2xpZW50LnByb3RvdHlwZS5jaGVja05leHRTdGF0ZSA9IGZ1bmN0aW9uIChuZXh0U3RhdGUsIGRvbnRUaHJvdykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRvbnRUaHJvdyA9PT0gdm9pZCAwKSB7IGRvbnRUaHJvdyA9IGZhbHNlOyB9XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsaWQgPSB0aGlzLnZhbGlkTmV4dFN0YXRlW3RoaXMuc3RhdGVdO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlcyA9IHZhbGlkICYmIHZhbGlkLmluZGV4T2YobmV4dFN0YXRlKSA+PSAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZG9udFRocm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiTG9hZEJhbGFuY2luZ1BlZXIgY2hlY2tOZXh0U3RhdGUgZmFpbDogXCIgKyBMb2FkQmFsYW5jaW5nQ2xpZW50LlN0YXRlVG9OYW1lKHRoaXMuc3RhdGUpICsgXCIgLT4gXCIgKyBMb2FkQmFsYW5jaW5nQ2xpZW50LlN0YXRlVG9OYW1lKG5leHRTdGF0ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXhjZXB0aW9uKDUwMSwgXCJMb2FkQmFsYW5jaW5nUGVlciBjaGVja05leHRTdGF0ZSBmYWlsOiBcIiArIExvYWRCYWxhbmNpbmdDbGllbnQuU3RhdGVUb05hbWUodGhpcy5zdGF0ZSkgKyBcIiAtPiBcIiArIExvYWRCYWxhbmNpbmdDbGllbnQuU3RhdGVUb05hbWUobmV4dFN0YXRlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAc3VtbWFyeSBDb252ZXJ0cyB7QGxpbmsgUGhvdG9uLkxvYWRCYWxhbmNpbmcuTG9hZEJhbGFuY2luZ0NsaWVudC5TdGF0ZSBTdGF0ZX0gZWxlbWVudCB0byBzdHJpbmcgbmFtZS5cclxuICAgICAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLkxvYWRCYWxhbmNpbmcuTG9hZEJhbGFuY2luZ0NsaWVudC5TdGF0ZVRvTmFtZVxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtQaG90b24uTG9hZEJhbGFuY2luZy5Mb2FkQmFsYW5jaW5nQ2xpZW50LlN0YXRlfSBzdGF0ZSBDbGllbnQgc3RhdGUgZW51bSBlbGVtZW50LlxyXG4gICAgICAgICAgICAgICAgQHJldHVybnMge3N0cmluZ30gU3BlY2lmaWVkIGVsZW1lbnQgbmFtZSBvciB1bmRlZmluZWQgaWYgbm90IGZvdW5kLlxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBMb2FkQmFsYW5jaW5nQ2xpZW50LlN0YXRlVG9OYW1lID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBFeGl0Z2FtZXMuQ29tbW9uLlV0aWwuZ2V0RW51bUtleUJ5VmFsdWUoTG9hZEJhbGFuY2luZ0NsaWVudC5TdGF0ZSwgdmFsdWUpOyB9O1xyXG4gICAgICAgICAgICBMb2FkQmFsYW5jaW5nQ2xpZW50LkpvaW5Nb2RlID0ge1xyXG4gICAgICAgICAgICAgICAgRGVmYXVsdDogMCxcclxuICAgICAgICAgICAgICAgIENyZWF0ZUlmTm90RXhpc3RzOiAxLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICBKb2luT3Jlam9pbjogMixcclxuICAgICAgICAgICAgICAgIFJlam9pbk9ubHk6IDNcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLy8gdHNjIGxvb3NlcyBhbGwgY29tbWVudHMgYWZ0ZXIgZmlyc3Qgc3RhdGljIG1lbWJlciBcclxuICAgICAgICAgICAgLy8ganNkb2MgcmVhZHMgY29tbWVudHMgZnJvbSBhbnkgcGxhY2Ugd2l0aGluIGNsYXNzIChhbmQgbWF5IGJlIGZyb20gYW55IHBsYWNlIGluIGZpbGUpXHJcbiAgICAgICAgICAgIExvYWRCYWxhbmNpbmdDbGllbnQuUGVlckVycm9yQ29kZSA9IHtcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgIEBzdW1tYXJ5IEVudW0gZm9yIGNsaWVudCBwZWVycyBlcnJvciBjb2Rlcy5cclxuICAgICAgICAgICAgICAgICAgICBAbWVtYmVyIFBob3Rvbi5Mb2FkQmFsYW5jaW5nLkxvYWRCYWxhbmNpbmdDbGllbnQuUGVlckVycm9yQ29kZVxyXG4gICAgICAgICAgICAgICAgICAgIEByZWFkb25seVxyXG4gICAgICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBPayBObyBFcnJvci5cclxuICAgICAgICAgICAgICAgICAgICBAcHJvcGVydHkge251bWJlcn0gTWFzdGVyRXJyb3IgR2VuZXJhbCBNYXN0ZXIgc2VydmVyIHBlZXIgZXJyb3IuXHJcbiAgICAgICAgICAgICAgICAgICAgQHByb3BlcnR5IHtudW1iZXJ9IE1hc3RlckNvbm5lY3RGYWlsZWQgTWFzdGVyIHNlcnZlciBjb25uZWN0aW9uIGVycm9yLlxyXG4gICAgICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBNYXN0ZXJDb25uZWN0Q2xvc2VkIERpc2Nvbm5lY3RlZCBmcm9tIE1hc3RlciBzZXJ2ZXIuXHJcbiAgICAgICAgICAgICAgICAgICAgQHByb3BlcnR5IHtudW1iZXJ9IE1hc3RlclRpbWVvdXQgRGlzY29ubmVjdGVkIGZyb20gTWFzdGVyIHNlcnZlciBmb3IgdGltZW91dC5cclxuICAgICAgICAgICAgICAgICAgICBAcHJvcGVydHkge251bWJlcn0gTWFzdGVyRW5jcnlwdGlvbkVzdGFibGlzaEVycm9yIE1hc3RlciBzZXJ2ZXIgZW5jcnlwdGlvbiBlc3RhYmxpc2hpbmcgZmFpbGVkLlxyXG4gICAgICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBNYXN0ZXJBdXRoZW50aWNhdGlvbkZhaWxlZCBNYXN0ZXIgc2VydmVyIGF1dGhlbnRpY2F0aW9uIGZhaWxlZC5cclxuICAgICAgICAgICAgICAgICAgICBAcHJvcGVydHkge251bWJlcn0gR2FtZUVycm9yIEdlbmVyYWwgR2FtZSBzZXJ2ZXIgcGVlciBlcnJvci5cclxuICAgICAgICAgICAgICAgICAgICBAcHJvcGVydHkge251bWJlcn0gR2FtZUNvbm5lY3RGYWlsZWQgR2FtZSBzZXJ2ZXIgY29ubmVjdGlvbiBlcnJvci5cclxuICAgICAgICAgICAgICAgICAgICBAcHJvcGVydHkge251bWJlcn0gR2FtZUNvbm5lY3RDbG9zZWQgRGlzY29ubmVjdGVkIGZyb20gR2FtZSBzZXJ2ZXIuXHJcbiAgICAgICAgICAgICAgICAgICAgQHByb3BlcnR5IHtudW1iZXJ9IEdhbWVUaW1lb3V0IERpc2Nvbm5lY3RlZCBmcm9tIEdhbWUgc2VydmVyIGZvciB0aW1lb3V0LlxyXG4gICAgICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBHYW1lRW5jcnlwdGlvbkVzdGFibGlzaEVycm9yIEdhbWUgc2VydmVyIGVuY3J5cHRpb24gZXN0YWJsaXNoaW5nIGZhaWxlZC5cclxuICAgICAgICAgICAgICAgICAgICBAcHJvcGVydHkge251bWJlcn0gR2FtZUF1dGhlbnRpY2F0aW9uRmFpbGVkIEdhbWUgc2VydmVyIGF1dGhlbnRpY2F0aW9uIGZhaWxlZC5cclxuICAgICAgICAgICAgICAgICAgICBAcHJvcGVydHkge251bWJlcn0gTmFtZVNlcnZlckVycm9yIEdlbmVyYWwgTmFtZVNlcnZlciBwZWVyIGVycm9yLlxyXG4gICAgICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBOYW1lU2VydmVyQ29ubmVjdEZhaWxlZCBOYW1lU2VydmVyIGNvbm5lY3Rpb24gZXJyb3IuXHJcbiAgICAgICAgICAgICAgICAgICAgQHByb3BlcnR5IHtudW1iZXJ9IE5hbWVTZXJ2ZXJDb25uZWN0Q2xvc2VkIERpc2Nvbm5lY3RlZCBmcm9tIE5hbWVTZXJ2ZXIuXHJcbiAgICAgICAgICAgICAgICAgICAgQHByb3BlcnR5IHtudW1iZXJ9IE5hbWVTZXJ2ZXJUaW1lb3V0IERpc2Nvbm5lY3RlZCBmcm9tIE5hbWVTZXJ2ZXIgZm9yIHRpbWVvdXQuXHJcbiAgICAgICAgICAgICAgICAgICAgQHByb3BlcnR5IHtudW1iZXJ9IE5hbWVTZXJ2ZXJFbmNyeXB0aW9uRXN0YWJsaXNoRXJyb3IgTmFtZVNlcnZlciBlbmNyeXB0aW9uIGVzdGFibGlzaGluZyBmYWlsZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgQHByb3BlcnR5IHtudW1iZXJ9IE5hbWVTZXJ2ZXJBdXRoZW50aWNhdGlvbkZhaWxlZCBOYW1lU2VydmVyIGF1dGhlbnRpY2F0aW9uIGZhaWxlZC5cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgT2s6IDAsXHJcbiAgICAgICAgICAgICAgICBNYXN0ZXJFcnJvcjogMTAwMSxcclxuICAgICAgICAgICAgICAgIE1hc3RlckNvbm5lY3RGYWlsZWQ6IDEwMDIsXHJcbiAgICAgICAgICAgICAgICBNYXN0ZXJDb25uZWN0Q2xvc2VkOiAxMDAzLFxyXG4gICAgICAgICAgICAgICAgTWFzdGVyVGltZW91dDogMTAwNCxcclxuICAgICAgICAgICAgICAgIE1hc3RlckVuY3J5cHRpb25Fc3RhYmxpc2hFcnJvcjogMTAwNSxcclxuICAgICAgICAgICAgICAgIE1hc3RlckF1dGhlbnRpY2F0aW9uRmFpbGVkOiAxMTAxLFxyXG4gICAgICAgICAgICAgICAgR2FtZUVycm9yOiAyMDAxLFxyXG4gICAgICAgICAgICAgICAgR2FtZUNvbm5lY3RGYWlsZWQ6IDIwMDIsXHJcbiAgICAgICAgICAgICAgICBHYW1lQ29ubmVjdENsb3NlZDogMjAwMyxcclxuICAgICAgICAgICAgICAgIEdhbWVUaW1lb3V0OiAyMDA0LFxyXG4gICAgICAgICAgICAgICAgR2FtZUVuY3J5cHRpb25Fc3RhYmxpc2hFcnJvcjogMjAwNSxcclxuICAgICAgICAgICAgICAgIEdhbWVBdXRoZW50aWNhdGlvbkZhaWxlZDogMjEwMSxcclxuICAgICAgICAgICAgICAgIE5hbWVTZXJ2ZXJFcnJvcjogMzAwMSxcclxuICAgICAgICAgICAgICAgIE5hbWVTZXJ2ZXJDb25uZWN0RmFpbGVkOiAzMDAyLFxyXG4gICAgICAgICAgICAgICAgTmFtZVNlcnZlckNvbm5lY3RDbG9zZWQ6IDMwMDMsXHJcbiAgICAgICAgICAgICAgICBOYW1lU2VydmVyVGltZW91dDogMzAwNCxcclxuICAgICAgICAgICAgICAgIE5hbWVTZXJ2ZXJFbmNyeXB0aW9uRXN0YWJsaXNoRXJyb3I6IDMwMDUsXHJcbiAgICAgICAgICAgICAgICBOYW1lU2VydmVyQXV0aGVudGljYXRpb25GYWlsZWQ6IDMxMDFcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgTG9hZEJhbGFuY2luZ0NsaWVudC5TdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgIEBzdW1tYXJ5IEVudW0gZm9yIGNsaWVudCBzdGF0ZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lbWJlciBQaG90b24uTG9hZEJhbGFuY2luZy5Mb2FkQmFsYW5jaW5nQ2xpZW50LlN0YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgQHJlYWRvbmx5XHJcbiAgICAgICAgICAgICAgICAgICAgQHByb3BlcnR5IHtudW1iZXJ9IEVycm9yIENyaXRpY2FsIGVycm9yIG9jY3VycmVkLlxyXG4gICAgICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBVbmluaXRpYWxpemVkIENsaWVudCBpcyBjcmVhdGVkIGJ1dCBub3QgdXNlZCB5ZXQuXHJcbiAgICAgICAgICAgICAgICAgICAgQHByb3BlcnR5IHtudW1iZXJ9IENvbm5lY3RpbmdUb05hbWVTZXJ2ZXIgQ29ubmVjdGluZyB0byBOYW1lU2VydmVyLlxyXG4gICAgICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBDb25uZWN0ZWRUb05hbWVTZXJ2ZXIgQ29ubmVjdGVkIHRvIE5hbWVTZXJ2ZXIuXHJcbiAgICAgICAgICAgICAgICAgICAgQHByb3BlcnR5IHtudW1iZXJ9IENvbm5lY3RpbmdUb01hc3RlcnNlcnZlciBDb25uZWN0aW5nIHRvIE1hc3RlciAoaW5jbHVkZXMgY29ubmVjdCwgYXV0aGVudGljYXRlIGFuZCBqb2luaW5nIHRoZSBsb2JieSkuXHJcbiAgICAgICAgICAgICAgICAgICAgQHByb3BlcnR5IHtudW1iZXJ9IENvbm5lY3RlZFRvTWFzdGVyIENvbm5lY3RlZCB0byBNYXN0ZXIgc2VydmVyLlxyXG4gICAgICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBKb2luZWRMb2JieSBDb25uZWN0ZWQgdG8gTWFzdGVyIGFuZCBqb2luZWQgbG9iYnkuIERpc3BsYXkgcm9vbSBsaXN0IGFuZCBqb2luL2NyZWF0ZSByb29tcyBhdCB3aWxsLlxyXG4gICAgICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBDb25uZWN0aW5nVG9HYW1lc2VydmVyIENvbm5lY3RpbmcgdG8gR2FtZSBzZXJ2ZXIoY2xpZW50IHdpbGwgYXV0aGVudGljYXRlIGFuZCBqb2luL2NyZWF0ZSBnYW1lKS5cclxuICAgICAgICAgICAgICAgICAgICBAcHJvcGVydHkge251bWJlcn0gQ29ubmVjdGVkVG9HYW1lc2VydmVyIENvbm5lY3RlZCB0byBHYW1lIHNlcnZlciAoZ29pbmcgdG8gYXV0aCBhbmQgam9pbiBnYW1lKS5cclxuICAgICAgICAgICAgICAgICAgICBAcHJvcGVydHkge251bWJlcn0gSm9pbmVkIFRoZSBjbGllbnQgam9pbmVkIHJvb20uXHJcbiAgICAgICAgICAgICAgICAgICAgQHByb3BlcnR5IHtudW1iZXJ9IERpc2Nvbm5lY3RlZCBUaGUgY2xpZW50IGlzIG5vIGxvbmdlciBjb25uZWN0ZWQgKHRvIGFueSBzZXJ2ZXIpLiBDb25uZWN0IHRvIE1hc3RlciB0byBnbyBvbi5cclxuICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBFcnJvcjogLTEsXHJcbiAgICAgICAgICAgICAgICBVbmluaXRpYWxpemVkOiAwLFxyXG4gICAgICAgICAgICAgICAgQ29ubmVjdGluZ1RvTmFtZVNlcnZlcjogMSxcclxuICAgICAgICAgICAgICAgIENvbm5lY3RlZFRvTmFtZVNlcnZlcjogMixcclxuICAgICAgICAgICAgICAgIENvbm5lY3RpbmdUb01hc3RlcnNlcnZlcjogMyxcclxuICAgICAgICAgICAgICAgIENvbm5lY3RlZFRvTWFzdGVyOiA0LFxyXG4gICAgICAgICAgICAgICAgSm9pbmVkTG9iYnk6IDUsXHJcbiAgICAgICAgICAgICAgICBDb25uZWN0aW5nVG9HYW1lc2VydmVyOiA2LFxyXG4gICAgICAgICAgICAgICAgQ29ubmVjdGVkVG9HYW1lc2VydmVyOiA3LFxyXG4gICAgICAgICAgICAgICAgSm9pbmVkOiA4LFxyXG4gICAgICAgICAgICAgICAgRGlzY29ubmVjdGVkOiAxMFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gTG9hZEJhbGFuY2luZ0NsaWVudDtcclxuICAgICAgICB9KCkpO1xyXG4gICAgICAgIExvYWRCYWxhbmNpbmcuTG9hZEJhbGFuY2luZ0NsaWVudCA9IExvYWRCYWxhbmNpbmdDbGllbnQ7XHJcbiAgICAgICAgLy9UT0RPOiBpbnRlcm5hbFxyXG4gICAgICAgIHZhciBMYmNQZWVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgICAgICAgICBfX2V4dGVuZHMoTGJjUGVlciwgX3N1cGVyKTtcclxuICAgICAgICAgICAgZnVuY3Rpb24gTGJjUGVlcigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBMYmNQZWVyLnByb3RvdHlwZS53ZWJScGMgPSBmdW5jdGlvbiAodXJpUGF0aCwgcGFyYW1ldGVycywgb3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnB1c2goTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5VcmlQYXRoLCB1cmlQYXRoKTtcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5wdXNoKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuUnBjQ2FsbFBhcmFtcywgcGFyYW1ldGVycyk7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnNlbmRBdXRoQ29va2llKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy5wdXNoKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuV2ViRmxhZ3MsIFBob3Rvbi5UeXBlRXh0LkJ5dGUoV2ViRmxhZ3MuU2VuZEF1dGhDb29raWUpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRPcGVyYXRpb24oTG9hZEJhbGFuY2luZy5Db25zdGFudHMuT3BlcmF0aW9uQ29kZS5ScGMsIHBhcmFtcyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIExiY1BlZXIucHJvdG90eXBlLndlYlJwY0hhbmRsZXIgPSBmdW5jdGlvbiAobGJjKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2xvZ2dlci5kZWJ1ZyhcInJlc3AgUnBjXCIsIGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmlQYXRoLCBtZXNzYWdlLCBkYXRhLCByZXN1bHRDb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkLmVyckNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmlQYXRoID0gZC52YWxzW0xvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuVXJpUGF0aF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBkLnZhbHNbTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5ScGNDYWxsUmV0RGF0YV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdENvZGUgPSBkLnZhbHNbTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5ScGNDYWxsUmV0Q29kZV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fbG9nZ2VyLmVycm9yKFwiV2ViUnBjIHJlcXVlc3QgZXJyb3I6XCIsIGQuZXJyQ29kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxiYy5vbldlYlJwY1Jlc3VsdChkLmVyckNvZGUsIGQuZXJyTXNnLCB1cmlQYXRoLCByZXN1bHRDb2RlLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBMYmNQZWVyO1xyXG4gICAgICAgIH0oUGhvdG9uLlBob3RvblBlZXIpKTtcclxuICAgICAgICBMb2FkQmFsYW5jaW5nLkxiY1BlZXIgPSBMYmNQZWVyO1xyXG4gICAgICAgIHZhciBOYW1lU2VydmVyUGVlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgICAgICAgICAgX19leHRlbmRzKE5hbWVTZXJ2ZXJQZWVyLCBfc3VwZXIpO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBOYW1lU2VydmVyUGVlcihjbGllbnQsIHByb3RvY29sLCBhZGRyZXNzLCBzdWJwcm90b2NvbCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvdG9jb2wsIGFkZHJlc3MsIHN1YnByb3RvY29sLCBjbGllbnQubG9nZ2VyLmdldFByZWZpeCgpICsgXCIgTmFtZVNlcnZlclwiKSB8fCB0aGlzO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY2xpZW50ID0gY2xpZW50O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIG92ZXJyaWRlc1xyXG4gICAgICAgICAgICBOYW1lU2VydmVyUGVlci5wcm90b3R5cGUub25VbmhhbmRsZWRFdmVudCA9IGZ1bmN0aW9uIChjb2RlLCBhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWVudC5vbkV2ZW50KGNvZGUsIGFyZ3MudmFsc1tMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5QYXJhbWV0ZXJDb2RlLkN1c3RvbUV2ZW50Q29udGVudF0sIGFyZ3MudmFsc1tMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5QYXJhbWV0ZXJDb2RlLkFjdG9yTnJdKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgTmFtZVNlcnZlclBlZXIucHJvdG90eXBlLm9uVW5oYW5kbGVkUmVzcG9uc2UgPSBmdW5jdGlvbiAoY29kZSwgYXJncykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGllbnQub25PcGVyYXRpb25SZXNwb25zZShhcmdzLmVyckNvZGUsIGFyZ3MuZXJyTXNnLCBjb2RlLCBhcmdzLnZhbHMpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBOYW1lU2VydmVyUGVlci5wcm90b3R5cGUuZ2V0UmVnaW9ucyA9IGZ1bmN0aW9uIChhcHBJZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnB1c2goTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5BcHBsaWNhdGlvbklkLCBhcHBJZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRPcGVyYXRpb24oTG9hZEJhbGFuY2luZy5Db25zdGFudHMuT3BlcmF0aW9uQ29kZS5HZXRSZWdpb25zLCBwYXJhbXMsIHRydWUsIDApO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvLyB0aGlzID0gTEJDXHJcbiAgICAgICAgICAgIE5hbWVTZXJ2ZXJQZWVyLnByb3RvdHlwZS5vcEF1dGggPSBmdW5jdGlvbiAoYXBwSWQsIGFwcFZlcnNpb24sIHVzZXJBdXRoVHlwZSwgdXNlckF1dGhQYXJhbWV0ZXJzLCB1c2VyQXV0aERhdGEsIHVzZXJJZCwgcmVnaW9uKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3AgPSBbXTtcclxuICAgICAgICAgICAgICAgIG9wLnB1c2goTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5BcHBsaWNhdGlvbklkLCBhcHBJZCk7XHJcbiAgICAgICAgICAgICAgICBvcC5wdXNoKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuQXBwVmVyc2lvbiwgYXBwVmVyc2lvbik7XHJcbiAgICAgICAgICAgICAgICBpZiAodXNlckF1dGhUeXBlICE9IExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLkN1c3RvbUF1dGhlbnRpY2F0aW9uVHlwZS5Ob25lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3AucHVzaChMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5QYXJhbWV0ZXJDb2RlLkNsaWVudEF1dGhlbnRpY2F0aW9uVHlwZSwgUGhvdG9uLlR5cGVFeHQuQnl0ZSh1c2VyQXV0aFR5cGUpKTtcclxuICAgICAgICAgICAgICAgICAgICBvcC5wdXNoKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuQ2xpZW50QXV0aGVudGljYXRpb25QYXJhbXMsIHVzZXJBdXRoUGFyYW1ldGVycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXJBdXRoRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcC5wdXNoKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuQ2xpZW50QXV0aGVudGljYXRpb25EYXRhLCB1c2VyQXV0aERhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh1c2VySWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcC5wdXNoKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuVXNlcklkLCB1c2VySWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gICAgXHRcdGlmICh0aGlzLmNvbm5lY3RPcHRpb25zLmxvYmJ5U3RhdHMpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgIFx0XHRcdG9wLnB1c2goQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuTG9iYnlTdGF0cywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICBcdFx0fVxyXG4gICAgICAgICAgICAgICAgb3AucHVzaChMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5QYXJhbWV0ZXJDb2RlLlJlZ2lvbiwgcmVnaW9uKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VuZE9wZXJhdGlvbihMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5PcGVyYXRpb25Db2RlLkF1dGhlbnRpY2F0ZSwgb3AsIHRydWUsIDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oXCJBdXRoZW50aWNhdGUuLi5cIik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBOYW1lU2VydmVyUGVlcjtcclxuICAgICAgICB9KExiY1BlZXIpKTtcclxuICAgICAgICBMb2FkQmFsYW5jaW5nLk5hbWVTZXJ2ZXJQZWVyID0gTmFtZVNlcnZlclBlZXI7XHJcbiAgICAgICAgLy9UT0RPOiBpbnRlcm5hbFxyXG4gICAgICAgIHZhciBNYXN0ZXJQZWVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgICAgICAgICBfX2V4dGVuZHMoTWFzdGVyUGVlciwgX3N1cGVyKTtcclxuICAgICAgICAgICAgZnVuY3Rpb24gTWFzdGVyUGVlcihjbGllbnQsIHByb3RvY29sLCBhZGRyZXNzLCBzdWJwcm90b2NvbCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvdG9jb2wsIGFkZHJlc3MsIHN1YnByb3RvY29sLCBjbGllbnQubG9nZ2VyLmdldFByZWZpeCgpICsgXCIgTWFzdGVyXCIpIHx8IHRoaXM7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5jbGllbnQgPSBjbGllbnQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gb3ZlcnJpZGVzXHJcbiAgICAgICAgICAgIE1hc3RlclBlZXIucHJvdG90eXBlLm9uVW5oYW5kbGVkRXZlbnQgPSBmdW5jdGlvbiAoY29kZSwgYXJncykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGllbnQub25FdmVudChjb2RlLCBhcmdzLnZhbHNbTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5DdXN0b21FdmVudENvbnRlbnRdLCBhcmdzLnZhbHNbTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5BY3Rvck5yXSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIE1hc3RlclBlZXIucHJvdG90eXBlLm9uVW5oYW5kbGVkUmVzcG9uc2UgPSBmdW5jdGlvbiAoY29kZSwgYXJncykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGllbnQub25PcGVyYXRpb25SZXNwb25zZShhcmdzLmVyckNvZGUsIGFyZ3MuZXJyTXNnLCBjb2RlLCBhcmdzLnZhbHMpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBNYXN0ZXJQZWVyLnByb3RvdHlwZS5maW5kRnJpZW5kcyA9IGZ1bmN0aW9uIChmcmllbmRzVG9GaW5kKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMucHVzaChMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5QYXJhbWV0ZXJDb2RlLkZpbmRGcmllbmRzUmVxdWVzdExpc3QpO1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnB1c2goZnJpZW5kc1RvRmluZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRPcGVyYXRpb24oTG9hZEJhbGFuY2luZy5Db25zdGFudHMuT3BlcmF0aW9uQ29kZS5GaW5kRnJpZW5kcywgcGFyYW1zKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgTWFzdGVyUGVlci5wcm90b3R5cGUucmVxdWVzdExvYmJ5U3RhdHMgPSBmdW5jdGlvbiAobG9iYmllc1RvUmVxdWVzdCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxvYmJpZXNUb1JlcXVlc3QgJiYgbG9iYmllc1RvUmVxdWVzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG9iYmllc1RvUmVxdWVzdC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuW2ldID0gbG9iYmllc1RvUmVxdWVzdFtpXVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdFtpXSA9IGxvYmJpZXNUb1JlcXVlc3RbaV1bMV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5wdXNoKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuTG9iYnlOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMucHVzaChuKTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMucHVzaChMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5QYXJhbWV0ZXJDb2RlLkxvYmJ5VHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnB1c2godCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRPcGVyYXRpb24oTG9hZEJhbGFuY2luZy5Db25zdGFudHMuT3BlcmF0aW9uQ29kZS5Mb2JieVN0YXRzLCBwYXJhbXMpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gTWFzdGVyUGVlcjtcclxuICAgICAgICB9KExiY1BlZXIpKTtcclxuICAgICAgICBMb2FkQmFsYW5jaW5nLk1hc3RlclBlZXIgPSBNYXN0ZXJQZWVyO1xyXG4gICAgICAgIC8vVE9ETzogaW50ZXJuYWxcclxuICAgICAgICB2YXIgR2FtZVBlZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICAgICAgICAgIF9fZXh0ZW5kcyhHYW1lUGVlciwgX3N1cGVyKTtcclxuICAgICAgICAgICAgZnVuY3Rpb24gR2FtZVBlZXIoY2xpZW50LCBwcm90b2NvbCwgYWRkcmVzcywgc3VicHJvdG9jb2wpIHtcclxuICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3RvY29sLCBhZGRyZXNzLCBzdWJwcm90b2NvbCwgY2xpZW50LmxvZ2dlci5nZXRQcmVmaXgoKSArIFwiIEdhbWVcIikgfHwgdGhpcztcclxuICAgICAgICAgICAgICAgIF90aGlzLmNsaWVudCA9IGNsaWVudDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBvdmVycmlkZXNcclxuICAgICAgICAgICAgR2FtZVBlZXIucHJvdG90eXBlLm9uVW5oYW5kbGVkRXZlbnQgPSBmdW5jdGlvbiAoY29kZSwgYXJncykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGllbnQub25FdmVudChjb2RlLCBhcmdzLnZhbHNbTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5DdXN0b21FdmVudENvbnRlbnRdLCBhcmdzLnZhbHNbTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5BY3Rvck5yXSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8vIG92ZXJyaWRlc1xyXG4gICAgICAgICAgICBHYW1lUGVlci5wcm90b3R5cGUub25VbmhhbmRsZWRSZXNwb25zZSA9IGZ1bmN0aW9uIChjb2RlLCBhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWVudC5vbk9wZXJhdGlvblJlc3BvbnNlKGFyZ3MuZXJyQ29kZSwgYXJncy5lcnJNc2csIGNvZGUsIGFyZ3MudmFscyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIEdhbWVQZWVyLnByb3RvdHlwZS5yYWlzZUV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50Q29kZSwgZGF0YSwgb3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xpZW50LmlzSm9pbmVkVG9Sb29tKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIuZGVidWcoXCJyYWlzZUV2ZW50XCIsIGV2ZW50Q29kZSwgZGF0YSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IFtMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5QYXJhbWV0ZXJDb2RlLkNvZGUsIFBob3Rvbi5UeXBlRXh0LkJ5dGUoZXZlbnRDb2RlKSwgTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5EYXRhLCBkYXRhXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5yZWNlaXZlcnMgIT0gdW5kZWZpbmVkICYmIG9wdGlvbnMucmVjZWl2ZXJzICE9PSBMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5SZWNlaXZlckdyb3VwLk90aGVycykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnB1c2goTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5SZWNlaXZlckdyb3VwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy5wdXNoKFBob3Rvbi5UeXBlRXh0LkJ5dGUob3B0aW9ucy5yZWNlaXZlcnMpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5jYWNoZSAhPSB1bmRlZmluZWQgJiYgb3B0aW9ucy5jYWNoZSAhPT0gTG9hZEJhbGFuY2luZy5Db25zdGFudHMuRXZlbnRDYWNoaW5nLkRvTm90Q2FjaGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy5wdXNoKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuQ2FjaGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnB1c2goUGhvdG9uLlR5cGVFeHQuQnl0ZShvcHRpb25zLmNhY2hlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuaW50ZXJlc3RHcm91cCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrR3JvdXBOdW1iZXIob3B0aW9ucy5pbnRlcmVzdEdyb3VwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy5wdXNoKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuR3JvdXApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy5wdXNoKFBob3Rvbi5UeXBlRXh0LkJ5dGUob3B0aW9ucy5pbnRlcmVzdEdyb3VwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIuZXhjZXB0aW9uKDUwMiwgXCJyYWlzZUV2ZW50IC0gR3JvdXAgbm90IGEgbnVtYmVyOiBcIiArIG9wdGlvbnMuaW50ZXJlc3RHcm91cCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMudGFyZ2V0QWN0b3JzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnB1c2goTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5BY3Rvckxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnB1c2gob3B0aW9ucy50YXJnZXRBY3RvcnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLndlYkZvcndhcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy5wdXNoKExvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuV2ViRmxhZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnB1c2goUGhvdG9uLlR5cGVFeHQuQnl0ZShXZWJGbGFncy5IdHRwRm9yd2FyZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZE9wZXJhdGlvbihMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5PcGVyYXRpb25Db2RlLlJhaXNlRXZlbnQsIHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJyYWlzZUV2ZW50IC0gTm90IGpvaW5lZCFcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIEdhbWVQZWVyLnByb3RvdHlwZS5jaGFuZ2VHcm91cHMgPSBmdW5jdGlvbiAoZ3JvdXBzVG9SZW1vdmUsIGdyb3Vwc1RvQWRkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgICAgICAgICBpZiAoZ3JvdXBzVG9SZW1vdmUgIT0gbnVsbCAmJiBncm91cHNUb1JlbW92ZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrR3JvdXBBcnJheShncm91cHNUb1JlbW92ZSwgXCJncm91cHNUb1JlbW92ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMucHVzaChMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5QYXJhbWV0ZXJDb2RlLlJlbW92ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnB1c2goUGhvdG9uLlR5cGVFeHQuQnl0ZShncm91cHNUb1JlbW92ZSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGdyb3Vwc1RvQWRkICE9IG51bGwgJiYgZ3JvdXBzVG9BZGQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0dyb3VwQXJyYXkoZ3JvdXBzVG9BZGQsIFwiZ3JvdXBzVG9BZGRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnB1c2goTG9hZEJhbGFuY2luZy5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5BZGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5wdXNoKFBob3Rvbi5UeXBlRXh0LkJ5dGUoZ3JvdXBzVG9BZGQpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2VuZE9wZXJhdGlvbihMb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5PcGVyYXRpb25Db2RlLkNoYW5nZUdyb3VwcywgcGFyYW1zKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgR2FtZVBlZXIucHJvdG90eXBlLmNoZWNrR3JvdXBOdW1iZXIgPSBmdW5jdGlvbiAoZykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICEodHlwZW9mIChnKSAhPSBcIm51bWJlclwiIHx8IGlzTmFOKGcpIHx8IGcgPT09IEluZmluaXR5IHx8IGcgPT09IC1JbmZpbml0eSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIEdhbWVQZWVyLnByb3RvdHlwZS5jaGVja0dyb3VwQXJyYXkgPSBmdW5jdGlvbiAoZ3JvdXBzLCBncm91cHNOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoRXhpdGdhbWVzLkNvbW1vbi5VdGlsLmlzQXJyYXkoZ3JvdXBzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBnID0gZ3JvdXBzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja0dyb3VwTnVtYmVyKGcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIuZXhjZXB0aW9uKDUwMywgXCJjaGFuZ2VHcm91cHMgLSBcIiArIGdyb3Vwc05hbWUgKyBcIiAoXCIgKyBncm91cHMgKyBcIikgbm90IGFuIGFycmF5IG9mIG51bWJlcnM6IGVsZW1lbnQgXCIgKyBpICsgXCIgPSBcIiArIGcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmV4Y2VwdGlvbig1MDQsIFwiY2hhbmdlR3JvdXBzIC0gZ3JvdXBzVG9SZW1vdmUgbm90IGFuIGFycmF5OiBcIiArIGdyb3Vwcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBHYW1lUGVlcjtcclxuICAgICAgICB9KExiY1BlZXIpKTtcclxuICAgICAgICBMb2FkQmFsYW5jaW5nLkdhbWVQZWVyID0gR2FtZVBlZXI7XHJcbiAgICB9KShMb2FkQmFsYW5jaW5nID0gUGhvdG9uLkxvYWRCYWxhbmNpbmcgfHwgKFBob3Rvbi5Mb2FkQmFsYW5jaW5nID0ge30pKTtcclxufSkoUGhvdG9uIHx8IChQaG90b24gPSB7fSkpO1xyXG4vKipcclxuICAgIFBob3RvbiBMb2FkIEJhbGFuY2luZyBBUEkgQ29uc3RhbnRzXHJcbiAgICBAbmFtZXNwYWNlIFBob3Rvbi5Mb2FkQmFsYW5jaW5nLkNvbnN0YW50c1xyXG4qL1xyXG52YXIgUGhvdG9uO1xyXG4oZnVuY3Rpb24gKFBob3Rvbikge1xyXG4gICAgdmFyIExpdGU7XHJcbiAgICAoZnVuY3Rpb24gKExpdGUpIHtcclxuICAgICAgICB2YXIgQ29uc3RhbnRzO1xyXG4gICAgICAgIChmdW5jdGlvbiAoQ29uc3RhbnRzKSB7XHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBMaXRlIC0ga2V5cyBmb3IgcGFyYW1ldGVycyBvZiBvcGVyYXRpb24gcmVxdWVzdHMgYW5kIHJlc3BvbnNlcyAoc2hvcnQ6IE9wS2V5KS5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gUmVtYXJrczpcclxuICAgICAgICAgICAgLy8gICAgIFRoZXNlIGtleXMgbWF0Y2ggYSBkZWZpbml0aW9uIGluIHRoZSBMaXRlIGFwcGxpY2F0aW9uIChwYXJ0IG9mIHRoZSBzZXJ2ZXJcclxuICAgICAgICAgICAgLy8gICAgIFNESykuICBJZiB5b3VyIGdhbWUgaXMgYnVpbHQgYXMgZXh0ZW5zaW9uIG9mIExpdGUsIGRvbid0IHJlLXVzZSB0aGVzZSBjb2Rlc1xyXG4gICAgICAgICAgICAvLyAgICAgZm9yIHlvdXIgY3VzdG9tIGV2ZW50cy4gIFRoZXNlIGtleXMgYXJlIGRlZmluZWQgcGVyIGFwcGxpY2F0aW9uLCBzbyBMaXRlXHJcbiAgICAgICAgICAgIC8vICAgICBoYXMgZGlmZmVyZW50IGtleXMgdGhhbiBNTU8gb3IgeW91ciBjdXN0b20gYXBwbGljYXRpb24uIFRoaXMgaXMgd2h5IHRoZXNlXHJcbiAgICAgICAgICAgIC8vICAgICBhcmUgbm90IGFuIGVudW1lcmF0aW9uLiAgTGl0ZSBhbmQgTGl0ZSBMb2JieSB3aWxsIHVzZSB0aGUga2V5cyAyNTUgYW5kIGxvd2VyLFxyXG4gICAgICAgICAgICAvLyAgICAgdG8gZ2l2ZSB5b3Ugcm9vbSBmb3IgeW91ciBvd24gY29kZXMuICBLZXlzIGZvciBvcGVyYXRpb24tcGFyYW1ldGVycyBjb3VsZFxyXG4gICAgICAgICAgICAvLyAgICAgYmUgYXNzaWduZWQgb24gYSBwZXIgb3BlcmF0aW9uIGJhc2lzLCBidXQgaXQgbWFrZXMgc2Vuc2UgdG8gaGF2ZSBmaXhlZCBrZXlzXHJcbiAgICAgICAgICAgIC8vICAgICBmb3IgdmFsdWVzIHdoaWNoIGFyZSB1c2VkIHRocm91Z2hvdXQgdGhlIHdob2xlIGFwcGxpY2F0aW9uLlxyXG4gICAgICAgICAgICBDb25zdGFudHMuTGl0ZU9wS2V5ID0ge1xyXG4gICAgICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgICAgIC8vICAgICAoMjUyKSBDb2RlIGZvciBsaXN0IG9mIHBsYXllcnMgaW4gYSByb29tLiBDdXJyZW50bHkgbm90IHVzZWQuXHJcbiAgICAgICAgICAgICAgICBBY3Rvckxpc3Q6IDI1MixcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAgICAgLy8gICAgICgyNTQpIENvZGUgb2YgdGhlIEFjdG9yIG9mIGFuIG9wZXJhdGlvbi4gVXNlZCBmb3IgcHJvcGVydHkgZ2V0IGFuZCBzZXQuXHJcbiAgICAgICAgICAgICAgICBBY3Rvck5yOiAyNTQsXHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgICAgIC8vICAgICAoMjQ5KSBDb2RlIGZvciBwcm9wZXJ0eSBzZXQgKEhhc2h0YWJsZSkuXHJcbiAgICAgICAgICAgICAgICBBY3RvclByb3BlcnRpZXM6IDI0OSxcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAgICAgLy8gICAgICgyMzgpIFRoZSBcIkFkZFwiIG9wZXJhdGlvbi1wYXJhbWV0ZXIgY2FuIGJlIHVzZWQgdG8gYWRkIHNvbWV0aGluZyB0byBzb21lXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbGlzdCBvciBzZXQuIEUuZy4gYWRkIGdyb3VwcyB0byBwbGF5ZXIncyBpbnRlcmVzdCBncm91cHMuXHJcbiAgICAgICAgICAgICAgICBBZGQ6IDIzOCxcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAgICAgLy8gICAgICgyNTApIENvZGUgZm9yIGJyb2FkY2FzdCBwYXJhbWV0ZXIgb2YgT3BTZXRQcm9wZXJ0aWVzIG1ldGhvZC5cclxuICAgICAgICAgICAgICAgIEJyb2FkY2FzdDogMjUwLFxyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgKDI0NykgQ29kZSBmb3IgY2FjaGluZyBldmVudHMgd2hpbGUgcmFpc2luZyB0aGVtLlxyXG4gICAgICAgICAgICAgICAgQ2FjaGU6IDI0NyxcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAgICAgLy8gICAgICgyNDQpIENvZGUgdXNlZCB3aGVuIHNlbmRpbmcgc29tZSBjb2RlLXJlbGF0ZWQgcGFyYW1ldGVyLCBsaWtlIE9wUmFpc2VFdmVudCdzXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgZXZlbnQtY29kZS5cclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAvLyBSZW1hcmtzOlxyXG4gICAgICAgICAgICAgICAgLy8gICAgIFRoaXMgaXMgbm90IHRoZSBzYW1lIGFzIHRoZSBPcGVyYXRpb24ncyBjb2RlLCB3aGljaCBpcyBubyBsb25nZXIgc2VudCBhc1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHBhcnQgb2YgdGhlIHBhcmFtZXRlciBEaWN0aW9uYXJ5IGluIFBob3RvbiAzLlxyXG4gICAgICAgICAgICAgICAgQ29kZTogMjQ0LFxyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgKDI0NSkgQ29kZSBvZiBkYXRhIG9mIGFuIGV2ZW50LiBVc2VkIGluIE9wUmFpc2VFdmVudC5cclxuICAgICAgICAgICAgICAgIERhdGE6IDI0NSxcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAgICAgLy8gICAgICgyNTUpIENvZGUgb2YgdGhlIGdhbWUgaWQgKGEgdW5pcXVlIHJvb20gbmFtZSkuIFVzZWQgaW4gT3BKb2luLlxyXG4gICAgICAgICAgICAgICAgR2FtZUlkOiAyNTUsXHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgICAgIC8vICAgICAoMjQ4KSBDb2RlIGZvciBwcm9wZXJ0eSBzZXQgKEhhc2h0YWJsZSkuXHJcbiAgICAgICAgICAgICAgICBHYW1lUHJvcGVydGllczogMjQ4LFxyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgKDI0MCkgQ29kZSBmb3IgXCJncm91cFwiIG9wZXJhdGlvbi1wYXJhbWV0ZXIgKGFzIHVzZWQgaW4gT3AgUmFpc2VFdmVudCkuXHJcbiAgICAgICAgICAgICAgICBHcm91cDogMjQwLFxyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgKDI1MSkgQ29kZSBmb3IgcHJvcGVydHkgc2V0IChIYXNodGFibGUpLiBUaGlzIGtleSBpcyB1c2VkIHdoZW4gc2VuZGluZyBvbmx5XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgb25lIHNldCBvZiBwcm9wZXJ0aWVzLiAgSWYgZWl0aGVyIEFjdG9yUHJvcGVydGllcyBvciBHYW1lUHJvcGVydGllcyBhcmUgdXNlZFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIChvciBib3RoKSwgY2hlY2sgdGhvc2Uga2V5cy5cclxuICAgICAgICAgICAgICAgIFByb3BlcnRpZXM6IDI1MSxcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAgICAgLy8gICAgICgyNDYpIENvZGUgdG8gc2VsZWN0IHRoZSByZWNlaXZlcnMgb2YgZXZlbnRzICh1c2VkIGluIExpdGUsIE9wZXJhdGlvbiBSYWlzZUV2ZW50KS5cclxuICAgICAgICAgICAgICAgIFJlY2VpdmVyR3JvdXA6IDI0NixcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAgICAgLy8gICAgICgyMzkpIFRoZSBcIlJlbW92ZVwiIG9wZXJhdGlvbi1wYXJhbWV0ZXIgY2FuIGJlIHVzZWQgdG8gcmVtb3ZlIHNvbWV0aGluZyBmcm9tXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgYSBsaXN0LiBFLmcuIHJlbW92ZSBncm91cHMgZnJvbSBwbGF5ZXIncyBpbnRlcmVzdCBncm91cHMuXHJcbiAgICAgICAgICAgICAgICBSZW1vdmU6IDIzOSxcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAgICAgLy8gICAgICgyNTMpIENvZGUgb2YgdGhlIHRhcmdldCBBY3RvciBvZiBhbiBvcGVyYXRpb24uIFVzZWQgZm9yIHByb3BlcnR5IHNldC4gSXNcclxuICAgICAgICAgICAgICAgIC8vICAgICAwIGZvciBnYW1lLlxyXG4gICAgICAgICAgICAgICAgVGFyZ2V0QWN0b3JOcjogMjUzLFxyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgKDIzNikgQSBwYXJhbWV0ZXIgaW5kaWNhdGluZyBob3cgbG9uZyBhIHJvb20gaW5zdGFuY2Ugc2hvdWxkIGJlIGtlZXBlZCBhbGl2ZSBpbiB0aGUgXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgcm9vbSBjYWNoZSBhZnRlciBhbGwgcGxheWVycyBsZWZ0IHRoZSByb29tLlxyXG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgRW1wdHlSb29tTGl2ZVRpbWU6IDIzNlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgTGl0ZSAtIEV2ZW50IGNvZGVzLiAgVGhlc2UgY29kZXMgYXJlIGRlZmluZWQgYnkgdGhlIExpdGUgYXBwbGljYXRpb24ncyBsb2dpY1xyXG4gICAgICAgICAgICAvLyAgICAgb24gdGhlIHNlcnZlciBzaWRlLiAgT3RoZXIgYXBwbGljYXRpb24ncyB3b24ndCBuZWNlc3NhcmlseSB1c2UgdGhlc2UuXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFJlbWFya3M6XHJcbiAgICAgICAgICAgIC8vICAgICBJZiB5b3VyIGdhbWUgaXMgYnVpbHQgYXMgZXh0ZW5zaW9uIG9mIExpdGUsIGRvbid0IHJlLXVzZSB0aGVzZSBjb2RlcyBmb3JcclxuICAgICAgICAgICAgLy8gICAgIHlvdXIgY3VzdG9tIGV2ZW50cy5cclxuICAgICAgICAgICAgQ29uc3RhbnRzLkxpdGVFdmVudENvZGUgPSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAgICAgLy8gICAgICgyNTUpIEV2ZW50IEpvaW46IHNvbWVvbmUgam9pbmVkIHRoZSBnYW1lXHJcbiAgICAgICAgICAgICAgICBKb2luOiAyNTUsXHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgICAgIC8vICAgICAoMjU0KSBFdmVudCBMZWF2ZTogc29tZW9uZSBsZWZ0IHRoZSBnYW1lXHJcbiAgICAgICAgICAgICAgICBMZWF2ZTogMjU0LFxyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgKDI1MykgRXZlbnQgUHJvcGVydGllc0NoYW5nZWRcclxuICAgICAgICAgICAgICAgIFByb3BlcnRpZXNDaGFuZ2VkOiAyNTNcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIExpdGUgLSBPcGVyYXRpb24gQ29kZXMuICBUaGlzIGVudW1lcmF0aW9uIGNvbnRhaW5zIHRoZSBjb2RlcyB0aGF0IGFyZSBnaXZlblxyXG4gICAgICAgICAgICAvLyAgICAgdG8gdGhlIExpdGUgQXBwbGljYXRpb24ncyBvcGVyYXRpb25zLiBJbnN0ZWFkIG9mIHNlbmRpbmcgXCJKb2luXCIsIHRoaXMgZW5hYmxlc1xyXG4gICAgICAgICAgICAvLyAgICAgdXMgdG8gc2VuZCB0aGUgYnl0ZSAyNTUuXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFJlbWFya3M6XHJcbiAgICAgICAgICAgIC8vICAgICBPdGhlciBhcHBsaWNhdGlvbnMgKHRoZSBNTU8gZGVtbyBvciB5b3VyIG93bikgY291bGQgZGVmaW5lIG90aGVyIG9wZXJhdGlvbnNcclxuICAgICAgICAgICAgLy8gICAgIGFuZCBvdGhlciBjb2Rlcy4gIElmIHlvdXIgZ2FtZSBpcyBidWlsdCBhcyBleHRlbnNpb24gb2YgTGl0ZSwgZG9uJ3QgcmUtdXNlXHJcbiAgICAgICAgICAgIC8vICAgICB0aGVzZSBjb2RlcyBmb3IgeW91ciBjdXN0b20gZXZlbnRzLlxyXG4gICAgICAgICAgICBDb25zdGFudHMuTGl0ZU9wQ29kZSA9IHtcclxuICAgICAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgKDI0OCkgT3BlcmF0aW9uIGNvZGUgdG8gY2hhbmdlIGludGVyZXN0IGdyb3VwcyBpbiBSb29tcyAoTGl0ZSBhcHBsaWNhdGlvblxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGFuZCBleHRlbmRpbmcgb25lcykuXHJcbiAgICAgICAgICAgICAgICBDaGFuZ2VHcm91cHM6IDI0OCxcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAgICAgLy8gICAgICgyNTEpIE9wZXJhdGlvbiBjb2RlIGZvciBPcEdldFByb3BlcnRpZXMuXHJcbiAgICAgICAgICAgICAgICBHZXRQcm9wZXJ0aWVzOiAyNTEsXHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgICAgIC8vICAgICAoMjU1KSBDb2RlIGZvciBPcEpvaW4sIHRvIGdldCBpbnRvIGEgcm9vbS5cclxuICAgICAgICAgICAgICAgIEpvaW46IDI1NSxcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAgICAgLy8gICAgICgyNTQpIENvZGUgZm9yIE9wTGVhdmUsIHRvIGdldCBvdXQgb2YgYSByb29tLlxyXG4gICAgICAgICAgICAgICAgTGVhdmU6IDI1NCxcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAgICAgLy8gICAgICgyNTMpIENvZGUgZm9yIE9wUmFpc2VFdmVudCAobm90IHNhbWUgYXMgZXZlbnRDb2RlKS5cclxuICAgICAgICAgICAgICAgIFJhaXNlRXZlbnQ6IDI1MyxcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAgICAgLy8gICAgICgyNTIpIENvZGUgZm9yIE9wU2V0UHJvcGVydGllcy5cclxuICAgICAgICAgICAgICAgIFNldFByb3BlcnRpZXM6IDI1MlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pKENvbnN0YW50cyA9IExpdGUuQ29uc3RhbnRzIHx8IChMaXRlLkNvbnN0YW50cyA9IHt9KSk7XHJcbiAgICB9KShMaXRlID0gUGhvdG9uLkxpdGUgfHwgKFBob3Rvbi5MaXRlID0ge30pKTtcclxufSkoUGhvdG9uIHx8IChQaG90b24gPSB7fSkpO1xyXG4oZnVuY3Rpb24gKFBob3Rvbikge1xyXG4gICAgdmFyIExvYWRCYWxhbmNpbmc7XHJcbiAgICAoZnVuY3Rpb24gKExvYWRCYWxhbmNpbmcpIHtcclxuICAgICAgICB2YXIgQ29uc3RhbnRzO1xyXG4gICAgICAgIChmdW5jdGlvbiAoQ29uc3RhbnRzKSB7XHJcbiAgICAgICAgICAgIHZhciBMaXRlT3BLZXkgPSBQaG90b24uTGl0ZS5Db25zdGFudHMuTGl0ZU9wS2V5O1xyXG4gICAgICAgICAgICB2YXIgTGl0ZU9wQ29kZSA9IFBob3Rvbi5MaXRlLkNvbnN0YW50cy5MaXRlT3BDb2RlO1xyXG4gICAgICAgICAgICB2YXIgTGl0ZUV2ZW50Q29kZSA9IFBob3Rvbi5MaXRlLkNvbnN0YW50cy5MaXRlRXZlbnRDb2RlO1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IE1hc3RlciBhbmQgR2FtZSBzZXJ2ZXJzIGVycm9yIGNvZGVzLlxyXG4gICAgICAgICAgICAgICAgQG1lbWJlciBQaG90b24uTG9hZEJhbGFuY2luZy5Db25zdGFudHMuRXJyb3JDb2RlXHJcbiAgICAgICAgICAgICAgICBAcmVhZG9ubHlcclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBPayBObyBFcnJvci5cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBPcGVyYXRpb25Ob3RBbGxvd2VkSW5DdXJyZW50U3RhdGUgT3BlcmF0aW9uIGNhbid0IGJlIGV4ZWN1dGVkIHlldC5cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBJbnZhbGlkT3BlcmF0aW9uQ29kZSBUaGUgb3BlcmF0aW9uIHlvdSBjYWxsZWQgaXMgbm90IGltcGxlbWVudGVkIG9uIHRoZSBzZXJ2ZXIgKGFwcGxpY2F0aW9uKSB5b3UgY29ubmVjdCB0by4gTWFrZSBzdXJlIHlvdSBydW4gdGhlIGZpdHRpbmcgYXBwbGljYXRpb25zLlxyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtudW1iZXJ9IEludGVybmFsU2VydmVyRXJyb3IgU29tZXRoaW5nIHdlbnQgd3JvbmcgaW4gdGhlIHNlcnZlci4gVHJ5IHRvIHJlcHJvZHVjZSBhbmQgY29udGFjdCBFeGl0IEdhbWVzLlxyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtudW1iZXJ9IEludmFsaWRBdXRoZW50aWNhdGlvbiBBdXRoZW50aWNhdGlvbiBmYWlsZWQuIFBvc3NpYmxlIGNhdXNlOiBBcHBJZCBpcyB1bmtub3duIHRvIFBob3RvbiAoaW4gY2xvdWQgc2VydmljZSkuXHJcbiAgICAgICAgICAgICAgICBAcHJvcGVydHkge251bWJlcn0gR2FtZUlkQWxyZWFkeUV4aXN0cyBHYW1lSWQgKG5hbWUpIGFscmVhZHkgaW4gdXNlIChjYW4ndCBjcmVhdGUgYW5vdGhlcikuIENoYW5nZSBuYW1lLlxyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtudW1iZXJ9IEdhbWVGdWxsIEdhbWUgaXMgZnVsbC4gVGhpcyBjYW4gd2hlbiBwbGF5ZXJzIHRvb2sgb3ZlciB3aGlsZSB5b3Ugam9pbmVkIHRoZSBnYW1lLlxyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtudW1iZXJ9IEdhbWVDbG9zZWQgR2FtZSBpcyBjbG9zZWQgYW5kIGNhbid0IGJlIGpvaW5lZC4gSm9pbiBhbm90aGVyIGdhbWUuXHJcbiAgICAgICAgICAgICAgICBAcHJvcGVydHkge251bWJlcn0gTm9SYW5kb21NYXRjaEZvdW5kIFJhbmRvbSBtYXRjaG1ha2luZyBvbmx5IHN1Y2NlZWRzIGlmIGEgcm9vbSBleGlzdHMgdGhhdHMgbmVpdGhlciBjbG9zZWQgbm9yIGZ1bGwuIFJlcGVhdCBpbiBhIGZldyBzZWNvbmRzIG9yIGNyZWF0ZSBhIG5ldyByb29tLlxyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtudW1iZXJ9IEdhbWVEb2VzTm90RXhpc3QgSm9pbiBjYW4gZmFpbCBpZiB0aGUgcm9vbSAobmFtZSkgaXMgbm90IGV4aXN0aW5nIChhbnltb3JlKS4gVGhpcyBjYW4gaGFwcGVuIHdoZW4gcGxheWVycyBsZWF2ZSB3aGlsZSB5b3Ugam9pbi5cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBNYXhDY3VSZWFjaGVkIEF1dGhvcml6YXRpb24gb24gdGhlIFBob3RvbiBDbG91ZCBmYWlsZWQgYmVjYXVzIHRoZSBjb25jdXJyZW50IHVzZXJzIChDQ1UpIGxpbWl0IG9mIHRoZSBhcHAncyBzdWJzY3JpcHRpb24gaXMgcmVhY2hlZC5cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBJbnZhbGlkUmVnaW9uIEF1dGhvcml6YXRpb24gb24gdGhlIFBob3RvbiBDbG91ZCBmYWlsZWQgYmVjYXVzZSB0aGUgYXBwJ3Mgc3Vic2NyaXB0aW9uIGRvZXMgbm90IGFsbG93IHRvIHVzZSBhIHBhcnRpY3VsYXIgcmVnaW9uJ3Mgc2VydmVyLlxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBDb25zdGFudHMuRXJyb3JDb2RlID0ge1xyXG4gICAgICAgICAgICAgICAgT2s6IDAsXHJcbiAgICAgICAgICAgICAgICAvLyBzZXJ2ZXIgLSBQaG90b24gbG93KGVyKSBsZXZlbDogPDogMFxyXG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgLy8vICgtMykgT3BlcmF0aW9uIGNhbid0IGJlIGV4ZWN1dGVkIHlldCAoZS5nLiBPcEpvaW4gY2FuJ3QgYmUgY2FsbGVkIGJlZm9yZSBiZWluZyBhdXRoZW50aWNhdGVkLCBSYWlzZUV2ZW50IGNhbnQgYmUgdXNlZCBiZWZvcmUgZ2V0dGluZyBpbnRvIGEgcm9vbSkuXHJcbiAgICAgICAgICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgLy8vIDxyZW1hcmtzPlxyXG4gICAgICAgICAgICAgICAgLy8vIEJlZm9yZSB5b3UgY2FsbCBhbnkgb3BlcmF0aW9ucyBvbiB0aGUgQ2xvdWQgc2VydmVycywgdGhlIGF1dG9tYXRlZCBjbGllbnQgd29ya2Zsb3cgbXVzdCBjb21wbGV0ZSBpdHMgYXV0aG9yaXphdGlvbi5cclxuICAgICAgICAgICAgICAgIC8vLyBJbiBQVU4sIHdhaXQgdW50aWwgU3RhdGUgaXM6IEpvaW5lZExvYmJ5ICh3aXRoIEF1dG9Kb2luTG9iYnkgOiB0cnVlKSBvciBDb25uZWN0ZWRUb01hc3RlciAoQXV0b0pvaW5Mb2JieSA6IGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgLy8vIDwvcmVtYXJrcz5cclxuICAgICAgICAgICAgICAgIE9wZXJhdGlvbk5vdEFsbG93ZWRJbkN1cnJlbnRTdGF0ZTogLTMsXHJcbiAgICAgICAgICAgICAgICAvLy8gPHN1bW1hcnk+KC0yKSBUaGUgb3BlcmF0aW9uIHlvdSBjYWxsZWQgaXMgbm90IGltcGxlbWVudGVkIG9uIHRoZSBzZXJ2ZXIgKGFwcGxpY2F0aW9uKSB5b3UgY29ubmVjdCB0by4gTWFrZSBzdXJlIHlvdSBydW4gdGhlIGZpdHRpbmcgYXBwbGljYXRpb25zLjwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIEludmFsaWRPcGVyYXRpb25Db2RlOiAtMixcclxuICAgICAgICAgICAgICAgIC8vLyA8c3VtbWFyeT4oLTEpIFNvbWV0aGluZyB3ZW50IHdyb25nIGluIHRoZSBzZXJ2ZXIuIFRyeSB0byByZXByb2R1Y2UgYW5kIGNvbnRhY3QgRXhpdCBHYW1lcy48L3N1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICBJbnRlcm5hbFNlcnZlckVycm9yOiAtMSxcclxuICAgICAgICAgICAgICAgIC8vIHNlcnZlciAtIFBob3Rvbk5ldHdvcms6IDB4N0ZGRiBhbmQgZG93blxyXG4gICAgICAgICAgICAgICAgLy8gbG9naWMtbGV2ZWwgZXJyb3IgY29kZXMgc3RhcnQgd2l0aCBzaG9ydC5tYXhcclxuICAgICAgICAgICAgICAgIC8vLyA8c3VtbWFyeT4oMzI3NjcpIEF1dGhlbnRpY2F0aW9uIGZhaWxlZC4gUG9zc2libGUgY2F1c2U6IEFwcElkIGlzIHVua25vd24gdG8gUGhvdG9uIChpbiBjbG91ZCBzZXJ2aWNlKS48L3N1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICBJbnZhbGlkQXV0aGVudGljYXRpb246IDB4N0ZGRixcclxuICAgICAgICAgICAgICAgIC8vLyA8c3VtbWFyeT4oMzI3NjYpIEdhbWVJZCAobmFtZSkgYWxyZWFkeSBpbiB1c2UgKGNhbid0IGNyZWF0ZSBhbm90aGVyKS4gQ2hhbmdlIG5hbWUuPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgR2FtZUlkQWxyZWFkeUV4aXN0czogMHg3RkZGIC0gMSxcclxuICAgICAgICAgICAgICAgIC8vLyA8c3VtbWFyeT4oMzI3NjUpIEdhbWUgaXMgZnVsbC4gVGhpcyBjYW4gd2hlbiBwbGF5ZXJzIHRvb2sgb3ZlciB3aGlsZSB5b3Ugam9pbmVkIHRoZSBnYW1lLjwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIEdhbWVGdWxsOiAweDdGRkYgLSAyLFxyXG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PigzMjc2NCkgR2FtZSBpcyBjbG9zZWQgYW5kIGNhbid0IGJlIGpvaW5lZC4gSm9pbiBhbm90aGVyIGdhbWUuPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgR2FtZUNsb3NlZDogMHg3RkZGIC0gMyxcclxuICAgICAgICAgICAgICAgIC8vIEFscmVhZHlNYXRjaGVkOiAweDdGRkYgLSA0LFxyXG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PigzMjc2MikgTm90IGluIHVzZSBjdXJyZW50bHkuPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgLy8gU2VydmVyRnVsbDogMHg3RkZGIC0gNSxcclxuICAgICAgICAgICAgICAgIC8vLyA8c3VtbWFyeT4oMzI3NjEpIE5vdCBpbiB1c2UgY3VycmVudGx5Ljwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIC8vIFVzZXJCbG9ja2VkOiAweDdGRkYgLSA2LFxyXG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PigzMjc2MCkgUmFuZG9tIG1hdGNobWFraW5nIG9ubHkgc3VjY2VlZHMgaWYgYSByb29tIGV4aXN0cyB0aGF0cyBuZWl0aGVyIGNsb3NlZCBub3IgZnVsbC4gUmVwZWF0IGluIGEgZmV3IHNlY29uZHMgb3IgY3JlYXRlIGEgbmV3IHJvb20uPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgTm9SYW5kb21NYXRjaEZvdW5kOiAweDdGRkYgLSA3LFxyXG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PigzMjc1OCkgSm9pbiBjYW4gZmFpbCBpZiB0aGUgcm9vbSAobmFtZSkgaXMgbm90IGV4aXN0aW5nIChhbnltb3JlKS4gVGhpcyBjYW4gaGFwcGVuIHdoZW4gcGxheWVycyBsZWF2ZSB3aGlsZSB5b3Ugam9pbi48L3N1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICBHYW1lRG9lc05vdEV4aXN0OiAweDdGRkYgLSA5LFxyXG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PigzMjc1NykgQXV0aG9yaXphdGlvbiBvbiB0aGUgUGhvdG9uIENsb3VkIGZhaWxlZCBiZWNhdXMgdGhlIGNvbmN1cnJlbnQgdXNlcnMgKENDVSkgbGltaXQgb2YgdGhlIGFwcCdzIHN1YnNjcmlwdGlvbiBpcyByZWFjaGVkLjwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIC8vLyA8cmVtYXJrcz5cclxuICAgICAgICAgICAgICAgIC8vLyBVbmxlc3MgeW91IGhhdmUgYSBwbGFuIHdpdGggXCJDQ1UgQnVyc3RcIiwgY2xpZW50cyBtaWdodCBmYWlsIHRoZSBhdXRoZW50aWNhdGlvbiBzdGVwIGR1cmluZyBjb25uZWN0LiBcclxuICAgICAgICAgICAgICAgIC8vLyBBZmZlY3RlZCBjbGllbnQgYXJlIHVuYWJsZSB0byBjYWxsIG9wZXJhdGlvbnMuIFBsZWFzZSBub3RlIHRoYXQgcGxheWVycyB3aG8gZW5kIGEgZ2FtZSBhbmQgcmV0dXJuIFxyXG4gICAgICAgICAgICAgICAgLy8vIHRvIHRoZSBNYXN0ZXIgc2VydmVyIHdpbGwgZGlzY29ubmVjdCBhbmQgcmUtY29ubmVjdCwgd2hpY2ggbWVhbnMgdGhhdCB0aGV5IGp1c3QgcGxheWVkIGFuZCBhcmUgcmVqZWN0ZWQgXHJcbiAgICAgICAgICAgICAgICAvLy8gaW4gdGhlIG5leHQgbWludXRlIC8gcmUtY29ubmVjdC5cclxuICAgICAgICAgICAgICAgIC8vLyBUaGlzIGlzIGEgdGVtcG9yYXJ5IG1lYXN1cmUuIE9uY2UgdGhlIENDVSBpcyBiZWxvdyB0aGUgbGltaXQsIHBsYXllcnMgd2lsbCBiZSBhYmxlIHRvIGNvbm5lY3QgYW4gcGxheSBhZ2Fpbi5cclxuICAgICAgICAgICAgICAgIC8vLyBcclxuICAgICAgICAgICAgICAgIC8vLyBPcEF1dGhvcml6ZSBpcyBwYXJ0IG9mIGNvbm5lY3Rpb24gd29ya2Zsb3cgYnV0IG9ubHkgb24gdGhlIFBob3RvbiBDbG91ZCwgdGhpcyBlcnJvciBjYW4gaGFwcGVuLiBcclxuICAgICAgICAgICAgICAgIC8vLyBTZWxmLWhvc3RlZCBQaG90b24gc2VydmVycyB3aXRoIGEgQ0NVIGxpbWl0ZWQgbGljZW5zZSB3b24ndCBsZXQgYSBjbGllbnQgY29ubmVjdCBhdCBhbGwuXHJcbiAgICAgICAgICAgICAgICAvLy8gPC9yZW1hcmtzPlxyXG4gICAgICAgICAgICAgICAgTWF4Q2N1UmVhY2hlZDogMHg3RkZGIC0gMTAsXHJcbiAgICAgICAgICAgICAgICAvLy8gPHN1bW1hcnk+KDMyNzU2KSBBdXRob3JpemF0aW9uIG9uIHRoZSBQaG90b24gQ2xvdWQgZmFpbGVkIGJlY2F1c2UgdGhlIGFwcCdzIHN1YnNjcmlwdGlvbiBkb2VzIG5vdCBhbGxvdyB0byB1c2UgYSBwYXJ0aWN1bGFyIHJlZ2lvbidzIHNlcnZlci48L3N1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICAvLy8gPHJlbWFya3M+XHJcbiAgICAgICAgICAgICAgICAvLy8gU29tZSBzdWJzY3JpcHRpb24gcGxhbnMgZm9yIHRoZSBQaG90b24gQ2xvdWQgYXJlIHJlZ2lvbi1ib3VuZC4gU2VydmVycyBvZiBvdGhlciByZWdpb25zIGNhbid0IGJlIHVzZWQgdGhlbi5cclxuICAgICAgICAgICAgICAgIC8vLyBDaGVjayB5b3VyIE1hc3RlciBzZXJ2ZXIgYWRkcmVzcyBhbmQgY29tcGFyZSBpdCB3aXRoIHlvdXIgUGhvdG9uIENsb3VkIERhc2hib2FyZCdzIGluZm8uXHJcbiAgICAgICAgICAgICAgICAvLy8gXHJcbiAgICAgICAgICAgICAgICAvLy8gT3BBdXRob3JpemUgaXMgcGFydCBvZiBjb25uZWN0aW9uIHdvcmtmbG93IGJ1dCBvbmx5IG9uIHRoZSBQaG90b24gQ2xvdWQsIHRoaXMgZXJyb3IgY2FuIGhhcHBlbi4gXHJcbiAgICAgICAgICAgICAgICAvLy8gU2VsZi1ob3N0ZWQgUGhvdG9uIHNlcnZlcnMgd2l0aCBhIENDVSBsaW1pdGVkIGxpY2Vuc2Ugd29uJ3QgbGV0IGEgY2xpZW50IGNvbm5lY3QgYXQgYWxsLlxyXG4gICAgICAgICAgICAgICAgLy8vIDwvcmVtYXJrcz5cclxuICAgICAgICAgICAgICAgIEludmFsaWRSZWdpb246IDB4N0ZGRiAtIDExLFxyXG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgLy8vICgzMjc1NSkgQ3VzdG9tIEF1dGhlbnRpY2F0aW9uIG9mIHRoZSB1c2VyIGZhaWxlZCBkdWUgdG8gc2V0dXAgcmVhc29ucyAoc2VlIENsb3VkIERhc2hib2FyZCkgb3IgdGhlIHByb3ZpZGVkIHVzZXIgZGF0YSAobGlrZSB1c2VybmFtZSBvciB0b2tlbikuIENoZWNrIGVycm9yIG1lc3NhZ2UgZm9yIGRldGFpbHMuXHJcbiAgICAgICAgICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgQ3VzdG9tQXV0aGVudGljYXRpb25GYWlsZWQ6IDB4N0ZGRiAtIDEyLFxyXG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PigzMjc1MykgVGhlIEF1dGhlbnRpY2F0aW9uIHRpY2tldCBleHBpcmVkLiBVc3VhbGx5LCB0aGlzIGlzIHJlZnJlc2hlZCBiZWhpbmQgdGhlIHNjZW5lcy4gQ29ubmVjdCAoYW5kIGF1dGhvcml6ZSkgYWdhaW4uPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgQXV0aGVudGljYXRpb25UaWNrZXRFeHBpcmVkOiAweDdGRjEsXHJcbiAgICAgICAgICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICAvLy8gKDMyNzUyKSBBIHNlcnZlci1zaWRlIHBsdWdpbiAob3Igd2ViaG9vaykgZmFpbGVkIHRvIGV4ZWN1dGUgYW5kIHJlcG9ydGVkIGFuIGVycm9yLiBDaGVjayB0aGUgT3BlcmF0aW9uUmVzcG9uc2UuRGVidWdNZXNzYWdlLlxyXG4gICAgICAgICAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIFBsdWdpblJlcG9ydGVkRXJyb3I6IDB4N0ZGRiAtIDE1LFxyXG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgLy8vICgzMjc1MSkgQ3JlYXRlR2FtZS9Kb2luR2FtZS9Kb2luIG9wZXJhdGlvbiBmYWlscyBpZiBleHBlY3RlZCBwbHVnaW4gZG9lcyBub3QgY29ycmVzcG9uZCB0byBsb2FkZWQgb25lLlxyXG4gICAgICAgICAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIFBsdWdpbk1pc21hdGNoOiAweDdGRkYgLSAxNixcclxuICAgICAgICAgICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIC8vLyAoMzI3NTApIGZvciBqb2luIHJlcXVlc3RzLiBJbmRpY2F0ZXMgdGhlIGN1cnJlbnQgcGVlciBhbHJlYWR5IGNhbGxlZCBqb2luIGFuZCBpcyBqb2luZWQgdG8gdGhlIHJvb20uXHJcbiAgICAgICAgICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgSm9pbkZhaWxlZFBlZXJBbHJlYWR5Sm9pbmVkOiAzMjc1MCxcclxuICAgICAgICAgICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIC8vLyAoMzI3NDkpICBmb3Igam9pbiByZXF1ZXN0cy4gSW5kaWNhdGVzIHRoZSBsaXN0IG9mIEluYWN0aXZlQWN0b3JzIGFscmVhZHkgY29udGFpbnMgYW4gYWN0b3Igd2l0aCB0aGUgcmVxdWVzdGVkIEFjdG9yTnIgb3IgVXNlcklkLlxyXG4gICAgICAgICAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIEpvaW5GYWlsZWRGb3VuZEluYWN0aXZlSm9pbmVyOiAzMjc0OSxcclxuICAgICAgICAgICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIC8vLyAoMzI3NDgpIGZvciBqb2luIHJlcXVlc3RzLiBJbmRpY2F0ZXMgdGhlIGxpc3Qgb2YgQWN0b3JzIChhY3RpdmUgYW5kIGluYWN0aXZlKSBkaWQgbm90IGNvbnRhaW4gYW4gYWN0b3Igd2l0aCB0aGUgcmVxdWVzdGVkIEFjdG9yTnIgb3IgVXNlcklkLlxyXG4gICAgICAgICAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIEpvaW5GYWlsZWRXaXRoUmVqb2luZXJOb3RGb3VuZDogMzI3NDgsXHJcbiAgICAgICAgICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICAvLy8gKDMyNzQ3KSBmb3Igam9pbiByZXF1ZXN0cy4gTm90ZTogZm9yIGZ1dHVyZSB1c2UgLSBJbmRpY2F0ZXMgdGhlIHJlcXVlc3RlZCBVc2VySWQgd2FzIGZvdW5kIGluIHRoZSBFeGNsdWRlZExpc3QuXHJcbiAgICAgICAgICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgSm9pbkZhaWxlZEZvdW5kRXhjbHVkZWRVc2VySWQ6IDMyNzQ3LFxyXG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgLy8vICgzMjc0NikgZm9yIGpvaW4gcmVxdWVzdHMuIEluZGljYXRlcyB0aGUgbGlzdCBvZiBBY3RpdmVBY3RvcnMgYWxyZWFkeSBjb250YWlucyBhbiBhY3RvciB3aXRoIHRoZSByZXF1ZXN0ZWQgQWN0b3JOciBvciBVc2VySWQuXHJcbiAgICAgICAgICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgSm9pbkZhaWxlZEZvdW5kQWN0aXZlSm9pbmVyOiAzMjc0NixcclxuICAgICAgICAgICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIC8vLyAoMzI3NDUpICBmb3IgU2V0UHJvZXJ0aWVzIGFuZCBSYWlzZXZlbnQgKGlmIGZsYWcgSHR0cEZvcndhcmQgaXMgdHJ1ZSkgcmVxdWVzdHMuIEluZGljYXRlcyB0aGUgbWF4aW11bSBhbGxvd2VkIGh0dHAgcmVxdWVzdHMgcGVyIG1pbnV0ZSB3YXMgcmVhY2hlZC5cclxuICAgICAgICAgICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICBIdHRwTGltaXRSZWFjaGVkOiAzMjc0NSxcclxuICAgICAgICAgICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIC8vLyAoMzI3NDQpIGZvciBXZWJScGMgcmVxdWVzdHMuIEluZGljYXRlcyB0aGUgdGhlIGNhbGwgdG8gdGhlIGV4dGVybmFsIHNlcnZpY2UgZmFpbGVkLlxyXG4gICAgICAgICAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIEV4dGVybmFsSHR0cENhbGxGYWlsZWQ6IDMyNzQ0LFxyXG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgLy8vICgzMjc0MikgU2VydmVyIGVycm9yIGR1cmluZyBtYXRjaG1ha2luZyB3aXRoIHNsb3QgcmVzZXJ2YXRpb24uIEUuZy4gdGhlIHJlc2VydmVkIHNsb3RzIGNhbiBub3QgZXhjZWVkIE1heFBsYXllcnMuXHJcbiAgICAgICAgICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgU2xvdEVycm9yOiAzMjc0MixcclxuICAgICAgICAgICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIC8vLyAoMzI3NDEpIFNlcnZlciB3aWxsIHJlYWN0IHdpdGggdGhpcyBlcnJvciBpZiBpbnZhbGlkIGVuY3J5cHRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBieSB0b2tlblxyXG4gICAgICAgICAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIEludmFsaWRFbmNyeXB0aW9uUGFyYW1ldGVyczogMzI3NDFcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgICAgICAvLy8gVGhlc2UgIHZhbHVlcyBkZWZpbmUgXCJ3ZWxsIGtub3duXCIgcHJvcGVydGllcyBmb3IgYW4gQWN0b3IgLyBQbGF5ZXIuXHJcbiAgICAgICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgICAgIC8vLyA8cmVtYXJrcz5cclxuICAgICAgICAgICAgLy8vIFwiQ3VzdG9tIHByb3BlcnRpZXNcIiBoYXZlIHRvIHVzZSBhIHN0cmluZy10eXBlIGFzIGtleS4gVGhleSBjYW4gYmUgYXNzaWduZWQgYXQgd2lsbC5cclxuICAgICAgICAgICAgLy8vIDwvcmVtYXJrcz5cclxuICAgICAgICAgICAgQ29uc3RhbnRzLkFjdG9yUHJvcGVydGllcyA9IHtcclxuICAgICAgICAgICAgICAgIC8vLyA8c3VtbWFyeT4oMjU1KSBOYW1lIG9mIGEgcGxheWVyL2FjdG9yLjwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIFBsYXllck5hbWU6IDI1NVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvKiogRW5kIHVzZXIgZG9lc24ndCBuZWVkIHRoaXMgKi9cclxuICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgICAgICAvLy8gVGhlc2UgIHZhbHVlcyBhcmUgZm9yIFwid2VsbCBrbm93blwiIHJvb20vZ2FtZSBwcm9wZXJ0aWVzIHVzZWQgaW4gUGhvdG9uIExvYWRiYWxhbmNpbmcuXHJcbiAgICAgICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgICAgIC8vLyA8cmVtYXJrcz5cclxuICAgICAgICAgICAgLy8vIFwiQ3VzdG9tIHByb3BlcnRpZXNcIiBoYXZlIHRvIHVzZSBhIHN0cmluZy10eXBlIGFzIGtleS4gVGhleSBjYW4gYmUgYXNzaWduZWQgYXQgd2lsbC5cclxuICAgICAgICAgICAgLy8vIDwvcmVtYXJrcz5cclxuICAgICAgICAgICAgQ29uc3RhbnRzLkdhbWVQcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PigyNTUpIE1heCBudW1iZXIgb2YgcGxheWVycyB0aGF0IFwiZml0XCIgaW50byB0aGlzIHJvb20uIDAgaXMgZm9yIFwidW5saW1pdGVkXCIuPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgTWF4UGxheWVyczogMjU1LFxyXG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PigyNTQpIE1ha2VzIHRoaXMgcm9vbSBsaXN0ZWQgb3Igbm90IGluIHRoZSBsb2JieSBvbiBNYXN0ZXIuPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgSXNWaXNpYmxlOiAyNTQsXHJcbiAgICAgICAgICAgICAgICAvLy8gPHN1bW1hcnk+KDI1MykgQWxsb3dzIG1vcmUgcGxheWVycyB0byBqb2luIGEgcm9vbSAob3Igbm90KS48L3N1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICBJc09wZW46IDI1MyxcclxuICAgICAgICAgICAgICAgIC8vLyA8c3VtbWFyeT4oMjUyKSBDdXJyZW50IGNvdW50IG9kIHBsYXllcnMgaW4gdGhlIHJvb20uIFVzZWQgb25seSBpbiB0aGUgbG9iYnkgb24gTWFzdGVyLjwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIFBsYXllckNvdW50OiAyNTIsXHJcbiAgICAgICAgICAgICAgICAvLy8gPHN1bW1hcnk+KDI1MSkgVHJ1ZSBpZiB0aGUgcm9vbSBpcyB0byBiZSByZW1vdmVkIGZyb20gcm9vbSBsaXN0aW5nICh1c2VkIGluIHVwZGF0ZSB0byByb29tIGxpc3QgaW4gbG9iYnkgb24gTWFzdGVyKTwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIFJlbW92ZWQ6IDI1MSxcclxuICAgICAgICAgICAgICAgIC8vLyA8c3VtbWFyeT4oMjUwKSBBIGxpc3Qgb2YgdGhlIHJvb20gcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBSb29tSW5mbyBsaXN0IGluIGEgbG9iYnkuIFRoaXMgaXMgdXNlZCBpbiBDcmVhdGVSb29tLCB3aGljaCBkZWZpbmVzIHRoaXMgbGlzdCBvbmNlIHBlciByb29tLjwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIFByb3BzTGlzdGVkSW5Mb2JieTogMjUwLFxyXG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PkVxdWl2YWxlbnQgb2YgT3BlcmF0aW9uIEpvaW4gcGFyYW1ldGVyIENsZWFudXBDYWNoZU9uTGVhdmUuPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgQ2xlYW51cENhY2hlT25MZWF2ZTogMjQ5LFxyXG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PigyNDgpIENvZGUgZm9yIE1hc3RlckNsaWVudElkLCB3aGljaCBpcyBzeW5jZWQgYnkgc2VydmVyLiBXaGVuIHNlbnQgYXMgb3AtcGFyYW1ldGVyIHRoaXMgaXMgKGJ5dGUpMjAzLiBBcyByb29tIHByb3BlcnR5IHRoaXMgaXMgKGJ5dGUpMjQ4Ljwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIC8vLyA8cmVtYXJrcz5UaWdodGx5IHJlbGF0ZWQgdG8gUGFyYW1ldGVyQ29kZS5NYXN0ZXJDbGllbnRJZC48L3JlbWFya3M+XHJcbiAgICAgICAgICAgICAgICBNYXN0ZXJDbGllbnRJZDogMjQ4LFxyXG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PigyNDYpIFBsYXllciBUaW1lIFRvIExpdmUuIEhvdyBsb25nIGFueSBwbGF5ZXIgY2FuIGJlIGluYWN0aXZlIChkdWUgdG8gZGlzY29ubmVjdCBvciBsZWF2ZSkgYmVmb3JlIHRoZSB1c2VyIGdldHMgcmVtb3ZlZCBmcm9tIHRoZSBwbGF5ZXJsaXN0IChmcmVlaW5nIGEgc2xvdCkuPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgUGxheWVyVHRsOiAyNDYsXHJcbiAgICAgICAgICAgICAgICAvLy8gPHN1bW1hcnk+KDI0NSkgUm9vbSBUaW1lIFRvIExpdmUuIEhvdyBsb25nIGEgcm9vbSBzdGF5cyBhdmFpbGFibGUgKGFuZCBpbiBzZXJ2ZXItbWVtb3J5KSwgYWZ0ZXIgdGhlIGxhc3QgcGxheWVyIGJlY29tZXMgaW5hY3RpdmUuIEFmdGVyIHRoaXMgdGltZSwgdGhlIHJvb20gZ2V0cyBwZXJzaXN0ZWQgb3IgZGVzdHJveWVkLjwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIEVtcHR5Um9vbVR0bDogMjQ1XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8qKiBFbmQgdXNlciBkb2Vzbid0IG5lZWQgdGhpcyAqL1xyXG4gICAgICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgICAgIC8vLyBUaGVzZSB2YWx1ZXMgYXJlIGZvciBldmVudHMgZGVmaW5lZCBieSBQaG90b24gTG9hZGJhbGFuY2luZy5cclxuICAgICAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICAgICAgLy8vIDxyZW1hcmtzPlRoZXkgc3RhcnQgYXQgMjU1IGFuZCBnbyBET1dOLiBZb3VyIG93biBpbi1nYW1lIGV2ZW50cyBjYW4gc3RhcnQgYXQgMC48L3JlbWFya3M+XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5FdmVudENvZGUgPSB7XHJcbiAgICAgICAgICAgICAgICAvLy8gPHN1bW1hcnk+KDIzMCkgSW5pdGlhbCBsaXN0IG9mIFJvb21JbmZvcyAoaW4gbG9iYnkgb24gTWFzdGVyKTwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIEdhbWVMaXN0OiAyMzAsXHJcbiAgICAgICAgICAgICAgICAvLy8gPHN1bW1hcnk+KDIyOSkgVXBkYXRlIG9mIFJvb21JbmZvcyB0byBiZSBtZXJnZWQgaW50byBcImluaXRpYWxcIiBsaXN0IChpbiBsb2JieSBvbiBNYXN0ZXIpPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgR2FtZUxpc3RVcGRhdGU6IDIyOSxcclxuICAgICAgICAgICAgICAgIC8vLyA8c3VtbWFyeT4oMjI4KSBDdXJyZW50bHkgbm90IHVzZWQuIFN0YXRlIG9mIHF1ZXVlaW5nIGluIGNhc2Ugb2Ygc2VydmVyLWZ1bGw8L3N1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICBRdWV1ZVN0YXRlOiAyMjgsXHJcbiAgICAgICAgICAgICAgICAvLy8gPHN1bW1hcnk+KDIyNykgQ3VycmVudGx5IG5vdCB1c2VkLiBFdmVudCBmb3IgbWF0Y2htYWtpbmc8L3N1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICAvLyBNYXRjaDogMjI3LFxyXG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PigyMjYpIEV2ZW50IHdpdGggc3RhdHMgYWJvdXQgdGhpcyBhcHBsaWNhdGlvbiAocGxheWVycywgcm9vbXMsIGV0Yyk8L3N1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICBBcHBTdGF0czogMjI2LFxyXG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PigyMTApIEludGVybmFsbHkgdXNlZCBpbiBjYXNlIG9mIGhvc3RpbmcgYnkgQXp1cmU8L3N1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICBBenVyZU5vZGVJbmZvOiAyMTAsXHJcbiAgICAgICAgICAgICAgICAvLy8gPHN1bW1hcnk+KDI1NSkgRXZlbnQgSm9pbjogc29tZW9uZSBqb2luZWQgdGhlIGdhbWUuIFRoZSBuZXcgYWN0b3JOdW1iZXIgaXMgcHJvdmlkZWQgYXMgd2VsbCBhcyB0aGUgcHJvcGVydGllcyBvZiB0aGF0IGFjdG9yIChpZiBzZXQgaW4gT3BKb2luKS48L3N1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICBKb2luOiBMaXRlRXZlbnRDb2RlLkpvaW4sXHJcbiAgICAgICAgICAgICAgICAvLy8gPHN1bW1hcnk+KDI1NCkgRXZlbnQgTGVhdmU6IFRoZSBwbGF5ZXIgd2hvIGxlZnQgdGhlIGdhbWUgY2FuIGJlIGlkZW50aWZpZWQgYnkgdGhlIGFjdG9yTnVtYmVyLjwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIExlYXZlOiBMaXRlRXZlbnRDb2RlLkxlYXZlLFxyXG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PigyNTMpIFdoZW4geW91IGNhbGwgT3BTZXRQcm9wZXJ0aWVzIHdpdGggdGhlIGJyb2FkY2FzdCBvcHRpb24gXCJvblwiLCB0aGlzIGV2ZW50IGlzIGZpcmVkLiBJdCBjb250YWlucyB0aGUgcHJvcGVydGllcyBiZWluZyBzZXQuPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgUHJvcGVydGllc0NoYW5nZWQ6IExpdGVFdmVudENvZGUuUHJvcGVydGllc0NoYW5nZWQsXHJcbiAgICAgICAgICAgICAgICAvLy8gPHN1bW1hcnk+KDI1MikgV2hlbiBwbGF5ZXIgbGVmdCBnYW1lIHVuZXhwZWNhYmxlIGFuZCBwbGF5ZXJUdGwgPiAwIHRoaXMgZXZlbnQgaXMgZmlyZWQ8L3N1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICBEaXNjb25uZWN0OiAyNTIsXHJcbiAgICAgICAgICAgICAgICBMb2JieVN0YXRzOiAyMjRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLyoqIEVuZCB1c2VyIGRvZXNuJ3QgbmVlZCB0aGlzICovXHJcbiAgICAgICAgICAgIC8vLyA8c3VtbWFyeT5Db2RlcyBmb3IgcGFyYW1ldGVycyBvZiBPcGVyYXRpb25zIGFuZCBFdmVudHMuPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICBDb25zdGFudHMuUGFyYW1ldGVyQ29kZSA9IHtcclxuICAgICAgICAgICAgICAgIC8vLyA8c3VtbWFyeT4oMjMwKSBBZGRyZXNzIG9mIGEgKEdhbWUpIHNlcnZlciB0byB1c2UuPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgQWRkcmVzczogMjMwLFxyXG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PigyMjkpIENvdW50IG9mIHBsYXllcnMgaW4gdGhpcyBhcHBsaWNhdGlvbiBpbiBhIHJvb21zICh1c2VkIGluIHN0YXRzIGV2ZW50KTwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIFBlZXJDb3VudDogMjI5LFxyXG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PigyMjgpIENvdW50IG9mIGdhbWVzIGluIHRoaXMgYXBwbGljYXRpb24gKHVzZWQgaW4gc3RhdHMgZXZlbnQpPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgR2FtZUNvdW50OiAyMjgsXHJcbiAgICAgICAgICAgICAgICAvLy8gPHN1bW1hcnk+KDIyNykgQ291bnQgb2YgcGxheWVycyBvbiB0aGUgTWFzdGVyIHNlcnZlciAoaW4gdGhpcyBhcHAsIGxvb2tpbmcgZm9yIHJvb21zKTwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIE1hc3RlclBlZXJDb3VudDogMjI3LFxyXG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PigyMjUpIFVzZXIncyBJRDwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIFVzZXJJZDogMjI1LFxyXG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PigyMjQpIFlvdXIgYXBwbGljYXRpb24ncyBJRDogYSBuYW1lIG9uIHlvdXIgb3duIFBob3RvbiBvciBhIEdVSUQgb24gdGhlIFBob3RvbiBDbG91ZDwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uSWQ6IDIyNCxcclxuICAgICAgICAgICAgICAgIC8vLyA8c3VtbWFyeT4oMjIzKSBOb3QgdXNlZCBjdXJyZW50bHkgKGFzIFwiUG9zaXRpb25cIikuIElmIHlvdSBnZXQgcXVldWVkIGJlZm9yZSBjb25uZWN0LCB0aGlzIGlzIHlvdXIgcG9zaXRpb248L3N1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICBQb3NpdGlvbjogMjIzLFxyXG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PigyMjMpIE1vZGlmaWVzIHRoZSBtYXRjaG1ha2luZyBhbGdvcml0aG0gdXNlZCBmb3IgT3BKb2luUmFuZG9tLiBBbGxvd2VkIHBhcmFtZXRlciB2YWx1ZXMgYXJlIGRlZmluZWQgaW4gZW51bSBNYXRjaG1ha2luZ01vZGUuPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgTWF0Y2hNYWtpbmdUeXBlOiAyMjMsXHJcbiAgICAgICAgICAgICAgICAvLy8gPHN1bW1hcnk+KDIyMikgTGlzdCBvZiBSb29tSW5mb3MgYWJvdXQgb3BlbiAvIGxpc3RlZCByb29tczwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIEdhbWVMaXN0OiAyMjIsXHJcbiAgICAgICAgICAgICAgICAvLy8gPHN1bW1hcnk+KDIyMSkgSW50ZXJuYWxseSB1c2VkIHRvIGVzdGFibGlzaCBlbmNyeXB0aW9uPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgU2VjcmV0OiAyMjEsXHJcbiAgICAgICAgICAgICAgICAvLy8gPHN1bW1hcnk+KDIyMCkgVmVyc2lvbiBvZiB5b3VyIGFwcGxpY2F0aW9uPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgQXBwVmVyc2lvbjogMjIwLFxyXG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PigyMTApIEludGVybmFsbHkgdXNlZCBpbiBjYXNlIG9mIGhvc3RpbmcgYnkgQXp1cmU8L3N1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICBBenVyZU5vZGVJbmZvOiAyMTAsXHJcbiAgICAgICAgICAgICAgICAvLy8gPHN1bW1hcnk+KDIwOSkgSW50ZXJuYWxseSB1c2VkIGluIGNhc2Ugb2YgaG9zdGluZyBieSBBenVyZTwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIEF6dXJlTG9jYWxOb2RlSWQ6IDIwOSxcclxuICAgICAgICAgICAgICAgIC8vLyA8c3VtbWFyeT4oMjA4KSBJbnRlcm5hbGx5IHVzZWQgaW4gY2FzZSBvZiBob3N0aW5nIGJ5IEF6dXJlPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgQXp1cmVNYXN0ZXJOb2RlSWQ6IDIwOCxcclxuICAgICAgICAgICAgICAgIC8vLyA8c3VtbWFyeT4oMjU1KSBDb2RlIGZvciB0aGUgZ2FtZUlkL3Jvb21OYW1lIChhIHVuaXF1ZSBuYW1lIHBlciByb29tKS4gVXNlZCBpbiBPcEpvaW4gYW5kIHNpbWlsYXIuPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgUm9vbU5hbWU6IExpdGVPcEtleS5HYW1lSWQsXHJcbiAgICAgICAgICAgICAgICAvLy8gPHN1bW1hcnk+KDI1MCkgQ29kZSBmb3IgYnJvYWRjYXN0IHBhcmFtZXRlciBvZiBPcFNldFByb3BlcnRpZXMgbWV0aG9kLjwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIEJyb2FkY2FzdDogTGl0ZU9wS2V5LkJyb2FkY2FzdCxcclxuICAgICAgICAgICAgICAgIC8vLyA8c3VtbWFyeT4oMjUyKSBDb2RlIGZvciBsaXN0IG9mIHBsYXllcnMgaW4gYSByb29tLiBDdXJyZW50bHkgbm90IHVzZWQuPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgQWN0b3JMaXN0OiBMaXRlT3BLZXkuQWN0b3JMaXN0LFxyXG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PigyNTQpIENvZGUgb2YgdGhlIEFjdG9yIG9mIGFuIG9wZXJhdGlvbi4gVXNlZCBmb3IgcHJvcGVydHkgZ2V0IGFuZCBzZXQuPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgQWN0b3JOcjogTGl0ZU9wS2V5LkFjdG9yTnIsXHJcbiAgICAgICAgICAgICAgICAvLy8gPHN1bW1hcnk+KDI0OSkgQ29kZSBmb3IgcHJvcGVydHkgc2V0IChIYXNodGFibGUpLjwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIFBsYXllclByb3BlcnRpZXM6IExpdGVPcEtleS5BY3RvclByb3BlcnRpZXMsXHJcbiAgICAgICAgICAgICAgICAvLy8gPHN1bW1hcnk+KDI0NSkgQ29kZSBvZiBkYXRhL2N1c3RvbSBjb250ZW50IG9mIGFuIGV2ZW50LiBVc2VkIGluIE9wUmFpc2VFdmVudC48L3N1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICBDdXN0b21FdmVudENvbnRlbnQ6IExpdGVPcEtleS5EYXRhLFxyXG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PigyNDUpIENvZGUgb2YgZGF0YSBvZiBhbiBldmVudC4gVXNlZCBpbiBPcFJhaXNlRXZlbnQuPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgRGF0YTogTGl0ZU9wS2V5LkRhdGEsXHJcbiAgICAgICAgICAgICAgICAvLy8gPHN1bW1hcnk+KDI0NCkgQ29kZSB1c2VkIHdoZW4gc2VuZGluZyBzb21lIGNvZGUtcmVsYXRlZCBwYXJhbWV0ZXIsIGxpa2UgT3BSYWlzZUV2ZW50J3MgZXZlbnQtY29kZS48L3N1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICAvLy8gPHJlbWFya3M+VGhpcyBpcyBub3QgdGhlIHNhbWUgYXMgdGhlIE9wZXJhdGlvbidzIGNvZGUsIHdoaWNoIGlzIG5vIGxvbmdlciBzZW50IGFzIHBhcnQgb2YgdGhlIHBhcmFtZXRlciBEaWN0aW9uYXJ5IGluIFBob3RvbiAzLjwvcmVtYXJrcz5cclxuICAgICAgICAgICAgICAgIENvZGU6IExpdGVPcEtleS5Db2RlLFxyXG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PigyNDgpIENvZGUgZm9yIHByb3BlcnR5IHNldCAoSGFzaHRhYmxlKS48L3N1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICBHYW1lUHJvcGVydGllczogTGl0ZU9wS2V5LkdhbWVQcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgLy8vICgyNTEpIENvZGUgZm9yIHByb3BlcnR5LXNldCAoSGFzaHRhYmxlKS4gVGhpcyBrZXkgaXMgdXNlZCB3aGVuIHNlbmRpbmcgb25seSBvbmUgc2V0IG9mIHByb3BlcnRpZXMuXHJcbiAgICAgICAgICAgICAgICAvLy8gSWYgZWl0aGVyIEFjdG9yUHJvcGVydGllcyBvciBHYW1lUHJvcGVydGllcyBhcmUgdXNlZCAob3IgYm90aCksIGNoZWNrIHRob3NlIGtleXMuXHJcbiAgICAgICAgICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgUHJvcGVydGllczogTGl0ZU9wS2V5LlByb3BlcnRpZXMsXHJcbiAgICAgICAgICAgICAgICAvLy8gPHN1bW1hcnk+KDI1MykgQ29kZSBvZiB0aGUgdGFyZ2V0IEFjdG9yIG9mIGFuIG9wZXJhdGlvbi4gVXNlZCBmb3IgcHJvcGVydHkgc2V0LiBJcyAwIGZvciBnYW1lPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgVGFyZ2V0QWN0b3JOcjogTGl0ZU9wS2V5LlRhcmdldEFjdG9yTnIsXHJcbiAgICAgICAgICAgICAgICAvLy8gPHN1bW1hcnk+KDI0NikgQ29kZSB0byBzZWxlY3QgdGhlIHJlY2VpdmVycyBvZiBldmVudHMgKHVzZWQgaW4gTGl0ZSwgT3BlcmF0aW9uIFJhaXNlRXZlbnQpLjwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIFJlY2VpdmVyR3JvdXA6IExpdGVPcEtleS5SZWNlaXZlckdyb3VwLFxyXG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PigyNDcpIENvZGUgZm9yIGNhY2hpbmcgZXZlbnRzIHdoaWxlIHJhaXNpbmcgdGhlbS48L3N1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICBDYWNoZTogTGl0ZU9wS2V5LkNhY2hlLFxyXG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PigyNDEpIEJvb2xlYW4gcGFyYW1ldGVyIG9mIENyZWF0ZUdhbWUgT3BlcmF0aW9uLiBJZiB0cnVlLCBzZXJ2ZXIgY2xlYW5zIHVwIHJvb21jYWNoZSBvZiBsZWF2aW5nIHBsYXllcnMgKHRoZWlyIGNhY2hlZCBldmVudHMgZ2V0IHJlbW92ZWQpLjwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIENsZWFudXBDYWNoZU9uTGVhdmU6IDI0MSxcclxuICAgICAgICAgICAgICAgIC8vLyA8c3VtbWFyeT4oMjQwKSBDb2RlIGZvciBcImdyb3VwXCIgb3BlcmF0aW9uLXBhcmFtZXRlciAoYXMgdXNlZCBpbiBPcCBSYWlzZUV2ZW50KS48L3N1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICBHcm91cDogTGl0ZU9wS2V5Lkdyb3VwLFxyXG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PigyMzkpIFRoZSBcIlJlbW92ZVwiIG9wZXJhdGlvbi1wYXJhbWV0ZXIgY2FuIGJlIHVzZWQgdG8gcmVtb3ZlIHNvbWV0aGluZyBmcm9tIGEgbGlzdC4gRS5nLiByZW1vdmUgZ3JvdXBzIGZyb20gcGxheWVyJ3MgaW50ZXJlc3QgZ3JvdXBzLjwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIFJlbW92ZTogTGl0ZU9wS2V5LlJlbW92ZSxcclxuICAgICAgICAgICAgICAgIC8vLyA8c3VtbWFyeT4oMjM4KSBUaGUgXCJBZGRcIiBvcGVyYXRpb24tcGFyYW1ldGVyIGNhbiBiZSB1c2VkIHRvIGFkZCBzb21ldGhpbmcgdG8gc29tZSBsaXN0IG9yIHNldC4gRS5nLiBhZGQgZ3JvdXBzIHRvIHBsYXllcidzIGludGVyZXN0IGdyb3Vwcy48L3N1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICBBZGQ6IExpdGVPcEtleS5BZGQsXHJcbiAgICAgICAgICAgICAgICAvLy8gPHN1bW1hcnk+KDIzNikgQSBwYXJhbWV0ZXIgaW5kaWNhdGluZyBob3cgbG9uZyBhIHJvb20gaW5zdGFuY2Ugc2hvdWxkIGJlIGtlZXBlZCBhbGl2ZSBpbiB0aGUgcm9vbSBjYWNoZSBhZnRlciBhbGwgcGxheWVycyBsZWZ0IHRoZSByb29tLjwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIEVtcHR5Um9vbVRUTDogTGl0ZU9wS2V5LkVtcHR5Um9vbUxpdmVUaW1lLFxyXG4gICAgICAgICAgICAgICAgUGxheWVyVFRMOiAyMzUsXHJcbiAgICAgICAgICAgICAgICBQbHVnaW5zOiAyMDQsXHJcbiAgICAgICAgICAgICAgICAvLy8gPHN1bW1hcnk+KDIxNykgVGhpcyBrZXkncyAoYnl0ZSkgdmFsdWUgZGVmaW5lcyB0aGUgdGFyZ2V0IGN1c3RvbSBhdXRoZW50aWNhdGlvbiB0eXBlL3NlcnZpY2UgdGhlIGNsaWVudCBjb25uZWN0cyB3aXRoLiBVc2VkIGluIE9wQXV0aGVudGljYXRlLjwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIENsaWVudEF1dGhlbnRpY2F0aW9uVHlwZTogMjE3LFxyXG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PigyMTYpIFRoaXMga2V5J3MgKHN0cmluZykgdmFsdWUgcHJvdmlkZXMgcGFyYW1ldGVycyBzZW50IHRvIHRoZSBjdXN0b20gYXV0aGVudGljYXRpb24gdHlwZS9zZXJ2aWNlIHRoZSBjbGllbnQgY29ubmVjdHMgd2l0aC4gVXNlZCBpbiBPcEF1dGhlbnRpY2F0ZS48L3N1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICBDbGllbnRBdXRoZW50aWNhdGlvblBhcmFtczogMjE2LFxyXG4gICAgICAgICAgICAgICAgQ2xpZW50QXV0aGVudGljYXRpb25EYXRhOiAyMTQsXHJcbiAgICAgICAgICAgICAgICAvLy8gPHN1bW1hcnk+KDIxNSkgVGhlIEpvaW5Nb2RlIGVudW0gZGVmaW5lcyB3aGljaCB2YXJpYW50IG9mIGpvaW5pbmcgYSByb29tIHdpbGwgYmUgZXhlY3V0ZWQ6IEpvaW4gb25seSBpZiBhdmFpbGFibGUsIGNyZWF0ZSBpZiBub3QgZXhpc3RzIG9yIHJlIC1qb2luLjwvc3VtbWFyeSA+XHJcbiAgICAgICAgICAgICAgICAvLy8gPHJlbWFya3M+UmVwbGFjZXMgQ3JlYXRlSWZOb3RFeGlzdHMgd2hpY2ggd2FzIG9ubHkgYSBib29sIC12YWx1ZS48L3JlbWFya3MgPlxyXG4gICAgICAgICAgICAgICAgSm9pbk1vZGU6IDIxNSxcclxuICAgICAgICAgICAgICAgIC8vLyA8c3VtbWFyeT4oMjAzKSBDb2RlIGZvciBNYXN0ZXJDbGllbnRJZCwgd2hpY2ggaXMgc3luY2VkIGJ5IHNlcnZlci4gV2hlbiBzZW50IGFzIG9wLXBhcmFtZXRlciB0aGlzIGlzIGNvZGUgMjAzLjwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIC8vLyA8cmVtYXJrcz5UaWdodGx5IHJlbGF0ZWQgdG8gR2FtZVByb3BlcnR5S2V5Lk1hc3RlckNsaWVudElkLjwvcmVtYXJrcz5cclxuICAgICAgICAgICAgICAgIE1hc3RlckNsaWVudElkOiAyMDMsXHJcbiAgICAgICAgICAgICAgICAvLy8gPHN1bW1hcnk+KDEpIFVzZWQgaW4gT3AgRmluZEZyaWVuZHMgcmVxdWVzdC4gVmFsdWUgbXVzdCBiZSBzdHJpbmdbXSBvZiBmcmllbmRzIHRvIGxvb2sgdXAuPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgRmluZEZyaWVuZHNSZXF1ZXN0TGlzdDogMSxcclxuICAgICAgICAgICAgICAgIC8vLyA8c3VtbWFyeT4oMSkgVXNlZCBpbiBPcCBGaW5kRnJpZW5kcyByZXNwb25zZS4gQ29udGFpbnMgYm9vbGVhbltdIGxpc3Qgb2Ygb25saW5lIHN0YXRlcyAoZmFsc2UgaWYgbm90IG9ubGluZSkuPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgRmluZEZyaWVuZHNSZXNwb25zZU9ubGluZUxpc3Q6IDEsXHJcbiAgICAgICAgICAgICAgICAvLy8gPHN1bW1hcnk+KDIpIFVzZWQgaW4gT3AgRmluZEZyaWVuZHMgcmVzcG9uc2UuIENvbnRhaW5zIHN0cmluZ1tdIG9mIHJvb20gbmFtZXMgKFwiXCIgd2hlcmUgbm90IGtub3duIG9yIG5vIHJvb20gam9pbmVkKS48L3N1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICBGaW5kRnJpZW5kc1Jlc3BvbnNlUm9vbUlkTGlzdDogMixcclxuICAgICAgICAgICAgICAgIC8vLyA8c3VtbWFyeT4oMjEzKSBVc2VkIGluIG1hdGNobWFraW5nLXJlbGF0ZWQgbWV0aG9kcyBhbmQgd2hlbiBjcmVhdGluZyBhIHJvb20gdG8gbmFtZSBhIGxvYmJ5ICh0byBqb2luIG9yIHRvIGF0dGFjaCBhIHJvb20gdG8pLjwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIExvYmJ5TmFtZTogMjEzLFxyXG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PigyMTIpIFVzZWQgaW4gbWF0Y2htYWtpbmctcmVsYXRlZCBtZXRob2RzIGFuZCB3aGVuIGNyZWF0aW5nIGEgcm9vbSB0byBkZWZpbmUgdGhlIHR5cGUgb2YgYSBsb2JieS4gQ29tYmluZWQgd2l0aCB0aGUgbG9iYnkgbmFtZSB0aGlzIGlkZW50aWZpZXMgdGhlIGxvYmJ5Ljwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIExvYmJ5VHlwZTogMjEyLFxyXG4gICAgICAgICAgICAgICAgTG9iYnlTdGF0czogMjExLFxyXG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PigyMTApIFVzZWQgZm9yIHJlZ2lvbiB2YWx1ZXMgaW4gT3BBdXRoIGFuZCBPcEdldFJlZ2lvbnMuPC9zdW1tYXJ5ID5cclxuICAgICAgICAgICAgICAgIFJlZ2lvbjogMjEwLFxyXG4gICAgICAgICAgICAgICAgSXNJbmFjdGl2ZTogMjMzLFxyXG4gICAgICAgICAgICAgICAgQ2hlY2tVc2VyT25Kb2luOiAyMzIsXHJcbiAgICAgICAgICAgICAgICAvLy8gPHN1bW1hcnk+KDIzMSkgQ29kZSBmb3IgXCJDaGVjayBBbmQgU3dhcFwiIChDQVMpIHdoZW4gY2hhbmdpbmcgcHJvcGVydGllcy48L3N1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICBFeHBlY3RlZFZhbHVlczogMjMxLFxyXG4gICAgICAgICAgICAgICAgVXJpUGF0aDogMjA5LFxyXG4gICAgICAgICAgICAgICAgUnBjQ2FsbFBhcmFtczogMjA4LFxyXG4gICAgICAgICAgICAgICAgUnBjQ2FsbFJldENvZGU6IDIwNyxcclxuICAgICAgICAgICAgICAgIFJwY0NhbGxSZXRNZXNzYWdlOiAyMDYsXHJcbiAgICAgICAgICAgICAgICBScGNDYWxsUmV0RGF0YTogMjA4LFxyXG4gICAgICAgICAgICAgICAgV2ViRmxhZ3M6IDIzNCxcclxuICAgICAgICAgICAgICAgIC8vIFVzZWQgYnkgdGhlIHNlcnZlciBpbiBPcGVyYXRpb24gUmVzcG9uc2VzLCB3aGVuIGl0IHNlbmRzIHRoZSBuaWNrbmFtZSBvZiB0aGUgY2xpZW50ICh0aGUgdXNlcidzIG5pY2tuYW1lKS5cclxuICAgICAgICAgICAgICAgIE5pY2tuYW1lOiAyMDJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAc3VtbWFyeSBDb2RlcyBmb3IgcGFyYW1ldGVycyBhbmQgZXZlbnRzIHVzZWQgaW4gUGhvdG9uIExvYWQgQmFsYW5jaW5nIEFQSS5cclxuICAgICAgICAgICAgICAgIEBtZW1iZXIgUGhvdG9uLkxvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLk9wZXJhdGlvbkNvZGVcclxuICAgICAgICAgICAgICAgIEByZWFkb25seVxyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtudW1iZXJ9IEF1dGhlbnRpY2F0ZSBBdXRoZW50aWNhdGVzIHRoaXMgcGVlciBhbmQgY29ubmVjdHMgdG8gYSB2aXJ0dWFsIGFwcGxpY2F0aW9uLlxyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtudW1iZXJ9IEpvaW5Mb2JieSBKb2lucyBsb2JieSAob24gTWFzdGVyKS5cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBMZWF2ZUxvYmJ5IExlYXZlcyBsb2JieSAob24gTWFzdGVyKS5cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBDcmVhdGVHYW1lIENyZWF0ZXMgYSBnYW1lIChvciBmYWlscyBpZiBuYW1lIGV4aXN0cykuXHJcbiAgICAgICAgICAgICAgICBAcHJvcGVydHkge251bWJlcn0gSm9pbkdhbWUgSm9pbnMgcm9vbSAoYnkgbmFtZSkuXHJcbiAgICAgICAgICAgICAgICBAcHJvcGVydHkge251bWJlcn0gSm9pblJhbmRvbUdhbWUgSm9pbnMgcmFuZG9tIHJvb20gKG9uIE1hc3RlcikuXHJcbiAgICAgICAgICAgICAgICBAcHJvcGVydHkge251bWJlcn0gTGVhdmUgTGVhdmVzIHRoZSByb29tLlxyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtudW1iZXJ9IFJhaXNlRXZlbnQgUmFpc2VzIGV2ZW50IChpbiBhIHJvb20sIGZvciBvdGhlciBhY3RvcnMvcGxheWVycykuXHJcbiAgICAgICAgICAgICAgICBAcHJvcGVydHkge251bWJlcn0gU2V0UHJvcGVydGllcyBTZXRzIFByb3BlcnRpZXMgKG9mIHJvb20gb3IgYWN0b3IvcGxheWVyKS5cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBHZXRQcm9wZXJ0aWVzIEdldHMgUHJvcGVydGllcy5cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBDaGFuZ2VHcm91cHMgQ2hhbmdlcyBpbnRlcmVzdCBncm91cHMgaW4gcm9vbS5cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBGaW5kRnJpZW5kcyBSZXF1ZXN0cyBNYXN0ZXIgc2VydmVyIGZvciBhY3RvcnMgb25saW5lIHN0YXR1cyBhbmQgam9pbmVkIHJvb21zLlxyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtudW1iZXJ9IExvYmJ5U3RhdHMgUmVxdWVzdHMgTWFzdGVyIHNlcnZlciBmb3IgbG9iYmllcyBzdGF0aXN0aWNzLlxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBDb25zdGFudHMuT3BlcmF0aW9uQ29kZSA9IHtcclxuICAgICAgICAgICAgICAgIC8vLyA8c3VtbWFyeT4oMjMwKSBBdXRoZW50aWNhdGVzIHRoaXMgcGVlciBhbmQgY29ubmVjdHMgdG8gYSB2aXJ0dWFsIGFwcGxpY2F0aW9uPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgQXV0aGVudGljYXRlOiAyMzAsXHJcbiAgICAgICAgICAgICAgICAvLy8gPHN1bW1hcnk+KDIyOSkgSm9pbnMgbG9iYnkgKG9uIE1hc3Rlcik8L3N1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICBKb2luTG9iYnk6IDIyOSxcclxuICAgICAgICAgICAgICAgIC8vLyA8c3VtbWFyeT4oMjI4KSBMZWF2ZXMgbG9iYnkgKG9uIE1hc3Rlcik8L3N1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICBMZWF2ZUxvYmJ5OiAyMjgsXHJcbiAgICAgICAgICAgICAgICAvLy8gPHN1bW1hcnk+KDIyNykgQ3JlYXRlcyBhIGdhbWUgKG9yIGZhaWxzIGlmIG5hbWUgZXhpc3RzKTwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIENyZWF0ZUdhbWU6IDIyNyxcclxuICAgICAgICAgICAgICAgIC8vLyA8c3VtbWFyeT4oMjI2KSBKb2luIGdhbWUgKGJ5IG5hbWUpPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgSm9pbkdhbWU6IDIyNixcclxuICAgICAgICAgICAgICAgIC8vLyA8c3VtbWFyeT4oMjI1KSBKb2lucyByYW5kb20gZ2FtZSAob24gTWFzdGVyKTwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIEpvaW5SYW5kb21HYW1lOiAyMjUsXHJcbiAgICAgICAgICAgICAgICAvLyBDYW5jZWxKb2luUmFuZG9tIDogMjI0LCAvLyBvYnNvbGV0ZSwgY2F1c2UgSm9pblJhbmRvbSBubyBsb25nZXIgaXMgYSBcInByb2Nlc3NcIi4gbm93IHByb3ZpZGVzIHJlc3VsdCBpbW1lZGlhdGVseVxyXG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PigyNTQpIENvZGUgZm9yIE9wTGVhdmUsIHRvIGdldCBvdXQgb2YgYSByb29tLjwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIExlYXZlOiBMaXRlT3BDb2RlLkxlYXZlLFxyXG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PigyNTMpIFJhaXNlIGV2ZW50IChpbiBhIHJvb20sIGZvciBvdGhlciBhY3RvcnMvcGxheWVycyk8L3N1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICBSYWlzZUV2ZW50OiBMaXRlT3BDb2RlLlJhaXNlRXZlbnQsXHJcbiAgICAgICAgICAgICAgICAvLy8gPHN1bW1hcnk+KDI1MikgU2V0IFByb3BlcnRpZXMgKG9mIHJvb20gb3IgYWN0b3IvcGxheWVyKTwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIFNldFByb3BlcnRpZXM6IExpdGVPcENvZGUuU2V0UHJvcGVydGllcyxcclxuICAgICAgICAgICAgICAgIC8vLyA8c3VtbWFyeT4oMjUxKSBHZXQgUHJvcGVydGllczwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIEdldFByb3BlcnRpZXM6IExpdGVPcENvZGUuR2V0UHJvcGVydGllcyxcclxuICAgICAgICAgICAgICAgIC8vLyA8c3VtbWFyeT4oMjQ4KSBPcGVyYXRpb24gY29kZSB0byBjaGFuZ2UgaW50ZXJlc3QgZ3JvdXBzIGluIFJvb21zIChMaXRlIGFwcGxpY2F0aW9uIGFuZCBleHRlbmRpbmcgb25lcykuPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgQ2hhbmdlR3JvdXBzOiBMaXRlT3BDb2RlLkNoYW5nZUdyb3VwcyxcclxuICAgICAgICAgICAgICAgIC8vLyA8c3VtbWFyeT4oMjIyKSBSZXF1ZXN0IHRoZSByb29tcyBhbmQgb25saW5lIHN0YXR1cyBmb3IgYSBsaXN0IG9mIGZyaWVuZHMgKGJ5IG5hbWUsIHdoaWNoIHNob3VsZCBiZSB1bmlxdWUpLjwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIEZpbmRGcmllbmRzOiAyMjIsXHJcbiAgICAgICAgICAgICAgICBMb2JieVN0YXRzOiAyMjEsXHJcbiAgICAgICAgICAgICAgICAvLy8gPHN1bW1hcnk+KDIyMCkgR2V0cyBsaXN0IG9mIHJlZ2lvbmFsIHNlcnZlcnMgZnJvbSBhIE5hbWVTZXJ2ZXIuPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgR2V0UmVnaW9uczogMjIwLFxyXG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5PigyMTkpIFJwYyBPcGVyYXRpb24uPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgUnBjOiAyMTlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAc3VtbWFyeSBPcHRpb25zIGZvciBtYXRjaG1ha2luZyBydWxlcyBmb3Igam9pblJhbmRvbUdhbWUuXHJcbiAgICAgICAgICAgICAgICBAbWVtYmVyIFBob3Rvbi5Mb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5NYXRjaG1ha2luZ01vZGVcclxuICAgICAgICAgICAgICAgIEByZWFkb25seVxyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtudW1iZXJ9IEZpbGxSb29tIERlZmF1bHQuIEZpbGxSb29tIEZpbGxzIHVwIHJvb21zIChvbGRlc3QgZmlyc3QpIHRvIGdldCBwbGF5ZXJzIHRvZ2V0aGVyIGFzIGZhc3QgYXMgcG9zc2libGUuIE1ha2VzIG1vc3Qgc2Vuc2Ugd2l0aCBNYXhQbGF5ZXJzID4gMCBhbmQgZ2FtZXMgdGhhdCBjYW4gb25seSBzdGFydCB3aXRoIG1vcmUgcGxheWVycy5cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBTZXJpYWxNYXRjaGluZyBEaXN0cmlidXRlcyBwbGF5ZXJzIGFjcm9zcyBhdmFpbGFibGUgcm9vbXMgc2VxdWVudGlhbGx5IGJ1dCB0YWtlcyBmaWx0ZXIgaW50byBhY2NvdW50LiBXaXRob3V0IGZpbHRlciwgcm9vbXMgZ2V0IHBsYXllcnMgZXZlbmx5IGRpc3RyaWJ1dGVkLlxyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtudW1iZXJ9IFJhbmRvbU1hdGNoaW5nIEpvaW5zIGEgKGZ1bGx5KSByYW5kb20gcm9vbS4gRXhwZWN0ZWQgcHJvcGVydGllcyBtdXN0IG1hdGNoIGJ1dCBhc2lkZSBmcm9tIHRoaXMsIGFueSBhdmFpbGFibGUgcm9vbSBtaWdodCBiZSBzZWxlY3RlZC5cclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ29uc3RhbnRzLk1hdGNobWFraW5nTW9kZSA9IHtcclxuICAgICAgICAgICAgICAgIC8vLyA8c3VtbWFyeT5GaWxscyB1cCByb29tcyAob2xkZXN0IGZpcnN0KSB0byBnZXQgcGxheWVycyB0b2dldGhlciBhcyBmYXN0IGFzIHBvc3NpYmxlLiBEZWZhdWx0Ljwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIC8vLyA8cmVtYXJrcz5NYWtlcyBtb3N0IHNlbnNlIHdpdGggTWF4UGxheWVycyA+IDAgYW5kIGdhbWVzIHRoYXQgY2FuIG9ubHkgc3RhcnQgd2l0aCBtb3JlIHBsYXllcnMuPC9yZW1hcmtzPlxyXG4gICAgICAgICAgICAgICAgRmlsbFJvb206IDAsXHJcbiAgICAgICAgICAgICAgICAvLy8gPHN1bW1hcnk+RGlzdHJpYnV0ZXMgcGxheWVycyBhY3Jvc3MgYXZhaWxhYmxlIHJvb21zIHNlcXVlbnRpYWxseSBidXQgdGFrZXMgZmlsdGVyIGludG8gYWNjb3VudC4gV2l0aG91dCBmaWx0ZXIsIHJvb21zIGdldCBwbGF5ZXJzIGV2ZW5seSBkaXN0cmlidXRlZC48L3N1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICBTZXJpYWxNYXRjaGluZzogMSxcclxuICAgICAgICAgICAgICAgIC8vLyA8c3VtbWFyeT5Kb2lucyBhIChmdWxseSkgcmFuZG9tIHJvb20uIEV4cGVjdGVkIHByb3BlcnRpZXMgbXVzdCBtYXRjaCBidXQgYXNpZGUgZnJvbSB0aGlzLCBhbnkgYXZhaWxhYmxlIHJvb20gbWlnaHQgYmUgc2VsZWN0ZWQuPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgUmFuZG9tTWF0Y2hpbmc6IDJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAc3VtbWFyeSBDYWNoaW5nIG9wdGlvbnMgZm9yIGV2ZW50cy5cclxuICAgICAgICAgICAgICAgIEBtZW1iZXIgUGhvdG9uLkxvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLkV2ZW50Q2FjaGluZ1xyXG4gICAgICAgICAgICAgICAgQHJlYWRvbmx5XHJcbiAgICAgICAgICAgICAgICBAcHJvcGVydHkge251bWJlcn0gRG9Ob3RDYWNoZSBEZWZhdWx0LiBEbyBub3QgY2FjaGUuXHJcbiAgICAgICAgICAgICAgICBAcHJvcGVydHkge251bWJlcn0gTWVyZ2VDYWNoZSBXaWxsIG1lcmdlIHRoaXMgZXZlbnQncyBrZXlzIHdpdGggdGhvc2UgYWxyZWFkeSBjYWNoZWQuXHJcbiAgICAgICAgICAgICAgICBAcHJvcGVydHkge251bWJlcn0gUmVwbGFjZUNhY2hlIFJlcGxhY2VzIHRoZSBldmVudCBjYWNoZSBmb3IgdGhpcyBldmVudENvZGUgd2l0aCB0aGlzIGV2ZW50J3MgY29udGVudC5cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBSZW1vdmVDYWNoZSBSZW1vdmVzIHRoaXMgZXZlbnQgKGJ5IGV2ZW50Q29kZSkgZnJvbSB0aGUgY2FjaGUuXHJcbiAgICAgICAgICAgICAgICBAcHJvcGVydHkge251bWJlcn0gQWRkVG9Sb29tQ2FjaGUgQWRkcyBhbiBldmVudCB0byB0aGUgcm9vbSdzIGNhY2hlLlxyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtudW1iZXJ9IEFkZFRvUm9vbUNhY2hlR2xvYmFsIEFkZHMgdGhpcyBldmVudCB0byB0aGUgY2FjaGUgZm9yIGFjdG9yIDAgKGJlY29taW5nIGEgXCJnbG9iYWxseSBvd25lZFwiIGV2ZW50IGluIHRoZSBjYWNoZSkuXHJcbiAgICAgICAgICAgICAgICBAcHJvcGVydHkge251bWJlcn0gUmVtb3ZlRnJvbVJvb21DYWNoZSBSZW1vdmUgZml0dGluZyBldmVudCBmcm9tIHRoZSByb29tJ3MgY2FjaGUuXHJcbiAgICAgICAgICAgICAgICBAcHJvcGVydHkge251bWJlcn0gUmVtb3ZlRnJvbVJvb21DYWNoZUZvckFjdG9yc0xlZnQgUmVtb3ZlcyBldmVudHMgb2YgcGxheWVycyB3aG8gYWxyZWFkeSBsZWZ0IHRoZSByb29tIChjbGVhbmluZyB1cCkuXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIENvbnN0YW50cy5FdmVudENhY2hpbmcgPSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAgICAgLy8gICAgIERlZmF1bHQgdmFsdWUgKG5vdCBzZW50KS5cclxuICAgICAgICAgICAgICAgIERvTm90Q2FjaGU6IDAsXHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgICAgIC8vICAgICBXaWxsIG1lcmdlIHRoaXMgZXZlbnQncyBrZXlzIHdpdGggdGhvc2UgYWxyZWFkeSBjYWNoZWQuXHJcbiAgICAgICAgICAgICAgICBNZXJnZUNhY2hlOiAxLFxyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgUmVwbGFjZXMgdGhlIGV2ZW50IGNhY2hlIGZvciB0aGlzIGV2ZW50Q29kZSB3aXRoIHRoaXMgZXZlbnQncyBjb250ZW50LlxyXG4gICAgICAgICAgICAgICAgUmVwbGFjZUNhY2hlOiAyLFxyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgUmVtb3ZlcyB0aGlzIGV2ZW50IChieSBldmVudENvZGUpIGZyb20gdGhlIGNhY2hlLlxyXG4gICAgICAgICAgICAgICAgUmVtb3ZlQ2FjaGU6IDMsXHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgICAgIC8vICAgICBBZGRzIGFuIGV2ZW50IHRvIHRoZSByb29tJ3MgY2FjaGUuXHJcbiAgICAgICAgICAgICAgICBBZGRUb1Jvb21DYWNoZTogNCxcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAgICAgLy8gICAgIEFkZHMgdGhpcyBldmVudCB0byB0aGUgY2FjaGUgZm9yIGFjdG9yIDAgKGJlY29taW5nIGEgXCJnbG9iYWxseSBvd25lZFwiIGV2ZW50XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgaW4gdGhlIGNhY2hlKS5cclxuICAgICAgICAgICAgICAgIEFkZFRvUm9vbUNhY2hlR2xvYmFsOiA1LFxyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgUmVtb3ZlIGZpdHRpbmcgZXZlbnQgZnJvbSB0aGUgcm9vbSdzIGNhY2hlLlxyXG4gICAgICAgICAgICAgICAgUmVtb3ZlRnJvbVJvb21DYWNoZTogNixcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAgICAgLy8gICAgIFJlbW92ZXMgZXZlbnRzIG9mIHBsYXllcnMgd2hvIGFscmVhZHkgbGVmdCB0aGUgcm9vbSAoY2xlYW5pbmcgdXApLlxyXG4gICAgICAgICAgICAgICAgUmVtb3ZlRnJvbVJvb21DYWNoZUZvckFjdG9yc0xlZnQ6IDdcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAc3VtbWFyeSBPcHRpb25zIGZvciBjaG9vc2luZyByb29tJ3MgYWN0b3JzIHdobyBzaG91bGQgcmVjZWl2ZSBldmVudHMuXHJcbiAgICAgICAgICAgICAgICBAbWVtYmVyIFBob3Rvbi5Mb2FkQmFsYW5jaW5nLkNvbnN0YW50cy5SZWNlaXZlckdyb3VwXHJcbiAgICAgICAgICAgICAgICBAcmVhZG9ubHlcclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBPdGhlcnMgRGVmYXVsdC4gQW55b25lIGVsc2UgZ2V0cyBteSBldmVudC5cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBBbGwgRXZlcnlvbmUgaW4gdGhlIGN1cnJlbnQgcm9vbSAoaW5jbHVkaW5nIHRoaXMgcGVlcikgd2lsbCBnZXQgdGhpcyBldmVudC5cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBNYXN0ZXJDbGllbnQgVGhlIFwibWFzdGVyIGNsaWVudFwiIGRvZXMgbm90IGhhdmUgc3BlY2lhbCByaWdodHMgYnV0IGlzIHRoZSBvbmUgd2hvIGlzIGluIHRoaXMgcm9vbSB0aGUgbG9uZ2VzdCB0aW1lLlxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBDb25zdGFudHMuUmVjZWl2ZXJHcm91cCA9IHtcclxuICAgICAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgRGVmYXVsdCB2YWx1ZSAobm90IHNlbnQpLiBBbnlvbmUgZWxzZSBnZXRzIG15IGV2ZW50LlxyXG4gICAgICAgICAgICAgICAgT3RoZXJzOiAwLFxyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgRXZlcnlvbmUgaW4gdGhlIGN1cnJlbnQgcm9vbSAoaW5jbHVkaW5nIHRoaXMgcGVlcikgd2lsbCBnZXQgdGhpcyBldmVudC5cclxuICAgICAgICAgICAgICAgIEFsbDogMSxcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAgICAgLy8gICAgIFRoZSBzZXJ2ZXIgc2VuZHMgdGhpcyBldmVudCBvbmx5IHRvIHRoZSBhY3RvciB3aXRoIHRoZSBsb3dlc3QgYWN0b3JOdW1iZXIuXHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgLy8gUmVtYXJrczpcclxuICAgICAgICAgICAgICAgIC8vICAgICBUaGUgXCJtYXN0ZXIgY2xpZW50XCIgZG9lcyBub3QgaGF2ZSBzcGVjaWFsIHJpZ2h0cyBidXQgaXMgdGhlIG9uZSB3aG8gaXMgaW5cclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzIHJvb20gdGhlIGxvbmdlc3QgdGltZS5cclxuICAgICAgICAgICAgICAgIE1hc3RlckNsaWVudDogMlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IE9wdGlvbnMgZm9yIG9wdGlvbmFsIFwiQ3VzdG9tIEF1dGhlbnRpY2F0aW9uXCIgc2VydmljZXMgdXNlZCB3aXRoIFBob3Rvbi5cclxuICAgICAgICAgICAgICAgIEBtZW1iZXIgUGhvdG9uLkxvYWRCYWxhbmNpbmcuQ29uc3RhbnRzLkN1c3RvbUF1dGhlbnRpY2F0aW9uVHlwZVxyXG4gICAgICAgICAgICAgICAgQHJlYWRvbmx5XHJcbiAgICAgICAgICAgICAgICBAcHJvcGVydHkge251bWJlcn0gQ3VzdG9tIERlZmF1bHQuIFVzZSBhIGN1c3RvbSBhdXRoZW50aWZpY2F0aW9uIHNlcnZpY2UuXHJcbiAgICAgICAgICAgICAgICBAcHJvcGVydHkge251bWJlcn0gU3RlYW0gQXV0aGVudGljYXRlcyB1c2VycyBieSB0aGVpciBTdGVhbSBBY2NvdW50LiBTZXQgYXV0aCB2YWx1ZXMgYWNjb3JkaW5nbHkuXHJcbiAgICAgICAgICAgICAgICBAcHJvcGVydHkge251bWJlcn0gRmFjZWJvb2sgQXV0aGVudGljYXRlcyB1c2VycyBieSB0aGVpciBGYWNlYm9vayBBY2NvdW50LiBTZXQgYXV0aCB2YWx1ZXMgYWNjb3JkaW5nbHkuXHJcbiAgICAgICAgICAgICAgICBAcHJvcGVydHkge251bWJlcn0gTm9uZSBEaXNhYmxlcyBjdXN0b20gYXV0aGVudGlmaWNhdGlvbi5cclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ29uc3RhbnRzLkN1c3RvbUF1dGhlbnRpY2F0aW9uVHlwZSA9IHtcclxuICAgICAgICAgICAgICAgIEN1c3RvbTogMCxcclxuICAgICAgICAgICAgICAgIFN0ZWFtOiAxLFxyXG4gICAgICAgICAgICAgICAgRmFjZWJvb2s6IDIsXHJcbiAgICAgICAgICAgICAgICBOb25lOiAyNTVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAc3VtbWFyeSBPcHRpb25zIG9mIGxvYmJ5IHR5cGVzIGF2YWlsYWJsZS4gTG9iYnkgdHlwZXMgbWlnaHQgYmUgaW1wbGVtZW50ZWQgaW4gY2VydGFpbiBQaG90b24gdmVyc2lvbnMgYW5kIHdvbid0IGJlIGF2YWlsYWJsZSBvbiBvbGRlciBzZXJ2ZXJzLlxyXG4gICAgICAgICAgICAgICAgQG1lbWJlciBQaG90b24uTG9hZEJhbGFuY2luZy5Db25zdGFudHMuTG9iYnlUeXBlXHJcbiAgICAgICAgICAgICAgICBAcmVhZG9ubHlcclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBEZWZhdWx0IFRoaXMgbG9iYnkgaXMgdXNlZCB1bmxlc3MgYW5vdGhlciBpcyBkZWZpbmVkIGJ5IGdhbWUgb3IgSm9pblJhbmRvbS4gUm9vbS1saXN0cyB3aWxsIGJlIHNlbnQgYW5kIEpvaW5SYW5kb21Sb29tIGNhbiBmaWx0ZXIgYnkgbWF0Y2hpbmcgcHJvcGVydGllcy5cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBTcWxMb2JieSBUaGlzIGxvYmJ5IHR5cGUgbGlzdHMgcm9vbXMgbGlrZSBEZWZhdWx0IGJ1dCBKb2luUmFuZG9tIGhhcyBhIHBhcmFtZXRlciBmb3IgU1FMLWxpa2UgXCJ3aGVyZVwiIGNsYXVzZXMgZm9yIGZpbHRlcmluZy4gVGhpcyBhbGxvd3MgYmlnZ2VyLCBsZXNzLCBvciBhbmQgYW5kIGNvbWJpbmF0aW9ucy5cclxuICAgICAgICAgICAgKiovXHJcbiAgICAgICAgICAgIENvbnN0YW50cy5Mb2JieVR5cGUgPSB7XHJcbiAgICAgICAgICAgICAgICBEZWZhdWx0OiAwLFxyXG4gICAgICAgICAgICAgICAgU3FsTG9iYnk6IDJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KShDb25zdGFudHMgPSBMb2FkQmFsYW5jaW5nLkNvbnN0YW50cyB8fCAoTG9hZEJhbGFuY2luZy5Db25zdGFudHMgPSB7fSkpO1xyXG4gICAgfSkoTG9hZEJhbGFuY2luZyA9IFBob3Rvbi5Mb2FkQmFsYW5jaW5nIHx8IChQaG90b24uTG9hZEJhbGFuY2luZyA9IHt9KSk7XHJcbn0pKFBob3RvbiB8fCAoUGhvdG9uID0ge30pKTtcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cInBob3Rvbi1jb21tb24udHNcIi8+XHJcbi8qKlxyXG4gICAgUGhvdG9uIENoYXQgQVBJIENvbnN0YW50c1xyXG4gICAgQG5hbWVzcGFjZSBQaG90b24uQ2hhdC5Db25zdGFudHNcclxuKi9cclxudmFyIFBob3RvbjtcclxuKGZ1bmN0aW9uIChQaG90b24pIHtcclxuICAgIHZhciBDaGF0O1xyXG4gICAgKGZ1bmN0aW9uIChDaGF0KSB7XHJcbiAgICAgICAgdmFyIENvbnN0YW50cztcclxuICAgICAgICAoZnVuY3Rpb24gKENvbnN0YW50cykge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuUGFyYW1ldGVyQ29kZSA9IHtcclxuICAgICAgICAgICAgICAgIENoYW5uZWxzOiAwLFxyXG4gICAgICAgICAgICAgICAgQ2hhbm5lbDogMSxcclxuICAgICAgICAgICAgICAgIE1lc3NhZ2VzOiAyLFxyXG4gICAgICAgICAgICAgICAgTWVzc2FnZTogMyxcclxuICAgICAgICAgICAgICAgIFNlbmRlcnM6IDQsXHJcbiAgICAgICAgICAgICAgICBTZW5kZXI6IDUsXHJcbiAgICAgICAgICAgICAgICBDaGFubmVsVXNlckNvdW50OiA2LFxyXG4gICAgICAgICAgICAgICAgVXNlcklkOiAyMjUsXHJcbiAgICAgICAgICAgICAgICBNc2dJZDogOCxcclxuICAgICAgICAgICAgICAgIE1zZ0lkczogOSxcclxuICAgICAgICAgICAgICAgIFN1YnNjcmliZVJlc3VsdHM6IDE1LFxyXG4gICAgICAgICAgICAgICAgU3RhdHVzOiAxMCxcclxuICAgICAgICAgICAgICAgIEZyaWVuZHM6IDExLFxyXG4gICAgICAgICAgICAgICAgU2tpcE1lc3NhZ2U6IDEyLFxyXG4gICAgICAgICAgICAgICAgSGlzdG9yeUxlbmd0aDogMTQsXHJcbiAgICAgICAgICAgICAgICBXZWJGbGFnczogMjFcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLy8tIENvZGVzIGZvciBwYXJhbWV0ZXJzIGFuZCBldmVudHMgdXNlZCBpbiBQaG90b24gQ2hhdCBBUEkuXHJcbiAgICAgICAgICAgIENvbnN0YW50cy5PcGVyYXRpb25Db2RlID0ge1xyXG4gICAgICAgICAgICAgICAgU3Vic2NyaWJlOiAwLFxyXG4gICAgICAgICAgICAgICAgVW5zdWJzY3JpYmU6IDEsXHJcbiAgICAgICAgICAgICAgICBQdWJsaXNoOiAyLFxyXG4gICAgICAgICAgICAgICAgU2VuZFByaXZhdGU6IDMsXHJcbiAgICAgICAgICAgICAgICBDaGFubmVsSGlzdG9yeTogNCxcclxuICAgICAgICAgICAgICAgIFVwZGF0ZVN0YXR1czogNSxcclxuICAgICAgICAgICAgICAgIEFkZEZyaWVuZGRzOiA2LFxyXG4gICAgICAgICAgICAgICAgUmVtb3ZlRnJpZW5kczogNyAvLyBSZW1vdmVzIHVzZXJzIGZyb20gdGhlIGxpc3QgdGhhdCBzaG91bGQgdXBkYXRlIHlvdSBvZiB0aGVpciBzdGF0dXMuXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5FdmVudENvZGUgPSB7XHJcbiAgICAgICAgICAgICAgICBDaGF0TWVzc2FnZXM6IDAsXHJcbiAgICAgICAgICAgICAgICBVc2VyczogMSxcclxuICAgICAgICAgICAgICAgIFByaXZhdGVNZXNzYWdlOiAyLFxyXG4gICAgICAgICAgICAgICAgRnJpZW5kc0xpc3Q6IDMsXHJcbiAgICAgICAgICAgICAgICBTdGF0dXNVcGRhdGU6IDQsXHJcbiAgICAgICAgICAgICAgICBTdWJzY3JpYmU6IDUsXHJcbiAgICAgICAgICAgICAgICBVbnN1YnNjcmliZTogNlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IENvbnRhaW5zIGNvbW1vbmx5IHVzZWQgc3RhdHVzIHZhbHVlcyBmb3Ige0BsaW5rIFBob3Rvbi5DaGF0LkNoYXRDbGllbnQjc2V0VXNlclN0YXR1c30uWW91IGNhbiBkZWZpbmUgeW91ciBvd24uPGJyLz5cclxuICAgICAgICAgICAgICAgIFdoaWxlIFwib25saW5lXCIoT25saW5lIGFuZCB1cCksIHRoZSBzdGF0dXMgbWVzc2FnZSB3aWxsIGJlIHNlbnQgdG8gYW55b25lIHdobyBoYXMgeW91IG9uIGhpcyBmcmllbmQgbGlzdC48YnIvPlxyXG4gICAgICAgICAgICAgICAgRGVmaW5lIGN1c3RvbSBvbmxpbmUgc3RhdHVzIHZhbHVlcyBhcyB5b3UgbGlrZSB3aXRoIHRoZXNlIHJ1bGVzOjxici8+XHJcbiAgICAgICAgICAgICAgICAwOiBNZWFucyBcIm9mZmxpbmVcIi5JdCB3aWxsIGJlIHVzZWQgd2hlbiB5b3UgYXJlIG5vdCBjb25uZWN0ZWQuIEluIHRoaXMgc3RhdHVzLCB0aGVyZSBpcyBubyBzdGF0dXMgbWVzc2FnZS48YnIvPlxyXG4gICAgICAgICAgICAgICAgMTogTWVhbnMgXCJpbnZpc2libGVcIiBhbmQgaXMgc2VudCB0byBmcmllbmRzIGFzIFwib2ZmbGluZVwiLiBUaGV5IHNlZSBzdGF0dXMgMCwgbm8gbWVzc2FnZSBidXQgeW91IGNhbiBjaGF0Ljxici8+XHJcbiAgICAgICAgICAgICAgICAyOiBBbmQgYW55IGhpZ2hlciB2YWx1ZSB3aWxsIGJlIHRyZWF0ZWQgYXMgXCJvbmxpbmVcIi4gU3RhdHVzIGNhbiBiZSBzZXQuPGJyLz5cclxuICAgICAgICAgICAgICAgIEByZWFkb25seVxyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtudW1iZXJ9IE9mZmxpbmUgT2ZmbGluZS5cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBJbnZpc2libGUgT2ZmbGluZS4gQmUgaW52aXNpYmxlIHRvIGV2ZXJ5b25lLiBTZW5kcyBubyBtZXNzYWdlLlxyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtudW1iZXJ9IE9ubGluZSBPbmxpbmUgYW5kIGF2YWlsYWJsZS5cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBBd2F5IE9ubGluZSBidXQgbm90IGF2YWlsYWJsZS5cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBEbmQgRG8gbm90IGRpc3R1cmIuXHJcbiAgICAgICAgICAgICAgICBAcHJvcGVydHkge251bWJlcn0gTGZnIExvb2tpbmcgRm9yIEdhbWUgLyBHcm91cC4gQ291bGQgYmUgdXNlZCB3aGVuIHlvdSB3YW50IHRvIGJlIGludml0ZWQgb3IgZG8gbWF0Y2htYWtpbmcuXHJcbiAgICAgICAgICAgICAgICBAcHJvcGVydHkge251bWJlcn0gUGxheWluZyBDb3VsZCBiZSB1c2VkIHdoZW4gaW4gYSByb29tLCBwbGF5aW5nLlxyXG4gICAgICAgICAgICAgICAgQG1lbWJlciBQaG90b24uQ2hhdC5Db25zdGFudHMuVXNlclN0YXR1c1xyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBDb25zdGFudHMuVXNlclN0YXR1cyA9IHtcclxuICAgICAgICAgICAgICAgIE9mZmxpbmU6IDAsXHJcbiAgICAgICAgICAgICAgICBJbnZpc2libGU6IDEsXHJcbiAgICAgICAgICAgICAgICBPbmxpbmU6IDIsXHJcbiAgICAgICAgICAgICAgICBBd2F5OiAzLFxyXG4gICAgICAgICAgICAgICAgRG5kOiA0LFxyXG4gICAgICAgICAgICAgICAgTGZnOiA1LFxyXG4gICAgICAgICAgICAgICAgUGxheWluZzogNlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IENvbnZlcnRzIHtAbGluayBQaG90b24uQ2hhdC5Db25zdGFudHMuVXNlclN0YXR1c30gZWxlbWVudCB0byBzdHJpbmcgbmFtZS5cclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7UGhvdG9uLkNoYXQuQ29uc3RhbnRzLlVzZXJTdGF0dXN9IHN0YXR1cyBVc2VyIHN0YXR1cyBlbnVtIGVsZW1lbnQuXHJcbiAgICAgICAgICAgICAgICBAcmV0dXJucyB7c3RyaW5nfSBTcGVjaWZpZWQgZWxlbWVudCBuYW1lIG9yIHVuZGVmaW5lZCBpZiBub3QgZm91bmQuXHJcbiAgICAgICAgICAgICAgICBAbWV0aG9kIFBob3Rvbi5DaGF0LkNvbnN0YW50cy5Vc2VyU3RhdHVzVG9OYW1lXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIFVzZXJTdGF0dXNUb05hbWUoc3RhdHVzKSB7IHJldHVybiBFeGl0Z2FtZXMuQ29tbW9uLlV0aWwuZ2V0RW51bUtleUJ5VmFsdWUoQ29uc3RhbnRzLlVzZXJTdGF0dXMsIHN0YXR1cyk7IH1cclxuICAgICAgICAgICAgQ29uc3RhbnRzLlVzZXJTdGF0dXNUb05hbWUgPSBVc2VyU3RhdHVzVG9OYW1lO1xyXG4gICAgICAgIH0pKENvbnN0YW50cyA9IENoYXQuQ29uc3RhbnRzIHx8IChDaGF0LkNvbnN0YW50cyA9IHt9KSk7XHJcbiAgICB9KShDaGF0ID0gUGhvdG9uLkNoYXQgfHwgKFBob3Rvbi5DaGF0ID0ge30pKTtcclxufSkoUGhvdG9uIHx8IChQaG90b24gPSB7fSkpO1xyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwicGhvdG9uLWxvYWRiYWxhbmNpbmcudHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJwaG90b24tY2hhdC1jb25zdGFudHMudHNcIi8+XHJcbi8qKlxyXG4gICAgUGhvdG9uIENoYXQgQVBJXHJcbiAgICBAbmFtZXNwYWNlIFBob3Rvbi5DaGF0XHJcbiovXHJcbnZhciBQaG90b247XHJcbihmdW5jdGlvbiAoUGhvdG9uKSB7XHJcbiAgICB2YXIgQ2hhdDtcclxuICAgIChmdW5jdGlvbiAoQ2hhdCkge1xyXG4gICAgICAgIHZhciBXZWJGbGFncyA9IHtcclxuICAgICAgICAgICAgSHR0cEZvcndhcmQ6IDB4MDEsXHJcbiAgICAgICAgICAgIFNlbmRBdXRoQ29va2llOiAweDAyLFxyXG4gICAgICAgICAgICBTZW5kU3luYzogMHgwNCxcclxuICAgICAgICAgICAgU2VuZFN0YXRlOiAweDA4XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgICAgQGNsYXNzIFBob3Rvbi5DaGF0Lk1lc3NhZ2VcclxuICAgICAgICAgICAgQGNsYXNzZGVzYyBFbmNhcHN1bGF0ZXMgY2hhdCBtZXNzYWdlIGRhdGEuXHJcbiAgICAgICAgKi9cclxuICAgICAgICB2YXIgTWVzc2FnZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gTWVzc2FnZShzZW5kZXIsIGNvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VuZGVyID0gc2VuZGVyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IFJldHVybnMgbWVzc2FnZSBzZW5kZXIuXHJcbiAgICAgICAgICAgICAgICBAcmV0dXJuIHtzdHJpbmd9IE1lc3NhZ2Ugc2VuZGVyLlxyXG4gICAgICAgICAgICAgICAgQG1ldGhvZCBQaG90b24uQ2hhdC5NZXNzYWdlI2dldFNlbmRlclxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBNZXNzYWdlLnByb3RvdHlwZS5nZXRTZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZW5kZXI7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgQHN1bW1hcnkgUmV0dXJucyBtZXNzYWdlIGNvbnRlbnQuXHJcbiAgICAgICAgICAgICAgICBAcmV0dXJuIHthbnl9IE1lc3NhZ2UgY29udGVudC5cclxuICAgICAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLkNoYXQuTWVzc2FnZSNnZXRDb250ZW50XHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIE1lc3NhZ2UucHJvdG90eXBlLmdldENvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZW50O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gTWVzc2FnZTtcclxuICAgICAgICB9KCkpO1xyXG4gICAgICAgIENoYXQuTWVzc2FnZSA9IE1lc3NhZ2U7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICAgIEBjbGFzcyBQaG90b24uQ2hhdC5DaGFubmVsXHJcbiAgICAgICAgICAgIEBjbGFzc2Rlc2MgUmVwcmVzZW50cyBjaGF0IGNoYW5uZWwuXHJcbiAgICAgICAgKi9cclxuICAgICAgICB2YXIgQ2hhbm5lbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gQ2hhbm5lbChuYW1lLCBpc1ByaXZhdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNQcml2YXQgPSBpc1ByaXZhdDtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXMgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IFJldHVybnMgY2hhbm5lbCBuYW1lIChjb3VudGVycGFydCB1c2VyIGlkIGZvciBwcml2YXRlIGNoYW5uZWwpLlxyXG4gICAgICAgICAgICAgICAgQHJldHVybiB7c3RyaW5nfSBDaGFubmVsIG5hbWUuXHJcbiAgICAgICAgICAgICAgICBAbWV0aG9kIFBob3Rvbi5DaGF0LkNoYW5uZWwjZ2V0TmFtZVxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBDaGFubmVsLnByb3RvdHlwZS5nZXROYW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAc3VtbWFyeSBSZXR1cm5zIHRydWUgaWYgY2hhbm5lbCBpcyBwcml2YXRlLlxyXG4gICAgICAgICAgICAgICAgQHJldHVybiB7Ym9vbGVhbn0gQ2hhbm5lbCBwcml2YXRlIHN0YXR1cy5cclxuICAgICAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLkNoYXQuQ2hhbm5lbCNpc1ByaXZhdGVcclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ2hhbm5lbC5wcm90b3R5cGUuaXNQcml2YXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNQcml2YXQ7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgQHN1bW1hcnkgUmV0dXJucyBtZXNzYWdlcyBjYWNoZS5cclxuICAgICAgICAgICAgICAgIEByZXR1cm4ge3tAbGluayBQaG90b24uQ2hhdC5NZXNzYWdlfVtdfSBBcnJheSBvZiBtZXNzYWdlcy5cclxuICAgICAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLkNoYXQuQ2hhbm5lbCNnZXRNZXNzYWdlc1xyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBDaGFubmVsLnByb3RvdHlwZS5nZXRNZXNzYWdlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2VzO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IFJldHVybnMgSUQgb2YgdGhlIGxhc3QgbWVzc2FnZSByZWNlaXZlZC5cclxuICAgICAgICAgICAgICAgIEByZXR1cm4ge251bWJlcn0gTGFzdCBtZXNzYWdlIElELlxyXG4gICAgICAgICAgICAgICAgQG1ldGhvZCBQaG90b24uQ2hhdC5DaGFubmVsI2dldExhc3RJZFxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBDaGFubmVsLnByb3RvdHlwZS5nZXRMYXN0SWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sYXN0SWQ7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgQHN1bW1hcnkgQ2xlYXJzIG1lc3NhZ2VzIGNhY2hlLlxyXG4gICAgICAgICAgICAgICAgQG1ldGhvZCBQaG90b24uQ2hhdC5DaGFubmVsI2NsZWFyTWVzc2FnZXNcclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ2hhbm5lbC5wcm90b3R5cGUuY2xlYXJNZXNzYWdlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXMuc3BsaWNlKDApO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvLyBpbnRlcm5hbFxyXG4gICAgICAgICAgICBDaGFubmVsLnByb3RvdHlwZS5hZGRNZXNzYWdlcyA9IGZ1bmN0aW9uIChzZW5kZXJzLCBtZXNzYWdlcykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5ld01lc3NhZ2VzID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIHNlbmRlcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoaSkgPCBtZXNzYWdlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG0gPSBuZXcgTWVzc2FnZShzZW5kZXJzW2ldLCBtZXNzYWdlc1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXMucHVzaChtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3TWVzc2FnZXMucHVzaChtKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3TWVzc2FnZXM7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBDaGFubmVsO1xyXG4gICAgICAgIH0oKSk7XHJcbiAgICAgICAgQ2hhdC5DaGFubmVsID0gQ2hhbm5lbDtcclxuICAgICAgICB2YXIgQ2hhdENsaWVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgICAgICAgICAgX19leHRlbmRzKENoYXRDbGllbnQsIF9zdXBlcik7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgQGNsYXNzZGVzYyBJbXBsZW1lbnRzIHRoZSBQaG90b24gQ2hhdCBBUEkgd29ya2Zsb3cuPGJyLz5cclxuICAgICAgICAgICAgICAgIFRoaXMgY2xhc3Mgc2hvdWxkIGJlIGV4dGVuZGVkIHRvIGhhbmRsZSBzeXN0ZW0gb3IgY3VzdG9tIGV2ZW50cyBhbmQgb3BlcmF0aW9uIHJlc3BvbnNlcy48YnIvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBAYm9ycm93cyBQaG90b24uTG9hZEJhbGFuY2luZy5Mb2FkQmFsYW5jaW5nQ2xpZW50I3NldEN1c3RvbUF1dGhlbnRpY2F0aW9uXHJcbiAgICAgICAgICAgICAgICBAYm9ycm93cyBQaG90b24uTG9hZEJhbGFuY2luZy5Mb2FkQmFsYW5jaW5nQ2xpZW50I2Nvbm5lY3RUb05hbWVTZXJ2ZXJcclxuICAgICAgICAgICAgICAgIEBib3Jyb3dzIFBob3Rvbi5Mb2FkQmFsYW5jaW5nLkxvYWRCYWxhbmNpbmdDbGllbnQjZ2V0UmVnaW9uc1xyXG4gICAgICAgICAgICAgICAgQGJvcnJvd3MgUGhvdG9uLkxvYWRCYWxhbmNpbmcuTG9hZEJhbGFuY2luZ0NsaWVudCNvbkdldFJlZ2lvbnNSZXN1bHRcclxuICAgICAgICAgICAgICAgIEBib3Jyb3dzIFBob3Rvbi5Mb2FkQmFsYW5jaW5nLkxvYWRCYWxhbmNpbmdDbGllbnQjaXNDb25uZWN0ZWRUb05hbWVTZXJ2ZXJcclxuICAgICAgICAgICAgICAgIEBib3Jyb3dzIFBob3Rvbi5Mb2FkQmFsYW5jaW5nLkxvYWRCYWxhbmNpbmdDbGllbnQjZGlzY29ubmVjdFxyXG4gICAgICAgICAgICAgICAgQGJvcnJvd3MgUGhvdG9uLkxvYWRCYWxhbmNpbmcuTG9hZEJhbGFuY2luZ0NsaWVudCNzZXRMb2dMZXZlbFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBAY29uc3RydWN0b3IgUGhvdG9uLkNoYXQuQ2hhdENsaWVudFxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtQaG90b24uQ29ubmVjdGlvblByb3RvY29sfSBwcm90b2NvbCBDb25uZWN0b24gcHJvdG9jb2wuXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge3N0cmluZ30gYXBwSWQgQ2xvdWQgYXBwbGljYXRpb24gSUQuXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge3N0cmluZ30gYXBwVmVyc2lvbiBDbG91ZCBhcHBsaWNhdGlvbiB2ZXJzaW9uLlxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBDaGF0Q2xpZW50KHByb3RvY29sLCBhcHBJZCwgYXBwVmVyc2lvbikge1xyXG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvdG9jb2wsIGFwcElkLCBhcHBWZXJzaW9uKSB8fCB0aGlzO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMucHVibGljQ2hhbm5lbHMgPSB7fTtcclxuICAgICAgICAgICAgICAgIF90aGlzLnByaXZhdGVDaGFubmVscyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuc3Vic2NyaWJlUmVxdWVzdHMgPSBbXTtcclxuICAgICAgICAgICAgICAgIF90aGlzLnVuc3Vic2NyaWJlUmVxdWVzdHMgPSBbXTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmF1dG9Kb2luTG9iYnkgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IENhbGxlZCBvbiBjbGllbnQgc3RhdGUgY2hhbmdlLiBPdmVycmlkZSB0byBoYW5kbGUgaXQuXHJcbiAgICAgICAgICAgICAgICBAbWV0aG9kIFBob3Rvbi5DaGF0LkNoYXRDbGllbnQjb25TdGF0ZUNoYW5nZVxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtQaG90b24uQ2hhdC5DaGF0Q2xpZW50LkNoYXRTdGF0ZX0gc3RhdGUgTmV3IGNsaWVudCBzdGF0ZS5cclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ2hhdENsaWVudC5wcm90b3R5cGUub25TdGF0ZUNoYW5nZSA9IGZ1bmN0aW9uIChzdGF0ZSkgeyB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IENhbGxlZCBpZiBjbGllbnQgZXJyb3Igb2NjdXJlcy4gT3ZlcnJpZGUgdG8gaGFuZGxlIGl0LlxyXG4gICAgICAgICAgICAgICAgQG1ldGhvZCBDaGF0LkNoYXRDbGllbnQjb25FcnJvclxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtDaGF0LkNoYXRDbGllbnQuQ2hhdFBlZXJFcnJvckNvZGV9IGVycm9yQ29kZSBDbGllbnQgZXJyb3IgY29kZS5cclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7c3RyaW5nfSBlcnJvck1zZyBFcnJvciBtZXNzYWdlLlxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBDaGF0Q2xpZW50LnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24gKGVycm9yQ29kZSwgZXJyb3JNc2cpIHsgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAc3VtbWFyeSBDYWxsZWQgd2hlbiB7QGxpbmsgUGhvdG9uLkNoYXQuQ2hhdENsaWVudCNzdWJzY3JpYmUgc3Vic2NyaWJlfSByZXF1ZXN0IGNvbXBsZXRlZC48YnIvID5cclxuICAgICAgICAgICAgICAgIE92ZXJyaWRlIHRvIGhhbmRsZSByZXF1ZXN0IHJlc3VsdHMuXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge29iamVjdH0gcmVzdWx0cyBPYmplY3Qgd2l0aCBjaGFubmVsIG5hbWVzIGFzIGtleXMgYW5kIGJvb2xlYW4gcmVzdWx0cyBhcyB2YWx1ZXMuXHJcbiAgICAgICAgICAgICAgICBAbWV0aG9kIFBob3Rvbi5DaGF0LkNoYXRDbGllbnQjb25TdWJzY3JpYmVSZXN1bHRcclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ2hhdENsaWVudC5wcm90b3R5cGUub25TdWJzY3JpYmVSZXN1bHQgPSBmdW5jdGlvbiAocmVzdWx0cykgeyB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IENhbGxlZCB3aGVuIHtAbGluayBQaG90b24uQ2hhdC5DaGF0Q2xpZW50I3Vuc3Vic2NyaWJlIHVuc3Vic2NyaWJlfSByZXF1ZXN0IGNvbXBsZXRlZC48YnIvID5cclxuICAgICAgICAgICAgICAgIE92ZXJyaWRlIHRvIGhhbmRsZSByZXF1ZXN0IHJlc3VsdHMuXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge29iamVjdH0gcmVzdWx0cyBPYmplY3Qgd2l0aCBjaGFubmVsIG5hbWVzIGFzIGtleXMgYW5kIGJvb2xlYW4gcmVzdWx0cyBhcyB2YWx1ZXMuXHJcbiAgICAgICAgICAgICAgICBAbWV0aG9kIFBob3Rvbi5DaGF0LkNoYXRDbGllbnQjb25VbnN1YnNjcmliZVJlc3VsdFxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBDaGF0Q2xpZW50LnByb3RvdHlwZS5vblVuc3Vic2NyaWJlUmVzdWx0ID0gZnVuY3Rpb24gKHJlc3VsdHMpIHsgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAc3VtbWFyeSBDYWxsZWQgd2hlbiBuZXcgY2hhdCBtZXNzYWdlcyByZWNlaXZlZC48YnIvID5cclxuICAgICAgICAgICAgICAgIE92ZXJyaWRlIHRvIGhhbmRsZSBtZXNzYWdlcyByZWNlaXZlIGV2ZW50LlxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtzdHJpbmd9IGNoYW5uZWxOYW1lIENoYXQgY2hhbm5lbCBuYW1lLlxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHt7QGxpbmsgUGhvdG9uLkNoYXQuTWVzc2FnZX1bXX0gbWVzc2FnZXMgQXJyYXkgb2YgcmVjZWl2ZWQgbWVzc2FnZXMuXHJcbiAgICAgICAgICAgICAgICBAbWV0aG9kIFBob3Rvbi5DaGF0LkNoYXRDbGllbnQjb25DaGF0TWVzc2FnZXNcclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ2hhdENsaWVudC5wcm90b3R5cGUub25DaGF0TWVzc2FnZXMgPSBmdW5jdGlvbiAoY2hhbm5lbE5hbWUsIG1lc3NhZ2VzKSB7IH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgQHN1bW1hcnkgQ2FsbGVkIHdoZW4gbmV3IHByaXZhdGUgbWVzc2FnZSByZWNlaXZlZC48YnIvID5cclxuICAgICAgICAgICAgICAgIE92ZXJyaWRlIHRvIGhhbmRsZSBtZXNzYWdlIHJlY2VpdmUgZXZlbnQuXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge3N0cmluZ30gY2hhbm5lbE5hbWUgUHJpdmF0ZSBjaGFubmVsIG5hbWUoY291bnRlcnBhcnQgdXNlciBpZCkuXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge1Bob3Rvbi5DaGF0Lk1lc3NhZ2V9IG1lc3NhZ2UgUmVjZWl2ZWQgbWVzc2FnZS5cclxuICAgICAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLkNoYXQuQ2hhdENsaWVudCNvblByaXZhdGVNZXNzYWdlXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIENoYXRDbGllbnQucHJvdG90eXBlLm9uUHJpdmF0ZU1lc3NhZ2UgPSBmdW5jdGlvbiAoY2hhbm5lbE5hbWUsIG1lc3NhZ2UpIHsgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAc3VtbWFyeSBDYWxsZWQgd2hlbiB1c2VyIGZyb20gZnJpZW5kIGxpc3QgY2hhbmdlcyBzdGF0ZS48YnIvID5cclxuICAgICAgICAgICAgICAgIE92ZXJyaWRlIHRvIGhhbmRsZSBjaGFuZ2Ugc3RhdGUgZXZlbnQuXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge3N0cmluZ30gdXNlcklkIFVzZXIgaWQuXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge251bWJlcn0gc3RhdHVzIE5ldyBVc2VyIHN0YXR1cy4gUHJlZGVmaW5lZCB7QGxpbmsgUGhvdG9uLmNoYXQuQ29uc3RhbnRzLlVzZXJTdGF0dXMgQ29uc3RhbnRzLlVzZXJTdGF0dXN9IG9yIGN1c3RvbS5cclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7Ym9vbGVhbn0gZ290TWVzc2FnZSBUcnVlIGlmIHN0YXR1cyBtZXNzYWdlIHVwZGF0ZWQuXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge3N0cmluZ30gc3RhdHVzTWVzc2FnZSBPcHRpb25hbCBzdGF0dXMgbWVzc2FnZSAobWF5IGJlIG51bGwgZXZlbiBpZiBnb3RNZXNzYWdlID0gdHJ1ZSkuXHJcbiAgICAgICAgICAgICAgICBAbWV0aG9kIFBob3Rvbi5DaGF0LkNoYXRDbGllbnQjb25Vc2VyU3RhdHVzVXBkYXRlXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIENoYXRDbGllbnQucHJvdG90eXBlLm9uVXNlclN0YXR1c1VwZGF0ZSA9IGZ1bmN0aW9uICh1c2VySWQsIHN0YXR1cywgZ290TWVzc2FnZSwgc3RhdHVzTWVzc2FnZSkgeyB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IENvbm5lY3RzIHRvIGEgc3BlY2lmaWMgcmVnaW9uJ3MgTWFzdGVyIHNlcnZlciwgdXNpbmcgdGhlIE5hbWVTZXJ2ZXIgdG8gZmluZCB0aGUgSVAuXHJcbiAgICAgICAgICAgICAgICBPdmVycmlkZSB7QGxpbmsgUGhvdG9uLkNoYXQuQ2hhdENsaWVudCNvbldlYlJwY1Jlc3VsdCBvbldlYlJwY1Jlc3VsdH0gdG8gaGFuZGxlIHJlcXVlc3QgcmVzdWx0cy48YnIvPlxyXG4gICAgICAgICAgICAgICAgQG1ldGhvZCBQaG90b24uQ2hhdC5DaGF0Q2xpZW50I2Nvbm5lY3RUb1JlZ2lvbkZyb250RW5kXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge3N0cmluZ30gcmVnaW9uIFJlZ2lvbiBjb25uZWN0IHRvIE1hc3RlciBzZXJ2ZXIgb2YuXHJcbiAgICAgICAgICAgICAgICBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBjdXJyZW50IGNsaWVudCBzdGF0ZSBhbGxvd3MgY29ubmVjdGlvbi5cclxuICAgICAgICAgICAgKiovXHJcbiAgICAgICAgICAgIENoYXRDbGllbnQucHJvdG90eXBlLmNvbm5lY3RUb1JlZ2lvbkZyb250RW5kID0gZnVuY3Rpb24gKHJlZ2lvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdFRvUmVnaW9uTWFzdGVyKHJlZ2lvbik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgQHN1bW1hcnkgUmV0dXJucyB0cnVlIGlmIGNsaWVudCBjb25uZWN0ZWQgdG8gRnJvbnQgRW5kLldoZW4gY29ubmVjdGVkLCBjbGllbnQgY2FuIHNlbmQgbWVzc2FnZXMsIHN1YnNjcmliZSB0byBjaGFubmVscyBhbmQgc28gb24uXHJcbiAgICAgICAgICAgICAgICBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGNvbm5lY3RlZC5cclxuICAgICAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLkNoYXQuQ2hhdENsaWVudCNpc0Nvbm5lY3RlZFRvRnJvbnRFbmRcclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ2hhdENsaWVudC5wcm90b3R5cGUuaXNDb25uZWN0ZWRUb0Zyb250RW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUgPT0gQ2hhdENsaWVudC5DaGF0U3RhdGUuQ29ubmVjdGVkVG9Gcm9udEVuZDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAc3VtbWFyeSBTZW5kcyBvcGVyYXRpb24gdG8gc3Vic2NyaWJlIHRvIGEgbGlzdCBvZiBjaGFubmVscyBieSBuYW1lLjxici8+XHJcbiAgICAgICAgICAgICAgICBPdmVycmlkZSB7QGxpbmsgUGhvdG9uLkNoYXQuQ2hhdENsaWVudCNvblN1YnNjcmliZVJlc3VsdCBvblN1YnNjcmliZVJlc3VsdH0gdG8gaGFuZGxlIHJlcXVlc3QgcmVzdWx0cy5cclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7c3RyaW5nW119IGNoYW5uZWxOYW1lcyBBcnJheSBvZiBjaGFubmVsIG5hbWVzIHRvIHN1YnNjcmliZSB0by5cclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gQWRkaXRpb25hbCBvcHRpb25zXHJcbiAgICAgICAgICAgICAgICBAcHJvcGVydHkge29iamVjdH0gb3B0aW9ucyBBZGRpdGlvbmFsIG9wdGlvbnNcclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBbb3B0aW9ucy5oaXN0b3J5TGVuZ3RoXSBDb250cm9scyBtZXNzYWdlcyBoaXN0b3J5IHNlbnQgb24gc3Vic2NyaXB0aW9uLiBOb3Qgc3BlY2lmaWVkIG9yIDA6IG5vIGhpc3RvcnkuIDEgYW5kIGhpZ2hlcjogbnVtYmVyIG9mIG1lc3NhZ2VzIGluIGhpc3RvcnkuIC0xOiBhbGwgaGlzdG9yeS5cclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyW119IFtvcHRpb25zLmxhc3RJZHNdIEFycmF5IG9mIElEcyBvZiBsYXN0IG1lc3NhZ2VzIHJlY2VpdmVkIHBlciBjaGFubmVsLiBVc2VmdWwgd2hlbiByZXN1YnNjcmliaW5nIHRvIHJlY2VpdmUgb25seSBtZXNzYWdlcyB3ZSBtaXNzZWQuXHJcbiAgICAgICAgICAgICAgICBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG9wZXJhdGlvbiBzZW50LlxyXG4gICAgICAgICAgICAgICAgQG1ldGhvZCBQaG90b24uQ2hhdC5DaGF0Q2xpZW50I3N1YnNjcmliZVxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBDaGF0Q2xpZW50LnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoY2hhbm5lbE5hbWVzLCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChvcHRpb25zKSA9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IHsgaGlzdG9yeUxlbmd0aDogb3B0aW9ucyB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNDb25uZWN0ZWRUb0Zyb250RW5kKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhcIlN1YnNjcmliZSBjaGFubmVsczpcIiwgY2hhbm5lbE5hbWVzKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnB1c2goQ2hhdC5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5DaGFubmVscywgUGhvdG9uLlR5cGVFeHQuU3RyaW5nKGNoYW5uZWxOYW1lcykpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmhpc3RvcnlMZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy5wdXNoKENoYXQuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuSGlzdG9yeUxlbmd0aCwgUGhvdG9uLlR5cGVFeHQuSW50KG9wdGlvbnMuaGlzdG9yeUxlbmd0aCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmxhc3RJZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy5wdXNoKENoYXQuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuTXNnSWRzLCBQaG90b24uVHlwZUV4dC5JbnQob3B0aW9ucy5sYXN0SWRzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5oaXN0b3J5TGVuZ3RoID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMucHVzaChDaGF0LkNvbnN0YW50cy5QYXJhbWV0ZXJDb2RlLkhpc3RvcnlMZW5ndGgsIFBob3Rvbi5UeXBlRXh0LkludCgtMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFzdGVyUGVlci5zZW5kT3BlcmF0aW9uKENoYXQuQ29uc3RhbnRzLk9wZXJhdGlvbkNvZGUuU3Vic2NyaWJlLCBwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJzdWJzY3JpYmUgcmVxdWVzdCBlcnJvcjpcIiwgXCJOb3QgY29ubmVjdGVkIHRvIEZyb250IEVuZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgQHN1bW1hcnkgU2VuZHMgb3BlcmF0aW9uIHRvIHVuc3Vic2NyaWJlIGZyb20gYSBsaXN0IG9mIGNoYW5uZWxzIGJ5IG5hbWUuPGJyLyA+XHJcbiAgICAgICAgICAgICAgICBPdmVycmlkZSB7QGxpbmsgUGhvdG9uLkNoYXQuQ2hhdENsaWVudCNvblVuc3Vic2NyaWJlUmVzdWx0IG9uVW5zdWJzY3JpYmVSZXN1bHR9IHRvIGhhbmRsZSByZXF1ZXN0IHJlc3VsdHMuXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge3N0cmluZ1tdfSBjaGFubmVsTmFtZXMgQXJyYXkgb2YgY2hhbm5lbCBuYW1lcyB0byB1bnN1YnNjcmliZSBmcm9tLlxyXG4gICAgICAgICAgICAgICAgQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBvcGVyYXRpb24gc2VudC5cclxuICAgICAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLkNoYXQuQ2hhdENsaWVudCN1bnN1YnNjcmliZVxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBDaGF0Q2xpZW50LnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uIChjaGFubmVsTmFtZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQ29ubmVjdGVkVG9Gcm9udEVuZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoXCJVbnN1YnNjcmliZSBjaGFubmVsczpcIiwgY2hhbm5lbE5hbWVzKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnB1c2goQ2hhdC5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5DaGFubmVscywgUGhvdG9uLlR5cGVFeHQuU3RyaW5nKGNoYW5uZWxOYW1lcykpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFzdGVyUGVlci5zZW5kT3BlcmF0aW9uKENoYXQuQ29uc3RhbnRzLk9wZXJhdGlvbkNvZGUuVW5zdWJzY3JpYmUsIHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihcInVuc3Vic2NyaWJlIHJlcXVlc3QgZXJyb3I6XCIsIFwiTm90IGNvbm5lY3RlZCB0byBGcm9udCBFbmRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IFNlbmRzIGEgbWVzc2FnZSB0byBhIHB1YmxpYyBjaGFubmVsLjxici8+XHJcbiAgICAgICAgICAgICAgICBDaGFubmVsIHNob3VsZCBiZSBzdWJzY3JpYmVkIGJlZm9yZSBwdWJsaXNoaW5nIHRvIGl0LlxyXG4gICAgICAgICAgICAgICAgRXZlcnlvbmUgaW4gdGhhdCBjaGFubmVsIHdpbGwgZ2V0IHRoZSBtZXNzYWdlLlxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtzdHJpbmd9IGNoYW5uZWxOYW1lIENoYW5uZWwgbmFtZSB0byBzZW5kIG1lc3NhZ2UgdG8uXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge2FueX0gY29udGVudCBUZXh0IHN0cmluZyBvciBhcmJpdHJhcnkgZGF0YSB0byBzZW5kLlxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSBBZGRpdGlvbmFsIG9wdGlvbnNcclxuICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7b2JqZWN0fSBvcHRpb25zIEFkZGl0aW9uYWwgb3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtib29sZWFufSBbb3B0aW9ucy53ZWJGb3J3YXJkXSBPcHRpb25hbGx5LCBwcml2YXRlIG1lc3NhZ2VzIGNhbiBiZSBmb3J3YXJkZWQgYXMgd2ViaG9va3MuIENvbmZpZ3VyZSB3ZWJob29rcyBmb3IgeW91ciBDaGF0IGFwcCB0byB1c2UgdGhpcy5cclxuICAgICAgICAgICAgICAgIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbWVzc2FnZSBzZW50LlxyXG4gICAgICAgICAgICAgICAgQG1ldGhvZCBQaG90b24uQ2hhdC5DaGF0Q2xpZW50I3B1Ymxpc2hNZXNzYWdlXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIENoYXRDbGllbnQucHJvdG90eXBlLnB1Ymxpc2hNZXNzYWdlID0gZnVuY3Rpb24gKGNoYW5uZWxOYW1lLCBjb250ZW50LCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0Nvbm5lY3RlZFRvRnJvbnRFbmQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJhbXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMucHVzaChDaGF0LkNvbnN0YW50cy5QYXJhbWV0ZXJDb2RlLkNoYW5uZWwsIGNoYW5uZWxOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMucHVzaChDaGF0LkNvbnN0YW50cy5QYXJhbWV0ZXJDb2RlLk1lc3NhZ2UsIGNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLndlYkZvcndhcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy5wdXNoKENoYXQuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuV2ViRmxhZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnB1c2goUGhvdG9uLlR5cGVFeHQuQnl0ZShXZWJGbGFncy5IdHRwRm9yd2FyZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFzdGVyUGVlci5zZW5kT3BlcmF0aW9uKENoYXQuQ29uc3RhbnRzLk9wZXJhdGlvbkNvZGUuUHVibGlzaCwgcGFyYW1zKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwicHVibGlzaE1lc3NhZ2UgcmVxdWVzdCBlcnJvcjpcIiwgXCJOb3QgY29ubmVjdGVkIHRvIEZyb250IEVuZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgQHN1bW1hcnkgU2VuZHMgYSBwcml2YXRlIG1lc3NhZ2UgdG8gYSBzaW5nbGUgdGFyZ2V0IHVzZXIuPGJyLz5cclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7c3RyaW5nfSB1c2VySWQgVXNlciBpZCB0byBzZW5kIHRoaXMgbWVzc2FnZSB0by5cclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7YW55fSBjb250ZW50IFRleHQgc3RyaW5nIG9yIGFyYml0cmFyeSBkYXRhIHRvIHNlbmQuXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIEFkZGl0aW9uYWwgb3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgQHByb3BlcnR5IHtvYmplY3R9IG9wdGlvbnMgQWRkaXRpb25hbCBvcHRpb25zXHJcbiAgICAgICAgICAgICAgICBAcHJvcGVydHkge2Jvb2xlYW59IFtvcHRpb25zLndlYkZvcndhcmRdIE9wdGlvbmFsbHksIHByaXZhdGUgbWVzc2FnZXMgY2FuIGJlIGZvcndhcmRlZCBhcyB3ZWJob29rcy4gQ29uZmlndXJlIHdlYmhvb2tzIGZvciB5b3VyIENoYXQgYXBwIHRvIHVzZSB0aGlzLlxyXG4gICAgICAgICAgICAgICAgQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBtZXNzYWdlIHNlbnQuXHJcbiAgICAgICAgICAgICAgICBAbWV0aG9kIFBob3Rvbi5DaGF0LkNoYXRDbGllbnQjc2VuZFByaXZhdGVNZXNzYWdlXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIENoYXRDbGllbnQucHJvdG90eXBlLnNlbmRQcml2YXRlTWVzc2FnZSA9IGZ1bmN0aW9uICh1c2VySWQsIGNvbnRlbnQsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQ29ubmVjdGVkVG9Gcm9udEVuZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5wdXNoKENoYXQuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuVXNlcklkLCB1c2VySWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5wdXNoKENoYXQuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuTWVzc2FnZSwgY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMud2ViRm9yd2FyZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnB1c2goQ2hhdC5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5XZWJGbGFncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMucHVzaChQaG90b24uVHlwZUV4dC5CeXRlKFdlYkZsYWdzLkh0dHBGb3J3YXJkKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXN0ZXJQZWVyLnNlbmRPcGVyYXRpb24oQ2hhdC5Db25zdGFudHMuT3BlcmF0aW9uQ29kZS5TZW5kUHJpdmF0ZSwgcGFyYW1zKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwic2VuZFByaXZhdGVNZXNzYWdlIHJlcXVlc3QgZXJyb3I6XCIsIFwiTm90IGNvbm5lY3RlZCB0byBGcm9udCBFbmRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IFNldHMgdGhlIHVzZXIncyBzdGF0dXMgKHByZS1kZWZpbmVkIG9yIGN1c3RvbSkgYW5kIGFuIG9wdGlvbmFsIG1lc3NhZ2UuPGJyLz5cclxuICAgICAgICAgICAgICAgIFRoZSBwcmVkZWZpbmVkIHN0YXR1cyB2YWx1ZXMgY2FuIGJlIGZvdW5kIGluIHtAbGluayBQaG90b24uQ2hhdC5Db25zdGFudHMuVXNlclN0YXR1cyBDb25zdGFudHMuVXNlclN0YXR1c30uPGJyLz5cclxuICAgICAgICAgICAgICAgIFN0YXRlIFVzZXJTdGF0dXMuSW52aXNpYmxlIHdpbGwgbWFrZSB5b3Ugb2ZmbGluZSBmb3IgZXZlcnlvbmUgYW5kIHNlbmQgbm8gbWVzc2FnZS5cclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7bnVtYmVyfSBzdGF0dXMgVXNlciBzdGF0dXMgdG8gc2V0LlxyXG4gICAgICAgICAgICAgICAgQHBhcmFtIHtzdHJpbmd9IFttZXNzYWdlPW51bGxdIFN0YXRlIG1lc3NhZ2UuXHJcbiAgICAgICAgICAgICAgICBAcGFyYW0ge2Jvb2xlYW59IFtza2lwTWVzc2FnZT1mYWxzZV0gSWYgdHJ1ZSB7IGNsaWVudCBkb2VzIG5vdCBzZW5kIHN0YXRlIG1lc3NhZ2UuXHJcbiAgICAgICAgICAgICAgICBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGNvbW1hbmQgc2VudC5cclxuICAgICAgICAgICAgICAgIEBtZXRob2QgUGhvdG9uLkNoYXQuQ2hhdENsaWVudCNzZXRVc2VyU3RhdHVzXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIENoYXRDbGllbnQucHJvdG90eXBlLnNldFVzZXJTdGF0dXMgPSBmdW5jdGlvbiAoc3RhdHVzLCBzdGF0dXNNZXNzYWdlLCBza2lwTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1c01lc3NhZ2UgPT09IHZvaWQgMCkgeyBzdGF0dXNNZXNzYWdlID0gbnVsbDsgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHNraXBNZXNzYWdlID09PSB2b2lkIDApIHsgc2tpcE1lc3NhZ2UgPSBmYWxzZTsgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNDb25uZWN0ZWRUb0Zyb250RW5kKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnB1c2goQ2hhdC5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5TdGF0dXMsIFBob3Rvbi5UeXBlRXh0LkludChzdGF0dXMpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2tpcE1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy5wdXNoKENoYXQuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuU2tpcE1lc3NhZ2UsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnB1c2goQ2hhdC5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5NZXNzYWdlLCBzdGF0dXNNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hc3RlclBlZXIuc2VuZE9wZXJhdGlvbihDaGF0LkNvbnN0YW50cy5PcGVyYXRpb25Db2RlLlVwZGF0ZVN0YXR1cywgcGFyYW1zKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwic2V0VXNlclN0YXR1cyByZXF1ZXN0IGVycm9yOlwiLCBcIk5vdCBjb25uZWN0ZWQgdG8gRnJvbnQgRW5kXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICBAc3VtbWFyeSBBZGRzIHVzZXJzIHRvIHRoZSBsaXN0IG9uIHRoZSBDaGF0IFNlcnZlciB3aGljaCB3aWxsIHNlbmQgeW91IHN0YXR1cyB1cGRhdGVzIGZvciB0aG9zZS5cclxuICAgICAgICAgICAgICAgIEB0cGFyYW0gc3RyaW5nW10gdXNlcklkcyBBcnJheSBvZiB1c2VyIGlkcy5cclxuICAgICAgICAgICAgICAgIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgY29tbWFuZCBzZW50LlxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBDaGF0Q2xpZW50LnByb3RvdHlwZS5hZGRGcmllbmRzID0gZnVuY3Rpb24gKHVzZXJJZHMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQ29ubmVjdGVkVG9Gcm9udEVuZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5wdXNoKENoYXQuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuRnJpZW5kcywgUGhvdG9uLlR5cGVFeHQuU3RyaW5nKHVzZXJJZHMpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hc3RlclBlZXIuc2VuZE9wZXJhdGlvbihDaGF0LkNvbnN0YW50cy5PcGVyYXRpb25Db2RlLkFkZEZyaWVuZGRzLCBwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJhZGRGcmllbmRzIHJlcXVlc3QgZXJyb3I6XCIsIFwiTm90IGNvbm5lY3RlZCB0byBGcm9udCBFbmRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IFJlbW92ZXMgdXNlcnMgZnJvbSB0aGUgbGlzdCBvbiB0aGUgQ2hhdCBTZXJ2ZXIgd2hpY2ggd2lsbCBzZW5kIHlvdSBzdGF0dXMgdXBkYXRlcyBmb3IgdGhvc2UuXHJcbiAgICAgICAgICAgICAgICBAdHBhcmFtIHN0cmluZ1tdIGZyaWVuZHMgQXJyYXkgb2YgdXNlciBpZHMuXHJcbiAgICAgICAgICAgICAgICBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGNvbW1hbmQgc2VudC5cclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ2hhdENsaWVudC5wcm90b3R5cGUucmVtb3ZlRnJpZW5kcyA9IGZ1bmN0aW9uICh1c2VySWRzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0Nvbm5lY3RlZFRvRnJvbnRFbmQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJhbXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMucHVzaChDaGF0LkNvbnN0YW50cy5QYXJhbWV0ZXJDb2RlLkZyaWVuZHMsIFBob3Rvbi5UeXBlRXh0LlN0cmluZyh1c2VySWRzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXN0ZXJQZWVyLnNlbmRPcGVyYXRpb24oQ2hhdC5Db25zdGFudHMuT3BlcmF0aW9uQ29kZS5SZW1vdmVGcmllbmRzLCBwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJyZW1vdmVGcmllbmRzIHJlcXVlc3QgZXJyb3I6XCIsIFwiTm90IGNvbm5lY3RlZCB0byBGcm9udCBFbmRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IFJldHVybnMgbGlzdCBvZiBwdWJsaWMgY2hhbm5lbHMgY2xpZW50IHN1YnNjcmliZWQgdG8uXHJcbiAgICAgICAgICAgICAgICBAcmV0dXJuIENoYW5uZWxbXSBBcnJheSBvZiBwdWJsaWMgY2hhbm5lbHMuXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIENoYXRDbGllbnQucHJvdG90eXBlLmdldFB1YmxpY0NoYW5uZWxzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHVibGljQ2hhbm5lbHM7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgQHN1bW1hcnkgUmV0dXJucyBsaXN0IG9mIGNoYW5uZWxzIHJlcHJlc2VudGluZyBjdXJyZW50IHByaXZhdGUgY29udmVyc2F0aW9uLlxyXG4gICAgICAgICAgICAgICAgQHJldHVybiBDaGFubmVsW10gQXJyYXkgb2YgcHJpdmF0ZSBjaGFubmVscy5cclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ2hhdENsaWVudC5wcm90b3R5cGUuZ2V0UHJpdmF0ZUNoYW5uZWxzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJpdmF0ZUNoYW5uZWxzO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvLyBwcml2YXRlXHJcbiAgICAgICAgICAgIENoYXRDbGllbnQucHJvdG90eXBlLmdldE9yQWRkQ2hhbm5lbCA9IGZ1bmN0aW9uIChjaGFubmVscywgbmFtZSwgaXNQcml2YXRlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhbm5lbHNbbmFtZV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbm5lbHNbbmFtZV0gPSBuZXcgQ2hhbm5lbChuYW1lLCBpc1ByaXZhdGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoYW5uZWxzW25hbWVdO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvLyBpbnRlcm5hbFxyXG4gICAgICAgICAgICBDaGF0Q2xpZW50LnByb3RvdHlwZS5pbml0TWFzdGVyUGVlciA9IGZ1bmN0aW9uIChtcCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUuaW5pdE1hc3RlclBlZXIuY2FsbCh0aGlzLCBtcCk7XHJcbiAgICAgICAgICAgICAgICAvLyBvbk9wZXJhdGlvblJlc3BvbnNlIGNhbGxlZCBpZiBubyBsaXN0ZW5lciBleGlzdHNcclxuICAgICAgICAgICAgICAgIC8vbXAuYWRkUmVzcG9uc2VMaXN0ZW5lcihDb25zdGFudHMuT3BlcmF0aW9uQ29kZS5QdWJsaXNoLCAoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICBtcC5fbG9nZ2VyLmRlYnVnKFwicmVzcCBQdWJsaXNoXCIsIGRhdGEuZXJyQ29kZSwgZGF0YS5lcnJNc2cpO1xyXG4gICAgICAgICAgICAgICAgLy99KTtcclxuICAgICAgICAgICAgICAgIC8vbXAuYWRkUmVzcG9uc2VMaXN0ZW5lcihDb25zdGFudHMuT3BlcmF0aW9uQ29kZS5TZW5kUHJpdmF0ZSwgKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgbXAuX2xvZ2dlci5kZWJ1ZyhcInJlc3AgU2VuZFByaXZhdGVcIiwgZGF0YS5lcnJDb2RlLCBkYXRhLmVyck1zZyk7XHJcbiAgICAgICAgICAgICAgICAvL30pO1xyXG4gICAgICAgICAgICAgICAgLy9tcC5hZGRSZXNwb25zZUxpc3RlbmVyKENvbnN0YW50cy5PcGVyYXRpb25Db2RlLlVwZGF0ZVN0YXR1cywgKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgbXAuX2xvZ2dlci5kZWJ1ZyhcInJlc3AgVXBkYXRlU3RhdHVzXCIsIGRhdGEuZXJyQ29kZSwgZGF0YS5lcnJNc2cpO1xyXG4gICAgICAgICAgICAgICAgLy99KTtcclxuICAgICAgICAgICAgICAgIC8vbXAuYWRkUmVzcG9uc2VMaXN0ZW5lcihDb25zdGFudHMuT3BlcmF0aW9uQ29kZS5GcmllbmRMaXN0LCAoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICBtcC5fbG9nZ2VyLmRlYnVnKFwicmVzcCBGcmllbmRMaXN0XCIsIGRhdGEuZXJyQ29kZSwgZGF0YS5lcnJNc2cpO1xyXG4gICAgICAgICAgICAgICAgLy99KTtcclxuICAgICAgICAgICAgICAgIG1wLmFkZEV2ZW50TGlzdGVuZXIoQ2hhdC5Db25zdGFudHMuRXZlbnRDb2RlLkNoYXRNZXNzYWdlcywgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2VuZGVycyA9IGRhdGEudmFsc1tDaGF0LkNvbnN0YW50cy5QYXJhbWV0ZXJDb2RlLlNlbmRlcnNdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlcyA9IGRhdGEudmFsc1tDaGF0LkNvbnN0YW50cy5QYXJhbWV0ZXJDb2RlLk1lc3NhZ2VzXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2hhbm5lbE5hbWUgPSBkYXRhLnZhbHNbQ2hhdC5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5DaGFubmVsXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2ggPSBfdGhpcy5wdWJsaWNDaGFubmVsc1tjaGFubmVsTmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdNZXNzYWdlcyA9IGNoLmFkZE1lc3NhZ2VzKHNlbmRlcnMsIG1lc3NhZ2VzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2gubGFzdElkID0gZGF0YS52YWxzW0NoYXQuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuTXNnSWRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5vbkNoYXRNZXNzYWdlcyhjaGFubmVsTmFtZSwgbmV3TWVzc2FnZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXAuX2xvZ2dlci53YXJuKFwiZXYgQ2hhdE1lc3NhZ2VzOiBHb3QgbWVzc2FnZSBmcm9tIHVuc3Vic2NyaWJlZCBjaGFubmVsIFwiLCBjaGFubmVsTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBtcC5hZGRFdmVudExpc3RlbmVyKENoYXQuQ29uc3RhbnRzLkV2ZW50Q29kZS5Qcml2YXRlTWVzc2FnZSwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2VuZGVyID0gZGF0YS52YWxzW0NoYXQuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuU2VuZGVyXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9IGRhdGEudmFsc1tDaGF0LkNvbnN0YW50cy5QYXJhbWV0ZXJDb2RlLk1lc3NhZ2VdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1c2VySWQgPSBkYXRhLnZhbHNbQ2hhdC5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5Vc2VySWRdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGFubmVsTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmdldFVzZXJJZCgpID09IHNlbmRlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbE5hbWUgPSB1c2VySWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFubmVsTmFtZSA9IHNlbmRlcjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2ggPSBfdGhpcy5nZXRPckFkZENoYW5uZWwoX3RoaXMucHJpdmF0ZUNoYW5uZWxzLCBjaGFubmVsTmFtZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2gubGFzdElkID0gZGF0YS52YWxzW0NoYXQuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuTXNnSWRdO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm9uUHJpdmF0ZU1lc3NhZ2UoY2hhbm5lbE5hbWUsIG5ldyBNZXNzYWdlKHNlbmRlciwgbWVzc2FnZSkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBtcC5hZGRFdmVudExpc3RlbmVyKENoYXQuQ29uc3RhbnRzLkV2ZW50Q29kZS5TdGF0dXNVcGRhdGUsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlbmRlciA9IGRhdGEudmFsc1tDaGF0LkNvbnN0YW50cy5QYXJhbWV0ZXJDb2RlLlNlbmRlcl07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXR1cyA9IGRhdGEudmFsc1tDaGF0LkNvbnN0YW50cy5QYXJhbWV0ZXJDb2RlLlN0YXR1c107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBkYXRhLnZhbHNbQ2hhdC5Db25zdGFudHMuUGFyYW1ldGVyQ29kZS5NZXNzYWdlXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZ290TWVzc2FnZSA9IG1lc3NhZ2UgIT09IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5vblVzZXJTdGF0dXNVcGRhdGUoc2VuZGVyLCBzdGF0dXMsIGdvdE1lc3NhZ2UsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBtcC5hZGRFdmVudExpc3RlbmVyKENoYXQuQ29uc3RhbnRzLkV2ZW50Q29kZS5TdWJzY3JpYmUsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbXAuX2xvZ2dlci5kZWJ1ZyhcImV2IFN1YnNjcmliZVwiLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoYW5uZWxzID0gZGF0YS52YWxzW0NoYXQuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuQ2hhbm5lbHNdIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHRzID0gZGF0YS52YWxzW0NoYXQuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuU3Vic2NyaWJlUmVzdWx0c10gfHwgW107XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBjaGFubmVscykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2ggPSBjaGFubmVsc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzW2NoXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA8IHJlc3VsdHMubGVuZ3RoICYmIHJlc3VsdHNbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmdldE9yQWRkQ2hhbm5lbChfdGhpcy5wdWJsaWNDaGFubmVscywgY2gsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc1tjaF0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm9uU3Vic2NyaWJlUmVzdWx0KHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIG1wLmFkZEV2ZW50TGlzdGVuZXIoQ2hhdC5Db25zdGFudHMuRXZlbnRDb2RlLlVuc3Vic2NyaWJlLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1wLl9sb2dnZXIuZGVidWcoXCJldiBVbnN1YnNjcmliZVwiLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoYW5uZWxzID0gZGF0YS52YWxzW0NoYXQuQ29uc3RhbnRzLlBhcmFtZXRlckNvZGUuQ2hhbm5lbHNdIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gY2hhbm5lbHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoID0gY2hhbm5lbHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSAoX3RoaXMucHVibGljQ2hhbm5lbHNbY2hdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzW2NoXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm9uVW5zdWJzY3JpYmVSZXN1bHQocmVzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgIEBzdW1tYXJ5IENvbnZlcnRzIHtAbGluayBQaG90b24uQ2hhdC5DaGF0Q2xpZW50LkNoYXRTdGF0ZSBDaGF0U3RhdGV9IGVsZW1lbnQgdG8gc3RyaW5nIG5hbWUuXHJcbiAgICAgICAgICAgICAgICBAbWV0aG9kIFBob3Rvbi5DaGF0LkNoYXRDbGllbnQuU3RhdGVUb05hbWVcclxuICAgICAgICAgICAgICAgIEBwYXJhbSB7UGhvdG9uLkNoYXQuQ2hhdENsaWVudC5DaGF0U3RhdGV9IHN0YXRlIENsaWVudCBzdGF0ZS5cclxuICAgICAgICAgICAgICAgIEByZXR1cm5zIHtzdHJpbmd9IFNwZWNpZmllZCBlbGVtZW50IG5hbWUgb3IgdW5kZWZpbmVkIGlmIG5vdCBmb3VuZC5cclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ2hhdENsaWVudC5TdGF0ZVRvTmFtZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHggPSBFeGl0Z2FtZXMuQ29tbW9uLlV0aWwuZ2V0RW51bUtleUJ5VmFsdWUoQ2hhdENsaWVudC5DaGF0U3RhdGUsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGlmICh4ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTdXBlciBjbGFzcyBzdGF0ZXMgc3VwcG9ydCAtIHVzZWxlc3Mgc2luY2UgYWxsIHN0YXRlcyBvdmVycmlkZGVuIGJ1dCBtYXkgaGVscCBzb21laG93IHdoZW4gZGVidWdnaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEV4aXRnYW1lcy5Db21tb24uVXRpbC5nZXRFbnVtS2V5QnlWYWx1ZShDaGF0Q2xpZW50LlN0YXRlLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgQ2hhdENsaWVudC5DaGF0UGVlckVycm9yQ29kZSA9IHtcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgIEBzdW1tYXJ5IEVudW0gZm9yIGNsaWVudCBwZWVycyBlcnJvciBjb2Rlcy5cclxuICAgICAgICAgICAgICAgICAgICBAbWVtYmVyIFBob3Rvbi5DaGF0LkNoYXRDbGllbnQuQ2hhdFBlZXJFcnJvckNvZGVcclxuICAgICAgICAgICAgICAgICAgICBAcmVhZG9ubHlcclxuICAgICAgICAgICAgICAgICAgICBAcHJvcGVydHkge251bWJlcn0gT2sgTm8gRXJyb3IuXHJcbiAgICAgICAgICAgICAgICAgICAgQHByb3BlcnR5IHtudW1iZXJ9IEZyb250RW5kRXJyb3IgR2VuZXJhbCBGcm9udEVuZCBzZXJ2ZXIgcGVlciBlcnJvci5cclxuICAgICAgICAgICAgICAgICAgICBAcHJvcGVydHkge251bWJlcn0gRnJvbnRFbmRDb25uZWN0RmFpbGVkIEZyb250RW5kIHNlcnZlciBjb25uZWN0aW9uIGVycm9yLlxyXG4gICAgICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBGcm9udEVuZENvbm5lY3RDbG9zZWQgRGlzY29ubmVjdGVkIGZyb20gRnJvbnRFbmQgc2VydmVyLlxyXG4gICAgICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBGcm9udEVuZFRpbWVvdXQgRGlzY29ubmVjdGVkIGZyb20gRnJvbnRFbmQgc2VydmVyIGZvciB0aW1lb3V0LlxyXG4gICAgICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBGcm9udEVuZEVuY3J5cHRpb25Fc3RhYmxpc2hFcnJvciBGcm9udEVuZCBzZXJ2ZXIgZW5jcnlwdGlvbiBlc3RhYmxpc2hpbmcgZmFpbGVkLlxyXG4gICAgICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBGcm9udEVuZEF1dGhlbnRpY2F0aW9uRmFpbGVkIEZyb250RW5kIHNlcnZlciBhdXRoZW50aWNhdGlvbiBmYWlsZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgQHByb3BlcnR5IHtudW1iZXJ9IE5hbWVTZXJ2ZXJFcnJvciBHZW5lcmFsIE5hbWVTZXJ2ZXIgcGVlciBlcnJvci5cclxuICAgICAgICAgICAgICAgICAgICBAcHJvcGVydHkge251bWJlcn0gTmFtZVNlcnZlckNvbm5lY3RGYWlsZWQgTmFtZVNlcnZlciBjb25uZWN0aW9uIGVycm9yLlxyXG4gICAgICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBOYW1lU2VydmVyQ29ubmVjdENsb3NlZCBEaXNjb25uZWN0ZWQgZnJvbSBOYW1lU2VydmVyLlxyXG4gICAgICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBOYW1lU2VydmVyVGltZW91dCBEaXNjb25uZWN0ZWQgZnJvbSBOYW1lU2VydmVyIGZvciB0aW1lb3V0LlxyXG4gICAgICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBOYW1lU2VydmVyRW5jcnlwdGlvbkVzdGFibGlzaEVycm9yIE5hbWVTZXJ2ZXIgZW5jcnlwdGlvbiBlc3RhYmxpc2hpbmcgZmFpbGVkLlxyXG4gICAgICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBOYW1lU2VydmVyQXV0aGVudGljYXRpb25GYWlsZWQgTmFtZVNlcnZlciBhdXRoZW50aWNhdGlvbiBmYWlsZWQuXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIE9rOiAwLFxyXG4gICAgICAgICAgICAgICAgRnJvbnRFbmRFcnJvcjogMTAwMSxcclxuICAgICAgICAgICAgICAgIEZyb250RW5kQ29ubmVjdEZhaWxlZDogMTAwMixcclxuICAgICAgICAgICAgICAgIEZyb250RW5kQ29ubmVjdENsb3NlZDogMTAwMyxcclxuICAgICAgICAgICAgICAgIEZyb250RW5kVGltZW91dDogMTAwNCxcclxuICAgICAgICAgICAgICAgIEZyb250RW5kRW5jcnlwdGlvbkVzdGFibGlzaEVycm9yOiAxMDA1LFxyXG4gICAgICAgICAgICAgICAgRnJvbnRFbmRBdXRoZW50aWNhdGlvbkZhaWxlZDogMTEwMSxcclxuICAgICAgICAgICAgICAgIE5hbWVTZXJ2ZXJFcnJvcjogMzAwMSxcclxuICAgICAgICAgICAgICAgIE5hbWVTZXJ2ZXJDb25uZWN0RmFpbGVkOiAzMDAyLFxyXG4gICAgICAgICAgICAgICAgTmFtZVNlcnZlckNvbm5lY3RDbG9zZWQ6IDMwMDMsXHJcbiAgICAgICAgICAgICAgICBOYW1lU2VydmVyVGltZW91dDogMzAwNCxcclxuICAgICAgICAgICAgICAgIE5hbWVTZXJ2ZXJFbmNyeXB0aW9uRXN0YWJsaXNoRXJyb3I6IDMwMCxcclxuICAgICAgICAgICAgICAgIE5hbWVTZXJ2ZXJBdXRoZW50aWNhdGlvbkZhaWxlZDogMzEwMVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBDaGF0Q2xpZW50LkNoYXRTdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgIEBzdW1tYXJ5IEVudW0gZm9yIGNsaWVudCBzdGF0ZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lbWJlciBQaG90b24uQ2hhdC5DaGF0Q2xpZW50LkNoYXRTdGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIEByZWFkb25seVxyXG4gICAgICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBFcnJvciBDcml0aWNhbCBlcnJvciBvY2N1cnJlZC5cclxuICAgICAgICAgICAgICAgICAgICBAcHJvcGVydHkge251bWJlcn0gVW5pbml0aWFsaXplZCBDbGllbnQgaXMgY3JlYXRlZCBidXQgbm90IHVzZWQgeWV0LlxyXG4gICAgICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBDb25uZWN0aW5nVG9OYW1lU2VydmVyIENvbm5lY3RpbmcgdG8gTmFtZVNlcnZlci5cclxuICAgICAgICAgICAgICAgICAgICBAcHJvcGVydHkge251bWJlcn0gQ29ubmVjdGVkVG9OYW1lU2VydmVyIENvbm5lY3RlZCB0byBOYW1lU2VydmVyLlxyXG4gICAgICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBDb25uZWN0aW5nVG9Gcm9udEVuZCBDb25uZWN0aW5nIHRvIEZyb250RW5kIHNlcnZlci5cclxuICAgICAgICAgICAgICAgICAgICBAcHJvcGVydHkge251bWJlcn0gQ29ubmVjdGVkVG9Gcm9udEVuZCBDb25uZWN0ZWQgdG8gRnJvbnRFbmQgc2VydmVyLlxyXG4gICAgICAgICAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBEaXNjb25uZWN0ZWQgVGhlIGNsaWVudCBpcyBubyBsb25nZXIgY29ubmVjdGVkICh0byBhbnkgc2VydmVyKS5cclxuICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBFcnJvcjogLTEsXHJcbiAgICAgICAgICAgICAgICBVbmluaXRpYWxpemVkOiAwLFxyXG4gICAgICAgICAgICAgICAgQ29ubmVjdGluZ1RvTmFtZVNlcnZlcjogMSxcclxuICAgICAgICAgICAgICAgIENvbm5lY3RlZFRvTmFtZVNlcnZlcjogMixcclxuICAgICAgICAgICAgICAgIENvbm5lY3RpbmdUb0Zyb250RW5kOiAzLFxyXG4gICAgICAgICAgICAgICAgQ29ubmVjdGVkVG9Gcm9udEVuZDogNCxcclxuICAgICAgICAgICAgICAgIERpc2Nvbm5lY3RlZDogMTBcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIENoYXRDbGllbnQ7XHJcbiAgICAgICAgfShQaG90b24uTG9hZEJhbGFuY2luZy5Mb2FkQmFsYW5jaW5nQ2xpZW50KSk7XHJcbiAgICAgICAgQ2hhdC5DaGF0Q2xpZW50ID0gQ2hhdENsaWVudDtcclxuICAgIH0pKENoYXQgPSBQaG90b24uQ2hhdCB8fCAoUGhvdG9uLkNoYXQgPSB7fSkpO1xyXG59KShQaG90b24gfHwgKFBob3RvbiA9IHt9KSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFBob3RvbjtcclxuIl19