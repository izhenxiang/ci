var s = new BroadcastChannel("rec"),
	v = [],
	c = (r = !1) => {
		var a;
		return (
			a = {}, s.addEventListener(
				"message",
				async ({ data: n }) => {
					var e;
					e = n[0], await (
						typeof a[e] == "function" ? a[e](...n.slice(1)) : void 0
					);
				},
			), r && v.push(a), a
		);
	},
	o = c();
export { c as N, o as O, s as c, v as h };
