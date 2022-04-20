import {
	s
	as
	G,
	b
	as
	g,
	u
	as
	Me,
	v
	as
	R,
	x
	as
	m,
	y
	as
	Ae,
	z
	as
	Qt,
	g
	as
	p,
	A
	as
	S,
	a
	as
	d,
	c
	as
	v,
	m
	as
	y,
	n
	as
	K,
	f
	as
	C,
	B
	as
	et,
	C
	as
	Z,
	e
	as
	k,
	d
	as
	N,
	r
	as
	b,
	D
	as
	I,
	o
	as
	A,
	E
	as
	Le,
	G
	as
	re,
	k
	as
	en,
	H
	as
	ke,
	I
	as
	vt,
	J
	as
	tn,
	T
	as
	nn,
	K
	as
	mt,
	L
	as
	on,
	M
	as
	rn,
	N
	as
	sn,
	F
	as
	j,
	O
	as
	ln,
	i
	as
	X,
	t
	as
	bt,
	w,
	P
	as
	yt,
	p
	as
	_t,
	j
	as
	gt,
	_
	as
	Et,
	l
	as
	un,
	Q
	as
	an,
} from "./g.js"; /* empty css        */
import { H as Te } from "./$.js";
import { i as M } from "./4.js";
import { x as cn } from "./..js";
var dn = "/o.svg",
	fn = {
		setup: () => ({
			ico: G(localStorage.ico || dn),
			auto_update: () => {
				M.auto_update.show();
			},
			set: () => {
				M.open(Te + "user_setting.html?user_token=" + localStorage.uid);
			},
			home: () => {
				M.open(Te + "video_library.html?user_token=" + localStorage.uid);
			},
			logout: () => {
				M.camera.x(), delete localStorage.uid, delete localStorage.record, M.close(
					"show",
				), location.reload();
			},
		}),
	};
const ze = Object.prototype.toString;
function wt(e) {
	return ze.call(e) === "[object Array]";
}
function Ne(e) {
	return ze.call(e) === "[object String]";
}
function ue(e) {
	return ze.call(e) === "[object Number]" && e === e;
}
function Ct(e) {
	return typeof e == "function";
}
const Ie = Symbol("ArcoConfigProvider"),
	me = {
		formatYear: "YYYY \u5E74",
		formatMonth: "YYYY \u5E74 MM \u6708",
		today: "\u4ECA\u5929",
		view: { month: "\u6708", year: "\u5E74", week: "\u5468", day: "\u65E5" },
		month: {
			long: {
				January: "\u4E00\u6708",
				February: "\u4E8C\u6708",
				March: "\u4E09\u6708",
				April: "\u56DB\u6708",
				May: "\u4E94\u6708",
				June: "\u516D\u6708",
				July: "\u4E03\u6708",
				August: "\u516B\u6708",
				September: "\u4E5D\u6708",
				October: "\u5341\u6708",
				November: "\u5341\u4E00\u6708",
				December: "\u5341\u4E8C\u6708",
			},
			short: {
				January: "\u4E00\u6708",
				February: "\u4E8C\u6708",
				March: "\u4E09\u6708",
				April: "\u56DB\u6708",
				May: "\u4E94\u6708",
				June: "\u516D\u6708",
				July: "\u4E03\u6708",
				August: "\u516B\u6708",
				September: "\u4E5D\u6708",
				October: "\u5341\u6708",
				November: "\u5341\u4E00\u6708",
				December: "\u5341\u4E8C\u6708",
			},
		},
		week: {
			long: {
				self: "\u5468",
				monday: "\u5468\u4E00",
				tuesday: "\u5468\u4E8C",
				wednesday: "\u5468\u4E09",
				thursday: "\u5468\u56DB",
				friday: "\u5468\u4E94",
				saturday: "\u5468\u516D",
				sunday: "\u5468\u65E5",
			},
			short: {
				self: "\u5468",
				monday: "\u4E00",
				tuesday: "\u4E8C",
				wednesday: "\u4E09",
				thursday: "\u56DB",
				friday: "\u4E94",
				saturday: "\u516D",
				sunday: "\u65E5",
			},
		},
	},
	pn = {
		locale: "zh-CN",
		empty: { description: "\u6682\u65E0\u6570\u636E" },
		drawer: { okText: "\u786E\u5B9A", cancelText: "\u53D6\u6D88" },
		popconfirm: { okText: "\u786E\u5B9A", cancelText: "\u53D6\u6D88" },
		modal: { okText: "\u786E\u5B9A", cancelText: "\u53D6\u6D88" },
		pagination: {
			goto: "\u524D\u5F80",
			page: "\u9875",
			countPerPage: "\u6761/\u9875",
			total: "\u5171 {0} \u6761",
		},
		table: { okText: "\u786E\u5B9A", resetText: "\u91CD\u7F6E" },
		upload: {
			start: "\u5F00\u59CB",
			cancel: "\u53D6\u6D88",
			delete: "\u5220\u9664",
			retry: "\u70B9\u51FB\u91CD\u8BD5",
			buttonText: "\u70B9\u51FB\u4E0A\u4F20",
			preview: "\u9884\u89C8",
			drag: "\u70B9\u51FB\u6216\u62D6\u62FD\u6587\u4EF6\u5230\u6B64\u5904\u4E0A\u4F20",
			dragHover: "\u91CA\u653E\u6587\u4EF6\u5E76\u5F00\u59CB\u4E0A\u4F20",
			error: "\u4E0A\u4F20\u5931\u8D25",
		},
		datePicker: {
			view: me.view,
			month: me.month,
			week: me.week,
			placeholder: {
				date: "\u8BF7\u9009\u62E9\u65E5\u671F",
				week: "\u8BF7\u9009\u62E9\u5468",
				month: "\u8BF7\u9009\u62E9\u6708\u4EFD",
				year: "\u8BF7\u9009\u62E9\u5E74\u4EFD",
				quarter: "\u8BF7\u9009\u62E9\u5B63\u5EA6",
				time: "\u8BF7\u9009\u62E9\u65F6\u95F4",
			},
			rangePlaceholder: {
				date: ["\u5F00\u59CB\u65E5\u671F", "\u7ED3\u675F\u65E5\u671F"],
				week: ["\u5F00\u59CB\u5468", "\u7ED3\u675F\u5468"],
				month: ["\u5F00\u59CB\u6708\u4EFD", "\u7ED3\u675F\u6708\u4EFD"],
				year: ["\u5F00\u59CB\u5E74\u4EFD", "\u7ED3\u675F\u5E74\u4EFD"],
				quarter: ["\u5F00\u59CB\u5B63\u5EA6", "\u7ED3\u675F\u5B63\u5EA6"],
				time: ["\u5F00\u59CB\u65F6\u95F4", "\u7ED3\u675F\u65F6\u95F4"],
			},
			selectTime: "\u9009\u62E9\u65F6\u95F4",
			today: "\u4ECA\u5929",
			now: "\u6B64\u523B",
			ok: "\u786E\u5B9A",
		},
		image: { loading: "\u52A0\u8F7D\u4E2D" },
		imagePreview: {
			fullScreen: "\u5168\u5C4F",
			rotateRight: "\u5411\u53F3\u65CB\u8F6C",
			rotateLeft: "\u5411\u5DE6\u65CB\u8F6C",
			zoomIn: "\u653E\u5927",
			zoomOut: "\u7F29\u5C0F",
			originalSize: "\u539F\u59CB\u5C3A\u5BF8",
		},
		typography: {
			copied: "\u5DF2\u590D\u5236",
			copy: "\u590D\u5236",
			expand: "\u5C55\u5F00",
			collapse: "\u6298\u53E0",
			edit: "\u7F16\u8F91",
		},
	},
	hn = g("zh-CN"),
	vn = Me({ "zh-CN": pn }),
	mn = () => {
		const e = R(Ie, void 0),
			t = m(() => {
				var r;
				return (r = e?.locale) != null ? r : vn[hn.value];
			});
		return {
			locale: m(() => t.value.locale),
			t: (r, ...s) => {
				const i = r.split(".");
				let l = t.value;
				for (const u of i) {
					if (!l[u]) {
						return r;
					}
					l = l[u];
				}
				return Ne(l) && s.length > 0 ? l.replace(
					/{(\d+)}/g,
					(u, a) => {
						var f;
						return (f = s[a]) != null ? f : u;
					},
				) : l;
			},
		};
	};
var bn = Object.defineProperty,
	yn = Object.defineProperties,
	_n = Object.getOwnPropertyDescriptors,
	tt = Object.getOwnPropertySymbols,
	gn = Object.prototype.hasOwnProperty,
	En = Object.prototype.propertyIsEnumerable,
	nt = (e, t, n) =>
		t in e ? bn(
			e,
			t,
			{ enumerable: !0, configurable: !0, writable: !0, value: n },
		) : e[t] = n,
	wn = (e, t) => {
		for (var n in t || (t = {})) gn.call(t, n) && nt(e, n, t[n]);
		if (tt) {
			for (var n of tt(t)) En.call(t, n) && nt(e, n, t[n]);
		}
		return e;
	},
	Cn = (e, t) => yn(e, _n(t));
const $n = "A",
	On = "arco",
	Pe = "$arco",
	ae = (e) => {
		var t;
		return (t = e?.componentPrefix) != null ? t : $n;
	},
	ce = (e, t) => {
		var n;
		t &&
			t.classPrefix &&
			(
				e.config.globalProperties[Pe] =
					Cn(
						wn({}, (n = e.config.globalProperties[Pe]) != null ? n : {}),
						{ classPrefix: t.classPrefix },
					)
			);
	},
	T = (e) => {
		var t, n, o;
		const r = Ae(),
			s = R(Ie, void 0),
			i = (
				o =
					(n = s?.prefixCls) != null
						? n
						: (t = r?.appContext.config.globalProperties[Pe]) == null
							? void 0
							: t.classPrefix
			) != null ? o : On;
		return e ? `${i}-${e}` : i;
	};
