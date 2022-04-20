"use strict";
var Qr = Object.defineProperty;
var Rt = Object.getOwnPropertySymbols;
var en = Object.prototype.hasOwnProperty,
	tn = Object.prototype.propertyIsEnumerable;
var zt = (t, e, r) =>
	e in t ? Qr(
		t,
		e,
		{ enumerable: !0, configurable: !0, writable: !0, value: r },
	) : t[e] = r,
	Ct = (t, e) => {
		for (var r in e || (e = {})) en.call(e, r) && zt(t, r, e[r]);
		if (Rt) {
			for (var r of Rt(e)) tn.call(e, r) && zt(t, r, e[r]);
		}
		return t;
	};
var b = require("electron"),
	rn = require("os"),
	te = require("fs"),
	Z = require("path"),
	nn = require("crypto"),
	tr = require("zlib"),
	sn = require("util"),
	se = require("./-.js"),
	be = require("fs/promises"),
	je = require("./w.js"),
	rr = require("./x.js"),
	on = require("events");
function nr(t) {
	return t && typeof t == "object" && ("default" in t) ? t : { default: t };
}
var $e = nr(rn),
	an = nr(on),
	De = typeof globalThis != "undefined"
		? globalThis
		: typeof window != "undefined"
			? window
			: typeof global != "undefined"
				? global
				: typeof self != "undefined"
					? self
					: {};
function ir(t) {
	if (t.__esModule) {
		return t;
	}
	var e = Object.defineProperty({}, "__esModule", { value: !0 });
	return (
		Object
			.keys(t)
			.forEach(function (r) {
				var n = Object.getOwnPropertyDescriptor(t, r);
				Object.defineProperty(
					e,
					r,
					n.get ? n : {
						enumerable: !0,
						get: function () {
							return t[r];
						},
					},
				);
			}), e
	);
}
var ln = "darwin",
	ce = (t) => {
		if (!!t && !t.isDestroyed()) {
			t.close();
			try {
				t.destroy();
			} catch {}
		}
	},
	fn = (t, e) => {
		var r, n;
		for (r in e) n = e[r], t.on(r, n);
		return t;
	};
ut = ft = lt = __dirname;
var lt = lt, ft = ft, ut = ut, Xe, sr;
Xe = "127.0.0.1", sr = "http://" + Xe, b.session.defaultSession.protocol.interceptStreamProtocol(
	"http",
	(t, e) => {
		var r, n, i, a, f, x, p, S, _;
		if (_ = new URL(t.url), _.host === Xe) {
			({ pathname: f } = _), f === "/" && (f += ".htm"), S =
				f.slice(f.lastIndexOf(".") + 1), S.startsWith("htm") ? a = "text/html" : a =
				{
					js: "text/javascript",
					css: "text/css",
					svg: "image/svg+xml",
					woff2: "font/woff2",
				}[S] || "application/octet-stream", n = te.createReadStream(ft + f), e({
				data: n,
				statusCode: 200,
				headers: { "content-type": a },
			});
		} else {
			if (
				t.useSessionCookies = !0, t.partition = "persist:I", x =
					b.net.request(t), x.on(
					"response",
					(m) => {
						var U, T;
						({ headers: U, statusCode: T } = m), e({ data: m }, U, T);
					},
				), t.uploadData
			) {
				p = t.uploadData;
				for (i of p) ({ bytes: r } = i), r && x.write(r);
			}
			x.end();
		}
	},
);
var ye = new Proxy(
	{},
	{
		get: (t, e) => (r) => {
			var n;
			return (
				r =
					Ct(
						{
							skipTaskbar: !0,
							frame: !1,
							minimizable: !1,
							maximizable: !1,
							fullscreenable: !1,
							type: "toolbar",
							shadow: !1,
							hasShadow: !1,
							transparent: !0,
							webPreferences: { preload: Z.join(lt, "q.js"), webSecurity: !1 },
						},
						r,
					), n = new b.BrowserWindow(r), n.setMenu(null), e !== "main" && n.setVisibleOnAllWorkspaces(
					!0,
					{ visibleOnFullScreen: !0 },
				), n.loadURL(sr + "#" + e), n.once("ready-to-show", () => n.show()), n.focus(), n
			);
		},
	},
),
	or;
({ main: or } = ye);
var pe = (t = !0) => {
	var e, r, n;
	if (r = b.BrowserWindow.getAllWindows(), r.length) {
		for (e of r) if (e.webContents.getURL().endsWith("/#main")) {
			n = e, n.isMinimized() && n.restore();
			break;
		}
	}
	n || (
		n =
			or({ type: "", resizable: !1, height: 590, width: 426, skipTaskbar: !1 })
	), !(!t && !n.isVisible()) && (n.show(), n.moveTop(), n.focus());
},
	ar = { ID: "" },
	tt;
try {
	tt = new TextDecoder();
} catch {}
var h,
	ie,
	s = 0,
	V = {},
	M,
	re,
	H = 0,
	X = 0,
	F,
	Q,
	N = [],
	k,
	$t = { useRecords: !1, mapsAsObjects: !0 };
