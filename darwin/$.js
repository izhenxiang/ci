import { i as s } from "./3.js";
import { c as t } from "./s.js";
var o, i;
({ rec: i } = s);
o = "src,audio,video,area".split(",");
var f = () => {
	var a;
	i(
		...function () {
			var r;
			r = [];
			for (a of o) r.push(t[a]);
			return r;
		}(),
	);
};
export { f as s };
