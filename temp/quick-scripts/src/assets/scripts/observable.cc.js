"use strict";
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