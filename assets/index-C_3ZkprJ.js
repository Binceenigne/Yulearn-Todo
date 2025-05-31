const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./assets/WelcomeScreen-D6-_F7jF.js",
      "./assets/WelcomeScreen-D5fmyFRB.css",
    ])
) => i.map((i) => d[i]);
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const r of i.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && n(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function n(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = s(o);
    fetch(o.href, i);
  }
})();
/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function ai(t) {
  const e = Object.create(null);
  for (const s of t.split(",")) e[s] = 1;
  return (s) => s in e;
}
const xe = {},
  Rn = [],
  Et = () => {},
  gc = () => !1,
  Xs = (t) =>
    t.charCodeAt(0) === 111 &&
    t.charCodeAt(1) === 110 &&
    (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97),
  li = (t) => t.startsWith("onUpdate:"),
  Fe = Object.assign,
  ci = (t, e) => {
    const s = t.indexOf(e);
    s > -1 && t.splice(s, 1);
  },
  vc = Object.prototype.hasOwnProperty,
  _e = (t, e) => vc.call(t, e),
  re = Array.isArray,
  On = (t) => Ss(t) === "[object Map]",
  Vn = (t) => Ss(t) === "[object Set]",
  Bi = (t) => Ss(t) === "[object Date]",
  fe = (t) => typeof t == "function",
  Be = (t) => typeof t == "string",
  kt = (t) => typeof t == "symbol",
  Me = (t) => t !== null && typeof t == "object",
  ca = (t) => (Me(t) || fe(t)) && fe(t.then) && fe(t.catch),
  ua = Object.prototype.toString,
  Ss = (t) => ua.call(t),
  yc = (t) => Ss(t).slice(8, -1),
  da = (t) => Ss(t) === "[object Object]",
  ui = (t) =>
    Be(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t,
  es = ai(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  Js = (t) => {
    const e = Object.create(null);
    return (s) => e[s] || (e[s] = t(s));
  },
  bc = /-(\w)/g,
  pt = Js((t) => t.replace(bc, (e, s) => (s ? s.toUpperCase() : ""))),
  wc = /\B([A-Z])/g,
  wn = Js((t) => t.replace(wc, "-$1").toLowerCase()),
  Qs = Js((t) => t.charAt(0).toUpperCase() + t.slice(1)),
  mo = Js((t) => (t ? `on${Qs(t)}` : "")),
  Jt = (t, e) => !Object.is(t, e),
  Ps = (t, ...e) => {
    for (let s = 0; s < t.length; s++) t[s](...e);
  },
  fa = (t, e, s, n = !1) => {
    Object.defineProperty(t, e, {
      configurable: !0,
      enumerable: !1,
      writable: n,
      value: s,
    });
  },
  Us = (t) => {
    const e = parseFloat(t);
    return isNaN(e) ? t : e;
  },
  kc = (t) => {
    const e = Be(t) ? Number(t) : NaN;
    return isNaN(e) ? t : e;
  };
let Wi;
const Zs = () =>
  Wi ||
  (Wi =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function yt(t) {
  if (re(t)) {
    const e = {};
    for (let s = 0; s < t.length; s++) {
      const n = t[s],
        o = Be(n) ? _c(n) : yt(n);
      if (o) for (const i in o) e[i] = o[i];
    }
    return e;
  } else if (Be(t) || Me(t)) return t;
}
const Sc = /;(?![^(]*\))/g,
  Tc = /:([^]+)/,
  Cc = /\/\*[^]*?\*\//g;
function _c(t) {
  const e = {};
  return (
    t
      .replace(Cc, "")
      .split(Sc)
      .forEach((s) => {
        if (s) {
          const n = s.split(Tc);
          n.length > 1 && (e[n[0].trim()] = n[1].trim());
        }
      }),
    e
  );
}
function se(t) {
  let e = "";
  if (Be(t)) e = t;
  else if (re(t))
    for (let s = 0; s < t.length; s++) {
      const n = se(t[s]);
      n && (e += n + " ");
    }
  else if (Me(t)) for (const s in t) t[s] && (e += s + " ");
  return e.trim();
}
const Dc =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  xc = ai(Dc);
function ha(t) {
  return !!t || t === "";
}
function Mc(t, e) {
  if (t.length !== e.length) return !1;
  let s = !0;
  for (let n = 0; s && n < t.length; n++) s = gn(t[n], e[n]);
  return s;
}
function gn(t, e) {
  if (t === e) return !0;
  let s = Bi(t),
    n = Bi(e);
  if (s || n) return s && n ? t.getTime() === e.getTime() : !1;
  if (((s = kt(t)), (n = kt(e)), s || n)) return t === e;
  if (((s = re(t)), (n = re(e)), s || n)) return s && n ? Mc(t, e) : !1;
  if (((s = Me(t)), (n = Me(e)), s || n)) {
    if (!s || !n) return !1;
    const o = Object.keys(t).length,
      i = Object.keys(e).length;
    if (o !== i) return !1;
    for (const r in t) {
      const a = t.hasOwnProperty(r),
        c = e.hasOwnProperty(r);
      if ((a && !c) || (!a && c) || !gn(t[r], e[r])) return !1;
    }
  }
  return String(t) === String(e);
}
function di(t, e) {
  return t.findIndex((s) => gn(s, e));
}
const pa = (t) => !!(t && t.__v_isRef === !0),
  P = (t) =>
    Be(t)
      ? t
      : t == null
      ? ""
      : re(t) || (Me(t) && (t.toString === ua || !fe(t.toString)))
      ? pa(t)
        ? P(t.value)
        : JSON.stringify(t, ma, 2)
      : String(t),
  ma = (t, e) =>
    pa(e)
      ? ma(t, e.value)
      : On(e)
      ? {
          [`Map(${e.size})`]: [...e.entries()].reduce(
            (s, [n, o], i) => ((s[go(n, i) + " =>"] = o), s),
            {}
          ),
        }
      : Vn(e)
      ? { [`Set(${e.size})`]: [...e.values()].map((s) => go(s)) }
      : kt(e)
      ? go(e)
      : Me(e) && !re(e) && !da(e)
      ? String(e)
      : e,
  go = (t, e = "") => {
    var s;
    return kt(t) ? `Symbol(${(s = t.description) != null ? s : e})` : t;
  };
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let et;
class ga {
  constructor(e = !1) {
    (this.detached = e),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = et),
      !e && et && (this.index = (et.scopes || (et.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let e, s;
      if (this.scopes)
        for (e = 0, s = this.scopes.length; e < s; e++) this.scopes[e].pause();
      for (e = 0, s = this.effects.length; e < s; e++) this.effects[e].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let e, s;
      if (this.scopes)
        for (e = 0, s = this.scopes.length; e < s; e++) this.scopes[e].resume();
      for (e = 0, s = this.effects.length; e < s; e++) this.effects[e].resume();
    }
  }
  run(e) {
    if (this._active) {
      const s = et;
      try {
        return (et = this), e();
      } finally {
        et = s;
      }
    }
  }
  on() {
    et = this;
  }
  off() {
    et = this.parent;
  }
  stop(e) {
    if (this._active) {
      this._active = !1;
      let s, n;
      for (s = 0, n = this.effects.length; s < n; s++) this.effects[s].stop();
      for (this.effects.length = 0, s = 0, n = this.cleanups.length; s < n; s++)
        this.cleanups[s]();
      if (((this.cleanups.length = 0), this.scopes)) {
        for (s = 0, n = this.scopes.length; s < n; s++) this.scopes[s].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !e) {
        const o = this.parent.scopes.pop();
        o &&
          o !== this &&
          ((this.parent.scopes[this.index] = o), (o.index = this.index));
      }
      this.parent = void 0;
    }
  }
}
function va(t) {
  return new ga(t);
}
function ya() {
  return et;
}
function Ec(t, e = !1) {
  et && et.cleanups.push(t);
}
let Ee;
const vo = new WeakSet();
class ba {
  constructor(e) {
    (this.fn = e),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      et && et.active && et.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), vo.has(this) && (vo.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || ka(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    (this.flags |= 2), Ui(this), Sa(this);
    const e = Ee,
      s = bt;
    (Ee = this), (bt = !0);
    try {
      return this.fn();
    } finally {
      Ta(this), (Ee = e), (bt = s), (this.flags &= -3);
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep) pi(e);
      (this.deps = this.depsTail = void 0),
        Ui(this),
        this.onStop && this.onStop(),
        (this.flags &= -2);
    }
  }
  trigger() {
    this.flags & 64
      ? vo.add(this)
      : this.scheduler
      ? this.scheduler()
      : this.runIfDirty();
  }
  runIfDirty() {
    Oo(this) && this.run();
  }
  get dirty() {
    return Oo(this);
  }
}
let wa = 0,
  ts,
  ns;
function ka(t, e = !1) {
  if (((t.flags |= 8), e)) {
    (t.next = ns), (ns = t);
    return;
  }
  (t.next = ts), (ts = t);
}
function fi() {
  wa++;
}
function hi() {
  if (--wa > 0) return;
  if (ns) {
    let e = ns;
    for (ns = void 0; e; ) {
      const s = e.next;
      (e.next = void 0), (e.flags &= -9), (e = s);
    }
  }
  let t;
  for (; ts; ) {
    let e = ts;
    for (ts = void 0; e; ) {
      const s = e.next;
      if (((e.next = void 0), (e.flags &= -9), e.flags & 1))
        try {
          e.trigger();
        } catch (n) {
          t || (t = n);
        }
      e = s;
    }
  }
  if (t) throw t;
}
function Sa(t) {
  for (let e = t.deps; e; e = e.nextDep)
    (e.version = -1),
      (e.prevActiveLink = e.dep.activeLink),
      (e.dep.activeLink = e);
}
function Ta(t) {
  let e,
    s = t.depsTail,
    n = s;
  for (; n; ) {
    const o = n.prevDep;
    n.version === -1 ? (n === s && (s = o), pi(n), Ac(n)) : (e = n),
      (n.dep.activeLink = n.prevActiveLink),
      (n.prevActiveLink = void 0),
      (n = o);
  }
  (t.deps = e), (t.depsTail = s);
}
function Oo(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (
      e.dep.version !== e.version ||
      (e.dep.computed && (Ca(e.dep.computed) || e.dep.version !== e.version))
    )
      return !0;
  return !!t._dirty;
}
function Ca(t) {
  if (
    (t.flags & 4 && !(t.flags & 16)) ||
    ((t.flags &= -17), t.globalVersion === ds)
  )
    return;
  t.globalVersion = ds;
  const e = t.dep;
  if (((t.flags |= 2), e.version > 0 && !t.isSSR && t.deps && !Oo(t))) {
    t.flags &= -3;
    return;
  }
  const s = Ee,
    n = bt;
  (Ee = t), (bt = !0);
  try {
    Sa(t);
    const o = t.fn(t._value);
    (e.version === 0 || Jt(o, t._value)) && ((t._value = o), e.version++);
  } catch (o) {
    throw (e.version++, o);
  } finally {
    (Ee = s), (bt = n), Ta(t), (t.flags &= -3);
  }
}
function pi(t, e = !1) {
  const { dep: s, prevSub: n, nextSub: o } = t;
  if (
    (n && ((n.nextSub = o), (t.prevSub = void 0)),
    o && ((o.prevSub = n), (t.nextSub = void 0)),
    s.subs === t && ((s.subs = n), !n && s.computed))
  ) {
    s.computed.flags &= -5;
    for (let i = s.computed.deps; i; i = i.nextDep) pi(i, !0);
  }
  !e && !--s.sc && s.map && s.map.delete(s.key);
}
function Ac(t) {
  const { prevDep: e, nextDep: s } = t;
  e && ((e.nextDep = s), (t.prevDep = void 0)),
    s && ((s.prevDep = e), (t.nextDep = void 0));
}
let bt = !0;
const _a = [];
function nn() {
  _a.push(bt), (bt = !1);
}
function sn() {
  const t = _a.pop();
  bt = t === void 0 ? !0 : t;
}
function Ui(t) {
  const { cleanup: e } = t;
  if (((t.cleanup = void 0), e)) {
    const s = Ee;
    Ee = void 0;
    try {
      e();
    } finally {
      Ee = s;
    }
  }
}
let ds = 0;
class Ic {
  constructor(e, s) {
    (this.sub = e),
      (this.dep = s),
      (this.version = s.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0);
  }
}
class mi {
  constructor(e) {
    (this.computed = e),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0);
  }
  track(e) {
    if (!Ee || !bt || Ee === this.computed) return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== Ee)
      (s = this.activeLink = new Ic(Ee, this)),
        Ee.deps
          ? ((s.prevDep = Ee.depsTail),
            (Ee.depsTail.nextDep = s),
            (Ee.depsTail = s))
          : (Ee.deps = Ee.depsTail = s),
        Da(s);
    else if (s.version === -1 && ((s.version = this.version), s.nextDep)) {
      const n = s.nextDep;
      (n.prevDep = s.prevDep),
        s.prevDep && (s.prevDep.nextDep = n),
        (s.prevDep = Ee.depsTail),
        (s.nextDep = void 0),
        (Ee.depsTail.nextDep = s),
        (Ee.depsTail = s),
        Ee.deps === s && (Ee.deps = n);
    }
    return s;
  }
  trigger(e) {
    this.version++, ds++, this.notify(e);
  }
  notify(e) {
    fi();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      hi();
    }
  }
}
function Da(t) {
  if ((t.dep.sc++, t.sub.flags & 4)) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let n = e.deps; n; n = n.nextDep) Da(n);
    }
    const s = t.dep.subs;
    s !== t && ((t.prevSub = s), s && (s.nextSub = t)), (t.dep.subs = t);
  }
}
const js = new WeakMap(),
  pn = Symbol(""),
  Po = Symbol(""),
  fs = Symbol("");
function qe(t, e, s) {
  if (bt && Ee) {
    let n = js.get(t);
    n || js.set(t, (n = new Map()));
    let o = n.get(s);
    o || (n.set(s, (o = new mi())), (o.map = n), (o.key = s)), o.track();
  }
}
function Nt(t, e, s, n, o, i) {
  const r = js.get(t);
  if (!r) {
    ds++;
    return;
  }
  const a = (c) => {
    c && c.trigger();
  };
  if ((fi(), e === "clear")) r.forEach(a);
  else {
    const c = re(t),
      u = c && ui(s);
    if (c && s === "length") {
      const d = Number(n);
      r.forEach((f, h) => {
        (h === "length" || h === fs || (!kt(h) && h >= d)) && a(f);
      });
    } else
      switch (
        ((s !== void 0 || r.has(void 0)) && a(r.get(s)), u && a(r.get(fs)), e)
      ) {
        case "add":
          c ? u && a(r.get("length")) : (a(r.get(pn)), On(t) && a(r.get(Po)));
          break;
        case "delete":
          c || (a(r.get(pn)), On(t) && a(r.get(Po)));
          break;
        case "set":
          On(t) && a(r.get(pn));
          break;
      }
  }
  hi();
}
function Rc(t, e) {
  const s = js.get(t);
  return s && s.get(e);
}
function _n(t) {
  const e = ye(t);
  return e === t ? e : (qe(e, "iterate", fs), ft(t) ? e : e.map(Xe));
}
function eo(t) {
  return qe((t = ye(t)), "iterate", fs), t;
}
const Oc = {
  __proto__: null,
  [Symbol.iterator]() {
    return yo(this, Symbol.iterator, Xe);
  },
  concat(...t) {
    return _n(this).concat(...t.map((e) => (re(e) ? _n(e) : e)));
  },
  entries() {
    return yo(this, "entries", (t) => ((t[1] = Xe(t[1])), t));
  },
  every(t, e) {
    return Rt(this, "every", t, e, void 0, arguments);
  },
  filter(t, e) {
    return Rt(this, "filter", t, e, (s) => s.map(Xe), arguments);
  },
  find(t, e) {
    return Rt(this, "find", t, e, Xe, arguments);
  },
  findIndex(t, e) {
    return Rt(this, "findIndex", t, e, void 0, arguments);
  },
  findLast(t, e) {
    return Rt(this, "findLast", t, e, Xe, arguments);
  },
  findLastIndex(t, e) {
    return Rt(this, "findLastIndex", t, e, void 0, arguments);
  },
  forEach(t, e) {
    return Rt(this, "forEach", t, e, void 0, arguments);
  },
  includes(...t) {
    return bo(this, "includes", t);
  },
  indexOf(...t) {
    return bo(this, "indexOf", t);
  },
  join(t) {
    return _n(this).join(t);
  },
  lastIndexOf(...t) {
    return bo(this, "lastIndexOf", t);
  },
  map(t, e) {
    return Rt(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return $n(this, "pop");
  },
  push(...t) {
    return $n(this, "push", t);
  },
  reduce(t, ...e) {
    return ji(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return ji(this, "reduceRight", t, e);
  },
  shift() {
    return $n(this, "shift");
  },
  some(t, e) {
    return Rt(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return $n(this, "splice", t);
  },
  toReversed() {
    return _n(this).toReversed();
  },
  toSorted(t) {
    return _n(this).toSorted(t);
  },
  toSpliced(...t) {
    return _n(this).toSpliced(...t);
  },
  unshift(...t) {
    return $n(this, "unshift", t);
  },
  values() {
    return yo(this, "values", Xe);
  },
};
function yo(t, e, s) {
  const n = eo(t),
    o = n[e]();
  return (
    n !== t &&
      !ft(t) &&
      ((o._next = o.next),
      (o.next = () => {
        const i = o._next();
        return i.value && (i.value = s(i.value)), i;
      })),
    o
  );
}
const Pc = Array.prototype;
function Rt(t, e, s, n, o, i) {
  const r = eo(t),
    a = r !== t && !ft(t),
    c = r[e];
  if (c !== Pc[e]) {
    const f = c.apply(t, i);
    return a ? Xe(f) : f;
  }
  let u = s;
  r !== t &&
    (a
      ? (u = function (f, h) {
          return s.call(this, Xe(f), h, t);
        })
      : s.length > 2 &&
        (u = function (f, h) {
          return s.call(this, f, h, t);
        }));
  const d = c.call(r, u, n);
  return a && o ? o(d) : d;
}
function ji(t, e, s, n) {
  const o = eo(t);
  let i = s;
  return (
    o !== t &&
      (ft(t)
        ? s.length > 3 &&
          (i = function (r, a, c) {
            return s.call(this, r, a, c, t);
          })
        : (i = function (r, a, c) {
            return s.call(this, r, Xe(a), c, t);
          })),
    o[e](i, ...n)
  );
}
function bo(t, e, s) {
  const n = ye(t);
  qe(n, "iterate", fs);
  const o = n[e](...s);
  return (o === -1 || o === !1) && yi(s[0])
    ? ((s[0] = ye(s[0])), n[e](...s))
    : o;
}
function $n(t, e, s = []) {
  nn(), fi();
  const n = ye(t)[e].apply(t, s);
  return hi(), sn(), n;
}
const Nc = ai("__proto__,__v_isRef,__isVue"),
  xa = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((t) => t !== "arguments" && t !== "caller")
      .map((t) => Symbol[t])
      .filter(kt)
  );
function Lc(t) {
  kt(t) || (t = String(t));
  const e = ye(this);
  return qe(e, "has", t), e.hasOwnProperty(t);
}
class Ma {
  constructor(e = !1, s = !1) {
    (this._isReadonly = e), (this._isShallow = s);
  }
  get(e, s, n) {
    if (s === "__v_skip") return e.__v_skip;
    const o = this._isReadonly,
      i = this._isShallow;
    if (s === "__v_isReactive") return !o;
    if (s === "__v_isReadonly") return o;
    if (s === "__v_isShallow") return i;
    if (s === "__v_raw")
      return n === (o ? (i ? Kc : Ra) : i ? Ia : Aa).get(e) ||
        Object.getPrototypeOf(e) === Object.getPrototypeOf(n)
        ? e
        : void 0;
    const r = re(e);
    if (!o) {
      let c;
      if (r && (c = Oc[s])) return c;
      if (s === "hasOwnProperty") return Lc;
    }
    const a = Reflect.get(e, s, Ue(e) ? e : n);
    return (kt(s) ? xa.has(s) : Nc(s)) || (o || qe(e, "get", s), i)
      ? a
      : Ue(a)
      ? r && ui(s)
        ? a
        : a.value
      : Me(a)
      ? o
        ? Pa(a)
        : Ts(a)
      : a;
  }
}
class Ea extends Ma {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, s, n, o) {
    let i = e[s];
    if (!this._isShallow) {
      const c = vn(i);
      if (
        (!ft(n) && !vn(n) && ((i = ye(i)), (n = ye(n))),
        !re(e) && Ue(i) && !Ue(n))
      )
        return c ? !1 : ((i.value = n), !0);
    }
    const r = re(e) && ui(s) ? Number(s) < e.length : _e(e, s),
      a = Reflect.set(e, s, n, Ue(e) ? e : o);
    return (
      e === ye(o) && (r ? Jt(n, i) && Nt(e, "set", s, n) : Nt(e, "add", s, n)),
      a
    );
  }
  deleteProperty(e, s) {
    const n = _e(e, s);
    e[s];
    const o = Reflect.deleteProperty(e, s);
    return o && n && Nt(e, "delete", s, void 0), o;
  }
  has(e, s) {
    const n = Reflect.has(e, s);
    return (!kt(s) || !xa.has(s)) && qe(e, "has", s), n;
  }
  ownKeys(e) {
    return qe(e, "iterate", re(e) ? "length" : pn), Reflect.ownKeys(e);
  }
}
class Bc extends Ma {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, s) {
    return !0;
  }
  deleteProperty(e, s) {
    return !0;
  }
}
const Wc = new Ea(),
  Uc = new Bc(),
  jc = new Ea(!0);
const No = (t) => t,
  Ds = (t) => Reflect.getPrototypeOf(t);
function Hc(t, e, s) {
  return function (...n) {
    const o = this.__v_raw,
      i = ye(o),
      r = On(i),
      a = t === "entries" || (t === Symbol.iterator && r),
      c = t === "keys" && r,
      u = o[t](...n),
      d = s ? No : e ? Lo : Xe;
    return (
      !e && qe(i, "iterate", c ? Po : pn),
      {
        next() {
          const { value: f, done: h } = u.next();
          return h
            ? { value: f, done: h }
            : { value: a ? [d(f[0]), d(f[1])] : d(f), done: h };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function xs(t) {
  return function (...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function Fc(t, e) {
  const s = {
    get(o) {
      const i = this.__v_raw,
        r = ye(i),
        a = ye(o);
      t || (Jt(o, a) && qe(r, "get", o), qe(r, "get", a));
      const { has: c } = Ds(r),
        u = e ? No : t ? Lo : Xe;
      if (c.call(r, o)) return u(i.get(o));
      if (c.call(r, a)) return u(i.get(a));
      i !== r && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !t && qe(ye(o), "iterate", pn), Reflect.get(o, "size", o);
    },
    has(o) {
      const i = this.__v_raw,
        r = ye(i),
        a = ye(o);
      return (
        t || (Jt(o, a) && qe(r, "has", o), qe(r, "has", a)),
        o === a ? i.has(o) : i.has(o) || i.has(a)
      );
    },
    forEach(o, i) {
      const r = this,
        a = r.__v_raw,
        c = ye(a),
        u = e ? No : t ? Lo : Xe;
      return (
        !t && qe(c, "iterate", pn),
        a.forEach((d, f) => o.call(i, u(d), u(f), r))
      );
    },
  };
  return (
    Fe(
      s,
      t
        ? {
            add: xs("add"),
            set: xs("set"),
            delete: xs("delete"),
            clear: xs("clear"),
          }
        : {
            add(o) {
              !e && !ft(o) && !vn(o) && (o = ye(o));
              const i = ye(this);
              return (
                Ds(i).has.call(i, o) || (i.add(o), Nt(i, "add", o, o)), this
              );
            },
            set(o, i) {
              !e && !ft(i) && !vn(i) && (i = ye(i));
              const r = ye(this),
                { has: a, get: c } = Ds(r);
              let u = a.call(r, o);
              u || ((o = ye(o)), (u = a.call(r, o)));
              const d = c.call(r, o);
              return (
                r.set(o, i),
                u ? Jt(i, d) && Nt(r, "set", o, i) : Nt(r, "add", o, i),
                this
              );
            },
            delete(o) {
              const i = ye(this),
                { has: r, get: a } = Ds(i);
              let c = r.call(i, o);
              c || ((o = ye(o)), (c = r.call(i, o))), a && a.call(i, o);
              const u = i.delete(o);
              return c && Nt(i, "delete", o, void 0), u;
            },
            clear() {
              const o = ye(this),
                i = o.size !== 0,
                r = o.clear();
              return i && Nt(o, "clear", void 0, void 0), r;
            },
          }
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
      s[o] = Hc(o, t, e);
    }),
    s
  );
}
function gi(t, e) {
  const s = Fc(t, e);
  return (n, o, i) =>
    o === "__v_isReactive"
      ? !t
      : o === "__v_isReadonly"
      ? t
      : o === "__v_raw"
      ? n
      : Reflect.get(_e(s, o) && o in n ? s : n, o, i);
}
const Vc = { get: gi(!1, !1) },
  $c = { get: gi(!1, !0) },
  zc = { get: gi(!0, !1) };
const Aa = new WeakMap(),
  Ia = new WeakMap(),
  Ra = new WeakMap(),
  Kc = new WeakMap();
function Gc(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Yc(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : Gc(yc(t));
}
function Ts(t) {
  return vn(t) ? t : vi(t, !1, Wc, Vc, Aa);
}
function Oa(t) {
  return vi(t, !1, jc, $c, Ia);
}
function Pa(t) {
  return vi(t, !0, Uc, zc, Ra);
}
function vi(t, e, s, n, o) {
  if (!Me(t) || (t.__v_raw && !(e && t.__v_isReactive))) return t;
  const i = o.get(t);
  if (i) return i;
  const r = Yc(t);
  if (r === 0) return t;
  const a = new Proxy(t, r === 2 ? n : s);
  return o.set(t, a), a;
}
function Qt(t) {
  return vn(t) ? Qt(t.__v_raw) : !!(t && t.__v_isReactive);
}
function vn(t) {
  return !!(t && t.__v_isReadonly);
}
function ft(t) {
  return !!(t && t.__v_isShallow);
}
function yi(t) {
  return t ? !!t.__v_raw : !1;
}
function ye(t) {
  const e = t && t.__v_raw;
  return e ? ye(e) : t;
}
function bi(t) {
  return (
    !_e(t, "__v_skip") && Object.isExtensible(t) && fa(t, "__v_skip", !0), t
  );
}
const Xe = (t) => (Me(t) ? Ts(t) : t),
  Lo = (t) => (Me(t) ? Pa(t) : t);
function Ue(t) {
  return t ? t.__v_isRef === !0 : !1;
}
function B(t) {
  return Na(t, !1);
}
function qc(t) {
  return Na(t, !0);
}
function Na(t, e) {
  return Ue(t) ? t : new Xc(t, e);
}
class Xc {
  constructor(e, s) {
    (this.dep = new mi()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = s ? e : ye(e)),
      (this._value = s ? e : Xe(e)),
      (this.__v_isShallow = s);
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    const s = this._rawValue,
      n = this.__v_isShallow || ft(e) || vn(e);
    (e = n ? e : ye(e)),
      Jt(e, s) &&
        ((this._rawValue = e),
        (this._value = n ? e : Xe(e)),
        this.dep.trigger());
  }
}
function Pn(t) {
  return Ue(t) ? t.value : t;
}
const Jc = {
  get: (t, e, s) => (e === "__v_raw" ? t : Pn(Reflect.get(t, e, s))),
  set: (t, e, s, n) => {
    const o = t[e];
    return Ue(o) && !Ue(s) ? ((o.value = s), !0) : Reflect.set(t, e, s, n);
  },
};
function La(t) {
  return Qt(t) ? t : new Proxy(t, Jc);
}
function Qc(t) {
  const e = re(t) ? new Array(t.length) : {};
  for (const s in t) e[s] = eu(t, s);
  return e;
}
class Zc {
  constructor(e, s, n) {
    (this._object = e),
      (this._key = s),
      (this._defaultValue = n),
      (this.__v_isRef = !0),
      (this._value = void 0);
  }
  get value() {
    const e = this._object[this._key];
    return (this._value = e === void 0 ? this._defaultValue : e);
  }
  set value(e) {
    this._object[this._key] = e;
  }
  get dep() {
    return Rc(ye(this._object), this._key);
  }
}
function eu(t, e, s) {
  const n = t[e];
  return Ue(n) ? n : new Zc(t, e, s);
}
class tu {
  constructor(e, s, n) {
    (this.fn = e),
      (this.setter = s),
      (this._value = void 0),
      (this.dep = new mi(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = ds - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !s),
      (this.isSSR = n);
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && Ee !== this))
      return ka(this, !0), !0;
  }
  get value() {
    const e = this.dep.track();
    return Ca(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
function nu(t, e, s = !1) {
  let n, o;
  return fe(t) ? (n = t) : ((n = t.get), (o = t.set)), new tu(n, o, s);
}
const Ms = {},
  Hs = new WeakMap();
let fn;
function su(t, e = !1, s = fn) {
  if (s) {
    let n = Hs.get(s);
    n || Hs.set(s, (n = [])), n.push(t);
  }
}
function ou(t, e, s = xe) {
  const {
      immediate: n,
      deep: o,
      once: i,
      scheduler: r,
      augmentJob: a,
      call: c,
    } = s,
    u = (v) => (o ? v : ft(v) || o === !1 || o === 0 ? Lt(v, 1) : Lt(v));
  let d,
    f,
    h,
    p,
    y = !1,
    b = !1;
  if (
    (Ue(t)
      ? ((f = () => t.value), (y = ft(t)))
      : Qt(t)
      ? ((f = () => u(t)), (y = !0))
      : re(t)
      ? ((b = !0),
        (y = t.some((v) => Qt(v) || ft(v))),
        (f = () =>
          t.map((v) => {
            if (Ue(v)) return v.value;
            if (Qt(v)) return u(v);
            if (fe(v)) return c ? c(v, 2) : v();
          })))
      : fe(t)
      ? e
        ? (f = c ? () => c(t, 2) : t)
        : (f = () => {
            if (h) {
              nn();
              try {
                h();
              } finally {
                sn();
              }
            }
            const v = fn;
            fn = d;
            try {
              return c ? c(t, 3, [p]) : t(p);
            } finally {
              fn = v;
            }
          })
      : (f = Et),
    e && o)
  ) {
    const v = f,
      D = o === !0 ? 1 / 0 : o;
    f = () => Lt(v(), D);
  }
  const A = ya(),
    L = () => {
      d.stop(), A && A.active && ci(A.effects, d);
    };
  if (i && e) {
    const v = e;
    e = (...D) => {
      v(...D), L();
    };
  }
  let C = b ? new Array(t.length).fill(Ms) : Ms;
  const _ = (v) => {
    if (!(!(d.flags & 1) || (!d.dirty && !v)))
      if (e) {
        const D = d.run();
        if (o || y || (b ? D.some((w, R) => Jt(w, C[R])) : Jt(D, C))) {
          h && h();
          const w = fn;
          fn = d;
          try {
            const R = [D, C === Ms ? void 0 : b && C[0] === Ms ? [] : C, p];
            c ? c(e, 3, R) : e(...R), (C = D);
          } finally {
            fn = w;
          }
        }
      } else d.run();
  };
  return (
    a && a(_),
    (d = new ba(f)),
    (d.scheduler = r ? () => r(_, !1) : _),
    (p = (v) => su(v, !1, d)),
    (h = d.onStop =
      () => {
        const v = Hs.get(d);
        if (v) {
          if (c) c(v, 4);
          else for (const D of v) D();
          Hs.delete(d);
        }
      }),
    e ? (n ? _(!0) : (C = d.run())) : r ? r(_.bind(null, !0), !0) : d.run(),
    (L.pause = d.pause.bind(d)),
    (L.resume = d.resume.bind(d)),
    (L.stop = L),
    L
  );
}
function Lt(t, e = 1 / 0, s) {
  if (e <= 0 || !Me(t) || t.__v_skip || ((s = s || new Set()), s.has(t)))
    return t;
  if ((s.add(t), e--, Ue(t))) Lt(t.value, e, s);
  else if (re(t)) for (let n = 0; n < t.length; n++) Lt(t[n], e, s);
  else if (Vn(t) || On(t))
    t.forEach((n) => {
      Lt(n, e, s);
    });
  else if (da(t)) {
    for (const n in t) Lt(t[n], e, s);
    for (const n of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, n) && Lt(t[n], e, s);
  }
  return t;
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Cs(t, e, s, n) {
  try {
    return n ? t(...n) : t();
  } catch (o) {
    to(o, e, s);
  }
}
function St(t, e, s, n) {
  if (fe(t)) {
    const o = Cs(t, e, s, n);
    return (
      o &&
        ca(o) &&
        o.catch((i) => {
          to(i, e, s);
        }),
      o
    );
  }
  if (re(t)) {
    const o = [];
    for (let i = 0; i < t.length; i++) o.push(St(t[i], e, s, n));
    return o;
  }
}
function to(t, e, s, n = !0) {
  const o = e ? e.vnode : null,
    { errorHandler: i, throwUnhandledErrorInProduction: r } =
      (e && e.appContext.config) || xe;
  if (e) {
    let a = e.parent;
    const c = e.proxy,
      u = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; a; ) {
      const d = a.ec;
      if (d) {
        for (let f = 0; f < d.length; f++) if (d[f](t, c, u) === !1) return;
      }
      a = a.parent;
    }
    if (i) {
      nn(), Cs(i, null, 10, [t, c, u]), sn();
      return;
    }
  }
  iu(t, s, o, n, r);
}
function iu(t, e, s, n = !0, o = !1) {
  if (o) throw t;
  console.error(t);
}
const tt = [];
let xt = -1;
const Nn = [];
let zt = null,
  Mn = 0;
const Ba = Promise.resolve();
let Fs = null;
function dt(t) {
  const e = Fs || Ba;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function ru(t) {
  let e = xt + 1,
    s = tt.length;
  for (; e < s; ) {
    const n = (e + s) >>> 1,
      o = tt[n],
      i = hs(o);
    i < t || (i === t && o.flags & 2) ? (e = n + 1) : (s = n);
  }
  return e;
}
function wi(t) {
  if (!(t.flags & 1)) {
    const e = hs(t),
      s = tt[tt.length - 1];
    !s || (!(t.flags & 2) && e >= hs(s)) ? tt.push(t) : tt.splice(ru(e), 0, t),
      (t.flags |= 1),
      Wa();
  }
}
function Wa() {
  Fs || (Fs = Ba.then(ja));
}
function au(t) {
  re(t)
    ? Nn.push(...t)
    : zt && t.id === -1
    ? zt.splice(Mn + 1, 0, t)
    : t.flags & 1 || (Nn.push(t), (t.flags |= 1)),
    Wa();
}
function Hi(t, e, s = xt + 1) {
  for (; s < tt.length; s++) {
    const n = tt[s];
    if (n && n.flags & 2) {
      if (t && n.id !== t.uid) continue;
      tt.splice(s, 1),
        s--,
        n.flags & 4 && (n.flags &= -2),
        n(),
        n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Ua(t) {
  if (Nn.length) {
    const e = [...new Set(Nn)].sort((s, n) => hs(s) - hs(n));
    if (((Nn.length = 0), zt)) {
      zt.push(...e);
      return;
    }
    for (zt = e, Mn = 0; Mn < zt.length; Mn++) {
      const s = zt[Mn];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), (s.flags &= -2);
    }
    (zt = null), (Mn = 0);
  }
}
const hs = (t) => (t.id == null ? (t.flags & 2 ? -1 : 1 / 0) : t.id);
function ja(t) {
  try {
    for (xt = 0; xt < tt.length; xt++) {
      const e = tt[xt];
      e &&
        !(e.flags & 8) &&
        (e.flags & 4 && (e.flags &= -2),
        Cs(e, e.i, e.i ? 15 : 14),
        e.flags & 4 || (e.flags &= -2));
    }
  } finally {
    for (; xt < tt.length; xt++) {
      const e = tt[xt];
      e && (e.flags &= -2);
    }
    (xt = -1),
      (tt.length = 0),
      Ua(),
      (Fs = null),
      (tt.length || Nn.length) && ja();
  }
}
let He = null,
  Ha = null;
function Vs(t) {
  const e = He;
  return (He = t), (Ha = (t && t.type.__scopeId) || null), e;
}
function Ae(t, e = He, s) {
  if (!e || t._n) return t;
  const n = (...o) => {
    n._d && nr(-1);
    const i = Vs(e);
    let r;
    try {
      r = t(...o);
    } finally {
      Vs(i), n._d && nr(1);
    }
    return r;
  };
  return (n._n = !0), (n._c = !0), (n._d = !0), n;
}
function $e(t, e) {
  if (He === null) return t;
  const s = ro(He),
    n = t.dirs || (t.dirs = []);
  for (let o = 0; o < e.length; o++) {
    let [i, r, a, c = xe] = e[o];
    i &&
      (fe(i) && (i = { mounted: i, updated: i }),
      i.deep && Lt(r),
      n.push({
        dir: i,
        instance: s,
        value: r,
        oldValue: void 0,
        arg: a,
        modifiers: c,
      }));
  }
  return t;
}
function an(t, e, s, n) {
  const o = t.dirs,
    i = e && e.dirs;
  for (let r = 0; r < o.length; r++) {
    const a = o[r];
    i && (a.oldValue = i[r].value);
    let c = a.dir[n];
    c && (nn(), St(c, s, 8, [t.el, a, t, e]), sn());
  }
}
const Fa = Symbol("_vte"),
  Va = (t) => t.__isTeleport,
  ss = (t) => t && (t.disabled || t.disabled === ""),
  Fi = (t) => t && (t.defer || t.defer === ""),
  Vi = (t) => typeof SVGElement < "u" && t instanceof SVGElement,
  $i = (t) => typeof MathMLElement == "function" && t instanceof MathMLElement,
  Bo = (t, e) => {
    const s = t && t.to;
    return Be(s) ? (e ? e(s) : null) : s;
  },
  $a = {
    name: "Teleport",
    __isTeleport: !0,
    process(t, e, s, n, o, i, r, a, c, u) {
      const {
          mc: d,
          pc: f,
          pbc: h,
          o: { insert: p, querySelector: y, createText: b, createComment: A },
        } = u,
        L = ss(e.props);
      let { shapeFlag: C, children: _, dynamicChildren: v } = e;
      if (t == null) {
        const D = (e.el = b("")),
          w = (e.anchor = b(""));
        p(D, s, n), p(w, s, n);
        const R = (E, F) => {
            C & 16 &&
              (o && o.isCE && (o.ce._teleportTarget = E),
              d(_, E, F, o, i, r, a, c));
          },
          S = () => {
            const E = (e.target = Bo(e.props, y)),
              F = za(E, e, b, p);
            E &&
              (r !== "svg" && Vi(E)
                ? (r = "svg")
                : r !== "mathml" && $i(E) && (r = "mathml"),
              L || (R(E, F), Ns(e, !1)));
          };
        L && (R(s, w), Ns(e, !0)),
          Fi(e.props)
            ? Ze(() => {
                S(), (e.el.__isMounted = !0);
              }, i)
            : S();
      } else {
        if (Fi(e.props) && !t.el.__isMounted) {
          Ze(() => {
            $a.process(t, e, s, n, o, i, r, a, c, u), delete t.el.__isMounted;
          }, i);
          return;
        }
        (e.el = t.el), (e.targetStart = t.targetStart);
        const D = (e.anchor = t.anchor),
          w = (e.target = t.target),
          R = (e.targetAnchor = t.targetAnchor),
          S = ss(t.props),
          E = S ? s : w,
          F = S ? D : R;
        if (
          (r === "svg" || Vi(w)
            ? (r = "svg")
            : (r === "mathml" || $i(w)) && (r = "mathml"),
          v
            ? (h(t.dynamicChildren, v, E, o, i, r, a), Ci(t, e, !0))
            : c || f(t, e, E, F, o, i, r, a, !1),
          L)
        )
          S
            ? e.props &&
              t.props &&
              e.props.to !== t.props.to &&
              (e.props.to = t.props.to)
            : Es(e, s, D, u, 1);
        else if ((e.props && e.props.to) !== (t.props && t.props.to)) {
          const K = (e.target = Bo(e.props, y));
          K && Es(e, K, null, u, 0);
        } else S && Es(e, w, R, u, 1);
        Ns(e, L);
      }
    },
    remove(t, e, s, { um: n, o: { remove: o } }, i) {
      const {
        shapeFlag: r,
        children: a,
        anchor: c,
        targetStart: u,
        targetAnchor: d,
        target: f,
        props: h,
      } = t;
      if ((f && (o(u), o(d)), i && o(c), r & 16)) {
        const p = i || !ss(h);
        for (let y = 0; y < a.length; y++) {
          const b = a[y];
          n(b, e, s, p, !!b.dynamicChildren);
        }
      }
    },
    move: Es,
    hydrate: lu,
  };
function Es(t, e, s, { o: { insert: n }, m: o }, i = 2) {
  i === 0 && n(t.targetAnchor, e, s);
  const { el: r, anchor: a, shapeFlag: c, children: u, props: d } = t,
    f = i === 2;
  if ((f && n(r, e, s), (!f || ss(d)) && c & 16))
    for (let h = 0; h < u.length; h++) o(u[h], e, s, 2);
  f && n(a, e, s);
}
function lu(
  t,
  e,
  s,
  n,
  o,
  i,
  {
    o: {
      nextSibling: r,
      parentNode: a,
      querySelector: c,
      insert: u,
      createText: d,
    },
  },
  f
) {
  const h = (e.target = Bo(e.props, c));
  if (h) {
    const p = ss(e.props),
      y = h._lpa || h.firstChild;
    if (e.shapeFlag & 16)
      if (p)
        (e.anchor = f(r(t), e, a(t), s, n, o, i)),
          (e.targetStart = y),
          (e.targetAnchor = y && r(y));
      else {
        e.anchor = r(t);
        let b = y;
        for (; b; ) {
          if (b && b.nodeType === 8) {
            if (b.data === "teleport start anchor") e.targetStart = b;
            else if (b.data === "teleport anchor") {
              (e.targetAnchor = b),
                (h._lpa = e.targetAnchor && r(e.targetAnchor));
              break;
            }
          }
          b = r(b);
        }
        e.targetAnchor || za(h, e, d, u), f(y && r(y), e, h, s, n, o, i);
      }
    Ns(e, p);
  }
  return e.anchor && r(e.anchor);
}
const Je = $a;
function Ns(t, e) {
  const s = t.ctx;
  if (s && s.ut) {
    let n, o;
    for (
      e
        ? ((n = t.el), (o = t.anchor))
        : ((n = t.targetStart), (o = t.targetAnchor));
      n && n !== o;

    )
      n.nodeType === 1 && n.setAttribute("data-v-owner", s.uid),
        (n = n.nextSibling);
    s.ut();
  }
}
function za(t, e, s, n) {
  const o = (e.targetStart = s("")),
    i = (e.targetAnchor = s(""));
  return (o[Fa] = i), t && (n(o, t), n(i, t)), i;
}
const Kt = Symbol("_leaveCb"),
  As = Symbol("_enterCb");
function Ka() {
  const t = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    mt(() => {
      t.isMounted = !0;
    }),
    kn(() => {
      t.isUnmounting = !0;
    }),
    t
  );
}
const ct = [Function, Array],
  Ga = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: ct,
    onEnter: ct,
    onAfterEnter: ct,
    onEnterCancelled: ct,
    onBeforeLeave: ct,
    onLeave: ct,
    onAfterLeave: ct,
    onLeaveCancelled: ct,
    onBeforeAppear: ct,
    onAppear: ct,
    onAfterAppear: ct,
    onAppearCancelled: ct,
  },
  Ya = (t) => {
    const e = t.subTree;
    return e.component ? Ya(e.component) : e;
  },
  cu = {
    name: "BaseTransition",
    props: Ga,
    setup(t, { slots: e }) {
      const s = Cl(),
        n = Ka();
      return () => {
        const o = e.default && ki(e.default(), !0);
        if (!o || !o.length) return;
        const i = qa(o),
          r = ye(t),
          { mode: a } = r;
        if (n.isLeaving) return wo(i);
        const c = zi(i);
        if (!c) return wo(i);
        let u = ps(c, r, n, s, (f) => (u = f));
        c.type !== nt && yn(c, u);
        let d = s.subTree && zi(s.subTree);
        if (d && d.type !== nt && !hn(c, d) && Ya(s).type !== nt) {
          let f = ps(d, r, n, s);
          if ((yn(d, f), a === "out-in" && c.type !== nt))
            return (
              (n.isLeaving = !0),
              (f.afterLeave = () => {
                (n.isLeaving = !1),
                  s.job.flags & 8 || s.update(),
                  delete f.afterLeave,
                  (d = void 0);
              }),
              wo(i)
            );
          a === "in-out" && c.type !== nt
            ? (f.delayLeave = (h, p, y) => {
                const b = Xa(n, d);
                (b[String(d.key)] = d),
                  (h[Kt] = () => {
                    p(), (h[Kt] = void 0), delete u.delayedLeave, (d = void 0);
                  }),
                  (u.delayedLeave = () => {
                    y(), delete u.delayedLeave, (d = void 0);
                  });
              })
            : (d = void 0);
        } else d && (d = void 0);
        return i;
      };
    },
  };
function qa(t) {
  let e = t[0];
  if (t.length > 1) {
    for (const s of t)
      if (s.type !== nt) {
        e = s;
        break;
      }
  }
  return e;
}
const uu = cu;
function Xa(t, e) {
  const { leavingVNodes: s } = t;
  let n = s.get(e.type);
  return n || ((n = Object.create(null)), s.set(e.type, n)), n;
}
function ps(t, e, s, n, o) {
  const {
      appear: i,
      mode: r,
      persisted: a = !1,
      onBeforeEnter: c,
      onEnter: u,
      onAfterEnter: d,
      onEnterCancelled: f,
      onBeforeLeave: h,
      onLeave: p,
      onAfterLeave: y,
      onLeaveCancelled: b,
      onBeforeAppear: A,
      onAppear: L,
      onAfterAppear: C,
      onAppearCancelled: _,
    } = e,
    v = String(t.key),
    D = Xa(s, t),
    w = (E, F) => {
      E && St(E, n, 9, F);
    },
    R = (E, F) => {
      const K = F[1];
      w(E, F),
        re(E) ? E.every((I) => I.length <= 1) && K() : E.length <= 1 && K();
    },
    S = {
      mode: r,
      persisted: a,
      beforeEnter(E) {
        let F = c;
        if (!s.isMounted)
          if (i) F = A || c;
          else return;
        E[Kt] && E[Kt](!0);
        const K = D[v];
        K && hn(t, K) && K.el[Kt] && K.el[Kt](), w(F, [E]);
      },
      enter(E) {
        let F = u,
          K = d,
          I = f;
        if (!s.isMounted)
          if (i) (F = L || u), (K = C || d), (I = _ || f);
          else return;
        let Y = !1;
        const G = (E[As] = (H) => {
          Y ||
            ((Y = !0),
            H ? w(I, [E]) : w(K, [E]),
            S.delayedLeave && S.delayedLeave(),
            (E[As] = void 0));
        });
        F ? R(F, [E, G]) : G();
      },
      leave(E, F) {
        const K = String(t.key);
        if ((E[As] && E[As](!0), s.isUnmounting)) return F();
        w(h, [E]);
        let I = !1;
        const Y = (E[Kt] = (G) => {
          I ||
            ((I = !0),
            F(),
            G ? w(b, [E]) : w(y, [E]),
            (E[Kt] = void 0),
            D[K] === t && delete D[K]);
        });
        (D[K] = t), p ? R(p, [E, Y]) : Y();
      },
      clone(E) {
        const F = ps(E, e, s, n, o);
        return o && o(F), F;
      },
    };
  return S;
}
function wo(t) {
  if (no(t)) return (t = en(t)), (t.children = null), t;
}
function zi(t) {
  if (!no(t)) return Va(t.type) && t.children ? qa(t.children) : t;
  const { shapeFlag: e, children: s } = t;
  if (s) {
    if (e & 16) return s[0];
    if (e & 32 && fe(s.default)) return s.default();
  }
}
function yn(t, e) {
  t.shapeFlag & 6 && t.component
    ? ((t.transition = e), yn(t.component.subTree, e))
    : t.shapeFlag & 128
    ? ((t.ssContent.transition = e.clone(t.ssContent)),
      (t.ssFallback.transition = e.clone(t.ssFallback)))
    : (t.transition = e);
}
function ki(t, e = !1, s) {
  let n = [],
    o = 0;
  for (let i = 0; i < t.length; i++) {
    let r = t[i];
    const a = s == null ? r.key : String(s) + String(r.key != null ? r.key : i);
    r.type === he
      ? (r.patchFlag & 128 && o++, (n = n.concat(ki(r.children, e, a))))
      : (e || r.type !== nt) && n.push(a != null ? en(r, { key: a }) : r);
  }
  if (o > 1) for (let i = 0; i < n.length; i++) n[i].patchFlag = -2;
  return n;
}
/*! #__NO_SIDE_EFFECTS__ */ function Ja(t, e) {
  return fe(t) ? Fe({ name: t.name }, e, { setup: t }) : t;
}
function Qa(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function $s(t, e, s, n, o = !1) {
  if (re(t)) {
    t.forEach((y, b) => $s(y, e && (re(e) ? e[b] : e), s, n, o));
    return;
  }
  if (Ln(n) && !o) {
    n.shapeFlag & 512 &&
      n.type.__asyncResolved &&
      n.component.subTree.component &&
      $s(t, e, s, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? ro(n.component) : n.el,
    r = o ? null : i,
    { i: a, r: c } = t,
    u = e && e.r,
    d = a.refs === xe ? (a.refs = {}) : a.refs,
    f = a.setupState,
    h = ye(f),
    p = f === xe ? () => !1 : (y) => _e(h, y);
  if (
    (u != null &&
      u !== c &&
      (Be(u)
        ? ((d[u] = null), p(u) && (f[u] = null))
        : Ue(u) && (u.value = null)),
    fe(c))
  )
    Cs(c, a, 12, [r, d]);
  else {
    const y = Be(c),
      b = Ue(c);
    if (y || b) {
      const A = () => {
        if (t.f) {
          const L = y ? (p(c) ? f[c] : d[c]) : c.value;
          o
            ? re(L) && ci(L, i)
            : re(L)
            ? L.includes(i) || L.push(i)
            : y
            ? ((d[c] = [i]), p(c) && (f[c] = d[c]))
            : ((c.value = [i]), t.k && (d[t.k] = c.value));
        } else
          y
            ? ((d[c] = r), p(c) && (f[c] = r))
            : b && ((c.value = r), t.k && (d[t.k] = r));
      };
      r ? ((A.id = -1), Ze(A, s)) : A();
    }
  }
}
Zs().requestIdleCallback;
Zs().cancelIdleCallback;
const Ln = (t) => !!t.type.__asyncLoader,
  no = (t) => t.type.__isKeepAlive;
function du(t, e) {
  Za(t, "a", e);
}
function fu(t, e) {
  Za(t, "da", e);
}
function Za(t, e, s = ze) {
  const n =
    t.__wdc ||
    (t.__wdc = () => {
      let o = s;
      for (; o; ) {
        if (o.isDeactivated) return;
        o = o.parent;
      }
      return t();
    });
  if ((so(e, n, s), s)) {
    let o = s.parent;
    for (; o && o.parent; )
      no(o.parent.vnode) && hu(n, e, s, o), (o = o.parent);
  }
}
function hu(t, e, s, n) {
  const o = so(e, t, n, !0);
  Si(() => {
    ci(n[e], o);
  }, s);
}
function so(t, e, s = ze, n = !1) {
  if (s) {
    const o = s[t] || (s[t] = []),
      i =
        e.__weh ||
        (e.__weh = (...r) => {
          nn();
          const a = _s(s),
            c = St(e, s, t, r);
          return a(), sn(), c;
        });
    return n ? o.unshift(i) : o.push(i), i;
  }
}
const Ut =
    (t) =>
    (e, s = ze) => {
      (!vs || t === "sp") && so(t, (...n) => e(...n), s);
    },
  pu = Ut("bm"),
  mt = Ut("m"),
  mu = Ut("bu"),
  el = Ut("u"),
  kn = Ut("bum"),
  Si = Ut("um"),
  gu = Ut("sp"),
  vu = Ut("rtg"),
  yu = Ut("rtc");
function bu(t, e = ze) {
  so("ec", t, e);
}
const tl = "components";
function Wt(t, e) {
  return sl(tl, t, !0, e) || t;
}
const nl = Symbol.for("v-ndc");
function wu(t) {
  return Be(t) ? sl(tl, t, !1) || t : t || nl;
}
function sl(t, e, s = !0, n = !1) {
  const o = He || ze;
  if (o) {
    const i = o.type;
    {
      const a = ad(i, !1);
      if (a && (a === e || a === pt(e) || a === Qs(pt(e)))) return i;
    }
    const r = Ki(o[t] || i[t], e) || Ki(o.appContext[t], e);
    return !r && n ? i : r;
  }
}
function Ki(t, e) {
  return t && (t[e] || t[pt(e)] || t[Qs(pt(e))]);
}
function Ne(t, e, s, n) {
  let o;
  const i = s,
    r = re(t);
  if (r || Be(t)) {
    const a = r && Qt(t);
    let c = !1;
    a && ((c = !ft(t)), (t = eo(t))), (o = new Array(t.length));
    for (let u = 0, d = t.length; u < d; u++)
      o[u] = e(c ? Xe(t[u]) : t[u], u, void 0, i);
  } else if (typeof t == "number") {
    o = new Array(t);
    for (let a = 0; a < t; a++) o[a] = e(a + 1, a, void 0, i);
  } else if (Me(t))
    if (t[Symbol.iterator]) o = Array.from(t, (a, c) => e(a, c, void 0, i));
    else {
      const a = Object.keys(t);
      o = new Array(a.length);
      for (let c = 0, u = a.length; c < u; c++) {
        const d = a[c];
        o[c] = e(t[d], d, c, i);
      }
    }
  else o = [];
  return o;
}
function Gi(t, e, s = {}, n, o) {
  if (He.ce || (He.parent && Ln(He.parent) && He.parent.ce))
    return (
      e !== "default" && (s.name = e), k(), Ie(he, null, [pe("slot", s, n)], 64)
    );
  let i = t[e];
  i && i._c && (i._d = !1), k();
  const r = i && ol(i(s)),
    a = s.key || (r && r.key),
    c = Ie(
      he,
      { key: (a && !kt(a) ? a : `_${e}`) + "" },
      r || [],
      r && t._ === 1 ? 64 : -2
    );
  return i && i._c && (i._d = !0), c;
}
function ol(t) {
  return t.some((e) =>
    gs(e) ? !(e.type === nt || (e.type === he && !ol(e.children))) : !0
  )
    ? t
    : null;
}
const Wo = (t) => (t ? (_l(t) ? ro(t) : Wo(t.parent)) : null),
  os = Fe(Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => Wo(t.parent),
    $root: (t) => Wo(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => rl(t),
    $forceUpdate: (t) =>
      t.f ||
      (t.f = () => {
        wi(t.update);
      }),
    $nextTick: (t) => t.n || (t.n = dt.bind(t.proxy)),
    $watch: (t) => Fu.bind(t),
  }),
  ko = (t, e) => t !== xe && !t.__isScriptSetup && _e(t, e),
  ku = {
    get({ _: t }, e) {
      if (e === "__v_skip") return !0;
      const {
        ctx: s,
        setupState: n,
        data: o,
        props: i,
        accessCache: r,
        type: a,
        appContext: c,
      } = t;
      let u;
      if (e[0] !== "$") {
        const p = r[e];
        if (p !== void 0)
          switch (p) {
            case 1:
              return n[e];
            case 2:
              return o[e];
            case 4:
              return s[e];
            case 3:
              return i[e];
          }
        else {
          if (ko(n, e)) return (r[e] = 1), n[e];
          if (o !== xe && _e(o, e)) return (r[e] = 2), o[e];
          if ((u = t.propsOptions[0]) && _e(u, e)) return (r[e] = 3), i[e];
          if (s !== xe && _e(s, e)) return (r[e] = 4), s[e];
          Uo && (r[e] = 0);
        }
      }
      const d = os[e];
      let f, h;
      if (d) return e === "$attrs" && qe(t.attrs, "get", ""), d(t);
      if ((f = a.__cssModules) && (f = f[e])) return f;
      if (s !== xe && _e(s, e)) return (r[e] = 4), s[e];
      if (((h = c.config.globalProperties), _e(h, e))) return h[e];
    },
    set({ _: t }, e, s) {
      const { data: n, setupState: o, ctx: i } = t;
      return ko(o, e)
        ? ((o[e] = s), !0)
        : n !== xe && _e(n, e)
        ? ((n[e] = s), !0)
        : _e(t.props, e) || (e[0] === "$" && e.slice(1) in t)
        ? !1
        : ((i[e] = s), !0);
    },
    has(
      {
        _: {
          data: t,
          setupState: e,
          accessCache: s,
          ctx: n,
          appContext: o,
          propsOptions: i,
        },
      },
      r
    ) {
      let a;
      return (
        !!s[r] ||
        (t !== xe && _e(t, r)) ||
        ko(e, r) ||
        ((a = i[0]) && _e(a, r)) ||
        _e(n, r) ||
        _e(os, r) ||
        _e(o.config.globalProperties, r)
      );
    },
    defineProperty(t, e, s) {
      return (
        s.get != null
          ? (t._.accessCache[e] = 0)
          : _e(s, "value") && this.set(t, e, s.value, null),
        Reflect.defineProperty(t, e, s)
      );
    },
  };
function Yi(t) {
  return re(t) ? t.reduce((e, s) => ((e[s] = null), e), {}) : t;
}
let Uo = !0;
function Su(t) {
  const e = rl(t),
    s = t.proxy,
    n = t.ctx;
  (Uo = !1), e.beforeCreate && qi(e.beforeCreate, t, "bc");
  const {
    data: o,
    computed: i,
    methods: r,
    watch: a,
    provide: c,
    inject: u,
    created: d,
    beforeMount: f,
    mounted: h,
    beforeUpdate: p,
    updated: y,
    activated: b,
    deactivated: A,
    beforeDestroy: L,
    beforeUnmount: C,
    destroyed: _,
    unmounted: v,
    render: D,
    renderTracked: w,
    renderTriggered: R,
    errorCaptured: S,
    serverPrefetch: E,
    expose: F,
    inheritAttrs: K,
    components: I,
    directives: Y,
    filters: G,
  } = e;
  if ((u && Tu(u, n, null), r))
    for (const X in r) {
      const ne = r[X];
      fe(ne) && (n[X] = ne.bind(s));
    }
  if (o) {
    const X = o.call(s, s);
    Me(X) && (t.data = Ts(X));
  }
  if (((Uo = !0), i))
    for (const X in i) {
      const ne = i[X],
        ue = fe(ne) ? ne.bind(s, s) : fe(ne.get) ? ne.get.bind(s, s) : Et,
        Re = !fe(ne) && fe(ne.set) ? ne.set.bind(s) : Et,
        me = ie({ get: ue, set: Re });
      Object.defineProperty(n, X, {
        enumerable: !0,
        configurable: !0,
        get: () => me.value,
        set: (ke) => (me.value = ke),
      });
    }
  if (a) for (const X in a) il(a[X], n, s, X);
  if (c) {
    const X = fe(c) ? c.call(s) : c;
    Reflect.ownKeys(X).forEach((ne) => {
      Ls(ne, X[ne]);
    });
  }
  d && qi(d, t, "c");
  function te(X, ne) {
    re(ne) ? ne.forEach((ue) => X(ue.bind(s))) : ne && X(ne.bind(s));
  }
  if (
    (te(pu, f),
    te(mt, h),
    te(mu, p),
    te(el, y),
    te(du, b),
    te(fu, A),
    te(bu, S),
    te(yu, w),
    te(vu, R),
    te(kn, C),
    te(Si, v),
    te(gu, E),
    re(F))
  )
    if (F.length) {
      const X = t.exposed || (t.exposed = {});
      F.forEach((ne) => {
        Object.defineProperty(X, ne, {
          get: () => s[ne],
          set: (ue) => (s[ne] = ue),
        });
      });
    } else t.exposed || (t.exposed = {});
  D && t.render === Et && (t.render = D),
    K != null && (t.inheritAttrs = K),
    I && (t.components = I),
    Y && (t.directives = Y),
    E && Qa(t);
}
function Tu(t, e, s = Et) {
  re(t) && (t = jo(t));
  for (const n in t) {
    const o = t[n];
    let i;
    Me(o)
      ? "default" in o
        ? (i = wt(o.from || n, o.default, !0))
        : (i = wt(o.from || n))
      : (i = wt(o)),
      Ue(i)
        ? Object.defineProperty(e, n, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (r) => (i.value = r),
          })
        : (e[n] = i);
  }
}
function qi(t, e, s) {
  St(re(t) ? t.map((n) => n.bind(e.proxy)) : t.bind(e.proxy), e, s);
}
function il(t, e, s, n) {
  let o = n.includes(".") ? bl(s, n) : () => s[n];
  if (Be(t)) {
    const i = e[t];
    fe(i) && Zt(o, i);
  } else if (fe(t)) Zt(o, t.bind(s));
  else if (Me(t))
    if (re(t)) t.forEach((i) => il(i, e, s, n));
    else {
      const i = fe(t.handler) ? t.handler.bind(s) : e[t.handler];
      fe(i) && Zt(o, i, t);
    }
}
function rl(t) {
  const e = t.type,
    { mixins: s, extends: n } = e,
    {
      mixins: o,
      optionsCache: i,
      config: { optionMergeStrategies: r },
    } = t.appContext,
    a = i.get(e);
  let c;
  return (
    a
      ? (c = a)
      : !o.length && !s && !n
      ? (c = e)
      : ((c = {}), o.length && o.forEach((u) => zs(c, u, r, !0)), zs(c, e, r)),
    Me(e) && i.set(e, c),
    c
  );
}
function zs(t, e, s, n = !1) {
  const { mixins: o, extends: i } = e;
  i && zs(t, i, s, !0), o && o.forEach((r) => zs(t, r, s, !0));
  for (const r in e)
    if (!(n && r === "expose")) {
      const a = Cu[r] || (s && s[r]);
      t[r] = a ? a(t[r], e[r]) : e[r];
    }
  return t;
}
const Cu = {
  data: Xi,
  props: Ji,
  emits: Ji,
  methods: Jn,
  computed: Jn,
  beforeCreate: Qe,
  created: Qe,
  beforeMount: Qe,
  mounted: Qe,
  beforeUpdate: Qe,
  updated: Qe,
  beforeDestroy: Qe,
  beforeUnmount: Qe,
  destroyed: Qe,
  unmounted: Qe,
  activated: Qe,
  deactivated: Qe,
  errorCaptured: Qe,
  serverPrefetch: Qe,
  components: Jn,
  directives: Jn,
  watch: Du,
  provide: Xi,
  inject: _u,
};
function Xi(t, e) {
  return e
    ? t
      ? function () {
          return Fe(
            fe(t) ? t.call(this, this) : t,
            fe(e) ? e.call(this, this) : e
          );
        }
      : e
    : t;
}
function _u(t, e) {
  return Jn(jo(t), jo(e));
}
function jo(t) {
  if (re(t)) {
    const e = {};
    for (let s = 0; s < t.length; s++) e[t[s]] = t[s];
    return e;
  }
  return t;
}
function Qe(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function Jn(t, e) {
  return t ? Fe(Object.create(null), t, e) : e;
}
function Ji(t, e) {
  return t
    ? re(t) && re(e)
      ? [...new Set([...t, ...e])]
      : Fe(Object.create(null), Yi(t), Yi(e ?? {}))
    : e;
}
function Du(t, e) {
  if (!t) return e;
  if (!e) return t;
  const s = Fe(Object.create(null), t);
  for (const n in e) s[n] = Qe(t[n], e[n]);
  return s;
}
function al() {
  return {
    app: null,
    config: {
      isNativeTag: gc,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let xu = 0;
function Mu(t, e) {
  return function (n, o = null) {
    fe(n) || (n = Fe({}, n)), o != null && !Me(o) && (o = null);
    const i = al(),
      r = new WeakSet(),
      a = [];
    let c = !1;
    const u = (i.app = {
      _uid: xu++,
      _component: n,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: cd,
      get config() {
        return i.config;
      },
      set config(d) {},
      use(d, ...f) {
        return (
          r.has(d) ||
            (d && fe(d.install)
              ? (r.add(d), d.install(u, ...f))
              : fe(d) && (r.add(d), d(u, ...f))),
          u
        );
      },
      mixin(d) {
        return i.mixins.includes(d) || i.mixins.push(d), u;
      },
      component(d, f) {
        return f ? ((i.components[d] = f), u) : i.components[d];
      },
      directive(d, f) {
        return f ? ((i.directives[d] = f), u) : i.directives[d];
      },
      mount(d, f, h) {
        if (!c) {
          const p = u._ceVNode || pe(n, o);
          return (
            (p.appContext = i),
            h === !0 ? (h = "svg") : h === !1 && (h = void 0),
            t(p, d, h),
            (c = !0),
            (u._container = d),
            (d.__vue_app__ = u),
            ro(p.component)
          );
        }
      },
      onUnmount(d) {
        a.push(d);
      },
      unmount() {
        c &&
          (St(a, u._instance, 16),
          t(null, u._container),
          delete u._container.__vue_app__);
      },
      provide(d, f) {
        return (i.provides[d] = f), u;
      },
      runWithContext(d) {
        const f = mn;
        mn = u;
        try {
          return d();
        } finally {
          mn = f;
        }
      },
    });
    return u;
  };
}
let mn = null;
function Ls(t, e) {
  if (ze) {
    let s = ze.provides;
    const n = ze.parent && ze.parent.provides;
    n === s && (s = ze.provides = Object.create(n)), (s[t] = e);
  }
}
function wt(t, e, s = !1) {
  const n = ze || He;
  if (n || mn) {
    const o = mn
      ? mn._context.provides
      : n
      ? n.parent == null
        ? n.vnode.appContext && n.vnode.appContext.provides
        : n.parent.provides
      : void 0;
    if (o && t in o) return o[t];
    if (arguments.length > 1) return s && fe(e) ? e.call(n && n.proxy) : e;
  }
}
function Eu() {
  return !!(ze || He || mn);
}
const ll = {},
  cl = () => Object.create(ll),
  ul = (t) => Object.getPrototypeOf(t) === ll;
function Au(t, e, s, n = !1) {
  const o = {},
    i = cl();
  (t.propsDefaults = Object.create(null)), dl(t, e, o, i);
  for (const r in t.propsOptions[0]) r in o || (o[r] = void 0);
  s ? (t.props = n ? o : Oa(o)) : t.type.props ? (t.props = o) : (t.props = i),
    (t.attrs = i);
}
function Iu(t, e, s, n) {
  const {
      props: o,
      attrs: i,
      vnode: { patchFlag: r },
    } = t,
    a = ye(o),
    [c] = t.propsOptions;
  let u = !1;
  if ((n || r > 0) && !(r & 16)) {
    if (r & 8) {
      const d = t.vnode.dynamicProps;
      for (let f = 0; f < d.length; f++) {
        let h = d[f];
        if (oo(t.emitsOptions, h)) continue;
        const p = e[h];
        if (c)
          if (_e(i, h)) p !== i[h] && ((i[h] = p), (u = !0));
          else {
            const y = pt(h);
            o[y] = Ho(c, a, y, p, t, !1);
          }
        else p !== i[h] && ((i[h] = p), (u = !0));
      }
    }
  } else {
    dl(t, e, o, i) && (u = !0);
    let d;
    for (const f in a)
      (!e || (!_e(e, f) && ((d = wn(f)) === f || !_e(e, d)))) &&
        (c
          ? s &&
            (s[f] !== void 0 || s[d] !== void 0) &&
            (o[f] = Ho(c, a, f, void 0, t, !0))
          : delete o[f]);
    if (i !== a)
      for (const f in i) (!e || !_e(e, f)) && (delete i[f], (u = !0));
  }
  u && Nt(t.attrs, "set", "");
}
function dl(t, e, s, n) {
  const [o, i] = t.propsOptions;
  let r = !1,
    a;
  if (e)
    for (let c in e) {
      if (es(c)) continue;
      const u = e[c];
      let d;
      o && _e(o, (d = pt(c)))
        ? !i || !i.includes(d)
          ? (s[d] = u)
          : ((a || (a = {}))[d] = u)
        : oo(t.emitsOptions, c) ||
          ((!(c in n) || u !== n[c]) && ((n[c] = u), (r = !0)));
    }
  if (i) {
    const c = ye(s),
      u = a || xe;
    for (let d = 0; d < i.length; d++) {
      const f = i[d];
      s[f] = Ho(o, c, f, u[f], t, !_e(u, f));
    }
  }
  return r;
}
function Ho(t, e, s, n, o, i) {
  const r = t[s];
  if (r != null) {
    const a = _e(r, "default");
    if (a && n === void 0) {
      const c = r.default;
      if (r.type !== Function && !r.skipFactory && fe(c)) {
        const { propsDefaults: u } = o;
        if (s in u) n = u[s];
        else {
          const d = _s(o);
          (n = u[s] = c.call(null, e)), d();
        }
      } else n = c;
      o.ce && o.ce._setProp(s, n);
    }
    r[0] &&
      (i && !a ? (n = !1) : r[1] && (n === "" || n === wn(s)) && (n = !0));
  }
  return n;
}
const Ru = new WeakMap();
function fl(t, e, s = !1) {
  const n = s ? Ru : e.propsCache,
    o = n.get(t);
  if (o) return o;
  const i = t.props,
    r = {},
    a = [];
  let c = !1;
  if (!fe(t)) {
    const d = (f) => {
      c = !0;
      const [h, p] = fl(f, e, !0);
      Fe(r, h), p && a.push(...p);
    };
    !s && e.mixins.length && e.mixins.forEach(d),
      t.extends && d(t.extends),
      t.mixins && t.mixins.forEach(d);
  }
  if (!i && !c) return Me(t) && n.set(t, Rn), Rn;
  if (re(i))
    for (let d = 0; d < i.length; d++) {
      const f = pt(i[d]);
      Qi(f) && (r[f] = xe);
    }
  else if (i)
    for (const d in i) {
      const f = pt(d);
      if (Qi(f)) {
        const h = i[d],
          p = (r[f] = re(h) || fe(h) ? { type: h } : Fe({}, h)),
          y = p.type;
        let b = !1,
          A = !0;
        if (re(y))
          for (let L = 0; L < y.length; ++L) {
            const C = y[L],
              _ = fe(C) && C.name;
            if (_ === "Boolean") {
              b = !0;
              break;
            } else _ === "String" && (A = !1);
          }
        else b = fe(y) && y.name === "Boolean";
        (p[0] = b), (p[1] = A), (b || _e(p, "default")) && a.push(f);
      }
    }
  const u = [r, a];
  return Me(t) && n.set(t, u), u;
}
function Qi(t) {
  return t[0] !== "$" && !es(t);
}
const hl = (t) => t[0] === "_" || t === "$stable",
  Ti = (t) => (re(t) ? t.map(Mt) : [Mt(t)]),
  Ou = (t, e, s) => {
    if (e._n) return e;
    const n = Ae((...o) => Ti(e(...o)), s);
    return (n._c = !1), n;
  },
  pl = (t, e, s) => {
    const n = t._ctx;
    for (const o in t) {
      if (hl(o)) continue;
      const i = t[o];
      if (fe(i)) e[o] = Ou(o, i, n);
      else if (i != null) {
        const r = Ti(i);
        e[o] = () => r;
      }
    }
  },
  ml = (t, e) => {
    const s = Ti(e);
    t.slots.default = () => s;
  },
  gl = (t, e, s) => {
    for (const n in e) (s || n !== "_") && (t[n] = e[n]);
  },
  Pu = (t, e, s) => {
    const n = (t.slots = cl());
    if (t.vnode.shapeFlag & 32) {
      const o = e._;
      o ? (gl(n, e, s), s && fa(n, "_", o, !0)) : pl(e, n);
    } else e && ml(t, e);
  },
  Nu = (t, e, s) => {
    const { vnode: n, slots: o } = t;
    let i = !0,
      r = xe;
    if (n.shapeFlag & 32) {
      const a = e._;
      a
        ? s && a === 1
          ? (i = !1)
          : gl(o, e, s)
        : ((i = !e.$stable), pl(e, o)),
        (r = e);
    } else e && (ml(t, e), (r = { default: 1 }));
    if (i) for (const a in o) !hl(a) && r[a] == null && delete o[a];
  },
  Ze = qu;
function Lu(t) {
  return Bu(t);
}
function Bu(t, e) {
  const s = Zs();
  s.__VUE__ = !0;
  const {
      insert: n,
      remove: o,
      patchProp: i,
      createElement: r,
      createText: a,
      createComment: c,
      setText: u,
      setElementText: d,
      parentNode: f,
      nextSibling: h,
      setScopeId: p = Et,
      insertStaticContent: y,
    } = t,
    b = (
      g,
      m,
      T,
      N = null,
      j = null,
      W = null,
      ee = void 0,
      J = null,
      q = !!m.dynamicChildren
    ) => {
      if (g === m) return;
      g && !hn(g, m) && ((N = U(g)), ke(g, j, W, !0), (g = null)),
        m.patchFlag === -2 && ((q = !1), (m.dynamicChildren = null));
      const { type: $, ref: ae, shapeFlag: x } = m;
      switch ($) {
        case io:
          A(g, m, T, N);
          break;
        case nt:
          L(g, m, T, N);
          break;
        case To:
          g == null && C(m, T, N, ee);
          break;
        case he:
          I(g, m, T, N, j, W, ee, J, q);
          break;
        default:
          x & 1
            ? D(g, m, T, N, j, W, ee, J, q)
            : x & 6
            ? Y(g, m, T, N, j, W, ee, J, q)
            : (x & 64 || x & 128) && $.process(g, m, T, N, j, W, ee, J, q, V);
      }
      ae != null && j && $s(ae, g && g.ref, W, m || g, !m);
    },
    A = (g, m, T, N) => {
      if (g == null) n((m.el = a(m.children)), T, N);
      else {
        const j = (m.el = g.el);
        m.children !== g.children && u(j, m.children);
      }
    },
    L = (g, m, T, N) => {
      g == null ? n((m.el = c(m.children || "")), T, N) : (m.el = g.el);
    },
    C = (g, m, T, N) => {
      [g.el, g.anchor] = y(g.children, m, T, N, g.el, g.anchor);
    },
    _ = ({ el: g, anchor: m }, T, N) => {
      let j;
      for (; g && g !== m; ) (j = h(g)), n(g, T, N), (g = j);
      n(m, T, N);
    },
    v = ({ el: g, anchor: m }) => {
      let T;
      for (; g && g !== m; ) (T = h(g)), o(g), (g = T);
      o(m);
    },
    D = (g, m, T, N, j, W, ee, J, q) => {
      m.type === "svg" ? (ee = "svg") : m.type === "math" && (ee = "mathml"),
        g == null ? w(m, T, N, j, W, ee, J, q) : E(g, m, j, W, ee, J, q);
    },
    w = (g, m, T, N, j, W, ee, J) => {
      let q, $;
      const { props: ae, shapeFlag: x, transition: z, dirs: oe } = g;
      if (
        ((q = g.el = r(g.type, W, ae && ae.is, ae)),
        x & 8
          ? d(q, g.children)
          : x & 16 && S(g.children, q, null, N, j, So(g, W), ee, J),
        oe && an(g, null, N, "created"),
        R(q, g, g.scopeId, ee, N),
        ae)
      ) {
        for (const Se in ae)
          Se !== "value" && !es(Se) && i(q, Se, null, ae[Se], W, N);
        "value" in ae && i(q, "value", null, ae.value, W),
          ($ = ae.onVnodeBeforeMount) && _t($, N, g);
      }
      oe && an(g, null, N, "beforeMount");
      const de = Wu(j, z);
      de && z.beforeEnter(q),
        n(q, m, T),
        (($ = ae && ae.onVnodeMounted) || de || oe) &&
          Ze(() => {
            $ && _t($, N, g), de && z.enter(q), oe && an(g, null, N, "mounted");
          }, j);
    },
    R = (g, m, T, N, j) => {
      if ((T && p(g, T), N)) for (let W = 0; W < N.length; W++) p(g, N[W]);
      if (j) {
        let W = j.subTree;
        if (
          m === W ||
          (kl(W.type) && (W.ssContent === m || W.ssFallback === m))
        ) {
          const ee = j.vnode;
          R(g, ee, ee.scopeId, ee.slotScopeIds, j.parent);
        }
      }
    },
    S = (g, m, T, N, j, W, ee, J, q = 0) => {
      for (let $ = q; $ < g.length; $++) {
        const ae = (g[$] = J ? Gt(g[$]) : Mt(g[$]));
        b(null, ae, m, T, N, j, W, ee, J);
      }
    },
    E = (g, m, T, N, j, W, ee) => {
      const J = (m.el = g.el);
      let { patchFlag: q, dynamicChildren: $, dirs: ae } = m;
      q |= g.patchFlag & 16;
      const x = g.props || xe,
        z = m.props || xe;
      let oe;
      if (
        (T && ln(T, !1),
        (oe = z.onVnodeBeforeUpdate) && _t(oe, T, m, g),
        ae && an(m, g, T, "beforeUpdate"),
        T && ln(T, !0),
        ((x.innerHTML && z.innerHTML == null) ||
          (x.textContent && z.textContent == null)) &&
          d(J, ""),
        $
          ? F(g.dynamicChildren, $, J, T, N, So(m, j), W)
          : ee || ne(g, m, J, null, T, N, So(m, j), W, !1),
        q > 0)
      ) {
        if (q & 16) K(J, x, z, T, j);
        else if (
          (q & 2 && x.class !== z.class && i(J, "class", null, z.class, j),
          q & 4 && i(J, "style", x.style, z.style, j),
          q & 8)
        ) {
          const de = m.dynamicProps;
          for (let Se = 0; Se < de.length; Se++) {
            const ge = de[Se],
              Ge = x[ge],
              Le = z[ge];
            (Le !== Ge || ge === "value") && i(J, ge, Ge, Le, j, T);
          }
        }
        q & 1 && g.children !== m.children && d(J, m.children);
      } else !ee && $ == null && K(J, x, z, T, j);
      ((oe = z.onVnodeUpdated) || ae) &&
        Ze(() => {
          oe && _t(oe, T, m, g), ae && an(m, g, T, "updated");
        }, N);
    },
    F = (g, m, T, N, j, W, ee) => {
      for (let J = 0; J < m.length; J++) {
        const q = g[J],
          $ = m[J],
          ae =
            q.el && (q.type === he || !hn(q, $) || q.shapeFlag & 70)
              ? f(q.el)
              : T;
        b(q, $, ae, null, N, j, W, ee, !0);
      }
    },
    K = (g, m, T, N, j) => {
      if (m !== T) {
        if (m !== xe)
          for (const W in m) !es(W) && !(W in T) && i(g, W, m[W], null, j, N);
        for (const W in T) {
          if (es(W)) continue;
          const ee = T[W],
            J = m[W];
          ee !== J && W !== "value" && i(g, W, J, ee, j, N);
        }
        "value" in T && i(g, "value", m.value, T.value, j);
      }
    },
    I = (g, m, T, N, j, W, ee, J, q) => {
      const $ = (m.el = g ? g.el : a("")),
        ae = (m.anchor = g ? g.anchor : a(""));
      let { patchFlag: x, dynamicChildren: z, slotScopeIds: oe } = m;
      oe && (J = J ? J.concat(oe) : oe),
        g == null
          ? (n($, T, N),
            n(ae, T, N),
            S(m.children || [], T, ae, j, W, ee, J, q))
          : x > 0 && x & 64 && z && g.dynamicChildren
          ? (F(g.dynamicChildren, z, T, j, W, ee, J),
            (m.key != null || (j && m === j.subTree)) && Ci(g, m, !0))
          : ne(g, m, T, ae, j, W, ee, J, q);
    },
    Y = (g, m, T, N, j, W, ee, J, q) => {
      (m.slotScopeIds = J),
        g == null
          ? m.shapeFlag & 512
            ? j.ctx.activate(m, T, N, ee, q)
            : G(m, T, N, j, W, ee, q)
          : H(g, m, q);
    },
    G = (g, m, T, N, j, W, ee) => {
      const J = (g.component = nd(g, N, j));
      if ((no(g) && (J.ctx.renderer = V), sd(J, !1, ee), J.asyncDep)) {
        if ((j && j.registerDep(J, te, ee), !g.el)) {
          const q = (J.subTree = pe(nt));
          L(null, q, m, T);
        }
      } else te(J, g, m, T, j, W, ee);
    },
    H = (g, m, T) => {
      const N = (m.component = g.component);
      if (Gu(g, m, T))
        if (N.asyncDep && !N.asyncResolved) {
          X(N, m, T);
          return;
        } else (N.next = m), N.update();
      else (m.el = g.el), (N.vnode = m);
    },
    te = (g, m, T, N, j, W, ee) => {
      const J = () => {
        if (g.isMounted) {
          let { next: x, bu: z, u: oe, parent: de, vnode: Se } = g;
          {
            const lt = vl(g);
            if (lt) {
              x && ((x.el = Se.el), X(g, x, ee)),
                lt.asyncDep.then(() => {
                  g.isUnmounted || J();
                });
              return;
            }
          }
          let ge = x,
            Ge;
          ln(g, !1),
            x ? ((x.el = Se.el), X(g, x, ee)) : (x = Se),
            z && Ps(z),
            (Ge = x.props && x.props.onVnodeBeforeUpdate) && _t(Ge, de, x, Se),
            ln(g, !0);
          const Le = er(g),
            Ye = g.subTree;
          (g.subTree = Le),
            b(Ye, Le, f(Ye.el), U(Ye), g, j, W),
            (x.el = Le.el),
            ge === null && Yu(g, Le.el),
            oe && Ze(oe, j),
            (Ge = x.props && x.props.onVnodeUpdated) &&
              Ze(() => _t(Ge, de, x, Se), j);
        } else {
          let x;
          const { el: z, props: oe } = m,
            { bm: de, m: Se, parent: ge, root: Ge, type: Le } = g,
            Ye = Ln(m);
          ln(g, !1),
            de && Ps(de),
            !Ye && (x = oe && oe.onVnodeBeforeMount) && _t(x, ge, m),
            ln(g, !0);
          {
            Ge.ce && Ge.ce._injectChildStyle(Le);
            const lt = (g.subTree = er(g));
            b(null, lt, T, N, g, j, W), (m.el = lt.el);
          }
          if ((Se && Ze(Se, j), !Ye && (x = oe && oe.onVnodeMounted))) {
            const lt = m;
            Ze(() => _t(x, ge, lt), j);
          }
          (m.shapeFlag & 256 ||
            (ge && Ln(ge.vnode) && ge.vnode.shapeFlag & 256)) &&
            g.a &&
            Ze(g.a, j),
            (g.isMounted = !0),
            (m = T = N = null);
        }
      };
      g.scope.on();
      const q = (g.effect = new ba(J));
      g.scope.off();
      const $ = (g.update = q.run.bind(q)),
        ae = (g.job = q.runIfDirty.bind(q));
      (ae.i = g), (ae.id = g.uid), (q.scheduler = () => wi(ae)), ln(g, !0), $();
    },
    X = (g, m, T) => {
      m.component = g;
      const N = g.vnode.props;
      (g.vnode = m),
        (g.next = null),
        Iu(g, m.props, N, T),
        Nu(g, m.children, T),
        nn(),
        Hi(g),
        sn();
    },
    ne = (g, m, T, N, j, W, ee, J, q = !1) => {
      const $ = g && g.children,
        ae = g ? g.shapeFlag : 0,
        x = m.children,
        { patchFlag: z, shapeFlag: oe } = m;
      if (z > 0) {
        if (z & 128) {
          Re($, x, T, N, j, W, ee, J, q);
          return;
        } else if (z & 256) {
          ue($, x, T, N, j, W, ee, J, q);
          return;
        }
      }
      oe & 8
        ? (ae & 16 && be($, j, W), x !== $ && d(T, x))
        : ae & 16
        ? oe & 16
          ? Re($, x, T, N, j, W, ee, J, q)
          : be($, j, W, !0)
        : (ae & 8 && d(T, ""), oe & 16 && S(x, T, N, j, W, ee, J, q));
    },
    ue = (g, m, T, N, j, W, ee, J, q) => {
      (g = g || Rn), (m = m || Rn);
      const $ = g.length,
        ae = m.length,
        x = Math.min($, ae);
      let z;
      for (z = 0; z < x; z++) {
        const oe = (m[z] = q ? Gt(m[z]) : Mt(m[z]));
        b(g[z], oe, T, null, j, W, ee, J, q);
      }
      $ > ae ? be(g, j, W, !0, !1, x) : S(m, T, N, j, W, ee, J, q, x);
    },
    Re = (g, m, T, N, j, W, ee, J, q) => {
      let $ = 0;
      const ae = m.length;
      let x = g.length - 1,
        z = ae - 1;
      for (; $ <= x && $ <= z; ) {
        const oe = g[$],
          de = (m[$] = q ? Gt(m[$]) : Mt(m[$]));
        if (hn(oe, de)) b(oe, de, T, null, j, W, ee, J, q);
        else break;
        $++;
      }
      for (; $ <= x && $ <= z; ) {
        const oe = g[x],
          de = (m[z] = q ? Gt(m[z]) : Mt(m[z]));
        if (hn(oe, de)) b(oe, de, T, null, j, W, ee, J, q);
        else break;
        x--, z--;
      }
      if ($ > x) {
        if ($ <= z) {
          const oe = z + 1,
            de = oe < ae ? m[oe].el : N;
          for (; $ <= z; )
            b(null, (m[$] = q ? Gt(m[$]) : Mt(m[$])), T, de, j, W, ee, J, q),
              $++;
        }
      } else if ($ > z) for (; $ <= x; ) ke(g[$], j, W, !0), $++;
      else {
        const oe = $,
          de = $,
          Se = new Map();
        for ($ = de; $ <= z; $++) {
          const it = (m[$] = q ? Gt(m[$]) : Mt(m[$]));
          it.key != null && Se.set(it.key, $);
        }
        let ge,
          Ge = 0;
        const Le = z - de + 1;
        let Ye = !1,
          lt = 0;
        const rn = new Array(Le);
        for ($ = 0; $ < Le; $++) rn[$] = 0;
        for ($ = oe; $ <= x; $++) {
          const it = g[$];
          if (Ge >= Le) {
            ke(it, j, W, !0);
            continue;
          }
          let Ct;
          if (it.key != null) Ct = Se.get(it.key);
          else
            for (ge = de; ge <= z; ge++)
              if (rn[ge - de] === 0 && hn(it, m[ge])) {
                Ct = ge;
                break;
              }
          Ct === void 0
            ? ke(it, j, W, !0)
            : ((rn[Ct - de] = $ + 1),
              Ct >= lt ? (lt = Ct) : (Ye = !0),
              b(it, m[Ct], T, null, j, W, ee, J, q),
              Ge++);
        }
        const Cn = Ye ? Uu(rn) : Rn;
        for (ge = Cn.length - 1, $ = Le - 1; $ >= 0; $--) {
          const it = de + $,
            Ct = m[it],
            Li = it + 1 < ae ? m[it + 1].el : N;
          rn[$] === 0
            ? b(null, Ct, T, Li, j, W, ee, J, q)
            : Ye && (ge < 0 || $ !== Cn[ge] ? me(Ct, T, Li, 2) : ge--);
        }
      }
    },
    me = (g, m, T, N, j = null) => {
      const { el: W, type: ee, transition: J, children: q, shapeFlag: $ } = g;
      if ($ & 6) {
        me(g.component.subTree, m, T, N);
        return;
      }
      if ($ & 128) {
        g.suspense.move(m, T, N);
        return;
      }
      if ($ & 64) {
        ee.move(g, m, T, V);
        return;
      }
      if (ee === he) {
        n(W, m, T);
        for (let x = 0; x < q.length; x++) me(q[x], m, T, N);
        n(g.anchor, m, T);
        return;
      }
      if (ee === To) {
        _(g, m, T);
        return;
      }
      if (N !== 2 && $ & 1 && J)
        if (N === 0) J.beforeEnter(W), n(W, m, T), Ze(() => J.enter(W), j);
        else {
          const { leave: x, delayLeave: z, afterLeave: oe } = J,
            de = () => n(W, m, T),
            Se = () => {
              x(W, () => {
                de(), oe && oe();
              });
            };
          z ? z(W, de, Se) : Se();
        }
      else n(W, m, T);
    },
    ke = (g, m, T, N = !1, j = !1) => {
      const {
        type: W,
        props: ee,
        ref: J,
        children: q,
        dynamicChildren: $,
        shapeFlag: ae,
        patchFlag: x,
        dirs: z,
        cacheIndex: oe,
      } = g;
      if (
        (x === -2 && (j = !1),
        J != null && $s(J, null, T, g, !0),
        oe != null && (m.renderCache[oe] = void 0),
        ae & 256)
      ) {
        m.ctx.deactivate(g);
        return;
      }
      const de = ae & 1 && z,
        Se = !Ln(g);
      let ge;
      if ((Se && (ge = ee && ee.onVnodeBeforeUnmount) && _t(ge, m, g), ae & 6))
        De(g.component, T, N);
      else {
        if (ae & 128) {
          g.suspense.unmount(T, N);
          return;
        }
        de && an(g, null, m, "beforeUnmount"),
          ae & 64
            ? g.type.remove(g, m, T, V, N)
            : $ && !$.hasOnce && (W !== he || (x > 0 && x & 64))
            ? be($, m, T, !1, !0)
            : ((W === he && x & 384) || (!j && ae & 16)) && be(q, m, T),
          N && We(g);
      }
      ((Se && (ge = ee && ee.onVnodeUnmounted)) || de) &&
        Ze(() => {
          ge && _t(ge, m, g), de && an(g, null, m, "unmounted");
        }, T);
    },
    We = (g) => {
      const { type: m, el: T, anchor: N, transition: j } = g;
      if (m === he) {
        ce(T, N);
        return;
      }
      if (m === To) {
        v(g);
        return;
      }
      const W = () => {
        o(T), j && !j.persisted && j.afterLeave && j.afterLeave();
      };
      if (g.shapeFlag & 1 && j && !j.persisted) {
        const { leave: ee, delayLeave: J } = j,
          q = () => ee(T, W);
        J ? J(g.el, W, q) : q();
      } else W();
    },
    ce = (g, m) => {
      let T;
      for (; g !== m; ) (T = h(g)), o(g), (g = T);
      o(m);
    },
    De = (g, m, T) => {
      const { bum: N, scope: j, job: W, subTree: ee, um: J, m: q, a: $ } = g;
      Zi(q),
        Zi($),
        N && Ps(N),
        j.stop(),
        W && ((W.flags |= 8), ke(ee, g, m, T)),
        J && Ze(J, m),
        Ze(() => {
          g.isUnmounted = !0;
        }, m),
        m &&
          m.pendingBranch &&
          !m.isUnmounted &&
          g.asyncDep &&
          !g.asyncResolved &&
          g.suspenseId === m.pendingId &&
          (m.deps--, m.deps === 0 && m.resolve());
    },
    be = (g, m, T, N = !1, j = !1, W = 0) => {
      for (let ee = W; ee < g.length; ee++) ke(g[ee], m, T, N, j);
    },
    U = (g) => {
      if (g.shapeFlag & 6) return U(g.component.subTree);
      if (g.shapeFlag & 128) return g.suspense.next();
      const m = h(g.anchor || g.el),
        T = m && m[Fa];
      return T ? h(T) : m;
    };
  let Z = !1;
  const O = (g, m, T) => {
      g == null
        ? m._vnode && ke(m._vnode, null, null, !0)
        : b(m._vnode || null, g, m, null, null, null, T),
        (m._vnode = g),
        Z || ((Z = !0), Hi(), Ua(), (Z = !1));
    },
    V = {
      p: b,
      um: ke,
      m: me,
      r: We,
      mt: G,
      mc: S,
      pc: ne,
      pbc: F,
      n: U,
      o: t,
    };
  return { render: O, hydrate: void 0, createApp: Mu(O) };
}
function So({ type: t, props: e }, s) {
  return (s === "svg" && t === "foreignObject") ||
    (s === "mathml" &&
      t === "annotation-xml" &&
      e &&
      e.encoding &&
      e.encoding.includes("html"))
    ? void 0
    : s;
}
function ln({ effect: t, job: e }, s) {
  s ? ((t.flags |= 32), (e.flags |= 4)) : ((t.flags &= -33), (e.flags &= -5));
}
function Wu(t, e) {
  return (!t || (t && !t.pendingBranch)) && e && !e.persisted;
}
function Ci(t, e, s = !1) {
  const n = t.children,
    o = e.children;
  if (re(n) && re(o))
    for (let i = 0; i < n.length; i++) {
      const r = n[i];
      let a = o[i];
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = o[i] = Gt(o[i])), (a.el = r.el)),
        !s && a.patchFlag !== -2 && Ci(r, a)),
        a.type === io && (a.el = r.el);
    }
}
function Uu(t) {
  const e = t.slice(),
    s = [0];
  let n, o, i, r, a;
  const c = t.length;
  for (n = 0; n < c; n++) {
    const u = t[n];
    if (u !== 0) {
      if (((o = s[s.length - 1]), t[o] < u)) {
        (e[n] = o), s.push(n);
        continue;
      }
      for (i = 0, r = s.length - 1; i < r; )
        (a = (i + r) >> 1), t[s[a]] < u ? (i = a + 1) : (r = a);
      u < t[s[i]] && (i > 0 && (e[n] = s[i - 1]), (s[i] = n));
    }
  }
  for (i = s.length, r = s[i - 1]; i-- > 0; ) (s[i] = r), (r = e[r]);
  return s;
}
function vl(t) {
  const e = t.subTree.component;
  if (e) return e.asyncDep && !e.asyncResolved ? e : vl(e);
}
function Zi(t) {
  if (t) for (let e = 0; e < t.length; e++) t[e].flags |= 8;
}
const ju = Symbol.for("v-scx"),
  Hu = () => wt(ju);
function Zt(t, e, s) {
  return yl(t, e, s);
}
function yl(t, e, s = xe) {
  const { immediate: n, deep: o, flush: i, once: r } = s,
    a = Fe({}, s),
    c = (e && n) || (!e && i !== "post");
  let u;
  if (vs) {
    if (i === "sync") {
      const p = Hu();
      u = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!c) {
      const p = () => {};
      return (p.stop = Et), (p.resume = Et), (p.pause = Et), p;
    }
  }
  const d = ze;
  a.call = (p, y, b) => St(p, d, y, b);
  let f = !1;
  i === "post"
    ? (a.scheduler = (p) => {
        Ze(p, d && d.suspense);
      })
    : i !== "sync" &&
      ((f = !0),
      (a.scheduler = (p, y) => {
        y ? p() : wi(p);
      })),
    (a.augmentJob = (p) => {
      e && (p.flags |= 4),
        f && ((p.flags |= 2), d && ((p.id = d.uid), (p.i = d)));
    });
  const h = ou(t, e, a);
  return vs && (u ? u.push(h) : c && h()), h;
}
function Fu(t, e, s) {
  const n = this.proxy,
    o = Be(t) ? (t.includes(".") ? bl(n, t) : () => n[t]) : t.bind(n, n);
  let i;
  fe(e) ? (i = e) : ((i = e.handler), (s = e));
  const r = _s(this),
    a = yl(o, i.bind(n), s);
  return r(), a;
}
function bl(t, e) {
  const s = e.split(".");
  return () => {
    let n = t;
    for (let o = 0; o < s.length && n; o++) n = n[s[o]];
    return n;
  };
}
const Vu = (t, e) =>
  e === "modelValue" || e === "model-value"
    ? t.modelModifiers
    : t[`${e}Modifiers`] || t[`${pt(e)}Modifiers`] || t[`${wn(e)}Modifiers`];
function $u(t, e, ...s) {
  if (t.isUnmounted) return;
  const n = t.vnode.props || xe;
  let o = s;
  const i = e.startsWith("update:"),
    r = i && Vu(n, e.slice(7));
  r &&
    (r.trim && (o = s.map((d) => (Be(d) ? d.trim() : d))),
    r.number && (o = s.map(Us)));
  let a,
    c = n[(a = mo(e))] || n[(a = mo(pt(e)))];
  !c && i && (c = n[(a = mo(wn(e)))]), c && St(c, t, 6, o);
  const u = n[a + "Once"];
  if (u) {
    if (!t.emitted) t.emitted = {};
    else if (t.emitted[a]) return;
    (t.emitted[a] = !0), St(u, t, 6, o);
  }
}
function wl(t, e, s = !1) {
  const n = e.emitsCache,
    o = n.get(t);
  if (o !== void 0) return o;
  const i = t.emits;
  let r = {},
    a = !1;
  if (!fe(t)) {
    const c = (u) => {
      const d = wl(u, e, !0);
      d && ((a = !0), Fe(r, d));
    };
    !s && e.mixins.length && e.mixins.forEach(c),
      t.extends && c(t.extends),
      t.mixins && t.mixins.forEach(c);
  }
  return !i && !a
    ? (Me(t) && n.set(t, null), null)
    : (re(i) ? i.forEach((c) => (r[c] = null)) : Fe(r, i),
      Me(t) && n.set(t, r),
      r);
}
function oo(t, e) {
  return !t || !Xs(e)
    ? !1
    : ((e = e.slice(2).replace(/Once$/, "")),
      _e(t, e[0].toLowerCase() + e.slice(1)) || _e(t, wn(e)) || _e(t, e));
}
function er(t) {
  const {
      type: e,
      vnode: s,
      proxy: n,
      withProxy: o,
      propsOptions: [i],
      slots: r,
      attrs: a,
      emit: c,
      render: u,
      renderCache: d,
      props: f,
      data: h,
      setupState: p,
      ctx: y,
      inheritAttrs: b,
    } = t,
    A = Vs(t);
  let L, C;
  try {
    if (s.shapeFlag & 4) {
      const v = o || n,
        D = v;
      (L = Mt(u.call(D, v, d, f, p, h, y))), (C = a);
    } else {
      const v = e;
      (L = Mt(
        v.length > 1 ? v(f, { attrs: a, slots: r, emit: c }) : v(f, null)
      )),
        (C = e.props ? a : zu(a));
    }
  } catch (v) {
    (is.length = 0), to(v, t, 1), (L = pe(nt));
  }
  let _ = L;
  if (C && b !== !1) {
    const v = Object.keys(C),
      { shapeFlag: D } = _;
    v.length &&
      D & 7 &&
      (i && v.some(li) && (C = Ku(C, i)), (_ = en(_, C, !1, !0)));
  }
  return (
    s.dirs &&
      ((_ = en(_, null, !1, !0)),
      (_.dirs = _.dirs ? _.dirs.concat(s.dirs) : s.dirs)),
    s.transition && yn(_, s.transition),
    (L = _),
    Vs(A),
    L
  );
}
const zu = (t) => {
    let e;
    for (const s in t)
      (s === "class" || s === "style" || Xs(s)) && ((e || (e = {}))[s] = t[s]);
    return e;
  },
  Ku = (t, e) => {
    const s = {};
    for (const n in t) (!li(n) || !(n.slice(9) in e)) && (s[n] = t[n]);
    return s;
  };
function Gu(t, e, s) {
  const { props: n, children: o, component: i } = t,
    { props: r, children: a, patchFlag: c } = e,
    u = i.emitsOptions;
  if (e.dirs || e.transition) return !0;
  if (s && c >= 0) {
    if (c & 1024) return !0;
    if (c & 16) return n ? tr(n, r, u) : !!r;
    if (c & 8) {
      const d = e.dynamicProps;
      for (let f = 0; f < d.length; f++) {
        const h = d[f];
        if (r[h] !== n[h] && !oo(u, h)) return !0;
      }
    }
  } else
    return (o || a) && (!a || !a.$stable)
      ? !0
      : n === r
      ? !1
      : n
      ? r
        ? tr(n, r, u)
        : !0
      : !!r;
  return !1;
}
function tr(t, e, s) {
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length) return !0;
  for (let o = 0; o < n.length; o++) {
    const i = n[o];
    if (e[i] !== t[i] && !oo(s, i)) return !0;
  }
  return !1;
}
function Yu({ vnode: t, parent: e }, s) {
  for (; e; ) {
    const n = e.subTree;
    if ((n.suspense && n.suspense.activeBranch === t && (n.el = t.el), n === t))
      ((t = e.vnode).el = s), (e = e.parent);
    else break;
  }
}
const kl = (t) => t.__isSuspense;
function qu(t, e) {
  e && e.pendingBranch
    ? re(t)
      ? e.effects.push(...t)
      : e.effects.push(t)
    : au(t);
}
const he = Symbol.for("v-fgt"),
  io = Symbol.for("v-txt"),
  nt = Symbol.for("v-cmt"),
  To = Symbol.for("v-stc"),
  is = [];
let at = null;
function k(t = !1) {
  is.push((at = t ? null : []));
}
function Xu() {
  is.pop(), (at = is[is.length - 1] || null);
}
let ms = 1;
function nr(t, e = !1) {
  (ms += t), t < 0 && at && e && (at.hasOnce = !0);
}
function Sl(t) {
  return (
    (t.dynamicChildren = ms > 0 ? at || Rn : null),
    Xu(),
    ms > 0 && at && at.push(t),
    t
  );
}
function M(t, e, s, n, o, i) {
  return Sl(l(t, e, s, n, o, i, !0));
}
function Ie(t, e, s, n, o) {
  return Sl(pe(t, e, s, n, o, !0));
}
function gs(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function hn(t, e) {
  return t.type === e.type && t.key === e.key;
}
const Tl = ({ key: t }) => t ?? null,
  Bs = ({ ref: t, ref_key: e, ref_for: s }) => (
    typeof t == "number" && (t = "" + t),
    t != null
      ? Be(t) || Ue(t) || fe(t)
        ? { i: He, r: t, k: e, f: !!s }
        : t
      : null
  );
function l(
  t,
  e = null,
  s = null,
  n = 0,
  o = null,
  i = t === he ? 0 : 1,
  r = !1,
  a = !1
) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && Tl(e),
    ref: e && Bs(e),
    scopeId: Ha,
    slotScopeIds: null,
    children: s,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: n,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: He,
  };
  return (
    a
      ? (_i(c, s), i & 128 && t.normalize(c))
      : s && (c.shapeFlag |= Be(s) ? 8 : 16),
    ms > 0 &&
      !r &&
      at &&
      (c.patchFlag > 0 || i & 6) &&
      c.patchFlag !== 32 &&
      at.push(c),
    c
  );
}
const pe = Ju;
function Ju(t, e = null, s = null, n = 0, o = null, i = !1) {
  if (((!t || t === nl) && (t = nt), gs(t))) {
    const a = en(t, e, !0);
    return (
      s && _i(a, s),
      ms > 0 &&
        !i &&
        at &&
        (a.shapeFlag & 6 ? (at[at.indexOf(t)] = a) : at.push(a)),
      (a.patchFlag = -2),
      a
    );
  }
  if ((ld(t) && (t = t.__vccOpts), e)) {
    e = Qu(e);
    let { class: a, style: c } = e;
    a && !Be(a) && (e.class = se(a)),
      Me(c) && (yi(c) && !re(c) && (c = Fe({}, c)), (e.style = yt(c)));
  }
  const r = Be(t) ? 1 : kl(t) ? 128 : Va(t) ? 64 : Me(t) ? 4 : fe(t) ? 2 : 0;
  return l(t, e, s, n, o, r, i, !0);
}
function Qu(t) {
  return t ? (yi(t) || ul(t) ? Fe({}, t) : t) : null;
}
function en(t, e, s = !1, n = !1) {
  const { props: o, ref: i, patchFlag: r, children: a, transition: c } = t,
    u = e ? Zu(o || {}, e) : o,
    d = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: t.type,
      props: u,
      key: u && Tl(u),
      ref:
        e && e.ref
          ? s && i
            ? re(i)
              ? i.concat(Bs(e))
              : [i, Bs(e)]
            : Bs(e)
          : i,
      scopeId: t.scopeId,
      slotScopeIds: t.slotScopeIds,
      children: a,
      target: t.target,
      targetStart: t.targetStart,
      targetAnchor: t.targetAnchor,
      staticCount: t.staticCount,
      shapeFlag: t.shapeFlag,
      patchFlag: e && t.type !== he ? (r === -1 ? 16 : r | 16) : r,
      dynamicProps: t.dynamicProps,
      dynamicChildren: t.dynamicChildren,
      appContext: t.appContext,
      dirs: t.dirs,
      transition: c,
      component: t.component,
      suspense: t.suspense,
      ssContent: t.ssContent && en(t.ssContent),
      ssFallback: t.ssFallback && en(t.ssFallback),
      el: t.el,
      anchor: t.anchor,
      ctx: t.ctx,
      ce: t.ce,
    };
  return c && n && yn(d, c.clone(d)), d;
}
function we(t = " ", e = 0) {
  return pe(io, null, t, e);
}
function Q(t = "", e = !1) {
  return e ? (k(), Ie(nt, null, t)) : pe(nt, null, t);
}
function Mt(t) {
  return t == null || typeof t == "boolean"
    ? pe(nt)
    : re(t)
    ? pe(he, null, t.slice())
    : gs(t)
    ? Gt(t)
    : pe(io, null, String(t));
}
function Gt(t) {
  return (t.el === null && t.patchFlag !== -1) || t.memo ? t : en(t);
}
function _i(t, e) {
  let s = 0;
  const { shapeFlag: n } = t;
  if (e == null) e = null;
  else if (re(e)) s = 16;
  else if (typeof e == "object")
    if (n & 65) {
      const o = e.default;
      o && (o._c && (o._d = !1), _i(t, o()), o._c && (o._d = !0));
      return;
    } else {
      s = 32;
      const o = e._;
      !o && !ul(e)
        ? (e._ctx = He)
        : o === 3 &&
          He &&
          (He.slots._ === 1 ? (e._ = 1) : ((e._ = 2), (t.patchFlag |= 1024)));
    }
  else
    fe(e)
      ? ((e = { default: e, _ctx: He }), (s = 32))
      : ((e = String(e)), n & 64 ? ((s = 16), (e = [we(e)])) : (s = 8));
  (t.children = e), (t.shapeFlag |= s);
}
function Zu(...t) {
  const e = {};
  for (let s = 0; s < t.length; s++) {
    const n = t[s];
    for (const o in n)
      if (o === "class")
        e.class !== n.class && (e.class = se([e.class, n.class]));
      else if (o === "style") e.style = yt([e.style, n.style]);
      else if (Xs(o)) {
        const i = e[o],
          r = n[o];
        r &&
          i !== r &&
          !(re(i) && i.includes(r)) &&
          (e[o] = i ? [].concat(i, r) : r);
      } else o !== "" && (e[o] = n[o]);
  }
  return e;
}
function _t(t, e, s, n = null) {
  St(t, e, 7, [s, n]);
}
const ed = al();
let td = 0;
function nd(t, e, s) {
  const n = t.type,
    o = (e ? e.appContext : t.appContext) || ed,
    i = {
      uid: td++,
      vnode: t,
      type: n,
      parent: e,
      appContext: o,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new ga(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: e ? e.provides : Object.create(o.provides),
      ids: e ? e.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: fl(n, o),
      emitsOptions: wl(n, o),
      emit: null,
      emitted: null,
      propsDefaults: xe,
      inheritAttrs: n.inheritAttrs,
      ctx: xe,
      data: xe,
      props: xe,
      attrs: xe,
      slots: xe,
      refs: xe,
      setupState: xe,
      setupContext: null,
      suspense: s,
      suspenseId: s ? s.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (i.ctx = { _: i }),
    (i.root = e ? e.root : i),
    (i.emit = $u.bind(null, i)),
    t.ce && t.ce(i),
    i
  );
}
let ze = null;
const Cl = () => ze || He;
let Ks, Fo;
{
  const t = Zs(),
    e = (s, n) => {
      let o;
      return (
        (o = t[s]) || (o = t[s] = []),
        o.push(n),
        (i) => {
          o.length > 1 ? o.forEach((r) => r(i)) : o[0](i);
        }
      );
    };
  (Ks = e("__VUE_INSTANCE_SETTERS__", (s) => (ze = s))),
    (Fo = e("__VUE_SSR_SETTERS__", (s) => (vs = s)));
}
const _s = (t) => {
    const e = ze;
    return (
      Ks(t),
      t.scope.on(),
      () => {
        t.scope.off(), Ks(e);
      }
    );
  },
  sr = () => {
    ze && ze.scope.off(), Ks(null);
  };
function _l(t) {
  return t.vnode.shapeFlag & 4;
}
let vs = !1;
function sd(t, e = !1, s = !1) {
  e && Fo(e);
  const { props: n, children: o } = t.vnode,
    i = _l(t);
  Au(t, n, i, e), Pu(t, o, s);
  const r = i ? od(t, e) : void 0;
  return e && Fo(!1), r;
}
function od(t, e) {
  const s = t.type;
  (t.accessCache = Object.create(null)), (t.proxy = new Proxy(t.ctx, ku));
  const { setup: n } = s;
  if (n) {
    nn();
    const o = (t.setupContext = n.length > 1 ? rd(t) : null),
      i = _s(t),
      r = Cs(n, t, 0, [t.props, o]),
      a = ca(r);
    if ((sn(), i(), (a || t.sp) && !Ln(t) && Qa(t), a)) {
      if ((r.then(sr, sr), e))
        return r
          .then((c) => {
            or(t, c);
          })
          .catch((c) => {
            to(c, t, 0);
          });
      t.asyncDep = r;
    } else or(t, r);
  } else Dl(t);
}
function or(t, e, s) {
  fe(e)
    ? t.type.__ssrInlineRender
      ? (t.ssrRender = e)
      : (t.render = e)
    : Me(e) && (t.setupState = La(e)),
    Dl(t);
}
function Dl(t, e, s) {
  const n = t.type;
  t.render || (t.render = n.render || Et);
  {
    const o = _s(t);
    nn();
    try {
      Su(t);
    } finally {
      sn(), o();
    }
  }
}
const id = {
  get(t, e) {
    return qe(t, "get", ""), t[e];
  },
};
function rd(t) {
  const e = (s) => {
    t.exposed = s || {};
  };
  return {
    attrs: new Proxy(t.attrs, id),
    slots: t.slots,
    emit: t.emit,
    expose: e,
  };
}
function ro(t) {
  return t.exposed
    ? t.exposeProxy ||
        (t.exposeProxy = new Proxy(La(bi(t.exposed)), {
          get(e, s) {
            if (s in e) return e[s];
            if (s in os) return os[s](t);
          },
          has(e, s) {
            return s in e || s in os;
          },
        }))
    : t.proxy;
}
function ad(t, e = !0) {
  return fe(t) ? t.displayName || t.name : t.name || (e && t.__name);
}
function ld(t) {
  return fe(t) && "__vccOpts" in t;
}
const ie = (t, e) => nu(t, e, vs);
function Di(t, e, s) {
  const n = arguments.length;
  return n === 2
    ? Me(e) && !re(e)
      ? gs(e)
        ? pe(t, null, [e])
        : pe(t, e)
      : pe(t, null, e)
    : (n > 3
        ? (s = Array.prototype.slice.call(arguments, 2))
        : n === 3 && gs(s) && (s = [s]),
      pe(t, e, s));
}
const cd = "3.5.13";
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Vo;
const ir = typeof window < "u" && window.trustedTypes;
if (ir)
  try {
    Vo = ir.createPolicy("vue", { createHTML: (t) => t });
  } catch {}
const xl = Vo ? (t) => Vo.createHTML(t) : (t) => t,
  ud = "http://www.w3.org/2000/svg",
  dd = "http://www.w3.org/1998/Math/MathML",
  Pt = typeof document < "u" ? document : null,
  rr = Pt && Pt.createElement("template"),
  fd = {
    insert: (t, e, s) => {
      e.insertBefore(t, s || null);
    },
    remove: (t) => {
      const e = t.parentNode;
      e && e.removeChild(t);
    },
    createElement: (t, e, s, n) => {
      const o =
        e === "svg"
          ? Pt.createElementNS(ud, t)
          : e === "mathml"
          ? Pt.createElementNS(dd, t)
          : s
          ? Pt.createElement(t, { is: s })
          : Pt.createElement(t);
      return (
        t === "select" &&
          n &&
          n.multiple != null &&
          o.setAttribute("multiple", n.multiple),
        o
      );
    },
    createText: (t) => Pt.createTextNode(t),
    createComment: (t) => Pt.createComment(t),
    setText: (t, e) => {
      t.nodeValue = e;
    },
    setElementText: (t, e) => {
      t.textContent = e;
    },
    parentNode: (t) => t.parentNode,
    nextSibling: (t) => t.nextSibling,
    querySelector: (t) => Pt.querySelector(t),
    setScopeId(t, e) {
      t.setAttribute(e, "");
    },
    insertStaticContent(t, e, s, n, o, i) {
      const r = s ? s.previousSibling : e.lastChild;
      if (o && (o === i || o.nextSibling))
        for (
          ;
          e.insertBefore(o.cloneNode(!0), s),
            !(o === i || !(o = o.nextSibling));

        );
      else {
        rr.innerHTML = xl(
          n === "svg"
            ? `<svg>${t}</svg>`
            : n === "mathml"
            ? `<math>${t}</math>`
            : t
        );
        const a = rr.content;
        if (n === "svg" || n === "mathml") {
          const c = a.firstChild;
          for (; c.firstChild; ) a.appendChild(c.firstChild);
          a.removeChild(c);
        }
        e.insertBefore(a, s);
      }
      return [
        r ? r.nextSibling : e.firstChild,
        s ? s.previousSibling : e.lastChild,
      ];
    },
  },
  jt = "transition",
  zn = "animation",
  Un = Symbol("_vtc"),
  Ml = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  El = Fe({}, Ga, Ml),
  hd = (t) => ((t.displayName = "Transition"), (t.props = El), t),
  Ke = hd((t, { slots: e }) => Di(uu, Al(t), e)),
  cn = (t, e = []) => {
    re(t) ? t.forEach((s) => s(...e)) : t && t(...e);
  },
  ar = (t) => (t ? (re(t) ? t.some((e) => e.length > 1) : t.length > 1) : !1);
function Al(t) {
  const e = {};
  for (const I in t) I in Ml || (e[I] = t[I]);
  if (t.css === !1) return e;
  const {
      name: s = "v",
      type: n,
      duration: o,
      enterFromClass: i = `${s}-enter-from`,
      enterActiveClass: r = `${s}-enter-active`,
      enterToClass: a = `${s}-enter-to`,
      appearFromClass: c = i,
      appearActiveClass: u = r,
      appearToClass: d = a,
      leaveFromClass: f = `${s}-leave-from`,
      leaveActiveClass: h = `${s}-leave-active`,
      leaveToClass: p = `${s}-leave-to`,
    } = t,
    y = pd(o),
    b = y && y[0],
    A = y && y[1],
    {
      onBeforeEnter: L,
      onEnter: C,
      onEnterCancelled: _,
      onLeave: v,
      onLeaveCancelled: D,
      onBeforeAppear: w = L,
      onAppear: R = C,
      onAppearCancelled: S = _,
    } = e,
    E = (I, Y, G, H) => {
      (I._enterCancelled = H), Vt(I, Y ? d : a), Vt(I, Y ? u : r), G && G();
    },
    F = (I, Y) => {
      (I._isLeaving = !1), Vt(I, f), Vt(I, p), Vt(I, h), Y && Y();
    },
    K = (I) => (Y, G) => {
      const H = I ? R : C,
        te = () => E(Y, I, G);
      cn(H, [Y, te]),
        lr(() => {
          Vt(Y, I ? c : i), Dt(Y, I ? d : a), ar(H) || cr(Y, n, b, te);
        });
    };
  return Fe(e, {
    onBeforeEnter(I) {
      cn(L, [I]), Dt(I, i), Dt(I, r);
    },
    onBeforeAppear(I) {
      cn(w, [I]), Dt(I, c), Dt(I, u);
    },
    onEnter: K(!1),
    onAppear: K(!0),
    onLeave(I, Y) {
      I._isLeaving = !0;
      const G = () => F(I, Y);
      Dt(I, f),
        I._enterCancelled ? (Dt(I, h), $o()) : ($o(), Dt(I, h)),
        lr(() => {
          I._isLeaving && (Vt(I, f), Dt(I, p), ar(v) || cr(I, n, A, G));
        }),
        cn(v, [I, G]);
    },
    onEnterCancelled(I) {
      E(I, !1, void 0, !0), cn(_, [I]);
    },
    onAppearCancelled(I) {
      E(I, !0, void 0, !0), cn(S, [I]);
    },
    onLeaveCancelled(I) {
      F(I), cn(D, [I]);
    },
  });
}
function pd(t) {
  if (t == null) return null;
  if (Me(t)) return [Co(t.enter), Co(t.leave)];
  {
    const e = Co(t);
    return [e, e];
  }
}
function Co(t) {
  return kc(t);
}
function Dt(t, e) {
  e.split(/\s+/).forEach((s) => s && t.classList.add(s)),
    (t[Un] || (t[Un] = new Set())).add(e);
}
function Vt(t, e) {
  e.split(/\s+/).forEach((n) => n && t.classList.remove(n));
  const s = t[Un];
  s && (s.delete(e), s.size || (t[Un] = void 0));
}
function lr(t) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t);
  });
}
let md = 0;
function cr(t, e, s, n) {
  const o = (t._endId = ++md),
    i = () => {
      o === t._endId && n();
    };
  if (s != null) return setTimeout(i, s);
  const { type: r, timeout: a, propCount: c } = Il(t, e);
  if (!r) return n();
  const u = r + "end";
  let d = 0;
  const f = () => {
      t.removeEventListener(u, h), i();
    },
    h = (p) => {
      p.target === t && ++d >= c && f();
    };
  setTimeout(() => {
    d < c && f();
  }, a + 1),
    t.addEventListener(u, h);
}
function Il(t, e) {
  const s = window.getComputedStyle(t),
    n = (y) => (s[y] || "").split(", "),
    o = n(`${jt}Delay`),
    i = n(`${jt}Duration`),
    r = ur(o, i),
    a = n(`${zn}Delay`),
    c = n(`${zn}Duration`),
    u = ur(a, c);
  let d = null,
    f = 0,
    h = 0;
  e === jt
    ? r > 0 && ((d = jt), (f = r), (h = i.length))
    : e === zn
    ? u > 0 && ((d = zn), (f = u), (h = c.length))
    : ((f = Math.max(r, u)),
      (d = f > 0 ? (r > u ? jt : zn) : null),
      (h = d ? (d === jt ? i.length : c.length) : 0));
  const p =
    d === jt && /\b(transform|all)(,|$)/.test(n(`${jt}Property`).toString());
  return { type: d, timeout: f, propCount: h, hasTransform: p };
}
function ur(t, e) {
  for (; t.length < e.length; ) t = t.concat(t);
  return Math.max(...e.map((s, n) => dr(s) + dr(t[n])));
}
function dr(t) {
  return t === "auto" ? 0 : Number(t.slice(0, -1).replace(",", ".")) * 1e3;
}
function $o() {
  return document.body.offsetHeight;
}
function gd(t, e, s) {
  const n = t[Un];
  n && (e = (e ? [e, ...n] : [...n]).join(" ")),
    e == null
      ? t.removeAttribute("class")
      : s
      ? t.setAttribute("class", e)
      : (t.className = e);
}
const fr = Symbol("_vod"),
  vd = Symbol("_vsh"),
  yd = Symbol(""),
  bd = /(^|;)\s*display\s*:/;
function wd(t, e, s) {
  const n = t.style,
    o = Be(s);
  let i = !1;
  if (s && !o) {
    if (e)
      if (Be(e))
        for (const r of e.split(";")) {
          const a = r.slice(0, r.indexOf(":")).trim();
          s[a] == null && Ws(n, a, "");
        }
      else for (const r in e) s[r] == null && Ws(n, r, "");
    for (const r in s) r === "display" && (i = !0), Ws(n, r, s[r]);
  } else if (o) {
    if (e !== s) {
      const r = n[yd];
      r && (s += ";" + r), (n.cssText = s), (i = bd.test(s));
    }
  } else e && t.removeAttribute("style");
  fr in t && ((t[fr] = i ? n.display : ""), t[vd] && (n.display = "none"));
}
const hr = /\s*!important$/;
function Ws(t, e, s) {
  if (re(s)) s.forEach((n) => Ws(t, e, n));
  else if ((s == null && (s = ""), e.startsWith("--"))) t.setProperty(e, s);
  else {
    const n = kd(t, e);
    hr.test(s)
      ? t.setProperty(wn(n), s.replace(hr, ""), "important")
      : (t[n] = s);
  }
}
const pr = ["Webkit", "Moz", "ms"],
  _o = {};
function kd(t, e) {
  const s = _o[e];
  if (s) return s;
  let n = pt(e);
  if (n !== "filter" && n in t) return (_o[e] = n);
  n = Qs(n);
  for (let o = 0; o < pr.length; o++) {
    const i = pr[o] + n;
    if (i in t) return (_o[e] = i);
  }
  return e;
}
const mr = "http://www.w3.org/1999/xlink";
function gr(t, e, s, n, o, i = xc(e)) {
  n && e.startsWith("xlink:")
    ? s == null
      ? t.removeAttributeNS(mr, e.slice(6, e.length))
      : t.setAttributeNS(mr, e, s)
    : s == null || (i && !ha(s))
    ? t.removeAttribute(e)
    : t.setAttribute(e, i ? "" : kt(s) ? String(s) : s);
}
function vr(t, e, s, n, o) {
  if (e === "innerHTML" || e === "textContent") {
    s != null && (t[e] = e === "innerHTML" ? xl(s) : s);
    return;
  }
  const i = t.tagName;
  if (e === "value" && i !== "PROGRESS" && !i.includes("-")) {
    const a = i === "OPTION" ? t.getAttribute("value") || "" : t.value,
      c = s == null ? (t.type === "checkbox" ? "on" : "") : String(s);
    (a !== c || !("_value" in t)) && (t.value = c),
      s == null && t.removeAttribute(e),
      (t._value = s);
    return;
  }
  let r = !1;
  if (s === "" || s == null) {
    const a = typeof t[e];
    a === "boolean"
      ? (s = ha(s))
      : s == null && a === "string"
      ? ((s = ""), (r = !0))
      : a === "number" && ((s = 0), (r = !0));
  }
  try {
    t[e] = s;
  } catch {}
  r && t.removeAttribute(o || e);
}
function Bt(t, e, s, n) {
  t.addEventListener(e, s, n);
}
function Sd(t, e, s, n) {
  t.removeEventListener(e, s, n);
}
const yr = Symbol("_vei");
function Td(t, e, s, n, o = null) {
  const i = t[yr] || (t[yr] = {}),
    r = i[e];
  if (n && r) r.value = n;
  else {
    const [a, c] = Cd(e);
    if (n) {
      const u = (i[e] = xd(n, o));
      Bt(t, a, u, c);
    } else r && (Sd(t, a, r, c), (i[e] = void 0));
  }
}
const br = /(?:Once|Passive|Capture)$/;
function Cd(t) {
  let e;
  if (br.test(t)) {
    e = {};
    let n;
    for (; (n = t.match(br)); )
      (t = t.slice(0, t.length - n[0].length)), (e[n[0].toLowerCase()] = !0);
  }
  return [t[2] === ":" ? t.slice(3) : wn(t.slice(2)), e];
}
let Do = 0;
const _d = Promise.resolve(),
  Dd = () => Do || (_d.then(() => (Do = 0)), (Do = Date.now()));
function xd(t, e) {
  const s = (n) => {
    if (!n._vts) n._vts = Date.now();
    else if (n._vts <= s.attached) return;
    St(Md(n, s.value), e, 5, [n]);
  };
  return (s.value = t), (s.attached = Dd()), s;
}
function Md(t, e) {
  if (re(e)) {
    const s = t.stopImmediatePropagation;
    return (
      (t.stopImmediatePropagation = () => {
        s.call(t), (t._stopped = !0);
      }),
      e.map((n) => (o) => !o._stopped && n && n(o))
    );
  } else return e;
}
const wr = (t) =>
    t.charCodeAt(0) === 111 &&
    t.charCodeAt(1) === 110 &&
    t.charCodeAt(2) > 96 &&
    t.charCodeAt(2) < 123,
  Ed = (t, e, s, n, o, i) => {
    const r = o === "svg";
    e === "class"
      ? gd(t, n, r)
      : e === "style"
      ? wd(t, s, n)
      : Xs(e)
      ? li(e) || Td(t, e, s, n, i)
      : (
          e[0] === "."
            ? ((e = e.slice(1)), !0)
            : e[0] === "^"
            ? ((e = e.slice(1)), !1)
            : Ad(t, e, n, r)
        )
      ? (vr(t, e, n),
        !t.tagName.includes("-") &&
          (e === "value" || e === "checked" || e === "selected") &&
          gr(t, e, n, r, i, e !== "value"))
      : t._isVueCE && (/[A-Z]/.test(e) || !Be(n))
      ? vr(t, pt(e), n, i, e)
      : (e === "true-value"
          ? (t._trueValue = n)
          : e === "false-value" && (t._falseValue = n),
        gr(t, e, n, r));
  };
function Ad(t, e, s, n) {
  if (n)
    return !!(
      e === "innerHTML" ||
      e === "textContent" ||
      (e in t && wr(e) && fe(s))
    );
  if (
    e === "spellcheck" ||
    e === "draggable" ||
    e === "translate" ||
    e === "form" ||
    (e === "list" && t.tagName === "INPUT") ||
    (e === "type" && t.tagName === "TEXTAREA")
  )
    return !1;
  if (e === "width" || e === "height") {
    const o = t.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return wr(e) && Be(s) ? !1 : e in t;
}
const Rl = new WeakMap(),
  Ol = new WeakMap(),
  Gs = Symbol("_moveCb"),
  kr = Symbol("_enterCb"),
  Id = (t) => (delete t.props.mode, t),
  Rd = Id({
    name: "TransitionGroup",
    props: Fe({}, El, { tag: String, moveClass: String }),
    setup(t, { slots: e }) {
      const s = Cl(),
        n = Ka();
      let o, i;
      return (
        el(() => {
          if (!o.length) return;
          const r = t.moveClass || `${t.name || "v"}-move`;
          if (!Ld(o[0].el, s.vnode.el, r)) return;
          o.forEach(Od), o.forEach(Pd);
          const a = o.filter(Nd);
          $o(),
            a.forEach((c) => {
              const u = c.el,
                d = u.style;
              Dt(u, r),
                (d.transform = d.webkitTransform = d.transitionDuration = "");
              const f = (u[Gs] = (h) => {
                (h && h.target !== u) ||
                  ((!h || /transform$/.test(h.propertyName)) &&
                    (u.removeEventListener("transitionend", f),
                    (u[Gs] = null),
                    Vt(u, r)));
              });
              u.addEventListener("transitionend", f);
            });
        }),
        () => {
          const r = ye(t),
            a = Al(r);
          let c = r.tag || he;
          if (((o = []), i))
            for (let u = 0; u < i.length; u++) {
              const d = i[u];
              d.el &&
                d.el instanceof Element &&
                (o.push(d),
                yn(d, ps(d, a, n, s)),
                Rl.set(d, d.el.getBoundingClientRect()));
            }
          i = e.default ? ki(e.default()) : [];
          for (let u = 0; u < i.length; u++) {
            const d = i[u];
            d.key != null && yn(d, ps(d, a, n, s));
          }
          return pe(c, null, i);
        }
      );
    },
  }),
  Sr = Rd;
function Od(t) {
  const e = t.el;
  e[Gs] && e[Gs](), e[kr] && e[kr]();
}
function Pd(t) {
  Ol.set(t, t.el.getBoundingClientRect());
}
function Nd(t) {
  const e = Rl.get(t),
    s = Ol.get(t),
    n = e.left - s.left,
    o = e.top - s.top;
  if (n || o) {
    const i = t.el.style;
    return (
      (i.transform = i.webkitTransform = `translate(${n}px,${o}px)`),
      (i.transitionDuration = "0s"),
      t
    );
  }
}
function Ld(t, e, s) {
  const n = t.cloneNode(),
    o = t[Un];
  o &&
    o.forEach((a) => {
      a.split(/\s+/).forEach((c) => c && n.classList.remove(c));
    }),
    s.split(/\s+/).forEach((a) => a && n.classList.add(a)),
    (n.style.display = "none");
  const i = e.nodeType === 1 ? e : e.parentNode;
  i.appendChild(n);
  const { hasTransform: r } = Il(n);
  return i.removeChild(n), r;
}
const tn = (t) => {
  const e = t.props["onUpdate:modelValue"] || !1;
  return re(e) ? (s) => Ps(e, s) : e;
};
function Bd(t) {
  t.target.composing = !0;
}
function Tr(t) {
  const e = t.target;
  e.composing && ((e.composing = !1), e.dispatchEvent(new Event("input")));
}
const ht = Symbol("_assign"),
  rt = {
    created(t, { modifiers: { lazy: e, trim: s, number: n } }, o) {
      t[ht] = tn(o);
      const i = n || (o.props && o.props.type === "number");
      Bt(t, e ? "change" : "input", (r) => {
        if (r.target.composing) return;
        let a = t.value;
        s && (a = a.trim()), i && (a = Us(a)), t[ht](a);
      }),
        s &&
          Bt(t, "change", () => {
            t.value = t.value.trim();
          }),
        e ||
          (Bt(t, "compositionstart", Bd),
          Bt(t, "compositionend", Tr),
          Bt(t, "change", Tr));
    },
    mounted(t, { value: e }) {
      t.value = e ?? "";
    },
    beforeUpdate(
      t,
      { value: e, oldValue: s, modifiers: { lazy: n, trim: o, number: i } },
      r
    ) {
      if (((t[ht] = tn(r)), t.composing)) return;
      const a =
          (i || t.type === "number") && !/^0\d/.test(t.value)
            ? Us(t.value)
            : t.value,
        c = e ?? "";
      a !== c &&
        ((document.activeElement === t &&
          t.type !== "range" &&
          ((n && e === s) || (o && t.value.trim() === c))) ||
          (t.value = c));
    },
  },
  zo = {
    deep: !0,
    created(t, e, s) {
      (t[ht] = tn(s)),
        Bt(t, "change", () => {
          const n = t._modelValue,
            o = jn(t),
            i = t.checked,
            r = t[ht];
          if (re(n)) {
            const a = di(n, o),
              c = a !== -1;
            if (i && !c) r(n.concat(o));
            else if (!i && c) {
              const u = [...n];
              u.splice(a, 1), r(u);
            }
          } else if (Vn(n)) {
            const a = new Set(n);
            i ? a.add(o) : a.delete(o), r(a);
          } else r(Pl(t, i));
        });
    },
    mounted: Cr,
    beforeUpdate(t, e, s) {
      (t[ht] = tn(s)), Cr(t, e, s);
    },
  };
function Cr(t, { value: e, oldValue: s }, n) {
  t._modelValue = e;
  let o;
  if (re(e)) o = di(e, n.props.value) > -1;
  else if (Vn(e)) o = e.has(n.props.value);
  else {
    if (e === s) return;
    o = gn(e, Pl(t, !0));
  }
  t.checked !== o && (t.checked = o);
}
const Qn = {
    created(t, { value: e }, s) {
      (t.checked = gn(e, s.props.value)),
        (t[ht] = tn(s)),
        Bt(t, "change", () => {
          t[ht](jn(t));
        });
    },
    beforeUpdate(t, { value: e, oldValue: s }, n) {
      (t[ht] = tn(n)), e !== s && (t.checked = gn(e, n.props.value));
    },
  },
  Wd = {
    deep: !0,
    created(t, { value: e, modifiers: { number: s } }, n) {
      const o = Vn(e);
      Bt(t, "change", () => {
        const i = Array.prototype.filter
          .call(t.options, (r) => r.selected)
          .map((r) => (s ? Us(jn(r)) : jn(r)));
        t[ht](t.multiple ? (o ? new Set(i) : i) : i[0]),
          (t._assigning = !0),
          dt(() => {
            t._assigning = !1;
          });
      }),
        (t[ht] = tn(n));
    },
    mounted(t, { value: e }) {
      _r(t, e);
    },
    beforeUpdate(t, e, s) {
      t[ht] = tn(s);
    },
    updated(t, { value: e }) {
      t._assigning || _r(t, e);
    },
  };
function _r(t, e) {
  const s = t.multiple,
    n = re(e);
  if (!(s && !n && !Vn(e))) {
    for (let o = 0, i = t.options.length; o < i; o++) {
      const r = t.options[o],
        a = jn(r);
      if (s)
        if (n) {
          const c = typeof a;
          c === "string" || c === "number"
            ? (r.selected = e.some((u) => String(u) === String(a)))
            : (r.selected = di(e, a) > -1);
        } else r.selected = e.has(a);
      else if (gn(jn(r), e)) {
        t.selectedIndex !== o && (t.selectedIndex = o);
        return;
      }
    }
    !s && t.selectedIndex !== -1 && (t.selectedIndex = -1);
  }
}
function jn(t) {
  return "_value" in t ? t._value : t.value;
}
function Pl(t, e) {
  const s = e ? "_trueValue" : "_falseValue";
  return s in t ? t[s] : e;
}
const Ud = {
  created(t, e, s) {
    Is(t, e, s, null, "created");
  },
  mounted(t, e, s) {
    Is(t, e, s, null, "mounted");
  },
  beforeUpdate(t, e, s, n) {
    Is(t, e, s, n, "beforeUpdate");
  },
  updated(t, e, s, n) {
    Is(t, e, s, n, "updated");
  },
};
function jd(t, e) {
  switch (t) {
    case "SELECT":
      return Wd;
    case "TEXTAREA":
      return rt;
    default:
      switch (e) {
        case "checkbox":
          return zo;
        case "radio":
          return Qn;
        default:
          return rt;
      }
  }
}
function Is(t, e, s, n, o) {
  const r = jd(t.tagName, s.props && s.props.type)[o];
  r && r(t, e, s, n);
}
const Hd = ["ctrl", "shift", "alt", "meta"],
  Fd = {
    stop: (t) => t.stopPropagation(),
    prevent: (t) => t.preventDefault(),
    self: (t) => t.target !== t.currentTarget,
    ctrl: (t) => !t.ctrlKey,
    shift: (t) => !t.shiftKey,
    alt: (t) => !t.altKey,
    meta: (t) => !t.metaKey,
    left: (t) => "button" in t && t.button !== 0,
    middle: (t) => "button" in t && t.button !== 1,
    right: (t) => "button" in t && t.button !== 2,
    exact: (t, e) => Hd.some((s) => t[`${s}Key`] && !e.includes(s)),
  },
  Ce = (t, e) => {
    const s = t._withMods || (t._withMods = {}),
      n = e.join(".");
    return (
      s[n] ||
      (s[n] = (o, ...i) => {
        for (let r = 0; r < e.length; r++) {
          const a = Fd[e[r]];
          if (a && a(o, e)) return;
        }
        return t(o, ...i);
      })
    );
  },
  Vd = Fe({ patchProp: Ed }, fd);
let Dr;
function $d() {
  return Dr || (Dr = Lu(Vd));
}
const zd = (...t) => {
  const e = $d().createApp(...t),
    { mount: s } = e;
  return (
    (e.mount = (n) => {
      const o = Gd(n);
      if (!o) return;
      const i = e._component;
      !fe(i) && !i.render && !i.template && (i.template = o.innerHTML),
        o.nodeType === 1 && (o.textContent = "");
      const r = s(o, !1, Kd(o));
      return (
        o instanceof Element &&
          (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")),
        r
      );
    }),
    e
  );
};
function Kd(t) {
  if (t instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function Gd(t) {
  return Be(t) ? document.querySelector(t) : t;
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */ let Nl;
const ao = (t) => (Nl = t),
  Ll = Symbol();
function Ko(t) {
  return (
    t &&
    typeof t == "object" &&
    Object.prototype.toString.call(t) === "[object Object]" &&
    typeof t.toJSON != "function"
  );
}
var rs;
(function (t) {
  (t.direct = "direct"),
    (t.patchObject = "patch object"),
    (t.patchFunction = "patch function");
})(rs || (rs = {}));
function Yd() {
  const t = va(!0),
    e = t.run(() => B({}));
  let s = [],
    n = [];
  const o = bi({
    install(i) {
      ao(o),
        (o._a = i),
        i.provide(Ll, o),
        (i.config.globalProperties.$pinia = o),
        n.forEach((r) => s.push(r)),
        (n = []);
    },
    use(i) {
      return this._a ? s.push(i) : n.push(i), this;
    },
    _p: s,
    _a: null,
    _e: t,
    _s: new Map(),
    state: e,
  });
  return o;
}
const Bl = () => {};
function xr(t, e, s, n = Bl) {
  t.push(e);
  const o = () => {
    const i = t.indexOf(e);
    i > -1 && (t.splice(i, 1), n());
  };
  return !s && ya() && Ec(o), o;
}
function Dn(t, ...e) {
  t.slice().forEach((s) => {
    s(...e);
  });
}
const qd = (t) => t(),
  Mr = Symbol(),
  xo = Symbol();
function Go(t, e) {
  t instanceof Map && e instanceof Map
    ? e.forEach((s, n) => t.set(n, s))
    : t instanceof Set && e instanceof Set && e.forEach(t.add, t);
  for (const s in e) {
    if (!e.hasOwnProperty(s)) continue;
    const n = e[s],
      o = t[s];
    Ko(o) && Ko(n) && t.hasOwnProperty(s) && !Ue(n) && !Qt(n)
      ? (t[s] = Go(o, n))
      : (t[s] = n);
  }
  return t;
}
const Xd = Symbol();
function Jd(t) {
  return !Ko(t) || !t.hasOwnProperty(Xd);
}
const { assign: $t } = Object;
function Qd(t) {
  return !!(Ue(t) && t.effect);
}
function Zd(t, e, s, n) {
  const { state: o, actions: i, getters: r } = e,
    a = s.state.value[t];
  let c;
  function u() {
    a || (s.state.value[t] = o ? o() : {});
    const d = Qc(s.state.value[t]);
    return $t(
      d,
      i,
      Object.keys(r || {}).reduce(
        (f, h) => (
          (f[h] = bi(
            ie(() => {
              ao(s);
              const p = s._s.get(t);
              return r[h].call(p, p);
            })
          )),
          f
        ),
        {}
      )
    );
  }
  return (c = Wl(t, u, e, s, n, !0)), c;
}
function Wl(t, e, s = {}, n, o, i) {
  let r;
  const a = $t({ actions: {} }, s),
    c = { deep: !0 };
  let u,
    d,
    f = [],
    h = [],
    p;
  const y = n.state.value[t];
  !i && !y && (n.state.value[t] = {}), B({});
  let b;
  function A(S) {
    let E;
    (u = d = !1),
      typeof S == "function"
        ? (S(n.state.value[t]),
          (E = { type: rs.patchFunction, storeId: t, events: p }))
        : (Go(n.state.value[t], S),
          (E = { type: rs.patchObject, payload: S, storeId: t, events: p }));
    const F = (b = Symbol());
    dt().then(() => {
      b === F && (u = !0);
    }),
      (d = !0),
      Dn(f, E, n.state.value[t]);
  }
  const L = i
    ? function () {
        const { state: E } = s,
          F = E ? E() : {};
        this.$patch((K) => {
          $t(K, F);
        });
      }
    : Bl;
  function C() {
    r.stop(), (f = []), (h = []), n._s.delete(t);
  }
  const _ = (S, E = "") => {
      if (Mr in S) return (S[xo] = E), S;
      const F = function () {
        ao(n);
        const K = Array.from(arguments),
          I = [],
          Y = [];
        function G(X) {
          I.push(X);
        }
        function H(X) {
          Y.push(X);
        }
        Dn(h, { args: K, name: F[xo], store: D, after: G, onError: H });
        let te;
        try {
          te = S.apply(this && this.$id === t ? this : D, K);
        } catch (X) {
          throw (Dn(Y, X), X);
        }
        return te instanceof Promise
          ? te
              .then((X) => (Dn(I, X), X))
              .catch((X) => (Dn(Y, X), Promise.reject(X)))
          : (Dn(I, te), te);
      };
      return (F[Mr] = !0), (F[xo] = E), F;
    },
    v = {
      _p: n,
      $id: t,
      $onAction: xr.bind(null, h),
      $patch: A,
      $reset: L,
      $subscribe(S, E = {}) {
        const F = xr(f, S, E.detached, () => K()),
          K = r.run(() =>
            Zt(
              () => n.state.value[t],
              (I) => {
                (E.flush === "sync" ? d : u) &&
                  S({ storeId: t, type: rs.direct, events: p }, I);
              },
              $t({}, c, E)
            )
          );
        return F;
      },
      $dispose: C,
    },
    D = Ts(v);
  n._s.set(t, D);
  const R = ((n._a && n._a.runWithContext) || qd)(() =>
    n._e.run(() => (r = va()).run(() => e({ action: _ })))
  );
  for (const S in R) {
    const E = R[S];
    if ((Ue(E) && !Qd(E)) || Qt(E))
      i ||
        (y && Jd(E) && (Ue(E) ? (E.value = y[S]) : Go(E, y[S])),
        (n.state.value[t][S] = E));
    else if (typeof E == "function") {
      const F = _(E, S);
      (R[S] = F), (a.actions[S] = E);
    }
  }
  return (
    $t(D, R),
    $t(ye(D), R),
    Object.defineProperty(D, "$state", {
      get: () => n.state.value[t],
      set: (S) => {
        A((E) => {
          $t(E, S);
        });
      },
    }),
    n._p.forEach((S) => {
      $t(
        D,
        r.run(() => S({ store: D, app: n._a, pinia: n, options: a }))
      );
    }),
    y && i && s.hydrate && s.hydrate(D.$state, y),
    (u = !0),
    (d = !0),
    D
  );
}
/*! #__NO_SIDE_EFFECTS__ */ function Sn(t, e, s) {
  let n, o;
  const i = typeof e == "function";
  typeof t == "string" ? ((n = t), (o = i ? s : e)) : ((o = t), (n = t.id));
  function r(a, c) {
    const u = Eu();
    return (
      (a = a || (u ? wt(Ll, null) : null)),
      a && ao(a),
      (a = Nl),
      a._s.has(n) || (i ? Wl(n, e, o, a) : Zd(n, o, a)),
      a._s.get(n)
    );
  }
  return (r.$id = n), r;
}
const lo = Sn("settings", () => {
    const t = B(25),
      e = B(5),
      s = B("default"),
      n = B(!0),
      o = B(!0),
      i = B(!0),
      r = B(!0),
      a = B("default.mp3");
    function c() {
      localStorage.setItem(
        "pomodoro-settings",
        JSON.stringify({
          focusTime: t.value,
          restTime: e.value,
          theme: s.value,
          soundEnabled: n.value,
          vibrationEnabled: o.value,
          centerToastEnabled: i.value,
          browserNotificationEnabled: r.value,
          selectedAlarmSound: a.value,
        })
      );
    }
    function u() {
      const h = localStorage.getItem("pomodoro-settings");
      if (h) {
        const p = JSON.parse(h);
        (t.value = p.focusTime || 25),
          (e.value = p.restTime || p.shortBreakTime || 5),
          (s.value = p.theme || "default"),
          (n.value = p.soundEnabled !== void 0 ? p.soundEnabled : !0),
          (o.value = p.vibrationEnabled !== void 0 ? p.vibrationEnabled : !0),
          (i.value =
            p.centerToastEnabled !== void 0 ? p.centerToastEnabled : !0),
          (r.value =
            p.browserNotificationEnabled !== void 0
              ? p.browserNotificationEnabled
              : !0),
          (a.value = p.selectedAlarmSound || "default.mp3");
      }
    }
    function d(h) {
      Object.entries(h).forEach(([p, y]) => {
        p === "focusTime"
          ? (t.value = y)
          : p === "restTime"
          ? (e.value = y)
          : p === "theme"
          ? (s.value = y)
          : p === "soundEnabled"
          ? (n.value = y)
          : p === "vibrationEnabled"
          ? (o.value = y)
          : p === "centerToastEnabled"
          ? (i.value = y)
          : p === "browserNotificationEnabled"
          ? (r.value = y)
          : p === "selectedAlarmSound" && (a.value = y);
      }),
        c();
    }
    function f() {
      (t.value = 25),
        (e.value = 5),
        (s.value = "default"),
        (n.value = !0),
        (o.value = !0),
        (i.value = !0),
        (r.value = !0),
        (a.value = "default.mp3"),
        c();
    }
    return (
      u(),
      {
        focusTime: t,
        restTime: e,
        theme: s,
        soundEnabled: n,
        vibrationEnabled: o,
        centerToastEnabled: i,
        browserNotificationEnabled: r,
        selectedAlarmSound: a,
        updateSettings: d,
        clearAllUserData: f,
      }
    );
  }),
  on = Sn("user", () => {
    const t = B(""),
      e = B(""),
      s = B(""),
      n = B(""),
      o = B(""),
      i = B(0),
      r = B(null),
      a = B(!1),
      c = ie(() =>
        !s.value || !n.value || !o.value
          ? null
          : `${s.value}-${n.value}-${o.value}`
      );
    function u() {
      try {
        console.log("[UserStore] 开始保存用户信息");
        let b = t.value;
        b
          ? b.startsWith("blob:")
            ? (console.warn(
                "[UserStore] 警告: 头像仍在使用blob URL，将转换为空"
              ),
              (b = ""))
            : b.startsWith("data:image")
            ? console.log(
                "[UserStore] 头像格式正确(base64)，大小:",
                Math.round(b.length / 1024),
                "KB"
              )
            : console.warn(
                "[UserStore] 警告: 未知的头像格式:",
                b.substring(0, 20) + "..."
              )
          : console.log("[UserStore] 头像为空");
        const A = {
          avatar: b,
          nickname: e.value,
          faculty: s.value,
          major: n.value,
          className: o.value,
          points: i.value,
          isInitialized: a.value,
          currentWeekSetting: r.value,
        };
        localStorage.setItem("pomodoro-user", JSON.stringify(A)),
          console.log("[UserStore] 用户信息保存成功:", {
            hasAvatar: !!b,
            avatarType: b
              ? b.startsWith("data:image")
                ? "base64"
                : "other"
              : "none",
            nickname: e.value,
            isInitialized: a.value,
          });
      } catch (b) {
        console.error("保存用户信息到本地存储失败:", b);
      }
    }
    function d() {
      try {
        const b = localStorage.getItem("pomodoro-user");
        if ((console.log("[UserStore] 开始加载用户信息"), b)) {
          const A = JSON.parse(b);
          (t.value = A.avatar || ""),
            (e.value = A.nickname || ""),
            (s.value = A.faculty || ""),
            (n.value = A.major || ""),
            (o.value = A.className || ""),
            (i.value = A.points || 0),
            (a.value = A.isInitialized || !1),
            (r.value = A.currentWeekSetting || null),
            console.log("[UserStore] 加载用户信息成功:", {
              hasAvatar: !!A.avatar,
              avatarType: A.avatar
                ? A.avatar.startsWith("data:image")
                  ? "base64"
                  : "other"
                : "none",
              avatarLength: A.avatar ? A.avatar.length : 0,
              nickname: e.value,
              isInitialized: a.value,
            });
        } else console.log("[UserStore] 本地存储中没有找到用户信息");
      } catch (b) {
        console.error("从本地存储加载用户信息失败:", b);
      }
    }
    function f(b) {
      console.log("[UserStore] 开始更新用户信息", {
        hasAvatar: !!b.avatar,
        nickname: b.nickname,
        faculty: b.faculty,
        className: b.className,
      }),
        b.avatar !== void 0 &&
          (typeof b.avatar != "string"
            ? console.error("[UserStore] 头像数据类型错误:", typeof b.avatar)
            : b.avatar && !b.avatar.startsWith("data:image/")
            ? console.error(
                "[UserStore] 头像格式错误:",
                b.avatar.substring(0, 20)
              )
            : (console.log(
                "[UserStore] 头像数据有效，长度:",
                b.avatar ? b.avatar.length : 0
              ),
              (t.value = b.avatar))),
        b.nickname !== void 0 && (e.value = b.nickname),
        b.faculty !== void 0 && (s.value = b.faculty),
        b.major !== void 0 && (n.value = b.major),
        b.className !== void 0 && (o.value = b.className),
        b.isInitialized !== void 0 && (a.value = b.isInitialized),
        b.currentWeekSetting !== void 0 && (r.value = b.currentWeekSetting),
        u();
    }
    function h(b) {
      (i.value = b), u();
    }
    function p(b) {
      return (i.value += b), u(), i.value;
    }
    function y(b) {
      (r.value = b), u();
    }
    return (
      d(),
      {
        avatar: t,
        nickname: e,
        faculty: s,
        major: n,
        className: o,
        points: i,
        isInitialized: a,
        userClassInfo: c,
        currentWeekSetting: r,
        updateUserInfo: f,
        updatePoints: h,
        addPoints: p,
        updateCurrentWeek: y,
        loadUserInfo: d,
      }
    );
  });
/*!
 * vue-router v4.5.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */ const En = typeof document < "u";
function Ul(t) {
  return (
    typeof t == "object" ||
    "displayName" in t ||
    "props" in t ||
    "__vccOpts" in t
  );
}
function ef(t) {
  return (
    t.__esModule ||
    t[Symbol.toStringTag] === "Module" ||
    (t.default && Ul(t.default))
  );
}
const Te = Object.assign;
function Mo(t, e) {
  const s = {};
  for (const n in e) {
    const o = e[n];
    s[n] = Tt(o) ? o.map(t) : t(o);
  }
  return s;
}
const as = () => {},
  Tt = Array.isArray,
  jl = /#/g,
  tf = /&/g,
  nf = /\//g,
  sf = /=/g,
  of = /\?/g,
  Hl = /\+/g,
  rf = /%5B/g,
  af = /%5D/g,
  Fl = /%5E/g,
  lf = /%60/g,
  Vl = /%7B/g,
  cf = /%7C/g,
  $l = /%7D/g,
  uf = /%20/g;
function xi(t) {
  return encodeURI("" + t)
    .replace(cf, "|")
    .replace(rf, "[")
    .replace(af, "]");
}
function df(t) {
  return xi(t).replace(Vl, "{").replace($l, "}").replace(Fl, "^");
}
function Yo(t) {
  return xi(t)
    .replace(Hl, "%2B")
    .replace(uf, "+")
    .replace(jl, "%23")
    .replace(tf, "%26")
    .replace(lf, "`")
    .replace(Vl, "{")
    .replace($l, "}")
    .replace(Fl, "^");
}
function ff(t) {
  return Yo(t).replace(sf, "%3D");
}
function hf(t) {
  return xi(t).replace(jl, "%23").replace(of, "%3F");
}
function pf(t) {
  return t == null ? "" : hf(t).replace(nf, "%2F");
}
function ys(t) {
  try {
    return decodeURIComponent("" + t);
  } catch {}
  return "" + t;
}
const mf = /\/$/,
  gf = (t) => t.replace(mf, "");
function Eo(t, e, s = "/") {
  let n,
    o = {},
    i = "",
    r = "";
  const a = e.indexOf("#");
  let c = e.indexOf("?");
  return (
    a < c && a >= 0 && (c = -1),
    c > -1 &&
      ((n = e.slice(0, c)),
      (i = e.slice(c + 1, a > -1 ? a : e.length)),
      (o = t(i))),
    a > -1 && ((n = n || e.slice(0, a)), (r = e.slice(a, e.length))),
    (n = wf(n ?? e, s)),
    { fullPath: n + (i && "?") + i + r, path: n, query: o, hash: ys(r) }
  );
}
function vf(t, e) {
  const s = e.query ? t(e.query) : "";
  return e.path + (s && "?") + s + (e.hash || "");
}
function Er(t, e) {
  return !e || !t.toLowerCase().startsWith(e.toLowerCase())
    ? t
    : t.slice(e.length) || "/";
}
function yf(t, e, s) {
  const n = e.matched.length - 1,
    o = s.matched.length - 1;
  return (
    n > -1 &&
    n === o &&
    Hn(e.matched[n], s.matched[o]) &&
    zl(e.params, s.params) &&
    t(e.query) === t(s.query) &&
    e.hash === s.hash
  );
}
function Hn(t, e) {
  return (t.aliasOf || t) === (e.aliasOf || e);
}
function zl(t, e) {
  if (Object.keys(t).length !== Object.keys(e).length) return !1;
  for (const s in t) if (!bf(t[s], e[s])) return !1;
  return !0;
}
function bf(t, e) {
  return Tt(t) ? Ar(t, e) : Tt(e) ? Ar(e, t) : t === e;
}
function Ar(t, e) {
  return Tt(e)
    ? t.length === e.length && t.every((s, n) => s === e[n])
    : t.length === 1 && t[0] === e;
}
function wf(t, e) {
  if (t.startsWith("/")) return t;
  if (!t) return e;
  const s = e.split("/"),
    n = t.split("/"),
    o = n[n.length - 1];
  (o === ".." || o === ".") && n.push("");
  let i = s.length - 1,
    r,
    a;
  for (r = 0; r < n.length; r++)
    if (((a = n[r]), a !== "."))
      if (a === "..") i > 1 && i--;
      else break;
  return s.slice(0, i).join("/") + "/" + n.slice(r).join("/");
}
const Ht = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0,
};
var bs;
(function (t) {
  (t.pop = "pop"), (t.push = "push");
})(bs || (bs = {}));
var ls;
(function (t) {
  (t.back = "back"), (t.forward = "forward"), (t.unknown = "");
})(ls || (ls = {}));
function kf(t) {
  if (!t)
    if (En) {
      const e = document.querySelector("base");
      (t = (e && e.getAttribute("href")) || "/"),
        (t = t.replace(/^\w+:\/\/[^\/]+/, ""));
    } else t = "/";
  return t[0] !== "/" && t[0] !== "#" && (t = "/" + t), gf(t);
}
const Sf = /^[^#]+#/;
function Tf(t, e) {
  return t.replace(Sf, "#") + e;
}
function Cf(t, e) {
  const s = document.documentElement.getBoundingClientRect(),
    n = t.getBoundingClientRect();
  return {
    behavior: e.behavior,
    left: n.left - s.left - (e.left || 0),
    top: n.top - s.top - (e.top || 0),
  };
}
const co = () => ({ left: window.scrollX, top: window.scrollY });
function _f(t) {
  let e;
  if ("el" in t) {
    const s = t.el,
      n = typeof s == "string" && s.startsWith("#"),
      o =
        typeof s == "string"
          ? n
            ? document.getElementById(s.slice(1))
            : document.querySelector(s)
          : s;
    if (!o) return;
    e = Cf(o, t);
  } else e = t;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(e)
    : window.scrollTo(
        e.left != null ? e.left : window.scrollX,
        e.top != null ? e.top : window.scrollY
      );
}
function Ir(t, e) {
  return (history.state ? history.state.position - e : -1) + t;
}
const qo = new Map();
function Df(t, e) {
  qo.set(t, e);
}
function xf(t) {
  const e = qo.get(t);
  return qo.delete(t), e;
}
let Mf = () => location.protocol + "//" + location.host;
function Kl(t, e) {
  const { pathname: s, search: n, hash: o } = e,
    i = t.indexOf("#");
  if (i > -1) {
    let a = o.includes(t.slice(i)) ? t.slice(i).length : 1,
      c = o.slice(a);
    return c[0] !== "/" && (c = "/" + c), Er(c, "");
  }
  return Er(s, t) + n + o;
}
function Ef(t, e, s, n) {
  let o = [],
    i = [],
    r = null;
  const a = ({ state: h }) => {
    const p = Kl(t, location),
      y = s.value,
      b = e.value;
    let A = 0;
    if (h) {
      if (((s.value = p), (e.value = h), r && r === y)) {
        r = null;
        return;
      }
      A = b ? h.position - b.position : 0;
    } else n(p);
    o.forEach((L) => {
      L(s.value, y, {
        delta: A,
        type: bs.pop,
        direction: A ? (A > 0 ? ls.forward : ls.back) : ls.unknown,
      });
    });
  };
  function c() {
    r = s.value;
  }
  function u(h) {
    o.push(h);
    const p = () => {
      const y = o.indexOf(h);
      y > -1 && o.splice(y, 1);
    };
    return i.push(p), p;
  }
  function d() {
    const { history: h } = window;
    h.state && h.replaceState(Te({}, h.state, { scroll: co() }), "");
  }
  function f() {
    for (const h of i) h();
    (i = []),
      window.removeEventListener("popstate", a),
      window.removeEventListener("beforeunload", d);
  }
  return (
    window.addEventListener("popstate", a),
    window.addEventListener("beforeunload", d, { passive: !0 }),
    { pauseListeners: c, listen: u, destroy: f }
  );
}
function Rr(t, e, s, n = !1, o = !1) {
  return {
    back: t,
    current: e,
    forward: s,
    replaced: n,
    position: window.history.length,
    scroll: o ? co() : null,
  };
}
function Af(t) {
  const { history: e, location: s } = window,
    n = { value: Kl(t, s) },
    o = { value: e.state };
  o.value ||
    i(
      n.value,
      {
        back: null,
        current: n.value,
        forward: null,
        position: e.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function i(c, u, d) {
    const f = t.indexOf("#"),
      h =
        f > -1
          ? (s.host && document.querySelector("base") ? t : t.slice(f)) + c
          : Mf() + t + c;
    try {
      e[d ? "replaceState" : "pushState"](u, "", h), (o.value = u);
    } catch (p) {
      console.error(p), s[d ? "replace" : "assign"](h);
    }
  }
  function r(c, u) {
    const d = Te({}, e.state, Rr(o.value.back, c, o.value.forward, !0), u, {
      position: o.value.position,
    });
    i(c, d, !0), (n.value = c);
  }
  function a(c, u) {
    const d = Te({}, o.value, e.state, { forward: c, scroll: co() });
    i(d.current, d, !0);
    const f = Te({}, Rr(n.value, c, null), { position: d.position + 1 }, u);
    i(c, f, !1), (n.value = c);
  }
  return { location: n, state: o, push: a, replace: r };
}
function If(t) {
  t = kf(t);
  const e = Af(t),
    s = Ef(t, e.state, e.location, e.replace);
  function n(i, r = !0) {
    r || s.pauseListeners(), history.go(i);
  }
  const o = Te(
    { location: "", base: t, go: n, createHref: Tf.bind(null, t) },
    e,
    s
  );
  return (
    Object.defineProperty(o, "location", {
      enumerable: !0,
      get: () => e.location.value,
    }),
    Object.defineProperty(o, "state", {
      enumerable: !0,
      get: () => e.state.value,
    }),
    o
  );
}
function Rf(t) {
  return typeof t == "string" || (t && typeof t == "object");
}
function Gl(t) {
  return typeof t == "string" || typeof t == "symbol";
}
const Yl = Symbol("");
var Or;
(function (t) {
  (t[(t.aborted = 4)] = "aborted"),
    (t[(t.cancelled = 8)] = "cancelled"),
    (t[(t.duplicated = 16)] = "duplicated");
})(Or || (Or = {}));
function Fn(t, e) {
  return Te(new Error(), { type: t, [Yl]: !0 }, e);
}
function Ot(t, e) {
  return t instanceof Error && Yl in t && (e == null || !!(t.type & e));
}
const Pr = "[^/]+?",
  Of = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Pf = /[.+*?^${}()[\]/\\]/g;
function Nf(t, e) {
  const s = Te({}, Of, e),
    n = [];
  let o = s.start ? "^" : "";
  const i = [];
  for (const u of t) {
    const d = u.length ? [] : [90];
    s.strict && !u.length && (o += "/");
    for (let f = 0; f < u.length; f++) {
      const h = u[f];
      let p = 40 + (s.sensitive ? 0.25 : 0);
      if (h.type === 0)
        f || (o += "/"), (o += h.value.replace(Pf, "\\$&")), (p += 40);
      else if (h.type === 1) {
        const { value: y, repeatable: b, optional: A, regexp: L } = h;
        i.push({ name: y, repeatable: b, optional: A });
        const C = L || Pr;
        if (C !== Pr) {
          p += 10;
          try {
            new RegExp(`(${C})`);
          } catch (v) {
            throw new Error(
              `Invalid custom RegExp for param "${y}" (${C}): ` + v.message
            );
          }
        }
        let _ = b ? `((?:${C})(?:/(?:${C}))*)` : `(${C})`;
        f || (_ = A && u.length < 2 ? `(?:/${_})` : "/" + _),
          A && (_ += "?"),
          (o += _),
          (p += 20),
          A && (p += -8),
          b && (p += -20),
          C === ".*" && (p += -50);
      }
      d.push(p);
    }
    n.push(d);
  }
  if (s.strict && s.end) {
    const u = n.length - 1;
    n[u][n[u].length - 1] += 0.7000000000000001;
  }
  s.strict || (o += "/?"),
    s.end ? (o += "$") : s.strict && !o.endsWith("/") && (o += "(?:/|$)");
  const r = new RegExp(o, s.sensitive ? "" : "i");
  function a(u) {
    const d = u.match(r),
      f = {};
    if (!d) return null;
    for (let h = 1; h < d.length; h++) {
      const p = d[h] || "",
        y = i[h - 1];
      f[y.name] = p && y.repeatable ? p.split("/") : p;
    }
    return f;
  }
  function c(u) {
    let d = "",
      f = !1;
    for (const h of t) {
      (!f || !d.endsWith("/")) && (d += "/"), (f = !1);
      for (const p of h)
        if (p.type === 0) d += p.value;
        else if (p.type === 1) {
          const { value: y, repeatable: b, optional: A } = p,
            L = y in u ? u[y] : "";
          if (Tt(L) && !b)
            throw new Error(
              `Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`
            );
          const C = Tt(L) ? L.join("/") : L;
          if (!C)
            if (A)
              h.length < 2 &&
                (d.endsWith("/") ? (d = d.slice(0, -1)) : (f = !0));
            else throw new Error(`Missing required param "${y}"`);
          d += C;
        }
    }
    return d || "/";
  }
  return { re: r, score: n, keys: i, parse: a, stringify: c };
}
function Lf(t, e) {
  let s = 0;
  for (; s < t.length && s < e.length; ) {
    const n = e[s] - t[s];
    if (n) return n;
    s++;
  }
  return t.length < e.length
    ? t.length === 1 && t[0] === 80
      ? -1
      : 1
    : t.length > e.length
    ? e.length === 1 && e[0] === 80
      ? 1
      : -1
    : 0;
}
function ql(t, e) {
  let s = 0;
  const n = t.score,
    o = e.score;
  for (; s < n.length && s < o.length; ) {
    const i = Lf(n[s], o[s]);
    if (i) return i;
    s++;
  }
  if (Math.abs(o.length - n.length) === 1) {
    if (Nr(n)) return 1;
    if (Nr(o)) return -1;
  }
  return o.length - n.length;
}
function Nr(t) {
  const e = t[t.length - 1];
  return t.length > 0 && e[e.length - 1] < 0;
}
const Bf = { type: 0, value: "" },
  Wf = /[a-zA-Z0-9_]/;
function Uf(t) {
  if (!t) return [[]];
  if (t === "/") return [[Bf]];
  if (!t.startsWith("/")) throw new Error(`Invalid path "${t}"`);
  function e(p) {
    throw new Error(`ERR (${s})/"${u}": ${p}`);
  }
  let s = 0,
    n = s;
  const o = [];
  let i;
  function r() {
    i && o.push(i), (i = []);
  }
  let a = 0,
    c,
    u = "",
    d = "";
  function f() {
    u &&
      (s === 0
        ? i.push({ type: 0, value: u })
        : s === 1 || s === 2 || s === 3
        ? (i.length > 1 &&
            (c === "*" || c === "+") &&
            e(
              `A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`
            ),
          i.push({
            type: 1,
            value: u,
            regexp: d,
            repeatable: c === "*" || c === "+",
            optional: c === "*" || c === "?",
          }))
        : e("Invalid state to consume buffer"),
      (u = ""));
  }
  function h() {
    u += c;
  }
  for (; a < t.length; ) {
    if (((c = t[a++]), c === "\\" && s !== 2)) {
      (n = s), (s = 4);
      continue;
    }
    switch (s) {
      case 0:
        c === "/" ? (u && f(), r()) : c === ":" ? (f(), (s = 1)) : h();
        break;
      case 4:
        h(), (s = n);
        break;
      case 1:
        c === "("
          ? (s = 2)
          : Wf.test(c)
          ? h()
          : (f(), (s = 0), c !== "*" && c !== "?" && c !== "+" && a--);
        break;
      case 2:
        c === ")"
          ? d[d.length - 1] == "\\"
            ? (d = d.slice(0, -1) + c)
            : (s = 3)
          : (d += c);
        break;
      case 3:
        f(), (s = 0), c !== "*" && c !== "?" && c !== "+" && a--, (d = "");
        break;
      default:
        e("Unknown state");
        break;
    }
  }
  return s === 2 && e(`Unfinished custom RegExp for param "${u}"`), f(), r(), o;
}
function jf(t, e, s) {
  const n = Nf(Uf(t.path), s),
    o = Te(n, { record: t, parent: e, children: [], alias: [] });
  return e && !o.record.aliasOf == !e.record.aliasOf && e.children.push(o), o;
}
function Hf(t, e) {
  const s = [],
    n = new Map();
  e = Ur({ strict: !1, end: !0, sensitive: !1 }, e);
  function o(f) {
    return n.get(f);
  }
  function i(f, h, p) {
    const y = !p,
      b = Br(f);
    b.aliasOf = p && p.record;
    const A = Ur(e, f),
      L = [b];
    if ("alias" in f) {
      const v = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const D of v)
        L.push(
          Br(
            Te({}, b, {
              components: p ? p.record.components : b.components,
              path: D,
              aliasOf: p ? p.record : b,
            })
          )
        );
    }
    let C, _;
    for (const v of L) {
      const { path: D } = v;
      if (h && D[0] !== "/") {
        const w = h.record.path,
          R = w[w.length - 1] === "/" ? "" : "/";
        v.path = h.record.path + (D && R + D);
      }
      if (
        ((C = jf(v, h, A)),
        p
          ? p.alias.push(C)
          : ((_ = _ || C),
            _ !== C && _.alias.push(C),
            y && f.name && !Wr(C) && r(f.name)),
        Xl(C) && c(C),
        b.children)
      ) {
        const w = b.children;
        for (let R = 0; R < w.length; R++) i(w[R], C, p && p.children[R]);
      }
      p = p || C;
    }
    return _
      ? () => {
          r(_);
        }
      : as;
  }
  function r(f) {
    if (Gl(f)) {
      const h = n.get(f);
      h &&
        (n.delete(f),
        s.splice(s.indexOf(h), 1),
        h.children.forEach(r),
        h.alias.forEach(r));
    } else {
      const h = s.indexOf(f);
      h > -1 &&
        (s.splice(h, 1),
        f.record.name && n.delete(f.record.name),
        f.children.forEach(r),
        f.alias.forEach(r));
    }
  }
  function a() {
    return s;
  }
  function c(f) {
    const h = $f(f, s);
    s.splice(h, 0, f), f.record.name && !Wr(f) && n.set(f.record.name, f);
  }
  function u(f, h) {
    let p,
      y = {},
      b,
      A;
    if ("name" in f && f.name) {
      if (((p = n.get(f.name)), !p)) throw Fn(1, { location: f });
      (A = p.record.name),
        (y = Te(
          Lr(
            h.params,
            p.keys
              .filter((_) => !_.optional)
              .concat(p.parent ? p.parent.keys.filter((_) => _.optional) : [])
              .map((_) => _.name)
          ),
          f.params &&
            Lr(
              f.params,
              p.keys.map((_) => _.name)
            )
        )),
        (b = p.stringify(y));
    } else if (f.path != null)
      (b = f.path),
        (p = s.find((_) => _.re.test(b))),
        p && ((y = p.parse(b)), (A = p.record.name));
    else {
      if (((p = h.name ? n.get(h.name) : s.find((_) => _.re.test(h.path))), !p))
        throw Fn(1, { location: f, currentLocation: h });
      (A = p.record.name),
        (y = Te({}, h.params, f.params)),
        (b = p.stringify(y));
    }
    const L = [];
    let C = p;
    for (; C; ) L.unshift(C.record), (C = C.parent);
    return { name: A, path: b, params: y, matched: L, meta: Vf(L) };
  }
  t.forEach((f) => i(f));
  function d() {
    (s.length = 0), n.clear();
  }
  return {
    addRoute: i,
    resolve: u,
    removeRoute: r,
    clearRoutes: d,
    getRoutes: a,
    getRecordMatcher: o,
  };
}
function Lr(t, e) {
  const s = {};
  for (const n of e) n in t && (s[n] = t[n]);
  return s;
}
function Br(t) {
  const e = {
    path: t.path,
    redirect: t.redirect,
    name: t.name,
    meta: t.meta || {},
    aliasOf: t.aliasOf,
    beforeEnter: t.beforeEnter,
    props: Ff(t),
    children: t.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in t
        ? t.components || null
        : t.component && { default: t.component },
  };
  return Object.defineProperty(e, "mods", { value: {} }), e;
}
function Ff(t) {
  const e = {},
    s = t.props || !1;
  if ("component" in t) e.default = s;
  else for (const n in t.components) e[n] = typeof s == "object" ? s[n] : s;
  return e;
}
function Wr(t) {
  for (; t; ) {
    if (t.record.aliasOf) return !0;
    t = t.parent;
  }
  return !1;
}
function Vf(t) {
  return t.reduce((e, s) => Te(e, s.meta), {});
}
function Ur(t, e) {
  const s = {};
  for (const n in t) s[n] = n in e ? e[n] : t[n];
  return s;
}
function $f(t, e) {
  let s = 0,
    n = e.length;
  for (; s !== n; ) {
    const i = (s + n) >> 1;
    ql(t, e[i]) < 0 ? (n = i) : (s = i + 1);
  }
  const o = zf(t);
  return o && (n = e.lastIndexOf(o, n - 1)), n;
}
function zf(t) {
  let e = t;
  for (; (e = e.parent); ) if (Xl(e) && ql(t, e) === 0) return e;
}
function Xl({ record: t }) {
  return !!(
    t.name ||
    (t.components && Object.keys(t.components).length) ||
    t.redirect
  );
}
function Kf(t) {
  const e = {};
  if (t === "" || t === "?") return e;
  const n = (t[0] === "?" ? t.slice(1) : t).split("&");
  for (let o = 0; o < n.length; ++o) {
    const i = n[o].replace(Hl, " "),
      r = i.indexOf("="),
      a = ys(r < 0 ? i : i.slice(0, r)),
      c = r < 0 ? null : ys(i.slice(r + 1));
    if (a in e) {
      let u = e[a];
      Tt(u) || (u = e[a] = [u]), u.push(c);
    } else e[a] = c;
  }
  return e;
}
function jr(t) {
  let e = "";
  for (let s in t) {
    const n = t[s];
    if (((s = ff(s)), n == null)) {
      n !== void 0 && (e += (e.length ? "&" : "") + s);
      continue;
    }
    (Tt(n) ? n.map((i) => i && Yo(i)) : [n && Yo(n)]).forEach((i) => {
      i !== void 0 &&
        ((e += (e.length ? "&" : "") + s), i != null && (e += "=" + i));
    });
  }
  return e;
}
function Gf(t) {
  const e = {};
  for (const s in t) {
    const n = t[s];
    n !== void 0 &&
      (e[s] = Tt(n)
        ? n.map((o) => (o == null ? null : "" + o))
        : n == null
        ? n
        : "" + n);
  }
  return e;
}
const Yf = Symbol(""),
  Hr = Symbol(""),
  uo = Symbol(""),
  Jl = Symbol(""),
  Xo = Symbol("");
function Kn() {
  let t = [];
  function e(n) {
    return (
      t.push(n),
      () => {
        const o = t.indexOf(n);
        o > -1 && t.splice(o, 1);
      }
    );
  }
  function s() {
    t = [];
  }
  return { add: e, list: () => t.slice(), reset: s };
}
function Yt(t, e, s, n, o, i = (r) => r()) {
  const r = n && (n.enterCallbacks[o] = n.enterCallbacks[o] || []);
  return () =>
    new Promise((a, c) => {
      const u = (h) => {
          h === !1
            ? c(Fn(4, { from: s, to: e }))
            : h instanceof Error
            ? c(h)
            : Rf(h)
            ? c(Fn(2, { from: e, to: h }))
            : (r &&
                n.enterCallbacks[o] === r &&
                typeof h == "function" &&
                r.push(h),
              a());
        },
        d = i(() => t.call(n && n.instances[o], e, s, u));
      let f = Promise.resolve(d);
      t.length < 3 && (f = f.then(u)), f.catch((h) => c(h));
    });
}
function Ao(t, e, s, n, o = (i) => i()) {
  const i = [];
  for (const r of t)
    for (const a in r.components) {
      let c = r.components[a];
      if (!(e !== "beforeRouteEnter" && !r.instances[a]))
        if (Ul(c)) {
          const d = (c.__vccOpts || c)[e];
          d && i.push(Yt(d, s, n, r, a, o));
        } else {
          let u = c();
          i.push(() =>
            u.then((d) => {
              if (!d)
                throw new Error(
                  `Couldn't resolve component "${a}" at "${r.path}"`
                );
              const f = ef(d) ? d.default : d;
              (r.mods[a] = d), (r.components[a] = f);
              const p = (f.__vccOpts || f)[e];
              return p && Yt(p, s, n, r, a, o)();
            })
          );
        }
    }
  return i;
}
function Fr(t) {
  const e = wt(uo),
    s = wt(Jl),
    n = ie(() => {
      const c = Pn(t.to);
      return e.resolve(c);
    }),
    o = ie(() => {
      const { matched: c } = n.value,
        { length: u } = c,
        d = c[u - 1],
        f = s.matched;
      if (!d || !f.length) return -1;
      const h = f.findIndex(Hn.bind(null, d));
      if (h > -1) return h;
      const p = Vr(c[u - 2]);
      return u > 1 && Vr(d) === p && f[f.length - 1].path !== p
        ? f.findIndex(Hn.bind(null, c[u - 2]))
        : h;
    }),
    i = ie(() => o.value > -1 && Zf(s.params, n.value.params)),
    r = ie(
      () =>
        o.value > -1 &&
        o.value === s.matched.length - 1 &&
        zl(s.params, n.value.params)
    );
  function a(c = {}) {
    if (Qf(c)) {
      const u = e[Pn(t.replace) ? "replace" : "push"](Pn(t.to)).catch(as);
      return (
        t.viewTransition &&
          typeof document < "u" &&
          "startViewTransition" in document &&
          document.startViewTransition(() => u),
        u
      );
    }
    return Promise.resolve();
  }
  return {
    route: n,
    href: ie(() => n.value.href),
    isActive: i,
    isExactActive: r,
    navigate: a,
  };
}
function qf(t) {
  return t.length === 1 ? t[0] : t;
}
const Xf = Ja({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
      viewTransition: Boolean,
    },
    useLink: Fr,
    setup(t, { slots: e }) {
      const s = Ts(Fr(t)),
        { options: n } = wt(uo),
        o = ie(() => ({
          [$r(t.activeClass, n.linkActiveClass, "router-link-active")]:
            s.isActive,
          [$r(
            t.exactActiveClass,
            n.linkExactActiveClass,
            "router-link-exact-active"
          )]: s.isExactActive,
        }));
      return () => {
        const i = e.default && qf(e.default(s));
        return t.custom
          ? i
          : Di(
              "a",
              {
                "aria-current": s.isExactActive ? t.ariaCurrentValue : null,
                href: s.href,
                onClick: s.navigate,
                class: o.value,
              },
              i
            );
      };
    },
  }),
  Jf = Xf;
function Qf(t) {
  if (
    !(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) &&
    !t.defaultPrevented &&
    !(t.button !== void 0 && t.button !== 0)
  ) {
    if (t.currentTarget && t.currentTarget.getAttribute) {
      const e = t.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(e)) return;
    }
    return t.preventDefault && t.preventDefault(), !0;
  }
}
function Zf(t, e) {
  for (const s in e) {
    const n = e[s],
      o = t[s];
    if (typeof n == "string") {
      if (n !== o) return !1;
    } else if (!Tt(o) || o.length !== n.length || n.some((i, r) => i !== o[r]))
      return !1;
  }
  return !0;
}
function Vr(t) {
  return t ? (t.aliasOf ? t.aliasOf.path : t.path) : "";
}
const $r = (t, e, s) => t ?? e ?? s,
  eh = Ja({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(t, { attrs: e, slots: s }) {
      const n = wt(Xo),
        o = ie(() => t.route || n.value),
        i = wt(Hr, 0),
        r = ie(() => {
          let u = Pn(i);
          const { matched: d } = o.value;
          let f;
          for (; (f = d[u]) && !f.components; ) u++;
          return u;
        }),
        a = ie(() => o.value.matched[r.value]);
      Ls(
        Hr,
        ie(() => r.value + 1)
      ),
        Ls(Yf, a),
        Ls(Xo, o);
      const c = B();
      return (
        Zt(
          () => [c.value, a.value, t.name],
          ([u, d, f], [h, p, y]) => {
            d &&
              ((d.instances[f] = u),
              p &&
                p !== d &&
                u &&
                u === h &&
                (d.leaveGuards.size || (d.leaveGuards = p.leaveGuards),
                d.updateGuards.size || (d.updateGuards = p.updateGuards))),
              u &&
                d &&
                (!p || !Hn(d, p) || !h) &&
                (d.enterCallbacks[f] || []).forEach((b) => b(u));
          },
          { flush: "post" }
        ),
        () => {
          const u = o.value,
            d = t.name,
            f = a.value,
            h = f && f.components[d];
          if (!h) return zr(s.default, { Component: h, route: u });
          const p = f.props[d],
            y = p
              ? p === !0
                ? u.params
                : typeof p == "function"
                ? p(u)
                : p
              : null,
            A = Di(
              h,
              Te({}, y, e, {
                onVnodeUnmounted: (L) => {
                  L.component.isUnmounted && (f.instances[d] = null);
                },
                ref: c,
              })
            );
          return zr(s.default, { Component: A, route: u }) || A;
        }
      );
    },
  });
function zr(t, e) {
  if (!t) return null;
  const s = t(e);
  return s.length === 1 ? s[0] : s;
}
const th = eh;
function nh(t) {
  const e = Hf(t.routes, t),
    s = t.parseQuery || Kf,
    n = t.stringifyQuery || jr,
    o = t.history,
    i = Kn(),
    r = Kn(),
    a = Kn(),
    c = qc(Ht);
  let u = Ht;
  En &&
    t.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const d = Mo.bind(null, (U) => "" + U),
    f = Mo.bind(null, pf),
    h = Mo.bind(null, ys);
  function p(U, Z) {
    let O, V;
    return (
      Gl(U) ? ((O = e.getRecordMatcher(U)), (V = Z)) : (V = U), e.addRoute(V, O)
    );
  }
  function y(U) {
    const Z = e.getRecordMatcher(U);
    Z && e.removeRoute(Z);
  }
  function b() {
    return e.getRoutes().map((U) => U.record);
  }
  function A(U) {
    return !!e.getRecordMatcher(U);
  }
  function L(U, Z) {
    if (((Z = Te({}, Z || c.value)), typeof U == "string")) {
      const T = Eo(s, U, Z.path),
        N = e.resolve({ path: T.path }, Z),
        j = o.createHref(T.fullPath);
      return Te(T, N, {
        params: h(N.params),
        hash: ys(T.hash),
        redirectedFrom: void 0,
        href: j,
      });
    }
    let O;
    if (U.path != null) O = Te({}, U, { path: Eo(s, U.path, Z.path).path });
    else {
      const T = Te({}, U.params);
      for (const N in T) T[N] == null && delete T[N];
      (O = Te({}, U, { params: f(T) })), (Z.params = f(Z.params));
    }
    const V = e.resolve(O, Z),
      le = U.hash || "";
    V.params = d(h(V.params));
    const g = vf(n, Te({}, U, { hash: df(le), path: V.path })),
      m = o.createHref(g);
    return Te(
      { fullPath: g, hash: le, query: n === jr ? Gf(U.query) : U.query || {} },
      V,
      { redirectedFrom: void 0, href: m }
    );
  }
  function C(U) {
    return typeof U == "string" ? Eo(s, U, c.value.path) : Te({}, U);
  }
  function _(U, Z) {
    if (u !== U) return Fn(8, { from: Z, to: U });
  }
  function v(U) {
    return R(U);
  }
  function D(U) {
    return v(Te(C(U), { replace: !0 }));
  }
  function w(U) {
    const Z = U.matched[U.matched.length - 1];
    if (Z && Z.redirect) {
      const { redirect: O } = Z;
      let V = typeof O == "function" ? O(U) : O;
      return (
        typeof V == "string" &&
          ((V = V.includes("?") || V.includes("#") ? (V = C(V)) : { path: V }),
          (V.params = {})),
        Te(
          {
            query: U.query,
            hash: U.hash,
            params: V.path != null ? {} : U.params,
          },
          V
        )
      );
    }
  }
  function R(U, Z) {
    const O = (u = L(U)),
      V = c.value,
      le = U.state,
      g = U.force,
      m = U.replace === !0,
      T = w(O);
    if (T)
      return R(
        Te(C(T), {
          state: typeof T == "object" ? Te({}, le, T.state) : le,
          force: g,
          replace: m,
        }),
        Z || O
      );
    const N = O;
    N.redirectedFrom = Z;
    let j;
    return (
      !g && yf(n, V, O) && ((j = Fn(16, { to: N, from: V })), me(V, V, !0, !1)),
      (j ? Promise.resolve(j) : F(N, V))
        .catch((W) => (Ot(W) ? (Ot(W, 2) ? W : Re(W)) : ne(W, N, V)))
        .then((W) => {
          if (W) {
            if (Ot(W, 2))
              return R(
                Te({ replace: m }, C(W.to), {
                  state: typeof W.to == "object" ? Te({}, le, W.to.state) : le,
                  force: g,
                }),
                Z || N
              );
          } else W = I(N, V, !0, m, le);
          return K(N, V, W), W;
        })
    );
  }
  function S(U, Z) {
    const O = _(U, Z);
    return O ? Promise.reject(O) : Promise.resolve();
  }
  function E(U) {
    const Z = ce.values().next().value;
    return Z && typeof Z.runWithContext == "function"
      ? Z.runWithContext(U)
      : U();
  }
  function F(U, Z) {
    let O;
    const [V, le, g] = sh(U, Z);
    O = Ao(V.reverse(), "beforeRouteLeave", U, Z);
    for (const T of V)
      T.leaveGuards.forEach((N) => {
        O.push(Yt(N, U, Z));
      });
    const m = S.bind(null, U, Z);
    return (
      O.push(m),
      be(O)
        .then(() => {
          O = [];
          for (const T of i.list()) O.push(Yt(T, U, Z));
          return O.push(m), be(O);
        })
        .then(() => {
          O = Ao(le, "beforeRouteUpdate", U, Z);
          for (const T of le)
            T.updateGuards.forEach((N) => {
              O.push(Yt(N, U, Z));
            });
          return O.push(m), be(O);
        })
        .then(() => {
          O = [];
          for (const T of g)
            if (T.beforeEnter)
              if (Tt(T.beforeEnter))
                for (const N of T.beforeEnter) O.push(Yt(N, U, Z));
              else O.push(Yt(T.beforeEnter, U, Z));
          return O.push(m), be(O);
        })
        .then(
          () => (
            U.matched.forEach((T) => (T.enterCallbacks = {})),
            (O = Ao(g, "beforeRouteEnter", U, Z, E)),
            O.push(m),
            be(O)
          )
        )
        .then(() => {
          O = [];
          for (const T of r.list()) O.push(Yt(T, U, Z));
          return O.push(m), be(O);
        })
        .catch((T) => (Ot(T, 8) ? T : Promise.reject(T)))
    );
  }
  function K(U, Z, O) {
    a.list().forEach((V) => E(() => V(U, Z, O)));
  }
  function I(U, Z, O, V, le) {
    const g = _(U, Z);
    if (g) return g;
    const m = Z === Ht,
      T = En ? history.state : {};
    O &&
      (V || m
        ? o.replace(U.fullPath, Te({ scroll: m && T && T.scroll }, le))
        : o.push(U.fullPath, le)),
      (c.value = U),
      me(U, Z, O, m),
      Re();
  }
  let Y;
  function G() {
    Y ||
      (Y = o.listen((U, Z, O) => {
        if (!De.listening) return;
        const V = L(U),
          le = w(V);
        if (le) {
          R(Te(le, { replace: !0, force: !0 }), V).catch(as);
          return;
        }
        u = V;
        const g = c.value;
        En && Df(Ir(g.fullPath, O.delta), co()),
          F(V, g)
            .catch((m) =>
              Ot(m, 12)
                ? m
                : Ot(m, 2)
                ? (R(Te(C(m.to), { force: !0 }), V)
                    .then((T) => {
                      Ot(T, 20) &&
                        !O.delta &&
                        O.type === bs.pop &&
                        o.go(-1, !1);
                    })
                    .catch(as),
                  Promise.reject())
                : (O.delta && o.go(-O.delta, !1), ne(m, V, g))
            )
            .then((m) => {
              (m = m || I(V, g, !1)),
                m &&
                  (O.delta && !Ot(m, 8)
                    ? o.go(-O.delta, !1)
                    : O.type === bs.pop && Ot(m, 20) && o.go(-1, !1)),
                K(V, g, m);
            })
            .catch(as);
      }));
  }
  let H = Kn(),
    te = Kn(),
    X;
  function ne(U, Z, O) {
    Re(U);
    const V = te.list();
    return (
      V.length ? V.forEach((le) => le(U, Z, O)) : console.error(U),
      Promise.reject(U)
    );
  }
  function ue() {
    return X && c.value !== Ht
      ? Promise.resolve()
      : new Promise((U, Z) => {
          H.add([U, Z]);
        });
  }
  function Re(U) {
    return (
      X ||
        ((X = !U),
        G(),
        H.list().forEach(([Z, O]) => (U ? O(U) : Z())),
        H.reset()),
      U
    );
  }
  function me(U, Z, O, V) {
    const { scrollBehavior: le } = t;
    if (!En || !le) return Promise.resolve();
    const g =
      (!O && xf(Ir(U.fullPath, 0))) ||
      ((V || !O) && history.state && history.state.scroll) ||
      null;
    return dt()
      .then(() => le(U, Z, g))
      .then((m) => m && _f(m))
      .catch((m) => ne(m, U, Z));
  }
  const ke = (U) => o.go(U);
  let We;
  const ce = new Set(),
    De = {
      currentRoute: c,
      listening: !0,
      addRoute: p,
      removeRoute: y,
      clearRoutes: e.clearRoutes,
      hasRoute: A,
      getRoutes: b,
      resolve: L,
      options: t,
      push: v,
      replace: D,
      go: ke,
      back: () => ke(-1),
      forward: () => ke(1),
      beforeEach: i.add,
      beforeResolve: r.add,
      afterEach: a.add,
      onError: te.add,
      isReady: ue,
      install(U) {
        const Z = this;
        U.component("RouterLink", Jf),
          U.component("RouterView", th),
          (U.config.globalProperties.$router = Z),
          Object.defineProperty(U.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => Pn(c),
          }),
          En &&
            !We &&
            c.value === Ht &&
            ((We = !0), v(o.location).catch((le) => {}));
        const O = {};
        for (const le in Ht)
          Object.defineProperty(O, le, {
            get: () => c.value[le],
            enumerable: !0,
          });
        U.provide(uo, Z), U.provide(Jl, Oa(O)), U.provide(Xo, c);
        const V = U.unmount;
        ce.add(U),
          (U.unmount = function () {
            ce.delete(U),
              ce.size < 1 &&
                ((u = Ht),
                Y && Y(),
                (Y = null),
                (c.value = Ht),
                (We = !1),
                (X = !1)),
              V();
          });
      },
    };
  function be(U) {
    return U.reduce((Z, O) => Z.then(() => E(O)), Promise.resolve());
  }
  return De;
}
function sh(t, e) {
  const s = [],
    n = [],
    o = [],
    i = Math.max(e.matched.length, t.matched.length);
  for (let r = 0; r < i; r++) {
    const a = e.matched[r];
    a && (t.matched.find((u) => Hn(u, a)) ? n.push(a) : s.push(a));
    const c = t.matched[r];
    c && (e.matched.find((u) => Hn(u, c)) || o.push(c));
  }
  return [s, n, o];
}
function Tn() {
  return wt(uo);
}
/*!
 * Cropper.js v1.6.2
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2024-04-21T07:43:05.335Z
 */ function Kr(t, e) {
  var s = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      s.push.apply(s, n);
  }
  return s;
}
function Ql(t) {
  for (var e = 1; e < arguments.length; e++) {
    var s = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Kr(Object(s), !0).forEach(function (n) {
          ah(t, n, s[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
      : Kr(Object(s)).forEach(function (n) {
          Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(s, n));
        });
  }
  return t;
}
function oh(t, e) {
  if (typeof t != "object" || !t) return t;
  var s = t[Symbol.toPrimitive];
  if (s !== void 0) {
    var n = s.call(t, e);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function Zl(t) {
  var e = oh(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function Jo(t) {
  "@babel/helpers - typeof";
  return (
    (Jo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    Jo(t)
  );
}
function ih(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Gr(t, e) {
  for (var s = 0; s < e.length; s++) {
    var n = e[s];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, Zl(n.key), n);
  }
}
function rh(t, e, s) {
  return (
    e && Gr(t.prototype, e),
    s && Gr(t, s),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    t
  );
}
function ah(t, e, s) {
  return (
    (e = Zl(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: s,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = s),
    t
  );
}
function ec(t) {
  return lh(t) || ch(t) || uh(t) || dh();
}
function lh(t) {
  if (Array.isArray(t)) return Qo(t);
}
function ch(t) {
  if (
    (typeof Symbol < "u" && t[Symbol.iterator] != null) ||
    t["@@iterator"] != null
  )
    return Array.from(t);
}
function uh(t, e) {
  if (t) {
    if (typeof t == "string") return Qo(t, e);
    var s = Object.prototype.toString.call(t).slice(8, -1);
    if (
      (s === "Object" && t.constructor && (s = t.constructor.name),
      s === "Map" || s === "Set")
    )
      return Array.from(t);
    if (s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))
      return Qo(t, e);
  }
}
function Qo(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var s = 0, n = new Array(e); s < e; s++) n[s] = t[s];
  return n;
}
function dh() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var fo = typeof window < "u" && typeof window.document < "u",
  It = fo ? window : {},
  Mi =
    fo && It.document.documentElement
      ? "ontouchstart" in It.document.documentElement
      : !1,
  Ei = fo ? "PointerEvent" in It : !1,
  Oe = "cropper",
  Ai = "all",
  tc = "crop",
  nc = "move",
  sc = "zoom",
  un = "e",
  dn = "w",
  xn = "s",
  Ft = "n",
  Gn = "ne",
  Yn = "nw",
  qn = "se",
  Xn = "sw",
  Zo = "".concat(Oe, "-crop"),
  Yr = "".concat(Oe, "-disabled"),
  ot = "".concat(Oe, "-hidden"),
  qr = "".concat(Oe, "-hide"),
  fh = "".concat(Oe, "-invisible"),
  Ys = "".concat(Oe, "-modal"),
  ei = "".concat(Oe, "-move"),
  ws = "".concat(Oe, "Action"),
  Rs = "".concat(Oe, "Preview"),
  Ii = "crop",
  oc = "move",
  ic = "none",
  ti = "crop",
  ni = "cropend",
  si = "cropmove",
  oi = "cropstart",
  Xr = "dblclick",
  hh = Mi ? "touchstart" : "mousedown",
  ph = Mi ? "touchmove" : "mousemove",
  mh = Mi ? "touchend touchcancel" : "mouseup",
  Jr = Ei ? "pointerdown" : hh,
  Qr = Ei ? "pointermove" : ph,
  Zr = Ei ? "pointerup pointercancel" : mh,
  ea = "ready",
  ta = "resize",
  na = "wheel",
  ii = "zoom",
  sa = "image/jpeg",
  gh = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,
  vh = /^data:/,
  yh = /^data:image\/jpeg;base64,/,
  bh = /^img|canvas$/i,
  rc = 200,
  ac = 100,
  oa = {
    viewMode: 0,
    dragMode: Ii,
    initialAspectRatio: NaN,
    aspectRatio: NaN,
    data: null,
    preview: "",
    responsive: !0,
    restore: !0,
    checkCrossOrigin: !0,
    checkOrientation: !0,
    modal: !0,
    guides: !0,
    center: !0,
    highlight: !0,
    background: !0,
    autoCrop: !0,
    autoCropArea: 0.8,
    movable: !0,
    rotatable: !0,
    scalable: !0,
    zoomable: !0,
    zoomOnTouch: !0,
    zoomOnWheel: !0,
    wheelZoomRatio: 0.1,
    cropBoxMovable: !0,
    cropBoxResizable: !0,
    toggleDragModeOnDblclick: !0,
    minCanvasWidth: 0,
    minCanvasHeight: 0,
    minCropBoxWidth: 0,
    minCropBoxHeight: 0,
    minContainerWidth: rc,
    minContainerHeight: ac,
    ready: null,
    cropstart: null,
    cropmove: null,
    cropend: null,
    crop: null,
    zoom: null,
  },
  wh =
    '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',
  kh = Number.isNaN || It.isNaN;
function ve(t) {
  return typeof t == "number" && !kh(t);
}
var ia = function (e) {
  return e > 0 && e < 1 / 0;
};
function Io(t) {
  return typeof t > "u";
}
function bn(t) {
  return Jo(t) === "object" && t !== null;
}
var Sh = Object.prototype.hasOwnProperty;
function An(t) {
  if (!bn(t)) return !1;
  try {
    var e = t.constructor,
      s = e.prototype;
    return e && s && Sh.call(s, "isPrototypeOf");
  } catch {
    return !1;
  }
}
function st(t) {
  return typeof t == "function";
}
var Th = Array.prototype.slice;
function lc(t) {
  return Array.from ? Array.from(t) : Th.call(t);
}
function je(t, e) {
  return (
    t &&
      st(e) &&
      (Array.isArray(t) || ve(t.length)
        ? lc(t).forEach(function (s, n) {
            e.call(t, s, n, t);
          })
        : bn(t) &&
          Object.keys(t).forEach(function (s) {
            e.call(t, t[s], s, t);
          })),
    t
  );
}
var Pe =
    Object.assign ||
    function (e) {
      for (
        var s = arguments.length, n = new Array(s > 1 ? s - 1 : 0), o = 1;
        o < s;
        o++
      )
        n[o - 1] = arguments[o];
      return (
        bn(e) &&
          n.length > 0 &&
          n.forEach(function (i) {
            bn(i) &&
              Object.keys(i).forEach(function (r) {
                e[r] = i[r];
              });
          }),
        e
      );
    },
  Ch = /\.\d*(?:0|9){12}\d*$/;
function Bn(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return Ch.test(t) ? Math.round(t * e) / e : t;
}
var _h = /^width|height|left|top|marginLeft|marginTop$/;
function qt(t, e) {
  var s = t.style;
  je(e, function (n, o) {
    _h.test(o) && ve(n) && (n = "".concat(n, "px")), (s[o] = n);
  });
}
function Dh(t, e) {
  return t.classList ? t.classList.contains(e) : t.className.indexOf(e) > -1;
}
function Ve(t, e) {
  if (e) {
    if (ve(t.length)) {
      je(t, function (n) {
        Ve(n, e);
      });
      return;
    }
    if (t.classList) {
      t.classList.add(e);
      return;
    }
    var s = t.className.trim();
    s
      ? s.indexOf(e) < 0 && (t.className = "".concat(s, " ").concat(e))
      : (t.className = e);
  }
}
function At(t, e) {
  if (e) {
    if (ve(t.length)) {
      je(t, function (s) {
        At(s, e);
      });
      return;
    }
    if (t.classList) {
      t.classList.remove(e);
      return;
    }
    t.className.indexOf(e) >= 0 && (t.className = t.className.replace(e, ""));
  }
}
function In(t, e, s) {
  if (e) {
    if (ve(t.length)) {
      je(t, function (n) {
        In(n, e, s);
      });
      return;
    }
    s ? Ve(t, e) : At(t, e);
  }
}
var xh = /([a-z\d])([A-Z])/g;
function Ri(t) {
  return t.replace(xh, "$1-$2").toLowerCase();
}
function ri(t, e) {
  return bn(t[e])
    ? t[e]
    : t.dataset
    ? t.dataset[e]
    : t.getAttribute("data-".concat(Ri(e)));
}
function ks(t, e, s) {
  bn(s)
    ? (t[e] = s)
    : t.dataset
    ? (t.dataset[e] = s)
    : t.setAttribute("data-".concat(Ri(e)), s);
}
function Mh(t, e) {
  if (bn(t[e]))
    try {
      delete t[e];
    } catch {
      t[e] = void 0;
    }
  else if (t.dataset)
    try {
      delete t.dataset[e];
    } catch {
      t.dataset[e] = void 0;
    }
  else t.removeAttribute("data-".concat(Ri(e)));
}
var cc = /\s\s*/,
  uc = (function () {
    var t = !1;
    if (fo) {
      var e = !1,
        s = function () {},
        n = Object.defineProperty({}, "once", {
          get: function () {
            return (t = !0), e;
          },
          set: function (i) {
            e = i;
          },
        });
      It.addEventListener("test", s, n), It.removeEventListener("test", s, n);
    }
    return t;
  })();
function vt(t, e, s) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
    o = s;
  e.trim()
    .split(cc)
    .forEach(function (i) {
      if (!uc) {
        var r = t.listeners;
        r &&
          r[i] &&
          r[i][s] &&
          ((o = r[i][s]),
          delete r[i][s],
          Object.keys(r[i]).length === 0 && delete r[i],
          Object.keys(r).length === 0 && delete t.listeners);
      }
      t.removeEventListener(i, o, n);
    });
}
function ut(t, e, s) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
    o = s;
  e.trim()
    .split(cc)
    .forEach(function (i) {
      if (n.once && !uc) {
        var r = t.listeners,
          a = r === void 0 ? {} : r;
        (o = function () {
          delete a[i][s], t.removeEventListener(i, o, n);
          for (var u = arguments.length, d = new Array(u), f = 0; f < u; f++)
            d[f] = arguments[f];
          s.apply(t, d);
        }),
          a[i] || (a[i] = {}),
          a[i][s] && t.removeEventListener(i, a[i][s], n),
          (a[i][s] = o),
          (t.listeners = a);
      }
      t.addEventListener(i, o, n);
    });
}
function Wn(t, e, s) {
  var n;
  return (
    st(Event) && st(CustomEvent)
      ? (n = new CustomEvent(e, { detail: s, bubbles: !0, cancelable: !0 }))
      : ((n = document.createEvent("CustomEvent")),
        n.initCustomEvent(e, !0, !0, s)),
    t.dispatchEvent(n)
  );
}
function dc(t) {
  var e = t.getBoundingClientRect();
  return {
    left: e.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: e.top + (window.pageYOffset - document.documentElement.clientTop),
  };
}
var Ro = It.location,
  Eh = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function ra(t) {
  var e = t.match(Eh);
  return (
    e !== null &&
    (e[1] !== Ro.protocol || e[2] !== Ro.hostname || e[3] !== Ro.port)
  );
}
function aa(t) {
  var e = "timestamp=".concat(new Date().getTime());
  return t + (t.indexOf("?") === -1 ? "?" : "&") + e;
}
function cs(t) {
  var e = t.rotate,
    s = t.scaleX,
    n = t.scaleY,
    o = t.translateX,
    i = t.translateY,
    r = [];
  ve(o) && o !== 0 && r.push("translateX(".concat(o, "px)")),
    ve(i) && i !== 0 && r.push("translateY(".concat(i, "px)")),
    ve(e) && e !== 0 && r.push("rotate(".concat(e, "deg)")),
    ve(s) && s !== 1 && r.push("scaleX(".concat(s, ")")),
    ve(n) && n !== 1 && r.push("scaleY(".concat(n, ")"));
  var a = r.length ? r.join(" ") : "none";
  return { WebkitTransform: a, msTransform: a, transform: a };
}
function Ah(t) {
  var e = Ql({}, t),
    s = 0;
  return (
    je(t, function (n, o) {
      delete e[o],
        je(e, function (i) {
          var r = Math.abs(n.startX - i.startX),
            a = Math.abs(n.startY - i.startY),
            c = Math.abs(n.endX - i.endX),
            u = Math.abs(n.endY - i.endY),
            d = Math.sqrt(r * r + a * a),
            f = Math.sqrt(c * c + u * u),
            h = (f - d) / d;
          Math.abs(h) > Math.abs(s) && (s = h);
        });
    }),
    s
  );
}
function Os(t, e) {
  var s = t.pageX,
    n = t.pageY,
    o = { endX: s, endY: n };
  return e ? o : Ql({ startX: s, startY: n }, o);
}
function Ih(t) {
  var e = 0,
    s = 0,
    n = 0;
  return (
    je(t, function (o) {
      var i = o.startX,
        r = o.startY;
      (e += i), (s += r), (n += 1);
    }),
    (e /= n),
    (s /= n),
    { pageX: e, pageY: s }
  );
}
function Xt(t) {
  var e = t.aspectRatio,
    s = t.height,
    n = t.width,
    o =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : "contain",
    i = ia(n),
    r = ia(s);
  if (i && r) {
    var a = s * e;
    (o === "contain" && a > n) || (o === "cover" && a < n)
      ? (s = n / e)
      : (n = s * e);
  } else i ? (s = n / e) : r && (n = s * e);
  return { width: n, height: s };
}
function Rh(t) {
  var e = t.width,
    s = t.height,
    n = t.degree;
  if (((n = Math.abs(n) % 180), n === 90)) return { width: s, height: e };
  var o = ((n % 90) * Math.PI) / 180,
    i = Math.sin(o),
    r = Math.cos(o),
    a = e * r + s * i,
    c = e * i + s * r;
  return n > 90 ? { width: c, height: a } : { width: a, height: c };
}
function Oh(t, e, s, n) {
  var o = e.aspectRatio,
    i = e.naturalWidth,
    r = e.naturalHeight,
    a = e.rotate,
    c = a === void 0 ? 0 : a,
    u = e.scaleX,
    d = u === void 0 ? 1 : u,
    f = e.scaleY,
    h = f === void 0 ? 1 : f,
    p = s.aspectRatio,
    y = s.naturalWidth,
    b = s.naturalHeight,
    A = n.fillColor,
    L = A === void 0 ? "transparent" : A,
    C = n.imageSmoothingEnabled,
    _ = C === void 0 ? !0 : C,
    v = n.imageSmoothingQuality,
    D = v === void 0 ? "low" : v,
    w = n.maxWidth,
    R = w === void 0 ? 1 / 0 : w,
    S = n.maxHeight,
    E = S === void 0 ? 1 / 0 : S,
    F = n.minWidth,
    K = F === void 0 ? 0 : F,
    I = n.minHeight,
    Y = I === void 0 ? 0 : I,
    G = document.createElement("canvas"),
    H = G.getContext("2d"),
    te = Xt({ aspectRatio: p, width: R, height: E }),
    X = Xt({ aspectRatio: p, width: K, height: Y }, "cover"),
    ne = Math.min(te.width, Math.max(X.width, y)),
    ue = Math.min(te.height, Math.max(X.height, b)),
    Re = Xt({ aspectRatio: o, width: R, height: E }),
    me = Xt({ aspectRatio: o, width: K, height: Y }, "cover"),
    ke = Math.min(Re.width, Math.max(me.width, i)),
    We = Math.min(Re.height, Math.max(me.height, r)),
    ce = [-ke / 2, -We / 2, ke, We];
  return (
    (G.width = Bn(ne)),
    (G.height = Bn(ue)),
    (H.fillStyle = L),
    H.fillRect(0, 0, ne, ue),
    H.save(),
    H.translate(ne / 2, ue / 2),
    H.rotate((c * Math.PI) / 180),
    H.scale(d, h),
    (H.imageSmoothingEnabled = _),
    (H.imageSmoothingQuality = D),
    H.drawImage.apply(
      H,
      [t].concat(
        ec(
          ce.map(function (De) {
            return Math.floor(Bn(De));
          })
        )
      )
    ),
    H.restore(),
    G
  );
}
var fc = String.fromCharCode;
function Ph(t, e, s) {
  var n = "";
  s += e;
  for (var o = e; o < s; o += 1) n += fc(t.getUint8(o));
  return n;
}
var Nh = /^data:.*,/;
function Lh(t) {
  var e = t.replace(Nh, ""),
    s = atob(e),
    n = new ArrayBuffer(s.length),
    o = new Uint8Array(n);
  return (
    je(o, function (i, r) {
      o[r] = s.charCodeAt(r);
    }),
    n
  );
}
function Bh(t, e) {
  for (var s = [], n = 8192, o = new Uint8Array(t); o.length > 0; )
    s.push(fc.apply(null, lc(o.subarray(0, n)))), (o = o.subarray(n));
  return "data:".concat(e, ";base64,").concat(btoa(s.join("")));
}
function Wh(t) {
  var e = new DataView(t),
    s;
  try {
    var n, o, i;
    if (e.getUint8(0) === 255 && e.getUint8(1) === 216)
      for (var r = e.byteLength, a = 2; a + 1 < r; ) {
        if (e.getUint8(a) === 255 && e.getUint8(a + 1) === 225) {
          o = a;
          break;
        }
        a += 1;
      }
    if (o) {
      var c = o + 4,
        u = o + 10;
      if (Ph(e, c, 4) === "Exif") {
        var d = e.getUint16(u);
        if (
          ((n = d === 18761),
          (n || d === 19789) && e.getUint16(u + 2, n) === 42)
        ) {
          var f = e.getUint32(u + 4, n);
          f >= 8 && (i = u + f);
        }
      }
    }
    if (i) {
      var h = e.getUint16(i, n),
        p,
        y;
      for (y = 0; y < h; y += 1)
        if (((p = i + y * 12 + 2), e.getUint16(p, n) === 274)) {
          (p += 8), (s = e.getUint16(p, n)), e.setUint16(p, 1, n);
          break;
        }
    }
  } catch {
    s = 1;
  }
  return s;
}
function Uh(t) {
  var e = 0,
    s = 1,
    n = 1;
  switch (t) {
    case 2:
      s = -1;
      break;
    case 3:
      e = -180;
      break;
    case 4:
      n = -1;
      break;
    case 5:
      (e = 90), (n = -1);
      break;
    case 6:
      e = 90;
      break;
    case 7:
      (e = 90), (s = -1);
      break;
    case 8:
      e = -90;
      break;
  }
  return { rotate: e, scaleX: s, scaleY: n };
}
var jh = {
    render: function () {
      this.initContainer(),
        this.initCanvas(),
        this.initCropBox(),
        this.renderCanvas(),
        this.cropped && this.renderCropBox();
    },
    initContainer: function () {
      var e = this.element,
        s = this.options,
        n = this.container,
        o = this.cropper,
        i = Number(s.minContainerWidth),
        r = Number(s.minContainerHeight);
      Ve(o, ot), At(e, ot);
      var a = {
        width: Math.max(n.offsetWidth, i >= 0 ? i : rc),
        height: Math.max(n.offsetHeight, r >= 0 ? r : ac),
      };
      (this.containerData = a),
        qt(o, { width: a.width, height: a.height }),
        Ve(e, ot),
        At(o, ot);
    },
    initCanvas: function () {
      var e = this.containerData,
        s = this.imageData,
        n = this.options.viewMode,
        o = Math.abs(s.rotate) % 180 === 90,
        i = o ? s.naturalHeight : s.naturalWidth,
        r = o ? s.naturalWidth : s.naturalHeight,
        a = i / r,
        c = e.width,
        u = e.height;
      e.height * a > e.width
        ? n === 3
          ? (c = e.height * a)
          : (u = e.width / a)
        : n === 3
        ? (u = e.width / a)
        : (c = e.height * a);
      var d = {
        aspectRatio: a,
        naturalWidth: i,
        naturalHeight: r,
        width: c,
        height: u,
      };
      (this.canvasData = d),
        (this.limited = n === 1 || n === 2),
        this.limitCanvas(!0, !0),
        (d.width = Math.min(Math.max(d.width, d.minWidth), d.maxWidth)),
        (d.height = Math.min(Math.max(d.height, d.minHeight), d.maxHeight)),
        (d.left = (e.width - d.width) / 2),
        (d.top = (e.height - d.height) / 2),
        (d.oldLeft = d.left),
        (d.oldTop = d.top),
        (this.initialCanvasData = Pe({}, d));
    },
    limitCanvas: function (e, s) {
      var n = this.options,
        o = this.containerData,
        i = this.canvasData,
        r = this.cropBoxData,
        a = n.viewMode,
        c = i.aspectRatio,
        u = this.cropped && r;
      if (e) {
        var d = Number(n.minCanvasWidth) || 0,
          f = Number(n.minCanvasHeight) || 0;
        a > 1
          ? ((d = Math.max(d, o.width)),
            (f = Math.max(f, o.height)),
            a === 3 && (f * c > d ? (d = f * c) : (f = d / c)))
          : a > 0 &&
            (d
              ? (d = Math.max(d, u ? r.width : 0))
              : f
              ? (f = Math.max(f, u ? r.height : 0))
              : u &&
                ((d = r.width),
                (f = r.height),
                f * c > d ? (d = f * c) : (f = d / c)));
        var h = Xt({ aspectRatio: c, width: d, height: f });
        (d = h.width),
          (f = h.height),
          (i.minWidth = d),
          (i.minHeight = f),
          (i.maxWidth = 1 / 0),
          (i.maxHeight = 1 / 0);
      }
      if (s)
        if (a > (u ? 0 : 1)) {
          var p = o.width - i.width,
            y = o.height - i.height;
          (i.minLeft = Math.min(0, p)),
            (i.minTop = Math.min(0, y)),
            (i.maxLeft = Math.max(0, p)),
            (i.maxTop = Math.max(0, y)),
            u &&
              this.limited &&
              ((i.minLeft = Math.min(r.left, r.left + (r.width - i.width))),
              (i.minTop = Math.min(r.top, r.top + (r.height - i.height))),
              (i.maxLeft = r.left),
              (i.maxTop = r.top),
              a === 2 &&
                (i.width >= o.width &&
                  ((i.minLeft = Math.min(0, p)), (i.maxLeft = Math.max(0, p))),
                i.height >= o.height &&
                  ((i.minTop = Math.min(0, y)), (i.maxTop = Math.max(0, y)))));
        } else
          (i.minLeft = -i.width),
            (i.minTop = -i.height),
            (i.maxLeft = o.width),
            (i.maxTop = o.height);
    },
    renderCanvas: function (e, s) {
      var n = this.canvasData,
        o = this.imageData;
      if (s) {
        var i = Rh({
            width: o.naturalWidth * Math.abs(o.scaleX || 1),
            height: o.naturalHeight * Math.abs(o.scaleY || 1),
            degree: o.rotate || 0,
          }),
          r = i.width,
          a = i.height,
          c = n.width * (r / n.naturalWidth),
          u = n.height * (a / n.naturalHeight);
        (n.left -= (c - n.width) / 2),
          (n.top -= (u - n.height) / 2),
          (n.width = c),
          (n.height = u),
          (n.aspectRatio = r / a),
          (n.naturalWidth = r),
          (n.naturalHeight = a),
          this.limitCanvas(!0, !1);
      }
      (n.width > n.maxWidth || n.width < n.minWidth) && (n.left = n.oldLeft),
        (n.height > n.maxHeight || n.height < n.minHeight) &&
          (n.top = n.oldTop),
        (n.width = Math.min(Math.max(n.width, n.minWidth), n.maxWidth)),
        (n.height = Math.min(Math.max(n.height, n.minHeight), n.maxHeight)),
        this.limitCanvas(!1, !0),
        (n.left = Math.min(Math.max(n.left, n.minLeft), n.maxLeft)),
        (n.top = Math.min(Math.max(n.top, n.minTop), n.maxTop)),
        (n.oldLeft = n.left),
        (n.oldTop = n.top),
        qt(
          this.canvas,
          Pe(
            { width: n.width, height: n.height },
            cs({ translateX: n.left, translateY: n.top })
          )
        ),
        this.renderImage(e),
        this.cropped && this.limited && this.limitCropBox(!0, !0);
    },
    renderImage: function (e) {
      var s = this.canvasData,
        n = this.imageData,
        o = n.naturalWidth * (s.width / s.naturalWidth),
        i = n.naturalHeight * (s.height / s.naturalHeight);
      Pe(n, {
        width: o,
        height: i,
        left: (s.width - o) / 2,
        top: (s.height - i) / 2,
      }),
        qt(
          this.image,
          Pe(
            { width: n.width, height: n.height },
            cs(Pe({ translateX: n.left, translateY: n.top }, n))
          )
        ),
        e && this.output();
    },
    initCropBox: function () {
      var e = this.options,
        s = this.canvasData,
        n = e.aspectRatio || e.initialAspectRatio,
        o = Number(e.autoCropArea) || 0.8,
        i = { width: s.width, height: s.height };
      n &&
        (s.height * n > s.width
          ? (i.height = i.width / n)
          : (i.width = i.height * n)),
        (this.cropBoxData = i),
        this.limitCropBox(!0, !0),
        (i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth)),
        (i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight)),
        (i.width = Math.max(i.minWidth, i.width * o)),
        (i.height = Math.max(i.minHeight, i.height * o)),
        (i.left = s.left + (s.width - i.width) / 2),
        (i.top = s.top + (s.height - i.height) / 2),
        (i.oldLeft = i.left),
        (i.oldTop = i.top),
        (this.initialCropBoxData = Pe({}, i));
    },
    limitCropBox: function (e, s) {
      var n = this.options,
        o = this.containerData,
        i = this.canvasData,
        r = this.cropBoxData,
        a = this.limited,
        c = n.aspectRatio;
      if (e) {
        var u = Number(n.minCropBoxWidth) || 0,
          d = Number(n.minCropBoxHeight) || 0,
          f = a
            ? Math.min(o.width, i.width, i.width + i.left, o.width - i.left)
            : o.width,
          h = a
            ? Math.min(o.height, i.height, i.height + i.top, o.height - i.top)
            : o.height;
        (u = Math.min(u, o.width)),
          (d = Math.min(d, o.height)),
          c &&
            (u && d
              ? d * c > u
                ? (d = u / c)
                : (u = d * c)
              : u
              ? (d = u / c)
              : d && (u = d * c),
            h * c > f ? (h = f / c) : (f = h * c)),
          (r.minWidth = Math.min(u, f)),
          (r.minHeight = Math.min(d, h)),
          (r.maxWidth = f),
          (r.maxHeight = h);
      }
      s &&
        (a
          ? ((r.minLeft = Math.max(0, i.left)),
            (r.minTop = Math.max(0, i.top)),
            (r.maxLeft = Math.min(o.width, i.left + i.width) - r.width),
            (r.maxTop = Math.min(o.height, i.top + i.height) - r.height))
          : ((r.minLeft = 0),
            (r.minTop = 0),
            (r.maxLeft = o.width - r.width),
            (r.maxTop = o.height - r.height)));
    },
    renderCropBox: function () {
      var e = this.options,
        s = this.containerData,
        n = this.cropBoxData;
      (n.width > n.maxWidth || n.width < n.minWidth) && (n.left = n.oldLeft),
        (n.height > n.maxHeight || n.height < n.minHeight) &&
          (n.top = n.oldTop),
        (n.width = Math.min(Math.max(n.width, n.minWidth), n.maxWidth)),
        (n.height = Math.min(Math.max(n.height, n.minHeight), n.maxHeight)),
        this.limitCropBox(!1, !0),
        (n.left = Math.min(Math.max(n.left, n.minLeft), n.maxLeft)),
        (n.top = Math.min(Math.max(n.top, n.minTop), n.maxTop)),
        (n.oldLeft = n.left),
        (n.oldTop = n.top),
        e.movable &&
          e.cropBoxMovable &&
          ks(
            this.face,
            ws,
            n.width >= s.width && n.height >= s.height ? nc : Ai
          ),
        qt(
          this.cropBox,
          Pe(
            { width: n.width, height: n.height },
            cs({ translateX: n.left, translateY: n.top })
          )
        ),
        this.cropped && this.limited && this.limitCanvas(!0, !0),
        this.disabled || this.output();
    },
    output: function () {
      this.preview(), Wn(this.element, ti, this.getData());
    },
  },
  Hh = {
    initPreview: function () {
      var e = this.element,
        s = this.crossOrigin,
        n = this.options.preview,
        o = s ? this.crossOriginUrl : this.url,
        i = e.alt || "The image to preview",
        r = document.createElement("img");
      if (
        (s && (r.crossOrigin = s),
        (r.src = o),
        (r.alt = i),
        this.viewBox.appendChild(r),
        (this.viewBoxImage = r),
        !!n)
      ) {
        var a = n;
        typeof n == "string"
          ? (a = e.ownerDocument.querySelectorAll(n))
          : n.querySelector && (a = [n]),
          (this.previews = a),
          je(a, function (c) {
            var u = document.createElement("img");
            ks(c, Rs, {
              width: c.offsetWidth,
              height: c.offsetHeight,
              html: c.innerHTML,
            }),
              s && (u.crossOrigin = s),
              (u.src = o),
              (u.alt = i),
              (u.style.cssText =
                'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"'),
              (c.innerHTML = ""),
              c.appendChild(u);
          });
      }
    },
    resetPreview: function () {
      je(this.previews, function (e) {
        var s = ri(e, Rs);
        qt(e, { width: s.width, height: s.height }),
          (e.innerHTML = s.html),
          Mh(e, Rs);
      });
    },
    preview: function () {
      var e = this.imageData,
        s = this.canvasData,
        n = this.cropBoxData,
        o = n.width,
        i = n.height,
        r = e.width,
        a = e.height,
        c = n.left - s.left - e.left,
        u = n.top - s.top - e.top;
      !this.cropped ||
        this.disabled ||
        (qt(
          this.viewBoxImage,
          Pe(
            { width: r, height: a },
            cs(Pe({ translateX: -c, translateY: -u }, e))
          )
        ),
        je(this.previews, function (d) {
          var f = ri(d, Rs),
            h = f.width,
            p = f.height,
            y = h,
            b = p,
            A = 1;
          o && ((A = h / o), (b = i * A)),
            i && b > p && ((A = p / i), (y = o * A), (b = p)),
            qt(d, { width: y, height: b }),
            qt(
              d.getElementsByTagName("img")[0],
              Pe(
                { width: r * A, height: a * A },
                cs(Pe({ translateX: -c * A, translateY: -u * A }, e))
              )
            );
        }));
    },
  },
  Fh = {
    bind: function () {
      var e = this.element,
        s = this.options,
        n = this.cropper;
      st(s.cropstart) && ut(e, oi, s.cropstart),
        st(s.cropmove) && ut(e, si, s.cropmove),
        st(s.cropend) && ut(e, ni, s.cropend),
        st(s.crop) && ut(e, ti, s.crop),
        st(s.zoom) && ut(e, ii, s.zoom),
        ut(n, Jr, (this.onCropStart = this.cropStart.bind(this))),
        s.zoomable &&
          s.zoomOnWheel &&
          ut(n, na, (this.onWheel = this.wheel.bind(this)), {
            passive: !1,
            capture: !0,
          }),
        s.toggleDragModeOnDblclick &&
          ut(n, Xr, (this.onDblclick = this.dblclick.bind(this))),
        ut(e.ownerDocument, Qr, (this.onCropMove = this.cropMove.bind(this))),
        ut(e.ownerDocument, Zr, (this.onCropEnd = this.cropEnd.bind(this))),
        s.responsive &&
          ut(window, ta, (this.onResize = this.resize.bind(this)));
    },
    unbind: function () {
      var e = this.element,
        s = this.options,
        n = this.cropper;
      st(s.cropstart) && vt(e, oi, s.cropstart),
        st(s.cropmove) && vt(e, si, s.cropmove),
        st(s.cropend) && vt(e, ni, s.cropend),
        st(s.crop) && vt(e, ti, s.crop),
        st(s.zoom) && vt(e, ii, s.zoom),
        vt(n, Jr, this.onCropStart),
        s.zoomable &&
          s.zoomOnWheel &&
          vt(n, na, this.onWheel, { passive: !1, capture: !0 }),
        s.toggleDragModeOnDblclick && vt(n, Xr, this.onDblclick),
        vt(e.ownerDocument, Qr, this.onCropMove),
        vt(e.ownerDocument, Zr, this.onCropEnd),
        s.responsive && vt(window, ta, this.onResize);
    },
  },
  Vh = {
    resize: function () {
      if (!this.disabled) {
        var e = this.options,
          s = this.container,
          n = this.containerData,
          o = s.offsetWidth / n.width,
          i = s.offsetHeight / n.height,
          r = Math.abs(o - 1) > Math.abs(i - 1) ? o : i;
        if (r !== 1) {
          var a, c;
          e.restore &&
            ((a = this.getCanvasData()), (c = this.getCropBoxData())),
            this.render(),
            e.restore &&
              (this.setCanvasData(
                je(a, function (u, d) {
                  a[d] = u * r;
                })
              ),
              this.setCropBoxData(
                je(c, function (u, d) {
                  c[d] = u * r;
                })
              ));
        }
      }
    },
    dblclick: function () {
      this.disabled ||
        this.options.dragMode === ic ||
        this.setDragMode(Dh(this.dragBox, Zo) ? oc : Ii);
    },
    wheel: function (e) {
      var s = this,
        n = Number(this.options.wheelZoomRatio) || 0.1,
        o = 1;
      this.disabled ||
        (e.preventDefault(),
        !this.wheeling &&
          ((this.wheeling = !0),
          setTimeout(function () {
            s.wheeling = !1;
          }, 50),
          e.deltaY
            ? (o = e.deltaY > 0 ? 1 : -1)
            : e.wheelDelta
            ? (o = -e.wheelDelta / 120)
            : e.detail && (o = e.detail > 0 ? 1 : -1),
          this.zoom(-o * n, e)));
    },
    cropStart: function (e) {
      var s = e.buttons,
        n = e.button;
      if (
        !(
          this.disabled ||
          ((e.type === "mousedown" ||
            (e.type === "pointerdown" && e.pointerType === "mouse")) &&
            ((ve(s) && s !== 1) || (ve(n) && n !== 0) || e.ctrlKey))
        )
      ) {
        var o = this.options,
          i = this.pointers,
          r;
        e.changedTouches
          ? je(e.changedTouches, function (a) {
              i[a.identifier] = Os(a);
            })
          : (i[e.pointerId || 0] = Os(e)),
          Object.keys(i).length > 1 && o.zoomable && o.zoomOnTouch
            ? (r = sc)
            : (r = ri(e.target, ws)),
          gh.test(r) &&
            Wn(this.element, oi, { originalEvent: e, action: r }) !== !1 &&
            (e.preventDefault(),
            (this.action = r),
            (this.cropping = !1),
            r === tc && ((this.cropping = !0), Ve(this.dragBox, Ys)));
      }
    },
    cropMove: function (e) {
      var s = this.action;
      if (!(this.disabled || !s)) {
        var n = this.pointers;
        e.preventDefault(),
          Wn(this.element, si, { originalEvent: e, action: s }) !== !1 &&
            (e.changedTouches
              ? je(e.changedTouches, function (o) {
                  Pe(n[o.identifier] || {}, Os(o, !0));
                })
              : Pe(n[e.pointerId || 0] || {}, Os(e, !0)),
            this.change(e));
      }
    },
    cropEnd: function (e) {
      if (!this.disabled) {
        var s = this.action,
          n = this.pointers;
        e.changedTouches
          ? je(e.changedTouches, function (o) {
              delete n[o.identifier];
            })
          : delete n[e.pointerId || 0],
          s &&
            (e.preventDefault(),
            Object.keys(n).length || (this.action = ""),
            this.cropping &&
              ((this.cropping = !1),
              In(this.dragBox, Ys, this.cropped && this.options.modal)),
            Wn(this.element, ni, { originalEvent: e, action: s }));
      }
    },
  },
  $h = {
    change: function (e) {
      var s = this.options,
        n = this.canvasData,
        o = this.containerData,
        i = this.cropBoxData,
        r = this.pointers,
        a = this.action,
        c = s.aspectRatio,
        u = i.left,
        d = i.top,
        f = i.width,
        h = i.height,
        p = u + f,
        y = d + h,
        b = 0,
        A = 0,
        L = o.width,
        C = o.height,
        _ = !0,
        v;
      !c && e.shiftKey && (c = f && h ? f / h : 1),
        this.limited &&
          ((b = i.minLeft),
          (A = i.minTop),
          (L = b + Math.min(o.width, n.width, n.left + n.width)),
          (C = A + Math.min(o.height, n.height, n.top + n.height)));
      var D = r[Object.keys(r)[0]],
        w = { x: D.endX - D.startX, y: D.endY - D.startY },
        R = function (E) {
          switch (E) {
            case un:
              p + w.x > L && (w.x = L - p);
              break;
            case dn:
              u + w.x < b && (w.x = b - u);
              break;
            case Ft:
              d + w.y < A && (w.y = A - d);
              break;
            case xn:
              y + w.y > C && (w.y = C - y);
              break;
          }
        };
      switch (a) {
        case Ai:
          (u += w.x), (d += w.y);
          break;
        case un:
          if (w.x >= 0 && (p >= L || (c && (d <= A || y >= C)))) {
            _ = !1;
            break;
          }
          R(un),
            (f += w.x),
            f < 0 && ((a = dn), (f = -f), (u -= f)),
            c && ((h = f / c), (d += (i.height - h) / 2));
          break;
        case Ft:
          if (w.y <= 0 && (d <= A || (c && (u <= b || p >= L)))) {
            _ = !1;
            break;
          }
          R(Ft),
            (h -= w.y),
            (d += w.y),
            h < 0 && ((a = xn), (h = -h), (d -= h)),
            c && ((f = h * c), (u += (i.width - f) / 2));
          break;
        case dn:
          if (w.x <= 0 && (u <= b || (c && (d <= A || y >= C)))) {
            _ = !1;
            break;
          }
          R(dn),
            (f -= w.x),
            (u += w.x),
            f < 0 && ((a = un), (f = -f), (u -= f)),
            c && ((h = f / c), (d += (i.height - h) / 2));
          break;
        case xn:
          if (w.y >= 0 && (y >= C || (c && (u <= b || p >= L)))) {
            _ = !1;
            break;
          }
          R(xn),
            (h += w.y),
            h < 0 && ((a = Ft), (h = -h), (d -= h)),
            c && ((f = h * c), (u += (i.width - f) / 2));
          break;
        case Gn:
          if (c) {
            if (w.y <= 0 && (d <= A || p >= L)) {
              _ = !1;
              break;
            }
            R(Ft), (h -= w.y), (d += w.y), (f = h * c);
          } else
            R(Ft),
              R(un),
              w.x >= 0
                ? p < L
                  ? (f += w.x)
                  : w.y <= 0 && d <= A && (_ = !1)
                : (f += w.x),
              w.y <= 0
                ? d > A && ((h -= w.y), (d += w.y))
                : ((h -= w.y), (d += w.y));
          f < 0 && h < 0
            ? ((a = Xn), (h = -h), (f = -f), (d -= h), (u -= f))
            : f < 0
            ? ((a = Yn), (f = -f), (u -= f))
            : h < 0 && ((a = qn), (h = -h), (d -= h));
          break;
        case Yn:
          if (c) {
            if (w.y <= 0 && (d <= A || u <= b)) {
              _ = !1;
              break;
            }
            R(Ft), (h -= w.y), (d += w.y), (f = h * c), (u += i.width - f);
          } else
            R(Ft),
              R(dn),
              w.x <= 0
                ? u > b
                  ? ((f -= w.x), (u += w.x))
                  : w.y <= 0 && d <= A && (_ = !1)
                : ((f -= w.x), (u += w.x)),
              w.y <= 0
                ? d > A && ((h -= w.y), (d += w.y))
                : ((h -= w.y), (d += w.y));
          f < 0 && h < 0
            ? ((a = qn), (h = -h), (f = -f), (d -= h), (u -= f))
            : f < 0
            ? ((a = Gn), (f = -f), (u -= f))
            : h < 0 && ((a = Xn), (h = -h), (d -= h));
          break;
        case Xn:
          if (c) {
            if (w.x <= 0 && (u <= b || y >= C)) {
              _ = !1;
              break;
            }
            R(dn), (f -= w.x), (u += w.x), (h = f / c);
          } else
            R(xn),
              R(dn),
              w.x <= 0
                ? u > b
                  ? ((f -= w.x), (u += w.x))
                  : w.y >= 0 && y >= C && (_ = !1)
                : ((f -= w.x), (u += w.x)),
              w.y >= 0 ? y < C && (h += w.y) : (h += w.y);
          f < 0 && h < 0
            ? ((a = Gn), (h = -h), (f = -f), (d -= h), (u -= f))
            : f < 0
            ? ((a = qn), (f = -f), (u -= f))
            : h < 0 && ((a = Yn), (h = -h), (d -= h));
          break;
        case qn:
          if (c) {
            if (w.x >= 0 && (p >= L || y >= C)) {
              _ = !1;
              break;
            }
            R(un), (f += w.x), (h = f / c);
          } else
            R(xn),
              R(un),
              w.x >= 0
                ? p < L
                  ? (f += w.x)
                  : w.y >= 0 && y >= C && (_ = !1)
                : (f += w.x),
              w.y >= 0 ? y < C && (h += w.y) : (h += w.y);
          f < 0 && h < 0
            ? ((a = Yn), (h = -h), (f = -f), (d -= h), (u -= f))
            : f < 0
            ? ((a = Xn), (f = -f), (u -= f))
            : h < 0 && ((a = Gn), (h = -h), (d -= h));
          break;
        case nc:
          this.move(w.x, w.y), (_ = !1);
          break;
        case sc:
          this.zoom(Ah(r), e), (_ = !1);
          break;
        case tc:
          if (!w.x || !w.y) {
            _ = !1;
            break;
          }
          (v = dc(this.cropper)),
            (u = D.startX - v.left),
            (d = D.startY - v.top),
            (f = i.minWidth),
            (h = i.minHeight),
            w.x > 0
              ? (a = w.y > 0 ? qn : Gn)
              : w.x < 0 && ((u -= f), (a = w.y > 0 ? Xn : Yn)),
            w.y < 0 && (d -= h),
            this.cropped ||
              (At(this.cropBox, ot),
              (this.cropped = !0),
              this.limited && this.limitCropBox(!0, !0));
          break;
      }
      _ &&
        ((i.width = f),
        (i.height = h),
        (i.left = u),
        (i.top = d),
        (this.action = a),
        this.renderCropBox()),
        je(r, function (S) {
          (S.startX = S.endX), (S.startY = S.endY);
        });
    },
  },
  zh = {
    crop: function () {
      return (
        this.ready &&
          !this.cropped &&
          !this.disabled &&
          ((this.cropped = !0),
          this.limitCropBox(!0, !0),
          this.options.modal && Ve(this.dragBox, Ys),
          At(this.cropBox, ot),
          this.setCropBoxData(this.initialCropBoxData)),
        this
      );
    },
    reset: function () {
      return (
        this.ready &&
          !this.disabled &&
          ((this.imageData = Pe({}, this.initialImageData)),
          (this.canvasData = Pe({}, this.initialCanvasData)),
          (this.cropBoxData = Pe({}, this.initialCropBoxData)),
          this.renderCanvas(),
          this.cropped && this.renderCropBox()),
        this
      );
    },
    clear: function () {
      return (
        this.cropped &&
          !this.disabled &&
          (Pe(this.cropBoxData, { left: 0, top: 0, width: 0, height: 0 }),
          (this.cropped = !1),
          this.renderCropBox(),
          this.limitCanvas(!0, !0),
          this.renderCanvas(),
          At(this.dragBox, Ys),
          Ve(this.cropBox, ot)),
        this
      );
    },
    replace: function (e) {
      var s =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      return (
        !this.disabled &&
          e &&
          (this.isImg && (this.element.src = e),
          s
            ? ((this.url = e),
              (this.image.src = e),
              this.ready &&
                ((this.viewBoxImage.src = e),
                je(this.previews, function (n) {
                  n.getElementsByTagName("img")[0].src = e;
                })))
            : (this.isImg && (this.replaced = !0),
              (this.options.data = null),
              this.uncreate(),
              this.load(e))),
        this
      );
    },
    enable: function () {
      return (
        this.ready &&
          this.disabled &&
          ((this.disabled = !1), At(this.cropper, Yr)),
        this
      );
    },
    disable: function () {
      return (
        this.ready &&
          !this.disabled &&
          ((this.disabled = !0), Ve(this.cropper, Yr)),
        this
      );
    },
    destroy: function () {
      var e = this.element;
      return e[Oe]
        ? ((e[Oe] = void 0),
          this.isImg && this.replaced && (e.src = this.originalUrl),
          this.uncreate(),
          this)
        : this;
    },
    move: function (e) {
      var s =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e,
        n = this.canvasData,
        o = n.left,
        i = n.top;
      return this.moveTo(Io(e) ? e : o + Number(e), Io(s) ? s : i + Number(s));
    },
    moveTo: function (e) {
      var s =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e,
        n = this.canvasData,
        o = !1;
      return (
        (e = Number(e)),
        (s = Number(s)),
        this.ready &&
          !this.disabled &&
          this.options.movable &&
          (ve(e) && ((n.left = e), (o = !0)),
          ve(s) && ((n.top = s), (o = !0)),
          o && this.renderCanvas(!0)),
        this
      );
    },
    zoom: function (e, s) {
      var n = this.canvasData;
      return (
        (e = Number(e)),
        e < 0 ? (e = 1 / (1 - e)) : (e = 1 + e),
        this.zoomTo((n.width * e) / n.naturalWidth, null, s)
      );
    },
    zoomTo: function (e, s, n) {
      var o = this.options,
        i = this.canvasData,
        r = i.width,
        a = i.height,
        c = i.naturalWidth,
        u = i.naturalHeight;
      if (
        ((e = Number(e)), e >= 0 && this.ready && !this.disabled && o.zoomable)
      ) {
        var d = c * e,
          f = u * e;
        if (
          Wn(this.element, ii, {
            ratio: e,
            oldRatio: r / c,
            originalEvent: n,
          }) === !1
        )
          return this;
        if (n) {
          var h = this.pointers,
            p = dc(this.cropper),
            y =
              h && Object.keys(h).length
                ? Ih(h)
                : { pageX: n.pageX, pageY: n.pageY };
          (i.left -= (d - r) * ((y.pageX - p.left - i.left) / r)),
            (i.top -= (f - a) * ((y.pageY - p.top - i.top) / a));
        } else
          An(s) && ve(s.x) && ve(s.y)
            ? ((i.left -= (d - r) * ((s.x - i.left) / r)),
              (i.top -= (f - a) * ((s.y - i.top) / a)))
            : ((i.left -= (d - r) / 2), (i.top -= (f - a) / 2));
        (i.width = d), (i.height = f), this.renderCanvas(!0);
      }
      return this;
    },
    rotate: function (e) {
      return this.rotateTo((this.imageData.rotate || 0) + Number(e));
    },
    rotateTo: function (e) {
      return (
        (e = Number(e)),
        ve(e) &&
          this.ready &&
          !this.disabled &&
          this.options.rotatable &&
          ((this.imageData.rotate = e % 360), this.renderCanvas(!0, !0)),
        this
      );
    },
    scaleX: function (e) {
      var s = this.imageData.scaleY;
      return this.scale(e, ve(s) ? s : 1);
    },
    scaleY: function (e) {
      var s = this.imageData.scaleX;
      return this.scale(ve(s) ? s : 1, e);
    },
    scale: function (e) {
      var s =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e,
        n = this.imageData,
        o = !1;
      return (
        (e = Number(e)),
        (s = Number(s)),
        this.ready &&
          !this.disabled &&
          this.options.scalable &&
          (ve(e) && ((n.scaleX = e), (o = !0)),
          ve(s) && ((n.scaleY = s), (o = !0)),
          o && this.renderCanvas(!0, !0)),
        this
      );
    },
    getData: function () {
      var e =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
        s = this.options,
        n = this.imageData,
        o = this.canvasData,
        i = this.cropBoxData,
        r;
      if (this.ready && this.cropped) {
        r = {
          x: i.left - o.left,
          y: i.top - o.top,
          width: i.width,
          height: i.height,
        };
        var a = n.width / n.naturalWidth;
        if (
          (je(r, function (d, f) {
            r[f] = d / a;
          }),
          e)
        ) {
          var c = Math.round(r.y + r.height),
            u = Math.round(r.x + r.width);
          (r.x = Math.round(r.x)),
            (r.y = Math.round(r.y)),
            (r.width = u - r.x),
            (r.height = c - r.y);
        }
      } else r = { x: 0, y: 0, width: 0, height: 0 };
      return (
        s.rotatable && (r.rotate = n.rotate || 0),
        s.scalable && ((r.scaleX = n.scaleX || 1), (r.scaleY = n.scaleY || 1)),
        r
      );
    },
    setData: function (e) {
      var s = this.options,
        n = this.imageData,
        o = this.canvasData,
        i = {};
      if (this.ready && !this.disabled && An(e)) {
        var r = !1;
        s.rotatable &&
          ve(e.rotate) &&
          e.rotate !== n.rotate &&
          ((n.rotate = e.rotate), (r = !0)),
          s.scalable &&
            (ve(e.scaleX) &&
              e.scaleX !== n.scaleX &&
              ((n.scaleX = e.scaleX), (r = !0)),
            ve(e.scaleY) &&
              e.scaleY !== n.scaleY &&
              ((n.scaleY = e.scaleY), (r = !0))),
          r && this.renderCanvas(!0, !0);
        var a = n.width / n.naturalWidth;
        ve(e.x) && (i.left = e.x * a + o.left),
          ve(e.y) && (i.top = e.y * a + o.top),
          ve(e.width) && (i.width = e.width * a),
          ve(e.height) && (i.height = e.height * a),
          this.setCropBoxData(i);
      }
      return this;
    },
    getContainerData: function () {
      return this.ready ? Pe({}, this.containerData) : {};
    },
    getImageData: function () {
      return this.sized ? Pe({}, this.imageData) : {};
    },
    getCanvasData: function () {
      var e = this.canvasData,
        s = {};
      return (
        this.ready &&
          je(
            ["left", "top", "width", "height", "naturalWidth", "naturalHeight"],
            function (n) {
              s[n] = e[n];
            }
          ),
        s
      );
    },
    setCanvasData: function (e) {
      var s = this.canvasData,
        n = s.aspectRatio;
      return (
        this.ready &&
          !this.disabled &&
          An(e) &&
          (ve(e.left) && (s.left = e.left),
          ve(e.top) && (s.top = e.top),
          ve(e.width)
            ? ((s.width = e.width), (s.height = e.width / n))
            : ve(e.height) && ((s.height = e.height), (s.width = e.height * n)),
          this.renderCanvas(!0)),
        this
      );
    },
    getCropBoxData: function () {
      var e = this.cropBoxData,
        s;
      return (
        this.ready &&
          this.cropped &&
          (s = { left: e.left, top: e.top, width: e.width, height: e.height }),
        s || {}
      );
    },
    setCropBoxData: function (e) {
      var s = this.cropBoxData,
        n = this.options.aspectRatio,
        o,
        i;
      return (
        this.ready &&
          this.cropped &&
          !this.disabled &&
          An(e) &&
          (ve(e.left) && (s.left = e.left),
          ve(e.top) && (s.top = e.top),
          ve(e.width) && e.width !== s.width && ((o = !0), (s.width = e.width)),
          ve(e.height) &&
            e.height !== s.height &&
            ((i = !0), (s.height = e.height)),
          n && (o ? (s.height = s.width / n) : i && (s.width = s.height * n)),
          this.renderCropBox()),
        this
      );
    },
    getCroppedCanvas: function () {
      var e =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (!this.ready || !window.HTMLCanvasElement) return null;
      var s = this.canvasData,
        n = Oh(this.image, this.imageData, s, e);
      if (!this.cropped) return n;
      var o = this.getData(e.rounded),
        i = o.x,
        r = o.y,
        a = o.width,
        c = o.height,
        u = n.width / Math.floor(s.naturalWidth);
      u !== 1 && ((i *= u), (r *= u), (a *= u), (c *= u));
      var d = a / c,
        f = Xt({
          aspectRatio: d,
          width: e.maxWidth || 1 / 0,
          height: e.maxHeight || 1 / 0,
        }),
        h = Xt(
          { aspectRatio: d, width: e.minWidth || 0, height: e.minHeight || 0 },
          "cover"
        ),
        p = Xt({
          aspectRatio: d,
          width: e.width || (u !== 1 ? n.width : a),
          height: e.height || (u !== 1 ? n.height : c),
        }),
        y = p.width,
        b = p.height;
      (y = Math.min(f.width, Math.max(h.width, y))),
        (b = Math.min(f.height, Math.max(h.height, b)));
      var A = document.createElement("canvas"),
        L = A.getContext("2d");
      (A.width = Bn(y)),
        (A.height = Bn(b)),
        (L.fillStyle = e.fillColor || "transparent"),
        L.fillRect(0, 0, y, b);
      var C = e.imageSmoothingEnabled,
        _ = C === void 0 ? !0 : C,
        v = e.imageSmoothingQuality;
      (L.imageSmoothingEnabled = _), v && (L.imageSmoothingQuality = v);
      var D = n.width,
        w = n.height,
        R = i,
        S = r,
        E,
        F,
        K,
        I,
        Y,
        G;
      R <= -a || R > D
        ? ((R = 0), (E = 0), (K = 0), (Y = 0))
        : R <= 0
        ? ((K = -R), (R = 0), (E = Math.min(D, a + R)), (Y = E))
        : R <= D && ((K = 0), (E = Math.min(a, D - R)), (Y = E)),
        E <= 0 || S <= -c || S > w
          ? ((S = 0), (F = 0), (I = 0), (G = 0))
          : S <= 0
          ? ((I = -S), (S = 0), (F = Math.min(w, c + S)), (G = F))
          : S <= w && ((I = 0), (F = Math.min(c, w - S)), (G = F));
      var H = [R, S, E, F];
      if (Y > 0 && G > 0) {
        var te = y / a;
        H.push(K * te, I * te, Y * te, G * te);
      }
      return (
        L.drawImage.apply(
          L,
          [n].concat(
            ec(
              H.map(function (X) {
                return Math.floor(Bn(X));
              })
            )
          )
        ),
        A
      );
    },
    setAspectRatio: function (e) {
      var s = this.options;
      return (
        !this.disabled &&
          !Io(e) &&
          ((s.aspectRatio = Math.max(0, e) || NaN),
          this.ready &&
            (this.initCropBox(), this.cropped && this.renderCropBox())),
        this
      );
    },
    setDragMode: function (e) {
      var s = this.options,
        n = this.dragBox,
        o = this.face;
      if (this.ready && !this.disabled) {
        var i = e === Ii,
          r = s.movable && e === oc;
        (e = i || r ? e : ic),
          (s.dragMode = e),
          ks(n, ws, e),
          In(n, Zo, i),
          In(n, ei, r),
          s.cropBoxMovable || (ks(o, ws, e), In(o, Zo, i), In(o, ei, r));
      }
      return this;
    },
  },
  Kh = It.Cropper,
  hc = (function () {
    function t(e) {
      var s =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if ((ih(this, t), !e || !bh.test(e.tagName)))
        throw new Error(
          "The first argument is required and must be an <img> or <canvas> element."
        );
      (this.element = e),
        (this.options = Pe({}, oa, An(s) && s)),
        (this.cropped = !1),
        (this.disabled = !1),
        (this.pointers = {}),
        (this.ready = !1),
        (this.reloading = !1),
        (this.replaced = !1),
        (this.sized = !1),
        (this.sizing = !1),
        this.init();
    }
    return rh(
      t,
      [
        {
          key: "init",
          value: function () {
            var s = this.element,
              n = s.tagName.toLowerCase(),
              o;
            if (!s[Oe]) {
              if (((s[Oe] = this), n === "img")) {
                if (
                  ((this.isImg = !0),
                  (o = s.getAttribute("src") || ""),
                  (this.originalUrl = o),
                  !o)
                )
                  return;
                o = s.src;
              } else
                n === "canvas" &&
                  window.HTMLCanvasElement &&
                  (o = s.toDataURL());
              this.load(o);
            }
          },
        },
        {
          key: "load",
          value: function (s) {
            var n = this;
            if (s) {
              (this.url = s), (this.imageData = {});
              var o = this.element,
                i = this.options;
              if (
                (!i.rotatable && !i.scalable && (i.checkOrientation = !1),
                !i.checkOrientation || !window.ArrayBuffer)
              ) {
                this.clone();
                return;
              }
              if (vh.test(s)) {
                yh.test(s) ? this.read(Lh(s)) : this.clone();
                return;
              }
              var r = new XMLHttpRequest(),
                a = this.clone.bind(this);
              (this.reloading = !0),
                (this.xhr = r),
                (r.onabort = a),
                (r.onerror = a),
                (r.ontimeout = a),
                (r.onprogress = function () {
                  r.getResponseHeader("content-type") !== sa && r.abort();
                }),
                (r.onload = function () {
                  n.read(r.response);
                }),
                (r.onloadend = function () {
                  (n.reloading = !1), (n.xhr = null);
                }),
                i.checkCrossOrigin && ra(s) && o.crossOrigin && (s = aa(s)),
                r.open("GET", s, !0),
                (r.responseType = "arraybuffer"),
                (r.withCredentials = o.crossOrigin === "use-credentials"),
                r.send();
            }
          },
        },
        {
          key: "read",
          value: function (s) {
            var n = this.options,
              o = this.imageData,
              i = Wh(s),
              r = 0,
              a = 1,
              c = 1;
            if (i > 1) {
              this.url = Bh(s, sa);
              var u = Uh(i);
              (r = u.rotate), (a = u.scaleX), (c = u.scaleY);
            }
            n.rotatable && (o.rotate = r),
              n.scalable && ((o.scaleX = a), (o.scaleY = c)),
              this.clone();
          },
        },
        {
          key: "clone",
          value: function () {
            var s = this.element,
              n = this.url,
              o = s.crossOrigin,
              i = n;
            this.options.checkCrossOrigin &&
              ra(n) &&
              (o || (o = "anonymous"), (i = aa(n))),
              (this.crossOrigin = o),
              (this.crossOriginUrl = i);
            var r = document.createElement("img");
            o && (r.crossOrigin = o),
              (r.src = i || n),
              (r.alt = s.alt || "The image to crop"),
              (this.image = r),
              (r.onload = this.start.bind(this)),
              (r.onerror = this.stop.bind(this)),
              Ve(r, qr),
              s.parentNode.insertBefore(r, s.nextSibling);
          },
        },
        {
          key: "start",
          value: function () {
            var s = this,
              n = this.image;
            (n.onload = null), (n.onerror = null), (this.sizing = !0);
            var o =
                It.navigator &&
                /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(
                  It.navigator.userAgent
                ),
              i = function (u, d) {
                Pe(s.imageData, {
                  naturalWidth: u,
                  naturalHeight: d,
                  aspectRatio: u / d,
                }),
                  (s.initialImageData = Pe({}, s.imageData)),
                  (s.sizing = !1),
                  (s.sized = !0),
                  s.build();
              };
            if (n.naturalWidth && !o) {
              i(n.naturalWidth, n.naturalHeight);
              return;
            }
            var r = document.createElement("img"),
              a = document.body || document.documentElement;
            (this.sizingImage = r),
              (r.onload = function () {
                i(r.width, r.height), o || a.removeChild(r);
              }),
              (r.src = n.src),
              o ||
                ((r.style.cssText =
                  "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;"),
                a.appendChild(r));
          },
        },
        {
          key: "stop",
          value: function () {
            var s = this.image;
            (s.onload = null),
              (s.onerror = null),
              s.parentNode.removeChild(s),
              (this.image = null);
          },
        },
        {
          key: "build",
          value: function () {
            if (!(!this.sized || this.ready)) {
              var s = this.element,
                n = this.options,
                o = this.image,
                i = s.parentNode,
                r = document.createElement("div");
              r.innerHTML = wh;
              var a = r.querySelector(".".concat(Oe, "-container")),
                c = a.querySelector(".".concat(Oe, "-canvas")),
                u = a.querySelector(".".concat(Oe, "-drag-box")),
                d = a.querySelector(".".concat(Oe, "-crop-box")),
                f = d.querySelector(".".concat(Oe, "-face"));
              (this.container = i),
                (this.cropper = a),
                (this.canvas = c),
                (this.dragBox = u),
                (this.cropBox = d),
                (this.viewBox = a.querySelector(".".concat(Oe, "-view-box"))),
                (this.face = f),
                c.appendChild(o),
                Ve(s, ot),
                i.insertBefore(a, s.nextSibling),
                At(o, qr),
                this.initPreview(),
                this.bind(),
                (n.initialAspectRatio =
                  Math.max(0, n.initialAspectRatio) || NaN),
                (n.aspectRatio = Math.max(0, n.aspectRatio) || NaN),
                (n.viewMode =
                  Math.max(0, Math.min(3, Math.round(n.viewMode))) || 0),
                Ve(d, ot),
                n.guides ||
                  Ve(d.getElementsByClassName("".concat(Oe, "-dashed")), ot),
                n.center ||
                  Ve(d.getElementsByClassName("".concat(Oe, "-center")), ot),
                n.background && Ve(a, "".concat(Oe, "-bg")),
                n.highlight || Ve(f, fh),
                n.cropBoxMovable && (Ve(f, ei), ks(f, ws, Ai)),
                n.cropBoxResizable ||
                  (Ve(d.getElementsByClassName("".concat(Oe, "-line")), ot),
                  Ve(d.getElementsByClassName("".concat(Oe, "-point")), ot)),
                this.render(),
                (this.ready = !0),
                this.setDragMode(n.dragMode),
                n.autoCrop && this.crop(),
                this.setData(n.data),
                st(n.ready) && ut(s, ea, n.ready, { once: !0 }),
                Wn(s, ea);
            }
          },
        },
        {
          key: "unbuild",
          value: function () {
            if (this.ready) {
              (this.ready = !1), this.unbind(), this.resetPreview();
              var s = this.cropper.parentNode;
              s && s.removeChild(this.cropper), At(this.element, ot);
            }
          },
        },
        {
          key: "uncreate",
          value: function () {
            this.ready
              ? (this.unbuild(), (this.ready = !1), (this.cropped = !1))
              : this.sizing
              ? ((this.sizingImage.onload = null),
                (this.sizing = !1),
                (this.sized = !1))
              : this.reloading
              ? ((this.xhr.onabort = null), this.xhr.abort())
              : this.image && this.stop();
          },
        },
      ],
      [
        {
          key: "noConflict",
          value: function () {
            return (window.Cropper = Kh), t;
          },
        },
        {
          key: "setDefaults",
          value: function (s) {
            Pe(oa, An(s) && s);
          },
        },
      ]
    );
  })();
Pe(hc.prototype, jh, Hh, Fh, Vh, $h, zh);
const gt = (t, e) => {
    const s = t.__vccOpts || t;
    for (const [n, o] of e) s[n] = o;
    return s;
  },
  Gh = {
    name: "UserProfileModal",
    emits: ["complete", "close"],
    setup(t, { emit: e }) {
      Tn();
      const s = on(),
        n = B(0),
        o = B(""),
        i = B(""),
        r = B(""),
        a = B(null),
        c = B(null);
      let u = null;
      const d = B(!1),
        f = B([]),
        h = B([]),
        p = B([]),
        y = B([]),
        b = B([]),
        A = B(""),
        L = B(""),
        C = B(""),
        _ = B(""),
        v = B(""),
        D = B([]),
        w = B(null),
        R = B(null),
        S = () => {
          if (w.value) {
            const O = w.value,
              V = { top: O.scrollHeight, behavior: "smooth" };
            O.scrollTo(V);
          }
        };
      function E() {
        if (n.value === 0 && !o.value.trim()) {
          alert("请输入您的昵称");
          return;
        }
        n.value < 1 && n.value++;
      }
      function F() {
        n.value > 0 && n.value--;
      }
      function K(O) {
        if (O === 1 && n.value === 0 && !o.value.trim()) {
          alert("请先输入昵称！");
          return;
        }
        n.value = O;
      }
      function I() {
        const O = i.value || "",
          V = {
            avatar: O,
            nickname: o.value.trim(),
            faculty: A.value,
            major: C.value,
            className: _.value,
            isInitialized: !0,
          };
        try {
          O && localStorage.setItem("__last_avatar", O);
        } catch (le) {
          console.warn("无法将头像备份到localStorage:", le);
        }
        s.updateUserInfo(V);
      }
      function Y() {
        if (!o.value.trim()) {
          (n.value = 0), alert("请输入您的昵称");
          return;
        }
        I(), e("complete"), e("close");
      }
      function G() {
        a.value.click();
      }
      function H(O) {
        try {
          const V = O.target.files[0];
          if (!V) return;
          if (!V.type.startsWith("image/")) {
            alert("请选择图片文件!");
            return;
          }
          if (V.size > 20 * 1024 * 1024) {
            alert("图片大小不能超过20MB!");
            return;
          }
          const le = new FileReader();
          (le.onload = function (g) {
            (window._originalImageData = g.target.result),
              r.value && URL.revokeObjectURL(r.value),
              (r.value = URL.createObjectURL(V)),
              (d.value = !0),
              dt(() => {
                te();
              });
          }),
            (le.onerror = function () {
              alert("文件读取失败，请重试");
            }),
            le.readAsDataURL(V),
            (O.target.value = "");
        } catch (V) {
          console.error("处理文件错误:", V),
            alert("图片处理失败，请重试"),
            r.value && (URL.revokeObjectURL(r.value), (r.value = "")),
            (d.value = !1);
        }
      }
      function te() {
        try {
          if (!c.value) {
            window._originalImageData &&
              ((i.value = window._originalImageData), (d.value = !1));
            return;
          }
          u && (u.destroy(), (u = null)),
            (u = new hc(c.value, {
              aspectRatio: 1,
              viewMode: 2,
              dragMode: "move",
              autoCropArea: 1,
              restore: !1,
              modal: !0,
              guides: !0,
              center: !0,
              highlight: !1,
              cropBoxMovable: !0,
              cropBoxResizable: !0,
              toggleDragModeOnDblclick: !1,
              minCropBoxWidth: 100,
              minCropBoxHeight: 100,
              background: !0,
            }));
        } catch (O) {
          console.error("初始化裁剪器失败:", O),
            window._originalImageData && (i.value = window._originalImageData),
            (d.value = !1);
        }
      }
      async function X() {
        try {
          if (!u) {
            if (window._originalImageData) {
              (i.value = window._originalImageData), (d.value = !1);
              return;
            }
            alert("裁剪失败，请重新上传图片");
            return;
          }
          const O = u.getCroppedCanvas({
            width: 400,
            height: 400,
            fillColor: "#fff",
            imageSmoothingEnabled: !0,
            imageSmoothingQuality: "high",
          });
          if (!O) throw new Error("无法获取裁剪后的canvas");
          const V = O.toDataURL("image/jpeg", 0.85);
          if (!V || !V.startsWith("data:image/"))
            throw new Error("生成的base64数据无效");
          i.value = V;
        } catch (O) {
          console.error("裁剪确认失败:", O),
            window._originalImageData
              ? (i.value = window._originalImageData)
              : alert("头像处理失败，请重试");
        } finally {
          if ((r.value && (URL.revokeObjectURL(r.value), (r.value = "")), u))
            try {
              u.destroy();
            } catch (O) {
              console.error("清理裁剪器失败:", O);
            } finally {
              u = null;
            }
          d.value = !1;
        }
      }
      function ne() {
        if (
          ((d.value = !1),
          r.value && (URL.revokeObjectURL(r.value), (r.value = "")),
          u)
        )
          try {
            u.destroy();
          } catch (O) {
            console.error("清理裁剪器失败:", O);
          } finally {
            u = null;
          }
      }
      function ue(O) {
        O && O.stopPropagation(),
          (i.value = ""),
          window._originalImageData && delete window._originalImageData;
      }
      async function Re() {
        try {
          const O = await fetch("./data/all_timetables.json");
          if (!O.ok) throw new Error(`HTTP error! Status: ${O.status}`);
          f.value = await O.json();
          const V = [...new Set(f.value.map((le) => le.院系))];
          h.value = V;
        } catch (O) {
          console.error("加载课表数据失败:", O), (f.value = []);
        }
      }
      function me() {
        if (!v.value || v.value.length < 2) {
          D.value = [];
          return;
        }
        const O = v.value.toLowerCase(),
          V = [];
        f.value.forEach((le) => {
          const g = {
            faculty: le.院系,
            grade: le.年级,
            major: le.课表.专业,
            className: le.课表.班级,
          };
          `${g.faculty}${g.grade}${g.major}${g.className}`
            .toLowerCase()
            .includes(O) && V.push(g);
        }),
          (D.value = V.slice(0, 10));
      }
      function ke(O) {
        (A.value = O.faculty),
          We(),
          dt(() => {
            (L.value = O.grade),
              ce(),
              dt(() => {
                (C.value = O.major),
                  De(),
                  dt(() => {
                    (_.value = O.className),
                      (v.value = ""),
                      (D.value = []),
                      S();
                  });
              });
          });
      }
      function We() {
        if (
          ((L.value = ""),
          (C.value = ""),
          (_.value = ""),
          (y.value = []),
          (b.value = []),
          !A.value)
        )
          return;
        const O = [
          ...new Set(
            f.value.filter((V) => V.院系 === A.value).map((V) => V.年级)
          ),
        ];
        (p.value = O),
          dt(() => {
            S();
          });
      }
      function ce() {
        if (
          ((C.value = ""), (_.value = ""), (b.value = []), !A.value || !L.value)
        )
          return;
        const O = [
          ...new Set(
            f.value
              .filter((V) => V.院系 === A.value && V.年级 === L.value)
              .map((V) => V.课表.专业)
          ),
        ];
        (y.value = O),
          dt(() => {
            S();
          });
      }
      function De() {
        if (((_.value = ""), !A.value || !L.value || !C.value)) return;
        const O = [
          ...new Set(
            f.value
              .filter(
                (V) =>
                  V.院系 === A.value &&
                  V.年级 === L.value &&
                  V.课表.专业 === C.value
              )
              .map((V) => V.课表.班级)
          ),
        ];
        (b.value = O),
          dt(() => {
            S();
          });
      }
      function be(O) {
        if (!O) return {};
        const V = O.getBoundingClientRect(),
          le = window.innerHeight,
          g = le - V.bottom,
          m = V.top;
        return g < 240 && m > g
          ? {
              bottom: `${le - V.top + 5}px`,
              left: `${V.left}px`,
              width: `${V.width}px`,
              position: "fixed",
            }
          : {
              top: `${V.bottom + 5}px`,
              left: `${V.left}px`,
              width: `${V.width}px`,
              position: "fixed",
            };
      }
      function U(O) {
        R.value === O ? (R.value = null) : (R.value = O);
      }
      function Z(O, V) {
        switch (O) {
          case "faculty":
            (A.value = V), We();
            break;
          case "grade":
            (L.value = V), ce();
            break;
          case "major":
            (C.value = V), De();
            break;
          case "class":
            _.value = V;
            break;
        }
        R.value = null;
      }
      return (
        mt(() => {
          Re(),
            s.nickname && (o.value = s.nickname),
            s.avatar && (i.value = s.avatar),
            s.faculty &&
              ((A.value = s.faculty),
              We(),
              setTimeout(() => {
                s.major && ((C.value = s.major), De()),
                  s.className && (_.value = s.className);
              }, 500)),
            document.addEventListener("click", (O) => {
              O.target.closest(".custom-select") || (R.value = null);
            });
        }),
        kn(() => {
          if (u)
            try {
              u.destroy();
            } catch (O) {
              console.error("裁剪器清理失败:", O);
            } finally {
              u = null;
            }
          r.value && URL.revokeObjectURL(r.value);
        }),
        {
          currentStep: n,
          nickname: o,
          avatarPreview: i,
          fileInput: a,
          cropperImage: c,
          isCropping: d,
          tempImageUrl: r,
          faculties: h,
          grades: p,
          majors: y,
          classes: b,
          selectedFaculty: A,
          selectedGrade: L,
          selectedMajor: C,
          selectedClass: _,
          scrollContainer: w,
          searchQuery: v,
          searchResults: D,
          openDropdown: R,
          getDropdownPosition: be,
          nextStep: E,
          prevStep: F,
          switchStep: K,
          submitForm: Y,
          triggerFileInput: G,
          handleFileChange: H,
          confirmCrop: X,
          cancelCropping: ne,
          deleteAvatar: ue,
          onSearch: me,
          selectSearchResult: ke,
          onFacultyChange: We,
          onGradeChange: ce,
          onMajorChange: De,
          toggleDropdown: U,
          selectOption: Z,
          scrollToBottom: S,
        }
      );
    },
  },
  Yh = { class: "modal-backdrop" },
  qh = { class: "modal-content user-profile-modal" },
  Xh = { class: "modal-header" },
  Jh = { class: "modal-body" },
  Qh = { class: "user-profile-steps" },
  Zh = { class: "step-indicators" },
  ep = { key: 0, class: "step-content" },
  tp = { class: "form-group avatar-upload" },
  np = ["src"],
  sp = { class: "avatar-actions" },
  op = { key: 1, class: "avatar-placeholder" },
  ip = { key: 1, class: "cropper-container" },
  rp = { class: "cropper-wrapper" },
  ap = ["src"],
  lp = { class: "cropper-actions" },
  cp = { class: "form-group" },
  up = { class: "form-actions" },
  dp = { key: 1, class: "step-content" },
  fp = { class: "form-group search-box" },
  hp = { class: "search-input-container" },
  pp = { key: 0, class: "search-results" },
  mp = ["onClick"],
  gp = { class: "result-main" },
  vp = { class: "result-detail" },
  yp = { class: "inside-scroll-container", ref: "scrollContainer" },
  bp = { class: "form-group" },
  wp = { class: "select-display" },
  kp = { key: 0 },
  Sp = { key: 1, class: "placeholder" },
  Tp = ["onClick"],
  Cp = { key: 0, class: "form-group" },
  _p = { class: "select-display" },
  Dp = { key: 0 },
  xp = { key: 1, class: "placeholder" },
  Mp = ["onClick"],
  Ep = { key: 1, class: "form-group" },
  Ap = { class: "select-display" },
  Ip = { key: 0 },
  Rp = { key: 1, class: "placeholder" },
  Op = ["onClick"],
  Pp = { key: 2, class: "form-group" },
  Np = { class: "select-display" },
  Lp = { key: 0 },
  Bp = { key: 1, class: "placeholder" },
  Wp = ["onClick"],
  Up = { class: "form-actions" };
function jp(t, e, s, n, o, i) {
  return (
    k(),
    M("div", Yh, [
      l("div", qh, [
        l("div", Xh, [
          e[23] || (e[23] = l("h2", null, "个人信息", -1)),
          l("i", {
            class: "fas fa-times close-modal",
            onClick: e[0] || (e[0] = (r) => t.$emit("close")),
          }),
        ]),
        l("div", Jh, [
          l("div", Qh, [
            l("div", Zh, [
              l(
                "div",
                {
                  class: se([
                    "step-indicator",
                    { active: n.currentStep === 0 },
                  ]),
                  onClick: e[1] || (e[1] = (r) => n.switchStep(0)),
                  style: { cursor: "pointer" },
                },
                " 基本信息 ",
                2
              ),
              l(
                "div",
                {
                  class: se([
                    "step-indicator",
                    { active: n.currentStep === 1 },
                  ]),
                  onClick: e[2] || (e[2] = (r) => n.switchStep(1)),
                  style: { cursor: "pointer" },
                },
                " 院系信息 ",
                2
              ),
            ]),
            n.currentStep === 0
              ? (k(),
                M("div", ep, [
                  l("div", tp, [
                    n.isCropping
                      ? (k(),
                        M("div", ip, [
                          l("div", rp, [
                            l(
                              "img",
                              {
                                ref: "cropperImage",
                                src: n.tempImageUrl,
                                alt: "待裁剪的图片",
                                style: { "max-width": "100%" },
                              },
                              null,
                              8,
                              ap
                            ),
                          ]),
                          l("div", lp, [
                            l(
                              "button",
                              {
                                class: "btn btn-outline",
                                onClick:
                                  e[5] ||
                                  (e[5] = (...r) =>
                                    n.cancelCropping && n.cancelCropping(...r)),
                              },
                              "取消"
                            ),
                            l(
                              "button",
                              {
                                class: "btn btn-primary",
                                onClick:
                                  e[6] ||
                                  (e[6] = (...r) =>
                                    n.confirmCrop && n.confirmCrop(...r)),
                              },
                              "确定"
                            ),
                          ]),
                        ]))
                      : (k(),
                        M(
                          "div",
                          {
                            key: 0,
                            class: "avatar-preview",
                            onClick:
                              e[4] ||
                              (e[4] = (...r) =>
                                n.triggerFileInput && n.triggerFileInput(...r)),
                          },
                          [
                            n.avatarPreview
                              ? (k(),
                                M(
                                  he,
                                  { key: 0 },
                                  [
                                    l(
                                      "img",
                                      {
                                        src: n.avatarPreview,
                                        alt: "头像预览",
                                        class: "avatar-image",
                                      },
                                      null,
                                      8,
                                      np
                                    ),
                                    l("div", sp, [
                                      l(
                                        "button",
                                        {
                                          class: "avatar-action-btn",
                                          onClick:
                                            e[3] ||
                                            (e[3] = Ce(
                                              (...r) =>
                                                n.deleteAvatar &&
                                                n.deleteAvatar(...r),
                                              ["stop"]
                                            )),
                                        },
                                        e[24] ||
                                          (e[24] = [
                                            l(
                                              "i",
                                              { class: "fas fa-trash" },
                                              null,
                                              -1
                                            ),
                                          ])
                                      ),
                                    ]),
                                  ],
                                  64
                                ))
                              : (k(),
                                M(
                                  "div",
                                  op,
                                  e[25] ||
                                    (e[25] = [
                                      l(
                                        "i",
                                        { class: "fas fa-user" },
                                        null,
                                        -1
                                      ),
                                      l("span", null, "点击添加头像", -1),
                                    ])
                                )),
                          ]
                        )),
                  ]),
                  l("div", cp, [
                    e[26] || (e[26] = l("label", null, "昵称", -1)),
                    $e(
                      l(
                        "input",
                        {
                          type: "text",
                          "onUpdate:modelValue":
                            e[7] || (e[7] = (r) => (n.nickname = r)),
                          placeholder: "请输入您的昵称",
                          class: "form-control",
                        },
                        null,
                        512
                      ),
                      [[rt, n.nickname]]
                    ),
                  ]),
                  l("div", up, [
                    l(
                      "button",
                      {
                        type: "button",
                        class: "btn btn-outline",
                        onClick: e[8] || (e[8] = (r) => t.$emit("close")),
                      },
                      "取消"
                    ),
                    l(
                      "button",
                      {
                        type: "button",
                        class: "btn btn-primary",
                        onClick:
                          e[9] ||
                          (e[9] = (...r) => n.nextStep && n.nextStep(...r)),
                      },
                      "下一步"
                    ),
                  ]),
                  l(
                    "input",
                    {
                      type: "file",
                      ref: "fileInput",
                      style: { display: "none" },
                      accept: "image/*",
                      onChange:
                        e[10] ||
                        (e[10] = (...r) =>
                          n.handleFileChange && n.handleFileChange(...r)),
                    },
                    null,
                    544
                  ),
                ]))
              : Q("", !0),
            n.currentStep === 1
              ? (k(),
                M("div", dp, [
                  l("div", fp, [
                    e[28] || (e[28] = l("label", null, "搜索班级", -1)),
                    l("div", hp, [
                      e[27] ||
                        (e[27] = l(
                          "i",
                          { class: "search-icon fas fa-search" },
                          null,
                          -1
                        )),
                      $e(
                        l(
                          "input",
                          {
                            type: "text",
                            "onUpdate:modelValue":
                              e[11] || (e[11] = (r) => (n.searchQuery = r)),
                            placeholder: "直接输入班级名称",
                            onInput:
                              e[12] ||
                              (e[12] = (...r) =>
                                n.onSearch && n.onSearch(...r)),
                            class: "form-control",
                          },
                          null,
                          544
                        ),
                        [[rt, n.searchQuery]]
                      ),
                    ]),
                    n.searchResults.length > 0
                      ? (k(),
                        M("div", pp, [
                          (k(!0),
                          M(
                            he,
                            null,
                            Ne(
                              n.searchResults,
                              (r) => (
                                k(),
                                M(
                                  "div",
                                  {
                                    key: r.className,
                                    class: "search-result-item",
                                    onClick: (a) => n.selectSearchResult(r),
                                  },
                                  [
                                    l(
                                      "div",
                                      gp,
                                      P(r.faculty) + " - " + P(r.className),
                                      1
                                    ),
                                    l(
                                      "div",
                                      vp,
                                      P(r.grade) + " / " + P(r.major),
                                      1
                                    ),
                                  ],
                                  8,
                                  mp
                                )
                              )
                            ),
                            128
                          )),
                        ]))
                      : Q("", !0),
                  ]),
                  l(
                    "div",
                    yp,
                    [
                      l("div", bp, [
                        e[29] || (e[29] = l("label", null, "院系", -1)),
                        e[30] || (e[30] = we()),
                        l(
                          "div",
                          {
                            class: se([
                              "custom-select",
                              { active: n.openDropdown === "faculty" },
                            ]),
                            ref: "facultySelect",
                            onClick:
                              e[14] ||
                              (e[14] = (r) => n.toggleDropdown("faculty")),
                          },
                          [
                            l("div", wp, [
                              n.selectedFaculty
                                ? (k(), M("span", kp, P(n.selectedFaculty), 1))
                                : (k(), M("span", Sp, "请选择院系")),
                              l(
                                "i",
                                {
                                  class: se([
                                    "fas fa-chevron-down select-arrow",
                                    { rotate: n.openDropdown === "faculty" },
                                  ]),
                                },
                                null,
                                2
                              ),
                            ]),
                            n.openDropdown === "faculty"
                              ? (k(),
                                M(
                                  "div",
                                  {
                                    key: 0,
                                    class: "select-options",
                                    style: yt(
                                      n.getDropdownPosition(
                                        t.$refs.facultySelect
                                      )
                                    ),
                                  },
                                  [
                                    l(
                                      "div",
                                      {
                                        class: se([
                                          "select-option",
                                          {
                                            selected: n.selectedFaculty === "",
                                          },
                                        ]),
                                        onClick:
                                          e[13] ||
                                          (e[13] = Ce(
                                            (r) =>
                                              n.selectOption("faculty", ""),
                                            ["stop"]
                                          )),
                                      },
                                      " 请选择院系 ",
                                      2
                                    ),
                                    (k(!0),
                                    M(
                                      he,
                                      null,
                                      Ne(
                                        n.faculties,
                                        (r) => (
                                          k(),
                                          M(
                                            "div",
                                            {
                                              key: r,
                                              class: se([
                                                "select-option",
                                                {
                                                  selected:
                                                    n.selectedFaculty === r,
                                                },
                                              ]),
                                              onClick: Ce(
                                                (a) =>
                                                  n.selectOption("faculty", r),
                                                ["stop"]
                                              ),
                                            },
                                            P(r),
                                            11,
                                            Tp
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                  ],
                                  4
                                ))
                              : Q("", !0),
                          ],
                          2
                        ),
                      ]),
                      n.selectedFaculty
                        ? (k(),
                          M("div", Cp, [
                            e[31] || (e[31] = l("label", null, "年级", -1)),
                            e[32] || (e[32] = we()),
                            l(
                              "div",
                              {
                                class: se([
                                  "custom-select",
                                  { active: n.openDropdown === "grade" },
                                ]),
                                ref: "gradeSelect",
                                onClick:
                                  e[16] ||
                                  (e[16] = (r) => n.toggleDropdown("grade")),
                              },
                              [
                                l("div", _p, [
                                  n.selectedGrade
                                    ? (k(),
                                      M("span", Dp, P(n.selectedGrade), 1))
                                    : (k(), M("span", xp, "请选择年级")),
                                  l(
                                    "i",
                                    {
                                      class: se([
                                        "fas fa-chevron-down select-arrow",
                                        { rotate: n.openDropdown === "grade" },
                                      ]),
                                    },
                                    null,
                                    2
                                  ),
                                ]),
                                n.openDropdown === "grade"
                                  ? (k(),
                                    M(
                                      "div",
                                      {
                                        key: 0,
                                        class: "select-options",
                                        style: yt(
                                          n.getDropdownPosition(
                                            t.$refs.gradeSelect
                                          )
                                        ),
                                      },
                                      [
                                        l(
                                          "div",
                                          {
                                            class: se([
                                              "select-option",
                                              {
                                                selected:
                                                  n.selectedGrade === "",
                                              },
                                            ]),
                                            onClick:
                                              e[15] ||
                                              (e[15] = Ce(
                                                (r) =>
                                                  n.selectOption("grade", ""),
                                                ["stop"]
                                              )),
                                          },
                                          " 请选择年级 ",
                                          2
                                        ),
                                        (k(!0),
                                        M(
                                          he,
                                          null,
                                          Ne(
                                            n.grades,
                                            (r) => (
                                              k(),
                                              M(
                                                "div",
                                                {
                                                  key: r,
                                                  class: se([
                                                    "select-option",
                                                    {
                                                      selected:
                                                        n.selectedGrade === r,
                                                    },
                                                  ]),
                                                  onClick: Ce(
                                                    (a) =>
                                                      n.selectOption(
                                                        "grade",
                                                        r
                                                      ),
                                                    ["stop"]
                                                  ),
                                                },
                                                P(r),
                                                11,
                                                Mp
                                              )
                                            )
                                          ),
                                          128
                                        )),
                                      ],
                                      4
                                    ))
                                  : Q("", !0),
                              ],
                              2
                            ),
                          ]))
                        : Q("", !0),
                      n.selectedGrade
                        ? (k(),
                          M("div", Ep, [
                            e[33] || (e[33] = l("label", null, "专业", -1)),
                            e[34] || (e[34] = we()),
                            l(
                              "div",
                              {
                                class: se([
                                  "custom-select",
                                  { active: n.openDropdown === "major" },
                                ]),
                                ref: "majorSelect",
                                onClick:
                                  e[18] ||
                                  (e[18] = (r) => n.toggleDropdown("major")),
                              },
                              [
                                l("div", Ap, [
                                  n.selectedMajor
                                    ? (k(),
                                      M("span", Ip, P(n.selectedMajor), 1))
                                    : (k(), M("span", Rp, "请选择专业")),
                                  l(
                                    "i",
                                    {
                                      class: se([
                                        "fas fa-chevron-down select-arrow",
                                        { rotate: n.openDropdown === "major" },
                                      ]),
                                    },
                                    null,
                                    2
                                  ),
                                ]),
                                n.openDropdown === "major"
                                  ? (k(),
                                    M(
                                      "div",
                                      {
                                        key: 0,
                                        class: "select-options",
                                        style: yt(
                                          n.getDropdownPosition(
                                            t.$refs.majorSelect
                                          )
                                        ),
                                      },
                                      [
                                        l(
                                          "div",
                                          {
                                            class: se([
                                              "select-option",
                                              {
                                                selected:
                                                  n.selectedMajor === "",
                                              },
                                            ]),
                                            onClick:
                                              e[17] ||
                                              (e[17] = Ce(
                                                (r) =>
                                                  n.selectOption("major", ""),
                                                ["stop"]
                                              )),
                                          },
                                          " 请选择专业 ",
                                          2
                                        ),
                                        (k(!0),
                                        M(
                                          he,
                                          null,
                                          Ne(
                                            n.majors,
                                            (r) => (
                                              k(),
                                              M(
                                                "div",
                                                {
                                                  key: r,
                                                  class: se([
                                                    "select-option",
                                                    {
                                                      selected:
                                                        n.selectedMajor === r,
                                                    },
                                                  ]),
                                                  onClick: Ce(
                                                    (a) =>
                                                      n.selectOption(
                                                        "major",
                                                        r
                                                      ),
                                                    ["stop"]
                                                  ),
                                                },
                                                P(r),
                                                11,
                                                Op
                                              )
                                            )
                                          ),
                                          128
                                        )),
                                      ],
                                      4
                                    ))
                                  : Q("", !0),
                              ],
                              2
                            ),
                          ]))
                        : Q("", !0),
                      n.selectedMajor
                        ? (k(),
                          M("div", Pp, [
                            e[35] || (e[35] = l("label", null, "班级", -1)),
                            e[36] || (e[36] = we()),
                            l(
                              "div",
                              {
                                class: se([
                                  "custom-select",
                                  { active: n.openDropdown === "class" },
                                ]),
                                ref: "classSelect",
                                onClick:
                                  e[20] ||
                                  (e[20] = (r) => n.toggleDropdown("class")),
                              },
                              [
                                l("div", Np, [
                                  n.selectedClass
                                    ? (k(),
                                      M("span", Lp, P(n.selectedClass), 1))
                                    : (k(), M("span", Bp, "请选择班级")),
                                  l(
                                    "i",
                                    {
                                      class: se([
                                        "fas fa-chevron-down select-arrow",
                                        { rotate: n.openDropdown === "class" },
                                      ]),
                                    },
                                    null,
                                    2
                                  ),
                                ]),
                                n.openDropdown === "class"
                                  ? (k(),
                                    M(
                                      "div",
                                      {
                                        key: 0,
                                        class: "select-options",
                                        style: yt(
                                          n.getDropdownPosition(
                                            t.$refs.classSelect
                                          )
                                        ),
                                      },
                                      [
                                        l(
                                          "div",
                                          {
                                            class: se([
                                              "select-option",
                                              {
                                                selected:
                                                  n.selectedClass === "",
                                              },
                                            ]),
                                            onClick:
                                              e[19] ||
                                              (e[19] = Ce(
                                                (r) =>
                                                  n.selectOption("class", ""),
                                                ["stop"]
                                              )),
                                          },
                                          " 请选择班级 ",
                                          2
                                        ),
                                        (k(!0),
                                        M(
                                          he,
                                          null,
                                          Ne(
                                            n.classes,
                                            (r) => (
                                              k(),
                                              M(
                                                "div",
                                                {
                                                  key: r,
                                                  class: se([
                                                    "select-option",
                                                    {
                                                      selected:
                                                        n.selectedClass === r,
                                                    },
                                                  ]),
                                                  onClick: Ce(
                                                    (a) =>
                                                      n.selectOption(
                                                        "class",
                                                        r
                                                      ),
                                                    ["stop"]
                                                  ),
                                                },
                                                P(r),
                                                11,
                                                Wp
                                              )
                                            )
                                          ),
                                          128
                                        )),
                                      ],
                                      4
                                    ))
                                  : Q("", !0),
                              ],
                              2
                            ),
                          ]))
                        : Q("", !0),
                    ],
                    512
                  ),
                  e[37] ||
                    (e[37] = l(
                      "div",
                      { class: "info-message" },
                      [
                        l("i", { class: "fas fa-info-circle" }),
                        l(
                          "span",
                          null,
                          "不选择院系信息也可以使用基本功能，但无法使用课表相关功能"
                        ),
                      ],
                      -1
                    )),
                  l("div", Up, [
                    l(
                      "button",
                      {
                        type: "button",
                        class: "btn btn-outline",
                        onClick:
                          e[21] ||
                          (e[21] = (...r) => n.prevStep && n.prevStep(...r)),
                      },
                      "上一步"
                    ),
                    l(
                      "button",
                      {
                        type: "button",
                        class: "btn btn-primary",
                        onClick:
                          e[22] ||
                          (e[22] = (...r) =>
                            n.submitForm && n.submitForm(...r)),
                      },
                      "完成"
                    ),
                  ]),
                ]))
              : Q("", !0),
          ]),
        ]),
      ]),
    ])
  );
}
const Oi = gt(Gh, [
    ["render", jp],
    ["__scopeId", "data-v-5c8e2b19"],
  ]),
  Hp = {
    components: { UserProfileModal: Oi },
    setup() {
      const t = Tn(),
        e = lo(),
        s = on(),
        n = ie(() => e.theme),
        o = B(!1);
      function i() {
        s.isInitialized
          ? window.location.pathname === "/" && t.push("/tasks")
          : (o.value = !0);
      }
      function r() {
        o.value = !1;
      }
      return (
        mt(() => {
          i();
        }),
        { currentTheme: n, showUserInitModal: o, handleUserInitComplete: r }
      );
    },
  },
  Fp = ["data-theme"],
  Vp = { class: "tab-bar" },
  $p = { class: "tab-bar-inner" };
function zp(t, e, s, n, o, i) {
  const r = Wt("router-view"),
    a = Wt("router-link");
  return (
    k(),
    M(
      "div",
      { class: "app-container", "data-theme": n.currentTheme },
      [
        pe(r, null, {
          default: Ae(({ Component: c }) => [
            pe(
              Ke,
              { name: "component", mode: "out-in" },
              { default: Ae(() => [(k(), Ie(wu(c)))]), _: 2 },
              1024
            ),
          ]),
          _: 1,
        }),
        l("div", Vp, [
          l("div", $p, [
            pe(
              a,
              { to: "/tasks", class: "tab-item", "active-class": "active" },
              {
                default: Ae(
                  () =>
                    e[0] ||
                    (e[0] = [
                      l("i", { class: "tab-icon fas fa-list" }, null, -1),
                      l("span", { class: "tab-label" }, "任务", -1),
                    ])
                ),
                _: 1,
              }
            ),
            pe(
              a,
              {
                to: "/statistics",
                class: "tab-item",
                "active-class": "active",
              },
              {
                default: Ae(
                  () =>
                    e[1] ||
                    (e[1] = [
                      l("i", { class: "tab-icon fas fa-chart-bar" }, null, -1),
                      l("span", { class: "tab-label" }, "统计", -1),
                    ])
                ),
                _: 1,
              }
            ),
            pe(
              a,
              { to: "/settings", class: "tab-item", "active-class": "active" },
              {
                default: Ae(
                  () =>
                    e[2] ||
                    (e[2] = [
                      l("i", { class: "tab-icon fas fa-gear" }, null, -1),
                      l("span", { class: "tab-label" }, "设置", -1),
                    ])
                ),
                _: 1,
              }
            ),
          ]),
        ]),
      ],
      8,
      Fp
    )
  );
}
const Kp = gt(Hp, [["render", zp]]),
  Gp = "modulepreload",
  Yp = function (t) {
    return "/" + t;
  },
  la = {},
  qp = function (e, s, n) {
    let o = Promise.resolve();
    if (s && s.length > 0) {
      document.getElementsByTagName("link");
      const r = document.querySelector("meta[property=csp-nonce]"),
        a =
          (r == null ? void 0 : r.nonce) ||
          (r == null ? void 0 : r.getAttribute("nonce"));
      o = Promise.allSettled(
        s.map((c) => {
          if (((c = Yp(c)), c in la)) return;
          la[c] = !0;
          const u = c.endsWith(".css"),
            d = u ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${c}"]${d}`)) return;
          const f = document.createElement("link");
          if (
            ((f.rel = u ? "stylesheet" : Gp),
            u || (f.as = "script"),
            (f.crossOrigin = ""),
            (f.href = c),
            a && f.setAttribute("nonce", a),
            document.head.appendChild(f),
            u)
          )
            return new Promise((h, p) => {
              f.addEventListener("load", h),
                f.addEventListener("error", () =>
                  p(new Error(`Unable to preload CSS for ${c}`))
                );
            });
        })
      );
    }
    function i(r) {
      const a = new Event("vite:preloadError", { cancelable: !0 });
      if (((a.payload = r), window.dispatchEvent(a), !a.defaultPrevented))
        throw r;
    }
    return o.then((r) => {
      for (const a of r || []) a.status === "rejected" && i(a.reason);
      return e().catch(i);
    });
  },
  ho = Sn("tasks", () => {
    const t = B([]),
      e = ie(() => {
        const h = { today: [], tomorrow: [], future: [], completed: [] },
          p = new Date();
        p.setHours(0, 0, 0, 0);
        const y = new Date(p);
        return (
          y.setDate(y.getDate() + 1),
          t.value.forEach((b) => {
            const A = new Date(b.date);
            A.setHours(0, 0, 0, 0),
              b.completed
                ? h.completed.push(b)
                : A.getTime() === p.getTime()
                ? h.today.push(b)
                : A.getTime() === y.getTime()
                ? h.tomorrow.push(b)
                : h.future.push(b);
          }),
          h
        );
      });
    function s(h) {
      const p = {
        id: Date.now().toString(),
        maintask: h.maintask,
        description: h.description || "",
        duration: parseInt(h.duration) || 0,
        date: h.date || new Date().toISOString().split("T")[0],
        begintime: h.begintime || "",
        endtime: h.endtime || "",
        Restfrequency: h.Restfrequency || null,
        steps: h.steps || [],
        completed: !1,
        createdAt: new Date().toISOString(),
      };
      return !p.maintask || !p.date
        ? (console.error("任务添加失败：缺少必要字段", p), null)
        : (t.value.push(p), u(), console.log("新任务已添加:", p), p);
    }
    function n(h) {
      const p = t.value.find((y) => y.id === h);
      return p && !p.completed
        ? ((p.completed = !0),
          (p.completedAt = new Date().toISOString()),
          p.steps &&
            p.steps.length > 0 &&
            p.steps.forEach((y) => {
              y.completed = !0;
            }),
          u(),
          !0)
        : !1;
    }
    function o(h) {
      const p = t.value.find((y) => y.id === h);
      p &&
        ((p.completed = !1),
        (p.completedAt = null),
        p.steps &&
          p.steps.length > 0 &&
          p.steps.forEach((y) => {
            y.completed = !1;
          }),
        u(),
        console.log("任务已恢复:", p.maintask));
    }
    function i(h) {
      const p = t.value.findIndex((y) => y.id === h);
      p !== -1 && (t.value.splice(p, 1), u());
    }
    function r(h) {
      const p = t.value.find((y) => y.id === h);
      p && ((p.completedPomodoros += 1), u());
    }
    function a(h, p) {
      const y = t.value.find((b) => b.id === h);
      if (y && y.steps && y.steps[p] !== void 0) {
        const b = !!y.steps[p].completed;
        y.steps[p].completed = !b;
        const A = y.steps.every((L) => L.completed);
        return (
          A && !y.completed
            ? ((y.completed = !0), (y.completedAt = new Date().toISOString()))
            : !A && y.completed && ((y.completed = !1), (y.completedAt = null)),
          u(),
          !0
        );
      }
      return !1;
    }
    function c(h) {
      const p = t.value.findIndex((y) => y.id === h.id);
      if (p !== -1) {
        const y = t.value[p],
          b = {
            ...h,
            createdAt: y.createdAt,
            completed: y.completed,
            completedAt: y.completedAt,
          };
        return (t.value[p] = b), u(), console.log("任务已更新:", b), !0;
      }
      return console.error("任务更新失败：未找到任务ID", h.id), !1;
    }
    function u() {
      try {
        localStorage.setItem("pomodoro-tasks", JSON.stringify(t.value)),
          console.log("任务已保存到本地存储，当前任务数:", t.value.length);
      } catch (h) {
        console.error("保存任务到本地存储失败:", h);
      }
    }
    function d() {
      try {
        const h = localStorage.getItem("pomodoro-tasks");
        h
          ? ((t.value = JSON.parse(h)),
            console.log("从本地存储加载任务成功，任务数:", t.value.length))
          : console.log("本地存储中没有找到任务");
      } catch (h) {
        console.error("从本地存储加载任务失败:", h), (t.value = []);
      }
    }
    function f(h) {
      return t.value.find((p) => p.id === h) || null;
    }
    return (
      d(),
      {
        tasks: t,
        tasksByDate: e,
        addTask: s,
        completeTask: n,
        restoreTask: o,
        deleteTask: i,
        incrementTaskPomodoro: r,
        toggleStepCompletion: a,
        updateTask: c,
        getTaskById: f,
      }
    );
  }),
  us = Sn("points", () => {
    const t = B(0),
      e = ie(() => Math.floor(t.value / 30)),
      s = ie(() => t.value % 30);
    function n(a) {
      if (!a || a <= 0) {
        console.warn("尝试添加无效的专注时间:", a);
        return;
      }
      return (
        console.log(`添加专注时间: ${a}分钟，当前累计: ${t.value}分钟`),
        (t.value += a),
        console.log(`累加后总时间: ${t.value}分钟，可获得积分: ${e.value}`),
        i(),
        { total: t.value, points: e.value, remaining: s.value }
      );
    }
    function o() {
      if (
        (console.log(
          `开始结算积分，当前累计时间: ${t.value}分钟，可获得积分: ${e.value}`
        ),
        e.value <= 0)
      )
        return (
          console.log("没有足够的积分可以结算"),
          { points: 0, remaining: t.value }
        );
      const a = on(),
        c = e.value;
      return (
        console.log(`结算积分: ${c}，余下分钟: ${s.value}`),
        a.addPoints(c),
        (t.value = s.value),
        i(),
        { points: c, remaining: s.value }
      );
    }
    function i() {
      localStorage.setItem(
        "pomodoro-points-data",
        JSON.stringify({ accumulatedMinutes: t.value })
      );
    }
    function r() {
      const a = localStorage.getItem("pomodoro-points-data");
      if (a)
        try {
          const c = JSON.parse(a);
          c &&
            typeof c.accumulatedMinutes == "number" &&
            (t.value = c.accumulatedMinutes);
        } catch (c) {
          console.error("从本地存储加载积分数据失败:", c);
        }
    }
    return (
      r(),
      {
        accumulatedMinutes: t,
        pointsToReward: e,
        remainingMinutes: s,
        addFocusMinutes: n,
        settlePoints: o,
        loadPointsData: r,
      }
    );
  }),
  Pi = Sn("timer", () => {
    const t = B(!1),
      e = B(!1),
      s = B("focus"),
      n = B(0),
      o = B(null),
      i = B(null),
      r = B(0),
      a = lo(),
      c = ie(() => {
        const S = Math.floor(n.value / 60),
          E = n.value % 60;
        return `${S.toString().padStart(2, "0")}:${E.toString().padStart(
          2,
          "0"
        )}`;
      });
    function u() {
      (t.value && o.value) ||
        ((t.value = !0),
        (e.value = !1),
        (o.value = setInterval(() => {
          n.value > 0 ? n.value-- : h();
        }, 1e3)));
    }
    function d() {
      !o.value ||
        !t.value ||
        (clearInterval(o.value),
        (o.value = null),
        (t.value = !1),
        (e.value = !0));
    }
    function f() {
      if (
        (o.value && (clearInterval(o.value), (o.value = null)),
        (t.value = !1),
        (e.value = !1),
        (n.value = s.value === "focus" ? a.focusTime * 60 : a.restTime * 60),
        i.value)
      )
        if (i.value.steps && i.value.steps.length > 0) {
          const S = i.value.steps[r.value];
          n.value = S.duration * 60;
        } else n.value = i.value.duration * 60;
      else
        s.value === "focus"
          ? (n.value = a.focusTime * 60)
          : (n.value = a.restTime * 60);
      (t.value = !1), (e.value = !1);
    }
    function h() {
      o.value && (clearInterval(o.value), (o.value = null)),
        window.dispatchEvent(new Event("timerCompleted")),
        p();
    }
    function p() {
      const S = ho();
      i.value && i.value.steps && i.value.steps.length > 0 ? y(S) : _(S);
    }
    function y(S) {
      if (r.value < i.value.steps.length) {
        const E = i.value.steps[r.value];
        S.toggleStepCompletion(i.value.id, r.value);
        const F = b();
        F !== -1 ? (A(E), L(F)) : C(S);
      }
    }
    function b() {
      if (!i.value || !i.value.steps || i.value.steps.length === 0) return -1;
      for (let S = r.value + 1; S < i.value.steps.length; S++)
        if (!i.value.steps[S].completed) return S;
      for (let S = 0; S < r.value; S++)
        if (!i.value.steps[S].completed) return S;
      return -1;
    }
    function A(S) {
      let E = "complete";
      const F = b();
      F !== -1 &&
        i.value &&
        i.value.steps &&
        (E = i.value.steps[F].isrest ? "rest" : "focus"),
        window.dispatchEvent(
          new CustomEvent("stepCompleted", {
            detail: {
              currentType: S.isrest ? "rest" : "focus",
              nextType: E,
              currentStep: S,
              nextStepIndex: F,
            },
          })
        );
    }
    function L(S) {
      r.value = S;
      const E = i.value.steps[S];
      (n.value = E.duration * 60),
        (s.value = E.isrest ? "rest" : "focus"),
        (t.value = !1),
        (e.value = !1);
    }
    function C(S) {
      if (i.value && !i.value.completed) {
        const E = us(),
          F = E.pointsToReward;
        console.log("多步骤任务完成检查，当前可结算积分:", F),
          S.completeTask(i.value.id);
        const K = E.settlePoints();
        console.log("多步骤任务完成积分结算结果:", K),
          window.dispatchEvent(
            new CustomEvent("pointsSettled", {
              detail: {
                points: K.points,
                remaining: K.remaining,
                fromMultiStep: !0,
              },
            })
          );
      }
      v(), window.dispatchEvent(new Event("taskCompleted"));
    }
    function _(S) {
      if (i.value && !i.value.completed && s.value === "focus") {
        const E = us();
        S.completeTask(i.value.id);
        const F = E.settlePoints();
        console.log("简单任务完成积分结算结果:", F),
          window.dispatchEvent(
            new CustomEvent("pointsSettled", {
              detail: {
                points: F.points,
                remaining: F.remaining,
                fromSimpleTask: !0,
              },
            })
          );
      }
      v(), window.dispatchEvent(new Event("taskCompleted"));
    }
    function v() {
      (s.value = "focus"),
        (n.value = a.focusTime * 60),
        (t.value = !1),
        (e.value = !1);
    }
    function D(S) {
      if (
        (o.value && (clearInterval(o.value), (o.value = null)),
        (t.value = !1),
        (e.value = !1),
        (i.value = S),
        !S)
      )
        return w();
      if (S.steps && S.steps.length > 0) {
        const E = S.steps.findIndex((K) => !K.completed);
        r.value = E === -1 ? 0 : E;
        const F = S.steps[r.value];
        F
          ? ((n.value = Math.max(1, F.duration || 1) * 60),
            (s.value = F.isrest ? "rest" : "focus"))
          : ((n.value = (a.focusTime || 25) * 60), (s.value = "focus"));
        return;
      }
      (n.value = Math.max(1, S.duration || a.focusTime || 25) * 60),
        (s.value = "focus");
    }
    function w() {
      (s.value = "focus"), (n.value = a.focusTime * 60);
    }
    w();
    const R = ie(() =>
      i.value
        ? i.value.steps && i.value.steps.length > 0
          ? i.value.steps.every((S) => S.completed)
          : i.value.completed
        : !1
    );
    return {
      isRunning: t,
      isPaused: e,
      isCompleted: R,
      currentMode: s,
      timeLeft: n,
      currentTimerDisplay: c,
      currentTask: i,
      currentStepIndex: r,
      startTimer: u,
      pauseTimer: d,
      resetTimer: f,
      completeTimer: h,
      setTask: D,
      initTimer: w,
    };
  }),
  pc = Sn("stats", () => {
    const t = B([]),
      e = B(0);
    function s(C) {
      let _ = C.endTime || new Date().toISOString();
      const v = new Date(_);
      v.getDay() === 0 &&
        (console.log(
          "[DEBUG] 添加周日会话，特别注意时间处理:",
          v.toISOString()
        ),
        (_ = v.toISOString()));
      const D = {
        id: Date.now().toString(),
        mode: C.mode || "focus",
        duration: C.duration || 0,
        plannedDuration: C.plannedDuration || 0,
        taskId: C.taskId || null,
        startTime: C.startTime || new Date().toISOString(),
        endTime: _,
        completed: C.completed || !1,
      };
      return (
        p(D),
        console.log("[DEBUG] 添加新会话:", {
          id: D.id,
          mode: D.mode,
          taskId: D.taskId,
          completed: D.completed,
          startTime: D.startTime,
          endTime: D.endTime,
          duration: D.duration,
          date: D.endTime.split("T")[0],
          dayOfWeek: new Date(D.endTime).getDay(),
        }),
        t.value.push(D),
        f(),
        D
      );
    }
    const n = ie(() => {
        const C = {};
        t.value.forEach((v) => {
          if (v.mode === "focus" && v.completed) {
            let D = v.endTime.split("T")[0];
            const w = new Date(v.endTime);
            w.getDay() === 0 &&
              console.log("[DEBUG] 处理周日会话数据:", {
                date: D,
                sessionDate: w.toISOString(),
                day: w.getDay(),
              }),
              C[D] || (C[D] = 0),
              (C[D] += Math.round(v.duration / 60));
          }
        });
        const _ = new Date();
        if (_.getDay() === 0) {
          const v = i(_);
          console.log("[DEBUG] 今天是周日，检查专注记录结果:", {
            date: v,
            hasRecord: !!C[v],
            minutes: C[v] || 0,
          });
        }
        return C;
      }),
      o = ie(() => {
        const C = new Date(),
          _ = i(C);
        return (
          C.getDay() === 0 &&
            (console.log("[DEBUG] 今天是周日，特别注意日期处理"),
            console.log("[DEBUG] 尝试找到今天的所有会话："),
            t.value.forEach((D) => {
              D.endTime.split("T")[0] === _ &&
                console.log("[DEBUG] 找到今天的会话:", D);
            })),
          n.value[_] || 0
        );
      });
    function i(C) {
      try {
        C instanceof Date ||
          (console.warn("[WARN] formatDate接收到非Date对象:", C),
          (C = new Date(C)));
        const _ = C.getFullYear(),
          v = String(C.getMonth() + 1).padStart(2, "0"),
          D = String(C.getDate()).padStart(2, "0"),
          w = `${_}-${v}-${D}`,
          R = C.getDay();
        return (
          R === 0 &&
            console.log(
              "[DEBUG] 格式化周日日期:",
              C.toISOString(),
              "结果:",
              w,
              "星期几:",
              R
            ),
          w
        );
      } catch (_) {
        console.error("[ERROR] 日期格式化错误:", C, _);
        const v = new Date();
        return `${v.getFullYear()}-${String(v.getMonth() + 1).padStart(
          2,
          "0"
        )}-${String(v.getDate()).padStart(2, "0")}`;
      }
    }
    function r(C = 0) {
      const _ = new Date(),
        v = new Date(_.getFullYear(), _.getMonth(), _.getDate());
      console.log("[DEBUG] 今天日期:", v.toISOString(), "星期:", v.getDay());
      const D = v.getDay(),
        w = D === 0 ? 6 : D - 1;
      console.log(
        "[DEBUG] 距离本周一的天数:",
        w,
        "当前星期:",
        D,
        "(0=周日,1=周一)"
      );
      const R = new Date(v);
      R.setDate(v.getDate() - w);
      const S = new Date(R);
      S.setDate(R.getDate() + C * 7),
        S.setHours(0, 0, 0, 0),
        D === 0 &&
          C === 0 &&
          console.log("[DEBUG] 今天是周日，本周一日期:", S.toISOString()),
        console.log(
          "[DEBUG] 计算的本周开始日期(周一):",
          S.toISOString(),
          "星期:",
          S.getDay()
        );
      const E = new Date(S);
      return (
        E.setDate(S.getDate() + 6),
        E.setHours(23, 59, 59, 999),
        console.log(
          "[DEBUG] 计算的本周结束日期(周日):",
          E.toISOString(),
          "星期:",
          E.getDay()
        ),
        { start: S, end: E, formattedStart: i(S), formattedEnd: i(E) }
      );
    }
    function a() {
      e.value -= 1;
    }
    function c() {
      e.value < 0 && (e.value += 1);
    }
    function u() {
      e.value = 0;
    }
    const d = ie(() => {
      const C = r(e.value),
        _ = C.start,
        v = [],
        D = [],
        w = {};
      for (let I = 0; I < 7; I++) {
        const Y = new Date(_);
        Y.setDate(_.getDate() + I);
        const G = i(Y);
        Y.getDay() === 0 &&
          console.log(
            "[DEBUG] 生成本周周日日期:",
            G,
            "完整时间:",
            Y.toISOString()
          ),
          v.push(G);
        const H = n.value[G] || 0;
        D.push(H),
          Y.getDay() === 0 &&
            H > 0 &&
            console.log("[DEBUG] 周日有专注记录:", G, "分钟:", H),
          (w[G] = 0);
      }
      console.log("[DEBUG] 生成的周日期:", v),
        console.log("[DEBUG] 当前专注日期数据:", n.value),
        t.value.forEach((I) => {
          if (I.mode === "focus" && I.completed && I.taskId) {
            const Y = I.endTime.split("T")[0],
              G = new Date(I.endTime),
              H = v.includes(Y);
            G.getDay() === 0 &&
              (console.log("[DEBUG] 检查周日会话:", {
                date: Y,
                isInCurrentWeek: H,
                weekDays: v,
                sessionDay: G.getDay(),
                sessionEndTime: I.endTime,
              }),
              p(I)),
              console.log(
                "[DEBUG] 检查会话日期:",
                Y,
                "星期:",
                new Date(Y).getDay(),
                "是否在本周:",
                H
              ),
              H && (w[Y] = (w[Y] || 0) + 1);
          }
        });
      const R = v.map((I) => w[I] || 0),
        S = D.reduce((I, Y) => I + Y, 0),
        E = R.reduce((I, Y) => I + Y, 0),
        F = v.find((I) => new Date(I).getDay() === 0);
      let K = null;
      return (
        F &&
          ((K = {
            date: F,
            focusMinutes: n.value[F] || 0,
            completedTasks: w[F] || 0,
            sessions: t.value.filter(
              (I) =>
                I.endTime.split("T")[0] === F &&
                I.mode === "focus" &&
                I.completed
            ).length,
          }),
          console.log("[DEBUG] 本周周日统计:", K)),
        {
          days: v,
          focusDurations: D,
          completedTaskCounts: R,
          totalFocusMinutes: S,
          totalCompletedTasks: E,
          weekRange: C,
          debug: {
            sundayStats: K,
            today: new Date().toISOString(),
            todayIsValid: p({ endTime: new Date().toISOString() }),
          },
        }
      );
    });
    function f() {
      localStorage.setItem("pomodoro-sessions", JSON.stringify(t.value));
    }
    function h() {
      const C = localStorage.getItem("pomodoro-sessions");
      C && (t.value = JSON.parse(C));
    }
    function p(C) {
      try {
        const _ = new Date(C.endTime),
          v = C.endTime.split("T")[0],
          D = _.toISOString().split("T")[0];
        return v !== D
          ? (console.error("[ERROR] 会话日期格式不一致:", {
              original: C.endTime,
              parsed: _.toISOString(),
              extracted: v,
              expected: D,
            }),
            !1)
          : !0;
      } catch (_) {
        return console.error("[ERROR] 会话日期格式无效:", C.endTime, _), !1;
      }
    }
    function y() {
      let C = 0;
      return (
        t.value.forEach((_) => {
          if (!p(_))
            try {
              const v = new Date(_.endTime);
              (_.endTime = v.toISOString()), C++;
            } catch (v) {
              console.error("[ERROR] 无法修复会话日期:", _.endTime, v);
            }
        }),
        C > 0 && (console.log(`[DEBUG] 已修复 ${C} 个会话日期问题`), f()),
        C
      );
    }
    function b() {
      const C = new Date(),
        _ = i(C),
        v = C.getDay(),
        D = ["日", "一", "二", "三", "四", "五", "六"];
      console.log("========== 日期诊断 =========="),
        console.log(`今天是: ${_} 星期${D[v]}`);
      const w = t.value.filter((K) => K.endTime.split("T")[0] === _);
      console.log(`今天记录的会话数: ${w.length}`);
      const R = r(0);
      console.log("本周日期范围:", R.formattedStart, "至", R.formattedEnd);
      const S = [],
        E = [];
      for (let K = 0; K < 7; K++) {
        const I = new Date(R.start);
        I.setDate(R.start.getDate() + K);
        const Y = i(I),
          G = I.getDay();
        S.push(Y), E.push(`${Y} (星期${D[G]})`);
      }
      console.log("本周具体日期:", E),
        console.log("今天在本周日期列表中?", S.includes(_));
      const F = n.value;
      if ((console.log("今天的专注分钟数:", F[_] || 0), v === 0)) {
        console.log("今天是周日，检查本周所有日期的专注数据:"),
          E.forEach((H) => {
            const te = H.split(" ")[0];
            console.log(`- ${H}: ${F[te] || 0}分钟`);
          });
        const K = E.find((H) => H.includes("(星期日)"));
        if (K) {
          const H = K.split(" ")[0];
          console.log("本周日数据:", {
            date: H,
            minutes: F[H] || 0,
            isToday: H === _,
          });
        }
        const I = new Date(C);
        I.setDate(C.getDate() - 1);
        const Y = i(I);
        console.log("昨天(周六)的专注分钟数:", F[Y] || 0);
        const G = t.value.filter((H) => {
          const te = new Date(H.endTime),
            X = H.endTime.split("T")[0];
          return te.getDay() === 0 && X !== _;
        });
        G.length > 0 && console.log("警告: 发现疑似错位的周日会话:", G);
      }
      return (
        console.log("========== 诊断结束 =========="),
        { today: _, dayOfWeek: v, weekDays: S, inCurrentWeek: S.includes(_) }
      );
    }
    typeof window < "u" &&
      ((window.diagnosePomodoroTodayData = b),
      (window.diagnoseWeekRange = () => {
        const C = new Date();
        console.log("当前日期:", C.toISOString(), "星期:", C.getDay());
        const _ = r(0);
        console.log("本周日期范围:", {
          startDate: _.formattedStart,
          endDate: _.formattedEnd,
          start: _.start.toISOString(),
          end: _.end.toISOString(),
        });
        const v = r(-1);
        console.log("上周日期范围:", {
          startDate: v.formattedStart,
          endDate: v.formattedEnd,
        });
        const D = r(1);
        return (
          console.log("下周日期范围:", {
            startDate: D.formattedStart,
            endDate: D.formattedEnd,
          }),
          _
        );
      }),
      console.log(
        "已添加诊断函数，可在控制台运行: diagnosePomodoroTodayData() 或 diagnoseWeekRange()"
      )),
      h(),
      y();
    const A = ie(() => {
        let C = 0,
          _ = 0;
        return (
          t.value.forEach((v) => {
            v.mode === "focus" &&
              v.completed &&
              ((_ += Math.round(v.duration / 60)), v.taskId && C++);
          }),
          { totalCompletedTasks: C, totalFocusMinutes: _ }
        );
      }),
      L = ie(() => {
        const C = r(e.value);
        return {
          startDate: C.formattedStart,
          endDate: C.formattedEnd,
          isCurrentWeek: e.value === 0,
        };
      });
    return {
      sessions: t,
      focusDurationByDate: n,
      todayFocusDuration: o,
      weeklyStats: d,
      allTimeStats: A,
      addSession: s,
      previousWeek: a,
      nextWeek: c,
      resetToCurrentWeek: u,
      selectedWeekOffset: ie(() => e.value),
      currentWeekInfo: L,
    };
  }),
  qs = {
    audio: null,
    initAudio(t = "default.mp3") {
      this.audio || ((this.audio = new Audio()), (this.audio.preload = "auto"));
      const e = t.startsWith("alarm/") ? `./sounds/${t}` : `./sounds/${t}`;
      this.audio.src !== location.origin + e && (this.audio.src = e);
    },
    checkNotificationSupport() {
      return "Notification" in window;
    },
    async requestPermission() {
      if (!this.checkNotificationSupport()) return !1;
      try {
        return (await Notification.requestPermission()) === "granted";
      } catch (t) {
        return console.error("获取通知权限失败:", t), !1;
      }
    },
    playSound(t) {
      this.initAudio(t);
      try {
        (this.audio.currentTime = 0),
          this.audio.play().catch((e) => {
            console.error("播放音频失败:", e);
          });
      } catch (e) {
        console.error("播放音频出错:", e);
      }
    },
    sendNotification(t, e = {}) {
      return this.checkNotificationSupport() &&
        Notification.permission === "granted"
        ? new Notification(t, { icon: "./svg/iconnull.svg", ...e })
        : null;
    },
    vibrate(t = [200, 100, 200]) {
      if ("vibrate" in navigator)
        try {
          navigator.vibrate(t);
        } catch (e) {
          console.error("振动API调用失败:", e);
        }
    },
    notify({
      title: t,
      message: e,
      vibration: s = !0,
      sound: n = !0,
      browserNotification: o = !0,
      notifyOptions: i = {},
      settings: r = null,
    }) {
      const a = r || {
        soundEnabled: !0,
        vibrationEnabled: !0,
        browserNotificationEnabled: !0,
        selectedAlarmSound: "default.mp3",
      };
      o &&
        a.browserNotificationEnabled &&
        (this.sendNotification(t, { body: e, ...i }),
        console.log("发送浏览器通知:", t, e)),
        s &&
          a.vibrationEnabled &&
          (this.vibrate([200, 100, 200, 100, 200]), console.log("振动反馈")),
        n &&
          a.soundEnabled &&
          (this.playSound(a.selectedAlarmSound),
          console.log("播放声音:", a.selectedAlarmSound));
    },
  },
  Xp = {
    props: {
      minutes: { type: Number, required: !0 },
      seconds: { type: Number, required: !0 },
      isBreakMode: { type: Boolean, default: !1 },
      duration: { type: Number, required: !0 },
    },
    computed: {
      formattedTime() {
        return `${String(this.minutes).padStart(2, "0")}:${String(
          this.seconds
        ).padStart(2, "0")}`;
      },
      circumference() {
        return 2 * Math.PI * 119;
      },
      dashOffset() {
        const t = Math.max(this.duration * 60, 1),
          e = this.minutes * 60 + this.seconds,
          s = Math.min(Math.max(e / t, 0), 1);
        return this.circumference * (1 - s);
      },
    },
  },
  Jp = { class: "timer-ring", width: "250", height: "250" },
  Qp = ["stroke"],
  Zp = ["stroke", "stroke-dasharray", "stroke-dashoffset"],
  em = { class: "timer-text" };
function tm(t, e, s, n, o, i) {
  return (
    k(),
    M(
      "div",
      { class: se(["timer-circle", { "break-mode": s.isBreakMode }]) },
      [
        (k(),
        M("svg", Jp, [
          l(
            "circle",
            {
              class: "ring-bg",
              cx: "125",
              cy: "125",
              r: "119",
              fill: "none",
              stroke: s.isBreakMode
                ? "var(--primary-medium)"
                : "var(--primary-color)",
              "stroke-width": "12",
              opacity: "0.2",
            },
            null,
            8,
            Qp
          ),
          l(
            "circle",
            {
              class: "ring-progress",
              cx: "125",
              cy: "125",
              r: "119",
              fill: "none",
              stroke: s.isBreakMode
                ? "var(--primary-medium)"
                : "var(--primary-color)",
              "stroke-width": "12",
              "stroke-linecap": "round",
              "stroke-dasharray": i.circumference,
              "stroke-dashoffset": i.dashOffset,
            },
            null,
            8,
            Zp
          ),
        ])),
        l("span", em, P(i.formattedTime), 1),
      ],
      2
    )
  );
}
const nm = gt(Xp, [
    ["render", tm],
    ["__scopeId", "data-v-1e95c3c3"],
  ]),
  sm = {
    props: {
      focusMinutes: { type: Number, required: !0 },
      earnedPoints: { type: Number, required: !0 },
      remainingMinutes: { type: Number, required: !0 },
    },
    emits: ["close", "confirmed"],
    setup(t, { emit: e }) {
      function s() {
        e("confirmed"), e("close");
      }
      return { confirmAndClose: s };
    },
  },
  om = { class: "modal-backdrop" },
  im = { class: "modal-content points-settlement-modal" },
  rm = { class: "modal-header" },
  am = { class: "modal-body" },
  lm = { class: "points-info" },
  cm = { class: "points-text" },
  um = { class: "points-value" },
  dm = { class: "task-summary" },
  fm = { key: 0, class: "points-remaining" },
  hm = { class: "modal-footer" };
function pm(t, e, s, n, o, i) {
  return (
    k(),
    M("div", om, [
      l("div", im, [
        l("div", rm, [
          e[2] || (e[2] = l("h2", null, "任务完成", -1)),
          l("i", {
            class: "fas fa-times close-modal",
            onClick: e[0] || (e[0] = (r) => t.$emit("close")),
          }),
        ]),
        l("div", am, [
          l("div", lm, [
            e[5] ||
              (e[5] = l("i", { class: "fas fa-star points-icon" }, null, -1)),
            l("div", cm, [
              e[3] || (e[3] = l("h3", null, "获得积分", -1)),
              e[4] || (e[4] = l("p", null, "恭喜你完成任务！", -1)),
              l("div", um, "+" + P(s.earnedPoints), 1),
            ]),
          ]),
          l("div", dm, [
            l("p", null, "专注时长：" + P(s.focusMinutes) + "分钟", 1),
            e[6] ||
              (e[6] = l(
                "p",
                { class: "points-rate" },
                "（累计30分钟 = 1积分）",
                -1
              )),
            s.remainingMinutes > 0
              ? (k(),
                M(
                  "p",
                  fm,
                  " 余下时间：" + P(s.remainingMinutes) + "分钟已记入储存 ",
                  1
                ))
              : Q("", !0),
          ]),
        ]),
        l("div", hm, [
          l(
            "button",
            {
              class: "btn btn-primary",
              onClick:
                e[1] ||
                (e[1] = (...r) => n.confirmAndClose && n.confirmAndClose(...r)),
            },
            "确定"
          ),
        ]),
      ]),
    ])
  );
}
const mm = gt(sm, [
    ["render", pm],
    ["__scopeId", "data-v-6f3ae3f8"],
  ]),
  gm = {
    components: { TimerCircle: nm, PointsSettlementModal: mm },
    setup() {
      const t = Tn(),
        e = Pi(),
        s = ho(),
        n = pc(),
        o = lo();
      us();
      const i = on(),
        r = B(!1),
        a = B(!1),
        c = B(!1),
        u = B(0),
        d = B(0),
        f = B(""),
        h = B(null),
        p = B(!1),
        y = B(""),
        b = B(""),
        A = B("fa-check-circle"),
        L = B(!1),
        C = B(""),
        _ = B(""),
        v = B(null);
      function D(m, T, N) {
        (C.value = m), (_.value = T), (v.value = N), (L.value = !0);
      }
      function w() {
        (L.value = !1), (v.value = null);
      }
      function R() {
        v.value && v.value(), (L.value = !1), (v.value = null);
      }
      function S(m) {
        var ee;
        const T = (m == null ? void 0 : m.nextType) || "complete";
        let N =
          (m == null ? void 0 : m.currentType) ||
          ((ee = ke.value) != null && ee.isrest ? "rest" : "focus");
        console.log("步骤完成通知:", { currentType: N, nextType: T });
        const j = {
          complete: {
            title: "所有步骤完成！",
            message: "太棒了，任务即将完成",
            icon: "fa-check-circle",
          },
          focus: {
            fromRest: {
              title: "休息结束！",
              message: "是时候开始专注了",
              icon: "fa-brain",
            },
            fromFocus: {
              title: "继续专注！",
              message: "准备开始下一个专注",
              icon: "fa-brain",
            },
          },
          rest: {
            fromFocus: {
              title: "专注完成！",
              message: "现在可以休息一下了",
              icon: "fa-mug-hot",
            },
            fromRest: {
              title: "休息结束！",
              message: "再休息会吧~",
              icon: "fa-mug-hot",
            },
          },
        };
        let W;
        T === "complete"
          ? (W = j.complete)
          : T === "focus"
          ? (W = j.focus[N === "rest" ? "fromRest" : "fromFocus"])
          : (W = j.rest[N === "focus" ? "fromFocus" : "fromRest"]),
          (y.value = W.title),
          (b.value = W.message),
          (A.value = W.icon),
          o.centerToastEnabled && (p.value = !0),
          Notification.permission === "granted"
            ? (console.log("通知权限已授予"),
              qs.notify({
                title: "鱼跃Todo",
                message: `${W.title} ${W.message}`,
                vibration: !0,
                sound: !0,
                browserNotification: o.browserNotificationEnabled,
                notifyOptions: {
                  icon: "./svg/iconnull.svg",
                  badge: "./svg/iconnull.svg",
                },
                settings: {
                  soundEnabled: o.soundEnabled,
                  vibrationEnabled: o.vibrationEnabled,
                  browserNotificationEnabled: o.browserNotificationEnabled,
                  selectedAlarmSound: o.selectedAlarmSound,
                },
              }))
            : Notification.permission !== "denied" &&
              (console.log("请求通知权限..."), g()),
          setTimeout(() => {
            p.value = !1;
          }, 2e3);
      }
      function E() {
        var m, T;
        if ((console.log("任务完成事件被触发"), a.value || c.value)) {
          console.log("模态框已显示，不再重复处理");
          return;
        }
        if ((e.isRunning && e.pauseTimer(), !c.value)) {
          const N = us();
          if (N.pointsToReward > 0) {
            const j = N.settlePoints();
            if (
              ((u.value = j.points),
              (d.value = j.remaining),
              console.log("手动检查积分结算结果:", j),
              u.value > 0)
            ) {
              (c.value = !0),
                console.log("任务完成处理：显示积分结算模态框，积分:", u.value),
                e.currentTask &&
                  e.currentTask.id &&
                  !(
                    (m = s.getTaskById(e.currentTask.id)) != null && m.completed
                  ) &&
                  s.completeTask(e.currentTask.id);
              return;
            }
          }
        }
        o.centerToastEnabled && !c.value && (a.value = !0),
          qs.notify({
            title: "太棒了！",
            message: "任务已完成",
            vibration: !0,
            sound: !0,
            browserNotification: o.browserNotificationEnabled,
            notifyOptions: {
              icon: "./svg/iconnull.svg",
              badge: "./svg/iconnull.svg",
            },
            settings: {
              soundEnabled: o.soundEnabled,
              vibrationEnabled: o.vibrationEnabled,
              browserNotificationEnabled: o.browserNotificationEnabled,
              selectedAlarmSound: o.selectedAlarmSound,
            },
          }),
          c.value ||
            (e.currentTask &&
              e.currentTask.id &&
              !((T = s.getTaskById(e.currentTask.id)) != null && T.completed) &&
              s.completeTask(e.currentTask.id),
            console.log("准备返回任务列表，2秒后执行"),
            setTimeout(() => {
              (a.value = !1),
                console.log("正在返回任务列表..."),
                t.push("/tasks");
            }, 2e3));
      }
      function F(m) {
        console.log("积分结算事件被触发", m.detail),
          (u.value = m.detail.points),
          (d.value = m.detail.remaining);
        const T = m.detail.fromMultiStep || !1,
          N = m.detail.fromSimpleTask || !1;
        console.log(
          `积分结算来源: ${T ? "多步骤任务" : N ? "简单任务" : "未知来源"}`
        ),
          u.value > 0
            ? ((c.value = !0),
              (a.value = !1),
              console.log("积分结算事件: 显示积分结算模态框，积分:", u.value))
            : console.log("积分结算事件: 无积分可结算");
      }
      function K() {
        (c.value = !1), t.push("/tasks");
      }
      function I() {
        (c.value = !1), i.addPoints(u.value), t.push("/tasks");
      }
      const Y = ie(() => e.currentTimerDisplay),
        G = ie(() => e.currentMode === "rest"),
        H = ie(() => {
          if (ne.value) {
            if (
              ne.value.steps &&
              ne.value.steps.length > 0 &&
              me.value >= 0 &&
              me.value < ne.value.steps.length
            ) {
              const m = ne.value.steps[me.value];
              return m ? m.duration : o.focusTime || 25;
            }
            return ne.value.duration || o.focusTime || 25;
          }
          return e.currentMode === "focus"
            ? o.focusTime || 25
            : o.restTime || 5;
        }),
        te = ie(() =>
          e.isRunning
            ? "暂停"
            : e.isPaused
            ? "继续"
            : e.currentMode === "focus"
            ? "开始专注"
            : "开始休息"
        ),
        X = ie(() => {
          switch (e.currentMode) {
            case "focus":
              return "保持专注 !";
            case "rest":
              return "放松一下~";
            default:
              return "";
          }
        }),
        ne = ie(() => e.currentTask),
        ue = ie(() => s.tasksByDate.today.filter((m) => !m.completed)),
        Re = ie(() => ue.value.length > 0),
        me = ie(() => e.currentStepIndex),
        ke = ie(() =>
          ne.value &&
          ne.value.steps &&
          ne.value.steps.length > 0 &&
          me.value < ne.value.steps.length
            ? ne.value.steps[me.value]
            : null
        );
      function We() {
        const m = new Date(),
          T = m.getHours().toString().padStart(2, "0"),
          N = m.getMinutes().toString().padStart(2, "0");
        f.value = `${T}:${N}`;
      }
      function ce(m) {
        return m.steps ? m.steps.filter((T) => T.completed).length : 0;
      }
      function De() {
        e.isRunning
          ? e.pauseTimer()
          : (e.isPaused || (h.value = new Date().toISOString()),
            e.startTimer());
      }
      function be() {
        D(
          "重置计时器",
          "确定要重置计时器吗？这将会清除当前的计时进度。",
          () => {
            e.resetTimer();
          }
        );
      }
      function U() {
        e.isRunning || e.isPaused
          ? D(
              "返回任务列表",
              "确定要返回任务列表吗？这将会重置当前的计时进度。",
              () => {
                e.resetTimer(), t.push("/tasks");
              }
            )
          : t.push("/tasks");
      }
      function Z() {
        r.value = !0;
      }
      function O() {
        r.value = !1;
      }
      function V(m) {
        e.setTask(m), O();
      }
      function le() {
        var m;
        if (e.currentMode === "focus" && h.value) {
          const T = new Date().toISOString(),
            N = Math.floor((Date.parse(T) - Date.parse(h.value)) / 1e3);
          n.addSession({
            mode: "focus",
            duration: N,
            plannedDuration: e.focusTime * 60,
            taskId: (m = ne.value) == null ? void 0 : m.id,
            startTime: h.value,
            endTime: T,
            completed: !0,
          });
          const j = Math.round(N / 60);
          if (j > 0) {
            const W = us();
            console.log(`记录会话: 添加${j}分钟专注时间`), W.addFocusMinutes(j);
          }
          ne.value && s.incrementTaskPomodoro(ne.value.id), (h.value = null);
        }
      }
      function g() {
        return "Notification" in window
          ? Notification.requestPermission()
              .then((m) => (console.log("通知权限状态:", m), m === "granted"))
              .catch((m) => (console.error("请求通知权限出错:", m), !1))
          : Promise.resolve(!1);
      }
      return (
        mt(() => {
          We(),
            setInterval(We, 6e4),
            g(),
            window.addEventListener("timerCompleted", le),
            window.addEventListener("taskCompleted", E),
            window.addEventListener("pointsSettled", F),
            window.addEventListener("stepCompleted", (m) => {
              const T = m.detail;
              S(T);
            });
        }),
        kn(() => {
          window.removeEventListener("timerCompleted", le),
            window.removeEventListener("taskCompleted", E),
            window.removeEventListener("pointsSettled", F),
            window.removeEventListener("stepCompleted", () => {}),
            e.isRunning && e.pauseTimer();
        }),
        {
          timerStore: e,
          currentTime: f,
          timerDisplay: Y,
          currentModeDuration: H,
          buttonText: te,
          modeText: X,
          isBreakMode: G,
          currentTask: ne,
          todayTasks: ue,
          hasTasks: Re,
          showTaskModal: r,
          showCompletionModal: a,
          toggleTimer: De,
          resetTimer: be,
          goToTasks: U,
          openTaskModal: Z,
          closeTaskModal: O,
          selectTask: V,
          currentStepIndex: me,
          currentStep: ke,
          getCompletedStepsCount: ce,
          showStepCompleteToast: p,
          stepCompleteTitle: y,
          stepCompleteMessage: b,
          stepCompleteIcon: A,
          showStepComplete: S,
          showConfirmationModal: L,
          confirmationTitle: C,
          confirmationMessage: _,
          cancelConfirmation: w,
          confirmAction: R,
          showPointsSettlementModal: c,
          earnedPoints: u,
          remainingMinutes: d,
          closePointsSettlementModal: K,
          confirmPointsSettlement: I,
        }
      );
    },
  },
  vm = { class: "timer-page" },
  ym = { class: "nav-bar" },
  bm = { class: "content timer-screen" },
  wm = { key: 0, class: "timer-info" },
  km = { class: "current-task" },
  Sm = { key: 0, class: "rest-badge" },
  Tm = { key: 1, class: "task-progress" },
  Cm = { class: "timer-mode" },
  _m = { class: "timer-controls" },
  Dm = { key: 1, class: "task-selector" },
  xm = { key: 0, class: "modal-backdrop" },
  Mm = { class: "modal-content" },
  Em = { class: "modal-header" },
  Am = { class: "modal-body" },
  Im = { class: "task-list" },
  Rm = ["onClick"],
  Om = { class: "task-content" },
  Pm = { class: "task-title" },
  Nm = { class: "task-subtitle" },
  Lm = { key: 0 },
  Bm = { key: 0, class: "modal-backdrop completion-modal" },
  Wm = { key: 0, class: "modal-backdrop confirmation-modal" },
  Um = { class: "modal-content" },
  jm = { class: "modal-header" },
  Hm = { class: "modal-body" },
  Fm = { class: "modal-footer" },
  Vm = { class: "icon" },
  $m = { class: "title" },
  zm = { class: "message" };
function Km(t, e, s, n, o, i) {
  const r = Wt("TimerCircle"),
    a = Wt("PointsSettlementModal");
  return (
    k(),
    M("div", vm, [
      l("div", ym, [
        e[7] || (e[7] = l("div", { class: "nav-title" }, "专注", -1)),
        l("i", {
          class: "fa fa-chevron-left",
          style: { "font-size": "24px" },
          onClick: e[0] || (e[0] = (...c) => n.goToTasks && n.goToTasks(...c)),
        }),
      ]),
      l("div", bm, [
        pe(
          r,
          {
            minutes: Math.floor(n.timerStore.timeLeft / 60),
            seconds: n.timerStore.timeLeft % 60,
            isBreakMode: n.isBreakMode,
            duration: n.currentModeDuration,
          },
          null,
          8,
          ["minutes", "seconds", "isBreakMode", "duration"]
        ),
        n.currentTask
          ? (k(),
            M("div", wm, [
              l("div", km, " 当前任务: " + P(n.currentTask.maintask), 1),
              n.currentStep
                ? (k(),
                  M(
                    "div",
                    {
                      key: 0,
                      class: se([
                        "current-step",
                        { "rest-step": n.currentStep.isrest },
                      ]),
                    },
                    [
                      we(
                        P(n.currentStepIndex + 1) +
                          ". " +
                          P(n.currentStep.task) +
                          " ",
                        1
                      ),
                      n.currentStep.isrest
                        ? (k(), M("span", Sm, "休息"))
                        : Q("", !0),
                    ],
                    2
                  ))
                : Q("", !0),
              n.currentTask.steps && n.currentTask.steps.length
                ? (k(),
                  M(
                    "div",
                    Tm,
                    " 步骤 " +
                      P(n.getCompletedStepsCount(n.currentTask) + 1) +
                      " / " +
                      P(n.currentTask.steps.length),
                    1
                  ))
                : Q("", !0),
            ]))
          : Q("", !0),
        l("div", Cm, P(n.modeText), 1),
        l("div", _m, [
          l(
            "button",
            {
              class: "btn btn-primary",
              onClick:
                e[1] || (e[1] = (...c) => n.toggleTimer && n.toggleTimer(...c)),
            },
            P(n.buttonText),
            1
          ),
          l(
            "button",
            {
              class: "btn btn-default",
              onClick:
                e[2] || (e[2] = (...c) => n.resetTimer && n.resetTimer(...c)),
            },
            " 重置 "
          ),
        ]),
        !n.currentTask && n.hasTasks
          ? (k(),
            M("div", Dm, [
              l(
                "button",
                {
                  class: "btn btn-default",
                  onClick:
                    e[3] ||
                    (e[3] = (...c) => n.openTaskModal && n.openTaskModal(...c)),
                },
                " 选择任务 "
              ),
            ]))
          : Q("", !0),
      ]),
      e[10] || (e[10] = l("div", { class: "music-container" }, null, -1)),
      (k(),
      Ie(Je, { to: ".app-container" }, [
        n.showTaskModal
          ? (k(),
            M("div", xm, [
              l("div", Mm, [
                l("div", Em, [
                  e[8] || (e[8] = l("h2", null, "选择任务", -1)),
                  l("i", {
                    class: "fas fa-times close-modal",
                    onClick:
                      e[4] ||
                      (e[4] = (...c) =>
                        n.closeTaskModal && n.closeTaskModal(...c)),
                  }),
                ]),
                l("div", Am, [
                  l("div", Im, [
                    (k(!0),
                    M(
                      he,
                      null,
                      Ne(
                        n.todayTasks,
                        (c) => (
                          k(),
                          M(
                            "div",
                            {
                              class: "task-item",
                              key: c.id,
                              onClick: (u) => n.selectTask(c),
                            },
                            [
                              l("div", Om, [
                                l("div", Pm, P(c.maintask), 1),
                                l("div", Nm, [
                                  l("span", null, P(c.duration) + " 分钟", 1),
                                  c.steps && c.steps.length
                                    ? (k(),
                                      M(
                                        "span",
                                        Lm,
                                        " · " +
                                          P(n.getCompletedStepsCount(c)) +
                                          "/" +
                                          P(c.steps.length) +
                                          " 步骤",
                                        1
                                      ))
                                    : Q("", !0),
                                ]),
                              ]),
                            ],
                            8,
                            Rm
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
              ]),
            ]))
          : Q("", !0),
      ])),
      (k(),
      Ie(Je, { to: ".app-container" }, [
        pe(
          Ke,
          { name: "fade" },
          {
            default: Ae(() => [
              n.showCompletionModal
                ? (k(),
                  M(
                    "div",
                    Bm,
                    e[9] ||
                      (e[9] = [
                        l(
                          "div",
                          { class: "modal-content" },
                          [
                            l("div", { class: "completion-message" }, [
                              l("i", {
                                class: "fas fa-check-circle success-icon",
                              }),
                              l("h2", null, "专注完成！"),
                              l("p", null, "正在返回任务列表..."),
                            ]),
                          ],
                          -1
                        ),
                      ])
                  ))
                : Q("", !0),
            ]),
            _: 1,
          }
        ),
      ])),
      (k(),
      Ie(Je, { to: ".app-container" }, [
        pe(
          Ke,
          { name: "modal" },
          {
            default: Ae(() => [
              n.showConfirmationModal
                ? (k(),
                  M("div", Wm, [
                    l("div", Um, [
                      l("div", jm, [l("h2", null, P(n.confirmationTitle), 1)]),
                      l("div", Hm, [l("p", null, P(n.confirmationMessage), 1)]),
                      l("div", Fm, [
                        l(
                          "button",
                          {
                            class: "btn btn-default",
                            onClick:
                              e[5] ||
                              (e[5] = (...c) =>
                                n.cancelConfirmation &&
                                n.cancelConfirmation(...c)),
                          },
                          "取消"
                        ),
                        l(
                          "button",
                          {
                            class: "btn btn-primary",
                            onClick:
                              e[6] ||
                              (e[6] = (...c) =>
                                n.confirmAction && n.confirmAction(...c)),
                          },
                          "确定"
                        ),
                      ]),
                    ]),
                  ]))
                : Q("", !0),
            ]),
            _: 1,
          }
        ),
      ])),
      (k(),
      Ie(Je, { to: ".app-container" }, [
        pe(
          Ke,
          { name: "faded" },
          {
            default: Ae(() => [
              n.showStepCompleteToast
                ? (k(),
                  M(
                    "div",
                    {
                      key: 0,
                      class: se([
                        "step-complete-toast",
                        { show: n.showStepCompleteToast },
                      ]),
                    },
                    [
                      l("div", Vm, [
                        l(
                          "i",
                          { class: se(["fas", n.stepCompleteIcon]) },
                          null,
                          2
                        ),
                      ]),
                      l("div", $m, P(n.stepCompleteTitle), 1),
                      l("div", zm, P(n.stepCompleteMessage), 1),
                    ],
                    2
                  ))
                : Q("", !0),
            ]),
            _: 1,
          }
        ),
      ])),
      (k(),
      Ie(Je, { to: ".app-container" }, [
        pe(
          Ke,
          { name: "pointfade" },
          {
            default: Ae(() => [
              n.showPointsSettlementModal
                ? (k(),
                  Ie(
                    a,
                    {
                      key: 0,
                      focusMinutes: n.currentModeDuration,
                      earnedPoints: n.earnedPoints,
                      remainingMinutes: n.remainingMinutes,
                      onClose: n.closePointsSettlementModal,
                      onConfirmed: n.confirmPointsSettlement,
                    },
                    null,
                    8,
                    [
                      "focusMinutes",
                      "earnedPoints",
                      "remainingMinutes",
                      "onClose",
                      "onConfirmed",
                    ]
                  ))
                : Q("", !0),
            ]),
            _: 1,
          }
        ),
      ])),
    ])
  );
}
const Gm = gt(gm, [
    ["render", Km],
    ["__scopeId", "data-v-429eba30"],
  ]),
  Ym = {
    props: {
      show: { type: Boolean, required: !0 },
      title: { type: String, default: "提示" },
      closeOnClickOutside: { type: Boolean, default: !0 },
      width: { type: String, default: "90%" },
      theme: { type: String, default: "light" },
      customClass: { type: String, default: "" },
    },
    emits: ["update:show"],
    computed: {
      contentStyle() {
        return {
          width: this.width,
          maxWidth: this.width === "90%" ? "400px" : "800px",
          maxHeight: "90vh",
        };
      },
    },
  },
  qm = ["data-theme"],
  Xm = { class: "modal-header" },
  Jm = { class: "modal-body" },
  Qm = { key: 0, class: "modal-footer" };
function Zm(t, e, s, n, o, i) {
  return (
    k(),
    Ie(Je, { to: ".app-container" }, [
      s.show
        ? (k(),
          M(
            "div",
            {
              key: 0,
              class: "modal-backdrop",
              onClick:
                e[1] ||
                (e[1] = Ce(
                  (r) => s.closeOnClickOutside && t.$emit("update:show", !1),
                  ["self"]
                )),
              "data-theme": s.theme,
            },
            [
              l(
                "div",
                {
                  class: se(["modal-content", s.customClass]),
                  style: yt(i.contentStyle),
                },
                [
                  l("div", Xm, [
                    l("h2", null, P(s.title), 1),
                    l("i", {
                      class: "fas fa-times close-modal",
                      onClick:
                        e[0] || (e[0] = (r) => t.$emit("update:show", !1)),
                    }),
                  ]),
                  l("div", Jm, [Gi(t.$slots, "default", {}, void 0)]),
                  t.$slots.footer
                    ? (k(), M("div", Qm, [Gi(t.$slots, "footer", {}, void 0)]))
                    : Q("", !0),
                ],
                6
              ),
            ],
            8,
            qm
          ))
        : Q("", !0),
    ])
  );
}
const eg = gt(Ym, [
    ["render", Zm],
    ["__scopeId", "data-v-17f53dbc"],
  ]),
  tg = {
    zhipuai: {
      "glm-4-flash": {
        code: "glm-4-flash",
        name: "CHATGLM-Flash",
        description: "快速响应",
        think: !1,
      },
      "GLM-4-Flash-250414": {
        code: "glm-4-Flash-250414",
        name: "CHATGLM-稳定版",
        description: "稳定可靠",
        think: !1,
      },
      "glm-4-plus": {
        code: "glm-4-plus",
        name: "CHATGLM-PLUS",
        description: "高智能旗舰",
        think: !1,
      },
      "GLM-4-AirX": {
        code: "glm-4-AirX",
        name: "CHATGLM-轻量化",
        description: "极速推理",
        think: !1,
      },
      "glm-z1-flash": {
        code: "glm-z1-flash",
        name: "Z1-Flash",
        description: "适用于复杂任务",
        think: !0,
      },
    },
    siliconflow: {
      "Qwen/Qwen2.5-14B-Instruct": {
        code: "Qwen/Qwen2.5-14B-Instruct",
        name: "千问2.5-14B",
        description: "性能均衡",
        think: !1,
      },
      "Qwen/Qwen2.5-7B-Instruct": {
        code: "Qwen/Qwen2.5-7B-Instruct",
        name: "千问2.5-7B",
        description: "更快速、轻量",
        think: !1,
      },
      "Qwen/Qwen3-14B": {
        code: "Qwen/Qwen3-14B",
        name: "千问3-14B",
        description: "最新千问模型",
        think: !0,
      },
      "deepseek-ai/DeepSeek-R1": {
        code: "deepseek-ai/DeepSeek-R1",
        name: "DeepSeek-R1满血版",
        description: "性能卓越",
        think: !0,
      },
    },
  };
function Zn(t) {
  return tg[t] || {};
}
function ng(t, e) {
  return Zn(t)[e] || null;
}
const po = Sn("ai", () => {
  const t = B({
      provider: "zhipuai",
      apiKey: "",
      model: "",
      usePresetModel: !0,
      customModel: "",
      isThinkModel: !1,
    }),
    e = B(!1),
    s = B(null),
    n = ie(() => {
      const p = t.value.usePresetModel ? t.value.model : t.value.customModel;
      return t.value.apiKey && p;
    }),
    o = ie(() =>
      t.value.usePresetModel ? t.value.model : t.value.customModel
    );
  function i() {
    localStorage.setItem("pomodoro-ai-settings", JSON.stringify(t.value));
  }
  function r() {
    const p = localStorage.getItem("pomodoro-ai-settings");
    if (p) {
      const y = JSON.parse(p);
      t.value = {
        provider: y.provider || "zhipuai",
        apiKey: y.apiKey || "",
        model: y.model || "",
        usePresetModel: y.usePresetModel !== void 0 ? y.usePresetModel : !0,
        customModel: y.customModel || "",
        isThinkModel: y.isThinkModel || !1,
      };
    }
  }
  function a(p) {
    (t.value = { ...t.value, ...p }), i();
  }
  function c() {
    (t.value = {
      provider: "zhipuai",
      apiKey: "",
      model: "",
      usePresetModel: !0,
      customModel: "",
      isThinkModel: !1,
    }),
      localStorage.removeItem("pomodoro-ai-settings"),
      (s.value = null),
      (e.value = !1);
  }
  async function* u() {
    var v, D, w;
    if (!t.value.apiKey || (!t.value.model && !t.value.customModel))
      throw new Error("请先配置API密钥和模型");
    const p = o.value;
    let y, b, A;
    t.value.provider === "zhipuai"
      ? ((y = "https://open.bigmodel.cn/api/paas/v4/chat/completions"),
        (b = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${t.value.apiKey}`,
        }),
        (A = {
          model: p,
          messages: [
            {
              role: "user",
              content:
                "你好，这是一个连接测试，如果你收到这条信息，那就说明连接成功了，请回复你的模型信息与目前的状态",
            },
          ],
          stream: !0,
        }))
      : ((y = "https://api.siliconflow.cn/v1/chat/completions"),
        (b = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${t.value.apiKey}`,
        }),
        (A = {
          model: p,
          messages: [
            {
              role: "user",
              content:
                "你好，这是一个连接测试，如果你收到这条信息，那就说明连接成功了，请回复你的模型信息与目前的状态",
            },
          ],
          stream: !0,
        }));
    const L = await fetch(y, {
      method: "POST",
      headers: b,
      body: JSON.stringify(A),
    });
    if (!L.ok) {
      const R = await L.json().catch(() => ({}));
      throw new Error(
        ((v = R.error) == null ? void 0 : v.message) || `HTTP ${L.status}`
      );
    }
    const C = L.body.getReader(),
      _ = new TextDecoder();
    try {
      for (;;) {
        const { value: R, done: S } = await C.read();
        if (S) break;
        const F = _.decode(R).split(`
`);
        for (const K of F)
          if (K.startsWith("data: ")) {
            const I = K.slice(6).trim();
            if (I === "[DONE]") return;
            try {
              const G =
                (w = (D = JSON.parse(I).choices) == null ? void 0 : D[0]) ==
                null
                  ? void 0
                  : w.delta;
              G != null && G.content && (yield G.content);
            } catch {}
          }
      }
    } finally {
      C.releaseLock();
    }
  }
  async function* d(p, y = {}) {
    var w, R, S;
    if (!n.value) throw new Error("AI服务未配置");
    const b = o.value;
    let A, L, C;
    t.value.provider === "zhipuai"
      ? ((A = "https://open.bigmodel.cn/api/paas/v4/chat/completions"),
        (L = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${t.value.apiKey}`,
        }),
        (C = { model: b, messages: p, stream: !0, ...y }))
      : ((A = "https://api.siliconflow.cn/v1/chat/completions"),
        (L = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${t.value.apiKey}`,
        }),
        (C = { model: b, messages: p, stream: !0, ...y }));
    const _ = await fetch(A, {
      method: "POST",
      headers: L,
      body: JSON.stringify(C),
    });
    if (!_.ok) {
      const E = await _.json().catch(() => ({}));
      throw new Error(
        ((w = E.error) == null ? void 0 : w.message) || `HTTP ${_.status}`
      );
    }
    const v = _.body.getReader(),
      D = new TextDecoder();
    try {
      for (;;) {
        const { value: E, done: F } = await v.read();
        if (F) break;
        const I = D.decode(E).split(`
`);
        for (const Y of I)
          if (Y.startsWith("data: ")) {
            const G = Y.slice(6).trim();
            if (G === "[DONE]") return;
            try {
              const te =
                (S = (R = JSON.parse(G).choices) == null ? void 0 : R[0]) ==
                null
                  ? void 0
                  : S.delta;
              te && (yield te);
            } catch {}
          }
      }
    } finally {
      v.releaseLock();
    }
  }
  function f(p, y) {
    if (!y) return p;
    if (t.value.provider === "zhipuai") {
      const b = p.lastIndexOf("</think>");
      if (b !== -1) return p.substring(b + 8).trim();
    } else if (
      t.value.provider === "siliconflow" &&
      typeof p == "object" &&
      p.content
    )
      return p.content;
    return p;
  }
  async function h(p, y = {}) {
    var R, S;
    if (!n.value) throw new Error("AI服务未配置");
    const b = o.value,
      A = t.value.usePresetModel
        ? !!((R = ng(t.value.provider, b)) != null && R.think)
        : t.value.isThinkModel;
    let L, C, _;
    t.value.provider === "zhipuai"
      ? ((L = "https://open.bigmodel.cn/api/paas/v4/chat/completions"),
        (C = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${t.value.apiKey}`,
        }),
        (_ = { model: b, messages: p, stream: !1, ...y }))
      : ((L = "https://api.siliconflow.cn/v1/chat/completions"),
        (C = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${t.value.apiKey}`,
        }),
        (_ = { model: b, messages: p, stream: !1, ...y }));
    const v = await fetch(L, {
      method: "POST",
      headers: C,
      body: JSON.stringify(_),
    });
    if (!v.ok) {
      const E = await v.json().catch(() => ({}));
      throw new Error(
        ((S = E.error) == null ? void 0 : S.message) || `HTTP ${v.status}`
      );
    }
    const w = (await v.json()).choices[0].message.content;
    return f(w, A);
  }
  return (
    r(),
    {
      config: t,
      testingConnection: e,
      lastTestResult: s,
      isConfigured: n,
      currentModel: o,
      updateSettings: a,
      resetSettings: c,
      testConnectionStream: u,
      callAI: h,
      callAIStream: d,
    }
  );
});
let sg = class {
  constructor() {
    (this._aiStore = null), (this._tasksStore = null);
  }
  get aiStore() {
    return this._aiStore || (this._aiStore = po()), this._aiStore;
  }
  get tasksStore() {
    return this._tasksStore || (this._tasksStore = ho()), this._tasksStore;
  }
  async decomposeTask(e, s = {}) {
    if (!this.aiStore.isConfigured)
      throw new Error("AI服务未配置，请先在设置中配置AI API密钥");
    try {
      const n = this.buildContext(s),
        o = this.buildDecomposePrompt(e, n),
        i = await this.aiStore.callAI(
          [
            { role: "system", content: this.getSystemPrompt() },
            { role: "user", content: o },
          ],
          { temperature: 0.7 }
        ),
        r = this.parseTaskResponse(i),
        a = this.validateAndOptimizeTasks(r.tasks, n);
      return { ...r, tasks: a };
    } catch (n) {
      throw (
        (console.error("任务分解失败:", n),
        new Error(`任务分解失败: ${n.message}`))
      );
    }
  }
  buildContext(e = {}) {
    const s = new Date(),
      n = this.getExistingTasksContext(),
      o = this.getUpcomingCoursesContext();
    return {
      currentDate: s.toLocaleDateString("zh-CN"),
      currentTime: s.toLocaleTimeString("zh-CN", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      existingTasks: n,
      upcomingCourses: o,
      userPreferences: {
        preferredWorkHours: e.preferredWorkHours || "09:00-21:00",
        focusTimePreference: e.focusTimePreference || "25分钟",
        breakFrequency: e.breakFrequency || "每25分钟休息5分钟",
      },
      avoidCourses: e.avoidCourses || !1,
      considerWorkload: e.considerWorkload || !0,
    };
  }
  getExistingTasksContext() {
    const e = new Date(),
      s = new Date(e.getTime() + 7 * 24 * 60 * 60 * 1e3);
    return this.tasksStore.tasks
      .filter((n) => !n.completed)
      .filter((n) => {
        if (!n.begintime) return !1;
        const o = this.parseTimeString(n.begintime);
        return o >= e && o <= s;
      })
      .map((n) => ({
        name: n.maintask,
        description: n.description,
        duration: n.duration,
        date: this.formatDateFromTimeString(n.begintime),
        time: this.formatTimeFromTimeString(n.begintime),
        pomodoroCount: Math.ceil(n.duration / 25),
      }));
  }
  getUpcomingCoursesContext() {
    return [];
  }
  parseTimeString(e) {
    if (!e || e.length < 12) return new Date();
    const s = parseInt(e.substring(0, 4)),
      n = parseInt(e.substring(4, 6)) - 1,
      o = parseInt(e.substring(6, 8)),
      i = parseInt(e.substring(8, 10)),
      r = parseInt(e.substring(10, 12));
    return new Date(s, n, o, i, r);
  }
  formatDateFromTimeString(e) {
    return this.parseTimeString(e).toLocaleDateString("zh-CN");
  }
  formatTimeFromTimeString(e) {
    return this.parseTimeString(e).toLocaleTimeString("zh-CN", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }
  getSystemPrompt() {
    return `你是一个专业的时间管理和项目规划助手，擅长将复杂任务分解为可执行的子任务。

核心能力：
1. 任务分析：理解任务的本质和目标
2. 逻辑分解：按照合理的执行顺序分解任务
3. 时间估算：基于任务复杂度估算所需时间
4. 冲突规避：避免与现有安排产生时间冲突
5. 优先级排序：根据重要性和紧急性排序

分解原则：
- 每个子任务应该是具体可执行的行动
- 单个任务的番茄钟数量控制在1-4个之间（25分钟为1个番茄钟）
- 考虑任务间的依赖关系
- 预留适当的缓冲时间
- 符合人的认知和精力规律
- 任务名称要简洁明确，描述要具体可操作

返回格式要求：
- 严格按照JSON格式返回
- 包含合理的分解逻辑说明
- 时间安排要现实可行
- 优先级设置要有依据`;
  }
  buildDecomposePrompt(e, s) {
    return `任务描述：${e}

当前上下文信息：
时间：${s.currentDate} ${s.currentTime}

现有任务：
${
  s.existingTasks.length > 0
    ? s.existingTasks.map(
        (n) => `- ${n.date} ${n.time}: ${n.name} (${n.duration}分钟)`
      ).join(`
`)
    : "暂无其他任务"
}

用户偏好：
- 工作时段偏好：${s.userPreferences.preferredWorkHours}
- 单次专注时长：${s.userPreferences.focusTimePreference}
- 休息频率：${s.userPreferences.breakFrequency}

请将任务分解为2-8个子任务，确保：
1. ${s.avoidCourses ? "避免与课程时间冲突" : "合理安排时间"}
2. ${s.considerWorkload ? "考虑当前任务负荷" : "可以集中时间完成"}
3. 按照逻辑顺序排列
4. 每个任务都有明确的完成标准
5. 总时间控制在合理范围内

严格按照以下JSON格式返回：
{
  "tasks": [
    {
      "name": "具体任务名称（不超过20字）",
      "description": "详细的任务描述，包含完成标准",
      "pomodoroCount": 2,
      "priority": "high|medium|low", 
      "estimatedDuration": 50,
      "suggestedDate": "2025-05-29",
      "suggestedTime": "14:00",
      "tags": ["标签1", "标签2"],
      "notes": "额外说明或提示"
    }
  ],
  "reasoning": "分解逻辑的详细说明，包括为什么这样分解、时间安排的考虑等",
  "totalEstimatedTime": 180,
  "recommendations": ["给用户的建议1", "建议2"]
}`;
  }
  parseTaskResponse(e) {
    try {
      let s = e.trim();
      s.startsWith("```json")
        ? (s = s.replace(/```json\s*/, "").replace(/```\s*$/, ""))
        : s.startsWith("```") &&
          (s = s.replace(/```\s*/, "").replace(/```\s*$/, ""));
      const n = JSON.parse(s);
      if (!n.tasks || !Array.isArray(n.tasks))
        throw new Error("响应格式错误：缺少tasks数组");
      return (
        n.tasks.forEach((o, i) => {
          if (!o.name || !o.description || !o.pomodoroCount)
            throw new Error(`第${i + 1}个任务缺少必要字段`);
        }),
        n
      );
    } catch (s) {
      throw (
        (console.error("解析AI响应失败:", s),
        console.error("原始响应:", e),
        new Error("AI响应格式错误，请重试"))
      );
    }
  }
  validateAndOptimizeTasks(e, s) {
    return e.map((n) => {
      const o = Math.min(Math.max(n.pomodoroCount * 25, 5), 240);
      let i = n.suggestedDate,
        r = n.suggestedTime;
      return (
        i || (i = new Date().toLocaleDateString("zh-CN")),
        r || (r = "14:00"),
        {
          name: n.name.slice(0, 30),
          description: n.description,
          duration: o,
          pomodoroCount: Math.ceil(o / 25),
          priority: n.priority || "medium",
          suggestedDate: i,
          suggestedTime: r,
          tags: n.tags || [],
          notes: n.notes || "",
        }
      );
    });
  }
  convertToSteps(e) {
    if (!e || !Array.isArray(e) || e.length === 0)
      return console.warn("convertToSteps: 无效的任务数据"), [];
    const s = [];
    return (
      e.forEach((n, o) => {
        if (!n || typeof n != "object") {
          console.warn("convertToSteps: 跳过无效的任务", n);
          return;
        }
        s.push({
          task: n.name || "未命名任务",
          description: n.description || "",
          duration: n.duration || 25,
          isrest: !1,
          begintime: "",
          endtime: "",
          completed: !1,
          priority: n.priority || "medium",
          notes: n.notes || "",
        }),
          o < e.length - 1 &&
            s.push({
              task: "休息时间",
              description: "短暂休息，放松身心，准备下一个任务",
              duration: 5,
              isrest: !0,
              begintime: "",
              endtime: "",
              completed: !1,
            });
      }),
      s
    );
  }
};
const og = {
    name: "TaskDecomposer",
    components: { BaseModal: eg },
    props: {
      visible: { type: Boolean, default: !1 },
      taskDescription: { type: String, default: "" },
      existingTasks: { type: Array, default: () => [] },
    },
    emits: ["close", "tasksAdded", "update:visible"],
    setup(t, { emit: e }) {
      const s = Tn(),
        n = po(),
        o = new sg(),
        i = B(t.taskDescription || ""),
        r = B(!1),
        a = B(null),
        c = B([]),
        u = B(""),
        d = B(!1),
        f = B(""),
        h = B({ avoidCourses: !0, considerWorkload: !0 }),
        p = [
          "正在分析任务复杂度...",
          "智能规划执行顺序...",
          "评估时间安排...",
          "检查冲突和优化...",
          "生成最佳方案...",
        ];
      let y = null;
      const b = { high: "高", medium: "中", low: "低" },
        A = ie(() => t.visible),
        L = ie(() => i.value.trim().length > 0 && n.isConfigured && !r.value),
        C = ie(() => {
          var H;
          return (H = a.value) != null && H.tasks
            ? a.value.tasks.reduce((te, X) => te + X.duration, 0)
            : 0;
        });
      async function _() {
        if (L.value) {
          (r.value = !0), (u.value = ""), (a.value = null), (c.value = []), v();
          try {
            const H = await o.decomposeTask(i.value, h.value);
            (a.value = H), (c.value = H.tasks.map((te, X) => X));
          } catch (H) {
            console.error("任务分解失败:", H), (u.value = H.message);
          } finally {
            (r.value = !1), D();
          }
        }
      }
      function v() {
        let H = 0;
        (f.value = p[H]),
          (y = setInterval(() => {
            (H = (H + 1) % p.length), (f.value = p[H]);
          }, 2e3));
      }
      function D() {
        y && (clearInterval(y), (y = null));
      }
      function w(H) {
        const te = c.value.indexOf(H);
        te > -1 ? c.value.splice(te, 1) : c.value.push(H);
      }
      function R() {
        var H;
        (H = a.value) != null &&
          H.tasks &&
          (c.value = a.value.tasks.map((te, X) => X));
      }
      function S() {
        c.value = [];
      }
      function E() {
        var te;
        if (c.value.length === 0 || !((te = a.value) != null && te.tasks))
          return;
        const H = c.value.map((X) => a.value.tasks[X]);
        try {
          const X = o.convertToSteps(H);
          if (!Array.isArray(X))
            throw (
              (console.error("步骤转换结果不是数组:", X),
              new Error("步骤转换失败"))
            );
          e("tasksAdded", {
            tasks: H,
            steps: X,
            mainTaskName: F(H),
            totalDuration: H.reduce((ne, ue) => ne + ue.duration, 0),
            description: i.value,
          }),
            Y(),
            e("close");
        } catch (X) {
          console.error("添加任务失败:", X),
            alert("添加任务失败: " + X.message);
        }
      }
      function F(H) {
        return H.length === 1
          ? H[0].name
          : H.length <= 3
          ? H.map((te) => te.name).join(" + ")
          : `${H[0].name}等${H.length}个任务`;
      }
      function K() {
        u.value = "";
      }
      function I(H) {
        H || (e("close"), e("update:visible", !1));
      }
      function Y() {
        (i.value = t.taskDescription || ""),
          (a.value = null),
          (c.value = []),
          (u.value = ""),
          (d.value = !1),
          (r.value = !1),
          D();
      }
      function G() {
        e("close"), s.push("/settings");
      }
      return (
        mt(() => {
          t.visible || Y();
        }),
        Si(() => {
          D();
        }),
        Zt(
          () => t.taskDescription,
          (H) => {
            i.value = H || "";
          }
        ),
        Zt(
          () => t.visible,
          (H) => {
            H || Y();
          }
        ),
        {
          localTaskDescription: i,
          isDecomposing: r,
          decomposedResult: a,
          selectedTasks: c,
          error: u,
          showReasoning: d,
          currentLoadingTip: f,
          options: h,
          aiStore: n,
          isVisible: A,
          canDecompose: L,
          totalEstimatedTime: C,
          priorityLabels: b,
          decomposeTask: _,
          toggleTaskSelection: w,
          selectAllTasks: R,
          clearSelection: S,
          addSelectedTasks: E,
          clearError: K,
          openAISettings: G,
          handleModalClose: I,
        }
      );
    },
  },
  ig = { class: "task-decomposer" },
  rg = { class: "modal-body" },
  ag = { class: "input-section" },
  lg = { class: "form-group" },
  cg = { class: "options-section" },
  ug = { class: "option-group" },
  dg = { class: "option-label" },
  fg = { class: "option-label" },
  hg = ["disabled"],
  pg = { key: 0, class: "fas fa-spinner fa-spin" },
  mg = { key: 1, class: "fas fa-magic" },
  gg = { key: 0, class: "ai-config-warning" },
  vg = { class: "warning-content" },
  yg = { key: 1, class: "results-section" },
  bg = { class: "results-header" },
  wg = { class: "result-summary" },
  kg = { class: "task-count" },
  Sg = { class: "total-time" },
  Tg = { key: 0, class: "reasoning-section" },
  Cg = { key: 0, class: "reasoning-content" },
  _g = { class: "tasks-list" },
  Dg = ["onClick"],
  xg = { key: 0, class: "fas fa-check" },
  Mg = { class: "task-content" },
  Eg = { class: "task-header" },
  Ag = { class: "task-name" },
  Ig = { class: "task-badges" },
  Rg = { class: "pomodoro-badge" },
  Og = { class: "task-description" },
  Pg = { class: "task-meta" },
  Ng = { class: "duration" },
  Lg = { class: "suggested-time" },
  Bg = { key: 0, class: "task-tags" },
  Wg = { key: 1, class: "task-notes" },
  Ug = { key: 1, class: "recommendations" },
  jg = { class: "actions-section" },
  Hg = { class: "selection-info" },
  Fg = { key: 0 },
  Vg = { key: 1, class: "hint" },
  $g = { class: "action-buttons" },
  zg = ["disabled"],
  Kg = ["disabled"],
  Gg = ["disabled"],
  Yg = { key: 2, class: "loading-section" },
  qg = { class: "loading-tips" },
  Xg = { key: 3, class: "error-section" },
  Jg = { class: "error-content" };
function Qg(t, e, s, n, o, i) {
  const r = Wt("BaseModal");
  return (
    k(),
    Ie(
      r,
      {
        show: n.isVisible,
        "onUpdate:show": n.handleModalClose,
        title: "AI智能任务分解",
        width: "800px",
        "custom-class": "task-decomposer-modal",
      },
      {
        default: Ae(() => [
          l("div", ig, [
            l("div", rg, [
              l("div", ag, [
                l("div", lg, [
                  e[10] || (e[10] = l("label", null, "任务描述", -1)),
                  e[11] || (e[11] = we()),
                  $e(
                    l(
                      "textarea",
                      {
                        "onUpdate:modelValue":
                          e[0] || (e[0] = (a) => (n.localTaskDescription = a)),
                        placeholder:
                          "请描述你要完成的任务，比如：准备期末考试、完成项目报告、学习新技能等...",
                        rows: "3",
                        class: "task-input",
                      },
                      null,
                      512
                    ),
                    [[rt, n.localTaskDescription]]
                  ),
                ]),
                l("div", cg, [
                  l("div", ug, [
                    l("label", dg, [
                      $e(
                        l(
                          "input",
                          {
                            type: "checkbox",
                            "onUpdate:modelValue":
                              e[1] ||
                              (e[1] = (a) => (n.options.avoidCourses = a)),
                          },
                          null,
                          512
                        ),
                        [[zo, n.options.avoidCourses]]
                      ),
                      e[12] ||
                        (e[12] = l("span", { class: "checkmark" }, null, -1)),
                      e[13] || (e[13] = we(" 规避课程时间 ")),
                    ]),
                    l("label", fg, [
                      $e(
                        l(
                          "input",
                          {
                            type: "checkbox",
                            "onUpdate:modelValue":
                              e[2] ||
                              (e[2] = (a) => (n.options.considerWorkload = a)),
                          },
                          null,
                          512
                        ),
                        [[zo, n.options.considerWorkload]]
                      ),
                      e[14] ||
                        (e[14] = l("span", { class: "checkmark" }, null, -1)),
                      e[15] || (e[15] = we(" 考虑当前工作量 ")),
                    ]),
                  ]),
                ]),
                l(
                  "button",
                  {
                    onClick:
                      e[3] ||
                      (e[3] = (...a) =>
                        n.decomposeTask && n.decomposeTask(...a)),
                    disabled: !n.canDecompose,
                    class: se(["decompose-btn", { loading: n.isDecomposing }]),
                  },
                  [
                    n.isDecomposing ? (k(), M("i", pg)) : (k(), M("i", mg)),
                    we(
                      " " + P(n.isDecomposing ? "智能分解中..." : "开始分解"),
                      1
                    ),
                  ],
                  10,
                  hg
                ),
              ]),
              n.aiStore.isConfigured
                ? Q("", !0)
                : (k(),
                  M("div", gg, [
                    l("div", vg, [
                      e[16] ||
                        (e[16] = l(
                          "i",
                          { class: "fas fa-exclamation-triangle" },
                          null,
                          -1
                        )),
                      e[17] ||
                        (e[17] = l(
                          "div",
                          null,
                          [
                            l("p", null, [l("strong", null, "AI服务未配置")]),
                            l(
                              "p",
                              null,
                              "请先在设置中配置AI API密钥才能使用智能分解功能"
                            ),
                          ],
                          -1
                        )),
                      l(
                        "button",
                        {
                          class: "btn btn-primary",
                          onClick:
                            e[4] ||
                            (e[4] = (...a) =>
                              n.openAISettings && n.openAISettings(...a)),
                        },
                        " 去配置 "
                      ),
                    ]),
                  ])),
              n.decomposedResult
                ? (k(),
                  M("div", yg, [
                    l("div", bg, [
                      e[18] || (e[18] = l("h4", null, "分解结果", -1)),
                      l("div", wg, [
                        l(
                          "span",
                          kg,
                          P(n.decomposedResult.tasks.length) + " 个任务",
                          1
                        ),
                        l(
                          "span",
                          Sg,
                          "预计 " +
                            P(
                              n.decomposedResult.totalEstimatedTime ||
                                n.totalEstimatedTime
                            ) +
                            " 分钟",
                          1
                        ),
                      ]),
                    ]),
                    n.decomposedResult.reasoning
                      ? (k(),
                        M("div", Tg, [
                          l(
                            "div",
                            {
                              class: "reasoning-toggle",
                              onClick:
                                e[5] ||
                                (e[5] = (a) =>
                                  (n.showReasoning = !n.showReasoning)),
                            },
                            [
                              l(
                                "i",
                                {
                                  class: se([
                                    "fas",
                                    n.showReasoning
                                      ? "fa-chevron-down"
                                      : "fa-chevron-right",
                                  ]),
                                },
                                null,
                                2
                              ),
                              e[19] ||
                                (e[19] = l("span", null, "分解逻辑", -1)),
                            ]
                          ),
                          n.showReasoning
                            ? (k(),
                              M("div", Cg, [
                                l(
                                  "p",
                                  null,
                                  P(n.decomposedResult.reasoning),
                                  1
                                ),
                              ]))
                            : Q("", !0),
                        ]))
                      : Q("", !0),
                    l("div", _g, [
                      (k(!0),
                      M(
                        he,
                        null,
                        Ne(
                          n.decomposedResult.tasks,
                          (a, c) => (
                            k(),
                            M(
                              "div",
                              {
                                key: c,
                                class: se([
                                  "task-item",
                                  {
                                    selected: n.selectedTasks.includes(c),
                                    "priority-high": a.priority === "high",
                                    "priority-medium": a.priority === "medium",
                                    "priority-low": a.priority === "low",
                                  },
                                ]),
                                onClick: (u) => n.toggleTaskSelection(c),
                              },
                              [
                                l(
                                  "div",
                                  {
                                    class: se([
                                      "task-checkbox",
                                      { checked: n.selectedTasks.includes(c) },
                                    ]),
                                  },
                                  [
                                    n.selectedTasks.includes(c)
                                      ? (k(), M("i", xg))
                                      : Q("", !0),
                                  ],
                                  2
                                ),
                                l("div", Mg, [
                                  l("div", Eg, [
                                    l("h5", Ag, P(a.name), 1),
                                    l("div", Ig, [
                                      l(
                                        "span",
                                        {
                                          class: se([
                                            "priority-badge",
                                            a.priority,
                                          ]),
                                        },
                                        P(n.priorityLabels[a.priority]),
                                        3
                                      ),
                                      l(
                                        "span",
                                        Rg,
                                        " 🍅 " + P(a.pomodoroCount),
                                        1
                                      ),
                                    ]),
                                  ]),
                                  l("p", Og, P(a.description), 1),
                                  l("div", Pg, [
                                    l(
                                      "span",
                                      Ng,
                                      "⏱️ " + P(a.duration) + " 分钟",
                                      1
                                    ),
                                    l(
                                      "span",
                                      Lg,
                                      " 📅 " +
                                        P(a.suggestedDate) +
                                        " " +
                                        P(a.suggestedTime),
                                      1
                                    ),
                                  ]),
                                  a.tags && a.tags.length
                                    ? (k(),
                                      M("div", Bg, [
                                        (k(!0),
                                        M(
                                          he,
                                          null,
                                          Ne(
                                            a.tags,
                                            (u) => (
                                              k(),
                                              M(
                                                "span",
                                                { key: u, class: "tag" },
                                                P(u),
                                                1
                                              )
                                            )
                                          ),
                                          128
                                        )),
                                      ]))
                                    : Q("", !0),
                                  a.notes
                                    ? (k(),
                                      M("div", Wg, [
                                        e[20] ||
                                          (e[20] = l(
                                            "i",
                                            { class: "fas fa-lightbulb" },
                                            null,
                                            -1
                                          )),
                                        l("span", null, P(a.notes), 1),
                                      ]))
                                    : Q("", !0),
                                ]),
                              ],
                              10,
                              Dg
                            )
                          )
                        ),
                        128
                      )),
                    ]),
                    n.decomposedResult.recommendations &&
                    n.decomposedResult.recommendations.length
                      ? (k(),
                        M("div", Ug, [
                          e[21] || (e[21] = l("h5", null, "💡 建议", -1)),
                          l("ul", null, [
                            (k(!0),
                            M(
                              he,
                              null,
                              Ne(
                                n.decomposedResult.recommendations,
                                (a, c) => (k(), M("li", { key: c }, P(a), 1))
                              ),
                              128
                            )),
                          ]),
                        ]))
                      : Q("", !0),
                    l("div", jg, [
                      l("div", Hg, [
                        n.selectedTasks.length > 0
                          ? (k(),
                            M(
                              "span",
                              Fg,
                              " 已选择 " +
                                P(n.selectedTasks.length) +
                                " 个任务 ",
                              1
                            ))
                          : (k(),
                            M("span", Vg, " 点击任务卡片选择要添加的任务 ")),
                      ]),
                      l("div", $g, [
                        l(
                          "button",
                          {
                            onClick:
                              e[6] ||
                              (e[6] = (...a) =>
                                n.selectAllTasks && n.selectAllTasks(...a)),
                            class: "btn btn-secondary",
                            disabled:
                              n.selectedTasks.length ===
                              n.decomposedResult.tasks.length,
                          },
                          " 全选 ",
                          8,
                          zg
                        ),
                        l(
                          "button",
                          {
                            onClick:
                              e[7] ||
                              (e[7] = (...a) =>
                                n.clearSelection && n.clearSelection(...a)),
                            class: "btn btn-secondary",
                            disabled: n.selectedTasks.length === 0,
                          },
                          " 清空 ",
                          8,
                          Kg
                        ),
                        l(
                          "button",
                          {
                            onClick:
                              e[8] ||
                              (e[8] = (...a) =>
                                n.addSelectedTasks && n.addSelectedTasks(...a)),
                            class: "btn btn-primary",
                            disabled: n.selectedTasks.length === 0,
                          },
                          " 添加选中任务 (" + P(n.selectedTasks.length) + ") ",
                          9,
                          Gg
                        ),
                      ]),
                    ]),
                  ]))
                : Q("", !0),
              n.isDecomposing
                ? (k(),
                  M("div", Yg, [
                    e[22] ||
                      (e[22] = l(
                        "div",
                        { class: "loading-animation" },
                        [l("div", { class: "spinner" })],
                        -1
                      )),
                    e[23] ||
                      (e[23] = l(
                        "p",
                        { class: "loading-text" },
                        "AI正在智能分析和分解任务...",
                        -1
                      )),
                    l("div", qg, [
                      l("p", null, "💡 " + P(n.currentLoadingTip), 1),
                    ]),
                  ]))
                : Q("", !0),
              n.error
                ? (k(),
                  M("div", Xg, [
                    l("div", Jg, [
                      e[25] ||
                        (e[25] = l(
                          "i",
                          { class: "fas fa-exclamation-circle" },
                          null,
                          -1
                        )),
                      l("div", null, [
                        e[24] ||
                          (e[24] = l(
                            "p",
                            null,
                            [l("strong", null, "分解失败")],
                            -1
                          )),
                        l("p", null, P(n.error), 1),
                      ]),
                      l(
                        "button",
                        {
                          class: "btn btn-secondary",
                          onClick:
                            e[9] ||
                            (e[9] = (...a) =>
                              n.clearError && n.clearError(...a)),
                        },
                        " 重试 "
                      ),
                    ]),
                  ]))
                : Q("", !0),
            ]),
          ]),
        ]),
        _: 1,
      },
      8,
      ["show", "onUpdate:show"]
    )
  );
}
const Zg = gt(og, [
    ["render", Qg],
    ["__scopeId", "data-v-7ea075e5"],
  ]),
  ev = {
    components: { TaskDecomposer: Zg },
    setup() {
      const t = Tn(),
        e = ho(),
        s = Pi(),
        n = B(""),
        o = B(!1),
        i = B(""),
        r = B(""),
        a = B({
          maintask: "",
          description: "",
          duration: 30,
          begintime: "",
          endtime: "",
          steps: [],
        }),
        c = B(!1),
        u = B({ work: 25, rest: 5 }),
        d = B({ task: "", description: "", duration: 10, isrest: !1 }),
        f = B(!1),
        h = B(!1),
        p = B(null),
        y = B(!1),
        b = B(-1),
        A = ie(() =>
          e.tasks
            .filter((x) => x.completed)
            .sort((x, z) => new Date(z.completedAt) - new Date(x.completedAt))
        ),
        L = ie(() =>
          e.tasks
            .filter((x) => !x.completed)
            .sort((x, z) => new Date(z.begintime) - new Date(x.begintime))
        ),
        C = ie(() => e.tasks.length > 0);
      function _() {
        const x = new Date(),
          z = x.getHours().toString().padStart(2, "0"),
          oe = x.getMinutes().toString().padStart(2, "0");
        n.value = `${z}:${oe}`;
      }
      const v = B(!1),
        D = B(null),
        w = B(!1);
      function R() {
        w.value = !0;
      }
      function S() {
        w.value = !1;
      }
      function E(x) {
        console.log("接收到AI生成的任务数据:", x),
          x && x.steps && Array.isArray(x.steps)
            ? (Array.isArray(a.value.steps) || (a.value.steps = []),
              a.value.steps.push(...x.steps),
              (!a.value.maintask || a.value.maintask.trim() === "") &&
                (a.value.maintask = x.mainTaskName || "智能分解的任务"),
              (!a.value.description || a.value.description.trim() === "") &&
                (a.value.description = x.description || ""))
            : console.error("接收到的任务数据格式不正确:", x),
          Z(),
          S();
      }
      function F(x) {
        if (x.completed) return;
        (h.value = !0), (p.value = x);
        const z = x.begintime
          ? `${x.begintime.substring(0, 4)}-${x.begintime.substring(
              4,
              6
            )}-${x.begintime.substring(6, 8)}T${x.begintime.substring(
              8,
              10
            )}:${x.begintime.substring(10, 12)}`
          : new Date().toISOString().slice(0, 16);
        (i.value = z),
          (a.value = {
            maintask: x.maintask,
            description: x.description || "",
            duration: x.duration,
            date: z.split("T")[0],
            begintime: x.begintime,
            endtime: x.endtime,
            steps: [...(x.steps || [])],
          }),
          (o.value = !0);
      }
      function K() {
        (h.value = !1), (p.value = null);
        const x = new Date();
        (i.value = new Date(x.getTime() - x.getTimezoneOffset() * 6e4)
          .toISOString()
          .slice(0, 16)),
          (a.value = {
            maintask: "",
            description: "",
            duration: 30,
            date: i.value.split("T")[0],
            begintime: "",
            endtime: "",
            steps: [],
          }),
          (c.value = !1),
          (u.value = { work: 25, rest: 5 }),
          (o.value = !0);
      }
      function I() {
        o.value = !1;
      }
      function Y(x = -1) {
        if (x >= 0 && a.value.steps && a.value.steps[x]) {
          (y.value = !0), (b.value = x);
          const z = a.value.steps[x];
          d.value = {
            task: z.task || "",
            description: z.description || "",
            duration: z.duration || 10,
            isrest: z.isrest || !1,
          };
        } else
          (y.value = !1),
            (b.value = -1),
            (d.value = { task: "", description: "", duration: 10, isrest: !1 });
        f.value = !0;
      }
      function G() {
        (f.value = !1),
          h.value && p.value && p.value === D.value && (o.value = !0);
      }
      function H() {
        let x = parseInt(a.value.duration);
        isNaN(x) || x < 1
          ? (a.value.duration = 1)
          : x > 240
          ? (a.value.duration = 240)
          : (a.value.duration = x);
      }
      function te() {
        let x = parseInt(d.value.duration);
        isNaN(x) || x < 1
          ? (d.value.duration = 1)
          : x > 120
          ? (d.value.duration = 120)
          : (d.value.duration = x);
      }
      function X() {
        a.value.duration > 5 &&
          (a.value.duration = parseInt(a.value.duration) - 5);
      }
      function ne() {
        a.value.duration < 240 &&
          (a.value.duration = parseInt(a.value.duration) + 5);
      }
      function ue() {
        d.value.duration > 1 &&
          (d.value.duration = parseInt(d.value.duration) - 1);
      }
      function Re() {
        d.value.duration < 120 &&
          (d.value.duration = parseInt(d.value.duration) + 1);
      }
      function me() {
        u.value.work > 5 && (u.value.work = parseInt(u.value.work) - 5);
      }
      function ke() {
        u.value.work < 120 && (u.value.work = parseInt(u.value.work) + 5);
      }
      function We() {
        u.value.rest > 1 && (u.value.rest = parseInt(u.value.rest) - 1);
      }
      function ce() {
        u.value.rest < 30 && (u.value.rest = parseInt(u.value.rest) + 1);
      }
      function De() {
        dt(() => {
          const x = document.querySelector(".steps-list");
          x && (x.scrollTop = x.scrollHeight);
        });
      }
      function be() {
        if (!d.value.task.trim()) {
          alert("请输入步骤名称");
          return;
        }
        te();
        const x = {
          task: d.value.task,
          description: d.value.description,
          duration: d.value.duration,
          isrest: c.value ? !1 : d.value.isrest,
          begintime: "",
          endtime: "",
          completed: !1,
        };
        y.value && b.value >= 0
          ? (a.value.steps[b.value] = x)
          : a.value.steps.push(x),
          Z(),
          G(),
          De();
      }
      function U(x) {
        a.value.steps.splice(x, 1), Z();
      }
      function Z() {
        a.value.steps.length > 0 &&
          (a.value.duration = a.value.steps.reduce(
            (x, z) => x + z.duration,
            0
          ));
      }
      function O() {
        if (!a.value.maintask.trim()) {
          alert("请输入任务名称");
          return;
        }
        H();
        const x = new Date(i.value),
          z =
            x.getFullYear().toString() +
            (x.getMonth() + 1).toString().padStart(2, "0") +
            x.getDate().toString().padStart(2, "0") +
            x.getHours().toString().padStart(2, "0") +
            x.getMinutes().toString().padStart(2, "0"),
          oe = new Date(x.getTime() + a.value.duration * 6e4),
          de =
            oe.getFullYear().toString() +
            (oe.getMonth() + 1).toString().padStart(2, "0") +
            oe.getDate().toString().padStart(2, "0") +
            oe.getHours().toString().padStart(2, "0") +
            oe.getMinutes().toString().padStart(2, "0"),
          Se = {
            maintask: a.value.maintask,
            description: a.value.description,
            duration: a.value.duration,
            date: i.value.split("T")[0],
            begintime: z,
            endtime: de,
            steps: a.value.steps.map((ge, Ge) => {
              let Le = new Date(x.getTime());
              for (let Cn = 0; Cn < Ge; Cn++)
                Le = new Date(Le.getTime() + a.value.steps[Cn].duration * 6e4);
              const Ye = new Date(Le.getTime() + ge.duration * 6e4),
                lt =
                  Le.getFullYear().toString() +
                  (Le.getMonth() + 1).toString().padStart(2, "0") +
                  Le.getDate().toString().padStart(2, "0") +
                  Le.getHours().toString().padStart(2, "0") +
                  Le.getMinutes().toString().padStart(2, "0"),
                rn =
                  Ye.getFullYear().toString() +
                  (Ye.getMonth() + 1).toString().padStart(2, "0") +
                  Ye.getDate().toString().padStart(2, "0") +
                  Ye.getHours().toString().padStart(2, "0") +
                  Ye.getMinutes().toString().padStart(2, "0");
              return { ...ge, begintime: lt, endtime: rn };
            }),
          };
        if (h.value && p.value) {
          const ge = { ...p.value, ...Se };
          console.log("准备更新任务:", ge),
            e.updateTask(ge)
              ? (console.log("任务更新成功"), I())
              : (console.error("任务更新失败"), alert("更新任务失败，请重试"));
        } else
          console.log("准备添加新任务:", Se),
            e.addTask(Se)
              ? (console.log("任务添加成功"), I())
              : (console.error("任务添加失败"), alert("添加任务失败，请重试"));
      }
      function V(x) {
        x.completed ? e.restoreTask(x.id) : e.completeTask(x.id);
      }
      function le(x) {
        confirm("确定要删除这个任务吗？") && e.deleteTask(x);
      }
      function g(x) {
        s.setTask(x), t.push("/timer");
      }
      function m(x) {
        if (!x || x.length < 12) return "";
        x.substring(0, 4), x.substring(4, 6), x.substring(6, 8);
        const z = x.substring(8, 10),
          oe = x.substring(10, 12);
        return `${z}:${oe}`;
      }
      function T(x) {
        if (!x) return "无";
        const [z, oe] = x.split("/");
        return `每工作 ${z} 分钟休息 ${oe} 分钟`;
      }
      function N(x) {
        return x.steps ? x.steps.filter((z) => z.completed).length : 0;
      }
      function j(x) {
        if (!x) return "";
        const z = new Date(x),
          oe = new Date(),
          de = new Date(oe);
        return (
          de.setDate(de.getDate() - 1),
          z.toDateString() === oe.toDateString()
            ? "今天"
            : z.toDateString() === de.toDateString()
            ? "昨天"
            : `${z.getMonth() + 1}月${z.getDate()}日`
        );
      }
      function W(x) {
        if (!x) return "";
        const z = new Date(x),
          oe = new Date(),
          de = new Date(oe);
        return (
          de.setDate(de.getDate() + 1),
          z.toDateString() === oe.toDateString()
            ? "今天"
            : z.toDateString() === de.toDateString()
            ? "明天"
            : `${z.getMonth() + 1}月${z.getDate()}日`
        );
      }
      function ee(x, z) {
        e.toggleStepCompletion(x, z);
      }
      function J(x) {
        (D.value = x), (v.value = !0);
      }
      function q() {
        (v.value = !1), (D.value = null);
      }
      function $() {
        a.value.date = i.value.split("T")[0];
      }
      function ae(x) {
        if (
          !D.value ||
          D.value.completed ||
          x < 0 ||
          !D.value.steps ||
          !D.value.steps[x]
        )
          return;
        const z = D.value.steps[x];
        (y.value = !0),
          (b.value = x),
          (d.value = {
            task: z.task || "",
            description: z.description || "",
            duration: z.duration || 10,
            isrest: z.isrest || !1,
          }),
          (v.value = !1),
          (h.value = !0),
          (p.value = D.value);
        const oe = D.value.begintime
          ? `${D.value.begintime.substring(0, 4)}-${D.value.begintime.substring(
              4,
              6
            )}-${D.value.begintime.substring(
              6,
              8
            )}T${D.value.begintime.substring(
              8,
              10
            )}:${D.value.begintime.substring(10, 12)}`
          : new Date().toISOString().slice(0, 16);
        (i.value = oe),
          (a.value = {
            maintask: D.value.maintask,
            description: D.value.description || "",
            duration: D.value.duration,
            date: oe.split("T")[0],
            begintime: D.value.begintime,
            endtime: D.value.endtime,
            steps: [...(D.value.steps || [])],
          }),
          (f.value = !0);
      }
      return (
        mt(() => {
          _();
          const x = setInterval(_, 6e4);
          kn(() => {
            clearInterval(x);
          });
        }),
        {
          currentTime: n,
          showAddTaskModal: o,
          newTask: a,
          selectedDateTime: i,
          minDateTime: r,
          uncompletedTasks: L,
          completedTasks: A,
          hasTasks: C,
          openAddTaskModal: K,
          closeAddTaskModal: I,
          addTask: O,
          toggleTaskCompletion: V,
          deleteTask: le,
          startTask: g,
          updateTaskDateTime: $,
          showRestFrequencyInput: c,
          restFrequency: u,
          newStep: d,
          showAddStepModal: f,
          openAddStepModal: Y,
          closeAddStepModal: G,
          validateDuration: H,
          validateStepDuration: te,
          decrementDuration: X,
          incrementDuration: ne,
          decrementStepDuration: ue,
          incrementStepDuration: Re,
          decrementWorkTime: me,
          incrementWorkTime: ke,
          decrementRestTime: We,
          incrementRestTime: ce,
          addStep: be,
          removeStep: U,
          calculateTotalDuration: Z,
          getCompletedStepsCount: N,
          formatCompletedDate: j,
          formatStepTime: m,
          formatDate: W,
          getRestFrequencyText: T,
          showTaskDetails: J,
          closeTaskDetailsModal: q,
          showTaskDetailsModal: v,
          selectedTask: D,
          toggleStepCompletion: ee,
          editSelectedTaskStep: ae,
          editTask: F,
          isEditMode: h,
          isEditingStep: y,
          showTaskDecomposer: w,
          openTaskDecomposer: R,
          closeTaskDecomposer: S,
          handleTasksAdded: E,
          tasksStore: e,
        }
      );
    },
  },
  tv = { class: "tasks-page" },
  nv = { class: "nav-bar" },
  sv = { class: "content" },
  ov = { key: 0, class: "task-section" },
  iv = ["onClick"],
  rv = ["onClick"],
  av = { class: "task-subtitle" },
  lv = { class: "task-subline" },
  cv = { key: 0 },
  uv = { class: "task-subline" },
  dv = { key: 0 },
  fv = { class: "task-actions" },
  hv = ["onClick"],
  pv = ["onClick"],
  mv = ["onClick"],
  gv = { key: 1, class: "task-section" },
  vv = ["onClick"],
  yv = { class: "task-content" },
  bv = { class: "task-title" },
  wv = { class: "task-subtitle" },
  kv = { class: "task-subline" },
  Sv = { key: 0 },
  Tv = { class: "task-subline" },
  Cv = { key: 0 },
  _v = { key: 0, class: "task-description" },
  Dv = { class: "task-actions" },
  xv = ["onClick"],
  Mv = ["onClick"],
  Ev = { key: 1, class: "no-tasks" },
  Av = { class: "empty-state" },
  Iv = { key: 0, class: "modal-backdrop" },
  Rv = { class: "modal-content" },
  Ov = { class: "modal-header" },
  Pv = { class: "modal-body" },
  Nv = { class: "form-group" },
  Lv = { class: "form-group" },
  Bv = { class: "form-group" },
  Wv = { class: "number-input" },
  Uv = { class: "form-group" },
  jv = { class: "datetime-picker-container" },
  Hv = ["min"],
  Fv = { class: "form-group steps-section" },
  Vv = { class: "steps-header" },
  $v = { class: "steps-actions" },
  zv = { key: 0, style: { margin: "5px 0 10px 0" } },
  Kv = { key: 1, class: "steps-list" },
  Gv = ["onClick"],
  Yv = { class: "step-content" },
  qv = { class: "step-title" },
  Xv = { key: 0, class: "rest-badge" },
  Jv = { class: "step-duration" },
  Qv = { class: "step-actions" },
  Zv = ["onClick"],
  ey = { class: "modal-footer" },
  ty = { key: 0, class: "modal-backdrop" },
  ny = { class: "modal-content" },
  sy = { class: "modal-header" },
  oy = { class: "modal-body" },
  iy = { class: "form-group" },
  ry = { class: "form-group" },
  ay = { class: "form-group" },
  ly = { class: "number-input" },
  cy = { key: 0, class: "form-group" },
  uy = { class: "checkbox-group" },
  dy = { class: "custom-checkbox" },
  fy = { class: "modal-footer" },
  hy = { key: 0, class: "modal-backdrop" },
  py = { class: "modal-content" },
  my = { class: "modal-header" },
  gy = { key: 0, class: "modal-body task-details-modal" },
  vy = { class: "task-details-header" },
  yy = { class: "task-meta" },
  by = { key: 0 },
  wy = { key: 1 },
  ky = { key: 0, class: "task-details-description" },
  Sy = { key: 0, class: "steps-list detailed" },
  Ty = ["onClick"],
  Cy = { class: "step-header" },
  _y = ["onClick"],
  Dy = ["onClick"],
  xy = { key: 0, class: "rest-badge" },
  My = { class: "step-details" },
  Ey = { key: 0 },
  Ay = { class: "step-meta" },
  Iy = { key: 0 },
  Ry = { key: 1, class: "no-steps" },
  Oy = { class: "modal-footer" };
function Py(t, e, s, n, o, i) {
  const r = Wt("TaskDecomposer");
  return (
    k(),
    M("div", tv, [
      l("div", nv, [
        e[30] || (e[30] = l("div", { class: "nav-title" }, "任务", -1)),
        l("i", {
          class: "fas fa-plus",
          style: { "font-size": "24px" },
          onClick:
            e[0] ||
            (e[0] = (...a) => n.openAddTaskModal && n.openAddTaskModal(...a)),
        }),
      ]),
      l("div", sv, [
        n.hasTasks
          ? (k(),
            M(
              he,
              { key: 0 },
              [
                n.uncompletedTasks.length
                  ? (k(),
                    M("div", ov, [
                      e[31] ||
                        (e[31] = l(
                          "h2",
                          { class: "section-title" },
                          "进行中",
                          -1
                        )),
                      pe(
                        Sr,
                        { name: "list", tag: "div", class: "task-list" },
                        {
                          default: Ae(() => [
                            (k(!0),
                            M(
                              he,
                              null,
                              Ne(
                                n.uncompletedTasks,
                                (a) => (
                                  k(),
                                  M(
                                    "div",
                                    {
                                      class: se([
                                        "task-item",
                                        { completed: a.completed },
                                      ]),
                                      key: a.id,
                                    },
                                    [
                                      l(
                                        "div",
                                        {
                                          class: se([
                                            "task-checkbox",
                                            { completed: a.completed },
                                          ]),
                                          onClick: (c) =>
                                            n.toggleTaskCompletion(a),
                                        },
                                        null,
                                        10,
                                        iv
                                      ),
                                      l(
                                        "div",
                                        {
                                          class: "task-content",
                                          onClick: Ce(
                                            (c) => n.showTaskDetails(a),
                                            ["stop"]
                                          ),
                                        },
                                        [
                                          l(
                                            "div",
                                            {
                                              class: se([
                                                "task-title",
                                                { editable: !a.completed },
                                              ]),
                                            },
                                            P(a.maintask),
                                            3
                                          ),
                                          l("div", av, [
                                            l("div", lv, [
                                              l(
                                                "span",
                                                null,
                                                P(a.duration) + " 分钟",
                                                1
                                              ),
                                              a.steps && a.steps.length
                                                ? (k(),
                                                  M(
                                                    "span",
                                                    cv,
                                                    " · " +
                                                      P(
                                                        n.getCompletedStepsCount(
                                                          a
                                                        )
                                                      ) +
                                                      "/" +
                                                      P(a.steps.length) +
                                                      " 个步骤",
                                                    1
                                                  ))
                                                : Q("", !0),
                                            ]),
                                            l("div", uv, [
                                              a.begintime && a.endtime
                                                ? (k(),
                                                  M(
                                                    "span",
                                                    dv,
                                                    P(
                                                      n.formatStepTime(
                                                        a.begintime
                                                      )
                                                    ) +
                                                      " - " +
                                                      P(
                                                        n.formatStepTime(
                                                          a.endtime
                                                        )
                                                      ),
                                                    1
                                                  ))
                                                : Q("", !0),
                                              l(
                                                "span",
                                                null,
                                                " · " + P(n.formatDate(a.date)),
                                                1
                                              ),
                                            ]),
                                          ]),
                                          a.description
                                            ? (k(),
                                              M(
                                                "div",
                                                {
                                                  key: 0,
                                                  class: se([
                                                    "task-description",
                                                    { editable: !a.completed },
                                                  ]),
                                                },
                                                P(a.description),
                                                3
                                              ))
                                            : Q("", !0),
                                        ],
                                        8,
                                        rv
                                      ),
                                      l("div", fv, [
                                        l(
                                          "i",
                                          {
                                            class: "fas fa-play",
                                            onClick: Ce(
                                              (c) => n.startTask(a),
                                              ["stop"]
                                            ),
                                          },
                                          null,
                                          8,
                                          hv
                                        ),
                                        l(
                                          "i",
                                          {
                                            class: "fas fa-pencil",
                                            onClick: (c) => n.editTask(a),
                                            title: "查看详情",
                                          },
                                          null,
                                          8,
                                          pv
                                        ),
                                        l(
                                          "i",
                                          {
                                            class: "fas fa-trash",
                                            onClick: Ce(
                                              (c) => n.deleteTask(a.id),
                                              ["stop"]
                                            ),
                                          },
                                          null,
                                          8,
                                          mv
                                        ),
                                      ]),
                                    ],
                                    2
                                  )
                                )
                              ),
                              128
                            )),
                          ]),
                          _: 1,
                        }
                      ),
                    ]))
                  : Q("", !0),
                n.completedTasks.length
                  ? (k(),
                    M("div", gv, [
                      e[32] ||
                        (e[32] = l(
                          "h2",
                          { class: "section-title" },
                          "已完成",
                          -1
                        )),
                      pe(
                        Sr,
                        { name: "list", tag: "div", class: "task-list" },
                        {
                          default: Ae(() => [
                            (k(!0),
                            M(
                              he,
                              null,
                              Ne(
                                n.completedTasks,
                                (a) => (
                                  k(),
                                  M(
                                    "div",
                                    { class: "task-item completed", key: a.id },
                                    [
                                      l(
                                        "div",
                                        {
                                          class: "task-checkbox completed",
                                          onClick: (c) =>
                                            n.toggleTaskCompletion(a),
                                        },
                                        null,
                                        8,
                                        vv
                                      ),
                                      l("div", yv, [
                                        l("div", bv, P(a.maintask), 1),
                                        l("div", wv, [
                                          l("div", kv, [
                                            l(
                                              "span",
                                              null,
                                              P(a.duration) + " 分钟",
                                              1
                                            ),
                                            a.steps && a.steps.length
                                              ? (k(),
                                                M(
                                                  "span",
                                                  Sv,
                                                  " · " +
                                                    P(
                                                      n.getCompletedStepsCount(
                                                        a
                                                      )
                                                    ) +
                                                    "/" +
                                                    P(a.steps.length) +
                                                    " 个步骤",
                                                  1
                                                ))
                                              : Q("", !0),
                                          ]),
                                          l("div", Tv, [
                                            a.begintime && a.endtime
                                              ? (k(),
                                                M(
                                                  "span",
                                                  Cv,
                                                  P(
                                                    n.formatStepTime(
                                                      a.begintime
                                                    )
                                                  ) +
                                                    " - " +
                                                    P(
                                                      n.formatStepTime(
                                                        a.endtime
                                                      )
                                                    ),
                                                  1
                                                ))
                                              : Q("", !0),
                                            l(
                                              "span",
                                              null,
                                              " · " +
                                                P(
                                                  n.formatCompletedDate(
                                                    a.completedAt
                                                  )
                                                ),
                                              1
                                            ),
                                          ]),
                                        ]),
                                        a.description
                                          ? (k(),
                                            M("div", _v, P(a.description), 1))
                                          : Q("", !0),
                                      ]),
                                      l("div", Dv, [
                                        l(
                                          "i",
                                          {
                                            class: "fas fa-info-circle",
                                            onClick: Ce(
                                              (c) => n.showTaskDetails(a),
                                              ["stop"]
                                            ),
                                            title: "查看详情",
                                          },
                                          null,
                                          8,
                                          xv
                                        ),
                                        l(
                                          "i",
                                          {
                                            class: "fas fa-trash",
                                            onClick: Ce(
                                              (c) => n.deleteTask(a.id),
                                              ["stop"]
                                            ),
                                          },
                                          null,
                                          8,
                                          Mv
                                        ),
                                      ]),
                                    ]
                                  )
                                )
                              ),
                              128
                            )),
                          ]),
                          _: 1,
                        }
                      ),
                    ]))
                  : Q("", !0),
              ],
              64
            ))
          : Q("", !0),
        n.hasTasks
          ? Q("", !0)
          : (k(),
            M("div", Ev, [
              l("div", Av, [
                e[33] ||
                  (e[33] = l(
                    "i",
                    { class: "fas fa-list-check empty-icon" },
                    null,
                    -1
                  )),
                e[34] || (e[34] = l("p", null, "还没有任务", -1)),
                l(
                  "button",
                  {
                    class: "btn btn-primary",
                    onClick:
                      e[1] ||
                      (e[1] = (...a) =>
                        n.openAddTaskModal && n.openAddTaskModal(...a)),
                  },
                  " 添加任务 "
                ),
              ]),
            ])),
      ]),
      (k(),
      Ie(Je, { to: ".app-container" }, [
        pe(
          Ke,
          { name: "modal" },
          {
            default: Ae(() => [
              n.showAddTaskModal
                ? (k(),
                  M("div", Iv, [
                    l("div", Rv, [
                      l("div", Ov, [
                        l(
                          "h2",
                          null,
                          P(n.isEditMode ? "编辑任务" : "添加任务"),
                          1
                        ),
                        l("i", {
                          class: "fas fa-times close-modal",
                          onClick:
                            e[2] ||
                            (e[2] = (...a) =>
                              n.closeAddTaskModal && n.closeAddTaskModal(...a)),
                        }),
                      ]),
                      l("div", Pv, [
                        l("div", Nv, [
                          e[35] || (e[35] = l("label", null, "任务名称", -1)),
                          $e(
                            l(
                              "input",
                              {
                                type: "text",
                                "onUpdate:modelValue":
                                  e[3] ||
                                  (e[3] = (a) => (n.newTask.maintask = a)),
                                placeholder: "请输入任务名称",
                              },
                              null,
                              512
                            ),
                            [[rt, n.newTask.maintask]]
                          ),
                        ]),
                        l("div", Lv, [
                          e[36] || (e[36] = l("label", null, "任务描述", -1)),
                          $e(
                            l(
                              "input",
                              {
                                type: "text",
                                "onUpdate:modelValue":
                                  e[4] ||
                                  (e[4] = (a) => (n.newTask.description = a)),
                                placeholder: "请输入任务描述（可选）",
                              },
                              null,
                              512
                            ),
                            [[rt, n.newTask.description]]
                          ),
                        ]),
                        l("div", Bv, [
                          e[39] ||
                            (e[39] = l("label", null, "任务时长（分钟）", -1)),
                          l("div", Wv, [
                            l(
                              "button",
                              {
                                type: "button",
                                onClick:
                                  e[5] ||
                                  (e[5] = Ce(
                                    (...a) =>
                                      n.decrementDuration &&
                                      n.decrementDuration(...a),
                                    ["prevent"]
                                  )),
                              },
                              e[37] ||
                                (e[37] = [
                                  l("i", { class: "fas fa-minus" }, null, -1),
                                ])
                            ),
                            $e(
                              l(
                                "input",
                                {
                                  type: "number",
                                  "onUpdate:modelValue":
                                    e[6] ||
                                    (e[6] = (a) => (n.newTask.duration = a)),
                                  min: "1",
                                  max: "240",
                                  onChange:
                                    e[7] ||
                                    (e[7] = (...a) =>
                                      n.validateDuration &&
                                      n.validateDuration(...a)),
                                },
                                null,
                                544
                              ),
                              [[rt, n.newTask.duration, void 0, { number: !0 }]]
                            ),
                            l(
                              "button",
                              {
                                type: "button",
                                onClick:
                                  e[8] ||
                                  (e[8] = Ce(
                                    (...a) =>
                                      n.incrementDuration &&
                                      n.incrementDuration(...a),
                                    ["prevent"]
                                  )),
                              },
                              e[38] ||
                                (e[38] = [
                                  l("i", { class: "fas fa-plus" }, null, -1),
                                ])
                            ),
                          ]),
                        ]),
                        l("div", Uv, [
                          e[40] || (e[40] = l("label", null, "开始时间", -1)),
                          l("div", jv, [
                            $e(
                              l(
                                "input",
                                {
                                  type: "datetime-local",
                                  "onUpdate:modelValue":
                                    e[9] ||
                                    (e[9] = (a) => (n.selectedDateTime = a)),
                                  onChange:
                                    e[10] ||
                                    (e[10] = (...a) =>
                                      n.updateTaskDateTime &&
                                      n.updateTaskDateTime(...a)),
                                  class: "datetime-picker",
                                  min: n.minDateTime,
                                },
                                null,
                                40,
                                Hv
                              ),
                              [[rt, n.selectedDateTime]]
                            ),
                          ]),
                        ]),
                        l("div", Fv, [
                          l("div", Vv, [
                            e[43] || (e[43] = l("label", null, "任务步骤", -1)),
                            l("div", $v, [
                              l(
                                "button",
                                {
                                  type: "button",
                                  class: "btn btn-small btn-ai",
                                  onClick:
                                    e[11] ||
                                    (e[11] = (...a) =>
                                      n.openTaskDecomposer &&
                                      n.openTaskDecomposer(...a)),
                                },
                                e[41] ||
                                  (e[41] = [
                                    l("i", { class: "fas fa-magic" }, null, -1),
                                    we(" AI编排 "),
                                  ])
                              ),
                              l(
                                "button",
                                {
                                  type: "button",
                                  class: "btn btn-small",
                                  onClick:
                                    e[12] ||
                                    (e[12] = (...a) =>
                                      n.openAddStepModal &&
                                      n.openAddStepModal(...a)),
                                },
                                e[42] ||
                                  (e[42] = [
                                    l("i", { class: "fas fa-plus" }, null, -1),
                                    we(" 添加步骤 "),
                                  ])
                              ),
                            ]),
                          ]),
                          !n.newTask.steps.length > 0
                            ? (k(),
                              M(
                                "div",
                                zv,
                                e[44] ||
                                  (e[44] = [
                                    l(
                                      "p",
                                      {
                                        style: {
                                          color: "var(--text-light)",
                                          "font-size": "12px",
                                        },
                                      },
                                      " * 编排任务时使用25分钟专注+5分钟休息交替进行，可以帮助维持专注力，并有效缓解疲劳。",
                                      -1
                                    ),
                                  ])
                              ))
                            : Q("", !0),
                          n.newTask.steps.length > 0
                            ? (k(),
                              M("div", Kv, [
                                (k(!0),
                                M(
                                  he,
                                  null,
                                  Ne(
                                    n.newTask.steps,
                                    (a, c) => (
                                      k(),
                                      M(
                                        "div",
                                        {
                                          class: "step-item",
                                          key: c,
                                          onClick: (u) => n.openAddStepModal(c),
                                        },
                                        [
                                          l("div", Yv, [
                                            l("div", qv, [
                                              l(
                                                "span",
                                                {
                                                  class: se({
                                                    "rest-step": a.isrest,
                                                  }),
                                                },
                                                P(c + 1) + ". " + P(a.task),
                                                3
                                              ),
                                              a.isrest
                                                ? (k(), M("span", Xv, "休息"))
                                                : Q("", !0),
                                            ]),
                                            l(
                                              "div",
                                              Jv,
                                              P(a.duration) + " 分钟",
                                              1
                                            ),
                                          ]),
                                          l("div", Qv, [
                                            e[45] ||
                                              (e[45] = l(
                                                "i",
                                                { class: "fas fa-edit" },
                                                null,
                                                -1
                                              )),
                                            l(
                                              "i",
                                              {
                                                class: "fas fa-trash",
                                                onClick: Ce(
                                                  (u) => n.removeStep(c),
                                                  ["stop"]
                                                ),
                                              },
                                              null,
                                              8,
                                              Zv
                                            ),
                                          ]),
                                        ],
                                        8,
                                        Gv
                                      )
                                    )
                                  ),
                                  128
                                )),
                                l(
                                  "div",
                                  {
                                    class: "has-steps",
                                    onClick:
                                      e[13] ||
                                      (e[13] = (...a) =>
                                        n.openAddStepModal &&
                                        n.openAddStepModal(...a)),
                                  },
                                  "点击继续添加步骤"
                                ),
                              ]))
                            : (k(),
                              M(
                                "div",
                                {
                                  key: 2,
                                  class: "no-steps",
                                  onClick:
                                    e[14] ||
                                    (e[14] = (...a) =>
                                      n.openAddStepModal &&
                                      n.openAddStepModal(...a)),
                                },
                                "暂无步骤，点击添加步骤"
                              )),
                        ]),
                      ]),
                      l("div", ey, [
                        l(
                          "button",
                          {
                            type: "button",
                            class: "btn btn-default",
                            onClick:
                              e[15] ||
                              (e[15] = (...a) =>
                                n.closeAddTaskModal &&
                                n.closeAddTaskModal(...a)),
                          },
                          " 取消 "
                        ),
                        l(
                          "button",
                          {
                            type: "button",
                            class: "btn btn-primary",
                            onClick:
                              e[16] ||
                              (e[16] = Ce(
                                (...a) => n.addTask && n.addTask(...a),
                                ["prevent"]
                              )),
                          },
                          " 确定 "
                        ),
                      ]),
                    ]),
                  ]))
                : Q("", !0),
            ]),
            _: 1,
          }
        ),
      ])),
      (k(),
      Ie(Je, { to: ".app-container" }, [
        pe(
          Ke,
          { name: "modal" },
          {
            default: Ae(() => [
              n.showAddStepModal
                ? (k(),
                  M("div", ty, [
                    l("div", ny, [
                      l("div", sy, [
                        l(
                          "h2",
                          null,
                          P(n.isEditingStep ? "编辑步骤" : "添加步骤"),
                          1
                        ),
                        l("i", {
                          class: "fas fa-times close-modal",
                          onClick:
                            e[17] ||
                            (e[17] = (...a) =>
                              n.closeAddStepModal && n.closeAddStepModal(...a)),
                        }),
                      ]),
                      l("div", oy, [
                        l("div", iy, [
                          e[46] || (e[46] = l("label", null, "步骤名称", -1)),
                          $e(
                            l(
                              "input",
                              {
                                type: "text",
                                "onUpdate:modelValue":
                                  e[18] ||
                                  (e[18] = (a) => (n.newStep.task = a)),
                                placeholder: "请输入步骤名称",
                              },
                              null,
                              512
                            ),
                            [[rt, n.newStep.task]]
                          ),
                        ]),
                        l("div", ry, [
                          e[47] || (e[47] = l("label", null, "步骤描述", -1)),
                          $e(
                            l(
                              "input",
                              {
                                type: "text",
                                "onUpdate:modelValue":
                                  e[19] ||
                                  (e[19] = (a) => (n.newStep.description = a)),
                                placeholder: "请输入步骤描述（可选）",
                              },
                              null,
                              512
                            ),
                            [[rt, n.newStep.description]]
                          ),
                        ]),
                        l("div", ay, [
                          e[50] ||
                            (e[50] = l("label", null, "步骤时长（分钟）", -1)),
                          l("div", ly, [
                            l(
                              "button",
                              {
                                type: "button",
                                onClick:
                                  e[20] ||
                                  (e[20] = Ce(
                                    (...a) =>
                                      n.decrementStepDuration &&
                                      n.decrementStepDuration(...a),
                                    ["prevent"]
                                  )),
                              },
                              e[48] ||
                                (e[48] = [
                                  l("i", { class: "fas fa-minus" }, null, -1),
                                ])
                            ),
                            $e(
                              l(
                                "input",
                                {
                                  type: "number",
                                  "onUpdate:modelValue":
                                    e[21] ||
                                    (e[21] = (a) => (n.newStep.duration = a)),
                                  min: "1",
                                  max: "120",
                                  onChange:
                                    e[22] ||
                                    (e[22] = (...a) =>
                                      n.validateStepDuration &&
                                      n.validateStepDuration(...a)),
                                },
                                null,
                                544
                              ),
                              [[rt, n.newStep.duration, void 0, { number: !0 }]]
                            ),
                            l(
                              "button",
                              {
                                type: "button",
                                onClick:
                                  e[23] ||
                                  (e[23] = Ce(
                                    (...a) =>
                                      n.incrementStepDuration &&
                                      n.incrementStepDuration(...a),
                                    ["prevent"]
                                  )),
                              },
                              e[49] ||
                                (e[49] = [
                                  l("i", { class: "fas fa-plus" }, null, -1),
                                ])
                            ),
                          ]),
                        ]),
                        n.showRestFrequencyInput
                          ? Q("", !0)
                          : (k(),
                            M("div", cy, [
                              e[52] ||
                                (e[52] = l("label", null, "步骤类型", -1)),
                              l("div", uy, [
                                l("label", dy, [
                                  l(
                                    "div",
                                    {
                                      class: se([
                                        "task-checkbox",
                                        { completed: n.newStep.isrest },
                                      ]),
                                      onClick:
                                        e[24] ||
                                        (e[24] = (a) =>
                                          (n.newStep.isrest =
                                            !n.newStep.isrest)),
                                    },
                                    null,
                                    2
                                  ),
                                  e[51] ||
                                    (e[51] = l(
                                      "span",
                                      null,
                                      "将此步骤标记为休息时间",
                                      -1
                                    )),
                                ]),
                              ]),
                            ])),
                      ]),
                      l("div", fy, [
                        l(
                          "button",
                          {
                            type: "button",
                            class: "btn btn-default",
                            onClick:
                              e[25] ||
                              (e[25] = (...a) =>
                                n.closeAddStepModal &&
                                n.closeAddStepModal(...a)),
                          },
                          " 取消 "
                        ),
                        l(
                          "button",
                          {
                            type: "button",
                            class: "btn btn-primary",
                            onClick:
                              e[26] ||
                              (e[26] = Ce(
                                (...a) => n.addStep && n.addStep(...a),
                                ["prevent"]
                              )),
                          },
                          " 确定 "
                        ),
                      ]),
                    ]),
                  ]))
                : Q("", !0),
            ]),
            _: 1,
          }
        ),
      ])),
      (k(),
      Ie(Je, { to: ".app-container" }, [
        pe(
          Ke,
          { name: "modal" },
          {
            default: Ae(() => [
              n.showTaskDetailsModal
                ? (k(),
                  M("div", hy, [
                    l("div", py, [
                      l("div", my, [
                        e[53] || (e[53] = l("h2", null, "任务详情", -1)),
                        l("i", {
                          class: "fas fa-times close-modal",
                          onClick:
                            e[27] ||
                            (e[27] = (...a) =>
                              n.closeTaskDetailsModal &&
                              n.closeTaskDetailsModal(...a)),
                        }),
                      ]),
                      n.selectedTask
                        ? (k(),
                          M("div", gy, [
                            l("div", vy, [
                              l("h3", null, P(n.selectedTask.maintask), 1),
                              l("div", yy, [
                                l(
                                  "span",
                                  null,
                                  "总时长: " +
                                    P(n.selectedTask.duration) +
                                    " 分钟",
                                  1
                                ),
                                n.selectedTask.Restfrequency
                                  ? (k(),
                                    M(
                                      "span",
                                      by,
                                      "· 休息频率: " +
                                        P(
                                          n.getRestFrequencyText(
                                            n.selectedTask.Restfrequency
                                          )
                                        ),
                                      1
                                    ))
                                  : Q("", !0),
                                n.selectedTask.begintime &&
                                n.selectedTask.endtime
                                  ? (k(),
                                    M(
                                      "span",
                                      wy,
                                      "· " +
                                        P(
                                          n.formatStepTime(
                                            n.selectedTask.begintime
                                          )
                                        ) +
                                        " - " +
                                        P(
                                          n.formatStepTime(
                                            n.selectedTask.endtime
                                          )
                                        ),
                                      1
                                    ))
                                  : Q("", !0),
                              ]),
                              n.selectedTask.description
                                ? (k(),
                                  M("p", ky, P(n.selectedTask.description), 1))
                                : Q("", !0),
                            ]),
                            e[54] || (e[54] = l("h4", null, "任务步骤", -1)),
                            n.selectedTask.steps &&
                            n.selectedTask.steps.length > 0
                              ? (k(),
                                M("div", Sy, [
                                  (k(!0),
                                  M(
                                    he,
                                    null,
                                    Ne(
                                      n.selectedTask.steps,
                                      (a, c) => (
                                        k(),
                                        M(
                                          "div",
                                          {
                                            class: se([
                                              "step-item detailed",
                                              {
                                                clickable:
                                                  !n.selectedTask.completed,
                                              },
                                            ]),
                                            key: c,
                                            onClick: (u) =>
                                              !n.selectedTask.completed &&
                                              n.editSelectedTaskStep(c),
                                          },
                                          [
                                            l("div", Cy, [
                                              a.isrest
                                                ? (k(),
                                                  M(
                                                    "div",
                                                    {
                                                      key: 1,
                                                      class: se([
                                                        "rest-icon",
                                                        {
                                                          completed:
                                                            a.completed,
                                                        },
                                                      ]),
                                                      onClick: Ce(
                                                        (u) =>
                                                          n.toggleStepCompletion(
                                                            n.selectedTask.id,
                                                            c
                                                          ),
                                                        ["stop"]
                                                      ),
                                                    },
                                                    [
                                                      l(
                                                        "i",
                                                        {
                                                          class: se([
                                                            "fas",
                                                            a.completed
                                                              ? "fa-check"
                                                              : "fa-mug-hot",
                                                          ]),
                                                        },
                                                        null,
                                                        2
                                                      ),
                                                    ],
                                                    10,
                                                    Dy
                                                  ))
                                                : (k(),
                                                  M(
                                                    "div",
                                                    {
                                                      key: 0,
                                                      class: se([
                                                        "step-checkbox",
                                                        {
                                                          completed:
                                                            a.completed,
                                                        },
                                                      ]),
                                                      onClick: Ce(
                                                        (u) =>
                                                          n.toggleStepCompletion(
                                                            n.selectedTask.id,
                                                            c
                                                          ),
                                                        ["stop"]
                                                      ),
                                                    },
                                                    null,
                                                    10,
                                                    _y
                                                  )),
                                              l("h5", null, [
                                                we(
                                                  P(c + 1) +
                                                    ". " +
                                                    P(a.task) +
                                                    " ",
                                                  1
                                                ),
                                                a.isrest
                                                  ? (k(), M("span", xy, "休息"))
                                                  : Q("", !0),
                                              ]),
                                            ]),
                                            l("div", My, [
                                              a.description
                                                ? (k(),
                                                  M(
                                                    "p",
                                                    Ey,
                                                    P(a.description),
                                                    1
                                                  ))
                                                : Q("", !0),
                                              l("div", Ay, [
                                                l(
                                                  "span",
                                                  null,
                                                  "时长: " +
                                                    P(a.duration) +
                                                    " 分钟",
                                                  1
                                                ),
                                                a.begintime && a.endtime
                                                  ? (k(),
                                                    M(
                                                      "span",
                                                      Iy,
                                                      "· " +
                                                        P(
                                                          n.formatStepTime(
                                                            a.begintime
                                                          )
                                                        ) +
                                                        " - " +
                                                        P(
                                                          n.formatStepTime(
                                                            a.endtime
                                                          )
                                                        ),
                                                      1
                                                    ))
                                                  : Q("", !0),
                                              ]),
                                            ]),
                                          ],
                                          10,
                                          Ty
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                ]))
                              : (k(), M("div", Ry, "此任务没有设置步骤")),
                          ]))
                        : Q("", !0),
                      l("div", Oy, [
                        l(
                          "button",
                          {
                            type: "button",
                            class: "btn btn-default",
                            onClick:
                              e[28] ||
                              (e[28] = (...a) =>
                                n.closeTaskDetailsModal &&
                                n.closeTaskDetailsModal(...a)),
                          },
                          " 关闭 "
                        ),
                      ]),
                    ]),
                  ]))
                : Q("", !0),
            ]),
            _: 1,
          }
        ),
      ])),
      pe(
        r,
        {
          visible: n.showTaskDecomposer,
          "onUpdate:visible":
            e[29] || (e[29] = (a) => (n.showTaskDecomposer = a)),
          "task-description": n.newTask.maintask,
          "existing-tasks": n.tasksStore.tasks,
          onClose: n.closeTaskDecomposer,
          onTasksAdded: n.handleTasksAdded,
        },
        null,
        8,
        [
          "visible",
          "task-description",
          "existing-tasks",
          "onClose",
          "onTasksAdded",
        ]
      ),
    ])
  );
}
const Ny = gt(ev, [
    ["render", Py],
    ["__scopeId", "data-v-7f2d65f3"],
  ]),
  Ly = {
    setup() {
      const t = pc(),
        e = on(),
        s = B("");
      ie(() => e.points || 0);
      const n = ie(() => {
          const v = t.currentWeekInfo,
            D = v.startDate.split("-"),
            w = v.endDate.split("-"),
            R = parseInt(D[1]),
            S = parseInt(D[2]),
            E = parseInt(w[1]),
            F = parseInt(w[2]),
            K = new Date();
          return (
            K.getDay() === 0 &&
              console.log(
                "[统计视图] 今天是周日，当前周范围:",
                `${R}月${S}日 - ${E}月${F}日`,
                "今天是:",
                `${K.getMonth() + 1}月${K.getDate()}日`
              ),
            `${R}月${S}日 - ${E}月${F}日`
          );
        }),
        o = ie(() => t.currentWeekInfo.isCurrentWeek);
      function i() {
        t.previousWeek();
      }
      function r() {
        t.nextWeek();
      }
      function a() {
        t.resetToCurrentWeek();
      }
      const c = ie(() => t.weeklyStats),
        u = ie(() => t.todayFocusDuration),
        d = ie(() => {
          const v = c.value.totalFocusMinutes,
            D = c.value.focusDurations.filter((w) => w > 0).length || 1;
          return Math.round(v / D);
        }),
        f = ie(() => {
          const v = Math.max(...c.value.focusDurations);
          return Math.max(Math.ceil(v / 60), 1);
        }),
        h = ie(() => {
          const v = f.value,
            D = [];
          let w = 1;
          v > 10 && (w = Math.ceil(v / 5));
          const R = [];
          for (let S = 0; S <= v; S += w) R.push(S);
          R[R.length - 1] !== v && R.push(v);
          for (let S = v; S >= 0; S--)
            R.includes(S) ? D.push(S + "h") : D.push("");
          return D;
        }),
        p = ie(() => {
          const v = Math.max(...c.value.completedTaskCounts);
          return Math.max(v, 5);
        }),
        y = ie(() => {
          const v = p.value,
            D = [];
          let w = 1;
          v > 10 && (w = Math.max(1, Math.ceil(v / 8)));
          const R = [];
          for (let S = 0; S <= v; S += w) R.push(S);
          R[R.length - 1] !== v && R.push(v);
          for (let S = v; S >= 0; S--)
            R.includes(S) ? D.push(S.toString()) : D.push("");
          return D;
        }),
        b = ["一", "二", "三", "四", "五", "六", "日"];
      function A() {
        const v = new Date(),
          D = v.getHours().toString().padStart(2, "0"),
          w = v.getMinutes().toString().padStart(2, "0");
        s.value = `${D}:${w}`;
      }
      function L(v) {
        if (!v) return "0分钟";
        const D = Math.floor(v / 60),
          w = v % 60;
        return D === 0 ? `${w}分钟` : w === 0 ? `${D}小时` : `${D}小时${w}分钟`;
      }
      function C(v) {
        if (!v) return { height: "4px", background: "var(--primary-light)" };
        const D = 180,
          w = f.value * 60,
          R = Math.log(v + 1) / Math.log(w + 1),
          S = v / w,
          E = Math.min(0.7, S * 0.5 + 0.2),
          F = (1 - E) * S + E * R,
          K = Math.max(4, Math.round(F * D));
        let I;
        return (
          S < 0.25
            ? (I = "var(--primary-light)")
            : S < 0.5
            ? (I = "var(--primary-medium)")
            : S < 0.75
            ? (I = "var(--primary-color)")
            : (I = "var(--primary-dark)"),
          { height: `${K}px`, background: I }
        );
      }
      function _(v) {
        if (!v) return { height: "4px", background: "var(--primary-light)" };
        const D = 180,
          w = p.value,
          R = Math.log(v + 1) / Math.log(w + 1),
          S = v / w,
          E = Math.min(0.7, S * 0.5 + 0.2),
          F = (1 - E) * S + E * R,
          K = Math.max(4, Math.round(F * D));
        let I;
        return (
          S < 0.25
            ? (I = "var(--primary-light)")
            : S < 0.5
            ? (I = "var(--primary-medium)")
            : S < 0.75
            ? (I = "var(--primary-color)")
            : (I = "var(--primary-dark)"),
          { height: `${K}px`, background: I }
        );
      }
      return (
        mt(() => {
          A();
          const v = setInterval(A, 6e4);
          kn(() => {
            clearInterval(v);
          });
        }),
        {
          currentTime: s,
          weeklyStats: c,
          todayFocusMinutes: u,
          weeklyFocusAverage: d,
          hourLabels: h,
          taskLabels: y,
          weekDayLabels: b,
          formatTime: L,
          getColumnStyle: C,
          getColumnStyleForTasks: _,
          prevWeek: i,
          nextWeek: r,
          goToCurrentWeek: a,
          weekRangeText: n,
          isCurrentWeek: o,
          totalCompletedTasks: ie(() => {
            var v;
            return (
              ((v = t.allTimeStats) == null ? void 0 : v.totalCompletedTasks) ||
              0
            );
          }),
          totalFocusHours: ie(() => {
            var D;
            const v =
              ((D = t.allTimeStats) == null ? void 0 : D.totalFocusMinutes) ||
              0;
            return Math.floor(v / 60);
          }),
          weeklyFocusHours: ie(() => {
            const v = c.value.totalFocusMinutes;
            return Math.floor(v / 60);
          }),
          userPoints: ie(() => e.points),
          weekRangeText: n,
          isCurrentWeek: o,
          prevWeek: i,
          nextWeek: r,
          goToCurrentWeek: a,
        }
      );
    },
  },
  By = { class: "statistics-page" },
  Wy = { class: "content" },
  Uy = { class: "week-selector" },
  jy = { class: "week-info" },
  Hy = { key: 1, class: "current-week-badge" },
  Fy = ["disabled"],
  Vy = { class: "stats-card" },
  $y = { class: "stats-header" },
  zy = { class: "stats-title" },
  Ky = { class: "stats-chart" },
  Gy = { class: "matrix-chart" },
  Yy = { class: "y-axis" },
  qy = { class: "matrix-content" },
  Xy = { class: "matrix-labels" },
  Jy = { class: "matrix-grid" },
  Qy = { class: "matrix-row" },
  Zy = ["data-value"],
  eb = { class: "stats-card" },
  tb = { class: "stats-header" },
  nb = { class: "stats-chart" },
  sb = { class: "matrix-chart" },
  ob = { class: "y-axis" },
  ib = { class: "matrix-content" },
  rb = { class: "matrix-labels" },
  ab = { class: "matrix-grid" },
  lb = { class: "matrix-row" },
  cb = ["data-value"],
  ub = { class: "stats-summary" },
  db = { class: "summary-line" },
  fb = { class: "summary-item" },
  hb = { class: "summary-value" },
  pb = { class: "summary-item" },
  mb = { class: "summary-value" },
  gb = { class: "summary-line" },
  vb = { class: "summary-item" },
  yb = { class: "summary-value" },
  bb = { class: "summary-item" },
  wb = { class: "summary-value" },
  kb = { class: "summary-item" },
  Sb = { class: "summary-value" },
  Tb = { class: "summary-label" };
function Cb(t, e, s, n, o, i) {
  return (
    k(),
    M("div", By, [
      e[11] ||
        (e[11] = l(
          "div",
          { class: "nav-bar" },
          [l("div", { class: "nav-title" }, "统计")],
          -1
        )),
      l("div", Wy, [
        l("div", Uy, [
          l(
            "button",
            {
              onClick:
                e[0] || (e[0] = (...r) => n.prevWeek && n.prevWeek(...r)),
              class: "week-btn",
            },
            e[3] ||
              (e[3] = [l("i", { class: "fas fa-chevron-left" }, null, -1)])
          ),
          l("div", jy, [
            l("span", null, P(n.weekRangeText), 1),
            n.isCurrentWeek
              ? Q("", !0)
              : (k(),
                M(
                  "span",
                  {
                    key: 0,
                    onClick:
                      e[1] ||
                      (e[1] = (...r) =>
                        n.goToCurrentWeek && n.goToCurrentWeek(...r)),
                    class: "current-week-link",
                  },
                  "返回本周"
                )),
            n.isCurrentWeek ? (k(), M("span", Hy, "本周")) : Q("", !0),
          ]),
          l(
            "button",
            {
              onClick:
                e[2] || (e[2] = (...r) => n.nextWeek && n.nextWeek(...r)),
              disabled: n.isCurrentWeek,
              class: se(["week-btn", { disabled: n.isCurrentWeek }]),
            },
            e[4] ||
              (e[4] = [l("i", { class: "fas fa-chevron-right" }, null, -1)]),
            10,
            Fy
          ),
        ]),
        l("div", Vy, [
          l("div", $y, [
            l("div", zy, P(n.isCurrentWeek ? "本周专注" : "专注时间"), 1),
            l("div", null, P(n.formatTime(n.weeklyStats.totalFocusMinutes)), 1),
          ]),
          l("div", Ky, [
            l("div", Gy, [
              l("div", Yy, [
                (k(!0),
                M(
                  he,
                  null,
                  Ne(
                    n.hourLabels,
                    (r, a) => (
                      k(), M("div", { class: "y-label", key: a }, P(r), 1)
                    )
                  ),
                  128
                )),
              ]),
              l("div", qy, [
                l("div", Xy, [
                  (k(!0),
                  M(
                    he,
                    null,
                    Ne(
                      n.weekDayLabels,
                      (r, a) => (
                        k(), M("div", { class: "matrix-day", key: a }, P(r), 1)
                      )
                    ),
                    128
                  )),
                ]),
                l("div", Jy, [
                  l("div", Qy, [
                    (k(!0),
                    M(
                      he,
                      null,
                      Ne(
                        n.weeklyStats.focusDurations,
                        (r, a) => (
                          k(),
                          M(
                            "div",
                            {
                              class: "matrix-cell",
                              key: a,
                              style: yt(n.getColumnStyle(r)),
                              "data-value": n.formatTime(r),
                            },
                            null,
                            12,
                            Zy
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
        l("div", eb, [
          l("div", tb, [
            e[5] || (e[5] = l("div", { class: "stats-title" }, "完成任务", -1)),
            l("div", null, P(n.weeklyStats.totalCompletedTasks) + "个", 1),
          ]),
          l("div", nb, [
            l("div", sb, [
              l("div", ob, [
                (k(!0),
                M(
                  he,
                  null,
                  Ne(
                    n.taskLabels,
                    (r, a) => (
                      k(), M("div", { class: "y-label", key: a }, P(r), 1)
                    )
                  ),
                  128
                )),
              ]),
              l("div", ib, [
                l("div", rb, [
                  (k(!0),
                  M(
                    he,
                    null,
                    Ne(
                      n.weekDayLabels,
                      (r, a) => (
                        k(), M("div", { class: "matrix-day", key: a }, P(r), 1)
                      )
                    ),
                    128
                  )),
                ]),
                l("div", ab, [
                  l("div", lb, [
                    (k(!0),
                    M(
                      he,
                      null,
                      Ne(
                        n.weeklyStats.completedTaskCounts,
                        (r, a) => (
                          k(),
                          M(
                            "div",
                            {
                              class: "matrix-cell",
                              key: a,
                              style: yt(n.getColumnStyleForTasks(r)),
                              "data-value": r,
                            },
                            null,
                            12,
                            cb
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
        e[10] || (e[10] = we()),
        l("div", ub, [
          l("div", db, [
            l("div", fb, [
              l("div", hb, P(n.todayFocusMinutes), 1),
              e[6] ||
                (e[6] = l(
                  "div",
                  { class: "summary-label" },
                  "今日专注(分钟)",
                  -1
                )),
            ]),
            l("div", pb, [
              l("div", mb, P(n.weeklyFocusAverage), 1),
              e[7] ||
                (e[7] = l(
                  "div",
                  { class: "summary-label" },
                  "日均专注(分钟)",
                  -1
                )),
            ]),
          ]),
          l("div", gb, [
            l("div", vb, [
              l("div", yb, P(n.totalCompletedTasks), 1),
              e[8] ||
                (e[8] = l(
                  "div",
                  { class: "summary-label" },
                  "总任务完成(个)",
                  -1
                )),
            ]),
            l("div", bb, [
              l("div", wb, P(n.totalFocusHours), 1),
              e[9] ||
                (e[9] = l(
                  "div",
                  { class: "summary-label" },
                  "总共专注(小时)",
                  -1
                )),
            ]),
          ]),
          l("div", kb, [
            l("div", Sb, P(n.weeklyFocusHours), 1),
            l(
              "div",
              Tb,
              P(n.isCurrentWeek ? "本周专注(小时)" : "所选周专注(小时)"),
              1
            ),
          ]),
        ]),
      ]),
    ])
  );
}
const _b = gt(Ly, [
    ["render", Cb],
    ["__scopeId", "data-v-9f1c4157"],
  ]),
  Db = {
    name: "AIConfigModal",
    emits: ["close"],
    setup(t, { emit: e }) {
      const s = po(),
        n = B({
          provider: "zhipuai",
          apiKey: "",
          model: "",
          usePresetModel: !0,
          customModel: "",
          isThinkModel: !1,
        }),
        o = B(!1),
        i = B(!1),
        r = B(null),
        a = B(""),
        c = B(!1),
        u = ie(() => Zn(n.value.provider)),
        d = ie(() => {
          const _ = n.value.apiKey.trim() !== "",
            v = n.value.usePresetModel
              ? n.value.model !== ""
              : n.value.customModel.trim() !== "";
          return _ && v;
        });
      function f() {
        if (
          ((n.value = JSON.parse(JSON.stringify(s.config))),
          !n.value.model && n.value.usePresetModel)
        ) {
          const _ = Zn(n.value.provider),
            v = Object.keys(_)[0];
          v && (n.value.model = v);
        }
      }
      function h() {
        (i.value = !1), (r.value = null), (a.value = ""), (o.value = !1);
      }
      function p() {
        e("close");
      }
      function y(_) {
        if (!_) return {};
        const v = _.getBoundingClientRect(),
          D = window.innerHeight,
          w = D - v.bottom,
          R = v.top;
        return w < 240 && R > w
          ? {
              bottom: `${D - v.top + 5}px`,
              left: `${v.left}px`,
              width: `${v.width}px`,
              position: "fixed",
            }
          : {
              top: `${v.bottom + 5}px`,
              left: `${v.left}px`,
              width: `${v.width}px`,
              position: "fixed",
            };
      }
      function b() {
        if (
          ((n.value.model = ""),
          (n.value.customModel = ""),
          h(),
          n.value.usePresetModel)
        ) {
          const _ = Zn(n.value.provider),
            v = Object.keys(_)[0];
          v && (n.value.model = v);
        }
      }
      function A() {
        if (
          ((n.value.model = ""),
          (n.value.customModel = ""),
          (n.value.isThinkModel = !1),
          h(),
          n.value.usePresetModel)
        ) {
          const _ = Zn(n.value.provider),
            v = Object.keys(_)[0];
          v && (n.value.model = v);
        }
      }
      async function L() {
        if (d.value) {
          (i.value = !0), (r.value = null), (a.value = "");
          try {
            s.updateSettings(n.value);
            const _ = s.testConnectionStream();
            r.value = { success: !0 };
            for await (const v of _) a.value += v;
          } catch (_) {
            console.error("AI连接测试失败:", _),
              (r.value = { success: !1, message: _.message || "连接测试失败" });
          } finally {
            i.value = !1;
          }
        }
      }
      function C() {
        d.value && (s.updateSettings(n.value), p());
      }
      return (
        Zt(
          () => s.config,
          () => {
            f();
          },
          { deep: !0 }
        ),
        mt(() => {
          f(),
            h(),
            document.addEventListener("click", (_) => {
              _.target.closest(".custom-select") || (c.value = !1);
            });
        }),
        {
          localConfig: n,
          showPassword: o,
          isTestingConnection: i,
          testResult: r,
          streamingText: a,
          modelDropdownOpen: c,
          availableModels: u,
          isConfigValid: d,
          closeModal: p,
          onProviderChange: b,
          onModelModeChange: A,
          testConnection: L,
          saveSettings: C,
          getDropdownPosition: y,
        }
      );
    },
  },
  xb = { class: "modal-header" },
  Mb = { class: "modal-body" },
  Eb = { class: "form-group" },
  Ab = { class: "provider-selection" },
  Ib = { class: "provider-option" },
  Rb = { class: "provider-option" },
  Ob = { class: "form-group" },
  Pb = { class: "password-input" },
  Nb = ["type"],
  Lb = { class: "form-group" },
  Bb = { class: "model-mode-selection" },
  Wb = { class: "model-mode-option" },
  Ub = { class: "model-mode-option" },
  jb = { key: 0, class: "form-group" },
  Hb = { class: "select-display" },
  Fb = { key: 0 },
  Vb = { key: 0, class: "think-badge" },
  $b = { key: 1, class: "placeholder" },
  zb = ["onClick"],
  Kb = { key: 0, class: "think-badge" },
  Gb = { key: 1, class: "form-group" },
  Yb = { key: 2, class: "test-result" },
  qb = { class: "test-header" },
  Xb = { class: "test-content" },
  Jb = { key: 0, class: "streaming-response" },
  Qb = { key: 1, class: "error-message" },
  Zb = { class: "button-group" },
  e1 = ["disabled"],
  t1 = ["disabled"];
function n1(t, e, s, n, o, i) {
  var r, a, c;
  return (
    k(),
    M(
      "div",
      {
        class: "modal-backdrop",
        onClick:
          e[18] || (e[18] = (...u) => n.closeModal && n.closeModal(...u)),
      },
      [
        l(
          "div",
          {
            class: "modal-content",
            onClick: e[17] || (e[17] = Ce(() => {}, ["stop"])),
          },
          [
            l("div", xb, [
              e[19] || (e[19] = l("h3", null, "AI配置", -1)),
              l(
                "button",
                {
                  class: "close-btn",
                  onClick:
                    e[0] ||
                    (e[0] = (...u) => n.closeModal && n.closeModal(...u)),
                },
                "×"
              ),
            ]),
            l("div", Mb, [
              l(
                "form",
                {
                  onSubmit:
                    e[16] ||
                    (e[16] = Ce(
                      (...u) => n.saveSettings && n.saveSettings(...u),
                      ["prevent"]
                    )),
                },
                [
                  l("div", Eb, [
                    e[24] || (e[24] = l("label", null, " 服务供应商 ", -1)),
                    l("div", Ab, [
                      l("label", Ib, [
                        $e(
                          l(
                            "input",
                            {
                              type: "radio",
                              "onUpdate:modelValue":
                                e[1] ||
                                (e[1] = (u) => (n.localConfig.provider = u)),
                              value: "zhipuai",
                              onChange:
                                e[2] ||
                                (e[2] = (...u) =>
                                  n.onProviderChange &&
                                  n.onProviderChange(...u)),
                            },
                            null,
                            544
                          ),
                          [[Qn, n.localConfig.provider]]
                        ),
                        e[20] ||
                          (e[20] = l("i", { class: "fas fa-brain" }, null, -1)),
                        e[21] ||
                          (e[21] = l(
                            "span",
                            { class: "provider-label" },
                            "智谱AI",
                            -1
                          )),
                      ]),
                      l("label", Rb, [
                        $e(
                          l(
                            "input",
                            {
                              type: "radio",
                              "onUpdate:modelValue":
                                e[3] ||
                                (e[3] = (u) => (n.localConfig.provider = u)),
                              value: "siliconflow",
                              onChange:
                                e[4] ||
                                (e[4] = (...u) =>
                                  n.onProviderChange &&
                                  n.onProviderChange(...u)),
                            },
                            null,
                            544
                          ),
                          [[Qn, n.localConfig.provider]]
                        ),
                        e[22] ||
                          (e[22] = l(
                            "i",
                            { class: "fas fa-microchip" },
                            null,
                            -1
                          )),
                        e[23] ||
                          (e[23] = l(
                            "span",
                            { class: "provider-label" },
                            "硅基流动",
                            -1
                          )),
                      ]),
                    ]),
                    e[25] ||
                      (e[25] = l(
                        "p",
                        {
                          style: {
                            color: "var(--text-light)",
                            "font-size": "12px",
                          },
                        },
                        [
                          we("  *点击获取"),
                          l(
                            "a",
                            {
                              href: "https://open.bigmodel.cn/usercenter/proj-mgmt/apikeys",
                            },
                            " 智谱AI"
                          ),
                          we(" / "),
                          l(
                            "a",
                            { href: "https://cloud.siliconflow.cn/account/ak" },
                            "硅基流动 "
                          ),
                          we("API密钥"),
                          l("br"),
                          we("  *鱼跃使用的 AI 服务由第三方提供。"),
                          l("br"),
                          we(
                            "  *在使用AI服务时，请确保您了解并同意相关的隐私政策和服务条款。"
                          ),
                        ],
                        -1
                      )),
                  ]),
                  l("div", Ob, [
                    e[27] || (e[27] = l("label", null, " API密钥 ", -1)),
                    l("div", Pb, [
                      $e(
                        l(
                          "input",
                          {
                            type: n.showPassword ? "text" : "password",
                            "onUpdate:modelValue":
                              e[5] ||
                              (e[5] = (u) => (n.localConfig.apiKey = u)),
                            placeholder: "请输入API密钥",
                            required: "",
                          },
                          null,
                          8,
                          Nb
                        ),
                        [[Ud, n.localConfig.apiKey]]
                      ),
                      l(
                        "button",
                        {
                          type: "button",
                          class: "password-toggle",
                          onClick:
                            e[6] ||
                            (e[6] = (u) => (n.showPassword = !n.showPassword)),
                        },
                        [
                          l(
                            "i",
                            {
                              class: se(
                                n.showPassword
                                  ? "fas fa-eye-slash"
                                  : "fas fa-eye"
                              ),
                            },
                            null,
                            2
                          ),
                        ]
                      ),
                      e[26] ||
                        (e[26] = l(
                          "p",
                          {
                            style: {
                              color: "var(--text-light)",
                              "font-size": "12px",
                            },
                          },
                          "  *您的API密钥将会安全储存在本地。",
                          -1
                        )),
                    ]),
                  ]),
                  l("div", Lb, [
                    e[32] || (e[32] = l("label", null, " 模型选择 ", -1)),
                    l("div", Bb, [
                      l("label", Wb, [
                        $e(
                          l(
                            "input",
                            {
                              type: "radio",
                              "onUpdate:modelValue":
                                e[7] ||
                                (e[7] = (u) =>
                                  (n.localConfig.usePresetModel = u)),
                              value: !0,
                              onChange:
                                e[8] ||
                                (e[8] = (...u) =>
                                  n.onModelModeChange &&
                                  n.onModelModeChange(...u)),
                            },
                            null,
                            544
                          ),
                          [[Qn, n.localConfig.usePresetModel]]
                        ),
                        e[28] ||
                          (e[28] = l("i", { class: "fas fa-list" }, null, -1)),
                        e[29] || (e[29] = l("span", null, "预设模型", -1)),
                      ]),
                      l("label", Ub, [
                        $e(
                          l(
                            "input",
                            {
                              type: "radio",
                              "onUpdate:modelValue":
                                e[9] ||
                                (e[9] = (u) =>
                                  (n.localConfig.usePresetModel = u)),
                              value: !1,
                              onChange:
                                e[10] ||
                                (e[10] = (...u) =>
                                  n.onModelModeChange &&
                                  n.onModelModeChange(...u)),
                            },
                            null,
                            544
                          ),
                          [[Qn, n.localConfig.usePresetModel]]
                        ),
                        e[30] ||
                          (e[30] = l("i", { class: "fas fa-code" }, null, -1)),
                        e[31] || (e[31] = l("span", null, "自定义模型", -1)),
                      ]),
                    ]),
                  ]),
                  n.localConfig.usePresetModel
                    ? (k(),
                      M("div", jb, [
                        e[33] || (e[33] = l("label", null, " 选择模型 ", -1)),
                        e[34] || (e[34] = we()),
                        l(
                          "div",
                          {
                            class: "custom-select",
                            ref: "modelSelect",
                            onClick:
                              e[12] ||
                              (e[12] = (u) =>
                                (n.modelDropdownOpen = !n.modelDropdownOpen)),
                          },
                          [
                            l("div", Hb, [
                              n.localConfig.model
                                ? (k(),
                                  M("span", Fb, [
                                    we(
                                      P(
                                        (r =
                                          n.availableModels[
                                            n.localConfig.model
                                          ]) == null
                                          ? void 0
                                          : r.name
                                      ) +
                                        " - " +
                                        P(
                                          (a =
                                            n.availableModels[
                                              n.localConfig.model
                                            ]) == null
                                            ? void 0
                                            : a.description
                                        ) +
                                        " ",
                                      1
                                    ),
                                    (c =
                                      n.availableModels[n.localConfig.model]) !=
                                      null && c.think
                                      ? (k(), M("span", Vb, "（推理）"))
                                      : Q("", !0),
                                  ]))
                                : (k(), M("span", $b, "请选择模型")),
                              l(
                                "i",
                                {
                                  class: se([
                                    "fas fa-chevron-down select-arrow",
                                    { rotate: n.modelDropdownOpen },
                                  ]),
                                },
                                null,
                                2
                              ),
                            ]),
                            n.modelDropdownOpen
                              ? (k(),
                                M(
                                  "div",
                                  {
                                    key: 0,
                                    class: "select-options",
                                    style: yt(
                                      n.getDropdownPosition(t.$refs.modelSelect)
                                    ),
                                  },
                                  [
                                    l(
                                      "div",
                                      {
                                        class: se([
                                          "select-option",
                                          {
                                            selected:
                                              n.localConfig.model === "",
                                          },
                                        ]),
                                        onClick:
                                          e[11] ||
                                          (e[11] = Ce(
                                            (u) => (n.localConfig.model = ""),
                                            ["stop"]
                                          )),
                                      },
                                      " 请选择模型 ",
                                      2
                                    ),
                                    (k(!0),
                                    M(
                                      he,
                                      null,
                                      Ne(
                                        n.availableModels,
                                        (u, d) => (
                                          k(),
                                          M(
                                            "div",
                                            {
                                              key: d,
                                              class: se([
                                                "select-option",
                                                {
                                                  selected:
                                                    n.localConfig.model === d,
                                                },
                                              ]),
                                              onClick: Ce(
                                                (f) =>
                                                  (n.localConfig.model = d),
                                                ["stop"]
                                              ),
                                            },
                                            [
                                              we(
                                                P(u.name) +
                                                  " - " +
                                                  P(u.description) +
                                                  " ",
                                                1
                                              ),
                                              u.think
                                                ? (k(),
                                                  M("span", Kb, "（推理）"))
                                                : Q("", !0),
                                            ],
                                            10,
                                            zb
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                  ],
                                  4
                                ))
                              : Q("", !0),
                          ],
                          512
                        ),
                      ]))
                    : Q("", !0),
                  n.localConfig.usePresetModel
                    ? Q("", !0)
                    : (k(),
                      M("div", Gb, [
                        e[35] || (e[35] = l("label", null, " 模型名称 ", -1)),
                        $e(
                          l(
                            "input",
                            {
                              type: "text",
                              "onUpdate:modelValue":
                                e[13] ||
                                (e[13] = (u) =>
                                  (n.localConfig.customModel = u)),
                              placeholder: "请输入自定义模型名称",
                              required: "",
                            },
                            null,
                            512
                          ),
                          [[rt, n.localConfig.customModel]]
                        ),
                        e[36] ||
                          (e[36] = l(
                            "p",
                            {
                              style: {
                                color: "var(--text-light)",
                                "font-size": "12px",
                                "margin-top": "5px",
                              },
                            },
                            [
                              we("   *模型名称可在AI服务商处获取"),
                              l("br"),
                              we("  *仅建议高级用户使用自定义模型"),
                            ],
                            -1
                          )),
                      ])),
                  n.testResult
                    ? (k(),
                      M("div", Yb, [
                        l("div", qb, [
                          e[37] ||
                            (e[37] = l(
                              "span",
                              null,
                              [
                                l("i", { class: "fas fa-vial" }),
                                we(" 测试结果 "),
                              ],
                              -1
                            )),
                          l(
                            "span",
                            {
                              class: se([
                                "test-status",
                                n.testResult.success ? "success" : "error",
                              ]),
                            },
                            [
                              l(
                                "i",
                                {
                                  class: se(
                                    n.testResult.success
                                      ? "fas fa-check-circle"
                                      : "fas fa-times-circle"
                                  ),
                                },
                                null,
                                2
                              ),
                              we(
                                " " + P(n.testResult.success ? "成功" : "失败"),
                                1
                              ),
                            ],
                            2
                          ),
                        ]),
                        l("div", Xb, [
                          n.testResult.success
                            ? (k(), M("div", Jb, P(n.streamingText), 1))
                            : (k(), M("div", Qb, P(n.testResult.message), 1)),
                        ]),
                      ]))
                    : Q("", !0),
                  l("div", Zb, [
                    l(
                      "button",
                      {
                        type: "button",
                        class: "test-btn",
                        onClick:
                          e[14] ||
                          (e[14] = (...u) =>
                            n.testConnection && n.testConnection(...u)),
                        disabled: n.isTestingConnection || !n.isConfigValid,
                      },
                      P(n.isTestingConnection ? "测试中..." : "测试连接"),
                      9,
                      e1
                    ),
                    l(
                      "button",
                      {
                        type: "submit",
                        class: "save-btn",
                        disabled: !n.isConfigValid,
                      },
                      " 保存 ",
                      8,
                      t1
                    ),
                    l(
                      "button",
                      {
                        type: "button",
                        class: "cancel-btn",
                        onClick:
                          e[15] ||
                          (e[15] = (...u) =>
                            n.closeModal && n.closeModal(...u)),
                      },
                      " 取消 "
                    ),
                  ]),
                ],
                32
              ),
            ]),
          ]
        ),
      ]
    )
  );
}
const s1 = gt(Db, [
    ["render", n1],
    ["__scopeId", "data-v-98b4d7eb"],
  ]),
  o1 = [
    { id: "default.mp3", name: "默认" },
    { id: "alarm/laser.mp3", name: "脉冲" },
    { id: "alarm/wood.mp3", name: "木琴" },
    { id: "alarm/gamewin.mp3", name: "通关" },
    { id: "alarm/csgo/8bit.mp3", name: "8位" },
    { id: "alarm/csgo/EZ4.mp3", name: "EZ4" },
    { id: "alarm/csgo/sail.mp3", name: "帆船" },
    { id: "alarm/csgo/冲击星.mp3", name: "冲击星" },
    { id: "alarm/csgo/电锯.mp3", name: "电锯" },
    { id: "alarm/csgo/非人类.mp3", name: "非人类" },
    { id: "alarm/csgo/花脸.mp3", name: "花脸" },
    { id: "alarm/csgo/决心.mp3", name: "决心" },
    { id: "alarm/csgo/咖啡拉花.mp3", name: "咖啡拉花" },
    { id: "alarm/csgo/困兽.mp3", name: "困兽" },
    { id: "alarm/csgo/理由.mp3", name: "理由" },
    { id: "alarm/csgo/闪光舞.mp3", name: "闪光舞" },
    { id: "alarm/csgo/神枪手.mp3", name: "神枪手" },
    { id: "alarm/csgo/躺平青年.mp3", name: "躺平青年" },
    { id: "alarm/csgo/有为青年.mp3", name: "有为青年" },
    { id: "alarm/csgo/终极.mp3", name: "终极" },
    { id: "alarm/csgo/追溯起源.mp3", name: "追溯起源" },
  ];
function i1() {
  return o1;
}
const r1 = {
    components: { UserProfileModal: Oi, AIConfigModal: s1 },
    setup() {
      const t = Tn(),
        e = lo(),
        s = Pi(),
        n = on(),
        o = po(),
        i = B(""),
        r = B(!1),
        a = B(!1),
        c = B(!1),
        u = B(!1),
        d = B(!1),
        f = B([]),
        h = B(""),
        p = B(!1),
        y = B(""),
        b = B(""),
        A = B("fa-bell"),
        L = ie(() => n.currentWeekSetting || 1);
      function C(ce) {
        let be = (n.currentWeekSetting || 1) + ce;
        (be = Math.max(1, Math.min(20, be))), n.updateCurrentWeek(be);
      }
      function _() {
        const be = Math.floor(
            (new Date() - new Date("2025-02-17")) / (7 * 24 * 60 * 60 * 1e3)
          ),
          U = be > 0 ? be + 1 : 1;
        n.updateCurrentWeek(U),
          (p.value = !0),
          (y.value = "周次已重置"),
          (b.value = `当前为第 ${U} 周`),
          (A.value = "fa-calendar-week"),
          setTimeout(() => {
            p.value = !1;
          }, 2e3);
      }
      function v() {
        f.value = i1();
      }
      function D() {
        const ce = new Date(),
          De = ce.getHours().toString().padStart(2, "0"),
          be = ce.getMinutes().toString().padStart(2, "0");
        i.value = `${De}:${be}`;
      }
      function w(ce, De) {
        let be = De;
        if (
          typeof De == "number" &&
          (ce === "focusTime" || ce === "restTime")
        ) {
          be = e[ce] + De;
          const Z = {
            focusTime: { min: 5, max: 60 },
            restTime: { min: 1, max: 30 },
          };
          be = Math.max(Z[ce].min, Math.min(Z[ce].max, be));
        }
        e.updateSettings({ [ce]: be }), s.initTimer();
      }
      function R(ce) {
        e.updateSettings({ [ce]: !e[ce] });
      }
      function S() {
        t.push("/course-schedule");
      }
      function E() {
        c.value = !0;
      }
      function F() {
        c.value = !1;
      }
      function K() {
        o.resetSettings(),
          (u.value = !1),
          (y.value = "重置成功"),
          (b.value = "AI配置已恢复到默认状态"),
          (A.value = "fa-check-circle"),
          (p.value = !0),
          setTimeout(() => {
            p.value = !1;
          }, 2e3);
      }
      function I() {
        return o.config.provider === "zhipuai"
          ? "智谱AI"
          : o.config.provider === "siliconflow"
          ? "硅基流动"
          : "未知";
      }
      function Y() {
        return o.config.usePresetModel
          ? o.config.model || "未选择"
          : o.config.customModel || "未设置";
      }
      function G() {
        a.value = !0;
      }
      function H() {
        a.value = !1;
      }
      function te() {
        e.clearAllUserData(),
          n.updateUserInfo({
            avatar: "",
            nickname: "",
            faculty: "",
            major: "",
            className: "",
            isInitialized: !1,
            points: 0,
          });
        try {
          Object.keys(localStorage).forEach((De) => {
            localStorage.removeItem(De);
          }),
            localStorage.removeItem("__last_avatar"),
            localStorage.removeItem("__temp_avatar_backup"),
            localStorage.removeItem("pomodoro-user"),
            localStorage.removeItem("pomodoro-tasks"),
            localStorage.removeItem("pomodoro-settings"),
            localStorage.removeItem("pomodoro-timer");
        } catch (ce) {
          console.warn("清除localStorage数据失败:", ce);
        }
        window.avatarData && delete window.avatarData,
          window.debugAvatarData && delete window.debugAvatarData,
          window._originalImageData && delete window._originalImageData,
          (r.value = !1),
          alert("所有数据已清除，包括设置、个人信息和任务列表"),
          setTimeout(() => {
            window.location.href = "/";
          }, 1e3);
      }
      function X() {
        const ce = f.value.find((De) => De.id === e.selectedAlarmSound);
        return ce ? ce.name : "默认铃声";
      }
      function ne(ce) {
        qs.playSound(ce);
      }
      function ue(ce) {
        h.value = ce;
      }
      function Re() {
        h.value && e.updateSettings({ selectedAlarmSound: h.value }),
          (d.value = !1);
      }
      function me() {
        d.value = !1;
      }
      function ke() {
        qs.notify({
          title: "这里是浏览器通知",
          message: "通知测试成功！",
          sound: !0,
          vibration: !0,
          browserNotification: e.browserNotificationEnabled,
          settings: {
            soundEnabled: e.soundEnabled,
            vibrationEnabled: e.vibrationEnabled,
            browserNotificationEnabled: e.browserNotificationEnabled,
            selectedAlarmSound: e.selectedAlarmSound,
          },
        }),
          e.centerToastEnabled &&
            ((p.value = !0),
            (y.value = "这里是中央提示"),
            (b.value = "今天也要好好努力哦(≧∇≦)"),
            (A.value = "fa-bell"),
            setTimeout(() => {
              p.value = !1;
            }, 2e3));
      }
      mt(() => {
        D();
        const ce = setInterval(D, 6e4);
        kn(() => {
          clearInterval(ce);
        });
      }),
        mt(() => {
          v(), (h.value = e.selectedAlarmSound);
        });
      function We() {
        (h.value = e.selectedAlarmSound), (d.value = !0);
      }
      return {
        currentTime: i,
        settingsStore: e,
        userStore: n,
        aiStore: o,
        updateSetting: w,
        toggleSetting: R,
        goToCourseSchedule: S,
        showClearDataConfirm: r,
        showResetAIConfirm: u,
        showUserInitModal: a,
        openUserInitModal: G,
        closeUserInitModal: H,
        openAIConfigModal: E,
        closeAIConfigModal: F,
        getProviderDisplayName: I,
        getCurrentModelName: Y,
        clearAllData: te,
        resetAIConfig: K,
        testNotification: ke,
        showAlarmModal: d,
        availableSounds: f,
        tempSelectedAlarm: h,
        getSelectedAlarmName: X,
        previewSound: ne,
        selectAlarmSound: ue,
        confirmAlarmSelection: Re,
        cancelAlarmSelection: me,
        openAlarmModal: We,
        showAIConfigModal: c,
        showStepCompleteToast: p,
        stepCompleteTitle: y,
        stepCompleteMessage: b,
        stepCompleteIcon: A,
        currentWeekDisplay: L,
        updateCurrentWeek: C,
        resetCurrentWeek: _,
      };
    },
  },
  a1 = { class: "settings-page" },
  l1 = { class: "content" },
  c1 = { class: "settings-group" },
  u1 = { class: "settings-item user-info-item" },
  d1 = { class: "settings-value user-avatar" },
  f1 = ["src"],
  h1 = { key: 1, class: "fas fa-user" },
  p1 = { class: "settings-item" },
  m1 = { class: "settings-value user-name" },
  g1 = { class: "settings-item" },
  v1 = { class: "settings-value class-info" },
  y1 = { class: "settings-item" },
  b1 = { class: "settings-value points-display" },
  w1 = { class: "settings-group" },
  k1 = { class: "theme-selector" },
  S1 = { class: "theme-container" },
  T1 = { class: "theme-container" },
  C1 = { class: "settings-group" },
  _1 = { class: "settings-value toggle" },
  D1 = { class: "settings-value toggle" },
  x1 = { class: "settings-value toggle" },
  M1 = { class: "settings-item alarm-selection" },
  E1 = { class: "settings-value" },
  A1 = { class: "settings-group" },
  I1 = { class: "settings-item" },
  R1 = { class: "settings-value time-setting" },
  O1 = { class: "time-value" },
  P1 = { class: "settings-group" },
  N1 = { key: 0, class: "settings-item" },
  L1 = { class: "settings-value" },
  B1 = { class: "provider-name" },
  W1 = { key: 1, class: "settings-item" },
  U1 = { class: "settings-value" },
  j1 = { class: "provider-name" },
  H1 = { class: "settings-group" },
  F1 = { key: 0, class: "modal-backdrop" },
  V1 = { class: "dialog-content" },
  $1 = { class: "dialog-buttons" },
  z1 = { key: 0, class: "modal-backdrop" },
  K1 = { class: "dialog-content" },
  G1 = { class: "dialog-buttons" },
  Y1 = { key: 0, class: "modal-backdrop" },
  q1 = { class: "modal-content" },
  X1 = { class: "modal-header" },
  J1 = { class: "modal-body" },
  Q1 = { class: "alarm-list" },
  Z1 = ["onClick"],
  e0 = { class: "alarm-item-name" },
  t0 = { class: "alarm-item-actions" },
  n0 = ["onClick"],
  s0 = { key: 0, class: "fas fa-check" },
  o0 = { class: "modal-footer" },
  i0 = { class: "icon" },
  r0 = { class: "title" },
  a0 = { class: "message" };
function l0(t, e, s, n, o, i) {
  const r = Wt("UserProfileModal"),
    a = Wt("AIConfigModal");
  return (
    k(),
    M("div", a1, [
      e[82] ||
        (e[82] = l(
          "div",
          { class: "nav-bar" },
          [l("div", { class: "nav-title" }, "设置")],
          -1
        )),
      l("div", l1, [
        l("div", c1, [
          e[38] ||
            (e[38] = l(
              "div",
              { class: "settings-header" },
              [l("div", { class: "settings-title" }, "个人信息")],
              -1
            )),
          l("div", u1, [
            e[32] ||
              (e[32] = l("div", { class: "settings-label" }, "头像", -1)),
            l("div", d1, [
              n.userStore.avatar
                ? (k(),
                  M(
                    "img",
                    { key: 0, src: n.userStore.avatar, alt: "用户头像" },
                    null,
                    8,
                    f1
                  ))
                : (k(), M("i", h1)),
            ]),
          ]),
          l("div", p1, [
            e[33] ||
              (e[33] = l("div", { class: "settings-label" }, "昵称", -1)),
            l("div", m1, P(n.userStore.nickname || "未设置"), 1),
          ]),
          l("div", g1, [
            e[34] ||
              (e[34] = l("div", { class: "settings-label" }, "院系班级", -1)),
            l("div", v1, P(n.userStore.userClassInfo || "未设置"), 1),
          ]),
          l("div", y1, [
            e[36] ||
              (e[36] = l("div", { class: "settings-label" }, "我的积分", -1)),
            l("div", b1, [
              e[35] || (e[35] = l("i", { class: "fas fa-star" }, null, -1)),
              l("span", null, P(n.userStore.points), 1),
            ]),
          ]),
          l(
            "div",
            {
              class: "settings-item",
              onClick:
                e[0] ||
                (e[0] = (...c) =>
                  n.openUserInitModal && n.openUserInitModal(...c)),
            },
            e[37] ||
              (e[37] = [
                l("div", { class: "settings-label" }, "修改个人信息", -1),
                l(
                  "div",
                  { class: "settings-value" },
                  [l("i", { class: "fas fa-chevron-right" })],
                  -1
                ),
              ])
          ),
        ]),
        l("div", w1, [
          e[51] ||
            (e[51] = l(
              "div",
              { class: "settings-header" },
              [l("div", { class: "settings-title" }, "主题配色")],
              -1
            )),
          l("div", k1, [
            l("div", S1, [
              l(
                "div",
                {
                  class: se([
                    "theme-option",
                    { active: n.settingsStore.theme === "default" },
                  ]),
                  onClick:
                    e[1] || (e[1] = (c) => n.updateSetting("theme", "default")),
                },
                e[39] ||
                  (e[39] = [
                    l(
                      "div",
                      {
                        class: "theme-color",
                        style: { "background-color": "#dddddd" },
                      },
                      null,
                      -1
                    ),
                    l("div", { class: "theme-name" }, "白昼", -1),
                  ]),
                2
              ),
              l(
                "div",
                {
                  class: se([
                    "theme-option",
                    { active: n.settingsStore.theme === "pink" },
                  ]),
                  onClick:
                    e[2] || (e[2] = (c) => n.updateSetting("theme", "pink")),
                },
                e[40] ||
                  (e[40] = [
                    l(
                      "div",
                      {
                        class: "theme-color",
                        style: { "background-color": "#ffb7c5" },
                      },
                      null,
                      -1
                    ),
                    l("div", { class: "theme-name" }, "桃夭", -1),
                  ]),
                2
              ),
              l(
                "div",
                {
                  class: se([
                    "theme-option",
                    { active: n.settingsStore.theme === "spring" },
                  ]),
                  onClick:
                    e[3] || (e[3] = (c) => n.updateSetting("theme", "spring")),
                },
                e[41] ||
                  (e[41] = [
                    l(
                      "div",
                      {
                        class: "theme-color",
                        style: { "background-color": "#c4f5ba" },
                      },
                      null,
                      -1
                    ),
                    l("div", { class: "theme-name" }, "复苏", -1),
                  ]),
                2
              ),
              l(
                "div",
                {
                  class: se([
                    "theme-option",
                    { active: n.settingsStore.theme === "skyblue" },
                  ]),
                  onClick:
                    e[4] || (e[4] = (c) => n.updateSetting("theme", "skyblue")),
                },
                e[42] ||
                  (e[42] = [
                    l(
                      "div",
                      {
                        class: "theme-color",
                        style: { "background-color": "#87ceeb" },
                      },
                      null,
                      -1
                    ),
                    l("div", { class: "theme-name" }, "停云", -1),
                  ]),
                2
              ),
              l(
                "div",
                {
                  class: se([
                    "theme-option",
                    { active: n.settingsStore.theme === "city" },
                  ]),
                  onClick:
                    e[5] || (e[5] = (c) => n.updateSetting("theme", "city")),
                },
                e[43] ||
                  (e[43] = [
                    l(
                      "div",
                      {
                        class: "theme-color",
                        style: { "background-color": "#778899" },
                      },
                      null,
                      -1
                    ),
                    l("div", { class: "theme-name" }, "薄雾", -1),
                  ]),
                2
              ),
              l(
                "div",
                {
                  class: se([
                    "theme-option",
                    { active: n.settingsStore.theme === "lightyellow" },
                  ]),
                  onClick:
                    e[6] ||
                    (e[6] = (c) => n.updateSetting("theme", "lightyellow")),
                },
                e[44] ||
                  (e[44] = [
                    l(
                      "div",
                      {
                        class: "theme-color",
                        style: { "background-color": "#ffe0b2" },
                      },
                      null,
                      -1
                    ),
                    l("div", { class: "theme-name" }, "奶酪", -1),
                  ]),
                2
              ),
            ]),
            l("div", T1, [
              l(
                "div",
                {
                  class: se([
                    "theme-option",
                    { active: n.settingsStore.theme === "rainynight" },
                  ]),
                  onClick:
                    e[7] ||
                    (e[7] = (c) => n.updateSetting("theme", "rainynight")),
                },
                e[45] ||
                  (e[45] = [
                    l(
                      "div",
                      {
                        class: "theme-color",
                        style: { "background-color": "#282a36" },
                      },
                      null,
                      -1
                    ),
                    l("div", { class: "theme-name" }, "​​夜霖", -1),
                  ]),
                2
              ),
              l(
                "div",
                {
                  class: se([
                    "theme-option",
                    { active: n.settingsStore.theme === "galaxy" },
                  ]),
                  onClick:
                    e[8] || (e[8] = (c) => n.updateSetting("theme", "galaxy")),
                },
                e[46] ||
                  (e[46] = [
                    l(
                      "div",
                      {
                        class: "theme-color",
                        style: { "background-color": "#283593" },
                      },
                      null,
                      -1
                    ),
                    l("div", { class: "theme-name" }, "银河", -1),
                  ]),
                2
              ),
              l(
                "div",
                {
                  class: se([
                    "theme-option",
                    { active: n.settingsStore.theme === "moonlight" },
                  ]),
                  onClick:
                    e[9] ||
                    (e[9] = (c) => n.updateSetting("theme", "moonlight")),
                },
                e[47] ||
                  (e[47] = [
                    l(
                      "div",
                      {
                        class: "theme-color",
                        style: { "background-color": "#82b1ff" },
                      },
                      null,
                      -1
                    ),
                    l("div", { class: "theme-name" }, "月光", -1),
                  ]),
                2
              ),
              l(
                "div",
                {
                  class: se([
                    "theme-option",
                    { active: n.settingsStore.theme === "furnace" },
                  ]),
                  onClick:
                    e[10] ||
                    (e[10] = (c) => n.updateSetting("theme", "furnace")),
                },
                e[48] ||
                  (e[48] = [
                    l(
                      "div",
                      {
                        class: "theme-color",
                        style: { "background-color": "#ffaf65" },
                      },
                      null,
                      -1
                    ),
                    l("div", { class: "theme-name" }, "火炉", -1),
                  ]),
                2
              ),
              l(
                "div",
                {
                  class: se([
                    "theme-option",
                    { active: n.settingsStore.theme === "starry" },
                  ]),
                  onClick:
                    e[11] ||
                    (e[11] = (c) => n.updateSetting("theme", "starry")),
                },
                e[49] ||
                  (e[49] = [
                    l(
                      "div",
                      {
                        class: "theme-color",
                        style: { "background-color": "#37474f" },
                      },
                      null,
                      -1
                    ),
                    l("div", { class: "theme-name" }, "静湖", -1),
                  ]),
                2
              ),
              l(
                "div",
                {
                  class: se([
                    "theme-option",
                    { active: n.settingsStore.theme === "forest" },
                  ]),
                  onClick:
                    e[12] ||
                    (e[12] = (c) => n.updateSetting("theme", "forest")),
                },
                e[50] ||
                  (e[50] = [
                    l(
                      "div",
                      {
                        class: "theme-color",
                        style: { "background-color": "#2e4433" },
                      },
                      null,
                      -1
                    ),
                    l("div", { class: "theme-name" }, "苔醒", -1),
                  ]),
                2
              ),
            ]),
          ]),
        ]),
        l("div", C1, [
          e[61] ||
            (e[61] = l(
              "div",
              { class: "settings-header" },
              [l("div", { class: "settings-title" }, "通知设置")],
              -1
            )),
          l(
            "div",
            {
              class: "settings-item",
              onClick:
                e[13] || (e[13] = (c) => n.toggleSetting("soundEnabled")),
            },
            [
              e[53] ||
                (e[53] = l("div", { class: "settings-label" }, "声音通知", -1)),
              l("div", _1, [
                l(
                  "div",
                  {
                    class: se([
                      "toggle-switch",
                      { active: n.settingsStore.soundEnabled },
                    ]),
                  },
                  e[52] ||
                    (e[52] = [l("div", { class: "toggle-slider" }, null, -1)]),
                  2
                ),
              ]),
            ]
          ),
          l(
            "div",
            {
              class: "settings-item",
              onClick:
                e[14] || (e[14] = (c) => n.toggleSetting("vibrationEnabled")),
            },
            [
              e[55] ||
                (e[55] = l("div", { class: "settings-label" }, "振动通知", -1)),
              l("div", D1, [
                l(
                  "div",
                  {
                    class: se([
                      "toggle-switch",
                      { active: n.settingsStore.vibrationEnabled },
                    ]),
                  },
                  e[54] ||
                    (e[54] = [l("div", { class: "toggle-slider" }, null, -1)]),
                  2
                ),
              ]),
            ]
          ),
          l(
            "div",
            {
              class: "settings-item",
              onClick:
                e[15] || (e[15] = (c) => n.toggleSetting("centerToastEnabled")),
            },
            [
              e[57] ||
                (e[57] = l("div", { class: "settings-label" }, "中央提示", -1)),
              l("div", x1, [
                l(
                  "div",
                  {
                    class: se([
                      "toggle-switch",
                      { active: n.settingsStore.centerToastEnabled },
                    ]),
                  },
                  e[56] ||
                    (e[56] = [l("div", { class: "toggle-slider" }, null, -1)]),
                  2
                ),
              ]),
            ]
          ),
          l("div", M1, [
            e[59] ||
              (e[59] = l("div", { class: "settings-label" }, "通知铃声", -1)),
            l("div", E1, [
              l(
                "div",
                {
                  class: "alarm-select",
                  onClick:
                    e[16] ||
                    (e[16] = (...c) =>
                      n.openAlarmModal && n.openAlarmModal(...c)),
                },
                [
                  we(P(n.getSelectedAlarmName()) + " ", 1),
                  e[58] ||
                    (e[58] = l(
                      "i",
                      { class: "fas fa-chevron-right" },
                      null,
                      -1
                    )),
                ]
              ),
            ]),
          ]),
          l(
            "div",
            {
              class: "settings-item test-notification",
              onClick:
                e[17] ||
                (e[17] = (...c) =>
                  n.testNotification && n.testNotification(...c)),
            },
            e[60] ||
              (e[60] = [
                l("div", { class: "settings-label" }, "测试通知", -1),
                l(
                  "div",
                  { class: "settings-value" },
                  [l("i", { class: "fas fa-bell" })],
                  -1
                ),
              ])
          ),
        ]),
        l("div", A1, [
          e[67] ||
            (e[67] = l(
              "div",
              { class: "settings-header" },
              [l("div", { class: "settings-title" }, "课表设置")],
              -1
            )),
          l("div", I1, [
            e[64] ||
              (e[64] = l(
                "div",
                { class: "settings-label" },
                "设置当前周次",
                -1
              )),
            l("div", R1, [
              l(
                "button",
                {
                  class: "time-btn",
                  onClick: e[18] || (e[18] = (c) => n.updateCurrentWeek(-1)),
                },
                e[62] || (e[62] = [l("i", { class: "fas fa-minus" }, null, -1)])
              ),
              l("div", O1, "第 " + P(n.currentWeekDisplay) + " 周", 1),
              l(
                "button",
                {
                  class: "time-btn",
                  onClick: e[19] || (e[19] = (c) => n.updateCurrentWeek(1)),
                },
                e[63] || (e[63] = [l("i", { class: "fas fa-plus" }, null, -1)])
              ),
            ]),
          ]),
          l(
            "div",
            {
              class: "settings-item",
              onClick:
                e[20] ||
                (e[20] = (...c) =>
                  n.resetCurrentWeek && n.resetCurrentWeek(...c)),
            },
            e[65] ||
              (e[65] = [
                l("div", { class: "settings-label" }, "恢复默认周次", -1),
                l(
                  "div",
                  { class: "settings-value" },
                  [l("i", { class: "fas fa-sync" })],
                  -1
                ),
              ])
          ),
          l(
            "div",
            {
              class: "settings-item",
              onClick:
                e[21] ||
                (e[21] = (...c) =>
                  n.goToCourseSchedule && n.goToCourseSchedule(...c)),
            },
            e[66] ||
              (e[66] = [
                l("div", { class: "settings-label" }, "查看班级课表", -1),
                l(
                  "div",
                  { class: "settings-value" },
                  [l("i", { class: "fas fa-chevron-right" })],
                  -1
                ),
              ])
          ),
        ]),
        l("div", P1, [
          e[72] ||
            (e[72] = l(
              "div",
              { class: "settings-header" },
              [l("div", { class: "settings-title" }, "AI设置")],
              -1
            )),
          n.aiStore.isConfigured
            ? (k(),
              M("div", N1, [
                e[68] ||
                  (e[68] = l(
                    "div",
                    { class: "settings-label" },
                    [l("i", { class: "fas fa-brain" }), we(" 服务提供商 ")],
                    -1
                  )),
                l("div", L1, [
                  l(
                    "div",
                    {
                      class: se([
                        "ai-status",
                        { configured: n.aiStore.isConfigured },
                      ]),
                    },
                    [
                      l(
                        "span",
                        null,
                        P(n.aiStore.isConfigured ? "已配置" : "未配置"),
                        1
                      ),
                    ],
                    2
                  ),
                  l("span", B1, P(n.getProviderDisplayName()), 1),
                ]),
              ]))
            : Q("", !0),
          n.aiStore.isConfigured
            ? (k(),
              M("div", W1, [
                e[69] ||
                  (e[69] = l(
                    "div",
                    { class: "settings-label" },
                    [l("i", { class: "fas fa-cog" }), we(" 当前模型 ")],
                    -1
                  )),
                l("div", U1, [l("span", j1, P(n.getCurrentModelName()), 1)]),
              ]))
            : Q("", !0),
          l(
            "div",
            {
              class: "settings-item",
              onClick:
                e[22] ||
                (e[22] = (...c) =>
                  n.openAIConfigModal && n.openAIConfigModal(...c)),
            },
            e[70] ||
              (e[70] = [
                l(
                  "div",
                  { class: "settings-label" },
                  [l("i", { class: "fas fa-robot" }), we(" 配置服务 ")],
                  -1
                ),
                l(
                  "div",
                  { class: "settings-value" },
                  [l("i", { class: "fas fa-chevron-right" })],
                  -1
                ),
              ])
          ),
          l(
            "div",
            {
              class: "settings-item reset-ai",
              onClick: e[23] || (e[23] = (c) => (n.showResetAIConfirm = !0)),
            },
            e[71] ||
              (e[71] = [
                l(
                  "div",
                  { class: "settings-label" },
                  [l("i", { class: "fas fa-sync" }), we(" 重置AI配置 ")],
                  -1
                ),
                l(
                  "div",
                  { class: "settings-value" },
                  [l("i", { class: "fas fa-undo" })],
                  -1
                ),
              ])
          ),
        ]),
        l("div", H1, [
          e[74] ||
            (e[74] = l(
              "div",
              { class: "settings-header" },
              [l("div", { class: "settings-title" }, "数据管理")],
              -1
            )),
          l(
            "div",
            {
              class: "settings-item danger",
              onClick: e[24] || (e[24] = (c) => (n.showClearDataConfirm = !0)),
            },
            e[73] ||
              (e[73] = [
                l("div", { class: "settings-label" }, "清除所有用户数据", -1),
                l(
                  "div",
                  { class: "settings-value" },
                  [l("i", { class: "fas fa-trash-alt" })],
                  -1
                ),
              ])
          ),
        ]),
        pe(
          Ke,
          { name: "modal" },
          {
            default: Ae(() => [
              n.showClearDataConfirm
                ? (k(),
                  M("div", F1, [
                    l("div", V1, [
                      e[75] || (e[75] = l("h3", null, "确认清除数据", -1)),
                      e[76] ||
                        (e[76] = l(
                          "p",
                          null,
                          " 此操作将清除所有设置、任务和统计数据，且不可恢复。确定继续吗？ ",
                          -1
                        )),
                      l("div", $1, [
                        l(
                          "button",
                          {
                            class: "btn cancel",
                            onClick:
                              e[25] ||
                              (e[25] = (c) => (n.showClearDataConfirm = !1)),
                          },
                          " 取消 "
                        ),
                        l(
                          "button",
                          {
                            class: "btn confirm",
                            onClick:
                              e[26] ||
                              (e[26] = (...c) =>
                                n.clearAllData && n.clearAllData(...c)),
                          },
                          " 确认清除 "
                        ),
                      ]),
                    ]),
                  ]))
                : Q("", !0),
            ]),
            _: 1,
          }
        ),
        pe(
          Ke,
          { name: "modal" },
          {
            default: Ae(() => [
              n.showResetAIConfirm
                ? (k(),
                  M("div", z1, [
                    l("div", K1, [
                      e[77] || (e[77] = l("h3", null, "重置AI配置", -1)),
                      e[78] ||
                        (e[78] = l(
                          "p",
                          null,
                          " 此操作将清除所有AI相关设置，包括API密钥和模型选择。确定继续吗？ ",
                          -1
                        )),
                      l("div", G1, [
                        l(
                          "button",
                          {
                            class: "btn cancel",
                            onClick:
                              e[27] ||
                              (e[27] = (c) => (n.showResetAIConfirm = !1)),
                          },
                          " 取消 "
                        ),
                        l(
                          "button",
                          {
                            class: "btn confirm",
                            onClick:
                              e[28] ||
                              (e[28] = (...c) =>
                                n.resetAIConfig && n.resetAIConfig(...c)),
                          },
                          " 确认重置 "
                        ),
                      ]),
                    ]),
                  ]))
                : Q("", !0),
            ]),
            _: 1,
          }
        ),
        e[79] ||
          (e[79] = l(
            "div",
            { class: "app-info" },
            [
              l("h3", null, "鱼跃Todo"),
              l("p", null, "版本 0.4.2"),
              l("p", null, "2025 DJYX Studio"),
            ],
            -1
          )),
      ]),
      (k(),
      Ie(Je, { to: ".app-container" }, [
        pe(
          Ke,
          { name: "modal" },
          {
            default: Ae(() => [
              n.showUserInitModal
                ? (k(),
                  Ie(
                    r,
                    {
                      key: 0,
                      onClose: n.closeUserInitModal,
                      onComplete: n.closeUserInitModal,
                    },
                    null,
                    8,
                    ["onClose", "onComplete"]
                  ))
                : Q("", !0),
            ]),
            _: 1,
          }
        ),
      ])),
      (k(),
      Ie(Je, { to: ".app-container" }, [
        pe(
          Ke,
          { name: "modal" },
          {
            default: Ae(() => [
              n.showAlarmModal
                ? (k(),
                  M("div", Y1, [
                    l("div", q1, [
                      l("div", X1, [
                        e[80] || (e[80] = l("h2", null, "选择通知铃声", -1)),
                        l("i", {
                          class: "fas fa-times close-modal",
                          onClick:
                            e[29] || (e[29] = (c) => (n.showAlarmModal = !1)),
                        }),
                      ]),
                      l("div", J1, [
                        l("div", Q1, [
                          (k(!0),
                          M(
                            he,
                            null,
                            Ne(
                              n.availableSounds,
                              (c) => (
                                k(),
                                M(
                                  "div",
                                  {
                                    key: c.id,
                                    class: se([
                                      "alarm-item",
                                      { active: c.id === n.tempSelectedAlarm },
                                    ]),
                                    onClick: (u) => n.selectAlarmSound(c.id),
                                  },
                                  [
                                    l("div", e0, P(c.name), 1),
                                    l("div", t0, [
                                      l(
                                        "button",
                                        {
                                          class: "play-button",
                                          onClick: Ce(
                                            (u) => n.previewSound(c.id),
                                            ["stop"]
                                          ),
                                        },
                                        e[81] ||
                                          (e[81] = [
                                            l(
                                              "i",
                                              { class: "fas fa-play" },
                                              null,
                                              -1
                                            ),
                                          ]),
                                        8,
                                        n0
                                      ),
                                      c.id === n.tempSelectedAlarm
                                        ? (k(), M("i", s0))
                                        : Q("", !0),
                                    ]),
                                  ],
                                  10,
                                  Z1
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                      ]),
                      l("div", o0, [
                        l(
                          "button",
                          {
                            class: "btn btn-default",
                            onClick:
                              e[30] ||
                              (e[30] = (...c) =>
                                n.cancelAlarmSelection &&
                                n.cancelAlarmSelection(...c)),
                          },
                          " 取消 "
                        ),
                        l(
                          "button",
                          {
                            class: "btn btn-primary",
                            onClick:
                              e[31] ||
                              (e[31] = (...c) =>
                                n.confirmAlarmSelection &&
                                n.confirmAlarmSelection(...c)),
                          },
                          " 确定 "
                        ),
                      ]),
                    ]),
                  ]))
                : Q("", !0),
            ]),
            _: 1,
          }
        ),
      ])),
      (k(),
      Ie(Je, { to: ".app-container" }, [
        pe(
          Ke,
          { name: "modal" },
          {
            default: Ae(() => [
              n.showAIConfigModal
                ? (k(),
                  Ie(a, { key: 0, onClose: n.closeAIConfigModal }, null, 8, [
                    "onClose",
                  ]))
                : Q("", !0),
            ]),
            _: 1,
          }
        ),
      ])),
      (k(),
      Ie(Je, { to: ".app-container" }, [
        pe(
          Ke,
          { name: "faded" },
          {
            default: Ae(() => [
              n.showStepCompleteToast
                ? (k(),
                  M(
                    "div",
                    {
                      key: 0,
                      class: se([
                        "step-complete-toast",
                        { show: n.showStepCompleteToast },
                      ]),
                    },
                    [
                      l("div", i0, [
                        l(
                          "i",
                          { class: se(["fas", n.stepCompleteIcon]) },
                          null,
                          2
                        ),
                      ]),
                      l("div", r0, P(n.stepCompleteTitle), 1),
                      l("div", a0, P(n.stepCompleteMessage), 1),
                    ],
                    2
                  ))
                : Q("", !0),
            ]),
            _: 1,
          }
        ),
      ])),
    ])
  );
}
const c0 = gt(r1, [
    ["render", l0],
    ["__scopeId", "data-v-24f87e68"],
  ]),
  u0 = {
    components: { UserProfileModal: Oi },
    setup() {
      const t = Tn(),
        e = on(),
        s = B(null),
        n = B(!1),
        o = B(null),
        i = B(!1),
        r = B(!1),
        a = B(!0),
        c = B(null),
        u = B(!1),
        d = B(null),
        f = B(1),
        h = B(20),
        p = ie(() => {
          const G = new Date(),
            H = G.getFullYear(),
            te = G.getMonth() + 1,
            X = G.getDate(),
            ne = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][
              G.getDay()
            ];
          return `${H}年${te}月${X}日 ${ne}`;
        }),
        y = [
          { name: "1-2节", period: "1-2节" },
          { name: "3-4节", period: "3-4节" },
          { name: "5-6节", period: "5-6节" },
          { name: "7-8节", period: "7-8节" },
          { name: "9-10节", period: "9-10节" },
          { name: "11-12节", period: "11-12节" },
        ],
        b = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
      function A() {
        t.go(-1);
      }
      function L() {
        i.value = !0;
      }
      function C() {
        i.value = !1;
      }
      function _() {
        C(), w();
      }
      function v(G) {
        (d.value = G), (u.value = !0);
      }
      function D() {
        a.value && (a.value = !1);
      }
      async function w() {
        if (!e.userClassInfo) return;
        const G = e.userClassInfo.split("-");
        if (G.length < 3) {
          o.value = "班级信息有误，请重新设置个人信息";
          return;
        }
        const H = G[0],
          te = G[2],
          X = te.match(/\d{2}/);
        if (!X) {
          o.value = "无法获取年级信息，班级格式有误";
          return;
        }
        const ne = `20${X[0]}`;
        try {
          (n.value = !0), (o.value = null);
          const ue = await fetch("./data/all_timetables.json");
          if (!ue.ok) throw new Error(`HTTP error! status: ${ue.status}`);
          const me = (await ue.json()).find(
            (ke) => ke.院系 === H && ke.年级 === ne && ke.课表.班级 === te
          );
          if (!me) {
            (o.value = "未找到匹配的课表数据"), (n.value = !1);
            return;
          }
          if (
            ((s.value = {
              院系: me.院系,
              年级: me.年级,
              班级: me.课表.班级,
              专业: me.课表.专业,
              学期: me.课表.学期 || "2024-2025学年第2学期",
              课程: me.课表.课程,
              最大周数: R(me.课表) || 20,
            }),
            (h.value = s.value.最大周数),
            e.currentWeekSetting)
          )
            f.value = e.currentWeekSetting;
          else {
            const ce = Math.floor(
              (new Date() - new Date("2025-02-17")) / (7 * 24 * 60 * 60 * 1e3)
            );
            f.value = ce > 0 ? ce + 1 : 1;
          }
          f.value > h.value && (f.value = h.value);
        } catch (ue) {
          console.error("加载课表失败:", ue),
            (ue.value = "加载课表失败: " + ue.message);
        } finally {
          n.value = !1;
        }
      }
      function R(G) {
        let H = 0;
        for (const te in G.课程)
          for (const X of G.课程[te]) {
            const ue = (X.周次 || "").match(/\d+/g);
            if (ue && ue.length > 0) {
              const Re = parseInt(ue[ue.length - 1]);
              H = Math.max(H, Re);
            }
          }
        return H || 20;
      }
      function S(G, H) {
        return !s.value || !s.value.课程 || !s.value.课程[G]
          ? []
          : s.value.课程[G].filter((te) =>
              te.时间 !== H ? !1 : E(te.周次 || "", f.value)
            );
      }
      function E(G, H) {
        if (!G) return !1;
        if (/^\d+$/.test(G)) return parseInt(G) === H;
        const te = G.match(/^(\d+)-(\d+)$/);
        if (te) {
          const ne = parseInt(te[1]),
            ue = parseInt(te[2]);
          return H >= ne && H <= ue;
        }
        const X = G.split(/[,，]/);
        for (const ne of X)
          if (ne.includes("-")) {
            const [ue, Re] = ne.split("-").map((me) => parseInt(me.trim()));
            if (H >= ue && H <= Re) return !0;
          } else {
            const ue = parseInt(ne.trim());
            if (!isNaN(ue) && ue === H) return !0;
          }
        return !1;
      }
      function F() {
        e.updateCurrentWeek(f.value),
          (r.value = !0),
          setTimeout(() => {
            r.value = !1;
          }, 1500);
      }
      function K() {
        f.value > 1 && f.value--;
      }
      function I() {
        f.value < h.value && f.value++;
      }
      function Y() {
        u.value = !1;
      }
      return (
        mt(() => {
          w();
        }),
        {
          userStore: e,
          timetable: s,
          loading: n,
          error: o,
          currentWeek: f,
          maxWeek: h,
          currentDateDisplay: p,
          timeSlots: y,
          days: b,
          showUserInitModal: i,
          showWeekChangeToast: r,
          showCourseDetail: u,
          selectedCourse: d,
          showSwipeHint: a,
          timetableContainer: c,
          handleTableScroll: D,
          goBack: A,
          openUserInitModal: L,
          closeUserInitModal: C,
          handleUserInfoComplete: _,
          openCourseDetail: v,
          closeCourseDetail: Y,
          loadTimetable: w,
          filterCourses: S,
          prevWeek: K,
          nextWeek: I,
          saveCurrentWeek: F,
        }
      );
    },
  },
  d0 = { class: "course-page" },
  f0 = { class: "nav-bar" },
  h0 = { class: "content" },
  p0 = { key: 0, class: "loading-indicator" },
  m0 = { key: 1, class: "error-container" },
  g0 = { class: "error-message" },
  v0 = { key: 2, class: "no-class-info" },
  y0 = { key: 3, class: "timetable-view" },
  b0 = { class: "timetable-header" },
  w0 = { class: "semester-info" },
  k0 = { class: "week-selector" },
  S0 = ["disabled"],
  T0 = { class: "week-text" },
  C0 = ["disabled"],
  _0 = { class: "timetable" },
  D0 = { class: "time-slot" },
  x0 = ["onClick"],
  M0 = { class: "course-name" },
  E0 = { class: "course-info" },
  A0 = { class: "course-info" },
  I0 = { key: 0, class: "course-week" },
  R0 = { key: 4, class: "no-data" },
  O0 = { class: "message" },
  P0 = { class: "course-detail-header" },
  N0 = { class: "course-detail-info" },
  L0 = { class: "detail-item" },
  B0 = { class: "detail-item" },
  W0 = { class: "detail-item" },
  U0 = { class: "detail-item" };
function j0(t, e, s, n, o, i) {
  const r = Wt("UserProfileModal");
  return (
    k(),
    M("div", d0, [
      l("div", f0, [
        l(
          "div",
          {
            class: "nav-left",
            onClick: e[0] || (e[0] = (...a) => n.goBack && n.goBack(...a)),
          },
          e[10] ||
            (e[10] = [l("i", { class: "fas fa-chevron-left" }, null, -1)])
        ),
        e[11] || (e[11] = l("div", { class: "nav-title" }, "班级课表", -1)),
      ]),
      l("div", h0, [
        n.loading
          ? (k(),
            M(
              "div",
              p0,
              e[12] ||
                (e[12] = [
                  l("div", { class: "spinner" }, null, -1),
                  l("p", null, "加载数据中...", -1),
                ])
            ))
          : n.error
          ? (k(),
            M("div", m0, [
              e[13] ||
                (e[13] = l(
                  "i",
                  { class: "fas fa-exclamation-circle error-icon" },
                  null,
                  -1
                )),
              l("p", g0, P(n.error), 1),
              l(
                "button",
                {
                  class: "btn-retry",
                  onClick:
                    e[1] ||
                    (e[1] = (...a) => n.loadTimetable && n.loadTimetable(...a)),
                },
                "重试"
              ),
            ]))
          : n.userStore.userClassInfo
          ? n.timetable
            ? (k(),
              M("div", y0, [
                l(
                  "div",
                  b0,
                  P(n.timetable.院系) +
                    " - " +
                    P(n.timetable.年级) +
                    " - " +
                    P(n.timetable.班级) +
                    " 课表 ",
                  1
                ),
                l(
                  "div",
                  w0,
                  P(n.timetable.学期) + " | " + P(n.currentDateDisplay),
                  1
                ),
                l("div", k0, [
                  l(
                    "button",
                    {
                      onClick:
                        e[3] ||
                        (e[3] = (...a) => n.prevWeek && n.prevWeek(...a)),
                      disabled: n.currentWeek <= 1,
                      class: "week-btn",
                    },
                    e[16] ||
                      (e[16] = [
                        l("i", { class: "fas fa-chevron-left" }, null, -1),
                      ]),
                    8,
                    S0
                  ),
                  l("span", T0, "第 " + P(n.currentWeek) + " 周", 1),
                  l(
                    "button",
                    {
                      onClick:
                        e[4] ||
                        (e[4] = (...a) => n.nextWeek && n.nextWeek(...a)),
                      disabled: n.currentWeek >= n.maxWeek,
                      class: "week-btn",
                    },
                    e[17] ||
                      (e[17] = [
                        l("i", { class: "fas fa-chevron-right" }, null, -1),
                      ]),
                    8,
                    C0
                  ),
                  l(
                    "button",
                    {
                      class: "save-week-btn",
                      onClick:
                        e[5] ||
                        (e[5] = (...a) =>
                          n.saveCurrentWeek && n.saveCurrentWeek(...a)),
                    },
                    e[18] ||
                      (e[18] = [
                        l("i", { class: "fas fa-save" }, null, -1),
                        we(" 保存 "),
                      ])
                  ),
                ]),
                l(
                  "div",
                  {
                    class: "timetable-container",
                    ref: "timetableContainer",
                    onScroll:
                      e[6] ||
                      (e[6] = (...a) =>
                        n.handleTableScroll && n.handleTableScroll(...a)),
                  },
                  [
                    l("table", _0, [
                      e[19] ||
                        (e[19] = l(
                          "thead",
                          null,
                          [
                            l("tr", null, [
                              l("th", null, "节次"),
                              l("th", null, "周一"),
                              l("th", null, "周二"),
                              l("th", null, "周三"),
                              l("th", null, "周四"),
                              l("th", null, "周五"),
                              l("th", null, "周六"),
                              l("th", null, "周日"),
                            ]),
                          ],
                          -1
                        )),
                      l("tbody", null, [
                        (k(!0),
                        M(
                          he,
                          null,
                          Ne(
                            n.timeSlots,
                            (a, c) => (
                              k(),
                              M("tr", { key: c }, [
                                l("td", D0, P(a.name), 1),
                                (k(!0),
                                M(
                                  he,
                                  null,
                                  Ne(
                                    n.days,
                                    (u) => (
                                      k(),
                                      M(
                                        "td",
                                        { key: u, class: "course-cell" },
                                        [
                                          (k(!0),
                                          M(
                                            he,
                                            null,
                                            Ne(
                                              n.filterCourses(u, a.period),
                                              (d) => (
                                                k(),
                                                M(
                                                  "div",
                                                  {
                                                    key: d.课程名称,
                                                    class: "course-card",
                                                    onClick: (f) =>
                                                      n.openCourseDetail(d),
                                                  },
                                                  [
                                                    l(
                                                      "div",
                                                      M0,
                                                      P(d.课程名称),
                                                      1
                                                    ),
                                                    l("div", null, [
                                                      l(
                                                        "div",
                                                        E0,
                                                        P(d.教师),
                                                        1
                                                      ),
                                                      l(
                                                        "div",
                                                        A0,
                                                        P(d.地点),
                                                        1
                                                      ),
                                                    ]),
                                                    d.周次
                                                      ? (k(),
                                                        M(
                                                          "div",
                                                          I0,
                                                          "第" +
                                                            P(d.周次) +
                                                            "周",
                                                          1
                                                        ))
                                                      : Q("", !0),
                                                  ],
                                                  8,
                                                  x0
                                                )
                                              )
                                            ),
                                            128
                                          )),
                                        ]
                                      )
                                    )
                                  ),
                                  128
                                )),
                              ])
                            )
                          ),
                          128
                        )),
                      ]),
                    ]),
                  ],
                  544
                ),
              ]))
            : !n.timetable && !n.loading && !n.error
            ? (k(),
              M(
                "div",
                R0,
                e[20] || (e[20] = [l("p", null, "未找到课表数据", -1)])
              ))
            : Q("", !0)
          : (k(),
            M("div", v0, [
              e[14] ||
                (e[14] = l("i", { class: "fas fa-info-circle" }, null, -1)),
              e[15] || (e[15] = l("p", null, "您尚未设置院系班级信息", -1)),
              l(
                "button",
                {
                  class: "btn btn-primary",
                  onClick:
                    e[2] ||
                    (e[2] = (...a) =>
                      n.openUserInitModal && n.openUserInitModal(...a)),
                },
                "设置个人信息"
              ),
            ])),
      ]),
      (k(),
      Ie(Je, { to: ".app-container" }, [
        pe(
          Ke,
          { name: "modal" },
          {
            default: Ae(() => [
              n.showUserInitModal
                ? (k(),
                  Ie(
                    r,
                    {
                      key: 0,
                      onClose: n.closeUserInitModal,
                      onComplete: n.handleUserInfoComplete,
                    },
                    null,
                    8,
                    ["onClose", "onComplete"]
                  ))
                : Q("", !0),
            ]),
            _: 1,
          }
        ),
      ])),
      (k(),
      Ie(Je, { to: ".app-container" }, [
        pe(
          Ke,
          { name: "faded" },
          {
            default: Ae(() => [
              n.showWeekChangeToast
                ? (k(),
                  M(
                    "div",
                    {
                      key: 0,
                      class: se([
                        "step-complete-toast",
                        { show: n.showWeekChangeToast },
                      ]),
                    },
                    [
                      e[21] ||
                        (e[21] = l(
                          "div",
                          { class: "icon" },
                          [l("i", { class: "fas fa-calendar-week" })],
                          -1
                        )),
                      e[22] ||
                        (e[22] = l(
                          "div",
                          { class: "title" },
                          "周次已切换",
                          -1
                        )),
                      l("div", O0, "当前为第 " + P(n.currentWeek) + " 周", 1),
                    ],
                    2
                  ))
                : Q("", !0),
            ]),
            _: 1,
          }
        ),
      ])),
      (k(),
      Ie(Je, { to: ".app-container" }, [
        pe(
          Ke,
          { name: "mask" },
          {
            default: Ae(() => [
              n.showCourseDetail
                ? (k(),
                  M(
                    "div",
                    {
                      key: 0,
                      class: "course-detail-modal",
                      onClick:
                        e[9] ||
                        (e[9] = (...a) =>
                          n.closeCourseDetail && n.closeCourseDetail(...a)),
                    },
                    [
                      n.showCourseDetail
                        ? (k(),
                          M(
                            "div",
                            {
                              key: 0,
                              class: "course-detail-content",
                              onClick: e[8] || (e[8] = Ce(() => {}, ["stop"])),
                            },
                            [
                              l("div", P0, [
                                l("h3", null, P(n.selectedCourse.课程名称), 1),
                                l("i", {
                                  class: "fas fa-times close-icon",
                                  onClick:
                                    e[7] ||
                                    (e[7] = (...a) =>
                                      n.closeCourseDetail &&
                                      n.closeCourseDetail(...a)),
                                }),
                              ]),
                              l("div", N0, [
                                l("div", L0, [
                                  e[23] ||
                                    (e[23] = l(
                                      "i",
                                      { class: "fas fa-user-tie" },
                                      null,
                                      -1
                                    )),
                                  l("span", null, P(n.selectedCourse.教师), 1),
                                ]),
                                l("div", B0, [
                                  e[24] ||
                                    (e[24] = l(
                                      "i",
                                      { class: "fas fa-map-marker-alt" },
                                      null,
                                      -1
                                    )),
                                  l("span", null, P(n.selectedCourse.地点), 1),
                                ]),
                                l("div", W0, [
                                  e[25] ||
                                    (e[25] = l(
                                      "i",
                                      { class: "fas fa-clock" },
                                      null,
                                      -1
                                    )),
                                  l("span", null, P(n.selectedCourse.时间), 1),
                                ]),
                                l("div", U0, [
                                  e[26] ||
                                    (e[26] = l(
                                      "i",
                                      { class: "fas fa-calendar-alt" },
                                      null,
                                      -1
                                    )),
                                  l(
                                    "span",
                                    null,
                                    "第" + P(n.selectedCourse.周次) + "周",
                                    1
                                  ),
                                ]),
                              ]),
                            ]
                          ))
                        : Q("", !0),
                    ]
                  ))
                : Q("", !0),
            ]),
            _: 1,
          }
        ),
      ])),
    ])
  );
}
const H0 = gt(u0, [
    ["render", j0],
    ["__scopeId", "data-v-a32bd803"],
  ]),
  F0 = [
    {
      path: "/",
      name: "Welcome",
      component: () =>
        qp(
          () => import("./WelcomeScreen-D6-_F7jF.js"),
          __vite__mapDeps([0, 1])
        ),
      meta: { hideTabBar: !0 },
    },
    { path: "/tasks", name: "Tasks", component: Ny },
    { path: "/timer", name: "Timer", component: Gm, meta: { hideTabBar: !0 } },
    { path: "/statistics", name: "Statistics", component: _b },
    { path: "/settings", name: "Settings", component: c0 },
    {
      path: "/course-schedule",
      name: "CourseSchedule",
      component: H0,
      meta: { hideTabBar: !0 },
    },
  ],
  mc = nh({ history: If(), routes: F0 });
mc.beforeEach((t, e, s) => {
  const o = on().isInitialized;
  !o && t.path !== "/" ? s("/") : o && t.path === "/" ? s("/tasks") : s();
});
const V0 = Yd(),
  Ni = zd(Kp);
Ni.use(V0);
Ni.use(mc);
Ni.mount("#app");
export {
  s1 as A,
  hc as C,
  he as F,
  Ke as T,
  gt as _,
  l as a,
  Ie as b,
  M as c,
  pe as d,
  Q as e,
  we as f,
  Ce as g,
  $e as h,
  yt as i,
  Wt as j,
  Je as k,
  lo as l,
  po as m,
  se as n,
  B as o,
  ie as p,
  mt as q,
  Ne as r,
  kn as s,
  P as t,
  on as u,
  rt as v,
  Ae as w,
  dt as x,
  Tn as y,
  k as z,
};
