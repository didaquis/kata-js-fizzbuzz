function fizzbuzz(number) {
	if (number < 1 || number === undefined || typeof number !== 'number' || typeof number !== 'number' || number > 100 || isNaN(number)) {
		throw new Error('Invalid argument');
	}

	if (number % 3 === 0 && number % 5 === 0) {
		return 'FizzBuzz';
	} else if (number % 3 === 0) {
		return 'Fizz';
	} else if (number % 5 === 0) {
		return 'Buzz';
	}

	return number;
}

module.exports = fizzbuzz;