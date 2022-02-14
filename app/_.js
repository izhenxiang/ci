import { s as m, n as f, c as v, r as y, o as g, a as h } from "./6.js";
const L = function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) o(e);
  new MutationObserver((e) => {
    for (const n of e)
      if (n.type === "childList")
        for (const i of n.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && o(i);
  }).observe(document, {
    childList: !0,
    subtree: !0,
  });

  function a(e) {
    const n = {};
    return (
      e.integrity && (n.integrity = e.integrity),
      e.referrerpolicy && (n.referrerPolicy = e.referrerpolicy),
      e.crossorigin === "use-credentials"
        ? (n.credentials = "include")
        : e.crossorigin === "anonymous"
        ? (n.credentials = "omit")
        : (n.credentials = "same-origin"),
      n
    );
  }

  function o(e) {
    if (e.ep) return;
    e.ep = !0;
    const n = a(e);
    fetch(e.href, n);
  }
};
L();
const O = "modulepreload",
  _ = {},
  P = "/",
  s = function (t, a) {
    return !a || a.length === 0
      ? t()
      : Promise.all(
          a.map((o) => {
            if (((o = `${P}${o}`), o in _)) return;
            _[o] = !0;
            const e = o.endsWith(".css"),
              n = e ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${o}"]${n}`)) return;
            const i = document.createElement("link");
            if (
              ((i.rel = e ? "stylesheet" : O),
              e || ((i.as = "script"), (i.crossOrigin = "")),
              (i.href = o),
              document.head.appendChild(i),
              e)
            )
              return new Promise((d, p) => {
                i.addEventListener("load", d), i.addEventListener("error", p);
              });
          })
        ).then(() => t());
  };

function b(r) {
  switch (r) {
    case "./page/area.vue":
      return s(
        () => import("./c.js"),
        [
          "c.js",
          "8.css",
          "1.js",
          "0.js",
          "b.js",
          "6.js",
          "z.js",
          "1.css",
          "r.js",
          "3.css",
        ]
      );
    case "./page/camera.vue":
      return s(
        () => import("./$$.js"),
        [
          "$$.js",
          "2.css",
          "n.js",
          "v.js",
          "0.js",
          "-.js",
          "b.js",
          "6.js",
          "g.js",
          "2.js",
          "1.js",
        ]
      );
    case "./page/count_down.vue":
      return s(
        () => import("./$.js"),
        ["$.js", "$.css", "1.js", "-.js", "0.js", "6.js"]
      );
    case "./page/draw.vue":
      return s(
        () => import("./w.js"),
        [
          "w.js",
          "..css",
          "1.js",
          "0.js",
          "k.js",
          "v.js",
          "-.js",
          "b.js",
          "6.js",
        ]
      );
    case "./page/main.vue":
      return s(
        () => import("./t.js"),
        ["t.js", "-.css", "9.js", "1.js", "6.js", "f.js"]
      );
    case "./page/recbar.vue":
      return s(
        () => import("./8.js"),
        [
          "8.js",
          "7.css",
          "1.js",
          "-.js",
          "0.js",
          "n.js",
          "v.js",
          "b.js",
          "6.js",
          "7.js",
          "k.js",
          "4.js",
        ]
      );
    case "./page/update.vue":
      return s(
        () => import("./h.js"),
        [
          "h.js",
          ".css",
          "1.js",
          "0.js",
          "-.js",
          "7.js",
          "6.js",
          "a.js",
          "b.js",
          "f.js",
        ]
      );
    default:
      return new Promise(function (t, a) {
        (typeof queueMicrotask == "function"
          ? queueMicrotask
          : setTimeout)(a.bind(null, new Error("Unknown variable dynamic import: " + r)));
      });
  }
}
var w = {
  setup: () => {
    var r;
    return (
      (r = m()),
      (async () => {
        var t;
        ({ hash: t } = location),
          (r.value = (
            await b(`./page/${t.slice(1).split("/", 1)[0]}.vue`)
          ).default),
          f(E.xing);
      })(),
      {
        c: r,
      }
    );
  },
};

function D(r, t) {
  return g(), v(y(r.c));
}
var R = (r, t) => {
    const a = r.__vccOpts || r;
    for (const [o, e] of t) a[o] = e;
    return a;
  },
  k = R(w, [["render", D]]),
  u,
  l,
  c;
(async () => {
  var r;
  return (
    (r = await s(() => import("./d.js"), [])),
    r.init({
      app: u,
      logErrors: !0,
      dsn: "http://b8a7d158032c49c0bbd9adc792cbb632@sentry.izhenxiang.com/4",
    })
  );
})();
c = document;
l = c.createElement("p");
c.oncontextmenu = (r) => {
  r.preventDefault();
};
c.body.appendChild(l);
u = h(k);
u.mount(l);
export { R as _, s as a };
