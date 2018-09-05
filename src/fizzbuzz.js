function fizzbuzz(number) {
	if (!isIntegerBetweenOneAndOneHundred(number)) {
		throw new Error('Invalid argument');
	}

	if (isMultiple(number, 3) && isMultiple(number, 5)) {
		return 'FizzBuzz';
	} else if (isMultiple(number, 3)) {
		return 'Fizz';
	} else if (isMultiple(number, 5)) {
		return 'Buzz';
	}

	return number;
}


function isIntegerBetweenOneAndOneHundred(number) {
	if (number < 1 || number === undefined || typeof number !== 'number' || number > 100 || isNaN(number)) {
		return false;
	}
	return true;
}

function isMultiple(number,multiple) {
	if (number % multiple === 0) {
		return true;
	}
	return false;
}

module.exports = fizzbuzz;