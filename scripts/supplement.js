//Random integer between n and m
//		 integer between 0 and n if m is null
function getRandInt(n, m) {
	if (!m) {
		return Math.floor(Math.random() * n);
	}
	return Math.floor(Math.random() * (m-n) + n);
}
//Random float between n and m
//       float between 0 and n if m is null
function getRandFloat(n, m) {
	if (!m) {
		return Math.random() * n;
	}
	return Math.random() * (m-n) + n;
}