var $t = function () {
	if (typeof Map < "u") {
		return Map;
	}
	function e(t, n) {
		var o = -1;
		return (
			t.some(
				function (r, s) {
					return r[0] === n ? (o = s, !0) : !1;
				},
			), o
		);
	}
	return function () {
		function t() {
			this.__entries__ = [];
		}
		return (
			Object.defineProperty(
				t.prototype,
				"size",
				{
					get: function () {
						return this.__entries__.length;
					},
					enumerable: !0,
					configurable: !0,
				},
			), t.prototype.get =
				function (n) {
					var o = e(this.__entries__, n), r = this.__entries__[o];
					return r && r[1];
				}, t.prototype.set =
				function (n, o) {
					var r = e(this.__entries__, n);
					~r ? this.__entries__[r][1] = o : this.__entries__.push([n, o]);
				}, t.prototype.delete =
				function (n) {
					var o = this.__entries__, r = e(o, n);
					~r && o.splice(r, 1);
				}, t.prototype.has =
				function (n) {
					return !!~e(this.__entries__, n);
				}, t.prototype.clear =
				function () {
					this.__entries__.splice(0);
				}, t.prototype.forEach =
				function (n, o) {
					o === void 0 && (o = null);
					for (var r = 0, s = this.__entries__; r < s.length; r++) {
						var i = s[r];
						n.call(o, i[1], i[0]);
					}
				}, t
		);
	}();
}(),
	Be =
		typeof window < "u" && typeof document < "u" && window.document === document,
	ie = function () {
		return typeof global < "u" && global.Math === Math
			? global
			: typeof self < "u" && self.Math === Math
				? self
				: typeof window < "u" && window.Math === Math
					? window
					: Function("return this")();
	}(),
	Sn = function () {
		return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(
			ie,
		) : function (e) {
			return setTimeout(
				function () {
					return e(Date.now());
				},
				1e3 / 60,
			);
		};
	}(),
	kn = 2;
function Tn(e, t) {
	var n = !1, o = !1, r = 0;
	function s() {
		n && (n = !1, e()), o && l();
	}
	function i() {
		Sn(s);
	}
	function l() {
		var u = Date.now();
		if (n) {
			if ((u - r) < kn) {
				return;
			}
			o = !0;
		} else {
			n = !0, o = !1, setTimeout(i, t);
		}
		r = u;
	}
	return l;
}
var Pn = 20,
	Bn = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
	Dn = typeof MutationObserver < "u",
	Mn = function () {
		function e() {
			this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ =
				null, this.observers_ = [], this.onTransitionEnd_ =
				this.onTransitionEnd_.bind(this), this.refresh =
				Tn(this.refresh.bind(this), Pn);
		}
		return (
			e.prototype.addObserver =
				function (t) {
					~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
				}, e.prototype.removeObserver =
				function (t) {
					var n = this.observers_, o = n.indexOf(t);
					~o && n.splice(o, 1), !n.length &&
						this.connected_ &&
						this.disconnect_();
				}, e.prototype.refresh =
				function () {
					var t = this.updateObservers_();
					t && this.refresh();
				}, e.prototype.updateObservers_ =
				function () {
					var t = this.observers_.filter(function (n) {
						return (n.gatherActive(), n.hasActive());
					});
					return (
						t.forEach(function (n) {
							return n.broadcastActive();
						}), t.length > 0
					);
				}, e.prototype.connect_ =
				function () {
					!Be ||
						this.connected_ ||
						(
							document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener(
								"resize",
								this.refresh,
							), Dn ? (
								this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(
									document,
									{
										attributes: !0,
										childList: !0,
										characterData: !0,
										subtree: !0,
									},
								)
							) : (
								document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ =
									!0
							), this.connected_ = !0
						);
				}, e.prototype.disconnect_ =
				function () {
					!Be ||
						!this.connected_ ||
						(
							document.removeEventListener(
								"transitionend",
								this.onTransitionEnd_,
							), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener(
								"DOMSubtreeModified",
								this.refresh,
							), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ =
								!1
						);
				}, e.prototype.onTransitionEnd_ =
				function (t) {
					var n = t.propertyName,
						o = n === void 0 ? "" : n,
						r = Bn.some(function (s) {
							return !!~o.indexOf(s);
						});
					r && this.refresh();
				}, e.getInstance =
				function () {
					return (this.instance_ || (this.instance_ = new e()), this.instance_);
				}, e.instance_ = null, e
		);
	}(),
	Ot = function (e, t) {
		for (var n = 0, o = Object.keys(t); n < o.length; n++) {
			var r = o[n];
			Object.defineProperty(
				e,
				r,
				{ value: t[r], enumerable: !1, writable: !1, configurable: !0 },
			);
		}
		return e;
	},
	H = function (e) {
		var t = e && e.ownerDocument && e.ownerDocument.defaultView;
		return t || ie;
	},
	St = de(0, 0, 0, 0);
function se(e) {
	return parseFloat(e) || 0;
}
function ot(e) {
	for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
	return t.reduce(
		function (o, r) {
			var s = e["border-" + r + "-width"];
			return o + se(s);
		},
		0,
	);
}
function An(e) {
	for (
		var t = ["top", "right", "bottom", "left"], n = {}, o = 0, r = t;
		o < r.length;
		o++
	) {
		var s = r[o], i = e["padding-" + s];
		n[s] = se(i);
	}
	return n;
}
function Ln(e) {
	var t = e.getBBox();
	return de(0, 0, t.width, t.height);
}
function zn(e) {
	var t = e.clientWidth, n = e.clientHeight;
	if (!t && !n) {
		return St;
	}
	var o = H(e).getComputedStyle(e),
		r = An(o),
		s = r.left + r.right,
		i = r.top + r.bottom,
		l = se(o.width),
		u = se(o.height);
	if (
		o.boxSizing === "border-box" && (
			Math.round(l + s) !== t && (l -= ot(o, "left", "right") + s), Math.round(
				u + i,
			) !== n && (u -= ot(o, "top", "bottom") + i)
		), !In(e)
	) {
		var a = Math.round(l + s) - t, f = Math.round(u + i) - n;
		Math.abs(a) !== 1 && (l -= a), Math.abs(f) !== 1 && (u -= f);
	}
	return de(r.left, r.top, l, u);
}
var Nn = function () {
	return typeof SVGGraphicsElement < "u" ? function (e) {
		return e instanceof H(e).SVGGraphicsElement;
	} : function (e) {
		return (e instanceof H(e).SVGElement) && typeof e.getBBox == "function";
	};
}();
function In(e) {
	return e === H(e).document.documentElement;
}
function Vn(e) {
	return Be
		? Nn(e)
			? Ln(e)
			: zn(e)
		: St;
}
function Fn(e) {
	var t = e.x,
		n = e.y,
		o = e.width,
		r = e.height,
		s = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object,
		i = Object.create(s.prototype);
	return (
		Ot(
			i,
			{
				x: t,
				y: n,
				width: o,
				height: r,
				top: n,
				right: t + o,
				bottom: r + n,
				left: t,
			},
		), i
	);
}
function de(e, t, n, o) {
	return { x: e, y: t, width: n, height: o };
}
var jn = function () {
	function e(t) {
		this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ =
			de(0, 0, 0, 0), this.target = t;
	}
	return (
		e.prototype.isActive =
			function () {
				var t = Vn(this.target);
				return (
					this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
				);
			}, e.prototype.broadcastRect =
			function () {
				var t = this.contentRect_;
				return (
					this.broadcastWidth = t.width, this.broadcastHeight = t.height, t
				);
			}, e
	);
}(),
	Hn = function () {
		function e(t, n) {
			var o = Fn(n);
			Ot(this, { target: t, contentRect: o });
		}
		return e;
	}(),
	xn = function () {
		function e(t, n, o) {
			if (
				this.activeObservations_ = [], this.observations_ = new $t(), typeof t != "function"
			) {
				throw new TypeError(
					"The callback provided as parameter 1 is not a function.",
				);
			}
			this.callback_ = t, this.controller_ = n, this.callbackCtx_ = o;
		}
		return (
			e.prototype.observe =
				function (t) {
					if (!arguments.length) {
						throw new TypeError("1 argument required, but only 0 present.");
					}
					if (!(typeof Element > "u" || !(Element instanceof Object))) {
						if (!(t instanceof H(t).Element)) {
							throw new TypeError('parameter 1 is not of type "Element".');
						}
						var n = this.observations_;
						n.has(t) || (
							n.set(t, new jn(t)), this.controller_.addObserver(this), this.controller_.refresh()
						);
					}
				}, e.prototype.unobserve =
				function (t) {
					if (!arguments.length) {
						throw new TypeError("1 argument required, but only 0 present.");
					}
					if (!(typeof Element > "u" || !(Element instanceof Object))) {
						if (!(t instanceof H(t).Element)) {
							throw new TypeError('parameter 1 is not of type "Element".');
						}
						var n = this.observations_;
						!n.has(t) || (
							n.delete(t), n.size || this.controller_.removeObserver(this)
						);
					}
				}, e.prototype.disconnect =
				function () {
					this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(
						this,
					);
				}, e.prototype.gatherActive =
				function () {
					var t = this;
					this.clearActive(), this.observations_.forEach(function (n) {
						n.isActive() && t.activeObservations_.push(n);
					});
				}, e.prototype.broadcastActive =
				function () {
					if (!!this.hasActive()) {
						var t = this.callbackCtx_,
							n = this.activeObservations_.map(function (o) {
								return new Hn(o.target, o.broadcastRect());
							});
						this.callback_.call(t, n, t), this.clearActive();
					}
				}, e.prototype.clearActive =
				function () {
					this.activeObservations_.splice(0);
				}, e.prototype.hasActive =
				function () {
					return this.activeObservations_.length > 0;
				}, e
		);
	}(),
	kt = typeof WeakMap < "u" ? new WeakMap() : new $t(),
	Tt = function () {
		function e(t) {
			if (!(this instanceof e)) {
				throw new TypeError("Cannot call a class as a function.");
			}
			if (!arguments.length) {
				throw new TypeError("1 argument required, but only 0 present.");
			}
			var n = Mn.getInstance(), o = new xn(t, n, this);
			kt.set(this, o);
		}
		return e;
	}();
["observe", "unobserve", "disconnect"].forEach(function (e) {
	Tt.prototype[e] =
		function () {
			var t;
			return (t = kt.get(this))[e].apply(t, arguments);
		};
});
var Pt = function () {
	return typeof ie.ResizeObserver < "u" ? ie.ResizeObserver : Tt;
}(),
	rt;
