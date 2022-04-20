"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var t = require("path"), i = require("fs"), f = require("./x.js");
require("electron");
var a, u;
a = t.join(f.ROOT, "conf");
u =
	(n) => {
		var r;
		return (r = t.join(a, n), i.mkdirSync(t.dirname(r), { recursive: !0 }), r);
	};
var s = new Proxy(
	{},
	{
		set: function (n, r, e) {
			return (i.writeFileSync(u(r), JSON.stringify(e)), e);
		},
		get: (n, r) => {
			var e;
			if (e = u(r), i.existsSync(e)) {
				return JSON.parse(i.readFileSync(e));
			}
		},
	},
);
exports.default = s;
