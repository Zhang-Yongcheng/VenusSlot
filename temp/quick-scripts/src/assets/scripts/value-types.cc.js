"use strict";
cc._RF.push(module, '49246LeIZxFhqidu40sdZdX', 'value-types.cc');
// scripts/value-types.cc.js

// @ts-nocheck
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function isArray(obj) {
  return Array.isArray(obj);
}

function isArrayEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }

  if (objA == null || objB == null) {
    return false;
  }

  if (objA.length !== objB.length) {
    return false;
  }

  for (var i = 0; i < objA.length; ++i) {
    if (objA[i] !== objB[i]) {
      return false;
    }
  }

  return true;
}

var isBoolean = function isBoolean(b) {
  return typeof b === 'boolean';
};

function isFunction(fn) {
  return typeof fn === 'function';
}

function isInteger(value) {
  var t = typeof value;
  return t === 'number' || t === 'string' && value !== '' ? Number.isInteger(value * 1) : false;
}

function toInteger(value, defaultValue) {
  return isInteger(value) ? parseInt(value, 10) : defaultValue;
}

var hasOwnProperty$1 = Object.prototype.hasOwnProperty;

var is = function is(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
}; // eslint-disable-line no-self-compare


function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  } // Test for A's keys different from B.


  for (var i = 0; i < keysA.length; i++) {
    var aKey = keysA[i];

    if (!hasOwnProperty$1.call(objB, aKey) || !is(objA[aKey], objB[aKey])) {
      return false;
    }
  }

  return true;
}

function LinkedList() {
  var _linkedList;

  var _marked = /*#__PURE__*/regeneratorRuntime.mark(getIterable),
      _marked2 = /*#__PURE__*/regeneratorRuntime.mark(getReverseIterable);

  var nodes = {};
  var head = null;
  var tail = null;
  var count = 0;
  var nid = 0;
  var gettingPublic = true;

  function getNode(node, nextOrPrev) {
    var nextOrPrevNode = node[nextOrPrev];

    if (nextOrPrevNode) {
      return gettingPublic ? nextOrPrevNode["public"] : nextOrPrevNode;
    }

    return null;
  }

  function getNodeFrom(publicNode) {
    var node = null;

    if (publicNode) {
      gettingPublic = false;

      try {
        node = publicNode.next;

        if (node) {
          node = node.prev;
        } else {
          node = publicNode.prev;

          if (node) {
            node = node.next;
          } else {
            if (count === 1 && shallowEqual(head.value, publicNode.value)) {
              node = head;
            }
          }
        }
      } finally {
        gettingPublic = true;
      }
    }

    return node;
  }

  function createNode(value, next, prev) {
    ++nid;
    ++count;
    var node = {
      nid: nid,
      value: value,
      next: next,
      prev: prev,
      "public": {
        get value() {
          return node.value;
        },

        get next() {
          return getNode(node, 'next');
        },

        get prev() {
          return getNode(node, 'prev');
        }

      }
    };
    nodes[nid] = node;
    return node;
  }

  function destroyNode(node) {
    --count;
    node.prev = node.next = node["public"] = null;
    delete nodes[node.nid];
  }

  function addToHead(value) {
    var node = createNode(value, head, null);

    if (head) {
      head.prev = node;
    } else {
      tail = node;
    }

    head = node;
    return node["public"];
  }

  function addToTail(value) {
    var node = createNode(value, null, tail);

    if (tail) {
      tail.next = node;
    } else {
      head = node;
    }

    tail = node;
    return node["public"];
  }

  function moveToHead(node) {
    node = getNodeFrom(node);

    if (node && nodes[node.nid] && head.nid !== node.nid) {
      if (tail.nid === node.nid) {
        tail = node.prev;
        tail.next = null;
      } else {
        node.next.prev = node.prev;
        node.prev.next = node.next;
      }

      node.next = head;
      node.prev = null;
      head.prev = node;
      head = node;
    }
  }

  function moveToTail(node) {
    node = getNodeFrom(node);

    if (node && nodes[node.nid] && tail.nid !== node.nid) {
      if (head.nid === node.nid) {
        head = node.next;
        head.prev = null;
      } else {
        node.next.prev = node.prev;
        node.prev.next = node.next;
      }

      node.prev = tail;
      node.next = null;
      tail.next = node;
      tail = node;
    }
  }

  function removeHead() {
    var value;

    if (head) {
      var next = head.next;
      value = head.value;
      destroyNode(head);
      head = next;

      if (head) {
        head.prev = null;
      } else {
        tail = null;
      }
    }

    return value;
  }

  function removeTail() {
    var value;

    if (tail) {
      var prev = tail.prev;
      value = tail.value;
      destroyNode(tail);
      tail = prev;

      if (tail) {
        tail.next = null;
      } else {
        head = null;
      }
    }

    return value;
  }

  function remove(node) {
    node = getNodeFrom(node);

    if (node && nodes[node.nid]) {
      if (head.nid === node.nid) {
        removeHead();
      } else if (tail.nid === node.nid) {
        removeTail();
      } else {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        destroyNode(node);
      }
    }
  }

  function removeAll() {
    var node = head;

    while (node) {
      var nextNode = node.next;
      destroyNode(node);
      node = nextNode;
    }

    head = tail = null;
  }

  function insertBefore(node, value) {
    var insertedNode;
    node = getNodeFrom(node);

    if (node && nodes[node.nid]) {
      insertedNode = createNode(value, node, node.prev);

      if (head.nid === node.nid) {
        head = insertedNode;
      } else {
        node.prev.next = insertedNode;
      }

      node.prev = insertedNode;
    }

    return insertedNode ? insertedNode["public"] : null;
  }

  function insertAfter(node, value) {
    var insertedNode;
    node = getNodeFrom(node);

    if (node && nodes[node.nid]) {
      insertedNode = createNode(value, node.next, node);

      if (tail.nid === node.nid) {
        tail = insertedNode;
      } else {
        node.next.prev = insertedNode;
      }

      node.next = insertedNode;
    }

    return insertedNode ? insertedNode["public"] : null;
  }

  function map(fn) {
    var result = LinkedList();
    var node = head;

    while (node) {
      var nextNode = node.next;
      result.addToTail(fn(node.value));
      node = nextNode;
    }

    return result;
  }

  function forEach(fn) {
    var node = head;

    while (node) {
      var nextNode = node.next;
      fn(node.value);
      node = nextNode;
    }
  }

  function filter(fn) {
    var result = LinkedList();
    var node = head;

    while (node) {
      var nextNode = node.next;

      if (fn(node.value) === true) {
        result.addToTail(node.value);
      }

      node = nextNode;
    }

    return result;
  }

  function getIterable() {
    var node, nextNode;
    return regeneratorRuntime.wrap(function getIterable$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            node = head;

          case 1:
            if (!node) {
              _context.next = 8;
              break;
            }

            nextNode = node.next;
            _context.next = 5;
            return node.value;

          case 5:
            node = nextNode;
            _context.next = 1;
            break;

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _marked);
  }

  function getReverseIterable() {
    var node, prevNode;
    return regeneratorRuntime.wrap(function getReverseIterable$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            node = tail;

          case 1:
            if (!node) {
              _context2.next = 8;
              break;
            }

            prevNode = node.prev;
            _context2.next = 5;
            return node.value;

          case 5:
            node = prevNode;
            _context2.next = 1;
            break;

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _marked2);
  }

  function toArray() {
    var result = new Array(count);
    var i = 0;
    var node = head;

    while (node) {
      var nextNode = node.next;
      result[i++] = node.value;
      node = nextNode;
    }

    return result;
  }

  function toString() {
    return toArray().toString();
  }

  var linkedList = (_linkedList = {
    get head() {
      return head ? head["public"] : null;
    },

    get tail() {
      return tail ? tail["public"] : null;
    },

    get size() {
      return count;
    },

    addToHead: addToHead,
    addToTail: addToTail,
    moveToHead: moveToHead,
    moveToTail: moveToTail,
    removeHead: removeHead,
    removeTail: removeTail,
    remove: remove,
    removeAll: removeAll,
    insertBefore: insertBefore,
    insertAfter: insertAfter,
    map: map,
    forEach: forEach,
    filter: filter,
    getIterable: getIterable,
    getReverseIterable: getReverseIterable,
    toArray: toArray,
    toJSON: toArray,
    toString: toString
  }, _linkedList[Symbol.iterator] = getIterable, _linkedList);
  return linkedList;
}

