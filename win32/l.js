var Dt = function (t, e) {
	return (
		Dt =
			Object.setPrototypeOf ||
				(
					({ __proto__: [] } instanceof Array) && function (r, n) {
						r.__proto__ = n;
					}
				) ||
				function (r, n) {
					for (var i in n) n.hasOwnProperty(i) && (r[i] = n[i]);
				}, Dt(t, e)
	);
};
function nt(t, e) {
	Dt(t, e);
	function r() {
		this.constructor = t;
	}
	t.prototype =
		e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var c = function () {
	return (
		c =
			Object.assign || function (e) {
				for (var r, n = 1, i = arguments.length; n < i; n++) {
					r = arguments[n];
					for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (
						e[o] = r[o]
					);
				}
				return e;
			}, c.apply(this, arguments)
	);
};
function L(t) {
	var e = typeof Symbol == "function" && Symbol.iterator, r = e && t[e], n = 0;
	if (r) {
		return r.call(t);
	}
	if (t && typeof t.length == "number") {
		return {
			next: function () {
				return (
					t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
				);
			},
		};
	}
	throw new TypeError(
		e ? "Object is not iterable." : "Symbol.iterator is not defined.",
	);
}
function O(t, e) {
	var r = typeof Symbol == "function" && t[Symbol.iterator];
	if (!r) {
		return t;
	}
	var n = r.call(t), i, o = [], a;
	try {
		for (; (e === void 0 || e-- > 0) && !(i = n.next()).done; ) o.push(i.value);
	} catch (s) {
		a = { error: s };
	} finally {
		try {
			i && !i.done && (r = n.return) && r.call(n);
		} finally {
			if (a) {
				throw a.error;
			}
		}
	}
	return o;
}
function S() {
	for (var t = [], e = 0; e < arguments.length; e++) t =
		t.concat(O(arguments[e]));
	return t;
}
var P;
(function (t) {
	t.Fatal = "fatal", t.Error = "error", t.Warning = "warning", t.Log = "log", t.Info =
		"info", t.Debug = "debug", t.Critical = "critical";
})(P || (P = {}));
function Or(t) {
	t.then(
		null,
		function (e) {
			console.error(e);
		},
	);
}
var Rr = !0;
function p() {
	return Rr;
}
function xr() {
	return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__;
}
function Yt() {
	return !xr() && Object.prototype.toString.call(
		typeof process < "u" ? process : 0,
	) === "[object process]";
}
function Ir(t, e) {
	return t.require(e);
}
var Nr = {};
function y() {
	return Yt()
		? global
		: typeof window < "u"
			? window
			: typeof self < "u"
				? self
				: Nr;
}
var De = Object.prototype.toString;
function Wt(t) {
	switch (De.call(t)) {
		case "[object Error]":
		case "[object Exception]":
		case "[object DOMException]":
			return !0;
		default:
			return C(t, Error);
	}
}
function V(t, e) {
	return De.call(t) === ("[object " + e + "]");
}
function Me(t) {
	return V(t, "ErrorEvent");
}
function de(t) {
	return V(t, "DOMError");
}
function Pr(t) {
	return V(t, "DOMException");
}
function Y(t) {
	return V(t, "String");
}
function Vt(t) {
	return t === null || (typeof t != "object" && typeof t != "function");
}
function W(t) {
	return V(t, "Object");
}
function gt(t) {
	return typeof Event < "u" && C(t, Event);
}
function Lr(t) {
	return typeof Element < "u" && C(t, Element);
}
function jr(t) {
	return V(t, "RegExp");
}
function Xt(t) {
	return Boolean(t && t.then && typeof t.then == "function");
}
function Ar(t) {
	return W(t) &&
	("nativeEvent" in t) &&
	("preventDefault" in t) &&
	("stopPropagation" in t);
}
function Dr(t) {
	return typeof t == "number" && t !== t;
}
function C(t, e) {
	try {
		return t instanceof e;
	} catch {
		return !1;
	}
}
function Mt(t, e) {
	try {
		for (
			var r = t,
				n = 5,
				i = 80,
				o = [],
				a = 0,
				s = 0,
				u = " > ",
				f = u.length,
				l = void 0;
			r &&
				a++ < n &&
				(
					l = Mr(r, e), !(
						l === "html" || (a > 1 && (s + (o.length * f) + l.length) >= i)
					)
				);
		) o.push(l), s += l.length, r = r.parentNode;
		return o.reverse().join(u);
	} catch {
		return "<unknown>";
	}
}
function Mr(t, e) {
	var r = t, n = [], i, o, a, s, u;
	if (!r || !r.tagName) {
		return "";
	}
	n.push(r.tagName.toLowerCase());
	var f = e && e.length ? e
		.filter(function (d) {
			return r.getAttribute(d);
		})
		.map(function (d) {
			return [d, r.getAttribute(d)];
		}) : null;
	if (f && f.length) {
		f.forEach(function (d) {
			n.push("[" + d[0] + '="' + d[1] + '"]');
		});
	} else if (r.id && n.push("#" + r.id), i = r.className, i && Y(i)) {
		for (o = i.split(/\s+/), u = 0; u < o.length; u++) n.push("." + o[u]);
	}
	var l = ["type", "name", "title", "alt"];
	for (u = 0; u < l.length; u++) a = l[u], s = r.getAttribute(a), s && n.push(
		"[" + a + '="' + s + '"]',
	);
	return n.join("");
}
function Cr() {
	var t = y();
	try {
		return t.document.location.href;
	} catch {
		return "";
	}
}
var Fr = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? Ur : Br);
function Ur(t, e) {
	return (t.__proto__ = e, t);
}
function Br(t, e) {
	for (var r in e) Object.prototype.hasOwnProperty.call(t, r) || (t[r] = e[r]);
	return t;
}
var b = function (t) {
	nt(e, t);
	function e(r) {
		var n = this.constructor, i = t.call(this, r) || this;
		return (
			i.message = r, i.name = n.prototype.constructor.name, Fr(i, n.prototype), i
		);
	}
	return e;
}(Error),
	Hr = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function qr(t) {
	return t === "http" || t === "https";
}
function it(t, e) {
	e === void 0 && (e = !1);
	var r = t.host,
		n = t.path,
		i = t.pass,
		o = t.port,
		a = t.projectId,
		s = t.protocol,
		u = t.publicKey;
	return s +
	"://" +
	u +
	(e && i ? ":" + i : "") +
	("@" + r + (o ? ":" + o : "") + "/" + (n && n + "/") + a);
}
function $r(t) {
	var e = Hr.exec(t);
	if (!e) {
		throw new b("Invalid Sentry Dsn: " + t);
	}
	var r = O(e.slice(1), 6),
		n = r[0],
		i = r[1],
		o = r[2],
		a = o === void 0 ? "" : o,
		s = r[3],
		u = r[4],
		f = u === void 0 ? "" : u,
		l = r[5],
		d = "",
		v = l,
		g = v.split("/");
	if (g.length > 1 && (d = g.slice(0, -1).join("/"), v = g.pop()), v) {
		var _ = v.match(/^\d+/);
		_ && (v = _[0]);
	}
	return Ce({
		host: s,
		pass: a,
		path: d,
		projectId: v,
		port: f,
		protocol: n,
		publicKey: i,
	});
}
function Ce(t) {
	return (
		("user" in t) && !("publicKey" in t) && (t.publicKey = t.user), {
			user: t.publicKey || "",
			protocol: t.protocol,
			publicKey: t.publicKey || "",
			pass: t.pass || "",
			host: t.host,
			port: t.port || "",
			path: t.path || "",
			projectId: t.projectId,
		}
	);
}
function zr(t) {
	if (!!p()) {
		var e = t.port,
			r = t.projectId,
			n = t.protocol,
			i = ["protocol", "publicKey", "host", "projectId"];
		if (
			i.forEach(function (o) {
				if (!t[o]) {
					throw new b("Invalid Sentry Dsn: " + o + " missing");
				}
			}), !r.match(/^\d+$/)
		) {
			throw new b("Invalid Sentry Dsn: Invalid projectId " + r);
		}
		if (!qr(n)) {
			throw new b("Invalid Sentry Dsn: Invalid protocol " + n);
		}
		if (e && isNaN(parseInt(e, 10))) {
			throw new b("Invalid Sentry Dsn: Invalid port " + e);
		}
		return !0;
	}
}
function Gt(t) {
	var e = typeof t == "string" ? $r(t) : Ce(t);
	return (zr(e), e);
}
var Yr = ["fatal", "error", "warning", "log", "info", "debug", "critical"],
	J = y(),
	kt = "Sentry Logger ",
	Fe = ["debug", "info", "warn", "error", "log", "assert"];
function dt(t) {
	var e = y();
	if (!("console" in e)) {
		return t();
	}
	var r = e.console, n = {};
	Fe.forEach(function (o) {
		(o in e.console) &&
			r[o].__sentry_original__ &&
			(n[o] = r[o], r[o] = r[o].__sentry_original__);
	});
	var i = t();
	return (
		Object
			.keys(n)
			.forEach(function (o) {
				r[o] = n[o];
			}), i
	);
}
var Wr = function () {
	function t() {
		this._enabled = !1;
	}
	return (
		t.prototype.disable =
			function () {
				this._enabled = !1;
			}, t.prototype.enable =
			function () {
				this._enabled = !0;
			}, t.prototype.log =
			function () {
				for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
				!this._enabled || dt(function () {
					var n;
					(n = J.console).log.apply(n, S([kt + "[Log]:"], e));
				});
			}, t.prototype.warn =
			function () {
				for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
				!this._enabled || dt(function () {
					var n;
					(n = J.console).warn.apply(n, S([kt + "[Warn]:"], e));
				});
			}, t.prototype.error =
			function () {
				for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
				!this._enabled || dt(function () {
					var n;
					(n = J.console).error.apply(n, S([kt + "[Error]:"], e));
				});
			}, t
	);
}(),
	Ct = J.__SENTRY__ || {},
	h = Ct.logger || new Wr();
