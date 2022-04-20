import { h as r, c as e } from "./..js";
var i = new Proxy(
	() => {},
	{
		get: (s, o) => (...t) => {
			var f;
			for (f of r) typeof f[o] == "function" && f[o](...t);
			t.unshift(o), e.postMessage(t);
		},
	},
);
export { i as b };