(function (e) {
	e[e.ELEMENT = 1] = "ELEMENT", e[e.FUNCTIONAL_COMPONENT = 2] =
		"FUNCTIONAL_COMPONENT", e[e.STATEFUL_COMPONENT = 4] = "STATEFUL_COMPONENT", e[e.COMPONENT =
		6] = "COMPONENT", e[e.TEXT_CHILDREN = 8] = "TEXT_CHILDREN", e[e.ARRAY_CHILDREN =
		16] = "ARRAY_CHILDREN", e[e.SLOTS_CHILDREN = 32] = "SLOTS_CHILDREN", e[e.TELEPORT =
		64] = "TELEPORT", e[e.SUSPENSE = 128] = "SUSPENSE", e[e.COMPONENT_SHOULD_KEEP_ALIVE =
		256] = "COMPONENT_SHOULD_KEEP_ALIVE", e[e.COMPONENT_KEPT_ALIVE = 512] =
		"COMPONENT_KEPT_ALIVE";
})(rt || (rt = {}));
var it;
(function (e) {
	e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS =
		8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] =
		"HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT =
		128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH =
		512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.DEV_ROOT_FRAGMENT =
		2048] = "DEV_ROOT_FRAGMENT", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] =
		"BAIL";
})(it || (it = {}));
const Rn = (e) => e?.$ !== void 0,
	Bt = (e) => Boolean(e && e.shapeFlag & 1),
	Dt = (e, t) => Boolean(e && e.shapeFlag & 6),
	Mt = (e, t) => Boolean(e && e.shapeFlag & 16),
	Wn = (e, t) => Boolean(e && e.shapeFlag & 32),
	Gn = (e) => {
		if (!e) {
			return !0;
		}
		for (const t of e) if (t.children) {
			return !1;
		}
		return !0;
	},
	De = (e, t) => {
		var n, o, r;
		for (let s = 0; s < e.length; s++) {
			const i = e[s];
			if (Bt(i) || Dt(i)) {
				const l = Ct(t) ? t(i) : t;
				return (e[s] = Qt(i, l, !0), !0);
			}
			if (Mt(i, i.children)) {
				if (De(i.children, t)) {
					return !0;
				}
			} else if (Wn(i, i.children)) {
				const l = (
					r = (o = (n = i.children).default) == null ? void 0 : o.call(n)
				) != null ? r : [];
				if (De(l, t)) {
					return (e[s] = p(i, null, { default: () => l }), !0);
				}
			}
		}
		return !1;
	},
	le = (e) => {
		var t;
		if (wt(e)) {
			for (const n of e) {
				const o = le(n);
				if (o) {
					return o;
				}
			}
		} else {
			if ((Bt(e) || Dt(e)) && ((t = e.el) == null ? void 0 : t.nodeType) === 1) {
				return e.el;
			}
			if (Mt(e, e.children)) {
				for (const n of e.children) {
					const o = le(n);
					if (o) {
						return o;
					}
				}
			}
		}
		return null;
	},
	At = typeof window > "u" ? global : window,
	Yn = At.requestAnimationFrame,
	st = At.cancelAnimationFrame;
function qn(e) {
	let t = 0;
	const n = (...o) => {
		t && st(t), t =
			Yn(() => {
				e(...o), t = 0;
			});
	};
	return (
		n.cancel =
			() => {
				st(t), t = 0;
			}, n
	);
}
const Ve = () => {},
	Fe = (() => {
		try {
			return !(typeof window < "u" && document !== void 0);
		} catch {
			return !0;
		}
	})(),
	Un = (
		() =>
			Fe ? Ve : (e, t, n, o = !1) => {
				e.addEventListener(t, n, o);
			}
	)(),
	Kn = (
		() =>
			Fe ? Ve : (e, t, n, o = !1) => {
				e.removeEventListener(t, n, o);
			}
	)(),
	Zn = (e, t) => {
		var n;
		return Fe
			? Ve()
			: (n = (t ?? document).querySelector(e)) != null
				? n
				: void 0;
	},
	lt = (e, t) => {
		if (Ne(e)) {
			const n = e[0] === "#" ? `[id='${e.slice(1)}']` : e;
			return Zn(n, t);
		}
		return e;
	};
var P = (e, t) => {
	for (const [n, o] of t) e[n] = o;
	return e;
};
const Xn = ["square", "round", "circle"],
	Jn = ["hover", "click", "focus", "contextMenu"],
	Qn = S({
		name: "IconLoading",
		props: {
			size: { type: [Number, String] },
			strokeWidth: { type: Number, default: 4 },
			strokeLinecap: {
				type: String,
				default: "butt",
				validator: (e) => ["butt", "round", "square"].includes(e),
			},
			strokeLinejoin: {
				type: String,
				default: "miter",
				validator: (e) =>
					["arcs", "bevel", "miter", "miter-clip", "round"].includes(e),
			},
			spin: Boolean,
		},
		setup(e) {
			const t = T("icon"),
				n = m(() => [t, `${t}-loading`, { [`${t}-spin`]: e.spin }]),
				o = m(() => {
					if (e.size) {
						return { fontSize: ue(e.size) ? `${e.size}px` : e.size };
					}
				});
			return { cls: n, sizeStyle: o };
		},
	}),
	eo = ["stroke-width", "stroke-linecap", "stroke-linejoin"],
	to = C(
		"path",
		{ d: "M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6" },
		null,
		-1,
	),
	no = [to];
function oo(e, t, n, o, r, s) {
	return (
		d(), v(
			"svg",
			{
				viewBox: "0 0 48 48",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				stroke: "currentColor",
				class: y(e.cls),
				style: K(e.sizeStyle),
				"stroke-width": e.strokeWidth,
				"stroke-linecap": e.strokeLinecap,
				"stroke-linejoin": e.strokeLinejoin,
			},
			no,
			14,
			eo,
		)
	);
}
var be = P(Qn, [["render", oo]]);
const ro = Object.assign(
	be,
	{
		install: (e, t) => {
			var n;
			const o = (n = t?.iconPrefix) != null ? n : "";
			e.component(o + be.name, be);
		},
	},
),
	io = Symbol("ArcoFormItemContext"),
	so = ({ size: e, disabled: t, error: n, uninject: o } = {}) => {
		const r = o ? {} : R(io, {}),
			s = m(() => {
				var f;
				return (f = e?.value) != null ? f : r.size;
			}),
			i = m(() => t?.value || r.disabled),
			l = m(() => n?.value || r.error),
			u = et(r, "feedback"),
			a = et(r, "eventHandlers");
		return {
			formItemCtx: r,
			mergedSize: s,
			mergedDisabled: i,
			mergedError: l,
			feedback: u,
			eventHandlers: a,
		};
	},
	lo = (e, { defaultValue: t = "medium" } = {}) => {
		const n = R(Ie, void 0);
		return {
			mergedSize: m(() => {
				var r, s;
				return (s = (r = e?.value) != null ? r : n?.size) != null ? s : t;
			}),
		};
	},
	uo = ["primary", "secondary", "outline", "dashed", "text"],
	ao = S({
		name: "Button",
		components: { IconLoading: ro },
		props: {
			type: {
				type: String,
				default: "secondary",
				validator: (e) => uo.includes(e),
			},
			shape: {
				type: String,
				default: "square",
				validator: (e) => Xn.includes(e),
			},
			status: { type: String, default: "normal" },
			size: { type: String },
			long: { type: Boolean, default: !1 },
			loading: { type: Boolean, default: !1 },
			disabled: { type: Boolean, default: !1 },
			htmlType: { type: String, default: "button" },
			href: String,
			onClick: { type: [Function, Array] },
		},
		emits: ["click"],
		setup(e, { emit: t }) {
			const { size: n, disabled: o } = Z(e),
				r = T("btn"),
				{ mergedSize: s, mergedDisabled: i } = so({ size: n, disabled: o }),
				{ mergedSize: l } = lo(s),
				u = m(
					() => [
						r,
						`${r}-${e.type}`,
						`${r}-shape-${e.shape}`,
						`${r}-size-${l.value}`,
						`${r}-status-${e.status}`,
						{
							[`${r}-long`]: e.long,
							[`${r}-loading`]: e.loading,
							[`${r}-disabled`]: i.value,
							[`${r}-link`]: Ne(e.href),
						},
					],
				);
			return {
				prefixCls: r,
				cls: u,
				mergedDisabled: i,
				handleClick: (f) => {
					e.disabled || e.loading || t("click", f);
				},
			};
		},
	}),
	co = ["href"],
	fo = ["type", "disabled"];
function po(e, t, n, o, r, s) {
	const i = k("icon-loading");
	return e.href ? (
		d(), v(
			"a",
			{
				key: 0,
				class: y([
					e.cls,
					{ [`${e.prefixCls}-only-icon`]: e.$slots.icon && !e.$slots.default },
				]),
				href: e.mergedDisabled || e.loading ? void 0 : e.href,
				onClick: t[0] || (t[0] = (...l) => e.handleClick && e.handleClick(...l)),
			},
			[
				e.loading || e.$slots.icon ? (
					d(), v(
						"span",
						{ key: 0, class: y(`${e.prefixCls}-icon`) },
						[
							e.loading ? (d(), N(i, { key: 0, spin: "true" })) : b(
								e.$slots,
								"icon",
								{ key: 1 },
							),
						],
						2,
					)
				) : I("v-if", !0),
				b(e.$slots, "default"),
			],
			10,
			co,
		)
	) : (
		d(), v(
			"button",
			{
				key: 1,
				class: y([
					e.cls,
					{ [`${e.prefixCls}-only-icon`]: e.$slots.icon && !e.$slots.default },
				]),
				type: e.htmlType,
				disabled: e.mergedDisabled,
				onClick: t[1] || (t[1] = (...l) => e.handleClick && e.handleClick(...l)),
			},
			[
				e.loading || e.$slots.icon ? (
					d(), v(
						"span",
						{ key: 0, class: y(`${e.prefixCls}-icon`) },
						[
							e.loading ? (d(), N(i, { key: 0, spin: !0 })) : b(
								e.$slots,
								"icon",
								{ key: 1 },
							),
						],
						2,
					)
				) : I("v-if", !0),
				b(e.$slots, "default"),
			],
			10,
			fo,
		)
	);
}
var ye = P(ao, [["render", po]]);
const ho = S({
	name: "ButtonGroup",
	setup() {
		return { prefixCls: T("btn-group") };
	},
});
function vo(e, t, n, o, r, s) {
	return (d(), v("div", { class: y(e.prefixCls) }, [b(e.$slots, "default")], 2));
}
var ne = P(ho, [["render", vo]]);
const mo = Object.assign(
	ye,
	{
		Group: ne,
		install: (e, t) => {
			ce(e, t);
			const n = ae(t);
			e.component(n + ye.name, ye), e.component(n + ne.name, ne);
		},
	},
);
var bo = Object.defineProperty,
	ut = Object.getOwnPropertySymbols,
	yo = Object.prototype.hasOwnProperty,
	_o = Object.prototype.propertyIsEnumerable,
	at = (e, t, n) =>
		t in e ? bo(
			e,
			t,
			{ enumerable: !0, configurable: !0, writable: !0, value: n },
		) : e[t] = n,
	Y = (e, t) => {
		for (var n in t || (t = {})) yo.call(t, n) && at(e, n, t[n]);
		if (ut) {
			for (var n of ut(t)) _o.call(t, n) && at(e, n, t[n]);
		}
		return e;
	};