p() && (Ct.logger = h, J.__SENTRY__ = Ct);
function Z(t, e) {
	return (
		e === void 0 && (e = 0), typeof t != "string" || e === 0 || t.length <= e ? t : t.substr(
			0,
			e,
		) + "..."
	);
}
function le(t, e) {
	if (!Array.isArray(t)) {
		return "";
	}
	for (var r = [], n = 0; n < t.length; n++) {
		var i = t[n];
		try {
			r.push(String(i));
		} catch {
			r.push("[value cannot be serialized]");
		}
	}
	return r.join(e);
}
function Kt(t, e) {
	return Y(t)
		? jr(e)
			? e.test(t)
			: typeof e == "string"
				? t.indexOf(e) !== -1
				: !1
		: !1;
}
function T(t, e, r) {
	if (e in t) {
		var n = t[e], i = r(n);
		if (typeof i == "function") {
			try {
				Ue(i, n);
			} catch {}
		}
		t[e] = i;
	}
}
function _t(t, e, r) {
	Object.defineProperty(t, e, { value: r, writable: !0, configurable: !0 });
}
function Ue(t, e) {
	var r = e.prototype || {};
	t.prototype = e.prototype = r, _t(t, "__sentry_original__", e);
}
function Jt(t) {
	return t.__sentry_original__;
}
function Vr(t) {
	return Object
		.keys(t)
		.map(function (e) {
			return encodeURIComponent(e) + "=" + encodeURIComponent(t[e]);
		})
		.join("&");
}
function Be(t) {
	var e = t;
	if (Wt(t)) {
		e = c({ message: t.message, name: t.name, stack: t.stack }, he(t));
	} else if (gt(t)) {
		var r = t;
		e =
			c(
				{
					type: r.type,
					target: pe(r.target),
					currentTarget: pe(r.currentTarget),
				},
				he(r),
			), typeof CustomEvent < "u" && C(t, CustomEvent) && (e.detail = r.detail);
	}
	return e;
}
function pe(t) {
	try {
		return Lr(t) ? Mt(t) : Object.prototype.toString.call(t);
	} catch {
		return "<unknown>";
	}
}
function he(t) {
	var e = {};
	for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
	return e;
}
function Xr(t, e) {
	e === void 0 && (e = 40);
	var r = Object.keys(Be(t));
	if (r.sort(), !r.length) {
		return "[object has no keys]";
	}
	if (r[0].length >= e) {
		return Z(r[0], e);
	}
	for (var n = r.length; n > 0; n--) {
		var i = r.slice(0, n).join(", ");
		if (!(i.length > e)) {
			return n === r.length ? i : Z(i, e);
		}
	}
	return "";
}
function Ft(t) {
	var e, r;
	if (W(t)) {
		var n = {};
		try {
			for (var i = L(Object.keys(t)), o = i.next(); !o.done; o = i.next()) {
				var a = o.value;
				typeof t[a] < "u" && (n[a] = Ft(t[a]));
			}
		} catch (s) {
			e = { error: s };
		} finally {
			try {
				o && !o.done && (r = i.return) && r.call(i);
			} finally {
				if (e) {
					throw e.error;
				}
			}
		}
		return n;
	}
	return Array.isArray(t) ? t.map(Ft) : t;
}
var Gr = 50;
function Kr() {
	for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
	var r = t
		.sort(
			function (n, i) {
				return n[0] - i[0];
			},
		)
		.map(function (n) {
			return n[1];
		});
	return function (n, i) {
		var o, a, s, u;
		i === void 0 && (i = 0);
		var f = [];
		try {
			for (
				var l = L(
					n
						.split(
							`
`,
						)
						.slice(i),
				),
					d = l.next();
				!d.done;
				d = l.next()
			) {
				var v = d.value;
				try {
					for (var g = (s = void 0, L(r)), _ = g.next(); !_.done; _ = g.next()) {
						var k = _.value, w = k(v);
						if (w) {
							f.push(w);
							break;
						}
					}
				} catch (R) {
					s = { error: R };
				} finally {
					try {
						_ && !_.done && (u = g.return) && u.call(g);
					} finally {
						if (s) {
							throw s.error;
						}
					}
				}
			}
		} catch (R) {
			o = { error: R };
		} finally {
			try {
				d && !d.done && (a = l.return) && a.call(l);
			} finally {
				if (o) {
					throw o.error;
				}
			}
		}
		return Jr(f);
	};
}
function Jr(t) {
	if (!t.length) {
		return [];
	}
	var e = t, r = e[0].function || "", n = e[e.length - 1].function || "";
	return (
		(r.indexOf("captureMessage") !== -1 || r.indexOf("captureException") !== -1) && (
			e = e.slice(1)
		), n.indexOf("sentryWrapped") !== -1 && (e = e.slice(0, -1)), e
			.slice(0, Gr)
			.map(function (i) {
				return c(
					c({}, i),
					{ filename: i.filename || e[0].filename, function: i.function || "?" },
				);
			})
			.reverse()
	);
}
var Ot = "<anonymous>";
function M(t) {
	try {
		return !t || typeof t != "function" ? Ot : t.name || Ot;
	} catch {
		return Ot;
	}
}
function yt() {
	if (!("fetch" in y())) {
		return !1;
	}
	try {
		return (new Headers(), new Request(""), new Response(), !0);
	} catch {
		return !1;
	}
}
function Ut(t) {
	return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(
		t.toString(),
	);
}
function Zr() {
	if (!yt()) {
		return !1;
	}
	var t = y();
	if (Ut(t.fetch)) {
		return !0;
	}
	var e = !1, r = t.document;
	if (r && typeof r.createElement == "function") {
		try {
			var n = r.createElement("iframe");
			n.hidden = !0, r.head.appendChild(n), n.contentWindow &&
				n.contentWindow.fetch &&
				(e = Ut(n.contentWindow.fetch)), r.head.removeChild(n);
		} catch (i) {
			p() && h.warn(
				"Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
				i,
			);
		}
	}
	return e;
}
function Qr() {
	if (!yt()) {
		return !1;
	}
	try {
		return (new Request("_", { referrerPolicy: "origin" }), !0);
	} catch {
		return !1;
	}
}
function tn() {
	var t = y(),
		e = t.chrome,
		r =
			e && e.app && e.app.runtime,
		n =
			("history" in t) && !!t.history.pushState && !!t.history.replaceState;
	return !r && n;
}
var m = y(), Q = {}, ve = {};
function en(t) {
	if (!ve[t]) {
		switch (ve[t] = !0, t) {
			case "console":
				rn();
				break;
			case "dom":
				ln();
				break;
			case "xhr":
				sn();
				break;
			case "fetch":
				nn();
				break;
			case "history":
				un();
				break;
			case "error":
				pn();
				break;
			case "unhandledrejection":
				hn();
				break;
			default:
				p() && h.warn("unknown instrumentation type:", t);
				return;
		}
	}
}
function A(t, e) {
	Q[t] = Q[t] || [], Q[t].push(e), en(t);
}
function N(t, e) {
	var r, n;
	if (!(!t || !Q[t])) {
		try {
			for (var i = L(Q[t] || []), o = i.next(); !o.done; o = i.next()) {
				var a = o.value;
				try {
					a(e);
				} catch (s) {
					p() && h.error(
						`Error while triggering instrumentation handler.
Type: ` +
							t +
							`
Name: ` +
							M(a) +
							`
Error:`,
						s,
					);
				}
			}
		} catch (s) {
			r = { error: s };
		} finally {
			try {
				o && !o.done && (n = i.return) && n.call(i);
			} finally {
				if (r) {
					throw r.error;
				}
			}
		}
	}
}
function rn() {
	("console" in m) && Fe.forEach(function (t) {
		(t in m.console) && T(
			m.console,
			t,
			function (e) {
				return function () {
					for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
					N("console", { args: r, level: t }), e && e.apply(m.console, r);
				};
			},
		);
	});
}
function nn() {
	!Zr() || T(
		m,
		"fetch",
		function (t) {
			return function () {
				for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
				var n = {
					args: e,
					fetchData: { method: on(e), url: an(e) },
					startTimestamp: Date.now(),
				};
				return (
					N("fetch", c({}, n)), t
						.apply(m, e)
						.then(
							function (i) {
								return (
									N(
										"fetch",
										c(c({}, n), { endTimestamp: Date.now(), response: i }),
									), i
								);
							},
							function (i) {
								throw N(
									"fetch",
									c(c({}, n), { endTimestamp: Date.now(), error: i }),
								), i;
							},
						)
				);
			};
		},
	);
}
function on(t) {
	return (
		t === void 0 && (t = []), ("Request" in m) &&
			C(t[0], Request) &&
			t[0].method
			? String(t[0].method).toUpperCase()
			: t[1] && t[1].method
				? String(t[1].method).toUpperCase()
				: "GET"
	);
}
function an(t) {
	return (
		t === void 0 && (t = []), typeof t[0] == "string"
			? t[0]
			: ("Request" in m) && C(t[0], Request)
				? t[0].url
				: String(t[0])
	);
}
function sn() {
	if ("XMLHttpRequest" in m) {
		var t = XMLHttpRequest.prototype;
		T(
			t,
			"open",
			function (e) {
				return function () {
					for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
					var i = this,
						o = r[1],
						a = i.__sentry_xhr__ =
							{ method: Y(r[0]) ? r[0].toUpperCase() : r[0], url: r[1] };
					Y(o) &&
						a.method === "POST" &&
						o.match(/sentry_key/) &&
						(i.__sentry_own_request__ = !0);
					var s = function () {
						if (i.readyState === 4) {
							try {
								a.status_code = i.status;
							} catch {}
							N(
								"xhr",
								{
									args: r,
									endTimestamp: Date.now(),
									startTimestamp: Date.now(),
									xhr: i,
								},
							);
						}
					};
					return (
						("onreadystatechange" in i) && typeof i.onreadystatechange == "function" ? T(
							i,
							"onreadystatechange",
							function (u) {
								return function () {
									for (var f = [], l = 0; l < arguments.length; l++) f[l] =
										arguments[l];
									return (s(), u.apply(i, f));
								};
							},
						) : i.addEventListener("readystatechange", s), e.apply(i, r)
					);
				};
			},
		), T(
			t,
			"send",
			function (e) {
				return function () {
					for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
					return (
						this.__sentry_xhr__ &&
							r[0] !== void 0 &&
							(this.__sentry_xhr__.body = r[0]), N(
							"xhr",
							{ args: r, startTimestamp: Date.now(), xhr: this },
						), e.apply(this, r)
					);
				};
			},
		);
	}
}
var at;
function un() {
	if (!tn()) {
		return;
	}
	var t = m.onpopstate;
	m.onpopstate =
		function () {
			for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
			var i = m.location.href, o = at;
			if (at = i, N("history", { from: o, to: i }), t) {
				try {
					return t.apply(this, r);
				} catch {}
			}
		};
	function e(r) {
		return function () {
			for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
			var o = n.length > 2 ? n[2] : void 0;
			if (o) {
				var a = at, s = String(o);
				at = s, N("history", { from: a, to: s });
			}
			return r.apply(this, n);
		};
	}
	T(m.history, "pushState", e), T(m.history, "replaceState", e);
}
var cn = 1e3, st, ut;
function fn(t, e) {
	if (!t || t.type !== e.type) {
		return !0;
	}
	try {
		if (t.target !== e.target) {
			return !0;
		}
	} catch {}
	return !1;
}
function dn(t) {
	if (t.type !== "keypress") {
		return !1;
	}
	try {
		var e = t.target;
		if (!e || !e.tagName) {
			return !0;
		}
		if (
			e.tagName === "INPUT" ||
			e.tagName === "TEXTAREA" ||
			e.isContentEditable
		) {
			return !1;
		}
	} catch {}
	return !0;
}
function ge(t, e) {
	return (
		e === void 0 && (e = !1), function (r) {
			if (!(!r || ut === r) && !dn(r)) {
				var n = r.type === "keypress" ? "input" : r.type;
				st === void 0 ? (t({ event: r, name: n, global: e }), ut = r) : fn(
					ut,
					r,
				) && (t({ event: r, name: n, global: e }), ut = r), clearTimeout(st), st =
					m.setTimeout(
						function () {
							st = void 0;
						},
						cn,
					);
			}
		}
	);
}
function ln() {
	if ("document" in m) {
		var t = N.bind(null, "dom"), e = ge(t, !0);
		m.document.addEventListener("click", e, !1), m.document.addEventListener(
			"keypress",
			e,
			!1,
		), ["EventTarget", "Node"].forEach(function (r) {
			var n = m[r] && m[r].prototype;
			!n ||
				!n.hasOwnProperty ||
				!n.hasOwnProperty("addEventListener") ||
				(
					T(
						n,
						"addEventListener",
						function (i) {
							return function (o, a, s) {
								if (o === "click" || o == "keypress") {
									try {
										var u = this,
											f = u.__sentry_instrumentation_handlers__ =
												u.__sentry_instrumentation_handlers__ || {},
											l = f[o] = f[o] || { refCount: 0 };
										if (!l.handler) {
											var d = ge(t);
											l.handler = d, i.call(this, o, d, s);
										}
										l.refCount += 1;
									} catch {}
								}
								return i.call(this, o, a, s);
							};
						},
					), T(
						n,
						"removeEventListener",
						function (i) {
							return function (o, a, s) {
								if (o === "click" || o == "keypress") {
									try {
										var u = this,
											f = u.__sentry_instrumentation_handlers__ || {},
											l = f[o];
										l && (
											l.refCount -= 1, l.refCount <= 0 && (
												i.call(this, o, l.handler, s), l.handler = void 0, delete f[o]
											), Object.keys(f).length === 0 && delete u.__sentry_instrumentation_handlers__
										);
									} catch {}
								}
								return i.call(this, o, a, s);
							};
						},
					)
				);
		});
	}
}
var Rt = null;
function pn() {
	Rt = m.onerror, m.onerror =
		function (t, e, r, n, i) {
			return (
				N("error", { column: n, error: i, line: r, msg: t, url: e }), Rt ? Rt.apply(
					this,
					arguments,
				) : !1
			);
		};
}
var xt = null;
function hn() {
	xt = m.onunhandledrejection, m.onunhandledrejection =
		function (t) {
			return (N("unhandledrejection", t), xt ? xt.apply(this, arguments) : !0);
		};
}
function vn() {
	var t = typeof WeakSet == "function", e = t ? new WeakSet() : [];
	function r(i) {
		if (t) {
			return e.has(i) ? !0 : (e.add(i), !1);
		}
		for (var o = 0; o < e.length; o++) {
			var a = e[o];
			if (a === i) {
				return !0;
			}
		}
		return (e.push(i), !1);
	}
	function n(i) {
		if (t) {
			e.delete(i);
		} else {
			for (var o = 0; o < e.length; o++) if (e[o] === i) {
				e.splice(o, 1);
				break;
			}
		}
	}
	return [r, n];
}
function z() {
	var t = y(), e = t.crypto || t.msCrypto;
	if (e !== void 0 && e.getRandomValues) {
		var r = new Uint16Array(8);
		e.getRandomValues(r), r[3] = r[3] & 4095 | 16384, r[4] =
			r[4] & 16383 | 32768;
		var n = function (i) {
			for (var o = i.toString(16); o.length < 4; ) o = "0" + o;
			return o;
		};
		return n(r[0]) +
		n(r[1]) +
		n(r[2]) +
		n(r[3]) +
		n(r[4]) +
		n(r[5]) +
		n(r[6]) +
		n(r[7]);
	}
	return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(
		/[xy]/g,
		function (i) {
			var o = Math.random() * 16 | 0, a = i === "x" ? o : o & 3 | 8;
			return a.toString(16);
		},
	);
}
function It(t) {
	if (!t) {
		return {};
	}
	var e = t.match(
		/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/,
	);
	if (!e) {
		return {};
	}
	var r = e[6] || "", n = e[8] || "";
	return { host: e[4], path: e[5], protocol: e[2], relative: e[5] + r + n };
}
function He(t) {
	return t.exception && t.exception.values ? t.exception.values[0] : void 0;
}
function H(t) {
	var e = t.message, r = t.event_id;
	if (e) {
		return e;
	}
	var n = He(t);
	return n
		? n.type && n.value
			? n.type + ": " + n.value
			: n.type || n.value || r || "<unknown>"
		: r || "<unknown>";
}
function Bt(t, e, r) {
	var n = t.exception = t.exception || {},
		i = n.values = n.values || [],
		o = i[0] = i[0] || {};
	o.value || (o.value = e || ""), o.type || (o.type = r || "Error");
}
function et(t, e) {
	var r = He(t);
	if (!!r) {
		var n = { type: "generic", handled: !0 }, i = r.mechanism;
		if (r.mechanism = c(c(c({}, n), i), e), e && ("data" in e)) {
			var o = c(c({}, i && i.data), e.data);
			r.mechanism.data = o;
		}
	}
}
function _e(t) {
	if (t && t.__sentry_captured__) {
		return !0;
	}
	try {
		_t(t, "__sentry_captured__", !0);
	} catch {}
	return !1;
}
function B(t, e, r) {
	e === void 0 && (e = 1 / 0), r === void 0 && (r = 1 / 0);
	try {
		return $e("", t, e, r);
	} catch (n) {
		return { ERROR: "**non-serializable** (" + n + ")" };
	}
}
function qe(t, e, r) {
	e === void 0 && (e = 3), r === void 0 && (r = 100 * 1024);
	var n = B(t, e);
	return yn(n) > r ? qe(t, e - 1, r) : n;
}
function $e(t, e, r, n, i) {
	r === void 0 && (r = 1 / 0), n === void 0 && (n = 1 / 0), i === void 0 && (
		i = vn()
	);
	var o = O(i, 2), a = o[0], s = o[1], u = e;
	if (u && typeof u.toJSON == "function") {
		try {
			return u.toJSON();
		} catch {}
	}
	if (
		e === null || (["number", "boolean", "string"].includes(typeof e) && !Dr(e))
	) {
		return e;
	}
	var f = gn(t, e);
	if (!f.startsWith("[object ")) {
		return f;
	}
	if (r === 0) {
		return f.replace("object ", "");
	}
	if (a(e)) {
		return "[Circular ~]";
	}
	var l = Array.isArray(e) ? [] : {}, d = 0, v = Wt(e) || gt(e) ? Be(e) : e;
	for (var g in v) if (!!Object.prototype.hasOwnProperty.call(v, g)) {
		if (d >= n) {
			l[g] = "[MaxProperties ~]";
			break;
		}
		var _ = v[g];
		l[g] = $e(g, _, r - 1, n, i), d += 1;
	}
	return (s(e), l);
}
function gn(t, e) {
	try {
		return t === "domain" && e && typeof e == "object" && e._events
			? "[Domain]"
			: t === "domainEmitter"
				? "[DomainEmitter]"
				: typeof global < "u" && e === global
					? "[Global]"
					: typeof window < "u" && e === window
						? "[Window]"
						: typeof document < "u" && e === document
							? "[Document]"
							: Ar(e)
								? "[SyntheticEvent]"
								: typeof e == "number" && e !== e
									? "[NaN]"
									: e === void 0
										? "[undefined]"
										: typeof e == "function"
											? "[Function: " + M(e) + "]"
											: typeof e == "symbol"
												? "[" + String(e) + "]"
												: typeof e == "bigint"
													? "[BigInt: " + String(e) + "]"
													: "[object " +
														Object.getPrototypeOf(e).constructor.name +
														"]";
	} catch (r) {
		return "**non-serializable** (" + r + ")";
	}
}
function _n(t) {
	return ~-encodeURI(t).split(/%..|./).length;
}
function yn(t) {
	return _n(JSON.stringify(t));
}
function j(t) {
	return new F(function (e) {
		e(t);
	});
}
function rt(t) {
	return new F(
		function (e, r) {
			r(t);
		},
	);
}
var F = function () {
	function t(e) {
		var r = this;
		this._state = 0, this._handlers = [], this._resolve =
			function (n) {
				r._setResult(1, n);
			}, this._reject =
			function (n) {
				r._setResult(2, n);
			}, this._setResult =
			function (n, i) {
				if (r._state === 0) {
					if (Xt(i)) {
						i.then(r._resolve, r._reject);
						return;
					}
					r._state = n, r._value = i, r._executeHandlers();
				}
			}, this._executeHandlers =
			function () {
				if (r._state !== 0) {
					var n = r._handlers.slice();
					r._handlers = [], n.forEach(function (i) {
						i[0] || (
							r._state === 1 && i[1](r._value), r._state === 2 && i[2](r._value), i[0] =
								!0
						);
					});
				}
			};
		try {
			e(this._resolve, this._reject);
		} catch (n) {
			this._reject(n);
		}
	}
	return (
		t.prototype.then =
			function (e, r) {
				var n = this;
				return new t(
					function (i, o) {
						n._handlers.push([
							!1,
							function (a) {
								if (!e) {
									i(a);
								} else {
									try {
										i(e(a));
									} catch (s) {
										o(s);
									}
								}
							},
							function (a) {
								if (!r) {
									o(a);
								} else {
									try {
										i(r(a));
									} catch (s) {
										o(s);
									}
								}
							},
						]), n._executeHandlers();
					},
				);
			}, t.prototype.catch =
			function (e) {
				return this.then(
					function (r) {
						return r;
					},
					e,
				);
			}, t.prototype.finally =
			function (e) {
				var r = this;
				return new t(
					function (n, i) {
						var o, a;
						return r
							.then(
								function (s) {
									a = !1, o = s, e && e();
								},
								function (s) {
									a = !0, o = s, e && e();
								},
							)
							.then(function () {
								if (a) {
									i(o);
									return;
								}
								n(o);
							});
					},
				);
			}, t
	);
}();
function ze(t) {
	var e = [];
	function r() {
		return t === void 0 || e.length < t;
	}
	function n(a) {
		return e.splice(e.indexOf(a), 1)[0];
	}
	function i(a) {
		if (!r()) {
			return rt(new b("Not adding Promise due to buffer limit reached."));
		}
		var s = a();
		return (
			e.indexOf(s) === -1 && e.push(s), s
				.then(function () {
					return n(s);
				})
				.then(
					null,
					function () {
						return n(s).then(null, function () {});
					},
				), s
		);
	}
	function o(a) {
		return new F(
			function (s, u) {
				var f = e.length;
				if (!f) {
					return s(!0);
				}
				var l = setTimeout(
					function () {
						a && a > 0 && s(!1);
					},
					a,
				);
				e.forEach(function (d) {
					j(d)
						.then(
							function () {
								--f || (clearTimeout(l), s(!0));
							},
							u,
						);
				});
			},
		);
	}
	return { $: e, add: i, drain: o };
}
function mn(t) {
	return Yr.indexOf(t) !== -1;
}
function Sn(t) {
	return t === "warn"
		? P.Warning
		: mn(t)
			? t
			: P.Log;
}
function Ye(t) {
	return t >= 200 && t < 300
		? "success"
		: t === 429
			? "rate_limit"
			: t >= 400 && t < 500
				? "invalid"
				: t >= 500
					? "failed"
					: "unknown";
}
var Ht = {
	nowSeconds: function () {
		return Date.now() / 1e3;
	},
};
function En() {
	var t = y().performance;
	if (!(!t || !t.now)) {
		var e = Date.now() - t.now();
		return {
			now: function () {
				return t.now();
			},
			timeOrigin: e,
		};
	}
}
function bn() {
	try {
		var t = Ir(module, "perf_hooks");
		return t.performance;
	} catch {
		return;
	}
}
var Nt = Yt() ? bn() : En(),
	ye = Nt === void 0 ? Ht : {
		nowSeconds: function () {
			return (Nt.timeOrigin + Nt.now()) / 1e3;
		},
	},
	mt = Ht.nowSeconds.bind(Ht),
	qt = ye.nowSeconds.bind(ye);
