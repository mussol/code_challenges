//https://www.freecodecamp.org/challenges/steamroller

function steamrollArray(arr) {
	var res = [];
	arr.forEach (function(n) {
		if (Array.isArray(n)) {
			res.push.apply(res, steamrollArray(n));
		} else {
			res.push(n);
		}
	});
	return res;
}
