var q = Object.defineProperty;
var D = Object.getOwnPropertySymbols;
var Q = Object.prototype.hasOwnProperty,
	R = Object.prototype.propertyIsEnumerable;
var A = (e, r, t) =>
	r in e ? q(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] =
		t,
	B = (e, r) => {
		for (var t in r || (r = {})) Q.call(r, t) && A(e, t, r[t]);
		if (D) {
			for (var t of D(r)) R.call(r, t) && A(e, t, r[t]);
		}
		return e;
	};
import { c as n, m as W } from "./s.js";
import { i as k } from "./3.js";
import {
	H
	as
	E,
	o
	as
	G,
	d
	as
	l,
	a
	as
	c,
	F
	as
	$,
	Q
	as
	S,
	m
	as
	H,
	e
	as
	i,
	t
	as
	w,
	p
	as
	I,
	i
	as
	C,
	_
	as
	y,
	v
	as
	J,
	L
	as
	j,
	S
	as
	V,
	s
	as
	x,
	k
	as
	K,
	b
	as
	p,
	f
	as
	h,
	c
	as
	X,
	w
	as
	T,
	j
	as
	Y,
	h
	as
	Z,
} from "./e.js";
import { z as ee } from "./i.js";
import { b as re } from "./t.js";
import { s as oe } from "./$.js";
import { v as te } from "./2.js";
import { H as L } from "./j.js";
import "./7.js";
import "./..js";
import "./-.js";
import "./k.js";
var g, N, b;
({ camera: g, main: N } = k);
b =
	() => {
		var e, r;
		if (gc(), document.hidden) {
			localStorage.recing || g.x();
			return;
		}
		switch (delete localStorage.recing, { src: e } = n, g.x(), e) {
			case "screen":
				n.video = "";
				break;
			default:
				if (!n.video) {
					if ({ video: r } = localStorage, !r) {
						return;
					}
					n.video = r;
				}
				e === "all" ? g.circle(localStorage.人像尺寸 - 0) : g.rect(), setTimeout(
					() => {
						document.hidden || N(!1);
					},
					1e3,
				);
		}
	};
document.addEventListener("visibilitychange", b);
var ae = {
	setup: () => {
		var e, r, t, o, a, s;
		for (
			o = ["all 屏幕+摄像头录制", "screen 屏幕录制", "camera 摄像头录制"], s = r = 0, t =
				o.length;
			r < t;
			s = ++r
		) e = o[s], a = e.indexOf(" "), o[s] = [e.slice(0, a), e.slice(1 + a)];
		return (
			E(() => n.src, b), G(b), E(
				() => n.video,
				(d) => {
					var u;
					document.hidden || (
						{ src: u } = n, d ? u === "screen" && (
							n.src = localStorage.src || "all"
						) : u !== "screen" && (localStorage.src = n.src, n.src = "screen"), b()
					);
				},
			), {
				li: o,
				config: n,
				go: (d) => {
					n.src = d;
				},
			}
		);
	},
};
const se = (e) => (I("data-v-1eb91dd6"), e = e(), C(), e),
	ie = { class: "method" },
	ne = ["onClick"],
	de = se(() => i("b", { class: "ico" }, null, -1));
function le(e, r) {
	return (
		l(), c(
			"div",
			ie,
			[
				(
					l(!0), c(
						$,
						null,
						S(
							e.li,
							([t, o]) => (
								l(), c(
									"a",
									{
										class: H([t, e.config.src == t ? "now" : ""]),
										onClick: (a) => e.go(t),
									},
									[de, i("i", null, w(o), 1)],
									10,
									ne,
								)
							),
						),
						256,
					)
				),
			],
		)
	);
}
var ce = y(ae, [["render", le], ["__scopeId", "data-v-1eb91dd6"]]),
	ue = {
		setup: () => ({
			config: n,
			disabled: J(() => n.src === "camera"),
			li: "整个桌面 应用窗口 指定区域".split(" "),
		}),
	};
const _e = (e) => (I("data-v-cf47a3ec"), e = e(), C(), e),
	ve = { class: "bk" },
	fe = _e(() => i("h2", null, "录制区域", -1)),
	pe = { class: "select" },
	me = ["disabled"],
	he = ["value"];
