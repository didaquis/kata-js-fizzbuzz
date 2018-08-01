function fizzbuzz(number) {
	if (number < 1 || number === undefined || typeof number !== 'number' || number > 100) {
		throw new Error('Invalid argument');
	}
	return number;
}

module.exports = fizzbuzz;
