function fizzbuzz (number) {

	if (!Number.isInteger(number)) throw new Error('Invalid argument');
	if (!isIntegerInRange(number, 1, 100)) throw new Error('Invalid argument');

	let result = '';
	if (isMultiple(number, 3)) {
		result += 'Fizz';
	}
	if (isMultiple(number, 5)) {
		result += 'Buzz';
	}
	return result || number;
}

function isIntegerInRange (number, min, max) {
	return (number >= min && number <= max);
}

function isMultiple (number, multiple) {
	return number % multiple === 0;
}

module.exports = fizzbuzz;