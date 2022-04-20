import { i as l } from "./3.js";
import { b as _ } from "./t.js";
import {
	o
	as
	c,
	a
	as
	p,
	e
	as
	o,
	t
	as
	n,
	f
	as
	a,
	w
	as
	s,
	b
	as
	m,
	d
	as
	u,
	h
	as
	i,
	_
	as
	d,
} from "./e.js";
var r;
({ confirm: r } = l);
var f = {
	props: "yes no h1 tip".split(" "),
	components: { btn: _ },
	setup: () => (c(() => {}), { y: r.y, n: r.n }),
};
function v(e, y) {
	const t = m("btn");
	return (
		u(), p(
			"main",
			null,
			[
				o("h1", null, n(e.h1), 1),
				o("p", null, n(e.tip), 1),
				o(
					"footer",
					null,
					[
						a(
							t,
							{ onClick: e.n },
							{ default: s(() => [i(n(e.no), 1)]), _: 1 },
							8,
							["onClick"],
						),
						a(
							t,
							{ onClick: e.y },
							{ default: s(() => [i(n(e.yes), 1)]), _: 1 },
							8,
							["onClick"],
						),
					],
				),
			],
		)
	);
}
var b = d(f, [["render", v], ["__scopeId", "data-v-7d068790"]]);
export { b as c };
