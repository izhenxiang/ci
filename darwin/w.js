import {
	s
	as
	J,
	r
	as
	g,
	q
	as
	fe,
	u
	as
	j,
	v
	as
	h,
	x
	as
	je,
	y
	as
	en,
	f
	as
	v,
	z
	as
	S,
	d,
	a
	as
	m,
	m
	as
	y,
	n
	as
	ne,
	e
	as
	C,
	A
	as
	nt,
	B
	as
	Y,
	b
	as
	k,
	c
	as
	V,
	j
	as
	b,
	C
	as
	F,
	D
	as
	He,
	o
	as
	L,
	E
	as
	xe,
	G
	as
	ue,
	k
	as
	tn,
	H
	as
	Le,
	I
	as
	nn,
	T
	as
	on,
	J
	as
	bt,
	K
	as
	rn,
	L
	as
	sn,
	M
	as
	ln,
	F
	as
	W,
	N
	as
	un,
	h
	as
	oe,
	t
	as
	yt,
	w,
	O
	as
	_t,
	p
	as
	gt,
	i
	as
	Et,
	_
	as
	wt,
	l
	as
	an,
	P
	as
	cn,
} from "./e.js"; /* empty css        */
import { H as Ne } from "./j.js";
import { i as z } from "./3.js";
import { x as dn } from "./5.js";
var fn = "/p.svg",
	pn = {
		setup: () => ({
			ico: J(localStorage.ico || fn),
			auto_update: () => {
				z.auto_update.show();
			},
			set: () => {
				z.open(Ne + "user_setting.html?user_token=" + localStorage.uid);
			},
			home: () => {
				z.open(Ne + "video_library.html?user_token=" + localStorage.uid);
			},
			logout: () => {
				z.camera.x(), delete localStorage.uid, delete localStorage.record, z.close(
					"show",
				), location.reload();
			},
		}),
	};
const We = Object.prototype.toString;
function Ct(e) {
	return We.call(e) === "[object Array]";
}
function Ge(e) {
	return We.call(e) === "[object String]";
}
function pe(e) {
	return We.call(e) === "[object Number]" && e === e;
}
function $t(e) {
	return typeof e == "function";
}
const Re = Symbol("ArcoConfigProvider"),
	$e = {
		formatYear: "YYYY 年",
		formatMonth: "YYYY 年 MM 月",
		today: "今天",
		view: { month: "月", year: "年", week: "周", day: "日" },
		month: {
			long: {
				January: "一月",
				February: "二月",
				March: "三月",
				April: "四月",
				May: "五月",
				June: "六月",
				July: "七月",
				August: "八月",
				September: "九月",
				October: "十月",
				November: "十一月",
				December: "十二月",
			},
			short: {
				January: "一月",
				February: "二月",
				March: "三月",
				April: "四月",
				May: "五月",
				June: "六月",
				July: "七月",
				August: "八月",
				September: "九月",
				October: "十月",
				November: "十一月",
				December: "十二月",
			},
		},
		week: {
			long: {
				self: "周",
				monday: "周一",
				tuesday: "周二",
				wednesday: "周三",
				thursday: "周四",
				friday: "周五",
				saturday: "周六",
				sunday: "周日",
			},
			short: {
				self: "周",
				monday: "一",
				tuesday: "二",
				wednesday: "三",
				thursday: "四",
				friday: "五",
				saturday: "六",
				sunday: "日",
			},
		},
	},
	hn = {
		locale: "zh-CN",
		empty: { description: "暂无数据" },
		drawer: { okText: "确定", cancelText: "取消" },
		popconfirm: { okText: "确定", cancelText: "取消" },
		modal: { okText: "确定", cancelText: "取消" },
		pagination: { goto: "前往", page: "页", countPerPage: "条/页", total: "共 {0} 条" },
		table: { okText: "确定", resetText: "重置" },
		upload: {
			start: "开始",
			cancel: "取消",
			delete: "删除",
			retry: "点击重试",
			buttonText: "点击上传",
			preview: "预览",
			drag: "点击或拖拽文件到此处上传",
			dragHover: "释放文件并开始上传",
			error: "上传失败",
		},
		datePicker: {
			view: $e.view,
			month: $e.month,
			week: $e.week,
			placeholder: {
				date: "请选择日期",
				week: "请选择周",
				month: "请选择月份",
				year: "请选择年份",
				quarter: "请选择季度",
				time: "请选择时间",
			},
			rangePlaceholder: {
				date: ["开始日期", "结束日期"],
				week: ["开始周", "结束周"],
				month: ["开始月份", "结束月份"],
				year: ["开始年份", "结束年份"],
				quarter: ["开始季度", "结束季度"],
				time: ["开始时间", "结束时间"],
			},
			selectTime: "选择时间",
			today: "今天",
			now: "此刻",
			ok: "确定",
		},
		image: { loading: "加载中" },
		imagePreview: {
			fullScreen: "全屏",
			rotateRight: "向右旋转",
			rotateLeft: "向左旋转",
			zoomIn: "放大",
			zoomOut: "缩小",
			originalSize: "原始尺寸",
		},
		typography: {
			copied: "已复制",
			copy: "复制",
			expand: "展开",
			collapse: "折叠",
			edit: "编辑",
		},
	},
	vn = g("zh-CN"),
	mn = fe({ "zh-CN": hn }),
	bn = () => {
		const e = j(Re, void 0),
			t = h(() => {
				var r;
				return (r = e?.locale) != null ? r : mn[vn.value];
			});
		return {
			locale: h(() => t.value.locale),
			t: (r, ...s) => {
				const i = r.split(".");
				let l = t.value;
				for (const u of i) {
					if (!l[u]) {
						return r;
					}
					l = l[u];
				}
				return Ge(l) && s.length > 0 ? l.replace(
					/{(\d+)}/g,
					(u, a) => {
						var f;
						return (f = s[a]) != null ? f : u;
					},
				) : l;
			},
		};
	};
var yn = Object.defineProperty,
	_n = Object.defineProperties,
	gn = Object.getOwnPropertyDescriptors,
	ot = Object.getOwnPropertySymbols,
	En = Object.prototype.hasOwnProperty,
	wn = Object.prototype.propertyIsEnumerable,
	rt = (e, t, n) =>
		t in e ? yn(
			e,
			t,
			{ enumerable: !0, configurable: !0, writable: !0, value: n },
		) : e[t] = n,
	Cn = (e, t) => {
		for (var n in t || (t = {})) En.call(t, n) && rt(e, n, t[n]);
		if (ot) {
			for (var n of ot(t)) wn.call(t, n) && rt(e, n, t[n]);
		}
		return e;
	},
	$n = (e, t) => _n(e, gn(t));