class lr {}
const fr = new lr();
fr.name = "MessagePack 0xC1";
var ge = !1, ur = 2;
try {
	new Function("");
} catch {
	ur = 1 / 0;
}
class Se {
	constructor(e) {
		e && (
			e.useRecords === !1 &&
				e.mapsAsObjects === void 0 &&
				(e.mapsAsObjects = !0), e.structures ? e.structures.sharedLength =
				e.structures.length : e.getStructures && (
				(e.structures = []).uninitialized = !0, e.structures.sharedLength = 0
			)
		), Object.assign(this, e);
	}
	unpack(e, r) {
		if (h) {
			return pr(
				() => (
					nt(), this ? this.unpack(e, r) : Se.prototype.unpack.call($t, e, r)
				),
			);
		}
		ie = r > -1 ? r : e.length, s = 0, X = 0, re = null, F = null, h = e;
		try {
			k =
				e.dataView || (
					e.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength)
				);
		} catch (n) {
			throw h = null, e instanceof Uint8Array ? n : new Error(
				"Source must be a Uint8Array or Buffer but was a " + (
					e && typeof e == "object" ? e.constructor.name : typeof e
				),
			);
		}
		if (this instanceof Se) {
			if (V = this, this.structures) {
				return (M = this.structures, Be());
			}
			(!M || M.length > 0) && (M = []);
		} else {
			V = $t, (!M || M.length > 0) && (M = []);
		}
		return Be();
	}
	unpackMultiple(e, r) {
		let n, i = 0;
		try {
			ge = !0;
			let a = e.length, f = this ? this.unpack(e, a) : Le.unpack(e, a);
			if (r) {
				for (r(f); s < a; ) if (i = s, r(Be()) === !1) {
					return;
				}
			} else {
				for (n = [f]; s < a; ) i = s, n.push(Be());
				return n;
			}
		} catch (a) {
			throw a.lastPosition = i, a.values = n, a;
		} finally {
			ge = !1, nt();
		}
	}
	_mergeStructures(e, r) {
		e = e || [];
		for (let n = 0, i = e.length; n < i; n++) {
			let a = e[n];
			a && (a.isShared = !0, n >= 32 && (a.highByte = n - 32 >> 5));
		}
		e.sharedLength = e.length;
		for (let n in r || []) if (n >= 0) {
			let i = e[n], a = r[n];
			a && (
				i && ((e.restoreStructures || (e.restoreStructures = []))[n] = i), e[n] =
					a
			);
		}
		return this.structures = e;
	}
	decode(e, r) {
		return this.unpack(e, r);
	}
}
function Be() {
	try {
		if (!V.trusted && !ge) {
			let e = M.sharedLength || 0;
			e < M.length && (M.length = e);
		}
		let t = R();
		if (F && (s = F.postBundlePosition), s == ie) {
			M.restoreStructures && Lt(), M = null, h = null, Q && (Q = null);
		} else if (s > ie) {
			let e = new Error("Unexpected end of MessagePack data");
			throw e.incomplete = !0, e;
		} else if (!ge) {
			throw new Error("Data read, but end of buffer not reached");
		}
		return t;
	} catch (t) {
		throw M.restoreStructures && Lt(), nt(), (
			(t instanceof RangeError) || t.message.startsWith(
				"Unexpected end of buffer",
			)
		) && (t.incomplete = !0), t;
	}
}
function Lt() {
	for (let t in M.restoreStructures) M[t] = M.restoreStructures[t];
	M.restoreStructures = null;
}
function R() {
	let t = h[s++];
	if (t < 160) {
		if (t < 128) {
			if (t < 64) {
				return t;
			}
			{
				let e = M[t & 63] || (V.getStructures && dr()[t & 63]);
				return e ? (e.read || (e.read = dt(e, t & 63)), e.read()) : t;
			}
		} else if (t < 144) {
			if (t -= 128, V.mapsAsObjects) {
				let e = {};
				for (let r = 0; r < t; r++) e[hr()] = R();
				return e;
			} else {
				let e = new Map();
				for (let r = 0; r < t; r++) e.set(R(), R());
				return e;
			}
		} else {
			t -= 144;
			let e = new Array(t);
			for (let r = 0; r < t; r++) e[r] = R();
			return e;
		}
	} else if (t < 192) {
		let e = t - 160;
		if (X >= s) {
			return re.slice(s - H, (s += e) - H);
		}
		if (X == 0 && ie < 140) {
			let r = e < 16 ? ct(e) : cr(e);
			if (r != null) {
				return r;
			}
		}
		return rt(e);
	} else {
		let e;
		switch (t) {
			case 192:
				return null;
			case 193:
				return F ? (
					e = R(), e > 0 ? F[1].slice(F.position1, F.position1 += e) : F[0].slice(
						F.position0,
						F.position0 -= e,
					)
				) : fr;
			case 194:
				return !1;
			case 195:
				return !0;
			case 196:
				return Ye(h[s++]);
			case 197:
				return (e = k.getUint16(s), s += 2, Ye(e));
			case 198:
				return (e = k.getUint32(s), s += 4, Ye(e));
			case 199:
				return fe(h[s++]);
			case 200:
				return (e = k.getUint16(s), s += 2, fe(e));
			case 201:
				return (e = k.getUint32(s), s += 4, fe(e));
			case 202:
				if (e = k.getFloat32(s), V.useFloat32 > 2) {
					let r = ht[(h[s] & 127) << 1 | h[s + 1] >> 7];
					return (s += 4, ((r * e) + (e > 0 ? .5 : -.5) >> 0) / r);
				}
				return (s += 4, e);
			case 203:
				return (e = k.getFloat64(s), s += 8, e);
			case 204:
				return h[s++];
			case 205:
				return (e = k.getUint16(s), s += 2, e);
			case 206:
				return (e = k.getUint32(s), s += 4, e);
			case 207:
				return (
					V.int64AsNumber ? (
						e = k.getUint32(s) * 4294967296, e += k.getUint32(s + 4)
					) : e = k.getBigUint64(s), s += 8, e
				);
			case 208:
				return k.getInt8(s++);
			case 209:
				return (e = k.getInt16(s), s += 2, e);
			case 210:
				return (e = k.getInt32(s), s += 4, e);
			case 211:
				return (
					V.int64AsNumber ? (
						e = k.getInt32(s) * 4294967296, e += k.getUint32(s + 4)
					) : e = k.getBigInt64(s), s += 8, e
				);
			case 212:
				if (e = h[s++], e == 114) {
					return Ht(h[s++] & 63);
				}
				{
					let r = N[e];
					if (r) {
						return r.read
							? (s++, r.read(R()))
							: r.noBuffer
								? (s++, r())
								: r(h.subarray(s, ++s));
					}
					throw new Error("Unknown extension " + e);
				}
			case 213:
				return (e = h[s], e == 114 ? (s++, Ht(h[s++] & 63, h[s++])) : fe(2));
			case 214:
				return fe(4);
			case 215:
				return fe(8);
			case 216:
				return fe(16);
			case 217:
				return (e = h[s++], X >= s ? re.slice(s - H, (s += e) - H) : dn(e));
			case 218:
				return (
					e = k.getUint16(s), s += 2, X >= s ? re.slice(s - H, (s += e) - H) : cn(
						e,
					)
				);
			case 219:
				return (
					e = k.getUint32(s), s += 4, X >= s ? re.slice(s - H, (s += e) - H) : hn(
						e,
					)
				);
			case 220:
				return (e = k.getUint16(s), s += 2, qt(e));
			case 221:
				return (e = k.getUint32(s), s += 4, qt(e));
			case 222:
				return (e = k.getUint16(s), s += 2, Vt(e));
			case 223:
				return (e = k.getUint32(s), s += 4, Vt(e));
			default:
				if (t >= 224) {
					return t - 256;
				}
				if (t === void 0) {
					let r = new Error("Unexpected end of MessagePack data");
					throw r.incomplete = !0, r;
				}
				throw new Error("Unknown MessagePack token " + t);
		}
	}
}
const un = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;
function dt(t, e) {
	function r() {
		if (r.count++ > ur) {
			let i = t.read =
				new Function(
					"r",
					"return function(){return {" +
						t
							.map(
								(a) =>
									un.test(a) ? a + ":r()" : "[" + JSON.stringify(a) + "]:r()",
							)
							.join(",") +
						"}}",
				)(R);
			return (t.highByte === 0 && (t.read = Ft(e, t.read)), i());
		}
		let n = {};
		for (let i = 0, a = t.length; i < a; i++) {
			let f = t[i];
			n[f] = R();
		}
		return n;
	}
	return (r.count = 0, t.highByte === 0 ? Ft(e, r) : r);
}
const Ft = (t, e) => function () {
	let r = h[s++];
	if (r === 0) {
		return e();
	}
	let n = t < 32 ? -(t + (r << 5)) : t + (r << 5), i = M[n] || dr()[n];
	if (!i) {
		throw new Error("Record id is not defined for " + n);
	}
	return (i.read || (i.read = dt(i, t)), i.read());
};
function dr() {
	let t = pr(() => (h = null, V.getStructures()));
	return M = V._mergeStructures(t, M);
}
var rt = Te, dn = Te, cn = Te, hn = Te;
function Te(t) {
	let e;
	if (t < 16 && (e = ct(t))) {
		return e;
	}
	if (t > 64 && tt) {
		return tt.decode(h.subarray(s, s += t));
	}
	const r = s + t, n = [];
	for (e = ""; s < r; ) {
		const i = h[s++];
		if ((i & 128) === 0) {
			n.push(i);
		} else if ((i & 224) === 192) {
			const a = h[s++] & 63;
			n.push((i & 31) << 6 | a);
		} else if ((i & 240) === 224) {
			const a = h[s++] & 63, f = h[s++] & 63;
			n.push((i & 31) << 12 | a << 6 | f);
		} else if ((i & 248) === 240) {
			const a = h[s++] & 63, f = h[s++] & 63, x = h[s++] & 63;
			let p = (i & 7) << 18 | a << 12 | f << 6 | x;
			p > 65535 && (
				p -= 65536, n.push(p >>> 10 & 1023 | 55296), p = 56320 | p & 1023
			), n.push(p);
		} else {
			n.push(i);
		}
		n.length >= 4096 && (e += $.apply(String, n), n.length = 0);
	}
	return (n.length > 0 && (e += $.apply(String, n)), e);
}
function qt(t) {
	let e = new Array(t);
	for (let r = 0; r < t; r++) e[r] = R();
	return e;
}
function Vt(t) {
	if (V.mapsAsObjects) {
		let e = {};
		for (let r = 0; r < t; r++) e[hr()] = R();
		return e;
	} else {
		let e = new Map();
		for (let r = 0; r < t; r++) e.set(R(), R());
		return e;
	}
}
var $ = String.fromCharCode;
function cr(t) {
	let e = s, r = new Array(t);
	for (let n = 0; n < t; n++) {
		const i = h[s++];
		if ((i & 128) > 0) {
			s = e;
			return;
		}
		r[n] = i;
	}
	return $.apply(String, r);
}
function ct(t) {
	if (t < 4) {
		if (t < 2) {
			if (t === 0) {
				return "";
			}
			{
				let e = h[s++];
				if ((e & 128) > 1) {
					s -= 1;
					return;
				}
				return $(e);
			}
		} else {
			let e = h[s++], r = h[s++];
			if ((e & 128) > 0 || (r & 128) > 0) {
				s -= 2;
				return;
			}
			if (t < 3) {
				return $(e, r);
			}
			let n = h[s++];
			if ((n & 128) > 0) {
				s -= 3;
				return;
			}
			return $(e, r, n);
		}
	} else {
		let e = h[s++], r = h[s++], n = h[s++], i = h[s++];
		if ((e & 128) > 0 || (r & 128) > 0 || (n & 128) > 0 || (i & 128) > 0) {
			s -= 4;
			return;
		}
		if (t < 6) {
			if (t === 4) {
				return $(e, r, n, i);
			}
			{
				let a = h[s++];
				if ((a & 128) > 0) {
					s -= 5;
					return;
				}
				return $(e, r, n, i, a);
			}
		} else if (t < 8) {
			let a = h[s++], f = h[s++];
			if ((a & 128) > 0 || (f & 128) > 0) {
				s -= 6;
				return;
			}
			if (t < 7) {
				return $(e, r, n, i, a, f);
			}
			let x = h[s++];
			if ((x & 128) > 0) {
				s -= 7;
				return;
			}
			return $(e, r, n, i, a, f, x);
		} else {
			let a = h[s++], f = h[s++], x = h[s++], p = h[s++];
			if ((a & 128) > 0 || (f & 128) > 0 || (x & 128) > 0 || (p & 128) > 0) {
				s -= 8;
				return;
			}
			if (t < 10) {
				if (t === 8) {
					return $(e, r, n, i, a, f, x, p);
				}
				{
					let S = h[s++];
					if ((S & 128) > 0) {
						s -= 9;
						return;
					}
					return $(e, r, n, i, a, f, x, p, S);
				}
			} else if (t < 12) {
				let S = h[s++], _ = h[s++];
				if ((S & 128) > 0 || (_ & 128) > 0) {
					s -= 10;
					return;
				}
				if (t < 11) {
					return $(e, r, n, i, a, f, x, p, S, _);
				}
				let m = h[s++];
				if ((m & 128) > 0) {
					s -= 11;
					return;
				}
				return $(e, r, n, i, a, f, x, p, S, _, m);
			} else {
				let S = h[s++], _ = h[s++], m = h[s++], U = h[s++];
				if ((S & 128) > 0 || (_ & 128) > 0 || (m & 128) > 0 || (U & 128) > 0) {
					s -= 12;
					return;
				}
				if (t < 14) {
					if (t === 12) {
						return $(e, r, n, i, a, f, x, p, S, _, m, U);
					}
					{
						let T = h[s++];
						if ((T & 128) > 0) {
							s -= 13;
							return;
						}
						return $(e, r, n, i, a, f, x, p, S, _, m, U, T);
					}
				} else {
					let T = h[s++], I = h[s++];
					if ((T & 128) > 0 || (I & 128) > 0) {
						s -= 14;
						return;
					}
					if (t < 15) {
						return $(e, r, n, i, a, f, x, p, S, _, m, U, T, I);
					}
					let j = h[s++];
					if ((j & 128) > 0) {
						s -= 15;
						return;
					}
					return $(e, r, n, i, a, f, x, p, S, _, m, U, T, I, j);
				}
			}
		}
	}
}
function Nt() {
	let t = h[s++], e;
	if (t < 192) {
		e = t - 160;
	} else {
		switch (t) {
			case 217:
				e = h[s++];
				break;
			case 218:
				e = k.getUint16(s), s += 2;
				break;
			case 219:
				e = k.getUint32(s), s += 4;
				break;
			default:
				throw new Error("Expected string");
		}
	}
	return Te(e);
}
function Ye(t) {
	return V.copyBuffers ? Uint8Array.prototype.slice.call(h, s, s += t) : h.subarray(
		s,
		s += t,
	);
}
function fe(t) {
	let e = h[s++];
	if (N[e]) {
		return N[e](h.subarray(s, s += t));
	}
	throw new Error("Unknown extension type " + e);
}
var Jt = new Array(4096);
function hr() {
	let t = h[s++];
	if (t >= 160 && t < 192) {
		if (t = t - 160, X >= s) {
			return re.slice(s - H, (s += t) - H);
		}
		if (!(X == 0 && ie < 180)) {
			return rt(t);
		}
	} else {
		return (s--, R());
	}
	let e = (
		t << 5 ^ (
			t > 1
				? k.getUint16(s)
				: t > 0
					? h[s]
					: 0
		)
	) & 4095,
		r = Jt[e],
		n = s,
		i = s + t - 3,
		a,
		f = 0;
	if (r && r.bytes == t) {
		for (; n < i; ) {
			if (a = k.getUint32(n), a != r[f++]) {
				n = 1879048192;
				break;
			}
			n += 4;
		}
		for (i += 3; n < i; ) if (a = h[n++], a != r[f++]) {
			n = 1879048192;
			break;
		}
		if (n === i) {
			return (s = n, r.string);
		}
		i -= 3, n = s;
	}
	for (r = [], Jt[e] = r, r.bytes = t; n < i; ) a = k.getUint32(n), r.push(a), n +=
		4;
	for (i += 3; n < i; ) a = h[n++], r.push(a);
	let x = t < 16 ? ct(t) : cr(t);
	return x != null ? r.string = x : r.string = rt(t);
}
const Ht = (t, e) => {
	var r = R();
	let n = t;
	e !== void 0 && (t = t < 32 ? -((e << 5) + t) : (e << 5) + t, r.highByte = e);
	let i = M[t];
	return (
		i &&
			i.isShared &&
			((M.restoreStructures || (M.restoreStructures = []))[t] = i), M[t] = r, r.read =
			dt(r, n), r.read()
	);
};
var wr = typeof self == "object" ? self : global;
N[0] = () => {};
N[0].noBuffer = !0;
N[101] =
	() => {
		let t = R();
		return (wr[t[0]] || Error)(t[1]);
	};