(function () {
	var t = y().performance;
	if (!(!t || !t.now)) {
		var e = 3600 * 1e3,
			r = t.now(),
			n = Date.now(),
			i = t.timeOrigin ? Math.abs(t.timeOrigin + r - n) : e,
			o = i < e,
			a = t.timing && t.timing.navigationStart,
			s = typeof a == "number",
			u = s ? Math.abs(a + r - n) : e,
			f = u < e;
		return o || f
			? i <= u
				? t.timeOrigin
				: a
			: n;
	}
})();
function St(t, e) {
	return (e === void 0 && (e = []), [t, e]);
}
function wn(t) {
	var e = O(t, 2), r = O(e[1], 1), n = O(r[0], 1), i = n[0];
	return i.type;
}
function Et(t) {
	var e = O(t, 2), r = e[0], n = e[1], i = JSON.stringify(r);
	return n.reduce(
		function (o, a) {
			var s = O(a, 2),
				u = s[0],
				f = s[1],
				l = Vt(f) ? String(f) : JSON.stringify(f);
			return o +
			`
` +
			JSON.stringify(u) +
			`
` +
			l;
		},
		i,
	);
}
function Tn(t, e, r) {
	var n = [
		{ type: "client_report" },
		{ timestamp: r || mt(), discarded_events: t },
	];
	return St(e ? { dsn: e } : {}, [n]);
}
var kn = 60 * 1e3;
function On(t, e) {
	e === void 0 && (e = Date.now());
	var r = parseInt("" + t, 10);
	if (!isNaN(r)) {
		return r * 1e3;
	}
	var n = Date.parse("" + t);
	return isNaN(n) ? kn : n - e;
}
function Zt(t, e) {
	return t[e] || t.all || 0;
}
function We(t, e, r) {
	return (r === void 0 && (r = Date.now()), Zt(t, e) > r);
}
function Ve(t, e, r) {
	var n, i, o, a;
	r === void 0 && (r = Date.now());
	var s = c({}, t), u = e["x-sentry-rate-limits"], f = e["retry-after"];
	if (u) {
		try {
			for (var l = L(u.trim().split(",")), d = l.next(); !d.done; d = l.next()) {
				var v = d.value,
					g = v.split(":", 2),
					_ = parseInt(g[0], 10),
					k = (isNaN(_) ? 60 : _) * 1e3;
				if (!g[1]) {
					s.all = r + k;
				} else {
					try {
						for (
							var w = (o = void 0, L(g[1].split(";"))), R = w.next();
							!R.done;
							R = w.next()
						) {
							var G = R.value;
							s[G] = r + k;
						}
					} catch ($) {
						o = { error: $ };
					} finally {
						try {
							R && !R.done && (a = w.return) && a.call(w);
						} finally {
							if (o) {
								throw o.error;
							}
						}
					}
				}
			}
		} catch ($) {
			n = { error: $ };
		} finally {
			try {
				d && !d.done && (i = l.return) && i.call(l);
			} finally {
				if (n) {
					throw n.error;
				}
			}
		}
	} else {
		f && (s.all = r + On(f, r));
	}
	return s;
}
var me = 100,
	lt = function () {
		function t() {
			this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors =
				[], this._breadcrumbs = [], this._user = {}, this._tags = {}, this._extra =
				{}, this._contexts = {}, this._sdkProcessingMetadata = {};
		}
		return (
			t.clone =
				function (e) {
					var r = new t();
					return (
						e && (
							r._breadcrumbs = S(e._breadcrumbs), r._tags = c({}, e._tags), r._extra =
								c({}, e._extra), r._contexts = c({}, e._contexts), r._user =
								e._user, r._level = e._level, r._span = e._span, r._session =
								e._session, r._transactionName = e._transactionName, r._fingerprint =
								e._fingerprint, r._eventProcessors = S(e._eventProcessors), r._requestSession =
								e._requestSession
						), r
					);
				}, t.prototype.addScopeListener =
				function (e) {
					this._scopeListeners.push(e);
				}, t.prototype.addEventProcessor =
				function (e) {
					return (this._eventProcessors.push(e), this);
				}, t.prototype.setUser =
				function (e) {
					return (
						this._user = e || {}, this._session && this._session.update({
							user: e,
						}), this._notifyScopeListeners(), this
					);
				}, t.prototype.getUser =
				function () {
					return this._user;
				}, t.prototype.getRequestSession =
				function () {
					return this._requestSession;
				}, t.prototype.setRequestSession =
				function (e) {
					return (this._requestSession = e, this);
				}, t.prototype.setTags =
				function (e) {
					return (
						this._tags = c(c({}, this._tags), e), this._notifyScopeListeners(), this
					);
				}, t.prototype.setTag =
				function (e, r) {
					var n;
					return (
						this._tags = c(c({}, this._tags), (n = {}, n[e] = r, n)), this._notifyScopeListeners(), this
					);
				}, t.prototype.setExtras =
				function (e) {
					return (
						this._extra = c(c({}, this._extra), e), this._notifyScopeListeners(), this
					);
				}, t.prototype.setExtra =
				function (e, r) {
					var n;
					return (
						this._extra = c(c({}, this._extra), (n = {}, n[e] = r, n)), this._notifyScopeListeners(), this
					);
				}, t.prototype.setFingerprint =
				function (e) {
					return (this._fingerprint = e, this._notifyScopeListeners(), this);
				}, t.prototype.setLevel =
				function (e) {
					return (this._level = e, this._notifyScopeListeners(), this);
				}, t.prototype.setTransactionName =
				function (e) {
					return (this._transactionName = e, this._notifyScopeListeners(), this);
				}, t.prototype.setTransaction =
				function (e) {
					return this.setTransactionName(e);
				}, t.prototype.setContext =
				function (e, r) {
					var n;
					return (
						r === null ? delete this._contexts[e] : this._contexts =
							c(c({}, this._contexts), (n = {}, n[e] = r, n)), this._notifyScopeListeners(), this
					);
				}, t.prototype.setSpan =
				function (e) {
					return (this._span = e, this._notifyScopeListeners(), this);
				}, t.prototype.getSpan =
				function () {
					return this._span;
				}, t.prototype.getTransaction =
				function () {
					var e = this.getSpan();
					return e && e.transaction;
				}, t.prototype.setSession =
				function (e) {
					return (
						e ? this._session = e : delete this._session, this._notifyScopeListeners(), this
					);
				}, t.prototype.getSession =
				function () {
					return this._session;
				}, t.prototype.update =
				function (e) {
					if (!e) {
						return this;
					}
					if (typeof e == "function") {
						var r = e(this);
						return r instanceof t ? r : this;
					}
					return (
						e instanceof t ? (
							this._tags = c(c({}, this._tags), e._tags), this._extra =
								c(c({}, this._extra), e._extra), this._contexts =
								c(c({}, this._contexts), e._contexts), e._user &&
								Object.keys(e._user).length &&
								(this._user = e._user), e._level && (this._level = e._level), e._fingerprint && (
								this._fingerprint = e._fingerprint
							), e._requestSession && (this._requestSession = e._requestSession)
						) : W(e) && (
							e = e, this._tags = c(c({}, this._tags), e.tags), this._extra =
								c(c({}, this._extra), e.extra), this._contexts =
								c(c({}, this._contexts), e.contexts), e.user && (
								this._user = e.user
							), e.level && (this._level = e.level), e.fingerprint && (
								this._fingerprint = e.fingerprint
							), e.requestSession && (this._requestSession = e.requestSession)
						), this
					);
				}, t.prototype.clear =
				function () {
					return (
						this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user =
							{}, this._contexts = {}, this._level = void 0, this._transactionName =
							void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span =
							void 0, this._session = void 0, this._notifyScopeListeners(), this
					);
				}, t.prototype.addBreadcrumb =
				function (e, r) {
					var n = typeof r == "number" ? Math.min(r, me) : me;
					if (n <= 0) {
						return this;
					}
					var i = c({ timestamp: mt() }, e);
					return (
						this._breadcrumbs = S(this._breadcrumbs, [i]).slice(-n), this._notifyScopeListeners(), this
					);
				}, t.prototype.clearBreadcrumbs =
				function () {
					return (this._breadcrumbs = [], this._notifyScopeListeners(), this);
				}, t.prototype.applyToEvent =
				function (e, r) {
					if (
						this._extra &&
							Object.keys(this._extra).length &&
							(e.extra = c(c({}, this._extra), e.extra)), this._tags &&
							Object.keys(this._tags).length &&
							(e.tags = c(c({}, this._tags), e.tags)), this._user &&
							Object.keys(this._user).length &&
							(e.user = c(c({}, this._user), e.user)), this._contexts &&
							Object.keys(this._contexts).length &&
							(e.contexts = c(c({}, this._contexts), e.contexts)), this._level && (
							e.level = this._level
						), this._transactionName && (e.transaction = this._transactionName), this._span
					) {
						e.contexts = c({ trace: this._span.getTraceContext() }, e.contexts);
						var n = this._span.transaction && this._span.transaction.name;
						n && (e.tags = c({ transaction: n }, e.tags));
					}
					return (
						this._applyFingerprint(e), e.breadcrumbs =
							S(e.breadcrumbs || [], this._breadcrumbs), e.breadcrumbs =
							e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0, e.sdkProcessingMetadata =
							this._sdkProcessingMetadata, this._notifyEventProcessors(
							S(Xe(), this._eventProcessors),
							e,
							r,
						)
					);
				}, t.prototype.setSDKProcessingMetadata =
				function (e) {
					return (
						this._sdkProcessingMetadata =
							c(c({}, this._sdkProcessingMetadata), e), this
					);
				}, t.prototype._notifyEventProcessors =
				function (e, r, n, i) {
					var o = this;
					return (
						i === void 0 && (i = 0), new F(
							function (a, s) {
								var u = e[i];
								if (r === null || typeof u != "function") {
									a(r);
								} else {
									var f = u(c({}, r), n);
									Xt(f) ? f
										.then(function (l) {
											return o._notifyEventProcessors(e, l, n, i + 1).then(a);
										})
										.then(null, s) : o._notifyEventProcessors(e, f, n, i + 1).then(
										a,
									).then(null, s);
								}
							},
						)
					);
				}, t.prototype._notifyScopeListeners =
				function () {
					var e = this;
					this._notifyingListeners || (
						this._notifyingListeners = !0, this._scopeListeners.forEach(function (
							r,
						) {
							r(e);
						}), this._notifyingListeners = !1
					);
				}, t.prototype._applyFingerprint =
				function (e) {
					e.fingerprint =
						e.fingerprint
							? Array.isArray(e.fingerprint)
								? e.fingerprint
								: [e.fingerprint]
							: [], this._fingerprint && (
						e.fingerprint = e.fingerprint.concat(this._fingerprint)
					), e.fingerprint && !e.fingerprint.length && delete e.fingerprint;
				}, t
		);
	}();
