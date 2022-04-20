var nr = Object.defineProperty;
var T = Object.getOwnPropertySymbols;
var fr = Object.prototype.hasOwnProperty,
	ir = Object.prototype.propertyIsEnumerable;
var C = (r, e, u) =>
	e in r ? nr(
		r,
		e,
		{ enumerable: !0, configurable: !0, writable: !0, value: u },
	) : r[e] = u,
	h = (r, e) => {
		for (var u in e || (e = {})) fr.call(e, u) && C(r, u, e[u]);
		if (T) {
			for (var u of T(e)) ir.call(e, u) && C(r, u, e[u]);
		}
		return r;
	};
import { O as sr } from "./..js";
import { b as cr } from "./-.js";
import { c as $ } from "./k.js";
import { q as dr, k as br } from "./e.js";
var xr =
	typeof $ == "object" && $ && $.Object === Object && $,
	lr = xr,
	gr = lr,
	vr =
		typeof self == "object" && self && self.Object === Object && self,
	$r =
		gr || vr || Function("return this")(),
	pr = $r,
	Sr = pr,
	mr = Sr.Symbol,
	y = mr;
function yr(r, e) {
	for (var u = -1, o = r == null ? 0 : r.length, a = Array(o); ++u < o; ) a[u] =
		e(r[u], u, r);
	return a;
}
var Rr = yr,
	Or = Array.isArray,
	Ar = Or,
	j = y,
	N = Object.prototype,
	Tr = N.hasOwnProperty,
	Cr = N.toString,
	g = j ? j.toStringTag : void 0;
function hr(r) {
	var e = Tr.call(r, g), u = r[g];
	try {
		r[g] = void 0;
		var o = !0;
	} catch {}
	var a = Cr.call(r);
	return (o && (e ? r[g] = u : delete r[g]), a);
}
var jr = hr, _r = Object.prototype, Ur = _r.toString;
function wr(r) {
	return Ur.call(r);
}
var Lr = wr,
	_ = y,
	Mr = jr,
	kr = Lr,
	Er = "[object Null]",
	zr = "[object Undefined]",
	U = _ ? _.toStringTag : void 0;
function Wr(r) {
	return r == null
		? r === void 0
			? zr
			: Er
		: U && (U in Object(r))
			? Mr(r)
			: kr(r);
}
var Nr = Wr;
function Ir(r) {
	return r != null && typeof r == "object";
}
var Zr = Ir, Pr = Nr, Gr = Zr, Fr = "[object Symbol]";
function Dr(r) {
	return typeof r == "symbol" || (Gr(r) && Pr(r) == Fr);
}
var Hr = Dr,
	w = y,
	Jr = Rr,
	Vr = Ar,
	Yr = Hr,
	qr = 1 / 0,
	L = w ? w.prototype : void 0,
	M = L ? L.toString : void 0;
function I(r) {
	if (typeof r == "string") {
		return r;
	}
	if (Vr(r)) {
		return Jr(r, I) + "";
	}
	if (Yr(r)) {
		return M ? M.call(r) : "";
	}
	var e = r + "";
	return e == "0" && (1 / r) == -qr ? "-0" : e;
}
var Br = I, Kr = Br;
function Qr(r) {
	return r == null ? "" : Kr(r);
}
var p = Qr;
function Xr(r, e, u) {
	var o = -1, a = r.length;
	e < 0 && (e = -e > a ? 0 : a + e), u = u > a ? a : u, u < 0 && (u += a), a =
		e > u ? 0 : u - e >>> 0, e >>>= 0;
	for (var t = Array(a); ++o < a; ) t[o] = r[o + e];
	return t;
}
var re = Xr, ee = re;
function ue(r, e, u) {
	var o = r.length;
	return (u = u === void 0 ? o : u, !e && u >= o ? r : ee(r, e, u));
}
var ae = ue,
	oe = "\\ud800-\\udfff",
	te = "\\u0300-\\u036f",
	ne = "\\ufe20-\\ufe2f",
	fe = "\\u20d0-\\u20ff",
	ie =
		te + ne + fe,
	se = "\\ufe0e\\ufe0f",
	ce = "\\u200d",
	de = RegExp("[" + ce + oe + ie + se + "]");
