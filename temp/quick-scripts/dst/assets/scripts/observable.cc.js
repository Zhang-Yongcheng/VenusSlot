
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/observable.cc.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6051cnGfspElqNWqRW7U1y5', 'observable.cc');
// scripts/observable.cc.js

// @ts-nocheck
'use strict';

var _excluded = ["type"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Object.defineProperty(exports, '__esModule', {
  value: true
});

var co = require('./co.cc');

var valueTypes_cc = require('./value-types.cc');

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : {
    'default': e
  };
}

var co__default = /*#__PURE__*/_interopDefaultLegacy(co); //   return function* dispatch({ getStates }) {
//   };
// }


var emptyArray = Object.freeze([]);

function createActiveScheduler(_ref, options) {
  var dispatch = _ref.dispatch,
      unsubscribe = _ref.unsubscribe,
      complete = _ref.complete;
  var states = [];

  var getStates = function getStates() {
    var result;

    if (states.length === 0) {
      result = emptyArray;
    } else {
      result = states;
      states = [];
    }

    return result;
  };

  options.coroutineGroup.start( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return dispatch({
              getStates: getStates
            });

          case 3:
            _context.next = 8;
            break;

          case 5:
            _context.prev = 5;
            _context.t0 = _context["catch"](0);
            console.error("[observable.createActiveScheduler] error: " + valueTypes_cc.errorToString(_context.t0));

          case 8:
            if (states.length > 0) {
              states = [];
            }

            unsubscribe();
            complete();

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 5]]);
  }));
  return {
    schedule: function schedule(state) {
      states.push(state);
    }
  };
} //   return function* dispatch(state) {
//   };
// }


function createAsyncScheduler(_ref2, options) {
  var dispatch = _ref2.dispatch,
      unsubscribe = _ref2.unsubscribe,
      isUnsubscribed = _ref2.isUnsubscribed,
      complete = _ref2.complete;

  var _options$maxConcurren;

  var maxConcurrentLimit = Math.max((_options$maxConcurren = options.maxConcurrentLimit) != null ? _options$maxConcurren : 0, 0);
  var states = [];
  var running = 0;
  var end = false;

  var dispatchOne = function dispatchOne(state) {
    end = end || state.end === true;
    ++running;
    options.coroutineGroup.start( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return dispatch(state);

            case 3:
              _context.next = 8;
              break;

            case 5:
              _context.prev = 5;
              _context.t0 = _context["catch"](0);
              console.error("[observable.AsyncScheduler] error: " + valueTypes_cc.errorToString(_context.t0));

            case 8:
              --running;
              dispatchNext();

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 5]]);
    }));
  };

  var dispatchNext = function dispatchNext() {
    if (states.length === 0) {
      if (running === 0 && (end || isUnsubscribed())) {
        unsubscribe();
        complete();
      }
    } else if ((running < maxConcurrentLimit || maxConcurrentLimit === 0) && (states[0].end === false || running === 0)) {
      dispatchOne(states.shift());
    }
  };

  return {
    schedule: function schedule(state) {
      states.push(state);
      dispatchNext();
    }
  };
} //   return function dispatch(state) {
//   };
// }


function createImmediateScheduler(_ref3) {
  var dispatch = _ref3.dispatch,
      unsubscribe = _ref3.unsubscribe,
      isUnsubscribed = _ref3.isUnsubscribed,
      complete = _ref3.complete;
  return {
    schedule: function schedule(state) {
      var end = state.end === true;

      try {
        dispatch(state);
      } catch (e) {
        console.error("[observable.ImmediateScheduler] error: " + valueTypes_cc.errorToString(e));
      }

      if (end || isUnsubscribed()) {
        unsubscribe();
        complete();
      }
    }
  };
} //   return function* dispatch(state) {
//   };
// }


function createQueueScheduler(_ref4, options) {
  var dispatch = _ref4.dispatch,
      unsubscribe = _ref4.unsubscribe,
      isUnsubscribed = _ref4.isUnsubscribed,
      complete = _ref4.complete;
  var states = [];
  var coroutine = options.coroutineGroup.start( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var i, end, imax, state;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            i = 0;
            end = false;
            _context.prev = 3;
            imax = states.length;

          case 5:
            if (!(i < imax)) {
              _context.next = 12;
              break;
            }

            state = states[i++];
            end = end || state.end === true;
            _context.next = 10;
            return dispatch(state);

          case 10:
            _context.next = 5;
            break;

          case 12:
            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](3);
            console.error("[observable.QueueScheduler] error: " + valueTypes_cc.errorToString(_context.t0));

          case 17:
            if (i > 0) {
              states.splice(0, i);
            }

            if (!(states.length === 0)) {
              _context.next = 26;
              break;
            }

            if (!(end || isUnsubscribed())) {
              _context.next = 23;
              break;
            }

            unsubscribe();
            complete();
            return _context.abrupt("break", 28);

          case 23:
            coroutine.suspend();
            _context.next = 26;
            return;

          case 26:
            _context.next = 0;
            break;

          case 28:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 14]]);
  }));
  return {
    schedule: function schedule(state) {
      states.push(state);
      coroutine.resume();
    }
  };
}

var schedulers = {
  active: createActiveScheduler,
  immediate: createImmediateScheduler,
  queue: createQueueScheduler,
  async: createAsyncScheduler
};

function createScheduler(type) {
  var _schedulers$type;

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return (_schedulers$type = schedulers[type]) == null ? void 0 : _schedulers$type.call.apply(_schedulers$type, [schedulers].concat(args));
}

function createSubscribeableChild(observable, subscribeableParent, subscriber, options) {
  var _options$scheduler, _options$scheduler2, _options$scheduler2$t, _options$scheduler3, _options$scheduler3$c;

  (_options$scheduler = options.scheduler) != null ? _options$scheduler : options.scheduler = {};
  (_options$scheduler2$t = (_options$scheduler2 = options.scheduler).type) != null ? _options$scheduler2$t : _options$scheduler2.type = 'queue';
  (_options$scheduler3$c = (_options$scheduler3 = options.scheduler).coroutineGroup) != null ? _options$scheduler3$c : _options$scheduler3.coroutineGroup = observable.coroutineGroup;
  var subscribeable = createSubscribeable(observable, subscribeableParent);
  var dispatch = subscriber({
    unsubscribe: subscribeable.unsubscribe,
    isUnsubscribed: subscribeable.isUnsubscribed,
    getSubscribedCount: subscribeable.getSubscribedCount,
    next: subscribeable.next,
    complete: subscribeable.complete
  });

  var _options$scheduler4 = options.scheduler,
      schedulerType = _options$scheduler4.type,
      schedulerOptions = _objectWithoutPropertiesLoose(_options$scheduler4, _excluded);

  var scheduler = createScheduler(schedulerType, {
    dispatch: dispatch,
    unsubscribe: subscribeable.unsubscribe,
    isUnsubscribed: subscribeable.isUnsubscribed,
    complete: subscribeable.complete
  }, schedulerOptions);

  if (scheduler === undefined) {
    throw new Error("not supported scheduler: " + schedulerType);
  }

  subscribeable.push = function (state) {
    if (!subscribeable.isUnsubscribed()) {
      scheduler.schedule(state);
    }
  };

  return subscribeable;
}

function createSubscribeable(observable, subscribeableParent) {
  if (subscribeableParent === void 0) {
    subscribeableParent = null;
  }

  var subscribeableChildren = new Set();
  var unsubscribed = false;
  var completed = false;

  var subscribe = function subscribe(subscriber, options) {
    if (options === void 0) {
      options = {};
    }

    var subscribeableChild = createSubscribeableChild(observable, subscribeable, subscriber, options);

    if (!subscribeableChild.isUnsubscribed()) {
      subscribeableChildren.add(subscribeableChild);

      if (completed === true) {
        subscribeableChild.push({
          end: true
        });
      }
    }

    return {
      subscribe: subscribeableChild.subscribe
    };
  };

  var unsubscribe = function unsubscribe() {
    if (unsubscribed === false) {
      unsubscribed = true;

      if (subscribeableParent !== null) {
        subscribeableParent.unsubscribeChild(subscribeable);
      }
    }
  };

  var unsubscribeChild = function unsubscribeChild(subscribeableChild) {
    if (subscribeableChildren.has(subscribeableChild) && subscribeableChild.isUnsubscribed()) {
      subscribeableChildren["delete"](subscribeableChild);
    }
  };

  var isUnsubscribed = function isUnsubscribed() {
    return unsubscribed === true;
  };

  var getSubscribedCount = function getSubscribedCount() {
    return subscribeableChildren.size;
  };

  var next = function next(value) {
    if (completed === false) {
      notify({
        value: value,
        end: false
      });
    }
  };

  var complete = function complete(error) {
    if (completed === false) {
      completed = true;
      notify({
        error: error,
        end: true
      });
    }
  };

  var notify = function notify(state) {
    return void subscribeableChildren.forEach(function (subscribeableChild) {
      return void subscribeableChild.push(state);
    });
  };

  var subscribeable = {
    subscribe: subscribe,
    unsubscribe: unsubscribe,
    unsubscribeChild: unsubscribeChild,
    isUnsubscribed: isUnsubscribed,
    getSubscribedCount: getSubscribedCount,
    next: next,
    complete: complete
  };
  return subscribeable;
} // }
// (1) function createObservable(observer)
// (2) function createObservable(observer, coroutineGroup)
// (3) function createObservable(coroutineGroup)


