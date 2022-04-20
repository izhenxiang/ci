var i = (n) => {
	var r;
	return (
		r =
			(e) =>
				new Proxy(
					() => {},
					{ apply: (a, t, p) => n(e.join("."), p), get: (a, t) => r([...e, t]) },
				), r([])
	);
},
	o = i(E.invoke);
export { o as i };
