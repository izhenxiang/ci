import { i as u } from "./3.js";
import { b as c } from "./-.js";
import { O as _ } from "./..js";
import { _ as p } from "./8.js";
import {
	s
	as
	i,
	o
	as
	v,
	a
	as
	m,
	e
	as
	t,
	t
	as
	f,
	m
	as
	h,
	p
	as
	w,
	i
	as
	y,
	d
	as
	b,
	_
	as
	I,
} from "./e.js";
var g = (e) => {
	var o, a, s;
	return (
		a = void 0, o =
			new Promise(
				(n) => {
					a = n;
				},
			), document.hidden ? a() : s =
			p(
				document,
				{
					visibilitychange: () => {
						document.hidden && (s(), a());
					},
				},
			), e.hide(), o
	);
},
	r,
	l;
({ count_down: r, recbar: l } = u);
var S = {
	setup: () => {
		var e, o;
		return (
			e = i(3), o = i(!1), v(() => {
				var a, s;
				return (
					s = void 0, a =
						() => {
							s =
								setInterval(
									async () => {
										var n;
										if (n = e.value - 1, n === 0) {
											await g(r), c.start(), r.close();
											return;
										} else {
											e.value = n;
										}
									},
									1e3,
								);
						}, a(), _.pause =
						(n) => {
							o.value = n, n ? (clearInterval(s), s = void 0) : s || a();
						}
				);
			}), { n: e, pause: o, stop: l.cancel }
		);
	},
};
const d = (e) => (w("data-v-7a0cc364"), e = e(), y(), e),
	k = d(() => t("s", null, null, -1)),
	B = d(() => t("i", null, "点此取消", -1));
function C(e, o) {
	return (
		b(), m(
			"a",
			{
				class: h({ pause: e.pause }),
				onClick: o[0] || (o[0] = (...a) => e.stop && e.stop(...a)),
			},
			[k, t("b", null, f(e.n), 1), B],
			2,
		)
	);
}
var E = I(S, [["render", C], ["__scopeId", "data-v-7a0cc364"]]);
export { E as default };
