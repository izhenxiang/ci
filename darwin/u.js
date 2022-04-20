"use strict";
var en = Object.defineProperty;
var Rt = Object.getOwnPropertySymbols;
var tn = Object.prototype.hasOwnProperty,
	rn = Object.prototype.propertyIsEnumerable;
var Ct = (t, e, r) =>
	e in t ? en(
		t,
		e,
		{ enumerable: !0, configurable: !0, writable: !0, value: r },
	) : t[e] = r,
	$t = (t, e) => {
		for (var r in e || (e = {})) tn.call(e, r) && Ct(t, r, e[r]);
		if (Rt) {
			for (var r of Rt(e)) rn.call(e, r) && Ct(t, r, e[r]);
		}
		return t;
	};
var b = require("electron"),
	nn = require("os"),
	re = require("fs"),
	H = require("path"),
	sn = require("crypto"),
	rr = require("zlib"),
	on = require("util"),
	oe = require("./b.js"),
	Se = require("fs/promises"),
	ze = require("./x.js"),
	nr = require("./y.js"),
	an = require("events");
function ir(t) {
	return t && typeof t == "object" && ("default" in t) ? t : { default: t };
}
var Le = ir(nn),
	ln = ir(an),
	De = typeof globalThis != "undefined"
		? globalThis
		: typeof window != "undefined"
			? window
			: typeof global != "undefined"
				? global
				: typeof self != "undefined"
					? self
					: {};