N[105] =
	(t) => {
		let e = k.getUint32(s - 4);
		Q || (Q = new Map());
		let r = h[s], n;
		(r >= 144 && r < 160) || r == 220 || r == 221 ? n = [] : n = {};
		let i = { target: n };
		Q.set(e, i);
		let a = R();
		return i.used ? Object.assign(n, a) : (i.target = a, a);
	};
N[112] =
	(t) => {
		let e = k.getUint32(s - 4), r = Q.get(e);
		return (r.used = !0, r.target);
	};
N[115] = () => new Set(R());
const xr = [
	"Int8",
	"Uint8",
	"Uint8Clamped",
	"Int16",
	"Uint16",
	"Int32",
	"Uint32",
	"Float32",
	"Float64",
	"BigInt64",
	"BigUint64",
].map((t) => t + "Array");
N[116] =
	(t) => {
		let e = t[0], r = xr[e];
		if (!r) {
			throw new Error("Could not find typed array for code " + e);
		}
		return new wr[r](Uint8Array.prototype.slice.call(t, 1).buffer);
	};
N[120] =
	() => {
		let t = R();
		return new RegExp(t[0], t[1]);
	};
const wn = [];
N[98] =
	(t) => {
		let e = (t[0] << 24) + (t[1] << 16) + (t[2] << 8) + t[3], r = s;
		return (
			s += e - t.length, F = wn, F = [Nt(), Nt()], F.position0 = 0, F.position1 =
				0, F.postBundlePosition = s, s = r, R()
		);
	};
N[255] =
	(t) =>
		t.length == 4
			? new Date(((t[0] * 16777216) + (t[1] << 16) + (t[2] << 8) + t[3]) * 1e3)
			: t.length == 8
				? new Date(
					(((t[0] << 22) + (t[1] << 14) + (t[2] << 6) + (t[3] >> 2)) / 1e6) + (
						(
							((t[3] & 3) * 4294967296) +
								(t[4] * 16777216) +
								(t[5] << 16) +
								(t[6] << 8) +
								t[7]
						) * 1e3
					),
				)
				: t.length == 12
					? new Date(
						(((t[0] << 24) + (t[1] << 16) + (t[2] << 8) + t[3]) / 1e6) + (
							(
								(t[4] & 128 ? -281474976710656 : 0) +
									(t[6] * 1099511627776) +
									(t[7] * 4294967296) +
									(t[8] * 16777216) +
									(t[9] << 16) +
									(t[10] << 8) +
									t[11]
							) * 1e3
						),
					)
					: new Date("invalid");
function pr(t) {
	let e = ie,
		r = s,
		n = H,
		i = X,
		a = re,
		f = Q,
		x = F,
		p = new Uint8Array(h.slice(0, ie)),
		S = M,
		_ = M.slice(0, M.length),
		m = V,
		U = ge,
		T = t();
	return (
		ie = e, s = r, H = n, X = i, re = a, Q = f, F = x, h = p, ge = U, M = S, M.splice(
			0,
			M.length,
			..._,
		), V = m, k = new DataView(h.buffer, h.byteOffset, h.byteLength), T
	);
}
function nt() {
	h = null, Q = null, M = null;
}
const ht = new Array(147);
for (let t = 0; t < 256; t++) ht[t] = +("1e" + Math.floor(45.15 - (t * .30103)));
var Le = new Se({ useRecords: !1 });
const xn = Le.unpack;
Le.unpackMultiple;
Le.unpack;
let pn = new Float32Array(1);
new Uint8Array(pn.buffer, 0, 4);
let Ae;
try {
	Ae = new TextEncoder();
} catch {}
let it, gr;
const Fe = typeof Buffer != "undefined",
	We = Fe ? Buffer.allocUnsafeSlow : Uint8Array,
	yr = Fe ? Buffer : Uint8Array,
	Zt = Fe ? 4294967296 : 2144337920;
