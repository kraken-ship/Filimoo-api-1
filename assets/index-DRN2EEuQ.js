(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const l of s.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function zf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Fu = { exports: {} },
  Qi = {},
  Du = { exports: {} },
  B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tr = Symbol.for("react.element"),
  If = Symbol.for("react.portal"),
  Ff = Symbol.for("react.fragment"),
  Df = Symbol.for("react.strict_mode"),
  bf = Symbol.for("react.profiler"),
  Bf = Symbol.for("react.provider"),
  Uf = Symbol.for("react.context"),
  Hf = Symbol.for("react.forward_ref"),
  Vf = Symbol.for("react.suspense"),
  $f = Symbol.for("react.memo"),
  Wf = Symbol.for("react.lazy"),
  aa = Symbol.iterator;
function Gf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (aa && e[aa]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var bu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Bu = Object.assign,
  Uu = {};
function On(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Uu),
    (this.updater = n || bu);
}
On.prototype.isReactComponent = {};
On.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
On.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Hu() {}
Hu.prototype = On.prototype;
function io(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Uu),
    (this.updater = n || bu);
}
var so = (io.prototype = new Hu());
so.constructor = io;
Bu(so, On.prototype);
so.isPureReactComponent = !0;
var ua = Array.isArray,
  Vu = Object.prototype.hasOwnProperty,
  lo = { current: null },
  $u = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wu(e, t, n) {
  var r,
    i = {},
    s = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Vu.call(t, r) && !$u.hasOwnProperty(r) && (i[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) i.children = n;
  else if (1 < o) {
    for (var a = Array(o), u = 0; u < o; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r]);
  return {
    $$typeof: Tr,
    type: e,
    key: s,
    ref: l,
    props: i,
    _owner: lo.current,
  };
}
function Qf(e, t) {
  return {
    $$typeof: Tr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function oo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Tr;
}
function qf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ca = /\/+/g;
function vs(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? qf("" + e.key)
    : t.toString(36);
}
function ti(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (s) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Tr:
          case If:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (i = i(l)),
      (e = r === "" ? "." + vs(l, 0) : r),
      ua(i)
        ? ((n = ""),
          e != null && (n = e.replace(ca, "$&/") + "/"),
          ti(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (oo(i) &&
            (i = Qf(
              i,
              n +
                (!i.key || (l && l.key === i.key)
                  ? ""
                  : ("" + i.key).replace(ca, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), ua(e)))
    for (var o = 0; o < e.length; o++) {
      s = e[o];
      var a = r + vs(s, o);
      l += ti(s, t, n, a, i);
    }
  else if (((a = Gf(e)), typeof a == "function"))
    for (e = a.call(e), o = 0; !(s = e.next()).done; )
      (s = s.value), (a = r + vs(s, o++)), (l += ti(s, t, n, a, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function zr(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    ti(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function Kf(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ye = { current: null },
  ni = { transition: null },
  Yf = {
    ReactCurrentDispatcher: ye,
    ReactCurrentBatchConfig: ni,
    ReactCurrentOwner: lo,
  };
function Gu() {
  throw Error("act(...) is not supported in production builds of React.");
}
B.Children = {
  map: zr,
  forEach: function (e, t, n) {
    zr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      zr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      zr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!oo(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
B.Component = On;
B.Fragment = Ff;
B.Profiler = bf;
B.PureComponent = io;
B.StrictMode = Df;
B.Suspense = Vf;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yf;
B.act = Gu;
B.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Bu({}, e.props),
    i = e.key,
    s = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (l = lo.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var o = e.type.defaultProps;
    for (a in t)
      Vu.call(t, a) &&
        !$u.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && o !== void 0 ? o[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    o = Array(a);
    for (var u = 0; u < a; u++) o[u] = arguments[u + 2];
    r.children = o;
  }
  return { $$typeof: Tr, type: e.type, key: i, ref: s, props: r, _owner: l };
};
B.createContext = function (e) {
  return (
    (e = {
      $$typeof: Uf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Bf, _context: e }),
    (e.Consumer = e)
  );
};
B.createElement = Wu;
B.createFactory = function (e) {
  var t = Wu.bind(null, e);
  return (t.type = e), t;
};
B.createRef = function () {
  return { current: null };
};
B.forwardRef = function (e) {
  return { $$typeof: Hf, render: e };
};
B.isValidElement = oo;
B.lazy = function (e) {
  return { $$typeof: Wf, _payload: { _status: -1, _result: e }, _init: Kf };
};
B.memo = function (e, t) {
  return { $$typeof: $f, type: e, compare: t === void 0 ? null : t };
};
B.startTransition = function (e) {
  var t = ni.transition;
  ni.transition = {};
  try {
    e();
  } finally {
    ni.transition = t;
  }
};
B.unstable_act = Gu;
B.useCallback = function (e, t) {
  return ye.current.useCallback(e, t);
};
B.useContext = function (e) {
  return ye.current.useContext(e);
};
B.useDebugValue = function () {};
B.useDeferredValue = function (e) {
  return ye.current.useDeferredValue(e);
};
B.useEffect = function (e, t) {
  return ye.current.useEffect(e, t);
};
B.useId = function () {
  return ye.current.useId();
};
B.useImperativeHandle = function (e, t, n) {
  return ye.current.useImperativeHandle(e, t, n);
};
B.useInsertionEffect = function (e, t) {
  return ye.current.useInsertionEffect(e, t);
};
B.useLayoutEffect = function (e, t) {
  return ye.current.useLayoutEffect(e, t);
};
B.useMemo = function (e, t) {
  return ye.current.useMemo(e, t);
};
B.useReducer = function (e, t, n) {
  return ye.current.useReducer(e, t, n);
};
B.useRef = function (e) {
  return ye.current.useRef(e);
};
B.useState = function (e) {
  return ye.current.useState(e);
};
B.useSyncExternalStore = function (e, t, n) {
  return ye.current.useSyncExternalStore(e, t, n);
};
B.useTransition = function () {
  return ye.current.useTransition();
};
B.version = "18.3.1";
Du.exports = B;
var F = Du.exports;
const re = zf(F);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xf = F,
  Jf = Symbol.for("react.element"),
  Zf = Symbol.for("react.fragment"),
  ep = Object.prototype.hasOwnProperty,
  tp = Xf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  np = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qu(e, t, n) {
  var r,
    i = {},
    s = null,
    l = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) ep.call(t, r) && !np.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Jf,
    type: e,
    key: s,
    ref: l,
    props: i,
    _owner: tp.current,
  };
}
Qi.Fragment = Zf;
Qi.jsx = Qu;
Qi.jsxs = Qu;
Fu.exports = Qi;
var h = Fu.exports,
  el = {},
  qu = { exports: {} },
  _e = {},
  Ku = { exports: {} },
  Yu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, R) {
    var I = N.length;
    N.push(R);
    e: for (; 0 < I; ) {
      var V = (I - 1) >>> 1,
        Y = N[V];
      if (0 < i(Y, R)) (N[V] = R), (N[I] = Y), (I = V);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var R = N[0],
      I = N.pop();
    if (I !== R) {
      N[0] = I;
      e: for (var V = 0, Y = N.length, Mr = Y >>> 1; V < Mr; ) {
        var Dt = 2 * (V + 1) - 1,
          gs = N[Dt],
          bt = Dt + 1,
          Rr = N[bt];
        if (0 > i(gs, I))
          bt < Y && 0 > i(Rr, gs)
            ? ((N[V] = Rr), (N[bt] = I), (V = bt))
            : ((N[V] = gs), (N[Dt] = I), (V = Dt));
        else if (bt < Y && 0 > i(Rr, I)) (N[V] = Rr), (N[bt] = I), (V = bt);
        else break e;
      }
    }
    return R;
  }
  function i(N, R) {
    var I = N.sortIndex - R.sortIndex;
    return I !== 0 ? I : N.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var l = Date,
      o = l.now();
    e.unstable_now = function () {
      return l.now() - o;
    };
  }
  var a = [],
    u = [],
    d = 1,
    p = null,
    g = 3,
    x = !1,
    v = !1,
    y = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    c = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(N) {
    for (var R = n(u); R !== null; ) {
      if (R.callback === null) r(u);
      else if (R.startTime <= N)
        r(u), (R.sortIndex = R.expirationTime), t(a, R);
      else break;
      R = n(u);
    }
  }
  function w(N) {
    if (((y = !1), m(N), !v))
      if (n(a) !== null) (v = !0), fe(S);
      else {
        var R = n(u);
        R !== null && rt(w, R.startTime - N);
      }
  }
  function S(N, R) {
    (v = !1), y && ((y = !1), c(k), (k = -1)), (x = !0);
    var I = g;
    try {
      for (
        m(R), p = n(a);
        p !== null && (!(p.expirationTime > R) || (N && !M()));

      ) {
        var V = p.callback;
        if (typeof V == "function") {
          (p.callback = null), (g = p.priorityLevel);
          var Y = V(p.expirationTime <= R);
          (R = e.unstable_now()),
            typeof Y == "function" ? (p.callback = Y) : p === n(a) && r(a),
            m(R);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var Mr = !0;
      else {
        var Dt = n(u);
        Dt !== null && rt(w, Dt.startTime - R), (Mr = !1);
      }
      return Mr;
    } finally {
      (p = null), (g = I), (x = !1);
    }
  }
  var P = !1,
    j = null,
    k = -1,
    L = 5,
    T = -1;
  function M() {
    return !(e.unstable_now() - T < L);
  }
  function _() {
    if (j !== null) {
      var N = e.unstable_now();
      T = N;
      var R = !0;
      try {
        R = j(!0, N);
      } finally {
        R ? O() : ((P = !1), (j = null));
      }
    } else P = !1;
  }
  var O;
  if (typeof f == "function")
    O = function () {
      f(_);
    };
  else if (typeof MessageChannel < "u") {
    var D = new MessageChannel(),
      W = D.port2;
    (D.port1.onmessage = _),
      (O = function () {
        W.postMessage(null);
      });
  } else
    O = function () {
      C(_, 0);
    };
  function fe(N) {
    (j = N), P || ((P = !0), O());
  }
  function rt(N, R) {
    k = C(function () {
      N(e.unstable_now());
    }, R);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || x || ((v = !0), fe(S));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (L = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return g;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (N) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = g;
      }
      var I = g;
      g = R;
      try {
        return N();
      } finally {
        g = I;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, R) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var I = g;
      g = N;
      try {
        return R();
      } finally {
        g = I;
      }
    }),
    (e.unstable_scheduleCallback = function (N, R, I) {
      var V = e.unstable_now();
      switch (
        (typeof I == "object" && I !== null
          ? ((I = I.delay), (I = typeof I == "number" && 0 < I ? V + I : V))
          : (I = V),
        N)
      ) {
        case 1:
          var Y = -1;
          break;
        case 2:
          Y = 250;
          break;
        case 5:
          Y = 1073741823;
          break;
        case 4:
          Y = 1e4;
          break;
        default:
          Y = 5e3;
      }
      return (
        (Y = I + Y),
        (N = {
          id: d++,
          callback: R,
          priorityLevel: N,
          startTime: I,
          expirationTime: Y,
          sortIndex: -1,
        }),
        I > V
          ? ((N.sortIndex = I),
            t(u, N),
            n(a) === null &&
              N === n(u) &&
              (y ? (c(k), (k = -1)) : (y = !0), rt(w, I - V)))
          : ((N.sortIndex = Y), t(a, N), v || x || ((v = !0), fe(S))),
        N
      );
    }),
    (e.unstable_shouldYield = M),
    (e.unstable_wrapCallback = function (N) {
      var R = g;
      return function () {
        var I = g;
        g = R;
        try {
          return N.apply(this, arguments);
        } finally {
          g = I;
        }
      };
    });
})(Yu);
Ku.exports = Yu;
var rp = Ku.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ip = F,
  Oe = rp;
function A(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Xu = new Set(),
  lr = {};
function tn(e, t) {
  Tn(e, t), Tn(e + "Capture", t);
}
function Tn(e, t) {
  for (lr[e] = t, e = 0; e < t.length; e++) Xu.add(t[e]);
}
var dt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  tl = Object.prototype.hasOwnProperty,
  sp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  da = {},
  fa = {};
function lp(e) {
  return tl.call(fa, e)
    ? !0
    : tl.call(da, e)
    ? !1
    : sp.test(e)
    ? (fa[e] = !0)
    : ((da[e] = !0), !1);
}
function op(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function ap(e, t, n, r) {
  if (t === null || typeof t > "u" || op(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function we(e, t, n, r, i, s, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = l);
}
var de = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    de[e] = new we(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  de[t] = new we(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  de[e] = new we(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  de[e] = new we(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    de[e] = new we(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  de[e] = new we(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  de[e] = new we(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  de[e] = new we(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  de[e] = new we(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ao = /[\-:]([a-z])/g;
function uo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ao, uo);
    de[t] = new we(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ao, uo);
    de[t] = new we(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ao, uo);
  de[t] = new we(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  de[e] = new we(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
de.xlinkHref = new we(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  de[e] = new we(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function co(e, t, n, r) {
  var i = de.hasOwnProperty(t) ? de[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (ap(t, n, i, r) && (n = null),
    r || i === null
      ? lp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ht = ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ir = Symbol.for("react.element"),
  sn = Symbol.for("react.portal"),
  ln = Symbol.for("react.fragment"),
  fo = Symbol.for("react.strict_mode"),
  nl = Symbol.for("react.profiler"),
  Ju = Symbol.for("react.provider"),
  Zu = Symbol.for("react.context"),
  po = Symbol.for("react.forward_ref"),
  rl = Symbol.for("react.suspense"),
  il = Symbol.for("react.suspense_list"),
  mo = Symbol.for("react.memo"),
  xt = Symbol.for("react.lazy"),
  ec = Symbol.for("react.offscreen"),
  pa = Symbol.iterator;
function In(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (pa && e[pa]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Z = Object.assign,
  xs;
function Gn(e) {
  if (xs === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      xs = (t && t[1]) || "";
    }
  return (
    `
` +
    xs +
    e
  );
}
var ys = !1;
function ws(e, t) {
  if (!e || ys) return "";
  ys = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          l = i.length - 1,
          o = s.length - 1;
        1 <= l && 0 <= o && i[l] !== s[o];

      )
        o--;
      for (; 1 <= l && 0 <= o; l--, o--)
        if (i[l] !== s[o]) {
          if (l !== 1 || o !== 1)
            do
              if ((l--, o--, 0 > o || i[l] !== s[o])) {
                var a =
                  `
` + i[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= l && 0 <= o);
          break;
        }
    }
  } finally {
    (ys = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Gn(e) : "";
}
function up(e) {
  switch (e.tag) {
    case 5:
      return Gn(e.type);
    case 16:
      return Gn("Lazy");
    case 13:
      return Gn("Suspense");
    case 19:
      return Gn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ws(e.type, !1)), e;
    case 11:
      return (e = ws(e.type.render, !1)), e;
    case 1:
      return (e = ws(e.type, !0)), e;
    default:
      return "";
  }
}
function sl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ln:
      return "Fragment";
    case sn:
      return "Portal";
    case nl:
      return "Profiler";
    case fo:
      return "StrictMode";
    case rl:
      return "Suspense";
    case il:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Zu:
        return (e.displayName || "Context") + ".Consumer";
      case Ju:
        return (e._context.displayName || "Context") + ".Provider";
      case po:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case mo:
        return (
          (t = e.displayName || null), t !== null ? t : sl(e.type) || "Memo"
        );
      case xt:
        (t = e._payload), (e = e._init);
        try {
          return sl(e(t));
        } catch {}
    }
  return null;
}
function cp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return sl(t);
    case 8:
      return t === fo ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Mt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function tc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function dp(e) {
  var t = tc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (l) {
          (r = "" + l), s.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Fr(e) {
  e._valueTracker || (e._valueTracker = dp(e));
}
function nc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = tc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function gi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ll(e, t) {
  var n = t.checked;
  return Z({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ma(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Mt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function rc(e, t) {
  (t = t.checked), t != null && co(e, "checked", t, !1);
}
function ol(e, t) {
  rc(e, t);
  var n = Mt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? al(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && al(e, t.type, Mt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ha(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function al(e, t, n) {
  (t !== "number" || gi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Qn = Array.isArray;
function vn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Mt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function ul(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(A(91));
  return Z({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ga(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(A(92));
      if (Qn(n)) {
        if (1 < n.length) throw Error(A(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Mt(n) };
}
function ic(e, t) {
  var n = Mt(t.value),
    r = Mt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function va(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function sc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function cl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? sc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Dr,
  lc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Dr = Dr || document.createElement("div"),
          Dr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Dr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function or(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Yn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  fp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Yn).forEach(function (e) {
  fp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Yn[t] = Yn[e]);
  });
});
function oc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Yn.hasOwnProperty(e) && Yn[e])
    ? ("" + t).trim()
    : t + "px";
}
function ac(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = oc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var pp = Z(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function dl(e, t) {
  if (t) {
    if (pp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(A(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(A(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(A(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(A(62));
  }
}
function fl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
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
var pl = null;
function ho(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ml = null,
  xn = null,
  yn = null;
function xa(e) {
  if ((e = Nr(e))) {
    if (typeof ml != "function") throw Error(A(280));
    var t = e.stateNode;
    t && ((t = Ji(t)), ml(e.stateNode, e.type, t));
  }
}
function uc(e) {
  xn ? (yn ? yn.push(e) : (yn = [e])) : (xn = e);
}
function cc() {
  if (xn) {
    var e = xn,
      t = yn;
    if (((yn = xn = null), xa(e), t)) for (e = 0; e < t.length; e++) xa(t[e]);
  }
}
function dc(e, t) {
  return e(t);
}
function fc() {}
var Ss = !1;
function pc(e, t, n) {
  if (Ss) return e(t, n);
  Ss = !0;
  try {
    return dc(e, t, n);
  } finally {
    (Ss = !1), (xn !== null || yn !== null) && (fc(), cc());
  }
}
function ar(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ji(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(A(231, t, typeof n));
  return n;
}
var hl = !1;
if (dt)
  try {
    var Fn = {};
    Object.defineProperty(Fn, "passive", {
      get: function () {
        hl = !0;
      },
    }),
      window.addEventListener("test", Fn, Fn),
      window.removeEventListener("test", Fn, Fn);
  } catch {
    hl = !1;
  }
function mp(e, t, n, r, i, s, l, o, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var Xn = !1,
  vi = null,
  xi = !1,
  gl = null,
  hp = {
    onError: function (e) {
      (Xn = !0), (vi = e);
    },
  };
function gp(e, t, n, r, i, s, l, o, a) {
  (Xn = !1), (vi = null), mp.apply(hp, arguments);
}
function vp(e, t, n, r, i, s, l, o, a) {
  if ((gp.apply(this, arguments), Xn)) {
    if (Xn) {
      var u = vi;
      (Xn = !1), (vi = null);
    } else throw Error(A(198));
    xi || ((xi = !0), (gl = u));
  }
}
function nn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function mc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ya(e) {
  if (nn(e) !== e) throw Error(A(188));
}
function xp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = nn(e)), t === null)) throw Error(A(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return ya(i), e;
        if (s === r) return ya(i), t;
        s = s.sibling;
      }
      throw Error(A(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var l = !1, o = i.child; o; ) {
        if (o === n) {
          (l = !0), (n = i), (r = s);
          break;
        }
        if (o === r) {
          (l = !0), (r = i), (n = s);
          break;
        }
        o = o.sibling;
      }
      if (!l) {
        for (o = s.child; o; ) {
          if (o === n) {
            (l = !0), (n = s), (r = i);
            break;
          }
          if (o === r) {
            (l = !0), (r = s), (n = i);
            break;
          }
          o = o.sibling;
        }
        if (!l) throw Error(A(189));
      }
    }
    if (n.alternate !== r) throw Error(A(190));
  }
  if (n.tag !== 3) throw Error(A(188));
  return n.stateNode.current === n ? e : t;
}
function hc(e) {
  return (e = xp(e)), e !== null ? gc(e) : null;
}
function gc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = gc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var vc = Oe.unstable_scheduleCallback,
  wa = Oe.unstable_cancelCallback,
  yp = Oe.unstable_shouldYield,
  wp = Oe.unstable_requestPaint,
  te = Oe.unstable_now,
  Sp = Oe.unstable_getCurrentPriorityLevel,
  go = Oe.unstable_ImmediatePriority,
  xc = Oe.unstable_UserBlockingPriority,
  yi = Oe.unstable_NormalPriority,
  Ep = Oe.unstable_LowPriority,
  yc = Oe.unstable_IdlePriority,
  qi = null,
  tt = null;
function Cp(e) {
  if (tt && typeof tt.onCommitFiberRoot == "function")
    try {
      tt.onCommitFiberRoot(qi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ge = Math.clz32 ? Math.clz32 : Pp,
  Tp = Math.log,
  kp = Math.LN2;
function Pp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Tp(e) / kp) | 0)) | 0;
}
var br = 64,
  Br = 4194304;
function qn(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function wi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var o = l & ~i;
    o !== 0 ? (r = qn(o)) : ((s &= l), s !== 0 && (r = qn(s)));
  } else (l = n & ~i), l !== 0 ? (r = qn(l)) : s !== 0 && (r = qn(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ge(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Np(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
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
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Ap(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var l = 31 - Ge(s),
      o = 1 << l,
      a = i[l];
    a === -1
      ? (!(o & n) || o & r) && (i[l] = Np(o, t))
      : a <= t && (e.expiredLanes |= o),
      (s &= ~o);
  }
}
function vl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function wc() {
  var e = br;
  return (br <<= 1), !(br & 4194240) && (br = 64), e;
}
function Es(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function kr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ge(t)),
    (e[t] = n);
}
function jp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ge(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function vo(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ge(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var $ = 0;
function Sc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ec,
  xo,
  Cc,
  Tc,
  kc,
  xl = !1,
  Ur = [],
  kt = null,
  Pt = null,
  Nt = null,
  ur = new Map(),
  cr = new Map(),
  wt = [],
  Lp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Sa(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      kt = null;
      break;
    case "dragenter":
    case "dragleave":
      Pt = null;
      break;
    case "mouseover":
    case "mouseout":
      Nt = null;
      break;
    case "pointerover":
    case "pointerout":
      ur.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      cr.delete(t.pointerId);
  }
}
function Dn(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = Nr(t)), t !== null && xo(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Op(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (kt = Dn(kt, e, t, n, r, i)), !0;
    case "dragenter":
      return (Pt = Dn(Pt, e, t, n, r, i)), !0;
    case "mouseover":
      return (Nt = Dn(Nt, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return ur.set(s, Dn(ur.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), cr.set(s, Dn(cr.get(s) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Pc(e) {
  var t = Ht(e.target);
  if (t !== null) {
    var n = nn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = mc(n)), t !== null)) {
          (e.blockedOn = t),
            kc(e.priority, function () {
              Cc(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ri(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = yl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (pl = r), n.target.dispatchEvent(r), (pl = null);
    } else return (t = Nr(n)), t !== null && xo(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ea(e, t, n) {
  ri(e) && n.delete(t);
}
function _p() {
  (xl = !1),
    kt !== null && ri(kt) && (kt = null),
    Pt !== null && ri(Pt) && (Pt = null),
    Nt !== null && ri(Nt) && (Nt = null),
    ur.forEach(Ea),
    cr.forEach(Ea);
}
function bn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    xl ||
      ((xl = !0),
      Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority, _p)));
}
function dr(e) {
  function t(i) {
    return bn(i, e);
  }
  if (0 < Ur.length) {
    bn(Ur[0], e);
    for (var n = 1; n < Ur.length; n++) {
      var r = Ur[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    kt !== null && bn(kt, e),
      Pt !== null && bn(Pt, e),
      Nt !== null && bn(Nt, e),
      ur.forEach(t),
      cr.forEach(t),
      n = 0;
    n < wt.length;
    n++
  )
    (r = wt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < wt.length && ((n = wt[0]), n.blockedOn === null); )
    Pc(n), n.blockedOn === null && wt.shift();
}
var wn = ht.ReactCurrentBatchConfig,
  Si = !0;
function Mp(e, t, n, r) {
  var i = $,
    s = wn.transition;
  wn.transition = null;
  try {
    ($ = 1), yo(e, t, n, r);
  } finally {
    ($ = i), (wn.transition = s);
  }
}
function Rp(e, t, n, r) {
  var i = $,
    s = wn.transition;
  wn.transition = null;
  try {
    ($ = 4), yo(e, t, n, r);
  } finally {
    ($ = i), (wn.transition = s);
  }
}
function yo(e, t, n, r) {
  if (Si) {
    var i = yl(e, t, n, r);
    if (i === null) _s(e, t, r, Ei, n), Sa(e, r);
    else if (Op(i, e, t, n, r)) r.stopPropagation();
    else if ((Sa(e, r), t & 4 && -1 < Lp.indexOf(e))) {
      for (; i !== null; ) {
        var s = Nr(i);
        if (
          (s !== null && Ec(s),
          (s = yl(e, t, n, r)),
          s === null && _s(e, t, r, Ei, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else _s(e, t, r, null, n);
  }
}
var Ei = null;
function yl(e, t, n, r) {
  if (((Ei = null), (e = ho(r)), (e = Ht(e)), e !== null))
    if (((t = nn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = mc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ei = e), null;
}
function Nc(e) {
  switch (e) {
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
      return 1;
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
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Sp()) {
        case go:
          return 1;
        case xc:
          return 4;
        case yi:
        case Ep:
          return 16;
        case yc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Et = null,
  wo = null,
  ii = null;
function Ac() {
  if (ii) return ii;
  var e,
    t = wo,
    n = t.length,
    r,
    i = "value" in Et ? Et.value : Et.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[s - r]; r++);
  return (ii = i.slice(e, 1 < r ? 1 - r : void 0));
}
function si(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Hr() {
  return !0;
}
function Ca() {
  return !1;
}
function Me(e) {
  function t(n, r, i, s, l) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = l),
      (this.currentTarget = null);
    for (var o in e)
      e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(s) : s[o]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Hr
        : Ca),
      (this.isPropagationStopped = Ca),
      this
    );
  }
  return (
    Z(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Hr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Hr));
      },
      persist: function () {},
      isPersistent: Hr,
    }),
    t
  );
}
var _n = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  So = Me(_n),
  Pr = Z({}, _n, { view: 0, detail: 0 }),
  zp = Me(Pr),
  Cs,
  Ts,
  Bn,
  Ki = Z({}, Pr, {
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
    getModifierState: Eo,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Bn &&
            (Bn && e.type === "mousemove"
              ? ((Cs = e.screenX - Bn.screenX), (Ts = e.screenY - Bn.screenY))
              : (Ts = Cs = 0),
            (Bn = e)),
          Cs);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ts;
    },
  }),
  Ta = Me(Ki),
  Ip = Z({}, Ki, { dataTransfer: 0 }),
  Fp = Me(Ip),
  Dp = Z({}, Pr, { relatedTarget: 0 }),
  ks = Me(Dp),
  bp = Z({}, _n, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Bp = Me(bp),
  Up = Z({}, _n, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Hp = Me(Up),
  Vp = Z({}, _n, { data: 0 }),
  ka = Me(Vp),
  $p = {
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
  Wp = {
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
  Gp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Qp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Gp[e]) ? !!t[e] : !1;
}
function Eo() {
  return Qp;
}
var qp = Z({}, Pr, {
    key: function (e) {
      if (e.key) {
        var t = $p[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = si(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Wp[e.keyCode] || "Unidentified"
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
    getModifierState: Eo,
    charCode: function (e) {
      return e.type === "keypress" ? si(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? si(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Kp = Me(qp),
  Yp = Z({}, Ki, {
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
  Pa = Me(Yp),
  Xp = Z({}, Pr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Eo,
  }),
  Jp = Me(Xp),
  Zp = Z({}, _n, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  em = Me(Zp),
  tm = Z({}, Ki, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  nm = Me(tm),
  rm = [9, 13, 27, 32],
  Co = dt && "CompositionEvent" in window,
  Jn = null;
dt && "documentMode" in document && (Jn = document.documentMode);
var im = dt && "TextEvent" in window && !Jn,
  jc = dt && (!Co || (Jn && 8 < Jn && 11 >= Jn)),
  Na = " ",
  Aa = !1;
function Lc(e, t) {
  switch (e) {
    case "keyup":
      return rm.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Oc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var on = !1;
function sm(e, t) {
  switch (e) {
    case "compositionend":
      return Oc(t);
    case "keypress":
      return t.which !== 32 ? null : ((Aa = !0), Na);
    case "textInput":
      return (e = t.data), e === Na && Aa ? null : e;
    default:
      return null;
  }
}
function lm(e, t) {
  if (on)
    return e === "compositionend" || (!Co && Lc(e, t))
      ? ((e = Ac()), (ii = wo = Et = null), (on = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return jc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var om = {
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
function ja(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!om[e.type] : t === "textarea";
}
function _c(e, t, n, r) {
  uc(r),
    (t = Ci(t, "onChange")),
    0 < t.length &&
      ((n = new So("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Zn = null,
  fr = null;
function am(e) {
  Vc(e, 0);
}
function Yi(e) {
  var t = cn(e);
  if (nc(t)) return e;
}
function um(e, t) {
  if (e === "change") return t;
}
var Mc = !1;
if (dt) {
  var Ps;
  if (dt) {
    var Ns = "oninput" in document;
    if (!Ns) {
      var La = document.createElement("div");
      La.setAttribute("oninput", "return;"),
        (Ns = typeof La.oninput == "function");
    }
    Ps = Ns;
  } else Ps = !1;
  Mc = Ps && (!document.documentMode || 9 < document.documentMode);
}
function Oa() {
  Zn && (Zn.detachEvent("onpropertychange", Rc), (fr = Zn = null));
}
function Rc(e) {
  if (e.propertyName === "value" && Yi(fr)) {
    var t = [];
    _c(t, fr, e, ho(e)), pc(am, t);
  }
}
function cm(e, t, n) {
  e === "focusin"
    ? (Oa(), (Zn = t), (fr = n), Zn.attachEvent("onpropertychange", Rc))
    : e === "focusout" && Oa();
}
function dm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Yi(fr);
}
function fm(e, t) {
  if (e === "click") return Yi(t);
}
function pm(e, t) {
  if (e === "input" || e === "change") return Yi(t);
}
function mm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ke = typeof Object.is == "function" ? Object.is : mm;
function pr(e, t) {
  if (Ke(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!tl.call(t, i) || !Ke(e[i], t[i])) return !1;
  }
  return !0;
}
function _a(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ma(e, t) {
  var n = _a(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = _a(n);
  }
}
function zc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? zc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ic() {
  for (var e = window, t = gi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = gi(e.document);
  }
  return t;
}
function To(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function hm(e) {
  var t = Ic(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    zc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && To(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = Ma(n, s));
        var l = Ma(n, r);
        i &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var gm = dt && "documentMode" in document && 11 >= document.documentMode,
  an = null,
  wl = null,
  er = null,
  Sl = !1;
function Ra(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Sl ||
    an == null ||
    an !== gi(r) ||
    ((r = an),
    "selectionStart" in r && To(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (er && pr(er, r)) ||
      ((er = r),
      (r = Ci(wl, "onSelect")),
      0 < r.length &&
        ((t = new So("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = an))));
}
function Vr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var un = {
    animationend: Vr("Animation", "AnimationEnd"),
    animationiteration: Vr("Animation", "AnimationIteration"),
    animationstart: Vr("Animation", "AnimationStart"),
    transitionend: Vr("Transition", "TransitionEnd"),
  },
  As = {},
  Fc = {};
dt &&
  ((Fc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete un.animationend.animation,
    delete un.animationiteration.animation,
    delete un.animationstart.animation),
  "TransitionEvent" in window || delete un.transitionend.transition);
function Xi(e) {
  if (As[e]) return As[e];
  if (!un[e]) return e;
  var t = un[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Fc) return (As[e] = t[n]);
  return e;
}
var Dc = Xi("animationend"),
  bc = Xi("animationiteration"),
  Bc = Xi("animationstart"),
  Uc = Xi("transitionend"),
  Hc = new Map(),
  za =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function zt(e, t) {
  Hc.set(e, t), tn(t, [e]);
}
for (var js = 0; js < za.length; js++) {
  var Ls = za[js],
    vm = Ls.toLowerCase(),
    xm = Ls[0].toUpperCase() + Ls.slice(1);
  zt(vm, "on" + xm);
}
zt(Dc, "onAnimationEnd");
zt(bc, "onAnimationIteration");
zt(Bc, "onAnimationStart");
zt("dblclick", "onDoubleClick");
zt("focusin", "onFocus");
zt("focusout", "onBlur");
zt(Uc, "onTransitionEnd");
Tn("onMouseEnter", ["mouseout", "mouseover"]);
Tn("onMouseLeave", ["mouseout", "mouseover"]);
Tn("onPointerEnter", ["pointerout", "pointerover"]);
Tn("onPointerLeave", ["pointerout", "pointerover"]);
tn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
tn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
tn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
tn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
tn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
tn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Kn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  ym = new Set("cancel close invalid load scroll toggle".split(" ").concat(Kn));
function Ia(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), vp(r, t, void 0, e), (e.currentTarget = null);
}
function Vc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var o = r[l],
            a = o.instance,
            u = o.currentTarget;
          if (((o = o.listener), a !== s && i.isPropagationStopped())) break e;
          Ia(i, o, u), (s = a);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((o = r[l]),
            (a = o.instance),
            (u = o.currentTarget),
            (o = o.listener),
            a !== s && i.isPropagationStopped())
          )
            break e;
          Ia(i, o, u), (s = a);
        }
    }
  }
  if (xi) throw ((e = gl), (xi = !1), (gl = null), e);
}
function Q(e, t) {
  var n = t[Pl];
  n === void 0 && (n = t[Pl] = new Set());
  var r = e + "__bubble";
  n.has(r) || ($c(t, e, 2, !1), n.add(r));
}
function Os(e, t, n) {
  var r = 0;
  t && (r |= 4), $c(n, e, r, t);
}
var $r = "_reactListening" + Math.random().toString(36).slice(2);
function mr(e) {
  if (!e[$r]) {
    (e[$r] = !0),
      Xu.forEach(function (n) {
        n !== "selectionchange" && (ym.has(n) || Os(n, !1, e), Os(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[$r] || ((t[$r] = !0), Os("selectionchange", !1, t));
  }
}
function $c(e, t, n, r) {
  switch (Nc(t)) {
    case 1:
      var i = Mp;
      break;
    case 4:
      i = Rp;
      break;
    default:
      i = yo;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !hl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function _s(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var o = r.stateNode.containerInfo;
        if (o === i || (o.nodeType === 8 && o.parentNode === i)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var a = l.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = l.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            l = l.return;
          }
        for (; o !== null; ) {
          if (((l = Ht(o)), l === null)) return;
          if (((a = l.tag), a === 5 || a === 6)) {
            r = s = l;
            continue e;
          }
          o = o.parentNode;
        }
      }
      r = r.return;
    }
  pc(function () {
    var u = s,
      d = ho(n),
      p = [];
    e: {
      var g = Hc.get(e);
      if (g !== void 0) {
        var x = So,
          v = e;
        switch (e) {
          case "keypress":
            if (si(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = Kp;
            break;
          case "focusin":
            (v = "focus"), (x = ks);
            break;
          case "focusout":
            (v = "blur"), (x = ks);
            break;
          case "beforeblur":
          case "afterblur":
            x = ks;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = Ta;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = Fp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Jp;
            break;
          case Dc:
          case bc:
          case Bc:
            x = Bp;
            break;
          case Uc:
            x = em;
            break;
          case "scroll":
            x = zp;
            break;
          case "wheel":
            x = nm;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = Hp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Pa;
        }
        var y = (t & 4) !== 0,
          C = !y && e === "scroll",
          c = y ? (g !== null ? g + "Capture" : null) : g;
        y = [];
        for (var f = u, m; f !== null; ) {
          m = f;
          var w = m.stateNode;
          if (
            (m.tag === 5 &&
              w !== null &&
              ((m = w),
              c !== null && ((w = ar(f, c)), w != null && y.push(hr(f, w, m)))),
            C)
          )
            break;
          f = f.return;
        }
        0 < y.length &&
          ((g = new x(g, v, null, n, d)), p.push({ event: g, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((g = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          g &&
            n !== pl &&
            (v = n.relatedTarget || n.fromElement) &&
            (Ht(v) || v[ft]))
        )
          break e;
        if (
          (x || g) &&
          ((g =
            d.window === d
              ? d
              : (g = d.ownerDocument)
              ? g.defaultView || g.parentWindow
              : window),
          x
            ? ((v = n.relatedTarget || n.toElement),
              (x = u),
              (v = v ? Ht(v) : null),
              v !== null &&
                ((C = nn(v)), v !== C || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((x = null), (v = u)),
          x !== v)
        ) {
          if (
            ((y = Ta),
            (w = "onMouseLeave"),
            (c = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Pa),
              (w = "onPointerLeave"),
              (c = "onPointerEnter"),
              (f = "pointer")),
            (C = x == null ? g : cn(x)),
            (m = v == null ? g : cn(v)),
            (g = new y(w, f + "leave", x, n, d)),
            (g.target = C),
            (g.relatedTarget = m),
            (w = null),
            Ht(d) === u &&
              ((y = new y(c, f + "enter", v, n, d)),
              (y.target = m),
              (y.relatedTarget = C),
              (w = y)),
            (C = w),
            x && v)
          )
            t: {
              for (y = x, c = v, f = 0, m = y; m; m = rn(m)) f++;
              for (m = 0, w = c; w; w = rn(w)) m++;
              for (; 0 < f - m; ) (y = rn(y)), f--;
              for (; 0 < m - f; ) (c = rn(c)), m--;
              for (; f--; ) {
                if (y === c || (c !== null && y === c.alternate)) break t;
                (y = rn(y)), (c = rn(c));
              }
              y = null;
            }
          else y = null;
          x !== null && Fa(p, g, x, y, !1),
            v !== null && C !== null && Fa(p, C, v, y, !0);
        }
      }
      e: {
        if (
          ((g = u ? cn(u) : window),
          (x = g.nodeName && g.nodeName.toLowerCase()),
          x === "select" || (x === "input" && g.type === "file"))
        )
          var S = um;
        else if (ja(g))
          if (Mc) S = pm;
          else {
            S = dm;
            var P = cm;
          }
        else
          (x = g.nodeName) &&
            x.toLowerCase() === "input" &&
            (g.type === "checkbox" || g.type === "radio") &&
            (S = fm);
        if (S && (S = S(e, u))) {
          _c(p, S, n, d);
          break e;
        }
        P && P(e, g, u),
          e === "focusout" &&
            (P = g._wrapperState) &&
            P.controlled &&
            g.type === "number" &&
            al(g, "number", g.value);
      }
      switch (((P = u ? cn(u) : window), e)) {
        case "focusin":
          (ja(P) || P.contentEditable === "true") &&
            ((an = P), (wl = u), (er = null));
          break;
        case "focusout":
          er = wl = an = null;
          break;
        case "mousedown":
          Sl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Sl = !1), Ra(p, n, d);
          break;
        case "selectionchange":
          if (gm) break;
        case "keydown":
        case "keyup":
          Ra(p, n, d);
      }
      var j;
      if (Co)
        e: {
          switch (e) {
            case "compositionstart":
              var k = "onCompositionStart";
              break e;
            case "compositionend":
              k = "onCompositionEnd";
              break e;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break e;
          }
          k = void 0;
        }
      else
        on
          ? Lc(e, n) && (k = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      k &&
        (jc &&
          n.locale !== "ko" &&
          (on || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && on && (j = Ac())
            : ((Et = d),
              (wo = "value" in Et ? Et.value : Et.textContent),
              (on = !0))),
        (P = Ci(u, k)),
        0 < P.length &&
          ((k = new ka(k, e, null, n, d)),
          p.push({ event: k, listeners: P }),
          j ? (k.data = j) : ((j = Oc(n)), j !== null && (k.data = j)))),
        (j = im ? sm(e, n) : lm(e, n)) &&
          ((u = Ci(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new ka("onBeforeInput", "beforeinput", null, n, d)),
            p.push({ event: d, listeners: u }),
            (d.data = j)));
    }
    Vc(p, t);
  });
}
function hr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ci(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = ar(e, n)),
      s != null && r.unshift(hr(e, s, i)),
      (s = ar(e, t)),
      s != null && r.push(hr(e, s, i))),
      (e = e.return);
  }
  return r;
}
function rn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Fa(e, t, n, r, i) {
  for (var s = t._reactName, l = []; n !== null && n !== r; ) {
    var o = n,
      a = o.alternate,
      u = o.stateNode;
    if (a !== null && a === r) break;
    o.tag === 5 &&
      u !== null &&
      ((o = u),
      i
        ? ((a = ar(n, s)), a != null && l.unshift(hr(n, a, o)))
        : i || ((a = ar(n, s)), a != null && l.push(hr(n, a, o)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var wm = /\r\n?/g,
  Sm = /\u0000|\uFFFD/g;
function Da(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      wm,
      `
`
    )
    .replace(Sm, "");
}
function Wr(e, t, n) {
  if (((t = Da(t)), Da(e) !== t && n)) throw Error(A(425));
}
function Ti() {}
var El = null,
  Cl = null;
function Tl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var kl = typeof setTimeout == "function" ? setTimeout : void 0,
  Em = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ba = typeof Promise == "function" ? Promise : void 0,
  Cm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ba < "u"
      ? function (e) {
          return ba.resolve(null).then(e).catch(Tm);
        }
      : kl;
function Tm(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ms(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), dr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  dr(t);
}
function At(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ba(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Mn = Math.random().toString(36).slice(2),
  Ze = "__reactFiber$" + Mn,
  gr = "__reactProps$" + Mn,
  ft = "__reactContainer$" + Mn,
  Pl = "__reactEvents$" + Mn,
  km = "__reactListeners$" + Mn,
  Pm = "__reactHandles$" + Mn;
function Ht(e) {
  var t = e[Ze];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[ft] || n[Ze])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ba(e); e !== null; ) {
          if ((n = e[Ze])) return n;
          e = Ba(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Nr(e) {
  return (
    (e = e[Ze] || e[ft]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function cn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(A(33));
}
function Ji(e) {
  return e[gr] || null;
}
var Nl = [],
  dn = -1;
function It(e) {
  return { current: e };
}
function q(e) {
  0 > dn || ((e.current = Nl[dn]), (Nl[dn] = null), dn--);
}
function G(e, t) {
  dn++, (Nl[dn] = e.current), (e.current = t);
}
var Rt = {},
  ge = It(Rt),
  Ce = It(!1),
  qt = Rt;
function kn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Rt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Te(e) {
  return (e = e.childContextTypes), e != null;
}
function ki() {
  q(Ce), q(ge);
}
function Ua(e, t, n) {
  if (ge.current !== Rt) throw Error(A(168));
  G(ge, t), G(Ce, n);
}
function Wc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(A(108, cp(e) || "Unknown", i));
  return Z({}, n, r);
}
function Pi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Rt),
    (qt = ge.current),
    G(ge, e),
    G(Ce, Ce.current),
    !0
  );
}
function Ha(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(A(169));
  n
    ? ((e = Wc(e, t, qt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      q(Ce),
      q(ge),
      G(ge, e))
    : q(Ce),
    G(Ce, n);
}
var lt = null,
  Zi = !1,
  Rs = !1;
function Gc(e) {
  lt === null ? (lt = [e]) : lt.push(e);
}
function Nm(e) {
  (Zi = !0), Gc(e);
}
function Ft() {
  if (!Rs && lt !== null) {
    Rs = !0;
    var e = 0,
      t = $;
    try {
      var n = lt;
      for ($ = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (lt = null), (Zi = !1);
    } catch (i) {
      throw (lt !== null && (lt = lt.slice(e + 1)), vc(go, Ft), i);
    } finally {
      ($ = t), (Rs = !1);
    }
  }
  return null;
}
var fn = [],
  pn = 0,
  Ni = null,
  Ai = 0,
  ze = [],
  Ie = 0,
  Kt = null,
  ot = 1,
  at = "";
function Bt(e, t) {
  (fn[pn++] = Ai), (fn[pn++] = Ni), (Ni = e), (Ai = t);
}
function Qc(e, t, n) {
  (ze[Ie++] = ot), (ze[Ie++] = at), (ze[Ie++] = Kt), (Kt = e);
  var r = ot;
  e = at;
  var i = 32 - Ge(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - Ge(t) + i;
  if (30 < s) {
    var l = i - (i % 5);
    (s = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (i -= l),
      (ot = (1 << (32 - Ge(t) + i)) | (n << i) | r),
      (at = s + e);
  } else (ot = (1 << s) | (n << i) | r), (at = e);
}
function ko(e) {
  e.return !== null && (Bt(e, 1), Qc(e, 1, 0));
}
function Po(e) {
  for (; e === Ni; )
    (Ni = fn[--pn]), (fn[pn] = null), (Ai = fn[--pn]), (fn[pn] = null);
  for (; e === Kt; )
    (Kt = ze[--Ie]),
      (ze[Ie] = null),
      (at = ze[--Ie]),
      (ze[Ie] = null),
      (ot = ze[--Ie]),
      (ze[Ie] = null);
}
var Le = null,
  je = null,
  K = !1,
  We = null;
function qc(e, t) {
  var n = Fe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Va(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Le = e), (je = At(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Le = e), (je = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Kt !== null ? { id: ot, overflow: at } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Fe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Le = e),
            (je = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Al(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function jl(e) {
  if (K) {
    var t = je;
    if (t) {
      var n = t;
      if (!Va(e, t)) {
        if (Al(e)) throw Error(A(418));
        t = At(n.nextSibling);
        var r = Le;
        t && Va(e, t)
          ? qc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (K = !1), (Le = e));
      }
    } else {
      if (Al(e)) throw Error(A(418));
      (e.flags = (e.flags & -4097) | 2), (K = !1), (Le = e);
    }
  }
}
function $a(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Le = e;
}
function Gr(e) {
  if (e !== Le) return !1;
  if (!K) return $a(e), (K = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Tl(e.type, e.memoizedProps))),
    t && (t = je))
  ) {
    if (Al(e)) throw (Kc(), Error(A(418)));
    for (; t; ) qc(e, t), (t = At(t.nextSibling));
  }
  if (($a(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(A(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              je = At(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      je = null;
    }
  } else je = Le ? At(e.stateNode.nextSibling) : null;
  return !0;
}
function Kc() {
  for (var e = je; e; ) e = At(e.nextSibling);
}
function Pn() {
  (je = Le = null), (K = !1);
}
function No(e) {
  We === null ? (We = [e]) : We.push(e);
}
var Am = ht.ReactCurrentBatchConfig;
function Un(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(A(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(A(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (l) {
            var o = i.refs;
            l === null ? delete o[s] : (o[s] = l);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(A(284));
    if (!n._owner) throw Error(A(290, e));
  }
  return e;
}
function Qr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      A(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Wa(e) {
  var t = e._init;
  return t(e._payload);
}
function Yc(e) {
  function t(c, f) {
    if (e) {
      var m = c.deletions;
      m === null ? ((c.deletions = [f]), (c.flags |= 16)) : m.push(f);
    }
  }
  function n(c, f) {
    if (!e) return null;
    for (; f !== null; ) t(c, f), (f = f.sibling);
    return null;
  }
  function r(c, f) {
    for (c = new Map(); f !== null; )
      f.key !== null ? c.set(f.key, f) : c.set(f.index, f), (f = f.sibling);
    return c;
  }
  function i(c, f) {
    return (c = _t(c, f)), (c.index = 0), (c.sibling = null), c;
  }
  function s(c, f, m) {
    return (
      (c.index = m),
      e
        ? ((m = c.alternate),
          m !== null
            ? ((m = m.index), m < f ? ((c.flags |= 2), f) : m)
            : ((c.flags |= 2), f))
        : ((c.flags |= 1048576), f)
    );
  }
  function l(c) {
    return e && c.alternate === null && (c.flags |= 2), c;
  }
  function o(c, f, m, w) {
    return f === null || f.tag !== 6
      ? ((f = Us(m, c.mode, w)), (f.return = c), f)
      : ((f = i(f, m)), (f.return = c), f);
  }
  function a(c, f, m, w) {
    var S = m.type;
    return S === ln
      ? d(c, f, m.props.children, w, m.key)
      : f !== null &&
        (f.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === xt &&
            Wa(S) === f.type))
      ? ((w = i(f, m.props)), (w.ref = Un(c, f, m)), (w.return = c), w)
      : ((w = fi(m.type, m.key, m.props, null, c.mode, w)),
        (w.ref = Un(c, f, m)),
        (w.return = c),
        w);
  }
  function u(c, f, m, w) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== m.containerInfo ||
      f.stateNode.implementation !== m.implementation
      ? ((f = Hs(m, c.mode, w)), (f.return = c), f)
      : ((f = i(f, m.children || [])), (f.return = c), f);
  }
  function d(c, f, m, w, S) {
    return f === null || f.tag !== 7
      ? ((f = Gt(m, c.mode, w, S)), (f.return = c), f)
      : ((f = i(f, m)), (f.return = c), f);
  }
  function p(c, f, m) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = Us("" + f, c.mode, m)), (f.return = c), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Ir:
          return (
            (m = fi(f.type, f.key, f.props, null, c.mode, m)),
            (m.ref = Un(c, null, f)),
            (m.return = c),
            m
          );
        case sn:
          return (f = Hs(f, c.mode, m)), (f.return = c), f;
        case xt:
          var w = f._init;
          return p(c, w(f._payload), m);
      }
      if (Qn(f) || In(f))
        return (f = Gt(f, c.mode, m, null)), (f.return = c), f;
      Qr(c, f);
    }
    return null;
  }
  function g(c, f, m, w) {
    var S = f !== null ? f.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return S !== null ? null : o(c, f, "" + m, w);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Ir:
          return m.key === S ? a(c, f, m, w) : null;
        case sn:
          return m.key === S ? u(c, f, m, w) : null;
        case xt:
          return (S = m._init), g(c, f, S(m._payload), w);
      }
      if (Qn(m) || In(m)) return S !== null ? null : d(c, f, m, w, null);
      Qr(c, m);
    }
    return null;
  }
  function x(c, f, m, w, S) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (c = c.get(m) || null), o(f, c, "" + w, S);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Ir:
          return (c = c.get(w.key === null ? m : w.key) || null), a(f, c, w, S);
        case sn:
          return (c = c.get(w.key === null ? m : w.key) || null), u(f, c, w, S);
        case xt:
          var P = w._init;
          return x(c, f, m, P(w._payload), S);
      }
      if (Qn(w) || In(w)) return (c = c.get(m) || null), d(f, c, w, S, null);
      Qr(f, w);
    }
    return null;
  }
  function v(c, f, m, w) {
    for (
      var S = null, P = null, j = f, k = (f = 0), L = null;
      j !== null && k < m.length;
      k++
    ) {
      j.index > k ? ((L = j), (j = null)) : (L = j.sibling);
      var T = g(c, j, m[k], w);
      if (T === null) {
        j === null && (j = L);
        break;
      }
      e && j && T.alternate === null && t(c, j),
        (f = s(T, f, k)),
        P === null ? (S = T) : (P.sibling = T),
        (P = T),
        (j = L);
    }
    if (k === m.length) return n(c, j), K && Bt(c, k), S;
    if (j === null) {
      for (; k < m.length; k++)
        (j = p(c, m[k], w)),
          j !== null &&
            ((f = s(j, f, k)), P === null ? (S = j) : (P.sibling = j), (P = j));
      return K && Bt(c, k), S;
    }
    for (j = r(c, j); k < m.length; k++)
      (L = x(j, c, k, m[k], w)),
        L !== null &&
          (e && L.alternate !== null && j.delete(L.key === null ? k : L.key),
          (f = s(L, f, k)),
          P === null ? (S = L) : (P.sibling = L),
          (P = L));
    return (
      e &&
        j.forEach(function (M) {
          return t(c, M);
        }),
      K && Bt(c, k),
      S
    );
  }
  function y(c, f, m, w) {
    var S = In(m);
    if (typeof S != "function") throw Error(A(150));
    if (((m = S.call(m)), m == null)) throw Error(A(151));
    for (
      var P = (S = null), j = f, k = (f = 0), L = null, T = m.next();
      j !== null && !T.done;
      k++, T = m.next()
    ) {
      j.index > k ? ((L = j), (j = null)) : (L = j.sibling);
      var M = g(c, j, T.value, w);
      if (M === null) {
        j === null && (j = L);
        break;
      }
      e && j && M.alternate === null && t(c, j),
        (f = s(M, f, k)),
        P === null ? (S = M) : (P.sibling = M),
        (P = M),
        (j = L);
    }
    if (T.done) return n(c, j), K && Bt(c, k), S;
    if (j === null) {
      for (; !T.done; k++, T = m.next())
        (T = p(c, T.value, w)),
          T !== null &&
            ((f = s(T, f, k)), P === null ? (S = T) : (P.sibling = T), (P = T));
      return K && Bt(c, k), S;
    }
    for (j = r(c, j); !T.done; k++, T = m.next())
      (T = x(j, c, k, T.value, w)),
        T !== null &&
          (e && T.alternate !== null && j.delete(T.key === null ? k : T.key),
          (f = s(T, f, k)),
          P === null ? (S = T) : (P.sibling = T),
          (P = T));
    return (
      e &&
        j.forEach(function (_) {
          return t(c, _);
        }),
      K && Bt(c, k),
      S
    );
  }
  function C(c, f, m, w) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === ln &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Ir:
          e: {
            for (var S = m.key, P = f; P !== null; ) {
              if (P.key === S) {
                if (((S = m.type), S === ln)) {
                  if (P.tag === 7) {
                    n(c, P.sibling),
                      (f = i(P, m.props.children)),
                      (f.return = c),
                      (c = f);
                    break e;
                  }
                } else if (
                  P.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === xt &&
                    Wa(S) === P.type)
                ) {
                  n(c, P.sibling),
                    (f = i(P, m.props)),
                    (f.ref = Un(c, P, m)),
                    (f.return = c),
                    (c = f);
                  break e;
                }
                n(c, P);
                break;
              } else t(c, P);
              P = P.sibling;
            }
            m.type === ln
              ? ((f = Gt(m.props.children, c.mode, w, m.key)),
                (f.return = c),
                (c = f))
              : ((w = fi(m.type, m.key, m.props, null, c.mode, w)),
                (w.ref = Un(c, f, m)),
                (w.return = c),
                (c = w));
          }
          return l(c);
        case sn:
          e: {
            for (P = m.key; f !== null; ) {
              if (f.key === P)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === m.containerInfo &&
                  f.stateNode.implementation === m.implementation
                ) {
                  n(c, f.sibling),
                    (f = i(f, m.children || [])),
                    (f.return = c),
                    (c = f);
                  break e;
                } else {
                  n(c, f);
                  break;
                }
              else t(c, f);
              f = f.sibling;
            }
            (f = Hs(m, c.mode, w)), (f.return = c), (c = f);
          }
          return l(c);
        case xt:
          return (P = m._init), C(c, f, P(m._payload), w);
      }
      if (Qn(m)) return v(c, f, m, w);
      if (In(m)) return y(c, f, m, w);
      Qr(c, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        f !== null && f.tag === 6
          ? (n(c, f.sibling), (f = i(f, m)), (f.return = c), (c = f))
          : (n(c, f), (f = Us(m, c.mode, w)), (f.return = c), (c = f)),
        l(c))
      : n(c, f);
  }
  return C;
}
var Nn = Yc(!0),
  Xc = Yc(!1),
  ji = It(null),
  Li = null,
  mn = null,
  Ao = null;
function jo() {
  Ao = mn = Li = null;
}
function Lo(e) {
  var t = ji.current;
  q(ji), (e._currentValue = t);
}
function Ll(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Sn(e, t) {
  (Li = e),
    (Ao = mn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ee = !0), (e.firstContext = null));
}
function Be(e) {
  var t = e._currentValue;
  if (Ao !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), mn === null)) {
      if (Li === null) throw Error(A(308));
      (mn = e), (Li.dependencies = { lanes: 0, firstContext: e });
    } else mn = mn.next = e;
  return t;
}
var Vt = null;
function Oo(e) {
  Vt === null ? (Vt = [e]) : Vt.push(e);
}
function Jc(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Oo(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    pt(e, r)
  );
}
function pt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var yt = !1;
function _o(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Zc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function ut(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function jt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), H & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      pt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Oo(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    pt(e, n)
  );
}
function li(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), vo(e, n);
  }
}
function Ga(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = l) : (s = s.next = l), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Oi(e, t, n, r) {
  var i = e.updateQueue;
  yt = !1;
  var s = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    o = i.shared.pending;
  if (o !== null) {
    i.shared.pending = null;
    var a = o,
      u = a.next;
    (a.next = null), l === null ? (s = u) : (l.next = u), (l = a);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (o = d.lastBaseUpdate),
      o !== l &&
        (o === null ? (d.firstBaseUpdate = u) : (o.next = u),
        (d.lastBaseUpdate = a)));
  }
  if (s !== null) {
    var p = i.baseState;
    (l = 0), (d = u = a = null), (o = s);
    do {
      var g = o.lane,
        x = o.eventTime;
      if ((r & g) === g) {
        d !== null &&
          (d = d.next =
            {
              eventTime: x,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var v = e,
            y = o;
          switch (((g = t), (x = n), y.tag)) {
            case 1:
              if (((v = y.payload), typeof v == "function")) {
                p = v.call(x, p, g);
                break e;
              }
              p = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = y.payload),
                (g = typeof v == "function" ? v.call(x, p, g) : v),
                g == null)
              )
                break e;
              p = Z({}, p, g);
              break e;
            case 2:
              yt = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (g = i.effects),
          g === null ? (i.effects = [o]) : g.push(o));
      } else
        (x = {
          eventTime: x,
          lane: g,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          d === null ? ((u = d = x), (a = p)) : (d = d.next = x),
          (l |= g);
      if (((o = o.next), o === null)) {
        if (((o = i.shared.pending), o === null)) break;
        (g = o),
          (o = g.next),
          (g.next = null),
          (i.lastBaseUpdate = g),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (a = p),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = d),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (l |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (Xt |= l), (e.lanes = l), (e.memoizedState = p);
  }
}
function Qa(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(A(191, i));
        i.call(r);
      }
    }
}
var Ar = {},
  nt = It(Ar),
  vr = It(Ar),
  xr = It(Ar);
function $t(e) {
  if (e === Ar) throw Error(A(174));
  return e;
}
function Mo(e, t) {
  switch ((G(xr, t), G(vr, e), G(nt, Ar), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : cl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = cl(t, e));
  }
  q(nt), G(nt, t);
}
function An() {
  q(nt), q(vr), q(xr);
}
function ed(e) {
  $t(xr.current);
  var t = $t(nt.current),
    n = cl(t, e.type);
  t !== n && (G(vr, e), G(nt, n));
}
function Ro(e) {
  vr.current === e && (q(nt), q(vr));
}
var X = It(0);
function _i(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var zs = [];
function zo() {
  for (var e = 0; e < zs.length; e++)
    zs[e]._workInProgressVersionPrimary = null;
  zs.length = 0;
}
var oi = ht.ReactCurrentDispatcher,
  Is = ht.ReactCurrentBatchConfig,
  Yt = 0,
  J = null,
  ie = null,
  oe = null,
  Mi = !1,
  tr = !1,
  yr = 0,
  jm = 0;
function pe() {
  throw Error(A(321));
}
function Io(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ke(e[n], t[n])) return !1;
  return !0;
}
function Fo(e, t, n, r, i, s) {
  if (
    ((Yt = s),
    (J = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (oi.current = e === null || e.memoizedState === null ? Mm : Rm),
    (e = n(r, i)),
    tr)
  ) {
    s = 0;
    do {
      if (((tr = !1), (yr = 0), 25 <= s)) throw Error(A(301));
      (s += 1),
        (oe = ie = null),
        (t.updateQueue = null),
        (oi.current = zm),
        (e = n(r, i));
    } while (tr);
  }
  if (
    ((oi.current = Ri),
    (t = ie !== null && ie.next !== null),
    (Yt = 0),
    (oe = ie = J = null),
    (Mi = !1),
    t)
  )
    throw Error(A(300));
  return e;
}
function Do() {
  var e = yr !== 0;
  return (yr = 0), e;
}
function Je() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return oe === null ? (J.memoizedState = oe = e) : (oe = oe.next = e), oe;
}
function Ue() {
  if (ie === null) {
    var e = J.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ie.next;
  var t = oe === null ? J.memoizedState : oe.next;
  if (t !== null) (oe = t), (ie = e);
  else {
    if (e === null) throw Error(A(310));
    (ie = e),
      (e = {
        memoizedState: ie.memoizedState,
        baseState: ie.baseState,
        baseQueue: ie.baseQueue,
        queue: ie.queue,
        next: null,
      }),
      oe === null ? (J.memoizedState = oe = e) : (oe = oe.next = e);
  }
  return oe;
}
function wr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Fs(e) {
  var t = Ue(),
    n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = ie,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var l = i.next;
      (i.next = s.next), (s.next = l);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var o = (l = null),
      a = null,
      u = s;
    do {
      var d = u.lane;
      if ((Yt & d) === d)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var p = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((o = a = p), (l = r)) : (a = a.next = p),
          (J.lanes |= d),
          (Xt |= d);
      }
      u = u.next;
    } while (u !== null && u !== s);
    a === null ? (l = r) : (a.next = o),
      Ke(r, t.memoizedState) || (Ee = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (J.lanes |= s), (Xt |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ds(e) {
  var t = Ue(),
    n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = (i = i.next);
    do (s = e(s, l.action)), (l = l.next);
    while (l !== i);
    Ke(s, t.memoizedState) || (Ee = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function td() {}
function nd(e, t) {
  var n = J,
    r = Ue(),
    i = t(),
    s = !Ke(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Ee = !0)),
    (r = r.queue),
    bo(sd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (oe !== null && oe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Sr(9, id.bind(null, n, r, i, t), void 0, null),
      ae === null)
    )
      throw Error(A(349));
    Yt & 30 || rd(n, t, i);
  }
  return i;
}
function rd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = J.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (J.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function id(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ld(t) && od(e);
}
function sd(e, t, n) {
  return n(function () {
    ld(t) && od(e);
  });
}
function ld(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ke(e, n);
  } catch {
    return !0;
  }
}
function od(e) {
  var t = pt(e, 1);
  t !== null && Qe(t, e, 1, -1);
}
function qa(e) {
  var t = Je();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: wr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = _m.bind(null, J, e)),
    [t.memoizedState, e]
  );
}
function Sr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = J.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (J.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function ad() {
  return Ue().memoizedState;
}
function ai(e, t, n, r) {
  var i = Je();
  (J.flags |= e),
    (i.memoizedState = Sr(1 | t, n, void 0, r === void 0 ? null : r));
}
function es(e, t, n, r) {
  var i = Ue();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (ie !== null) {
    var l = ie.memoizedState;
    if (((s = l.destroy), r !== null && Io(r, l.deps))) {
      i.memoizedState = Sr(t, n, s, r);
      return;
    }
  }
  (J.flags |= e), (i.memoizedState = Sr(1 | t, n, s, r));
}
function Ka(e, t) {
  return ai(8390656, 8, e, t);
}
function bo(e, t) {
  return es(2048, 8, e, t);
}
function ud(e, t) {
  return es(4, 2, e, t);
}
function cd(e, t) {
  return es(4, 4, e, t);
}
function dd(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function fd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), es(4, 4, dd.bind(null, t, e), n)
  );
}
function Bo() {}
function pd(e, t) {
  var n = Ue();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Io(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function md(e, t) {
  var n = Ue();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Io(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function hd(e, t, n) {
  return Yt & 21
    ? (Ke(n, t) || ((n = wc()), (J.lanes |= n), (Xt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ee = !0)), (e.memoizedState = n));
}
function Lm(e, t) {
  var n = $;
  ($ = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Is.transition;
  Is.transition = {};
  try {
    e(!1), t();
  } finally {
    ($ = n), (Is.transition = r);
  }
}
function gd() {
  return Ue().memoizedState;
}
function Om(e, t, n) {
  var r = Ot(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    vd(e))
  )
    xd(t, n);
  else if (((n = Jc(e, t, n, r)), n !== null)) {
    var i = xe();
    Qe(n, e, r, i), yd(n, t, r);
  }
}
function _m(e, t, n) {
  var r = Ot(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (vd(e)) xd(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var l = t.lastRenderedState,
          o = s(l, n);
        if (((i.hasEagerState = !0), (i.eagerState = o), Ke(o, l))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), Oo(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Jc(e, t, i, r)),
      n !== null && ((i = xe()), Qe(n, e, r, i), yd(n, t, r));
  }
}
function vd(e) {
  var t = e.alternate;
  return e === J || (t !== null && t === J);
}
function xd(e, t) {
  tr = Mi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function yd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), vo(e, n);
  }
}
var Ri = {
    readContext: Be,
    useCallback: pe,
    useContext: pe,
    useEffect: pe,
    useImperativeHandle: pe,
    useInsertionEffect: pe,
    useLayoutEffect: pe,
    useMemo: pe,
    useReducer: pe,
    useRef: pe,
    useState: pe,
    useDebugValue: pe,
    useDeferredValue: pe,
    useTransition: pe,
    useMutableSource: pe,
    useSyncExternalStore: pe,
    useId: pe,
    unstable_isNewReconciler: !1,
  },
  Mm = {
    readContext: Be,
    useCallback: function (e, t) {
      return (Je().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Be,
    useEffect: Ka,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ai(4194308, 4, dd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ai(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ai(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Je();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Je();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Om.bind(null, J, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Je();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: qa,
    useDebugValue: Bo,
    useDeferredValue: function (e) {
      return (Je().memoizedState = e);
    },
    useTransition: function () {
      var e = qa(!1),
        t = e[0];
      return (e = Lm.bind(null, e[1])), (Je().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = J,
        i = Je();
      if (K) {
        if (n === void 0) throw Error(A(407));
        n = n();
      } else {
        if (((n = t()), ae === null)) throw Error(A(349));
        Yt & 30 || rd(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        Ka(sd.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Sr(9, id.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Je(),
        t = ae.identifierPrefix;
      if (K) {
        var n = at,
          r = ot;
        (n = (r & ~(1 << (32 - Ge(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = yr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = jm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Rm = {
    readContext: Be,
    useCallback: pd,
    useContext: Be,
    useEffect: bo,
    useImperativeHandle: fd,
    useInsertionEffect: ud,
    useLayoutEffect: cd,
    useMemo: md,
    useReducer: Fs,
    useRef: ad,
    useState: function () {
      return Fs(wr);
    },
    useDebugValue: Bo,
    useDeferredValue: function (e) {
      var t = Ue();
      return hd(t, ie.memoizedState, e);
    },
    useTransition: function () {
      var e = Fs(wr)[0],
        t = Ue().memoizedState;
      return [e, t];
    },
    useMutableSource: td,
    useSyncExternalStore: nd,
    useId: gd,
    unstable_isNewReconciler: !1,
  },
  zm = {
    readContext: Be,
    useCallback: pd,
    useContext: Be,
    useEffect: bo,
    useImperativeHandle: fd,
    useInsertionEffect: ud,
    useLayoutEffect: cd,
    useMemo: md,
    useReducer: Ds,
    useRef: ad,
    useState: function () {
      return Ds(wr);
    },
    useDebugValue: Bo,
    useDeferredValue: function (e) {
      var t = Ue();
      return ie === null ? (t.memoizedState = e) : hd(t, ie.memoizedState, e);
    },
    useTransition: function () {
      var e = Ds(wr)[0],
        t = Ue().memoizedState;
      return [e, t];
    },
    useMutableSource: td,
    useSyncExternalStore: nd,
    useId: gd,
    unstable_isNewReconciler: !1,
  };
function Ve(e, t) {
  if (e && e.defaultProps) {
    (t = Z({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ol(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Z({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ts = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? nn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = xe(),
      i = Ot(e),
      s = ut(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = jt(e, s, i)),
      t !== null && (Qe(t, e, i, r), li(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = xe(),
      i = Ot(e),
      s = ut(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = jt(e, s, i)),
      t !== null && (Qe(t, e, i, r), li(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = xe(),
      r = Ot(e),
      i = ut(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = jt(e, i, r)),
      t !== null && (Qe(t, e, r, n), li(t, e, r));
  },
};
function Ya(e, t, n, r, i, s, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !pr(n, r) || !pr(i, s)
      : !0
  );
}
function wd(e, t, n) {
  var r = !1,
    i = Rt,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Be(s))
      : ((i = Te(t) ? qt : ge.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? kn(e, i) : Rt)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ts),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function Xa(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ts.enqueueReplaceState(t, t.state, null);
}
function _l(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), _o(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = Be(s))
    : ((s = Te(t) ? qt : ge.current), (i.context = kn(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Ol(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && ts.enqueueReplaceState(i, i.state, null),
      Oi(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function jn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += up(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function bs(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ml(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Im = typeof WeakMap == "function" ? WeakMap : Map;
function Sd(e, t, n) {
  (n = ut(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ii || ((Ii = !0), (Vl = r)), Ml(e, t);
    }),
    n
  );
}
function Ed(e, t, n) {
  (n = ut(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Ml(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        Ml(e, t),
          typeof r != "function" &&
            (Lt === null ? (Lt = new Set([this])) : Lt.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function Ja(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Im();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Ym.bind(null, e, t, n)), t.then(e, e));
}
function Za(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function eu(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = ut(-1, 1)), (t.tag = 2), jt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Fm = ht.ReactCurrentOwner,
  Ee = !1;
function ve(e, t, n, r) {
  t.child = e === null ? Xc(t, null, n, r) : Nn(t, e.child, n, r);
}
function tu(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    Sn(t, i),
    (r = Fo(e, t, n, r, s, i)),
    (n = Do()),
    e !== null && !Ee
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        mt(e, t, i))
      : (K && n && ko(t), (t.flags |= 1), ve(e, t, r, i), t.child)
  );
}
function nu(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !qo(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), Cd(e, t, s, r, i))
      : ((e = fi(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var l = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : pr), n(l, r) && e.ref === t.ref)
    )
      return mt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = _t(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Cd(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (pr(s, r) && e.ref === t.ref)
      if (((Ee = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ee = !0);
      else return (t.lanes = e.lanes), mt(e, t, i);
  }
  return Rl(e, t, n, r, i);
}
function Td(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        G(gn, Ne),
        (Ne |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          G(gn, Ne),
          (Ne |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        G(gn, Ne),
        (Ne |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      G(gn, Ne),
      (Ne |= r);
  return ve(e, t, i, n), t.child;
}
function kd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Rl(e, t, n, r, i) {
  var s = Te(n) ? qt : ge.current;
  return (
    (s = kn(t, s)),
    Sn(t, i),
    (n = Fo(e, t, n, r, s, i)),
    (r = Do()),
    e !== null && !Ee
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        mt(e, t, i))
      : (K && r && ko(t), (t.flags |= 1), ve(e, t, n, i), t.child)
  );
}
function ru(e, t, n, r, i) {
  if (Te(n)) {
    var s = !0;
    Pi(t);
  } else s = !1;
  if ((Sn(t, i), t.stateNode === null))
    ui(e, t), wd(t, n, r), _l(t, n, r, i), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      o = t.memoizedProps;
    l.props = o;
    var a = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Be(u))
      : ((u = Te(n) ? qt : ge.current), (u = kn(t, u)));
    var d = n.getDerivedStateFromProps,
      p =
        typeof d == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((o !== r || a !== u) && Xa(t, l, r, u)),
      (yt = !1);
    var g = t.memoizedState;
    (l.state = g),
      Oi(t, r, l, i),
      (a = t.memoizedState),
      o !== r || g !== a || Ce.current || yt
        ? (typeof d == "function" && (Ol(t, n, d, r), (a = t.memoizedState)),
          (o = yt || Ya(t, n, o, r, g, a, u))
            ? (p ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (l.props = r),
          (l.state = a),
          (l.context = u),
          (r = o))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      Zc(e, t),
      (o = t.memoizedProps),
      (u = t.type === t.elementType ? o : Ve(t.type, o)),
      (l.props = u),
      (p = t.pendingProps),
      (g = l.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Be(a))
        : ((a = Te(n) ? qt : ge.current), (a = kn(t, a)));
    var x = n.getDerivedStateFromProps;
    (d =
      typeof x == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((o !== p || g !== a) && Xa(t, l, r, a)),
      (yt = !1),
      (g = t.memoizedState),
      (l.state = g),
      Oi(t, r, l, i);
    var v = t.memoizedState;
    o !== p || g !== v || Ce.current || yt
      ? (typeof x == "function" && (Ol(t, n, x, r), (v = t.memoizedState)),
        (u = yt || Ya(t, n, u, r, g, v, a) || !1)
          ? (d ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, v, a),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, v, a)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (o === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (o === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (l.props = r),
        (l.state = v),
        (l.context = a),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (o === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (o === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return zl(e, t, n, r, s, i);
}
function zl(e, t, n, r, i, s) {
  kd(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return i && Ha(t, n, !1), mt(e, t, s);
  (r = t.stateNode), (Fm.current = t);
  var o =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Nn(t, e.child, null, s)), (t.child = Nn(t, null, o, s)))
      : ve(e, t, o, s),
    (t.memoizedState = r.state),
    i && Ha(t, n, !0),
    t.child
  );
}
function Pd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ua(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ua(e, t.context, !1),
    Mo(e, t.containerInfo);
}
function iu(e, t, n, r, i) {
  return Pn(), No(i), (t.flags |= 256), ve(e, t, n, r), t.child;
}
var Il = { dehydrated: null, treeContext: null, retryLane: 0 };
function Fl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Nd(e, t, n) {
  var r = t.pendingProps,
    i = X.current,
    s = !1,
    l = (t.flags & 128) !== 0,
    o;
  if (
    ((o = l) ||
      (o = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    o
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    G(X, i & 1),
    e === null)
  )
    return (
      jl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = l))
                : (s = is(l, r, 0, null)),
              (e = Gt(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Fl(n)),
              (t.memoizedState = Il),
              e)
            : Uo(t, l))
    );
  if (((i = e.memoizedState), i !== null && ((o = i.dehydrated), o !== null)))
    return Dm(e, t, l, r, o, i, n);
  if (s) {
    (s = r.fallback), (l = t.mode), (i = e.child), (o = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = _t(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      o !== null ? (s = _t(o, s)) : ((s = Gt(s, l, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? Fl(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (s.memoizedState = l),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Il),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = _t(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Uo(e, t) {
  return (
    (t = is({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function qr(e, t, n, r) {
  return (
    r !== null && No(r),
    Nn(t, e.child, null, n),
    (e = Uo(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Dm(e, t, n, r, i, s, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = bs(Error(A(422)))), qr(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = is({ mode: "visible", children: r.children }, i, 0, null)),
        (s = Gt(s, i, l, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && Nn(t, e.child, null, l),
        (t.child.memoizedState = Fl(l)),
        (t.memoizedState = Il),
        s);
  if (!(t.mode & 1)) return qr(e, t, l, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var o = r.dgst;
    return (r = o), (s = Error(A(419))), (r = bs(s, r, void 0)), qr(e, t, l, r);
  }
  if (((o = (l & e.childLanes) !== 0), Ee || o)) {
    if (((r = ae), r !== null)) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | l) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), pt(e, i), Qe(r, e, i, -1));
    }
    return Qo(), (r = bs(Error(A(421)))), qr(e, t, l, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Xm.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (je = At(i.nextSibling)),
      (Le = t),
      (K = !0),
      (We = null),
      e !== null &&
        ((ze[Ie++] = ot),
        (ze[Ie++] = at),
        (ze[Ie++] = Kt),
        (ot = e.id),
        (at = e.overflow),
        (Kt = t)),
      (t = Uo(t, r.children)),
      (t.flags |= 4096),
      t);
}
function su(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ll(e.return, t, n);
}
function Bs(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function Ad(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((ve(e, t, r.children, n), (r = X.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && su(e, n, t);
        else if (e.tag === 19) su(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((G(X, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && _i(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Bs(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && _i(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Bs(t, !0, n, null, s);
        break;
      case "together":
        Bs(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ui(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function mt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Xt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(A(153));
  if (t.child !== null) {
    for (
      e = t.child, n = _t(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = _t(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function bm(e, t, n) {
  switch (t.tag) {
    case 3:
      Pd(t), Pn();
      break;
    case 5:
      ed(t);
      break;
    case 1:
      Te(t.type) && Pi(t);
      break;
    case 4:
      Mo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      G(ji, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (G(X, X.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Nd(e, t, n)
          : (G(X, X.current & 1),
            (e = mt(e, t, n)),
            e !== null ? e.sibling : null);
      G(X, X.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ad(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        G(X, X.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Td(e, t, n);
  }
  return mt(e, t, n);
}
var jd, Dl, Ld, Od;
jd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Dl = function () {};
Ld = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), $t(nt.current);
    var s = null;
    switch (n) {
      case "input":
        (i = ll(e, i)), (r = ll(e, r)), (s = []);
        break;
      case "select":
        (i = Z({}, i, { value: void 0 })),
          (r = Z({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = ul(e, i)), (r = ul(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ti);
    }
    dl(n, r);
    var l;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var o = i[u];
          for (l in o) o.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (lr.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((o = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== o && (a != null || o != null))
      )
        if (u === "style")
          if (o) {
            for (l in o)
              !o.hasOwnProperty(l) ||
                (a && a.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in a)
              a.hasOwnProperty(l) &&
                o[l] !== a[l] &&
                (n || (n = {}), (n[l] = a[l]));
          } else n || (s || (s = []), s.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (o = o ? o.__html : void 0),
              a != null && o !== a && (s = s || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (s = s || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (lr.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && Q("scroll", e),
                  s || o === a || (s = []))
                : (s = s || []).push(u, a));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Od = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Hn(e, t) {
  if (!K)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function me(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Bm(e, t, n) {
  var r = t.pendingProps;
  switch ((Po(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return me(t), null;
    case 1:
      return Te(t.type) && ki(), me(t), null;
    case 3:
      return (
        (r = t.stateNode),
        An(),
        q(Ce),
        q(ge),
        zo(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Gr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), We !== null && (Gl(We), (We = null)))),
        Dl(e, t),
        me(t),
        null
      );
    case 5:
      Ro(t);
      var i = $t(xr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Ld(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(A(166));
          return me(t), null;
        }
        if (((e = $t(nt.current)), Gr(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[Ze] = t), (r[gr] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Q("cancel", r), Q("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Q("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Kn.length; i++) Q(Kn[i], r);
              break;
            case "source":
              Q("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Q("error", r), Q("load", r);
              break;
            case "details":
              Q("toggle", r);
              break;
            case "input":
              ma(r, s), Q("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                Q("invalid", r);
              break;
            case "textarea":
              ga(r, s), Q("invalid", r);
          }
          dl(n, s), (i = null);
          for (var l in s)
            if (s.hasOwnProperty(l)) {
              var o = s[l];
              l === "children"
                ? typeof o == "string"
                  ? r.textContent !== o &&
                    (s.suppressHydrationWarning !== !0 &&
                      Wr(r.textContent, o, e),
                    (i = ["children", o]))
                  : typeof o == "number" &&
                    r.textContent !== "" + o &&
                    (s.suppressHydrationWarning !== !0 &&
                      Wr(r.textContent, o, e),
                    (i = ["children", "" + o]))
                : lr.hasOwnProperty(l) &&
                  o != null &&
                  l === "onScroll" &&
                  Q("scroll", r);
            }
          switch (n) {
            case "input":
              Fr(r), ha(r, s, !0);
              break;
            case "textarea":
              Fr(r), va(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Ti);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = sc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[Ze] = t),
            (e[gr] = r),
            jd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = fl(n, r)), n)) {
              case "dialog":
                Q("cancel", e), Q("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Q("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Kn.length; i++) Q(Kn[i], e);
                i = r;
                break;
              case "source":
                Q("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                Q("error", e), Q("load", e), (i = r);
                break;
              case "details":
                Q("toggle", e), (i = r);
                break;
              case "input":
                ma(e, r), (i = ll(e, r)), Q("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Z({}, r, { value: void 0 })),
                  Q("invalid", e);
                break;
              case "textarea":
                ga(e, r), (i = ul(e, r)), Q("invalid", e);
                break;
              default:
                i = r;
            }
            dl(n, i), (o = i);
            for (s in o)
              if (o.hasOwnProperty(s)) {
                var a = o[s];
                s === "style"
                  ? ac(e, a)
                  : s === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && lc(e, a))
                  : s === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && or(e, a)
                    : typeof a == "number" && or(e, "" + a)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (lr.hasOwnProperty(s)
                      ? a != null && s === "onScroll" && Q("scroll", e)
                      : a != null && co(e, s, a, l));
              }
            switch (n) {
              case "input":
                Fr(e), ha(e, r, !1);
                break;
              case "textarea":
                Fr(e), va(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Mt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? vn(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      vn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Ti);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return me(t), null;
    case 6:
      if (e && t.stateNode != null) Od(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(A(166));
        if (((n = $t(xr.current)), $t(nt.current), Gr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ze] = t),
            (s = r.nodeValue !== n) && ((e = Le), e !== null))
          )
            switch (e.tag) {
              case 3:
                Wr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Wr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ze] = t),
            (t.stateNode = r);
      }
      return me(t), null;
    case 13:
      if (
        (q(X),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (K && je !== null && t.mode & 1 && !(t.flags & 128))
          Kc(), Pn(), (t.flags |= 98560), (s = !1);
        else if (((s = Gr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(A(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(A(317));
            s[Ze] = t;
          } else
            Pn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          me(t), (s = !1);
        } else We !== null && (Gl(We), (We = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || X.current & 1 ? se === 0 && (se = 3) : Qo())),
          t.updateQueue !== null && (t.flags |= 4),
          me(t),
          null);
    case 4:
      return (
        An(), Dl(e, t), e === null && mr(t.stateNode.containerInfo), me(t), null
      );
    case 10:
      return Lo(t.type._context), me(t), null;
    case 17:
      return Te(t.type) && ki(), me(t), null;
    case 19:
      if ((q(X), (s = t.memoizedState), s === null)) return me(t), null;
      if (((r = (t.flags & 128) !== 0), (l = s.rendering), l === null))
        if (r) Hn(s, !1);
        else {
          if (se !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = _i(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Hn(s, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (l = s.alternate),
                    l === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = l.childLanes),
                        (s.lanes = l.lanes),
                        (s.child = l.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = l.memoizedProps),
                        (s.memoizedState = l.memoizedState),
                        (s.updateQueue = l.updateQueue),
                        (s.type = l.type),
                        (e = l.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return G(X, (X.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            te() > Ln &&
            ((t.flags |= 128), (r = !0), Hn(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = _i(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Hn(s, !0),
              s.tail === null && s.tailMode === "hidden" && !l.alternate && !K)
            )
              return me(t), null;
          } else
            2 * te() - s.renderingStartTime > Ln &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Hn(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = s.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (s.last = l));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = te()),
          (t.sibling = null),
          (n = X.current),
          G(X, r ? (n & 1) | 2 : n & 1),
          t)
        : (me(t), null);
    case 22:
    case 23:
      return (
        Go(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ne & 1073741824 && (me(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : me(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(A(156, t.tag));
}
function Um(e, t) {
  switch ((Po(t), t.tag)) {
    case 1:
      return (
        Te(t.type) && ki(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        An(),
        q(Ce),
        q(ge),
        zo(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ro(t), null;
    case 13:
      if ((q(X), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(A(340));
        Pn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return q(X), null;
    case 4:
      return An(), null;
    case 10:
      return Lo(t.type._context), null;
    case 22:
    case 23:
      return Go(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Kr = !1,
  he = !1,
  Hm = typeof WeakSet == "function" ? WeakSet : Set,
  z = null;
function hn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ee(e, t, r);
      }
    else n.current = null;
}
function bl(e, t, n) {
  try {
    n();
  } catch (r) {
    ee(e, t, r);
  }
}
var lu = !1;
function Vm(e, t) {
  if (((El = Si), (e = Ic()), To(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            o = -1,
            a = -1,
            u = 0,
            d = 0,
            p = e,
            g = null;
          t: for (;;) {
            for (
              var x;
              p !== n || (i !== 0 && p.nodeType !== 3) || (o = l + i),
                p !== s || (r !== 0 && p.nodeType !== 3) || (a = l + r),
                p.nodeType === 3 && (l += p.nodeValue.length),
                (x = p.firstChild) !== null;

            )
              (g = p), (p = x);
            for (;;) {
              if (p === e) break t;
              if (
                (g === n && ++u === i && (o = l),
                g === s && ++d === r && (a = l),
                (x = p.nextSibling) !== null)
              )
                break;
              (p = g), (g = p.parentNode);
            }
            p = x;
          }
          n = o === -1 || a === -1 ? null : { start: o, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Cl = { focusedElem: e, selectionRange: n }, Si = !1, z = t; z !== null; )
    if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (z = e);
    else
      for (; z !== null; ) {
        t = z;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var y = v.memoizedProps,
                    C = v.memoizedState,
                    c = t.stateNode,
                    f = c.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Ve(t.type, y),
                      C
                    );
                  c.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(A(163));
            }
        } catch (w) {
          ee(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (z = e);
          break;
        }
        z = t.return;
      }
  return (v = lu), (lu = !1), v;
}
function nr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && bl(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function ns(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Bl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function _d(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), _d(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ze], delete t[gr], delete t[Pl], delete t[km], delete t[Pm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Md(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ou(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Md(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ul(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ti));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ul(e, t, n), e = e.sibling; e !== null; ) Ul(e, t, n), (e = e.sibling);
}
function Hl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Hl(e, t, n), e = e.sibling; e !== null; ) Hl(e, t, n), (e = e.sibling);
}
var ue = null,
  $e = !1;
function gt(e, t, n) {
  for (n = n.child; n !== null; ) Rd(e, t, n), (n = n.sibling);
}
function Rd(e, t, n) {
  if (tt && typeof tt.onCommitFiberUnmount == "function")
    try {
      tt.onCommitFiberUnmount(qi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      he || hn(n, t);
    case 6:
      var r = ue,
        i = $e;
      (ue = null),
        gt(e, t, n),
        (ue = r),
        ($e = i),
        ue !== null &&
          ($e
            ? ((e = ue),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ue.removeChild(n.stateNode));
      break;
    case 18:
      ue !== null &&
        ($e
          ? ((e = ue),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ms(e.parentNode, n)
              : e.nodeType === 1 && Ms(e, n),
            dr(e))
          : Ms(ue, n.stateNode));
      break;
    case 4:
      (r = ue),
        (i = $e),
        (ue = n.stateNode.containerInfo),
        ($e = !0),
        gt(e, t, n),
        (ue = r),
        ($e = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !he &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            l = s.destroy;
          (s = s.tag),
            l !== void 0 && (s & 2 || s & 4) && bl(n, t, l),
            (i = i.next);
        } while (i !== r);
      }
      gt(e, t, n);
      break;
    case 1:
      if (
        !he &&
        (hn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (o) {
          ee(n, t, o);
        }
      gt(e, t, n);
      break;
    case 21:
      gt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((he = (r = he) || n.memoizedState !== null), gt(e, t, n), (he = r))
        : gt(e, t, n);
      break;
    default:
      gt(e, t, n);
  }
}
function au(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Hm()),
      t.forEach(function (r) {
        var i = Jm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function He(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          l = t,
          o = l;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              (ue = o.stateNode), ($e = !1);
              break e;
            case 3:
              (ue = o.stateNode.containerInfo), ($e = !0);
              break e;
            case 4:
              (ue = o.stateNode.containerInfo), ($e = !0);
              break e;
          }
          o = o.return;
        }
        if (ue === null) throw Error(A(160));
        Rd(s, l, i), (ue = null), ($e = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        ee(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) zd(t, e), (t = t.sibling);
}
function zd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((He(t, e), Xe(e), r & 4)) {
        try {
          nr(3, e, e.return), ns(3, e);
        } catch (y) {
          ee(e, e.return, y);
        }
        try {
          nr(5, e, e.return);
        } catch (y) {
          ee(e, e.return, y);
        }
      }
      break;
    case 1:
      He(t, e), Xe(e), r & 512 && n !== null && hn(n, n.return);
      break;
    case 5:
      if (
        (He(t, e),
        Xe(e),
        r & 512 && n !== null && hn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          or(i, "");
        } catch (y) {
          ee(e, e.return, y);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          l = n !== null ? n.memoizedProps : s,
          o = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            o === "input" && s.type === "radio" && s.name != null && rc(i, s),
              fl(o, l);
            var u = fl(o, s);
            for (l = 0; l < a.length; l += 2) {
              var d = a[l],
                p = a[l + 1];
              d === "style"
                ? ac(i, p)
                : d === "dangerouslySetInnerHTML"
                ? lc(i, p)
                : d === "children"
                ? or(i, p)
                : co(i, d, p, u);
            }
            switch (o) {
              case "input":
                ol(i, s);
                break;
              case "textarea":
                ic(i, s);
                break;
              case "select":
                var g = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var x = s.value;
                x != null
                  ? vn(i, !!s.multiple, x, !1)
                  : g !== !!s.multiple &&
                    (s.defaultValue != null
                      ? vn(i, !!s.multiple, s.defaultValue, !0)
                      : vn(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[gr] = s;
          } catch (y) {
            ee(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((He(t, e), Xe(e), r & 4)) {
        if (e.stateNode === null) throw Error(A(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (y) {
          ee(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (He(t, e), Xe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          dr(t.containerInfo);
        } catch (y) {
          ee(e, e.return, y);
        }
      break;
    case 4:
      He(t, e), Xe(e);
      break;
    case 13:
      He(t, e),
        Xe(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            ($o = te())),
        r & 4 && au(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((he = (u = he) || d), He(t, e), (he = u)) : He(t, e),
        Xe(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (z = e, d = e.child; d !== null; ) {
            for (p = z = d; z !== null; ) {
              switch (((g = z), (x = g.child), g.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  nr(4, g, g.return);
                  break;
                case 1:
                  hn(g, g.return);
                  var v = g.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = g), (n = g.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (y) {
                      ee(r, n, y);
                    }
                  }
                  break;
                case 5:
                  hn(g, g.return);
                  break;
                case 22:
                  if (g.memoizedState !== null) {
                    cu(p);
                    continue;
                  }
              }
              x !== null ? ((x.return = g), (z = x)) : cu(p);
            }
            d = d.sibling;
          }
        e: for (d = null, p = e; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                (i = p.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((o = p.stateNode),
                      (a = p.memoizedProps.style),
                      (l =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (o.style.display = oc("display", l)));
              } catch (y) {
                ee(e, e.return, y);
              }
            }
          } else if (p.tag === 6) {
            if (d === null)
              try {
                p.stateNode.nodeValue = u ? "" : p.memoizedProps;
              } catch (y) {
                ee(e, e.return, y);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            d === p && (d = null), (p = p.return);
          }
          d === p && (d = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      He(t, e), Xe(e), r & 4 && au(e);
      break;
    case 21:
      break;
    default:
      He(t, e), Xe(e);
  }
}
function Xe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Md(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(A(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (or(i, ""), (r.flags &= -33));
          var s = ou(e);
          Hl(e, s, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            o = ou(e);
          Ul(e, o, l);
          break;
        default:
          throw Error(A(161));
      }
    } catch (a) {
      ee(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function $m(e, t, n) {
  (z = e), Id(e);
}
function Id(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var i = z,
      s = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || Kr;
      if (!l) {
        var o = i.alternate,
          a = (o !== null && o.memoizedState !== null) || he;
        o = Kr;
        var u = he;
        if (((Kr = l), (he = a) && !u))
          for (z = i; z !== null; )
            (l = z),
              (a = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? du(i)
                : a !== null
                ? ((a.return = l), (z = a))
                : du(i);
        for (; s !== null; ) (z = s), Id(s), (s = s.sibling);
        (z = i), (Kr = o), (he = u);
      }
      uu(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (z = s)) : uu(e);
  }
}
function uu(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              he || ns(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !he)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ve(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && Qa(t, s, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Qa(t, l, n);
              }
              break;
            case 5:
              var o = t.stateNode;
              if (n === null && t.flags & 4) {
                n = o;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var p = d.dehydrated;
                    p !== null && dr(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(A(163));
          }
        he || (t.flags & 512 && Bl(t));
      } catch (g) {
        ee(t, t.return, g);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function cu(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function du(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ns(4, t);
          } catch (a) {
            ee(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              ee(t, i, a);
            }
          }
          var s = t.return;
          try {
            Bl(t);
          } catch (a) {
            ee(t, s, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Bl(t);
          } catch (a) {
            ee(t, l, a);
          }
      }
    } catch (a) {
      ee(t, t.return, a);
    }
    if (t === e) {
      z = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      (o.return = t.return), (z = o);
      break;
    }
    z = t.return;
  }
}
var Wm = Math.ceil,
  zi = ht.ReactCurrentDispatcher,
  Ho = ht.ReactCurrentOwner,
  De = ht.ReactCurrentBatchConfig,
  H = 0,
  ae = null,
  ne = null,
  ce = 0,
  Ne = 0,
  gn = It(0),
  se = 0,
  Er = null,
  Xt = 0,
  rs = 0,
  Vo = 0,
  rr = null,
  Se = null,
  $o = 0,
  Ln = 1 / 0,
  st = null,
  Ii = !1,
  Vl = null,
  Lt = null,
  Yr = !1,
  Ct = null,
  Fi = 0,
  ir = 0,
  $l = null,
  ci = -1,
  di = 0;
function xe() {
  return H & 6 ? te() : ci !== -1 ? ci : (ci = te());
}
function Ot(e) {
  return e.mode & 1
    ? H & 2 && ce !== 0
      ? ce & -ce
      : Am.transition !== null
      ? (di === 0 && (di = wc()), di)
      : ((e = $),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Nc(e.type))),
        e)
    : 1;
}
function Qe(e, t, n, r) {
  if (50 < ir) throw ((ir = 0), ($l = null), Error(A(185)));
  kr(e, n, r),
    (!(H & 2) || e !== ae) &&
      (e === ae && (!(H & 2) && (rs |= n), se === 4 && St(e, ce)),
      ke(e, r),
      n === 1 && H === 0 && !(t.mode & 1) && ((Ln = te() + 500), Zi && Ft()));
}
function ke(e, t) {
  var n = e.callbackNode;
  Ap(e, t);
  var r = wi(e, e === ae ? ce : 0);
  if (r === 0)
    n !== null && wa(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && wa(n), t === 1))
      e.tag === 0 ? Nm(fu.bind(null, e)) : Gc(fu.bind(null, e)),
        Cm(function () {
          !(H & 6) && Ft();
        }),
        (n = null);
    else {
      switch (Sc(r)) {
        case 1:
          n = go;
          break;
        case 4:
          n = xc;
          break;
        case 16:
          n = yi;
          break;
        case 536870912:
          n = yc;
          break;
        default:
          n = yi;
      }
      n = $d(n, Fd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Fd(e, t) {
  if (((ci = -1), (di = 0), H & 6)) throw Error(A(327));
  var n = e.callbackNode;
  if (En() && e.callbackNode !== n) return null;
  var r = wi(e, e === ae ? ce : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Di(e, r);
  else {
    t = r;
    var i = H;
    H |= 2;
    var s = bd();
    (ae !== e || ce !== t) && ((st = null), (Ln = te() + 500), Wt(e, t));
    do
      try {
        qm();
        break;
      } catch (o) {
        Dd(e, o);
      }
    while (!0);
    jo(),
      (zi.current = s),
      (H = i),
      ne !== null ? (t = 0) : ((ae = null), (ce = 0), (t = se));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = vl(e)), i !== 0 && ((r = i), (t = Wl(e, i)))), t === 1)
    )
      throw ((n = Er), Wt(e, 0), St(e, r), ke(e, te()), n);
    if (t === 6) St(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Gm(i) &&
          ((t = Di(e, r)),
          t === 2 && ((s = vl(e)), s !== 0 && ((r = s), (t = Wl(e, s)))),
          t === 1))
      )
        throw ((n = Er), Wt(e, 0), St(e, r), ke(e, te()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(A(345));
        case 2:
          Ut(e, Se, st);
          break;
        case 3:
          if (
            (St(e, r), (r & 130023424) === r && ((t = $o + 500 - te()), 10 < t))
          ) {
            if (wi(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              xe(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = kl(Ut.bind(null, e, Se, st), t);
            break;
          }
          Ut(e, Se, st);
          break;
        case 4:
          if ((St(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - Ge(r);
            (s = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~s);
          }
          if (
            ((r = i),
            (r = te() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Wm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = kl(Ut.bind(null, e, Se, st), r);
            break;
          }
          Ut(e, Se, st);
          break;
        case 5:
          Ut(e, Se, st);
          break;
        default:
          throw Error(A(329));
      }
    }
  }
  return ke(e, te()), e.callbackNode === n ? Fd.bind(null, e) : null;
}
function Wl(e, t) {
  var n = rr;
  return (
    e.current.memoizedState.isDehydrated && (Wt(e, t).flags |= 256),
    (e = Di(e, t)),
    e !== 2 && ((t = Se), (Se = n), t !== null && Gl(t)),
    e
  );
}
function Gl(e) {
  Se === null ? (Se = e) : Se.push.apply(Se, e);
}
function Gm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!Ke(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function St(e, t) {
  for (
    t &= ~Vo,
      t &= ~rs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ge(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function fu(e) {
  if (H & 6) throw Error(A(327));
  En();
  var t = wi(e, 0);
  if (!(t & 1)) return ke(e, te()), null;
  var n = Di(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = vl(e);
    r !== 0 && ((t = r), (n = Wl(e, r)));
  }
  if (n === 1) throw ((n = Er), Wt(e, 0), St(e, t), ke(e, te()), n);
  if (n === 6) throw Error(A(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ut(e, Se, st),
    ke(e, te()),
    null
  );
}
function Wo(e, t) {
  var n = H;
  H |= 1;
  try {
    return e(t);
  } finally {
    (H = n), H === 0 && ((Ln = te() + 500), Zi && Ft());
  }
}
function Jt(e) {
  Ct !== null && Ct.tag === 0 && !(H & 6) && En();
  var t = H;
  H |= 1;
  var n = De.transition,
    r = $;
  try {
    if (((De.transition = null), ($ = 1), e)) return e();
  } finally {
    ($ = r), (De.transition = n), (H = t), !(H & 6) && Ft();
  }
}
function Go() {
  (Ne = gn.current), q(gn);
}
function Wt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Em(n)), ne !== null))
    for (n = ne.return; n !== null; ) {
      var r = n;
      switch ((Po(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ki();
          break;
        case 3:
          An(), q(Ce), q(ge), zo();
          break;
        case 5:
          Ro(r);
          break;
        case 4:
          An();
          break;
        case 13:
          q(X);
          break;
        case 19:
          q(X);
          break;
        case 10:
          Lo(r.type._context);
          break;
        case 22:
        case 23:
          Go();
      }
      n = n.return;
    }
  if (
    ((ae = e),
    (ne = e = _t(e.current, null)),
    (ce = Ne = t),
    (se = 0),
    (Er = null),
    (Vo = rs = Xt = 0),
    (Se = rr = null),
    Vt !== null)
  ) {
    for (t = 0; t < Vt.length; t++)
      if (((n = Vt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var l = s.next;
          (s.next = i), (r.next = l);
        }
        n.pending = r;
      }
    Vt = null;
  }
  return e;
}
function Dd(e, t) {
  do {
    var n = ne;
    try {
      if ((jo(), (oi.current = Ri), Mi)) {
        for (var r = J.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Mi = !1;
      }
      if (
        ((Yt = 0),
        (oe = ie = J = null),
        (tr = !1),
        (yr = 0),
        (Ho.current = null),
        n === null || n.return === null)
      ) {
        (se = 1), (Er = t), (ne = null);
        break;
      }
      e: {
        var s = e,
          l = n.return,
          o = n,
          a = t;
        if (
          ((t = ce),
          (o.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            d = o,
            p = d.tag;
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var g = d.alternate;
            g
              ? ((d.updateQueue = g.updateQueue),
                (d.memoizedState = g.memoizedState),
                (d.lanes = g.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var x = Za(l);
          if (x !== null) {
            (x.flags &= -257),
              eu(x, l, o, s, t),
              x.mode & 1 && Ja(s, u, t),
              (t = x),
              (a = u);
            var v = t.updateQueue;
            if (v === null) {
              var y = new Set();
              y.add(a), (t.updateQueue = y);
            } else v.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Ja(s, u, t), Qo();
              break e;
            }
            a = Error(A(426));
          }
        } else if (K && o.mode & 1) {
          var C = Za(l);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              eu(C, l, o, s, t),
              No(jn(a, o));
            break e;
          }
        }
        (s = a = jn(a, o)),
          se !== 4 && (se = 2),
          rr === null ? (rr = [s]) : rr.push(s),
          (s = l);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var c = Sd(s, a, t);
              Ga(s, c);
              break e;
            case 1:
              o = a;
              var f = s.type,
                m = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (Lt === null || !Lt.has(m))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var w = Ed(s, o, t);
                Ga(s, w);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Ud(n);
    } catch (S) {
      (t = S), ne === n && n !== null && (ne = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function bd() {
  var e = zi.current;
  return (zi.current = Ri), e === null ? Ri : e;
}
function Qo() {
  (se === 0 || se === 3 || se === 2) && (se = 4),
    ae === null || (!(Xt & 268435455) && !(rs & 268435455)) || St(ae, ce);
}
function Di(e, t) {
  var n = H;
  H |= 2;
  var r = bd();
  (ae !== e || ce !== t) && ((st = null), Wt(e, t));
  do
    try {
      Qm();
      break;
    } catch (i) {
      Dd(e, i);
    }
  while (!0);
  if ((jo(), (H = n), (zi.current = r), ne !== null)) throw Error(A(261));
  return (ae = null), (ce = 0), se;
}
function Qm() {
  for (; ne !== null; ) Bd(ne);
}
function qm() {
  for (; ne !== null && !yp(); ) Bd(ne);
}
function Bd(e) {
  var t = Vd(e.alternate, e, Ne);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ud(e) : (ne = t),
    (Ho.current = null);
}
function Ud(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Um(n, t)), n !== null)) {
        (n.flags &= 32767), (ne = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (se = 6), (ne = null);
        return;
      }
    } else if (((n = Bm(n, t, Ne)), n !== null)) {
      ne = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ne = t;
      return;
    }
    ne = t = e;
  } while (t !== null);
  se === 0 && (se = 5);
}
function Ut(e, t, n) {
  var r = $,
    i = De.transition;
  try {
    (De.transition = null), ($ = 1), Km(e, t, n, r);
  } finally {
    (De.transition = i), ($ = r);
  }
  return null;
}
function Km(e, t, n, r) {
  do En();
  while (Ct !== null);
  if (H & 6) throw Error(A(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(A(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (jp(e, s),
    e === ae && ((ne = ae = null), (ce = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Yr ||
      ((Yr = !0),
      $d(yi, function () {
        return En(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = De.transition), (De.transition = null);
    var l = $;
    $ = 1;
    var o = H;
    (H |= 4),
      (Ho.current = null),
      Vm(e, n),
      zd(n, e),
      hm(Cl),
      (Si = !!El),
      (Cl = El = null),
      (e.current = n),
      $m(n),
      wp(),
      (H = o),
      ($ = l),
      (De.transition = s);
  } else e.current = n;
  if (
    (Yr && ((Yr = !1), (Ct = e), (Fi = i)),
    (s = e.pendingLanes),
    s === 0 && (Lt = null),
    Cp(n.stateNode),
    ke(e, te()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Ii) throw ((Ii = !1), (e = Vl), (Vl = null), e);
  return (
    Fi & 1 && e.tag !== 0 && En(),
    (s = e.pendingLanes),
    s & 1 ? (e === $l ? ir++ : ((ir = 0), ($l = e))) : (ir = 0),
    Ft(),
    null
  );
}
function En() {
  if (Ct !== null) {
    var e = Sc(Fi),
      t = De.transition,
      n = $;
    try {
      if (((De.transition = null), ($ = 16 > e ? 16 : e), Ct === null))
        var r = !1;
      else {
        if (((e = Ct), (Ct = null), (Fi = 0), H & 6)) throw Error(A(331));
        var i = H;
        for (H |= 4, z = e.current; z !== null; ) {
          var s = z,
            l = s.child;
          if (z.flags & 16) {
            var o = s.deletions;
            if (o !== null) {
              for (var a = 0; a < o.length; a++) {
                var u = o[a];
                for (z = u; z !== null; ) {
                  var d = z;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      nr(8, d, s);
                  }
                  var p = d.child;
                  if (p !== null) (p.return = d), (z = p);
                  else
                    for (; z !== null; ) {
                      d = z;
                      var g = d.sibling,
                        x = d.return;
                      if ((_d(d), d === u)) {
                        z = null;
                        break;
                      }
                      if (g !== null) {
                        (g.return = x), (z = g);
                        break;
                      }
                      z = x;
                    }
                }
              }
              var v = s.alternate;
              if (v !== null) {
                var y = v.child;
                if (y !== null) {
                  v.child = null;
                  do {
                    var C = y.sibling;
                    (y.sibling = null), (y = C);
                  } while (y !== null);
                }
              }
              z = s;
            }
          }
          if (s.subtreeFlags & 2064 && l !== null) (l.return = s), (z = l);
          else
            e: for (; z !== null; ) {
              if (((s = z), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    nr(9, s, s.return);
                }
              var c = s.sibling;
              if (c !== null) {
                (c.return = s.return), (z = c);
                break e;
              }
              z = s.return;
            }
        }
        var f = e.current;
        for (z = f; z !== null; ) {
          l = z;
          var m = l.child;
          if (l.subtreeFlags & 2064 && m !== null) (m.return = l), (z = m);
          else
            e: for (l = f; z !== null; ) {
              if (((o = z), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ns(9, o);
                  }
                } catch (S) {
                  ee(o, o.return, S);
                }
              if (o === l) {
                z = null;
                break e;
              }
              var w = o.sibling;
              if (w !== null) {
                (w.return = o.return), (z = w);
                break e;
              }
              z = o.return;
            }
        }
        if (
          ((H = i), Ft(), tt && typeof tt.onPostCommitFiberRoot == "function")
        )
          try {
            tt.onPostCommitFiberRoot(qi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ($ = n), (De.transition = t);
    }
  }
  return !1;
}
function pu(e, t, n) {
  (t = jn(n, t)),
    (t = Sd(e, t, 1)),
    (e = jt(e, t, 1)),
    (t = xe()),
    e !== null && (kr(e, 1, t), ke(e, t));
}
function ee(e, t, n) {
  if (e.tag === 3) pu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        pu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Lt === null || !Lt.has(r)))
        ) {
          (e = jn(n, e)),
            (e = Ed(t, e, 1)),
            (t = jt(t, e, 1)),
            (e = xe()),
            t !== null && (kr(t, 1, e), ke(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Ym(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = xe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ae === e &&
      (ce & n) === n &&
      (se === 4 || (se === 3 && (ce & 130023424) === ce && 500 > te() - $o)
        ? Wt(e, 0)
        : (Vo |= n)),
    ke(e, t);
}
function Hd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Br), (Br <<= 1), !(Br & 130023424) && (Br = 4194304))
      : (t = 1));
  var n = xe();
  (e = pt(e, t)), e !== null && (kr(e, t, n), ke(e, n));
}
function Xm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Hd(e, n);
}
function Jm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(A(314));
  }
  r !== null && r.delete(t), Hd(e, n);
}
var Vd;
Vd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ce.current) Ee = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ee = !1), bm(e, t, n);
      Ee = !!(e.flags & 131072);
    }
  else (Ee = !1), K && t.flags & 1048576 && Qc(t, Ai, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ui(e, t), (e = t.pendingProps);
      var i = kn(t, ge.current);
      Sn(t, n), (i = Fo(null, t, r, e, i, n));
      var s = Do();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Te(r) ? ((s = !0), Pi(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            _o(t),
            (i.updater = ts),
            (t.stateNode = i),
            (i._reactInternals = t),
            _l(t, r, e, n),
            (t = zl(null, t, r, !0, s, n)))
          : ((t.tag = 0), K && s && ko(t), ve(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ui(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = eh(r)),
          (e = Ve(r, e)),
          i)
        ) {
          case 0:
            t = Rl(null, t, r, e, n);
            break e;
          case 1:
            t = ru(null, t, r, e, n);
            break e;
          case 11:
            t = tu(null, t, r, e, n);
            break e;
          case 14:
            t = nu(null, t, r, Ve(r.type, e), n);
            break e;
        }
        throw Error(A(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ve(r, i)),
        Rl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ve(r, i)),
        ru(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Pd(t), e === null)) throw Error(A(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          Zc(e, t),
          Oi(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = jn(Error(A(423)), t)), (t = iu(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = jn(Error(A(424)), t)), (t = iu(e, t, r, n, i));
            break e;
          } else
            for (
              je = At(t.stateNode.containerInfo.firstChild),
                Le = t,
                K = !0,
                We = null,
                n = Xc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Pn(), r === i)) {
            t = mt(e, t, n);
            break e;
          }
          ve(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        ed(t),
        e === null && jl(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (l = i.children),
        Tl(r, i) ? (l = null) : s !== null && Tl(r, s) && (t.flags |= 32),
        kd(e, t),
        ve(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && jl(t), null;
    case 13:
      return Nd(e, t, n);
    case 4:
      return (
        Mo(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Nn(t, null, r, n)) : ve(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ve(r, i)),
        tu(e, t, r, i, n)
      );
    case 7:
      return ve(e, t, t.pendingProps, n), t.child;
    case 8:
      return ve(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ve(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (l = i.value),
          G(ji, r._currentValue),
          (r._currentValue = l),
          s !== null)
        )
          if (Ke(s.value, l)) {
            if (s.children === i.children && !Ce.current) {
              t = mt(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var o = s.dependencies;
              if (o !== null) {
                l = s.child;
                for (var a = o.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (s.tag === 1) {
                      (a = ut(-1, n & -n)), (a.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (a.next = a)
                          : ((a.next = d.next), (d.next = a)),
                          (u.pending = a);
                      }
                    }
                    (s.lanes |= n),
                      (a = s.alternate),
                      a !== null && (a.lanes |= n),
                      Ll(s.return, n, t),
                      (o.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (s.tag === 10) l = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((l = s.return), l === null)) throw Error(A(341));
                (l.lanes |= n),
                  (o = l.alternate),
                  o !== null && (o.lanes |= n),
                  Ll(l, n, t),
                  (l = s.sibling);
              } else l = s.child;
              if (l !== null) l.return = s;
              else
                for (l = s; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((s = l.sibling), s !== null)) {
                    (s.return = l.return), (l = s);
                    break;
                  }
                  l = l.return;
                }
              s = l;
            }
        ve(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Sn(t, n),
        (i = Be(i)),
        (r = r(i)),
        (t.flags |= 1),
        ve(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ve(r, t.pendingProps)),
        (i = Ve(r.type, i)),
        nu(e, t, r, i, n)
      );
    case 15:
      return Cd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ve(r, i)),
        ui(e, t),
        (t.tag = 1),
        Te(r) ? ((e = !0), Pi(t)) : (e = !1),
        Sn(t, n),
        wd(t, r, i),
        _l(t, r, i, n),
        zl(null, t, r, !0, e, n)
      );
    case 19:
      return Ad(e, t, n);
    case 22:
      return Td(e, t, n);
  }
  throw Error(A(156, t.tag));
};
function $d(e, t) {
  return vc(e, t);
}
function Zm(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Fe(e, t, n, r) {
  return new Zm(e, t, n, r);
}
function qo(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function eh(e) {
  if (typeof e == "function") return qo(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === po)) return 11;
    if (e === mo) return 14;
  }
  return 2;
}
function _t(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Fe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function fi(e, t, n, r, i, s) {
  var l = 2;
  if (((r = e), typeof e == "function")) qo(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case ln:
        return Gt(n.children, i, s, t);
      case fo:
        (l = 8), (i |= 8);
        break;
      case nl:
        return (
          (e = Fe(12, n, t, i | 2)), (e.elementType = nl), (e.lanes = s), e
        );
      case rl:
        return (e = Fe(13, n, t, i)), (e.elementType = rl), (e.lanes = s), e;
      case il:
        return (e = Fe(19, n, t, i)), (e.elementType = il), (e.lanes = s), e;
      case ec:
        return is(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ju:
              l = 10;
              break e;
            case Zu:
              l = 9;
              break e;
            case po:
              l = 11;
              break e;
            case mo:
              l = 14;
              break e;
            case xt:
              (l = 16), (r = null);
              break e;
          }
        throw Error(A(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Fe(l, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function Gt(e, t, n, r) {
  return (e = Fe(7, e, r, t)), (e.lanes = n), e;
}
function is(e, t, n, r) {
  return (
    (e = Fe(22, e, r, t)),
    (e.elementType = ec),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Us(e, t, n) {
  return (e = Fe(6, e, null, t)), (e.lanes = n), e;
}
function Hs(e, t, n) {
  return (
    (t = Fe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function th(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Es(0)),
    (this.expirationTimes = Es(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Es(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Ko(e, t, n, r, i, s, l, o, a) {
  return (
    (e = new th(e, t, n, o, a)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Fe(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    _o(s),
    e
  );
}
function nh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: sn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Wd(e) {
  if (!e) return Rt;
  e = e._reactInternals;
  e: {
    if (nn(e) !== e || e.tag !== 1) throw Error(A(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Te(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(A(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Te(n)) return Wc(e, n, t);
  }
  return t;
}
function Gd(e, t, n, r, i, s, l, o, a) {
  return (
    (e = Ko(n, r, !0, e, i, s, l, o, a)),
    (e.context = Wd(null)),
    (n = e.current),
    (r = xe()),
    (i = Ot(n)),
    (s = ut(r, i)),
    (s.callback = t ?? null),
    jt(n, s, i),
    (e.current.lanes = i),
    kr(e, i, r),
    ke(e, r),
    e
  );
}
function ss(e, t, n, r) {
  var i = t.current,
    s = xe(),
    l = Ot(i);
  return (
    (n = Wd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ut(s, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = jt(i, t, l)),
    e !== null && (Qe(e, i, l, s), li(e, i, l)),
    l
  );
}
function bi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function mu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Yo(e, t) {
  mu(e, t), (e = e.alternate) && mu(e, t);
}
function rh() {
  return null;
}
var Qd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Xo(e) {
  this._internalRoot = e;
}
ls.prototype.render = Xo.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(A(409));
  ss(e, t, null, null);
};
ls.prototype.unmount = Xo.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Jt(function () {
      ss(null, e, null, null);
    }),
      (t[ft] = null);
  }
};
function ls(e) {
  this._internalRoot = e;
}
ls.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Tc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < wt.length && t !== 0 && t < wt[n].priority; n++);
    wt.splice(n, 0, e), n === 0 && Pc(e);
  }
};
function Jo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function os(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function hu() {}
function ih(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = bi(l);
        s.call(u);
      };
    }
    var l = Gd(t, r, e, 0, null, !1, !1, "", hu);
    return (
      (e._reactRootContainer = l),
      (e[ft] = l.current),
      mr(e.nodeType === 8 ? e.parentNode : e),
      Jt(),
      l
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var o = r;
    r = function () {
      var u = bi(a);
      o.call(u);
    };
  }
  var a = Ko(e, 0, !1, null, null, !1, !1, "", hu);
  return (
    (e._reactRootContainer = a),
    (e[ft] = a.current),
    mr(e.nodeType === 8 ? e.parentNode : e),
    Jt(function () {
      ss(t, a, n, r);
    }),
    a
  );
}
function as(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var l = s;
    if (typeof i == "function") {
      var o = i;
      i = function () {
        var a = bi(l);
        o.call(a);
      };
    }
    ss(t, l, e, i);
  } else l = ih(n, t, e, i, r);
  return bi(l);
}
Ec = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = qn(t.pendingLanes);
        n !== 0 &&
          (vo(t, n | 1), ke(t, te()), !(H & 6) && ((Ln = te() + 500), Ft()));
      }
      break;
    case 13:
      Jt(function () {
        var r = pt(e, 1);
        if (r !== null) {
          var i = xe();
          Qe(r, e, 1, i);
        }
      }),
        Yo(e, 1);
  }
};
xo = function (e) {
  if (e.tag === 13) {
    var t = pt(e, 134217728);
    if (t !== null) {
      var n = xe();
      Qe(t, e, 134217728, n);
    }
    Yo(e, 134217728);
  }
};
Cc = function (e) {
  if (e.tag === 13) {
    var t = Ot(e),
      n = pt(e, t);
    if (n !== null) {
      var r = xe();
      Qe(n, e, t, r);
    }
    Yo(e, t);
  }
};
Tc = function () {
  return $;
};
kc = function (e, t) {
  var n = $;
  try {
    return ($ = e), t();
  } finally {
    $ = n;
  }
};
ml = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ol(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Ji(r);
            if (!i) throw Error(A(90));
            nc(r), ol(r, i);
          }
        }
      }
      break;
    case "textarea":
      ic(e, n);
      break;
    case "select":
      (t = n.value), t != null && vn(e, !!n.multiple, t, !1);
  }
};
dc = Wo;
fc = Jt;
var sh = { usingClientEntryPoint: !1, Events: [Nr, cn, Ji, uc, cc, Wo] },
  Vn = {
    findFiberByHostInstance: Ht,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  lh = {
    bundleType: Vn.bundleType,
    version: Vn.version,
    rendererPackageName: Vn.rendererPackageName,
    rendererConfig: Vn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ht.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = hc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Vn.findFiberByHostInstance || rh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Xr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Xr.isDisabled && Xr.supportsFiber)
    try {
      (qi = Xr.inject(lh)), (tt = Xr);
    } catch {}
}
_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sh;
_e.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Jo(t)) throw Error(A(200));
  return nh(e, t, null, n);
};
_e.createRoot = function (e, t) {
  if (!Jo(e)) throw Error(A(299));
  var n = !1,
    r = "",
    i = Qd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Ko(e, 1, !1, null, null, n, !1, r, i)),
    (e[ft] = t.current),
    mr(e.nodeType === 8 ? e.parentNode : e),
    new Xo(t)
  );
};
_e.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(A(188))
      : ((e = Object.keys(e).join(",")), Error(A(268, e)));
  return (e = hc(t)), (e = e === null ? null : e.stateNode), e;
};
_e.flushSync = function (e) {
  return Jt(e);
};
_e.hydrate = function (e, t, n) {
  if (!os(t)) throw Error(A(200));
  return as(null, e, t, !0, n);
};
_e.hydrateRoot = function (e, t, n) {
  if (!Jo(e)) throw Error(A(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    l = Qd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Gd(t, null, e, 1, n ?? null, i, !1, s, l)),
    (e[ft] = t.current),
    mr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new ls(t);
};
_e.render = function (e, t, n) {
  if (!os(t)) throw Error(A(200));
  return as(null, e, t, !1, n);
};
_e.unmountComponentAtNode = function (e) {
  if (!os(e)) throw Error(A(40));
  return e._reactRootContainer
    ? (Jt(function () {
        as(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[ft] = null);
        });
      }),
      !0)
    : !1;
};
_e.unstable_batchedUpdates = Wo;
_e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!os(n)) throw Error(A(200));
  if (e == null || e._reactInternals === void 0) throw Error(A(38));
  return as(e, t, n, !1, r);
};
_e.version = "18.3.1-next-f1338f8080-20240426";
function qd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qd);
    } catch (e) {
      console.error(e);
    }
}
qd(), (qu.exports = _e);
var oh = qu.exports,
  gu = oh;
(el.createRoot = gu.createRoot), (el.hydrateRoot = gu.hydrateRoot);
const ah = "./assets/fa-filimo-dark-logo-CSUi6aT1.svg",
  uh = "./assets/filimo_150-CB3MZ4SW.png",
  ch =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%20width='32px'%20height='32px'%3e%3cpath%20d='M%2019%203%20C%2013.488281%203%209%207.488281%209%2013%20C%209%2015.394531%209.839844%2017.589844%2011.25%2019.3125%20L%203.28125%2027.28125%20L%204.71875%2028.71875%20L%2012.6875%2020.75%20C%2014.410156%2022.160156%2016.605469%2023%2019%2023%20C%2024.511719%2023%2029%2018.511719%2029%2013%20C%2029%207.488281%2024.511719%203%2019%203%20Z%20M%2019%205%20C%2023.429688%205%2027%208.570313%2027%2013%20C%2027%2017.429688%2023.429688%2021%2019%2021%20C%2014.570313%2021%2011%2017.429688%2011%2013%20C%2011%208.570313%2014.570313%205%2019%205%20Z'%20fill='%23f2f1f1'/%3e%3c/svg%3e",
  Kd =
    "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12.6667%2013.3333H3.33337C2.80294%2013.3333%202.29423%2013.1226%201.91916%2012.7475C1.54409%2012.3724%201.33337%2011.8637%201.33337%2011.3333V4.66663C1.33337%204.13619%201.54409%203.62749%201.91916%203.25241C2.29423%202.87734%202.80294%202.66663%203.33337%202.66663H12.6667C13.1971%202.66663%2013.7058%202.87734%2014.0809%203.25241C14.456%203.62749%2014.6667%204.13619%2014.6667%204.66663V11.3333C14.6667%2011.8637%2014.456%2012.3724%2014.0809%2012.7475C13.7058%2013.1226%2013.1971%2013.3333%2012.6667%2013.3333ZM2.86197%204.19522C2.73695%204.32025%202.66671%204.48981%202.66671%204.66663V11.3333C2.66671%2011.5101%202.73695%2011.6797%202.86197%2011.8047C2.98699%2011.9297%203.15656%2012%203.33337%2012H12.6667C12.8435%2012%2013.0131%2011.9297%2013.1381%2011.8047C13.2631%2011.6797%2013.3334%2011.5101%2013.3334%2011.3333V4.66663C13.3334%204.48981%2013.2631%204.32025%2013.1381%204.19522C13.0131%204.0702%2012.8435%203.99996%2012.6667%203.99996H3.33337C3.15656%203.99996%202.98699%204.0702%202.86197%204.19522ZM9.62005%208.66663L7.33338%2010.1466C7.20743%2010.23%207.0612%2010.2776%206.91031%2010.2843C6.75941%2010.291%206.60954%2010.2565%206.4767%2010.1846C6.34387%2010.1128%206.23307%2010.0061%206.15616%209.87611C6.07925%209.74612%206.03911%209.59767%206.04004%209.44663V6.49996C6.03911%206.34892%206.07925%206.20047%206.15616%206.07048C6.23307%205.94049%206.34387%205.83384%206.4767%205.76195C6.60954%205.69005%206.75941%205.65561%206.91031%205.66231C7.0612%205.669%207.20743%205.71659%207.33338%205.79996L9.62005%207.26663C9.737%207.34218%209.83316%207.44582%209.89975%207.5681C9.96634%207.69038%2010.0012%207.8274%2010.0012%207.96663C10.0012%208.10586%209.96634%208.24288%209.89975%208.36516C9.83316%208.48744%209.737%208.59108%209.62005%208.66663Z'%20fill='white'/%3e%3c/svg%3e",
  dh = () => {
    const e = F.useRef(null);
    F.useEffect(() => {
      e.current.addEventListener("click", function () {
        document.querySelector(".searchbox").classList.add("active");
      });
    }, []);
    const t = F.useRef(null);
    return (
      F.useEffect(() => {
        t.current.addEventListener("click", function () {
          document.querySelector(".searchbox").classList.remove("active");
        });
      }, []),
      h.jsxs("div", {
        className:
          " w-[100%] bg-[black] flex flex-row relative justify-between items-center sm:max-lg:h-[100px] max-sm:h-[100px] max-sm:gap-x-[20px]",
        children: [
          h.jsxs("div", {
            className:
              " flex flex-row p-[10px]  gap-x-[20px] justify-start items-center sm:max-lg:justify-center max-sm:gap-x[12px]",
            children: [
              h.jsx("img", {
                className:
                  "w-[20%] mr-[11%] pl-[35px] sm:max-lg:w-[35%] max-sm:w-[35%] max-sm:p-0",
                src: ah,
                alt: "",
              }),
              h.jsx("hr", {
                className: "w-[0.4px] h-[27px] mt-[10px] bg-[#8e8e8e]",
              }),
              h.jsxs("div", {
                className:
                  "w-[12%] flex flex-row items-center gap-x-[5px] justify-start sm:max-lg:hidden max-sm:hidden ",
                children: [
                  h.jsx("svg", {
                    className: "w-[24px] h-[21px]",
                    children: h.jsxs("g", {
                      id: "ui-icon-fire",
                      viewBox: "0 0 20 20",
                      children: [
                        h.jsx("path", {
                          d: "M14.9817 9.29572C14.7793 9.03171 14.5329 8.8029 14.3041 8.57409C13.7145 8.04606 13.0456 7.66764 12.4824 7.11321C11.486 6.13683 11.079 4.67766 11.3079 3.31885C11.3932 2.81244 10.953 2.3161 10.5056 2.56826C10.1542 2.76632 9.82751 2.99853 9.52546 3.24102C7.24615 5.07151 6.3485 8.30127 7.42216 11.0734C7.45736 11.1614 7.49256 11.2494 7.49256 11.3638C7.49256 11.5574 7.36055 11.7334 7.18455 11.8039C6.98214 11.8919 6.77092 11.8391 6.60372 11.6982C6.55091 11.6542 6.51571 11.6102 6.48051 11.5486C6.02925 10.9776 5.75014 10.2942 5.64237 9.58309C5.54699 8.9538 4.70017 8.51622 4.43263 9.09373C3.98868 10.052 3.77785 11.1298 3.84038 12.1735C3.89318 12.6135 3.94598 13.0535 4.09559 13.4935C4.2188 14.0216 4.45641 14.5496 4.72042 15.016C5.67087 16.5385 7.31655 17.6297 9.08544 17.8498C10.9687 18.0874 12.984 17.7442 14.4273 16.4417C16.0378 14.9808 16.601 12.6399 15.7738 10.6334L15.6594 10.4046C15.4746 9.99976 14.9817 9.29572 14.9817 9.29572ZM12.2008 14.84C11.9544 15.0512 11.5496 15.28 11.2327 15.368C10.5182 15.6232 9.80358 15.4344 9.24326 15.0899C8.97628 14.9257 9.0751 14.5425 9.34969 14.3914C9.99764 14.0349 10.3962 13.4412 10.5375 12.8423C10.6871 12.1383 10.4055 11.5574 10.2911 10.8798C10.2373 10.5481 10.2155 10.2415 10.2384 9.94018C10.2647 9.59462 10.6858 9.56464 10.8834 9.84938C10.9196 9.90155 10.9568 9.95182 10.9951 9.99976C11.6728 10.8798 12.7376 11.267 12.9664 12.4639C13.0016 12.5871 13.0192 12.7103 13.0192 12.8423C13.0456 13.5639 12.7288 14.356 12.2008 14.84Z",
                          fill: "url(#paint0_radial_923_68543)",
                        }),
                        h.jsx("defs", {
                          children: h.jsxs("radialGradient", {
                            id: "paint0_radial_923_68543",
                            cx: "0",
                            cy: "0",
                            r: "1",
                            gradientUnits: "userSpaceOnUse",
                            gradientTransform:
                              "translate(13 21.5005) rotate(-115.942) scale(20.573 28.2969)",
                            children: [
                              h.jsx("stop", { "stop-color": "#F58540" }),
                              h.jsx("stop", {
                                offset: "0.541667",
                                "stop-color": "#F99F3E",
                              }),
                              h.jsx("stop", {
                                offset: "1",
                                "stop-color": "#FEC23B",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                  h.jsx("p", {
                    className:
                      "text-[13px] text-[white] font-medium hover:text-[#C08603]",
                    children: "فیلیموتور",
                  }),
                ],
              }),
              h.jsx("div", {
                className:
                  "flex flex-row items-center sm:max-lg:hidden max-sm:hidden",
                children: h.jsxs("a", {
                  className:
                    "flex flex-row justify-center items-center gap-x-[5px] w-[142px] h-[31px] bg-[#6b511dfa] rounded-[50px] hover:bg-[#7D5E21]  duration-300",
                  href: "#",
                  children: [
                    h.jsx("img", {
                      className: "w-[20px] h-[20px]",
                      src: uh,
                      alt: "",
                    }),
                    h.jsx("p", {
                      className: "  text-[13px] font-[500] text-[#f5b83f]",
                      children: "مدرسه",
                    }),
                    h.jsx("p", {
                      className:
                        "text-[8px] w-[60px] h-[20px] text-center leading-[20px] rounded-[1000px] bg-[white] ",
                      children: "ویژه امتحانات",
                    }),
                  ],
                }),
              }),
              h.jsxs("div", {
                className: "search",
                ref: e,
                children: [
                  h.jsx("img", { src: ch, alt: "" }),
                  h.jsx("p", { children: "جستجو" }),
                ],
              }),
            ],
          }),
          h.jsxs("div", {
            className:
              "w-[50%] h-[inherit] flex flex-row  justify-end items-center gap-x-[20px] pl-[40px] max-sm:pl-[10px]",
            children: [
              h.jsxs("div", {
                className:
                  "w-[115px] h-[40px] flex flex-row items-center justify-center gap-x-[8px] rounded-[5px] bg-[#1CB561]",
                children: [
                  h.jsx("img", { className: "text-[white]", src: Kd, alt: "" }),
                  h.jsx("p", {
                    className: "text-[13px] font-medium text-[white]",
                    children: "خرید اشتراک",
                  }),
                ],
              }),
              h.jsx("div", {
                className:
                  "w-[50px] h-[40px] text-center leading-[30px] rounded-[5px] text-[white] bg-[#3a3a3a] hover:bg-[#434343]",
                children: "ورود",
              }),
            ],
          }),
          h.jsx("div", {
            className:
              "searchbox top-[56px] sm:max-lg:top-[100px] max-sm:top-[100px]",
            children: h.jsxs("div", {
              className: "inside_box sm:max-lg:w-[75%] max-sm:w-[80%]",
              children: [
                h.jsxs("div", {
                  children: [
                    h.jsx("input", {
                      type: "text",
                      placeholder: "جستجو فیلم، بازیگر، کارگردان و ...",
                    }),
                    h.jsx("button", { ref: t, children: "بستن" }),
                  ],
                }),
                h.jsx("p", { children: "تاریخچه جستجو" }),
                h.jsx("p", {
                  children:
                    "در این لیست، فیلم‌ و سریال‌ها، بازیگر و کارگردان‌هایی که جستجو می‌کنید ذخیره می‌شوند.",
                }),
              ],
            }),
          }),
        ],
      })
    );
  };
function vu(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  );
}
function Zo(e, t) {
  e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach((n) => {
      typeof e[n] > "u"
        ? (e[n] = t[n])
        : vu(t[n]) &&
          vu(e[n]) &&
          Object.keys(t[n]).length > 0 &&
          Zo(e[n], t[n]);
    });
}
const Yd = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function ct() {
  const e = typeof document < "u" ? document : {};
  return Zo(e, Yd), e;
}
const fh = {
  document: Yd,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
};
function Re() {
  const e = typeof window < "u" ? window : {};
  return Zo(e, fh), e;
}
function ph(e) {
  return (
    e === void 0 && (e = ""),
    e
      .trim()
      .split(" ")
      .filter((t) => !!t.trim())
  );
}
function mh(e) {
  const t = e;
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null;
    } catch {}
    try {
      delete t[n];
    } catch {}
  });
}
function Ql(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t);
}
function Bi() {
  return Date.now();
}
function hh(e) {
  const t = Re();
  let n;
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  );
}
function gh(e, t) {
  t === void 0 && (t = "x");
  const n = Re();
  let r, i, s;
  const l = hh(e);
  return (
    n.WebKitCSSMatrix
      ? ((i = l.transform || l.webkitTransform),
        i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map((o) => o.replace(",", "."))
            .join(", ")),
        (s = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
      : ((s =
          l.MozTransform ||
          l.OTransform ||
          l.MsTransform ||
          l.msTransform ||
          l.transform ||
          l
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (r = s.toString().split(","))),
    t === "x" &&
      (n.WebKitCSSMatrix
        ? (i = s.m41)
        : r.length === 16
        ? (i = parseFloat(r[12]))
        : (i = parseFloat(r[4]))),
    t === "y" &&
      (n.WebKitCSSMatrix
        ? (i = s.m42)
        : r.length === 16
        ? (i = parseFloat(r[13]))
        : (i = parseFloat(r[5]))),
    i || 0
  );
}
function Jr(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function vh(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function Ae() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < arguments.length; n += 1) {
    const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    if (r != null && !vh(r)) {
      const i = Object.keys(Object(r)).filter((s) => t.indexOf(s) < 0);
      for (let s = 0, l = i.length; s < l; s += 1) {
        const o = i[s],
          a = Object.getOwnPropertyDescriptor(r, o);
        a !== void 0 &&
          a.enumerable &&
          (Jr(e[o]) && Jr(r[o])
            ? r[o].__swiper__
              ? (e[o] = r[o])
              : Ae(e[o], r[o])
            : !Jr(e[o]) && Jr(r[o])
            ? ((e[o] = {}), r[o].__swiper__ ? (e[o] = r[o]) : Ae(e[o], r[o]))
            : (e[o] = r[o]));
      }
    }
  }
  return e;
}
function Zr(e, t, n) {
  e.style.setProperty(t, n);
}
function Xd(e) {
  let { swiper: t, targetPosition: n, side: r } = e;
  const i = Re(),
    s = -t.translate;
  let l = null,
    o;
  const a = t.params.speed;
  (t.wrapperEl.style.scrollSnapType = "none"),
    i.cancelAnimationFrame(t.cssModeFrameID);
  const u = n > s ? "next" : "prev",
    d = (g, x) => (u === "next" && g >= x) || (u === "prev" && g <= x),
    p = () => {
      (o = new Date().getTime()), l === null && (l = o);
      const g = Math.max(Math.min((o - l) / a, 1), 0),
        x = 0.5 - Math.cos(g * Math.PI) / 2;
      let v = s + x * (n - s);
      if ((d(v, n) && (v = n), t.wrapperEl.scrollTo({ [r]: v }), d(v, n))) {
        (t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [r]: v });
          }),
          i.cancelAnimationFrame(t.cssModeFrameID);
        return;
      }
      t.cssModeFrameID = i.requestAnimationFrame(p);
    };
  p();
}
function et(e, t) {
  return t === void 0 && (t = ""), [...e.children].filter((n) => n.matches(t));
}
function Ui(e) {
  try {
    console.warn(e);
    return;
  } catch {}
}
function Hi(e, t) {
  t === void 0 && (t = []);
  const n = document.createElement(e);
  return n.classList.add(...(Array.isArray(t) ? t : ph(t))), n;
}
function xh(e, t) {
  const n = [];
  for (; e.previousElementSibling; ) {
    const r = e.previousElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function yh(e, t) {
  const n = [];
  for (; e.nextElementSibling; ) {
    const r = e.nextElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function Tt(e, t) {
  return Re().getComputedStyle(e, null).getPropertyValue(t);
}
function Vi(e) {
  let t = e,
    n;
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (n += 1);
    return n;
  }
}
function Jd(e, t) {
  const n = [];
  let r = e.parentElement;
  for (; r; ) t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement);
  return n;
}
function ql(e, t, n) {
  const r = Re();
  return (
    e[t === "width" ? "offsetWidth" : "offsetHeight"] +
    parseFloat(
      r
        .getComputedStyle(e, null)
        .getPropertyValue(t === "width" ? "margin-right" : "margin-top")
    ) +
    parseFloat(
      r
        .getComputedStyle(e, null)
        .getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")
    )
  );
}
function le(e) {
  return (Array.isArray(e) ? e : [e]).filter((t) => !!t);
}
let Vs;
function wh() {
  const e = Re(),
    t = ct();
  return {
    smoothScroll:
      t.documentElement &&
      t.documentElement.style &&
      "scrollBehavior" in t.documentElement.style,
    touch: !!(
      "ontouchstart" in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    ),
  };
}
function Zd() {
  return Vs || (Vs = wh()), Vs;
}
let $s;
function Sh(e) {
  let { userAgent: t } = e === void 0 ? {} : e;
  const n = Zd(),
    r = Re(),
    i = r.navigator.platform,
    s = t || r.navigator.userAgent,
    l = { ios: !1, android: !1 },
    o = r.screen.width,
    a = r.screen.height,
    u = s.match(/(Android);?[\s\/]+([\d.]+)?/);
  let d = s.match(/(iPad).*OS\s([\d_]+)/);
  const p = s.match(/(iPod)(.*OS\s([\d_]+))?/),
    g = !d && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    x = i === "Win32";
  let v = i === "MacIntel";
  const y = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !d &&
      v &&
      n.touch &&
      y.indexOf(`${o}x${a}`) >= 0 &&
      ((d = s.match(/(Version)\/([\d.]+)/)),
      d || (d = [0, 1, "13_0_0"]),
      (v = !1)),
    u && !x && ((l.os = "android"), (l.android = !0)),
    (d || g || p) && ((l.os = "ios"), (l.ios = !0)),
    l
  );
}
function ef(e) {
  return e === void 0 && (e = {}), $s || ($s = Sh(e)), $s;
}
let Ws;
function Eh() {
  const e = Re(),
    t = ef();
  let n = !1;
  function r() {
    const o = e.navigator.userAgent.toLowerCase();
    return (
      o.indexOf("safari") >= 0 &&
      o.indexOf("chrome") < 0 &&
      o.indexOf("android") < 0
    );
  }
  if (r()) {
    const o = String(e.navigator.userAgent);
    if (o.includes("Version/")) {
      const [a, u] = o
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((d) => Number(d));
      n = a < 16 || (a === 16 && u < 2);
    }
  }
  const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent
    ),
    s = r(),
    l = s || (i && t.ios);
  return {
    isSafari: n || s,
    needPerspectiveFix: n,
    need3dFix: l,
    isWebView: i,
  };
}
function Ch() {
  return Ws || (Ws = Eh()), Ws;
}
function Th(e) {
  let { swiper: t, on: n, emit: r } = e;
  const i = Re();
  let s = null,
    l = null;
  const o = () => {
      !t || t.destroyed || !t.initialized || (r("beforeResize"), r("resize"));
    },
    a = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((s = new ResizeObserver((p) => {
          l = i.requestAnimationFrame(() => {
            const { width: g, height: x } = t;
            let v = g,
              y = x;
            p.forEach((C) => {
              let { contentBoxSize: c, contentRect: f, target: m } = C;
              (m && m !== t.el) ||
                ((v = f ? f.width : (c[0] || c).inlineSize),
                (y = f ? f.height : (c[0] || c).blockSize));
            }),
              (v !== g || y !== x) && o();
          });
        })),
        s.observe(t.el));
    },
    u = () => {
      l && i.cancelAnimationFrame(l),
        s && s.unobserve && t.el && (s.unobserve(t.el), (s = null));
    },
    d = () => {
      !t || t.destroyed || !t.initialized || r("orientationchange");
    };
  n("init", () => {
    if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
      a();
      return;
    }
    i.addEventListener("resize", o), i.addEventListener("orientationchange", d);
  }),
    n("destroy", () => {
      u(),
        i.removeEventListener("resize", o),
        i.removeEventListener("orientationchange", d);
    });
}
function kh(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  const s = [],
    l = Re(),
    o = function (d, p) {
      p === void 0 && (p = {});
      const g = l.MutationObserver || l.WebkitMutationObserver,
        x = new g((v) => {
          if (t.__preventObserver__) return;
          if (v.length === 1) {
            i("observerUpdate", v[0]);
            return;
          }
          const y = function () {
            i("observerUpdate", v[0]);
          };
          l.requestAnimationFrame
            ? l.requestAnimationFrame(y)
            : l.setTimeout(y, 0);
        });
      x.observe(d, {
        attributes: typeof p.attributes > "u" ? !0 : p.attributes,
        childList: typeof p.childList > "u" ? !0 : p.childList,
        characterData: typeof p.characterData > "u" ? !0 : p.characterData,
      }),
        s.push(x);
    },
    a = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const d = Jd(t.hostEl);
          for (let p = 0; p < d.length; p += 1) o(d[p]);
        }
        o(t.hostEl, { childList: t.params.observeSlideChildren }),
          o(t.wrapperEl, { attributes: !1 });
      }
    },
    u = () => {
      s.forEach((d) => {
        d.disconnect();
      }),
        s.splice(0, s.length);
    };
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    r("init", a),
    r("destroy", u);
}
var Ph = {
  on(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    const i = n ? "unshift" : "push";
    return (
      e.split(" ").forEach((s) => {
        r.eventsListeners[s] || (r.eventsListeners[s] = []),
          r.eventsListeners[s][i](t);
      }),
      r
    );
  },
  once(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    function i() {
      r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
      for (var s = arguments.length, l = new Array(s), o = 0; o < s; o++)
        l[o] = arguments[o];
      t.apply(r, l);
    }
    return (i.__emitterProxy = t), r.on(e, i, n);
  },
  onAny(e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const r = t ? "unshift" : "push";
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
  },
  off(e, t) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(" ").forEach((r) => {
          typeof t > "u"
            ? (n.eventsListeners[r] = [])
            : n.eventsListeners[r] &&
              n.eventsListeners[r].forEach((i, s) => {
                (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                  n.eventsListeners[r].splice(s, 1);
              });
        }),
      n
    );
  },
  emit() {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, n, r;
    for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return (
      typeof s[0] == "string" || Array.isArray(s[0])
        ? ((t = s[0]), (n = s.slice(1, s.length)), (r = e))
        : ((t = s[0].events), (n = s[0].data), (r = s[0].context || e)),
      n.unshift(r),
      (Array.isArray(t) ? t : t.split(" ")).forEach((a) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((u) => {
            u.apply(r, [a, ...n]);
          }),
          e.eventsListeners &&
            e.eventsListeners[a] &&
            e.eventsListeners[a].forEach((u) => {
              u.apply(r, n);
            });
      }),
      e
    );
  },
};
function Nh() {
  const e = this;
  let t, n;
  const r = e.el;
  typeof e.params.width < "u" && e.params.width !== null
    ? (t = e.params.width)
    : (t = r.clientWidth),
    typeof e.params.height < "u" && e.params.height !== null
      ? (n = e.params.height)
      : (n = r.clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(Tt(r, "padding-left") || 0, 10) -
        parseInt(Tt(r, "padding-right") || 0, 10)),
      (n =
        n -
        parseInt(Tt(r, "padding-top") || 0, 10) -
        parseInt(Tt(r, "padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, {
        width: t,
        height: n,
        size: e.isHorizontal() ? t : n,
      }));
}
function Ah() {
  const e = this;
  function t(T, M) {
    return parseFloat(T.getPropertyValue(e.getDirectionLabel(M)) || 0);
  }
  const n = e.params,
    { wrapperEl: r, slidesEl: i, size: s, rtlTranslate: l, wrongRTL: o } = e,
    a = e.virtual && n.virtual.enabled,
    u = a ? e.virtual.slides.length : e.slides.length,
    d = et(i, `.${e.params.slideClass}, swiper-slide`),
    p = a ? e.virtual.slides.length : d.length;
  let g = [];
  const x = [],
    v = [];
  let y = n.slidesOffsetBefore;
  typeof y == "function" && (y = n.slidesOffsetBefore.call(e));
  let C = n.slidesOffsetAfter;
  typeof C == "function" && (C = n.slidesOffsetAfter.call(e));
  const c = e.snapGrid.length,
    f = e.slidesGrid.length;
  let m = n.spaceBetween,
    w = -y,
    S = 0,
    P = 0;
  if (typeof s > "u") return;
  typeof m == "string" && m.indexOf("%") >= 0
    ? (m = (parseFloat(m.replace("%", "")) / 100) * s)
    : typeof m == "string" && (m = parseFloat(m)),
    (e.virtualSize = -m),
    d.forEach((T) => {
      l ? (T.style.marginLeft = "") : (T.style.marginRight = ""),
        (T.style.marginBottom = ""),
        (T.style.marginTop = "");
    }),
    n.centeredSlides &&
      n.cssMode &&
      (Zr(r, "--swiper-centered-offset-before", ""),
      Zr(r, "--swiper-centered-offset-after", ""));
  const j = n.grid && n.grid.rows > 1 && e.grid;
  j ? e.grid.initSlides(d) : e.grid && e.grid.unsetSlides();
  let k;
  const L =
    n.slidesPerView === "auto" &&
    n.breakpoints &&
    Object.keys(n.breakpoints).filter(
      (T) => typeof n.breakpoints[T].slidesPerView < "u"
    ).length > 0;
  for (let T = 0; T < p; T += 1) {
    k = 0;
    let M;
    if (
      (d[T] && (M = d[T]),
      j && e.grid.updateSlide(T, M, d),
      !(d[T] && Tt(M, "display") === "none"))
    ) {
      if (n.slidesPerView === "auto") {
        L && (d[T].style[e.getDirectionLabel("width")] = "");
        const _ = getComputedStyle(M),
          O = M.style.transform,
          D = M.style.webkitTransform;
        if (
          (O && (M.style.transform = "none"),
          D && (M.style.webkitTransform = "none"),
          n.roundLengths)
        )
          k = e.isHorizontal() ? ql(M, "width") : ql(M, "height");
        else {
          const W = t(_, "width"),
            fe = t(_, "padding-left"),
            rt = t(_, "padding-right"),
            N = t(_, "margin-left"),
            R = t(_, "margin-right"),
            I = _.getPropertyValue("box-sizing");
          if (I && I === "border-box") k = W + N + R;
          else {
            const { clientWidth: V, offsetWidth: Y } = M;
            k = W + fe + rt + N + R + (Y - V);
          }
        }
        O && (M.style.transform = O),
          D && (M.style.webkitTransform = D),
          n.roundLengths && (k = Math.floor(k));
      } else
        (k = (s - (n.slidesPerView - 1) * m) / n.slidesPerView),
          n.roundLengths && (k = Math.floor(k)),
          d[T] && (d[T].style[e.getDirectionLabel("width")] = `${k}px`);
      d[T] && (d[T].swiperSlideSize = k),
        v.push(k),
        n.centeredSlides
          ? ((w = w + k / 2 + S / 2 + m),
            S === 0 && T !== 0 && (w = w - s / 2 - m),
            T === 0 && (w = w - s / 2 - m),
            Math.abs(w) < 1 / 1e3 && (w = 0),
            n.roundLengths && (w = Math.floor(w)),
            P % n.slidesPerGroup === 0 && g.push(w),
            x.push(w))
          : (n.roundLengths && (w = Math.floor(w)),
            (P - Math.min(e.params.slidesPerGroupSkip, P)) %
              e.params.slidesPerGroup ===
              0 && g.push(w),
            x.push(w),
            (w = w + k + m)),
        (e.virtualSize += k + m),
        (S = k),
        (P += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, s) + C),
    l &&
      o &&
      (n.effect === "slide" || n.effect === "coverflow") &&
      (r.style.width = `${e.virtualSize + m}px`),
    n.setWrapperSize &&
      (r.style[e.getDirectionLabel("width")] = `${e.virtualSize + m}px`),
    j && e.grid.updateWrapperSize(k, g),
    !n.centeredSlides)
  ) {
    const T = [];
    for (let M = 0; M < g.length; M += 1) {
      let _ = g[M];
      n.roundLengths && (_ = Math.floor(_)),
        g[M] <= e.virtualSize - s && T.push(_);
    }
    (g = T),
      Math.floor(e.virtualSize - s) - Math.floor(g[g.length - 1]) > 1 &&
        g.push(e.virtualSize - s);
  }
  if (a && n.loop) {
    const T = v[0] + m;
    if (n.slidesPerGroup > 1) {
      const M = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup
        ),
        _ = T * n.slidesPerGroup;
      for (let O = 0; O < M; O += 1) g.push(g[g.length - 1] + _);
    }
    for (let M = 0; M < e.virtual.slidesBefore + e.virtual.slidesAfter; M += 1)
      n.slidesPerGroup === 1 && g.push(g[g.length - 1] + T),
        x.push(x[x.length - 1] + T),
        (e.virtualSize += T);
  }
  if ((g.length === 0 && (g = [0]), m !== 0)) {
    const T =
      e.isHorizontal() && l ? "marginLeft" : e.getDirectionLabel("marginRight");
    d.filter((M, _) =>
      !n.cssMode || n.loop ? !0 : _ !== d.length - 1
    ).forEach((M) => {
      M.style[T] = `${m}px`;
    });
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let T = 0;
    v.forEach((_) => {
      T += _ + (m || 0);
    }),
      (T -= m);
    const M = T - s;
    g = g.map((_) => (_ <= 0 ? -y : _ > M ? M + C : _));
  }
  if (n.centerInsufficientSlides) {
    let T = 0;
    v.forEach((_) => {
      T += _ + (m || 0);
    }),
      (T -= m);
    const M = (n.slidesOffsetBefore || 0) + (n.slidesOffsetAfter || 0);
    if (T + M < s) {
      const _ = (s - T - M) / 2;
      g.forEach((O, D) => {
        g[D] = O - _;
      }),
        x.forEach((O, D) => {
          x[D] = O + _;
        });
    }
  }
  if (
    (Object.assign(e, {
      slides: d,
      snapGrid: g,
      slidesGrid: x,
      slidesSizesGrid: v,
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    Zr(r, "--swiper-centered-offset-before", `${-g[0]}px`),
      Zr(
        r,
        "--swiper-centered-offset-after",
        `${e.size / 2 - v[v.length - 1] / 2}px`
      );
    const T = -e.snapGrid[0],
      M = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map((_) => _ + T)),
      (e.slidesGrid = e.slidesGrid.map((_) => _ + M));
  }
  if (
    (p !== u && e.emit("slidesLengthChange"),
    g.length !== c &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    x.length !== f && e.emit("slidesGridLengthChange"),
    n.watchSlidesProgress && e.updateSlidesOffset(),
    e.emit("slidesUpdated"),
    !a && !n.cssMode && (n.effect === "slide" || n.effect === "fade"))
  ) {
    const T = `${n.containerModifierClass}backface-hidden`,
      M = e.el.classList.contains(T);
    p <= n.maxBackfaceHiddenSlides
      ? M || e.el.classList.add(T)
      : M && e.el.classList.remove(T);
  }
}
function jh(e) {
  const t = this,
    n = [],
    r = t.virtual && t.params.virtual.enabled;
  let i = 0,
    s;
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed);
  const l = (o) => (r ? t.slides[t.getSlideIndexByData(o)] : t.slides[o]);
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((o) => {
        n.push(o);
      });
    else
      for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
        const o = t.activeIndex + s;
        if (o > t.slides.length && !r) break;
        n.push(l(o));
      }
  else n.push(l(t.activeIndex));
  for (s = 0; s < n.length; s += 1)
    if (typeof n[s] < "u") {
      const o = n[s].offsetHeight;
      i = o > i ? o : i;
    }
  (i || i === 0) && (t.wrapperEl.style.height = `${i}px`);
}
function Lh() {
  const e = this,
    t = e.slides,
    n = e.isElement
      ? e.isHorizontal()
        ? e.wrapperEl.offsetLeft
        : e.wrapperEl.offsetTop
      : 0;
  for (let r = 0; r < t.length; r += 1)
    t[r].swiperSlideOffset =
      (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) -
      n -
      e.cssOverflowAdjustment();
}
const xu = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n);
};
function Oh(e) {
  e === void 0 && (e = (this && this.translate) || 0);
  const t = this,
    n = t.params,
    { slides: r, rtlTranslate: i, snapGrid: s } = t;
  if (r.length === 0) return;
  typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let l = -e;
  i && (l = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
  let o = n.spaceBetween;
  typeof o == "string" && o.indexOf("%") >= 0
    ? (o = (parseFloat(o.replace("%", "")) / 100) * t.size)
    : typeof o == "string" && (o = parseFloat(o));
  for (let a = 0; a < r.length; a += 1) {
    const u = r[a];
    let d = u.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (d -= r[0].swiperSlideOffset);
    const p =
        (l + (n.centeredSlides ? t.minTranslate() : 0) - d) /
        (u.swiperSlideSize + o),
      g =
        (l - s[0] + (n.centeredSlides ? t.minTranslate() : 0) - d) /
        (u.swiperSlideSize + o),
      x = -(l - d),
      v = x + t.slidesSizesGrid[a],
      y = x >= 0 && x <= t.size - t.slidesSizesGrid[a],
      C =
        (x >= 0 && x < t.size - 1) ||
        (v > 1 && v <= t.size) ||
        (x <= 0 && v >= t.size);
    C && (t.visibleSlides.push(u), t.visibleSlidesIndexes.push(a)),
      xu(u, C, n.slideVisibleClass),
      xu(u, y, n.slideFullyVisibleClass),
      (u.progress = i ? -p : p),
      (u.originalProgress = i ? -g : g);
  }
}
function _h(e) {
  const t = this;
  if (typeof e > "u") {
    const d = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * d) || 0;
  }
  const n = t.params,
    r = t.maxTranslate() - t.minTranslate();
  let { progress: i, isBeginning: s, isEnd: l, progressLoop: o } = t;
  const a = s,
    u = l;
  if (r === 0) (i = 0), (s = !0), (l = !0);
  else {
    i = (e - t.minTranslate()) / r;
    const d = Math.abs(e - t.minTranslate()) < 1,
      p = Math.abs(e - t.maxTranslate()) < 1;
    (s = d || i <= 0), (l = p || i >= 1), d && (i = 0), p && (i = 1);
  }
  if (n.loop) {
    const d = t.getSlideIndexByData(0),
      p = t.getSlideIndexByData(t.slides.length - 1),
      g = t.slidesGrid[d],
      x = t.slidesGrid[p],
      v = t.slidesGrid[t.slidesGrid.length - 1],
      y = Math.abs(e);
    y >= g ? (o = (y - g) / v) : (o = (y + v - x) / v), o > 1 && (o -= 1);
  }
  Object.assign(t, { progress: i, progressLoop: o, isBeginning: s, isEnd: l }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    s && !a && t.emit("reachBeginning toEdge"),
    l && !u && t.emit("reachEnd toEdge"),
    ((a && !s) || (u && !l)) && t.emit("fromEdge"),
    t.emit("progress", i);
}
const Gs = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n);
};
function Mh() {
  const e = this,
    { slides: t, params: n, slidesEl: r, activeIndex: i } = e,
    s = e.virtual && n.virtual.enabled,
    l = e.grid && n.grid && n.grid.rows > 1,
    o = (p) => et(r, `.${n.slideClass}${p}, swiper-slide${p}`)[0];
  let a, u, d;
  if (s)
    if (n.loop) {
      let p = i - e.virtual.slidesBefore;
      p < 0 && (p = e.virtual.slides.length + p),
        p >= e.virtual.slides.length && (p -= e.virtual.slides.length),
        (a = o(`[data-swiper-slide-index="${p}"]`));
    } else a = o(`[data-swiper-slide-index="${i}"]`);
  else
    l
      ? ((a = t.filter((p) => p.column === i)[0]),
        (d = t.filter((p) => p.column === i + 1)[0]),
        (u = t.filter((p) => p.column === i - 1)[0]))
      : (a = t[i]);
  a &&
    (l ||
      ((d = yh(a, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !d && (d = t[0]),
      (u = xh(a, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !u === 0 && (u = t[t.length - 1]))),
    t.forEach((p) => {
      Gs(p, p === a, n.slideActiveClass),
        Gs(p, p === d, n.slideNextClass),
        Gs(p, p === u, n.slidePrevClass);
    }),
    e.emitSlidesClasses();
}
const pi = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const n = () => (e.isElement ? "swiper-slide" : `.${e.params.slideClass}`),
      r = t.closest(n());
    if (r) {
      let i = r.querySelector(`.${e.params.lazyPreloaderClass}`);
      !i &&
        e.isElement &&
        (r.shadowRoot
          ? (i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              r.shadowRoot &&
                ((i = r.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`
                )),
                i && i.remove());
            })),
        i && i.remove();
    }
  },
  Qs = (e, t) => {
    if (!e.slides[t]) return;
    const n = e.slides[t].querySelector('[loading="lazy"]');
    n && n.removeAttribute("loading");
  },
  Kl = (e) => {
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const n = e.slides.length;
    if (!n || !t || t < 0) return;
    t = Math.min(t, n);
    const r =
        e.params.slidesPerView === "auto"
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      i = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
      const l = i,
        o = [l - t];
      o.push(...Array.from({ length: t }).map((a, u) => l + r + u)),
        e.slides.forEach((a, u) => {
          o.includes(a.column) && Qs(e, u);
        });
      return;
    }
    const s = i + r - 1;
    if (e.params.rewind || e.params.loop)
      for (let l = i - t; l <= s + t; l += 1) {
        const o = ((l % n) + n) % n;
        (o < i || o > s) && Qs(e, o);
      }
    else
      for (let l = Math.max(i - t, 0); l <= Math.min(s + t, n - 1); l += 1)
        l !== i && (l > s || l < i) && Qs(e, l);
  };
function Rh(e) {
  const { slidesGrid: t, params: n } = e,
    r = e.rtlTranslate ? e.translate : -e.translate;
  let i;
  for (let s = 0; s < t.length; s += 1)
    typeof t[s + 1] < "u"
      ? r >= t[s] && r < t[s + 1] - (t[s + 1] - t[s]) / 2
        ? (i = s)
        : r >= t[s] && r < t[s + 1] && (i = s + 1)
      : r >= t[s] && (i = s);
  return n.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i;
}
function zh(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: r, params: i, activeIndex: s, realIndex: l, snapIndex: o } = t;
  let a = e,
    u;
  const d = (x) => {
    let v = x - t.virtual.slidesBefore;
    return (
      v < 0 && (v = t.virtual.slides.length + v),
      v >= t.virtual.slides.length && (v -= t.virtual.slides.length),
      v
    );
  };
  if ((typeof a > "u" && (a = Rh(t)), r.indexOf(n) >= 0)) u = r.indexOf(n);
  else {
    const x = Math.min(i.slidesPerGroupSkip, a);
    u = x + Math.floor((a - x) / i.slidesPerGroup);
  }
  if ((u >= r.length && (u = r.length - 1), a === s && !t.params.loop)) {
    u !== o && ((t.snapIndex = u), t.emit("snapIndexChange"));
    return;
  }
  if (a === s && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = d(a);
    return;
  }
  const p = t.grid && i.grid && i.grid.rows > 1;
  let g;
  if (t.virtual && i.virtual.enabled && i.loop) g = d(a);
  else if (p) {
    const x = t.slides.filter((y) => y.column === a)[0];
    let v = parseInt(x.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(v) && (v = Math.max(t.slides.indexOf(x), 0)),
      (g = Math.floor(v / i.grid.rows));
  } else if (t.slides[a]) {
    const x = t.slides[a].getAttribute("data-swiper-slide-index");
    x ? (g = parseInt(x, 10)) : (g = a);
  } else g = a;
  Object.assign(t, {
    previousSnapIndex: o,
    snapIndex: u,
    previousRealIndex: l,
    realIndex: g,
    previousIndex: s,
    activeIndex: a,
  }),
    t.initialized && Kl(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (l !== g && t.emit("realIndexChange"), t.emit("slideChange"));
}
function Ih(e, t) {
  const n = this,
    r = n.params;
  let i = e.closest(`.${r.slideClass}, swiper-slide`);
  !i &&
    n.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach((o) => {
      !i && o.matches && o.matches(`.${r.slideClass}, swiper-slide`) && (i = o);
    });
  let s = !1,
    l;
  if (i) {
    for (let o = 0; o < n.slides.length; o += 1)
      if (n.slides[o] === i) {
        (s = !0), (l = o);
        break;
      }
  }
  if (i && s)
    (n.clickedSlide = i),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(
            i.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (n.clickedIndex = l);
  else {
    (n.clickedSlide = void 0), (n.clickedIndex = void 0);
    return;
  }
  r.slideToClickedSlide &&
    n.clickedIndex !== void 0 &&
    n.clickedIndex !== n.activeIndex &&
    n.slideToClickedSlide();
}
var Fh = {
  updateSize: Nh,
  updateSlides: Ah,
  updateAutoHeight: jh,
  updateSlidesOffset: Lh,
  updateSlidesProgress: Oh,
  updateProgress: _h,
  updateSlidesClasses: Mh,
  updateActiveIndex: zh,
  updateClickedSlide: Ih,
};
function Dh(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y");
  const t = this,
    { params: n, rtlTranslate: r, translate: i, wrapperEl: s } = t;
  if (n.virtualTranslate) return r ? -i : i;
  if (n.cssMode) return i;
  let l = gh(s, e);
  return (l += t.cssOverflowAdjustment()), r && (l = -l), l || 0;
}
function bh(e, t) {
  const n = this,
    { rtlTranslate: r, params: i, wrapperEl: s, progress: l } = n;
  let o = 0,
    a = 0;
  const u = 0;
  n.isHorizontal() ? (o = r ? -e : e) : (a = e),
    i.roundLengths && ((o = Math.floor(o)), (a = Math.floor(a))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? o : a),
    i.cssMode
      ? (s[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -o
          : -a)
      : i.virtualTranslate ||
        (n.isHorizontal()
          ? (o -= n.cssOverflowAdjustment())
          : (a -= n.cssOverflowAdjustment()),
        (s.style.transform = `translate3d(${o}px, ${a}px, ${u}px)`));
  let d;
  const p = n.maxTranslate() - n.minTranslate();
  p === 0 ? (d = 0) : (d = (e - n.minTranslate()) / p),
    d !== l && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t);
}
function Bh() {
  return -this.snapGrid[0];
}
function Uh() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Hh(e, t, n, r, i) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    r === void 0 && (r = !0);
  const s = this,
    { params: l, wrapperEl: o } = s;
  if (s.animating && l.preventInteractionOnTransition) return !1;
  const a = s.minTranslate(),
    u = s.maxTranslate();
  let d;
  if (
    (r && e > a ? (d = a) : r && e < u ? (d = u) : (d = e),
    s.updateProgress(d),
    l.cssMode)
  ) {
    const p = s.isHorizontal();
    if (t === 0) o[p ? "scrollLeft" : "scrollTop"] = -d;
    else {
      if (!s.support.smoothScroll)
        return (
          Xd({ swiper: s, targetPosition: -d, side: p ? "left" : "top" }), !0
        );
      o.scrollTo({ [p ? "left" : "top"]: -d, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (s.setTransition(0),
        s.setTranslate(d),
        n && (s.emit("beforeTransitionStart", t, i), s.emit("transitionEnd")))
      : (s.setTransition(t),
        s.setTranslate(d),
        n && (s.emit("beforeTransitionStart", t, i), s.emit("transitionStart")),
        s.animating ||
          ((s.animating = !0),
          s.onTranslateToWrapperTransitionEnd ||
            (s.onTranslateToWrapperTransitionEnd = function (g) {
              !s ||
                s.destroyed ||
                (g.target === this &&
                  (s.wrapperEl.removeEventListener(
                    "transitionend",
                    s.onTranslateToWrapperTransitionEnd
                  ),
                  (s.onTranslateToWrapperTransitionEnd = null),
                  delete s.onTranslateToWrapperTransitionEnd,
                  (s.animating = !1),
                  n && s.emit("transitionEnd")));
            }),
          s.wrapperEl.addEventListener(
            "transitionend",
            s.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
var Vh = {
  getTranslate: Dh,
  setTranslate: bh,
  minTranslate: Bh,
  maxTranslate: Uh,
  translateTo: Hh,
};
function $h(e, t) {
  const n = this;
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")),
    n.emit("setTransition", e, t);
}
function tf(e) {
  let { swiper: t, runCallbacks: n, direction: r, step: i } = e;
  const { activeIndex: s, previousIndex: l } = t;
  let o = r;
  if (
    (o || (s > l ? (o = "next") : s < l ? (o = "prev") : (o = "reset")),
    t.emit(`transition${i}`),
    n && s !== l)
  ) {
    if (o === "reset") {
      t.emit(`slideResetTransition${i}`);
      return;
    }
    t.emit(`slideChangeTransition${i}`),
      o === "next"
        ? t.emit(`slideNextTransition${i}`)
        : t.emit(`slidePrevTransition${i}`);
  }
}
function Wh(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    tf({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
}
function Gh(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  (n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      tf({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
}
var Qh = { setTransition: $h, transitionStart: Wh, transitionEnd: Gh };
function qh(e, t, n, r, i) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const s = this;
  let l = e;
  l < 0 && (l = 0);
  const {
    params: o,
    snapGrid: a,
    slidesGrid: u,
    previousIndex: d,
    activeIndex: p,
    rtlTranslate: g,
    wrapperEl: x,
    enabled: v,
  } = s;
  if (
    (!v && !r && !i) ||
    s.destroyed ||
    (s.animating && o.preventInteractionOnTransition)
  )
    return !1;
  typeof t > "u" && (t = s.params.speed);
  const y = Math.min(s.params.slidesPerGroupSkip, l);
  let C = y + Math.floor((l - y) / s.params.slidesPerGroup);
  C >= a.length && (C = a.length - 1);
  const c = -a[C];
  if (o.normalizeSlideIndex)
    for (let m = 0; m < u.length; m += 1) {
      const w = -Math.floor(c * 100),
        S = Math.floor(u[m] * 100),
        P = Math.floor(u[m + 1] * 100);
      typeof u[m + 1] < "u"
        ? w >= S && w < P - (P - S) / 2
          ? (l = m)
          : w >= S && w < P && (l = m + 1)
        : w >= S && (l = m);
    }
  if (
    s.initialized &&
    l !== p &&
    ((!s.allowSlideNext &&
      (g
        ? c > s.translate && c > s.minTranslate()
        : c < s.translate && c < s.minTranslate())) ||
      (!s.allowSlidePrev &&
        c > s.translate &&
        c > s.maxTranslate() &&
        (p || 0) !== l))
  )
    return !1;
  l !== (d || 0) && n && s.emit("beforeSlideChangeStart"), s.updateProgress(c);
  let f;
  if (
    (l > p ? (f = "next") : l < p ? (f = "prev") : (f = "reset"),
    (g && -c === s.translate) || (!g && c === s.translate))
  )
    return (
      s.updateActiveIndex(l),
      o.autoHeight && s.updateAutoHeight(),
      s.updateSlidesClasses(),
      o.effect !== "slide" && s.setTranslate(c),
      f !== "reset" && (s.transitionStart(n, f), s.transitionEnd(n, f)),
      !1
    );
  if (o.cssMode) {
    const m = s.isHorizontal(),
      w = g ? c : -c;
    if (t === 0) {
      const S = s.virtual && s.params.virtual.enabled;
      S &&
        ((s.wrapperEl.style.scrollSnapType = "none"),
        (s._immediateVirtual = !0)),
        S && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0
          ? ((s._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              x[m ? "scrollLeft" : "scrollTop"] = w;
            }))
          : (x[m ? "scrollLeft" : "scrollTop"] = w),
        S &&
          requestAnimationFrame(() => {
            (s.wrapperEl.style.scrollSnapType = ""), (s._immediateVirtual = !1);
          });
    } else {
      if (!s.support.smoothScroll)
        return (
          Xd({ swiper: s, targetPosition: w, side: m ? "left" : "top" }), !0
        );
      x.scrollTo({ [m ? "left" : "top"]: w, behavior: "smooth" });
    }
    return !0;
  }
  return (
    s.setTransition(t),
    s.setTranslate(c),
    s.updateActiveIndex(l),
    s.updateSlidesClasses(),
    s.emit("beforeTransitionStart", t, r),
    s.transitionStart(n, f),
    t === 0
      ? s.transitionEnd(n, f)
      : s.animating ||
        ((s.animating = !0),
        s.onSlideToWrapperTransitionEnd ||
          (s.onSlideToWrapperTransitionEnd = function (w) {
            !s ||
              s.destroyed ||
              (w.target === this &&
                (s.wrapperEl.removeEventListener(
                  "transitionend",
                  s.onSlideToWrapperTransitionEnd
                ),
                (s.onSlideToWrapperTransitionEnd = null),
                delete s.onSlideToWrapperTransitionEnd,
                s.transitionEnd(n, f)));
          }),
        s.wrapperEl.addEventListener(
          "transitionend",
          s.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function Kh(e, t, n, r) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const i = this;
  if (i.destroyed) return;
  typeof t > "u" && (t = i.params.speed);
  const s = i.grid && i.params.grid && i.params.grid.rows > 1;
  let l = e;
  if (i.params.loop)
    if (i.virtual && i.params.virtual.enabled) l = l + i.virtual.slidesBefore;
    else {
      let o;
      if (s) {
        const g = l * i.params.grid.rows;
        o = i.slides.filter(
          (x) => x.getAttribute("data-swiper-slide-index") * 1 === g
        )[0].column;
      } else o = i.getSlideIndexByData(l);
      const a = s
          ? Math.ceil(i.slides.length / i.params.grid.rows)
          : i.slides.length,
        { centeredSlides: u } = i.params;
      let d = i.params.slidesPerView;
      d === "auto"
        ? (d = i.slidesPerViewDynamic())
        : ((d = Math.ceil(parseFloat(i.params.slidesPerView, 10))),
          u && d % 2 === 0 && (d = d + 1));
      let p = a - o < d;
      if (
        (u && (p = p || o < Math.ceil(d / 2)),
        r && u && i.params.slidesPerView !== "auto" && !s && (p = !1),
        p)
      ) {
        const g = u
          ? o < i.activeIndex
            ? "prev"
            : "next"
          : o - i.activeIndex - 1 < i.params.slidesPerView
          ? "next"
          : "prev";
        i.loopFix({
          direction: g,
          slideTo: !0,
          activeSlideIndex: g === "next" ? o + 1 : o - a + 1,
          slideRealIndex: g === "next" ? i.realIndex : void 0,
        });
      }
      if (s) {
        const g = l * i.params.grid.rows;
        l = i.slides.filter(
          (x) => x.getAttribute("data-swiper-slide-index") * 1 === g
        )[0].column;
      } else l = i.getSlideIndexByData(l);
    }
  return (
    requestAnimationFrame(() => {
      i.slideTo(l, t, n, r);
    }),
    i
  );
}
function Yh(e, t, n) {
  t === void 0 && (t = !0);
  const r = this,
    { enabled: i, params: s, animating: l } = r;
  if (!i || r.destroyed) return r;
  typeof e > "u" && (e = r.params.speed);
  let o = s.slidesPerGroup;
  s.slidesPerView === "auto" &&
    s.slidesPerGroup === 1 &&
    s.slidesPerGroupAuto &&
    (o = Math.max(r.slidesPerViewDynamic("current", !0), 1));
  const a = r.activeIndex < s.slidesPerGroupSkip ? 1 : o,
    u = r.virtual && s.virtual.enabled;
  if (s.loop) {
    if (l && !u && s.loopPreventsSliding) return !1;
    if (
      (r.loopFix({ direction: "next" }),
      (r._clientLeft = r.wrapperEl.clientLeft),
      r.activeIndex === r.slides.length - 1 && s.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          r.slideTo(r.activeIndex + a, e, t, n);
        }),
        !0
      );
  }
  return s.rewind && r.isEnd
    ? r.slideTo(0, e, t, n)
    : r.slideTo(r.activeIndex + a, e, t, n);
}
function Xh(e, t, n) {
  t === void 0 && (t = !0);
  const r = this,
    {
      params: i,
      snapGrid: s,
      slidesGrid: l,
      rtlTranslate: o,
      enabled: a,
      animating: u,
    } = r;
  if (!a || r.destroyed) return r;
  typeof e > "u" && (e = r.params.speed);
  const d = r.virtual && i.virtual.enabled;
  if (i.loop) {
    if (u && !d && i.loopPreventsSliding) return !1;
    r.loopFix({ direction: "prev" }), (r._clientLeft = r.wrapperEl.clientLeft);
  }
  const p = o ? r.translate : -r.translate;
  function g(c) {
    return c < 0 ? -Math.floor(Math.abs(c)) : Math.floor(c);
  }
  const x = g(p),
    v = s.map((c) => g(c));
  let y = s[v.indexOf(x) - 1];
  if (typeof y > "u" && i.cssMode) {
    let c;
    s.forEach((f, m) => {
      x >= f && (c = m);
    }),
      typeof c < "u" && (y = s[c > 0 ? c - 1 : c]);
  }
  let C = 0;
  if (
    (typeof y < "u" &&
      ((C = l.indexOf(y)),
      C < 0 && (C = r.activeIndex - 1),
      i.slidesPerView === "auto" &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((C = C - r.slidesPerViewDynamic("previous", !0) + 1),
        (C = Math.max(C, 0)))),
    i.rewind && r.isBeginning)
  ) {
    const c =
      r.params.virtual && r.params.virtual.enabled && r.virtual
        ? r.virtual.slides.length - 1
        : r.slides.length - 1;
    return r.slideTo(c, e, t, n);
  } else if (i.loop && r.activeIndex === 0 && i.cssMode)
    return (
      requestAnimationFrame(() => {
        r.slideTo(C, e, t, n);
      }),
      !0
    );
  return r.slideTo(C, e, t, n);
}
function Jh(e, t, n) {
  t === void 0 && (t = !0);
  const r = this;
  if (!r.destroyed)
    return (
      typeof e > "u" && (e = r.params.speed), r.slideTo(r.activeIndex, e, t, n)
    );
}
function Zh(e, t, n, r) {
  t === void 0 && (t = !0), r === void 0 && (r = 0.5);
  const i = this;
  if (i.destroyed) return;
  typeof e > "u" && (e = i.params.speed);
  let s = i.activeIndex;
  const l = Math.min(i.params.slidesPerGroupSkip, s),
    o = l + Math.floor((s - l) / i.params.slidesPerGroup),
    a = i.rtlTranslate ? i.translate : -i.translate;
  if (a >= i.snapGrid[o]) {
    const u = i.snapGrid[o],
      d = i.snapGrid[o + 1];
    a - u > (d - u) * r && (s += i.params.slidesPerGroup);
  } else {
    const u = i.snapGrid[o - 1],
      d = i.snapGrid[o];
    a - u <= (d - u) * r && (s -= i.params.slidesPerGroup);
  }
  return (
    (s = Math.max(s, 0)),
    (s = Math.min(s, i.slidesGrid.length - 1)),
    i.slideTo(s, e, t, n)
  );
}
function e0() {
  const e = this;
  if (e.destroyed) return;
  const { params: t, slidesEl: n } = e,
    r = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let i = e.clickedIndex,
    s;
  const l = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
  if (t.loop) {
    if (e.animating) return;
    (s = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? i < e.loopedSlides - r / 2 ||
          i > e.slides.length - e.loopedSlides + r / 2
          ? (e.loopFix(),
            (i = e.getSlideIndex(
              et(n, `${l}[data-swiper-slide-index="${s}"]`)[0]
            )),
            Ql(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i)
        : i > e.slides.length - r
        ? (e.loopFix(),
          (i = e.getSlideIndex(
            et(n, `${l}[data-swiper-slide-index="${s}"]`)[0]
          )),
          Ql(() => {
            e.slideTo(i);
          }))
        : e.slideTo(i);
  } else e.slideTo(i);
}
var t0 = {
  slideTo: qh,
  slideToLoop: Kh,
  slideNext: Yh,
  slidePrev: Xh,
  slideReset: Jh,
  slideToClosest: Zh,
  slideToClickedSlide: e0,
};
function n0(e) {
  const t = this,
    { params: n, slidesEl: r } = t;
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
  const i = () => {
      et(r, `.${n.slideClass}, swiper-slide`).forEach((p, g) => {
        p.setAttribute("data-swiper-slide-index", g);
      });
    },
    s = t.grid && n.grid && n.grid.rows > 1,
    l = n.slidesPerGroup * (s ? n.grid.rows : 1),
    o = t.slides.length % l !== 0,
    a = s && t.slides.length % n.grid.rows !== 0,
    u = (d) => {
      for (let p = 0; p < d; p += 1) {
        const g = t.isElement
          ? Hi("swiper-slide", [n.slideBlankClass])
          : Hi("div", [n.slideClass, n.slideBlankClass]);
        t.slidesEl.append(g);
      }
    };
  if (o) {
    if (n.loopAddBlankSlides) {
      const d = l - (t.slides.length % l);
      u(d), t.recalcSlides(), t.updateSlides();
    } else
      Ui(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    i();
  } else if (a) {
    if (n.loopAddBlankSlides) {
      const d = n.grid.rows - (t.slides.length % n.grid.rows);
      u(d), t.recalcSlides(), t.updateSlides();
    } else
      Ui(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    i();
  } else i();
  t.loopFix({
    slideRealIndex: e,
    direction: n.centeredSlides ? void 0 : "next",
  });
}
function r0(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: r,
    setTranslate: i,
    activeSlideIndex: s,
    byController: l,
    byMousewheel: o,
  } = e === void 0 ? {} : e;
  const a = this;
  if (!a.params.loop) return;
  a.emit("beforeLoopFix");
  const {
      slides: u,
      allowSlidePrev: d,
      allowSlideNext: p,
      slidesEl: g,
      params: x,
    } = a,
    { centeredSlides: v } = x;
  if (
    ((a.allowSlidePrev = !0),
    (a.allowSlideNext = !0),
    a.virtual && x.virtual.enabled)
  ) {
    n &&
      (!x.centeredSlides && a.snapIndex === 0
        ? a.slideTo(a.virtual.slides.length, 0, !1, !0)
        : x.centeredSlides && a.snapIndex < x.slidesPerView
        ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0)
        : a.snapIndex === a.snapGrid.length - 1 &&
          a.slideTo(a.virtual.slidesBefore, 0, !1, !0)),
      (a.allowSlidePrev = d),
      (a.allowSlideNext = p),
      a.emit("loopFix");
    return;
  }
  let y = x.slidesPerView;
  y === "auto"
    ? (y = a.slidesPerViewDynamic())
    : ((y = Math.ceil(parseFloat(x.slidesPerView, 10))),
      v && y % 2 === 0 && (y = y + 1));
  const C = x.slidesPerGroupAuto ? y : x.slidesPerGroup;
  let c = C;
  c % C !== 0 && (c += C - (c % C)),
    (c += x.loopAdditionalSlides),
    (a.loopedSlides = c);
  const f = a.grid && x.grid && x.grid.rows > 1;
  u.length < y + c
    ? Ui(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
      )
    : f &&
      x.grid.fill === "row" &&
      Ui(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
      );
  const m = [],
    w = [];
  let S = a.activeIndex;
  typeof s > "u"
    ? (s = a.getSlideIndex(
        u.filter((O) => O.classList.contains(x.slideActiveClass))[0]
      ))
    : (S = s);
  const P = r === "next" || !r,
    j = r === "prev" || !r;
  let k = 0,
    L = 0;
  const T = f ? Math.ceil(u.length / x.grid.rows) : u.length,
    _ = (f ? u[s].column : s) + (v && typeof i > "u" ? -y / 2 + 0.5 : 0);
  if (_ < c) {
    k = Math.max(c - _, C);
    for (let O = 0; O < c - _; O += 1) {
      const D = O - Math.floor(O / T) * T;
      if (f) {
        const W = T - D - 1;
        for (let fe = u.length - 1; fe >= 0; fe -= 1)
          u[fe].column === W && m.push(fe);
      } else m.push(T - D - 1);
    }
  } else if (_ + y > T - c) {
    L = Math.max(_ - (T - c * 2), C);
    for (let O = 0; O < L; O += 1) {
      const D = O - Math.floor(O / T) * T;
      f
        ? u.forEach((W, fe) => {
            W.column === D && w.push(fe);
          })
        : w.push(D);
    }
  }
  if (
    ((a.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      a.__preventObserver__ = !1;
    }),
    j &&
      m.forEach((O) => {
        (u[O].swiperLoopMoveDOM = !0),
          g.prepend(u[O]),
          (u[O].swiperLoopMoveDOM = !1);
      }),
    P &&
      w.forEach((O) => {
        (u[O].swiperLoopMoveDOM = !0),
          g.append(u[O]),
          (u[O].swiperLoopMoveDOM = !1);
      }),
    a.recalcSlides(),
    x.slidesPerView === "auto"
      ? a.updateSlides()
      : f &&
        ((m.length > 0 && j) || (w.length > 0 && P)) &&
        a.slides.forEach((O, D) => {
          a.grid.updateSlide(D, O, a.slides);
        }),
    x.watchSlidesProgress && a.updateSlidesOffset(),
    n)
  ) {
    if (m.length > 0 && j) {
      if (typeof t > "u") {
        const O = a.slidesGrid[S],
          W = a.slidesGrid[S + k] - O;
        o
          ? a.setTranslate(a.translate - W)
          : (a.slideTo(S + Math.ceil(k), 0, !1, !0),
            i &&
              ((a.touchEventsData.startTranslate =
                a.touchEventsData.startTranslate - W),
              (a.touchEventsData.currentTranslate =
                a.touchEventsData.currentTranslate - W)));
      } else if (i) {
        const O = f ? m.length / x.grid.rows : m.length;
        a.slideTo(a.activeIndex + O, 0, !1, !0),
          (a.touchEventsData.currentTranslate = a.translate);
      }
    } else if (w.length > 0 && P)
      if (typeof t > "u") {
        const O = a.slidesGrid[S],
          W = a.slidesGrid[S - L] - O;
        o
          ? a.setTranslate(a.translate - W)
          : (a.slideTo(S - L, 0, !1, !0),
            i &&
              ((a.touchEventsData.startTranslate =
                a.touchEventsData.startTranslate - W),
              (a.touchEventsData.currentTranslate =
                a.touchEventsData.currentTranslate - W)));
      } else {
        const O = f ? w.length / x.grid.rows : w.length;
        a.slideTo(a.activeIndex - O, 0, !1, !0);
      }
  }
  if (
    ((a.allowSlidePrev = d),
    (a.allowSlideNext = p),
    a.controller && a.controller.control && !l)
  ) {
    const O = {
      slideRealIndex: t,
      direction: r,
      setTranslate: i,
      activeSlideIndex: s,
      byController: !0,
    };
    Array.isArray(a.controller.control)
      ? a.controller.control.forEach((D) => {
          !D.destroyed &&
            D.params.loop &&
            D.loopFix({
              ...O,
              slideTo: D.params.slidesPerView === x.slidesPerView ? n : !1,
            });
        })
      : a.controller.control instanceof a.constructor &&
        a.controller.control.params.loop &&
        a.controller.control.loopFix({
          ...O,
          slideTo:
            a.controller.control.params.slidesPerView === x.slidesPerView
              ? n
              : !1,
        });
  }
  a.emit("loopFix");
}
function i0() {
  const e = this,
    { params: t, slidesEl: n } = e;
  if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
  e.recalcSlides();
  const r = [];
  e.slides.forEach((i) => {
    const s =
      typeof i.swiperSlideIndex > "u"
        ? i.getAttribute("data-swiper-slide-index") * 1
        : i.swiperSlideIndex;
    r[s] = i;
  }),
    e.slides.forEach((i) => {
      i.removeAttribute("data-swiper-slide-index");
    }),
    r.forEach((i) => {
      n.append(i);
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0);
}
var s0 = { loopCreate: n0, loopFix: r0, loopDestroy: i0 };
function l0(e) {
  const t = this;
  if (
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0),
    (n.style.cursor = "move"),
    (n.style.cursor = e ? "grabbing" : "grab"),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      });
}
function o0() {
  const e = this;
  (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[
      e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      }));
}
var a0 = { setGrabCursor: l0, unsetGrabCursor: o0 };
function u0(e, t) {
  t === void 0 && (t = this);
  function n(r) {
    if (!r || r === ct() || r === Re()) return null;
    r.assignedSlot && (r = r.assignedSlot);
    const i = r.closest(e);
    return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
  }
  return n(t);
}
function yu(e, t, n) {
  const r = Re(),
    { params: i } = e,
    s = i.edgeSwipeDetection,
    l = i.edgeSwipeThreshold;
  return s && (n <= l || n >= r.innerWidth - l)
    ? s === "prevent"
      ? (t.preventDefault(), !0)
      : !1
    : !0;
}
function c0(e) {
  const t = this,
    n = ct();
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  const i = t.touchEventsData;
  if (r.type === "pointerdown") {
    if (i.pointerId !== null && i.pointerId !== r.pointerId) return;
    i.pointerId = r.pointerId;
  } else
    r.type === "touchstart" &&
      r.targetTouches.length === 1 &&
      (i.touchId = r.targetTouches[0].identifier);
  if (r.type === "touchstart") {
    yu(t, r, r.targetTouches[0].pageX);
    return;
  }
  const { params: s, touches: l, enabled: o } = t;
  if (
    !o ||
    (!s.simulateTouch && r.pointerType === "mouse") ||
    (t.animating && s.preventInteractionOnTransition)
  )
    return;
  !t.animating && s.cssMode && s.loop && t.loopFix();
  let a = r.target;
  if (
    (s.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(a)) ||
    ("which" in r && r.which === 3) ||
    ("button" in r && r.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return;
  const u = !!s.noSwipingClass && s.noSwipingClass !== "",
    d = r.composedPath ? r.composedPath() : r.path;
  u && r.target && r.target.shadowRoot && d && (a = d[0]);
  const p = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`,
    g = !!(r.target && r.target.shadowRoot);
  if (s.noSwiping && (g ? u0(p, a) : a.closest(p))) {
    t.allowClick = !0;
    return;
  }
  if (s.swipeHandler && !a.closest(s.swipeHandler)) return;
  (l.currentX = r.pageX), (l.currentY = r.pageY);
  const x = l.currentX,
    v = l.currentY;
  if (!yu(t, r, x)) return;
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (l.startX = x),
    (l.startY = v),
    (i.touchStartTime = Bi()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    s.threshold > 0 && (i.allowThresholdMove = !1);
  let y = !0;
  a.matches(i.focusableElements) &&
    ((y = !1), a.nodeName === "SELECT" && (i.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(i.focusableElements) &&
      n.activeElement !== a &&
      n.activeElement.blur();
  const C = y && t.allowTouchMove && s.touchStartPreventDefault;
  (s.touchStartForcePreventDefault || C) &&
    !a.isContentEditable &&
    r.preventDefault(),
    s.freeMode &&
      s.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !s.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit("touchStart", r);
}
function d0(e) {
  const t = ct(),
    n = this,
    r = n.touchEventsData,
    { params: i, touches: s, rtlTranslate: l, enabled: o } = n;
  if (!o || (!i.simulateTouch && e.pointerType === "mouse")) return;
  let a = e;
  if (
    (a.originalEvent && (a = a.originalEvent),
    a.type === "pointermove" &&
      (r.touchId !== null || a.pointerId !== r.pointerId))
  )
    return;
  let u;
  if (a.type === "touchmove") {
    if (
      ((u = [...a.changedTouches].filter((P) => P.identifier === r.touchId)[0]),
      !u || u.identifier !== r.touchId)
    )
      return;
  } else u = a;
  if (!r.isTouched) {
    r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", a);
    return;
  }
  const d = u.pageX,
    p = u.pageY;
  if (a.preventedByNestedSwiper) {
    (s.startX = d), (s.startY = p);
    return;
  }
  if (!n.allowTouchMove) {
    a.target.matches(r.focusableElements) || (n.allowClick = !1),
      r.isTouched &&
        (Object.assign(s, { startX: d, startY: p, currentX: d, currentY: p }),
        (r.touchStartTime = Bi()));
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
      if (
        (p < s.startY && n.translate <= n.maxTranslate()) ||
        (p > s.startY && n.translate >= n.minTranslate())
      ) {
        (r.isTouched = !1), (r.isMoved = !1);
        return;
      }
    } else if (
      (d < s.startX && n.translate <= n.maxTranslate()) ||
      (d > s.startX && n.translate >= n.minTranslate())
    )
      return;
  }
  if (
    t.activeElement &&
    a.target === t.activeElement &&
    a.target.matches(r.focusableElements)
  ) {
    (r.isMoved = !0), (n.allowClick = !1);
    return;
  }
  r.allowTouchCallbacks && n.emit("touchMove", a),
    (s.previousX = s.currentX),
    (s.previousY = s.currentY),
    (s.currentX = d),
    (s.currentY = p);
  const g = s.currentX - s.startX,
    x = s.currentY - s.startY;
  if (n.params.threshold && Math.sqrt(g ** 2 + x ** 2) < n.params.threshold)
    return;
  if (typeof r.isScrolling > "u") {
    let P;
    (n.isHorizontal() && s.currentY === s.startY) ||
    (n.isVertical() && s.currentX === s.startX)
      ? (r.isScrolling = !1)
      : g * g + x * x >= 25 &&
        ((P = (Math.atan2(Math.abs(x), Math.abs(g)) * 180) / Math.PI),
        (r.isScrolling = n.isHorizontal()
          ? P > i.touchAngle
          : 90 - P > i.touchAngle));
  }
  if (
    (r.isScrolling && n.emit("touchMoveOpposite", a),
    typeof r.startMoving > "u" &&
      (s.currentX !== s.startX || s.currentY !== s.startY) &&
      (r.startMoving = !0),
    r.isScrolling ||
      (a.type === "touchmove" && r.preventTouchMoveFromPointerMove))
  ) {
    r.isTouched = !1;
    return;
  }
  if (!r.startMoving) return;
  (n.allowClick = !1),
    !i.cssMode && a.cancelable && a.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && a.stopPropagation();
  let v = n.isHorizontal() ? g : x,
    y = n.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY;
  i.oneWayMovement &&
    ((v = Math.abs(v) * (l ? 1 : -1)), (y = Math.abs(y) * (l ? 1 : -1))),
    (s.diff = v),
    (v *= i.touchRatio),
    l && ((v = -v), (y = -y));
  const C = n.touchesDirection;
  (n.swipeDirection = v > 0 ? "prev" : "next"),
    (n.touchesDirection = y > 0 ? "prev" : "next");
  const c = n.params.loop && !i.cssMode,
    f =
      (n.touchesDirection === "next" && n.allowSlideNext) ||
      (n.touchesDirection === "prev" && n.allowSlidePrev);
  if (!r.isMoved) {
    if (
      (c && f && n.loopFix({ direction: n.swipeDirection }),
      (r.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const P = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 },
      });
      n.wrapperEl.dispatchEvent(P);
    }
    (r.allowMomentumBounce = !1),
      i.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", a);
  }
  let m;
  if (
    (new Date().getTime(),
    r.isMoved &&
      r.allowThresholdMove &&
      C !== n.touchesDirection &&
      c &&
      f &&
      Math.abs(v) >= 1)
  ) {
    Object.assign(s, {
      startX: d,
      startY: p,
      currentX: d,
      currentY: p,
      startTranslate: r.currentTranslate,
    }),
      (r.loopSwapReset = !0),
      (r.startTranslate = r.currentTranslate);
    return;
  }
  n.emit("sliderMove", a),
    (r.isMoved = !0),
    (r.currentTranslate = v + r.startTranslate);
  let w = !0,
    S = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (S = 0),
    v > 0
      ? (c &&
          f &&
          !m &&
          r.allowThresholdMove &&
          r.currentTranslate >
            (i.centeredSlides
              ? n.minTranslate() - n.slidesSizesGrid[n.activeIndex + 1]
              : n.minTranslate()) &&
          n.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        r.currentTranslate > n.minTranslate() &&
          ((w = !1),
          i.resistance &&
            (r.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + r.startTranslate + v) ** S)))
      : v < 0 &&
        (c &&
          f &&
          !m &&
          r.allowThresholdMove &&
          r.currentTranslate <
            (i.centeredSlides
              ? n.maxTranslate() +
                n.slidesSizesGrid[n.slidesSizesGrid.length - 1]
              : n.maxTranslate()) &&
          n.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (i.slidesPerView === "auto"
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(i.slidesPerView, 10))),
          }),
        r.currentTranslate < n.maxTranslate() &&
          ((w = !1),
          i.resistance &&
            (r.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - r.startTranslate - v) ** S))),
    w && (a.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === "next" &&
      r.currentTranslate < r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === "prev" &&
      r.currentTranslate > r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (r.currentTranslate = r.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(v) > i.threshold || r.allowThresholdMove) {
      if (!r.allowThresholdMove) {
        (r.allowThresholdMove = !0),
          (s.startX = s.currentX),
          (s.startY = s.currentY),
          (r.currentTranslate = r.startTranslate),
          (s.diff = n.isHorizontal()
            ? s.currentX - s.startX
            : s.currentY - s.startY);
        return;
      }
    } else {
      r.currentTranslate = r.startTranslate;
      return;
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
      i.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(r.currentTranslate),
    n.setTranslate(r.currentTranslate));
}
function f0(e) {
  const t = this,
    n = t.touchEventsData;
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  let i;
  if (r.type === "touchend" || r.type === "touchcancel") {
    if (
      ((i = [...r.changedTouches].filter((S) => S.identifier === n.touchId)[0]),
      !i || i.identifier !== n.touchId)
    )
      return;
  } else {
    if (n.touchId !== null || r.pointerId !== n.pointerId) return;
    i = r;
  }
  if (
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      r.type
    ) &&
    !(
      ["pointercancel", "contextmenu"].includes(r.type) &&
      (t.browser.isSafari || t.browser.isWebView)
    )
  )
    return;
  (n.pointerId = null), (n.touchId = null);
  const {
    params: l,
    touches: o,
    rtlTranslate: a,
    slidesGrid: u,
    enabled: d,
  } = t;
  if (!d || (!l.simulateTouch && r.pointerType === "mouse")) return;
  if (
    (n.allowTouchCallbacks && t.emit("touchEnd", r),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && l.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1);
    return;
  }
  l.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const p = Bi(),
    g = p - n.touchStartTime;
  if (t.allowClick) {
    const S = r.path || (r.composedPath && r.composedPath());
    t.updateClickedSlide((S && S[0]) || r.target, S),
      t.emit("tap click", r),
      g < 300 &&
        p - n.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", r);
  }
  if (
    ((n.lastClickTime = Bi()),
    Ql(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      (o.diff === 0 && !n.loopSwapReset) ||
      (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
  ) {
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
  let x;
  if (
    (l.followFinger
      ? (x = a ? t.translate : -t.translate)
      : (x = -n.currentTranslate),
    l.cssMode)
  )
    return;
  if (l.freeMode && l.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: x });
    return;
  }
  const v = x >= -t.maxTranslate() && !t.params.loop;
  let y = 0,
    C = t.slidesSizesGrid[0];
  for (
    let S = 0;
    S < u.length;
    S += S < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup
  ) {
    const P = S < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
    typeof u[S + P] < "u"
      ? (v || (x >= u[S] && x < u[S + P])) && ((y = S), (C = u[S + P] - u[S]))
      : (v || x >= u[S]) && ((y = S), (C = u[u.length - 1] - u[u.length - 2]));
  }
  let c = null,
    f = null;
  l.rewind &&
    (t.isBeginning
      ? (f =
          l.virtual && l.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (c = 0));
  const m = (x - u[y]) / C,
    w = y < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
  if (g > l.longSwipesMs) {
    if (!l.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" &&
      (m >= l.longSwipesRatio
        ? t.slideTo(l.rewind && t.isEnd ? c : y + w)
        : t.slideTo(y)),
      t.swipeDirection === "prev" &&
        (m > 1 - l.longSwipesRatio
          ? t.slideTo(y + w)
          : f !== null && m < 0 && Math.abs(m) > l.longSwipesRatio
          ? t.slideTo(f)
          : t.slideTo(y));
  } else {
    if (!l.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl)
      ? r.target === t.navigation.nextEl
        ? t.slideTo(y + w)
        : t.slideTo(y)
      : (t.swipeDirection === "next" && t.slideTo(c !== null ? c : y + w),
        t.swipeDirection === "prev" && t.slideTo(f !== null ? f : y));
  }
}
function wu() {
  const e = this,
    { params: t, el: n } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: r, allowSlidePrev: i, snapGrid: s } = e,
    l = e.virtual && e.params.virtual.enabled;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses();
  const o = l && t.loop;
  (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !o
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !l
    ? e.slideToLoop(e.realIndex, 0, !1, !0)
    : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
      (e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.resume();
      }, 500))),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = r),
    e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
}
function p0(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function m0() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
  if (!r) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let i;
  const s = e.maxTranslate() - e.minTranslate();
  s === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / s),
    i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1);
}
function h0(e) {
  const t = this;
  pi(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== "auto" && !t.params.autoHeight)
    ) && t.update();
}
function g0() {
  const e = this;
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0),
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
const nf = (e, t) => {
  const n = ct(),
    { params: r, el: i, wrapperEl: s, device: l } = e,
    o = !!r.nested,
    a = t === "on" ? "addEventListener" : "removeEventListener",
    u = t;
  !i ||
    typeof i == "string" ||
    (n[a]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: o }),
    i[a]("touchstart", e.onTouchStart, { passive: !1 }),
    i[a]("pointerdown", e.onTouchStart, { passive: !1 }),
    n[a]("touchmove", e.onTouchMove, { passive: !1, capture: o }),
    n[a]("pointermove", e.onTouchMove, { passive: !1, capture: o }),
    n[a]("touchend", e.onTouchEnd, { passive: !0 }),
    n[a]("pointerup", e.onTouchEnd, { passive: !0 }),
    n[a]("pointercancel", e.onTouchEnd, { passive: !0 }),
    n[a]("touchcancel", e.onTouchEnd, { passive: !0 }),
    n[a]("pointerout", e.onTouchEnd, { passive: !0 }),
    n[a]("pointerleave", e.onTouchEnd, { passive: !0 }),
    n[a]("contextmenu", e.onTouchEnd, { passive: !0 }),
    (r.preventClicks || r.preventClicksPropagation) &&
      i[a]("click", e.onClick, !0),
    r.cssMode && s[a]("scroll", e.onScroll),
    r.updateOnWindowResize
      ? e[u](
          l.ios || l.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          wu,
          !0
        )
      : e[u]("observerUpdate", wu, !0),
    i[a]("load", e.onLoad, { capture: !0 }));
};
function v0() {
  const e = this,
    { params: t } = e;
  (e.onTouchStart = c0.bind(e)),
    (e.onTouchMove = d0.bind(e)),
    (e.onTouchEnd = f0.bind(e)),
    (e.onDocumentTouchStart = g0.bind(e)),
    t.cssMode && (e.onScroll = m0.bind(e)),
    (e.onClick = p0.bind(e)),
    (e.onLoad = h0.bind(e)),
    nf(e, "on");
}
function x0() {
  nf(this, "off");
}
var y0 = { attachEvents: v0, detachEvents: x0 };
const Su = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function w0() {
  const e = this,
    { realIndex: t, initialized: n, params: r, el: i } = e,
    s = r.breakpoints;
  if (!s || (s && Object.keys(s).length === 0)) return;
  const l = e.getBreakpoint(s, e.params.breakpointsBase, e.el);
  if (!l || e.currentBreakpoint === l) return;
  const a = (l in s ? s[l] : void 0) || e.originalParams,
    u = Su(e, r),
    d = Su(e, a),
    p = e.params.grabCursor,
    g = a.grabCursor,
    x = r.enabled;
  u && !d
    ? (i.classList.remove(
        `${r.containerModifierClass}grid`,
        `${r.containerModifierClass}grid-column`
      ),
      e.emitContainerClasses())
    : !u &&
      d &&
      (i.classList.add(`${r.containerModifierClass}grid`),
      ((a.grid.fill && a.grid.fill === "column") ||
        (!a.grid.fill && r.grid.fill === "column")) &&
        i.classList.add(`${r.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    p && !g ? e.unsetGrabCursor() : !p && g && e.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach((m) => {
      if (typeof a[m] > "u") return;
      const w = r[m] && r[m].enabled,
        S = a[m] && a[m].enabled;
      w && !S && e[m].disable(), !w && S && e[m].enable();
    });
  const v = a.direction && a.direction !== r.direction,
    y = r.loop && (a.slidesPerView !== r.slidesPerView || v),
    C = r.loop;
  v && n && e.changeDirection(), Ae(e.params, a);
  const c = e.params.enabled,
    f = e.params.loop;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    x && !c ? e.disable() : !x && c && e.enable(),
    (e.currentBreakpoint = l),
    e.emit("_beforeBreakpoint", a),
    n &&
      (y
        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
        : !C && f
        ? (e.loopCreate(t), e.updateSlides())
        : C && !f && e.loopDestroy()),
    e.emit("breakpoint", a);
}
function S0(e, t, n) {
  if ((t === void 0 && (t = "window"), !e || (t === "container" && !n))) return;
  let r = !1;
  const i = Re(),
    s = t === "window" ? i.innerHeight : n.clientHeight,
    l = Object.keys(e).map((o) => {
      if (typeof o == "string" && o.indexOf("@") === 0) {
        const a = parseFloat(o.substr(1));
        return { value: s * a, point: o };
      }
      return { value: o, point: o };
    });
  l.sort((o, a) => parseInt(o.value, 10) - parseInt(a.value, 10));
  for (let o = 0; o < l.length; o += 1) {
    const { point: a, value: u } = l[o];
    t === "window"
      ? i.matchMedia(`(min-width: ${u}px)`).matches && (r = a)
      : u <= n.clientWidth && (r = a);
  }
  return r || "max";
}
var E0 = { setBreakpoint: w0, getBreakpoint: S0 };
function C0(e, t) {
  const n = [];
  return (
    e.forEach((r) => {
      typeof r == "object"
        ? Object.keys(r).forEach((i) => {
            r[i] && n.push(t + i);
          })
        : typeof r == "string" && n.push(t + r);
    }),
    n
  );
}
function T0() {
  const e = this,
    { classNames: t, params: n, rtl: r, el: i, device: s } = e,
    l = C0(
      [
        "initialized",
        n.direction,
        { "free-mode": e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: r },
        { grid: n.grid && n.grid.rows > 1 },
        {
          "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column",
        },
        { android: s.android },
        { ios: s.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass
    );
  t.push(...l), i.classList.add(...t), e.emitContainerClasses();
}
function k0() {
  const e = this,
    { el: t, classNames: n } = e;
  !t ||
    typeof t == "string" ||
    (t.classList.remove(...n), e.emitContainerClasses());
}
var P0 = { addClasses: T0, removeClasses: k0 };
function N0() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: r } = n;
  if (r) {
    const i = e.slides.length - 1,
      s = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
    e.isLocked = e.size > s;
  } else e.isLocked = e.snapGrid.length === 1;
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var A0 = { checkOverflow: N0 },
  Yl = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function j0(e, t) {
  return function (r) {
    r === void 0 && (r = {});
    const i = Object.keys(r)[0],
      s = r[i];
    if (typeof s != "object" || s === null) {
      Ae(t, r);
      return;
    }
    if (
      (e[i] === !0 && (e[i] = { enabled: !0 }),
      i === "navigation" &&
        e[i] &&
        e[i].enabled &&
        !e[i].prevEl &&
        !e[i].nextEl &&
        (e[i].auto = !0),
      ["pagination", "scrollbar"].indexOf(i) >= 0 &&
        e[i] &&
        e[i].enabled &&
        !e[i].el &&
        (e[i].auto = !0),
      !(i in e && "enabled" in s))
    ) {
      Ae(t, r);
      return;
    }
    typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0),
      e[i] || (e[i] = { enabled: !1 }),
      Ae(t, r);
  };
}
const qs = {
    eventsEmitter: Ph,
    update: Fh,
    translate: Vh,
    transition: Qh,
    slide: t0,
    loop: s0,
    grabCursor: a0,
    events: y0,
    breakpoints: E0,
    checkOverflow: A0,
    classes: P0,
  },
  Ks = {};
let ea = class it {
  constructor() {
    let t, n;
    for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++)
      i[s] = arguments[s];
    i.length === 1 &&
    i[0].constructor &&
    Object.prototype.toString.call(i[0]).slice(8, -1) === "Object"
      ? (n = i[0])
      : ([t, n] = i),
      n || (n = {}),
      (n = Ae({}, n)),
      t && !n.el && (n.el = t);
    const l = ct();
    if (
      n.el &&
      typeof n.el == "string" &&
      l.querySelectorAll(n.el).length > 1
    ) {
      const d = [];
      return (
        l.querySelectorAll(n.el).forEach((p) => {
          const g = Ae({}, n, { el: p });
          d.push(new it(g));
        }),
        d
      );
    }
    const o = this;
    (o.__swiper__ = !0),
      (o.support = Zd()),
      (o.device = ef({ userAgent: n.userAgent })),
      (o.browser = Ch()),
      (o.eventsListeners = {}),
      (o.eventsAnyListeners = []),
      (o.modules = [...o.__modules__]),
      n.modules && Array.isArray(n.modules) && o.modules.push(...n.modules);
    const a = {};
    o.modules.forEach((d) => {
      d({
        params: n,
        swiper: o,
        extendParams: j0(n, a),
        on: o.on.bind(o),
        once: o.once.bind(o),
        off: o.off.bind(o),
        emit: o.emit.bind(o),
      });
    });
    const u = Ae({}, Yl, a);
    return (
      (o.params = Ae({}, u, Ks, n)),
      (o.originalParams = Ae({}, o.params)),
      (o.passedParams = Ae({}, n)),
      o.params &&
        o.params.on &&
        Object.keys(o.params.on).forEach((d) => {
          o.on(d, o.params.on[d]);
        }),
      o.params && o.params.onAny && o.onAny(o.params.onAny),
      Object.assign(o, {
        enabled: o.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return o.params.direction === "horizontal";
        },
        isVertical() {
          return o.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: o.params.allowSlideNext,
        allowSlidePrev: o.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: o.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: o.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      o.emit("_swiper"),
      o.params.init && o.init(),
      o
    );
  }
  getDirectionLabel(t) {
    return this.isHorizontal()
      ? t
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[t];
  }
  getSlideIndex(t) {
    const { slidesEl: n, params: r } = this,
      i = et(n, `.${r.slideClass}, swiper-slide`),
      s = Vi(i[0]);
    return Vi(t) - s;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.filter(
        (n) => n.getAttribute("data-swiper-slide-index") * 1 === t
      )[0]
    );
  }
  recalcSlides() {
    const t = this,
      { slidesEl: n, params: r } = t;
    t.slides = et(n, `.${r.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit("disable"));
  }
  setProgress(t, n) {
    const r = this;
    t = Math.min(Math.max(t, 0), 1);
    const i = r.minTranslate(),
      l = (r.maxTranslate() - i) * t + i;
    r.translateTo(l, typeof n > "u" ? 0 : n),
      r.updateActiveIndex(),
      r.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className
      .split(" ")
      .filter(
        (r) =>
          r.indexOf("swiper") === 0 ||
          r.indexOf(t.params.containerModifierClass) === 0
      );
    t.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(t) {
    const n = this;
    return n.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter(
            (r) =>
              r.indexOf("swiper-slide") === 0 ||
              r.indexOf(n.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    t.slides.forEach((r) => {
      const i = t.getSlideClasses(r);
      n.push({ slideEl: r, classNames: i }), t.emit("_slideClass", r, i);
    }),
      t.emit("_slideClasses", n);
  }
  slidesPerViewDynamic(t, n) {
    t === void 0 && (t = "current"), n === void 0 && (n = !1);
    const r = this,
      {
        params: i,
        slides: s,
        slidesGrid: l,
        slidesSizesGrid: o,
        size: a,
        activeIndex: u,
      } = r;
    let d = 1;
    if (typeof i.slidesPerView == "number") return i.slidesPerView;
    if (i.centeredSlides) {
      let p = s[u] ? Math.ceil(s[u].swiperSlideSize) : 0,
        g;
      for (let x = u + 1; x < s.length; x += 1)
        s[x] &&
          !g &&
          ((p += Math.ceil(s[x].swiperSlideSize)), (d += 1), p > a && (g = !0));
      for (let x = u - 1; x >= 0; x -= 1)
        s[x] &&
          !g &&
          ((p += s[x].swiperSlideSize), (d += 1), p > a && (g = !0));
    } else if (t === "current")
      for (let p = u + 1; p < s.length; p += 1)
        (n ? l[p] + o[p] - l[u] < a : l[p] - l[u] < a) && (d += 1);
    else for (let p = u - 1; p >= 0; p -= 1) l[u] - l[p] < a && (d += 1);
    return d;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: n, params: r } = t;
    r.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((l) => {
        l.complete && pi(t, l);
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function i() {
      const l = t.rtlTranslate ? t.translate * -1 : t.translate,
        o = Math.min(Math.max(l, t.maxTranslate()), t.minTranslate());
      t.setTranslate(o), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let s;
    if (r.freeMode && r.freeMode.enabled && !r.cssMode)
      i(), r.autoHeight && t.updateAutoHeight();
    else {
      if (
        (r.slidesPerView === "auto" || r.slidesPerView > 1) &&
        t.isEnd &&
        !r.centeredSlides
      ) {
        const l = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
        s = t.slideTo(l.length - 1, 0, !1, !0);
      } else s = t.slideTo(t.activeIndex, 0, !1, !0);
      s || i();
    }
    r.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update");
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0);
    const r = this,
      i = r.params.direction;
    return (
      t || (t = i === "horizontal" ? "vertical" : "horizontal"),
      t === i ||
        (t !== "horizontal" && t !== "vertical") ||
        (r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
        r.el.classList.add(`${r.params.containerModifierClass}${t}`),
        r.emitContainerClasses(),
        (r.params.direction = t),
        r.slides.forEach((s) => {
          t === "vertical" ? (s.style.width = "") : (s.style.height = "");
        }),
        r.emit("changeDirection"),
        n && r.update()),
      r
    );
  }
  changeLanguageDirection(t) {
    const n = this;
    (n.rtl && t === "rtl") ||
      (!n.rtl && t === "ltr") ||
      ((n.rtl = t === "rtl"),
      (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "rtl"))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "ltr")),
      n.update());
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    let r = t || n.params.el;
    if ((typeof r == "string" && (r = document.querySelector(r)), !r))
      return !1;
    (r.swiper = n),
      r.parentNode &&
        r.parentNode.host &&
        r.parentNode.host.nodeName ===
          n.params.swiperElementNodeName.toUpperCase() &&
        (n.isElement = !0);
    const i = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let l =
      r && r.shadowRoot && r.shadowRoot.querySelector
        ? r.shadowRoot.querySelector(i())
        : et(r, i())[0];
    return (
      !l &&
        n.params.createElements &&
        ((l = Hi("div", n.params.wrapperClass)),
        r.append(l),
        et(r, `.${n.params.slideClass}`).forEach((o) => {
          l.append(o);
        })),
      Object.assign(n, {
        el: r,
        wrapperEl: l,
        slidesEl:
          n.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : l,
        hostEl: n.isElement ? r.parentNode.host : r,
        mounted: !0,
        rtl: r.dir.toLowerCase() === "rtl" || Tt(r, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (r.dir.toLowerCase() === "rtl" || Tt(r, "direction") === "rtl"),
        wrongRTL: Tt(l, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const n = this;
    if (n.initialized || n.mount(t) === !1) return n;
    n.emit("beforeInit"),
      n.params.breakpoints && n.setBreakpoint(),
      n.addClasses(),
      n.updateSize(),
      n.updateSlides(),
      n.params.watchOverflow && n.checkOverflow(),
      n.params.grabCursor && n.enabled && n.setGrabCursor(),
      n.params.loop && n.virtual && n.params.virtual.enabled
        ? n.slideTo(
            n.params.initialSlide + n.virtual.slidesBefore,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          )
        : n.slideTo(
            n.params.initialSlide,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          ),
      n.params.loop && n.loopCreate(),
      n.attachEvents();
    const i = [...n.el.querySelectorAll('[loading="lazy"]')];
    return (
      n.isElement && i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
      i.forEach((s) => {
        s.complete
          ? pi(n, s)
          : s.addEventListener("load", (l) => {
              pi(n, l.target);
            });
      }),
      Kl(n),
      (n.initialized = !0),
      Kl(n),
      n.emit("init"),
      n.emit("afterInit"),
      n
    );
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0);
    const r = this,
      { params: i, el: s, wrapperEl: l, slides: o } = r;
    return (
      typeof r.params > "u" ||
        r.destroyed ||
        (r.emit("beforeDestroy"),
        (r.initialized = !1),
        r.detachEvents(),
        i.loop && r.loopDestroy(),
        n &&
          (r.removeClasses(),
          s && typeof s != "string" && s.removeAttribute("style"),
          l && l.removeAttribute("style"),
          o &&
            o.length &&
            o.forEach((a) => {
              a.classList.remove(
                i.slideVisibleClass,
                i.slideFullyVisibleClass,
                i.slideActiveClass,
                i.slideNextClass,
                i.slidePrevClass
              ),
                a.removeAttribute("style"),
                a.removeAttribute("data-swiper-slide-index");
            })),
        r.emit("destroy"),
        Object.keys(r.eventsListeners).forEach((a) => {
          r.off(a);
        }),
        t !== !1 &&
          (r.el && typeof r.el != "string" && (r.el.swiper = null), mh(r)),
        (r.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    Ae(Ks, t);
  }
  static get extendedDefaults() {
    return Ks;
  }
  static get defaults() {
    return Yl;
  }
  static installModule(t) {
    it.prototype.__modules__ || (it.prototype.__modules__ = []);
    const n = it.prototype.__modules__;
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => it.installModule(n)), it)
      : (it.installModule(t), it);
  }
};
Object.keys(qs).forEach((e) => {
  Object.keys(qs[e]).forEach((t) => {
    ea.prototype[t] = qs[e][t];
  });
});
ea.use([Th, kh]);
const rf = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "swiperElementNodeName",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function Zt(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object" &&
    !e.__swiper__
  );
}
function Cn(e, t) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((r) => n.indexOf(r) < 0)
    .forEach((r) => {
      typeof e[r] > "u"
        ? (e[r] = t[r])
        : Zt(t[r]) && Zt(e[r]) && Object.keys(t[r]).length > 0
        ? t[r].__swiper__
          ? (e[r] = t[r])
          : Cn(e[r], t[r])
        : (e[r] = t[r]);
    });
}
function sf(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > "u" &&
      typeof e.navigation.prevEl > "u"
  );
}
function lf(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u";
}
function of(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u";
}
function af(e) {
  e === void 0 && (e = "");
  const t = e
      .split(" ")
      .map((r) => r.trim())
      .filter((r) => !!r),
    n = [];
  return (
    t.forEach((r) => {
      n.indexOf(r) < 0 && n.push(r);
    }),
    n.join(" ")
  );
}
function L0(e) {
  return (
    e === void 0 && (e = ""),
    e
      ? e.includes("swiper-wrapper")
        ? e
        : `swiper-wrapper ${e}`
      : "swiper-wrapper"
  );
}
function O0(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: r,
    changedParams: i,
    nextEl: s,
    prevEl: l,
    scrollbarEl: o,
    paginationEl: a,
  } = e;
  const u = i.filter(
      (L) => L !== "children" && L !== "direction" && L !== "wrapperClass"
    ),
    {
      params: d,
      pagination: p,
      navigation: g,
      scrollbar: x,
      virtual: v,
      thumbs: y,
    } = t;
  let C, c, f, m, w, S, P, j;
  i.includes("thumbs") &&
    r.thumbs &&
    r.thumbs.swiper &&
    d.thumbs &&
    !d.thumbs.swiper &&
    (C = !0),
    i.includes("controller") &&
      r.controller &&
      r.controller.control &&
      d.controller &&
      !d.controller.control &&
      (c = !0),
    i.includes("pagination") &&
      r.pagination &&
      (r.pagination.el || a) &&
      (d.pagination || d.pagination === !1) &&
      p &&
      !p.el &&
      (f = !0),
    i.includes("scrollbar") &&
      r.scrollbar &&
      (r.scrollbar.el || o) &&
      (d.scrollbar || d.scrollbar === !1) &&
      x &&
      !x.el &&
      (m = !0),
    i.includes("navigation") &&
      r.navigation &&
      (r.navigation.prevEl || l) &&
      (r.navigation.nextEl || s) &&
      (d.navigation || d.navigation === !1) &&
      g &&
      !g.prevEl &&
      !g.nextEl &&
      (w = !0);
  const k = (L) => {
    t[L] &&
      (t[L].destroy(),
      L === "navigation"
        ? (t.isElement && (t[L].prevEl.remove(), t[L].nextEl.remove()),
          (d[L].prevEl = void 0),
          (d[L].nextEl = void 0),
          (t[L].prevEl = void 0),
          (t[L].nextEl = void 0))
        : (t.isElement && t[L].el.remove(),
          (d[L].el = void 0),
          (t[L].el = void 0)));
  };
  i.includes("loop") &&
    t.isElement &&
    (d.loop && !r.loop ? (S = !0) : !d.loop && r.loop ? (P = !0) : (j = !0)),
    u.forEach((L) => {
      if (Zt(d[L]) && Zt(r[L]))
        Object.assign(d[L], r[L]),
          (L === "navigation" || L === "pagination" || L === "scrollbar") &&
            "enabled" in r[L] &&
            !r[L].enabled &&
            k(L);
      else {
        const T = r[L];
        (T === !0 || T === !1) &&
        (L === "navigation" || L === "pagination" || L === "scrollbar")
          ? T === !1 && k(L)
          : (d[L] = r[L]);
      }
    }),
    u.includes("controller") &&
      !c &&
      t.controller &&
      t.controller.control &&
      d.controller &&
      d.controller.control &&
      (t.controller.control = d.controller.control),
    i.includes("children") && n && v && d.virtual.enabled
      ? ((v.slides = n), v.update(!0))
      : i.includes("virtual") &&
        v &&
        d.virtual.enabled &&
        (n && (v.slides = n), v.update(!0)),
    i.includes("children") && n && d.loop && (j = !0),
    C && y.init() && y.update(!0),
    c && (t.controller.control = d.controller.control),
    f &&
      (t.isElement &&
        (!a || typeof a == "string") &&
        ((a = document.createElement("div")),
        a.classList.add("swiper-pagination"),
        a.part.add("pagination"),
        t.el.appendChild(a)),
      a && (d.pagination.el = a),
      p.init(),
      p.render(),
      p.update()),
    m &&
      (t.isElement &&
        (!o || typeof o == "string") &&
        ((o = document.createElement("div")),
        o.classList.add("swiper-scrollbar"),
        o.part.add("scrollbar"),
        t.el.appendChild(o)),
      o && (d.scrollbar.el = o),
      x.init(),
      x.updateSize(),
      x.setTranslate()),
    w &&
      (t.isElement &&
        ((!s || typeof s == "string") &&
          ((s = document.createElement("div")),
          s.classList.add("swiper-button-next"),
          (s.innerHTML = t.hostEl.constructor.nextButtonSvg),
          s.part.add("button-next"),
          t.el.appendChild(s)),
        (!l || typeof l == "string") &&
          ((l = document.createElement("div")),
          l.classList.add("swiper-button-prev"),
          (l.innerHTML = t.hostEl.constructor.prevButtonSvg),
          l.part.add("button-prev"),
          t.el.appendChild(l))),
      s && (d.navigation.nextEl = s),
      l && (d.navigation.prevEl = l),
      g.init(),
      g.update()),
    i.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext),
    i.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev),
    i.includes("direction") && t.changeDirection(r.direction, !1),
    (S || j) && t.loopDestroy(),
    (P || j) && t.loopCreate(),
    t.update();
}
function _0(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !0);
  const n = { on: {} },
    r = {},
    i = {};
  Cn(n, Yl), (n._emitClasses = !0), (n.init = !1);
  const s = {},
    l = rf.map((a) => a.replace(/_/, "")),
    o = Object.assign({}, e);
  return (
    Object.keys(o).forEach((a) => {
      typeof e[a] > "u" ||
        (l.indexOf(a) >= 0
          ? Zt(e[a])
            ? ((n[a] = {}), (i[a] = {}), Cn(n[a], e[a]), Cn(i[a], e[a]))
            : ((n[a] = e[a]), (i[a] = e[a]))
          : a.search(/on[A-Z]/) === 0 && typeof e[a] == "function"
          ? t
            ? (r[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
            : (n.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
          : (s[a] = e[a]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((a) => {
      n[a] === !0 && (n[a] = {}), n[a] === !1 && delete n[a];
    }),
    { params: n, passedParams: i, rest: s, events: r }
  );
}
function M0(e, t) {
  let {
    el: n,
    nextEl: r,
    prevEl: i,
    paginationEl: s,
    scrollbarEl: l,
    swiper: o,
  } = e;
  sf(t) &&
    r &&
    i &&
    ((o.params.navigation.nextEl = r),
    (o.originalParams.navigation.nextEl = r),
    (o.params.navigation.prevEl = i),
    (o.originalParams.navigation.prevEl = i)),
    lf(t) &&
      s &&
      ((o.params.pagination.el = s), (o.originalParams.pagination.el = s)),
    of(t) &&
      l &&
      ((o.params.scrollbar.el = l), (o.originalParams.scrollbar.el = l)),
    o.init(n);
}
function R0(e, t, n, r, i) {
  const s = [];
  if (!t) return s;
  const l = (a) => {
    s.indexOf(a) < 0 && s.push(a);
  };
  if (n && r) {
    const a = r.map(i),
      u = n.map(i);
    a.join("") !== u.join("") && l("children"),
      r.length !== n.length && l("children");
  }
  return (
    rf
      .filter((a) => a[0] === "_")
      .map((a) => a.replace(/_/, ""))
      .forEach((a) => {
        if (a in e && a in t)
          if (Zt(e[a]) && Zt(t[a])) {
            const u = Object.keys(e[a]),
              d = Object.keys(t[a]);
            u.length !== d.length
              ? l(a)
              : (u.forEach((p) => {
                  e[a][p] !== t[a][p] && l(a);
                }),
                d.forEach((p) => {
                  e[a][p] !== t[a][p] && l(a);
                }));
          } else e[a] !== t[a] && l(a);
      }),
    s
  );
}
const z0 = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate());
};
function $i() {
  return (
    ($i = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    $i.apply(this, arguments)
  );
}
function uf(e) {
  return (
    e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
  );
}
function cf(e) {
  const t = [];
  return (
    re.Children.toArray(e).forEach((n) => {
      uf(n)
        ? t.push(n)
        : n.props &&
          n.props.children &&
          cf(n.props.children).forEach((r) => t.push(r));
    }),
    t
  );
}
function I0(e) {
  const t = [],
    n = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    };
  return (
    re.Children.toArray(e).forEach((r) => {
      if (uf(r)) t.push(r);
      else if (r.props && r.props.slot && n[r.props.slot])
        n[r.props.slot].push(r);
      else if (r.props && r.props.children) {
        const i = cf(r.props.children);
        i.length > 0 ? i.forEach((s) => t.push(s)) : n["container-end"].push(r);
      } else n["container-end"].push(r);
    }),
    { slides: t, slots: n }
  );
}
function F0(e, t, n) {
  if (!n) return null;
  const r = (d) => {
      let p = d;
      return (
        d < 0 ? (p = t.length + d) : p >= t.length && (p = p - t.length), p
      );
    },
    i = e.isHorizontal()
      ? { [e.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: s, to: l } = n,
    o = e.params.loop ? -t.length : 0,
    a = e.params.loop ? t.length * 2 : t.length,
    u = [];
  for (let d = o; d < a; d += 1) d >= s && d <= l && u.push(t[r(d)]);
  return u.map((d, p) =>
    re.cloneElement(d, {
      swiper: e,
      style: i,
      key: d.props.virtualIndex || d.key || `slide-${p}`,
    })
  );
}
function sr(e, t) {
  return typeof window > "u" ? F.useEffect(e, t) : F.useLayoutEffect(e, t);
}
const Eu = F.createContext(null),
  D0 = F.createContext(null),
  jr = F.forwardRef(function (e, t) {
    let {
        className: n,
        tag: r = "div",
        wrapperTag: i = "div",
        children: s,
        onSwiper: l,
        ...o
      } = e === void 0 ? {} : e,
      a = !1;
    const [u, d] = F.useState("swiper"),
      [p, g] = F.useState(null),
      [x, v] = F.useState(!1),
      y = F.useRef(!1),
      C = F.useRef(null),
      c = F.useRef(null),
      f = F.useRef(null),
      m = F.useRef(null),
      w = F.useRef(null),
      S = F.useRef(null),
      P = F.useRef(null),
      j = F.useRef(null),
      { params: k, passedParams: L, rest: T, events: M } = _0(o),
      { slides: _, slots: O } = I0(s),
      D = () => {
        v(!x);
      };
    Object.assign(k.on, {
      _containerClasses(R, I) {
        d(I);
      },
    });
    const W = () => {
      Object.assign(k.on, M), (a = !0);
      const R = { ...k };
      if (
        (delete R.wrapperClass,
        (c.current = new ea(R)),
        c.current.virtual && c.current.params.virtual.enabled)
      ) {
        c.current.virtual.slides = _;
        const I = {
          cache: !1,
          slides: _,
          renderExternal: g,
          renderExternalUpdate: !1,
        };
        Cn(c.current.params.virtual, I),
          Cn(c.current.originalParams.virtual, I);
      }
    };
    C.current || W(), c.current && c.current.on("_beforeBreakpoint", D);
    const fe = () => {
        a ||
          !M ||
          !c.current ||
          Object.keys(M).forEach((R) => {
            c.current.on(R, M[R]);
          });
      },
      rt = () => {
        !M ||
          !c.current ||
          Object.keys(M).forEach((R) => {
            c.current.off(R, M[R]);
          });
      };
    F.useEffect(() => () => {
      c.current && c.current.off("_beforeBreakpoint", D);
    }),
      F.useEffect(() => {
        !y.current &&
          c.current &&
          (c.current.emitSlidesClasses(), (y.current = !0));
      }),
      sr(() => {
        if ((t && (t.current = C.current), !!C.current))
          return (
            c.current.destroyed && W(),
            M0(
              {
                el: C.current,
                nextEl: w.current,
                prevEl: S.current,
                paginationEl: P.current,
                scrollbarEl: j.current,
                swiper: c.current,
              },
              k
            ),
            l && !c.current.destroyed && l(c.current),
            () => {
              c.current && !c.current.destroyed && c.current.destroy(!0, !1);
            }
          );
      }, []),
      sr(() => {
        fe();
        const R = R0(L, f.current, _, m.current, (I) => I.key);
        return (
          (f.current = L),
          (m.current = _),
          R.length &&
            c.current &&
            !c.current.destroyed &&
            O0({
              swiper: c.current,
              slides: _,
              passedParams: L,
              changedParams: R,
              nextEl: w.current,
              prevEl: S.current,
              scrollbarEl: j.current,
              paginationEl: P.current,
            }),
          () => {
            rt();
          }
        );
      }),
      sr(() => {
        z0(c.current);
      }, [p]);
    function N() {
      return k.virtual
        ? F0(c.current, _, p)
        : _.map((R, I) =>
            re.cloneElement(R, { swiper: c.current, swiperSlideIndex: I })
          );
    }
    return re.createElement(
      r,
      $i({ ref: C, className: af(`${u}${n ? ` ${n}` : ""}`) }, T),
      re.createElement(
        D0.Provider,
        { value: c.current },
        O["container-start"],
        re.createElement(
          i,
          { className: L0(k.wrapperClass) },
          O["wrapper-start"],
          N(),
          O["wrapper-end"]
        ),
        sf(k) &&
          re.createElement(
            re.Fragment,
            null,
            re.createElement("div", {
              ref: S,
              className: "swiper-button-prev",
            }),
            re.createElement("div", { ref: w, className: "swiper-button-next" })
          ),
        of(k) &&
          re.createElement("div", { ref: j, className: "swiper-scrollbar" }),
        lf(k) &&
          re.createElement("div", { ref: P, className: "swiper-pagination" }),
        O["container-end"]
      )
    );
  });
jr.displayName = "Swiper";
const Lr = F.forwardRef(function (e, t) {
  let {
    tag: n = "div",
    children: r,
    className: i = "",
    swiper: s,
    zoom: l,
    lazy: o,
    virtualIndex: a,
    swiperSlideIndex: u,
    ...d
  } = e === void 0 ? {} : e;
  const p = F.useRef(null),
    [g, x] = F.useState("swiper-slide"),
    [v, y] = F.useState(!1);
  function C(w, S, P) {
    S === p.current && x(P);
  }
  sr(() => {
    if (
      (typeof u < "u" && (p.current.swiperSlideIndex = u),
      t && (t.current = p.current),
      !(!p.current || !s))
    ) {
      if (s.destroyed) {
        g !== "swiper-slide" && x("swiper-slide");
        return;
      }
      return (
        s.on("_slideClass", C),
        () => {
          s && s.off("_slideClass", C);
        }
      );
    }
  }),
    sr(() => {
      s && p.current && !s.destroyed && x(s.getSlideClasses(p.current));
    }, [s]);
  const c = {
      isActive: g.indexOf("swiper-slide-active") >= 0,
      isVisible: g.indexOf("swiper-slide-visible") >= 0,
      isPrev: g.indexOf("swiper-slide-prev") >= 0,
      isNext: g.indexOf("swiper-slide-next") >= 0,
    },
    f = () => (typeof r == "function" ? r(c) : r),
    m = () => {
      y(!0);
    };
  return re.createElement(
    n,
    $i(
      {
        ref: p,
        className: af(`${g}${i ? ` ${i}` : ""}`),
        "data-swiper-slide-index": a,
        onLoad: m,
      },
      d
    ),
    l &&
      re.createElement(
        Eu.Provider,
        { value: c },
        re.createElement(
          "div",
          {
            className: "swiper-zoom-container",
            "data-swiper-zoom": typeof l == "number" ? l : void 0,
          },
          f(),
          o &&
            !v &&
            re.createElement("div", { className: "swiper-lazy-preloader" })
        )
      ),
    !l &&
      re.createElement(
        Eu.Provider,
        { value: c },
        f(),
        o &&
          !v &&
          re.createElement("div", { className: "swiper-lazy-preloader" })
      )
  );
});
Lr.displayName = "SwiperSlide";
function df(e, t, n, r) {
  return (
    e.params.createElements &&
      Object.keys(r).forEach((i) => {
        if (!n[i] && n.auto === !0) {
          let s = et(e.el, `.${r[i]}`)[0];
          s || ((s = Hi("div", r[i])), (s.className = r[i]), e.el.append(s)),
            (n[i] = s),
            (t[i] = s);
        }
      }),
    n
  );
}
function us(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  n({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled",
    },
  }),
    (t.navigation = { nextEl: null, prevEl: null });
  function s(v) {
    let y;
    return v &&
      typeof v == "string" &&
      t.isElement &&
      ((y = t.el.querySelector(v)), y)
      ? y
      : (v &&
          (typeof v == "string" && (y = [...document.querySelectorAll(v)]),
          t.params.uniqueNavElements &&
          typeof v == "string" &&
          y &&
          y.length > 1 &&
          t.el.querySelectorAll(v).length === 1
            ? (y = t.el.querySelector(v))
            : y && y.length === 1 && (y = y[0])),
        v && !y ? v : y);
  }
  function l(v, y) {
    const C = t.params.navigation;
    (v = le(v)),
      v.forEach((c) => {
        c &&
          (c.classList[y ? "add" : "remove"](...C.disabledClass.split(" ")),
          c.tagName === "BUTTON" && (c.disabled = y),
          t.params.watchOverflow &&
            t.enabled &&
            c.classList[t.isLocked ? "add" : "remove"](C.lockClass));
      });
  }
  function o() {
    const { nextEl: v, prevEl: y } = t.navigation;
    if (t.params.loop) {
      l(y, !1), l(v, !1);
      return;
    }
    l(y, t.isBeginning && !t.params.rewind), l(v, t.isEnd && !t.params.rewind);
  }
  function a(v) {
    v.preventDefault(),
      !(t.isBeginning && !t.params.loop && !t.params.rewind) &&
        (t.slidePrev(), i("navigationPrev"));
  }
  function u(v) {
    v.preventDefault(),
      !(t.isEnd && !t.params.loop && !t.params.rewind) &&
        (t.slideNext(), i("navigationNext"));
  }
  function d() {
    const v = t.params.navigation;
    if (
      ((t.params.navigation = df(
        t,
        t.originalParams.navigation,
        t.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
      )),
      !(v.nextEl || v.prevEl))
    )
      return;
    let y = s(v.nextEl),
      C = s(v.prevEl);
    Object.assign(t.navigation, { nextEl: y, prevEl: C }),
      (y = le(y)),
      (C = le(C));
    const c = (f, m) => {
      f && f.addEventListener("click", m === "next" ? u : a),
        !t.enabled && f && f.classList.add(...v.lockClass.split(" "));
    };
    y.forEach((f) => c(f, "next")), C.forEach((f) => c(f, "prev"));
  }
  function p() {
    let { nextEl: v, prevEl: y } = t.navigation;
    (v = le(v)), (y = le(y));
    const C = (c, f) => {
      c.removeEventListener("click", f === "next" ? u : a),
        c.classList.remove(...t.params.navigation.disabledClass.split(" "));
    };
    v.forEach((c) => C(c, "next")), y.forEach((c) => C(c, "prev"));
  }
  r("init", () => {
    t.params.navigation.enabled === !1 ? x() : (d(), o());
  }),
    r("toEdge fromEdge lock unlock", () => {
      o();
    }),
    r("destroy", () => {
      p();
    }),
    r("enable disable", () => {
      let { nextEl: v, prevEl: y } = t.navigation;
      if (((v = le(v)), (y = le(y)), t.enabled)) {
        o();
        return;
      }
      [...v, ...y]
        .filter((C) => !!C)
        .forEach((C) => C.classList.add(t.params.navigation.lockClass));
    }),
    r("click", (v, y) => {
      let { nextEl: C, prevEl: c } = t.navigation;
      (C = le(C)), (c = le(c));
      const f = y.target;
      let m = c.includes(f) || C.includes(f);
      if (t.isElement && !m) {
        const w = y.path || (y.composedPath && y.composedPath());
        w && (m = w.find((S) => C.includes(S) || c.includes(S)));
      }
      if (t.params.navigation.hideOnClick && !m) {
        if (
          t.pagination &&
          t.params.pagination &&
          t.params.pagination.clickable &&
          (t.pagination.el === f || t.pagination.el.contains(f))
        )
          return;
        let w;
        C.length
          ? (w = C[0].classList.contains(t.params.navigation.hiddenClass))
          : c.length &&
            (w = c[0].classList.contains(t.params.navigation.hiddenClass)),
          i(w === !0 ? "navigationShow" : "navigationHide"),
          [...C, ...c]
            .filter((S) => !!S)
            .forEach((S) =>
              S.classList.toggle(t.params.navigation.hiddenClass)
            );
      }
    });
  const g = () => {
      t.el.classList.remove(
        ...t.params.navigation.navigationDisabledClass.split(" ")
      ),
        d(),
        o();
    },
    x = () => {
      t.el.classList.add(
        ...t.params.navigation.navigationDisabledClass.split(" ")
      ),
        p();
    };
  Object.assign(t.navigation, {
    enable: g,
    disable: x,
    update: o,
    init: d,
    destroy: p,
  });
}
function $n(e) {
  return (
    e === void 0 && (e = ""),
    `.${e
      .trim()
      .replace(/([\.:!+\/])/g, "\\$1")
      .replace(/ /g, ".")}`
  );
}
function ta(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  const s = "swiper-pagination";
  n({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (c) => c,
      formatFractionTotal: (c) => c,
      bulletClass: `${s}-bullet`,
      bulletActiveClass: `${s}-bullet-active`,
      modifierClass: `${s}-`,
      currentClass: `${s}-current`,
      totalClass: `${s}-total`,
      hiddenClass: `${s}-hidden`,
      progressbarFillClass: `${s}-progressbar-fill`,
      progressbarOppositeClass: `${s}-progressbar-opposite`,
      clickableClass: `${s}-clickable`,
      lockClass: `${s}-lock`,
      horizontalClass: `${s}-horizontal`,
      verticalClass: `${s}-vertical`,
      paginationDisabledClass: `${s}-disabled`,
    },
  }),
    (t.pagination = { el: null, bullets: [] });
  let l,
    o = 0;
  function a() {
    return (
      !t.params.pagination.el ||
      !t.pagination.el ||
      (Array.isArray(t.pagination.el) && t.pagination.el.length === 0)
    );
  }
  function u(c, f) {
    const { bulletActiveClass: m } = t.params.pagination;
    c &&
      ((c = c[`${f === "prev" ? "previous" : "next"}ElementSibling`]),
      c &&
        (c.classList.add(`${m}-${f}`),
        (c = c[`${f === "prev" ? "previous" : "next"}ElementSibling`]),
        c && c.classList.add(`${m}-${f}-${f}`)));
  }
  function d(c) {
    const f = c.target.closest($n(t.params.pagination.bulletClass));
    if (!f) return;
    c.preventDefault();
    const m = Vi(f) * t.params.slidesPerGroup;
    if (t.params.loop) {
      if (t.realIndex === m) return;
      t.slideToLoop(m);
    } else t.slideTo(m);
  }
  function p() {
    const c = t.rtl,
      f = t.params.pagination;
    if (a()) return;
    let m = t.pagination.el;
    m = le(m);
    let w, S;
    const P =
        t.virtual && t.params.virtual.enabled
          ? t.virtual.slides.length
          : t.slides.length,
      j = t.params.loop
        ? Math.ceil(P / t.params.slidesPerGroup)
        : t.snapGrid.length;
    if (
      (t.params.loop
        ? ((S = t.previousRealIndex || 0),
          (w =
            t.params.slidesPerGroup > 1
              ? Math.floor(t.realIndex / t.params.slidesPerGroup)
              : t.realIndex))
        : typeof t.snapIndex < "u"
        ? ((w = t.snapIndex), (S = t.previousSnapIndex))
        : ((S = t.previousIndex || 0), (w = t.activeIndex || 0)),
      f.type === "bullets" &&
        t.pagination.bullets &&
        t.pagination.bullets.length > 0)
    ) {
      const k = t.pagination.bullets;
      let L, T, M;
      if (
        (f.dynamicBullets &&
          ((l = ql(k[0], t.isHorizontal() ? "width" : "height")),
          m.forEach((_) => {
            _.style[t.isHorizontal() ? "width" : "height"] = `${
              l * (f.dynamicMainBullets + 4)
            }px`;
          }),
          f.dynamicMainBullets > 1 &&
            S !== void 0 &&
            ((o += w - (S || 0)),
            o > f.dynamicMainBullets - 1
              ? (o = f.dynamicMainBullets - 1)
              : o < 0 && (o = 0)),
          (L = Math.max(w - o, 0)),
          (T = L + (Math.min(k.length, f.dynamicMainBullets) - 1)),
          (M = (T + L) / 2)),
        k.forEach((_) => {
          const O = [
            ...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(
              (D) => `${f.bulletActiveClass}${D}`
            ),
          ]
            .map((D) =>
              typeof D == "string" && D.includes(" ") ? D.split(" ") : D
            )
            .flat();
          _.classList.remove(...O);
        }),
        m.length > 1)
      )
        k.forEach((_) => {
          const O = Vi(_);
          O === w
            ? _.classList.add(...f.bulletActiveClass.split(" "))
            : t.isElement && _.setAttribute("part", "bullet"),
            f.dynamicBullets &&
              (O >= L &&
                O <= T &&
                _.classList.add(...`${f.bulletActiveClass}-main`.split(" ")),
              O === L && u(_, "prev"),
              O === T && u(_, "next"));
        });
      else {
        const _ = k[w];
        if (
          (_ && _.classList.add(...f.bulletActiveClass.split(" ")),
          t.isElement &&
            k.forEach((O, D) => {
              O.setAttribute("part", D === w ? "bullet-active" : "bullet");
            }),
          f.dynamicBullets)
        ) {
          const O = k[L],
            D = k[T];
          for (let W = L; W <= T; W += 1)
            k[W] &&
              k[W].classList.add(...`${f.bulletActiveClass}-main`.split(" "));
          u(O, "prev"), u(D, "next");
        }
      }
      if (f.dynamicBullets) {
        const _ = Math.min(k.length, f.dynamicMainBullets + 4),
          O = (l * _ - l) / 2 - M * l,
          D = c ? "right" : "left";
        k.forEach((W) => {
          W.style[t.isHorizontal() ? D : "top"] = `${O}px`;
        });
      }
    }
    m.forEach((k, L) => {
      if (
        (f.type === "fraction" &&
          (k.querySelectorAll($n(f.currentClass)).forEach((T) => {
            T.textContent = f.formatFractionCurrent(w + 1);
          }),
          k.querySelectorAll($n(f.totalClass)).forEach((T) => {
            T.textContent = f.formatFractionTotal(j);
          })),
        f.type === "progressbar")
      ) {
        let T;
        f.progressbarOpposite
          ? (T = t.isHorizontal() ? "vertical" : "horizontal")
          : (T = t.isHorizontal() ? "horizontal" : "vertical");
        const M = (w + 1) / j;
        let _ = 1,
          O = 1;
        T === "horizontal" ? (_ = M) : (O = M),
          k.querySelectorAll($n(f.progressbarFillClass)).forEach((D) => {
            (D.style.transform = `translate3d(0,0,0) scaleX(${_}) scaleY(${O})`),
              (D.style.transitionDuration = `${t.params.speed}ms`);
          });
      }
      f.type === "custom" && f.renderCustom
        ? ((k.innerHTML = f.renderCustom(t, w + 1, j)),
          L === 0 && i("paginationRender", k))
        : (L === 0 && i("paginationRender", k), i("paginationUpdate", k)),
        t.params.watchOverflow &&
          t.enabled &&
          k.classList[t.isLocked ? "add" : "remove"](f.lockClass);
    });
  }
  function g() {
    const c = t.params.pagination;
    if (a()) return;
    const f =
      t.virtual && t.params.virtual.enabled
        ? t.virtual.slides.length
        : t.grid && t.params.grid.rows > 1
        ? t.slides.length / Math.ceil(t.params.grid.rows)
        : t.slides.length;
    let m = t.pagination.el;
    m = le(m);
    let w = "";
    if (c.type === "bullets") {
      let S = t.params.loop
        ? Math.ceil(f / t.params.slidesPerGroup)
        : t.snapGrid.length;
      t.params.freeMode && t.params.freeMode.enabled && S > f && (S = f);
      for (let P = 0; P < S; P += 1)
        c.renderBullet
          ? (w += c.renderBullet.call(t, P, c.bulletClass))
          : (w += `<${c.bulletElement} ${
              t.isElement ? 'part="bullet"' : ""
            } class="${c.bulletClass}"></${c.bulletElement}>`);
    }
    c.type === "fraction" &&
      (c.renderFraction
        ? (w = c.renderFraction.call(t, c.currentClass, c.totalClass))
        : (w = `<span class="${c.currentClass}"></span> / <span class="${c.totalClass}"></span>`)),
      c.type === "progressbar" &&
        (c.renderProgressbar
          ? (w = c.renderProgressbar.call(t, c.progressbarFillClass))
          : (w = `<span class="${c.progressbarFillClass}"></span>`)),
      (t.pagination.bullets = []),
      m.forEach((S) => {
        c.type !== "custom" && (S.innerHTML = w || ""),
          c.type === "bullets" &&
            t.pagination.bullets.push(...S.querySelectorAll($n(c.bulletClass)));
      }),
      c.type !== "custom" && i("paginationRender", m[0]);
  }
  function x() {
    t.params.pagination = df(
      t,
      t.originalParams.pagination,
      t.params.pagination,
      { el: "swiper-pagination" }
    );
    const c = t.params.pagination;
    if (!c.el) return;
    let f;
    typeof c.el == "string" && t.isElement && (f = t.el.querySelector(c.el)),
      !f &&
        typeof c.el == "string" &&
        (f = [...document.querySelectorAll(c.el)]),
      f || (f = c.el),
      !(!f || f.length === 0) &&
        (t.params.uniqueNavElements &&
          typeof c.el == "string" &&
          Array.isArray(f) &&
          f.length > 1 &&
          ((f = [...t.el.querySelectorAll(c.el)]),
          f.length > 1 &&
            (f = f.filter((m) => Jd(m, ".swiper")[0] === t.el)[0])),
        Array.isArray(f) && f.length === 1 && (f = f[0]),
        Object.assign(t.pagination, { el: f }),
        (f = le(f)),
        f.forEach((m) => {
          c.type === "bullets" &&
            c.clickable &&
            m.classList.add(...(c.clickableClass || "").split(" ")),
            m.classList.add(c.modifierClass + c.type),
            m.classList.add(
              t.isHorizontal() ? c.horizontalClass : c.verticalClass
            ),
            c.type === "bullets" &&
              c.dynamicBullets &&
              (m.classList.add(`${c.modifierClass}${c.type}-dynamic`),
              (o = 0),
              c.dynamicMainBullets < 1 && (c.dynamicMainBullets = 1)),
            c.type === "progressbar" &&
              c.progressbarOpposite &&
              m.classList.add(c.progressbarOppositeClass),
            c.clickable && m.addEventListener("click", d),
            t.enabled || m.classList.add(c.lockClass);
        }));
  }
  function v() {
    const c = t.params.pagination;
    if (a()) return;
    let f = t.pagination.el;
    f &&
      ((f = le(f)),
      f.forEach((m) => {
        m.classList.remove(c.hiddenClass),
          m.classList.remove(c.modifierClass + c.type),
          m.classList.remove(
            t.isHorizontal() ? c.horizontalClass : c.verticalClass
          ),
          c.clickable &&
            (m.classList.remove(...(c.clickableClass || "").split(" ")),
            m.removeEventListener("click", d));
      })),
      t.pagination.bullets &&
        t.pagination.bullets.forEach((m) =>
          m.classList.remove(...c.bulletActiveClass.split(" "))
        );
  }
  r("changeDirection", () => {
    if (!t.pagination || !t.pagination.el) return;
    const c = t.params.pagination;
    let { el: f } = t.pagination;
    (f = le(f)),
      f.forEach((m) => {
        m.classList.remove(c.horizontalClass, c.verticalClass),
          m.classList.add(
            t.isHorizontal() ? c.horizontalClass : c.verticalClass
          );
      });
  }),
    r("init", () => {
      t.params.pagination.enabled === !1 ? C() : (x(), g(), p());
    }),
    r("activeIndexChange", () => {
      typeof t.snapIndex > "u" && p();
    }),
    r("snapIndexChange", () => {
      p();
    }),
    r("snapGridLengthChange", () => {
      g(), p();
    }),
    r("destroy", () => {
      v();
    }),
    r("enable disable", () => {
      let { el: c } = t.pagination;
      c &&
        ((c = le(c)),
        c.forEach((f) =>
          f.classList[t.enabled ? "remove" : "add"](
            t.params.pagination.lockClass
          )
        ));
    }),
    r("lock unlock", () => {
      p();
    }),
    r("click", (c, f) => {
      const m = f.target,
        w = le(t.pagination.el);
      if (
        t.params.pagination.el &&
        t.params.pagination.hideOnClick &&
        w &&
        w.length > 0 &&
        !m.classList.contains(t.params.pagination.bulletClass)
      ) {
        if (
          t.navigation &&
          ((t.navigation.nextEl && m === t.navigation.nextEl) ||
            (t.navigation.prevEl && m === t.navigation.prevEl))
        )
          return;
        const S = w[0].classList.contains(t.params.pagination.hiddenClass);
        i(S === !0 ? "paginationShow" : "paginationHide"),
          w.forEach((P) => P.classList.toggle(t.params.pagination.hiddenClass));
      }
    });
  const y = () => {
      t.el.classList.remove(t.params.pagination.paginationDisabledClass);
      let { el: c } = t.pagination;
      c &&
        ((c = le(c)),
        c.forEach((f) =>
          f.classList.remove(t.params.pagination.paginationDisabledClass)
        )),
        x(),
        g(),
        p();
    },
    C = () => {
      t.el.classList.add(t.params.pagination.paginationDisabledClass);
      let { el: c } = t.pagination;
      c &&
        ((c = le(c)),
        c.forEach((f) =>
          f.classList.add(t.params.pagination.paginationDisabledClass)
        )),
        v();
    };
  Object.assign(t.pagination, {
    enable: y,
    disable: C,
    render: g,
    update: p,
    init: x,
    destroy: v,
  });
}
function cs(e) {
  let { swiper: t, extendParams: n, on: r, emit: i, params: s } = e;
  (t.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
    n({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !1,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1,
      },
    });
  let l,
    o,
    a = s && s.autoplay ? s.autoplay.delay : 3e3,
    u = s && s.autoplay ? s.autoplay.delay : 3e3,
    d,
    p = new Date().getTime(),
    g,
    x,
    v,
    y,
    C,
    c,
    f;
  function m(N) {
    !t ||
      t.destroyed ||
      !t.wrapperEl ||
      (N.target === t.wrapperEl &&
        (t.wrapperEl.removeEventListener("transitionend", m),
        !(f || (N.detail && N.detail.bySwiperTouchMove)) && T()));
  }
  const w = () => {
      if (t.destroyed || !t.autoplay.running) return;
      t.autoplay.paused ? (g = !0) : g && ((u = d), (g = !1));
      const N = t.autoplay.paused ? d : p + u - new Date().getTime();
      (t.autoplay.timeLeft = N),
        i("autoplayTimeLeft", N, N / a),
        (o = requestAnimationFrame(() => {
          w();
        }));
    },
    S = () => {
      let N;
      return (
        t.virtual && t.params.virtual.enabled
          ? (N = t.slides.filter((I) =>
              I.classList.contains("swiper-slide-active")
            )[0])
          : (N = t.slides[t.activeIndex]),
        N ? parseInt(N.getAttribute("data-swiper-autoplay"), 10) : void 0
      );
    },
    P = (N) => {
      if (t.destroyed || !t.autoplay.running) return;
      cancelAnimationFrame(o), w();
      let R = typeof N > "u" ? t.params.autoplay.delay : N;
      (a = t.params.autoplay.delay), (u = t.params.autoplay.delay);
      const I = S();
      !Number.isNaN(I) &&
        I > 0 &&
        typeof N > "u" &&
        ((R = I), (a = I), (u = I)),
        (d = R);
      const V = t.params.speed,
        Y = () => {
          !t ||
            t.destroyed ||
            (t.params.autoplay.reverseDirection
              ? !t.isBeginning || t.params.loop || t.params.rewind
                ? (t.slidePrev(V, !0, !0), i("autoplay"))
                : t.params.autoplay.stopOnLastSlide ||
                  (t.slideTo(t.slides.length - 1, V, !0, !0), i("autoplay"))
              : !t.isEnd || t.params.loop || t.params.rewind
              ? (t.slideNext(V, !0, !0), i("autoplay"))
              : t.params.autoplay.stopOnLastSlide ||
                (t.slideTo(0, V, !0, !0), i("autoplay")),
            t.params.cssMode &&
              ((p = new Date().getTime()),
              requestAnimationFrame(() => {
                P();
              })));
        };
      return (
        R > 0
          ? (clearTimeout(l),
            (l = setTimeout(() => {
              Y();
            }, R)))
          : requestAnimationFrame(() => {
              Y();
            }),
        R
      );
    },
    j = () => {
      (p = new Date().getTime()),
        (t.autoplay.running = !0),
        P(),
        i("autoplayStart");
    },
    k = () => {
      (t.autoplay.running = !1),
        clearTimeout(l),
        cancelAnimationFrame(o),
        i("autoplayStop");
    },
    L = (N, R) => {
      if (t.destroyed || !t.autoplay.running) return;
      clearTimeout(l), N || (c = !0);
      const I = () => {
        i("autoplayPause"),
          t.params.autoplay.waitForTransition
            ? t.wrapperEl.addEventListener("transitionend", m)
            : T();
      };
      if (((t.autoplay.paused = !0), R)) {
        C && (d = t.params.autoplay.delay), (C = !1), I();
        return;
      }
      (d = (d || t.params.autoplay.delay) - (new Date().getTime() - p)),
        !(t.isEnd && d < 0 && !t.params.loop) && (d < 0 && (d = 0), I());
    },
    T = () => {
      (t.isEnd && d < 0 && !t.params.loop) ||
        t.destroyed ||
        !t.autoplay.running ||
        ((p = new Date().getTime()),
        c ? ((c = !1), P(d)) : P(),
        (t.autoplay.paused = !1),
        i("autoplayResume"));
    },
    M = () => {
      if (t.destroyed || !t.autoplay.running) return;
      const N = ct();
      N.visibilityState === "hidden" && ((c = !0), L(!0)),
        N.visibilityState === "visible" && T();
    },
    _ = (N) => {
      N.pointerType === "mouse" &&
        ((c = !0), (f = !0), !(t.animating || t.autoplay.paused) && L(!0));
    },
    O = (N) => {
      N.pointerType === "mouse" && ((f = !1), t.autoplay.paused && T());
    },
    D = () => {
      t.params.autoplay.pauseOnMouseEnter &&
        (t.el.addEventListener("pointerenter", _),
        t.el.addEventListener("pointerleave", O));
    },
    W = () => {
      t.el &&
        typeof t.el != "string" &&
        (t.el.removeEventListener("pointerenter", _),
        t.el.removeEventListener("pointerleave", O));
    },
    fe = () => {
      ct().addEventListener("visibilitychange", M);
    },
    rt = () => {
      ct().removeEventListener("visibilitychange", M);
    };
  r("init", () => {
    t.params.autoplay.enabled && (D(), fe(), j());
  }),
    r("destroy", () => {
      W(), rt(), t.autoplay.running && k();
    }),
    r("_freeModeStaticRelease", () => {
      (v || c) && T();
    }),
    r("_freeModeNoMomentumRelease", () => {
      t.params.autoplay.disableOnInteraction ? k() : L(!0, !0);
    }),
    r("beforeTransitionStart", (N, R, I) => {
      t.destroyed ||
        !t.autoplay.running ||
        (I || !t.params.autoplay.disableOnInteraction ? L(!0, !0) : k());
    }),
    r("sliderFirstMove", () => {
      if (!(t.destroyed || !t.autoplay.running)) {
        if (t.params.autoplay.disableOnInteraction) {
          k();
          return;
        }
        (x = !0),
          (v = !1),
          (c = !1),
          (y = setTimeout(() => {
            (c = !0), (v = !0), L(!0);
          }, 200));
      }
    }),
    r("touchEnd", () => {
      if (!(t.destroyed || !t.autoplay.running || !x)) {
        if (
          (clearTimeout(y),
          clearTimeout(l),
          t.params.autoplay.disableOnInteraction)
        ) {
          (v = !1), (x = !1);
          return;
        }
        v && t.params.cssMode && T(), (v = !1), (x = !1);
      }
    }),
    r("slideChange", () => {
      t.destroyed || !t.autoplay.running || (C = !0);
    }),
    Object.assign(t.autoplay, { start: j, stop: k, pause: L, resume: T });
}
const na =
  "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20width='40px'%20height='40px'%20%3e%3cpath%20fill='%233C592C'%20d='M7.5%200.5A7%207%200%201%200%207.5%2014.5A7%207%200%201%200%207.5%200.5Z'/%3e%3cpath%20fill='none'%20d='M7.5,1C11.1,1,14,3.9,14,7.5S11.1,14,7.5,14S1,11.1,1,7.5S3.9,1,7.5,1%20M7.5,0C3.4,0,0,3.4,0,7.5%20S3.4,15,7.5,15S15,11.6,15,7.5S11.6,0,7.5,0L7.5,0z'/%3e%3cpath%20fill='%231FA95A'%20d='M6.3%2010.5L3.7%207.9%204.4%207.2%206.3%209.1%2011.2%204.3%2011.9%205z'/%3e%3c/svg%3e";
function ff(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: b0 } = Object.prototype,
  { getPrototypeOf: ra } = Object,
  ds = ((e) => (t) => {
    const n = b0.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Ye = (e) => ((e = e.toLowerCase()), (t) => ds(t) === e),
  fs = (e) => (t) => typeof t === e,
  { isArray: Rn } = Array,
  Cr = fs("undefined");
function B0(e) {
  return (
    e !== null &&
    !Cr(e) &&
    e.constructor !== null &&
    !Cr(e.constructor) &&
    be(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const pf = Ye("ArrayBuffer");
function U0(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && pf(e.buffer)),
    t
  );
}
const H0 = fs("string"),
  be = fs("function"),
  mf = fs("number"),
  ps = (e) => e !== null && typeof e == "object",
  V0 = (e) => e === !0 || e === !1,
  mi = (e) => {
    if (ds(e) !== "object") return !1;
    const t = ra(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  $0 = Ye("Date"),
  W0 = Ye("File"),
  G0 = Ye("Blob"),
  Q0 = Ye("FileList"),
  q0 = (e) => ps(e) && be(e.pipe),
  K0 = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (be(e.append) &&
          ((t = ds(e)) === "formdata" ||
            (t === "object" &&
              be(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  Y0 = Ye("URLSearchParams"),
  [X0, J0, Z0, eg] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Ye
  ),
  tg = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Or(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, i;
  if ((typeof e != "object" && (e = [e]), Rn(e)))
    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      l = s.length;
    let o;
    for (r = 0; r < l; r++) (o = s[r]), t.call(null, e[o], o, e);
  }
}
function hf(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    i;
  for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
  return null;
}
const gf =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  vf = (e) => !Cr(e) && e !== gf;
function Xl() {
  const { caseless: e } = (vf(this) && this) || {},
    t = {},
    n = (r, i) => {
      const s = (e && hf(t, i)) || i;
      mi(t[s]) && mi(r)
        ? (t[s] = Xl(t[s], r))
        : mi(r)
        ? (t[s] = Xl({}, r))
        : Rn(r)
        ? (t[s] = r.slice())
        : (t[s] = r);
    };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && Or(arguments[r], n);
  return t;
}
const ng = (e, t, n, { allOwnKeys: r } = {}) => (
    Or(
      t,
      (i, s) => {
        n && be(i) ? (e[s] = ff(i, n)) : (e[s] = i);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  rg = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  ig = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  sg = (e, t, n, r) => {
    let i, s, l;
    const o = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), s = i.length; s-- > 0; )
        (l = i[s]), (!r || r(l, e, t)) && !o[l] && ((t[l] = e[l]), (o[l] = !0));
      e = n !== !1 && ra(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  lg = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  og = (e) => {
    if (!e) return null;
    if (Rn(e)) return e;
    let t = e.length;
    if (!mf(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  ag = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && ra(Uint8Array)),
  ug = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
      const s = i.value;
      t.call(e, s[0], s[1]);
    }
  },
  cg = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  dg = Ye("HTMLFormElement"),
  fg = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
      return r.toUpperCase() + i;
    }),
  Cu = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  pg = Ye("RegExp"),
  xf = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Or(n, (i, s) => {
      let l;
      (l = t(i, s, e)) !== !1 && (r[s] = l || i);
    }),
      Object.defineProperties(e, r);
  },
  mg = (e) => {
    xf(e, (t, n) => {
      if (be(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (be(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  hg = (e, t) => {
    const n = {},
      r = (i) => {
        i.forEach((s) => {
          n[s] = !0;
        });
      };
    return Rn(e) ? r(e) : r(String(e).split(t)), n;
  },
  gg = () => {},
  vg = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  Ys = "abcdefghijklmnopqrstuvwxyz",
  Tu = "0123456789",
  yf = { DIGIT: Tu, ALPHA: Ys, ALPHA_DIGIT: Ys + Ys.toUpperCase() + Tu },
  xg = (e = 16, t = yf.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function yg(e) {
  return !!(
    e &&
    be(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const wg = (e) => {
    const t = new Array(10),
      n = (r, i) => {
        if (ps(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[i] = r;
            const s = Rn(r) ? [] : {};
            return (
              Or(r, (l, o) => {
                const a = n(l, i + 1);
                !Cr(a) && (s[o] = a);
              }),
              (t[i] = void 0),
              s
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  Sg = Ye("AsyncFunction"),
  Eg = (e) => e && (ps(e) || be(e)) && be(e.then) && be(e.catch),
  E = {
    isArray: Rn,
    isArrayBuffer: pf,
    isBuffer: B0,
    isFormData: K0,
    isArrayBufferView: U0,
    isString: H0,
    isNumber: mf,
    isBoolean: V0,
    isObject: ps,
    isPlainObject: mi,
    isReadableStream: X0,
    isRequest: J0,
    isResponse: Z0,
    isHeaders: eg,
    isUndefined: Cr,
    isDate: $0,
    isFile: W0,
    isBlob: G0,
    isRegExp: pg,
    isFunction: be,
    isStream: q0,
    isURLSearchParams: Y0,
    isTypedArray: ag,
    isFileList: Q0,
    forEach: Or,
    merge: Xl,
    extend: ng,
    trim: tg,
    stripBOM: rg,
    inherits: ig,
    toFlatObject: sg,
    kindOf: ds,
    kindOfTest: Ye,
    endsWith: lg,
    toArray: og,
    forEachEntry: ug,
    matchAll: cg,
    isHTMLForm: dg,
    hasOwnProperty: Cu,
    hasOwnProp: Cu,
    reduceDescriptors: xf,
    freezeMethods: mg,
    toObjectSet: hg,
    toCamelCase: fg,
    noop: gg,
    toFiniteNumber: vg,
    findKey: hf,
    global: gf,
    isContextDefined: vf,
    ALPHABET: yf,
    generateString: xg,
    isSpecCompliantForm: yg,
    toJSONObject: wg,
    isAsyncFn: Sg,
    isThenable: Eg,
  };
function b(e, t, n, r, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && (this.response = i);
}
E.inherits(b, Error, {
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
      config: E.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const wf = b.prototype,
  Sf = {};
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
  Sf[e] = { value: e };
});
Object.defineProperties(b, Sf);
Object.defineProperty(wf, "isAxiosError", { value: !0 });
b.from = (e, t, n, r, i, s) => {
  const l = Object.create(wf);
  return (
    E.toFlatObject(
      e,
      l,
      function (a) {
        return a !== Error.prototype;
      },
      (o) => o !== "isAxiosError"
    ),
    b.call(l, e.message, t, n, r, i),
    (l.cause = e),
    (l.name = e.name),
    s && Object.assign(l, s),
    l
  );
};
const Cg = null;
function Jl(e) {
  return E.isPlainObject(e) || E.isArray(e);
}
function Ef(e) {
  return E.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ku(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (i, s) {
          return (i = Ef(i)), !n && s ? "[" + i + "]" : i;
        })
        .join(n ? "." : "")
    : t;
}
function Tg(e) {
  return E.isArray(e) && !e.some(Jl);
}
const kg = E.toFlatObject(E, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function ms(e, t, n) {
  if (!E.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = E.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (y, C) {
        return !E.isUndefined(C[y]);
      }
    ));
  const r = n.metaTokens,
    i = n.visitor || d,
    s = n.dots,
    l = n.indexes,
    a = (n.Blob || (typeof Blob < "u" && Blob)) && E.isSpecCompliantForm(t);
  if (!E.isFunction(i)) throw new TypeError("visitor must be a function");
  function u(v) {
    if (v === null) return "";
    if (E.isDate(v)) return v.toISOString();
    if (!a && E.isBlob(v))
      throw new b("Blob is not supported. Use a Buffer instead.");
    return E.isArrayBuffer(v) || E.isTypedArray(v)
      ? a && typeof Blob == "function"
        ? new Blob([v])
        : Buffer.from(v)
      : v;
  }
  function d(v, y, C) {
    let c = v;
    if (v && !C && typeof v == "object") {
      if (E.endsWith(y, "{}"))
        (y = r ? y : y.slice(0, -2)), (v = JSON.stringify(v));
      else if (
        (E.isArray(v) && Tg(v)) ||
        ((E.isFileList(v) || E.endsWith(y, "[]")) && (c = E.toArray(v)))
      )
        return (
          (y = Ef(y)),
          c.forEach(function (m, w) {
            !(E.isUndefined(m) || m === null) &&
              t.append(
                l === !0 ? ku([y], w, s) : l === null ? y : y + "[]",
                u(m)
              );
          }),
          !1
        );
    }
    return Jl(v) ? !0 : (t.append(ku(C, y, s), u(v)), !1);
  }
  const p = [],
    g = Object.assign(kg, {
      defaultVisitor: d,
      convertValue: u,
      isVisitable: Jl,
    });
  function x(v, y) {
    if (!E.isUndefined(v)) {
      if (p.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      p.push(v),
        E.forEach(v, function (c, f) {
          (!(E.isUndefined(c) || c === null) &&
            i.call(t, c, E.isString(f) ? f.trim() : f, y, g)) === !0 &&
            x(c, y ? y.concat(f) : [f]);
        }),
        p.pop();
    }
  }
  if (!E.isObject(e)) throw new TypeError("data must be an object");
  return x(e), t;
}
function Pu(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function ia(e, t) {
  (this._pairs = []), e && ms(e, this, t);
}
const Cf = ia.prototype;
Cf.append = function (t, n) {
  this._pairs.push([t, n]);
};
Cf.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Pu);
      }
    : Pu;
  return this._pairs
    .map(function (i) {
      return n(i[0]) + "=" + n(i[1]);
    }, "")
    .join("&");
};
function Pg(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Tf(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || Pg,
    i = n && n.serialize;
  let s;
  if (
    (i
      ? (s = i(t, n))
      : (s = E.isURLSearchParams(t) ? t.toString() : new ia(t, n).toString(r)),
    s)
  ) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + s);
  }
  return e;
}
class Nu {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
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
    E.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const kf = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Ng = typeof URLSearchParams < "u" ? URLSearchParams : ia,
  Ag = typeof FormData < "u" ? FormData : null,
  jg = typeof Blob < "u" ? Blob : null,
  Lg = {
    isBrowser: !0,
    classes: { URLSearchParams: Ng, FormData: Ag, Blob: jg },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  sa = typeof window < "u" && typeof document < "u",
  Og = ((e) => sa && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  _g =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  Mg = (sa && window.location.href) || "http://localhost",
  Rg = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: sa,
        hasStandardBrowserEnv: Og,
        hasStandardBrowserWebWorkerEnv: _g,
        origin: Mg,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  qe = { ...Rg, ...Lg };
function zg(e, t) {
  return ms(
    e,
    new qe.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, i, s) {
          return qe.isNode && E.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : s.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function Ig(e) {
  return E.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function Fg(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const i = n.length;
  let s;
  for (r = 0; r < i; r++) (s = n[r]), (t[s] = e[s]);
  return t;
}
function Pf(e) {
  function t(n, r, i, s) {
    let l = n[s++];
    if (l === "__proto__") return !0;
    const o = Number.isFinite(+l),
      a = s >= n.length;
    return (
      (l = !l && E.isArray(i) ? i.length : l),
      a
        ? (E.hasOwnProp(i, l) ? (i[l] = [i[l], r]) : (i[l] = r), !o)
        : ((!i[l] || !E.isObject(i[l])) && (i[l] = []),
          t(n, r, i[l], s) && E.isArray(i[l]) && (i[l] = Fg(i[l])),
          !o)
    );
  }
  if (E.isFormData(e) && E.isFunction(e.entries)) {
    const n = {};
    return (
      E.forEachEntry(e, (r, i) => {
        t(Ig(r), i, n, 0);
      }),
      n
    );
  }
  return null;
}
function Dg(e, t, n) {
  if (E.isString(e))
    try {
      return (t || JSON.parse)(e), E.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const _r = {
  transitional: kf,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        i = r.indexOf("application/json") > -1,
        s = E.isObject(t);
      if ((s && E.isHTMLForm(t) && (t = new FormData(t)), E.isFormData(t)))
        return i ? JSON.stringify(Pf(t)) : t;
      if (
        E.isArrayBuffer(t) ||
        E.isBuffer(t) ||
        E.isStream(t) ||
        E.isFile(t) ||
        E.isBlob(t) ||
        E.isReadableStream(t)
      )
        return t;
      if (E.isArrayBufferView(t)) return t.buffer;
      if (E.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let o;
      if (s) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return zg(t, this.formSerializer).toString();
        if ((o = E.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const a = this.env && this.env.FormData;
          return ms(
            o ? { "files[]": t } : t,
            a && new a(),
            this.formSerializer
          );
        }
      }
      return s || i ? (n.setContentType("application/json", !1), Dg(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || _r.transitional,
        r = n && n.forcedJSONParsing,
        i = this.responseType === "json";
      if (E.isResponse(t) || E.isReadableStream(t)) return t;
      if (t && E.isString(t) && ((r && !this.responseType) || i)) {
        const l = !(n && n.silentJSONParsing) && i;
        try {
          return JSON.parse(t);
        } catch (o) {
          if (l)
            throw o.name === "SyntaxError"
              ? b.from(o, b.ERR_BAD_RESPONSE, this, null, this.response)
              : o;
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
  env: { FormData: qe.classes.FormData, Blob: qe.classes.Blob },
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
E.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  _r.headers[e] = {};
});
const bg = E.toObjectSet([
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
  Bg = (e) => {
    const t = {};
    let n, r, i;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (l) {
            (i = l.indexOf(":")),
              (n = l.substring(0, i).trim().toLowerCase()),
              (r = l.substring(i + 1).trim()),
              !(!n || (t[n] && bg[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Au = Symbol("internals");
function Wn(e) {
  return e && String(e).trim().toLowerCase();
}
function hi(e) {
  return e === !1 || e == null ? e : E.isArray(e) ? e.map(hi) : String(e);
}
function Ug(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const Hg = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Xs(e, t, n, r, i) {
  if (E.isFunction(r)) return r.call(this, t, n);
  if ((i && (t = n), !!E.isString(t))) {
    if (E.isString(r)) return t.indexOf(r) !== -1;
    if (E.isRegExp(r)) return r.test(t);
  }
}
function Vg(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function $g(e, t) {
  const n = E.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (i, s, l) {
        return this[r].call(this, t, i, s, l);
      },
      configurable: !0,
    });
  });
}
class Pe {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function s(o, a, u) {
      const d = Wn(a);
      if (!d) throw new Error("header name must be a non-empty string");
      const p = E.findKey(i, d);
      (!p || i[p] === void 0 || u === !0 || (u === void 0 && i[p] !== !1)) &&
        (i[p || a] = hi(o));
    }
    const l = (o, a) => E.forEach(o, (u, d) => s(u, d, a));
    if (E.isPlainObject(t) || t instanceof this.constructor) l(t, n);
    else if (E.isString(t) && (t = t.trim()) && !Hg(t)) l(Bg(t), n);
    else if (E.isHeaders(t)) for (const [o, a] of t.entries()) s(a, o, r);
    else t != null && s(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = Wn(t)), t)) {
      const r = E.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n) return i;
        if (n === !0) return Ug(i);
        if (E.isFunction(n)) return n.call(this, i, r);
        if (E.isRegExp(n)) return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Wn(t)), t)) {
      const r = E.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Xs(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function s(l) {
      if (((l = Wn(l)), l)) {
        const o = E.findKey(r, l);
        o && (!n || Xs(r, r[o], o, n)) && (delete r[o], (i = !0));
      }
    }
    return E.isArray(t) ? t.forEach(s) : s(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      i = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || Xs(this, this[s], s, t, !0)) && (delete this[s], (i = !0));
    }
    return i;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      E.forEach(this, (i, s) => {
        const l = E.findKey(r, s);
        if (l) {
          (n[l] = hi(i)), delete n[s];
          return;
        }
        const o = t ? Vg(s) : String(s).trim();
        o !== s && delete n[s], (n[o] = hi(i)), (r[o] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      E.forEach(this, (r, i) => {
        r != null && r !== !1 && (n[i] = t && E.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[Au] = this[Au] = { accessors: {} }).accessors,
      i = this.prototype;
    function s(l) {
      const o = Wn(l);
      r[o] || ($g(i, l), (r[o] = !0));
    }
    return E.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
Pe.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
E.reduceDescriptors(Pe.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
E.freezeMethods(Pe);
function Js(e, t) {
  const n = this || _r,
    r = t || n,
    i = Pe.from(r.headers);
  let s = r.data;
  return (
    E.forEach(e, function (o) {
      s = o.call(n, s, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    s
  );
}
function Nf(e) {
  return !!(e && e.__CANCEL__);
}
function zn(e, t, n) {
  b.call(this, e ?? "canceled", b.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
E.inherits(zn, b, { __CANCEL__: !0 });
function Af(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new b(
          "Request failed with status code " + n.status,
          [b.ERR_BAD_REQUEST, b.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function Wg(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function Gg(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let i = 0,
    s = 0,
    l;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (a) {
      const u = Date.now(),
        d = r[s];
      l || (l = u), (n[i] = a), (r[i] = u);
      let p = s,
        g = 0;
      for (; p !== i; ) (g += n[p++]), (p = p % e);
      if (((i = (i + 1) % e), i === s && (s = (s + 1) % e), u - l < t)) return;
      const x = d && u - d;
      return x ? Math.round((g * 1e3) / x) : void 0;
    }
  );
}
function Qg(e, t) {
  let n = 0;
  const r = 1e3 / t;
  let i = null;
  return function () {
    const l = this === !0,
      o = Date.now();
    if (l || o - n > r)
      return (
        i && (clearTimeout(i), (i = null)), (n = o), e.apply(null, arguments)
      );
    i ||
      (i = setTimeout(
        () => ((i = null), (n = Date.now()), e.apply(null, arguments)),
        r - (o - n)
      ));
  };
}
const Wi = (e, t, n = 3) => {
    let r = 0;
    const i = Gg(50, 250);
    return Qg((s) => {
      const l = s.loaded,
        o = s.lengthComputable ? s.total : void 0,
        a = l - r,
        u = i(a),
        d = l <= o;
      r = l;
      const p = {
        loaded: l,
        total: o,
        progress: o ? l / o : void 0,
        bytes: a,
        rate: u || void 0,
        estimated: u && o && d ? (o - l) / u : void 0,
        event: s,
        lengthComputable: o != null,
      };
      (p[t ? "download" : "upload"] = !0), e(p);
    }, n);
  },
  qg = qe.hasStandardBrowserEnv
    ? (function () {
        const t = /(msie|trident)/i.test(navigator.userAgent),
          n = document.createElement("a");
        let r;
        function i(s) {
          let l = s;
          return (
            t && (n.setAttribute("href", l), (l = n.href)),
            n.setAttribute("href", l),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, "") : "",
              hash: n.hash ? n.hash.replace(/^#/, "") : "",
              hostname: n.hostname,
              port: n.port,
              pathname:
                n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
            }
          );
        }
        return (
          (r = i(window.location.href)),
          function (l) {
            const o = E.isString(l) ? i(l) : l;
            return o.protocol === r.protocol && o.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  Kg = qe.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, i, s) {
          const l = [e + "=" + encodeURIComponent(t)];
          E.isNumber(n) && l.push("expires=" + new Date(n).toGMTString()),
            E.isString(r) && l.push("path=" + r),
            E.isString(i) && l.push("domain=" + i),
            s === !0 && l.push("secure"),
            (document.cookie = l.join("; "));
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
function Yg(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Xg(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function jf(e, t) {
  return e && !Yg(t) ? Xg(e, t) : t;
}
const ju = (e) => (e instanceof Pe ? { ...e } : e);
function en(e, t) {
  t = t || {};
  const n = {};
  function r(u, d, p) {
    return E.isPlainObject(u) && E.isPlainObject(d)
      ? E.merge.call({ caseless: p }, u, d)
      : E.isPlainObject(d)
      ? E.merge({}, d)
      : E.isArray(d)
      ? d.slice()
      : d;
  }
  function i(u, d, p) {
    if (E.isUndefined(d)) {
      if (!E.isUndefined(u)) return r(void 0, u, p);
    } else return r(u, d, p);
  }
  function s(u, d) {
    if (!E.isUndefined(d)) return r(void 0, d);
  }
  function l(u, d) {
    if (E.isUndefined(d)) {
      if (!E.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, d);
  }
  function o(u, d, p) {
    if (p in t) return r(u, d);
    if (p in e) return r(void 0, u);
  }
  const a = {
    url: s,
    method: s,
    data: s,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    withXSRFToken: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: o,
    headers: (u, d) => i(ju(u), ju(d), !0),
  };
  return (
    E.forEach(Object.keys(Object.assign({}, e, t)), function (d) {
      const p = a[d] || i,
        g = p(e[d], t[d], d);
      (E.isUndefined(g) && p !== o) || (n[d] = g);
    }),
    n
  );
}
const Lf = (e) => {
    const t = en({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: i,
      xsrfCookieName: s,
      headers: l,
      auth: o,
    } = t;
    (t.headers = l = Pe.from(l)),
      (t.url = Tf(jf(t.baseURL, t.url), e.params, e.paramsSerializer)),
      o &&
        l.set(
          "Authorization",
          "Basic " +
            btoa(
              (o.username || "") +
                ":" +
                (o.password ? unescape(encodeURIComponent(o.password)) : "")
            )
        );
    let a;
    if (E.isFormData(n)) {
      if (qe.hasStandardBrowserEnv || qe.hasStandardBrowserWebWorkerEnv)
        l.setContentType(void 0);
      else if ((a = l.getContentType()) !== !1) {
        const [u, ...d] = a
          ? a
              .split(";")
              .map((p) => p.trim())
              .filter(Boolean)
          : [];
        l.setContentType([u || "multipart/form-data", ...d].join("; "));
      }
    }
    if (
      qe.hasStandardBrowserEnv &&
      (r && E.isFunction(r) && (r = r(t)), r || (r !== !1 && qg(t.url)))
    ) {
      const u = i && s && Kg.read(s);
      u && l.set(i, u);
    }
    return t;
  },
  Jg = typeof XMLHttpRequest < "u",
  Zg =
    Jg &&
    function (e) {
      return new Promise(function (n, r) {
        const i = Lf(e);
        let s = i.data;
        const l = Pe.from(i.headers).normalize();
        let { responseType: o } = i,
          a;
        function u() {
          i.cancelToken && i.cancelToken.unsubscribe(a),
            i.signal && i.signal.removeEventListener("abort", a);
        }
        let d = new XMLHttpRequest();
        d.open(i.method.toUpperCase(), i.url, !0), (d.timeout = i.timeout);
        function p() {
          if (!d) return;
          const x = Pe.from(
              "getAllResponseHeaders" in d && d.getAllResponseHeaders()
            ),
            y = {
              data:
                !o || o === "text" || o === "json"
                  ? d.responseText
                  : d.response,
              status: d.status,
              statusText: d.statusText,
              headers: x,
              config: e,
              request: d,
            };
          Af(
            function (c) {
              n(c), u();
            },
            function (c) {
              r(c), u();
            },
            y
          ),
            (d = null);
        }
        "onloadend" in d
          ? (d.onloadend = p)
          : (d.onreadystatechange = function () {
              !d ||
                d.readyState !== 4 ||
                (d.status === 0 &&
                  !(d.responseURL && d.responseURL.indexOf("file:") === 0)) ||
                setTimeout(p);
            }),
          (d.onabort = function () {
            d &&
              (r(new b("Request aborted", b.ECONNABORTED, i, d)), (d = null));
          }),
          (d.onerror = function () {
            r(new b("Network Error", b.ERR_NETWORK, i, d)), (d = null);
          }),
          (d.ontimeout = function () {
            let v = i.timeout
              ? "timeout of " + i.timeout + "ms exceeded"
              : "timeout exceeded";
            const y = i.transitional || kf;
            i.timeoutErrorMessage && (v = i.timeoutErrorMessage),
              r(
                new b(
                  v,
                  y.clarifyTimeoutError ? b.ETIMEDOUT : b.ECONNABORTED,
                  i,
                  d
                )
              ),
              (d = null);
          }),
          s === void 0 && l.setContentType(null),
          "setRequestHeader" in d &&
            E.forEach(l.toJSON(), function (v, y) {
              d.setRequestHeader(y, v);
            }),
          E.isUndefined(i.withCredentials) ||
            (d.withCredentials = !!i.withCredentials),
          o && o !== "json" && (d.responseType = i.responseType),
          typeof i.onDownloadProgress == "function" &&
            d.addEventListener("progress", Wi(i.onDownloadProgress, !0)),
          typeof i.onUploadProgress == "function" &&
            d.upload &&
            d.upload.addEventListener("progress", Wi(i.onUploadProgress)),
          (i.cancelToken || i.signal) &&
            ((a = (x) => {
              d &&
                (r(!x || x.type ? new zn(null, e, d) : x),
                d.abort(),
                (d = null));
            }),
            i.cancelToken && i.cancelToken.subscribe(a),
            i.signal &&
              (i.signal.aborted ? a() : i.signal.addEventListener("abort", a)));
        const g = Wg(i.url);
        if (g && qe.protocols.indexOf(g) === -1) {
          r(new b("Unsupported protocol " + g + ":", b.ERR_BAD_REQUEST, e));
          return;
        }
        d.send(s || null);
      });
    },
  e1 = (e, t) => {
    let n = new AbortController(),
      r;
    const i = function (a) {
      if (!r) {
        (r = !0), l();
        const u = a instanceof Error ? a : this.reason;
        n.abort(
          u instanceof b ? u : new zn(u instanceof Error ? u.message : u)
        );
      }
    };
    let s =
      t &&
      setTimeout(() => {
        i(new b(`timeout ${t} of ms exceeded`, b.ETIMEDOUT));
      }, t);
    const l = () => {
      e &&
        (s && clearTimeout(s),
        (s = null),
        e.forEach((a) => {
          a &&
            (a.removeEventListener
              ? a.removeEventListener("abort", i)
              : a.unsubscribe(i));
        }),
        (e = null));
    };
    e.forEach((a) => a && a.addEventListener && a.addEventListener("abort", i));
    const { signal: o } = n;
    return (
      (o.unsubscribe = l),
      [
        o,
        () => {
          s && clearTimeout(s), (s = null);
        },
      ]
    );
  },
  t1 = function* (e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
      yield e;
      return;
    }
    let r = 0,
      i;
    for (; r < n; ) (i = r + t), yield e.slice(r, i), (r = i);
  },
  n1 = async function* (e, t, n) {
    for await (const r of e)
      yield* t1(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
  },
  Lu = (e, t, n, r, i) => {
    const s = n1(e, t, i);
    let l = 0;
    return new ReadableStream(
      {
        type: "bytes",
        async pull(o) {
          const { done: a, value: u } = await s.next();
          if (a) {
            o.close(), r();
            return;
          }
          let d = u.byteLength;
          n && n((l += d)), o.enqueue(new Uint8Array(u));
        },
        cancel(o) {
          return r(o), s.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Ou = (e, t) => {
    const n = e != null;
    return (r) =>
      setTimeout(() => t({ lengthComputable: n, total: e, loaded: r }));
  },
  hs =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Of = hs && typeof ReadableStream == "function",
  Zl =
    hs &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  r1 =
    Of &&
    (() => {
      let e = !1;
      const t = new Request(qe.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    })(),
  _u = 64 * 1024,
  eo =
    Of &&
    !!(() => {
      try {
        return E.isReadableStream(new Response("").body);
      } catch {}
    })(),
  Gi = { stream: eo && ((e) => e.body) };
hs &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !Gi[t] &&
        (Gi[t] = E.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new b(
                `Response type '${t}' is not supported`,
                b.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const i1 = async (e) => {
    if (e == null) return 0;
    if (E.isBlob(e)) return e.size;
    if (E.isSpecCompliantForm(e))
      return (await new Request(e).arrayBuffer()).byteLength;
    if (E.isArrayBufferView(e)) return e.byteLength;
    if ((E.isURLSearchParams(e) && (e = e + ""), E.isString(e)))
      return (await Zl(e)).byteLength;
  },
  s1 = async (e, t) => {
    const n = E.toFiniteNumber(e.getContentLength());
    return n ?? i1(t);
  },
  l1 =
    hs &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: i,
        cancelToken: s,
        timeout: l,
        onDownloadProgress: o,
        onUploadProgress: a,
        responseType: u,
        headers: d,
        withCredentials: p = "same-origin",
        fetchOptions: g,
      } = Lf(e);
      u = u ? (u + "").toLowerCase() : "text";
      let [x, v] = i || s || l ? e1([i, s], l) : [],
        y,
        C;
      const c = () => {
        !y &&
          setTimeout(() => {
            x && x.unsubscribe();
          }),
          (y = !0);
      };
      let f;
      try {
        if (
          a &&
          r1 &&
          n !== "get" &&
          n !== "head" &&
          (f = await s1(d, r)) !== 0
        ) {
          let P = new Request(t, { method: "POST", body: r, duplex: "half" }),
            j;
          E.isFormData(r) &&
            (j = P.headers.get("content-type")) &&
            d.setContentType(j),
            P.body && (r = Lu(P.body, _u, Ou(f, Wi(a)), null, Zl));
        }
        E.isString(p) || (p = p ? "cors" : "omit"),
          (C = new Request(t, {
            ...g,
            signal: x,
            method: n.toUpperCase(),
            headers: d.normalize().toJSON(),
            body: r,
            duplex: "half",
            withCredentials: p,
          }));
        let m = await fetch(C);
        const w = eo && (u === "stream" || u === "response");
        if (eo && (o || w)) {
          const P = {};
          ["status", "statusText", "headers"].forEach((k) => {
            P[k] = m[k];
          });
          const j = E.toFiniteNumber(m.headers.get("content-length"));
          m = new Response(
            Lu(m.body, _u, o && Ou(j, Wi(o, !0)), w && c, Zl),
            P
          );
        }
        u = u || "text";
        let S = await Gi[E.findKey(Gi, u) || "text"](m, e);
        return (
          !w && c(),
          v && v(),
          await new Promise((P, j) => {
            Af(P, j, {
              data: S,
              headers: Pe.from(m.headers),
              status: m.status,
              statusText: m.statusText,
              config: e,
              request: C,
            });
          })
        );
      } catch (m) {
        throw (
          (c(),
          m && m.name === "TypeError" && /fetch/i.test(m.message)
            ? Object.assign(new b("Network Error", b.ERR_NETWORK, e, C), {
                cause: m.cause || m,
              })
            : b.from(m, m && m.code, e, C))
        );
      }
    }),
  to = { http: Cg, xhr: Zg, fetch: l1 };
E.forEach(to, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Mu = (e) => `- ${e}`,
  o1 = (e) => E.isFunction(e) || e === null || e === !1,
  _f = {
    getAdapter: (e) => {
      e = E.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const i = {};
      for (let s = 0; s < t; s++) {
        n = e[s];
        let l;
        if (
          ((r = n),
          !o1(n) && ((r = to[(l = String(n)).toLowerCase()]), r === void 0))
        )
          throw new b(`Unknown adapter '${l}'`);
        if (r) break;
        i[l || "#" + s] = r;
      }
      if (!r) {
        const s = Object.entries(i).map(
          ([o, a]) =>
            `adapter ${o} ` +
            (a === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let l = t
          ? s.length > 1
            ? `since :
` +
              s.map(Mu).join(`
`)
            : " " + Mu(s[0])
          : "as no adapter specified";
        throw new b(
          "There is no suitable adapter to dispatch the request " + l,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: to,
  };
function Zs(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new zn(null, e);
}
function Ru(e) {
  return (
    Zs(e),
    (e.headers = Pe.from(e.headers)),
    (e.data = Js.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    _f
      .getAdapter(e.adapter || _r.adapter)(e)
      .then(
        function (r) {
          return (
            Zs(e),
            (r.data = Js.call(e, e.transformResponse, r)),
            (r.headers = Pe.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            Nf(r) ||
              (Zs(e),
              r &&
                r.response &&
                ((r.response.data = Js.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = Pe.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const Mf = "1.7.2",
  la = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    la[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const zu = {};
la.transitional = function (t, n, r) {
  function i(s, l) {
    return (
      "[Axios v" +
      Mf +
      "] Transitional option '" +
      s +
      "'" +
      l +
      (r ? ". " + r : "")
    );
  }
  return (s, l, o) => {
    if (t === !1)
      throw new b(
        i(l, " has been removed" + (n ? " in " + n : "")),
        b.ERR_DEPRECATED
      );
    return (
      n &&
        !zu[l] &&
        ((zu[l] = !0),
        console.warn(
          i(
            l,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(s, l, o) : !0
    );
  };
};
function a1(e, t, n) {
  if (typeof e != "object")
    throw new b("options must be an object", b.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const s = r[i],
      l = t[s];
    if (l) {
      const o = e[s],
        a = o === void 0 || l(o, s, e);
      if (a !== !0)
        throw new b("option " + s + " must be " + a, b.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new b("Unknown option " + s, b.ERR_BAD_OPTION);
  }
}
const no = { assertOptions: a1, validators: la },
  vt = no.validators;
class Qt {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Nu(), response: new Nu() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let i;
        Error.captureStackTrace
          ? Error.captureStackTrace((i = {}))
          : (i = new Error());
        const s = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? s &&
              !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + s)
            : (r.stack = s);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = en(this.defaults, n));
    const { transitional: r, paramsSerializer: i, headers: s } = n;
    r !== void 0 &&
      no.assertOptions(
        r,
        {
          silentJSONParsing: vt.transitional(vt.boolean),
          forcedJSONParsing: vt.transitional(vt.boolean),
          clarifyTimeoutError: vt.transitional(vt.boolean),
        },
        !1
      ),
      i != null &&
        (E.isFunction(i)
          ? (n.paramsSerializer = { serialize: i })
          : no.assertOptions(
              i,
              { encode: vt.function, serialize: vt.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let l = s && E.merge(s.common, s[n.method]);
    s &&
      E.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (v) => {
          delete s[v];
        }
      ),
      (n.headers = Pe.concat(l, s));
    const o = [];
    let a = !0;
    this.interceptors.request.forEach(function (y) {
      (typeof y.runWhen == "function" && y.runWhen(n) === !1) ||
        ((a = a && y.synchronous), o.unshift(y.fulfilled, y.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (y) {
      u.push(y.fulfilled, y.rejected);
    });
    let d,
      p = 0,
      g;
    if (!a) {
      const v = [Ru.bind(this), void 0];
      for (
        v.unshift.apply(v, o),
          v.push.apply(v, u),
          g = v.length,
          d = Promise.resolve(n);
        p < g;

      )
        d = d.then(v[p++], v[p++]);
      return d;
    }
    g = o.length;
    let x = n;
    for (p = 0; p < g; ) {
      const v = o[p++],
        y = o[p++];
      try {
        x = v(x);
      } catch (C) {
        y.call(this, C);
        break;
      }
    }
    try {
      d = Ru.call(this, x);
    } catch (v) {
      return Promise.reject(v);
    }
    for (p = 0, g = u.length; p < g; ) d = d.then(u[p++], u[p++]);
    return d;
  }
  getUri(t) {
    t = en(this.defaults, t);
    const n = jf(t.baseURL, t.url);
    return Tf(n, t.params, t.paramsSerializer);
  }
}
E.forEach(["delete", "get", "head", "options"], function (t) {
  Qt.prototype[t] = function (n, r) {
    return this.request(
      en(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
E.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (s, l, o) {
      return this.request(
        en(o || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: s,
          data: l,
        })
      );
    };
  }
  (Qt.prototype[t] = n()), (Qt.prototype[t + "Form"] = n(!0));
});
class oa {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (s) {
      n = s;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let s = r._listeners.length;
      for (; s-- > 0; ) r._listeners[s](i);
      r._listeners = null;
    }),
      (this.promise.then = (i) => {
        let s;
        const l = new Promise((o) => {
          r.subscribe(o), (s = o);
        }).then(i);
        return (
          (l.cancel = function () {
            r.unsubscribe(s);
          }),
          l
        );
      }),
      t(function (s, l, o) {
        r.reason || ((r.reason = new zn(s, l, o)), n(r.reason));
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
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new oa(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
}
function u1(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function c1(e) {
  return E.isObject(e) && e.isAxiosError === !0;
}
const ro = {
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
Object.entries(ro).forEach(([e, t]) => {
  ro[t] = e;
});
function Rf(e) {
  const t = new Qt(e),
    n = ff(Qt.prototype.request, t);
  return (
    E.extend(n, Qt.prototype, t, { allOwnKeys: !0 }),
    E.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return Rf(en(e, i));
    }),
    n
  );
}
const U = Rf(_r);
U.Axios = Qt;
U.CanceledError = zn;
U.CancelToken = oa;
U.isCancel = Nf;
U.VERSION = Mf;
U.toFormData = ms;
U.AxiosError = b;
U.Cancel = U.CanceledError;
U.all = function (t) {
  return Promise.all(t);
};
U.spread = u1;
U.isAxiosError = c1;
U.mergeConfig = en;
U.AxiosHeaders = Pe;
U.formToJSON = (e) => Pf(E.isHTMLForm(e) ? new FormData(e) : e);
U.getAdapter = _f.getAdapter;
U.HttpStatusCode = ro;
U.default = U;
const d1 = () => {
    const [e, t] = F.useState([]),
      [n, r] = F.useState([]),
      i = async () => {
        try {
          let s = await U(
            "https://raw.githubusercontent.com/kraken-ship/Filimoo-api-1/main/assets/db.json"
          );
          t(s.data.header_slider);
          let l = await U(
            "https://raw.githubusercontent.com/kraken-ship/Filimoo-api-1/main/assets/db.json"
          );
          r(l.data.header_text);
        } catch (s) {
          console.log(s.message);
        }
      };
    return (
      F.useEffect(() => {
        i();
      }, []),
      h.jsx(h.Fragment, {
        children: h.jsxs("div", {
          className: "w-[100%] h-[500px] lg:h-[600px] md:h-[700px]  relative",
          children: [
            h.jsx(jr, {
              spaceBetween: 0,
              centeredSlides: !0,
              autoplay: { delay: 4500, disableOnInteraction: !1 },
              modules: [cs, ta, us],
              className: "mySwiper",
              children:
                e == null
                  ? void 0
                  : e.map((s) =>
                      h.jsx(
                        Lr,
                        { children: h.jsx("img", { src: s.image, alt: "" }) },
                        s.id
                      )
                    ),
            }),
            h.jsx("div", {
              className: "shadow",
              children: h.jsxs("div", {
                className:
                  "inside-shadow sm:max-lg:mt-[114px] max-sm:mt-[114px] max-sm:w-[100%]",
                children: [
                  h.jsx("p", { children: "با فیلیمو بی وقفه فیلم ببین" }),
                  h.jsx("h1", {
                    className: "title max-sm:text-[20px]",
                    children: "کنترل همیشه دست توست!",
                  }),
                  h.jsx("div", {
                    className:
                      "inside-box sm:max-lg:gap-y-[10px] sm:max-lg:flex-col max-sm:gap-y-[10px] max-sm:flex-col ",
                    children:
                      n == null
                        ? void 0
                        : n.map((s) =>
                            h.jsxs(
                              "div",
                              {
                                children: [
                                  h.jsx("img", { src: na, alt: "" }),
                                  h.jsx("p", { children: s.text }),
                                ],
                              },
                              s.id
                            )
                          ),
                  }),
                  n == null
                    ? void 0
                    : n.map((s, l) => {
                        for (let o = l; o < 2; o++)
                          return h.jsx(h.Fragment, {
                            children: h.jsxs(
                              "div",
                              {
                                className: s.class,
                                children: [
                                  h.jsx("img", { src: s.picture, alt: "" }),
                                  h.jsx("p", { children: s.text2 }),
                                ],
                              },
                              s.id
                            ),
                          });
                      }),
                ],
              }),
            }),
          ],
        }),
      })
    );
  },
  Iu = "./assets/exclusive-fa-vf-_CSZl.svg",
  f1 = () => {
    const [e, t] = F.useState([]),
      [n, r] = F.useState([]),
      [i, s] = F.useState([]),
      l = async () => {
        try {
          let u = await U(
            "https://raw.githubusercontent.com/kraken-ship/Filimoo-api-1/main/assets/db.json"
          );
          t(u.data.favorite_image);
          let d = await U(
            "https://raw.githubusercontent.com/kraken-ship/Filimoo-api-1/main/assets/db.json"
          );
          r(d.data.favorite_text);
          let p = await U(
            "https://raw.githubusercontent.com/kraken-ship/Filimoo-api-1/main/assets/db.json"
          );
          s(p.data.favorite_slider);
        } catch (u) {
          console.log(u.message);
        }
      };
    F.useEffect(() => {
      l();
    }, []);
    const o = F.useRef(null);
    F.useEffect(() => {
      o.current.addEventListener("click", function () {
        document.querySelector(".show_series").classList.add("active"),
          document.querySelector(".series").classList.add("bigger"),
          document.querySelector(".movie").classList.remove("bigger"),
          document.querySelector(".show_movie").classList.remove("active");
      });
    }, []);
    const a = F.useRef(null);
    return (
      F.useEffect(() => {
        a.current.addEventListener("click", function () {
          document.querySelector(".show_movie").classList.add("active"),
            document.querySelector(".movie").classList.add("bigger"),
            document.querySelector(".series").classList.remove("bigger"),
            document.querySelector(".show_series").classList.remove("active");
        });
      }, []),
      h.jsx(h.Fragment, {
        children: h.jsxs("div", {
          className:
            "w-[100%]  bg-[#000000f8] relative pt-8 pb-8 pr-24 pl-[30px] sm:max-lg:pr-[30px] max-sm:p-[15px]",
          children: [
            h.jsxs("div", {
              className:
                "w-[100%] h-[100px]  flex flex-row gap-x-[10px] justify-start items-center text-center sm:max-lg:justify-center max-sm:justify-center",
              children: [
                h.jsx("p", {
                  className: "text-base font-medium text-[white] text-lg",
                  children: "محبوب‌ترین‌های فیلیمو",
                }),
                h.jsxs("div", {
                  className:
                    "w-[150px] flex h-10 bg-[#151515] justify-start items-center rounded-[1000px] border-solid border border-black",
                  children: [
                    h.jsx("button", {
                      className: "series bigger",
                      ref: o,
                      children: "سریال",
                    }),
                    h.jsxs("button", {
                      className: "movie",
                      ref: a,
                      children: [" ", "فیلم"],
                    }),
                  ],
                }),
              ],
            }),
            h.jsxs("div", {
              className: "show_series active",
              children: [
                h.jsx("div", {
                  className:
                    "w-[100%]   flex flex-row gap-x-[45px] pb-[30px] justify-center sm:max-lg:flex-col sm:max-lg:justify-center sm:max-lg:items-center sm:max-lg:gap-y-[20px]  max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:gap-y-[20px]",
                  children:
                    e == null
                      ? void 0
                      : e.map((u, d) => {
                          if (d < 6)
                            return h.jsx(h.Fragment, {
                              children: h.jsxs(
                                "div",
                                {
                                  className:
                                    "series_box sm:max-lg:w-[80%]  max-sm:w-[60%]",
                                  children: [
                                    h.jsx("img", {
                                      className:
                                        "box_image sm:max-lg:w-[100%]  max-sm:w-[100%]",
                                      src: u.image,
                                      alt: "",
                                    }),
                                    h.jsx("img", {
                                      className:
                                        "absolute right-[42px] bottom-[10px] z-[8] sm:max-lg:bottom-[5%] sm:max-lg:right-[28%] sm:max-lg:w-[45%]   max-sm:bottom-[5%] max-sm:right-[28%] max-sm:w-[45%]",
                                      src: Iu,
                                      alt: "",
                                    }),
                                    h.jsx("div", { className: "box_shadow" }),
                                    h.jsx("div", {
                                      className:
                                        "under_shadow sm:max-lg:h-[80px] max-sm:h-[40px]",
                                    }),
                                  ],
                                },
                                u.id
                              ),
                            });
                        }),
                }),
                h.jsxs("div", {
                  className:
                    "w-[100%]   relative flex flex-col gap-y-[45px] pb-[30px]",
                  children: [
                    n == null
                      ? void 0
                      : n.map((u, d) => {
                          if (d === 0)
                            return h.jsxs(h.Fragment, {
                              children: [
                                h.jsx("img", {
                                  className: "h-[600px] max-sm:h-[500px]",
                                  src: u.bgimage,
                                  alt: "",
                                }),
                                h.jsxs("div", {
                                  className:
                                    "w-full flex flex-row gap-x-[40px] absolute top-[40px] pr-[30px] z-30 max-sm:gap-x-[20px] max-sm:pr-[10px]",
                                  children: [
                                    h.jsxs("div", {
                                      className:
                                        "w-[70%] flex flex-col gap-y-[20px]",
                                      children: [
                                        h.jsx("h1", {
                                          className:
                                            "not-italic font-bold text-[20px] leading-8 text-[white]",
                                          children: u.title,
                                        }),
                                        h.jsx("p", {
                                          className:
                                            "text-[#777777] text-[12px] font-[500]",
                                          children: u.director,
                                        }),
                                        h.jsxs("div", {
                                          className:
                                            "flex flex-row gap-x-[5px] w-[150px] justify-center items-center h-[40px]",
                                          children: [
                                            h.jsx("p", {
                                              className:
                                                "text-[white]  text-[10px] font-[500] p-[14px] rounded-[1000px] bg-[#282828] w-[110px] h-[33px] leading-[4px] text-center pr-[3px] pl-[3px]",
                                              children: u.sort1,
                                            }),
                                            h.jsx("p", {
                                              className:
                                                "text-[white]  text-[10px] font-[500] p-[14px] rounded-[1000px] bg-[#282828] w-[110px] h-[33px] leading-[4px] text-center pr-[3px] pl-[3px]",
                                              children: u.sort2,
                                            }),
                                          ],
                                        }),
                                        h.jsx("p", {
                                          className:
                                            "text-[#EAEAEA] font-[500] text-[15px] max-sm:text-[10px]",
                                          children: u.main,
                                        }),
                                      ],
                                    }),
                                    h.jsx("img", {
                                      className:
                                        "w-[220px] h-[134px] sm:max-lg:w-[150px] sm:max-lg:h-[100px] max-sm:w-[100px] max-sm:h-[70px]",
                                      src: u.logo,
                                      alt: "",
                                    }),
                                  ],
                                }),
                              ],
                            });
                        }),
                    h.jsx("div", {
                      className: "favorite_slider",
                      children: h.jsx(jr, {
                        spaceBetween: 50,
                        slidesPerView: 5,
                        centeredSlides: !1,
                        navigation: !0,
                        modules: [cs, ta, us],
                        className: "mySwiper2",
                        children:
                          i == null
                            ? void 0
                            : i.map((u) =>
                                h.jsxs(
                                  Lr,
                                  {
                                    children: [
                                      h.jsx("img", { src: u.image, alt: "" }),
                                      h.jsx("div", {}),
                                    ],
                                  },
                                  u.id
                                )
                              ),
                      }),
                    }),
                    h.jsx("div", { className: "shadow" }),
                  ],
                }),
              ],
            }),
            h.jsxs("div", {
              className: "show_movie",
              children: [
                h.jsx("div", {
                  className:
                    "w-[100%]   flex flex-row gap-x-[45px] pb-[30px] justify-center sm:max-lg:flex-col sm:max-lg:justify-center sm:max-lg:items-center sm:max-lg:gap-y-[20px]   max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:gap-y-[20px]",
                  children:
                    e == null
                      ? void 0
                      : e.map((u, d) => {
                          if (d >= 6)
                            return h.jsx(h.Fragment, {
                              children: h.jsxs(
                                "div",
                                {
                                  className:
                                    "series_box sm:max-lg:w-[80%] max-sm:w-[60%]",
                                  children: [
                                    h.jsx("img", {
                                      className:
                                        "box_image sm:max-lg:w-[100%] max-sm:w-[100%]",
                                      src: u.image,
                                      alt: "",
                                    }),
                                    h.jsx("img", {
                                      className:
                                        "absolute right-[42px] bottom-[10px] z-[8] sm:max-lg:bottom-[5%] sm:max-lg:right-[28%] sm:max-lg:w-[45%]   max-sm:bottom-[5%] max-sm:right-[28%] max-sm:w-[45%]",
                                      src: Iu,
                                      alt: "",
                                    }),
                                    h.jsx("div", { className: "box_shadow" }),
                                    h.jsx("div", {
                                      className:
                                        "under_shadow sm:max-lg:h-[80px] max-sm:h-[40px]",
                                    }),
                                  ],
                                },
                                u.id
                              ),
                            });
                        }),
                }),
                h.jsxs("div", {
                  className:
                    "w-[100%]   relative flex flex-col gap-y-[45px] pb-[30px]",
                  children: [
                    n == null
                      ? void 0
                      : n.map((u, d) => {
                          if (d === 1)
                            return h.jsxs(h.Fragment, {
                              children: [
                                h.jsx("img", {
                                  className: " max-sm:h-[112px]",
                                  src: u.bgimage,
                                  alt: "",
                                }),
                                h.jsxs("div", {
                                  className:
                                    "w-full flex flex-row gap-x-[40px] absolute top-[40px] pr-[30px] z-30 sm:max-lg:top-0 max-sm:top-0",
                                  children: [
                                    h.jsxs("div", {
                                      className:
                                        "w-[70%] flex flex-col gap-y-[20px] max-sm:gap-y-[5px]",
                                      children: [
                                        h.jsx("h1", {
                                          className:
                                            "not-italic font-bold text-[20px] leading-8 text-[white] max-sm:text-[13px]",
                                          children: u.title,
                                        }),
                                        h.jsx("p", {
                                          className:
                                            "text-[#777777] text-[12px] font-[500] max-sm:text-[8px]",
                                          children: u.director,
                                        }),
                                        h.jsxs("div", {
                                          className:
                                            "flex flex-row gap-x-[5px] w-[150px] justify-center items-center h-[40px] max-sm:w-[100px] max-sm:h-[30px]",
                                          children: [
                                            h.jsx("p", {
                                              className:
                                                "text-[white]  text-[10px] font-[500] p-[14px] rounded-[1000px] bg-[#282828] w-[110px] h-[33px] leading-[4px] text-center pr-[3px] pl-[3px] max-sm:w-[60px] max-sm:h-[30px]",
                                              children: u.sort1,
                                            }),
                                            h.jsx("p", {
                                              className:
                                                "text-[white]  text-[10px] font-[500] p-[14px] rounded-[1000px] bg-[#282828] w-[110px] h-[33px] leading-[4px] text-center pr-[3px] pl-[3px] max-sm:w-[60px] max-sm:h-[30px]",
                                              children: u.sort2,
                                            }),
                                          ],
                                        }),
                                        h.jsx("p", {
                                          className:
                                            "text-[#EAEAEA] font-[500] text-[15px] sm:max-lg:text-[10px] max-sm:text-[7px]",
                                          children: u.main,
                                        }),
                                      ],
                                    }),
                                    h.jsx("img", {
                                      className:
                                        "w-[220px] h-[134px] sm:max-lg:w-[150px] sm:max-lg:h-[100px]   max-sm:w-[50px] max-sm:h-[30px]",
                                      src: u.logo,
                                      alt: "",
                                    }),
                                  ],
                                }),
                              ],
                            });
                        }),
                    h.jsx("div", { className: "shadow" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  p1 = () => {
    const [e, t] = F.useState([]),
      [n, r] = F.useState([]),
      i = async () => {
        try {
          let s = await U(
            "https://raw.githubusercontent.com/kraken-ship/Filimoo-api-1/main/assets/db.json"
          );
          t(s.data.watch_text1);
          let l = await U(
            "https://raw.githubusercontent.com/kraken-ship/Filimoo-api-1/main/assets/db.json"
          );
          r(l.data.watch_text2);
        } catch (s) {
          console.log(s.message);
        }
      };
    return (
      F.useEffect(() => {
        i();
      }, []),
      h.jsx(h.Fragment, {
        children:
          e == null
            ? void 0
            : e.map((s, l) =>
                h.jsx(h.Fragment, {
                  children: h.jsxs(
                    "div",
                    {
                      className: s.class2,
                      children: [
                        h.jsx("img", {
                          className:
                            "w-[50%] sm:max-lg:w-[100%] max-sm:w-[100%]",
                          src: s.image,
                          alt: "",
                        }),
                        h.jsxs("div", {
                          className:
                            " w-[50%] flex flex-col justify-center items-start gap-y-[20px] sm:max-lg:w-[100%]  max-sm:w-[100%]",
                          children: [
                            h.jsx("h1", {
                              className:
                                "text-[20px] font-bold leading-[18px] font-sans1 text-[#FFFFFF]",
                              children: s.header,
                            }),
                            h.jsx("p", {
                              className:
                                "text-[16px] font-bold leading-[30px] font-sans1 text-[#BBBBBB] sm:max-lg:text-[14px] max-sm:text-[14px]",
                              children: s.text,
                            }),
                            n == null
                              ? void 0
                              : n.map((o, a) => {
                                  if (l > 0) {
                                    console.log(a);
                                    for (let u = a; u < 2; u++)
                                      return h.jsx(h.Fragment, {
                                        children: h.jsxs(
                                          "div",
                                          {
                                            className:
                                              "flex flex-row justify-start items-start  gap-x-[5px]",
                                            children: [
                                              h.jsx("img", {
                                                className: "w-[35px]",
                                                src: o.logo2,
                                                alt: "",
                                              }),
                                              h.jsxs("div", {
                                                className:
                                                  "flex flex-col gap-y-[10px] ",
                                                children: [
                                                  h.jsx("h1", {
                                                    className:
                                                      "text-[16px] font-bold leading-[15px] font-sans1 text-[#BBBBBB]",
                                                    children: o.head2,
                                                  }),
                                                  h.jsx("p", {
                                                    className:
                                                      "text-[11px] font-normal leading-[14px] font-sans1 text-[#a1a1a1]",
                                                    children: o.text2,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          },
                                          s.id
                                        ),
                                      });
                                  } else
                                    return h.jsx(h.Fragment, {
                                      children: h.jsxs(
                                        "div",
                                        {
                                          className:
                                            "flex flex-row justify-start items-start  gap-x-[5px]",
                                          children: [
                                            h.jsx("img", {
                                              src: o.logo,
                                              alt: "",
                                            }),
                                            h.jsxs("div", {
                                              className:
                                                "flex flex-col gap-y-[10px] ",
                                              children: [
                                                h.jsx("h1", {
                                                  className:
                                                    "text-[18px] font-bold leading-[15px] font-sans1 text-[#BBBBBB]",
                                                  children: o.head,
                                                }),
                                                h.jsx("p", {
                                                  className:
                                                    "text-[11px] font-normal leading-[14px] font-sans1 text-[#a1a1a1]",
                                                  children: o.text,
                                                }),
                                              ],
                                            }),
                                          ],
                                        },
                                        s.id
                                      ),
                                    });
                                }),
                            h.jsxs("div", {
                              className: s.class,
                              children: [
                                h.jsx("img", { src: s.button, alt: "" }),
                                h.jsx("p", { children: s.buttontext }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    s.id
                  ),
                })
              ),
      })
    );
  },
  m1 =
    "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12.6667%2013.3333H3.33337C2.80294%2013.3333%202.29423%2013.1226%201.91916%2012.7475C1.54409%2012.3724%201.33337%2011.8637%201.33337%2011.3333V4.66663C1.33337%204.13619%201.54409%203.62749%201.91916%203.25241C2.29423%202.87734%202.80294%202.66663%203.33337%202.66663H12.6667C13.1971%202.66663%2013.7058%202.87734%2014.0809%203.25241C14.456%203.62749%2014.6667%204.13619%2014.6667%204.66663V11.3333C14.6667%2011.8637%2014.456%2012.3724%2014.0809%2012.7475C13.7058%2013.1226%2013.1971%2013.3333%2012.6667%2013.3333ZM2.86197%204.19522C2.73695%204.32025%202.66671%204.48981%202.66671%204.66663V11.3333C2.66671%2011.5101%202.73695%2011.6797%202.86197%2011.8047C2.98699%2011.9297%203.15656%2012%203.33337%2012H12.6667C12.8435%2012%2013.0131%2011.9297%2013.1381%2011.8047C13.2631%2011.6797%2013.3334%2011.5101%2013.3334%2011.3333V4.66663C13.3334%204.48981%2013.2631%204.32025%2013.1381%204.19522C13.0131%204.0702%2012.8435%203.99996%2012.6667%203.99996H3.33337C3.15656%203.99996%202.98699%204.0702%202.86197%204.19522ZM9.62005%208.66663L7.33338%2010.1466C7.20743%2010.23%207.0612%2010.2776%206.91031%2010.2843C6.75941%2010.291%206.60954%2010.2565%206.4767%2010.1846C6.34387%2010.1128%206.23307%2010.0061%206.15616%209.87611C6.07925%209.74612%206.03911%209.59767%206.04004%209.44663V6.49996C6.03911%206.34892%206.07925%206.20047%206.15616%206.07048C6.23307%205.94049%206.34387%205.83384%206.4767%205.76195C6.60954%205.69005%206.75941%205.65561%206.91031%205.66231C7.0612%205.669%207.20743%205.71659%207.33338%205.79996L9.62005%207.26663C9.737%207.34218%209.83316%207.44582%209.89975%207.5681C9.96634%207.69038%2010.0012%207.8274%2010.0012%207.96663C10.0012%208.10586%209.96634%208.24288%209.89975%208.36516C9.83316%208.48744%209.737%208.59108%209.62005%208.66663Z'%20fill='%234dab56'/%3e%3c/svg%3e",
  h1 = () => {
    const [e, t] = F.useState([]),
      n = async () => {
        try {
          let r = await U(
            "https://raw.githubusercontent.com/kraken-ship/Filimoo-api-1/main/assets/db.json"
          );
          t(r.data.free_slider);
        } catch (r) {
          console.log(r.message);
        }
      };
    return (
      F.useEffect(() => {
        n();
      }, []),
      h.jsx(h.Fragment, {
        children: h.jsxs("div", {
          className:
            "w-[100%] h-fit bg-[#151515] pt-[30px] pb-[30px] pl-[80px] pr-[80px] sm:max-lg:pl-[10px] sm:max-lg:pr-[10px]  max-sm:pl-[10px] max-sm:pr-[10px]",
          children: [
            h.jsx("div", {
              className: "w-[100%] h-auto ",
              children: h.jsx("p", {
                className: "text-[22px] font-bold font-sans text-[white]",
                children: "محتواهای رایگان",
              }),
            }),
            h.jsx("div", {
              className: "freeslider",
              children: h.jsx(jr, {
                spaceBetween: 30,
                slidesPerView: 5,
                centeredSlides: !1,
                navigation: !0,
                modules: [cs, ta, us],
                className: "mySwiper12",
                children:
                  e == null
                    ? void 0
                    : e.map((r) =>
                        h.jsx(h.Fragment, {
                          children: h.jsx(
                            Lr,
                            {
                              children: h.jsxs("div", {
                                className: "free_box",
                                children: [
                                  h.jsx("img", {
                                    className: "box_image",
                                    src: r.image,
                                    alt: "",
                                  }),
                                  h.jsx("div", { className: "box_shadow" }),
                                  h.jsxs("div", {
                                    className: "icon",
                                    children: [
                                      h.jsx("img", {
                                        className: "iconimage",
                                        src: m1,
                                        alt: "",
                                      }),
                                      h.jsx("p", { children: "رایگان" }),
                                    ],
                                  }),
                                  h.jsx("p", {
                                    className: "text",
                                    children: r.text,
                                  }),
                                ],
                              }),
                            },
                            r.id
                          ),
                        })
                      ),
              }),
            }),
          ],
        }),
      })
    );
  },
  g1 = "./assets/bg-kids-Do24QqSS.png",
  v1 = "_section_7czog_1",
  x1 = "_section2_7czog_15",
  y1 = "_button_7czog_29",
  ei = { section: v1, section2: x1, button: y1 },
  w1 = () =>
    h.jsx(h.Fragment, {
      children: h.jsxs("div", {
        className: ei.section,
        children: [
          h.jsx("div", { className: ei.section2 }),
          h.jsxs("div", {
            id: "kids",
            className:
              "w-[100%] flex flex-row gap-x-[100px] justify-start items-center pt-[30px] pl-[80px] pr-[80px]  sm:max-lg:pr-[20px] sm:max-lg:pl-[20px] sm:max-lg:flex-col sm:max-lg:gap-y-[50px] sm:max-lg:justify-center sm:max-lg:items-center    max-sm:pr-[10px] max-sm:pl-[10px] max-sm:flex-col max-sm:gap-y-[40px] max-sm:justify-center max-sm:items-center",
            children: [
              h.jsx("img", { className: "w-[40%]", src: g1, alt: "" }),
              h.jsxs("div", {
                className:
                  "flex flex-col gap-y-[20px] justify-start items-start sm:max-lg:justify-center sm:max-lg:items-center sm:max-lg:pb-[50px]  max-sm:justify-center max-sm:items-center max-sm:pb-[50px]",
                children: [
                  h.jsx("h1", {
                    className:
                      "text-[22px] font-sans1 font-bold text-[#FEFEFE] max-sm:text-[18px]",
                    children: "دنیایی متنوع از فیلم و کارتون‌های کودکانه",
                  }),
                  h.jsx("p", {
                    className:
                      " w-[78%] text-[16px] font-normal text-[#848484] font-sans1",
                    children:
                      "ساخت فیلیمو کودک این امکان را می‌دهد که با انتخاب سن فرزندتان، یک فضای امن برای تماشای کودک بسازید؛ یعنی محتوای مخصوص سن خودش را ببیند و به بقیه فیلم و سریال‌ها دسترسی نداشته‌باشد.",
                  }),
                  h.jsx("div", {
                    children: h.jsxs("div", {
                      className: "flex flex-row gap-x-[10px]",
                      children: [
                        h.jsx("div", {
                          className: ei.button,
                          children: h.jsx("p", {
                            children: "فیلیمو کودک بساز",
                          }),
                        }),
                        h.jsx("div", {
                          className: ei.button,
                          children: h.jsx("p", {
                            children: "تماشای فیلیمو کودک",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  S1 =
    "data:image/jpeg;base64,UklGRnQBAABXRUJQVlA4WAoAAAAQAAAAFwAAFwAAQUxQSHgAAAABb6CobRs42nb/E8BUBIuY/0CzdiSF9lZqDY5qW1uqi44pQAIWBRgRhAgagAI08BENyGAjfy43zXMJENF/Akkbl+CPgS9lX12go3qzkEZF6jcr7zLvlAfSOT3Qklh4BAD/7NXGhvTuvPhkIa364auQEdAPCr4UAABWUDgg1gAAAPAGAJ0BKhgAGAA+bS6SRaYkIpgEAGAGxLSACcm1wEwApgHkBUAH8V/iP+34AAeXsXGDWT9l+nbh88w1MbnBAAAA/v6IzmT/+h/BYNT883hbXmDpyPYt0fni/5S+Ba85//PyV+hNn88f9iQFQS+yDJNS9KeuYIse//3ht3rccz634xevyngvDijQOeQDz/TcOUNWYl81we7q0Db0vZLe8b+rCrYmTgXW0nteZ/z7lyYR1wn6wn7/aAYjJaXzd+PCFJQMvaIUyvArniY6/Kp0TYbkx8AAAAA=",
  E1 = () => {
    const [e, t] = F.useState([]),
      [n, r] = F.useState([]),
      i = async () => {
        try {
          let s = await U(
            "https://raw.githubusercontent.com/kraken-ship/Filimoo-api-1/main/assets/db.json"
          );
          t(s.data.online_data1);
          let l = await U(
            "https://raw.githubusercontent.com/kraken-ship/Filimoo-api-1/main/assets/db.json"
          );
          r(l.data.online_data2);
        } catch (s) {
          console.log(s.message);
        }
      };
    return (
      F.useEffect(() => {
        i();
      }, []),
      h.jsx(h.Fragment, {
        children: h.jsxs("div", {
          id: "back",
          className:
            "w-[100%] flex flex-col gap-y-[40px]  pt-[30px] pb-[30px] pl-[100px] pr-[100px] sm:max-lg:pl-[20px] sm:max-lg:pr-[20px]  max-sm:pl-[10px] max-sm:pr-[10px]",
          children: [
            h.jsxs("div", {
              className:
                "w-[100%] flex flex-col gap-y-[20px]  justify-center items-center",
              children: [
                h.jsx("h1", {
                  className: "text-[22px] font-sans1 font-bold text-[#FFFFFF]",
                  children: "سینما آنلاین فیلیمو",
                }),
                h.jsx("div", {
                  className:
                    "inside-box sm:max-lg:flex-col sm:max-lg:gap-y-[20px] sm:max-lg:justify-center sm:max-lg:items-start  max-sm:flex-col max-sm:gap-y-[10px] max-sm:justify-center max-sm:items-start",
                  children:
                    e == null
                      ? void 0
                      : e.map((s) =>
                          h.jsx(h.Fragment, {
                            children: h.jsxs(
                              "div",
                              {
                                children: [
                                  h.jsx("img", { src: na, alt: "" }),
                                  h.jsx("p", { children: s.name }),
                                ],
                              },
                              s.id
                            ),
                          })
                        ),
                }),
              ],
            }),
            h.jsx("div", {
              className:
                "box sm:max-lg:pl-[20px] sm:max-lg:pr-[20px] sm:max-lg:flex sm:max-lg:flex-col sm:max-lg:w-[100%]    max-sm:pl-[10px] max-sm:pr-[10px] max-sm:flex max-sm:flex-col max-sm:w-[100%]",
              children:
                n == null
                  ? void 0
                  : n.map((s) =>
                      h.jsx(h.Fragment, {
                        children: h.jsxs(
                          "div",
                          {
                            id: "violet",
                            className:
                              "w-[100%] justify-center items-start flex flex-row gap-x-[20px]  border-[1px] border-solid border-white rounded-[12px] p-[10px]",
                            children: [
                              h.jsx("img", {
                                className: "rounded-[10px] max-sm:w-[40%]",
                                src: s.image,
                                alt: "",
                              }),
                              h.jsxs("div", {
                                className:
                                  "w-[100%]  flex flex-col justify-start gap-y-[40px]",
                                children: [
                                  h.jsxs("div", {
                                    className:
                                      " w-[100%] flex flex-row justify-between ",
                                    children: [
                                      h.jsx("p", {
                                        className:
                                          "text-[14px] font-bold font-sans1 text-[white] max-sm:text-[11px]",
                                        children: s.name,
                                      }),
                                      h.jsxs("div", {
                                        className:
                                          "w-[100px] flex flex-row gap-x-[5px] justify-start items bg-center leading-[24px]",
                                        children: [
                                          h.jsx("img", { src: S1, alt: "" }),
                                          h.jsx("p", {
                                            className:
                                              "text-[11px] font-sans1 font-bold text-[white] max-sm:text-[10px]",
                                            children: "اکراین آنلاین",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  h.jsx("p", {
                                    className:
                                      "text-[14px] font-sans1 font-bold text-[#8B8485]",
                                    children: s.director,
                                  }),
                                  h.jsxs("div", {
                                    className:
                                      "w-[100%] flex flex-row gap-x-[10px] justify-start",
                                    children: [
                                      h.jsx("p", {
                                        className:
                                          "p-[5px] text-[14px] font-bold font-sans1 text-[#A69D9E] bg-black rounded-[50px]  leading-[10px] text-center",
                                        children: s.tag1,
                                      }),
                                      h.jsx("p", {
                                        className:
                                          "p-[5px] text-[14px] font-bold font-sans1 text-[#A69D9E] bg-black rounded-[50px]  leading-[10px] text-center",
                                        children: s.tag2,
                                      }),
                                    ],
                                  }),
                                  h.jsx("button", {
                                    className:
                                      "w-[80px] p-[10px] border-[1px] border-solid border-white text-[14px] text-[#A5A5A5] font-sans1 font-bold rounded-[6px]",
                                    children: "خریدبلیت",
                                  }),
                                ],
                              }),
                            ],
                          },
                          s.id
                        ),
                      })
                    ),
            }),
          ],
        }),
      })
    );
  },
  C1 =
    "data:image/jpeg;base64,UklGRuABAABXRUJQVlA4WAoAAAAQAAAAFwAAFwAAQUxQSM8AAAABh2CmbZtu+6sgmMofZWFEzH8qGqgtO7D1AoXDSFbr5unhRB9bQP/VSjJSUkJE/xMxla4+rGfiyG7tIgbl0ZvYv1oT9moZsShxpBa8XyV+UDMmjQjShiBQifFUhOKrINQOKoJ4ELzJUr4RmoeG0GoXhOahIVzdiCAeBIHq2Kqvis0HdmlDsLsSf9H6hSj1HlUQpdeGV9SDfvA+OVnCLH4oWEr0ivHxY8YoNwaVQ/1oiUbMrMV/NM14q/+siNn8aBk7Hz904sjczYf2mhABAAAAVlA4IOoAAADwBQCdASoYABgAPm0ylUemJCKhqAgAwA2JZwAFEB7RHsgd/W/dqrIAnGK/fem9ruDuRLgW7URdQAD+/ncjDDwR7wx85luHmnX+7hH32U6wXscBVvG2vzrgld5mModN80+JbdPw9wlcdQ8ngbWV9D+moucv31l0QvmSpsYD/aHi6tpptIA1n/1SARaFjDA0bP/GWcwXtO1I1DRPn+CKxRi1HkJqgvZtgPuvnt1TWeWB5bI+z3fwYhEKkB0Vm9psrQJWhSkIDXQiTxMVsp2rvp2ohM6rz/UXHHIcieMNKCvZ8qxMtj7JAEB2zAA=",
  T1 =
    "data:image/jpeg;base64,UklGRpICAABXRUJQVlA4WAoAAAAQAAAAJwAAIQAAQUxQSCMBAAABl6CobSPmxr+9O/5gJ4iI+U8ZPrgAJkCB0IAk2W7cBgBHcRLB+582Bj61zS6i/w7cRlKkKmXhoCcLryBczlnoQ+82ce01NV2JS+fUAI9W4b+f6oW0rc1yyHqjnbfhR7KWszmWvAvRhxRv41M3WumwpyJV0asIt/4J7o2IIoCrLr/P2KYxkezoSNrRFQKKPsZ5dEfdkUDH42ivHSlHHC8jZNPV5nF7wQ8M7AMY5tcaGQKe3vI2YVv4wM/A+wFGU3HnaRHs02xy9xnFGT04M9m04rOizSg4b7DxqxC4UWGbLjvO36So1ibT8aIsv8a3/fLBpviAcep/hyt6j3lisuna8/+I8t2EiPhuI/p0wXDrv//OdrPpjZoeWO3m/zzOxeYhAAAAVlA4IEgBAABQCQCdASooACIAPm02lEgmJKKhpzgJIMANiWkADpGgm7gL+BpAmYt4ADJ388ORRRFQ3E+N9YfcYNnHEl+CHmZ4SiEZMQ5FKW37U5KgX3gDmVer5AD+/og/jtiihUmTajcIQU+CDWPKvWo/uWM3GPHj4F62bzdWgPyXEoSyGIUMWnUHBEVDFargKyG57X7UI25+yhkDFM+J/08pZp32BBoybt8aiLLNb7cttsTLQkFzzJPeHK7PjtPDHPmDbpnUTkZwaC+TZYzHEfk67p4FJTyojXQIjmHZvwWUjEsXOeAh4UEXorx2PLyeXzARr1Lm6TWSPDzP0CzsG7RbEPFQt2p3sjfvDfQR+BiEPkJnl7bbZTYETzIkm0qe6dimLyUkOnNLfkdivzNX3wyCa1oCL8b/RHPOzZfvIUvEwCy8lX3YefEy6zVaAAAA",
  k1 = () => {
    const [e, t] = F.useState([]),
      n = async () => {
        try {
          let r = await U(
            "https://raw.githubusercontent.com/kraken-ship/Filimoo-api-1/main/assets/db.json"
          );
          t(r.data.comments);
        } catch (r) {
          console.log(r.message);
        }
      };
    return (
      F.useEffect(() => {
        n();
      }, []),
      h.jsx(h.Fragment, {
        children: h.jsxs("div", {
          className:
            "w-[100%] bg-[#151515] pt-[30px]  pl-[80px] pr-[80px] flex flex-col justify-start items-start relative  sm:max-lg:pl-[20px] sm:max-lg:pr-[20px] max-sm:pl-[10px] max-sm:pr-[10px]",
          children: [
            h.jsx("p", {
              className:
                "text-[25px] font-sans1 font-bold text-[#FDFDFD] max-sm:text-[18px]",
              children: "نظر کاربران بعد از تماشای فیلیمو",
            }),
            h.jsx("div", {
              className: "w-[100%] h-[70vh] sm:max-lg:h-[45vh] max-sm:h-[45vh]",
              children: h.jsx(jr, {
                spaceBetween: 30,
                centeredSlides: !1,
                slidesPerView: 3,
                autoplay: { delay: 2500, disableOnInteraction: !1 },
                navigation: !0,
                modules: [cs, us],
                className: "mySwiper55",
                children:
                  e == null
                    ? void 0
                    : e.map((r) =>
                        h.jsx(
                          Lr,
                          {
                            children: h.jsxs("div", {
                              className:
                                "w-[100%] h-[190px] bg-[#151515] p-[10px] flex flex-col gap-y-[20px] border-solid border-[white] border-[1px] rounded-[10px]",
                              children: [
                                h.jsxs("div", {
                                  className:
                                    "w-[100%]  flex flex-row justify-between",
                                  children: [
                                    h.jsxs("div", {
                                      className:
                                        " w-[50%] flex flex-row justify-start items-center gap-x-[10px] ",
                                      children: [
                                        h.jsx("img", {
                                          className: "avatar",
                                          src: C1,
                                          alt: "",
                                        }),
                                        h.jsx("p", {
                                          className:
                                            "text-[13px] font-sans1 font-bold text-[#767b80]",
                                          children: "mostafa",
                                        }),
                                      ],
                                    }),
                                    h.jsx("img", {
                                      className: "virgol",
                                      src: T1,
                                      alt: "",
                                    }),
                                  ],
                                }),
                                h.jsx("p", {
                                  className:
                                    "text-[11px] font-sans1 font-bold text-[grey] text-right",
                                  children: r.name,
                                }),
                              ],
                            }),
                          },
                          r.id
                        )
                      ),
              }),
            }),
          ],
        }),
      })
    );
  };
function P1(e) {
  return h.jsxs("div", {
    className: "border rounded-[10px]  mb-1",
    children: [
      h.jsxs("button", {
        className: `w-full p-4 text-left bg-[#383737] 
                transition duration-300 flex flex-row justify-between items-center rounded-[10px] ${
                  e.isOpen && "rounded-b-none"
                }`,
        onClick: e.toggleAccordion,
        children: [
          h.jsxs("div", {
            className: `text-[16px] font-sans font-bold text-[#FFFFFF] ${
              e.isOpen && "text-[#DF8602]"
            } max-sm:text-[10px]`,
            children: [e.title, " "],
          }),
          h.jsx("span", {
            className: `float-right transform ${
              e.isOpen ? "rotate-45" : "rotate-0"
            }  
                                 transition-transform duration-300 text-[24px] text-[#DF8602]`,
            children: "+",
          }),
        ],
      }),
      e.isOpen &&
        h.jsx("div", {
          className:
            " rounded-[10px] rounded-t-none bg-[#383737] text-[#ABABAB] font-sans font-bold text-[15px] pl-[10px] pr-[10px] pb-[15px]",
          children: e.data,
        }),
    ],
  });
}
const N1 = () => {
    const e = (i) => {
        const s = t.map((l) =>
          l.key === i ? { ...l, isOpen: !l.isOpen } : { ...l, isOpen: !1 }
        );
        n(s);
      },
      [t, n] = F.useState([]),
      r = async () => {
        try {
          let i = await U(
            "https://raw.githubusercontent.com/kraken-ship/Filimoo-api-1/main/assets/db.json"
          );
          n(i.data.ask);
        } catch (i) {
          console.log(i.message);
        }
      };
    return (
      F.useEffect(() => {
        r();
      }, []),
      h.jsxs("div", {
        className:
          "pt-[100px] pb-[100px] pr-[150px] pl-[150px] flex flex-col gap-y-[30px] justify-center items-center bg-black sm:max-lg:p-[20px] max-sm:p-[10px]",
        children: [
          h.jsx("h1", {
            className: " font-sans1 font-bold text-[#FFFFFF] text-[20px]",
            children: "سوالات متداول",
          }),
          h.jsx("p", {
            className: "font-sans1 font-bold text-[#898989] text-[14px]",
            children: "سوال شایع دیگر کاربران شاید برای شما پیش آمده باشد",
          }),
          h.jsx("div", {
            className: "p-2s w-[100%]",
            children:
              t == null
                ? void 0
                : t.map((i) =>
                    h.jsx(
                      P1,
                      {
                        title: i.title,
                        data: i.data,
                        isOpen: i.isOpen,
                        toggleAccordion: () => e(i.key),
                      },
                      i.key
                    )
                  ),
          }),
        ],
      })
    );
  },
  A1 =
    "data:image/jpeg;base64,UklGRl4LAABXRUJQVlA4WAoAAAAQAAAAwAAAPwAAQUxQSKcEAAABv6CobRtoyv5R+aPdQSJi/rPGC4KaIAgKKAbUte3JIkkBsRmkpWxoyPkfa5M3sdT52P0T0X8Hbts4kj1zvSiZktkv0OPsuNfk6QqHyjyKp+fb84+PCx5sPHks9HQLMQd6syUud0cPN1CmN/tLihM93NdpAH3Rw32dGLjSw32dOlChh/s6ZaBAD/d1cvJup6f7OpGvoj/f14ko5JIC/QaM9Nv2/zzyMZeSfwNfvkxuA6fIUewv+FRa7/U4mdyNsUc7orcjflYTlF2xHulEBPKRdLURxorAeiSzA1tczA9+AjHEaNeLmblZ4/XdEOums4WqcJ140NjmzcgoQkkKzEkxf5LFy2CD9fbLAGYMgRa2uptelOoKzGkxGextnbW22cgOZwkisdmmdhv5zlbDGbVZyYohCPpis03tNnqx2QMMbLCjJUMUjU+46ox3EUrKyMHRgvY4NLBwboxWMYVhNFPRXOG60Lebuwjk6SUHOoJYxV1k6bkyeTRZDKMZwqKSRJDorhJdL4WSd8SyDAUd3I8IaMEH9K805q4WYHdISLXu3kSRLfByC5vHFb2/IjIPc6t4zqhWMeWC1Debe0juVuq6GBhyFxA4bJxbxd2GI1MxNMZ7CLyjTEGQK4/RtNGc7/RcSGm5MKPfQzLQpsDICT0vlmFDA3FoXzZLzpNVobmX1BkYcaCC4UtDyzPNu7QKSO1Hby4UqJS68q2DaZXcf8zSpr88xpmlLjKz3vJELk/tEGBekvLJrtCAuqDkQk4TfaTk+tXqm1lyXgaINrTwGpuI0VavlCCwx1o3RW1CyCFWk++sBcMsZU982YjRyQe9gRjVQDyADO+FVPL5S9JoA3i2XswrKEpi+FOuyzjwlEbRMX9AnAPQdBg1PJomIyQOFF5rfBL2LOWIjbJSZozBrNK5b0Y+QDI+IA1KhiuQpoESFIYNkj4hDQpUudbYCHnSyEr5dPI1OdGyHojSmXucaXDMzPIcEy6GdBPkNhScBldA3qO6nRhOrehONNglz1FKY4NrKccw0IxqhGxHKRbIH/ZqwPkJ1GwYKCotCQH7qf8uDYvFDmC6/4327pDglrSj3kNnk3O20bwbcmk2nFcc/D7rGyK4lOiYzFvaSESm9u3Jm5KRiJJpZXlyBxu8Ey2d3+aqHg7da6JZlU5Eu867EJEloZmILAntwQi5T3MuqThjnSBf/B6PTAbvRw5e72okFRTtCB+M4skE2bMNkmsAkOgBLDGh8nmP3ZPRSkc08VU7935k5YAScm1j9FYiXsRughw65JKO1rm3kpRSuO4z5K5A+ni0E//U244DVaz137H/P+phr1UeeEut+4kYVDSXjlqjowvt+k36NrNvJK8VxnqCERwCPoh8v0HM/nWnzpxIVtKxnKAExTaQHLZ+6cO5TH9fS+5l57EChGqnXBBaBAiZrvWS0rWdULYYniftocAD2wAEnZ7tyDbbv2I8LQ56tLEGQrBT7jbKRs+2AwnoAaTixMsIraNZXOjhBglIVCWCP0F5SLQVFI/n1245HTORnz884glGWaI4Eag/Cz3f4Wi9hAkh1t7y2ZGMtbX5BOBj7TVfVn0AAAAAVlA4IJAGAADwKACdASrBAEAAPmUokEWlo6Ib/BxQWAZEtIAK8i/kXar/YfyW93cqrtEPrv9k/Mj8qvMA8weAF+M/yH+o/l3+TPJAVu/tfqBen3xP/O/yv+q+Sf+n/kd7gfSv/AeqT+a/8z+P/0D1o/l/6AeT78+/AD4AP4X/Rf+B+oH7gfR7+Tf4r/B/kJ7Efxf+Zf8/3A/4x/KP9r/cPZ29QH7Aewv+r33/pvLpFeb9DOtEPLZVryHiuQ1v64RIps/9u76bkpvA5toYiEvWyV4yEQcVSaoyGYEM2dr4ENxjim+J2ZmB/9QC0CjHmsLv3SfP9GXCADjk74MAa/ZAEcIyYpdDgz7y65Ns24ozasW8mn5LswUJX6uDsQ3df0CUDhjwrFAepztfv3cZN0h4WU551XPBOnNIy2UfRxIA/hAq6YfvBHPcQd+ew9E3jOVsUXT3NMqG2AAA/vz4RK/iqoWrSIv+/ccwHv51NzCKthdW4E2IlfmG8A+N0FEc/W+hPeixf6gbQwbSmWUj9XK/0sna/bfZck8P0LQIXuZ4rcXTKD8KpQF/bllvjH46G4ASehdV3cbnk+L5JT9qMeirbY9wvjoJYkOrOzcx2OKrQSq4uIYWfRyK9ky6fo8PHMv3RsUFa2l6BYzKcCjtRq2KnlAyVV1G9D1GsJF5jnsl6L6NfKro1AL3lSdvIPOtKlizCe07y3NWHtdF2dAfUnoOQ+SVWirMAnZDKRBo54eSixpUqRL6e6jjKcswGj0BYqoFD7whZGdQ+adLYK9TxKZM1figieh3pDnqo0/qZrnVC4bY1Xz1bRt+1xr3mPYeHJo43gyltjdpK9E2qAYChhOM0/Fl2f/nleqGyMY5lMfQcwaAZQ6GIYR5yTRfyuzoDbIFtykSRvoxOhqG6+BsCD8xgh8EtgBCvf67C8m4CwsLOb4NZX3SPEz+HEAKZoK2ImQs2kye8iIRQ//X51V+1AC+n3h/2C2ITFzfg6ABnQ4bUrkrtAbFoidRXtVrCuZvTe2fQvuHYvF6PF5ZU9LY7w5XxwtPHn7h7kpajaBaWsqvsNsEr88YIA8SzvJmIfU23ThWvCor91+sVcTQgqNjXDy/nTmkP0CHwdn7u0rvMdfFGHR0jGjs8s6kNMWHE7S//PjesYgHXy479tZr11H1R9Px6iRaw8/CPeN16odA5TNaywWXm3Ar44hiFbIvO7bx/4qe47zYP8cYfzUl8PYvVj3XmAXPeZu1L4/UYNU4cDspxkFKtmlrvymW7876HXV1nwQwvhcbtKpYt92fOnLjax1WrFkeP80jYiopDOUSGvCkEgws2FjTjn7vg23qNiEnnd+2pJueNhCx6fvjBssrNbdfOuRLShQuyUTKoWa6BUI8JVactXv5EHxeLJTczTS5WCvCXyD0ACj1HZKkduONMummdBRbPhT+Bo6R5chuqUMM64Cczahpb8sdlz0VQLV7wD14XoCGPvT+oFOeNsheXwmNAdrz7+fk/oennVvbuFv98nm4kxkyNLwsp54/CACmZ6yXwBXid/r7H2Mn/Vf4b8E/jGqFhLi+4bZp0Br6L44YSGCVr9SxHCcuYElaYfR94AB/Flp/iYqmHyLOgajf52nCcovWvzNv4gVtIfCmpkBFSqd+D3M8BUK2pJueNkd3WSHAbgSpeufOSXqzmaneTxuav0v2WMEw3NQJw9fYlslyuAi1Q16NPO0lQa13/pddXubqaOLKCU0O4MQ7uYnmHLfXsjnvn9JVdJyhmS4C133WNT+eUJXdet9+7WUPzkJGI/lxObMRUvVpsdxyY8864q0pIE/5ajiDE3U/2EibgCJ/GuUqVtpLRUWcLuKb4P8XoxKX5D7SUgCuJ6gr6/ruSngFz3mbtS+P1FsSYVuIeuTW/BbP49vGe64uvLFq4IqeeER8LEUePZWAdz40THYZ4UUgX9YQrNuDlUZZB44Qj8J4q0NRbQrq2HDdqZNfJRY0qVIm4W50n9TiLxMurKm8l/xMnCS+xx2tEBQvy0Kpnf5cqmpZ6ddqDv+0B5NBgtTyaxfhlephyQ5BVwAjsBUxa3zQvfwTjHxdRfs7c27v0lsjrflZE5DdexxenG+TWQ+/P+R16d/BDuO0y2S4eALIqfUjWBnhjy3GjQx3HQvYq56xsEGEexjse5EI+f4MNn0YDAnwBZR1HuDDo7t2cIjKQN6nlnkleibU1TiB//Q4P9DnO3d4O71P9hIm4AiWEynrKt1Idx5F/0aIAAA=",
  j1 = () => {
    const [e, t] = F.useState([]),
      [n, r] = F.useState([]),
      [i, s] = F.useState([]),
      l = async () => {
        try {
          let o = await U(
            "https://raw.githubusercontent.com/kraken-ship/Filimoo-api-1/main/assets/db.json"
          );
          t(o.data.footer_data1);
          let a = await U(
            "https://raw.githubusercontent.com/kraken-ship/Filimoo-api-1/main/assets/db.json"
          );
          r(a.data.footer_data2);
          let u = await U(
            "https://raw.githubusercontent.com/kraken-ship/Filimoo-api-1/main/assets/db.json"
          );
          s(u.data.footer_data3);
        } catch (o) {
          console.log(o.message);
        }
      };
    return (
      F.useEffect(() => {
        l();
      }, []),
      h.jsxs(h.Fragment, {
        children: [
          h.jsxs("footer", {
            id: "footer",
            className:
              "w-[100%] bg-[#0B1811] flex flex-col pr-[100px] pl-[100px] pt-[60px] pb-[60px] gap-y-[40px] justify-center items-center sm:max-lg:p-[20px]  max-sm:p-[10px]",
            children: [
              h.jsx("div", { children: h.jsx("img", { src: A1, alt: "" }) }),
              h.jsx("div", {
                className:
                  "inside-box22 sm:max-lg:flex-col sm:max-lg:gap-y-[10px]   max-sm:flex-col max-sm:gap-y-[10px]",
                children:
                  e == null
                    ? void 0
                    : e.map((o) =>
                        h.jsx(h.Fragment, {
                          children: h.jsxs(
                            "div",
                            {
                              children: [
                                h.jsx("img", { src: na, alt: "" }),
                                h.jsx("p", {
                                  className:
                                    "font-bold text-[14px] text-[#d3d3d3] max-sm:text-[12px]",
                                  children: o.text,
                                }),
                              ],
                            },
                            o.id
                          ),
                        })
                      ),
              }),
              h.jsxs("div", {
                className: "button22",
                children: [
                  h.jsx("img", { src: Kd, alt: "" }),
                  h.jsx("p", { children: "خرید اشتراک و تماشا" }),
                ],
              }),
            ],
          }),
          h.jsxs("div", {
            className:
              "w-[100%]  pr-[10px] pl-[10px] flex flex-row justify-between items-center bg-[#2b2a2a] relative ",
            children: [
              h.jsxs("div", {
                className:
                  "flex flex-row justify-start items-center  gap-x-[15px] sm:max-lg:gap-x-[5px]   max-sm:gap-x-[5px]",
                children: [
                  n == null
                    ? void 0
                    : n.map((o) =>
                        h.jsx(h.Fragment, {
                          children: h.jsxs(
                            "div",
                            {
                              id: "Imagedown",
                              className:
                                "flex flex-row justify-start items-center p-[5px] gap-x-[5px] ",
                              children: [
                                h.jsx("img", {
                                  className: "w-[20px] hover:color-[white] max-sm:w-[10px]",
                                  src: o.image,
                                  alt: "",
                                }),
                                h.jsx("p", {
                                  className:
                                    "text-[#d3d3d3] font-sans1 font-normal text-[10px] hover:text-[white] duration-300 cursor-pointer max-sm:text-[5px]",
                                  children: o.text,
                                }),
                              ],
                            },
                            o.id
                          ),
                        })
                      ),
                  i == null
                    ? void 0
                    : i.map((o, a) => {
                        if (a === 0)
                          return h.jsxs(
                            "div",
                            {
                              id: o.flag_id,
                              className:
                                "flex flex-row justify-start items-center p-[5px] gap-x-[5px] ",
                              children: [
                                h.jsx("img", {
                                  className: "w-[12px]",
                                  src: o.image,
                                  alt: "",
                                }),
                                h.jsx("p", {
                                  className:
                                    "text-[#d3d3d3] font-sans1 font-normal text-[10px] hover:text-[white] duration-300 cursor-pointer max-sm:text-[5px]",
                                  children: o.title,
                                }),
                                h.jsxs("div", {
                                  id: o.flag_id2,
                                  className:
                                    "w-[50px] h-[50px] bg-[#171717] absolute  ",
                                  children: [
                                    h.jsx("p", { children: o.name1 }),
                                    h.jsx("p", { children: o.name2 }),
                                    h.jsx("p", { children: o.name3 }),
                                    h.jsx("p", { children: o.name4 }),
                                    h.jsx("p", { children: o.name5 }),
                                  ],
                                }),
                              ],
                            },
                            o.id
                          );
                      }),
                ],
              }),
              i == null
                ? void 0
                : i.map((o, a) => {
                    if (a === 1)
                      return h.jsxs(
                        "div",
                        {
                          id: o.flag_id,
                          className:
                            "flex flex-row justify-start items-center p-[5px] gap-x-[5px] ",
                          children: [
                            h.jsx("img", {
                              className: "w-[12px]",
                              src: o.image,
                              alt: "",
                            }),
                            h.jsx("p", {
                              className:
                                "text-[#d3d3d3] font-sans1 font-normal text-[10px] hover:text-[white] duration-300 cursor-pointer max-sm:text-[5px]",
                              children: o.title,
                            }),
                            h.jsxs("div", {
                              id: o.flag_id2,
                              className:
                                "w-[50px] h-[50px] bg-[#171717] absolute  ",
                              children: [
                                h.jsx("p", { children: o.name1 }),
                                h.jsx("p", { children: o.name2 }),
                                h.jsx("p", { children: o.name3 }),
                                h.jsx("p", { children: o.name4 }),
                                h.jsx("p", { children: o.name5 }),
                              ],
                            }),
                          ],
                        },
                        o.id
                      );
                  }),
            ],
          }),
        ],
      })
    );
  },
  L1 = () =>
    h.jsxs(h.Fragment, {
      children: [
        h.jsx(dh, {}),
        h.jsx(d1, {}),
        h.jsx(f1, {}),
        h.jsx(p1, {}),
        h.jsx(h1, {}),
        h.jsx(w1, {}),
        h.jsx(E1, {}),
        h.jsx(k1, {}),
        h.jsx(N1, {}),
        h.jsx(j1, {}),
      ],
    });
el.createRoot(document.getElementById("root")).render(
  h.jsx(h.Fragment, { children: h.jsx(L1, {}) })
);
