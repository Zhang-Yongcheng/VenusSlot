
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/co.cc.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '53fe6raOH5McIXi3lJzAGsq', 'co.cc');
// scripts/co.cc.js

// @ts-nocheck
'use strict';

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var valueTypes_cc = require('./value-types.cc');

var AsyncFunctionType = '[object AsyncFunction]';
var GeneratorFunctionType = '[object GeneratorFunction]';
var GeneratorType = '[object Generator]';
var PromiseType = '[object Promise]';
var objectToString = Object.prototype.toString;

function getType(value) {
  return objectToString.call(value);
}

function isSupportedAsync(value) {
  return isSupportedAsyncType(objectToString.call(value));
}

function isSupportedAsyncType(type) {
  switch (type) {
    case AsyncFunctionType:
    case GeneratorFunctionType:
    case GeneratorType:
    case PromiseType:
      return true;

    default:
      return false;
  }
}

function CoroutineStop() {}

var coroutines = new WeakSet();
var RUNNING = 0;
var SUSPENDED = 1;
var STOPPING = 2;
var DONE = 3;

function Coroutine(group, executor) {
  // const runtime = group.groupSet.runtime;
  var status = RUNNING;
  var stopped = false;
  var finalResult, finalException;
  var lastException, lastExceptionLog; // const lastYield = {};

  var executorStack = new Array(24); // prealloc...

  var currentExecutorStackIndex = -1;

  var pushExecutor = function pushExecutor(executor) {
    // executor.tick0 = runtime.currentTickCount;
    executorStack[++currentExecutorStackIndex] = executor;
    return executor;
  };

  var popExecutor = function popExecutor() {
    if (currentExecutorStackIndex >= 0) {
      --currentExecutorStackIndex;
      return getActiveExecutor();
    }
  };

  var getActiveExecutor = function getActiveExecutor() {
    if (currentExecutorStackIndex >= 0) {
      return executorStack[currentExecutorStackIndex];
    }
  }; // const setLastYield = ticks => {
  //   lastYield.ticks = ticks;
  // };


  var stop = function stop(eType) {
    if (eType === void 0) {
      eType = CoroutineStop;
    }

    resume();

    if (status === RUNNING) {
      status = STOPPING;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (currentCoroutine === coroutine) {
        throw _construct(eType, args);
      }

      lastException = _construct(eType, args);
    }
  };

  var isStopping = function isStopping() {
    return status === STOPPING;
  };

  var isStopped = function isStopped() {
    return stopped;
  };

  var suspend = function suspend() {
    if (status === RUNNING) {
      status = SUSPENDED;
      group.onSuspend(coroutine);
    }
  };

  var isSuspended = function isSuspended() {
    return status === SUSPENDED;
  };

  var resume = function resume() {
    if (status === SUSPENDED) {
      status = RUNNING;
      group.onResume(coroutine);
    }
  };

  var isDone = function isDone() {
    return status === DONE;
  };

  var execute = function execute() {
    if (status !== RUNNING && status !== STOPPING) {
      return;
    }

    currentCoroutine = coroutine;
    var lastResult;

    try {
      var currentExecutor = getActiveExecutor();

      while (true) {
        if (currentExecutor === undefined) {
          if (status === STOPPING) {
            stopped = true; // lastException = undefined;
          }

          status = DONE;
          break;
        }

        var execResult = currentExecutor.run(lastException, lastResult);
        lastException = execResult.exception;

        if (lastException !== lastExceptionLog) {
          lastExceptionLog = lastException;

          if (lastExceptionLog !== undefined && !(lastExceptionLog instanceof CoroutineStop)) {
            console.error("[co.Coroutine] runtime error: " + valueTypes_cc.errorToString(lastExceptionLog));
          }
        }

        if (execResult.nextTick === true) {
          // setLastYield(1);
          break;
        }

        lastResult = execResult.result;

        if (execResult.nextExecutor !== undefined) {
          currentExecutor = pushExecutor(execResult.nextExecutor); // setLastYield(0);

          continue;
        }

        if (execResult.directlyValue === true) {
          // setLastYield(0);
          continue;
        } // setLastYield(runtime.currentTickCount - currentExecutor.tick0);


        currentExecutor = popExecutor();
      }
    } catch (e) {
      console.error("[co.Coroutine] internal error: " + valueTypes_cc.errorToString(e));
    }

    if (status === DONE) {
      var _executor = getActiveExecutor();

      while (_executor !== undefined) {
        _executor.abort();

        _executor = popExecutor();
      } // executorStack.splice(0);


      finalException = lastException;
      finalResult = lastResult;
    }

    currentCoroutine = null;
  };

  var toPublic = function () {
    var publicCoroutine = {
      get group() {
        return group.toPublic();
      },

      get result() {
        return finalResult;
      },

      get exception() {
        return finalException;
      },

      // get lastYield() {
      //   return { ...lastYield };
      // },
      stop: stop,
      isStopping: isStopping,
      isStopped: isStopped,
      suspend: suspend,
      isSuspended: isSuspended,
      resume: resume,
      isDone: isDone
    };
    return function () {
      return publicCoroutine;
    };
  }(); // setLastYield(0);


  pushExecutor(executor);
  var coroutine = {
    // properties
    get group() {
      return group;
    },

    get result() {
      return finalResult;
    },

    get exception() {
      return finalException;
    },

    // methods
    stop: stop,
    isStopping: isStopping,
    isStopped: isStopped,
    suspend: suspend,
    isSuspended: isSuspended,
    resume: resume,
    isDone: isDone,
    execute: execute,
    toPublic: toPublic
  };
  return addCoroutine(coroutine);
}

function addCoroutine(coroutine) {
  coroutines.add(coroutine);
  coroutines.add(coroutine.toPublic());
  return coroutine;
}

function isCoroutine(obj) {
  return coroutines.has(obj);
}

var currentCoroutine = null;

function getCurrentCoroutine() {
  return currentCoroutine;
}

var normal = 0;
var belowNormal = normal - 10000000;
var lowest = belowNormal - 10000000;
var aboveNormal = normal + 10000000;
var highest = aboveNormal + 10000000;
var CoroutineGroupPriority = {
  get Lowest() {
    return lowest;
  },

  get BelowNormal() {
    return belowNormal;
  },

  get Normal() {
    return normal;
  },

  get AboveNormal() {
    return aboveNormal;
  },

  get Highest() {
    return highest;
  }

};
var PROMISE_PENDING = 0;
var PROMISE_FULFILLED = 1;
var PROMISE_REJECTED = 2;

function promiseToGenerator(promise) {
  var state = PROMISE_PENDING;
  var value;
  promise.then(function (val) {
    state = PROMISE_FULFILLED;
    value = val;
  }, function (err) {
    state = PROMISE_REJECTED;
    value = err;
  });
  return /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(state !== PROMISE_PENDING)) {
              _context2.next = 5;
              break;
            }

            if (!(state === PROMISE_REJECTED)) {
              _context2.next = 4;
              break;
            }

            throw value;

          case 4:
            return _context2.abrupt("return", value);

          case 5:
            _context2.next = 7;
            return;

          case 7:
            _context2.next = 0;
            break;

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })();
}

function asyncFnToGenerator(asyncFn) {
  // Async Function returns Promise
  return promiseToGenerator(asyncFn());
}

function coroutineToGenerator(coroutine) {
  return /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!coroutine.isDone()) {
              _context3.next = 5;
              break;
            }

            if (!(coroutine.exception !== undefined)) {
              _context3.next = 4;
              break;
            }

            throw coroutine.exception;

          case 4:
            return _context3.abrupt("return", coroutine.result);

          case 5:
            _context3.next = 7;
            return;

          case 7:
            _context3.next = 0;
            break;

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })();
}

var generatorExecutors = new WeakSet();

function GeneratorExecutor(gen) {
  var executor = {
    run: function run(exception, result) {
      var execResult = {};
      var state;

      try {
        state = exception !== undefined ? gen["throw"](exception) : gen.next(result);
      } catch (e) {
        execResult.exception = e;
        state = {
          done: true
        };
      }

      if (state.done) {
        execResult.result = state.value;
      } else {
        var value = state.value;

        if (value === undefined) {
          execResult.nextTick = true;
        } else if (generatorExecutors.has(value)) {
          execResult.nextExecutor = value;
        } else if (isCoroutine(value)) {
          execResult.nextExecutor = GeneratorExecutor(coroutineToGenerator(value));
        } else {
          switch (getType(value)) {
            case GeneratorFunctionType:
              execResult.nextExecutor = GeneratorExecutor(value());
              break;

            case GeneratorType:
              execResult.nextExecutor = GeneratorExecutor(value);
              break;

            case PromiseType:
              execResult.nextExecutor = GeneratorExecutor(promiseToGenerator(value));
              break;

            case AsyncFunctionType:
              execResult.nextExecutor = GeneratorExecutor(asyncFnToGenerator(value));
              break;

            default:
              // nextExecutor = GeneratorExecutor(anyToGenerator(value));
              execResult.result = value;
              execResult.directlyValue = true;
              break;
          }
        }
      }

      return execResult;
    },
    abort: function abort() {
      try {
        gen["return"]();
      } catch (_unused) {}
    }
  };
  generatorExecutors.add(executor);
  return executor;
}

var coroutineGroups = new WeakSet();

function CoroutineGroup(groupSet, name, options) {
  if (options === void 0) {
    options = {};
  }

  var _options$priority;

  if (groupSet.hasByName(name)) {
    throw new Error("coroutine group '" + name + "' exists");
  }

  (_options$priority = options.priority) != null ? _options$priority : options.priority = CoroutineGroupPriority.Normal;
  var runtime = groupSet.runtime;
  var currentPriority;
  var runningCoroutines = [];
  var coroutinesData = new Map();

  var _start = function start(genFn) {
    var coroutine = Coroutine(coroutineGroup, GeneratorExecutor(genFn()));
    coroutinesData.set(coroutine, {
      tickWhile: runtime.currentTickCount
    });
    runningCoroutines.push(coroutine);
    return coroutine;
  };

  var stopAll = function stopAll(eType) {
    if (eType === void 0) {
      eType = CoroutineStop;
    }

    var currentCoroutine = getCurrentCoroutine();

    if ((currentCoroutine == null ? void 0 : currentCoroutine.group.name) === name) {
      var error;
      runningCoroutines.forEach(function (coroutine) {
        if (currentCoroutine === coroutine) {
          try {
            coroutine.stop(eType);
          } catch (e) {
            if (!(e instanceof eType)) {
              throw e;
            }

            error = e;
          }
        } else {
          coroutine.stop(eType);
        }
      });

      if (error) {
        throw error;
      }
    } else {
      runningCoroutines.forEach(function (coroutine) {
        return void coroutine.stop(eType);
      });
    }
  };

  var update = function update() {
    if (runningCoroutines.length === 0) {
      return;
    }

    var currentTick = runtime.currentTickCount;

    try {
      var idel = -1;
      var idelc;
      var i = 0;
      var imax = runningCoroutines.length;

      while (i < imax) {
        var coroutine = runningCoroutines[i];

        if (coroutinesData.get(coroutine).tickWhile < currentTick) {
          coroutine.execute();
        }

        if (coroutine.isDone()) {
          coroutinesData["delete"](coroutine);

          if (idel > -1) {
            idelc++;
          } else {
            idel = i;
            idelc = 1;
          }
        } else {
          if (idel > -1) {
            runningCoroutines.splice(idel, idelc);
            imax -= idelc;
            i -= idelc;
            idel = -1;
          }
        }

        i++;
      }

      if (idel > -1) {
        runningCoroutines.splice(idel, idelc);
      }
    } catch (e) {
      console.error("[co.CoroutineGroup] internal error: " + valueTypes_cc.errorToString(e));
    }
  };

  var setPriority = function setPriority(priority) {
    if (currentPriority === undefined || currentPriority !== priority) {
      currentPriority = priority;
      groupSet.updatePriority(coroutineGroup, currentPriority);
    }
  };

  var onSuspend = function onSuspend(coroutine) {};

  var onResume = function onResume(coroutine) {
    coroutinesData.get(coroutine).tickWhile = runtime.currentTickCount;
  };

  var toPublic = function () {
    var publicCoroutineGroup = {
      get name() {
        return name;
      },

      get size() {
        return runningCoroutines.length;
      },

      get priority() {
        return currentPriority;
      },

      start: function start(genFn) {
        return _start(genFn).toPublic();
      },
      stopAll: stopAll
    };
    return function () {
      return publicCoroutineGroup;
    };
  }();

  var coroutineGroup = {
    // properties
    get name() {
      return name;
    },

    get groupSet() {
      return groupSet;
    },

    get size() {
      return runningCoroutines.length;
    },

    get priority() {
      return currentPriority;
    },

    // events
    onSuspend: onSuspend,
    onResume: onResume,
    // methods
    start: _start,
    stopAll: stopAll,
    update: update,
    toPublic: toPublic
  };
  setPriority(options.priority);
  return addCoroutineGroup(groupSet.add(coroutineGroup));
}

function addCoroutineGroup(coroutineGroup) {
  coroutineGroups.add(coroutineGroup);
  coroutineGroups.add(coroutineGroup.toPublic());
  return coroutineGroup;
}

function isCoroutineGroup(obj) {
  return coroutineGroups.has(obj);
}

function CoroutineGroupSet(runtime) {
  var groups = new Set();
  var nameToGroupMapping = new Map(); // let updatingGroups = false;

  var groupUpdateOrderList = [];
  var dirtyGroupUpdateOrder = 0;

  function add(group) {
    groups.add(group);
    groups.add(group.toPublic());
    nameToGroupMapping.set(group.name, group);
    dirtyGroupUpdateOrder |= 1 << 1;
    return group;
  }

  function has(group) {
    return groups.has(group);
  }

  function hasByName(groupName) {
    return nameToGroupMapping.has(groupName);
  }

  function getByName(groupName) {
    if (nameToGroupMapping.has(groupName)) {
      return nameToGroupMapping.get(groupName);
    }
  }

  function updatePriority(group, priority) {
    dirtyGroupUpdateOrder |= 1 << 0;
  }

  function sortUpdateOrder(flags) {
    if ((flags & 1 << 1) !== 0) {
      groupUpdateOrderList.splice(0, groupUpdateOrderList.length);
      nameToGroupMapping.forEach(function (group) {
        return void groupUpdateOrderList.push(group);
      });
    }

    groupUpdateOrderList.sort(function (a, b) {
      return b.priority - a.priority;
    });
  }

  function update() {
    if (dirtyGroupUpdateOrder !== 0) {
      var flags = dirtyGroupUpdateOrder;
      dirtyGroupUpdateOrder = 0;
      sortUpdateOrder(flags);
    } // updatingGroups = true;
    // try {


    groupUpdateOrderList.forEach(function (group) {
      return void group.update();
    }); // } finally {
    //   updatingGroups = false;
    // }
  }

  return {
    get runtime() {
      return runtime;
    },

    add: add,
    has: has,
    hasByName: hasByName,
    getByName: getByName,
    updatePriority: updatePriority,
    update: update
  };
}