const go = () => ({
	width: document.documentElement.clientWidth || window.innerWidth,
	height: document.documentElement.clientHeight || window.innerHeight,
}),
	ct = (e, t) => {
		var n, o;
		const r = e.getBoundingClientRect();
		return {
			top: r.top,
			bottom: r.bottom,
			left: r.left,
			right: r.right,
			scrollTop: r.top - t.top,
			scrollBottom: r.bottom - t.top,
			scrollLeft: r.left - t.left,
			scrollRight: r.right - t.left,
			width: (n = e.offsetWidth) != null ? n : e.clientWidth,
			height: (o = e.offsetHeight) != null ? o : e.clientHeight,
		};
	},
	Eo = (e) => {
		switch (e) {
			case "top":
			case "tl":
			case "tr":
				return "top";
			case "bottom":
			case "bl":
			case "br":
				return "bottom";
			case "left":
			case "lt":
			case "lb":
				return "left";
			case "right":
			case "rt":
			case "rb":
				return "right";
			default:
				return "top";
		}
	},
	te = (e, t) => {
		switch (t) {
			case "top":
				switch (e) {
					case "bottom":
						return "top";
					case "bl":
						return "tl";
					case "br":
						return "tr";
					default:
						return e;
				}
			case "bottom":
				switch (e) {
					case "top":
						return "bottom";
					case "tl":
						return "bl";
					case "tr":
						return "br";
					default:
						return e;
				}
			case "left":
				switch (e) {
					case "right":
						return "left";
					case "rt":
						return "lt";
					case "rb":
						return "lb";
					default:
						return e;
				}
			case "right":
				switch (e) {
					case "left":
						return "right";
					case "lt":
						return "rt";
					case "lb":
						return "rb";
					default:
						return e;
				}
			default:
				return e;
		}
	},
	wo = (
		e,
		t,
		{ containerRect: n, triggerRect: o, popupRect: r, offset: s, translate: i },
	) => {
		const l = Eo(e),
			u = go(),
			a = {
				top: n.top + t.top,
				bottom: u.height - (n.top + t.top + r.height),
				left: n.left + t.left,
				right: u.width - (n.left + t.left + r.width),
			};
		let f = e;
		if (l === "top" && a.top < 0) {
			if (o.top > r.height) {
				t.top = -n.top;
			} else {
				const h = q("bottom", o, r, { offset: s, translate: i });
				(u.height - (n.top + h.top + r.height)) > 0 && (
					f = te(e, "bottom"), t.top = h.top
				);
			}
		}
		if (l === "bottom" && a.bottom < 0) {
			if ((u.height - o.bottom) > r.height) {
				t.top = -n.top + (u.height - r.height);
			} else {
				const h = q("top", o, r, { offset: s, translate: i });
				(n.top + h.top) > 0 && (f = te(e, "top"), t.top = h.top);
			}
		}
		if (l === "left" && a.left < 0) {
			if (o.left > r.width) {
				t.left = -n.left;
			} else {
				const h = q("right", o, r, { offset: s, translate: i });
				(u.width - (n.left + h.left + r.width)) > 0 && (
					f = te(e, "right"), t.left = h.left
				);
			}
		}
		if (l === "right" && a.right < 0) {
			if ((u.width - o.right) > r.width) {
				t.left = -n.left + (u.width - r.width);
			} else {
				const h = q("left", o, r, { offset: s, translate: i });
				(n.left + h.left) > 0 && (f = te(e, "left"), t.left = h.left);
			}
		}
		return (
			(l === "top" || l === "bottom") && (
				a.left < 0 ? t.left = -n.left : a.right < 0 && (
					t.left = -n.left + (u.width - r.width)
				)
			), (l === "left" || l === "right") && (
				a.top < 0 ? t.top = -n.top : a.bottom < 0 && (
					t.top = -n.top + (u.height - r.height)
				)
			), { popupPosition: t, position: f }
		);
	},
	q = (e, t, n, { offset: o = 0, translate: r = [0, 0] } = {}) => {
		var s;
		const i = (s = wt(r) ? r : r[e]) != null ? s : [0, 0];
		switch (e) {
			case "top":
				return {
					left: t.scrollLeft + Math.round(t.width / 2) - Math.round(n.width / 2) + i[0],
					top: t.scrollTop - n.height - o + i[1],
				};
			case "tl":
				return {
					left: t.scrollLeft + i[0],
					top: t.scrollTop - n.height - o + i[1],
				};
			case "tr":
				return {
					left: t.scrollRight - n.width + i[0],
					top: t.scrollTop - n.height - o + i[1],
				};
			case "bottom":
				return {
					left: t.scrollLeft + Math.round(t.width / 2) - Math.round(n.width / 2) + i[0],
					top: t.scrollBottom + o + i[1],
				};
			case "bl":
				return { left: t.scrollLeft + i[0], top: t.scrollBottom + o + i[1] };
			case "br":
				return {
					left: t.scrollRight - n.width + i[0],
					top: t.scrollBottom + o + i[1],
				};
			case "left":
				return {
					left: t.scrollLeft - n.width - o + i[0],
					top: t.scrollTop + Math.round(t.height / 2) - Math.round(n.height / 2) + i[1],
				};
			case "lt":
				return {
					left: t.scrollLeft - n.width - o + i[0],
					top: t.scrollTop + i[1],
				};
			case "lb":
				return {
					left: t.scrollLeft - n.width - o + i[0],
					top: t.scrollBottom - n.height + i[1],
				};
			case "right":
				return {
					left: t.scrollRight + o + i[0],
					top: t.scrollTop + Math.round(t.height / 2) - Math.round(n.height / 2) + i[1],
				};
			case "rt":
				return { left: t.scrollRight + o + i[0], top: t.scrollTop + i[1] };
			case "rb":
				return {
					left: t.scrollRight + o + i[0],
					top: t.scrollBottom - n.height + i[1],
				};
			default:
				return { left: 0, top: 0 };
		}
	},
	Co = (e) => {
		let t = "0";
		["top", "bottom"].includes(e) ? t = "50%" : ["left", "lt", "lb", "tr", "br"].includes(
			e,
		) && (t = "100%");
		let n = "0";
		return (
			["left", "right"].includes(e) ? n = "50%" : [
				"top", "tl", "tr", "lt", "rt",
			].includes(e) && (n = "100%"), `${t} ${n}`
		);
	},
	$o = (
		e,
		t,
		n,
		o,
		{
			offset: r = 0,
			translate: s = [0, 0],
			customStyle: i = {},
			autoFitPosition: l = !1,
		} = {},
	) => {
		let u = e, a = q(e, n, o, { offset: r, translate: s });
		if (l) {
			const h = wo(
				e,
				a,
				{
					containerRect: t,
					popupRect: o,
					triggerRect: n,
					offset: r,
					translate: s,
				},
			);
			a = h.popupPosition, u = h.position;
		}
		return {
			style: Y({ left: `${a.left}px`, top: `${a.top}px` }, i),
			position: u,
		};
	},
	Oo = (e, t, n, { customStyle: o = {} }) => {
		if (["top", "tl", "tr", "bottom", "bl", "br"].includes(e)) {
			let s = Math.abs(t.scrollLeft + (t.width / 2) - n.scrollLeft);
			return (
				s > (n.width - 8) && (
					t.width > n.width ? s = n.width / 2 : s = n.width - 8
				), ["top", "tl", "tr"].includes(e) ? Y(
					{
						left: `${s}px`,
						bottom: "0",
						transform: "translate(-50%,50%) rotate(45deg)",
					},
					o,
				) : Y(
					{
						left: `${s}px`,
						top: "0",
						transform: "translate(-50%,-50%) rotate(45deg)",
					},
					o,
				)
			);
		}
		let r = Math.abs(t.scrollTop + (t.height / 2) - n.scrollTop);
		return (
			r > (n.height - 8) && (
				t.height > n.height ? r = n.height / 2 : r = n.height - 8
			), ["left", "lt", "lb"].includes(e) ? Y(
				{
					top: `${r}px`,
					right: "0",
					transform: "translate(50%,-50%) rotate(45deg)",
				},
				o,
			) : Y(
				{
					top: `${r}px`,
					left: "0",
					transform: "translate(-50%,-50%) rotate(45deg)",
				},
				o,
			)
		);
	},
	So = (e) => e.scrollHeight > e.offsetHeight || e.scrollWidth > e.offsetWidth,
	ko = (e) => {
		const t = [];
		let n = e;
		for (; n && n !== document.documentElement; ) So(n) && t.push(n), n =
			n.parentElement;
		return t;
	},
	To = S({
		name: "ResizeObserver",
		props: { watchOnUpdated: Boolean },
		emits: ["resize"],
		setup(e, { emit: t }) {
			const n = Ae();
			let o;
			const r = (l) => {
				!l || (
					o =
						new Pt(
							(u) => {
								const a = u[0];
								t("resize", a);
							},
						), o.observe(l)
				);
			},
				s = () => {
					o && (o.disconnect(), o = null);
				},
				i = g();
			A(() => {
				if (n?.subTree) {
					const l = le(n.subTree);
					l && (i.value = l, r(l));
				}
			}), Le(() => {
				if (e.watchOnUpdated && n?.subTree) {
					const l = le(n.subTree);
					l !== i.value && (o && s(), l && (i.value = l, r(l)));
				}
			}), re(() => {
				s();
			});
		},
	});
