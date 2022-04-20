var jt = function (e, t) {
	return (
		jt =
			Object.setPrototypeOf ||
				(
					({ __proto__: [] } instanceof Array) && function (r, n) {
						r.__proto__ = n;
					}
				) ||
				function (r, n) {
					for (var i in n) n.hasOwnProperty(i) && (r[i] = n[i]);
				}, jt(e, t)
	);
};
function it(e, t) {
	jt(e, t);
	function r() {
		this.constructor = e;
	}
	e.prototype =
		t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var c = function () {
	return (
		c =
			Object.assign || function (t) {
				for (var r, n = 1, i = arguments.length; n < i; n++) {
					r = arguments[n];
					for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (
						t[o] = r[o]
					);
				}
				return t;
			}, c.apply(this, arguments)
	);
};
function L(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
	if (r) {
		return r.call(e);
	}
	if (e && typeof e.length == "number") {
		return {
			next: function () {
				return (
					e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e }
				);
			},
		};
	}
	throw new TypeError(
		t ? "Object is not iterable." : "Symbol.iterator is not defined.",
	);
}
function O(e, t) {
	var r = typeof Symbol == "function" && e[Symbol.iterator];
	if (!r) {
		return e;
	}
	var n = r.call(e), i, o = [], a;
	try {
		for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; ) o.push(i.value);
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
	for (var e = [], t = 0; t < arguments.length; t++) e =
		e.concat(O(arguments[t]));
	return e;
}
var D;
(function (e) {
	e.Fatal = "fatal", e.Error = "error", e.Warning = "warning", e.Log = "log", e.Info =
		"info", e.Debug = "debug", e.Critical = "critical";
})(D || (D = {}));
function Ir(e) {
	e.then(
		null,
		function (t) {
			console.error(t);
		},
	);
}
function Nr() {
	return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__;
}
function zt() {
	return !Nr() && Object.prototype.toString.call(
		typeof process < "u" ? process : 0,
	) === "[object process]";
}
function Pr(e, t) {
	return e.require(t);
}
var Dr = {};
function _() {
	return zt()
		? global
		: typeof window < "u"
			? window
			: typeof self < "u"
				? self
				: Dr;
}
function Yt(e, t, r) {
	var n = r || _(),
		i = n.__SENTRY__ = n.__SENTRY__ || {},
		o = i[e] || (i[e] = t());
	return o;
}
var Me = Object.prototype.toString;
function Gt(e) {
	switch (Me.call(e)) {
		case "[object Error]":
		case "[object Exception]":
		case "[object DOMException]":
			return !0;
		default:
			return C(e, Error);
	}
}
function V(e, t) {
	return Me.call(e) === ("[object " + t + "]");
}
function Ce(e) {
	return V(e, "ErrorEvent");
}
function de(e) {
	return V(e, "DOMError");
}
function Lr(e) {
	return V(e, "DOMException");
}
function G(e) {
	return V(e, "String");
}
function Wt(e) {
	return e === null || (typeof e != "object" && typeof e != "function");
}
function W(e) {
	return V(e, "Object");
}
function _t(e) {
	return typeof Event < "u" && C(e, Event);
}
function Ur(e) {
	return typeof Element < "u" && C(e, Element);
}
function jr(e) {
	return V(e, "RegExp");
}
function Vt(e) {
	return Boolean(e && e.then && typeof e.then == "function");
}
function Ar(e) {
	return W(e) &&
	("nativeEvent" in e) &&
	("preventDefault" in e) &&
	("stopPropagation" in e);
}
function Mr(e) {
	return typeof e == "number" && e !== e;
}
function C(e, t) {
	try {
		return e instanceof t;
	} catch {
		return !1;
	}
}
function At(e, t) {
	try {
		for (
			var r = e,
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
					l = Cr(r, t), !(
						l === "html" || (a > 1 && (s + (o.length * f) + l.length) >= i)
					)
				);
		) o.push(l), s += l.length, r = r.parentNode;
		return o.reverse().join(u);
	} catch {
		return "<unknown>";
	}
}
function Cr(e, t) {
	var r = e, n = [], i, o, a, s, u;
	if (!r || !r.tagName) {
		return "";
	}
	n.push(r.tagName.toLowerCase());
	var f = t && t.length ? t
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
	} else if (r.id && n.push("#" + r.id), i = r.className, i && G(i)) {
		for (o = i.split(/\s+/), u = 0; u < o.length; u++) n.push("." + o[u]);
	}
	var l = ["type", "name", "title", "alt"];
	for (u = 0; u < l.length; u++) a = l[u], s = r.getAttribute(a), s && n.push(
		"[" + a + '="' + s + '"]',
	);
	return n.join("");
}
function Br() {
	var e = _();
	try {
		return e.document.location.href;
	} catch {
		return "";
	}
}
var Fr = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? Hr : qr);
function Hr(e, t) {
	return (e.__proto__ = t, e);
}
function qr(e, t) {
	for (var r in t) Object.prototype.hasOwnProperty.call(e, r) || (e[r] = t[r]);
	return e;
}
var b = function (e) {
	it(t, e);
	function t(r) {
		var n = this.constructor, i = e.call(this, r) || this;
		return (
			i.message = r, i.name = n.prototype.constructor.name, Fr(i, n.prototype), i
		);
	}
	return t;
}(Error),
	X = typeof __SENTRY_DEBUG__ > "u" ? !0 : __SENTRY_DEBUG__,
	$r = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function zr(e) {
	return e === "http" || e === "https";
}
function ot(e, t) {
	t === void 0 && (t = !1);
	var r = e.host,
		n = e.path,
		i = e.pass,
		o = e.port,
		a = e.projectId,
		s = e.protocol,
		u = e.publicKey;
	return s +
	"://" +
	u +
	(t && i ? ":" + i : "") +
	("@" + r + (o ? ":" + o : "") + "/" + (n && n + "/") + a);
}
function Yr(e) {
	var t = $r.exec(e);
	if (!t) {
		throw new b("Invalid Sentry Dsn: " + e);
	}
	var r = O(t.slice(1), 6),
		n = r[0],
		i = r[1],
		o = r[2],
		a = o === void 0 ? "" : o,
		s = r[3],
		u = r[4],
		f = u === void 0 ? "" : u,
		l = r[5],
		d = "",
		h = l,
		v = h.split("/");
	if (v.length > 1 && (d = v.slice(0, -1).join("/"), h = v.pop()), h) {
		var g = h.match(/^\d+/);
		g && (h = g[0]);
	}
	return Be({
		host: s,
		pass: a,
		path: d,
		projectId: h,
		port: f,
		protocol: n,
		publicKey: i,
	});
}
function Be(e) {
	return (
		("user" in e) && !("publicKey" in e) && (e.publicKey = e.user), {
			user: e.publicKey || "",
			protocol: e.protocol,
			publicKey: e.publicKey || "",
			pass: e.pass || "",
			host: e.host,
			port: e.port || "",
			path: e.path || "",
			projectId: e.projectId,
		}
	);
}
function Gr(e) {
	if (!!X) {
		var t = e.port,
			r = e.projectId,
			n = e.protocol,
			i = ["protocol", "publicKey", "host", "projectId"];
		if (
			i.forEach(function (o) {
				if (!e[o]) {
					throw new b("Invalid Sentry Dsn: " + o + " missing");
				}
			}), !r.match(/^\d+$/)
		) {
			throw new b("Invalid Sentry Dsn: Invalid projectId " + r);
		}
		if (!zr(n)) {
			throw new b("Invalid Sentry Dsn: Invalid protocol " + n);
		}
		if (t && isNaN(parseInt(t, 10))) {
			throw new b("Invalid Sentry Dsn: Invalid port " + t);
		}
		return !0;
	}
}
function Xt(e) {
	var t = typeof e == "string" ? Yr(e) : Be(e);
	return (Gr(t), t);
}
var Wr = ["fatal", "error", "warning", "log", "info", "debug", "critical"],
	Vr = _(),
	Xr = "Sentry Logger ",
	lt = ["debug", "info", "warn", "error", "log", "assert"];
