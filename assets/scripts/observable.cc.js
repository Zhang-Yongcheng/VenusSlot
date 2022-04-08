// @ts-nocheck
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var co = require('./co.cc');
var valueTypes_cc = require('./value-types.cc');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var co__default = /*#__PURE__*/_interopDefaultLegacy(co);

//   return function* dispatch({ getStates }) {
//   };
// }

const emptyArray = Object.freeze([]);
function createActiveScheduler({
  dispatch,
  unsubscribe,
  complete
}, options) {
  let states = [];

  const getStates = () => {
    let result;

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
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return dispatch({
            getStates
          });

        case 3:
          _context.next = 8;
          break;

        case 5:
          _context.prev = 5;
          _context.t0 = _context["catch"](0);
          console.error(`[observable.createActiveScheduler] error: ${valueTypes_cc.errorToString(_context.t0)}`);

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
    }, _callee, null, [[0, 5]]);
  }));
  return {
    schedule(state) {
      states.push(state);
    }

  };
}

//   return function* dispatch(state) {
//   };
// }

function createAsyncScheduler({
  dispatch,
  unsubscribe,
  isUnsubscribed,
  complete
}, options) {
  var _options$maxConcurren;

  const maxConcurrentLimit = Math.max((_options$maxConcurren = options.maxConcurrentLimit) != null ? _options$maxConcurren : 0, 0);
  const states = [];
  let running = 0;
  let end = false;

  const dispatchOne = state => {
    end = end || state.end === true;
    ++running;
    options.coroutineGroup.start( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
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
            console.error(`[observable.AsyncScheduler] error: ${valueTypes_cc.errorToString(_context.t0)}`);

          case 8:
            --running;
            dispatchNext();

          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 5]]);
    }));
  };

  const dispatchNext = () => {
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
    schedule(state) {
      states.push(state);
      dispatchNext();
    }

  };
}

//   return function dispatch(state) {
//   };
// }

function createImmediateScheduler({
  dispatch,
  unsubscribe,
  isUnsubscribed,
  complete
}) {
  return {
    schedule(state) {
      const end = state.end === true;

      try {
        dispatch(state);
      } catch (e) {
        console.error(`[observable.ImmediateScheduler] error: ${valueTypes_cc.errorToString(e)}`);
      }

      if (end || isUnsubscribed()) {
        unsubscribe();
        complete();
      }
    }

  };
}

//   return function* dispatch(state) {
//   };
// }

function createQueueScheduler({
  dispatch,
  unsubscribe,
  isUnsubscribed,
  complete
}, options) {
  const states = [];
  const coroutine = options.coroutineGroup.start( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var i, end, imax, state;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
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
          console.error(`[observable.QueueScheduler] error: ${valueTypes_cc.errorToString(_context.t0)}`);

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
    }, _callee, null, [[3, 14]]);
  }));
  return {
    schedule(state) {
      states.push(state);
      coroutine.resume();
    }

  };
}

const schedulers = {
  active: createActiveScheduler,
  immediate: createImmediateScheduler,
  queue: createQueueScheduler,
  async: createAsyncScheduler
};
function createScheduler(type, ...args) {
  return schedulers[type]?.(...args);
}

function createSubscribeableChild(observable, subscribeableParent, subscriber, options) {
  var _options$scheduler, _options$scheduler2, _options$scheduler2$t, _options$scheduler3, _options$scheduler3$c;

  (_options$scheduler = options.scheduler) != null ? _options$scheduler : options.scheduler = {};
  (_options$scheduler2$t = (_options$scheduler2 = options.scheduler).type) != null ? _options$scheduler2$t : _options$scheduler2.type = 'queue';
  (_options$scheduler3$c = (_options$scheduler3 = options.scheduler).coroutineGroup) != null ? _options$scheduler3$c : _options$scheduler3.coroutineGroup = observable.coroutineGroup;
  const subscribeable = createSubscribeable(observable, subscribeableParent);
  const dispatch = subscriber({
    unsubscribe: subscribeable.unsubscribe,
    isUnsubscribed: subscribeable.isUnsubscribed,
    getSubscribedCount: subscribeable.getSubscribedCount,
    next: subscribeable.next,
    complete: subscribeable.complete
  });
  const {
    type: schedulerType,
    ...schedulerOptions
  } = options.scheduler;
  const scheduler = createScheduler(schedulerType, {
    dispatch,
    unsubscribe: subscribeable.unsubscribe,
    isUnsubscribed: subscribeable.isUnsubscribed,
    complete: subscribeable.complete
  }, schedulerOptions);

  if (scheduler === undefined) {
    throw new Error(`not supported scheduler: ${schedulerType}`);
  }

  subscribeable.push = state => {
    if (!subscribeable.isUnsubscribed()) {
      scheduler.schedule(state);
    }
  };

  return subscribeable;
}