function ge(e, r) {
	return (
		l(), c(
			"div",
			ve,
			[
				fe,
				i(
					"div",
					pe,
					[
						j(
							i(
								"select",
								{
									disabled: e.disabled,
									"onUpdate:modelValue": r[0] || (
										r[0] = (t) => e.config.area = t
									),
								},
								[
									(
										l(!0), c(
											$,
											null,
											S(
												e.li,
												(t, o) => (l(), c("option", { value: o }, w(t), 9, he)),
											),
											256,
										)
									),
								],
								8,
								me,
							),
							[[V, e.config.area]],
						),
					],
				),
			],
		)
	);
}
var be = y(ue, [["render", ge], ["__scopeId", "data-v-cf47a3ec"]]),
	$e = {
		components: { zAudio: ee },
		setup: () => {
			var e, r, t;
			return (
				t = { audio: x([]), video: x([]) }, { mediaDevices: e } = navigator, r =
					async () => {
						var o, a, s, d, u, v, m, _, f, U, z;
						v = {}, m = await e.enumerateDevices();
						for (U of m) ({ kind: d, label: u, deviceId: o } = U), o === "default" && (
							u = u.replace("Default - ", "默认 ")
						), d.endsWith("input") && (
							d = d.slice(0, -5), (v[d] = v[d] || []).push([o, u])
						);
						for (s in t) t[s].value = v[s] || [];
						for (s in t) {
							if ({ value: f } = t[s], f.length) {
								if (_ = n[s], _) {
									for (z of f) if ([a] = z, _ === a) {
										return;
									}
								}
								_ !== "" && (_ = f[0][0]);
							} else {
								_ = 0;
							}
							n[s] = _;
						}
					}, K(() => {
					var o, a, s;
					a = ["audio", "video"];
					for (o of a) s = n[o], s && (localStorage[o] = s);
				}), (async () => await r())(), B(
					{
						refresh: r,
						config: n,
						x: (o) => {
							var a;
							a = n[o], a ? a = "" : a = localStorage[o] || "", n[o] = a;
						},
					},
					t,
				)
			);
		},
	};
const F = (e) => (I("data-v-e19e988e"), e = e(), C(), e),
	we = { class: "bk" },
	ye = F(() => i("h2", null, "设备设置", -1)),
	Se = { class: "video" },
	ke = { class: "select" },
	Ie = { label: "输入源" },
	Ce = ["value"],
	je = F(
		() =>
			i("optgroup", { label: "───" }, [i("option", { value: "" }, "禁用")], -1),
	),
	Ve = { class: "audio" },
	xe = { class: "select" },
	Fe = { label: "输入源" },
	Ue = ["value"],
	ze = F(
		() =>
			i("optgroup", { label: "───" }, [i("option", { value: "" }, "禁用")], -1),
	);
function De(e, r) {
	const t = p("z-audio");
	return (
		l(), c(
			"div",
			we,
			[
				ye,
				i(
					"li",
					Se,
					[
						i(
							"label",
							{
								class: H({ x: !e.config.video }),
								onClick: r[0] || (r[0] = (o) => e.x("video")),
								for: "driveVideo",
							},
							null,
							2,
						),
						i(
							"div",
							ke,
							[
								j(
									i(
										"select",
										{
											id: "driveVideo",
											onFocus: r[1] || (
												r[1] = (...o) => e.refresh && e.refresh(...o)
											),
											"onUpdate:modelValue": r[2] || (
												r[2] = (o) => e.config.video = o
											),
										},
										[
											i(
												"optgroup",
												Ie,
												[
													(
														l(!0), c(
															$,
															null,
															S(
																e.video,
																([o, a]) => (
																	l(), c("option", { value: o }, w(a), 9, Ce)
																),
															),
															256,
														)
													),
												],
											),
											je,
										],
										544,
									),
									[[V, e.config.video]],
								),
							],
						),
					],
				),
				i(
					"li",
					Ve,
					[
						i(
							"label",
							{
								onClick: r[3] || (r[3] = (o) => e.x("audio")),
								for: "driveAudio",
							},
							[h(t)],
						),
						i(
							"div",
							xe,
							[
								j(
									i(
										"select",
										{
											id: "driveAudio",
											onFocus: r[4] || (
												r[4] = (...o) => e.refresh && e.refresh(...o)
											),
											"onUpdate:modelValue": r[5] || (
												r[5] = (o) => e.config.audio = o
											),
										},
										[
											i(
												"optgroup",
												Fe,
												[
													(
														l(!0), c(
															$,
															null,
															S(
																e.audio,
																([o, a]) => (
																	l(), c("option", { value: o }, w(a), 9, Ue)
																),
															),
															256,
														)
													),
												],
											),
											ze,
										],
										544,
									),
									[[V, e.config.audio]],
								),
							],
						),
					],
				),
			],
		)
	);
}
var Ae = y($e, [["render", De], ["__scopeId", "data-v-e19e988e"]]),
	Be = { components: { btn: re } };
