var Bt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function It(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
function Lt(r) {
  if (r.__esModule) return r;
  var e = r.default;
  if (typeof e == "function") {
    var t = function n() {
      return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(r).forEach(function(n) {
    var s = Object.getOwnPropertyDescriptor(r, n);
    Object.defineProperty(t, n, s.get ? s : {
      enumerable: !0,
      get: function() {
        return r[n];
      }
    });
  }), t;
}
var Oe = { exports: {} }, Re = { exports: {} };
/*! Axios v1.9.0 Copyright (c) 2025 Matt Zabriskie and contributors */
function Ze(r, e) {
  return function() {
    return r.apply(e, arguments);
  };
}
const { toString: Ft } = Object.prototype, { getPrototypeOf: Ce } = Object, { iterator: re, toStringTag: Qe } = Symbol, ne = /* @__PURE__ */ ((r) => (e) => {
  const t = Ft.call(e);
  return r[t] || (r[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), j = (r) => (r = r.toLowerCase(), (e) => ne(e) === r), se = (r) => (e) => typeof e === r, { isArray: I } = Array, q = se("undefined");
function $t(r) {
  return r !== null && !q(r) && r.constructor !== null && !q(r.constructor) && C(r.constructor.isBuffer) && r.constructor.isBuffer(r);
}
const et = j("ArrayBuffer");
function qt(r) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(r) : e = r && r.buffer && et(r.buffer), e;
}
const Ht = se("string"), C = se("function"), tt = se("number"), ie = (r) => r !== null && typeof r == "object", Wt = (r) => r === !0 || r === !1, V = (r) => {
  if (ne(r) !== "object")
    return !1;
  const e = Ce(r);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Qe in r) && !(re in r);
}, Jt = j("Date"), zt = j("File"), Kt = j("Blob"), Gt = j("FileList"), Vt = (r) => ie(r) && C(r.pipe), Xt = (r) => {
  let e;
  return r && (typeof FormData == "function" && r instanceof FormData || C(r.append) && ((e = ne(r)) === "formdata" || // detect form-data instance
  e === "object" && C(r.toString) && r.toString() === "[object FormData]"));
}, Yt = j("URLSearchParams"), [Zt, Qt, er, tr] = ["ReadableStream", "Request", "Response", "Headers"].map(j), rr = (r) => r.trim ? r.trim() : r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function W(r, e, { allOwnKeys: t = !1 } = {}) {
  if (r === null || typeof r > "u")
    return;
  let n, s;
  if (typeof r != "object" && (r = [r]), I(r))
    for (n = 0, s = r.length; n < s; n++)
      e.call(null, r[n], n, r);
  else {
    const i = t ? Object.getOwnPropertyNames(r) : Object.keys(r), o = i.length;
    let c;
    for (n = 0; n < o; n++)
      c = i[n], e.call(null, r[c], c, r);
  }
}
function rt(r, e) {
  e = e.toLowerCase();
  const t = Object.keys(r);
  let n = t.length, s;
  for (; n-- > 0; )
    if (s = t[n], e === s.toLowerCase())
      return s;
  return null;
}
const v = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Bt, nt = (r) => !q(r) && r !== v;
function ye() {
  const { caseless: r } = nt(this) && this || {}, e = {}, t = (n, s) => {
    const i = r && rt(e, s) || s;
    V(e[i]) && V(n) ? e[i] = ye(e[i], n) : V(n) ? e[i] = ye({}, n) : I(n) ? e[i] = n.slice() : e[i] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && W(arguments[n], t);
  return e;
}
const nr = (r, e, t, { allOwnKeys: n } = {}) => (W(e, (s, i) => {
  t && C(s) ? r[i] = Ze(s, t) : r[i] = s;
}, { allOwnKeys: n }), r), sr = (r) => (r.charCodeAt(0) === 65279 && (r = r.slice(1)), r), ir = (r, e, t, n) => {
  r.prototype = Object.create(e.prototype, n), r.prototype.constructor = r, Object.defineProperty(r, "super", {
    value: e.prototype
  }), t && Object.assign(r.prototype, t);
}, or = (r, e, t, n) => {
  let s, i, o;
  const c = {};
  if (e = e || {}, r == null) return e;
  do {
    for (s = Object.getOwnPropertyNames(r), i = s.length; i-- > 0; )
      o = s[i], (!n || n(o, r, e)) && !c[o] && (e[o] = r[o], c[o] = !0);
    r = t !== !1 && Ce(r);
  } while (r && (!t || t(r, e)) && r !== Object.prototype);
  return e;
}, ar = (r, e, t) => {
  r = String(r), (t === void 0 || t > r.length) && (t = r.length), t -= e.length;
  const n = r.indexOf(e, t);
  return n !== -1 && n === t;
}, cr = (r) => {
  if (!r) return null;
  if (I(r)) return r;
  let e = r.length;
  if (!tt(e)) return null;
  const t = new Array(e);
  for (; e-- > 0; )
    t[e] = r[e];
  return t;
}, ur = /* @__PURE__ */ ((r) => (e) => r && e instanceof r)(typeof Uint8Array < "u" && Ce(Uint8Array)), fr = (r, e) => {
  const n = (r && r[re]).call(r);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const i = s.value;
    e.call(r, i[0], i[1]);
  }
}, lr = (r, e) => {
  let t;
  const n = [];
  for (; (t = r.exec(e)) !== null; )
    n.push(t);
  return n;
}, dr = j("HTMLFormElement"), hr = (r) => r.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, n, s) {
    return n.toUpperCase() + s;
  }
), ve = (({ hasOwnProperty: r }) => (e, t) => r.call(e, t))(Object.prototype), pr = j("RegExp"), st = (r, e) => {
  const t = Object.getOwnPropertyDescriptors(r), n = {};
  W(t, (s, i) => {
    let o;
    (o = e(s, i, r)) !== !1 && (n[i] = o || s);
  }), Object.defineProperties(r, n);
}, mr = (r) => {
  st(r, (e, t) => {
    if (C(r) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const n = r[t];
    if (C(n)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + t + "'");
      });
    }
  });
}, yr = (r, e) => {
  const t = {}, n = (s) => {
    s.forEach((i) => {
      t[i] = !0;
    });
  };
  return I(r) ? n(r) : n(String(r).split(e)), t;
}, gr = () => {
}, br = (r, e) => r != null && Number.isFinite(r = +r) ? r : e;
function wr(r) {
  return !!(r && C(r.append) && r[Qe] === "FormData" && r[re]);
}
const Er = (r) => {
  const e = new Array(10), t = (n, s) => {
    if (ie(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[s] = n;
        const i = I(n) ? [] : {};
        return W(n, (o, c) => {
          const l = t(o, s + 1);
          !q(l) && (i[c] = l);
        }), e[s] = void 0, i;
      }
    }
    return n;
  };
  return t(r, 0);
}, Sr = j("AsyncFunction"), Ar = (r) => r && (ie(r) || C(r)) && C(r.then) && C(r.catch), it = ((r, e) => r ? setImmediate : e ? ((t, n) => (v.addEventListener("message", ({ source: s, data: i }) => {
  s === v && i === t && n.length && n.shift()();
}, !1), (s) => {
  n.push(s), v.postMessage(t, "*");
}))(`axios@${Math.random()}`, []) : (t) => setTimeout(t))(
  typeof setImmediate == "function",
  C(v.postMessage)
), Tr = typeof queueMicrotask < "u" ? queueMicrotask.bind(v) : typeof process < "u" && process.nextTick || it, Or = (r) => r != null && C(r[re]);
var a = {
  isArray: I,
  isArrayBuffer: et,
  isBuffer: $t,
  isFormData: Xt,
  isArrayBufferView: qt,
  isString: Ht,
  isNumber: tt,
  isBoolean: Wt,
  isObject: ie,
  isPlainObject: V,
  isReadableStream: Zt,
  isRequest: Qt,
  isResponse: er,
  isHeaders: tr,
  isUndefined: q,
  isDate: Jt,
  isFile: zt,
  isBlob: Kt,
  isRegExp: pr,
  isFunction: C,
  isStream: Vt,
  isURLSearchParams: Yt,
  isTypedArray: ur,
  isFileList: Gt,
  forEach: W,
  merge: ye,
  extend: nr,
  trim: rr,
  stripBOM: sr,
  inherits: ir,
  toFlatObject: or,
  kindOf: ne,
  kindOfTest: j,
  endsWith: ar,
  toArray: cr,
  forEachEntry: fr,
  matchAll: lr,
  isHTMLForm: dr,
  hasOwnProperty: ve,
  hasOwnProp: ve,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: st,
  freezeMethods: mr,
  toObjectSet: yr,
  toCamelCase: hr,
  noop: gr,
  toFiniteNumber: br,
  findKey: rt,
  global: v,
  isContextDefined: nt,
  isSpecCompliantForm: wr,
  toJSONObject: Er,
  isAsyncFn: Sr,
  isThenable: Ar,
  setImmediate: it,
  asap: Tr,
  isIterable: Or
};
function g(r, e, t, n, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = r, this.name = "AxiosError", e && (this.code = e), t && (this.config = t), n && (this.request = n), s && (this.response = s, this.status = s.status ? s.status : null);
}
a.inherits(g, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const ot = g.prototype, at = {};
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
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((r) => {
  at[r] = { value: r };
});
Object.defineProperties(g, at);
Object.defineProperty(ot, "isAxiosError", { value: !0 });
g.from = (r, e, t, n, s, i) => {
  const o = Object.create(ot);
  return a.toFlatObject(r, o, function(l) {
    return l !== Error.prototype;
  }, (c) => c !== "isAxiosError"), g.call(o, r.message, e, t, n, s), o.cause = r, o.name = r.name, i && Object.assign(o, i), o;
};
var Rr = null;
function ge(r) {
  return a.isPlainObject(r) || a.isArray(r);
}
function ct(r) {
  return a.endsWith(r, "[]") ? r.slice(0, -2) : r;
}
function Me(r, e, t) {
  return r ? r.concat(e).map(function(s, i) {
    return s = ct(s), !t && i ? "[" + s + "]" : s;
  }).join(t ? "." : "") : e;
}
function Cr(r) {
  return a.isArray(r) && !r.some(ge);
}
const xr = a.toFlatObject(a, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function oe(r, e, t) {
  if (!a.isObject(r))
    throw new TypeError("target must be an object");
  e = e || new FormData(), t = a.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, p) {
    return !a.isUndefined(p[m]);
  });
  const n = t.metaTokens, s = t.visitor || f, i = t.dots, o = t.indexes, l = (t.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(e);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function u(h) {
    if (h === null) return "";
    if (a.isDate(h))
      return h.toISOString();
    if (!l && a.isBlob(h))
      throw new g("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(h) || a.isTypedArray(h) ? l && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function f(h, m, p) {
    let S = h;
    if (h && !p && typeof h == "object") {
      if (a.endsWith(m, "{}"))
        m = n ? m : m.slice(0, -2), h = JSON.stringify(h);
      else if (a.isArray(h) && Cr(h) || (a.isFileList(h) || a.endsWith(m, "[]")) && (S = a.toArray(h)))
        return m = ct(m), S.forEach(function(b, x) {
          !(a.isUndefined(b) || b === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Me([m], x, i) : o === null ? m : m + "[]",
            u(b)
          );
        }), !1;
    }
    return ge(h) ? !0 : (e.append(Me(p, m, i), u(h)), !1);
  }
  const d = [], y = Object.assign(xr, {
    defaultVisitor: f,
    convertValue: u,
    isVisitable: ge
  });
  function w(h, m) {
    if (!a.isUndefined(h)) {
      if (d.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      d.push(h), a.forEach(h, function(S, A) {
        (!(a.isUndefined(S) || S === null) && s.call(
          e,
          S,
          a.isString(A) ? A.trim() : A,
          m,
          y
        )) === !0 && w(S, m ? m.concat(A) : [A]);
      }), d.pop();
    }
  }
  if (!a.isObject(r))
    throw new TypeError("data must be an object");
  return w(r), e;
}
function Ue(r) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(r).replace(/[!'()~]|%20|%00/g, function(n) {
    return e[n];
  });
}
function xe(r, e) {
  this._pairs = [], r && oe(r, this, e);
}
const ut = xe.prototype;
ut.append = function(e, t) {
  this._pairs.push([e, t]);
};
ut.toString = function(e) {
  const t = e ? function(n) {
    return e.call(this, n, Ue);
  } : Ue;
  return this._pairs.map(function(s) {
    return t(s[0]) + "=" + t(s[1]);
  }, "").join("&");
};
function _r(r) {
  return encodeURIComponent(r).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ft(r, e, t) {
  if (!e)
    return r;
  const n = t && t.encode || _r;
  a.isFunction(t) && (t = {
    serialize: t
  });
  const s = t && t.serialize;
  let i;
  if (s ? i = s(e, t) : i = a.isURLSearchParams(e) ? e.toString() : new xe(e, t).toString(n), i) {
    const o = r.indexOf("#");
    o !== -1 && (r = r.slice(0, o)), r += (r.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return r;
}
class jr {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(e, t, n) {
    return this.handlers.push({
      fulfilled: e,
      rejected: t,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(e) {
    a.forEach(this.handlers, function(n) {
      n !== null && e(n);
    });
  }
}
var Be = jr, lt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Dr = typeof URLSearchParams < "u" ? URLSearchParams : xe, Pr = typeof FormData < "u" ? FormData : null, kr = typeof Blob < "u" ? Blob : null, Nr = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Dr,
    FormData: Pr,
    Blob: kr
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
const _e = typeof window < "u" && typeof document < "u", be = typeof navigator == "object" && navigator || void 0, vr = _e && (!be || ["ReactNative", "NativeScript", "NS"].indexOf(be.product) < 0), Mr = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Ur = _e && window.location.href || "http://localhost";
var Br = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  hasBrowserEnv: _e,
  hasStandardBrowserWebWorkerEnv: Mr,
  hasStandardBrowserEnv: vr,
  navigator: be,
  origin: Ur
}), R = {
  ...Br,
  ...Nr
};
function Ir(r, e) {
  return oe(r, new R.classes.URLSearchParams(), Object.assign({
    visitor: function(t, n, s, i) {
      return R.isNode && a.isBuffer(t) ? (this.append(n, t.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function Lr(r) {
  return a.matchAll(/\w+|\[(\w*)]/g, r).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function Fr(r) {
  const e = {}, t = Object.keys(r);
  let n;
  const s = t.length;
  let i;
  for (n = 0; n < s; n++)
    i = t[n], e[i] = r[i];
  return e;
}
function dt(r) {
  function e(t, n, s, i) {
    let o = t[i++];
    if (o === "__proto__") return !0;
    const c = Number.isFinite(+o), l = i >= t.length;
    return o = !o && a.isArray(s) ? s.length : o, l ? (a.hasOwnProp(s, o) ? s[o] = [s[o], n] : s[o] = n, !c) : ((!s[o] || !a.isObject(s[o])) && (s[o] = []), e(t, n, s[o], i) && a.isArray(s[o]) && (s[o] = Fr(s[o])), !c);
  }
  if (a.isFormData(r) && a.isFunction(r.entries)) {
    const t = {};
    return a.forEachEntry(r, (n, s) => {
      e(Lr(n), s, t, 0);
    }), t;
  }
  return null;
}
function $r(r, e, t) {
  if (a.isString(r))
    try {
      return (e || JSON.parse)(r), a.trim(r);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (0, JSON.stringify)(r);
}
const je = {
  transitional: lt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, t) {
    const n = t.getContentType() || "", s = n.indexOf("application/json") > -1, i = a.isObject(e);
    if (i && a.isHTMLForm(e) && (e = new FormData(e)), a.isFormData(e))
      return s ? JSON.stringify(dt(e)) : e;
    if (a.isArrayBuffer(e) || a.isBuffer(e) || a.isStream(e) || a.isFile(e) || a.isBlob(e) || a.isReadableStream(e))
      return e;
    if (a.isArrayBufferView(e))
      return e.buffer;
    if (a.isURLSearchParams(e))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let c;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Ir(e, this.formSerializer).toString();
      if ((c = a.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return oe(
          c ? { "files[]": e } : e,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return i || s ? (t.setContentType("application/json", !1), $r(e)) : e;
  }],
  transformResponse: [function(e) {
    const t = this.transitional || je.transitional, n = t && t.forcedJSONParsing, s = this.responseType === "json";
    if (a.isResponse(e) || a.isReadableStream(e))
      return e;
    if (e && a.isString(e) && (n && !this.responseType || s)) {
      const o = !(t && t.silentJSONParsing) && s;
      try {
        return JSON.parse(e);
      } catch (c) {
        if (o)
          throw c.name === "SyntaxError" ? g.from(c, g.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return e;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: R.classes.FormData,
    Blob: R.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
a.forEach(["delete", "get", "head", "post", "put", "patch"], (r) => {
  je.headers[r] = {};
});
var De = je;
const qr = a.toObjectSet([
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
  "user-agent"
]);
var Hr = (r) => {
  const e = {};
  let t, n, s;
  return r && r.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), t = o.substring(0, s).trim().toLowerCase(), n = o.substring(s + 1).trim(), !(!t || e[t] && qr[t]) && (t === "set-cookie" ? e[t] ? e[t].push(n) : e[t] = [n] : e[t] = e[t] ? e[t] + ", " + n : n);
  }), e;
};
const Ie = Symbol("internals");
function F(r) {
  return r && String(r).trim().toLowerCase();
}
function X(r) {
  return r === !1 || r == null ? r : a.isArray(r) ? r.map(X) : String(r);
}
function Wr(r) {
  const e = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = t.exec(r); )
    e[n[1]] = n[2];
  return e;
}
const Jr = (r) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());
function le(r, e, t, n, s) {
  if (a.isFunction(n))
    return n.call(this, e, t);
  if (s && (e = t), !!a.isString(e)) {
    if (a.isString(n))
      return e.indexOf(n) !== -1;
    if (a.isRegExp(n))
      return n.test(e);
  }
}
function zr(r) {
  return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
}
function Kr(r, e) {
  const t = a.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(r, n + t, {
      value: function(s, i, o) {
        return this[n].call(this, e, s, i, o);
      },
      configurable: !0
    });
  });
}
class ae {
  constructor(e) {
    e && this.set(e);
  }
  set(e, t, n) {
    const s = this;
    function i(c, l, u) {
      const f = F(l);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const d = a.findKey(s, f);
      (!d || s[d] === void 0 || u === !0 || u === void 0 && s[d] !== !1) && (s[d || l] = X(c));
    }
    const o = (c, l) => a.forEach(c, (u, f) => i(u, f, l));
    if (a.isPlainObject(e) || e instanceof this.constructor)
      o(e, t);
    else if (a.isString(e) && (e = e.trim()) && !Jr(e))
      o(Hr(e), t);
    else if (a.isObject(e) && a.isIterable(e)) {
      let c = {}, l, u;
      for (const f of e) {
        if (!a.isArray(f))
          throw TypeError("Object iterator must return a key-value pair");
        c[u = f[0]] = (l = c[u]) ? a.isArray(l) ? [...l, f[1]] : [l, f[1]] : f[1];
      }
      o(c, t);
    } else
      e != null && i(t, e, n);
    return this;
  }
  get(e, t) {
    if (e = F(e), e) {
      const n = a.findKey(this, e);
      if (n) {
        const s = this[n];
        if (!t)
          return s;
        if (t === !0)
          return Wr(s);
        if (a.isFunction(t))
          return t.call(this, s, n);
        if (a.isRegExp(t))
          return t.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, t) {
    if (e = F(e), e) {
      const n = a.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!t || le(this, this[n], n, t)));
    }
    return !1;
  }
  delete(e, t) {
    const n = this;
    let s = !1;
    function i(o) {
      if (o = F(o), o) {
        const c = a.findKey(n, o);
        c && (!t || le(n, n[c], c, t)) && (delete n[c], s = !0);
      }
    }
    return a.isArray(e) ? e.forEach(i) : i(e), s;
  }
  clear(e) {
    const t = Object.keys(this);
    let n = t.length, s = !1;
    for (; n--; ) {
      const i = t[n];
      (!e || le(this, this[i], i, e, !0)) && (delete this[i], s = !0);
    }
    return s;
  }
  normalize(e) {
    const t = this, n = {};
    return a.forEach(this, (s, i) => {
      const o = a.findKey(n, i);
      if (o) {
        t[o] = X(s), delete t[i];
        return;
      }
      const c = e ? zr(i) : String(i).trim();
      c !== i && delete t[i], t[c] = X(s), n[c] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const t = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (n, s) => {
      n != null && n !== !1 && (t[s] = e && a.isArray(n) ? n.join(", ") : n);
    }), t;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...t) {
    const n = new this(e);
    return t.forEach((s) => n.set(s)), n;
  }
  static accessor(e) {
    const n = (this[Ie] = this[Ie] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function i(o) {
      const c = F(o);
      n[c] || (Kr(s, o), n[c] = !0);
    }
    return a.isArray(e) ? e.forEach(i) : i(e), this;
  }
}
ae.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(ae.prototype, ({ value: r }, e) => {
  let t = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => r,
    set(n) {
      this[t] = n;
    }
  };
});
a.freezeMethods(ae);
var _ = ae;
function de(r, e) {
  const t = this || De, n = e || t, s = _.from(n.headers);
  let i = n.data;
  return a.forEach(r, function(c) {
    i = c.call(t, i, s.normalize(), e ? e.status : void 0);
  }), s.normalize(), i;
}
function ht(r) {
  return !!(r && r.__CANCEL__);
}
function L(r, e, t) {
  g.call(this, r ?? "canceled", g.ERR_CANCELED, e, t), this.name = "CanceledError";
}
a.inherits(L, g, {
  __CANCEL__: !0
});
function pt(r, e, t) {
  const n = t.config.validateStatus;
  !t.status || !n || n(t.status) ? r(t) : e(new g(
    "Request failed with status code " + t.status,
    [g.ERR_BAD_REQUEST, g.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
function Gr(r) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(r);
  return e && e[1] || "";
}
function Vr(r, e) {
  r = r || 10;
  const t = new Array(r), n = new Array(r);
  let s = 0, i = 0, o;
  return e = e !== void 0 ? e : 1e3, function(l) {
    const u = Date.now(), f = n[i];
    o || (o = u), t[s] = l, n[s] = u;
    let d = i, y = 0;
    for (; d !== s; )
      y += t[d++], d = d % r;
    if (s = (s + 1) % r, s === i && (i = (i + 1) % r), u - o < e)
      return;
    const w = f && u - f;
    return w ? Math.round(y * 1e3 / w) : void 0;
  };
}
function Xr(r, e) {
  let t = 0, n = 1e3 / e, s, i;
  const o = (u, f = Date.now()) => {
    t = f, s = null, i && (clearTimeout(i), i = null), r.apply(null, u);
  };
  return [(...u) => {
    const f = Date.now(), d = f - t;
    d >= n ? o(u, f) : (s = u, i || (i = setTimeout(() => {
      i = null, o(s);
    }, n - d)));
  }, () => s && o(s)];
}
const Q = (r, e, t = 3) => {
  let n = 0;
  const s = Vr(50, 250);
  return Xr((i) => {
    const o = i.loaded, c = i.lengthComputable ? i.total : void 0, l = o - n, u = s(l), f = o <= c;
    n = o;
    const d = {
      loaded: o,
      total: c,
      progress: c ? o / c : void 0,
      bytes: l,
      rate: u || void 0,
      estimated: u && c && f ? (c - o) / u : void 0,
      event: i,
      lengthComputable: c != null,
      [e ? "download" : "upload"]: !0
    };
    r(d);
  }, t);
}, Le = (r, e) => {
  const t = r != null;
  return [(n) => e[0]({
    lengthComputable: t,
    total: r,
    loaded: n
  }), e[1]];
}, Fe = (r) => (...e) => a.asap(() => r(...e));
var Yr = R.hasStandardBrowserEnv ? /* @__PURE__ */ ((r, e) => (t) => (t = new URL(t, R.origin), r.protocol === t.protocol && r.host === t.host && (e || r.port === t.port)))(
  new URL(R.origin),
  R.navigator && /(msie|trident)/i.test(R.navigator.userAgent)
) : () => !0, Zr = R.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(r, e, t, n, s, i) {
      const o = [r + "=" + encodeURIComponent(e)];
      a.isNumber(t) && o.push("expires=" + new Date(t).toGMTString()), a.isString(n) && o.push("path=" + n), a.isString(s) && o.push("domain=" + s), i === !0 && o.push("secure"), document.cookie = o.join("; ");
    },
    read(r) {
      const e = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
      return e ? decodeURIComponent(e[3]) : null;
    },
    remove(r) {
      this.write(r, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Qr(r) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(r);
}
function en(r, e) {
  return e ? r.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : r;
}
function mt(r, e, t) {
  let n = !Qr(e);
  return r && (n || t == !1) ? en(r, e) : e;
}
const $e = (r) => r instanceof _ ? { ...r } : r;
function M(r, e) {
  e = e || {};
  const t = {};
  function n(u, f, d, y) {
    return a.isPlainObject(u) && a.isPlainObject(f) ? a.merge.call({ caseless: y }, u, f) : a.isPlainObject(f) ? a.merge({}, f) : a.isArray(f) ? f.slice() : f;
  }
  function s(u, f, d, y) {
    if (a.isUndefined(f)) {
      if (!a.isUndefined(u))
        return n(void 0, u, d, y);
    } else return n(u, f, d, y);
  }
  function i(u, f) {
    if (!a.isUndefined(f))
      return n(void 0, f);
  }
  function o(u, f) {
    if (a.isUndefined(f)) {
      if (!a.isUndefined(u))
        return n(void 0, u);
    } else return n(void 0, f);
  }
  function c(u, f, d) {
    if (d in e)
      return n(u, f);
    if (d in r)
      return n(void 0, u);
  }
  const l = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: c,
    headers: (u, f, d) => s($e(u), $e(f), d, !0)
  };
  return a.forEach(Object.keys(Object.assign({}, r, e)), function(f) {
    const d = l[f] || s, y = d(r[f], e[f], f);
    a.isUndefined(y) && d !== c || (t[f] = y);
  }), t;
}
var yt = (r) => {
  const e = M({}, r);
  let { data: t, withXSRFToken: n, xsrfHeaderName: s, xsrfCookieName: i, headers: o, auth: c } = e;
  e.headers = o = _.from(o), e.url = ft(mt(e.baseURL, e.url, e.allowAbsoluteUrls), r.params, r.paramsSerializer), c && o.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  );
  let l;
  if (a.isFormData(t)) {
    if (R.hasStandardBrowserEnv || R.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if ((l = o.getContentType()) !== !1) {
      const [u, ...f] = l ? l.split(";").map((d) => d.trim()).filter(Boolean) : [];
      o.setContentType([u || "multipart/form-data", ...f].join("; "));
    }
  }
  if (R.hasStandardBrowserEnv && (n && a.isFunction(n) && (n = n(e)), n || n !== !1 && Yr(e.url))) {
    const u = s && i && Zr.read(i);
    u && o.set(s, u);
  }
  return e;
};
const tn = typeof XMLHttpRequest < "u";
var rn = tn && function(r) {
  return new Promise(function(t, n) {
    const s = yt(r);
    let i = s.data;
    const o = _.from(s.headers).normalize();
    let { responseType: c, onUploadProgress: l, onDownloadProgress: u } = s, f, d, y, w, h;
    function m() {
      w && w(), h && h(), s.cancelToken && s.cancelToken.unsubscribe(f), s.signal && s.signal.removeEventListener("abort", f);
    }
    let p = new XMLHttpRequest();
    p.open(s.method.toUpperCase(), s.url, !0), p.timeout = s.timeout;
    function S() {
      if (!p)
        return;
      const b = _.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), O = {
        data: !c || c === "text" || c === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: b,
        config: r,
        request: p
      };
      pt(function(k) {
        t(k), m();
      }, function(k) {
        n(k), m();
      }, O), p = null;
    }
    "onloadend" in p ? p.onloadend = S : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(S);
    }, p.onabort = function() {
      p && (n(new g("Request aborted", g.ECONNABORTED, r, p)), p = null);
    }, p.onerror = function() {
      n(new g("Network Error", g.ERR_NETWORK, r, p)), p = null;
    }, p.ontimeout = function() {
      let x = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const O = s.transitional || lt;
      s.timeoutErrorMessage && (x = s.timeoutErrorMessage), n(new g(
        x,
        O.clarifyTimeoutError ? g.ETIMEDOUT : g.ECONNABORTED,
        r,
        p
      )), p = null;
    }, i === void 0 && o.setContentType(null), "setRequestHeader" in p && a.forEach(o.toJSON(), function(x, O) {
      p.setRequestHeader(O, x);
    }), a.isUndefined(s.withCredentials) || (p.withCredentials = !!s.withCredentials), c && c !== "json" && (p.responseType = s.responseType), u && ([y, h] = Q(u, !0), p.addEventListener("progress", y)), l && p.upload && ([d, w] = Q(l), p.upload.addEventListener("progress", d), p.upload.addEventListener("loadend", w)), (s.cancelToken || s.signal) && (f = (b) => {
      p && (n(!b || b.type ? new L(null, r, p) : b), p.abort(), p = null);
    }, s.cancelToken && s.cancelToken.subscribe(f), s.signal && (s.signal.aborted ? f() : s.signal.addEventListener("abort", f)));
    const A = Gr(s.url);
    if (A && R.protocols.indexOf(A) === -1) {
      n(new g("Unsupported protocol " + A + ":", g.ERR_BAD_REQUEST, r));
      return;
    }
    p.send(i || null);
  });
};
const nn = (r, e) => {
  const { length: t } = r = r ? r.filter(Boolean) : [];
  if (e || t) {
    let n = new AbortController(), s;
    const i = function(u) {
      if (!s) {
        s = !0, c();
        const f = u instanceof Error ? u : this.reason;
        n.abort(f instanceof g ? f : new L(f instanceof Error ? f.message : f));
      }
    };
    let o = e && setTimeout(() => {
      o = null, i(new g(`timeout ${e} of ms exceeded`, g.ETIMEDOUT));
    }, e);
    const c = () => {
      r && (o && clearTimeout(o), o = null, r.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(i) : u.removeEventListener("abort", i);
      }), r = null);
    };
    r.forEach((u) => u.addEventListener("abort", i));
    const { signal: l } = n;
    return l.unsubscribe = () => a.asap(c), l;
  }
};
var sn = nn;
const on = function* (r, e) {
  let t = r.byteLength;
  if (t < e) {
    yield r;
    return;
  }
  let n = 0, s;
  for (; n < t; )
    s = n + e, yield r.slice(n, s), n = s;
}, an = async function* (r, e) {
  for await (const t of cn(r))
    yield* on(t, e);
}, cn = async function* (r) {
  if (r[Symbol.asyncIterator]) {
    yield* r;
    return;
  }
  const e = r.getReader();
  try {
    for (; ; ) {
      const { done: t, value: n } = await e.read();
      if (t)
        break;
      yield n;
    }
  } finally {
    await e.cancel();
  }
}, qe = (r, e, t, n) => {
  const s = an(r, e);
  let i = 0, o, c = (l) => {
    o || (o = !0, n && n(l));
  };
  return new ReadableStream({
    async pull(l) {
      try {
        const { done: u, value: f } = await s.next();
        if (u) {
          c(), l.close();
          return;
        }
        let d = f.byteLength;
        if (t) {
          let y = i += d;
          t(y);
        }
        l.enqueue(new Uint8Array(f));
      } catch (u) {
        throw c(u), u;
      }
    },
    cancel(l) {
      return c(l), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, ce = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", gt = ce && typeof ReadableStream == "function", un = ce && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((r) => (e) => r.encode(e))(new TextEncoder()) : async (r) => new Uint8Array(await new Response(r).arrayBuffer())), bt = (r, ...e) => {
  try {
    return !!r(...e);
  } catch {
    return !1;
  }
}, fn = gt && bt(() => {
  let r = !1;
  const e = new Request(R.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return r = !0, "half";
    }
  }).headers.has("Content-Type");
  return r && !e;
}), He = 64 * 1024, we = gt && bt(() => a.isReadableStream(new Response("").body)), ee = {
  stream: we && ((r) => r.body)
};
ce && ((r) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !ee[e] && (ee[e] = a.isFunction(r[e]) ? (t) => t[e]() : (t, n) => {
      throw new g(`Response type '${e}' is not supported`, g.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const ln = async (r) => {
  if (r == null)
    return 0;
  if (a.isBlob(r))
    return r.size;
  if (a.isSpecCompliantForm(r))
    return (await new Request(R.origin, {
      method: "POST",
      body: r
    }).arrayBuffer()).byteLength;
  if (a.isArrayBufferView(r) || a.isArrayBuffer(r))
    return r.byteLength;
  if (a.isURLSearchParams(r) && (r = r + ""), a.isString(r))
    return (await un(r)).byteLength;
}, dn = async (r, e) => {
  const t = a.toFiniteNumber(r.getContentLength());
  return t ?? ln(e);
};
var hn = ce && (async (r) => {
  let {
    url: e,
    method: t,
    data: n,
    signal: s,
    cancelToken: i,
    timeout: o,
    onDownloadProgress: c,
    onUploadProgress: l,
    responseType: u,
    headers: f,
    withCredentials: d = "same-origin",
    fetchOptions: y
  } = yt(r);
  u = u ? (u + "").toLowerCase() : "text";
  let w = sn([s, i && i.toAbortSignal()], o), h;
  const m = w && w.unsubscribe && (() => {
    w.unsubscribe();
  });
  let p;
  try {
    if (l && fn && t !== "get" && t !== "head" && (p = await dn(f, n)) !== 0) {
      let O = new Request(e, {
        method: "POST",
        body: n,
        duplex: "half"
      }), D;
      if (a.isFormData(n) && (D = O.headers.get("content-type")) && f.setContentType(D), O.body) {
        const [k, U] = Le(
          p,
          Q(Fe(l))
        );
        n = qe(O.body, He, k, U);
      }
    }
    a.isString(d) || (d = d ? "include" : "omit");
    const S = "credentials" in Request.prototype;
    h = new Request(e, {
      ...y,
      signal: w,
      method: t.toUpperCase(),
      headers: f.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: S ? d : void 0
    });
    let A = await fetch(h);
    const b = we && (u === "stream" || u === "response");
    if (we && (c || b && m)) {
      const O = {};
      ["status", "statusText", "headers"].forEach((K) => {
        O[K] = A[K];
      });
      const D = a.toFiniteNumber(A.headers.get("content-length")), [k, U] = c && Le(
        D,
        Q(Fe(c), !0)
      ) || [];
      A = new Response(
        qe(A.body, He, k, () => {
          U && U(), m && m();
        }),
        O
      );
    }
    u = u || "text";
    let x = await ee[a.findKey(ee, u) || "text"](A, r);
    return !b && m && m(), await new Promise((O, D) => {
      pt(O, D, {
        data: x,
        headers: _.from(A.headers),
        status: A.status,
        statusText: A.statusText,
        config: r,
        request: h
      });
    });
  } catch (S) {
    throw m && m(), S && S.name === "TypeError" && /Load failed|fetch/i.test(S.message) ? Object.assign(
      new g("Network Error", g.ERR_NETWORK, r, h),
      {
        cause: S.cause || S
      }
    ) : g.from(S, S && S.code, r, h);
  }
});
const Ee = {
  http: Rr,
  xhr: rn,
  fetch: hn
};
a.forEach(Ee, (r, e) => {
  if (r) {
    try {
      Object.defineProperty(r, "name", { value: e });
    } catch {
    }
    Object.defineProperty(r, "adapterName", { value: e });
  }
});
const We = (r) => `- ${r}`, pn = (r) => a.isFunction(r) || r === null || r === !1;
var wt = {
  getAdapter: (r) => {
    r = a.isArray(r) ? r : [r];
    const { length: e } = r;
    let t, n;
    const s = {};
    for (let i = 0; i < e; i++) {
      t = r[i];
      let o;
      if (n = t, !pn(t) && (n = Ee[(o = String(t)).toLowerCase()], n === void 0))
        throw new g(`Unknown adapter '${o}'`);
      if (n)
        break;
      s[o || "#" + i] = n;
    }
    if (!n) {
      const i = Object.entries(s).map(
        ([c, l]) => `adapter ${c} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = e ? i.length > 1 ? `since :
` + i.map(We).join(`
`) : " " + We(i[0]) : "as no adapter specified";
      throw new g(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Ee
};
function he(r) {
  if (r.cancelToken && r.cancelToken.throwIfRequested(), r.signal && r.signal.aborted)
    throw new L(null, r);
}
function Je(r) {
  return he(r), r.headers = _.from(r.headers), r.data = de.call(
    r,
    r.transformRequest
  ), ["post", "put", "patch"].indexOf(r.method) !== -1 && r.headers.setContentType("application/x-www-form-urlencoded", !1), wt.getAdapter(r.adapter || De.adapter)(r).then(function(n) {
    return he(r), n.data = de.call(
      r,
      r.transformResponse,
      n
    ), n.headers = _.from(n.headers), n;
  }, function(n) {
    return ht(n) || (he(r), n && n.response && (n.response.data = de.call(
      r,
      r.transformResponse,
      n.response
    ), n.response.headers = _.from(n.response.headers))), Promise.reject(n);
  });
}
const Et = "1.9.0", ue = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((r, e) => {
  ue[r] = function(n) {
    return typeof n === r || "a" + (e < 1 ? "n " : " ") + r;
  };
});
const ze = {};
ue.transitional = function(e, t, n) {
  function s(i, o) {
    return "[Axios v" + Et + "] Transitional option '" + i + "'" + o + (n ? ". " + n : "");
  }
  return (i, o, c) => {
    if (e === !1)
      throw new g(
        s(o, " has been removed" + (t ? " in " + t : "")),
        g.ERR_DEPRECATED
      );
    return t && !ze[o] && (ze[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), e ? e(i, o, c) : !0;
  };
};
ue.spelling = function(e) {
  return (t, n) => (console.warn(`${n} is likely a misspelling of ${e}`), !0);
};
function mn(r, e, t) {
  if (typeof r != "object")
    throw new g("options must be an object", g.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(r);
  let s = n.length;
  for (; s-- > 0; ) {
    const i = n[s], o = e[i];
    if (o) {
      const c = r[i], l = c === void 0 || o(c, i, r);
      if (l !== !0)
        throw new g("option " + i + " must be " + l, g.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new g("Unknown option " + i, g.ERR_BAD_OPTION);
  }
}
var Y = {
  assertOptions: mn,
  validators: ue
};
const P = Y.validators;
class te {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new Be(),
      response: new Be()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(e, t) {
    try {
      return await this._request(e, t);
    } catch (n) {
      if (n instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const i = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? i && !String(n.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + i) : n.stack = i;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(e, t) {
    typeof e == "string" ? (t = t || {}, t.url = e) : t = e || {}, t = M(this.defaults, t);
    const { transitional: n, paramsSerializer: s, headers: i } = t;
    n !== void 0 && Y.assertOptions(n, {
      silentJSONParsing: P.transitional(P.boolean),
      forcedJSONParsing: P.transitional(P.boolean),
      clarifyTimeoutError: P.transitional(P.boolean)
    }, !1), s != null && (a.isFunction(s) ? t.paramsSerializer = {
      serialize: s
    } : Y.assertOptions(s, {
      encode: P.function,
      serialize: P.function
    }, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), Y.assertOptions(t, {
      baseUrl: P.spelling("baseURL"),
      withXsrfToken: P.spelling("withXSRFToken")
    }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let o = i && a.merge(
      i.common,
      i[t.method]
    );
    i && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete i[h];
      }
    ), t.headers = _.concat(o, i);
    const c = [];
    let l = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(t) === !1 || (l = l && m.synchronous, c.unshift(m.fulfilled, m.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(m) {
      u.push(m.fulfilled, m.rejected);
    });
    let f, d = 0, y;
    if (!l) {
      const h = [Je.bind(this), void 0];
      for (h.unshift.apply(h, c), h.push.apply(h, u), y = h.length, f = Promise.resolve(t); d < y; )
        f = f.then(h[d++], h[d++]);
      return f;
    }
    y = c.length;
    let w = t;
    for (d = 0; d < y; ) {
      const h = c[d++], m = c[d++];
      try {
        w = h(w);
      } catch (p) {
        m.call(this, p);
        break;
      }
    }
    try {
      f = Je.call(this, w);
    } catch (h) {
      return Promise.reject(h);
    }
    for (d = 0, y = u.length; d < y; )
      f = f.then(u[d++], u[d++]);
    return f;
  }
  getUri(e) {
    e = M(this.defaults, e);
    const t = mt(e.baseURL, e.url, e.allowAbsoluteUrls);
    return ft(t, e.params, e.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function(e) {
  te.prototype[e] = function(t, n) {
    return this.request(M(n || {}, {
      method: e,
      url: t,
      data: (n || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(e) {
  function t(n) {
    return function(i, o, c) {
      return this.request(M(c || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  te.prototype[e] = t(), te.prototype[e + "Form"] = t(!0);
});
var Z = te;
class Pe {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let t;
    this.promise = new Promise(function(i) {
      t = i;
    });
    const n = this;
    this.promise.then((s) => {
      if (!n._listeners) return;
      let i = n._listeners.length;
      for (; i-- > 0; )
        n._listeners[i](s);
      n._listeners = null;
    }), this.promise.then = (s) => {
      let i;
      const o = new Promise((c) => {
        n.subscribe(c), i = c;
      }).then(s);
      return o.cancel = function() {
        n.unsubscribe(i);
      }, o;
    }, e(function(i, o, c) {
      n.reason || (n.reason = new L(i, o, c), t(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const t = this._listeners.indexOf(e);
    t !== -1 && this._listeners.splice(t, 1);
  }
  toAbortSignal() {
    const e = new AbortController(), t = (n) => {
      e.abort(n);
    };
    return this.subscribe(t), e.signal.unsubscribe = () => this.unsubscribe(t), e.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new Pe(function(s) {
        e = s;
      }),
      cancel: e
    };
  }
}
var yn = Pe;
function gn(r) {
  return function(t) {
    return r.apply(null, t);
  };
}
function bn(r) {
  return a.isObject(r) && r.isAxiosError === !0;
}
const Se = {
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
  NetworkAuthenticationRequired: 511
};
Object.entries(Se).forEach(([r, e]) => {
  Se[e] = r;
});
var wn = Se;
function St(r) {
  const e = new Z(r), t = Ze(Z.prototype.request, e);
  return a.extend(t, Z.prototype, e, { allOwnKeys: !0 }), a.extend(t, e, null, { allOwnKeys: !0 }), t.create = function(s) {
    return St(M(r, s));
  }, t;
}
const T = St(De);
T.Axios = Z;
T.CanceledError = L;
T.CancelToken = yn;
T.isCancel = ht;
T.VERSION = Et;
T.toFormData = oe;
T.AxiosError = g;
T.Cancel = T.CanceledError;
T.all = function(e) {
  return Promise.all(e);
};
T.spread = gn;
T.isAxiosError = bn;
T.mergeConfig = M;
T.AxiosHeaders = _;
T.formToJSON = (r) => dt(a.isHTMLForm(r) ? new FormData(r) : r);
T.getAdapter = wt.getAdapter;
T.HttpStatusCode = wn;
T.default = T;
var En = T;
const Sn = "@sendgrid/client", An = "Twilio SendGrid NodeJS API client", Tn = "8.1.5", On = "Twilio SendGrid <help@twilio.com> (sendgrid.com)", Rn = [
  "Kyle Partridge <kyle.partridge@sendgrid.com>",
  "David Tomberlin <david.tomberlin@sendgrid.com>",
  "Swift <swift@sendgrid.com>",
  "Brandon West <brandon.west@sendgrid.com>",
  "Scott Motte <scott.motte@sendgrid.com>",
  "Robert Acosta <robert.acosta@sendgrid.com>",
  "Elmer Thomas <ethomas@twilio.com>",
  "Adam Reis <adam@reis.nz>"
], Cn = "MIT", xn = "https://sendgrid.com", _n = {
  type: "git",
  url: "git://github.com/sendgrid/sendgrid-nodejs.git"
}, jn = {
  access: "public"
}, Dn = "index.js", Pn = {
  node: ">=12.*"
}, kn = {
  "@sendgrid/helpers": "^8.0.0",
  axios: "^1.8.2"
}, Nn = {
  chai: "4.2.0",
  nock: "^10.0.6"
}, vn = {
  chai: "4.2.0"
}, Mn = [
  "http",
  "rest",
  "api",
  "mail",
  "sendgrid"
], Un = "2bac86884f71be3fb19f96a10c02a1fb616b81fc", Bn = {
  name: Sn,
  description: An,
  version: Tn,
  author: On,
  contributors: Rn,
  license: Cn,
  homepage: xn,
  repository: _n,
  publishConfig: jn,
  main: Dn,
  engines: Pn,
  dependencies: kn,
  devDependencies: Nn,
  resolutions: vn,
  tags: Mn,
  gitHead: Un
};
var ke = function r(e, t, n) {
  if (typeof e != "object" || e === null)
    throw new Error("Non object passed to convertKeys: " + e);
  if (Array.isArray(e))
    return e;
  Array.isArray(n) || (n = []);
  for (const s in e)
    if (e.hasOwnProperty(s)) {
      const i = t(s);
      typeof e[s] == "object" && e[s] !== null && !n.includes(s) && !n.includes(i) && (e[s] = r(e[s], t, n)), i !== s && (e[i] = e[s], delete e[s]);
    }
  return e;
}, In = function(e) {
  if (typeof e != "string")
    throw new Error("String expected for conversion to snake case");
  return e.trim().replace(/_+|\-+/g, " ").replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(t, n) {
    return Number(t) === 0 ? "" : n === 0 ? t.toLowerCase() : t.toUpperCase();
  });
};
const Ln = ke, Fn = In;
var J = function(e, t) {
  return Ln(e, Fn, t);
}, $n = function(e) {
  if (typeof e != "string")
    throw new Error("String expected for conversion to snake case");
  return e.trim().replace(/(\s*\-*\b\w|[A-Z])/g, function(t) {
    return t = t.trim().toLowerCase().replace("-", ""), (t[0] === "_" ? "" : "_") + t;
  }).slice(1);
};
const qn = ke, Hn = $n;
var fe = function(e, t) {
  return qn(e, Hn, t);
}, z = function(e) {
  return JSON.parse(JSON.stringify(e));
};
const Wn = {}, Jn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wn
}, Symbol.toStringTag, { value: "Module" })), At = /* @__PURE__ */ Lt(Jn), zn = J, Kn = fe, Gn = z, Vn = At, Xn = At;
let Yn = class {
  /**
   * Constructor
   */
  constructor(e) {
    e && this.fromData(e);
  }
  /**
   * From data
   */
  fromData(e) {
    if (typeof e != "object")
      throw new Error("Expecting object for Mail data");
    e = Gn(e), e = zn(e);
    const {
      content: t,
      filename: n,
      type: s,
      disposition: i,
      contentId: o,
      filePath: c
    } = e;
    if (typeof t < "u" && typeof c < "u")
      throw new Error(
        "The props 'content' and 'filePath' cannot be used together."
      );
    this.setFilename(n), this.setType(s), this.setDisposition(i), this.setContentId(o), this.setContent(c ? this.readFile(c) : t);
  }
  /**
   * Read a file and return its content as base64
   */
  readFile(e) {
    return Vn.readFileSync(Xn.resolve(e));
  }
  /**
   * Set content
   */
  setContent(e) {
    if (typeof e == "string") {
      this.content = e;
      return;
    } else if (e instanceof Buffer && e.toString !== void 0) {
      this.content = e.toString(), this.disposition === "attachment" && (this.content = e.toString("base64"));
      return;
    }
    throw new Error("`content` expected to be either Buffer or string");
  }
  /**
   * Set content
   */
  setFileContent(e) {
    if (e instanceof Buffer && e.toString !== void 0) {
      this.content = e.toString("base64");
      return;
    }
    throw new Error("`content` expected to be Buffer");
  }
  /**
   * Set filename
   */
  setFilename(e) {
    if (!(typeof e > "u")) {
      if (e && typeof e != "string")
        throw new Error("String expected for `filename`");
      this.filename = e;
    }
  }
  /**
   * Set type
   */
  setType(e) {
    if (!(typeof e > "u")) {
      if (typeof e != "string")
        throw new Error("String expected for `type`");
      this.type = e;
    }
  }
  /**
   * Set disposition
   */
  setDisposition(e) {
    if (!(typeof e > "u")) {
      if (typeof e != "string")
        throw new Error("String expected for `disposition`");
      this.disposition = e;
    }
  }
  /**
   * Set content ID
   */
  setContentId(e) {
    if (!(typeof e > "u")) {
      if (typeof e != "string")
        throw new Error("String expected for `contentId`");
      this.contentId = e;
    }
  }
  /**
   * To JSON
   */
  toJSON() {
    const { content: e, filename: t, type: n, disposition: s, contentId: i } = this, o = { content: e, filename: t };
    return typeof n < "u" && (o.type = n), typeof s < "u" && (o.disposition = s), typeof i < "u" && (o.contentId = i), Kn(o);
  }
};
var Zn = Yn, Tt = function(e) {
  if (e.indexOf("<") === -1)
    return ["", e];
  let [t, n] = e.split("<");
  return t = t.trim(), n = n.replace(">", "").trim(), [t, n];
};
const Qn = Tt;
let es = class Ae {
  /**
  * Constructor
  */
  constructor(e) {
    e && this.fromData(e);
  }
  /**
   * From data
   */
  fromData(e) {
    if (typeof e == "string") {
      const [s, i] = Qn(e);
      e = { name: s, email: i };
    }
    if (typeof e != "object")
      throw new Error("Expecting object or string for EmailAddress data");
    const { name: t, email: n } = e;
    this.setEmail(n), this.setName(t);
  }
  /**
   * Set name
   */
  setName(e) {
    if (!(typeof e > "u")) {
      if (typeof e != "string")
        throw new Error("String expected for `name`");
      this.name = e;
    }
  }
  /**
   * Set email (mandatory)
   */
  setEmail(e) {
    if (typeof e > "u")
      throw new Error("Must provide `email`");
    if (typeof e != "string")
      throw new Error("String expected for `email`");
    this.email = e;
  }
  /**
  * To JSON
  */
  toJSON() {
    const { email: e, name: t } = this, n = { email: e };
    return t !== "" && (n.name = t), n;
  }
  /**************************************************************************
   * Static helpers
   ***/
  /**
   * Create an EmailAddress instance from given data
   */
  static create(e) {
    return Array.isArray(e) ? e.filter((t) => !!t).map((t) => this.create(t)) : e instanceof Ae ? e : new Ae(e);
  }
};
var Ne = es, ts = function(e) {
  return rs(e) && !ns(e);
};
function rs(r) {
  return !!r && typeof r == "object";
}
function ns(r) {
  var e = Object.prototype.toString.call(r);
  return e === "[object RegExp]" || e === "[object Date]" || os(r);
}
var ss = typeof Symbol == "function" && Symbol.for, is = ss ? Symbol.for("react.element") : 60103;
function os(r) {
  return r.$$typeof === is;
}
function as(r) {
  return Array.isArray(r) ? [] : {};
}
function H(r, e) {
  return e.clone !== !1 && e.isMergeableObject(r) ? B(as(r), r, e) : r;
}
function cs(r, e, t) {
  return r.concat(e).map(function(n) {
    return H(n, t);
  });
}
function us(r, e) {
  if (!e.customMerge)
    return B;
  var t = e.customMerge(r);
  return typeof t == "function" ? t : B;
}
function fs(r) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(r).filter(function(e) {
    return Object.propertyIsEnumerable.call(r, e);
  }) : [];
}
function Ke(r) {
  return Object.keys(r).concat(fs(r));
}
function Ot(r, e) {
  try {
    return e in r;
  } catch {
    return !1;
  }
}
function ls(r, e) {
  return Ot(r, e) && !(Object.hasOwnProperty.call(r, e) && Object.propertyIsEnumerable.call(r, e));
}
function ds(r, e, t) {
  var n = {};
  return t.isMergeableObject(r) && Ke(r).forEach(function(s) {
    n[s] = H(r[s], t);
  }), Ke(e).forEach(function(s) {
    ls(r, s) || (Ot(r, s) && t.isMergeableObject(e[s]) ? n[s] = us(s, t)(r[s], e[s], t) : n[s] = H(e[s], t));
  }), n;
}
function B(r, e, t) {
  t = t || {}, t.arrayMerge = t.arrayMerge || cs, t.isMergeableObject = t.isMergeableObject || ts, t.cloneUnlessOtherwiseSpecified = H;
  var n = Array.isArray(e), s = Array.isArray(r), i = n === s;
  return i ? n ? t.arrayMerge(r, e, t) : ds(r, e, t) : H(e, t);
}
B.all = function(e, t) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(n, s) {
    return B(n, s, t);
  }, {});
};
var hs = B, ps = hs, Rt = function r(e, t = "{{", n = "}}") {
  if (Array.isArray(e))
    return e.map((i) => r(i, t, n));
  const s = {};
  for (const i in e)
    e.hasOwnProperty(i) && (s[t + i + n] = String(e[i]));
  return s;
};
const N = Ne, ms = J, ys = fe, gs = z, bs = ps, ws = Rt;
let Es = class {
  /**
   * Constructor
   */
  constructor(e) {
    this.to = [], this.cc = [], this.bcc = [], this.headers = {}, this.customArgs = {}, this.substitutions = {}, this.substitutionWrappers = ["{{", "}}"], this.dynamicTemplateData = {}, e && this.fromData(e);
  }
  /**
   * From data
   */
  fromData(e) {
    if (typeof e != "object")
      throw new Error("Expecting object for Mail data");
    e = gs(e), e = ms(e, ["substitutions", "dynamicTemplateData", "customArgs", "headers"]);
    const {
      to: t,
      from: n,
      cc: s,
      bcc: i,
      subject: o,
      headers: c,
      customArgs: l,
      sendAt: u,
      substitutions: f,
      substitutionWrappers: d,
      dynamicTemplateData: y
    } = e;
    this.setTo(t), this.setFrom(n), this.setCc(s), this.setBcc(i), this.setSubject(o), this.setHeaders(c), this.setSubstitutions(f), this.setSubstitutionWrappers(d), this.setCustomArgs(l), this.setDynamicTemplateData(y), this.setSendAt(u);
  }
  /**
   * Set subject
   */
  setSubject(e) {
    if (!(typeof e > "u")) {
      if (typeof e != "string")
        throw new Error("String expected for `subject`");
      this.subject = e;
    }
  }
  /**
   * Set send at
   */
  setSendAt(e) {
    if (!(typeof e > "u")) {
      if (!Number.isInteger(e))
        throw new Error("Integer expected for `sendAt`");
      this.sendAt = e;
    }
  }
  /**
   * Set to
   */
  setTo(e) {
    typeof e > "u" || (Array.isArray(e) || (e = [e]), this.to = N.create(e));
  }
  /**
   * Set from
   * */
  setFrom(e) {
    typeof e > "u" || (this.from = N.create(e));
  }
  /**
   * Add a single to
   */
  addTo(e) {
    typeof e > "u" || this.to.push(N.create(e));
  }
  /**
   * Set cc
   */
  setCc(e) {
    typeof e > "u" || (Array.isArray(e) || (e = [e]), this.cc = N.create(e));
  }
  /**
   * Add a single cc
   */
  addCc(e) {
    typeof e > "u" || this.cc.push(N.create(e));
  }
  /**
   * Set bcc
   */
  setBcc(e) {
    typeof e > "u" || (Array.isArray(e) || (e = [e]), this.bcc = N.create(e));
  }
  /**
   * Add a single bcc
   */
  addBcc(e) {
    typeof e > "u" || this.bcc.push(N.create(e));
  }
  /**
   * Set headers
   */
  setHeaders(e) {
    if (!(typeof e > "u")) {
      if (typeof e != "object" || e === null)
        throw new Error("Object expected for `headers`");
      this.headers = e;
    }
  }
  /**
   * Add a header
   */
  addHeader(e, t) {
    if (typeof e != "string")
      throw new Error("String expected for header key");
    if (typeof t != "string")
      throw new Error("String expected for header value");
    this.headers[e] = t;
  }
  /**
   * Set custom args
   */
  setCustomArgs(e) {
    if (!(typeof e > "u")) {
      if (typeof e != "object" || e === null)
        throw new Error("Object expected for `customArgs`");
      this.customArgs = e;
    }
  }
  /**
   * Add a custom arg
   */
  addCustomArg(e, t) {
    if (typeof e != "string")
      throw new Error("String expected for custom arg key");
    if (typeof t != "string")
      throw new Error("String expected for custom arg value");
    this.customArgs[e] = t;
  }
  /**
   * Set substitutions
   */
  setSubstitutions(e) {
    if (!(typeof e > "u")) {
      if (typeof e != "object")
        throw new Error("Object expected for `substitutions`");
      this.substitutions = e;
    }
  }
  /**
   * Add a substitution
   */
  addSubstitution(e, t) {
    if (typeof e != "string")
      throw new Error("String expected for substitution key");
    if (typeof t != "string" && typeof t != "number")
      throw new Error("String or Number expected for substitution value");
    this.substitutions[e] = t;
  }
  /**
   * Reverse merge substitutions, preserving existing ones
   */
  reverseMergeSubstitutions(e) {
    if (!(typeof e > "u" || e === null)) {
      if (typeof e != "object")
        throw new Error(
          "Object expected for `substitutions` in reverseMergeSubstitutions"
        );
      this.substitutions = Object.assign({}, e, this.substitutions);
    }
  }
  /**
   * Set substitution wrappers
   */
  setSubstitutionWrappers(e) {
    if (!(typeof e > "u" || e === null)) {
      if (!Array.isArray(e) || e.length !== 2)
        throw new Error(
          "Array expected with two elements for `substitutionWrappers`"
        );
      this.substitutionWrappers = e;
    }
  }
  /**
   * Reverse merge dynamic template data, preserving existing ones
   */
  deepMergeDynamicTemplateData(e) {
    if (!(typeof e > "u" || e === null)) {
      if (typeof e != "object")
        throw new Error(
          "Object expected for `dynamicTemplateData` in deepMergeDynamicTemplateData"
        );
      this.dynamicTemplateData = bs(e, this.dynamicTemplateData);
    }
  }
  /**
   * Set dynamic template data
   */
  setDynamicTemplateData(e) {
    if (!(typeof e > "u")) {
      if (typeof e != "object")
        throw new Error("Object expected for `dynamicTemplateData`");
      this.dynamicTemplateData = e;
    }
  }
  /**
   * To JSON
   */
  toJSON() {
    const {
      to: e,
      from: t,
      cc: n,
      bcc: s,
      subject: i,
      headers: o,
      customArgs: c,
      sendAt: l,
      substitutions: u,
      substitutionWrappers: f,
      dynamicTemplateData: d
    } = this, y = { to: e };
    if (Array.isArray(n) && n.length > 0 && (y.cc = n), Array.isArray(s) && s.length > 0 && (y.bcc = s), Object.keys(o).length > 0 && (y.headers = o), u && Object.keys(u).length > 0) {
      const [w, h] = f;
      y.substitutions = ws(u, w, h);
    }
    return Object.keys(c).length > 0 && (y.customArgs = c), d && Object.keys(d).length > 0 && (y.dynamicTemplateData = d), typeof i < "u" && (y.subject = i), typeof l < "u" && (y.sendAt = l), typeof t < "u" && (y.from = t), ys(y, ["substitutions", "dynamicTemplateData", "customArgs", "headers"]);
  }
};
var Ct = Es, xt = function(e) {
  return e.map((t) => typeof t == "object" && t !== null && typeof t.toJSON == "function" ? t.toJSON() : t);
};
const Ss = `
Content with characters ', " or & may need to be escaped with three brackets
{{{ content }}}
See https://sendgrid.com/docs/for-developers/sending-email/using-handlebars/ for more information.`;
var As = {
  DYNAMIC_TEMPLATE_CHAR_WARNING: Ss
};
const E = (r, e, t, n) => {
  if (!(typeof r > "u" || typeof r[t] > "u") && typeof r[t] !== n)
    throw new Error(`${n} expected for \`${e}.${t}\``);
};
var Ts = {
  validateMailSettings(r) {
    if (typeof r != "object")
      throw new Error("Object expected for `mailSettings`");
    const {
      bcc: e,
      bypassListManagement: t,
      bypassSpamManagement: n,
      bypassBounceManagement: s,
      bypassUnsubscribeManagement: i,
      footer: o,
      sandboxMode: c,
      spamCheck: l
    } = r;
    E(e, "bcc", "enable", "boolean"), E(e, "bcc", "email", "string"), E(t, "bypassListManagement", "enable", "boolean"), E(n, "bypassSpamManagement", "enable", "boolean"), E(s, "bypassBounceManagement", "enable", "boolean"), E(i, "bypassUnsubscribeManagement", "enable", "boolean"), E(o, "footer", "enable", "boolean"), E(o, "footer", "text", "string"), E(o, "footer", "html", "string"), E(c, "sandboxMode", "enable", "boolean"), E(l, "spamCheck", "enable", "boolean"), E(l, "spamCheck", "threshold", "number"), E(l, "spamCheck", "postToUrl", "string");
  },
  validateTrackingSettings(r) {
    if (typeof r != "object")
      throw new Error("Object expected for `trackingSettings`");
    const {
      clickTracking: e,
      openTracking: t,
      subscriptionTracking: n,
      ganalytics: s
    } = r;
    E(e, "clickTracking", "enable", "boolean"), E(e, "clickTracking", "enableText", "boolean"), E(t, "openTracking", "enable", "boolean"), E(t, "openTracking", "substitutionTag", "string"), E(n, "subscriptionTracking", "enable", "boolean"), E(n, "subscriptionTracking", "text", "string"), E(n, "subscriptionTracking", "html", "string"), E(n, "subscriptionTracking", "substitutionTag", "string"), E(s, "ganalytics", "enable", "boolean"), E(s, "ganalytics", "utm_source", "string"), E(s, "ganalytics", "utm_medium", "string"), E(s, "ganalytics", "utm_term", "string"), E(s, "ganalytics", "utm_content", "string"), E(s, "ganalytics", "utm_campaign", "string");
  }
};
const Ge = Ne, $ = Ct, Os = J, Rs = fe, Cs = z, pe = xt, { DYNAMIC_TEMPLATE_CHAR_WARNING: xs } = As, { validateMailSettings: _s, validateTrackingSettings: js } = Ts;
let Ds = class Te {
  /**
   * Constructor
   */
  constructor(e) {
    this.isDynamic = !1, this.hideWarnings = !1, this.personalizations = [], this.attachments = [], this.content = [], this.categories = [], this.headers = {}, this.sections = {}, this.customArgs = {}, this.trackingSettings = {}, this.mailSettings = {}, this.asm = {}, this.substitutions = null, this.substitutionWrappers = null, this.dynamicTemplateData = null, e && this.fromData(e);
  }
  /**
   * Build from data
   */
  fromData(e) {
    if (typeof e != "object")
      throw new Error("Expecting object for Mail data");
    e = Cs(e), e = Os(e, ["substitutions", "dynamicTemplateData", "customArgs", "headers", "sections"]);
    const {
      to: t,
      from: n,
      replyTo: s,
      cc: i,
      bcc: o,
      sendAt: c,
      subject: l,
      text: u,
      html: f,
      content: d,
      templateId: y,
      personalizations: w,
      attachments: h,
      ipPoolName: m,
      batchId: p,
      sections: S,
      headers: A,
      categories: b,
      category: x,
      customArgs: O,
      asm: D,
      mailSettings: k,
      trackingSettings: U,
      substitutions: K,
      substitutionWrappers: Pt,
      dynamicTemplateData: kt,
      isMultiple: Nt,
      hideWarnings: vt,
      replyToList: Mt
    } = e;
    this.setFrom(n), this.setReplyTo(s), this.setSubject(l), this.setSendAt(c), this.setTemplateId(y), this.setBatchId(p), this.setIpPoolName(m), this.setAttachments(h), this.setContent(d), this.setSections(S), this.setHeaders(A), this.setCategories(x), this.setCategories(b), this.setCustomArgs(O), this.setAsm(D), this.setMailSettings(k), this.setTrackingSettings(U), this.setHideWarnings(vt), this.setReplyToList(Mt), this.isDynamic ? this.setDynamicTemplateData(kt) : (this.setSubstitutions(K), this.setSubstitutionWrappers(Pt)), this.addTextContent(u), this.addHtmlContent(f), w ? this.setPersonalizations(w) : Nt && Array.isArray(t) ? t.forEach((Ut) => this.addTo(Ut, i, o)) : this.addTo(t, i, o);
  }
  /**
   * Set from email
   */
  setFrom(e) {
    if (this._checkProperty("from", e, [this._checkUndefined])) {
      if (typeof e != "string" && typeof e.email != "string")
        throw new Error("String or address object expected for `from`");
      this.from = Ge.create(e);
    }
  }
  /**
   * Set reply to
   */
  setReplyTo(e) {
    if (this._checkProperty("replyTo", e, [this._checkUndefined])) {
      if (typeof e != "string" && typeof e.email != "string")
        throw new Error("String or address object expected for `replyTo`");
      this.replyTo = Ge.create(e);
    }
  }
  /**
   * Set subject
   */
  setSubject(e) {
    this._setProperty("subject", e, "string");
  }
  /**
   * Set send at
   */
  setSendAt(e) {
    this._checkProperty("sendAt", e, [this._checkUndefined, this._createCheckThatThrows(Number.isInteger, "Integer expected for `sendAt`")]) && (this.sendAt = e);
  }
  /**
   * Set template ID, also checks if the template is dynamic or legacy
   */
  setTemplateId(e) {
    this._setProperty("templateId", e, "string") && e.indexOf("d-") === 0 && (this.isDynamic = !0);
  }
  /**
   * Set batch ID
   */
  setBatchId(e) {
    this._setProperty("batchId", e, "string");
  }
  /**
   * Set IP pool name
   */
  setIpPoolName(e) {
    this._setProperty("ipPoolName", e, "string");
  }
  /**
   * Set ASM
   */
  setAsm(e) {
    if (this._checkProperty("asm", e, [this._checkUndefined, this._createTypeCheck("object")])) {
      if (typeof e.groupId != "number")
        throw new Error("Expected `asm` to include an integer in its `groupId` field");
      if (e.groupsToDisplay && (!Array.isArray(e.groupsToDisplay) || !e.groupsToDisplay.every((t) => typeof t == "number")))
        throw new Error("Array of integers expected for `asm.groupsToDisplay`");
      this.asm = e;
    }
  }
  /**
   * Set personalizations
   */
  setPersonalizations(e) {
    if (this._doArrayCheck("personalizations", e)) {
      if (!e.every((t) => typeof t == "object"))
        throw new Error("Array of objects expected for `personalizations`");
      this.personalizations = [], e.forEach((t) => this.addPersonalization(t));
    }
  }
  /**
   * Add personalization
   */
  addPersonalization(e) {
    this.isDynamic && e.substitutions ? delete e.substitutions : !this.isDynamic && e.dynamicTemplateData && delete e.dynamicTemplateData, e instanceof $ || (e = new $(e)), this.isDynamic ? this.applyDynamicTemplateData(e) : this.applySubstitutions(e), this.personalizations.push(e);
  }
  /**
   * Convenience method for quickly creating personalizations
   */
  addTo(e, t, n) {
    if (typeof e > "u" && typeof t > "u" && typeof n > "u")
      throw new Error("Provide at least one of to, cc or bcc");
    this.addPersonalization(new $({ to: e, cc: t, bcc: n }));
  }
  /**
   * Set substitutions
   */
  setSubstitutions(e) {
    this._setProperty("substitutions", e, "object");
  }
  /**
   * Set substitution wrappers
   */
  setSubstitutionWrappers(e) {
    let t = (n, s) => {
      if (!Array.isArray(s) || s.length !== 2)
        throw new Error("Array expected with two elements for `" + n + "`");
    };
    this._checkProperty("substitutionWrappers", e, [this._checkUndefined, t]) && (this.substitutionWrappers = e);
  }
  /**
   * Helper which applies globally set substitutions to personalizations
   */
  applySubstitutions(e) {
    e instanceof $ && (e.reverseMergeSubstitutions(this.substitutions), e.setSubstitutionWrappers(this.substitutionWrappers));
  }
  /**
   * Helper which applies globally set dynamic_template_data to personalizations
   */
  applyDynamicTemplateData(e) {
    e instanceof $ && e.deepMergeDynamicTemplateData(this.dynamicTemplateData);
  }
  /**
   * Set dynamicTemplateData
   */
  setDynamicTemplateData(e) {
    if (!(typeof e > "u")) {
      if (typeof e != "object")
        throw new Error("Object expected for `dynamicTemplateData`");
      this.hideWarnings || Object.values(e).forEach((t) => {
        /['"&]/.test(t) && console.warn(xs);
      }), this.dynamicTemplateData = e;
    }
  }
  /**
   * Set content
   */
  setContent(e) {
    if (this._doArrayCheck("content", e)) {
      if (!e.every((t) => typeof t == "object"))
        throw new Error("Expected each entry in `content` to be an object");
      if (!e.every((t) => typeof t.type == "string"))
        throw new Error("Expected each `content` entry to contain a `type` string");
      if (!e.every((t) => typeof t.value == "string"))
        throw new Error("Expected each `content` entry to contain a `value` string");
      this.content = e;
    }
  }
  /**
   * Add content
   */
  addContent(e) {
    this._checkProperty("content", e, [this._createTypeCheck("object")]) && this.content.push(e);
  }
  /**
   * Add text content
   */
  addTextContent(e) {
    this._checkProperty("text", e, [this._checkUndefined, this._createTypeCheck("string")]) && this.addContent({
      value: e,
      type: "text/plain"
    });
  }
  /**
   * Add HTML content
   */
  addHtmlContent(e) {
    this._checkProperty("html", e, [this._checkUndefined, this._createTypeCheck("string")]) && this.addContent({
      value: e,
      type: "text/html"
    });
  }
  /**
   * Set attachments
   */
  setAttachments(e) {
    if (this._doArrayCheck("attachments", e)) {
      if (!e.every((t) => typeof t.content == "string"))
        throw new Error("Expected each attachment to contain a `content` string");
      if (!e.every((t) => typeof t.filename == "string"))
        throw new Error("Expected each attachment to contain a `filename` string");
      if (!e.every((t) => !t.type || typeof t.type == "string"))
        throw new Error("Expected the attachment's `type` field to be a string");
      if (!e.every((t) => !t.disposition || typeof t.disposition == "string"))
        throw new Error("Expected the attachment's `disposition` field to be a string");
      this.attachments = e;
    }
  }
  /**
   * Add attachment
   */
  addAttachment(e) {
    this._checkProperty("attachment", e, [this._checkUndefined, this._createTypeCheck("object")]) && this.attachments.push(e);
  }
  /**
   * Set categories
   */
  setCategories(e) {
    let t = (n, s) => {
      if (!Array.isArray(s) || !s.every((i) => typeof i == "string"))
        throw new Error("Array of strings expected for `" + n + "`");
    };
    typeof e == "string" && (e = [e]), this._checkProperty("categories", e, [this._checkUndefined, t]) && (this.categories = e);
  }
  /**
   * Add category
   */
  addCategory(e) {
    this._checkProperty("category", e, [this._createTypeCheck("string")]) && this.categories.push(e);
  }
  /**
   * Set headers
   */
  setHeaders(e) {
    this._setProperty("headers", e, "object");
  }
  /**
   * Add a header
   */
  addHeader(e, t) {
    this._checkProperty("key", e, [this._createTypeCheck("string")]) && this._checkProperty("value", t, [this._createTypeCheck("string")]) && (this.headers[e] = t);
  }
  /**
   * Set sections
   */
  setSections(e) {
    this._setProperty("sections", e, "object");
  }
  /**
   * Set custom args
   */
  setCustomArgs(e) {
    this._setProperty("customArgs", e, "object");
  }
  /**
   * Set tracking settings
   */
  setTrackingSettings(e) {
    typeof e > "u" || (js(e), this.trackingSettings = e);
  }
  /**
   * Set mail settings
   */
  setMailSettings(e) {
    typeof e > "u" || (_s(e), this.mailSettings = e);
  }
  /**
   * Set hide warnings
   */
  setHideWarnings(e) {
    if (!(typeof e > "u")) {
      if (typeof e != "boolean")
        throw new Error("Boolean expected for `hideWarnings`");
      this.hideWarnings = e;
    }
  }
  /**
   * To JSON
   */
  toJSON() {
    const {
      from: e,
      replyTo: t,
      sendAt: n,
      subject: s,
      content: i,
      templateId: o,
      personalizations: c,
      attachments: l,
      ipPoolName: u,
      batchId: f,
      asm: d,
      sections: y,
      headers: w,
      categories: h,
      customArgs: m,
      mailSettings: p,
      trackingSettings: S,
      replyToList: A
    } = this, b = {
      from: e,
      subject: s,
      personalizations: pe(c)
    };
    return Array.isArray(l) && l.length > 0 && (b.attachments = pe(l)), Array.isArray(h) && h.length > 0 && (b.categories = h.filter((x) => x !== "")), Array.isArray(i) && i.length > 0 && (b.content = pe(i)), Object.keys(w).length > 0 && (b.headers = w), Object.keys(p).length > 0 && (b.mailSettings = p), Object.keys(S).length > 0 && (b.trackingSettings = S), Object.keys(m).length > 0 && (b.customArgs = m), Object.keys(y).length > 0 && (b.sections = y), Object.keys(d).length > 0 && (b.asm = d), typeof t < "u" && (b.replyTo = t), typeof n < "u" && (b.sendAt = n), typeof f < "u" && (b.batchId = f), typeof o < "u" && (b.templateId = o), typeof u < "u" && (b.ipPoolName = u), typeof A < "u" && (b.replyToList = A), Rs(b, ["substitutions", "dynamicTemplateData", "customArgs", "headers", "sections"]);
  }
  /**************************************************************************
   * Static helpers
   ***/
  /**
   * Create a Mail instance from given data
   */
  static create(e) {
    return Array.isArray(e) ? e.filter((t) => !!t).map((t) => this.create(t)) : e instanceof Te ? e : new Te(e);
  }
  /**************************************************************************
   * helpers for property-setting checks
   ***/
  /**
   * Perform a set of checks on the new property value. Returns true if all
   * checks complete successfully without throwing errors or returning true.
   */
  _checkProperty(e, t, n) {
    return !n.some((s) => s(e, t));
  }
  /**
   * Set a property with normal undefined and type-checks
   */
  _setProperty(e, t, n) {
    let s = this._checkProperty(
      e,
      t,
      [this._checkUndefined, this._createTypeCheck(n)]
    );
    return s && (this[e] = t), s;
  }
  /**
   * Fail if the value is undefined.
   */
  _checkUndefined(e, t) {
    return typeof t > "u";
  }
  /**
   * Create and return a function that checks for a given type
   */
  _createTypeCheck(e) {
    return (t, n) => {
      if (typeof n !== e)
        throw new Error(e + " expected for `" + t + "`");
    };
  }
  /**
   * Create a check out of a callback. If the callback
   * returns false, the check will throw an error.
   */
  _createCheckThatThrows(e, t) {
    return (n, s) => {
      if (!e(s))
        throw new Error(t);
    };
  }
  /**
   * Set an array property after checking that the new value is an
   * array.
   */
  _setArrayProperty(e, t) {
    this._doArrayCheck(e, t) && (this[e] = t);
  }
  /**
   * Check that a value isn't undefined and is an array.
   */
  _doArrayCheck(e, t) {
    return this._checkProperty(
      e,
      t,
      [this._checkUndefined, this._createCheckThatThrows(Array.isArray, "Array expected for`" + e + "`")]
    );
  }
  /**
   * Set the replyToList from email body
   */
  setReplyToList(e) {
    if (this._doArrayCheck("replyToList", e) && e.length) {
      if (!e.every((t) => t && typeof t.email == "string"))
        throw new Error("Expected each replyTo to contain an `email` string");
      this.replyToList = e;
    }
  }
};
var Ps = Ds;
let ks = class {
  constructor(e, t, n) {
    this.statusCode = e, this.body = t, this.headers = n;
  }
  toString() {
    return "HTTP " + this.statusCode + " " + this.body;
  }
};
var Ns = ks;
let vs = class extends Error {
  /**
   * Constructor
   */
  constructor(e) {
    super();
    const { headers: t, status: n, statusText: s, data: i } = e;
    this.code = n, this.message = s, this.response = { headers: t, body: i }, this.stack || Error.captureStackTrace(this, this.constructor);
    const o = new RegExp(process.cwd() + "/", "gi");
    this.stack = this.stack.replace(o, "");
  }
  /**
   * Convert to string
   */
  toString() {
    const { body: e } = this.response;
    let t = `${this.message} (${this.code})`;
    return e && Array.isArray(e.errors) && e.errors.forEach((n) => {
      const s = n.message, i = n.field, o = n.help;
      t += `
  ${s}
    ${i}
    ${o}`;
    }), t;
  }
  /**
   * Convert to simple object for JSON responses
   */
  toJSON() {
    const { message: e, code: t, response: n } = this;
    return { message: e, code: t, response: n };
  }
};
var Ms = vs;
const Us = J, Bs = z, Is = ["day", "week", "month"], Ls = ["us", "ca"], G = ["desc", "asc"];
let Fs = class {
  constructor(e) {
    this.startDate = null, this.endDate = null, this.aggregatedBy = null, e && this.fromData(e);
  }
  /**
   * Build from data
   */
  fromData(e) {
    if (typeof e != "object")
      throw new Error("Expecting object for Statistics data");
    e = Bs(e), e = Us(e, ["substitutions", "customArgs"]);
    const {
      startDate: t,
      endDate: n,
      aggregatedBy: s
    } = e;
    this.setStartDate(t), this.setEndDate(n), this.setAggregatedBy(s);
  }
  /**
   * Set startDate
   */
  setStartDate(e) {
    if (typeof e > "u")
      throw new Error("Date expected for `startDate`");
    if (new Date(e) === "Invalid Date" || isNaN(new Date(e)))
      throw new Error("Date expected for `startDate`");
    console.log(e), this.startDate = new Date(e).toISOString().slice(0, 10);
  }
  /**
   * Set endDate
   */
  setEndDate(e) {
    if (typeof e > "u") {
      this.endDate = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
      return;
    }
    if (new Date(e) === "Invalid Date" || isNaN(new Date(e)))
      throw new Error("Date expected for `endDate`");
    this.endDate = new Date(e).toISOString().slice(0, 10);
  }
  /**
   * Set aggregatedBy
   */
  setAggregatedBy(e) {
    if (!(typeof e > "u"))
      if (typeof e == "string" && Is.includes(e.toLowerCase()))
        this.aggregatedBy = e;
      else
        throw new Error("Incorrect value for `aggregatedBy`");
  }
  /**
   * Get Global
   */
  getGlobal() {
    const { startDate: e, endDate: t, aggregatedBy: n } = this;
    return { startDate: e, endDate: t, aggregatedBy: n };
  }
  /**
   * Get Advanced
   */
  getAdvanced(e) {
    const t = this.getGlobal();
    return typeof e > "u" || typeof e == "string" && Ls.includes(e.toLowerCase()) && (t.country = e), t;
  }
  /**
   * Get Advanced Mailbox Providers
   */
  getAdvancedMailboxProviders(e) {
    const t = this.getGlobal();
    if (typeof e > "u")
      return t;
    if (Array.isArray(e) && e.some((n) => typeof n != "string"))
      throw new Error("Array of strings expected for `mailboxProviders`");
    return t.mailBoxProviders = e, t;
  }
  /**
   * Get Advanced Browsers
   */
  getAdvancedBrowsers(e) {
    const t = this.getGlobal();
    if (typeof e > "u")
      return t;
    if (Array.isArray(e) && e.some((n) => typeof n != "string"))
      throw new Error("Array of strings expected for `browsers`");
    return t.browsers = e, t;
  }
  /**
   * Get Categories
   */
  getCategories(e) {
    if (typeof e > "u")
      throw new Error("Array of strings expected for `categories`");
    if (!this._isValidArrayOfStrings(e))
      throw new Error("Array of strings expected for `categories`");
    const t = this.getGlobal();
    return t.categories = e, t;
  }
  /**
   * Get Subuser
   */
  getSubuser(e) {
    if (typeof e > "u")
      throw new Error("Array of strings expected for `subusers`");
    if (!this._isValidArrayOfStrings(e))
      throw new Error("Array of strings expected for `subusers`");
    const t = this.getGlobal();
    return t.subusers = e, t;
  }
  /**
   * Get Subuser Sum
   */
  getSubuserSum(e = "delivered", t = G[0], n = 5, s = 0) {
    if (typeof e != "string")
      throw new Error("string expected for `sortByMetric`");
    if (!G.includes(t.toLowerCase()))
      throw new Error("desc or asc expected for `sortByDirection`");
    if (typeof n != "number")
      throw new Error("number expected for `limit`");
    if (typeof s != "number")
      throw new Error("number expected for `offset`");
    const i = this.getGlobal();
    return i.sortByMetric = e, i.sortByDirection = t, i.limit = n, i.offset = s, i;
  }
  /**
   * Get Subuser Monthly
   */
  getSubuserMonthly(e = "delivered", t = G[0], n = 5, s = 0) {
    if (typeof e != "string")
      throw new Error("string expected for `sortByMetric`");
    if (!G.includes(t.toLowerCase()))
      throw new Error("desc or asc expected for `sortByDirection`");
    if (typeof n != "number")
      throw new Error("number expected for `limit`");
    if (typeof s != "number")
      throw new Error("number expected for `offset`");
    const i = this.getGlobal();
    return i.sortByMetric = e, i.sortByDirection = t, i.limit = n, i.offset = s, i;
  }
  _isValidArrayOfStrings(e) {
    return !(!Array.isArray(e) || e.length < 1 || e.some((t) => typeof t != "string"));
  }
};
var $s = Fs;
const qs = Zn, Hs = Ne, Ws = Ps, Js = Ct, zs = Ns, Ks = Ms, Gs = $s;
var Vs = {
  Attachment: qs,
  EmailAddress: Hs,
  Mail: Ws,
  Personalization: Js,
  Response: zs,
  ResponseError: Ks,
  Statistics: Gs
}, Xs = function(e, t) {
  if (typeof e != "object" || e === null)
    throw new Error("Not an object provided for base");
  if (typeof t != "object" || t === null)
    throw new Error("Not an object provided for data");
  const n = Object.assign({}, e);
  for (const s in t)
    t.hasOwnProperty(s) && (t[s] && Array.isArray(t[s]) ? n[s] = t[s] : t[s] && typeof t[s] == "object" ? n[s] = Object.assign({}, t[s]) : t[s] && (n[s] = t[s]));
  return n;
};
const Ys = xt, Zs = ke, Qs = z, ei = Xs, ti = Tt, ri = J, ni = fe, si = Rt;
var ii = {
  arrayToJSON: Ys,
  convertKeys: Zs,
  deepClone: Qs,
  mergeData: ei,
  splitNameEmail: ti,
  toCamelCase: ri,
  toSnakeCase: ni,
  wrapSubstitutions: si
};
const oi = Vs, ai = ii;
var _t = { classes: oi, helpers: ai };
const ci = En, ui = Bn, {
  helpers: {
    mergeData: Ve
  },
  classes: {
    Response: fi,
    ResponseError: li
  }
} = _t, Xe = "SG.", di = "https://api.sendgrid.com/", hi = "https://email.twilio.com/", pi = "global", me = {
  eu: "https://api.eu.sendgrid.com/",
  global: "https://api.sendgrid.com/"
};
let mi = class {
  constructor() {
    this.auth = "", this.impersonateSubuser = "", this.sendgrid_region = pi, this.defaultHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json",
      "User-Agent": "sendgrid/" + ui.version + ";nodejs"
    }, this.defaultRequest = {
      baseUrl: di,
      url: "",
      method: "GET",
      headers: {},
      maxContentLength: 1 / 0,
      // Don't limit the content length.
      maxBodyLength: 1 / 0
    };
  }
  setApiKey(e) {
    this.auth = "Bearer " + e, this.setDefaultRequest("baseUrl", me[this.sendgrid_region]), this.isValidApiKey(e) || console.warn(`API key does not start with "${Xe}".`);
  }
  setTwilioEmailAuth(e, t) {
    const n = Buffer.from(e + ":" + t).toString("base64");
    this.auth = "Basic " + n, this.setDefaultRequest("baseUrl", hi), this.isValidTwilioAuth(e, t) || console.warn("Twilio Email credentials must be non-empty strings.");
  }
  isValidApiKey(e) {
    return this.isString(e) && e.trim().startsWith(Xe);
  }
  isValidTwilioAuth(e, t) {
    return this.isString(e) && e && this.isString(t) && t;
  }
  isString(e) {
    return typeof e == "string" || e instanceof String;
  }
  setImpersonateSubuser(e) {
    this.impersonateSubuser = e;
  }
  setDefaultHeader(e, t) {
    return e !== null && typeof e == "object" ? (Object.assign(this.defaultHeaders, e), this) : (this.defaultHeaders[e] = t, this);
  }
  setDefaultRequest(e, t) {
    return e !== null && typeof e == "object" ? (Object.assign(this.defaultRequest, e), this) : (this.defaultRequest[e] = t, this);
  }
  /**
   * Global is the default residency (or region)
   * Global region means the message will be sent through https://api.sendgrid.com
   * EU region means the message will be sent through https://api.eu.sendgrid.com
   **/
  setDataResidency(e) {
    return me.hasOwnProperty(e) ? (this.sendgrid_region = e, this.setDefaultRequest("baseUrl", me[e])) : console.warn('Region can only be "global" or "eu".'), this;
  }
  createHeaders(e) {
    const t = Ve(this.defaultHeaders, e);
    return typeof t.Authorization > "u" && this.auth && (t.Authorization = this.auth), this.impersonateSubuser && (t["On-Behalf-Of"] = this.impersonateSubuser), t;
  }
  createRequest(e) {
    let t = {
      url: e.uri || e.url,
      baseUrl: e.baseUrl,
      method: e.method,
      data: e.body,
      params: e.qs,
      headers: e.headers
    };
    return t = Ve(this.defaultRequest, t), t.headers = this.createHeaders(t.headers), t.baseURL = t.baseUrl, delete t.baseUrl, t;
  }
  request(e, t) {
    e = this.createRequest(e);
    const n = new Promise((s, i) => {
      ci(e).then((o) => s([
        new fi(o.status, o.data, o.headers),
        o.data
      ])).catch((o) => o.response && o.response.status >= 400 ? i(new li(o.response)) : i(o));
    });
    if (t && typeof t != "function")
      throw new Error("Callback passed is not a function.");
    return t ? n.then((s) => t(null, s)).catch((s) => t(s, null)) : n;
  }
};
var jt = mi;
const yi = jt;
var gi = new yi();
const bi = gi, wi = jt;
Re.exports = bi;
Re.exports.Client = wi;
var Ei = Re.exports;
const { Client: Si } = Ei, { classes: { Mail: Ai } } = _t;
let Ti = class {
  /**
   * Constructor
   */
  constructor() {
    this.setClient(new Si()), this.setSubstitutionWrappers("{{", "}}"), this.secretRules = [];
  }
  /**
   * Set client
   */
  setClient(e) {
    return this.client = e, this;
  }
  /**
   * SendGrid API key passthrough for convenience.
   */
  setApiKey(e) {
    return this.client.setApiKey(e), this;
  }
  /**
   * Twilio Email Auth passthrough for convenience.
   */
  setTwilioEmailAuth(e, t) {
    this.client.setTwilioEmailAuth(e, t);
  }
  /**
   * Set client timeout
   */
  setTimeout(e) {
    typeof e > "u" || this.client.setDefaultRequest("timeout", e);
  }
  /**
   * Set substitution wrappers
   */
  setSubstitutionWrappers(e, t) {
    if (typeof e > "u" || typeof t > "u")
      throw new Error("Must provide both left and right side wrappers");
    return Array.isArray(this.substitutionWrappers) || (this.substitutionWrappers = []), this.substitutionWrappers[0] = e, this.substitutionWrappers[1] = t, this;
  }
  /**
   * Set secret rules for filtering the e-mail content
   */
  setSecretRules(e) {
    e instanceof Array || (e = [e]);
    const t = e.map(function(n) {
      const s = typeof n;
      if (s === "string")
        return {
          pattern: new RegExp(n)
        };
      if (s === "object") {
        n instanceof RegExp ? n = {
          pattern: n
        } : n.hasOwnProperty("pattern") && typeof n.pattern == "string" && (n.pattern = new RegExp(n.pattern));
        try {
          return n.pattern.test(""), n;
        } catch {
        }
      }
    });
    this.secretRules = t.filter(function(n) {
      return n;
    });
  }
  /**
   * Check if the e-mail is safe to be sent
   */
  filterSecrets(e) {
    if (typeof e == "object" && !e.hasOwnProperty("content"))
      return;
    const t = this;
    e.content.forEach(function(n) {
      t.secretRules.forEach(function(s) {
        if (s.hasOwnProperty("pattern") && !s.pattern.test(n.value))
          return;
        let i = `The pattern '${s.pattern}'`;
        throw s.name && (i += `identified by '${s.name}'`), i += " was found in the Mail content!", new Error(i);
      });
    });
  }
  /**
   * Send email
   */
  send(e, t = !1, n) {
    if (typeof t == "function" && (n = t, t = !1), Array.isArray(e)) {
      const s = Promise.all(e.map((i) => this.send(i, t)));
      return n && s.then((i) => n(null, i)).catch((i) => n(i, null)), s;
    }
    try {
      typeof e.isMultiple > "u" && (e.isMultiple = t), typeof e.substitutionWrappers > "u" && (e.substitutionWrappers = this.substitutionWrappers);
      const s = Ai.create(e), i = s.toJSON();
      this.filterSecrets(i);
      const o = {
        method: "POST",
        url: "/v3/mail/send",
        headers: s.headers,
        body: i
      };
      return this.client.request(o, n);
    } catch (s) {
      return n && n(s, null), Promise.reject(s);
    }
  }
  /**
   * Send multiple emails (shortcut)
   */
  sendMultiple(e, t) {
    return this.send(e, !0, t);
  }
};
var Dt = Ti;
const Oi = Dt;
var Ri = new Oi();
const Ci = Ri, xi = Dt;
Oe.exports = Ci;
Oe.exports.MailService = xi;
var _i = Oe.exports;
const Ye = /* @__PURE__ */ It(_i);
metadata = {
  systemName: "com.demo.sendgrid.email",
  displayName: "SendGrid Email Broker",
  description: "Sends emails using the official SendGrid npm package.",
  configuration: {
    apiKey: {
      displayName: "SendGrid API Key",
      type: "string",
      required: !0
    }
  }
};
ondescribe = async function() {
  postSchema({
    objects: {
      email: {
        displayName: "Email",
        description: "An email message to send via SendGrid.",
        properties: {
          to: { displayName: "To", type: "string" },
          from: { displayName: "From", type: "string" },
          subject: { displayName: "Subject", type: "string" },
          text: { displayName: "Text Body", type: "string" },
          html: { displayName: "HTML Body", type: "string" },
          messageId: { displayName: "Message ID", type: "string" },
          status: { displayName: "Status", type: "string" }
        },
        methods: {
          send: {
            displayName: "Send Email",
            type: "create",
            inputs: ["to", "from", "subject", "text", "html"],
            outputs: ["messageId", "status"]
          }
        }
      }
    }
  });
};
onexecute = async function({
  objectName: r,
  methodName: e,
  properties: t,
  parameters: n,
  configuration: s
}) {
  switch (r) {
    case "email":
      await ji(e, t, s);
      break;
    default:
      throw new Error("Object '" + r + "' not supported.");
  }
};
async function ji(r, e, t) {
  switch (r) {
    case "send":
      await Di(e, t);
      break;
    default:
      throw new Error("Method '" + r + "' is not supported.");
  }
}
async function Di(r, e) {
  Ye.setApiKey(String(e.apiKey));
  const t = {
    to: r.to,
    from: r.from,
    subject: r.subject,
    text: r.text,
    html: r.html
    // Optionally, you can add more fields here
  };
  try {
    const [n] = await Ye.send(t);
    let s = "";
    n && n.headers && n.headers["x-message-id"] && (s = n.headers["x-message-id"]), postResult({
      messageId: s,
      status: n.statusCode ? String(n.statusCode) : "sent"
    });
  } catch (n) {
    throw new Error("SendGrid send failed: " + (n.message || n.toString()));
  }
}
//# sourceMappingURL=index.js.map