function Po(e, t, n, o, r, s) {
	return b(e.$slots, "default");
}
var dt = P(To, [["render", Po]]);
function Bo(e, t) {
	const n = g(e[t]);
	return (
		Le(() => {
			const o = e[t];
			n.value !== o && (n.value = o);
		}), n
	);
}
const ft = Symbol("ArcoTrigger"), Do = 1e3, Mo = 1;
class Ao {
	constructor() {
		this.zIndex = 0, this.popupStack = new Set(), this.instanceMap = new Map();
	}
	getInstance(t) {
		return this.instanceMap.get(t);
	}
	registerInstance(t, n) {
		!n || this.instanceMap.set(t, n);
	}
	deregisterInstance(t) {
		this.instanceMap.delete(t);
	}
	nextZIndex() {
		return (this.zIndex ? this.zIndex += Mo : this.zIndex = Do, this.zIndex);
	}
	open(t) {
		this.popupStack.add(t);
	}
	close(t) {
		this.popupStack.delete(t);
	}
}
let z;
const Lo = (() => {
	let e = 0;
	return (t = "") => (e += 1, `${t}${e}`);
})();
function zo({ visible: e, runOnMounted: t } = {}) {
	const n = Lo(), o = g();
	z || (z = new Ao());
	const r = m(() => o.value || 0), s = () => (o.value = z.nextZIndex(), o.value);
	A(() => {
		const u = Ae();
		z.registerInstance(n, u);
	}), re(() => {
		z.deregisterInstance(n);
	});
	const i = () => {
		z.open(n), o.value = s();
	},
		l = () => {
			z.close(n);
		};
	return (
		e ? en(() => {
			e.value ? i() : l();
		}) : t && (
			A(() => {
				i();
			}), re(() => {
				l();
			})
		), { id: n, zIndex: r, nextZIndex: s, close: l, open: i }
	);
}
const No = ({ elementRef: e, onResize: t }) => {
	let n;
	return {
		createResizeObserver: () => {
			!e.value || (
				n =
					new Pt(
						(s) => {
							const i = s[0];
							Ct(t) && t(i);
						},
					), n.observe(e.value)
			);
		},
		destroyResizeObserver: () => {
			n && (n.disconnect(), n = null);
		},
	};
};
var Io = S({
	name: "ClientOnly",
	setup(e, { slots: t }) {
		const n = g(!1);
		return (
			A(() => n.value = !0), () => {
				var o;
				return n.value
					? (o = t.default) == null
						? void 0
						: o.call(t)
					: null;
			}
		);
	},
});
const Vo = (
	{
		popupContainer: e,
		visible: t,
		defaultContainer: n = "body",
		documentContainer: o,
	},
) => {
	const r = g(e.value),
		s = g(),
		i = () => {
			const l = lt(e.value),
				u = l ? e.value : n,
				a = l ?? (o ? document.documentElement : lt(n));
			u !== r.value && (r.value = u), a !== s.value && (s.value = a);
		};
	return (
		A(() => i()), ke(
			t,
			(l) => {
				r.value !== e.value && l && i();
			},
		), { teleportContainer: r, containerRef: s }
	);
};
var Fo = Object.defineProperty,
	jo = Object.defineProperties,
	Ho = Object.getOwnPropertyDescriptors,
	pt = Object.getOwnPropertySymbols,
	xo = Object.prototype.hasOwnProperty,
	Ro = Object.prototype.propertyIsEnumerable,
	ht = (e, t, n) =>
		t in e ? Fo(
			e,
			t,
			{ enumerable: !0, configurable: !0, writable: !0, value: n },
		) : e[t] = n,
	Wo = (e, t) => {
		for (var n in t || (t = {})) xo.call(t, n) && ht(e, n, t[n]);
		if (pt) {
			for (var n of pt(t)) Ro.call(t, n) && ht(e, n, t[n]);
		}
		return e;
	},
	Go = (e, t) => jo(e, Ho(t));
