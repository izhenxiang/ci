import {
	s
	as
	d,
	b
	as
	F,
	o
	as
	L,
	O
	as
	R,
	l
	as
	P,
	c
	as
	v,
	F
	as
	T,
	R
	as
	A,
	g
	as
	M,
	f
	as
	l,
	i
	as
	D,
	t
	as
	V,
	m
	as
	f,
	p
	as
	W,
	j
	as
	q,
	e
	as
	G,
	a
	as
	m,
	_
	as
	H,
} from "./g.js";
import { i as b } from "./4.js";
import { b as w } from "./0.js";
import { O as J } from "./2.js";
import { d as K } from "./y.js"; /* empty css        */
import { c as i } from "./5.js";
import { D as Q } from "./z.js";
import { z as U } from "./_.js";
import "./h.js";
import "./7.js";
import "./x.js";
var h;
h = (e) => (e + "").padStart(2, "0");
var X = () => {
	var e, a, t, r;
	return (
		e = d("00"), a = d("00"), [r, t] =
			(() => {
				var s, o;
				return (
					o = 0, s = void 0, [
						() => {
							s =
								setInterval(
									() => {
										++o, e.value = h(parseInt(o / 60)), a.value = h(o % 60);
									},
									1e3,
								);
						},
						() => {
							clearInterval(s);
						},
					]
				);
			})(), [e, a, r, t]
	);
},
	g,
	B,
	$,
	k,
	E,
	u,
	_,
	j,
	I,
	S,
	y,
	p;
({ recbar: _ } = b);
[E, j, y, S] = X();
I =
	(e) => {
		var a, t, r;
		t =
			e.split(
				`
`,
			), r = [];
		for (a of t) r.push(a.split(" "));
		return r;
	};
u = d(!1);
g = !1;
$ = d();
B =
	(e) => {
		[y, S][e - 0]();
	};
p =
	() => {
		var e;
		({ value: e } = u), e = !e, w.pause(u.value = e), g && B(e);
	};
k =
	{
		pause: p,
		reset: () => {
			g && (
				u.value || p(), R(
					async () => await b.confirm.show("reset") ? w.reset() : p(),
				)
			);
		},
		cancel: async () => {
			if (!g) {
				await _.cancel();
				return;
			}
			u.value || p(), R(
				async () => await b.confirm.show("cancel") ? w.cancel() : p(),
			);
		},
		stop: () => {
			w.stop(), S();
		},
	};
J.start =
	() => {
		y(), g = !0, $.value.className = "";
	};
i.src !== "camera" && P(
	() => import("./c.js"),
	[
		"c.js", "e.js", "2.js", "1.js", "4.js", "5.js", "7.js", "0.js", "x.js",
		"g.js", "5.css", "$.js", "8.js", "3.js",
	],
);
var Y = {
	components: { zAudio: U },
	setup: () => {
		var e, a, t, r, s, o, c, N, O;
		for (
			r = I("video \u6444\u50CF\u5934"), N =
				F(
					I(
						`pause \u6682\u505C
stop \u7ED3\u675F\u5F55\u5236
reset \u91CD\u65B0\u5F55\u5236
cancel \u53D6\u6D88\u5F55\u5236`,
					),
				), O =
				(n) => () => {
					i[n] = i[n] ? "" : localStorage[n], !u.value &&
						!i.video &&
						!i.audio &&
						i.src === "camera" &&
						k.pause();
				}, c = ["audio", "video"], t = 0, s = c.length;
			t < s;
			t++
		) a = c[t], k[a] = O(a);
		return (
			e = d(), o = d(), L(() => {
				K(o.value);
			}), {
				go: (n) => {
					var C;
					if (["pen", "rect"].indexOf(n) + 1) {
						if ({ value: C } = e, C !== n) {
							if (Q.shape = e.value = n, C) {
								return;
							}
						} else {
							e.value = "", _.draw_x();
							return;
						}
						_.draw();
						return;
					}
					(k[n] || _[n])();
				},
				left: r,
				nav: o,
				right: N,
				code: $,
				minute: E,
				second: j,
				pause: u,
				config: i,
				draw: e,
			}
		);
	},
};
const z = (e) => (W("data-v-86d16264"), e = e(), q(), e),
	Z = ["title", "onClick"],
	x = z(() => l("b", null, null, -1)),
	ee = { class: "pause", ref: "code" },
	ae = z(() => l("span", null, ":", -1)),
	re = ["title", "onClick"],
	te = { class: "draw" },
	se = z(() => l("b", null, null, -1));
function oe(e, a) {
	const t = G("z-audio");
	return (
		m(), v(
			"nav",
			{ class: f({ pause: e.pause }), ref: "nav" },
			[
				(
					m(!0), v(
						T,
						null,
						A(
							e.left,
							([r, s], o) => (
								m(), v(
									"a",
									{
										class: f([r, e.config[r] ? "" : "x"]),
										title: s,
										onClick: (c) => e.go(r),
									},
									null,
									10,
									Z,
								)
							),
						),
						256,
					)
				),
				M(t, { onClick: a[0] || (a[0] = (r) => e.go("audio")) }),
				x,
				l("code", ee, [D(V(e.minute), 1), ae, D(V(e.second), 1)], 512),
				(
					m(!0), v(
						T,
						null,
						A(
							e.right,
							([r, s], o) => (
								m(), v(
									"a",
									{ class: f([r]), title: s, onClick: (c) => e.go(r) },
									null,
									10,
									re,
								)
							),
						),
						256,
					)
				),
				l(
					"div",
					te,
					[
						se,
						l(
							"a",
							{
								class: f(["pen", { now: e.draw == "pen" }]),
								onClick: a[1] || (a[1] = (r) => e.go("pen")),
								title: "\u753B\u7B14",
							},
							null,
							2,
						),
						l(
							"a",
							{
								class: f(["rect", { now: e.draw == "rect" }]),
								onClick: a[2] || (a[2] = (r) => e.go("rect")),
								title: "\u753B\u6846",
							},
							null,
							2,
						),
					],
				),
				l(
					"a",
					{
						class: "left",
						onClick: a[3] || (a[3] = (r) => e.go("left")),
						title: "\u6536\u8D77",
					},
				),
				l(
					"a",
					{ class: "expand", onClick: a[4] || (a[4] = (r) => e.go("expand")) },
				),
			],
			2,
		)
	);
}
var we = H(Y, [["render", oe], ["__scopeId", "data-v-86d16264"]]);
export { we as default };
