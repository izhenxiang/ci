var t = (s, e) => {
	var r, n;
	for (r in e) n = e[r], s.addEventListener(r, n);
	return () => {
		var v;
		v = [];
		for (r in e) n = e[r], v.push(s.removeEventListener(r, n));
		return v;
	};
};
export { t as $ };
