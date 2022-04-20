"use strict";
var K = Object.defineProperty, L = Object.defineProperties;
var $ = Object.getOwnPropertyDescriptors;
var A = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty,
	W = Object.prototype.propertyIsEnumerable;
var P = (t, e, r) =>
	e in t ? K(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] =
		r,
	F = (t, e) => {
		for (var r in e || (e = {})) V.call(e, r) && P(t, r, e[r]);
		if (A) {
			for (var r of A(e)) W.call(e, r) && P(t, r, e[r]);
		}
		return t;
	},
	M = (t, e) => L(t, $(e));
var E = require("electron"),
	b = require("path"),
	Y = require("fs"),
	m = require("fs/promises");
function G(t = ["complete", "interactive"]) {
	return new Promise(
		(e) => {
			t.includes(document.readyState) ? e(!0) : document.addEventListener(
				"readystatechange",
				() => {
					t.includes(document.readyState) && e(!0);
				},
			);
		},
	);
}
function J() {
	var t = document.createElement("div"), e;
	return (
		t.setAttribute(
			"style",
			`position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center;background:url('data:image/svg+xml,%0A%3Csvg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"%3E%3Ccircle cx="27.5" cy="57.5" r="5" fill="%23fd9e4b"%3E%3Canimate attributeName="cy" calcMode="spline" keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5" repeatCount="indefinite" values="57.5;42.5;57.5;57.5" keyTimes="0;0.3;0.6;1" dur="3.0303030303030303s" begin="-1.8181818181818181s"/%3E%3C/circle%3E%3Ccircle cx="42.5" cy="57.5" r="5" fill="%23fd9e4b"%3E%3Canimate attributeName="cy" calcMode="spline" keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5" repeatCount="indefinite" values="57.5;42.5;57.5;57.5" keyTimes="0;0.3;0.6;1" dur="3.0303030303030303s" begin="-1.3636363636363635s"/%3E%3C/circle%3E%3Ccircle cx="57.5" cy="57.5" r="5" fill="%23fd9e4b"%3E%3Canimate attributeName="cy" calcMode="spline" keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5" repeatCount="indefinite" values="57.5;42.5;57.5;57.5" keyTimes="0;0.3;0.6;1" dur="3.0303030303030303s" begin="-.9090909090909091s"/%3E%3C/circle%3E%3Ccircle cx="72.5" cy="57.5" r="5" fill="%23fd9e4b"%3E%3Canimate attributeName="cy" calcMode="spline" keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5" repeatCount="indefinite" values="57.5;42.5;57.5;57.5" keyTimes="0;0.3;0.6;1" dur="3.0303030303030303s" begin="-.45454545454545453s"/%3E%3C/circle%3E%3C/svg%3E') 50% 50% / 96px no-repeat;z-index:9;`,
		), {
			ing() {
				e || (
					e =
						setTimeout(
							() => {
								e = void 0, document.body.appendChild(t);
							},
							500,
						)
				);
			},
			xing() {
				if (e) {
					clearTimeout(e), e = void 0;
				} else {
					try {
						document.body.removeChild(t);
					} catch {}
				}
			},
		}
	);
}
var Q = "https://izx.dalukuankuan.com/";
var N, O;
O =
	() => {
		var t;
		return (t = new Headers(), t.append("user_token", localStorage.uid), t);
	};
N =
	class {
		constructor(e) {
			this.json = this.json.bind(this), this.ipc = e;
		}
		async fetch(e, r = {}) {
			var a;
			if (
				r.headers = O(), e.indexOf(".do") < 0 && (e += ".do"), a =
					await fetch(Q + e, r), a.status === 401
			) {
				delete localStorage.uid, this.ipc.auto_update.relaunch();
				return;
			}
			return a;
		}
		async json(e, r = {}) {
			var a;
			return (a = await this.fetch(e, r), a.json());
		}
	};
var X = (t) => new N(t),
	Z = (t) => new Promise((e) => setTimeout(e, t)),
	ee = (t) => {
		var e;
		return (
			e =
				(r) =>
					new Proxy(
						() => {},
						{
							apply: (a, n, o) => t(r.join("."), o),
							get: (a, n) => e([...r, n]),
						},
					), e([])
		);
	},
	q = ee(E.ipcRenderer.invoke),
	I;