LinkedList.from = function from(source) {
  var list = LinkedList();

  if (Array.isArray(source)) {
    source.forEach(function (item) {
      return void list.addToTail(item);
    });
  }

  return list;
};

var isNumber = function isNumber(n) {
  return typeof n === 'number';
};

function isObject(obj) {
  return typeof obj === 'object' && obj !== null;
}

function isPlainObject(obj) {
  if (!obj || typeof obj !== 'object' || {}.toString.call(obj) != '[object Object]') {
    return false;
  }

  var proto = Object.getPrototypeOf(obj);

  if (proto === null) {
    return true;
  }

  var ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof ctor == 'function' && ctor instanceof ctor && Function.prototype.toString.call(ctor) === Function.prototype.toString.call(Object);
}

function isNullOrUndefined(obj) {
  return obj === null || obj === undefined;
}

var isString = function isString(s) {
  return typeof s === 'string';
};

var isEmptyString = function isEmptyString(s) {
  return s.length === 0;
};

var isValidString = function isValidString(s) {
  return isString(s) && isEmptyString(s);
};

function errorToString(e) {
  var log;

  if (e instanceof Error) {
    log = JSON.stringify(Reflect.ownKeys(e).reduce(function (accumulator, currentValue) {
      return accumulator[currentValue] = e[currentValue], accumulator;
    }, {}));
  } else if (typeof e === 'object') {
    if (e !== null && e.constructor && e.constructor.name !== '' && e.constructor.name !== 'Object' && e.constructor.name !== 'Array') {
      log = e.constructor.name;
    } else {
      log = JSON.stringify(e);
    }
  } else if (typeof e === 'string') {
    log = e;
  } else {
    log = JSON.stringify(e);
  }

  return log;
}

exports.LinkedList = LinkedList;
exports.errorToString = errorToString;
exports.isArray = isArray;
exports.isArrayEqual = isArrayEqual;
exports.isBoolean = isBoolean;
exports.isEmptyString = isEmptyString;
exports.isFunction = isFunction;
exports.isInteger = isInteger;
exports.isNullOrUndefined = isNullOrUndefined;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isPlainObject = isPlainObject;
exports.isString = isString;
exports.isValidString = isValidString;
exports.shallowEqual = shallowEqual;
exports.toInteger = toInteger;

cc._RF.pop();