function Fe(e) {
	var t = _();
	if (!("console" in t)) {
		return e();
	}
	var r = t.console, n = {};
	lt.forEach(function (i) {
		var o = r[i] && r[i].__sentry_original__;
		(i in t.console) && o && (n[i] = r[i], r[i] = o);
	});
	try {
		return e();
	} finally {
		Object
			.keys(n)
			.forEach(function (i) {
				r[i] = n[i];
			});
	}
}
function le() {
	var e = !1,
		t = {
			enable: function () {
				e = !0;
			},
			disable: function () {
				e = !1;
			},
		};
	return (
		X ? lt.forEach(function (r) {
			t[r] =
				function () {
					for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
					e && Fe(function () {
						var o;
						(o = Vr.console)[r].apply(o, S([Xr + "[" + r + "]:"], n));
					});
				};
		}) : lt.forEach(function (r) {
			t[r] = function () {};
		}), t
	);
}
var p;
X ? p = Yt("logger", le) : p = le();
function Q(e, t) {
	return (
		t === void 0 && (t = 0), typeof e != "string" || t === 0 || e.length <= t ? e : e.substr(
			0,
			t,
		) + "..."
	);
}
function pe(e, t) {
	if (!Array.isArray(e)) {
		return "";
	}
	for (var r = [], n = 0; n < e.length; n++) {
		var i = e[n];
		try {
			r.push(String(i));
		} catch {
			r.push("[value cannot be serialized]");
		}
	}
	return r.join(t);
}
function Kt(e, t) {
	return G(e)
		? jr(t)
			? t.test(e)
			: typeof t == "string"
				? e.indexOf(t) !== -1
				: !1
		: !1;
}
function T(e, t, r) {
	if (t in e) {
		var n = e[t], i = r(n);
		if (typeof i == "function") {
			try {
				He(i, n);
			} catch {}
		}
		e[t] = i;
	}
}
function yt(e, t, r) {
	Object.defineProperty(e, t, { value: r, writable: !0, configurable: !0 });
}
function He(e, t) {
	var r = t.prototype || {};
	e.prototype = t.prototype = r, yt(e, "__sentry_original__", t);
}
function Jt(e) {
	return e.__sentry_original__;
}
function Kr(e) {
	return Object
		.keys(e)
		.map(function (t) {
			return encodeURIComponent(t) + "=" + encodeURIComponent(e[t]);
		})
		.join("&");
}
function qe(e) {
	var t = e;
	if (Gt(e)) {
		t = c({ message: e.message, name: e.name, stack: e.stack }, ve(e));
	} else if (_t(e)) {
		var r = e;
		t =
			c(
				{
					type: r.type,
					target: he(r.target),
					currentTarget: he(r.currentTarget),
				},
				ve(r),
			), typeof CustomEvent < "u" && C(e, CustomEvent) && (t.detail = r.detail);
	}
	return t;
}
function he(e) {
	try {
		return Ur(e) ? At(e) : Object.prototype.toString.call(e);
	} catch {
		return "<unknown>";
	}
}
function ve(e) {
	var t = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
	return t;
}
function Jr(e, t) {
	t === void 0 && (t = 40);
	var r = Object.keys(qe(e));
	if (r.sort(), !r.length) {
		return "[object has no keys]";
	}
	if (r[0].length >= t) {
		return Q(r[0], t);
	}
	for (var n = r.length; n > 0; n--) {
		var i = r.slice(0, n).join(", ");
		if (!(i.length > t)) {
			return n === r.length ? i : Q(i, t);
		}
	}
	return "";
}
function Mt(e) {
	var t, r;
	if (W(e)) {
		var n = {};
		try {
			for (var i = L(Object.keys(e)), o = i.next(); !o.done; o = i.next()) {
				var a = o.value;
				typeof e[a] < "u" && (n[a] = Mt(e[a]));
			}
		} catch (s) {
			t = { error: s };
		} finally {
			try {
				o && !o.done && (r = i.return) && r.call(i);
			} finally {
				if (t) {
					throw t.error;
				}
			}
		}
		return n;
	}
	return Array.isArray(e) ? e.map(Mt) : e;
}
var Zr = 50;
function Qr() {
	for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
	var r = e
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
				var h = d.value;
				try {
					for (var v = (s = void 0, L(r)), g = v.next(); !g.done; g = v.next()) {
						var k = g.value, w = k(h);
						if (w) {
							f.push(w);
							break;
						}
					}
				} catch (x) {
					s = { error: x };
				} finally {
					try {
						g && !g.done && (u = v.return) && u.call(v);
					} finally {
						if (s) {
							throw s.error;
						}
					}
				}
			}
		} catch (x) {
			o = { error: x };
		} finally {
			try {
				d && !d.done && (a = l.return) && a.call(l);
			} finally {
				if (o) {
					throw o.error;
				}
			}
		}
		return tn(f);
	};
}
function tn(e) {
	if (!e.length) {
		return [];
	}
	var t = e, r = t[0].function || "", n = t[t.length - 1].function || "";
	return (
		(r.indexOf("captureMessage") !== -1 || r.indexOf("captureException") !== -1) && (
			t = t.slice(1)
		), n.indexOf("sentryWrapped") !== -1 && (t = t.slice(0, -1)), t
			.slice(0, Zr)
			.map(function (i) {
				return c(
					c({}, i),
					{ filename: i.filename || t[0].filename, function: i.function || "?" },
				);
			})
			.reverse()
	);
}
var Ot = "<anonymous>";
function M(e) {
	try {
		return !e || typeof e != "function" ? Ot : e.name || Ot;
	} catch {
		return Ot;
	}
}
function mt() {
	if (!("fetch" in _())) {
		return !1;
	}
	try {
		return (new Headers(), new Request(""), new Response(), !0);
	} catch {
		return !1;
	}
}
function Ct(e) {
	return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(
		e.toString(),
	);
}
function en() {
	if (!mt()) {
		return !1;
	}
	var e = _();
	if (Ct(e.fetch)) {
		return !0;
	}
	var t = !1, r = e.document;
	if (r && typeof r.createElement == "function") {
		try {
			var n = r.createElement("iframe");
			n.hidden = !0, r.head.appendChild(n), n.contentWindow &&
				n.contentWindow.fetch &&
				(t = Ct(n.contentWindow.fetch)), r.head.removeChild(n);
		} catch (i) {
			X && p.warn(
				"Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
				i,
			);
		}
	}
	return t;
}
function rn() {
	if (!mt()) {
		return !1;
	}
	try {
		return (new Request("_", { referrerPolicy: "origin" }), !0);
	} catch {
		return !1;
	}
}
function nn() {
	var e = _(),
		t = e.chrome,
		r =
			t && t.app && t.app.runtime,
		n =
			("history" in e) && !!e.history.pushState && !!e.history.replaceState;
	return !r && n;
}
var y = _(), tt = {}, ge = {};
function on(e) {
	if (!ge[e]) {
		switch (ge[e] = !0, e) {
			case "console":
				an();
				break;
			case "dom":
				vn();
				break;
			case "xhr":
				fn();
				break;
			case "fetch":
				sn();
				break;
			case "history":
				dn();
				break;
			case "error":
				gn();
				break;
			case "unhandledrejection":
				_n();
				break;
			default:
				X && p.warn("unknown instrumentation type:", e);
				return;
		}
	}
}
function j(e, t) {
	tt[e] = tt[e] || [], tt[e].push(t), on(e);
}
function P(e, t) {
	var r, n;
	if (!(!e || !tt[e])) {
		try {
			for (var i = L(tt[e] || []), o = i.next(); !o.done; o = i.next()) {
				var a = o.value;
				try {
					a(t);
				} catch (s) {
					X && p.error(
						`Error while triggering instrumentation handler.
Type: ` +
							e +
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
function an() {
	("console" in y) && lt.forEach(function (e) {
		(e in y.console) && T(
			y.console,
			e,
			function (t) {
				return function () {
					for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
					P("console", { args: r, level: e }), t && t.apply(y.console, r);
				};
			},
		);
	});
}
function sn() {
	!en() || T(
		y,
		"fetch",
		function (e) {
			return function () {
				for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
				var n = {
					args: t,
					fetchData: { method: un(t), url: cn(t) },
					startTimestamp: Date.now(),
				};
				return (
					P("fetch", c({}, n)), e
						.apply(y, t)
						.then(
							function (i) {
								return (
									P(
										"fetch",
										c(c({}, n), { endTimestamp: Date.now(), response: i }),
									), i
								);
							},
							function (i) {
								throw P(
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
function un(e) {
	return (
		e === void 0 && (e = []), ("Request" in y) &&
			C(e[0], Request) &&
			e[0].method
			? String(e[0].method).toUpperCase()
			: e[1] && e[1].method
				? String(e[1].method).toUpperCase()
				: "GET"
	);
}
function cn(e) {
	return (
		e === void 0 && (e = []), typeof e[0] == "string"
			? e[0]
			: ("Request" in y) && C(e[0], Request)
				? e[0].url
				: String(e[0])
	);
}
function fn() {
	if ("XMLHttpRequest" in y) {
		var e = XMLHttpRequest.prototype;
		T(
			e,
			"open",
			function (t) {
				return function () {
					for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
					var i = this,
						o = r[1],
						a = i.__sentry_xhr__ =
							{ method: G(r[0]) ? r[0].toUpperCase() : r[0], url: r[1] };
					G(o) &&
						a.method === "POST" &&
						o.match(/sentry_key/) &&
						(i.__sentry_own_request__ = !0);
					var s = function () {
						if (i.readyState === 4) {
							try {
								a.status_code = i.status;
							} catch {}
							P(
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
						) : i.addEventListener("readystatechange", s), t.apply(i, r)
					);
				};
			},
		), T(
			e,
			"send",
			function (t) {
				return function () {
					for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
					return (
						this.__sentry_xhr__ &&
							r[0] !== void 0 &&
							(this.__sentry_xhr__.body = r[0]), P(
							"xhr",
							{ args: r, startTimestamp: Date.now(), xhr: this },
						), t.apply(this, r)
					);
				};
			},
		);
	}
}
var st;
function dn() {
	if (!nn()) {
		return;
	}
	var e = y.onpopstate;
	y.onpopstate =
		function () {
			for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
			var i = y.location.href, o = st;
			if (st = i, P("history", { from: o, to: i }), e) {
				try {
					return e.apply(this, r);
				} catch {}
			}
		};
	function t(r) {
		return function () {
			for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
			var o = n.length > 2 ? n[2] : void 0;
			if (o) {
				var a = st, s = String(o);
				st = s, P("history", { from: a, to: s });
			}
			return r.apply(this, n);
		};
	}
	T(y.history, "pushState", t), T(y.history, "replaceState", t);
}
var ln = 1e3, ut, ct;
function pn(e, t) {
	if (!e || e.type !== t.type) {
		return !0;
	}
	try {
		if (e.target !== t.target) {
			return !0;
		}
	} catch {}
	return !1;
}
function hn(e) {
	if (e.type !== "keypress") {
		return !1;
	}
	try {
		var t = e.target;
		if (!t || !t.tagName) {
			return !0;
		}
		if (
			t.tagName === "INPUT" ||
			t.tagName === "TEXTAREA" ||
			t.isContentEditable
		) {
			return !1;
		}
	} catch {}
	return !0;
}
function _e(e, t) {
	return (
		t === void 0 && (t = !1), function (r) {
			if (!(!r || ct === r) && !hn(r)) {
				var n = r.type === "keypress" ? "input" : r.type;
				ut === void 0 ? (e({ event: r, name: n, global: t }), ct = r) : pn(
					ct,
					r,
				) && (e({ event: r, name: n, global: t }), ct = r), clearTimeout(ut), ut =
					y.setTimeout(
						function () {
							ut = void 0;
						},
						ln,
					);
			}
		}
	);
}
function vn() {
	if ("document" in y) {
		var e = P.bind(null, "dom"), t = _e(e, !0);
		y.document.addEventListener("click", t, !1), y.document.addEventListener(
			"keypress",
			t,
			!1,
		), ["EventTarget", "Node"].forEach(function (r) {
			var n = y[r] && y[r].prototype;
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
											var d = _e(e);
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
var xt = null;
function gn() {
	xt = y.onerror, y.onerror =
		function (e, t, r, n, i) {
			return (
				P("error", { column: n, error: i, line: r, msg: e, url: t }), xt ? xt.apply(
					this,
					arguments,
				) : !1
			);
		};
}
var Rt = null;
function _n() {
	Rt = y.onunhandledrejection, y.onunhandledrejection =
		function (e) {
			return (P("unhandledrejection", e), Rt ? Rt.apply(this, arguments) : !0);
		};
}
function yn() {
	var e = typeof WeakSet == "function", t = e ? new WeakSet() : [];
	function r(i) {
		if (e) {
			return t.has(i) ? !0 : (t.add(i), !1);
		}
		for (var o = 0; o < t.length; o++) {
			var a = t[o];
			if (a === i) {
				return !0;
			}
		}
		return (t.push(i), !1);
	}
	function n(i) {
		if (e) {
			t.delete(i);
		} else {
			for (var o = 0; o < t.length; o++) if (t[o] === i) {
				t.splice(o, 1);
				break;
			}
		}
	}
	return [r, n];
}
function Y() {
	var e = _(), t = e.crypto || e.msCrypto;
	if (t !== void 0 && t.getRandomValues) {
		var r = new Uint16Array(8);
		t.getRandomValues(r), r[3] = r[3] & 4095 | 16384, r[4] =
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
function It(e) {
	if (!e) {
		return {};
	}
	var t = e.match(
		/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/,
	);
	if (!t) {
		return {};
	}
	var r = t[6] || "", n = t[8] || "";
	return { host: t[4], path: t[5], protocol: t[2], relative: t[5] + r + n };
}
function $e(e) {
	return e.exception && e.exception.values ? e.exception.values[0] : void 0;
}
function q(e) {
	var t = e.message, r = e.event_id;
	if (t) {
		return t;
	}
	var n = $e(e);
	return n
		? n.type && n.value
			? n.type + ": " + n.value
			: n.type || n.value || r || "<unknown>"
		: r || "<unknown>";
}
function Bt(e, t, r) {
	var n = e.exception = e.exception || {},
		i = n.values = n.values || [],
		o = i[0] = i[0] || {};
	o.value || (o.value = t || ""), o.type || (o.type = r || "Error");
}
function rt(e, t) {
	var r = $e(e);
	if (!!r) {
		var n = { type: "generic", handled: !0 }, i = r.mechanism;
		if (r.mechanism = c(c(c({}, n), i), t), t && ("data" in t)) {
			var o = c(c({}, i && i.data), t.data);
			r.mechanism.data = o;
		}
	}
}
function ye(e) {
	if (e && e.__sentry_captured__) {
		return !0;
	}
	try {
		yt(e, "__sentry_captured__", !0);
	} catch {}
	return !1;
}
function H(e, t, r) {
	t === void 0 && (t = 1 / 0), r === void 0 && (r = 1 / 0);
	try {
		return Ye("", e, t, r);
	} catch (n) {
		return { ERROR: "**non-serializable** (" + n + ")" };
	}
}
function ze(e, t, r) {
	t === void 0 && (t = 3), r === void 0 && (r = 100 * 1024);
	var n = H(e, t);
	return Sn(n) > r ? ze(e, t - 1, r) : n;
}
function Ye(e, t, r, n, i) {
	r === void 0 && (r = 1 / 0), n === void 0 && (n = 1 / 0), i === void 0 && (
		i = yn()
	);
	var o = O(i, 2), a = o[0], s = o[1], u = t;
	if (u && typeof u.toJSON == "function") {
		try {
			return u.toJSON();
		} catch {}
	}
	if (
		t === null || (["number", "boolean", "string"].includes(typeof t) && !Mr(t))
	) {
		return t;
	}
	var f = mn(e, t);
	if (!f.startsWith("[object ")) {
		return f;
	}
	if (r === 0) {
		return f.replace("object ", "");
	}
	if (a(t)) {
		return "[Circular ~]";
	}
	var l = Array.isArray(t) ? [] : {}, d = 0, h = Gt(t) || _t(t) ? qe(t) : t;
	for (var v in h) if (!!Object.prototype.hasOwnProperty.call(h, v)) {
		if (d >= n) {
			l[v] = "[MaxProperties ~]";
			break;
		}
		var g = h[v];
		l[v] = Ye(v, g, r - 1, n, i), d += 1;
	}
	return (s(t), l);
}
function mn(e, t) {
	try {
		return e === "domain" && t && typeof t == "object" && t._events
			? "[Domain]"
			: e === "domainEmitter"
				? "[DomainEmitter]"
				: typeof global < "u" && t === global
					? "[Global]"
					: typeof window < "u" && t === window
						? "[Window]"
						: typeof document < "u" && t === document
							? "[Document]"
							: Ar(t)
								? "[SyntheticEvent]"
								: typeof t == "number" && t !== t
									? "[NaN]"
									: t === void 0
										? "[undefined]"
										: typeof t == "function"
											? "[Function: " + M(t) + "]"
											: typeof t == "symbol"
												? "[" + String(t) + "]"
												: typeof t == "bigint"
													? "[BigInt: " + String(t) + "]"
													: "[object " +
														Object.getPrototypeOf(t).constructor.name +
														"]";
	} catch (r) {
		return "**non-serializable** (" + r + ")";
	}
}
function En(e) {
	return ~-encodeURI(e).split(/%..|./).length;
}
function Sn(e) {
	return En(JSON.stringify(e));
}
function U(e) {
	return new B(function (t) {
		t(e);
	});
}
function nt(e) {
	return new B(
		function (t, r) {
			r(e);
		},
	);
}
var B = function () {
	function e(t) {
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
					if (Vt(i)) {
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
			t(this._resolve, this._reject);
		} catch (n) {
			this._reject(n);
		}
	}
	return (
		e.prototype.then =
			function (t, r) {
				var n = this;
				return new e(
					function (i, o) {
						n._handlers.push([
							!1,
							function (a) {
								if (!t) {
									i(a);
								} else {
									try {
										i(t(a));
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
			}, e.prototype.catch =
			function (t) {
				return this.then(
					function (r) {
						return r;
					},
					t,
				);
			}, e.prototype.finally =
			function (t) {
				var r = this;
				return new e(
					function (n, i) {
						var o, a;
						return r
							.then(
								function (s) {
									a = !1, o = s, t && t();
								},
								function (s) {
									a = !0, o = s, t && t();
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
			}, e
	);
}();
function Ge(e) {
	var t = [];
	function r() {
		return e === void 0 || t.length < e;
	}
	function n(a) {
		return t.splice(t.indexOf(a), 1)[0];
	}
	function i(a) {
		if (!r()) {
			return nt(new b("Not adding Promise due to buffer limit reached."));
		}
		var s = a();
		return (
			t.indexOf(s) === -1 && t.push(s), s
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
		return new B(
			function (s, u) {
				var f = t.length;
				if (!f) {
					return s(!0);
				}
				var l = setTimeout(
					function () {
						a && a > 0 && s(!1);
					},
					a,
				);
				t.forEach(function (d) {
					U(d)
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
	return { $: t, add: i, drain: o };
}
function bn(e) {
	return Wr.indexOf(e) !== -1;
}
function wn(e) {
	return e === "warn"
		? D.Warning
		: bn(e)
			? e
			: D.Log;
}
function We(e) {
	return e >= 200 && e < 300
		? "success"
		: e === 429
			? "rate_limit"
			: e >= 400 && e < 500
				? "invalid"
				: e >= 500
					? "failed"
					: "unknown";
}
var Ft = {
	nowSeconds: function () {
		return Date.now() / 1e3;
	},
};
function Tn() {
	var e = _().performance;
	if (!(!e || !e.now)) {
		var t = Date.now() - e.now();
		return {
			now: function () {
				return e.now();
			},
			timeOrigin: t,
		};
	}
}
function kn() {
	try {
		var e = Pr(module, "perf_hooks");
		return e.performance;
	} catch {
		return;
	}
}
var Nt = zt() ? kn() : Tn(),
	me = Nt === void 0 ? Ft : {
		nowSeconds: function () {
			return (Nt.timeOrigin + Nt.now()) / 1e3;
		},
	},
	Et = Ft.nowSeconds.bind(Ft),
	Ht = me.nowSeconds.bind(me);
(function () {
	var e = _().performance;
	if (!(!e || !e.now)) {
		var t = 3600 * 1e3,
			r = e.now(),
			n = Date.now(),
			i = e.timeOrigin ? Math.abs(e.timeOrigin + r - n) : t,
			o = i < t,
			a = e.timing && e.timing.navigationStart,
			s = typeof a == "number",
			u = s ? Math.abs(a + r - n) : t,
			f = u < t;
		return o || f
			? i <= u
				? e.timeOrigin
				: a
			: n;
	}
})();
function St(e, t) {
	return (t === void 0 && (t = []), [e, t]);
}
function On(e) {
	var t = O(e, 2), r = O(t[1], 1), n = O(r[0], 1), i = n[0];
	return i.type;
}
function bt(e) {
	var t = O(e, 2), r = t[0], n = t[1], i = JSON.stringify(r);
	return n.reduce(
		function (o, a) {
			var s = O(a, 2),
				u = s[0],
				f = s[1],
				l = Wt(f) ? String(f) : JSON.stringify(f);
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
function xn(e, t, r) {
	var n = [
		{ type: "client_report" },
		{ timestamp: r || Et(), discarded_events: e },
	];
	return St(t ? { dsn: t } : {}, [n]);
}
var Rn = 60 * 1e3;
function In(e, t) {
	t === void 0 && (t = Date.now());
	var r = parseInt("" + e, 10);
	if (!isNaN(r)) {
		return r * 1e3;
	}
	var n = Date.parse("" + e);
	return isNaN(n) ? Rn : n - t;
}
function Zt(e, t) {
	return e[t] || e.all || 0;
}
function Ve(e, t, r) {
	return (r === void 0 && (r = Date.now()), Zt(e, t) > r);
}
function Xe(e, t, r) {
	var n, i, o, a;
	r === void 0 && (r = Date.now());
	var s = c({}, e), u = t["x-sentry-rate-limits"], f = t["retry-after"];
	if (u) {
		try {
			for (var l = L(u.trim().split(",")), d = l.next(); !d.done; d = l.next()) {
				var h = d.value,
					v = h.split(":", 2),
					g = parseInt(v[0], 10),
					k = (isNaN(g) ? 60 : g) * 1e3;
				if (!v[1]) {
					s.all = r + k;
				} else {
					try {
						for (
							var w = (o = void 0, L(v[1].split(";"))), x = w.next();
							!x.done;
							x = w.next()
						) {
							var J = x.value;
							s[J] = r + k;
						}
					} catch (z) {
						o = { error: z };
					} finally {
						try {
							x && !x.done && (a = w.return) && a.call(w);
						} finally {
							if (o) {
								throw o.error;
							}
						}
					}
				}
			}
		} catch (z) {
			n = { error: z };
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
		f && (s.all = r + In(f, r));
	}
	return s;
}
var Ee = 100,
	pt = function () {
		function e() {
			this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors =
				[], this._breadcrumbs = [], this._user = {}, this._tags = {}, this._extra =
				{}, this._contexts = {}, this._sdkProcessingMetadata = {};
		}
		return (
			e.clone =
				function (t) {
					var r = new e();
					return (
						t && (
							r._breadcrumbs = S(t._breadcrumbs), r._tags = c({}, t._tags), r._extra =
								c({}, t._extra), r._contexts = c({}, t._contexts), r._user =
								t._user, r._level = t._level, r._span = t._span, r._session =
								t._session, r._transactionName = t._transactionName, r._fingerprint =
								t._fingerprint, r._eventProcessors = S(t._eventProcessors), r._requestSession =
								t._requestSession
						), r
					);
				}, e.prototype.addScopeListener =
				function (t) {
					this._scopeListeners.push(t);
				}, e.prototype.addEventProcessor =
				function (t) {
					return (this._eventProcessors.push(t), this);
				}, e.prototype.setUser =
				function (t) {
					return (
						this._user = t || {}, this._session && this._session.update({
							user: t,
						}), this._notifyScopeListeners(), this
					);
				}, e.prototype.getUser =
				function () {
					return this._user;
				}, e.prototype.getRequestSession =
				function () {
					return this._requestSession;
				}, e.prototype.setRequestSession =
				function (t) {
					return (this._requestSession = t, this);
				}, e.prototype.setTags =
				function (t) {
					return (
						this._tags = c(c({}, this._tags), t), this._notifyScopeListeners(), this
					);
				}, e.prototype.setTag =
				function (t, r) {
					var n;
					return (
						this._tags = c(c({}, this._tags), (n = {}, n[t] = r, n)), this._notifyScopeListeners(), this
					);
				}, e.prototype.setExtras =
				function (t) {
					return (
						this._extra = c(c({}, this._extra), t), this._notifyScopeListeners(), this
					);
				}, e.prototype.setExtra =
				function (t, r) {
					var n;
					return (
						this._extra = c(c({}, this._extra), (n = {}, n[t] = r, n)), this._notifyScopeListeners(), this
					);
				}, e.prototype.setFingerprint =
				function (t) {
					return (this._fingerprint = t, this._notifyScopeListeners(), this);
				}, e.prototype.setLevel =
				function (t) {
					return (this._level = t, this._notifyScopeListeners(), this);
				}, e.prototype.setTransactionName =
				function (t) {
					return (this._transactionName = t, this._notifyScopeListeners(), this);
				}, e.prototype.setTransaction =
				function (t) {
					return this.setTransactionName(t);
				}, e.prototype.setContext =
				function (t, r) {
					var n;
					return (
						r === null ? delete this._contexts[t] : this._contexts =
							c(c({}, this._contexts), (n = {}, n[t] = r, n)), this._notifyScopeListeners(), this
					);
				}, e.prototype.setSpan =
				function (t) {
					return (this._span = t, this._notifyScopeListeners(), this);
				}, e.prototype.getSpan =
				function () {
					return this._span;
				}, e.prototype.getTransaction =
				function () {
					var t = this.getSpan();
					return t && t.transaction;
				}, e.prototype.setSession =
				function (t) {
					return (
						t ? this._session = t : delete this._session, this._notifyScopeListeners(), this
					);
				}, e.prototype.getSession =
				function () {
					return this._session;
				}, e.prototype.update =
				function (t) {
					if (!t) {
						return this;
					}
					if (typeof t == "function") {
						var r = t(this);
						return r instanceof e ? r : this;
					}
					return (
						t instanceof e ? (
							this._tags = c(c({}, this._tags), t._tags), this._extra =
								c(c({}, this._extra), t._extra), this._contexts =
								c(c({}, this._contexts), t._contexts), t._user &&
								Object.keys(t._user).length &&
								(this._user = t._user), t._level && (this._level = t._level), t._fingerprint && (
								this._fingerprint = t._fingerprint
							), t._requestSession && (this._requestSession = t._requestSession)
						) : W(t) && (
							t = t, this._tags = c(c({}, this._tags), t.tags), this._extra =
								c(c({}, this._extra), t.extra), this._contexts =
								c(c({}, this._contexts), t.contexts), t.user && (
								this._user = t.user
							), t.level && (this._level = t.level), t.fingerprint && (
								this._fingerprint = t.fingerprint
							), t.requestSession && (this._requestSession = t.requestSession)
						), this
					);
				}, e.prototype.clear =
				function () {
					return (
						this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user =
							{}, this._contexts = {}, this._level = void 0, this._transactionName =
							void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span =
							void 0, this._session = void 0, this._notifyScopeListeners(), this
					);
				}, e.prototype.addBreadcrumb =
				function (t, r) {
					var n = typeof r == "number" ? Math.min(r, Ee) : Ee;
					if (n <= 0) {
						return this;
					}
					var i = c({ timestamp: Et() }, t);
					return (
						this._breadcrumbs = S(this._breadcrumbs, [i]).slice(-n), this._notifyScopeListeners(), this
					);
				}, e.prototype.clearBreadcrumbs =
				function () {
					return (this._breadcrumbs = [], this._notifyScopeListeners(), this);
				}, e.prototype.applyToEvent =
				function (t, r) {
					if (
						this._extra &&
							Object.keys(this._extra).length &&
							(t.extra = c(c({}, this._extra), t.extra)), this._tags &&
							Object.keys(this._tags).length &&
							(t.tags = c(c({}, this._tags), t.tags)), this._user &&
							Object.keys(this._user).length &&
							(t.user = c(c({}, this._user), t.user)), this._contexts &&
							Object.keys(this._contexts).length &&
							(t.contexts = c(c({}, this._contexts), t.contexts)), this._level && (
							t.level = this._level
						), this._transactionName && (t.transaction = this._transactionName), this._span
					) {
						t.contexts = c({ trace: this._span.getTraceContext() }, t.contexts);
						var n = this._span.transaction && this._span.transaction.name;
						n && (t.tags = c({ transaction: n }, t.tags));
					}
					return (
						this._applyFingerprint(t), t.breadcrumbs =
							S(t.breadcrumbs || [], this._breadcrumbs), t.breadcrumbs =
							t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0, t.sdkProcessingMetadata =
							this._sdkProcessingMetadata, this._notifyEventProcessors(
							S(Ke(), this._eventProcessors),
							t,
							r,
						)
					);
				}, e.prototype.setSDKProcessingMetadata =
				function (t) {
					return (
						this._sdkProcessingMetadata =
							c(c({}, this._sdkProcessingMetadata), t), this
					);
				}, e.prototype._notifyEventProcessors =
				function (t, r, n, i) {
					var o = this;
					return (
						i === void 0 && (i = 0), new B(
							function (a, s) {
								var u = t[i];
								if (r === null || typeof u != "function") {
									a(r);
								} else {
									var f = u(c({}, r), n);
									Vt(f) ? f
										.then(function (l) {
											return o._notifyEventProcessors(t, l, n, i + 1).then(a);
										})
										.then(null, s) : o._notifyEventProcessors(t, f, n, i + 1).then(
										a,
									).then(null, s);
								}
							},
						)
					);
				}, e.prototype._notifyScopeListeners =
				function () {
					var t = this;
					this._notifyingListeners || (
						this._notifyingListeners = !0, this._scopeListeners.forEach(function (
							r,
						) {
							r(t);
						}), this._notifyingListeners = !1
					);
				}, e.prototype._applyFingerprint =
				function (t) {
					t.fingerprint =
						t.fingerprint
							? Array.isArray(t.fingerprint)
								? t.fingerprint
								: [t.fingerprint]
							: [], this._fingerprint && (
						t.fingerprint = t.fingerprint.concat(this._fingerprint)
					), t.fingerprint && !t.fingerprint.length && delete t.fingerprint;
				}, e
		);
	}();
function Ke() {
	return Yt(
		"globalEventProcessors",
		function () {
			return [];
		},
	);
}
function Qt(e) {
	Ke().push(e);
}
var Nn = function () {
	function e(t) {
		this.errors = 0, this.sid = Y(), this.duration = 0, this.status = "ok", this.init =
			!0, this.ignoreDuration = !1;
		var r = Ht();
		this.timestamp = r, this.started = r, t && this.update(t);
	}
	return (
		e.prototype.update =
			function (t) {
				if (
					t === void 0 && (t = {}), t.user && (
						!this.ipAddress &&
							t.user.ip_address &&
							(this.ipAddress = t.user.ip_address), !this.did &&
							!t.did &&
							(this.did = t.user.id || t.user.email || t.user.username)
					), this.timestamp = t.timestamp || Ht(), t.ignoreDuration && (
						this.ignoreDuration = t.ignoreDuration
					), t.sid && (this.sid = t.sid.length === 32 ? t.sid : Y()), t.init !== void 0 && (
						this.init = t.init
					), !this.did && t.did && (this.did = "" + t.did), typeof t.started == "number" && (
						this.started = t.started
					), this.ignoreDuration
				) {
					this.duration = void 0;
				} else if (typeof t.duration == "number") {
					this.duration = t.duration;
				} else {
					var r = this.timestamp - this.started;
					this.duration = r >= 0 ? r : 0;
				}
				t.release && (this.release = t.release), t.environment && (
					this.environment = t.environment
				), !this.ipAddress && t.ipAddress && (this.ipAddress = t.ipAddress), !this.userAgent &&
					t.userAgent &&
					(this.userAgent = t.userAgent), typeof t.errors == "number" && (
					this.errors = t.errors
				), t.status && (this.status = t.status);
			}, e.prototype.close =
			function (t) {
				t
					? this.update({ status: t })
					: this.status === "ok"
						? this.update({ status: "exited" })
						: this.update();
			}, e.prototype.toJSON =
			function () {
				return Mt({
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
			}, e
	);
}(),
	Se = typeof __SENTRY_DEBUG__ > "u" ? !0 : __SENTRY_DEBUG__,
	te = 4,
	Pn = 100,
	ee = function () {
		function e(t, r, n) {
			r === void 0 && (r = new pt()), n === void 0 && (n = te), this._version =
				n, this._stack = [{}], this.getStackTop().scope = r, t && this.bindClient(
				t,
			);
		}
		return (
			e.prototype.isOlderThan =
				function (t) {
					return this._version < t;
				}, e.prototype.bindClient =
				function (t) {
					var r = this.getStackTop();
					r.client = t, t && t.setupIntegrations && t.setupIntegrations();
				}, e.prototype.pushScope =
				function () {
					var t = pt.clone(this.getScope());
					return (
						this.getStack().push({ client: this.getClient(), scope: t }), t
					);
				}, e.prototype.popScope =
				function () {
					return this.getStack().length <= 1 ? !1 : !!this.getStack().pop();
				}, e.prototype.withScope =
				function (t) {
					var r = this.pushScope();
					try {
						t(r);
					} finally {
						this.popScope();
					}
				}, e.prototype.getClient =
				function () {
					return this.getStackTop().client;
				}, e.prototype.getScope =
				function () {
					return this.getStackTop().scope;
				}, e.prototype.getStack =
				function () {
					return this._stack;
				}, e.prototype.getStackTop =
				function () {
					return this._stack[this._stack.length - 1];
				}, e.prototype.captureException =
				function (t, r) {
					var n = this._lastEventId = r && r.event_id ? r.event_id : Y(), i = r;
					if (!r) {
						var o = void 0;
						try {
							throw new Error("Sentry syntheticException");
						} catch (a) {
							o = a;
						}
						i = { originalException: t, syntheticException: o };
					}
					return (
						this._invokeClient(
							"captureException",
							t,
							c(c({}, i), { event_id: n }),
						), n
					);
				}, e.prototype.captureMessage =
				function (t, r, n) {
					var i = this._lastEventId = n && n.event_id ? n.event_id : Y(), o = n;
					if (!n) {
						var a = void 0;
						try {
							throw new Error(t);
						} catch (s) {
							a = s;
						}
						o = { originalException: t, syntheticException: a };
					}
					return (
						this._invokeClient(
							"captureMessage",
							t,
							r,
							c(c({}, o), { event_id: i }),
						), i
					);
				}, e.prototype.captureEvent =
				function (t, r) {
					var n = r && r.event_id ? r.event_id : Y();
					return (
						t.type !== "transaction" && (this._lastEventId = n), this._invokeClient(
							"captureEvent",
							t,
							c(c({}, r), { event_id: n }),
						), n
					);
				}, e.prototype.lastEventId =
				function () {
					return this._lastEventId;
				}, e.prototype.addBreadcrumb =
				function (t, r) {
					var n = this.getStackTop(), i = n.scope, o = n.client;
					if (!(!i || !o)) {
						var a = (o.getOptions && o.getOptions()) || {},
							s = a.beforeBreadcrumb,
							u = s === void 0 ? null : s,
							f = a.maxBreadcrumbs,
							l = f === void 0 ? Pn : f;
						if (!(l <= 0)) {
							var d = Et(),
								h = c({ timestamp: d }, t),
								v = u ? Fe(function () {
									return u(h, r);
								}) : h;
							v !== null && i.addBreadcrumb(v, l);
						}
					}
				}, e.prototype.setUser =
				function (t) {
					var r = this.getScope();
					r && r.setUser(t);
				}, e.prototype.setTags =
				function (t) {
					var r = this.getScope();
					r && r.setTags(t);
				}, e.prototype.setExtras =
				function (t) {
					var r = this.getScope();
					r && r.setExtras(t);
				}, e.prototype.setTag =
				function (t, r) {
					var n = this.getScope();
					n && n.setTag(t, r);
				}, e.prototype.setExtra =
				function (t, r) {
					var n = this.getScope();
					n && n.setExtra(t, r);
				}, e.prototype.setContext =
				function (t, r) {
					var n = this.getScope();
					n && n.setContext(t, r);
				}, e.prototype.configureScope =
				function (t) {
					var r = this.getStackTop(), n = r.scope, i = r.client;
					n && i && t(n);
				}, e.prototype.run =
				function (t) {
					var r = be(this);
					try {
						t(this);
					} finally {
						be(r);
					}
				}, e.prototype.getIntegration =
				function (t) {
					var r = this.getClient();
					if (!r) {
						return null;
					}
					try {
						return r.getIntegration(t);
					} catch {
						return (
							Se && p.warn(
								"Cannot retrieve integration " + t.id + " from the current Hub",
							), null
						);
					}
				}, e.prototype.startSpan =
				function (t) {
					return this._callExtensionMethod("startSpan", t);
				}, e.prototype.startTransaction =
				function (t, r) {
					return this._callExtensionMethod("startTransaction", t, r);
				}, e.prototype.traceHeaders =
				function () {
					return this._callExtensionMethod("traceHeaders");
				}, e.prototype.captureSession =
				function (t) {
					if (t === void 0 && (t = !1), t) {
						return this.endSession();
					}
					this._sendSessionUpdate();
				}, e.prototype.endSession =
				function () {
					var t = this.getStackTop(), r = t && t.scope, n = r && r.getSession();
					n && n.close(), this._sendSessionUpdate(), r && r.setSession();
				}, e.prototype.startSession =
				function (t) {
					var r = this.getStackTop(),
						n = r.scope,
						i = r.client,
						o = (i && i.getOptions()) || {},
						a = o.release,
						s = o.environment,
						u = _(),
						f = (u.navigator || {}).userAgent,
						l = new Nn(
							c(
								c(
									c({ release: a, environment: s }, n && { user: n.getUser() }),
									f && { userAgent: f },
								),
								t,
							),
						);
					if (n) {
						var d = n.getSession && n.getSession();
						d && d.status === "ok" && d.update({ status: "exited" }), this.endSession(), n.setSession(
							l,
						);
					}
					return l;
				}, e.prototype._sendSessionUpdate =
				function () {
					var t = this.getStackTop(), r = t.scope, n = t.client;
					if (!!r) {
						var i = r.getSession && r.getSession();
						i && n && n.captureSession && n.captureSession(i);
					}
				}, e.prototype._invokeClient =
				function (t) {
					for (var r, n = [], i = 1; i < arguments.length; i++) n[i - 1] =
						arguments[i];
					var o = this.getStackTop(), a = o.scope, s = o.client;
					s && s[t] && (r = s)[t].apply(r, S(n, [a]));
				}, e.prototype._callExtensionMethod =
				function (t) {
					for (var r = [], n = 1; n < arguments.length; n++) r[n - 1] =
						arguments[n];
					var i = wt(), o = i.__SENTRY__;
					if (o && o.extensions && typeof o.extensions[t] == "function") {
						return o.extensions[t].apply(this, r);
					}
					Se && p.warn(
						"Extension method " + t + " couldn't be found, doing nothing.",
					);
				}, e
		);
	}();
function wt() {
	var e = _();
	return (e.__SENTRY__ = e.__SENTRY__ || { extensions: {}, hub: void 0 }, e);
}
function be(e) {
	var t = wt(), r = A(t);
	return (re(t, e), r);
}
function m() {
	var e = wt();
	return (
		(!Je(e) || A(e).isOlderThan(te)) && re(e, new ee()), zt() ? Dn(e) : A(e)
	);
}
function Dn(e) {
	try {
		var t = wt().__SENTRY__,
			r =
				t && t.extensions && t.extensions.domain && t.extensions.domain.active;
		if (!r) {
			return A(e);
		}
		if (!Je(r) || A(r).isOlderThan(te)) {
			var n = A(e).getStackTop();
			re(r, new ee(n.client, pt.clone(n.scope)));
		}
		return A(r);
	} catch {
		return A(e);
	}
}
function Je(e) {
	return !!(e && e.__SENTRY__ && e.__SENTRY__.hub);
}
function A(e) {
	return Yt(
		"hub",
		function () {
			return new ee();
		},
		e,
	);
}
function re(e, t) {
	if (!e) {
		return !1;
	}
	var r = e.__SENTRY__ = e.__SENTRY__ || {};
	return (r.hub = t, !0);
}
function I(e) {
	for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
	var n = m();
	if (n && n[e]) {
		return n[e].apply(n, S(t));
	}
	throw new Error(
		"No hub defined or " +
			e +
			" was not found on the hub, please open a bug report.",
	);
}
function Ze(e, t) {
	var r = new Error("Sentry syntheticException");
	return I(
		"captureException",
		e,
		{ captureContext: t, originalException: e, syntheticException: r },
	);
}
function Eo(e, t) {
	var r = new Error(e),
		n = typeof t == "string" ? t : void 0,
		i = typeof t != "string" ? { captureContext: t } : void 0;
	return I(
		"captureMessage",
		e,
		n,
		c({ originalException: e, syntheticException: r }, i),
	);
}
function So(e) {
	return I("captureEvent", e);
}
function bo(e) {
	I("configureScope", e);
}
function wo(e) {
	I("addBreadcrumb", e);
}
function To(e, t) {
	I("setContext", e, t);
}
function ko(e) {
	I("setExtras", e);
}
function Oo(e) {
	I("setTags", e);
}
function xo(e, t) {
	I("setExtra", e, t);
}
function Ro(e, t) {
	I("setTag", e, t);
}
function Io(e) {
	I("setUser", e);
}
function Ln(e) {
	I("withScope", e);
}
function No(e, t) {
	return I("startTransaction", c({}, e), t);
}
var Un = "7";
function ht(e, t, r) {
	return { initDsn: e, metadata: t || {}, dsn: Xt(e), tunnel: r };
}
function Qe(e) {
	var t = e.protocol ? e.protocol + ":" : "", r = e.port ? ":" + e.port : "";
	return t + "//" + e.host + r + (e.path ? "/" + e.path : "") + "/api/";
}
function tr(e, t) {
	return "" + Qe(e) + e.projectId + "/" + t + "/";
}
function er(e) {
	return Kr({ sentry_key: e.publicKey, sentry_version: Un });
}
function jn(e) {
	return tr(e, "store");
}
function rr(e) {
	return jn(e) + "?" + er(e);
}
function An(e) {
	return tr(e, "envelope");
}
function Tt(e, t) {
	return t || An(e) + "?" + er(e);
}
function Mn(e, t) {
	var r = Xt(e), n = Qe(r) + "embed/error-page/", i = "dsn=" + ot(r);
	for (var o in t) if (o !== "dsn") {
		if (o === "user") {
			if (!t.user) {
				continue;
			}
			t.user.name && (i += "&name=" + encodeURIComponent(t.user.name)), t.user.email && (
				i += "&email=" + encodeURIComponent(t.user.email)
			);
		} else {
			i += "&" + encodeURIComponent(o) + "=" + encodeURIComponent(t[o]);
		}
	}
	return n + "?" + i;
}
var E = typeof __SENTRY_DEBUG__ > "u" ? !0 : __SENTRY_DEBUG__, we = [];
function Te(e) {
	return e.reduce(
		function (t, r) {
			return (
				t.every(function (n) {
					return r.name !== n.name;
				}) && t.push(r), t
			);
		},
		[],
	);
}
function Cn(e) {
	var t = (e.defaultIntegrations && S(e.defaultIntegrations)) || [],
		r = e.integrations,
		n = S(Te(t));
	Array.isArray(r) ? n =
		S(
			n.filter(function (a) {
				return r.every(function (s) {
					return s.name !== a.name;
				});
			}),
			Te(r),
		) : typeof r == "function" && (n = r(n), n = Array.isArray(n) ? n : [n]);
	var i = n.map(function (a) {
		return a.name;
	}),
		o = "Debug";
	return (
		i.indexOf(o) !== -1 && n.push.apply(n, S(n.splice(i.indexOf(o), 1))), n
	);
}
function Bn(e) {
	we.indexOf(e.name) === -1 && (
		e.setupOnce(Qt, m), we.push(e.name), E && p.log(
			"Integration installed: " + e.name,
		)
	);
}
function Fn(e) {
	var t = {};
	return (
		Cn(e)
			.forEach(function (r) {
				t[r.name] = r, Bn(r);
			}), yt(t, "initialized", !0), t
	);
}
var ke = "Not capturing exception because it's already been captured.",
	Hn = function () {
		function e(t, r) {
			this._integrations = {}, this._numProcessing = 0, this._backend = new t(r), this._options =
				r, r.dsn && (this._dsn = Xt(r.dsn));
		}
		return (
			e.prototype.captureException =
				function (t, r, n) {
					var i = this;
					if (ye(t)) {
						E && p.log(ke);
						return;
					}
					var o = r && r.event_id;
					return (
						this._process(
							this
								._getBackend()
								.eventFromException(t, r)
								.then(function (a) {
									return i._captureEvent(a, r, n);
								})
								.then(function (a) {
									o = a;
								}),
						), o
					);
				}, e.prototype.captureMessage =
				function (t, r, n, i) {
					var o = this,
						a = n && n.event_id,
						s = Wt(t) ? this._getBackend().eventFromMessage(String(t), r, n) : this._getBackend().eventFromException(
							t,
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
				}, e.prototype.captureEvent =
				function (t, r, n) {
					if (r && r.originalException && ye(r.originalException)) {
						E && p.log(ke);
						return;
					}
					var i = r && r.event_id;
					return (
						this._process(
							this
								._captureEvent(t, r, n)
								.then(function (o) {
									i = o;
								}),
						), i
					);
				}, e.prototype.captureSession =
				function (t) {
					if (!this._isEnabled()) {
						E && p.warn("SDK not enabled, will not capture session.");
						return;
					}
					typeof t.release != "string" ? E && p.warn(
						"Discarded session because of missing or non-string release",
					) : (this._sendSession(t), t.update({ init: !1 }));
				}, e.prototype.getDsn =
				function () {
					return this._dsn;
				}, e.prototype.getOptions =
				function () {
					return this._options;
				}, e.prototype.getTransport =
				function () {
					return this._getBackend().getTransport();
				}, e.prototype.flush =
				function (t) {
					var r = this;
					return this
						._isClientDoneProcessing(t)
						.then(function (n) {
							return r
								.getTransport()
								.close(t)
								.then(function (i) {
									return n && i;
								});
						});
				}, e.prototype.close =
				function (t) {
					var r = this;
					return this
						.flush(t)
						.then(function (n) {
							return (r.getOptions().enabled = !1, n);
						});
				}, e.prototype.setupIntegrations =
				function () {
					this._isEnabled() &&
						!this._integrations.initialized &&
						(this._integrations = Fn(this._options));
				}, e.prototype.getIntegration =
				function (t) {
					try {
						return this._integrations[t.id] || null;
					} catch {
						return (
							E && p.warn(
								"Cannot retrieve integration " +
									t.id +
									" from the current Client",
							), null
						);
					}
				}, e.prototype._updateSessionFromEvent =
				function (t, r) {
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
						} catch (g) {
							n = { error: g };
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
					var h = t.status === "ok", v = (h && t.errors === 0) || (h && o);
					v && (
						t.update(
							c(
								c({}, o && { status: "crashed" }),
								{ errors: t.errors || Number(a || o) },
							),
						), this.captureSession(t)
					);
				}, e.prototype._sendSession =
				function (t) {
					this._getBackend().sendSession(t);
				}, e.prototype._isClientDoneProcessing =
				function (t) {
					var r = this;
					return new B(function (n) {
						var i = 0,
							o = 1,
							a = setInterval(
								function () {
									r._numProcessing == 0 ? (clearInterval(a), n(!0)) : (
										i += o, t && i >= t && (clearInterval(a), n(!1))
									);
								},
								o,
							);
					});
				}, e.prototype._getBackend =
				function () {
					return this._backend;
				}, e.prototype._isEnabled =
				function () {
					return this.getOptions().enabled !== !1 && this._dsn !== void 0;
				}, e.prototype._prepareEvent =
				function (t, r, n) {
					var i = this,
						o = this.getOptions(),
						a = o.normalizeDepth,
						s = a === void 0 ? 3 : a,
						u = o.normalizeMaxBreadth,
						f = u === void 0 ? 1e3 : u,
						l = c(
							c({}, t),
							{
								event_id: t.event_id || (n && n.event_id ? n.event_id : Y()),
								timestamp: t.timestamp || Et(),
							},
						);
					this._applyClientOptions(l), this._applyIntegrationsMetadata(l);
					var d = r;
					n && n.captureContext && (d = pt.clone(d).update(n.captureContext));
					var h = U(l);
					return (
						d && (h = d.applyToEvent(l, n)), h.then(function (v) {
							return (
								v && (
									v.sdkProcessingMetadata =
										c(
											c({}, v.sdkProcessingMetadata),
											{ normalizeDepth: H(s) + " (" + typeof s + ")" },
										)
								), typeof s == "number" && s > 0 ? i._normalizeEvent(v, s, f) : v
							);
						})
					);
				}, e.prototype._normalizeEvent =
				function (t, r, n) {
					if (!t) {
						return null;
					}
					var i = c(
						c(
							c(
								c(
									c({}, t),
									t.breadcrumbs && {
										breadcrumbs: t.breadcrumbs.map(function (o) {
											return c(c({}, o), o.data && { data: H(o.data, r, n) });
										}),
									},
								),
								t.user && { user: H(t.user, r, n) },
							),
							t.contexts && { contexts: H(t.contexts, r, n) },
						),
						t.extra && { extra: H(t.extra, r, n) },
					);
					return (
						t.contexts &&
							t.contexts.trace &&
							(i.contexts.trace = t.contexts.trace), i.sdkProcessingMetadata =
							c(c({}, i.sdkProcessingMetadata), { baseClientNormalized: !0 }), i
					);
				}, e.prototype._applyClientOptions =
				function (t) {
					var r = this.getOptions(),
						n = r.environment,
						i = r.release,
						o = r.dist,
						a = r.maxValueLength,
						s = a === void 0 ? 250 : a;
					("environment" in t) || (
						t.environment = "environment" in r ? n : "production"
					), t.release === void 0 && i !== void 0 && (t.release = i), t.dist === void 0 &&
						o !== void 0 &&
						(t.dist = o), t.message && (t.message = Q(t.message, s));
					var u = t.exception && t.exception.values && t.exception.values[0];
					u && u.value && (u.value = Q(u.value, s));
					var f = t.request;
					f && f.url && (f.url = Q(f.url, s));
				}, e.prototype._applyIntegrationsMetadata =
				function (t) {
					var r = Object.keys(this._integrations);
					r.length > 0 && (
						t.sdk = t.sdk || {}, t.sdk.integrations =
							S(t.sdk.integrations || [], r)
					);
				}, e.prototype._sendEvent =
				function (t) {
					this._getBackend().sendEvent(t);
				}, e.prototype._captureEvent =
				function (t, r, n) {
					return this
						._processEvent(t, r, n)
						.then(
							function (i) {
								return i.event_id;
							},
							function (i) {
								E && p.error(i);
							},
						);
				}, e.prototype._processEvent =
				function (t, r, n) {
					var i = this,
						o = this.getOptions(),
						a = o.beforeSend,
						s = o.sampleRate,
						u = this.getTransport();
					function f(d, h) {
						u.recordLostEvent && u.recordLostEvent(d, h);
					}
					if (!this._isEnabled()) {
						return nt(new b("SDK not enabled, will not capture event."));
					}
					var l = t.type === "transaction";
					return !l && typeof s == "number" && Math.random() > s ? (
						f("sample_rate", "event"), nt(
							new b(
								"Discarding event because it's not included in the random sample (sampling rate = " +
									s +
									")",
							),
						)
					) : this
						._prepareEvent(t, n, r)
						.then(function (d) {
							if (d === null) {
								throw f("event_processor", t.type || "event"), new b(
									"An event processor returned null, will not send event.",
								);
							}
							var h = r && r.data && r.data.__sentry__ === !0;
							if (h || l || !a) {
								return d;
							}
							var v = a(d, r);
							return qn(v);
						})
						.then(function (d) {
							if (d === null) {
								throw f("before_send", t.type || "event"), new b(
									"`beforeSend` returned `null`, will not send event.",
								);
							}
							var h = n && n.getSession && n.getSession();
							return (
								!l && h && i._updateSessionFromEvent(h, d), i._sendEvent(d), d
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
				}, e.prototype._process =
				function (t) {
					var r = this;
					this._numProcessing += 1, t.then(
						function (n) {
							return (r._numProcessing -= 1, n);
						},
						function (n) {
							return (r._numProcessing -= 1, n);
						},
					);
				}, e
		);
	}();
function qn(e) {
	var t = "`beforeSend` method has to return `null` or a valid event.";
	if (Vt(e)) {
		return e.then(
			function (r) {
				if (!(W(r) || r === null)) {
					throw new b(t);
				}
				return r;
			},
			function (r) {
				throw new b("beforeSend rejected with " + r);
			},
		);
	}
	if (!(W(e) || e === null)) {
		throw new b(t);
	}
	return e;
}
function ne(e) {
	if (!(!e.metadata || !e.metadata.sdk)) {
		var t = e.metadata.sdk, r = t.name, n = t.version;
		return { name: r, version: n };
	}
}
function nr(e, t) {
	return (
		t && (
			e.sdk = e.sdk || {}, e.sdk.name = e.sdk.name || t.name, e.sdk.version =
				e.sdk.version || t.version, e.sdk.integrations =
				S(e.sdk.integrations || [], t.integrations || []), e.sdk.packages =
				S(e.sdk.packages || [], t.packages || [])
		), e
	);
}
function ir(e, t) {
	var r = ne(t),
		n = c(
			c({ sent_at: new Date().toISOString() }, r && { sdk: r }),
			!!t.tunnel && { dsn: ot(t.dsn) },
		),
		i = "aggregates" in e ? "sessions" : "session",
		o = [{ type: i }, e],
		a = St(n, [o]);
	return [a, i];
}
function $n(e, t) {
	var r = O(ir(e, t), 2), n = r[0], i = r[1];
	return { body: bt(n), type: i, url: Tt(t.dsn, t.tunnel) };
}
function zn(e, t) {
	var r = ne(t),
		n = e.type || "event",
		i = (e.sdkProcessingMetadata || {}).transactionSampling,
		o = i || {},
		a = o.method,
		s = o.rate;
	nr(e, t.metadata.sdk), e.tags = e.tags || {}, e.extra = e.extra || {}, (
		e.sdkProcessingMetadata && e.sdkProcessingMetadata.baseClientNormalized
	) || (
		e.tags.skippedNormalization = !0, e.extra.normalizeDepth =
			e.sdkProcessingMetadata ? e.sdkProcessingMetadata.normalizeDepth : "unset"
	), delete e.sdkProcessingMetadata;
	var u = c(
		c(
			{ event_id: e.event_id, sent_at: new Date().toISOString() },
			r && { sdk: r },
		),
		!!t.tunnel && { dsn: ot(t.dsn) },
	),
		f = [{ type: n, sample_rates: [{ id: a, rate: s }] }, e];
	return St(u, [f]);
}
function Yn(e, t) {
	var r = ne(t),
		n = e.type || "event",
		i = n === "transaction" || !!t.tunnel,
		o = (e.sdkProcessingMetadata || {}).transactionSampling,
		a = o || {},
		s = a.method,
		u = a.rate;
	nr(e, t.metadata.sdk), e.tags = e.tags || {}, e.extra = e.extra || {}, (
		e.sdkProcessingMetadata && e.sdkProcessingMetadata.baseClientNormalized
	) || (
		e.tags.skippedNormalization = !0, e.extra.normalizeDepth =
			e.sdkProcessingMetadata ? e.sdkProcessingMetadata.normalizeDepth : "unset"
	), delete e.sdkProcessingMetadata;
	var f;
	try {
		f = JSON.stringify(e);
	} catch (k) {
		e.tags.JSONStringifyError = !0, e.extra.JSONStringifyError = k;
		try {
			f = JSON.stringify(H(e));
		} catch (w) {
			var l = w;
			f =
				JSON.stringify({
					message: "JSON.stringify error after renormalization",
					extra: { message: l.message, stack: l.stack },
				});
		}
	}
	var d = { body: f, type: n, url: i ? Tt(t.dsn, t.tunnel) : rr(t.dsn) };
	if (i) {
		var h = c(
			c(
				{ event_id: e.event_id, sent_at: new Date().toISOString() },
				r && { sdk: r },
			),
			!!t.tunnel && { dsn: ot(t.dsn) },
		),
			v = [{ type: n, sample_rates: [{ id: s, rate: u }] }, d.body],
			g = St(h, [v]);
		d.body = bt(g);
	}
	return d;
}
var Gn = function () {
	function e() {}
	return (
		e.prototype.sendEvent =
			function (t) {
				return U({
					reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
					status: "skipped",
				});
			}, e.prototype.close =
			function (t) {
				return U(!0);
			}, e
	);
}(),
	Wn = function () {
		function e(t) {
			this._options = t, this._options.dsn || (
				E && p.warn("No DSN provided, backend will not do anything.")
			), this._transport = this._setupTransport();
		}
		return (
			e.prototype.eventFromException =
				function (t, r) {
					throw new b("Backend has to implement `eventFromException` method");
				}, e.prototype.eventFromMessage =
				function (t, r, n) {
					throw new b("Backend has to implement `eventFromMessage` method");
				}, e.prototype.sendEvent =
				function (t) {
					if (
						this._newTransport &&
						this._options.dsn &&
						this._options._experiments &&
						this._options._experiments.newTransport
					) {
						var r = ht(
							this._options.dsn,
							this._options._metadata,
							this._options.tunnel,
						),
							n = zn(t, r);
						this._newTransport
							.send(n)
							.then(
								null,
								function (i) {
									E && p.error("Error while sending event:", i);
								},
							);
					} else {
						this._transport
							.sendEvent(t)
							.then(
								null,
								function (i) {
									E && p.error("Error while sending event:", i);
								},
							);
					}
				}, e.prototype.sendSession =
				function (t) {
					if (!this._transport.sendSession) {
						E && p.warn(
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
						var r = ht(
							this._options.dsn,
							this._options._metadata,
							this._options.tunnel,
						),
							n = O(ir(t, r), 1),
							i = n[0];
						this._newTransport
							.send(i)
							.then(
								null,
								function (o) {
									E && p.error("Error while sending session:", o);
								},
							);
					} else {
						this._transport
							.sendSession(t)
							.then(
								null,
								function (o) {
									E && p.error("Error while sending session:", o);
								},
							);
					}
				}, e.prototype.getTransport =
				function () {
					return this._transport;
				}, e.prototype._setupTransport =
				function () {
					return new Gn();
				}, e
		);
	}();
function Vn(e, t) {
	t.debug === !0 && (
		E ? p.enable() : console.warn(
			"[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.",
		)
	);
	var r = m(), n = r.getScope();
	n && n.update(t.initialScope);
	var i = new e(t);
	r.bindClient(i);
}
var Xn = 30;
function or(e, t, r) {
	r === void 0 && (r = Ge(e.bufferSize || Xn));
	var n = {},
		i = function (a) {
			return r.drain(a);
		};
	function o(a) {
		var s = On(a),
			u = s === "event" ? "error" : s,
			f = { category: u, body: bt(a) };
		if (Ve(n, u)) {
			return nt({ status: "rate_limit", reason: Oe(n, u) });
		}
		var l = function () {
			return t(f)
				.then(function (d) {
					var h = d.body,
						v = d.headers,
						g = d.reason,
						k = d.statusCode,
						w = We(k);
					return (
						v && (n = Xe(n, v)), w === "success" ? U({ status: w, reason: g }) : nt({
							status: w,
							reason: g ||
								h ||
								(w === "rate_limit" ? Oe(n, u) : "Unknown transport error"),
						})
					);
				});
		};
		return r.add(l);
	}
	return { send: o, flush: i };
}
function Oe(e, t) {
	return "Too many " +
	t +
	" requests, backing off until: " +
	new Date(Zt(e, t)).toISOString();
}
var vt = "6.19.6",
	xe,
	ar = function () {
		function e() {
			this.name = e.id;
		}
		return (
			e.prototype.setupOnce =
				function () {
					xe = Function.prototype.toString, Function.prototype.toString =
						function () {
							for (var t = [], r = 0; r < arguments.length; r++) t[r] =
								arguments[r];
							var n = Jt(this) || this;
							return xe.apply(n, t);
						};
				}, e.id = "FunctionToString", e
		);
	}(),
	Kn = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
	sr = function () {
		function e(t) {
			t === void 0 && (t = {}), this._options = t, this.name = e.id;
		}
		return (
			e.prototype.setupOnce =
				function (t, r) {
					t(function (n) {
						var i = r();
						if (i) {
							var o = i.getIntegration(e);
							if (o) {
								var a = i.getClient(),
									s = a ? a.getOptions() : {},
									u = Jn(o._options, s);
								return Zn(n, u) ? null : n;
							}
						}
						return n;
					});
				}, e.id = "InboundFilters", e
		);
	}();
function Jn(e, t) {
	return (
		e === void 0 && (e = {}), t === void 0 && (t = {}), {
			allowUrls: S(
				e.whitelistUrls || [],
				e.allowUrls || [],
				t.whitelistUrls || [],
				t.allowUrls || [],
			),
			denyUrls: S(
				e.blacklistUrls || [],
				e.denyUrls || [],
				t.blacklistUrls || [],
				t.denyUrls || [],
			),
			ignoreErrors: S(e.ignoreErrors || [], t.ignoreErrors || [], Kn),
			ignoreInternal: e.ignoreInternal !== void 0 ? e.ignoreInternal : !0,
		}
	);
}
function Zn(e, t) {
	return t.ignoreInternal && ni(e)
		? (
			E && p.warn(
				`Event dropped due to being internal Sentry Error.
Event: ` + q(e),
			), !0
		)
		: Qn(e, t.ignoreErrors)
			? (
				E && p.warn(
					"Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + q(
						e,
					),
				), !0
			)
			: ti(e, t.denyUrls)
				? (
					E && p.warn(
						"Event dropped due to being matched by `denyUrls` option.\nEvent: " +
							q(e) +
							`.
Url: ` +
							gt(e),
					), !0
				)
				: ei(e, t.allowUrls)
					? !1
					: (
						E && p.warn(
							"Event dropped due to not being matched by `allowUrls` option.\nEvent: " +
								q(e) +
								`.
Url: ` +
								gt(e),
						), !0
					);
}
function Qn(e, t) {
	return !t || !t.length ? !1 : ri(e)
		.some(function (r) {
			return t.some(function (n) {
				return Kt(r, n);
			});
		});
}
function ti(e, t) {
	if (!t || !t.length) {
		return !1;
	}
	var r = gt(e);
	return r ? t.some(function (n) {
		return Kt(r, n);
	}) : !1;
}
function ei(e, t) {
	if (!t || !t.length) {
		return !0;
	}
	var r = gt(e);
	return r ? t.some(function (n) {
		return Kt(r, n);
	}) : !0;
}
function ri(e) {
	if (e.message) {
		return [e.message];
	}
	if (e.exception) {
		try {
			var t = (e.exception.values && e.exception.values[0]) || {},
				r = t.type,
				n = r === void 0 ? "" : r,
				i = t.value,
				o = i === void 0 ? "" : i;
			return ["" + o, n + ": " + o];
		} catch {
			return (E && p.error("Cannot extract message for event " + q(e)), []);
		}
	}
	return [];
}
function ni(e) {
	try {
		return e.exception.values[0].type === "SentryError";
	} catch {}
	return !1;
}
function Re(e) {
	e === void 0 && (e = []);
	for (var t = e.length - 1; t >= 0; t--) {
		var r = e[t];
		if (r && r.filename !== "<anonymous>" && r.filename !== "[native code]") {
			return r.filename || null;
		}
	}
	return null;
}
function gt(e) {
	try {
		if (e.stacktrace) {
			return Re(e.stacktrace.frames);
		}
		var t;
		try {
			t = e.exception.values[0].stacktrace.frames;
		} catch {}
		return t ? Re(t) : null;
	} catch {
		return (E && p.error("Cannot extract url for event " + q(e)), null);
	}
}
var ii = Object.freeze(
	Object.defineProperty(
		{ __proto__: null, FunctionToString: ar, InboundFilters: sr },
		Symbol.toStringTag,
		{ value: "Module" },
	),
),
	K = "?",
	oi = 10,
	ai = 20,
	si = 30,
	ui = 40,
	ci = 50;
function at(e, t, r, n) {
	var i = { filename: e, function: t, in_app: !0 };
	return (r !== void 0 && (i.lineno = r), n !== void 0 && (i.colno = n), i);
}
var fi = /^\s*at (?:(.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
	di = /\((\S*)(?::(\d+))(?::(\d+))\)/,
	li = function (e) {
		var t = fi.exec(e);
		if (t) {
			var r = t[2] && t[2].indexOf("eval") === 0;
			if (r) {
				var n = di.exec(t[2]);
				n && (t[2] = n[1], t[3] = n[2], t[4] = n[3]);
			}
			var i = O(ur(t[1] || K, t[2]), 2), o = i[0], a = i[1];
			return at(a, o, t[3] ? +t[3] : void 0, t[4] ? +t[4] : void 0);
		}
	},
	pi = [si, li],
	hi = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
	vi = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
	gi = function (e) {
		var t, r = hi.exec(e);
		if (r) {
			var n = r[3] && r[3].indexOf(" > eval") > -1;
			if (n) {
				var i = vi.exec(r[3]);
				i && (r[1] = r[1] || "eval", r[3] = i[1], r[4] = i[2], r[5] = "");
			}
			var o = r[3], a = r[1] || K;
			return (
				t = O(ur(a, o), 2), a = t[0], o = t[1], at(
					o,
					a,
					r[4] ? +r[4] : void 0,
					r[5] ? +r[5] : void 0,
				)
			);
		}
	},
	_i = [ci, gi],
	yi = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
	mi = function (e) {
		var t = yi.exec(e);
		return t ? at(t[2], t[1] || K, +t[3], t[4] ? +t[4] : void 0) : void 0;
	},
	Ei = [ui, mi],
	Si = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
	bi = function (e) {
		var t = Si.exec(e);
		return t ? at(t[2], t[3] || K, +t[1]) : void 0;
	},
	wi = [oi, bi],
	Ti = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
	ki = function (e) {
		var t = Ti.exec(e);
		return t ? at(t[5], t[3] || t[4] || K, +t[1], +t[2]) : void 0;
	},
	Oi = [ai, ki],
	ur = function (e, t) {
		var r = e.indexOf("safari-extension") !== -1,
			n = e.indexOf("safari-web-extension") !== -1;
		return r || n ? [
			e.indexOf("@") !== -1 ? e.split("@")[0] : K,
			r ? "safari-extension:" + t : "safari-web-extension:" + t,
		] : [e, t];
	};
function cr(e) {
	var t = ie(e), r = { type: e && e.name, value: Ni(e) };
	return (
		t.length && (r.stacktrace = { frames: t }), r.type === void 0 &&
			r.value === "" &&
			(r.value = "Unrecoverable error caught"), r
	);
}
function xi(e, t, r) {
	var n = {
		exception: {
			values: [
				{
					type: _t(e)
						? e.constructor.name
						: r
							? "UnhandledRejection"
							: "Error",
					value: "Non-Error " +
						(r ? "promise rejection" : "exception") +
						" captured with keys: " +
						Jr(e),
				},
			],
		},
		extra: { __serialized__: ze(e) },
	};
	if (t) {
		var i = ie(t);
		i.length && (n.stacktrace = { frames: i });
	}
	return n;
}
function Pt(e) {
	return { exception: { values: [cr(e)] } };
}
function ie(e) {
	var t = e.stacktrace || e.stack || "", r = Ii(e);
	try {
		return Qr(wi, Oi, pi, Ei, _i)(t, r);
	} catch {}
	return [];
}
var Ri = /Minified React error #\d+;/i;
function Ii(e) {
	if (e) {
		if (typeof e.framesToPop == "number") {
			return e.framesToPop;
		}
		if (Ri.test(e.message)) {
			return 1;
		}
	}
	return 0;
}
function Ni(e) {
	var t = e && e.message;
	return t
		? t.error && typeof t.error.message == "string"
			? t.error.message
			: t
		: "No error message";
}
function Pi(e, t, r) {
	var n = (t && t.syntheticException) || void 0, i = oe(e, n, r);
	return (
		rt(i), i.level = D.Error, t && t.event_id && (i.event_id = t.event_id), U(i)
	);
}
function Di(e, t, r, n) {
	t === void 0 && (t = D.Info);
	var i = (r && r.syntheticException) || void 0, o = qt(e, i, n);
	return (o.level = t, r && r.event_id && (o.event_id = r.event_id), U(o));
}
function oe(e, t, r, n) {
	var i;
	if (Ce(e) && e.error) {
		var o = e;
		return Pt(o.error);
	}
	if (de(e) || Lr(e)) {
		var a = e;
		if ("stack" in e) {
			i = Pt(e);
		} else {
			var s = a.name || (de(a) ? "DOMError" : "DOMException"),
				u = a.message ? s + ": " + a.message : s;
			i = qt(u, t, r), Bt(i, u);
		}
		return (
			("code" in a) && (
				i.tags = c(c({}, i.tags), { "DOMException.code": "" + a.code })
			), i
		);
	}
	if (Gt(e)) {
		return Pt(e);
	}
	if (W(e) || _t(e)) {
		var f = e;
		return (i = xi(f, t, n), rt(i, { synthetic: !0 }), i);
	}
	return (i = qt(e, t, r), Bt(i, "" + e, void 0), rt(i, { synthetic: !0 }), i);
}
function qt(e, t, r) {
	var n = { message: e };
	if (r && t) {
		var i = ie(t);
		i.length && (n.stacktrace = { frames: i });
	}
	return n;
}
var R = typeof __SENTRY_DEBUG__ > "u" ? !0 : __SENTRY_DEBUG__, N = _(), ft;
function ae() {
	if (ft) {
		return ft;
	}
	if (Ct(N.fetch)) {
		return ft = N.fetch.bind(N);
	}
	var e = N.document, t = N.fetch;
	if (e && typeof e.createElement == "function") {
		try {
			var r = e.createElement("iframe");
			r.hidden = !0, e.head.appendChild(r);
			var n = r.contentWindow;
			n && n.fetch && (t = n.fetch), e.head.removeChild(r);
		} catch (i) {
			R && p.warn(
				"Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
				i,
			);
		}
	}
	return ft = t.bind(N);
}
function Li(e, t) {
	var r = Object.prototype.toString.call(N && N.navigator) === "[object Navigator]",
		n = r && typeof N.navigator.sendBeacon == "function";
	if (n) {
		var i = N.navigator.sendBeacon.bind(N.navigator);
		return i(e, t);
	}
	if (mt()) {
		var o = ae();
		return Ir(
			o(e, { body: t, method: "POST", credentials: "omit", keepalive: !0 }),
		);
	}
}
function Dt(e) {
	var t = e;
	return t === "event" ? "error" : t;
}
var Lt = _(),
	se = function () {
		function e(t) {
			var r = this;
			this.options = t, this._buffer = Ge(30), this._rateLimits = {}, this._outcomes =
				{}, this._api = ht(t.dsn, t._metadata, t.tunnel), this.url =
				rr(this._api.dsn), this.options.sendClientReports &&
				Lt.document &&
				Lt.document.addEventListener(
					"visibilitychange",
					function () {
						Lt.document.visibilityState === "hidden" && r._flushOutcomes();
					},
				);
		}
		return (
			e.prototype.sendEvent =
				function (t) {
					return this._sendRequest(Yn(t, this._api), t);
				}, e.prototype.sendSession =
				function (t) {
					return this._sendRequest($n(t, this._api), t);
				}, e.prototype.close =
				function (t) {
					return this._buffer.drain(t);
				}, e.prototype.recordLostEvent =
				function (t, r) {
					var n;
					if (!!this.options.sendClientReports) {
						var i = Dt(r) + ":" + t;
						R && p.log("Adding outcome: " + i), this._outcomes[i] =
							(n = this._outcomes[i], (n ?? 0) + 1);
					}
				}, e.prototype._flushOutcomes =
				function () {
					if (!!this.options.sendClientReports) {
						var t = this._outcomes;
						if (this._outcomes = {}, !Object.keys(t).length) {
							R && p.log("No outcomes to flush");
							return;
						}
						R && p.log(
							`Flushing outcomes:
` + JSON.stringify(t, null, 2),
						);
						var r = Tt(this._api.dsn, this._api.tunnel),
							n = Object
								.keys(t)
								.map(function (o) {
									var a = O(o.split(":"), 2), s = a[0], u = a[1];
									return { reason: u, category: s, quantity: t[o] };
								}),
							i = xn(n, this._api.tunnel && ot(this._api.dsn));
						try {
							Li(r, bt(i));
						} catch (o) {
							R && p.error(o);
						}
					}
				}, e.prototype._handleResponse =
				function (t) {
					var r = t.requestType,
						n = t.response,
						i = t.headers,
						o = t.resolve,
						a = t.reject,
						s = We(n.status);
					if (
						this._rateLimits = Xe(this._rateLimits, i), this._isRateLimited(r) &&
							R &&
							p.warn(
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
				}, e.prototype._disabledUntil =
				function (t) {
					var r = Dt(t);
					return new Date(Zt(this._rateLimits, r));
				}, e.prototype._isRateLimited =
				function (t) {
					var r = Dt(t);
					return Ve(this._rateLimits, r);
				}, e
		);
	}(),
	fr = function (e) {
		it(t, e);
		function t(r, n) {
			n === void 0 && (n = ae());
			var i = e.call(this, r) || this;
			return (i._fetch = n, i);
		}
		return (
			t.prototype._sendRequest =
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
						referrerPolicy: rn() ? "origin" : "",
					};
					return (
						this.options.fetchParameters !== void 0 && Object.assign(
							o,
							this.options.fetchParameters,
						), this.options.headers !== void 0 && (
							o.headers = this.options.headers
						), this._buffer
							.add(function () {
								return new B(
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
				}, t
		);
	}(se),
	dr = function (e) {
		it(t, e);
		function t() {
			return (e !== null && e.apply(this, arguments)) || this;
		}
		return (
			t.prototype._sendRequest =
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
							return new B(
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
				}, t
		);
	}(se);
function lr(e, t) {
	t === void 0 && (t = ae());
	function r(n) {
		var i = c(
			{ body: n.body, method: "POST", referrerPolicy: "origin" },
			e.requestOptions,
		);
		return t(e.url, i)
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
	return or({ bufferSize: e.bufferSize }, r);
}
var Ui = 4;
function pr(e) {
	function t(r) {
		return new B(
			function (n, i) {
				var o = new XMLHttpRequest();
				o.onreadystatechange =
					function () {
						if (o.readyState === Ui) {
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
					}, o.open("POST", e.url);
				for (var a in e.headers) Object.prototype.hasOwnProperty.call(
					e.headers,
					a,
				) && o.setRequestHeader(a, e.headers[a]);
				o.send(r.body);
			},
		);
	}
	return or({ bufferSize: e.bufferSize }, t);
}
var Po = Object.freeze(
	Object.defineProperty(
		{
			__proto__: null,
			BaseTransport: se,
			FetchTransport: fr,
			XHRTransport: dr,
			makeNewFetchTransport: lr,
			makeNewXHRTransport: pr,
		},
		Symbol.toStringTag,
		{ value: "Module" },
	),
),
	ji = function (e) {
		it(t, e);
		function t() {
			return (e !== null && e.apply(this, arguments)) || this;
		}
		return (
			t.prototype.eventFromException =
				function (r, n) {
					return Pi(r, n, this._options.attachStacktrace);
				}, t.prototype.eventFromMessage =
				function (r, n, i) {
					return (
						n === void 0 && (n = D.Info), Di(
							r,
							n,
							i,
							this._options.attachStacktrace,
						)
					);
				}, t.prototype._setupTransport =
				function () {
					if (!this._options.dsn) {
						return e.prototype._setupTransport.call(this);
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
						n = ht(r.dsn, r._metadata, r.tunnel),
						i = Tt(n.dsn, n.tunnel);
					if (this._options.transport) {
						return new this._options.transport(r);
					}
					if (mt()) {
						var o = c({}, r.fetchParameters);
						return (
							this._newTransport = lr({ requestOptions: o, url: i }), new fr(r)
						);
					}
					return (
						this._newTransport = pr({ url: i, headers: r.headers }), new dr(r)
					);
				}, t
		);
	}(Wn),
	dt = _(),
	$t = 0;
function hr() {
	return $t > 0;
}
function Ai() {
	$t += 1, setTimeout(function () {
		$t -= 1;
	});
}
function $(e, t, r) {
	if (t === void 0 && (t = {}), typeof e != "function") {
		return e;
	}
	try {
		var n = e.__sentry_wrapped__;
		if (n) {
			return n;
		}
		if (Jt(e)) {
			return e;
		}
	} catch {
		return e;
	}
	var i = function () {
		var s = Array.prototype.slice.call(arguments);
		try {
			r && typeof r == "function" && r.apply(this, arguments);
			var u = s.map(function (f) {
				return $(f, t);
			});
			return e.apply(this, u);
		} catch (f) {
			throw Ai(), Ln(function (l) {
				l.addEventProcessor(function (d) {
					return (
						t.mechanism && (Bt(d, void 0, void 0), rt(d, t.mechanism)), d.extra =
							c(c({}, d.extra), { arguments: s }), d
					);
				}), Ze(f);
			}), f;
		}
	};
	try {
		for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (i[o] = e[o]);
	} catch {}
	He(i, e), yt(e, "__sentry_wrapped__", i);
	try {
		var a = Object.getOwnPropertyDescriptor(i, "name");
		a.configurable && Object.defineProperty(
			i,
			"name",
			{
				get: function () {
					return e.name;
				},
			},
		);
	} catch {}
	return i;
}
function Mi(e) {
	if (e === void 0 && (e = {}), !!dt.document) {
		if (!e.eventId) {
			R && p.error("Missing eventId option in showReportDialog call");
			return;
		}
		if (!e.dsn) {
			R && p.error("Missing dsn option in showReportDialog call");
			return;
		}
		var t = dt.document.createElement("script");
		t.async = !0, t.src = Mn(e.dsn, e), e.onLoad && (t.onload = e.onLoad);
		var r = dt.document.head || dt.document.body;
		r && r.appendChild(t);
	}
}
var kt = function () {
	function e(t) {
		this.name = e.id, this._installFunc =
			{ onerror: Ci, onunhandledrejection: Bi }, this._options =
			c({ onerror: !0, onunhandledrejection: !0 }, t);
	}
	return (
		e.prototype.setupOnce =
			function () {
				Error.stackTraceLimit = 50;
				var t = this._options;
				for (var r in t) {
					var n = this._installFunc[r];
					n && t[r] && (qi(r), n(), this._installFunc[r] = void 0);
				}
			}, e.id = "GlobalHandlers", e
	);
}();
function Ci() {
	j(
		"error",
		function (e) {
			var t = O(_r(), 2), r = t[0], n = t[1];
			if (!!r.getIntegration(kt)) {
				var i = e.msg, o = e.url, a = e.line, s = e.column, u = e.error;
				if (!(hr() || (u && u.__sentry_own_request__))) {
					var f = u === void 0 && G(i) ? Hi(i, o, a, s) : vr(
						oe(u || i, void 0, n, !1),
						o,
						a,
						s,
					);
					f.level = D.Error, gr(r, u, f, "onerror");
				}
			}
		},
	);
}
function Bi() {
	j(
		"unhandledrejection",
		function (e) {
			var t = O(_r(), 2), r = t[0], n = t[1];
			if (!!r.getIntegration(kt)) {
				var i = e;
				try {
					"reason" in e ? i = e.reason : ("detail" in e) &&
						("reason" in e.detail) &&
						(i = e.detail.reason);
				} catch {}
				if (hr() || (i && i.__sentry_own_request__)) {
					return !0;
				}
				var o = Wt(i) ? Fi(i) : oe(i, void 0, n, !0);
				o.level = D.Error, gr(r, i, o, "onunhandledrejection");
			}
		},
	);
}
function Fi(e) {
	return {
		exception: {
			values: [
				{
					type: "UnhandledRejection",
					value: "Non-Error promise rejection captured with value: " + String(e),
				},
			],
		},
	};
}
function Hi(e, t, r, n) {
	var i = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
		o = Ce(e) ? e.message : e,
		a = "Error",
		s = o.match(i);
	s && (a = s[1], o = s[2]);
	var u = { exception: { values: [{ type: a, value: o }] } };
	return vr(u, t, r, n);
}
function vr(e, t, r, n) {
	var i = e.exception = e.exception || {},
		o = i.values = i.values || [],
		a = o[0] = o[0] || {},
		s = a.stacktrace = a.stacktrace || {},
		u = s.frames = s.frames || [],
		f = isNaN(parseInt(n, 10)) ? void 0 : n,
		l = isNaN(parseInt(r, 10)) ? void 0 : r,
		d = G(t) && t.length > 0 ? t : Br();
	return (
		u.length === 0 && u.push({
			colno: f,
			filename: d,
			function: "?",
			in_app: !0,
			lineno: l,
		}), e
	);
}
function qi(e) {
	R && p.log("Global Handler attached: " + e);
}
function gr(e, t, r, n) {
	rt(r, { handled: !1, type: n }), e.captureEvent(r, { originalException: t });
}
function _r() {
	var e = m(), t = e.getClient(), r = t && t.getOptions().attachStacktrace;
	return [e, r];
}
var $i = [
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
	yr = function () {
		function e(t) {
			this.name = e.id, this._options =
				c(
					{
						XMLHttpRequest: !0,
						eventTarget: !0,
						requestAnimationFrame: !0,
						setInterval: !0,
						setTimeout: !0,
					},
					t,
				);
		}
		return (
			e.prototype.setupOnce =
				function () {
					var t = _();
					this._options.setTimeout && T(t, "setTimeout", Ie), this._options.setInterval && T(
						t,
						"setInterval",
						Ie,
					), this._options.requestAnimationFrame && T(
						t,
						"requestAnimationFrame",
						zi,
					), this._options.XMLHttpRequest &&
						("XMLHttpRequest" in t) &&
						T(XMLHttpRequest.prototype, "send", Yi);
					var r = this._options.eventTarget;
					if (r) {
						var n = Array.isArray(r) ? r : $i;
						n.forEach(Gi);
					}
				}, e.id = "TryCatch", e
		);
	}();
function Ie(e) {
	return function () {
		for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
		var n = t[0];
		return (
			t[0] =
				$(
					n,
					{
						mechanism: {
							data: { function: M(e) },
							handled: !0,
							type: "instrument",
						},
					},
				), e.apply(this, t)
		);
	};
}
function zi(e) {
	return function (t) {
		return e.apply(
			this,
			[
				$(
					t,
					{
						mechanism: {
							data: { function: "requestAnimationFrame", handler: M(e) },
							handled: !0,
							type: "instrument",
						},
					},
				),
			],
		);
	};
}
function Yi(e) {
	return function () {
		for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
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
							return (u && (s.mechanism.data.handler = M(u)), $(a, s));
						},
					);
			}), e.apply(this, t)
		);
	};
}
function Gi(e) {
	var t = _(), r = t[e] && t[e].prototype;
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
									$(
										o.handleEvent.bind(o),
										{
											mechanism: {
												data: {
													function: "handleEvent",
													handler: M(o),
													target: e,
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
								$(
									o,
									{
										mechanism: {
											data: {
												function: "addEventListener",
												handler: M(o),
												target: e,
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
	function e(t) {
		this.name = e.id, this._options =
			c(
				{ console: !0, dom: !0, fetch: !0, history: !0, sentry: !0, xhr: !0 },
				t,
			);
	}
	return (
		e.prototype.addSentryBreadcrumb =
			function (t) {
				!this._options.sentry || m().addBreadcrumb(
					{
						category: "sentry." + (
							t.type === "transaction" ? "transaction" : "event"
						),
						event_id: t.event_id,
						level: t.level,
						message: q(t),
					},
					{ event: t },
				);
			}, e.prototype.setupOnce =
			function () {
				this._options.console && j("console", Vi), this._options.dom && j(
					"dom",
					Wi(this._options.dom),
				), this._options.xhr && j("xhr", Xi), this._options.fetch && j(
					"fetch",
					Ki,
				), this._options.history && j("history", Ji);
			}, e.id = "Breadcrumbs", e
	);
}();
function Wi(e) {
	function t(r) {
		var n, i = typeof e == "object" ? e.serializeAttribute : void 0;
		typeof i == "string" && (i = [i]);
		try {
			n = r.event.target ? At(r.event.target, i) : At(r.event, i);
		} catch {
			n = "<unknown>";
		}
		n.length !== 0 && m().addBreadcrumb(
			{ category: "ui." + r.name, message: n },
			{ event: r.event, name: r.name, global: r.global },
		);
	}
	return t;
}
function Vi(e) {
	var t = {
		category: "console",
		data: { arguments: e.args, logger: "console" },
		level: wn(e.level),
		message: pe(e.args, " "),
	};
	if (e.level === "assert") {
		if (e.args[0] === !1) {
			t.message =
				"Assertion failed: " + (pe(e.args.slice(1), " ") || "console.assert"), t.data.arguments =
				e.args.slice(1);
		} else {
			return;
		}
	}
	m().addBreadcrumb(t, { input: e.args, level: e.level });
}
function Xi(e) {
	if (e.endTimestamp) {
		if (e.xhr.__sentry_own_request__) {
			return;
		}
		var t = e.xhr.__sentry_xhr__ || {},
			r = t.method,
			n = t.url,
			i = t.status_code,
			o = t.body;
		m().addBreadcrumb(
			{
				category: "xhr",
				data: { method: r, url: n, status_code: i },
				type: "http",
			},
			{ xhr: e.xhr, input: o },
		);
		return;
	}
}
function Ki(e) {
	!e.endTimestamp ||
		(e.fetchData.url.match(/sentry_key/) && e.fetchData.method === "POST") ||
		(
			e.error ? m().addBreadcrumb(
				{ category: "fetch", data: e.fetchData, level: D.Error, type: "http" },
				{ data: e.error, input: e.args },
			) : m().addBreadcrumb(
				{
					category: "fetch",
					data: c(c({}, e.fetchData), { status_code: e.response.status }),
					type: "http",
				},
				{ input: e.args, response: e.response },
			)
		);
}
function Ji(e) {
	var t = _(),
		r = e.from,
		n = e.to,
		i = It(t.location.href),
		o = It(r),
		a = It(n);
	o.path || (o = i), i.protocol === a.protocol &&
		i.host === a.host &&
		(n = a.relative), i.protocol === o.protocol &&
		i.host === o.host &&
		(r = o.relative), m().addBreadcrumb({
		category: "navigation",
		data: { from: r, to: n },
	});
}
var Zi = "cause",
	Qi = 5,
	mr = function () {
		function e(t) {
			t === void 0 && (t = {}), this.name = e.id, this._key = t.key || Zi, this._limit =
				t.limit || Qi;
		}
		return (
			e.prototype.setupOnce =
				function () {
					Qt(
						function (t, r) {
							var n = m().getIntegration(e);
							return n ? to(n._key, n._limit, t, r) : t;
						},
					);
				}, e.id = "LinkedErrors", e
		);
	}();
function to(e, t, r, n) {
	if (
		!r.exception ||
		!r.exception.values ||
		!n ||
		!C(n.originalException, Error)
	) {
		return r;
	}
	var i = Er(t, n.originalException, e);
	return (r.exception.values = S(i, r.exception.values), r);
}
function Er(e, t, r, n) {
	if (n === void 0 && (n = []), !C(t[r], Error) || (n.length + 1) >= e) {
		return n;
	}
	var i = cr(t[r]);
	return Er(e, t[r], r, S([i], n));
}
var F = _(),
	Sr = function () {
		function e() {
			this.name = e.id;
		}
		return (
			e.prototype.setupOnce =
				function () {
					Qt(function (t) {
						if (m().getIntegration(e)) {
							if (!F.navigator && !F.location && !F.document) {
								return t;
							}
							var r = (t.request && t.request.url) || (
								F.location && F.location.href
							),
								n = (F.document || {}).referrer,
								i = (F.navigator || {}).userAgent,
								o = c(
									c(c({}, t.request && t.request.headers), n && { Referer: n }),
									i && { "User-Agent": i },
								),
								a = c(c({}, r && { url: r }), { headers: o });
							return c(c({}, t), { request: a });
						}
						return t;
					});
				}, e.id = "UserAgent", e
		);
	}(),
	br = function () {
		function e() {
			this.name = e.id;
		}
		return (
			e.prototype.setupOnce =
				function (t, r) {
					t(function (n) {
						var i = r().getIntegration(e);
						if (i) {
							try {
								if (eo(n, i._previousEvent)) {
									return (
										R && p.warn(
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
				}, e.id = "Dedupe", e
		);
	}();
function eo(e, t) {
	return t ? !!(ro(e, t) || no(e, t)) : !1;
}
function ro(e, t) {
	var r = e.message, n = t.message;
	return !(
		(!r && !n) || (r && !n) || (!r && n) || r !== n || !Tr(e, t) || !wr(e, t)
	);
}
function no(e, t) {
	var r = Ne(t), n = Ne(e);
	return !(
		!r ||
			!n ||
			r.type !== n.type ||
			r.value !== n.value ||
			!Tr(e, t) ||
			!wr(e, t)
	);
}
function wr(e, t) {
	var r = Pe(e), n = Pe(t);
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
function Tr(e, t) {
	var r = e.fingerprint, n = t.fingerprint;
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
function Ne(e) {
	return e.exception && e.exception.values && e.exception.values[0];
}
function Pe(e) {
	var t = e.exception;
	if (t) {
		try {
			return t.values[0].stacktrace.frames;
		} catch {
			return;
		}
	} else if (e.stacktrace) {
		return e.stacktrace.frames;
	}
}
var io = Object.freeze(
	Object.defineProperty(
		{
			__proto__: null,
			GlobalHandlers: kt,
			TryCatch: yr,
			Breadcrumbs: ue,
			LinkedErrors: mr,
			UserAgent: Sr,
			Dedupe: br,
		},
		Symbol.toStringTag,
		{ value: "Module" },
	),
),
	oo = function (e) {
		it(t, e);
		function t(r) {
			r === void 0 && (r = {});
			var n = this;
			return (
				r._metadata = r._metadata || {}, r._metadata.sdk =
					r._metadata.sdk || {
						name: "sentry.javascript.browser",
						packages: [{ name: "npm:@sentry/browser", version: vt }],
						version: vt,
					}, n = e.call(this, ji, r) || this, n
			);
		}
		return (
			t.prototype.showReportDialog =
				function (r) {
					r === void 0 && (r = {});
					var n = _().document;
					if (!!n) {
						if (!this._isEnabled()) {
							R && p.error(
								"Trying to call showReportDialog with Sentry Client disabled",
							);
							return;
						}
						Mi(c(c({}, r), { dsn: r.dsn || this.getDsn() }));
					}
				}, t.prototype._prepareEvent =
				function (r, n, i) {
					return (
						r.platform = r.platform || "javascript", e.prototype._prepareEvent.call(
							this,
							r,
							n,
							i,
						)
					);
				}, t.prototype._sendEvent =
				function (r) {
					var n = this.getIntegration(ue);
					n && n.addSentryBreadcrumb(r), e.prototype._sendEvent.call(this, r);
				}, t
		);
	}(Hn),
	ao = [
		new sr(),
		new ar(),
		new yr(),
		new ue(),
		new kt(),
		new mr(),
		new br(),
		new Sr(),
	];
function so(e) {
	if (
		e === void 0 && (e = {}), e.defaultIntegrations === void 0 && (
			e.defaultIntegrations = ao
		), e.release === void 0
	) {
		var t = _();
		t.SENTRY_RELEASE && t.SENTRY_RELEASE.id && (e.release = t.SENTRY_RELEASE.id);
	}
	e.autoSessionTracking === void 0 && (e.autoSessionTracking = !0), e.sendClientReports === void 0 && (
		e.sendClientReports = !0
	), Vn(oo, e), e.autoSessionTracking && uo();
}
function Do(e) {
	e === void 0 && (e = {});
	var t = m(), r = t.getScope();
	r && (e.user = c(c({}, r.getUser()), e.user)), e.eventId || (
		e.eventId = t.lastEventId()
	);
	var n = t.getClient();
	n && n.showReportDialog(e);
}
function Lo() {
	return m().lastEventId();
}
function Uo() {}
function jo(e) {
	e();
}
function Ao(e) {
	var t = m().getClient();
	return t ? t.flush(e) : (
		R && p.warn("Cannot flush events. No client defined."), U(!1)
	);
}
function Mo(e) {
	var t = m().getClient();
	return t ? t.close(e) : (
		R && p.warn("Cannot flush events and disable SDK. No client defined."), U(
			!1,
		)
	);
}
function Co(e) {
	return $(e)();
}
function De(e) {
	e.startSession({ ignoreDuration: !0 }), e.captureSession();
}
function uo() {
	var e = _(), t = e.document;
	if (typeof t > "u") {
		R && p.warn(
			"Session tracking in non-browser environment with @sentry/browser is not supported.",
		);
		return;
	}
	var r = m();
	!r.captureSession || (
		De(r), j(
			"history",
			function (n) {
				var i = n.from, o = n.to;
				i === void 0 || i === o || De(m());
			},
		)
	);
}
var Bo = "sentry.javascript.browser", kr = {}, Ut = _();
Ut.Sentry && Ut.Sentry.Integrations && (kr = Ut.Sentry.Integrations);
var Fo = c(c(c({}, kr), ii), io),
	Or = ["activate", "mount", "update"],
	co = /(?:^|[-_])(\w)/g,
	fo = function (e) {
		return e
			.replace(
				co,
				function (t) {
					return t.toUpperCase();
				},
			)
			.replace(/[-_]/g, "");
	},
	lo = "<Root>",
	Le = "<Anonymous>",
	po = function (e, t) {
		for (var r = ""; t; ) (t % 2) === 1 && (r += e), t > 1 && (e += e), t >>= 1;
		return r;
	},
	et = function (e, t) {
		if (!e) {
			return Le;
		}
		if (e.$root === e) {
			return lo;
		}
		var r = e.$options, n = r.name || r._componentTag, i = r.__file;
		if (!n && i) {
			var o = i.match(/([^/\\]+)\.vue$/);
			o && (n = o[1]);
		}
		return (n ? "<" + fo(n) + ">" : Le) + (i && t !== !1 ? " at " + i : "");
	},
	ho = function (e) {
		var t, r, n;
		if (
			(
				((t = e) === null || t === void 0 ? void 0 : t._isVue) || (
					(r = e) === null || r === void 0 ? void 0 : r.__isVue
				)
			) && ((n = e) === null || n === void 0 ? void 0 : n.$parent)
		) {
			for (var i = [], o = 0; e; ) {
				if (i.length > 0) {
					var a = i[i.length - 1];
					if (a.constructor === e.constructor) {
						o += 1, e = e.$parent;
						continue;
					} else {
						o > 0 && (i[i.length - 1] = [a, o], o = 0);
					}
				}
				i.push(e), e = e.$parent;
			}
			var s = i
				.map(
					function (u, f) {
						return "" + (
							(f === 0 ? "---> " : po(" ", 5 + (f * 2))) + (
								Array.isArray(u) ? et(u[0]) +
									"... (" +
									u[1] +
									" recursive calls)" : et(u)
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
		et(e) +
		")";
	},
	vo = function (e, t) {
		var r = e.config, n = r.errorHandler, i = r.warnHandler, o = r.silent;
		e.config.errorHandler =
			function (a, s, u) {
				var f = et(s, !1),
					l = s ? ho(s) : "",
					d = { componentName: f, lifecycleHook: u, trace: l };
				if (
					s && t.attachProps && (d.propsData = s.$options.propsData || s.$props), setTimeout(function () {
						m()
							.withScope(function (g) {
								g.setContext("vue", d), m().captureException(a);
							});
					}), typeof n == "function" && n.call(e, a, s, u), t.logErrors
				) {
					var h = typeof console < "u",
						v =
							"Error in " + u + ': "' + (a && a.toString()) + '"';
					i ? i.call(null, v, s, l) : h &&
						!o &&
						console.error("[Vue warn]: " + v + l);
				}
			};
	},
	xr = typeof __SENTRY_DEBUG__ > "u" ? !0 : __SENTRY_DEBUG__,
	Ue = "ui.vue",
	go = {
		activate: ["activated", "deactivated"],
		create: ["beforeCreate", "created"],
		destroy: ["beforeDestroy", "destroyed"],
		mount: ["beforeMount", "mounted"],
		update: ["beforeUpdate", "updated"],
	};
function je() {
	var e;
	return (e = m().getScope()) === null || e === void 0 ? void 0 : e.getTransaction();
}
function _o(e, t, r) {
	e.$_sentryRootSpanTimer && clearTimeout(e.$_sentryRootSpanTimer), e.$_sentryRootSpanTimer =
		setTimeout(
			function () {
				var n;
				!((n = e.$root) === null || n === void 0) &&
					n.$_sentryRootSpan &&
					(
						e.$root.$_sentryRootSpan.finish(t), e.$root.$_sentryRootSpan =
							void 0
					);
			},
			r,
		);
}
var yo = function (e) {
	var t,
		r,
		n = (e.hooks || [])
			.concat(Or)
			.filter(
				function (f, l, d) {
					return d.indexOf(f) === l;
				},
			),
		i = {},
		o = function (f) {
			var l, d, h = go[f];
			if (!h) {
				return (xr && p.warn("Unknown hook: " + f), "continue");
			}
			var v = function (x) {
				i[x] =
					function () {
						var J, z = this.$root === this;
						if (z) {
							var Z = je();
							Z && (
								this.$_sentryRootSpan =
									this.$_sentryRootSpan || Z.startChild({
										description: "Application Render",
										op: Ue,
									})
							);
						}
						var ce = et(this, !1),
							Rr = Array.isArray(e.trackComponents) ? e.trackComponents.includes(
								ce,
							) : e.trackComponents;
						if (!(!z && !Rr)) {
							if (this.$_sentrySpans = this.$_sentrySpans || {}, x == h[0]) {
								var Z = (
									(J = this.$root) === null || J === void 0 ? void 0 : J.$_sentryRootSpan
								) || je();
								Z && (
									this.$_sentrySpans[f] =
										Z.startChild({
											description: "Vue <" + ce + ">",
											op: Ue + "." + f,
										})
								);
							} else {
								var fe = this.$_sentrySpans[f];
								if (!fe) {
									return;
								}
								fe.finish(), _o(this, Ht(), e.timeout);
							}
						}
					};
			};
			try {
				for (var g = (l = void 0, L(h)), k = g.next(); !k.done; k = g.next()) {
					var w = k.value;
					v(w);
				}
			} catch (x) {
				l = { error: x };
			} finally {
				try {
					k && !k.done && (d = g.return) && d.call(g);
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
		t = { error: f };
	} finally {
		try {
			s && !s.done && (r = a.return) && r.call(a);
		} finally {
			if (t) {
				throw t.error;
			}
		}
	}
	return i;
},
	mo = {
		Vue: _().Vue,
		attachProps: !0,
		logErrors: !1,
		hooks: Or,
		timeout: 2e3,
		trackComponents: !1,
		_metadata: {
			sdk: {
				name: "sentry.javascript.vue",
				packages: [{ name: "npm:@sentry/vue", version: vt }],
				version: vt,
			},
		},
	};
function Ho(e) {
	e === void 0 && (e = {});
	var t = c(c({}, mo), e);
	if (so(t), !t.Vue && !t.app) {
		xr && p.warn(
			"Misconfigured SDK. Vue specific errors will not be captured.\nUpdate your `Sentry.init` call with an appropriate config option:\n`app` (Application Instance - Vue 3) or `Vue` (Vue Constructor - Vue 2).",
		);
		return;
	}
	if (t.app) {
		var r = Array.isArray(t.app) ? t.app : [t.app];
		r.forEach(function (n) {
			return Ae(n, t);
		});
	} else {
		t.Vue && Ae(t.Vue, t);
	}
}
var Ae = function (e, t) {
	vo(e, t), (("tracesSampleRate" in t) || ("tracesSampler" in t)) && e.mixin(
		yo(c(c({}, t), t.tracingOptions)),
	);
};
function qo(e) {
	return function (t, r, n) {
		r === void 0 && (r = !0), n === void 0 && (n = !0), e.onError(function (i) {
			return Ze(i);
		}), e.beforeEach(
			function (i, o, a) {
				var s = o.name == null && o.matched.length === 0,
					u = { "routing.instrumentation": "vue-router" },
					f = { params: i.params, query: i.query };
				r &&
					s &&
					t({
						name: (i.name && i.name.toString()) || i.path,
						op: "pageload",
						tags: u,
						data: f,
					}), n &&
					!s &&
					t({
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
	oo as BrowserClient,
	ee as Hub,
	Fo as Integrations,
	Bo as SDK_NAME,
	vt as SDK_VERSION,
	pt as Scope,
	Nn as Session,
	D as Severity,
	Po as Transports,
	wo as addBreadcrumb,
	Qt as addGlobalEventProcessor,
	vo as attachErrorHandler,
	So as captureEvent,
	Ze as captureException,
	Eo as captureMessage,
	Mo as close,
	bo as configureScope,
	yo as createTracingMixins,
	ao as defaultIntegrations,
	Pi as eventFromException,
	Di as eventFromMessage,
	Ao as flush,
	Uo as forceLoad,
	m as getCurrentHub,
	A as getHubFromCarrier,
	Ho as init,
	Mi as injectReportDialog,
	Lo as lastEventId,
	be as makeMain,
	jo as onLoad,
	To as setContext,
	xo as setExtra,
	ko as setExtras,
	Ro as setTag,
	Oo as setTags,
	Io as setUser,
	Do as showReportDialog,
	No as startTransaction,
	qo as vueRouterInstrumentation,
	Ln as withScope,
	Co as wrap,
};