const On = "A",
	Sn = "arco",
	Ie = "$arco",
	he = (e) => {
		var t;
		return (t = e?.componentPrefix) != null ? t : On;
	},
	ve = (e, t) => {
		var n;
		t &&
			t.classPrefix &&
			(
				e.config.globalProperties[Ie] =
					$n(
						Cn({}, (n = e.config.globalProperties[Ie]) != null ? n : {}),
						{ classPrefix: t.classPrefix },
					)
			);
	},
	T = (e) => {
		var t, n, o;
		const r = je(),
			s = j(Re, void 0),
			i = (
				o =
					(n = s?.prefixCls) != null
						? n
						: (t = r?.appContext.config.globalProperties[Ie]) == null
							? void 0
							: t.classPrefix
			) != null ? o : Sn;
		return e ? `${i}-${e}` : i;
	};
var Ot = function () {
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
	Ve =
		typeof window < "u" && typeof document < "u" && window.document === document,
	ae = function () {
		return typeof global < "u" && global.Math === Math
			? global
			: typeof self < "u" && self.Math === Math
				? self
				: typeof window < "u" && window.Math === Math
					? window
					: Function("return this")();
	}(),
	kn = function () {
		return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(
			ae,
		) : function (e) {
			return setTimeout(
				function () {
					return e(Date.now());
				},
				1e3 / 60,
			);
		};
	}(),
	Tn = 2;
function Bn(e, t) {
	var n = !1, o = !1, r = 0;
	function s() {
		n && (n = !1, e()), o && l();
	}
	function i() {
		kn(s);
	}
	function l() {
		var u = Date.now();
		if (n) {
			if ((u - r) < Tn) {
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
	Dn = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
	Mn = typeof MutationObserver < "u",
	An = function () {
		function e() {
			this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ =
				null, this.observers_ = [], this.onTransitionEnd_ =
				this.onTransitionEnd_.bind(this), this.refresh =
				Bn(this.refresh.bind(this), Pn);
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
					!Ve ||
						this.connected_ ||
						(
							document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener(
								"resize",
								this.refresh,
							), Mn ? (
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
					!Ve ||
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
						r = Dn.some(function (s) {
							return !!~o.indexOf(s);
						});
					r && this.refresh();
				}, e.getInstance =
				function () {
					return (this.instance_ || (this.instance_ = new e()), this.instance_);
				}, e.instance_ = null, e
		);
	}(),
	St = function (e, t) {
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
	G = function (e) {
		var t = e && e.ownerDocument && e.ownerDocument.defaultView;
		return t || ae;
	},
	kt = me(0, 0, 0, 0);
function ce(e) {
	return parseFloat(e) || 0;
}
function it(e) {
	for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
	return t.reduce(
		function (o, r) {
			var s = e["border-" + r + "-width"];
			return o + ce(s);
		},
		0,
	);
}
function zn(e) {
	for (
		var t = ["top", "right", "bottom", "left"], n = {}, o = 0, r = t;
		o < r.length;
		o++
	) {
		var s = r[o], i = e["padding-" + s];
		n[s] = ce(i);
	}
	return n;
}
function Ln(e) {
	var t = e.getBBox();
	return me(0, 0, t.width, t.height);
}
function Nn(e) {
	var t = e.clientWidth, n = e.clientHeight;
	if (!t && !n) {
		return kt;
	}
	var o = G(e).getComputedStyle(e),
		r = zn(o),
		s = r.left + r.right,
		i = r.top + r.bottom,
		l = ce(o.width),
		u = ce(o.height);
	if (
		o.boxSizing === "border-box" && (
			Math.round(l + s) !== t && (l -= it(o, "left", "right") + s), Math.round(
				u + i,
			) !== n && (u -= it(o, "top", "bottom") + i)
		), !Vn(e)
	) {
		var a = Math.round(l + s) - t, f = Math.round(u + i) - n;
		Math.abs(a) !== 1 && (l -= a), Math.abs(f) !== 1 && (u -= f);
	}
	return me(r.left, r.top, l, u);
}
var In = function () {
	return typeof SVGGraphicsElement < "u" ? function (e) {
		return e instanceof G(e).SVGGraphicsElement;
	} : function (e) {
		return (e instanceof G(e).SVGElement) && typeof e.getBBox == "function";
	};
}();
function Vn(e) {
	return e === G(e).document.documentElement;
}
function Fn(e) {
	return Ve
		? In(e)
			? Ln(e)
			: Nn(e)
		: kt;
}
function jn(e) {
	var t = e.x,
		n = e.y,
		o = e.width,
		r = e.height,
		s = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object,
		i = Object.create(s.prototype);
	return (
		St(
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
function me(e, t, n, o) {
	return { x: e, y: t, width: n, height: o };
}
var Hn = function () {
	function e(t) {
		this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ =
			me(0, 0, 0, 0), this.target = t;
	}
	return (
		e.prototype.isActive =
			function () {
				var t = Fn(this.target);
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
	xn = function () {
		function e(t, n) {
			var o = jn(n);
			St(this, { target: t, contentRect: o });
		}
		return e;
	}(),
	Wn = function () {
		function e(t, n, o) {
			if (
				this.activeObservations_ = [], this.observations_ = new Ot(), typeof t != "function"
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
						if (!(t instanceof G(t).Element)) {
							throw new TypeError('parameter 1 is not of type "Element".');
						}
						var n = this.observations_;
						n.has(t) || (
							n.set(t, new Hn(t)), this.controller_.addObserver(this), this.controller_.refresh()
						);
					}
				}, e.prototype.unobserve =
				function (t) {
					if (!arguments.length) {
						throw new TypeError("1 argument required, but only 0 present.");
					}
					if (!(typeof Element > "u" || !(Element instanceof Object))) {
						if (!(t instanceof G(t).Element)) {
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
								return new xn(o.target, o.broadcastRect());
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
	Tt = typeof WeakMap < "u" ? new WeakMap() : new Ot(),
	Bt = function () {
		function e(t) {
			if (!(this instanceof e)) {
				throw new TypeError("Cannot call a class as a function.");
			}
			if (!arguments.length) {
				throw new TypeError("1 argument required, but only 0 present.");
			}
			var n = An.getInstance(), o = new Wn(t, n, this);
			Tt.set(this, o);
		}
		return e;
	}();
["observe", "unobserve", "disconnect"].forEach(function (e) {
	Bt.prototype[e] =
		function () {
			var t;
			return (t = Tt.get(this))[e].apply(t, arguments);
		};
});
var Pt = function () {
	return typeof ae.ResizeObserver < "u" ? ae.ResizeObserver : Bt;
}(),
	st;
(function (e) {
	e[e.ELEMENT = 1] = "ELEMENT", e[e.FUNCTIONAL_COMPONENT = 2] =
		"FUNCTIONAL_COMPONENT", e[e.STATEFUL_COMPONENT = 4] = "STATEFUL_COMPONENT", e[e.COMPONENT =
		6] = "COMPONENT", e[e.TEXT_CHILDREN = 8] = "TEXT_CHILDREN", e[e.ARRAY_CHILDREN =
		16] = "ARRAY_CHILDREN", e[e.SLOTS_CHILDREN = 32] = "SLOTS_CHILDREN", e[e.TELEPORT =
		64] = "TELEPORT", e[e.SUSPENSE = 128] = "SUSPENSE", e[e.COMPONENT_SHOULD_KEEP_ALIVE =
		256] = "COMPONENT_SHOULD_KEEP_ALIVE", e[e.COMPONENT_KEPT_ALIVE = 512] =
		"COMPONENT_KEPT_ALIVE";
})(st || (st = {}));
var lt;
(function (e) {
	e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS =
		8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] =
		"HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT =
		128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH =
		512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.DEV_ROOT_FRAGMENT =
		2048] = "DEV_ROOT_FRAGMENT", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] =
		"BAIL";
})(lt || (lt = {}));
const Gn = (e) => e?.$ !== void 0,
	Dt = (e) => Boolean(e && e.shapeFlag & 1),
	Mt = (e, t) => Boolean(e && e.shapeFlag & 6),
	At = (e, t) => Boolean(e && e.shapeFlag & 16),
	Rn = (e, t) => Boolean(e && e.shapeFlag & 32),
	Yn = (e) => {
		if (!e) {
			return !0;
		}
		for (const t of e) if (t.children) {
			return !1;
		}
		return !0;
	},
	Fe = (e, t) => {
		var n, o, r;
		for (let s = 0; s < e.length; s++) {
			const i = e[s];
			if (Dt(i) || Mt(i)) {
				const l = $t(t) ? t(i) : t;
				return (e[s] = en(i, l, !0), !0);
			}
			if (At(i, i.children)) {
				if (Fe(i.children, t)) {
					return !0;
				}
			} else if (Rn(i, i.children)) {
				const l = (
					r = (o = (n = i.children).default) == null ? void 0 : o.call(n)
				) != null ? r : [];
				if (Fe(l, t)) {
					return (e[s] = v(i, null, { default: () => l }), !0);
				}
			}
		}
		return !1;
	},
	de = (e) => {
		var t;
		if (Ct(e)) {
			for (const n of e) {
				const o = de(n);
				if (o) {
					return o;
				}
			}
		} else {
			if ((Dt(e) || Mt(e)) && ((t = e.el) == null ? void 0 : t.nodeType) === 1) {
				return e.el;
			}
			if (At(e, e.children)) {
				for (const n of e.children) {
					const o = de(n);
					if (o) {
						return o;
					}
				}
			}
		}
		return null;
	},
	zt = typeof window > "u" ? global : window,
	qn = zt.requestAnimationFrame,
	ut = zt.cancelAnimationFrame;
function Un(e) {
	let t = 0;
	const n = (...o) => {
		t && ut(t), t =
			qn(() => {
				e(...o), t = 0;
			});
	};
	return (
		n.cancel =
			() => {
				ut(t), t = 0;
			}, n
	);
}
const Ye = () => {},
	qe = (() => {
		try {
			return !(typeof window < "u" && document !== void 0);
		} catch {
			return !0;
		}
	})(),
	Kn = (
		() =>
			qe ? Ye : (e, t, n, o = !1) => {
				e.addEventListener(t, n, o);
			}
	)(),
	Zn = (
		() =>
			qe ? Ye : (e, t, n, o = !1) => {
				e.removeEventListener(t, n, o);
			}
	)(),
	Xn = (e, t) => {
		var n;
		return qe
			? Ye()
			: (n = (t ?? document).querySelector(e)) != null
				? n
				: void 0;
	},
	at = (e, t) => {
		if (Ge(e)) {
			const n = e[0] === "#" ? `[id='${e.slice(1)}']` : e;
			return Xn(n, t);
		}
		return e;
	};
var B = (e, t) => {
	for (const [n, o] of t) e[n] = o;
	return e;
};
const Jn = S({
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
			n = h(() => [t, `${t}-loading`, { [`${t}-spin`]: e.spin }]),
			o = h(() => {
				if (e.size) {
					return { fontSize: pe(e.size) ? `${e.size}px` : e.size };
				}
			});
		return { cls: n, sizeStyle: o };
	},
}),
	Qn = ["stroke-width", "stroke-linecap", "stroke-linejoin"],
	eo = C(
		"path",
		{ d: "M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6" },
		null,
		-1,
	),
	to = [eo];
function no(e, t, n, o, r, s) {
	return (
		d(), m(
			"svg",
			{
				viewBox: "0 0 48 48",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				stroke: "currentColor",
				class: y(e.cls),
				style: ne(e.sizeStyle),
				"stroke-width": e.strokeWidth,
				"stroke-linecap": e.strokeLinecap,
				"stroke-linejoin": e.strokeLinejoin,
			},
			to,
			14,
			Qn,
		)
	);
}
var Oe = B(Jn, [["render", no]]);
const oo = Object.assign(
	Oe,
	{
		install: (e, t) => {
			var n;
			const o = (n = t?.iconPrefix) != null ? n : "";
			e.component(o + Oe.name, Oe);
		},
	},
),
	ro = Symbol("ArcoFormItemContext"),
	io = ({ size: e, disabled: t, error: n, uninject: o } = {}) => {
		const r = o ? {} : j(ro, {}),
			s = h(() => {
				var f;
				return (f = e?.value) != null ? f : r.size;
			}),
			i = h(() => t?.value || r.disabled),
			l = h(() => n?.value || r.error),
			u = nt(r, "feedback"),
			a = nt(r, "eventHandlers");
		return {
			formItemCtx: r,
			mergedSize: s,
			mergedDisabled: i,
			mergedError: l,
			feedback: u,
			eventHandlers: a,
		};
	},
	so = (e, { defaultValue: t = "medium" } = {}) => {
		const n = j(Re, void 0);
		return {
			mergedSize: h(() => {
				var r, s;
				return (s = (r = e?.value) != null ? r : n?.size) != null ? s : t;
			}),
		};
	},
	Lt = Symbol("ArcoButtonGroup"),
	lo = S({
		name: "Button",
		components: { IconLoading: oo },
		props: {
			type: { type: String },
			shape: { type: String },
			status: { type: String },
			size: { type: String },
			long: { type: Boolean, default: !1 },
			loading: { type: Boolean, default: !1 },
			disabled: { type: Boolean },
			htmlType: { type: String, default: "button" },
			href: String,
			onClick: { type: [Function, Array] },
		},
		emits: ["click"],
		setup(e, { emit: t }) {
			const { size: n, disabled: o } = Y(e),
				r = T("btn"),
				s = j(Lt, void 0),
				i = h(() => {
					var P;
					return (P = n.value) != null ? P : s?.size;
				}),
				l = h(() => Boolean(o.value || s?.disabled)),
				{ mergedSize: u, mergedDisabled: a } = io({ size: i, disabled: l }),
				{ mergedSize: f } = so(u),
				p = h(() => {
					var P, q, U, K, re, D;
					return [
						r,
						`${r}-${
							(q = (P = e.type) != null ? P : s?.type) != null ? q : "secondary"
						}`,
						`${r}-shape-${
							(K = (U = e.shape) != null ? U : s?.shape) != null ? K : "square"
						}`,
						`${r}-size-${f.value}`,
						`${r}-status-${
							(D = (re = e.status) != null ? re : s?.status) != null ? D : "normal"
						}`,
						{
							[`${r}-long`]: e.long,
							[`${r}-loading`]: e.loading,
							[`${r}-disabled`]: a.value,
							[`${r}-link`]: Ge(e.href),
						},
					];
				});
			return {
				prefixCls: r,
				cls: p,
				mergedDisabled: a,
				handleClick: (P) => {
					e.disabled || e.loading || t("click", P);
				},
			};
		},
	}),
	uo = ["href"],
	ao = ["type", "disabled"];
function co(e, t, n, o, r, s) {
	const i = k("icon-loading");
	return e.href ? (
		d(), m(
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
					d(), m(
						"span",
						{ key: 0, class: y(`${e.prefixCls}-icon`) },
						[
							e.loading ? (d(), V(i, { key: 0, spin: "true" })) : b(
								e.$slots,
								"icon",
								{ key: 1 },
							),
						],
						2,
					)
				) : F("v-if", !0),
				b(e.$slots, "default"),
			],
			10,
			uo,
		)
	) : (
		d(), m(
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
					d(), m(
						"span",
						{ key: 0, class: y(`${e.prefixCls}-icon`) },
						[
							e.loading ? (d(), V(i, { key: 0, spin: !0 })) : b(
								e.$slots,
								"icon",
								{ key: 1 },
							),
						],
						2,
					)
				) : F("v-if", !0),
				b(e.$slots, "default"),
			],
			10,
			ao,
		)
	);
}
var Se = B(lo, [["render", co]]);
const fo = S({
	name: "ButtonGroup",
	props: {
		type: { type: String },
		status: { type: String },
		shape: { type: String },
		size: { type: String },
		disabled: { type: Boolean },
	},
	setup(e) {
		const { type: t, size: n, status: o, disabled: r, shape: s } = Y(e),
			i = T("btn-group");
		return (
			He(Lt, fe({ type: t, size: n, shape: s, status: o, disabled: r })), {
				prefixCls: i,
			}
		);
	},
});
function po(e, t, n, o, r, s) {
	return (d(), m("div", { class: y(e.prefixCls) }, [b(e.$slots, "default")], 2));
}
var se = B(fo, [["render", po]]);
const ho = Object.assign(
	Se,
	{
		Group: se,
		install: (e, t) => {
			ve(e, t);
			const n = he(t);
			e.component(n + Se.name, Se), e.component(n + se.name, se);
		},
	},
);
var vo = Object.defineProperty,
	ct = Object.getOwnPropertySymbols,
	mo = Object.prototype.hasOwnProperty,
	bo = Object.prototype.propertyIsEnumerable,
	dt = (e, t, n) =>
		t in e ? vo(
			e,
			t,
			{ enumerable: !0, configurable: !0, writable: !0, value: n },
		) : e[t] = n,
	Q = (e, t) => {
		for (var n in t || (t = {})) mo.call(t, n) && dt(e, n, t[n]);
		if (ct) {
			for (var n of ct(t)) bo.call(t, n) && dt(e, n, t[n]);
		}
		return e;
	};
const yo = () => ({
	width: document.documentElement.clientWidth || window.innerWidth,
	height: document.documentElement.clientHeight || window.innerHeight,
}),
	ft = (e, t) => {
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
	_o = (e) => {
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
	ie = (e, t) => {
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
	go = (
		e,
		t,
		{ containerRect: n, triggerRect: o, popupRect: r, offset: s, translate: i },
	) => {
		const l = _o(e),
			u = yo(),
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
				const p = ee("bottom", o, r, { offset: s, translate: i });
				(u.height - (n.top + p.top + r.height)) > 0 && (
					f = ie(e, "bottom"), t.top = p.top
				);
			}
		}
		if (l === "bottom" && a.bottom < 0) {
			if ((u.height - o.bottom) > r.height) {
				t.top = -n.top + (u.height - r.height);
			} else {
				const p = ee("top", o, r, { offset: s, translate: i });
				(n.top + p.top) > 0 && (f = ie(e, "top"), t.top = p.top);
			}
		}
		if (l === "left" && a.left < 0) {
			if (o.left > r.width) {
				t.left = -n.left;
			} else {
				const p = ee("right", o, r, { offset: s, translate: i });
				(u.width - (n.left + p.left + r.width)) > 0 && (
					f = ie(e, "right"), t.left = p.left
				);
			}
		}
		if (l === "right" && a.right < 0) {
			if ((u.width - o.right) > r.width) {
				t.left = -n.left + (u.width - r.width);
			} else {
				const p = ee("left", o, r, { offset: s, translate: i });
				(n.left + p.left) > 0 && (f = ie(e, "left"), t.left = p.left);
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
	ee = (e, t, n, { offset: o = 0, translate: r = [0, 0] } = {}) => {
		var s;
		const i = (s = Ct(r) ? r : r[e]) != null ? s : [0, 0];
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
	Eo = (e) => {
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
	wo = (
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
		let u = e, a = ee(e, n, o, { offset: r, translate: s });
		if (l) {
			const p = go(
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
			a = p.popupPosition, u = p.position;
		}
		return {
			style: Q({ left: `${a.left}px`, top: `${a.top}px` }, i),
			position: u,
		};
	},
	Co = (e, t, n, { customStyle: o = {} }) => {
		if (["top", "tl", "tr", "bottom", "bl", "br"].includes(e)) {
			let s = Math.abs(t.scrollLeft + (t.width / 2) - n.scrollLeft);
			return (
				s > (n.width - 8) && (
					t.width > n.width ? s = n.width / 2 : s = n.width - 8
				), ["top", "tl", "tr"].includes(e) ? Q(
					{
						left: `${s}px`,
						bottom: "0",
						transform: "translate(-50%,50%) rotate(45deg)",
					},
					o,
				) : Q(
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
			), ["left", "lt", "lb"].includes(e) ? Q(
				{
					top: `${r}px`,
					right: "0",
					transform: "translate(50%,-50%) rotate(45deg)",
				},
				o,
			) : Q(
				{
					top: `${r}px`,
					left: "0",
					transform: "translate(-50%,-50%) rotate(45deg)",
				},
				o,
			)
		);
	},
	$o = (e) => e.scrollHeight > e.offsetHeight || e.scrollWidth > e.offsetWidth,
	Oo = (e) => {
		const t = [];
		let n = e;
		for (; n && n !== document.documentElement; ) $o(n) && t.push(n), n =
			n.parentElement;
		return t;
	},
	So = S({
		name: "ResizeObserver",
		props: { watchOnUpdated: Boolean },
		emits: ["resize"],
		setup(e, { emit: t }) {
			const n = je();
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
			L(() => {
				if (n?.subTree) {
					const l = de(n.subTree);
					l && (i.value = l, r(l));
				}
			}), xe(() => {
				if (e.watchOnUpdated && n?.subTree) {
					const l = de(n.subTree);
					l !== i.value && (o && s(), l && (i.value = l, r(l)));
				}
			}), ue(() => {
				s();
			});
		},
	});
function ko(e, t, n, o, r, s) {
	return b(e.$slots, "default");
}
var pt = B(So, [["render", ko]]);
function To(e, t) {
	const n = g(e[t]);
	return (
		xe(() => {
			const o = e[t];
			n.value !== o && (n.value = o);
		}), n
	);
}
const ht = Symbol("ArcoTrigger"), Bo = 1e3, Po = 1;
class Do {
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
		return (this.zIndex ? this.zIndex += Po : this.zIndex = Bo, this.zIndex);
	}
	open(t) {
		this.popupStack.add(t);
	}
	close(t) {
		this.popupStack.delete(t);
	}
}
let I;
const Mo = (() => {
	let e = 0;
	return (t = "") => (e += 1, `${t}${e}`);
})();
function Ao({ visible: e, runOnMounted: t } = {}) {
	const n = Mo(), o = g();
	I || (I = new Do());
	const r = h(() => o.value || 0), s = () => (o.value = I.nextZIndex(), o.value);
	L(() => {
		const u = je();
		I.registerInstance(n, u);
	}), ue(() => {
		I.deregisterInstance(n);
	});
	const i = () => {
		I.open(n), o.value = s();
	},
		l = () => {
			I.close(n);
		};
	return (
		e ? tn(() => {
			e.value ? i() : l();
		}) : t && (
			L(() => {
				i();
			}), ue(() => {
				l();
			})
		), { id: n, zIndex: r, nextZIndex: s, close: l, open: i }
	);
}
const zo = ({ elementRef: e, onResize: t }) => {
	let n;
	return {
		createResizeObserver: () => {
			!e.value || (
				n =
					new Pt(
						(s) => {
							const i = s[0];
							$t(t) && t(i);
						},
					), n.observe(e.value)
			);
		},
		destroyResizeObserver: () => {
			n && (n.disconnect(), n = null);
		},
	};
};
var Lo = S({
	name: "ClientOnly",
	setup(e, { slots: t }) {
		const n = g(!1);
		return (
			L(() => n.value = !0), () => {
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
const No = (
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
			const l = at(e.value),
				u = l ? e.value : n,
				a = l ?? (o ? document.documentElement : at(n));
			u !== r.value && (r.value = u), a !== s.value && (s.value = a);
		};
	return (
		L(() => i()), Le(
			t,
			(l) => {
				r.value !== e.value && l && i();
			},
		), { teleportContainer: r, containerRef: s }
	);
};
var Io = Object.defineProperty,
	Vo = Object.defineProperties,
	Fo = Object.getOwnPropertyDescriptors,
	vt = Object.getOwnPropertySymbols,
	jo = Object.prototype.hasOwnProperty,
	Ho = Object.prototype.propertyIsEnumerable,
	mt = (e, t, n) =>
		t in e ? Io(
			e,
			t,
			{ enumerable: !0, configurable: !0, writable: !0, value: n },
		) : e[t] = n,
	xo = (e, t) => {
		for (var n in t || (t = {})) jo.call(t, n) && mt(e, n, t[n]);
		if (vt) {
			for (var n of vt(t)) Ho.call(t, n) && mt(e, n, t[n]);
		}
		return e;
	},
	Wo = (e, t) => Vo(e, Fo(t));
function Go(e) {
	return typeof e == "function" || (
		Object.prototype.toString.call(e) === "[object Object]" && !nn(e)
	);
}
var ke = S({
	name: "Trigger",
	inheritAttrs: !1,
	props: {
		popupVisible: { type: Boolean, default: void 0 },
		defaultPopupVisible: { type: Boolean, default: !1 },
		trigger: { type: [String, Array], default: "hover" },
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
		const { popupContainer: r } = Y(e),
			s = T("trigger"),
			i = h(() => [].concat(e.trigger)),
			l = new Set(),
			u = j(ht, void 0),
			a = g(),
			f = h(() => Gn(a.value) ? a.value.$el : a.value),
			p = g(),
			be = g(e.defaultPopupVisible),
			P = g(e.position),
			q = g({}),
			U = g({}),
			K = g({}),
			re = g(),
			D = g({ top: 0, left: 0 }),
			_ = h(() => {
				var c;
				return (c = e.popupVisible) != null ? c : be.value;
			}),
			{ teleportContainer: jt, containerRef: ye } = No({
				popupContainer: r,
				visible: _,
				documentContainer: !0,
			}),
			{ zIndex: Ht } = Ao({ visible: _ });
		let Z = 0, X = !1;
		const xt = () => {
			Z && (window.clearTimeout(Z), Z = 0);
		},
			_e = (c) => {
				if (e.alignPoint) {
					const { pageX: $, pageY: O } = c;
					D.value = { top: O, left: $ };
				}
			},
			H = () => {
				if (!f.value || !p.value || !ye.value) {
					return;
				}
				const c = ye.value.getBoundingClientRect(),
					$ = e.alignPoint ? {
						top: D.value.top,
						bottom: D.value.top,
						left: D.value.left,
						right: D.value.left,
						scrollTop: D.value.top,
						scrollBottom: D.value.top,
						scrollLeft: D.value.left,
						scrollRight: D.value.left,
						width: 0,
						height: 0,
					} : ft(f.value, c),
					O = ft(p.value, c),
					{ style: M, position: x } = wo(
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
				e.autoFitTransformOrigin && (U.value = { transformOrigin: Eo(x) }), e.autoFitPopupMinWidth ? M.minWidth =
					`${$.width}px` : e.autoFitPopupWidth && (M.width = `${$.width}px`), P.value !== x && (
					P.value = x
				), q.value = M, e.showArrow && (
					K.value = Co(x, $, O, { customStyle: e.arrowStyle })
				);
			},
			N = (c, $) => {
				if (c === _.value && Z === 0) {
					return;
				}
				const O = () => {
					be.value = c, t("update:popupVisible", c), t("popupVisibleChange", c), c && un(() => {
						H();
					});
				};
				$ ? (xt(), c !== _.value && (Z = window.setTimeout(O, $))) : O();
			},
			Wt = (c) => {
				e.disabled ||
					!i.value.includes("click") ||
					(_.value && !e.clickToClose) ||
					(_e(c), N(!_.value));
			},
			Ze = (c) => {
				e.disabled ||
					!i.value.includes("hover") ||
					(_e(c), N(!0, e.mouseEnterDelay));
			},
			Xe = (c) => {
				u?.onMouseenter(c), Ze(c);
			},
			Je = (c) => {
				e.disabled || !i.value.includes("hover") || N(!1, e.mouseLeaveDelay);
			},
			Qe = (c) => {
				u?.onMouseleave(c), Je();
			},
			Gt = (c) => {
				e.disabled || !i.value.includes("focus") || N(!0, e.focusDelay);
			},
			Rt = (c) => {
				e.disabled || !i.value.includes("focus") || !e.blurToClose || N(!1);
			},
			Yt = (c) => {
				c.preventDefault(), !(
					e.disabled ||
						!i.value.includes("contextMenu") ||
						(_.value && !e.clickToClose)
				) && (_e(c), N(!_.value));
			};
		He(
			ht,
			fe({
				onMouseenter: Xe,
				onMouseleave: Qe,
				addChildRef: (c) => {
					l.add(c), u?.addChildRef(c);
				},
				removeChildRef: (c) => {
					l.delete(c), u?.removeChildRef(c);
				},
			}),
		);
		const ge = () => {
			Zn(document.documentElement, "mousedown", tt), X = !1;
		},
			et = To(n, "content"),
			qt = h(() => {
				var c;
				return e.hideEmpty && Yn((c = et.value) == null ? void 0 : c.call(et));
			}),
			tt = (c) => {
				var $, O, M;
				if (
					!(
						(($ = f.value) == null ? void 0 : $.contains(c.target)) || (
							(O = p.value) == null ? void 0 : O.contains(c.target)
						)
					)
				) {
					for (const x of l) if ((M = x.value) != null && M.contains(c.target)) {
						return;
					}
					ge(), N(!1);
				}
			},
			Ee = Un(() => {
				_.value && H();
			}),
			we = () => {
				_.value && H();
			},
			Ut = (c) => {
				e.preventFocus && c.preventDefault();
			};
		u?.addChildRef(p);
		const Kt = h(() => _.value ? e.openedClass : void 0);
		let A;
		Le(
			_,
			(c) => {
				if (
					e.clickOutsideToClose && (
						!c && X ? ge() : c &&
							!X &&
							(Kn(document.documentElement, "mousedown", tt), X = !0)
					), e.updateAtScroll
				) {
					if (c) {
						A = Oo(f.value);
						for (const $ of A) $.addEventListener("scroll", Ee);
					} else if (A) {
						for (const $ of A) $.removeEventListener("scroll", Ee);
						A = void 0;
					}
				}
				c && (Ce.value = !0);
			},
		), Le(
			() => [e.autoFitPopupWidth, e.autoFitPopupMinWidth],
			() => {
				_.value && H();
			},
		);
		const { createResizeObserver: Zt, destroyResizeObserver: Xt } = zo({
			elementRef: ye,
			onResize: we,
		});
		L(() => {
			Zt(), _.value && H();
		}), xe(() => {
			_.value && H();
		}), ue(() => {
			if (u?.removeChildRef(p), Xt(), X && ge(), A) {
				for (const c of A) c.removeEventListener("scroll", Ee);
				A = void 0;
			}
		});
		const Ce = g(_.value),
			Jt = () => {
				_.value && t("show");
			},
			Qt = () => {
				_.value || (Ce.value = !1, t("hide"));
			};
		return () => {
			var c, $;
			const O = ($ = (c = n.default) == null ? void 0 : c.call(n)) != null ? $ : [];
			return (
				Fe(
					O,
					{
						ref: a,
						class: Kt.value,
						onClick: Wt,
						onMouseenter: Ze,
						onMouseleave: Je,
						onFocusin: Gt,
						onFocusout: Rt,
						onContextmenu: Yt,
					},
				), v(
					W,
					null,
					[
						e.autoFixPosition ? v(
							pt,
							{ onResize: we },
							Go(O) ? O : { default: () => [O] },
						) : O,
						v(
							Lo,
							null,
							{
								default: () => [
									v(
										on,
										{ to: jt.value, disabled: !e.renderToBody },
										{
											default: () => [
												(!e.unmountOnClose || _.value || Ce.value) &&
													!qt.value &&
													v(
														pt,
														{ onResize: we },
														{
															default: () => [
																v(
																	"div",
																	bt(
																		{
																			ref: p,
																			class: [
																				`${s}-popup`,
																				`${s}-position-${P.value}`,
																			],
																			style: Wo(
																				xo({}, q.value),
																				{ zIndex: Ht.value },
																			),
																			"trigger-placement": P.value,
																			onMouseenter: Xe,
																			onMouseleave: Qe,
																			onMousedown: Ut,
																		},
																		o,
																	),
																	[
																		v(
																			rn,
																			{
																				name: e.animationName,
																				duration: e.duration,
																				appear: !0,
																				onAfterEnter: Jt,
																				onAfterLeave: Qt,
																			},
																			{
																				default: () => {
																					var M;
																					return [
																						sn(
																							v(
																								"div",
																								{
																									class: `${s}-popup-wrapper`,
																									style: U.value,
																								},
																								[
																									v(
																										"div",
																										{
																											class: [
																												`${s}-content`,
																												e.contentClass,
																											],
																											style: e.contentStyle,
																										},
																										[
																											(M = n.content) == null ? void 0 : M.call(
																												n,
																											),
																										],
																									),
																									e.showArrow && v(
																										"div",
																										{
																											ref: re,
																											class: [
																												`${s}-arrow`,
																												e.arrowClass,
																											],
																											style: K.value,
																										},
																										null,
																									),
																								],
																							),
																							[[ln, _.value]],
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
const Nt = Object.assign(
	ke,
	{
		install: (e, t) => {
			ve(e, t);
			const n = he(t);
			e.component(n + ke.name, ke);
		},
	},
),
	Ro = S({
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
				n = h(() => [t, `${t}-empty`, { [`${t}-spin`]: e.spin }]),
				o = h(() => {
					if (e.size) {
						return { fontSize: pe(e.size) ? `${e.size}px` : e.size };
					}
				});
			return { cls: n, sizeStyle: o };
		},
	}),
	Yo = ["stroke-width", "stroke-linecap", "stroke-linejoin"],
	qo = C(
		"path",
		{
			d: "M24 5v6m7 1 4-4m-18 4-4-4m28.5 22H28s-1 3-4 3-4-3-4-3H6.5M40 41H8a2 2 0 0 1-2-2v-8.46a2 2 0 0 1 .272-1.007l6.15-10.54A2 2 0 0 1 14.148 18H33.85a2 2 0 0 1 1.728.992l6.149 10.541A2 2 0 0 1 42 30.541V39a2 2 0 0 1-2 2Z",
		},
		null,
		-1,
	),
	Uo = [qo];
function Ko(e, t, n, o, r, s) {
	return (
		d(), m(
			"svg",
			{
				viewBox: "0 0 48 48",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				stroke: "currentColor",
				class: y(e.cls),
				style: ne(e.sizeStyle),
				"stroke-width": e.strokeWidth,
				"stroke-linecap": e.strokeLinecap,
				"stroke-linejoin": e.strokeLinejoin,
			},
			Uo,
			14,
			Yo,
		)
	);
}
var Te = B(Ro, [["render", Ko]]);
const Zo = Object.assign(
	Te,
	{
		install: (e, t) => {
			var n;
			const o = (n = t?.iconPrefix) != null ? n : "";
			e.component(o + Te.name, Te);
		},
	},
),
	Xo = S({
		name: "Empty",
		components: { IconEmpty: Zo },
		props: { description: String, imgSrc: String },
		setup() {
			const e = T("empty"), { t } = bn();
			return { prefixCls: e, t };
		},
	}),
	Jo = ["src", "alt"];
function Qo(e, t, n, o, r, s) {
	const i = k("icon-empty");
	return (
		d(), m(
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
									d(), m(
										"img",
										{ key: 0, src: e.imgSrc, alt: e.description || "empty" },
										null,
										8,
										Jo,
									)
								) : (d(), V(i, { key: 1 })),
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
							() => [oe(yt(e.description || e.t("empty.description")), 1)],
						),
					],
					2,
				),
			],
			2,
		)
	);
}
var Be = B(Xo, [["render", Qo]]);
const er = Object.assign(
	Be,
	{
		install: (e, t) => {
			ve(e, t);
			const n = he(t);
			e.component(n + Be.name, Be);
		},
	},
),
	tr = S({
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
				n = h(() => [t, `${t}-more`, { [`${t}-spin`]: e.spin }]),
				o = h(() => {
					if (e.size) {
						return { fontSize: pe(e.size) ? `${e.size}px` : e.size };
					}
				});
			return { cls: n, sizeStyle: o };
		},
	}),
	nr = ["stroke-width", "stroke-linecap", "stroke-linejoin"],
	or = C(
		"path",
		{
			d: "M38 25v-2h2v2h-2ZM23 25v-2h2v2h-2ZM8 25v-2h2v2H8Z",
			fill: "currentColor",
			stroke: "none",
		},
		null,
		-1,
	),
	rr = C(
		"path",
		{ d: "M38 25v-2h2v2h-2ZM23 25v-2h2v2h-2ZM8 25v-2h2v2H8Z" },
		null,
		-1,
	),
	ir = [or, rr];
function sr(e, t, n, o, r, s) {
	return (
		d(), m(
			"svg",
			{
				viewBox: "0 0 48 48",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				stroke: "currentColor",
				class: y(e.cls),
				style: ne(e.sizeStyle),
				"stroke-width": e.strokeWidth,
				"stroke-linecap": e.strokeLinecap,
				"stroke-linejoin": e.strokeLinejoin,
			},
			ir,
			14,
			nr,
		)
	);
}
var Pe = B(tr, [["render", sr]]);
const lr = Object.assign(
	Pe,
	{
		install: (e, t) => {
			var n;
			const o = (n = t?.iconPrefix) != null ? n : "";
			e.component(o + Pe.name, Pe);
		},
	},
),
	ur = S({
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
				n = h(() => [t, `${t}-right`, { [`${t}-spin`]: e.spin }]),
				o = h(() => {
					if (e.size) {
						return { fontSize: pe(e.size) ? `${e.size}px` : e.size };
					}
				});
			return { cls: n, sizeStyle: o };
		},
	}),
	ar = ["stroke-width", "stroke-linecap", "stroke-linejoin"],
	cr = C("path", { d: "m16 39.513 15.556-15.557L16 8.4" }, null, -1),
	dr = [cr];
function fr(e, t, n, o, r, s) {
	return (
		d(), m(
			"svg",
			{
				viewBox: "0 0 48 48",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				stroke: "currentColor",
				class: y(e.cls),
				style: ne(e.sizeStyle),
				"stroke-width": e.strokeWidth,
				"stroke-linecap": e.strokeLinecap,
				"stroke-linejoin": e.strokeLinejoin,
			},
			dr,
			14,
			ar,
		)
	);
}
var De = B(ur, [["render", fr]]);
const pr = Object.assign(
	De,
	{
		install: (e, t) => {
			var n;
			const o = (n = t?.iconPrefix) != null ? n : "";
			e.component(o + De.name, De);
		},
	},
),
	hr = S({
		name: "DropdownPanel",
		components: { Empty: er },
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
				i = h(() => [o, { [`${o}-has-footer`]: Boolean(n.footer) }]);
			return { prefixCls: o, cls: i, wrapperRef: r, handleScroll: s };
		},
	});
function vr(e, t, n, o, r, s) {
	const i = k("empty");
	return (
		d(), m(
			"div",
			{ class: y(e.cls) },
			[
				e.isEmpty ? (
					d(), m(
						"div",
						{ key: 0, class: y(`${e.prefixCls}-empty`) },
						[b(e.$slots, "empty", {}, () => [v(i)])],
						2,
					)
				) : F("v-if", !0),
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
					d(), m(
						"div",
						{ key: 1, class: y(`${e.prefixCls}-footer`) },
						[b(e.$slots, "footer")],
						2,
					)
				) : F("v-if", !0),
			],
			2,
		)
	);
}
var It = B(hr, [["render", vr]]);
const Ue = ({ popupVisible: e, defaultPopupVisible: t, emit: n }) => {
	var o;
	const r = g((o = t?.value) != null ? o : !1),
		s = h(() => {
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
	Vt = Symbol("ArcoDropdown"),
	mr = S({
		name: "Dropdown",
		components: { Trigger: Nt, DropdownPanel: It },
		props: {
			popupVisible: { type: Boolean, default: void 0 },
			defaultPopupVisible: { type: Boolean, default: !1 },
			trigger: { type: [String, Array], default: "click" },
			position: { type: String, default: "bottom" },
			popupContainer: { type: [String, Object] },
		},
		emits: ["update:popupVisible", "popupVisibleChange", "select"],
		setup(e, { emit: t }) {
			const { defaultPopupVisible: n, popupVisible: o } = Y(e),
				r = T("dropdown"),
				{ computedPopupVisible: s, handlePopupVisibleChange: i } = Ue({
					defaultPopupVisible: n,
					popupVisible: o,
					emit: t,
				});
			return (
				He(
					Vt,
					fe({
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
function br(e, t, n, o, r, s) {
	const i = k("DropdownPanel"), l = k("Trigger");
	return (
		d(), V(
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
						v(
							i,
							null,
							_t(
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
var le = B(mr, [["render", br]]);
const yr = S({
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
			o = h(() => {
				var a, f, p;
				return (
					p =
						(f = e.value) != null
							? f
							: (a = n.value) == null
								? void 0
								: a.textContent
				) != null ? p : void 0;
			}),
			r = e.uninjectContext ? void 0 : j(Vt, void 0),
			s = (a) => {
				e.disabled || r?.onOptionClick(o.value, a);
			},
			i = (a) => {
				e.disabled;
			},
			l = (a) => {
				e.disabled;
			},
			u = h(
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
function _r(e, t, n, o, r, s) {
	return (
		d(), m(
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
					d(), m(
						"span",
						{ key: 0, class: y(`${e.prefixCls}-icon`) },
						[b(e.$slots, "icon")],
						2,
					)
				) : F("v-if", !0),
				C(
					"span",
					{ class: y(`${e.prefixCls}-content`) },
					[b(e.$slots, "default")],
					2,
				),
				e.$slots.suffix ? (
					d(), m(
						"span",
						{ key: 1, class: y(`${e.prefixCls}-suffix`) },
						[b(e.$slots, "suffix")],
						2,
					)
				) : F("v-if", !0),
			],
			34,
		)
	);
}
var te = B(yr, [["render", _r]]);
const gr = S({
	name: "Dgroup",
	props: { title: String },
	setup() {
		return { prefixCls: T("dropdown-group") };
	},
});
function Er(e, t, n, o, r, s) {
	return (
		d(), m(
			W,
			null,
			[
				C(
					"li",
					{ class: y(`${e.prefixCls}-title`) },
					[b(e.$slots, "title", {}, () => [oe(yt(e.title), 1)])],
					2,
				),
				b(e.$slots, "default"),
			],
			64,
		)
	);
}
var Me = B(gr, [["render", Er]]);
const wr = S({
	name: "Dsubmenu",
	components: {
		Trigger: Nt,
		DropdownPanel: It,
		DropdownOption: te,
		IconRight: pr,
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
		const { defaultPopupVisible: n, popupVisible: o } = Y(e),
			r = T("dropdown"),
			{ computedPopupVisible: s, handlePopupVisibleChange: i } = Ue({
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
function Cr(e, t, n, o, r, s) {
	const i = k("IconRight"),
		l = k("dropdown-option"),
		u = k("dropdown-panel"),
		a = k("Trigger");
	return (
		d(), V(
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
						v(
							u,
							{ class: y(`${e.prefixCls}-submenu`) },
							_t(
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
						v(
							l,
							{ active: e.computedPopupVisible, "uninject-context": "" },
							{
								suffix: w(() => [v(i)]),
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
var Ae = B(wr, [["render", Cr]]);
const $r = S({
	name: "DropdownButton",
	components: { IconMore: lr, Button: ho, ButtonGroup: se, Dropdown: le },
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
		const { defaultPopupVisible: n, popupVisible: o } = Y(e),
			r = T("dropdown"),
			{ computedPopupVisible: s, handlePopupVisibleChange: i } = Ue({
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
function Or(e, t, n, o, r, s) {
	const i = k("Button"),
		l = k("IconMore"),
		u = k("Dropdown"),
		a = k("ButtonGroup");
	return (
		d(), V(
			a,
			null,
			{
				default: w(
					() => [
						v(
							i,
							bt(
								{ size: e.size, type: e.type, disabled: e.disabled },
								e.buttonProps,
								{ onClick: e.handleClick },
							),
							{ default: w(() => [b(e.$slots, "default")]), _: 3 },
							16,
							["size", "type", "disabled", "onClick"],
						),
						v(
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
										v(
											i,
											{ size: e.size, type: e.type, disabled: e.disabled },
											{
												icon: w(() => [b(e.$slots, "icon", {}, () => [v(l)])]),
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
var ze = B($r, [["render", Or]]);
const Sr = Object.assign(
	le,
	{
		Option: te,
		Group: Me,
		Submenu: Ae,
		Button: ze,
		install: (e, t) => {
			ve(e, t);
			const n = he(t);
			e.component(n + le.name, le), e.component(n + te.name, te), e.component(
				n + Me.name,
				Me,
			), e.component(n + Ae.name, Ae), e.component(n + ze.name, ze);
		},
	},
);
const Ft = (e) => (gt("data-v-b77ebd36"), e = e(), Et(), e),
	kr = Ft(() => C("a", { class: "logo", href: "#main" }, null, -1)),
	Tr = Ft(() => C("a", { class: "msg" }, null, -1)),
	Br = oe("账号设置"),
	Pr = oe("检测更新"),
	Dr = oe("退出登录");
function Mr(e, t) {
	const n = te, o = Sr;
	return (
		d(), m(
			"header",
			null,
			[
				kr,
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
						Tr,
						v(
							o,
							null,
							{
								content: w(
									() => [
										v(
											n,
											{ onClick: e.set },
											{ default: w(() => [Br]), _: 1 },
											8,
											["onClick"],
										),
										v(
											n,
											{ onClick: e.auto_update },
											{ default: w(() => [Pr]), _: 1 },
											8,
											["onClick"],
										),
										v(
											n,
											{ class: "logout", onClick: e.logout },
											{ default: w(() => [Dr]), _: 1 },
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
												style: ne("background-image:url(" + e.ico + ")"),
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
var Ar = wt(pn, [["render", Mr], ["__scopeId", "data-v-b77ebd36"]]),
	zr = "https://matomo.dalukuankuan.com/",
	R;
R = window._paq = window._paq || [];
R.push(["setCustomDimension", 1, await z.auto_update.ver_now()]);
R.push(["trackPageView"]);
R.push(["enableLinkTracking"]);
(function () {
	var e, t, n, o;
	o = zr, R.push(["setTrackerUrl", o + "matomo.php"]), R.push(["setSiteId", "1"]), e =
		document, t = e.createElement("script"), n =
		e.getElementsByTagName("script")[0], t.async = !0, t.src = o + "matomo.js", n.parentNode.insertBefore(
		t,
		n,
	);
})();
function Lr(e) {
	switch (e) {
		case "./main/index.vue":
			return an(
				() => import("./d.js"),
				[
					"d.js", "_.css", "s.js", "7.js", "..js", "-.js", "k.js", "e.js",
					"9.css", "3.js", "i.js", "1.css", "t.js", "7.css", "$.js", "2.js",
					"j.js",
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
var Nr = {
	components: { rHead: Ar, x: dn },
	setup: () => {
		var e, t, n, o, r, s, i;
		return (
			n = J(), { uid: i } = localStorage, e = J(), i ? (
				z.USER.ID(i), s = !1, r =
					async () => {
						var l;
						l = location.hash.slice(6), l || (l = "index"), e.value =
							(await Lr(`./main/${l}.vue`)).default;
					}, L(r), window.addEventListener("hashchange", r)
			) : (
				s = Ne + "login.html", t = !1, window.addEventListener(
					"message",
					({ data: l }) => {
						var u, a;
						l === "load" ? (E.xing(), t = !1) : (
							{ token: a, avatarUrl: u } = JSON.parse(l), localStorage.ico =
								u || "", localStorage.uid = a, location.hash = "main", location.reload()
						);
					},
				), E.ing(), L(() => {
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
			), s = J(s), o = J(navigator.onLine), window.addEventListener(
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
					z.x();
				},
			}
		);
	},
};
const Ke = (e) => (gt("data-v-47edb420"), e = e(), Et(), e),
	Ir = ["src"],
	Vr = { key: 1, class: "wifi" },
	Fr = Ke(() => C("i", null, null, -1)),
	jr = Ke(() => C("h2", null, "网络请求失败", -1)),
	Hr = Ke(() => C("p", null, "请检查您的网络", -1)),
	xr = [Fr, jr, Hr];
function Wr(e, t) {
	const n = k("x"), o = k("r-head");
	return (
		d(), m(
			W,
			null,
			[
				v(n, { onClick: e.x }, null, 8, ["onClick"]),
				e.line ? (
					d(), m(
						W,
						{ key: 0 },
						[
							e.login ? (
								d(), m(
									W,
									{ key: 0 },
									[
										e.line ? (
											d(), m(
												"iframe",
												{ key: 0, src: e.login, ref: "frame" },
												null,
												8,
												Ir,
											)
										) : F("", !0),
									],
									64,
								)
							) : (
								d(), m(
									W,
									{ key: 1 },
									[v(o), C("main", null, [(d(), V(cn(e.c)))])],
									64,
								)
							),
						],
						64,
					)
				) : (d(), m("div", Vr, xr)),
			],
			64,
		)
	);
}
var Xr = wt(Nr, [["render", Wr], ["__scopeId", "data-v-47edb420"]]);
export { Xr as default };
