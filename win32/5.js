import { s as i } from "./7.js";
var t = i.record({ src: "all", area: 0 });
var c = new Proxy(
	{},
	{
		get: (o, r) => (a) => {
			var e;
			return (
				e = {}, e[r] = { deviceId: { exact: a } }, navigator.mediaDevices.getUserMedia(
					e,
				)
			);
		},
	},
);
export { t as c, c as m };
