import { c as r } from "./s.js";
import { d as e, e as n, a as c, _ as t } from "./g.js";
import "./4.js";
import "./a.js";
var a = { components: { confirm: r }, setup: () => {} };
function m(s, p) {
	const o = n("confirm");
	return (
		c(), e(
			o,
			{
				h1: "\u786E\u8BA4\u53D6\u6D88\u672C\u6B21\u5F55\u5236\u5417\uFF1F",
				no: "\u7EE7\u7EED\u5F55\u5236",
				tip: "\u5DF2\u5F55\u5236\u90E8\u5206\u5C06\u88AB\u6E05\u9664",
				yes: "\u53D6\u6D88\u5F55\u5236",
			},
		)
	);
}
var d = t(a, [["render", m]]);
export { d as default };
