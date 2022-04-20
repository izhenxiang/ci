import {
	s
	as
	c,
	o
	as
	I,
	k
	as
	M,
	l
	as
	z,
	a
	as
	g,
	t
	as
	C,
	F
	as
	E,
	e
	as
	o,
	m
	as
	v,
	d
	as
	_,
	p
	as
	L,
	i
	as
	T,
	_
	as
	V,
} from "./e.js";
import { c as k } from "./s.js";
import { m as O } from "./0.js";
import { i as b } from "./3.js";
import { d as D } from "./a.js";
import "./7.js";
import "./..js";
import "./-.js";
import "./k.js";
var P = (e) => new Promise((r) => setTimeout(r, e)), w, j;
({ camera: j } = b);
w = "video";
var $ = {
	setup: () => {
		var e, r, a, m, d, p, h;
		return (
			h = c(), m = c(), r = c(!1), e =
				async (t) => {
					for (var i, l; ; ) {
						try {
							l = await O(t);
						} catch (s) {
							i = s, console.error(t, i), r.value =
								{ audio: "麦克风", video: "摄像头" }[t], await P(1e3);
							continue;
						}
						return (r.value = !1, l);
					}
				}, a = k.src === "camera", I(async () => {
				var t, i, l, s, u;
				if (D(m.value), a) {
					i = [], l = ["audio", w];
					for (t of l) s = await e(t), s && (
						t === w && (u = s), i = i.concat(s.getTracks())
					);
					setTimeout(async () => {
						var f;
						f = new MediaStream(i), M(() => {
							var y, x, B, S;
							({ video: S, audio: y } = k), x = { video: S, audio: y }, B =
								f.getTracks();
							for (t of B) t.enabled = !!x[t.kind];
						}), (
							await z(
								() => import("./r.js"),
								[
									"r.js", "..js", "$.js", "3.js", "s.js", "7.js", "-.js",
									"k.js", "e.js", "9.css", "j.js",
								],
							)
						).default(f);
					});
				} else {
					u = await e(w);
				}
				h.value.srcObject = u;
			}), p = c(outerWidth), d = c(a ? 0 : localStorage.人像镜像 - 0), {
				v: h,
				main: m,
				size: p,
				mirror: d,
				err: r,
				w: (t) => {
					localStorage.人像尺寸 = t, p.value = t, j.size(t);
				},
				turn: () => {
					localStorage.人像镜像 = (d.value = !d.value) - 0;
				},
				x: () => {
					k.video = "";
				},
			}
		);
	},
};
const n = (e) => (L("data-v-457784f0"), e = e(), T(), e),
	F = { ref: "main" },
	H = { key: 0 },
	R = n(
		() =>
			o(
				"svg",
				{
					fill: "none",
					height: "11",
					viewBox: "0 0 10 11",
					width: "10",
					xmlns: "http://www.w3.org/2000/svg",
				},
				[
					o(
						"circle",
						{ cx: "5", cy: "5.5", opacity: "0.6", r: "4.5", stroke: "var(--c)" },
					),
				],
				-1,
			),
	),
	Z = n(
		() =>
			o(
				"svg",
				{
					class: "now",
					fill: "none",
					height: "24",
					viewBox: "0 0 24 24",
					width: "24",
					xmlns: "http://www.w3.org/2000/svg",
				},
				[
					o(
						"circle",
						{
							cx: "12",
							cy: "12",
							fill: "var(--c)",
							opacity: "0.7",
							r: "4.5",
							stroke: "var(--c)",
						},
					),
				],
				-1,
			),
	),
	A = [R, Z],
	N = n(
		() =>
			o(
				"svg",
				{
					fill: "none",
					height: "15",
					viewBox: "0 0 14 15",
					width: "14",
					xmlns: "http://www.w3.org/2000/svg",
				},
				[
					o(
						"circle",
						{ cx: "7", cy: "7.5", opacity: "0.7", r: "6.5", stroke: "var(--c)" },
					),
				],
				-1,
			),
	),
	W = n(
		() =>
			o(
				"svg",
				{
					class: "now",
					fill: "none",
					height: "25",
					viewBox: "0 0 24 25",
					width: "24",
					xmlns: "http://www.w3.org/2000/svg",
				},
				[
					o(
						"circle",
						{
							cx: "12",
							cy: "12.5",
							fill: "var(--c)",
							opacity: "0.7",
							r: "6.5",
							stroke: "var(--c)",
						},
					),
				],
				-1,
			),
	),
	q = [N, W],
	G = n(
		() =>
			o(
				"svg",
				{
					fill: "none",
					height: "25",
					viewBox: "0 0 24 25",
					width: "24",
					xmlns: "http://www.w3.org/2000/svg",
				},
				[
					o(
						"g",
						{ opacity: "0.6" },
						[
							o(
								"path",
								{
									d: "M10 18.5V6.5L3 18.5H10Z",
									fill: "var(--c)",
									stroke: "var(--c)",
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									"stroke-width": "1.5",
								},
							),
							o(
								"path",
								{
									d: "M14 18.5V6.5L21 18.5H14Z",
									stroke: "var(--c)",
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									"stroke-width": "1.5",
								},
							),
						],
					),
				],
				-1,
			),
	),
	J = [G],
	K = n(
		() =>
			o(
				"svg",
				{
					fill: "none",
					height: "25",
					viewBox: "0 0 24 25",
					width: "24",
					xmlns: "http://www.w3.org/2000/svg",
				},
				[
					o(
						"g",
						{ opacity: "0.6" },
						[
							o(
								"path",
								{
									d: "M16 8.5L8 16.5",
									stroke: "var(--c)",
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									"stroke-width": "1.5",
								},
							),
							o(
								"path",
								{
									d: "M16 16.5L8 8.5",
									stroke: "var(--c)",
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									"stroke-width": "1.5",
								},
							),
						],
					),
				],
				-1,
			),
	),
	Q = [K];
function U(e, r) {
	return (
		_(), g(
			"main",
			F,
			[
				e.err ? (_(), g("h3", H, "请授权" + C(e.err), 1)) : (
					_(), g(
						E,
						{ key: 1 },
						[
							o(
								"video",
								{ class: v({ mirror: e.mirror }), autoplay: "", ref: "v" },
								null,
								2,
							),
							o(
								"nav",
								null,
								[
									o(
										"a",
										{
											class: v({ now: e.size <= 250 }),
											onClick: r[0] || (r[0] = (a) => e.w(204)),
										},
										A,
										2,
									),
									o(
										"a",
										{
											class: v({ now: e.size >= 310 }),
											onClick: r[1] || (r[1] = (a) => e.w(324)),
										},
										q,
										2,
									),
									o(
										"a",
										{
											class: v({ mirror: e.mirror }),
											onClick: r[2] || (r[2] = (...a) => e.turn && e.turn(...a)),
										},
										J,
										2,
									),
									o(
										"a",
										{ onClick: r[3] || (r[3] = (...a) => e.x && e.x(...a)) },
										Q,
									),
								],
							),
						],
						64,
					)
				),
			],
			512,
		)
	);
}
var ne = V($, [["render", U], ["__scopeId", "data-v-457784f0"]]);
export { ne as default };
