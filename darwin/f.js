const io = function () {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) {
		return;
	}
	for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
	new MutationObserver(
		(r) => {
			for (const o of r) if (o.type === "childList") {
				for (const i of o.addedNodes) i.tagName === "LINK" &&
					i.rel === "modulepreload" &&
					s(i);
			}
		},
	).observe(document, { childList: !0, subtree: !0 });
	function n(r) {
		const o = {};
		return (
			r.integrity && (o.integrity = r.integrity), r.referrerpolicy && (
				o.referrerPolicy = r.referrerpolicy
			), r.crossorigin === "use-credentials"
				? o.credentials = "include"
				: r.crossorigin === "anonymous"
					? o.credentials = "omit"
					: o.credentials = "same-origin", o
		);
	}
	function s(r) {
		if (r.ep) {
			return;
		}
		r.ep = !0;
		const o = n(r);
		fetch(r.href, o);
	}
};
io();
const lo = "modulepreload",
	ms = {},
	co = "/",
	me = function (t, n) {
		return !n || n.length === 0 ? t() : Promise
			.all(
				n.map(
					(s) => {
						if (s = `${co}${s}`, s in ms) {
							return;
						}
						ms[s] = !0;
						const r = s.endsWith(".css"), o = r ? '[rel="stylesheet"]' : "";
						if (document.querySelector(`link[href="${s}"]${o}`)) {
							return;
						}
						const i = document.createElement("link");
						if (
							i.rel = r ? "stylesheet" : lo, r || (
								i.as = "script", i.crossOrigin = ""
							), i.href = s, document.head.appendChild(i), r
						) {
							return new Promise(
								(l, f) => {
									i.addEventListener("load", l), i.addEventListener(
										"error",
										() => f(new Error(`Unable to preload CSS for ${s}`)),
									);
								},
							);
						}
					},
				),
			)
			.then(() => t());
	};