function be(r) {
	return de.test(r);
}
var Z = be;
function xe(r) {
	return r.split("");
}
var le = xe,
	P = "\\ud800-\\udfff",
	ge = "\\u0300-\\u036f",
	ve = "\\ufe20-\\ufe2f",
	$e = "\\u20d0-\\u20ff",
	pe =
		ge + ve + $e,
	Se = "\\ufe0e\\ufe0f",
	me =
		"[" + P + "]",
	S =
		"[" + pe + "]",
	m = "\\ud83c[\\udffb-\\udfff]",
	ye =
		"(?:" + S + "|" + m + ")",
	G =
		"[^" + P + "]",
	F = "(?:\\ud83c[\\udde6-\\uddff]){2}",
	D = "[\\ud800-\\udbff][\\udc00-\\udfff]",
	Re = "\\u200d",
	H = ye + "?",
	J =
		"[" + Se + "]?",
	Oe =
		"(?:" + Re + "(?:" + [G, F, D].join("|") + ")" + J + H + ")*",
	Ae =
		J + H + Oe,
	Te =
		"(?:" + [G + S + "?", S, F, D, me].join("|") + ")",
	Ce = RegExp(m + "(?=" + m + ")|" + Te + Ae, "g");
function he(r) {
	return r.match(Ce) || [];
}
var je = he, _e = le, Ue = Z, we = je;
function Le(r) {
	return Ue(r) ? we(r) : _e(r);
}
var Me = Le, ke = ae, Ee = Z, ze = Me, We = p;
function Ne(r) {
	return function (e) {
		e = We(e);
		var u = Ee(e) ? ze(e) : void 0,
			o = u ? u[0] : e.charAt(0),
			a = u ? ke(u, 1).join("") : e.slice(1);
		return o[r]() + a;
	};
}
var Ie = Ne, Ze = Ie, Pe = Ze("toUpperCase"), Ge = Pe, Fe = p, De = Ge;
function He(r) {
	return De(Fe(r).toLowerCase());
}
var Je = He;
function Ve(r, e, u, o) {
	var a = -1, t = r == null ? 0 : r.length;
	for (o && t && (u = r[++a]); ++a < t; ) u = e(u, r[a], a, r);
	return u;
}
var Ye = Ve;
function qe(r) {
	return function (e) {
		return r?.[e];
	};
}
var Be = qe,
	Ke = Be,
	Qe = {
		À: "A",
		Á: "A",
		Â: "A",
		Ã: "A",
		Ä: "A",
		Å: "A",
		à: "a",
		á: "a",
		â: "a",
		ã: "a",
		ä: "a",
		å: "a",
		Ç: "C",
		ç: "c",
		Ð: "D",
		ð: "d",
		È: "E",
		É: "E",
		Ê: "E",
		Ë: "E",
		è: "e",
		é: "e",
		ê: "e",
		ë: "e",
		Ì: "I",
		Í: "I",
		Î: "I",
		Ï: "I",
		ì: "i",
		í: "i",
		î: "i",
		ï: "i",
		Ñ: "N",
		ñ: "n",
		Ò: "O",
		Ó: "O",
		Ô: "O",
		Õ: "O",
		Ö: "O",
		Ø: "O",
		ò: "o",
		ó: "o",
		ô: "o",
		õ: "o",
		ö: "o",
		ø: "o",
		Ù: "U",
		Ú: "U",
		Û: "U",
		Ü: "U",
		ù: "u",
		ú: "u",
		û: "u",
		ü: "u",
		Ý: "Y",
		ý: "y",
		ÿ: "y",
		Æ: "Ae",
		æ: "ae",
		Þ: "Th",
		þ: "th",
		ß: "ss",
		Ā: "A",
		Ă: "A",
		Ą: "A",
		ā: "a",
		ă: "a",
		ą: "a",
		Ć: "C",
		Ĉ: "C",
		Ċ: "C",
		Č: "C",
		ć: "c",
		ĉ: "c",
		ċ: "c",
		č: "c",
		Ď: "D",
		Đ: "D",
		ď: "d",
		đ: "d",
		Ē: "E",
		Ĕ: "E",
		Ė: "E",
		Ę: "E",
		Ě: "E",
		ē: "e",
		ĕ: "e",
		ė: "e",
		ę: "e",
		ě: "e",
		Ĝ: "G",
		Ğ: "G",
		Ġ: "G",
		Ģ: "G",
		ĝ: "g",
		ğ: "g",
		ġ: "g",
		ģ: "g",
		Ĥ: "H",
		Ħ: "H",
		ĥ: "h",
		ħ: "h",
		Ĩ: "I",
		Ī: "I",
		Ĭ: "I",
		Į: "I",
		İ: "I",
		ĩ: "i",
		ī: "i",
		ĭ: "i",
		į: "i",
		ı: "i",
		Ĵ: "J",
		ĵ: "j",
		Ķ: "K",
		ķ: "k",
		ĸ: "k",
		Ĺ: "L",
		Ļ: "L",
		Ľ: "L",
		Ŀ: "L",
		Ł: "L",
		ĺ: "l",
		ļ: "l",
		ľ: "l",
		ŀ: "l",
		ł: "l",
		Ń: "N",
		Ņ: "N",
		Ň: "N",
		Ŋ: "N",
		ń: "n",
		ņ: "n",
		ň: "n",
		ŋ: "n",
		Ō: "O",
		Ŏ: "O",
		Ő: "O",
		ō: "o",
		ŏ: "o",
		ő: "o",
		Ŕ: "R",
		Ŗ: "R",
		Ř: "R",
		ŕ: "r",
		ŗ: "r",
		ř: "r",
		Ś: "S",
		Ŝ: "S",
		Ş: "S",
		Š: "S",
		ś: "s",
		ŝ: "s",
		ş: "s",
		š: "s",
		Ţ: "T",
		Ť: "T",
		Ŧ: "T",
		ţ: "t",
		ť: "t",
		ŧ: "t",
		Ũ: "U",
		Ū: "U",
		Ŭ: "U",
		Ů: "U",
		Ű: "U",
		Ų: "U",
		ũ: "u",
		ū: "u",
		ŭ: "u",
		ů: "u",
		ű: "u",
		ų: "u",
		Ŵ: "W",
		ŵ: "w",
		Ŷ: "Y",
		ŷ: "y",
		Ÿ: "Y",
		Ź: "Z",
		Ż: "Z",
		Ž: "Z",
		ź: "z",
		ż: "z",
		ž: "z",
		Ĳ: "IJ",
		ĳ: "ij",
		Œ: "Oe",
		œ: "oe",
		ŉ: "'n",
		ſ: "s",
	},
	Xe = Ke(Qe),
	ru = Xe,
	eu = ru,
	uu = p,
	au = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
	ou = "\\u0300-\\u036f",
	tu = "\\ufe20-\\ufe2f",
	nu = "\\u20d0-\\u20ff",
	fu =
		ou + tu + nu,
	iu =
		"[" + fu + "]",
	su = RegExp(iu, "g");