function sr(t) {
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
var fn = "darwin",
	he = (t) => {
		if (!!t && !t.isDestroyed()) {
			t.close();
			try {
				t.destroy();
			} catch {}
		}
	},
	un = (t, e) => {
		var r, n;
		for (r in e) n = e[r], t.on(r, n);
		return t;
	};
dt = ut = ft = __dirname;
var ft = ft, ut = ut, dt = dt, Ye, or;
Ye = "127.0.0.1", or = "http://" + Ye, b.session.defaultSession.protocol.interceptStreamProtocol(
	"http",
	(t, e) => {
		var r, n, i, a, f, x, p, S, _;
		if (_ = new URL(t.url), _.host === Ye) {
			({ pathname: f } = _), f === "/" && (f += ".htm"), S =
				f.slice(f.lastIndexOf(".") + 1), S.startsWith("htm") ? a = "text/html" : a =
				{
					js: "text/javascript",
					css: "text/css",
					svg: "image/svg+xml",
					woff2: "font/woff2",
				}[S] || "application/octet-stream", n = re.createReadStream(ut + f), e({
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
						var T, k;
						({ headers: T, statusCode: k } = m), e({ data: m }, T, k);
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
var me = new Proxy(
	{},
	{
		get: (t, e) => (r) => {
			var n;
			return (
				r =
					$t(
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
							webPreferences: { preload: H.join(ft, "q.js"), webSecurity: !1 },
						},
						r,
					), n = new b.BrowserWindow(r), n.setMenu(null), e !== "main" && n.setVisibleOnAllWorkspaces(
					!0,
					{ visibleOnFullScreen: !0 },
				), n.loadURL(or + "#" + e), n.once("ready-to-show", () => n.show()), n.focus(), n
			);
		},
	},
),
	ar;
({ main: ar } = me);
var ge = (t = !0) => {
	var e, r, n;
	if (r = b.BrowserWindow.getAllWindows(), r.length) {
		for (e of r) if (e.webContents.getURL().endsWith("/#main")) {
			n = e, n.isMinimized() && n.restore();
			break;
		}
	}
	n || (
		n =
			ar({ type: "", resizable: !1, height: 590, width: 426, skipTaskbar: !1 })
	), !(!t && !n.isVisible()) && (n.show(), n.moveTop(), n.focus());
},
	lr = { ID: "" },
	rt;
try {
	rt = new TextDecoder();
} catch {}
var h,
	se,
	s = 0,
	q = {},
	M,
	ne,
	J = 0,
	X = 0,
	L,
	ee,
	V = [],
	W,
	Lt = { useRecords: !1, mapsAsObjects: !0 };
class fr {}
const ur = new fr();
ur.name = "MessagePack 0xC1";
var ye = !1, dr = 2;
try {
	new Function("");
} catch {
	dr = 1 / 0;
}
class _e {
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
			return gr(
				() => (
					it(), this ? this.unpack(e, r) : _e.prototype.unpack.call(Lt, e, r)
				),
			);
		}
		se = r > -1 ? r : e.length, s = 0, X = 0, ne = null, L = null, h = e;
		try {
			W =
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
		if (this instanceof _e) {
			if (q = this, this.structures) {
				return (M = this.structures, Ue());
			}
			(!M || M.length > 0) && (M = []);
		} else {
			q = Lt, (!M || M.length > 0) && (M = []);
		}
		return Ue();
	}
	unpackMultiple(e, r) {
		let n, i = 0;
		try {
			ye = !0;
			let a = e.length, f = this ? this.unpack(e, a) : Fe.unpack(e, a);
			if (r) {
				for (r(f); s < a; ) if (i = s, r(Ue()) === !1) {
					return;
				}
			} else {
				for (n = [f]; s < a; ) i = s, n.push(Ue());
				return n;
			}
		} catch (a) {
			throw a.lastPosition = i, a.values = n, a;
		} finally {
			ye = !1, it();
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
function Ue() {
	try {
		if (!q.trusted && !ye) {
			let e = M.sharedLength || 0;
			e < M.length && (M.length = e);
		}
		let t = z();
		if (L && (s = L.postBundlePosition), s == se) {
			M.restoreStructures && Ft(), M = null, h = null, ee && (ee = null);
		} else if (s > se) {
			let e = new Error("Unexpected end of MessagePack data");
			throw e.incomplete = !0, e;
		} else if (!ye) {
			throw new Error("Data read, but end of buffer not reached");
		}
		return t;
	} catch (t) {
		throw M.restoreStructures && Ft(), it(), (
			(t instanceof RangeError) || t.message.startsWith(
				"Unexpected end of buffer",
			)
		) && (t.incomplete = !0), t;
	}
}
function Ft() {
	for (let t in M.restoreStructures) M[t] = M.restoreStructures[t];
	M.restoreStructures = null;
}
function z() {
	let t = h[s++];
	if (t < 160) {
		if (t < 128) {
			if (t < 64) {
				return t;
			}
			{
				let e = M[t & 63] || (q.getStructures && cr()[t & 63]);
				return e ? (e.read || (e.read = ct(e, t & 63)), e.read()) : t;
			}
		} else if (t < 144) {
			if (t -= 128, q.mapsAsObjects) {
				let e = {};
				for (let r = 0; r < t; r++) e[wr()] = z();
				return e;
			} else {
				let e = new Map();
				for (let r = 0; r < t; r++) e.set(z(), z());
				return e;
			}
		} else {
			t -= 144;
			let e = new Array(t);
			for (let r = 0; r < t; r++) e[r] = z();
			return e;
		}
	} else if (t < 192) {
		let e = t - 160;
		if (X >= s) {
			return ne.slice(s - J, (s += e) - J);
		}
		if (X == 0 && se < 140) {
			let r = e < 16 ? ht(e) : hr(e);
			if (r != null) {
				return r;
			}
		}
		return nt(e);
	} else {
		let e;
		switch (t) {
			case 192:
				return null;
			case 193:
				return L ? (
					e = z(), e > 0 ? L[1].slice(L.position1, L.position1 += e) : L[0].slice(
						L.position0,
						L.position0 -= e,
					)
				) : ur;
			case 194:
				return !1;
			case 195:
				return !0;
			case 196:
				return Qe(h[s++]);
			case 197:
				return (e = W.getUint16(s), s += 2, Qe(e));
			case 198:
				return (e = W.getUint32(s), s += 4, Qe(e));
			case 199:
				return ue(h[s++]);
			case 200:
				return (e = W.getUint16(s), s += 2, ue(e));
			case 201:
				return (e = W.getUint32(s), s += 4, ue(e));
			case 202:
				if (e = W.getFloat32(s), q.useFloat32 > 2) {
					let r = wt[(h[s] & 127) << 1 | h[s + 1] >> 7];
					return (s += 4, ((r * e) + (e > 0 ? .5 : -.5) >> 0) / r);
				}
				return (s += 4, e);
			case 203:
				return (e = W.getFloat64(s), s += 8, e);
			case 204:
				return h[s++];
			case 205:
				return (e = W.getUint16(s), s += 2, e);
			case 206:
				return (e = W.getUint32(s), s += 4, e);
			case 207:
				return (
					q.int64AsNumber ? (
						e = W.getUint32(s) * 4294967296, e += W.getUint32(s + 4)
					) : e = W.getBigUint64(s), s += 8, e
				);
			case 208:
				return W.getInt8(s++);
			case 209:
				return (e = W.getInt16(s), s += 2, e);
			case 210:
				return (e = W.getInt32(s), s += 4, e);
			case 211:
				return (
					q.int64AsNumber ? (
						e = W.getInt32(s) * 4294967296, e += W.getUint32(s + 4)
					) : e = W.getBigInt64(s), s += 8, e
				);
			case 212:
				if (e = h[s++], e == 114) {
					return Zt(h[s++] & 63);
				}
				{
					let r = V[e];
					if (r) {
						return r.read
							? (s++, r.read(z()))
							: r.noBuffer
								? (s++, r())
								: r(h.subarray(s, ++s));
					}
					throw new Error("Unknown extension " + e);
				}
			case 213:
				return (e = h[s], e == 114 ? (s++, Zt(h[s++] & 63, h[s++])) : ue(2));
			case 214:
				return ue(4);
			case 215:
				return ue(8);
			case 216:
				return ue(16);
			case 217:
				return (e = h[s++], X >= s ? ne.slice(s - J, (s += e) - J) : cn(e));
			case 218:
				return (
					e = W.getUint16(s), s += 2, X >= s ? ne.slice(s - J, (s += e) - J) : hn(
						e,
					)
				);
			case 219:
				return (
					e = W.getUint32(s), s += 4, X >= s ? ne.slice(s - J, (s += e) - J) : wn(
						e,
					)
				);
			case 220:
				return (e = W.getUint16(s), s += 2, Vt(e));
			case 221:
				return (e = W.getUint32(s), s += 4, Vt(e));
			case 222:
				return (e = W.getUint16(s), s += 2, Nt(e));
			case 223:
				return (e = W.getUint32(s), s += 4, Nt(e));
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
const dn = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;
function ct(t, e) {
	function r() {
		if (r.count++ > dr) {
			let i = t.read =
				new Function(
					"r",
					"return function(){return {" +
						t
							.map(
								(a) =>
									dn.test(a) ? a + ":r()" : "[" + JSON.stringify(a) + "]:r()",
							)
							.join(",") +
						"}}",
				)(z);
			return (t.highByte === 0 && (t.read = qt(e, t.read)), i());
		}
		let n = {};
		for (let i = 0, a = t.length; i < a; i++) {
			let f = t[i];
			n[f] = z();
		}
		return n;
	}
	return (r.count = 0, t.highByte === 0 ? qt(e, r) : r);
}
const qt = (t, e) => function () {
	let r = h[s++];
	if (r === 0) {
		return e();
	}
	let n = t < 32 ? -(t + (r << 5)) : t + (r << 5), i = M[n] || cr()[n];
	if (!i) {
		throw new Error("Record id is not defined for " + n);
	}
	return (i.read || (i.read = ct(i, t)), i.read());
};
function cr() {
	let t = gr(() => (h = null, q.getStructures()));
	return M = q._mergeStructures(t, M);
}
var nt = Te, cn = Te, hn = Te, wn = Te;
function Te(t) {
	let e;
	if (t < 16 && (e = ht(t))) {
		return e;
	}
	if (t > 64 && rt) {
		return rt.decode(h.subarray(s, s += t));
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
		n.length >= 4096 && (e += C.apply(String, n), n.length = 0);
	}
	return (n.length > 0 && (e += C.apply(String, n)), e);
}
function Vt(t) {
	let e = new Array(t);
	for (let r = 0; r < t; r++) e[r] = z();
	return e;
}
function Nt(t) {
	if (q.mapsAsObjects) {
		let e = {};
		for (let r = 0; r < t; r++) e[wr()] = z();
		return e;
	} else {
		let e = new Map();
		for (let r = 0; r < t; r++) e.set(z(), z());
		return e;
	}
}
var C = String.fromCharCode;
function hr(t) {
	let e = s, r = new Array(t);
	for (let n = 0; n < t; n++) {
		const i = h[s++];
		if ((i & 128) > 0) {
			s = e;
			return;
		}
		r[n] = i;
	}
	return C.apply(String, r);
}
function ht(t) {
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
				return C(e);
			}
		} else {
			let e = h[s++], r = h[s++];
			if ((e & 128) > 0 || (r & 128) > 0) {
				s -= 2;
				return;
			}
			if (t < 3) {
				return C(e, r);
			}
			let n = h[s++];
			if ((n & 128) > 0) {
				s -= 3;
				return;
			}
			return C(e, r, n);
		}
	} else {
		let e = h[s++], r = h[s++], n = h[s++], i = h[s++];
		if ((e & 128) > 0 || (r & 128) > 0 || (n & 128) > 0 || (i & 128) > 0) {
			s -= 4;
			return;
		}
		if (t < 6) {
			if (t === 4) {
				return C(e, r, n, i);
			}
			{
				let a = h[s++];
				if ((a & 128) > 0) {
					s -= 5;
					return;
				}
				return C(e, r, n, i, a);
			}
		} else if (t < 8) {
			let a = h[s++], f = h[s++];
			if ((a & 128) > 0 || (f & 128) > 0) {
				s -= 6;
				return;
			}
			if (t < 7) {
				return C(e, r, n, i, a, f);
			}
			let x = h[s++];
			if ((x & 128) > 0) {
				s -= 7;
				return;
			}
			return C(e, r, n, i, a, f, x);
		} else {
			let a = h[s++], f = h[s++], x = h[s++], p = h[s++];
			if ((a & 128) > 0 || (f & 128) > 0 || (x & 128) > 0 || (p & 128) > 0) {
				s -= 8;
				return;
			}
			if (t < 10) {
				if (t === 8) {
					return C(e, r, n, i, a, f, x, p);
				}
				{
					let S = h[s++];
					if ((S & 128) > 0) {
						s -= 9;
						return;
					}
					return C(e, r, n, i, a, f, x, p, S);
				}
			} else if (t < 12) {
				let S = h[s++], _ = h[s++];
				if ((S & 128) > 0 || (_ & 128) > 0) {
					s -= 10;
					return;
				}
				if (t < 11) {
					return C(e, r, n, i, a, f, x, p, S, _);
				}
				let m = h[s++];
				if ((m & 128) > 0) {
					s -= 11;
					return;
				}
				return C(e, r, n, i, a, f, x, p, S, _, m);
			} else {
				let S = h[s++], _ = h[s++], m = h[s++], T = h[s++];
				if ((S & 128) > 0 || (_ & 128) > 0 || (m & 128) > 0 || (T & 128) > 0) {
					s -= 12;
					return;
				}
				if (t < 14) {
					if (t === 12) {
						return C(e, r, n, i, a, f, x, p, S, _, m, T);
					}
					{
						let k = h[s++];
						if ((k & 128) > 0) {
							s -= 13;
							return;
						}
						return C(e, r, n, i, a, f, x, p, S, _, m, T, k);
					}
				} else {
					let k = h[s++], E = h[s++];
					if ((k & 128) > 0 || (E & 128) > 0) {
						s -= 14;
						return;
					}
					if (t < 15) {
						return C(e, r, n, i, a, f, x, p, S, _, m, T, k, E);
					}
					let K = h[s++];
					if ((K & 128) > 0) {
						s -= 15;
						return;
					}
					return C(e, r, n, i, a, f, x, p, S, _, m, T, k, E, K);
				}
			}
		}
	}
}
function Jt() {
	let t = h[s++], e;
	if (t < 192) {
		e = t - 160;
	} else {
		switch (t) {
			case 217:
				e = h[s++];
				break;
			case 218:
				e = W.getUint16(s), s += 2;
				break;
			case 219:
				e = W.getUint32(s), s += 4;
				break;
			default:
				throw new Error("Expected string");
		}
	}
	return Te(e);
}
function Qe(t) {
	return q.copyBuffers ? Uint8Array.prototype.slice.call(h, s, s += t) : h.subarray(
		s,
		s += t,
	);
}
function ue(t) {
	let e = h[s++];
	if (V[e]) {
		return V[e](h.subarray(s, s += t));
	}
	throw new Error("Unknown extension type " + e);
}
var Ht = new Array(4096);
function wr() {
	let t = h[s++];
	if (t >= 160 && t < 192) {
		if (t = t - 160, X >= s) {
			return ne.slice(s - J, (s += t) - J);
		}
		if (!(X == 0 && se < 180)) {
			return nt(t);
		}
	} else {
		return (s--, z());
	}
	let e = (
		t << 5 ^ (
			t > 1
				? W.getUint16(s)
				: t > 0
					? h[s]
					: 0
		)
	) & 4095,
		r = Ht[e],
		n = s,
		i = s + t - 3,
		a,
		f = 0;
	if (r && r.bytes == t) {
		for (; n < i; ) {
			if (a = W.getUint32(n), a != r[f++]) {
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
	for (r = [], Ht[e] = r, r.bytes = t; n < i; ) a = W.getUint32(n), r.push(a), n +=
		4;
	for (i += 3; n < i; ) a = h[n++], r.push(a);
	let x = t < 16 ? ht(t) : hr(t);
	return x != null ? r.string = x : r.string = nt(t);
}
const Zt = (t, e) => {
	var r = z();
	let n = t;
	e !== void 0 && (t = t < 32 ? -((e << 5) + t) : (e << 5) + t, r.highByte = e);
	let i = M[t];
	return (
		i &&
			i.isShared &&
			((M.restoreStructures || (M.restoreStructures = []))[t] = i), M[t] = r, r.read =
			ct(r, n), r.read()
	);
};
var xr = typeof self == "object" ? self : global;
V[0] = () => {};
V[0].noBuffer = !0;
V[101] =
	() => {
		let t = z();
		return (xr[t[0]] || Error)(t[1]);
	};
V[105] =
	(t) => {
		let e = W.getUint32(s - 4);
		ee || (ee = new Map());
		let r = h[s], n;
		(r >= 144 && r < 160) || r == 220 || r == 221 ? n = [] : n = {};
		let i = { target: n };
		ee.set(e, i);
		let a = z();
		return i.used ? Object.assign(n, a) : (i.target = a, a);
	};
V[112] =
	(t) => {
		let e = W.getUint32(s - 4), r = ee.get(e);
		return (r.used = !0, r.target);
	};
V[115] = () => new Set(z());
const pr = [
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
V[116] =
	(t) => {
		let e = t[0], r = pr[e];
		if (!r) {
			throw new Error("Could not find typed array for code " + e);
		}
		return new xr[r](Uint8Array.prototype.slice.call(t, 1).buffer);
	};
V[120] =
	() => {
		let t = z();
		return new RegExp(t[0], t[1]);
	};
const xn = [];
V[98] =
	(t) => {
		let e = (t[0] << 24) + (t[1] << 16) + (t[2] << 8) + t[3], r = s;
		return (
			s += e - t.length, L = xn, L = [Jt(), Jt()], L.position0 = 0, L.position1 =
				0, L.postBundlePosition = s, s = r, z()
		);
	};
V[255] =
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
function gr(t) {
	let e = se,
		r = s,
		n = J,
		i = X,
		a = ne,
		f = ee,
		x = L,
		p = new Uint8Array(h.slice(0, se)),
		S = M,
		_ = M.slice(0, M.length),
		m = q,
		T = ye,
		k = t();
	return (
		se = e, s = r, J = n, X = i, ne = a, ee = f, L = x, h = p, ye = T, M = S, M.splice(
			0,
			M.length,
			..._,
		), q = m, W = new DataView(h.buffer, h.byteOffset, h.byteLength), k
	);
}
function it() {
	h = null, ee = null, M = null;
}
const wt = new Array(147);
for (let t = 0; t < 256; t++) wt[t] = +("1e" + Math.floor(45.15 - (t * .30103)));
var Fe = new _e({ useRecords: !1 });
const pn = Fe.unpack;
Fe.unpackMultiple;
Fe.unpack;
let gn = new Float32Array(1);
new Uint8Array(gn.buffer, 0, 4);
let Ie;
try {
	Ie = new TextEncoder();
} catch {}
let st, yr;
const qe = typeof Buffer != "undefined",
	Ae = qe ? Buffer.allocUnsafeSlow : Uint8Array,
	mr = qe ? Buffer : Uint8Array,
	Kt = qe ? 4294967296 : 2144337920;
let l, be, I, o = 0, F, $ = null;
const yn = 61440, mn = /[\u0080-\uFFFF]/, xe = Symbol("record-id");
class vn extends _e {
	constructor(e) {
		super(e);
		this.offset = 0;
		let r,
			n,
			i,
			a,
			f = 0,
			x = mr.prototype.utf8Write
				? function (u, v, c) {
					return l.utf8Write(u, v, c);
				}
				: Ie && Ie.encodeInto
					? function (u, v) {
						return Ie.encodeInto(u, l.subarray(v)).written;
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
		let T = e.maxOwnStructures;
		T == null && (T = _ ? 32 : 64), !this.structures &&
			e.useRecords != !1 &&
			(this.structures = []);
		let k = m > 32 || (T + m) > 64, E = m + 64, K = m + T + 64;
		if (K > 8256) {
			throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
		}
		let N = [], ae = 0, G = 0;
		this.pack =
			this.encode =
				function (u, v) {
					if (
						l || (l = new Ae(8192), I = new DataView(l.buffer, 0, 8192), o = 0), F =
							l.length - 10, (F - o) < 2048 ? (
							l = new Ae(l.length), I = new DataView(l.buffer, 0, l.length), F =
								l.length - 10, o = 0
						) : o = o + 7 & 2147483640, r = o, a =
							p.structuredClone ? new Map() : null, p.bundleStrings && typeof u != "string" ? (
							$ = [], $.size = 1 / 0
						) : $ = null, i = p.structures, i
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
								for (let y = 0, D = w.length; y < D; y++) {
									let U = w[y];
									B = O[U], B || (B = O[U] = Object.create(null)), O = B;
								}
								O[xe] = d + 64;
							}
							f = c;
						}
						S || (i.nextId = c + 64);
					}
					n && (n = !1);
					try {
						if (A(u), $ && Yt(r, A), p.offset = o, a && a.idsToInsert) {
							o += a.idsToInsert.length * 6, o > F && le(o), p.offset = o;
							let c = Sn(l.subarray(r, o), a.idsToInsert);
							return (a = null, c);
						}
						return v & _n ? (l.start = r, l.end = o, l) : l.subarray(r, o);
					} finally {
						if (i) {
							G < 10 && G++;
							let c = i.sharedLength || m;
							if (i.length > c && (i.length = c), ae > 1e4) {
								i.transitions = null, G = 0, ae = 0, N.length > 0 && (N = []);
							} else if (N.length > 0 && !S) {
								for (let d = 0, w = N.length; d < w; d++) N[d][xe] = 0;
								N = [];
							}
							if (n && p.saveStructures) {
								let d = l.subarray(r, o);
								return p.saveStructures(i, f) === !1 ? (
									p._mergeStructures(p.getStructures()), p.pack(u)
								) : (f = c, d);
							}
						}
						v & On && (o = r);
					}
				};
		const A = (u) => {
			o > F && (l = le(o));
			var v = typeof u, c;
			if (v === "string") {
				let d = u.length;
				if ($ && d >= 4 && d < 4096) {
					if (($.size += d) > yn) {
						let y, D = ($[0] ? ($[0].length * 3) + $[1].length : 0) + 10;
						(o + D) > F && (l = le(o + D)), $.position ? (
							l[o] = 200, o += 3, l[o++] = 98, y = o - r, o += 4, Yt(r, A), I.setUint16(
								y + r - 3,
								o - r - y,
							)
						) : (l[o++] = 214, l[o++] = 98, y = o - r, o += 4), $ = ["", ""], $.size =
							0, $.position = y;
					}
					let O = mn.test(u);
					$[O ? 0 : 1] += u, l[o++] = 193, A(O ? -d : d);
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
				if ((o + B) > F && (l = le(o + B)), d < 64 || !x) {
					let O, y, D, U = o + w;
					for (O = 0; O < d; O++) y = u.charCodeAt(O), y < 128
						? l[U++] = y
						: y < 2048
							? (l[U++] = y >> 6 | 192, l[U++] = y & 63 | 128)
							: (y & 64512) === 55296 && ((D = u.charCodeAt(O + 1)) & 64512) === 56320
								? (
									y = 65536 + ((y & 1023) << 10) + (D & 1023), O++, l[U++] =
										y >> 18 | 240, l[U++] = y >> 12 & 63 | 128, l[U++] =
										y >> 6 & 63 | 128, l[U++] = y & 63 | 128
								)
								: (
									l[U++] = y >> 12 | 224, l[U++] = y >> 6 & 63 | 128, l[U++] =
										y & 63 | 128
								);
					c = U - o - w;
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
								w < 5 && l.copyWithin(o + 5, o + 3, o + 3 + c), l[o++] = 219, I.setUint32(
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
								: (l[o++] = 206, I.setUint32(o, u), o += 4);
				} else if ((u >> 0) === u) {
					u >= -32
						? l[o++] = 256 + u
						: u >= -128
							? (l[o++] = 208, l[o++] = u + 256)
							: u >= -32768
								? (l[o++] = 209, I.setInt16(o, u), o += 2)
								: (l[o++] = 210, I.setInt32(o, u), o += 4);
				} else {
					let d;
					if ((d = this.useFloat32) > 0 && u < 4294967296 && u >= -2147483648) {
						l[o++] = 202, I.setFloat32(o, u);
						let w;
						if (
							d < 4 || ((w = u * wt[(l[o] & 127) << 1 | l[o + 1] >> 7]) >> 0) === w
						) {
							o += 4;
							return;
						} else {
							o--;
						}
					}
					l[o++] = 203, I.setFloat64(o, u), o += 8;
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
							l[o++] = 214, l[o++] = 112, I.setUint32(o, w.id), o += 4;
							return;
						} else {
							a.set(u, { offset: o - r });
						}
					}
					let d = u.constructor;
					if (d === Object) {
						zt(u, !0);
					} else if (d === Array) {
						c = u.length, c < 16
							? l[o++] = 144 | c
							: c < 65536
								? (l[o++] = 220, l[o++] = c >> 8, l[o++] = c & 255)
								: (l[o++] = 221, I.setUint32(o, c), o += 4);
						for (let w = 0; w < c; w++) A(u[w]);
					} else if (d === Map) {
						c = u.size, c < 16
							? l[o++] = 128 | c
							: c < 65536
								? (l[o++] = 222, l[o++] = c >> 8, l[o++] = c & 255)
								: (l[o++] = 223, I.setUint32(o, c), o += 4);
						for (let [w, B] of u) A(w), A(B);
					} else {
						for (let w = 0, B = st.length; w < B; w++) {
							let O = yr[w];
							if (u instanceof O) {
								let y = st[w];
								if (y.write) {
									y.type && (l[o++] = 212, l[o++] = y.type, l[o++] = 0), A(
										y.write.call(this, u),
									);
									return;
								}
								let D = l, U = I, Q = o;
								l = null;
								let fe;
								try {
									fe =
										y.pack.call(
											this,
											u,
											(ve) => (
												l = D, D = null, o += ve, o > F && le(o), {
													target: l,
													targetView: I,
													position: o - ve,
												}
											),
											A,
										);
								} finally {
									D && (l = D, I = U, o = Q, F = l.length - 10);
								}
								fe && (
									(fe.length + o) > F && le(fe.length + o), o =
										bn(fe, l, o, y.type)
								);
								return;
							}
						}
						zt(u, !u.hasOwnProperty);
					}
				}
			} else if (v === "boolean") {
				l[o++] = u ? 195 : 194;
			} else if (v === "bigint") {
				if (u < (BigInt(1) << BigInt(63)) && u >= -(BigInt(1) << BigInt(63))) {
					l[o++] = 211, I.setBigInt64(o, u);
				} else if (u < (BigInt(1) << BigInt(64)) && u > 0) {
					l[o++] = 207, I.setBigUint64(o, u);
				} else if (this.largeBigIntToFloat) {
					l[o++] = 203, I.setFloat64(o, Number(u));
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
				A(this.writeFunction && this.writeFunction());
			} else {
				throw new Error("Unknown type: " + v);
			}
		},
			zt = this.useRecords === !1
				? this.variableMapSize
					? (u) => {
						let v = Object.keys(u), c = v.length;
						c < 16
							? l[o++] = 128 | c
							: c < 65536
								? (l[o++] = 222, l[o++] = c >> 8, l[o++] = c & 255)
								: (l[o++] = 223, I.setUint32(o, c), o += 4);
						let d;
						for (let w = 0; w < c; w++) A(d = v[w]), A(u[d]);
					}
					: (u, v) => {
						l[o++] = 222;
						let c = o - r;
						o += 2;
						let d = 0;
						for (let w in u) (v || u.hasOwnProperty(w)) && (A(w), A(u[w]), d++);
						l[c++ + r] = d >> 8, l[c + r] = d & 255;
					}
				: e.progressiveRecords && !k
					? (u, v) => {
						let c,
							d = i.transitions || (i.transitions = Object.create(null)),
							w = o++ - r,
							B;
						for (let O in u) if (v || u.hasOwnProperty(O)) {
							if (c = d[O], c) {
								d = c;
							} else {
								let y = Object.keys(u), D = d;
								d = i.transitions;
								let U = 0;
								for (let Q = 0, fe = y.length; Q < fe; Q++) {
									let ve = y[Q];
									c = d[ve], c || (c = d[ve] = Object.create(null), U++), d = c;
								}
								(w + r + 1) == o ? (o--, Xe(d, y, U)) : Dt(d, y, w, U), B = !0, d =
									D[O];
							}
							A(u[O]);
						}
						if (!B) {
							let O = d[xe];
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
						let B = d[xe];
						B
							? B >= 96 && k
								? (l[o++] = ((B -= 96) & 31) + 96, l[o++] = B >> 5)
								: l[o++] = B
							: Xe(d, d.__keys__ || Object.keys(u), w);
						for (let O in u) (v || u.hasOwnProperty(O)) && A(u[O]);
					},
			le = (u) => {
				let v;
				if (u > 16777216) {
					if ((u - r) > Kt) {
						throw new Error(
							"Packed buffer would be larger than maximum buffer size",
						);
					}
					v =
						Math.min(
							Kt,
							Math.round(
								Math.max((u - r) * (u > 67108864 ? 1.25 : 2), 4194304) / 4096,
							) * 4096,
						);
				} else {
					v = (Math.max(u - r << 2, l.length - 1) >> 12) + 1 << 12;
				}
				let c = new Ae(v);
				return (
					I = new DataView(c.buffer, 0, v), l.copy ? l.copy(c, 0, r, u) : c.set(
						l.slice(r, u),
					), o -= r, r = 0, F = c.length - 10, l = c
				);
			},
			Xe = (u, v, c) => {
				let d = i.nextId;
				d || (d = 64), d < E &&
					this.shouldShareStructure &&
					!this.shouldShareStructure(v) ? (
					d = i.nextOwnId, d < K || (d = E), i.nextOwnId = d + 1
				) : (d >= K && (d = E), i.nextId = d + 1);
				let w = v.highByte = d >= 96 && k ? d - 96 >> 5 : -1;
				u[xe] = d, u.__keys__ = v, i[d - 64] = v, d < E ? (
					v.isShared = !0, i.sharedLength = d - 63, n = !0, w >= 0 ? (
						l[o++] = (d & 31) + 96, l[o++] = w
					) : l[o++] = d
				) : (
					w >= 0 ? (
						l[o++] = 213, l[o++] = 114, l[o++] = (d & 31) + 96, l[o++] = w
					) : (l[o++] = 212, l[o++] = 114, l[o++] = d), c && (ae += G * c), N.length >= T && (
						N.shift()[xe] = 0
					), N.push(u), A(v)
				);
			},
			Dt = (u, v, c, d) => {
				let w = l, B = o, O = F, y = r;
				l = be, o = 0, r = 0, l || (be = l = new Ae(8192)), F = l.length - 10, Xe(
					u,
					v,
					d,
				), be = l;
				let D = o;
				if (l = w, o = B, F = O, r = y, D > 1) {
					let U = o + D - 1;
					U > F && le(U);
					let Q = c + r;
					l.copyWithin(Q + D, Q + 1, o), l.set(be.slice(0, D), Q), o = U;
				} else {
					l[c + r] = be[0];
				}
			};
	}
	useBuffer(e) {
		l = e, I = new DataView(l.buffer, l.byteOffset, l.byteLength), o = 0;
	}
	clearSharedData() {
		this.structures && (this.structures = []);
	}
}
yr =
	[
		Date,
		Set,
		Error,
		RegExp,
		ArrayBuffer,
		Object.getPrototypeOf(Uint8Array.prototype).constructor,
		fr,
	];
st =
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
				this.moreTypes ? Gt(t, 16, e) : Xt(
					qe ? Buffer.from(t) : new Uint8Array(t),
					e,
				);
			},
		},
		{
			pack(t, e) {
				let r = t.constructor;
				r !== mr && this.moreTypes ? Gt(t, pr.indexOf(r.name), e) : Xt(t, e);
			},
		},
		{
			pack(t, e) {
				let { target: r, position: n } = e(1);
				r[n] = 193;
			},
		},
	];
function Gt(t, e, r, n) {
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
function Xt(t, e) {
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
function bn(t, e, r, n) {
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
function Sn(t, e) {
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
function Yt(t, e) {
	I.setUint32($.position + t, o - $.position - t);
	let r = $;
	$ = null, e(r[0]), e(r[1]);
}
let vr = new vn({ useRecords: !1 });
vr.pack;
vr.pack;
const _n = 512, On = 1024;
var kn = "https://izx.dalukuankuan.com/",
	br = "https://i-desk-ver.izhenxiang.com/",
	Sr,
	Wn = async (t) => {
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
	Mn = (t) => Wn(_r(t));
Sr =
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
var _r = (t) => Sr(t), Be = {};
Be.version = "1.0.0";
Be.encode =
	function (e) {
		return e
			.toString("base64")
			.replace(/\+/g, "-")
			.replace(/\//g, "_")
			.replace(/=+$/, "");
	};
Be.decode =
	function (e) {
		return (
			e += Array(5 - (e.length % 4)).join("="), e =
				e.replace(/\-/g, "+").replace(/\_/g, "/"), new Buffer(e, "base64")
		);
	};
Be.validate =
	function (e) {
		return /^[A-Za-z0-9\-_]+$/.test(e);
	};
var et = Be;
var pe, Or, Ee, Ve, xt, Oe, pt, kr, Wr, gt, Re, Mr, yt, mt, Ce, ot, Ne;
Wr = on.promisify(rr.brotliDecompress);
var Tn = () => (b.app.relaunch(), b.app.exit());
pe = H.join(nr.ROOT, "v");
re.mkdirSync(pe, { recursive: !0 });
Or = "sha512";
Ce = void 0;
var Tr = () => {
	he(Ce), Ce = void 0;
},
	Br = () => {
		Tr(), Ce = me.update({ width: 400, height: 500, resizable: !1 });
	};
Re = (t) => Mn(br + t);
Mr =
	(t) => {
		var e;
		return (
			e = sn.createHash(Or), new Promise(
				(r) =>
					re
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
ot =
	(() => {
		var t;
		return ({ v: t } = ze.default, t && oe.decode(t));
	})();
var Ur = () => oe.PACKAGE_JSON().version;
pt = fn + "/";
Ne = oe.ver_int(Ur());
Oe = 0;
mt =
	async () => {
		var t;
		return (
			t = oe.encode(parseInt(new Date() / 1e3)), Oe = await Re(pt + "v?" + t), Oe
		);
	};
kr =
	async (t) => {
		var e, r, n, i, a, f, x, p, S, _, m, T, k, E, K, N, ae, G;
		if (t || (t = Oe || await mt()), G = t.readUintBE(0, 6), !(Ne >= G)) {
			if (
				n = oe.encode(G), e = H.join(pe, n), re.existsSync(
					H.join(e, oe.package_json),
				) && G === ot
			) {
				return e;
			}
			for (
				N = et.encode(await Re(pt + et.encode(t))), [r, i, x] =
					pn(await Wr(await Re(N))), T =
					(A) => Se.mkdir(H.join(e, A), { recursive: !0 }), await Promise.all(
					r.map(T),
				), E = H.dirname(__dirname), k = S = 0, _ = i.length;
				S < _;
				k = ++S
			) if (
				p = i[k], a = H.join(e, p), f = x[k], K =
					async (A) => Buffer.compare(f, await Mr(A)) === 0, !(
					re.existsSync(a) && await K(a)
				)
			) {
				if (
					await T(H.dirname(p)), m = H.join(E, p), re.existsSync(m) && await K(
						m,
					)
				) {
					await Se.copyFile(m, a);
					continue;
				}
				if (
					ae = re.createWriteStream(a), (await _r(br + et.encode(f))).pipe(
						rr.createBrotliDecompress(),
					).pipe(ae), await new Promise(
						(A) => {
							ae.on("finish", A);
						},
					), !await K(a)
				) {
					return;
				}
			}
			return (ze.default.v = n, ot = G, e);
		}
	};
var Ar = async () => {
	var t, e, r;
	try {
		t = await mt();
	} catch (n) {
		return (e = n, console.trace(e), 0);
	}
	return (r = Ne < t.readUintBE(0, 6), r ? t : 0);
};
gt =
	async () => {
		var t;
		(t = await Ar()) && await Pr(t);
	};
setInterval(gt, 864e5);
Ee = Ve = xt = void 0;
yt = () => Ve = new Promise((t) => xt = t);
yt();
var Bn = () => Ve,
	Pr = (...t) => (
		Ee || (
			Ee =
				kr(...t)
					.then(
						async (e) => {
							e && (
								xt([
									Oe,
									JSON.parse(
										await Se.readFile(H.join(e, oe.package_json), "utf8"),
									).description,
								]), yt()
							);
						},
					)
					.finally(() => {
						Ee = !1;
					})
		), Ve
	);
setTimeout(
	async () => {
		var t, e, r, n;
		if (re.existsSync(pe)) {
			n = await Se.readdir(pe, { withFileTypes: !0 });
			for (e of n) e.isDirectory() && (
				{ name: r } = e, oe.decode(r) < Ne && await Se.rm(
					H.join(pe, r),
					{ recursive: !0, force: !0 },
				)
			);
		}
		if (t = parseInt(new Date() / 864e5), t !== ze.default.update_check) {
			return (ze.default.update_check = t, await gt());
		}
	},
	15e3,
);
var Un = Object.freeze(
	Object.defineProperty(
		{
			__proto__: null,
			relaunch: Tn,
			x: Tr,
			show: Br,
			ver_now: Ur,
			update_check: Ar,
			update_promise: Bn,
			update: Pr,
		},
		Symbol.toStringTag,
		{ value: "Module" },
	),
);
var Je, vt, Ir, Er, bt, An, St, jr, zr, ke;
Le.default.platform();
({ Menu: vt, Tray: Ir, app: Er, globalShortcut: An } = require("electron"));
ke = new Ir(H.join(dt, "trayTemplate.png"));
St =
	[
		{
			label: "媒体库",
			click: () => {
				b.shell.openExternal(kn + "video_library.html?user_token=" + lr.ID);
			},
		},
		{ label: "检测更新", click: Br },
		{ type: "separator" },
	];
Je =
	jr =
		vt.buildFromTemplate([
			{ label: "显示界面", click: ge },
			...St,
			{ label: "退出", click: () => Er.quit() },
		]);
zr = vt.buildFromTemplate(St);
bt =
	[
		"click",
		() => {
			ge();
		},
	];
ke.on(
	"right-click",
	(t) => {
		ke.popUpContextMenu(Je);
	},
);
var Pn = () => {
	ke.off(...bt), Je = zr;
},
	Dr = () => {
		ke.on(...bt), Je = jr;
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
var In = () => {
	b.globalShortcut.register(
		"CmdOrCtrl+Alt+I",
		() => Rr(b.BrowserWindow.getFocusedWindow()),
	);
},
	He = (t) => {
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
					he(e);
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
					he(t);
				},
			);
	},
	Cr,
	Ze,
	$r,
	de,
	P,
	_t;
({ camera: $r } = me);
P = void 0;
de = void 0;
Cr = 204;
var Lr = () => {
	P && !P.isDestroyed() && P.getSize()[0] !== 800 && (de = P.getPosition()), he(
		P,
	);
},
	jn = (t) => {
		var e, r;
		r = P.getSize()[0], r !== t && (
			de = P.getPosition(), e = Math.round((t - r) / 2), P.setBounds({
				x: de[0] - e,
				y: de[1] - e,
				width: t,
				height: t,
			})
		);
	};
Ze = !1;
var Fr = () => _t(800, 500),
	zn = _t =
		(t, e) => {
			(P && !P.isDestroyed()) || (
				P =
					$r({
						width: t,
						height: e,
						center: !0,
						roundedCorners: !1,
						resizable: !1,
						transparent: !0,
					}), Ze && Ot()
			);
		},
	Dn = (t) => {
		var e, r, n, i, a;
		(P && !P.isDestroyed()) || (
			t = t || Cr, _t(t, t), de ? [e, r] = de : (
				{ width: a, height: n } = b.screen.getPrimaryDisplay().size, i = 62, e =
					i, r = n - i - t
			), P.setPosition(e, r)
		);
	},
	Rn = () => {
		Lr(), Fr();
	},
	Ot = () => {
		P &&
			!P.isDestroyed() &&
			(
				P.setAlwaysOnTop(!0, "pop-up-menu"), P.setVisibleOnAllWorkspaces(
					!0,
					{ visibleOnFullScreen: !0 },
				)
			), Ze = !0;
	},
	qr = () => {
		P &&
			!P.isDestroyed() &&
			(P.setAlwaysOnTop(!1), P.setVisibleOnAllWorkspaces(!1)), Ze = !1;
	},
	Cn = Object.freeze(
		Object.defineProperty(
			{
				__proto__: null,
				x: Lr,
				size: jn,
				rect: Fr,
				default: zn,
				circle: Dn,
				x_rect: Rn,
				top: Ot,
				untop: qr,
			},
			Symbol.toStringTag,
			{ value: "Module" },
		),
	),
	kt = new Proxy(
		{},
		{
			get: (t, e) => () => {
				var r, n, i;
				return (
					{ width: n, height: r } = b.screen.getPrimaryDisplay().size, i =
						me[e]({
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
	we = {},
	Wt = {};
const $n = require(
	"/Users/z/git/rv/desk/node_modules/.pnpm/extract-file-icon@0.3.2/node_modules/extract-file-icon/build/Release/addon.node",
),
	Ln = $n.getIcon;
var Fn = Object.freeze(
	Object.defineProperty(
		{ __proto__: null, getIcon: Ln },
		Symbol.toStringTag,
		{ value: "Module" },
	),
),
	qn = sr(Fn);
const Qt = Le.default;
let at;
(Qt.platform() === "win32" || Qt.platform() === "darwin") && (at = qn.getIcon);
const Vn = (t, e = 64) => {
	if (!!at) {
		return at(t, e);
	}
};
var Nn = Vn, Ke = {};
Object.defineProperty(Ke, "__esModule", { value: !0 });
const te = we,
	Jn = Le.default,
	tt = (t) => {
		if (!(!te.addon || !te.addon.getMonitorInfo)) {
			return te.addon.getMonitorInfo(t);
		}
	};
class Hn {
	constructor(e) {
		this.id = e;
	}
	getBounds() {
		return tt(this.id).bounds;
	}
	getWorkArea() {
		return tt(this.id).workArea;
	}
	isPrimary() {
		return tt(this.id).isPrimary;
	}
	getScaleFactor() {
		if (!te.addon || !te.addon.getMonitorScaleFactor) {
			return;
		}
		const e = Jn.release().split(".").map((r) => parseInt(r, 10));
		return e[0] > 8 || (e[0] === 8 && e[1] >= 1) ? te.addon.getMonitorScaleFactor(
			this.id,
		) : 1;
	}
	isValid() {
		return te.addon && te.addon.getMonitorInfo;
	}
}
Ke.Monitor = Hn;
var Ge = {};
Object.defineProperty(Ge, "__esModule", { value: !0 });
class Zn {
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
Ge.EmptyMonitor = Zn;
var Kn = (De && De.__importDefault) || function (t) {
	return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Wt, "__esModule", { value: !0 });
const g = we, Gn = Kn(Nn), Xn = Ke, Yn = Ge;
class $e {
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
		return !g.addon || !g.addon.getMonitorFromWindow ? new Yn.EmptyMonitor() : new Xn.Monitor(
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
		return Gn.default(this.path, e);
	}
	setOwner(e) {
		if (!g.addon || !g.addon.setWindowOwner) {
			return;
		}
		let r = e;
		e instanceof $e ? r = e.id : e || (r = 0), g.addon.setWindowOwner(
			this.id,
			r,
		);
	}
	getOwner() {
		if (!(!g.addon || !g.addon.getWindowOwner)) {
			return new $e(g.addon.getWindowOwner(this.id));
		}
	}
}
Wt.Window = $e;
const Y = require(
	"/Users/z/git/rv/desk/node_modules/.pnpm/@rmw+node-window-manager@2.2.6/node_modules/@rmw/node-window-manager/build/Release/addon.node",
),
	Qn = Y.getWindows,
	ei = Y.getActiveWindow,
	ti = Y.setWindowBounds,
	ri = Y.getWindowBounds,
	ni = Y.getWindowTitle,
	ii = Y.initWindow,
	si = Y.bringWindowToTop,
	oi = Y.setWindowMinimized,
	ai = Y.setWindowMaximized,
	li = Y.requestAccessibility;
var fi = Object.freeze(
	Object.defineProperty(
		{
			__proto__: null,
			getWindows: Qn,
			getActiveWindow: ei,
			setWindowBounds: ti,
			getWindowBounds: ri,
			getWindowTitle: ni,
			initWindow: ii,
			bringWindowToTop: si,
			setWindowMinimized: oi,
			setWindowMaximized: ai,
			requestAccessibility: li,
		},
		Symbol.toStringTag,
		{ value: "Module" },
	),
),
	ui = sr(fi),
	di = (De && De.__awaiter) || function (t, e, r, n) {
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
Object.defineProperty(we, "__esModule", { value: !0 });
const je = Wt;
we.Window = je.Window;
const ci = ln.default, er = Le.default, hi = Ke, wi = Ge;
let R;
we.addon = R;
(er.platform() === "win32" || er.platform() === "darwin") && (we.addon = R = ui);
let tr = null, Pe = [];
class xi extends ci.EventEmitter {
	constructor() {
		super();
		this.requestAccessibility =
			() => !R || !R.requestAccessibility ? !0 : R.requestAccessibility(), this.getActiveWindow =
			() => {
				if (!!R) {
					return new je.Window(R.getActiveWindow());
				}
			}, this.getWindows =
			() =>
				!R || !R.getWindows ? [] : R.getWindows().map((r) => new je.Window(r)).filter(
					(r) => r.isWindow(),
				), this.getMonitors =
			() =>
				!R || !R.getMonitors ? [] : R.getMonitors().map(
					(r) => new hi.Monitor(r),
				), this.getPrimaryMonitor =
			() =>
				process.platform === "win32" ? this.getMonitors().find(
					(r) => r.isPrimary,
				) : new wi.EmptyMonitor(), this.createProcess =
			(r, n = "") => {
				if (!(!R || !R.createProcess)) {
					return R.createProcess(r, n);
				}
			};
		let e;
		!R || (
			this.on(
				"newListener",
				(r) => {
					if (
						r === "window-activated" && (e = R.getActiveWindow()), Pe.indexOf(r) === -1
					) {
						if (r === "window-activated") {
							tr =
								setInterval(
									() =>
										di(
											this,
											void 0,
											void 0,
											function* () {
												const n = R.getActiveWindow();
												e !== n && (
													e = n, this.emit("window-activated", new je.Window(n))
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
						r === "window-activated" && clearInterval(tr), Pe =
							Pe.filter((n) => n !== r)
					);
				},
			)
		);
	}
}
const pi = new xi();
var Vr = we.windowManager = pi, Mt, ie, lt, Tt, Nr, Jr, Hr, Zr, j;
({ recbar: Zr } = me);
j = void 0;
ie = void 0;
({ draw: Hr } = kt);
var gi = () => {
	ie || (ie = Hr(), ie.on("close", () => ie = void 0), Kr());
},
	Kr = () => {
		We(), ie.focus();
	},
	yi = () => {
		he(ie), ie = void 0;
	};
lt =
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
			for (t of lt) b.globalShortcut.register(t, () => {});
		},
		"browser-window-blur": () => {
			var t;
			for (t of lt) b.globalShortcut.unregister(t, () => {});
		},
	};
var Bt = (t) => {
	var e;
	return (t === "camera" ? e = 500 : e = 600, Nr(e));
};
Nr =
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
				}, j = Zr(i), j.on("close", () => j = void 0), { width: x, height: f } =
				b.screen.getPrimaryDisplay().workArea, j.setBounds({
				x: Math.round((x - t) / 2),
				y: f - 28 - r,
				width: t,
				height: r,
			}), We(), Ot(), new Promise(
				(S) =>
					j.webContents.on(
						"did-finish-load",
						() => {
							We(), j.focus(), S(j);
						},
					),
			)
		);
	};
var We = () => {
	j && (j.setAlwaysOnTop(!0, "screen-saver"), j.moveTop());
},
	mi = () => {
		var t, e, r, n, i;
		n = j.getPosition(), [r, e] = j.getSize(), [i, t] = j.size, j.setBounds({
			x: n[0] + r - i,
			y: n[1],
			width: i,
			height: t,
		});
	},
	vi = () => {
		var t, e, r, n;
		e = j.getPosition(), j.size = r = j.getSize(), n = 162, t = 48, j.setBounds({
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
		Dr(), qr();
	};
var bi = () => {
	Tt(), He("show");
},
	Si = () => {
		Tt(), He();
	},
	_i = () => {
		j.hide();
	};
Jr =
	(...t) =>
		b.desktopCapturer.getSources({
			types: t,
			thumbnailSize: { width: 0, height: 0 },
		});
var Oi = async () => {
	var t, e;
	e = await Jr("screen");
	for (t of e) return t.id;
},
	ki = async () => {
		var t, e, r, n, i, a, f, x, p, S, _, m, T, k, E;
		({ bounds: t } = b.screen.getPrimaryDisplay()), { scaleFactor: _ } =
			b.screen.getPrimaryDisplay(), a = new Map(), p =
			await b.desktopCapturer.getSources({
				types: ["window"],
				fetchWindowIcons: !1,
				thumbnailSize: { width: 320 * _, height: 180 * _ },
			});
		for (n of p) a.set(
			Math.floor(n.id.split(":")[1]),
			[n.thumbnail.toDataURL(), n.name],
		);
		x = [], S = Vr.getWindows();
		for (n of S) if (
			{ id: i } = n, !process.execPath.startsWith(n.path) && (f = a.get(i), f)
		) {
			if (
				{ x: k, y: E, width: T, height: r } = n.getBounds(), (
					(k + T) <= 0 && k <= 0
				) ||
					((k + T) > t.width && k > t.width) ||
					((E + r) <= 0 && E <= 0) ||
					((E + r) > t.height && E > t.height)
			) {
				continue;
			}
			m = t.width - k, T > m && (T = m), e = t.height - E, r > e && (r = e), k < 0 && (
				k = 0
			), E < 0 && (E = 0), x.push(f.concat([i, k, E, T, r]));
		}
		return x;
	},
	Wi = (t) => {
		b.BrowserWindow
			.getAllWindows()
			.forEach(
				(e) => {
					var r;
					if (
						{ hash: r } = new URL(e.webContents.getURL()), !t && r.slice(1) === "camera"
					) {
						he(e);
						return;
					}
					return e.hide();
				},
			);
	},
	Mi = Object.freeze(
		Object.defineProperty(
			{
				__proto__: null,
				draw: gi,
				draw_top: Kr,
				draw_x: yi,
				工具条: Bt,
				top: We,
				expand: mi,
				left: vi,
				cancel: bi,
				end: Si,
				hide: _i,
				screen_source: Oi,
				win_source: ki,
				stop: Wi,
			},
			Symbol.toStringTag,
			{ value: "Module" },
		),
	),
	Gr,
	Z;
({ count_down: Gr } = me);
Z = void 0;
var Xr = () => {
	var t;
	if (Z) {
		Z.focus();
		return;
	}
	t = 240, Z =
		Gr({ width: t, height: t, transparent: !0, resizable: !1, hasShadow: !1 }), Z.on(
		"close",
		() => {
			Z = void 0;
		},
	), Z.setAlwaysOnTop(!0, "screen-saver"), Z.on(
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
	Ti = {
		hide: () => {
			Z != null && Z.hide();
		},
		close: () => {
			Z != null && Z.close(), We();
		},
	};
var Me, Ut, At, Pt, It;
Me = At = Ut = void 0;
Pt =
	() => {
		Ut =
			new Promise(
				(t) => {
					At = t;
				},
			);
	};
Pt();
It =
	(t) => {
		Me.once(
			"closed",
			() => {
				At(t), Pt();
			},
		), he(Me);
	};
var Bi = () => {
	It(!0);
},
	Ui = () => {
		It(!1);
	},
	Ai = (t) => (
		Me =
			kt["confirm_" + t]({
				width: 275,
				height: 190,
				modal: !0,
				isAlwaysOnTop: !0,
				visibleOnAllWorkspaces: !0,
			}), Me.setAlwaysOnTop(!0, "screen-saver"), Ut
	),
	Pi = Object.freeze(
		Object.defineProperty(
			{ __proto__: null, y: Bi, n: Ui, show: Ai },
			Symbol.toStringTag,
			{ value: "Module" },
		),
	),
	Ii = (t) => {
		lr.ID = t;
	},
	Ei = Object.freeze(
		Object.defineProperty(
			{ __proto__: null, ID: Ii },
			Symbol.toStringTag,
			{ value: "Module" },
		),
	),
	ji = function () {
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
	zi = function (t, e, r, n) {
		var i;
		i = this.sender.getOwnerBrowserWindow(), i.setBounds({
			x: Math.round(t),
			y: Math.round(e),
			width: r,
			height: n,
		});
	},
	Di = Object.freeze(
		Object.defineProperty(
			{ __proto__: null, getBounds: ji, setBounds: zi },
			Symbol.toStringTag,
			{ value: "Module" },
		),
	);
var Yr, Et, jt, ce, Qr;
({ area: Yr, win_area: Qr } = kt);
ce = void 0;
var Ri = (t) => {
	var e, r;
	ce.setAlwaysOnTop(!1), r = Vr.getWindows();
	for (e of r) if (t === e.id) {
		e.bringToTop();
		break;
	}
	jt();
};
jt =
	() => {
		ce.setAlwaysOnTop(!0, "screen-saver");
	};
Et =
	(t) => {
		ce = t(), jt(), ce.on("close", () => ce = void 0);
	};
var Ci = () => Et(Qr),
	$i = () => Et(Yr),
	Li = () => {
		Bt(), ce.setIgnoreMouseEvents(!0, { forward: !0 }), Xr();
	},
	Fi = () => {
		var t, e;
		return ({ x: t, y: e } = b.screen.getCursorScreenPoint(), [t, e]);
	};
function qi(t, e, r, n) {
	var i;
	if (i = t === "camera", !i && n) {
		[Ci, $i][n - 1]();
		return;
	} else {
		Xr();
	}
	Bt(t);
}
var Vi = (t, e, r, n) => {
	He(), qi(t, e, r, n);
},
	Ni = (t) => {
		b.shell.openExternal(t);
	},
	Ji = () => nr.ROOT,
	Hi = Object.freeze(
		Object.defineProperty(
			{
				__proto__: null,
				userData: Ji,
				close: He,
				x: En,
				count_down: Ti,
				confirm: Pi,
				auto_update: Un,
				recbar: Mi,
				USER: Ei,
				camera: Cn,
				drag: Di,
				area: Li,
				wintop: Ri,
				main: ge,
				mouse: Fi,
				rec: Vi,
				open: Ni,
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
				return require("./g.js");
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
	ge(), (r = b.app.dock) != null && r.hide(), t =
		(f, x) => {
			var p, S, _, m;
			(x instanceof Function) && b.ipcMain.handle(
				f.join("."),
				(T, k) => x.apply(T, k),
			), _ = Object.entries(x);
			for (m of _) [S, p] = m, t([...f, S], p);
		}, n = Object.entries(Hi);
	for (a of n) [e, i] = a, t([e], i);
	Dr(), In();
})();
un(
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
				), t && ge();
		},
		activate: ge,
	},
);
