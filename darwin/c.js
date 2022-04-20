import { i as L } from "./3.js";
import "./..js";
import { b as E } from "./t.js"; /* empty css        */
import { _ as z } from "./8.js";
import {
	R
	as
	P,
	s
	as
	T,
	r
	as
	g,
	o
	as
	Y,
	N
	as
	q,
	a
	as
	m,
	e
	as
	w,
	C
	as
	I,
	j
	as
	D,
	d
	as
	f,
	_
	as
	j,
	F
	as
	N,
	f
	as
	H,
	w
	as
	C,
	g
	as
	M,
	c
	as
	J,
	n
	as
	Q,
	h
	as
	k,
	b
	as
	R,
	Q
	as
	U,
	t
	as
	W,
} from "./e.js";
var V = (e, o) => {
	var r;
	return (r = z(e, o), P(r), r);
},
	$,
	B,
	A;
A =
	(e) => {
		var o, r, s;
		return (
			s = 0, { requestAnimationFrame: r, cancelAnimationFrame: o } = window, (
				v,
				u = 300,
			) => {
				var _, d, c, t, n;
				o(s), c = 0, _ = (e.scrollTop - v) / 2, n = v + _, d = 0, t =
					function (a) {
						if (d) {
							if (c += Math.PI * (a - d) / u, c >= Math.PI) {
								e.scrollTop = v;
								return;
							}
							e.scrollTop = n + (_ * Math.cos(c));
						}
						d = a, s = r(t);
					}, e.scrollTop !== v && (s = r(t));
			}
		);
	};
B = "scroll";
$ = document.documentElement;
var G = {
	setup: () => {
		var e, o, r, s, v, u, _, d, c;
		return (
			r = T(), c = T(), u = T(), o = T(), v = void 0, d = g(0), e = void 0, s =
				() => {
					var t, n;
					n = [$, o.value];
					for (t of n) t?.classList.remove(B);
					typeof e == "function" && e(), e = void 0;
				}, _ = void 0, P(s), Y(() => {
				var t, n, a, l, h;
				t = r.value, h = c.value, v = A(t), l =
					() => {
						var p, i, y, b, S, F, O;
						!d.value || (
							{ clientHeight: i, scrollHeight: S, scrollTop: F } = t, y =
								Math.max(parseInt(i * i / S) - 4, 48), b = u.value, p = o.value, p.style.opacity =
								1, O = parseInt(F / (S - i) * (i - 4 - y)), Object.assign(
								b.style,
								{ height: y + "px", top: O + "px" },
							), clearTimeout(_), _ = setTimeout(() => p.style.opacity = 0, 1e3)
						);
					}, n =
					() => {
						var p, i;
						return (
							{ clientHeight: p, scrollHeight: i } = t, i <= p ? d.value = 0 : d.value =
								1, q(l)
						);
					}, a = new ResizeObserver(n), a.observe(h), V(t, { scroll: l }), V(
					window,
					{ resize: n },
				), P(() => (a.disconnect(), s()));
			}), {
				turn: d,
				main: r,
				si: u,
				aside: o,
				wrap: c,
				click: (t) => {
					var n, a, l;
					a = r.value, { clientHeight: n, scrollHeight: l } = a, v(
						parseInt(t.offsetY / n * (l - n)),
					);
				},
				down: (t) => {
					var n, a, l, h;
					$.setPointerCapture(t.pointerId), h = [$, o.value];
					for (a of h) a?.classList.add(B);
					return (
						l = r.value, n = t.screenY, e =
							z(
								$,
								{
									lostpointercapture: s,
									pointerup: s,
									pointermove: ({ screenY: p }) => {
										var i, y, b;
										({ clientHeight: i, scrollHeight: b } = l), y = p - n, l.scrollTop +=
											y / i * b, n = p;
									},
								},
							)
					);
				},
			}
		);
	},
};
const K = { class: "scroll", ref: "main" }, X = { class: "bar", ref: "wrap" };
function Z(e, o) {
	return (
		f(), m(
			"main",
			K,
			[
				e.turn ? (
					f(), m(
						"aside",
						{
							key: 0,
							onPointerdown: o[1] || (o[1] = (...r) => e.click && e.click(...r)),
							ref: "aside",
						},
						[
							w(
								"i",
								{
									onPointerdown: o[0] || (
										o[0] = (...r) => e.down && e.down(...r)
									),
									ref: "si",
								},
								null,
								544,
							),
						],
						544,
					)
				) : I("", !0),
				w(
					"div",
					null,
					[w("div", X, [D(e.$slots, "default", {}, void 0, !0)], 512)],
				),
			],
			512,
		)
	);
}
var x = j(G, [["render", Z], ["__scopeId", "data-v-a3bfce1e"]]),
	ee = {
		components: { btn: E, scrollbar: x },
		setup: () => {
			var e, o, r, s, v, u, _, d, c, t, n, a, l;
			return (
				{ body: e } = document, { clientHeight: r, clientWidth: s } = e, d = 96, u =
					Math.min(546, r - d), c = Math.min(u * 1.57, s - d), a = (s - c) / 2, l =
					(r - u) / 2, { cancel: o, win_source: n } = L.recbar, _ = T(0), (
					async () => _.value = await n()
				)(), t = g(!0), v = g(!0), u = g(u), c = g(c), a = g(a), l = g(l), {
					li: _,
					h: u,
					w: c,
					x: a,
					y: l,
					go: v,
					wait: t,
					run: async (h) => {
						var p, i;
						i = _.value[h], p = i[2], [a.value, l.value, c.value, u.value] =
							i.slice(3), localStorage.area =
							JSON.stringify(
								[a.value, l.value, c.value, u.value].map(Math.round),
							), t.value = !1, await L.wintop(p);
					},
					start: async () => {
						v.value = !1, await L.area();
					},
					move: ({ offsetLeft: h, offsetTop: p }, i, y) => {
						a.value = h + i, l.value = p + y;
					},
					cancel: o,
				}
			);
		},
	};
