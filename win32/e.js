import { N as H } from "./2.js";
import { s as M } from "./1.js";
import { c } from "./5.js";
import { i as S } from "./4.js";
import { H as j } from "./$.js";
import "./7.js";
import "./0.js";
import "./x.js";
import "./g.js";
var $, m, n, x, i = H(!0);
({ recbar: n, camera: $ } = S);
i.stop = n.cancel;
m = () => c.src === "camera";
x =
	new Promise(
		(t) => {
			i.start = t;
		},
	);
var F = async (t, b) => {
	var v, _, P, T, u, s, l, r, d, k;
	_ = c.area ? '"avc1.640032"' : "vp9", r =
		new MediaRecorder(
			t,
			{ mimeType: "video/webm;codecs=" + _, videoBitsPerSecond: 2e6 },
		), await x, typeof b == "function" && b(), i.pause =
		(e) => {
			var a, o, f, w, N, g, y, h, p;
			if (m()) {
				for (g = 0, p = [], y = t.getTracks(), f = 0, N = y.length; f < N; f++) o =
					y[f], e ? a = !1 : (
					{ kind: w } = o, w === "video" && p.push(o), a = !!c[w], a && (g += 1)
				), o.enabled = a;
				if (g === 0 && e === !1) {
					if (p.length) {
						c.video = localStorage.video;
						for (o of p) o.enabled = !0;
					} else {
						broadcast.pause(!0);
						return;
					}
				}
			}
			({ state: h } = r), h.startsWith("pause") ? e || r.resume() : h === "recording" &&
				e &&
				r.pause();
		}, d = new Map(), [k, P, v] = await E.upload("rec/" + c.src), s = 0, r.ondataavailable =
		({ data: e }) => {
			d.set(
				s,
				(async () => {
					await k(s, e), d.delete(s);
				})(),
			), ++s;
		}, u = void 0, T =
		new Promise(
			(e) => {
				u = e;
			},
		), l =
		() => {
			var e;
			try {
				r.stop();
			} catch (a) {
				e = a, console.error(e);
			}
		}, i.cancel =
		() => {
			l(), v()
				.finally(() => {
					n.cancel();
				});
		}, i.reset =
		() => {
			l(), v()
				.finally(async () => {
					M(), m() && await $.x_rect();
				});
		}, i.stop =
		async () => {
			l(), n.stop(m()), gc(), await T, t
				.getTracks()
				.map(
					(e) => {
						e.stop();
					},
				), gc(), await S.open(
				j + `video_details.html?user_token=${localStorage.uid}&id=` + await P(),
			), await n.end();
		}, r.onstop =
		async () => {
			await Promise.all(d.values()), u();
		}, r.onerror =
		(e) => {
			console.error(`record \u274C ${e.error.name}`);
		}, r.start(5e3);
};
export { i as ON, F as default };