function Yo(e) {
	return typeof e == "function" || (
		Object.prototype.toString.call(e) === "[object Object]" && !tn(e)
	);
}
var _e = S({
	name: "Trigger",
	inheritAttrs: !1,
	props: {
		popupVisible: { type: Boolean, default: void 0 },
		defaultPopupVisible: { type: Boolean, default: !1 },
		trigger: {
			type: [String, Array],
			default: "hover",
			validator: (e) => {
				const t = [].concat(e);
				for (const n of t) if (!Jn.includes(n)) {
					return !1;
				}
				return !0;
			},
		},
		position: { type: String, default: "bottom" },
		disabled: { type: Boolean, default: !1 },
		popupOffset: { type: Number, default: 0 },
		popupTranslate: { type: [Array, Object] },
		showArrow: { type: Boolean, default: !1 },
		alignPoint: { type: Boolean, default: !1 },
		popupHoverStay: { type: Boolean, default: !0 },
		blurToClose: { type: Boolean, default: !0 },
		clickToClose: { type: Boolean, default: !0 },
		clickOutsideToClose: { type: Boolean, default: !0 },
		unmountOnClose: { type: Boolean, default: !0 },
		contentClass: { type: [String, Array, Object] },
		contentStyle: { type: Object },
		arrowClass: { type: [String, Array, Object] },
		arrowStyle: { type: Object },
		popupStyle: { type: Object },
		animationName: { type: String, default: "fade-in" },
		duration: { type: [Number, Object] },
		mouseEnterDelay: { type: Number, default: 100 },
		mouseLeaveDelay: { type: Number, default: 100 },
		focusDelay: { type: Number, default: 0 },
		autoFitPopupWidth: { type: Boolean, default: !1 },
		autoFitPopupMinWidth: { type: Boolean, default: !1 },
		autoFixPosition: { type: Boolean, default: !0 },
		popupContainer: { type: [String, Object] },
		updateAtScroll: { type: Boolean, default: !1 },
		autoFitTransformOrigin: { type: Boolean, default: !1 },
		hideEmpty: { type: Boolean, default: !1 },
		openedClass: { type: [String, Array, Object] },
		autoFitPosition: { type: Boolean, default: !0 },
		renderToBody: { type: Boolean, default: !0 },
		preventFocus: { type: Boolean, default: !1 },
		onPopupVisibleChange: { type: [Function, Array] },
	},
	emits: ["update:popupVisible", "popupVisibleChange", "show", "hide"],
	setup(e, { emit: t, slots: n, attrs: o }) {
		const { popupContainer: r } = Z(e),
			s = T("trigger"),
			i = m(() => [].concat(e.trigger)),
			l = new Set(),
			u = R(ft, void 0),
			a = g(),
			f = m(() => Rn(a.value) ? a.value.$el : a.value),
			h = g(),
			xe = g(e.defaultPopupVisible),
			J = g(e.position),
			Re = g({}),
			We = g({}),
			Ge = g({}),
			Vt = g(),
			B = g({ top: 0, left: 0 }),
			_ = m(() => {
				var c;
				return (c = e.popupVisible) != null ? c : xe.value;
			}),
			{ teleportContainer: Ft, containerRef: fe } = Vo({
				popupContainer: r,
				visible: _,
				documentContainer: !0,
			}),
			{ zIndex: jt } = zo({ visible: _ });
		let W = 0, Q = !1;
		const Ht = () => {
			W && (window.clearTimeout(W), W = 0);
		},
			pe = (c) => {
				if (e.alignPoint) {
					const { pageX: $, pageY: O } = c;
					B.value = { top: O, left: $ };
				}
			},
			V = () => {
				if (!f.value || !h.value || !fe.value) {
					return;
				}
				const c = fe.value.getBoundingClientRect(),
					$ = e.alignPoint ? {
						top: B.value.top,
						bottom: B.value.top,
						left: B.value.left,
						right: B.value.left,
						scrollTop: B.value.top,
						scrollBottom: B.value.top,
						scrollLeft: B.value.left,
						scrollRight: B.value.left,
						width: 0,
						height: 0,
					} : ct(f.value, c),
					O = ct(h.value, c),
					{ style: D, position: F } = $o(
						e.position,
						c,
						$,
						O,
						{
							offset: e.popupOffset,
							translate: e.popupTranslate,
							customStyle: e.popupStyle,
							autoFitPosition: e.autoFitPosition,
						},
					);
				e.autoFitTransformOrigin && (We.value = { transformOrigin: Co(F) }), e.autoFitPopupMinWidth ? D.minWidth =
					`${$.width}px` : e.autoFitPopupWidth && (D.width = `${$.width}px`), J.value !== F && (
					J.value = F
				), Re.value = D, e.showArrow && (
					Ge.value = Oo(F, $, O, { customStyle: e.arrowStyle })
				);
			},
			L = (c, $) => {
				if (c === _.value && W === 0) {
					return;
				}
				const O = () => {
					xe.value = c, t("update:popupVisible", c), t("popupVisibleChange", c), c && ln(() => {
						V();
					});
				};
				$ ? (Ht(), c !== _.value && (W = window.setTimeout(O, $))) : O();
			},
			xt = (c) => {
				e.disabled ||
					!i.value.includes("click") ||
					(_.value && !e.clickToClose) ||
					(pe(c), L(!_.value));
			},
			Ye = (c) => {
				e.disabled ||
					!i.value.includes("hover") ||
					(pe(c), L(!0, e.mouseEnterDelay));
			},
			qe = (c) => {
				u?.onMouseenter(c), Ye(c);
			},
			Ue = (c) => {
				e.disabled || !i.value.includes("hover") || L(!1, e.mouseLeaveDelay);
			},
			Ke = (c) => {
				u?.onMouseleave(c), Ue();
			},
			Rt = (c) => {
				e.disabled || !i.value.includes("focus") || L(!0, e.focusDelay);
			},
			Wt = (c) => {
				e.disabled || !i.value.includes("focus") || !e.blurToClose || L(!1);
			},
			Gt = (c) => {
				c.preventDefault(), !(
					e.disabled ||
						!i.value.includes("contextMenu") ||
						(_.value && !e.clickToClose)
				) && (pe(c), L(!_.value));
			};
		vt(
			ft,
			Me({
				onMouseenter: qe,
				onMouseleave: Ke,
				addChildRef: (c) => {
					l.add(c), u?.addChildRef(c);
				},
				removeChildRef: (c) => {
					l.delete(c), u?.removeChildRef(c);
				},
			}),
		);
		const Ze = () => {
			Kn(document.documentElement, "mousedown", Je), Q = !1;
		},
			Xe = Bo(n, "content"),
			Yt = m(() => {
				var c;
				return e.hideEmpty && Gn((c = Xe.value) == null ? void 0 : c.call(Xe));
			}),
			Je = (c) => {
				var $, O, D;
				if (
					!(
						(($ = f.value) == null ? void 0 : $.contains(c.target)) || (
							(O = h.value) == null ? void 0 : O.contains(c.target)
						)
					)
				) {
					for (const F of l) if ((D = F.value) != null && D.contains(c.target)) {
						return;
					}
					Ze(), L(!1);
				}
			},
			Qe = qn(() => {
				_.value && V();
			}),
			he = () => {
				_.value && V();
			},
			qt = (c) => {
				e.preventFocus && c.preventDefault();
			};
		u?.addChildRef(h);
		const Ut = m(() => _.value ? e.openedClass : void 0);
		let ee;
		ke(
			_,
			(c) => {
				if (e.clickOutsideToClose) {
					if (Q && !c) {
						Ze();
						return;
					}
					Q || (Un(document.documentElement, "mousedown", Je), Q = !0);
				}
				if (e.updateAtScroll) {
					if (c) {
						ee = ko(f.value);
						for (const $ of ee) $.addEventListener("scroll", Qe);
					} else if (ee) {
						for (const $ of ee) $.removeEventListener("scroll", Qe);
					}
				}
				c && (ve.value = !0);
			},
		), ke(
			() => [e.autoFitPopupWidth, e.autoFitPopupMinWidth],
			() => {
				_.value && V();
			},
		);
		const { createResizeObserver: Kt, destroyResizeObserver: Zt } = No({
			elementRef: fe,
			onResize: he,
		});
		A(() => {
			Kt(), _.value && V();
		}), Le(() => {
			_.value && V();
		}), re(() => {
			u?.removeChildRef(h), Zt();
		});
		const ve = g(_.value),
			Xt = () => {
				_.value && t("show");
			},
			Jt = () => {
				_.value || (ve.value = !1, t("hide"));
			};
		return () => {
			var c, $;
			const O = ($ = (c = n.default) == null ? void 0 : c.call(n)) != null ? $ : [];
			return (
				De(
					O,
					{
						ref: a,
						class: Ut.value,
						onClick: xt,
						onMouseenter: Ye,
						onMouseleave: Ue,
						onFocusin: Rt,
						onFocusout: Wt,
						onContextmenu: Gt,
					},
				), p(
					j,
					null,
					[
						e.autoFixPosition ? p(
							dt,
							{ onResize: he },
							Yo(O) ? O : { default: () => [O] },
						) : O,
						p(
							Io,
							null,
							{
								default: () => [
									p(
										nn,
										{ to: Ft.value, disabled: !e.renderToBody },
										{
											default: () => [
												(!e.unmountOnClose || _.value || ve.value) &&
													!Yt.value &&
													p(
														dt,
														{ onResize: he },
														{
															default: () => [
																p(
																	"div",
																	mt(
																		{
																			ref: h,
																			class: [
																				`${s}-popup`,
																				`${s}-position-${J.value}`,
																			],
																			style: Go(
																				Wo({}, Re.value),
																				{ zIndex: jt.value },
																			),
																			"trigger-placement": J.value,
																			onMouseenter: qe,
																			onMouseleave: Ke,
																			onMousedown: qt,
																		},
																		o,
																	),
																	[
																		p(
																			on,
																			{
																				name: e.animationName,
																				duration: e.duration,
																				appear: !0,
																				onAfterEnter: Xt,
																				onAfterLeave: Jt,
																			},
																			{
																				default: () => {
																					var D;
																					return [
																						rn(
																							p(
																								"div",
																								{
																									class: `${s}-popup-wrapper`,
																									style: We.value,
																								},
																								[
																									p(
																										"div",
																										{
																											class: [
																												`${s}-content`,
																												e.contentClass,
																											],
																											style: e.contentStyle,
																										},
																										[
																											(D = n.content) == null ? void 0 : D.call(
																												n,
																											),
																										],
																									),
																									e.showArrow && p(
																										"div",
																										{
																											ref: Vt,
																											class: [
																												`${s}-arrow`,
																												e.arrowClass,
																											],
																											style: Ge.value,
																										},
																										null,
																									),
																								],
																							),
																							[[sn, _.value]],
																						),
																					];
																				},
																			},
																		),
																	],
																),
															],
														},
													),
											],
										},
									),
								],
							},
						),
					],
				)
			);
		};
	},
});
const Lt = Object.assign(
	_e,
	{
		install: (e, t) => {
			ce(e, t);
			const n = ae(t);
			e.component(n + _e.name, _e);
		},
	},
),
	qo = S({
		name: "IconEmpty",
		props: {
			size: { type: [Number, String] },
			strokeWidth: { type: Number, default: 4 },
			strokeLinecap: {
				type: String,
				default: "butt",
				validator: (e) => ["butt", "round", "square"].includes(e),
			},
			strokeLinejoin: {
				type: String,
				default: "miter",
				validator: (e) =>
					["arcs", "bevel", "miter", "miter-clip", "round"].includes(e),
			},
			spin: Boolean,
		},
		setup(e) {
			const t = T("icon"),
				n = m(() => [t, `${t}-empty`, { [`${t}-spin`]: e.spin }]),
				o = m(() => {
					if (e.size) {
						return { fontSize: ue(e.size) ? `${e.size}px` : e.size };
					}
				});
			return { cls: n, sizeStyle: o };
		},
	}),
	Uo = ["stroke-width", "stroke-linecap", "stroke-linejoin"],
	Ko = C(
		"path",
		{
			d: "M24 5v6m7 1 4-4m-18 4-4-4m28.5 22H28s-1 3-4 3-4-3-4-3H6.5M40 41H8a2 2 0 0 1-2-2v-8.46a2 2 0 0 1 .272-1.007l6.15-10.54A2 2 0 0 1 14.148 18H33.85a2 2 0 0 1 1.728.992l6.149 10.541A2 2 0 0 1 42 30.541V39a2 2 0 0 1-2 2Z",
		},
		null,
		-1,
	),
	Zo = [Ko];
function Xo(e, t, n, o, r, s) {
	return (
		d(), v(
			"svg",
			{
				viewBox: "0 0 48 48",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				stroke: "currentColor",
				class: y(e.cls),
				style: K(e.sizeStyle),
				"stroke-width": e.strokeWidth,
				"stroke-linecap": e.strokeLinecap,
				"stroke-linejoin": e.strokeLinejoin,
			},
			Zo,
			14,
			Uo,
		)
	);
}
var ge = P(qo, [["render", Xo]]);
const Jo = Object.assign(
	ge,
	{
		install: (e, t) => {
			var n;
			const o = (n = t?.iconPrefix) != null ? n : "";
			e.component(o + ge.name, ge);
		},
	},
),
	Qo = S({
		name: "Empty",
		components: { IconEmpty: Jo },
		props: { description: String, imgSrc: String },
		setup() {
			const e = T("empty"), { t } = mn();
			return { prefixCls: e, t };
		},
	}),
	er = ["src", "alt"];
function tr(e, t, n, o, r, s) {
	const i = k("icon-empty");
	return (
		d(), v(
			"div",
			{ class: y(e.prefixCls) },
			[
				C(
					"div",
					{ class: y(`${e.prefixCls}-image`) },
					[
						b(
							e.$slots,
							"image",
							{},
							() => [
								e.imgSrc ? (
									d(), v(
										"img",
										{ key: 0, src: e.imgSrc, alt: e.description || "empty" },
										null,
										8,
										er,
									)
								) : (d(), N(i, { key: 1 })),
							],
						),
					],
					2,
				),
				C(
					"div",
					{ class: y(`${e.prefixCls}-description`) },
					[
						b(
							e.$slots,
							"default",
							{},
							() => [X(bt(e.description || e.t("empty.description")), 1)],
						),
					],
					2,
				),
			],
			2,
		)
	);
}
var Ee = P(Qo, [["render", tr]]);
const nr = Object.assign(
	Ee,
	{
		install: (e, t) => {
			ce(e, t);
			const n = ae(t);
			e.component(n + Ee.name, Ee);
		},
	},
),
	or = S({
		name: "IconMore",
		props: {
			size: { type: [Number, String] },
			strokeWidth: { type: Number, default: 4 },
			strokeLinecap: {
				type: String,
				default: "butt",
				validator: (e) => ["butt", "round", "square"].includes(e),
			},
			strokeLinejoin: {
				type: String,
				default: "miter",
				validator: (e) =>
					["arcs", "bevel", "miter", "miter-clip", "round"].includes(e),
			},
			spin: Boolean,
		},
		setup(e) {
			const t = T("icon"),
				n = m(() => [t, `${t}-more`, { [`${t}-spin`]: e.spin }]),
				o = m(() => {
					if (e.size) {
						return { fontSize: ue(e.size) ? `${e.size}px` : e.size };
					}
				});
			return { cls: n, sizeStyle: o };
		},
	}),
	rr = ["stroke-width", "stroke-linecap", "stroke-linejoin"],
	ir = C(
		"path",
		{
			d: "M38 25v-2h2v2h-2ZM23 25v-2h2v2h-2ZM8 25v-2h2v2H8Z",
			fill: "currentColor",
			stroke: "none",
		},
		null,
		-1,
	),
	sr = C(
		"path",
		{ d: "M38 25v-2h2v2h-2ZM23 25v-2h2v2h-2ZM8 25v-2h2v2H8Z" },
		null,
		-1,
	),
	lr = [ir, sr];