function $n(e, t) {
	const n = Object.create(null), s = e.split(",");
	for (let r = 0; r < s.length; r++) n[s[r]] = !0;
	return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const fo = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
	uo = $n(fo);
function Gs(e) {
	return !!e || e === "";
}
function Bn(e) {
	if (P(e)) {
		const t = {};
		for (let n = 0; n < e.length; n++) {
			const s = e[n], r = ee(s) ? po(s) : Bn(s);
			if (r) {
				for (const o in r) t[o] = r[o];
			}
		}
		return t;
	} else {
		if (ee(e)) {
			return e;
		}
		if (X(e)) {
			return e;
		}
	}
}
const ao = /;(?![^(]*\))/g, ho = /:(.+)/;
function po(e) {
	const t = {};
	return (
		e
			.split(ao)
			.forEach(
				(n) => {
					if (n) {
						const s = n.split(ho);
						s.length > 1 && (t[s[0].trim()] = s[1].trim());
					}
				},
			), t
	);
}
function Hn(e) {
	let t = "";
	if (ee(e)) {
		t = e;
	} else if (P(e)) {
		for (let n = 0; n < e.length; n++) {
			const s = Hn(e[n]);
			s && (t += s + " ");
		}
	} else if (X(e)) {
		for (const n in e) e[n] && (t += n + " ");
	}
	return t.trim();
}
function go(e, t) {
	if (e.length !== t.length) {
		return !1;
	}
	let n = !0;
	for (let s = 0; n && s < e.length; s++) n = Jt(e[s], t[s]);
	return n;
}
function Jt(e, t) {
	if (e === t) {
		return !0;
	}
	let n = _s(e), s = _s(t);
	if (n || s) {
		return n && s ? e.getTime() === t.getTime() : !1;
	}
	if (n = P(e), s = P(t), n || s) {
		return n && s ? go(e, t) : !1;
	}
	if (n = X(e), s = X(t), n || s) {
		if (!n || !s) {
			return !1;
		}
		const r = Object.keys(e).length, o = Object.keys(t).length;
		if (r !== o) {
			return !1;
		}
		for (const i in e) {
			const l = e.hasOwnProperty(i), f = t.hasOwnProperty(i);
			if ((l && !f) || (!l && f) || !Jt(e[i], t[i])) {
				return !1;
			}
		}
	}
	return String(e) === String(t);
}
function mo(e, t) {
	return e.findIndex((n) => Jt(n, t));
}
const Zl = (e) =>
	ee(e)
		? e
		: e == null
			? ""
			: P(e) || (X(e) && (e.toString === nr || !N(e.toString)))
				? JSON.stringify(e, er, 2)
				: String(e),
	er = (e, t) =>
		t && t.__v_isRef
			? er(e, t.value)
			: ct(t)
				? {
					[`Map(${t.size})`]: [...t.entries()].reduce(
						(n, [s, r]) => (n[`${s} =>`] = r, n),
						{},
					),
				}
				: Xt(t)
					? { [`Set(${t.size})`]: [...t.values()] }
					: X(t) && !P(t) && !sr(t)
						? String(t)
						: t,
	k = {},
	lt = [],
	Ce = () => {},
	_o = () => !1,
	bo = /^on[^a-z]/,
	Yt = (e) => bo.test(e),
	jn = (e) => e.startsWith("onUpdate:"),
	ie = Object.assign,
	Kn = (e, t) => {
		const n = e.indexOf(t);
		n > -1 && e.splice(n, 1);
	},
	yo = Object.prototype.hasOwnProperty,
	$ = (e, t) => yo.call(e, t),
	P = Array.isArray,
	ct = (e) => Zt(e) === "[object Map]",
	Xt = (e) => Zt(e) === "[object Set]",
	_s = (e) => e instanceof Date,
	N = (e) => typeof e == "function",
	ee = (e) => typeof e == "string",
	Un = (e) => typeof e == "symbol",
	X = (e) => e !== null && typeof e == "object",
	tr = (e) => X(e) && N(e.then) && N(e.catch),
	nr = Object.prototype.toString,
	Zt = (e) => nr.call(e),
	xo = (e) => Zt(e).slice(8, -1),
	sr = (e) => Zt(e) === "[object Object]",
	kn = (e) =>
		ee(e) && e !== "NaN" && e[0] !== "-" && ("" + parseInt(e, 10)) === e,
	St = $n(
		",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
	),
	Qt = (e) => {
		const t = Object.create(null);
		return (n) => t[n] || (t[n] = e(n));
	},
	Eo = /-(\w)/g,
	Oe = Qt((e) => e.replace(Eo, (t, n) => n ? n.toUpperCase() : "")),
	Co = /\B([A-Z])/g,
	at = Qt((e) => e.replace(Co, "-$1").toLowerCase()),
	Gt = Qt((e) => e.charAt(0).toUpperCase() + e.slice(1)),
	hn = Qt((e) => e ? `on${Gt(e)}` : ""),
	Tt = (e, t) => !Object.is(e, t),
	$t = (e, t) => {
		for (let n = 0; n < e.length; n++) e[n](t);
	},
	Ht = (e, t, n) => {
		Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
	},
	Vn = (e) => {
		const t = parseFloat(e);
		return isNaN(t) ? e : t;
	};
let bs;
const vo = () =>
	bs || (
		bs =
			typeof globalThis < "u"
				? globalThis
				: typeof self < "u"
					? self
					: typeof window < "u"
						? window
						: typeof global < "u"
							? global
							: {}
	);
let Ae;
class To {
	constructor(t = !1) {
		this.active = !0, this.effects = [], this.cleanups = [], !t &&
			Ae &&
			(
				this.parent = Ae, this.index =
					(Ae.scopes || (Ae.scopes = [])).push(this) - 1
			);
	}
	run(t) {
		if (this.active) {
			const n = Ae;
			try {
				return (Ae = this, t());
			} finally {
				Ae = n;
			}
		}
	}
	on() {
		Ae = this;
	}
	off() {
		Ae = this.parent;
	}
	stop(t) {
		if (this.active) {
			let n, s;
			for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
			for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
			if (this.scopes) {
				for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
			}
			if (this.parent && !t) {
				const r = this.parent.scopes.pop();
				r &&
					r !== this &&
					(this.parent.scopes[this.index] = r, r.index = this.index);
			}
			this.active = !1;
		}
	}
}
function wo(e, t = Ae) {
	t && t.active && t.effects.push(e);
}
const Wn = (e) => {
	const t = new Set(e);
	return (t.w = 0, t.n = 0, t);
},
	rr = (e) => (e.w & Ue) > 0,
	or = (e) => (e.n & Ue) > 0,
	Ao = ({ deps: e }) => {
		if (e.length) {
			for (let t = 0; t < e.length; t++) e[t].w |= Ue;
		}
	},
	Io = (e) => {
		const { deps: t } = e;
		if (t.length) {
			let n = 0;
			for (let s = 0; s < t.length; s++) {
				const r = t[s];
				rr(r) && !or(r) ? r.delete(e) : t[n++] = r, r.w &= ~Ue, r.n &= ~Ue;
			}
			t.length = n;
		}
	},
	En = new WeakMap();
let bt = 0, Ue = 1;
const Cn = 30;
let Ee;
const Xe = Symbol(""), vn = Symbol("");
class qn {
	constructor(t, n = null, s) {
		this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent =
			void 0, wo(this, s);
	}
	run() {
		if (!this.active) {
			return this.fn();
		}
		let t = Ee, n = je;
		for (; t; ) {
			if (t === this) {
				return;
			}
			t = t.parent;
		}
		try {
			return (
				this.parent = Ee, Ee = this, je = !0, Ue = 1 << ++bt, bt <= Cn ? Ao(
					this,
				) : ys(this), this.fn()
			);
		} finally {
			bt <= Cn && Io(this), Ue = 1 << --bt, Ee = this.parent, je = n, this.parent =
				void 0, this.deferStop && this.stop();
		}
	}
	stop() {
		Ee === this ? this.deferStop = !0 : this.active && (
			ys(this), this.onStop && this.onStop(), this.active = !1
		);
	}
}
function ys(e) {
	const { deps: t } = e;
	if (t.length) {
		for (let n = 0; n < t.length; n++) t[n].delete(e);
		t.length = 0;
	}
}
let je = !0;
const ir = [];
function dt() {
	ir.push(je), je = !1;
}
function ht() {
	const e = ir.pop();
	je = e === void 0 ? !0 : e;
}
function pe(e, t, n) {
	if (je && Ee) {
		let s = En.get(e);
		s || En.set(e, s = new Map());
		let r = s.get(n);
		r || s.set(n, r = Wn()), lr(r);
	}
}
function lr(e, t) {
	let n = !1;
	bt <= Cn ? or(e) || (e.n |= Ue, n = !rr(e)) : n = !e.has(Ee), n && (
		e.add(Ee), Ee.deps.push(e)
	);
}
function Ne(e, t, n, s, r, o) {
	const i = En.get(e);
	if (!i) {
		return;
	}
	let l = [];
	if (t === "clear") {
		l = [...i.values()];
	} else if (n === "length" && P(e)) {
		i.forEach(
			(f, a) => {
				(a === "length" || a >= s) && l.push(f);
			},
		);
	} else {
		switch (n !== void 0 && l.push(i.get(n)), t) {
			case "add":
				P(e) ? kn(n) && l.push(i.get("length")) : (
					l.push(i.get(Xe)), ct(e) && l.push(i.get(vn))
				);
				break;
			case "delete":
				P(e) || (l.push(i.get(Xe)), ct(e) && l.push(i.get(vn)));
				break;
			case "set":
				ct(e) && l.push(i.get(Xe));
				break;
		}
	}
	if (l.length === 1) {
		l[0] && Tn(l[0]);
	} else {
		const f = [];
		for (const a of l) a && f.push(...a);
		Tn(Wn(f));
	}
}
function Tn(e, t) {
	for (const n of P(e) ? e : [...e]) (n !== Ee || n.allowRecurse) && (
		n.scheduler ? n.scheduler() : n.run()
	);
}
const Oo = $n("__proto__,__v_isRef,__isVue"),
	cr = new Set(
		Object.getOwnPropertyNames(Symbol).map((e) => Symbol[e]).filter(Un),
	),
	Po = zn(),
	Fo = zn(!1, !0),
	Mo = zn(!0),
	xs = No();
function No() {
	const e = {};
	return (
		["includes", "indexOf", "lastIndexOf"].forEach(
			(t) => {
				e[t] =
					function (...n) {
						const s = H(this);
						for (let o = 0, i = this.length; o < i; o++) pe(s, "get", o + "");
						const r = s[t](...n);
						return r === -1 || r === !1 ? s[t](...n.map(H)) : r;
					};
			},
		), ["push", "pop", "shift", "unshift", "splice"].forEach(
			(t) => {
				e[t] =
					function (...n) {
						dt();
						const s = H(this)[t].apply(this, n);
						return (ht(), s);
					};
			},
		), e
	);
}
function zn(e = !1, t = !1) {
	return function (s, r, o) {
		if (r === "__v_isReactive") {
			return !e;
		}
		if (r === "__v_isReadonly") {
			return e;
		}
		if (r === "__v_isShallow") {
			return t;
		}
		if (
			r === "__v_raw" && o === (
				e
					? t
						? Jo
						: hr
					: t
						? dr
						: ar
			).get(s)
		) {
			return s;
		}
		const i = P(s);
		if (!e && i && $(xs, r)) {
			return Reflect.get(xs, r, o);
		}
		const l = Reflect.get(s, r, o);
		return (Un(r) ? cr.has(r) : Oo(r)) || (e || pe(s, "get", r), t)
			? l
			: se(l)
				? !i || !kn(r)
					? l.value
					: l
				: X(l)
					? e
						? pr(l)
						: Xn(l)
					: l;
	};
}
const Lo = fr(), Ro = fr(!0);
function fr(e = !1) {
	return function (n, s, r, o) {
		let i = n[s];
		if (wt(i) && se(i) && !se(r)) {
			return !1;
		}
		if (
			!e &&
			!wt(r) &&
			(gr(r) || (r = H(r), i = H(i)), !P(n) && se(i) && !se(r))
		) {
			return (i.value = r, !0);
		}
		const l = P(n) && kn(s) ? Number(s) < n.length : $(n, s),
			f = Reflect.set(n, s, r, o);
		return (
			n === H(o) && (l ? Tt(r, i) && Ne(n, "set", s, r) : Ne(n, "add", s, r)), f
		);
	};
}
function Do(e, t) {
	const n = $(e, t);
	e[t];
	const s = Reflect.deleteProperty(e, t);
	return (s && n && Ne(e, "delete", t, void 0), s);
}
function So(e, t) {
	const n = Reflect.has(e, t);
	return ((!Un(t) || !cr.has(t)) && pe(e, "has", t), n);
}
function $o(e) {
	return (pe(e, "iterate", P(e) ? "length" : Xe), Reflect.ownKeys(e));
}
const ur = { get: Po, set: Lo, deleteProperty: Do, has: So, ownKeys: $o },
	Bo = {
		get: Mo,
		set(e, t) {
			return !0;
		},
		deleteProperty(e, t) {
			return !0;
		},
	},
	Ho = ie({}, ur, { get: Fo, set: Ro }),
	Jn = (e) => e,
	en = (e) => Reflect.getPrototypeOf(e);
function Ft(e, t, n = !1, s = !1) {
	e = e.__v_raw;
	const r = H(e), o = H(t);
	t !== o && !n && pe(r, "get", t), !n && pe(r, "get", o);
	const { has: i } = en(r),
		l = s
			? Jn
			: n
				? Qn
				: At;
	if (i.call(r, t)) {
		return l(e.get(t));
	}
	if (i.call(r, o)) {
		return l(e.get(o));
	}
	e !== r && e.get(t);
}
function Mt(e, t = !1) {
	const n = this.__v_raw, s = H(n), r = H(e);
	return (
		e !== r && !t && pe(s, "has", e), !t && pe(s, "has", r), e === r ? n.has(e) : n.has(
			e,
		) || n.has(r)
	);
}
function Nt(e, t = !1) {
	return (
		e = e.__v_raw, !t && pe(H(e), "iterate", Xe), Reflect.get(e, "size", e)
	);
}
function Es(e) {
	e = H(e);
	const t = H(this);
	return (en(t).has.call(t, e) || (t.add(e), Ne(t, "add", e, e)), this);
}
function Cs(e, t) {
	t = H(t);
	const n = H(this), { has: s, get: r } = en(n);
	let o = s.call(n, e);
	o || (e = H(e), o = s.call(n, e));
	const i = r.call(n, e);
	return (
		n.set(e, t), o ? Tt(t, i) && Ne(n, "set", e, t) : Ne(n, "add", e, t), this
	);
}
function vs(e) {
	const t = H(this), { has: n, get: s } = en(t);
	let r = n.call(t, e);
	r || (e = H(e), r = n.call(t, e)), s && s.call(t, e);
	const o = t.delete(e);
	return (r && Ne(t, "delete", e, void 0), o);
}
function Ts() {
	const e = H(this), t = e.size !== 0, n = e.clear();
	return (t && Ne(e, "clear", void 0, void 0), n);
}
function Lt(e, t) {
	return function (s, r) {
		const o = this,
			i = o.__v_raw,
			l = H(i),
			f = t
				? Jn
				: e
					? Qn
					: At;
		return (
			!e && pe(l, "iterate", Xe), i.forEach((a, h) => s.call(r, f(a), f(h), o))
		);
	};
}
function Rt(e, t, n) {
	return function (...s) {
		const r = this.__v_raw,
			o = H(r),
			i = ct(o),
			l = e === "entries" || (e === Symbol.iterator && i),
			f = e === "keys" && i,
			a = r[e](...s),
			h = n
				? Jn
				: t
					? Qn
					: At;
		return (
			!t && pe(o, "iterate", f ? vn : Xe), {
				next() {
					const { value: m, done: b } = a.next();
					return b ? { value: m, done: b } : {
						value: l ? [h(m[0]), h(m[1])] : h(m),
						done: b,
					};
				},
				[Symbol.iterator]() {
					return this;
				},
			}
		);
	};
}
function De(e) {
	return function (...t) {
		return e === "delete" ? !1 : this;
	};
}
function jo() {
	const e = {
		get(o) {
			return Ft(this, o);
		},
		get size() {
			return Nt(this);
		},
		has: Mt,
		add: Es,
		set: Cs,
		delete: vs,
		clear: Ts,
		forEach: Lt(!1, !1),
	},
		t = {
			get(o) {
				return Ft(this, o, !1, !0);
			},
			get size() {
				return Nt(this);
			},
			has: Mt,
			add: Es,
			set: Cs,
			delete: vs,
			clear: Ts,
			forEach: Lt(!1, !0),
		},
		n = {
			get(o) {
				return Ft(this, o, !0);
			},
			get size() {
				return Nt(this, !0);
			},
			has(o) {
				return Mt.call(this, o, !0);
			},
			add: De("add"),
			set: De("set"),
			delete: De("delete"),
			clear: De("clear"),
			forEach: Lt(!0, !1),
		},
		s = {
			get(o) {
				return Ft(this, o, !0, !0);
			},
			get size() {
				return Nt(this, !0);
			},
			has(o) {
				return Mt.call(this, o, !0);
			},
			add: De("add"),
			set: De("set"),
			delete: De("delete"),
			clear: De("clear"),
			forEach: Lt(!0, !0),
		};
	return (
		["keys", "values", "entries", Symbol.iterator].forEach(
			(o) => {
				e[o] = Rt(o, !1, !1), n[o] = Rt(o, !0, !1), t[o] = Rt(o, !1, !0), s[o] =
					Rt(o, !0, !0);
			},
		), [e, n, t, s]
	);
}
const [Ko, Uo, ko, Vo] = jo();
function Yn(e, t) {
	const n = t
		? e
			? Vo
			: ko
		: e
			? Uo
			: Ko;
	return (s, r, o) =>
		r === "__v_isReactive"
			? !e
			: r === "__v_isReadonly"
				? e
				: r === "__v_raw"
					? s
					: Reflect.get($(n, r) && (r in s) ? n : s, r, o);
}
const Wo = { get: Yn(!1, !1) },
	qo = { get: Yn(!1, !0) },
	zo = { get: Yn(!0, !1) },
	ar = new WeakMap(),
	dr = new WeakMap(),
	hr = new WeakMap(),
	Jo = new WeakMap();
function Yo(e) {
	switch (e) {
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
function Xo(e) {
	return e.__v_skip || !Object.isExtensible(e) ? 0 : Yo(xo(e));
}
function Xn(e) {
	return wt(e) ? e : Zn(e, !1, ur, Wo, ar);
}
function Zo(e) {
	return Zn(e, !1, Ho, qo, dr);
}
function pr(e) {
	return Zn(e, !0, Bo, zo, hr);
}
function Zn(e, t, n, s, r) {
	if (!X(e) || (e.__v_raw && !(t && e.__v_isReactive))) {
		return e;
	}
	const o = r.get(e);
	if (o) {
		return o;
	}
	const i = Xo(e);
	if (i === 0) {
		return e;
	}
	const l = new Proxy(e, i === 2 ? s : n);
	return (r.set(e, l), l);
}
function ft(e) {
	return wt(e) ? ft(e.__v_raw) : !!(e && e.__v_isReactive);
}
function wt(e) {
	return !!(e && e.__v_isReadonly);
}
function gr(e) {
	return !!(e && e.__v_isShallow);
}
function mr(e) {
	return ft(e) || wt(e);
}
function H(e) {
	const t = e && e.__v_raw;
	return t ? H(t) : e;
}
function _r(e) {
	return (Ht(e, "__v_skip", !0), e);
}
const At = (e) => X(e) ? Xn(e) : e, Qn = (e) => X(e) ? pr(e) : e;
function br(e) {
	je && Ee && (e = H(e), lr(e.dep || (e.dep = Wn())));
}
function yr(e, t) {
	e = H(e), e.dep && Tn(e.dep);
}
function se(e) {
	return !!(e && e.__v_isRef === !0);
}
function Ql(e) {
	return xr(e, !1);
}
function Qo(e) {
	return xr(e, !0);
}
function xr(e, t) {
	return se(e) ? e : new Go(e, t);
}
class Go {
	constructor(t, n) {
		this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue =
			n ? t : H(t), this._value = n ? t : At(t);
	}
	get value() {
		return (br(this), this._value);
	}
	set value(t) {
		t = this.__v_isShallow ? t : H(t), Tt(t, this._rawValue) && (
			this._rawValue = t, this._value = this.__v_isShallow ? t : At(t), yr(this)
		);
	}
}
function ei(e) {
	return se(e) ? e.value : e;
}
const ti = {
	get: (e, t, n) => ei(Reflect.get(e, t, n)),
	set: (e, t, n, s) => {
		const r = e[t];
		return se(r) && !se(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
	},
};
function Er(e) {
	return ft(e) ? e : new Proxy(e, ti);
}
function Gl(e) {
	const t = P(e) ? new Array(e.length) : {};
	for (const n in e) t[n] = si(e, n);
	return t;
}
class ni {
	constructor(t, n, s) {
		this._object = t, this._key = n, this._defaultValue = s, this.__v_isRef = !0;
	}
	get value() {
		const t = this._object[this._key];
		return t === void 0 ? this._defaultValue : t;
	}
	set value(t) {
		this._object[this._key] = t;
	}
}
function si(e, t, n) {
	const s = e[t];
	return se(s) ? s : new ni(e, t, n);
}
class ri {
	constructor(t, n, s, r) {
		this._setter = n, this.dep = void 0, this.__v_isRef = !0, this._dirty = !0, this.effect =
			new qn(
				t,
				() => {
					this._dirty || (this._dirty = !0, yr(this));
				},
			), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly =
			s;
	}
	get value() {
		const t = H(this);
		return (
			br(t), (t._dirty || !t._cacheable) && (
				t._dirty = !1, t._value = t.effect.run()
			), t._value
		);
	}
	set value(t) {
		this._setter(t);
	}
}
function oi(e, t, n = !1) {
	let s, r;
	const o = N(e);
	return (
		o ? (s = e, r = Ce) : (s = e.get, r = e.set), new ri(s, r, o || !r, n)
	);
}
function Ke(e, t, n, s) {
	let r;
	try {
		r = s ? e(...s) : e();
	} catch (o) {
		tn(o, t, n);
	}
	return r;
}
function be(e, t, n, s) {
	if (N(e)) {
		const o = Ke(e, t, n, s);
		return (
			o &&
				tr(o) &&
				o.catch(
					(i) => {
						tn(i, t, n);
					},
				), o
		);
	}
	const r = [];
	for (let o = 0; o < e.length; o++) r.push(be(e[o], t, n, s));
	return r;
}
function tn(e, t, n, s = !0) {
	const r = t ? t.vnode : null;
	if (t) {
		let o = t.parent;
		const i = t.proxy, l = n;
		for (; o; ) {
			const a = o.ec;
			if (a) {
				for (let h = 0; h < a.length; h++) if (a[h](e, i, l) === !1) {
					return;
				}
			}
			o = o.parent;
		}
		const f = t.appContext.config.errorHandler;
		if (f) {
			Ke(f, null, 10, [e, i, l]);
			return;
		}
	}
	ii(e, n, r, s);
}
function ii(e, t, n, s = !0) {
	console.error(e);
}
let jt = !1, wn = !1;
const he = [];
let Me = 0;
const xt = [];
let yt = null, ot = 0;
const Et = [];
let Be = null, it = 0;
const Cr = Promise.resolve();
let Gn = null, An = null;
function vr(e) {
	const t = Gn || Cr;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function li(e) {
	let t = Me + 1, n = he.length;
	for (; t < n; ) {
		const s = t + n >>> 1;
		It(he[s]) < e ? t = s + 1 : n = s;
	}
	return t;
}
function Tr(e) {
	(!he.length || !he.includes(e, jt && e.allowRecurse ? Me + 1 : Me)) &&
		e !== An &&
		(e.id == null ? he.push(e) : he.splice(li(e.id), 0, e), wr());
}
function wr() {
	!jt && !wn && (wn = !0, Gn = Cr.then(Or));
}
function ci(e) {
	const t = he.indexOf(e);
	t > Me && he.splice(t, 1);
}
function Ar(e, t, n, s) {
	P(e) ? n.push(...e) : (!t || !t.includes(e, e.allowRecurse ? s + 1 : s)) && n.push(
		e,
	), wr();
}
function fi(e) {
	Ar(e, yt, xt, ot);
}
function ui(e) {
	Ar(e, Be, Et, it);
}
function es(e, t = null) {
	if (xt.length) {
		for (
			An = t, yt = [...new Set(xt)], xt.length = 0, ot = 0;
			ot < yt.length;
			ot++
		) yt[ot]();
		yt = null, ot = 0, An = null, es(e, t);
	}
}
function Ir(e) {
	if (Et.length) {
		const t = [...new Set(Et)];
		if (Et.length = 0, Be) {
			Be.push(...t);
			return;
		}
		for (Be = t, Be.sort((n, s) => It(n) - It(s)), it = 0; it < Be.length; it++) Be[it]();
		Be = null, it = 0;
	}
}
const It = (e) => e.id == null ? 1 / 0 : e.id;
function Or(e) {
	wn = !1, jt = !0, es(e), he.sort((n, s) => It(n) - It(s));
	const t = Ce;
	try {
		for (Me = 0; Me < he.length; Me++) {
			const n = he[Me];
			n && n.active !== !1 && Ke(n, null, 14);
		}
	} finally {
		Me = 0, he.length = 0, Ir(), jt = !1, Gn = null, (
			he.length || xt.length || Et.length
		) && Or(e);
	}
}
function ai(e, t, ...n) {
	if (e.isUnmounted) {
		return;
	}
	const s = e.vnode.props || k;
	let r = n;
	const o = t.startsWith("update:"), i = o && t.slice(7);
	if (i && (i in s)) {
		const h = `${i === "modelValue" ? "model" : i}Modifiers`,
			{ number: m, trim: b } = s[h] || k;
		b ? r = n.map((w) => w.trim()) : m && (r = n.map(Vn));
	}
	let l, f = s[l = hn(t)] || s[l = hn(Oe(t))];
	!f && o && (f = s[l = hn(at(t))]), f && be(f, e, 6, r);
	const a = s[l + "Once"];
	if (a) {
		if (!e.emitted) {
			e.emitted = {};
		} else if (e.emitted[l]) {
			return;
		}
		e.emitted[l] = !0, be(a, e, 6, r);
	}
}
function Pr(e, t, n = !1) {
	const s = t.emitsCache, r = s.get(e);
	if (r !== void 0) {
		return r;
	}
	const o = e.emits;
	let i = {}, l = !1;
	if (!N(e)) {
		const f = (a) => {
			const h = Pr(a, t, !0);
			h && (l = !0, ie(i, h));
		};
		!n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(
			f,
		);
	}
	return !o && !l ? (s.set(e, null), null) : (
		P(o) ? o.forEach((f) => i[f] = null) : ie(i, o), s.set(e, i), i
	);
}
function nn(e, t) {
	return !e || !Yt(t) ? !1 : (
		t = t.slice(2).replace(/Once$/, ""), $(e, t[0].toLowerCase() + t.slice(1)) ||
			$(e, at(t)) ||
			$(e, t)
	);
}
let ce = null, sn = null;
function Kt(e) {
	const t = ce;
	return (ce = e, sn = (e && e.type.__scopeId) || null, t);
}
function ec(e) {
	sn = e;
}
function tc() {
	sn = null;
}
function di(e, t = ce, n) {
	if (!t || e._n) {
		return e;
	}
	const s = (...r) => {
		s._d && Ss(-1);
		const o = Kt(t), i = e(...r);
		return (Kt(o), s._d && Ss(1), i);
	};
	return (s._n = !0, s._c = !0, s._d = !0, s);
}
function pn(e) {
	const {
		type: t,
		vnode: n,
		proxy: s,
		withProxy: r,
		props: o,
		propsOptions: [i],
		slots: l,
		attrs: f,
		emit: a,
		render: h,
		renderCache: m,
		data: b,
		setupState: w,
		ctx: M,
		inheritAttrs: R,
	} = e;
	let L, S;
	const re = Kt(e);
	try {
		if (n.shapeFlag & 4) {
			const V = r || s;
			L = Ie(h.call(V, V, m, o, w, b, M)), S = f;
		} else {
			const V = t;
			L = Ie(V.length > 1 ? V(o, { attrs: f, slots: l, emit: a }) : V(o, null)), S =
				t.props ? f : hi(f);
		}
	} catch (V) {
		vt.length = 0, tn(V, e, 1), L = ae(ye);
	}
	let J = L;
	if (S && R !== !1) {
		const V = Object.keys(S), { shapeFlag: Q } = J;
		V.length && Q & 7 && (i && V.some(jn) && (S = pi(S, i)), J = Ge(J, S));
	}
	return (
		n.dirs && (J.dirs = J.dirs ? J.dirs.concat(n.dirs) : n.dirs), n.transition && (
			J.transition = n.transition
		), L = J, Kt(re), L
	);
}
const hi = (e) => {
	let t;
	for (const n in e) (n === "class" || n === "style" || Yt(n)) && (
		(t || (t = {}))[n] = e[n]
	);
	return t;
},
	pi = (e, t) => {
		const n = {};
		for (const s in e) (!jn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
		return n;
	};
function gi(e, t, n) {
	const { props: s, children: r, component: o } = e,
		{ props: i, children: l, patchFlag: f } = t,
		a = o.emitsOptions;
	if (t.dirs || t.transition) {
		return !0;
	}
	if (n && f >= 0) {
		if (f & 1024) {
			return !0;
		}
		if (f & 16) {
			return s ? ws(s, i, a) : !!i;
		}
		if (f & 8) {
			const h = t.dynamicProps;
			for (let m = 0; m < h.length; m++) {
				const b = h[m];
				if (i[b] !== s[b] && !nn(a, b)) {
					return !0;
				}
			}
		}
	} else {
		return (r || l) && (!l || !l.$stable)
			? !0
			: s === i
				? !1
				: s
					? i
						? ws(s, i, a)
						: !0
					: !!i;
	}
	return !1;
}
function ws(e, t, n) {
	const s = Object.keys(t);
	if (s.length !== Object.keys(e).length) {
		return !0;
	}
	for (let r = 0; r < s.length; r++) {
		const o = s[r];
		if (t[o] !== e[o] && !nn(n, o)) {
			return !0;
		}
	}
	return !1;
}
function mi({ vnode: e, parent: t }, n) {
	for (; t && t.subTree === e; ) (e = t.vnode).el = n, t = t.parent;
}
const _i = (e) => e.__isSuspense;
function bi(e, t) {
	t && t.pendingBranch
		? P(e)
			? t.effects.push(...e)
			: t.effects.push(e)
		: ui(e);
}
function yi(e, t) {
	if (ne) {
		let n = ne.provides;
		const s = ne.parent && ne.parent.provides;
		s === n && (n = ne.provides = Object.create(s)), n[e] = t;
	}
}
function gn(e, t, n = !1) {
	const s = ne || ce;
	if (s) {
		const r = s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides;
		if (r && (e in r)) {
			return r[e];
		}
		if (arguments.length > 1) {
			return n && N(t) ? t.call(s.proxy) : t;
		}
	}
}
function nc(e, t) {
	return ts(e, null, t);
}
const As = {};
function mn(e, t, n) {
	return ts(e, t, n);
}
function ts(
	e,
	t,
	{ immediate: n, deep: s, flush: r, onTrack: o, onTrigger: i } = k,
) {
	const l = ne;
	let f, a = !1, h = !1;
	if (
		se(e)
			? (f = () => e.value, a = gr(e))
			: ft(e)
				? (f = () => e, s = !0)
				: P(e)
					? (
						h = !0, a = e.some(ft), f =
							() =>
								e.map(
									(S) => {
										if (se(S)) {
											return S.value;
										}
										if (ft(S)) {
											return Ye(S);
										}
										if (N(S)) {
											return Ke(S, l, 2);
										}
									},
								)
					)
					: N(e)
						? t
							? f = () => Ke(e, l, 2)
							: f =
								() => {
									if (!(l && l.isUnmounted)) {
										return (m && m(), be(e, l, 3, [b]));
									}
								}
						: f = Ce, t && s
	) {
		const S = f;
		f = () => Ye(S());
	}
	let m,
		b = (S) => {
			m =
				L.onStop =
					() => {
						Ke(S, l, 4);
					};
		};
	if (Ot) {
		return (b = Ce, t ? n && be(t, l, 3, [f(), h ? [] : void 0, b]) : f(), Ce);
	}
	let w = h ? [] : As;
	const M = () => {
		if (!!L.active) {
			if (t) {
				const S = L.run();
				(s || a || (h ? S.some((re, J) => Tt(re, w[J])) : Tt(S, w))) && (
					m && m(), be(t, l, 3, [S, w === As ? void 0 : w, b]), w = S
				);
			} else {
				L.run();
			}
		}
	};
	M.allowRecurse = !!t;
	let R;
	r === "sync"
		? R = M
		: r === "post"
			? R = () => ue(M, l && l.suspense)
			: R =
				() => {
					!l || l.isMounted ? fi(M) : M();
				};
	const L = new qn(f, R);
	return (
		t
			? n
				? M()
				: w = L.run()
			: r === "post"
				? ue(L.run.bind(L), l && l.suspense)
				: L.run(), () => {
			L.stop(), l && l.scope && Kn(l.scope.effects, L);
		}
	);
}
function xi(e, t, n) {
	const s = this.proxy,
		r = ee(e)
			? e.includes(".")
				? Fr(s, e)
				: () => s[e]
			: e.bind(s, s);
	let o;
	N(t) ? o = t : (o = t.handler, n = t);
	const i = ne;
	ut(this);
	const l = ts(r, o.bind(s), n);
	return (i ? ut(i) : Qe(), l);
}
function Fr(e, t) {
	const n = t.split(".");
	return () => {
		let s = e;
		for (let r = 0; r < n.length && s; r++) s = s[n[r]];
		return s;
	};
}
function Ye(e, t) {
	if (!X(e) || e.__v_skip || (t = t || new Set(), t.has(e))) {
		return e;
	}
	if (t.add(e), se(e)) {
		Ye(e.value, t);
	} else if (P(e)) {
		for (let n = 0; n < e.length; n++) Ye(e[n], t);
	} else if (Xt(e) || ct(e)) {
		e.forEach(
			(n) => {
				Ye(n, t);
			},
		);
	} else if (sr(e)) {
		for (const n in e) Ye(e[n], t);
	}
	return e;
}
function Ei() {
	const e = {
		isMounted: !1,
		isLeaving: !1,
		isUnmounting: !1,
		leavingVNodes: new Map(),
	};
	return (
		Dr(() => {
			e.isMounted = !0;
		}), Sr(() => {
			e.isUnmounting = !0;
		}), e
	);
}
const ge = [Function, Array],
	Ci = {
		name: "BaseTransition",
		props: {
			mode: String,
			appear: Boolean,
			persisted: Boolean,
			onBeforeEnter: ge,
			onEnter: ge,
			onAfterEnter: ge,
			onEnterCancelled: ge,
			onBeforeLeave: ge,
			onLeave: ge,
			onAfterLeave: ge,
			onLeaveCancelled: ge,
			onBeforeAppear: ge,
			onAppear: ge,
			onAfterAppear: ge,
			onAppearCancelled: ge,
		},
		setup(e, { slots: t }) {
			const n = ll(), s = Ei();
			let r;
			return () => {
				const o = t.default && Lr(t.default(), !0);
				if (!o || !o.length) {
					return;
				}
				let i = o[0];
				if (o.length > 1) {
					for (const R of o) if (R.type !== ye) {
						i = R;
						break;
					}
				}
				const l = H(e), { mode: f } = l;
				if (s.isLeaving) {
					return _n(i);
				}
				const a = Is(i);
				if (!a) {
					return _n(i);
				}
				const h = In(a, l, s, n);
				On(a, h);
				const m = n.subTree, b = m && Is(m);
				let w = !1;
				const { getTransitionKey: M } = a.type;
				if (M) {
					const R = M();
					r === void 0 ? r = R : R !== r && (r = R, w = !0);
				}
				if (b && b.type !== ye && (!ze(a, b) || w)) {
					const R = In(b, l, s, n);
					if (On(b, R), f === "out-in") {
						return (
							s.isLeaving = !0, R.afterLeave =
								() => {
									s.isLeaving = !1, n.update();
								}, _n(i)
						);
					}
					f === "in-out" &&
						a.type !== ye &&
						(
							R.delayLeave =
								(L, S, re) => {
									const J = Nr(s, b);
									J[String(b.key)] = b, L._leaveCb =
										() => {
											S(), L._leaveCb = void 0, delete h.delayedLeave;
										}, h.delayedLeave = re;
								}
						);
				}
				return i;
			};
		},
	},
	Mr = Ci;
function Nr(e, t) {
	const { leavingVNodes: n } = e;
	let s = n.get(t.type);
	return (s || (s = Object.create(null), n.set(t.type, s)), s);
}
function In(e, t, n, s) {
	const {
		appear: r,
		mode: o,
		persisted: i = !1,
		onBeforeEnter: l,
		onEnter: f,
		onAfterEnter: a,
		onEnterCancelled: h,
		onBeforeLeave: m,
		onLeave: b,
		onAfterLeave: w,
		onLeaveCancelled: M,
		onBeforeAppear: R,
		onAppear: L,
		onAfterAppear: S,
		onAppearCancelled: re,
	} = t,
		J = String(e.key),
		V = Nr(n, e),
		Q = (D, K) => {
			D && be(D, s, 9, K);
		},
		le = {
			mode: o,
			persisted: i,
			beforeEnter(D) {
				let K = l;
				if (!n.isMounted) {
					if (r) {
						K = R || l;
					} else {
						return;
					}
				}
				D._leaveCb && D._leaveCb(!0);
				const j = V[J];
				j && ze(e, j) && j.el._leaveCb && j.el._leaveCb(), Q(K, [D]);
			},
			enter(D) {
				let K = f, j = a, te = h;
				if (!n.isMounted) {
					if (r) {
						K = L || f, j = S || a, te = re || h;
					} else {
						return;
					}
				}
				let Z = !1;
				const O = D._enterCb =
					(G) => {
						Z || (
							Z = !0, G ? Q(te, [D]) : Q(j, [D]), le.delayedLeave && le.delayedLeave(), D._enterCb =
								void 0
						);
					};
				K ? (K(D, O), K.length <= 1 && O()) : O();
			},
			leave(D, K) {
				const j = String(e.key);
				if (D._enterCb && D._enterCb(!0), n.isUnmounting) {
					return K();
				}
				Q(m, [D]);
				let te = !1;
				const Z = D._leaveCb =
					(O) => {
						te || (
							te = !0, K(), O ? Q(M, [D]) : Q(w, [D]), D._leaveCb = void 0, V[j] === e && delete V[j]
						);
					};
				V[j] = e, b ? (b(D, Z), b.length <= 1 && Z()) : Z();
			},
			clone(D) {
				return In(D, t, n, s);
			},
		};
	return le;
}
function _n(e) {
	if (rn(e)) {
		return (e = Ge(e), e.children = null, e);
	}
}
function Is(e) {
	return rn(e)
		? e.children
			? e.children[0]
			: void 0
		: e;
}
function On(e, t) {
	e.shapeFlag & 6 && e.component
		? On(e.component.subTree, t)
		: e.shapeFlag & 128
			? (
				e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition =
					t.clone(e.ssFallback)
			)
			: e.transition = t;
}
function Lr(e, t = !1, n) {
	let s = [], r = 0;
	for (let o = 0; o < e.length; o++) {
		let i = e[o];
		const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
		i.type === _e ? (
			i.patchFlag & 128 && r++, s = s.concat(Lr(i.children, t, l))
		) : (t || i.type !== ye) && s.push(l != null ? Ge(i, { key: l }) : i);
	}
	if (r > 1) {
		for (let o = 0; o < s.length; o++) s[o].patchFlag = -2;
	}
	return s;
}
function sc(e) {
	return N(e) ? { setup: e, name: e.name } : e;
}
const Ut = (e) => !!e.type.__asyncLoader, rn = (e) => e.type.__isKeepAlive;
function vi(e, t) {
	Rr(e, "a", t);
}
function Ti(e, t) {
	Rr(e, "da", t);
}
function Rr(e, t, n = ne) {
	const s = e.__wdc || (
		e.__wdc =
			() => {
				let r = n;
				for (; r; ) {
					if (r.isDeactivated) {
						return;
					}
					r = r.parent;
				}
				return e();
			}
	);
	if (on(t, s, n), n) {
		let r = n.parent;
		for (; r && r.parent; ) rn(r.parent.vnode) && wi(s, t, n, r), r = r.parent;
	}
}
function wi(e, t, n, s) {
	const r = on(t, e, s, !0);
	$r(
		() => {
			Kn(s[t], r);
		},
		n,
	);
}
function on(e, t, n = ne, s = !1) {
	if (n) {
		const r = n[e] || (n[e] = []),
			o = t.__weh || (
				t.__weh =
					(...i) => {
						if (n.isUnmounted) {
							return;
						}
						dt(), ut(n);
						const l = be(t, n, e, i);
						return (Qe(), ht(), l);
					}
			);
		return (s ? r.unshift(o) : r.push(o), o);
	}
}
const Le = (e) => (t, n = ne) => (!Ot || e === "sp") && on(e, t, n),
	Ai = Le("bm"),
	Dr = Le("m"),
	Ii = Le("bu"),
	Oi = Le("u"),
	Sr = Le("bum"),
	$r = Le("um"),
	Pi = Le("sp"),
	Fi = Le("rtg"),
	Mi = Le("rtc");
function Ni(e, t = ne) {
	on("ec", e, t);
}
let Pn = !0;
function Li(e) {
	const t = Hr(e), n = e.proxy, s = e.ctx;
	Pn = !1, t.beforeCreate && Os(t.beforeCreate, e, "bc");
	const {
		data: r,
		computed: o,
		methods: i,
		watch: l,
		provide: f,
		inject: a,
		created: h,
		beforeMount: m,
		mounted: b,
		beforeUpdate: w,
		updated: M,
		activated: R,
		deactivated: L,
		beforeDestroy: S,
		beforeUnmount: re,
		destroyed: J,
		unmounted: V,
		render: Q,
		renderTracked: le,
		renderTriggered: D,
		errorCaptured: K,
		serverPrefetch: j,
		expose: te,
		inheritAttrs: Z,
		components: O,
		directives: G,
		filters: ve,
	} = t;
	if (a && Ri(a, s, null, e.appContext.config.unwrapInjectedRef), i) {
		for (const Y in i) {
			const W = i[Y];
			N(W) && (s[Y] = W.bind(n));
		}
	}
	if (r) {
		const Y = r.call(n, n);
		X(Y) && (e.data = Xn(Y));
	}
	if (Pn = !0, o) {
		for (const Y in o) {
			const W = o[Y],
				Pe = N(W)
					? W.bind(n, n)
					: N(W.get)
						? W.get.bind(n, n)
						: Ce,
				un = !N(W) && N(W.set) ? W.set.bind(n) : Ce,
				pt = pl({ get: Pe, set: un });
			Object.defineProperty(
				s,
				Y,
				{
					enumerable: !0,
					configurable: !0,
					get: () => pt.value,
					set: (tt) => pt.value = tt,
				},
			);
		}
	}
	if (l) {
		for (const Y in l) Br(l[Y], s, n, Y);
	}
	if (f) {
		const Y = N(f) ? f.call(n) : f;
		Reflect
			.ownKeys(Y)
			.forEach(
				(W) => {
					yi(W, Y[W]);
				},
			);
	}
	h && Os(h, e, "c");
	function oe(Y, W) {
		P(W) ? W.forEach((Pe) => Y(Pe.bind(n))) : W && Y(W.bind(n));
	}
	if (
		oe(Ai, m), oe(Dr, b), oe(Ii, w), oe(Oi, M), oe(vi, R), oe(Ti, L), oe(Ni, K), oe(
			Mi,
			le,
		), oe(Fi, D), oe(Sr, re), oe($r, V), oe(Pi, j), P(te)
	) {
		if (te.length) {
			const Y = e.exposed || (e.exposed = {});
			te.forEach(
				(W) => {
					Object.defineProperty(
						Y,
						W,
						{ get: () => n[W], set: (Pe) => n[W] = Pe },
					);
				},
			);
		} else {
			e.exposed || (e.exposed = {});
		}
	}
	Q && e.render === Ce && (e.render = Q), Z != null && (e.inheritAttrs = Z), O && (
		e.components = O
	), G && (e.directives = G);
}
function Ri(e, t, n = Ce, s = !1) {
	P(e) && (e = Fn(e));
	for (const r in e) {
		const o = e[r];
		let i;
		X(o)
			? "default" in o
				? i = gn(o.from || r, o.default, !0)
				: i = gn(o.from || r)
			: i = gn(o), se(i) && s ? Object.defineProperty(
			t,
			r,
			{
				enumerable: !0,
				configurable: !0,
				get: () => i.value,
				set: (l) => i.value = l,
			},
		) : t[r] = i;
	}
}
function Os(e, t, n) {
	be(P(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Br(e, t, n, s) {
	const r = s.includes(".") ? Fr(n, s) : () => n[s];
	if (ee(e)) {
		const o = t[e];
		N(o) && mn(r, o);
	} else if (N(e)) {
		mn(r, e.bind(n));
	} else if (X(e)) {
		if (P(e)) {
			e.forEach((o) => Br(o, t, n, s));
		} else {
			const o = N(e.handler) ? e.handler.bind(n) : t[e.handler];
			N(o) && mn(r, o, e);
		}
	}
}
function Hr(e) {
	const t = e.type,
		{ mixins: n, extends: s } = t,
		{ mixins: r, optionsCache: o, config: { optionMergeStrategies: i } } = e.appContext,
		l = o.get(t);
	let f;
	return (
		l
			? f = l
			: !r.length && !n && !s
				? f = t
				: (f = {}, r.length && r.forEach((a) => kt(f, a, i, !0)), kt(f, t, i)), o.set(
			t,
			f,
		), f
	);
}
function kt(e, t, n, s = !1) {
	const { mixins: r, extends: o } = t;
	o && kt(e, o, n, !0), r && r.forEach((i) => kt(e, i, n, !0));
	for (const i in t) if (!(s && i === "expose")) {
		const l = Di[i] || (n && n[i]);
		e[i] = l ? l(e[i], t[i]) : t[i];
	}
	return e;
}
const Di = {
	data: Ps,
	props: qe,
	emits: qe,
	methods: qe,
	computed: qe,
	beforeCreate: fe,
	created: fe,
	beforeMount: fe,
	mounted: fe,
	beforeUpdate: fe,
	updated: fe,
	beforeDestroy: fe,
	beforeUnmount: fe,
	destroyed: fe,
	unmounted: fe,
	activated: fe,
	deactivated: fe,
	errorCaptured: fe,
	serverPrefetch: fe,
	components: qe,
	directives: qe,
	watch: $i,
	provide: Ps,
	inject: Si,
};
function Ps(e, t) {
	return t
		? e
			? function () {
				return ie(N(e) ? e.call(this, this) : e, N(t) ? t.call(this, this) : t);
			}
			: t
		: e;
}
function Si(e, t) {
	return qe(Fn(e), Fn(t));
}
function Fn(e) {
	if (P(e)) {
		const t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function fe(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function qe(e, t) {
	return e ? ie(ie(Object.create(null), e), t) : t;
}
function $i(e, t) {
	if (!e) {
		return t;
	}
	if (!t) {
		return e;
	}
	const n = ie(Object.create(null), e);
	for (const s in t) n[s] = fe(e[s], t[s]);
	return n;
}
function Bi(e, t, n, s = !1) {
	const r = {}, o = {};
	Ht(o, ln, 1), e.propsDefaults = Object.create(null), jr(e, t, r, o);
	for (const i in e.propsOptions[0]) (i in r) || (r[i] = void 0);
	n
		? e.props = s ? r : Zo(r)
		: e.type.props
			? e.props = r
			: e.props = o, e.attrs = o;
}
function Hi(e, t, n, s) {
	const { props: r, attrs: o, vnode: { patchFlag: i } } = e,
		l = H(r),
		[f] = e.propsOptions;
	let a = !1;
	if ((s || i > 0) && !(i & 16)) {
		if (i & 8) {
			const h = e.vnode.dynamicProps;
			for (let m = 0; m < h.length; m++) {
				let b = h[m];
				if (nn(e.emitsOptions, b)) {
					continue;
				}
				const w = t[b];
				if (f) {
					if ($(o, b)) {
						w !== o[b] && (o[b] = w, a = !0);
					} else {
						const M = Oe(b);
						r[M] = Mn(f, l, M, w, e, !1);
					}
				} else {
					w !== o[b] && (o[b] = w, a = !0);
				}
			}
		}
	} else {
		jr(e, t, r, o) && (a = !0);
		let h;
		for (const m in l) (!t || (!$(t, m) && ((h = at(m)) === m || !$(t, h)))) && (
			f ? n &&
				(n[m] !== void 0 || n[h] !== void 0) &&
				(r[m] = Mn(f, l, m, void 0, e, !0)) : delete r[m]
		);
		if (o !== l) {
			for (const m in o) (!t || (!$(t, m) && !0)) && (delete o[m], a = !0);
		}
	}
	a && Ne(e, "set", "$attrs");
}
function jr(e, t, n, s) {
	const [r, o] = e.propsOptions;
	let i = !1, l;
	if (t) {
		for (let f in t) {
			if (St(f)) {
				continue;
			}
			const a = t[f];
			let h;
			r && $(r, h = Oe(f))
				? !o || !o.includes(h)
					? n[h] = a
					: (l || (l = {}))[h] = a
				: nn(e.emitsOptions, f) || (
					(!(f in s) || a !== s[f]) && (s[f] = a, i = !0)
				);
		}
	}
	if (o) {
		const f = H(n), a = l || k;
		for (let h = 0; h < o.length; h++) {
			const m = o[h];
			n[m] = Mn(r, f, m, a[m], e, !$(a, m));
		}
	}
	return i;
}
function Mn(e, t, n, s, r, o) {
	const i = e[n];
	if (i != null) {
		const l = $(i, "default");
		if (l && s === void 0) {
			const f = i.default;
			if (i.type !== Function && N(f)) {
				const { propsDefaults: a } = r;
				n in a ? s = a[n] : (ut(r), s = a[n] = f.call(null, t), Qe());
			} else {
				s = f;
			}
		}
		i[0] && (o && !l ? s = !1 : i[1] && (s === "" || s === at(n)) && (s = !0));
	}
	return s;
}
function Kr(e, t, n = !1) {
	const s = t.propsCache, r = s.get(e);
	if (r) {
		return r;
	}
	const o = e.props, i = {}, l = [];
	let f = !1;
	if (!N(e)) {
		const h = (m) => {
			f = !0;
			const [b, w] = Kr(m, t, !0);
			ie(i, b), w && l.push(...w);
		};
		!n && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(
			h,
		);
	}
	if (!o && !f) {
		return (s.set(e, lt), lt);
	}
	if (P(o)) {
		for (let h = 0; h < o.length; h++) {
			const m = Oe(o[h]);
			Fs(m) && (i[m] = k);
		}
	} else if (o) {
		for (const h in o) {
			const m = Oe(h);
			if (Fs(m)) {
				const b = o[h], w = i[m] = P(b) || N(b) ? { type: b } : b;
				if (w) {
					const M = Ls(Boolean, w.type), R = Ls(String, w.type);
					w[0] = M > -1, w[1] = R < 0 || M < R, (M > -1 || $(w, "default")) && l.push(
						m,
					);
				}
			}
		}
	}
	const a = [i, l];
	return (s.set(e, a), a);
}
function Fs(e) {
	return e[0] !== "$";
}
function Ms(e) {
	const t = e && e.toString().match(/^\s*function (\w+)/);
	return t
		? t[1]
		: e === null
			? "null"
			: "";
}
function Ns(e, t) {
	return Ms(e) === Ms(t);
}
function Ls(e, t) {
	return P(t)
		? t.findIndex((n) => Ns(n, e))
		: N(t) && Ns(t, e)
			? 0
			: -1;
}
const Ur = (e) => e[0] === "_" || e === "$stable",
	ns = (e) => P(e) ? e.map(Ie) : [Ie(e)],
	ji = (e, t, n) => {
		const s = di((...r) => ns(t(...r)), n);
		return (s._c = !1, s);
	},
	kr = (e, t, n) => {
		const s = e._ctx;
		for (const r in e) {
			if (Ur(r)) {
				continue;
			}
			const o = e[r];
			if (N(o)) {
				t[r] = ji(r, o, s);
			} else if (o != null) {
				const i = ns(o);
				t[r] = () => i;
			}
		}
	},
	Vr = (e, t) => {
		const n = ns(t);
		e.slots.default = () => n;
	},
	Ki = (e, t) => {
		if (e.vnode.shapeFlag & 32) {
			const n = t._;
			n ? (e.slots = H(t), Ht(t, "_", n)) : kr(t, e.slots = {});
		} else {
			e.slots = {}, t && Vr(e, t);
		}
		Ht(e.slots, ln, 1);
	},
	Ui = (e, t, n) => {
		const { vnode: s, slots: r } = e;
		let o = !0, i = k;
		if (s.shapeFlag & 32) {
			const l = t._;
			l
				? n && l === 1
					? o = !1
					: (ie(r, t), !n && l === 1 && delete r._)
				: (o = !t.$stable, kr(t, r)), i = t;
		} else {
			t && (Vr(e, t), i = { default: 1 });
		}
		if (o) {
			for (const l in r) !Ur(l) && !(l in i) && delete r[l];
		}
	};
function rc(e, t) {
	const n = ce;
	if (n === null) {
		return e;
	}
	const s = cn(n) || n.proxy, r = e.dirs || (e.dirs = []);
	for (let o = 0; o < t.length; o++) {
		let [i, l, f, a = k] = t[o];
		N(i) && (i = { mounted: i, updated: i }), i.deep && Ye(l), r.push({
			dir: i,
			instance: s,
			value: l,
			oldValue: void 0,
			arg: f,
			modifiers: a,
		});
	}
	return e;
}
function ke(e, t, n, s) {
	const r = e.dirs, o = t && t.dirs;
	for (let i = 0; i < r.length; i++) {
		const l = r[i];
		o && (l.oldValue = o[i].value);
		let f = l.dir[s];
		f && (dt(), be(f, n, 8, [e.el, l, e, t]), ht());
	}
}
function Wr() {
	return {
		app: null,
		config: {
			isNativeTag: _o,
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
let ki = 0;
function Vi(e, t) {
	return function (s, r = null) {
		N(s) || (s = Object.assign({}, s)), r != null && !X(r) && (r = null);
		const o = Wr(), i = new Set();
		let l = !1;
		const f = o.app =
			{
				_uid: ki++,
				_component: s,
				_props: r,
				_container: null,
				_context: o,
				_instance: null,
				version: ml,
				get config() {
					return o.config;
				},
				set config(a) {},
				use(a, ...h) {
					return (
						i.has(a) || (
							a && N(a.install) ? (i.add(a), a.install(f, ...h)) : N(a) && (
								i.add(a), a(f, ...h)
							)
						), f
					);
				},
				mixin(a) {
					return (o.mixins.includes(a) || o.mixins.push(a), f);
				},
				component(a, h) {
					return h ? (o.components[a] = h, f) : o.components[a];
				},
				directive(a, h) {
					return h ? (o.directives[a] = h, f) : o.directives[a];
				},
				mount(a, h, m) {
					if (!l) {
						const b = ae(s, r);
						return (
							b.appContext = o, h && t ? t(b, a) : e(b, a, m), l = !0, f._container =
								a, a.__vue_app__ = f, cn(b.component) || b.component.proxy
						);
					}
				},
				unmount() {
					l && (e(null, f._container), delete f._container.__vue_app__);
				},
				provide(a, h) {
					return (o.provides[a] = h, f);
				},
			};
		return f;
	};
}
function Nn(e, t, n, s, r = !1) {
	if (P(e)) {
		e.forEach((b, w) => Nn(b, t && (P(t) ? t[w] : t), n, s, r));
		return;
	}
	if (Ut(s) && !r) {
		return;
	}
	const o = s.shapeFlag & 4 ? cn(s.component) || s.component.proxy : s.el,
		i = r ? null : o,
		{ i: l, r: f } = e,
		a = t && t.r,
		h = l.refs === k ? l.refs = {} : l.refs,
		m = l.setupState;
	if (
		a != null &&
			a !== f &&
			(
				ee(a) ? (h[a] = null, $(m, a) && (m[a] = null)) : se(a) && (
					a.value = null
				)
			), N(f)
	) {
		Ke(f, l, 12, [i, h]);
	} else {
		const b = ee(f), w = se(f);
		if (b || w) {
			const M = () => {
				if (e.f) {
					const R = b ? h[f] : f.value;
					r
						? P(R) && Kn(R, o)
						: P(R)
							? R.includes(o) || R.push(o)
							: b
								? (h[f] = [o], $(m, f) && (m[f] = h[f]))
								: (f.value = [o], e.k && (h[e.k] = f.value));
				} else {
					b ? (h[f] = i, $(m, f) && (m[f] = i)) : se(f) && (
						f.value = i, e.k && (h[e.k] = i)
					);
				}
			};
			i ? (M.id = -1, ue(M, n)) : M();
		}
	}
}
const ue = bi;
function Wi(e) {
	return qi(e);
}
function qi(e, t) {
	const n = vo();
	n.__VUE__ = !0;
	const {
		insert: s,
		remove: r,
		patchProp: o,
		createElement: i,
		createText: l,
		createComment: f,
		setText: a,
		setElementText: h,
		parentNode: m,
		nextSibling: b,
		setScopeId: w = Ce,
		cloneNode: M,
		insertStaticContent: R,
	} = e,
		L = (
			c,
			u,
			d,
			g = null,
			p = null,
			x = null,
			v = !1,
			y = null,
			C = !!u.dynamicChildren,
		) => {
			if (c === u) {
				return;
			}
			c && !ze(c, u) && (g = Pt(c), Re(c, p, x, !0), c = null), u.patchFlag === -2 && (
				C = !1, u.dynamicChildren = null
			);
			const { type: _, ref: A, shapeFlag: T } = u;
			switch (_) {
				case os:
					S(c, u, d, g);
					break;
				case ye:
					re(c, u, d, g);
					break;
				case bn:
					c == null && J(u, d, g, v);
					break;
				case _e:
					G(c, u, d, g, p, x, v, y, C);
					break;
				default:
					T & 1
						? le(c, u, d, g, p, x, v, y, C)
						: T & 6
							? ve(c, u, d, g, p, x, v, y, C)
							: (T & 64 || T & 128) && _.process(c, u, d, g, p, x, v, y, C, nt);
			}
			A != null && p && Nn(A, c && c.ref, x, u || c, !u);
		},
		S = (c, u, d, g) => {
			if (c == null) {
				s(u.el = l(u.children), d, g);
			} else {
				const p = u.el = c.el;
				u.children !== c.children && a(p, u.children);
			}
		},
		re = (c, u, d, g) => {
			c == null ? s(u.el = f(u.children || ""), d, g) : u.el = c.el;
		},
		J = (c, u, d, g) => {
			[c.el, c.anchor] = R(c.children, u, d, g, c.el, c.anchor);
		},
		V = ({ el: c, anchor: u }, d, g) => {
			let p;
			for (; c && c !== u; ) p = b(c), s(c, d, g), c = p;
			s(u, d, g);
		},
		Q = ({ el: c, anchor: u }) => {
			let d;
			for (; c && c !== u; ) d = b(c), r(c), c = d;
			r(u);
		},
		le = (c, u, d, g, p, x, v, y, C) => {
			v = v || u.type === "svg", c == null ? D(u, d, g, p, x, v, y, C) : te(
				c,
				u,
				p,
				x,
				v,
				y,
				C,
			);
		},
		D = (c, u, d, g, p, x, v, y) => {
			let C, _;
			const {
				type: A,
				props: T,
				shapeFlag: I,
				transition: F,
				patchFlag: B,
				dirs: z,
			} = c;
			if (c.el && M !== void 0 && B === -1) {
				C = c.el = M(c.el);
			} else {
				if (
					C = c.el = i(c.type, x, T && T.is, T), I & 8 ? h(C, c.children) : I & 16 && j(
						c.children,
						C,
						null,
						g,
						p,
						x && A !== "foreignObject",
						v,
						y,
					), z && ke(c, null, g, "created"), T
				) {
					for (const q in T) q !== "value" &&
						!St(q) &&
						o(C, q, null, T[q], x, c.children, g, p, Fe);
					("value" in T) && o(C, "value", null, T.value), (
						_ = T.onVnodeBeforeMount
					) && we(_, g, c);
				}
				K(C, c, c.scopeId, v, g);
			}
			z && ke(c, null, g, "beforeMount");
			const U = (!p || (p && !p.pendingBranch)) && F && !F.persisted;
			U && F.beforeEnter(C), s(C, u, d), ((_ = T && T.onVnodeMounted) || U || z) && ue(
				() => {
					_ && we(_, g, c), U && F.enter(C), z && ke(c, null, g, "mounted");
				},
				p,
			);
		},
		K = (c, u, d, g, p) => {
			if (d && w(c, d), g) {
				for (let x = 0; x < g.length; x++) w(c, g[x]);
			}
			if (p) {
				let x = p.subTree;
				if (u === x) {
					const v = p.vnode;
					K(c, v, v.scopeId, v.slotScopeIds, p.parent);
				}
			}
		},
		j = (c, u, d, g, p, x, v, y, C = 0) => {
			for (let _ = C; _ < c.length; _++) {
				const A = c[_] = y ? He(c[_]) : Ie(c[_]);
				L(null, A, u, d, g, p, x, v, y);
			}
		},
		te = (c, u, d, g, p, x, v) => {
			const y = u.el = c.el;
			let { patchFlag: C, dynamicChildren: _, dirs: A } = u;
			C |= c.patchFlag & 16;
			const T = c.props || k, I = u.props || k;
			let F;
			d && Ve(d, !1), (F = I.onVnodeBeforeUpdate) && we(F, d, u, c), A && ke(
				u,
				c,
				d,
				"beforeUpdate",
			), d && Ve(d, !0);
			const B = p && u.type !== "foreignObject";
			if (
				_ ? Z(c.dynamicChildren, _, y, d, g, B, x) : v || Pe(
					c,
					u,
					y,
					null,
					d,
					g,
					B,
					x,
					!1,
				), C > 0
			) {
				if (C & 16) {
					O(y, u, T, I, d, g, p);
				} else if (
					C & 2 && T.class !== I.class && o(y, "class", null, I.class, p), C & 4 && o(
						y,
						"style",
						T.style,
						I.style,
						p,
					), C & 8
				) {
					const z = u.dynamicProps;
					for (let U = 0; U < z.length; U++) {
						const q = z[U], xe = T[q], st = I[q];
						(st !== xe || q === "value") && o(
							y,
							q,
							xe,
							st,
							p,
							c.children,
							d,
							g,
							Fe,
						);
					}
				}
				C & 1 && c.children !== u.children && h(y, u.children);
			} else {
				!v && _ == null && O(y, u, T, I, d, g, p);
			}
			((F = I.onVnodeUpdated) || A) && ue(
				() => {
					F && we(F, d, u, c), A && ke(u, c, d, "updated");
				},
				g,
			);
		},
		Z = (c, u, d, g, p, x, v) => {
			for (let y = 0; y < u.length; y++) {
				const C = c[y],
					_ = u[y],
					A = C.el && (C.type === _e || !ze(C, _) || C.shapeFlag & 70) ? m(C.el) : d;
				L(C, _, A, null, g, p, x, v, !0);
			}
		},
		O = (c, u, d, g, p, x, v) => {
			if (d !== g) {
				for (const y in g) {
					if (St(y)) {
						continue;
					}
					const C = g[y], _ = d[y];
					C !== _ && y !== "value" && o(c, y, _, C, v, u.children, p, x, Fe);
				}
				if (d !== k) {
					for (const y in d) !St(y) &&
						!(y in g) &&
						o(c, y, d[y], null, v, u.children, p, x, Fe);
				}
				("value" in g) && o(c, "value", d.value, g.value);
			}
		},
		G = (c, u, d, g, p, x, v, y, C) => {
			const _ = u.el = c ? c.el : l(""), A = u.anchor = c ? c.anchor : l("");
			let { patchFlag: T, dynamicChildren: I, slotScopeIds: F } = u;
			F && (y = y ? y.concat(F) : F), c == null
				? (s(_, d, g), s(A, d, g), j(u.children, d, A, p, x, v, y, C))
				: T > 0 && T & 64 && I && c.dynamicChildren
					? (
						Z(c.dynamicChildren, I, d, p, x, v, y), (
							u.key != null || (p && u === p.subTree)
						) && ss(c, u, !0)
					)
					: Pe(c, u, d, A, p, x, v, y, C);
		},
		ve = (c, u, d, g, p, x, v, y, C) => {
			u.slotScopeIds = y, c == null
				? u.shapeFlag & 512
					? p.ctx.activate(u, d, g, v, C)
					: et(u, d, g, p, x, v, C)
				: oe(c, u, C);
		},
		et = (c, u, d, g, p, x, v) => {
			const y = c.component = il(c, g, p);
			if (rn(c) && (y.ctx.renderer = nt), cl(y), y.asyncDep) {
				if (p && p.registerDep(y, Y), !c.el) {
					const C = y.subTree = ae(ye);
					re(null, C, u, d);
				}
				return;
			}
			Y(y, c, u, d, p, x, v);
		},
		oe = (c, u, d) => {
			const g = u.component = c.component;
			if (gi(c, u, d)) {
				if (g.asyncDep && !g.asyncResolved) {
					W(g, u, d);
					return;
				} else {
					g.next = u, ci(g.update), g.update();
				}
			} else {
				u.component = c.component, u.el = c.el, g.vnode = u;
			}
		},
		Y = (c, u, d, g, p, x, v) => {
			const y = () => {
				if (c.isMounted) {
					let { next: A, bu: T, u: I, parent: F, vnode: B } = c, z = A, U;
					Ve(c, !1), A ? (A.el = B.el, W(c, A, v)) : A = B, T && $t(T), (
						U = A.props && A.props.onVnodeBeforeUpdate
					) && we(U, F, A, B), Ve(c, !0);
					const q = pn(c), xe = c.subTree;
					c.subTree = q, L(xe, q, m(xe.el), Pt(xe), c, p, x), A.el = q.el, z === null && mi(
						c,
						q.el,
					), I && ue(I, p), (U = A.props && A.props.onVnodeUpdated) && ue(
						() => we(U, F, A, B),
						p,
					);
				} else {
					let A;
					const { el: T, props: I } = u,
						{ bm: F, m: B, parent: z } = c,
						U = Ut(u);
					if (
						Ve(c, !1), F && $t(F), !U &&
							(A = I && I.onVnodeBeforeMount) &&
							we(A, z, u), Ve(c, !0), T && dn
					) {
						const q = () => {
							c.subTree = pn(c), dn(T, c.subTree, c, p, null);
						};
						U ? u.type.__asyncLoader().then(() => !c.isUnmounted && q()) : q();
					} else {
						const q = c.subTree = pn(c);
						L(null, q, d, g, c, p, x), u.el = q.el;
					}
					if (B && ue(B, p), !U && (A = I && I.onVnodeMounted)) {
						const q = u;
						ue(() => we(A, z, q), p);
					}
					u.shapeFlag & 256 && c.a && ue(c.a, p), c.isMounted = !0, u =
						d = g = null;
				}
			},
				C = c.effect = new qn(y, () => Tr(c.update), c.scope),
				_ = c.update = C.run.bind(C);
			_.id = c.uid, Ve(c, !0), _();
		},
		W = (c, u, d) => {
			u.component = c;
			const g = c.vnode.props;
			c.vnode = u, c.next = null, Hi(c, u.props, g, d), Ui(c, u.children, d), dt(), es(
				void 0,
				c.update,
			), ht();
		},
		Pe = (c, u, d, g, p, x, v, y, C = !1) => {
			const _ = c && c.children,
				A = c ? c.shapeFlag : 0,
				T = u.children,
				{ patchFlag: I, shapeFlag: F } = u;
			if (I > 0) {
				if (I & 128) {
					pt(_, T, d, g, p, x, v, y, C);
					return;
				} else if (I & 256) {
					un(_, T, d, g, p, x, v, y, C);
					return;
				}
			}
			F & 8
				? (A & 16 && Fe(_, p, x), T !== _ && h(d, T))
				: A & 16
					? F & 16
						? pt(_, T, d, g, p, x, v, y, C)
						: Fe(_, p, x, !0)
					: (A & 8 && h(d, ""), F & 16 && j(T, d, g, p, x, v, y, C));
		},
		un = (c, u, d, g, p, x, v, y, C) => {
			c = c || lt, u = u || lt;
			const _ = c.length, A = u.length, T = Math.min(_, A);
			let I;
			for (I = 0; I < T; I++) {
				const F = u[I] = C ? He(u[I]) : Ie(u[I]);
				L(c[I], F, d, null, p, x, v, y, C);
			}
			_ > A ? Fe(c, p, x, !0, !1, T) : j(u, d, g, p, x, v, y, C, T);
		},
		pt = (c, u, d, g, p, x, v, y, C) => {
			let _ = 0;
			const A = u.length;
			let T = c.length - 1, I = A - 1;
			for (; _ <= T && _ <= I; ) {
				const F = c[_], B = u[_] = C ? He(u[_]) : Ie(u[_]);
				if (ze(F, B)) {
					L(F, B, d, null, p, x, v, y, C);
				} else {
					break;
				}
				_++;
			}
			for (; _ <= T && _ <= I; ) {
				const F = c[T], B = u[I] = C ? He(u[I]) : Ie(u[I]);
				if (ze(F, B)) {
					L(F, B, d, null, p, x, v, y, C);
				} else {
					break;
				}
				T--, I--;
			}
			if (_ > T) {
				if (_ <= I) {
					const F = I + 1, B = F < A ? u[F].el : g;
					for (; _ <= I; ) L(
						null,
						u[_] = C ? He(u[_]) : Ie(u[_]),
						d,
						B,
						p,
						x,
						v,
						y,
						C,
					), _++;
				}
			} else if (_ > I) {
				for (; _ <= T; ) Re(c[_], p, x, !0), _++;
			} else {
				const F = _, B = _, z = new Map();
				for (_ = B; _ <= I; _++) {
					const de = u[_] = C ? He(u[_]) : Ie(u[_]);
					de.key != null && z.set(de.key, _);
				}
				let U, q = 0;
				const xe = I - B + 1;
				let st = !1, hs = 0;
				const gt = new Array(xe);
				for (_ = 0; _ < xe; _++) gt[_] = 0;
				for (_ = F; _ <= T; _++) {
					const de = c[_];
					if (q >= xe) {
						Re(de, p, x, !0);
						continue;
					}
					let Te;
					if (de.key != null) {
						Te = z.get(de.key);
					} else {
						for (U = B; U <= I; U++) if (gt[U - B] === 0 && ze(de, u[U])) {
							Te = U;
							break;
						}
					}
					Te === void 0 ? Re(de, p, x, !0) : (
						gt[Te - B] = _ + 1, Te >= hs ? hs = Te : st = !0, L(
							de,
							u[Te],
							d,
							null,
							p,
							x,
							v,
							y,
							C,
						), q++
					);
				}
				const ps = st ? zi(gt) : lt;
				for (U = ps.length - 1, _ = xe - 1; _ >= 0; _--) {
					const de = B + _, Te = u[de], gs = (de + 1) < A ? u[de + 1].el : g;
					gt[_] === 0 ? L(null, Te, d, gs, p, x, v, y, C) : st && (
						U < 0 || _ !== ps[U] ? tt(Te, d, gs, 2) : U--
					);
				}
			}
		},
		tt = (c, u, d, g, p = null) => {
			const { el: x, type: v, transition: y, children: C, shapeFlag: _ } = c;
			if (_ & 6) {
				tt(c.component.subTree, u, d, g);
				return;
			}
			if (_ & 128) {
				c.suspense.move(u, d, g);
				return;
			}
			if (_ & 64) {
				v.move(c, u, d, nt);
				return;
			}
			if (v === _e) {
				s(x, u, d);
				for (let T = 0; T < C.length; T++) tt(C[T], u, d, g);
				s(c.anchor, u, d);
				return;
			}
			if (v === bn) {
				V(c, u, d);
				return;
			}
			if (g !== 2 && _ & 1 && y) {
				if (g === 0) {
					y.beforeEnter(x), s(x, u, d), ue(() => y.enter(x), p);
				} else {
					const { leave: T, delayLeave: I, afterLeave: F } = y,
						B = () => s(x, u, d),
						z = () => {
							T(
								x,
								() => {
									B(), F && F();
								},
							);
						};
					I ? I(x, B, z) : z();
				}
			} else {
				s(x, u, d);
			}
		},
		Re = (c, u, d, g = !1, p = !1) => {
			const {
				type: x,
				props: v,
				ref: y,
				children: C,
				dynamicChildren: _,
				shapeFlag: A,
				patchFlag: T,
				dirs: I,
			} = c;
			if (y != null && Nn(y, null, d, c, !0), A & 256) {
				u.ctx.deactivate(c);
				return;
			}
			const F = A & 1 && I, B = !Ut(c);
			let z;
			if (B && (z = v && v.onVnodeBeforeUnmount) && we(z, u, c), A & 6) {
				oo(c.component, d, g);
			} else {
				if (A & 128) {
					c.suspense.unmount(d, g);
					return;
				}
				F && ke(c, null, u, "beforeUnmount"), A & 64
					? c.type.remove(c, u, d, p, nt, g)
					: _ && (x !== _e || (T > 0 && T & 64))
						? Fe(_, u, d, !1, !0)
						: ((x === _e && T & 384) || (!p && A & 16)) && Fe(C, u, d), g && as(
					c,
				);
			}
			((B && (z = v && v.onVnodeUnmounted)) || F) && ue(
				() => {
					z && we(z, u, c), F && ke(c, null, u, "unmounted");
				},
				d,
			);
		},
		as = (c) => {
			const { type: u, el: d, anchor: g, transition: p } = c;
			if (u === _e) {
				ro(d, g);
				return;
			}
			if (u === bn) {
				Q(c);
				return;
			}
			const x = () => {
				r(d), p && !p.persisted && p.afterLeave && p.afterLeave();
			};
			if (c.shapeFlag & 1 && p && !p.persisted) {
				const { leave: v, delayLeave: y } = p, C = () => v(d, x);
				y ? y(c.el, x, C) : C();
			} else {
				x();
			}
		},
		ro = (c, u) => {
			let d;
			for (; c !== u; ) d = b(c), r(c), c = d;
			r(u);
		},
		oo = (c, u, d) => {
			const { bum: g, scope: p, update: x, subTree: v, um: y } = c;
			g && $t(g), p.stop(), x && (x.active = !1, Re(v, c, u, d)), y && ue(y, u), ue(
				() => {
					c.isUnmounted = !0;
				},
				u,
			), u &&
				u.pendingBranch &&
				!u.isUnmounted &&
				c.asyncDep &&
				!c.asyncResolved &&
				c.suspenseId === u.pendingId &&
				(u.deps--, u.deps === 0 && u.resolve());
		},
		Fe = (c, u, d, g = !1, p = !1, x = 0) => {
			for (let v = x; v < c.length; v++) Re(c[v], u, d, g, p);
		},
		Pt = (c) =>
			c.shapeFlag & 6
				? Pt(c.component.subTree)
				: c.shapeFlag & 128
					? c.suspense.next()
					: b(c.anchor || c.el),
		ds = (c, u, d) => {
			c == null ? u._vnode && Re(u._vnode, null, null, !0) : L(
				u._vnode || null,
				c,
				u,
				null,
				null,
				null,
				d,
			), Ir(), u._vnode = c;
		},
		nt = {
			p: L,
			um: Re,
			m: tt,
			r: as,
			mt: et,
			mc: j,
			pc: Pe,
			pbc: Z,
			n: Pt,
			o: e,
		};
	let an, dn;
	return (
		t && ([an, dn] = t(nt)), { render: ds, hydrate: an, createApp: Vi(ds, an) }
	);
}
function Ve({ effect: e, update: t }, n) {
	e.allowRecurse = t.allowRecurse = n;
}
function ss(e, t, n = !1) {
	const s = e.children, r = t.children;
	if (P(s) && P(r)) {
		for (let o = 0; o < s.length; o++) {
			const i = s[o];
			let l = r[o];
			l.shapeFlag & 1 &&
				!l.dynamicChildren &&
				(
					(l.patchFlag <= 0 || l.patchFlag === 32) && (
						l = r[o] = He(r[o]), l.el = i.el
					), n || ss(i, l)
				);
		}
	}
}
function zi(e) {
	const t = e.slice(), n = [0];
	let s, r, o, i, l;
	const f = e.length;
	for (s = 0; s < f; s++) {
		const a = e[s];
		if (a !== 0) {
			if (r = n[n.length - 1], e[r] < a) {
				t[s] = r, n.push(s);
				continue;
			}
			for (o = 0, i = n.length - 1; o < i; ) l = o + i >> 1, e[n[l]] < a ? o =
				l + 1 : i = l;
			a < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), n[o] = s);
		}
	}
	for (o = n.length, i = n[o - 1]; o-- > 0; ) n[o] = i, i = t[i];
	return n;
}
const Ji = (e) => e.__isTeleport,
	Ct = (e) => e && (e.disabled || e.disabled === ""),
	Rs = (e) => typeof SVGElement < "u" && (e instanceof SVGElement),
	Ln = (e, t) => {
		const n = e && e.to;
		return ee(n)
			? t
				? t(n)
				: null
			: n;
	},
	Yi = {
		__isTeleport: !0,
		process(e, t, n, s, r, o, i, l, f, a) {
			const {
				mc: h,
				pc: m,
				pbc: b,
				o: { insert: w, querySelector: M, createText: R, createComment: L },
			} = a,
				S = Ct(t.props);
			let { shapeFlag: re, children: J, dynamicChildren: V } = t;
			if (e == null) {
				const Q = t.el = R(""), le = t.anchor = R("");
				w(Q, n, s), w(le, n, s);
				const D = t.target = Ln(t.props, M), K = t.targetAnchor = R("");
				D && (w(K, D), i = i || Rs(D));
				const j = (te, Z) => {
					re & 16 && h(J, te, Z, r, o, i, l, f);
				};
				S ? j(n, le) : D && j(D, K);
			} else {
				t.el = e.el;
				const Q = t.anchor = e.anchor,
					le = t.target = e.target,
					D = t.targetAnchor = e.targetAnchor,
					K = Ct(e.props),
					j = K ? n : le,
					te = K ? Q : D;
				if (
					i = i || Rs(le), V ? (
						b(e.dynamicChildren, V, j, r, o, i, l), ss(e, t, !0)
					) : f || m(e, t, j, te, r, o, i, l, !1), S
				) {
					K || Dt(t, n, Q, a, 1);
				} else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
					const Z = t.target = Ln(t.props, M);
					Z && Dt(t, Z, null, a, 0);
				} else {
					K && Dt(t, le, D, a, 1);
				}
			}
		},
		remove(e, t, n, s, { um: r, o: { remove: o } }, i) {
			const {
				shapeFlag: l,
				children: f,
				anchor: a,
				targetAnchor: h,
				target: m,
				props: b,
			} = e;
			if (m && o(h), (i || !Ct(b)) && (o(a), l & 16)) {
				for (let w = 0; w < f.length; w++) {
					const M = f[w];
					r(M, t, n, !0, !!M.dynamicChildren);
				}
			}
		},
		move: Dt,
		hydrate: Xi,
	};
function Dt(e, t, n, { o: { insert: s }, m: r }, o = 2) {
	o === 0 && s(e.targetAnchor, t, n);
	const { el: i, anchor: l, shapeFlag: f, children: a, props: h } = e,
		m = o === 2;
	if (m && s(i, t, n), (!m || Ct(h)) && f & 16) {
		for (let b = 0; b < a.length; b++) r(a[b], t, n, 2);
	}
	m && s(l, t, n);
}
function Xi(
	e,
	t,
	n,
	s,
	r,
	o,
	{ o: { nextSibling: i, parentNode: l, querySelector: f } },
	a,
) {
	const h = t.target = Ln(t.props, f);
	if (h) {
		const m = h._lpa || h.firstChild;
		t.shapeFlag & 16 && (
			Ct(t.props) ? (
				t.anchor = a(i(e), t, l(e), n, s, r, o), t.targetAnchor = m
			) : (t.anchor = i(e), t.targetAnchor = a(m, t, h, n, s, r, o)), h._lpa =
				t.targetAnchor && i(t.targetAnchor)
		);
	}
	return t.anchor && i(t.anchor);
}
const oc = Yi, rs = "components";
function ic(e, t) {
	return zr(rs, e, !0, t) || e;
}
const qr = Symbol();
function Zi(e) {
	return ee(e) ? zr(rs, e, !1) || e : e || qr;
}
function zr(e, t, n = !0, s = !1) {
	const r = ce || ne;
	if (r) {
		const o = r.type;
		if (e === rs) {
			const l = dl(o);
			if (l && (l === t || l === Oe(t) || l === Gt(Oe(t)))) {
				return o;
			}
		}
		const i = Ds(r[e] || o[e], t) || Ds(r.appContext[e], t);
		return !i && s ? o : i;
	}
}
function Ds(e, t) {
	return e && (e[t] || e[Oe(t)] || e[Gt(Oe(t))]);
}
const _e = Symbol(void 0),
	os = Symbol(void 0),
	ye = Symbol(void 0),
	bn = Symbol(void 0),
	vt = [];
let Ze = null;
function is(e = !1) {
	vt.push(Ze = e ? null : []);
}
function Qi() {
	vt.pop(), Ze = vt[vt.length - 1] || null;
}
let Vt = 1;
function Ss(e) {
	Vt += e;
}
function Jr(e) {
	return (
		e.dynamicChildren = Vt > 0 ? Ze || lt : null, Qi(), Vt > 0 &&
			Ze &&
			Ze.push(e), e
	);
}
function lc(e, t, n, s, r, o) {
	return Jr(Xr(e, t, n, s, r, o, !0));
}
function ls(e, t, n, s, r) {
	return Jr(ae(e, t, n, s, r, !0));
}
function Wt(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function ze(e, t) {
	return e.type === t.type && e.key === t.key;
}
const ln = "__vInternal",
	Yr = ({ key: e }) => e ?? null,
	Bt = ({ ref: e, ref_key: t, ref_for: n }) =>
		e != null
			? ee(e) || se(e) || N(e)
				? { i: ce, r: e, k: t, f: !!n }
				: e
			: null;
function Xr(
	e,
	t = null,
	n = null,
	s = 0,
	r = null,
	o = e === _e ? 0 : 1,
	i = !1,
	l = !1,
) {
	const f = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && Yr(t),
		ref: t && Bt(t),
		scopeId: sn,
		slotScopeIds: null,
		children: n,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag: o,
		patchFlag: s,
		dynamicProps: r,
		dynamicChildren: null,
		appContext: null,
	};
	return (
		l ? (cs(f, n), o & 128 && e.normalize(f)) : n && (
			f.shapeFlag |= ee(n) ? 8 : 16
		), Vt > 0 &&
			!i &&
			Ze &&
			(f.patchFlag > 0 || o & 6) &&
			f.patchFlag !== 32 &&
			Ze.push(f), f
	);
}
const ae = Gi;
function Gi(e, t = null, n = null, s = 0, r = null, o = !1) {
	if ((!e || e === qr) && (e = ye), Wt(e)) {
		const l = Ge(e, t, !0);
		return (n && cs(l, n), l);
	}
	if (hl(e) && (e = e.__vccOpts), t) {
		t = el(t);
		let { class: l, style: f } = t;
		l && !ee(l) && (t.class = Hn(l)), X(f) && (
			mr(f) && !P(f) && (f = ie({}, f)), t.style = Bn(f)
		);
	}
	const i = ee(e)
		? 1
		: _i(e)
			? 128
			: Ji(e)
				? 64
				: X(e)
					? 4
					: N(e)
						? 2
						: 0;
	return Xr(e, t, n, s, r, i, o, !0);
}
function el(e) {
	return e
		? mr(e) || (ln in e)
			? ie({}, e)
			: e
		: null;
}
function Ge(e, t, n = !1) {
	const { props: s, ref: r, patchFlag: o, children: i } = e,
		l = t ? nl(s || {}, t) : s;
	return {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && Yr(l),
		ref: t && t.ref
			? n && r
				? P(r)
					? r.concat(Bt(t))
					: [r, Bt(t)]
				: Bt(t)
			: r,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: i,
		target: e.target,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== _e
			? o === -1
				? 16
				: o | 16
			: o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: e.transition,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && Ge(e.ssContent),
		ssFallback: e.ssFallback && Ge(e.ssFallback),
		el: e.el,
		anchor: e.anchor,
	};
}
function tl(e = " ", t = 0) {
	return ae(os, null, e, t);
}
function cc(e = "", t = !1) {
	return t ? (is(), ls(ye, null, e)) : ae(ye, null, e);
}
function Ie(e) {
	return e == null || typeof e == "boolean"
		? ae(ye)
		: P(e)
			? ae(_e, null, e.slice())
			: typeof e == "object"
				? He(e)
				: ae(os, null, String(e));
}
function He(e) {
	return e.el === null || e.memo ? e : Ge(e);
}
function cs(e, t) {
	let n = 0;
	const { shapeFlag: s } = e;
	if (t == null) {
		t = null;
	} else if (P(t)) {
		n = 16;
	} else if (typeof t == "object") {
		if (s & 65) {
			const r = t.default;
			r && (r._c && (r._d = !1), cs(e, r()), r._c && (r._d = !0));
			return;
		} else {
			n = 32;
			const r = t._;
			!r && !(ln in t) ? t._ctx = ce : r === 3 &&
				ce &&
				(ce.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else {
		N(t) ? (t = { default: t, _ctx: ce }, n = 32) : (
			t = String(t), s & 64 ? (n = 16, t = [tl(t)]) : n = 8
		);
	}
	e.children = t, e.shapeFlag |= n;
}
function nl(...e) {
	const t = {};
	for (let n = 0; n < e.length; n++) {
		const s = e[n];
		for (const r in s) if (r === "class") {
			t.class !== s.class && (t.class = Hn([t.class, s.class]));
		} else if (r === "style") {
			t.style = Bn([t.style, s.style]);
		} else if (Yt(r)) {
			const o = t[r], i = s[r];
			i &&
				o !== i &&
				!(P(o) && o.includes(i)) &&
				(t[r] = o ? [].concat(o, i) : i);
		} else {
			r !== "" && (t[r] = s[r]);
		}
	}
	return t;
}
function we(e, t, n, s = null) {
	be(e, t, 7, [n, s]);
}
function fc(e, t, n, s) {
	let r;
	const o = n && n[s];
	if (P(e) || ee(e)) {
		r = new Array(e.length);
		for (let i = 0, l = e.length; i < l; i++) r[i] =
			t(e[i], i, void 0, o && o[i]);
	} else if (typeof e == "number") {
		r = new Array(e);
		for (let i = 0; i < e; i++) r[i] = t(i + 1, i, void 0, o && o[i]);
	} else if (X(e)) {
		if (e[Symbol.iterator]) {
			r = Array.from(e, (i, l) => t(i, l, void 0, o && o[l]));
		} else {
			const i = Object.keys(e);
			r = new Array(i.length);
			for (let l = 0, f = i.length; l < f; l++) {
				const a = i[l];
				r[l] = t(e[a], a, l, o && o[l]);
			}
		}
	} else {
		r = [];
	}
	return (n && (n[s] = r), r);
}
function uc(e, t) {
	for (let n = 0; n < t.length; n++) {
		const s = t[n];
		if (P(s)) {
			for (let r = 0; r < s.length; r++) e[s[r].name] = s[r].fn;
		} else {
			s && (e[s.name] = s.fn);
		}
	}
	return e;
}
function ac(e, t, n = {}, s, r) {
	if (ce.isCE || (ce.parent && Ut(ce.parent) && ce.parent.isCE)) {
		return ae("slot", t === "default" ? null : { name: t }, s && s());
	}
	let o = e[t];
	o && o._c && (o._d = !1), is();
	const i = o && Zr(o(n)),
		l = ls(
			_e,
			{ key: n.key || `_${t}` },
			i || (s ? s() : []),
			i && e._ === 1 ? 64 : -2,
		);
	return (
		!r && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), o &&
			o._c &&
			(o._d = !0), l
	);
}
function Zr(e) {
	return e.some(
		(t) => Wt(t) ? !(t.type === ye || (t.type === _e && !Zr(t.children))) : !0,
	) ? e : null;
}
const Rn = (e) =>
	e
		? Qr(e)
			? cn(e) || e.proxy
			: Rn(e.parent)
		: null,
	qt = ie(
		Object.create(null),
		{
			$: (e) => e,
			$el: (e) => e.vnode.el,
			$data: (e) => e.data,
			$props: (e) => e.props,
			$attrs: (e) => e.attrs,
			$slots: (e) => e.slots,
			$refs: (e) => e.refs,
			$parent: (e) => Rn(e.parent),
			$root: (e) => Rn(e.root),
			$emit: (e) => e.emit,
			$options: (e) => Hr(e),
			$forceUpdate: (e) => () => Tr(e.update),
			$nextTick: (e) => vr.bind(e.proxy),
			$watch: (e) => xi.bind(e),
		},
	),
	sl = {
		get({ _: e }, t) {
			const {
				ctx: n,
				setupState: s,
				data: r,
				props: o,
				accessCache: i,
				type: l,
				appContext: f,
			} = e;
			let a;
			if (t[0] !== "$") {
				const w = i[t];
				if (w !== void 0) {
					switch (w) {
						case 1:
							return s[t];
						case 2:
							return r[t];
						case 4:
							return n[t];
						case 3:
							return o[t];
					}
				} else {
					if (s !== k && $(s, t)) {
						return (i[t] = 1, s[t]);
					}
					if (r !== k && $(r, t)) {
						return (i[t] = 2, r[t]);
					}
					if ((a = e.propsOptions[0]) && $(a, t)) {
						return (i[t] = 3, o[t]);
					}
					if (n !== k && $(n, t)) {
						return (i[t] = 4, n[t]);
					}
					Pn && (i[t] = 0);
				}
			}
			const h = qt[t];
			let m, b;
			if (h) {
				return (t === "$attrs" && pe(e, "get", t), h(e));
			}
			if ((m = l.__cssModules) && (m = m[t])) {
				return m;
			}
			if (n !== k && $(n, t)) {
				return (i[t] = 4, n[t]);
			}
			if (b = f.config.globalProperties, $(b, t)) {
				return b[t];
			}
		},
		set({ _: e }, t, n) {
			const { data: s, setupState: r, ctx: o } = e;
			return r !== k && $(r, t)
				? (r[t] = n, !0)
				: s !== k && $(s, t)
					? (s[t] = n, !0)
					: $(e.props, t) || (t[0] === "$" && (t.slice(1) in e))
						? !1
						: (o[t] = n, !0);
		},
		has(
			{
				_: {
					data: e,
					setupState: t,
					accessCache: n,
					ctx: s,
					appContext: r,
					propsOptions: o,
				},
			},
			i,
		) {
			let l;
			return !!n[i] ||
			(e !== k && $(e, i)) ||
			(t !== k && $(t, i)) ||
			((l = o[0]) && $(l, i)) ||
			$(s, i) ||
			$(qt, i) ||
			$(r.config.globalProperties, i);
		},
		defineProperty(e, t, n) {
			return (
				n.get != null ? e._.accessCache[t] = 0 : $(n, "value") && this.set(
					e,
					t,
					n.value,
					null,
				), Reflect.defineProperty(e, t, n)
			);
		},
	},
	rl = Wr();
let ol = 0;
function il(e, t, n) {
	const s = e.type,
		r = (t ? t.appContext : e.appContext) || rl,
		o = {
			uid: ol++,
			vnode: e,
			type: s,
			parent: t,
			appContext: r,
			root: null,
			next: null,
			subTree: null,
			effect: null,
			update: null,
			scope: new To(!0),
			render: null,
			proxy: null,
			exposed: null,
			exposeProxy: null,
			withProxy: null,
			provides: t ? t.provides : Object.create(r.provides),
			accessCache: null,
			renderCache: [],
			components: null,
			directives: null,
			propsOptions: Kr(s, r),
			emitsOptions: Pr(s, r),
			emit: null,
			emitted: null,
			propsDefaults: k,
			inheritAttrs: s.inheritAttrs,
			ctx: k,
			data: k,
			props: k,
			attrs: k,
			slots: k,
			refs: k,
			setupState: k,
			setupContext: null,
			suspense: n,
			suspenseId: n ? n.pendingId : 0,
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
		o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = ai.bind(null, o), e.ce && e.ce(
			o,
		), o
	);
}
let ne = null;
const ll = () => ne || ce,
	ut = (e) => {
		ne = e, e.scope.on();
	},
	Qe = () => {
		ne && ne.scope.off(), ne = null;
	};
function Qr(e) {
	return e.vnode.shapeFlag & 4;
}
let Ot = !1;
function cl(e, t = !1) {
	Ot = t;
	const { props: n, children: s } = e.vnode, r = Qr(e);
	Bi(e, n, r, t), Ki(e, s);
	const o = r ? fl(e, t) : void 0;
	return (Ot = !1, o);
}
function fl(e, t) {
	const n = e.type;
	e.accessCache = Object.create(null), e.proxy = _r(new Proxy(e.ctx, sl));
	const { setup: s } = n;
	if (s) {
		const r = e.setupContext = s.length > 1 ? al(e) : null;
		ut(e), dt();
		const o = Ke(s, e, 0, [e.props, r]);
		if (ht(), Qe(), tr(o)) {
			if (o.then(Qe, Qe), t) {
				return o
					.then(
						(i) => {
							$s(e, i, t);
						},
					)
					.catch(
						(i) => {
							tn(i, e, 0);
						},
					);
			}
			e.asyncDep = o;
		} else {
			$s(e, o, t);
		}
	} else {
		Gr(e, t);
	}
}
function $s(e, t, n) {
	N(t)
		? e.type.__ssrInlineRender
			? e.ssrRender = t
			: e.render = t
		: X(t) && (e.setupState = Er(t)), Gr(e, n);
}
let Bs;
function Gr(e, t, n) {
	const s = e.type;
	if (!e.render) {
		if (!t && Bs && !s.render) {
			const r = s.template;
			if (r) {
				const { isCustomElement: o, compilerOptions: i } = e.appContext.config,
					{ delimiters: l, compilerOptions: f } = s,
					a = ie(ie({ isCustomElement: o, delimiters: l }, i), f);
				s.render = Bs(r, a);
			}
		}
		e.render = s.render || Ce;
	}
	ut(e), dt(), Li(e), ht(), Qe();
}
function ul(e) {
	return new Proxy(
		e.attrs,
		{
			get(t, n) {
				return (pe(e, "get", "$attrs"), t[n]);
			},
		},
	);
}
function al(e) {
	const t = (s) => {
		e.exposed = s || {};
	};
	let n;
	return {
		get attrs() {
			return n || (n = ul(e));
		},
		slots: e.slots,
		emit: e.emit,
		expose: t,
	};
}
function cn(e) {
	if (e.exposed) {
		return e.exposeProxy || (
			e.exposeProxy =
				new Proxy(
					Er(_r(e.exposed)),
					{
						get(t, n) {
							if (n in t) {
								return t[n];
							}
							if (n in qt) {
								return qt[n](e);
							}
						},
					},
				)
		);
	}
}
function dl(e) {
	return (N(e) && e.displayName) || e.name;
}
function hl(e) {
	return N(e) && ("__vccOpts" in e);
}
const pl = (e, t) => oi(e, t, Ot);
function gl(e, t, n) {
	const s = arguments.length;
	return s === 2
		? X(t) && !P(t)
			? Wt(t)
				? ae(e, null, [t])
				: ae(e, t)
			: ae(e, null, t)
		: (
			s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 &&
				Wt(n) &&
				(n = [n]), ae(e, t, n)
		);
}
const ml = "3.2.33",
	_l = "http://www.w3.org/2000/svg",
	Je = typeof document < "u" ? document : null,
	Hs = Je && Je.createElement("template"),
	bl = {
		insert: (e, t, n) => {
			t.insertBefore(e, n || null);
		},
		remove: (e) => {
			const t = e.parentNode;
			t && t.removeChild(e);
		},
		createElement: (e, t, n, s) => {
			const r = t ? Je.createElementNS(_l, e) : Je.createElement(
				e,
				n ? { is: n } : void 0,
			);
			return (
				e === "select" &&
					s &&
					s.multiple != null &&
					r.setAttribute("multiple", s.multiple), r
			);
		},
		createText: (e) => Je.createTextNode(e),
		createComment: (e) => Je.createComment(e),
		setText: (e, t) => {
			e.nodeValue = t;
		},
		setElementText: (e, t) => {
			e.textContent = t;
		},
		parentNode: (e) => e.parentNode,
		nextSibling: (e) => e.nextSibling,
		querySelector: (e) => Je.querySelector(e),
		setScopeId(e, t) {
			e.setAttribute(t, "");
		},
		cloneNode(e) {
			const t = e.cloneNode(!0);
			return (("_value" in e) && (t._value = e._value), t);
		},
		insertStaticContent(e, t, n, s, r, o) {
			const i = n ? n.previousSibling : t.lastChild;
			if (r && (r === o || r.nextSibling)) {
				for (
					;
					t.insertBefore(r.cloneNode(!0), n), !(r === o || !(r = r.nextSibling));
				);
			} else {
				Hs.innerHTML = s ? `<svg>${e}</svg>` : e;
				const l = Hs.content;
				if (s) {
					const f = l.firstChild;
					for (; f.firstChild; ) l.appendChild(f.firstChild);
					l.removeChild(f);
				}
				t.insertBefore(l, n);
			}
			return [
				i ? i.nextSibling : t.firstChild,
				n ? n.previousSibling : t.lastChild,
			];
		},
	};
function yl(e, t, n) {
	const s = e._vtc;
	s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null
		? e.removeAttribute("class")
		: n
			? e.setAttribute("class", t)
			: e.className = t;
}
function xl(e, t, n) {
	const s = e.style, r = ee(n);
	if (n && !r) {
		for (const o in n) Dn(s, o, n[o]);
		if (t && !ee(t)) {
			for (const o in t) n[o] == null && Dn(s, o, "");
		}
	} else {
		const o = s.display;
		r ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"), (
			"_vod" in e
		) && (s.display = o);
	}
}
const js = /\s*!important$/;
function Dn(e, t, n) {
	if (P(n)) {
		n.forEach((s) => Dn(e, t, s));
	} else if (n == null && (n = ""), t.startsWith("--")) {
		e.setProperty(t, n);
	} else {
		const s = El(e, t);
		js.test(n) ? e.setProperty(at(s), n.replace(js, ""), "important") : e[s] = n;
	}
}
const Ks = ["Webkit", "Moz", "ms"], yn = {};
function El(e, t) {
	const n = yn[t];
	if (n) {
		return n;
	}
	let s = Oe(t);
	if (s !== "filter" && (s in e)) {
		return yn[t] = s;
	}
	s = Gt(s);
	for (let r = 0; r < Ks.length; r++) {
		const o = Ks[r] + s;
		if (o in e) {
			return yn[t] = o;
		}
	}
	return t;
}
const Us = "http://www.w3.org/1999/xlink";
function Cl(e, t, n, s, r) {
	if (s && t.startsWith("xlink:")) {
		n == null ? e.removeAttributeNS(Us, t.slice(6, t.length)) : e.setAttributeNS(
			Us,
			t,
			n,
		);
	} else {
		const o = uo(t);
		n == null || (o && !Gs(n)) ? e.removeAttribute(t) : e.setAttribute(
			t,
			o ? "" : n,
		);
	}
}
function vl(e, t, n, s, r, o, i) {
	if (t === "innerHTML" || t === "textContent") {
		s && i(s, r, o), e[t] = n ?? "";
		return;
	}
	if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
		e._value = n;
		const f = n ?? "";
		(e.value !== f || e.tagName === "OPTION") && (e.value = f), n == null && e.removeAttribute(
			t,
		);
		return;
	}
	let l = !1;
	if (n === "" || n == null) {
		const f = typeof e[t];
		f === "boolean"
			? n = Gs(n)
			: n == null && f === "string"
				? (n = "", l = !0)
				: f === "number" && (n = 0, l = !0);
	}
	try {
		e[t] = n;
	} catch {}
	l && e.removeAttribute(t);
}
const [eo, Tl] = (() => {
	let e = Date.now, t = !1;
	if (typeof window < "u") {
		Date.now() > document.createEvent("Event").timeStamp && (
			e = () => performance.now()
		);
		const n = navigator.userAgent.match(/firefox\/(\d+)/i);
		t = !!(n && Number(n[1]) <= 53);
	}
	return [e, t];
})();
let Sn = 0;
const wl = Promise.resolve(),
	Al = () => {
		Sn = 0;
	},
	Il = () => Sn || (wl.then(Al), Sn = eo());
function to(e, t, n, s) {
	e.addEventListener(t, n, s);
}
function Ol(e, t, n, s) {
	e.removeEventListener(t, n, s);
}
function Pl(e, t, n, s, r = null) {
	const o = e._vei || (e._vei = {}), i = o[t];
	if (s && i) {
		i.value = s;
	} else {
		const [l, f] = Fl(t);
		if (s) {
			const a = o[t] = Ml(s, r);
			to(e, l, a, f);
		} else {
			i && (Ol(e, l, i, f), o[t] = void 0);
		}
	}
}
const ks = /(?:Once|Passive|Capture)$/;
function Fl(e) {
	let t;
	if (ks.test(e)) {
		t = {};
		let n;
		for (; n = e.match(ks); ) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] =
			!0;
	}
	return [at(e.slice(2)), t];
}
function Ml(e, t) {
	const n = (s) => {
		const r = s.timeStamp || eo();
		(Tl || r >= (n.attached - 1)) && be(Nl(s, n.value), t, 5, [s]);
	};
	return (n.value = e, n.attached = Il(), n);
}
function Nl(e, t) {
	if (P(t)) {
		const n = e.stopImmediatePropagation;
		return (
			e.stopImmediatePropagation =
				() => {
					n.call(e), e._stopped = !0;
				}, t.map((s) => (r) => !r._stopped && s && s(r))
		);
	} else {
		return t;
	}
}
const Vs = /^on[a-z]/,
	Ll = (e, t, n, s, r = !1, o, i, l, f) => {
		t === "class"
			? yl(e, s, r)
			: t === "style"
				? xl(e, n, s)
				: Yt(t)
					? jn(t) || Pl(e, t, n, s, i)
					: (
						t[0] === "."
							? (t = t.slice(1), !0)
							: t[0] === "^"
								? (t = t.slice(1), !1)
								: Rl(e, t, s, r)
					)
						? vl(e, t, s, o, i, l, f)
						: (
							t === "true-value" ? e._trueValue = s : t === "false-value" && (
								e._falseValue = s
							), Cl(e, t, s, r)
						);
	};
function Rl(e, t, n, s) {
	return s
		? !!(
			t === "innerHTML" ||
				t === "textContent" ||
				((t in e) && Vs.test(t) && N(n))
		)
		: t === "spellcheck" ||
			t === "draggable" ||
			t === "translate" ||
			t === "form" ||
			(t === "list" && e.tagName === "INPUT") ||
			(t === "type" && e.tagName === "TEXTAREA") ||
			(Vs.test(t) && ee(n))
			? !1
			: t in e;
}
const Se = "transition",
	mt = "animation",
	no = (e, { slots: t }) => gl(Mr, Dl(e), t);
no.displayName = "Transition";
const so = {
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
};
no.props = ie({}, Mr.props, so);
const We = (e, t = []) => {
	P(e) ? e.forEach((n) => n(...t)) : e && e(...t);
},
	Ws = (e) =>
		e
			? P(e)
				? e.some((t) => t.length > 1)
				: e.length > 1
			: !1;
function Dl(e) {
	const t = {};
	for (const O in e) (O in so) || (t[O] = e[O]);
	if (e.css === !1) {
		return t;
	}
	const {
		name: n = "v",
		type: s,
		duration: r,
		enterFromClass: o = `${n}-enter-from`,
		enterActiveClass: i = `${n}-enter-active`,
		enterToClass: l = `${n}-enter-to`,
		appearFromClass: f = o,
		appearActiveClass: a = i,
		appearToClass: h = l,
		leaveFromClass: m = `${n}-leave-from`,
		leaveActiveClass: b = `${n}-leave-active`,
		leaveToClass: w = `${n}-leave-to`,
	} = e,
		M = Sl(r),
		R = M && M[0],
		L = M && M[1],
		{
			onBeforeEnter: S,
			onEnter: re,
			onEnterCancelled: J,
			onLeave: V,
			onLeaveCancelled: Q,
			onBeforeAppear: le = S,
			onAppear: D = re,
			onAppearCancelled: K = J,
		} = t,
		j = (O, G, ve) => {
			rt(O, G ? h : l), rt(O, G ? a : i), ve && ve();
		},
		te = (O, G) => {
			rt(O, w), rt(O, b), G && G();
		},
		Z = (O) => (G, ve) => {
			const et = O ? D : re, oe = () => j(G, O, ve);
			We(et, [G, oe]), qs(() => {
				rt(G, O ? f : o), $e(G, O ? h : l), Ws(et) || zs(G, s, R, oe);
			});
		};
	return ie(
		t,
		{
			onBeforeEnter(O) {
				We(S, [O]), $e(O, o), $e(O, i);
			},
			onBeforeAppear(O) {
				We(le, [O]), $e(O, f), $e(O, a);
			},
			onEnter: Z(!1),
			onAppear: Z(!0),
			onLeave(O, G) {
				const ve = () => te(O, G);
				$e(O, m), Hl(), $e(O, b), qs(() => {
					rt(O, m), $e(O, w), Ws(V) || zs(O, s, L, ve);
				}), We(V, [O, ve]);
			},
			onEnterCancelled(O) {
				j(O, !1), We(J, [O]);
			},
			onAppearCancelled(O) {
				j(O, !0), We(K, [O]);
			},
			onLeaveCancelled(O) {
				te(O), We(Q, [O]);
			},
		},
	);
}
function Sl(e) {
	if (e == null) {
		return null;
	}
	if (X(e)) {
		return [xn(e.enter), xn(e.leave)];
	}
	{
		const t = xn(e);
		return [t, t];
	}
}
function xn(e) {
	return Vn(e);
}
function $e(e, t) {
	t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (
		e._vtc || (e._vtc = new Set())
	).add(t);
}
function rt(e, t) {
	t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
	const { _vtc: n } = e;
	n && (n.delete(t), n.size || (e._vtc = void 0));
}
function qs(e) {
	requestAnimationFrame(() => {
		requestAnimationFrame(e);
	});
}
let $l = 0;
function zs(e, t, n, s) {
	const r = e._endId = ++$l,
		o = () => {
			r === e._endId && s();
		};
	if (n) {
		return setTimeout(o, n);
	}
	const { type: i, timeout: l, propCount: f } = Bl(e, t);
	if (!i) {
		return s();
	}
	const a = i + "end";
	let h = 0;
	const m = () => {
		e.removeEventListener(a, b), o();
	},
		b = (w) => {
			w.target === e && ++h >= f && m();
		};
	setTimeout(
		() => {
			h < f && m();
		},
		l + 1,
	), e.addEventListener(a, b);
}
function Bl(e, t) {
	const n = window.getComputedStyle(e),
		s = (M) => (n[M] || "").split(", "),
		r = s(Se + "Delay"),
		o = s(Se + "Duration"),
		i = Js(r, o),
		l = s(mt + "Delay"),
		f = s(mt + "Duration"),
		a = Js(l, f);
	let h = null, m = 0, b = 0;
	t === Se
		? i > 0 && (h = Se, m = i, b = o.length)
		: t === mt
			? a > 0 && (h = mt, m = a, b = f.length)
			: (
				m = Math.max(i, a), h =
					m > 0
						? i > a
							? Se
							: mt
						: null, b =
					h
						? h === Se
							? o.length
							: f.length
						: 0
			);
	const w = h === Se && /\b(transform|all)(,|$)/.test(n[Se + "Property"]);
	return { type: h, timeout: m, propCount: b, hasTransform: w };
}
function Js(e, t) {
	for (; e.length < t.length; ) e = e.concat(e);
	return Math.max(...t.map((n, s) => Ys(n) + Ys(e[s])));
}
function Ys(e) {
	return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Hl() {
	return document.body.offsetHeight;
}
const Xs = (e) => {
	const t = e.props["onUpdate:modelValue"];
	return P(t) ? (n) => $t(t, n) : t;
},
	dc = {
		deep: !0,
		created(e, { value: t, modifiers: { number: n } }, s) {
			const r = Xt(t);
			to(
				e,
				"change",
				() => {
					const o = Array.prototype.filter.call(e.options, (i) => i.selected).map(
						(i) => n ? Vn(zt(i)) : zt(i),
					);
					e._assign(
						e.multiple
							? r
								? new Set(o)
								: o
							: o[0],
					);
				},
			), e._assign = Xs(s);
		},
		mounted(e, { value: t }) {
			Zs(e, t);
		},
		beforeUpdate(e, t, n) {
			e._assign = Xs(n);
		},
		updated(e, { value: t }) {
			Zs(e, t);
		},
	};
function Zs(e, t) {
	const n = e.multiple;
	if (!(n && !P(t) && !Xt(t))) {
		for (let s = 0, r = e.options.length; s < r; s++) {
			const o = e.options[s], i = zt(o);
			if (n) {
				P(t) ? o.selected = mo(t, i) > -1 : o.selected = t.has(i);
			} else if (Jt(zt(o), t)) {
				e.selectedIndex !== s && (e.selectedIndex = s);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function zt(e) {
	return "_value" in e ? e._value : e.value;
}
const jl = ["ctrl", "shift", "alt", "meta"],
	Kl = {
		stop: (e) => e.stopPropagation(),
		prevent: (e) => e.preventDefault(),
		self: (e) => e.target !== e.currentTarget,
		ctrl: (e) => !e.ctrlKey,
		shift: (e) => !e.shiftKey,
		alt: (e) => !e.altKey,
		meta: (e) => !e.metaKey,
		left: (e) => ("button" in e) && e.button !== 0,
		middle: (e) => ("button" in e) && e.button !== 1,
		right: (e) => ("button" in e) && e.button !== 2,
		exact: (e, t) => jl.some((n) => e[`${n}Key`] && !t.includes(n)),
	},
	hc = (e, t) => (n, ...s) => {
		for (let r = 0; r < t.length; r++) {
			const o = Kl[t[r]];
			if (o && o(n, t)) {
				return;
			}
		}
		return e(n, ...s);
	},
	pc = {
		beforeMount(e, { value: t }, { transition: n }) {
			e._vod = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(
				e,
			) : _t(e, t);
		},
		mounted(e, { value: t }, { transition: n }) {
			n && t && n.enter(e);
		},
		updated(e, { value: t, oldValue: n }, { transition: s }) {
			!t != !n && (
				s
					? t
						? (s.beforeEnter(e), _t(e, !0), s.enter(e))
						: s.leave(
							e,
							() => {
								_t(e, !1);
							},
						)
					: _t(e, t)
			);
		},
		beforeUnmount(e, { value: t }) {
			_t(e, t);
		},
	};
function _t(e, t) {
	e.style.display = t ? e._vod : "none";
}
const Ul = ie({ patchProp: Ll }, bl);
let Qs;
function kl() {
	return Qs || (Qs = Wi(Ul));
}
const Vl = (...e) => {
	const t = kl().createApp(...e), { mount: n } = t;
	return (
		t.mount =
			(s) => {
				const r = Wl(s);
				if (!r) {
					return;
				}
				const o = t._component;
				!N(o) && !o.render && !o.template && (o.template = r.innerHTML), r.innerHTML =
					"";
				const i = n(r, !1, r instanceof SVGElement);
				return (
					(r instanceof Element) && (
						r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")
					), i
				);
			}, t
	);
};
function Wl(e) {
	return ee(e) ? document.querySelector(e) : e;
}
function ql(e) {
	switch (e) {
		case "./page/app.vue":
			return me(
				() => import("./i.js"),
				["i.js", ".css", "$.css", "4.js", "0.js", "t.js", "7.css", "$$.js"],
			);
		case "./page/area.vue":
			return me(
				() => import("./$-.js"),
				["$-.js", "..css", "$.css", "4.js", "0.js", "t.js", "7.css", "$$.js"],
			);
		case "./page/camera.vue":
			return me(
				() => import("./_.js"),
				[
					"_.js", "0.css", "s.js", "8.js", "0.js", "..js", "l.js", "1.js",
					"4.js", "c.js",
				],
			);
		case "./page/confirm_cancel.vue":
			return me(
				() => import("./2.js"),
				["2.js", "g.js", "b.css", "4.js", "t.js", "7.css"],
			);
		case "./page/confirm_reset.vue":
			return me(
				() => import("./b.js"),
				["b.js", "g.js", "b.css", "4.js", "t.js", "7.css"],
			);
		case "./page/count_down.vue":
			return me(
				() => import("./u.js"),
				["u.js", "2.css", "4.js", "..js", "0.js", "9.js"],
			);
		case "./page/draw.vue":
			return me(
				() => import("./o.js"),
				["o.js", "8.css", "4.js", "0.js", "7.js", "8.js", "..js", "l.js"],
			);
		case "./page/main.vue":
			return me(
				() => import("./v.js"),
				["v.js", "5.css", "3.css", "k.js", "4.js", "6.js", "a.css"],
			);
		case "./page/recbar.vue":
			return me(
				() => import("./.js"),
				[
					".js", "-.css", "3.css", "4.js", "..js", "0.js", "c.js", "s.js",
					"8.js", "l.js", "7.js", "j.js", "1.css",
				],
			);
		case "./page/update.vue":
			return me(
				() => import("./5.js"),
				[
					"5.js", "4.css", "3.css", "6.js", "a.css", "4.js", "0.js", "..js",
					"l.js",
				],
			);
		case "./page/win_area.vue":
			return me(
				() => import("./d.js"),
				["d.js", "6.css", "$.css", "4.js", "0.js", "t.js", "7.css", "9.js"],
			);
		default:
			return new Promise(
				function (t, n) {
					(typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(
						n.bind(null, new Error("Unknown variable dynamic import: " + e)),
					);
				},
			);
	}
}
var zl = {
	setup: () => {
		var e;
		return (
			e = Qo(), (async () => {
				var t;
				({ hash: t } = location), e.value =
					(await ql(`./page/${t.slice(1).split("/", 1)[0]}.vue`)).default, vr(
					E.xing,
				);
			})(), { c: e }
		);
	},
};
function Jl(e, t) {
	return (is(), ls(Zi(e.c)));
}
var Yl = (e, t) => {
	const n = e.__vccOpts || e;
	for (const [s, r] of t) n[s] = r;
	return n;
},
	Xl = Yl(zl, [["render", Jl]]),
	fs,
	us,
	fn;
(async () => {
	var e;
	return (
		e = await me(() => import("./n.js"), []), e.init({
			app: fs,
			logErrors: !0,
			dsn: "https://87194e6db51949b3943a6879e8f190cd@sentry.dalukuankuan.com/5",
		})
	);
})();
fn = document;
us = fn.createElement("p");
fn.oncontextmenu =
	(e) => {
		e.preventDefault();
	};
fn.body.appendChild(us);
fs = Vl(Xl);
fs.mount(us);
export {
	si as A,
	Gl as B,
	cc as C,
	yi as D,
	Oi as E,
	_e as F,
	Sr as G,
	mn as H,
	Wt as I,
	nl as J,
	no as K,
	rc as L,
	pc as M,
	vr as N,
	uc as O,
	Zi as P,
	fc as Q,
	$r as R,
	dc as S,
	oc as T,
	Yl as _,
	lc as a,
	ic as b,
	ls as c,
	is as d,
	Xr as e,
	ae as f,
	hc as g,
	tl as h,
	tc as i,
	ac as j,
	nc as k,
	me as l,
	Hn as m,
	Bn as n,
	Dr as o,
	ec as p,
	Xn as q,
	Ql as r,
	Qo as s,
	Zl as t,
	gn as u,
	pl as v,
	di as w,
	ll as x,
	Ge as y,
	sc as z,
};