function createObservable(observer, coroutineGroup) {
  if (coroutineGroup === void 0) {
    coroutineGroup = co__default["default"].mainGroup;
  }

  if (observer && co__default["default"].isCoroutineGroup(observer)) {
    coroutineGroup = observer;
    observer = undefined;
  }

  var subscribeable = createSubscribeable({
    coroutineGroup: coroutineGroup
  });

  if (observer === undefined) {
    return {
      subscribe: subscribeable.subscribe,
      getSubscribedCount: subscribeable.getSubscribedCount,
      next: subscribeable.next,
      complete: subscribeable.complete
    };
  }

  coroutineGroup.start( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return observer({
              getSubscribedCount: subscribeable.getSubscribedCount,
              next: subscribeable.next,
              complete: subscribeable.complete
            });

          case 3:
            _context.next = 8;
            break;

          case 5:
            _context.prev = 5;
            _context.t0 = _context["catch"](0);
            console.error("[observable.Observable] error: " + valueTypes_cc.errorToString(_context.t0));

          case 8:
            subscribeable.complete();

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 5]]);
  }));
  return {
    subscribe: subscribeable.subscribe
  };
}

var toObservable = function () {
  var to;
  {
    to = function toObservable() {
      throw new Error('not implemented');
    };
  }
  return to;
}(); // }


function createTask(worker, coroutineGroup) {
  if (coroutineGroup === void 0) {
    coroutineGroup = co__default["default"].mainGroup;
  }

  var observable = createObservable(coroutineGroup);
  var coroutine;

  var subscribe = function subscribe(subscriber) {
    return observable.subscribe(subscriber);
  };

  var start = function start() {
    if (coroutine === undefined) {
      coroutine = coroutineGroup.start( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return worker({
                  getSubscribedCount: observable.getSubscribedCount,
                  next: observable.next,
                  complete: observable.complete
                });

              case 3:
                return _context.abrupt("return", _context.sent);

              case 4:
                _context.prev = 4;
                observable.complete();
                return _context.finish(4);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0,, 4, 7]]);
      }));
    }

    return {
      get result() {
        return coroutine.result;
      },

      get exception() {
        return coroutine.exception;
      },

      subscribe: subscribe,
      wait: wait,
      cancel: cancel,
      isCanceling: isCanceling,
      isCanceled: isCanceled,
      isDone: isDone
    };
  };

  var wait = /*#__PURE__*/regeneratorRuntime.mark(function wait(timeout) {
    if (timeout === void 0) {
      timeout = -1;
    }

    var runtime, time0;
    return regeneratorRuntime.wrap(function wait$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            runtime = co__default["default"].currentRuntime;
            time0 = timeout > 0 ? runtime.lastTickTime : 0;

          case 2:
            if (!coroutine.isDone()) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("break", 14);

          case 5:
            if (!(timeout > 0 && timeout < runtime.lastTickTime - time0)) {
              _context2.next = 10;
              break;
            }

            coroutine.stop(TaskTimeout); // yield co.waitUntil(() => coroutine.isStopped());

            _context2.next = 9;
            return co__default["default"].waitUntil(function () {
              return coroutine.isDone();
            });

          case 9:
            return _context2.abrupt("break", 14);

          case 10:
            _context2.next = 12;
            return;

          case 12:
            _context2.next = 2;
            break;

          case 14:
            if (!(coroutine.exception !== undefined)) {
              _context2.next = 16;
              break;
            }

            throw coroutine.exception;

          case 16:
            return _context2.abrupt("return", coroutine.result);

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, wait);
  });

  var cancel = function cancel() {
    return void coroutine.stop();
  };

  var isCanceling = function isCanceling() {
    return coroutine.isStopping();
  };

  var isCanceled = function isCanceled() {
    return coroutine.isStopped();
  };

  var isDone = function isDone() {
    return coroutine.isDone();
  };

  return {
    subscribe: subscribe,
    start: start
  };
}

function TaskTimeout() {}

function createEventEmitter() {
  var currentListenerId = 0;
  var freeListenerId = -1;
  var listeners = new Map();
  var listenerIdToEventNameMapping = new Map();
  var onceListeners = new Set();

  var addListener = function addListener(eventName, listener) {
    if (freeListenerId > 0) {
      currentListenerId = freeListenerId;
      freeListenerId = -1;
    } else {
      ++currentListenerId;
    }

    if (!listeners.has(eventName)) {
      listeners.set(eventName, new Map([[currentListenerId, listener]]));
    } else {
      listeners.get(eventName).set(currentListenerId, listener);
    }

    listenerIdToEventNameMapping.set(currentListenerId, eventName);
    return currentListenerId;
  };

  var addOnceListener = function addOnceListener(eventName, listener) {
    var listenerId = addListener(eventName, listener);
    onceListeners.add(listener);
    return listenerId;
  };

  var removeListener = function removeListener(listenerId) {
    if (listenerIdToEventNameMapping.has(listenerId)) {
      var eventName = listenerIdToEventNameMapping.get(listenerId);
      listenerIdToEventNameMapping["delete"](listenerId);
      var eventListeners = listeners.get(eventName);

      if (eventListeners.has(listenerId)) {
        eventListeners["delete"](listenerId);
        freeListenerId = listenerId;
        return true;
      }
    }

    return false;
  };

  var removeAllListeners = function removeAllListeners(eventName) {
    if (listeners.has(eventName)) {
      listeners.get(eventName).clear();
    }
  };

  var getListeners = function getListeners(eventName) {
    if (listeners.has(eventName)) {
      var eventListeners = [];
      listeners.get(eventName).forEach(function (listener) {
        return void eventListeners.push(listener);
      });
      return eventListeners;
    }
  };

  var getListenerCount = function getListenerCount(eventName) {
    return listeners.has(eventName) ? listeners.get(eventName).size : 0;
  };

  var getEventNames = function getEventNames() {
    var eventNames = [];
    listeners.forEach(function (listeners, eventName) {
      return void eventNames.push(eventName);
    });
    return eventNames;
  };

  var emit = function emit(eventName) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    if (listeners.has(eventName)) {
      listeners.get(eventName).forEach(function (listener, listenerId) {
        return void invokeListener(listener, listenerId, args);
      });
    }
  };

  var invokeListener = function invokeListener(listener, listenerId, args) {
    try {
      listener.apply(void 0, args);
    } catch (e) {
      console.error("[observable.EventEmitter] error: " + valueTypes_cc.errorToString(e));
    } finally {
      if (onceListeners.has(listener)) {
        onceListeners["delete"](listener);
        removeListener(listenerId);
      }
    }
  };

  return {
    addListener: addListener,
    addOnceListener: addOnceListener,
    removeListener: removeListener,
    removeAllListeners: removeAllListeners,
    getListeners: getListeners,
    getListenerCount: getListenerCount,
    getEventNames: getEventNames,
    emit: emit,
    on: addListener,
    once: addOnceListener,
    off: removeListener,
    offAll: removeAllListeners
  };
}

function mapEventListener(eventEmitter, eventName) {
  var _ref5;

  return _ref5 = {}, _ref5["add" + eventName + "Listener"] = function addListener(listener) {
    return eventEmitter.addListener(eventName, listener);
  }, _ref5["add" + eventName + "OnceListener"] = function addOnceListener(listener) {
    return eventEmitter.addOnceListener(eventName, listener);
  }, _ref5["remove" + eventName + "Listener"] = eventEmitter.removeListener, _ref5["removeAll" + eventName + "Listeners"] = function removeAllListeners() {
    return eventEmitter.removeAllListeners(eventName);
  }, _ref5["get" + eventName + "ListenerCount"] = function getListenerCount() {
    return eventEmitter.getListenerCount(eventName);
  }, _ref5["get" + eventName + "Listeners"] = function getListeners() {
    return eventEmitter.getListeners(eventName);
  }, _ref5["emit" + eventName] = function emit() {
    return eventEmitter.emit(eventName);
  }, _ref5;
}