let l, ve, E, o = 0, q, L = null;
const gn = 61440, yn = /[\u0080-\uFFFF]/, we = Symbol("record-id");
class mn extends Se {
	constructor(e) {
		super(e);
		this.offset = 0;
		let r,
			n,
			i,
			a,
			f = 0,
			x = yr.prototype.utf8Write
				? function (u, v, c) {
					return l.utf8Write(u, v, c);
				}
				: Ae && Ae.encodeInto
					? function (u, v) {
						return Ae.encodeInto(u, l.subarray(v)).written;
					}
					: !1,
			p = this;
		e || (e = {});
		let S = e && e.sequential,
			_ = e.structures || e.saveStructures,
			m = e.maxSharedStructures;
		if (m == null && (m = _ ? 32 : 0), m > 8160) {
			throw new Error("Maximum maxSharedStructure is 8160");
		}
		e.structuredClone && e.moreTypes == null && (e.moreTypes = !0);
		let U = e.maxOwnStructures;
		U == null && (U = _ ? 32 : 64), !this.structures &&
			e.useRecords != !1 &&
			(this.structures = []);
		let T = m > 32 || (U + m) > 64, I = m + 64, j = m + U + 64;
		if (j > 8256) {
			throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
		}
		let J = [], oe = 0, G = 0;
		this.pack =
			this.encode =
				function (u, v) {
					if (
						l || (l = new We(8192), E = new DataView(l.buffer, 0, 8192), o = 0), q =
							l.length - 10, (q - o) < 2048 ? (
							l = new We(l.length), E = new DataView(l.buffer, 0, l.length), q =
								l.length - 10, o = 0
						) : o = o + 7 & 2147483640, r = o, a =
							p.structuredClone ? new Map() : null, p.bundleStrings && typeof u != "string" ? (
							L = [], L.size = 1 / 0
						) : L = null, i = p.structures, i
					) {
						i.uninitialized && (i = p._mergeStructures(p.getStructures()));
						let c = i.sharedLength || 0;
						if (c > m) {
							throw new Error(
								"Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + i.sharedLength,
							);
						}
						if (!i.transitions) {
							i.transitions = Object.create(null);
							for (let d = 0; d < c; d++) {
								let w = i[d];
								if (!w) {
									continue;
								}
								let B, O = i.transitions;
								for (let y = 0, z = w.length; y < z; y++) {
									let W = w[y];
									B = O[W], B || (B = O[W] = Object.create(null)), O = B;
								}
								O[we] = d + 64;
							}
							f = c;
						}
						S || (i.nextId = c + 64);
					}
					n && (n = !1);
					try {
						if (P(u), L && Xt(r, P), p.offset = o, a && a.idsToInsert) {
							o += a.idsToInsert.length * 6, o > q && ae(o), p.offset = o;
							let c = bn(l.subarray(r, o), a.idsToInsert);
							return (a = null, c);
						}
						return v & Sn ? (l.start = r, l.end = o, l) : l.subarray(r, o);
					} finally {
						if (i) {
							G < 10 && G++;
							let c = i.sharedLength || m;
							if (i.length > c && (i.length = c), oe > 1e4) {
								i.transitions = null, G = 0, oe = 0, J.length > 0 && (J = []);
							} else if (J.length > 0 && !S) {
								for (let d = 0, w = J.length; d < w; d++) J[d][we] = 0;
								J = [];
							}
							if (n && p.saveStructures) {
								let d = l.subarray(r, o);
								return p.saveStructures(i, f) === !1 ? (
									p._mergeStructures(p.getStructures()), p.pack(u)
								) : (f = c, d);
							}
						}
						v & _n && (o = r);
					}
				};
		const P = (u) => {
			o > q && (l = ae(o));
			var v = typeof u, c;
			if (v === "string") {
				let d = u.length;
				if (L && d >= 4 && d < 4096) {
					if ((L.size += d) > gn) {
						let y, z = (L[0] ? (L[0].length * 3) + L[1].length : 0) + 10;
						(o + z) > q && (l = ae(o + z)), L.position ? (
							l[o] = 200, o += 3, l[o++] = 98, y = o - r, o += 4, Xt(r, P), E.setUint16(
								y + r - 3,
								o - r - y,
							)
						) : (l[o++] = 214, l[o++] = 98, y = o - r, o += 4), L = ["", ""], L.size =
							0, L.position = y;
					}
					let O = yn.test(u);
					L[O ? 0 : 1] += u, l[o++] = 193, P(O ? -d : d);
					return;
				}
				let w;
				d < 32
					? w = 1
					: d < 256
						? w = 2
						: d < 65536
							? w = 3
							: w = 5;
				let B = d * 3;
				if ((o + B) > q && (l = ae(o + B)), d < 64 || !x) {
					let O, y, z, W = o + w;
					for (O = 0; O < d; O++) y = u.charCodeAt(O), y < 128
						? l[W++] = y
						: y < 2048
							? (l[W++] = y >> 6 | 192, l[W++] = y & 63 | 128)
							: (y & 64512) === 55296 && ((z = u.charCodeAt(O + 1)) & 64512) === 56320
								? (
									y = 65536 + ((y & 1023) << 10) + (z & 1023), O++, l[W++] =
										y >> 18 | 240, l[W++] = y >> 12 & 63 | 128, l[W++] =
										y >> 6 & 63 | 128, l[W++] = y & 63 | 128
								)
								: (
									l[W++] = y >> 12 | 224, l[W++] = y >> 6 & 63 | 128, l[W++] =
										y & 63 | 128
								);
					c = W - o - w;
				} else {
					c = x(u, o + w, B);
				}
				c < 32
					? l[o++] = 160 | c
					: c < 256
						? (
							w < 2 && l.copyWithin(o + 2, o + 1, o + 1 + c), l[o++] = 217, l[o++] =
								c
						)
						: c < 65536
							? (
								w < 3 && l.copyWithin(o + 3, o + 2, o + 2 + c), l[o++] = 218, l[o++] =
									c >> 8, l[o++] = c & 255
							)
							: (
								w < 5 && l.copyWithin(o + 5, o + 3, o + 3 + c), l[o++] = 219, E.setUint32(
									o,
									c,
								), o += 4
							), o += c;
			} else if (v === "number") {
				if ((u >>> 0) === u) {
					u < 64
						? l[o++] = u
						: u < 256
							? (l[o++] = 204, l[o++] = u)
							: u < 65536
								? (l[o++] = 205, l[o++] = u >> 8, l[o++] = u & 255)
								: (l[o++] = 206, E.setUint32(o, u), o += 4);
				} else if ((u >> 0) === u) {
					u >= -32
						? l[o++] = 256 + u
						: u >= -128
							? (l[o++] = 208, l[o++] = u + 256)
							: u >= -32768
								? (l[o++] = 209, E.setInt16(o, u), o += 2)
								: (l[o++] = 210, E.setInt32(o, u), o += 4);
				} else {
					let d;
					if ((d = this.useFloat32) > 0 && u < 4294967296 && u >= -2147483648) {
						l[o++] = 202, E.setFloat32(o, u);
						let w;
						if (
							d < 4 || ((w = u * ht[(l[o] & 127) << 1 | l[o + 1] >> 7]) >> 0) === w
						) {
							o += 4;
							return;
						} else {
							o--;
						}
					}
					l[o++] = 203, E.setFloat64(o, u), o += 8;
				}
			} else if (v === "object") {
				if (!u) {
					l[o++] = 192;
				} else {
					if (a) {
						let w = a.get(u);
						if (w) {
							if (!w.id) {
								let B = a.idsToInsert || (a.idsToInsert = []);
								w.id = B.push(w);
							}
							l[o++] = 214, l[o++] = 112, E.setUint32(o, w.id), o += 4;
							return;
						} else {
							a.set(u, { offset: o - r });
						}
					}
					let d = u.constructor;
					if (d === Object) {
						jt(u, !0);
					} else if (d === Array) {
						c = u.length, c < 16
							? l[o++] = 144 | c
							: c < 65536
								? (l[o++] = 220, l[o++] = c >> 8, l[o++] = c & 255)
								: (l[o++] = 221, E.setUint32(o, c), o += 4);
						for (let w = 0; w < c; w++) P(u[w]);
					} else if (d === Map) {
						c = u.size, c < 16
							? l[o++] = 128 | c
							: c < 65536
								? (l[o++] = 222, l[o++] = c >> 8, l[o++] = c & 255)
								: (l[o++] = 223, E.setUint32(o, c), o += 4);
						for (let [w, B] of u) P(w), P(B);
					} else {
						for (let w = 0, B = it.length; w < B; w++) {
							let O = gr[w];
							if (u instanceof O) {
								let y = it[w];
								if (y.write) {
									y.type && (l[o++] = 212, l[o++] = y.type, l[o++] = 0), P(
										y.write.call(this, u),
									);
									return;
								}
								let z = l, W = E, Y = o;
								l = null;
								let le;
								try {
									le =
										y.pack.call(
											this,
											u,
											(me) => (
												l = z, z = null, o += me, o > q && ae(o), {
													target: l,
													targetView: E,
													position: o - me,
												}
											),
											P,
										);
								} finally {
									z && (l = z, E = W, o = Y, q = l.length - 10);
								}
								le && (
									(le.length + o) > q && ae(le.length + o), o =
										vn(le, l, o, y.type)
								);
								return;
							}
						}
						jt(u, !u.hasOwnProperty);
					}
				}
			} else if (v === "boolean") {
				l[o++] = u ? 195 : 194;
			} else if (v === "bigint") {
				if (u < (BigInt(1) << BigInt(63)) && u >= -(BigInt(1) << BigInt(63))) {
					l[o++] = 211, E.setBigInt64(o, u);
				} else if (u < (BigInt(1) << BigInt(64)) && u > 0) {
					l[o++] = 207, E.setBigUint64(o, u);
				} else if (this.largeBigIntToFloat) {
					l[o++] = 203, E.setFloat64(o, Number(u));
				} else {
					throw new RangeError(
						u + " was too large to fit in MessagePack 64-bit integer format, set largeBigIntToFloat to convert to float-64",
					);
				}
				o += 8;
			} else if (v === "undefined") {
				this.encodeUndefinedAsNil ? l[o++] = 192 : (
					l[o++] = 212, l[o++] = 0, l[o++] = 0
				);
			} else if (v === "function") {
				P(this.writeFunction && this.writeFunction());
			} else {
				throw new Error("Unknown type: " + v);
			}
		},
			jt = this.useRecords === !1
				? this.variableMapSize
					? (u) => {
						let v = Object.keys(u), c = v.length;
						c < 16
							? l[o++] = 128 | c
							: c < 65536
								? (l[o++] = 222, l[o++] = c >> 8, l[o++] = c & 255)
								: (l[o++] = 223, E.setUint32(o, c), o += 4);
						let d;
						for (let w = 0; w < c; w++) P(d = v[w]), P(u[d]);
					}
					: (u, v) => {
						l[o++] = 222;
						let c = o - r;
						o += 2;
						let d = 0;
						for (let w in u) (v || u.hasOwnProperty(w)) && (P(w), P(u[w]), d++);
						l[c++ + r] = d >> 8, l[c + r] = d & 255;
					}
				: e.progressiveRecords && !T
					? (u, v) => {
						let c,
							d = i.transitions || (i.transitions = Object.create(null)),
							w = o++ - r,
							B;
						for (let O in u) if (v || u.hasOwnProperty(O)) {
							if (c = d[O], c) {
								d = c;
							} else {
								let y = Object.keys(u), z = d;
								d = i.transitions;
								let W = 0;
								for (let Y = 0, le = y.length; Y < le; Y++) {
									let me = y[Y];
									c = d[me], c || (c = d[me] = Object.create(null), W++), d = c;
								}
								(w + r + 1) == o ? (o--, Ge(d, y, W)) : Dt(d, y, w, W), B = !0, d =
									z[O];
							}
							P(u[O]);
						}
						if (!B) {
							let O = d[we];
							O ? l[w + r] = O : Dt(d, Object.keys(u), w, 0);
						}
					}
					: (u, v) => {
						let c,
							d = i.transitions || (i.transitions = Object.create(null)),
							w = 0;
						for (let O in u) (v || u.hasOwnProperty(O)) && (
							c = d[O], c || (c = d[O] = Object.create(null), w++), d = c
						);
						let B = d[we];
						B
							? B >= 96 && T
								? (l[o++] = ((B -= 96) & 31) + 96, l[o++] = B >> 5)
								: l[o++] = B
							: Ge(d, d.__keys__ || Object.keys(u), w);
						for (let O in u) (v || u.hasOwnProperty(O)) && P(u[O]);
					},
			ae = (u) => {
				let v;
				if (u > 16777216) {
					if ((u - r) > Zt) {
						throw new Error(
							"Packed buffer would be larger than maximum buffer size",
						);
					}
					v =
						Math.min(
							Zt,
							Math.round(
								Math.max((u - r) * (u > 67108864 ? 1.25 : 2), 4194304) / 4096,
							) * 4096,
						);
				} else {
					v = (Math.max(u - r << 2, l.length - 1) >> 12) + 1 << 12;
				}
				let c = new We(v);
				return (
					E = new DataView(c.buffer, 0, v), l.copy ? l.copy(c, 0, r, u) : c.set(
						l.slice(r, u),
					), o -= r, r = 0, q = c.length - 10, l = c
				);
			},
			Ge = (u, v, c) => {
				let d = i.nextId;
				d || (d = 64), d < I &&
					this.shouldShareStructure &&
					!this.shouldShareStructure(v) ? (
					d = i.nextOwnId, d < j || (d = I), i.nextOwnId = d + 1
				) : (d >= j && (d = I), i.nextId = d + 1);
				let w = v.highByte = d >= 96 && T ? d - 96 >> 5 : -1;
				u[we] = d, u.__keys__ = v, i[d - 64] = v, d < I ? (
					v.isShared = !0, i.sharedLength = d - 63, n = !0, w >= 0 ? (
						l[o++] = (d & 31) + 96, l[o++] = w
					) : l[o++] = d
				) : (
					w >= 0 ? (
						l[o++] = 213, l[o++] = 114, l[o++] = (d & 31) + 96, l[o++] = w
					) : (l[o++] = 212, l[o++] = 114, l[o++] = d), c && (oe += G * c), J.length >= U && (
						J.shift()[we] = 0
					), J.push(u), P(v)
				);
			},
			Dt = (u, v, c, d) => {
				let w = l, B = o, O = q, y = r;
				l = ve, o = 0, r = 0, l || (ve = l = new We(8192)), q = l.length - 10, Ge(
					u,
					v,
					d,
				), ve = l;
				let z = o;
				if (l = w, o = B, q = O, r = y, z > 1) {
					let W = o + z - 1;
					W > q && ae(W);
					let Y = c + r;
					l.copyWithin(Y + z, Y + 1, o), l.set(ve.slice(0, z), Y), o = W;
				} else {
					l[c + r] = ve[0];
				}
			};
	}
	useBuffer(e) {
		l = e, E = new DataView(l.buffer, l.byteOffset, l.byteLength), o = 0;
	}
	clearSharedData() {
		this.structures && (this.structures = []);
	}
}
gr =
	[
		Date,
		Set,
		Error,
		RegExp,
		ArrayBuffer,
		Object.getPrototypeOf(Uint8Array.prototype).constructor,
		lr,
	];