function createSubscribeable(observable, subscribeableParent = null) {
  const subscribeableChildren = new Set();
  let unsubscribed = false;
  let completed = false;

  const subscribe = (subscriber, options = {}) => {
    const subscribeableChild = createSubscribeableChild(observable, subscribeable, subscriber, options);

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

  const unsubscribe = () => {
    if (unsubscribed === false) {
      unsubscribed = true;

      if (subscribeableParent !== null) {
        subscribeableParent.unsubscribeChild(subscribeable);
      }
    }
  };

  const unsubscribeChild = subscribeableChild => {
    if (subscribeableChildren.has(subscribeableChild) && subscribeableChild.isUnsubscribed()) {
      subscribeableChildren.delete(subscribeableChild);
    }
  };

  const isUnsubscribed = () => unsubscribed === true;

  const getSubscribedCount = () => subscribeableChildren.size;

  const next = value => {
    if (completed === false) {
      notify({
        value,
        end: false
      });
    }
  };

  const complete = error => {
    if (completed === false) {
      completed = true;
      notify({
        error,
        end: true
      });
    }
  };

  const notify = state => void subscribeableChildren.forEach(subscribeableChild => void subscribeableChild.push(state));

  const subscribeable = {
    subscribe,
    unsubscribe,
    unsubscribeChild,
    isUnsubscribed,
    getSubscribedCount,
    next,
    complete
  };
  return subscribeable;
}

// }
// (1) function createObservable(observer)
// (2) function createObservable(observer, coroutineGroup)
// (3) function createObservable(coroutineGroup)

function createObservable(observer, coroutineGroup = co__default["default"].mainGroup) {
  if (observer && co__default["default"].isCoroutineGroup(observer)) {
    coroutineGroup = observer;
    observer = undefined;
  }

  const subscribeable = createSubscribeable({
    coroutineGroup
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
      while (1) switch (_context.prev = _context.next) {
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
          console.error(`[observable.Observable] error: ${valueTypes_cc.errorToString(_context.t0)}`);

        case 8:
          subscribeable.complete();

        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 5]]);
  }));
  return {
    subscribe: subscribeable.subscribe
  };
}

const toObservable = function () {
  let to;

  {
    to = function toObservable() {
      throw new Error('not implemented');
    };
  }

  return to;
}();

// }

function createTask(worker, coroutineGroup = co__default["default"].mainGroup) {
  const observable = createObservable(coroutineGroup);
  let coroutine;

  const subscribe = subscriber => observable.subscribe(subscriber);

  const start = () => {
    if (coroutine === undefined) {
      coroutine = coroutineGroup.start( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
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

      subscribe,
      wait,
      cancel,
      isCanceling,
      isCanceled,
      isDone
    };
  };

  const wait = /*#__PURE__*/regeneratorRuntime.mark(function wait(timeout = -1) {
    var runtime, time0;
    return regeneratorRuntime.wrap(function wait$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
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
          return co__default["default"].waitUntil(() => coroutine.isDone());

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
    }, wait);
  });

  const cancel = () => void coroutine.stop();

  const isCanceling = () => coroutine.isStopping();

  const isCanceled = () => coroutine.isStopped();

  const isDone = () => coroutine.isDone();

  return {
    subscribe,
    start
  };
}
function TaskTimeout() {}

function createEventEmitter() {
  let currentListenerId = 0;
  let freeListenerId = -1;
  const listeners = new Map();
  const listenerIdToEventNameMapping = new Map();
  const onceListeners = new Set();

  const addListener = (eventName, listener) => {
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

  const addOnceListener = (eventName, listener) => {
    const listenerId = addListener(eventName, listener);
    onceListeners.add(listener);
    return listenerId;
  };

  const removeListener = listenerId => {
    if (listenerIdToEventNameMapping.has(listenerId)) {
      const eventName = listenerIdToEventNameMapping.get(listenerId);
      listenerIdToEventNameMapping.delete(listenerId);
      const eventListeners = listeners.get(eventName);

      if (eventListeners.has(listenerId)) {
        eventListeners.delete(listenerId);
        freeListenerId = listenerId;
        return true;
      }
    }

    return false;
  };

  const removeAllListeners = eventName => {
    if (listeners.has(eventName)) {
      listeners.get(eventName).clear();
    }
  };

  const getListeners = eventName => {
    if (listeners.has(eventName)) {
      const eventListeners = [];
      listeners.get(eventName).forEach(listener => void eventListeners.push(listener));
      return eventListeners;
    }
  };

  const getListenerCount = eventName => {
    return listeners.has(eventName) ? listeners.get(eventName).size : 0;
  };

  const getEventNames = () => {
    const eventNames = [];
    listeners.forEach((listeners, eventName) => void eventNames.push(eventName));
    return eventNames;
  };

  const emit = (eventName, ...args) => {
    if (listeners.has(eventName)) {
      listeners.get(eventName).forEach((listener, listenerId) => void invokeListener(listener, listenerId, args));
    }
  };

  const invokeListener = (listener, listenerId, args) => {
    try {
      listener(...args);
    } catch (e) {
      console.error(`[observable.EventEmitter] error: ${valueTypes_cc.errorToString(e)}`);
    } finally {
      if (onceListeners.has(listener)) {
        onceListeners.delete(listener);
        removeListener(listenerId);
      }
    }
  };

  return {
    addListener,
    addOnceListener,
    removeListener,
    removeAllListeners,
    getListeners,
    getListenerCount,
    getEventNames,
    emit,
    on: addListener,
    once: addOnceListener,
    off: removeListener,
    offAll: removeAllListeners
  };
}
function mapEventListener(eventEmitter, eventName) {
  return {
    [`add${eventName}Listener`]: listener => eventEmitter.addListener(eventName, listener),
    [`add${eventName}OnceListener`]: listener => eventEmitter.addOnceListener(eventName, listener),
    [`remove${eventName}Listener`]: eventEmitter.removeListener,
    [`removeAll${eventName}Listeners`]: () => eventEmitter.removeAllListeners(eventName),
    [`get${eventName}ListenerCount`]: () => eventEmitter.getListenerCount(eventName),
    [`get${eventName}Listeners`]: () => eventEmitter.getListeners(eventName),
    [`emit${eventName}`]: () => eventEmitter.emit(eventName)
  };
}

const Observable = createObservable;
Observable.from = toObservable;

exports.EventEmitter = createEventEmitter;
exports.Observable = Observable;
exports.Task = createTask;
exports.TaskTimeout = TaskTimeout;
exports.mapEventListener = mapEventListener;