function Runtime(tickRate) {
  if (tickRate === void 0) {
    tickRate = 0;
  }

  var autoTickEnabled = false;
  var tickCount = 0;
  var tickTime = 0;

  function enableAutoTick(tickRate) {
    if (tickRate <= 0) {
      throw new Error("'tickRate' must be greater than 0");
    }

    if (autoTickEnabled === true) {
      throw new Error('auto-tick has already enabled');
    }

    autoTickEnabled = true;
    startTick(tickRate);
  }

  function startTick(tickRate) {
    var interval = Math.floor(1000 / tickRate);
    var schedule;

    try {
      if (window && 'requestAnimationFrame' in window) {
        var tickIfNecessary = function tickIfNecessary(t1) {
          if (t1 - t0 >= interval) {
            tick(t1);
            t0 = t1;
          }

          schedule();
        };

        var t0 = 0;

        schedule = function schedule() {
          return void requestAnimationFrame(tickIfNecessary);
        };

        schedule();
      }
    } catch (_unused2) {}

    if (schedule === undefined) {
      var _tickIfNecessary = function _tickIfNecessary() {
        var t0 = Date.now();

        if (t0 >= nextTime) {
          tick(t0);
          var t1 = Date.now();

          if (t1 - t0 < interval) {
            nextTime = t0 + interval;
            schedule(Math.floor((nextTime - t1) * 0.85));
          } else {
            nextTime = t1;
            schedule(0);
          }
        } else {
          schedule(0);
        }
      };

      var nextTime = 0;

      schedule = function schedule(t) {
        return void setTimeout(_tickIfNecessary, t);
      };

      schedule(0);
    }
  }

  function tick(currentTime) {
    ++tickCount;
    tickTime = currentTime;
    currentRuntime = runtime;
    groupSet.update();
    currentRuntime = null;
  }

  function manualTick(currentTime) {
    if (autoTickEnabled === true) {
      throw new Error('running in auto-tick mode');
    }

    ++tickCount;
    tickTime = currentTime;
    var oldRuntime = currentRuntime;
    currentRuntime = runtime;
    groupSet.update();
    currentRuntime = oldRuntime;
  }

  var toPublic = function () {
    var publicRuntime = {
      get mainGroup() {
        return mainGroup.toPublic();
      },

      get currentTickCount() {
        return tickCount;
      },

      get lastTickTime() {
        return tickTime;
      },

      enableAutoTick: enableAutoTick,
      performTick: manualTick
    };
    return function () {
      return publicRuntime;
    };
  }();

  var groupSet = CoroutineGroupSet({
    get currentTickCount() {
      return tickCount;
    },

    get lastTickTime() {
      return tickTime;
    }

  });
  var mainGroup = CoroutineGroup(groupSet, 'main', {
    priority: CoroutineGroupPriority.Normal
  });
  var runtime = {
    get groupSet() {
      return groupSet;
    },

    get mainGroup() {
      return mainGroup;
    },

    get currentTickCount() {
      return tickCount;
    },

    get lastTickTime() {
      return tickTime;
    },

    toPublic: toPublic
  };

  if (tickRate > 0) {
    enableAutoTick(tickRate);
  }

  return runtime;
}

var currentRuntime = null;

function getCurrentRuntime() {
  return currentRuntime;
}

function asAsync(fn) {
  return /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var self, cb, done, exception, result, i, value;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            self = this;
            done = false;
            args = args.slice(0); // for (let i = 0; i < args.length; i++) {

            i = args.length - 1;
            value = args[i];

            if (typeof value === 'function') {
              cb = value;

              args[i] = function () {
                try {
                  var execResult = cb.apply(null, arguments);

                  if (valueTypes_cc.isObject(execResult)) {
                    exception = execResult.exception;
                    result = execResult.result;
                  } else {
                    result = execResult;
                  }
                } catch (e) {
                  exception = e;
                }

                done = true;
              }; // break;

            } // }


            if (!cb) {
              _context.next = 17;
              break;
            }

            fn.apply(self, args);

          case 8:
            if (done) {
              _context.next = 13;
              break;
            }

            _context.next = 11;
            return;

          case 11:
            _context.next = 8;
            break;

          case 13:
            if (!exception) {
              _context.next = 15;
              break;
            }

            throw exception;

          case 15:
            _context.next = 18;
            break;

          case 17:
            result = fn.apply(self, args);

          case 18:
            return _context.abrupt("return", result);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  });
}

function startStopwatch() {
  var runtime = getCurrentRuntime();

  if (!runtime) {
    throw new Error("'startStopwatch' must be run in coroutine");
  }

  var time0, tick0;
  var stopwatch = {
    get elapsedSeconds() {
      return (runtime.lastTickTime - time0) / 1000;
    },

    get elapsedMilliseconds() {
      return runtime.lastTickTime - time0;
    },

    get elapsedTicks() {
      return runtime.currentTickCount - tick0;
    },

    restart: function restart() {
      time0 = runtime.lastTickTime;
      tick0 = runtime.currentTickCount;
    }
  };
  stopwatch.restart();
  return stopwatch;
}

function start(group, genFn) {
  return isCoroutine(genFn) ? genFn : group.start(genFn);
}

function stopAll(coroutines) {
  if (coroutines.size > 0) {
    coroutines.forEach(function (coroutine) {
      return void coroutine.stop();
    }); // coroutines.clear();
  }
} // startAll(a, b, c, d);
// startAll([a, b, c, d]);
// startAll({ 0: a, 1: b, 2: c, 3: d });


function startAll(caller, genFns) {
  var _getCurrentCoroutine;

  var currentGroup = (_getCurrentCoroutine = getCurrentCoroutine()) == null ? void 0 : _getCurrentCoroutine.group;

  if (!currentGroup) {
    throw new Error("'" + caller + "' must be run in coroutine");
  } // if (arguments.length > 1) {
  //   genFns = Array.prototype.slice.call(arguments);
  // }


  var coroutines = new Map();

  if (valueTypes_cc.isArray(genFns)) {
    genFns.forEach(function (genFn, genFnIndex) {
      return void coroutines.set(genFnIndex, start(currentGroup, genFn));
    });
  } else if (valueTypes_cc.isObject(genFns)) {
    Object.keys(genFns).forEach(function (genFnName) {
      return void coroutines.set(genFnName, start(currentGroup, genFns[genFnName]));
    });
  }

  coroutines.stopAll = function () {
    return void stopAll(coroutines);
  };

  return coroutines;
}

var _marked$7 = /*#__PURE__*/regeneratorRuntime.mark(waitForAll);

function waitForAll(genFns) {
  var result, coroutines;
  return regeneratorRuntime.wrap(function waitForAll$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          result = {};
          coroutines = startAll('waitForAll', genFns);

          if (!(coroutines.size > 0)) {
            _context.next = 18;
            break;
          }

          _context.prev = 3;

        case 4:
          coroutines.forEach(function (coroutine, name) {
            if (coroutine.isDone()) {
              result[name] = {
                exception: coroutine.exception,
                result: coroutine.result
              };
              coroutines["delete"](name);
            }
          });

          if (!(coroutines.size === 0)) {
            _context.next = 8;
            break;
          }

          return _context.abrupt("break", 12);

        case 8:
          _context.next = 10;
          return;

        case 10:
          _context.next = 4;
          break;

        case 12:
          _context.next = 18;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](3);
          coroutines.stopAll();
          throw _context.t0;

        case 18:
          return _context.abrupt("return", result);

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$7, null, [[3, 14]]);
}

var _marked$6 = /*#__PURE__*/regeneratorRuntime.mark(waitForAny);

function waitForAny(genFns) {
  var result, coroutines, any;
  return regeneratorRuntime.wrap(function waitForAny$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          result = {};
          coroutines = startAll('waitForAny', genFns);

          if (!(coroutines.size > 0)) {
            _context.next = 20;
            break;
          }

          _context.prev = 3;

        case 4:
          any = false;
          coroutines.forEach(function (coroutine, name) {
            if (coroutine.isDone()) {
              result[name] = {
                exception: coroutine.exception,
                result: coroutine.result
              };
              coroutines["delete"](name);
              any = true;
            }
          });

          if (!any) {
            _context.next = 10;
            break;
          }

          coroutines.stopAll();
          return _context.abrupt("break", 14);

        case 10:
          _context.next = 12;
          return;

        case 12:
          _context.next = 4;
          break;

        case 14:
          _context.next = 20;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](3);
          coroutines.stopAll();
          throw _context.t0;

        case 20:
          return _context.abrupt("return", result);

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$6, null, [[3, 16]]);
}

var _marked$5 = /*#__PURE__*/regeneratorRuntime.mark(waitForTime);

function waitForTime(runtime, time) {
  var time0, elapsedTime;
  return regeneratorRuntime.wrap(function waitForTime$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(time > 0)) {
            _context.next = 10;
            break;
          }

          time0 = runtime.lastTickTime;

        case 2:
          elapsedTime = runtime.lastTickTime - time0;

          if (!(elapsedTime >= time)) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("break", 10);

        case 6:
          _context.next = 8;
          return;

        case 8:
          _context.next = 2;
          break;

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$5);
}

var _marked$4 = /*#__PURE__*/regeneratorRuntime.mark(waitForMilliseconds);

function waitForMilliseconds(milliseconds) {
  var runtime;
  return regeneratorRuntime.wrap(function waitForMilliseconds$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          runtime = getCurrentRuntime();

          if (runtime) {
            _context.next = 3;
            break;
          }

          throw new Error("'waitForMilliseconds' must be run in coroutine");

        case 3:
          _context.next = 5;
          return waitForTime(runtime, Math.max(milliseconds, 0));

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$4);
}

var _marked$3 = /*#__PURE__*/regeneratorRuntime.mark(waitForSeconds);

function waitForSeconds(seconds) {
  var runtime;
  return regeneratorRuntime.wrap(function waitForSeconds$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          runtime = getCurrentRuntime();

          if (runtime) {
            _context.next = 3;
            break;
          }

          throw new Error("'waitForSeconds' must be run in coroutine");

        case 3:
          _context.next = 5;
          return waitForTime(runtime, Math.max(seconds * 1000, 0));

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$3);
}

var _marked$2 = /*#__PURE__*/regeneratorRuntime.mark(waitForTicks);

function waitForTicks(ticks) {
  var maxTicks, tickCnt;
  return regeneratorRuntime.wrap(function waitForTicks$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          maxTicks = Math.max(ticks, 0);

          if (!(maxTicks > 0)) {
            _context.next = 10;
            break;
          }

          tickCnt = 0;

        case 3:
          if (!(++tickCnt > maxTicks)) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("break", 10);

        case 6:
          _context.next = 8;
          return;

        case 8:
          _context.next = 3;
          break;

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$2);
}

var _marked$1 = /*#__PURE__*/regeneratorRuntime.mark(waitUntil); // action: wait until action returns true


function waitUntil(action) {
  return regeneratorRuntime.wrap(function waitUntil$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(action() !== true)) {
            _context.next = 5;
            break;
          }

          _context.next = 3;
          return;

        case 3:
          _context.next = 0;
          break;

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$1);
}

var _marked = /*#__PURE__*/regeneratorRuntime.mark(waitWhile); // action: wait until action returns false


