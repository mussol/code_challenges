//https://www.codewars.com/kata/statistics-101-coin-sampling

function sample(coin) {
	var tests = 100000
	var heads = 0;
	for (var i = 0; i < tests; i++) {
		heads += coin();
	}
	return heads/tests;
}