var Observable = createObservable;
Observable.from = toObservable;
exports.EventEmitter = createEventEmitter;
exports.Observable = Observable;
exports.Task = createTask;
exports.TaskTimeout = TaskTimeout;
exports.mapEventListener = mapEventListener;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcb2JzZXJ2YWJsZS5jYy5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImNvIiwicmVxdWlyZSIsInZhbHVlVHlwZXNfY2MiLCJfaW50ZXJvcERlZmF1bHRMZWdhY3kiLCJlIiwiY29fX2RlZmF1bHQiLCJlbXB0eUFycmF5IiwiZnJlZXplIiwiY3JlYXRlQWN0aXZlU2NoZWR1bGVyIiwib3B0aW9ucyIsImRpc3BhdGNoIiwidW5zdWJzY3JpYmUiLCJjb21wbGV0ZSIsInN0YXRlcyIsImdldFN0YXRlcyIsInJlc3VsdCIsImxlbmd0aCIsImNvcm91dGluZUdyb3VwIiwic3RhcnQiLCJyZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJ0MCIsImNvbnNvbGUiLCJlcnJvciIsImVycm9yVG9TdHJpbmciLCJzdG9wIiwic2NoZWR1bGUiLCJzdGF0ZSIsInB1c2giLCJjcmVhdGVBc3luY1NjaGVkdWxlciIsImlzVW5zdWJzY3JpYmVkIiwiX29wdGlvbnMkbWF4Q29uY3VycmVuIiwibWF4Q29uY3VycmVudExpbWl0IiwiTWF0aCIsIm1heCIsInJ1bm5pbmciLCJlbmQiLCJkaXNwYXRjaE9uZSIsImRpc3BhdGNoTmV4dCIsInNoaWZ0IiwiY3JlYXRlSW1tZWRpYXRlU2NoZWR1bGVyIiwiY3JlYXRlUXVldWVTY2hlZHVsZXIiLCJjb3JvdXRpbmUiLCJpIiwiaW1heCIsInNwbGljZSIsImFicnVwdCIsInN1c3BlbmQiLCJyZXN1bWUiLCJzY2hlZHVsZXJzIiwiYWN0aXZlIiwiaW1tZWRpYXRlIiwicXVldWUiLCJhc3luYyIsImNyZWF0ZVNjaGVkdWxlciIsInR5cGUiLCJhcmdzIiwiY3JlYXRlU3Vic2NyaWJlYWJsZUNoaWxkIiwib2JzZXJ2YWJsZSIsInN1YnNjcmliZWFibGVQYXJlbnQiLCJzdWJzY3JpYmVyIiwiX29wdGlvbnMkc2NoZWR1bGVyIiwiX29wdGlvbnMkc2NoZWR1bGVyMiIsIl9vcHRpb25zJHNjaGVkdWxlcjIkdCIsIl9vcHRpb25zJHNjaGVkdWxlcjMiLCJfb3B0aW9ucyRzY2hlZHVsZXIzJGMiLCJzY2hlZHVsZXIiLCJzdWJzY3JpYmVhYmxlIiwiY3JlYXRlU3Vic2NyaWJlYWJsZSIsImdldFN1YnNjcmliZWRDb3VudCIsInNjaGVkdWxlclR5cGUiLCJzY2hlZHVsZXJPcHRpb25zIiwidW5kZWZpbmVkIiwiRXJyb3IiLCJzdWJzY3JpYmVhYmxlQ2hpbGRyZW4iLCJTZXQiLCJ1bnN1YnNjcmliZWQiLCJjb21wbGV0ZWQiLCJzdWJzY3JpYmUiLCJzdWJzY3JpYmVhYmxlQ2hpbGQiLCJhZGQiLCJ1bnN1YnNjcmliZUNoaWxkIiwiaGFzIiwic2l6ZSIsIm5vdGlmeSIsImZvckVhY2giLCJjcmVhdGVPYnNlcnZhYmxlIiwib2JzZXJ2ZXIiLCJtYWluR3JvdXAiLCJpc0Nvcm91dGluZUdyb3VwIiwidG9PYnNlcnZhYmxlIiwidG8iLCJjcmVhdGVUYXNrIiwid29ya2VyIiwic2VudCIsImZpbmlzaCIsImV4Y2VwdGlvbiIsIndhaXQiLCJjYW5jZWwiLCJpc0NhbmNlbGluZyIsImlzQ2FuY2VsZWQiLCJpc0RvbmUiLCJ0aW1lb3V0IiwicnVudGltZSIsInRpbWUwIiwid2FpdCQiLCJfY29udGV4dDIiLCJjdXJyZW50UnVudGltZSIsImxhc3RUaWNrVGltZSIsIlRhc2tUaW1lb3V0Iiwid2FpdFVudGlsIiwiaXNTdG9wcGluZyIsImlzU3RvcHBlZCIsImNyZWF0ZUV2ZW50RW1pdHRlciIsImN1cnJlbnRMaXN0ZW5lcklkIiwiZnJlZUxpc3RlbmVySWQiLCJsaXN0ZW5lcnMiLCJNYXAiLCJsaXN0ZW5lcklkVG9FdmVudE5hbWVNYXBwaW5nIiwib25jZUxpc3RlbmVycyIsImFkZExpc3RlbmVyIiwiZXZlbnROYW1lIiwibGlzdGVuZXIiLCJzZXQiLCJnZXQiLCJhZGRPbmNlTGlzdGVuZXIiLCJsaXN0ZW5lcklkIiwicmVtb3ZlTGlzdGVuZXIiLCJldmVudExpc3RlbmVycyIsInJlbW92ZUFsbExpc3RlbmVycyIsImNsZWFyIiwiZ2V0TGlzdGVuZXJzIiwiZ2V0TGlzdGVuZXJDb3VudCIsImdldEV2ZW50TmFtZXMiLCJldmVudE5hbWVzIiwiZW1pdCIsImludm9rZUxpc3RlbmVyIiwib24iLCJvbmNlIiwib2ZmIiwib2ZmQWxsIiwibWFwRXZlbnRMaXN0ZW5lciIsImV2ZW50RW1pdHRlciIsIk9ic2VydmFibGUiLCJmcm9tIiwiRXZlbnRFbWl0dGVyIiwiVGFzayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7O0FBRUFBLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFBRUMsRUFBQUEsS0FBSyxFQUFFO0FBQVQsQ0FBN0M7O0FBRUEsSUFBSUMsRUFBRSxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUFoQjs7QUFDQSxJQUFJQyxhQUFhLEdBQUdELE9BQU8sQ0FBQyxrQkFBRCxDQUEzQjs7QUFFQSxTQUFTRSxxQkFBVCxDQUFnQ0MsQ0FBaEMsRUFBbUM7QUFBRSxTQUFPQSxDQUFDLElBQUksT0FBT0EsQ0FBUCxLQUFhLFFBQWxCLElBQThCLGFBQWFBLENBQTNDLEdBQStDQSxDQUEvQyxHQUFtRDtBQUFFLGVBQVdBO0FBQWIsR0FBMUQ7QUFBNkU7O0FBRWxILElBQUlDLFdBQVcsR0FBRyxhQUFhRixxQkFBcUIsQ0FBQ0gsRUFBRCxDQUFwRCxFQUVBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTU0sVUFBVSxHQUFHVixNQUFNLENBQUNXLE1BQVAsQ0FBYyxFQUFkLENBQW5COztBQUNBLFNBQVNDLHFCQUFULE9BSUdDLE9BSkgsRUFJWTtBQUFBLE1BSFZDLFFBR1UsUUFIVkEsUUFHVTtBQUFBLE1BRlZDLFdBRVUsUUFGVkEsV0FFVTtBQUFBLE1BRFZDLFFBQ1UsUUFEVkEsUUFDVTtBQUNWLE1BQUlDLE1BQU0sR0FBRyxFQUFiOztB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S29DO0FBQUEsV0FBTXFCLFlBQVksQ0FBQ1YsZ0JBQWIsQ0FBOEJYLFNBQTlCLENBQU47QUFBQSxHQUxwQyxnQkFNU0EsU0FOVCxrQkFNZ0M7QUFBQSxXQUFNcUIsWUFBWSxDQUFDWCxZQUFiLENBQTBCVixTQUExQixDQUFOO0FBQUEsR0FOaEMsaUJBT1VBLFNBUFYsSUFPd0I7QUFBQSxXQUFNcUIsWUFBWSxDQUFDUCxJQUFiLENBQWtCZCxTQUFsQixDQUFOO0FBQUEsR0FQeEI7QUFTRDs7QUFFRCxJQUFNc0IsVUFBVSxHQUFHekQsZ0JBQW5CO0FBQ0F5RCxVQUFVLENBQUNDLElBQVgsR0FBa0J0RCxZQUFsQjtBQUVBbEcsT0FBTyxDQUFDeUosWUFBUixHQUF1QmhDLGtCQUF2QjtBQUNBekgsT0FBTyxDQUFDdUosVUFBUixHQUFxQkEsVUFBckI7QUFDQXZKLE9BQU8sQ0FBQzBKLElBQVIsR0FBZXRELFVBQWY7QUFDQXBHLE9BQU8sQ0FBQ3FILFdBQVIsR0FBc0JBLFdBQXRCO0FBQ0FySCxPQUFPLENBQUNxSixnQkFBUixHQUEyQkEsZ0JBQTNCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdHMtbm9jaGVja1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5cclxudmFyIGNvID0gcmVxdWlyZSgnLi9jby5jYycpO1xyXG52YXIgdmFsdWVUeXBlc19jYyA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMuY2MnKTtcclxuXHJcbmZ1bmN0aW9uIF9pbnRlcm9wRGVmYXVsdExlZ2FjeSAoZSkgeyByZXR1cm4gZSAmJiB0eXBlb2YgZSA9PT0gJ29iamVjdCcgJiYgJ2RlZmF1bHQnIGluIGUgPyBlIDogeyAnZGVmYXVsdCc6IGUgfTsgfVxyXG5cclxudmFyIGNvX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeShjbyk7XHJcblxyXG4vLyAgIHJldHVybiBmdW5jdGlvbiogZGlzcGF0Y2goeyBnZXRTdGF0ZXMgfSkge1xyXG4vLyAgIH07XHJcbi8vIH1cclxuXHJcbmNvbnN0IGVtcHR5QXJyYXkgPSBPYmplY3QuZnJlZXplKFtdKTtcclxuZnVuY3Rpb24gY3JlYXRlQWN0aXZlU2NoZWR1bGVyKHtcclxuICBkaXNwYXRjaCxcclxuICB1bnN1YnNjcmliZSxcclxuICBjb21wbGV0ZVxyXG59LCBvcHRpb25zKSB7XHJcbiAgbGV0IHN0YXRlcyA9IFtdO1xyXG5cclxuICBjb25zdCBnZXRTdGF0ZXMgPSAoKSA9PiB7XHJcbiAgICBsZXQgcmVzdWx0O1xyXG5cclxuICAgIGlmIChzdGF0ZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJlc3VsdCA9IGVtcHR5QXJyYXk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXN1bHQgPSBzdGF0ZXM7XHJcbiAgICAgIHN0YXRlcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfTtcclxuXHJcbiAgb3B0aW9ucy5jb3JvdXRpbmVHcm91cC5zdGFydCggLyojX19QVVJFX18qL3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoKSB7XHJcbiAgICByZXR1cm4gcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcclxuICAgICAgd2hpbGUgKDEpIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMDtcclxuICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAzO1xyXG4gICAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgZ2V0U3RhdGVzXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgX2NvbnRleHQubmV4dCA9IDg7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgX2NvbnRleHQucHJldiA9IDU7XHJcbiAgICAgICAgICBfY29udGV4dC50MCA9IF9jb250ZXh0W1wiY2F0Y2hcIl0oMCk7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBbb2JzZXJ2YWJsZS5jcmVhdGVBY3RpdmVTY2hlZHVsZXJdIGVycm9yOiAke3ZhbHVlVHlwZXNfY2MuZXJyb3JUb1N0cmluZyhfY29udGV4dC50MCl9YCk7XHJcblxyXG4gICAgICAgIGNhc2UgODpcclxuICAgICAgICAgIGlmIChzdGF0ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBzdGF0ZXMgPSBbXTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB1bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgY29tcGxldGUoKTtcclxuXHJcbiAgICAgICAgY2FzZSAxMTpcclxuICAgICAgICBjYXNlIFwiZW5kXCI6XHJcbiAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xyXG4gICAgICB9XHJcbiAgICB9LCBfY2FsbGVlLCBudWxsLCBbWzAsIDVdXSk7XHJcbiAgfSkpO1xyXG4gIHJldHVybiB7XHJcbiAgICBzY2hlZHVsZShzdGF0ZSkge1xyXG4gICAgICBzdGF0ZXMucHVzaChzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gIH07XHJcbn1cclxuXHJcbi8vICAgcmV0dXJuIGZ1bmN0aW9uKiBkaXNwYXRjaChzdGF0ZSkge1xyXG4vLyAgIH07XHJcbi8vIH1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFzeW5jU2NoZWR1bGVyKHtcclxuICBkaXNwYXRjaCxcclxuICB1bnN1YnNjcmliZSxcclxuICBpc1Vuc3Vic2NyaWJlZCxcclxuICBjb21wbGV0ZVxyXG59LCBvcHRpb25zKSB7XHJcbiAgdmFyIF9vcHRpb25zJG1heENvbmN1cnJlbjtcclxuXHJcbiAgY29uc3QgbWF4Q29uY3VycmVudExpbWl0ID0gTWF0aC5tYXgoKF9vcHRpb25zJG1heENvbmN1cnJlbiA9IG9wdGlvbnMubWF4Q29uY3VycmVudExpbWl0KSAhPSBudWxsID8gX29wdGlvbnMkbWF4Q29uY3VycmVuIDogMCwgMCk7XHJcbiAgY29uc3Qgc3RhdGVzID0gW107XHJcbiAgbGV0IHJ1bm5pbmcgPSAwO1xyXG4gIGxldCBlbmQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2hPbmUgPSBzdGF0ZSA9PiB7XHJcbiAgICBlbmQgPSBlbmQgfHwgc3RhdGUuZW5kID09PSB0cnVlO1xyXG4gICAgKytydW5uaW5nO1xyXG4gICAgb3B0aW9ucy5jb3JvdXRpbmVHcm91cC5zdGFydCggLyojX19QVVJFX18qL3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoKSB7XHJcbiAgICAgIHJldHVybiByZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xyXG4gICAgICAgIHdoaWxlICgxKSBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XHJcbiAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSAwO1xyXG4gICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMztcclxuICAgICAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHN0YXRlKTtcclxuXHJcbiAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA4O1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSA1O1xyXG4gICAgICAgICAgICBfY29udGV4dC50MCA9IF9jb250ZXh0W1wiY2F0Y2hcIl0oMCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFtvYnNlcnZhYmxlLkFzeW5jU2NoZWR1bGVyXSBlcnJvcjogJHt2YWx1ZVR5cGVzX2NjLmVycm9yVG9TdHJpbmcoX2NvbnRleHQudDApfWApO1xyXG5cclxuICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgLS1ydW5uaW5nO1xyXG4gICAgICAgICAgICBkaXNwYXRjaE5leHQoKTtcclxuXHJcbiAgICAgICAgICBjYXNlIDEwOlxyXG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgX2NhbGxlZSwgbnVsbCwgW1swLCA1XV0pO1xyXG4gICAgfSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoTmV4dCA9ICgpID0+IHtcclxuICAgIGlmIChzdGF0ZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGlmIChydW5uaW5nID09PSAwICYmIChlbmQgfHwgaXNVbnN1YnNjcmliZWQoKSkpIHtcclxuICAgICAgICB1bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIGNvbXBsZXRlKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoKHJ1bm5pbmcgPCBtYXhDb25jdXJyZW50TGltaXQgfHwgbWF4Q29uY3VycmVudExpbWl0ID09PSAwKSAmJiAoc3RhdGVzWzBdLmVuZCA9PT0gZmFsc2UgfHwgcnVubmluZyA9PT0gMCkpIHtcclxuICAgICAgZGlzcGF0Y2hPbmUoc3RhdGVzLnNoaWZ0KCkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzY2hlZHVsZShzdGF0ZSkge1xyXG4gICAgICBzdGF0ZXMucHVzaChzdGF0ZSk7XHJcbiAgICAgIGRpc3BhdGNoTmV4dCgpO1xyXG4gICAgfVxyXG5cclxuICB9O1xyXG59XHJcblxyXG4vLyAgIHJldHVybiBmdW5jdGlvbiBkaXNwYXRjaChzdGF0ZSkge1xyXG4vLyAgIH07XHJcbi8vIH1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUltbWVkaWF0ZVNjaGVkdWxlcih7XHJcbiAgZGlzcGF0Y2gsXHJcbiAgdW5zdWJzY3JpYmUsXHJcbiAgaXNVbnN1YnNjcmliZWQsXHJcbiAgY29tcGxldGVcclxufSkge1xyXG4gIHJldHVybiB7XHJcbiAgICBzY2hlZHVsZShzdGF0ZSkge1xyXG4gICAgICBjb25zdCBlbmQgPSBzdGF0ZS5lbmQgPT09IHRydWU7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGRpc3BhdGNoKHN0YXRlKTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFtvYnNlcnZhYmxlLkltbWVkaWF0ZVNjaGVkdWxlcl0gZXJyb3I6ICR7dmFsdWVUeXBlc19jYy5lcnJvclRvU3RyaW5nKGUpfWApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZW5kIHx8IGlzVW5zdWJzY3JpYmVkKCkpIHtcclxuICAgICAgICB1bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIGNvbXBsZXRlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfTtcclxufVxyXG5cclxuLy8gICByZXR1cm4gZnVuY3Rpb24qIGRpc3BhdGNoKHN0YXRlKSB7XHJcbi8vICAgfTtcclxuLy8gfVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUXVldWVTY2hlZHVsZXIoe1xyXG4gIGRpc3BhdGNoLFxyXG4gIHVuc3Vic2NyaWJlLFxyXG4gIGlzVW5zdWJzY3JpYmVkLFxyXG4gIGNvbXBsZXRlXHJcbn0sIG9wdGlvbnMpIHtcclxuICBjb25zdCBzdGF0ZXMgPSBbXTtcclxuICBjb25zdCBjb3JvdXRpbmUgPSBvcHRpb25zLmNvcm91dGluZUdyb3VwLnN0YXJ0KCAvKiNfX1BVUkVfXyovcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZSgpIHtcclxuICAgIHZhciBpLCBlbmQsIGltYXgsIHN0YXRlO1xyXG4gICAgcmV0dXJuIHJlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XHJcbiAgICAgIHdoaWxlICgxKSBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XHJcbiAgICAgICAgY2FzZSAwOlxyXG5cclxuICAgICAgICAgIGkgPSAwO1xyXG4gICAgICAgICAgZW5kID0gZmFsc2U7XHJcbiAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMztcclxuICAgICAgICAgIGltYXggPSBzdGF0ZXMubGVuZ3RoO1xyXG5cclxuICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICBpZiAoIShpIDwgaW1heCkpIHtcclxuICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDEyO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBzdGF0ZSA9IHN0YXRlc1tpKytdO1xyXG4gICAgICAgICAgZW5kID0gZW5kIHx8IHN0YXRlLmVuZCA9PT0gdHJ1ZTtcclxuICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxMDtcclxuICAgICAgICAgIHJldHVybiBkaXNwYXRjaChzdGF0ZSk7XHJcblxyXG4gICAgICAgIGNhc2UgMTA6XHJcbiAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIDEyOlxyXG4gICAgICAgICAgX2NvbnRleHQubmV4dCA9IDE3O1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgMTQ6XHJcbiAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMTQ7XHJcbiAgICAgICAgICBfY29udGV4dC50MCA9IF9jb250ZXh0W1wiY2F0Y2hcIl0oMyk7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBbb2JzZXJ2YWJsZS5RdWV1ZVNjaGVkdWxlcl0gZXJyb3I6ICR7dmFsdWVUeXBlc19jYy5lcnJvclRvU3RyaW5nKF9jb250ZXh0LnQwKX1gKTtcclxuXHJcbiAgICAgICAgY2FzZSAxNzpcclxuICAgICAgICAgIGlmIChpID4gMCkge1xyXG4gICAgICAgICAgICBzdGF0ZXMuc3BsaWNlKDAsIGkpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmICghKHN0YXRlcy5sZW5ndGggPT09IDApKSB7XHJcbiAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAyNjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKCEoZW5kIHx8IGlzVW5zdWJzY3JpYmVkKCkpKSB7XHJcbiAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAyMztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgIGNvbXBsZXRlKCk7XHJcbiAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KFwiYnJlYWtcIiwgMjgpO1xyXG5cclxuICAgICAgICBjYXNlIDIzOlxyXG4gICAgICAgICAgY29yb3V0aW5lLnN1c3BlbmQoKTtcclxuICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAyNjtcclxuICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgY2FzZSAyNjpcclxuICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAwO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgMjg6XHJcbiAgICAgICAgY2FzZSBcImVuZFwiOlxyXG4gICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcclxuICAgICAgfVxyXG4gICAgfSwgX2NhbGxlZSwgbnVsbCwgW1szLCAxNF1dKTtcclxuICB9KSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNjaGVkdWxlKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlcy5wdXNoKHN0YXRlKTtcclxuICAgICAgY29yb3V0aW5lLnJlc3VtZSgpO1xyXG4gICAgfVxyXG5cclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBzY2hlZHVsZXJzID0ge1xyXG4gIGFjdGl2ZTogY3JlYXRlQWN0aXZlU2NoZWR1bGVyLFxyXG4gIGltbWVkaWF0ZTogY3JlYXRlSW1tZWRpYXRlU2NoZWR1bGVyLFxyXG4gIHF1ZXVlOiBjcmVhdGVRdWV1ZVNjaGVkdWxlcixcclxuICBhc3luYzogY3JlYXRlQXN5bmNTY2hlZHVsZXJcclxufTtcclxuZnVuY3Rpb24gY3JlYXRlU2NoZWR1bGVyKHR5cGUsIC4uLmFyZ3MpIHtcclxuICByZXR1cm4gc2NoZWR1bGVyc1t0eXBlXT8uKC4uLmFyZ3MpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdWJzY3JpYmVhYmxlQ2hpbGQob2JzZXJ2YWJsZSwgc3Vic2NyaWJlYWJsZVBhcmVudCwgc3Vic2NyaWJlciwgb3B0aW9ucykge1xyXG4gIHZhciBfb3B0aW9ucyRzY2hlZHVsZXIsIF9vcHRpb25zJHNjaGVkdWxlcjIsIF9vcHRpb25zJHNjaGVkdWxlcjIkdCwgX29wdGlvbnMkc2NoZWR1bGVyMywgX29wdGlvbnMkc2NoZWR1bGVyMyRjO1xyXG5cclxuICAoX29wdGlvbnMkc2NoZWR1bGVyID0gb3B0aW9ucy5zY2hlZHVsZXIpICE9IG51bGwgPyBfb3B0aW9ucyRzY2hlZHVsZXIgOiBvcHRpb25zLnNjaGVkdWxlciA9IHt9O1xyXG4gIChfb3B0aW9ucyRzY2hlZHVsZXIyJHQgPSAoX29wdGlvbnMkc2NoZWR1bGVyMiA9IG9wdGlvbnMuc2NoZWR1bGVyKS50eXBlKSAhPSBudWxsID8gX29wdGlvbnMkc2NoZWR1bGVyMiR0IDogX29wdGlvbnMkc2NoZWR1bGVyMi50eXBlID0gJ3F1ZXVlJztcclxuICAoX29wdGlvbnMkc2NoZWR1bGVyMyRjID0gKF9vcHRpb25zJHNjaGVkdWxlcjMgPSBvcHRpb25zLnNjaGVkdWxlcikuY29yb3V0aW5lR3JvdXApICE9IG51bGwgPyBfb3B0aW9ucyRzY2hlZHVsZXIzJGMgOiBfb3B0aW9ucyRzY2hlZHVsZXIzLmNvcm91dGluZUdyb3VwID0gb2JzZXJ2YWJsZS5jb3JvdXRpbmVHcm91cDtcclxuICBjb25zdCBzdWJzY3JpYmVhYmxlID0gY3JlYXRlU3Vic2NyaWJlYWJsZShvYnNlcnZhYmxlLCBzdWJzY3JpYmVhYmxlUGFyZW50KTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHN1YnNjcmliZXIoe1xyXG4gICAgdW5zdWJzY3JpYmU6IHN1YnNjcmliZWFibGUudW5zdWJzY3JpYmUsXHJcbiAgICBpc1Vuc3Vic2NyaWJlZDogc3Vic2NyaWJlYWJsZS5pc1Vuc3Vic2NyaWJlZCxcclxuICAgIGdldFN1YnNjcmliZWRDb3VudDogc3Vic2NyaWJlYWJsZS5nZXRTdWJzY3JpYmVkQ291bnQsXHJcbiAgICBuZXh0OiBzdWJzY3JpYmVhYmxlLm5leHQsXHJcbiAgICBjb21wbGV0ZTogc3Vic2NyaWJlYWJsZS5jb21wbGV0ZVxyXG4gIH0pO1xyXG4gIGNvbnN0IHtcclxuICAgIHR5cGU6IHNjaGVkdWxlclR5cGUsXHJcbiAgICAuLi5zY2hlZHVsZXJPcHRpb25zXHJcbiAgfSA9IG9wdGlvbnMuc2NoZWR1bGVyO1xyXG4gIGNvbnN0IHNjaGVkdWxlciA9IGNyZWF0ZVNjaGVkdWxlcihzY2hlZHVsZXJUeXBlLCB7XHJcbiAgICBkaXNwYXRjaCxcclxuICAgIHVuc3Vic2NyaWJlOiBzdWJzY3JpYmVhYmxlLnVuc3Vic2NyaWJlLFxyXG4gICAgaXNVbnN1YnNjcmliZWQ6IHN1YnNjcmliZWFibGUuaXNVbnN1YnNjcmliZWQsXHJcbiAgICBjb21wbGV0ZTogc3Vic2NyaWJlYWJsZS5jb21wbGV0ZVxyXG4gIH0sIHNjaGVkdWxlck9wdGlvbnMpO1xyXG5cclxuICBpZiAoc2NoZWR1bGVyID09PSB1bmRlZmluZWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgbm90IHN1cHBvcnRlZCBzY2hlZHVsZXI6ICR7c2NoZWR1bGVyVHlwZX1gKTtcclxuICB9XHJcblxyXG4gIHN1YnNjcmliZWFibGUucHVzaCA9IHN0YXRlID0+IHtcclxuICAgIGlmICghc3Vic2NyaWJlYWJsZS5pc1Vuc3Vic2NyaWJlZCgpKSB7XHJcbiAgICAgIHNjaGVkdWxlci5zY2hlZHVsZShzdGF0ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHN1YnNjcmliZWFibGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN1YnNjcmliZWFibGUob2JzZXJ2YWJsZSwgc3Vic2NyaWJlYWJsZVBhcmVudCA9IG51bGwpIHtcclxuICBjb25zdCBzdWJzY3JpYmVhYmxlQ2hpbGRyZW4gPSBuZXcgU2V0KCk7XHJcbiAgbGV0IHVuc3Vic2NyaWJlZCA9IGZhbHNlO1xyXG4gIGxldCBjb21wbGV0ZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3Qgc3Vic2NyaWJlID0gKHN1YnNjcmliZXIsIG9wdGlvbnMgPSB7fSkgPT4ge1xyXG4gICAgY29uc3Qgc3Vic2NyaWJlYWJsZUNoaWxkID0gY3JlYXRlU3Vic2NyaWJlYWJsZUNoaWxkKG9ic2VydmFibGUsIHN1YnNjcmliZWFibGUsIHN1YnNjcmliZXIsIG9wdGlvbnMpO1xyXG5cclxuICAgIGlmICghc3Vic2NyaWJlYWJsZUNoaWxkLmlzVW5zdWJzY3JpYmVkKCkpIHtcclxuICAgICAgc3Vic2NyaWJlYWJsZUNoaWxkcmVuLmFkZChzdWJzY3JpYmVhYmxlQ2hpbGQpO1xyXG5cclxuICAgICAgaWYgKGNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHN1YnNjcmliZWFibGVDaGlsZC5wdXNoKHtcclxuICAgICAgICAgIGVuZDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3Vic2NyaWJlOiBzdWJzY3JpYmVhYmxlQ2hpbGQuc3Vic2NyaWJlXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVuc3Vic2NyaWJlID0gKCkgPT4ge1xyXG4gICAgaWYgKHVuc3Vic2NyaWJlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgdW5zdWJzY3JpYmVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIGlmIChzdWJzY3JpYmVhYmxlUGFyZW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgc3Vic2NyaWJlYWJsZVBhcmVudC51bnN1YnNjcmliZUNoaWxkKHN1YnNjcmliZWFibGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdW5zdWJzY3JpYmVDaGlsZCA9IHN1YnNjcmliZWFibGVDaGlsZCA9PiB7XHJcbiAgICBpZiAoc3Vic2NyaWJlYWJsZUNoaWxkcmVuLmhhcyhzdWJzY3JpYmVhYmxlQ2hpbGQpICYmIHN1YnNjcmliZWFibGVDaGlsZC5pc1Vuc3Vic2NyaWJlZCgpKSB7XHJcbiAgICAgIHN1YnNjcmliZWFibGVDaGlsZHJlbi5kZWxldGUoc3Vic2NyaWJlYWJsZUNoaWxkKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBpc1Vuc3Vic2NyaWJlZCA9ICgpID0+IHVuc3Vic2NyaWJlZCA9PT0gdHJ1ZTtcclxuXHJcbiAgY29uc3QgZ2V0U3Vic2NyaWJlZENvdW50ID0gKCkgPT4gc3Vic2NyaWJlYWJsZUNoaWxkcmVuLnNpemU7XHJcblxyXG4gIGNvbnN0IG5leHQgPSB2YWx1ZSA9PiB7XHJcbiAgICBpZiAoY29tcGxldGVkID09PSBmYWxzZSkge1xyXG4gICAgICBub3RpZnkoe1xyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIGVuZDogZmFsc2VcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29tcGxldGUgPSBlcnJvciA9PiB7XHJcbiAgICBpZiAoY29tcGxldGVkID09PSBmYWxzZSkge1xyXG4gICAgICBjb21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgICBub3RpZnkoe1xyXG4gICAgICAgIGVycm9yLFxyXG4gICAgICAgIGVuZDogdHJ1ZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBub3RpZnkgPSBzdGF0ZSA9PiB2b2lkIHN1YnNjcmliZWFibGVDaGlsZHJlbi5mb3JFYWNoKHN1YnNjcmliZWFibGVDaGlsZCA9PiB2b2lkIHN1YnNjcmliZWFibGVDaGlsZC5wdXNoKHN0YXRlKSk7XHJcblxyXG4gIGNvbnN0IHN1YnNjcmliZWFibGUgPSB7XHJcbiAgICBzdWJzY3JpYmUsXHJcbiAgICB1bnN1YnNjcmliZSxcclxuICAgIHVuc3Vic2NyaWJlQ2hpbGQsXHJcbiAgICBpc1Vuc3Vic2NyaWJlZCxcclxuICAgIGdldFN1YnNjcmliZWRDb3VudCxcclxuICAgIG5leHQsXHJcbiAgICBjb21wbGV0ZVxyXG4gIH07XHJcbiAgcmV0dXJuIHN1YnNjcmliZWFibGU7XHJcbn1cclxuXHJcbi8vIH1cclxuLy8gKDEpIGZ1bmN0aW9uIGNyZWF0ZU9ic2VydmFibGUob2JzZXJ2ZXIpXHJcbi8vICgyKSBmdW5jdGlvbiBjcmVhdGVPYnNlcnZhYmxlKG9ic2VydmVyLCBjb3JvdXRpbmVHcm91cClcclxuLy8gKDMpIGZ1bmN0aW9uIGNyZWF0ZU9ic2VydmFibGUoY29yb3V0aW5lR3JvdXApXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZhYmxlKG9ic2VydmVyLCBjb3JvdXRpbmVHcm91cCA9IGNvX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5tYWluR3JvdXApIHtcclxuICBpZiAob2JzZXJ2ZXIgJiYgY29fX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmlzQ29yb3V0aW5lR3JvdXAob2JzZXJ2ZXIpKSB7XHJcbiAgICBjb3JvdXRpbmVHcm91cCA9IG9ic2VydmVyO1xyXG4gICAgb2JzZXJ2ZXIgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzdWJzY3JpYmVhYmxlID0gY3JlYXRlU3Vic2NyaWJlYWJsZSh7XHJcbiAgICBjb3JvdXRpbmVHcm91cFxyXG4gIH0pO1xyXG5cclxuICBpZiAob2JzZXJ2ZXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3Vic2NyaWJlOiBzdWJzY3JpYmVhYmxlLnN1YnNjcmliZSxcclxuICAgICAgZ2V0U3Vic2NyaWJlZENvdW50OiBzdWJzY3JpYmVhYmxlLmdldFN1YnNjcmliZWRDb3VudCxcclxuICAgICAgbmV4dDogc3Vic2NyaWJlYWJsZS5uZXh0LFxyXG4gICAgICBjb21wbGV0ZTogc3Vic2NyaWJlYWJsZS5jb21wbGV0ZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvcm91dGluZUdyb3VwLnN0YXJ0KCAvKiNfX1BVUkVfXyovcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZSgpIHtcclxuICAgIHJldHVybiByZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xyXG4gICAgICB3aGlsZSAoMSkgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgIF9jb250ZXh0LnByZXYgPSAwO1xyXG4gICAgICAgICAgX2NvbnRleHQubmV4dCA9IDM7XHJcbiAgICAgICAgICByZXR1cm4gb2JzZXJ2ZXIoe1xyXG4gICAgICAgICAgICBnZXRTdWJzY3JpYmVkQ291bnQ6IHN1YnNjcmliZWFibGUuZ2V0U3Vic2NyaWJlZENvdW50LFxyXG4gICAgICAgICAgICBuZXh0OiBzdWJzY3JpYmVhYmxlLm5leHQsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlOiBzdWJzY3JpYmVhYmxlLmNvbXBsZXRlXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgX2NvbnRleHQubmV4dCA9IDg7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgX2NvbnRleHQucHJldiA9IDU7XHJcbiAgICAgICAgICBfY29udGV4dC50MCA9IF9jb250ZXh0W1wiY2F0Y2hcIl0oMCk7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBbb2JzZXJ2YWJsZS5PYnNlcnZhYmxlXSBlcnJvcjogJHt2YWx1ZVR5cGVzX2NjLmVycm9yVG9TdHJpbmcoX2NvbnRleHQudDApfWApO1xyXG5cclxuICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICBzdWJzY3JpYmVhYmxlLmNvbXBsZXRlKCk7XHJcblxyXG4gICAgICAgIGNhc2UgOTpcclxuICAgICAgICBjYXNlIFwiZW5kXCI6XHJcbiAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xyXG4gICAgICB9XHJcbiAgICB9LCBfY2FsbGVlLCBudWxsLCBbWzAsIDVdXSk7XHJcbiAgfSkpO1xyXG4gIHJldHVybiB7XHJcbiAgICBzdWJzY3JpYmU6IHN1YnNjcmliZWFibGUuc3Vic2NyaWJlXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgdG9PYnNlcnZhYmxlID0gZnVuY3Rpb24gKCkge1xyXG4gIGxldCB0bztcclxuXHJcbiAge1xyXG4gICAgdG8gPSBmdW5jdGlvbiB0b09ic2VydmFibGUoKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignbm90IGltcGxlbWVudGVkJyk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRvO1xyXG59KCk7XHJcblxyXG4vLyB9XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrKHdvcmtlciwgY29yb3V0aW5lR3JvdXAgPSBjb19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubWFpbkdyb3VwKSB7XHJcbiAgY29uc3Qgb2JzZXJ2YWJsZSA9IGNyZWF0ZU9ic2VydmFibGUoY29yb3V0aW5lR3JvdXApO1xyXG4gIGxldCBjb3JvdXRpbmU7XHJcblxyXG4gIGNvbnN0IHN1YnNjcmliZSA9IHN1YnNjcmliZXIgPT4gb2JzZXJ2YWJsZS5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XHJcblxyXG4gIGNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xyXG4gICAgaWYgKGNvcm91dGluZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNvcm91dGluZSA9IGNvcm91dGluZUdyb3VwLnN0YXJ0KCAvKiNfX1BVUkVfXyovcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZSgpIHtcclxuICAgICAgICByZXR1cm4gcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcclxuICAgICAgICAgIHdoaWxlICgxKSBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMDtcclxuICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMztcclxuICAgICAgICAgICAgICByZXR1cm4gd29ya2VyKHtcclxuICAgICAgICAgICAgICAgIGdldFN1YnNjcmliZWRDb3VudDogb2JzZXJ2YWJsZS5nZXRTdWJzY3JpYmVkQ291bnQsXHJcbiAgICAgICAgICAgICAgICBuZXh0OiBvYnNlcnZhYmxlLm5leHQsXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogb2JzZXJ2YWJsZS5jb21wbGV0ZVxyXG4gICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQuc2VudCk7XHJcblxyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDQ7XHJcbiAgICAgICAgICAgICAgb2JzZXJ2YWJsZS5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5maW5pc2goNCk7XHJcblxyXG4gICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcclxuICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIF9jYWxsZWUsIG51bGwsIFtbMCwsIDQsIDddXSk7XHJcbiAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBnZXQgcmVzdWx0KCkge1xyXG4gICAgICAgIHJldHVybiBjb3JvdXRpbmUucmVzdWx0O1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgZ2V0IGV4Y2VwdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gY29yb3V0aW5lLmV4Y2VwdGlvbjtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHN1YnNjcmliZSxcclxuICAgICAgd2FpdCxcclxuICAgICAgY2FuY2VsLFxyXG4gICAgICBpc0NhbmNlbGluZyxcclxuICAgICAgaXNDYW5jZWxlZCxcclxuICAgICAgaXNEb25lXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHdhaXQgPSAvKiNfX1BVUkVfXyovcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gd2FpdCh0aW1lb3V0ID0gLTEpIHtcclxuICAgIHZhciBydW50aW1lLCB0aW1lMDtcclxuICAgIHJldHVybiByZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiB3YWl0JChfY29udGV4dDIpIHtcclxuICAgICAgd2hpbGUgKDEpIHN3aXRjaCAoX2NvbnRleHQyLnByZXYgPSBfY29udGV4dDIubmV4dCkge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgIHJ1bnRpbWUgPSBjb19fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3VycmVudFJ1bnRpbWU7XHJcbiAgICAgICAgICB0aW1lMCA9IHRpbWVvdXQgPiAwID8gcnVudGltZS5sYXN0VGlja1RpbWUgOiAwO1xyXG5cclxuICAgICAgICBjYXNlIDI6XHJcblxyXG4gICAgICAgICAgaWYgKCFjb3JvdXRpbmUuaXNEb25lKCkpIHtcclxuICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSA1O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLmFicnVwdChcImJyZWFrXCIsIDE0KTtcclxuXHJcbiAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgaWYgKCEodGltZW91dCA+IDAgJiYgdGltZW91dCA8IHJ1bnRpbWUubGFzdFRpY2tUaW1lIC0gdGltZTApKSB7XHJcbiAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMTA7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvcm91dGluZS5zdG9wKFRhc2tUaW1lb3V0KTsgLy8geWllbGQgY28ud2FpdFVudGlsKCgpID0+IGNvcm91dGluZS5pc1N0b3BwZWQoKSk7XHJcblxyXG4gICAgICAgICAgX2NvbnRleHQyLm5leHQgPSA5O1xyXG4gICAgICAgICAgcmV0dXJuIGNvX19kZWZhdWx0W1wiZGVmYXVsdFwiXS53YWl0VW50aWwoKCkgPT4gY29yb3V0aW5lLmlzRG9uZSgpKTtcclxuXHJcbiAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5hYnJ1cHQoXCJicmVha1wiLCAxNCk7XHJcblxyXG4gICAgICAgIGNhc2UgMTA6XHJcbiAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDEyO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBjYXNlIDEyOlxyXG4gICAgICAgICAgX2NvbnRleHQyLm5leHQgPSAyO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgMTQ6XHJcbiAgICAgICAgICBpZiAoIShjb3JvdXRpbmUuZXhjZXB0aW9uICE9PSB1bmRlZmluZWQpKSB7XHJcbiAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMTY7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRocm93IGNvcm91dGluZS5leGNlcHRpb247XHJcblxyXG4gICAgICAgIGNhc2UgMTY6XHJcbiAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLmFicnVwdChcInJldHVyblwiLCBjb3JvdXRpbmUucmVzdWx0KTtcclxuXHJcbiAgICAgICAgY2FzZSAxNzpcclxuICAgICAgICBjYXNlIFwiZW5kXCI6XHJcbiAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLnN0b3AoKTtcclxuICAgICAgfVxyXG4gICAgfSwgd2FpdCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGNhbmNlbCA9ICgpID0+IHZvaWQgY29yb3V0aW5lLnN0b3AoKTtcclxuXHJcbiAgY29uc3QgaXNDYW5jZWxpbmcgPSAoKSA9PiBjb3JvdXRpbmUuaXNTdG9wcGluZygpO1xyXG5cclxuICBjb25zdCBpc0NhbmNlbGVkID0gKCkgPT4gY29yb3V0aW5lLmlzU3RvcHBlZCgpO1xyXG5cclxuICBjb25zdCBpc0RvbmUgPSAoKSA9PiBjb3JvdXRpbmUuaXNEb25lKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzdWJzY3JpYmUsXHJcbiAgICBzdGFydFxyXG4gIH07XHJcbn1cclxuZnVuY3Rpb24gVGFza1RpbWVvdXQoKSB7fVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRXZlbnRFbWl0dGVyKCkge1xyXG4gIGxldCBjdXJyZW50TGlzdGVuZXJJZCA9IDA7XHJcbiAgbGV0IGZyZWVMaXN0ZW5lcklkID0gLTE7XHJcbiAgY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcCgpO1xyXG4gIGNvbnN0IGxpc3RlbmVySWRUb0V2ZW50TmFtZU1hcHBpbmcgPSBuZXcgTWFwKCk7XHJcbiAgY29uc3Qgb25jZUxpc3RlbmVycyA9IG5ldyBTZXQoKTtcclxuXHJcbiAgY29uc3QgYWRkTGlzdGVuZXIgPSAoZXZlbnROYW1lLCBsaXN0ZW5lcikgPT4ge1xyXG4gICAgaWYgKGZyZWVMaXN0ZW5lcklkID4gMCkge1xyXG4gICAgICBjdXJyZW50TGlzdGVuZXJJZCA9IGZyZWVMaXN0ZW5lcklkO1xyXG4gICAgICBmcmVlTGlzdGVuZXJJZCA9IC0xO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgKytjdXJyZW50TGlzdGVuZXJJZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWxpc3RlbmVycy5oYXMoZXZlbnROYW1lKSkge1xyXG4gICAgICBsaXN0ZW5lcnMuc2V0KGV2ZW50TmFtZSwgbmV3IE1hcChbW2N1cnJlbnRMaXN0ZW5lcklkLCBsaXN0ZW5lcl1dKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsaXN0ZW5lcnMuZ2V0KGV2ZW50TmFtZSkuc2V0KGN1cnJlbnRMaXN0ZW5lcklkLCBsaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgbGlzdGVuZXJJZFRvRXZlbnROYW1lTWFwcGluZy5zZXQoY3VycmVudExpc3RlbmVySWQsIGV2ZW50TmFtZSk7XHJcbiAgICByZXR1cm4gY3VycmVudExpc3RlbmVySWQ7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkT25jZUxpc3RlbmVyID0gKGV2ZW50TmFtZSwgbGlzdGVuZXIpID0+IHtcclxuICAgIGNvbnN0IGxpc3RlbmVySWQgPSBhZGRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyKTtcclxuICAgIG9uY2VMaXN0ZW5lcnMuYWRkKGxpc3RlbmVyKTtcclxuICAgIHJldHVybiBsaXN0ZW5lcklkO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbW92ZUxpc3RlbmVyID0gbGlzdGVuZXJJZCA9PiB7XHJcbiAgICBpZiAobGlzdGVuZXJJZFRvRXZlbnROYW1lTWFwcGluZy5oYXMobGlzdGVuZXJJZCkpIHtcclxuICAgICAgY29uc3QgZXZlbnROYW1lID0gbGlzdGVuZXJJZFRvRXZlbnROYW1lTWFwcGluZy5nZXQobGlzdGVuZXJJZCk7XHJcbiAgICAgIGxpc3RlbmVySWRUb0V2ZW50TmFtZU1hcHBpbmcuZGVsZXRlKGxpc3RlbmVySWQpO1xyXG4gICAgICBjb25zdCBldmVudExpc3RlbmVycyA9IGxpc3RlbmVycy5nZXQoZXZlbnROYW1lKTtcclxuXHJcbiAgICAgIGlmIChldmVudExpc3RlbmVycy5oYXMobGlzdGVuZXJJZCkpIHtcclxuICAgICAgICBldmVudExpc3RlbmVycy5kZWxldGUobGlzdGVuZXJJZCk7XHJcbiAgICAgICAgZnJlZUxpc3RlbmVySWQgPSBsaXN0ZW5lcklkO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbW92ZUFsbExpc3RlbmVycyA9IGV2ZW50TmFtZSA9PiB7XHJcbiAgICBpZiAobGlzdGVuZXJzLmhhcyhldmVudE5hbWUpKSB7XHJcbiAgICAgIGxpc3RlbmVycy5nZXQoZXZlbnROYW1lKS5jbGVhcigpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldExpc3RlbmVycyA9IGV2ZW50TmFtZSA9PiB7XHJcbiAgICBpZiAobGlzdGVuZXJzLmhhcyhldmVudE5hbWUpKSB7XHJcbiAgICAgIGNvbnN0IGV2ZW50TGlzdGVuZXJzID0gW107XHJcbiAgICAgIGxpc3RlbmVycy5nZXQoZXZlbnROYW1lKS5mb3JFYWNoKGxpc3RlbmVyID0+IHZvaWQgZXZlbnRMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcikpO1xyXG4gICAgICByZXR1cm4gZXZlbnRMaXN0ZW5lcnM7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0TGlzdGVuZXJDb3VudCA9IGV2ZW50TmFtZSA9PiB7XHJcbiAgICByZXR1cm4gbGlzdGVuZXJzLmhhcyhldmVudE5hbWUpID8gbGlzdGVuZXJzLmdldChldmVudE5hbWUpLnNpemUgOiAwO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldEV2ZW50TmFtZXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBldmVudE5hbWVzID0gW107XHJcbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXJzLCBldmVudE5hbWUpID0+IHZvaWQgZXZlbnROYW1lcy5wdXNoKGV2ZW50TmFtZSkpO1xyXG4gICAgcmV0dXJuIGV2ZW50TmFtZXM7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZW1pdCA9IChldmVudE5hbWUsIC4uLmFyZ3MpID0+IHtcclxuICAgIGlmIChsaXN0ZW5lcnMuaGFzKGV2ZW50TmFtZSkpIHtcclxuICAgICAgbGlzdGVuZXJzLmdldChldmVudE5hbWUpLmZvckVhY2goKGxpc3RlbmVyLCBsaXN0ZW5lcklkKSA9PiB2b2lkIGludm9rZUxpc3RlbmVyKGxpc3RlbmVyLCBsaXN0ZW5lcklkLCBhcmdzKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaW52b2tlTGlzdGVuZXIgPSAobGlzdGVuZXIsIGxpc3RlbmVySWQsIGFyZ3MpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxpc3RlbmVyKC4uLmFyZ3MpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGBbb2JzZXJ2YWJsZS5FdmVudEVtaXR0ZXJdIGVycm9yOiAke3ZhbHVlVHlwZXNfY2MuZXJyb3JUb1N0cmluZyhlKX1gKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIGlmIChvbmNlTGlzdGVuZXJzLmhhcyhsaXN0ZW5lcikpIHtcclxuICAgICAgICBvbmNlTGlzdGVuZXJzLmRlbGV0ZShsaXN0ZW5lcik7XHJcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXIobGlzdGVuZXJJZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgYWRkTGlzdGVuZXIsXHJcbiAgICBhZGRPbmNlTGlzdGVuZXIsXHJcbiAgICByZW1vdmVMaXN0ZW5lcixcclxuICAgIHJlbW92ZUFsbExpc3RlbmVycyxcclxuICAgIGdldExpc3RlbmVycyxcclxuICAgIGdldExpc3RlbmVyQ291bnQsXHJcbiAgICBnZXRFdmVudE5hbWVzLFxyXG4gICAgZW1pdCxcclxuICAgIG9uOiBhZGRMaXN0ZW5lcixcclxuICAgIG9uY2U6IGFkZE9uY2VMaXN0ZW5lcixcclxuICAgIG9mZjogcmVtb3ZlTGlzdGVuZXIsXHJcbiAgICBvZmZBbGw6IHJlbW92ZUFsbExpc3RlbmVyc1xyXG4gIH07XHJcbn1cclxuZnVuY3Rpb24gbWFwRXZlbnRMaXN0ZW5lcihldmVudEVtaXR0ZXIsIGV2ZW50TmFtZSkge1xyXG4gIHJldHVybiB7XHJcbiAgICBbYGFkZCR7ZXZlbnROYW1lfUxpc3RlbmVyYF06IGxpc3RlbmVyID0+IGV2ZW50RW1pdHRlci5hZGRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyKSxcclxuICAgIFtgYWRkJHtldmVudE5hbWV9T25jZUxpc3RlbmVyYF06IGxpc3RlbmVyID0+IGV2ZW50RW1pdHRlci5hZGRPbmNlTGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lciksXHJcbiAgICBbYHJlbW92ZSR7ZXZlbnROYW1lfUxpc3RlbmVyYF06IGV2ZW50RW1pdHRlci5yZW1vdmVMaXN0ZW5lcixcclxuICAgIFtgcmVtb3ZlQWxsJHtldmVudE5hbWV9TGlzdGVuZXJzYF06ICgpID0+IGV2ZW50RW1pdHRlci5yZW1vdmVBbGxMaXN0ZW5lcnMoZXZlbnROYW1lKSxcclxuICAgIFtgZ2V0JHtldmVudE5hbWV9TGlzdGVuZXJDb3VudGBdOiAoKSA9PiBldmVudEVtaXR0ZXIuZ2V0TGlzdGVuZXJDb3VudChldmVudE5hbWUpLFxyXG4gICAgW2BnZXQke2V2ZW50TmFtZX1MaXN0ZW5lcnNgXTogKCkgPT4gZXZlbnRFbWl0dGVyLmdldExpc3RlbmVycyhldmVudE5hbWUpLFxyXG4gICAgW2BlbWl0JHtldmVudE5hbWV9YF06ICgpID0+IGV2ZW50RW1pdHRlci5lbWl0KGV2ZW50TmFtZSlcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBPYnNlcnZhYmxlID0gY3JlYXRlT2JzZXJ2YWJsZTtcclxuT2JzZXJ2YWJsZS5mcm9tID0gdG9PYnNlcnZhYmxlO1xyXG5cclxuZXhwb3J0cy5FdmVudEVtaXR0ZXIgPSBjcmVhdGVFdmVudEVtaXR0ZXI7XHJcbmV4cG9ydHMuT2JzZXJ2YWJsZSA9IE9ic2VydmFibGU7XHJcbmV4cG9ydHMuVGFzayA9IGNyZWF0ZVRhc2s7XHJcbmV4cG9ydHMuVGFza1RpbWVvdXQgPSBUYXNrVGltZW91dDtcclxuZXhwb3J0cy5tYXBFdmVudExpc3RlbmVyID0gbWFwRXZlbnRMaXN0ZW5lcjtcclxuIl19