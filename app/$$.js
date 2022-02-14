import { a as M, _ as V } from "./_.js";
import { c as I } from "./n.js";
import { m as z } from "./g.js";
import { i as O } from "./1.js";
import {
  s as B,
  e as S,
  C as D,
  k as T,
  u as o,
  D as p,
  F as N,
  o as R,
  z as $,
  A,
} from "./6.js";
import "./v.js";
import "./0.js";
import "./-.js";
import "./b.js";
import "./2.js";
var C, m, c;
C = !0;
({ camera: c } = O);
m = "video";
var F = {
  setup: () => {
    var e, r, i, d, w, f, g, h, k, E, y, v;
    return (
      (v = B()),
      (e = void 0),
      C
        ? ((r = i = void 0),
          (k = "pointermove"),
          (h = async (t) => {
            var s, n;
            return ({ screenX: s, screenY: n } = t), await c.move(s - r, n - i);
          }),
          (f = async (t) => {
            await h(t);
          }),
          (w = (t) => {
            t.button === 0 &&
              t.target.tagName === "VIDEO" &&
              (c.init(),
              (r = t.screenX),
              (i = t.screenY),
              e.setPointerCapture(t.pointerId),
              e.addEventListener(k, f));
          }),
          (E = async (t) => {
            await h(t),
              e.releasePointerCapture(t.pointerId),
              e.removeEventListener(k, f);
          }),
          (g = (t) => {
            E(t);
          }))
        : (w = g = () => {}),
      S(async () => {
        var t, s, n, L, u, _;
        if (
          (C && ((document.body.style.appRegion = "no-drag"), (e = v.value)),
          I.src === "camera")
        ) {
          (n = []), (L = ["audio", m]);
          for (s of L)
            (u = await z(s)),
              s === m && u && (_ = u),
              (n = n.concat(u.getTracks()));
          setTimeout(async () => {
            var l;
            (l = new MediaStream(n)),
              D(() => {
                var b, x, P, j;
                ({ video: j, audio: b } = I),
                  (x = {
                    video: j,
                    audio: b,
                  }),
                  (P = l.getTracks());
                for (s of P) s.enabled = !!x[s.kind];
              }),
              (
                await M(
                  () => import("./x.js"),
                  [
                    "x.js",
                    "0.js",
                    "n.js",
                    "v.js",
                    "-.js",
                    "b.js",
                    "6.js",
                    "1.js",
                    "9.js",
                  ]
                )
              ).default(l);
          });
        } else _ = await z(m);
        try {
          v.value.srcObject = _;
        } catch (l) {
          (t = l), console.error(t), location.reload();
        }
      }),
      (y = B(outerWidth)),
      (d = B(0)),
      {
        v,
        size: y,
        mirror: d,
        mouseup: g,
        mousedown: w,
        w: (t) => {
          (y.value = t), c.size(t);
        },
        turn: () => {
          d.value = !d.value;
        },
        x: () => {
          I.video = "";
        },
      }
    );
  },
};
const a = (e) => ($("data-v-6b28ec50"), (e = e()), A(), e),
  H = a(() =>
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
        o("circle", {
          cx: "5",
          cy: "5.5",
          opacity: "0.6",
          r: "4.5",
          stroke: "var(--c)",
        }),
      ],
      -1
    )
  ),
  W = a(() =>
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
        o("circle", {
          cx: "12",
          cy: "12",
          fill: "var(--c)",
          opacity: "0.7",
          r: "4.5",
          stroke: "var(--c)",
        }),
      ],
      -1
    )
  ),
  X = [H, W],
  Y = a(() =>
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
        o("circle", {
          cx: "7",
          cy: "7.5",
          opacity: "0.7",
          r: "6.5",
          stroke: "var(--c)",
        }),
      ],
      -1
    )
  ),
  Z = a(() =>
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
        o("circle", {
          cx: "12",
          cy: "12.5",
          fill: "var(--c)",
          opacity: "0.7",
          r: "6.5",
          stroke: "var(--c)",
        }),
      ],
      -1
    )
  ),
  q = [Y, Z],
  G = a(() =>
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
          {
            opacity: "0.6",
          },
          [
            o("path", {
              d: "M10 18.5V6.5L3 18.5H10Z",
              fill: "var(--c)",
              stroke: "var(--c)",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "1.5",
            }),
            o("path", {
              d: "M14 18.5V6.5L21 18.5H14Z",
              stroke: "var(--c)",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "1.5",
            }),
          ]
        ),
      ],
      -1
    )
  ),
  J = [G],
  K = a(() =>
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
          {
            opacity: "0.6",
          },
          [
            o("path", {
              d: "M16 8.5L8 16.5",
              stroke: "var(--c)",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "1.5",
            }),
            o("path", {
              d: "M16 16.5L8 8.5",
              stroke: "var(--c)",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "1.5",
            }),
          ]
        ),
      ],
      -1
    )
  ),
  Q = [K];

function U(e, r) {
  return (
    R(),
    T(
      N,
      null,
      [
        o(
          "video",
          {
            class: p({
              mirror: e.mirror,
            }),
            onLostpointercapture:
              r[0] || (r[0] = (...i) => e.mouseup && e.mouseup(...i)),
            onPointercancel:
              r[1] || (r[1] = (...i) => e.mouseup && e.mouseup(...i)),
            onPointerdown:
              r[2] || (r[2] = (...i) => e.mousedown && e.mousedown(...i)),
            onPointerup:
              r[3] || (r[3] = (...i) => e.mouseup && e.mouseup(...i)),
            autoplay: "",
            ref: "v",
          },
          null,
          34
        ),
        o("nav", null, [
          o(
            "a",
            {
              class: p({
                now: e.size <= 250,
              }),
              onClick: r[4] || (r[4] = (i) => e.w(200)),
            },
            X,
            2
          ),
          o(
            "a",
            {
              class: p({
                now: e.size >= 310,
              }),
              onClick: r[5] || (r[5] = (i) => e.w(320)),
            },
            q,
            2
          ),
          o(
            "a",
            {
              class: p({
                mirror: e.mirror,
              }),
              onClick: r[6] || (r[6] = (...i) => e.turn && e.turn(...i)),
            },
            J,
            2
          ),
          o(
            "a",
            {
              onClick: r[7] || (r[7] = (...i) => e.x && e.x(...i)),
            },
            Q
          ),
        ]),
      ],
      64
    )
  );
}
var ve = V(F, [
  ["render", U],
  ["__scopeId", "data-v-6b28ec50"],
]);
export { ve as default };