I = X(q);
var R = (t) => {
	var e, r, a, n, o, f;
	if (a = { method: "POST" }, t) {
		e = new FormData(), n = Object.entries(t);
		for (f of n) [r, o] = f, e.append(r, o);
		a.body = e;
	}
	return a;
},
	te = async (t, e) => {
		var r;
		return (r = await y(t, e), (await r.json()).data);
	},
	y = (t, e) => I.fetch(t, R(e));
const C = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",
	z = C.split(""),
	B = new Array(123);
for (let t = 0; t < C.length; t++) B[C.charCodeAt(t)] = t;
const re = (t) => {
	if (t < 0) {
		return `-${ntob(-t)}`;
	}
	let e = t >>> 0, r = t / 4294967296 >>> 0, a = "";
	for (; r > 0; ) a = z[63 & e] + a, e >>>= 6, e |= (63 & r) << 26, r >>>= 6;
	let n = "";
	do n = z[63 & e] + n, e >>>= 6; while (e > 0);
	return n + a;
},
	ae = (t) => {
		let e = 0;
		const r = t.charAt(0) === "-" ? 1 : 0;
		for (let a = r; a < t.length; a++) e = (e * 64) + B[t.charCodeAt(a)];
		return r ? -e : e;
	};
var D, _, g;
g = (t) => m.rm(t, { recursive: !0, force: !0 });
D =
	async (t) => {
		for (var e; ; ) try {
			await t();
			break;
		} catch (r) {
			e = r, console.trace(e), await Z(1e3);
		}
	};
_ =
	(t) =>
		D(async () => {
			var e;
			if (e = await t(), ![200, 204].includes(e.status)) {
				throw new Error(await e.text());
			}
			return e;
		});
var ie = (t) => {
	var e;
	return (
		e = t(), (r) => {
			var a, n, o, f, k, p, d, l, j, v, u;
			return (
				p = new Set(), v = !1, l = k = o = a = d = u = void 0, n =
					new Promise(
						(i) => {
							o = i;
						},
					), f =
					(async () => {
						var i, s, c;
						({ id: u, host: k } = l = await te("upload/start.do?mode=oss")), i =
							"chunk_", l =
							{
								OSSAccessKeyId: l.accessKeyId,
								policy: l.policy,
								key: l.dir + i,
								signature: l.signature,
								name: i,
							}, { uid: c } = localStorage, s = [c, u], d =
							b.join(await e, "upload", r, ...s), s.join("/"), await m.mkdir(
							d,
							{ recursive: !0 },
						);
					})(), j =
					async () => {
						for (var i, s, c, h, w, T, x; p.size; ) {
							T = p.values();
							for (w of T) h = b.join(d, w), Y.existsSync(h) && (
								c = await m.readFile(h), s =
									M(F({}, l), { file: new File([c], "blob") }), i =
									parseInt(ae(w)), x = (i + "").padStart(4, 0), s.name += x, s.key +=
									x, await _(() => fetch(k, R(s))), await g(h), await _(
									() =>
										y("upload/update", { id: u, chunkNum: i, size: c.length }),
								)
							), p.delete(w);
						}
					}, [
					async (i, s) => {
						var c;
						await f, i = re(i), c = b.join(d, i), await m.writeFile(
							c,
							new DataView(await s.arrayBuffer()),
						), p.add(i), !v && (
							v =
								j()
									.then(() => {
										v = !1, a && o();
									})
						);
					},
					async () => (
						a = !0, await n, await Promise.allSettled([
							g(d),
							y("upload/complete", { id: u }),
						]), u
					),
					async () => {
						await Promise.allSettled([g(d), y("upload/cancel", { id: u })]);
					},
				]
			);
		}
	);
},
	U,
	S,
	H;
({ ing: S, xing: H } = J());
U =
	Object.freeze({
		drag: () => {},
		upload: ie(q.userData),
		invoke: (t, e) => E.ipcRenderer.invoke(t, e),
		xing: H,
		ing: S,
	});
(() => {
	var t, e, r;
	e = { E: U };
	for (t in e) r = e[t], E.contextBridge.exposeInMainWorld(t, r);
	G().then(S);
})();