function Xe() {
	var t = y();
	return (
		t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.globalEventProcessors =
			t.__SENTRY__.globalEventProcessors || [], t.__SENTRY__.globalEventProcessors
	);
}
function Qt(t) {
	Xe().push(t);
}
var Rn = function () {
	function t(e) {
		this.errors = 0, this.sid = z(), this.duration = 0, this.status = "ok", this.init =
			!0, this.ignoreDuration = !1;
		var r = qt();
		this.timestamp = r, this.started = r, e && this.update(e);
	}
	return (
		t.prototype.update =
			function (e) {
				if (
					e === void 0 && (e = {}), e.user && (
						!this.ipAddress &&
							e.user.ip_address &&
							(this.ipAddress = e.user.ip_address), !this.did &&
							!e.did &&
							(this.did = e.user.id || e.user.email || e.user.username)
					), this.timestamp = e.timestamp || qt(), e.ignoreDuration && (
						this.ignoreDuration = e.ignoreDuration
					), e.sid && (this.sid = e.sid.length === 32 ? e.sid : z()), e.init !== void 0 && (
						this.init = e.init
					), !this.did && e.did && (this.did = "" + e.did), typeof e.started == "number" && (
						this.started = e.started
					), this.ignoreDuration
				) {
					this.duration = void 0;
				} else if (typeof e.duration == "number") {
					this.duration = e.duration;
				} else {
					var r = this.timestamp - this.started;
					this.duration = r >= 0 ? r : 0;
				}
				e.release && (this.release = e.release), e.environment && (
					this.environment = e.environment
				), !this.ipAddress && e.ipAddress && (this.ipAddress = e.ipAddress), !this.userAgent &&
					e.userAgent &&
					(this.userAgent = e.userAgent), typeof e.errors == "number" && (
					this.errors = e.errors
				), e.status && (this.status = e.status);
			}, t.prototype.close =
			function (e) {
				e
					? this.update({ status: e })
					: this.status === "ok"
						? this.update({ status: "exited" })
						: this.update();
			}, t.prototype.toJSON =
			function () {
				return Ft({
					sid: "" + this.sid,
					init: this.init,
					started: new Date(this.started * 1e3).toISOString(),
					timestamp: new Date(this.timestamp * 1e3).toISOString(),
					status: this.status,
					errors: this.errors,
					did: typeof this.did == "number" || typeof this.did == "string" ? "" + this.did : void 0,
					duration: this.duration,
					attrs: {
						release: this.release,
						environment: this.environment,
						ip_address: this.ipAddress,
						user_agent: this.userAgent,
					},
				});
			}, t
	);
}(),
	te = 4,
	xn = 100,
	ee = function () {
		function t(e, r, n) {
			r === void 0 && (r = new lt()), n === void 0 && (n = te), this._version =
				n, this._stack = [{}], this.getStackTop().scope = r, e && this.bindClient(
				e,
			);
		}
		return (
			t.prototype.isOlderThan =
				function (e) {
					return this._version < e;
				}, t.prototype.bindClient =
				function (e) {
					var r = this.getStackTop();
					r.client = e, e && e.setupIntegrations && e.setupIntegrations();
				}, t.prototype.pushScope =
				function () {
					var e = lt.clone(this.getScope());
					return (
						this.getStack().push({ client: this.getClient(), scope: e }), e
					);
				}, t.prototype.popScope =
				function () {
					return this.getStack().length <= 1 ? !1 : !!this.getStack().pop();
				}, t.prototype.withScope =
				function (e) {
					var r = this.pushScope();
					try {
						e(r);
					} finally {
						this.popScope();
					}
				}, t.prototype.getClient =
				function () {
					return this.getStackTop().client;
				}, t.prototype.getScope =
				function () {
					return this.getStackTop().scope;
				}, t.prototype.getStack =
				function () {
					return this._stack;
				}, t.prototype.getStackTop =
				function () {
					return this._stack[this._stack.length - 1];
				}, t.prototype.captureException =
				function (e, r) {
					var n = this._lastEventId = r && r.event_id ? r.event_id : z(), i = r;
					if (!r) {
						var o = void 0;
						try {
							throw new Error("Sentry syntheticException");
						} catch (a) {
							o = a;
						}
						i = { originalException: e, syntheticException: o };
					}
					return (
						this._invokeClient(
							"captureException",
							e,
							c(c({}, i), { event_id: n }),
						), n
					);
				}, t.prototype.captureMessage =
				function (e, r, n) {
					var i = this._lastEventId = n && n.event_id ? n.event_id : z(), o = n;
					if (!n) {
						var a = void 0;
						try {
							throw new Error(e);
						} catch (s) {
							a = s;
						}
						o = { originalException: e, syntheticException: a };
					}
					return (
						this._invokeClient(
							"captureMessage",
							e,
							r,
							c(c({}, o), { event_id: i }),
						), i
					);
				}, t.prototype.captureEvent =
				function (e, r) {
					var n = r && r.event_id ? r.event_id : z();
					return (
						e.type !== "transaction" && (this._lastEventId = n), this._invokeClient(
							"captureEvent",
							e,
							c(c({}, r), { event_id: n }),
						), n
					);
				}, t.prototype.lastEventId =
				function () {
					return this._lastEventId;
				}, t.prototype.addBreadcrumb =
				function (e, r) {
					var n = this.getStackTop(), i = n.scope, o = n.client;
					if (!(!i || !o)) {
						var a = (o.getOptions && o.getOptions()) || {},
							s = a.beforeBreadcrumb,
							u = s === void 0 ? null : s,
							f = a.maxBreadcrumbs,
							l = f === void 0 ? xn : f;
						if (!(l <= 0)) {
							var d = mt(),
								v = c({ timestamp: d }, e),
								g = u ? dt(function () {
									return u(v, r);
								}) : v;
							g !== null && i.addBreadcrumb(g, l);
						}
					}
				}, t.prototype.setUser =
				function (e) {
					var r = this.getScope();
					r && r.setUser(e);
				}, t.prototype.setTags =
				function (e) {
					var r = this.getScope();
					r && r.setTags(e);
				}, t.prototype.setExtras =
				function (e) {
					var r = this.getScope();
					r && r.setExtras(e);
				}, t.prototype.setTag =
				function (e, r) {
					var n = this.getScope();
					n && n.setTag(e, r);
				}, t.prototype.setExtra =
				function (e, r) {
					var n = this.getScope();
					n && n.setExtra(e, r);
				}, t.prototype.setContext =
				function (e, r) {
					var n = this.getScope();
					n && n.setContext(e, r);
				}, t.prototype.configureScope =
				function (e) {
					var r = this.getStackTop(), n = r.scope, i = r.client;
					n && i && e(n);
				}, t.prototype.run =
				function (e) {
					var r = Se(this);
					try {
						e(this);
					} finally {
						Se(r);
					}
				}, t.prototype.getIntegration =
				function (e) {
					var r = this.getClient();
					if (!r) {
						return null;
					}
					try {
						return r.getIntegration(e);
					} catch {
						return (
							p() && h.warn(
								"Cannot retrieve integration " + e.id + " from the current Hub",
							), null
						);
					}
				}, t.prototype.startSpan =
				function (e) {
					return this._callExtensionMethod("startSpan", e);
				}, t.prototype.startTransaction =
				function (e, r) {
					return this._callExtensionMethod("startTransaction", e, r);
				}, t.prototype.traceHeaders =
				function () {
					return this._callExtensionMethod("traceHeaders");
				}, t.prototype.captureSession =
				function (e) {
					if (e === void 0 && (e = !1), e) {
						return this.endSession();
					}
					this._sendSessionUpdate();
				}, t.prototype.endSession =
				function () {
					var e = this.getStackTop(), r = e && e.scope, n = r && r.getSession();
					n && n.close(), this._sendSessionUpdate(), r && r.setSession();
				}, t.prototype.startSession =
				function (e) {
					var r = this.getStackTop(),
						n = r.scope,
						i = r.client,
						o = (i && i.getOptions()) || {},
						a = o.release,
						s = o.environment,
						u = y(),
						f = (u.navigator || {}).userAgent,
						l = new Rn(
							c(
								c(
									c({ release: a, environment: s }, n && { user: n.getUser() }),
									f && { userAgent: f },
								),
								e,
							),
						);
					if (n) {
						var d = n.getSession && n.getSession();
						d && d.status === "ok" && d.update({ status: "exited" }), this.endSession(), n.setSession(
							l,
						);
					}
					return l;
				}, t.prototype._sendSessionUpdate =
				function () {
					var e = this.getStackTop(), r = e.scope, n = e.client;
					if (!!r) {
						var i = r.getSession && r.getSession();
						i && n && n.captureSession && n.captureSession(i);
					}
				}, t.prototype._invokeClient =
				function (e) {
					for (var r, n = [], i = 1; i < arguments.length; i++) n[i - 1] =
						arguments[i];
					var o = this.getStackTop(), a = o.scope, s = o.client;
					s && s[e] && (r = s)[e].apply(r, S(n, [a]));
				}, t.prototype._callExtensionMethod =
				function (e) {
					for (var r = [], n = 1; n < arguments.length; n++) r[n - 1] =
						arguments[n];
					var i = bt(), o = i.__SENTRY__;
					if (o && o.extensions && typeof o.extensions[e] == "function") {
						return o.extensions[e].apply(this, r);
					}
					p() && h.warn(
						"Extension method " + e + " couldn't be found, doing nothing.",
					);
				}, t
		);
	}();
function bt() {
	var t = y();
	return (t.__SENTRY__ = t.__SENTRY__ || { extensions: {}, hub: void 0 }, t);
}
function Se(t) {
	var e = bt(), r = D(e);
	return (re(e, t), r);
}
function E() {
	var t = bt();
	return (
		(!Ge(t) || D(t).isOlderThan(te)) && re(t, new ee()), Yt() ? In(t) : D(t)
	);
}
function In(t) {
	try {
		var e = bt().__SENTRY__,
			r =
				e && e.extensions && e.extensions.domain && e.extensions.domain.active;
		if (!r) {
			return D(t);
		}
		if (!Ge(r) || D(r).isOlderThan(te)) {
			var n = D(t).getStackTop();
			re(r, new ee(n.client, lt.clone(n.scope)));
		}
		return D(r);
	} catch {
		return D(t);
	}
}
function Ge(t) {
	return !!(t && t.__SENTRY__ && t.__SENTRY__.hub);
}
function D(t) {
	return (
		(t && t.__SENTRY__ && t.__SENTRY__.hub) || (
			t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.hub = new ee()
		), t.__SENTRY__.hub
	);
}
function re(t, e) {
	return t ? (t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.hub = e, !0) : !1;
}
function x(t) {
	for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
	var n = E();
	if (n && n[t]) {
		return n[t].apply(n, S(e));
	}
	throw new Error(
		"No hub defined or " +
			t +
			" was not found on the hub, please open a bug report.",
	);
}
function Ke(t, e) {
	var r = new Error("Sentry syntheticException");
	return x(
		"captureException",
		t,
		{ captureContext: e, originalException: t, syntheticException: r },
	);
}
function _o(t, e) {
	var r = new Error(t),
		n = typeof e == "string" ? e : void 0,
		i = typeof e != "string" ? { captureContext: e } : void 0;
	return x(
		"captureMessage",
		t,
		n,
		c({ originalException: t, syntheticException: r }, i),
	);
}
function yo(t) {
	return x("captureEvent", t);
}
function mo(t) {
	x("configureScope", t);
}
function So(t) {
	x("addBreadcrumb", t);
}
function Eo(t, e) {
	x("setContext", t, e);
}
function bo(t) {
	x("setExtras", t);
}
function wo(t) {
	x("setTags", t);
}
function To(t, e) {
	x("setExtra", t, e);
}
function ko(t, e) {
	x("setTag", t, e);
}
function Oo(t) {
	x("setUser", t);
}
function Nn(t) {
	x("withScope", t);
}
function Ro(t, e) {
	return x("startTransaction", c({}, t), e);
}
var Pn = "7";
function pt(t, e, r) {
	return { initDsn: t, metadata: e || {}, dsn: Gt(t), tunnel: r };
}
function Je(t) {
	var e = t.protocol ? t.protocol + ":" : "", r = t.port ? ":" + t.port : "";
	return e + "//" + t.host + r + (t.path ? "/" + t.path : "") + "/api/";
}
function Ze(t, e) {
	return "" + Je(t) + t.projectId + "/" + e + "/";
}
function Qe(t) {
	return Vr({ sentry_key: t.publicKey, sentry_version: Pn });
}
function Ln(t) {
	return Ze(t, "store");
}
function tr(t) {
	return Ln(t) + "?" + Qe(t);
}
function jn(t) {
	return Ze(t, "envelope");
}
function wt(t, e) {
	return e || jn(t) + "?" + Qe(t);
}
function An(t, e) {
	var r = Gt(t), n = Je(r) + "embed/error-page/", i = "dsn=" + it(r);
	for (var o in e) if (o !== "dsn") {
		if (o === "user") {
			if (!e.user) {
				continue;
			}
			e.user.name && (i += "&name=" + encodeURIComponent(e.user.name)), e.user.email && (
				i += "&email=" + encodeURIComponent(e.user.email)
			);
		} else {
			i += "&" + encodeURIComponent(o) + "=" + encodeURIComponent(e[o]);
		}
	}
	return n + "?" + i;
}
var Ee = [];
function be(t) {
	return t.reduce(
		function (e, r) {
			return (
				e.every(function (n) {
					return r.name !== n.name;
				}) && e.push(r), e
			);
		},
		[],
	);
}
function Dn(t) {
	var e = (t.defaultIntegrations && S(t.defaultIntegrations)) || [],
		r = t.integrations,
		n = S(be(e));
	Array.isArray(r) ? n =
		S(
			n.filter(function (a) {
				return r.every(function (s) {
					return s.name !== a.name;
				});
			}),
			be(r),
		) : typeof r == "function" && (n = r(n), n = Array.isArray(n) ? n : [n]);
	var i = n.map(function (a) {
		return a.name;
	}),
		o = "Debug";
	return (
		i.indexOf(o) !== -1 && n.push.apply(n, S(n.splice(i.indexOf(o), 1))), n
	);
}
function Mn(t) {
	Ee.indexOf(t.name) === -1 && (
		t.setupOnce(Qt, E), Ee.push(t.name), p() && h.log(
			"Integration installed: " + t.name,
		)
	);
}
function Cn(t) {
	var e = {};
	return (
		Dn(t)
			.forEach(function (r) {
				e[r.name] = r, Mn(r);
			}), _t(e, "initialized", !0), e
	);
}
var we = "Not capturing exception because it's already been captured.",
	Fn = function () {
		function t(e, r) {
			this._integrations = {}, this._numProcessing = 0, this._backend = new e(r), this._options =
				r, r.dsn && (this._dsn = Gt(r.dsn));
		}
		return (
			t.prototype.captureException =
				function (e, r, n) {
					var i = this;
					if (_e(e)) {
						p() && h.log(we);
						return;
					}
					var o = r && r.event_id;
					return (
						this._process(
							this
								._getBackend()
								.eventFromException(e, r)
								.then(function (a) {
									return i._captureEvent(a, r, n);
								})
								.then(function (a) {
									o = a;
								}),
						), o
					);
				}, t.prototype.captureMessage =
				function (e, r, n, i) {
					var o = this,
						a = n && n.event_id,
						s = Vt(e) ? this._getBackend().eventFromMessage(String(e), r, n) : this._getBackend().eventFromException(
							e,
							n,
						);
					return (
						this._process(
							s
								.then(function (u) {
									return o._captureEvent(u, n, i);
								})
								.then(function (u) {
									a = u;
								}),
						), a
					);
				}, t.prototype.captureEvent =
				function (e, r, n) {
					if (r && r.originalException && _e(r.originalException)) {
						p() && h.log(we);
						return;
					}
					var i = r && r.event_id;
					return (
						this._process(
							this
								._captureEvent(e, r, n)
								.then(function (o) {
									i = o;
								}),
						), i
					);
				}, t.prototype.captureSession =
				function (e) {
					if (!this._isEnabled()) {
						p() && h.warn("SDK not enabled, will not capture session.");
						return;
					}
					typeof e.release != "string" ? p() && h.warn(
						"Discarded session because of missing or non-string release",
					) : (this._sendSession(e), e.update({ init: !1 }));
				}, t.prototype.getDsn =
				function () {
					return this._dsn;
				}, t.prototype.getOptions =
				function () {
					return this._options;
				}, t.prototype.getTransport =
				function () {
					return this._getBackend().getTransport();
				}, t.prototype.flush =
				function (e) {
					var r = this;
					return this
						._isClientDoneProcessing(e)
						.then(function (n) {
							return r
								.getTransport()
								.close(e)
								.then(function (i) {
									return n && i;
								});
						});
				}, t.prototype.close =
				function (e) {
					var r = this;
					return this
						.flush(e)
						.then(function (n) {
							return (r.getOptions().enabled = !1, n);
						});
				}, t.prototype.setupIntegrations =
				function () {
					this._isEnabled() &&
						!this._integrations.initialized &&
						(this._integrations = Cn(this._options));
				}, t.prototype.getIntegration =
				function (e) {
					try {
						return this._integrations[e.id] || null;
					} catch {
						return (
							p() && h.warn(
								"Cannot retrieve integration " +
									e.id +
									" from the current Client",
							), null
						);
					}
				}, t.prototype._updateSessionFromEvent =
				function (e, r) {
					var n, i, o = !1, a = !1, s = r.exception && r.exception.values;
					if (s) {
						a = !0;
						try {
							for (var u = L(s), f = u.next(); !f.done; f = u.next()) {
								var l = f.value, d = l.mechanism;
								if (d && d.handled === !1) {
									o = !0;
									break;
								}
							}
						} catch (_) {
							n = { error: _ };
						} finally {
							try {
								f && !f.done && (i = u.return) && i.call(u);
							} finally {
								if (n) {
									throw n.error;
								}
							}
						}
					}
					var v = e.status === "ok", g = (v && e.errors === 0) || (v && o);
					g && (
						e.update(
							c(
								c({}, o && { status: "crashed" }),
								{ errors: e.errors || Number(a || o) },
							),
						), this.captureSession(e)
					);
				}, t.prototype._sendSession =
				function (e) {
					this._getBackend().sendSession(e);
				}, t.prototype._isClientDoneProcessing =
				function (e) {
					var r = this;
					return new F(function (n) {
						var i = 0,
							o = 1,
							a = setInterval(
								function () {
									r._numProcessing == 0 ? (clearInterval(a), n(!0)) : (
										i += o, e && i >= e && (clearInterval(a), n(!1))
									);
								},
								o,
							);
					});
				}, t.prototype._getBackend =
				function () {
					return this._backend;
				}, t.prototype._isEnabled =
				function () {
					return this.getOptions().enabled !== !1 && this._dsn !== void 0;
				}, t.prototype._prepareEvent =
				function (e, r, n) {
					var i = this,
						o = this.getOptions(),
						a = o.normalizeDepth,
						s = a === void 0 ? 3 : a,
						u = o.normalizeMaxBreadth,
						f = u === void 0 ? 1e3 : u,
						l = c(
							c({}, e),
							{
								event_id: e.event_id || (n && n.event_id ? n.event_id : z()),
								timestamp: e.timestamp || mt(),
							},
						);
					this._applyClientOptions(l), this._applyIntegrationsMetadata(l);
					var d = r;
					n && n.captureContext && (d = lt.clone(d).update(n.captureContext));
					var v = j(l);
					return (
						d && (v = d.applyToEvent(l, n)), v.then(function (g) {
							return (
								g && (
									g.sdkProcessingMetadata =
										c(c({}, g.sdkProcessingMetadata), { normalizeDepth: B(s) })
								), typeof s == "number" && s > 0 ? i._normalizeEvent(g, s, f) : g
							);
						})
					);
				}, t.prototype._normalizeEvent =
				function (e, r, n) {
					if (!e) {
						return null;
					}
					var i = c(
						c(
							c(
								c(
									c({}, e),
									e.breadcrumbs && {
										breadcrumbs: e.breadcrumbs.map(function (o) {
											return c(c({}, o), o.data && { data: B(o.data, r, n) });
										}),
									},
								),
								e.user && { user: B(e.user, r, n) },
							),
							e.contexts && { contexts: B(e.contexts, r, n) },
						),
						e.extra && { extra: B(e.extra, r, n) },
					);
					return (
						e.contexts &&
							e.contexts.trace &&
							(i.contexts.trace = e.contexts.trace), i.sdkProcessingMetadata =
							c(c({}, i.sdkProcessingMetadata), { baseClientNormalized: !0 }), i
					);
				}, t.prototype._applyClientOptions =
				function (e) {
					var r = this.getOptions(),
						n = r.environment,
						i = r.release,
						o = r.dist,
						a = r.maxValueLength,
						s = a === void 0 ? 250 : a;
					("environment" in e) || (
						e.environment = "environment" in r ? n : "production"
					), e.release === void 0 && i !== void 0 && (e.release = i), e.dist === void 0 &&
						o !== void 0 &&
						(e.dist = o), e.message && (e.message = Z(e.message, s));
					var u = e.exception && e.exception.values && e.exception.values[0];
					u && u.value && (u.value = Z(u.value, s));
					var f = e.request;
					f && f.url && (f.url = Z(f.url, s));
				}, t.prototype._applyIntegrationsMetadata =
				function (e) {
					var r = Object.keys(this._integrations);
					r.length > 0 && (
						e.sdk = e.sdk || {}, e.sdk.integrations =
							S(e.sdk.integrations || [], r)
					);
				}, t.prototype._sendEvent =
				function (e) {
					this._getBackend().sendEvent(e);
				}, t.prototype._captureEvent =
				function (e, r, n) {
					return this
						._processEvent(e, r, n)
						.then(
							function (i) {
								return i.event_id;
							},
							function (i) {
								p() && h.error(i);
							},
						);
				}, t.prototype._processEvent =
				function (e, r, n) {
					var i = this,
						o = this.getOptions(),
						a = o.beforeSend,
						s = o.sampleRate,
						u = this.getTransport();
					function f(d, v) {
						u.recordLostEvent && u.recordLostEvent(d, v);
					}
					if (!this._isEnabled()) {
						return rt(new b("SDK not enabled, will not capture event."));
					}
					var l = e.type === "transaction";
					return !l && typeof s == "number" && Math.random() > s ? (
						f("sample_rate", "event"), rt(
							new b(
								"Discarding event because it's not included in the random sample (sampling rate = " +
									s +
									")",
							),
						)
					) : this
						._prepareEvent(e, n, r)
						.then(function (d) {
							if (d === null) {
								throw f("event_processor", e.type || "event"), new b(
									"An event processor returned null, will not send event.",
								);
							}
							var v = r && r.data && r.data.__sentry__ === !0;
							if (v || l || !a) {
								return d;
							}
							var g = a(d, r);
							return Un(g);
						})
						.then(function (d) {
							if (d === null) {
								throw f("before_send", e.type || "event"), new b(
									"`beforeSend` returned `null`, will not send event.",
								);
							}
							var v = n && n.getSession && n.getSession();
							return (
								!l && v && i._updateSessionFromEvent(v, d), i._sendEvent(d), d
							);
						})
						.then(
							null,
							function (d) {
								throw d instanceof b ? d : (
									i.captureException(
										d,
										{ data: { __sentry__: !0 }, originalException: d },
									), new b(
										`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ` + d,
									)
								);
							},
						);
				}, t.prototype._process =
				function (e) {
					var r = this;
					this._numProcessing += 1, e.then(
						function (n) {
							return (r._numProcessing -= 1, n);
						},
						function (n) {
							return (r._numProcessing -= 1, n);
						},
					);
				}, t
		);
	}();