const re = { key: 0 },
	te = k("请选择窗口"),
	ae = k("×"),
	ne = ["onClick"],
	oe = ["src"],
	le = { key: 1 },
	ie = k("没有可以录制的窗口"),
	se = k("×"),
	ue = { key: 0 },
	ce = k("开始录制"),
	ve = k("×");
function de(e, o) {
	const r = R("btn"), s = R("scrollbar");
	return e.wait ? (
		f(), m(
			"div",
			re,
			[
				e.li ? (
					f(), m(
						N,
						{ key: 0 },
						[
							e.li.length ? (
								f(), m(
									N,
									{ key: 0 },
									[
										w(
											"h2",
											null,
											[
												te,
												H(
													r,
													{ onClick: M(e.cancel, ["prevent"]) },
													{ default: C(() => [ae]), _: 1 },
													8,
													["onClick"],
												),
											],
										),
										H(
											s,
											null,
											{
												default: C(
													() => [
														w(
															"main",
															null,
															[
																(
																	f(!0), m(
																		N,
																		null,
																		U(
																			e.li,
																			(v, u) => (
																				f(), m(
																					"li",
																					{ onClick: (_) => e.run(u) },
																					[
																						w("img", { src: v[0] }, null, 8, oe),
																						w("b", null, W(v[1]), 1),
																					],
																					8,
																					ne,
																				)
																			),
																		),
																		256,
																	)
																),
															],
														),
													],
												),
												_: 1,
											},
										),
									],
									64,
								)
							) : (
								f(), m(
									"h2",
									le,
									[
										ie,
										H(
											r,
											{ onClick: M(e.cancel, ["prevent"]) },
											{ default: C(() => [se]), _: 1 },
											8,
											["onClick"],
										),
									],
								)
							),
						],
						64,
					)
				) : I("", !0),
			],
		)
	) : (
		f(), m(
			"i",
			{
				key: 1,
				style: Q({
					width: `${e.w}px`,
					height: `${e.h}px`,
					left: `${e.x}px`,
					top: `${e.y}px`,
				}),
			},
			[
				w(
					"b",
					null,
					[
						e.go ? (
							f(), m(
								"nav",
								ue,
								[
									e.li ? (
										f(), J(
											r,
											{ key: 0, onClick: M(e.start, ["prevent"]) },
											{ default: C(() => [ce]), _: 1 },
											8,
											["onClick"],
										)
									) : I("", !0),
									H(
										r,
										{ onClick: M(e.cancel, ["prevent"]) },
										{ default: C(() => [ve]), _: 1 },
										8,
										["onClick"],
									),
								],
							)
						) : I("", !0),
					],
				),
			],
			4,
		)
	);
}
var we = j(ee, [["render", de], ["__scopeId", "data-v-9a5ea042"]]);
export { we as default };