it =
	[
		{
			pack(t, e, r) {
				let n = t.getTime() / 1e3;
				if (
					(this.useTimestamp32 || t.getMilliseconds() === 0) &&
					n >= 0 &&
					n < 4294967296
				) {
					let { target: i, targetView: a, position: f } = e(6);
					i[f++] = 214, i[f++] = 255, a.setUint32(f, n);
				} else if (n > 0 && n < 17179869184) {
					let { target: i, targetView: a, position: f } = e(10);
					i[f++] = 215, i[f++] = 255, a.setUint32(
						f,
						(t.getMilliseconds() * 4e6) + (n / 1e3 / 4294967296 >> 0),
					), a.setUint32(f + 4, n);
				} else if (isNaN(n)) {
					if (this.onInvalidDate) {
						return (e(0), r(this.onInvalidDate()));
					}
					let { target: i, targetView: a, position: f } = e(3);
					i[f++] = 212, i[f++] = 255, i[f++] = 255;
				} else {
					let { target: i, targetView: a, position: f } = e(15);
					i[f++] = 199, i[f++] = 12, i[f++] = 255, a.setUint32(
						f,
						t.getMilliseconds() * 1e6,
					), a.setBigInt64(f + 4, BigInt(Math.floor(n)));
				}
			},
		},
		{
			pack(t, e, r) {
				let n = Array.from(t),
					{ target: i, position: a } = e(this.moreTypes ? 3 : 0);
				this.moreTypes && (i[a++] = 212, i[a++] = 115, i[a++] = 0), r(n);
			},
		},
		{
			pack(t, e, r) {
				let { target: n, position: i } = e(this.moreTypes ? 3 : 0);
				this.moreTypes && (n[i++] = 212, n[i++] = 101, n[i++] = 0), r([
					t.name,
					t.message,
				]);
			},
		},
		{
			pack(t, e, r) {
				let { target: n, position: i } = e(this.moreTypes ? 3 : 0);
				this.moreTypes && (n[i++] = 212, n[i++] = 120, n[i++] = 0), r([
					t.source,
					t.flags,
				]);
			},
		},
		{
			pack(t, e) {
				this.moreTypes ? Kt(t, 16, e) : Gt(
					Fe ? Buffer.from(t) : new Uint8Array(t),
					e,
				);
			},
		},
		{
			pack(t, e) {
				let r = t.constructor;
				r !== yr && this.moreTypes ? Kt(t, xr.indexOf(r.name), e) : Gt(t, e);
			},
		},
		{
			pack(t, e) {
				let { target: r, position: n } = e(1);
				r[n] = 193;
			},
		},
	];
function Kt(t, e, r, n) {
	let i = t.byteLength;
	if ((i + 1) < 256) {
		var { target: a, position: f } = r(4 + i);
		a[f++] = 199, a[f++] = i + 1;
	} else if ((i + 1) < 65536) {
		var { target: a, position: f } = r(5 + i);
		a[f++] = 200, a[f++] = i + 1 >> 8, a[f++] = i + 1 & 255;
	} else {
		var { target: a, position: f, targetView: x } = r(7 + i);
		a[f++] = 201, x.setUint32(f, i + 1), f += 4;
	}
	a[f++] = 116, a[f++] = e, a.set(
		new Uint8Array(t.buffer, t.byteOffset, t.byteLength),
		f,
	);
}
function Gt(t, e) {
	let r = t.byteLength;
	var n, i;
	if (r < 256) {
		var { target: n, position: i } = e(r + 2);
		n[i++] = 196, n[i++] = r;
	} else if (r < 65536) {
		var { target: n, position: i } = e(r + 3);
		n[i++] = 197, n[i++] = r >> 8, n[i++] = r & 255;
	} else {
		var { target: n, position: i, targetView: a } = e(r + 5);
		n[i++] = 198, a.setUint32(i, r), i += 4;
	}
	n.set(t, i);
}
function vn(t, e, r, n) {
	let i = t.length;
	switch (i) {
		case 1:
			e[r++] = 212;
			break;
		case 2:
			e[r++] = 213;
			break;
		case 4:
			e[r++] = 214;
			break;
		case 8:
			e[r++] = 215;
			break;
		case 16:
			e[r++] = 216;
			break;
		default:
			i < 256
				? (e[r++] = 199, e[r++] = i)
				: i < 65536
					? (e[r++] = 200, e[r++] = i >> 8, e[r++] = i & 255)
					: (
						e[r++] = 201, e[r++] = i >> 24, e[r++] = i >> 16 & 255, e[r++] =
							i >> 8 & 255, e[r++] = i & 255
					);
	}
	return (e[r++] = n, e.set(t, r), r += i, r);
}
function bn(t, e) {
	let r, n = e.length * 6, i = t.length - n;
	for (e.sort((a, f) => a.offset > f.offset ? 1 : -1); r = e.pop(); ) {
		let a = r.offset, f = r.id;
		t.copyWithin(a + n, a, i), n -= 6;
		let x = a + n;
		t[x++] = 214, t[x++] = 105, t[x++] = f >> 24, t[x++] = f >> 16 & 255, t[x++] =
			f >> 8 & 255, t[x++] = f & 255, i = a;
	}
	return t;
}
function Xt(t, e) {
	E.setUint32(L.position + t, o - L.position - t);
	let r = L;
	L = null, e(r[0]), e(r[1]);
}
let mr = new mn({ useRecords: !1 });
mr.pack;
mr.pack;
const Sn = 512, _n = 1024;
var On = "https://izx.dalukuankuan.com/",
	vr = "https://i-desk-ver.izhenxiang.com/",
	br,
	kn = async (t) => {
		var e, r;
		return (
			t = await t, r = [], e = r.push.bind(r), t.on("data", e), new Promise(
				(n, i) => (
					t.on(
						"end",
						() => {
							n(Buffer.concat(r));
						},
					), t.on("error", i)
				),
			)
		);
	},
	Mn = (t) => kn(Sr(t));
br =
	(t) => {
		var e;
		return (
			e = b.net.request(t), e.end(), new Promise(
				(r, n) => (
					e.on(
						"error",
						(i) => {
							n(i);
						},
					), e.on(
						"response",
						(i) => {
							if (i.statusCode !== 200) {
								n(i);
								return;
							}
							r(i);
						},
					)
				),
			)
		);
	};