function Un(t) {
	var e = "`beforeSend` method has to return `null` or a valid event.";
	if (Xt(t)) {
		return t.then(
			function (r) {
				if (!(W(r) || r === null)) {
					throw new b(e);
				}
				return r;
			},
			function (r) {
				throw new b("beforeSend rejected with " + r);
			},
		);
	}
	if (!(W(t) || t === null)) {
		throw new b(e);
	}
	return t;
}
function ne(t) {
	if (!(!t.metadata || !t.metadata.sdk)) {
		var e = t.metadata.sdk, r = e.name, n = e.version;
		return { name: r, version: n };
	}
}
function er(t, e) {
	return (
		e && (
			t.sdk = t.sdk || {}, t.sdk.name = t.sdk.name || e.name, t.sdk.version =
				t.sdk.version || e.version, t.sdk.integrations =
				S(t.sdk.integrations || [], e.integrations || []), t.sdk.packages =
				S(t.sdk.packages || [], e.packages || [])
		), t
	);
}
function rr(t, e) {
	var r = ne(e),
		n = c(
			c({ sent_at: new Date().toISOString() }, r && { sdk: r }),
			!!e.tunnel && { dsn: it(e.dsn) },
		),
		i = "aggregates" in t ? "sessions" : "session",
		o = [{ type: i }, t],
		a = St(n, [o]);
	return [a, i];
}
function Bn(t, e) {
	var r = O(rr(t, e), 2), n = r[0], i = r[1];
	return { body: Et(n), type: i, url: wt(e.dsn, e.tunnel) };
}
function Hn(t, e) {
	var r = ne(e),
		n = t.type || "event",
		i = (t.sdkProcessingMetadata || {}).transactionSampling,
		o = i || {},
		a = o.method,
		s = o.rate;
	er(t, e.metadata.sdk), t.tags = t.tags || {}, t.extra = t.extra || {}, (
		t.sdkProcessingMetadata && t.sdkProcessingMetadata.baseClientNormalized
	) || (
		t.tags.skippedNormalization = !0, t.extra.normalizeDepth =
			t.sdkProcessingMetadata ? t.sdkProcessingMetadata.normalizeDepth : "unset"
	), delete t.sdkProcessingMetadata;
	var u = c(
		c(
			{ event_id: t.event_id, sent_at: new Date().toISOString() },
			r && { sdk: r },
		),
		!!e.tunnel && { dsn: it(e.dsn) },
	),
		f = [{ type: n, sample_rates: [{ id: a, rate: s }] }, t];
	return St(u, [f]);
}
function qn(t, e) {
	var r = ne(e),
		n = t.type || "event",
		i = n === "transaction" || !!e.tunnel,
		o = (t.sdkProcessingMetadata || {}).transactionSampling,
		a = o || {},
		s = a.method,
		u = a.rate;
	er(t, e.metadata.sdk), t.tags = t.tags || {}, t.extra = t.extra || {}, (
		t.sdkProcessingMetadata && t.sdkProcessingMetadata.baseClientNormalized
	) || (
		t.tags.skippedNormalization = !0, t.extra.normalizeDepth =
			t.sdkProcessingMetadata ? t.sdkProcessingMetadata.normalizeDepth : "unset"
	), delete t.sdkProcessingMetadata;
	var f;
	try {
		f = JSON.stringify(t);
	} catch (k) {
		t.tags.JSONStringifyError = !0, t.extra.JSONStringifyError = k;
		try {
			f = JSON.stringify(B(t));
		} catch (w) {
			var l = w;
			f =
				JSON.stringify({
					message: "JSON.stringify error after renormalization",
					extra: { message: l.message, stack: l.stack },
				});
		}
	}
	var d = { body: f, type: n, url: i ? wt(e.dsn, e.tunnel) : tr(e.dsn) };
	if (i) {
		var v = c(
			c(
				{ event_id: t.event_id, sent_at: new Date().toISOString() },
				r && { sdk: r },
			),
			!!e.tunnel && { dsn: it(e.dsn) },
		),
			g = [{ type: n, sample_rates: [{ id: s, rate: u }] }, d.body],
			_ = St(v, [g]);
		d.body = Et(_);
	}
	return d;
}
var $n = function () {
	function t() {}
	return (
		t.prototype.sendEvent =
			function (e) {
				return j({
					reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
					status: "skipped",
				});
			}, t.prototype.close =
			function (e) {
				return j(!0);
			}, t
	);
}(),
	zn = function () {
		function t(e) {
			this._options = e, this._options.dsn || (
				p() && h.warn("No DSN provided, backend will not do anything.")
			), this._transport = this._setupTransport();
		}
		return (
			t.prototype.eventFromException =
				function (e, r) {
					throw new b("Backend has to implement `eventFromException` method");
				}, t.prototype.eventFromMessage =
				function (e, r, n) {
					throw new b("Backend has to implement `eventFromMessage` method");
				}, t.prototype.sendEvent =
				function (e) {
					if (
						this._newTransport &&
						this._options.dsn &&
						this._options._experiments &&
						this._options._experiments.newTransport
					) {
						var r = pt(
							this._options.dsn,
							this._options._metadata,
							this._options.tunnel,
						),
							n = Hn(e, r);
						this._newTransport
							.send(n)
							.then(
								null,
								function (i) {
									p() && h.error("Error while sending event:", i);
								},
							);
					} else {
						this._transport
							.sendEvent(e)
							.then(
								null,
								function (i) {
									p() && h.error("Error while sending event:", i);
								},
							);
					}
				}, t.prototype.sendSession =
				function (e) {
					if (!this._transport.sendSession) {
						p() && h.warn(
							"Dropping session because custom transport doesn't implement sendSession",
						);
						return;
					}
					if (
						this._newTransport &&
						this._options.dsn &&
						this._options._experiments &&
						this._options._experiments.newTransport
					) {
						var r = pt(
							this._options.dsn,
							this._options._metadata,
							this._options.tunnel,
						),
							n = O(rr(e, r), 1),
							i = n[0];
						this._newTransport
							.send(i)
							.then(
								null,
								function (o) {
									p() && h.error("Error while sending session:", o);
								},
							);
					} else {
						this._transport
							.sendSession(e)
							.then(
								null,
								function (o) {
									p() && h.error("Error while sending session:", o);
								},
							);
					}
				}, t.prototype.getTransport =
				function () {
					return this._transport;
				}, t.prototype._setupTransport =
				function () {
					return new $n();
				}, t
		);
	}();
function Yn(t, e) {
	e.debug === !0 && (
		p() ? h.enable() : console.warn(
			"[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.",
		)
	);
	var r = E(), n = r.getScope();
	n && n.update(e.initialScope);
	var i = new t(e);
	r.bindClient(i);
}
var Wn = 30;
function nr(t, e, r) {
	r === void 0 && (r = ze(t.bufferSize || Wn));
	var n = {},
		i = function (a) {
			return r.drain(a);
		};
	function o(a) {
		var s = wn(a),
			u = s === "event" ? "error" : s,
			f = { category: u, body: Et(a) };
		if (We(n, u)) {
			return rt({ status: "rate_limit", reason: Te(n, u) });
		}
		var l = function () {
			return e(f)
				.then(function (d) {
					var v = d.body,
						g = d.headers,
						_ = d.reason,
						k = d.statusCode,
						w = Ye(k);
					return (
						g && (n = Ve(n, g)), w === "success" ? j({ status: w, reason: _ }) : rt({
							status: w,
							reason: _ ||
								v ||
								(w === "rate_limit" ? Te(n, u) : "Unknown transport error"),
						})
					);
				});
		};
		return r.add(l);
	}
	return { send: o, flush: i };
}
function Te(t, e) {
	return "Too many " +
	e +
	" requests, backing off until: " +
	new Date(Zt(t, e)).toISOString();
}
var ht = "6.19.3",
	ke,
	ir = function () {
		function t() {
			this.name = t.id;
		}
		return (
			t.prototype.setupOnce =
				function () {
					ke = Function.prototype.toString, Function.prototype.toString =
						function () {
							for (var e = [], r = 0; r < arguments.length; r++) e[r] =
								arguments[r];
							var n = Jt(this) || this;
							return ke.apply(n, e);
						};
				}, t.id = "FunctionToString", t
		);
	}(),
	Vn = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
	or = function () {
		function t(e) {
			e === void 0 && (e = {}), this._options = e, this.name = t.id;
		}
		return (
			t.prototype.setupOnce =
				function (e, r) {
					e(function (n) {
						var i = r();
						if (i) {
							var o = i.getIntegration(t);
							if (o) {
								var a = i.getClient(),
									s = a ? a.getOptions() : {},
									u = Xn(o._options, s);
								return Gn(n, u) ? null : n;
							}
						}
						return n;
					});
				}, t.id = "InboundFilters", t
		);
	}();