function cu(r) {
	return (r = uu(r), r && r.replace(au, eu).replace(su, ""));
}
var du = cu, bu = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function xu(r) {
	return r.match(bu) || [];
}
var lu = xu,
	gu = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function vu(r) {
	return gu.test(r);
}
var $u = vu,
	V = "\\ud800-\\udfff",
	pu = "\\u0300-\\u036f",
	Su = "\\ufe20-\\ufe2f",
	mu = "\\u20d0-\\u20ff",
	yu =
		pu + Su + mu,
	Y = "\\u2700-\\u27bf",
	q = "a-z\\xdf-\\xf6\\xf8-\\xff",
	Ru = "\\xac\\xb1\\xd7\\xf7",
	Ou = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
	Au = "\\u2000-\\u206f",
	Tu = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
	B = "A-Z\\xc0-\\xd6\\xd8-\\xde",
	Cu = "\\ufe0e\\ufe0f",
	K =
		Ru + Ou + Au + Tu,
	Q = "['’]",
	k =
		"[" + K + "]",
	hu =
		"[" + yu + "]",
	X = "\\d+",
	ju =
		"[" + Y + "]",
	rr =
		"[" + q + "]",
	er =
		"[^" + V + K + X + Y + q + B + "]",
	_u = "\\ud83c[\\udffb-\\udfff]",
	Uu =
		"(?:" + hu + "|" + _u + ")",
	wu =
		"[^" + V + "]",
	ur = "(?:\\ud83c[\\udde6-\\uddff]){2}",
	ar = "[\\ud800-\\udbff][\\udc00-\\udfff]",
	b =
		"[" + B + "]",
	Lu = "\\u200d",
	E =
		"(?:" + rr + "|" + er + ")",
	Mu =
		"(?:" + b + "|" + er + ")",
	z =
		"(?:" + Q + "(?:d|ll|m|re|s|t|ve))?",
	W =
		"(?:" + Q + "(?:D|LL|M|RE|S|T|VE))?",
	or = Uu + "?",
	tr =
		"[" + Cu + "]?",
	ku =
		"(?:" + Lu + "(?:" + [wu, ur, ar].join("|") + ")" + tr + or + ")*",
	Eu = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
	zu = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
	Wu =
		tr + or + ku,
	Nu =
		"(?:" + [ju, ur, ar].join("|") + ")" + Wu,
	Iu = RegExp(
		[
			b + "?" + rr + "+" + z + "(?=" + [k, b, "$"].join("|") + ")",
			Mu + "+" + W + "(?=" + [k, b + E, "$"].join("|") + ")",
			b + "?" + E + "+" + z,
			b + "+" + W,
			zu,
			Eu,
			X,
			Nu,
		].join("|"),
		"g",
	);
