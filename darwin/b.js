import { c as r } from "./g.js";
import { c as e, b as n, d as c, _ as t } from "./f.js";
import "./4.js";
import "./t.js";
var m = { components: { confirm: r }, setup: () => {} };
function s(a, p) {
	const o = n("confirm");
	return (
		c(), e(o, { h1: "确认重新开始录制吗？", no: "继续录制", tip: "已录制部分将被清除", yes: "重新录制" })
	);
}
var l = t(m, [["render", s]]);
export { l as default };