function Xn(t, e) {
	return (
		t === void 0 && (t = {}), e === void 0 && (e = {}), {
			allowUrls: S(
				t.whitelistUrls || [],
				t.allowUrls || [],
				e.whitelistUrls || [],
				e.allowUrls || [],
			),
			denyUrls: S(
				t.blacklistUrls || [],
				t.denyUrls || [],
				e.blacklistUrls || [],
				e.denyUrls || [],
			),
			ignoreErrors: S(t.ignoreErrors || [], e.ignoreErrors || [], Vn),
			ignoreInternal: t.ignoreInternal !== void 0 ? t.ignoreInternal : !0,
		}
	);
}
function Gn(t, e) {
	return e.ignoreInternal && ti(t)
		? (
			p() && h.warn(
				`Event dropped due to being internal Sentry Error.
Event: ` + H(t),
			), !0
		)
		: Kn(t, e.ignoreErrors)
			? (
				p() && h.warn(
					"Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + H(
						t,
					),
				), !0
			)
			: Jn(t, e.denyUrls)
				? (
					p() && h.warn(
						"Event dropped due to being matched by `denyUrls` option.\nEvent: " +
							H(t) +
							`.
Url: ` +
							vt(t),
					), !0
				)
				: Zn(t, e.allowUrls)
					? !1
					: (
						p() && h.warn(
							"Event dropped due to not being matched by `allowUrls` option.\nEvent: " +
								H(t) +
								`.
Url: ` +
								vt(t),
						), !0
					);
}
function Kn(t, e) {
	return !e || !e.length ? !1 : Qn(t)
		.some(function (r) {
			return e.some(function (n) {
				return Kt(r, n);
			});
		});
}
function Jn(t, e) {
	if (!e || !e.length) {
		return !1;
	}
	var r = vt(t);
	return r ? e.some(function (n) {
		return Kt(r, n);
	}) : !1;
}
function Zn(t, e) {
	if (!e || !e.length) {
		return !0;
	}
	var r = vt(t);
	return r ? e.some(function (n) {
		return Kt(r, n);
	}) : !0;
}
function Qn(t) {
	if (t.message) {
		return [t.message];
	}
	if (t.exception) {
		try {
			var e = (t.exception.values && t.exception.values[0]) || {},
				r = e.type,
				n = r === void 0 ? "" : r,
				i = e.value,
				o = i === void 0 ? "" : i;
			return ["" + o, n + ": " + o];
		} catch {
			return (p() && h.error("Cannot extract message for event " + H(t)), []);
		}
	}
	return [];
}
function ti(t) {
	try {
		return t.exception.values[0].type === "SentryError";
	} catch {}
	return !1;
}
function Oe(t) {
	t === void 0 && (t = []);
	for (var e = t.length - 1; e >= 0; e--) {
		var r = t[e];
		if (r && r.filename !== "<anonymous>" && r.filename !== "[native code]") {
			return r.filename || null;
		}
	}
	return null;
}
function vt(t) {
	try {
		if (t.stacktrace) {
			return Oe(t.stacktrace.frames);
		}
		var e;
		try {
			e = t.exception.values[0].stacktrace.frames;
		} catch {}
		return e ? Oe(e) : null;
	} catch {
		return (p() && h.error("Cannot extract url for event " + H(t)), null);
	}
}
var ei = Object.freeze(
	Object.defineProperty(
		{ __proto__: null, FunctionToString: ir, InboundFilters: or },
		Symbol.toStringTag,
		{ value: "Module" },
	),
),
	X = "?",
	ri = 10,
	ni = 20,
	ii = 30,
	oi = 40,
	ai = 50;
function ot(t, e, r, n) {
	var i = { filename: t, function: e, in_app: !0 };
	return (r !== void 0 && (i.lineno = r), n !== void 0 && (i.colno = n), i);
}
var si = /^\s*at (?:(.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
	ui = /\((\S*)(?::(\d+))(?::(\d+))\)/,
	ci = function (t) {
		var e = si.exec(t);
		if (e) {
			var r = e[2] && e[2].indexOf("eval") === 0;
			if (r) {
				var n = ui.exec(e[2]);
				n && (e[2] = n[1], e[3] = n[2], e[4] = n[3]);
			}
			var i = O(ar(e[1] || X, e[2]), 2), o = i[0], a = i[1];
			return ot(a, o, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0);
		}
	},
	fi = [ii, ci],
	di = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
	li = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
	pi = function (t) {
		var e, r = di.exec(t);
		if (r) {
			var n = r[3] && r[3].indexOf(" > eval") > -1;
			if (n) {
				var i = li.exec(r[3]);
				i && (r[1] = r[1] || "eval", r[3] = i[1], r[4] = i[2], r[5] = "");
			}
			var o = r[3], a = r[1] || X;
			return (
				e = O(ar(a, o), 2), a = e[0], o = e[1], ot(
					o,
					a,
					r[4] ? +r[4] : void 0,
					r[5] ? +r[5] : void 0,
				)
			);
		}
	},
	hi = [ai, pi],
	vi = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
	gi = function (t) {
		var e = vi.exec(t);
		return e ? ot(e[2], e[1] || X, +e[3], e[4] ? +e[4] : void 0) : void 0;
	},
	_i = [oi, gi],
	yi = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
	mi = function (t) {
		var e = yi.exec(t);
		return e ? ot(e[2], e[3] || X, +e[1]) : void 0;
	},
	Si = [ri, mi],
	Ei = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
	bi = function (t) {
		var e = Ei.exec(t);
		return e ? ot(e[5], e[3] || e[4] || X, +e[1], +e[2]) : void 0;
	},
	wi = [ni, bi],
	ar = function (t, e) {
		var r = t.indexOf("safari-extension") !== -1,
			n = t.indexOf("safari-web-extension") !== -1;
		return r || n ? [
			t.indexOf("@") !== -1 ? t.split("@")[0] : X,
			r ? "safari-extension:" + e : "safari-web-extension:" + e,
		] : [t, e];
	};
function sr(t) {
	var e = ie(t), r = { type: t && t.name, value: Ri(t) };
	return (
		e.length && (r.stacktrace = { frames: e }), r.type === void 0 &&
			r.value === "" &&
			(r.value = "Unrecoverable error caught"), r
	);
}
function Ti(t, e, r) {
	var n = {
		exception: {
			values: [
				{
					type: gt(t)
						? t.constructor.name
						: r
							? "UnhandledRejection"
							: "Error",
					value: "Non-Error " +
						(r ? "promise rejection" : "exception") +
						" captured with keys: " +
						Xr(t),
				},
			],
		},
		extra: { __serialized__: qe(t) },
	};
	if (e) {
		var i = ie(e);
		i.length && (n.stacktrace = { frames: i });
	}
	return n;
}
function Pt(t) {
	return { exception: { values: [sr(t)] } };
}
function ie(t) {
	var e = t.stacktrace || t.stack || "", r = Oi(t);
	try {
		return Kr(Si, wi, fi, _i, hi)(e, r);
	} catch {}
	return [];
}
var ki = /Minified React error #\d+;/i;
function Oi(t) {
	if (t) {
		if (typeof t.framesToPop == "number") {
			return t.framesToPop;
		}
		if (ki.test(t.message)) {
			return 1;
		}
	}
	return 0;
}
function Ri(t) {
	var e = t && t.message;
	return e
		? e.error && typeof e.error.message == "string"
			? e.error.message
			: e
		: "No error message";
}
function xi(t, e, r) {
	var n = (e && e.syntheticException) || void 0, i = oe(t, n, r);
	return (
		et(i), i.level = P.Error, e && e.event_id && (i.event_id = e.event_id), j(i)
	);
}
function Ii(t, e, r, n) {
	e === void 0 && (e = P.Info);
	var i = (r && r.syntheticException) || void 0, o = $t(t, i, n);
	return (o.level = e, r && r.event_id && (o.event_id = r.event_id), j(o));
}
function oe(t, e, r, n) {
	var i;
	if (Me(t) && t.error) {
		var o = t;
		return Pt(o.error);
	}
	if (de(t) || Pr(t)) {
		var a = t;
		if ("stack" in t) {
			i = Pt(t);
		} else {
			var s = a.name || (de(a) ? "DOMError" : "DOMException"),
				u = a.message ? s + ": " + a.message : s;
			i = $t(u, e, r), Bt(i, u);
		}
		return (
			("code" in a) && (
				i.tags = c(c({}, i.tags), { "DOMException.code": "" + a.code })
			), i
		);
	}
	if (Wt(t)) {
		return Pt(t);
	}
	if (W(t) || gt(t)) {
		var f = t;
		return (i = Ti(f, e, n), et(i, { synthetic: !0 }), i);
	}
	return (i = $t(t, e, r), Bt(i, "" + t, void 0), et(i, { synthetic: !0 }), i);
}
function $t(t, e, r) {
	var n = { message: t };
	if (r && e) {
		var i = ie(e);
		i.length && (n.stacktrace = { frames: i });
	}
	return n;
}
var I = y(), ct;
function ae() {
	if (ct) {
		return ct;
	}
	if (Ut(I.fetch)) {
		return ct = I.fetch.bind(I);
	}
	var t = I.document, e = I.fetch;
	if (t && typeof t.createElement == "function") {
		try {
			var r = t.createElement("iframe");
			r.hidden = !0, t.head.appendChild(r);
			var n = r.contentWindow;
			n && n.fetch && (e = n.fetch), t.head.removeChild(r);
		} catch (i) {
			p() && h.warn(
				"Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
				i,
			);
		}
	}
	return ct = e.bind(I);
}
function Ni(t, e) {
	var r = Object.prototype.toString.call(I && I.navigator) === "[object Navigator]",
		n = r && typeof I.navigator.sendBeacon == "function";
	if (n) {
		var i = I.navigator.sendBeacon.bind(I.navigator);
		return i(t, e);
	}
	if (yt()) {
		var o = ae();
		return Or(
			o(t, { body: e, method: "POST", credentials: "omit", keepalive: !0 }),
		);
	}
}
function Lt(t) {
	var e = t;
	return e === "event" ? "error" : e;
}
var jt = y(),
	se = function () {
		function t(e) {
			var r = this;
			this.options = e, this._buffer = ze(30), this._rateLimits = {}, this._outcomes =
				{}, this._api = pt(e.dsn, e._metadata, e.tunnel), this.url =
				tr(this._api.dsn), this.options.sendClientReports &&
				jt.document &&
				jt.document.addEventListener(
					"visibilitychange",
					function () {
						jt.document.visibilityState === "hidden" && r._flushOutcomes();
					},
				);
		}
		return (
			t.prototype.sendEvent =
				function (e) {
					return this._sendRequest(qn(e, this._api), e);
				}, t.prototype.sendSession =
				function (e) {
					return this._sendRequest(Bn(e, this._api), e);
				}, t.prototype.close =
				function (e) {
					return this._buffer.drain(e);
				}, t.prototype.recordLostEvent =
				function (e, r) {
					var n;
					if (!!this.options.sendClientReports) {
						var i = Lt(r) + ":" + e;
						p() && h.log("Adding outcome: " + i), this._outcomes[i] =
							(n = this._outcomes[i], (n ?? 0) + 1);
					}
				}, t.prototype._flushOutcomes =
				function () {
					if (!!this.options.sendClientReports) {
						var e = this._outcomes;
						if (this._outcomes = {}, !Object.keys(e).length) {
							p() && h.log("No outcomes to flush");
							return;
						}
						p() && h.log(
							`Flushing outcomes:
` + JSON.stringify(e, null, 2),
						);
						var r = wt(this._api.dsn, this._api.tunnel),
							n = Object
								.keys(e)
								.map(function (o) {
									var a = O(o.split(":"), 2), s = a[0], u = a[1];
									return { reason: u, category: s, quantity: e[o] };
								}),
							i = Tn(n, this._api.tunnel && it(this._api.dsn));
						try {
							Ni(r, Et(i));
						} catch (o) {
							p() && h.error(o);
						}
					}
				}, t.prototype._handleResponse =
				function (e) {
					var r = e.requestType,
						n = e.response,
						i = e.headers,
						o = e.resolve,
						a = e.reject,
						s = Ye(n.status);
					if (
						this._rateLimits = Ve(this._rateLimits, i), this._isRateLimited(r) &&
							p() &&
							p() &&
							h.warn(
								"Too many " +
									r +
									" requests, backing off until: " +
									this._disabledUntil(r),
							), s === "success"
					) {
						o({ status: s });
						return;
					}
					a(n);
				}, t.prototype._disabledUntil =
				function (e) {
					var r = Lt(e);
					return new Date(Zt(this._rateLimits, r));
				}, t.prototype._isRateLimited =
				function (e) {
					var r = Lt(e);
					return We(this._rateLimits, r);
				}, t
		);
	}(),
	ur = function (t) {
		nt(e, t);
		function e(r, n) {
			n === void 0 && (n = ae());
			var i = t.call(this, r) || this;
			return (i._fetch = n, i);
		}
		return (
			e.prototype._sendRequest =
				function (r, n) {
					var i = this;
					if (this._isRateLimited(r.type)) {
						return (
							this.recordLostEvent("ratelimit_backoff", r.type), Promise.reject({
								event: n,
								type: r.type,
								reason: "Transport for " +
									r.type +
									" requests locked till " +
									this._disabledUntil(r.type) +
									" due to too many requests.",
								status: 429,
							})
						);
					}
					var o = {
						body: r.body,
						method: "POST",
						referrerPolicy: Qr() ? "origin" : "",
					};
					return (
						this.options.fetchParameters !== void 0 && Object.assign(
							o,
							this.options.fetchParameters,
						), this.options.headers !== void 0 && (
							o.headers = this.options.headers
						), this._buffer
							.add(function () {
								return new F(
									function (a, s) {
										i
											._fetch(r.url, o)
											.then(function (u) {
												var f = {
													"x-sentry-rate-limits": u.headers.get(
														"X-Sentry-Rate-Limits",
													),
													"retry-after": u.headers.get("Retry-After"),
												};
												i._handleResponse({
													requestType: r.type,
													response: u,
													headers: f,
													resolve: a,
													reject: s,
												});
											})
											.catch(s);
									},
								);
							})
							.then(
								void 0,
								function (a) {
									throw a instanceof b ? i.recordLostEvent(
										"queue_overflow",
										r.type,
									) : i.recordLostEvent("network_error", r.type), a;
								},
							)
					);
				}, e
		);
	}(se),
	cr = function (t) {
		nt(e, t);
		function e() {
			return (t !== null && t.apply(this, arguments)) || this;
		}
		return (
			e.prototype._sendRequest =
				function (r, n) {
					var i = this;
					return this._isRateLimited(r.type) ? (
						this.recordLostEvent("ratelimit_backoff", r.type), Promise.reject({
							event: n,
							type: r.type,
							reason: "Transport for " +
								r.type +
								" requests locked till " +
								this._disabledUntil(r.type) +
								" due to too many requests.",
							status: 429,
						})
					) : this._buffer
						.add(function () {
							return new F(
								function (o, a) {
									var s = new XMLHttpRequest();
									s.onreadystatechange =
										function () {
											if (s.readyState === 4) {
												var f = {
													"x-sentry-rate-limits": s.getResponseHeader(
														"X-Sentry-Rate-Limits",
													),
													"retry-after": s.getResponseHeader("Retry-After"),
												};
												i._handleResponse({
													requestType: r.type,
													response: s,
													headers: f,
													resolve: o,
													reject: a,
												});
											}
										}, s.open("POST", r.url);
									for (var u in i.options.headers) Object.prototype.hasOwnProperty.call(
										i.options.headers,
										u,
									) && s.setRequestHeader(u, i.options.headers[u]);
									s.send(r.body);
								},
							);
						})
						.then(
							void 0,
							function (o) {
								throw o instanceof b ? i.recordLostEvent(
									"queue_overflow",
									r.type,
								) : i.recordLostEvent("network_error", r.type), o;
							},
						);
				}, e
		);
	}(se);
function fr(t, e) {
	e === void 0 && (e = ae());
	function r(n) {
		var i = c(
			{ body: n.body, method: "POST", referrerPolicy: "origin" },
			t.requestOptions,
		);
		return e(t.url, i)
			.then(function (o) {
				return o
					.text()
					.then(function (a) {
						return {
							body: a,
							headers: {
								"x-sentry-rate-limits": o.headers.get("X-Sentry-Rate-Limits"),
								"retry-after": o.headers.get("Retry-After"),
							},
							reason: o.statusText,
							statusCode: o.status,
						};
					});
			});
	}
	return nr({ bufferSize: t.bufferSize }, r);
}
var Pi = 4;
function dr(t) {
	function e(r) {
		return new F(
			function (n, i) {
				var o = new XMLHttpRequest();
				o.onreadystatechange =
					function () {
						if (o.readyState === Pi) {
							var s = {
								body: o.response,
								headers: {
									"x-sentry-rate-limits": o.getResponseHeader(
										"X-Sentry-Rate-Limits",
									),
									"retry-after": o.getResponseHeader("Retry-After"),
								},
								reason: o.statusText,
								statusCode: o.status,
							};
							n(s);
						}
					}, o.open("POST", t.url);
				for (var a in t.headers) Object.prototype.hasOwnProperty.call(
					t.headers,
					a,
				) && o.setRequestHeader(a, t.headers[a]);
				o.send(r.body);
			},
		);
	}
	return nr({ bufferSize: t.bufferSize }, e);
}
var xo = Object.freeze(
	Object.defineProperty(
		{
			__proto__: null,
			BaseTransport: se,
			FetchTransport: ur,
			XHRTransport: cr,
			makeNewFetchTransport: fr,
			makeNewXHRTransport: dr,
		},
		Symbol.toStringTag,
		{ value: "Module" },
	),
),
	Li = function (t) {
		nt(e, t);
		function e() {
			return (t !== null && t.apply(this, arguments)) || this;
		}
		return (
			e.prototype.eventFromException =
				function (r, n) {
					return xi(r, n, this._options.attachStacktrace);
				}, e.prototype.eventFromMessage =
				function (r, n, i) {
					return (
						n === void 0 && (n = P.Info), Ii(
							r,
							n,
							i,
							this._options.attachStacktrace,
						)
					);
				}, e.prototype._setupTransport =
				function () {
					if (!this._options.dsn) {
						return t.prototype._setupTransport.call(this);
					}
					var r = c(
						c({}, this._options.transportOptions),
						{
							dsn: this._options.dsn,
							tunnel: this._options.tunnel,
							sendClientReports: this._options.sendClientReports,
							_metadata: this._options._metadata,
						},
					),
						n = pt(r.dsn, r._metadata, r.tunnel),
						i = wt(n.dsn, n.tunnel);
					if (this._options.transport) {
						return new this._options.transport(r);
					}
					if (yt()) {
						var o = c({}, r.fetchParameters);
						return (
							this._newTransport = fr({ requestOptions: o, url: i }), new ur(r)
						);
					}
					return (
						this._newTransport = dr({ url: i, headers: r.headers }), new cr(r)
					);
				}, e
		);
	}(zn),
	ft = y(),
	zt = 0;
function lr() {
	return zt > 0;
}
function ji() {
	zt += 1, setTimeout(function () {
		zt -= 1;
	});
}
function q(t, e, r) {
	if (e === void 0 && (e = {}), typeof t != "function") {
		return t;
	}
	try {
		var n = t.__sentry_wrapped__;
		if (n) {
			return n;
		}
		if (Jt(t)) {
			return t;
		}
	} catch {
		return t;
	}
	var i = function () {
		var s = Array.prototype.slice.call(arguments);
		try {
			r && typeof r == "function" && r.apply(this, arguments);
			var u = s.map(function (f) {
				return q(f, e);
			});
			return t.apply(this, u);
		} catch (f) {
			throw ji(), Nn(function (l) {
				l.addEventProcessor(function (d) {
					return (
						e.mechanism && (Bt(d, void 0, void 0), et(d, e.mechanism)), d.extra =
							c(c({}, d.extra), { arguments: s }), d
					);
				}), Ke(f);
			}), f;
		}
	};
	try {
		for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (i[o] = t[o]);
	} catch {}
	Ue(i, t), _t(t, "__sentry_wrapped__", i);
	try {
		var a = Object.getOwnPropertyDescriptor(i, "name");
		a.configurable && Object.defineProperty(
			i,
			"name",
			{
				get: function () {
					return t.name;
				},
			},
		);
	} catch {}
	return i;
}
function Ai(t) {
	if (t === void 0 && (t = {}), !!ft.document) {
		if (!t.eventId) {
			p() && h.error("Missing eventId option in showReportDialog call");
			return;
		}
		if (!t.dsn) {
			p() && h.error("Missing dsn option in showReportDialog call");
			return;
		}
		var e = ft.document.createElement("script");
		e.async = !0, e.src = An(t.dsn, t), t.onLoad && (e.onload = t.onLoad);
		var r = ft.document.head || ft.document.body;
		r && r.appendChild(e);
	}
}
var Tt = function () {
	function t(e) {
		this.name = t.id, this._installFunc =
			{ onerror: Di, onunhandledrejection: Mi }, this._options =
			c({ onerror: !0, onunhandledrejection: !0 }, e);
	}
	return (
		t.prototype.setupOnce =
			function () {
				Error.stackTraceLimit = 50;
				var e = this._options;
				for (var r in e) {
					var n = this._installFunc[r];
					n && e[r] && (Ui(r), n(), this._installFunc[r] = void 0);
				}
			}, t.id = "GlobalHandlers", t
	);
}();
function Di() {
	A(
		"error",
		function (t) {
			var e = O(vr(), 2), r = e[0], n = e[1];
			if (!!r.getIntegration(Tt)) {
				var i = t.msg, o = t.url, a = t.line, s = t.column, u = t.error;
				if (!(lr() || (u && u.__sentry_own_request__))) {
					var f = u === void 0 && Y(i) ? Fi(i, o, a, s) : pr(
						oe(u || i, void 0, n, !1),
						o,
						a,
						s,
					);
					f.level = P.Error, hr(r, u, f, "onerror");
				}
			}
		},
	);
}
function Mi() {
	A(
		"unhandledrejection",
		function (t) {
			var e = O(vr(), 2), r = e[0], n = e[1];
			if (!!r.getIntegration(Tt)) {
				var i = t;
				try {
					"reason" in t ? i = t.reason : ("detail" in t) &&
						("reason" in t.detail) &&
						(i = t.detail.reason);
				} catch {}
				if (lr() || (i && i.__sentry_own_request__)) {
					return !0;
				}
				var o = Vt(i) ? Ci(i) : oe(i, void 0, n, !0);
				o.level = P.Error, hr(r, i, o, "onunhandledrejection");
			}
		},
	);
}
function Ci(t) {
	return {
		exception: {
			values: [
				{
					type: "UnhandledRejection",
					value: "Non-Error promise rejection captured with value: " + String(t),
				},
			],
		},
	};
}
function Fi(t, e, r, n) {
	var i = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
		o = Me(t) ? t.message : t,
		a = "Error",
		s = o.match(i);
	s && (a = s[1], o = s[2]);
	var u = { exception: { values: [{ type: a, value: o }] } };
	return pr(u, e, r, n);
}
function pr(t, e, r, n) {
	var i = t.exception = t.exception || {},
		o = i.values = i.values || [],
		a = o[0] = o[0] || {},
		s = a.stacktrace = a.stacktrace || {},
		u = s.frames = s.frames || [],
		f = isNaN(parseInt(n, 10)) ? void 0 : n,
		l = isNaN(parseInt(r, 10)) ? void 0 : r,
		d = Y(e) && e.length > 0 ? e : Cr();
	return (
		u.length === 0 && u.push({
			colno: f,
			filename: d,
			function: "?",
			in_app: !0,
			lineno: l,
		}), t
	);
}
function Ui(t) {
	p() && h.log("Global Handler attached: " + t);
}
function hr(t, e, r, n) {
	et(r, { handled: !1, type: n }), t.captureEvent(r, { originalException: e });
}
function vr() {
	var t = E(), e = t.getClient(), r = e && e.getOptions().attachStacktrace;
	return [t, r];
}
var Bi = [
	"EventTarget",
	"Window",
	"Node",
	"ApplicationCache",
	"AudioTrackList",
	"ChannelMergerNode",
	"CryptoOperation",
	"EventSource",
	"FileReader",
	"HTMLUnknownElement",
	"IDBDatabase",
	"IDBRequest",
	"IDBTransaction",
	"KeyOperation",
	"MediaController",
	"MessagePort",
	"ModalWindow",
	"Notification",
	"SVGElementInstance",
	"Screen",
	"TextTrack",
	"TextTrackCue",
	"TextTrackList",
	"WebSocket",
	"WebSocketWorker",
	"Worker",
	"XMLHttpRequest",
	"XMLHttpRequestEventTarget",
	"XMLHttpRequestUpload",
],
	gr = function () {
		function t(e) {
			this.name = t.id, this._options =
				c(
					{
						XMLHttpRequest: !0,
						eventTarget: !0,
						requestAnimationFrame: !0,
						setInterval: !0,
						setTimeout: !0,
					},
					e,
				);
		}
		return (
			t.prototype.setupOnce =
				function () {
					var e = y();
					this._options.setTimeout && T(e, "setTimeout", Re), this._options.setInterval && T(
						e,
						"setInterval",
						Re,
					), this._options.requestAnimationFrame && T(
						e,
						"requestAnimationFrame",
						Hi,
					), this._options.XMLHttpRequest &&
						("XMLHttpRequest" in e) &&
						T(XMLHttpRequest.prototype, "send", qi);
					var r = this._options.eventTarget;
					if (r) {
						var n = Array.isArray(r) ? r : Bi;
						n.forEach($i);
					}
				}, t.id = "TryCatch", t
		);
	}();
function Re(t) {
	return function () {
		for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
		var n = e[0];
		return (
			e[0] =
				q(
					n,
					{
						mechanism: {
							data: { function: M(t) },
							handled: !0,
							type: "instrument",
						},
					},
				), t.apply(this, e)
		);
	};
}
function Hi(t) {
	return function (e) {
		return t.apply(
			this,
			[
				q(
					e,
					{
						mechanism: {
							data: { function: "requestAnimationFrame", handler: M(t) },
							handled: !0,
							type: "instrument",
						},
					},
				),
			],
		);
	};
}
function qi(t) {
	return function () {
		for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
		var n = this, i = ["onload", "onerror", "onprogress", "onreadystatechange"];
		return (
			i.forEach(function (o) {
				(o in n) &&
					typeof n[o] == "function" &&
					T(
						n,
						o,
						function (a) {
							var s = {
								mechanism: {
									data: { function: o, handler: M(a) },
									handled: !0,
									type: "instrument",
								},
							},
								u = Jt(a);
							return (u && (s.mechanism.data.handler = M(u)), q(a, s));
						},
					);
			}), t.apply(this, e)
		);
	};
}
function $i(t) {
	var e = y(), r = e[t] && e[t].prototype;
	!r ||
		!r.hasOwnProperty ||
		!r.hasOwnProperty("addEventListener") ||
		(
			T(
				r,
				"addEventListener",
				function (n) {
					return function (i, o, a) {
						try {
							typeof o.handleEvent == "function" && (
								o.handleEvent =
									q(
										o.handleEvent.bind(o),
										{
											mechanism: {
												data: {
													function: "handleEvent",
													handler: M(o),
													target: t,
												},
												handled: !0,
												type: "instrument",
											},
										},
									)
							);
						} catch {}
						return n.apply(
							this,
							[
								i,
								q(
									o,
									{
										mechanism: {
											data: {
												function: "addEventListener",
												handler: M(o),
												target: t,
											},
											handled: !0,
											type: "instrument",
										},
									},
								),
								a,
							],
						);
					};
				},
			), T(
				r,
				"removeEventListener",
				function (n) {
					return function (i, o, a) {
						var s = o;
						try {
							var u = s && s.__sentry_wrapped__;
							u && n.call(this, i, u, a);
						} catch {}
						return n.call(this, i, s, a);
					};
				},
			)
		);
}
var ue = function () {
	function t(e) {
		this.name = t.id, this._options =
			c(
				{ console: !0, dom: !0, fetch: !0, history: !0, sentry: !0, xhr: !0 },
				e,
			);
	}
	return (
		t.prototype.addSentryBreadcrumb =
			function (e) {
				!this._options.sentry || E().addBreadcrumb(
					{
						category: "sentry." + (
							e.type === "transaction" ? "transaction" : "event"
						),
						event_id: e.event_id,
						level: e.level,
						message: H(e),
					},
					{ event: e },
				);
			}, t.prototype.setupOnce =
			function () {
				this._options.console && A("console", Yi), this._options.dom && A(
					"dom",
					zi(this._options.dom),
				), this._options.xhr && A("xhr", Wi), this._options.fetch && A(
					"fetch",
					Vi,
				), this._options.history && A("history", Xi);
			}, t.id = "Breadcrumbs", t
	);
}();
function zi(t) {
	function e(r) {
		var n, i = typeof t == "object" ? t.serializeAttribute : void 0;
		typeof i == "string" && (i = [i]);
		try {
			n = r.event.target ? Mt(r.event.target, i) : Mt(r.event, i);
		} catch {
			n = "<unknown>";
		}
		n.length !== 0 && E().addBreadcrumb(
			{ category: "ui." + r.name, message: n },
			{ event: r.event, name: r.name, global: r.global },
		);
	}
	return e;
}
function Yi(t) {
	var e = {
		category: "console",
		data: { arguments: t.args, logger: "console" },
		level: Sn(t.level),
		message: le(t.args, " "),
	};
	if (t.level === "assert") {
		if (t.args[0] === !1) {
			e.message =
				"Assertion failed: " + (le(t.args.slice(1), " ") || "console.assert"), e.data.arguments =
				t.args.slice(1);
		} else {
			return;
		}
	}
	E().addBreadcrumb(e, { input: t.args, level: t.level });
}
function Wi(t) {
	if (t.endTimestamp) {
		if (t.xhr.__sentry_own_request__) {
			return;
		}
		var e = t.xhr.__sentry_xhr__ || {},
			r = e.method,
			n = e.url,
			i = e.status_code,
			o = e.body;
		E().addBreadcrumb(
			{
				category: "xhr",
				data: { method: r, url: n, status_code: i },
				type: "http",
			},
			{ xhr: t.xhr, input: o },
		);
		return;
	}
}
function Vi(t) {
	!t.endTimestamp ||
		(t.fetchData.url.match(/sentry_key/) && t.fetchData.method === "POST") ||
		(
			t.error ? E().addBreadcrumb(
				{ category: "fetch", data: t.fetchData, level: P.Error, type: "http" },
				{ data: t.error, input: t.args },
			) : E().addBreadcrumb(
				{
					category: "fetch",
					data: c(c({}, t.fetchData), { status_code: t.response.status }),
					type: "http",
				},
				{ input: t.args, response: t.response },
			)
		);
}
function Xi(t) {
	var e = y(),
		r = t.from,
		n = t.to,
		i = It(e.location.href),
		o = It(r),
		a = It(n);
	o.path || (o = i), i.protocol === a.protocol &&
		i.host === a.host &&
		(n = a.relative), i.protocol === o.protocol &&
		i.host === o.host &&
		(r = o.relative), E().addBreadcrumb({
		category: "navigation",
		data: { from: r, to: n },
	});
}
var Gi = "cause",
	Ki = 5,
	_r = function () {
		function t(e) {
			e === void 0 && (e = {}), this.name = t.id, this._key = e.key || Gi, this._limit =
				e.limit || Ki;
		}
		return (
			t.prototype.setupOnce =
				function () {
					Qt(
						function (e, r) {
							var n = E().getIntegration(t);
							return n ? Ji(n._key, n._limit, e, r) : e;
						},
					);
				}, t.id = "LinkedErrors", t
		);
	}();
function Ji(t, e, r, n) {
	if (
		!r.exception ||
		!r.exception.values ||
		!n ||
		!C(n.originalException, Error)
	) {
		return r;
	}
	var i = yr(e, n.originalException, t);
	return (r.exception.values = S(i, r.exception.values), r);
}
function yr(t, e, r, n) {
	if (n === void 0 && (n = []), !C(e[r], Error) || (n.length + 1) >= t) {
		return n;
	}
	var i = sr(e[r]);
	return yr(t, e[r], r, S([i], n));
}
var U = y(),
	mr = function () {
		function t() {
			this.name = t.id;
		}
		return (
			t.prototype.setupOnce =
				function () {
					Qt(function (e) {
						if (E().getIntegration(t)) {
							if (!U.navigator && !U.location && !U.document) {
								return e;
							}
							var r = (e.request && e.request.url) || (
								U.location && U.location.href
							),
								n = (U.document || {}).referrer,
								i = (U.navigator || {}).userAgent,
								o = c(
									c(c({}, e.request && e.request.headers), n && { Referer: n }),
									i && { "User-Agent": i },
								),
								a = c(c({}, r && { url: r }), { headers: o });
							return c(c({}, e), { request: a });
						}
						return e;
					});
				}, t.id = "UserAgent", t
		);
	}(),
	Sr = function () {
		function t() {
			this.name = t.id;
		}
		return (
			t.prototype.setupOnce =
				function (e, r) {
					e(function (n) {
						var i = r().getIntegration(t);
						if (i) {
							try {
								if (Zi(n, i._previousEvent)) {
									return (
										p() && h.warn(
											"Event dropped due to being a duplicate of previously captured event.",
										), null
									);
								}
							} catch {
								return i._previousEvent = n;
							}
							return i._previousEvent = n;
						}
						return n;
					});
				}, t.id = "Dedupe", t
		);
	}();
function Zi(t, e) {
	return e ? !!(Qi(t, e) || to(t, e)) : !1;
}
function Qi(t, e) {
	var r = t.message, n = e.message;
	return !(
		(!r && !n) || (r && !n) || (!r && n) || r !== n || !br(t, e) || !Er(t, e)
	);
}
function to(t, e) {
	var r = xe(e), n = xe(t);
	return !(
		!r ||
			!n ||
			r.type !== n.type ||
			r.value !== n.value ||
			!br(t, e) ||
			!Er(t, e)
	);
}
function Er(t, e) {
	var r = Ie(t), n = Ie(e);
	if (!r && !n) {
		return !0;
	}
	if ((r && !n) || (!r && n) || (r = r, n = n, n.length !== r.length)) {
		return !1;
	}
	for (var i = 0; i < n.length; i++) {
		var o = n[i], a = r[i];
		if (
			o.filename !== a.filename ||
			o.lineno !== a.lineno ||
			o.colno !== a.colno ||
			o.function !== a.function
		) {
			return !1;
		}
	}
	return !0;
}
function br(t, e) {
	var r = t.fingerprint, n = e.fingerprint;
	if (!r && !n) {
		return !0;
	}
	if ((r && !n) || (!r && n)) {
		return !1;
	}
	r = r, n = n;
	try {
		return r.join("") === n.join("");
	} catch {
		return !1;
	}
}
function xe(t) {
	return t.exception && t.exception.values && t.exception.values[0];
}
function Ie(t) {
	var e = t.exception;
	if (e) {
		try {
			return e.values[0].stacktrace.frames;
		} catch {
			return;
		}
	} else if (t.stacktrace) {
		return t.stacktrace.frames;
	}
}
var eo = Object.freeze(
	Object.defineProperty(
		{
			__proto__: null,
			GlobalHandlers: Tt,
			TryCatch: gr,
			Breadcrumbs: ue,
			LinkedErrors: _r,
			UserAgent: mr,
			Dedupe: Sr,
		},
		Symbol.toStringTag,
		{ value: "Module" },
	),
),
	ro = function (t) {
		nt(e, t);
		function e(r) {
			r === void 0 && (r = {});
			var n = this;
			return (
				r._metadata = r._metadata || {}, r._metadata.sdk =
					r._metadata.sdk || {
						name: "sentry.javascript.browser",
						packages: [{ name: "npm:@sentry/browser", version: ht }],
						version: ht,
					}, n = t.call(this, Li, r) || this, n
			);
		}
		return (
			e.prototype.showReportDialog =
				function (r) {
					r === void 0 && (r = {});
					var n = y().document;
					if (!!n) {
						if (!this._isEnabled()) {
							p() && h.error(
								"Trying to call showReportDialog with Sentry Client disabled",
							);
							return;
						}
						Ai(c(c({}, r), { dsn: r.dsn || this.getDsn() }));
					}
				}, e.prototype._prepareEvent =
				function (r, n, i) {
					return (
						r.platform = r.platform || "javascript", t.prototype._prepareEvent.call(
							this,
							r,
							n,
							i,
						)
					);
				}, e.prototype._sendEvent =
				function (r) {
					var n = this.getIntegration(ue);
					n && n.addSentryBreadcrumb(r), t.prototype._sendEvent.call(this, r);
				}, e
		);
	}(Fn),
	no = [
		new or(),
		new ir(),
		new gr(),
		new ue(),
		new Tt(),
		new _r(),
		new Sr(),
		new mr(),
	];
function io(t) {
	if (
		t === void 0 && (t = {}), t.defaultIntegrations === void 0 && (
			t.defaultIntegrations = no
		), t.release === void 0
	) {
		var e = y();
		e.SENTRY_RELEASE && e.SENTRY_RELEASE.id && (t.release = e.SENTRY_RELEASE.id);
	}
	t.autoSessionTracking === void 0 && (t.autoSessionTracking = !0), t.sendClientReports === void 0 && (
		t.sendClientReports = !0
	), Yn(ro, t), t.autoSessionTracking && oo();
}
function Io(t) {
	t === void 0 && (t = {});
	var e = E(), r = e.getScope();
	r && (t.user = c(c({}, r.getUser()), t.user)), t.eventId || (
		t.eventId = e.lastEventId()
	);
	var n = e.getClient();
	n && n.showReportDialog(t);
}
function No() {
	return E().lastEventId();
}
function Po() {}
function Lo(t) {
	t();
}
function jo(t) {
	var e = E().getClient();
	return e ? e.flush(t) : (
		p() && h.warn("Cannot flush events. No client defined."), j(!1)
	);
}
function Ao(t) {
	var e = E().getClient();
	return e ? e.close(t) : (
		p() && h.warn("Cannot flush events and disable SDK. No client defined."), j(
			!1,
		)
	);
}
function Do(t) {
	return q(t)();
}
function Ne(t) {
	t.startSession({ ignoreDuration: !0 }), t.captureSession();
}
function oo() {
	var t = y(), e = t.document;
	if (typeof e > "u") {
		p() && h.warn(
			"Session tracking in non-browser environment with @sentry/browser is not supported.",
		);
		return;
	}
	var r = E();
	!r.captureSession || (
		Ne(r), A(
			"history",
			function (n) {
				var i = n.from, o = n.to;
				i === void 0 || i === o || Ne(E());
			},
		)
	);
}
var Mo = "sentry.javascript.browser", wr = {}, At = y();
At.Sentry && At.Sentry.Integrations && (wr = At.Sentry.Integrations);
var Co = c(c(c({}, wr), ei), eo),
	Tr = ["activate", "mount", "update"],
	ao = /(?:^|[-_])(\w)/g,
	so = function (t) {
		return t
			.replace(
				ao,
				function (e) {
					return e.toUpperCase();
				},
			)
			.replace(/[-_]/g, "");
	},
	uo = "<Root>",
	Pe = "<Anonymous>",
	co = function (t, e) {
		for (var r = ""; e; ) (e % 2) === 1 && (r += t), e > 1 && (t += t), e >>= 1;
		return r;
	},
	tt = function (t, e) {
		if (!t) {
			return Pe;
		}
		if (t.$root === t) {
			return uo;
		}
		var r = t.$options, n = r.name || r._componentTag, i = r.__file;
		if (!n && i) {
			var o = i.match(/([^/\\]+)\.vue$/);
			o && (n = o[1]);
		}
		return (n ? "<" + so(n) + ">" : Pe) + (i && e !== !1 ? " at " + i : "");
	},
	fo = function (t) {
		var e, r, n;
		if (
			(
				((e = t) === null || e === void 0 ? void 0 : e._isVue) || (
					(r = t) === null || r === void 0 ? void 0 : r.__isVue
				)
			) && ((n = t) === null || n === void 0 ? void 0 : n.$parent)
		) {
			for (var i = [], o = 0; t; ) {
				if (i.length > 0) {
					var a = i[i.length - 1];
					if (a.constructor === t.constructor) {
						o += 1, t = t.$parent;
						continue;
					} else {
						o > 0 && (i[i.length - 1] = [a, o], o = 0);
					}
				}
				i.push(t), t = t.$parent;
			}
			var s = i
				.map(
					function (u, f) {
						return "" + (
							(f === 0 ? "---> " : co(" ", 5 + (f * 2))) + (
								Array.isArray(u) ? tt(u[0]) +
									"... (" +
									u[1] +
									" recursive calls)" : tt(u)
							)
						);
					},
				)
				.join(
					`
`,
				);
			return `

found in

` + s;
		}
		return `

(found in ` +
		tt(t) +
		")";
	},
	lo = function (t, e) {
		var r = t.config, n = r.errorHandler, i = r.warnHandler, o = r.silent;
		t.config.errorHandler =
			function (a, s, u) {
				var f = tt(s, !1),
					l = s ? fo(s) : "",
					d = { componentName: f, lifecycleHook: u, trace: l };
				if (
					s && e.attachProps && (d.propsData = s.$options.propsData || s.$props), setTimeout(function () {
						E()
							.withScope(function (_) {
								_.setContext("vue", d), E().captureException(a);
							});
					}), typeof n == "function" && n.call(t, a, s, u), e.logErrors
				) {
					var v = typeof console < "u",
						g =
							"Error in " + u + ': "' + (a && a.toString()) + '"';
					i ? i.call(null, g, s, l) : v &&
						!o &&
						console.error("[Vue warn]: " + g + l);
				}
			};
	},
	Le = "ui.vue",
	po = {
		activate: ["activated", "deactivated"],
		create: ["beforeCreate", "created"],
		destroy: ["beforeDestroy", "destroyed"],
		mount: ["beforeMount", "mounted"],
		update: ["beforeUpdate", "updated"],
	};
function je() {
	var t;
	return (t = E().getScope()) === null || t === void 0 ? void 0 : t.getTransaction();
}
function ho(t, e, r) {
	t.$_sentryRootSpanTimer && clearTimeout(t.$_sentryRootSpanTimer), t.$_sentryRootSpanTimer =
		setTimeout(
			function () {
				var n;
				!((n = t.$root) === null || n === void 0) &&
					n.$_sentryRootSpan &&
					(
						t.$root.$_sentryRootSpan.finish(e), t.$root.$_sentryRootSpan =
							void 0
					);
			},
			r,
		);
}
var vo = function (t) {
	var e,
		r,
		n = (t.hooks || [])
			.concat(Tr)
			.filter(
				function (f, l, d) {
					return d.indexOf(f) === l;
				},
			),
		i = {},
		o = function (f) {
			var l, d, v = po[f];
			if (!v) {
				return (p() && h.warn("Unknown hook: " + f), "continue");
			}
			var g = function (R) {
				i[R] =
					function () {
						var G, $ = this.$root === this;
						if ($) {
							var K = je();
							K && (
								this.$_sentryRootSpan =
									this.$_sentryRootSpan || K.startChild({
										description: "Application Render",
										op: Le,
									})
							);
						}
						var ce = tt(this, !1),
							kr = Array.isArray(t.trackComponents) ? t.trackComponents.includes(
								ce,
							) : t.trackComponents;
						if (!(!$ && !kr)) {
							if (this.$_sentrySpans = this.$_sentrySpans || {}, R == v[0]) {
								var K = (
									(G = this.$root) === null || G === void 0 ? void 0 : G.$_sentryRootSpan
								) || je();
								K && (
									this.$_sentrySpans[f] =
										K.startChild({
											description: "Vue <" + ce + ">",
											op: Le + "." + f,
										})
								);
							} else {
								var fe = this.$_sentrySpans[f];
								if (!fe) {
									return;
								}
								fe.finish(), ho(this, qt(), t.timeout);
							}
						}
					};
			};
			try {
				for (var _ = (l = void 0, L(v)), k = _.next(); !k.done; k = _.next()) {
					var w = k.value;
					g(w);
				}
			} catch (R) {
				l = { error: R };
			} finally {
				try {
					k && !k.done && (d = _.return) && d.call(_);
				} finally {
					if (l) {
						throw l.error;
					}
				}
			}
		};
	try {
		for (var a = L(n), s = a.next(); !s.done; s = a.next()) {
			var u = s.value;
			o(u);
		}
	} catch (f) {
		e = { error: f };
	} finally {
		try {
			s && !s.done && (r = a.return) && r.call(a);
		} finally {
			if (e) {
				throw e.error;
			}
		}
	}
	return i;
},
	go = {
		Vue: y().Vue,
		attachProps: !0,
		logErrors: !1,
		hooks: Tr,
		timeout: 2e3,
		trackComponents: !1,
		_metadata: {
			sdk: {
				name: "sentry.javascript.vue",
				packages: [{ name: "npm:@sentry/vue", version: ht }],
				version: ht,
			},
		},
	};
function Fo(t) {
	t === void 0 && (t = {});
	var e = c(c({}, go), t);
	if (io(e), !e.Vue && !e.app) {
		p() && h.warn(
			"Misconfigured SDK. Vue specific errors will not be captured.\nUpdate your `Sentry.init` call with an appropriate config option:\n`app` (Application Instance - Vue 3) or `Vue` (Vue Constructor - Vue 2).",
		);
		return;
	}
	if (e.app) {
		var r = Array.isArray(e.app) ? e.app : [e.app];
		r.forEach(function (n) {
			return Ae(n, e);
		});
	} else {
		e.Vue && Ae(e.Vue, e);
	}
}
var Ae = function (t, e) {
	lo(t, e), (("tracesSampleRate" in e) || ("tracesSampler" in e)) && t.mixin(
		vo(c(c({}, e), e.tracingOptions)),
	);
};
function Uo(t) {
	return function (e, r, n) {
		r === void 0 && (r = !0), n === void 0 && (n = !0), t.onError(function (i) {
			return Ke(i);
		}), t.beforeEach(
			function (i, o, a) {
				var s = o.name == null && o.matched.length === 0,
					u = { "routing.instrumentation": "vue-router" },
					f = { params: i.params, query: i.query };
				r &&
					s &&
					e({
						name: (i.name && i.name.toString()) || i.path,
						op: "pageload",
						tags: u,
						data: f,
					}), n &&
					!s &&
					e({
						name: (i.name && i.name.toString()) ||
							(i.matched[0] && i.matched[0].path) ||
							i.path,
						op: "navigation",
						tags: u,
						data: f,
					}), a();
			},
		);
	};
}
export {
	ro as BrowserClient,
	ee as Hub,
	Co as Integrations,
	Mo as SDK_NAME,
	ht as SDK_VERSION,
	lt as Scope,
	Rn as Session,
	P as Severity,
	xo as Transports,
	So as addBreadcrumb,
	Qt as addGlobalEventProcessor,
	lo as attachErrorHandler,
	yo as captureEvent,
	Ke as captureException,
	_o as captureMessage,
	Ao as close,
	mo as configureScope,
	vo as createTracingMixins,
	no as defaultIntegrations,
	xi as eventFromException,
	Ii as eventFromMessage,
	jo as flush,
	Po as forceLoad,
	E as getCurrentHub,
	D as getHubFromCarrier,
	Fo as init,
	Ai as injectReportDialog,
	No as lastEventId,
	Se as makeMain,
	Lo as onLoad,
	Eo as setContext,
	To as setExtra,
	bo as setExtras,
	ko as setTag,
	wo as setTags,
	Oo as setUser,
	Io as showReportDialog,
	Ro as startTransaction,
	Uo as vueRouterInstrumentation,
	Nn as withScope,
	Do as wrap,
};
