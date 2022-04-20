import { c as r } from "./f.js";
import { c, b as e, d as n, _ as t } from "./e.js";
import "./3.js";
import "./t.js";
var m = { components: { confirm: r }, setup: () => {} };
function a(s, p) {
	const o = e("confirm");
	return (
		n(), c(o, { h1: "确认取消本次录制吗？", no: "继续录制", tip: "已录制部分将被清除", yes: "取消录制" })
	);
}
var d = t(m, [["render", a]]);
export { d as default };