function waitWhile(action) {
  return regeneratorRuntime.wrap(function waitWhile$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(action() === true)) {
            _context.next = 5;
            break;
          }

          _context.next = 3;
          return;

        case 3:
          _context.next = 0;
          break;

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var utils = /*#__PURE__*/Object.freeze({
  __proto__: null,
  asAsync: asAsync,
  startStopwatch: startStopwatch,
  waitForAll: waitForAll,
  waitForAny: waitForAny,
  waitForMilliseconds: waitForMilliseconds,
  waitForSeconds: waitForSeconds,
  waitForTicks: waitForTicks,
  waitUntil: waitUntil,
  waitWhile: waitWhile
});

function isGenerator(value) {
  return getType(value) === GeneratorType;
}

function isGeneratorFunction(value) {
  return getType(value) === GeneratorFunctionType;
}

function isAsyncFunction(value) {
  return getType(value) === AsyncFunctionType;
}

function isPromise(value) {
  return getType(value) === PromiseType;
}

function exportRuntime(runtime) {
  var groupSet = runtime.groupSet;
  var mainGroup = runtime.mainGroup;

  function startCoroutine(genFn) {
    return mainGroup.start(genFn).toPublic();
  }

  function addProperty(obj, name, getter) {
    Object.defineProperty(obj, name, {
      enumerable: true,
      configurable: true,
      get: getter
    });
  }

  var publicRuntime = runtime.toPublic();
  addProperty(publicRuntime, 'current', function () {
    var _getCurrentCoroutine2;

    return (_getCurrentCoroutine2 = getCurrentCoroutine()) == null ? void 0 : _getCurrentCoroutine2.toPublic();
  });
  addProperty(publicRuntime, 'currentRuntime', function () {
    var _getCurrentRuntime;

    return (_getCurrentRuntime = getCurrentRuntime()) == null ? void 0 : _getCurrentRuntime.toPublic();
  });
  addProperty(publicRuntime, 'CoroutineStop', function () {
    return CoroutineStop;
  });
  publicRuntime.start = startCoroutine;
  publicRuntime.isCoroutine = isCoroutine;
  publicRuntime.isCoroutineGroup = isCoroutineGroup;
  publicRuntime.isGenerator = isGenerator;
  publicRuntime.isGeneratorFunction = isGeneratorFunction;
  publicRuntime.isAsyncFunction = isAsyncFunction;
  publicRuntime.isPromise = isPromise; // isGenerator/isGeneratorFunction/isAsyncFunction/isPromise
  // yield + [Generator/GeneratorFunction/AsyncFunction/Promise]

  publicRuntime.isSupportedAsync = isSupportedAsync;
  publicRuntime.promiseToGenerator = promiseToGenerator;

  publicRuntime.Runtime = function (tickRate) {
    return exportRuntime(Runtime(tickRate));
  };

  publicRuntime.CoroutineGroup = function (name, options) {
    return CoroutineGroup(groupSet, name, options).toPublic();
  };

  publicRuntime.CoroutineGroup.getGroupByName = function (name) {
    var _groupSet$getByName;

    return (_groupSet$getByName = groupSet.getByName(name)) == null ? void 0 : _groupSet$getByName.toPublic();
  };

  publicRuntime.CoroutineGroup.hasGroup = groupSet.has;
  publicRuntime.CoroutineGroup.hasGroupByName = groupSet.hasByName;
  Reflect.ownKeys(CoroutineGroupPriority).forEach(function (priorityName) {
    return void addProperty(publicRuntime.CoroutineGroup, priorityName + "Priority", function () {
      return CoroutineGroupPriority[priorityName];
    });
  });
  Reflect.ownKeys(utils).forEach(function (fnName) {
    return void (publicRuntime[fnName] = utils[fnName]);
  });
  return publicRuntime;
}

var index = exportRuntime(Runtime());
module.exports = index;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY28uY2MuanMiXSwibmFtZXMiOlsidmFsdWVUeXBlc19jYyIsInJlcXVpcmUiLCJBc3luY0Z1bmN0aW9uVHlwZSIsIkdlbmVyYXRvckZ1bmN0aW9uVHlwZSIsIkdlbmVyYXRvclR5cGUiLCJQcm9taXNlVHlwZSIsIm9iamVjdFRvU3RyaW5nIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJnZXRUeXBlIiwidmFsdWUiLCJjYWxsIiwiaXNTdXBwb3J0ZWRBc3luYyIsImlzU3VwcG9ydGVkQXN5bmNUeXBlIiwidHlwZSIsIkNvcm91dGluZVN0b3AiLCJjb3JvdXRpbmVzIiwiV2Vha1NldCIsIlJVTk5JTkciLCJTVVNQRU5ERUQiLCJTVE9QUElORyIsIkRPTkUiLCJDb3JvdXRpbmUiLCJncm91cCIsImV4ZWN1dG9yIiwic3RhdHVzIiwic3RvcHBlZCIsImZpbmFsUmVzdWx0IiwiZmluYWxFeGNlcHRpb24iLCJsYXN0RXhjZXB0aW9uIiwibGFzdEV4Y2VwdGlvbkxvZyIsImV4ZWN1dG9yU3RhY2siLCJBcnJheSIsImN1cnJlbnRFeGVjdXRvclN0YWNrSW5kZXgiLCJwdXNoRXhlY3V0b3IiLCJwb3BFeGVjdXRvciIsImdldEFjdGl2ZUV4ZWN1dG9yIiwic3RvcCIsImVUeXBlIiwicmVzdW1lIiwiYXJncyIsImN1cnJlbnRDb3JvdXRpbmUiLCJjb3JvdXRpbmUiLCJpc1N0b3BwaW5nIiwiaXNTdG9wcGVkIiwic3VzcGVuZCIsIm9uU3VzcGVuZCIsImlzU3VzcGVuZGVkIiwib25SZXN1bWUiLCJpc0RvbmUiLCJleGVjdXRlIiwibGFzdFJlc3VsdCIsImN1cnJlbnRFeGVjdXRvciIsInVuZGVmaW5lZCIsImV4ZWNSZXN1bHQiLCJydW4iLCJleGNlcHRpb24iLCJjb25zb2xlIiwiZXJyb3IiLCJlcnJvclRvU3RyaW5nIiwibmV4dFRpY2siLCJyZXN1bHQiLCJuZXh0RXhlY3V0b3IiLCJkaXJlY3RseVZhbHVlIiwiZSIsImFib3J0IiwidG9QdWJsaWMiLCJwdWJsaWNDb3JvdXRpbmUiLCJhZGRDb3JvdXRpbmUiLCJhZGQiLCJpc0Nvcm91dGluZSIsIm9iaiIsImhhcyIsImdldEN1cnJlbnRDb3JvdXRpbmUiLCJub3JtYWwiLCJiZWxvd05vcm1hbCIsImxvd2VzdCIsImFib3ZlTm9ybWFsIiwiaGlnaGVzdCIsIkNvcm91dGluZUdyb3VwUHJpb3JpdHkiLCJMb3dlc3QiLCJCZWxvd05vcm1hbCIsIk5vcm1hbCIsIkFib3ZlTm9ybWFsIiwiSGlnaGVzdCIsIlBST01JU0VfUEVORElORyIsIlBST01JU0VfRlVMRklMTEVEIiwiUFJPTUlTRV9SRUpFQ1RFRCIsInByb21pc2VUb0dlbmVyYXRvciIsInByb21pc2UiLCJzdGF0ZSIsInRoZW4iLCJ2YWwiLCJlcnIiLCJyZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZTIiLCJ3cmFwIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwicHJldiIsIm5leHQiLCJhYnJ1cHQiLCJhc3luY0ZuVG9HZW5lcmF0b3IiLCJhc3luY0ZuIiwiY29yb3V0aW5lVG9HZW5lcmF0b3IiLCJfY2FsbGVlMyIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImdlbmVyYXRvckV4ZWN1dG9ycyIsIkdlbmVyYXRvckV4ZWN1dG9yIiwiZ2VuIiwiZG9uZSIsImNvcm91dGluZUdyb3VwcyIsIkNvcm91dGluZUdyb3VwIiwiZ3JvdXBTZXQiLCJuYW1lIiwib3B0aW9ucyIsIl9vcHRpb25zJHByaW9yaXR5IiwiaGFzQnlOYW1lIiwiRXJyb3IiLCJwcmlvcml0eSIsInJ1bnRpbWUiLCJjdXJyZW50UHJpb3JpdHkiLCJydW5uaW5nQ29yb3V0aW5lcyIsImNvcm91dGluZXNEYXRhIiwiTWFwIiwic3RhcnQiLCJnZW5GbiIsImNvcm91dGluZUdyb3VwIiwic2V0IiwidGlja1doaWxlIiwiY3VycmVudFRpY2tDb3VudCIsInB1c2giLCJzdG9wQWxsIiwiZm9yRWFjaCIsInVwZGF0ZSIsImxlbmd0aCIsImN1cnJlbnRUaWNrIiwiaWRlbCIsImlkZWxjIiwiaSIsImltYXgiLCJnZXQiLCJzcGxpY2UiLCJzZXRQcmlvcml0eSIsInVwZGF0ZVByaW9yaXR5IiwicHVibGljQ29yb3V0aW5lR3JvdXAiLCJzaXplIiwiYWRkQ29yb3V0aW5lR3JvdXAiLCJpc0Nvcm91dGluZUdyb3VwIiwiQ29yb3V0aW5lR3JvdXBTZXQiLCJncm91cHMiLCJTZXQiLCJuYW1lVG9Hcm91cE1hcHBpbmciLCJncm91cFVwZGF0ZU9yZGVyTGlzdCIsImRpcnR5R3JvdXBVcGRhdGVPcmRlciIsImdyb3VwTmFtZSIsImdldEJ5TmFtZSIsInNvcnRVcGRhdGVPcmRlciIsImZsYWdzIiwic29ydCIsImEiLCJiIiwiUnVudGltZSIsInRpY2tSYXRlIiwiYXV0b1RpY2tFbmFibGVkIiwidGlja0NvdW50IiwidGlja1RpbWUiLCJlbmFibGVBdXRvVGljayIsInN0YXJ0VGljayIsImludGVydmFsIiwiTWF0aCIsImZsb29yIiwic2NoZWR1bGUiLCJ3aW5kb3ciLCJ0aWNrSWZOZWNlc3NhcnkiLCJ0MSIsInQwIiwidGljayIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIkRhdGUiLCJub3ciLCJuZXh0VGltZSIsInQiLCJzZXRUaW1lb3V0IiwiY3VycmVudFRpbWUiLCJjdXJyZW50UnVudGltZSIsIm1hbnVhbFRpY2siLCJvbGRSdW50aW1lIiwicHVibGljUnVudGltZSIsIm1haW5Hcm91cCIsImxhc3RUaWNrVGltZSIsInBlcmZvcm1UaWNrIiwiZ2V0Q3VycmVudFJ1bnRpbWUiLCJhc0FzeW5jIiwiZm4iLCJfY2FsbGVlIiwic2VsZiIsImNiIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInNsaWNlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJpc09iamVjdCIsInN0YXJ0U3RvcHdhdGNoIiwidGltZTAiLCJ0aWNrMCIsInN0b3B3YXRjaCIsImVsYXBzZWRTZWNvbmRzIiwiZWxhcHNlZE1pbGxpc2Vjb25kcyIsImVsYXBzZWRUaWNrcyIsInJlc3RhcnQiLCJzdGFydEFsbCIsImNhbGxlciIsImdlbkZucyIsImN1cnJlbnRHcm91cCIsImlzQXJyYXkiLCJnZW5GbkluZGV4Iiwia2V5cyIsImdlbkZuTmFtZSIsIl9tYXJrZWQkNyIsIndhaXRGb3JBbGwiLCJ3YWl0Rm9yQWxsJCIsIl9tYXJrZWQkNiIsIndhaXRGb3JBbnkiLCJhbnkiLCJ3YWl0Rm9yQW55JCIsIl9tYXJrZWQkNSIsIndhaXRGb3JUaW1lIiwidGltZSIsImVsYXBzZWRUaW1lIiwid2FpdEZvclRpbWUkIiwiX21hcmtlZCQ0Iiwid2FpdEZvck1pbGxpc2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsIndhaXRGb3JNaWxsaXNlY29uZHMkIiwibWF4IiwiX21hcmtlZCQzIiwid2FpdEZvclNlY29uZHMiLCJzZWNvbmRzIiwid2FpdEZvclNlY29uZHMkIiwiX21hcmtlZCQyIiwid2FpdEZvclRpY2tzIiwidGlja3MiLCJtYXhUaWNrcyIsInRpY2tDbnQiLCJ3YWl0Rm9yVGlja3MkIiwiX21hcmtlZCQxIiwid2FpdFVudGlsIiwiYWN0aW9uIiwid2FpdFVudGlsJCIsIl9tYXJrZWQiLCJ3YWl0V2hpbGUiLCJ3YWl0V2hpbGUkIiwidXRpbHMiLCJmcmVlemUiLCJfX3Byb3RvX18iLCJpc0dlbmVyYXRvciIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJpc0FzeW5jRnVuY3Rpb24iLCJpc1Byb21pc2UiLCJleHBvcnRSdW50aW1lIiwic3RhcnRDb3JvdXRpbmUiLCJhZGRQcm9wZXJ0eSIsImdldHRlciIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsImdldEdyb3VwQnlOYW1lIiwiaGFzR3JvdXAiLCJoYXNHcm91cEJ5TmFtZSIsIlJlZmxlY3QiLCJvd25LZXlzIiwicHJpb3JpdHlOYW1lIiwiZm5OYW1lIiwiaW5kZXgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7Ozs7OztBQUVBLElBQUlBLGFBQWEsR0FBR0MsT0FBTyxDQUFD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LENBQXpCO0FBRUFrSCxNQUFNLENBQUNDLE9BQVAsR0FBaUJGLEtBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdHMtbm9jaGVja1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdmFsdWVUeXBlc19jYyA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMuY2MnKTtcclxuXHJcbmNvbnN0IEFzeW5jRnVuY3Rpb25UeXBlID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nO1xyXG5jb25zdCBHZW5lcmF0b3JGdW5jdGlvblR5cGUgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nO1xyXG5jb25zdCBHZW5lcmF0b3JUeXBlID0gJ1tvYmplY3QgR2VuZXJhdG9yXSc7XHJcbmNvbnN0IFByb21pc2VUeXBlID0gJ1tvYmplY3QgUHJvbWlzZV0nO1xyXG5jb25zdCBvYmplY3RUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XHJcbmZ1bmN0aW9uIGdldFR5cGUodmFsdWUpIHtcclxuICByZXR1cm4gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XHJcbn1cclxuZnVuY3Rpb24gaXNTdXBwb3J0ZWRBc3luYyh2YWx1ZSkge1xyXG4gIHJldHVybiBpc1N1cHBvcnRlZEFzeW5jVHlwZShvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSk7XHJcbn1cclxuZnVuY3Rpb24gaXNTdXBwb3J0ZWRBc3luY1R5cGUodHlwZSkge1xyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSBBc3luY0Z1bmN0aW9uVHlwZTpcclxuICAgIGNhc2UgR2VuZXJhdG9yRnVuY3Rpb25UeXBlOlxyXG4gICAgY2FzZSBHZW5lcmF0b3JUeXBlOlxyXG4gICAgY2FzZSBQcm9taXNlVHlwZTpcclxuICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gQ29yb3V0aW5lU3RvcCgpIHt9XHJcblxyXG5jb25zdCBjb3JvdXRpbmVzID0gbmV3IFdlYWtTZXQoKTtcclxuY29uc3QgUlVOTklORyA9IDA7XHJcbmNvbnN0IFNVU1BFTkRFRCA9IDE7XHJcbmNvbnN0IFNUT1BQSU5HID0gMjtcclxuY29uc3QgRE9ORSA9IDM7XHJcbmZ1bmN0aW9uIENvcm91dGluZShncm91cCwgZXhlY3V0b3IpIHtcclxuICAvLyBjb25zdCBydW50aW1lID0gZ3JvdXAuZ3JvdXBTZXQucnVudGltZTtcclxuICBsZXQgc3RhdHVzID0gUlVOTklORztcclxuICBsZXQgc3RvcHBlZCA9IGZhbHNlO1xyXG4gIGxldCBmaW5hbFJlc3VsdCwgZmluYWxFeGNlcHRpb247XHJcbiAgbGV0IGxhc3RFeGNlcHRpb24sIGxhc3RFeGNlcHRpb25Mb2c7IC8vIGNvbnN0IGxhc3RZaWVsZCA9IHt9O1xyXG5cclxuICBjb25zdCBleGVjdXRvclN0YWNrID0gbmV3IEFycmF5KDI0KTsgLy8gcHJlYWxsb2MuLi5cclxuXHJcbiAgbGV0IGN1cnJlbnRFeGVjdXRvclN0YWNrSW5kZXggPSAtMTtcclxuXHJcbiAgY29uc3QgcHVzaEV4ZWN1dG9yID0gZXhlY3V0b3IgPT4ge1xyXG4gICAgLy8gZXhlY3V0b3IudGljazAgPSBydW50aW1lLmN1cnJlbnRUaWNrQ291bnQ7XHJcbiAgICBleGVjdXRvclN0YWNrWysrY3VycmVudEV4ZWN1dG9yU3RhY2tJbmRleF0gPSBleGVjdXRvcjtcclxuICAgIHJldHVybiBleGVjdXRvcjtcclxuICB9O1xyXG5cclxuICBjb25zdCBwb3BFeGVjdXRvciA9ICgpID0+IHtcclxuICAgIGlmIChjdXJyZW50RXhlY3V0b3JTdGFja0luZGV4ID49IDApIHtcclxuICAgICAgLS1jdXJyZW50RXhlY3V0b3JTdGFja0luZGV4O1xyXG4gICAgICByZXR1cm4gZ2V0QWN0aXZlRXhlY3V0b3IoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRBY3RpdmVFeGVjdXRvciA9ICgpID0+IHtcclxuICAgIGlmIChjdXJyZW50RXhlY3V0b3JTdGFja0luZGV4ID49IDApIHtcclxuICAgICAgcmV0dXJuIGV4ZWN1dG9yU3RhY2tbY3VycmVudEV4ZWN1dG9yU3RhY2tJbmRleF07XHJcbiAgICB9XHJcbiAgfTsgLy8gY29uc3Qgc2V0TGFzdFlpZWxkID0gdGlja3MgPT4ge1xyXG4gIC8vICAgbGFzdFlpZWxkLnRpY2tzID0gdGlja3M7XHJcbiAgLy8gfTtcclxuXHJcblxyXG4gIGNvbnN0IHN0b3AgPSAoZVR5cGUgPSBDb3JvdXRpbmVTdG9wLCAuLi5hcmdzKSA9PiB7XHJcbiAgICByZXN1bWUoKTtcclxuXHJcbiAgICBpZiAoc3RhdHVzID09PSBSVU5OSU5HKSB7XHJcbiAgICAgIHN0YXR1cyA9IFNUT1BQSU5HO1xyXG5cclxuICAgICAgaWYgKGN1cnJlbnRDb3JvdXRpbmUgPT09IGNvcm91dGluZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBlVHlwZSguLi5hcmdzKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGFzdEV4Y2VwdGlvbiA9IG5ldyBlVHlwZSguLi5hcmdzKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBpc1N0b3BwaW5nID0gKCkgPT4gc3RhdHVzID09PSBTVE9QUElORztcclxuXHJcbiAgY29uc3QgaXNTdG9wcGVkID0gKCkgPT4gc3RvcHBlZDtcclxuXHJcbiAgY29uc3Qgc3VzcGVuZCA9ICgpID0+IHtcclxuICAgIGlmIChzdGF0dXMgPT09IFJVTk5JTkcpIHtcclxuICAgICAgc3RhdHVzID0gU1VTUEVOREVEO1xyXG4gICAgICBncm91cC5vblN1c3BlbmQoY29yb3V0aW5lKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBpc1N1c3BlbmRlZCA9ICgpID0+IHN0YXR1cyA9PT0gU1VTUEVOREVEO1xyXG5cclxuICBjb25zdCByZXN1bWUgPSAoKSA9PiB7XHJcbiAgICBpZiAoc3RhdHVzID09PSBTVVNQRU5ERUQpIHtcclxuICAgICAgc3RhdHVzID0gUlVOTklORztcclxuICAgICAgZ3JvdXAub25SZXN1bWUoY29yb3V0aW5lKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBpc0RvbmUgPSAoKSA9PiBzdGF0dXMgPT09IERPTkU7XHJcblxyXG4gIGNvbnN0IGV4ZWN1dGUgPSAoKSA9PiB7XHJcbiAgICBpZiAoc3RhdHVzICE9PSBSVU5OSU5HICYmIHN0YXR1cyAhPT0gU1RPUFBJTkcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGN1cnJlbnRDb3JvdXRpbmUgPSBjb3JvdXRpbmU7XHJcbiAgICBsZXQgbGFzdFJlc3VsdDtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgY3VycmVudEV4ZWN1dG9yID0gZ2V0QWN0aXZlRXhlY3V0b3IoKTtcclxuXHJcbiAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRFeGVjdXRvciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBpZiAoc3RhdHVzID09PSBTVE9QUElORykge1xyXG4gICAgICAgICAgICBzdG9wcGVkID0gdHJ1ZTsgLy8gbGFzdEV4Y2VwdGlvbiA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBzdGF0dXMgPSBET05FO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBleGVjUmVzdWx0ID0gY3VycmVudEV4ZWN1dG9yLnJ1bihsYXN0RXhjZXB0aW9uLCBsYXN0UmVzdWx0KTtcclxuICAgICAgICBsYXN0RXhjZXB0aW9uID0gZXhlY1Jlc3VsdC5leGNlcHRpb247XHJcblxyXG4gICAgICAgIGlmIChsYXN0RXhjZXB0aW9uICE9PSBsYXN0RXhjZXB0aW9uTG9nKSB7XHJcbiAgICAgICAgICBsYXN0RXhjZXB0aW9uTG9nID0gbGFzdEV4Y2VwdGlvbjtcclxuXHJcbiAgICAgICAgICBpZiAobGFzdEV4Y2VwdGlvbkxvZyAhPT0gdW5kZWZpbmVkICYmICEobGFzdEV4Y2VwdGlvbkxvZyBpbnN0YW5jZW9mIENvcm91dGluZVN0b3ApKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFtjby5Db3JvdXRpbmVdIHJ1bnRpbWUgZXJyb3I6ICR7dmFsdWVUeXBlc19jYy5lcnJvclRvU3RyaW5nKGxhc3RFeGNlcHRpb25Mb2cpfWApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGV4ZWNSZXN1bHQubmV4dFRpY2sgPT09IHRydWUpIHtcclxuICAgICAgICAgIC8vIHNldExhc3RZaWVsZCgxKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGFzdFJlc3VsdCA9IGV4ZWNSZXN1bHQucmVzdWx0O1xyXG5cclxuICAgICAgICBpZiAoZXhlY1Jlc3VsdC5uZXh0RXhlY3V0b3IgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgY3VycmVudEV4ZWN1dG9yID0gcHVzaEV4ZWN1dG9yKGV4ZWNSZXN1bHQubmV4dEV4ZWN1dG9yKTsgLy8gc2V0TGFzdFlpZWxkKDApO1xyXG5cclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGV4ZWNSZXN1bHQuZGlyZWN0bHlWYWx1ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgLy8gc2V0TGFzdFlpZWxkKDApO1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfSAvLyBzZXRMYXN0WWllbGQocnVudGltZS5jdXJyZW50VGlja0NvdW50IC0gY3VycmVudEV4ZWN1dG9yLnRpY2swKTtcclxuXHJcblxyXG4gICAgICAgIGN1cnJlbnRFeGVjdXRvciA9IHBvcEV4ZWN1dG9yKCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihgW2NvLkNvcm91dGluZV0gaW50ZXJuYWwgZXJyb3I6ICR7dmFsdWVUeXBlc19jYy5lcnJvclRvU3RyaW5nKGUpfWApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzdGF0dXMgPT09IERPTkUpIHtcclxuICAgICAgbGV0IGV4ZWN1dG9yID0gZ2V0QWN0aXZlRXhlY3V0b3IoKTtcclxuXHJcbiAgICAgIHdoaWxlIChleGVjdXRvciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZXhlY3V0b3IuYWJvcnQoKTtcclxuICAgICAgICBleGVjdXRvciA9IHBvcEV4ZWN1dG9yKCk7XHJcbiAgICAgIH0gLy8gZXhlY3V0b3JTdGFjay5zcGxpY2UoMCk7XHJcblxyXG5cclxuICAgICAgZmluYWxFeGNlcHRpb24gPSBsYXN0RXhjZXB0aW9uO1xyXG4gICAgICBmaW5hbFJlc3VsdCA9IGxhc3RSZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgY3VycmVudENvcm91dGluZSA9IG51bGw7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9QdWJsaWMgPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgcHVibGljQ29yb3V0aW5lID0ge1xyXG4gICAgICBnZXQgZ3JvdXAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGdyb3VwLnRvUHVibGljKCk7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBnZXQgcmVzdWx0KCkge1xyXG4gICAgICAgIHJldHVybiBmaW5hbFJlc3VsdDtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIGdldCBleGNlcHRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIGZpbmFsRXhjZXB0aW9uO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgLy8gZ2V0IGxhc3RZaWVsZCgpIHtcclxuICAgICAgLy8gICByZXR1cm4geyAuLi5sYXN0WWllbGQgfTtcclxuICAgICAgLy8gfSxcclxuICAgICAgc3RvcCxcclxuICAgICAgaXNTdG9wcGluZyxcclxuICAgICAgaXNTdG9wcGVkLFxyXG4gICAgICBzdXNwZW5kLFxyXG4gICAgICBpc1N1c3BlbmRlZCxcclxuICAgICAgcmVzdW1lLFxyXG4gICAgICBpc0RvbmVcclxuICAgIH07XHJcbiAgICByZXR1cm4gKCkgPT4gcHVibGljQ29yb3V0aW5lO1xyXG4gIH0pKCk7IC8vIHNldExhc3RZaWVsZCgwKTtcclxuXHJcblxyXG4gIHB1c2hFeGVjdXRvcihleGVjdXRvcik7XHJcbiAgY29uc3QgY29yb3V0aW5lID0ge1xyXG4gICAgLy8gcHJvcGVydGllc1xyXG4gICAgZ2V0IGdyb3VwKCkge1xyXG4gICAgICByZXR1cm4gZ3JvdXA7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldCByZXN1bHQoKSB7XHJcbiAgICAgIHJldHVybiBmaW5hbFJlc3VsdDtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0IGV4Y2VwdGlvbigpIHtcclxuICAgICAgcmV0dXJuIGZpbmFsRXhjZXB0aW9uO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBtZXRob2RzXHJcbiAgICBzdG9wLFxyXG4gICAgaXNTdG9wcGluZyxcclxuICAgIGlzU3RvcHBlZCxcclxuICAgIHN1c3BlbmQsXHJcbiAgICBpc1N1c3BlbmRlZCxcclxuICAgIHJlc3VtZSxcclxuICAgIGlzRG9uZSxcclxuICAgIGV4ZWN1dGUsXHJcbiAgICB0b1B1YmxpY1xyXG4gIH07XHJcbiAgcmV0dXJuIGFkZENvcm91dGluZShjb3JvdXRpbmUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb3JvdXRpbmUoY29yb3V0aW5lKSB7XHJcbiAgY29yb3V0aW5lcy5hZGQoY29yb3V0aW5lKTtcclxuICBjb3JvdXRpbmVzLmFkZChjb3JvdXRpbmUudG9QdWJsaWMoKSk7XHJcbiAgcmV0dXJuIGNvcm91dGluZTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNDb3JvdXRpbmUob2JqKSB7XHJcbiAgcmV0dXJuIGNvcm91dGluZXMuaGFzKG9iaik7XHJcbn1cclxubGV0IGN1cnJlbnRDb3JvdXRpbmUgPSBudWxsO1xyXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29yb3V0aW5lKCkge1xyXG4gIHJldHVybiBjdXJyZW50Q29yb3V0aW5lO1xyXG59XHJcblxyXG5jb25zdCBub3JtYWwgPSAwO1xyXG5jb25zdCBiZWxvd05vcm1hbCA9IG5vcm1hbCAtIDEwMDAwMDAwO1xyXG5jb25zdCBsb3dlc3QgPSBiZWxvd05vcm1hbCAtIDEwMDAwMDAwO1xyXG5jb25zdCBhYm92ZU5vcm1hbCA9IG5vcm1hbCArIDEwMDAwMDAwO1xyXG5jb25zdCBoaWdoZXN0ID0gYWJvdmVOb3JtYWwgKyAxMDAwMDAwMDtcclxudmFyIENvcm91dGluZUdyb3VwUHJpb3JpdHkgPSB7XHJcbiAgZ2V0IExvd2VzdCgpIHtcclxuICAgIHJldHVybiBsb3dlc3Q7XHJcbiAgfSxcclxuXHJcbiAgZ2V0IEJlbG93Tm9ybWFsKCkge1xyXG4gICAgcmV0dXJuIGJlbG93Tm9ybWFsO1xyXG4gIH0sXHJcblxyXG4gIGdldCBOb3JtYWwoKSB7XHJcbiAgICByZXR1cm4gbm9ybWFsO1xyXG4gIH0sXHJcblxyXG4gIGdldCBBYm92ZU5vcm1hbCgpIHtcclxuICAgIHJldHVybiBhYm92ZU5vcm1hbDtcclxuICB9LFxyXG5cclxuICBnZXQgSGlnaGVzdCgpIHtcclxuICAgIHJldHVybiBoaWdoZXN0O1xyXG4gIH1cclxuXHJcbn07XHJcblxyXG5jb25zdCBQUk9NSVNFX1BFTkRJTkcgPSAwO1xyXG5jb25zdCBQUk9NSVNFX0ZVTEZJTExFRCA9IDE7XHJcbmNvbnN0IFBST01JU0VfUkVKRUNURUQgPSAyO1xyXG5mdW5jdGlvbiBwcm9taXNlVG9HZW5lcmF0b3IocHJvbWlzZSkge1xyXG4gIGxldCBzdGF0ZSA9IFBST01JU0VfUEVORElORztcclxuICBsZXQgdmFsdWU7XHJcbiAgcHJvbWlzZS50aGVuKHZhbCA9PiB7XHJcbiAgICBzdGF0ZSA9IFBST01JU0VfRlVMRklMTEVEO1xyXG4gICAgdmFsdWUgPSB2YWw7XHJcbiAgfSwgZXJyID0+IHtcclxuICAgIHN0YXRlID0gUFJPTUlTRV9SRUpFQ1RFRDtcclxuICAgIHZhbHVlID0gZXJyO1xyXG4gIH0pO1xyXG4gIHJldHVybiAvKiNfX1BVUkVfXyovcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTIoKSB7XHJcbiAgICByZXR1cm4gcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTIkKF9jb250ZXh0Mikge1xyXG4gICAgICB3aGlsZSAoMSkgc3dpdGNoIChfY29udGV4dDIucHJldiA9IF9jb250ZXh0Mi5uZXh0KSB7XHJcbiAgICAgICAgY2FzZSAwOlxyXG5cclxuICAgICAgICAgIGlmICghKHN0YXRlICE9PSBQUk9NSVNFX1BFTkRJTkcpKSB7XHJcbiAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gNTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKCEoc3RhdGUgPT09IFBST01JU0VfUkVKRUNURUQpKSB7XHJcbiAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gNDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhyb3cgdmFsdWU7XHJcblxyXG4gICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgIHJldHVybiBfY29udGV4dDIuYWJydXB0KFwicmV0dXJuXCIsIHZhbHVlKTtcclxuXHJcbiAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgX2NvbnRleHQyLm5leHQgPSA3O1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDA7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgIGNhc2UgXCJlbmRcIjpcclxuICAgICAgICAgIHJldHVybiBfY29udGV4dDIuc3RvcCgpO1xyXG4gICAgICB9XHJcbiAgICB9LCBfY2FsbGVlMik7XHJcbiAgfSkoKTtcclxufVxyXG5mdW5jdGlvbiBhc3luY0ZuVG9HZW5lcmF0b3IoYXN5bmNGbikge1xyXG4gIC8vIEFzeW5jIEZ1bmN0aW9uIHJldHVybnMgUHJvbWlzZVxyXG4gIHJldHVybiBwcm9taXNlVG9HZW5lcmF0b3IoYXN5bmNGbigpKTtcclxufVxyXG5mdW5jdGlvbiBjb3JvdXRpbmVUb0dlbmVyYXRvcihjb3JvdXRpbmUpIHtcclxuICByZXR1cm4gLyojX19QVVJFX18qL3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUzKCkge1xyXG4gICAgcmV0dXJuIHJlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUzJChfY29udGV4dDMpIHtcclxuICAgICAgd2hpbGUgKDEpIHN3aXRjaCAoX2NvbnRleHQzLnByZXYgPSBfY29udGV4dDMubmV4dCkge1xyXG4gICAgICAgIGNhc2UgMDpcclxuXHJcbiAgICAgICAgICBpZiAoIWNvcm91dGluZS5pc0RvbmUoKSkge1xyXG4gICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmICghKGNvcm91dGluZS5leGNlcHRpb24gIT09IHVuZGVmaW5lZCkpIHtcclxuICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSA0O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aHJvdyBjb3JvdXRpbmUuZXhjZXB0aW9uO1xyXG5cclxuICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICByZXR1cm4gX2NvbnRleHQzLmFicnVwdChcInJldHVyblwiLCBjb3JvdXRpbmUucmVzdWx0KTtcclxuXHJcbiAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgX2NvbnRleHQzLm5leHQgPSA3O1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDA7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgIGNhc2UgXCJlbmRcIjpcclxuICAgICAgICAgIHJldHVybiBfY29udGV4dDMuc3RvcCgpO1xyXG4gICAgICB9XHJcbiAgICB9LCBfY2FsbGVlMyk7XHJcbiAgfSkoKTtcclxufVxyXG5cclxuY29uc3QgZ2VuZXJhdG9yRXhlY3V0b3JzID0gbmV3IFdlYWtTZXQoKTtcclxuZnVuY3Rpb24gR2VuZXJhdG9yRXhlY3V0b3IoZ2VuKSB7XHJcbiAgY29uc3QgZXhlY3V0b3IgPSB7XHJcbiAgICBydW4oZXhjZXB0aW9uLCByZXN1bHQpIHtcclxuICAgICAgY29uc3QgZXhlY1Jlc3VsdCA9IHt9O1xyXG4gICAgICBsZXQgc3RhdGU7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHN0YXRlID0gZXhjZXB0aW9uICE9PSB1bmRlZmluZWQgPyBnZW4udGhyb3coZXhjZXB0aW9uKSA6IGdlbi5uZXh0KHJlc3VsdCk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBleGVjUmVzdWx0LmV4Y2VwdGlvbiA9IGU7XHJcbiAgICAgICAgc3RhdGUgPSB7XHJcbiAgICAgICAgICBkb25lOiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHN0YXRlLmRvbmUpIHtcclxuICAgICAgICBleGVjUmVzdWx0LnJlc3VsdCA9IHN0YXRlLnZhbHVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gc3RhdGUudmFsdWU7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBleGVjUmVzdWx0Lm5leHRUaWNrID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGdlbmVyYXRvckV4ZWN1dG9ycy5oYXModmFsdWUpKSB7XHJcbiAgICAgICAgICBleGVjUmVzdWx0Lm5leHRFeGVjdXRvciA9IHZhbHVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXNDb3JvdXRpbmUodmFsdWUpKSB7XHJcbiAgICAgICAgICBleGVjUmVzdWx0Lm5leHRFeGVjdXRvciA9IEdlbmVyYXRvckV4ZWN1dG9yKGNvcm91dGluZVRvR2VuZXJhdG9yKHZhbHVlKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN3aXRjaCAoZ2V0VHlwZSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgY2FzZSBHZW5lcmF0b3JGdW5jdGlvblR5cGU6XHJcbiAgICAgICAgICAgICAgZXhlY1Jlc3VsdC5uZXh0RXhlY3V0b3IgPSBHZW5lcmF0b3JFeGVjdXRvcih2YWx1ZSgpKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgR2VuZXJhdG9yVHlwZTpcclxuICAgICAgICAgICAgICBleGVjUmVzdWx0Lm5leHRFeGVjdXRvciA9IEdlbmVyYXRvckV4ZWN1dG9yKHZhbHVlKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUHJvbWlzZVR5cGU6XHJcbiAgICAgICAgICAgICAgZXhlY1Jlc3VsdC5uZXh0RXhlY3V0b3IgPSBHZW5lcmF0b3JFeGVjdXRvcihwcm9taXNlVG9HZW5lcmF0b3IodmFsdWUpKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQXN5bmNGdW5jdGlvblR5cGU6XHJcbiAgICAgICAgICAgICAgZXhlY1Jlc3VsdC5uZXh0RXhlY3V0b3IgPSBHZW5lcmF0b3JFeGVjdXRvcihhc3luY0ZuVG9HZW5lcmF0b3IodmFsdWUpKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgLy8gbmV4dEV4ZWN1dG9yID0gR2VuZXJhdG9yRXhlY3V0b3IoYW55VG9HZW5lcmF0b3IodmFsdWUpKTtcclxuICAgICAgICAgICAgICBleGVjUmVzdWx0LnJlc3VsdCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgIGV4ZWNSZXN1bHQuZGlyZWN0bHlWYWx1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZXhlY1Jlc3VsdDtcclxuICAgIH0sXHJcblxyXG4gICAgYWJvcnQoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgZ2VuLnJldHVybigpO1xyXG4gICAgICB9IGNhdGNoIHt9XHJcbiAgICB9XHJcblxyXG4gIH07XHJcbiAgZ2VuZXJhdG9yRXhlY3V0b3JzLmFkZChleGVjdXRvcik7XHJcbiAgcmV0dXJuIGV4ZWN1dG9yO1xyXG59XHJcblxyXG5jb25zdCBjb3JvdXRpbmVHcm91cHMgPSBuZXcgV2Vha1NldCgpO1xyXG5mdW5jdGlvbiBDb3JvdXRpbmVHcm91cChncm91cFNldCwgbmFtZSwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgdmFyIF9vcHRpb25zJHByaW9yaXR5O1xyXG5cclxuICBpZiAoZ3JvdXBTZXQuaGFzQnlOYW1lKG5hbWUpKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGNvcm91dGluZSBncm91cCAnJHtuYW1lfScgZXhpc3RzYCk7XHJcbiAgfVxyXG5cclxuICAoX29wdGlvbnMkcHJpb3JpdHkgPSBvcHRpb25zLnByaW9yaXR5KSAhPSBudWxsID8gX29wdGlvbnMkcHJpb3JpdHkgOiBvcHRpb25zLnByaW9yaXR5ID0gQ29yb3V0aW5lR3JvdXBQcmlvcml0eS5Ob3JtYWw7XHJcbiAgY29uc3QgcnVudGltZSA9IGdyb3VwU2V0LnJ1bnRpbWU7XHJcbiAgbGV0IGN1cnJlbnRQcmlvcml0eTtcclxuICBjb25zdCBydW5uaW5nQ29yb3V0aW5lcyA9IFtdO1xyXG4gIGNvbnN0IGNvcm91dGluZXNEYXRhID0gbmV3IE1hcCgpO1xyXG5cclxuICBjb25zdCBzdGFydCA9IGdlbkZuID0+IHtcclxuICAgIGNvbnN0IGNvcm91dGluZSA9IENvcm91dGluZShjb3JvdXRpbmVHcm91cCwgR2VuZXJhdG9yRXhlY3V0b3IoZ2VuRm4oKSkpO1xyXG4gICAgY29yb3V0aW5lc0RhdGEuc2V0KGNvcm91dGluZSwge1xyXG4gICAgICB0aWNrV2hpbGU6IHJ1bnRpbWUuY3VycmVudFRpY2tDb3VudFxyXG4gICAgfSk7XHJcbiAgICBydW5uaW5nQ29yb3V0aW5lcy5wdXNoKGNvcm91dGluZSk7XHJcbiAgICByZXR1cm4gY29yb3V0aW5lO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN0b3BBbGwgPSAoZVR5cGUgPSBDb3JvdXRpbmVTdG9wKSA9PiB7XHJcbiAgICBjb25zdCBjdXJyZW50Q29yb3V0aW5lID0gZ2V0Q3VycmVudENvcm91dGluZSgpO1xyXG5cclxuICAgIGlmIChjdXJyZW50Q29yb3V0aW5lPy5ncm91cC5uYW1lID09PSBuYW1lKSB7XHJcbiAgICAgIGxldCBlcnJvcjtcclxuICAgICAgcnVubmluZ0Nvcm91dGluZXMuZm9yRWFjaChjb3JvdXRpbmUgPT4ge1xyXG4gICAgICAgIGlmIChjdXJyZW50Q29yb3V0aW5lID09PSBjb3JvdXRpbmUpIHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvcm91dGluZS5zdG9wKGVUeXBlKTtcclxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIGVUeXBlKSkge1xyXG4gICAgICAgICAgICAgIHRocm93IGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGVycm9yID0gZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29yb3V0aW5lLnN0b3AoZVR5cGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcnVubmluZ0Nvcm91dGluZXMuZm9yRWFjaChjb3JvdXRpbmUgPT4gdm9pZCBjb3JvdXRpbmUuc3RvcChlVHlwZSkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcclxuICAgIGlmIChydW5uaW5nQ29yb3V0aW5lcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRUaWNrID0gcnVudGltZS5jdXJyZW50VGlja0NvdW50O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBpZGVsID0gLTE7XHJcbiAgICAgIGxldCBpZGVsYztcclxuICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICBsZXQgaW1heCA9IHJ1bm5pbmdDb3JvdXRpbmVzLmxlbmd0aDtcclxuXHJcbiAgICAgIHdoaWxlIChpIDwgaW1heCkge1xyXG4gICAgICAgIGNvbnN0IGNvcm91dGluZSA9IHJ1bm5pbmdDb3JvdXRpbmVzW2ldO1xyXG5cclxuICAgICAgICBpZiAoY29yb3V0aW5lc0RhdGEuZ2V0KGNvcm91dGluZSkudGlja1doaWxlIDwgY3VycmVudFRpY2spIHtcclxuICAgICAgICAgIGNvcm91dGluZS5leGVjdXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29yb3V0aW5lLmlzRG9uZSgpKSB7XHJcbiAgICAgICAgICBjb3JvdXRpbmVzRGF0YS5kZWxldGUoY29yb3V0aW5lKTtcclxuXHJcbiAgICAgICAgICBpZiAoaWRlbCA+IC0xKSB7XHJcbiAgICAgICAgICAgIGlkZWxjKys7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZGVsID0gaTtcclxuICAgICAgICAgICAgaWRlbGMgPSAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoaWRlbCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHJ1bm5pbmdDb3JvdXRpbmVzLnNwbGljZShpZGVsLCBpZGVsYyk7XHJcbiAgICAgICAgICAgIGltYXggLT0gaWRlbGM7XHJcbiAgICAgICAgICAgIGkgLT0gaWRlbGM7XHJcbiAgICAgICAgICAgIGlkZWwgPSAtMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGkrKztcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGlkZWwgPiAtMSkge1xyXG4gICAgICAgIHJ1bm5pbmdDb3JvdXRpbmVzLnNwbGljZShpZGVsLCBpZGVsYyk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihgW2NvLkNvcm91dGluZUdyb3VwXSBpbnRlcm5hbCBlcnJvcjogJHt2YWx1ZVR5cGVzX2NjLmVycm9yVG9TdHJpbmcoZSl9YCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2V0UHJpb3JpdHkgPSBwcmlvcml0eSA9PiB7XHJcbiAgICBpZiAoY3VycmVudFByaW9yaXR5ID09PSB1bmRlZmluZWQgfHwgY3VycmVudFByaW9yaXR5ICE9PSBwcmlvcml0eSkge1xyXG4gICAgICBjdXJyZW50UHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgZ3JvdXBTZXQudXBkYXRlUHJpb3JpdHkoY29yb3V0aW5lR3JvdXAsIGN1cnJlbnRQcmlvcml0eSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25TdXNwZW5kID0gY29yb3V0aW5lID0+IHt9O1xyXG5cclxuICBjb25zdCBvblJlc3VtZSA9IGNvcm91dGluZSA9PiB7XHJcbiAgICBjb3JvdXRpbmVzRGF0YS5nZXQoY29yb3V0aW5lKS50aWNrV2hpbGUgPSBydW50aW1lLmN1cnJlbnRUaWNrQ291bnQ7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9QdWJsaWMgPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgcHVibGljQ29yb3V0aW5lR3JvdXAgPSB7XHJcbiAgICAgIGdldCBuYW1lKCkge1xyXG4gICAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgZ2V0IHNpemUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHJ1bm5pbmdDb3JvdXRpbmVzLmxlbmd0aDtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIGdldCBwcmlvcml0eSgpIHtcclxuICAgICAgICByZXR1cm4gY3VycmVudFByaW9yaXR5O1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgc3RhcnQ6IGdlbkZuID0+IHN0YXJ0KGdlbkZuKS50b1B1YmxpYygpLFxyXG4gICAgICBzdG9wQWxsXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuICgpID0+IHB1YmxpY0Nvcm91dGluZUdyb3VwO1xyXG4gIH0pKCk7XHJcblxyXG4gIGNvbnN0IGNvcm91dGluZUdyb3VwID0ge1xyXG4gICAgLy8gcHJvcGVydGllc1xyXG4gICAgZ2V0IG5hbWUoKSB7XHJcbiAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXQgZ3JvdXBTZXQoKSB7XHJcbiAgICAgIHJldHVybiBncm91cFNldDtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0IHNpemUoKSB7XHJcbiAgICAgIHJldHVybiBydW5uaW5nQ29yb3V0aW5lcy5sZW5ndGg7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldCBwcmlvcml0eSgpIHtcclxuICAgICAgcmV0dXJuIGN1cnJlbnRQcmlvcml0eTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gZXZlbnRzXHJcbiAgICBvblN1c3BlbmQsXHJcbiAgICBvblJlc3VtZSxcclxuICAgIC8vIG1ldGhvZHNcclxuICAgIHN0YXJ0LFxyXG4gICAgc3RvcEFsbCxcclxuICAgIHVwZGF0ZSxcclxuICAgIHRvUHVibGljXHJcbiAgfTtcclxuICBzZXRQcmlvcml0eShvcHRpb25zLnByaW9yaXR5KTtcclxuICByZXR1cm4gYWRkQ29yb3V0aW5lR3JvdXAoZ3JvdXBTZXQuYWRkKGNvcm91dGluZUdyb3VwKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENvcm91dGluZUdyb3VwKGNvcm91dGluZUdyb3VwKSB7XHJcbiAgY29yb3V0aW5lR3JvdXBzLmFkZChjb3JvdXRpbmVHcm91cCk7XHJcbiAgY29yb3V0aW5lR3JvdXBzLmFkZChjb3JvdXRpbmVHcm91cC50b1B1YmxpYygpKTtcclxuICByZXR1cm4gY29yb3V0aW5lR3JvdXA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQ29yb3V0aW5lR3JvdXAob2JqKSB7XHJcbiAgcmV0dXJuIGNvcm91dGluZUdyb3Vwcy5oYXMob2JqKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQ29yb3V0aW5lR3JvdXBTZXQocnVudGltZSkge1xyXG4gIGNvbnN0IGdyb3VwcyA9IG5ldyBTZXQoKTtcclxuICBjb25zdCBuYW1lVG9Hcm91cE1hcHBpbmcgPSBuZXcgTWFwKCk7IC8vIGxldCB1cGRhdGluZ0dyb3VwcyA9IGZhbHNlO1xyXG5cclxuICBjb25zdCBncm91cFVwZGF0ZU9yZGVyTGlzdCA9IFtdO1xyXG4gIGxldCBkaXJ0eUdyb3VwVXBkYXRlT3JkZXIgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBhZGQoZ3JvdXApIHtcclxuICAgIGdyb3Vwcy5hZGQoZ3JvdXApO1xyXG4gICAgZ3JvdXBzLmFkZChncm91cC50b1B1YmxpYygpKTtcclxuICAgIG5hbWVUb0dyb3VwTWFwcGluZy5zZXQoZ3JvdXAubmFtZSwgZ3JvdXApO1xyXG4gICAgZGlydHlHcm91cFVwZGF0ZU9yZGVyIHw9IDEgPDwgMTtcclxuICAgIHJldHVybiBncm91cDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhcyhncm91cCkge1xyXG4gICAgcmV0dXJuIGdyb3Vwcy5oYXMoZ3JvdXApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFzQnlOYW1lKGdyb3VwTmFtZSkge1xyXG4gICAgcmV0dXJuIG5hbWVUb0dyb3VwTWFwcGluZy5oYXMoZ3JvdXBOYW1lKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldEJ5TmFtZShncm91cE5hbWUpIHtcclxuICAgIGlmIChuYW1lVG9Hcm91cE1hcHBpbmcuaGFzKGdyb3VwTmFtZSkpIHtcclxuICAgICAgcmV0dXJuIG5hbWVUb0dyb3VwTWFwcGluZy5nZXQoZ3JvdXBOYW1lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZVByaW9yaXR5KGdyb3VwLCBwcmlvcml0eSkge1xyXG4gICAgZGlydHlHcm91cFVwZGF0ZU9yZGVyIHw9IDEgPDwgMDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNvcnRVcGRhdGVPcmRlcihmbGFncykge1xyXG4gICAgaWYgKChmbGFncyAmIDEgPDwgMSkgIT09IDApIHtcclxuICAgICAgZ3JvdXBVcGRhdGVPcmRlckxpc3Quc3BsaWNlKDAsIGdyb3VwVXBkYXRlT3JkZXJMaXN0Lmxlbmd0aCk7XHJcbiAgICAgIG5hbWVUb0dyb3VwTWFwcGluZy5mb3JFYWNoKGdyb3VwID0+IHZvaWQgZ3JvdXBVcGRhdGVPcmRlckxpc3QucHVzaChncm91cCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdyb3VwVXBkYXRlT3JkZXJMaXN0LnNvcnQoKGEsIGIpID0+IGIucHJpb3JpdHkgLSBhLnByaW9yaXR5KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcclxuICAgIGlmIChkaXJ0eUdyb3VwVXBkYXRlT3JkZXIgIT09IDApIHtcclxuICAgICAgY29uc3QgZmxhZ3MgPSBkaXJ0eUdyb3VwVXBkYXRlT3JkZXI7XHJcbiAgICAgIGRpcnR5R3JvdXBVcGRhdGVPcmRlciA9IDA7XHJcbiAgICAgIHNvcnRVcGRhdGVPcmRlcihmbGFncyk7XHJcbiAgICB9IC8vIHVwZGF0aW5nR3JvdXBzID0gdHJ1ZTtcclxuICAgIC8vIHRyeSB7XHJcblxyXG5cclxuICAgIGdyb3VwVXBkYXRlT3JkZXJMaXN0LmZvckVhY2goZ3JvdXAgPT4gdm9pZCBncm91cC51cGRhdGUoKSk7IC8vIH0gZmluYWxseSB7XHJcbiAgICAvLyAgIHVwZGF0aW5nR3JvdXBzID0gZmFsc2U7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0IHJ1bnRpbWUoKSB7XHJcbiAgICAgIHJldHVybiBydW50aW1lO1xyXG4gICAgfSxcclxuXHJcbiAgICBhZGQsXHJcbiAgICBoYXMsXHJcbiAgICBoYXNCeU5hbWUsXHJcbiAgICBnZXRCeU5hbWUsXHJcbiAgICB1cGRhdGVQcmlvcml0eSxcclxuICAgIHVwZGF0ZVxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFJ1bnRpbWUodGlja1JhdGUgPSAwKSB7XHJcbiAgbGV0IGF1dG9UaWNrRW5hYmxlZCA9IGZhbHNlO1xyXG4gIGxldCB0aWNrQ291bnQgPSAwO1xyXG4gIGxldCB0aWNrVGltZSA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIGVuYWJsZUF1dG9UaWNrKHRpY2tSYXRlKSB7XHJcbiAgICBpZiAodGlja1JhdGUgPD0gMCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCIndGlja1JhdGUnIG11c3QgYmUgZ3JlYXRlciB0aGFuIDBcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGF1dG9UaWNrRW5hYmxlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2F1dG8tdGljayBoYXMgYWxyZWFkeSBlbmFibGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgYXV0b1RpY2tFbmFibGVkID0gdHJ1ZTtcclxuICAgIHN0YXJ0VGljayh0aWNrUmF0ZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzdGFydFRpY2sodGlja1JhdGUpIHtcclxuICAgIGNvbnN0IGludGVydmFsID0gTWF0aC5mbG9vcigxMDAwIC8gdGlja1JhdGUpO1xyXG4gICAgbGV0IHNjaGVkdWxlO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICh3aW5kb3cgJiYgJ3JlcXVlc3RBbmltYXRpb25GcmFtZScgaW4gd2luZG93KSB7XHJcbiAgICAgICAgbGV0IHQwID0gMDtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdGlja0lmTmVjZXNzYXJ5KHQxKSB7XHJcbiAgICAgICAgICBpZiAodDEgLSB0MCA+PSBpbnRlcnZhbCkge1xyXG4gICAgICAgICAgICB0aWNrKHQxKTtcclxuICAgICAgICAgICAgdDAgPSB0MTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBzY2hlZHVsZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2NoZWR1bGUgPSAoKSA9PiB2b2lkIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrSWZOZWNlc3NhcnkpO1xyXG5cclxuICAgICAgICBzY2hlZHVsZSgpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIHt9XHJcblxyXG4gICAgaWYgKHNjaGVkdWxlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgbGV0IG5leHRUaW1lID0gMDtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIHRpY2tJZk5lY2Vzc2FyeSgpIHtcclxuICAgICAgICBjb25zdCB0MCA9IERhdGUubm93KCk7XHJcblxyXG4gICAgICAgIGlmICh0MCA+PSBuZXh0VGltZSkge1xyXG4gICAgICAgICAgdGljayh0MCk7XHJcbiAgICAgICAgICBjb25zdCB0MSA9IERhdGUubm93KCk7XHJcblxyXG4gICAgICAgICAgaWYgKHQxIC0gdDAgPCBpbnRlcnZhbCkge1xyXG4gICAgICAgICAgICBuZXh0VGltZSA9IHQwICsgaW50ZXJ2YWw7XHJcbiAgICAgICAgICAgIHNjaGVkdWxlKE1hdGguZmxvb3IoKG5leHRUaW1lIC0gdDEpICogMC44NSkpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV4dFRpbWUgPSB0MTtcclxuICAgICAgICAgICAgc2NoZWR1bGUoMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNjaGVkdWxlKDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgc2NoZWR1bGUgPSB0ID0+IHZvaWQgc2V0VGltZW91dCh0aWNrSWZOZWNlc3NhcnksIHQpO1xyXG5cclxuICAgICAgc2NoZWR1bGUoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0aWNrKGN1cnJlbnRUaW1lKSB7XHJcbiAgICArK3RpY2tDb3VudDtcclxuICAgIHRpY2tUaW1lID0gY3VycmVudFRpbWU7XHJcbiAgICBjdXJyZW50UnVudGltZSA9IHJ1bnRpbWU7XHJcbiAgICBncm91cFNldC51cGRhdGUoKTtcclxuICAgIGN1cnJlbnRSdW50aW1lID0gbnVsbDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1hbnVhbFRpY2soY3VycmVudFRpbWUpIHtcclxuICAgIGlmIChhdXRvVGlja0VuYWJsZWQgPT09IHRydWUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdydW5uaW5nIGluIGF1dG8tdGljayBtb2RlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgKyt0aWNrQ291bnQ7XHJcbiAgICB0aWNrVGltZSA9IGN1cnJlbnRUaW1lO1xyXG4gICAgY29uc3Qgb2xkUnVudGltZSA9IGN1cnJlbnRSdW50aW1lO1xyXG4gICAgY3VycmVudFJ1bnRpbWUgPSBydW50aW1lO1xyXG4gICAgZ3JvdXBTZXQudXBkYXRlKCk7XHJcbiAgICBjdXJyZW50UnVudGltZSA9IG9sZFJ1bnRpbWU7XHJcbiAgfVxyXG5cclxuICBjb25zdCB0b1B1YmxpYyA9ICgoKSA9PiB7XHJcbiAgICBjb25zdCBwdWJsaWNSdW50aW1lID0ge1xyXG4gICAgICBnZXQgbWFpbkdyb3VwKCkge1xyXG4gICAgICAgIHJldHVybiBtYWluR3JvdXAudG9QdWJsaWMoKTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIGdldCBjdXJyZW50VGlja0NvdW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aWNrQ291bnQ7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBnZXQgbGFzdFRpY2tUaW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aWNrVGltZTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIGVuYWJsZUF1dG9UaWNrLFxyXG4gICAgICBwZXJmb3JtVGljazogbWFudWFsVGlja1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoKSA9PiBwdWJsaWNSdW50aW1lO1xyXG4gIH0pKCk7XHJcblxyXG4gIGNvbnN0IGdyb3VwU2V0ID0gQ29yb3V0aW5lR3JvdXBTZXQoe1xyXG4gICAgZ2V0IGN1cnJlbnRUaWNrQ291bnQoKSB7XHJcbiAgICAgIHJldHVybiB0aWNrQ291bnQ7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldCBsYXN0VGlja1RpbWUoKSB7XHJcbiAgICAgIHJldHVybiB0aWNrVGltZTtcclxuICAgIH1cclxuXHJcbiAgfSk7XHJcbiAgY29uc3QgbWFpbkdyb3VwID0gQ29yb3V0aW5lR3JvdXAoZ3JvdXBTZXQsICdtYWluJywge1xyXG4gICAgcHJpb3JpdHk6IENvcm91dGluZUdyb3VwUHJpb3JpdHkuTm9ybWFsXHJcbiAgfSk7XHJcbiAgY29uc3QgcnVudGltZSA9IHtcclxuICAgIGdldCBncm91cFNldCgpIHtcclxuICAgICAgcmV0dXJuIGdyb3VwU2V0O1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXQgbWFpbkdyb3VwKCkge1xyXG4gICAgICByZXR1cm4gbWFpbkdyb3VwO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXQgY3VycmVudFRpY2tDb3VudCgpIHtcclxuICAgICAgcmV0dXJuIHRpY2tDb3VudDtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0IGxhc3RUaWNrVGltZSgpIHtcclxuICAgICAgcmV0dXJuIHRpY2tUaW1lO1xyXG4gICAgfSxcclxuXHJcbiAgICB0b1B1YmxpY1xyXG4gIH07XHJcblxyXG4gIGlmICh0aWNrUmF0ZSA+IDApIHtcclxuICAgIGVuYWJsZUF1dG9UaWNrKHRpY2tSYXRlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBydW50aW1lO1xyXG59XHJcbmxldCBjdXJyZW50UnVudGltZSA9IG51bGw7XHJcbmZ1bmN0aW9uIGdldEN1cnJlbnRSdW50aW1lKCkge1xyXG4gIHJldHVybiBjdXJyZW50UnVudGltZTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXNBc3luYyhmbikge1xyXG4gIHJldHVybiAvKiNfX1BVUkVfXyovcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZSguLi5hcmdzKSB7XHJcbiAgICB2YXIgc2VsZiwgY2IsIGRvbmUsIGV4Y2VwdGlvbiwgcmVzdWx0LCBpLCB2YWx1ZTtcclxuICAgIHJldHVybiByZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xyXG4gICAgICB3aGlsZSAoMSkgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgZG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgYXJncyA9IGFyZ3Muc2xpY2UoMCk7IC8vIGZvciAobGV0IGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgIGkgPSBhcmdzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICB2YWx1ZSA9IGFyZ3NbaV07XHJcblxyXG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBjYiA9IHZhbHVlO1xyXG5cclxuICAgICAgICAgICAgYXJnc1tpXSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXhlY1Jlc3VsdCA9IGNiLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlVHlwZXNfY2MuaXNPYmplY3QoZXhlY1Jlc3VsdCkpIHtcclxuICAgICAgICAgICAgICAgICAgZXhjZXB0aW9uID0gZXhlY1Jlc3VsdC5leGNlcHRpb247XHJcbiAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGV4ZWNSZXN1bHQucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZXhlY1Jlc3VsdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBleGNlcHRpb24gPSBlO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgZG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH07IC8vIGJyZWFrO1xyXG5cclxuICAgICAgICAgIH0gLy8gfVxyXG5cclxuXHJcbiAgICAgICAgICBpZiAoIWNiKSB7XHJcbiAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxNztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZm4uYXBwbHkoc2VsZiwgYXJncyk7XHJcblxyXG4gICAgICAgIGNhc2UgODpcclxuICAgICAgICAgIGlmIChkb25lKSB7XHJcbiAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxMztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgX2NvbnRleHQubmV4dCA9IDExO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBjYXNlIDExOlxyXG4gICAgICAgICAgX2NvbnRleHQubmV4dCA9IDg7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAxMzpcclxuICAgICAgICAgIGlmICghZXhjZXB0aW9uKSB7XHJcbiAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxNTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xyXG5cclxuICAgICAgICBjYXNlIDE1OlxyXG4gICAgICAgICAgX2NvbnRleHQubmV4dCA9IDE4O1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgMTc6XHJcbiAgICAgICAgICByZXN1bHQgPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcclxuXHJcbiAgICAgICAgY2FzZSAxODpcclxuICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgcmVzdWx0KTtcclxuXHJcbiAgICAgICAgY2FzZSAxOTpcclxuICAgICAgICBjYXNlIFwiZW5kXCI6XHJcbiAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xyXG4gICAgICB9XHJcbiAgICB9LCBfY2FsbGVlLCB0aGlzKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRTdG9wd2F0Y2goKSB7XHJcbiAgY29uc3QgcnVudGltZSA9IGdldEN1cnJlbnRSdW50aW1lKCk7XHJcblxyXG4gIGlmICghcnVudGltZSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiJ3N0YXJ0U3RvcHdhdGNoJyBtdXN0IGJlIHJ1biBpbiBjb3JvdXRpbmVcIik7XHJcbiAgfVxyXG5cclxuICBsZXQgdGltZTAsIHRpY2swO1xyXG4gIGNvbnN0IHN0b3B3YXRjaCA9IHtcclxuICAgIGdldCBlbGFwc2VkU2Vjb25kcygpIHtcclxuICAgICAgcmV0dXJuIChydW50aW1lLmxhc3RUaWNrVGltZSAtIHRpbWUwKSAvIDEwMDA7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldCBlbGFwc2VkTWlsbGlzZWNvbmRzKCkge1xyXG4gICAgICByZXR1cm4gcnVudGltZS5sYXN0VGlja1RpbWUgLSB0aW1lMDtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0IGVsYXBzZWRUaWNrcygpIHtcclxuICAgICAgcmV0dXJuIHJ1bnRpbWUuY3VycmVudFRpY2tDb3VudCAtIHRpY2swO1xyXG4gICAgfSxcclxuXHJcbiAgICByZXN0YXJ0KCkge1xyXG4gICAgICB0aW1lMCA9IHJ1bnRpbWUubGFzdFRpY2tUaW1lO1xyXG4gICAgICB0aWNrMCA9IHJ1bnRpbWUuY3VycmVudFRpY2tDb3VudDtcclxuICAgIH1cclxuXHJcbiAgfTtcclxuICBzdG9wd2F0Y2gucmVzdGFydCgpO1xyXG4gIHJldHVybiBzdG9wd2F0Y2g7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0KGdyb3VwLCBnZW5Gbikge1xyXG4gIHJldHVybiBpc0Nvcm91dGluZShnZW5GbikgPyBnZW5GbiA6IGdyb3VwLnN0YXJ0KGdlbkZuKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RvcEFsbChjb3JvdXRpbmVzKSB7XHJcbiAgaWYgKGNvcm91dGluZXMuc2l6ZSA+IDApIHtcclxuICAgIGNvcm91dGluZXMuZm9yRWFjaChjb3JvdXRpbmUgPT4gdm9pZCBjb3JvdXRpbmUuc3RvcCgpKTsgLy8gY29yb3V0aW5lcy5jbGVhcigpO1xyXG4gIH1cclxufSAvLyBzdGFydEFsbChhLCBiLCBjLCBkKTtcclxuLy8gc3RhcnRBbGwoW2EsIGIsIGMsIGRdKTtcclxuLy8gc3RhcnRBbGwoeyAwOiBhLCAxOiBiLCAyOiBjLCAzOiBkIH0pO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0QWxsKGNhbGxlciwgZ2VuRm5zKSB7XHJcbiAgY29uc3QgY3VycmVudEdyb3VwID0gZ2V0Q3VycmVudENvcm91dGluZSgpPy5ncm91cDtcclxuXHJcbiAgaWYgKCFjdXJyZW50R3JvdXApIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgJyR7Y2FsbGVyfScgbXVzdCBiZSBydW4gaW4gY29yb3V0aW5lYCk7XHJcbiAgfSAvLyBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcclxuICAvLyAgIGdlbkZucyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XHJcbiAgLy8gfVxyXG5cclxuXHJcbiAgY29uc3QgY29yb3V0aW5lcyA9IG5ldyBNYXAoKTtcclxuXHJcbiAgaWYgKHZhbHVlVHlwZXNfY2MuaXNBcnJheShnZW5GbnMpKSB7XHJcbiAgICBnZW5GbnMuZm9yRWFjaCgoZ2VuRm4sIGdlbkZuSW5kZXgpID0+IHZvaWQgY29yb3V0aW5lcy5zZXQoZ2VuRm5JbmRleCwgc3RhcnQoY3VycmVudEdyb3VwLCBnZW5GbikpKTtcclxuICB9IGVsc2UgaWYgKHZhbHVlVHlwZXNfY2MuaXNPYmplY3QoZ2VuRm5zKSkge1xyXG4gICAgT2JqZWN0LmtleXMoZ2VuRm5zKS5mb3JFYWNoKGdlbkZuTmFtZSA9PiB2b2lkIGNvcm91dGluZXMuc2V0KGdlbkZuTmFtZSwgc3RhcnQoY3VycmVudEdyb3VwLCBnZW5GbnNbZ2VuRm5OYW1lXSkpKTtcclxuICB9XHJcblxyXG4gIGNvcm91dGluZXMuc3RvcEFsbCA9ICgpID0+IHZvaWQgc3RvcEFsbChjb3JvdXRpbmVzKTtcclxuXHJcbiAgcmV0dXJuIGNvcm91dGluZXM7XHJcbn1cclxuXHJcbnZhciBfbWFya2VkJDcgPSAvKiNfX1BVUkVfXyovcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsod2FpdEZvckFsbCk7XHJcbmZ1bmN0aW9uIHdhaXRGb3JBbGwoZ2VuRm5zKSB7XHJcbiAgdmFyIHJlc3VsdCwgY29yb3V0aW5lcztcclxuICByZXR1cm4gcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gd2FpdEZvckFsbCQoX2NvbnRleHQpIHtcclxuICAgIHdoaWxlICgxKSBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XHJcbiAgICAgIGNhc2UgMDpcclxuICAgICAgICByZXN1bHQgPSB7fTtcclxuICAgICAgICBjb3JvdXRpbmVzID0gc3RhcnRBbGwoJ3dhaXRGb3JBbGwnLCBnZW5GbnMpO1xyXG5cclxuICAgICAgICBpZiAoIShjb3JvdXRpbmVzLnNpemUgPiAwKSkge1xyXG4gICAgICAgICAgX2NvbnRleHQubmV4dCA9IDE4O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfY29udGV4dC5wcmV2ID0gMztcclxuXHJcbiAgICAgIGNhc2UgNDpcclxuXHJcbiAgICAgICAgY29yb3V0aW5lcy5mb3JFYWNoKChjb3JvdXRpbmUsIG5hbWUpID0+IHtcclxuICAgICAgICAgIGlmIChjb3JvdXRpbmUuaXNEb25lKCkpIHtcclxuICAgICAgICAgICAgcmVzdWx0W25hbWVdID0ge1xyXG4gICAgICAgICAgICAgIGV4Y2VwdGlvbjogY29yb3V0aW5lLmV4Y2VwdGlvbixcclxuICAgICAgICAgICAgICByZXN1bHQ6IGNvcm91dGluZS5yZXN1bHRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29yb3V0aW5lcy5kZWxldGUobmFtZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghKGNvcm91dGluZXMuc2l6ZSA9PT0gMCkpIHtcclxuICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA4O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KFwiYnJlYWtcIiwgMTIpO1xyXG5cclxuICAgICAgY2FzZSA4OlxyXG4gICAgICAgIF9jb250ZXh0Lm5leHQgPSAxMDtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICBjYXNlIDEwOlxyXG4gICAgICAgIF9jb250ZXh0Lm5leHQgPSA0O1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAxMjpcclxuICAgICAgICBfY29udGV4dC5uZXh0ID0gMTg7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIDE0OlxyXG4gICAgICAgIF9jb250ZXh0LnByZXYgPSAxNDtcclxuICAgICAgICBfY29udGV4dC50MCA9IF9jb250ZXh0W1wiY2F0Y2hcIl0oMyk7XHJcbiAgICAgICAgY29yb3V0aW5lcy5zdG9wQWxsKCk7XHJcbiAgICAgICAgdGhyb3cgX2NvbnRleHQudDA7XHJcblxyXG4gICAgICBjYXNlIDE4OlxyXG4gICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgcmVzdWx0KTtcclxuXHJcbiAgICAgIGNhc2UgMTk6XHJcbiAgICAgIGNhc2UgXCJlbmRcIjpcclxuICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xyXG4gICAgfVxyXG4gIH0sIF9tYXJrZWQkNywgbnVsbCwgW1szLCAxNF1dKTtcclxufVxyXG5cclxudmFyIF9tYXJrZWQkNiA9IC8qI19fUFVSRV9fKi9yZWdlbmVyYXRvclJ1bnRpbWUubWFyayh3YWl0Rm9yQW55KTtcclxuZnVuY3Rpb24gd2FpdEZvckFueShnZW5GbnMpIHtcclxuICB2YXIgcmVzdWx0LCBjb3JvdXRpbmVzLCBhbnk7XHJcbiAgcmV0dXJuIHJlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIHdhaXRGb3JBbnkkKF9jb250ZXh0KSB7XHJcbiAgICB3aGlsZSAoMSkgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xyXG4gICAgICBjYXNlIDA6XHJcbiAgICAgICAgcmVzdWx0ID0ge307XHJcbiAgICAgICAgY29yb3V0aW5lcyA9IHN0YXJ0QWxsKCd3YWl0Rm9yQW55JywgZ2VuRm5zKTtcclxuXHJcbiAgICAgICAgaWYgKCEoY29yb3V0aW5lcy5zaXplID4gMCkpIHtcclxuICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAyMDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgX2NvbnRleHQucHJldiA9IDM7XHJcblxyXG4gICAgICBjYXNlIDQ6XHJcblxyXG4gICAgICAgIGFueSA9IGZhbHNlO1xyXG4gICAgICAgIGNvcm91dGluZXMuZm9yRWFjaCgoY29yb3V0aW5lLCBuYW1lKSA9PiB7XHJcbiAgICAgICAgICBpZiAoY29yb3V0aW5lLmlzRG9uZSgpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFtuYW1lXSA9IHtcclxuICAgICAgICAgICAgICBleGNlcHRpb246IGNvcm91dGluZS5leGNlcHRpb24sXHJcbiAgICAgICAgICAgICAgcmVzdWx0OiBjb3JvdXRpbmUucmVzdWx0XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvcm91dGluZXMuZGVsZXRlKG5hbWUpO1xyXG4gICAgICAgICAgICBhbnkgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoIWFueSkge1xyXG4gICAgICAgICAgX2NvbnRleHQubmV4dCA9IDEwO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb3JvdXRpbmVzLnN0b3BBbGwoKTtcclxuICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KFwiYnJlYWtcIiwgMTQpO1xyXG5cclxuICAgICAgY2FzZSAxMDpcclxuICAgICAgICBfY29udGV4dC5uZXh0ID0gMTI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgY2FzZSAxMjpcclxuICAgICAgICBfY29udGV4dC5uZXh0ID0gNDtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgMTQ6XHJcbiAgICAgICAgX2NvbnRleHQubmV4dCA9IDIwO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAxNjpcclxuICAgICAgICBfY29udGV4dC5wcmV2ID0gMTY7XHJcbiAgICAgICAgX2NvbnRleHQudDAgPSBfY29udGV4dFtcImNhdGNoXCJdKDMpO1xyXG4gICAgICAgIGNvcm91dGluZXMuc3RvcEFsbCgpO1xyXG4gICAgICAgIHRocm93IF9jb250ZXh0LnQwO1xyXG5cclxuICAgICAgY2FzZSAyMDpcclxuICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIHJlc3VsdCk7XHJcblxyXG4gICAgICBjYXNlIDIxOlxyXG4gICAgICBjYXNlIFwiZW5kXCI6XHJcbiAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcclxuICAgIH1cclxuICB9LCBfbWFya2VkJDYsIG51bGwsIFtbMywgMTZdXSk7XHJcbn1cclxuXHJcbnZhciBfbWFya2VkJDUgPSAvKiNfX1BVUkVfXyovcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsod2FpdEZvclRpbWUpO1xyXG5cclxuZnVuY3Rpb24gd2FpdEZvclRpbWUocnVudGltZSwgdGltZSkge1xyXG4gIHZhciB0aW1lMCwgZWxhcHNlZFRpbWU7XHJcbiAgcmV0dXJuIHJlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIHdhaXRGb3JUaW1lJChfY29udGV4dCkge1xyXG4gICAgd2hpbGUgKDEpIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcclxuICAgICAgY2FzZSAwOlxyXG4gICAgICAgIGlmICghKHRpbWUgPiAwKSkge1xyXG4gICAgICAgICAgX2NvbnRleHQubmV4dCA9IDEwO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aW1lMCA9IHJ1bnRpbWUubGFzdFRpY2tUaW1lO1xyXG5cclxuICAgICAgY2FzZSAyOlxyXG5cclxuICAgICAgICBlbGFwc2VkVGltZSA9IHJ1bnRpbWUubGFzdFRpY2tUaW1lIC0gdGltZTA7XHJcblxyXG4gICAgICAgIGlmICghKGVsYXBzZWRUaW1lID49IHRpbWUpKSB7XHJcbiAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdChcImJyZWFrXCIsIDEwKTtcclxuXHJcbiAgICAgIGNhc2UgNjpcclxuICAgICAgICBfY29udGV4dC5uZXh0ID0gODtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICBjYXNlIDg6XHJcbiAgICAgICAgX2NvbnRleHQubmV4dCA9IDI7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIDEwOlxyXG4gICAgICBjYXNlIFwiZW5kXCI6XHJcbiAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcclxuICAgIH1cclxuICB9LCBfbWFya2VkJDUpO1xyXG59XHJcblxyXG52YXIgX21hcmtlZCQ0ID0gLyojX19QVVJFX18qL3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKHdhaXRGb3JNaWxsaXNlY29uZHMpO1xyXG5mdW5jdGlvbiB3YWl0Rm9yTWlsbGlzZWNvbmRzKG1pbGxpc2Vjb25kcykge1xyXG4gIHZhciBydW50aW1lO1xyXG4gIHJldHVybiByZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiB3YWl0Rm9yTWlsbGlzZWNvbmRzJChfY29udGV4dCkge1xyXG4gICAgd2hpbGUgKDEpIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcclxuICAgICAgY2FzZSAwOlxyXG4gICAgICAgIHJ1bnRpbWUgPSBnZXRDdXJyZW50UnVudGltZSgpO1xyXG5cclxuICAgICAgICBpZiAocnVudGltZSkge1xyXG4gICAgICAgICAgX2NvbnRleHQubmV4dCA9IDM7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIid3YWl0Rm9yTWlsbGlzZWNvbmRzJyBtdXN0IGJlIHJ1biBpbiBjb3JvdXRpbmVcIik7XHJcblxyXG4gICAgICBjYXNlIDM6XHJcbiAgICAgICAgX2NvbnRleHQubmV4dCA9IDU7XHJcbiAgICAgICAgcmV0dXJuIHdhaXRGb3JUaW1lKHJ1bnRpbWUsIE1hdGgubWF4KG1pbGxpc2Vjb25kcywgMCkpO1xyXG5cclxuICAgICAgY2FzZSA1OlxyXG4gICAgICBjYXNlIFwiZW5kXCI6XHJcbiAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcclxuICAgIH1cclxuICB9LCBfbWFya2VkJDQpO1xyXG59XHJcblxyXG52YXIgX21hcmtlZCQzID0gLyojX19QVVJFX18qL3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKHdhaXRGb3JTZWNvbmRzKTtcclxuZnVuY3Rpb24gd2FpdEZvclNlY29uZHMoc2Vjb25kcykge1xyXG4gIHZhciBydW50aW1lO1xyXG4gIHJldHVybiByZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiB3YWl0Rm9yU2Vjb25kcyQoX2NvbnRleHQpIHtcclxuICAgIHdoaWxlICgxKSBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XHJcbiAgICAgIGNhc2UgMDpcclxuICAgICAgICBydW50aW1lID0gZ2V0Q3VycmVudFJ1bnRpbWUoKTtcclxuXHJcbiAgICAgICAgaWYgKHJ1bnRpbWUpIHtcclxuICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAzO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCInd2FpdEZvclNlY29uZHMnIG11c3QgYmUgcnVuIGluIGNvcm91dGluZVwiKTtcclxuXHJcbiAgICAgIGNhc2UgMzpcclxuICAgICAgICBfY29udGV4dC5uZXh0ID0gNTtcclxuICAgICAgICByZXR1cm4gd2FpdEZvclRpbWUocnVudGltZSwgTWF0aC5tYXgoc2Vjb25kcyAqIDEwMDAsIDApKTtcclxuXHJcbiAgICAgIGNhc2UgNTpcclxuICAgICAgY2FzZSBcImVuZFwiOlxyXG4gICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XHJcbiAgICB9XHJcbiAgfSwgX21hcmtlZCQzKTtcclxufVxyXG5cclxudmFyIF9tYXJrZWQkMiA9IC8qI19fUFVSRV9fKi9yZWdlbmVyYXRvclJ1bnRpbWUubWFyayh3YWl0Rm9yVGlja3MpO1xyXG5cclxuZnVuY3Rpb24gd2FpdEZvclRpY2tzKHRpY2tzKSB7XHJcbiAgdmFyIG1heFRpY2tzLCB0aWNrQ250O1xyXG4gIHJldHVybiByZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiB3YWl0Rm9yVGlja3MkKF9jb250ZXh0KSB7XHJcbiAgICB3aGlsZSAoMSkgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xyXG4gICAgICBjYXNlIDA6XHJcbiAgICAgICAgbWF4VGlja3MgPSBNYXRoLm1heCh0aWNrcywgMCk7XHJcblxyXG4gICAgICAgIGlmICghKG1heFRpY2tzID4gMCkpIHtcclxuICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxMDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGlja0NudCA9IDA7XHJcblxyXG4gICAgICBjYXNlIDM6XHJcblxyXG4gICAgICAgIGlmICghKCsrdGlja0NudCA+IG1heFRpY2tzKSkge1xyXG4gICAgICAgICAgX2NvbnRleHQubmV4dCA9IDY7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJicmVha1wiLCAxMCk7XHJcblxyXG4gICAgICBjYXNlIDY6XHJcbiAgICAgICAgX2NvbnRleHQubmV4dCA9IDg7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgY2FzZSA4OlxyXG4gICAgICAgIF9jb250ZXh0Lm5leHQgPSAzO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAxMDpcclxuICAgICAgY2FzZSBcImVuZFwiOlxyXG4gICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XHJcbiAgICB9XHJcbiAgfSwgX21hcmtlZCQyKTtcclxufVxyXG5cclxudmFyIF9tYXJrZWQkMSA9IC8qI19fUFVSRV9fKi9yZWdlbmVyYXRvclJ1bnRpbWUubWFyayh3YWl0VW50aWwpO1xyXG5cclxuLy8gYWN0aW9uOiB3YWl0IHVudGlsIGFjdGlvbiByZXR1cm5zIHRydWVcclxuZnVuY3Rpb24gd2FpdFVudGlsKGFjdGlvbikge1xyXG4gIHJldHVybiByZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiB3YWl0VW50aWwkKF9jb250ZXh0KSB7XHJcbiAgICB3aGlsZSAoMSkgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xyXG4gICAgICBjYXNlIDA6XHJcbiAgICAgICAgaWYgKCEoYWN0aW9uKCkgIT09IHRydWUpKSB7XHJcbiAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgX2NvbnRleHQubmV4dCA9IDM7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgY2FzZSAzOlxyXG4gICAgICAgIF9jb250ZXh0Lm5leHQgPSAwO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSA1OlxyXG4gICAgICBjYXNlIFwiZW5kXCI6XHJcbiAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcclxuICAgIH1cclxuICB9LCBfbWFya2VkJDEpO1xyXG59XHJcblxyXG52YXIgX21hcmtlZCA9IC8qI19fUFVSRV9fKi9yZWdlbmVyYXRvclJ1bnRpbWUubWFyayh3YWl0V2hpbGUpO1xyXG5cclxuLy8gYWN0aW9uOiB3YWl0IHVudGlsIGFjdGlvbiByZXR1cm5zIGZhbHNlXHJcbmZ1bmN0aW9uIHdhaXRXaGlsZShhY3Rpb24pIHtcclxuICByZXR1cm4gcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gd2FpdFdoaWxlJChfY29udGV4dCkge1xyXG4gICAgd2hpbGUgKDEpIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcclxuICAgICAgY2FzZSAwOlxyXG4gICAgICAgIGlmICghKGFjdGlvbigpID09PSB0cnVlKSkge1xyXG4gICAgICAgICAgX2NvbnRleHQubmV4dCA9IDU7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF9jb250ZXh0Lm5leHQgPSAzO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgIGNhc2UgMzpcclxuICAgICAgICBfY29udGV4dC5uZXh0ID0gMDtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgNTpcclxuICAgICAgY2FzZSBcImVuZFwiOlxyXG4gICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XHJcbiAgICB9XHJcbiAgfSwgX21hcmtlZCk7XHJcbn1cclxuXHJcbnZhciB1dGlscyA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcclxuICBfX3Byb3RvX186IG51bGwsXHJcbiAgYXNBc3luYzogYXNBc3luYyxcclxuICBzdGFydFN0b3B3YXRjaDogc3RhcnRTdG9wd2F0Y2gsXHJcbiAgd2FpdEZvckFsbDogd2FpdEZvckFsbCxcclxuICB3YWl0Rm9yQW55OiB3YWl0Rm9yQW55LFxyXG4gIHdhaXRGb3JNaWxsaXNlY29uZHM6IHdhaXRGb3JNaWxsaXNlY29uZHMsXHJcbiAgd2FpdEZvclNlY29uZHM6IHdhaXRGb3JTZWNvbmRzLFxyXG4gIHdhaXRGb3JUaWNrczogd2FpdEZvclRpY2tzLFxyXG4gIHdhaXRVbnRpbDogd2FpdFVudGlsLFxyXG4gIHdhaXRXaGlsZTogd2FpdFdoaWxlXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gaXNHZW5lcmF0b3IodmFsdWUpIHtcclxuICByZXR1cm4gZ2V0VHlwZSh2YWx1ZSkgPT09IEdlbmVyYXRvclR5cGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzR2VuZXJhdG9yRnVuY3Rpb24odmFsdWUpIHtcclxuICByZXR1cm4gZ2V0VHlwZSh2YWx1ZSkgPT09IEdlbmVyYXRvckZ1bmN0aW9uVHlwZTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNBc3luY0Z1bmN0aW9uKHZhbHVlKSB7XHJcbiAgcmV0dXJuIGdldFR5cGUodmFsdWUpID09PSBBc3luY0Z1bmN0aW9uVHlwZTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNQcm9taXNlKHZhbHVlKSB7XHJcbiAgcmV0dXJuIGdldFR5cGUodmFsdWUpID09PSBQcm9taXNlVHlwZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZXhwb3J0UnVudGltZShydW50aW1lKSB7XHJcbiAgY29uc3QgZ3JvdXBTZXQgPSBydW50aW1lLmdyb3VwU2V0O1xyXG4gIGNvbnN0IG1haW5Hcm91cCA9IHJ1bnRpbWUubWFpbkdyb3VwO1xyXG5cclxuICBmdW5jdGlvbiBzdGFydENvcm91dGluZShnZW5Gbikge1xyXG4gICAgcmV0dXJuIG1haW5Hcm91cC5zdGFydChnZW5GbikudG9QdWJsaWMoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFkZFByb3BlcnR5KG9iaiwgbmFtZSwgZ2V0dGVyKSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBuYW1lLCB7XHJcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgZ2V0OiBnZXR0ZXJcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcHVibGljUnVudGltZSA9IHJ1bnRpbWUudG9QdWJsaWMoKTtcclxuICBhZGRQcm9wZXJ0eShwdWJsaWNSdW50aW1lLCAnY3VycmVudCcsICgpID0+IGdldEN1cnJlbnRDb3JvdXRpbmUoKT8udG9QdWJsaWMoKSk7XHJcbiAgYWRkUHJvcGVydHkocHVibGljUnVudGltZSwgJ2N1cnJlbnRSdW50aW1lJywgKCkgPT4gZ2V0Q3VycmVudFJ1bnRpbWUoKT8udG9QdWJsaWMoKSk7XHJcbiAgYWRkUHJvcGVydHkocHVibGljUnVudGltZSwgJ0Nvcm91dGluZVN0b3AnLCAoKSA9PiBDb3JvdXRpbmVTdG9wKTtcclxuICBwdWJsaWNSdW50aW1lLnN0YXJ0ID0gc3RhcnRDb3JvdXRpbmU7XHJcbiAgcHVibGljUnVudGltZS5pc0Nvcm91dGluZSA9IGlzQ29yb3V0aW5lO1xyXG4gIHB1YmxpY1J1bnRpbWUuaXNDb3JvdXRpbmVHcm91cCA9IGlzQ29yb3V0aW5lR3JvdXA7XHJcbiAgcHVibGljUnVudGltZS5pc0dlbmVyYXRvciA9IGlzR2VuZXJhdG9yO1xyXG4gIHB1YmxpY1J1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGlzR2VuZXJhdG9yRnVuY3Rpb247XHJcbiAgcHVibGljUnVudGltZS5pc0FzeW5jRnVuY3Rpb24gPSBpc0FzeW5jRnVuY3Rpb247XHJcbiAgcHVibGljUnVudGltZS5pc1Byb21pc2UgPSBpc1Byb21pc2U7IC8vIGlzR2VuZXJhdG9yL2lzR2VuZXJhdG9yRnVuY3Rpb24vaXNBc3luY0Z1bmN0aW9uL2lzUHJvbWlzZVxyXG4gIC8vIHlpZWxkICsgW0dlbmVyYXRvci9HZW5lcmF0b3JGdW5jdGlvbi9Bc3luY0Z1bmN0aW9uL1Byb21pc2VdXHJcblxyXG4gIHB1YmxpY1J1bnRpbWUuaXNTdXBwb3J0ZWRBc3luYyA9IGlzU3VwcG9ydGVkQXN5bmM7XHJcbiAgcHVibGljUnVudGltZS5wcm9taXNlVG9HZW5lcmF0b3IgPSBwcm9taXNlVG9HZW5lcmF0b3I7XHJcblxyXG4gIHB1YmxpY1J1bnRpbWUuUnVudGltZSA9IHRpY2tSYXRlID0+IGV4cG9ydFJ1bnRpbWUoUnVudGltZSh0aWNrUmF0ZSkpO1xyXG5cclxuICBwdWJsaWNSdW50aW1lLkNvcm91dGluZUdyb3VwID0gKG5hbWUsIG9wdGlvbnMpID0+IENvcm91dGluZUdyb3VwKGdyb3VwU2V0LCBuYW1lLCBvcHRpb25zKS50b1B1YmxpYygpO1xyXG5cclxuICBwdWJsaWNSdW50aW1lLkNvcm91dGluZUdyb3VwLmdldEdyb3VwQnlOYW1lID0gbmFtZSA9PiBncm91cFNldC5nZXRCeU5hbWUobmFtZSk/LnRvUHVibGljKCk7XHJcblxyXG4gIHB1YmxpY1J1bnRpbWUuQ29yb3V0aW5lR3JvdXAuaGFzR3JvdXAgPSBncm91cFNldC5oYXM7XHJcbiAgcHVibGljUnVudGltZS5Db3JvdXRpbmVHcm91cC5oYXNHcm91cEJ5TmFtZSA9IGdyb3VwU2V0Lmhhc0J5TmFtZTtcclxuICBSZWZsZWN0Lm93bktleXMoQ29yb3V0aW5lR3JvdXBQcmlvcml0eSkuZm9yRWFjaChwcmlvcml0eU5hbWUgPT4gdm9pZCBhZGRQcm9wZXJ0eShwdWJsaWNSdW50aW1lLkNvcm91dGluZUdyb3VwLCBgJHtwcmlvcml0eU5hbWV9UHJpb3JpdHlgLCAoKSA9PiBDb3JvdXRpbmVHcm91cFByaW9yaXR5W3ByaW9yaXR5TmFtZV0pKTtcclxuICBSZWZsZWN0Lm93bktleXModXRpbHMpLmZvckVhY2goZm5OYW1lID0+IHZvaWQgKHB1YmxpY1J1bnRpbWVbZm5OYW1lXSA9IHV0aWxzW2ZuTmFtZV0pKTtcclxuICByZXR1cm4gcHVibGljUnVudGltZTtcclxufVxyXG5cclxudmFyIGluZGV4ID0gZXhwb3J0UnVudGltZShSdW50aW1lKCkpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbmRleDtcclxuIl19