"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
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
function Z(t, e) {
	Dt(t, e);
	function r() {
		this.constructor = t;
	}
	t.prototype =
		e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var u = function () {
	return (
		u =
			Object.assign || function (e) {
				for (var r, n = 1, i = arguments.length; n < i; n++) {
					r = arguments[n];
					for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (
						e[o] = r[o]
					);
				}
				return e;
			}, u.apply(this, arguments)
	);
};
function C(t) {
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
function k(t, e) {
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
function m() {
	for (var t = [], e = 0; e < arguments.length; e++) t =
		t.concat(k(arguments[e]));
	return t;
}
exports.Severity = void 0;
(function (t) {
	t.Fatal = "fatal", t.Error = "error", t.Warning = "warning", t.Log = "log", t.Info =
		"info", t.Debug = "debug", t.Critical = "critical";
})(exports.Severity || (exports.Severity = {}));
function vr(t) {
	t.then(
		null,
		function (e) {
			console.error(e);
		},
	);
}
var gr = !0;
function p() {
	return gr;
}
function _r() {
	return typeof __SENTRY_BROWSER_BUNDLE__ != "undefined" && !!__SENTRY_BROWSER_BUNDLE__;
}
function zt() {
	return !_r() && Object.prototype.toString.call(
		typeof process != "undefined" ? process : 0,
	) === "[object process]";
}
function yr(t, e) {
	return t.require(e);
}
var mr = {};
function y() {
	return zt()
		? global
		: typeof window != "undefined"
			? window
			: typeof self != "undefined"
				? self
				: mr;
}
var Te = Object.prototype.toString;
function ke(t) {
	switch (Te.call(t)) {
		case "[object Error]":
		case "[object Exception]":
		case "[object DOMException]":
			return !0;
		default:
			return D(t, Error);
	}
}
function $(t, e) {
	return Te.call(t) === ("[object " + e + "]");
}
function Oe(t) {
	return $(t, "ErrorEvent");
}
function ie(t) {
	return $(t, "DOMError");
}
function Sr(t) {
	return $(t, "DOMException");
}
function H(t) {
	return $(t, "String");
}
function tt(t) {
	return t === null || (typeof t != "object" && typeof t != "function");
}
function q(t) {
	return $(t, "Object");
}
function $t(t) {
	return typeof Event != "undefined" && D(t, Event);
}
function oe(t) {
	return typeof Element != "undefined" && D(t, Element);
}
function Er(t) {
	return $(t, "RegExp");
}
function Wt(t) {
	return Boolean(t && t.then && typeof t.then == "function");
}
function br(t) {
	return q(t) &&
	("nativeEvent" in t) &&
	("preventDefault" in t) &&
	("stopPropagation" in t);
}
function D(t, e) {
	try {
		return t instanceof e;
	} catch {
		return !1;
	}
}
function lt(t, e) {
	try {
		for (
			var r = t,
				n = 5,
				i = 80,
				o = [],
				a = 0,
				s = 0,
				c = " > ",
				f = c.length,
				d = void 0;
			r &&
				a++ < n &&
				(
					d = wr(r, e), !(
						d === "html" || (a > 1 && (s + (o.length * f) + d.length) >= i)
					)
				);
		) o.push(d), s += d.length, r = r.parentNode;
		return o.reverse().join(c);
	} catch {
		return "<unknown>";
	}
}
function wr(t, e) {
	var r = t, n = [], i, o, a, s, c;
	if (!r || !r.tagName) {
		return "";
	}
	n.push(r.tagName.toLowerCase());
	var f = e && e.length ? e
		.filter(function (l) {
			return r.getAttribute(l);
		})
		.map(function (l) {
			return [l, r.getAttribute(l)];
		}) : null;
	if (f && f.length) {
		f.forEach(function (l) {
			n.push("[" + l[0] + '="' + l[1] + '"]');
		});
	} else if (r.id && n.push("#" + r.id), i = r.className, i && H(i)) {
		for (o = i.split(/\s+/), c = 0; c < o.length; c++) n.push("." + o[c]);
	}
	var d = ["type", "name", "title", "alt"];
	for (c = 0; c < d.length; c++) a = d[c], s = r.getAttribute(a), s && n.push(
		"[" + a + '="' + s + '"]',
	);
	return n.join("");
}
function Tr() {
	var t = y();
	try {
		return t.document.location.href;
	} catch {
		return "";
	}
}
var kr = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? Or : xr);
function Or(t, e) {
	return (t.__proto__ = e, t);
}
function xr(t, e) {
	for (var r in e) Object.prototype.hasOwnProperty.call(t, r) || (t[r] = e[r]);
	return t;
}
var S = function (t) {
	Z(e, t);
	function e(r) {
		var n = this.constructor, i = t.call(this, r) || this;
		return (
			i.message = r, i.name = n.prototype.constructor.name, kr(i, n.prototype), i
		);
	}
	return e;
}(Error),
	Rr = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function Ir(t) {
	return t === "http" || t === "https";
}
function et(t, e) {
	e === void 0 && (e = !1);
	var r = t.host,
		n = t.path,
		i = t.pass,
		o = t.port,
		a = t.projectId,
		s = t.protocol,
		c = t.publicKey;
	return s +
	"://" +
	c +
	(e && i ? ":" + i : "") +
	("@" + r + (o ? ":" + o : "") + "/" + (n && n + "/") + a);
}
function Nr(t) {
	var e = Rr.exec(t);
	if (!e) {
		throw new S("Invalid Sentry Dsn: " + t);
	}
	var r = k(e.slice(1), 6),
		n = r[0],
		i = r[1],
		o = r[2],
		a = o === void 0 ? "" : o,
		s = r[3],
		c = r[4],
		f = c === void 0 ? "" : c,
		d = r[5],
		l = "",
		v = d,
		g = v.split("/");
	if (g.length > 1 && (l = g.slice(0, -1).join("/"), v = g.pop()), v) {
		var w = v.match(/^\d+/);
		w && (v = w[0]);
	}
	return xe({
		host: s,
		pass: a,
		path: l,
		projectId: v,
		port: f,
		protocol: n,
		publicKey: i,
	});
}
function xe(t) {
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
function Pr(t) {
	if (!!p()) {
		var e = t.port,
			r = t.projectId,
			n = t.protocol,
			i = ["protocol", "publicKey", "host", "projectId"];
		if (
			i.forEach(function (o) {
				if (!t[o]) {
					throw new S("Invalid Sentry Dsn: " + o + " missing");
				}
			}), !r.match(/^\d+$/)
		) {
			throw new S("Invalid Sentry Dsn: Invalid projectId " + r);
		}
		if (!Ir(n)) {
			throw new S("Invalid Sentry Dsn: Invalid protocol " + n);
		}
		if (e && isNaN(parseInt(e, 10))) {
			throw new S("Invalid Sentry Dsn: Invalid port " + e);
		}
		return !0;
	}
}
function Gt(t) {
	var e = typeof t == "string" ? Nr(t) : xe(t);
	return (Pr(e), e);
}
var Lr = ["fatal", "error", "warning", "log", "info", "debug", "critical"],
	G = y(),
	bt = "Sentry Logger ",
	Re = ["debug", "info", "warn", "error", "log", "assert"];
function ft(t) {
	var e = y();
	if (!("console" in e)) {
		return t();
	}
	var r = e.console, n = {};
	Re.forEach(function (o) {
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
var jr = function () {
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
				!this._enabled || ft(function () {
					var n;
					(n = G.console).log.apply(n, m([bt + "[Log]:"], e));
				});
			}, t.prototype.warn =
			function () {
				for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
				!this._enabled || ft(function () {
					var n;
					(n = G.console).warn.apply(n, m([bt + "[Warn]:"], e));
				});
			}, t.prototype.error =
			function () {
				for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
				!this._enabled || ft(function () {
					var n;
					(n = G.console).error.apply(n, m([bt + "[Error]:"], e));
				});
			}, t
	);
}(),
	Mt = G.__SENTRY__ || {},
	h = Mt.logger || new jr();
p() && (Mt.logger = h, G.__SENTRY__ = Mt);
function X(t, e) {
	return (
		e === void 0 && (e = 0), typeof t != "string" || e === 0 || t.length <= e ? t : t.substr(
			0,
			e,
		) + "..."
	);
}
function ae(t, e) {
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
function Xt(t, e) {
	return H(t)
		? Er(e)
			? e.test(t)
			: typeof e == "string"
				? t.indexOf(e) !== -1
				: !1
		: !1;
}
function b(t, e, r) {
	if (e in t) {
		var n = t[e], i = r(n);
		if (typeof i == "function") {
			try {
				Ie(i, n);
			} catch {}
		}
		t[e] = i;
	}
}
function pt(t, e, r) {
	Object.defineProperty(t, e, { value: r, writable: !0, configurable: !0 });
}
function Ie(t, e) {
	var r = e.prototype || {};
	t.prototype = e.prototype = r, pt(t, "__sentry_original__", e);
}
function Jt(t) {
	return t.__sentry_original__;
}
function Dr(t) {
	return Object
		.keys(t)
		.map(function (e) {
			return encodeURIComponent(e) + "=" + encodeURIComponent(t[e]);
		})
		.join("&");
}
function Ne(t) {
	if (ke(t)) {
		var e = t, r = { message: e.message, name: e.name, stack: e.stack };
		for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
		return r;
	}
	if ($t(t)) {
		var i = t, o = {};
		o.type = i.type;
		try {
			o.target =
				oe(i.target) ? lt(i.target) : Object.prototype.toString.call(i.target);
		} catch {
			o.target = "<unknown>";
		}
		try {
			o.currentTarget =
				oe(i.currentTarget) ? lt(i.currentTarget) : Object.prototype.toString.call(
					i.currentTarget,
				);
		} catch {
			o.currentTarget = "<unknown>";
		}
		typeof CustomEvent != "undefined" &&
			D(t, CustomEvent) &&
			(o.detail = i.detail);
		for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (o[a] = i[a]);
		return o;
	}
	return t;
}
function Mr(t, e) {
	e === void 0 && (e = 40);
	var r = Object.keys(Ne(t));
	if (r.sort(), !r.length) {
		return "[object has no keys]";
	}
	if (r[0].length >= e) {
		return X(r[0], e);
	}
	for (var n = r.length; n > 0; n--) {
		var i = r.slice(0, n).join(", ");
		if (!(i.length > e)) {
			return n === r.length ? i : X(i, e);
		}
	}
	return "";
}
function Ft(t) {
	var e, r;
	if (q(t)) {
		var n = t, i = {};
		try {
			for (var o = C(Object.keys(n)), a = o.next(); !a.done; a = o.next()) {
				var s = a.value;
				typeof n[s] != "undefined" && (i[s] = Ft(n[s]));
			}
		} catch (c) {
			e = { error: c };
		} finally {
			try {
				a && !a.done && (r = o.return) && r.call(o);
			} finally {
				if (e) {
					throw e.error;
				}
			}
		}
		return i;
	}
	return Array.isArray(t) ? t.map(Ft) : t;
}
var Fr = 50;
function Cr() {
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
		var o, a, s, c;
		i === void 0 && (i = 0);
		var f = [];
		try {
			for (
				var d = C(
					n
						.split(
							`
`,
						)
						.slice(i),
				),
					l = d.next();
				!l.done;
				l = d.next()
			) {
				var v = l.value;
				try {
					for (var g = (s = void 0, C(r)), w = g.next(); !w.done; w = g.next()) {
						var B = w.value, R = B(v);
						if (R) {
							f.push(R);
							break;
						}
					}
				} catch (I) {
					s = { error: I };
				} finally {
					try {
						w && !w.done && (c = g.return) && c.call(g);
					} finally {
						if (s) {
							throw s.error;
						}
					}
				}
			}
		} catch (I) {
			o = { error: I };
		} finally {
			try {
				l && !l.done && (a = d.return) && a.call(d);
			} finally {
				if (o) {
					throw o.error;
				}
			}
		}
		return Ar(f);
	};
}
function Ar(t) {
	if (!t.length) {
		return [];
	}
	var e = t, r = e[0].function || "", n = e[e.length - 1].function || "";
	return (
		(r.indexOf("captureMessage") !== -1 || r.indexOf("captureException") !== -1) && (
			e = e.slice(1)
		), n.indexOf("sentryWrapped") !== -1 && (e = e.slice(0, -1)), e
			.slice(0, Fr)
			.map(function (i) {
				return u(
					u({}, i),
					{ filename: i.filename || e[0].filename, function: i.function || "?" },
				);
			})
			.reverse()
	);
}
var wt = "<anonymous>";
function j(t) {
	try {
		return !t || typeof t != "function" ? wt : t.name || wt;
	} catch {
		return wt;
	}
}
function ht() {
	if (!("fetch" in y())) {
		return !1;
	}
	try {
		return (new Headers(), new Request(""), new Response(), !0);
	} catch {
		return !1;
	}
}
function Ct(t) {
	return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(
		t.toString(),
	);
}
function Br() {
	if (!ht()) {
		return !1;
	}
	var t = y();
	if (Ct(t.fetch)) {
		return !0;
	}
	var e = !1, r = t.document;
	if (r && typeof r.createElement == "function") {
		try {
			var n = r.createElement("iframe");
			n.hidden = !0, r.head.appendChild(n), n.contentWindow &&
				n.contentWindow.fetch &&
				(e = Ct(n.contentWindow.fetch)), r.head.removeChild(n);
		} catch (i) {
			p() && h.warn(
				"Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
				i,
			);
		}
	}
	return e;
}
function Ur() {
	if (!ht()) {
		return !1;
	}
	try {
		return (new Request("_", { referrerPolicy: "origin" }), !0);
	} catch {
		return !1;
	}
}
function Hr() {
	var t = y(),
		e = t.chrome,
		r =
			e && e.app && e.app.runtime,
		n =
			("history" in t) && !!t.history.pushState && !!t.history.replaceState;
	return !r && n;
}
var _ = y(), J = {}, se = {};
function qr(t) {
	if (!se[t]) {
		switch (se[t] = !0, t) {
			case "console":
				Yr();
				break;
			case "dom":
				Qr();
				break;
			case "xhr":
				Gr();
				break;
			case "fetch":
				zr();
				break;
			case "history":
				Xr();
				break;
			case "error":
				Zr();
				break;
			case "unhandledrejection":
				tn();
				break;
			default:
				p() && h.warn("unknown instrumentation type:", t);
				return;
		}
	}
}
function L(t, e) {
	J[t] = J[t] || [], J[t].push(e), qr(t);
}
function x(t, e) {
	var r, n;
	if (!(!t || !J[t])) {
		try {
			for (var i = C(J[t] || []), o = i.next(); !o.done; o = i.next()) {
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
							j(a) +
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
function Yr() {
	("console" in _) && Re.forEach(function (t) {
		(t in _.console) && b(
			_.console,
			t,
			function (e) {
				return function () {
					for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
					x("console", { args: r, level: t }), e && e.apply(_.console, r);
				};
			},
		);
	});
}
function zr() {
	!Br() || b(
		_,
		"fetch",
		function (t) {
			return function () {
				for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
				var n = {
					args: e,
					fetchData: { method: $r(e), url: Wr(e) },
					startTimestamp: Date.now(),
				};
				return (
					x("fetch", u({}, n)), t
						.apply(_, e)
						.then(
							function (i) {
								return (
									x(
										"fetch",
										u(u({}, n), { endTimestamp: Date.now(), response: i }),
									), i
								);
							},
							function (i) {
								throw x(
									"fetch",
									u(u({}, n), { endTimestamp: Date.now(), error: i }),
								), i;
							},
						)
				);
			};
		},
	);
}
function $r(t) {
	return (
		t === void 0 && (t = []), ("Request" in _) &&
			D(t[0], Request) &&
			t[0].method
			? String(t[0].method).toUpperCase()
			: t[1] && t[1].method
				? String(t[1].method).toUpperCase()
				: "GET"
	);
}
function Wr(t) {
	return (
		t === void 0 && (t = []), typeof t[0] == "string"
			? t[0]
			: ("Request" in _) && D(t[0], Request)
				? t[0].url
				: String(t[0])
	);
}
function Gr() {
	if ("XMLHttpRequest" in _) {
		var t = XMLHttpRequest.prototype;
		b(
			t,
			"open",
			function (e) {
				return function () {
					for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
					var i = this,
						o = r[1],
						a = i.__sentry_xhr__ =
							{ method: H(r[0]) ? r[0].toUpperCase() : r[0], url: r[1] };
					H(o) &&
						a.method === "POST" &&
						o.match(/sentry_key/) &&
						(i.__sentry_own_request__ = !0);
					var s = function () {
						if (i.readyState === 4) {
							try {
								a.status_code = i.status;
							} catch {}
							x(
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
						("onreadystatechange" in i) && typeof i.onreadystatechange == "function" ? b(
							i,
							"onreadystatechange",
							function (c) {
								return function () {
									for (var f = [], d = 0; d < arguments.length; d++) f[d] =
										arguments[d];
									return (s(), c.apply(i, f));
								};
							},
						) : i.addEventListener("readystatechange", s), e.apply(i, r)
					);
				};
			},
		), b(
			t,
			"send",
			function (e) {
				return function () {
					for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
					return (
						this.__sentry_xhr__ &&
							r[0] !== void 0 &&
							(this.__sentry_xhr__.body = r[0]), x(
							"xhr",
							{ args: r, startTimestamp: Date.now(), xhr: this },
						), e.apply(this, r)
					);
				};
			},
		);
	}
}
var ot;
function Xr() {
	if (!Hr()) {
		return;
	}
	var t = _.onpopstate;
	_.onpopstate =
		function () {
			for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
			var i = _.location.href, o = ot;
			if (ot = i, x("history", { from: o, to: i }), t) {
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
				var a = ot, s = String(o);
				ot = s, x("history", { from: a, to: s });
			}
			return r.apply(this, n);
		};
	}
	b(_.history, "pushState", e), b(_.history, "replaceState", e);
}
var Jr = 1e3, at, st;
function Kr(t, e) {
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
function Vr(t) {
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
function ue(t, e) {
	return (
		e === void 0 && (e = !1), function (r) {
			if (!(!r || st === r) && !Vr(r)) {
				var n = r.type === "keypress" ? "input" : r.type;
				at === void 0 ? (t({ event: r, name: n, global: e }), st = r) : Kr(
					st,
					r,
				) && (t({ event: r, name: n, global: e }), st = r), clearTimeout(at), at =
					_.setTimeout(
						function () {
							at = void 0;
						},
						Jr,
					);
			}
		}
	);
}
function Qr() {
	if ("document" in _) {
		var t = x.bind(null, "dom"), e = ue(t, !0);
		_.document.addEventListener("click", e, !1), _.document.addEventListener(
			"keypress",
			e,
			!1,
		), ["EventTarget", "Node"].forEach(function (r) {
			var n = _[r] && _[r].prototype;
			!n ||
				!n.hasOwnProperty ||
				!n.hasOwnProperty("addEventListener") ||
				(
					b(
						n,
						"addEventListener",
						function (i) {
							return function (o, a, s) {
								if (o === "click" || o == "keypress") {
									try {
										var c = this,
											f = c.__sentry_instrumentation_handlers__ =
												c.__sentry_instrumentation_handlers__ || {},
											d = f[o] = f[o] || { refCount: 0 };
										if (!d.handler) {
											var l = ue(t);
											d.handler = l, i.call(this, o, l, s);
										}
										d.refCount += 1;
									} catch {}
								}
								return i.call(this, o, a, s);
							};
						},
					), b(
						n,
						"removeEventListener",
						function (i) {
							return function (o, a, s) {
								if (o === "click" || o == "keypress") {
									try {
										var c = this,
											f = c.__sentry_instrumentation_handlers__ || {},
											d = f[o];
										d && (
											d.refCount -= 1, d.refCount <= 0 && (
												i.call(this, o, d.handler, s), d.handler = void 0, delete f[o]
											), Object.keys(f).length === 0 && delete c.__sentry_instrumentation_handlers__
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
var Tt = null;
function Zr() {
	Tt = _.onerror, _.onerror =
		function (t, e, r, n, i) {
			return (
				x("error", { column: n, error: i, line: r, msg: t, url: e }), Tt ? Tt.apply(
					this,
					arguments,
				) : !1
			);
		};
}
var kt = null;
function tn() {
	kt = _.onunhandledrejection, _.onunhandledrejection =
		function (t) {
			return (x("unhandledrejection", t), kt ? kt.apply(this, arguments) : !0);
		};
}
function en() {
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
function U() {
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
function Ot(t) {
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
function Pe(t) {
	return t.exception && t.exception.values ? t.exception.values[0] : void 0;
}
function F(t) {
	var e = t.message, r = t.event_id;
	if (e) {
		return e;
	}
	var n = Pe(t);
	return n
		? n.type && n.value
			? n.type + ": " + n.value
			: n.type || n.value || r || "<unknown>"
		: r || "<unknown>";
}
function At(t, e, r) {
	var n = t.exception = t.exception || {},
		i = n.values = n.values || [],
		o = i[0] = i[0] || {};
	o.value || (o.value = e || ""), o.type || (o.type = r || "Error");
}
function V(t, e) {
	var r = Pe(t);
	if (!!r) {
		var n = { type: "generic", handled: !0 }, i = r.mechanism;
		if (r.mechanism = u(u(u({}, n), i), e), e && ("data" in e)) {
			var o = u(u({}, i && i.data), e.data);
			r.mechanism.data = o;
		}
	}
}
function ce(t) {
	if (t && t.__sentry_captured__) {
		return !0;
	}
	try {
		pt(t, "__sentry_captured__", !0);
	} catch {}
	return !1;
}
function N(t, e, r) {
	e === void 0 && (e = 1 / 0), r === void 0 && (r = 1 / 0);
	try {
		return je("", t, e, r);
	} catch {
		return "**non-serializable**";
	}
}
function Le(t, e, r) {
	e === void 0 && (e = 3), r === void 0 && (r = 100 * 1024);
	var n = N(t, e);
	return on(n) > r ? Le(t, e - 1, r) : n;
}
function je(t, e, r, n, i) {
	r === void 0 && (r = 1 / 0), n === void 0 && (n = 1 / 0), i === void 0 && (
		i = en()
	);
	var o = k(i, 2), a = o[0], s = o[1];
	if (r === 0) {
		return rn(e);
	}
	if (e != null && typeof e.toJSON == "function") {
		return e.toJSON();
	}
	var c = De(e, t);
	if (tt(c)) {
		return c;
	}
	var f = Ne(e), d = Array.isArray(e) ? [] : {};
	if (a(e)) {
		return "[Circular ~]";
	}
	var l = 0;
	for (var v in f) if (!!Object.prototype.hasOwnProperty.call(f, v)) {
		if (l >= n) {
			d[v] = "[MaxProperties ~]";
			break;
		}
		l += 1;
		var g = f[v];
		d[v] = je(v, g, r - 1, n, i);
	}
	return (s(e), d);
}
function rn(t) {
	if (typeof t == "string") {
		return t;
	}
	var e = Object.prototype.toString.call(t);
	if (e === "[object Object]") {
		return "[Object]";
	}
	if (e === "[object Array]") {
		return "[Array]";
	}
	var r = De(t);
	return tt(r) ? r : e;
}
function De(t, e) {
	return e === "domain" && t && typeof t == "object" && t._events
		? "[Domain]"
		: e === "domainEmitter"
			? "[DomainEmitter]"
			: typeof global != "undefined" && t === global
				? "[Global]"
				: typeof window != "undefined" && t === window
					? "[Window]"
					: typeof document != "undefined" && t === document
						? "[Document]"
						: br(t)
							? "[SyntheticEvent]"
							: typeof t == "number" && t !== t
								? "[NaN]"
								: t === void 0
									? "[undefined]"
									: typeof t == "function"
										? "[Function: " + j(t) + "]"
										: typeof t == "symbol"
											? "[" + String(t) + "]"
											: typeof t == "bigint"
												? "[BigInt: " + String(t) + "]"
												: t;
}
function nn(t) {
	return ~-encodeURI(t).split(/%..|./).length;
}
function on(t) {
	return nn(JSON.stringify(t));
}
function Y(t) {
	return new A(function (e) {
		e(t);
	});
}
function Bt(t) {
	return new A(
		function (e, r) {
			r(t);
		},
	);
}
var A = function () {
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
					if (Wt(i)) {
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
function an(t) {
	var e = [];
	function r() {
		return t === void 0 || e.length < t;
	}
	function n(a) {
		return e.splice(e.indexOf(a), 1)[0];
	}
	function i(a) {
		if (!r()) {
			return Bt(new S("Not adding Promise due to buffer limit reached."));
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
		return new A(
			function (s, c) {
				var f = e.length;
				if (!f) {
					return s(!0);
				}
				var d = setTimeout(
					function () {
						a && a > 0 && s(!1);
					},
					a,
				);
				e.forEach(function (l) {
					Y(l)
						.then(
							function () {
								--f || (clearTimeout(d), s(!0));
							},
							c,
						);
				});
			},
		);
	}
	return { $: e, add: i, drain: o };
}
function sn(t) {
	return Lr.indexOf(t) !== -1;
}
function un(t) {
	return t === "warn"
		? exports.Severity.Warning
		: sn(t)
			? t
			: exports.Severity.Log;
}
function cn(t) {
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
var Ut = {
	nowSeconds: function () {
		return Date.now() / 1e3;
	},
};
function fn() {
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
function ln() {
	try {
		var t = yr(module, "perf_hooks");
		return t.performance;
	} catch {
		return;
	}
}
var xt = zt() ? ln() : fn(),
	fe = xt === void 0 ? Ut : {
		nowSeconds: function () {
			return (xt.timeOrigin + xt.now()) / 1e3;
		},
	},
	vt = Ut.nowSeconds.bind(Ut),
	le = fe.nowSeconds.bind(fe);
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
			c = s ? Math.abs(a + r - n) : e,
			f = c < e;
		return o || f
			? i <= c
				? t.timeOrigin
				: a
			: n;
	}
})();
function gt(t, e) {
	return (e === void 0 && (e = []), [t, e]);
}
function Kt(t) {
	var e = k(t, 2), r = e[0], n = e[1], i = JSON.stringify(r);
	return n.reduce(
		function (o, a) {
			var s = k(a, 2),
				c = s[0],
				f = s[1],
				d = tt(f) ? String(f) : JSON.stringify(f);
			return o +
			`
` +
			JSON.stringify(c) +
			`
` +
			d;
		},
		i,
	);
}
function dn(t, e, r) {
	var n = [
		{ type: "client_report" },
		{ timestamp: r || vt(), discarded_events: t },
	];
	return gt(e ? { dsn: e } : {}, [n]);
}
var pn = 60 * 1e3;
function hn(t, e) {
	e === void 0 && (e = Date.now());
	var r = parseInt("" + t, 10);
	if (!isNaN(r)) {
		return r * 1e3;
	}
	var n = Date.parse("" + t);
	return isNaN(n) ? pn : n - e;
}
function Me(t, e) {
	return t[e] || t.all || 0;
}
function vn(t, e, r) {
	return (r === void 0 && (r = Date.now()), Me(t, e) > r);
}
function gn(t, e, r) {
	var n, i, o, a;
	r === void 0 && (r = Date.now());
	var s = u({}, t), c = e["x-sentry-rate-limits"], f = e["retry-after"];
	if (c) {
		try {
			for (var d = C(c.trim().split(",")), l = d.next(); !l.done; l = d.next()) {
				var v = l.value,
					g = v.split(":", 2),
					w = parseInt(g[0], 10),
					B = (isNaN(w) ? 60 : w) * 1e3;
				if (!g[1]) {
					s.all = r + B;
				} else {
					try {
						for (
							var R = (o = void 0, C(g[1].split(";"))), I = R.next();
							!I.done;
							I = R.next()
						) {
							var hr = I.value;
							s[hr] = r + B;
						}
					} catch (Et) {
						o = { error: Et };
					} finally {
						try {
							I && !I.done && (a = R.return) && a.call(R);
						} finally {
							if (o) {
								throw o.error;
							}
						}
					}
				}
			}
		} catch (Et) {
			n = { error: Et };
		} finally {
			try {
				l && !l.done && (i = d.return) && i.call(d);
			} finally {
				if (n) {
					throw n.error;
				}
			}
		}
	} else {
		f && (s.all = r + hn(f, r));
	}
	return s;
}
var de = 100,
	Q = function () {
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
							r._breadcrumbs = m(e._breadcrumbs), r._tags = u({}, e._tags), r._extra =
								u({}, e._extra), r._contexts = u({}, e._contexts), r._user =
								e._user, r._level = e._level, r._span = e._span, r._session =
								e._session, r._transactionName = e._transactionName, r._fingerprint =
								e._fingerprint, r._eventProcessors = m(e._eventProcessors), r._requestSession =
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
						this._tags = u(u({}, this._tags), e), this._notifyScopeListeners(), this
					);
				}, t.prototype.setTag =
				function (e, r) {
					var n;
					return (
						this._tags = u(u({}, this._tags), (n = {}, n[e] = r, n)), this._notifyScopeListeners(), this
					);
				}, t.prototype.setExtras =
				function (e) {
					return (
						this._extra = u(u({}, this._extra), e), this._notifyScopeListeners(), this
					);
				}, t.prototype.setExtra =
				function (e, r) {
					var n;
					return (
						this._extra = u(u({}, this._extra), (n = {}, n[e] = r, n)), this._notifyScopeListeners(), this
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
							u(u({}, this._contexts), (n = {}, n[e] = r, n)), this._notifyScopeListeners(), this
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
							this._tags = u(u({}, this._tags), e._tags), this._extra =
								u(u({}, this._extra), e._extra), this._contexts =
								u(u({}, this._contexts), e._contexts), e._user &&
								Object.keys(e._user).length &&
								(this._user = e._user), e._level && (this._level = e._level), e._fingerprint && (
								this._fingerprint = e._fingerprint
							), e._requestSession && (this._requestSession = e._requestSession)
						) : q(e) && (
							e = e, this._tags = u(u({}, this._tags), e.tags), this._extra =
								u(u({}, this._extra), e.extra), this._contexts =
								u(u({}, this._contexts), e.contexts), e.user && (
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
					var n = typeof r == "number" ? Math.min(r, de) : de;
					if (n <= 0) {
						return this;
					}
					var i = u({ timestamp: vt() }, e);
					return (
						this._breadcrumbs = m(this._breadcrumbs, [i]).slice(-n), this._notifyScopeListeners(), this
					);
				}, t.prototype.clearBreadcrumbs =
				function () {
					return (this._breadcrumbs = [], this._notifyScopeListeners(), this);
				}, t.prototype.applyToEvent =
				function (e, r) {
					if (
						this._extra &&
							Object.keys(this._extra).length &&
							(e.extra = u(u({}, this._extra), e.extra)), this._tags &&
							Object.keys(this._tags).length &&
							(e.tags = u(u({}, this._tags), e.tags)), this._user &&
							Object.keys(this._user).length &&
							(e.user = u(u({}, this._user), e.user)), this._contexts &&
							Object.keys(this._contexts).length &&
							(e.contexts = u(u({}, this._contexts), e.contexts)), this._level && (
							e.level = this._level
						), this._transactionName && (e.transaction = this._transactionName), this._span
					) {
						e.contexts = u({ trace: this._span.getTraceContext() }, e.contexts);
						var n = this._span.transaction && this._span.transaction.name;
						n && (e.tags = u({ transaction: n }, e.tags));
					}
					return (
						this._applyFingerprint(e), e.breadcrumbs =
							m(e.breadcrumbs || [], this._breadcrumbs), e.breadcrumbs =
							e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0, e.sdkProcessingMetadata =
							this._sdkProcessingMetadata, this._notifyEventProcessors(
							m(Fe(), this._eventProcessors),
							e,
							r,
						)
					);
				}, t.prototype.setSDKProcessingMetadata =
				function (e) {
					return (
						this._sdkProcessingMetadata =
							u(u({}, this._sdkProcessingMetadata), e), this
					);
				}, t.prototype._notifyEventProcessors =
				function (e, r, n, i) {
					var o = this;
					return (
						i === void 0 && (i = 0), new A(
							function (a, s) {
								var c = e[i];
								if (r === null || typeof c != "function") {
									a(r);
								} else {
									var f = c(u({}, r), n);
									Wt(f) ? f
										.then(function (d) {
											return o._notifyEventProcessors(e, d, n, i + 1).then(a);
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
function Fe() {
	var t = y();
	return (
		t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.globalEventProcessors =
			t.__SENTRY__.globalEventProcessors || [], t.__SENTRY__.globalEventProcessors
	);
}
function _t(t) {
	Fe().push(t);
}
var _n = function () {
	function t(e) {
		this.errors = 0, this.sid = U(), this.duration = 0, this.status = "ok", this.init =
			!0, this.ignoreDuration = !1;
		var r = le();
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
					), this.timestamp = e.timestamp || le(), e.ignoreDuration && (
						this.ignoreDuration = e.ignoreDuration
					), e.sid && (this.sid = e.sid.length === 32 ? e.sid : U()), e.init !== void 0 && (
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
	Vt = 4,
	yn = 100,
	yt = function () {
		function t(e, r, n) {
			r === void 0 && (r = new Q()), n === void 0 && (n = Vt), this._version = n, this._stack =
				[{}], this.getStackTop().scope = r, e && this.bindClient(e);
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
					var e = Q.clone(this.getScope());
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
					var n = this._lastEventId = r && r.event_id ? r.event_id : U(), i = r;
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
							u(u({}, i), { event_id: n }),
						), n
					);
				}, t.prototype.captureMessage =
				function (e, r, n) {
					var i = this._lastEventId = n && n.event_id ? n.event_id : U(), o = n;
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
							u(u({}, o), { event_id: i }),
						), i
					);
				}, t.prototype.captureEvent =
				function (e, r) {
					var n = r && r.event_id ? r.event_id : U();
					return (
						e.type !== "transaction" && (this._lastEventId = n), this._invokeClient(
							"captureEvent",
							e,
							u(u({}, r), { event_id: n }),
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
							c = s === void 0 ? null : s,
							f = a.maxBreadcrumbs,
							d = f === void 0 ? yn : f;
						if (!(d <= 0)) {
							var l = vt(),
								v = u({ timestamp: l }, e),
								g = c ? ft(function () {
									return c(v, r);
								}) : v;
							g !== null && i.addBreadcrumb(g, d);
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
					var r = pe(this);
					try {
						e(this);
					} finally {
						pe(r);
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
						c = y(),
						f = (c.navigator || {}).userAgent,
						d = new _n(
							u(
								u(
									u({ release: a, environment: s }, n && { user: n.getUser() }),
									f && { userAgent: f },
								),
								e,
							),
						);
					if (n) {
						var l = n.getSession && n.getSession();
						l && l.status === "ok" && l.update({ status: "exited" }), this.endSession(), n.setSession(
							d,
						);
					}
					return d;
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
					s && s[e] && (r = s)[e].apply(r, m(n, [a]));
				}, t.prototype._callExtensionMethod =
				function (e) {
					for (var r = [], n = 1; n < arguments.length; n++) r[n - 1] =
						arguments[n];
					var i = mt(), o = i.__SENTRY__;
					if (o && o.extensions && typeof o.extensions[e] == "function") {
						return o.extensions[e].apply(this, r);
					}
					p() && h.warn(
						"Extension method " + e + " couldn't be found, doing nothing.",
					);
				}, t
		);
	}();
function mt() {
	var t = y();
	return (t.__SENTRY__ = t.__SENTRY__ || { extensions: {}, hub: void 0 }, t);
}
function pe(t) {
	var e = mt(), r = P(e);
	return (Qt(e, t), r);
}
function E() {
	var t = mt();
	return (
		(!Ce(t) || P(t).isOlderThan(Vt)) && Qt(t, new yt()), zt() ? mn(t) : P(t)
	);
}
function mn(t) {
	try {
		var e = mt().__SENTRY__,
			r =
				e && e.extensions && e.extensions.domain && e.extensions.domain.active;
		if (!r) {
			return P(t);
		}
		if (!Ce(r) || P(r).isOlderThan(Vt)) {
			var n = P(t).getStackTop();
			Qt(r, new yt(n.client, Q.clone(n.scope)));
		}
		return P(r);
	} catch {
		return P(t);
	}
}
function Ce(t) {
	return !!(t && t.__SENTRY__ && t.__SENTRY__.hub);
}
function P(t) {
	return (
		(t && t.__SENTRY__ && t.__SENTRY__.hub) || (
			t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.hub = new yt()
		), t.__SENTRY__.hub
	);
}
function Qt(t, e) {
	return t ? (t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.hub = e, !0) : !1;
}
function T(t) {
	for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
	var n = E();
	if (n && n[t]) {
		return n[t].apply(n, m(e));
	}
	throw new Error(
		"No hub defined or " +
			t +
			" was not found on the hub, please open a bug report.",
	);
}
function Ae(t, e) {
	var r = new Error("Sentry syntheticException");
	return T(
		"captureException",
		t,
		{ captureContext: e, originalException: t, syntheticException: r },
	);
}
function Sn(t, e) {
	var r = new Error(t),
		n = typeof e == "string" ? e : void 0,
		i = typeof e != "string" ? { captureContext: e } : void 0;
	return T(
		"captureMessage",
		t,
		n,
		u({ originalException: t, syntheticException: r }, i),
	);
}
function En(t) {
	return T("captureEvent", t);
}
function bn(t) {
	T("configureScope", t);
}
function wn(t) {
	T("addBreadcrumb", t);
}
function Tn(t, e) {
	T("setContext", t, e);
}
function kn(t) {
	T("setExtras", t);
}
function On(t) {
	T("setTags", t);
}
function xn(t, e) {
	T("setExtra", t, e);
}
function Rn(t, e) {
	T("setTag", t, e);
}
function In(t) {
	T("setUser", t);
}
function Be(t) {
	T("withScope", t);
}
function Nn(t, e) {
	return T("startTransaction", u({}, t), e);
}
var Pn = "7";
function Ht(t, e, r) {
	return { initDsn: t, metadata: e || {}, dsn: Gt(t), tunnel: r };
}
function Ue(t) {
	var e = t.protocol ? t.protocol + ":" : "", r = t.port ? ":" + t.port : "";
	return e + "//" + t.host + r + (t.path ? "/" + t.path : "") + "/api/";
}
function He(t, e) {
	return "" + Ue(t) + t.projectId + "/" + e + "/";
}
function qe(t) {
	return Dr({ sentry_key: t.publicKey, sentry_version: Pn });
}
function Ln(t) {
	return He(t, "store");
}
function Ye(t) {
	return Ln(t) + "?" + qe(t);
}
function jn(t) {
	return He(t, "envelope");
}
function Zt(t, e) {
	return e || jn(t) + "?" + qe(t);
}
function Dn(t, e) {
	var r = Gt(t), n = Ue(r) + "embed/error-page/", i = "dsn=" + et(r);
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
var he = [];
function ve(t) {
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
function Mn(t) {
	var e = (t.defaultIntegrations && m(t.defaultIntegrations)) || [],
		r = t.integrations,
		n = m(ve(e));
	Array.isArray(r) ? n =
		m(
			n.filter(function (a) {
				return r.every(function (s) {
					return s.name !== a.name;
				});
			}),
			ve(r),
		) : typeof r == "function" && (n = r(n), n = Array.isArray(n) ? n : [n]);
	var i = n.map(function (a) {
		return a.name;
	}),
		o = "Debug";
	return (
		i.indexOf(o) !== -1 && n.push.apply(n, m(n.splice(i.indexOf(o), 1))), n
	);
}
function Fn(t) {
	he.indexOf(t.name) === -1 && (
		t.setupOnce(_t, E), he.push(t.name), p() && h.log(
			"Integration installed: " + t.name,
		)
	);
}
function Cn(t) {
	var e = {};
	return (
		Mn(t)
			.forEach(function (r) {
				e[r.name] = r, Fn(r);
			}), pt(e, "initialized", !0), e
	);
}
var ge = "Not capturing exception because it's already been captured.",
	An = function () {
		function t(e, r) {
			this._integrations = {}, this._numProcessing = 0, this._backend = new e(r), this._options =
				r, r.dsn && (this._dsn = Gt(r.dsn));
		}
		return (
			t.prototype.captureException =
				function (e, r, n) {
					var i = this;
					if (ce(e)) {
						p() && h.log(ge);
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
						s = tt(e) ? this._getBackend().eventFromMessage(String(e), r, n) : this._getBackend().eventFromException(
							e,
							n,
						);
					return (
						this._process(
							s
								.then(function (c) {
									return o._captureEvent(c, n, i);
								})
								.then(function (c) {
									a = c;
								}),
						), a
					);
				}, t.prototype.captureEvent =
				function (e, r, n) {
					if (r && r.originalException && ce(r.originalException)) {
						p() && h.log(ge);
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
							for (var c = C(s), f = c.next(); !f.done; f = c.next()) {
								var d = f.value, l = d.mechanism;
								if (l && l.handled === !1) {
									o = !0;
									break;
								}
							}
						} catch (w) {
							n = { error: w };
						} finally {
							try {
								f && !f.done && (i = c.return) && i.call(c);
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
							u(
								u({}, o && { status: "crashed" }),
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
					return new A(function (n) {
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
						c = o.normalizeMaxBreadth,
						f = c === void 0 ? 1e3 : c,
						d = u(
							u({}, e),
							{
								event_id: e.event_id || (n && n.event_id ? n.event_id : U()),
								timestamp: e.timestamp || vt(),
							},
						);
					this._applyClientOptions(d), this._applyIntegrationsMetadata(d);
					var l = r;
					n && n.captureContext && (l = Q.clone(l).update(n.captureContext));
					var v = Y(d);
					return (
						l && (v = l.applyToEvent(d, n)), v.then(function (g) {
							return (
								g && (
									g.sdkProcessingMetadata =
										u(u({}, g.sdkProcessingMetadata), { normalizeDepth: N(s) })
								), typeof s == "number" && s > 0 ? i._normalizeEvent(g, s, f) : g
							);
						})
					);
				}, t.prototype._normalizeEvent =
				function (e, r, n) {
					if (!e) {
						return null;
					}
					var i = u(
						u(
							u(
								u(
									u({}, e),
									e.breadcrumbs && {
										breadcrumbs: e.breadcrumbs.map(function (o) {
											return u(u({}, o), o.data && { data: N(o.data, r, n) });
										}),
									},
								),
								e.user && { user: N(e.user, r, n) },
							),
							e.contexts && { contexts: N(e.contexts, r, n) },
						),
						e.extra && { extra: N(e.extra, r, n) },
					);
					return (
						e.contexts &&
							e.contexts.trace &&
							(i.contexts.trace = e.contexts.trace), e.sdkProcessingMetadata =
							u(u({}, e.sdkProcessingMetadata), { baseClientNormalized: !0 }), i
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
						(e.dist = o), e.message && (e.message = X(e.message, s));
					var c = e.exception && e.exception.values && e.exception.values[0];
					c && c.value && (c.value = X(c.value, s));
					var f = e.request;
					f && f.url && (f.url = X(f.url, s));
				}, t.prototype._applyIntegrationsMetadata =
				function (e) {
					var r = Object.keys(this._integrations);
					r.length > 0 && (
						e.sdk = e.sdk || {}, e.sdk.integrations =
							m(e.sdk.integrations || [], r)
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
						c = this.getTransport();
					function f(l, v) {
						c.recordLostEvent && c.recordLostEvent(l, v);
					}
					if (!this._isEnabled()) {
						return Bt(new S("SDK not enabled, will not capture event."));
					}
					var d = e.type === "transaction";
					return !d && typeof s == "number" && Math.random() > s ? (
						f("sample_rate", "event"), Bt(
							new S(
								"Discarding event because it's not included in the random sample (sampling rate = " +
									s +
									")",
							),
						)
					) : this
						._prepareEvent(e, n, r)
						.then(function (l) {
							if (l === null) {
								throw f("event_processor", e.type || "event"), new S(
									"An event processor returned null, will not send event.",
								);
							}
							var v = r && r.data && r.data.__sentry__ === !0;
							if (v || d || !a) {
								return l;
							}
							var g = a(l, r);
							return Bn(g);
						})
						.then(function (l) {
							if (l === null) {
								throw f("before_send", e.type || "event"), new S(
									"`beforeSend` returned `null`, will not send event.",
								);
							}
							var v = n && n.getSession && n.getSession();
							return (
								!d && v && i._updateSessionFromEvent(v, l), i._sendEvent(l), l
							);
						})
						.then(
							null,
							function (l) {
								throw l instanceof S ? l : (
									i.captureException(
										l,
										{ data: { __sentry__: !0 }, originalException: l },
									), new S(
										`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ` + l,
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
function Bn(t) {
	var e = "`beforeSend` method has to return `null` or a valid event.";
	if (Wt(t)) {
		return t.then(
			function (r) {
				if (!(q(r) || r === null)) {
					throw new S(e);
				}
				return r;
			},
			function (r) {
				throw new S("beforeSend rejected with " + r);
			},
		);
	}
	if (!(q(t) || t === null)) {
		throw new S(e);
	}
	return t;
}
function te(t) {
	if (!(!t.metadata || !t.metadata.sdk)) {
		var e = t.metadata.sdk, r = e.name, n = e.version;
		return { name: r, version: n };
	}
}
function Un(t, e) {
	return (
		e && (
			t.sdk = t.sdk || {}, t.sdk.name = t.sdk.name || e.name, t.sdk.version =
				t.sdk.version || e.version, t.sdk.integrations =
				m(t.sdk.integrations || [], e.integrations || []), t.sdk.packages =
				m(t.sdk.packages || [], e.packages || [])
		), t
	);
}
function ze(t, e) {
	var r = te(e),
		n = u(
			u({ sent_at: new Date().toISOString() }, r && { sdk: r }),
			!!e.tunnel && { dsn: et(e.dsn) },
		),
		i = "aggregates" in t ? "sessions" : "session",
		o = [{ type: i }, t],
		a = gt(n, [o]);
	return [a, i];
}
function Hn(t, e) {
	var r = k(ze(t, e), 2), n = r[0], i = r[1];
	return { body: Kt(n), type: i, url: Zt(e.dsn, e.tunnel) };
}
function qn(t, e) {
	var r = te(e),
		n = t.type || "event",
		i = (t.sdkProcessingMetadata || {}).transactionSampling,
		o = i || {},
		a = o.method,
		s = o.rate,
		c = u(
			u(
				{ event_id: t.event_id, sent_at: new Date().toISOString() },
				r && { sdk: r },
			),
			!!e.tunnel && { dsn: et(e.dsn) },
		),
		f = [{ type: n, sample_rates: [{ id: a, rate: s }] }, t];
	return gt(c, [f]);
}
function Yn(t, e) {
	var r = te(e),
		n = t.type || "event",
		i = n === "transaction" || !!e.tunnel,
		o = (t.sdkProcessingMetadata || {}).transactionSampling,
		a = o || {},
		s = a.method,
		c = a.rate;
	Un(t, e.metadata.sdk), t.tags = t.tags || {}, t.extra = t.extra || {}, (
		t.sdkProcessingMetadata && t.sdkProcessingMetadata.baseClientNormalized
	) || (
		t.tags.skippedNormalization = !0, t.extra.normalizeDepth =
			t.sdkProcessingMetadata ? t.sdkProcessingMetadata.normalizeDepth : "unset"
	), delete t.sdkProcessingMetadata;
	var f;
	try {
		f = JSON.stringify(t);
	} catch (B) {
		t.tags.JSONStringifyError = !0, t.extra.JSONStringifyError = B;
		try {
			f = JSON.stringify(N(t));
		} catch (R) {
			var d = R;
			f =
				JSON.stringify({
					message: "JSON.stringify error after renormalization",
					extra: { message: d.message, stack: d.stack },
				});
		}
	}
	var l = { body: f, type: n, url: i ? Zt(e.dsn, e.tunnel) : Ye(e.dsn) };
	if (i) {
		var v = u(
			u(
				{ event_id: t.event_id, sent_at: new Date().toISOString() },
				r && { sdk: r },
			),
			!!e.tunnel && { dsn: et(e.dsn) },
		),
			g = [{ type: n, sample_rates: [{ id: s, rate: c }] }, l.body],
			w = gt(v, [g]);
		l.body = Kt(w);
	}
	return l;
}
var zn = function () {
	function t() {}
	return (
		t.prototype.sendEvent =
			function (e) {
				return Y({
					reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
					status: "skipped",
				});
			}, t.prototype.close =
			function (e) {
				return Y(!0);
			}, t
	);
}(),
	$n = function () {
		function t(e) {
			this._options = e, this._options.dsn || (
				p() && h.warn("No DSN provided, backend will not do anything.")
			), this._transport = this._setupTransport();
		}
		return (
			t.prototype.eventFromException =
				function (e, r) {
					throw new S("Backend has to implement `eventFromException` method");
				}, t.prototype.eventFromMessage =
				function (e, r, n) {
					throw new S("Backend has to implement `eventFromMessage` method");
				}, t.prototype.sendEvent =
				function (e) {
					if (
						this._newTransport &&
						this._options.dsn &&
						this._options._experiments &&
						this._options._experiments.newTransport
					) {
						var r = Ht(
							this._options.dsn,
							this._options._metadata,
							this._options.tunnel,
						),
							n = qn(e, r);
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
						var r = Ht(
							this._options.dsn,
							this._options._metadata,
							this._options.tunnel,
						),
							n = k(ze(e, r), 1),
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
					return new zn();
				}, t
		);
	}();
function Wn(t, e) {
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
var _e = "6.19.2",
	ye,
	$e = function () {
		function t() {
			this.name = t.id;
		}
		return (
			t.prototype.setupOnce =
				function () {
					ye = Function.prototype.toString, Function.prototype.toString =
						function () {
							for (var e = [], r = 0; r < arguments.length; r++) e[r] =
								arguments[r];
							var n = Jt(this) || this;
							return ye.apply(n, e);
						};
				}, t.id = "FunctionToString", t
		);
	}(),
	Gn = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
	We = function () {
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
									c = Xn(o._options, s);
								return Jn(n, c) ? null : n;
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
			allowUrls: m(
				t.whitelistUrls || [],
				t.allowUrls || [],
				e.whitelistUrls || [],
				e.allowUrls || [],
			),
			denyUrls: m(
				t.blacklistUrls || [],
				t.denyUrls || [],
				e.blacklistUrls || [],
				e.denyUrls || [],
			),
			ignoreErrors: m(t.ignoreErrors || [], e.ignoreErrors || [], Gn),
			ignoreInternal: t.ignoreInternal !== void 0 ? t.ignoreInternal : !0,
		}
	);
}
function Jn(t, e) {
	return e.ignoreInternal && ti(t)
		? (
			p() && h.warn(
				`Event dropped due to being internal Sentry Error.
Event: ` + F(t),
			), !0
		)
		: Kn(t, e.ignoreErrors)
			? (
				p() && h.warn(
					"Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + F(
						t,
					),
				), !0
			)
			: Vn(t, e.denyUrls)
				? (
					p() && h.warn(
						"Event dropped due to being matched by `denyUrls` option.\nEvent: " +
							F(t) +
							`.
Url: ` +
							dt(t),
					), !0
				)
				: Qn(t, e.allowUrls)
					? !1
					: (
						p() && h.warn(
							"Event dropped due to not being matched by `allowUrls` option.\nEvent: " +
								F(t) +
								`.
Url: ` +
								dt(t),
						), !0
					);
}
function Kn(t, e) {
	return !e || !e.length ? !1 : Zn(t)
		.some(function (r) {
			return e.some(function (n) {
				return Xt(r, n);
			});
		});
}
function Vn(t, e) {
	if (!e || !e.length) {
		return !1;
	}
	var r = dt(t);
	return r ? e.some(function (n) {
		return Xt(r, n);
	}) : !1;
}
function Qn(t, e) {
	if (!e || !e.length) {
		return !0;
	}
	var r = dt(t);
	return r ? e.some(function (n) {
		return Xt(r, n);
	}) : !0;
}
function Zn(t) {
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
			return (p() && h.error("Cannot extract message for event " + F(t)), []);
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
function me(t) {
	t === void 0 && (t = []);
	for (var e = t.length - 1; e >= 0; e--) {
		var r = t[e];
		if (r && r.filename !== "<anonymous>" && r.filename !== "[native code]") {
			return r.filename || null;
		}
	}
	return null;
}
function dt(t) {
	try {
		if (t.stacktrace) {
			return me(t.stacktrace.frames);
		}
		var e;
		try {
			e = t.exception.values[0].stacktrace.frames;
		} catch {}
		return e ? me(e) : null;
	} catch {
		return (p() && h.error("Cannot extract url for event " + F(t)), null);
	}
}
var ei = Object.freeze(
	Object.defineProperty(
		{ __proto__: null, FunctionToString: $e, InboundFilters: We },
		Symbol.toStringTag,
		{ value: "Module" },
	),
),
	W = "?",
	ri = 10,
	ni = 20,
	ii = 30,
	oi = 40,
	ai = 50;
function rt(t, e, r, n) {
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
			var i = k(Ge(e[1] || W, e[2]), 2), o = i[0], a = i[1];
			return rt(a, o, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0);
		}
	},
	fi = [ii, ci],
	li = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
	di = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
	pi = function (t) {
		var e, r = li.exec(t);
		if (r) {
			var n = r[3] && r[3].indexOf(" > eval") > -1;
			if (n) {
				var i = di.exec(r[3]);
				i && (r[1] = r[1] || "eval", r[3] = i[1], r[4] = i[2], r[5] = "");
			}
			var o = r[3], a = r[1] || W;
			return (
				e = k(Ge(a, o), 2), a = e[0], o = e[1], rt(
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
		return e ? rt(e[2], e[1] || W, +e[3], e[4] ? +e[4] : void 0) : void 0;
	},
	_i = [oi, gi],
	yi = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
	mi = function (t) {
		var e = yi.exec(t);
		return e ? rt(e[2], e[3] || W, +e[1]) : void 0;
	},
	Si = [ri, mi],
	Ei = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
	bi = function (t) {
		var e = Ei.exec(t);
		return e ? rt(e[5], e[3] || e[4] || W, +e[1], +e[2]) : void 0;
	},
	wi = [ni, bi],
	Ge = function (t, e) {
		var r = t.indexOf("safari-extension") !== -1,
			n = t.indexOf("safari-web-extension") !== -1;
		return r || n ? [
			t.indexOf("@") !== -1 ? t.split("@")[0] : W,
			r ? "safari-extension:" + e : "safari-web-extension:" + e,
		] : [t, e];
	};
function Xe(t) {
	var e = ee(t), r = { type: t && t.name, value: xi(t) };
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
					type: $t(t)
						? t.constructor.name
						: r
							? "UnhandledRejection"
							: "Error",
					value: "Non-Error " +
						(r ? "promise rejection" : "exception") +
						" captured with keys: " +
						Mr(t),
				},
			],
		},
		extra: { __serialized__: Le(t) },
	};
	if (e) {
		var i = ee(e);
		i.length && (n.stacktrace = { frames: i });
	}
	return n;
}
function Rt(t) {
	return { exception: { values: [Xe(t)] } };
}
function ee(t) {
	var e = t.stacktrace || t.stack || "", r = Oi(t);
	try {
		return Cr(Si, wi, fi, _i, hi)(e, r);
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
function xi(t) {
	var e = t && t.message;
	return e
		? e.error && typeof e.error.message == "string"
			? e.error.message
			: e
		: "No error message";
}
function Ri(t, e, r) {
	var n = (e && e.syntheticException) || void 0, i = re(t, n, r);
	return (
		V(i), i.level = exports.Severity.Error, e &&
			e.event_id &&
			(i.event_id = e.event_id), Y(i)
	);
}
function Ii(t, e, r, n) {
	e === void 0 && (e = exports.Severity.Info);
	var i = (r && r.syntheticException) || void 0, o = qt(t, i, n);
	return (o.level = e, r && r.event_id && (o.event_id = r.event_id), Y(o));
}
function re(t, e, r, n) {
	var i;
	if (Oe(t) && t.error) {
		var o = t;
		return Rt(o.error);
	}
	if (ie(t) || Sr(t)) {
		var a = t;
		if ("stack" in t) {
			i = Rt(t);
		} else {
			var s = a.name || (ie(a) ? "DOMError" : "DOMException"),
				c = a.message ? s + ": " + a.message : s;
			i = qt(c, e, r), At(i, c);
		}
		return (
			("code" in a) && (
				i.tags = u(u({}, i.tags), { "DOMException.code": "" + a.code })
			), i
		);
	}
	if (ke(t)) {
		return Rt(t);
	}
	if (q(t) || $t(t)) {
		var f = t;
		return (i = Ti(f, e, n), V(i, { synthetic: !0 }), i);
	}
	return (i = qt(t, e, r), At(i, "" + t, void 0), V(i, { synthetic: !0 }), i);
}
function qt(t, e, r) {
	var n = { message: t };
	if (r && e) {
		var i = ee(e);
		i.length && (n.stacktrace = { frames: i });
	}
	return n;
}
var O = y(), ut;
function Je() {
	if (ut) {
		return ut;
	}
	if (Ct(O.fetch)) {
		return ut = O.fetch.bind(O);
	}
	var t = O.document, e = O.fetch;
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
	return ut = e.bind(O);
}
function Ni(t, e) {
	var r = Object.prototype.toString.call(O && O.navigator) === "[object Navigator]",
		n = r && typeof O.navigator.sendBeacon == "function";
	if (n) {
		var i = O.navigator.sendBeacon.bind(O.navigator);
		return i(t, e);
	}
	if (ht()) {
		var o = Je();
		return vr(
			o(t, { body: e, method: "POST", credentials: "omit", keepalive: !0 }),
		);
	}
}
function It(t) {
	var e = t;
	return e === "event" ? "error" : e;
}
var Nt = y(),
	Ke = function () {
		function t(e) {
			var r = this;
			this.options = e, this._buffer = an(30), this._rateLimits = {}, this._outcomes =
				{}, this._api = Ht(e.dsn, e._metadata, e.tunnel), this.url =
				Ye(this._api.dsn), this.options.sendClientReports &&
				Nt.document &&
				Nt.document.addEventListener(
					"visibilitychange",
					function () {
						Nt.document.visibilityState === "hidden" && r._flushOutcomes();
					},
				);
		}
		return (
			t.prototype.sendEvent =
				function (e) {
					return this._sendRequest(Yn(e, this._api), e);
				}, t.prototype.sendSession =
				function (e) {
					return this._sendRequest(Hn(e, this._api), e);
				}, t.prototype.close =
				function (e) {
					return this._buffer.drain(e);
				}, t.prototype.recordLostEvent =
				function (e, r) {
					var n;
					if (!!this.options.sendClientReports) {
						var i = It(r) + ":" + e;
						p() && h.log("Adding outcome: " + i), this._outcomes[i] =
							(n = this._outcomes[i], (n != null ? n : 0) + 1);
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
						var r = Zt(this._api.dsn, this._api.tunnel),
							n = Object
								.keys(e)
								.map(function (o) {
									var a = k(o.split(":"), 2), s = a[0], c = a[1];
									return { reason: c, category: s, quantity: e[o] };
								}),
							i = dn(n, this._api.tunnel && et(this._api.dsn));
						try {
							Ni(r, Kt(i));
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
						s = cn(n.status);
					if (
						this._rateLimits = gn(this._rateLimits, i), this._isRateLimited(r) &&
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
					var r = It(e);
					return new Date(Me(this._rateLimits, r));
				}, t.prototype._isRateLimited =
				function (e) {
					var r = It(e);
					return vn(this._rateLimits, r);
				}, t
		);
	}(),
	Pi = function (t) {
		Z(e, t);
		function e(r, n) {
			n === void 0 && (n = Je());
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
						referrerPolicy: Ur() ? "origin" : "",
					};
					return (
						this.options.fetchParameters !== void 0 && Object.assign(
							o,
							this.options.fetchParameters,
						), this.options.headers !== void 0 && (
							o.headers = this.options.headers
						), this._buffer
							.add(function () {
								return new A(
									function (a, s) {
										i
											._fetch(r.url, o)
											.then(function (c) {
												var f = {
													"x-sentry-rate-limits": c.headers.get(
														"X-Sentry-Rate-Limits",
													),
													"retry-after": c.headers.get("Retry-After"),
												};
												i._handleResponse({
													requestType: r.type,
													response: c,
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
									throw a instanceof S ? i.recordLostEvent(
										"queue_overflow",
										r.type,
									) : i.recordLostEvent("network_error", r.type), a;
								},
							)
					);
				}, e
		);
	}(Ke),
	Li = function (t) {
		Z(e, t);
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
							return new A(
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
									for (var c in i.options.headers) Object.prototype.hasOwnProperty.call(
										i.options.headers,
										c,
									) && s.setRequestHeader(c, i.options.headers[c]);
									s.send(r.body);
								},
							);
						})
						.then(
							void 0,
							function (o) {
								throw o instanceof S ? i.recordLostEvent(
									"queue_overflow",
									r.type,
								) : i.recordLostEvent("network_error", r.type), o;
							},
						);
				}, e
		);
	}(Ke),
	ji = function (t) {
		Z(e, t);
		function e() {
			return (t !== null && t.apply(this, arguments)) || this;
		}
		return (
			e.prototype.eventFromException =
				function (r, n) {
					return Ri(r, n, this._options.attachStacktrace);
				}, e.prototype.eventFromMessage =
				function (r, n, i) {
					return (
						n === void 0 && (n = exports.Severity.Info), Ii(
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
					var r = u(
						u({}, this._options.transportOptions),
						{
							dsn: this._options.dsn,
							tunnel: this._options.tunnel,
							sendClientReports: this._options.sendClientReports,
							_metadata: this._options._metadata,
						},
					);
					return this._options.transport
						? new this._options.transport(r)
						: ht()
							? new Pi(r)
							: new Li(r);
				}, e
		);
	}($n),
	ct = y(),
	Yt = 0;
function Ve() {
	return Yt > 0;
}
function Di() {
	Yt += 1, setTimeout(function () {
		Yt -= 1;
	});
}
function z(t, e, r) {
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
			var c = s.map(function (f) {
				return z(f, e);
			});
			return t.apply(this, c);
		} catch (f) {
			throw Di(), Be(function (d) {
				d.addEventProcessor(function (l) {
					return (
						e.mechanism && (At(l, void 0, void 0), V(l, e.mechanism)), l.extra =
							u(u({}, l.extra), { arguments: s }), l
					);
				}), Ae(f);
			}), f;
		}
	};
	try {
		for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (i[o] = t[o]);
	} catch {}
	Ie(i, t), pt(t, "__sentry_wrapped__", i);
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
function Qe(t) {
	if (t === void 0 && (t = {}), !!ct.document) {
		if (!t.eventId) {
			p() && h.error("Missing eventId option in showReportDialog call");
			return;
		}
		if (!t.dsn) {
			p() && h.error("Missing dsn option in showReportDialog call");
			return;
		}
		var e = ct.document.createElement("script");
		e.async = !0, e.src = Dn(t.dsn, t), t.onLoad && (e.onload = t.onLoad);
		var r = ct.document.head || ct.document.body;
		r && r.appendChild(e);
	}
}
var St = function () {
	function t(e) {
		this.name = t.id, this._installFunc =
			{ onerror: Mi, onunhandledrejection: Fi }, this._options =
			u({ onerror: !0, onunhandledrejection: !0 }, e);
	}
	return (
		t.prototype.setupOnce =
			function () {
				Error.stackTraceLimit = 50;
				var e = this._options;
				for (var r in e) {
					var n = this._installFunc[r];
					n && e[r] && (Bi(r), n(), this._installFunc[r] = void 0);
				}
			}, t.id = "GlobalHandlers", t
	);
}();
function Mi() {
	L(
		"error",
		function (t) {
			var e = k(er(), 2), r = e[0], n = e[1];
			if (!!r.getIntegration(St)) {
				var i = t.msg, o = t.url, a = t.line, s = t.column, c = t.error;
				if (!(Ve() || (c && c.__sentry_own_request__))) {
					var f = c === void 0 && H(i) ? Ai(i, o, a, s) : Ze(
						re(c || i, void 0, n, !1),
						o,
						a,
						s,
					);
					f.level = exports.Severity.Error, tr(r, c, f, "onerror");
				}
			}
		},
	);
}
function Fi() {
	L(
		"unhandledrejection",
		function (t) {
			var e = k(er(), 2), r = e[0], n = e[1];
			if (!!r.getIntegration(St)) {
				var i = t;
				try {
					"reason" in t ? i = t.reason : ("detail" in t) &&
						("reason" in t.detail) &&
						(i = t.detail.reason);
				} catch {}
				if (Ve() || (i && i.__sentry_own_request__)) {
					return !0;
				}
				var o = tt(i) ? Ci(i) : re(i, void 0, n, !0);
				o.level = exports.Severity.Error, tr(r, i, o, "onunhandledrejection");
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
function Ai(t, e, r, n) {
	var i = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
		o = Oe(t) ? t.message : t,
		a = "Error",
		s = o.match(i);
	s && (a = s[1], o = s[2]);
	var c = { exception: { values: [{ type: a, value: o }] } };
	return Ze(c, e, r, n);
}
function Ze(t, e, r, n) {
	var i = t.exception = t.exception || {},
		o = i.values = i.values || [],
		a = o[0] = o[0] || {},
		s = a.stacktrace = a.stacktrace || {},
		c = s.frames = s.frames || [],
		f = isNaN(parseInt(n, 10)) ? void 0 : n,
		d = isNaN(parseInt(r, 10)) ? void 0 : r,
		l = H(e) && e.length > 0 ? e : Tr();
	return (
		c.length === 0 && c.push({
			colno: f,
			filename: l,
			function: "?",
			in_app: !0,
			lineno: d,
		}), t
	);
}
function Bi(t) {
	p() && h.log("Global Handler attached: " + t);
}
function tr(t, e, r, n) {
	V(r, { handled: !1, type: n }), t.captureEvent(r, { originalException: e });
}
function er() {
	var t = E(), e = t.getClient(), r = e && e.getOptions().attachStacktrace;
	return [t, r];
}
var Ui = [
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
	rr = function () {
		function t(e) {
			this.name = t.id, this._options =
				u(
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
					this._options.setTimeout && b(e, "setTimeout", Se), this._options.setInterval && b(
						e,
						"setInterval",
						Se,
					), this._options.requestAnimationFrame && b(
						e,
						"requestAnimationFrame",
						Hi,
					), this._options.XMLHttpRequest &&
						("XMLHttpRequest" in e) &&
						b(XMLHttpRequest.prototype, "send", qi);
					var r = this._options.eventTarget;
					if (r) {
						var n = Array.isArray(r) ? r : Ui;
						n.forEach(Yi);
					}
				}, t.id = "TryCatch", t
		);
	}();
function Se(t) {
	return function () {
		for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
		var n = e[0];
		return (
			e[0] =
				z(
					n,
					{
						mechanism: {
							data: { function: j(t) },
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
				z(
					e,
					{
						mechanism: {
							data: { function: "requestAnimationFrame", handler: j(t) },
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
					b(
						n,
						o,
						function (a) {
							var s = {
								mechanism: {
									data: { function: o, handler: j(a) },
									handled: !0,
									type: "instrument",
								},
							},
								c = Jt(a);
							return (c && (s.mechanism.data.handler = j(c)), z(a, s));
						},
					);
			}), t.apply(this, e)
		);
	};
}
function Yi(t) {
	var e = y(), r = e[t] && e[t].prototype;
	!r ||
		!r.hasOwnProperty ||
		!r.hasOwnProperty("addEventListener") ||
		(
			b(
				r,
				"addEventListener",
				function (n) {
					return function (i, o, a) {
						try {
							typeof o.handleEvent == "function" && (
								o.handleEvent =
									z(
										o.handleEvent.bind(o),
										{
											mechanism: {
												data: {
													function: "handleEvent",
													handler: j(o),
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
								z(
									o,
									{
										mechanism: {
											data: {
												function: "addEventListener",
												handler: j(o),
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
			), b(
				r,
				"removeEventListener",
				function (n) {
					return function (i, o, a) {
						var s = o;
						try {
							var c = s && s.__sentry_wrapped__;
							c && n.call(this, i, c, a);
						} catch {}
						return n.call(this, i, s, a);
					};
				},
			)
		);
}
var ne = function () {
	function t(e) {
		this.name = t.id, this._options =
			u(
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
						message: F(e),
					},
					{ event: e },
				);
			}, t.prototype.setupOnce =
			function () {
				this._options.console && L("console", $i), this._options.dom && L(
					"dom",
					zi(this._options.dom),
				), this._options.xhr && L("xhr", Wi), this._options.fetch && L(
					"fetch",
					Gi,
				), this._options.history && L("history", Xi);
			}, t.id = "Breadcrumbs", t
	);
}();
function zi(t) {
	function e(r) {
		var n, i = typeof t == "object" ? t.serializeAttribute : void 0;
		typeof i == "string" && (i = [i]);
		try {
			n = r.event.target ? lt(r.event.target, i) : lt(r.event, i);
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
function $i(t) {
	var e = {
		category: "console",
		data: { arguments: t.args, logger: "console" },
		level: un(t.level),
		message: ae(t.args, " "),
	};
	if (t.level === "assert") {
		if (t.args[0] === !1) {
			e.message =
				"Assertion failed: " + (ae(t.args.slice(1), " ") || "console.assert"), e.data.arguments =
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
function Gi(t) {
	!t.endTimestamp ||
		(t.fetchData.url.match(/sentry_key/) && t.fetchData.method === "POST") ||
		(
			t.error ? E().addBreadcrumb(
				{
					category: "fetch",
					data: t.fetchData,
					level: exports.Severity.Error,
					type: "http",
				},
				{ data: t.error, input: t.args },
			) : E().addBreadcrumb(
				{
					category: "fetch",
					data: u(u({}, t.fetchData), { status_code: t.response.status }),
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
		i = Ot(e.location.href),
		o = Ot(r),
		a = Ot(n);
	o.path || (o = i), i.protocol === a.protocol &&
		i.host === a.host &&
		(n = a.relative), i.protocol === o.protocol &&
		i.host === o.host &&
		(r = o.relative), E().addBreadcrumb({
		category: "navigation",
		data: { from: r, to: n },
	});
}
var Ji = "cause",
	Ki = 5,
	nr = function () {
		function t(e) {
			e === void 0 && (e = {}), this.name = t.id, this._key = e.key || Ji, this._limit =
				e.limit || Ki;
		}
		return (
			t.prototype.setupOnce =
				function () {
					_t(
						function (e, r) {
							var n = E().getIntegration(t);
							return n ? Vi(n._key, n._limit, e, r) : e;
						},
					);
				}, t.id = "LinkedErrors", t
		);
	}();
function Vi(t, e, r, n) {
	if (
		!r.exception ||
		!r.exception.values ||
		!n ||
		!D(n.originalException, Error)
	) {
		return r;
	}
	var i = ir(e, n.originalException, t);
	return (r.exception.values = m(i, r.exception.values), r);
}
function ir(t, e, r, n) {
	if (n === void 0 && (n = []), !D(e[r], Error) || (n.length + 1) >= t) {
		return n;
	}
	var i = Xe(e[r]);
	return ir(t, e[r], r, m([i], n));
}
var M = y(),
	or = function () {
		function t() {
			this.name = t.id;
		}
		return (
			t.prototype.setupOnce =
				function () {
					_t(function (e) {
						if (E().getIntegration(t)) {
							if (!M.navigator && !M.location && !M.document) {
								return e;
							}
							var r = (e.request && e.request.url) || (
								M.location && M.location.href
							),
								n = (M.document || {}).referrer,
								i = (M.navigator || {}).userAgent,
								o = u(
									u(u({}, e.request && e.request.headers), n && { Referer: n }),
									i && { "User-Agent": i },
								),
								a = u(u({}, r && { url: r }), { headers: o });
							return u(u({}, e), { request: a });
						}
						return e;
					});
				}, t.id = "UserAgent", t
		);
	}(),
	ar = function () {
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
								if (Qi(n, i._previousEvent)) {
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
function Qi(t, e) {
	return e ? !!(Zi(t, e) || to(t, e)) : !1;
}
function Zi(t, e) {
	var r = t.message, n = e.message;
	return !(
		(!r && !n) || (r && !n) || (!r && n) || r !== n || !ur(t, e) || !sr(t, e)
	);
}
function to(t, e) {
	var r = Ee(e), n = Ee(t);
	return !(
		!r ||
			!n ||
			r.type !== n.type ||
			r.value !== n.value ||
			!ur(t, e) ||
			!sr(t, e)
	);
}
function sr(t, e) {
	var r = be(t), n = be(e);
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
function ur(t, e) {
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
function Ee(t) {
	return t.exception && t.exception.values && t.exception.values[0];
}
function be(t) {
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
			GlobalHandlers: St,
			TryCatch: rr,
			Breadcrumbs: ne,
			LinkedErrors: nr,
			UserAgent: or,
			Dedupe: ar,
		},
		Symbol.toStringTag,
		{ value: "Module" },
	),
),
	cr = function (t) {
		Z(e, t);
		function e(r) {
			r === void 0 && (r = {});
			var n = this;
			return (
				r._metadata = r._metadata || {}, r._metadata.sdk =
					r._metadata.sdk || {
						name: "sentry.javascript.browser",
						packages: [{ name: "npm:@sentry/browser", version: _e }],
						version: _e,
					}, n = t.call(this, ji, r) || this, n
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
						Qe(u(u({}, r), { dsn: r.dsn || this.getDsn() }));
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
					var n = this.getIntegration(ne);
					n && n.addSentryBreadcrumb(r), t.prototype._sendEvent.call(this, r);
				}, e
		);
	}(An),
	fr = [
		new We(),
		new $e(),
		new rr(),
		new ne(),
		new St(),
		new nr(),
		new ar(),
		new or(),
	];
function ro(t) {
	if (
		t === void 0 && (t = {}), t.defaultIntegrations === void 0 && (
			t.defaultIntegrations = fr
		), t.release === void 0
	) {
		var e = y();
		e.SENTRY_RELEASE && e.SENTRY_RELEASE.id && (t.release = e.SENTRY_RELEASE.id);
	}
	t.autoSessionTracking === void 0 && (t.autoSessionTracking = !0), t.sendClientReports === void 0 && (
		t.sendClientReports = !0
	), Wn(cr, t), t.autoSessionTracking && oo();
}
function no(t) {
	t === void 0 && (t = {});
	var e = E(), r = e.getScope();
	r && (t.user = u(u({}, r.getUser()), t.user)), t.eventId || (
		t.eventId = e.lastEventId()
	);
	var n = e.getClient();
	n && n.showReportDialog(t);
}
function io() {
	return E().lastEventId();
}
function we(t) {
	t.startSession({ ignoreDuration: !0 }), t.captureSession();
}
function oo() {
	var t = y(), e = t.document;
	if (typeof e == "undefined") {
		p() && h.warn(
			"Session tracking in non-browser environment with @sentry/browser is not supported.",
		);
		return;
	}
	var r = E();
	!r.captureSession || (
		we(r), L(
			"history",
			function (n) {
				var i = n.from, o = n.to;
				i === void 0 || i === o || we(E());
			},
		)
	);
}
var lr = {}, Pt = y();
Pt.Sentry && Pt.Sentry.Integrations && (lr = Pt.Sentry.Integrations);
var ao = u(u(u({}, lr), ei), eo);
const Lt = "sentry-ipc";
var K;
(function (t) {
	t.PING = "sentry-electron.ping", t.EVENT = "sentry-electron.event", t.SCOPE =
		"sentry-electron.scope";
})(K || (K = {}));
function so(t) {
	const e = typeof window != "undefined" ? "renderer" : "main";
	if (e !== t) {
		throw new Error(
			`This code is intended to run in the Electron ${t} process but is currently running in the ${e} process.
This can occur if a bundler picks the wrong entry point.

You can work around this by using a relative import:
import * as Sentry from '@sentry/electron/${e}';`,
		);
	}
}
function uo() {
	return window.__SENTRY_IPC__ ? window.__SENTRY_IPC__ : (
		h.log(
			"IPC was not configured in preload script, falling back to custom protocol and fetch",
		), fetch(`${Lt}://${K.PING}`)
			.catch(
				() =>
					console.error(
						`Sentry SDK failed to establish connection with the Electron main process.
 - Ensure you have initialized the SDK in the main process
 - If your renderers use custom sessions, be sure to set 'getSessions' in the main process options
 - If you are bundling your main process code and using Electron < v5, you'll need to manually configure a preload script`,
					),
			), {
			sendScope: (t) => {
				fetch(`${Lt}://${K.SCOPE}/sentry_key`, { method: "POST", body: t }).catch(() => {});
			},
			sendEvent: (t) => {
				fetch(`${Lt}://${K.EVENT}/sentry_key`, { method: "POST", body: t }).catch(() => {});
			},
		}
	);
}
let jt;
function dr() {
	return (jt || (jt = uo()), jt);
}
class nt {
	constructor() {
		this.name = nt.id;
	}
	setupOnce() {
		this._setupScopeListener();
	}
	_setupScopeListener() {
		const e = E().getScope();
		if (e) {
			const r = dr();
			e.addScopeListener(
				(n) => {
					r.sendScope(JSON.stringify(N(n, 20, 2e3))), e.clearBreadcrumbs();
				},
			);
		}
	}
}
nt.id = "ScopeToMain";
class it {
	constructor() {
		this.name = it.id;
	}
	setupOnce(e) {
		const r = dr();
		e(
			(n) => (
				n.breadcrumbs = n.breadcrumbs || [], delete n.environment, r.sendEvent(
					JSON.stringify(N(n, 20, 2e3)),
				), null
			),
		);
	}
}
it.id = "EventToMain";
var co = Object.freeze(
	Object.defineProperty(
		{ __proto__: null, ScopeToMain: nt, EventToMain: it },
		Symbol.toStringTag,
		{ value: "Module" },
	),
);
const pr = [...fr, new nt(), new it()];
function fo(t = {}) {
	if (so("renderer"), window != null && window.__SENTRY__RENDERER_INIT__) {
		h.warn(
			`The browser SDK has already been initialized.
If init has been called in the preload and contextIsolation is disabled, is not required to call init in the renderer`,
		);
		return;
	}
	window.__SENTRY__RENDERER_INIT__ = !0, t.autoSessionTracking === void 0 && (
		t.autoSessionTracking = !1
	), t.defaultIntegrations === void 0 && (t.defaultIntegrations = pr), t.dsn === void 0 && (
		t.dsn = "https://12345@dummy.dsn/12345"
	), delete t.initialScope, ro(t);
}
const lo = Object.assign(Object.assign({}, co), ao);
exports.BrowserClient = cr;
exports.Hub = yt;
exports.Integrations = lo;
exports.Scope = Q;
exports.addBreadcrumb = wn;
exports.addGlobalEventProcessor = _t;
exports.captureEvent = En;
exports.captureException = Ae;
exports.captureMessage = Sn;
exports.configureScope = bn;
exports.defaultIntegrations = pr;
exports.getCurrentHub = E;
exports.getHubFromCarrier = P;
exports.init = fo;
exports.injectReportDialog = Qe;
exports.lastEventId = io;
exports.setContext = Tn;
exports.setExtra = xn;
exports.setExtras = kn;
exports.setTag = Rn;
exports.setTags = On;
exports.setUser = In;
exports.showReportDialog = no;
exports.startTransaction = Nn;
exports.withScope = Be;