function ur(e, t, n, o, r, s) {
	return (
		d(), v(
			"svg",
			{
				viewBox: "0 0 48 48",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				stroke: "currentColor",
				class: y(e.cls),
				style: K(e.sizeStyle),
				"stroke-width": e.strokeWidth,
				"stroke-linecap": e.strokeLinecap,
				"stroke-linejoin": e.strokeLinejoin,
			},
			lr,
			14,
			rr,
		)
	);
}
var we = P(or, [["render", ur]]);
const ar = Object.assign(
	we,
	{
		install: (e, t) => {
			var n;
			const o = (n = t?.iconPrefix) != null ? n : "";
			e.component(o + we.name, we);
		},
	},
),
	cr = S({
		name: "IconRight",
		props: {
			size: { type: [Number, String] },
			strokeWidth: { type: Number, default: 4 },
			strokeLinecap: {
				type: String,
				default: "butt",
				validator: (e) => ["butt", "round", "square"].includes(e),
			},
			strokeLinejoin: {
				type: String,
				default: "miter",
				validator: (e) =>
					["arcs", "bevel", "miter", "miter-clip", "round"].includes(e),
			},
			spin: Boolean,
		},
		setup(e) {
			const t = T("icon"),
				n = m(() => [t, `${t}-right`, { [`${t}-spin`]: e.spin }]),
				o = m(() => {
					if (e.size) {
						return { fontSize: ue(e.size) ? `${e.size}px` : e.size };
					}
				});
			return { cls: n, sizeStyle: o };
		},
	}),
	dr = ["stroke-width", "stroke-linecap", "stroke-linejoin"],
	fr = C("path", { d: "m16 39.513 15.556-15.557L16 8.4" }, null, -1),
	pr = [fr];
function hr(e, t, n, o, r, s) {
	return (
		d(), v(
			"svg",
			{
				viewBox: "0 0 48 48",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				stroke: "currentColor",
				class: y(e.cls),
				style: K(e.sizeStyle),
				"stroke-width": e.strokeWidth,
				"stroke-linecap": e.strokeLinecap,
				"stroke-linejoin": e.strokeLinejoin,
			},
			pr,
			14,
			dr,
		)
	);
}
var Ce = P(cr, [["render", hr]]);
const vr = Object.assign(
	Ce,
	{
		install: (e, t) => {
			var n;
			const o = (n = t?.iconPrefix) != null ? n : "";
			e.component(o + Ce.name, Ce);
		},
	},
),
	mr = S({
		name: "DropdownPanel",
		components: { Empty: nr },
		props: {
			loading: { type: Boolean, default: !1 },
			isEmpty: { type: Boolean, default: !1 },
			bottomOffset: { type: Number, default: 0 },
			onScroll: { type: [Function, Array] },
			onReachBottom: { type: [Function, Array] },
		},
		emits: ["scroll", "reachBottom"],
		setup(e, { emit: t, slots: n }) {
			const o = T("dropdown"),
				r = g(),
				s = (l) => {
					const { scrollTop: u, scrollHeight: a, offsetHeight: f } = l.target;
					(a - (u + f)) <= e.bottomOffset && t("reachBottom", l), t("scroll", l);
				},
				i = m(() => [o, { [`${o}-has-footer`]: Boolean(n.footer) }]);
			return { prefixCls: o, cls: i, wrapperRef: r, handleScroll: s };
		},
	});
function br(e, t, n, o, r, s) {
	const i = k("empty");
	return (
		d(), v(
			"div",
			{ class: y(e.cls) },
			[
				e.isEmpty ? (
					d(), v(
						"div",
						{ key: 0, class: y(`${e.prefixCls}-empty`) },
						[b(e.$slots, "empty", {}, () => [p(i)])],
						2,
					)
				) : I("v-if", !0),
				C(
					"div",
					{
						ref: "wrapperRef",
						class: y(`${e.prefixCls}-list-wrapper`),
						onScroll: t[0] || (
							t[0] = (...l) => e.handleScroll && e.handleScroll(...l)
						),
					},
					[
						C(
							"ul",
							{ class: y(`${e.prefixCls}-list`) },
							[b(e.$slots, "default")],
							2,
						),
					],
					34,
				),
				e.$slots.footer && !e.isEmpty ? (
					d(), v(
						"div",
						{ key: 1, class: y(`${e.prefixCls}-footer`) },
						[b(e.$slots, "footer")],
						2,
					)
				) : I("v-if", !0),
			],
			2,
		)
	);
}
var zt = P(mr, [["render", br]]);
const je = ({ popupVisible: e, defaultPopupVisible: t, emit: n }) => {
	var o;
	const r = g((o = t?.value) != null ? o : !1),
		s = m(() => {
			var l;
			return (l = e?.value) != null ? l : r.value;
		});
	return {
		_popupVisible: r,
		computedPopupVisible: s,
		handlePopupVisibleChange: (l) => {
			l !== r.value && (
				r.value = l, n("update:popupVisible", l), n("popupVisibleChange", l)
			);
		},
	};
},
	Nt = Symbol("ArcoDropdown"),
	yr = S({
		name: "Dropdown",
		components: { Trigger: Lt, DropdownPanel: zt },
		props: {
			popupVisible: { type: Boolean, default: void 0 },
			defaultPopupVisible: { type: Boolean, default: !1 },
			trigger: { type: [String, Array], default: "click" },
			position: { type: String, default: "bottom" },
			popupContainer: { type: [String, Object] },
		},
		emits: ["update:popupVisible", "popupVisibleChange", "select"],
		setup(e, { emit: t }) {
			const { defaultPopupVisible: n, popupVisible: o } = Z(e),
				r = T("dropdown"),
				{ computedPopupVisible: s, handlePopupVisibleChange: i } = je({
					defaultPopupVisible: n,
					popupVisible: o,
					emit: t,
				});
			return (
				vt(
					Nt,
					Me({
						onOptionClick: (u, a) => {
							t("select", u, a), i(!1);
						},
					}),
				), {
					prefixCls: r,
					computedPopupVisible: s,
					handlePopupVisibleChange: i,
				}
			);
		},
	});