function Zu(r) {
	return r.match(Iu) || [];
}
var Pu = Zu, Gu = lu, Fu = $u, Du = p, Hu = Pu;
function Ju(r, e, u) {
	return (
		r = Du(r), e = u ? void 0 : e, e === void 0
			? Fu(r)
				? Hu(r)
				: Gu(r)
			: r.match(e) || []
	);
}
var Vu = Ju, Yu = Ye, qu = du, Bu = Vu, Ku = "['’]", Qu = RegExp(Ku, "g");
function Xu(r) {
	return function (e) {
		return Yu(Bu(qu(e).replace(Qu, "")), r, "");
	};
}
var ra = Xu,
	ea = Je,
	ua = ra,
	aa = ua(
		function (r, e, u) {
			return (e = e.toLowerCase(), r + (u ? ea(e) : e));
		},
	),
	oa = aa,
	ta = oa,
	da = new Proxy(
		{},
		{
			get: (r, e) => (u) => {
				var o, a, t, s, R, O, v;
				return (
					o = "S" + ta(e), R = cr[o], t = localStorage[e], s =
						t ? JSON.parse(t) : u, a = dr(h({}, s)), v = !0, O =
						(n, f) => {
							v ? (n.size + f.size) > 0 && (
								R(n, f), localStorage[e] = JSON.stringify(s)
							) : v = !0;
						}, br(() => {
						var n, f, d, i, x, c, l;
						t = new Set(Object.keys(s)), f = new Set(), n = new Map(), x =
							Object.entries(a);
						for (l of x) [i, c] = l, t.delete(i), s[i] !== c && (
							s[i] = c, n.set(i, c)
						);
						for (d of t) delete s[d], f.add(d);
						O(n, f);
					}), sr[o] =
						(n, f) => {
							var d, i, x, c, l, A;
							v = !1, x = n.entries();
							for (A of x) [i, l] = A, a[i] = l;
							c = f.values();
							for (d of c) delete a[d];
						}, a
				);
			},
		},
	);
export { da as s };