var Sr = (t) => br(t), Ue = {};
Ue.version = "1.0.0";
Ue.encode =
	function (e) {
		return e
			.toString("base64")
			.replace(/\+/g, "-")
			.replace(/\//g, "_")
			.replace(/=+$/, "");
	};
Ue.decode =
	function (e) {
		return (
			e += Array(5 - (e.length % 4)).join("="), e =
				e.replace(/\-/g, "+").replace(/\_/g, "/"), new Buffer(e, "base64")
		);
	};
Ue.validate =
	function (e) {
		return /^[A-Za-z0-9\-_]+$/.test(e);
	};
var Qe = Ue;
var xe, _r, Ee, qe, wt, _e, xt, Or, kr, pt, Re, Mr, gt, yt, ze, st, Ve;
kr = sn.promisify(tr.brotliDecompress);
var Tn = () => (b.app.relaunch(), b.app.exit());
xe = Z.join(rr.ROOT, "v");
te.mkdirSync(xe, { recursive: !0 });
_r = "sha512";
ze = void 0;
var Tr = () => {
	ce(ze), ze = void 0;
},
	Ur = () => {
		Tr(), ze = ye.update({ width: 400, height: 500, resizable: !1 });
	};
Re = (t) => Mn(vr + t);
Mr =
	(t) => {
		var e;
		return (
			e = nn.createHash(_r), new Promise(
				(r) =>
					te
						.createReadStream(t)
						.on("data", e.update.bind(e))
						.on(
							"end",
							() => {
								r(e.digest().slice(0, 8));
							},
						),
			)
		);
	};
st =
	(() => {
		var t;
		return ({ v: t } = je.default, t && se.decode(t));
	})();
var Br = () => se.PACKAGE_JSON().version;
xt = ln + "/";
Ve = se.ver_int(Br());
_e = 0;
yt =
	async () => {
		var t;
		return (
			t = se.encode(parseInt(new Date() / 1e3)), _e = await Re(xt + "v?" + t), _e
		);
	};
Or =
	async (t) => {
		var e, r, n, i, a, f, x, p, S, _, m, U, T, I, j, J, oe, G;
		if (t || (t = _e || await yt()), G = t.readUintBE(0, 6), !(Ve >= G)) {
			if (
				n = se.encode(G), e = Z.join(xe, n), te.existsSync(
					Z.join(e, se.package_json),
				) && G === st
			) {
				return e;
			}
			for (
				J = Qe.encode(await Re(xt + Qe.encode(t))), [r, i, x] =
					xn(await kr(await Re(J))), U =
					(P) => be.mkdir(Z.join(e, P), { recursive: !0 }), await Promise.all(
					r.map(U),
				), I = Z.dirname(__dirname), T = S = 0, _ = i.length;
				S < _;
				T = ++S
			) if (
				p = i[T], a = Z.join(e, p), f = x[T], j =
					async (P) => Buffer.compare(f, await Mr(P)) === 0, !(
					te.existsSync(a) && await j(a)
				)
			) {
				if (
					await U(Z.dirname(p)), m = Z.join(I, p), te.existsSync(m) && await j(
						m,
					)
				) {
					await be.copyFile(m, a);
					continue;
				}
				if (
					oe = te.createWriteStream(a), (await Sr(vr + Qe.encode(f))).pipe(
						tr.createBrotliDecompress(),
					).pipe(oe), await new Promise(
						(P) => {
							oe.on("finish", P);
						},
					), !await j(a)
				) {
					return;
				}
			}
			return (je.default.v = n, st = G, e);
		}
	};
var Wr = async () => {
	var t, e, r;
	try {
		t = await yt();
	} catch (n) {
		return (e = n, console.trace(e), 0);
	}
	return (r = Ve < t.readUintBE(0, 6), r ? t : 0);
};
pt =
	async () => {
		var t;
		(t = await Wr()) && await Pr(t);
	};
setInterval(pt, 864e5);
Ee = qe = wt = void 0;
gt = () => qe = new Promise((t) => wt = t);
gt();
var Un = () => qe,
	Pr = (...t) => (
		Ee || (
			Ee =
				Or(...t)
					.then(
						async (e) => {
							e && (
								wt([
									_e,
									JSON.parse(
										await be.readFile(Z.join(e, se.package_json), "utf8"),
									).description,
								]), gt()
							);
						},
					)
					.finally(() => {
						Ee = !1;
					})
		), qe
	);
setTimeout(
	async () => {
		var t, e, r, n;
		if (te.existsSync(xe)) {
			n = await be.readdir(xe, { withFileTypes: !0 });
			for (e of n) e.isDirectory() && (
				{ name: r } = e, se.decode(r) < Ve && await be.rm(
					Z.join(xe, r),
					{ recursive: !0, force: !0 },
				)
			);
		}
		if (t = parseInt(new Date() / 864e5), t !== je.default.update_check) {
			return (je.default.update_check = t, await pt());
		}
	},
	15e3,
);
var Bn = Object.freeze(
	Object.defineProperty(
		{
			__proto__: null,
			relaunch: Tn,
			x: Tr,
			show: Ur,
			ver_now: Br,
			update_check: Wr,
			update_promise: Un,
			update: Pr,
		},
		Symbol.toStringTag,
		{ value: "Module" },
	),
);
var Ne, mt, Ar, Er, vt, Wn, bt, Ir, jr, Oe;
$e.default.platform();
({ Menu: mt, Tray: Ar, app: Er, globalShortcut: Wn } = require("electron"));
Oe = new Ar(Z.join(ut, "trayTemplate.png"));
bt =
	[
		{
			label: "媒体库",
			click: () => {
				b.shell.openExternal(On + "video_library.html?user_token=" + ar.ID);
			},
		},
		{ label: "检测更新", click: Ur },
		{ type: "separator" },
	];
Ne =
	Ir =
		mt.buildFromTemplate([
			{ label: "显示界面", click: pe },
			...bt,
			{ label: "退出", click: () => Er.quit() },
		]);
jr = mt.buildFromTemplate(bt);
vt =
	[
		"click",
		() => {
			pe();
		},
	];
Oe.on(
	"right-click",
	(t) => {
		Oe.popUpContextMenu(Ne);
	},
);
var Pn = () => {
	Oe.off(...vt), Ne = jr;
},
	Dr = () => {
		Oe.on(...vt), Ne = Ir;
	};
var Rr;
Rr =
	(t) => {
		var e, r, n, i, a, f, x, p;
		t && (
			t.devToolsWebContents || (
				{ webContents: a } = t, e =
					new b.BrowserWindow({ minimizable: !1, maximizable: !1 }), [i, r] =
					t.getSize(), [x, p] = t.getPosition(), { width: f, height: n } =
					b.screen.getPrimaryDisplay().workArea, a.setDevToolsWebContents(
					e.webContents,
				), a.openDevTools({ mode: "detach" }), i > r ? (
					p = 0, i = 0, r += 20, n -= r
				) : (x = 0, r = 0, f -= i), e.setPosition(i, r), t.setPosition(x, p), e.setSize(
					f,
					n,
				), t.focus()
			)
		);
	};
var An = () => {
	b.globalShortcut.register(
		"CmdOrCtrl+Alt+I",
		() => Rr(b.BrowserWindow.getFocusedWindow()),
	);
},
	Je = (t) => {
		b.BrowserWindow
			.getAllWindows()
			.forEach(
				(e) => {
					var r, n;
					if (n = e.webContents.getURL(), n) {
						if ({ hash: r } = new URL(n), r = r.slice(1), r.startsWith("main")) {
							t ? (
								e[t](), t === "show" && e.once(
									"show",
									() => {
										e.setAlwaysOnTop(!0, "screen-saver"), setTimeout(
											() => e.setAlwaysOnTop(!1, "screen-saver"),
											1e3,
										);
									},
								)
							) : e.hide();
							return;
						}
						if (r.startsWith("camera")) {
							return;
						}
					}
					ce(e);
				},
			);
	},
	En = () => {
		b.BrowserWindow
			.getAllWindows()
			.forEach(
				(t) => {
					var e, r;
					if (
						r = t.webContents.getURL(), r && (
							{ hash: e } = new URL(r), e = e.slice(1), e.startsWith("main")
						)
					) {
						t.hide();
						return;
					}
					ce(t);
				},
			);
	},
	zr,
	He,
	Cr,
	ue,
	A,
	St;
({ camera: Cr } = ye);
A = void 0;
ue = void 0;
zr = 204;
var $r = () => {
	A && !A.isDestroyed() && A.getSize()[0] !== 800 && (ue = A.getPosition()), ce(
		A,
	);
},
	In = (t) => {
		var e, r;
		r = A.getSize()[0], r !== t && (
			ue = A.getPosition(), e = Math.round((t - r) / 2), A.setBounds({
				x: ue[0] - e,
				y: ue[1] - e,
				width: t,
				height: t,
			})
		);
	};
He = !1;
var Lr = () => St(800, 500),
	jn = St =
		(t, e) => {
			(A && !A.isDestroyed()) || (
				A =
					Cr({
						width: t,
						height: e,
						center: !0,
						roundedCorners: !1,
						resizable: !1,
						transparent: !0,
					}), He && _t()
			);
		},
	Dn = (t) => {
		var e, r, n, i, a;
		(A && !A.isDestroyed()) || (
			t = t || zr, St(t, t), ue ? [e, r] = ue : (
				{ width: a, height: n } = b.screen.getPrimaryDisplay().size, i = 62, e =
					i, r = n - i - t
			), A.setPosition(e, r)
		);
	},
	Rn = () => {
		$r(), Lr();
	},
	_t = () => {
		A &&
			!A.isDestroyed() &&
			(
				A.setAlwaysOnTop(!0, "pop-up-menu"), A.setVisibleOnAllWorkspaces(
					!0,
					{ visibleOnFullScreen: !0 },
				)
			), He = !0;
	},
	Fr = () => {
		A &&
			!A.isDestroyed() &&
			(A.setAlwaysOnTop(!1), A.setVisibleOnAllWorkspaces(!1)), He = !1;
	},
	zn = Object.freeze(
		Object.defineProperty(
			{
				__proto__: null,
				x: $r,
				size: In,
				rect: Lr,
				default: jn,
				circle: Dn,
				x_rect: Rn,
				top: _t,
				untop: Fr,
			},
			Symbol.toStringTag,
			{ value: "Module" },
		),
	),
	Ot = new Proxy(
		{},
		{
			get: (t, e) => () => {
				var r, n, i;
				return (
					{ width: n, height: r } = b.screen.getPrimaryDisplay().size, i =
						ye[e]({
							width: n,
							height: r,
							roundedCorners: !1,
							transparent: !0,
							resizable: !1,
							hasShadow: !1,
						}), i.setAlwaysOnTop(!0, "screen-saver"), i.setPosition(0, 0), i.setVisibleOnAllWorkspaces(
						!0,
						{ visibleOnFullScreen: !0 },
					), i
				);
			},
		},
	),
	he = {},
	kt = {},
	Cn = require(
		"/Users/z/git/rv/desk/node_modules/.pnpm/extract-file-icon@0.3.2/node_modules/extract-file-icon/build/Release/addon.node",
	),
	$n = Object.freeze(
		Object.defineProperty(
			{ __proto__: null, default: Cn },
			Symbol.toStringTag,
			{ value: "Module" },
		),
	),
	Ln = ir($n);
const Yt = $e.default;
let ot;
(Yt.platform() === "win32" || Yt.platform() === "darwin") && (ot = Ln.getIcon);
const Fn = (t, e = 64) => {
	if (!!ot) {
		return ot(t, e);
	}
};
var qn = Fn, Ze = {};
Object.defineProperty(Ze, "__esModule", { value: !0 });
const ee = he,
	Vn = $e.default,
	et = (t) => {
		if (!(!ee.addon || !ee.addon.getMonitorInfo)) {
			return ee.addon.getMonitorInfo(t);
		}
	};
class Nn {
	constructor(e) {
		this.id = e;
	}
	getBounds() {
		return et(this.id).bounds;
	}
	getWorkArea() {
		return et(this.id).workArea;
	}
	isPrimary() {
		return et(this.id).isPrimary;
	}
	getScaleFactor() {
		if (!ee.addon || !ee.addon.getMonitorScaleFactor) {
			return;
		}
		const e = Vn.release().split(".").map((r) => parseInt(r, 10));
		return e[0] > 8 || (e[0] === 8 && e[1] >= 1) ? ee.addon.getMonitorScaleFactor(
			this.id,
		) : 1;
	}
	isValid() {
		return ee.addon && ee.addon.getMonitorInfo;
	}
}
Ze.Monitor = Nn;
var Ke = {};
Object.defineProperty(Ke, "__esModule", { value: !0 });
class Jn {
	getBounds() {
		return { x: 0, y: 0, width: 0, height: 0 };
	}
	getWorkArea() {
		return { x: 0, y: 0, width: 0, height: 0 };
	}
	isPrimary() {
		return !1;
	}
	getScaleFactor() {
		return 1;
	}
	isValid() {
		return !1;
	}
}
Ke.EmptyMonitor = Jn;
var Hn = (De && De.__importDefault) || function (t) {
	return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(kt, "__esModule", { value: !0 });
const g = he, Zn = Hn(qn), Kn = Ze, Gn = Ke;
class Ce {
	constructor(e) {
		if (!g.addon) {
			return;
		}
		this.id = e;
		const { processId: r, path: n } = g.addon.initWindow(e);
		this.processId = r, this.path = n;
	}
	getBounds() {
		if (!g.addon) {
			return;
		}
		const e = g.addon.getWindowBounds(this.id);
		if (process.platform === "win32") {
			const r = this.getMonitor().getScaleFactor();
			e.x = Math.floor(e.x / r), e.y = Math.floor(e.y / r), e.width =
				Math.floor(e.width / r), e.height = Math.floor(e.height / r);
		}
		return e;
	}
	setBounds(e) {
		if (!g.addon) {
			return;
		}
		const r = Object.assign(Object.assign({}, this.getBounds()), e);
		if (process.platform === "win32") {
			const n = this.getMonitor().getScaleFactor();
			r.x = Math.floor(r.x * n), r.y = Math.floor(r.y * n), r.width =
				Math.floor(r.width * n), r.height = Math.floor(r.height * n), g.addon.setWindowBounds(
				this.id,
				r,
			);
		} else {
			process.platform === "darwin" && g.addon.setWindowBounds(this.id, r);
		}
	}
	getTitle() {
		if (!!g.addon) {
			return g.addon.getWindowTitle(this.id);
		}
	}
	getMonitor() {
		return !g.addon || !g.addon.getMonitorFromWindow ? new Gn.EmptyMonitor() : new Kn.Monitor(
			g.addon.getMonitorFromWindow(this.id),
		);
	}
	show() {
		!g.addon || !g.addon.showWindow || g.addon.showWindow(this.id, "show");
	}
	hide() {
		!g.addon || !g.addon.showWindow || g.addon.showWindow(this.id, "hide");
	}
	minimize() {
		!g.addon || (
			process.platform === "win32" ? g.addon.showWindow(this.id, "minimize") : process.platform === "darwin" && g.addon.setWindowMinimized(
				this.id,
				!0,
			)
		);
	}
	restore() {
		!g.addon || (
			process.platform === "win32" ? g.addon.showWindow(this.id, "restore") : process.platform === "darwin" && g.addon.setWindowMinimized(
				this.id,
				!1,
			)
		);
	}
	maximize() {
		!g.addon || (
			process.platform === "win32" ? g.addon.showWindow(this.id, "maximize") : process.platform === "darwin" && g.addon.setWindowMaximized(
				this.id,
			)
		);
	}
	bringToTop() {
		!g.addon || (
			process.platform === "darwin" ? g.addon.bringWindowToTop(
				this.id,
				this.processId,
			) : g.addon.bringWindowToTop(this.id)
		);
	}
	redraw() {
		!g.addon || !g.addon.redrawWindow || g.addon.redrawWindow(this.id);
	}
	isWindow() {
		if (!!g.addon) {
			if (process.platform === "win32") {
				return this.path && this.path !== "" && g.addon.isWindow(this.id);
			}
			if (process.platform === "darwin") {
				return this.path && this.path !== "" && !!g.addon.initWindow(this.id);
			}
		}
	}
	isVisible() {
		return !g.addon || !g.addon.isWindowVisible ? !0 : g.addon.isWindowVisible(
			this.id,
		);
	}
	toggleTransparency(e) {
		!g.addon ||
			!g.addon.toggleWindowTransparency ||
			g.addon.toggleWindowTransparency(this.id, e);
	}
	setOpacity(e) {
		!g.addon ||
			!g.addon.setWindowOpacity ||
			g.addon.setWindowOpacity(this.id, e);
	}
	getOpacity() {
		return !g.addon || !g.addon.getWindowOpacity ? 1 : g.addon.getWindowOpacity(
			this.id,
		);
	}
	getIcon(e = 64) {
		return Zn.default(this.path, e);
	}
	setOwner(e) {
		if (!g.addon || !g.addon.setWindowOwner) {
			return;
		}
		let r = e;
		e instanceof Ce ? r = e.id : e || (r = 0), g.addon.setWindowOwner(
			this.id,
			r,
		);
	}
	getOwner() {
		if (!(!g.addon || !g.addon.getWindowOwner)) {
			return new Ce(g.addon.getWindowOwner(this.id));
		}
	}
}
kt.Window = Ce;
var Xn = require(
	"/Users/z/git/rv/desk/node_modules/.pnpm/@rmw+node-window-manager@2.2.6/node_modules/@rmw/node-window-manager/build/Release/addon.node",
),
	Yn = Object.freeze(
		Object.defineProperty(
			{ __proto__: null, default: Xn },
			Symbol.toStringTag,
			{ value: "Module" },
		),
	),
	Qn = ir(Yn),
	ei = (De && De.__awaiter) || function (t, e, r, n) {
		function i(a) {
			return a instanceof r ? a : new r(function (f) {
				f(a);
			});
		}
		return new (r || (r = Promise))(
			function (a, f) {
				function x(_) {
					try {
						S(n.next(_));
					} catch (m) {
						f(m);
					}
				}
				function p(_) {
					try {
						S(n.throw(_));
					} catch (m) {
						f(m);
					}
				}
				function S(_) {
					_.done ? a(_.value) : i(_.value).then(x, p);
				}
				S((n = n.apply(t, e || [])).next());
			},
		);
	};
Object.defineProperty(he, "__esModule", { value: !0 });
const Ie = kt;
he.Window = Ie.Window;
const ti = an.default, Qt = $e.default, ri = Ze, ni = Ke;
let C;
he.addon = C;
(Qt.platform() === "win32" || Qt.platform() === "darwin") && (he.addon = C = Qn);
let er = null, Pe = [];
class ii extends ti.EventEmitter {
	constructor() {
		super();
		this.requestAccessibility =
			() => !C || !C.requestAccessibility ? !0 : C.requestAccessibility(), this.getActiveWindow =
			() => {
				if (!!C) {
					return new Ie.Window(C.getActiveWindow());
				}
			}, this.getWindows =
			() =>
				!C || !C.getWindows ? [] : C.getWindows().map((r) => new Ie.Window(r)).filter(
					(r) => r.isWindow(),
				), this.getMonitors =
			() =>
				!C || !C.getMonitors ? [] : C.getMonitors().map(
					(r) => new ri.Monitor(r),
				), this.getPrimaryMonitor =
			() =>
				process.platform === "win32" ? this.getMonitors().find(
					(r) => r.isPrimary,
				) : new ni.EmptyMonitor(), this.createProcess =
			(r, n = "") => {
				if (!(!C || !C.createProcess)) {
					return C.createProcess(r, n);
				}
			};
		let e;
		!C || (
			this.on(
				"newListener",
				(r) => {
					if (
						r === "window-activated" && (e = C.getActiveWindow()), Pe.indexOf(r) === -1
					) {
						if (r === "window-activated") {
							er =
								setInterval(
									() =>
										ei(
											this,
											void 0,
											void 0,
											function* () {
												const n = C.getActiveWindow();
												e !== n && (
													e = n, this.emit("window-activated", new Ie.Window(n))
												);
											},
										),
									50,
								);
						} else {
							return;
						}
						Pe.push(r);
					}
				},
			), this.on(
				"removeListener",
				(r) => {
					this.listenerCount(r) > 0 || (
						r === "window-activated" && clearInterval(er), Pe =
							Pe.filter((n) => n !== r)
					);
				},
			)
		);
	}
}
const si = new ii();
var qr = he.windowManager = si, Mt, ne, at, Tt, Vr, Nr, Jr, Hr, D;
({ recbar: Hr } = ye);
D = void 0;
ne = void 0;
({ draw: Jr } = Ot);
var oi = () => {
	ne || (ne = Jr(), ne.on("close", () => ne = void 0), Zr());
},
	Zr = () => {
		ke(), ne.focus();
	},
	ai = () => {
		ce(ne), ne = void 0;
	};
at =
	[
		"CommandOrControl+R",
		"CommandOrControl+W",
		"CommandOrControl+Q",
		"Alt+F4",
		"F5",
	];
Mt =
	{
		"browser-window-focus": () => {
			var t;
			for (t of at) b.globalShortcut.register(t, () => {});
		},
		"browser-window-blur": () => {
			var t;
			for (t of at) b.globalShortcut.unregister(t, () => {});
		},
	};
var Ut = (t) => {
	var e;
	return (t === "camera" ? e = 500 : e = 600, Vr(e));
};
Vr =
	(t) => {
		var e, r, n, i, a, f, x, p;
		a = Object.entries(Mt);
		for (p of a) [n, e] = p, b.app.on(n, e);
		return (
			Pn(), r = 48, i =
				{
					roundedCorners: !1,
					transparent: !0,
					resizable: !1,
					width: t,
					height: r,
				}, D = Hr(i), D.on("close", () => D = void 0), { width: x, height: f } =
				b.screen.getPrimaryDisplay().workArea, D.setBounds({
				x: Math.round((x - t) / 2),
				y: f - 28 - r,
				width: t,
				height: r,
			}), ke(), _t(), new Promise(
				(S) =>
					D.webContents.on(
						"did-finish-load",
						() => {
							ke(), D.focus(), S(D);
						},
					),
			)
		);
	};
var ke = () => {
	D && (D.setAlwaysOnTop(!0, "screen-saver"), D.moveTop());
},
	li = () => {
		var t, e, r, n, i;
		n = D.getPosition(), [r, e] = D.getSize(), [i, t] = D.size, D.setBounds({
			x: n[0] + r - i,
			y: n[1],
			width: i,
			height: t,
		});
	},
	fi = () => {
		var t, e, r, n;
		e = D.getPosition(), D.size = r = D.getSize(), n = 162, t = 48, D.setBounds({
			x: e[0] + r[0] - n,
			y: e[1],
			width: n,
			height: t,
		});
	};
Tt =
	() => {
		var t, e, r, n;
		r = Object.entries(Mt);
		for (n of r) [e, t] = n, b.app.off(e, t);
		Dr(), Fr();
	};
var ui = () => {
	Tt(), Je("show");
},
	di = () => {
		Tt(), Je();
	},
	ci = () => {
		D.hide();
	};
Nr =
	(...t) =>
		b.desktopCapturer.getSources({
			types: t,
			thumbnailSize: { width: 0, height: 0 },
		});
var hi = async () => {
	var t, e;
	e = await Nr("screen");
	for (t of e) return t.id;
},
	wi = async () => {
		var t, e, r, n, i, a, f, x, p, S, _, m, U, T, I, j;
		p = b.screen.getAllDisplays();
		for (n of p) if ({ bounds: t } = n, t.x === 0) {
			break;
		}
		({ scaleFactor: m } = b.screen.getPrimaryDisplay()), a = new Map(), S =
			await b.desktopCapturer.getSources({
				types: ["window"],
				fetchWindowIcons: !1,
				thumbnailSize: { width: 320 * m, height: 180 * m },
			});
		for (n of S) a.set(
			Math.floor(n.id.split(":")[1]),
			[n.thumbnail.toDataURL(), n.name],
		);
		x = [], _ = qr.getWindows();
		for (n of _) if (
			{ id: i } = n, !process.execPath.startsWith(n.path) && (f = a.get(i), f)
		) {
			if (
				{ x: I, y: j, width: T, height: r } = n.getBounds(), (
					(I + T) <= 0 && I <= 0
				) ||
					((I + T) > t.width && I > t.width) ||
					((j + r) <= 0 && j <= 0) ||
					((j + r) > t.height && j > t.height)
			) {
				continue;
			}
			U = t.width - I, T > U && (T = U), e = t.height - j, r > e && (r = e), I < 0 && (
				I = 0
			), j < 0 && (j = 0), x.push(f.concat([i, I, j, T, r]));
		}
		return x;
	},
	xi = (t) => {
		b.BrowserWindow
			.getAllWindows()
			.forEach(
				(e) => {
					var r;
					if (
						{ hash: r } = new URL(e.webContents.getURL()), !t && r.slice(1) === "camera"
					) {
						ce(e);
						return;
					}
					return e.hide();
				},
			);
	},
	pi = Object.freeze(
		Object.defineProperty(
			{
				__proto__: null,
				draw: oi,
				draw_top: Zr,
				draw_x: ai,
				工具条: Ut,
				top: ke,
				expand: li,
				left: fi,
				cancel: ui,
				end: di,
				hide: ci,
				screen_source: hi,
				win_source: wi,
				stop: xi,
			},
			Symbol.toStringTag,
			{ value: "Module" },
		),
	),
	Kr,
	K;
({ count_down: Kr } = ye);
K = void 0;
var Gr = () => {
	var t;
	if (K) {
		K.focus();
		return;
	}
	t = 240, K =
		Kr({ width: t, height: t, transparent: !0, resizable: !1, hasShadow: !1 }), K.on(
		"close",
		() => {
			K = void 0;
		},
	), K.setAlwaysOnTop(!0, "screen-saver"), K.on(
		"show",
		() => {
			var e, r;
			r = b.BrowserWindow.getAllWindows();
			for (e of r) e.webContents.getURL().endsWith("/#main") || e.setVisibleOnAllWorkspaces(
				!0,
				{ visibleOnFullScreen: !0 },
			);
		},
	);
},
	gi = {
		hide: () => {
			K != null && K.hide();
		},
		close: () => {
			K != null && K.close(), ke();
		},
	};
var Me, Bt, Wt, Pt, At;
Me = Wt = Bt = void 0;
Pt =
	() => {
		Bt =
			new Promise(
				(t) => {
					Wt = t;
				},
			);
	};
Pt();
At =
	(t) => {
		Me.once(
			"closed",
			() => {
				Wt(t), Pt();
			},
		), ce(Me);
	};
var yi = () => {
	At(!0);
},
	mi = () => {
		At(!1);
	},
	vi = (t) => (
		Me =
			Ot["confirm_" + t]({
				width: 275,
				height: 190,
				modal: !0,
				isAlwaysOnTop: !0,
				visibleOnAllWorkspaces: !0,
			}), Me.setAlwaysOnTop(!0, "screen-saver"), Bt
	),
	bi = Object.freeze(
		Object.defineProperty(
			{ __proto__: null, y: yi, n: mi, show: vi },
			Symbol.toStringTag,
			{ value: "Module" },
		),
	),
	Si = (t) => {
		ar.ID = t;
	},
	_i = Object.freeze(
		Object.defineProperty(
			{ __proto__: null, ID: Si },
			Symbol.toStringTag,
			{ value: "Module" },
		),
	),
	Oi = function () {
		var t, e, r;
		return (
			r = this.sender.getOwnerBrowserWindow(), e = r.getBounds(), t =
				(n) => {
					var i, a;
					if (a = r[n], i = e[n], a && i > a && (i - a) < 3) {
						e[n] = a;
						return;
					}
					r[n] = i;
				}, ["height", "width"].map(t), e
		);
	},
	ki = function (t, e, r, n) {
		var i;
		i = this.sender.getOwnerBrowserWindow(), i.setBounds({
			x: Math.round(t),
			y: Math.round(e),
			width: r,
			height: n,
		});
	},
	Mi = Object.freeze(
		Object.defineProperty(
			{ __proto__: null, getBounds: Oi, setBounds: ki },
			Symbol.toStringTag,
			{ value: "Module" },
		),
	);
var Xr, Et, It, de, Yr;
({ area: Xr, win_area: Yr } = Ot);
de = void 0;
var Ti = (t) => {
	var e, r;
	de.setAlwaysOnTop(!1), r = qr.getWindows();
	for (e of r) if (t === e.id) {
		e.bringToTop();
		break;
	}
	It();
};
It =
	() => {
		de.setAlwaysOnTop(!0, "screen-saver");
	};
Et =
	(t) => {
		de = t(), It(), de.on("close", () => de = void 0);
	};
var Ui = () => Et(Yr),
	Bi = () => Et(Xr),
	Wi = () => {
		Ut(), de.setIgnoreMouseEvents(!0, { forward: !0 }), Gr();
	},
	Pi = () => {
		var t, e;
		return ({ x: t, y: e } = b.screen.getCursorScreenPoint(), [t, e]);
	};
function Ai(t, e, r, n) {
	var i;
	if (i = t === "camera", !i && n) {
		[Ui, Bi][n - 1]();
		return;
	} else {
		Gr();
	}
	Ut(t);
}
var Ei = (t, e, r, n) => {
	Je(), Ai(t, e, r, n);
},
	Ii = (t) => {
		b.shell.openExternal(t);
	},
	ji = () => rr.ROOT,
	Di = Object.freeze(
		Object.defineProperty(
			{
				__proto__: null,
				userData: ji,
				close: Je,
				x: En,
				count_down: gi,
				confirm: bi,
				auto_update: Bn,
				recbar: pi,
				USER: _i,
				camera: zn,
				drag: Mi,
				area: Wi,
				wintop: Ti,
				main: pe,
				mouse: Pi,
				rec: Ei,
				open: Ii,
			},
			Symbol.toStringTag,
			{ value: "Module" },
		),
	);
process.on(
	"exit",
	() => {
		b.app.quit();
	},
);
b.app.requestSingleInstanceLock() || (b.app.quit(), process.exit(0));
(async () => {
	var t;
	t =
		await Promise
			.resolve()
			.then(function () {
				return require("./h.js");
			}), t.init({
		dsn: "https://54c0fbe278e049c8a9635fc0fa612836@sentry.dalukuankuan.com/6",
	});
})();
b.app.commandLine.appendSwitch("webrtc-max-cpu-consumption-percentage", "100");
b.app.commandLine.appendSwitch(
	"js-flags",
	"--expose_gc --max-old-space-size=512",
);
(() => {
	var t, e, r, n, i, a;
	pe(), (r = b.app.dock) != null && r.hide(), t =
		(f, x) => {
			var p, S, _, m;
			(x instanceof Function) && b.ipcMain.handle(
				f.join("."),
				(U, T) => x.apply(U, T),
			), _ = Object.entries(x);
			for (m of _) [S, p] = m, t([...f, S], p);
		}, n = Object.entries(Di);
	for (a of n) [e, i] = a, t([e], i);
	Dr(), An();
})();
fn(
	b.app,
	{
		"second-instance": () => {
			var t;
			t = !0, b.BrowserWindow
				.getAllWindows()
				.forEach(
					(e) => {
						var r, n;
						n = e.webContents.getURL();
						try {
							({ hash: r } = new URL(n));
						} catch {
							return;
						}
						r.startsWith("#recbar") && (t = !1);
					},
				), t && pe();
		},
		activate: pe,
	},
);