function _r(e, t, n, o, r, s) {
	const i = k("DropdownPanel"), l = k("Trigger");
	return (
		d(), N(
			l,
			{
				"popup-visible": e.computedPopupVisible,
				"animation-name": "slide-dynamic-origin",
				"auto-fit-transform-origin": "",
				trigger: e.trigger,
				position: e.position,
				"popup-offset": 4,
				"popup-container": e.popupContainer,
				"opened-class": `${e.prefixCls}-open`,
				onPopupVisibleChange: e.handlePopupVisibleChange,
			},
			{
				content: w(
					() => [
						p(
							i,
							null,
							yt(
								{ default: w(() => [b(e.$slots, "content")]), _: 2 },
								[
									e.$slots.footer ? {
										name: "footer",
										fn: w(() => [b(e.$slots, "footer")]),
									} : void 0,
								],
							),
							1024,
						),
					],
				),
				default: w(() => [b(e.$slots, "default")]),
				_: 3,
			},
			8,
			[
				"popup-visible",
				"trigger",
				"position",
				"popup-container",
				"opened-class",
				"onPopupVisibleChange",
			],
		)
	);
}
var oe = P(yr, [["render", _r]]);
const gr = S({
	name: "Doption",
	props: {
		value: { type: [String, Number, Object] },
		disabled: { type: Boolean, default: !1 },
		active: Boolean,
		uninjectContext: Boolean,
	},
	setup(e) {
		const t = T("dropdown-option"),
			n = g(),
			o = m(() => {
				var a, f, h;
				return (
					h =
						(f = e.value) != null
							? f
							: (a = n.value) == null
								? void 0
								: a.textContent
				) != null ? h : void 0;
			}),
			r = e.uninjectContext ? void 0 : R(Nt, void 0),
			s = (a) => {
				e.disabled || r?.onOptionClick(o.value, a);
			},
			i = (a) => {
				e.disabled;
			},
			l = (a) => {
				e.disabled;
			},
			u = m(
				() => [t, { [`${t}-disabled`]: e.disabled, [`${t}-active`]: e.active }],
			);
		return {
			prefixCls: t,
			cls: u,
			liRef: n,
			handleClick: s,
			handleMouseEnter: i,
			handleMouseLeave: l,
		};
	},
});
function Er(e, t, n, o, r, s) {
	return (
		d(), v(
			"li",
			{
				ref: "liRef",
				class: y([
					e.cls,
					{ [`${e.prefixCls}-has-suffix`]: Boolean(e.$slots.suffix) },
				]),
				onClick: t[0] || (t[0] = (...i) => e.handleClick && e.handleClick(...i)),
				onMouseenter: t[1] || (
					t[1] = (...i) => e.handleMouseEnter && e.handleMouseEnter(...i)
				),
				onMouseleave: t[2] || (
					t[2] = (...i) => e.handleMouseLeave && e.handleMouseLeave(...i)
				),
			},
			[
				e.$slots.icon ? (
					d(), v(
						"span",
						{ key: 0, class: y(`${e.prefixCls}-icon`) },
						[b(e.$slots, "icon")],
						2,
					)
				) : I("v-if", !0),
				C(
					"span",
					{ class: y(`${e.prefixCls}-content`) },
					[b(e.$slots, "default")],
					2,
				),
				e.$slots.suffix ? (
					d(), v(
						"span",
						{ key: 1, class: y(`${e.prefixCls}-suffix`) },
						[b(e.$slots, "suffix")],
						2,
					)
				) : I("v-if", !0),
			],
			34,
		)
	);
}
var U = P(gr, [["render", Er]]);
const wr = S({
	name: "Dgroup",
	props: { title: String },
	setup() {
		return { prefixCls: T("dropdown-group") };
	},
});
function Cr(e, t, n, o, r, s) {
	return (
		d(), v(
			j,
			null,
			[
				C(
					"li",
					{ class: y(`${e.prefixCls}-title`) },
					[b(e.$slots, "title", {}, () => [X(bt(e.title), 1)])],
					2,
				),
				b(e.$slots, "default"),
			],
			64,
		)
	);
}
var $e = P(wr, [["render", Cr]]);
const $r = S({
	name: "Dsubmenu",
	components: {
		Trigger: Lt,
		DropdownPanel: zt,
		DropdownOption: U,
		IconRight: vr,
	},
	props: {
		value: { type: [String, Number] },
		disabled: { type: Boolean, default: !1 },
		trigger: { type: [String, Array], default: "click" },
		position: { type: String, default: "rt" },
		popupVisible: { type: Boolean, default: void 0 },
		defaultPopupVisible: { type: Boolean, default: !1 },
	},
	emits: ["update:popupVisible", "popupVisibleChange"],
	setup(e, { emit: t }) {
		const { defaultPopupVisible: n, popupVisible: o } = Z(e),
			r = T("dropdown"),
			{ computedPopupVisible: s, handlePopupVisibleChange: i } = je({
				defaultPopupVisible: n,
				popupVisible: o,
				emit: t,
			});
		return {
			prefixCls: r,
			computedPopupVisible: s,
			handlePopupVisibleChange: i,
		};
	},
});
function Or(e, t, n, o, r, s) {
	const i = k("IconRight"),
		l = k("dropdown-option"),
		u = k("dropdown-panel"),
		a = k("Trigger");
	return (
		d(), N(
			a,
			{
				"popup-visible": e.computedPopupVisible,
				trigger: e.trigger,
				position: e.position,
				disabled: e.disabled,
				"popup-offset": 4,
				onPopupVisibleChange: e.handlePopupVisibleChange,
			},
			{
				content: w(
					() => [
						p(
							u,
							{ class: y(`${e.prefixCls}-submenu`) },
							yt(
								{ default: w(() => [b(e.$slots, "content")]), _: 2 },
								[
									e.$slots.footer ? {
										name: "footer",
										fn: w(() => [b(e.$slots, "footer")]),
									} : void 0,
								],
							),
							1032,
							["class"],
						),
					],
				),
				default: w(
					() => [
						p(
							l,
							{ active: e.computedPopupVisible, "uninject-context": "" },
							{
								suffix: w(() => [p(i)]),
								default: w(() => [b(e.$slots, "default")]),
								_: 3,
							},
							8,
							["active"],
						),
					],
				),
				_: 3,
			},
			8,
			[
				"popup-visible",
				"trigger",
				"position",
				"disabled",
				"onPopupVisibleChange",
			],
		)
	);
}
var Oe = P($r, [["render", Or]]);
const Sr = S({
	name: "DropdownButton",
	components: { IconMore: ar, Button: mo, ButtonGroup: ne, Dropdown: oe },
	props: {
		popupVisible: { type: Boolean, default: void 0 },
		defaultPopupVisible: { type: Boolean, default: !1 },
		trigger: { type: [String, Array], default: "click" },
		position: { type: String, default: "br" },
		popupContainer: { type: [String, Object] },
		disabled: { type: Boolean, default: !1 },
		type: { type: String },
		size: { type: String },
		buttonProps: { type: Object },
	},
	emits: ["update:popupVisible", "popupVisibleChange", "click", "select"],
	setup(e, { emit: t }) {
		const { defaultPopupVisible: n, popupVisible: o } = Z(e),
			r = T("dropdown"),
			{ computedPopupVisible: s, handlePopupVisibleChange: i } = je({
				defaultPopupVisible: n,
				popupVisible: o,
				emit: t,
			});
		return {
			prefixCls: r,
			computedPopupVisible: s,
			handleClick: (a) => {
				t("click", a);
			},
			handleSelect: (a, f) => {
				t("select", a, f);
			},
			handlePopupVisibleChange: i,
		};
	},
});
function kr(e, t, n, o, r, s) {
	const i = k("Button"),
		l = k("IconMore"),
		u = k("Dropdown"),
		a = k("ButtonGroup");
	return (
		d(), N(
			a,
			null,
			{
				default: w(
					() => [
						p(
							i,
							mt(
								{ size: e.size, type: e.type, disabled: e.disabled },
								e.buttonProps,
								{ onClick: e.handleClick },
							),
							{ default: w(() => [b(e.$slots, "default")]), _: 3 },
							16,
							["size", "type", "disabled", "onClick"],
						),
						p(
							u,
							{
								"popup-visible": e.computedPopupVisible,
								trigger: e.trigger,
								position: e.position,
								"popup-container": e.popupContainer,
								onSelect: e.handleSelect,
								onPopupVisibleChange: e.handlePopupVisibleChange,
							},
							{
								content: w(() => [b(e.$slots, "content")]),
								default: w(
									() => [
										p(
											i,
											{ size: e.size, type: e.type, disabled: e.disabled },
											{
												icon: w(() => [b(e.$slots, "icon", {}, () => [p(l)])]),
												_: 3,
											},
											8,
											["size", "type", "disabled"],
										),
									],
								),
								_: 3,
							},
							8,
							[
								"popup-visible",
								"trigger",
								"position",
								"popup-container",
								"onSelect",
								"onPopupVisibleChange",
							],
						),
					],
				),
				_: 3,
			},
		)
	);
}
var Se = P(Sr, [["render", kr]]);
const Tr = Object.assign(
	oe,
	{
		Option: U,
		Group: $e,
		Submenu: Oe,
		Button: Se,
		install: (e, t) => {
			ce(e, t);
			const n = ae(t);
			e.component(n + oe.name, oe), e.component(n + U.name, U), e.component(
				n + $e.name,
				$e,
			), e.component(n + Oe.name, Oe), e.component(n + Se.name, Se);
		},
	},
);
const It = (e) => (_t("data-v-b77ebd36"), e = e(), gt(), e),
	Pr = It(() => C("a", { class: "logo", href: "#main" }, null, -1)),
	Br = It(() => C("a", { class: "msg" }, null, -1)),
	Dr = X("\u8D26\u53F7\u8BBE\u7F6E"),
	Mr = X("\u68C0\u6D4B\u66F4\u65B0"),
	Ar = X("\u9000\u51FA\u767B\u5F55");
function Lr(e, t) {
	const n = U, o = Tr;
	return (
		d(), v(
			"header",
			null,
			[
				Pr,
				C(
					"nav",
					null,
					[
						C(
							"a",
							{
								class: "home",
								onClick: t[0] || (t[0] = (...r) => e.home && e.home(...r)),
							},
						),
						Br,
						p(
							o,
							null,
							{
								content: w(
									() => [
										p(
											n,
											{ onClick: e.set },
											{ default: w(() => [Dr]), _: 1 },
											8,
											["onClick"],
										),
										p(
											n,
											{ onClick: e.auto_update },
											{ default: w(() => [Mr]), _: 1 },
											8,
											["onClick"],
										),
										p(
											n,
											{ class: "logout", onClick: e.logout },
											{ default: w(() => [Ar]), _: 1 },
											8,
											["onClick"],
										),
									],
								),
								default: w(
									() => [
										C(
											"a",
											{
												class: "user",
												style: K("background-image:url(" + e.ico + ")"),
											},
											null,
											4,
										),
									],
								),
								_: 1,
							},
						),
					],
				),
			],
		)
	);
}
var zr = Et(fn, [["render", Lr], ["__scopeId", "data-v-b77ebd36"]]),
	Nr = "https://matomo.dalukuankuan.com/",
	x;
x = window._paq = window._paq || [];
x.push(["setCustomDimension", 1, await M.auto_update.ver_now()]);
x.push(["trackPageView"]);
x.push(["enableLinkTracking"]);
(function () {
	var e, t, n, o;
	o = Nr, x.push(["setTrackerUrl", o + "matomo.php"]), x.push(["setSiteId", "1"]), e =
		document, t = e.createElement("script"), n =
		e.getElementsByTagName("script")[0], t.async = !0, t.src = o + "matomo.js", n.parentNode.insertBefore(
		t,
		n,
	);
})();
function Ir(e) {
	switch (e) {
		case "./main/index.vue":
			return un(
				() => import("./q.js"),
				[
					"q.js", "6.css", "5.js", "7.js", "2.js", "0.js", "x.js", "g.js",
					"5.css", "4.js", "_.js", "$.css", "a.js", "4.css", "1.js", "3.js",
					"$.js",
				],
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
var Vr = {
	components: { rHead: zr, x: cn },
	setup: () => {
		var e, t, n, o, r, s, i;
		return (
			n = G(), { uid: i } = localStorage, e = G(), i ? (
				M.USER.ID(i), s = !1, r =
					async () => {
						var l;
						l = location.hash.slice(6), l || (l = "index"), e.value =
							(await Ir(`./main/${l}.vue`)).default;
					}, A(r), window.addEventListener("hashchange", r)
			) : (
				s = Te + "login.html", t = !1, window.addEventListener(
					"message",
					({ data: l }) => {
						var u, a;
						l === "load" ? (E.xing(), t = !1) : (
							{ token: a, avatarUrl: u } = JSON.parse(l), localStorage.ico =
								u || "", localStorage.uid = a, location.hash = "main", location.reload()
						);
					},
				), E.ing(), A(() => {
					var l;
					({ body: l } = document), l.style.appRegion = "no-drag", l.className =
						"frame", n.value.addEventListener(
						"load",
						function () {
							setTimeout(
								() => {
									t && location.reload();
								},
								1e3,
							);
						},
					);
				})
			), s = G(s), o = G(navigator.onLine), window.addEventListener(
				"online",
				() => {
					if (o.value = !0, !i) {
						location.reload();
						return;
					}
				},
			), window.addEventListener("offline", () => o.value = !1), {
				c: e,
				frame: n,
				line: o,
				login: s,
				x: () => {
					M.x();
				},
			}
		);
	},
};
const He = (e) => (_t("data-v-47edb420"), e = e(), gt(), e),
	Fr = ["src"],
	jr = { key: 1, class: "wifi" },
	Hr = He(() => C("i", null, null, -1)),
	xr = He(() => C("h2", null, "\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25", -1)),
	Rr = He(() => C("p", null, "\u8BF7\u68C0\u67E5\u60A8\u7684\u7F51\u7EDC", -1)),
	Wr = [Hr, xr, Rr];
function Gr(e, t) {
	const n = k("x"), o = k("r-head");
	return (
		d(), v(
			j,
			null,
			[
				p(n, { onClick: e.x }, null, 8, ["onClick"]),
				e.line ? (
					d(), v(
						j,
						{ key: 0 },
						[
							e.login ? (
								d(), v(
									j,
									{ key: 0 },
									[
										e.line ? (
											d(), v(
												"iframe",
												{ key: 0, src: e.login, ref: "frame" },
												null,
												8,
												Fr,
											)
										) : I("", !0),
									],
									64,
								)
							) : (
								d(), v(
									j,
									{ key: 1 },
									[p(o), C("main", null, [(d(), N(an(e.c)))])],
									64,
								)
							),
						],
						64,
					)
				) : (d(), v("div", jr, Wr)),
			],
			64,
		)
	);
}
var Qr = Et(Vr, [["render", Gr], ["__scopeId", "data-v-47edb420"]]);
export { Qr as default };
