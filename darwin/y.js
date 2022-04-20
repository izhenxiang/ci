"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var r = require("electron"),
	t = require("path"),
	e = "izhenxiang",
	a = process.env[e + "_root"] || t.join(r.app.getPath("userData"), e);
exports.ROOT = a;