const Ee = (e) => (I("data-v-b0e482fa"), e = e(), C(), e),
	He = Ee(() => i("b", null, null, -1));
function Te(e, r) {
	const t = p("btn");
	return (
		l(), X(
			t,
			null,
			{ default: T(() => [He, Y(e.$slots, "default", {}, void 0, !0)]), _: 3 },
		)
	);
}
var Le = y(Be, [["render", Te], ["__scopeId", "data-v-b0e482fa"]]);
var O, M;
M =
	() => {
		var e;
		return (e = new Headers(), e.append("user_token", localStorage.uid), e);
	};
O =
	class {
		constructor(r) {
			this.json = this.json.bind(this), this.ipc = r;
		}
		async fetch(r, t = {}) {
			var o;
			if (
				t.headers = M(), r.indexOf(".do") < 0 && (r += ".do"), o =
					await fetch(L + r, t), o.status === 401
			) {
				delete localStorage.uid, this.ipc.auto_update.relaunch();
				return;
			}
			return o;
		}
		async json(r, t = {}) {
			var o;
			return (o = await this.fetch(r, t), o.json());
		}
	};
var Ne = (e) => new O(e);
var Oe = Ne(k),
	Me = new Proxy(
		() => {},
		{
			get: (e, r) => {
				_paq.push(["trackEvent", "点", r]);
			},
		},
	),
	P;
({ auto_update: P } = k);
var Pe = {
	components: { src: ce, rArea: be, drive: Ae, btn: Le },
	setup: () => {
		var e, r, t;
		return (
			r = "开始录制", e = x(r), t =
				(o) => {
					e.value = `请授权${o}后点此录制`;
				}, {
				txt: e,
				start: async () => {
					var o, a, s, d, u, v, m, _;
					v = Object.entries({ audio: "麦克风", video: "摄像头" });
					for (_ of v) if ([s, a] = _, d = n[s], d) {
						try {
							await W[s](d);
						} catch {
							t(a);
							return;
						}
					}
					if (n.src !== "camera") {
						try {
							await te();
						} catch {
							t("录屏");
							return;
						}
					}
					localStorage.recing = 1, { avatarUrl: o, space: { used: m, max: u } } =
						await Oe.json("user/get"), localStorage.ico = o, m >= u ? (
						e.value = "请付费扩容后点此录制", k.open(
							L + "?pay=true&user_token=" + localStorage.uid,
						)
					) : (e.value = r, Me.录, oe());
				},
			}
		);
	},
};
(async () => await P.update_promise())();
function qe(e, r) {
	const t = p("src"), o = p("r-area"), a = p("drive"), s = p("btn");
	return (
		l(), c(
			$,
			null,
			[
				h(t),
				i(
					"main",
					null,
					[
						h(o),
						h(a),
						h(
							s,
							{ onClick: e.start },
							{ default: T(() => [Z(w(e.txt), 1)]), _: 1 },
							8,
							["onClick"],
						),
					],
				),
			],
			64,
		)
	);
}
var sr = y(Pe, [["render", qe], ["__scopeId", "data-v-465d0ab4"]]);
export { sr as default };
