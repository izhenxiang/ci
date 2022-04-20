(function () {
	"use strict";
	self.onmessage =
		({ data: [e, f, g, c, d, a, n] }) => {
			var s, m, t, r;
			a *= e, n *= e, r = n, t = a, c *= e, d *= e, s =
				new OffscreenCanvas(t, r), m =
				s.getContext("2d", { alpha: !1, desynshronized: !0 }), f
				.pipeThrough(
					new TransformStream({
						transform: (o, h) => {
							var u;
							({ timestamp: u } = o), m.drawImage(o, c, d, a, n, 0, 0, t, r), h.enqueue(
								new VideoFrame(s, { timestamp: u }),
							), o.close();
						},
					}),
				)
				.pipeTo(g);
		};
})();
