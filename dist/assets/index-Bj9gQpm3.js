function bE(e, t) {
  for (var a = 0; a < t.length; a++) {
    const i = t[a];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const o in i)
        if (o !== "default" && !(o in e)) {
          const u = Object.getOwnPropertyDescriptor(i, o);
          u &&
            Object.defineProperty(
              e,
              o,
              u.get ? u : { enumerable: !0, get: () => i[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) i(o);
  new MutationObserver((o) => {
    for (const u of o)
      if (u.type === "childList")
        for (const c of u.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && i(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(o) {
    const u = {};
    return (
      o.integrity && (u.integrity = o.integrity),
      o.referrerPolicy && (u.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (u.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (u.credentials = "omit")
        : (u.credentials = "same-origin"),
      u
    );
  }
  function i(o) {
    if (o.ep) return;
    o.ep = !0;
    const u = a(o);
    fetch(o.href, u);
  }
})();
function Z1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ch = { exports: {} },
  Ne = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uv;
function SE() {
  if (uv) return Ne;
  uv = 1;
  var e = Symbol.for("react.transitional.element"),
    t = Symbol.for("react.portal"),
    a = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    o = Symbol.for("react.profiler"),
    u = Symbol.for("react.consumer"),
    c = Symbol.for("react.context"),
    d = Symbol.for("react.forward_ref"),
    h = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    g = Symbol.for("react.lazy"),
    y = Symbol.iterator;
  function b(k) {
    return k === null || typeof k != "object"
      ? null
      : ((k = (y && k[y]) || k["@@iterator"]),
        typeof k == "function" ? k : null);
  }
  var x = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    w = Object.assign,
    S = {};
  function A(k, ne, be) {
    (this.props = k),
      (this.context = ne),
      (this.refs = S),
      (this.updater = be || x);
  }
  (A.prototype.isReactComponent = {}),
    (A.prototype.setState = function (k, ne) {
      if (typeof k != "object" && typeof k != "function" && k != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, k, ne, "setState");
    }),
    (A.prototype.forceUpdate = function (k) {
      this.updater.enqueueForceUpdate(this, k, "forceUpdate");
    });
  function C() {}
  C.prototype = A.prototype;
  function O(k, ne, be) {
    (this.props = k),
      (this.context = ne),
      (this.refs = S),
      (this.updater = be || x);
  }
  var M = (O.prototype = new C());
  (M.constructor = O), w(M, A.prototype), (M.isPureReactComponent = !0);
  var P = Array.isArray,
    B = { H: null, A: null, T: null, S: null },
    N = Object.prototype.hasOwnProperty;
  function q(k, ne, be, he, se, Me) {
    return (
      (be = Me.ref),
      {
        $$typeof: e,
        type: k,
        key: ne,
        ref: be !== void 0 ? be : null,
        props: Me,
      }
    );
  }
  function X(k, ne) {
    return q(k.type, ne, void 0, void 0, void 0, k.props);
  }
  function Y(k) {
    return typeof k == "object" && k !== null && k.$$typeof === e;
  }
  function E(k) {
    var ne = { "=": "=0", ":": "=2" };
    return (
      "$" +
      k.replace(/[=:]/g, function (be) {
        return ne[be];
      })
    );
  }
  var J = /\/+/g;
  function ce(k, ne) {
    return typeof k == "object" && k !== null && k.key != null
      ? E("" + k.key)
      : ne.toString(36);
  }
  function ae() {}
  function xe(k) {
    switch (k.status) {
      case "fulfilled":
        return k.value;
      case "rejected":
        throw k.reason;
      default:
        switch (
          (typeof k.status == "string"
            ? k.then(ae, ae)
            : ((k.status = "pending"),
              k.then(
                function (ne) {
                  k.status === "pending" &&
                    ((k.status = "fulfilled"), (k.value = ne));
                },
                function (ne) {
                  k.status === "pending" &&
                    ((k.status = "rejected"), (k.reason = ne));
                }
              )),
          k.status)
        ) {
          case "fulfilled":
            return k.value;
          case "rejected":
            throw k.reason;
        }
    }
    throw k;
  }
  function He(k, ne, be, he, se) {
    var Me = typeof k;
    (Me === "undefined" || Me === "boolean") && (k = null);
    var Ce = !1;
    if (k === null) Ce = !0;
    else
      switch (Me) {
        case "bigint":
        case "string":
        case "number":
          Ce = !0;
          break;
        case "object":
          switch (k.$$typeof) {
            case e:
            case t:
              Ce = !0;
              break;
            case g:
              return (Ce = k._init), He(Ce(k._payload), ne, be, he, se);
          }
      }
    if (Ce)
      return (
        (se = se(k)),
        (Ce = he === "" ? "." + ce(k, 0) : he),
        P(se)
          ? ((be = ""),
            Ce != null && (be = Ce.replace(J, "$&/") + "/"),
            He(se, ne, be, "", function (pt) {
              return pt;
            }))
          : se != null &&
            (Y(se) &&
              (se = X(
                se,
                be +
                  (se.key == null || (k && k.key === se.key)
                    ? ""
                    : ("" + se.key).replace(J, "$&/") + "/") +
                  Ce
              )),
            ne.push(se)),
        1
      );
    Ce = 0;
    var Vt = he === "" ? "." : he + ":";
    if (P(k))
      for (var Ye = 0; Ye < k.length; Ye++)
        (he = k[Ye]), (Me = Vt + ce(he, Ye)), (Ce += He(he, ne, be, Me, se));
    else if (((Ye = b(k)), typeof Ye == "function"))
      for (k = Ye.call(k), Ye = 0; !(he = k.next()).done; )
        (he = he.value),
          (Me = Vt + ce(he, Ye++)),
          (Ce += He(he, ne, be, Me, se));
    else if (Me === "object") {
      if (typeof k.then == "function") return He(xe(k), ne, be, he, se);
      throw (
        ((ne = String(k)),
        Error(
          "Objects are not valid as a React child (found: " +
            (ne === "[object Object]"
              ? "object with keys {" + Object.keys(k).join(", ") + "}"
              : ne) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return Ce;
  }
  function te(k, ne, be) {
    if (k == null) return k;
    var he = [],
      se = 0;
    return (
      He(k, he, "", "", function (Me) {
        return ne.call(be, Me, se++);
      }),
      he
    );
  }
  function le(k) {
    if (k._status === -1) {
      var ne = k._result;
      (ne = ne()),
        ne.then(
          function (be) {
            (k._status === 0 || k._status === -1) &&
              ((k._status = 1), (k._result = be));
          },
          function (be) {
            (k._status === 0 || k._status === -1) &&
              ((k._status = 2), (k._result = be));
          }
        ),
        k._status === -1 && ((k._status = 0), (k._result = ne));
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var oe =
    typeof reportError == "function"
      ? reportError
      : function (k) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var ne = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof k == "object" &&
                k !== null &&
                typeof k.message == "string"
                  ? String(k.message)
                  : String(k),
              error: k,
            });
            if (!window.dispatchEvent(ne)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", k);
            return;
          }
          console.error(k);
        };
  function Be() {}
  return (
    (Ne.Children = {
      map: te,
      forEach: function (k, ne, be) {
        te(
          k,
          function () {
            ne.apply(this, arguments);
          },
          be
        );
      },
      count: function (k) {
        var ne = 0;
        return (
          te(k, function () {
            ne++;
          }),
          ne
        );
      },
      toArray: function (k) {
        return (
          te(k, function (ne) {
            return ne;
          }) || []
        );
      },
      only: function (k) {
        if (!Y(k))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return k;
      },
    }),
    (Ne.Component = A),
    (Ne.Fragment = a),
    (Ne.Profiler = o),
    (Ne.PureComponent = O),
    (Ne.StrictMode = i),
    (Ne.Suspense = h),
    (Ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = B),
    (Ne.act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (Ne.cache = function (k) {
      return function () {
        return k.apply(null, arguments);
      };
    }),
    (Ne.cloneElement = function (k, ne, be) {
      if (k == null)
        throw Error(
          "The argument must be a React element, but you passed " + k + "."
        );
      var he = w({}, k.props),
        se = k.key,
        Me = void 0;
      if (ne != null)
        for (Ce in (ne.ref !== void 0 && (Me = void 0),
        ne.key !== void 0 && (se = "" + ne.key),
        ne))
          !N.call(ne, Ce) ||
            Ce === "key" ||
            Ce === "__self" ||
            Ce === "__source" ||
            (Ce === "ref" && ne.ref === void 0) ||
            (he[Ce] = ne[Ce]);
      var Ce = arguments.length - 2;
      if (Ce === 1) he.children = be;
      else if (1 < Ce) {
        for (var Vt = Array(Ce), Ye = 0; Ye < Ce; Ye++)
          Vt[Ye] = arguments[Ye + 2];
        he.children = Vt;
      }
      return q(k.type, se, void 0, void 0, Me, he);
    }),
    (Ne.createContext = function (k) {
      return (
        (k = {
          $$typeof: c,
          _currentValue: k,
          _currentValue2: k,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (k.Provider = k),
        (k.Consumer = { $$typeof: u, _context: k }),
        k
      );
    }),
    (Ne.createElement = function (k, ne, be) {
      var he,
        se = {},
        Me = null;
      if (ne != null)
        for (he in (ne.key !== void 0 && (Me = "" + ne.key), ne))
          N.call(ne, he) &&
            he !== "key" &&
            he !== "__self" &&
            he !== "__source" &&
            (se[he] = ne[he]);
      var Ce = arguments.length - 2;
      if (Ce === 1) se.children = be;
      else if (1 < Ce) {
        for (var Vt = Array(Ce), Ye = 0; Ye < Ce; Ye++)
          Vt[Ye] = arguments[Ye + 2];
        se.children = Vt;
      }
      if (k && k.defaultProps)
        for (he in ((Ce = k.defaultProps), Ce))
          se[he] === void 0 && (se[he] = Ce[he]);
      return q(k, Me, void 0, void 0, null, se);
    }),
    (Ne.createRef = function () {
      return { current: null };
    }),
    (Ne.forwardRef = function (k) {
      return { $$typeof: d, render: k };
    }),
    (Ne.isValidElement = Y),
    (Ne.lazy = function (k) {
      return { $$typeof: g, _payload: { _status: -1, _result: k }, _init: le };
    }),
    (Ne.memo = function (k, ne) {
      return { $$typeof: m, type: k, compare: ne === void 0 ? null : ne };
    }),
    (Ne.startTransition = function (k) {
      var ne = B.T,
        be = {};
      B.T = be;
      try {
        var he = k(),
          se = B.S;
        se !== null && se(be, he),
          typeof he == "object" &&
            he !== null &&
            typeof he.then == "function" &&
            he.then(Be, oe);
      } catch (Me) {
        oe(Me);
      } finally {
        B.T = ne;
      }
    }),
    (Ne.unstable_useCacheRefresh = function () {
      return B.H.useCacheRefresh();
    }),
    (Ne.use = function (k) {
      return B.H.use(k);
    }),
    (Ne.useActionState = function (k, ne, be) {
      return B.H.useActionState(k, ne, be);
    }),
    (Ne.useCallback = function (k, ne) {
      return B.H.useCallback(k, ne);
    }),
    (Ne.useContext = function (k) {
      return B.H.useContext(k);
    }),
    (Ne.useDebugValue = function () {}),
    (Ne.useDeferredValue = function (k, ne) {
      return B.H.useDeferredValue(k, ne);
    }),
    (Ne.useEffect = function (k, ne) {
      return B.H.useEffect(k, ne);
    }),
    (Ne.useId = function () {
      return B.H.useId();
    }),
    (Ne.useImperativeHandle = function (k, ne, be) {
      return B.H.useImperativeHandle(k, ne, be);
    }),
    (Ne.useInsertionEffect = function (k, ne) {
      return B.H.useInsertionEffect(k, ne);
    }),
    (Ne.useLayoutEffect = function (k, ne) {
      return B.H.useLayoutEffect(k, ne);
    }),
    (Ne.useMemo = function (k, ne) {
      return B.H.useMemo(k, ne);
    }),
    (Ne.useOptimistic = function (k, ne) {
      return B.H.useOptimistic(k, ne);
    }),
    (Ne.useReducer = function (k, ne, be) {
      return B.H.useReducer(k, ne, be);
    }),
    (Ne.useRef = function (k) {
      return B.H.useRef(k);
    }),
    (Ne.useState = function (k) {
      return B.H.useState(k);
    }),
    (Ne.useSyncExternalStore = function (k, ne, be) {
      return B.H.useSyncExternalStore(k, ne, be);
    }),
    (Ne.useTransition = function () {
      return B.H.useTransition();
    }),
    (Ne.version = "19.0.0"),
    Ne
  );
}
var cv;
function Mm() {
  return cv || ((cv = 1), (ch.exports = SE())), ch.exports;
}
var R = Mm();
const Fe = Z1(R),
  fv = bE({ __proto__: null, default: Fe }, [R]);
var fh = { exports: {} },
  Ro = {},
  dh = { exports: {} },
  hh = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dv;
function xE() {
  return (
    dv ||
      ((dv = 1),
      (function (e) {
        function t(te, le) {
          var oe = te.length;
          te.push(le);
          e: for (; 0 < oe; ) {
            var Be = (oe - 1) >>> 1,
              k = te[Be];
            if (0 < o(k, le)) (te[Be] = le), (te[oe] = k), (oe = Be);
            else break e;
          }
        }
        function a(te) {
          return te.length === 0 ? null : te[0];
        }
        function i(te) {
          if (te.length === 0) return null;
          var le = te[0],
            oe = te.pop();
          if (oe !== le) {
            te[0] = oe;
            e: for (var Be = 0, k = te.length, ne = k >>> 1; Be < ne; ) {
              var be = 2 * (Be + 1) - 1,
                he = te[be],
                se = be + 1,
                Me = te[se];
              if (0 > o(he, oe))
                se < k && 0 > o(Me, he)
                  ? ((te[Be] = Me), (te[se] = oe), (Be = se))
                  : ((te[Be] = he), (te[be] = oe), (Be = be));
              else if (se < k && 0 > o(Me, oe))
                (te[Be] = Me), (te[se] = oe), (Be = se);
              else break e;
            }
          }
          return le;
        }
        function o(te, le) {
          var oe = te.sortIndex - le.sortIndex;
          return oe !== 0 ? oe : te.id - le.id;
        }
        if (
          ((e.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var u = performance;
          e.unstable_now = function () {
            return u.now();
          };
        } else {
          var c = Date,
            d = c.now();
          e.unstable_now = function () {
            return c.now() - d;
          };
        }
        var h = [],
          m = [],
          g = 1,
          y = null,
          b = 3,
          x = !1,
          w = !1,
          S = !1,
          A = typeof setTimeout == "function" ? setTimeout : null,
          C = typeof clearTimeout == "function" ? clearTimeout : null,
          O = typeof setImmediate < "u" ? setImmediate : null;
        function M(te) {
          for (var le = a(m); le !== null; ) {
            if (le.callback === null) i(m);
            else if (le.startTime <= te)
              i(m), (le.sortIndex = le.expirationTime), t(h, le);
            else break;
            le = a(m);
          }
        }
        function P(te) {
          if (((S = !1), M(te), !w))
            if (a(h) !== null) (w = !0), xe();
            else {
              var le = a(m);
              le !== null && He(P, le.startTime - te);
            }
        }
        var B = !1,
          N = -1,
          q = 5,
          X = -1;
        function Y() {
          return !(e.unstable_now() - X < q);
        }
        function E() {
          if (B) {
            var te = e.unstable_now();
            X = te;
            var le = !0;
            try {
              e: {
                (w = !1), S && ((S = !1), C(N), (N = -1)), (x = !0);
                var oe = b;
                try {
                  t: {
                    for (
                      M(te), y = a(h);
                      y !== null && !(y.expirationTime > te && Y());

                    ) {
                      var Be = y.callback;
                      if (typeof Be == "function") {
                        (y.callback = null), (b = y.priorityLevel);
                        var k = Be(y.expirationTime <= te);
                        if (((te = e.unstable_now()), typeof k == "function")) {
                          (y.callback = k), M(te), (le = !0);
                          break t;
                        }
                        y === a(h) && i(h), M(te);
                      } else i(h);
                      y = a(h);
                    }
                    if (y !== null) le = !0;
                    else {
                      var ne = a(m);
                      ne !== null && He(P, ne.startTime - te), (le = !1);
                    }
                  }
                  break e;
                } finally {
                  (y = null), (b = oe), (x = !1);
                }
                le = void 0;
              }
            } finally {
              le ? J() : (B = !1);
            }
          }
        }
        var J;
        if (typeof O == "function")
          J = function () {
            O(E);
          };
        else if (typeof MessageChannel < "u") {
          var ce = new MessageChannel(),
            ae = ce.port2;
          (ce.port1.onmessage = E),
            (J = function () {
              ae.postMessage(null);
            });
        } else
          J = function () {
            A(E, 0);
          };
        function xe() {
          B || ((B = !0), J());
        }
        function He(te, le) {
          N = A(function () {
            te(e.unstable_now());
          }, le);
        }
        (e.unstable_IdlePriority = 5),
          (e.unstable_ImmediatePriority = 1),
          (e.unstable_LowPriority = 4),
          (e.unstable_NormalPriority = 3),
          (e.unstable_Profiling = null),
          (e.unstable_UserBlockingPriority = 2),
          (e.unstable_cancelCallback = function (te) {
            te.callback = null;
          }),
          (e.unstable_continueExecution = function () {
            w || x || ((w = !0), xe());
          }),
          (e.unstable_forceFrameRate = function (te) {
            0 > te || 125 < te
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (q = 0 < te ? Math.floor(1e3 / te) : 5);
          }),
          (e.unstable_getCurrentPriorityLevel = function () {
            return b;
          }),
          (e.unstable_getFirstCallbackNode = function () {
            return a(h);
          }),
          (e.unstable_next = function (te) {
            switch (b) {
              case 1:
              case 2:
              case 3:
                var le = 3;
                break;
              default:
                le = b;
            }
            var oe = b;
            b = le;
            try {
              return te();
            } finally {
              b = oe;
            }
          }),
          (e.unstable_pauseExecution = function () {}),
          (e.unstable_requestPaint = function () {}),
          (e.unstable_runWithPriority = function (te, le) {
            switch (te) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                te = 3;
            }
            var oe = b;
            b = te;
            try {
              return le();
            } finally {
              b = oe;
            }
          }),
          (e.unstable_scheduleCallback = function (te, le, oe) {
            var Be = e.unstable_now();
            switch (
              (typeof oe == "object" && oe !== null
                ? ((oe = oe.delay),
                  (oe = typeof oe == "number" && 0 < oe ? Be + oe : Be))
                : (oe = Be),
              te)
            ) {
              case 1:
                var k = -1;
                break;
              case 2:
                k = 250;
                break;
              case 5:
                k = 1073741823;
                break;
              case 4:
                k = 1e4;
                break;
              default:
                k = 5e3;
            }
            return (
              (k = oe + k),
              (te = {
                id: g++,
                callback: le,
                priorityLevel: te,
                startTime: oe,
                expirationTime: k,
                sortIndex: -1,
              }),
              oe > Be
                ? ((te.sortIndex = oe),
                  t(m, te),
                  a(h) === null &&
                    te === a(m) &&
                    (S ? (C(N), (N = -1)) : (S = !0), He(P, oe - Be)))
                : ((te.sortIndex = k), t(h, te), w || x || ((w = !0), xe())),
              te
            );
          }),
          (e.unstable_shouldYield = Y),
          (e.unstable_wrapCallback = function (te) {
            var le = b;
            return function () {
              var oe = b;
              b = le;
              try {
                return te.apply(this, arguments);
              } finally {
                b = oe;
              }
            };
          });
      })(hh)),
    hh
  );
}
var hv;
function wE() {
  return hv || ((hv = 1), (dh.exports = xE())), dh.exports;
}
var mh = { exports: {} },
  Zt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mv;
function TE() {
  if (mv) return Zt;
  mv = 1;
  var e = Mm();
  function t(h) {
    var m = "https://react.dev/errors/" + h;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        m += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return (
      "Minified React error #" +
      h +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function a() {}
  var i = {
      d: {
        f: a,
        r: function () {
          throw Error(t(522));
        },
        D: a,
        C: a,
        L: a,
        m: a,
        X: a,
        S: a,
        M: a,
      },
      p: 0,
      findDOMNode: null,
    },
    o = Symbol.for("react.portal");
  function u(h, m, g) {
    var y =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: y == null ? null : "" + y,
      children: h,
      containerInfo: m,
      implementation: g,
    };
  }
  var c = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function d(h, m) {
    if (h === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (Zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
    (Zt.createPortal = function (h, m) {
      var g =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(t(299));
      return u(h, m, null, g);
    }),
    (Zt.flushSync = function (h) {
      var m = c.T,
        g = i.p;
      try {
        if (((c.T = null), (i.p = 2), h)) return h();
      } finally {
        (c.T = m), (i.p = g), i.d.f();
      }
    }),
    (Zt.preconnect = function (h, m) {
      typeof h == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == "string"
                ? m === "use-credentials"
                  ? m
                  : ""
                : void 0))
          : (m = null),
        i.d.C(h, m));
    }),
    (Zt.prefetchDNS = function (h) {
      typeof h == "string" && i.d.D(h);
    }),
    (Zt.preinit = function (h, m) {
      if (typeof h == "string" && m && typeof m.as == "string") {
        var g = m.as,
          y = d(g, m.crossOrigin),
          b = typeof m.integrity == "string" ? m.integrity : void 0,
          x = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        g === "style"
          ? i.d.S(h, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: y,
              integrity: b,
              fetchPriority: x,
            })
          : g === "script" &&
            i.d.X(h, {
              crossOrigin: y,
              integrity: b,
              fetchPriority: x,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (Zt.preinitModule = function (h, m) {
      if (typeof h == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var g = d(m.as, m.crossOrigin);
            i.d.M(h, {
              crossOrigin: g,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && i.d.M(h);
    }),
    (Zt.preload = function (h, m) {
      if (
        typeof h == "string" &&
        typeof m == "object" &&
        m !== null &&
        typeof m.as == "string"
      ) {
        var g = m.as,
          y = d(g, m.crossOrigin);
        i.d.L(h, g, {
          crossOrigin: y,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (Zt.preloadModule = function (h, m) {
      if (typeof h == "string")
        if (m) {
          var g = d(m.as, m.crossOrigin);
          i.d.m(h, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: g,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else i.d.m(h);
    }),
    (Zt.requestFormReset = function (h) {
      i.d.r(h);
    }),
    (Zt.unstable_batchedUpdates = function (h, m) {
      return h(m);
    }),
    (Zt.useFormState = function (h, m, g) {
      return c.H.useFormState(h, m, g);
    }),
    (Zt.useFormStatus = function () {
      return c.H.useHostTransitionStatus();
    }),
    (Zt.version = "19.0.0"),
    Zt
  );
}
var pv;
function I1() {
  if (pv) return mh.exports;
  pv = 1;
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  return e(), (mh.exports = TE()), mh.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gv;
function EE() {
  if (gv) return Ro;
  gv = 1;
  var e = wE(),
    t = Mm(),
    a = I1();
  function i(n) {
    var r = "https://react.dev/errors/" + n;
    if (1 < arguments.length) {
      r += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var s = 2; s < arguments.length; s++)
        r += "&args[]=" + encodeURIComponent(arguments[s]);
    }
    return (
      "Minified React error #" +
      n +
      "; visit " +
      r +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o(n) {
    return !(!n || (n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11));
  }
  var u = Symbol.for("react.element"),
    c = Symbol.for("react.transitional.element"),
    d = Symbol.for("react.portal"),
    h = Symbol.for("react.fragment"),
    m = Symbol.for("react.strict_mode"),
    g = Symbol.for("react.profiler"),
    y = Symbol.for("react.provider"),
    b = Symbol.for("react.consumer"),
    x = Symbol.for("react.context"),
    w = Symbol.for("react.forward_ref"),
    S = Symbol.for("react.suspense"),
    A = Symbol.for("react.suspense_list"),
    C = Symbol.for("react.memo"),
    O = Symbol.for("react.lazy"),
    M = Symbol.for("react.offscreen"),
    P = Symbol.for("react.memo_cache_sentinel"),
    B = Symbol.iterator;
  function N(n) {
    return n === null || typeof n != "object"
      ? null
      : ((n = (B && n[B]) || n["@@iterator"]),
        typeof n == "function" ? n : null);
  }
  var q = Symbol.for("react.client.reference");
  function X(n) {
    if (n == null) return null;
    if (typeof n == "function")
      return n.$$typeof === q ? null : n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case h:
        return "Fragment";
      case d:
        return "Portal";
      case g:
        return "Profiler";
      case m:
        return "StrictMode";
      case S:
        return "Suspense";
      case A:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case x:
          return (n.displayName || "Context") + ".Provider";
        case b:
          return (n._context.displayName || "Context") + ".Consumer";
        case w:
          var r = n.render;
          return (
            (n = n.displayName),
            n ||
              ((n = r.displayName || r.name || ""),
              (n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef")),
            n
          );
        case C:
          return (
            (r = n.displayName || null), r !== null ? r : X(n.type) || "Memo"
          );
        case O:
          (r = n._payload), (n = n._init);
          try {
            return X(n(r));
          } catch {}
      }
    return null;
  }
  var Y = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    E = Object.assign,
    J,
    ce;
  function ae(n) {
    if (J === void 0)
      try {
        throw Error();
      } catch (s) {
        var r = s.stack.trim().match(/\n( *(at )?)/);
        (J = (r && r[1]) || ""),
          (ce =
            -1 <
            s.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < s.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      J +
      n +
      ce
    );
  }
  var xe = !1;
  function He(n, r) {
    if (!n || xe) return "";
    xe = !0;
    var s = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (r) {
              var ee = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(ee.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(ee, []);
                } catch (Z) {
                  var $ = Z;
                }
                Reflect.construct(n, [], ee);
              } else {
                try {
                  ee.call();
                } catch (Z) {
                  $ = Z;
                }
                n.call(ee.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Z) {
                $ = Z;
              }
              (ee = n()) &&
                typeof ee.catch == "function" &&
                ee.catch(function () {});
            }
          } catch (Z) {
            if (Z && $ && typeof Z.stack == "string") return [Z.stack, $.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var f = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      f &&
        f.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var p = l.DetermineComponentFrameRoot(),
        v = p[0],
        T = p[1];
      if (v && T) {
        var D = v.split(`
`),
          z = T.split(`
`);
        for (
          f = l = 0;
          l < D.length && !D[l].includes("DetermineComponentFrameRoot");

        )
          l++;
        for (; f < z.length && !z[f].includes("DetermineComponentFrameRoot"); )
          f++;
        if (l === D.length || f === z.length)
          for (
            l = D.length - 1, f = z.length - 1;
            1 <= l && 0 <= f && D[l] !== z[f];

          )
            f--;
        for (; 1 <= l && 0 <= f; l--, f--)
          if (D[l] !== z[f]) {
            if (l !== 1 || f !== 1)
              do
                if ((l--, f--, 0 > f || D[l] !== z[f])) {
                  var I =
                    `
` + D[l].replace(" at new ", " at ");
                  return (
                    n.displayName &&
                      I.includes("<anonymous>") &&
                      (I = I.replace("<anonymous>", n.displayName)),
                    I
                  );
                }
              while (1 <= l && 0 <= f);
            break;
          }
      }
    } finally {
      (xe = !1), (Error.prepareStackTrace = s);
    }
    return (s = n ? n.displayName || n.name : "") ? ae(s) : "";
  }
  function te(n) {
    switch (n.tag) {
      case 26:
      case 27:
      case 5:
        return ae(n.type);
      case 16:
        return ae("Lazy");
      case 13:
        return ae("Suspense");
      case 19:
        return ae("SuspenseList");
      case 0:
      case 15:
        return (n = He(n.type, !1)), n;
      case 11:
        return (n = He(n.type.render, !1)), n;
      case 1:
        return (n = He(n.type, !0)), n;
      default:
        return "";
    }
  }
  function le(n) {
    try {
      var r = "";
      do (r += te(n)), (n = n.return);
      while (n);
      return r;
    } catch (s) {
      return (
        `
Error generating stack: ` +
        s.message +
        `
` +
        s.stack
      );
    }
  }
  function oe(n) {
    var r = n,
      s = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do (r = n), r.flags & 4098 && (s = r.return), (n = r.return);
      while (n);
    }
    return r.tag === 3 ? s : null;
  }
  function Be(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (
        (r === null && ((n = n.alternate), n !== null && (r = n.memoizedState)),
        r !== null)
      )
        return r.dehydrated;
    }
    return null;
  }
  function k(n) {
    if (oe(n) !== n) throw Error(i(188));
  }
  function ne(n) {
    var r = n.alternate;
    if (!r) {
      if (((r = oe(n)), r === null)) throw Error(i(188));
      return r !== n ? null : n;
    }
    for (var s = n, l = r; ; ) {
      var f = s.return;
      if (f === null) break;
      var p = f.alternate;
      if (p === null) {
        if (((l = f.return), l !== null)) {
          s = l;
          continue;
        }
        break;
      }
      if (f.child === p.child) {
        for (p = f.child; p; ) {
          if (p === s) return k(f), n;
          if (p === l) return k(f), r;
          p = p.sibling;
        }
        throw Error(i(188));
      }
      if (s.return !== l.return) (s = f), (l = p);
      else {
        for (var v = !1, T = f.child; T; ) {
          if (T === s) {
            (v = !0), (s = f), (l = p);
            break;
          }
          if (T === l) {
            (v = !0), (l = f), (s = p);
            break;
          }
          T = T.sibling;
        }
        if (!v) {
          for (T = p.child; T; ) {
            if (T === s) {
              (v = !0), (s = p), (l = f);
              break;
            }
            if (T === l) {
              (v = !0), (l = p), (s = f);
              break;
            }
            T = T.sibling;
          }
          if (!v) throw Error(i(189));
        }
      }
      if (s.alternate !== l) throw Error(i(190));
    }
    if (s.tag !== 3) throw Error(i(188));
    return s.stateNode.current === s ? n : r;
  }
  function be(n) {
    var r = n.tag;
    if (r === 5 || r === 26 || r === 27 || r === 6) return n;
    for (n = n.child; n !== null; ) {
      if (((r = be(n)), r !== null)) return r;
      n = n.sibling;
    }
    return null;
  }
  var he = Array.isArray,
    se = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Me = { pending: !1, data: null, method: null, action: null },
    Ce = [],
    Vt = -1;
  function Ye(n) {
    return { current: n };
  }
  function pt(n) {
    0 > Vt || ((n.current = Ce[Vt]), (Ce[Vt] = null), Vt--);
  }
  function De(n, r) {
    Vt++, (Ce[Vt] = n.current), (n.current = r);
  }
  var jt = Ye(null),
    Jr = Ye(null),
    ir = Ye(null),
    Tn = Ye(null);
  function vi(n, r) {
    switch ((De(ir, r), De(Jr, n), De(jt, null), (n = r.nodeType), n)) {
      case 9:
      case 11:
        r = (r = r.documentElement) && (r = r.namespaceURI) ? P0(r) : 0;
        break;
      default:
        if (
          ((n = n === 8 ? r.parentNode : r),
          (r = n.tagName),
          (n = n.namespaceURI))
        )
          (n = P0(n)), (r = V0(n, r));
        else
          switch (r) {
            case "svg":
              r = 1;
              break;
            case "math":
              r = 2;
              break;
            default:
              r = 0;
          }
    }
    pt(jt), De(jt, r);
  }
  function ea() {
    pt(jt), pt(Jr), pt(ir);
  }
  function bi(n) {
    n.memoizedState !== null && De(Tn, n);
    var r = jt.current,
      s = V0(r, n.type);
    r !== s && (De(Jr, n), De(jt, s));
  }
  function Si(n) {
    Jr.current === n && (pt(jt), pt(Jr)),
      Tn.current === n && (pt(Tn), (To._currentValue = Me));
  }
  var Ns = Object.prototype.hasOwnProperty,
    Ds = e.unstable_scheduleCallback,
    Ms = e.unstable_cancelCallback,
    Tr = e.unstable_shouldYield,
    La = e.unstable_requestPaint,
    fn = e.unstable_now,
    ks = e.unstable_getCurrentPriorityLevel,
    Gn = e.unstable_ImmediatePriority,
    En = e.unstable_UserBlockingPriority,
    Ba = e.unstable_NormalPriority,
    Ls = e.unstable_LowPriority,
    El = e.unstable_IdlePriority,
    sr = e.log,
    Cl = e.unstable_setDisableYieldValue,
    ta = null,
    Xt = null;
  function af(n) {
    if (Xt && typeof Xt.onCommitFiberRoot == "function")
      try {
        Xt.onCommitFiberRoot(ta, n, void 0, (n.current.flags & 128) === 128);
      } catch {}
  }
  function Kn(n) {
    if (
      (typeof sr == "function" && Cl(n),
      Xt && typeof Xt.setStrictMode == "function")
    )
      try {
        Xt.setStrictMode(ta, n);
      } catch {}
  }
  var Lt = Math.clz32 ? Math.clz32 : sf,
    Al = Math.log,
    Bs = Math.LN2;
  function sf(n) {
    return (n >>>= 0), n === 0 ? 32 : (31 - ((Al(n) / Bs) | 0)) | 0;
  }
  var Ua = 128,
    xi = 4194304;
  function or(n) {
    var r = n & 42;
    if (r !== 0) return r;
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194176;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return n & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return n;
    }
  }
  function Er(n, r) {
    var s = n.pendingLanes;
    if (s === 0) return 0;
    var l = 0,
      f = n.suspendedLanes,
      p = n.pingedLanes,
      v = n.warmLanes;
    n = n.finishedLanes !== 0;
    var T = s & 134217727;
    return (
      T !== 0
        ? ((s = T & ~f),
          s !== 0
            ? (l = or(s))
            : ((p &= T),
              p !== 0
                ? (l = or(p))
                : n || ((v = T & ~v), v !== 0 && (l = or(v)))))
        : ((T = s & ~f),
          T !== 0
            ? (l = or(T))
            : p !== 0
            ? (l = or(p))
            : n || ((v = s & ~v), v !== 0 && (l = or(v)))),
      l === 0
        ? 0
        : r !== 0 &&
          r !== l &&
          !(r & f) &&
          ((f = l & -l),
          (v = r & -r),
          f >= v || (f === 32 && (v & 4194176) !== 0))
        ? r
        : l
    );
  }
  function lr(n, r) {
    return (n.pendingLanes & ~(n.suspendedLanes & ~n.pingedLanes) & r) === 0;
  }
  function of(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
      case 8:
        return r + 250;
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function _l() {
    var n = Ua;
    return (Ua <<= 1), !(Ua & 4194176) && (Ua = 128), n;
  }
  function L() {
    var n = xi;
    return (xi <<= 1), !(xi & 62914560) && (xi = 4194304), n;
  }
  function j(n) {
    for (var r = [], s = 0; 31 > s; s++) r.push(n);
    return r;
  }
  function F(n, r) {
    (n.pendingLanes |= r),
      r !== 268435456 &&
        ((n.suspendedLanes = 0), (n.pingedLanes = 0), (n.warmLanes = 0));
  }
  function re(n, r, s, l, f, p) {
    var v = n.pendingLanes;
    (n.pendingLanes = s),
      (n.suspendedLanes = 0),
      (n.pingedLanes = 0),
      (n.warmLanes = 0),
      (n.expiredLanes &= s),
      (n.entangledLanes &= s),
      (n.errorRecoveryDisabledLanes &= s),
      (n.shellSuspendCounter = 0);
    var T = n.entanglements,
      D = n.expirationTimes,
      z = n.hiddenUpdates;
    for (s = v & ~s; 0 < s; ) {
      var I = 31 - Lt(s),
        ee = 1 << I;
      (T[I] = 0), (D[I] = -1);
      var $ = z[I];
      if ($ !== null)
        for (z[I] = null, I = 0; I < $.length; I++) {
          var Z = $[I];
          Z !== null && (Z.lane &= -536870913);
        }
      s &= ~ee;
    }
    l !== 0 && ue(n, l, 0),
      p !== 0 && f === 0 && n.tag !== 0 && (n.suspendedLanes |= p & ~(v & ~r));
  }
  function ue(n, r, s) {
    (n.pendingLanes |= r), (n.suspendedLanes &= ~r);
    var l = 31 - Lt(r);
    (n.entangledLanes |= r),
      (n.entanglements[l] = n.entanglements[l] | 1073741824 | (s & 4194218));
  }
  function ye(n, r) {
    var s = (n.entangledLanes |= r);
    for (n = n.entanglements; s; ) {
      var l = 31 - Lt(s),
        f = 1 << l;
      (f & r) | (n[l] & r) && (n[l] |= r), (s &= ~f);
    }
  }
  function Ee(n) {
    return (
      (n &= -n), 2 < n ? (8 < n ? (n & 134217727 ? 32 : 268435456) : 8) : 2
    );
  }
  function fe() {
    var n = se.p;
    return n !== 0 ? n : ((n = window.event), n === void 0 ? 32 : rv(n.type));
  }
  function me(n, r) {
    var s = se.p;
    try {
      return (se.p = n), r();
    } finally {
      se.p = s;
    }
  }
  var ie = Math.random().toString(36).slice(2),
    pe = "__reactFiber$" + ie,
    Se = "__reactProps$" + ie,
    Xe = "__reactContainer$" + ie,
    Tt = "__reactEvents$" + ie,
    lt = "__reactListeners$" + ie,
    et = "__reactHandles$" + ie,
    gt = "__reactResources$" + ie,
    Cn = "__reactMarker$" + ie;
  function Cr(n) {
    delete n[pe], delete n[Se], delete n[Tt], delete n[lt], delete n[et];
  }
  function Ht(n) {
    var r = n[pe];
    if (r) return r;
    for (var s = n.parentNode; s; ) {
      if ((r = s[Xe] || s[pe])) {
        if (
          ((s = r.alternate),
          r.child !== null || (s !== null && s.child !== null))
        )
          for (n = q0(n); n !== null; ) {
            if ((s = n[pe])) return s;
            n = q0(n);
          }
        return r;
      }
      (n = s), (s = n.parentNode);
    }
    return null;
  }
  function qt(n) {
    if ((n = n[pe] || n[Xe])) {
      var r = n.tag;
      if (r === 5 || r === 6 || r === 13 || r === 26 || r === 27 || r === 3)
        return n;
    }
    return null;
  }
  function Ar(n) {
    var r = n.tag;
    if (r === 5 || r === 26 || r === 27 || r === 6) return n.stateNode;
    throw Error(i(33));
  }
  function An(n) {
    var r = n[gt];
    return (
      r ||
        (r = n[gt] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      r
    );
  }
  function at(n) {
    n[Cn] = !0;
  }
  var za = new Set(),
    Pa = {};
  function qe(n, r) {
    ct(n, r), ct(n + "Capture", r);
  }
  function ct(n, r) {
    for (Pa[n] = r, n = 0; n < r.length; n++) za.add(r[n]);
  }
  var sn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Va = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    ft = {},
    _r = {};
  function Rl(n) {
    return Ns.call(_r, n)
      ? !0
      : Ns.call(ft, n)
      ? !1
      : Va.test(n)
      ? (_r[n] = !0)
      : ((ft[n] = !0), !1);
  }
  function wi(n, r, s) {
    if (Rl(r))
      if (s === null) n.removeAttribute(r);
      else {
        switch (typeof s) {
          case "undefined":
          case "function":
          case "symbol":
            n.removeAttribute(r);
            return;
          case "boolean":
            var l = r.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              n.removeAttribute(r);
              return;
            }
        }
        n.setAttribute(r, "" + s);
      }
  }
  function Ol(n, r, s) {
    if (s === null) n.removeAttribute(r);
    else {
      switch (typeof s) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          n.removeAttribute(r);
          return;
      }
      n.setAttribute(r, "" + s);
    }
  }
  function Rr(n, r, s, l) {
    if (l === null) n.removeAttribute(s);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          n.removeAttribute(s);
          return;
      }
      n.setAttributeNS(r, s, "" + l);
    }
  }
  function _n(n) {
    switch (typeof n) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Hp(n) {
    var r = n.type;
    return (
      (n = n.nodeName) &&
      n.toLowerCase() === "input" &&
      (r === "checkbox" || r === "radio")
    );
  }
  function mw(n) {
    var r = Hp(n) ? "checked" : "value",
      s = Object.getOwnPropertyDescriptor(n.constructor.prototype, r),
      l = "" + n[r];
    if (
      !n.hasOwnProperty(r) &&
      typeof s < "u" &&
      typeof s.get == "function" &&
      typeof s.set == "function"
    ) {
      var f = s.get,
        p = s.set;
      return (
        Object.defineProperty(n, r, {
          configurable: !0,
          get: function () {
            return f.call(this);
          },
          set: function (v) {
            (l = "" + v), p.call(this, v);
          },
        }),
        Object.defineProperty(n, r, { enumerable: s.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (v) {
            l = "" + v;
          },
          stopTracking: function () {
            (n._valueTracker = null), delete n[r];
          },
        }
      );
    }
  }
  function Nl(n) {
    n._valueTracker || (n._valueTracker = mw(n));
  }
  function qp(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var s = r.getValue(),
      l = "";
    return (
      n && (l = Hp(n) ? (n.checked ? "true" : "false") : n.value),
      (n = l),
      n !== s ? (r.setValue(n), !0) : !1
    );
  }
  function Dl(n) {
    if (
      ((n = n || (typeof document < "u" ? document : void 0)), typeof n > "u")
    )
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  var pw = /[\n"\\]/g;
  function Rn(n) {
    return n.replace(pw, function (r) {
      return "\\" + r.charCodeAt(0).toString(16) + " ";
    });
  }
  function lf(n, r, s, l, f, p, v, T) {
    (n.name = ""),
      v != null &&
      typeof v != "function" &&
      typeof v != "symbol" &&
      typeof v != "boolean"
        ? (n.type = v)
        : n.removeAttribute("type"),
      r != null
        ? v === "number"
          ? ((r === 0 && n.value === "") || n.value != r) &&
            (n.value = "" + _n(r))
          : n.value !== "" + _n(r) && (n.value = "" + _n(r))
        : (v !== "submit" && v !== "reset") || n.removeAttribute("value"),
      r != null
        ? uf(n, v, _n(r))
        : s != null
        ? uf(n, v, _n(s))
        : l != null && n.removeAttribute("value"),
      f == null && p != null && (n.defaultChecked = !!p),
      f != null &&
        (n.checked = f && typeof f != "function" && typeof f != "symbol"),
      T != null &&
      typeof T != "function" &&
      typeof T != "symbol" &&
      typeof T != "boolean"
        ? (n.name = "" + _n(T))
        : n.removeAttribute("name");
  }
  function $p(n, r, s, l, f, p, v, T) {
    if (
      (p != null &&
        typeof p != "function" &&
        typeof p != "symbol" &&
        typeof p != "boolean" &&
        (n.type = p),
      r != null || s != null)
    ) {
      if (!((p !== "submit" && p !== "reset") || r != null)) return;
      (s = s != null ? "" + _n(s) : ""),
        (r = r != null ? "" + _n(r) : s),
        T || r === n.value || (n.value = r),
        (n.defaultValue = r);
    }
    (l = l ?? f),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (n.checked = T ? n.checked : !!l),
      (n.defaultChecked = !!l),
      v != null &&
        typeof v != "function" &&
        typeof v != "symbol" &&
        typeof v != "boolean" &&
        (n.name = v);
  }
  function uf(n, r, s) {
    (r === "number" && Dl(n.ownerDocument) === n) ||
      n.defaultValue === "" + s ||
      (n.defaultValue = "" + s);
  }
  function Ti(n, r, s, l) {
    if (((n = n.options), r)) {
      r = {};
      for (var f = 0; f < s.length; f++) r["$" + s[f]] = !0;
      for (s = 0; s < n.length; s++)
        (f = r.hasOwnProperty("$" + n[s].value)),
          n[s].selected !== f && (n[s].selected = f),
          f && l && (n[s].defaultSelected = !0);
    } else {
      for (s = "" + _n(s), r = null, f = 0; f < n.length; f++) {
        if (n[f].value === s) {
          (n[f].selected = !0), l && (n[f].defaultSelected = !0);
          return;
        }
        r !== null || n[f].disabled || (r = n[f]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Fp(n, r, s) {
    if (
      r != null &&
      ((r = "" + _n(r)), r !== n.value && (n.value = r), s == null)
    ) {
      n.defaultValue !== r && (n.defaultValue = r);
      return;
    }
    n.defaultValue = s != null ? "" + _n(s) : "";
  }
  function Yp(n, r, s, l) {
    if (r == null) {
      if (l != null) {
        if (s != null) throw Error(i(92));
        if (he(l)) {
          if (1 < l.length) throw Error(i(93));
          l = l[0];
        }
        s = l;
      }
      s == null && (s = ""), (r = s);
    }
    (s = _n(r)),
      (n.defaultValue = s),
      (l = n.textContent),
      l === s && l !== "" && l !== null && (n.value = l);
  }
  function Ei(n, r) {
    if (r) {
      var s = n.firstChild;
      if (s && s === n.lastChild && s.nodeType === 3) {
        s.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var gw = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Gp(n, r, s) {
    var l = r.indexOf("--") === 0;
    s == null || typeof s == "boolean" || s === ""
      ? l
        ? n.setProperty(r, "")
        : r === "float"
        ? (n.cssFloat = "")
        : (n[r] = "")
      : l
      ? n.setProperty(r, s)
      : typeof s != "number" || s === 0 || gw.has(r)
      ? r === "float"
        ? (n.cssFloat = s)
        : (n[r] = ("" + s).trim())
      : (n[r] = s + "px");
  }
  function Kp(n, r, s) {
    if (r != null && typeof r != "object") throw Error(i(62));
    if (((n = n.style), s != null)) {
      for (var l in s)
        !s.hasOwnProperty(l) ||
          (r != null && r.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? n.setProperty(l, "")
            : l === "float"
            ? (n.cssFloat = "")
            : (n[l] = ""));
      for (var f in r)
        (l = r[f]), r.hasOwnProperty(f) && s[f] !== l && Gp(n, f, l);
    } else for (var p in r) r.hasOwnProperty(p) && Gp(n, p, r[p]);
  }
  function cf(n) {
    if (n.indexOf("-") === -1) return !1;
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var yw = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    vw =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ml(n) {
    return vw.test("" + n)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : n;
  }
  var ff = null;
  function df(n) {
    return (
      (n = n.target || n.srcElement || window),
      n.correspondingUseElement && (n = n.correspondingUseElement),
      n.nodeType === 3 ? n.parentNode : n
    );
  }
  var Ci = null,
    Ai = null;
  function Xp(n) {
    var r = qt(n);
    if (r && (n = r.stateNode)) {
      var s = n[Se] || null;
      e: switch (((n = r.stateNode), r.type)) {
        case "input":
          if (
            (lf(
              n,
              s.value,
              s.defaultValue,
              s.defaultValue,
              s.checked,
              s.defaultChecked,
              s.type,
              s.name
            ),
            (r = s.name),
            s.type === "radio" && r != null)
          ) {
            for (s = n; s.parentNode; ) s = s.parentNode;
            for (
              s = s.querySelectorAll(
                'input[name="' + Rn("" + r) + '"][type="radio"]'
              ),
                r = 0;
              r < s.length;
              r++
            ) {
              var l = s[r];
              if (l !== n && l.form === n.form) {
                var f = l[Se] || null;
                if (!f) throw Error(i(90));
                lf(
                  l,
                  f.value,
                  f.defaultValue,
                  f.defaultValue,
                  f.checked,
                  f.defaultChecked,
                  f.type,
                  f.name
                );
              }
            }
            for (r = 0; r < s.length; r++)
              (l = s[r]), l.form === n.form && qp(l);
          }
          break e;
        case "textarea":
          Fp(n, s.value, s.defaultValue);
          break e;
        case "select":
          (r = s.value), r != null && Ti(n, !!s.multiple, r, !1);
      }
    }
  }
  var hf = !1;
  function Qp(n, r, s) {
    if (hf) return n(r, s);
    hf = !0;
    try {
      var l = n(r);
      return l;
    } finally {
      if (
        ((hf = !1),
        (Ci !== null || Ai !== null) &&
          (pu(), Ci && ((r = Ci), (n = Ai), (Ai = Ci = null), Xp(r), n)))
      )
        for (r = 0; r < n.length; r++) Xp(n[r]);
    }
  }
  function Us(n, r) {
    var s = n.stateNode;
    if (s === null) return null;
    var l = s[Se] || null;
    if (l === null) return null;
    s = l[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) ||
          ((n = n.type),
          (l = !(
            n === "button" ||
            n === "input" ||
            n === "select" ||
            n === "textarea"
          ))),
          (n = !l);
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (s && typeof s != "function") throw Error(i(231, r, typeof s));
    return s;
  }
  var mf = !1;
  if (sn)
    try {
      var zs = {};
      Object.defineProperty(zs, "passive", {
        get: function () {
          mf = !0;
        },
      }),
        window.addEventListener("test", zs, zs),
        window.removeEventListener("test", zs, zs);
    } catch {
      mf = !1;
    }
  var na = null,
    pf = null,
    kl = null;
  function Zp() {
    if (kl) return kl;
    var n,
      r = pf,
      s = r.length,
      l,
      f = "value" in na ? na.value : na.textContent,
      p = f.length;
    for (n = 0; n < s && r[n] === f[n]; n++);
    var v = s - n;
    for (l = 1; l <= v && r[s - l] === f[p - l]; l++);
    return (kl = f.slice(n, 1 < l ? 1 - l : void 0));
  }
  function Ll(n) {
    var r = n.keyCode;
    return (
      "charCode" in n
        ? ((n = n.charCode), n === 0 && r === 13 && (n = 13))
        : (n = r),
      n === 10 && (n = 13),
      32 <= n || n === 13 ? n : 0
    );
  }
  function Bl() {
    return !0;
  }
  function Ip() {
    return !1;
  }
  function on(n) {
    function r(s, l, f, p, v) {
      (this._reactName = s),
        (this._targetInst = f),
        (this.type = l),
        (this.nativeEvent = p),
        (this.target = v),
        (this.currentTarget = null);
      for (var T in n)
        n.hasOwnProperty(T) && ((s = n[T]), (this[T] = s ? s(p) : p[T]));
      return (
        (this.isDefaultPrevented = (
          p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1
        )
          ? Bl
          : Ip),
        (this.isPropagationStopped = Ip),
        this
      );
    }
    return (
      E(r.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var s = this.nativeEvent;
          s &&
            (s.preventDefault
              ? s.preventDefault()
              : typeof s.returnValue != "unknown" && (s.returnValue = !1),
            (this.isDefaultPrevented = Bl));
        },
        stopPropagation: function () {
          var s = this.nativeEvent;
          s &&
            (s.stopPropagation
              ? s.stopPropagation()
              : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0),
            (this.isPropagationStopped = Bl));
        },
        persist: function () {},
        isPersistent: Bl,
      }),
      r
    );
  }
  var ja = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (n) {
        return n.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ul = on(ja),
    Ps = E({}, ja, { view: 0, detail: 0 }),
    bw = on(Ps),
    gf,
    yf,
    Vs,
    zl = E({}, Ps, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: bf,
      button: 0,
      buttons: 0,
      relatedTarget: function (n) {
        return n.relatedTarget === void 0
          ? n.fromElement === n.srcElement
            ? n.toElement
            : n.fromElement
          : n.relatedTarget;
      },
      movementX: function (n) {
        return "movementX" in n
          ? n.movementX
          : (n !== Vs &&
              (Vs && n.type === "mousemove"
                ? ((gf = n.screenX - Vs.screenX), (yf = n.screenY - Vs.screenY))
                : (yf = gf = 0),
              (Vs = n)),
            gf);
      },
      movementY: function (n) {
        return "movementY" in n ? n.movementY : yf;
      },
    }),
    Wp = on(zl),
    Sw = E({}, zl, { dataTransfer: 0 }),
    xw = on(Sw),
    ww = E({}, Ps, { relatedTarget: 0 }),
    vf = on(ww),
    Tw = E({}, ja, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Ew = on(Tw),
    Cw = E({}, ja, {
      clipboardData: function (n) {
        return "clipboardData" in n ? n.clipboardData : window.clipboardData;
      },
    }),
    Aw = on(Cw),
    _w = E({}, ja, { data: 0 }),
    Jp = on(_w),
    Rw = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Ow = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Nw = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Dw(n) {
    var r = this.nativeEvent;
    return r.getModifierState
      ? r.getModifierState(n)
      : (n = Nw[n])
      ? !!r[n]
      : !1;
  }
  function bf() {
    return Dw;
  }
  var Mw = E({}, Ps, {
      key: function (n) {
        if (n.key) {
          var r = Rw[n.key] || n.key;
          if (r !== "Unidentified") return r;
        }
        return n.type === "keypress"
          ? ((n = Ll(n)), n === 13 ? "Enter" : String.fromCharCode(n))
          : n.type === "keydown" || n.type === "keyup"
          ? Ow[n.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: bf,
      charCode: function (n) {
        return n.type === "keypress" ? Ll(n) : 0;
      },
      keyCode: function (n) {
        return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
      },
      which: function (n) {
        return n.type === "keypress"
          ? Ll(n)
          : n.type === "keydown" || n.type === "keyup"
          ? n.keyCode
          : 0;
      },
    }),
    kw = on(Mw),
    Lw = E({}, zl, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    eg = on(Lw),
    Bw = E({}, Ps, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: bf,
    }),
    Uw = on(Bw),
    zw = E({}, ja, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Pw = on(zw),
    Vw = E({}, zl, {
      deltaX: function (n) {
        return "deltaX" in n
          ? n.deltaX
          : "wheelDeltaX" in n
          ? -n.wheelDeltaX
          : 0;
      },
      deltaY: function (n) {
        return "deltaY" in n
          ? n.deltaY
          : "wheelDeltaY" in n
          ? -n.wheelDeltaY
          : "wheelDelta" in n
          ? -n.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    jw = on(Vw),
    Hw = E({}, ja, { newState: 0, oldState: 0 }),
    qw = on(Hw),
    $w = [9, 13, 27, 32],
    Sf = sn && "CompositionEvent" in window,
    js = null;
  sn && "documentMode" in document && (js = document.documentMode);
  var Fw = sn && "TextEvent" in window && !js,
    tg = sn && (!Sf || (js && 8 < js && 11 >= js)),
    ng = " ",
    rg = !1;
  function ag(n, r) {
    switch (n) {
      case "keyup":
        return $w.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ig(n) {
    return (n = n.detail), typeof n == "object" && "data" in n ? n.data : null;
  }
  var _i = !1;
  function Yw(n, r) {
    switch (n) {
      case "compositionend":
        return ig(r);
      case "keypress":
        return r.which !== 32 ? null : ((rg = !0), ng);
      case "textInput":
        return (n = r.data), n === ng && rg ? null : n;
      default:
        return null;
    }
  }
  function Gw(n, r) {
    if (_i)
      return n === "compositionend" || (!Sf && ag(n, r))
        ? ((n = Zp()), (kl = pf = na = null), (_i = !1), n)
        : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || (r.ctrlKey && r.altKey)) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return tg && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Kw = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function sg(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Kw[n.type] : r === "textarea";
  }
  function og(n, r, s, l) {
    Ci ? (Ai ? Ai.push(l) : (Ai = [l])) : (Ci = l),
      (r = Su(r, "onChange")),
      0 < r.length &&
        ((s = new Ul("onChange", "change", null, s, l)),
        n.push({ event: s, listeners: r }));
  }
  var Hs = null,
    qs = null;
  function Xw(n) {
    k0(n, 0);
  }
  function Pl(n) {
    var r = Ar(n);
    if (qp(r)) return n;
  }
  function lg(n, r) {
    if (n === "change") return r;
  }
  var ug = !1;
  if (sn) {
    var xf;
    if (sn) {
      var wf = "oninput" in document;
      if (!wf) {
        var cg = document.createElement("div");
        cg.setAttribute("oninput", "return;"),
          (wf = typeof cg.oninput == "function");
      }
      xf = wf;
    } else xf = !1;
    ug = xf && (!document.documentMode || 9 < document.documentMode);
  }
  function fg() {
    Hs && (Hs.detachEvent("onpropertychange", dg), (qs = Hs = null));
  }
  function dg(n) {
    if (n.propertyName === "value" && Pl(qs)) {
      var r = [];
      og(r, qs, n, df(n)), Qp(Xw, r);
    }
  }
  function Qw(n, r, s) {
    n === "focusin"
      ? (fg(), (Hs = r), (qs = s), Hs.attachEvent("onpropertychange", dg))
      : n === "focusout" && fg();
  }
  function Zw(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Pl(qs);
  }
  function Iw(n, r) {
    if (n === "click") return Pl(r);
  }
  function Ww(n, r) {
    if (n === "input" || n === "change") return Pl(r);
  }
  function Jw(n, r) {
    return (n === r && (n !== 0 || 1 / n === 1 / r)) || (n !== n && r !== r);
  }
  var dn = typeof Object.is == "function" ? Object.is : Jw;
  function $s(n, r) {
    if (dn(n, r)) return !0;
    if (
      typeof n != "object" ||
      n === null ||
      typeof r != "object" ||
      r === null
    )
      return !1;
    var s = Object.keys(n),
      l = Object.keys(r);
    if (s.length !== l.length) return !1;
    for (l = 0; l < s.length; l++) {
      var f = s[l];
      if (!Ns.call(r, f) || !dn(n[f], r[f])) return !1;
    }
    return !0;
  }
  function hg(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function mg(n, r) {
    var s = hg(n);
    n = 0;
    for (var l; s; ) {
      if (s.nodeType === 3) {
        if (((l = n + s.textContent.length), n <= r && l >= r))
          return { node: s, offset: r - n };
        n = l;
      }
      e: {
        for (; s; ) {
          if (s.nextSibling) {
            s = s.nextSibling;
            break e;
          }
          s = s.parentNode;
        }
        s = void 0;
      }
      s = hg(s);
    }
  }
  function pg(n, r) {
    return n && r
      ? n === r
        ? !0
        : n && n.nodeType === 3
        ? !1
        : r && r.nodeType === 3
        ? pg(n, r.parentNode)
        : "contains" in n
        ? n.contains(r)
        : n.compareDocumentPosition
        ? !!(n.compareDocumentPosition(r) & 16)
        : !1
      : !1;
  }
  function gg(n) {
    n =
      n != null &&
      n.ownerDocument != null &&
      n.ownerDocument.defaultView != null
        ? n.ownerDocument.defaultView
        : window;
    for (var r = Dl(n.document); r instanceof n.HTMLIFrameElement; ) {
      try {
        var s = typeof r.contentWindow.location.href == "string";
      } catch {
        s = !1;
      }
      if (s) n = r.contentWindow;
      else break;
      r = Dl(n.document);
    }
    return r;
  }
  function Tf(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return (
      r &&
      ((r === "input" &&
        (n.type === "text" ||
          n.type === "search" ||
          n.type === "tel" ||
          n.type === "url" ||
          n.type === "password")) ||
        r === "textarea" ||
        n.contentEditable === "true")
    );
  }
  function eT(n, r) {
    var s = gg(r);
    r = n.focusedElem;
    var l = n.selectionRange;
    if (
      s !== r &&
      r &&
      r.ownerDocument &&
      pg(r.ownerDocument.documentElement, r)
    ) {
      if (l !== null && Tf(r)) {
        if (
          ((n = l.start),
          (s = l.end),
          s === void 0 && (s = n),
          "selectionStart" in r)
        )
          (r.selectionStart = n),
            (r.selectionEnd = Math.min(s, r.value.length));
        else if (
          ((s = ((n = r.ownerDocument || document) && n.defaultView) || window),
          s.getSelection)
        ) {
          s = s.getSelection();
          var f = r.textContent.length,
            p = Math.min(l.start, f);
          (l = l.end === void 0 ? p : Math.min(l.end, f)),
            !s.extend && p > l && ((f = l), (l = p), (p = f)),
            (f = mg(r, p));
          var v = mg(r, l);
          f &&
            v &&
            (s.rangeCount !== 1 ||
              s.anchorNode !== f.node ||
              s.anchorOffset !== f.offset ||
              s.focusNode !== v.node ||
              s.focusOffset !== v.offset) &&
            ((n = n.createRange()),
            n.setStart(f.node, f.offset),
            s.removeAllRanges(),
            p > l
              ? (s.addRange(n), s.extend(v.node, v.offset))
              : (n.setEnd(v.node, v.offset), s.addRange(n)));
        }
      }
      for (n = [], s = r; (s = s.parentNode); )
        s.nodeType === 1 &&
          n.push({ element: s, left: s.scrollLeft, top: s.scrollTop });
      for (typeof r.focus == "function" && r.focus(), r = 0; r < n.length; r++)
        (s = n[r]),
          (s.element.scrollLeft = s.left),
          (s.element.scrollTop = s.top);
    }
  }
  var tT = sn && "documentMode" in document && 11 >= document.documentMode,
    Ri = null,
    Ef = null,
    Fs = null,
    Cf = !1;
  function yg(n, r, s) {
    var l =
      s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    Cf ||
      Ri == null ||
      Ri !== Dl(l) ||
      ((l = Ri),
      "selectionStart" in l && Tf(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Fs && $s(Fs, l)) ||
        ((Fs = l),
        (l = Su(Ef, "onSelect")),
        0 < l.length &&
          ((r = new Ul("onSelect", "select", null, r, s)),
          n.push({ event: r, listeners: l }),
          (r.target = Ri))));
  }
  function Ha(n, r) {
    var s = {};
    return (
      (s[n.toLowerCase()] = r.toLowerCase()),
      (s["Webkit" + n] = "webkit" + r),
      (s["Moz" + n] = "moz" + r),
      s
    );
  }
  var Oi = {
      animationend: Ha("Animation", "AnimationEnd"),
      animationiteration: Ha("Animation", "AnimationIteration"),
      animationstart: Ha("Animation", "AnimationStart"),
      transitionrun: Ha("Transition", "TransitionRun"),
      transitionstart: Ha("Transition", "TransitionStart"),
      transitioncancel: Ha("Transition", "TransitionCancel"),
      transitionend: Ha("Transition", "TransitionEnd"),
    },
    Af = {},
    vg = {};
  sn &&
    ((vg = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Oi.animationend.animation,
      delete Oi.animationiteration.animation,
      delete Oi.animationstart.animation),
    "TransitionEvent" in window || delete Oi.transitionend.transition);
  function qa(n) {
    if (Af[n]) return Af[n];
    if (!Oi[n]) return n;
    var r = Oi[n],
      s;
    for (s in r) if (r.hasOwnProperty(s) && s in vg) return (Af[n] = r[s]);
    return n;
  }
  var bg = qa("animationend"),
    Sg = qa("animationiteration"),
    xg = qa("animationstart"),
    nT = qa("transitionrun"),
    rT = qa("transitionstart"),
    aT = qa("transitioncancel"),
    wg = qa("transitionend"),
    Tg = new Map(),
    Eg =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
        " "
      );
  function Xn(n, r) {
    Tg.set(n, r), qe(r, [n]);
  }
  var On = [],
    Ni = 0,
    _f = 0;
  function Vl() {
    for (var n = Ni, r = (_f = Ni = 0); r < n; ) {
      var s = On[r];
      On[r++] = null;
      var l = On[r];
      On[r++] = null;
      var f = On[r];
      On[r++] = null;
      var p = On[r];
      if (((On[r++] = null), l !== null && f !== null)) {
        var v = l.pending;
        v === null ? (f.next = f) : ((f.next = v.next), (v.next = f)),
          (l.pending = f);
      }
      p !== 0 && Cg(s, f, p);
    }
  }
  function jl(n, r, s, l) {
    (On[Ni++] = n),
      (On[Ni++] = r),
      (On[Ni++] = s),
      (On[Ni++] = l),
      (_f |= l),
      (n.lanes |= l),
      (n = n.alternate),
      n !== null && (n.lanes |= l);
  }
  function Rf(n, r, s, l) {
    return jl(n, r, s, l), Hl(n);
  }
  function ra(n, r) {
    return jl(n, null, null, r), Hl(n);
  }
  function Cg(n, r, s) {
    n.lanes |= s;
    var l = n.alternate;
    l !== null && (l.lanes |= s);
    for (var f = !1, p = n.return; p !== null; )
      (p.childLanes |= s),
        (l = p.alternate),
        l !== null && (l.childLanes |= s),
        p.tag === 22 &&
          ((n = p.stateNode), n === null || n._visibility & 1 || (f = !0)),
        (n = p),
        (p = p.return);
    f &&
      r !== null &&
      n.tag === 3 &&
      ((p = n.stateNode),
      (f = 31 - Lt(s)),
      (p = p.hiddenUpdates),
      (n = p[f]),
      n === null ? (p[f] = [r]) : n.push(r),
      (r.lane = s | 536870912));
  }
  function Hl(n) {
    if (50 < go) throw ((go = 0), (Ld = null), Error(i(185)));
    for (var r = n.return; r !== null; ) (n = r), (r = n.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var Di = {},
    Ag = new WeakMap();
  function Nn(n, r) {
    if (typeof n == "object" && n !== null) {
      var s = Ag.get(n);
      return s !== void 0
        ? s
        : ((r = { value: n, source: r, stack: le(r) }), Ag.set(n, r), r);
    }
    return { value: n, source: r, stack: le(r) };
  }
  var Mi = [],
    ki = 0,
    ql = null,
    $l = 0,
    Dn = [],
    Mn = 0,
    $a = null,
    Or = 1,
    Nr = "";
  function Fa(n, r) {
    (Mi[ki++] = $l), (Mi[ki++] = ql), (ql = n), ($l = r);
  }
  function _g(n, r, s) {
    (Dn[Mn++] = Or), (Dn[Mn++] = Nr), (Dn[Mn++] = $a), ($a = n);
    var l = Or;
    n = Nr;
    var f = 32 - Lt(l) - 1;
    (l &= ~(1 << f)), (s += 1);
    var p = 32 - Lt(r) + f;
    if (30 < p) {
      var v = f - (f % 5);
      (p = (l & ((1 << v) - 1)).toString(32)),
        (l >>= v),
        (f -= v),
        (Or = (1 << (32 - Lt(r) + f)) | (s << f) | l),
        (Nr = p + n);
    } else (Or = (1 << p) | (s << f) | l), (Nr = n);
  }
  function Of(n) {
    n.return !== null && (Fa(n, 1), _g(n, 1, 0));
  }
  function Nf(n) {
    for (; n === ql; )
      (ql = Mi[--ki]), (Mi[ki] = null), ($l = Mi[--ki]), (Mi[ki] = null);
    for (; n === $a; )
      ($a = Dn[--Mn]),
        (Dn[Mn] = null),
        (Nr = Dn[--Mn]),
        (Dn[Mn] = null),
        (Or = Dn[--Mn]),
        (Dn[Mn] = null);
  }
  var tn = null,
    $t = null,
    Ge = !1,
    Qn = null,
    ur = !1,
    Df = Error(i(519));
  function Ya(n) {
    var r = Error(i(418, ""));
    throw (Ks(Nn(r, n)), Df);
  }
  function Rg(n) {
    var r = n.stateNode,
      s = n.type,
      l = n.memoizedProps;
    switch (((r[pe] = n), (r[Se] = l), s)) {
      case "dialog":
        Pe("cancel", r), Pe("close", r);
        break;
      case "iframe":
      case "object":
      case "embed":
        Pe("load", r);
        break;
      case "video":
      case "audio":
        for (s = 0; s < vo.length; s++) Pe(vo[s], r);
        break;
      case "source":
        Pe("error", r);
        break;
      case "img":
      case "image":
      case "link":
        Pe("error", r), Pe("load", r);
        break;
      case "details":
        Pe("toggle", r);
        break;
      case "input":
        Pe("invalid", r),
          $p(
            r,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0
          ),
          Nl(r);
        break;
      case "select":
        Pe("invalid", r);
        break;
      case "textarea":
        Pe("invalid", r), Yp(r, l.value, l.defaultValue, l.children), Nl(r);
    }
    (s = l.children),
      (typeof s != "string" && typeof s != "number" && typeof s != "bigint") ||
      r.textContent === "" + s ||
      l.suppressHydrationWarning === !0 ||
      z0(r.textContent, s)
        ? (l.popover != null && (Pe("beforetoggle", r), Pe("toggle", r)),
          l.onScroll != null && Pe("scroll", r),
          l.onScrollEnd != null && Pe("scrollend", r),
          l.onClick != null && (r.onclick = xu),
          (r = !0))
        : (r = !1),
      r || Ya(n);
  }
  function Og(n) {
    for (tn = n.return; tn; )
      switch (tn.tag) {
        case 3:
        case 27:
          ur = !0;
          return;
        case 5:
        case 13:
          ur = !1;
          return;
        default:
          tn = tn.return;
      }
  }
  function Ys(n) {
    if (n !== tn) return !1;
    if (!Ge) return Og(n), (Ge = !0), !1;
    var r = !1,
      s;
    if (
      ((s = n.tag !== 3 && n.tag !== 27) &&
        ((s = n.tag === 5) &&
          ((s = n.type),
          (s =
            !(s !== "form" && s !== "button") || Id(n.type, n.memoizedProps))),
        (s = !s)),
      s && (r = !0),
      r && $t && Ya(n),
      Og(n),
      n.tag === 13)
    ) {
      if (((n = n.memoizedState), (n = n !== null ? n.dehydrated : null), !n))
        throw Error(i(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8)
            if (((s = n.data), s === "/$")) {
              if (r === 0) {
                $t = In(n.nextSibling);
                break e;
              }
              r--;
            } else (s !== "$" && s !== "$!" && s !== "$?") || r++;
          n = n.nextSibling;
        }
        $t = null;
      }
    } else $t = tn ? In(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Gs() {
    ($t = tn = null), (Ge = !1);
  }
  function Ks(n) {
    Qn === null ? (Qn = [n]) : Qn.push(n);
  }
  var Xs = Error(i(460)),
    Ng = Error(i(474)),
    Mf = { then: function () {} };
  function Dg(n) {
    return (n = n.status), n === "fulfilled" || n === "rejected";
  }
  function Fl() {}
  function Mg(n, r, s) {
    switch (
      ((s = n[s]),
      s === void 0 ? n.push(r) : s !== r && (r.then(Fl, Fl), (r = s)),
      r.status)
    ) {
      case "fulfilled":
        return r.value;
      case "rejected":
        throw ((n = r.reason), n === Xs ? Error(i(483)) : n);
      default:
        if (typeof r.status == "string") r.then(Fl, Fl);
        else {
          if (((n = it), n !== null && 100 < n.shellSuspendCounter))
            throw Error(i(482));
          (n = r),
            (n.status = "pending"),
            n.then(
              function (l) {
                if (r.status === "pending") {
                  var f = r;
                  (f.status = "fulfilled"), (f.value = l);
                }
              },
              function (l) {
                if (r.status === "pending") {
                  var f = r;
                  (f.status = "rejected"), (f.reason = l);
                }
              }
            );
        }
        switch (r.status) {
          case "fulfilled":
            return r.value;
          case "rejected":
            throw ((n = r.reason), n === Xs ? Error(i(483)) : n);
        }
        throw ((Qs = r), Xs);
    }
  }
  var Qs = null;
  function kg() {
    if (Qs === null) throw Error(i(459));
    var n = Qs;
    return (Qs = null), n;
  }
  var Li = null,
    Zs = 0;
  function Yl(n) {
    var r = Zs;
    return (Zs += 1), Li === null && (Li = []), Mg(Li, n, r);
  }
  function Is(n, r) {
    (r = r.props.ref), (n.ref = r !== void 0 ? r : null);
  }
  function Gl(n, r) {
    throw r.$$typeof === u
      ? Error(i(525))
      : ((n = Object.prototype.toString.call(r)),
        Error(
          i(
            31,
            n === "[object Object]"
              ? "object with keys {" + Object.keys(r).join(", ") + "}"
              : n
          )
        ));
  }
  function Lg(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Bg(n) {
    function r(V, U) {
      if (n) {
        var H = V.deletions;
        H === null ? ((V.deletions = [U]), (V.flags |= 16)) : H.push(U);
      }
    }
    function s(V, U) {
      if (!n) return null;
      for (; U !== null; ) r(V, U), (U = U.sibling);
      return null;
    }
    function l(V) {
      for (var U = new Map(); V !== null; )
        V.key !== null ? U.set(V.key, V) : U.set(V.index, V), (V = V.sibling);
      return U;
    }
    function f(V, U) {
      return (V = pa(V, U)), (V.index = 0), (V.sibling = null), V;
    }
    function p(V, U, H) {
      return (
        (V.index = H),
        n
          ? ((H = V.alternate),
            H !== null
              ? ((H = H.index), H < U ? ((V.flags |= 33554434), U) : H)
              : ((V.flags |= 33554434), U))
          : ((V.flags |= 1048576), U)
      );
    }
    function v(V) {
      return n && V.alternate === null && (V.flags |= 33554434), V;
    }
    function T(V, U, H, W) {
      return U === null || U.tag !== 6
        ? ((U = Ad(H, V.mode, W)), (U.return = V), U)
        : ((U = f(U, H)), (U.return = V), U);
    }
    function D(V, U, H, W) {
      var de = H.type;
      return de === h
        ? I(V, U, H.props.children, W, H.key)
        : U !== null &&
          (U.elementType === de ||
            (typeof de == "object" &&
              de !== null &&
              de.$$typeof === O &&
              Lg(de) === U.type))
        ? ((U = f(U, H.props)), Is(U, H), (U.return = V), U)
        : ((U = cu(H.type, H.key, H.props, null, V.mode, W)),
          Is(U, H),
          (U.return = V),
          U);
    }
    function z(V, U, H, W) {
      return U === null ||
        U.tag !== 4 ||
        U.stateNode.containerInfo !== H.containerInfo ||
        U.stateNode.implementation !== H.implementation
        ? ((U = _d(H, V.mode, W)), (U.return = V), U)
        : ((U = f(U, H.children || [])), (U.return = V), U);
    }
    function I(V, U, H, W, de) {
      return U === null || U.tag !== 7
        ? ((U = ti(H, V.mode, W, de)), (U.return = V), U)
        : ((U = f(U, H)), (U.return = V), U);
    }
    function ee(V, U, H) {
      if (
        (typeof U == "string" && U !== "") ||
        typeof U == "number" ||
        typeof U == "bigint"
      )
        return (U = Ad("" + U, V.mode, H)), (U.return = V), U;
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case c:
            return (
              (H = cu(U.type, U.key, U.props, null, V.mode, H)),
              Is(H, U),
              (H.return = V),
              H
            );
          case d:
            return (U = _d(U, V.mode, H)), (U.return = V), U;
          case O:
            var W = U._init;
            return (U = W(U._payload)), ee(V, U, H);
        }
        if (he(U) || N(U))
          return (U = ti(U, V.mode, H, null)), (U.return = V), U;
        if (typeof U.then == "function") return ee(V, Yl(U), H);
        if (U.$$typeof === x) return ee(V, ou(V, U), H);
        Gl(V, U);
      }
      return null;
    }
    function $(V, U, H, W) {
      var de = U !== null ? U.key : null;
      if (
        (typeof H == "string" && H !== "") ||
        typeof H == "number" ||
        typeof H == "bigint"
      )
        return de !== null ? null : T(V, U, "" + H, W);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case c:
            return H.key === de ? D(V, U, H, W) : null;
          case d:
            return H.key === de ? z(V, U, H, W) : null;
          case O:
            return (de = H._init), (H = de(H._payload)), $(V, U, H, W);
        }
        if (he(H) || N(H)) return de !== null ? null : I(V, U, H, W, null);
        if (typeof H.then == "function") return $(V, U, Yl(H), W);
        if (H.$$typeof === x) return $(V, U, ou(V, H), W);
        Gl(V, H);
      }
      return null;
    }
    function Z(V, U, H, W, de) {
      if (
        (typeof W == "string" && W !== "") ||
        typeof W == "number" ||
        typeof W == "bigint"
      )
        return (V = V.get(H) || null), T(U, V, "" + W, de);
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case c:
            return (
              (V = V.get(W.key === null ? H : W.key) || null), D(U, V, W, de)
            );
          case d:
            return (
              (V = V.get(W.key === null ? H : W.key) || null), z(U, V, W, de)
            );
          case O:
            var Le = W._init;
            return (W = Le(W._payload)), Z(V, U, H, W, de);
        }
        if (he(W) || N(W)) return (V = V.get(H) || null), I(U, V, W, de, null);
        if (typeof W.then == "function") return Z(V, U, H, Yl(W), de);
        if (W.$$typeof === x) return Z(V, U, H, ou(U, W), de);
        Gl(U, W);
      }
      return null;
    }
    function ge(V, U, H, W) {
      for (
        var de = null, Le = null, ve = U, we = (U = 0), zt = null;
        ve !== null && we < H.length;
        we++
      ) {
        ve.index > we ? ((zt = ve), (ve = null)) : (zt = ve.sibling);
        var Ke = $(V, ve, H[we], W);
        if (Ke === null) {
          ve === null && (ve = zt);
          break;
        }
        n && ve && Ke.alternate === null && r(V, ve),
          (U = p(Ke, U, we)),
          Le === null ? (de = Ke) : (Le.sibling = Ke),
          (Le = Ke),
          (ve = zt);
      }
      if (we === H.length) return s(V, ve), Ge && Fa(V, we), de;
      if (ve === null) {
        for (; we < H.length; we++)
          (ve = ee(V, H[we], W)),
            ve !== null &&
              ((U = p(ve, U, we)),
              Le === null ? (de = ve) : (Le.sibling = ve),
              (Le = ve));
        return Ge && Fa(V, we), de;
      }
      for (ve = l(ve); we < H.length; we++)
        (zt = Z(ve, V, we, H[we], W)),
          zt !== null &&
            (n &&
              zt.alternate !== null &&
              ve.delete(zt.key === null ? we : zt.key),
            (U = p(zt, U, we)),
            Le === null ? (de = zt) : (Le.sibling = zt),
            (Le = zt));
      return (
        n &&
          ve.forEach(function (wa) {
            return r(V, wa);
          }),
        Ge && Fa(V, we),
        de
      );
    }
    function Re(V, U, H, W) {
      if (H == null) throw Error(i(151));
      for (
        var de = null,
          Le = null,
          ve = U,
          we = (U = 0),
          zt = null,
          Ke = H.next();
        ve !== null && !Ke.done;
        we++, Ke = H.next()
      ) {
        ve.index > we ? ((zt = ve), (ve = null)) : (zt = ve.sibling);
        var wa = $(V, ve, Ke.value, W);
        if (wa === null) {
          ve === null && (ve = zt);
          break;
        }
        n && ve && wa.alternate === null && r(V, ve),
          (U = p(wa, U, we)),
          Le === null ? (de = wa) : (Le.sibling = wa),
          (Le = wa),
          (ve = zt);
      }
      if (Ke.done) return s(V, ve), Ge && Fa(V, we), de;
      if (ve === null) {
        for (; !Ke.done; we++, Ke = H.next())
          (Ke = ee(V, Ke.value, W)),
            Ke !== null &&
              ((U = p(Ke, U, we)),
              Le === null ? (de = Ke) : (Le.sibling = Ke),
              (Le = Ke));
        return Ge && Fa(V, we), de;
      }
      for (ve = l(ve); !Ke.done; we++, Ke = H.next())
        (Ke = Z(ve, V, we, Ke.value, W)),
          Ke !== null &&
            (n &&
              Ke.alternate !== null &&
              ve.delete(Ke.key === null ? we : Ke.key),
            (U = p(Ke, U, we)),
            Le === null ? (de = Ke) : (Le.sibling = Ke),
            (Le = Ke));
      return (
        n &&
          ve.forEach(function (vE) {
            return r(V, vE);
          }),
        Ge && Fa(V, we),
        de
      );
    }
    function bt(V, U, H, W) {
      if (
        (typeof H == "object" &&
          H !== null &&
          H.type === h &&
          H.key === null &&
          (H = H.props.children),
        typeof H == "object" && H !== null)
      ) {
        switch (H.$$typeof) {
          case c:
            e: {
              for (var de = H.key; U !== null; ) {
                if (U.key === de) {
                  if (((de = H.type), de === h)) {
                    if (U.tag === 7) {
                      s(V, U.sibling),
                        (W = f(U, H.props.children)),
                        (W.return = V),
                        (V = W);
                      break e;
                    }
                  } else if (
                    U.elementType === de ||
                    (typeof de == "object" &&
                      de !== null &&
                      de.$$typeof === O &&
                      Lg(de) === U.type)
                  ) {
                    s(V, U.sibling),
                      (W = f(U, H.props)),
                      Is(W, H),
                      (W.return = V),
                      (V = W);
                    break e;
                  }
                  s(V, U);
                  break;
                } else r(V, U);
                U = U.sibling;
              }
              H.type === h
                ? ((W = ti(H.props.children, V.mode, W, H.key)),
                  (W.return = V),
                  (V = W))
                : ((W = cu(H.type, H.key, H.props, null, V.mode, W)),
                  Is(W, H),
                  (W.return = V),
                  (V = W));
            }
            return v(V);
          case d:
            e: {
              for (de = H.key; U !== null; ) {
                if (U.key === de)
                  if (
                    U.tag === 4 &&
                    U.stateNode.containerInfo === H.containerInfo &&
                    U.stateNode.implementation === H.implementation
                  ) {
                    s(V, U.sibling),
                      (W = f(U, H.children || [])),
                      (W.return = V),
                      (V = W);
                    break e;
                  } else {
                    s(V, U);
                    break;
                  }
                else r(V, U);
                U = U.sibling;
              }
              (W = _d(H, V.mode, W)), (W.return = V), (V = W);
            }
            return v(V);
          case O:
            return (de = H._init), (H = de(H._payload)), bt(V, U, H, W);
        }
        if (he(H)) return ge(V, U, H, W);
        if (N(H)) {
          if (((de = N(H)), typeof de != "function")) throw Error(i(150));
          return (H = de.call(H)), Re(V, U, H, W);
        }
        if (typeof H.then == "function") return bt(V, U, Yl(H), W);
        if (H.$$typeof === x) return bt(V, U, ou(V, H), W);
        Gl(V, H);
      }
      return (typeof H == "string" && H !== "") ||
        typeof H == "number" ||
        typeof H == "bigint"
        ? ((H = "" + H),
          U !== null && U.tag === 6
            ? (s(V, U.sibling), (W = f(U, H)), (W.return = V), (V = W))
            : (s(V, U), (W = Ad(H, V.mode, W)), (W.return = V), (V = W)),
          v(V))
        : s(V, U);
    }
    return function (V, U, H, W) {
      try {
        Zs = 0;
        var de = bt(V, U, H, W);
        return (Li = null), de;
      } catch (ve) {
        if (ve === Xs) throw ve;
        var Le = Un(29, ve, null, V.mode);
        return (Le.lanes = W), (Le.return = V), Le;
      } finally {
      }
    };
  }
  var Ga = Bg(!0),
    Ug = Bg(!1),
    Bi = Ye(null),
    Kl = Ye(0);
  function zg(n, r) {
    (n = Hr), De(Kl, n), De(Bi, r), (Hr = n | r.baseLanes);
  }
  function kf() {
    De(Kl, Hr), De(Bi, Bi.current);
  }
  function Lf() {
    (Hr = Kl.current), pt(Bi), pt(Kl);
  }
  var kn = Ye(null),
    cr = null;
  function aa(n) {
    var r = n.alternate;
    De(Mt, Mt.current & 1),
      De(kn, n),
      cr === null &&
        (r === null || Bi.current !== null || r.memoizedState !== null) &&
        (cr = n);
  }
  function Pg(n) {
    if (n.tag === 22) {
      if ((De(Mt, Mt.current), De(kn, n), cr === null)) {
        var r = n.alternate;
        r !== null && r.memoizedState !== null && (cr = n);
      }
    } else ia();
  }
  function ia() {
    De(Mt, Mt.current), De(kn, kn.current);
  }
  function Dr(n) {
    pt(kn), cr === n && (cr = null), pt(Mt);
  }
  var Mt = Ye(0);
  function Xl(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var s = r.memoizedState;
        if (
          s !== null &&
          ((s = s.dehydrated), s === null || s.data === "$?" || s.data === "$!")
        )
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        (r.child.return = r), (r = r.child);
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      (r.sibling.return = r.return), (r = r.sibling);
    }
    return null;
  }
  var iT =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var n = [],
              r = (this.signal = {
                aborted: !1,
                addEventListener: function (s, l) {
                  n.push(l);
                },
              });
            this.abort = function () {
              (r.aborted = !0),
                n.forEach(function (s) {
                  return s();
                });
            };
          },
    sT = e.unstable_scheduleCallback,
    oT = e.unstable_NormalPriority,
    kt = {
      $$typeof: x,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Bf() {
    return { controller: new iT(), data: new Map(), refCount: 0 };
  }
  function Ws(n) {
    n.refCount--,
      n.refCount === 0 &&
        sT(oT, function () {
          n.controller.abort();
        });
  }
  var Js = null,
    Uf = 0,
    Ui = 0,
    zi = null;
  function lT(n, r) {
    if (Js === null) {
      var s = (Js = []);
      (Uf = 0),
        (Ui = qd()),
        (zi = {
          status: "pending",
          value: void 0,
          then: function (l) {
            s.push(l);
          },
        });
    }
    return Uf++, r.then(Vg, Vg), r;
  }
  function Vg() {
    if (--Uf === 0 && Js !== null) {
      zi !== null && (zi.status = "fulfilled");
      var n = Js;
      (Js = null), (Ui = 0), (zi = null);
      for (var r = 0; r < n.length; r++) (0, n[r])();
    }
  }
  function uT(n, r) {
    var s = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (f) {
          s.push(f);
        },
      };
    return (
      n.then(
        function () {
          (l.status = "fulfilled"), (l.value = r);
          for (var f = 0; f < s.length; f++) (0, s[f])(r);
        },
        function (f) {
          for (l.status = "rejected", l.reason = f, f = 0; f < s.length; f++)
            (0, s[f])(void 0);
        }
      ),
      l
    );
  }
  var jg = Y.S;
  Y.S = function (n, r) {
    typeof r == "object" &&
      r !== null &&
      typeof r.then == "function" &&
      lT(n, r),
      jg !== null && jg(n, r);
  };
  var Ka = Ye(null);
  function zf() {
    var n = Ka.current;
    return n !== null ? n : it.pooledCache;
  }
  function Ql(n, r) {
    r === null ? De(Ka, Ka.current) : De(Ka, r.pool);
  }
  function Hg() {
    var n = zf();
    return n === null ? null : { parent: kt._currentValue, pool: n };
  }
  var sa = 0,
    ke = null,
    Ie = null,
    _t = null,
    Zl = !1,
    Pi = !1,
    Xa = !1,
    Il = 0,
    eo = 0,
    Vi = null,
    cT = 0;
  function Et() {
    throw Error(i(321));
  }
  function Pf(n, r) {
    if (r === null) return !1;
    for (var s = 0; s < r.length && s < n.length; s++)
      if (!dn(n[s], r[s])) return !1;
    return !0;
  }
  function Vf(n, r, s, l, f, p) {
    return (
      (sa = p),
      (ke = r),
      (r.memoizedState = null),
      (r.updateQueue = null),
      (r.lanes = 0),
      (Y.H = n === null || n.memoizedState === null ? Qa : oa),
      (Xa = !1),
      (p = s(l, f)),
      (Xa = !1),
      Pi && (p = $g(r, s, l, f)),
      qg(n),
      p
    );
  }
  function qg(n) {
    Y.H = fr;
    var r = Ie !== null && Ie.next !== null;
    if (((sa = 0), (_t = Ie = ke = null), (Zl = !1), (eo = 0), (Vi = null), r))
      throw Error(i(300));
    n === null ||
      Bt ||
      ((n = n.dependencies), n !== null && su(n) && (Bt = !0));
  }
  function $g(n, r, s, l) {
    ke = n;
    var f = 0;
    do {
      if ((Pi && (Vi = null), (eo = 0), (Pi = !1), 25 <= f))
        throw Error(i(301));
      if (((f += 1), (_t = Ie = null), n.updateQueue != null)) {
        var p = n.updateQueue;
        (p.lastEffect = null),
          (p.events = null),
          (p.stores = null),
          p.memoCache != null && (p.memoCache.index = 0);
      }
      (Y.H = Za), (p = r(s, l));
    } while (Pi);
    return p;
  }
  function fT() {
    var n = Y.H,
      r = n.useState()[0];
    return (
      (r = typeof r.then == "function" ? to(r) : r),
      (n = n.useState()[0]),
      (Ie !== null ? Ie.memoizedState : null) !== n && (ke.flags |= 1024),
      r
    );
  }
  function jf() {
    var n = Il !== 0;
    return (Il = 0), n;
  }
  function Hf(n, r, s) {
    (r.updateQueue = n.updateQueue), (r.flags &= -2053), (n.lanes &= ~s);
  }
  function qf(n) {
    if (Zl) {
      for (n = n.memoizedState; n !== null; ) {
        var r = n.queue;
        r !== null && (r.pending = null), (n = n.next);
      }
      Zl = !1;
    }
    (sa = 0), (_t = Ie = ke = null), (Pi = !1), (eo = Il = 0), (Vi = null);
  }
  function ln() {
    var n = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return _t === null ? (ke.memoizedState = _t = n) : (_t = _t.next = n), _t;
  }
  function Rt() {
    if (Ie === null) {
      var n = ke.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Ie.next;
    var r = _t === null ? ke.memoizedState : _t.next;
    if (r !== null) (_t = r), (Ie = n);
    else {
      if (n === null)
        throw ke.alternate === null ? Error(i(467)) : Error(i(310));
      (Ie = n),
        (n = {
          memoizedState: Ie.memoizedState,
          baseState: Ie.baseState,
          baseQueue: Ie.baseQueue,
          queue: Ie.queue,
          next: null,
        }),
        _t === null ? (ke.memoizedState = _t = n) : (_t = _t.next = n);
    }
    return _t;
  }
  var Wl;
  Wl = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function to(n) {
    var r = eo;
    return (
      (eo += 1),
      Vi === null && (Vi = []),
      (n = Mg(Vi, n, r)),
      (r = ke),
      (_t === null ? r.memoizedState : _t.next) === null &&
        ((r = r.alternate),
        (Y.H = r === null || r.memoizedState === null ? Qa : oa)),
      n
    );
  }
  function Jl(n) {
    if (n !== null && typeof n == "object") {
      if (typeof n.then == "function") return to(n);
      if (n.$$typeof === x) return Qt(n);
    }
    throw Error(i(438, String(n)));
  }
  function $f(n) {
    var r = null,
      s = ke.updateQueue;
    if ((s !== null && (r = s.memoCache), r == null)) {
      var l = ke.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (r = {
              data: l.data.map(function (f) {
                return f.slice();
              }),
              index: 0,
            })));
    }
    if (
      (r == null && (r = { data: [], index: 0 }),
      s === null && ((s = Wl()), (ke.updateQueue = s)),
      (s.memoCache = r),
      (s = r.data[r.index]),
      s === void 0)
    )
      for (s = r.data[r.index] = Array(n), l = 0; l < n; l++) s[l] = P;
    return r.index++, s;
  }
  function Mr(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function eu(n) {
    var r = Rt();
    return Ff(r, Ie, n);
  }
  function Ff(n, r, s) {
    var l = n.queue;
    if (l === null) throw Error(i(311));
    l.lastRenderedReducer = s;
    var f = n.baseQueue,
      p = l.pending;
    if (p !== null) {
      if (f !== null) {
        var v = f.next;
        (f.next = p.next), (p.next = v);
      }
      (r.baseQueue = f = p), (l.pending = null);
    }
    if (((p = n.baseState), f === null)) n.memoizedState = p;
    else {
      r = f.next;
      var T = (v = null),
        D = null,
        z = r,
        I = !1;
      do {
        var ee = z.lane & -536870913;
        if (ee !== z.lane ? ($e & ee) === ee : (sa & ee) === ee) {
          var $ = z.revertLane;
          if ($ === 0)
            D !== null &&
              (D = D.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: z.action,
                  hasEagerState: z.hasEagerState,
                  eagerState: z.eagerState,
                  next: null,
                }),
              ee === Ui && (I = !0);
          else if ((sa & $) === $) {
            (z = z.next), $ === Ui && (I = !0);
            continue;
          } else
            (ee = {
              lane: 0,
              revertLane: z.revertLane,
              action: z.action,
              hasEagerState: z.hasEagerState,
              eagerState: z.eagerState,
              next: null,
            }),
              D === null ? ((T = D = ee), (v = p)) : (D = D.next = ee),
              (ke.lanes |= $),
              (ga |= $);
          (ee = z.action),
            Xa && s(p, ee),
            (p = z.hasEagerState ? z.eagerState : s(p, ee));
        } else
          ($ = {
            lane: ee,
            revertLane: z.revertLane,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null,
          }),
            D === null ? ((T = D = $), (v = p)) : (D = D.next = $),
            (ke.lanes |= ee),
            (ga |= ee);
        z = z.next;
      } while (z !== null && z !== r);
      if (
        (D === null ? (v = p) : (D.next = T),
        !dn(p, n.memoizedState) && ((Bt = !0), I && ((s = zi), s !== null)))
      )
        throw s;
      (n.memoizedState = p),
        (n.baseState = v),
        (n.baseQueue = D),
        (l.lastRenderedState = p);
    }
    return f === null && (l.lanes = 0), [n.memoizedState, l.dispatch];
  }
  function Yf(n) {
    var r = Rt(),
      s = r.queue;
    if (s === null) throw Error(i(311));
    s.lastRenderedReducer = n;
    var l = s.dispatch,
      f = s.pending,
      p = r.memoizedState;
    if (f !== null) {
      s.pending = null;
      var v = (f = f.next);
      do (p = n(p, v.action)), (v = v.next);
      while (v !== f);
      dn(p, r.memoizedState) || (Bt = !0),
        (r.memoizedState = p),
        r.baseQueue === null && (r.baseState = p),
        (s.lastRenderedState = p);
    }
    return [p, l];
  }
  function Fg(n, r, s) {
    var l = ke,
      f = Rt(),
      p = Ge;
    if (p) {
      if (s === void 0) throw Error(i(407));
      s = s();
    } else s = r();
    var v = !dn((Ie || f).memoizedState, s);
    if (
      (v && ((f.memoizedState = s), (Bt = !0)),
      (f = f.queue),
      Xf(Kg.bind(null, l, f, n), [n]),
      f.getSnapshot !== r || v || (_t !== null && _t.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        ji(9, Gg.bind(null, l, f, s, r), { destroy: void 0 }, null),
        it === null)
      )
        throw Error(i(349));
      p || sa & 60 || Yg(l, r, s);
    }
    return s;
  }
  function Yg(n, r, s) {
    (n.flags |= 16384),
      (n = { getSnapshot: r, value: s }),
      (r = ke.updateQueue),
      r === null
        ? ((r = Wl()), (ke.updateQueue = r), (r.stores = [n]))
        : ((s = r.stores), s === null ? (r.stores = [n]) : s.push(n));
  }
  function Gg(n, r, s, l) {
    (r.value = s), (r.getSnapshot = l), Xg(r) && Qg(n);
  }
  function Kg(n, r, s) {
    return s(function () {
      Xg(r) && Qg(n);
    });
  }
  function Xg(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var s = r();
      return !dn(n, s);
    } catch {
      return !0;
    }
  }
  function Qg(n) {
    var r = ra(n, 2);
    r !== null && nn(r, n, 2);
  }
  function Gf(n) {
    var r = ln();
    if (typeof n == "function") {
      var s = n;
      if (((n = s()), Xa)) {
        Kn(!0);
        try {
          s();
        } finally {
          Kn(!1);
        }
      }
    }
    return (
      (r.memoizedState = r.baseState = n),
      (r.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Mr,
        lastRenderedState: n,
      }),
      r
    );
  }
  function Zg(n, r, s, l) {
    return (n.baseState = s), Ff(n, Ie, typeof l == "function" ? l : Mr);
  }
  function dT(n, r, s, l, f) {
    if (ru(n)) throw Error(i(485));
    if (((n = r.action), n !== null)) {
      var p = {
        payload: f,
        action: n,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (v) {
          p.listeners.push(v);
        },
      };
      Y.T !== null ? s(!0) : (p.isTransition = !1),
        l(p),
        (s = r.pending),
        s === null
          ? ((p.next = r.pending = p), Ig(r, p))
          : ((p.next = s.next), (r.pending = s.next = p));
    }
  }
  function Ig(n, r) {
    var s = r.action,
      l = r.payload,
      f = n.state;
    if (r.isTransition) {
      var p = Y.T,
        v = {};
      Y.T = v;
      try {
        var T = s(f, l),
          D = Y.S;
        D !== null && D(v, T), Wg(n, r, T);
      } catch (z) {
        Kf(n, r, z);
      } finally {
        Y.T = p;
      }
    } else
      try {
        (p = s(f, l)), Wg(n, r, p);
      } catch (z) {
        Kf(n, r, z);
      }
  }
  function Wg(n, r, s) {
    s !== null && typeof s == "object" && typeof s.then == "function"
      ? s.then(
          function (l) {
            Jg(n, r, l);
          },
          function (l) {
            return Kf(n, r, l);
          }
        )
      : Jg(n, r, s);
  }
  function Jg(n, r, s) {
    (r.status = "fulfilled"),
      (r.value = s),
      ey(r),
      (n.state = s),
      (r = n.pending),
      r !== null &&
        ((s = r.next),
        s === r ? (n.pending = null) : ((s = s.next), (r.next = s), Ig(n, s)));
  }
  function Kf(n, r, s) {
    var l = n.pending;
    if (((n.pending = null), l !== null)) {
      l = l.next;
      do (r.status = "rejected"), (r.reason = s), ey(r), (r = r.next);
      while (r !== l);
    }
    n.action = null;
  }
  function ey(n) {
    n = n.listeners;
    for (var r = 0; r < n.length; r++) (0, n[r])();
  }
  function ty(n, r) {
    return r;
  }
  function ny(n, r) {
    if (Ge) {
      var s = it.formState;
      if (s !== null) {
        e: {
          var l = ke;
          if (Ge) {
            if ($t) {
              t: {
                for (var f = $t, p = ur; f.nodeType !== 8; ) {
                  if (!p) {
                    f = null;
                    break t;
                  }
                  if (((f = In(f.nextSibling)), f === null)) {
                    f = null;
                    break t;
                  }
                }
                (p = f.data), (f = p === "F!" || p === "F" ? f : null);
              }
              if (f) {
                ($t = In(f.nextSibling)), (l = f.data === "F!");
                break e;
              }
            }
            Ya(l);
          }
          l = !1;
        }
        l && (r = s[0]);
      }
    }
    return (
      (s = ln()),
      (s.memoizedState = s.baseState = r),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ty,
        lastRenderedState: r,
      }),
      (s.queue = l),
      (s = Sy.bind(null, ke, l)),
      (l.dispatch = s),
      (l = Gf(!1)),
      (p = Jf.bind(null, ke, !1, l.queue)),
      (l = ln()),
      (f = { state: r, dispatch: null, action: n, pending: null }),
      (l.queue = f),
      (s = dT.bind(null, ke, f, p, s)),
      (f.dispatch = s),
      (l.memoizedState = n),
      [r, s, !1]
    );
  }
  function ry(n) {
    var r = Rt();
    return ay(r, Ie, n);
  }
  function ay(n, r, s) {
    (r = Ff(n, r, ty)[0]),
      (n = eu(Mr)[0]),
      (r =
        typeof r == "object" && r !== null && typeof r.then == "function"
          ? to(r)
          : r);
    var l = Rt(),
      f = l.queue,
      p = f.dispatch;
    return (
      s !== l.memoizedState &&
        ((ke.flags |= 2048),
        ji(9, hT.bind(null, f, s), { destroy: void 0 }, null)),
      [r, p, n]
    );
  }
  function hT(n, r) {
    n.action = r;
  }
  function iy(n) {
    var r = Rt(),
      s = Ie;
    if (s !== null) return ay(r, s, n);
    Rt(), (r = r.memoizedState), (s = Rt());
    var l = s.queue.dispatch;
    return (s.memoizedState = n), [r, l, !1];
  }
  function ji(n, r, s, l) {
    return (
      (n = { tag: n, create: r, inst: s, deps: l, next: null }),
      (r = ke.updateQueue),
      r === null && ((r = Wl()), (ke.updateQueue = r)),
      (s = r.lastEffect),
      s === null
        ? (r.lastEffect = n.next = n)
        : ((l = s.next), (s.next = n), (n.next = l), (r.lastEffect = n)),
      n
    );
  }
  function sy() {
    return Rt().memoizedState;
  }
  function tu(n, r, s, l) {
    var f = ln();
    (ke.flags |= n),
      (f.memoizedState = ji(
        1 | r,
        s,
        { destroy: void 0 },
        l === void 0 ? null : l
      ));
  }
  function nu(n, r, s, l) {
    var f = Rt();
    l = l === void 0 ? null : l;
    var p = f.memoizedState.inst;
    Ie !== null && l !== null && Pf(l, Ie.memoizedState.deps)
      ? (f.memoizedState = ji(r, s, p, l))
      : ((ke.flags |= n), (f.memoizedState = ji(1 | r, s, p, l)));
  }
  function oy(n, r) {
    tu(8390656, 8, n, r);
  }
  function Xf(n, r) {
    nu(2048, 8, n, r);
  }
  function ly(n, r) {
    return nu(4, 2, n, r);
  }
  function uy(n, r) {
    return nu(4, 4, n, r);
  }
  function cy(n, r) {
    if (typeof r == "function") {
      n = n();
      var s = r(n);
      return function () {
        typeof s == "function" ? s() : r(null);
      };
    }
    if (r != null)
      return (
        (n = n()),
        (r.current = n),
        function () {
          r.current = null;
        }
      );
  }
  function fy(n, r, s) {
    (s = s != null ? s.concat([n]) : null), nu(4, 4, cy.bind(null, r, n), s);
  }
  function Qf() {}
  function dy(n, r) {
    var s = Rt();
    r = r === void 0 ? null : r;
    var l = s.memoizedState;
    return r !== null && Pf(r, l[1]) ? l[0] : ((s.memoizedState = [n, r]), n);
  }
  function hy(n, r) {
    var s = Rt();
    r = r === void 0 ? null : r;
    var l = s.memoizedState;
    if (r !== null && Pf(r, l[1])) return l[0];
    if (((l = n()), Xa)) {
      Kn(!0);
      try {
        n();
      } finally {
        Kn(!1);
      }
    }
    return (s.memoizedState = [l, r]), l;
  }
  function Zf(n, r, s) {
    return s === void 0 || sa & 1073741824
      ? (n.memoizedState = r)
      : ((n.memoizedState = s), (n = p0()), (ke.lanes |= n), (ga |= n), s);
  }
  function my(n, r, s, l) {
    return dn(s, r)
      ? s
      : Bi.current !== null
      ? ((n = Zf(n, s, l)), dn(n, r) || (Bt = !0), n)
      : sa & 42
      ? ((n = p0()), (ke.lanes |= n), (ga |= n), r)
      : ((Bt = !0), (n.memoizedState = s));
  }
  function py(n, r, s, l, f) {
    var p = se.p;
    se.p = p !== 0 && 8 > p ? p : 8;
    var v = Y.T,
      T = {};
    (Y.T = T), Jf(n, !1, r, s);
    try {
      var D = f(),
        z = Y.S;
      if (
        (z !== null && z(T, D),
        D !== null && typeof D == "object" && typeof D.then == "function")
      ) {
        var I = uT(D, l);
        no(n, r, I, gn(n));
      } else no(n, r, l, gn(n));
    } catch (ee) {
      no(n, r, { then: function () {}, status: "rejected", reason: ee }, gn());
    } finally {
      (se.p = p), (Y.T = v);
    }
  }
  function mT() {}
  function If(n, r, s, l) {
    if (n.tag !== 5) throw Error(i(476));
    var f = gy(n).queue;
    py(
      n,
      f,
      r,
      Me,
      s === null
        ? mT
        : function () {
            return yy(n), s(l);
          }
    );
  }
  function gy(n) {
    var r = n.memoizedState;
    if (r !== null) return r;
    r = {
      memoizedState: Me,
      baseState: Me,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Mr,
        lastRenderedState: Me,
      },
      next: null,
    };
    var s = {};
    return (
      (r.next = {
        memoizedState: s,
        baseState: s,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Mr,
          lastRenderedState: s,
        },
        next: null,
      }),
      (n.memoizedState = r),
      (n = n.alternate),
      n !== null && (n.memoizedState = r),
      r
    );
  }
  function yy(n) {
    var r = gy(n).next.queue;
    no(n, r, {}, gn());
  }
  function Wf() {
    return Qt(To);
  }
  function vy() {
    return Rt().memoizedState;
  }
  function by() {
    return Rt().memoizedState;
  }
  function pT(n) {
    for (var r = n.return; r !== null; ) {
      switch (r.tag) {
        case 24:
        case 3:
          var s = gn();
          n = ca(s);
          var l = fa(r, n, s);
          l !== null && (nn(l, r, s), io(l, r, s)),
            (r = { cache: Bf() }),
            (n.payload = r);
          return;
      }
      r = r.return;
    }
  }
  function gT(n, r, s) {
    var l = gn();
    (s = {
      lane: l,
      revertLane: 0,
      action: s,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      ru(n)
        ? xy(r, s)
        : ((s = Rf(n, r, s, l)), s !== null && (nn(s, n, l), wy(s, r, l)));
  }
  function Sy(n, r, s) {
    var l = gn();
    no(n, r, s, l);
  }
  function no(n, r, s, l) {
    var f = {
      lane: l,
      revertLane: 0,
      action: s,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (ru(n)) xy(r, f);
    else {
      var p = n.alternate;
      if (
        n.lanes === 0 &&
        (p === null || p.lanes === 0) &&
        ((p = r.lastRenderedReducer), p !== null)
      )
        try {
          var v = r.lastRenderedState,
            T = p(v, s);
          if (((f.hasEagerState = !0), (f.eagerState = T), dn(T, v)))
            return jl(n, r, f, 0), it === null && Vl(), !1;
        } catch {
        } finally {
        }
      if (((s = Rf(n, r, f, l)), s !== null))
        return nn(s, n, l), wy(s, r, l), !0;
    }
    return !1;
  }
  function Jf(n, r, s, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: qd(),
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      ru(n))
    ) {
      if (r) throw Error(i(479));
    } else (r = Rf(n, s, l, 2)), r !== null && nn(r, n, 2);
  }
  function ru(n) {
    var r = n.alternate;
    return n === ke || (r !== null && r === ke);
  }
  function xy(n, r) {
    Pi = Zl = !0;
    var s = n.pending;
    s === null ? (r.next = r) : ((r.next = s.next), (s.next = r)),
      (n.pending = r);
  }
  function wy(n, r, s) {
    if (s & 4194176) {
      var l = r.lanes;
      (l &= n.pendingLanes), (s |= l), (r.lanes = s), ye(n, s);
    }
  }
  var fr = {
    readContext: Qt,
    use: Jl,
    useCallback: Et,
    useContext: Et,
    useEffect: Et,
    useImperativeHandle: Et,
    useLayoutEffect: Et,
    useInsertionEffect: Et,
    useMemo: Et,
    useReducer: Et,
    useRef: Et,
    useState: Et,
    useDebugValue: Et,
    useDeferredValue: Et,
    useTransition: Et,
    useSyncExternalStore: Et,
    useId: Et,
  };
  (fr.useCacheRefresh = Et),
    (fr.useMemoCache = Et),
    (fr.useHostTransitionStatus = Et),
    (fr.useFormState = Et),
    (fr.useActionState = Et),
    (fr.useOptimistic = Et);
  var Qa = {
    readContext: Qt,
    use: Jl,
    useCallback: function (n, r) {
      return (ln().memoizedState = [n, r === void 0 ? null : r]), n;
    },
    useContext: Qt,
    useEffect: oy,
    useImperativeHandle: function (n, r, s) {
      (s = s != null ? s.concat([n]) : null),
        tu(4194308, 4, cy.bind(null, r, n), s);
    },
    useLayoutEffect: function (n, r) {
      return tu(4194308, 4, n, r);
    },
    useInsertionEffect: function (n, r) {
      tu(4, 2, n, r);
    },
    useMemo: function (n, r) {
      var s = ln();
      r = r === void 0 ? null : r;
      var l = n();
      if (Xa) {
        Kn(!0);
        try {
          n();
        } finally {
          Kn(!1);
        }
      }
      return (s.memoizedState = [l, r]), l;
    },
    useReducer: function (n, r, s) {
      var l = ln();
      if (s !== void 0) {
        var f = s(r);
        if (Xa) {
          Kn(!0);
          try {
            s(r);
          } finally {
            Kn(!1);
          }
        }
      } else f = r;
      return (
        (l.memoizedState = l.baseState = f),
        (n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: n,
          lastRenderedState: f,
        }),
        (l.queue = n),
        (n = n.dispatch = gT.bind(null, ke, n)),
        [l.memoizedState, n]
      );
    },
    useRef: function (n) {
      var r = ln();
      return (n = { current: n }), (r.memoizedState = n);
    },
    useState: function (n) {
      n = Gf(n);
      var r = n.queue,
        s = Sy.bind(null, ke, r);
      return (r.dispatch = s), [n.memoizedState, s];
    },
    useDebugValue: Qf,
    useDeferredValue: function (n, r) {
      var s = ln();
      return Zf(s, n, r);
    },
    useTransition: function () {
      var n = Gf(!1);
      return (
        (n = py.bind(null, ke, n.queue, !0, !1)),
        (ln().memoizedState = n),
        [!1, n]
      );
    },
    useSyncExternalStore: function (n, r, s) {
      var l = ke,
        f = ln();
      if (Ge) {
        if (s === void 0) throw Error(i(407));
        s = s();
      } else {
        if (((s = r()), it === null)) throw Error(i(349));
        $e & 60 || Yg(l, r, s);
      }
      f.memoizedState = s;
      var p = { value: s, getSnapshot: r };
      return (
        (f.queue = p),
        oy(Kg.bind(null, l, p, n), [n]),
        (l.flags |= 2048),
        ji(9, Gg.bind(null, l, p, s, r), { destroy: void 0 }, null),
        s
      );
    },
    useId: function () {
      var n = ln(),
        r = it.identifierPrefix;
      if (Ge) {
        var s = Nr,
          l = Or;
        (s = (l & ~(1 << (32 - Lt(l) - 1))).toString(32) + s),
          (r = ":" + r + "R" + s),
          (s = Il++),
          0 < s && (r += "H" + s.toString(32)),
          (r += ":");
      } else (s = cT++), (r = ":" + r + "r" + s.toString(32) + ":");
      return (n.memoizedState = r);
    },
    useCacheRefresh: function () {
      return (ln().memoizedState = pT.bind(null, ke));
    },
  };
  (Qa.useMemoCache = $f),
    (Qa.useHostTransitionStatus = Wf),
    (Qa.useFormState = ny),
    (Qa.useActionState = ny),
    (Qa.useOptimistic = function (n) {
      var r = ln();
      r.memoizedState = r.baseState = n;
      var s = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (r.queue = s), (r = Jf.bind(null, ke, !0, s)), (s.dispatch = r), [n, r]
      );
    });
  var oa = {
    readContext: Qt,
    use: Jl,
    useCallback: dy,
    useContext: Qt,
    useEffect: Xf,
    useImperativeHandle: fy,
    useInsertionEffect: ly,
    useLayoutEffect: uy,
    useMemo: hy,
    useReducer: eu,
    useRef: sy,
    useState: function () {
      return eu(Mr);
    },
    useDebugValue: Qf,
    useDeferredValue: function (n, r) {
      var s = Rt();
      return my(s, Ie.memoizedState, n, r);
    },
    useTransition: function () {
      var n = eu(Mr)[0],
        r = Rt().memoizedState;
      return [typeof n == "boolean" ? n : to(n), r];
    },
    useSyncExternalStore: Fg,
    useId: vy,
  };
  (oa.useCacheRefresh = by),
    (oa.useMemoCache = $f),
    (oa.useHostTransitionStatus = Wf),
    (oa.useFormState = ry),
    (oa.useActionState = ry),
    (oa.useOptimistic = function (n, r) {
      var s = Rt();
      return Zg(s, Ie, n, r);
    });
  var Za = {
    readContext: Qt,
    use: Jl,
    useCallback: dy,
    useContext: Qt,
    useEffect: Xf,
    useImperativeHandle: fy,
    useInsertionEffect: ly,
    useLayoutEffect: uy,
    useMemo: hy,
    useReducer: Yf,
    useRef: sy,
    useState: function () {
      return Yf(Mr);
    },
    useDebugValue: Qf,
    useDeferredValue: function (n, r) {
      var s = Rt();
      return Ie === null ? Zf(s, n, r) : my(s, Ie.memoizedState, n, r);
    },
    useTransition: function () {
      var n = Yf(Mr)[0],
        r = Rt().memoizedState;
      return [typeof n == "boolean" ? n : to(n), r];
    },
    useSyncExternalStore: Fg,
    useId: vy,
  };
  (Za.useCacheRefresh = by),
    (Za.useMemoCache = $f),
    (Za.useHostTransitionStatus = Wf),
    (Za.useFormState = iy),
    (Za.useActionState = iy),
    (Za.useOptimistic = function (n, r) {
      var s = Rt();
      return Ie !== null
        ? Zg(s, Ie, n, r)
        : ((s.baseState = n), [n, s.queue.dispatch]);
    });
  function ed(n, r, s, l) {
    (r = n.memoizedState),
      (s = s(l, r)),
      (s = s == null ? r : E({}, r, s)),
      (n.memoizedState = s),
      n.lanes === 0 && (n.updateQueue.baseState = s);
  }
  var td = {
    isMounted: function (n) {
      return (n = n._reactInternals) ? oe(n) === n : !1;
    },
    enqueueSetState: function (n, r, s) {
      n = n._reactInternals;
      var l = gn(),
        f = ca(l);
      (f.payload = r),
        s != null && (f.callback = s),
        (r = fa(n, f, l)),
        r !== null && (nn(r, n, l), io(r, n, l));
    },
    enqueueReplaceState: function (n, r, s) {
      n = n._reactInternals;
      var l = gn(),
        f = ca(l);
      (f.tag = 1),
        (f.payload = r),
        s != null && (f.callback = s),
        (r = fa(n, f, l)),
        r !== null && (nn(r, n, l), io(r, n, l));
    },
    enqueueForceUpdate: function (n, r) {
      n = n._reactInternals;
      var s = gn(),
        l = ca(s);
      (l.tag = 2),
        r != null && (l.callback = r),
        (r = fa(n, l, s)),
        r !== null && (nn(r, n, s), io(r, n, s));
    },
  };
  function Ty(n, r, s, l, f, p, v) {
    return (
      (n = n.stateNode),
      typeof n.shouldComponentUpdate == "function"
        ? n.shouldComponentUpdate(l, p, v)
        : r.prototype && r.prototype.isPureReactComponent
        ? !$s(s, l) || !$s(f, p)
        : !0
    );
  }
  function Ey(n, r, s, l) {
    (n = r.state),
      typeof r.componentWillReceiveProps == "function" &&
        r.componentWillReceiveProps(s, l),
      typeof r.UNSAFE_componentWillReceiveProps == "function" &&
        r.UNSAFE_componentWillReceiveProps(s, l),
      r.state !== n && td.enqueueReplaceState(r, r.state, null);
  }
  function Ia(n, r) {
    var s = r;
    if ("ref" in r) {
      s = {};
      for (var l in r) l !== "ref" && (s[l] = r[l]);
    }
    if ((n = n.defaultProps)) {
      s === r && (s = E({}, s));
      for (var f in n) s[f] === void 0 && (s[f] = n[f]);
    }
    return s;
  }
  var au =
    typeof reportError == "function"
      ? reportError
      : function (n) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var r = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof n == "object" &&
                n !== null &&
                typeof n.message == "string"
                  ? String(n.message)
                  : String(n),
              error: n,
            });
            if (!window.dispatchEvent(r)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", n);
            return;
          }
          console.error(n);
        };
  function Cy(n) {
    au(n);
  }
  function Ay(n) {
    console.error(n);
  }
  function _y(n) {
    au(n);
  }
  function iu(n, r) {
    try {
      var s = n.onUncaughtError;
      s(r.value, { componentStack: r.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function Ry(n, r, s) {
    try {
      var l = n.onCaughtError;
      l(s.value, {
        componentStack: s.stack,
        errorBoundary: r.tag === 1 ? r.stateNode : null,
      });
    } catch (f) {
      setTimeout(function () {
        throw f;
      });
    }
  }
  function nd(n, r, s) {
    return (
      (s = ca(s)),
      (s.tag = 3),
      (s.payload = { element: null }),
      (s.callback = function () {
        iu(n, r);
      }),
      s
    );
  }
  function Oy(n) {
    return (n = ca(n)), (n.tag = 3), n;
  }
  function Ny(n, r, s, l) {
    var f = s.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var p = l.value;
      (n.payload = function () {
        return f(p);
      }),
        (n.callback = function () {
          Ry(r, s, l);
        });
    }
    var v = s.stateNode;
    v !== null &&
      typeof v.componentDidCatch == "function" &&
      (n.callback = function () {
        Ry(r, s, l),
          typeof f != "function" &&
            (ya === null ? (ya = new Set([this])) : ya.add(this));
        var T = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: T !== null ? T : "",
        });
      });
  }
  function yT(n, r, s, l, f) {
    if (
      ((s.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((r = s.alternate),
        r !== null && ao(r, s, f, !0),
        (s = kn.current),
        s !== null)
      ) {
        switch (s.tag) {
          case 13:
            return (
              cr === null ? zd() : s.alternate === null && vt === 0 && (vt = 3),
              (s.flags &= -257),
              (s.flags |= 65536),
              (s.lanes = f),
              l === Mf
                ? (s.flags |= 16384)
                : ((r = s.updateQueue),
                  r === null ? (s.updateQueue = new Set([l])) : r.add(l),
                  Vd(n, l, f)),
              !1
            );
          case 22:
            return (
              (s.flags |= 65536),
              l === Mf
                ? (s.flags |= 16384)
                : ((r = s.updateQueue),
                  r === null
                    ? ((r = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (s.updateQueue = r))
                    : ((s = r.retryQueue),
                      s === null ? (r.retryQueue = new Set([l])) : s.add(l)),
                  Vd(n, l, f)),
              !1
            );
        }
        throw Error(i(435, s.tag));
      }
      return Vd(n, l, f), zd(), !1;
    }
    if (Ge)
      return (
        (r = kn.current),
        r !== null
          ? (!(r.flags & 65536) && (r.flags |= 256),
            (r.flags |= 65536),
            (r.lanes = f),
            l !== Df && ((n = Error(i(422), { cause: l })), Ks(Nn(n, s))))
          : (l !== Df && ((r = Error(i(423), { cause: l })), Ks(Nn(r, s))),
            (n = n.current.alternate),
            (n.flags |= 65536),
            (f &= -f),
            (n.lanes |= f),
            (l = Nn(l, s)),
            (f = nd(n.stateNode, l, f)),
            yd(n, f),
            vt !== 4 && (vt = 2)),
        !1
      );
    var p = Error(i(520), { cause: l });
    if (
      ((p = Nn(p, s)),
      mo === null ? (mo = [p]) : mo.push(p),
      vt !== 4 && (vt = 2),
      r === null)
    )
      return !0;
    (l = Nn(l, s)), (s = r);
    do {
      switch (s.tag) {
        case 3:
          return (
            (s.flags |= 65536),
            (n = f & -f),
            (s.lanes |= n),
            (n = nd(s.stateNode, l, n)),
            yd(s, n),
            !1
          );
        case 1:
          if (
            ((r = s.type),
            (p = s.stateNode),
            (s.flags & 128) === 0 &&
              (typeof r.getDerivedStateFromError == "function" ||
                (p !== null &&
                  typeof p.componentDidCatch == "function" &&
                  (ya === null || !ya.has(p)))))
          )
            return (
              (s.flags |= 65536),
              (f &= -f),
              (s.lanes |= f),
              (f = Oy(f)),
              Ny(f, n, s, l),
              yd(s, f),
              !1
            );
      }
      s = s.return;
    } while (s !== null);
    return !1;
  }
  var Dy = Error(i(461)),
    Bt = !1;
  function Ft(n, r, s, l) {
    r.child = n === null ? Ug(r, null, s, l) : Ga(r, n.child, s, l);
  }
  function My(n, r, s, l, f) {
    s = s.render;
    var p = r.ref;
    if ("ref" in l) {
      var v = {};
      for (var T in l) T !== "ref" && (v[T] = l[T]);
    } else v = l;
    return (
      Ja(r),
      (l = Vf(n, r, s, v, p, f)),
      (T = jf()),
      n !== null && !Bt
        ? (Hf(n, r, f), kr(n, r, f))
        : (Ge && T && Of(r), (r.flags |= 1), Ft(n, r, l, f), r.child)
    );
  }
  function ky(n, r, s, l, f) {
    if (n === null) {
      var p = s.type;
      return typeof p == "function" &&
        !Cd(p) &&
        p.defaultProps === void 0 &&
        s.compare === null
        ? ((r.tag = 15), (r.type = p), Ly(n, r, p, l, f))
        : ((n = cu(s.type, null, l, r, r.mode, f)),
          (n.ref = r.ref),
          (n.return = r),
          (r.child = n));
    }
    if (((p = n.child), !fd(n, f))) {
      var v = p.memoizedProps;
      if (
        ((s = s.compare), (s = s !== null ? s : $s), s(v, l) && n.ref === r.ref)
      )
        return kr(n, r, f);
    }
    return (
      (r.flags |= 1),
      (n = pa(p, l)),
      (n.ref = r.ref),
      (n.return = r),
      (r.child = n)
    );
  }
  function Ly(n, r, s, l, f) {
    if (n !== null) {
      var p = n.memoizedProps;
      if ($s(p, l) && n.ref === r.ref)
        if (((Bt = !1), (r.pendingProps = l = p), fd(n, f)))
          n.flags & 131072 && (Bt = !0);
        else return (r.lanes = n.lanes), kr(n, r, f);
    }
    return rd(n, r, s, l, f);
  }
  function By(n, r, s) {
    var l = r.pendingProps,
      f = l.children,
      p = (r.stateNode._pendingVisibility & 2) !== 0,
      v = n !== null ? n.memoizedState : null;
    if ((ro(n, r), l.mode === "hidden" || p)) {
      if (r.flags & 128) {
        if (((l = v !== null ? v.baseLanes | s : s), n !== null)) {
          for (f = r.child = n.child, p = 0; f !== null; )
            (p = p | f.lanes | f.childLanes), (f = f.sibling);
          r.childLanes = p & ~l;
        } else (r.childLanes = 0), (r.child = null);
        return Uy(n, r, l, s);
      }
      if (s & 536870912)
        (r.memoizedState = { baseLanes: 0, cachePool: null }),
          n !== null && Ql(r, v !== null ? v.cachePool : null),
          v !== null ? zg(r, v) : kf(),
          Pg(r);
      else
        return (
          (r.lanes = r.childLanes = 536870912),
          Uy(n, r, v !== null ? v.baseLanes | s : s, s)
        );
    } else
      v !== null
        ? (Ql(r, v.cachePool), zg(r, v), ia(), (r.memoizedState = null))
        : (n !== null && Ql(r, null), kf(), ia());
    return Ft(n, r, f, s), r.child;
  }
  function Uy(n, r, s, l) {
    var f = zf();
    return (
      (f = f === null ? null : { parent: kt._currentValue, pool: f }),
      (r.memoizedState = { baseLanes: s, cachePool: f }),
      n !== null && Ql(r, null),
      kf(),
      Pg(r),
      n !== null && ao(n, r, l, !0),
      null
    );
  }
  function ro(n, r) {
    var s = r.ref;
    if (s === null) n !== null && n.ref !== null && (r.flags |= 2097664);
    else {
      if (typeof s != "function" && typeof s != "object") throw Error(i(284));
      (n === null || n.ref !== s) && (r.flags |= 2097664);
    }
  }
  function rd(n, r, s, l, f) {
    return (
      Ja(r),
      (s = Vf(n, r, s, l, void 0, f)),
      (l = jf()),
      n !== null && !Bt
        ? (Hf(n, r, f), kr(n, r, f))
        : (Ge && l && Of(r), (r.flags |= 1), Ft(n, r, s, f), r.child)
    );
  }
  function zy(n, r, s, l, f, p) {
    return (
      Ja(r),
      (r.updateQueue = null),
      (s = $g(r, l, s, f)),
      qg(n),
      (l = jf()),
      n !== null && !Bt
        ? (Hf(n, r, p), kr(n, r, p))
        : (Ge && l && Of(r), (r.flags |= 1), Ft(n, r, s, p), r.child)
    );
  }
  function Py(n, r, s, l, f) {
    if ((Ja(r), r.stateNode === null)) {
      var p = Di,
        v = s.contextType;
      typeof v == "object" && v !== null && (p = Qt(v)),
        (p = new s(l, p)),
        (r.memoizedState =
          p.state !== null && p.state !== void 0 ? p.state : null),
        (p.updater = td),
        (r.stateNode = p),
        (p._reactInternals = r),
        (p = r.stateNode),
        (p.props = l),
        (p.state = r.memoizedState),
        (p.refs = {}),
        pd(r),
        (v = s.contextType),
        (p.context = typeof v == "object" && v !== null ? Qt(v) : Di),
        (p.state = r.memoizedState),
        (v = s.getDerivedStateFromProps),
        typeof v == "function" && (ed(r, s, v, l), (p.state = r.memoizedState)),
        typeof s.getDerivedStateFromProps == "function" ||
          typeof p.getSnapshotBeforeUpdate == "function" ||
          (typeof p.UNSAFE_componentWillMount != "function" &&
            typeof p.componentWillMount != "function") ||
          ((v = p.state),
          typeof p.componentWillMount == "function" && p.componentWillMount(),
          typeof p.UNSAFE_componentWillMount == "function" &&
            p.UNSAFE_componentWillMount(),
          v !== p.state && td.enqueueReplaceState(p, p.state, null),
          oo(r, l, p, f),
          so(),
          (p.state = r.memoizedState)),
        typeof p.componentDidMount == "function" && (r.flags |= 4194308),
        (l = !0);
    } else if (n === null) {
      p = r.stateNode;
      var T = r.memoizedProps,
        D = Ia(s, T);
      p.props = D;
      var z = p.context,
        I = s.contextType;
      (v = Di), typeof I == "object" && I !== null && (v = Qt(I));
      var ee = s.getDerivedStateFromProps;
      (I =
        typeof ee == "function" ||
        typeof p.getSnapshotBeforeUpdate == "function"),
        (T = r.pendingProps !== T),
        I ||
          (typeof p.UNSAFE_componentWillReceiveProps != "function" &&
            typeof p.componentWillReceiveProps != "function") ||
          ((T || z !== v) && Ey(r, p, l, v)),
        (ua = !1);
      var $ = r.memoizedState;
      (p.state = $),
        oo(r, l, p, f),
        so(),
        (z = r.memoizedState),
        T || $ !== z || ua
          ? (typeof ee == "function" &&
              (ed(r, s, ee, l), (z = r.memoizedState)),
            (D = ua || Ty(r, s, D, l, $, z, v))
              ? (I ||
                  (typeof p.UNSAFE_componentWillMount != "function" &&
                    typeof p.componentWillMount != "function") ||
                  (typeof p.componentWillMount == "function" &&
                    p.componentWillMount(),
                  typeof p.UNSAFE_componentWillMount == "function" &&
                    p.UNSAFE_componentWillMount()),
                typeof p.componentDidMount == "function" &&
                  (r.flags |= 4194308))
              : (typeof p.componentDidMount == "function" &&
                  (r.flags |= 4194308),
                (r.memoizedProps = l),
                (r.memoizedState = z)),
            (p.props = l),
            (p.state = z),
            (p.context = v),
            (l = D))
          : (typeof p.componentDidMount == "function" && (r.flags |= 4194308),
            (l = !1));
    } else {
      (p = r.stateNode),
        gd(n, r),
        (v = r.memoizedProps),
        (I = Ia(s, v)),
        (p.props = I),
        (ee = r.pendingProps),
        ($ = p.context),
        (z = s.contextType),
        (D = Di),
        typeof z == "object" && z !== null && (D = Qt(z)),
        (T = s.getDerivedStateFromProps),
        (z =
          typeof T == "function" ||
          typeof p.getSnapshotBeforeUpdate == "function") ||
          (typeof p.UNSAFE_componentWillReceiveProps != "function" &&
            typeof p.componentWillReceiveProps != "function") ||
          ((v !== ee || $ !== D) && Ey(r, p, l, D)),
        (ua = !1),
        ($ = r.memoizedState),
        (p.state = $),
        oo(r, l, p, f),
        so();
      var Z = r.memoizedState;
      v !== ee ||
      $ !== Z ||
      ua ||
      (n !== null && n.dependencies !== null && su(n.dependencies))
        ? (typeof T == "function" && (ed(r, s, T, l), (Z = r.memoizedState)),
          (I =
            ua ||
            Ty(r, s, I, l, $, Z, D) ||
            (n !== null && n.dependencies !== null && su(n.dependencies)))
            ? (z ||
                (typeof p.UNSAFE_componentWillUpdate != "function" &&
                  typeof p.componentWillUpdate != "function") ||
                (typeof p.componentWillUpdate == "function" &&
                  p.componentWillUpdate(l, Z, D),
                typeof p.UNSAFE_componentWillUpdate == "function" &&
                  p.UNSAFE_componentWillUpdate(l, Z, D)),
              typeof p.componentDidUpdate == "function" && (r.flags |= 4),
              typeof p.getSnapshotBeforeUpdate == "function" &&
                (r.flags |= 1024))
            : (typeof p.componentDidUpdate != "function" ||
                (v === n.memoizedProps && $ === n.memoizedState) ||
                (r.flags |= 4),
              typeof p.getSnapshotBeforeUpdate != "function" ||
                (v === n.memoizedProps && $ === n.memoizedState) ||
                (r.flags |= 1024),
              (r.memoizedProps = l),
              (r.memoizedState = Z)),
          (p.props = l),
          (p.state = Z),
          (p.context = D),
          (l = I))
        : (typeof p.componentDidUpdate != "function" ||
            (v === n.memoizedProps && $ === n.memoizedState) ||
            (r.flags |= 4),
          typeof p.getSnapshotBeforeUpdate != "function" ||
            (v === n.memoizedProps && $ === n.memoizedState) ||
            (r.flags |= 1024),
          (l = !1));
    }
    return (
      (p = l),
      ro(n, r),
      (l = (r.flags & 128) !== 0),
      p || l
        ? ((p = r.stateNode),
          (s =
            l && typeof s.getDerivedStateFromError != "function"
              ? null
              : p.render()),
          (r.flags |= 1),
          n !== null && l
            ? ((r.child = Ga(r, n.child, null, f)),
              (r.child = Ga(r, null, s, f)))
            : Ft(n, r, s, f),
          (r.memoizedState = p.state),
          (n = r.child))
        : (n = kr(n, r, f)),
      n
    );
  }
  function Vy(n, r, s, l) {
    return Gs(), (r.flags |= 256), Ft(n, r, s, l), r.child;
  }
  var ad = { dehydrated: null, treeContext: null, retryLane: 0 };
  function id(n) {
    return { baseLanes: n, cachePool: Hg() };
  }
  function sd(n, r, s) {
    return (n = n !== null ? n.childLanes & ~s : 0), r && (n |= zn), n;
  }
  function jy(n, r, s) {
    var l = r.pendingProps,
      f = !1,
      p = (r.flags & 128) !== 0,
      v;
    if (
      ((v = p) ||
        (v =
          n !== null && n.memoizedState === null ? !1 : (Mt.current & 2) !== 0),
      v && ((f = !0), (r.flags &= -129)),
      (v = (r.flags & 32) !== 0),
      (r.flags &= -33),
      n === null)
    ) {
      if (Ge) {
        if ((f ? aa(r) : ia(), Ge)) {
          var T = $t,
            D;
          if ((D = T)) {
            e: {
              for (D = T, T = ur; D.nodeType !== 8; ) {
                if (!T) {
                  T = null;
                  break e;
                }
                if (((D = In(D.nextSibling)), D === null)) {
                  T = null;
                  break e;
                }
              }
              T = D;
            }
            T !== null
              ? ((r.memoizedState = {
                  dehydrated: T,
                  treeContext: $a !== null ? { id: Or, overflow: Nr } : null,
                  retryLane: 536870912,
                }),
                (D = Un(18, null, null, 0)),
                (D.stateNode = T),
                (D.return = r),
                (r.child = D),
                (tn = r),
                ($t = null),
                (D = !0))
              : (D = !1);
          }
          D || Ya(r);
        }
        if (
          ((T = r.memoizedState),
          T !== null && ((T = T.dehydrated), T !== null))
        )
          return T.data === "$!" ? (r.lanes = 16) : (r.lanes = 536870912), null;
        Dr(r);
      }
      return (
        (T = l.children),
        (l = l.fallback),
        f
          ? (ia(),
            (f = r.mode),
            (T = ld({ mode: "hidden", children: T }, f)),
            (l = ti(l, f, s, null)),
            (T.return = r),
            (l.return = r),
            (T.sibling = l),
            (r.child = T),
            (f = r.child),
            (f.memoizedState = id(s)),
            (f.childLanes = sd(n, v, s)),
            (r.memoizedState = ad),
            l)
          : (aa(r), od(r, T))
      );
    }
    if (
      ((D = n.memoizedState), D !== null && ((T = D.dehydrated), T !== null))
    ) {
      if (p)
        r.flags & 256
          ? (aa(r), (r.flags &= -257), (r = ud(n, r, s)))
          : r.memoizedState !== null
          ? (ia(), (r.child = n.child), (r.flags |= 128), (r = null))
          : (ia(),
            (f = l.fallback),
            (T = r.mode),
            (l = ld({ mode: "visible", children: l.children }, T)),
            (f = ti(f, T, s, null)),
            (f.flags |= 2),
            (l.return = r),
            (f.return = r),
            (l.sibling = f),
            (r.child = l),
            Ga(r, n.child, null, s),
            (l = r.child),
            (l.memoizedState = id(s)),
            (l.childLanes = sd(n, v, s)),
            (r.memoizedState = ad),
            (r = f));
      else if ((aa(r), T.data === "$!")) {
        if (((v = T.nextSibling && T.nextSibling.dataset), v)) var z = v.dgst;
        (v = z),
          (l = Error(i(419))),
          (l.stack = ""),
          (l.digest = v),
          Ks({ value: l, source: null, stack: null }),
          (r = ud(n, r, s));
      } else if (
        (Bt || ao(n, r, s, !1), (v = (s & n.childLanes) !== 0), Bt || v)
      ) {
        if (((v = it), v !== null)) {
          if (((l = s & -s), l & 42)) l = 1;
          else
            switch (l) {
              case 2:
                l = 1;
                break;
              case 8:
                l = 4;
                break;
              case 32:
                l = 16;
                break;
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
                l = 64;
                break;
              case 268435456:
                l = 134217728;
                break;
              default:
                l = 0;
            }
          if (
            ((l = l & (v.suspendedLanes | s) ? 0 : l),
            l !== 0 && l !== D.retryLane)
          )
            throw ((D.retryLane = l), ra(n, l), nn(v, n, l), Dy);
        }
        T.data === "$?" || zd(), (r = ud(n, r, s));
      } else
        T.data === "$?"
          ? ((r.flags |= 128),
            (r.child = n.child),
            (r = MT.bind(null, n)),
            (T._reactRetry = r),
            (r = null))
          : ((n = D.treeContext),
            ($t = In(T.nextSibling)),
            (tn = r),
            (Ge = !0),
            (Qn = null),
            (ur = !1),
            n !== null &&
              ((Dn[Mn++] = Or),
              (Dn[Mn++] = Nr),
              (Dn[Mn++] = $a),
              (Or = n.id),
              (Nr = n.overflow),
              ($a = r)),
            (r = od(r, l.children)),
            (r.flags |= 4096));
      return r;
    }
    return f
      ? (ia(),
        (f = l.fallback),
        (T = r.mode),
        (D = n.child),
        (z = D.sibling),
        (l = pa(D, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = D.subtreeFlags & 31457280),
        z !== null ? (f = pa(z, f)) : ((f = ti(f, T, s, null)), (f.flags |= 2)),
        (f.return = r),
        (l.return = r),
        (l.sibling = f),
        (r.child = l),
        (l = f),
        (f = r.child),
        (T = n.child.memoizedState),
        T === null
          ? (T = id(s))
          : ((D = T.cachePool),
            D !== null
              ? ((z = kt._currentValue),
                (D = D.parent !== z ? { parent: z, pool: z } : D))
              : (D = Hg()),
            (T = { baseLanes: T.baseLanes | s, cachePool: D })),
        (f.memoizedState = T),
        (f.childLanes = sd(n, v, s)),
        (r.memoizedState = ad),
        l)
      : (aa(r),
        (s = n.child),
        (n = s.sibling),
        (s = pa(s, { mode: "visible", children: l.children })),
        (s.return = r),
        (s.sibling = null),
        n !== null &&
          ((v = r.deletions),
          v === null ? ((r.deletions = [n]), (r.flags |= 16)) : v.push(n)),
        (r.child = s),
        (r.memoizedState = null),
        s);
  }
  function od(n, r) {
    return (
      (r = ld({ mode: "visible", children: r }, n.mode)),
      (r.return = n),
      (n.child = r)
    );
  }
  function ld(n, r) {
    return d0(n, r, 0, null);
  }
  function ud(n, r, s) {
    return (
      Ga(r, n.child, null, s),
      (n = od(r, r.pendingProps.children)),
      (n.flags |= 2),
      (r.memoizedState = null),
      n
    );
  }
  function Hy(n, r, s) {
    n.lanes |= r;
    var l = n.alternate;
    l !== null && (l.lanes |= r), hd(n.return, r, s);
  }
  function cd(n, r, s, l, f) {
    var p = n.memoizedState;
    p === null
      ? (n.memoizedState = {
          isBackwards: r,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: s,
          tailMode: f,
        })
      : ((p.isBackwards = r),
        (p.rendering = null),
        (p.renderingStartTime = 0),
        (p.last = l),
        (p.tail = s),
        (p.tailMode = f));
  }
  function qy(n, r, s) {
    var l = r.pendingProps,
      f = l.revealOrder,
      p = l.tail;
    if ((Ft(n, r, l.children, s), (l = Mt.current), l & 2))
      (l = (l & 1) | 2), (r.flags |= 128);
    else {
      if (n !== null && n.flags & 128)
        e: for (n = r.child; n !== null; ) {
          if (n.tag === 13) n.memoizedState !== null && Hy(n, s, r);
          else if (n.tag === 19) Hy(n, s, r);
          else if (n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
          }
          if (n === r) break e;
          for (; n.sibling === null; ) {
            if (n.return === null || n.return === r) break e;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      l &= 1;
    }
    switch ((De(Mt, l), f)) {
      case "forwards":
        for (s = r.child, f = null; s !== null; )
          (n = s.alternate),
            n !== null && Xl(n) === null && (f = s),
            (s = s.sibling);
        (s = f),
          s === null
            ? ((f = r.child), (r.child = null))
            : ((f = s.sibling), (s.sibling = null)),
          cd(r, !1, f, s, p);
        break;
      case "backwards":
        for (s = null, f = r.child, r.child = null; f !== null; ) {
          if (((n = f.alternate), n !== null && Xl(n) === null)) {
            r.child = f;
            break;
          }
          (n = f.sibling), (f.sibling = s), (s = f), (f = n);
        }
        cd(r, !0, s, null, p);
        break;
      case "together":
        cd(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function kr(n, r, s) {
    if (
      (n !== null && (r.dependencies = n.dependencies),
      (ga |= r.lanes),
      !(s & r.childLanes))
    )
      if (n !== null) {
        if ((ao(n, r, s, !1), (s & r.childLanes) === 0)) return null;
      } else return null;
    if (n !== null && r.child !== n.child) throw Error(i(153));
    if (r.child !== null) {
      for (
        n = r.child, s = pa(n, n.pendingProps), r.child = s, s.return = r;
        n.sibling !== null;

      )
        (n = n.sibling),
          (s = s.sibling = pa(n, n.pendingProps)),
          (s.return = r);
      s.sibling = null;
    }
    return r.child;
  }
  function fd(n, r) {
    return n.lanes & r ? !0 : ((n = n.dependencies), !!(n !== null && su(n)));
  }
  function vT(n, r, s) {
    switch (r.tag) {
      case 3:
        vi(r, r.stateNode.containerInfo),
          la(r, kt, n.memoizedState.cache),
          Gs();
        break;
      case 27:
      case 5:
        bi(r);
        break;
      case 4:
        vi(r, r.stateNode.containerInfo);
        break;
      case 10:
        la(r, r.type, r.memoizedProps.value);
        break;
      case 13:
        var l = r.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (aa(r), (r.flags |= 128), null)
            : s & r.child.childLanes
            ? jy(n, r, s)
            : (aa(r), (n = kr(n, r, s)), n !== null ? n.sibling : null);
        aa(r);
        break;
      case 19:
        var f = (n.flags & 128) !== 0;
        if (
          ((l = (s & r.childLanes) !== 0),
          l || (ao(n, r, s, !1), (l = (s & r.childLanes) !== 0)),
          f)
        ) {
          if (l) return qy(n, r, s);
          r.flags |= 128;
        }
        if (
          ((f = r.memoizedState),
          f !== null &&
            ((f.rendering = null), (f.tail = null), (f.lastEffect = null)),
          De(Mt, Mt.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return (r.lanes = 0), By(n, r, s);
      case 24:
        la(r, kt, n.memoizedState.cache);
    }
    return kr(n, r, s);
  }
  function $y(n, r, s) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps) Bt = !0;
      else {
        if (!fd(n, s) && !(r.flags & 128)) return (Bt = !1), vT(n, r, s);
        Bt = !!(n.flags & 131072);
      }
    else (Bt = !1), Ge && r.flags & 1048576 && _g(r, $l, r.index);
    switch (((r.lanes = 0), r.tag)) {
      case 16:
        e: {
          n = r.pendingProps;
          var l = r.elementType,
            f = l._init;
          if (((l = f(l._payload)), (r.type = l), typeof l == "function"))
            Cd(l)
              ? ((n = Ia(l, n)), (r.tag = 1), (r = Py(null, r, l, n, s)))
              : ((r.tag = 0), (r = rd(null, r, l, n, s)));
          else {
            if (l != null) {
              if (((f = l.$$typeof), f === w)) {
                (r.tag = 11), (r = My(null, r, l, n, s));
                break e;
              } else if (f === C) {
                (r.tag = 14), (r = ky(null, r, l, n, s));
                break e;
              }
            }
            throw ((r = X(l) || l), Error(i(306, r, "")));
          }
        }
        return r;
      case 0:
        return rd(n, r, r.type, r.pendingProps, s);
      case 1:
        return (l = r.type), (f = Ia(l, r.pendingProps)), Py(n, r, l, f, s);
      case 3:
        e: {
          if ((vi(r, r.stateNode.containerInfo), n === null))
            throw Error(i(387));
          var p = r.pendingProps;
          (f = r.memoizedState), (l = f.element), gd(n, r), oo(r, p, null, s);
          var v = r.memoizedState;
          if (
            ((p = v.cache),
            la(r, kt, p),
            p !== f.cache && md(r, [kt], s, !0),
            so(),
            (p = v.element),
            f.isDehydrated)
          )
            if (
              ((f = { element: p, isDehydrated: !1, cache: v.cache }),
              (r.updateQueue.baseState = f),
              (r.memoizedState = f),
              r.flags & 256)
            ) {
              r = Vy(n, r, p, s);
              break e;
            } else if (p !== l) {
              (l = Nn(Error(i(424)), r)), Ks(l), (r = Vy(n, r, p, s));
              break e;
            } else
              for (
                $t = In(r.stateNode.containerInfo.firstChild),
                  tn = r,
                  Ge = !0,
                  Qn = null,
                  ur = !0,
                  s = Ug(r, null, p, s),
                  r.child = s;
                s;

              )
                (s.flags = (s.flags & -3) | 4096), (s = s.sibling);
          else {
            if ((Gs(), p === l)) {
              r = kr(n, r, s);
              break e;
            }
            Ft(n, r, p, s);
          }
          r = r.child;
        }
        return r;
      case 26:
        return (
          ro(n, r),
          n === null
            ? (s = G0(r.type, null, r.pendingProps, null))
              ? (r.memoizedState = s)
              : Ge ||
                ((s = r.type),
                (n = r.pendingProps),
                (l = wu(ir.current).createElement(s)),
                (l[pe] = r),
                (l[Se] = n),
                Yt(l, s, n),
                at(l),
                (r.stateNode = l))
            : (r.memoizedState = G0(
                r.type,
                n.memoizedProps,
                r.pendingProps,
                n.memoizedState
              )),
          null
        );
      case 27:
        return (
          bi(r),
          n === null &&
            Ge &&
            ((l = r.stateNode = $0(r.type, r.pendingProps, ir.current)),
            (tn = r),
            (ur = !0),
            ($t = In(l.firstChild))),
          (l = r.pendingProps.children),
          n !== null || Ge ? Ft(n, r, l, s) : (r.child = Ga(r, null, l, s)),
          ro(n, r),
          r.child
        );
      case 5:
        return (
          n === null &&
            Ge &&
            ((f = l = $t) &&
              ((l = XT(l, r.type, r.pendingProps, ur)),
              l !== null
                ? ((r.stateNode = l),
                  (tn = r),
                  ($t = In(l.firstChild)),
                  (ur = !1),
                  (f = !0))
                : (f = !1)),
            f || Ya(r)),
          bi(r),
          (f = r.type),
          (p = r.pendingProps),
          (v = n !== null ? n.memoizedProps : null),
          (l = p.children),
          Id(f, p) ? (l = null) : v !== null && Id(f, v) && (r.flags |= 32),
          r.memoizedState !== null &&
            ((f = Vf(n, r, fT, null, null, s)), (To._currentValue = f)),
          ro(n, r),
          Ft(n, r, l, s),
          r.child
        );
      case 6:
        return (
          n === null &&
            Ge &&
            ((n = s = $t) &&
              ((s = QT(s, r.pendingProps, ur)),
              s !== null
                ? ((r.stateNode = s), (tn = r), ($t = null), (n = !0))
                : (n = !1)),
            n || Ya(r)),
          null
        );
      case 13:
        return jy(n, r, s);
      case 4:
        return (
          vi(r, r.stateNode.containerInfo),
          (l = r.pendingProps),
          n === null ? (r.child = Ga(r, null, l, s)) : Ft(n, r, l, s),
          r.child
        );
      case 11:
        return My(n, r, r.type, r.pendingProps, s);
      case 7:
        return Ft(n, r, r.pendingProps, s), r.child;
      case 8:
        return Ft(n, r, r.pendingProps.children, s), r.child;
      case 12:
        return Ft(n, r, r.pendingProps.children, s), r.child;
      case 10:
        return (
          (l = r.pendingProps),
          la(r, r.type, l.value),
          Ft(n, r, l.children, s),
          r.child
        );
      case 9:
        return (
          (f = r.type._context),
          (l = r.pendingProps.children),
          Ja(r),
          (f = Qt(f)),
          (l = l(f)),
          (r.flags |= 1),
          Ft(n, r, l, s),
          r.child
        );
      case 14:
        return ky(n, r, r.type, r.pendingProps, s);
      case 15:
        return Ly(n, r, r.type, r.pendingProps, s);
      case 19:
        return qy(n, r, s);
      case 22:
        return By(n, r, s);
      case 24:
        return (
          Ja(r),
          (l = Qt(kt)),
          n === null
            ? ((f = zf()),
              f === null &&
                ((f = it),
                (p = Bf()),
                (f.pooledCache = p),
                p.refCount++,
                p !== null && (f.pooledCacheLanes |= s),
                (f = p)),
              (r.memoizedState = { parent: l, cache: f }),
              pd(r),
              la(r, kt, f))
            : (n.lanes & s && (gd(n, r), oo(r, null, null, s), so()),
              (f = n.memoizedState),
              (p = r.memoizedState),
              f.parent !== l
                ? ((f = { parent: l, cache: l }),
                  (r.memoizedState = f),
                  r.lanes === 0 &&
                    (r.memoizedState = r.updateQueue.baseState = f),
                  la(r, kt, l))
                : ((l = p.cache),
                  la(r, kt, l),
                  l !== f.cache && md(r, [kt], s, !0))),
          Ft(n, r, r.pendingProps.children, s),
          r.child
        );
      case 29:
        throw r.pendingProps;
    }
    throw Error(i(156, r.tag));
  }
  var dd = Ye(null),
    Wa = null,
    Lr = null;
  function la(n, r, s) {
    De(dd, r._currentValue), (r._currentValue = s);
  }
  function Br(n) {
    (n._currentValue = dd.current), pt(dd);
  }
  function hd(n, r, s) {
    for (; n !== null; ) {
      var l = n.alternate;
      if (
        ((n.childLanes & r) !== r
          ? ((n.childLanes |= r), l !== null && (l.childLanes |= r))
          : l !== null && (l.childLanes & r) !== r && (l.childLanes |= r),
        n === s)
      )
        break;
      n = n.return;
    }
  }
  function md(n, r, s, l) {
    var f = n.child;
    for (f !== null && (f.return = n); f !== null; ) {
      var p = f.dependencies;
      if (p !== null) {
        var v = f.child;
        p = p.firstContext;
        e: for (; p !== null; ) {
          var T = p;
          p = f;
          for (var D = 0; D < r.length; D++)
            if (T.context === r[D]) {
              (p.lanes |= s),
                (T = p.alternate),
                T !== null && (T.lanes |= s),
                hd(p.return, s, n),
                l || (v = null);
              break e;
            }
          p = T.next;
        }
      } else if (f.tag === 18) {
        if (((v = f.return), v === null)) throw Error(i(341));
        (v.lanes |= s),
          (p = v.alternate),
          p !== null && (p.lanes |= s),
          hd(v, s, n),
          (v = null);
      } else v = f.child;
      if (v !== null) v.return = f;
      else
        for (v = f; v !== null; ) {
          if (v === n) {
            v = null;
            break;
          }
          if (((f = v.sibling), f !== null)) {
            (f.return = v.return), (v = f);
            break;
          }
          v = v.return;
        }
      f = v;
    }
  }
  function ao(n, r, s, l) {
    n = null;
    for (var f = r, p = !1; f !== null; ) {
      if (!p) {
        if (f.flags & 524288) p = !0;
        else if (f.flags & 262144) break;
      }
      if (f.tag === 10) {
        var v = f.alternate;
        if (v === null) throw Error(i(387));
        if (((v = v.memoizedProps), v !== null)) {
          var T = f.type;
          dn(f.pendingProps.value, v.value) ||
            (n !== null ? n.push(T) : (n = [T]));
        }
      } else if (f === Tn.current) {
        if (((v = f.alternate), v === null)) throw Error(i(387));
        v.memoizedState.memoizedState !== f.memoizedState.memoizedState &&
          (n !== null ? n.push(To) : (n = [To]));
      }
      f = f.return;
    }
    n !== null && md(r, n, s, l), (r.flags |= 262144);
  }
  function su(n) {
    for (n = n.firstContext; n !== null; ) {
      if (!dn(n.context._currentValue, n.memoizedValue)) return !0;
      n = n.next;
    }
    return !1;
  }
  function Ja(n) {
    (Wa = n),
      (Lr = null),
      (n = n.dependencies),
      n !== null && (n.firstContext = null);
  }
  function Qt(n) {
    return Fy(Wa, n);
  }
  function ou(n, r) {
    return Wa === null && Ja(n), Fy(n, r);
  }
  function Fy(n, r) {
    var s = r._currentValue;
    if (((r = { context: r, memoizedValue: s, next: null }), Lr === null)) {
      if (n === null) throw Error(i(308));
      (Lr = r),
        (n.dependencies = { lanes: 0, firstContext: r }),
        (n.flags |= 524288);
    } else Lr = Lr.next = r;
    return s;
  }
  var ua = !1;
  function pd(n) {
    n.updateQueue = {
      baseState: n.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function gd(n, r) {
    (n = n.updateQueue),
      r.updateQueue === n &&
        (r.updateQueue = {
          baseState: n.baseState,
          firstBaseUpdate: n.firstBaseUpdate,
          lastBaseUpdate: n.lastBaseUpdate,
          shared: n.shared,
          callbacks: null,
        });
  }
  function ca(n) {
    return { lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function fa(n, r, s) {
    var l = n.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), ht & 2)) {
      var f = l.pending;
      return (
        f === null ? (r.next = r) : ((r.next = f.next), (f.next = r)),
        (l.pending = r),
        (r = Hl(n)),
        Cg(n, null, s),
        r
      );
    }
    return jl(n, l, r, s), Hl(n);
  }
  function io(n, r, s) {
    if (
      ((r = r.updateQueue), r !== null && ((r = r.shared), (s & 4194176) !== 0))
    ) {
      var l = r.lanes;
      (l &= n.pendingLanes), (s |= l), (r.lanes = s), ye(n, s);
    }
  }
  function yd(n, r) {
    var s = n.updateQueue,
      l = n.alternate;
    if (l !== null && ((l = l.updateQueue), s === l)) {
      var f = null,
        p = null;
      if (((s = s.firstBaseUpdate), s !== null)) {
        do {
          var v = {
            lane: s.lane,
            tag: s.tag,
            payload: s.payload,
            callback: null,
            next: null,
          };
          p === null ? (f = p = v) : (p = p.next = v), (s = s.next);
        } while (s !== null);
        p === null ? (f = p = r) : (p = p.next = r);
      } else f = p = r;
      (s = {
        baseState: l.baseState,
        firstBaseUpdate: f,
        lastBaseUpdate: p,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (n.updateQueue = s);
      return;
    }
    (n = s.lastBaseUpdate),
      n === null ? (s.firstBaseUpdate = r) : (n.next = r),
      (s.lastBaseUpdate = r);
  }
  var vd = !1;
  function so() {
    if (vd) {
      var n = zi;
      if (n !== null) throw n;
    }
  }
  function oo(n, r, s, l) {
    vd = !1;
    var f = n.updateQueue;
    ua = !1;
    var p = f.firstBaseUpdate,
      v = f.lastBaseUpdate,
      T = f.shared.pending;
    if (T !== null) {
      f.shared.pending = null;
      var D = T,
        z = D.next;
      (D.next = null), v === null ? (p = z) : (v.next = z), (v = D);
      var I = n.alternate;
      I !== null &&
        ((I = I.updateQueue),
        (T = I.lastBaseUpdate),
        T !== v &&
          (T === null ? (I.firstBaseUpdate = z) : (T.next = z),
          (I.lastBaseUpdate = D)));
    }
    if (p !== null) {
      var ee = f.baseState;
      (v = 0), (I = z = D = null), (T = p);
      do {
        var $ = T.lane & -536870913,
          Z = $ !== T.lane;
        if (Z ? ($e & $) === $ : (l & $) === $) {
          $ !== 0 && $ === Ui && (vd = !0),
            I !== null &&
              (I = I.next =
                {
                  lane: 0,
                  tag: T.tag,
                  payload: T.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var ge = n,
              Re = T;
            $ = r;
            var bt = s;
            switch (Re.tag) {
              case 1:
                if (((ge = Re.payload), typeof ge == "function")) {
                  ee = ge.call(bt, ee, $);
                  break e;
                }
                ee = ge;
                break e;
              case 3:
                ge.flags = (ge.flags & -65537) | 128;
              case 0:
                if (
                  ((ge = Re.payload),
                  ($ = typeof ge == "function" ? ge.call(bt, ee, $) : ge),
                  $ == null)
                )
                  break e;
                ee = E({}, ee, $);
                break e;
              case 2:
                ua = !0;
            }
          }
          ($ = T.callback),
            $ !== null &&
              ((n.flags |= 64),
              Z && (n.flags |= 8192),
              (Z = f.callbacks),
              Z === null ? (f.callbacks = [$]) : Z.push($));
        } else
          (Z = {
            lane: $,
            tag: T.tag,
            payload: T.payload,
            callback: T.callback,
            next: null,
          }),
            I === null ? ((z = I = Z), (D = ee)) : (I = I.next = Z),
            (v |= $);
        if (((T = T.next), T === null)) {
          if (((T = f.shared.pending), T === null)) break;
          (Z = T),
            (T = Z.next),
            (Z.next = null),
            (f.lastBaseUpdate = Z),
            (f.shared.pending = null);
        }
      } while (!0);
      I === null && (D = ee),
        (f.baseState = D),
        (f.firstBaseUpdate = z),
        (f.lastBaseUpdate = I),
        p === null && (f.shared.lanes = 0),
        (ga |= v),
        (n.lanes = v),
        (n.memoizedState = ee);
    }
  }
  function Yy(n, r) {
    if (typeof n != "function") throw Error(i(191, n));
    n.call(r);
  }
  function Gy(n, r) {
    var s = n.callbacks;
    if (s !== null)
      for (n.callbacks = null, n = 0; n < s.length; n++) Yy(s[n], r);
  }
  function lo(n, r) {
    try {
      var s = r.updateQueue,
        l = s !== null ? s.lastEffect : null;
      if (l !== null) {
        var f = l.next;
        s = f;
        do {
          if ((s.tag & n) === n) {
            l = void 0;
            var p = s.create,
              v = s.inst;
            (l = p()), (v.destroy = l);
          }
          s = s.next;
        } while (s !== f);
      }
    } catch (T) {
      tt(r, r.return, T);
    }
  }
  function da(n, r, s) {
    try {
      var l = r.updateQueue,
        f = l !== null ? l.lastEffect : null;
      if (f !== null) {
        var p = f.next;
        l = p;
        do {
          if ((l.tag & n) === n) {
            var v = l.inst,
              T = v.destroy;
            if (T !== void 0) {
              (v.destroy = void 0), (f = r);
              var D = s;
              try {
                T();
              } catch (z) {
                tt(f, D, z);
              }
            }
          }
          l = l.next;
        } while (l !== p);
      }
    } catch (z) {
      tt(r, r.return, z);
    }
  }
  function Ky(n) {
    var r = n.updateQueue;
    if (r !== null) {
      var s = n.stateNode;
      try {
        Gy(r, s);
      } catch (l) {
        tt(n, n.return, l);
      }
    }
  }
  function Xy(n, r, s) {
    (s.props = Ia(n.type, n.memoizedProps)), (s.state = n.memoizedState);
    try {
      s.componentWillUnmount();
    } catch (l) {
      tt(n, r, l);
    }
  }
  function ei(n, r) {
    try {
      var s = n.ref;
      if (s !== null) {
        var l = n.stateNode;
        switch (n.tag) {
          case 26:
          case 27:
          case 5:
            var f = l;
            break;
          default:
            f = l;
        }
        typeof s == "function" ? (n.refCleanup = s(f)) : (s.current = f);
      }
    } catch (p) {
      tt(n, r, p);
    }
  }
  function hn(n, r) {
    var s = n.ref,
      l = n.refCleanup;
    if (s !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (f) {
          tt(n, r, f);
        } finally {
          (n.refCleanup = null),
            (n = n.alternate),
            n != null && (n.refCleanup = null);
        }
      else if (typeof s == "function")
        try {
          s(null);
        } catch (f) {
          tt(n, r, f);
        }
      else s.current = null;
  }
  function Qy(n) {
    var r = n.type,
      s = n.memoizedProps,
      l = n.stateNode;
    try {
      e: switch (r) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          s.autoFocus && l.focus();
          break e;
        case "img":
          s.src ? (l.src = s.src) : s.srcSet && (l.srcset = s.srcSet);
      }
    } catch (f) {
      tt(n, n.return, f);
    }
  }
  function Zy(n, r, s) {
    try {
      var l = n.stateNode;
      $T(l, n.type, s, r), (l[Se] = r);
    } catch (f) {
      tt(n, n.return, f);
    }
  }
  function Iy(n) {
    return (
      n.tag === 5 || n.tag === 3 || n.tag === 26 || n.tag === 27 || n.tag === 4
    );
  }
  function bd(n) {
    e: for (;;) {
      for (; n.sibling === null; ) {
        if (n.return === null || Iy(n.return)) return null;
        n = n.return;
      }
      for (
        n.sibling.return = n.return, n = n.sibling;
        n.tag !== 5 && n.tag !== 6 && n.tag !== 27 && n.tag !== 18;

      ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        (n.child.return = n), (n = n.child);
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Sd(n, r, s) {
    var l = n.tag;
    if (l === 5 || l === 6)
      (n = n.stateNode),
        r
          ? s.nodeType === 8
            ? s.parentNode.insertBefore(n, r)
            : s.insertBefore(n, r)
          : (s.nodeType === 8
              ? ((r = s.parentNode), r.insertBefore(n, s))
              : ((r = s), r.appendChild(n)),
            (s = s._reactRootContainer),
            s != null || r.onclick !== null || (r.onclick = xu));
    else if (l !== 4 && l !== 27 && ((n = n.child), n !== null))
      for (Sd(n, r, s), n = n.sibling; n !== null; )
        Sd(n, r, s), (n = n.sibling);
  }
  function lu(n, r, s) {
    var l = n.tag;
    if (l === 5 || l === 6)
      (n = n.stateNode), r ? s.insertBefore(n, r) : s.appendChild(n);
    else if (l !== 4 && l !== 27 && ((n = n.child), n !== null))
      for (lu(n, r, s), n = n.sibling; n !== null; )
        lu(n, r, s), (n = n.sibling);
  }
  var Ur = !1,
    yt = !1,
    xd = !1,
    Wy = typeof WeakSet == "function" ? WeakSet : Set,
    Ut = null,
    Jy = !1;
  function bT(n, r) {
    if (((n = n.containerInfo), (Qd = Ru), (n = gg(n)), Tf(n))) {
      if ("selectionStart" in n)
        var s = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          s = ((s = n.ownerDocument) && s.defaultView) || window;
          var l = s.getSelection && s.getSelection();
          if (l && l.rangeCount !== 0) {
            s = l.anchorNode;
            var f = l.anchorOffset,
              p = l.focusNode;
            l = l.focusOffset;
            try {
              s.nodeType, p.nodeType;
            } catch {
              s = null;
              break e;
            }
            var v = 0,
              T = -1,
              D = -1,
              z = 0,
              I = 0,
              ee = n,
              $ = null;
            t: for (;;) {
              for (
                var Z;
                ee !== s || (f !== 0 && ee.nodeType !== 3) || (T = v + f),
                  ee !== p || (l !== 0 && ee.nodeType !== 3) || (D = v + l),
                  ee.nodeType === 3 && (v += ee.nodeValue.length),
                  (Z = ee.firstChild) !== null;

              )
                ($ = ee), (ee = Z);
              for (;;) {
                if (ee === n) break t;
                if (
                  ($ === s && ++z === f && (T = v),
                  $ === p && ++I === l && (D = v),
                  (Z = ee.nextSibling) !== null)
                )
                  break;
                (ee = $), ($ = ee.parentNode);
              }
              ee = Z;
            }
            s = T === -1 || D === -1 ? null : { start: T, end: D };
          } else s = null;
        }
      s = s || { start: 0, end: 0 };
    } else s = null;
    for (
      Zd = { focusedElem: n, selectionRange: s }, Ru = !1, Ut = r;
      Ut !== null;

    )
      if (
        ((r = Ut), (n = r.child), (r.subtreeFlags & 1028) !== 0 && n !== null)
      )
        (n.return = r), (Ut = n);
      else
        for (; Ut !== null; ) {
          switch (((r = Ut), (p = r.alternate), (n = r.flags), r.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if (n & 1024 && p !== null) {
                (n = void 0),
                  (s = r),
                  (f = p.memoizedProps),
                  (p = p.memoizedState),
                  (l = s.stateNode);
                try {
                  var ge = Ia(s.type, f, s.elementType === s.type);
                  (n = l.getSnapshotBeforeUpdate(ge, p)),
                    (l.__reactInternalSnapshotBeforeUpdate = n);
                } catch (Re) {
                  tt(s, s.return, Re);
                }
              }
              break;
            case 3:
              if (n & 1024) {
                if (
                  ((n = r.stateNode.containerInfo), (s = n.nodeType), s === 9)
                )
                  eh(n);
                else if (s === 1)
                  switch (n.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      eh(n);
                      break;
                    default:
                      n.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if (n & 1024) throw Error(i(163));
          }
          if (((n = r.sibling), n !== null)) {
            (n.return = r.return), (Ut = n);
            break;
          }
          Ut = r.return;
        }
    return (ge = Jy), (Jy = !1), ge;
  }
  function e0(n, r, s) {
    var l = s.flags;
    switch (s.tag) {
      case 0:
      case 11:
      case 15:
        Pr(n, s), l & 4 && lo(5, s);
        break;
      case 1:
        if ((Pr(n, s), l & 4))
          if (((n = s.stateNode), r === null))
            try {
              n.componentDidMount();
            } catch (T) {
              tt(s, s.return, T);
            }
          else {
            var f = Ia(s.type, r.memoizedProps);
            r = r.memoizedState;
            try {
              n.componentDidUpdate(f, r, n.__reactInternalSnapshotBeforeUpdate);
            } catch (T) {
              tt(s, s.return, T);
            }
          }
        l & 64 && Ky(s), l & 512 && ei(s, s.return);
        break;
      case 3:
        if ((Pr(n, s), l & 64 && ((l = s.updateQueue), l !== null))) {
          if (((n = null), s.child !== null))
            switch (s.child.tag) {
              case 27:
              case 5:
                n = s.child.stateNode;
                break;
              case 1:
                n = s.child.stateNode;
            }
          try {
            Gy(l, n);
          } catch (T) {
            tt(s, s.return, T);
          }
        }
        break;
      case 26:
        Pr(n, s), l & 512 && ei(s, s.return);
        break;
      case 27:
      case 5:
        Pr(n, s), r === null && l & 4 && Qy(s), l & 512 && ei(s, s.return);
        break;
      case 12:
        Pr(n, s);
        break;
      case 13:
        Pr(n, s), l & 4 && r0(n, s);
        break;
      case 22:
        if (((f = s.memoizedState !== null || Ur), !f)) {
          r = (r !== null && r.memoizedState !== null) || yt;
          var p = Ur,
            v = yt;
          (Ur = f),
            (yt = r) && !v ? ha(n, s, (s.subtreeFlags & 8772) !== 0) : Pr(n, s),
            (Ur = p),
            (yt = v);
        }
        l & 512 &&
          (s.memoizedProps.mode === "manual"
            ? ei(s, s.return)
            : hn(s, s.return));
        break;
      default:
        Pr(n, s);
    }
  }
  function t0(n) {
    var r = n.alternate;
    r !== null && ((n.alternate = null), t0(r)),
      (n.child = null),
      (n.deletions = null),
      (n.sibling = null),
      n.tag === 5 && ((r = n.stateNode), r !== null && Cr(r)),
      (n.stateNode = null),
      (n.return = null),
      (n.dependencies = null),
      (n.memoizedProps = null),
      (n.memoizedState = null),
      (n.pendingProps = null),
      (n.stateNode = null),
      (n.updateQueue = null);
  }
  var Ot = null,
    mn = !1;
  function zr(n, r, s) {
    for (s = s.child; s !== null; ) n0(n, r, s), (s = s.sibling);
  }
  function n0(n, r, s) {
    if (Xt && typeof Xt.onCommitFiberUnmount == "function")
      try {
        Xt.onCommitFiberUnmount(ta, s);
      } catch {}
    switch (s.tag) {
      case 26:
        yt || hn(s, r),
          zr(n, r, s),
          s.memoizedState
            ? s.memoizedState.count--
            : s.stateNode && ((s = s.stateNode), s.parentNode.removeChild(s));
        break;
      case 27:
        yt || hn(s, r);
        var l = Ot,
          f = mn;
        for (
          Ot = s.stateNode, zr(n, r, s), s = s.stateNode, r = s.attributes;
          r.length;

        )
          s.removeAttributeNode(r[0]);
        Cr(s), (Ot = l), (mn = f);
        break;
      case 5:
        yt || hn(s, r);
      case 6:
        f = Ot;
        var p = mn;
        if (((Ot = null), zr(n, r, s), (Ot = f), (mn = p), Ot !== null))
          if (mn)
            try {
              (n = Ot),
                (l = s.stateNode),
                n.nodeType === 8
                  ? n.parentNode.removeChild(l)
                  : n.removeChild(l);
            } catch (v) {
              tt(s, r, v);
            }
          else
            try {
              Ot.removeChild(s.stateNode);
            } catch (v) {
              tt(s, r, v);
            }
        break;
      case 18:
        Ot !== null &&
          (mn
            ? ((r = Ot),
              (s = s.stateNode),
              r.nodeType === 8
                ? Jd(r.parentNode, s)
                : r.nodeType === 1 && Jd(r, s),
              _o(r))
            : Jd(Ot, s.stateNode));
        break;
      case 4:
        (l = Ot),
          (f = mn),
          (Ot = s.stateNode.containerInfo),
          (mn = !0),
          zr(n, r, s),
          (Ot = l),
          (mn = f);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        yt || da(2, s, r), yt || da(4, s, r), zr(n, r, s);
        break;
      case 1:
        yt ||
          (hn(s, r),
          (l = s.stateNode),
          typeof l.componentWillUnmount == "function" && Xy(s, r, l)),
          zr(n, r, s);
        break;
      case 21:
        zr(n, r, s);
        break;
      case 22:
        yt || hn(s, r),
          (yt = (l = yt) || s.memoizedState !== null),
          zr(n, r, s),
          (yt = l);
        break;
      default:
        zr(n, r, s);
    }
  }
  function r0(n, r) {
    if (
      r.memoizedState === null &&
      ((n = r.alternate),
      n !== null &&
        ((n = n.memoizedState), n !== null && ((n = n.dehydrated), n !== null)))
    )
      try {
        _o(n);
      } catch (s) {
        tt(r, r.return, s);
      }
  }
  function ST(n) {
    switch (n.tag) {
      case 13:
      case 19:
        var r = n.stateNode;
        return r === null && (r = n.stateNode = new Wy()), r;
      case 22:
        return (
          (n = n.stateNode),
          (r = n._retryCache),
          r === null && (r = n._retryCache = new Wy()),
          r
        );
      default:
        throw Error(i(435, n.tag));
    }
  }
  function wd(n, r) {
    var s = ST(n);
    r.forEach(function (l) {
      var f = kT.bind(null, n, l);
      s.has(l) || (s.add(l), l.then(f, f));
    });
  }
  function Ln(n, r) {
    var s = r.deletions;
    if (s !== null)
      for (var l = 0; l < s.length; l++) {
        var f = s[l],
          p = n,
          v = r,
          T = v;
        e: for (; T !== null; ) {
          switch (T.tag) {
            case 27:
            case 5:
              (Ot = T.stateNode), (mn = !1);
              break e;
            case 3:
              (Ot = T.stateNode.containerInfo), (mn = !0);
              break e;
            case 4:
              (Ot = T.stateNode.containerInfo), (mn = !0);
              break e;
          }
          T = T.return;
        }
        if (Ot === null) throw Error(i(160));
        n0(p, v, f),
          (Ot = null),
          (mn = !1),
          (p = f.alternate),
          p !== null && (p.return = null),
          (f.return = null);
      }
    if (r.subtreeFlags & 13878)
      for (r = r.child; r !== null; ) a0(r, n), (r = r.sibling);
  }
  var Zn = null;
  function a0(n, r) {
    var s = n.alternate,
      l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ln(r, n),
          Bn(n),
          l & 4 && (da(3, n, n.return), lo(3, n), da(5, n, n.return));
        break;
      case 1:
        Ln(r, n),
          Bn(n),
          l & 512 && (yt || s === null || hn(s, s.return)),
          l & 64 &&
            Ur &&
            ((n = n.updateQueue),
            n !== null &&
              ((l = n.callbacks),
              l !== null &&
                ((s = n.shared.hiddenCallbacks),
                (n.shared.hiddenCallbacks = s === null ? l : s.concat(l)))));
        break;
      case 26:
        var f = Zn;
        if (
          (Ln(r, n),
          Bn(n),
          l & 512 && (yt || s === null || hn(s, s.return)),
          l & 4)
        ) {
          var p = s !== null ? s.memoizedState : null;
          if (((l = n.memoizedState), s === null))
            if (l === null)
              if (n.stateNode === null) {
                e: {
                  (l = n.type),
                    (s = n.memoizedProps),
                    (f = f.ownerDocument || f);
                  t: switch (l) {
                    case "title":
                      (p = f.getElementsByTagName("title")[0]),
                        (!p ||
                          p[Cn] ||
                          p[pe] ||
                          p.namespaceURI === "http://www.w3.org/2000/svg" ||
                          p.hasAttribute("itemprop")) &&
                          ((p = f.createElement(l)),
                          f.head.insertBefore(
                            p,
                            f.querySelector("head > title")
                          )),
                        Yt(p, l, s),
                        (p[pe] = n),
                        at(p),
                        (l = p);
                      break e;
                    case "link":
                      var v = Q0("link", "href", f).get(l + (s.href || ""));
                      if (v) {
                        for (var T = 0; T < v.length; T++)
                          if (
                            ((p = v[T]),
                            p.getAttribute("href") ===
                              (s.href == null ? null : s.href) &&
                              p.getAttribute("rel") ===
                                (s.rel == null ? null : s.rel) &&
                              p.getAttribute("title") ===
                                (s.title == null ? null : s.title) &&
                              p.getAttribute("crossorigin") ===
                                (s.crossOrigin == null ? null : s.crossOrigin))
                          ) {
                            v.splice(T, 1);
                            break t;
                          }
                      }
                      (p = f.createElement(l)),
                        Yt(p, l, s),
                        f.head.appendChild(p);
                      break;
                    case "meta":
                      if (
                        (v = Q0("meta", "content", f).get(
                          l + (s.content || "")
                        ))
                      ) {
                        for (T = 0; T < v.length; T++)
                          if (
                            ((p = v[T]),
                            p.getAttribute("content") ===
                              (s.content == null ? null : "" + s.content) &&
                              p.getAttribute("name") ===
                                (s.name == null ? null : s.name) &&
                              p.getAttribute("property") ===
                                (s.property == null ? null : s.property) &&
                              p.getAttribute("http-equiv") ===
                                (s.httpEquiv == null ? null : s.httpEquiv) &&
                              p.getAttribute("charset") ===
                                (s.charSet == null ? null : s.charSet))
                          ) {
                            v.splice(T, 1);
                            break t;
                          }
                      }
                      (p = f.createElement(l)),
                        Yt(p, l, s),
                        f.head.appendChild(p);
                      break;
                    default:
                      throw Error(i(468, l));
                  }
                  (p[pe] = n), at(p), (l = p);
                }
                n.stateNode = l;
              } else Z0(f, n.type, n.stateNode);
            else n.stateNode = X0(f, l, n.memoizedProps);
          else
            p !== l
              ? (p === null
                  ? s.stateNode !== null &&
                    ((s = s.stateNode), s.parentNode.removeChild(s))
                  : p.count--,
                l === null
                  ? Z0(f, n.type, n.stateNode)
                  : X0(f, l, n.memoizedProps))
              : l === null &&
                n.stateNode !== null &&
                Zy(n, n.memoizedProps, s.memoizedProps);
        }
        break;
      case 27:
        if (l & 4 && n.alternate === null) {
          (f = n.stateNode), (p = n.memoizedProps);
          try {
            for (var D = f.firstChild; D; ) {
              var z = D.nextSibling,
                I = D.nodeName;
              D[Cn] ||
                I === "HEAD" ||
                I === "BODY" ||
                I === "SCRIPT" ||
                I === "STYLE" ||
                (I === "LINK" && D.rel.toLowerCase() === "stylesheet") ||
                f.removeChild(D),
                (D = z);
            }
            for (var ee = n.type, $ = f.attributes; $.length; )
              f.removeAttributeNode($[0]);
            Yt(f, ee, p), (f[pe] = n), (f[Se] = p);
          } catch (ge) {
            tt(n, n.return, ge);
          }
        }
      case 5:
        if (
          (Ln(r, n),
          Bn(n),
          l & 512 && (yt || s === null || hn(s, s.return)),
          n.flags & 32)
        ) {
          f = n.stateNode;
          try {
            Ei(f, "");
          } catch (ge) {
            tt(n, n.return, ge);
          }
        }
        l & 4 &&
          n.stateNode != null &&
          ((f = n.memoizedProps), Zy(n, f, s !== null ? s.memoizedProps : f)),
          l & 1024 && (xd = !0);
        break;
      case 6:
        if ((Ln(r, n), Bn(n), l & 4)) {
          if (n.stateNode === null) throw Error(i(162));
          (l = n.memoizedProps), (s = n.stateNode);
          try {
            s.nodeValue = l;
          } catch (ge) {
            tt(n, n.return, ge);
          }
        }
        break;
      case 3:
        if (
          ((Cu = null),
          (f = Zn),
          (Zn = Tu(r.containerInfo)),
          Ln(r, n),
          (Zn = f),
          Bn(n),
          l & 4 && s !== null && s.memoizedState.isDehydrated)
        )
          try {
            _o(r.containerInfo);
          } catch (ge) {
            tt(n, n.return, ge);
          }
        xd && ((xd = !1), i0(n));
        break;
      case 4:
        (l = Zn),
          (Zn = Tu(n.stateNode.containerInfo)),
          Ln(r, n),
          Bn(n),
          (Zn = l);
        break;
      case 12:
        Ln(r, n), Bn(n);
        break;
      case 13:
        Ln(r, n),
          Bn(n),
          n.child.flags & 8192 &&
            (n.memoizedState !== null) !=
              (s !== null && s.memoizedState !== null) &&
            (Dd = fn()),
          l & 4 &&
            ((l = n.updateQueue),
            l !== null && ((n.updateQueue = null), wd(n, l)));
        break;
      case 22:
        if (
          (l & 512 && (yt || s === null || hn(s, s.return)),
          (D = n.memoizedState !== null),
          (z = s !== null && s.memoizedState !== null),
          (I = Ur),
          (ee = yt),
          (Ur = I || D),
          (yt = ee || z),
          Ln(r, n),
          (yt = ee),
          (Ur = I),
          Bn(n),
          (r = n.stateNode),
          (r._current = n),
          (r._visibility &= -3),
          (r._visibility |= r._pendingVisibility & 2),
          l & 8192 &&
            ((r._visibility = D ? r._visibility & -2 : r._visibility | 1),
            D && ((r = Ur || yt), s === null || z || r || Hi(n)),
            n.memoizedProps === null || n.memoizedProps.mode !== "manual"))
        )
          e: for (s = null, r = n; ; ) {
            if (r.tag === 5 || r.tag === 26 || r.tag === 27) {
              if (s === null) {
                z = s = r;
                try {
                  if (((f = z.stateNode), D))
                    (p = f.style),
                      typeof p.setProperty == "function"
                        ? p.setProperty("display", "none", "important")
                        : (p.display = "none");
                  else {
                    (v = z.stateNode), (T = z.memoizedProps.style);
                    var Z =
                      T != null && T.hasOwnProperty("display")
                        ? T.display
                        : null;
                    v.style.display =
                      Z == null || typeof Z == "boolean" ? "" : ("" + Z).trim();
                  }
                } catch (ge) {
                  tt(z, z.return, ge);
                }
              }
            } else if (r.tag === 6) {
              if (s === null) {
                z = r;
                try {
                  z.stateNode.nodeValue = D ? "" : z.memoizedProps;
                } catch (ge) {
                  tt(z, z.return, ge);
                }
              }
            } else if (
              ((r.tag !== 22 && r.tag !== 23) ||
                r.memoizedState === null ||
                r === n) &&
              r.child !== null
            ) {
              (r.child.return = r), (r = r.child);
              continue;
            }
            if (r === n) break e;
            for (; r.sibling === null; ) {
              if (r.return === null || r.return === n) break e;
              s === r && (s = null), (r = r.return);
            }
            s === r && (s = null),
              (r.sibling.return = r.return),
              (r = r.sibling);
          }
        l & 4 &&
          ((l = n.updateQueue),
          l !== null &&
            ((s = l.retryQueue),
            s !== null && ((l.retryQueue = null), wd(n, s))));
        break;
      case 19:
        Ln(r, n),
          Bn(n),
          l & 4 &&
            ((l = n.updateQueue),
            l !== null && ((n.updateQueue = null), wd(n, l)));
        break;
      case 21:
        break;
      default:
        Ln(r, n), Bn(n);
    }
  }
  function Bn(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        if (n.tag !== 27) {
          e: {
            for (var s = n.return; s !== null; ) {
              if (Iy(s)) {
                var l = s;
                break e;
              }
              s = s.return;
            }
            throw Error(i(160));
          }
          switch (l.tag) {
            case 27:
              var f = l.stateNode,
                p = bd(n);
              lu(n, p, f);
              break;
            case 5:
              var v = l.stateNode;
              l.flags & 32 && (Ei(v, ""), (l.flags &= -33));
              var T = bd(n);
              lu(n, T, v);
              break;
            case 3:
            case 4:
              var D = l.stateNode.containerInfo,
                z = bd(n);
              Sd(n, z, D);
              break;
            default:
              throw Error(i(161));
          }
        }
      } catch (I) {
        tt(n, n.return, I);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function i0(n) {
    if (n.subtreeFlags & 1024)
      for (n = n.child; n !== null; ) {
        var r = n;
        i0(r),
          r.tag === 5 && r.flags & 1024 && r.stateNode.reset(),
          (n = n.sibling);
      }
  }
  function Pr(n, r) {
    if (r.subtreeFlags & 8772)
      for (r = r.child; r !== null; ) e0(n, r.alternate, r), (r = r.sibling);
  }
  function Hi(n) {
    for (n = n.child; n !== null; ) {
      var r = n;
      switch (r.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          da(4, r, r.return), Hi(r);
          break;
        case 1:
          hn(r, r.return);
          var s = r.stateNode;
          typeof s.componentWillUnmount == "function" && Xy(r, r.return, s),
            Hi(r);
          break;
        case 26:
        case 27:
        case 5:
          hn(r, r.return), Hi(r);
          break;
        case 22:
          hn(r, r.return), r.memoizedState === null && Hi(r);
          break;
        default:
          Hi(r);
      }
      n = n.sibling;
    }
  }
  function ha(n, r, s) {
    for (s = s && (r.subtreeFlags & 8772) !== 0, r = r.child; r !== null; ) {
      var l = r.alternate,
        f = n,
        p = r,
        v = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          ha(f, p, s), lo(4, p);
          break;
        case 1:
          if (
            (ha(f, p, s),
            (l = p),
            (f = l.stateNode),
            typeof f.componentDidMount == "function")
          )
            try {
              f.componentDidMount();
            } catch (z) {
              tt(l, l.return, z);
            }
          if (((l = p), (f = l.updateQueue), f !== null)) {
            var T = l.stateNode;
            try {
              var D = f.shared.hiddenCallbacks;
              if (D !== null)
                for (f.shared.hiddenCallbacks = null, f = 0; f < D.length; f++)
                  Yy(D[f], T);
            } catch (z) {
              tt(l, l.return, z);
            }
          }
          s && v & 64 && Ky(p), ei(p, p.return);
          break;
        case 26:
        case 27:
        case 5:
          ha(f, p, s), s && l === null && v & 4 && Qy(p), ei(p, p.return);
          break;
        case 12:
          ha(f, p, s);
          break;
        case 13:
          ha(f, p, s), s && v & 4 && r0(f, p);
          break;
        case 22:
          p.memoizedState === null && ha(f, p, s), ei(p, p.return);
          break;
        default:
          ha(f, p, s);
      }
      r = r.sibling;
    }
  }
  function Td(n, r) {
    var s = null;
    n !== null &&
      n.memoizedState !== null &&
      n.memoizedState.cachePool !== null &&
      (s = n.memoizedState.cachePool.pool),
      (n = null),
      r.memoizedState !== null &&
        r.memoizedState.cachePool !== null &&
        (n = r.memoizedState.cachePool.pool),
      n !== s && (n != null && n.refCount++, s != null && Ws(s));
  }
  function Ed(n, r) {
    (n = null),
      r.alternate !== null && (n = r.alternate.memoizedState.cache),
      (r = r.memoizedState.cache),
      r !== n && (r.refCount++, n != null && Ws(n));
  }
  function ma(n, r, s, l) {
    if (r.subtreeFlags & 10256)
      for (r = r.child; r !== null; ) s0(n, r, s, l), (r = r.sibling);
  }
  function s0(n, r, s, l) {
    var f = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
        ma(n, r, s, l), f & 2048 && lo(9, r);
        break;
      case 3:
        ma(n, r, s, l),
          f & 2048 &&
            ((n = null),
            r.alternate !== null && (n = r.alternate.memoizedState.cache),
            (r = r.memoizedState.cache),
            r !== n && (r.refCount++, n != null && Ws(n)));
        break;
      case 12:
        if (f & 2048) {
          ma(n, r, s, l), (n = r.stateNode);
          try {
            var p = r.memoizedProps,
              v = p.id,
              T = p.onPostCommit;
            typeof T == "function" &&
              T(
                v,
                r.alternate === null ? "mount" : "update",
                n.passiveEffectDuration,
                -0
              );
          } catch (D) {
            tt(r, r.return, D);
          }
        } else ma(n, r, s, l);
        break;
      case 23:
        break;
      case 22:
        (p = r.stateNode),
          r.memoizedState !== null
            ? p._visibility & 4
              ? ma(n, r, s, l)
              : uo(n, r)
            : p._visibility & 4
            ? ma(n, r, s, l)
            : ((p._visibility |= 4),
              qi(n, r, s, l, (r.subtreeFlags & 10256) !== 0)),
          f & 2048 && Td(r.alternate, r);
        break;
      case 24:
        ma(n, r, s, l), f & 2048 && Ed(r.alternate, r);
        break;
      default:
        ma(n, r, s, l);
    }
  }
  function qi(n, r, s, l, f) {
    for (f = f && (r.subtreeFlags & 10256) !== 0, r = r.child; r !== null; ) {
      var p = n,
        v = r,
        T = s,
        D = l,
        z = v.flags;
      switch (v.tag) {
        case 0:
        case 11:
        case 15:
          qi(p, v, T, D, f), lo(8, v);
          break;
        case 23:
          break;
        case 22:
          var I = v.stateNode;
          v.memoizedState !== null
            ? I._visibility & 4
              ? qi(p, v, T, D, f)
              : uo(p, v)
            : ((I._visibility |= 4), qi(p, v, T, D, f)),
            f && z & 2048 && Td(v.alternate, v);
          break;
        case 24:
          qi(p, v, T, D, f), f && z & 2048 && Ed(v.alternate, v);
          break;
        default:
          qi(p, v, T, D, f);
      }
      r = r.sibling;
    }
  }
  function uo(n, r) {
    if (r.subtreeFlags & 10256)
      for (r = r.child; r !== null; ) {
        var s = n,
          l = r,
          f = l.flags;
        switch (l.tag) {
          case 22:
            uo(s, l), f & 2048 && Td(l.alternate, l);
            break;
          case 24:
            uo(s, l), f & 2048 && Ed(l.alternate, l);
            break;
          default:
            uo(s, l);
        }
        r = r.sibling;
      }
  }
  var co = 8192;
  function $i(n) {
    if (n.subtreeFlags & co)
      for (n = n.child; n !== null; ) o0(n), (n = n.sibling);
  }
  function o0(n) {
    switch (n.tag) {
      case 26:
        $i(n),
          n.flags & co &&
            n.memoizedState !== null &&
            lE(Zn, n.memoizedState, n.memoizedProps);
        break;
      case 5:
        $i(n);
        break;
      case 3:
      case 4:
        var r = Zn;
        (Zn = Tu(n.stateNode.containerInfo)), $i(n), (Zn = r);
        break;
      case 22:
        n.memoizedState === null &&
          ((r = n.alternate),
          r !== null && r.memoizedState !== null
            ? ((r = co), (co = 16777216), $i(n), (co = r))
            : $i(n));
        break;
      default:
        $i(n);
    }
  }
  function l0(n) {
    var r = n.alternate;
    if (r !== null && ((n = r.child), n !== null)) {
      r.child = null;
      do (r = n.sibling), (n.sibling = null), (n = r);
      while (n !== null);
    }
  }
  function fo(n) {
    var r = n.deletions;
    if (n.flags & 16) {
      if (r !== null)
        for (var s = 0; s < r.length; s++) {
          var l = r[s];
          (Ut = l), c0(l, n);
        }
      l0(n);
    }
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) u0(n), (n = n.sibling);
  }
  function u0(n) {
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        fo(n), n.flags & 2048 && da(9, n, n.return);
        break;
      case 3:
        fo(n);
        break;
      case 12:
        fo(n);
        break;
      case 22:
        var r = n.stateNode;
        n.memoizedState !== null &&
        r._visibility & 4 &&
        (n.return === null || n.return.tag !== 13)
          ? ((r._visibility &= -5), uu(n))
          : fo(n);
        break;
      default:
        fo(n);
    }
  }
  function uu(n) {
    var r = n.deletions;
    if (n.flags & 16) {
      if (r !== null)
        for (var s = 0; s < r.length; s++) {
          var l = r[s];
          (Ut = l), c0(l, n);
        }
      l0(n);
    }
    for (n = n.child; n !== null; ) {
      switch (((r = n), r.tag)) {
        case 0:
        case 11:
        case 15:
          da(8, r, r.return), uu(r);
          break;
        case 22:
          (s = r.stateNode),
            s._visibility & 4 && ((s._visibility &= -5), uu(r));
          break;
        default:
          uu(r);
      }
      n = n.sibling;
    }
  }
  function c0(n, r) {
    for (; Ut !== null; ) {
      var s = Ut;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          da(8, s, r);
          break;
        case 23:
        case 22:
          if (s.memoizedState !== null && s.memoizedState.cachePool !== null) {
            var l = s.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Ws(s.memoizedState.cache);
      }
      if (((l = s.child), l !== null)) (l.return = s), (Ut = l);
      else
        e: for (s = n; Ut !== null; ) {
          l = Ut;
          var f = l.sibling,
            p = l.return;
          if ((t0(l), l === s)) {
            Ut = null;
            break e;
          }
          if (f !== null) {
            (f.return = p), (Ut = f);
            break e;
          }
          Ut = p;
        }
    }
  }
  function xT(n, r, s, l) {
    (this.tag = n),
      (this.key = s),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = r),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Un(n, r, s, l) {
    return new xT(n, r, s, l);
  }
  function Cd(n) {
    return (n = n.prototype), !(!n || !n.isReactComponent);
  }
  function pa(n, r) {
    var s = n.alternate;
    return (
      s === null
        ? ((s = Un(n.tag, r, n.key, n.mode)),
          (s.elementType = n.elementType),
          (s.type = n.type),
          (s.stateNode = n.stateNode),
          (s.alternate = n),
          (n.alternate = s))
        : ((s.pendingProps = r),
          (s.type = n.type),
          (s.flags = 0),
          (s.subtreeFlags = 0),
          (s.deletions = null)),
      (s.flags = n.flags & 31457280),
      (s.childLanes = n.childLanes),
      (s.lanes = n.lanes),
      (s.child = n.child),
      (s.memoizedProps = n.memoizedProps),
      (s.memoizedState = n.memoizedState),
      (s.updateQueue = n.updateQueue),
      (r = n.dependencies),
      (s.dependencies =
        r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }),
      (s.sibling = n.sibling),
      (s.index = n.index),
      (s.ref = n.ref),
      (s.refCleanup = n.refCleanup),
      s
    );
  }
  function f0(n, r) {
    n.flags &= 31457282;
    var s = n.alternate;
    return (
      s === null
        ? ((n.childLanes = 0),
          (n.lanes = r),
          (n.child = null),
          (n.subtreeFlags = 0),
          (n.memoizedProps = null),
          (n.memoizedState = null),
          (n.updateQueue = null),
          (n.dependencies = null),
          (n.stateNode = null))
        : ((n.childLanes = s.childLanes),
          (n.lanes = s.lanes),
          (n.child = s.child),
          (n.subtreeFlags = 0),
          (n.deletions = null),
          (n.memoizedProps = s.memoizedProps),
          (n.memoizedState = s.memoizedState),
          (n.updateQueue = s.updateQueue),
          (n.type = s.type),
          (r = s.dependencies),
          (n.dependencies =
            r === null
              ? null
              : { lanes: r.lanes, firstContext: r.firstContext })),
      n
    );
  }
  function cu(n, r, s, l, f, p) {
    var v = 0;
    if (((l = n), typeof n == "function")) Cd(n) && (v = 1);
    else if (typeof n == "string")
      v = sE(n, s, jt.current)
        ? 26
        : n === "html" || n === "head" || n === "body"
        ? 27
        : 5;
    else
      e: switch (n) {
        case h:
          return ti(s.children, f, p, r);
        case m:
          (v = 8), (f |= 24);
          break;
        case g:
          return (
            (n = Un(12, s, r, f | 2)), (n.elementType = g), (n.lanes = p), n
          );
        case S:
          return (n = Un(13, s, r, f)), (n.elementType = S), (n.lanes = p), n;
        case A:
          return (n = Un(19, s, r, f)), (n.elementType = A), (n.lanes = p), n;
        case M:
          return d0(s, f, p, r);
        default:
          if (typeof n == "object" && n !== null)
            switch (n.$$typeof) {
              case y:
              case x:
                v = 10;
                break e;
              case b:
                v = 9;
                break e;
              case w:
                v = 11;
                break e;
              case C:
                v = 14;
                break e;
              case O:
                (v = 16), (l = null);
                break e;
            }
          (v = 29),
            (s = Error(i(130, n === null ? "null" : typeof n, ""))),
            (l = null);
      }
    return (
      (r = Un(v, s, r, f)), (r.elementType = n), (r.type = l), (r.lanes = p), r
    );
  }
  function ti(n, r, s, l) {
    return (n = Un(7, n, l, r)), (n.lanes = s), n;
  }
  function d0(n, r, s, l) {
    (n = Un(22, n, l, r)), (n.elementType = M), (n.lanes = s);
    var f = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var p = f._current;
        if (p === null) throw Error(i(456));
        if (!(f._pendingVisibility & 2)) {
          var v = ra(p, 2);
          v !== null && ((f._pendingVisibility |= 2), nn(v, p, 2));
        }
      },
      attach: function () {
        var p = f._current;
        if (p === null) throw Error(i(456));
        if (f._pendingVisibility & 2) {
          var v = ra(p, 2);
          v !== null && ((f._pendingVisibility &= -3), nn(v, p, 2));
        }
      },
    };
    return (n.stateNode = f), n;
  }
  function Ad(n, r, s) {
    return (n = Un(6, n, null, r)), (n.lanes = s), n;
  }
  function _d(n, r, s) {
    return (
      (r = Un(4, n.children !== null ? n.children : [], n.key, r)),
      (r.lanes = s),
      (r.stateNode = {
        containerInfo: n.containerInfo,
        pendingChildren: null,
        implementation: n.implementation,
      }),
      r
    );
  }
  function Vr(n) {
    n.flags |= 4;
  }
  function h0(n, r) {
    if (r.type !== "stylesheet" || r.state.loading & 4) n.flags &= -16777217;
    else if (((n.flags |= 16777216), !I0(r))) {
      if (
        ((r = kn.current),
        r !== null &&
          (($e & 4194176) === $e
            ? cr !== null
            : (($e & 62914560) !== $e && !($e & 536870912)) || r !== cr))
      )
        throw ((Qs = Mf), Ng);
      n.flags |= 8192;
    }
  }
  function fu(n, r) {
    r !== null && (n.flags |= 4),
      n.flags & 16384 &&
        ((r = n.tag !== 22 ? L() : 536870912), (n.lanes |= r), (Yi |= r));
  }
  function ho(n, r) {
    if (!Ge)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var s = null; r !== null; )
            r.alternate !== null && (s = r), (r = r.sibling);
          s === null ? (n.tail = null) : (s.sibling = null);
          break;
        case "collapsed":
          s = n.tail;
          for (var l = null; s !== null; )
            s.alternate !== null && (l = s), (s = s.sibling);
          l === null
            ? r || n.tail === null
              ? (n.tail = null)
              : (n.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function dt(n) {
    var r = n.alternate !== null && n.alternate.child === n.child,
      s = 0,
      l = 0;
    if (r)
      for (var f = n.child; f !== null; )
        (s |= f.lanes | f.childLanes),
          (l |= f.subtreeFlags & 31457280),
          (l |= f.flags & 31457280),
          (f.return = n),
          (f = f.sibling);
    else
      for (f = n.child; f !== null; )
        (s |= f.lanes | f.childLanes),
          (l |= f.subtreeFlags),
          (l |= f.flags),
          (f.return = n),
          (f = f.sibling);
    return (n.subtreeFlags |= l), (n.childLanes = s), r;
  }
  function wT(n, r, s) {
    var l = r.pendingProps;
    switch ((Nf(r), r.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return dt(r), null;
      case 1:
        return dt(r), null;
      case 3:
        return (
          (s = r.stateNode),
          (l = null),
          n !== null && (l = n.memoizedState.cache),
          r.memoizedState.cache !== l && (r.flags |= 2048),
          Br(kt),
          ea(),
          s.pendingContext &&
            ((s.context = s.pendingContext), (s.pendingContext = null)),
          (n === null || n.child === null) &&
            (Ys(r)
              ? Vr(r)
              : n === null ||
                (n.memoizedState.isDehydrated && !(r.flags & 256)) ||
                ((r.flags |= 1024), Qn !== null && (Bd(Qn), (Qn = null)))),
          dt(r),
          null
        );
      case 26:
        return (
          (s = r.memoizedState),
          n === null
            ? (Vr(r),
              s !== null ? (dt(r), h0(r, s)) : (dt(r), (r.flags &= -16777217)))
            : s
            ? s !== n.memoizedState
              ? (Vr(r), dt(r), h0(r, s))
              : (dt(r), (r.flags &= -16777217))
            : (n.memoizedProps !== l && Vr(r), dt(r), (r.flags &= -16777217)),
          null
        );
      case 27:
        Si(r), (s = ir.current);
        var f = r.type;
        if (n !== null && r.stateNode != null) n.memoizedProps !== l && Vr(r);
        else {
          if (!l) {
            if (r.stateNode === null) throw Error(i(166));
            return dt(r), null;
          }
          (n = jt.current),
            Ys(r) ? Rg(r) : ((n = $0(f, l, s)), (r.stateNode = n), Vr(r));
        }
        return dt(r), null;
      case 5:
        if ((Si(r), (s = r.type), n !== null && r.stateNode != null))
          n.memoizedProps !== l && Vr(r);
        else {
          if (!l) {
            if (r.stateNode === null) throw Error(i(166));
            return dt(r), null;
          }
          if (((n = jt.current), Ys(r))) Rg(r);
          else {
            switch (((f = wu(ir.current)), n)) {
              case 1:
                n = f.createElementNS("http://www.w3.org/2000/svg", s);
                break;
              case 2:
                n = f.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                break;
              default:
                switch (s) {
                  case "svg":
                    n = f.createElementNS("http://www.w3.org/2000/svg", s);
                    break;
                  case "math":
                    n = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
                    );
                    break;
                  case "script":
                    (n = f.createElement("div")),
                      (n.innerHTML = "<script></script>"),
                      (n = n.removeChild(n.firstChild));
                    break;
                  case "select":
                    (n =
                      typeof l.is == "string"
                        ? f.createElement("select", { is: l.is })
                        : f.createElement("select")),
                      l.multiple
                        ? (n.multiple = !0)
                        : l.size && (n.size = l.size);
                    break;
                  default:
                    n =
                      typeof l.is == "string"
                        ? f.createElement(s, { is: l.is })
                        : f.createElement(s);
                }
            }
            (n[pe] = r), (n[Se] = l);
            e: for (f = r.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6) n.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                (f.child.return = f), (f = f.child);
                continue;
              }
              if (f === r) break e;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === r) break e;
                f = f.return;
              }
              (f.sibling.return = f.return), (f = f.sibling);
            }
            r.stateNode = n;
            e: switch ((Yt(n, s, l), s)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!l.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
            n && Vr(r);
          }
        }
        return dt(r), (r.flags &= -16777217), null;
      case 6:
        if (n && r.stateNode != null) n.memoizedProps !== l && Vr(r);
        else {
          if (typeof l != "string" && r.stateNode === null) throw Error(i(166));
          if (((n = ir.current), Ys(r))) {
            if (
              ((n = r.stateNode),
              (s = r.memoizedProps),
              (l = null),
              (f = tn),
              f !== null)
            )
              switch (f.tag) {
                case 27:
                case 5:
                  l = f.memoizedProps;
              }
            (n[pe] = r),
              (n = !!(
                n.nodeValue === s ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                z0(n.nodeValue, s)
              )),
              n || Ya(r);
          } else (n = wu(n).createTextNode(l)), (n[pe] = r), (r.stateNode = n);
        }
        return dt(r), null;
      case 13:
        if (
          ((l = r.memoizedState),
          n === null ||
            (n.memoizedState !== null && n.memoizedState.dehydrated !== null))
        ) {
          if (((f = Ys(r)), l !== null && l.dehydrated !== null)) {
            if (n === null) {
              if (!f) throw Error(i(318));
              if (
                ((f = r.memoizedState),
                (f = f !== null ? f.dehydrated : null),
                !f)
              )
                throw Error(i(317));
              f[pe] = r;
            } else
              Gs(),
                !(r.flags & 128) && (r.memoizedState = null),
                (r.flags |= 4);
            dt(r), (f = !1);
          } else Qn !== null && (Bd(Qn), (Qn = null)), (f = !0);
          if (!f) return r.flags & 256 ? (Dr(r), r) : (Dr(r), null);
        }
        if ((Dr(r), r.flags & 128)) return (r.lanes = s), r;
        if (
          ((s = l !== null), (n = n !== null && n.memoizedState !== null), s)
        ) {
          (l = r.child),
            (f = null),
            l.alternate !== null &&
              l.alternate.memoizedState !== null &&
              l.alternate.memoizedState.cachePool !== null &&
              (f = l.alternate.memoizedState.cachePool.pool);
          var p = null;
          l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (p = l.memoizedState.cachePool.pool),
            p !== f && (l.flags |= 2048);
        }
        return (
          s !== n && s && (r.child.flags |= 8192),
          fu(r, r.updateQueue),
          dt(r),
          null
        );
      case 4:
        return ea(), n === null && Gd(r.stateNode.containerInfo), dt(r), null;
      case 10:
        return Br(r.type), dt(r), null;
      case 19:
        if ((pt(Mt), (f = r.memoizedState), f === null)) return dt(r), null;
        if (((l = (r.flags & 128) !== 0), (p = f.rendering), p === null))
          if (l) ho(f, !1);
          else {
            if (vt !== 0 || (n !== null && n.flags & 128))
              for (n = r.child; n !== null; ) {
                if (((p = Xl(n)), p !== null)) {
                  for (
                    r.flags |= 128,
                      ho(f, !1),
                      n = p.updateQueue,
                      r.updateQueue = n,
                      fu(r, n),
                      r.subtreeFlags = 0,
                      n = s,
                      s = r.child;
                    s !== null;

                  )
                    f0(s, n), (s = s.sibling);
                  return De(Mt, (Mt.current & 1) | 2), r.child;
                }
                n = n.sibling;
              }
            f.tail !== null &&
              fn() > du &&
              ((r.flags |= 128), (l = !0), ho(f, !1), (r.lanes = 4194304));
          }
        else {
          if (!l)
            if (((n = Xl(p)), n !== null)) {
              if (
                ((r.flags |= 128),
                (l = !0),
                (n = n.updateQueue),
                (r.updateQueue = n),
                fu(r, n),
                ho(f, !0),
                f.tail === null &&
                  f.tailMode === "hidden" &&
                  !p.alternate &&
                  !Ge)
              )
                return dt(r), null;
            } else
              2 * fn() - f.renderingStartTime > du &&
                s !== 536870912 &&
                ((r.flags |= 128), (l = !0), ho(f, !1), (r.lanes = 4194304));
          f.isBackwards
            ? ((p.sibling = r.child), (r.child = p))
            : ((n = f.last),
              n !== null ? (n.sibling = p) : (r.child = p),
              (f.last = p));
        }
        return f.tail !== null
          ? ((r = f.tail),
            (f.rendering = r),
            (f.tail = r.sibling),
            (f.renderingStartTime = fn()),
            (r.sibling = null),
            (n = Mt.current),
            De(Mt, l ? (n & 1) | 2 : n & 1),
            r)
          : (dt(r), null);
      case 22:
      case 23:
        return (
          Dr(r),
          Lf(),
          (l = r.memoizedState !== null),
          n !== null
            ? (n.memoizedState !== null) !== l && (r.flags |= 8192)
            : l && (r.flags |= 8192),
          l
            ? s & 536870912 &&
              !(r.flags & 128) &&
              (dt(r), r.subtreeFlags & 6 && (r.flags |= 8192))
            : dt(r),
          (s = r.updateQueue),
          s !== null && fu(r, s.retryQueue),
          (s = null),
          n !== null &&
            n.memoizedState !== null &&
            n.memoizedState.cachePool !== null &&
            (s = n.memoizedState.cachePool.pool),
          (l = null),
          r.memoizedState !== null &&
            r.memoizedState.cachePool !== null &&
            (l = r.memoizedState.cachePool.pool),
          l !== s && (r.flags |= 2048),
          n !== null && pt(Ka),
          null
        );
      case 24:
        return (
          (s = null),
          n !== null && (s = n.memoizedState.cache),
          r.memoizedState.cache !== s && (r.flags |= 2048),
          Br(kt),
          dt(r),
          null
        );
      case 25:
        return null;
    }
    throw Error(i(156, r.tag));
  }
  function TT(n, r) {
    switch ((Nf(r), r.tag)) {
      case 1:
        return (
          (n = r.flags), n & 65536 ? ((r.flags = (n & -65537) | 128), r) : null
        );
      case 3:
        return (
          Br(kt),
          ea(),
          (n = r.flags),
          n & 65536 && !(n & 128) ? ((r.flags = (n & -65537) | 128), r) : null
        );
      case 26:
      case 27:
      case 5:
        return Si(r), null;
      case 13:
        if (
          (Dr(r), (n = r.memoizedState), n !== null && n.dehydrated !== null)
        ) {
          if (r.alternate === null) throw Error(i(340));
          Gs();
        }
        return (
          (n = r.flags), n & 65536 ? ((r.flags = (n & -65537) | 128), r) : null
        );
      case 19:
        return pt(Mt), null;
      case 4:
        return ea(), null;
      case 10:
        return Br(r.type), null;
      case 22:
      case 23:
        return (
          Dr(r),
          Lf(),
          n !== null && pt(Ka),
          (n = r.flags),
          n & 65536 ? ((r.flags = (n & -65537) | 128), r) : null
        );
      case 24:
        return Br(kt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function m0(n, r) {
    switch ((Nf(r), r.tag)) {
      case 3:
        Br(kt), ea();
        break;
      case 26:
      case 27:
      case 5:
        Si(r);
        break;
      case 4:
        ea();
        break;
      case 13:
        Dr(r);
        break;
      case 19:
        pt(Mt);
        break;
      case 10:
        Br(r.type);
        break;
      case 22:
      case 23:
        Dr(r), Lf(), n !== null && pt(Ka);
        break;
      case 24:
        Br(kt);
    }
  }
  var ET = {
      getCacheForType: function (n) {
        var r = Qt(kt),
          s = r.data.get(n);
        return s === void 0 && ((s = n()), r.data.set(n, s)), s;
      },
    },
    CT = typeof WeakMap == "function" ? WeakMap : Map,
    ht = 0,
    it = null,
    Ue = null,
    $e = 0,
    st = 0,
    pn = null,
    jr = !1,
    Fi = !1,
    Rd = !1,
    Hr = 0,
    vt = 0,
    ga = 0,
    ni = 0,
    Od = 0,
    zn = 0,
    Yi = 0,
    mo = null,
    dr = null,
    Nd = !1,
    Dd = 0,
    du = 1 / 0,
    hu = null,
    ya = null,
    mu = !1,
    ri = null,
    po = 0,
    Md = 0,
    kd = null,
    go = 0,
    Ld = null;
  function gn() {
    if (ht & 2 && $e !== 0) return $e & -$e;
    if (Y.T !== null) {
      var n = Ui;
      return n !== 0 ? n : qd();
    }
    return fe();
  }
  function p0() {
    zn === 0 && (zn = !($e & 536870912) || Ge ? _l() : 536870912);
    var n = kn.current;
    return n !== null && (n.flags |= 32), zn;
  }
  function nn(n, r, s) {
    ((n === it && st === 2) || n.cancelPendingCommit !== null) &&
      (Gi(n, 0), qr(n, $e, zn, !1)),
      F(n, s),
      (!(ht & 2) || n !== it) &&
        (n === it && (!(ht & 2) && (ni |= s), vt === 4 && qr(n, $e, zn, !1)),
        hr(n));
  }
  function g0(n, r, s) {
    if (ht & 6) throw Error(i(327));
    var l = (!s && (r & 60) === 0 && (r & n.expiredLanes) === 0) || lr(n, r),
      f = l ? RT(n, r) : Pd(n, r, !0),
      p = l;
    do {
      if (f === 0) {
        Fi && !l && qr(n, r, 0, !1);
        break;
      } else if (f === 6) qr(n, r, 0, !jr);
      else {
        if (((s = n.current.alternate), p && !AT(s))) {
          (f = Pd(n, r, !1)), (p = !1);
          continue;
        }
        if (f === 2) {
          if (((p = r), n.errorRecoveryDisabledLanes & p)) var v = 0;
          else
            (v = n.pendingLanes & -536870913),
              (v = v !== 0 ? v : v & 536870912 ? 536870912 : 0);
          if (v !== 0) {
            r = v;
            e: {
              var T = n;
              f = mo;
              var D = T.current.memoizedState.isDehydrated;
              if ((D && (Gi(T, v).flags |= 256), (v = Pd(T, v, !1)), v !== 2)) {
                if (Rd && !D) {
                  (T.errorRecoveryDisabledLanes |= p), (ni |= p), (f = 4);
                  break e;
                }
                (p = dr), (dr = f), p !== null && Bd(p);
              }
              f = v;
            }
            if (((p = !1), f !== 2)) continue;
          }
        }
        if (f === 1) {
          Gi(n, 0), qr(n, r, 0, !0);
          break;
        }
        e: {
          switch (((l = n), f)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((r & 4194176) === r) {
                qr(l, r, zn, !jr);
                break e;
              }
              break;
            case 2:
              dr = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if (
            ((l.finishedWork = s),
            (l.finishedLanes = r),
            (r & 62914560) === r && ((p = Dd + 300 - fn()), 10 < p))
          ) {
            if ((qr(l, r, zn, !jr), Er(l, 0) !== 0)) break e;
            l.timeoutHandle = j0(
              y0.bind(null, l, s, dr, hu, Nd, r, zn, ni, Yi, jr, 2, -0, 0),
              p
            );
            break e;
          }
          y0(l, s, dr, hu, Nd, r, zn, ni, Yi, jr, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    hr(n);
  }
  function Bd(n) {
    dr === null ? (dr = n) : dr.push.apply(dr, n);
  }
  function y0(n, r, s, l, f, p, v, T, D, z, I, ee, $) {
    var Z = r.subtreeFlags;
    if (
      (Z & 8192 || (Z & 16785408) === 16785408) &&
      ((wo = { stylesheets: null, count: 0, unsuspend: oE }),
      o0(r),
      (r = uE()),
      r !== null)
    ) {
      (n.cancelPendingCommit = r(E0.bind(null, n, s, l, f, v, T, D, 1, ee, $))),
        qr(n, p, v, !z);
      return;
    }
    E0(n, s, l, f, v, T, D, I, ee, $);
  }
  function AT(n) {
    for (var r = n; ; ) {
      var s = r.tag;
      if (
        (s === 0 || s === 11 || s === 15) &&
        r.flags & 16384 &&
        ((s = r.updateQueue), s !== null && ((s = s.stores), s !== null))
      )
        for (var l = 0; l < s.length; l++) {
          var f = s[l],
            p = f.getSnapshot;
          f = f.value;
          try {
            if (!dn(p(), f)) return !1;
          } catch {
            return !1;
          }
        }
      if (((s = r.child), r.subtreeFlags & 16384 && s !== null))
        (s.return = r), (r = s);
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        (r.sibling.return = r.return), (r = r.sibling);
      }
    }
    return !0;
  }
  function qr(n, r, s, l) {
    (r &= ~Od),
      (r &= ~ni),
      (n.suspendedLanes |= r),
      (n.pingedLanes &= ~r),
      l && (n.warmLanes |= r),
      (l = n.expirationTimes);
    for (var f = r; 0 < f; ) {
      var p = 31 - Lt(f),
        v = 1 << p;
      (l[p] = -1), (f &= ~v);
    }
    s !== 0 && ue(n, s, r);
  }
  function pu() {
    return ht & 6 ? !0 : (yo(0), !1);
  }
  function Ud() {
    if (Ue !== null) {
      if (st === 0) var n = Ue.return;
      else (n = Ue), (Lr = Wa = null), qf(n), (Li = null), (Zs = 0), (n = Ue);
      for (; n !== null; ) m0(n.alternate, n), (n = n.return);
      Ue = null;
    }
  }
  function Gi(n, r) {
    (n.finishedWork = null), (n.finishedLanes = 0);
    var s = n.timeoutHandle;
    s !== -1 && ((n.timeoutHandle = -1), YT(s)),
      (s = n.cancelPendingCommit),
      s !== null && ((n.cancelPendingCommit = null), s()),
      Ud(),
      (it = n),
      (Ue = s = pa(n.current, null)),
      ($e = r),
      (st = 0),
      (pn = null),
      (jr = !1),
      (Fi = lr(n, r)),
      (Rd = !1),
      (Yi = zn = Od = ni = ga = vt = 0),
      (dr = mo = null),
      (Nd = !1),
      r & 8 && (r |= r & 32);
    var l = n.entangledLanes;
    if (l !== 0)
      for (n = n.entanglements, l &= r; 0 < l; ) {
        var f = 31 - Lt(l),
          p = 1 << f;
        (r |= n[f]), (l &= ~p);
      }
    return (Hr = r), Vl(), s;
  }
  function v0(n, r) {
    (ke = null),
      (Y.H = fr),
      r === Xs
        ? ((r = kg()), (st = 3))
        : r === Ng
        ? ((r = kg()), (st = 4))
        : (st =
            r === Dy
              ? 8
              : r !== null &&
                typeof r == "object" &&
                typeof r.then == "function"
              ? 6
              : 1),
      (pn = r),
      Ue === null && ((vt = 1), iu(n, Nn(r, n.current)));
  }
  function b0() {
    var n = Y.H;
    return (Y.H = fr), n === null ? fr : n;
  }
  function S0() {
    var n = Y.A;
    return (Y.A = ET), n;
  }
  function zd() {
    (vt = 4),
      jr || (($e & 4194176) !== $e && kn.current !== null) || (Fi = !0),
      (!(ga & 134217727) && !(ni & 134217727)) ||
        it === null ||
        qr(it, $e, zn, !1);
  }
  function Pd(n, r, s) {
    var l = ht;
    ht |= 2;
    var f = b0(),
      p = S0();
    (it !== n || $e !== r) && ((hu = null), Gi(n, r)), (r = !1);
    var v = vt;
    e: do
      try {
        if (st !== 0 && Ue !== null) {
          var T = Ue,
            D = pn;
          switch (st) {
            case 8:
              Ud(), (v = 6);
              break e;
            case 3:
            case 2:
            case 6:
              kn.current === null && (r = !0);
              var z = st;
              if (((st = 0), (pn = null), Ki(n, T, D, z), s && Fi)) {
                v = 0;
                break e;
              }
              break;
            default:
              (z = st), (st = 0), (pn = null), Ki(n, T, D, z);
          }
        }
        _T(), (v = vt);
        break;
      } catch (I) {
        v0(n, I);
      }
    while (!0);
    return (
      r && n.shellSuspendCounter++,
      (Lr = Wa = null),
      (ht = l),
      (Y.H = f),
      (Y.A = p),
      Ue === null && ((it = null), ($e = 0), Vl()),
      v
    );
  }
  function _T() {
    for (; Ue !== null; ) x0(Ue);
  }
  function RT(n, r) {
    var s = ht;
    ht |= 2;
    var l = b0(),
      f = S0();
    it !== n || $e !== r
      ? ((hu = null), (du = fn() + 500), Gi(n, r))
      : (Fi = lr(n, r));
    e: do
      try {
        if (st !== 0 && Ue !== null) {
          r = Ue;
          var p = pn;
          t: switch (st) {
            case 1:
              (st = 0), (pn = null), Ki(n, r, p, 1);
              break;
            case 2:
              if (Dg(p)) {
                (st = 0), (pn = null), w0(r);
                break;
              }
              (r = function () {
                st === 2 && it === n && (st = 7), hr(n);
              }),
                p.then(r, r);
              break e;
            case 3:
              st = 7;
              break e;
            case 4:
              st = 5;
              break e;
            case 7:
              Dg(p)
                ? ((st = 0), (pn = null), w0(r))
                : ((st = 0), (pn = null), Ki(n, r, p, 7));
              break;
            case 5:
              var v = null;
              switch (Ue.tag) {
                case 26:
                  v = Ue.memoizedState;
                case 5:
                case 27:
                  var T = Ue;
                  if (!v || I0(v)) {
                    (st = 0), (pn = null);
                    var D = T.sibling;
                    if (D !== null) Ue = D;
                    else {
                      var z = T.return;
                      z !== null ? ((Ue = z), gu(z)) : (Ue = null);
                    }
                    break t;
                  }
              }
              (st = 0), (pn = null), Ki(n, r, p, 5);
              break;
            case 6:
              (st = 0), (pn = null), Ki(n, r, p, 6);
              break;
            case 8:
              Ud(), (vt = 6);
              break e;
            default:
              throw Error(i(462));
          }
        }
        OT();
        break;
      } catch (I) {
        v0(n, I);
      }
    while (!0);
    return (
      (Lr = Wa = null),
      (Y.H = l),
      (Y.A = f),
      (ht = s),
      Ue !== null ? 0 : ((it = null), ($e = 0), Vl(), vt)
    );
  }
  function OT() {
    for (; Ue !== null && !Tr(); ) x0(Ue);
  }
  function x0(n) {
    var r = $y(n.alternate, n, Hr);
    (n.memoizedProps = n.pendingProps), r === null ? gu(n) : (Ue = r);
  }
  function w0(n) {
    var r = n,
      s = r.alternate;
    switch (r.tag) {
      case 15:
      case 0:
        r = zy(s, r, r.pendingProps, r.type, void 0, $e);
        break;
      case 11:
        r = zy(s, r, r.pendingProps, r.type.render, r.ref, $e);
        break;
      case 5:
        qf(r);
      default:
        m0(s, r), (r = Ue = f0(r, Hr)), (r = $y(s, r, Hr));
    }
    (n.memoizedProps = n.pendingProps), r === null ? gu(n) : (Ue = r);
  }
  function Ki(n, r, s, l) {
    (Lr = Wa = null), qf(r), (Li = null), (Zs = 0);
    var f = r.return;
    try {
      if (yT(n, f, r, s, $e)) {
        (vt = 1), iu(n, Nn(s, n.current)), (Ue = null);
        return;
      }
    } catch (p) {
      if (f !== null) throw ((Ue = f), p);
      (vt = 1), iu(n, Nn(s, n.current)), (Ue = null);
      return;
    }
    r.flags & 32768
      ? (Ge || l === 1
          ? (n = !0)
          : Fi || $e & 536870912
          ? (n = !1)
          : ((jr = n = !0),
            (l === 2 || l === 3 || l === 6) &&
              ((l = kn.current),
              l !== null && l.tag === 13 && (l.flags |= 16384))),
        T0(r, n))
      : gu(r);
  }
  function gu(n) {
    var r = n;
    do {
      if (r.flags & 32768) {
        T0(r, jr);
        return;
      }
      n = r.return;
      var s = wT(r.alternate, r, Hr);
      if (s !== null) {
        Ue = s;
        return;
      }
      if (((r = r.sibling), r !== null)) {
        Ue = r;
        return;
      }
      Ue = r = n;
    } while (r !== null);
    vt === 0 && (vt = 5);
  }
  function T0(n, r) {
    do {
      var s = TT(n.alternate, n);
      if (s !== null) {
        (s.flags &= 32767), (Ue = s);
        return;
      }
      if (
        ((s = n.return),
        s !== null &&
          ((s.flags |= 32768), (s.subtreeFlags = 0), (s.deletions = null)),
        !r && ((n = n.sibling), n !== null))
      ) {
        Ue = n;
        return;
      }
      Ue = n = s;
    } while (n !== null);
    (vt = 6), (Ue = null);
  }
  function E0(n, r, s, l, f, p, v, T, D, z) {
    var I = Y.T,
      ee = se.p;
    try {
      (se.p = 2), (Y.T = null), NT(n, r, s, l, ee, f, p, v, T, D, z);
    } finally {
      (Y.T = I), (se.p = ee);
    }
  }
  function NT(n, r, s, l, f, p, v, T) {
    do Xi();
    while (ri !== null);
    if (ht & 6) throw Error(i(327));
    var D = n.finishedWork;
    if (((l = n.finishedLanes), D === null)) return null;
    if (((n.finishedWork = null), (n.finishedLanes = 0), D === n.current))
      throw Error(i(177));
    (n.callbackNode = null),
      (n.callbackPriority = 0),
      (n.cancelPendingCommit = null);
    var z = D.lanes | D.childLanes;
    if (
      ((z |= _f),
      re(n, l, z, p, v, T),
      n === it && ((Ue = it = null), ($e = 0)),
      (!(D.subtreeFlags & 10256) && !(D.flags & 10256)) ||
        mu ||
        ((mu = !0),
        (Md = z),
        (kd = s),
        LT(Ba, function () {
          return Xi(), null;
        })),
      (s = (D.flags & 15990) !== 0),
      D.subtreeFlags & 15990 || s
        ? ((s = Y.T),
          (Y.T = null),
          (p = se.p),
          (se.p = 2),
          (v = ht),
          (ht |= 4),
          bT(n, D),
          a0(D, n),
          eT(Zd, n.containerInfo),
          (Ru = !!Qd),
          (Zd = Qd = null),
          (n.current = D),
          e0(n, D.alternate, D),
          La(),
          (ht = v),
          (se.p = p),
          (Y.T = s))
        : (n.current = D),
      mu ? ((mu = !1), (ri = n), (po = l)) : C0(n, z),
      (z = n.pendingLanes),
      z === 0 && (ya = null),
      af(D.stateNode),
      hr(n),
      r !== null)
    )
      for (f = n.onRecoverableError, D = 0; D < r.length; D++)
        (z = r[D]), f(z.value, { componentStack: z.stack });
    return (
      po & 3 && Xi(),
      (z = n.pendingLanes),
      l & 4194218 && z & 42
        ? n === Ld
          ? go++
          : ((go = 0), (Ld = n))
        : (go = 0),
      yo(0),
      null
    );
  }
  function C0(n, r) {
    (n.pooledCacheLanes &= r) === 0 &&
      ((r = n.pooledCache), r != null && ((n.pooledCache = null), Ws(r)));
  }
  function Xi() {
    if (ri !== null) {
      var n = ri,
        r = Md;
      Md = 0;
      var s = Ee(po),
        l = Y.T,
        f = se.p;
      try {
        if (((se.p = 32 > s ? 32 : s), (Y.T = null), ri === null)) var p = !1;
        else {
          (s = kd), (kd = null);
          var v = ri,
            T = po;
          if (((ri = null), (po = 0), ht & 6)) throw Error(i(331));
          var D = ht;
          if (
            ((ht |= 4),
            u0(v.current),
            s0(v, v.current, T, s),
            (ht = D),
            yo(0, !1),
            Xt && typeof Xt.onPostCommitFiberRoot == "function")
          )
            try {
              Xt.onPostCommitFiberRoot(ta, v);
            } catch {}
          p = !0;
        }
        return p;
      } finally {
        (se.p = f), (Y.T = l), C0(n, r);
      }
    }
    return !1;
  }
  function A0(n, r, s) {
    (r = Nn(s, r)),
      (r = nd(n.stateNode, r, 2)),
      (n = fa(n, r, 2)),
      n !== null && (F(n, 2), hr(n));
  }
  function tt(n, r, s) {
    if (n.tag === 3) A0(n, n, s);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          A0(r, n, s);
          break;
        } else if (r.tag === 1) {
          var l = r.stateNode;
          if (
            typeof r.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (ya === null || !ya.has(l)))
          ) {
            (n = Nn(s, n)),
              (s = Oy(2)),
              (l = fa(r, s, 2)),
              l !== null && (Ny(s, l, r, n), F(l, 2), hr(l));
            break;
          }
        }
        r = r.return;
      }
  }
  function Vd(n, r, s) {
    var l = n.pingCache;
    if (l === null) {
      l = n.pingCache = new CT();
      var f = new Set();
      l.set(r, f);
    } else (f = l.get(r)), f === void 0 && ((f = new Set()), l.set(r, f));
    f.has(s) ||
      ((Rd = !0), f.add(s), (n = DT.bind(null, n, r, s)), r.then(n, n));
  }
  function DT(n, r, s) {
    var l = n.pingCache;
    l !== null && l.delete(r),
      (n.pingedLanes |= n.suspendedLanes & s),
      (n.warmLanes &= ~s),
      it === n &&
        ($e & s) === s &&
        (vt === 4 || (vt === 3 && ($e & 62914560) === $e && 300 > fn() - Dd)
          ? !(ht & 2) && Gi(n, 0)
          : (Od |= s),
        Yi === $e && (Yi = 0)),
      hr(n);
  }
  function _0(n, r) {
    r === 0 && (r = L()), (n = ra(n, r)), n !== null && (F(n, r), hr(n));
  }
  function MT(n) {
    var r = n.memoizedState,
      s = 0;
    r !== null && (s = r.retryLane), _0(n, s);
  }
  function kT(n, r) {
    var s = 0;
    switch (n.tag) {
      case 13:
        var l = n.stateNode,
          f = n.memoizedState;
        f !== null && (s = f.retryLane);
        break;
      case 19:
        l = n.stateNode;
        break;
      case 22:
        l = n.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    l !== null && l.delete(r), _0(n, s);
  }
  function LT(n, r) {
    return Ds(n, r);
  }
  var yu = null,
    Qi = null,
    jd = !1,
    vu = !1,
    Hd = !1,
    ai = 0;
  function hr(n) {
    n !== Qi &&
      n.next === null &&
      (Qi === null ? (yu = Qi = n) : (Qi = Qi.next = n)),
      (vu = !0),
      jd || ((jd = !0), UT(BT));
  }
  function yo(n, r) {
    if (!Hd && vu) {
      Hd = !0;
      do
        for (var s = !1, l = yu; l !== null; ) {
          if (n !== 0) {
            var f = l.pendingLanes;
            if (f === 0) var p = 0;
            else {
              var v = l.suspendedLanes,
                T = l.pingedLanes;
              (p = (1 << (31 - Lt(42 | n) + 1)) - 1),
                (p &= f & ~(v & ~T)),
                (p = p & 201326677 ? (p & 201326677) | 1 : p ? p | 2 : 0);
            }
            p !== 0 && ((s = !0), N0(l, p));
          } else
            (p = $e),
              (p = Er(l, l === it ? p : 0)),
              !(p & 3) || lr(l, p) || ((s = !0), N0(l, p));
          l = l.next;
        }
      while (s);
      Hd = !1;
    }
  }
  function BT() {
    vu = jd = !1;
    var n = 0;
    ai !== 0 && (FT() && (n = ai), (ai = 0));
    for (var r = fn(), s = null, l = yu; l !== null; ) {
      var f = l.next,
        p = R0(l, r);
      p === 0
        ? ((l.next = null),
          s === null ? (yu = f) : (s.next = f),
          f === null && (Qi = s))
        : ((s = l), (n !== 0 || p & 3) && (vu = !0)),
        (l = f);
    }
    yo(n);
  }
  function R0(n, r) {
    for (
      var s = n.suspendedLanes,
        l = n.pingedLanes,
        f = n.expirationTimes,
        p = n.pendingLanes & -62914561;
      0 < p;

    ) {
      var v = 31 - Lt(p),
        T = 1 << v,
        D = f[v];
      D === -1
        ? (!(T & s) || T & l) && (f[v] = of(T, r))
        : D <= r && (n.expiredLanes |= T),
        (p &= ~T);
    }
    if (
      ((r = it),
      (s = $e),
      (s = Er(n, n === r ? s : 0)),
      (l = n.callbackNode),
      s === 0 || (n === r && st === 2) || n.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && Ms(l),
        (n.callbackNode = null),
        (n.callbackPriority = 0)
      );
    if (!(s & 3) || lr(n, s)) {
      if (((r = s & -s), r === n.callbackPriority)) return r;
      switch ((l !== null && Ms(l), Ee(s))) {
        case 2:
        case 8:
          s = En;
          break;
        case 32:
          s = Ba;
          break;
        case 268435456:
          s = El;
          break;
        default:
          s = Ba;
      }
      return (
        (l = O0.bind(null, n)),
        (s = Ds(s, l)),
        (n.callbackPriority = r),
        (n.callbackNode = s),
        r
      );
    }
    return (
      l !== null && l !== null && Ms(l),
      (n.callbackPriority = 2),
      (n.callbackNode = null),
      2
    );
  }
  function O0(n, r) {
    var s = n.callbackNode;
    if (Xi() && n.callbackNode !== s) return null;
    var l = $e;
    return (
      (l = Er(n, n === it ? l : 0)),
      l === 0
        ? null
        : (g0(n, l, r),
          R0(n, fn()),
          n.callbackNode != null && n.callbackNode === s
            ? O0.bind(null, n)
            : null)
    );
  }
  function N0(n, r) {
    if (Xi()) return null;
    g0(n, r, !0);
  }
  function UT(n) {
    GT(function () {
      ht & 6 ? Ds(Gn, n) : n();
    });
  }
  function qd() {
    return ai === 0 && (ai = _l()), ai;
  }
  function D0(n) {
    return n == null || typeof n == "symbol" || typeof n == "boolean"
      ? null
      : typeof n == "function"
      ? n
      : Ml("" + n);
  }
  function M0(n, r) {
    var s = r.ownerDocument.createElement("input");
    return (
      (s.name = r.name),
      (s.value = r.value),
      n.id && s.setAttribute("form", n.id),
      r.parentNode.insertBefore(s, r),
      (n = new FormData(n)),
      s.parentNode.removeChild(s),
      n
    );
  }
  function zT(n, r, s, l, f) {
    if (r === "submit" && s && s.stateNode === f) {
      var p = D0((f[Se] || null).action),
        v = l.submitter;
      v &&
        ((r = (r = v[Se] || null)
          ? D0(r.formAction)
          : v.getAttribute("formAction")),
        r !== null && ((p = r), (v = null)));
      var T = new Ul("action", "action", null, l, f);
      n.push({
        event: T,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (ai !== 0) {
                  var D = v ? M0(f, v) : new FormData(f);
                  If(
                    s,
                    { pending: !0, data: D, method: f.method, action: p },
                    null,
                    D
                  );
                }
              } else
                typeof p == "function" &&
                  (T.preventDefault(),
                  (D = v ? M0(f, v) : new FormData(f)),
                  If(
                    s,
                    { pending: !0, data: D, method: f.method, action: p },
                    p,
                    D
                  ));
            },
            currentTarget: f,
          },
        ],
      });
    }
  }
  for (var $d = 0; $d < Eg.length; $d++) {
    var Fd = Eg[$d],
      PT = Fd.toLowerCase(),
      VT = Fd[0].toUpperCase() + Fd.slice(1);
    Xn(PT, "on" + VT);
  }
  Xn(bg, "onAnimationEnd"),
    Xn(Sg, "onAnimationIteration"),
    Xn(xg, "onAnimationStart"),
    Xn("dblclick", "onDoubleClick"),
    Xn("focusin", "onFocus"),
    Xn("focusout", "onBlur"),
    Xn(nT, "onTransitionRun"),
    Xn(rT, "onTransitionStart"),
    Xn(aT, "onTransitionCancel"),
    Xn(wg, "onTransitionEnd"),
    ct("onMouseEnter", ["mouseout", "mouseover"]),
    ct("onMouseLeave", ["mouseout", "mouseover"]),
    ct("onPointerEnter", ["pointerout", "pointerover"]),
    ct("onPointerLeave", ["pointerout", "pointerover"]),
    qe(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    qe(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    qe("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    qe(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    qe(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    qe(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var vo =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    jT = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(vo)
    );
  function k0(n, r) {
    r = (r & 4) !== 0;
    for (var s = 0; s < n.length; s++) {
      var l = n[s],
        f = l.event;
      l = l.listeners;
      e: {
        var p = void 0;
        if (r)
          for (var v = l.length - 1; 0 <= v; v--) {
            var T = l[v],
              D = T.instance,
              z = T.currentTarget;
            if (((T = T.listener), D !== p && f.isPropagationStopped()))
              break e;
            (p = T), (f.currentTarget = z);
            try {
              p(f);
            } catch (I) {
              au(I);
            }
            (f.currentTarget = null), (p = D);
          }
        else
          for (v = 0; v < l.length; v++) {
            if (
              ((T = l[v]),
              (D = T.instance),
              (z = T.currentTarget),
              (T = T.listener),
              D !== p && f.isPropagationStopped())
            )
              break e;
            (p = T), (f.currentTarget = z);
            try {
              p(f);
            } catch (I) {
              au(I);
            }
            (f.currentTarget = null), (p = D);
          }
      }
    }
  }
  function Pe(n, r) {
    var s = r[Tt];
    s === void 0 && (s = r[Tt] = new Set());
    var l = n + "__bubble";
    s.has(l) || (L0(r, n, 2, !1), s.add(l));
  }
  function Yd(n, r, s) {
    var l = 0;
    r && (l |= 4), L0(s, n, l, r);
  }
  var bu = "_reactListening" + Math.random().toString(36).slice(2);
  function Gd(n) {
    if (!n[bu]) {
      (n[bu] = !0),
        za.forEach(function (s) {
          s !== "selectionchange" && (jT.has(s) || Yd(s, !1, n), Yd(s, !0, n));
        });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[bu] || ((r[bu] = !0), Yd("selectionchange", !1, r));
    }
  }
  function L0(n, r, s, l) {
    switch (rv(r)) {
      case 2:
        var f = dE;
        break;
      case 8:
        f = hE;
        break;
      default:
        f = ih;
    }
    (s = f.bind(null, r, s, n)),
      (f = void 0),
      !mf ||
        (r !== "touchstart" && r !== "touchmove" && r !== "wheel") ||
        (f = !0),
      l
        ? f !== void 0
          ? n.addEventListener(r, s, { capture: !0, passive: f })
          : n.addEventListener(r, s, !0)
        : f !== void 0
        ? n.addEventListener(r, s, { passive: f })
        : n.addEventListener(r, s, !1);
  }
  function Kd(n, r, s, l, f) {
    var p = l;
    if (!(r & 1) && !(r & 2) && l !== null)
      e: for (;;) {
        if (l === null) return;
        var v = l.tag;
        if (v === 3 || v === 4) {
          var T = l.stateNode.containerInfo;
          if (T === f || (T.nodeType === 8 && T.parentNode === f)) break;
          if (v === 4)
            for (v = l.return; v !== null; ) {
              var D = v.tag;
              if (
                (D === 3 || D === 4) &&
                ((D = v.stateNode.containerInfo),
                D === f || (D.nodeType === 8 && D.parentNode === f))
              )
                return;
              v = v.return;
            }
          for (; T !== null; ) {
            if (((v = Ht(T)), v === null)) return;
            if (((D = v.tag), D === 5 || D === 6 || D === 26 || D === 27)) {
              l = p = v;
              continue e;
            }
            T = T.parentNode;
          }
        }
        l = l.return;
      }
    Qp(function () {
      var z = p,
        I = df(s),
        ee = [];
      e: {
        var $ = Tg.get(n);
        if ($ !== void 0) {
          var Z = Ul,
            ge = n;
          switch (n) {
            case "keypress":
              if (Ll(s) === 0) break e;
            case "keydown":
            case "keyup":
              Z = kw;
              break;
            case "focusin":
              (ge = "focus"), (Z = vf);
              break;
            case "focusout":
              (ge = "blur"), (Z = vf);
              break;
            case "beforeblur":
            case "afterblur":
              Z = vf;
              break;
            case "click":
              if (s.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Z = Wp;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Z = xw;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Z = Uw;
              break;
            case bg:
            case Sg:
            case xg:
              Z = Ew;
              break;
            case wg:
              Z = Pw;
              break;
            case "scroll":
            case "scrollend":
              Z = bw;
              break;
            case "wheel":
              Z = jw;
              break;
            case "copy":
            case "cut":
            case "paste":
              Z = Aw;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Z = eg;
              break;
            case "toggle":
            case "beforetoggle":
              Z = qw;
          }
          var Re = (r & 4) !== 0,
            bt = !Re && (n === "scroll" || n === "scrollend"),
            V = Re ? ($ !== null ? $ + "Capture" : null) : $;
          Re = [];
          for (var U = z, H; U !== null; ) {
            var W = U;
            if (
              ((H = W.stateNode),
              (W = W.tag),
              (W !== 5 && W !== 26 && W !== 27) ||
                H === null ||
                V === null ||
                ((W = Us(U, V)), W != null && Re.push(bo(U, W, H))),
              bt)
            )
              break;
            U = U.return;
          }
          0 < Re.length &&
            (($ = new Z($, ge, null, s, I)),
            ee.push({ event: $, listeners: Re }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (
            (($ = n === "mouseover" || n === "pointerover"),
            (Z = n === "mouseout" || n === "pointerout"),
            $ &&
              s !== ff &&
              (ge = s.relatedTarget || s.fromElement) &&
              (Ht(ge) || ge[Xe]))
          )
            break e;
          if (
            (Z || $) &&
            (($ =
              I.window === I
                ? I
                : ($ = I.ownerDocument)
                ? $.defaultView || $.parentWindow
                : window),
            Z
              ? ((ge = s.relatedTarget || s.toElement),
                (Z = z),
                (ge = ge ? Ht(ge) : null),
                ge !== null &&
                  ((bt = oe(ge)),
                  (Re = ge.tag),
                  ge !== bt || (Re !== 5 && Re !== 27 && Re !== 6)) &&
                  (ge = null))
              : ((Z = null), (ge = z)),
            Z !== ge)
          ) {
            if (
              ((Re = Wp),
              (W = "onMouseLeave"),
              (V = "onMouseEnter"),
              (U = "mouse"),
              (n === "pointerout" || n === "pointerover") &&
                ((Re = eg),
                (W = "onPointerLeave"),
                (V = "onPointerEnter"),
                (U = "pointer")),
              (bt = Z == null ? $ : Ar(Z)),
              (H = ge == null ? $ : Ar(ge)),
              ($ = new Re(W, U + "leave", Z, s, I)),
              ($.target = bt),
              ($.relatedTarget = H),
              (W = null),
              Ht(I) === z &&
                ((Re = new Re(V, U + "enter", ge, s, I)),
                (Re.target = H),
                (Re.relatedTarget = bt),
                (W = Re)),
              (bt = W),
              Z && ge)
            )
              t: {
                for (Re = Z, V = ge, U = 0, H = Re; H; H = Zi(H)) U++;
                for (H = 0, W = V; W; W = Zi(W)) H++;
                for (; 0 < U - H; ) (Re = Zi(Re)), U--;
                for (; 0 < H - U; ) (V = Zi(V)), H--;
                for (; U--; ) {
                  if (Re === V || (V !== null && Re === V.alternate)) break t;
                  (Re = Zi(Re)), (V = Zi(V));
                }
                Re = null;
              }
            else Re = null;
            Z !== null && B0(ee, $, Z, Re, !1),
              ge !== null && bt !== null && B0(ee, bt, ge, Re, !0);
          }
        }
        e: {
          if (
            (($ = z ? Ar(z) : window),
            (Z = $.nodeName && $.nodeName.toLowerCase()),
            Z === "select" || (Z === "input" && $.type === "file"))
          )
            var de = lg;
          else if (sg($))
            if (ug) de = Ww;
            else {
              de = Zw;
              var Le = Qw;
            }
          else
            (Z = $.nodeName),
              !Z ||
              Z.toLowerCase() !== "input" ||
              ($.type !== "checkbox" && $.type !== "radio")
                ? z && cf(z.elementType) && (de = lg)
                : (de = Iw);
          if (de && (de = de(n, z))) {
            og(ee, de, s, I);
            break e;
          }
          Le && Le(n, $, z),
            n === "focusout" &&
              z &&
              $.type === "number" &&
              z.memoizedProps.value != null &&
              uf($, "number", $.value);
        }
        switch (((Le = z ? Ar(z) : window), n)) {
          case "focusin":
            (sg(Le) || Le.contentEditable === "true") &&
              ((Ri = Le), (Ef = z), (Fs = null));
            break;
          case "focusout":
            Fs = Ef = Ri = null;
            break;
          case "mousedown":
            Cf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Cf = !1), yg(ee, s, I);
            break;
          case "selectionchange":
            if (tT) break;
          case "keydown":
          case "keyup":
            yg(ee, s, I);
        }
        var ve;
        if (Sf)
          e: {
            switch (n) {
              case "compositionstart":
                var we = "onCompositionStart";
                break e;
              case "compositionend":
                we = "onCompositionEnd";
                break e;
              case "compositionupdate":
                we = "onCompositionUpdate";
                break e;
            }
            we = void 0;
          }
        else
          _i
            ? ag(n, s) && (we = "onCompositionEnd")
            : n === "keydown" &&
              s.keyCode === 229 &&
              (we = "onCompositionStart");
        we &&
          (tg &&
            s.locale !== "ko" &&
            (_i || we !== "onCompositionStart"
              ? we === "onCompositionEnd" && _i && (ve = Zp())
              : ((na = I),
                (pf = "value" in na ? na.value : na.textContent),
                (_i = !0))),
          (Le = Su(z, we)),
          0 < Le.length &&
            ((we = new Jp(we, n, null, s, I)),
            ee.push({ event: we, listeners: Le }),
            ve
              ? (we.data = ve)
              : ((ve = ig(s)), ve !== null && (we.data = ve)))),
          (ve = Fw ? Yw(n, s) : Gw(n, s)) &&
            ((we = Su(z, "onBeforeInput")),
            0 < we.length &&
              ((Le = new Jp("onBeforeInput", "beforeinput", null, s, I)),
              ee.push({ event: Le, listeners: we }),
              (Le.data = ve))),
          zT(ee, n, z, s, I);
      }
      k0(ee, r);
    });
  }
  function bo(n, r, s) {
    return { instance: n, listener: r, currentTarget: s };
  }
  function Su(n, r) {
    for (var s = r + "Capture", l = []; n !== null; ) {
      var f = n,
        p = f.stateNode;
      (f = f.tag),
        (f !== 5 && f !== 26 && f !== 27) ||
          p === null ||
          ((f = Us(n, s)),
          f != null && l.unshift(bo(n, f, p)),
          (f = Us(n, r)),
          f != null && l.push(bo(n, f, p))),
        (n = n.return);
    }
    return l;
  }
  function Zi(n) {
    if (n === null) return null;
    do n = n.return;
    while (n && n.tag !== 5 && n.tag !== 27);
    return n || null;
  }
  function B0(n, r, s, l, f) {
    for (var p = r._reactName, v = []; s !== null && s !== l; ) {
      var T = s,
        D = T.alternate,
        z = T.stateNode;
      if (((T = T.tag), D !== null && D === l)) break;
      (T !== 5 && T !== 26 && T !== 27) ||
        z === null ||
        ((D = z),
        f
          ? ((z = Us(s, p)), z != null && v.unshift(bo(s, z, D)))
          : f || ((z = Us(s, p)), z != null && v.push(bo(s, z, D)))),
        (s = s.return);
    }
    v.length !== 0 && n.push({ event: r, listeners: v });
  }
  var HT = /\r\n?/g,
    qT = /\u0000|\uFFFD/g;
  function U0(n) {
    return (typeof n == "string" ? n : "" + n)
      .replace(
        HT,
        `
`
      )
      .replace(qT, "");
  }
  function z0(n, r) {
    return (r = U0(r)), U0(n) === r;
  }
  function xu() {}
  function We(n, r, s, l, f, p) {
    switch (s) {
      case "children":
        typeof l == "string"
          ? r === "body" || (r === "textarea" && l === "") || Ei(n, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            r !== "body" &&
            Ei(n, "" + l);
        break;
      case "className":
        Ol(n, "class", l);
        break;
      case "tabIndex":
        Ol(n, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ol(n, s, l);
        break;
      case "style":
        Kp(n, l, p);
        break;
      case "data":
        if (r !== "object") {
          Ol(n, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (r !== "a" || s !== "href")) {
          n.removeAttribute(s);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          n.removeAttribute(s);
          break;
        }
        (l = Ml("" + l)), n.setAttribute(s, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          n.setAttribute(
            s,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof p == "function" &&
            (s === "formAction"
              ? (r !== "input" && We(n, r, "name", f.name, f, null),
                We(n, r, "formEncType", f.formEncType, f, null),
                We(n, r, "formMethod", f.formMethod, f, null),
                We(n, r, "formTarget", f.formTarget, f, null))
              : (We(n, r, "encType", f.encType, f, null),
                We(n, r, "method", f.method, f, null),
                We(n, r, "target", f.target, f, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          n.removeAttribute(s);
          break;
        }
        (l = Ml("" + l)), n.setAttribute(s, l);
        break;
      case "onClick":
        l != null && (n.onclick = xu);
        break;
      case "onScroll":
        l != null && Pe("scroll", n);
        break;
      case "onScrollEnd":
        l != null && Pe("scrollend", n);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(i(61));
          if (((s = l.__html), s != null)) {
            if (f.children != null) throw Error(i(60));
            n.innerHTML = s;
          }
        }
        break;
      case "multiple":
        n.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        n.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          n.removeAttribute("xlink:href");
          break;
        }
        (s = Ml("" + l)),
          n.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", s);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? n.setAttribute(s, "" + l)
          : n.removeAttribute(s);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol"
          ? n.setAttribute(s, "")
          : n.removeAttribute(s);
        break;
      case "capture":
      case "download":
        l === !0
          ? n.setAttribute(s, "")
          : l !== !1 &&
            l != null &&
            typeof l != "function" &&
            typeof l != "symbol"
          ? n.setAttribute(s, l)
          : n.removeAttribute(s);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? n.setAttribute(s, l)
          : n.removeAttribute(s);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? n.removeAttribute(s)
          : n.setAttribute(s, l);
        break;
      case "popover":
        Pe("beforetoggle", n), Pe("toggle", n), wi(n, "popover", l);
        break;
      case "xlinkActuate":
        Rr(n, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        Rr(n, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        Rr(n, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        Rr(n, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        Rr(n, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        Rr(n, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        Rr(n, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        Rr(n, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        Rr(n, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        wi(n, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < s.length) ||
          (s[0] !== "o" && s[0] !== "O") ||
          (s[1] !== "n" && s[1] !== "N")) &&
          ((s = yw.get(s) || s), wi(n, s, l));
    }
  }
  function Xd(n, r, s, l, f, p) {
    switch (s) {
      case "style":
        Kp(n, l, p);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(i(61));
          if (((s = l.__html), s != null)) {
            if (f.children != null) throw Error(i(60));
            n.innerHTML = s;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? Ei(n, l)
          : (typeof l == "number" || typeof l == "bigint") && Ei(n, "" + l);
        break;
      case "onScroll":
        l != null && Pe("scroll", n);
        break;
      case "onScrollEnd":
        l != null && Pe("scrollend", n);
        break;
      case "onClick":
        l != null && (n.onclick = xu);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Pa.hasOwnProperty(s))
          e: {
            if (
              s[0] === "o" &&
              s[1] === "n" &&
              ((f = s.endsWith("Capture")),
              (r = s.slice(2, f ? s.length - 7 : void 0)),
              (p = n[Se] || null),
              (p = p != null ? p[s] : null),
              typeof p == "function" && n.removeEventListener(r, p, f),
              typeof l == "function")
            ) {
              typeof p != "function" &&
                p !== null &&
                (s in n
                  ? (n[s] = null)
                  : n.hasAttribute(s) && n.removeAttribute(s)),
                n.addEventListener(r, l, f);
              break e;
            }
            s in n
              ? (n[s] = l)
              : l === !0
              ? n.setAttribute(s, "")
              : wi(n, s, l);
          }
    }
  }
  function Yt(n, r, s) {
    switch (r) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Pe("error", n), Pe("load", n);
        var l = !1,
          f = !1,
          p;
        for (p in s)
          if (s.hasOwnProperty(p)) {
            var v = s[p];
            if (v != null)
              switch (p) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  f = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(i(137, r));
                default:
                  We(n, r, p, v, s, null);
              }
          }
        f && We(n, r, "srcSet", s.srcSet, s, null),
          l && We(n, r, "src", s.src, s, null);
        return;
      case "input":
        Pe("invalid", n);
        var T = (p = v = f = null),
          D = null,
          z = null;
        for (l in s)
          if (s.hasOwnProperty(l)) {
            var I = s[l];
            if (I != null)
              switch (l) {
                case "name":
                  f = I;
                  break;
                case "type":
                  v = I;
                  break;
                case "checked":
                  D = I;
                  break;
                case "defaultChecked":
                  z = I;
                  break;
                case "value":
                  p = I;
                  break;
                case "defaultValue":
                  T = I;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (I != null) throw Error(i(137, r));
                  break;
                default:
                  We(n, r, l, I, s, null);
              }
          }
        $p(n, p, T, D, z, v, f, !1), Nl(n);
        return;
      case "select":
        Pe("invalid", n), (l = v = p = null);
        for (f in s)
          if (s.hasOwnProperty(f) && ((T = s[f]), T != null))
            switch (f) {
              case "value":
                p = T;
                break;
              case "defaultValue":
                v = T;
                break;
              case "multiple":
                l = T;
              default:
                We(n, r, f, T, s, null);
            }
        (r = p),
          (s = v),
          (n.multiple = !!l),
          r != null ? Ti(n, !!l, r, !1) : s != null && Ti(n, !!l, s, !0);
        return;
      case "textarea":
        Pe("invalid", n), (p = f = l = null);
        for (v in s)
          if (s.hasOwnProperty(v) && ((T = s[v]), T != null))
            switch (v) {
              case "value":
                l = T;
                break;
              case "defaultValue":
                f = T;
                break;
              case "children":
                p = T;
                break;
              case "dangerouslySetInnerHTML":
                if (T != null) throw Error(i(91));
                break;
              default:
                We(n, r, v, T, s, null);
            }
        Yp(n, l, f, p), Nl(n);
        return;
      case "option":
        for (D in s)
          if (s.hasOwnProperty(D) && ((l = s[D]), l != null))
            switch (D) {
              case "selected":
                n.selected =
                  l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                We(n, r, D, l, s, null);
            }
        return;
      case "dialog":
        Pe("cancel", n), Pe("close", n);
        break;
      case "iframe":
      case "object":
        Pe("load", n);
        break;
      case "video":
      case "audio":
        for (l = 0; l < vo.length; l++) Pe(vo[l], n);
        break;
      case "image":
        Pe("error", n), Pe("load", n);
        break;
      case "details":
        Pe("toggle", n);
        break;
      case "embed":
      case "source":
      case "link":
        Pe("error", n), Pe("load", n);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (z in s)
          if (s.hasOwnProperty(z) && ((l = s[z]), l != null))
            switch (z) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, r));
              default:
                We(n, r, z, l, s, null);
            }
        return;
      default:
        if (cf(r)) {
          for (I in s)
            s.hasOwnProperty(I) &&
              ((l = s[I]), l !== void 0 && Xd(n, r, I, l, s, void 0));
          return;
        }
    }
    for (T in s)
      s.hasOwnProperty(T) && ((l = s[T]), l != null && We(n, r, T, l, s, null));
  }
  function $T(n, r, s, l) {
    switch (r) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var f = null,
          p = null,
          v = null,
          T = null,
          D = null,
          z = null,
          I = null;
        for (Z in s) {
          var ee = s[Z];
          if (s.hasOwnProperty(Z) && ee != null)
            switch (Z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                D = ee;
              default:
                l.hasOwnProperty(Z) || We(n, r, Z, null, l, ee);
            }
        }
        for (var $ in l) {
          var Z = l[$];
          if (((ee = s[$]), l.hasOwnProperty($) && (Z != null || ee != null)))
            switch ($) {
              case "type":
                p = Z;
                break;
              case "name":
                f = Z;
                break;
              case "checked":
                z = Z;
                break;
              case "defaultChecked":
                I = Z;
                break;
              case "value":
                v = Z;
                break;
              case "defaultValue":
                T = Z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (Z != null) throw Error(i(137, r));
                break;
              default:
                Z !== ee && We(n, r, $, Z, l, ee);
            }
        }
        lf(n, v, T, D, z, I, p, f);
        return;
      case "select":
        Z = v = T = $ = null;
        for (p in s)
          if (((D = s[p]), s.hasOwnProperty(p) && D != null))
            switch (p) {
              case "value":
                break;
              case "multiple":
                Z = D;
              default:
                l.hasOwnProperty(p) || We(n, r, p, null, l, D);
            }
        for (f in l)
          if (
            ((p = l[f]),
            (D = s[f]),
            l.hasOwnProperty(f) && (p != null || D != null))
          )
            switch (f) {
              case "value":
                $ = p;
                break;
              case "defaultValue":
                T = p;
                break;
              case "multiple":
                v = p;
              default:
                p !== D && We(n, r, f, p, l, D);
            }
        (r = T),
          (s = v),
          (l = Z),
          $ != null
            ? Ti(n, !!s, $, !1)
            : !!l != !!s &&
              (r != null ? Ti(n, !!s, r, !0) : Ti(n, !!s, s ? [] : "", !1));
        return;
      case "textarea":
        Z = $ = null;
        for (T in s)
          if (
            ((f = s[T]),
            s.hasOwnProperty(T) && f != null && !l.hasOwnProperty(T))
          )
            switch (T) {
              case "value":
                break;
              case "children":
                break;
              default:
                We(n, r, T, null, l, f);
            }
        for (v in l)
          if (
            ((f = l[v]),
            (p = s[v]),
            l.hasOwnProperty(v) && (f != null || p != null))
          )
            switch (v) {
              case "value":
                $ = f;
                break;
              case "defaultValue":
                Z = f;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(i(91));
                break;
              default:
                f !== p && We(n, r, v, f, l, p);
            }
        Fp(n, $, Z);
        return;
      case "option":
        for (var ge in s)
          if (
            (($ = s[ge]),
            s.hasOwnProperty(ge) && $ != null && !l.hasOwnProperty(ge))
          )
            switch (ge) {
              case "selected":
                n.selected = !1;
                break;
              default:
                We(n, r, ge, null, l, $);
            }
        for (D in l)
          if (
            (($ = l[D]),
            (Z = s[D]),
            l.hasOwnProperty(D) && $ !== Z && ($ != null || Z != null))
          )
            switch (D) {
              case "selected":
                n.selected =
                  $ && typeof $ != "function" && typeof $ != "symbol";
                break;
              default:
                We(n, r, D, $, l, Z);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Re in s)
          ($ = s[Re]),
            s.hasOwnProperty(Re) &&
              $ != null &&
              !l.hasOwnProperty(Re) &&
              We(n, r, Re, null, l, $);
        for (z in l)
          if (
            (($ = l[z]),
            (Z = s[z]),
            l.hasOwnProperty(z) && $ !== Z && ($ != null || Z != null))
          )
            switch (z) {
              case "children":
              case "dangerouslySetInnerHTML":
                if ($ != null) throw Error(i(137, r));
                break;
              default:
                We(n, r, z, $, l, Z);
            }
        return;
      default:
        if (cf(r)) {
          for (var bt in s)
            ($ = s[bt]),
              s.hasOwnProperty(bt) &&
                $ !== void 0 &&
                !l.hasOwnProperty(bt) &&
                Xd(n, r, bt, void 0, l, $);
          for (I in l)
            ($ = l[I]),
              (Z = s[I]),
              !l.hasOwnProperty(I) ||
                $ === Z ||
                ($ === void 0 && Z === void 0) ||
                Xd(n, r, I, $, l, Z);
          return;
        }
    }
    for (var V in s)
      ($ = s[V]),
        s.hasOwnProperty(V) &&
          $ != null &&
          !l.hasOwnProperty(V) &&
          We(n, r, V, null, l, $);
    for (ee in l)
      ($ = l[ee]),
        (Z = s[ee]),
        !l.hasOwnProperty(ee) ||
          $ === Z ||
          ($ == null && Z == null) ||
          We(n, r, ee, $, l, Z);
  }
  var Qd = null,
    Zd = null;
  function wu(n) {
    return n.nodeType === 9 ? n : n.ownerDocument;
  }
  function P0(n) {
    switch (n) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function V0(n, r) {
    if (n === 0)
      switch (r) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return n === 1 && r === "foreignObject" ? 0 : n;
  }
  function Id(n, r) {
    return (
      n === "textarea" ||
      n === "noscript" ||
      typeof r.children == "string" ||
      typeof r.children == "number" ||
      typeof r.children == "bigint" ||
      (typeof r.dangerouslySetInnerHTML == "object" &&
        r.dangerouslySetInnerHTML !== null &&
        r.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Wd = null;
  function FT() {
    var n = window.event;
    return n && n.type === "popstate"
      ? n === Wd
        ? !1
        : ((Wd = n), !0)
      : ((Wd = null), !1);
  }
  var j0 = typeof setTimeout == "function" ? setTimeout : void 0,
    YT = typeof clearTimeout == "function" ? clearTimeout : void 0,
    H0 = typeof Promise == "function" ? Promise : void 0,
    GT =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof H0 < "u"
        ? function (n) {
            return H0.resolve(null).then(n).catch(KT);
          }
        : j0;
  function KT(n) {
    setTimeout(function () {
      throw n;
    });
  }
  function Jd(n, r) {
    var s = r,
      l = 0;
    do {
      var f = s.nextSibling;
      if ((n.removeChild(s), f && f.nodeType === 8))
        if (((s = f.data), s === "/$")) {
          if (l === 0) {
            n.removeChild(f), _o(r);
            return;
          }
          l--;
        } else (s !== "$" && s !== "$?" && s !== "$!") || l++;
      s = f;
    } while (s);
    _o(r);
  }
  function eh(n) {
    var r = n.firstChild;
    for (r && r.nodeType === 10 && (r = r.nextSibling); r; ) {
      var s = r;
      switch (((r = r.nextSibling), s.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          eh(s), Cr(s);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (s.rel.toLowerCase() === "stylesheet") continue;
      }
      n.removeChild(s);
    }
  }
  function XT(n, r, s, l) {
    for (; n.nodeType === 1; ) {
      var f = s;
      if (n.nodeName.toLowerCase() !== r.toLowerCase()) {
        if (!l && (n.nodeName !== "INPUT" || n.type !== "hidden")) break;
      } else if (l) {
        if (!n[Cn])
          switch (r) {
            case "meta":
              if (!n.hasAttribute("itemprop")) break;
              return n;
            case "link":
              if (
                ((p = n.getAttribute("rel")),
                p === "stylesheet" && n.hasAttribute("data-precedence"))
              )
                break;
              if (
                p !== f.rel ||
                n.getAttribute("href") !== (f.href == null ? null : f.href) ||
                n.getAttribute("crossorigin") !==
                  (f.crossOrigin == null ? null : f.crossOrigin) ||
                n.getAttribute("title") !== (f.title == null ? null : f.title)
              )
                break;
              return n;
            case "style":
              if (n.hasAttribute("data-precedence")) break;
              return n;
            case "script":
              if (
                ((p = n.getAttribute("src")),
                (p !== (f.src == null ? null : f.src) ||
                  n.getAttribute("type") !== (f.type == null ? null : f.type) ||
                  n.getAttribute("crossorigin") !==
                    (f.crossOrigin == null ? null : f.crossOrigin)) &&
                  p &&
                  n.hasAttribute("async") &&
                  !n.hasAttribute("itemprop"))
              )
                break;
              return n;
            default:
              return n;
          }
      } else if (r === "input" && n.type === "hidden") {
        var p = f.name == null ? null : "" + f.name;
        if (f.type === "hidden" && n.getAttribute("name") === p) return n;
      } else return n;
      if (((n = In(n.nextSibling)), n === null)) break;
    }
    return null;
  }
  function QT(n, r, s) {
    if (r === "") return null;
    for (; n.nodeType !== 3; )
      if (
        ((n.nodeType !== 1 || n.nodeName !== "INPUT" || n.type !== "hidden") &&
          !s) ||
        ((n = In(n.nextSibling)), n === null)
      )
        return null;
    return n;
  }
  function In(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (
          ((r = n.data),
          r === "$" || r === "$!" || r === "$?" || r === "F!" || r === "F")
        )
          break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function q0(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var s = n.data;
        if (s === "$" || s === "$!" || s === "$?") {
          if (r === 0) return n;
          r--;
        } else s === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  function $0(n, r, s) {
    switch (((r = wu(s)), n)) {
      case "html":
        if (((n = r.documentElement), !n)) throw Error(i(452));
        return n;
      case "head":
        if (((n = r.head), !n)) throw Error(i(453));
        return n;
      case "body":
        if (((n = r.body), !n)) throw Error(i(454));
        return n;
      default:
        throw Error(i(451));
    }
  }
  var Pn = new Map(),
    F0 = new Set();
  function Tu(n) {
    return typeof n.getRootNode == "function"
      ? n.getRootNode()
      : n.ownerDocument;
  }
  var $r = se.d;
  se.d = { f: ZT, r: IT, D: WT, C: JT, L: eE, m: tE, X: rE, S: nE, M: aE };
  function ZT() {
    var n = $r.f(),
      r = pu();
    return n || r;
  }
  function IT(n) {
    var r = qt(n);
    r !== null && r.tag === 5 && r.type === "form" ? yy(r) : $r.r(n);
  }
  var Ii = typeof document > "u" ? null : document;
  function Y0(n, r, s) {
    var l = Ii;
    if (l && typeof r == "string" && r) {
      var f = Rn(r);
      (f = 'link[rel="' + n + '"][href="' + f + '"]'),
        typeof s == "string" && (f += '[crossorigin="' + s + '"]'),
        F0.has(f) ||
          (F0.add(f),
          (n = { rel: n, crossOrigin: s, href: r }),
          l.querySelector(f) === null &&
            ((r = l.createElement("link")),
            Yt(r, "link", n),
            at(r),
            l.head.appendChild(r)));
    }
  }
  function WT(n) {
    $r.D(n), Y0("dns-prefetch", n, null);
  }
  function JT(n, r) {
    $r.C(n, r), Y0("preconnect", n, r);
  }
  function eE(n, r, s) {
    $r.L(n, r, s);
    var l = Ii;
    if (l && n && r) {
      var f = 'link[rel="preload"][as="' + Rn(r) + '"]';
      r === "image" && s && s.imageSrcSet
        ? ((f += '[imagesrcset="' + Rn(s.imageSrcSet) + '"]'),
          typeof s.imageSizes == "string" &&
            (f += '[imagesizes="' + Rn(s.imageSizes) + '"]'))
        : (f += '[href="' + Rn(n) + '"]');
      var p = f;
      switch (r) {
        case "style":
          p = Wi(n);
          break;
        case "script":
          p = Ji(n);
      }
      Pn.has(p) ||
        ((n = E(
          {
            rel: "preload",
            href: r === "image" && s && s.imageSrcSet ? void 0 : n,
            as: r,
          },
          s
        )),
        Pn.set(p, n),
        l.querySelector(f) !== null ||
          (r === "style" && l.querySelector(So(p))) ||
          (r === "script" && l.querySelector(xo(p))) ||
          ((r = l.createElement("link")),
          Yt(r, "link", n),
          at(r),
          l.head.appendChild(r)));
    }
  }
  function tE(n, r) {
    $r.m(n, r);
    var s = Ii;
    if (s && n) {
      var l = r && typeof r.as == "string" ? r.as : "script",
        f =
          'link[rel="modulepreload"][as="' + Rn(l) + '"][href="' + Rn(n) + '"]',
        p = f;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          p = Ji(n);
      }
      if (
        !Pn.has(p) &&
        ((n = E({ rel: "modulepreload", href: n }, r)),
        Pn.set(p, n),
        s.querySelector(f) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (s.querySelector(xo(p))) return;
        }
        (l = s.createElement("link")),
          Yt(l, "link", n),
          at(l),
          s.head.appendChild(l);
      }
    }
  }
  function nE(n, r, s) {
    $r.S(n, r, s);
    var l = Ii;
    if (l && n) {
      var f = An(l).hoistableStyles,
        p = Wi(n);
      r = r || "default";
      var v = f.get(p);
      if (!v) {
        var T = { loading: 0, preload: null };
        if ((v = l.querySelector(So(p)))) T.loading = 5;
        else {
          (n = E({ rel: "stylesheet", href: n, "data-precedence": r }, s)),
            (s = Pn.get(p)) && th(n, s);
          var D = (v = l.createElement("link"));
          at(D),
            Yt(D, "link", n),
            (D._p = new Promise(function (z, I) {
              (D.onload = z), (D.onerror = I);
            })),
            D.addEventListener("load", function () {
              T.loading |= 1;
            }),
            D.addEventListener("error", function () {
              T.loading |= 2;
            }),
            (T.loading |= 4),
            Eu(v, r, l);
        }
        (v = { type: "stylesheet", instance: v, count: 1, state: T }),
          f.set(p, v);
      }
    }
  }
  function rE(n, r) {
    $r.X(n, r);
    var s = Ii;
    if (s && n) {
      var l = An(s).hoistableScripts,
        f = Ji(n),
        p = l.get(f);
      p ||
        ((p = s.querySelector(xo(f))),
        p ||
          ((n = E({ src: n, async: !0 }, r)),
          (r = Pn.get(f)) && nh(n, r),
          (p = s.createElement("script")),
          at(p),
          Yt(p, "link", n),
          s.head.appendChild(p)),
        (p = { type: "script", instance: p, count: 1, state: null }),
        l.set(f, p));
    }
  }
  function aE(n, r) {
    $r.M(n, r);
    var s = Ii;
    if (s && n) {
      var l = An(s).hoistableScripts,
        f = Ji(n),
        p = l.get(f);
      p ||
        ((p = s.querySelector(xo(f))),
        p ||
          ((n = E({ src: n, async: !0, type: "module" }, r)),
          (r = Pn.get(f)) && nh(n, r),
          (p = s.createElement("script")),
          at(p),
          Yt(p, "link", n),
          s.head.appendChild(p)),
        (p = { type: "script", instance: p, count: 1, state: null }),
        l.set(f, p));
    }
  }
  function G0(n, r, s, l) {
    var f = (f = ir.current) ? Tu(f) : null;
    if (!f) throw Error(i(446));
    switch (n) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof s.precedence == "string" && typeof s.href == "string"
          ? ((r = Wi(s.href)),
            (s = An(f).hoistableStyles),
            (l = s.get(r)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              s.set(r, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          s.rel === "stylesheet" &&
          typeof s.href == "string" &&
          typeof s.precedence == "string"
        ) {
          n = Wi(s.href);
          var p = An(f).hoistableStyles,
            v = p.get(n);
          if (
            (v ||
              ((f = f.ownerDocument || f),
              (v = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              p.set(n, v),
              (p = f.querySelector(So(n))) &&
                !p._p &&
                ((v.instance = p), (v.state.loading = 5)),
              Pn.has(n) ||
                ((s = {
                  rel: "preload",
                  as: "style",
                  href: s.href,
                  crossOrigin: s.crossOrigin,
                  integrity: s.integrity,
                  media: s.media,
                  hrefLang: s.hrefLang,
                  referrerPolicy: s.referrerPolicy,
                }),
                Pn.set(n, s),
                p || iE(f, n, s, v.state))),
            r && l === null)
          )
            throw Error(i(528, ""));
          return v;
        }
        if (r && l !== null) throw Error(i(529, ""));
        return null;
      case "script":
        return (
          (r = s.async),
          (s = s.src),
          typeof s == "string" &&
          r &&
          typeof r != "function" &&
          typeof r != "symbol"
            ? ((r = Ji(s)),
              (s = An(f).hoistableScripts),
              (l = s.get(r)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                s.set(r, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(i(444, n));
    }
  }
  function Wi(n) {
    return 'href="' + Rn(n) + '"';
  }
  function So(n) {
    return 'link[rel="stylesheet"][' + n + "]";
  }
  function K0(n) {
    return E({}, n, { "data-precedence": n.precedence, precedence: null });
  }
  function iE(n, r, s, l) {
    n.querySelector('link[rel="preload"][as="style"][' + r + "]")
      ? (l.loading = 1)
      : ((r = n.createElement("link")),
        (l.preload = r),
        r.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        r.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        Yt(r, "link", s),
        at(r),
        n.head.appendChild(r));
  }
  function Ji(n) {
    return '[src="' + Rn(n) + '"]';
  }
  function xo(n) {
    return "script[async]" + n;
  }
  function X0(n, r, s) {
    if ((r.count++, r.instance === null))
      switch (r.type) {
        case "style":
          var l = n.querySelector('style[data-href~="' + Rn(s.href) + '"]');
          if (l) return (r.instance = l), at(l), l;
          var f = E({}, s, {
            "data-href": s.href,
            "data-precedence": s.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (n.ownerDocument || n).createElement("style")),
            at(l),
            Yt(l, "style", f),
            Eu(l, s.precedence, n),
            (r.instance = l)
          );
        case "stylesheet":
          f = Wi(s.href);
          var p = n.querySelector(So(f));
          if (p) return (r.state.loading |= 4), (r.instance = p), at(p), p;
          (l = K0(s)),
            (f = Pn.get(f)) && th(l, f),
            (p = (n.ownerDocument || n).createElement("link")),
            at(p);
          var v = p;
          return (
            (v._p = new Promise(function (T, D) {
              (v.onload = T), (v.onerror = D);
            })),
            Yt(p, "link", l),
            (r.state.loading |= 4),
            Eu(p, s.precedence, n),
            (r.instance = p)
          );
        case "script":
          return (
            (p = Ji(s.src)),
            (f = n.querySelector(xo(p)))
              ? ((r.instance = f), at(f), f)
              : ((l = s),
                (f = Pn.get(p)) && ((l = E({}, s)), nh(l, f)),
                (n = n.ownerDocument || n),
                (f = n.createElement("script")),
                at(f),
                Yt(f, "link", l),
                n.head.appendChild(f),
                (r.instance = f))
          );
        case "void":
          return null;
        default:
          throw Error(i(443, r.type));
      }
    else
      r.type === "stylesheet" &&
        !(r.state.loading & 4) &&
        ((l = r.instance), (r.state.loading |= 4), Eu(l, s.precedence, n));
    return r.instance;
  }
  function Eu(n, r, s) {
    for (
      var l = s.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        f = l.length ? l[l.length - 1] : null,
        p = f,
        v = 0;
      v < l.length;
      v++
    ) {
      var T = l[v];
      if (T.dataset.precedence === r) p = T;
      else if (p !== f) break;
    }
    p
      ? p.parentNode.insertBefore(n, p.nextSibling)
      : ((r = s.nodeType === 9 ? s.head : s), r.insertBefore(n, r.firstChild));
  }
  function th(n, r) {
    n.crossOrigin == null && (n.crossOrigin = r.crossOrigin),
      n.referrerPolicy == null && (n.referrerPolicy = r.referrerPolicy),
      n.title == null && (n.title = r.title);
  }
  function nh(n, r) {
    n.crossOrigin == null && (n.crossOrigin = r.crossOrigin),
      n.referrerPolicy == null && (n.referrerPolicy = r.referrerPolicy),
      n.integrity == null && (n.integrity = r.integrity);
  }
  var Cu = null;
  function Q0(n, r, s) {
    if (Cu === null) {
      var l = new Map(),
        f = (Cu = new Map());
      f.set(s, l);
    } else (f = Cu), (l = f.get(s)), l || ((l = new Map()), f.set(s, l));
    if (l.has(n)) return l;
    for (
      l.set(n, null), s = s.getElementsByTagName(n), f = 0;
      f < s.length;
      f++
    ) {
      var p = s[f];
      if (
        !(
          p[Cn] ||
          p[pe] ||
          (n === "link" && p.getAttribute("rel") === "stylesheet")
        ) &&
        p.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var v = p.getAttribute(r) || "";
        v = n + v;
        var T = l.get(v);
        T ? T.push(p) : l.set(v, [p]);
      }
    }
    return l;
  }
  function Z0(n, r, s) {
    (n = n.ownerDocument || n),
      n.head.insertBefore(
        s,
        r === "title" ? n.querySelector("head > title") : null
      );
  }
  function sE(n, r, s) {
    if (s === 1 || r.itemProp != null) return !1;
    switch (n) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof r.precedence != "string" ||
          typeof r.href != "string" ||
          r.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof r.rel != "string" ||
          typeof r.href != "string" ||
          r.href === "" ||
          r.onLoad ||
          r.onError
        )
          break;
        switch (r.rel) {
          case "stylesheet":
            return (
              (n = r.disabled), typeof r.precedence == "string" && n == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          r.async &&
          typeof r.async != "function" &&
          typeof r.async != "symbol" &&
          !r.onLoad &&
          !r.onError &&
          r.src &&
          typeof r.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function I0(n) {
    return !(n.type === "stylesheet" && !(n.state.loading & 3));
  }
  var wo = null;
  function oE() {}
  function lE(n, r, s) {
    if (wo === null) throw Error(i(475));
    var l = wo;
    if (
      r.type === "stylesheet" &&
      (typeof s.media != "string" || matchMedia(s.media).matches !== !1) &&
      !(r.state.loading & 4)
    ) {
      if (r.instance === null) {
        var f = Wi(s.href),
          p = n.querySelector(So(f));
        if (p) {
          (n = p._p),
            n !== null &&
              typeof n == "object" &&
              typeof n.then == "function" &&
              (l.count++, (l = Au.bind(l)), n.then(l, l)),
            (r.state.loading |= 4),
            (r.instance = p),
            at(p);
          return;
        }
        (p = n.ownerDocument || n),
          (s = K0(s)),
          (f = Pn.get(f)) && th(s, f),
          (p = p.createElement("link")),
          at(p);
        var v = p;
        (v._p = new Promise(function (T, D) {
          (v.onload = T), (v.onerror = D);
        })),
          Yt(p, "link", s),
          (r.instance = p);
      }
      l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(r, n),
        (n = r.state.preload) &&
          !(r.state.loading & 3) &&
          (l.count++,
          (r = Au.bind(l)),
          n.addEventListener("load", r),
          n.addEventListener("error", r));
    }
  }
  function uE() {
    if (wo === null) throw Error(i(475));
    var n = wo;
    return (
      n.stylesheets && n.count === 0 && rh(n, n.stylesheets),
      0 < n.count
        ? function (r) {
            var s = setTimeout(function () {
              if ((n.stylesheets && rh(n, n.stylesheets), n.unsuspend)) {
                var l = n.unsuspend;
                (n.unsuspend = null), l();
              }
            }, 6e4);
            return (
              (n.unsuspend = r),
              function () {
                (n.unsuspend = null), clearTimeout(s);
              }
            );
          }
        : null
    );
  }
  function Au() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) rh(this, this.stylesheets);
      else if (this.unsuspend) {
        var n = this.unsuspend;
        (this.unsuspend = null), n();
      }
    }
  }
  var _u = null;
  function rh(n, r) {
    (n.stylesheets = null),
      n.unsuspend !== null &&
        (n.count++,
        (_u = new Map()),
        r.forEach(cE, n),
        (_u = null),
        Au.call(n));
  }
  function cE(n, r) {
    if (!(r.state.loading & 4)) {
      var s = _u.get(n);
      if (s) var l = s.get(null);
      else {
        (s = new Map()), _u.set(n, s);
        for (
          var f = n.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            p = 0;
          p < f.length;
          p++
        ) {
          var v = f[p];
          (v.nodeName === "LINK" || v.getAttribute("media") !== "not all") &&
            (s.set(v.dataset.precedence, v), (l = v));
        }
        l && s.set(null, l);
      }
      (f = r.instance),
        (v = f.getAttribute("data-precedence")),
        (p = s.get(v) || l),
        p === l && s.set(null, f),
        s.set(v, f),
        this.count++,
        (l = Au.bind(this)),
        f.addEventListener("load", l),
        f.addEventListener("error", l),
        p
          ? p.parentNode.insertBefore(f, p.nextSibling)
          : ((n = n.nodeType === 9 ? n.head : n),
            n.insertBefore(f, n.firstChild)),
        (r.state.loading |= 4);
    }
  }
  var To = {
    $$typeof: x,
    Provider: null,
    Consumer: null,
    _currentValue: Me,
    _currentValue2: Me,
    _threadCount: 0,
  };
  function fE(n, r, s, l, f, p, v, T) {
    (this.tag = 1),
      (this.containerInfo = n),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = j(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.finishedLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = j(0)),
      (this.hiddenUpdates = j(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = f),
      (this.onCaughtError = p),
      (this.onRecoverableError = v),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = T),
      (this.incompleteTransitions = new Map());
  }
  function W0(n, r, s, l, f, p, v, T, D, z, I, ee) {
    return (
      (n = new fE(n, r, s, v, T, D, z, ee)),
      (r = 1),
      p === !0 && (r |= 24),
      (p = Un(3, null, null, r)),
      (n.current = p),
      (p.stateNode = n),
      (r = Bf()),
      r.refCount++,
      (n.pooledCache = r),
      r.refCount++,
      (p.memoizedState = { element: l, isDehydrated: s, cache: r }),
      pd(p),
      n
    );
  }
  function J0(n) {
    return n ? ((n = Di), n) : Di;
  }
  function ev(n, r, s, l, f, p) {
    (f = J0(f)),
      l.context === null ? (l.context = f) : (l.pendingContext = f),
      (l = ca(r)),
      (l.payload = { element: s }),
      (p = p === void 0 ? null : p),
      p !== null && (l.callback = p),
      (s = fa(n, l, r)),
      s !== null && (nn(s, n, r), io(s, n, r));
  }
  function tv(n, r) {
    if (((n = n.memoizedState), n !== null && n.dehydrated !== null)) {
      var s = n.retryLane;
      n.retryLane = s !== 0 && s < r ? s : r;
    }
  }
  function ah(n, r) {
    tv(n, r), (n = n.alternate) && tv(n, r);
  }
  function nv(n) {
    if (n.tag === 13) {
      var r = ra(n, 67108864);
      r !== null && nn(r, n, 67108864), ah(n, 67108864);
    }
  }
  var Ru = !0;
  function dE(n, r, s, l) {
    var f = Y.T;
    Y.T = null;
    var p = se.p;
    try {
      (se.p = 2), ih(n, r, s, l);
    } finally {
      (se.p = p), (Y.T = f);
    }
  }
  function hE(n, r, s, l) {
    var f = Y.T;
    Y.T = null;
    var p = se.p;
    try {
      (se.p = 8), ih(n, r, s, l);
    } finally {
      (se.p = p), (Y.T = f);
    }
  }
  function ih(n, r, s, l) {
    if (Ru) {
      var f = sh(l);
      if (f === null) Kd(n, r, l, Ou, s), av(n, l);
      else if (pE(f, n, r, s, l)) l.stopPropagation();
      else if ((av(n, l), r & 4 && -1 < mE.indexOf(n))) {
        for (; f !== null; ) {
          var p = qt(f);
          if (p !== null)
            switch (p.tag) {
              case 3:
                if (((p = p.stateNode), p.current.memoizedState.isDehydrated)) {
                  var v = or(p.pendingLanes);
                  if (v !== 0) {
                    var T = p;
                    for (T.pendingLanes |= 2, T.entangledLanes |= 2; v; ) {
                      var D = 1 << (31 - Lt(v));
                      (T.entanglements[1] |= D), (v &= ~D);
                    }
                    hr(p), !(ht & 6) && ((du = fn() + 500), yo(0));
                  }
                }
                break;
              case 13:
                (T = ra(p, 2)), T !== null && nn(T, p, 2), pu(), ah(p, 2);
            }
          if (((p = sh(l)), p === null && Kd(n, r, l, Ou, s), p === f)) break;
          f = p;
        }
        f !== null && l.stopPropagation();
      } else Kd(n, r, l, null, s);
    }
  }
  function sh(n) {
    return (n = df(n)), oh(n);
  }
  var Ou = null;
  function oh(n) {
    if (((Ou = null), (n = Ht(n)), n !== null)) {
      var r = oe(n);
      if (r === null) n = null;
      else {
        var s = r.tag;
        if (s === 13) {
          if (((n = Be(r)), n !== null)) return n;
          n = null;
        } else if (s === 3) {
          if (r.stateNode.current.memoizedState.isDehydrated)
            return r.tag === 3 ? r.stateNode.containerInfo : null;
          n = null;
        } else r !== n && (n = null);
      }
    }
    return (Ou = n), null;
  }
  function rv(n) {
    switch (n) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (ks()) {
          case Gn:
            return 2;
          case En:
            return 8;
          case Ba:
          case Ls:
            return 32;
          case El:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var lh = !1,
    va = null,
    ba = null,
    Sa = null,
    Eo = new Map(),
    Co = new Map(),
    xa = [],
    mE =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function av(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        va = null;
        break;
      case "dragenter":
      case "dragleave":
        ba = null;
        break;
      case "mouseover":
      case "mouseout":
        Sa = null;
        break;
      case "pointerover":
      case "pointerout":
        Eo.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Co.delete(r.pointerId);
    }
  }
  function Ao(n, r, s, l, f, p) {
    return n === null || n.nativeEvent !== p
      ? ((n = {
          blockedOn: r,
          domEventName: s,
          eventSystemFlags: l,
          nativeEvent: p,
          targetContainers: [f],
        }),
        r !== null && ((r = qt(r)), r !== null && nv(r)),
        n)
      : ((n.eventSystemFlags |= l),
        (r = n.targetContainers),
        f !== null && r.indexOf(f) === -1 && r.push(f),
        n);
  }
  function pE(n, r, s, l, f) {
    switch (r) {
      case "focusin":
        return (va = Ao(va, n, r, s, l, f)), !0;
      case "dragenter":
        return (ba = Ao(ba, n, r, s, l, f)), !0;
      case "mouseover":
        return (Sa = Ao(Sa, n, r, s, l, f)), !0;
      case "pointerover":
        var p = f.pointerId;
        return Eo.set(p, Ao(Eo.get(p) || null, n, r, s, l, f)), !0;
      case "gotpointercapture":
        return (
          (p = f.pointerId), Co.set(p, Ao(Co.get(p) || null, n, r, s, l, f)), !0
        );
    }
    return !1;
  }
  function iv(n) {
    var r = Ht(n.target);
    if (r !== null) {
      var s = oe(r);
      if (s !== null) {
        if (((r = s.tag), r === 13)) {
          if (((r = Be(s)), r !== null)) {
            (n.blockedOn = r),
              me(n.priority, function () {
                if (s.tag === 13) {
                  var l = gn(),
                    f = ra(s, l);
                  f !== null && nn(f, s, l), ah(s, l);
                }
              });
            return;
          }
        } else if (r === 3 && s.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Nu(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var s = sh(n.nativeEvent);
      if (s === null) {
        s = n.nativeEvent;
        var l = new s.constructor(s.type, s);
        (ff = l), s.target.dispatchEvent(l), (ff = null);
      } else return (r = qt(s)), r !== null && nv(r), (n.blockedOn = s), !1;
      r.shift();
    }
    return !0;
  }
  function sv(n, r, s) {
    Nu(n) && s.delete(r);
  }
  function gE() {
    (lh = !1),
      va !== null && Nu(va) && (va = null),
      ba !== null && Nu(ba) && (ba = null),
      Sa !== null && Nu(Sa) && (Sa = null),
      Eo.forEach(sv),
      Co.forEach(sv);
  }
  function Du(n, r) {
    n.blockedOn === r &&
      ((n.blockedOn = null),
      lh ||
        ((lh = !0),
        e.unstable_scheduleCallback(e.unstable_NormalPriority, gE)));
  }
  var Mu = null;
  function ov(n) {
    Mu !== n &&
      ((Mu = n),
      e.unstable_scheduleCallback(e.unstable_NormalPriority, function () {
        Mu === n && (Mu = null);
        for (var r = 0; r < n.length; r += 3) {
          var s = n[r],
            l = n[r + 1],
            f = n[r + 2];
          if (typeof l != "function") {
            if (oh(l || s) === null) continue;
            break;
          }
          var p = qt(s);
          p !== null &&
            (n.splice(r, 3),
            (r -= 3),
            If(p, { pending: !0, data: f, method: s.method, action: l }, l, f));
        }
      }));
  }
  function _o(n) {
    function r(D) {
      return Du(D, n);
    }
    va !== null && Du(va, n),
      ba !== null && Du(ba, n),
      Sa !== null && Du(Sa, n),
      Eo.forEach(r),
      Co.forEach(r);
    for (var s = 0; s < xa.length; s++) {
      var l = xa[s];
      l.blockedOn === n && (l.blockedOn = null);
    }
    for (; 0 < xa.length && ((s = xa[0]), s.blockedOn === null); )
      iv(s), s.blockedOn === null && xa.shift();
    if (((s = (n.ownerDocument || n).$$reactFormReplay), s != null))
      for (l = 0; l < s.length; l += 3) {
        var f = s[l],
          p = s[l + 1],
          v = f[Se] || null;
        if (typeof p == "function") v || ov(s);
        else if (v) {
          var T = null;
          if (p && p.hasAttribute("formAction")) {
            if (((f = p), (v = p[Se] || null))) T = v.formAction;
            else if (oh(f) !== null) continue;
          } else T = v.action;
          typeof T == "function" ? (s[l + 1] = T) : (s.splice(l, 3), (l -= 3)),
            ov(s);
        }
      }
  }
  function uh(n) {
    this._internalRoot = n;
  }
  (ku.prototype.render = uh.prototype.render =
    function (n) {
      var r = this._internalRoot;
      if (r === null) throw Error(i(409));
      var s = r.current,
        l = gn();
      ev(s, l, n, r, null, null);
    }),
    (ku.prototype.unmount = uh.prototype.unmount =
      function () {
        var n = this._internalRoot;
        if (n !== null) {
          this._internalRoot = null;
          var r = n.containerInfo;
          n.tag === 0 && Xi(),
            ev(n.current, 2, null, n, null, null),
            pu(),
            (r[Xe] = null);
        }
      });
  function ku(n) {
    this._internalRoot = n;
  }
  ku.prototype.unstable_scheduleHydration = function (n) {
    if (n) {
      var r = fe();
      n = { blockedOn: null, target: n, priority: r };
      for (var s = 0; s < xa.length && r !== 0 && r < xa[s].priority; s++);
      xa.splice(s, 0, n), s === 0 && iv(n);
    }
  };
  var lv = t.version;
  if (lv !== "19.0.0") throw Error(i(527, lv, "19.0.0"));
  se.findDOMNode = function (n) {
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function"
        ? Error(i(188))
        : ((n = Object.keys(n).join(",")), Error(i(268, n)));
    return (
      (n = ne(r)),
      (n = n !== null ? be(n) : null),
      (n = n === null ? null : n.stateNode),
      n
    );
  };
  var yE = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: Y,
    findFiberByHostInstance: Ht,
    reconcilerVersion: "19.0.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Lu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Lu.isDisabled && Lu.supportsFiber)
      try {
        (ta = Lu.inject(yE)), (Xt = Lu);
      } catch {}
  }
  return (
    (Ro.createRoot = function (n, r) {
      if (!o(n)) throw Error(i(299));
      var s = !1,
        l = "",
        f = Cy,
        p = Ay,
        v = _y,
        T = null;
      return (
        r != null &&
          (r.unstable_strictMode === !0 && (s = !0),
          r.identifierPrefix !== void 0 && (l = r.identifierPrefix),
          r.onUncaughtError !== void 0 && (f = r.onUncaughtError),
          r.onCaughtError !== void 0 && (p = r.onCaughtError),
          r.onRecoverableError !== void 0 && (v = r.onRecoverableError),
          r.unstable_transitionCallbacks !== void 0 &&
            (T = r.unstable_transitionCallbacks)),
        (r = W0(n, 1, !1, null, null, s, l, f, p, v, T, null)),
        (n[Xe] = r.current),
        Gd(n.nodeType === 8 ? n.parentNode : n),
        new uh(r)
      );
    }),
    (Ro.hydrateRoot = function (n, r, s) {
      if (!o(n)) throw Error(i(299));
      var l = !1,
        f = "",
        p = Cy,
        v = Ay,
        T = _y,
        D = null,
        z = null;
      return (
        s != null &&
          (s.unstable_strictMode === !0 && (l = !0),
          s.identifierPrefix !== void 0 && (f = s.identifierPrefix),
          s.onUncaughtError !== void 0 && (p = s.onUncaughtError),
          s.onCaughtError !== void 0 && (v = s.onCaughtError),
          s.onRecoverableError !== void 0 && (T = s.onRecoverableError),
          s.unstable_transitionCallbacks !== void 0 &&
            (D = s.unstable_transitionCallbacks),
          s.formState !== void 0 && (z = s.formState)),
        (r = W0(n, 1, !0, r, s ?? null, l, f, p, v, T, D, z)),
        (r.context = J0(null)),
        (s = r.current),
        (l = gn()),
        (f = ca(l)),
        (f.callback = null),
        fa(s, f, l),
        (r.current.lanes = l),
        F(r, l),
        hr(r),
        (n[Xe] = r.current),
        Gd(n),
        new ku(r)
      );
    }),
    (Ro.version = "19.0.0"),
    Ro
  );
}
var yv;
function CE() {
  if (yv) return fh.exports;
  yv = 1;
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  return e(), (fh.exports = EE()), fh.exports;
}
var AE = CE();
const _E = Z1(AE);
var Oo = {},
  vv;
function RE() {
  if (vv) return Oo;
  (vv = 1),
    Object.defineProperty(Oo, "__esModule", { value: !0 }),
    (Oo.parse = c),
    (Oo.serialize = m);
  const e = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    t = /^[\u0021-\u003A\u003C-\u007E]*$/,
    a =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    i = /^[\u0020-\u003A\u003D-\u007E]*$/,
    o = Object.prototype.toString,
    u = (() => {
      const b = function () {};
      return (b.prototype = Object.create(null)), b;
    })();
  function c(b, x) {
    const w = new u(),
      S = b.length;
    if (S < 2) return w;
    const A = (x == null ? void 0 : x.decode) || g;
    let C = 0;
    do {
      const O = b.indexOf("=", C);
      if (O === -1) break;
      const M = b.indexOf(";", C),
        P = M === -1 ? S : M;
      if (O > P) {
        C = b.lastIndexOf(";", O - 1) + 1;
        continue;
      }
      const B = d(b, C, O),
        N = h(b, O, B),
        q = b.slice(B, N);
      if (w[q] === void 0) {
        let X = d(b, O + 1, P),
          Y = h(b, P, X);
        const E = A(b.slice(X, Y));
        w[q] = E;
      }
      C = P + 1;
    } while (C < S);
    return w;
  }
  function d(b, x, w) {
    do {
      const S = b.charCodeAt(x);
      if (S !== 32 && S !== 9) return x;
    } while (++x < w);
    return w;
  }
  function h(b, x, w) {
    for (; x > w; ) {
      const S = b.charCodeAt(--x);
      if (S !== 32 && S !== 9) return x + 1;
    }
    return w;
  }
  function m(b, x, w) {
    const S = (w == null ? void 0 : w.encode) || encodeURIComponent;
    if (!e.test(b)) throw new TypeError(`argument name is invalid: ${b}`);
    const A = S(x);
    if (!t.test(A)) throw new TypeError(`argument val is invalid: ${x}`);
    let C = b + "=" + A;
    if (!w) return C;
    if (w.maxAge !== void 0) {
      if (!Number.isInteger(w.maxAge))
        throw new TypeError(`option maxAge is invalid: ${w.maxAge}`);
      C += "; Max-Age=" + w.maxAge;
    }
    if (w.domain) {
      if (!a.test(w.domain))
        throw new TypeError(`option domain is invalid: ${w.domain}`);
      C += "; Domain=" + w.domain;
    }
    if (w.path) {
      if (!i.test(w.path))
        throw new TypeError(`option path is invalid: ${w.path}`);
      C += "; Path=" + w.path;
    }
    if (w.expires) {
      if (!y(w.expires) || !Number.isFinite(w.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${w.expires}`);
      C += "; Expires=" + w.expires.toUTCString();
    }
    if (
      (w.httpOnly && (C += "; HttpOnly"),
      w.secure && (C += "; Secure"),
      w.partitioned && (C += "; Partitioned"),
      w.priority)
    )
      switch (
        typeof w.priority == "string" ? w.priority.toLowerCase() : void 0
      ) {
        case "low":
          C += "; Priority=Low";
          break;
        case "medium":
          C += "; Priority=Medium";
          break;
        case "high":
          C += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${w.priority}`);
      }
    if (w.sameSite)
      switch (
        typeof w.sameSite == "string" ? w.sameSite.toLowerCase() : w.sameSite
      ) {
        case !0:
        case "strict":
          C += "; SameSite=Strict";
          break;
        case "lax":
          C += "; SameSite=Lax";
          break;
        case "none":
          C += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${w.sameSite}`);
      }
    return C;
  }
  function g(b) {
    if (b.indexOf("%") === -1) return b;
    try {
      return decodeURIComponent(b);
    } catch {
      return b;
    }
  }
  function y(b) {
    return o.call(b) === "[object Date]";
  }
  return Oo;
}
RE();
/**
 * react-router v7.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var bv = "popstate";
function OE(e = {}) {
  function t(i, o) {
    let { pathname: u, search: c, hash: d } = i.location;
    return Qo(
      "",
      { pathname: u, search: c, hash: d },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function a(i, o) {
    return typeof o == "string" ? o : _a(o);
  }
  return DE(t, a, null, e);
}
function ze(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Pt(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function NE() {
  return Math.random().toString(36).substring(2, 10);
}
function Sv(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Qo(e, t, a = null, i) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...(typeof t == "string" ? Da(t) : t),
    state: a,
    key: (t && t.key) || i || NE(),
  };
}
function _a({ pathname: e = "/", search: t = "", hash: a = "" }) {
  return (
    t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t),
    a && a !== "#" && (e += a.charAt(0) === "#" ? a : "#" + a),
    e
  );
}
function Da(e) {
  let t = {};
  if (e) {
    let a = e.indexOf("#");
    a >= 0 && ((t.hash = e.substring(a)), (e = e.substring(0, a)));
    let i = e.indexOf("?");
    i >= 0 && ((t.search = e.substring(i)), (e = e.substring(0, i))),
      e && (t.pathname = e);
  }
  return t;
}
function DE(e, t, a, i = {}) {
  let { window: o = document.defaultView, v5Compat: u = !1 } = i,
    c = o.history,
    d = "POP",
    h = null,
    m = g();
  m == null && ((m = 0), c.replaceState({ ...c.state, idx: m }, ""));
  function g() {
    return (c.state || { idx: null }).idx;
  }
  function y() {
    d = "POP";
    let A = g(),
      C = A == null ? null : A - m;
    (m = A), h && h({ action: d, location: S.location, delta: C });
  }
  function b(A, C) {
    d = "PUSH";
    let O = Qo(S.location, A, C);
    m = g() + 1;
    let M = Sv(O, m),
      P = S.createHref(O);
    try {
      c.pushState(M, "", P);
    } catch (B) {
      if (B instanceof DOMException && B.name === "DataCloneError") throw B;
      o.location.assign(P);
    }
    u && h && h({ action: d, location: S.location, delta: 1 });
  }
  function x(A, C) {
    d = "REPLACE";
    let O = Qo(S.location, A, C);
    m = g();
    let M = Sv(O, m),
      P = S.createHref(O);
    c.replaceState(M, "", P),
      u && h && h({ action: d, location: S.location, delta: 0 });
  }
  function w(A) {
    let C = o.location.origin !== "null" ? o.location.origin : o.location.href,
      O = typeof A == "string" ? A : _a(A);
    return (
      (O = O.replace(/ $/, "%20")),
      ze(
        C,
        `No window.location.(origin|href) available to create URL for href: ${O}`
      ),
      new URL(O, C)
    );
  }
  let S = {
    get action() {
      return d;
    },
    get location() {
      return e(o, c);
    },
    listen(A) {
      if (h) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(bv, y),
        (h = A),
        () => {
          o.removeEventListener(bv, y), (h = null);
        }
      );
    },
    createHref(A) {
      return t(o, A);
    },
    createURL: w,
    encodeLocation(A) {
      let C = w(A);
      return { pathname: C.pathname, search: C.search, hash: C.hash };
    },
    push: b,
    replace: x,
    go(A) {
      return c.go(A);
    },
  };
  return S;
}
var ME = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function kE(e) {
  return e.index === !0;
}
function uc(e, t, a = [], i = {}) {
  return e.map((o, u) => {
    let c = [...a, String(u)],
      d = typeof o.id == "string" ? o.id : c.join("-");
    if (
      (ze(
        o.index !== !0 || !o.children,
        "Cannot specify children on an index route"
      ),
      ze(
        !i[d],
        `Found a route id collision on id "${d}".  Route id's must be globally unique within Data Router usages`
      ),
      kE(o))
    ) {
      let h = { ...o, ...t(o), id: d };
      return (i[d] = h), h;
    } else {
      let h = { ...o, ...t(o), id: d, children: void 0 };
      return (
        (i[d] = h), o.children && (h.children = uc(o.children, t, c, i)), h
      );
    }
  });
}
function Ca(e, t, a = "/") {
  return Yu(e, t, a, !1);
}
function Yu(e, t, a, i) {
  let o = typeof t == "string" ? Da(t) : t,
    u = nr(o.pathname || "/", a);
  if (u == null) return null;
  let c = W1(e);
  BE(c);
  let d = null;
  for (let h = 0; d == null && h < c.length; ++h) {
    let m = GE(u);
    d = FE(c[h], m, i);
  }
  return d;
}
function LE(e, t) {
  let { route: a, pathname: i, params: o } = e;
  return { id: a.id, pathname: i, params: o, data: t[a.id], handle: a.handle };
}
function W1(e, t = [], a = [], i = "") {
  let o = (u, c, d) => {
    let h = {
      relativePath: d === void 0 ? u.path || "" : d,
      caseSensitive: u.caseSensitive === !0,
      childrenIndex: c,
      route: u,
    };
    h.relativePath.startsWith("/") &&
      (ze(
        h.relativePath.startsWith(i),
        `Absolute route path "${h.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (h.relativePath = h.relativePath.slice(i.length)));
    let m = vr([i, h.relativePath]),
      g = a.concat(h);
    u.children &&
      u.children.length > 0 &&
      (ze(
        u.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${m}".`
      ),
      W1(u.children, t, g, m)),
      !(u.path == null && !u.index) &&
        t.push({ path: m, score: qE(m, u.index), routesMeta: g });
  };
  return (
    e.forEach((u, c) => {
      var d;
      if (u.path === "" || !((d = u.path) != null && d.includes("?"))) o(u, c);
      else for (let h of J1(u.path)) o(u, c, h);
    }),
    t
  );
}
function J1(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [a, ...i] = t,
    o = a.endsWith("?"),
    u = a.replace(/\?$/, "");
  if (i.length === 0) return o ? [u, ""] : [u];
  let c = J1(i.join("/")),
    d = [];
  return (
    d.push(...c.map((h) => (h === "" ? u : [u, h].join("/")))),
    o && d.push(...c),
    d.map((h) => (e.startsWith("/") && h === "" ? "/" : h))
  );
}
function BE(e) {
  e.sort((t, a) =>
    t.score !== a.score
      ? a.score - t.score
      : $E(
          t.routesMeta.map((i) => i.childrenIndex),
          a.routesMeta.map((i) => i.childrenIndex)
        )
  );
}
var UE = /^:[\w-]+$/,
  zE = 3,
  PE = 2,
  VE = 1,
  jE = 10,
  HE = -2,
  xv = (e) => e === "*";
function qE(e, t) {
  let a = e.split("/"),
    i = a.length;
  return (
    a.some(xv) && (i += HE),
    t && (i += PE),
    a
      .filter((o) => !xv(o))
      .reduce((o, u) => o + (UE.test(u) ? zE : u === "" ? VE : jE), i)
  );
}
function $E(e, t) {
  return e.length === t.length && e.slice(0, -1).every((i, o) => i === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function FE(e, t, a = !1) {
  let { routesMeta: i } = e,
    o = {},
    u = "/",
    c = [];
  for (let d = 0; d < i.length; ++d) {
    let h = i[d],
      m = d === i.length - 1,
      g = u === "/" ? t : t.slice(u.length) || "/",
      y = cc(
        { path: h.relativePath, caseSensitive: h.caseSensitive, end: m },
        g
      ),
      b = h.route;
    if (
      (!y &&
        m &&
        a &&
        !i[i.length - 1].route.index &&
        (y = cc(
          { path: h.relativePath, caseSensitive: h.caseSensitive, end: !1 },
          g
        )),
      !y)
    )
      return null;
    Object.assign(o, y.params),
      c.push({
        params: o,
        pathname: vr([u, y.pathname]),
        pathnameBase: QE(vr([u, y.pathnameBase])),
        route: b,
      }),
      y.pathnameBase !== "/" && (u = vr([u, y.pathnameBase]));
  }
  return c;
}
function cc(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [a, i] = YE(e.path, e.caseSensitive, e.end),
    o = t.match(a);
  if (!o) return null;
  let u = o[0],
    c = u.replace(/(.)\/+$/, "$1"),
    d = o.slice(1);
  return {
    params: i.reduce((m, { paramName: g, isOptional: y }, b) => {
      if (g === "*") {
        let w = d[b] || "";
        c = u.slice(0, u.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const x = d[b];
      return (
        y && !x ? (m[g] = void 0) : (m[g] = (x || "").replace(/%2F/g, "/")), m
      );
    }, {}),
    pathname: u,
    pathnameBase: c,
    pattern: e,
  };
}
function YE(e, t = !1, a = !0) {
  Pt(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let i = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (c, d, h) => (
            i.push({ paramName: d, isOptional: h != null }),
            h ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (i.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : a
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), i]
  );
}
function GE(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Pt(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
      ),
      e
    );
  }
}
function nr(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let a = t.endsWith("/") ? t.length - 1 : t.length,
    i = e.charAt(a);
  return i && i !== "/" ? null : e.slice(a) || "/";
}
function KE(e, t = "/") {
  let {
    pathname: a,
    search: i = "",
    hash: o = "",
  } = typeof e == "string" ? Da(e) : e;
  return {
    pathname: a ? (a.startsWith("/") ? a : XE(a, t)) : t,
    search: ZE(i),
    hash: IE(o),
  };
}
function XE(e, t) {
  let a = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? a.length > 1 && a.pop() : o !== "." && a.push(o);
    }),
    a.length > 1 ? a.join("/") : "/"
  );
}
function ph(e, t, a, i) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(
    i
  )}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function eS(e) {
  return e.filter(
    (t, a) => a === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Ec(e) {
  let t = eS(e);
  return t.map((a, i) => (i === t.length - 1 ? a.pathname : a.pathnameBase));
}
function Cc(e, t, a, i = !1) {
  let o;
  typeof e == "string"
    ? (o = Da(e))
    : ((o = { ...e }),
      ze(
        !o.pathname || !o.pathname.includes("?"),
        ph("?", "pathname", "search", o)
      ),
      ze(
        !o.pathname || !o.pathname.includes("#"),
        ph("#", "pathname", "hash", o)
      ),
      ze(!o.search || !o.search.includes("#"), ph("#", "search", "hash", o)));
  let u = e === "" || o.pathname === "",
    c = u ? "/" : o.pathname,
    d;
  if (c == null) d = a;
  else {
    let y = t.length - 1;
    if (!i && c.startsWith("..")) {
      let b = c.split("/");
      for (; b[0] === ".."; ) b.shift(), (y -= 1);
      o.pathname = b.join("/");
    }
    d = y >= 0 ? t[y] : "/";
  }
  let h = KE(o, d),
    m = c && c !== "/" && c.endsWith("/"),
    g = (u || c === ".") && a.endsWith("/");
  return !h.pathname.endsWith("/") && (m || g) && (h.pathname += "/"), h;
}
var vr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  QE = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  ZE = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  IE = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e),
  fc = class {
    constructor(e, t, a, i = !1) {
      (this.status = e),
        (this.statusText = t || ""),
        (this.internal = i),
        a instanceof Error
          ? ((this.data = a.toString()), (this.error = a))
          : (this.data = a);
    }
  };
function Zo(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
var tS = ["POST", "PUT", "PATCH", "DELETE"],
  WE = new Set(tS),
  JE = ["GET", ...tS],
  eC = new Set(JE),
  tC = new Set([301, 302, 303, 307, 308]),
  nC = new Set([307, 308]),
  gh = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  rC = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  No = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  km = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  aC = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  nS = "remix-router-transitions",
  rS = Symbol("ResetLoaderData");
function iC(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    a =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u";
  ze(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let i = e.mapRouteProperties || aC,
    o = {},
    u = uc(e.routes, i, void 0, o),
    c,
    d = e.basename || "/",
    h = e.dataStrategy || cC,
    m = e.patchRoutesOnNavigation,
    g = { ...e.future },
    y = null,
    b = new Set(),
    x = null,
    w = null,
    S = null,
    A = e.hydrationData != null,
    C = Ca(u, e.history.location, d),
    O = !1,
    M = null;
  if (C == null && !m) {
    let L = Hn(404, { pathname: e.history.location.pathname }),
      { matches: j, route: F } = Mv(u);
    (C = j), (M = { [F.id]: L });
  }
  C &&
    !e.hydrationData &&
    Er(C, u, e.history.location.pathname).active &&
    (C = null);
  let P;
  if (C)
    if (C.some((L) => L.route.lazy)) P = !1;
    else if (!C.some((L) => L.route.loader)) P = !0;
    else {
      let L = e.hydrationData ? e.hydrationData.loaderData : null,
        j = e.hydrationData ? e.hydrationData.errors : null;
      if (j) {
        let F = C.findIndex((re) => j[re.route.id] !== void 0);
        P = C.slice(0, F + 1).every((re) => !Fh(re.route, L, j));
      } else P = C.every((F) => !Fh(F.route, L, j));
    }
  else {
    (P = !1), (C = []);
    let L = Er(null, u, e.history.location.pathname);
    L.active && L.matches && ((O = !0), (C = L.matches));
  }
  let B,
    N = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: C,
      initialized: P,
      navigation: gh,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || M,
      fetchers: new Map(),
      blockers: new Map(),
    },
    q = "POP",
    X = !1,
    Y,
    E = !1,
    J = new Map(),
    ce = null,
    ae = !1,
    xe = !1,
    He = new Set(),
    te = new Map(),
    le = 0,
    oe = -1,
    Be = new Map(),
    k = new Set(),
    ne = new Map(),
    be = new Map(),
    he = new Set(),
    se = new Map(),
    Me,
    Ce = null;
  function Vt() {
    if (
      ((y = e.history.listen(({ action: L, location: j, delta: F }) => {
        if (Me) {
          Me(), (Me = void 0);
          return;
        }
        Pt(
          se.size === 0 || F != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let re = Al({
          currentLocation: N.location,
          nextLocation: j,
          historyAction: L,
        });
        if (re && F != null) {
          let ue = new Promise((ye) => {
            Me = ye;
          });
          e.history.go(F * -1),
            Lt(re, {
              state: "blocked",
              location: j,
              proceed() {
                Lt(re, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: j,
                }),
                  ue.then(() => e.history.go(F));
              },
              reset() {
                let ye = new Map(N.blockers);
                ye.set(re, No), De({ blockers: ye });
              },
            });
          return;
        }
        return Tn(L, j);
      })),
      a)
    ) {
      xC(t, J);
      let L = () => wC(t, J);
      t.addEventListener("pagehide", L),
        (ce = () => t.removeEventListener("pagehide", L));
    }
    return N.initialized || Tn("POP", N.location, { initialHydration: !0 }), B;
  }
  function Ye() {
    y && y(),
      ce && ce(),
      b.clear(),
      Y && Y.abort(),
      N.fetchers.forEach((L, j) => Ls(j)),
      N.blockers.forEach((L, j) => Kn(j));
  }
  function pt(L) {
    return b.add(L), () => b.delete(L);
  }
  function De(L, j = {}) {
    N = { ...N, ...L };
    let F = [],
      re = [];
    N.fetchers.forEach((ue, ye) => {
      ue.state === "idle" && (he.has(ye) ? F.push(ye) : re.push(ye));
    }),
      he.forEach((ue) => {
        !N.fetchers.has(ue) && !te.has(ue) && F.push(ue);
      }),
      [...b].forEach((ue) =>
        ue(N, {
          deletedFetchers: F,
          viewTransitionOpts: j.viewTransitionOpts,
          flushSync: j.flushSync === !0,
        })
      ),
      F.forEach((ue) => Ls(ue)),
      re.forEach((ue) => N.fetchers.delete(ue));
  }
  function jt(L, j, { flushSync: F } = {}) {
    var ie, pe;
    let re =
        N.actionData != null &&
        N.navigation.formMethod != null &&
        Jn(N.navigation.formMethod) &&
        N.navigation.state === "loading" &&
        ((ie = L.state) == null ? void 0 : ie._isRedirect) !== !0,
      ue;
    j.actionData
      ? Object.keys(j.actionData).length > 0
        ? (ue = j.actionData)
        : (ue = null)
      : re
      ? (ue = N.actionData)
      : (ue = null);
    let ye = j.loaderData
        ? Nv(N.loaderData, j.loaderData, j.matches || [], j.errors)
        : N.loaderData,
      Ee = N.blockers;
    Ee.size > 0 && ((Ee = new Map(Ee)), Ee.forEach((Se, Xe) => Ee.set(Xe, No)));
    let fe =
      X === !0 ||
      (N.navigation.formMethod != null &&
        Jn(N.navigation.formMethod) &&
        ((pe = L.state) == null ? void 0 : pe._isRedirect) !== !0);
    c && ((u = c), (c = void 0)),
      ae ||
        q === "POP" ||
        (q === "PUSH"
          ? e.history.push(L, L.state)
          : q === "REPLACE" && e.history.replace(L, L.state));
    let me;
    if (q === "POP") {
      let Se = J.get(N.location.pathname);
      Se && Se.has(L.pathname)
        ? (me = { currentLocation: N.location, nextLocation: L })
        : J.has(L.pathname) &&
          (me = { currentLocation: L, nextLocation: N.location });
    } else if (E) {
      let Se = J.get(N.location.pathname);
      Se
        ? Se.add(L.pathname)
        : ((Se = new Set([L.pathname])), J.set(N.location.pathname, Se)),
        (me = { currentLocation: N.location, nextLocation: L });
    }
    De(
      {
        ...j,
        actionData: ue,
        loaderData: ye,
        historyAction: q,
        location: L,
        initialized: !0,
        navigation: gh,
        revalidation: "idle",
        restoreScrollPosition: or(L, j.matches || N.matches),
        preventScrollReset: fe,
        blockers: Ee,
      },
      { viewTransitionOpts: me, flushSync: F === !0 }
    ),
      (q = "POP"),
      (X = !1),
      (E = !1),
      (ae = !1),
      (xe = !1),
      Ce == null || Ce.resolve(),
      (Ce = null);
  }
  async function Jr(L, j) {
    if (typeof L == "number") {
      e.history.go(L);
      return;
    }
    let F = $h(
        N.location,
        N.matches,
        d,
        L,
        j == null ? void 0 : j.fromRouteId,
        j == null ? void 0 : j.relative
      ),
      { path: re, submission: ue, error: ye } = wv(!1, F, j),
      Ee = N.location,
      fe = Qo(N.location, re, j && j.state);
    fe = { ...fe, ...e.history.encodeLocation(fe) };
    let me = j && j.replace != null ? j.replace : void 0,
      ie = "PUSH";
    me === !0
      ? (ie = "REPLACE")
      : me === !1 ||
        (ue != null &&
          Jn(ue.formMethod) &&
          ue.formAction === N.location.pathname + N.location.search &&
          (ie = "REPLACE"));
    let pe =
        j && "preventScrollReset" in j ? j.preventScrollReset === !0 : void 0,
      Se = (j && j.flushSync) === !0,
      Xe = Al({ currentLocation: Ee, nextLocation: fe, historyAction: ie });
    if (Xe) {
      Lt(Xe, {
        state: "blocked",
        location: fe,
        proceed() {
          Lt(Xe, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: fe,
          }),
            Jr(L, j);
        },
        reset() {
          let Tt = new Map(N.blockers);
          Tt.set(Xe, No), De({ blockers: Tt });
        },
      });
      return;
    }
    await Tn(ie, fe, {
      submission: ue,
      pendingError: ye,
      preventScrollReset: pe,
      replace: j && j.replace,
      enableViewTransition: j && j.viewTransition,
      flushSync: Se,
    });
  }
  function ir() {
    Ce || (Ce = TC()), ks(), De({ revalidation: "loading" });
    let L = Ce.promise;
    return N.navigation.state === "submitting"
      ? L
      : N.navigation.state === "idle"
      ? (Tn(N.historyAction, N.location, {
          startUninterruptedRevalidation: !0,
        }),
        L)
      : (Tn(q || N.historyAction, N.navigation.location, {
          overrideNavigation: N.navigation,
          enableViewTransition: E === !0,
        }),
        L);
  }
  async function Tn(L, j, F) {
    Y && Y.abort(),
      (Y = null),
      (q = L),
      (ae = (F && F.startUninterruptedRevalidation) === !0),
      xi(N.location, N.matches),
      (X = (F && F.preventScrollReset) === !0),
      (E = (F && F.enableViewTransition) === !0);
    let re = c || u,
      ue = F && F.overrideNavigation,
      ye =
        F != null &&
        F.initialHydration &&
        N.matches &&
        N.matches.length > 0 &&
        !O
          ? N.matches
          : Ca(re, j, d),
      Ee = (F && F.flushSync) === !0;
    if (
      ye &&
      N.initialized &&
      !xe &&
      gC(N.location, j) &&
      !(F && F.submission && Jn(F.submission.formMethod))
    ) {
      jt(j, { matches: ye }, { flushSync: Ee });
      return;
    }
    let fe = Er(ye, re, j.pathname);
    if ((fe.active && fe.matches && (ye = fe.matches), !ye)) {
      let { error: lt, notFoundMatches: et, route: gt } = Bs(j.pathname);
      jt(
        j,
        { matches: et, loaderData: {}, errors: { [gt.id]: lt } },
        { flushSync: Ee }
      );
      return;
    }
    Y = new AbortController();
    let me = es(e.history, j, Y.signal, F && F.submission),
      ie;
    if (F && F.pendingError)
      ie = [oi(ye).route.id, { type: "error", error: F.pendingError }];
    else if (F && F.submission && Jn(F.submission.formMethod)) {
      let lt = await vi(me, j, F.submission, ye, fe.active, {
        replace: F.replace,
        flushSync: Ee,
      });
      if (lt.shortCircuited) return;
      if (lt.pendingActionResult) {
        let [et, gt] = lt.pendingActionResult;
        if (yn(gt) && Zo(gt.error) && gt.error.status === 404) {
          (Y = null),
            jt(j, {
              matches: lt.matches,
              loaderData: {},
              errors: { [et]: gt.error },
            });
          return;
        }
      }
      (ye = lt.matches || ye),
        (ie = lt.pendingActionResult),
        (ue = yh(j, F.submission)),
        (Ee = !1),
        (fe.active = !1),
        (me = es(e.history, me.url, me.signal));
    }
    let {
      shortCircuited: pe,
      matches: Se,
      loaderData: Xe,
      errors: Tt,
    } = await ea(
      me,
      j,
      ye,
      fe.active,
      ue,
      F && F.submission,
      F && F.fetcherSubmission,
      F && F.replace,
      F && F.initialHydration === !0,
      Ee,
      ie
    );
    pe ||
      ((Y = null),
      jt(j, { matches: Se || ye, ...Dv(ie), loaderData: Xe, errors: Tt }));
  }
  async function vi(L, j, F, re, ue, ye = {}) {
    ks();
    let Ee = bC(j, F);
    if ((De({ navigation: Ee }, { flushSync: ye.flushSync === !0 }), ue)) {
      let ie = await lr(re, j.pathname, L.signal);
      if (ie.type === "aborted") return { shortCircuited: !0 };
      if (ie.type === "error") {
        let pe = oi(ie.partialMatches).route.id;
        return {
          matches: ie.partialMatches,
          pendingActionResult: [pe, { type: "error", error: ie.error }],
        };
      } else if (ie.matches) re = ie.matches;
      else {
        let { notFoundMatches: pe, error: Se, route: Xe } = Bs(j.pathname);
        return {
          matches: pe,
          pendingActionResult: [Xe.id, { type: "error", error: Se }],
        };
      }
    }
    let fe,
      me = Vo(re, j);
    if (!me.route.action && !me.route.lazy)
      fe = {
        type: "error",
        error: Hn(405, {
          method: L.method,
          pathname: j.pathname,
          routeId: me.route.id,
        }),
      };
    else if (
      ((fe = (await La("action", N, L, [me], re, null))[me.route.id]),
      L.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (li(fe)) {
      let ie;
      return (
        ye && ye.replace != null
          ? (ie = ye.replace)
          : (ie =
              _v(fe.response.headers.get("Location"), new URL(L.url), d) ===
              N.location.pathname + N.location.search),
        await Tr(L, fe, !0, { submission: F, replace: ie }),
        { shortCircuited: !0 }
      );
    }
    if (yn(fe)) {
      let ie = oi(re, me.route.id);
      return (
        (ye && ye.replace) !== !0 && (q = "PUSH"),
        { matches: re, pendingActionResult: [ie.route.id, fe] }
      );
    }
    return { matches: re, pendingActionResult: [me.route.id, fe] };
  }
  async function ea(L, j, F, re, ue, ye, Ee, fe, me, ie, pe) {
    let Se = ue || yh(j, ye),
      Xe = ye || Ee || Lv(Se),
      Tt = !ae && !me;
    if (re) {
      if (Tt) {
        let ct = bi(pe);
        De(
          { navigation: Se, ...(ct !== void 0 ? { actionData: ct } : {}) },
          { flushSync: ie }
        );
      }
      let qe = await lr(F, j.pathname, L.signal);
      if (qe.type === "aborted") return { shortCircuited: !0 };
      if (qe.type === "error") {
        let ct = oi(qe.partialMatches).route.id;
        return {
          matches: qe.partialMatches,
          loaderData: {},
          errors: { [ct]: qe.error },
        };
      } else if (qe.matches) F = qe.matches;
      else {
        let { error: ct, notFoundMatches: sn, route: Va } = Bs(j.pathname);
        return { matches: sn, loaderData: {}, errors: { [Va.id]: ct } };
      }
    }
    let lt = c || u,
      [et, gt] = Ev(
        e.history,
        N,
        F,
        Xe,
        j,
        me === !0,
        xe,
        He,
        he,
        ne,
        k,
        lt,
        d,
        pe
      );
    if (((oe = ++le), et.length === 0 && gt.length === 0)) {
      let qe = ta();
      return (
        jt(
          j,
          {
            matches: F,
            loaderData: {},
            errors: pe && yn(pe[1]) ? { [pe[0]]: pe[1].error } : null,
            ...Dv(pe),
            ...(qe ? { fetchers: new Map(N.fetchers) } : {}),
          },
          { flushSync: ie }
        ),
        { shortCircuited: !0 }
      );
    }
    if (Tt) {
      let qe = {};
      if (!re) {
        qe.navigation = Se;
        let ct = bi(pe);
        ct !== void 0 && (qe.actionData = ct);
      }
      gt.length > 0 && (qe.fetchers = Si(gt)), De(qe, { flushSync: ie });
    }
    gt.forEach((qe) => {
      sr(qe.key), qe.controller && te.set(qe.key, qe.controller);
    });
    let Cn = () => gt.forEach((qe) => sr(qe.key));
    Y && Y.signal.addEventListener("abort", Cn);
    let { loaderResults: Cr, fetcherResults: Ht } = await fn(N, F, et, gt, L);
    if (L.signal.aborted) return { shortCircuited: !0 };
    Y && Y.signal.removeEventListener("abort", Cn),
      gt.forEach((qe) => te.delete(qe.key));
    let qt = Bu(Cr);
    if (qt)
      return (
        await Tr(L, qt.result, !0, { replace: fe }), { shortCircuited: !0 }
      );
    if (((qt = Bu(Ht)), qt))
      return (
        k.add(qt.key),
        await Tr(L, qt.result, !0, { replace: fe }),
        { shortCircuited: !0 }
      );
    let { loaderData: Ar, errors: An } = Ov(N, F, Cr, pe, gt, Ht);
    me && N.errors && (An = { ...N.errors, ...An });
    let at = ta(),
      za = Xt(oe),
      Pa = at || za || gt.length > 0;
    return {
      matches: F,
      loaderData: Ar,
      errors: An,
      ...(Pa ? { fetchers: new Map(N.fetchers) } : {}),
    };
  }
  function bi(L) {
    if (L && !yn(L[1])) return { [L[0]]: L[1].data };
    if (N.actionData)
      return Object.keys(N.actionData).length === 0 ? null : N.actionData;
  }
  function Si(L) {
    return (
      L.forEach((j) => {
        let F = N.fetchers.get(j.key),
          re = Do(void 0, F ? F.data : void 0);
        N.fetchers.set(j.key, re);
      }),
      new Map(N.fetchers)
    );
  }
  async function Ns(L, j, F, re) {
    sr(L);
    let ue = (re && re.flushSync) === !0,
      ye = c || u,
      Ee = $h(
        N.location,
        N.matches,
        d,
        F,
        j,
        re == null ? void 0 : re.relative
      ),
      fe = Ca(ye, Ee, d),
      me = Er(fe, ye, Ee);
    if ((me.active && me.matches && (fe = me.matches), !fe)) {
      En(L, j, Hn(404, { pathname: Ee }), { flushSync: ue });
      return;
    }
    let { path: ie, submission: pe, error: Se } = wv(!0, Ee, re);
    if (Se) {
      En(L, j, Se, { flushSync: ue });
      return;
    }
    let Xe = Vo(fe, ie),
      Tt = (re && re.preventScrollReset) === !0;
    if (pe && Jn(pe.formMethod)) {
      await Ds(L, j, ie, Xe, fe, me.active, ue, Tt, pe);
      return;
    }
    ne.set(L, { routeId: j, path: ie }),
      await Ms(L, j, ie, Xe, fe, me.active, ue, Tt, pe);
  }
  async function Ds(L, j, F, re, ue, ye, Ee, fe, me) {
    ks(), ne.delete(L);
    function ie(ft) {
      if (!ft.route.action && !ft.route.lazy) {
        let _r = Hn(405, { method: me.formMethod, pathname: F, routeId: j });
        return En(L, j, _r, { flushSync: Ee }), !0;
      }
      return !1;
    }
    if (!ye && ie(re)) return;
    let pe = N.fetchers.get(L);
    Gn(L, SC(me, pe), { flushSync: Ee });
    let Se = new AbortController(),
      Xe = es(e.history, F, Se.signal, me);
    if (ye) {
      let ft = await lr(ue, F, Xe.signal);
      if (ft.type === "aborted") return;
      if (ft.type === "error") {
        En(L, j, ft.error, { flushSync: Ee });
        return;
      } else if (ft.matches) {
        if (((ue = ft.matches), (re = Vo(ue, F)), ie(re))) return;
      } else {
        En(L, j, Hn(404, { pathname: F }), { flushSync: Ee });
        return;
      }
    }
    te.set(L, Se);
    let Tt = le,
      et = (await La("action", N, Xe, [re], ue, L))[re.route.id];
    if (Xe.signal.aborted) {
      te.get(L) === Se && te.delete(L);
      return;
    }
    if (he.has(L)) {
      if (li(et) || yn(et)) {
        Gn(L, Ta(void 0));
        return;
      }
    } else {
      if (li(et))
        if ((te.delete(L), oe > Tt)) {
          Gn(L, Ta(void 0));
          return;
        } else
          return (
            k.add(L),
            Gn(L, Do(me)),
            Tr(Xe, et, !1, { fetcherSubmission: me, preventScrollReset: fe })
          );
      if (yn(et)) {
        En(L, j, et.error);
        return;
      }
    }
    let gt = N.navigation.location || N.location,
      Cn = es(e.history, gt, Se.signal),
      Cr = c || u,
      Ht =
        N.navigation.state !== "idle"
          ? Ca(Cr, N.navigation.location, d)
          : N.matches;
    ze(Ht, "Didn't find any matches after fetcher action");
    let qt = ++le;
    Be.set(L, qt);
    let Ar = Do(me, et.data);
    N.fetchers.set(L, Ar);
    let [An, at] = Ev(e.history, N, Ht, me, gt, !1, xe, He, he, ne, k, Cr, d, [
      re.route.id,
      et,
    ]);
    at
      .filter((ft) => ft.key !== L)
      .forEach((ft) => {
        let _r = ft.key,
          Rl = N.fetchers.get(_r),
          wi = Do(void 0, Rl ? Rl.data : void 0);
        N.fetchers.set(_r, wi),
          sr(_r),
          ft.controller && te.set(_r, ft.controller);
      }),
      De({ fetchers: new Map(N.fetchers) });
    let za = () => at.forEach((ft) => sr(ft.key));
    Se.signal.addEventListener("abort", za);
    let { loaderResults: Pa, fetcherResults: qe } = await fn(N, Ht, An, at, Cn);
    if (Se.signal.aborted) return;
    Se.signal.removeEventListener("abort", za),
      Be.delete(L),
      te.delete(L),
      at.forEach((ft) => te.delete(ft.key));
    let ct = Bu(Pa);
    if (ct) return Tr(Cn, ct.result, !1, { preventScrollReset: fe });
    if (((ct = Bu(qe)), ct))
      return k.add(ct.key), Tr(Cn, ct.result, !1, { preventScrollReset: fe });
    let { loaderData: sn, errors: Va } = Ov(N, Ht, Pa, void 0, at, qe);
    if (N.fetchers.has(L)) {
      let ft = Ta(et.data);
      N.fetchers.set(L, ft);
    }
    Xt(qt),
      N.navigation.state === "loading" && qt > oe
        ? (ze(q, "Expected pending action"),
          Y && Y.abort(),
          jt(N.navigation.location, {
            matches: Ht,
            loaderData: sn,
            errors: Va,
            fetchers: new Map(N.fetchers),
          }))
        : (De({
            errors: Va,
            loaderData: Nv(N.loaderData, sn, Ht, Va),
            fetchers: new Map(N.fetchers),
          }),
          (xe = !1));
  }
  async function Ms(L, j, F, re, ue, ye, Ee, fe, me) {
    let ie = N.fetchers.get(L);
    Gn(L, Do(me, ie ? ie.data : void 0), { flushSync: Ee });
    let pe = new AbortController(),
      Se = es(e.history, F, pe.signal);
    if (ye) {
      let et = await lr(ue, F, Se.signal);
      if (et.type === "aborted") return;
      if (et.type === "error") {
        En(L, j, et.error, { flushSync: Ee });
        return;
      } else if (et.matches) (ue = et.matches), (re = Vo(ue, F));
      else {
        En(L, j, Hn(404, { pathname: F }), { flushSync: Ee });
        return;
      }
    }
    te.set(L, pe);
    let Xe = le,
      lt = (await La("loader", N, Se, [re], ue, L))[re.route.id];
    if ((te.get(L) === pe && te.delete(L), !Se.signal.aborted)) {
      if (he.has(L)) {
        Gn(L, Ta(void 0));
        return;
      }
      if (li(lt))
        if (oe > Xe) {
          Gn(L, Ta(void 0));
          return;
        } else {
          k.add(L), await Tr(Se, lt, !1, { preventScrollReset: fe });
          return;
        }
      if (yn(lt)) {
        En(L, j, lt.error);
        return;
      }
      Gn(L, Ta(lt.data));
    }
  }
  async function Tr(
    L,
    j,
    F,
    {
      submission: re,
      fetcherSubmission: ue,
      preventScrollReset: ye,
      replace: Ee,
    } = {}
  ) {
    j.response.headers.has("X-Remix-Revalidate") && (xe = !0);
    let fe = j.response.headers.get("Location");
    ze(fe, "Expected a Location header on the redirect Response"),
      (fe = _v(fe, new URL(L.url), d));
    let me = Qo(N.location, fe, { _isRedirect: !0 });
    if (a) {
      let lt = !1;
      if (j.response.headers.has("X-Remix-Reload-Document")) lt = !0;
      else if (km.test(fe)) {
        const et = e.history.createURL(fe);
        lt = et.origin !== t.location.origin || nr(et.pathname, d) == null;
      }
      if (lt) {
        Ee ? t.location.replace(fe) : t.location.assign(fe);
        return;
      }
    }
    Y = null;
    let ie =
        Ee === !0 || j.response.headers.has("X-Remix-Replace")
          ? "REPLACE"
          : "PUSH",
      { formMethod: pe, formAction: Se, formEncType: Xe } = N.navigation;
    !re && !ue && pe && Se && Xe && (re = Lv(N.navigation));
    let Tt = re || ue;
    if (nC.has(j.response.status) && Tt && Jn(Tt.formMethod))
      await Tn(ie, me, {
        submission: { ...Tt, formAction: fe },
        preventScrollReset: ye || X,
        enableViewTransition: F ? E : void 0,
      });
    else {
      let lt = yh(me, re);
      await Tn(ie, me, {
        overrideNavigation: lt,
        fetcherSubmission: ue,
        preventScrollReset: ye || X,
        enableViewTransition: F ? E : void 0,
      });
    }
  }
  async function La(L, j, F, re, ue, ye) {
    let Ee,
      fe = {};
    try {
      Ee = await fC(h, L, j, F, re, ue, ye, o, i);
    } catch (me) {
      return (
        re.forEach((ie) => {
          fe[ie.route.id] = { type: "error", error: me };
        }),
        fe
      );
    }
    for (let [me, ie] of Object.entries(Ee))
      if (yC(ie)) {
        let pe = ie.result;
        fe[me] = { type: "redirect", response: mC(pe, F, me, ue, d) };
      } else fe[me] = await hC(ie);
    return fe;
  }
  async function fn(L, j, F, re, ue) {
    let ye = La("loader", L, ue, F, j, null),
      Ee = Promise.all(
        re.map(async (ie) => {
          if (ie.matches && ie.match && ie.controller) {
            let Se = (
              await La(
                "loader",
                L,
                es(e.history, ie.path, ie.controller.signal),
                [ie.match],
                ie.matches,
                ie.key
              )
            )[ie.match.route.id];
            return { [ie.key]: Se };
          } else
            return Promise.resolve({
              [ie.key]: {
                type: "error",
                error: Hn(404, { pathname: ie.path }),
              },
            });
        })
      ),
      fe = await ye,
      me = (await Ee).reduce((ie, pe) => Object.assign(ie, pe), {});
    return { loaderResults: fe, fetcherResults: me };
  }
  function ks() {
    (xe = !0),
      ne.forEach((L, j) => {
        te.has(j) && He.add(j), sr(j);
      });
  }
  function Gn(L, j, F = {}) {
    N.fetchers.set(L, j),
      De(
        { fetchers: new Map(N.fetchers) },
        { flushSync: (F && F.flushSync) === !0 }
      );
  }
  function En(L, j, F, re = {}) {
    let ue = oi(N.matches, j);
    Ls(L),
      De(
        { errors: { [ue.route.id]: F }, fetchers: new Map(N.fetchers) },
        { flushSync: (re && re.flushSync) === !0 }
      );
  }
  function Ba(L) {
    return (
      be.set(L, (be.get(L) || 0) + 1),
      he.has(L) && he.delete(L),
      N.fetchers.get(L) || rC
    );
  }
  function Ls(L) {
    let j = N.fetchers.get(L);
    te.has(L) && !(j && j.state === "loading" && Be.has(L)) && sr(L),
      ne.delete(L),
      Be.delete(L),
      k.delete(L),
      he.delete(L),
      He.delete(L),
      N.fetchers.delete(L);
  }
  function El(L) {
    let j = (be.get(L) || 0) - 1;
    j <= 0 ? (be.delete(L), he.add(L)) : be.set(L, j),
      De({ fetchers: new Map(N.fetchers) });
  }
  function sr(L) {
    let j = te.get(L);
    j && (j.abort(), te.delete(L));
  }
  function Cl(L) {
    for (let j of L) {
      let F = Ba(j),
        re = Ta(F.data);
      N.fetchers.set(j, re);
    }
  }
  function ta() {
    let L = [],
      j = !1;
    for (let F of k) {
      let re = N.fetchers.get(F);
      ze(re, `Expected fetcher: ${F}`),
        re.state === "loading" && (k.delete(F), L.push(F), (j = !0));
    }
    return Cl(L), j;
  }
  function Xt(L) {
    let j = [];
    for (let [F, re] of Be)
      if (re < L) {
        let ue = N.fetchers.get(F);
        ze(ue, `Expected fetcher: ${F}`),
          ue.state === "loading" && (sr(F), Be.delete(F), j.push(F));
      }
    return Cl(j), j.length > 0;
  }
  function af(L, j) {
    let F = N.blockers.get(L) || No;
    return se.get(L) !== j && se.set(L, j), F;
  }
  function Kn(L) {
    N.blockers.delete(L), se.delete(L);
  }
  function Lt(L, j) {
    let F = N.blockers.get(L) || No;
    ze(
      (F.state === "unblocked" && j.state === "blocked") ||
        (F.state === "blocked" && j.state === "blocked") ||
        (F.state === "blocked" && j.state === "proceeding") ||
        (F.state === "blocked" && j.state === "unblocked") ||
        (F.state === "proceeding" && j.state === "unblocked"),
      `Invalid blocker state transition: ${F.state} -> ${j.state}`
    );
    let re = new Map(N.blockers);
    re.set(L, j), De({ blockers: re });
  }
  function Al({ currentLocation: L, nextLocation: j, historyAction: F }) {
    if (se.size === 0) return;
    se.size > 1 && Pt(!1, "A router only supports one blocker at a time");
    let re = Array.from(se.entries()),
      [ue, ye] = re[re.length - 1],
      Ee = N.blockers.get(ue);
    if (
      !(Ee && Ee.state === "proceeding") &&
      ye({ currentLocation: L, nextLocation: j, historyAction: F })
    )
      return ue;
  }
  function Bs(L) {
    let j = Hn(404, { pathname: L }),
      F = c || u,
      { matches: re, route: ue } = Mv(F);
    return { notFoundMatches: re, route: ue, error: j };
  }
  function sf(L, j, F) {
    if (((x = L), (S = j), (w = F || null), !A && N.navigation === gh)) {
      A = !0;
      let re = or(N.location, N.matches);
      re != null && De({ restoreScrollPosition: re });
    }
    return () => {
      (x = null), (S = null), (w = null);
    };
  }
  function Ua(L, j) {
    return (
      (w &&
        w(
          L,
          j.map((re) => LE(re, N.loaderData))
        )) ||
      L.key
    );
  }
  function xi(L, j) {
    if (x && S) {
      let F = Ua(L, j);
      x[F] = S();
    }
  }
  function or(L, j) {
    if (x) {
      let F = Ua(L, j),
        re = x[F];
      if (typeof re == "number") return re;
    }
    return null;
  }
  function Er(L, j, F) {
    if (m)
      if (L) {
        if (Object.keys(L[0].params).length > 0)
          return { active: !0, matches: Yu(j, F, d, !0) };
      } else return { active: !0, matches: Yu(j, F, d, !0) || [] };
    return { active: !1, matches: null };
  }
  async function lr(L, j, F) {
    if (!m) return { type: "success", matches: L };
    let re = L;
    for (;;) {
      let ue = c == null,
        ye = c || u,
        Ee = o;
      try {
        await m({
          signal: F,
          path: j,
          matches: re,
          patch: (ie, pe) => {
            F.aborted || Av(ie, pe, ye, Ee, i);
          },
        });
      } catch (ie) {
        return { type: "error", error: ie, partialMatches: re };
      } finally {
        ue && !F.aborted && (u = [...u]);
      }
      if (F.aborted) return { type: "aborted" };
      let fe = Ca(ye, j, d);
      if (fe) return { type: "success", matches: fe };
      let me = Yu(ye, j, d, !0);
      if (
        !me ||
        (re.length === me.length &&
          re.every((ie, pe) => ie.route.id === me[pe].route.id))
      )
        return { type: "success", matches: null };
      re = me;
    }
  }
  function of(L) {
    (o = {}), (c = uc(L, i, void 0, o));
  }
  function _l(L, j) {
    let F = c == null;
    Av(L, j, c || u, o, i), F && ((u = [...u]), De({}));
  }
  return (
    (B = {
      get basename() {
        return d;
      },
      get future() {
        return g;
      },
      get state() {
        return N;
      },
      get routes() {
        return u;
      },
      get window() {
        return t;
      },
      initialize: Vt,
      subscribe: pt,
      enableScrollRestoration: sf,
      navigate: Jr,
      fetch: Ns,
      revalidate: ir,
      createHref: (L) => e.history.createHref(L),
      encodeLocation: (L) => e.history.encodeLocation(L),
      getFetcher: Ba,
      deleteFetcher: El,
      dispose: Ye,
      getBlocker: af,
      deleteBlocker: Kn,
      patchRoutes: _l,
      _internalFetchControllers: te,
      _internalSetRoutes: of,
    }),
    B
  );
}
function sC(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function $h(e, t, a, i, o, u) {
  let c, d;
  if (o) {
    c = [];
    for (let m of t)
      if ((c.push(m), m.route.id === o)) {
        d = m;
        break;
      }
  } else (c = t), (d = t[t.length - 1]);
  let h = Cc(i || ".", Ec(c), nr(e.pathname, a) || e.pathname, u === "path");
  if (
    (i == null && ((h.search = e.search), (h.hash = e.hash)),
    (i == null || i === "" || i === ".") && d)
  ) {
    let m = Lm(h.search);
    if (d.route.index && !m)
      h.search = h.search ? h.search.replace(/^\?/, "?index&") : "?index";
    else if (!d.route.index && m) {
      let g = new URLSearchParams(h.search),
        y = g.getAll("index");
      g.delete("index"),
        y.filter((x) => x).forEach((x) => g.append("index", x));
      let b = g.toString();
      h.search = b ? `?${b}` : "";
    }
  }
  return (
    a !== "/" && (h.pathname = h.pathname === "/" ? a : vr([a, h.pathname])),
    _a(h)
  );
}
function wv(e, t, a) {
  if (!a || !sC(a)) return { path: t };
  if (a.formMethod && !vC(a.formMethod))
    return { path: t, error: Hn(405, { method: a.formMethod }) };
  let i = () => ({ path: t, error: Hn(400, { type: "invalid-body" }) }),
    u = (a.formMethod || "get").toUpperCase(),
    c = iS(t);
  if (a.body !== void 0) {
    if (a.formEncType === "text/plain") {
      if (!Jn(u)) return i();
      let y =
        typeof a.body == "string"
          ? a.body
          : a.body instanceof FormData || a.body instanceof URLSearchParams
          ? Array.from(a.body.entries()).reduce(
              (b, [x, w]) => `${b}${x}=${w}
`,
              ""
            )
          : String(a.body);
      return {
        path: t,
        submission: {
          formMethod: u,
          formAction: c,
          formEncType: a.formEncType,
          formData: void 0,
          json: void 0,
          text: y,
        },
      };
    } else if (a.formEncType === "application/json") {
      if (!Jn(u)) return i();
      try {
        let y = typeof a.body == "string" ? JSON.parse(a.body) : a.body;
        return {
          path: t,
          submission: {
            formMethod: u,
            formAction: c,
            formEncType: a.formEncType,
            formData: void 0,
            json: y,
            text: void 0,
          },
        };
      } catch {
        return i();
      }
    }
  }
  ze(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let d, h;
  if (a.formData) (d = Yh(a.formData)), (h = a.formData);
  else if (a.body instanceof FormData) (d = Yh(a.body)), (h = a.body);
  else if (a.body instanceof URLSearchParams) (d = a.body), (h = Rv(d));
  else if (a.body == null) (d = new URLSearchParams()), (h = new FormData());
  else
    try {
      (d = new URLSearchParams(a.body)), (h = Rv(d));
    } catch {
      return i();
    }
  let m = {
    formMethod: u,
    formAction: c,
    formEncType: (a && a.formEncType) || "application/x-www-form-urlencoded",
    formData: h,
    json: void 0,
    text: void 0,
  };
  if (Jn(m.formMethod)) return { path: t, submission: m };
  let g = Da(t);
  return (
    e && g.search && Lm(g.search) && d.append("index", ""),
    (g.search = `?${d}`),
    { path: _a(g), submission: m }
  );
}
function Tv(e, t, a = !1) {
  let i = e.findIndex((o) => o.route.id === t);
  return i >= 0 ? e.slice(0, a ? i + 1 : i) : e;
}
function Ev(e, t, a, i, o, u, c, d, h, m, g, y, b, x) {
  let w = x ? (yn(x[1]) ? x[1].error : x[1].data) : void 0,
    S = e.createURL(t.location),
    A = e.createURL(o),
    C = a;
  u && t.errors
    ? (C = Tv(a, Object.keys(t.errors)[0], !0))
    : x && yn(x[1]) && (C = Tv(a, x[0]));
  let O = x ? x[1].statusCode : void 0,
    M = O && O >= 400,
    P = C.filter((N, q) => {
      let { route: X } = N;
      if (X.lazy) return !0;
      if (X.loader == null) return !1;
      if (u) return Fh(X, t.loaderData, t.errors);
      if (oC(t.loaderData, t.matches[q], N)) return !0;
      let Y = t.matches[q],
        E = N;
      return Cv(N, {
        currentUrl: S,
        currentParams: Y.params,
        nextUrl: A,
        nextParams: E.params,
        ...i,
        actionResult: w,
        actionStatus: O,
        defaultShouldRevalidate: M
          ? !1
          : c ||
            S.pathname + S.search === A.pathname + A.search ||
            S.search !== A.search ||
            lC(Y, E),
      });
    }),
    B = [];
  return (
    m.forEach((N, q) => {
      if (u || !a.some((ce) => ce.route.id === N.routeId) || h.has(q)) return;
      let X = Ca(y, N.path, b);
      if (!X) {
        B.push({
          key: q,
          routeId: N.routeId,
          path: N.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let Y = t.fetchers.get(q),
        E = Vo(X, N.path),
        J = !1;
      g.has(q)
        ? (J = !1)
        : d.has(q)
        ? (d.delete(q), (J = !0))
        : Y && Y.state !== "idle" && Y.data === void 0
        ? (J = c)
        : (J = Cv(E, {
            currentUrl: S,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: A,
            nextParams: a[a.length - 1].params,
            ...i,
            actionResult: w,
            actionStatus: O,
            defaultShouldRevalidate: M ? !1 : c,
          })),
        J &&
          B.push({
            key: q,
            routeId: N.routeId,
            path: N.path,
            matches: X,
            match: E,
            controller: new AbortController(),
          });
    }),
    [P, B]
  );
}
function Fh(e, t, a) {
  if (e.lazy) return !0;
  if (!e.loader) return !1;
  let i = t != null && t[e.id] !== void 0,
    o = a != null && a[e.id] !== void 0;
  return !i && o
    ? !1
    : typeof e.loader == "function" && e.loader.hydrate === !0
    ? !0
    : !i && !o;
}
function oC(e, t, a) {
  let i = !t || a.route.id !== t.route.id,
    o = !e.hasOwnProperty(a.route.id);
  return i || o;
}
function lC(e, t) {
  let a = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (a != null && a.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Cv(e, t) {
  if (e.route.shouldRevalidate) {
    let a = e.route.shouldRevalidate(t);
    if (typeof a == "boolean") return a;
  }
  return t.defaultShouldRevalidate;
}
function Av(e, t, a, i, o) {
  let u;
  if (e) {
    let h = i[e];
    ze(h, `No route found to patch children into: routeId = ${e}`),
      h.children || (h.children = []),
      (u = h.children);
  } else u = a;
  let c = t.filter((h) => !u.some((m) => aS(h, m))),
    d = uc(
      c,
      o,
      [e || "_", "patch", String((u == null ? void 0 : u.length) || "0")],
      i
    );
  u.push(...d);
}
function aS(e, t) {
  return "id" in e && "id" in t && e.id === t.id
    ? !0
    : e.index === t.index &&
      e.path === t.path &&
      e.caseSensitive === t.caseSensitive
    ? (!e.children || e.children.length === 0) &&
      (!t.children || t.children.length === 0)
      ? !0
      : e.children.every((a, i) => {
          var o;
          return (o = t.children) == null ? void 0 : o.some((u) => aS(a, u));
        })
    : !1;
}
async function uC(e, t, a) {
  if (!e.lazy) return;
  let i = await e.lazy();
  if (!e.lazy) return;
  let o = a[e.id];
  ze(o, "No route found in manifest");
  let u = {};
  for (let c in i) {
    let h = o[c] !== void 0 && c !== "hasErrorBoundary";
    Pt(
      !h,
      `Route "${o.id}" has a static property "${c}" defined but its lazy function is also returning a value for this property. The lazy route property "${c}" will be ignored.`
    ),
      !h && !ME.has(c) && (u[c] = i[c]);
  }
  Object.assign(o, u), Object.assign(o, { ...t(o), lazy: void 0 });
}
async function cC({ matches: e }) {
  let t = e.filter((i) => i.shouldLoad);
  return (await Promise.all(t.map((i) => i.resolve()))).reduce(
    (i, o, u) => Object.assign(i, { [t[u].route.id]: o }),
    {}
  );
}
async function fC(e, t, a, i, o, u, c, d, h, m) {
  let g = u.map((x) => (x.route.lazy ? uC(x.route, h, d) : void 0)),
    y = u.map((x, w) => {
      let S = g[w],
        A = o.some((O) => O.route.id === x.route.id);
      return {
        ...x,
        shouldLoad: A,
        resolve: async (O) => (
          O &&
            i.method === "GET" &&
            (x.route.lazy || x.route.loader) &&
            (A = !0),
          A
            ? dC(t, i, x, S, O, m)
            : Promise.resolve({ type: "data", result: void 0 })
        ),
      };
    }),
    b = await e({
      matches: y,
      request: i,
      params: u[0].params,
      fetcherKey: c,
      context: m,
    });
  try {
    await Promise.all(g);
  } catch {}
  return b;
}
async function dC(e, t, a, i, o, u) {
  let c,
    d,
    h = (m) => {
      let g,
        y = new Promise((w, S) => (g = S));
      (d = () => g()), t.signal.addEventListener("abort", d);
      let b = (w) =>
          typeof m != "function"
            ? Promise.reject(
                new Error(
                  `You cannot call the handler for a route which defines a boolean "${e}" [routeId: ${a.route.id}]`
                )
              )
            : m(
                { request: t, params: a.params, context: u },
                ...(w !== void 0 ? [w] : [])
              ),
        x = (async () => {
          try {
            return { type: "data", result: await (o ? o((S) => b(S)) : b()) };
          } catch (w) {
            return { type: "error", result: w };
          }
        })();
      return Promise.race([x, y]);
    };
  try {
    let m = a.route[e];
    if (i)
      if (m) {
        let g,
          [y] = await Promise.all([
            h(m).catch((b) => {
              g = b;
            }),
            i,
          ]);
        if (g !== void 0) throw g;
        c = y;
      } else if ((await i, (m = a.route[e]), m)) c = await h(m);
      else if (e === "action") {
        let g = new URL(t.url),
          y = g.pathname + g.search;
        throw Hn(405, { method: t.method, pathname: y, routeId: a.route.id });
      } else return { type: "data", result: void 0 };
    else if (m) c = await h(m);
    else {
      let g = new URL(t.url),
        y = g.pathname + g.search;
      throw Hn(404, { pathname: y });
    }
  } catch (m) {
    return { type: "error", result: m };
  } finally {
    d && t.signal.removeEventListener("abort", d);
  }
  return c;
}
async function hC(e) {
  var i, o, u, c, d, h;
  let { result: t, type: a } = e;
  if (sS(t)) {
    let m;
    try {
      let g = t.headers.get("Content-Type");
      g && /\bapplication\/json\b/.test(g)
        ? t.body == null
          ? (m = null)
          : (m = await t.json())
        : (m = await t.text());
    } catch (g) {
      return { type: "error", error: g };
    }
    return a === "error"
      ? {
          type: "error",
          error: new fc(t.status, t.statusText, m),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: "data", data: m, statusCode: t.status, headers: t.headers };
  }
  return a === "error"
    ? kv(t)
      ? t.data instanceof Error
        ? {
            type: "error",
            error: t.data,
            statusCode: (i = t.init) == null ? void 0 : i.status,
            headers:
              (o = t.init) != null && o.headers
                ? new Headers(t.init.headers)
                : void 0,
          }
        : {
            type: "error",
            error: new fc(
              ((u = t.init) == null ? void 0 : u.status) || 500,
              void 0,
              t.data
            ),
            statusCode: Zo(t) ? t.status : void 0,
            headers:
              (c = t.init) != null && c.headers
                ? new Headers(t.init.headers)
                : void 0,
          }
      : { type: "error", error: t, statusCode: Zo(t) ? t.status : void 0 }
    : kv(t)
    ? {
        type: "data",
        data: t.data,
        statusCode: (d = t.init) == null ? void 0 : d.status,
        headers:
          (h = t.init) != null && h.headers
            ? new Headers(t.init.headers)
            : void 0,
      }
    : { type: "data", data: t };
}
function mC(e, t, a, i, o) {
  let u = e.headers.get("Location");
  if (
    (ze(
      u,
      "Redirects returned/thrown from loaders/actions must have a Location header"
    ),
    !km.test(u))
  ) {
    let c = i.slice(0, i.findIndex((d) => d.route.id === a) + 1);
    (u = $h(new URL(t.url), c, o, u)), e.headers.set("Location", u);
  }
  return e;
}
function _v(e, t, a) {
  if (km.test(e)) {
    let i = e,
      o = i.startsWith("//") ? new URL(t.protocol + i) : new URL(i),
      u = nr(o.pathname, a) != null;
    if (o.origin === t.origin && u) return o.pathname + o.search + o.hash;
  }
  return e;
}
function es(e, t, a, i) {
  let o = e.createURL(iS(t)).toString(),
    u = { signal: a };
  if (i && Jn(i.formMethod)) {
    let { formMethod: c, formEncType: d } = i;
    (u.method = c.toUpperCase()),
      d === "application/json"
        ? ((u.headers = new Headers({ "Content-Type": d })),
          (u.body = JSON.stringify(i.json)))
        : d === "text/plain"
        ? (u.body = i.text)
        : d === "application/x-www-form-urlencoded" && i.formData
        ? (u.body = Yh(i.formData))
        : (u.body = i.formData);
  }
  return new Request(o, u);
}
function Yh(e) {
  let t = new URLSearchParams();
  for (let [a, i] of e.entries())
    t.append(a, typeof i == "string" ? i : i.name);
  return t;
}
function Rv(e) {
  let t = new FormData();
  for (let [a, i] of e.entries()) t.append(a, i);
  return t;
}
function pC(e, t, a, i = !1, o = !1) {
  let u = {},
    c = null,
    d,
    h = !1,
    m = {},
    g = a && yn(a[1]) ? a[1].error : void 0;
  return (
    e.forEach((y) => {
      if (!(y.route.id in t)) return;
      let b = y.route.id,
        x = t[b];
      if (
        (ze(!li(x), "Cannot handle redirect results in processLoaderData"),
        yn(x))
      ) {
        let w = x.error;
        if ((g !== void 0 && ((w = g), (g = void 0)), (c = c || {}), o))
          c[b] = w;
        else {
          let S = oi(e, b);
          c[S.route.id] == null && (c[S.route.id] = w);
        }
        i || (u[b] = rS),
          h || ((h = !0), (d = Zo(x.error) ? x.error.status : 500)),
          x.headers && (m[b] = x.headers);
      } else
        (u[b] = x.data),
          x.statusCode && x.statusCode !== 200 && !h && (d = x.statusCode),
          x.headers && (m[b] = x.headers);
    }),
    g !== void 0 && a && ((c = { [a[0]]: g }), (u[a[0]] = void 0)),
    { loaderData: u, errors: c, statusCode: d || 200, loaderHeaders: m }
  );
}
function Ov(e, t, a, i, o, u) {
  let { loaderData: c, errors: d } = pC(t, a, i);
  return (
    o.forEach((h) => {
      let { key: m, match: g, controller: y } = h,
        b = u[m];
      if (
        (ze(b, "Did not find corresponding fetcher result"),
        !(y && y.signal.aborted))
      )
        if (yn(b)) {
          let x = oi(e.matches, g == null ? void 0 : g.route.id);
          (d && d[x.route.id]) || (d = { ...d, [x.route.id]: b.error }),
            e.fetchers.delete(m);
        } else if (li(b)) ze(!1, "Unhandled fetcher revalidation redirect");
        else {
          let x = Ta(b.data);
          e.fetchers.set(m, x);
        }
    }),
    { loaderData: c, errors: d }
  );
}
function Nv(e, t, a, i) {
  let o = Object.entries(t)
    .filter(([, u]) => u !== rS)
    .reduce((u, [c, d]) => ((u[c] = d), u), {});
  for (let u of a) {
    let c = u.route.id;
    if (
      (!t.hasOwnProperty(c) &&
        e.hasOwnProperty(c) &&
        u.route.loader &&
        (o[c] = e[c]),
      i && i.hasOwnProperty(c))
    )
      break;
  }
  return o;
}
function Dv(e) {
  return e
    ? yn(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function oi(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((i) => i.route.id === t) + 1) : [...e])
      .reverse()
      .find((i) => i.route.hasErrorBoundary === !0) || e[0]
  );
}
function Mv(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((a) => a.index || !a.path || a.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function Hn(
  e,
  { pathname: t, routeId: a, method: i, type: o, message: u } = {}
) {
  let c = "Unknown Server Error",
    d = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((c = "Bad Request"),
        i && t && a
          ? (d = `You made a ${i} request to "${t}" but did not provide a \`loader\` for route "${a}", so there is no way to handle the request.`)
          : o === "invalid-body" && (d = "Unable to encode submission body"))
      : e === 403
      ? ((c = "Forbidden"), (d = `Route "${a}" does not match URL "${t}"`))
      : e === 404
      ? ((c = "Not Found"), (d = `No route matches URL "${t}"`))
      : e === 405 &&
        ((c = "Method Not Allowed"),
        i && t && a
          ? (d = `You made a ${i.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${a}", so there is no way to handle the request.`)
          : i && (d = `Invalid request method "${i.toUpperCase()}"`)),
    new fc(e || 500, c, new Error(d), !0)
  );
}
function Bu(e) {
  let t = Object.entries(e);
  for (let a = t.length - 1; a >= 0; a--) {
    let [i, o] = t[a];
    if (li(o)) return { key: i, result: o };
  }
}
function iS(e) {
  let t = typeof e == "string" ? Da(e) : e;
  return _a({ ...t, hash: "" });
}
function gC(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function yC(e) {
  return sS(e.result) && tC.has(e.result.status);
}
function yn(e) {
  return e.type === "error";
}
function li(e) {
  return (e && e.type) === "redirect";
}
function kv(e) {
  return (
    typeof e == "object" &&
    e != null &&
    "type" in e &&
    "data" in e &&
    "init" in e &&
    e.type === "DataWithResponseInit"
  );
}
function sS(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function vC(e) {
  return eC.has(e.toUpperCase());
}
function Jn(e) {
  return WE.has(e.toUpperCase());
}
function Lm(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Vo(e, t) {
  let a = typeof t == "string" ? Da(t).search : t.search;
  if (e[e.length - 1].route.index && Lm(a || "")) return e[e.length - 1];
  let i = eS(e);
  return i[i.length - 1];
}
function Lv(e) {
  let {
    formMethod: t,
    formAction: a,
    formEncType: i,
    text: o,
    formData: u,
    json: c,
  } = e;
  if (!(!t || !a || !i)) {
    if (o != null)
      return {
        formMethod: t,
        formAction: a,
        formEncType: i,
        formData: void 0,
        json: void 0,
        text: o,
      };
    if (u != null)
      return {
        formMethod: t,
        formAction: a,
        formEncType: i,
        formData: u,
        json: void 0,
        text: void 0,
      };
    if (c !== void 0)
      return {
        formMethod: t,
        formAction: a,
        formEncType: i,
        formData: void 0,
        json: c,
        text: void 0,
      };
  }
}
function yh(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function bC(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Do(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function SC(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Ta(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function xC(e, t) {
  try {
    let a = e.sessionStorage.getItem(nS);
    if (a) {
      let i = JSON.parse(a);
      for (let [o, u] of Object.entries(i || {}))
        u && Array.isArray(u) && t.set(o, new Set(u || []));
    }
  } catch {}
}
function wC(e, t) {
  if (t.size > 0) {
    let a = {};
    for (let [i, o] of t) a[i] = [...o];
    try {
      e.sessionStorage.setItem(nS, JSON.stringify(a));
    } catch (i) {
      Pt(
        !1,
        `Failed to save applied view transitions in sessionStorage (${i}).`
      );
    }
  }
}
function TC() {
  let e,
    t,
    a = new Promise((i, o) => {
      (e = async (u) => {
        i(u);
        try {
          await a;
        } catch {}
      }),
        (t = async (u) => {
          o(u);
          try {
            await a;
          } catch {}
        });
    });
  return { promise: a, resolve: e, reject: t };
}
var gi = R.createContext(null);
gi.displayName = "DataRouter";
var cl = R.createContext(null);
cl.displayName = "DataRouterState";
var Bm = R.createContext({ isTransitioning: !1 });
Bm.displayName = "ViewTransition";
var oS = R.createContext(new Map());
oS.displayName = "Fetchers";
var EC = R.createContext(null);
EC.displayName = "Await";
var rr = R.createContext(null);
rr.displayName = "Navigation";
var Ac = R.createContext(null);
Ac.displayName = "Location";
var Fn = R.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Fn.displayName = "Route";
var Um = R.createContext(null);
Um.displayName = "RouteError";
function CC(e, { relative: t } = {}) {
  ze(
    ws(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: a, navigator: i } = R.useContext(rr),
    { hash: o, pathname: u, search: c } = fl(e, { relative: t }),
    d = u;
  return (
    a !== "/" && (d = u === "/" ? a : vr([a, u])),
    i.createHref({ pathname: d, search: c, hash: o })
  );
}
function ws() {
  return R.useContext(Ac) != null;
}
function Ir() {
  return (
    ze(
      ws(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    R.useContext(Ac).location
  );
}
var lS =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function uS(e) {
  R.useContext(rr).static || R.useLayoutEffect(e);
}
function Wr() {
  let { isDataRoute: e } = R.useContext(Fn);
  return e ? jC() : AC();
}
function AC() {
  ze(
    ws(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let e = R.useContext(gi),
    { basename: t, navigator: a } = R.useContext(rr),
    { matches: i } = R.useContext(Fn),
    { pathname: o } = Ir(),
    u = JSON.stringify(Ec(i)),
    c = R.useRef(!1);
  return (
    uS(() => {
      c.current = !0;
    }),
    R.useCallback(
      (h, m = {}) => {
        if ((Pt(c.current, lS), !c.current)) return;
        if (typeof h == "number") {
          a.go(h);
          return;
        }
        let g = Cc(h, JSON.parse(u), o, m.relative === "path");
        e == null &&
          t !== "/" &&
          (g.pathname = g.pathname === "/" ? t : vr([t, g.pathname])),
          (m.replace ? a.replace : a.push)(g, m.state, m);
      },
      [t, a, u, o, e]
    )
  );
}
var _C = R.createContext(null);
function RC(e) {
  let t = R.useContext(Fn).outlet;
  return t && R.createElement(_C.Provider, { value: e }, t);
}
function _c() {
  let { matches: e } = R.useContext(Fn),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function fl(e, { relative: t } = {}) {
  let { matches: a } = R.useContext(Fn),
    { pathname: i } = Ir(),
    o = JSON.stringify(Ec(a));
  return R.useMemo(() => Cc(e, JSON.parse(o), i, t === "path"), [e, o, i, t]);
}
function OC(e, t, a, i) {
  ze(
    ws(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: o, static: u } = R.useContext(rr),
    { matches: c } = R.useContext(Fn),
    d = c[c.length - 1],
    h = d ? d.params : {},
    m = d ? d.pathname : "/",
    g = d ? d.pathnameBase : "/",
    y = d && d.route;
  {
    let O = (y && y.path) || "";
    cS(
      m,
      !y || O.endsWith("*") || O.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${O}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${O}"> to <Route path="${
        O === "/" ? "*" : `${O}/*`
      }">.`
    );
  }
  let b = Ir(),
    x;
  x = b;
  let w = x.pathname || "/",
    S = w;
  if (g !== "/") {
    let O = g.replace(/^\//, "").split("/");
    S = "/" + w.replace(/^\//, "").split("/").slice(O.length).join("/");
  }
  let A =
    !u && a && a.matches && a.matches.length > 0
      ? a.matches
      : Ca(e, { pathname: S });
  return (
    Pt(
      y || A != null,
      `No routes matched location "${x.pathname}${x.search}${x.hash}" `
    ),
    Pt(
      A == null ||
        A[A.length - 1].route.element !== void 0 ||
        A[A.length - 1].route.Component !== void 0 ||
        A[A.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ),
    LC(
      A &&
        A.map((O) =>
          Object.assign({}, O, {
            params: Object.assign({}, h, O.params),
            pathname: vr([
              g,
              o.encodeLocation
                ? o.encodeLocation(O.pathname).pathname
                : O.pathname,
            ]),
            pathnameBase:
              O.pathnameBase === "/"
                ? g
                : vr([
                    g,
                    o.encodeLocation
                      ? o.encodeLocation(O.pathnameBase).pathname
                      : O.pathnameBase,
                  ]),
          })
        ),
      c,
      a,
      i
    )
  );
}
function NC() {
  let e = VC(),
    t = Zo(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    a = e instanceof Error ? e.stack : null,
    i = "rgba(200,200,200, 0.5)",
    o = { padding: "0.5rem", backgroundColor: i },
    u = { padding: "2px 4px", backgroundColor: i },
    c = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", e),
    (c = R.createElement(
      R.Fragment,
      null,
      R.createElement("p", null, "💿 Hey developer 👋"),
      R.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        R.createElement("code", { style: u }, "ErrorBoundary"),
        " or",
        " ",
        R.createElement("code", { style: u }, "errorElement"),
        " prop on your route."
      )
    )),
    R.createElement(
      R.Fragment,
      null,
      R.createElement("h2", null, "Unexpected Application Error!"),
      R.createElement("h3", { style: { fontStyle: "italic" } }, t),
      a ? R.createElement("pre", { style: o }, a) : null,
      c
    )
  );
}
var DC = R.createElement(NC, null),
  MC = class extends R.Component {
    constructor(e) {
      super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        (t.revalidation !== "idle" && e.revalidation === "idle")
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error !== void 0 ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      console.error(
        "React Router caught the following error during render",
        e,
        t
      );
    }
    render() {
      return this.state.error !== void 0
        ? R.createElement(
            Fn.Provider,
            { value: this.props.routeContext },
            R.createElement(Um.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function kC({ routeContext: e, match: t, children: a }) {
  let i = R.useContext(gi);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = t.route.id),
    R.createElement(Fn.Provider, { value: e }, a)
  );
}
function LC(e, t = [], a = null, i = null) {
  if (e == null) {
    if (!a) return null;
    if (a.errors) e = a.matches;
    else if (t.length === 0 && !a.initialized && a.matches.length > 0)
      e = a.matches;
    else return null;
  }
  let o = e,
    u = a == null ? void 0 : a.errors;
  if (u != null) {
    let h = o.findIndex(
      (m) => m.route.id && (u == null ? void 0 : u[m.route.id]) !== void 0
    );
    ze(
      h >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        u
      ).join(",")}`
    ),
      (o = o.slice(0, Math.min(o.length, h + 1)));
  }
  let c = !1,
    d = -1;
  if (a)
    for (let h = 0; h < o.length; h++) {
      let m = o[h];
      if (
        ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (d = h),
        m.route.id)
      ) {
        let { loaderData: g, errors: y } = a,
          b =
            m.route.loader &&
            !g.hasOwnProperty(m.route.id) &&
            (!y || y[m.route.id] === void 0);
        if (m.route.lazy || b) {
          (c = !0), d >= 0 ? (o = o.slice(0, d + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((h, m, g) => {
    let y,
      b = !1,
      x = null,
      w = null;
    a &&
      ((y = u && m.route.id ? u[m.route.id] : void 0),
      (x = m.route.errorElement || DC),
      c &&
        (d < 0 && g === 0
          ? (cS(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (b = !0),
            (w = null))
          : d === g &&
            ((b = !0), (w = m.route.hydrateFallbackElement || null))));
    let S = t.concat(o.slice(0, g + 1)),
      A = () => {
        let C;
        return (
          y
            ? (C = x)
            : b
            ? (C = w)
            : m.route.Component
            ? (C = R.createElement(m.route.Component, null))
            : m.route.element
            ? (C = m.route.element)
            : (C = h),
          R.createElement(kC, {
            match: m,
            routeContext: { outlet: h, matches: S, isDataRoute: a != null },
            children: C,
          })
        );
      };
    return a && (m.route.ErrorBoundary || m.route.errorElement || g === 0)
      ? R.createElement(MC, {
          location: a.location,
          revalidation: a.revalidation,
          component: x,
          error: y,
          children: A(),
          routeContext: { outlet: null, matches: S, isDataRoute: !0 },
        })
      : A();
  }, null);
}
function zm(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function BC(e) {
  let t = R.useContext(gi);
  return ze(t, zm(e)), t;
}
function UC(e) {
  let t = R.useContext(cl);
  return ze(t, zm(e)), t;
}
function zC(e) {
  let t = R.useContext(Fn);
  return ze(t, zm(e)), t;
}
function Pm(e) {
  let t = zC(e),
    a = t.matches[t.matches.length - 1];
  return (
    ze(
      a.route.id,
      `${e} can only be used on routes that contain a unique "id"`
    ),
    a.route.id
  );
}
function PC() {
  return Pm("useRouteId");
}
function VC() {
  var i;
  let e = R.useContext(Um),
    t = UC("useRouteError"),
    a = Pm("useRouteError");
  return e !== void 0 ? e : (i = t.errors) == null ? void 0 : i[a];
}
function jC() {
  let { router: e } = BC("useNavigate"),
    t = Pm("useNavigate"),
    a = R.useRef(!1);
  return (
    uS(() => {
      a.current = !0;
    }),
    R.useCallback(
      async (o, u = {}) => {
        Pt(a.current, lS),
          a.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : await e.navigate(o, { fromRouteId: t, ...u }));
      },
      [e, t]
    )
  );
}
var Bv = {};
function cS(e, t, a) {
  !t && !Bv[e] && ((Bv[e] = !0), Pt(!1, a));
}
var Uv = {};
function zv(e, t) {
  !e && !Uv[t] && ((Uv[t] = !0), console.warn(t));
}
function HC(e) {
  let t = {
    hasErrorBoundary:
      e.hasErrorBoundary || e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      (e.element &&
        Pt(
          !1,
          "You should not include both `Component` and `element` on your route - `Component` will be used."
        ),
      Object.assign(t, {
        element: R.createElement(e.Component),
        Component: void 0,
      })),
    e.HydrateFallback &&
      (e.hydrateFallbackElement &&
        Pt(
          !1,
          "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."
        ),
      Object.assign(t, {
        hydrateFallbackElement: R.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      })),
    e.ErrorBoundary &&
      (e.errorElement &&
        Pt(
          !1,
          "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."
        ),
      Object.assign(t, {
        errorElement: R.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      })),
    t
  );
}
var qC = class {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((e, t) => {
        (this.resolve = (a) => {
          this.status === "pending" && ((this.status = "resolved"), e(a));
        }),
          (this.reject = (a) => {
            this.status === "pending" && ((this.status = "rejected"), t(a));
          });
      }));
  }
};
function $C({ router: e, flushSync: t }) {
  let [a, i] = R.useState(e.state),
    [o, u] = R.useState(),
    [c, d] = R.useState({ isTransitioning: !1 }),
    [h, m] = R.useState(),
    [g, y] = R.useState(),
    [b, x] = R.useState(),
    w = R.useRef(new Map()),
    S = R.useCallback(
      (M, { deletedFetchers: P, flushSync: B, viewTransitionOpts: N }) => {
        M.fetchers.forEach((X, Y) => {
          X.data !== void 0 && w.current.set(Y, X.data);
        }),
          P.forEach((X) => w.current.delete(X)),
          zv(
            B === !1 || t != null,
            'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
          );
        let q =
          e.window != null &&
          e.window.document != null &&
          typeof e.window.document.startViewTransition == "function";
        if (
          (zv(
            N == null || q,
            "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."
          ),
          !N || !q)
        ) {
          t && B ? t(() => i(M)) : R.startTransition(() => i(M));
          return;
        }
        if (t && B) {
          t(() => {
            g && (h && h.resolve(), g.skipTransition()),
              d({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: N.currentLocation,
                nextLocation: N.nextLocation,
              });
          });
          let X = e.window.document.startViewTransition(() => {
            t(() => i(M));
          });
          X.finished.finally(() => {
            t(() => {
              m(void 0), y(void 0), u(void 0), d({ isTransitioning: !1 });
            });
          }),
            t(() => y(X));
          return;
        }
        g
          ? (h && h.resolve(),
            g.skipTransition(),
            x({
              state: M,
              currentLocation: N.currentLocation,
              nextLocation: N.nextLocation,
            }))
          : (u(M),
            d({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: N.currentLocation,
              nextLocation: N.nextLocation,
            }));
      },
      [e.window, t, g, h]
    );
  R.useLayoutEffect(() => e.subscribe(S), [e, S]),
    R.useEffect(() => {
      c.isTransitioning && !c.flushSync && m(new qC());
    }, [c]),
    R.useEffect(() => {
      if (h && o && e.window) {
        let M = o,
          P = h.promise,
          B = e.window.document.startViewTransition(async () => {
            R.startTransition(() => i(M)), await P;
          });
        B.finished.finally(() => {
          m(void 0), y(void 0), u(void 0), d({ isTransitioning: !1 });
        }),
          y(B);
      }
    }, [o, h, e.window]),
    R.useEffect(() => {
      h && o && a.location.key === o.location.key && h.resolve();
    }, [h, g, a.location, o]),
    R.useEffect(() => {
      !c.isTransitioning &&
        b &&
        (u(b.state),
        d({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: b.currentLocation,
          nextLocation: b.nextLocation,
        }),
        x(void 0));
    }, [c.isTransitioning, b]);
  let A = R.useMemo(
      () => ({
        createHref: e.createHref,
        encodeLocation: e.encodeLocation,
        go: (M) => e.navigate(M),
        push: (M, P, B) =>
          e.navigate(M, {
            state: P,
            preventScrollReset: B == null ? void 0 : B.preventScrollReset,
          }),
        replace: (M, P, B) =>
          e.navigate(M, {
            replace: !0,
            state: P,
            preventScrollReset: B == null ? void 0 : B.preventScrollReset,
          }),
      }),
      [e]
    ),
    C = e.basename || "/",
    O = R.useMemo(
      () => ({ router: e, navigator: A, static: !1, basename: C }),
      [e, A, C]
    );
  return R.createElement(
    R.Fragment,
    null,
    R.createElement(
      gi.Provider,
      { value: O },
      R.createElement(
        cl.Provider,
        { value: a },
        R.createElement(
          oS.Provider,
          { value: w.current },
          R.createElement(
            Bm.Provider,
            { value: c },
            R.createElement(
              XC,
              {
                basename: C,
                location: a.location,
                navigationType: a.historyAction,
                navigator: A,
              },
              R.createElement(FC, {
                routes: e.routes,
                future: e.future,
                state: a,
              })
            )
          )
        )
      )
    ),
    null
  );
}
var FC = R.memo(YC);
function YC({ routes: e, future: t, state: a }) {
  return OC(e, void 0, a, t);
}
function GC({ to: e, replace: t, state: a, relative: i }) {
  ze(
    ws(),
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: o } = R.useContext(rr);
  Pt(
    !o,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: u } = R.useContext(Fn),
    { pathname: c } = Ir(),
    d = Wr(),
    h = Cc(e, Ec(u), c, i === "path"),
    m = JSON.stringify(h);
  return (
    R.useEffect(() => {
      d(JSON.parse(m), { replace: t, state: a, relative: i });
    }, [d, m, i, t, a]),
    null
  );
}
function KC(e) {
  return RC(e.context);
}
function XC({
  basename: e = "/",
  children: t = null,
  location: a,
  navigationType: i = "POP",
  navigator: o,
  static: u = !1,
}) {
  ze(
    !ws(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let c = e.replace(/^\/*/, "/"),
    d = R.useMemo(
      () => ({ basename: c, navigator: o, static: u, future: {} }),
      [c, o, u]
    );
  typeof a == "string" && (a = Da(a));
  let {
      pathname: h = "/",
      search: m = "",
      hash: g = "",
      state: y = null,
      key: b = "default",
    } = a,
    x = R.useMemo(() => {
      let w = nr(h, c);
      return w == null
        ? null
        : {
            location: { pathname: w, search: m, hash: g, state: y, key: b },
            navigationType: i,
          };
    }, [c, h, m, g, y, b, i]);
  return (
    Pt(
      x != null,
      `<Router basename="${c}"> is not able to match the URL "${h}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    x == null
      ? null
      : R.createElement(
          rr.Provider,
          { value: d },
          R.createElement(Ac.Provider, { children: t, value: x })
        )
  );
}
var Gu = "get",
  Ku = "application/x-www-form-urlencoded";
function Rc(e) {
  return e != null && typeof e.tagName == "string";
}
function QC(e) {
  return Rc(e) && e.tagName.toLowerCase() === "button";
}
function ZC(e) {
  return Rc(e) && e.tagName.toLowerCase() === "form";
}
function IC(e) {
  return Rc(e) && e.tagName.toLowerCase() === "input";
}
function WC(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function JC(e, t) {
  return e.button === 0 && (!t || t === "_self") && !WC(e);
}
var Uu = null;
function eA() {
  if (Uu === null)
    try {
      new FormData(document.createElement("form"), 0), (Uu = !1);
    } catch {
      Uu = !0;
    }
  return Uu;
}
var tA = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function vh(e) {
  return e != null && !tA.has(e)
    ? (Pt(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ku}"`
      ),
      null)
    : e;
}
function nA(e, t) {
  let a, i, o, u, c;
  if (ZC(e)) {
    let d = e.getAttribute("action");
    (i = d ? nr(d, t) : null),
      (a = e.getAttribute("method") || Gu),
      (o = vh(e.getAttribute("enctype")) || Ku),
      (u = new FormData(e));
  } else if (QC(e) || (IC(e) && (e.type === "submit" || e.type === "image"))) {
    let d = e.form;
    if (d == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let h = e.getAttribute("formaction") || d.getAttribute("action");
    if (
      ((i = h ? nr(h, t) : null),
      (a = e.getAttribute("formmethod") || d.getAttribute("method") || Gu),
      (o =
        vh(e.getAttribute("formenctype")) ||
        vh(d.getAttribute("enctype")) ||
        Ku),
      (u = new FormData(d, e)),
      !eA())
    ) {
      let { name: m, type: g, value: y } = e;
      if (g === "image") {
        let b = m ? `${m}.` : "";
        u.append(`${b}x`, "0"), u.append(`${b}y`, "0");
      } else m && u.append(m, y);
    }
  } else {
    if (Rc(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (a = Gu), (i = null), (o = Ku), (c = e);
  }
  return (
    u && o === "text/plain" && ((c = u), (u = void 0)),
    { action: i, method: a.toLowerCase(), encType: o, formData: u, body: c }
  );
}
function Vm(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
async function rA(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let a = await import(e.module);
    return (t[e.id] = a), a;
  } catch (a) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`
      ),
      console.error(a),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function aA(e) {
  return e == null
    ? !1
    : e.href == null
    ? e.rel === "preload" &&
      typeof e.imageSrcSet == "string" &&
      typeof e.imageSizes == "string"
    : typeof e.rel == "string" && typeof e.href == "string";
}
async function iA(e, t, a) {
  let i = await Promise.all(
    e.map(async (o) => {
      let u = t.routes[o.route.id];
      if (u) {
        let c = await rA(u, a);
        return c.links ? c.links() : [];
      }
      return [];
    })
  );
  return uA(
    i
      .flat(1)
      .filter(aA)
      .filter((o) => o.rel === "stylesheet" || o.rel === "preload")
      .map((o) =>
        o.rel === "stylesheet"
          ? { ...o, rel: "prefetch", as: "style" }
          : { ...o, rel: "prefetch" }
      )
  );
}
function Pv(e, t, a, i, o, u) {
  let c = (h, m) => (a[m] ? h.route.id !== a[m].route.id : !0),
    d = (h, m) => {
      var g;
      return (
        a[m].pathname !== h.pathname ||
        (((g = a[m].route.path) == null ? void 0 : g.endsWith("*")) &&
          a[m].params["*"] !== h.params["*"])
      );
    };
  return u === "assets"
    ? t.filter((h, m) => c(h, m) || d(h, m))
    : u === "data"
    ? t.filter((h, m) => {
        var y;
        let g = i.routes[h.route.id];
        if (!g || !g.hasLoader) return !1;
        if (c(h, m) || d(h, m)) return !0;
        if (h.route.shouldRevalidate) {
          let b = h.route.shouldRevalidate({
            currentUrl: new URL(o.pathname + o.search + o.hash, window.origin),
            currentParams: ((y = a[0]) == null ? void 0 : y.params) || {},
            nextUrl: new URL(e, window.origin),
            nextParams: h.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof b == "boolean") return b;
        }
        return !0;
      })
    : [];
}
function sA(e, t, { includeHydrateFallback: a } = {}) {
  return oA(
    e
      .map((i) => {
        let o = t.routes[i.route.id];
        if (!o) return [];
        let u = [o.module];
        return (
          o.clientActionModule && (u = u.concat(o.clientActionModule)),
          o.clientLoaderModule && (u = u.concat(o.clientLoaderModule)),
          a &&
            o.hydrateFallbackModule &&
            (u = u.concat(o.hydrateFallbackModule)),
          o.imports && (u = u.concat(o.imports)),
          u
        );
      })
      .flat(1)
  );
}
function oA(e) {
  return [...new Set(e)];
}
function lA(e) {
  let t = {},
    a = Object.keys(e).sort();
  for (let i of a) t[i] = e[i];
  return t;
}
function uA(e, t) {
  let a = new Set();
  return (
    new Set(t),
    e.reduce((i, o) => {
      let u = JSON.stringify(lA(o));
      return a.has(u) || (a.add(u), i.push({ key: u, link: o })), i;
    }, [])
  );
}
function cA(e) {
  let t =
    typeof e == "string"
      ? new URL(
          e,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : e;
  return (
    t.pathname === "/"
      ? (t.pathname = "_root.data")
      : (t.pathname = `${t.pathname.replace(/\/$/, "")}.data`),
    t
  );
}
function fA() {
  let e = R.useContext(gi);
  return (
    Vm(
      e,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    e
  );
}
function dA() {
  let e = R.useContext(cl);
  return (
    Vm(
      e,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    e
  );
}
var jm = R.createContext(void 0);
jm.displayName = "FrameworkContext";
function fS() {
  let e = R.useContext(jm);
  return (
    Vm(e, "You must render this element inside a <HydratedRouter> element"), e
  );
}
function hA(e, t) {
  let a = R.useContext(jm),
    [i, o] = R.useState(!1),
    [u, c] = R.useState(!1),
    {
      onFocus: d,
      onBlur: h,
      onMouseEnter: m,
      onMouseLeave: g,
      onTouchStart: y,
    } = t,
    b = R.useRef(null);
  R.useEffect(() => {
    if ((e === "render" && c(!0), e === "viewport")) {
      let S = (C) => {
          C.forEach((O) => {
            c(O.isIntersecting);
          });
        },
        A = new IntersectionObserver(S, { threshold: 0.5 });
      return (
        b.current && A.observe(b.current),
        () => {
          A.disconnect();
        }
      );
    }
  }, [e]),
    R.useEffect(() => {
      if (i) {
        let S = setTimeout(() => {
          c(!0);
        }, 100);
        return () => {
          clearTimeout(S);
        };
      }
    }, [i]);
  let x = () => {
      o(!0);
    },
    w = () => {
      o(!1), c(!1);
    };
  return a
    ? e !== "intent"
      ? [u, b, {}]
      : [
          u,
          b,
          {
            onFocus: Mo(d, x),
            onBlur: Mo(h, w),
            onMouseEnter: Mo(m, x),
            onMouseLeave: Mo(g, w),
            onTouchStart: Mo(y, x),
          },
        ]
    : [!1, b, {}];
}
function Mo(e, t) {
  return (a) => {
    e && e(a), a.defaultPrevented || t(a);
  };
}
function mA({ page: e, ...t }) {
  let { router: a } = fA(),
    i = R.useMemo(() => Ca(a.routes, e, a.basename), [a.routes, e, a.basename]);
  return i ? R.createElement(gA, { page: e, matches: i, ...t }) : null;
}
function pA(e) {
  let { manifest: t, routeModules: a } = fS(),
    [i, o] = R.useState([]);
  return (
    R.useEffect(() => {
      let u = !1;
      return (
        iA(e, t, a).then((c) => {
          u || o(c);
        }),
        () => {
          u = !0;
        }
      );
    }, [e, t, a]),
    i
  );
}
function gA({ page: e, matches: t, ...a }) {
  let i = Ir(),
    { manifest: o, routeModules: u } = fS(),
    { loaderData: c, matches: d } = dA(),
    h = R.useMemo(() => Pv(e, t, d, o, i, "data"), [e, t, d, o, i]),
    m = R.useMemo(() => Pv(e, t, d, o, i, "assets"), [e, t, d, o, i]),
    g = R.useMemo(() => {
      if (e === i.pathname + i.search + i.hash) return [];
      let x = new Set(),
        w = !1;
      if (
        (t.forEach((A) => {
          var O;
          let C = o.routes[A.route.id];
          !C ||
            !C.hasLoader ||
            ((!h.some((M) => M.route.id === A.route.id) &&
              A.route.id in c &&
              (O = u[A.route.id]) != null &&
              O.shouldRevalidate) ||
            C.hasClientLoader
              ? (w = !0)
              : x.add(A.route.id));
        }),
        x.size === 0)
      )
        return [];
      let S = cA(e);
      return (
        w &&
          x.size > 0 &&
          S.searchParams.set(
            "_routes",
            t
              .filter((A) => x.has(A.route.id))
              .map((A) => A.route.id)
              .join(",")
          ),
        [S.pathname + S.search]
      );
    }, [c, i, o, h, t, e, u]),
    y = R.useMemo(() => sA(m, o), [m, o]),
    b = pA(m);
  return R.createElement(
    R.Fragment,
    null,
    g.map((x) =>
      R.createElement("link", {
        key: x,
        rel: "prefetch",
        as: "fetch",
        href: x,
        ...a,
      })
    ),
    y.map((x) =>
      R.createElement("link", { key: x, rel: "modulepreload", href: x, ...a })
    ),
    b.map(({ key: x, link: w }) => R.createElement("link", { key: x, ...w }))
  );
}
function yA(...e) {
  return (t) => {
    e.forEach((a) => {
      typeof a == "function" ? a(t) : a != null && (a.current = t);
    });
  };
}
var dS =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  dS && (window.__reactRouterVersion = "7.2.0");
} catch {}
function vA(e, t) {
  return iC({
    basename: t == null ? void 0 : t.basename,
    future: t == null ? void 0 : t.future,
    history: OE({ window: t == null ? void 0 : t.window }),
    hydrationData: bA(),
    routes: e,
    mapRouteProperties: HC,
    dataStrategy: t == null ? void 0 : t.dataStrategy,
    patchRoutesOnNavigation: t == null ? void 0 : t.patchRoutesOnNavigation,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function bA() {
  let e = window == null ? void 0 : window.__staticRouterHydrationData;
  return e && e.errors && (e = { ...e, errors: SA(e.errors) }), e;
}
function SA(e) {
  if (!e) return null;
  let t = Object.entries(e),
    a = {};
  for (let [i, o] of t)
    if (o && o.__type === "RouteErrorResponse")
      a[i] = new fc(o.status, o.statusText, o.data, o.internal === !0);
    else if (o && o.__type === "Error") {
      if (o.__subType) {
        let u = window[o.__subType];
        if (typeof u == "function")
          try {
            let c = new u(o.message);
            (c.stack = ""), (a[i] = c);
          } catch {}
      }
      if (a[i] == null) {
        let u = new Error(o.message);
        (u.stack = ""), (a[i] = u);
      }
    } else a[i] = o;
  return a;
}
var hS = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  mS = R.forwardRef(function (
    {
      onClick: t,
      discover: a = "render",
      prefetch: i = "none",
      relative: o,
      reloadDocument: u,
      replace: c,
      state: d,
      target: h,
      to: m,
      preventScrollReset: g,
      viewTransition: y,
      ...b
    },
    x
  ) {
    let { basename: w } = R.useContext(rr),
      S = typeof m == "string" && hS.test(m),
      A,
      C = !1;
    if (typeof m == "string" && S && ((A = m), dS))
      try {
        let Y = new URL(window.location.href),
          E = m.startsWith("//") ? new URL(Y.protocol + m) : new URL(m),
          J = nr(E.pathname, w);
        E.origin === Y.origin && J != null
          ? (m = J + E.search + E.hash)
          : (C = !0);
      } catch {
        Pt(
          !1,
          `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let O = CC(m, { relative: o }),
      [M, P, B] = hA(i, b),
      N = EA(m, {
        replace: c,
        state: d,
        target: h,
        preventScrollReset: g,
        relative: o,
        viewTransition: y,
      });
    function q(Y) {
      t && t(Y), Y.defaultPrevented || N(Y);
    }
    let X = R.createElement("a", {
      ...b,
      ...B,
      href: A || O,
      onClick: C || u ? t : q,
      ref: yA(x, P),
      target: h,
      "data-discover": !S && a === "render" ? "true" : void 0,
    });
    return M && !S
      ? R.createElement(R.Fragment, null, X, R.createElement(mA, { page: O }))
      : X;
  });
mS.displayName = "Link";
var xA = R.forwardRef(function (
  {
    "aria-current": t = "page",
    caseSensitive: a = !1,
    className: i = "",
    end: o = !1,
    style: u,
    to: c,
    viewTransition: d,
    children: h,
    ...m
  },
  g
) {
  let y = fl(c, { relative: m.relative }),
    b = Ir(),
    x = R.useContext(cl),
    { navigator: w, basename: S } = R.useContext(rr),
    A = x != null && OA(y) && d === !0,
    C = w.encodeLocation ? w.encodeLocation(y).pathname : y.pathname,
    O = b.pathname,
    M =
      x && x.navigation && x.navigation.location
        ? x.navigation.location.pathname
        : null;
  a ||
    ((O = O.toLowerCase()),
    (M = M ? M.toLowerCase() : null),
    (C = C.toLowerCase())),
    M && S && (M = nr(M, S) || M);
  const P = C !== "/" && C.endsWith("/") ? C.length - 1 : C.length;
  let B = O === C || (!o && O.startsWith(C) && O.charAt(P) === "/"),
    N =
      M != null &&
      (M === C || (!o && M.startsWith(C) && M.charAt(C.length) === "/")),
    q = { isActive: B, isPending: N, isTransitioning: A },
    X = B ? t : void 0,
    Y;
  typeof i == "function"
    ? (Y = i(q))
    : (Y = [
        i,
        B ? "active" : null,
        N ? "pending" : null,
        A ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let E = typeof u == "function" ? u(q) : u;
  return R.createElement(
    mS,
    {
      ...m,
      "aria-current": X,
      className: Y,
      ref: g,
      style: E,
      to: c,
      viewTransition: d,
    },
    typeof h == "function" ? h(q) : h
  );
});
xA.displayName = "NavLink";
var wA = R.forwardRef(
  (
    {
      discover: e = "render",
      fetcherKey: t,
      navigate: a,
      reloadDocument: i,
      replace: o,
      state: u,
      method: c = Gu,
      action: d,
      onSubmit: h,
      relative: m,
      preventScrollReset: g,
      viewTransition: y,
      ...b
    },
    x
  ) => {
    let w = _A(),
      S = RA(d, { relative: m }),
      A = c.toLowerCase() === "get" ? "get" : "post",
      C = typeof d == "string" && hS.test(d),
      O = (M) => {
        if ((h && h(M), M.defaultPrevented)) return;
        M.preventDefault();
        let P = M.nativeEvent.submitter,
          B = (P == null ? void 0 : P.getAttribute("formmethod")) || c;
        w(P || M.currentTarget, {
          fetcherKey: t,
          method: B,
          navigate: a,
          replace: o,
          state: u,
          relative: m,
          preventScrollReset: g,
          viewTransition: y,
        });
      };
    return R.createElement("form", {
      ref: x,
      method: A,
      action: S,
      onSubmit: i ? h : O,
      ...b,
      "data-discover": !C && e === "render" ? "true" : void 0,
    });
  }
);
wA.displayName = "Form";
function TA(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function pS(e) {
  let t = R.useContext(gi);
  return ze(t, TA(e)), t;
}
function EA(
  e,
  {
    target: t,
    replace: a,
    state: i,
    preventScrollReset: o,
    relative: u,
    viewTransition: c,
  } = {}
) {
  let d = Wr(),
    h = Ir(),
    m = fl(e, { relative: u });
  return R.useCallback(
    (g) => {
      if (JC(g, t)) {
        g.preventDefault();
        let y = a !== void 0 ? a : _a(h) === _a(m);
        d(e, {
          replace: y,
          state: i,
          preventScrollReset: o,
          relative: u,
          viewTransition: c,
        });
      }
    },
    [h, d, m, a, i, t, e, o, u, c]
  );
}
var CA = 0,
  AA = () => `__${String(++CA)}__`;
function _A() {
  let { router: e } = pS("useSubmit"),
    { basename: t } = R.useContext(rr),
    a = PC();
  return R.useCallback(
    async (i, o = {}) => {
      let { action: u, method: c, encType: d, formData: h, body: m } = nA(i, t);
      if (o.navigate === !1) {
        let g = o.fetcherKey || AA();
        await e.fetch(g, a, o.action || u, {
          preventScrollReset: o.preventScrollReset,
          formData: h,
          body: m,
          formMethod: o.method || c,
          formEncType: o.encType || d,
          flushSync: o.flushSync,
        });
      } else
        await e.navigate(o.action || u, {
          preventScrollReset: o.preventScrollReset,
          formData: h,
          body: m,
          formMethod: o.method || c,
          formEncType: o.encType || d,
          replace: o.replace,
          state: o.state,
          fromRouteId: a,
          flushSync: o.flushSync,
          viewTransition: o.viewTransition,
        });
    },
    [e, t, a]
  );
}
function RA(e, { relative: t } = {}) {
  let { basename: a } = R.useContext(rr),
    i = R.useContext(Fn);
  ze(i, "useFormAction must be used inside a RouteContext");
  let [o] = i.matches.slice(-1),
    u = { ...fl(e || ".", { relative: t }) },
    c = Ir();
  if (e == null) {
    u.search = c.search;
    let d = new URLSearchParams(u.search),
      h = d.getAll("index");
    if (h.some((g) => g === "")) {
      d.delete("index"),
        h.filter((y) => y).forEach((y) => d.append("index", y));
      let g = d.toString();
      u.search = g ? `?${g}` : "";
    }
  }
  return (
    (!e || e === ".") &&
      o.route.index &&
      (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"),
    a !== "/" && (u.pathname = u.pathname === "/" ? a : vr([a, u.pathname])),
    _a(u)
  );
}
function OA(e, t = {}) {
  let a = R.useContext(Bm);
  ze(
    a != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: i } = pS("useViewTransitionState"),
    o = fl(e, { relative: t.relative });
  if (!a.isTransitioning) return !1;
  let u = nr(a.currentLocation.pathname, i) || a.currentLocation.pathname,
    c = nr(a.nextLocation.pathname, i) || a.nextLocation.pathname;
  return cc(o.pathname, c) != null || cc(o.pathname, u) != null;
}
new TextEncoder();
var NA = I1();
/**
 * react-router v7.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function DA(e) {
  return R.createElement($C, { flushSync: NA.flushSync, ...e });
}
var gS = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Vv = Fe.createContext && Fe.createContext(gS),
  MA = ["attr", "size", "title"];
function kA(e, t) {
  if (e == null) return {};
  var a = LA(e, t),
    i,
    o;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(e);
    for (o = 0; o < u.length; o++)
      (i = u[o]),
        !(t.indexOf(i) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, i) &&
          (a[i] = e[i]);
  }
  return a;
}
function LA(e, t) {
  if (e == null) return {};
  var a = {};
  for (var i in e)
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      if (t.indexOf(i) >= 0) continue;
      a[i] = e[i];
    }
  return a;
}
function dc() {
  return (
    (dc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var i in a)
              Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
          }
          return e;
        }),
    dc.apply(this, arguments)
  );
}
function jv(e, t) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t &&
      (i = i.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      a.push.apply(a, i);
  }
  return a;
}
function hc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? jv(Object(a), !0).forEach(function (i) {
          BA(e, i, a[i]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
      : jv(Object(a)).forEach(function (i) {
          Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(a, i));
        });
  }
  return e;
}
function BA(e, t, a) {
  return (
    (t = UA(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = a),
    e
  );
}
function UA(e) {
  var t = zA(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function zA(e, t) {
  if (typeof e != "object" || !e) return e;
  var a = e[Symbol.toPrimitive];
  if (a !== void 0) {
    var i = a.call(e, t);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function yS(e) {
  return (
    e &&
    e.map((t, a) =>
      Fe.createElement(t.tag, hc({ key: a }, t.attr), yS(t.child))
    )
  );
}
function Ma(e) {
  return (t) =>
    Fe.createElement(PA, dc({ attr: hc({}, e.attr) }, t), yS(e.child));
}
function PA(e) {
  var t = (a) => {
    var { attr: i, size: o, title: u } = e,
      c = kA(e, MA),
      d = o || a.size || "1em",
      h;
    return (
      a.className && (h = a.className),
      e.className && (h = (h ? h + " " : "") + e.className),
      Fe.createElement(
        "svg",
        dc(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          a.attr,
          i,
          c,
          {
            className: h,
            style: hc(hc({ color: e.color || a.color }, a.style), e.style),
            height: d,
            width: d,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        u && Fe.createElement("title", null, u),
        e.children
      )
    );
  };
  return Vv !== void 0
    ? Fe.createElement(Vv.Consumer, null, (a) => t(a))
    : t(gS);
}
function VA(e) {
  return Ma({
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "line",
        attr: { x1: "3", y1: "12", x2: "21", y2: "12" },
        child: [],
      },
      { tag: "line", attr: { x1: "3", y1: "6", x2: "21", y2: "6" }, child: [] },
      {
        tag: "line",
        attr: { x1: "3", y1: "18", x2: "21", y2: "18" },
        child: [],
      },
    ],
  })(e);
}
function Hv(e) {
  return Ma({
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "line",
        attr: { x1: "18", y1: "6", x2: "6", y2: "18" },
        child: [],
      },
      {
        tag: "line",
        attr: { x1: "6", y1: "6", x2: "18", y2: "18" },
        child: [],
      },
    ],
  })(e);
}
function qv(e) {
  return Ma({
    attr: { viewBox: "0 0 24 24", fill: "none" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z",
          fill: "currentColor",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z",
          fill: "currentColor",
        },
        child: [],
      },
    ],
  })(e);
}
var bh = { exports: {} },
  ko = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $v;
function jA() {
  if ($v) return ko;
  $v = 1;
  var e = Symbol.for("react.transitional.element"),
    t = Symbol.for("react.fragment");
  function a(i, o, u) {
    var c = null;
    if (
      (u !== void 0 && (c = "" + u),
      o.key !== void 0 && (c = "" + o.key),
      "key" in o)
    ) {
      u = {};
      for (var d in o) d !== "key" && (u[d] = o[d]);
    } else u = o;
    return (
      (o = u.ref),
      { $$typeof: e, type: i, key: c, ref: o !== void 0 ? o : null, props: u }
    );
  }
  return (ko.Fragment = t), (ko.jsx = a), (ko.jsxs = a), ko;
}
var Fv;
function HA() {
  return Fv || ((Fv = 1), (bh.exports = jA())), bh.exports;
}
var Hm = HA();
const _ = Hm.jsx,
  K = Hm.jsxs,
  Oc = Hm.Fragment,
  Ts = R.createContext(),
  qA = ({ children: e }) => {
    const [t, a] = R.useState(JSON.parse(localStorage.getItem("user")) || null),
      i = (o) => {
        a(o);
      };
    return (
      R.useEffect(() => {
        t && localStorage.setItem("user", JSON.stringify(t));
      }, [t]),
      _(Ts.Provider, { value: { currentUser: t, updateUser: i }, children: e })
    );
  },
  $A = () => {
    const [e, t] = R.useState(!1),
      a = Wr(),
      i = Ir(),
      { currentUser: o } = R.useContext(Ts),
      u = !!o,
      c = () => t(!e),
      d = (m) => {
        a(m), t(!1);
      },
      h = [
        { name: "Home", path: "/" },
        ...(u ? [{ name: "Dashboard", path: "/dashboard" }] : []),
        { name: "Study Material", path: "/study-material" },
        { name: "Books", path: "/books" },
        { name: "About", path: "/about" },
      ];
    return K(Oc, {
      children: [
        K("div", {
          className:
            "flex z-50 items-center justify-between bg-black text-white p-5 relative",
          children: [
            _("h1", {
              className:
                "text-lg font-bold cursor-pointer hover:text-blue-600 transition",
              onClick: () => d("/"),
              children: "EduVed",
            }),
            _("button", {
              onClick: c,
              className: "text-white text-2xl md:hidden",
              children: e ? _(Hv, {}) : _(VA, {}),
            }),
            _("div", {
              className: "hidden md:flex items-center gap-x-6",
              children: h.map((m) =>
                K(
                  "h1",
                  {
                    className: `cursor-pointer px-2 relative transition ${
                      i.pathname === m.path ? "text-blue-600" : ""
                    }`,
                    onClick: () => d(m.path),
                    children: [
                      m.name,
                      i.pathname === m.path &&
                        _("div", {
                          className:
                            "absolute left-0 bottom-0 w-full h-[2px] bg-blue-600",
                        }),
                    ],
                  },
                  m.name
                )
              ),
            }),
            u
              ? K("div", {
                  className: "hidden md:flex items-center gap-x-4",
                  children: [
                    K("div", {
                      className: "flex items-center gap-x-2 cursor-pointer",
                      onClick: () => a("/profile"),
                      children: [
                        _(qv, { className: "h-8 w-8" }),
                        _("span", { children: "Profile" }),
                      ],
                    }),
                    _("button", {
                      className:
                        "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition",
                      onClick: () => a("/chat"),
                      children: "Message",
                    }),
                  ],
                })
              : K("div", {
                  className: "hidden md:flex items-center gap-x-4",
                  children: [
                    _("h1", {
                      className:
                        "cursor-pointer px-4 py-2 border-2 border-white rounded-md transition hover:bg-white hover:text-black",
                      onClick: () => d("/signin"),
                      children: "Sign In",
                    }),
                    _("h1", {
                      className:
                        "cursor-pointer px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md transition hover:scale-105",
                      onClick: () => d("/signup"),
                      children: "Sign Up",
                    }),
                  ],
                }),
          ],
        }),
        K("div", {
          className: `fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform transition-transform ${
            e ? "translate-x-0" : "-translate-x-full"
          } md:hidden z-50 shadow-lg`,
          children: [
            _("button", {
              className: "absolute top-4 right-4 text-white text-2xl",
              onClick: c,
              children: _(Hv, {}),
            }),
            K("div", {
              className: "flex flex-col items-start p-6 gap-y-6 mt-12",
              children: [
                h.map((m) =>
                  _(
                    "h1",
                    {
                      className: `cursor-pointer text-lg w-full ${
                        i.pathname === m.path ? "text-blue-600 font-bold" : ""
                      }`,
                      onClick: () => d(m.path),
                      children: m.name,
                    },
                    m.name
                  )
                ),
                u
                  ? K("div", {
                      className: "flex flex-col gap-y-4 w-full mt-4",
                      children: [
                        K("div", {
                          className: "flex items-center gap-x-4 cursor-pointer",
                          onClick: () => a("/profile"),
                          children: [
                            _(qv, { className: "h-10 w-10" }),
                            _("h1", {
                              className: "text-lg",
                              children: "Profile",
                            }),
                          ],
                        }),
                        _("button", {
                          className:
                            "w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition",
                          onClick: () => d("/message"),
                          children: "Message",
                        }),
                      ],
                    })
                  : K("div", {
                      className: "flex flex-col gap-y-4 w-full mt-4",
                      children: [
                        _("h1", {
                          className:
                            "cursor-pointer px-4 py-2 border-2 border-white rounded-md transition hover:bg-white hover:text-black w-full text-center",
                          onClick: () => d("/signin"),
                          children: "Sign In",
                        }),
                        _("h1", {
                          className:
                            "cursor-pointer px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md transition hover:scale-105 w-full text-center",
                          onClick: () => d("/signup"),
                          children: "Sign Up",
                        }),
                      ],
                    }),
              ],
            }),
          ],
        }),
        e &&
          _("div", {
            className: "fixed inset-0 bg-black bg-opacity-50 z-40",
            onClick: c,
          }),
      ],
    });
  };
function FA(e) {
  return Ma({
    attr: { viewBox: "0 0 320 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z",
        },
        child: [],
      },
    ],
  })(e);
}
function YA(e) {
  return Ma({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
        },
        child: [],
      },
    ],
  })(e);
}
function GA(e) {
  return Ma({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
        },
        child: [],
      },
    ],
  })(e);
}
function KA(e) {
  return Ma({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
        },
        child: [],
      },
    ],
  })(e);
}
function XA(e) {
  return Ma({
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z",
        },
        child: [],
      },
    ],
  })(e);
}
const vS = R.createContext({});
function QA(e) {
  const t = R.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const qm = R.createContext(null),
  bS = R.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
function ZA(e = !0) {
  const t = R.useContext(qm);
  if (t === null) return [!0, null];
  const { isPresent: a, onExitComplete: i, register: o } = t,
    u = R.useId();
  R.useEffect(() => {
    e && o(u);
  }, [e]);
  const c = R.useCallback(() => e && i && i(u), [u, i, e]);
  return !a && i ? [!1, c] : [!0];
}
const $m = typeof window < "u",
  IA = $m ? R.useLayoutEffect : R.useEffect,
  bn = (e) => e;
let SS = bn;
function Fm(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const ps = (e, t, a) => {
    const i = t - e;
    return i === 0 ? 1 : (a - e) / i;
  },
  Gr = (e) => e * 1e3,
  Kr = (e) => e / 1e3,
  WA = { useManualTiming: !1 },
  zu = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  Yv = { value: null };
function JA(e, t) {
  let a = new Set(),
    i = new Set(),
    o = !1,
    u = !1;
  const c = new WeakSet();
  let d = { delta: 0, timestamp: 0, isProcessing: !1 },
    h = 0;
  function m(y) {
    c.has(y) && (g.schedule(y), e()), h++, y(d);
  }
  const g = {
    schedule: (y, b = !1, x = !1) => {
      const S = x && o ? a : i;
      return b && c.add(y), S.has(y) || S.add(y), y;
    },
    cancel: (y) => {
      i.delete(y), c.delete(y);
    },
    process: (y) => {
      if (((d = y), o)) {
        u = !0;
        return;
      }
      (o = !0),
        ([a, i] = [i, a]),
        a.forEach(m),
        t && Yv.value && Yv.value.frameloop[t].push(h),
        (h = 0),
        a.clear(),
        (o = !1),
        u && ((u = !1), g.process(y));
    },
  };
  return g;
}
const e_ = 40;
function xS(e, t) {
  let a = !1,
    i = !0;
  const o = { delta: 0, timestamp: 0, isProcessing: !1 },
    u = () => (a = !0),
    c = zu.reduce((C, O) => ((C[O] = JA(u, t ? O : void 0)), C), {}),
    {
      read: d,
      resolveKeyframes: h,
      update: m,
      preRender: g,
      render: y,
      postRender: b,
    } = c,
    x = () => {
      const C = performance.now();
      (a = !1),
        (o.delta = i ? 1e3 / 60 : Math.max(Math.min(C - o.timestamp, e_), 1)),
        (o.timestamp = C),
        (o.isProcessing = !0),
        d.process(o),
        h.process(o),
        m.process(o),
        g.process(o),
        y.process(o),
        b.process(o),
        (o.isProcessing = !1),
        a && t && ((i = !1), e(x));
    },
    w = () => {
      (a = !0), (i = !0), o.isProcessing || e(x);
    };
  return {
    schedule: zu.reduce((C, O) => {
      const M = c[O];
      return (C[O] = (P, B = !1, N = !1) => (a || w(), M.schedule(P, B, N))), C;
    }, {}),
    cancel: (C) => {
      for (let O = 0; O < zu.length; O++) c[zu[O]].cancel(C);
    },
    state: o,
    steps: c,
  };
}
const {
    schedule: ot,
    cancel: Ra,
    state: Gt,
    steps: Sh,
  } = xS(typeof requestAnimationFrame < "u" ? requestAnimationFrame : bn, !0),
  wS = R.createContext({ strict: !1 }),
  Gv = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  gs = {};
for (const e in Gv) gs[e] = { isEnabled: (t) => Gv[e].some((a) => !!t[a]) };
function t_(e) {
  for (const t in e) gs[t] = { ...gs[t], ...e[t] };
}
const n_ = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function mc(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    n_.has(e)
  );
}
let TS = (e) => !mc(e);
function r_(e) {
  e && (TS = (t) => (t.startsWith("on") ? !mc(t) : e(t)));
}
try {
  r_(require("@emotion/is-prop-valid").default);
} catch {}
function a_(e, t, a) {
  const i = {};
  for (const o in e)
    (o === "values" && typeof e.values == "object") ||
      ((TS(o) ||
        (a === !0 && mc(o)) ||
        (!t && !mc(o)) ||
        (e.draggable && o.startsWith("onDrag"))) &&
        (i[o] = e[o]));
  return i;
}
function i_(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    a = (...i) => e(...i);
  return new Proxy(a, {
    get: (i, o) =>
      o === "create" ? e : (t.has(o) || t.set(o, e(o)), t.get(o)),
  });
}
const Nc = R.createContext({});
function Dc(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function Io(e) {
  return typeof e == "string" || Array.isArray(e);
}
const Ym = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Gm = ["initial", ...Ym];
function Mc(e) {
  return Dc(e.animate) || Gm.some((t) => Io(e[t]));
}
function ES(e) {
  return !!(Mc(e) || e.variants);
}
function s_(e, t) {
  if (Mc(e)) {
    const { initial: a, animate: i } = e;
    return {
      initial: a === !1 || Io(a) ? a : void 0,
      animate: Io(i) ? i : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function o_(e) {
  const { initial: t, animate: a } = s_(e, R.useContext(Nc));
  return R.useMemo(() => ({ initial: t, animate: a }), [Kv(t), Kv(a)]);
}
function Kv(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const l_ = Symbol.for("motionComponentSymbol");
function ss(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function u_(e, t, a) {
  return R.useCallback(
    (i) => {
      i && e.onMount && e.onMount(i),
        t && (i ? t.mount(i) : t.unmount()),
        a && (typeof a == "function" ? a(i) : ss(a) && (a.current = i));
    },
    [t]
  );
}
const Km = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  c_ = "framerAppearId",
  CS = "data-" + Km(c_),
  { schedule: Xm } = xS(queueMicrotask, !1),
  AS = R.createContext({});
function f_(e, t, a, i, o) {
  var u, c;
  const { visualElement: d } = R.useContext(Nc),
    h = R.useContext(wS),
    m = R.useContext(qm),
    g = R.useContext(bS).reducedMotion,
    y = R.useRef(null);
  (i = i || h.renderer),
    !y.current &&
      i &&
      (y.current = i(e, {
        visualState: t,
        parent: d,
        props: a,
        presenceContext: m,
        blockInitialAnimation: m ? m.initial === !1 : !1,
        reducedMotionConfig: g,
      }));
  const b = y.current,
    x = R.useContext(AS);
  b &&
    !b.projection &&
    o &&
    (b.type === "html" || b.type === "svg") &&
    d_(y.current, a, o, x);
  const w = R.useRef(!1);
  R.useInsertionEffect(() => {
    b && w.current && b.update(a, m);
  });
  const S = a[CS],
    A = R.useRef(
      !!S &&
        !(
          !((u = window.MotionHandoffIsComplete) === null || u === void 0) &&
          u.call(window, S)
        ) &&
        ((c = window.MotionHasOptimisedAnimation) === null || c === void 0
          ? void 0
          : c.call(window, S))
    );
  return (
    IA(() => {
      b &&
        ((w.current = !0),
        (window.MotionIsMounted = !0),
        b.updateFeatures(),
        Xm.render(b.render),
        A.current && b.animationState && b.animationState.animateChanges());
    }),
    R.useEffect(() => {
      b &&
        (!A.current && b.animationState && b.animationState.animateChanges(),
        A.current &&
          (queueMicrotask(() => {
            var C;
            (C = window.MotionHandoffMarkAsComplete) === null ||
              C === void 0 ||
              C.call(window, S);
          }),
          (A.current = !1)));
    }),
    b
  );
}
function d_(e, t, a, i) {
  const {
    layoutId: o,
    layout: u,
    drag: c,
    dragConstraints: d,
    layoutScroll: h,
    layoutRoot: m,
  } = t;
  (e.projection = new a(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : _S(e.parent)
  )),
    e.projection.setOptions({
      layoutId: o,
      layout: u,
      alwaysMeasureLayout: !!c || (d && ss(d)),
      visualElement: e,
      animationType: typeof u == "string" ? u : "both",
      initialPromotionConfig: i,
      layoutScroll: h,
      layoutRoot: m,
    });
}
function _S(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : _S(e.parent);
}
function h_({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: a,
  useVisualState: i,
  Component: o,
}) {
  var u, c;
  e && t_(e);
  function d(m, g) {
    let y;
    const b = { ...R.useContext(bS), ...m, layoutId: m_(m) },
      { isStatic: x } = b,
      w = o_(m),
      S = i(m, x);
    if (!x && $m) {
      p_();
      const A = g_(b);
      (y = A.MeasureLayout),
        (w.visualElement = f_(o, S, b, t, A.ProjectionNode));
    }
    return K(Nc.Provider, {
      value: w,
      children: [
        y && w.visualElement
          ? _(y, { visualElement: w.visualElement, ...b })
          : null,
        a(o, m, u_(S, w.visualElement, g), S, x, w.visualElement),
      ],
    });
  }
  d.displayName = `motion.${
    typeof o == "string"
      ? o
      : `create(${
          (c = (u = o.displayName) !== null && u !== void 0 ? u : o.name) !==
            null && c !== void 0
            ? c
            : ""
        })`
  }`;
  const h = R.forwardRef(d);
  return (h[l_] = o), h;
}
function m_({ layoutId: e }) {
  const t = R.useContext(vS).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function p_(e, t) {
  R.useContext(wS).strict;
}
function g_(e) {
  const { drag: t, layout: a } = gs;
  if (!t && !a) return {};
  const i = { ...t, ...a };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (a != null && a.isEnabled(e))
        ? i.MeasureLayout
        : void 0,
    ProjectionNode: i.ProjectionNode,
  };
}
const RS = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Qm = RS("--"),
  y_ = RS("var(--"),
  Zm = (e) => (y_(e) ? v_.test(e.split("/*")[0].trim()) : !1),
  v_ =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Wo = {};
function b_(e) {
  for (const t in e) (Wo[t] = e[t]), Qm(t) && (Wo[t].isCSSVariable = !0);
}
const Es = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  yi = new Set(Es);
function OS(e, { layout: t, layoutId: a }) {
  return (
    yi.has(e) ||
    e.startsWith("origin") ||
    ((t || a !== void 0) && (!!Wo[e] || e === "opacity"))
  );
}
const en = (e) => !!(e && e.getVelocity),
  NS = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Xr = (e, t, a) => (a > t ? t : a < e ? e : a),
  Cs = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Jo = { ...Cs, transform: (e) => Xr(0, 1, e) },
  Pu = { ...Cs, default: 1 },
  dl = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Ea = dl("deg"),
  br = dl("%"),
  Te = dl("px"),
  S_ = dl("vh"),
  x_ = dl("vw"),
  Xv = {
    ...br,
    parse: (e) => br.parse(e) / 100,
    transform: (e) => br.transform(e * 100),
  },
  w_ = {
    borderWidth: Te,
    borderTopWidth: Te,
    borderRightWidth: Te,
    borderBottomWidth: Te,
    borderLeftWidth: Te,
    borderRadius: Te,
    radius: Te,
    borderTopLeftRadius: Te,
    borderTopRightRadius: Te,
    borderBottomRightRadius: Te,
    borderBottomLeftRadius: Te,
    width: Te,
    maxWidth: Te,
    height: Te,
    maxHeight: Te,
    top: Te,
    right: Te,
    bottom: Te,
    left: Te,
    padding: Te,
    paddingTop: Te,
    paddingRight: Te,
    paddingBottom: Te,
    paddingLeft: Te,
    margin: Te,
    marginTop: Te,
    marginRight: Te,
    marginBottom: Te,
    marginLeft: Te,
    backgroundPositionX: Te,
    backgroundPositionY: Te,
  },
  T_ = {
    rotate: Ea,
    rotateX: Ea,
    rotateY: Ea,
    rotateZ: Ea,
    scale: Pu,
    scaleX: Pu,
    scaleY: Pu,
    scaleZ: Pu,
    skew: Ea,
    skewX: Ea,
    skewY: Ea,
    distance: Te,
    translateX: Te,
    translateY: Te,
    translateZ: Te,
    x: Te,
    y: Te,
    z: Te,
    perspective: Te,
    transformPerspective: Te,
    opacity: Jo,
    originX: Xv,
    originY: Xv,
    originZ: Te,
  },
  Qv = { ...Cs, transform: Math.round },
  Im = {
    ...w_,
    ...T_,
    zIndex: Qv,
    size: Te,
    fillOpacity: Jo,
    strokeOpacity: Jo,
    numOctaves: Qv,
  },
  E_ = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  C_ = Es.length;
function A_(e, t, a) {
  let i = "",
    o = !0;
  for (let u = 0; u < C_; u++) {
    const c = Es[u],
      d = e[c];
    if (d === void 0) continue;
    let h = !0;
    if (
      (typeof d == "number"
        ? (h = d === (c.startsWith("scale") ? 1 : 0))
        : (h = parseFloat(d) === 0),
      !h || a)
    ) {
      const m = NS(d, Im[c]);
      if (!h) {
        o = !1;
        const g = E_[c] || c;
        i += `${g}(${m}) `;
      }
      a && (t[c] = m);
    }
  }
  return (i = i.trim()), a ? (i = a(t, o ? "" : i)) : o && (i = "none"), i;
}
function Wm(e, t, a) {
  const { style: i, vars: o, transformOrigin: u } = e;
  let c = !1,
    d = !1;
  for (const h in t) {
    const m = t[h];
    if (yi.has(h)) {
      c = !0;
      continue;
    } else if (Qm(h)) {
      o[h] = m;
      continue;
    } else {
      const g = NS(m, Im[h]);
      h.startsWith("origin") ? ((d = !0), (u[h] = g)) : (i[h] = g);
    }
  }
  if (
    (t.transform ||
      (c || a
        ? (i.transform = A_(t, e.transform, a))
        : i.transform && (i.transform = "none")),
    d)
  ) {
    const { originX: h = "50%", originY: m = "50%", originZ: g = 0 } = u;
    i.transformOrigin = `${h} ${m} ${g}`;
  }
}
const Jm = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function DS(e, t, a) {
  for (const i in t) !en(t[i]) && !OS(i, a) && (e[i] = t[i]);
}
function __({ transformTemplate: e }, t) {
  return R.useMemo(() => {
    const a = Jm();
    return Wm(a, t, e), Object.assign({}, a.vars, a.style);
  }, [t]);
}
function R_(e, t) {
  const a = e.style || {},
    i = {};
  return DS(i, a, e), Object.assign(i, __(e, t)), i;
}
function O_(e, t) {
  const a = {},
    i = R_(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((a.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (a.tabIndex = 0),
    (a.style = i),
    a
  );
}
const N_ = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function ep(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(N_.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
const D_ = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  M_ = { offset: "strokeDashoffset", array: "strokeDasharray" };
function k_(e, t, a = 1, i = 0, o = !0) {
  e.pathLength = 1;
  const u = o ? D_ : M_;
  e[u.offset] = Te.transform(-i);
  const c = Te.transform(t),
    d = Te.transform(a);
  e[u.array] = `${c} ${d}`;
}
function Zv(e, t, a) {
  return typeof e == "string" ? e : Te.transform(t + a * e);
}
function L_(e, t, a) {
  const i = Zv(t, e.x, e.width),
    o = Zv(a, e.y, e.height);
  return `${i} ${o}`;
}
function tp(
  e,
  {
    attrX: t,
    attrY: a,
    attrScale: i,
    originX: o,
    originY: u,
    pathLength: c,
    pathSpacing: d = 1,
    pathOffset: h = 0,
    ...m
  },
  g,
  y
) {
  if ((Wm(e, m, y), g)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: b, style: x, dimensions: w } = e;
  b.transform && (w && (x.transform = b.transform), delete b.transform),
    w &&
      (o !== void 0 || u !== void 0 || x.transform) &&
      (x.transformOrigin = L_(
        w,
        o !== void 0 ? o : 0.5,
        u !== void 0 ? u : 0.5
      )),
    t !== void 0 && (b.x = t),
    a !== void 0 && (b.y = a),
    i !== void 0 && (b.scale = i),
    c !== void 0 && k_(b, c, d, h, !1);
}
const MS = () => ({ ...Jm(), attrs: {} }),
  np = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function B_(e, t, a, i) {
  const o = R.useMemo(() => {
    const u = MS();
    return (
      tp(u, t, np(i), e.transformTemplate),
      { ...u.attrs, style: { ...u.style } }
    );
  }, [t]);
  if (e.style) {
    const u = {};
    DS(u, e.style, e), (o.style = { ...u, ...o.style });
  }
  return o;
}
function U_(e = !1) {
  return (a, i, o, { latestValues: u }, c) => {
    const h = (ep(a) ? B_ : O_)(i, u, c, a),
      m = a_(i, typeof a == "string", e),
      g = a !== R.Fragment ? { ...m, ...h, ref: o } : {},
      { children: y } = i,
      b = R.useMemo(() => (en(y) ? y.get() : y), [y]);
    return R.createElement(a, { ...g, children: b });
  };
}
function Iv(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((a, i) => {
        (t[0][i] = a.get()), (t[1][i] = a.getVelocity());
      }),
    t
  );
}
function rp(e, t, a, i) {
  if (typeof t == "function") {
    const [o, u] = Iv(i);
    t = t(a !== void 0 ? a : e.custom, o, u);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [o, u] = Iv(i);
    t = t(a !== void 0 ? a : e.custom, o, u);
  }
  return t;
}
const Gh = (e) => Array.isArray(e),
  z_ = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  P_ = (e) => (Gh(e) ? e[e.length - 1] || 0 : e);
function Xu(e) {
  const t = en(e) ? e.get() : e;
  return z_(t) ? t.toValue() : t;
}
function V_(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: a },
  i,
  o,
  u
) {
  const c = { latestValues: j_(i, o, u, e), renderState: t() };
  return (
    a &&
      ((c.onMount = (d) => a({ props: i, current: d, ...c })),
      (c.onUpdate = (d) => a(d))),
    c
  );
}
const kS = (e) => (t, a) => {
  const i = R.useContext(Nc),
    o = R.useContext(qm),
    u = () => V_(e, t, i, o);
  return a ? u() : QA(u);
};
function j_(e, t, a, i) {
  const o = {},
    u = i(e, {});
  for (const b in u) o[b] = Xu(u[b]);
  let { initial: c, animate: d } = e;
  const h = Mc(e),
    m = ES(e);
  t &&
    m &&
    !h &&
    e.inherit !== !1 &&
    (c === void 0 && (c = t.initial), d === void 0 && (d = t.animate));
  let g = a ? a.initial === !1 : !1;
  g = g || c === !1;
  const y = g ? d : c;
  if (y && typeof y != "boolean" && !Dc(y)) {
    const b = Array.isArray(y) ? y : [y];
    for (let x = 0; x < b.length; x++) {
      const w = rp(e, b[x]);
      if (w) {
        const { transitionEnd: S, transition: A, ...C } = w;
        for (const O in C) {
          let M = C[O];
          if (Array.isArray(M)) {
            const P = g ? M.length - 1 : 0;
            M = M[P];
          }
          M !== null && (o[O] = M);
        }
        for (const O in S) o[O] = S[O];
      }
    }
  }
  return o;
}
function ap(e, t, a) {
  var i;
  const { style: o } = e,
    u = {};
  for (const c in o)
    (en(o[c]) ||
      (t.style && en(t.style[c])) ||
      OS(c, e) ||
      ((i = a == null ? void 0 : a.getValue(c)) === null || i === void 0
        ? void 0
        : i.liveStyle) !== void 0) &&
      (u[c] = o[c]);
  return u;
}
const H_ = {
  useVisualState: kS({
    scrapeMotionValuesFromProps: ap,
    createRenderState: Jm,
  }),
};
function LS(e, t) {
  try {
    t.dimensions =
      typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
function BS(e, { style: t, vars: a }, i, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(i));
  for (const u in a) e.style.setProperty(u, a[u]);
}
const US = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function zS(e, t, a, i) {
  BS(e, t, void 0, i);
  for (const o in t.attrs) e.setAttribute(US.has(o) ? o : Km(o), t.attrs[o]);
}
function PS(e, t, a) {
  const i = ap(e, t, a);
  for (const o in e)
    if (en(e[o]) || en(t[o])) {
      const u =
        Es.indexOf(o) !== -1
          ? "attr" + o.charAt(0).toUpperCase() + o.substring(1)
          : o;
      i[u] = e[o];
    }
  return i;
}
const Wv = ["x", "y", "width", "height", "cx", "cy", "r"],
  q_ = {
    useVisualState: kS({
      scrapeMotionValuesFromProps: PS,
      createRenderState: MS,
      onUpdate: ({
        props: e,
        prevProps: t,
        current: a,
        renderState: i,
        latestValues: o,
      }) => {
        if (!a) return;
        let u = !!e.drag;
        if (!u) {
          for (const d in o)
            if (yi.has(d)) {
              u = !0;
              break;
            }
        }
        if (!u) return;
        let c = !t;
        if (t)
          for (let d = 0; d < Wv.length; d++) {
            const h = Wv[d];
            e[h] !== t[h] && (c = !0);
          }
        c &&
          ot.read(() => {
            LS(a, i),
              ot.render(() => {
                tp(i, o, np(a.tagName), e.transformTemplate), zS(a, i);
              });
          });
      },
    }),
  };
function $_(e, t) {
  return function (i, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const c = {
      ...(ep(i) ? q_ : H_),
      preloadedFeatures: e,
      useRender: U_(o),
      createVisualElement: t,
      Component: i,
    };
    return h_(c);
  };
}
function el(e, t, a) {
  const i = e.getProps();
  return rp(i, t, a !== void 0 ? a : i.custom, e);
}
const F_ = Fm(() => window.ScrollTimeline !== void 0);
class Y_ {
  constructor(t) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean));
  }
  get finished() {
    return Promise.all(
      this.animations.map((t) => ("finished" in t ? t.finished : t))
    );
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, a) {
    for (let i = 0; i < this.animations.length; i++) this.animations[i][t] = a;
  }
  attachTimeline(t, a) {
    const i = this.animations.map((o) => {
      if (F_() && o.attachTimeline) return o.attachTimeline(t);
      if (typeof a == "function") return a(o);
    });
    return () => {
      i.forEach((o, u) => {
        o && o(), this.animations[u].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let a = 0; a < this.animations.length; a++)
      t = Math.max(t, this.animations[a].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((a) => a[t]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class G_ extends Y_ {
  then(t, a) {
    return Promise.all(this.animations).then(t).catch(a);
  }
}
function ip(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const Kh = 2e4;
function VS(e) {
  let t = 0;
  const a = 50;
  let i = e.next(t);
  for (; !i.done && t < Kh; ) (t += a), (i = e.next(t));
  return t >= Kh ? 1 / 0 : t;
}
function sp(e) {
  return typeof e == "function";
}
function Jv(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
const op = (e) => Array.isArray(e) && typeof e[0] == "number",
  K_ = { linearEasing: void 0 };
function X_(e, t) {
  const a = Fm(e);
  return () => {
    var i;
    return (i = K_[t]) !== null && i !== void 0 ? i : a();
  };
}
const pc = X_(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  jS = (e, t, a = 10) => {
    let i = "";
    const o = Math.max(Math.round(t / a), 2);
    for (let u = 0; u < o; u++) i += e(ps(0, o - 1, u)) + ", ";
    return `linear(${i.substring(0, i.length - 2)})`;
  };
function HS(e) {
  return !!(
    (typeof e == "function" && pc()) ||
    !e ||
    (typeof e == "string" && (e in Xh || pc())) ||
    op(e) ||
    (Array.isArray(e) && e.every(HS))
  );
}
const jo = ([e, t, a, i]) => `cubic-bezier(${e}, ${t}, ${a}, ${i})`,
  Xh = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: jo([0, 0.65, 0.55, 1]),
    circOut: jo([0.55, 0, 1, 0.45]),
    backIn: jo([0.31, 0.01, 0.66, -0.59]),
    backOut: jo([0.33, 1.53, 0.69, 0.99]),
  };
function qS(e, t) {
  if (e)
    return typeof e == "function" && pc()
      ? jS(e, t)
      : op(e)
      ? jo(e)
      : Array.isArray(e)
      ? e.map((a) => qS(a, t) || Xh.easeOut)
      : Xh[e];
}
const Wn = { x: !1, y: !1 };
function $S() {
  return Wn.x || Wn.y;
}
function Q_(e, t, a) {
  var i;
  if (e instanceof EventTarget) return [e];
  if (typeof e == "string") {
    let o = document;
    const u = (i = void 0) !== null && i !== void 0 ? i : o.querySelectorAll(e);
    return u ? Array.from(u) : [];
  }
  return Array.from(e);
}
function FS(e, t) {
  const a = Q_(e),
    i = new AbortController(),
    o = { passive: !0, ...t, signal: i.signal };
  return [a, o, () => i.abort()];
}
function eb(e) {
  return !(e.pointerType === "touch" || $S());
}
function Z_(e, t, a = {}) {
  const [i, o, u] = FS(e, a),
    c = (d) => {
      if (!eb(d)) return;
      const { target: h } = d,
        m = t(h, d);
      if (typeof m != "function" || !h) return;
      const g = (y) => {
        eb(y) && (m(y), h.removeEventListener("pointerleave", g));
      };
      h.addEventListener("pointerleave", g, o);
    };
  return (
    i.forEach((d) => {
      d.addEventListener("pointerenter", c, o);
    }),
    u
  );
}
const YS = (e, t) => (t ? (e === t ? !0 : YS(e, t.parentElement)) : !1),
  lp = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  I_ = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function W_(e) {
  return I_.has(e.tagName) || e.tabIndex !== -1;
}
const Ho = new WeakSet();
function tb(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function xh(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
  );
}
const J_ = (e, t) => {
  const a = e.currentTarget;
  if (!a) return;
  const i = tb(() => {
    if (Ho.has(a)) return;
    xh(a, "down");
    const o = tb(() => {
        xh(a, "up");
      }),
      u = () => xh(a, "cancel");
    a.addEventListener("keyup", o, t), a.addEventListener("blur", u, t);
  });
  a.addEventListener("keydown", i, t),
    a.addEventListener("blur", () => a.removeEventListener("keydown", i), t);
};
function nb(e) {
  return lp(e) && !$S();
}
function eR(e, t, a = {}) {
  const [i, o, u] = FS(e, a),
    c = (d) => {
      const h = d.currentTarget;
      if (!h || !nb(d) || Ho.has(h)) return;
      if ((Ho.add(h), h.setPointerCapture && d.pointerId !== void 0))
        try {
          h.setPointerCapture(d.pointerId);
        } catch {}
      const m = t(h, d),
        g = (x, w) => {
          if (
            (h.removeEventListener("pointerup", y),
            h.removeEventListener("pointercancel", b),
            h.releasePointerCapture && x.pointerId !== void 0)
          )
            try {
              h.releasePointerCapture(x.pointerId);
            } catch {}
          !nb(x) ||
            !Ho.has(h) ||
            (Ho.delete(h), typeof m == "function" && m(x, { success: w }));
        },
        y = (x) => {
          (
            x.isTrusted
              ? tR(
                  x,
                  h instanceof Element
                    ? h.getBoundingClientRect()
                    : {
                        left: 0,
                        top: 0,
                        right: window.innerWidth,
                        bottom: window.innerHeight,
                      }
                )
              : !1
          )
            ? g(x, !1)
            : g(x, !(h instanceof Element) || YS(h, x.target));
        },
        b = (x) => {
          g(x, !1);
        };
      h.addEventListener("pointerup", y, o),
        h.addEventListener("pointercancel", b, o),
        h.addEventListener("lostpointercapture", b, o);
    };
  return (
    i.forEach((d) => {
      d = a.useGlobalTarget ? window : d;
      let h = !1;
      d instanceof HTMLElement &&
        ((h = !0),
        !W_(d) && d.getAttribute("tabindex") === null && (d.tabIndex = 0)),
        d.addEventListener("pointerdown", c, o),
        h && d.addEventListener("focus", (m) => J_(m, o), o);
    }),
    u
  );
}
function tR(e, t) {
  return (
    e.clientX < t.left ||
    e.clientX > t.right ||
    e.clientY < t.top ||
    e.clientY > t.bottom
  );
}
function nR(e) {
  return e === "x" || e === "y"
    ? Wn[e]
      ? null
      : ((Wn[e] = !0),
        () => {
          Wn[e] = !1;
        })
    : Wn.x || Wn.y
    ? null
    : ((Wn.x = Wn.y = !0),
      () => {
        Wn.x = Wn.y = !1;
      });
}
const GS = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Es,
]);
let Qu;
function rR() {
  Qu = void 0;
}
const Sr = {
  now: () => (
    Qu === void 0 &&
      Sr.set(
        Gt.isProcessing || WA.useManualTiming ? Gt.timestamp : performance.now()
      ),
    Qu
  ),
  set: (e) => {
    (Qu = e), queueMicrotask(rR);
  },
};
function up(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function cp(e, t) {
  const a = e.indexOf(t);
  a > -1 && e.splice(a, 1);
}
class fp {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return up(this.subscriptions, t), () => cp(this.subscriptions, t);
  }
  notify(t, a, i) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](t, a, i);
      else
        for (let u = 0; u < o; u++) {
          const c = this.subscriptions[u];
          c && c(t, a, i);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function KS(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const rb = 30,
  aR = (e) => !isNaN(parseFloat(e));
class iR {
  constructor(t, a = {}) {
    (this.version = "12.4.4"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (i, o = !0) => {
        const u = Sr.now();
        this.updatedAt !== u && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(i),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          o &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = a.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = Sr.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = aR(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, a) {
    this.events[t] || (this.events[t] = new fp());
    const i = this.events[t].add(a);
    return t === "change"
      ? () => {
          i(),
            ot.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : i;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, a) {
    (this.passiveEffect = t), (this.stopPassiveEffect = a);
  }
  set(t, a = !0) {
    !a || !this.passiveEffect
      ? this.updateAndNotify(t, a)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, a, i) {
    this.set(a),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - i);
  }
  jump(t, a = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      a && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Sr.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > rb
    )
      return 0;
    const a = Math.min(this.updatedAt - this.prevUpdatedAt, rb);
    return KS(parseFloat(this.current) - parseFloat(this.prevFrameValue), a);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((a) => {
        (this.hasAnimated = !0),
          (this.animation = t(a)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function tl(e, t) {
  return new iR(e, t);
}
function sR(e, t, a) {
  e.hasValue(t) ? e.getValue(t).set(a) : e.addValue(t, tl(a));
}
function oR(e, t) {
  const a = el(e, t);
  let { transitionEnd: i = {}, transition: o = {}, ...u } = a || {};
  u = { ...u, ...i };
  for (const c in u) {
    const d = P_(u[c]);
    sR(e, c, d);
  }
}
function lR(e) {
  return !!(en(e) && e.add);
}
function Qh(e, t) {
  const a = e.getValue("willChange");
  if (lR(a)) return a.add(t);
}
function XS(e) {
  return e.props[CS];
}
const QS = (e, t, a) =>
    (((1 - 3 * a + 3 * t) * e + (3 * a - 6 * t)) * e + 3 * t) * e,
  uR = 1e-7,
  cR = 12;
function fR(e, t, a, i, o) {
  let u,
    c,
    d = 0;
  do (c = t + (a - t) / 2), (u = QS(c, i, o) - e), u > 0 ? (a = c) : (t = c);
  while (Math.abs(u) > uR && ++d < cR);
  return c;
}
function hl(e, t, a, i) {
  if (e === t && a === i) return bn;
  const o = (u) => fR(u, 0, 1, e, a);
  return (u) => (u === 0 || u === 1 ? u : QS(o(u), t, i));
}
const ZS = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  IS = (e) => (t) => 1 - e(1 - t),
  WS = hl(0.33, 1.53, 0.69, 0.99),
  dp = IS(WS),
  JS = ZS(dp),
  ex = (e) =>
    (e *= 2) < 1 ? 0.5 * dp(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  hp = (e) => 1 - Math.sin(Math.acos(e)),
  tx = IS(hp),
  nx = ZS(hp),
  rx = (e) => /^0[^.\s]+$/u.test(e);
function dR(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || rx(e)
    : !0;
}
const Yo = (e) => Math.round(e * 1e5) / 1e5,
  mp = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function hR(e) {
  return e == null;
}
const mR =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  pp = (e, t) => (a) =>
    !!(
      (typeof a == "string" && mR.test(a) && a.startsWith(e)) ||
      (t && !hR(a) && Object.prototype.hasOwnProperty.call(a, t))
    ),
  ax = (e, t, a) => (i) => {
    if (typeof i != "string") return i;
    const [o, u, c, d] = i.match(mp);
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(u),
      [a]: parseFloat(c),
      alpha: d !== void 0 ? parseFloat(d) : 1,
    };
  },
  pR = (e) => Xr(0, 255, e),
  wh = { ...Cs, transform: (e) => Math.round(pR(e)) },
  ui = {
    test: pp("rgb", "red"),
    parse: ax("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: a, alpha: i = 1 }) =>
      "rgba(" +
      wh.transform(e) +
      ", " +
      wh.transform(t) +
      ", " +
      wh.transform(a) +
      ", " +
      Yo(Jo.transform(i)) +
      ")",
  };
function gR(e) {
  let t = "",
    a = "",
    i = "",
    o = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (a = e.substring(3, 5)),
        (i = e.substring(5, 7)),
        (o = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (a = e.substring(2, 3)),
        (i = e.substring(3, 4)),
        (o = e.substring(4, 5)),
        (t += t),
        (a += a),
        (i += i),
        (o += o)),
    {
      red: parseInt(t, 16),
      green: parseInt(a, 16),
      blue: parseInt(i, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  );
}
const Zh = { test: pp("#"), parse: gR, transform: ui.transform },
  os = {
    test: pp("hsl", "hue"),
    parse: ax("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: a, alpha: i = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      br.transform(Yo(t)) +
      ", " +
      br.transform(Yo(a)) +
      ", " +
      Yo(Jo.transform(i)) +
      ")",
  },
  Wt = {
    test: (e) => ui.test(e) || Zh.test(e) || os.test(e),
    parse: (e) =>
      ui.test(e) ? ui.parse(e) : os.test(e) ? os.parse(e) : Zh.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
        ? ui.transform(e)
        : os.transform(e),
  },
  yR =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function vR(e) {
  var t, a;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(mp)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((a = e.match(yR)) === null || a === void 0 ? void 0 : a.length) || 0) >
      0
  );
}
const ix = "number",
  sx = "color",
  bR = "var",
  SR = "var(",
  ab = "${}",
  xR =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function nl(e) {
  const t = e.toString(),
    a = [],
    i = { color: [], number: [], var: [] },
    o = [];
  let u = 0;
  const d = t
    .replace(
      xR,
      (h) => (
        Wt.test(h)
          ? (i.color.push(u), o.push(sx), a.push(Wt.parse(h)))
          : h.startsWith(SR)
          ? (i.var.push(u), o.push(bR), a.push(h))
          : (i.number.push(u), o.push(ix), a.push(parseFloat(h))),
        ++u,
        ab
      )
    )
    .split(ab);
  return { values: a, split: d, indexes: i, types: o };
}
function ox(e) {
  return nl(e).values;
}
function lx(e) {
  const { split: t, types: a } = nl(e),
    i = t.length;
  return (o) => {
    let u = "";
    for (let c = 0; c < i; c++)
      if (((u += t[c]), o[c] !== void 0)) {
        const d = a[c];
        d === ix
          ? (u += Yo(o[c]))
          : d === sx
          ? (u += Wt.transform(o[c]))
          : (u += o[c]);
      }
    return u;
  };
}
const wR = (e) => (typeof e == "number" ? 0 : e);
function TR(e) {
  const t = ox(e);
  return lx(e)(t.map(wR));
}
const Oa = {
    test: vR,
    parse: ox,
    createTransformer: lx,
    getAnimatableNone: TR,
  },
  ER = new Set(["brightness", "contrast", "saturate", "opacity"]);
function CR(e) {
  const [t, a] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [i] = a.match(mp) || [];
  if (!i) return e;
  const o = a.replace(i, "");
  let u = ER.has(t) ? 1 : 0;
  return i !== a && (u *= 100), t + "(" + u + o + ")";
}
const AR = /\b([a-z-]*)\(.*?\)/gu,
  Ih = {
    ...Oa,
    getAnimatableNone: (e) => {
      const t = e.match(AR);
      return t ? t.map(CR).join(" ") : e;
    },
  },
  _R = {
    ...Im,
    color: Wt,
    backgroundColor: Wt,
    outlineColor: Wt,
    fill: Wt,
    stroke: Wt,
    borderColor: Wt,
    borderTopColor: Wt,
    borderRightColor: Wt,
    borderBottomColor: Wt,
    borderLeftColor: Wt,
    filter: Ih,
    WebkitFilter: Ih,
  },
  gp = (e) => _R[e];
function ux(e, t) {
  let a = gp(e);
  return (
    a !== Ih && (a = Oa), a.getAnimatableNone ? a.getAnimatableNone(t) : void 0
  );
}
const RR = new Set(["auto", "none", "0"]);
function OR(e, t, a) {
  let i = 0,
    o;
  for (; i < e.length && !o; ) {
    const u = e[i];
    typeof u == "string" && !RR.has(u) && nl(u).values.length && (o = e[i]),
      i++;
  }
  if (o && a) for (const u of t) e[u] = ux(a, o);
}
const ib = (e) => e === Cs || e === Te,
  sb = (e, t) => parseFloat(e.split(", ")[t]),
  ob =
    (e, t) =>
    (a, { transform: i }) => {
      if (i === "none" || !i) return 0;
      const o = i.match(/^matrix3d\((.+)\)$/u);
      if (o) return sb(o[1], t);
      {
        const u = i.match(/^matrix\((.+)\)$/u);
        return u ? sb(u[1], e) : 0;
      }
    },
  NR = new Set(["x", "y", "z"]),
  DR = Es.filter((e) => !NR.has(e));
function MR(e) {
  const t = [];
  return (
    DR.forEach((a) => {
      const i = e.getValue(a);
      i !== void 0 &&
        (t.push([a, i.get()]), i.set(a.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const ys = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: a = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(a),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: a = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(a),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: ob(4, 13),
  y: ob(5, 14),
};
ys.translateX = ys.x;
ys.translateY = ys.y;
const fi = new Set();
let Wh = !1,
  Jh = !1;
function cx() {
  if (Jh) {
    const e = Array.from(fi).filter((i) => i.needsMeasurement),
      t = new Set(e.map((i) => i.element)),
      a = new Map();
    t.forEach((i) => {
      const o = MR(i);
      o.length && (a.set(i, o), i.render());
    }),
      e.forEach((i) => i.measureInitialState()),
      t.forEach((i) => {
        i.render();
        const o = a.get(i);
        o &&
          o.forEach(([u, c]) => {
            var d;
            (d = i.getValue(u)) === null || d === void 0 || d.set(c);
          });
      }),
      e.forEach((i) => i.measureEndState()),
      e.forEach((i) => {
        i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY);
      });
  }
  (Jh = !1), (Wh = !1), fi.forEach((e) => e.complete()), fi.clear();
}
function fx() {
  fi.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Jh = !0);
  });
}
function kR() {
  fx(), cx();
}
class yp {
  constructor(t, a, i, o, u, c = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = a),
      (this.name = i),
      (this.motionValue = o),
      (this.element = u),
      (this.isAsync = c);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (fi.add(this),
          Wh || ((Wh = !0), ot.read(fx), ot.resolveKeyframes(cx)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: a,
      element: i,
      motionValue: o,
    } = this;
    for (let u = 0; u < t.length; u++)
      if (t[u] === null)
        if (u === 0) {
          const c = o == null ? void 0 : o.get(),
            d = t[t.length - 1];
          if (c !== void 0) t[0] = c;
          else if (i && a) {
            const h = i.readValue(a, d);
            h != null && (t[0] = h);
          }
          t[0] === void 0 && (t[0] = d), o && c === void 0 && o.set(t[0]);
        } else t[u] = t[u - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      fi.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), fi.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const dx = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  LR = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function BR(e) {
  const t = LR.exec(e);
  if (!t) return [,];
  const [, a, i, o] = t;
  return [`--${a ?? i}`, o];
}
function hx(e, t, a = 1) {
  const [i, o] = BR(e);
  if (!i) return;
  const u = window.getComputedStyle(t).getPropertyValue(i);
  if (u) {
    const c = u.trim();
    return dx(c) ? parseFloat(c) : c;
  }
  return Zm(o) ? hx(o, t, a + 1) : o;
}
const mx = (e) => (t) => t.test(e),
  UR = { test: (e) => e === "auto", parse: (e) => e },
  px = [Cs, Te, br, Ea, x_, S_, UR],
  lb = (e) => px.find(mx(e));
class gx extends yp {
  constructor(t, a, i, o, u) {
    super(t, a, i, o, u, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: a, name: i } = this;
    if (!a || !a.current) return;
    super.readKeyframes();
    for (let h = 0; h < t.length; h++) {
      let m = t[h];
      if (typeof m == "string" && ((m = m.trim()), Zm(m))) {
        const g = hx(m, a.current);
        g !== void 0 && (t[h] = g),
          h === t.length - 1 && (this.finalKeyframe = m);
      }
    }
    if ((this.resolveNoneKeyframes(), !GS.has(i) || t.length !== 2)) return;
    const [o, u] = t,
      c = lb(o),
      d = lb(u);
    if (c !== d)
      if (ib(c) && ib(d))
        for (let h = 0; h < t.length; h++) {
          const m = t[h];
          typeof m == "string" && (t[h] = parseFloat(m));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: a } = this,
      i = [];
    for (let o = 0; o < t.length; o++) dR(t[o]) && i.push(o);
    i.length && OR(t, i, a);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: a, name: i } = this;
    if (!t || !t.current) return;
    i === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = ys[i](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (a[0] = this.measuredOrigin);
    const o = a[a.length - 1];
    o !== void 0 && t.getValue(i, o).jump(o, !1);
  }
  measureEndState() {
    var t;
    const { element: a, name: i, unresolvedKeyframes: o } = this;
    if (!a || !a.current) return;
    const u = a.getValue(i);
    u && u.jump(this.measuredOrigin, !1);
    const c = o.length - 1,
      d = o[c];
    (o[c] = ys[i](a.measureViewportBox(), window.getComputedStyle(a.current))),
      d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([h, m]) => {
          a.getValue(h).set(m);
        }),
      this.resolveNoneKeyframes();
  }
}
const ub = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (Oa.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function zR(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let a = 0; a < e.length; a++) if (e[a] !== t) return !0;
}
function PR(e, t, a, i) {
  const o = e[0];
  if (o === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const u = e[e.length - 1],
    c = ub(o, t),
    d = ub(u, t);
  return !c || !d ? !1 : zR(e) || ((a === "spring" || sp(a)) && i);
}
const VR = (e) => e !== null;
function kc(e, { repeat: t, repeatType: a = "loop" }, i) {
  const o = e.filter(VR),
    u = t && a !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !u || i === void 0 ? o[u] : i;
}
const jR = 40;
class yx {
  constructor({
    autoplay: t = !0,
    delay: a = 0,
    type: i = "keyframes",
    repeat: o = 0,
    repeatDelay: u = 0,
    repeatType: c = "loop",
    ...d
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = Sr.now()),
      (this.options = {
        autoplay: t,
        delay: a,
        type: i,
        repeat: o,
        repeatDelay: u,
        repeatType: c,
        ...d,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > jR
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && kR(), this._resolved;
  }
  onKeyframesResolved(t, a) {
    (this.resolvedAt = Sr.now()), (this.hasAttemptedResolve = !0);
    const {
      name: i,
      type: o,
      velocity: u,
      delay: c,
      onComplete: d,
      onUpdate: h,
      isGenerator: m,
    } = this.options;
    if (!m && !PR(t, i, o, u))
      if (c) this.options.duration = 0;
      else {
        h && h(kc(t, this.options, a)), d && d(), this.resolveFinishedPromise();
        return;
      }
    const g = this.initPlayback(t, a);
    g !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: a, ...g }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, a) {
    return this.currentFinishedPromise.then(t, a);
  }
  flatten() {
    (this.options.type = "keyframes"), (this.options.ease = "linear");
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
const mt = (e, t, a) => e + (t - e) * a;
function Th(e, t, a) {
  return (
    a < 0 && (a += 1),
    a > 1 && (a -= 1),
    a < 1 / 6
      ? e + (t - e) * 6 * a
      : a < 1 / 2
      ? t
      : a < 2 / 3
      ? e + (t - e) * (2 / 3 - a) * 6
      : e
  );
}
function HR({ hue: e, saturation: t, lightness: a, alpha: i }) {
  (e /= 360), (t /= 100), (a /= 100);
  let o = 0,
    u = 0,
    c = 0;
  if (!t) o = u = c = a;
  else {
    const d = a < 0.5 ? a * (1 + t) : a + t - a * t,
      h = 2 * a - d;
    (o = Th(h, d, e + 1 / 3)), (u = Th(h, d, e)), (c = Th(h, d, e - 1 / 3));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(u * 255),
    blue: Math.round(c * 255),
    alpha: i,
  };
}
function gc(e, t) {
  return (a) => (a > 0 ? t : e);
}
const Eh = (e, t, a) => {
    const i = e * e,
      o = a * (t * t - i) + i;
    return o < 0 ? 0 : Math.sqrt(o);
  },
  qR = [Zh, ui, os],
  $R = (e) => qR.find((t) => t.test(e));
function cb(e) {
  const t = $R(e);
  if (!t) return !1;
  let a = t.parse(e);
  return t === os && (a = HR(a)), a;
}
const fb = (e, t) => {
    const a = cb(e),
      i = cb(t);
    if (!a || !i) return gc(e, t);
    const o = { ...a };
    return (u) => (
      (o.red = Eh(a.red, i.red, u)),
      (o.green = Eh(a.green, i.green, u)),
      (o.blue = Eh(a.blue, i.blue, u)),
      (o.alpha = mt(a.alpha, i.alpha, u)),
      ui.transform(o)
    );
  },
  FR = (e, t) => (a) => t(e(a)),
  ml = (...e) => e.reduce(FR),
  em = new Set(["none", "hidden"]);
function YR(e, t) {
  return em.has(e) ? (a) => (a <= 0 ? e : t) : (a) => (a >= 1 ? t : e);
}
function GR(e, t) {
  return (a) => mt(e, t, a);
}
function vp(e) {
  return typeof e == "number"
    ? GR
    : typeof e == "string"
    ? Zm(e)
      ? gc
      : Wt.test(e)
      ? fb
      : QR
    : Array.isArray(e)
    ? vx
    : typeof e == "object"
    ? Wt.test(e)
      ? fb
      : KR
    : gc;
}
function vx(e, t) {
  const a = [...e],
    i = a.length,
    o = e.map((u, c) => vp(u)(u, t[c]));
  return (u) => {
    for (let c = 0; c < i; c++) a[c] = o[c](u);
    return a;
  };
}
function KR(e, t) {
  const a = { ...e, ...t },
    i = {};
  for (const o in a)
    e[o] !== void 0 && t[o] !== void 0 && (i[o] = vp(e[o])(e[o], t[o]));
  return (o) => {
    for (const u in i) a[u] = i[u](o);
    return a;
  };
}
function XR(e, t) {
  var a;
  const i = [],
    o = { color: 0, var: 0, number: 0 };
  for (let u = 0; u < t.values.length; u++) {
    const c = t.types[u],
      d = e.indexes[c][o[c]],
      h = (a = e.values[d]) !== null && a !== void 0 ? a : 0;
    (i[u] = h), o[c]++;
  }
  return i;
}
const QR = (e, t) => {
  const a = Oa.createTransformer(t),
    i = nl(e),
    o = nl(t);
  return i.indexes.var.length === o.indexes.var.length &&
    i.indexes.color.length === o.indexes.color.length &&
    i.indexes.number.length >= o.indexes.number.length
    ? (em.has(e) && !o.values.length) || (em.has(t) && !i.values.length)
      ? YR(e, t)
      : ml(vx(XR(i, o), o.values), a)
    : gc(e, t);
};
function bx(e, t, a) {
  return typeof e == "number" && typeof t == "number" && typeof a == "number"
    ? mt(e, t, a)
    : vp(e)(e, t);
}
const ZR = 5;
function Sx(e, t, a) {
  const i = Math.max(t - ZR, 0);
  return KS(a - e(i), t - i);
}
const wt = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  db = 0.001;
function IR({
  duration: e = wt.duration,
  bounce: t = wt.bounce,
  velocity: a = wt.velocity,
  mass: i = wt.mass,
}) {
  let o,
    u,
    c = 1 - t;
  (c = Xr(wt.minDamping, wt.maxDamping, c)),
    (e = Xr(wt.minDuration, wt.maxDuration, Kr(e))),
    c < 1
      ? ((o = (m) => {
          const g = m * c,
            y = g * e,
            b = g - a,
            x = tm(m, c),
            w = Math.exp(-y);
          return db - (b / x) * w;
        }),
        (u = (m) => {
          const y = m * c * e,
            b = y * a + a,
            x = Math.pow(c, 2) * Math.pow(m, 2) * e,
            w = Math.exp(-y),
            S = tm(Math.pow(m, 2), c);
          return ((-o(m) + db > 0 ? -1 : 1) * ((b - x) * w)) / S;
        }))
      : ((o = (m) => {
          const g = Math.exp(-m * e),
            y = (m - a) * e + 1;
          return -0.001 + g * y;
        }),
        (u = (m) => {
          const g = Math.exp(-m * e),
            y = (a - m) * (e * e);
          return g * y;
        }));
  const d = 5 / e,
    h = JR(o, u, d);
  if (((e = Gr(e)), isNaN(h)))
    return { stiffness: wt.stiffness, damping: wt.damping, duration: e };
  {
    const m = Math.pow(h, 2) * i;
    return { stiffness: m, damping: c * 2 * Math.sqrt(i * m), duration: e };
  }
}
const WR = 12;
function JR(e, t, a) {
  let i = a;
  for (let o = 1; o < WR; o++) i = i - e(i) / t(i);
  return i;
}
function tm(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const e4 = ["duration", "bounce"],
  t4 = ["stiffness", "damping", "mass"];
function hb(e, t) {
  return t.some((a) => e[a] !== void 0);
}
function n4(e) {
  let t = {
    velocity: wt.velocity,
    stiffness: wt.stiffness,
    damping: wt.damping,
    mass: wt.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!hb(e, t4) && hb(e, e4))
    if (e.visualDuration) {
      const a = e.visualDuration,
        i = (2 * Math.PI) / (a * 1.2),
        o = i * i,
        u = 2 * Xr(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
      t = { ...t, mass: wt.mass, stiffness: o, damping: u };
    } else {
      const a = IR(e);
      (t = { ...t, ...a, mass: wt.mass }), (t.isResolvedFromDuration = !0);
    }
  return t;
}
function xx(e = wt.visualDuration, t = wt.bounce) {
  const a =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: i, restDelta: o } = a;
  const u = a.keyframes[0],
    c = a.keyframes[a.keyframes.length - 1],
    d = { done: !1, value: u },
    {
      stiffness: h,
      damping: m,
      mass: g,
      duration: y,
      velocity: b,
      isResolvedFromDuration: x,
    } = n4({ ...a, velocity: -Kr(a.velocity || 0) }),
    w = b || 0,
    S = m / (2 * Math.sqrt(h * g)),
    A = c - u,
    C = Kr(Math.sqrt(h / g)),
    O = Math.abs(A) < 5;
  i || (i = O ? wt.restSpeed.granular : wt.restSpeed.default),
    o || (o = O ? wt.restDelta.granular : wt.restDelta.default);
  let M;
  if (S < 1) {
    const B = tm(C, S);
    M = (N) => {
      const q = Math.exp(-S * C * N);
      return (
        c - q * (((w + S * C * A) / B) * Math.sin(B * N) + A * Math.cos(B * N))
      );
    };
  } else if (S === 1) M = (B) => c - Math.exp(-C * B) * (A + (w + C * A) * B);
  else {
    const B = C * Math.sqrt(S * S - 1);
    M = (N) => {
      const q = Math.exp(-S * C * N),
        X = Math.min(B * N, 300);
      return (
        c - (q * ((w + S * C * A) * Math.sinh(X) + B * A * Math.cosh(X))) / B
      );
    };
  }
  const P = {
    calculatedDuration: (x && y) || null,
    next: (B) => {
      const N = M(B);
      if (x) d.done = B >= y;
      else {
        let q = 0;
        S < 1 && (q = B === 0 ? Gr(w) : Sx(M, B, N));
        const X = Math.abs(q) <= i,
          Y = Math.abs(c - N) <= o;
        d.done = X && Y;
      }
      return (d.value = d.done ? c : N), d;
    },
    toString: () => {
      const B = Math.min(VS(P), Kh),
        N = jS((q) => P.next(B * q).value, B, 30);
      return B + "ms " + N;
    },
  };
  return P;
}
function mb({
  keyframes: e,
  velocity: t = 0,
  power: a = 0.8,
  timeConstant: i = 325,
  bounceDamping: o = 10,
  bounceStiffness: u = 500,
  modifyTarget: c,
  min: d,
  max: h,
  restDelta: m = 0.5,
  restSpeed: g,
}) {
  const y = e[0],
    b = { done: !1, value: y },
    x = (X) => (d !== void 0 && X < d) || (h !== void 0 && X > h),
    w = (X) =>
      d === void 0
        ? h
        : h === void 0 || Math.abs(d - X) < Math.abs(h - X)
        ? d
        : h;
  let S = a * t;
  const A = y + S,
    C = c === void 0 ? A : c(A);
  C !== A && (S = C - y);
  const O = (X) => -S * Math.exp(-X / i),
    M = (X) => C + O(X),
    P = (X) => {
      const Y = O(X),
        E = M(X);
      (b.done = Math.abs(Y) <= m), (b.value = b.done ? C : E);
    };
  let B, N;
  const q = (X) => {
    x(b.value) &&
      ((B = X),
      (N = xx({
        keyframes: [b.value, w(b.value)],
        velocity: Sx(M, X, b.value),
        damping: o,
        stiffness: u,
        restDelta: m,
        restSpeed: g,
      })));
  };
  return (
    q(0),
    {
      calculatedDuration: null,
      next: (X) => {
        let Y = !1;
        return (
          !N && B === void 0 && ((Y = !0), P(X), q(X)),
          B !== void 0 && X >= B ? N.next(X - B) : (!Y && P(X), b)
        );
      },
    }
  );
}
const r4 = hl(0.42, 0, 1, 1),
  wx = hl(0, 0, 0.58, 1),
  Tx = hl(0.42, 0, 0.58, 1),
  a4 = (e) => Array.isArray(e) && typeof e[0] != "number",
  i4 = {
    linear: bn,
    easeIn: r4,
    easeInOut: Tx,
    easeOut: wx,
    circIn: hp,
    circInOut: nx,
    circOut: tx,
    backIn: dp,
    backInOut: JS,
    backOut: WS,
    anticipate: ex,
  },
  pb = (e) => {
    if (op(e)) {
      SS(e.length === 4);
      const [t, a, i, o] = e;
      return hl(t, a, i, o);
    } else if (typeof e == "string") return i4[e];
    return e;
  };
function s4(e, t, a) {
  const i = [],
    o = a || bx,
    u = e.length - 1;
  for (let c = 0; c < u; c++) {
    let d = o(e[c], e[c + 1]);
    if (t) {
      const h = Array.isArray(t) ? t[c] || bn : t;
      d = ml(h, d);
    }
    i.push(d);
  }
  return i;
}
function o4(e, t, { clamp: a = !0, ease: i, mixer: o } = {}) {
  const u = e.length;
  if ((SS(u === t.length), u === 1)) return () => t[0];
  if (u === 2 && t[0] === t[1]) return () => t[1];
  const c = e[0] === e[1];
  e[0] > e[u - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const d = s4(t, i, o),
    h = d.length,
    m = (g) => {
      if (c && g < e[0]) return t[0];
      let y = 0;
      if (h > 1) for (; y < e.length - 2 && !(g < e[y + 1]); y++);
      const b = ps(e[y], e[y + 1], g);
      return d[y](b);
    };
  return a ? (g) => m(Xr(e[0], e[u - 1], g)) : m;
}
function l4(e, t) {
  const a = e[e.length - 1];
  for (let i = 1; i <= t; i++) {
    const o = ps(0, t, i);
    e.push(mt(a, 1, o));
  }
}
function u4(e) {
  const t = [0];
  return l4(t, e.length - 1), t;
}
function c4(e, t) {
  return e.map((a) => a * t);
}
function f4(e, t) {
  return e.map(() => t || Tx).splice(0, e.length - 1);
}
function yc({
  duration: e = 300,
  keyframes: t,
  times: a,
  ease: i = "easeInOut",
}) {
  const o = a4(i) ? i.map(pb) : pb(i),
    u = { done: !1, value: t[0] },
    c = c4(a && a.length === t.length ? a : u4(t), e),
    d = o4(c, t, { ease: Array.isArray(o) ? o : f4(t, o) });
  return {
    calculatedDuration: e,
    next: (h) => ((u.value = d(h)), (u.done = h >= e), u),
  };
}
const d4 = (e) => {
    const t = ({ timestamp: a }) => e(a);
    return {
      start: () => ot.update(t, !0),
      stop: () => Ra(t),
      now: () => (Gt.isProcessing ? Gt.timestamp : Sr.now()),
    };
  },
  h4 = { decay: mb, inertia: mb, tween: yc, keyframes: yc, spring: xx },
  m4 = (e) => e / 100;
class bp extends yx {
  constructor(t) {
    super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: h } = this.options;
        h && h();
      });
    const { name: a, motionValue: i, element: o, keyframes: u } = this.options,
      c = (o == null ? void 0 : o.KeyframeResolver) || yp,
      d = (h, m) => this.onKeyframesResolved(h, m);
    (this.resolver = new c(u, d, a, i, o)), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes)
        );
  }
  initPlayback(t) {
    const {
        type: a = "keyframes",
        repeat: i = 0,
        repeatDelay: o = 0,
        repeatType: u,
        velocity: c = 0,
      } = this.options,
      d = sp(a) ? a : h4[a] || yc;
    let h, m;
    d !== yc &&
      typeof t[0] != "number" &&
      ((h = ml(m4, bx(t[0], t[1]))), (t = [0, 100]));
    const g = d({ ...this.options, keyframes: t });
    u === "mirror" &&
      (m = d({ ...this.options, keyframes: [...t].reverse(), velocity: -c })),
      g.calculatedDuration === null && (g.calculatedDuration = VS(g));
    const { calculatedDuration: y } = g,
      b = y + o,
      x = b * (i + 1) - o;
    return {
      generator: g,
      mirroredGenerator: m,
      mapPercentToKeyframes: h,
      calculatedDuration: y,
      resolvedDuration: b,
      totalDuration: x,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, a = !1) {
    const { resolved: i } = this;
    if (!i) {
      const { keyframes: X } = this.options;
      return { done: !0, value: X[X.length - 1] };
    }
    const {
      finalKeyframe: o,
      generator: u,
      mirroredGenerator: c,
      mapPercentToKeyframes: d,
      keyframes: h,
      calculatedDuration: m,
      totalDuration: g,
      resolvedDuration: y,
    } = i;
    if (this.startTime === null) return u.next(0);
    const {
      delay: b,
      repeat: x,
      repeatType: w,
      repeatDelay: S,
      onUpdate: A,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - g / this.speed, this.startTime)),
      a
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const C = this.currentTime - b * (this.speed >= 0 ? 1 : -1),
      O = this.speed >= 0 ? C < 0 : C > g;
    (this.currentTime = Math.max(C, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = g);
    let M = this.currentTime,
      P = u;
    if (x) {
      const X = Math.min(this.currentTime, g) / y;
      let Y = Math.floor(X),
        E = X % 1;
      !E && X >= 1 && (E = 1),
        E === 1 && Y--,
        (Y = Math.min(Y, x + 1)),
        !!(Y % 2) &&
          (w === "reverse"
            ? ((E = 1 - E), S && (E -= S / y))
            : w === "mirror" && (P = c)),
        (M = Xr(0, 1, E) * y);
    }
    const B = O ? { done: !1, value: h[0] } : P.next(M);
    d && (B.value = d(B.value));
    let { done: N } = B;
    !O &&
      m !== null &&
      (N = this.speed >= 0 ? this.currentTime >= g : this.currentTime <= 0);
    const q =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && N));
    return (
      q && o !== void 0 && (B.value = kc(h, this.options, o)),
      A && A(B.value),
      q && this.finish(),
      B
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? Kr(t.calculatedDuration) : 0;
  }
  get time() {
    return Kr(this.currentTime);
  }
  set time(t) {
    (t = Gr(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const a = this.playbackSpeed !== t;
    (this.playbackSpeed = t), a && (this.time = Kr(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = d4, onPlay: a, startTime: i } = this.options;
    this.driver || (this.driver = t((u) => this.tick(u))), a && a();
    const o = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = o - this.holdTime)
      : this.startTime
      ? this.state === "finished" && (this.startTime = o)
      : (this.startTime = i ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const p4 = new Set(["opacity", "clipPath", "filter", "transform"]);
function g4(
  e,
  t,
  a,
  {
    delay: i = 0,
    duration: o = 300,
    repeat: u = 0,
    repeatType: c = "loop",
    ease: d = "easeInOut",
    times: h,
  } = {}
) {
  const m = { [t]: a };
  h && (m.offset = h);
  const g = qS(d, o);
  return (
    Array.isArray(g) && (m.easing = g),
    e.animate(m, {
      delay: i,
      duration: o,
      easing: Array.isArray(g) ? "linear" : g,
      fill: "both",
      iterations: u + 1,
      direction: c === "reverse" ? "alternate" : "normal",
    })
  );
}
const y4 = Fm(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  vc = 10,
  v4 = 2e4;
function b4(e) {
  return sp(e.type) || e.type === "spring" || !HS(e.ease);
}
function S4(e, t) {
  const a = new bp({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let i = { done: !1, value: e[0] };
  const o = [];
  let u = 0;
  for (; !i.done && u < v4; ) (i = a.sample(u)), o.push(i.value), (u += vc);
  return { times: void 0, keyframes: o, duration: u - vc, ease: "linear" };
}
const Ex = { anticipate: ex, backInOut: JS, circInOut: nx };
function x4(e) {
  return e in Ex;
}
class gb extends yx {
  constructor(t) {
    super(t);
    const { name: a, motionValue: i, element: o, keyframes: u } = this.options;
    (this.resolver = new gx(
      u,
      (c, d) => this.onKeyframesResolved(c, d),
      a,
      i,
      o
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, a) {
    let {
      duration: i = 300,
      times: o,
      ease: u,
      type: c,
      motionValue: d,
      name: h,
      startTime: m,
    } = this.options;
    if (!d.owner || !d.owner.current) return !1;
    if (
      (typeof u == "string" && pc() && x4(u) && (u = Ex[u]), b4(this.options))
    ) {
      const {
          onComplete: y,
          onUpdate: b,
          motionValue: x,
          element: w,
          ...S
        } = this.options,
        A = S4(t, S);
      (t = A.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (i = A.duration),
        (o = A.times),
        (u = A.ease),
        (c = "keyframes");
    }
    const g = g4(d.owner.current, h, t, {
      ...this.options,
      duration: i,
      times: o,
      ease: u,
    });
    return (
      (g.startTime = m ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Jv(g, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (g.onfinish = () => {
            const { onComplete: y } = this.options;
            d.set(kc(t, this.options, a)),
              y && y(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: g, duration: i, times: o, type: c, ease: u, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: a } = t;
    return Kr(a);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: a } = t;
    return Kr(a.currentTime || 0);
  }
  set time(t) {
    const { resolved: a } = this;
    if (!a) return;
    const { animation: i } = a;
    i.currentTime = Gr(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: a } = t;
    return a.playbackRate;
  }
  set speed(t) {
    const { resolved: a } = this;
    if (!a) return;
    const { animation: i } = a;
    i.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: a } = t;
    return a.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: a } = t;
    return a.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: a } = this;
      if (!a) return bn;
      const { animation: i } = a;
      Jv(i, t);
    }
    return bn;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: a } = t;
    a.playState === "finished" && this.updateFinishedPromise(), a.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: a } = t;
    a.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: a,
      keyframes: i,
      duration: o,
      type: u,
      ease: c,
      times: d,
    } = t;
    if (a.playState === "idle" || a.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: m,
          onUpdate: g,
          onComplete: y,
          element: b,
          ...x
        } = this.options,
        w = new bp({
          ...x,
          keyframes: i,
          duration: o,
          type: u,
          ease: c,
          times: d,
          isGenerator: !0,
        }),
        S = Gr(this.time);
      m.setWithVelocity(w.sample(S - vc).value, w.sample(S).value, vc);
    }
    const { onStop: h } = this.options;
    h && h(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: a,
      name: i,
      repeatDelay: o,
      repeatType: u,
      damping: c,
      type: d,
    } = t;
    if (!a || !a.owner || !(a.owner.current instanceof HTMLElement)) return !1;
    const { onUpdate: h, transformTemplate: m } = a.owner.getProps();
    return (
      y4() &&
      i &&
      p4.has(i) &&
      !h &&
      !m &&
      !o &&
      u !== "mirror" &&
      c !== 0 &&
      d !== "inertia"
    );
  }
}
const w4 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  T4 = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  E4 = { type: "keyframes", duration: 0.8 },
  C4 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  A4 = (e, { keyframes: t }) =>
    t.length > 2
      ? E4
      : yi.has(e)
      ? e.startsWith("scale")
        ? T4(t[1])
        : w4
      : C4;
function _4({
  when: e,
  delay: t,
  delayChildren: a,
  staggerChildren: i,
  staggerDirection: o,
  repeat: u,
  repeatType: c,
  repeatDelay: d,
  from: h,
  elapsed: m,
  ...g
}) {
  return !!Object.keys(g).length;
}
const Sp =
  (e, t, a, i = {}, o, u) =>
  (c) => {
    const d = ip(i, e) || {},
      h = d.delay || i.delay || 0;
    let { elapsed: m = 0 } = i;
    m = m - Gr(h);
    let g = {
      keyframes: Array.isArray(a) ? a : [null, a],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...d,
      delay: -m,
      onUpdate: (b) => {
        t.set(b), d.onUpdate && d.onUpdate(b);
      },
      onComplete: () => {
        c(), d.onComplete && d.onComplete();
      },
      name: e,
      motionValue: t,
      element: u ? void 0 : o,
    };
    _4(d) || (g = { ...g, ...A4(e, g) }),
      g.duration && (g.duration = Gr(g.duration)),
      g.repeatDelay && (g.repeatDelay = Gr(g.repeatDelay)),
      g.from !== void 0 && (g.keyframes[0] = g.from);
    let y = !1;
    if (
      ((g.type === !1 || (g.duration === 0 && !g.repeatDelay)) &&
        ((g.duration = 0), g.delay === 0 && (y = !0)),
      y && !u && t.get() !== void 0)
    ) {
      const b = kc(g.keyframes, d);
      if (b !== void 0)
        return (
          ot.update(() => {
            g.onUpdate(b), g.onComplete();
          }),
          new G_([])
        );
    }
    return !u && gb.supports(g) ? new gb(g) : new bp(g);
  };
function R4({ protectedKeys: e, needsAnimating: t }, a) {
  const i = e.hasOwnProperty(a) && t[a] !== !0;
  return (t[a] = !1), i;
}
function Cx(e, t, { delay: a = 0, transitionOverride: i, type: o } = {}) {
  var u;
  let { transition: c = e.getDefaultTransition(), transitionEnd: d, ...h } = t;
  i && (c = i);
  const m = [],
    g = o && e.animationState && e.animationState.getState()[o];
  for (const y in h) {
    const b = e.getValue(
        y,
        (u = e.latestValues[y]) !== null && u !== void 0 ? u : null
      ),
      x = h[y];
    if (x === void 0 || (g && R4(g, y))) continue;
    const w = { delay: a, ...ip(c || {}, y) };
    let S = !1;
    if (window.MotionHandoffAnimation) {
      const C = XS(e);
      if (C) {
        const O = window.MotionHandoffAnimation(C, y, ot);
        O !== null && ((w.startTime = O), (S = !0));
      }
    }
    Qh(e, y),
      b.start(
        Sp(y, b, x, e.shouldReduceMotion && GS.has(y) ? { type: !1 } : w, e, S)
      );
    const A = b.animation;
    A && m.push(A);
  }
  return (
    d &&
      Promise.all(m).then(() => {
        ot.update(() => {
          d && oR(e, d);
        });
      }),
    m
  );
}
function nm(e, t, a = {}) {
  var i;
  const o = el(
    e,
    t,
    a.type === "exit"
      ? (i = e.presenceContext) === null || i === void 0
        ? void 0
        : i.custom
      : void 0
  );
  let { transition: u = e.getDefaultTransition() || {} } = o || {};
  a.transitionOverride && (u = a.transitionOverride);
  const c = o ? () => Promise.all(Cx(e, o, a)) : () => Promise.resolve(),
    d =
      e.variantChildren && e.variantChildren.size
        ? (m = 0) => {
            const {
              delayChildren: g = 0,
              staggerChildren: y,
              staggerDirection: b,
            } = u;
            return O4(e, t, g + m, y, b, a);
          }
        : () => Promise.resolve(),
    { when: h } = u;
  if (h) {
    const [m, g] = h === "beforeChildren" ? [c, d] : [d, c];
    return m().then(() => g());
  } else return Promise.all([c(), d(a.delay)]);
}
function O4(e, t, a = 0, i = 0, o = 1, u) {
  const c = [],
    d = (e.variantChildren.size - 1) * i,
    h = o === 1 ? (m = 0) => m * i : (m = 0) => d - m * i;
  return (
    Array.from(e.variantChildren)
      .sort(N4)
      .forEach((m, g) => {
        m.notify("AnimationStart", t),
          c.push(
            nm(m, t, { ...u, delay: a + h(g) }).then(() =>
              m.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(c)
  );
}
function N4(e, t) {
  return e.sortNodePosition(t);
}
function D4(e, t, a = {}) {
  e.notify("AnimationStart", t);
  let i;
  if (Array.isArray(t)) {
    const o = t.map((u) => nm(e, u, a));
    i = Promise.all(o);
  } else if (typeof t == "string") i = nm(e, t, a);
  else {
    const o = typeof t == "function" ? el(e, t, a.custom) : t;
    i = Promise.all(Cx(e, o, a));
  }
  return i.then(() => {
    e.notify("AnimationComplete", t);
  });
}
function Ax(e, t) {
  if (!Array.isArray(t)) return !1;
  const a = t.length;
  if (a !== e.length) return !1;
  for (let i = 0; i < a; i++) if (t[i] !== e[i]) return !1;
  return !0;
}
const M4 = Gm.length;
function _x(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const a = e.parent ? _x(e.parent) || {} : {};
    return e.props.initial !== void 0 && (a.initial = e.props.initial), a;
  }
  const t = {};
  for (let a = 0; a < M4; a++) {
    const i = Gm[a],
      o = e.props[i];
    (Io(o) || o === !1) && (t[i] = o);
  }
  return t;
}
const k4 = [...Ym].reverse(),
  L4 = Ym.length;
function B4(e) {
  return (t) =>
    Promise.all(t.map(({ animation: a, options: i }) => D4(e, a, i)));
}
function U4(e) {
  let t = B4(e),
    a = yb(),
    i = !0;
  const o = (h) => (m, g) => {
    var y;
    const b = el(
      e,
      g,
      h === "exit"
        ? (y = e.presenceContext) === null || y === void 0
          ? void 0
          : y.custom
        : void 0
    );
    if (b) {
      const { transition: x, transitionEnd: w, ...S } = b;
      m = { ...m, ...S, ...w };
    }
    return m;
  };
  function u(h) {
    t = h(e);
  }
  function c(h) {
    const { props: m } = e,
      g = _x(e.parent) || {},
      y = [],
      b = new Set();
    let x = {},
      w = 1 / 0;
    for (let A = 0; A < L4; A++) {
      const C = k4[A],
        O = a[C],
        M = m[C] !== void 0 ? m[C] : g[C],
        P = Io(M),
        B = C === h ? O.isActive : null;
      B === !1 && (w = A);
      let N = M === g[C] && M !== m[C] && P;
      if (
        (N && i && e.manuallyAnimateOnMount && (N = !1),
        (O.protectedKeys = { ...x }),
        (!O.isActive && B === null) ||
          (!M && !O.prevProp) ||
          Dc(M) ||
          typeof M == "boolean")
      )
        continue;
      const q = z4(O.prevProp, M);
      let X = q || (C === h && O.isActive && !N && P) || (A > w && P),
        Y = !1;
      const E = Array.isArray(M) ? M : [M];
      let J = E.reduce(o(C), {});
      B === !1 && (J = {});
      const { prevResolvedValues: ce = {} } = O,
        ae = { ...ce, ...J },
        xe = (le) => {
          (X = !0),
            b.has(le) && ((Y = !0), b.delete(le)),
            (O.needsAnimating[le] = !0);
          const oe = e.getValue(le);
          oe && (oe.liveStyle = !1);
        };
      for (const le in ae) {
        const oe = J[le],
          Be = ce[le];
        if (x.hasOwnProperty(le)) continue;
        let k = !1;
        Gh(oe) && Gh(Be) ? (k = !Ax(oe, Be)) : (k = oe !== Be),
          k
            ? oe != null
              ? xe(le)
              : b.add(le)
            : oe !== void 0 && b.has(le)
            ? xe(le)
            : (O.protectedKeys[le] = !0);
      }
      (O.prevProp = M),
        (O.prevResolvedValues = J),
        O.isActive && (x = { ...x, ...J }),
        i && e.blockInitialAnimation && (X = !1),
        X &&
          (!(N && q) || Y) &&
          y.push(...E.map((le) => ({ animation: le, options: { type: C } })));
    }
    if (b.size) {
      const A = {};
      if (typeof m.initial != "boolean") {
        const C = el(e, Array.isArray(m.initial) ? m.initial[0] : m.initial);
        C && C.transition && (A.transition = C.transition);
      }
      b.forEach((C) => {
        const O = e.getBaseTarget(C),
          M = e.getValue(C);
        M && (M.liveStyle = !0), (A[C] = O ?? null);
      }),
        y.push({ animation: A });
    }
    let S = !!y.length;
    return (
      i &&
        (m.initial === !1 || m.initial === m.animate) &&
        !e.manuallyAnimateOnMount &&
        (S = !1),
      (i = !1),
      S ? t(y) : Promise.resolve()
    );
  }
  function d(h, m) {
    var g;
    if (a[h].isActive === m) return Promise.resolve();
    (g = e.variantChildren) === null ||
      g === void 0 ||
      g.forEach((b) => {
        var x;
        return (x = b.animationState) === null || x === void 0
          ? void 0
          : x.setActive(h, m);
      }),
      (a[h].isActive = m);
    const y = c(h);
    for (const b in a) a[b].protectedKeys = {};
    return y;
  }
  return {
    animateChanges: c,
    setActive: d,
    setAnimateFunction: u,
    getState: () => a,
    reset: () => {
      (a = yb()), (i = !0);
    },
  };
}
function z4(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Ax(t, e) : !1;
}
function ii(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function yb() {
  return {
    animate: ii(!0),
    whileInView: ii(),
    whileHover: ii(),
    whileTap: ii(),
    whileDrag: ii(),
    whileFocus: ii(),
    exit: ii(),
  };
}
class ka {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class P4 extends ka {
  constructor(t) {
    super(t), t.animationState || (t.animationState = U4(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Dc(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: a } = this.node.prevProps || {};
    t !== a && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let V4 = 0;
class j4 extends ka {
  constructor() {
    super(...arguments), (this.id = V4++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: a } = this.node.presenceContext,
      { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === i) return;
    const o = this.node.animationState.setActive("exit", !t);
    a &&
      !t &&
      o.then(() => {
        a(this.id);
      });
  }
  mount() {
    const { register: t, onExitComplete: a } = this.node.presenceContext || {};
    a && a(this.id), t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const H4 = { animation: { Feature: P4 }, exit: { Feature: j4 } };
function rl(e, t, a, i = { passive: !0 }) {
  return e.addEventListener(t, a, i), () => e.removeEventListener(t, a);
}
function pl(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const q4 = (e) => (t) => lp(t) && e(t, pl(t));
function ls(e, t, a, i) {
  return rl(e, t, q4(a), i);
}
function Rx({ top: e, left: t, right: a, bottom: i }) {
  return { x: { min: t, max: a }, y: { min: e, max: i } };
}
function $4({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function F4(e, t) {
  if (!t) return e;
  const a = t({ x: e.left, y: e.top }),
    i = t({ x: e.right, y: e.bottom });
  return { top: a.y, left: a.x, bottom: i.y, right: i.x };
}
const Ox = 1e-4,
  Y4 = 1 - Ox,
  G4 = 1 + Ox,
  Nx = 0.01,
  K4 = 0 - Nx,
  X4 = 0 + Nx;
function rn(e) {
  return e.max - e.min;
}
function Q4(e, t, a) {
  return Math.abs(e - t) <= a;
}
function vb(e, t, a, i = 0.5) {
  (e.origin = i),
    (e.originPoint = mt(t.min, t.max, e.origin)),
    (e.scale = rn(a) / rn(t)),
    (e.translate = mt(a.min, a.max, e.origin) - e.originPoint),
    ((e.scale >= Y4 && e.scale <= G4) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= K4 && e.translate <= X4) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function Go(e, t, a, i) {
  vb(e.x, t.x, a.x, i ? i.originX : void 0),
    vb(e.y, t.y, a.y, i ? i.originY : void 0);
}
function bb(e, t, a) {
  (e.min = a.min + t.min), (e.max = e.min + rn(t));
}
function Z4(e, t, a) {
  bb(e.x, t.x, a.x), bb(e.y, t.y, a.y);
}
function Sb(e, t, a) {
  (e.min = t.min - a.min), (e.max = e.min + rn(t));
}
function Ko(e, t, a) {
  Sb(e.x, t.x, a.x), Sb(e.y, t.y, a.y);
}
const xb = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  us = () => ({ x: xb(), y: xb() }),
  wb = () => ({ min: 0, max: 0 }),
  Ct = () => ({ x: wb(), y: wb() });
function jn(e) {
  return [e("x"), e("y")];
}
function Ch(e) {
  return e === void 0 || e === 1;
}
function rm({ scale: e, scaleX: t, scaleY: a }) {
  return !Ch(e) || !Ch(t) || !Ch(a);
}
function si(e) {
  return (
    rm(e) ||
    Dx(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Dx(e) {
  return Tb(e.x) || Tb(e.y);
}
function Tb(e) {
  return e && e !== "0%";
}
function bc(e, t, a) {
  const i = e - a,
    o = t * i;
  return a + o;
}
function Eb(e, t, a, i, o) {
  return o !== void 0 && (e = bc(e, o, i)), bc(e, a, i) + t;
}
function am(e, t = 0, a = 1, i, o) {
  (e.min = Eb(e.min, t, a, i, o)), (e.max = Eb(e.max, t, a, i, o));
}
function Mx(e, { x: t, y: a }) {
  am(e.x, t.translate, t.scale, t.originPoint),
    am(e.y, a.translate, a.scale, a.originPoint);
}
const Cb = 0.999999999999,
  Ab = 1.0000000000001;
function I4(e, t, a, i = !1) {
  const o = a.length;
  if (!o) return;
  t.x = t.y = 1;
  let u, c;
  for (let d = 0; d < o; d++) {
    (u = a[d]), (c = u.projectionDelta);
    const { visualElement: h } = u.options;
    (h && h.props.style && h.props.style.display === "contents") ||
      (i &&
        u.options.layoutScroll &&
        u.scroll &&
        u !== u.root &&
        fs(e, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
      c && ((t.x *= c.x.scale), (t.y *= c.y.scale), Mx(e, c)),
      i && si(u.latestValues) && fs(e, u.latestValues));
  }
  t.x < Ab && t.x > Cb && (t.x = 1), t.y < Ab && t.y > Cb && (t.y = 1);
}
function cs(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function _b(e, t, a, i, o = 0.5) {
  const u = mt(e.min, e.max, o);
  am(e, t, a, u, i);
}
function fs(e, t) {
  _b(e.x, t.x, t.scaleX, t.scale, t.originX),
    _b(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function kx(e, t) {
  return Rx(F4(e.getBoundingClientRect(), t));
}
function W4(e, t, a) {
  const i = kx(e, a),
    { scroll: o } = t;
  return o && (cs(i.x, o.offset.x), cs(i.y, o.offset.y)), i;
}
const Rb = (e, t) => Math.abs(e - t);
function J4(e, t) {
  const a = Rb(e.x, t.x),
    i = Rb(e.y, t.y);
  return Math.sqrt(a ** 2 + i ** 2);
}
class Lx {
  constructor(t, a, { transformPagePoint: i, dragSnapToOrigin: o = !1 } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const g = _h(this.lastMoveEventInfo, this.history),
          y = this.startEvent !== null,
          b = J4(g.offset, { x: 0, y: 0 }) >= 3;
        if (!y && !b) return;
        const { point: x } = g,
          { timestamp: w } = Gt;
        this.history.push({ ...x, timestamp: w });
        const { onStart: S, onMove: A } = this.handlers;
        y ||
          (S && S(this.lastMoveEvent, g),
          (this.startEvent = this.lastMoveEvent)),
          A && A(this.lastMoveEvent, g);
      }),
      (this.handlePointerMove = (g, y) => {
        if (
          g.currentTarget instanceof Element &&
          g.currentTarget.hasPointerCapture &&
          g.pointerId !== void 0
        )
          try {
            if (!g.currentTarget.hasPointerCapture(g.pointerId)) return;
          } catch {}
        (this.lastMoveEvent = g),
          (this.lastMoveEventInfo = Ah(y, this.transformPagePoint)),
          ot.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (g, y) => {
        Nb(g, "release"), this.end();
        const { onEnd: b, onSessionEnd: x, resumeAnimation: w } = this.handlers;
        if (
          (this.dragSnapToOrigin && w && w(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const S = _h(
          g.type === "pointercancel" || g.type === "lostpointercapture"
            ? this.lastMoveEventInfo
            : Ah(y, this.transformPagePoint),
          this.history
        );
        this.startEvent && b && b(g, S), x && x(g, S);
      }),
      !lp(t))
    )
      return;
    (this.dragSnapToOrigin = o),
      (this.handlers = a),
      (this.transformPagePoint = i);
    const u = pl(t),
      c = Ah(u, this.transformPagePoint),
      { point: d } = c,
      { timestamp: h } = Gt;
    this.history = [{ ...d, timestamp: h }];
    const { onSessionStart: m } = a;
    m && m(t, _h(c, this.history)),
      Nb(t, "set"),
      (this.removeListeners = ml(
        ls(t.currentTarget, "pointermove", this.handlePointerMove),
        ls(t.currentTarget, "pointerup", this.handlePointerUp),
        ls(t.currentTarget, "pointercancel", this.handlePointerUp),
        ls(t.currentTarget, "lostpointercapture", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Ra(this.updatePoint);
  }
}
function Ah(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Ob(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function _h({ point: e }, t) {
  return {
    point: e,
    delta: Ob(e, Bx(t)),
    offset: Ob(e, e5(t)),
    velocity: t5(t, 0.1),
  };
}
function e5(e) {
  return e[0];
}
function Bx(e) {
  return e[e.length - 1];
}
function t5(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let a = e.length - 1,
    i = null;
  const o = Bx(e);
  for (; a >= 0 && ((i = e[a]), !(o.timestamp - i.timestamp > Gr(t))); ) a--;
  if (!i) return { x: 0, y: 0 };
  const u = Kr(o.timestamp - i.timestamp);
  if (u === 0) return { x: 0, y: 0 };
  const c = { x: (o.x - i.x) / u, y: (o.y - i.y) / u };
  return c.x === 1 / 0 && (c.x = 0), c.y === 1 / 0 && (c.y = 0), c;
}
function Nb(e, t) {
  const a = `${t}PointerCapture`;
  if (
    e.currentTarget instanceof Element &&
    a in e.currentTarget &&
    e.pointerId !== void 0
  )
    try {
      e.currentTarget[a](e.pointerId);
    } catch {}
}
function n5(e, { min: t, max: a }, i) {
  return (
    t !== void 0 && e < t
      ? (e = i ? mt(t, e, i.min) : Math.max(e, t))
      : a !== void 0 && e > a && (e = i ? mt(a, e, i.max) : Math.min(e, a)),
    e
  );
}
function Db(e, t, a) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: a !== void 0 ? e.max + a - (e.max - e.min) : void 0,
  };
}
function r5(e, { top: t, left: a, bottom: i, right: o }) {
  return { x: Db(e.x, a, o), y: Db(e.y, t, i) };
}
function Mb(e, t) {
  let a = t.min - e.min,
    i = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([a, i] = [i, a]), { min: a, max: i };
}
function a5(e, t) {
  return { x: Mb(e.x, t.x), y: Mb(e.y, t.y) };
}
function i5(e, t) {
  let a = 0.5;
  const i = rn(e),
    o = rn(t);
  return (
    o > i
      ? (a = ps(t.min, t.max - i, e.min))
      : i > o && (a = ps(e.min, e.max - o, t.min)),
    Xr(0, 1, a)
  );
}
function s5(e, t) {
  const a = {};
  return (
    t.min !== void 0 && (a.min = t.min - e.min),
    t.max !== void 0 && (a.max = t.max - e.min),
    a
  );
}
const im = 0.35;
function o5(e = im) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = im),
    { x: kb(e, "left", "right"), y: kb(e, "top", "bottom") }
  );
}
function kb(e, t, a) {
  return { min: Lb(e, t), max: Lb(e, a) };
}
function Lb(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const l5 = new WeakMap();
class u5 {
  constructor(t) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Ct()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: a = !1 } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1) return;
    const o = (g) => {
        const { dragSnapToOrigin: y } = this.getProps();
        y ? this.pauseAnimation() : this.stopAnimation(),
          a && this.snapToCursor(pl(g).point);
      },
      u = (g, y) => {
        const { drag: b, dragPropagation: x, onDragStart: w } = this.getProps();
        if (
          b &&
          !x &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = nR(b)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          jn((A) => {
            let C = this.getAxisMotionValue(A).get() || 0;
            if (br.test(C)) {
              const { projection: O } = this.visualElement;
              if (O && O.layout) {
                const M = O.layout.layoutBox[A];
                M && (C = rn(M) * (parseFloat(C) / 100));
              }
            }
            this.originPoint[A] = C;
          }),
          w && ot.postRender(() => w(g, y)),
          Qh(this.visualElement, "transform");
        const { animationState: S } = this.visualElement;
        S && S.setActive("whileDrag", !0);
      },
      c = (g, y) => {
        const {
          dragPropagation: b,
          dragDirectionLock: x,
          onDirectionLock: w,
          onDrag: S,
        } = this.getProps();
        if (!b && !this.openDragLock) return;
        const { offset: A } = y;
        if (x && this.currentDirection === null) {
          (this.currentDirection = c5(A)),
            this.currentDirection !== null && w && w(this.currentDirection);
          return;
        }
        this.updateAxis("x", y.point, A),
          this.updateAxis("y", y.point, A),
          this.visualElement.render(),
          S && S(g, y);
      },
      d = (g, y) => this.stop(g, y),
      h = () =>
        jn((g) => {
          var y;
          return (
            this.getAnimationState(g) === "paused" &&
            ((y = this.getAxisMotionValue(g).animation) === null || y === void 0
              ? void 0
              : y.play())
          );
        }),
      { dragSnapToOrigin: m } = this.getProps();
    this.panSession = new Lx(
      t,
      {
        onSessionStart: o,
        onStart: u,
        onMove: c,
        onSessionEnd: d,
        resumeAnimation: h,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: m,
      }
    );
  }
  stop(t, a) {
    const i = this.isDragging;
    if ((this.cancel(), !i)) return;
    const { velocity: o } = a;
    this.startAnimation(o);
    const { onDragEnd: u } = this.getProps();
    u && ot.postRender(() => u(t, a));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: a } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: i } = this.getProps();
    !i &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      a && a.setActive("whileDrag", !1);
  }
  updateAxis(t, a, i) {
    const { drag: o } = this.getProps();
    if (!i || !Vu(t, o, this.currentDirection)) return;
    const u = this.getAxisMotionValue(t);
    let c = this.originPoint[t] + i[t];
    this.constraints &&
      this.constraints[t] &&
      (c = n5(c, this.constraints[t], this.elastic[t])),
      u.set(c);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: a, dragElastic: i } = this.getProps(),
      o =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      u = this.constraints;
    a && ss(a)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : a && o
      ? (this.constraints = r5(o.layoutBox, a))
      : (this.constraints = !1),
      (this.elastic = o5(i)),
      u !== this.constraints &&
        o &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        jn((c) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(c) &&
            (this.constraints[c] = s5(o.layoutBox[c], this.constraints[c]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: a } = this.getProps();
    if (!t || !ss(t)) return !1;
    const i = t.current,
      { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const u = W4(i, o.root, this.visualElement.getTransformPagePoint());
    let c = a5(o.layout.layoutBox, u);
    if (a) {
      const d = a($4(c));
      (this.hasMutatedConstraints = !!d), d && (c = Rx(d));
    }
    return c;
  }
  startAnimation(t) {
    const {
        drag: a,
        dragMomentum: i,
        dragElastic: o,
        dragTransition: u,
        dragSnapToOrigin: c,
        onDragTransitionEnd: d,
      } = this.getProps(),
      h = this.constraints || {},
      m = jn((g) => {
        if (!Vu(g, a, this.currentDirection)) return;
        let y = (h && h[g]) || {};
        c && (y = { min: 0, max: 0 });
        const b = o ? 200 : 1e6,
          x = o ? 40 : 1e7,
          w = {
            type: "inertia",
            velocity: i ? t[g] : 0,
            bounceStiffness: b,
            bounceDamping: x,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...u,
            ...y,
          };
        return this.startAxisValueAnimation(g, w);
      });
    return Promise.all(m).then(d);
  }
  startAxisValueAnimation(t, a) {
    const i = this.getAxisMotionValue(t);
    return (
      Qh(this.visualElement, t), i.start(Sp(t, i, 0, a, this.visualElement, !1))
    );
  }
  stopAnimation() {
    jn((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    jn((t) => {
      var a;
      return (a = this.getAxisMotionValue(t).animation) === null || a === void 0
        ? void 0
        : a.pause();
    });
  }
  getAnimationState(t) {
    var a;
    return (a = this.getAxisMotionValue(t).animation) === null || a === void 0
      ? void 0
      : a.state;
  }
  getAxisMotionValue(t) {
    const a = `_drag${t.toUpperCase()}`,
      i = this.visualElement.getProps(),
      o = i[a];
    return (
      o ||
      this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    jn((a) => {
      const { drag: i } = this.getProps();
      if (!Vu(a, i, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        u = this.getAxisMotionValue(a);
      if (o && o.layout) {
        const { min: c, max: d } = o.layout.layoutBox[a];
        u.set(t[a] - mt(c, d, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: a } = this.getProps(),
      { projection: i } = this.visualElement;
    if (!ss(a) || !i || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    jn((c) => {
      const d = this.getAxisMotionValue(c);
      if (d && this.constraints !== !1) {
        const h = d.get();
        o[c] = i5({ min: h, max: h }, this.constraints[c]);
      }
    });
    const { transformTemplate: u } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = u ? u({}, "") : "none"),
      i.root && i.root.updateScroll(),
      i.updateLayout(),
      this.resolveConstraints(),
      jn((c) => {
        if (!Vu(c, t, null)) return;
        const d = this.getAxisMotionValue(c),
          { min: h, max: m } = this.constraints[c];
        d.set(mt(h, m, o[c]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    l5.set(this.visualElement, this);
    const t = this.visualElement.current,
      a = ls(t, "pointerdown", (h) => {
        const { drag: m, dragListener: g = !0 } = this.getProps();
        m && g && this.start(h);
      }),
      i = () => {
        const { dragConstraints: h } = this.getProps();
        ss(h) && h.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: o } = this.visualElement,
      u = o.addEventListener("measure", i);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()),
      ot.read(i);
    const c = rl(window, "resize", () => this.scalePositionWithinConstraints()),
      d = o.addEventListener(
        "didUpdate",
        ({ delta: h, hasLayoutChanged: m }) => {
          this.isDragging &&
            m &&
            (jn((g) => {
              const y = this.getAxisMotionValue(g);
              y &&
                ((this.originPoint[g] += h[g].translate),
                y.set(y.get() + h[g].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      c(), a(), u(), d && d();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: a = !1,
        dragDirectionLock: i = !1,
        dragPropagation: o = !1,
        dragConstraints: u = !1,
        dragElastic: c = im,
        dragMomentum: d = !0,
      } = t;
    return {
      ...t,
      drag: a,
      dragDirectionLock: i,
      dragPropagation: o,
      dragConstraints: u,
      dragElastic: c,
      dragMomentum: d,
    };
  }
}
function Vu(e, t, a) {
  return (t === !0 || t === e) && (a === null || a === e);
}
function c5(e, t = 10) {
  let a = null;
  return Math.abs(e.y) > t ? (a = "y") : Math.abs(e.x) > t && (a = "x"), a;
}
class f5 extends ka {
  constructor(t) {
    super(t),
      (this.removeGroupControls = bn),
      (this.removeListeners = bn),
      (this.controls = new u5(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || bn);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Bb = (e) => (t, a) => {
  e && ot.postRender(() => e(t, a));
};
class d5 extends ka {
  constructor() {
    super(...arguments), (this.removePointerDownListener = bn);
  }
  onPointerDown(t) {
    this.session = new Lx(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: a,
      onPan: i,
      onPanEnd: o,
    } = this.node.getProps();
    return {
      onSessionStart: Bb(t),
      onStart: Bb(a),
      onMove: i,
      onEnd: (u, c) => {
        delete this.session, o && ot.postRender(() => o(u, c));
      },
    };
  }
  mount() {
    this.removePointerDownListener = ls(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Zu = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Ub(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Lo = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (Te.test(e)) e = parseFloat(e);
        else return e;
      const a = Ub(e, t.target.x),
        i = Ub(e, t.target.y);
      return `${a}% ${i}%`;
    },
  },
  h5 = {
    correct: (e, { treeScale: t, projectionDelta: a }) => {
      const i = e,
        o = Oa.parse(e);
      if (o.length > 5) return i;
      const u = Oa.createTransformer(e),
        c = typeof o[0] != "number" ? 1 : 0,
        d = a.x.scale * t.x,
        h = a.y.scale * t.y;
      (o[0 + c] /= d), (o[1 + c] /= h);
      const m = mt(d, h, 0.5);
      return (
        typeof o[2 + c] == "number" && (o[2 + c] /= m),
        typeof o[3 + c] == "number" && (o[3 + c] /= m),
        u(o)
      );
    },
  };
class m5 extends R.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: a,
        switchLayoutGroup: i,
        layoutId: o,
      } = this.props,
      { projection: u } = t;
    b_(p5),
      u &&
        (a.group && a.group.add(u),
        i && i.register && o && i.register(u),
        u.root.didUpdate(),
        u.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        u.setOptions({
          ...u.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Zu.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: a,
        visualElement: i,
        drag: o,
        isPresent: u,
      } = this.props,
      c = i.projection;
    return (
      c &&
        ((c.isPresent = u),
        o || t.layoutDependency !== a || a === void 0
          ? c.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== u &&
          (u
            ? c.promote()
            : c.relegate() ||
              ot.postRender(() => {
                const d = c.getStack();
                (!d || !d.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Xm.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: a,
        switchLayoutGroup: i,
      } = this.props,
      { projection: o } = t;
    o &&
      (o.scheduleCheckAfterUnmount(),
      a && a.group && a.group.remove(o),
      i && i.deregister && i.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Ux(e) {
  const [t, a] = ZA(),
    i = R.useContext(vS);
  return _(m5, {
    ...e,
    layoutGroup: i,
    switchLayoutGroup: R.useContext(AS),
    isPresent: t,
    safeToRemove: a,
  });
}
const p5 = {
  borderRadius: {
    ...Lo,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: Lo,
  borderTopRightRadius: Lo,
  borderBottomLeftRadius: Lo,
  borderBottomRightRadius: Lo,
  boxShadow: h5,
};
function g5(e, t, a) {
  const i = en(e) ? e : tl(e);
  return i.start(Sp("", i, t, a)), i.animation;
}
function y5(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const v5 = (e, t) => e.depth - t.depth;
class b5 {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    up(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    cp(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(v5),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function S5(e, t) {
  const a = Sr.now(),
    i = ({ timestamp: o }) => {
      const u = o - a;
      u >= t && (Ra(i), e(u - t));
    };
  return ot.read(i, !0), () => Ra(i);
}
const zx = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  x5 = zx.length,
  zb = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Pb = (e) => typeof e == "number" || Te.test(e);
function w5(e, t, a, i, o, u) {
  o
    ? ((e.opacity = mt(0, a.opacity !== void 0 ? a.opacity : 1, T5(i))),
      (e.opacityExit = mt(t.opacity !== void 0 ? t.opacity : 1, 0, E5(i))))
    : u &&
      (e.opacity = mt(
        t.opacity !== void 0 ? t.opacity : 1,
        a.opacity !== void 0 ? a.opacity : 1,
        i
      ));
  for (let c = 0; c < x5; c++) {
    const d = `border${zx[c]}Radius`;
    let h = Vb(t, d),
      m = Vb(a, d);
    if (h === void 0 && m === void 0) continue;
    h || (h = 0),
      m || (m = 0),
      h === 0 || m === 0 || Pb(h) === Pb(m)
        ? ((e[d] = Math.max(mt(zb(h), zb(m), i), 0)),
          (br.test(m) || br.test(h)) && (e[d] += "%"))
        : (e[d] = m);
  }
  (t.rotate || a.rotate) && (e.rotate = mt(t.rotate || 0, a.rotate || 0, i));
}
function Vb(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const T5 = Px(0, 0.5, tx),
  E5 = Px(0.5, 0.95, bn);
function Px(e, t, a) {
  return (i) => (i < e ? 0 : i > t ? 1 : a(ps(e, t, i)));
}
function jb(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Vn(e, t) {
  jb(e.x, t.x), jb(e.y, t.y);
}
function Hb(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function qb(e, t, a, i, o) {
  return (
    (e -= t), (e = bc(e, 1 / a, i)), o !== void 0 && (e = bc(e, 1 / o, i)), e
  );
}
function C5(e, t = 0, a = 1, i = 0.5, o, u = e, c = e) {
  if (
    (br.test(t) &&
      ((t = parseFloat(t)), (t = mt(c.min, c.max, t / 100) - c.min)),
    typeof t != "number")
  )
    return;
  let d = mt(u.min, u.max, i);
  e === u && (d -= t),
    (e.min = qb(e.min, t, a, d, o)),
    (e.max = qb(e.max, t, a, d, o));
}
function $b(e, t, [a, i, o], u, c) {
  C5(e, t[a], t[i], t[o], t.scale, u, c);
}
const A5 = ["x", "scaleX", "originX"],
  _5 = ["y", "scaleY", "originY"];
function Fb(e, t, a, i) {
  $b(e.x, t, A5, a ? a.x : void 0, i ? i.x : void 0),
    $b(e.y, t, _5, a ? a.y : void 0, i ? i.y : void 0);
}
function Yb(e) {
  return e.translate === 0 && e.scale === 1;
}
function Vx(e) {
  return Yb(e.x) && Yb(e.y);
}
function Gb(e, t) {
  return e.min === t.min && e.max === t.max;
}
function R5(e, t) {
  return Gb(e.x, t.x) && Gb(e.y, t.y);
}
function Kb(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function jx(e, t) {
  return Kb(e.x, t.x) && Kb(e.y, t.y);
}
function Xb(e) {
  return rn(e.x) / rn(e.y);
}
function Qb(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class O5 {
  constructor() {
    this.members = [];
  }
  add(t) {
    up(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (cp(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const a = this.members[this.members.length - 1];
      a && this.promote(a);
    }
  }
  relegate(t) {
    const a = this.members.findIndex((o) => t === o);
    if (a === 0) return !1;
    let i;
    for (let o = a; o >= 0; o--) {
      const u = this.members[o];
      if (u.isPresent !== !1) {
        i = u;
        break;
      }
    }
    return i ? (this.promote(i), !0) : !1;
  }
  promote(t, a) {
    const i = this.lead;
    if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
      i.instance && i.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = i),
        a && (t.resumeFrom.preserveOpacity = !0),
        i.snapshot &&
          ((t.snapshot = i.snapshot),
          (t.snapshot.latestValues = i.animationValues || i.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && i.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: a, resumingFrom: i } = t;
      a.onExitComplete && a.onExitComplete(),
        i && i.options.onExitComplete && i.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function N5(e, t, a) {
  let i = "";
  const o = e.x.translate / t.x,
    u = e.y.translate / t.y,
    c = (a == null ? void 0 : a.z) || 0;
  if (
    ((o || u || c) && (i = `translate3d(${o}px, ${u}px, ${c}px) `),
    (t.x !== 1 || t.y !== 1) && (i += `scale(${1 / t.x}, ${1 / t.y}) `),
    a)
  ) {
    const {
      transformPerspective: m,
      rotate: g,
      rotateX: y,
      rotateY: b,
      skewX: x,
      skewY: w,
    } = a;
    m && (i = `perspective(${m}px) ${i}`),
      g && (i += `rotate(${g}deg) `),
      y && (i += `rotateX(${y}deg) `),
      b && (i += `rotateY(${b}deg) `),
      x && (i += `skewX(${x}deg) `),
      w && (i += `skewY(${w}deg) `);
  }
  const d = e.x.scale * t.x,
    h = e.y.scale * t.y;
  return (d !== 1 || h !== 1) && (i += `scale(${d}, ${h})`), i || "none";
}
const Rh = ["", "X", "Y", "Z"],
  D5 = { visibility: "hidden" },
  Zb = 1e3;
let M5 = 0;
function Oh(e, t, a, i) {
  const { latestValues: o } = t;
  o[e] && ((a[e] = o[e]), t.setStaticValue(e, 0), i && (i[e] = 0));
}
function Hx(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const a = XS(t);
  if (window.MotionHasOptimisedAnimation(a, "transform")) {
    const { layout: o, layoutId: u } = e.options;
    window.MotionCancelOptimisedAnimation(a, "transform", ot, !(o || u));
  }
  const { parent: i } = e;
  i && !i.hasCheckedOptimisedAppear && Hx(i);
}
function qx({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: a,
  checkIsScrollRoot: i,
  resetTransform: o,
}) {
  return class {
    constructor(c = {}, d = t == null ? void 0 : t()) {
      (this.id = M5++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            this.nodes.forEach(B5),
            this.nodes.forEach(j5),
            this.nodes.forEach(H5),
            this.nodes.forEach(U5);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = c),
        (this.root = d ? d.root || d : this),
        (this.path = d ? [...d.path, d] : []),
        (this.parent = d),
        (this.depth = d ? d.depth + 1 : 0);
      for (let h = 0; h < this.path.length; h++)
        this.path[h].shouldResetTransform = !0;
      this.root === this && (this.nodes = new b5());
    }
    addEventListener(c, d) {
      return (
        this.eventHandlers.has(c) || this.eventHandlers.set(c, new fp()),
        this.eventHandlers.get(c).add(d)
      );
    }
    notifyListeners(c, ...d) {
      const h = this.eventHandlers.get(c);
      h && h.notify(...d);
    }
    hasListeners(c) {
      return this.eventHandlers.has(c);
    }
    mount(c, d = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = y5(c)), (this.instance = c);
      const { layoutId: h, layout: m, visualElement: g } = this.options;
      if (
        (g && !g.current && g.mount(c),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        d && (m || h) && (this.isLayoutDirty = !0),
        e)
      ) {
        let y;
        const b = () => (this.root.updateBlockedByResize = !1);
        e(c, () => {
          (this.root.updateBlockedByResize = !0),
            y && y(),
            (y = S5(b, 250)),
            Zu.hasAnimatedSinceResize &&
              ((Zu.hasAnimatedSinceResize = !1), this.nodes.forEach(Wb));
        });
      }
      h && this.root.registerSharedNode(h, this),
        this.options.animate !== !1 &&
          g &&
          (h || m) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: y,
              hasLayoutChanged: b,
              hasRelativeLayoutChanged: x,
              layout: w,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const S =
                  this.options.transition || g.getDefaultTransition() || G5,
                { onLayoutAnimationStart: A, onLayoutAnimationComplete: C } =
                  g.getProps(),
                O = !this.targetLayout || !jx(this.targetLayout, w),
                M = !b && x;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                M ||
                (b && (O || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(y, M);
                const P = { ...ip(S, "layout"), onPlay: A, onComplete: C };
                (g.shouldReduceMotion || this.options.layoutRoot) &&
                  ((P.delay = 0), (P.type = !1)),
                  this.startAnimation(P);
              } else
                b || Wb(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = w;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const c = this.getStack();
      c && c.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Ra(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(q5),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: c } = this.options;
      return c && c.getProps().transformTemplate;
    }
    willUpdate(c = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Hx(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let g = 0; g < this.path.length; g++) {
        const y = this.path[g];
        (y.shouldResetTransform = !0),
          y.updateScroll("snapshot"),
          y.options.layoutRoot && y.willUpdate(!1);
      }
      const { layoutId: d, layout: h } = this.options;
      if (d === void 0 && !h) return;
      const m = this.getTransformTemplate();
      (this.prevTransformTemplateValue = m ? m(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        c && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Ib);
        return;
      }
      this.isUpdating || this.nodes.forEach(P5),
        (this.isUpdating = !1),
        this.nodes.forEach(V5),
        this.nodes.forEach(k5),
        this.nodes.forEach(L5),
        this.clearAllSnapshots();
      const d = Sr.now();
      (Gt.delta = Xr(0, 1e3 / 60, d - Gt.timestamp)),
        (Gt.timestamp = d),
        (Gt.isProcessing = !0),
        Sh.update.process(Gt),
        Sh.preRender.process(Gt),
        Sh.render.process(Gt),
        (Gt.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Xm.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(z5), this.sharedNodes.forEach($5);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        ot.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ot.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !rn(this.snapshot.measuredBox.x) &&
          !rn(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let h = 0; h < this.path.length; h++) this.path[h].updateScroll();
      const c = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Ct()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: d } = this.options;
      d &&
        d.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          c ? c.layoutBox : void 0
        );
    }
    updateScroll(c = "measure") {
      let d = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === c &&
          (d = !1),
        d)
      ) {
        const h = i(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: c,
          isRoot: h,
          offset: a(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : h,
        };
      }
    }
    resetTransform() {
      if (!o) return;
      const c =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        d = this.projectionDelta && !Vx(this.projectionDelta),
        h = this.getTransformTemplate(),
        m = h ? h(this.latestValues, "") : void 0,
        g = m !== this.prevTransformTemplateValue;
      c &&
        (d || si(this.latestValues) || g) &&
        (o(this.instance, m),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(c = !0) {
      const d = this.measurePageBox();
      let h = this.removeElementScroll(d);
      return (
        c && (h = this.removeTransform(h)),
        K5(h),
        {
          animationId: this.root.animationId,
          measuredBox: d,
          layoutBox: h,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var c;
      const { visualElement: d } = this.options;
      if (!d) return Ct();
      const h = d.measureViewportBox();
      if (
        !(
          ((c = this.scroll) === null || c === void 0 ? void 0 : c.wasRoot) ||
          this.path.some(X5)
        )
      ) {
        const { scroll: g } = this.root;
        g && (cs(h.x, g.offset.x), cs(h.y, g.offset.y));
      }
      return h;
    }
    removeElementScroll(c) {
      var d;
      const h = Ct();
      if (
        (Vn(h, c), !((d = this.scroll) === null || d === void 0) && d.wasRoot)
      )
        return h;
      for (let m = 0; m < this.path.length; m++) {
        const g = this.path[m],
          { scroll: y, options: b } = g;
        g !== this.root &&
          y &&
          b.layoutScroll &&
          (y.wasRoot && Vn(h, c), cs(h.x, y.offset.x), cs(h.y, y.offset.y));
      }
      return h;
    }
    applyTransform(c, d = !1) {
      const h = Ct();
      Vn(h, c);
      for (let m = 0; m < this.path.length; m++) {
        const g = this.path[m];
        !d &&
          g.options.layoutScroll &&
          g.scroll &&
          g !== g.root &&
          fs(h, { x: -g.scroll.offset.x, y: -g.scroll.offset.y }),
          si(g.latestValues) && fs(h, g.latestValues);
      }
      return si(this.latestValues) && fs(h, this.latestValues), h;
    }
    removeTransform(c) {
      const d = Ct();
      Vn(d, c);
      for (let h = 0; h < this.path.length; h++) {
        const m = this.path[h];
        if (!m.instance || !si(m.latestValues)) continue;
        rm(m.latestValues) && m.updateSnapshot();
        const g = Ct(),
          y = m.measurePageBox();
        Vn(g, y),
          Fb(d, m.latestValues, m.snapshot ? m.snapshot.layoutBox : void 0, g);
      }
      return si(this.latestValues) && Fb(d, this.latestValues), d;
    }
    setTargetDelta(c) {
      (this.targetDelta = c),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(c) {
      this.options = {
        ...this.options,
        ...c,
        crossfade: c.crossfade !== void 0 ? c.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Gt.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(c = !1) {
      var d;
      const h = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = h.isSharedProjectionDirty);
      const m = !!this.resumingFrom || this !== h;
      if (
        !(
          c ||
          (m && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((d = this.parent) === null || d === void 0) &&
            d.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: y, layoutId: b } = this.options;
      if (!(!this.layout || !(y || b))) {
        if (
          ((this.resolvedRelativeTargetAt = Gt.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const x = this.getClosestProjectingParent();
          x && x.layout && this.animationProgress !== 1
            ? ((this.relativeParent = x),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Ct()),
              (this.relativeTargetOrigin = Ct()),
              Ko(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                x.layout.layoutBox
              ),
              Vn(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (
          !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = Ct()), (this.targetWithTransforms = Ct())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              Z4(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
            ? (this.resumingFrom
                ? (this.target = this.applyTransform(this.layout.layoutBox))
                : Vn(this.target, this.layout.layoutBox),
              Mx(this.target, this.targetDelta))
            : Vn(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget)
        ) {
          this.attemptToResolveRelativeTarget = !1;
          const x = this.getClosestProjectingParent();
          x &&
          !!x.resumingFrom == !!this.resumingFrom &&
          !x.options.layoutScroll &&
          x.target &&
          this.animationProgress !== 1
            ? ((this.relativeParent = x),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Ct()),
              (this.relativeTargetOrigin = Ct()),
              Ko(this.relativeTargetOrigin, this.target, x.target),
              Vn(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          rm(this.parent.latestValues) ||
          Dx(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var c;
      const d = this.getLead(),
        h = !!this.resumingFrom || this !== d;
      let m = !0;
      if (
        ((this.isProjectionDirty ||
          (!((c = this.parent) === null || c === void 0) &&
            c.isProjectionDirty)) &&
          (m = !1),
        h &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (m = !1),
        this.resolvedRelativeTargetAt === Gt.timestamp && (m = !1),
        m)
      )
        return;
      const { layout: g, layoutId: y } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(g || y))
      )
        return;
      Vn(this.layoutCorrected, this.layout.layoutBox);
      const b = this.treeScale.x,
        x = this.treeScale.y;
      I4(this.layoutCorrected, this.treeScale, this.path, h),
        d.layout &&
          !d.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((d.target = d.layout.layoutBox), (d.targetWithTransforms = Ct()));
      const { target: w } = d;
      if (!w) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Hb(this.prevProjectionDelta.x, this.projectionDelta.x),
          Hb(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Go(this.projectionDelta, this.layoutCorrected, w, this.latestValues),
        (this.treeScale.x !== b ||
          this.treeScale.y !== x ||
          !Qb(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Qb(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", w));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(c = !0) {
      var d;
      if (
        ((d = this.options.visualElement) === null ||
          d === void 0 ||
          d.scheduleRender(),
        c)
      ) {
        const h = this.getStack();
        h && h.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = us()),
        (this.projectionDelta = us()),
        (this.projectionDeltaWithTransform = us());
    }
    setAnimationOrigin(c, d = !1) {
      const h = this.snapshot,
        m = h ? h.latestValues : {},
        g = { ...this.latestValues },
        y = us();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !d);
      const b = Ct(),
        x = h ? h.source : void 0,
        w = this.layout ? this.layout.source : void 0,
        S = x !== w,
        A = this.getStack(),
        C = !A || A.members.length <= 1,
        O = !!(S && !C && this.options.crossfade === !0 && !this.path.some(Y5));
      this.animationProgress = 0;
      let M;
      (this.mixTargetDelta = (P) => {
        const B = P / 1e3;
        Jb(y.x, c.x, B),
          Jb(y.y, c.y, B),
          this.setTargetDelta(y),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Ko(b, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            F5(this.relativeTarget, this.relativeTargetOrigin, b, B),
            M && R5(this.relativeTarget, M) && (this.isProjectionDirty = !1),
            M || (M = Ct()),
            Vn(M, this.relativeTarget)),
          S &&
            ((this.animationValues = g), w5(g, m, this.latestValues, B, O, C)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = B);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(c) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Ra(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ot.update(() => {
          (Zu.hasAnimatedSinceResize = !0),
            (this.currentAnimation = g5(0, Zb, {
              ...c,
              onUpdate: (d) => {
                this.mixTargetDelta(d), c.onUpdate && c.onUpdate(d);
              },
              onStop: () => {},
              onComplete: () => {
                c.onComplete && c.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const c = this.getStack();
      c && c.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Zb),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const c = this.getLead();
      let {
        targetWithTransforms: d,
        target: h,
        layout: m,
        latestValues: g,
      } = c;
      if (!(!d || !h || !m)) {
        if (
          this !== c &&
          this.layout &&
          m &&
          $x(this.options.animationType, this.layout.layoutBox, m.layoutBox)
        ) {
          h = this.target || Ct();
          const y = rn(this.layout.layoutBox.x);
          (h.x.min = c.target.x.min), (h.x.max = h.x.min + y);
          const b = rn(this.layout.layoutBox.y);
          (h.y.min = c.target.y.min), (h.y.max = h.y.min + b);
        }
        Vn(d, h),
          fs(d, g),
          Go(this.projectionDeltaWithTransform, this.layoutCorrected, d, g);
      }
    }
    registerSharedNode(c, d) {
      this.sharedNodes.has(c) || this.sharedNodes.set(c, new O5()),
        this.sharedNodes.get(c).add(d);
      const m = d.options.initialPromotionConfig;
      d.promote({
        transition: m ? m.transition : void 0,
        preserveFollowOpacity:
          m && m.shouldPreserveFollowOpacity
            ? m.shouldPreserveFollowOpacity(d)
            : void 0,
      });
    }
    isLead() {
      const c = this.getStack();
      return c ? c.lead === this : !0;
    }
    getLead() {
      var c;
      const { layoutId: d } = this.options;
      return d
        ? ((c = this.getStack()) === null || c === void 0 ? void 0 : c.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var c;
      const { layoutId: d } = this.options;
      return d
        ? (c = this.getStack()) === null || c === void 0
          ? void 0
          : c.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: c } = this.options;
      if (c) return this.root.sharedNodes.get(c);
    }
    promote({ needsReset: c, transition: d, preserveFollowOpacity: h } = {}) {
      const m = this.getStack();
      m && m.promote(this, h),
        c && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        d && this.setOptions({ transition: d });
    }
    relegate() {
      const c = this.getStack();
      return c ? c.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: c } = this.options;
      if (!c) return;
      let d = !1;
      const { latestValues: h } = c;
      if (
        ((h.z ||
          h.rotate ||
          h.rotateX ||
          h.rotateY ||
          h.rotateZ ||
          h.skewX ||
          h.skewY) &&
          (d = !0),
        !d)
      )
        return;
      const m = {};
      h.z && Oh("z", c, m, this.animationValues);
      for (let g = 0; g < Rh.length; g++)
        Oh(`rotate${Rh[g]}`, c, m, this.animationValues),
          Oh(`skew${Rh[g]}`, c, m, this.animationValues);
      c.render();
      for (const g in m)
        c.setStaticValue(g, m[g]),
          this.animationValues && (this.animationValues[g] = m[g]);
      c.scheduleRender();
    }
    getProjectionStyles(c) {
      var d, h;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return D5;
      const m = { visibility: "" },
        g = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (m.opacity = ""),
          (m.pointerEvents = Xu(c == null ? void 0 : c.pointerEvents) || ""),
          (m.transform = g ? g(this.latestValues, "") : "none"),
          m
        );
      const y = this.getLead();
      if (!this.projectionDelta || !this.layout || !y.target) {
        const S = {};
        return (
          this.options.layoutId &&
            ((S.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (S.pointerEvents = Xu(c == null ? void 0 : c.pointerEvents) || "")),
          this.hasProjected &&
            !si(this.latestValues) &&
            ((S.transform = g ? g({}, "") : "none"), (this.hasProjected = !1)),
          S
        );
      }
      const b = y.animationValues || y.latestValues;
      this.applyTransformsToTarget(),
        (m.transform = N5(
          this.projectionDeltaWithTransform,
          this.treeScale,
          b
        )),
        g && (m.transform = g(b, m.transform));
      const { x, y: w } = this.projectionDelta;
      (m.transformOrigin = `${x.origin * 100}% ${w.origin * 100}% 0`),
        y.animationValues
          ? (m.opacity =
              y === this
                ? (h =
                    (d = b.opacity) !== null && d !== void 0
                      ? d
                      : this.latestValues.opacity) !== null && h !== void 0
                  ? h
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : b.opacityExit)
          : (m.opacity =
              y === this
                ? b.opacity !== void 0
                  ? b.opacity
                  : ""
                : b.opacityExit !== void 0
                ? b.opacityExit
                : 0);
      for (const S in Wo) {
        if (b[S] === void 0) continue;
        const { correct: A, applyTo: C, isCSSVariable: O } = Wo[S],
          M = m.transform === "none" ? b[S] : A(b[S], y);
        if (C) {
          const P = C.length;
          for (let B = 0; B < P; B++) m[C[B]] = M;
        } else
          O ? (this.options.visualElement.renderState.vars[S] = M) : (m[S] = M);
      }
      return (
        this.options.layoutId &&
          (m.pointerEvents =
            y === this
              ? Xu(c == null ? void 0 : c.pointerEvents) || ""
              : "none"),
        m
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((c) => {
        var d;
        return (d = c.currentAnimation) === null || d === void 0
          ? void 0
          : d.stop();
      }),
        this.root.nodes.forEach(Ib),
        this.root.sharedNodes.clear();
    }
  };
}
function k5(e) {
  e.updateLayout();
}
function L5(e) {
  var t;
  const a =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && a && e.hasListeners("didUpdate")) {
    const { layoutBox: i, measuredBox: o } = e.layout,
      { animationType: u } = e.options,
      c = a.source !== e.layout.source;
    u === "size"
      ? jn((y) => {
          const b = c ? a.measuredBox[y] : a.layoutBox[y],
            x = rn(b);
          (b.min = i[y].min), (b.max = b.min + x);
        })
      : $x(u, a.layoutBox, i) &&
        jn((y) => {
          const b = c ? a.measuredBox[y] : a.layoutBox[y],
            x = rn(i[y]);
          (b.max = b.min + x),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[y].max = e.relativeTarget[y].min + x));
        });
    const d = us();
    Go(d, i, a.layoutBox);
    const h = us();
    c ? Go(h, e.applyTransform(o, !0), a.measuredBox) : Go(h, i, a.layoutBox);
    const m = !Vx(d);
    let g = !1;
    if (!e.resumeFrom) {
      const y = e.getClosestProjectingParent();
      if (y && !y.resumeFrom) {
        const { snapshot: b, layout: x } = y;
        if (b && x) {
          const w = Ct();
          Ko(w, a.layoutBox, b.layoutBox);
          const S = Ct();
          Ko(S, i, x.layoutBox),
            jx(w, S) || (g = !0),
            y.options.layoutRoot &&
              ((e.relativeTarget = S),
              (e.relativeTargetOrigin = w),
              (e.relativeParent = y));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: i,
      snapshot: a,
      delta: h,
      layoutDelta: d,
      hasLayoutChanged: m,
      hasRelativeLayoutChanged: g,
    });
  } else if (e.isLead()) {
    const { onExitComplete: i } = e.options;
    i && i();
  }
  e.options.transition = void 0;
}
function B5(e) {
  e.parent &&
    (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty ||
      (e.isSharedProjectionDirty = !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function U5(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function z5(e) {
  e.clearSnapshot();
}
function Ib(e) {
  e.clearMeasurements();
}
function P5(e) {
  e.isLayoutDirty = !1;
}
function V5(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Wb(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function j5(e) {
  e.resolveTargetDelta();
}
function H5(e) {
  e.calcProjection();
}
function q5(e) {
  e.resetSkewAndRotation();
}
function $5(e) {
  e.removeLeadSnapshot();
}
function Jb(e, t, a) {
  (e.translate = mt(t.translate, 0, a)),
    (e.scale = mt(t.scale, 1, a)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function e1(e, t, a, i) {
  (e.min = mt(t.min, a.min, i)), (e.max = mt(t.max, a.max, i));
}
function F5(e, t, a, i) {
  e1(e.x, t.x, a.x, i), e1(e.y, t.y, a.y, i);
}
function Y5(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const G5 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  t1 = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  n1 = t1("applewebkit/") && !t1("chrome/") ? Math.round : bn;
function r1(e) {
  (e.min = n1(e.min)), (e.max = n1(e.max));
}
function K5(e) {
  r1(e.x), r1(e.y);
}
function $x(e, t, a) {
  return (
    e === "position" || (e === "preserve-aspect" && !Q4(Xb(t), Xb(a), 0.2))
  );
}
function X5(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const Q5 = qx({
    attachResizeListener: (e, t) => rl(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Nh = { current: void 0 },
  Fx = qx({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Nh.current) {
        const e = new Q5({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Nh.current = e);
      }
      return Nh.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  Z5 = {
    pan: { Feature: d5 },
    drag: { Feature: f5, ProjectionNode: Fx, MeasureLayout: Ux },
  };
function a1(e, t, a) {
  const { props: i } = e;
  e.animationState &&
    i.whileHover &&
    e.animationState.setActive("whileHover", a === "Start");
  const o = "onHover" + a,
    u = i[o];
  u && ot.postRender(() => u(t, pl(t)));
}
class I5 extends ka {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = Z_(
        t,
        (a, i) => (a1(this.node, i, "Start"), (o) => a1(this.node, o, "End"))
      ));
  }
  unmount() {}
}
class W5 extends ka {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = ml(
      rl(this.node.current, "focus", () => this.onFocus()),
      rl(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
function i1(e, t, a) {
  const { props: i } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState &&
    i.whileTap &&
    e.animationState.setActive("whileTap", a === "Start");
  const o = "onTap" + (a === "End" ? "" : a),
    u = i[o];
  u && ot.postRender(() => u(t, pl(t)));
}
class J5 extends ka {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = eR(
        t,
        (a, i) => (
          i1(this.node, i, "Start"),
          (o, { success: u }) => i1(this.node, o, u ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const sm = new WeakMap(),
  Dh = new WeakMap(),
  e3 = (e) => {
    const t = sm.get(e.target);
    t && t(e);
  },
  t3 = (e) => {
    e.forEach(e3);
  };
function n3({ root: e, ...t }) {
  const a = e || document;
  Dh.has(a) || Dh.set(a, {});
  const i = Dh.get(a),
    o = JSON.stringify(t);
  return i[o] || (i[o] = new IntersectionObserver(t3, { root: e, ...t })), i[o];
}
function r3(e, t, a) {
  const i = n3(t);
  return (
    sm.set(e, a),
    i.observe(e),
    () => {
      sm.delete(e), i.unobserve(e);
    }
  );
}
const a3 = { some: 0, all: 1 };
class i3 extends ka {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: a, margin: i, amount: o = "some", once: u } = t,
      c = {
        root: a ? a.current : void 0,
        rootMargin: i,
        threshold: typeof o == "number" ? o : a3[o],
      },
      d = (h) => {
        const { isIntersecting: m } = h;
        if (
          this.isInView === m ||
          ((this.isInView = m), u && !m && this.hasEnteredView)
        )
          return;
        m && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", m);
        const { onViewportEnter: g, onViewportLeave: y } = this.node.getProps(),
          b = m ? g : y;
        b && b(h);
      };
    return r3(this.node.current, c, d);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: a } = this.node;
    ["amount", "margin", "root"].some(s3(t, a)) && this.startObserver();
  }
  unmount() {}
}
function s3({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (a) => e[a] !== t[a];
}
const o3 = {
    inView: { Feature: i3 },
    tap: { Feature: J5 },
    focus: { Feature: W5 },
    hover: { Feature: I5 },
  },
  l3 = { layout: { ProjectionNode: Fx, MeasureLayout: Ux } },
  om = { current: null },
  Yx = { current: !1 };
function u3() {
  if (((Yx.current = !0), !!$m))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (om.current = e.matches);
      e.addListener(t), t();
    } else om.current = !1;
}
const c3 = [...px, Wt, Oa],
  f3 = (e) => c3.find(mx(e)),
  d3 = new WeakMap();
function h3(e, t, a) {
  for (const i in t) {
    const o = t[i],
      u = a[i];
    if (en(o)) e.addValue(i, o);
    else if (en(u)) e.addValue(i, tl(o, { owner: e }));
    else if (u !== o)
      if (e.hasValue(i)) {
        const c = e.getValue(i);
        c.liveStyle === !0 ? c.jump(o) : c.hasAnimated || c.set(o);
      } else {
        const c = e.getStaticValue(i);
        e.addValue(i, tl(c !== void 0 ? c : o, { owner: e }));
      }
  }
  for (const i in a) t[i] === void 0 && e.removeValue(i);
  return t;
}
const s1 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class m3 {
  scrapeMotionValuesFromProps(t, a, i) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: a,
      presenceContext: i,
      reducedMotionConfig: o,
      blockInitialAnimation: u,
      visualState: c,
    },
    d = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = yp),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const x = Sr.now();
        this.renderScheduledAt < x &&
          ((this.renderScheduledAt = x), ot.render(this.render, !1, !0));
      });
    const { latestValues: h, renderState: m, onUpdate: g } = c;
    (this.onUpdate = g),
      (this.latestValues = h),
      (this.baseTarget = { ...h }),
      (this.initialValues = a.initial ? { ...h } : {}),
      (this.renderState = m),
      (this.parent = t),
      (this.props = a),
      (this.presenceContext = i),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.options = d),
      (this.blockInitialAnimation = !!u),
      (this.isControllingVariants = Mc(a)),
      (this.isVariantNode = ES(a)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: y, ...b } = this.scrapeMotionValuesFromProps(
      a,
      {},
      this
    );
    for (const x in b) {
      const w = b[x];
      h[x] !== void 0 && en(w) && w.set(h[x], !1);
    }
  }
  mount(t) {
    (this.current = t),
      d3.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((a, i) => this.bindToMotionValue(i, a)),
      Yx.current || u3(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : om.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(),
      Ra(this.notifyUpdate),
      Ra(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const a = this.features[t];
      a && (a.unmount(), (a.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, a) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const i = yi.has(t);
    i && this.onBindTransform && this.onBindTransform();
    const o = a.on("change", (d) => {
        (this.latestValues[t] = d),
          this.props.onUpdate && ot.preRender(this.notifyUpdate),
          i && this.projection && (this.projection.isTransformDirty = !0);
      }),
      u = a.on("renderRequest", this.scheduleRender);
    let c;
    window.MotionCheckAppearSync &&
      (c = window.MotionCheckAppearSync(this, t, a)),
      this.valueSubscriptions.set(t, () => {
        o(), u(), c && c(), a.owner && a.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in gs) {
      const a = gs[t];
      if (!a) continue;
      const { isEnabled: i, Feature: o } = a;
      if (
        (!this.features[t] &&
          o &&
          i(this.props) &&
          (this.features[t] = new o(this)),
        this.features[t])
      ) {
        const u = this.features[t];
        u.isMounted ? u.update() : (u.mount(), (u.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Ct();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, a) {
    this.latestValues[t] = a;
  }
  update(t, a) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = a);
    for (let i = 0; i < s1.length; i++) {
      const o = s1[i];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](),
        delete this.propEventSubscriptions[o]);
      const u = "on" + o,
        c = t[u];
      c && (this.propEventSubscriptions[o] = this.on(o, c));
    }
    (this.prevMotionValues = h3(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue(),
      this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(t) {
    const a = this.getClosestVariantNode();
    if (a)
      return (
        a.variantChildren && a.variantChildren.add(t),
        () => a.variantChildren.delete(t)
      );
  }
  addValue(t, a) {
    const i = this.values.get(t);
    a !== i &&
      (i && this.removeValue(t),
      this.bindToMotionValue(t, a),
      this.values.set(t, a),
      (this.latestValues[t] = a.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const a = this.valueSubscriptions.get(t);
    a && (a(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, a) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let i = this.values.get(t);
    return (
      i === void 0 &&
        a !== void 0 &&
        ((i = tl(a === null ? void 0 : a, { owner: this })),
        this.addValue(t, i)),
      i
    );
  }
  readValue(t, a) {
    var i;
    let o =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (i = this.getBaseTargetFromProps(this.props, t)) !== null &&
          i !== void 0
        ? i
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      o != null &&
        (typeof o == "string" && (dx(o) || rx(o))
          ? (o = parseFloat(o))
          : !f3(o) && Oa.test(a) && (o = ux(t, a)),
        this.setBaseTarget(t, en(o) ? o.get() : o)),
      en(o) ? o.get() : o
    );
  }
  setBaseTarget(t, a) {
    this.baseTarget[t] = a;
  }
  getBaseTarget(t) {
    var a;
    const { initial: i } = this.props;
    let o;
    if (typeof i == "string" || typeof i == "object") {
      const c = rp(
        this.props,
        i,
        (a = this.presenceContext) === null || a === void 0 ? void 0 : a.custom
      );
      c && (o = c[t]);
    }
    if (i && o !== void 0) return o;
    const u = this.getBaseTargetFromProps(this.props, t);
    return u !== void 0 && !en(u)
      ? u
      : this.initialValues[t] !== void 0 && o === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, a) {
    return this.events[t] || (this.events[t] = new fp()), this.events[t].add(a);
  }
  notify(t, ...a) {
    this.events[t] && this.events[t].notify(...a);
  }
}
class Gx extends m3 {
  constructor() {
    super(...arguments), (this.KeyframeResolver = gx);
  }
  sortInstanceNodePosition(t, a) {
    return t.compareDocumentPosition(a) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, a) {
    return t.style ? t.style[a] : void 0;
  }
  removeValueFromRenderState(t, { vars: a, style: i }) {
    delete a[t], delete i[t];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    en(t) &&
      (this.childSubscription = t.on("change", (a) => {
        this.current && (this.current.textContent = `${a}`);
      }));
  }
}
function p3(e) {
  return window.getComputedStyle(e);
}
class g3 extends Gx {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = BS);
  }
  readValueFromInstance(t, a) {
    if (yi.has(a)) {
      const i = gp(a);
      return (i && i.default) || 0;
    } else {
      const i = p3(t),
        o = (Qm(a) ? i.getPropertyValue(a) : i[a]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: a }) {
    return kx(t, a);
  }
  build(t, a, i) {
    Wm(t, a, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, a, i) {
    return ap(t, a, i);
  }
}
class y3 extends Gx {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Ct),
      (this.updateDimensions = () => {
        this.current &&
          !this.renderState.dimensions &&
          LS(this.current, this.renderState);
      });
  }
  getBaseTargetFromProps(t, a) {
    return t[a];
  }
  readValueFromInstance(t, a) {
    if (yi.has(a)) {
      const i = gp(a);
      return (i && i.default) || 0;
    }
    return (a = US.has(a) ? a : Km(a)), t.getAttribute(a);
  }
  scrapeMotionValuesFromProps(t, a, i) {
    return PS(t, a, i);
  }
  onBindTransform() {
    this.current &&
      !this.renderState.dimensions &&
      ot.postRender(this.updateDimensions);
  }
  build(t, a, i) {
    tp(t, a, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(t, a, i, o) {
    zS(t, a, i, o);
  }
  mount(t) {
    (this.isSVGTag = np(t.tagName)), super.mount(t);
  }
}
const v3 = (e, t) =>
    ep(e) ? new y3(t) : new g3(t, { allowProjection: e !== R.Fragment }),
  b3 = $_({ ...H4, ...o3, ...Z5, ...l3 }, v3),
  Ae = i_(b3),
  S3 = () => {
    const e = "rgb(0, 85, 255)",
      t = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
      },
      a = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
      },
      i = {
        initial: { scale: 1 },
        hover: { scale: 1.2, rotate: 5, transition: { duration: 0.3 } },
      },
      o = { initial: { x: 0 }, hover: { x: 5, transition: { duration: 0.2 } } };
    return K("footer", {
      className:
        " bg-black text-white py-12 px-6 md:px-20 relative overflow-hidden",
      children: [
        _("div", {
          className: "absolute inset-0 overflow-hidden",
          children: [...Array(6)].map((u, c) =>
            _(
              Ae.div,
              {
                className: "absolute rounded-full bg-opacity-10",
                style: {
                  width: `${Math.random() * 300 + 100}px`,
                  height: `${Math.random() * 300 + 100}px`,
                  filter: "blur(80px)",
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                },
                animate: {
                  x: [0, Math.random() * 40 - 20],
                  y: [0, Math.random() * 40 - 20],
                },
                transition: {
                  duration: Math.random() * 10 + 10,
                  repeat: 1 / 0,
                  repeatType: "reverse",
                },
              },
              c
            )
          ),
        }),
        K(Ae.div, {
          className: "relative z-10",
          initial: "hidden",
          animate: "visible",
          variants: t,
          children: [
            K("div", {
              className:
                "flex flex-col md:flex-row justify-between gap-12 mb-16",
              children: [
                K(Ae.div, {
                  className: "md:w-1/3",
                  variants: a,
                  children: [
                    K(Ae.div, {
                      className: "flex items-center mb-4",
                      initial: { x: -20, opacity: 0 },
                      animate: { x: 0, opacity: 1 },
                      transition: { duration: 0.6 },
                      children: [
                        _(Ae.div, {
                          className:
                            "w-10 h-10 rounded-lg flex items-center justify-center mr-3",
                          style: { backgroundColor: e },
                          whileHover: { rotate: 10, scale: 1.1 },
                          transition: { type: "spring", stiffness: 300 },
                          children: _("span", {
                            className: "text-lg font-bold",
                            children: "E",
                          }),
                        }),
                        K("h1", {
                          className: "text-2xl font-bold",
                          children: [
                            _("span", {
                              className: "text-white",
                              children: "Edu",
                            }),
                            _("span", { style: { color: e }, children: "Ved" }),
                          ],
                        }),
                      ],
                    }),
                    _("p", {
                      className: "text-gray-300 leading-relaxed",
                      children:
                        "Simplifying learning with the best educational resources for students at every stage of their journey.",
                    }),
                    _(Ae.div, {
                      className: "mt-6 flex gap-4 text-sm text-gray-300",
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      transition: { delay: 0.8, duration: 0.6 },
                      children: ["Learn", "Grow", "Succeed"].map((u, c) =>
                        K(
                          Ae.div,
                          {
                            className: "flex items-center gap-2",
                            whileHover: { scale: 1.05 },
                            children: [
                              _(Ae.span, {
                                className: "h-1 w-1 rounded-full",
                                style: { backgroundColor: e },
                                animate: { scale: [1, 1.5, 1] },
                                transition: { duration: 2, repeat: 1 / 0 },
                              }),
                              _("span", { children: u }),
                            ],
                          },
                          c
                        )
                      ),
                    }),
                  ],
                }),
                K(Ae.div, {
                  className: "md:w-1/4",
                  variants: a,
                  children: [
                    K("h2", {
                      className:
                        "text-lg font-semibold mb-6 relative inline-block",
                      children: [
                        "Quick Links",
                        _(Ae.span, {
                          className: "absolute -bottom-2 left-0 h-1",
                          style: { backgroundColor: e },
                          initial: { width: 0 },
                          animate: { width: "60%" },
                          transition: { delay: 0.5, duration: 0.6 },
                        }),
                      ],
                    }),
                    _("ul", {
                      className: "space-y-3 text-gray-300",
                      children: [
                        { name: "Home", path: "/" },
                        { name: "Study Material", path: "/study-material" },
                        { name: "Books", path: "/books" },
                        { name: "About", path: "/about" },
                        { name: "Contact", path: "/contact" },
                      ].map((u, c) =>
                        _(
                          Ae.li,
                          {
                            variants: a,
                            children: K(Ae.a, {
                              href: u.path,
                              className:
                                "flex items-center hover:text-white transition-colors duration-300",
                              whileHover: "hover",
                              initial: "initial",
                              variants: o,
                              children: [
                                _(Ae.span, {
                                  className: "w-0 h-px mr-2 opacity-0",
                                  style: { backgroundColor: e },
                                  animate: { opacity: 1 },
                                  whileHover: { width: "12px", opacity: 1 },
                                  transition: { duration: 0.3 },
                                }),
                                u.name,
                              ],
                            }),
                          },
                          c
                        )
                      ),
                    }),
                  ],
                }),
                K(Ae.div, {
                  className: "md:w-1/3",
                  variants: a,
                  children: [
                    K("h2", {
                      className:
                        "text-lg font-semibold mb-6 relative inline-block",
                      children: [
                        "Connect With Us",
                        _(Ae.span, {
                          className: "absolute -bottom-2 left-0 h-1",
                          style: { backgroundColor: e },
                          initial: { width: 0 },
                          animate: { width: "60%" },
                          transition: { delay: 0.5, duration: 0.6 },
                        }),
                      ],
                    }),
                    _("p", {
                      className: "text-gray-300 mb-4",
                      children: "Have questions? Reach out to us:",
                    }),
                    _(Ae.a, {
                      href: "mailto:support@eduved.com",
                      className:
                        "inline-block px-4 py-2 rounded-lg text-gray-200 mb-6",
                      style: { backgroundColor: "rgba(0, 85, 255, 0.2)" },
                      whileHover: {
                        backgroundColor: "rgba(0, 85, 255, 0.4)",
                        scale: 1.05,
                      },
                      transition: { duration: 0.3 },
                      children: "support@eduved.com",
                    }),
                    _(Ae.div, {
                      className: "flex gap-4 mt-3",
                      children: [
                        { icon: _(FA, {}), name: "Facebook" },
                        { icon: _(KA, {}), name: "Twitter" },
                        { icon: _(GA, {}), name: "LinkedIn" },
                        { icon: _(YA, {}), name: "Instagram" },
                        { icon: _(XA, {}), name: "YouTube" },
                      ].map((u, c) =>
                        _(
                          Ae.a,
                          {
                            href: "#",
                            "aria-label": u.name,
                            className:
                              "w-10 h-10 rounded-full flex items-center justify-center text-gray-300",
                            style: { backgroundColor: "rgba(0, 85, 255, 0.2)" },
                            variants: i,
                            whileHover: "hover",
                            initial: "initial",
                            children: u.icon,
                          },
                          c
                        )
                      ),
                    }),
                  ],
                }),
              ],
            }),
            _(Ae.div, {
              className: "py-6 px-8 rounded-xl mb-12",
              style: { backgroundColor: "rgba(0, 85, 255, 0.1)" },
              variants: a,
              initial: { y: 30, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { delay: 0.3, duration: 0.6 },
              children: K("div", {
                className:
                  "flex flex-col md:flex-row items-center justify-between gap-6",
                children: [
                  K("div", {
                    children: [
                      _("h3", {
                        className: "text-lg font-semibold",
                        children: "Subscribe to our newsletter",
                      }),
                      _("p", {
                        className: "text-gray-300 text-sm",
                        children:
                          "Get weekly updates on new resources and special offers",
                      }),
                    ],
                  }),
                  K(Ae.div, {
                    className: "flex w-full md:w-auto",
                    whileHover: { scale: 1.02 },
                    children: [
                      _("input", {
                        type: "email",
                        placeholder: "Your email address",
                        className:
                          "px-4 py-2 bg-black bg-opacity-30 rounded-l-lg focus:outline-none text-white w-full md:w-64",
                      }),
                      _(Ae.button, {
                        className:
                          "px-4 py-2 rounded-r-lg font-medium text-white",
                        style: { backgroundColor: e },
                        whileHover: { backgroundColor: "rgb(0, 65, 195)" },
                        whileTap: { scale: 0.95 },
                        children: "Subscribe",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            K(Ae.div, {
              className:
                "border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm",
              variants: a,
              children: [
                K("div", {
                  children: [
                    "© ",
                    new Date().getFullYear(),
                    " EduVed. All rights reserved.",
                  ],
                }),
                _("div", {
                  className: "flex gap-6 mt-4 md:mt-0",
                  children: [
                    "Privacy Policy",
                    "Terms of Service",
                    "Sitemap",
                  ].map((u, c) =>
                    _(
                      Ae.a,
                      {
                        href: `/${u.toLowerCase().replace(/\s+/g, "-")}`,
                        className:
                          "hover:text-white transition-colors duration-300",
                        whileHover: { color: e },
                        children: u,
                      },
                      c
                    )
                  ),
                }),
              ],
            }),
          ],
        }),
        K(Ae.div, {
          className: "text-center text-gray-400 text-sm",
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 0.4, duration: 0.6 },
          children: [
            "© ",
            new Date().getFullYear(),
            " EduVed. All rights reserved. | Made with 💙 by EduVed Team.",
          ],
        }),
      ],
    });
  };
function Kx() {
  return K("div", {
    className: "layout",
    children: [
      _("div", { className: "navbar", children: _($A, {}) }),
      _("div", { className: "content", children: _(KC, {}) }),
      _("div", { className: "footer ", children: _(S3, {}) }),
    ],
  });
}
function x3() {
  const { currentUser: e } = R.useContext(Ts);
  return e ? _(Kx, {}) : _(GC, { to: "/" });
}
function Xx(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: w3 } = Object.prototype,
  { getPrototypeOf: xp } = Object,
  Lc = ((e) => (t) => {
    const a = w3.call(t);
    return e[a] || (e[a] = a.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  ar = (e) => ((e = e.toLowerCase()), (t) => Lc(t) === e),
  Bc = (e) => (t) => typeof t === e,
  { isArray: As } = Array,
  al = Bc("undefined");
function T3(e) {
  return (
    e !== null &&
    !al(e) &&
    e.constructor !== null &&
    !al(e.constructor) &&
    Sn(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Qx = ar("ArrayBuffer");
function E3(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Qx(e.buffer)),
    t
  );
}
const C3 = Bc("string"),
  Sn = Bc("function"),
  Zx = Bc("number"),
  Uc = (e) => e !== null && typeof e == "object",
  A3 = (e) => e === !0 || e === !1,
  Iu = (e) => {
    if (Lc(e) !== "object") return !1;
    const t = xp(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  _3 = ar("Date"),
  R3 = ar("File"),
  O3 = ar("Blob"),
  N3 = ar("FileList"),
  D3 = (e) => Uc(e) && Sn(e.pipe),
  M3 = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Sn(e.append) &&
          ((t = Lc(e)) === "formdata" ||
            (t === "object" &&
              Sn(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  k3 = ar("URLSearchParams"),
  [L3, B3, U3, z3] = ["ReadableStream", "Request", "Response", "Headers"].map(
    ar
  ),
  P3 = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function gl(e, t, { allOwnKeys: a = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let i, o;
  if ((typeof e != "object" && (e = [e]), As(e)))
    for (i = 0, o = e.length; i < o; i++) t.call(null, e[i], i, e);
  else {
    const u = a ? Object.getOwnPropertyNames(e) : Object.keys(e),
      c = u.length;
    let d;
    for (i = 0; i < c; i++) (d = u[i]), t.call(null, e[d], d, e);
  }
}
function Ix(e, t) {
  t = t.toLowerCase();
  const a = Object.keys(e);
  let i = a.length,
    o;
  for (; i-- > 0; ) if (((o = a[i]), t === o.toLowerCase())) return o;
  return null;
}
const ci =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Wx = (e) => !al(e) && e !== ci;
function lm() {
  const { caseless: e } = (Wx(this) && this) || {},
    t = {},
    a = (i, o) => {
      const u = (e && Ix(t, o)) || o;
      Iu(t[u]) && Iu(i)
        ? (t[u] = lm(t[u], i))
        : Iu(i)
        ? (t[u] = lm({}, i))
        : As(i)
        ? (t[u] = i.slice())
        : (t[u] = i);
    };
  for (let i = 0, o = arguments.length; i < o; i++)
    arguments[i] && gl(arguments[i], a);
  return t;
}
const V3 = (e, t, a, { allOwnKeys: i } = {}) => (
    gl(
      t,
      (o, u) => {
        a && Sn(o) ? (e[u] = Xx(o, a)) : (e[u] = o);
      },
      { allOwnKeys: i }
    ),
    e
  ),
  j3 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  H3 = (e, t, a, i) => {
    (e.prototype = Object.create(t.prototype, i)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      a && Object.assign(e.prototype, a);
  },
  q3 = (e, t, a, i) => {
    let o, u, c;
    const d = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), u = o.length; u-- > 0; )
        (c = o[u]), (!i || i(c, e, t)) && !d[c] && ((t[c] = e[c]), (d[c] = !0));
      e = a !== !1 && xp(e);
    } while (e && (!a || a(e, t)) && e !== Object.prototype);
    return t;
  },
  $3 = (e, t, a) => {
    (e = String(e)),
      (a === void 0 || a > e.length) && (a = e.length),
      (a -= t.length);
    const i = e.indexOf(t, a);
    return i !== -1 && i === a;
  },
  F3 = (e) => {
    if (!e) return null;
    if (As(e)) return e;
    let t = e.length;
    if (!Zx(t)) return null;
    const a = new Array(t);
    for (; t-- > 0; ) a[t] = e[t];
    return a;
  },
  Y3 = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && xp(Uint8Array)),
  G3 = (e, t) => {
    const i = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = i.next()) && !o.done; ) {
      const u = o.value;
      t.call(e, u[0], u[1]);
    }
  },
  K3 = (e, t) => {
    let a;
    const i = [];
    for (; (a = e.exec(t)) !== null; ) i.push(a);
    return i;
  },
  X3 = ar("HTMLFormElement"),
  Q3 = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (a, i, o) {
      return i.toUpperCase() + o;
    }),
  o1 = (
    ({ hasOwnProperty: e }) =>
    (t, a) =>
      e.call(t, a)
  )(Object.prototype),
  Z3 = ar("RegExp"),
  Jx = (e, t) => {
    const a = Object.getOwnPropertyDescriptors(e),
      i = {};
    gl(a, (o, u) => {
      let c;
      (c = t(o, u, e)) !== !1 && (i[u] = c || o);
    }),
      Object.defineProperties(e, i);
  },
  I3 = (e) => {
    Jx(e, (t, a) => {
      if (Sn(e) && ["arguments", "caller", "callee"].indexOf(a) !== -1)
        return !1;
      const i = e[a];
      if (Sn(i)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + a + "'");
          });
      }
    });
  },
  W3 = (e, t) => {
    const a = {},
      i = (o) => {
        o.forEach((u) => {
          a[u] = !0;
        });
      };
    return As(e) ? i(e) : i(String(e).split(t)), a;
  },
  J3 = () => {},
  eO = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
function tO(e) {
  return !!(
    e &&
    Sn(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const nO = (e) => {
    const t = new Array(10),
      a = (i, o) => {
        if (Uc(i)) {
          if (t.indexOf(i) >= 0) return;
          if (!("toJSON" in i)) {
            t[o] = i;
            const u = As(i) ? [] : {};
            return (
              gl(i, (c, d) => {
                const h = a(c, o + 1);
                !al(h) && (u[d] = h);
              }),
              (t[o] = void 0),
              u
            );
          }
        }
        return i;
      };
    return a(e, 0);
  },
  rO = ar("AsyncFunction"),
  aO = (e) => e && (Uc(e) || Sn(e)) && Sn(e.then) && Sn(e.catch),
  e2 = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((a, i) => (
          ci.addEventListener(
            "message",
            ({ source: o, data: u }) => {
              o === ci && u === a && i.length && i.shift()();
            },
            !1
          ),
          (o) => {
            i.push(o), ci.postMessage(a, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (a) => setTimeout(a))(
    typeof setImmediate == "function",
    Sn(ci.postMessage)
  ),
  iO =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(ci)
      : (typeof process < "u" && process.nextTick) || e2,
  G = {
    isArray: As,
    isArrayBuffer: Qx,
    isBuffer: T3,
    isFormData: M3,
    isArrayBufferView: E3,
    isString: C3,
    isNumber: Zx,
    isBoolean: A3,
    isObject: Uc,
    isPlainObject: Iu,
    isReadableStream: L3,
    isRequest: B3,
    isResponse: U3,
    isHeaders: z3,
    isUndefined: al,
    isDate: _3,
    isFile: R3,
    isBlob: O3,
    isRegExp: Z3,
    isFunction: Sn,
    isStream: D3,
    isURLSearchParams: k3,
    isTypedArray: Y3,
    isFileList: N3,
    forEach: gl,
    merge: lm,
    extend: V3,
    trim: P3,
    stripBOM: j3,
    inherits: H3,
    toFlatObject: q3,
    kindOf: Lc,
    kindOfTest: ar,
    endsWith: $3,
    toArray: F3,
    forEachEntry: G3,
    matchAll: K3,
    isHTMLForm: X3,
    hasOwnProperty: o1,
    hasOwnProp: o1,
    reduceDescriptors: Jx,
    freezeMethods: I3,
    toObjectSet: W3,
    toCamelCase: Q3,
    noop: J3,
    toFiniteNumber: eO,
    findKey: Ix,
    global: ci,
    isContextDefined: Wx,
    isSpecCompliantForm: tO,
    toJSONObject: nO,
    isAsyncFn: rO,
    isThenable: aO,
    setImmediate: e2,
    asap: iO,
  };
function Oe(e, t, a, i, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    a && (this.config = a),
    i && (this.request = i),
    o && ((this.response = o), (this.status = o.status ? o.status : null));
}
G.inherits(Oe, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: G.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const t2 = Oe.prototype,
  n2 = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  n2[e] = { value: e };
});
Object.defineProperties(Oe, n2);
Object.defineProperty(t2, "isAxiosError", { value: !0 });
Oe.from = (e, t, a, i, o, u) => {
  const c = Object.create(t2);
  return (
    G.toFlatObject(
      e,
      c,
      function (h) {
        return h !== Error.prototype;
      },
      (d) => d !== "isAxiosError"
    ),
    Oe.call(c, e.message, t, a, i, o),
    (c.cause = e),
    (c.name = e.name),
    u && Object.assign(c, u),
    c
  );
};
const sO = null;
function um(e) {
  return G.isPlainObject(e) || G.isArray(e);
}
function r2(e) {
  return G.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function l1(e, t, a) {
  return e
    ? e
        .concat(t)
        .map(function (o, u) {
          return (o = r2(o)), !a && u ? "[" + o + "]" : o;
        })
        .join(a ? "." : "")
    : t;
}
function oO(e) {
  return G.isArray(e) && !e.some(um);
}
const lO = G.toFlatObject(G, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function zc(e, t, a) {
  if (!G.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (a = G.toFlatObject(
      a,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (S, A) {
        return !G.isUndefined(A[S]);
      }
    ));
  const i = a.metaTokens,
    o = a.visitor || g,
    u = a.dots,
    c = a.indexes,
    h = (a.Blob || (typeof Blob < "u" && Blob)) && G.isSpecCompliantForm(t);
  if (!G.isFunction(o)) throw new TypeError("visitor must be a function");
  function m(w) {
    if (w === null) return "";
    if (G.isDate(w)) return w.toISOString();
    if (!h && G.isBlob(w))
      throw new Oe("Blob is not supported. Use a Buffer instead.");
    return G.isArrayBuffer(w) || G.isTypedArray(w)
      ? h && typeof Blob == "function"
        ? new Blob([w])
        : Buffer.from(w)
      : w;
  }
  function g(w, S, A) {
    let C = w;
    if (w && !A && typeof w == "object") {
      if (G.endsWith(S, "{}"))
        (S = i ? S : S.slice(0, -2)), (w = JSON.stringify(w));
      else if (
        (G.isArray(w) && oO(w)) ||
        ((G.isFileList(w) || G.endsWith(S, "[]")) && (C = G.toArray(w)))
      )
        return (
          (S = r2(S)),
          C.forEach(function (M, P) {
            !(G.isUndefined(M) || M === null) &&
              t.append(
                c === !0 ? l1([S], P, u) : c === null ? S : S + "[]",
                m(M)
              );
          }),
          !1
        );
    }
    return um(w) ? !0 : (t.append(l1(A, S, u), m(w)), !1);
  }
  const y = [],
    b = Object.assign(lO, {
      defaultVisitor: g,
      convertValue: m,
      isVisitable: um,
    });
  function x(w, S) {
    if (!G.isUndefined(w)) {
      if (y.indexOf(w) !== -1)
        throw Error("Circular reference detected in " + S.join("."));
      y.push(w),
        G.forEach(w, function (C, O) {
          (!(G.isUndefined(C) || C === null) &&
            o.call(t, C, G.isString(O) ? O.trim() : O, S, b)) === !0 &&
            x(C, S ? S.concat(O) : [O]);
        }),
        y.pop();
    }
  }
  if (!G.isObject(e)) throw new TypeError("data must be an object");
  return x(e), t;
}
function u1(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (i) {
    return t[i];
  });
}
function wp(e, t) {
  (this._pairs = []), e && zc(e, this, t);
}
const a2 = wp.prototype;
a2.append = function (t, a) {
  this._pairs.push([t, a]);
};
a2.toString = function (t) {
  const a = t
    ? function (i) {
        return t.call(this, i, u1);
      }
    : u1;
  return this._pairs
    .map(function (o) {
      return a(o[0]) + "=" + a(o[1]);
    }, "")
    .join("&");
};
function uO(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function i2(e, t, a) {
  if (!t) return e;
  const i = (a && a.encode) || uO;
  G.isFunction(a) && (a = { serialize: a });
  const o = a && a.serialize;
  let u;
  if (
    (o
      ? (u = o(t, a))
      : (u = G.isURLSearchParams(t) ? t.toString() : new wp(t, a).toString(i)),
    u)
  ) {
    const c = e.indexOf("#");
    c !== -1 && (e = e.slice(0, c)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + u);
  }
  return e;
}
class c1 {
  constructor() {
    this.handlers = [];
  }
  use(t, a, i) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: a,
        synchronous: i ? i.synchronous : !1,
        runWhen: i ? i.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    G.forEach(this.handlers, function (i) {
      i !== null && t(i);
    });
  }
}
const s2 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  cO = typeof URLSearchParams < "u" ? URLSearchParams : wp,
  fO = typeof FormData < "u" ? FormData : null,
  dO = typeof Blob < "u" ? Blob : null,
  hO = {
    isBrowser: !0,
    classes: { URLSearchParams: cO, FormData: fO, Blob: dO },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Tp = typeof window < "u" && typeof document < "u",
  cm = (typeof navigator == "object" && navigator) || void 0,
  mO =
    Tp &&
    (!cm || ["ReactNative", "NativeScript", "NS"].indexOf(cm.product) < 0),
  pO =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  gO = (Tp && window.location.href) || "http://localhost",
  yO = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Tp,
        hasStandardBrowserEnv: mO,
        hasStandardBrowserWebWorkerEnv: pO,
        navigator: cm,
        origin: gO,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Jt = { ...yO, ...hO };
function vO(e, t) {
  return zc(
    e,
    new Jt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (a, i, o, u) {
          return Jt.isNode && G.isBuffer(a)
            ? (this.append(i, a.toString("base64")), !1)
            : u.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function bO(e) {
  return G.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function SO(e) {
  const t = {},
    a = Object.keys(e);
  let i;
  const o = a.length;
  let u;
  for (i = 0; i < o; i++) (u = a[i]), (t[u] = e[u]);
  return t;
}
function o2(e) {
  function t(a, i, o, u) {
    let c = a[u++];
    if (c === "__proto__") return !0;
    const d = Number.isFinite(+c),
      h = u >= a.length;
    return (
      (c = !c && G.isArray(o) ? o.length : c),
      h
        ? (G.hasOwnProp(o, c) ? (o[c] = [o[c], i]) : (o[c] = i), !d)
        : ((!o[c] || !G.isObject(o[c])) && (o[c] = []),
          t(a, i, o[c], u) && G.isArray(o[c]) && (o[c] = SO(o[c])),
          !d)
    );
  }
  if (G.isFormData(e) && G.isFunction(e.entries)) {
    const a = {};
    return (
      G.forEachEntry(e, (i, o) => {
        t(bO(i), o, a, 0);
      }),
      a
    );
  }
  return null;
}
function xO(e, t, a) {
  if (G.isString(e))
    try {
      return (t || JSON.parse)(e), G.trim(e);
    } catch (i) {
      if (i.name !== "SyntaxError") throw i;
    }
  return (a || JSON.stringify)(e);
}
const yl = {
  transitional: s2,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, a) {
      const i = a.getContentType() || "",
        o = i.indexOf("application/json") > -1,
        u = G.isObject(t);
      if ((u && G.isHTMLForm(t) && (t = new FormData(t)), G.isFormData(t)))
        return o ? JSON.stringify(o2(t)) : t;
      if (
        G.isArrayBuffer(t) ||
        G.isBuffer(t) ||
        G.isStream(t) ||
        G.isFile(t) ||
        G.isBlob(t) ||
        G.isReadableStream(t)
      )
        return t;
      if (G.isArrayBufferView(t)) return t.buffer;
      if (G.isURLSearchParams(t))
        return (
          a.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let d;
      if (u) {
        if (i.indexOf("application/x-www-form-urlencoded") > -1)
          return vO(t, this.formSerializer).toString();
        if ((d = G.isFileList(t)) || i.indexOf("multipart/form-data") > -1) {
          const h = this.env && this.env.FormData;
          return zc(
            d ? { "files[]": t } : t,
            h && new h(),
            this.formSerializer
          );
        }
      }
      return u || o ? (a.setContentType("application/json", !1), xO(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const a = this.transitional || yl.transitional,
        i = a && a.forcedJSONParsing,
        o = this.responseType === "json";
      if (G.isResponse(t) || G.isReadableStream(t)) return t;
      if (t && G.isString(t) && ((i && !this.responseType) || o)) {
        const c = !(a && a.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (d) {
          if (c)
            throw d.name === "SyntaxError"
              ? Oe.from(d, Oe.ERR_BAD_RESPONSE, this, null, this.response)
              : d;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Jt.classes.FormData, Blob: Jt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
G.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  yl.headers[e] = {};
});
const wO = G.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  TO = (e) => {
    const t = {};
    let a, i, o;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (c) {
            (o = c.indexOf(":")),
              (a = c.substring(0, o).trim().toLowerCase()),
              (i = c.substring(o + 1).trim()),
              !(!a || (t[a] && wO[a])) &&
                (a === "set-cookie"
                  ? t[a]
                    ? t[a].push(i)
                    : (t[a] = [i])
                  : (t[a] = t[a] ? t[a] + ", " + i : i));
          }),
      t
    );
  },
  f1 = Symbol("internals");
function Bo(e) {
  return e && String(e).trim().toLowerCase();
}
function Wu(e) {
  return e === !1 || e == null ? e : G.isArray(e) ? e.map(Wu) : String(e);
}
function EO(e) {
  const t = Object.create(null),
    a = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let i;
  for (; (i = a.exec(e)); ) t[i[1]] = i[2];
  return t;
}
const CO = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Mh(e, t, a, i, o) {
  if (G.isFunction(i)) return i.call(this, t, a);
  if ((o && (t = a), !!G.isString(t))) {
    if (G.isString(i)) return t.indexOf(i) !== -1;
    if (G.isRegExp(i)) return i.test(t);
  }
}
function AO(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, a, i) => a.toUpperCase() + i);
}
function _O(e, t) {
  const a = G.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((i) => {
    Object.defineProperty(e, i + a, {
      value: function (o, u, c) {
        return this[i].call(this, t, o, u, c);
      },
      configurable: !0,
    });
  });
}
let un = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, a, i) {
    const o = this;
    function u(d, h, m) {
      const g = Bo(h);
      if (!g) throw new Error("header name must be a non-empty string");
      const y = G.findKey(o, g);
      (!y || o[y] === void 0 || m === !0 || (m === void 0 && o[y] !== !1)) &&
        (o[y || h] = Wu(d));
    }
    const c = (d, h) => G.forEach(d, (m, g) => u(m, g, h));
    if (G.isPlainObject(t) || t instanceof this.constructor) c(t, a);
    else if (G.isString(t) && (t = t.trim()) && !CO(t)) c(TO(t), a);
    else if (G.isHeaders(t)) for (const [d, h] of t.entries()) u(h, d, i);
    else t != null && u(a, t, i);
    return this;
  }
  get(t, a) {
    if (((t = Bo(t)), t)) {
      const i = G.findKey(this, t);
      if (i) {
        const o = this[i];
        if (!a) return o;
        if (a === !0) return EO(o);
        if (G.isFunction(a)) return a.call(this, o, i);
        if (G.isRegExp(a)) return a.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, a) {
    if (((t = Bo(t)), t)) {
      const i = G.findKey(this, t);
      return !!(i && this[i] !== void 0 && (!a || Mh(this, this[i], i, a)));
    }
    return !1;
  }
  delete(t, a) {
    const i = this;
    let o = !1;
    function u(c) {
      if (((c = Bo(c)), c)) {
        const d = G.findKey(i, c);
        d && (!a || Mh(i, i[d], d, a)) && (delete i[d], (o = !0));
      }
    }
    return G.isArray(t) ? t.forEach(u) : u(t), o;
  }
  clear(t) {
    const a = Object.keys(this);
    let i = a.length,
      o = !1;
    for (; i--; ) {
      const u = a[i];
      (!t || Mh(this, this[u], u, t, !0)) && (delete this[u], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const a = this,
      i = {};
    return (
      G.forEach(this, (o, u) => {
        const c = G.findKey(i, u);
        if (c) {
          (a[c] = Wu(o)), delete a[u];
          return;
        }
        const d = t ? AO(u) : String(u).trim();
        d !== u && delete a[u], (a[d] = Wu(o)), (i[d] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const a = Object.create(null);
    return (
      G.forEach(this, (i, o) => {
        i != null && i !== !1 && (a[o] = t && G.isArray(i) ? i.join(", ") : i);
      }),
      a
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, a]) => t + ": " + a).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...a) {
    const i = new this(t);
    return a.forEach((o) => i.set(o)), i;
  }
  static accessor(t) {
    const i = (this[f1] = this[f1] = { accessors: {} }).accessors,
      o = this.prototype;
    function u(c) {
      const d = Bo(c);
      i[d] || (_O(o, c), (i[d] = !0));
    }
    return G.isArray(t) ? t.forEach(u) : u(t), this;
  }
};
un.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
G.reduceDescriptors(un.prototype, ({ value: e }, t) => {
  let a = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(i) {
      this[a] = i;
    },
  };
});
G.freezeMethods(un);
function kh(e, t) {
  const a = this || yl,
    i = t || a,
    o = un.from(i.headers);
  let u = i.data;
  return (
    G.forEach(e, function (d) {
      u = d.call(a, u, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    u
  );
}
function l2(e) {
  return !!(e && e.__CANCEL__);
}
function _s(e, t, a) {
  Oe.call(this, e ?? "canceled", Oe.ERR_CANCELED, t, a),
    (this.name = "CanceledError");
}
G.inherits(_s, Oe, { __CANCEL__: !0 });
function u2(e, t, a) {
  const i = a.config.validateStatus;
  !a.status || !i || i(a.status)
    ? e(a)
    : t(
        new Oe(
          "Request failed with status code " + a.status,
          [Oe.ERR_BAD_REQUEST, Oe.ERR_BAD_RESPONSE][
            Math.floor(a.status / 100) - 4
          ],
          a.config,
          a.request,
          a
        )
      );
}
function RO(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function OO(e, t) {
  e = e || 10;
  const a = new Array(e),
    i = new Array(e);
  let o = 0,
    u = 0,
    c;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (h) {
      const m = Date.now(),
        g = i[u];
      c || (c = m), (a[o] = h), (i[o] = m);
      let y = u,
        b = 0;
      for (; y !== o; ) (b += a[y++]), (y = y % e);
      if (((o = (o + 1) % e), o === u && (u = (u + 1) % e), m - c < t)) return;
      const x = g && m - g;
      return x ? Math.round((b * 1e3) / x) : void 0;
    }
  );
}
function NO(e, t) {
  let a = 0,
    i = 1e3 / t,
    o,
    u;
  const c = (m, g = Date.now()) => {
    (a = g), (o = null), u && (clearTimeout(u), (u = null)), e.apply(null, m);
  };
  return [
    (...m) => {
      const g = Date.now(),
        y = g - a;
      y >= i
        ? c(m, g)
        : ((o = m),
          u ||
            (u = setTimeout(() => {
              (u = null), c(o);
            }, i - y)));
    },
    () => o && c(o),
  ];
}
const Sc = (e, t, a = 3) => {
    let i = 0;
    const o = OO(50, 250);
    return NO((u) => {
      const c = u.loaded,
        d = u.lengthComputable ? u.total : void 0,
        h = c - i,
        m = o(h),
        g = c <= d;
      i = c;
      const y = {
        loaded: c,
        total: d,
        progress: d ? c / d : void 0,
        bytes: h,
        rate: m || void 0,
        estimated: m && d && g ? (d - c) / m : void 0,
        event: u,
        lengthComputable: d != null,
        [t ? "download" : "upload"]: !0,
      };
      e(y);
    }, a);
  },
  d1 = (e, t) => {
    const a = e != null;
    return [(i) => t[0]({ lengthComputable: a, total: e, loaded: i }), t[1]];
  },
  h1 =
    (e) =>
    (...t) =>
      G.asap(() => e(...t)),
  DO = Jt.hasStandardBrowserEnv
    ? ((e, t) => (a) => (
        (a = new URL(a, Jt.origin)),
        e.protocol === a.protocol &&
          e.host === a.host &&
          (t || e.port === a.port)
      ))(
        new URL(Jt.origin),
        Jt.navigator && /(msie|trident)/i.test(Jt.navigator.userAgent)
      )
    : () => !0,
  MO = Jt.hasStandardBrowserEnv
    ? {
        write(e, t, a, i, o, u) {
          const c = [e + "=" + encodeURIComponent(t)];
          G.isNumber(a) && c.push("expires=" + new Date(a).toGMTString()),
            G.isString(i) && c.push("path=" + i),
            G.isString(o) && c.push("domain=" + o),
            u === !0 && c.push("secure"),
            (document.cookie = c.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function kO(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function LO(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function c2(e, t, a) {
  let i = !kO(t);
  return (e && i) || a == !1 ? LO(e, t) : t;
}
const m1 = (e) => (e instanceof un ? { ...e } : e);
function hi(e, t) {
  t = t || {};
  const a = {};
  function i(m, g, y, b) {
    return G.isPlainObject(m) && G.isPlainObject(g)
      ? G.merge.call({ caseless: b }, m, g)
      : G.isPlainObject(g)
      ? G.merge({}, g)
      : G.isArray(g)
      ? g.slice()
      : g;
  }
  function o(m, g, y, b) {
    if (G.isUndefined(g)) {
      if (!G.isUndefined(m)) return i(void 0, m, y, b);
    } else return i(m, g, y, b);
  }
  function u(m, g) {
    if (!G.isUndefined(g)) return i(void 0, g);
  }
  function c(m, g) {
    if (G.isUndefined(g)) {
      if (!G.isUndefined(m)) return i(void 0, m);
    } else return i(void 0, g);
  }
  function d(m, g, y) {
    if (y in t) return i(m, g);
    if (y in e) return i(void 0, m);
  }
  const h = {
    url: u,
    method: u,
    data: u,
    baseURL: c,
    transformRequest: c,
    transformResponse: c,
    paramsSerializer: c,
    timeout: c,
    timeoutMessage: c,
    withCredentials: c,
    withXSRFToken: c,
    adapter: c,
    responseType: c,
    xsrfCookieName: c,
    xsrfHeaderName: c,
    onUploadProgress: c,
    onDownloadProgress: c,
    decompress: c,
    maxContentLength: c,
    maxBodyLength: c,
    beforeRedirect: c,
    transport: c,
    httpAgent: c,
    httpsAgent: c,
    cancelToken: c,
    socketPath: c,
    responseEncoding: c,
    validateStatus: d,
    headers: (m, g, y) => o(m1(m), m1(g), y, !0),
  };
  return (
    G.forEach(Object.keys(Object.assign({}, e, t)), function (g) {
      const y = h[g] || o,
        b = y(e[g], t[g], g);
      (G.isUndefined(b) && y !== d) || (a[g] = b);
    }),
    a
  );
}
const f2 = (e) => {
    const t = hi({}, e);
    let {
      data: a,
      withXSRFToken: i,
      xsrfHeaderName: o,
      xsrfCookieName: u,
      headers: c,
      auth: d,
    } = t;
    (t.headers = c = un.from(c)),
      (t.url = i2(c2(t.baseURL, t.url), e.params, e.paramsSerializer)),
      d &&
        c.set(
          "Authorization",
          "Basic " +
            btoa(
              (d.username || "") +
                ":" +
                (d.password ? unescape(encodeURIComponent(d.password)) : "")
            )
        );
    let h;
    if (G.isFormData(a)) {
      if (Jt.hasStandardBrowserEnv || Jt.hasStandardBrowserWebWorkerEnv)
        c.setContentType(void 0);
      else if ((h = c.getContentType()) !== !1) {
        const [m, ...g] = h
          ? h
              .split(";")
              .map((y) => y.trim())
              .filter(Boolean)
          : [];
        c.setContentType([m || "multipart/form-data", ...g].join("; "));
      }
    }
    if (
      Jt.hasStandardBrowserEnv &&
      (i && G.isFunction(i) && (i = i(t)), i || (i !== !1 && DO(t.url)))
    ) {
      const m = o && u && MO.read(u);
      m && c.set(o, m);
    }
    return t;
  },
  BO = typeof XMLHttpRequest < "u",
  UO =
    BO &&
    function (e) {
      return new Promise(function (a, i) {
        const o = f2(e);
        let u = o.data;
        const c = un.from(o.headers).normalize();
        let { responseType: d, onUploadProgress: h, onDownloadProgress: m } = o,
          g,
          y,
          b,
          x,
          w;
        function S() {
          x && x(),
            w && w(),
            o.cancelToken && o.cancelToken.unsubscribe(g),
            o.signal && o.signal.removeEventListener("abort", g);
        }
        let A = new XMLHttpRequest();
        A.open(o.method.toUpperCase(), o.url, !0), (A.timeout = o.timeout);
        function C() {
          if (!A) return;
          const M = un.from(
              "getAllResponseHeaders" in A && A.getAllResponseHeaders()
            ),
            B = {
              data:
                !d || d === "text" || d === "json"
                  ? A.responseText
                  : A.response,
              status: A.status,
              statusText: A.statusText,
              headers: M,
              config: e,
              request: A,
            };
          u2(
            function (q) {
              a(q), S();
            },
            function (q) {
              i(q), S();
            },
            B
          ),
            (A = null);
        }
        "onloadend" in A
          ? (A.onloadend = C)
          : (A.onreadystatechange = function () {
              !A ||
                A.readyState !== 4 ||
                (A.status === 0 &&
                  !(A.responseURL && A.responseURL.indexOf("file:") === 0)) ||
                setTimeout(C);
            }),
          (A.onabort = function () {
            A &&
              (i(new Oe("Request aborted", Oe.ECONNABORTED, e, A)), (A = null));
          }),
          (A.onerror = function () {
            i(new Oe("Network Error", Oe.ERR_NETWORK, e, A)), (A = null);
          }),
          (A.ontimeout = function () {
            let P = o.timeout
              ? "timeout of " + o.timeout + "ms exceeded"
              : "timeout exceeded";
            const B = o.transitional || s2;
            o.timeoutErrorMessage && (P = o.timeoutErrorMessage),
              i(
                new Oe(
                  P,
                  B.clarifyTimeoutError ? Oe.ETIMEDOUT : Oe.ECONNABORTED,
                  e,
                  A
                )
              ),
              (A = null);
          }),
          u === void 0 && c.setContentType(null),
          "setRequestHeader" in A &&
            G.forEach(c.toJSON(), function (P, B) {
              A.setRequestHeader(B, P);
            }),
          G.isUndefined(o.withCredentials) ||
            (A.withCredentials = !!o.withCredentials),
          d && d !== "json" && (A.responseType = o.responseType),
          m && (([b, w] = Sc(m, !0)), A.addEventListener("progress", b)),
          h &&
            A.upload &&
            (([y, x] = Sc(h)),
            A.upload.addEventListener("progress", y),
            A.upload.addEventListener("loadend", x)),
          (o.cancelToken || o.signal) &&
            ((g = (M) => {
              A &&
                (i(!M || M.type ? new _s(null, e, A) : M),
                A.abort(),
                (A = null));
            }),
            o.cancelToken && o.cancelToken.subscribe(g),
            o.signal &&
              (o.signal.aborted ? g() : o.signal.addEventListener("abort", g)));
        const O = RO(o.url);
        if (O && Jt.protocols.indexOf(O) === -1) {
          i(new Oe("Unsupported protocol " + O + ":", Oe.ERR_BAD_REQUEST, e));
          return;
        }
        A.send(u || null);
      });
    },
  zO = (e, t) => {
    const { length: a } = (e = e ? e.filter(Boolean) : []);
    if (t || a) {
      let i = new AbortController(),
        o;
      const u = function (m) {
        if (!o) {
          (o = !0), d();
          const g = m instanceof Error ? m : this.reason;
          i.abort(
            g instanceof Oe ? g : new _s(g instanceof Error ? g.message : g)
          );
        }
      };
      let c =
        t &&
        setTimeout(() => {
          (c = null), u(new Oe(`timeout ${t} of ms exceeded`, Oe.ETIMEDOUT));
        }, t);
      const d = () => {
        e &&
          (c && clearTimeout(c),
          (c = null),
          e.forEach((m) => {
            m.unsubscribe
              ? m.unsubscribe(u)
              : m.removeEventListener("abort", u);
          }),
          (e = null));
      };
      e.forEach((m) => m.addEventListener("abort", u));
      const { signal: h } = i;
      return (h.unsubscribe = () => G.asap(d)), h;
    }
  },
  PO = function* (e, t) {
    let a = e.byteLength;
    if (a < t) {
      yield e;
      return;
    }
    let i = 0,
      o;
    for (; i < a; ) (o = i + t), yield e.slice(i, o), (i = o);
  },
  VO = async function* (e, t) {
    for await (const a of jO(e)) yield* PO(a, t);
  },
  jO = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: a, value: i } = await t.read();
        if (a) break;
        yield i;
      }
    } finally {
      await t.cancel();
    }
  },
  p1 = (e, t, a, i) => {
    const o = VO(e, t);
    let u = 0,
      c,
      d = (h) => {
        c || ((c = !0), i && i(h));
      };
    return new ReadableStream(
      {
        async pull(h) {
          try {
            const { done: m, value: g } = await o.next();
            if (m) {
              d(), h.close();
              return;
            }
            let y = g.byteLength;
            if (a) {
              let b = (u += y);
              a(b);
            }
            h.enqueue(new Uint8Array(g));
          } catch (m) {
            throw (d(m), m);
          }
        },
        cancel(h) {
          return d(h), o.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Pc =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  d2 = Pc && typeof ReadableStream == "function",
  HO =
    Pc &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  h2 = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  qO =
    d2 &&
    h2(() => {
      let e = !1;
      const t = new Request(Jt.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  g1 = 64 * 1024,
  fm = d2 && h2(() => G.isReadableStream(new Response("").body)),
  xc = { stream: fm && ((e) => e.body) };
Pc &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !xc[t] &&
        (xc[t] = G.isFunction(e[t])
          ? (a) => a[t]()
          : (a, i) => {
              throw new Oe(
                `Response type '${t}' is not supported`,
                Oe.ERR_NOT_SUPPORT,
                i
              );
            });
    });
  })(new Response());
const $O = async (e) => {
    if (e == null) return 0;
    if (G.isBlob(e)) return e.size;
    if (G.isSpecCompliantForm(e))
      return (
        await new Request(Jt.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (G.isArrayBufferView(e) || G.isArrayBuffer(e)) return e.byteLength;
    if ((G.isURLSearchParams(e) && (e = e + ""), G.isString(e)))
      return (await HO(e)).byteLength;
  },
  FO = async (e, t) => {
    const a = G.toFiniteNumber(e.getContentLength());
    return a ?? $O(t);
  },
  YO =
    Pc &&
    (async (e) => {
      let {
        url: t,
        method: a,
        data: i,
        signal: o,
        cancelToken: u,
        timeout: c,
        onDownloadProgress: d,
        onUploadProgress: h,
        responseType: m,
        headers: g,
        withCredentials: y = "same-origin",
        fetchOptions: b,
      } = f2(e);
      m = m ? (m + "").toLowerCase() : "text";
      let x = zO([o, u && u.toAbortSignal()], c),
        w;
      const S =
        x &&
        x.unsubscribe &&
        (() => {
          x.unsubscribe();
        });
      let A;
      try {
        if (
          h &&
          qO &&
          a !== "get" &&
          a !== "head" &&
          (A = await FO(g, i)) !== 0
        ) {
          let B = new Request(t, { method: "POST", body: i, duplex: "half" }),
            N;
          if (
            (G.isFormData(i) &&
              (N = B.headers.get("content-type")) &&
              g.setContentType(N),
            B.body)
          ) {
            const [q, X] = d1(A, Sc(h1(h)));
            i = p1(B.body, g1, q, X);
          }
        }
        G.isString(y) || (y = y ? "include" : "omit");
        const C = "credentials" in Request.prototype;
        w = new Request(t, {
          ...b,
          signal: x,
          method: a.toUpperCase(),
          headers: g.normalize().toJSON(),
          body: i,
          duplex: "half",
          credentials: C ? y : void 0,
        });
        let O = await fetch(w);
        const M = fm && (m === "stream" || m === "response");
        if (fm && (d || (M && S))) {
          const B = {};
          ["status", "statusText", "headers"].forEach((Y) => {
            B[Y] = O[Y];
          });
          const N = G.toFiniteNumber(O.headers.get("content-length")),
            [q, X] = (d && d1(N, Sc(h1(d), !0))) || [];
          O = new Response(
            p1(O.body, g1, q, () => {
              X && X(), S && S();
            }),
            B
          );
        }
        m = m || "text";
        let P = await xc[G.findKey(xc, m) || "text"](O, e);
        return (
          !M && S && S(),
          await new Promise((B, N) => {
            u2(B, N, {
              data: P,
              headers: un.from(O.headers),
              status: O.status,
              statusText: O.statusText,
              config: e,
              request: w,
            });
          })
        );
      } catch (C) {
        throw (
          (S && S(),
          C && C.name === "TypeError" && /fetch/i.test(C.message)
            ? Object.assign(new Oe("Network Error", Oe.ERR_NETWORK, e, w), {
                cause: C.cause || C,
              })
            : Oe.from(C, C && C.code, e, w))
        );
      }
    }),
  dm = { http: sO, xhr: UO, fetch: YO };
G.forEach(dm, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const y1 = (e) => `- ${e}`,
  GO = (e) => G.isFunction(e) || e === null || e === !1,
  m2 = {
    getAdapter: (e) => {
      e = G.isArray(e) ? e : [e];
      const { length: t } = e;
      let a, i;
      const o = {};
      for (let u = 0; u < t; u++) {
        a = e[u];
        let c;
        if (
          ((i = a),
          !GO(a) && ((i = dm[(c = String(a)).toLowerCase()]), i === void 0))
        )
          throw new Oe(`Unknown adapter '${c}'`);
        if (i) break;
        o[c || "#" + u] = i;
      }
      if (!i) {
        const u = Object.entries(o).map(
          ([d, h]) =>
            `adapter ${d} ` +
            (h === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let c = t
          ? u.length > 1
            ? `since :
` +
              u.map(y1).join(`
`)
            : " " + y1(u[0])
          : "as no adapter specified";
        throw new Oe(
          "There is no suitable adapter to dispatch the request " + c,
          "ERR_NOT_SUPPORT"
        );
      }
      return i;
    },
    adapters: dm,
  };
function Lh(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new _s(null, e);
}
function v1(e) {
  return (
    Lh(e),
    (e.headers = un.from(e.headers)),
    (e.data = kh.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    m2
      .getAdapter(e.adapter || yl.adapter)(e)
      .then(
        function (i) {
          return (
            Lh(e),
            (i.data = kh.call(e, e.transformResponse, i)),
            (i.headers = un.from(i.headers)),
            i
          );
        },
        function (i) {
          return (
            l2(i) ||
              (Lh(e),
              i &&
                i.response &&
                ((i.response.data = kh.call(
                  e,
                  e.transformResponse,
                  i.response
                )),
                (i.response.headers = un.from(i.response.headers)))),
            Promise.reject(i)
          );
        }
      )
  );
}
const p2 = "1.8.1",
  Vc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Vc[e] = function (i) {
      return typeof i === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const b1 = {};
Vc.transitional = function (t, a, i) {
  function o(u, c) {
    return (
      "[Axios v" +
      p2 +
      "] Transitional option '" +
      u +
      "'" +
      c +
      (i ? ". " + i : "")
    );
  }
  return (u, c, d) => {
    if (t === !1)
      throw new Oe(
        o(c, " has been removed" + (a ? " in " + a : "")),
        Oe.ERR_DEPRECATED
      );
    return (
      a &&
        !b1[c] &&
        ((b1[c] = !0),
        console.warn(
          o(
            c,
            " has been deprecated since v" +
              a +
              " and will be removed in the near future"
          )
        )),
      t ? t(u, c, d) : !0
    );
  };
};
Vc.spelling = function (t) {
  return (a, i) => (console.warn(`${i} is likely a misspelling of ${t}`), !0);
};
function KO(e, t, a) {
  if (typeof e != "object")
    throw new Oe("options must be an object", Oe.ERR_BAD_OPTION_VALUE);
  const i = Object.keys(e);
  let o = i.length;
  for (; o-- > 0; ) {
    const u = i[o],
      c = t[u];
    if (c) {
      const d = e[u],
        h = d === void 0 || c(d, u, e);
      if (h !== !0)
        throw new Oe("option " + u + " must be " + h, Oe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (a !== !0) throw new Oe("Unknown option " + u, Oe.ERR_BAD_OPTION);
  }
}
const Ju = { assertOptions: KO, validators: Vc },
  mr = Ju.validators;
let di = class {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new c1(), response: new c1() });
  }
  async request(t, a) {
    try {
      return await this._request(t, a);
    } catch (i) {
      if (i instanceof Error) {
        let o = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(o)
          : (o = new Error());
        const u = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          i.stack
            ? u &&
              !String(i.stack).endsWith(u.replace(/^.+\n.+\n/, "")) &&
              (i.stack +=
                `
` + u)
            : (i.stack = u);
        } catch {}
      }
      throw i;
    }
  }
  _request(t, a) {
    typeof t == "string" ? ((a = a || {}), (a.url = t)) : (a = t || {}),
      (a = hi(this.defaults, a));
    const { transitional: i, paramsSerializer: o, headers: u } = a;
    i !== void 0 &&
      Ju.assertOptions(
        i,
        {
          silentJSONParsing: mr.transitional(mr.boolean),
          forcedJSONParsing: mr.transitional(mr.boolean),
          clarifyTimeoutError: mr.transitional(mr.boolean),
        },
        !1
      ),
      o != null &&
        (G.isFunction(o)
          ? (a.paramsSerializer = { serialize: o })
          : Ju.assertOptions(
              o,
              { encode: mr.function, serialize: mr.function },
              !0
            )),
      a.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (a.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (a.allowAbsoluteUrls = !0)),
      Ju.assertOptions(
        a,
        {
          baseUrl: mr.spelling("baseURL"),
          withXsrfToken: mr.spelling("withXSRFToken"),
        },
        !0
      ),
      (a.method = (a.method || this.defaults.method || "get").toLowerCase());
    let c = u && G.merge(u.common, u[a.method]);
    u &&
      G.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (w) => {
          delete u[w];
        }
      ),
      (a.headers = un.concat(c, u));
    const d = [];
    let h = !0;
    this.interceptors.request.forEach(function (S) {
      (typeof S.runWhen == "function" && S.runWhen(a) === !1) ||
        ((h = h && S.synchronous), d.unshift(S.fulfilled, S.rejected));
    });
    const m = [];
    this.interceptors.response.forEach(function (S) {
      m.push(S.fulfilled, S.rejected);
    });
    let g,
      y = 0,
      b;
    if (!h) {
      const w = [v1.bind(this), void 0];
      for (
        w.unshift.apply(w, d),
          w.push.apply(w, m),
          b = w.length,
          g = Promise.resolve(a);
        y < b;

      )
        g = g.then(w[y++], w[y++]);
      return g;
    }
    b = d.length;
    let x = a;
    for (y = 0; y < b; ) {
      const w = d[y++],
        S = d[y++];
      try {
        x = w(x);
      } catch (A) {
        S.call(this, A);
        break;
      }
    }
    try {
      g = v1.call(this, x);
    } catch (w) {
      return Promise.reject(w);
    }
    for (y = 0, b = m.length; y < b; ) g = g.then(m[y++], m[y++]);
    return g;
  }
  getUri(t) {
    t = hi(this.defaults, t);
    const a = c2(t.baseURL, t.url, t.allowAbsoluteUrls);
    return i2(a, t.params, t.paramsSerializer);
  }
};
G.forEach(["delete", "get", "head", "options"], function (t) {
  di.prototype[t] = function (a, i) {
    return this.request(
      hi(i || {}, { method: t, url: a, data: (i || {}).data })
    );
  };
});
G.forEach(["post", "put", "patch"], function (t) {
  function a(i) {
    return function (u, c, d) {
      return this.request(
        hi(d || {}, {
          method: t,
          headers: i ? { "Content-Type": "multipart/form-data" } : {},
          url: u,
          data: c,
        })
      );
    };
  }
  (di.prototype[t] = a()), (di.prototype[t + "Form"] = a(!0));
});
let XO = class g2 {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let a;
    this.promise = new Promise(function (u) {
      a = u;
    });
    const i = this;
    this.promise.then((o) => {
      if (!i._listeners) return;
      let u = i._listeners.length;
      for (; u-- > 0; ) i._listeners[u](o);
      i._listeners = null;
    }),
      (this.promise.then = (o) => {
        let u;
        const c = new Promise((d) => {
          i.subscribe(d), (u = d);
        }).then(o);
        return (
          (c.cancel = function () {
            i.unsubscribe(u);
          }),
          c
        );
      }),
      t(function (u, c, d) {
        i.reason || ((i.reason = new _s(u, c, d)), a(i.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const a = this._listeners.indexOf(t);
    a !== -1 && this._listeners.splice(a, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      a = (i) => {
        t.abort(i);
      };
    return (
      this.subscribe(a),
      (t.signal.unsubscribe = () => this.unsubscribe(a)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new g2(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
};
function QO(e) {
  return function (a) {
    return e.apply(null, a);
  };
}
function ZO(e) {
  return G.isObject(e) && e.isAxiosError === !0;
}
const hm = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(hm).forEach(([e, t]) => {
  hm[t] = e;
});
function y2(e) {
  const t = new di(e),
    a = Xx(di.prototype.request, t);
  return (
    G.extend(a, di.prototype, t, { allOwnKeys: !0 }),
    G.extend(a, t, null, { allOwnKeys: !0 }),
    (a.create = function (o) {
      return y2(hi(e, o));
    }),
    a
  );
}
const je = y2(yl);
je.Axios = di;
je.CanceledError = _s;
je.CancelToken = XO;
je.isCancel = l2;
je.VERSION = p2;
je.toFormData = zc;
je.AxiosError = Oe;
je.Cancel = je.CanceledError;
je.all = function (t) {
  return Promise.all(t);
};
je.spread = QO;
je.isAxiosError = ZO;
je.mergeConfig = hi;
je.AxiosHeaders = un;
je.formToJSON = (e) => o2(G.isHTMLForm(e) ? new FormData(e) : e);
je.getAdapter = m2.getAdapter;
je.HttpStatusCode = hm;
je.default = je;
const {
  Axios: Ak,
  AxiosError: _k,
  CanceledError: Rk,
  isCancel: Ok,
  CancelToken: Nk,
  VERSION: Dk,
  all: Mk,
  Cancel: kk,
  isAxiosError: Lk,
  spread: Bk,
  toFormData: Uk,
  AxiosHeaders: zk,
  HttpStatusCode: Pk,
  formToJSON: Vk,
  getAdapter: jk,
  mergeConfig: Hk,
} = je;
function v2(e) {
  var t,
    a,
    i = "";
  if (typeof e == "string" || typeof e == "number") i += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (a = v2(e[t])) && (i && (i += " "), (i += a));
    } else for (a in e) e[a] && (i && (i += " "), (i += a));
  return i;
}
function tr() {
  for (var e, t, a = 0, i = "", o = arguments.length; a < o; a++)
    (e = arguments[a]) && (t = v2(e)) && (i && (i += " "), (i += t));
  return i;
}
function IO(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0],
    a = document.createElement("style");
  (a.type = "text/css"),
    t.firstChild ? t.insertBefore(a, t.firstChild) : t.appendChild(a),
    a.styleSheet
      ? (a.styleSheet.cssText = e)
      : a.appendChild(document.createTextNode(e));
}
IO(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);
var vl = (e) => typeof e == "number" && !isNaN(e),
  mi = (e) => typeof e == "string",
  Qr = (e) => typeof e == "function",
  WO = (e) => mi(e) || vl(e),
  mm = (e) => (mi(e) || Qr(e) ? e : null),
  JO = (e, t) => (e === !1 || (vl(e) && e > 0) ? e : t),
  pm = (e) => R.isValidElement(e) || mi(e) || Qr(e) || vl(e);
function eN(e, t, a = 300) {
  let { scrollHeight: i, style: o } = e;
  requestAnimationFrame(() => {
    (o.minHeight = "initial"),
      (o.height = i + "px"),
      (o.transition = `all ${a}ms`),
      requestAnimationFrame(() => {
        (o.height = "0"), (o.padding = "0"), (o.margin = "0"), setTimeout(t, a);
      });
  });
}
function tN({
  enter: e,
  exit: t,
  appendPosition: a = !1,
  collapse: i = !0,
  collapseDuration: o = 300,
}) {
  return function ({
    children: u,
    position: c,
    preventExitTransition: d,
    done: h,
    nodeRef: m,
    isIn: g,
    playToast: y,
  }) {
    let b = a ? `${e}--${c}` : e,
      x = a ? `${t}--${c}` : t,
      w = R.useRef(0);
    return (
      R.useLayoutEffect(() => {
        let S = m.current,
          A = b.split(" "),
          C = (O) => {
            O.target === m.current &&
              (y(),
              S.removeEventListener("animationend", C),
              S.removeEventListener("animationcancel", C),
              w.current === 0 &&
                O.type !== "animationcancel" &&
                S.classList.remove(...A));
          };
        S.classList.add(...A),
          S.addEventListener("animationend", C),
          S.addEventListener("animationcancel", C);
      }, []),
      R.useEffect(() => {
        let S = m.current,
          A = () => {
            S.removeEventListener("animationend", A), i ? eN(S, h, o) : h();
          };
        g ||
          (d
            ? A()
            : ((w.current = 1),
              (S.className += ` ${x}`),
              S.addEventListener("animationend", A)));
      }, [g]),
      Fe.createElement(Fe.Fragment, null, u)
    );
  };
}
function S1(e, t) {
  return {
    content: b2(e.content, e.props),
    containerId: e.props.containerId,
    id: e.props.toastId,
    theme: e.props.theme,
    type: e.props.type,
    data: e.props.data || {},
    isLoading: e.props.isLoading,
    icon: e.props.icon,
    reason: e.removalReason,
    status: t,
  };
}
function b2(e, t, a = !1) {
  return R.isValidElement(e) && !mi(e.type)
    ? R.cloneElement(e, {
        closeToast: t.closeToast,
        toastProps: t,
        data: t.data,
        isPaused: a,
      })
    : Qr(e)
    ? e({ closeToast: t.closeToast, toastProps: t, data: t.data, isPaused: a })
    : e;
}
function nN({ closeToast: e, theme: t, ariaLabel: a = "close" }) {
  return Fe.createElement(
    "button",
    {
      className: `Toastify__close-button Toastify__close-button--${t}`,
      type: "button",
      onClick: (i) => {
        i.stopPropagation(), e(!0);
      },
      "aria-label": a,
    },
    Fe.createElement(
      "svg",
      { "aria-hidden": "true", viewBox: "0 0 14 16" },
      Fe.createElement("path", {
        fillRule: "evenodd",
        d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
      })
    )
  );
}
function rN({
  delay: e,
  isRunning: t,
  closeToast: a,
  type: i = "default",
  hide: o,
  className: u,
  controlledProgress: c,
  progress: d,
  rtl: h,
  isIn: m,
  theme: g,
}) {
  let y = o || (c && d === 0),
    b = {
      animationDuration: `${e}ms`,
      animationPlayState: t ? "running" : "paused",
    };
  c && (b.transform = `scaleX(${d})`);
  let x = tr(
      "Toastify__progress-bar",
      c
        ? "Toastify__progress-bar--controlled"
        : "Toastify__progress-bar--animated",
      `Toastify__progress-bar-theme--${g}`,
      `Toastify__progress-bar--${i}`,
      { "Toastify__progress-bar--rtl": h }
    ),
    w = Qr(u) ? u({ rtl: h, type: i, defaultClassName: x }) : tr(x, u),
    S = {
      [c && d >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
        c && d < 1
          ? null
          : () => {
              m && a();
            },
    };
  return Fe.createElement(
    "div",
    { className: "Toastify__progress-bar--wrp", "data-hidden": y },
    Fe.createElement("div", {
      className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${g} Toastify__progress-bar--${i}`,
    }),
    Fe.createElement("div", {
      role: "progressbar",
      "aria-hidden": y ? "true" : "false",
      "aria-label": "notification timer",
      className: w,
      style: b,
      ...S,
    })
  );
}
var aN = 1,
  S2 = () => `${aN++}`;
function iN(e, t, a) {
  let i = 1,
    o = 0,
    u = [],
    c = [],
    d = t,
    h = new Map(),
    m = new Set(),
    g = (O) => (m.add(O), () => m.delete(O)),
    y = () => {
      (c = Array.from(h.values())), m.forEach((O) => O());
    },
    b = ({ containerId: O, toastId: M, updateId: P }) => {
      let B = O ? O !== e : e !== 1,
        N = h.has(M) && P == null;
      return B || N;
    },
    x = (O, M) => {
      h.forEach((P) => {
        var B;
        (M == null || M === P.props.toastId) &&
          ((B = P.toggle) == null || B.call(P, O));
      });
    },
    w = (O) => {
      var M, P;
      (P = (M = O.props) == null ? void 0 : M.onClose) == null ||
        P.call(M, O.removalReason),
        (O.isActive = !1);
    },
    S = (O) => {
      if (O == null) h.forEach(w);
      else {
        let M = h.get(O);
        M && w(M);
      }
      y();
    },
    A = () => {
      (o -= u.length), (u = []);
    },
    C = (O) => {
      var M, P;
      let { toastId: B, updateId: N } = O.props,
        q = N == null;
      O.staleId && h.delete(O.staleId),
        (O.isActive = !0),
        h.set(B, O),
        y(),
        a(S1(O, q ? "added" : "updated")),
        q && ((P = (M = O.props).onOpen) == null || P.call(M));
    };
  return {
    id: e,
    props: d,
    observe: g,
    toggle: x,
    removeToast: S,
    toasts: h,
    clearQueue: A,
    buildToast: (O, M) => {
      if (b(M)) return;
      let { toastId: P, updateId: B, data: N, staleId: q, delay: X } = M,
        Y = B == null;
      Y && o++;
      let E = {
        ...d,
        style: d.toastStyle,
        key: i++,
        ...Object.fromEntries(
          Object.entries(M).filter(([ce, ae]) => ae != null)
        ),
        toastId: P,
        updateId: B,
        data: N,
        isIn: !1,
        className: mm(M.className || d.toastClassName),
        progressClassName: mm(M.progressClassName || d.progressClassName),
        autoClose: M.isLoading ? !1 : JO(M.autoClose, d.autoClose),
        closeToast(ce) {
          (h.get(P).removalReason = ce), S(P);
        },
        deleteToast() {
          let ce = h.get(P);
          if (ce != null) {
            if (
              (a(S1(ce, "removed")),
              h.delete(P),
              o--,
              o < 0 && (o = 0),
              u.length > 0)
            ) {
              C(u.shift());
              return;
            }
            y();
          }
        },
      };
      (E.closeButton = d.closeButton),
        M.closeButton === !1 || pm(M.closeButton)
          ? (E.closeButton = M.closeButton)
          : M.closeButton === !0 &&
            (E.closeButton = pm(d.closeButton) ? d.closeButton : !0);
      let J = { content: O, props: E, staleId: q };
      d.limit && d.limit > 0 && o > d.limit && Y
        ? u.push(J)
        : vl(X)
        ? setTimeout(() => {
            C(J);
          }, X)
        : C(J);
    },
    setProps(O) {
      d = O;
    },
    setToggle: (O, M) => {
      let P = h.get(O);
      P && (P.toggle = M);
    },
    isToastActive: (O) => {
      var M;
      return (M = h.get(O)) == null ? void 0 : M.isActive;
    },
    getSnapshot: () => c,
  };
}
var an = new Map(),
  il = [],
  gm = new Set(),
  sN = (e) => gm.forEach((t) => t(e)),
  x2 = () => an.size > 0;
function oN() {
  il.forEach((e) => T2(e.content, e.options)), (il = []);
}
var lN = (e, { containerId: t }) => {
  var a;
  return (a = an.get(t || 1)) == null ? void 0 : a.toasts.get(e);
};
function w2(e, t) {
  var a;
  if (t) return !!((a = an.get(t)) != null && a.isToastActive(e));
  let i = !1;
  return (
    an.forEach((o) => {
      o.isToastActive(e) && (i = !0);
    }),
    i
  );
}
function uN(e) {
  if (!x2()) {
    il = il.filter((t) => e != null && t.options.toastId !== e);
    return;
  }
  if (e == null || WO(e))
    an.forEach((t) => {
      t.removeToast(e);
    });
  else if (e && ("containerId" in e || "id" in e)) {
    let t = an.get(e.containerId);
    t
      ? t.removeToast(e.id)
      : an.forEach((a) => {
          a.removeToast(e.id);
        });
  }
}
var cN = (e = {}) => {
  an.forEach((t) => {
    t.props.limit &&
      (!e.containerId || t.id === e.containerId) &&
      t.clearQueue();
  });
};
function T2(e, t) {
  pm(e) &&
    (x2() || il.push({ content: e, options: t }),
    an.forEach((a) => {
      a.buildToast(e, t);
    }));
}
function fN(e) {
  var t;
  (t = an.get(e.containerId || 1)) == null || t.setToggle(e.id, e.fn);
}
function E2(e, t) {
  an.forEach((a) => {
    (t == null ||
      !(t != null && t.containerId) ||
      (t == null ? void 0 : t.containerId) === a.id) &&
      a.toggle(e, t == null ? void 0 : t.id);
  });
}
function dN(e) {
  let t = e.containerId || 1;
  return {
    subscribe(a) {
      let i = iN(t, e, sN);
      an.set(t, i);
      let o = i.observe(a);
      return (
        oN(),
        () => {
          o(), an.delete(t);
        }
      );
    },
    setProps(a) {
      var i;
      (i = an.get(t)) == null || i.setProps(a);
    },
    getSnapshot() {
      var a;
      return (a = an.get(t)) == null ? void 0 : a.getSnapshot();
    },
  };
}
function hN(e) {
  return (
    gm.add(e),
    () => {
      gm.delete(e);
    }
  );
}
function mN(e) {
  return e && (mi(e.toastId) || vl(e.toastId)) ? e.toastId : S2();
}
function bl(e, t) {
  return T2(e, t), t.toastId;
}
function jc(e, t) {
  return { ...t, type: (t && t.type) || e, toastId: mN(t) };
}
function Hc(e) {
  return (t, a) => bl(t, jc(e, a));
}
function _e(e, t) {
  return bl(e, jc("default", t));
}
_e.loading = (e, t) =>
  bl(
    e,
    jc("default", {
      isLoading: !0,
      autoClose: !1,
      closeOnClick: !1,
      closeButton: !1,
      draggable: !1,
      ...t,
    })
  );
function pN(e, { pending: t, error: a, success: i }, o) {
  let u;
  t && (u = mi(t) ? _e.loading(t, o) : _e.loading(t.render, { ...o, ...t }));
  let c = {
      isLoading: null,
      autoClose: null,
      closeOnClick: null,
      closeButton: null,
      draggable: null,
    },
    d = (m, g, y) => {
      if (g == null) {
        _e.dismiss(u);
        return;
      }
      let b = { type: m, ...c, ...o, data: y },
        x = mi(g) ? { render: g } : g;
      return u ? _e.update(u, { ...b, ...x }) : _e(x.render, { ...b, ...x }), y;
    },
    h = Qr(e) ? e() : e;
  return h.then((m) => d("success", i, m)).catch((m) => d("error", a, m)), h;
}
_e.promise = pN;
_e.success = Hc("success");
_e.info = Hc("info");
_e.error = Hc("error");
_e.warning = Hc("warning");
_e.warn = _e.warning;
_e.dark = (e, t) => bl(e, jc("default", { theme: "dark", ...t }));
function gN(e) {
  uN(e);
}
_e.dismiss = gN;
_e.clearWaitingQueue = cN;
_e.isActive = w2;
_e.update = (e, t = {}) => {
  let a = lN(e, t);
  if (a) {
    let { props: i, content: o } = a,
      u = { delay: 100, ...i, ...t, toastId: t.toastId || e, updateId: S2() };
    u.toastId !== e && (u.staleId = e);
    let c = u.render || o;
    delete u.render, bl(c, u);
  }
};
_e.done = (e) => {
  _e.update(e, { progress: 1 });
};
_e.onChange = hN;
_e.play = (e) => E2(!0, e);
_e.pause = (e) => E2(!1, e);
function yN(e) {
  var t;
  let { subscribe: a, getSnapshot: i, setProps: o } = R.useRef(dN(e)).current;
  o(e);
  let u = (t = R.useSyncExternalStore(a, i, i)) == null ? void 0 : t.slice();
  function c(d) {
    if (!u) return [];
    let h = new Map();
    return (
      e.newestOnTop && u.reverse(),
      u.forEach((m) => {
        let { position: g } = m.props;
        h.has(g) || h.set(g, []), h.get(g).push(m);
      }),
      Array.from(h, (m) => d(m[0], m[1]))
    );
  }
  return {
    getToastToRender: c,
    isToastActive: w2,
    count: u == null ? void 0 : u.length,
  };
}
function vN(e) {
  let [t, a] = R.useState(!1),
    [i, o] = R.useState(!1),
    u = R.useRef(null),
    c = R.useRef({
      start: 0,
      delta: 0,
      removalDistance: 0,
      canCloseOnClick: !0,
      canDrag: !1,
      didMove: !1,
    }).current,
    {
      autoClose: d,
      pauseOnHover: h,
      closeToast: m,
      onClick: g,
      closeOnClick: y,
    } = e;
  fN({ id: e.toastId, containerId: e.containerId, fn: a }),
    R.useEffect(() => {
      if (e.pauseOnFocusLoss)
        return (
          b(),
          () => {
            x();
          }
        );
    }, [e.pauseOnFocusLoss]);
  function b() {
    document.hasFocus() || C(),
      window.addEventListener("focus", A),
      window.addEventListener("blur", C);
  }
  function x() {
    window.removeEventListener("focus", A),
      window.removeEventListener("blur", C);
  }
  function w(q) {
    if (e.draggable === !0 || e.draggable === q.pointerType) {
      O();
      let X = u.current;
      (c.canCloseOnClick = !0),
        (c.canDrag = !0),
        (X.style.transition = "none"),
        e.draggableDirection === "x"
          ? ((c.start = q.clientX),
            (c.removalDistance = X.offsetWidth * (e.draggablePercent / 100)))
          : ((c.start = q.clientY),
            (c.removalDistance =
              (X.offsetHeight *
                (e.draggablePercent === 80
                  ? e.draggablePercent * 1.5
                  : e.draggablePercent)) /
              100));
    }
  }
  function S(q) {
    let {
      top: X,
      bottom: Y,
      left: E,
      right: J,
    } = u.current.getBoundingClientRect();
    q.nativeEvent.type !== "touchend" &&
    e.pauseOnHover &&
    q.clientX >= E &&
    q.clientX <= J &&
    q.clientY >= X &&
    q.clientY <= Y
      ? C()
      : A();
  }
  function A() {
    a(!0);
  }
  function C() {
    a(!1);
  }
  function O() {
    (c.didMove = !1),
      document.addEventListener("pointermove", P),
      document.addEventListener("pointerup", B);
  }
  function M() {
    document.removeEventListener("pointermove", P),
      document.removeEventListener("pointerup", B);
  }
  function P(q) {
    let X = u.current;
    if (c.canDrag && X) {
      (c.didMove = !0),
        t && C(),
        e.draggableDirection === "x"
          ? (c.delta = q.clientX - c.start)
          : (c.delta = q.clientY - c.start),
        c.start !== q.clientX && (c.canCloseOnClick = !1);
      let Y =
        e.draggableDirection === "x"
          ? `${c.delta}px, var(--y)`
          : `0, calc(${c.delta}px + var(--y))`;
      (X.style.transform = `translate3d(${Y},0)`),
        (X.style.opacity = `${1 - Math.abs(c.delta / c.removalDistance)}`);
    }
  }
  function B() {
    M();
    let q = u.current;
    if (c.canDrag && c.didMove && q) {
      if (((c.canDrag = !1), Math.abs(c.delta) > c.removalDistance)) {
        o(!0), e.closeToast(!0), e.collapseAll();
        return;
      }
      (q.style.transition = "transform 0.2s, opacity 0.2s"),
        q.style.removeProperty("transform"),
        q.style.removeProperty("opacity");
    }
  }
  let N = { onPointerDown: w, onPointerUp: S };
  return (
    d && h && ((N.onMouseEnter = C), e.stacked || (N.onMouseLeave = A)),
    y &&
      (N.onClick = (q) => {
        g && g(q), c.canCloseOnClick && m(!0);
      }),
    {
      playToast: A,
      pauseToast: C,
      isRunning: t,
      preventExitTransition: i,
      toastRef: u,
      eventHandlers: N,
    }
  );
}
var bN = typeof window < "u" ? R.useLayoutEffect : R.useEffect,
  qc = ({ theme: e, type: t, isLoading: a, ...i }) =>
    Fe.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "100%",
      height: "100%",
      fill:
        e === "colored" ? "currentColor" : `var(--toastify-icon-color-${t})`,
      ...i,
    });
function SN(e) {
  return Fe.createElement(
    qc,
    { ...e },
    Fe.createElement("path", {
      d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
    })
  );
}
function xN(e) {
  return Fe.createElement(
    qc,
    { ...e },
    Fe.createElement("path", {
      d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
    })
  );
}
function wN(e) {
  return Fe.createElement(
    qc,
    { ...e },
    Fe.createElement("path", {
      d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
    })
  );
}
function TN(e) {
  return Fe.createElement(
    qc,
    { ...e },
    Fe.createElement("path", {
      d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
    })
  );
}
function EN() {
  return Fe.createElement("div", { className: "Toastify__spinner" });
}
var ym = { info: xN, warning: SN, success: wN, error: TN, spinner: EN },
  CN = (e) => e in ym;
function AN({ theme: e, type: t, isLoading: a, icon: i }) {
  let o = null,
    u = { theme: e, type: t };
  return (
    i === !1 ||
      (Qr(i)
        ? (o = i({ ...u, isLoading: a }))
        : R.isValidElement(i)
        ? (o = R.cloneElement(i, u))
        : a
        ? (o = ym.spinner())
        : CN(t) && (o = ym[t](u))),
    o
  );
}
var _N = (e) => {
    let {
        isRunning: t,
        preventExitTransition: a,
        toastRef: i,
        eventHandlers: o,
        playToast: u,
      } = vN(e),
      {
        closeButton: c,
        children: d,
        autoClose: h,
        onClick: m,
        type: g,
        hideProgressBar: y,
        closeToast: b,
        transition: x,
        position: w,
        className: S,
        style: A,
        progressClassName: C,
        updateId: O,
        role: M,
        progress: P,
        rtl: B,
        toastId: N,
        deleteToast: q,
        isIn: X,
        isLoading: Y,
        closeOnClick: E,
        theme: J,
        ariaLabel: ce,
      } = e,
      ae = tr(
        "Toastify__toast",
        `Toastify__toast-theme--${J}`,
        `Toastify__toast--${g}`,
        { "Toastify__toast--rtl": B },
        { "Toastify__toast--close-on-click": E }
      ),
      xe = Qr(S)
        ? S({ rtl: B, position: w, type: g, defaultClassName: ae })
        : tr(ae, S),
      He = AN(e),
      te = !!P || !h,
      le = { closeToast: b, type: g, theme: J },
      oe = null;
    return (
      c === !1 ||
        (Qr(c)
          ? (oe = c(le))
          : R.isValidElement(c)
          ? (oe = R.cloneElement(c, le))
          : (oe = nN(le))),
      Fe.createElement(
        x,
        {
          isIn: X,
          done: q,
          position: w,
          preventExitTransition: a,
          nodeRef: i,
          playToast: u,
        },
        Fe.createElement(
          "div",
          {
            id: N,
            tabIndex: 0,
            onClick: m,
            "data-in": X,
            className: xe,
            ...o,
            style: A,
            ref: i,
            ...(X && { role: M, "aria-label": ce }),
          },
          He != null &&
            Fe.createElement(
              "div",
              {
                className: tr("Toastify__toast-icon", {
                  "Toastify--animate-icon Toastify__zoom-enter": !Y,
                }),
              },
              He
            ),
          b2(d, e, !t),
          oe,
          !e.customProgressBar &&
            Fe.createElement(rN, {
              ...(O && !te ? { key: `p-${O}` } : {}),
              rtl: B,
              theme: J,
              delay: h,
              isRunning: t,
              isIn: X,
              closeToast: b,
              hide: y,
              type: g,
              className: C,
              controlledProgress: te,
              progress: P || 0,
            })
        )
      )
    );
  },
  RN = (e, t = !1) => ({
    enter: `Toastify--animate Toastify__${e}-enter`,
    exit: `Toastify--animate Toastify__${e}-exit`,
    appendPosition: t,
  }),
  ON = tN(RN("bounce", !0)),
  NN = {
    position: "top-right",
    transition: ON,
    autoClose: 5e3,
    closeButton: !0,
    pauseOnHover: !0,
    pauseOnFocusLoss: !0,
    draggable: "touch",
    draggablePercent: 80,
    draggableDirection: "x",
    role: "alert",
    theme: "light",
    "aria-label": "Notifications Alt+T",
    hotKeys: (e) => e.altKey && e.code === "KeyT",
  };
function Sl(e) {
  let t = { ...NN, ...e },
    a = e.stacked,
    [i, o] = R.useState(!0),
    u = R.useRef(null),
    { getToastToRender: c, isToastActive: d, count: h } = yN(t),
    { className: m, style: g, rtl: y, containerId: b, hotKeys: x } = t;
  function w(A) {
    let C = tr("Toastify__toast-container", `Toastify__toast-container--${A}`, {
      "Toastify__toast-container--rtl": y,
    });
    return Qr(m)
      ? m({ position: A, rtl: y, defaultClassName: C })
      : tr(C, mm(m));
  }
  function S() {
    a && (o(!0), _e.play());
  }
  return (
    bN(() => {
      var A;
      if (a) {
        let C = u.current.querySelectorAll('[data-in="true"]'),
          O = 12,
          M = (A = t.position) == null ? void 0 : A.includes("top"),
          P = 0,
          B = 0;
        Array.from(C)
          .reverse()
          .forEach((N, q) => {
            let X = N;
            X.classList.add("Toastify__toast--stacked"),
              q > 0 && (X.dataset.collapsed = `${i}`),
              X.dataset.pos || (X.dataset.pos = M ? "top" : "bot");
            let Y = P * (i ? 0.2 : 1) + (i ? 0 : O * q);
            X.style.setProperty("--y", `${M ? Y : Y * -1}px`),
              X.style.setProperty("--g", `${O}`),
              X.style.setProperty("--s", `${1 - (i ? B : 0)}`),
              (P += X.offsetHeight),
              (B += 0.025);
          });
      }
    }, [i, h, a]),
    R.useEffect(() => {
      function A(C) {
        var O;
        let M = u.current;
        x(C) &&
          ((O = M.querySelector('[tabIndex="0"]')) == null || O.focus(),
          o(!1),
          _e.pause()),
          C.key === "Escape" &&
            (document.activeElement === M ||
              (M != null && M.contains(document.activeElement))) &&
            (o(!0), _e.play());
      }
      return (
        document.addEventListener("keydown", A),
        () => {
          document.removeEventListener("keydown", A);
        }
      );
    }, [x]),
    Fe.createElement(
      "section",
      {
        ref: u,
        className: "Toastify",
        id: b,
        onMouseEnter: () => {
          a && (o(!1), _e.pause());
        },
        onMouseLeave: S,
        "aria-live": "polite",
        "aria-atomic": "false",
        "aria-relevant": "additions text",
        "aria-label": t["aria-label"],
      },
      c((A, C) => {
        let O = C.length ? { ...g } : { ...g, pointerEvents: "none" };
        return Fe.createElement(
          "div",
          {
            tabIndex: -1,
            className: w(A),
            "data-stacked": a,
            style: O,
            key: `c-${A}`,
          },
          C.map(({ content: M, props: P }) =>
            Fe.createElement(
              _N,
              {
                ...P,
                stacked: a,
                collapseAll: S,
                isIn: d(P.toastId, P.containerId),
                key: `t-${P.key}`,
              },
              M
            )
          )
        );
      })
    )
  );
}
const DN = () => {
    const e = Wr(),
      t = R.useRef(),
      a = R.useRef(),
      i = R.useRef(),
      o = R.useRef(),
      u = R.useRef(),
      c = R.useRef(),
      d = async (h) => {
        var g, y;
        if ((h.preventDefault(), i.current.value !== o.current.value)) {
          _e.error("Passwords do not match!");
          return;
        }
        const m = {
          fullName: t.current.value,
          email: a.current.value,
          password: i.current.value,
          semester: u.current.value,
          department: c.current.value,
        };
        try {
          const b = await je.post("apirequest/user/register", m, {
            headers: { "Content-Type": "application/json" },
            withCredentials: !0,
          });
          _e.success(
            b.data.message ||
              "User registered successfully. Please check your email to verify your account!"
          ),
            setTimeout(() => e("/signin"), 3e3);
        } catch (b) {
          _e.error(
            ((y = (g = b.response) == null ? void 0 : g.data) == null
              ? void 0
              : y.message) || "Something went wrong!"
          );
        }
      };
    return _(Ae.div, {
      initial: { opacity: 0, scale: 0 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.5, ease: wx },
      className:
        "flex flex-col items-center justify-center min-h-screen bg-black mt-6",
      children: K("div", {
        className:
          "group backdrop-blur-md bg-white/5 shadow-xl border border-white/20 p-8 rounded-lg w-full max-w-md",
        children: [
          _("div", {
            className: "flex justify-center",
            children: K("h1", {
              className: "font-semibold text-white text-3xl mb-6 text-center",
              children: [
                "Sign",
                _("span", { className: "text-blue-600", children: " Up" }),
              ],
            }),
          }),
          K("form", {
            onSubmit: d,
            className: "flex flex-col gap-4",
            children: [
              K("div", {
                className: "flex flex-col",
                children: [
                  _("label", {
                    className: "font-medium text-sm text-white",
                    children: "Full Name",
                  }),
                  _("input", {
                    type: "text",
                    ref: t,
                    className:
                      "border-2 rounded-md p-2 w-full text-sm bg-transparent text-white",
                    placeholder: "Your Full Name",
                    required: !0,
                  }),
                ],
              }),
              K("div", {
                className: "flex flex-col",
                children: [
                  _("label", {
                    className: "font-medium text-sm text-white",
                    children: "Department",
                  }),
                  K("select", {
                    ref: c,
                    className:
                      "border-2 rounded-md p-2 w-full text-sm bg-black text-white",
                    required: !0,
                    children: [
                      _("option", {
                        value: "",
                        disabled: !0,
                        selected: !0,
                        children: "Select Department",
                      }),
                      _("option", {
                        value: "CS",
                        children: "Computer Science",
                      }),
                      _("option", {
                        value: "IT",
                        children: "Information Technology",
                      }),
                      _("option", {
                        value: "ECE",
                        children: "Electronics and Communication",
                      }),
                      _("option", {
                        value: "ME",
                        children: "Mechanical Engineering",
                      }),
                      _("option", {
                        value: "CE",
                        children: "Civil Engineering",
                      }),
                      _("option", {
                        value: "AIML",
                        children: "Electrical Engineering",
                      }),
                      _("option", {
                        value: "DS",
                        children: "Civil Engineering",
                      }),
                      _("option", {
                        value: "Electrical Engineering",
                        children: "Electrical Engineering",
                      }),
                      _("option", {
                        value: "CS/IT",
                        children: "Civil Engineering",
                      }),
                      _("option", {
                        value: "Electrical Engineering",
                        children: "Electrical Engineering",
                      }),
                    ],
                  }),
                ],
              }),
              K("div", {
                className: "flex flex-col",
                children: [
                  _("label", {
                    className: "font-medium text-sm text-white",
                    children: "Semester",
                  }),
                  K("select", {
                    ref: u,
                    className:
                      "border-2 rounded-md p-2 w-full text-sm bg-black text-white",
                    required: !0,
                    children: [
                      _("option", {
                        value: "",
                        disabled: !0,
                        selected: !0,
                        children: "Select Semester",
                      }),
                      Array.from({ length: 8 }, (h, m) =>
                        _("option", { value: m + 1, children: m + 1 }, m + 1)
                      ),
                    ],
                  }),
                ],
              }),
              K("div", {
                className: "flex flex-col",
                children: [
                  _("label", {
                    className: "font-medium text-sm text-white",
                    children: "E-mail",
                  }),
                  _("input", {
                    type: "email",
                    ref: a,
                    className:
                      "border-2 rounded-md p-2 w-full text-sm bg-transparent text-white",
                    placeholder: "example@email.com",
                    required: !0,
                  }),
                ],
              }),
              K("div", {
                className: "flex flex-col",
                children: [
                  _("label", {
                    className: "font-medium text-sm text-white",
                    children: "Password",
                  }),
                  _("input", {
                    type: "password",
                    ref: i,
                    className:
                      "border-2 rounded-md p-2 w-full text-sm bg-transparent text-white",
                    placeholder: "********",
                    required: !0,
                  }),
                ],
              }),
              K("div", {
                className: "flex flex-col",
                children: [
                  _("label", {
                    className: "font-medium text-sm text-white",
                    children: "Confirm Password",
                  }),
                  _("input", {
                    type: "password",
                    ref: o,
                    className:
                      "border-2 rounded-md p-2 w-full text-sm bg-transparent text-white",
                    placeholder: "********",
                    required: !0,
                  }),
                ],
              }),
              _("button", {
                className:
                  "bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-all duration-300",
                children: "Sign Up",
              }),
            ],
          }),
          K("h1", {
            onClick: () => e("/signin"),
            className:
              "cursor-pointer mt-4 text-gray-300 hover:text-white transition-all duration-300",
            children: [
              "Already have an account?",
              _("span", {
                className: "text-blue-600 ml-3",
                children: "Sign In",
              }),
            ],
          }),
          _(Sl, {}),
        ],
      }),
    });
  },
  MN = () =>
    K("div", {
      className: "flex flex-col items-center space-y-8 p-4",
      children: [
        _(Ae.div, {
          animate: { y: -61, opacity: 1 },
          transition: { duration: 0.5, delay: 2 },
          className:
            "p-4 font-bold rounded-xl w-full max-w-[80%] md:max-w-[80%] h-auto flex justify-center flex-wrap",
          children: ["E", "D", "U", "V", "E", "D"].map((e, t) =>
            _(
              Ae.h1,
              {
                initial: { y: 300, opacity: 0 },
                animate: { y: 50, opacity: 1 },
                transition: { duration: 1, delay: t * 0.1 },
                className: `tracking-normal mr-2 text-5xl sm:text-6xl md:text-8xl lg:text-9xl ${
                  t > 2 ? "text-blue-600" : ""
                }`,
                children: e,
              },
              t
            )
          ),
        }),
        _("div", {
          className: "flex justify-center",
          children: _(Ae.div, {
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 0.5, delay: 2, ease: "easeInOut" },
            className:
              "bg-[rgb(20,21,21)] text-white text-xl sm:text-2xl md:text-3xl text-center p-4 md:p-6 rounded-lg w-full max-w-[90%] md:max-w-[80%] shadow-lg",
            children: _("h1", {
              children:
                "Unlock your potential with high-quality learning materials!",
            }),
          }),
        }),
        _(Ae.div, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.5, delay: 3 },
          className:
            "overflow-hidden bg-[#141515] w-full max-w-[90%] md:max-w-[80%] rounded-xl p-4 font-semibold text-center text-sm sm:text-lg",
          children: _("div", {
            className: "overflow-x-hidden",
            children: _(Ae.div, {
              className: "flex gap-6 whitespace-nowrap w-screen",
              animate: { x: ["0%", "-100%"] },
              transition: {
                repeat: 1 / 0,
                repeatType: "loop",
                duration: 10,
                ease: "linear",
              },
              children: Array(10)
                .fill("Notes, PYQs, Shivani and Many More")
                .map((e, t) => _("h1", { children: e }, t)),
            }),
          }),
        }),
      ],
    }),
  kN = () => {
    const e = [
      {
        id: 1,
        title: "PYQ",
        description: "It contains all pyqs with answer",
        img: null,
      },
      {
        id: 2,
        title: "Notes",
        description: "It contains all the Notes",
        img: null,
      },
      {
        id: 3,
        title: "Books",
        description: "It contains all the books",
        img: null,
      },
      { id: 4, title: "DSA", description: "Data Strucuture" },
    ];
    return _(Ae.div, {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { delay: 3.6 },
      className: "overflow-hidden w-full py-10",
      children: _(Ae.div, {
        className: "flex gap-6 whitespace-nowrap w-full",
        animate: { x: ["0%", "-100%"] },
        transition: {
          repeat: 1 / 0,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        },
        children: [...e, ...e].map((t, a) =>
          K(
            Ae.div,
            {
              className:
                "min-w-[200px] text-white md:min-w-[300px] lg:min-w-[418px] bg-gray-900 shadow-lg rounded-xl p-6 text-center border border-gray-200",
              whileHover: { scale: 1.05 },
              children: [
                _("img", { src: t.img, alt: "" }),
                _("h2", {
                  className: "text-xl  font-semibold ",
                  children: t.title,
                }),
                _("span", {
                  className: "inline-block text-wrap",
                  children: t.description,
                }),
              ],
            },
            a
          )
        ),
      }),
    });
  },
  C2 = () => {
    const e = [
        {
          name: "Student Name",
          role: "Role",
          image: "/path-to-team-image1.jpg",
        },
        {
          name: "Student Name",
          role: "Role",
          image: "/path-to-team-image2.jpg",
        },
        {
          name: "Student Name",
          role: "Role",
          image: "/path-to-team-image3.jpg",
        },
        {
          name: "Student Name",
          role: "Role",
          image: "/path-to-team-image4.jpg",
        },
      ],
      t = [
        {
          title: "📚 Study Materials",
          description:
            "Well-organized class notes and reference materials for students.",
        },
        {
          title: "📖 Previous Year Papers",
          description: "Access past exam papers to enhance your preparation.",
        },
        {
          title: "🔄 Book Exchange",
          description:
            "A platform to exchange academic books within the student community.",
        },
        {
          title: "📂 Project Repository",
          description:
            "A secure and categorized collection of academic projects.",
        },
      ];
    return K("div", {
      className: "container mx-auto px-6 py-12 text-[--color-text]",
      children: [
        K(Ae.section, {
          className: "flex flex-col md:flex-row items-center gap-10",
          initial: { opacity: 0, y: -50 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          children: [
            _(Ae.div, {
              className: "md:w-1/2",
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              children: _("img", {
                src: "/src/assets/images/books.png",
                alt: "Edu Ved Learning Platform",
                className: "w-11/12 rounded-lg shadow-lg",
              }),
            }),
            K(Ae.div, {
              className: "md:w-1/2",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.8, delay: 0.2 },
              children: [
                _("h1", {
                  className: "shine text-4xl font-bold",
                  children: "Our Mission",
                }),
                K("p", {
                  className: "text-lg mt-4 leading-relaxed",
                  children: [
                    "Edu Ved is committed to making education",
                    " ",
                    _("strong", {
                      children: "accessible, structured, and efficient",
                    }),
                    ". Our platform provides a seamless way for students to access study materials, collaborate, and enhance their learning experience.",
                  ],
                }),
              ],
            }),
          ],
        }),
        K(Ae.section, {
          className: "flex flex-col md:flex-row items-center gap-10 mt-12",
          initial: { opacity: 0, x: -50 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.8 },
          children: [
            K(Ae.div, {
              className: "md:w-1/2",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.8, delay: 0.2 },
              children: [
                _("h2", {
                  className: "text-4xl font-bold shine",
                  children: "Founding Story",
                }),
                K("p", {
                  className: "text-lg mt-4 leading-relaxed",
                  children: [
                    "Edu Ved was created with the vision to",
                    " ",
                    _("strong", { children: "simplify academic learning" }),
                    " by eliminating the hassle of searching for study materials. By leveraging technology, we ensure that students have direct access to structured resources, making their academic journey smoother and more efficient.",
                  ],
                }),
              ],
            }),
            _(Ae.div, {
              className: "md:w-1/2",
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              children: _("img", {
                src: "/src/assets/images/bookImg.png",
                alt: "Edu Ved Learning Platform",
                className: "w-11/12 rounded-lg shadow-lg",
              }),
            }),
          ],
        }),
        K("section", {
          className: "mb-20 mt-12",
          children: [
            _("h2", {
              className: "text-4xl font-bold shine text-center",
              children: "What We Offer",
            }),
            _("div", {
              className: "grid md:grid-cols-2 gap-8 mt-8",
              children: t.map((a, i) =>
                K(
                  Ae.div,
                  {
                    className:
                      "bg-[#141515] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow",
                    whileHover: { scale: 1.05 },
                    children: [
                      _("h3", {
                        className: "text-2xl font-semibold",
                        children: a.title,
                      }),
                      _("p", {
                        className: "text-lg mt-2",
                        children: a.description,
                      }),
                    ],
                  },
                  i
                )
              ),
            }),
          ],
        }),
        K("section", {
          children: [
            _("h2", {
              className: "shine text-4xl font-bold text-center mb-12",
              children: "Meet Our Team",
            }),
            _("div", {
              className: "grid grid-cols-2 md:grid-cols-4 gap-6",
              children: e.map((a, i) =>
                K(
                  Ae.div,
                  {
                    className:
                      "bg-[#141515] shadow-md rounded-lg p-4 text-center hover:shadow-lg transition-shadow",
                    whileHover: { scale: 1.05 },
                    children: [
                      _("img", {
                        src: a.image,
                        alt: `${a.name} - ${a.role}`,
                        className:
                          "w-20 h-20 mx-auto rounded-full object-cover border-2 border-gray-200",
                      }),
                      _("h3", {
                        className: "mt-3 font-semibold text-lg",
                        children: a.name,
                      }),
                      _("p", { children: a.role }),
                    ],
                  },
                  i
                )
              ),
            }),
          ],
        }),
      ],
    });
  },
  LN = () => {
    const e = [
        {
          title: "Notes",
          description: "Get Rgpv Btech Toper's Notes",
          icon: "https://topperworld.in/media/elementor/thumbs/Topperworld-notes-qjm1nqvfjjnan9o9wrly83e1sn8ogmaj2sdn49jf44.png",
        },
        {
          title: "PYQs",
          description: "Get Chapter Wise Previous Year Question",
          icon: "https://topperworld.in/media/elementor/thumbs/paper-qjm1nwigojv0kxg2zu1pn1ytcygvqswx3kajzxb22s.png",
        },
        {
          title: "Book Exchanger",
          description: "Get books from the best authors",
          icon: "https://topperworld.in/media/elementor/thumbs/Topperworld-ebooks-qjm1o17nmq1g6z998e2uhis4bvtptafks7jzeb437o.png",
        },
        {
          title: "Syllabus",
          description: "Get Rgpv syllabus",
          icon: "https://topperworld.in/media/elementor/thumbs/checklist-1-qjm1nye527xl85dcouuys1hqjq7m674drtliyh89qc.png",
        },
      ],
      t = [
        {
          title: "Quiz",
          description: "Get Rgpv Btech Chapter Wise Quiz",
          icon: "../src/assets/images/Quiz.png",
        },
        {
          title: "Pyq-Answer",
          description: "Get Chapter Wise Previous Year Questions Answer",
          icon: "../src/assets/images/pyq.png",
        },
      ];
    return K(Oc, {
      children: [
        _("h1", { className: "g-text text-center", children: "Our Services" }),
        _("div", {
          className:
            " rounded-2xl m-10  grid sm:grid-cols-2 md:grid-cols-4  gap-4 p-4 ",
          children: e.map((a, i) =>
            _(
              "div",
              {
                className:
                  "bg-[rgb(20,21,21)] rounded-2xl lg :h-55 w-55 ml-3 shadow-sm hover:shadow-blue-600",
                children: K("div", {
                  className:
                    "flex flex-col items-center text-center space-y-4 p-4",
                  children: [
                    _("img", {
                      className: "h-20 w-20 hover:-translate-y-2 mt-1.5",
                      src: a.icon,
                      alt: a.title,
                    }),
                    _("h1", {
                      className: "text-blue-600 text-2xl font-bold mt-0.5",
                      children: a.title,
                    }),
                    _("p", { className: " ", children: a.description }),
                  ],
                }),
              },
              i
            )
          ),
        }),
        _("h1", {
          className: "g-text text-center",
          children: "Premium Feature",
        }),
        _("div", {
          className:
            " rounded-2xl m-10  grid sm:grid-cols-2 md:grid-cols-4  gap-4 p-4 ",
          children: t.map((a, i) =>
            _(
              "div",
              {
                className:
                  "bg-[rgb(20,21,21)] rounded-2xl lg :h-55 w-55 ml-3 shadow-sm hover:shadow-blue-600",
                children: K("div", {
                  className:
                    "flex flex-col items-center text-center space-y-4 p-4",
                  children: [
                    _("img", {
                      className: "h-20 w-20 hover:-translate-y-2 mt-1.5 ",
                      src: a.icon,
                      alt: a.title,
                    }),
                    _("h1", {
                      className: "text-blue-600 text-2xl font-bold mt-0.5 ",
                      children: a.title,
                    }),
                    _("p", { className: " ", children: a.description }),
                  ],
                }),
              },
              i
            )
          ),
        }),
      ],
    });
  },
  BN = () => K(Oc, { children: [_(MN, {}), _(LN, {}), _(kN, {}), _(C2, {})] }),
  UN = () => {
    const e = Wr(),
      { updateUser: t } = R.useContext(Ts),
      a = R.useRef(),
      i = R.useRef(),
      o = async (u) => {
        var d, h;
        u.preventDefault();
        const c = { email: a.current.value, password: i.current.value };
        try {
          const m = await je.post("apirequest/user/login", c, {
            headers: { "Content-Type": "application/json" },
          });
          if (m.status === 200) {
            const { user: g, token: y } = m.data;
            t(g),
              localStorage.setItem("token", y),
              _e.success(m.data.message, { position: "top-center" }),
              setTimeout(() => {
                e("/dashboard", {
                  state: { department: g.department, semester: g.semester },
                });
              }, 2e3);
          }
        } catch (m) {
          console.error("Login error:", m),
            _e.error(
              ((h = (d = m.response) == null ? void 0 : d.data) == null
                ? void 0
                : h.message) || "Login failed!",
              { position: "top-center" }
            );
        }
      };
    return K(Ae.div, {
      initial: { opacity: 0, scale: 0 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.5, ease: "linear" },
      className:
        "flex flex-col items-center justify-center min-h-screen bg-black mt-6",
      children: [
        _(Sl, {}),
        K("div", {
          className:
            "group backdrop-blur-md bg-white/5 shadow-xl border border-white/20 p-8 rounded-lg w-full max-w-md",
          children: [
            K("h1", {
              className: "text-white text-3xl text-center",
              children: [
                "Sign ",
                _("span", { className: "text-blue-600", children: "In" }),
              ],
            }),
            K("form", {
              onSubmit: o,
              className: "flex flex-col gap-4",
              children: [
                K("div", {
                  className: "flex flex-col",
                  children: [
                    _("label", { className: "text-white", children: "E-mail" }),
                    _("input", {
                      type: "email",
                      ref: a,
                      className:
                        "border-2 rounded-md p-2 w-full text-white bg-transparent",
                      placeholder: "example@email.com",
                      required: !0,
                    }),
                  ],
                }),
                K("div", {
                  className: "flex flex-col",
                  children: [
                    _("label", {
                      className: "text-white",
                      children: "Password",
                    }),
                    _("input", {
                      type: "password",
                      ref: i,
                      className:
                        "border-2 rounded-md p-2 w-full text-white bg-transparent",
                      placeholder: "********",
                      required: !0,
                    }),
                  ],
                }),
                _("button", {
                  className:
                    "bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-all duration-300",
                  children: "Sign In",
                }),
              ],
            }),
            K("h1", {
              onClick: () => e("/signup"),
              className: "cursor-pointer mt-4 text-gray-300 hover:text-white",
              children: [
                "Create Account? ",
                _("span", {
                  className: "text-blue-600 ml-3",
                  children: "Sign Up",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  vs = ({ title: e, image: t, link: a }) => {
    const i = Wr();
    return K("div", {
      className:
        "bg-gray-800 mx-2 sm:mx-4 text-center rounded-xl mt-4 shadow-lg transition-transform transform hover:scale-105 sm:hover:scale-110 duration-300 ease-in-out hover:shadow-2xl animate-slide-up",
      children: [
        t &&
          _("img", { src: t, alt: e, className: "w-full h-48 rounded-t-xl " }),
        K("div", {
          className: "p-3 sm:p-4",
          children: [
            _("h2", {
              className:
                "text-base sm:text-lg md:text-xl font-semibold text-white",
              children: e,
            }),
            _("button", {
              className:
                "mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md",
              onClick: () => {
                a.startsWith("http://") || a.startsWith("https://")
                  ? window.open(a, "_blank")
                  : i(a);
              },
              children: "Select",
            }),
          ],
        }),
      ],
    });
  },
  zN = () => {
    const { currentUser: e } = R.useContext(Ts),
      [t, a] = R.useState([]),
      [i, o] = R.useState(!0),
      u = e == null ? void 0 : e.department,
      c = e == null ? void 0 : e.semester;
    return (
      R.useEffect(() => {
        u &&
          c &&
          (async () => {
            try {
              const h = await je.get(
                `apirequest/subjects/getNotes?department=${u}&semester=${c}`
              );
              a(h.data);
            } catch (h) {
              console.error("Error fetching departments:", h);
            } finally {
              o(!1);
            }
          })();
      }, [u, c]),
      K("div", {
        className: "flex flex-col items-center p-4 mt-12 mb-28",
        children: [
          _(Ae.h1, {
            className: "text-blue-500 text-3xl font-bold mb-6",
            initial: { opacity: 0, y: -50 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            children: "Dashboard",
          }),
          _("div", {
            className:
              "grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 w-full",
            children: i
              ? _(Ae.p, {
                  className: "text-white text-lg",
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { duration: 0.5 },
                  children: "Loading departments...",
                })
              : t.length > 0
              ? t.map((d, h) =>
                  _(
                    Ae.div,
                    {
                      initial: { opacity: 0, scale: 0.8 },
                      animate: { opacity: 1, scale: 1 },
                      transition: { duration: 0.4, delay: h * 0.1 },
                      children: _(vs, {
                        title: d.name,
                        image: d.imageUrl,
                        link: `/subjects/${encodeURIComponent(d.name)}`,
                      }),
                    },
                    h
                  )
                )
              : _(Ae.p, {
                  className: "text-white text-lg",
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { duration: 0.5 },
                  children: "No departments found.",
                }),
          }),
        ],
      })
    );
  },
  PN = "/assets/cse-jiqtAeP2.png",
  VN = "/assets/ee-BUk0FaRR.png",
  jN = "/assets/me-gMWGEx2y.png",
  HN = "/assets/ce-DcZDCbO9.png",
  qN = "/assets/ece-B-v_DK_Q.png",
  $N = "/assets/it-BL5d7fqG.png",
  FN = () =>
    K("div", {
      className:
        "flex flex-col items-center mt-12 mb-28 justify-center min-h-screen",
      children: [
        _("h1", {
          className: "text-blue-400 text-2xl font-bold mb-6",
          children: "Please Select Your Department",
        }),
        _("div", {
          className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8",
          children: [
            { name: "Computer Science", img: PN, link: "/select-sem/CS" },
            { name: "Electrical Engineering", img: VN, link: "/select-sem/EE" },
            { name: "Mechanical Engineering", img: jN, link: "/select-sem/ME" },
            { name: "Civil Engineering", img: HN, link: "/select-sem/CE" },
            {
              name: "Electronics & Communication",
              img: qN,
              link: "/select-sem/ECE",
            },
            { name: "Information Technology", img: $N, link: "/select-sem/IT" },
          ].map((t, a) =>
            _(vs, { title: t.name, image: t.img, link: t.link }, a)
          ),
        }),
      ],
    }),
  YN = "/assets/sem-DM68YRM-.png",
  GN = () => {
    const { department: e } = _c(),
      t = [1, 2, 3, 4, 5, 6, 7, 8];
    return K("div", {
      className: "flex flex-col items-center mt-12 mb-28",
      children: [
        K("h1", {
          className: "text-blue-400 text-2xl font-bold mb-6",
          children: ["Select Semester for ", e.toUpperCase()],
        }),
        _("div", {
          className: "grid grid-cols-2 md:grid-cols-4 gap-8",
          children: t.map((a) =>
            _(
              vs,
              {
                title: `Semester ${a}`,
                image: YN,
                link: `/subjects/${e}/${a}`,
              },
              a
            )
          ),
        }),
      ],
    });
  },
  KN = ({ department: e, semester: t }) => {
    const a = _c(),
      i = e || a.department,
      o = t || a.semester,
      [u, c] = R.useState([]),
      [d, h] = R.useState(!0);
    return (
      R.useEffect(() => {
        if (!i || !o) return;
        (async () => {
          try {
            const g = await je.get(
              `apirequest/subjects/getNotes?department=${i}&semester=${o}`
            );
            c(g.data);
          } catch (g) {
            console.error("Error fetching subjects:", g);
          } finally {
            h(!1);
          }
        })();
      }, [i, o]),
      K("div", {
        className: "flex flex-col items-center mt-12 mb-28",
        children: [
          K("h1", {
            className: "text-blue-400 text-2xl font-bold mb-6",
            children: [
              "Subjects for ",
              i == null ? void 0 : i.toUpperCase(),
              " - Semester ",
              o,
            ],
          }),
          _("div", {
            className:
              "sm:grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3",
            children: d
              ? _("p", {
                  className: "text-white",
                  children: "Loading subjects...",
                })
              : u.length > 0
              ? u.map((m, g) =>
                  _(
                    vs,
                    {
                      title: m.name,
                      image: m.imageUrl,
                      link: `/chapter/${i}/${o}/${m.name}`,
                    },
                    g
                  )
                )
              : _("p", {
                  className: "text-white",
                  children: "No subjects found.",
                }),
          }),
        ],
      })
    );
  },
  XN = () => {
    const { department: e, semester: t, subject: a } = _c(),
      [i, o] = R.useState([]),
      [u, c] = R.useState(!0);
    return (
      R.useEffect(() => {
        (async () => {
          try {
            const h = await je.get(
              `apirequest/chapter/getNotes?department=${e}&semester=${t}&subjectName=${a}`
            );
            console.log("data", h.data),
              h.data && Array.isArray(h.data.notes) ? o(h.data.notes) : o([]);
          } catch (h) {
            console.error("Error fetching notes:", h), o([]);
          } finally {
            c(!1);
          }
        })();
      }, [e, t, a]),
      u
        ? _("h1", { children: "Loading..." })
        : K(Oc, {
            children: [
              K("div", {
                className: "flex flex-col items-center mt-12 mb-28",
                children: [
                  K("h1", {
                    className: "text-blue-400 text-2xl font-bold mb-6",
                    children: [
                      "Notes for ",
                      a.toUpperCase(),
                      " - Semester ",
                      t,
                    ],
                  }),
                  _("div", {
                    className: "grid grid-cols-2 md:grid-cols-3 gap-8",
                    children:
                      i.length > 0
                        ? i.map((d, h) =>
                            _(
                              vs,
                              {
                                title: `Chapter ${d.chapterNo}`,
                                image: "/src/assets/images/note.png",
                                link: d.notesPdf,
                              },
                              h
                            )
                          )
                        : _("p", { children: "No notes available." }),
                  }),
                ],
              }),
              K("div", {
                className: "flex flex-col items-center mt-12 mb-28",
                children: [
                  K("h1", {
                    className: "text-blue-400 text-2xl font-bold mb-6",
                    children: ["PYQ for ", a.toUpperCase(), " - Semester ", t],
                  }),
                  _("div", {
                    className: "grid grid-cols-2 md:grid-cols-3 gap-8",
                    children:
                      i.length > 0
                        ? i.map((d, h) =>
                            _(
                              vs,
                              {
                                title: `Chapter ${d.chapterNo}`,
                                image: "/src/assets/images/note.png",
                                link: d.notesPdf,
                              },
                              h
                            )
                          )
                        : _("p", {
                            children: "No previous year questions available.",
                          }),
                  }),
                ],
              }),
            ],
          })
    );
  },
  QN = [
    { name: "Computer Science", value: "CS" },
    { name: "Electrical Engineering", value: "EE" },
    { name: "Mechanical Engineering", value: "ME" },
    { name: "Civil Engineering", value: "CE" },
    { name: "Electronics & Communication", value: "ECE" },
    { name: "Information Technology", value: "IT" },
  ],
  ZN = Array.from({ length: 8 }, (e, t) => t + 1),
  IN = () => {
    const e = R.useRef(null),
      t = R.useRef(null),
      a = R.useRef(null),
      i = R.useRef(null),
      o = R.useRef(null),
      u = R.useRef(null);
    return K("div", {
      className:
        "max-w-lg mx-auto p-6 bg-gray-800 rounded-lg shadow-md text-violet-100",
      children: [
        _("h2", {
          className: "text-2xl font-bold mb-4",
          children: "Upload Notes & PYQs",
        }),
        K("form", {
          onSubmit: async (d) => {
            d.preventDefault();
            const h = new FormData();
            h.append("chapterNo", e.current.value),
              h.append("subjectName", t.current.value),
              h.append("department", a.current.value),
              h.append("semester", i.current.value),
              h.append("notesPdf", o.current.files[0]),
              h.append("pyqPdf", u.current.files[0]);
            try {
              await je.post("apirequest/chapter/upload", h, {
                headers: { "Content-Type": "multipart/form-data" },
              }),
                alert("Upload successful!");
            } catch (m) {
              console.error("Upload failed", m);
            }
          },
          className: "space-y-4",
          children: [
            _("input", {
              type: "text",
              ref: e,
              placeholder: "Chapter No",
              className: "w-full p-2 rounded",
              required: !0,
            }),
            _("input", {
              type: "text",
              ref: t,
              placeholder: "Subject Name",
              className: "w-full p-2 rounded",
              required: !0,
            }),
            K("select", {
              ref: a,
              className: "w-full p-2 rounded",
              required: !0,
              children: [
                _("option", { value: "", children: "Select Department" }),
                QN.map((d) =>
                  _(
                    "option",
                    {
                      className: "bg-pink text-blue-800",
                      value: d.value,
                      children: d.name,
                    },
                    d.value
                  )
                ),
              ],
            }),
            K("select", {
              ref: i,
              className: "w-full p-2 rounded",
              required: !0,
              children: [
                _("option", { value: "", children: "Select Semester" }),
                ZN.map((d) =>
                  _(
                    "option",
                    { className: " text-blue-800", value: d, children: d },
                    d
                  )
                ),
              ],
            }),
            _("label", {
              className: "block text-sm font-medium",
              children: "Choose Notes PDF:",
            }),
            _("input", {
              type: "file",
              ref: o,
              accept: "application/pdf",
              className: "w-full",
              required: !0,
            }),
            _("label", {
              className: "block text-sm font-medium",
              children: "Choose PYQ PDF:",
            }),
            _("input", {
              type: "file",
              ref: u,
              accept: "application/pdf",
              className: "w-full",
              required: !0,
            }),
            _("button", {
              type: "submit",
              className:
                "w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
              children: "Upload",
            }),
          ],
        }),
      ],
    });
  },
  WN = () => {
    const { token: e } = _c(),
      t = Wr(),
      [a, i] = R.useState(!0);
    return (
      R.useEffect(() => {
        (async () => {
          var u, c;
          try {
            const d = await je.get(`apirequest/user/verify-email/${e}`);
            _e.success(d.data.message), setTimeout(() => t("/signin"), 3e3);
          } catch (d) {
            _e.error(
              ((c = (u = d.response) == null ? void 0 : u.data) == null
                ? void 0
                : c.message) || "Invalid or expired link."
            );
          } finally {
            i(!1);
          }
        })();
      }, [e, t]),
      _("div", {
        className:
          "flex flex-col items-center justify-center min-h-screen bg-black",
        children: K("div", {
          className: "bg-white p-6 rounded-md shadow-lg w-96 text-center",
          children: [
            a
              ? _("h2", {
                  className: "text-xl",
                  children: "Verifying Email...",
                })
              : _("h2", { className: "text-xl", children: "Redirecting..." }),
            _(Sl, {}),
          ],
        }),
      })
    );
  },
  JN = () => {
    const e = Wr(),
      [t, a] = R.useState(!0),
      [i, o] = R.useState([]),
      [u, c] = R.useState(!1),
      [d, h] = R.useState({
        semester: "",
        department: "",
        subject: "",
        year: "",
        price: "",
        location: "",
        image: null,
      }),
      [m, g] = R.useState(null),
      [y, b] = R.useState("");
    R.useEffect(() => {
      (async () => {
        try {
          c(!0);
          const O = await je.get("apirequest/shivani/all");
          o(O.data.books || []), c(!1);
        } catch (O) {
          _e.error("Error fetching books"),
            console.error("Error fetching books:", O),
            c(!1);
        }
      })();
    }, []);
    const x = (C) => {
        const { name: O, value: M } = C.target;
        h((P) => ({ ...P, [O]: M }));
      },
      w = (C) => {
        const O = C.target.files[0];
        if (O) {
          if (!["image/jpeg", "image/png", "image/jpg"].includes(O.type)) {
            _e.error("Only JPG, JPEG, and PNG files are allowed");
            return;
          }
          if (O.size > 5 * 1024 * 1024) {
            _e.error("Image size should not exceed 5 MB");
            return;
          }
          h((P) => ({ ...P, image: O })), g(URL.createObjectURL(O));
        }
      },
      S = async () => {
        c(!0);
        const C = new FormData();
        for (const P in d) C.append(P, d[P]);
        const O = JSON.parse(localStorage.getItem("user")),
          M = O == null ? void 0 : O._id;
        try {
          const P = await je.post(`apirequest/shivani/add?userId=${M}`, C);
          if (P.status === 200) {
            _e.success(P.data.message),
              h({
                semester: "",
                department: "",
                subject: "",
                year: "",
                price: "",
                location: "",
                image: null,
              }),
              g(null);
            return;
          } else _e.error("Failed to add book");
        } catch (P) {
          console.error("Error while adding book:", P),
            _e.error("Something went wrong. Please try again.");
        } finally {
          c(!1);
        }
      };
    return K("div", {
      className: "min-h-screen bg-black text-white p-6",
      children: [
        _("h1", {
          className:
            "items-center text-4xl font-bold text-center mb-8 animate-bounce",
          children: t ? "Buy Books" : "Sell Your Book",
        }),
        _(Sl, { position: "top-center", autoClose: 3e3 }),
        K("div", {
          className: "flex justify-between items-center mb-6",
          children: [
            K("div", {
              children: [
                _("button", {
                  onClick: () => a(!0),
                  className: `py-2 px-4 rounded-l-lg ${
                    t ? "bg-blue-700 text-white" : "bg-gray-600 text-gray-300"
                  }`,
                  children: "Buy",
                }),
                _("button", {
                  onClick: () => a(!1),
                  className: `py-2 px-4 rounded-r-lg ${
                    t ? "bg-gray-600 text-gray-300" : "bg-blue-700 text-white"
                  }`,
                  children: "Sell",
                }),
              ],
            }),
            _("button", {
              onClick: () => {
                b("myBooks"), e("/myBooks");
              },
              className: `py-2 px-4 rounded-lg text-xl ${
                y === "myBooks"
                  ? "bg-blue-700 text-white"
                  : "bg-gray-600 text-gray-300"
              } hover:bg-blue-800 transition duration-300`,
              children: "My Books",
            }),
          ],
        }),
        u
          ? _("p", { className: "text-center text-xl", children: "Loading..." })
          : t
          ? _("div", {
              className: "grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
              children:
                i.length > 0
                  ? i.map((C) =>
                      K(
                        "div",
                        {
                          className:
                            "p-4 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition",
                          children: [
                            _("img", {
                              src:
                                C.imageUrl || "https://via.placeholder.com/150",
                              alt: C.subject,
                              className: "w-full h-48 object-cover rounded-md",
                            }),
                            _("h2", {
                              className:
                                "text-xl font-semibold text-blue-400 mt-2",
                              children: C.subject,
                            }),
                            K("p", {
                              className: "text-gray-300",
                              children: ["Department: ", C.department],
                            }),
                            K("p", {
                              className: "text-gray-400",
                              children: ["Price: ₹", C.price],
                            }),
                            K("p", {
                              className: "text-gray-400",
                              children: ["Year: ", C.year],
                            }),
                            K("p", {
                              className: "text-gray-400",
                              children: ["Location: ", C.location],
                            }),
                            K("p", {
                              className: "text-gray-400",
                              children: ["Quantity: ", C.quantity],
                            }),
                            _("button", {
                              onClick: () => {
                                e("/chat");
                              },
                              className:
                                "mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition",
                              children: "Buy Now",
                            }),
                          ],
                        },
                        C._id
                      )
                    )
                  : _("p", {
                      className: "text-center text-xl",
                      children: "No books available",
                    }),
            })
          : K("div", {
              className:
                "bg-gray-800 p-6 rounded-xl shadow-lg max-w-md mx-auto",
              children: [
                _("label", {
                  className: "text-gray-400",
                  children: "Select Semester:",
                }),
                K("select", {
                  name: "semester",
                  value: d.semester || "",
                  onChange: x,
                  className:
                    "w-full p-3 mb-4 bg-gray-700 text-white rounded focus:ring-2 focus:ring-blue-500",
                  children: [
                    _("option", {
                      value: "",
                      disabled: !0,
                      children: "Select Semester",
                    }),
                    _("option", { value: "1", children: "1st Semester" }),
                    _("option", { value: "2", children: "2nd Semester" }),
                    _("option", { value: "3", children: "3rd Semester" }),
                    _("option", { value: "4", children: "4th Semester" }),
                    _("option", { value: "5", children: "5th Semester" }),
                    _("option", { value: "6", children: "6th Semester" }),
                    _("option", { value: "7", children: "7th Semester" }),
                    _("option", { value: "8", children: "8th Semester" }),
                  ],
                }),
                _("label", {
                  className: "text-gray-400",
                  children: "Select Department:",
                }),
                K("select", {
                  name: "department",
                  value: d.department || "",
                  onChange: x,
                  className:
                    "w-full p-3 mb-4 bg-gray-700 text-white rounded focus:ring-2 focus:ring-blue-500",
                  children: [
                    _("option", {
                      value: "",
                      disabled: !0,
                      children: "Select Department",
                    }),
                    _("option", { value: "CS", children: "Computer Science" }),
                    _("option", {
                      value: "IT",
                      children: "Information Technology",
                    }),
                    _("option", {
                      value: "ECE",
                      children: "Electronics & Communication",
                    }),
                    _("option", {
                      value: "ME",
                      children: "Mechanical Engineering",
                    }),
                    _("option", { value: "CE", children: "Civil Engineering" }),
                    _("option", {
                      value: "EE",
                      children: "Electrical Engineering",
                    }),
                  ],
                }),
                Object.keys(d).map(
                  (C) =>
                    C !== "image" &&
                    C !== "semester" &&
                    C !== "department" &&
                    _(
                      "input",
                      {
                        type: "text",
                        name: C,
                        placeholder: C.charAt(0).toUpperCase() + C.slice(1),
                        value: d[C],
                        onChange: x,
                        className:
                          "w-full p-3 mb-4 bg-gray-700 text-white rounded focus:ring-2 focus:ring-blue-500",
                      },
                      C
                    )
                ),
                _("label", {
                  className: "text-gray-400",
                  children: "Upload Book Image:",
                }),
                _("input", {
                  type: "file",
                  accept: "image/*",
                  onChange: w,
                  className: "w-full p-2 mb-4 bg-gray-700 text-white rounded",
                }),
                m &&
                  _("img", {
                    src: m,
                    alt: "Preview",
                    className: "w-full h-48 object-cover rounded-md",
                  }),
                _("button", {
                  onClick: S,
                  disabled: u,
                  className:
                    "w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition",
                  children: u ? "Adding..." : "Add Book",
                }),
              ],
            }),
      ],
    });
  };
function A2(e, t, a = void 0) {
  const i = {};
  for (const o in e) {
    const u = e[o];
    let c = "",
      d = !0;
    for (let h = 0; h < u.length; h += 1) {
      const m = u[h];
      m &&
        ((c += (d === !0 ? "" : " ") + t(m)),
        (d = !1),
        a && a[m] && (c += " " + a[m]));
    }
    i[o] = c;
  }
  return i;
}
function pi(e, ...t) {
  const a = new URL(`https://mui.com/production-error/?code=${e}`);
  return (
    t.forEach((i) => a.searchParams.append("args[]", i)),
    `Minified MUI error #${e}; visit ${a} for the full message.`
  );
}
function bs(e) {
  if (typeof e != "string") throw new Error(pi(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
var Bh = { exports: {} },
  Je = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var x1;
function eD() {
  if (x1) return Je;
  x1 = 1;
  var e = Symbol.for("react.transitional.element"),
    t = Symbol.for("react.portal"),
    a = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    o = Symbol.for("react.profiler"),
    u = Symbol.for("react.consumer"),
    c = Symbol.for("react.context"),
    d = Symbol.for("react.forward_ref"),
    h = Symbol.for("react.suspense"),
    m = Symbol.for("react.suspense_list"),
    g = Symbol.for("react.memo"),
    y = Symbol.for("react.lazy"),
    b = Symbol.for("react.offscreen"),
    x = Symbol.for("react.client.reference");
  function w(S) {
    if (typeof S == "object" && S !== null) {
      var A = S.$$typeof;
      switch (A) {
        case e:
          switch (((S = S.type), S)) {
            case a:
            case o:
            case i:
            case h:
            case m:
              return S;
            default:
              switch (((S = S && S.$$typeof), S)) {
                case c:
                case d:
                case y:
                case g:
                  return S;
                case u:
                  return S;
                default:
                  return A;
              }
          }
        case t:
          return A;
      }
    }
  }
  return (
    (Je.ContextConsumer = u),
    (Je.ContextProvider = c),
    (Je.Element = e),
    (Je.ForwardRef = d),
    (Je.Fragment = a),
    (Je.Lazy = y),
    (Je.Memo = g),
    (Je.Portal = t),
    (Je.Profiler = o),
    (Je.StrictMode = i),
    (Je.Suspense = h),
    (Je.SuspenseList = m),
    (Je.isContextConsumer = function (S) {
      return w(S) === u;
    }),
    (Je.isContextProvider = function (S) {
      return w(S) === c;
    }),
    (Je.isElement = function (S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }),
    (Je.isForwardRef = function (S) {
      return w(S) === d;
    }),
    (Je.isFragment = function (S) {
      return w(S) === a;
    }),
    (Je.isLazy = function (S) {
      return w(S) === y;
    }),
    (Je.isMemo = function (S) {
      return w(S) === g;
    }),
    (Je.isPortal = function (S) {
      return w(S) === t;
    }),
    (Je.isProfiler = function (S) {
      return w(S) === o;
    }),
    (Je.isStrictMode = function (S) {
      return w(S) === i;
    }),
    (Je.isSuspense = function (S) {
      return w(S) === h;
    }),
    (Je.isSuspenseList = function (S) {
      return w(S) === m;
    }),
    (Je.isValidElementType = function (S) {
      return (
        typeof S == "string" ||
        typeof S == "function" ||
        S === a ||
        S === o ||
        S === i ||
        S === h ||
        S === m ||
        S === b ||
        (typeof S == "object" &&
          S !== null &&
          (S.$$typeof === y ||
            S.$$typeof === g ||
            S.$$typeof === c ||
            S.$$typeof === u ||
            S.$$typeof === d ||
            S.$$typeof === x ||
            S.getModuleId !== void 0))
      );
    }),
    (Je.typeOf = w),
    Je
  );
}
var w1;
function tD() {
  return w1 || ((w1 = 1), (Bh.exports = eD())), Bh.exports;
}
var _2 = tD();
function Yr(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function R2(e) {
  if (R.isValidElement(e) || _2.isValidElementType(e) || !Yr(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((a) => {
      t[a] = R2(e[a]);
    }),
    t
  );
}
function xn(e, t, a = { clone: !0 }) {
  const i = a.clone ? { ...e } : e;
  return (
    Yr(e) &&
      Yr(t) &&
      Object.keys(t).forEach((o) => {
        R.isValidElement(t[o]) || _2.isValidElementType(t[o])
          ? (i[o] = t[o])
          : Yr(t[o]) && Object.prototype.hasOwnProperty.call(e, o) && Yr(e[o])
          ? (i[o] = xn(e[o], t[o], a))
          : a.clone
          ? (i[o] = Yr(t[o]) ? R2(t[o]) : t[o])
          : (i[o] = t[o]);
      }),
    i
  );
}
function Xo(e, t) {
  return t ? xn(e, t, { clone: !1 }) : e;
}
function nD(e, t) {
  if (!e.containerQueries) return t;
  const a = Object.keys(t)
    .filter((i) => i.startsWith("@container"))
    .sort((i, o) => {
      var c, d;
      const u = /min-width:\s*([0-9.]+)/;
      return (
        +(((c = i.match(u)) == null ? void 0 : c[1]) || 0) -
        +(((d = o.match(u)) == null ? void 0 : d[1]) || 0)
      );
    });
  return a.length
    ? a.reduce(
        (i, o) => {
          const u = t[o];
          return delete i[o], (i[o] = u), i;
        },
        { ...t }
      )
    : t;
}
function rD(e, t) {
  return (
    t === "@" ||
    (t.startsWith("@") &&
      (e.some((a) => t.startsWith(`@${a}`)) || !!t.match(/^@\d/)))
  );
}
function aD(e, t) {
  const a = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!a) return null;
  const [, i, o] = a,
    u = Number.isNaN(+i) ? i || 0 : +i;
  return e.containerQueries(o).up(u);
}
function iD(e) {
  const t = (u, c) => u.replace("@media", c ? `@container ${c}` : "@container");
  function a(u, c) {
    (u.up = (...d) => t(e.breakpoints.up(...d), c)),
      (u.down = (...d) => t(e.breakpoints.down(...d), c)),
      (u.between = (...d) => t(e.breakpoints.between(...d), c)),
      (u.only = (...d) => t(e.breakpoints.only(...d), c)),
      (u.not = (...d) => {
        const h = t(e.breakpoints.not(...d), c);
        return h.includes("not all and")
          ? h
              .replace("not all and ", "")
              .replace("min-width:", "width<")
              .replace("max-width:", "width>")
              .replace("and", "or")
          : h;
      });
  }
  const i = {},
    o = (u) => (a(i, u), i);
  return a(o), { ...e, containerQueries: o };
}
const $c = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  T1 = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${$c[e]}px)`,
  },
  sD = {
    containerQueries: (e) => ({
      up: (t) => {
        let a = typeof t == "number" ? t : $c[t] || t;
        return (
          typeof a == "number" && (a = `${a}px`),
          e ? `@container ${e} (min-width:${a})` : `@container (min-width:${a})`
        );
      },
    }),
  };
function Zr(e, t, a) {
  const i = e.theme || {};
  if (Array.isArray(t)) {
    const u = i.breakpoints || T1;
    return t.reduce((c, d, h) => ((c[u.up(u.keys[h])] = a(t[h])), c), {});
  }
  if (typeof t == "object") {
    const u = i.breakpoints || T1;
    return Object.keys(t).reduce((c, d) => {
      if (rD(u.keys, d)) {
        const h = aD(i.containerQueries ? i : sD, d);
        h && (c[h] = a(t[d], d));
      } else if (Object.keys(u.values || $c).includes(d)) {
        const h = u.up(d);
        c[h] = a(t[d], d);
      } else {
        const h = d;
        c[h] = t[h];
      }
      return c;
    }, {});
  }
  return a(t);
}
function oD(e = {}) {
  var a;
  return (
    ((a = e.keys) == null
      ? void 0
      : a.reduce((i, o) => {
          const u = e.up(o);
          return (i[u] = {}), i;
        }, {})) || {}
  );
}
function lD(e, t) {
  return e.reduce((a, i) => {
    const o = a[i];
    return (!o || Object.keys(o).length === 0) && delete a[i], a;
  }, t);
}
function Fc(e, t, a = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && a) {
    const i = `vars.${t}`
      .split(".")
      .reduce((o, u) => (o && o[u] ? o[u] : null), e);
    if (i != null) return i;
  }
  return t.split(".").reduce((i, o) => (i && i[o] != null ? i[o] : null), e);
}
function wc(e, t, a, i = a) {
  let o;
  return (
    typeof e == "function"
      ? (o = e(a))
      : Array.isArray(e)
      ? (o = e[a] || i)
      : (o = Fc(e, a) || i),
    t && (o = t(o, i, e)),
    o
  );
}
function At(e) {
  const { prop: t, cssProperty: a = e.prop, themeKey: i, transform: o } = e,
    u = (c) => {
      if (c[t] == null) return null;
      const d = c[t],
        h = c.theme,
        m = Fc(h, i) || {};
      return Zr(c, d, (y) => {
        let b = wc(m, o, y);
        return (
          y === b &&
            typeof y == "string" &&
            (b = wc(m, o, `${t}${y === "default" ? "" : bs(y)}`, y)),
          a === !1 ? b : { [a]: b }
        );
      });
    };
  return (u.propTypes = {}), (u.filterProps = [t]), u;
}
function uD(e) {
  const t = {};
  return (a) => (t[a] === void 0 && (t[a] = e(a)), t[a]);
}
const cD = { m: "margin", p: "padding" },
  fD = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  E1 = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  dD = uD((e) => {
    if (e.length > 2)
      if (E1[e]) e = E1[e];
      else return [e];
    const [t, a] = e.split(""),
      i = cD[t],
      o = fD[a] || "";
    return Array.isArray(o) ? o.map((u) => i + u) : [i + o];
  }),
  Ep = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  Cp = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...Ep, ...Cp];
function xl(e, t, a, i) {
  const o = Fc(e, t, !0) ?? a;
  return typeof o == "number" || typeof o == "string"
    ? (u) =>
        typeof u == "string"
          ? u
          : typeof o == "string"
          ? `calc(${u} * ${o})`
          : o * u
    : Array.isArray(o)
    ? (u) => {
        if (typeof u == "string") return u;
        const c = Math.abs(u),
          d = o[c];
        return u >= 0 ? d : typeof d == "number" ? -d : `-${d}`;
      }
    : typeof o == "function"
    ? o
    : () => {};
}
function Ap(e) {
  return xl(e, "spacing", 8);
}
function wl(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function hD(e, t) {
  return (a) => e.reduce((i, o) => ((i[o] = wl(t, a)), i), {});
}
function mD(e, t, a, i) {
  if (!t.includes(a)) return null;
  const o = dD(a),
    u = hD(o, i),
    c = e[a];
  return Zr(e, c, u);
}
function O2(e, t) {
  const a = Ap(e.theme);
  return Object.keys(e)
    .map((i) => mD(e, t, i, a))
    .reduce(Xo, {});
}
function St(e) {
  return O2(e, Ep);
}
St.propTypes = {};
St.filterProps = Ep;
function xt(e) {
  return O2(e, Cp);
}
xt.propTypes = {};
xt.filterProps = Cp;
function Yc(...e) {
  const t = e.reduce(
      (i, o) => (
        o.filterProps.forEach((u) => {
          i[u] = o;
        }),
        i
      ),
      {}
    ),
    a = (i) => Object.keys(i).reduce((o, u) => (t[u] ? Xo(o, t[u](i)) : o), {});
  return (
    (a.propTypes = {}),
    (a.filterProps = e.reduce((i, o) => i.concat(o.filterProps), [])),
    a
  );
}
function qn(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Yn(e, t) {
  return At({ prop: e, themeKey: "borders", transform: t });
}
const pD = Yn("border", qn),
  gD = Yn("borderTop", qn),
  yD = Yn("borderRight", qn),
  vD = Yn("borderBottom", qn),
  bD = Yn("borderLeft", qn),
  SD = Yn("borderColor"),
  xD = Yn("borderTopColor"),
  wD = Yn("borderRightColor"),
  TD = Yn("borderBottomColor"),
  ED = Yn("borderLeftColor"),
  CD = Yn("outline", qn),
  AD = Yn("outlineColor"),
  Gc = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = xl(e.theme, "shape.borderRadius", 4),
        a = (i) => ({ borderRadius: wl(t, i) });
      return Zr(e, e.borderRadius, a);
    }
    return null;
  };
Gc.propTypes = {};
Gc.filterProps = ["borderRadius"];
Yc(pD, gD, yD, vD, bD, SD, xD, wD, TD, ED, Gc, CD, AD);
const Kc = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = xl(e.theme, "spacing", 8),
      a = (i) => ({ gap: wl(t, i) });
    return Zr(e, e.gap, a);
  }
  return null;
};
Kc.propTypes = {};
Kc.filterProps = ["gap"];
const Xc = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = xl(e.theme, "spacing", 8),
      a = (i) => ({ columnGap: wl(t, i) });
    return Zr(e, e.columnGap, a);
  }
  return null;
};
Xc.propTypes = {};
Xc.filterProps = ["columnGap"];
const Qc = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = xl(e.theme, "spacing", 8),
      a = (i) => ({ rowGap: wl(t, i) });
    return Zr(e, e.rowGap, a);
  }
  return null;
};
Qc.propTypes = {};
Qc.filterProps = ["rowGap"];
const _D = At({ prop: "gridColumn" }),
  RD = At({ prop: "gridRow" }),
  OD = At({ prop: "gridAutoFlow" }),
  ND = At({ prop: "gridAutoColumns" }),
  DD = At({ prop: "gridAutoRows" }),
  MD = At({ prop: "gridTemplateColumns" }),
  kD = At({ prop: "gridTemplateRows" }),
  LD = At({ prop: "gridTemplateAreas" }),
  BD = At({ prop: "gridArea" });
Yc(Kc, Xc, Qc, _D, RD, OD, ND, DD, MD, kD, LD, BD);
function ds(e, t) {
  return t === "grey" ? t : e;
}
const UD = At({ prop: "color", themeKey: "palette", transform: ds }),
  zD = At({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: ds,
  }),
  PD = At({ prop: "backgroundColor", themeKey: "palette", transform: ds });
Yc(UD, zD, PD);
function vn(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const VD = At({ prop: "width", transform: vn }),
  _p = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (a) => {
        var o, u, c, d, h;
        const i =
          ((c =
            (u = (o = e.theme) == null ? void 0 : o.breakpoints) == null
              ? void 0
              : u.values) == null
            ? void 0
            : c[a]) || $c[a];
        return i
          ? ((h = (d = e.theme) == null ? void 0 : d.breakpoints) == null
              ? void 0
              : h.unit) !== "px"
            ? { maxWidth: `${i}${e.theme.breakpoints.unit}` }
            : { maxWidth: i }
          : { maxWidth: vn(a) };
      };
      return Zr(e, e.maxWidth, t);
    }
    return null;
  };
_p.filterProps = ["maxWidth"];
const jD = At({ prop: "minWidth", transform: vn }),
  HD = At({ prop: "height", transform: vn }),
  qD = At({ prop: "maxHeight", transform: vn }),
  $D = At({ prop: "minHeight", transform: vn });
At({ prop: "size", cssProperty: "width", transform: vn });
At({ prop: "size", cssProperty: "height", transform: vn });
const FD = At({ prop: "boxSizing" });
Yc(VD, _p, jD, HD, qD, $D, FD);
const Zc = {
  border: { themeKey: "borders", transform: qn },
  borderTop: { themeKey: "borders", transform: qn },
  borderRight: { themeKey: "borders", transform: qn },
  borderBottom: { themeKey: "borders", transform: qn },
  borderLeft: { themeKey: "borders", transform: qn },
  borderColor: { themeKey: "palette" },
  borderTopColor: { themeKey: "palette" },
  borderRightColor: { themeKey: "palette" },
  borderBottomColor: { themeKey: "palette" },
  borderLeftColor: { themeKey: "palette" },
  outline: { themeKey: "borders", transform: qn },
  outlineColor: { themeKey: "palette" },
  borderRadius: { themeKey: "shape.borderRadius", style: Gc },
  color: { themeKey: "palette", transform: ds },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: ds,
  },
  backgroundColor: { themeKey: "palette", transform: ds },
  p: { style: xt },
  pt: { style: xt },
  pr: { style: xt },
  pb: { style: xt },
  pl: { style: xt },
  px: { style: xt },
  py: { style: xt },
  padding: { style: xt },
  paddingTop: { style: xt },
  paddingRight: { style: xt },
  paddingBottom: { style: xt },
  paddingLeft: { style: xt },
  paddingX: { style: xt },
  paddingY: { style: xt },
  paddingInline: { style: xt },
  paddingInlineStart: { style: xt },
  paddingInlineEnd: { style: xt },
  paddingBlock: { style: xt },
  paddingBlockStart: { style: xt },
  paddingBlockEnd: { style: xt },
  m: { style: St },
  mt: { style: St },
  mr: { style: St },
  mb: { style: St },
  ml: { style: St },
  mx: { style: St },
  my: { style: St },
  margin: { style: St },
  marginTop: { style: St },
  marginRight: { style: St },
  marginBottom: { style: St },
  marginLeft: { style: St },
  marginX: { style: St },
  marginY: { style: St },
  marginInline: { style: St },
  marginInlineStart: { style: St },
  marginInlineEnd: { style: St },
  marginBlock: { style: St },
  marginBlockStart: { style: St },
  marginBlockEnd: { style: St },
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({ "@media print": { display: e } }),
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  gap: { style: Kc },
  rowGap: { style: Qc },
  columnGap: { style: Xc },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  position: {},
  zIndex: { themeKey: "zIndex" },
  top: {},
  right: {},
  bottom: {},
  left: {},
  boxShadow: { themeKey: "shadows" },
  width: { transform: vn },
  maxWidth: { style: _p },
  minWidth: { transform: vn },
  height: { transform: vn },
  maxHeight: { transform: vn },
  minHeight: { transform: vn },
  boxSizing: {},
  font: { themeKey: "font" },
  fontFamily: { themeKey: "typography" },
  fontSize: { themeKey: "typography" },
  fontStyle: { themeKey: "typography" },
  fontWeight: { themeKey: "typography" },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: { cssProperty: !1, themeKey: "typography" },
};
function YD(...e) {
  const t = e.reduce((i, o) => i.concat(Object.keys(o)), []),
    a = new Set(t);
  return e.every((i) => a.size === Object.keys(i).length);
}
function GD(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function KD() {
  function e(a, i, o, u) {
    const c = { [a]: i, theme: o },
      d = u[a];
    if (!d) return { [a]: i };
    const { cssProperty: h = a, themeKey: m, transform: g, style: y } = d;
    if (i == null) return null;
    if (m === "typography" && i === "inherit") return { [a]: i };
    const b = Fc(o, m) || {};
    return y
      ? y(c)
      : Zr(c, i, (w) => {
          let S = wc(b, g, w);
          return (
            w === S &&
              typeof w == "string" &&
              (S = wc(b, g, `${a}${w === "default" ? "" : bs(w)}`, w)),
            h === !1 ? S : { [h]: S }
          );
        });
  }
  function t(a) {
    const { sx: i, theme: o = {} } = a || {};
    if (!i) return null;
    const u = o.unstable_sxConfig ?? Zc;
    function c(d) {
      let h = d;
      if (typeof d == "function") h = d(o);
      else if (typeof d != "object") return d;
      if (!h) return null;
      const m = oD(o.breakpoints),
        g = Object.keys(m);
      let y = m;
      return (
        Object.keys(h).forEach((b) => {
          const x = GD(h[b], o);
          if (x != null)
            if (typeof x == "object")
              if (u[b]) y = Xo(y, e(b, x, o, u));
              else {
                const w = Zr({ theme: o }, x, (S) => ({ [b]: S }));
                YD(w, x) ? (y[b] = t({ sx: x, theme: o })) : (y = Xo(y, w));
              }
            else y = Xo(y, e(b, x, o, u));
        }),
        nD(o, lD(g, y))
      );
    }
    return Array.isArray(i) ? i.map(c) : c(i);
  }
  return t;
}
const Ss = KD();
Ss.filterProps = ["sx"];
function vm() {
  return (
    (vm = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var i in a) ({}).hasOwnProperty.call(a, i) && (e[i] = a[i]);
          }
          return e;
        }),
    vm.apply(null, arguments)
  );
}
function XD(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function QD(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var ZD = (function () {
    function e(a) {
      var i = this;
      (this._insertTag = function (o) {
        var u;
        i.tags.length === 0
          ? i.insertionPoint
            ? (u = i.insertionPoint.nextSibling)
            : i.prepend
            ? (u = i.container.firstChild)
            : (u = i.before)
          : (u = i.tags[i.tags.length - 1].nextSibling),
          i.container.insertBefore(o, u),
          i.tags.push(o);
      }),
        (this.isSpeedy = a.speedy === void 0 ? !0 : a.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = a.nonce),
        (this.key = a.key),
        (this.container = a.container),
        (this.prepend = a.prepend),
        (this.insertionPoint = a.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (i) {
        i.forEach(this._insertTag);
      }),
      (t.insert = function (i) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(QD(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var u = XD(o);
          try {
            u.insertRule(i, u.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(i));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (i) {
          var o;
          return (o = i.parentNode) == null ? void 0 : o.removeChild(i);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  It = "-ms-",
  Tc = "-moz-",
  Qe = "-webkit-",
  N2 = "comm",
  Rp = "rule",
  Op = "decl",
  ID = "@import",
  D2 = "@keyframes",
  WD = "@layer",
  JD = Math.abs,
  Ic = String.fromCharCode,
  eM = Object.assign;
function tM(e, t) {
  return Kt(e, 0) ^ 45
    ? (((((((t << 2) ^ Kt(e, 0)) << 2) ^ Kt(e, 1)) << 2) ^ Kt(e, 2)) << 2) ^
        Kt(e, 3)
    : 0;
}
function M2(e) {
  return e.trim();
}
function nM(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Ze(e, t, a) {
  return e.replace(t, a);
}
function bm(e, t) {
  return e.indexOf(t);
}
function Kt(e, t) {
  return e.charCodeAt(t) | 0;
}
function sl(e, t, a) {
  return e.slice(t, a);
}
function gr(e) {
  return e.length;
}
function Np(e) {
  return e.length;
}
function ju(e, t) {
  return t.push(e), e;
}
function rM(e, t) {
  return e.map(t).join("");
}
var Wc = 1,
  xs = 1,
  k2 = 0,
  cn = 0,
  Nt = 0,
  Rs = "";
function Jc(e, t, a, i, o, u, c) {
  return {
    value: e,
    root: t,
    parent: a,
    type: i,
    props: o,
    children: u,
    line: Wc,
    column: xs,
    length: c,
    return: "",
  };
}
function Uo(e, t) {
  return eM(Jc("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function aM() {
  return Nt;
}
function iM() {
  return (
    (Nt = cn > 0 ? Kt(Rs, --cn) : 0), xs--, Nt === 10 && ((xs = 1), Wc--), Nt
  );
}
function wn() {
  return (
    (Nt = cn < k2 ? Kt(Rs, cn++) : 0), xs++, Nt === 10 && ((xs = 1), Wc++), Nt
  );
}
function xr() {
  return Kt(Rs, cn);
}
function ec() {
  return cn;
}
function Tl(e, t) {
  return sl(Rs, e, t);
}
function ol(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function L2(e) {
  return (Wc = xs = 1), (k2 = gr((Rs = e))), (cn = 0), [];
}
function B2(e) {
  return (Rs = ""), e;
}
function tc(e) {
  return M2(Tl(cn - 1, Sm(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function sM(e) {
  for (; (Nt = xr()) && Nt < 33; ) wn();
  return ol(e) > 2 || ol(Nt) > 3 ? "" : " ";
}
function oM(e, t) {
  for (
    ;
    --t &&
    wn() &&
    !(Nt < 48 || Nt > 102 || (Nt > 57 && Nt < 65) || (Nt > 70 && Nt < 97));

  );
  return Tl(e, ec() + (t < 6 && xr() == 32 && wn() == 32));
}
function Sm(e) {
  for (; wn(); )
    switch (Nt) {
      case e:
        return cn;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Sm(Nt);
        break;
      case 40:
        e === 41 && Sm(e);
        break;
      case 92:
        wn();
        break;
    }
  return cn;
}
function lM(e, t) {
  for (; wn() && e + Nt !== 57; ) if (e + Nt === 84 && xr() === 47) break;
  return "/*" + Tl(t, cn - 1) + "*" + Ic(e === 47 ? e : wn());
}
function uM(e) {
  for (; !ol(xr()); ) wn();
  return Tl(e, cn);
}
function cM(e) {
  return B2(nc("", null, null, null, [""], (e = L2(e)), 0, [0], e));
}
function nc(e, t, a, i, o, u, c, d, h) {
  for (
    var m = 0,
      g = 0,
      y = c,
      b = 0,
      x = 0,
      w = 0,
      S = 1,
      A = 1,
      C = 1,
      O = 0,
      M = "",
      P = o,
      B = u,
      N = i,
      q = M;
    A;

  )
    switch (((w = O), (O = wn()))) {
      case 40:
        if (w != 108 && Kt(q, y - 1) == 58) {
          bm((q += Ze(tc(O), "&", "&\f")), "&\f") != -1 && (C = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        q += tc(O);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        q += sM(w);
        break;
      case 92:
        q += oM(ec() - 1, 7);
        continue;
      case 47:
        switch (xr()) {
          case 42:
          case 47:
            ju(fM(lM(wn(), ec()), t, a), h);
            break;
          default:
            q += "/";
        }
        break;
      case 123 * S:
        d[m++] = gr(q) * C;
      case 125 * S:
      case 59:
      case 0:
        switch (O) {
          case 0:
          case 125:
            A = 0;
          case 59 + g:
            C == -1 && (q = Ze(q, /\f/g, "")),
              x > 0 &&
                gr(q) - y &&
                ju(
                  x > 32
                    ? A1(q + ";", i, a, y - 1)
                    : A1(Ze(q, " ", "") + ";", i, a, y - 2),
                  h
                );
            break;
          case 59:
            q += ";";
          default:
            if (
              (ju((N = C1(q, t, a, m, g, o, d, M, (P = []), (B = []), y)), u),
              O === 123)
            )
              if (g === 0) nc(q, t, N, N, P, u, y, d, B);
              else
                switch (b === 99 && Kt(q, 3) === 110 ? 100 : b) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    nc(
                      e,
                      N,
                      N,
                      i && ju(C1(e, N, N, 0, 0, o, d, M, o, (P = []), y), B),
                      o,
                      B,
                      y,
                      d,
                      i ? P : B
                    );
                    break;
                  default:
                    nc(q, N, N, N, [""], B, 0, d, B);
                }
        }
        (m = g = x = 0), (S = C = 1), (M = q = ""), (y = c);
        break;
      case 58:
        (y = 1 + gr(q)), (x = w);
      default:
        if (S < 1) {
          if (O == 123) --S;
          else if (O == 125 && S++ == 0 && iM() == 125) continue;
        }
        switch (((q += Ic(O)), O * S)) {
          case 38:
            C = g > 0 ? 1 : ((q += "\f"), -1);
            break;
          case 44:
            (d[m++] = (gr(q) - 1) * C), (C = 1);
            break;
          case 64:
            xr() === 45 && (q += tc(wn())),
              (b = xr()),
              (g = y = gr((M = q += uM(ec())))),
              O++;
            break;
          case 45:
            w === 45 && gr(q) == 2 && (S = 0);
        }
    }
  return u;
}
function C1(e, t, a, i, o, u, c, d, h, m, g) {
  for (
    var y = o - 1, b = o === 0 ? u : [""], x = Np(b), w = 0, S = 0, A = 0;
    w < i;
    ++w
  )
    for (var C = 0, O = sl(e, y + 1, (y = JD((S = c[w])))), M = e; C < x; ++C)
      (M = M2(S > 0 ? b[C] + " " + O : Ze(O, /&\f/g, b[C]))) && (h[A++] = M);
  return Jc(e, t, a, o === 0 ? Rp : d, h, m, g);
}
function fM(e, t, a) {
  return Jc(e, t, a, N2, Ic(aM()), sl(e, 2, -2), 0);
}
function A1(e, t, a, i) {
  return Jc(e, t, a, Op, sl(e, 0, i), sl(e, i + 1, -1), i);
}
function hs(e, t) {
  for (var a = "", i = Np(e), o = 0; o < i; o++) a += t(e[o], o, e, t) || "";
  return a;
}
function dM(e, t, a, i) {
  switch (e.type) {
    case WD:
      if (e.children.length) break;
    case ID:
    case Op:
      return (e.return = e.return || e.value);
    case N2:
      return "";
    case D2:
      return (e.return = e.value + "{" + hs(e.children, i) + "}");
    case Rp:
      e.value = e.props.join(",");
  }
  return gr((a = hs(e.children, i)))
    ? (e.return = e.value + "{" + a + "}")
    : "";
}
function hM(e) {
  var t = Np(e);
  return function (a, i, o, u) {
    for (var c = "", d = 0; d < t; d++) c += e[d](a, i, o, u) || "";
    return c;
  };
}
function mM(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function U2(e) {
  var t = Object.create(null);
  return function (a) {
    return t[a] === void 0 && (t[a] = e(a)), t[a];
  };
}
var pM = function (t, a, i) {
    for (
      var o = 0, u = 0;
      (o = u), (u = xr()), o === 38 && u === 12 && (a[i] = 1), !ol(u);

    )
      wn();
    return Tl(t, cn);
  },
  gM = function (t, a) {
    var i = -1,
      o = 44;
    do
      switch (ol(o)) {
        case 0:
          o === 38 && xr() === 12 && (a[i] = 1), (t[i] += pM(cn - 1, a, i));
          break;
        case 2:
          t[i] += tc(o);
          break;
        case 4:
          if (o === 44) {
            (t[++i] = xr() === 58 ? "&\f" : ""), (a[i] = t[i].length);
            break;
          }
        default:
          t[i] += Ic(o);
      }
    while ((o = wn()));
    return t;
  },
  yM = function (t, a) {
    return B2(gM(L2(t), a));
  },
  _1 = new WeakMap(),
  vM = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var a = t.value,
          i = t.parent,
          o = t.column === i.column && t.line === i.line;
        i.type !== "rule";

      )
        if (((i = i.parent), !i)) return;
      if (
        !(t.props.length === 1 && a.charCodeAt(0) !== 58 && !_1.get(i)) &&
        !o
      ) {
        _1.set(t, !0);
        for (
          var u = [], c = yM(a, u), d = i.props, h = 0, m = 0;
          h < c.length;
          h++
        )
          for (var g = 0; g < d.length; g++, m++)
            t.props[m] = u[h] ? c[h].replace(/&\f/g, d[g]) : d[g] + " " + c[h];
      }
    }
  },
  bM = function (t) {
    if (t.type === "decl") {
      var a = t.value;
      a.charCodeAt(0) === 108 &&
        a.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function z2(e, t) {
  switch (tM(e, t)) {
    case 5103:
      return Qe + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Qe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Qe + e + Tc + e + It + e + e;
    case 6828:
    case 4268:
      return Qe + e + It + e + e;
    case 6165:
      return Qe + e + It + "flex-" + e + e;
    case 5187:
      return (
        Qe + e + Ze(e, /(\w+).+(:[^]+)/, Qe + "box-$1$2" + It + "flex-$1$2") + e
      );
    case 5443:
      return Qe + e + It + "flex-item-" + Ze(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        Qe +
        e +
        It +
        "flex-line-pack" +
        Ze(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return Qe + e + It + Ze(e, "shrink", "negative") + e;
    case 5292:
      return Qe + e + It + Ze(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        Qe +
        "box-" +
        Ze(e, "-grow", "") +
        Qe +
        e +
        It +
        Ze(e, "grow", "positive") +
        e
      );
    case 4554:
      return Qe + Ze(e, /([^-])(transform)/g, "$1" + Qe + "$2") + e;
    case 6187:
      return (
        Ze(
          Ze(Ze(e, /(zoom-|grab)/, Qe + "$1"), /(image-set)/, Qe + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return Ze(e, /(image-set\([^]*)/, Qe + "$1$`$1");
    case 4968:
      return (
        Ze(
          Ze(e, /(.+:)(flex-)?(.*)/, Qe + "box-pack:$3" + It + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        Qe +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Ze(e, /(.+)-inline(.+)/, Qe + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (gr(e) - 1 - t > 6)
        switch (Kt(e, t + 1)) {
          case 109:
            if (Kt(e, t + 4) !== 45) break;
          case 102:
            return (
              Ze(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  Qe +
                  "$2-$3$1" +
                  Tc +
                  (Kt(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~bm(e, "stretch")
              ? z2(Ze(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (Kt(e, t + 1) !== 115) break;
    case 6444:
      switch (Kt(e, gr(e) - 3 - (~bm(e, "!important") && 10))) {
        case 107:
          return Ze(e, ":", ":" + Qe) + e;
        case 101:
          return (
            Ze(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Qe +
                (Kt(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Qe +
                "$2$3$1" +
                It +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (Kt(e, t + 11)) {
        case 114:
          return Qe + e + It + Ze(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Qe + e + It + Ze(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Qe + e + It + Ze(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Qe + e + It + e + e;
  }
  return e;
}
var SM = function (t, a, i, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Op:
          t.return = z2(t.value, t.length);
          break;
        case D2:
          return hs([Uo(t, { value: Ze(t.value, "@", "@" + Qe) })], o);
        case Rp:
          if (t.length)
            return rM(t.props, function (u) {
              switch (nM(u, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return hs(
                    [Uo(t, { props: [Ze(u, /:(read-\w+)/, ":" + Tc + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return hs(
                    [
                      Uo(t, {
                        props: [Ze(u, /:(plac\w+)/, ":" + Qe + "input-$1")],
                      }),
                      Uo(t, { props: [Ze(u, /:(plac\w+)/, ":" + Tc + "$1")] }),
                      Uo(t, { props: [Ze(u, /:(plac\w+)/, It + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  xM = [SM],
  wM = function (t) {
    var a = t.key;
    if (a === "css") {
      var i = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(i, function (S) {
        var A = S.getAttribute("data-emotion");
        A.indexOf(" ") !== -1 &&
          (document.head.appendChild(S), S.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || xM,
      u = {},
      c,
      d = [];
    (c = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + a + ' "]'),
        function (S) {
          for (
            var A = S.getAttribute("data-emotion").split(" "), C = 1;
            C < A.length;
            C++
          )
            u[A[C]] = !0;
          d.push(S);
        }
      );
    var h,
      m = [vM, bM];
    {
      var g,
        y = [
          dM,
          mM(function (S) {
            g.insert(S);
          }),
        ],
        b = hM(m.concat(o, y)),
        x = function (A) {
          return hs(cM(A), b);
        };
      h = function (A, C, O, M) {
        (g = O),
          x(A ? A + "{" + C.styles + "}" : C.styles),
          M && (w.inserted[C.name] = !0);
      };
    }
    var w = {
      key: a,
      sheet: new ZD({
        key: a,
        container: c,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: u,
      registered: {},
      insert: h,
    };
    return w.sheet.hydrate(d), w;
  },
  TM = !0;
function EM(e, t, a) {
  var i = "";
  return (
    a.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : o && (i += o + " ");
    }),
    i
  );
}
var P2 = function (t, a, i) {
    var o = t.key + "-" + a.name;
    (i === !1 || TM === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = a.styles);
  },
  CM = function (t, a, i) {
    P2(t, a, i);
    var o = t.key + "-" + a.name;
    if (t.inserted[a.name] === void 0) {
      var u = a;
      do t.insert(a === u ? "." + o : "", u, t.sheet, !0), (u = u.next);
      while (u !== void 0);
    }
  };
function AM(e) {
  for (var t = 0, a, i = 0, o = e.length; o >= 4; ++i, o -= 4)
    (a =
      (e.charCodeAt(i) & 255) |
      ((e.charCodeAt(++i) & 255) << 8) |
      ((e.charCodeAt(++i) & 255) << 16) |
      ((e.charCodeAt(++i) & 255) << 24)),
      (a = (a & 65535) * 1540483477 + (((a >>> 16) * 59797) << 16)),
      (a ^= a >>> 24),
      (t =
        ((a & 65535) * 1540483477 + (((a >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(i + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(i + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(i) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var _M = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  RM = /[A-Z]|^ms/g,
  OM = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  V2 = function (t) {
    return t.charCodeAt(1) === 45;
  },
  R1 = function (t) {
    return t != null && typeof t != "boolean";
  },
  Uh = U2(function (e) {
    return V2(e) ? e : e.replace(RM, "-$&").toLowerCase();
  }),
  O1 = function (t, a) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof a == "string")
          return a.replace(OM, function (i, o, u) {
            return (yr = { name: o, styles: u, next: yr }), o;
          });
    }
    return _M[t] !== 1 && !V2(t) && typeof a == "number" && a !== 0
      ? a + "px"
      : a;
  };
function ll(e, t, a) {
  if (a == null) return "";
  var i = a;
  if (i.__emotion_styles !== void 0) return i;
  switch (typeof a) {
    case "boolean":
      return "";
    case "object": {
      var o = a;
      if (o.anim === 1)
        return (yr = { name: o.name, styles: o.styles, next: yr }), o.name;
      var u = a;
      if (u.styles !== void 0) {
        var c = u.next;
        if (c !== void 0)
          for (; c !== void 0; )
            (yr = { name: c.name, styles: c.styles, next: yr }), (c = c.next);
        var d = u.styles + ";";
        return d;
      }
      return NM(e, t, a);
    }
    case "function": {
      if (e !== void 0) {
        var h = yr,
          m = a(e);
        return (yr = h), ll(e, t, m);
      }
      break;
    }
  }
  var g = a;
  if (t == null) return g;
  var y = t[g];
  return y !== void 0 ? y : g;
}
function NM(e, t, a) {
  var i = "";
  if (Array.isArray(a))
    for (var o = 0; o < a.length; o++) i += ll(e, t, a[o]) + ";";
  else
    for (var u in a) {
      var c = a[u];
      if (typeof c != "object") {
        var d = c;
        t != null && t[d] !== void 0
          ? (i += u + "{" + t[d] + "}")
          : R1(d) && (i += Uh(u) + ":" + O1(u, d) + ";");
      } else if (
        Array.isArray(c) &&
        typeof c[0] == "string" &&
        (t == null || t[c[0]] === void 0)
      )
        for (var h = 0; h < c.length; h++)
          R1(c[h]) && (i += Uh(u) + ":" + O1(u, c[h]) + ";");
      else {
        var m = ll(e, t, c);
        switch (u) {
          case "animation":
          case "animationName": {
            i += Uh(u) + ":" + m + ";";
            break;
          }
          default:
            i += u + "{" + m + "}";
        }
      }
    }
  return i;
}
var N1 = /label:\s*([^\s;{]+)\s*(;|$)/g,
  yr;
function j2(e, t, a) {
  if (
    e.length === 1 &&
    typeof e[0] == "object" &&
    e[0] !== null &&
    e[0].styles !== void 0
  )
    return e[0];
  var i = !0,
    o = "";
  yr = void 0;
  var u = e[0];
  if (u == null || u.raw === void 0) (i = !1), (o += ll(a, t, u));
  else {
    var c = u;
    o += c[0];
  }
  for (var d = 1; d < e.length; d++)
    if (((o += ll(a, t, e[d])), i)) {
      var h = u;
      o += h[d];
    }
  N1.lastIndex = 0;
  for (var m = "", g; (g = N1.exec(o)) !== null; ) m += "-" + g[1];
  var y = AM(o) + m;
  return { name: y, styles: o, next: yr };
}
var DM = function (t) {
    return t();
  },
  MM = fv.useInsertionEffect ? fv.useInsertionEffect : !1,
  kM = MM || DM,
  H2 = R.createContext(typeof HTMLElement < "u" ? wM({ key: "css" }) : null);
H2.Provider;
var LM = function (t) {
    return R.forwardRef(function (a, i) {
      var o = R.useContext(H2);
      return t(a, o, i);
    });
  },
  BM = R.createContext({}),
  UM =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  zM = U2(function (e) {
    return (
      UM.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  PM = zM,
  VM = function (t) {
    return t !== "theme";
  },
  D1 = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? PM : VM;
  },
  M1 = function (t, a, i) {
    var o;
    if (a) {
      var u = a.shouldForwardProp;
      o =
        t.__emotion_forwardProp && u
          ? function (c) {
              return t.__emotion_forwardProp(c) && u(c);
            }
          : u;
    }
    return typeof o != "function" && i && (o = t.__emotion_forwardProp), o;
  },
  jM = function (t) {
    var a = t.cache,
      i = t.serialized,
      o = t.isStringTag;
    return (
      P2(a, i, o),
      kM(function () {
        return CM(a, i, o);
      }),
      null
    );
  },
  HM = function e(t, a) {
    var i = t.__emotion_real === t,
      o = (i && t.__emotion_base) || t,
      u,
      c;
    a !== void 0 && ((u = a.label), (c = a.target));
    var d = M1(t, a, i),
      h = d || D1(o),
      m = !h("as");
    return function () {
      var g = arguments,
        y =
          i && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (u !== void 0 && y.push("label:" + u + ";"),
        g[0] == null || g[0].raw === void 0)
      )
        y.push.apply(y, g);
      else {
        var b = g[0];
        y.push(b[0]);
        for (var x = g.length, w = 1; w < x; w++) y.push(g[w], b[w]);
      }
      var S = LM(function (A, C, O) {
        var M = (m && A.as) || o,
          P = "",
          B = [],
          N = A;
        if (A.theme == null) {
          N = {};
          for (var q in A) N[q] = A[q];
          N.theme = R.useContext(BM);
        }
        typeof A.className == "string"
          ? (P = EM(C.registered, B, A.className))
          : A.className != null && (P = A.className + " ");
        var X = j2(y.concat(B), C.registered, N);
        (P += C.key + "-" + X.name), c !== void 0 && (P += " " + c);
        var Y = m && d === void 0 ? D1(M) : h,
          E = {};
        for (var J in A) (m && J === "as") || (Y(J) && (E[J] = A[J]));
        return (
          (E.className = P),
          O && (E.ref = O),
          R.createElement(
            R.Fragment,
            null,
            R.createElement(jM, {
              cache: C,
              serialized: X,
              isStringTag: typeof M == "string",
            }),
            R.createElement(M, E)
          )
        );
      });
      return (
        (S.displayName =
          u !== void 0
            ? u
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (S.defaultProps = t.defaultProps),
        (S.__emotion_real = S),
        (S.__emotion_base = o),
        (S.__emotion_styles = y),
        (S.__emotion_forwardProp = d),
        Object.defineProperty(S, "toString", {
          value: function () {
            return "." + c;
          },
        }),
        (S.withComponent = function (A, C) {
          var O = e(A, vm({}, a, C, { shouldForwardProp: M1(S, C, !0) }));
          return O.apply(void 0, y);
        }),
        S
      );
    };
  },
  qM = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  xm = HM.bind(null);
qM.forEach(function (e) {
  xm[e] = xm(e);
});
/**
 * @mui/styled-engine v6.4.6
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function $M(e, t) {
  return xm(e, t);
}
function FM(e, t) {
  Array.isArray(e.__emotion_styles) &&
    (e.__emotion_styles = t(e.__emotion_styles));
}
const k1 = [];
function L1(e) {
  return (k1[0] = e), j2(k1);
}
const YM = (e) => {
  const t = Object.keys(e).map((a) => ({ key: a, val: e[a] })) || [];
  return (
    t.sort((a, i) => a.val - i.val),
    t.reduce((a, i) => ({ ...a, [i.key]: i.val }), {})
  );
};
function GM(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: a = "px",
      step: i = 5,
      ...o
    } = e,
    u = YM(t),
    c = Object.keys(u);
  function d(b) {
    return `@media (min-width:${typeof t[b] == "number" ? t[b] : b}${a})`;
  }
  function h(b) {
    return `@media (max-width:${
      (typeof t[b] == "number" ? t[b] : b) - i / 100
    }${a})`;
  }
  function m(b, x) {
    const w = c.indexOf(x);
    return `@media (min-width:${
      typeof t[b] == "number" ? t[b] : b
    }${a}) and (max-width:${
      (w !== -1 && typeof t[c[w]] == "number" ? t[c[w]] : x) - i / 100
    }${a})`;
  }
  function g(b) {
    return c.indexOf(b) + 1 < c.length ? m(b, c[c.indexOf(b) + 1]) : d(b);
  }
  function y(b) {
    const x = c.indexOf(b);
    return x === 0
      ? d(c[1])
      : x === c.length - 1
      ? h(c[x])
      : m(b, c[c.indexOf(b) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: c,
    values: u,
    up: d,
    down: h,
    between: m,
    only: g,
    not: y,
    unit: a,
    ...o,
  };
}
const KM = { borderRadius: 4 };
function q2(e = 8, t = Ap({ spacing: e })) {
  if (e.mui) return e;
  const a = (...i) =>
    (i.length === 0 ? [1] : i)
      .map((u) => {
        const c = t(u);
        return typeof c == "number" ? `${c}px` : c;
      })
      .join(" ");
  return (a.mui = !0), a;
}
function XM(e, t) {
  var i;
  const a = this;
  if (a.vars) {
    if (
      !((i = a.colorSchemes) != null && i[e]) ||
      typeof a.getColorSchemeSelector != "function"
    )
      return {};
    let o = a.getColorSchemeSelector(e);
    return o === "&"
      ? t
      : ((o.includes("data-") || o.includes(".")) &&
          (o = `*:where(${o.replace(/\s*&$/, "")}) &`),
        { [o]: t });
  }
  return a.palette.mode === e ? t : {};
}
function $2(e = {}, ...t) {
  const {
      breakpoints: a = {},
      palette: i = {},
      spacing: o,
      shape: u = {},
      ...c
    } = e,
    d = GM(a),
    h = q2(o);
  let m = xn(
    {
      breakpoints: d,
      direction: "ltr",
      components: {},
      palette: { mode: "light", ...i },
      spacing: h,
      shape: { ...KM, ...u },
    },
    c
  );
  return (
    (m = iD(m)),
    (m.applyStyles = XM),
    (m = t.reduce((g, y) => xn(g, y), m)),
    (m.unstable_sxConfig = {
      ...Zc,
      ...(c == null ? void 0 : c.unstable_sxConfig),
    }),
    (m.unstable_sx = function (y) {
      return Ss({ sx: y, theme: this });
    }),
    m
  );
}
const B1 = (e) => e,
  QM = () => {
    let e = B1;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = B1;
      },
    };
  },
  ZM = QM(),
  IM = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    open: "open",
    readOnly: "readOnly",
    required: "required",
    selected: "selected",
  };
function Dp(e, t, a = "Mui") {
  const i = IM[t];
  return i ? `${a}-${i}` : `${ZM.generate(e)}-${t}`;
}
function F2(e, t, a = "Mui") {
  const i = {};
  return (
    t.forEach((o) => {
      i[o] = Dp(e, o, a);
    }),
    i
  );
}
function Y2(e) {
  const { variants: t, ...a } = e,
    i = { variants: t, style: L1(a), isProcessed: !0 };
  return (
    i.style === a ||
      (t &&
        t.forEach((o) => {
          typeof o.style != "function" && (o.style = L1(o.style));
        })),
    i
  );
}
const WM = $2();
function zh(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function JM(e) {
  return e ? (t, a) => a[e] : null;
}
function e6(e, t, a) {
  e.theme = r6(e.theme) ? a : e.theme[t] || e.theme;
}
function rc(e, t) {
  const a = typeof t == "function" ? t(e) : t;
  if (Array.isArray(a)) return a.flatMap((i) => rc(e, i));
  if (Array.isArray(a == null ? void 0 : a.variants)) {
    let i;
    if (a.isProcessed) i = a.style;
    else {
      const { variants: o, ...u } = a;
      i = u;
    }
    return G2(e, a.variants, [i]);
  }
  return a != null && a.isProcessed ? a.style : a;
}
function G2(e, t, a = []) {
  var o;
  let i;
  e: for (let u = 0; u < t.length; u += 1) {
    const c = t[u];
    if (typeof c.props == "function") {
      if (
        (i ?? (i = { ...e, ...e.ownerState, ownerState: e.ownerState }),
        !c.props(i))
      )
        continue;
    } else
      for (const d in c.props)
        if (
          e[d] !== c.props[d] &&
          ((o = e.ownerState) == null ? void 0 : o[d]) !== c.props[d]
        )
          continue e;
    typeof c.style == "function"
      ? (i ?? (i = { ...e, ...e.ownerState, ownerState: e.ownerState }),
        a.push(c.style(i)))
      : a.push(c.style);
  }
  return a;
}
function t6(e = {}) {
  const {
    themeId: t,
    defaultTheme: a = WM,
    rootShouldForwardProp: i = zh,
    slotShouldForwardProp: o = zh,
  } = e;
  function u(d) {
    e6(d, t, a);
  }
  return (d, h = {}) => {
    FM(d, (B) => B.filter((N) => N !== Ss));
    const {
        name: m,
        slot: g,
        skipVariantsResolver: y,
        skipSx: b,
        overridesResolver: x = JM(i6(g)),
        ...w
      } = h,
      S = y !== void 0 ? y : (g && g !== "Root" && g !== "root") || !1,
      A = b || !1;
    let C = zh;
    g === "Root" || g === "root"
      ? (C = i)
      : g
      ? (C = o)
      : a6(d) && (C = void 0);
    const O = $M(d, { shouldForwardProp: C, label: n6(), ...w }),
      M = (B) => {
        if (typeof B == "function" && B.__emotion_real !== B)
          return function (q) {
            return rc(q, B);
          };
        if (Yr(B)) {
          const N = Y2(B);
          return N.variants
            ? function (X) {
                return rc(X, N);
              }
            : N.style;
        }
        return B;
      },
      P = (...B) => {
        const N = [],
          q = B.map(M),
          X = [];
        if (
          (N.push(u),
          m &&
            x &&
            X.push(function (ce) {
              var te, le;
              const xe =
                (le = (te = ce.theme.components) == null ? void 0 : te[m]) ==
                null
                  ? void 0
                  : le.styleOverrides;
              if (!xe) return null;
              const He = {};
              for (const oe in xe) He[oe] = rc(ce, xe[oe]);
              return x(ce, He);
            }),
          m &&
            !S &&
            X.push(function (ce) {
              var He, te;
              const ae = ce.theme,
                xe =
                  (te =
                    (He = ae == null ? void 0 : ae.components) == null
                      ? void 0
                      : He[m]) == null
                    ? void 0
                    : te.variants;
              return xe ? G2(ce, xe) : null;
            }),
          A || X.push(Ss),
          Array.isArray(q[0]))
        ) {
          const J = q.shift(),
            ce = new Array(N.length).fill(""),
            ae = new Array(X.length).fill("");
          let xe;
          (xe = [...ce, ...J, ...ae]),
            (xe.raw = [...ce, ...J.raw, ...ae]),
            N.unshift(xe);
        }
        const Y = [...N, ...q, ...X],
          E = O(...Y);
        return d.muiName && (E.muiName = d.muiName), E;
      };
    return O.withConfig && (P.withConfig = O.withConfig), P;
  };
}
function n6(e, t) {
  return void 0;
}
function r6(e) {
  for (const t in e) return !1;
  return !0;
}
function a6(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
function i6(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function wm(e, t) {
  const a = { ...t };
  for (const i in e)
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      const o = i;
      if (o === "components" || o === "slots") a[o] = { ...e[o], ...a[o] };
      else if (o === "componentsProps" || o === "slotProps") {
        const u = e[o],
          c = t[o];
        if (!c) a[o] = u || {};
        else if (!u) a[o] = c;
        else {
          a[o] = { ...c };
          for (const d in u)
            if (Object.prototype.hasOwnProperty.call(u, d)) {
              const h = d;
              a[o][h] = wm(u[h], c[h]);
            }
        }
      } else a[o] === void 0 && (a[o] = e[o]);
    }
  return a;
}
function s6(e, t = Number.MIN_SAFE_INTEGER, a = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, a));
}
function Mp(e, t = 0, a = 1) {
  return s6(e, t, a);
}
function o6(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let a = e.match(t);
  return (
    a && a[0].length === 1 && (a = a.map((i) => i + i)),
    a
      ? `rgb${a.length === 4 ? "a" : ""}(${a
          .map((i, o) =>
            o < 3
              ? parseInt(i, 16)
              : Math.round((parseInt(i, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  );
}
function Na(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return Na(o6(e));
  const t = e.indexOf("("),
    a = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(a))
    throw new Error(pi(9, e));
  let i = e.substring(t + 1, e.length - 1),
    o;
  if (a === "color") {
    if (
      ((i = i.split(" ")),
      (o = i.shift()),
      i.length === 4 && i[3].charAt(0) === "/" && (i[3] = i[3].slice(1)),
      !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(
        o
      ))
    )
      throw new Error(pi(10, o));
  } else i = i.split(",");
  return (
    (i = i.map((u) => parseFloat(u))), { type: a, values: i, colorSpace: o }
  );
}
const l6 = (e) => {
    const t = Na(e);
    return t.values
      .slice(0, 3)
      .map((a, i) => (t.type.includes("hsl") && i !== 0 ? `${a}%` : a))
      .join(" ");
  },
  qo = (e, t) => {
    try {
      return l6(e);
    } catch {
      return e;
    }
  };
function ef(e) {
  const { type: t, colorSpace: a } = e;
  let { values: i } = e;
  return (
    t.includes("rgb")
      ? (i = i.map((o, u) => (u < 3 ? parseInt(o, 10) : o)))
      : t.includes("hsl") && ((i[1] = `${i[1]}%`), (i[2] = `${i[2]}%`)),
    t.includes("color") ? (i = `${a} ${i.join(" ")}`) : (i = `${i.join(", ")}`),
    `${t}(${i})`
  );
}
function K2(e) {
  e = Na(e);
  const { values: t } = e,
    a = t[0],
    i = t[1] / 100,
    o = t[2] / 100,
    u = i * Math.min(o, 1 - o),
    c = (m, g = (m + a / 30) % 12) =>
      o - u * Math.max(Math.min(g - 3, 9 - g, 1), -1);
  let d = "rgb";
  const h = [
    Math.round(c(0) * 255),
    Math.round(c(8) * 255),
    Math.round(c(4) * 255),
  ];
  return (
    e.type === "hsla" && ((d += "a"), h.push(t[3])), ef({ type: d, values: h })
  );
}
function Tm(e) {
  e = Na(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Na(K2(e)).values : e.values;
  return (
    (t = t.map(
      (a) => (
        e.type !== "color" && (a /= 255),
        a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function u6(e, t) {
  const a = Tm(e),
    i = Tm(t);
  return (Math.max(a, i) + 0.05) / (Math.min(a, i) + 0.05);
}
function c6(e, t) {
  return (
    (e = Na(e)),
    (t = Mp(t)),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    ef(e)
  );
}
function Hu(e, t, a) {
  try {
    return c6(e, t);
  } catch {
    return e;
  }
}
function kp(e, t) {
  if (((e = Na(e)), (t = Mp(t)), e.type.includes("hsl"))) e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let a = 0; a < 3; a += 1) e.values[a] *= 1 - t;
  return ef(e);
}
function nt(e, t, a) {
  try {
    return kp(e, t);
  } catch {
    return e;
  }
}
function Lp(e, t) {
  if (((e = Na(e)), (t = Mp(t)), e.type.includes("hsl")))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let a = 0; a < 3; a += 1) e.values[a] += (255 - e.values[a]) * t;
  else if (e.type.includes("color"))
    for (let a = 0; a < 3; a += 1) e.values[a] += (1 - e.values[a]) * t;
  return ef(e);
}
function rt(e, t, a) {
  try {
    return Lp(e, t);
  } catch {
    return e;
  }
}
function f6(e, t = 0.15) {
  return Tm(e) > 0.5 ? kp(e, t) : Lp(e, t);
}
function qu(e, t, a) {
  try {
    return f6(e, t);
  } catch {
    return e;
  }
}
function d6(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function h6(...e) {
  return R.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((a) => {
              d6(a, t);
            });
          },
    e
  );
}
function m6(e) {
  return typeof e == "string";
}
function p6(e, t, a) {
  return e === void 0 || m6(e)
    ? t
    : { ...t, ownerState: { ...t.ownerState, ...a } };
}
function g6(e, t = []) {
  if (e === void 0) return {};
  const a = {};
  return (
    Object.keys(e)
      .filter(
        (i) =>
          i.match(/^on[A-Z]/) && typeof e[i] == "function" && !t.includes(i)
      )
      .forEach((i) => {
        a[i] = e[i];
      }),
    a
  );
}
function U1(e) {
  if (e === void 0) return {};
  const t = {};
  return (
    Object.keys(e)
      .filter((a) => !(a.match(/^on[A-Z]/) && typeof e[a] == "function"))
      .forEach((a) => {
        t[a] = e[a];
      }),
    t
  );
}
function y6(e) {
  const {
    getSlotProps: t,
    additionalProps: a,
    externalSlotProps: i,
    externalForwardedProps: o,
    className: u,
  } = e;
  if (!t) {
    const x = tr(
        a == null ? void 0 : a.className,
        u,
        o == null ? void 0 : o.className,
        i == null ? void 0 : i.className
      ),
      w = {
        ...(a == null ? void 0 : a.style),
        ...(o == null ? void 0 : o.style),
        ...(i == null ? void 0 : i.style),
      },
      S = { ...a, ...o, ...i };
    return (
      x.length > 0 && (S.className = x),
      Object.keys(w).length > 0 && (S.style = w),
      { props: S, internalRef: void 0 }
    );
  }
  const c = g6({ ...o, ...i }),
    d = U1(i),
    h = U1(o),
    m = t(c),
    g = tr(
      m == null ? void 0 : m.className,
      a == null ? void 0 : a.className,
      u,
      o == null ? void 0 : o.className,
      i == null ? void 0 : i.className
    ),
    y = {
      ...(m == null ? void 0 : m.style),
      ...(a == null ? void 0 : a.style),
      ...(o == null ? void 0 : o.style),
      ...(i == null ? void 0 : i.style),
    },
    b = { ...m, ...a, ...h, ...d };
  return (
    g.length > 0 && (b.className = g),
    Object.keys(y).length > 0 && (b.style = y),
    { props: b, internalRef: m.ref }
  );
}
function v6(e, t, a) {
  return typeof e == "function" ? e(t, a) : e;
}
const b6 = R.createContext(void 0);
function S6(e) {
  const { theme: t, name: a, props: i } = e;
  if (!t || !t.components || !t.components[a]) return i;
  const o = t.components[a];
  return o.defaultProps
    ? wm(o.defaultProps, i)
    : !o.styleOverrides && !o.variants
    ? wm(o, i)
    : i;
}
function x6({ props: e, name: t }) {
  const a = R.useContext(b6);
  return S6({ props: e, name: t, theme: { components: a } });
}
const z1 = { theme: void 0 };
function w6(e) {
  let t, a;
  return function (o) {
    let u = t;
    return (
      (u === void 0 || o.theme !== a) &&
        ((z1.theme = o.theme), (u = Y2(e(z1))), (t = u), (a = o.theme)),
      u
    );
  };
}
function T6(e = "") {
  function t(...i) {
    if (!i.length) return "";
    const o = i[0];
    return typeof o == "string" &&
      !o.match(
        /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/
      )
      ? `, var(--${e ? `${e}-` : ""}${o}${t(...i.slice(1))})`
      : `, ${o}`;
  }
  return (i, ...o) => `var(--${e ? `${e}-` : ""}${i}${t(...o)})`;
}
const P1 = (e, t, a, i = []) => {
    let o = e;
    t.forEach((u, c) => {
      c === t.length - 1
        ? Array.isArray(o)
          ? (o[Number(u)] = a)
          : o && typeof o == "object" && (o[u] = a)
        : o &&
          typeof o == "object" &&
          (o[u] || (o[u] = i.includes(u) ? [] : {}), (o = o[u]));
    });
  },
  E6 = (e, t, a) => {
    function i(o, u = [], c = []) {
      Object.entries(o).forEach(([d, h]) => {
        (!a || (a && !a([...u, d]))) &&
          h != null &&
          (typeof h == "object" && Object.keys(h).length > 0
            ? i(h, [...u, d], Array.isArray(h) ? [...c, d] : c)
            : t([...u, d], h, c));
      });
    }
    i(e);
  },
  C6 = (e, t) =>
    typeof t == "number"
      ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((i) =>
          e.includes(i)
        ) || e[e.length - 1].toLowerCase().includes("opacity")
        ? t
        : `${t}px`
      : t;
function Ph(e, t) {
  const { prefix: a, shouldSkipGeneratingVar: i } = t || {},
    o = {},
    u = {},
    c = {};
  return (
    E6(
      e,
      (d, h, m) => {
        if (
          (typeof h == "string" || typeof h == "number") &&
          (!i || !i(d, h))
        ) {
          const g = `--${a ? `${a}-` : ""}${d.join("-")}`,
            y = C6(d, h);
          Object.assign(o, { [g]: y }),
            P1(u, d, `var(${g})`, m),
            P1(c, d, `var(${g}, ${y})`, m);
        }
      },
      (d) => d[0] === "vars"
    ),
    { css: o, vars: u, varsWithDefaults: c }
  );
}
function A6(e, t = {}) {
  const {
      getSelector: a = A,
      disableCssColorScheme: i,
      colorSchemeSelector: o,
    } = t,
    {
      colorSchemes: u = {},
      components: c,
      defaultColorScheme: d = "light",
      ...h
    } = e,
    { vars: m, css: g, varsWithDefaults: y } = Ph(h, t);
  let b = y;
  const x = {},
    { [d]: w, ...S } = u;
  if (
    (Object.entries(S || {}).forEach(([M, P]) => {
      const { vars: B, css: N, varsWithDefaults: q } = Ph(P, t);
      (b = xn(b, q)), (x[M] = { css: N, vars: B });
    }),
    w)
  ) {
    const { css: M, vars: P, varsWithDefaults: B } = Ph(w, t);
    (b = xn(b, B)), (x[d] = { css: M, vars: P });
  }
  function A(M, P) {
    var N, q;
    let B = o;
    if (
      (o === "class" && (B = ".%s"),
      o === "data" && (B = "[data-%s]"),
      o != null &&
        o.startsWith("data-") &&
        !o.includes("%s") &&
        (B = `[${o}="%s"]`),
      M)
    ) {
      if (B === "media")
        return e.defaultColorScheme === M
          ? ":root"
          : {
              [`@media (prefers-color-scheme: ${
                ((q = (N = u[M]) == null ? void 0 : N.palette) == null
                  ? void 0
                  : q.mode) || M
              })`]: { ":root": P },
            };
      if (B)
        return e.defaultColorScheme === M
          ? `:root, ${B.replace("%s", String(M))}`
          : B.replace("%s", String(M));
    }
    return ":root";
  }
  return {
    vars: b,
    generateThemeVars: () => {
      let M = { ...m };
      return (
        Object.entries(x).forEach(([, { vars: P }]) => {
          M = xn(M, P);
        }),
        M
      );
    },
    generateStyleSheets: () => {
      var X, Y;
      const M = [],
        P = e.defaultColorScheme || "light";
      function B(E, J) {
        Object.keys(J).length &&
          M.push(typeof E == "string" ? { [E]: { ...J } } : E);
      }
      B(a(void 0, { ...g }), g);
      const { [P]: N, ...q } = x;
      if (N) {
        const { css: E } = N,
          J =
            (Y = (X = u[P]) == null ? void 0 : X.palette) == null
              ? void 0
              : Y.mode,
          ce = !i && J ? { colorScheme: J, ...E } : { ...E };
        B(a(P, { ...ce }), ce);
      }
      return (
        Object.entries(q).forEach(([E, { css: J }]) => {
          var xe, He;
          const ce =
              (He = (xe = u[E]) == null ? void 0 : xe.palette) == null
                ? void 0
                : He.mode,
            ae = !i && ce ? { colorScheme: ce, ...J } : { ...J };
          B(a(E, { ...ae }), ae);
        }),
        M
      );
    },
  };
}
function _6(e) {
  return function (a) {
    return e === "media"
      ? `@media (prefers-color-scheme: ${a})`
      : e
      ? e.startsWith("data-") && !e.includes("%s")
        ? `[${e}="${a}"] &`
        : e === "class"
        ? `.${a} &`
        : e === "data"
        ? `[data-${a}] &`
        : `${e.replace("%s", a)} &`
      : "&";
  };
}
const ul = { black: "#000", white: "#fff" },
  R6 = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  ts = {
    50: "#f3e5f5",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    700: "#7b1fa2",
  },
  ns = {
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    700: "#d32f2f",
    800: "#c62828",
  },
  zo = {
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    700: "#f57c00",
    900: "#e65100",
  },
  rs = {
    50: "#e3f2fd",
    200: "#90caf9",
    400: "#42a5f5",
    700: "#1976d2",
    800: "#1565c0",
  },
  as = {
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    700: "#0288d1",
    900: "#01579b",
  },
  is = {
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
  };
function X2() {
  return {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: ul.white, default: ul.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  };
}
const O6 = X2();
function Q2() {
  return {
    text: {
      primary: ul.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: ul.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
}
const V1 = Q2();
function j1(e, t, a, i) {
  const o = i.light || i,
    u = i.dark || i * 1.5;
  e[t] ||
    (e.hasOwnProperty(a)
      ? (e[t] = e[a])
      : t === "light"
      ? (e.light = Lp(e.main, o))
      : t === "dark" && (e.dark = kp(e.main, u)));
}
function N6(e = "light") {
  return e === "dark"
    ? { main: rs[200], light: rs[50], dark: rs[400] }
    : { main: rs[700], light: rs[400], dark: rs[800] };
}
function D6(e = "light") {
  return e === "dark"
    ? { main: ts[200], light: ts[50], dark: ts[400] }
    : { main: ts[500], light: ts[300], dark: ts[700] };
}
function M6(e = "light") {
  return e === "dark"
    ? { main: ns[500], light: ns[300], dark: ns[700] }
    : { main: ns[700], light: ns[400], dark: ns[800] };
}
function k6(e = "light") {
  return e === "dark"
    ? { main: as[400], light: as[300], dark: as[700] }
    : { main: as[700], light: as[500], dark: as[900] };
}
function L6(e = "light") {
  return e === "dark"
    ? { main: is[400], light: is[300], dark: is[700] }
    : { main: is[800], light: is[500], dark: is[900] };
}
function B6(e = "light") {
  return e === "dark"
    ? { main: zo[400], light: zo[300], dark: zo[700] }
    : { main: "#ed6c02", light: zo[500], dark: zo[900] };
}
function Bp(e) {
  const {
      mode: t = "light",
      contrastThreshold: a = 3,
      tonalOffset: i = 0.2,
      ...o
    } = e,
    u = e.primary || N6(t),
    c = e.secondary || D6(t),
    d = e.error || M6(t),
    h = e.info || k6(t),
    m = e.success || L6(t),
    g = e.warning || B6(t);
  function y(S) {
    return u6(S, V1.text.primary) >= a ? V1.text.primary : O6.text.primary;
  }
  const b = ({
    color: S,
    name: A,
    mainShade: C = 500,
    lightShade: O = 300,
    darkShade: M = 700,
  }) => {
    if (
      ((S = { ...S }),
      !S.main && S[C] && (S.main = S[C]),
      !S.hasOwnProperty("main"))
    )
      throw new Error(pi(11, A ? ` (${A})` : "", C));
    if (typeof S.main != "string")
      throw new Error(pi(12, A ? ` (${A})` : "", JSON.stringify(S.main)));
    return (
      j1(S, "light", O, i),
      j1(S, "dark", M, i),
      S.contrastText || (S.contrastText = y(S.main)),
      S
    );
  };
  let x;
  return (
    t === "light" ? (x = X2()) : t === "dark" && (x = Q2()),
    xn(
      {
        common: { ...ul },
        mode: t,
        primary: b({ color: u, name: "primary" }),
        secondary: b({
          color: c,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: b({ color: d, name: "error" }),
        warning: b({ color: g, name: "warning" }),
        info: b({ color: h, name: "info" }),
        success: b({ color: m, name: "success" }),
        grey: R6,
        contrastThreshold: a,
        getContrastText: y,
        augmentColor: b,
        tonalOffset: i,
        ...x,
      },
      o
    )
  );
}
function U6(e) {
  const t = {};
  return (
    Object.entries(e).forEach((i) => {
      const [o, u] = i;
      typeof u == "object" &&
        (t[o] = `${u.fontStyle ? `${u.fontStyle} ` : ""}${
          u.fontVariant ? `${u.fontVariant} ` : ""
        }${u.fontWeight ? `${u.fontWeight} ` : ""}${
          u.fontStretch ? `${u.fontStretch} ` : ""
        }${u.fontSize || ""}${u.lineHeight ? `/${u.lineHeight} ` : ""}${
          u.fontFamily || ""
        }`);
    }),
    t
  );
}
function z6(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
      [e.up("sm")]: { minHeight: 64 },
    },
    ...t,
  };
}
function P6(e) {
  return Math.round(e * 1e5) / 1e5;
}
const H1 = { textTransform: "uppercase" },
  q1 = '"Roboto", "Helvetica", "Arial", sans-serif';
function V6(e, t) {
  const {
      fontFamily: a = q1,
      fontSize: i = 14,
      fontWeightLight: o = 300,
      fontWeightRegular: u = 400,
      fontWeightMedium: c = 500,
      fontWeightBold: d = 700,
      htmlFontSize: h = 16,
      allVariants: m,
      pxToRem: g,
      ...y
    } = typeof t == "function" ? t(e) : t,
    b = i / 14,
    x = g || ((A) => `${(A / h) * b}rem`),
    w = (A, C, O, M, P) => ({
      fontFamily: a,
      fontWeight: A,
      fontSize: x(C),
      lineHeight: O,
      ...(a === q1 ? { letterSpacing: `${P6(M / C)}em` } : {}),
      ...P,
      ...m,
    }),
    S = {
      h1: w(o, 96, 1.167, -1.5),
      h2: w(o, 60, 1.2, -0.5),
      h3: w(u, 48, 1.167, 0),
      h4: w(u, 34, 1.235, 0.25),
      h5: w(u, 24, 1.334, 0),
      h6: w(c, 20, 1.6, 0.15),
      subtitle1: w(u, 16, 1.75, 0.15),
      subtitle2: w(c, 14, 1.57, 0.1),
      body1: w(u, 16, 1.5, 0.15),
      body2: w(u, 14, 1.43, 0.15),
      button: w(c, 14, 1.75, 0.4, H1),
      caption: w(u, 12, 1.66, 0.4),
      overline: w(u, 12, 2.66, 1, H1),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return xn(
    {
      htmlFontSize: h,
      pxToRem: x,
      fontFamily: a,
      fontSize: i,
      fontWeightLight: o,
      fontWeightRegular: u,
      fontWeightMedium: c,
      fontWeightBold: d,
      ...S,
    },
    y,
    { clone: !1 }
  );
}
const j6 = 0.2,
  H6 = 0.14,
  q6 = 0.12;
function ut(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${j6})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${H6})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${q6})`,
  ].join(",");
}
const $6 = [
    "none",
    ut(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    ut(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    ut(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    ut(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    ut(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    ut(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    ut(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    ut(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    ut(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    ut(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    ut(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    ut(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    ut(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    ut(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    ut(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    ut(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    ut(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    ut(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    ut(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    ut(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    ut(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    ut(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    ut(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    ut(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  F6 = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  Y6 = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function $1(e) {
  return `${Math.round(e)}ms`;
}
function G6(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function K6(e) {
  const t = { ...F6, ...e.easing },
    a = { ...Y6, ...e.duration };
  return {
    getAutoHeightDuration: G6,
    create: (o = ["all"], u = {}) => {
      const {
        duration: c = a.standard,
        easing: d = t.easeInOut,
        delay: h = 0,
        ...m
      } = u;
      return (Array.isArray(o) ? o : [o])
        .map(
          (g) =>
            `${g} ${typeof c == "string" ? c : $1(c)} ${d} ${
              typeof h == "string" ? h : $1(h)
            }`
        )
        .join(",");
    },
    ...e,
    easing: t,
    duration: a,
  };
}
const X6 = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};
function Q6(e) {
  return (
    Yr(e) ||
    typeof e > "u" ||
    typeof e == "string" ||
    typeof e == "boolean" ||
    typeof e == "number" ||
    Array.isArray(e)
  );
}
function Z2(e = {}) {
  const t = { ...e };
  function a(i) {
    const o = Object.entries(i);
    for (let u = 0; u < o.length; u++) {
      const [c, d] = o[u];
      !Q6(d) || c.startsWith("unstable_")
        ? delete i[c]
        : Yr(d) && ((i[c] = { ...d }), a(i[c]));
    }
  }
  return (
    a(t),
    `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`
  );
}
function Em(e = {}, ...t) {
  const {
    breakpoints: a,
    mixins: i = {},
    spacing: o,
    palette: u = {},
    transitions: c = {},
    typography: d = {},
    shape: h,
    ...m
  } = e;
  if (e.vars && e.generateThemeVars === void 0) throw new Error(pi(20));
  const g = Bp(u),
    y = $2(e);
  let b = xn(y, {
    mixins: z6(y.breakpoints, i),
    palette: g,
    shadows: $6.slice(),
    typography: V6(g, d),
    transitions: K6(c),
    zIndex: { ...X6 },
  });
  return (
    (b = xn(b, m)),
    (b = t.reduce((x, w) => xn(x, w), b)),
    (b.unstable_sxConfig = {
      ...Zc,
      ...(m == null ? void 0 : m.unstable_sxConfig),
    }),
    (b.unstable_sx = function (w) {
      return Ss({ sx: w, theme: this });
    }),
    (b.toRuntimeSource = Z2),
    b
  );
}
function Z6(e) {
  let t;
  return (
    e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
    Math.round(t * 10) / 1e3
  );
}
const I6 = [...Array(25)].map((e, t) => {
  if (t === 0) return "none";
  const a = Z6(t);
  return `linear-gradient(rgba(255 255 255 / ${a}), rgba(255 255 255 / ${a}))`;
});
function I2(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38,
  };
}
function W2(e) {
  return e === "dark" ? I6 : [];
}
function W6(e) {
  const { palette: t = { mode: "light" }, opacity: a, overlays: i, ...o } = e,
    u = Bp(t);
  return {
    palette: u,
    opacity: { ...I2(u.mode), ...a },
    overlays: i || W2(u.mode),
    ...o,
  };
}
function J6(e) {
  var t;
  return (
    !!e[0].match(
      /(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/
    ) ||
    !!e[0].match(/sxConfig$/) ||
    (e[0] === "palette" &&
      !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/)))
  );
}
const e8 = (e) => [
    ...[...Array(25)].map((t, a) => `--${e ? `${e}-` : ""}overlays-${a}`),
    `--${e ? `${e}-` : ""}palette-AppBar-darkBg`,
    `--${e ? `${e}-` : ""}palette-AppBar-darkColor`,
  ],
  t8 = (e) => (t, a) => {
    const i = e.rootSelector || ":root",
      o = e.colorSchemeSelector;
    let u = o;
    if (
      (o === "class" && (u = ".%s"),
      o === "data" && (u = "[data-%s]"),
      o != null &&
        o.startsWith("data-") &&
        !o.includes("%s") &&
        (u = `[${o}="%s"]`),
      e.defaultColorScheme === t)
    ) {
      if (t === "dark") {
        const c = {};
        return (
          e8(e.cssVarPrefix).forEach((d) => {
            (c[d] = a[d]), delete a[d];
          }),
          u === "media"
            ? { [i]: a, "@media (prefers-color-scheme: dark)": { [i]: c } }
            : u
            ? { [u.replace("%s", t)]: c, [`${i}, ${u.replace("%s", t)}`]: a }
            : { [i]: { ...a, ...c } }
        );
      }
      if (u && u !== "media") return `${i}, ${u.replace("%s", String(t))}`;
    } else if (t) {
      if (u === "media")
        return { [`@media (prefers-color-scheme: ${String(t)})`]: { [i]: a } };
      if (u) return u.replace("%s", String(t));
    }
    return i;
  };
function n8(e, t) {
  t.forEach((a) => {
    e[a] || (e[a] = {});
  });
}
function Q(e, t, a) {
  !e[t] && a && (e[t] = a);
}
function $o(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : K2(e);
}
function Fr(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = qo($o(e[t])));
}
function r8(e) {
  return typeof e == "number"
    ? `${e}px`
    : typeof e == "string" || typeof e == "function" || Array.isArray(e)
    ? e
    : "8px";
}
const pr = (e) => {
    try {
      return e();
    } catch {}
  },
  a8 = (e = "mui") => T6(e);
function Vh(e, t, a, i) {
  if (!t) return;
  t = t === !0 ? {} : t;
  const o = i === "dark" ? "dark" : "light";
  if (!a) {
    e[i] = W6({
      ...t,
      palette: { mode: o, ...(t == null ? void 0 : t.palette) },
    });
    return;
  }
  const { palette: u, ...c } = Em({
    ...a,
    palette: { mode: o, ...(t == null ? void 0 : t.palette) },
  });
  return (
    (e[i] = {
      ...t,
      palette: u,
      opacity: { ...I2(o), ...(t == null ? void 0 : t.opacity) },
      overlays: (t == null ? void 0 : t.overlays) || W2(o),
    }),
    c
  );
}
function i8(e = {}, ...t) {
  const {
      colorSchemes: a = { light: !0 },
      defaultColorScheme: i,
      disableCssColorScheme: o = !1,
      cssVarPrefix: u = "mui",
      shouldSkipGeneratingVar: c = J6,
      colorSchemeSelector: d = a.light && a.dark ? "media" : void 0,
      rootSelector: h = ":root",
      ...m
    } = e,
    g = Object.keys(a)[0],
    y = i || (a.light && g !== "light" ? "light" : g),
    b = a8(u),
    { [y]: x, light: w, dark: S, ...A } = a,
    C = { ...A };
  let O = x;
  if (
    (((y === "dark" && !("dark" in a)) || (y === "light" && !("light" in a))) &&
      (O = !0),
    !O)
  )
    throw new Error(pi(21, y));
  const M = Vh(C, O, m, y);
  w && !C.light && Vh(C, w, void 0, "light"),
    S && !C.dark && Vh(C, S, void 0, "dark");
  let P = {
    defaultColorScheme: y,
    ...M,
    cssVarPrefix: u,
    colorSchemeSelector: d,
    rootSelector: h,
    getCssVar: b,
    colorSchemes: C,
    font: { ...U6(M.typography), ...M.font },
    spacing: r8(m.spacing),
  };
  Object.keys(P.colorSchemes).forEach((Y) => {
    const E = P.colorSchemes[Y].palette,
      J = (ce) => {
        const ae = ce.split("-"),
          xe = ae[1],
          He = ae[2];
        return b(ce, E[xe][He]);
      };
    if (
      (E.mode === "light" &&
        (Q(E.common, "background", "#fff"),
        Q(E.common, "onBackground", "#000")),
      E.mode === "dark" &&
        (Q(E.common, "background", "#000"),
        Q(E.common, "onBackground", "#fff")),
      n8(E, [
        "Alert",
        "AppBar",
        "Avatar",
        "Button",
        "Chip",
        "FilledInput",
        "LinearProgress",
        "Skeleton",
        "Slider",
        "SnackbarContent",
        "SpeedDialAction",
        "StepConnector",
        "StepContent",
        "Switch",
        "TableCell",
        "Tooltip",
      ]),
      E.mode === "light")
    ) {
      Q(E.Alert, "errorColor", nt(E.error.light, 0.6)),
        Q(E.Alert, "infoColor", nt(E.info.light, 0.6)),
        Q(E.Alert, "successColor", nt(E.success.light, 0.6)),
        Q(E.Alert, "warningColor", nt(E.warning.light, 0.6)),
        Q(E.Alert, "errorFilledBg", J("palette-error-main")),
        Q(E.Alert, "infoFilledBg", J("palette-info-main")),
        Q(E.Alert, "successFilledBg", J("palette-success-main")),
        Q(E.Alert, "warningFilledBg", J("palette-warning-main")),
        Q(
          E.Alert,
          "errorFilledColor",
          pr(() => E.getContrastText(E.error.main))
        ),
        Q(
          E.Alert,
          "infoFilledColor",
          pr(() => E.getContrastText(E.info.main))
        ),
        Q(
          E.Alert,
          "successFilledColor",
          pr(() => E.getContrastText(E.success.main))
        ),
        Q(
          E.Alert,
          "warningFilledColor",
          pr(() => E.getContrastText(E.warning.main))
        ),
        Q(E.Alert, "errorStandardBg", rt(E.error.light, 0.9)),
        Q(E.Alert, "infoStandardBg", rt(E.info.light, 0.9)),
        Q(E.Alert, "successStandardBg", rt(E.success.light, 0.9)),
        Q(E.Alert, "warningStandardBg", rt(E.warning.light, 0.9)),
        Q(E.Alert, "errorIconColor", J("palette-error-main")),
        Q(E.Alert, "infoIconColor", J("palette-info-main")),
        Q(E.Alert, "successIconColor", J("palette-success-main")),
        Q(E.Alert, "warningIconColor", J("palette-warning-main")),
        Q(E.AppBar, "defaultBg", J("palette-grey-100")),
        Q(E.Avatar, "defaultBg", J("palette-grey-400")),
        Q(E.Button, "inheritContainedBg", J("palette-grey-300")),
        Q(E.Button, "inheritContainedHoverBg", J("palette-grey-A100")),
        Q(E.Chip, "defaultBorder", J("palette-grey-400")),
        Q(E.Chip, "defaultAvatarColor", J("palette-grey-700")),
        Q(E.Chip, "defaultIconColor", J("palette-grey-700")),
        Q(E.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"),
        Q(E.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"),
        Q(E.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"),
        Q(E.LinearProgress, "primaryBg", rt(E.primary.main, 0.62)),
        Q(E.LinearProgress, "secondaryBg", rt(E.secondary.main, 0.62)),
        Q(E.LinearProgress, "errorBg", rt(E.error.main, 0.62)),
        Q(E.LinearProgress, "infoBg", rt(E.info.main, 0.62)),
        Q(E.LinearProgress, "successBg", rt(E.success.main, 0.62)),
        Q(E.LinearProgress, "warningBg", rt(E.warning.main, 0.62)),
        Q(E.Skeleton, "bg", `rgba(${J("palette-text-primaryChannel")} / 0.11)`),
        Q(E.Slider, "primaryTrack", rt(E.primary.main, 0.62)),
        Q(E.Slider, "secondaryTrack", rt(E.secondary.main, 0.62)),
        Q(E.Slider, "errorTrack", rt(E.error.main, 0.62)),
        Q(E.Slider, "infoTrack", rt(E.info.main, 0.62)),
        Q(E.Slider, "successTrack", rt(E.success.main, 0.62)),
        Q(E.Slider, "warningTrack", rt(E.warning.main, 0.62));
      const ce = qu(E.background.default, 0.8);
      Q(E.SnackbarContent, "bg", ce),
        Q(
          E.SnackbarContent,
          "color",
          pr(() => E.getContrastText(ce))
        ),
        Q(E.SpeedDialAction, "fabHoverBg", qu(E.background.paper, 0.15)),
        Q(E.StepConnector, "border", J("palette-grey-400")),
        Q(E.StepContent, "border", J("palette-grey-400")),
        Q(E.Switch, "defaultColor", J("palette-common-white")),
        Q(E.Switch, "defaultDisabledColor", J("palette-grey-100")),
        Q(E.Switch, "primaryDisabledColor", rt(E.primary.main, 0.62)),
        Q(E.Switch, "secondaryDisabledColor", rt(E.secondary.main, 0.62)),
        Q(E.Switch, "errorDisabledColor", rt(E.error.main, 0.62)),
        Q(E.Switch, "infoDisabledColor", rt(E.info.main, 0.62)),
        Q(E.Switch, "successDisabledColor", rt(E.success.main, 0.62)),
        Q(E.Switch, "warningDisabledColor", rt(E.warning.main, 0.62)),
        Q(E.TableCell, "border", rt(Hu(E.divider, 1), 0.88)),
        Q(E.Tooltip, "bg", Hu(E.grey[700], 0.92));
    }
    if (E.mode === "dark") {
      Q(E.Alert, "errorColor", rt(E.error.light, 0.6)),
        Q(E.Alert, "infoColor", rt(E.info.light, 0.6)),
        Q(E.Alert, "successColor", rt(E.success.light, 0.6)),
        Q(E.Alert, "warningColor", rt(E.warning.light, 0.6)),
        Q(E.Alert, "errorFilledBg", J("palette-error-dark")),
        Q(E.Alert, "infoFilledBg", J("palette-info-dark")),
        Q(E.Alert, "successFilledBg", J("palette-success-dark")),
        Q(E.Alert, "warningFilledBg", J("palette-warning-dark")),
        Q(
          E.Alert,
          "errorFilledColor",
          pr(() => E.getContrastText(E.error.dark))
        ),
        Q(
          E.Alert,
          "infoFilledColor",
          pr(() => E.getContrastText(E.info.dark))
        ),
        Q(
          E.Alert,
          "successFilledColor",
          pr(() => E.getContrastText(E.success.dark))
        ),
        Q(
          E.Alert,
          "warningFilledColor",
          pr(() => E.getContrastText(E.warning.dark))
        ),
        Q(E.Alert, "errorStandardBg", nt(E.error.light, 0.9)),
        Q(E.Alert, "infoStandardBg", nt(E.info.light, 0.9)),
        Q(E.Alert, "successStandardBg", nt(E.success.light, 0.9)),
        Q(E.Alert, "warningStandardBg", nt(E.warning.light, 0.9)),
        Q(E.Alert, "errorIconColor", J("palette-error-main")),
        Q(E.Alert, "infoIconColor", J("palette-info-main")),
        Q(E.Alert, "successIconColor", J("palette-success-main")),
        Q(E.Alert, "warningIconColor", J("palette-warning-main")),
        Q(E.AppBar, "defaultBg", J("palette-grey-900")),
        Q(E.AppBar, "darkBg", J("palette-background-paper")),
        Q(E.AppBar, "darkColor", J("palette-text-primary")),
        Q(E.Avatar, "defaultBg", J("palette-grey-600")),
        Q(E.Button, "inheritContainedBg", J("palette-grey-800")),
        Q(E.Button, "inheritContainedHoverBg", J("palette-grey-700")),
        Q(E.Chip, "defaultBorder", J("palette-grey-700")),
        Q(E.Chip, "defaultAvatarColor", J("palette-grey-300")),
        Q(E.Chip, "defaultIconColor", J("palette-grey-300")),
        Q(E.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"),
        Q(E.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"),
        Q(E.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"),
        Q(E.LinearProgress, "primaryBg", nt(E.primary.main, 0.5)),
        Q(E.LinearProgress, "secondaryBg", nt(E.secondary.main, 0.5)),
        Q(E.LinearProgress, "errorBg", nt(E.error.main, 0.5)),
        Q(E.LinearProgress, "infoBg", nt(E.info.main, 0.5)),
        Q(E.LinearProgress, "successBg", nt(E.success.main, 0.5)),
        Q(E.LinearProgress, "warningBg", nt(E.warning.main, 0.5)),
        Q(E.Skeleton, "bg", `rgba(${J("palette-text-primaryChannel")} / 0.13)`),
        Q(E.Slider, "primaryTrack", nt(E.primary.main, 0.5)),
        Q(E.Slider, "secondaryTrack", nt(E.secondary.main, 0.5)),
        Q(E.Slider, "errorTrack", nt(E.error.main, 0.5)),
        Q(E.Slider, "infoTrack", nt(E.info.main, 0.5)),
        Q(E.Slider, "successTrack", nt(E.success.main, 0.5)),
        Q(E.Slider, "warningTrack", nt(E.warning.main, 0.5));
      const ce = qu(E.background.default, 0.98);
      Q(E.SnackbarContent, "bg", ce),
        Q(
          E.SnackbarContent,
          "color",
          pr(() => E.getContrastText(ce))
        ),
        Q(E.SpeedDialAction, "fabHoverBg", qu(E.background.paper, 0.15)),
        Q(E.StepConnector, "border", J("palette-grey-600")),
        Q(E.StepContent, "border", J("palette-grey-600")),
        Q(E.Switch, "defaultColor", J("palette-grey-300")),
        Q(E.Switch, "defaultDisabledColor", J("palette-grey-600")),
        Q(E.Switch, "primaryDisabledColor", nt(E.primary.main, 0.55)),
        Q(E.Switch, "secondaryDisabledColor", nt(E.secondary.main, 0.55)),
        Q(E.Switch, "errorDisabledColor", nt(E.error.main, 0.55)),
        Q(E.Switch, "infoDisabledColor", nt(E.info.main, 0.55)),
        Q(E.Switch, "successDisabledColor", nt(E.success.main, 0.55)),
        Q(E.Switch, "warningDisabledColor", nt(E.warning.main, 0.55)),
        Q(E.TableCell, "border", nt(Hu(E.divider, 1), 0.68)),
        Q(E.Tooltip, "bg", Hu(E.grey[700], 0.92));
    }
    Fr(E.background, "default"),
      Fr(E.background, "paper"),
      Fr(E.common, "background"),
      Fr(E.common, "onBackground"),
      Fr(E, "divider"),
      Object.keys(E).forEach((ce) => {
        const ae = E[ce];
        ce !== "tonalOffset" &&
          ae &&
          typeof ae == "object" &&
          (ae.main && Q(E[ce], "mainChannel", qo($o(ae.main))),
          ae.light && Q(E[ce], "lightChannel", qo($o(ae.light))),
          ae.dark && Q(E[ce], "darkChannel", qo($o(ae.dark))),
          ae.contrastText &&
            Q(E[ce], "contrastTextChannel", qo($o(ae.contrastText))),
          ce === "text" && (Fr(E[ce], "primary"), Fr(E[ce], "secondary")),
          ce === "action" &&
            (ae.active && Fr(E[ce], "active"),
            ae.selected && Fr(E[ce], "selected")));
      });
  }),
    (P = t.reduce((Y, E) => xn(Y, E), P));
  const B = {
      prefix: u,
      disableCssColorScheme: o,
      shouldSkipGeneratingVar: c,
      getSelector: t8(P),
    },
    { vars: N, generateThemeVars: q, generateStyleSheets: X } = A6(P, B);
  return (
    (P.vars = N),
    Object.entries(P.colorSchemes[P.defaultColorScheme]).forEach(([Y, E]) => {
      P[Y] = E;
    }),
    (P.generateThemeVars = q),
    (P.generateStyleSheets = X),
    (P.generateSpacing = function () {
      return q2(m.spacing, Ap(this));
    }),
    (P.getColorSchemeSelector = _6(d)),
    (P.spacing = P.generateSpacing()),
    (P.shouldSkipGeneratingVar = c),
    (P.unstable_sxConfig = {
      ...Zc,
      ...(m == null ? void 0 : m.unstable_sxConfig),
    }),
    (P.unstable_sx = function (E) {
      return Ss({ sx: E, theme: this });
    }),
    (P.toRuntimeSource = Z2),
    P
  );
}
function F1(e, t, a) {
  e.colorSchemes &&
    a &&
    (e.colorSchemes[t] = {
      ...(a !== !0 && a),
      palette: Bp({ ...(a === !0 ? {} : a.palette), mode: t }),
    });
}
function s8(e = {}, ...t) {
  const {
      palette: a,
      cssVariables: i = !1,
      colorSchemes: o = a ? void 0 : { light: !0 },
      defaultColorScheme: u = a == null ? void 0 : a.mode,
      ...c
    } = e,
    d = u || "light",
    h = o == null ? void 0 : o[d],
    m = {
      ...o,
      ...(a
        ? { [d]: { ...(typeof h != "boolean" && h), palette: a } }
        : void 0),
    };
  if (i === !1) {
    if (!("colorSchemes" in e)) return Em(e, ...t);
    let g = a;
    "palette" in e ||
      (m[d] &&
        (m[d] !== !0
          ? (g = m[d].palette)
          : d === "dark" && (g = { mode: "dark" })));
    const y = Em({ ...e, palette: g }, ...t);
    return (
      (y.defaultColorScheme = d),
      (y.colorSchemes = m),
      y.palette.mode === "light" &&
        ((y.colorSchemes.light = {
          ...(m.light !== !0 && m.light),
          palette: y.palette,
        }),
        F1(y, "dark", m.dark)),
      y.palette.mode === "dark" &&
        ((y.colorSchemes.dark = {
          ...(m.dark !== !0 && m.dark),
          palette: y.palette,
        }),
        F1(y, "light", m.light)),
      y
    );
  }
  return (
    !a && !("light" in m) && d === "light" && (m.light = !0),
    i8(
      {
        ...c,
        colorSchemes: m,
        defaultColorScheme: d,
        ...(typeof i != "boolean" && i),
      },
      ...t
    )
  );
}
const o8 = s8(),
  l8 = "$$material";
function u8(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const c8 = (e) => u8(e) && e !== "classes",
  tf = t6({ themeId: l8, defaultTheme: o8, rootShouldForwardProp: c8 }),
  J2 = w6;
function ew(e) {
  return x6(e);
}
function f8(e) {
  return Dp("MuiSvgIcon", e);
}
F2("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const d8 = (e) => {
    const { color: t, fontSize: a, classes: i } = e,
      o = {
        root: ["root", t !== "inherit" && `color${bs(t)}`, `fontSize${bs(a)}`],
      };
    return A2(o, f8, i);
  },
  h8 = tf("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: a } = e;
      return [
        t.root,
        a.color !== "inherit" && t[`color${bs(a.color)}`],
        t[`fontSize${bs(a.fontSize)}`],
      ];
    },
  })(
    J2(({ theme: e }) => {
      var t, a, i, o, u, c, d, h, m, g, y, b, x, w;
      return {
        userSelect: "none",
        width: "1em",
        height: "1em",
        display: "inline-block",
        flexShrink: 0,
        transition:
          (o = (t = e.transitions) == null ? void 0 : t.create) == null
            ? void 0
            : o.call(t, "fill", {
                duration:
                  (i =
                    (a = (e.vars ?? e).transitions) == null
                      ? void 0
                      : a.duration) == null
                    ? void 0
                    : i.shorter,
              }),
        variants: [
          { props: (S) => !S.hasSvgAsChild, style: { fill: "currentColor" } },
          { props: { fontSize: "inherit" }, style: { fontSize: "inherit" } },
          {
            props: { fontSize: "small" },
            style: {
              fontSize:
                ((c = (u = e.typography) == null ? void 0 : u.pxToRem) == null
                  ? void 0
                  : c.call(u, 20)) || "1.25rem",
            },
          },
          {
            props: { fontSize: "medium" },
            style: {
              fontSize:
                ((h = (d = e.typography) == null ? void 0 : d.pxToRem) == null
                  ? void 0
                  : h.call(d, 24)) || "1.5rem",
            },
          },
          {
            props: { fontSize: "large" },
            style: {
              fontSize:
                ((g = (m = e.typography) == null ? void 0 : m.pxToRem) == null
                  ? void 0
                  : g.call(m, 35)) || "2.1875rem",
            },
          },
          ...Object.entries((e.vars ?? e).palette)
            .filter(([, S]) => S && S.main)
            .map(([S]) => {
              var A, C;
              return {
                props: { color: S },
                style: {
                  color:
                    (C = (A = (e.vars ?? e).palette) == null ? void 0 : A[S]) ==
                    null
                      ? void 0
                      : C.main,
                },
              };
            }),
          {
            props: { color: "action" },
            style: {
              color:
                (b = (y = (e.vars ?? e).palette) == null ? void 0 : y.action) ==
                null
                  ? void 0
                  : b.active,
            },
          },
          {
            props: { color: "disabled" },
            style: {
              color:
                (w = (x = (e.vars ?? e).palette) == null ? void 0 : x.action) ==
                null
                  ? void 0
                  : w.disabled,
            },
          },
          { props: { color: "inherit" }, style: { color: void 0 } },
        ],
      };
    })
  ),
  Cm = R.forwardRef(function (t, a) {
    const i = ew({ props: t, name: "MuiSvgIcon" }),
      {
        children: o,
        className: u,
        color: c = "inherit",
        component: d = "svg",
        fontSize: h = "medium",
        htmlColor: m,
        inheritViewBox: g = !1,
        titleAccess: y,
        viewBox: b = "0 0 24 24",
        ...x
      } = i,
      w = R.isValidElement(o) && o.type === "svg",
      S = {
        ...i,
        color: c,
        component: d,
        fontSize: h,
        instanceFontSize: t.fontSize,
        inheritViewBox: g,
        viewBox: b,
        hasSvgAsChild: w,
      },
      A = {};
    g || (A.viewBox = b);
    const C = d8(S);
    return K(h8, {
      as: d,
      className: tr(C.root, u),
      focusable: "false",
      color: m,
      "aria-hidden": y ? void 0 : !0,
      role: y ? "img" : void 0,
      ref: a,
      ...A,
      ...x,
      ...(w && o.props),
      ownerState: S,
      children: [
        w ? o.props.children : o,
        y ? _("title", { children: y }) : null,
      ],
    });
  });
Cm.muiName = "SvgIcon";
function m8(e, t) {
  function a(i, o) {
    return _(Cm, { "data-testid": `${t}Icon`, ref: o, ...i, children: e });
  }
  return (a.muiName = Cm.muiName), R.memo(R.forwardRef(a));
}
const p8 = m8(
  _("path", {
    d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
  }),
  "Person"
);
function g8(e) {
  return Dp("MuiAvatar", e);
}
F2("MuiAvatar", [
  "root",
  "colorDefault",
  "circular",
  "rounded",
  "square",
  "img",
  "fallback",
]);
function y8(e, t) {
  const {
      className: a,
      elementType: i,
      ownerState: o,
      externalForwardedProps: u,
      internalForwardedProps: c,
      shouldForwardComponentProp: d = !1,
      ...h
    } = t,
    {
      component: m,
      slots: g = { [e]: void 0 },
      slotProps: y = { [e]: void 0 },
      ...b
    } = u,
    x = g[e] || i,
    w = v6(y[e], o),
    {
      props: { component: S, ...A },
      internalRef: C,
    } = y6({
      className: a,
      ...h,
      externalForwardedProps: void 0,
      externalSlotProps: w,
    }),
    O = h6(C, w == null ? void 0 : w.ref, t.ref),
    M = S,
    P = p6(
      x,
      {
        ...(e === "root"),
        ...(!g[e] && c),
        ...A,
        ...(M && !d && { as: M }),
        ...(M && d && { component: M }),
        ref: O,
      },
      o
    );
  return [x, P];
}
const v8 = (e) => {
    const { classes: t, variant: a, colorDefault: i } = e;
    return A2(
      {
        root: ["root", a, i && "colorDefault"],
        img: ["img"],
        fallback: ["fallback"],
      },
      g8,
      t
    );
  },
  b8 = tf("div", {
    name: "MuiAvatar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: a } = e;
      return [t.root, t[a.variant], a.colorDefault && t.colorDefault];
    },
  })(
    J2(({ theme: e }) => ({
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      width: 40,
      height: 40,
      fontFamily: e.typography.fontFamily,
      fontSize: e.typography.pxToRem(20),
      lineHeight: 1,
      borderRadius: "50%",
      overflow: "hidden",
      userSelect: "none",
      variants: [
        {
          props: { variant: "rounded" },
          style: { borderRadius: (e.vars || e).shape.borderRadius },
        },
        { props: { variant: "square" }, style: { borderRadius: 0 } },
        {
          props: { colorDefault: !0 },
          style: {
            color: (e.vars || e).palette.background.default,
            ...(e.vars
              ? { backgroundColor: e.vars.palette.Avatar.defaultBg }
              : {
                  backgroundColor: e.palette.grey[400],
                  ...e.applyStyles("dark", {
                    backgroundColor: e.palette.grey[600],
                  }),
                }),
          },
        },
      ],
    }))
  ),
  S8 = tf("img", {
    name: "MuiAvatar",
    slot: "Img",
    overridesResolver: (e, t) => t.img,
  })({
    width: "100%",
    height: "100%",
    textAlign: "center",
    objectFit: "cover",
    color: "transparent",
    textIndent: 1e4,
  }),
  x8 = tf(p8, {
    name: "MuiAvatar",
    slot: "Fallback",
    overridesResolver: (e, t) => t.fallback,
  })({ width: "75%", height: "75%" });
function w8({ crossOrigin: e, referrerPolicy: t, src: a, srcSet: i }) {
  const [o, u] = R.useState(!1);
  return (
    R.useEffect(() => {
      if (!a && !i) return;
      u(!1);
      let c = !0;
      const d = new Image();
      return (
        (d.onload = () => {
          c && u("loaded");
        }),
        (d.onerror = () => {
          c && u("error");
        }),
        (d.crossOrigin = e),
        (d.referrerPolicy = t),
        (d.src = a),
        i && (d.srcset = i),
        () => {
          c = !1;
        }
      );
    }, [e, t, a, i]),
    o
  );
}
const T8 = R.forwardRef(function (t, a) {
    const i = ew({ props: t, name: "MuiAvatar" }),
      {
        alt: o,
        children: u,
        className: c,
        component: d = "div",
        slots: h = {},
        slotProps: m = {},
        imgProps: g,
        sizes: y,
        src: b,
        srcSet: x,
        variant: w = "circular",
        ...S
      } = i;
    let A = null;
    const C = { ...i, component: d, variant: w },
      O = w8({
        ...g,
        ...(typeof m.img == "function" ? m.img(C) : m.img),
        src: b,
        srcSet: x,
      }),
      M = b || x,
      P = M && O !== "error";
    (C.colorDefault = !P), delete C.ownerState;
    const B = v8(C),
      [N, q] = y8("img", {
        className: B.img,
        elementType: S8,
        externalForwardedProps: {
          slots: h,
          slotProps: { img: { ...g, ...m.img } },
        },
        additionalProps: { alt: o, src: b, srcSet: x, sizes: y },
        ownerState: C,
      });
    return (
      P
        ? (A = _(N, { ...q }))
        : u || u === 0
        ? (A = u)
        : M && o
        ? (A = o[0])
        : (A = _(x8, { ownerState: C, className: B.fallback })),
      _(b8, {
        as: d,
        className: tr(B.root, c),
        ref: a,
        ...S,
        ownerState: C,
        children: A,
      })
    );
  }),
  E8 = () => {
    const [e, t] = R.useState({ name: "", semester: "", department: "" }),
      a = Wr(),
      { updateUser: i, currentUser: o } = R.useContext(Ts);
    R.useEffect(() => {
      o &&
        t({ name: o.fullName, semester: o.semester, department: o.department });
    }, [o]);
    const u = () => {
      i(null),
        localStorage.removeItem("token"),
        localStorage.removeItem("user"),
        a("/");
    };
    return _("div", {
      className: "flex justify-center items-center min-h-screen bg-black px-6",
      children: K("div", {
        className:
          "bg-gray-900 bg-opacity-80 shadow-2xl rounded-3xl p-10 w-full max-w-2xl text-center border border-gray-700 backdrop-blur-md",
        children: [
          _("div", {
            className: "flex justify-center mb-6",
            children: _(T8, {
              sx: {
                bgcolor: "orangered",
                width: 100,
                height: 100,
                fontSize: 40,
              },
              children: e.name ? e.name[0].toUpperCase() : "?",
            }),
          }),
          _("h1", {
            className: "text-4xl font-extrabold text-white",
            children: e.name || "Unknown User",
          }),
          K("p", {
            className: "text-gray-400 text-lg mt-3",
            children: [
              _("span", {
                className: "font-semibold text-blue-500",
                children: "Semester:",
              }),
              " ",
              e.semester || "N/A",
            ],
          }),
          K("p", {
            className: "text-gray-400 text-lg mt-1",
            children: [
              _("span", {
                className: "font-semibold text-blue-500",
                children: "Department:",
              }),
              " ",
              e.department || "N/A",
            ],
          }),
          K("div", {
            className: "flex justify-center gap-4 mt-6",
            children: [
              _("button", {
                className:
                  "px-6 py-3 text-lg font-semibold bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-transform transform hover:scale-105",
                children: "Edit Profile",
              }),
              _("button", {
                onClick: u,
                className:
                  "px-6 py-3 text-lg font-semibold bg-red-600 text-white rounded-xl hover:bg-red-500 transition-transform transform hover:scale-105",
                children: "Logout",
              }),
            ],
          }),
        ],
      }),
    });
  },
  C8 = () => {
    const [e, t] = R.useState([]),
      [a, i] = R.useState(null),
      [o, u] = R.useState({});
    R.useEffect(() => {
      (async () => {
        const y = JSON.parse(localStorage.getItem("user")),
          b = y == null ? void 0 : y._id;
        try {
          const x = await je.get(`apirequest/shivani/${b}`);
          t(x.data.book || []);
        } catch (x) {
          _e.error("Error fetching user books."),
            console.error("Error fetching user books:", x);
        }
      })();
    }, []);
    const c = (g) => {
        i(g), u({ ...g });
      },
      d = (g) => {
        const { name: y, value: b } = g.target;
        u((x) => ({ ...x, [y]: b }));
      },
      h = async () => {
        try {
          await je.put(`apirequest/shivani/update/${a._id}`, o),
            t((g) => g.map((y) => (y._id === a._id ? { ...y, ...o } : y))),
            i(null),
            _e.success("Book details updated successfully.");
        } catch (g) {
          _e.error("Failed to update book details."),
            console.error("Error updating book details:", g);
        }
      },
      m = async (g) => {
        try {
          await je.delete(`apirequest/shivani/delete/${g}`),
            t(e.filter((y) => y._id !== g)),
            _e.success("Book deleted successfully.");
        } catch (y) {
          _e.error("Failed to delete book."),
            console.error("Error deleting book:", y);
        }
      };
    return K("div", {
      className: "min-h-screen bg-black text-white p-6",
      children: [
        _("h1", {
          className:
            "items-center text-4xl font-bold text-center mb-8 animate-bounce",
          children: "My Books",
        }),
        _("div", {
          className: "grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
          children: e.map((g) =>
            K(
              "div",
              {
                className:
                  "p-4 bg-gray-800 rounded-xl shadow-lg transform transition hover:scale-105",
                children: [
                  _("img", {
                    src: g.imageUrl || "https://via.placeholder.com/150",
                    alt: g.subject,
                    className: "w-full h-48 object-cover rounded-md",
                  }),
                  _("h2", {
                    className: "text-xl font-semibold text-blue-400 mt-2",
                    children: g.subject,
                  }),
                  K("p", {
                    className: "text-gray-300",
                    children: ["Department: ", g.department],
                  }),
                  K("p", {
                    className: "text-gray-400",
                    children: ["Price: ₹", g.price],
                  }),
                  K("p", {
                    className: "text-gray-400",
                    children: ["Year: ", g.year],
                  }),
                  K("p", {
                    className: "text-gray-400",
                    children: ["Location: ", g.location],
                  }),
                  K("p", {
                    className: "text-gray-400",
                    children: ["Quantity: ", g.quantity],
                  }),
                  K("div", {
                    className: "flex justify-between mt-4",
                    children: [
                      _("button", {
                        onClick: () => c(g),
                        className:
                          "bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-lg transition-all",
                        children: "Edit Book Detail",
                      }),
                      _("button", {
                        onClick: () => m(g._id),
                        className:
                          "bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-all",
                        children: "Delete Book",
                      }),
                    ],
                  }),
                ],
              },
              g._id
            )
          ),
        }),
        a &&
          _("div", {
            className:
              "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50",
            children: K("div", {
              className: "bg-gray-800 text-white p-8 rounded-lg",
              children: [
                _("h2", {
                  className: "text-2xl font-bold mb-4",
                  children: "Update Book Details",
                }),
                K("div", {
                  className: "space-y-4",
                  children: [
                    _("input", {
                      type: "text",
                      name: "subject",
                      value: o.subject,
                      onChange: d,
                      placeholder: "Subject",
                      className: "w-full p-2 bg-gray-700 rounded",
                    }),
                    _("input", {
                      type: "text",
                      name: "department",
                      value: o.department,
                      onChange: d,
                      placeholder: "Department",
                      className: "w-full p-2 bg-gray-700 rounded",
                    }),
                    _("input", {
                      type: "number",
                      name: "price",
                      value: o.price,
                      onChange: d,
                      placeholder: "Price",
                      className: "w-full p-2 bg-gray-700 rounded",
                    }),
                    _("input", {
                      type: "number",
                      name: "year",
                      value: o.year,
                      onChange: d,
                      placeholder: "Year",
                      className: "w-full p-2 bg-gray-700 rounded",
                    }),
                    _("input", {
                      type: "text",
                      name: "location",
                      value: o.location,
                      onChange: d,
                      placeholder: "Location",
                      className: "w-full p-2 bg-gray-700 rounded",
                    }),
                  ],
                }),
                K("div", {
                  className: "flex justify-between mt-6",
                  children: [
                    _("button", {
                      onClick: h,
                      className:
                        "bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg",
                      children: "Save",
                    }),
                    _("button", {
                      onClick: () => i(null),
                      className:
                        "bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg",
                      children: "Cancel",
                    }),
                  ],
                }),
              ],
            }),
          }),
        _(Sl, { position: "top-center", autoClose: 3e3 }),
      ],
    });
  },
  A8 = "/assets/dribbble-1-unscreen-CJzBqM4o.gif",
  _8 = () =>
    _("div", {
      className:
        "flex items-center justify-center h-screen bg-black font-serif",
      children: K("div", {
        className: "text-center max-w-lg p-4",
        children: [
          _("h1", {
            className: "text-7xl font-extrabold text-white z-10",
            children: "404",
          }),
          K("div", {
            className:
              "relative h-96 flex items-center justify-center rounded-2xl shadow-lg overflow-hidden",
            children: [
              _("img", {
                src: A8,
                alt: "404 Animation",
                className:
                  "absolute z-100 inset-0 w-full h-full object-cover opacity-100",
              }),
              _("div", { className: "absolute inset-0 bg-black opacity-50" }),
            ],
          }),
          K("div", {
            className: "mt-[-50px] text-white",
            children: [
              _("h2", {
                className: "text-3xl font-bold",
                children: "Oops! You seem lost.",
              }),
              _("p", {
                className: "text-lg mt-2",
                children:
                  "The page you are looking for doesn't exist or has been moved.",
              }),
              _("a", {
                href: "/",
                className:
                  "inline-block mt-6 px-8 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out",
                children: "Go to Home",
              }),
            ],
          }),
        ],
      }),
    }),
  wr = Object.create(null);
wr.open = "0";
wr.close = "1";
wr.ping = "2";
wr.pong = "3";
wr.message = "4";
wr.upgrade = "5";
wr.noop = "6";
const ac = Object.create(null);
Object.keys(wr).forEach((e) => {
  ac[wr[e]] = e;
});
const Am = { type: "error", data: "parser error" },
  tw =
    typeof Blob == "function" ||
    (typeof Blob < "u" &&
      Object.prototype.toString.call(Blob) === "[object BlobConstructor]"),
  nw = typeof ArrayBuffer == "function",
  rw = (e) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(e)
      : e && e.buffer instanceof ArrayBuffer,
  Up = ({ type: e, data: t }, a, i) =>
    tw && t instanceof Blob
      ? a
        ? i(t)
        : Y1(t, i)
      : nw && (t instanceof ArrayBuffer || rw(t))
      ? a
        ? i(t)
        : Y1(new Blob([t]), i)
      : i(wr[e] + (t || "")),
  Y1 = (e, t) => {
    const a = new FileReader();
    return (
      (a.onload = function () {
        const i = a.result.split(",")[1];
        t("b" + (i || ""));
      }),
      a.readAsDataURL(e)
    );
  };
function G1(e) {
  return e instanceof Uint8Array
    ? e
    : e instanceof ArrayBuffer
    ? new Uint8Array(e)
    : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let jh;
function R8(e, t) {
  if (tw && e.data instanceof Blob)
    return e.data.arrayBuffer().then(G1).then(t);
  if (nw && (e.data instanceof ArrayBuffer || rw(e.data))) return t(G1(e.data));
  Up(e, !1, (a) => {
    jh || (jh = new TextEncoder()), t(jh.encode(a));
  });
}
const K1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  Fo = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < K1.length; e++) Fo[K1.charCodeAt(e)] = e;
const O8 = (e) => {
    let t = e.length * 0.75,
      a = e.length,
      i,
      o = 0,
      u,
      c,
      d,
      h;
    e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
    const m = new ArrayBuffer(t),
      g = new Uint8Array(m);
    for (i = 0; i < a; i += 4)
      (u = Fo[e.charCodeAt(i)]),
        (c = Fo[e.charCodeAt(i + 1)]),
        (d = Fo[e.charCodeAt(i + 2)]),
        (h = Fo[e.charCodeAt(i + 3)]),
        (g[o++] = (u << 2) | (c >> 4)),
        (g[o++] = ((c & 15) << 4) | (d >> 2)),
        (g[o++] = ((d & 3) << 6) | (h & 63));
    return m;
  },
  N8 = typeof ArrayBuffer == "function",
  zp = (e, t) => {
    if (typeof e != "string") return { type: "message", data: aw(e, t) };
    const a = e.charAt(0);
    return a === "b"
      ? { type: "message", data: D8(e.substring(1), t) }
      : ac[a]
      ? e.length > 1
        ? { type: ac[a], data: e.substring(1) }
        : { type: ac[a] }
      : Am;
  },
  D8 = (e, t) => {
    if (N8) {
      const a = O8(e);
      return aw(a, t);
    } else return { base64: !0, data: e };
  },
  aw = (e, t) => {
    switch (t) {
      case "blob":
        return e instanceof Blob ? e : new Blob([e]);
      case "arraybuffer":
      default:
        return e instanceof ArrayBuffer ? e : e.buffer;
    }
  },
  iw = "",
  M8 = (e, t) => {
    const a = e.length,
      i = new Array(a);
    let o = 0;
    e.forEach((u, c) => {
      Up(u, !1, (d) => {
        (i[c] = d), ++o === a && t(i.join(iw));
      });
    });
  },
  k8 = (e, t) => {
    const a = e.split(iw),
      i = [];
    for (let o = 0; o < a.length; o++) {
      const u = zp(a[o], t);
      if ((i.push(u), u.type === "error")) break;
    }
    return i;
  };
function L8() {
  return new TransformStream({
    transform(e, t) {
      R8(e, (a) => {
        const i = a.length;
        let o;
        if (i < 126)
          (o = new Uint8Array(1)), new DataView(o.buffer).setUint8(0, i);
        else if (i < 65536) {
          o = new Uint8Array(3);
          const u = new DataView(o.buffer);
          u.setUint8(0, 126), u.setUint16(1, i);
        } else {
          o = new Uint8Array(9);
          const u = new DataView(o.buffer);
          u.setUint8(0, 127), u.setBigUint64(1, BigInt(i));
        }
        e.data && typeof e.data != "string" && (o[0] |= 128),
          t.enqueue(o),
          t.enqueue(a);
      });
    },
  });
}
let Hh;
function $u(e) {
  return e.reduce((t, a) => t + a.length, 0);
}
function Fu(e, t) {
  if (e[0].length === t) return e.shift();
  const a = new Uint8Array(t);
  let i = 0;
  for (let o = 0; o < t; o++)
    (a[o] = e[0][i++]), i === e[0].length && (e.shift(), (i = 0));
  return e.length && i < e[0].length && (e[0] = e[0].slice(i)), a;
}
function B8(e, t) {
  Hh || (Hh = new TextDecoder());
  const a = [];
  let i = 0,
    o = -1,
    u = !1;
  return new TransformStream({
    transform(c, d) {
      for (a.push(c); ; ) {
        if (i === 0) {
          if ($u(a) < 1) break;
          const h = Fu(a, 1);
          (u = (h[0] & 128) === 128),
            (o = h[0] & 127),
            o < 126 ? (i = 3) : o === 126 ? (i = 1) : (i = 2);
        } else if (i === 1) {
          if ($u(a) < 2) break;
          const h = Fu(a, 2);
          (o = new DataView(h.buffer, h.byteOffset, h.length).getUint16(0)),
            (i = 3);
        } else if (i === 2) {
          if ($u(a) < 8) break;
          const h = Fu(a, 8),
            m = new DataView(h.buffer, h.byteOffset, h.length),
            g = m.getUint32(0);
          if (g > Math.pow(2, 21) - 1) {
            d.enqueue(Am);
            break;
          }
          (o = g * Math.pow(2, 32) + m.getUint32(4)), (i = 3);
        } else {
          if ($u(a) < o) break;
          const h = Fu(a, o);
          d.enqueue(zp(u ? h : Hh.decode(h), t)), (i = 0);
        }
        if (o === 0 || o > e) {
          d.enqueue(Am);
          break;
        }
      }
    },
  });
}
const sw = 4;
function Dt(e) {
  if (e) return U8(e);
}
function U8(e) {
  for (var t in Dt.prototype) e[t] = Dt.prototype[t];
  return e;
}
Dt.prototype.on = Dt.prototype.addEventListener = function (e, t) {
  return (
    (this._callbacks = this._callbacks || {}),
    (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
    this
  );
};
Dt.prototype.once = function (e, t) {
  function a() {
    this.off(e, a), t.apply(this, arguments);
  }
  return (a.fn = t), this.on(e, a), this;
};
Dt.prototype.off =
  Dt.prototype.removeListener =
  Dt.prototype.removeAllListeners =
  Dt.prototype.removeEventListener =
    function (e, t) {
      if (((this._callbacks = this._callbacks || {}), arguments.length == 0))
        return (this._callbacks = {}), this;
      var a = this._callbacks["$" + e];
      if (!a) return this;
      if (arguments.length == 1) return delete this._callbacks["$" + e], this;
      for (var i, o = 0; o < a.length; o++)
        if (((i = a[o]), i === t || i.fn === t)) {
          a.splice(o, 1);
          break;
        }
      return a.length === 0 && delete this._callbacks["$" + e], this;
    };
Dt.prototype.emit = function (e) {
  this._callbacks = this._callbacks || {};
  for (
    var t = new Array(arguments.length - 1),
      a = this._callbacks["$" + e],
      i = 1;
    i < arguments.length;
    i++
  )
    t[i - 1] = arguments[i];
  if (a) {
    a = a.slice(0);
    for (var i = 0, o = a.length; i < o; ++i) a[i].apply(this, t);
  }
  return this;
};
Dt.prototype.emitReserved = Dt.prototype.emit;
Dt.prototype.listeners = function (e) {
  return (
    (this._callbacks = this._callbacks || {}), this._callbacks["$" + e] || []
  );
};
Dt.prototype.hasListeners = function (e) {
  return !!this.listeners(e).length;
};
const nf =
    typeof Promise == "function" && typeof Promise.resolve == "function"
      ? (t) => Promise.resolve().then(t)
      : (t, a) => a(t, 0),
  $n =
    typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : Function("return this")(),
  z8 = "arraybuffer";
function ow(e, ...t) {
  return t.reduce((a, i) => (e.hasOwnProperty(i) && (a[i] = e[i]), a), {});
}
const P8 = $n.setTimeout,
  V8 = $n.clearTimeout;
function rf(e, t) {
  t.useNativeTimers
    ? ((e.setTimeoutFn = P8.bind($n)), (e.clearTimeoutFn = V8.bind($n)))
    : ((e.setTimeoutFn = $n.setTimeout.bind($n)),
      (e.clearTimeoutFn = $n.clearTimeout.bind($n)));
}
const j8 = 1.33;
function H8(e) {
  return typeof e == "string"
    ? q8(e)
    : Math.ceil((e.byteLength || e.size) * j8);
}
function q8(e) {
  let t = 0,
    a = 0;
  for (let i = 0, o = e.length; i < o; i++)
    (t = e.charCodeAt(i)),
      t < 128
        ? (a += 1)
        : t < 2048
        ? (a += 2)
        : t < 55296 || t >= 57344
        ? (a += 3)
        : (i++, (a += 4));
  return a;
}
function lw() {
  return (
    Date.now().toString(36).substring(3) +
    Math.random().toString(36).substring(2, 5)
  );
}
function $8(e) {
  let t = "";
  for (let a in e)
    e.hasOwnProperty(a) &&
      (t.length && (t += "&"),
      (t += encodeURIComponent(a) + "=" + encodeURIComponent(e[a])));
  return t;
}
function F8(e) {
  let t = {},
    a = e.split("&");
  for (let i = 0, o = a.length; i < o; i++) {
    let u = a[i].split("=");
    t[decodeURIComponent(u[0])] = decodeURIComponent(u[1]);
  }
  return t;
}
class Y8 extends Error {
  constructor(t, a, i) {
    super(t),
      (this.description = a),
      (this.context = i),
      (this.type = "TransportError");
  }
}
class Pp extends Dt {
  constructor(t) {
    super(),
      (this.writable = !1),
      rf(this, t),
      (this.opts = t),
      (this.query = t.query),
      (this.socket = t.socket),
      (this.supportsBinary = !t.forceBase64);
  }
  onError(t, a, i) {
    return super.emitReserved("error", new Y8(t, a, i)), this;
  }
  open() {
    return (this.readyState = "opening"), this.doOpen(), this;
  }
  close() {
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        (this.doClose(), this.onClose()),
      this
    );
  }
  send(t) {
    this.readyState === "open" && this.write(t);
  }
  onOpen() {
    (this.readyState = "open"),
      (this.writable = !0),
      super.emitReserved("open");
  }
  onData(t) {
    const a = zp(t, this.socket.binaryType);
    this.onPacket(a);
  }
  onPacket(t) {
    super.emitReserved("packet", t);
  }
  onClose(t) {
    (this.readyState = "closed"), super.emitReserved("close", t);
  }
  pause(t) {}
  createUri(t, a = {}) {
    return (
      t +
      "://" +
      this._hostname() +
      this._port() +
      this.opts.path +
      this._query(a)
    );
  }
  _hostname() {
    const t = this.opts.hostname;
    return t.indexOf(":") === -1 ? t : "[" + t + "]";
  }
  _port() {
    return this.opts.port &&
      ((this.opts.secure && +(this.opts.port !== 443)) ||
        (!this.opts.secure && Number(this.opts.port) !== 80))
      ? ":" + this.opts.port
      : "";
  }
  _query(t) {
    const a = $8(t);
    return a.length ? "?" + a : "";
  }
}
class G8 extends Pp {
  constructor() {
    super(...arguments), (this._polling = !1);
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this._poll();
  }
  pause(t) {
    this.readyState = "pausing";
    const a = () => {
      (this.readyState = "paused"), t();
    };
    if (this._polling || !this.writable) {
      let i = 0;
      this._polling &&
        (i++,
        this.once("pollComplete", function () {
          --i || a();
        })),
        this.writable ||
          (i++,
          this.once("drain", function () {
            --i || a();
          }));
    } else a();
  }
  _poll() {
    (this._polling = !0), this.doPoll(), this.emitReserved("poll");
  }
  onData(t) {
    const a = (i) => {
      if (
        (this.readyState === "opening" && i.type === "open" && this.onOpen(),
        i.type === "close")
      )
        return (
          this.onClose({ description: "transport closed by the server" }), !1
        );
      this.onPacket(i);
    };
    k8(t, this.socket.binaryType).forEach(a),
      this.readyState !== "closed" &&
        ((this._polling = !1),
        this.emitReserved("pollComplete"),
        this.readyState === "open" && this._poll());
  }
  doClose() {
    const t = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? t() : this.once("open", t);
  }
  write(t) {
    (this.writable = !1),
      M8(t, (a) => {
        this.doWrite(a, () => {
          (this.writable = !0), this.emitReserved("drain");
        });
      });
  }
  uri() {
    const t = this.opts.secure ? "https" : "http",
      a = this.query || {};
    return (
      this.opts.timestampRequests !== !1 &&
        (a[this.opts.timestampParam] = lw()),
      !this.supportsBinary && !a.sid && (a.b64 = 1),
      this.createUri(t, a)
    );
  }
}
let uw = !1;
try {
  uw = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {}
const K8 = uw;
function X8() {}
class Q8 extends G8 {
  constructor(t) {
    if ((super(t), typeof location < "u")) {
      const a = location.protocol === "https:";
      let i = location.port;
      i || (i = a ? "443" : "80"),
        (this.xd =
          (typeof location < "u" && t.hostname !== location.hostname) ||
          i !== t.port);
    }
  }
  doWrite(t, a) {
    const i = this.request({ method: "POST", data: t });
    i.on("success", a),
      i.on("error", (o, u) => {
        this.onError("xhr post error", o, u);
      });
  }
  doPoll() {
    const t = this.request();
    t.on("data", this.onData.bind(this)),
      t.on("error", (a, i) => {
        this.onError("xhr poll error", a, i);
      }),
      (this.pollXhr = t);
  }
}
let ms = class ic extends Dt {
  constructor(t, a, i) {
    super(),
      (this.createRequest = t),
      rf(this, i),
      (this._opts = i),
      (this._method = i.method || "GET"),
      (this._uri = a),
      (this._data = i.data !== void 0 ? i.data : null),
      this._create();
  }
  _create() {
    var t;
    const a = ow(
      this._opts,
      "agent",
      "pfx",
      "key",
      "passphrase",
      "cert",
      "ca",
      "ciphers",
      "rejectUnauthorized",
      "autoUnref"
    );
    a.xdomain = !!this._opts.xd;
    const i = (this._xhr = this.createRequest(a));
    try {
      i.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          i.setDisableHeaderCheck && i.setDisableHeaderCheck(!0);
          for (let o in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(o) &&
              i.setRequestHeader(o, this._opts.extraHeaders[o]);
        }
      } catch {}
      if (this._method === "POST")
        try {
          i.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {}
      try {
        i.setRequestHeader("Accept", "*/*");
      } catch {}
      (t = this._opts.cookieJar) === null || t === void 0 || t.addCookies(i),
        "withCredentials" in i &&
          (i.withCredentials = this._opts.withCredentials),
        this._opts.requestTimeout && (i.timeout = this._opts.requestTimeout),
        (i.onreadystatechange = () => {
          var o;
          i.readyState === 3 &&
            ((o = this._opts.cookieJar) === null ||
              o === void 0 ||
              o.parseCookies(i.getResponseHeader("set-cookie"))),
            i.readyState === 4 &&
              (i.status === 200 || i.status === 1223
                ? this._onLoad()
                : this.setTimeoutFn(() => {
                    this._onError(typeof i.status == "number" ? i.status : 0);
                  }, 0));
        }),
        i.send(this._data);
    } catch (o) {
      this.setTimeoutFn(() => {
        this._onError(o);
      }, 0);
      return;
    }
    typeof document < "u" &&
      ((this._index = ic.requestsCount++), (ic.requests[this._index] = this));
  }
  _onError(t) {
    this.emitReserved("error", t, this._xhr), this._cleanup(!0);
  }
  _cleanup(t) {
    if (!(typeof this._xhr > "u" || this._xhr === null)) {
      if (((this._xhr.onreadystatechange = X8), t))
        try {
          this._xhr.abort();
        } catch {}
      typeof document < "u" && delete ic.requests[this._index],
        (this._xhr = null);
    }
  }
  _onLoad() {
    const t = this._xhr.responseText;
    t !== null &&
      (this.emitReserved("data", t),
      this.emitReserved("success"),
      this._cleanup());
  }
  abort() {
    this._cleanup();
  }
};
ms.requestsCount = 0;
ms.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function") attachEvent("onunload", X1);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in $n ? "pagehide" : "unload";
    addEventListener(e, X1, !1);
  }
}
function X1() {
  for (let e in ms.requests)
    ms.requests.hasOwnProperty(e) && ms.requests[e].abort();
}
const Z8 = (function () {
  const e = cw({ xdomain: !1 });
  return e && e.responseType !== null;
})();
class I8 extends Q8 {
  constructor(t) {
    super(t);
    const a = t && t.forceBase64;
    this.supportsBinary = Z8 && !a;
  }
  request(t = {}) {
    return (
      Object.assign(t, { xd: this.xd }, this.opts), new ms(cw, this.uri(), t)
    );
  }
}
function cw(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || K8)) return new XMLHttpRequest();
  } catch {}
  if (!t)
    try {
      return new $n[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {}
}
const fw =
  typeof navigator < "u" &&
  typeof navigator.product == "string" &&
  navigator.product.toLowerCase() === "reactnative";
class W8 extends Pp {
  get name() {
    return "websocket";
  }
  doOpen() {
    const t = this.uri(),
      a = this.opts.protocols,
      i = fw
        ? {}
        : ow(
            this.opts,
            "agent",
            "perMessageDeflate",
            "pfx",
            "key",
            "passphrase",
            "cert",
            "ca",
            "ciphers",
            "rejectUnauthorized",
            "localAddress",
            "protocolVersion",
            "origin",
            "maxPayload",
            "family",
            "checkServerIdentity"
          );
    this.opts.extraHeaders && (i.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(t, a, i);
    } catch (o) {
      return this.emitReserved("error", o);
    }
    (this.ws.binaryType = this.socket.binaryType), this.addEventListeners();
  }
  addEventListeners() {
    (this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }),
      (this.ws.onclose = (t) =>
        this.onClose({
          description: "websocket connection closed",
          context: t,
        })),
      (this.ws.onmessage = (t) => this.onData(t.data)),
      (this.ws.onerror = (t) => this.onError("websocket error", t));
  }
  write(t) {
    this.writable = !1;
    for (let a = 0; a < t.length; a++) {
      const i = t[a],
        o = a === t.length - 1;
      Up(i, this.supportsBinary, (u) => {
        try {
          this.doWrite(i, u);
        } catch {}
        o &&
          nf(() => {
            (this.writable = !0), this.emitReserved("drain");
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" &&
      ((this.ws.onerror = () => {}), this.ws.close(), (this.ws = null));
  }
  uri() {
    const t = this.opts.secure ? "wss" : "ws",
      a = this.query || {};
    return (
      this.opts.timestampRequests && (a[this.opts.timestampParam] = lw()),
      this.supportsBinary || (a.b64 = 1),
      this.createUri(t, a)
    );
  }
}
const qh = $n.WebSocket || $n.MozWebSocket;
class J8 extends W8 {
  createSocket(t, a, i) {
    return fw ? new qh(t, a, i) : a ? new qh(t, a) : new qh(t);
  }
  doWrite(t, a) {
    this.ws.send(a);
  }
}
class ek extends Pp {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(
        this.createUri("https"),
        this.opts.transportOptions[this.name]
      );
    } catch (t) {
      return this.emitReserved("error", t);
    }
    this._transport.closed
      .then(() => {
        this.onClose();
      })
      .catch((t) => {
        this.onError("webtransport error", t);
      }),
      this._transport.ready.then(() => {
        this._transport.createBidirectionalStream().then((t) => {
          const a = B8(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
            i = t.readable.pipeThrough(a).getReader(),
            o = L8();
          o.readable.pipeTo(t.writable),
            (this._writer = o.writable.getWriter());
          const u = () => {
            i.read()
              .then(({ done: d, value: h }) => {
                d || (this.onPacket(h), u());
              })
              .catch((d) => {});
          };
          u();
          const c = { type: "open" };
          this.query.sid && (c.data = `{"sid":"${this.query.sid}"}`),
            this._writer.write(c).then(() => this.onOpen());
        });
      });
  }
  write(t) {
    this.writable = !1;
    for (let a = 0; a < t.length; a++) {
      const i = t[a],
        o = a === t.length - 1;
      this._writer.write(i).then(() => {
        o &&
          nf(() => {
            (this.writable = !0), this.emitReserved("drain");
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var t;
    (t = this._transport) === null || t === void 0 || t.close();
  }
}
const tk = { websocket: J8, webtransport: ek, polling: I8 },
  nk =
    /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
  rk = [
    "source",
    "protocol",
    "authority",
    "userInfo",
    "user",
    "password",
    "host",
    "port",
    "relative",
    "path",
    "directory",
    "file",
    "query",
    "anchor",
  ];
function _m(e) {
  if (e.length > 8e3) throw "URI too long";
  const t = e,
    a = e.indexOf("["),
    i = e.indexOf("]");
  a != -1 &&
    i != -1 &&
    (e =
      e.substring(0, a) +
      e.substring(a, i).replace(/:/g, ";") +
      e.substring(i, e.length));
  let o = nk.exec(e || ""),
    u = {},
    c = 14;
  for (; c--; ) u[rk[c]] = o[c] || "";
  return (
    a != -1 &&
      i != -1 &&
      ((u.source = t),
      (u.host = u.host.substring(1, u.host.length - 1).replace(/;/g, ":")),
      (u.authority = u.authority
        .replace("[", "")
        .replace("]", "")
        .replace(/;/g, ":")),
      (u.ipv6uri = !0)),
    (u.pathNames = ak(u, u.path)),
    (u.queryKey = ik(u, u.query)),
    u
  );
}
function ak(e, t) {
  const a = /\/{2,9}/g,
    i = t.replace(a, "/").split("/");
  return (
    (t.slice(0, 1) == "/" || t.length === 0) && i.splice(0, 1),
    t.slice(-1) == "/" && i.splice(i.length - 1, 1),
    i
  );
}
function ik(e, t) {
  const a = {};
  return (
    t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (i, o, u) {
      o && (a[o] = u);
    }),
    a
  );
}
const Rm =
    typeof addEventListener == "function" &&
    typeof removeEventListener == "function",
  sc = [];
Rm &&
  addEventListener(
    "offline",
    () => {
      sc.forEach((e) => e());
    },
    !1
  );
class Aa extends Dt {
  constructor(t, a) {
    if (
      (super(),
      (this.binaryType = z8),
      (this.writeBuffer = []),
      (this._prevBufferLen = 0),
      (this._pingInterval = -1),
      (this._pingTimeout = -1),
      (this._maxPayload = -1),
      (this._pingTimeoutTime = 1 / 0),
      t && typeof t == "object" && ((a = t), (t = null)),
      t)
    ) {
      const i = _m(t);
      (a.hostname = i.host),
        (a.secure = i.protocol === "https" || i.protocol === "wss"),
        (a.port = i.port),
        i.query && (a.query = i.query);
    } else a.host && (a.hostname = _m(a.host).host);
    rf(this, a),
      (this.secure =
        a.secure != null
          ? a.secure
          : typeof location < "u" && location.protocol === "https:"),
      a.hostname && !a.port && (a.port = this.secure ? "443" : "80"),
      (this.hostname =
        a.hostname ||
        (typeof location < "u" ? location.hostname : "localhost")),
      (this.port =
        a.port ||
        (typeof location < "u" && location.port
          ? location.port
          : this.secure
          ? "443"
          : "80")),
      (this.transports = []),
      (this._transportsByName = {}),
      a.transports.forEach((i) => {
        const o = i.prototype.name;
        this.transports.push(o), (this._transportsByName[o] = i);
      }),
      (this.opts = Object.assign(
        {
          path: "/engine.io",
          agent: !1,
          withCredentials: !1,
          upgrade: !0,
          timestampParam: "t",
          rememberUpgrade: !1,
          addTrailingSlash: !0,
          rejectUnauthorized: !0,
          perMessageDeflate: { threshold: 1024 },
          transportOptions: {},
          closeOnBeforeunload: !1,
        },
        a
      )),
      (this.opts.path =
        this.opts.path.replace(/\/$/, "") +
        (this.opts.addTrailingSlash ? "/" : "")),
      typeof this.opts.query == "string" &&
        (this.opts.query = F8(this.opts.query)),
      Rm &&
        (this.opts.closeOnBeforeunload &&
          ((this._beforeunloadEventListener = () => {
            this.transport &&
              (this.transport.removeAllListeners(), this.transport.close());
          }),
          addEventListener(
            "beforeunload",
            this._beforeunloadEventListener,
            !1
          )),
        this.hostname !== "localhost" &&
          ((this._offlineEventListener = () => {
            this._onClose("transport close", {
              description: "network connection lost",
            });
          }),
          sc.push(this._offlineEventListener))),
      this.opts.withCredentials && (this._cookieJar = void 0),
      this._open();
  }
  createTransport(t) {
    const a = Object.assign({}, this.opts.query);
    (a.EIO = sw), (a.transport = t), this.id && (a.sid = this.id);
    const i = Object.assign(
      {},
      this.opts,
      {
        query: a,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port,
      },
      this.opts.transportOptions[t]
    );
    return new this._transportsByName[t](i);
  }
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    }
    const t =
      this.opts.rememberUpgrade &&
      Aa.priorWebsocketSuccess &&
      this.transports.indexOf("websocket") !== -1
        ? "websocket"
        : this.transports[0];
    this.readyState = "opening";
    const a = this.createTransport(t);
    a.open(), this.setTransport(a);
  }
  setTransport(t) {
    this.transport && this.transport.removeAllListeners(),
      (this.transport = t),
      t
        .on("drain", this._onDrain.bind(this))
        .on("packet", this._onPacket.bind(this))
        .on("error", this._onError.bind(this))
        .on("close", (a) => this._onClose("transport close", a));
  }
  onOpen() {
    (this.readyState = "open"),
      (Aa.priorWebsocketSuccess = this.transport.name === "websocket"),
      this.emitReserved("open"),
      this.flush();
  }
  _onPacket(t) {
    if (
      this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing"
    )
      switch (
        (this.emitReserved("packet", t), this.emitReserved("heartbeat"), t.type)
      ) {
        case "open":
          this.onHandshake(JSON.parse(t.data));
          break;
        case "ping":
          this._sendPacket("pong"),
            this.emitReserved("ping"),
            this.emitReserved("pong"),
            this._resetPingTimeout();
          break;
        case "error":
          const a = new Error("server error");
          (a.code = t.data), this._onError(a);
          break;
        case "message":
          this.emitReserved("data", t.data),
            this.emitReserved("message", t.data);
          break;
      }
  }
  onHandshake(t) {
    this.emitReserved("handshake", t),
      (this.id = t.sid),
      (this.transport.query.sid = t.sid),
      (this._pingInterval = t.pingInterval),
      (this._pingTimeout = t.pingTimeout),
      (this._maxPayload = t.maxPayload),
      this.onOpen(),
      this.readyState !== "closed" && this._resetPingTimeout();
  }
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const t = this._pingInterval + this._pingTimeout;
    (this._pingTimeoutTime = Date.now() + t),
      (this._pingTimeoutTimer = this.setTimeoutFn(() => {
        this._onClose("ping timeout");
      }, t)),
      this.opts.autoUnref && this._pingTimeoutTimer.unref();
  }
  _onDrain() {
    this.writeBuffer.splice(0, this._prevBufferLen),
      (this._prevBufferLen = 0),
      this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  flush() {
    if (
      this.readyState !== "closed" &&
      this.transport.writable &&
      !this.upgrading &&
      this.writeBuffer.length
    ) {
      const t = this._getWritablePackets();
      this.transport.send(t),
        (this._prevBufferLen = t.length),
        this.emitReserved("flush");
    }
  }
  _getWritablePackets() {
    if (
      !(
        this._maxPayload &&
        this.transport.name === "polling" &&
        this.writeBuffer.length > 1
      )
    )
      return this.writeBuffer;
    let a = 1;
    for (let i = 0; i < this.writeBuffer.length; i++) {
      const o = this.writeBuffer[i].data;
      if ((o && (a += H8(o)), i > 0 && a > this._maxPayload))
        return this.writeBuffer.slice(0, i);
      a += 2;
    }
    return this.writeBuffer;
  }
  _hasPingExpired() {
    if (!this._pingTimeoutTime) return !0;
    const t = Date.now() > this._pingTimeoutTime;
    return (
      t &&
        ((this._pingTimeoutTime = 0),
        nf(() => {
          this._onClose("ping timeout");
        }, this.setTimeoutFn)),
      t
    );
  }
  write(t, a, i) {
    return this._sendPacket("message", t, a, i), this;
  }
  send(t, a, i) {
    return this._sendPacket("message", t, a, i), this;
  }
  _sendPacket(t, a, i, o) {
    if (
      (typeof a == "function" && ((o = a), (a = void 0)),
      typeof i == "function" && ((o = i), (i = null)),
      this.readyState === "closing" || this.readyState === "closed")
    )
      return;
    (i = i || {}), (i.compress = i.compress !== !1);
    const u = { type: t, data: a, options: i };
    this.emitReserved("packetCreate", u),
      this.writeBuffer.push(u),
      o && this.once("flush", o),
      this.flush();
  }
  close() {
    const t = () => {
        this._onClose("forced close"), this.transport.close();
      },
      a = () => {
        this.off("upgrade", a), this.off("upgradeError", a), t();
      },
      i = () => {
        this.once("upgrade", a), this.once("upgradeError", a);
      };
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        ((this.readyState = "closing"),
        this.writeBuffer.length
          ? this.once("drain", () => {
              this.upgrading ? i() : t();
            })
          : this.upgrading
          ? i()
          : t()),
      this
    );
  }
  _onError(t) {
    if (
      ((Aa.priorWebsocketSuccess = !1),
      this.opts.tryAllTransports &&
        this.transports.length > 1 &&
        this.readyState === "opening")
    )
      return this.transports.shift(), this._open();
    this.emitReserved("error", t), this._onClose("transport error", t);
  }
  _onClose(t, a) {
    if (
      this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing"
    ) {
      if (
        (this.clearTimeoutFn(this._pingTimeoutTimer),
        this.transport.removeAllListeners("close"),
        this.transport.close(),
        this.transport.removeAllListeners(),
        Rm &&
          (this._beforeunloadEventListener &&
            removeEventListener(
              "beforeunload",
              this._beforeunloadEventListener,
              !1
            ),
          this._offlineEventListener))
      ) {
        const i = sc.indexOf(this._offlineEventListener);
        i !== -1 && sc.splice(i, 1);
      }
      (this.readyState = "closed"),
        (this.id = null),
        this.emitReserved("close", t, a),
        (this.writeBuffer = []),
        (this._prevBufferLen = 0);
    }
  }
}
Aa.protocol = sw;
class sk extends Aa {
  constructor() {
    super(...arguments), (this._upgrades = []);
  }
  onOpen() {
    if ((super.onOpen(), this.readyState === "open" && this.opts.upgrade))
      for (let t = 0; t < this._upgrades.length; t++)
        this._probe(this._upgrades[t]);
  }
  _probe(t) {
    let a = this.createTransport(t),
      i = !1;
    Aa.priorWebsocketSuccess = !1;
    const o = () => {
      i ||
        (a.send([{ type: "ping", data: "probe" }]),
        a.once("packet", (y) => {
          if (!i)
            if (y.type === "pong" && y.data === "probe") {
              if (
                ((this.upgrading = !0), this.emitReserved("upgrading", a), !a)
              )
                return;
              (Aa.priorWebsocketSuccess = a.name === "websocket"),
                this.transport.pause(() => {
                  i ||
                    (this.readyState !== "closed" &&
                      (g(),
                      this.setTransport(a),
                      a.send([{ type: "upgrade" }]),
                      this.emitReserved("upgrade", a),
                      (a = null),
                      (this.upgrading = !1),
                      this.flush()));
                });
            } else {
              const b = new Error("probe error");
              (b.transport = a.name), this.emitReserved("upgradeError", b);
            }
        }));
    };
    function u() {
      i || ((i = !0), g(), a.close(), (a = null));
    }
    const c = (y) => {
      const b = new Error("probe error: " + y);
      (b.transport = a.name), u(), this.emitReserved("upgradeError", b);
    };
    function d() {
      c("transport closed");
    }
    function h() {
      c("socket closed");
    }
    function m(y) {
      a && y.name !== a.name && u();
    }
    const g = () => {
      a.removeListener("open", o),
        a.removeListener("error", c),
        a.removeListener("close", d),
        this.off("close", h),
        this.off("upgrading", m);
    };
    a.once("open", o),
      a.once("error", c),
      a.once("close", d),
      this.once("close", h),
      this.once("upgrading", m),
      this._upgrades.indexOf("webtransport") !== -1 && t !== "webtransport"
        ? this.setTimeoutFn(() => {
            i || a.open();
          }, 200)
        : a.open();
  }
  onHandshake(t) {
    (this._upgrades = this._filterUpgrades(t.upgrades)), super.onHandshake(t);
  }
  _filterUpgrades(t) {
    const a = [];
    for (let i = 0; i < t.length; i++)
      ~this.transports.indexOf(t[i]) && a.push(t[i]);
    return a;
  }
}
let ok = class extends sk {
  constructor(t, a = {}) {
    const i = typeof t == "object" ? t : a;
    (!i.transports || (i.transports && typeof i.transports[0] == "string")) &&
      (i.transports = (i.transports || ["polling", "websocket", "webtransport"])
        .map((o) => tk[o])
        .filter((o) => !!o)),
      super(t, i);
  }
};
function lk(e, t = "", a) {
  let i = e;
  (a = a || (typeof location < "u" && location)),
    e == null && (e = a.protocol + "//" + a.host),
    typeof e == "string" &&
      (e.charAt(0) === "/" &&
        (e.charAt(1) === "/" ? (e = a.protocol + e) : (e = a.host + e)),
      /^(https?|wss?):\/\//.test(e) ||
        (typeof a < "u" ? (e = a.protocol + "//" + e) : (e = "https://" + e)),
      (i = _m(e))),
    i.port ||
      (/^(http|ws)$/.test(i.protocol)
        ? (i.port = "80")
        : /^(http|ws)s$/.test(i.protocol) && (i.port = "443")),
    (i.path = i.path || "/");
  const u = i.host.indexOf(":") !== -1 ? "[" + i.host + "]" : i.host;
  return (
    (i.id = i.protocol + "://" + u + ":" + i.port + t),
    (i.href =
      i.protocol + "://" + u + (a && a.port === i.port ? "" : ":" + i.port)),
    i
  );
}
const uk = typeof ArrayBuffer == "function",
  ck = (e) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(e)
      : e.buffer instanceof ArrayBuffer,
  dw = Object.prototype.toString,
  fk =
    typeof Blob == "function" ||
    (typeof Blob < "u" && dw.call(Blob) === "[object BlobConstructor]"),
  dk =
    typeof File == "function" ||
    (typeof File < "u" && dw.call(File) === "[object FileConstructor]");
function Vp(e) {
  return (
    (uk && (e instanceof ArrayBuffer || ck(e))) ||
    (fk && e instanceof Blob) ||
    (dk && e instanceof File)
  );
}
function oc(e, t) {
  if (!e || typeof e != "object") return !1;
  if (Array.isArray(e)) {
    for (let a = 0, i = e.length; a < i; a++) if (oc(e[a])) return !0;
    return !1;
  }
  if (Vp(e)) return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return oc(e.toJSON(), !0);
  for (const a in e)
    if (Object.prototype.hasOwnProperty.call(e, a) && oc(e[a])) return !0;
  return !1;
}
function hk(e) {
  const t = [],
    a = e.data,
    i = e;
  return (
    (i.data = Om(a, t)), (i.attachments = t.length), { packet: i, buffers: t }
  );
}
function Om(e, t) {
  if (!e) return e;
  if (Vp(e)) {
    const a = { _placeholder: !0, num: t.length };
    return t.push(e), a;
  } else if (Array.isArray(e)) {
    const a = new Array(e.length);
    for (let i = 0; i < e.length; i++) a[i] = Om(e[i], t);
    return a;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const a = {};
    for (const i in e)
      Object.prototype.hasOwnProperty.call(e, i) && (a[i] = Om(e[i], t));
    return a;
  }
  return e;
}
function mk(e, t) {
  return (e.data = Nm(e.data, t)), delete e.attachments, e;
}
function Nm(e, t) {
  if (!e) return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let a = 0; a < e.length; a++) e[a] = Nm(e[a], t);
  else if (typeof e == "object")
    for (const a in e)
      Object.prototype.hasOwnProperty.call(e, a) && (e[a] = Nm(e[a], t));
  return e;
}
const pk = [
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener",
  ],
  gk = 5;
var Ve;
(function (e) {
  (e[(e.CONNECT = 0)] = "CONNECT"),
    (e[(e.DISCONNECT = 1)] = "DISCONNECT"),
    (e[(e.EVENT = 2)] = "EVENT"),
    (e[(e.ACK = 3)] = "ACK"),
    (e[(e.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
    (e[(e.BINARY_EVENT = 5)] = "BINARY_EVENT"),
    (e[(e.BINARY_ACK = 6)] = "BINARY_ACK");
})(Ve || (Ve = {}));
class yk {
  constructor(t) {
    this.replacer = t;
  }
  encode(t) {
    return (t.type === Ve.EVENT || t.type === Ve.ACK) && oc(t)
      ? this.encodeAsBinary({
          type: t.type === Ve.EVENT ? Ve.BINARY_EVENT : Ve.BINARY_ACK,
          nsp: t.nsp,
          data: t.data,
          id: t.id,
        })
      : [this.encodeAsString(t)];
  }
  encodeAsString(t) {
    let a = "" + t.type;
    return (
      (t.type === Ve.BINARY_EVENT || t.type === Ve.BINARY_ACK) &&
        (a += t.attachments + "-"),
      t.nsp && t.nsp !== "/" && (a += t.nsp + ","),
      t.id != null && (a += t.id),
      t.data != null && (a += JSON.stringify(t.data, this.replacer)),
      a
    );
  }
  encodeAsBinary(t) {
    const a = hk(t),
      i = this.encodeAsString(a.packet),
      o = a.buffers;
    return o.unshift(i), o;
  }
}
function Q1(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class jp extends Dt {
  constructor(t) {
    super(), (this.reviver = t);
  }
  add(t) {
    let a;
    if (typeof t == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      a = this.decodeString(t);
      const i = a.type === Ve.BINARY_EVENT;
      i || a.type === Ve.BINARY_ACK
        ? ((a.type = i ? Ve.EVENT : Ve.ACK),
          (this.reconstructor = new vk(a)),
          a.attachments === 0 && super.emitReserved("decoded", a))
        : super.emitReserved("decoded", a);
    } else if (Vp(t) || t.base64)
      if (this.reconstructor)
        (a = this.reconstructor.takeBinaryData(t)),
          a && ((this.reconstructor = null), super.emitReserved("decoded", a));
      else throw new Error("got binary data when not reconstructing a packet");
    else throw new Error("Unknown type: " + t);
  }
  decodeString(t) {
    let a = 0;
    const i = { type: Number(t.charAt(0)) };
    if (Ve[i.type] === void 0) throw new Error("unknown packet type " + i.type);
    if (i.type === Ve.BINARY_EVENT || i.type === Ve.BINARY_ACK) {
      const u = a + 1;
      for (; t.charAt(++a) !== "-" && a != t.length; );
      const c = t.substring(u, a);
      if (c != Number(c) || t.charAt(a) !== "-")
        throw new Error("Illegal attachments");
      i.attachments = Number(c);
    }
    if (t.charAt(a + 1) === "/") {
      const u = a + 1;
      for (; ++a && !(t.charAt(a) === "," || a === t.length); );
      i.nsp = t.substring(u, a);
    } else i.nsp = "/";
    const o = t.charAt(a + 1);
    if (o !== "" && Number(o) == o) {
      const u = a + 1;
      for (; ++a; ) {
        const c = t.charAt(a);
        if (c == null || Number(c) != c) {
          --a;
          break;
        }
        if (a === t.length) break;
      }
      i.id = Number(t.substring(u, a + 1));
    }
    if (t.charAt(++a)) {
      const u = this.tryParse(t.substr(a));
      if (jp.isPayloadValid(i.type, u)) i.data = u;
      else throw new Error("invalid payload");
    }
    return i;
  }
  tryParse(t) {
    try {
      return JSON.parse(t, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(t, a) {
    switch (t) {
      case Ve.CONNECT:
        return Q1(a);
      case Ve.DISCONNECT:
        return a === void 0;
      case Ve.CONNECT_ERROR:
        return typeof a == "string" || Q1(a);
      case Ve.EVENT:
      case Ve.BINARY_EVENT:
        return (
          Array.isArray(a) &&
          (typeof a[0] == "number" ||
            (typeof a[0] == "string" && pk.indexOf(a[0]) === -1))
        );
      case Ve.ACK:
      case Ve.BINARY_ACK:
        return Array.isArray(a);
    }
  }
  destroy() {
    this.reconstructor &&
      (this.reconstructor.finishedReconstruction(),
      (this.reconstructor = null));
  }
}
class vk {
  constructor(t) {
    (this.packet = t), (this.buffers = []), (this.reconPack = t);
  }
  takeBinaryData(t) {
    if (
      (this.buffers.push(t), this.buffers.length === this.reconPack.attachments)
    ) {
      const a = mk(this.reconPack, this.buffers);
      return this.finishedReconstruction(), a;
    }
    return null;
  }
  finishedReconstruction() {
    (this.reconPack = null), (this.buffers = []);
  }
}
const bk = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Decoder: jp,
      Encoder: yk,
      get PacketType() {
        return Ve;
      },
      protocol: gk,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function er(e, t, a) {
  return (
    e.on(t, a),
    function () {
      e.off(t, a);
    }
  );
}
const Sk = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1,
});
class hw extends Dt {
  constructor(t, a, i) {
    super(),
      (this.connected = !1),
      (this.recovered = !1),
      (this.receiveBuffer = []),
      (this.sendBuffer = []),
      (this._queue = []),
      (this._queueSeq = 0),
      (this.ids = 0),
      (this.acks = {}),
      (this.flags = {}),
      (this.io = t),
      (this.nsp = a),
      i && i.auth && (this.auth = i.auth),
      (this._opts = Object.assign({}, i)),
      this.io._autoConnect && this.open();
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs) return;
    const t = this.io;
    this.subs = [
      er(t, "open", this.onopen.bind(this)),
      er(t, "packet", this.onpacket.bind(this)),
      er(t, "error", this.onerror.bind(this)),
      er(t, "close", this.onclose.bind(this)),
    ];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    return this.connected
      ? this
      : (this.subEvents(),
        this.io._reconnecting || this.io.open(),
        this.io._readyState === "open" && this.onopen(),
        this);
  }
  open() {
    return this.connect();
  }
  send(...t) {
    return t.unshift("message"), this.emit.apply(this, t), this;
  }
  emit(t, ...a) {
    var i, o, u;
    if (Sk.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (
      (a.unshift(t),
      this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
    )
      return this._addToQueue(a), this;
    const c = { type: Ve.EVENT, data: a };
    if (
      ((c.options = {}),
      (c.options.compress = this.flags.compress !== !1),
      typeof a[a.length - 1] == "function")
    ) {
      const g = this.ids++,
        y = a.pop();
      this._registerAckCallback(g, y), (c.id = g);
    }
    const d =
        (o =
          (i = this.io.engine) === null || i === void 0
            ? void 0
            : i.transport) === null || o === void 0
          ? void 0
          : o.writable,
      h =
        this.connected &&
        !(
          !((u = this.io.engine) === null || u === void 0) &&
          u._hasPingExpired()
        );
    return (
      (this.flags.volatile && !d) ||
        (h
          ? (this.notifyOutgoingListeners(c), this.packet(c))
          : this.sendBuffer.push(c)),
      (this.flags = {}),
      this
    );
  }
  _registerAckCallback(t, a) {
    var i;
    const o =
      (i = this.flags.timeout) !== null && i !== void 0
        ? i
        : this._opts.ackTimeout;
    if (o === void 0) {
      this.acks[t] = a;
      return;
    }
    const u = this.io.setTimeoutFn(() => {
        delete this.acks[t];
        for (let d = 0; d < this.sendBuffer.length; d++)
          this.sendBuffer[d].id === t && this.sendBuffer.splice(d, 1);
        a.call(this, new Error("operation has timed out"));
      }, o),
      c = (...d) => {
        this.io.clearTimeoutFn(u), a.apply(this, d);
      };
    (c.withError = !0), (this.acks[t] = c);
  }
  emitWithAck(t, ...a) {
    return new Promise((i, o) => {
      const u = (c, d) => (c ? o(c) : i(d));
      (u.withError = !0), a.push(u), this.emit(t, ...a);
    });
  }
  _addToQueue(t) {
    let a;
    typeof t[t.length - 1] == "function" && (a = t.pop());
    const i = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: t,
      flags: Object.assign({ fromQueue: !0 }, this.flags),
    };
    t.push((o, ...u) =>
      i !== this._queue[0]
        ? void 0
        : (o !== null
            ? i.tryCount > this._opts.retries &&
              (this._queue.shift(), a && a(o))
            : (this._queue.shift(), a && a(null, ...u)),
          (i.pending = !1),
          this._drainQueue())
    ),
      this._queue.push(i),
      this._drainQueue();
  }
  _drainQueue(t = !1) {
    if (!this.connected || this._queue.length === 0) return;
    const a = this._queue[0];
    (a.pending && !t) ||
      ((a.pending = !0),
      a.tryCount++,
      (this.flags = a.flags),
      this.emit.apply(this, a.args));
  }
  packet(t) {
    (t.nsp = this.nsp), this.io._packet(t);
  }
  onopen() {
    typeof this.auth == "function"
      ? this.auth((t) => {
          this._sendConnectPacket(t);
        })
      : this._sendConnectPacket(this.auth);
  }
  _sendConnectPacket(t) {
    this.packet({
      type: Ve.CONNECT,
      data: this._pid
        ? Object.assign({ pid: this._pid, offset: this._lastOffset }, t)
        : t,
    });
  }
  onerror(t) {
    this.connected || this.emitReserved("connect_error", t);
  }
  onclose(t, a) {
    (this.connected = !1),
      delete this.id,
      this.emitReserved("disconnect", t, a),
      this._clearAcks();
  }
  _clearAcks() {
    Object.keys(this.acks).forEach((t) => {
      if (!this.sendBuffer.some((i) => String(i.id) === t)) {
        const i = this.acks[t];
        delete this.acks[t],
          i.withError &&
            i.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  onpacket(t) {
    if (t.nsp === this.nsp)
      switch (t.type) {
        case Ve.CONNECT:
          t.data && t.data.sid
            ? this.onconnect(t.data.sid, t.data.pid)
            : this.emitReserved(
                "connect_error",
                new Error(
                  "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                )
              );
          break;
        case Ve.EVENT:
        case Ve.BINARY_EVENT:
          this.onevent(t);
          break;
        case Ve.ACK:
        case Ve.BINARY_ACK:
          this.onack(t);
          break;
        case Ve.DISCONNECT:
          this.ondisconnect();
          break;
        case Ve.CONNECT_ERROR:
          this.destroy();
          const i = new Error(t.data.message);
          (i.data = t.data.data), this.emitReserved("connect_error", i);
          break;
      }
  }
  onevent(t) {
    const a = t.data || [];
    t.id != null && a.push(this.ack(t.id)),
      this.connected
        ? this.emitEvent(a)
        : this.receiveBuffer.push(Object.freeze(a));
  }
  emitEvent(t) {
    if (this._anyListeners && this._anyListeners.length) {
      const a = this._anyListeners.slice();
      for (const i of a) i.apply(this, t);
    }
    super.emit.apply(this, t),
      this._pid &&
        t.length &&
        typeof t[t.length - 1] == "string" &&
        (this._lastOffset = t[t.length - 1]);
  }
  ack(t) {
    const a = this;
    let i = !1;
    return function (...o) {
      i || ((i = !0), a.packet({ type: Ve.ACK, id: t, data: o }));
    };
  }
  onack(t) {
    const a = this.acks[t.id];
    typeof a == "function" &&
      (delete this.acks[t.id],
      a.withError && t.data.unshift(null),
      a.apply(this, t.data));
  }
  onconnect(t, a) {
    (this.id = t),
      (this.recovered = a && this._pid === a),
      (this._pid = a),
      (this.connected = !0),
      this.emitBuffered(),
      this.emitReserved("connect"),
      this._drainQueue(!0);
  }
  emitBuffered() {
    this.receiveBuffer.forEach((t) => this.emitEvent(t)),
      (this.receiveBuffer = []),
      this.sendBuffer.forEach((t) => {
        this.notifyOutgoingListeners(t), this.packet(t);
      }),
      (this.sendBuffer = []);
  }
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  destroy() {
    this.subs && (this.subs.forEach((t) => t()), (this.subs = void 0)),
      this.io._destroy(this);
  }
  disconnect() {
    return (
      this.connected && this.packet({ type: Ve.DISCONNECT }),
      this.destroy(),
      this.connected && this.onclose("io client disconnect"),
      this
    );
  }
  close() {
    return this.disconnect();
  }
  compress(t) {
    return (this.flags.compress = t), this;
  }
  get volatile() {
    return (this.flags.volatile = !0), this;
  }
  timeout(t) {
    return (this.flags.timeout = t), this;
  }
  onAny(t) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.push(t),
      this
    );
  }
  prependAny(t) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.unshift(t),
      this
    );
  }
  offAny(t) {
    if (!this._anyListeners) return this;
    if (t) {
      const a = this._anyListeners;
      for (let i = 0; i < a.length; i++)
        if (t === a[i]) return a.splice(i, 1), this;
    } else this._anyListeners = [];
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(t) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.push(t),
      this
    );
  }
  prependAnyOutgoing(t) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.unshift(t),
      this
    );
  }
  offAnyOutgoing(t) {
    if (!this._anyOutgoingListeners) return this;
    if (t) {
      const a = this._anyOutgoingListeners;
      for (let i = 0; i < a.length; i++)
        if (t === a[i]) return a.splice(i, 1), this;
    } else this._anyOutgoingListeners = [];
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(t) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const a = this._anyOutgoingListeners.slice();
      for (const i of a) i.apply(this, t.data);
    }
  }
}
function Os(e) {
  (e = e || {}),
    (this.ms = e.min || 100),
    (this.max = e.max || 1e4),
    (this.factor = e.factor || 2),
    (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
    (this.attempts = 0);
}
Os.prototype.duration = function () {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(),
      a = Math.floor(t * this.jitter * e);
    e = Math.floor(t * 10) & 1 ? e + a : e - a;
  }
  return Math.min(e, this.max) | 0;
};
Os.prototype.reset = function () {
  this.attempts = 0;
};
Os.prototype.setMin = function (e) {
  this.ms = e;
};
Os.prototype.setMax = function (e) {
  this.max = e;
};
Os.prototype.setJitter = function (e) {
  this.jitter = e;
};
class Dm extends Dt {
  constructor(t, a) {
    var i;
    super(),
      (this.nsps = {}),
      (this.subs = []),
      t && typeof t == "object" && ((a = t), (t = void 0)),
      (a = a || {}),
      (a.path = a.path || "/socket.io"),
      (this.opts = a),
      rf(this, a),
      this.reconnection(a.reconnection !== !1),
      this.reconnectionAttempts(a.reconnectionAttempts || 1 / 0),
      this.reconnectionDelay(a.reconnectionDelay || 1e3),
      this.reconnectionDelayMax(a.reconnectionDelayMax || 5e3),
      this.randomizationFactor(
        (i = a.randomizationFactor) !== null && i !== void 0 ? i : 0.5
      ),
      (this.backoff = new Os({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor(),
      })),
      this.timeout(a.timeout == null ? 2e4 : a.timeout),
      (this._readyState = "closed"),
      (this.uri = t);
    const o = a.parser || bk;
    (this.encoder = new o.Encoder()),
      (this.decoder = new o.Decoder()),
      (this._autoConnect = a.autoConnect !== !1),
      this._autoConnect && this.open();
  }
  reconnection(t) {
    return arguments.length
      ? ((this._reconnection = !!t), t || (this.skipReconnect = !0), this)
      : this._reconnection;
  }
  reconnectionAttempts(t) {
    return t === void 0
      ? this._reconnectionAttempts
      : ((this._reconnectionAttempts = t), this);
  }
  reconnectionDelay(t) {
    var a;
    return t === void 0
      ? this._reconnectionDelay
      : ((this._reconnectionDelay = t),
        (a = this.backoff) === null || a === void 0 || a.setMin(t),
        this);
  }
  randomizationFactor(t) {
    var a;
    return t === void 0
      ? this._randomizationFactor
      : ((this._randomizationFactor = t),
        (a = this.backoff) === null || a === void 0 || a.setJitter(t),
        this);
  }
  reconnectionDelayMax(t) {
    var a;
    return t === void 0
      ? this._reconnectionDelayMax
      : ((this._reconnectionDelayMax = t),
        (a = this.backoff) === null || a === void 0 || a.setMax(t),
        this);
  }
  timeout(t) {
    return arguments.length ? ((this._timeout = t), this) : this._timeout;
  }
  maybeReconnectOnOpen() {
    !this._reconnecting &&
      this._reconnection &&
      this.backoff.attempts === 0 &&
      this.reconnect();
  }
  open(t) {
    if (~this._readyState.indexOf("open")) return this;
    this.engine = new ok(this.uri, this.opts);
    const a = this.engine,
      i = this;
    (this._readyState = "opening"), (this.skipReconnect = !1);
    const o = er(a, "open", function () {
        i.onopen(), t && t();
      }),
      u = (d) => {
        this.cleanup(),
          (this._readyState = "closed"),
          this.emitReserved("error", d),
          t ? t(d) : this.maybeReconnectOnOpen();
      },
      c = er(a, "error", u);
    if (this._timeout !== !1) {
      const d = this._timeout,
        h = this.setTimeoutFn(() => {
          o(), u(new Error("timeout")), a.close();
        }, d);
      this.opts.autoUnref && h.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(h);
        });
    }
    return this.subs.push(o), this.subs.push(c), this;
  }
  connect(t) {
    return this.open(t);
  }
  onopen() {
    this.cleanup(), (this._readyState = "open"), this.emitReserved("open");
    const t = this.engine;
    this.subs.push(
      er(t, "ping", this.onping.bind(this)),
      er(t, "data", this.ondata.bind(this)),
      er(t, "error", this.onerror.bind(this)),
      er(t, "close", this.onclose.bind(this)),
      er(this.decoder, "decoded", this.ondecoded.bind(this))
    );
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(t) {
    try {
      this.decoder.add(t);
    } catch (a) {
      this.onclose("parse error", a);
    }
  }
  ondecoded(t) {
    nf(() => {
      this.emitReserved("packet", t);
    }, this.setTimeoutFn);
  }
  onerror(t) {
    this.emitReserved("error", t);
  }
  socket(t, a) {
    let i = this.nsps[t];
    return (
      i
        ? this._autoConnect && !i.active && i.connect()
        : ((i = new hw(this, t, a)), (this.nsps[t] = i)),
      i
    );
  }
  _destroy(t) {
    const a = Object.keys(this.nsps);
    for (const i of a) if (this.nsps[i].active) return;
    this._close();
  }
  _packet(t) {
    const a = this.encoder.encode(t);
    for (let i = 0; i < a.length; i++) this.engine.write(a[i], t.options);
  }
  cleanup() {
    this.subs.forEach((t) => t()),
      (this.subs.length = 0),
      this.decoder.destroy();
  }
  _close() {
    (this.skipReconnect = !0),
      (this._reconnecting = !1),
      this.onclose("forced close");
  }
  disconnect() {
    return this._close();
  }
  onclose(t, a) {
    var i;
    this.cleanup(),
      (i = this.engine) === null || i === void 0 || i.close(),
      this.backoff.reset(),
      (this._readyState = "closed"),
      this.emitReserved("close", t, a),
      this._reconnection && !this.skipReconnect && this.reconnect();
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const t = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(),
        this.emitReserved("reconnect_failed"),
        (this._reconnecting = !1);
    else {
      const a = this.backoff.duration();
      this._reconnecting = !0;
      const i = this.setTimeoutFn(() => {
        t.skipReconnect ||
          (this.emitReserved("reconnect_attempt", t.backoff.attempts),
          !t.skipReconnect &&
            t.open((o) => {
              o
                ? ((t._reconnecting = !1),
                  t.reconnect(),
                  this.emitReserved("reconnect_error", o))
                : t.onreconnect();
            }));
      }, a);
      this.opts.autoUnref && i.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(i);
        });
    }
  }
  onreconnect() {
    const t = this.backoff.attempts;
    (this._reconnecting = !1),
      this.backoff.reset(),
      this.emitReserved("reconnect", t);
  }
}
const Po = {};
function lc(e, t) {
  typeof e == "object" && ((t = e), (e = void 0)), (t = t || {});
  const a = lk(e, t.path || "/socket.io"),
    i = a.source,
    o = a.id,
    u = a.path,
    c = Po[o] && u in Po[o].nsps,
    d = t.forceNew || t["force new connection"] || t.multiplex === !1 || c;
  let h;
  return (
    d ? (h = new Dm(i, t)) : (Po[o] || (Po[o] = new Dm(i, t)), (h = Po[o])),
    a.query && !t.query && (t.query = a.queryKey),
    h.socket(a.path, t)
  );
}
Object.assign(lc, { Manager: Dm, Socket: hw, io: lc, connect: lc });
const xk = () => {
  const t = JSON.parse(localStorage.getItem("user"))._id,
    a = R.useRef(null),
    i = R.useRef(null),
    o = R.useRef(null),
    [u, c] = R.useState([]),
    [d, h] = R.useState([]),
    [m, g] = R.useState(null),
    [y, b] = R.useState([]),
    [x, w] = R.useState(""),
    [S, A] = R.useState(!0),
    [C, O] = R.useState(null),
    [M, P] = R.useState(""),
    [B, N] = R.useState(!0);
  R.useEffect(
    () => (
      (a.current = lc("http://localhost:8000", { query: { userId: t } })),
      a.current.on("getOnlineUsers", (ae) => {
        h(ae);
      }),
      a.current.on("newMessage", (ae) => {
        m &&
          (ae.senderId === m._id || ae.receiverId === m._id) &&
          b((xe) => [...xe, ae]);
      }),
      () => {
        a.current.disconnect();
      }
    ),
    [t, m]
  ),
    R.useEffect(() => {
      (async () => {
        A(!0);
        try {
          const xe = await je.get(`http://localhost:8000/api/chat/users/${t}`);
          Array.isArray(xe.data) && c(xe.data);
        } catch (xe) {
          console.error("Error fetching users:", xe.message),
            O("Failed to load contacts. Please try again.");
        }
        A(!1);
      })();
    }, [t]),
    R.useEffect(() => {
      (async () => {
        if (m) {
          A(!0);
          try {
            const xe = await je.get(
              `http://localhost:8000/api/chat/${m._id}?myId=${t}`
            );
            b(xe.data), o.current && o.current.focus();
          } catch (xe) {
            console.error("Error fetching messages:", xe.message),
              O("Failed to load messages. Please try again.");
          }
          A(!1);
        }
      })();
    }, [m, t]);
  const q = R.useRef(!1);
  R.useEffect(() => {
    var ae;
    q.current ||
      (ae = i.current) == null ||
      ae.scrollIntoView({ behavior: "smooth" }),
      (q.current = !1);
  }, [y]);
  const X = async () => {
      if (x.trim())
        try {
          q.current = !0;
          const ae = await je.post(
            `http://localhost:8000/api/chat/send/${m._id}`,
            { senderId: t, text: x }
          );
          b((xe) => [...xe, ae.data]), w("");
        } catch (ae) {
          console.error("Error sending message:", ae.message),
            O("Failed to send message. Please try again.");
        }
    },
    Y = (ae) => {
      ae.key === "Enter" && !ae.shiftKey && (ae.preventDefault(), X());
    },
    E = (ae) => d.includes(ae),
    J = u.filter((ae) => ae.fullName.toLowerCase().includes(M.toLowerCase())),
    ce = (ae) =>
      ae
        ? new Date(ae).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })
        : "";
  return K("div", {
    className:
      "h-screen w-full flex flex-col md:flex-row text-white bg-[#111827]",
    children: [
      K("div", {
        className: `md:w-1/3 w-full md:block ${
          B ? "block" : "hidden"
        } bg-[#1f2937] md:border-r border-gray-700 flex flex-col`,
        children: [
          K("div", {
            className: "p-4 border-b border-gray-700",
            children: [
              _("h3", {
                className: "text-2xl font-semibold mb-4 text-blue-400",
                children: "Chats",
              }),
              K("div", {
                className: "relative",
                children: [
                  _("input", {
                    type: "text",
                    placeholder: "Search contacts...",
                    value: M,
                    onChange: (ae) => P(ae.target.value),
                    className:
                      "w-full px-4 py-2 pl-10 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500",
                  }),
                  _("span", {
                    className: "absolute left-3 top-2.5 text-gray-400",
                    children: "🔍",
                  }),
                ],
              }),
            ],
          }),
          _("div", {
            className: "overflow-y-auto flex-1 p-4",
            children:
              S && !J.length
                ? _("div", {
                    className: "flex justify-center items-center h-32",
                    children: _("div", {
                      className:
                        "animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500",
                    }),
                  })
                : J.length > 0
                ? J.map((ae) =>
                    _(
                      "div",
                      {
                        onClick: () => {
                          g(ae), N(!1);
                        },
                        className: `p-3 rounded-lg cursor-pointer mb-2 hover:bg-blue-800 transition-all ${
                          (m == null ? void 0 : m._id) === ae._id
                            ? "bg-blue-700"
                            : "bg-gray-800"
                        }`,
                        children: K("div", {
                          className: "flex items-center",
                          children: [
                            _("div", {
                              className:
                                "w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-lg font-bold mr-3",
                              children: ae.fullName.charAt(0),
                            }),
                            K("div", {
                              className: "flex-1",
                              children: [
                                K("div", {
                                  className:
                                    "flex justify-between items-center",
                                  children: [
                                    _("span", {
                                      className: "font-medium",
                                      children: ae.fullName,
                                    }),
                                    _("span", {
                                      className: `text-sm ${
                                        E(ae._id)
                                          ? "text-green-400"
                                          : "text-gray-500"
                                      }`,
                                      title: E(ae._id) ? "Online" : "Offline",
                                      children: "●",
                                    }),
                                  ],
                                }),
                                _("p", {
                                  className: "text-xs text-gray-400 truncate",
                                  children: E(ae._id) ? "Online" : "Offline",
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      ae._id
                    )
                  )
                : _("p", {
                    className: "text-gray-400 text-center pt-4",
                    children: "No matching contacts found",
                  }),
          }),
        ],
      }),
      K("div", {
        className: "md:w-2/3 w-full flex flex-col overflow-hidden",
        children: [
          K("div", {
            className:
              "p-4 bg-[#1e293b] border-b border-gray-600 flex items-center gap-4 sticky top-0 z-10",
            children: [
              m &&
                _("button", {
                  onClick: () => {
                    N(!0), g(null);
                  },
                  className:
                    "md:hidden bg-gray-700 px-2 py-1 rounded text-white hover:bg-gray-600",
                  children: "← Back",
                }),
              m
                ? K("div", {
                    className: "flex items-center",
                    children: [
                      _("div", {
                        className:
                          "w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-lg font-bold mr-3",
                        children: m.fullName.charAt(0),
                      }),
                      K("div", {
                        children: [
                          _("h3", {
                            className: "text-lg font-semibold text-blue-300",
                            children: m.fullName,
                          }),
                          _("p", {
                            className: "text-xs text-gray-400",
                            children: E(m._id) ? "Online" : "Offline",
                          }),
                        ],
                      }),
                    ],
                  })
                : _("p", {
                    className: "text-gray-400",
                    children: "Select a user to start chatting",
                  }),
            ],
          }),
          K("div", {
            className: "flex-1 p-4 overflow-y-auto space-y-2",
            children: [
              y.map((ae) =>
                K(
                  "div",
                  {
                    className: `p-2 max-w-xs rounded-lg ${
                      ae.senderId === t
                        ? "bg-blue-500 text-white self-end ml-auto"
                        : "bg-gray-700 text-white self-start"
                    }`,
                    children: [
                      _("p", { children: ae.text }),
                      _("p", {
                        className: "text-xs text-gray-300 text-right",
                        children: ce(ae.createdAt),
                      }),
                    ],
                  },
                  ae._id
                )
              ),
              _("div", { ref: i }),
            ],
          }),
          m &&
            K("div", {
              className: "p-4 border-t border-gray-700 bg-[#1f2937]",
              children: [
                _("textarea", {
                  ref: o,
                  rows: 2,
                  placeholder: "Type your message...",
                  value: x,
                  onChange: (ae) => w(ae.target.value),
                  onKeyDown: Y,
                  className:
                    "w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none resize-none",
                }),
                _("button", {
                  onClick: X,
                  className:
                    "mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg",
                  children: "Send",
                }),
              ],
            }),
        ],
      }),
    ],
  });
};
function wk() {
  const e = vA([
    {
      path: "/",
      element: _(Kx, {}),
      children: [
        { path: "/", element: _(BN, {}) },
        { path: "/signup", element: _(DN, {}) },
        { path: "/signin", element: _(UN, {}) },
        { path: "/verify-email/:token", element: _(WN, {}) },
        { path: "/about", element: _(C2, {}) },
        { path: "/books", element: _(JN, {}) },
        { path: "/study-material", element: _(FN, {}) },
        { path: "/select-sem/:department", element: _(GN, {}) },
        { path: "/subjects/:department/:semester", element: _(KN, {}) },
        { path: "/chapter/:department/:semester/:subject", element: _(XN, {}) },
        { path: "/uploadNotes", element: _(IN, {}) },
      ],
    },
    {
      path: "/",
      element: _(x3, {}),
      children: [
        { path: "/dashboard", element: _(zN, {}) },
        { path: "/profile", element: _(E8, {}) },
        { path: "/myBooks", element: _(C8, {}) },
        { path: "/chat", element: _(xk, {}) },
      ],
    },
    { path: "*", element: _(_8, {}) },
  ]);
  return _(DA, { router: e });
}
_E.createRoot(document.getElementById("root")).render(
  _(Fe.StrictMode, { children: _(qA, { children: _(wk, {}) }) })
);
