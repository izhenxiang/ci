import { i as d } from "./4.js";
import { b as c } from "./0.js";
import { O as p } from "./2.js";
import { $ as _ } from "./h.js";
import {
	s
	as
	i,
	o
	as
	v,
	c
	as
	m,
	f
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
	j
	as
	y,
	a
	as
	b,
	_
	as
	I,
} from "./g.js";
var g = (e) => {
	var o, a, s;
	return (
		a = void 0, o =
			new Promise(
				(n) => {
					a = n;
				},
			), document.hidden ? a() : s =
			_(
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
({ count_down: r, recbar: l } = d);
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
						}, a(), p.pause =
						(n) => {
							o.value = n, n ? (clearInterval(s), s = void 0) : s || a();
						}
				);
			}), { n: e, pause: o, stop: l.cancel }
		);
	},
};
const u = (e) => (w("data-v-7a0cc364"), e = e(), y(), e),
	k = u(() => t("s", null, null, -1)),
	B = u(() => t("i", null, "\u70B9\u6B64\u53D6\u6D88", -1));
function $(e, o) {
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
var z = I(S, [["render", $], ["__scopeId", "data-v-7a0cc364"]]);
export { z as default };
