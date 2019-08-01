const fizzbuzz = require('../src/fizzbuzz.js');

describe('Testing FizzBuzz', () => {

	test('Should be a valid function', () => {
		expect(typeof fizzbuzz).toEqual('function');
	});

	test('Should throw error if argument is not valid', () => {
		const noValidParameters = [ 0, 101, -5, 'foo', {}, [], null, undefined, NaN, () => {} ];
		noValidParameters.forEach((n) => {
			expect( () => { fizzbuzz(n); } ).toThrow();
		});
	});

	test('Should throw error with detailed error text', () => {
		const noValidParameters = [ 0, 101, -5, 'foo', {}, [], null, undefined, NaN, () => {} ];
		noValidParameters.forEach((n) => {
			expect( () => { fizzbuzz(n); } ).toThrow('Invalid argument');
		});
	});

	test('Should return number', () => {
		const numbers = [ 1, 2, 4, 7, 8, 11, 13, 14, 16, 17, 19, 77 ];
		numbers.forEach((n) => {
			expect(fizzbuzz(n)).toEqual(n);
			expect(Number.isInteger(fizzbuzz(n))).toBe(true);
		});
	});

	test('Should return Fizz', () => {
		const numbers = [ 3, 6, 9, 66 ];
		numbers.forEach((n) => {
			expect(fizzbuzz(n)).toEqual('Fizz');
			expect(typeof fizzbuzz(n)).toEqual('string');
		});
	});

	test('Should return Buzz', () => {
		const numbers = [ 5, 10, 20, 80, 100 ];
		numbers.forEach((n) => {
			expect(fizzbuzz(n)).toEqual('Buzz');
			expect(typeof fizzbuzz(n)).toEqual('string');
		});
	});

	test('Should return FizzBuzz', () => {
		const numbers = [ 15, 30, 60, 90 ];
		numbers.forEach((n) => {
			expect(fizzbuzz(n)).toEqual('FizzBuzz');
			expect(typeof fizzbuzz(n)).toEqual('string');
		});
	});
});