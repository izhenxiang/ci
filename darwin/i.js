import { i as w } from "./4.js";
import "./0.js";
import { b as B } from "./t.js";
import { d as I } from "./$$.js"; /* empty css        */
import {
	s
	as
	i,
	r
	as
	N,
	o
	as
	z,
	c
	as
	H,
	w
	as
	g,
	n
	as
	k,
	a
	as
	V,
	b
	as
	x,
	d
	as
	$,
	e
	as
	d,
	f
	as
	C,
	g
	as
	S,
	h
	as
	M,
	p
	as
	W,
	i
	as
	O,
	_
	as
	R,
} from "./f.js";
var D = {
	components: { Drag: I, btn: B },
	setup: () => {
		var e, u, n, s, v, a, y, _, t, h, o, r;
		return (
			{ body: e } = document, { clientHeight: n, clientWidth: s } = e, h = i(!0), _ =
				96, a = Math.min(546, n - _), t = Math.min(a * 1.57, s - _), o =
				(s - t) / 2, r = (n - a) / 2, y =
				{ width: `${t}px`, height: `${a}px`, left: `${o}px`, top: `${r}px` }, o =
				i(o), r = i(r), a = i(a), t = i(t), v = i(), N(), { cancel: u } =
				w.recbar, z(() => {
				var l, p;
				l = v.value.i, (
					p =
						new ResizeObserver(
							(m) => {
								var c, f, b;
								for (b of m) {
									if (
										{ target: { clientHeight: c, clientWidth: f } } = b, f === 0
									) {
										p.unobserve(l);
										return;
									}
									t.value = f, a.value = c;
									break;
								}
							},
						)
				).observe(l);
			}), {
				drag: v,
				wait: h,
				x: o,
				y: r,
				w: t,
				h: a,
				init: y,
				start: async () => {
					h.value = !1, localStorage.area =
						JSON.stringify([o.value, r.value, t.value, a.value].map(Math.round)), await w.area();
				},
				move: ({ offsetLeft: l, offsetTop: p }, m, c) => {
					o.value = l + m, r.value = p + c;
				},
				cancel: u,
			}
		);
	},
};
const E = (e) => (W("data-v-51388c64"), e = e(), O(), e),
	J = M("开始录制"),
	T = M("×"),
	j = E(() => d("b", null, null, -1)),
	q = [j];
function A(e, u) {
	const n = x("btn"), s = x("drag");
	return e.wait ? (
		$(), H(
			s,
			{
				key: 0,
				minH: 95,
				minW: 242,
				move: e.move,
				style: k(e.init),
				ref: "drag",
			},
			{
				default: g(
					() => [
						d(
							"b",
							null,
							[
								d(
									"i",
									null,
									[
										d(
											"nav",
											null,
											[
												C(
													n,
													{ onClick: S(e.start, ["prevent"]) },
													{ default: g(() => [J]), _: 1 },
													8,
													["onClick"],
												),
												C(
													n,
													{ onClick: S(e.cancel, ["prevent"]) },
													{ default: g(() => [T]), _: 1 },
													8,
													["onClick"],
												),
											],
										),
									],
								),
							],
						),
					],
				),
				_: 1,
			},
			8,
			["move", "style"],
		)
	) : (
		$(), V(
			"i",
			{
				key: 1,
				style: k({
					width: `${e.w}px`,
					height: `${e.h}px`,
					left: `${e.x}px`,
					top: `${e.y}px`,
				}),
			},
			q,
			4,
		)
	);
}
var U = R(D, [["render", A], ["__scopeId", "data-v-51388c64"]]);
export { U as default };
