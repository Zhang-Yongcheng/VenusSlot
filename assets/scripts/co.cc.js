// @ts-nocheck
'use strict';

var valueTypes_cc = require('./value-types.cc');

const AsyncFunctionType = '[object AsyncFunction]';
const GeneratorFunctionType = '[object GeneratorFunction]';
const GeneratorType = '[object Generator]';
const PromiseType = '[object Promise]';
const objectToString = Object.prototype.toString;
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

const coroutines = new WeakSet();
const RUNNING = 0;
const SUSPENDED = 1;
const STOPPING = 2;
const DONE = 3;
function Coroutine(group, executor) {
  // const runtime = group.groupSet.runtime;
  let status = RUNNING;
  let stopped = false;
  let finalResult, finalException;
  let lastException, lastExceptionLog; // const lastYield = {};

  const executorStack = new Array(24); // prealloc...

  let currentExecutorStackIndex = -1;

  const pushExecutor = executor => {
    // executor.tick0 = runtime.currentTickCount;
    executorStack[++currentExecutorStackIndex] = executor;
    return executor;
  };

  const popExecutor = () => {
    if (currentExecutorStackIndex >= 0) {
      --currentExecutorStackIndex;
      return getActiveExecutor();
    }
  };

  const getActiveExecutor = () => {
    if (currentExecutorStackIndex >= 0) {
      return executorStack[currentExecutorStackIndex];
    }
  }; // const setLastYield = ticks => {
  //   lastYield.ticks = ticks;
  // };


  const stop = (eType = CoroutineStop, ...args) => {
    resume();

    if (status === RUNNING) {
      status = STOPPING;

      if (currentCoroutine === coroutine) {
        throw new eType(...args);
      }

      lastException = new eType(...args);
    }
  };

  const isStopping = () => status === STOPPING;

  const isStopped = () => stopped;

  const suspend = () => {
    if (status === RUNNING) {
      status = SUSPENDED;
      group.onSuspend(coroutine);
    }
  };

  const isSuspended = () => status === SUSPENDED;

  const resume = () => {
    if (status === SUSPENDED) {
      status = RUNNING;
      group.onResume(coroutine);
    }
  };

  const isDone = () => status === DONE;

  const execute = () => {
    if (status !== RUNNING && status !== STOPPING) {
      return;
    }

    currentCoroutine = coroutine;
    let lastResult;

    try {
      let currentExecutor = getActiveExecutor();

      while (true) {
        if (currentExecutor === undefined) {
          if (status === STOPPING) {
            stopped = true; // lastException = undefined;
          }

          status = DONE;
          break;
        }

        const execResult = currentExecutor.run(lastException, lastResult);
        lastException = execResult.exception;

        if (lastException !== lastExceptionLog) {
          lastExceptionLog = lastException;

          if (lastExceptionLog !== undefined && !(lastExceptionLog instanceof CoroutineStop)) {
            console.error(`[co.Coroutine] runtime error: ${valueTypes_cc.errorToString(lastExceptionLog)}`);
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
      console.error(`[co.Coroutine] internal error: ${valueTypes_cc.errorToString(e)}`);
    }

    if (status === DONE) {
      let executor = getActiveExecutor();

      while (executor !== undefined) {
        executor.abort();
        executor = popExecutor();
      } // executorStack.splice(0);


      finalException = lastException;
      finalResult = lastResult;
    }

    currentCoroutine = null;
  };

  const toPublic = (() => {
    const publicCoroutine = {
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
      stop,
      isStopping,
      isStopped,
      suspend,
      isSuspended,
      resume,
      isDone
    };
    return () => publicCoroutine;
  })(); // setLastYield(0);


  pushExecutor(executor);
  const coroutine = {
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
    stop,
    isStopping,
    isStopped,
    suspend,
    isSuspended,
    resume,
    isDone,
    execute,
    toPublic
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
let currentCoroutine = null;
function getCurrentCoroutine() {
  return currentCoroutine;
}

const normal = 0;
const belowNormal = normal - 10000000;
const lowest = belowNormal - 10000000;
const aboveNormal = normal + 10000000;
const highest = aboveNormal + 10000000;
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

const PROMISE_PENDING = 0;
const PROMISE_FULFILLED = 1;
const PROMISE_REJECTED = 2;
function promiseToGenerator(promise) {
  let state = PROMISE_PENDING;
  let value;
  promise.then(val => {
    state = PROMISE_FULFILLED;
    value = val;
  }, err => {
    state = PROMISE_REJECTED;
    value = err;
  });
  return /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
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
      while (1) switch (_context3.prev = _context3.next) {
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
    }, _callee3);
  })();
}

const generatorExecutors = new WeakSet();
function GeneratorExecutor(gen) {
  const executor = {
    run(exception, result) {
      const execResult = {};
      let state;

      try {
        state = exception !== undefined ? gen.throw(exception) : gen.next(result);
      } catch (e) {
        execResult.exception = e;
        state = {
          done: true
        };
      }

      if (state.done) {
        execResult.result = state.value;
      } else {
        const value = state.value;

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

    abort() {
      try {
        gen.return();
      } catch {}
    }

  };
  generatorExecutors.add(executor);
  return executor;
}

const coroutineGroups = new WeakSet();
function CoroutineGroup(groupSet, name, options = {}) {
  var _options$priority;

  if (groupSet.hasByName(name)) {
    throw new Error(`coroutine group '${name}' exists`);
  }

  (_options$priority = options.priority) != null ? _options$priority : options.priority = CoroutineGroupPriority.Normal;
  const runtime = groupSet.runtime;
  let currentPriority;
  const runningCoroutines = [];
  const coroutinesData = new Map();

  const start = genFn => {
    const coroutine = Coroutine(coroutineGroup, GeneratorExecutor(genFn()));
    coroutinesData.set(coroutine, {
      tickWhile: runtime.currentTickCount
    });
    runningCoroutines.push(coroutine);
    return coroutine;
  };

  const stopAll = (eType = CoroutineStop) => {
    const currentCoroutine = getCurrentCoroutine();

    if (currentCoroutine?.group.name === name) {
      let error;
      runningCoroutines.forEach(coroutine => {
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
      runningCoroutines.forEach(coroutine => void coroutine.stop(eType));
    }
  };

  const update = () => {
    if (runningCoroutines.length === 0) {
      return;
    }

    const currentTick = runtime.currentTickCount;

    try {
      let idel = -1;
      let idelc;
      let i = 0;
      let imax = runningCoroutines.length;

      while (i < imax) {
        const coroutine = runningCoroutines[i];

        if (coroutinesData.get(coroutine).tickWhile < currentTick) {
          coroutine.execute();
        }

        if (coroutine.isDone()) {
          coroutinesData.delete(coroutine);

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
      console.error(`[co.CoroutineGroup] internal error: ${valueTypes_cc.errorToString(e)}`);
    }
  };

  const setPriority = priority => {
    if (currentPriority === undefined || currentPriority !== priority) {
      currentPriority = priority;
      groupSet.updatePriority(coroutineGroup, currentPriority);
    }
  };

  const onSuspend = coroutine => {};

  const onResume = coroutine => {
    coroutinesData.get(coroutine).tickWhile = runtime.currentTickCount;
  };

  const toPublic = (() => {
    const publicCoroutineGroup = {
      get name() {
        return name;
      },

      get size() {
        return runningCoroutines.length;
      },

      get priority() {
        return currentPriority;
      },

      start: genFn => start(genFn).toPublic(),
      stopAll
    };
    return () => publicCoroutineGroup;
  })();

  const coroutineGroup = {
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
    onSuspend,
    onResume,
    // methods
    start,
    stopAll,
    update,
    toPublic
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
  const groups = new Set();
  const nameToGroupMapping = new Map(); // let updatingGroups = false;

  const groupUpdateOrderList = [];
  let dirtyGroupUpdateOrder = 0;

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
      nameToGroupMapping.forEach(group => void groupUpdateOrderList.push(group));
    }

    groupUpdateOrderList.sort((a, b) => b.priority - a.priority);
  }

  function update() {
    if (dirtyGroupUpdateOrder !== 0) {
      const flags = dirtyGroupUpdateOrder;
      dirtyGroupUpdateOrder = 0;
      sortUpdateOrder(flags);
    } // updatingGroups = true;
    // try {


    groupUpdateOrderList.forEach(group => void group.update()); // } finally {
    //   updatingGroups = false;
    // }
  }

  return {
    get runtime() {
      return runtime;
    },

    add,
    has,
    hasByName,
    getByName,
    updatePriority,
    update
  };
}

function Runtime(tickRate = 0) {
  let autoTickEnabled = false;
  let tickCount = 0;
  let tickTime = 0;

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
    const interval = Math.floor(1000 / tickRate);
    let schedule;

    try {
      if (window && 'requestAnimationFrame' in window) {
        let t0 = 0;

        function tickIfNecessary(t1) {
          if (t1 - t0 >= interval) {
            tick(t1);
            t0 = t1;
          }

          schedule();
        }

        schedule = () => void requestAnimationFrame(tickIfNecessary);

        schedule();
      }
    } catch {}

    if (schedule === undefined) {
      let nextTime = 0;

      function tickIfNecessary() {
        const t0 = Date.now();

        if (t0 >= nextTime) {
          tick(t0);
          const t1 = Date.now();

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
      }

      schedule = t => void setTimeout(tickIfNecessary, t);

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
    const oldRuntime = currentRuntime;
    currentRuntime = runtime;
    groupSet.update();
    currentRuntime = oldRuntime;
  }

  const toPublic = (() => {
    const publicRuntime = {
      get mainGroup() {
        return mainGroup.toPublic();
      },

      get currentTickCount() {
        return tickCount;
      },

      get lastTickTime() {
        return tickTime;
      },

      enableAutoTick,
      performTick: manualTick
    };
    return () => publicRuntime;
  })();

  const groupSet = CoroutineGroupSet({
    get currentTickCount() {
      return tickCount;
    },

    get lastTickTime() {
      return tickTime;
    }

  });
  const mainGroup = CoroutineGroup(groupSet, 'main', {
    priority: CoroutineGroupPriority.Normal
  });
  const runtime = {
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

    toPublic
  };

  if (tickRate > 0) {
    enableAutoTick(tickRate);
  }

  return runtime;
}
let currentRuntime = null;
function getCurrentRuntime() {
  return currentRuntime;
}

function asAsync(fn) {
  return /*#__PURE__*/regeneratorRuntime.mark(function _callee(...args) {
    var self, cb, done, exception, result, i, value;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
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
                const execResult = cb.apply(null, arguments);

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
    }, _callee, this);
  });
}

function startStopwatch() {
  const runtime = getCurrentRuntime();

  if (!runtime) {
    throw new Error("'startStopwatch' must be run in coroutine");
  }

  let time0, tick0;
  const stopwatch = {
    get elapsedSeconds() {
      return (runtime.lastTickTime - time0) / 1000;
    },

    get elapsedMilliseconds() {
      return runtime.lastTickTime - time0;
    },

    get elapsedTicks() {
      return runtime.currentTickCount - tick0;
    },

    restart() {
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
    coroutines.forEach(coroutine => void coroutine.stop()); // coroutines.clear();
  }
} // startAll(a, b, c, d);
// startAll([a, b, c, d]);
// startAll({ 0: a, 1: b, 2: c, 3: d });


function startAll(caller, genFns) {
  const currentGroup = getCurrentCoroutine()?.group;

  if (!currentGroup) {
    throw new Error(`'${caller}' must be run in coroutine`);
  } // if (arguments.length > 1) {
  //   genFns = Array.prototype.slice.call(arguments);
  // }


  const coroutines = new Map();

  if (valueTypes_cc.isArray(genFns)) {
    genFns.forEach((genFn, genFnIndex) => void coroutines.set(genFnIndex, start(currentGroup, genFn)));
  } else if (valueTypes_cc.isObject(genFns)) {
    Object.keys(genFns).forEach(genFnName => void coroutines.set(genFnName, start(currentGroup, genFns[genFnName])));
  }

  coroutines.stopAll = () => void stopAll(coroutines);

  return coroutines;
}

var _marked$7 = /*#__PURE__*/regeneratorRuntime.mark(waitForAll);
function waitForAll(genFns) {
  var result, coroutines;
  return regeneratorRuntime.wrap(function waitForAll$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        result = {};
        coroutines = startAll('waitForAll', genFns);

        if (!(coroutines.size > 0)) {
          _context.next = 18;
          break;
        }

        _context.prev = 3;

      case 4:

        coroutines.forEach((coroutine, name) => {
          if (coroutine.isDone()) {
            result[name] = {
              exception: coroutine.exception,
              result: coroutine.result
            };
            coroutines.delete(name);
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
  }, _marked$7, null, [[3, 14]]);
}

var _marked$6 = /*#__PURE__*/regeneratorRuntime.mark(waitForAny);
function waitForAny(genFns) {
  var result, coroutines, any;
  return regeneratorRuntime.wrap(function waitForAny$(_context) {
    while (1) switch (_context.prev = _context.next) {
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
        coroutines.forEach((coroutine, name) => {
          if (coroutine.isDone()) {
            result[name] = {
              exception: coroutine.exception,
              result: coroutine.result
            };
            coroutines.delete(name);
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
  }, _marked$6, null, [[3, 16]]);
}

var _marked$5 = /*#__PURE__*/regeneratorRuntime.mark(waitForTime);

function waitForTime(runtime, time) {
  var time0, elapsedTime;
  return regeneratorRuntime.wrap(function waitForTime$(_context) {
    while (1) switch (_context.prev = _context.next) {
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
  }, _marked$5);
}

var _marked$4 = /*#__PURE__*/regeneratorRuntime.mark(waitForMilliseconds);
function waitForMilliseconds(milliseconds) {
  var runtime;
  return regeneratorRuntime.wrap(function waitForMilliseconds$(_context) {
    while (1) switch (_context.prev = _context.next) {
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
  }, _marked$4);
}

var _marked$3 = /*#__PURE__*/regeneratorRuntime.mark(waitForSeconds);
function waitForSeconds(seconds) {
  var runtime;
  return regeneratorRuntime.wrap(function waitForSeconds$(_context) {
    while (1) switch (_context.prev = _context.next) {
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
  }, _marked$3);
}

var _marked$2 = /*#__PURE__*/regeneratorRuntime.mark(waitForTicks);

function waitForTicks(ticks) {
  var maxTicks, tickCnt;
  return regeneratorRuntime.wrap(function waitForTicks$(_context) {
    while (1) switch (_context.prev = _context.next) {
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
  }, _marked$2);
}

var _marked$1 = /*#__PURE__*/regeneratorRuntime.mark(waitUntil);

// action: wait until action returns true
function waitUntil(action) {
  return regeneratorRuntime.wrap(function waitUntil$(_context) {
    while (1) switch (_context.prev = _context.next) {
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
  }, _marked$1);
}

var _marked = /*#__PURE__*/regeneratorRuntime.mark(waitWhile);

// action: wait until action returns false
function waitWhile(action) {
  return regeneratorRuntime.wrap(function waitWhile$(_context) {
    while (1) switch (_context.prev = _context.next) {
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
  const groupSet = runtime.groupSet;
  const mainGroup = runtime.mainGroup;

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

  const publicRuntime = runtime.toPublic();
  addProperty(publicRuntime, 'current', () => getCurrentCoroutine()?.toPublic());
  addProperty(publicRuntime, 'currentRuntime', () => getCurrentRuntime()?.toPublic());
  addProperty(publicRuntime, 'CoroutineStop', () => CoroutineStop);
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

  publicRuntime.Runtime = tickRate => exportRuntime(Runtime(tickRate));

  publicRuntime.CoroutineGroup = (name, options) => CoroutineGroup(groupSet, name, options).toPublic();

  publicRuntime.CoroutineGroup.getGroupByName = name => groupSet.getByName(name)?.toPublic();

  publicRuntime.CoroutineGroup.hasGroup = groupSet.has;
  publicRuntime.CoroutineGroup.hasGroupByName = groupSet.hasByName;
  Reflect.ownKeys(CoroutineGroupPriority).forEach(priorityName => void addProperty(publicRuntime.CoroutineGroup, `${priorityName}Priority`, () => CoroutineGroupPriority[priorityName]));
  Reflect.ownKeys(utils).forEach(fnName => void (publicRuntime[fnName] = utils[fnName]));
  return publicRuntime;
}

var index = exportRuntime(Runtime());

module.exports = index;
