const fizzbuzz = require('../src/fizzbuzz.js');

describe('Testing FizzBuzz', () => {

	test('Should throw error', () => {
		expect( () => { fizzbuzz(0); } ).toThrow();
		expect( () => { fizzbuzz(101); } ).toThrow();
		expect( () => { fizzbuzz(); } ).toThrow();
		expect( () => { fizzbuzz('foo'); } ).toThrow();
		expect( () => { fizzbuzz({}); } ).toThrow();
		expect( () => { fizzbuzz([]); } ).toThrow();
	});

	test('Should return number 1', () => {
		expect(fizzbuzz(1)).toBe(1);
		expect(fizzbuzz(1)).toEqual(1);
		expect(typeof fizzbuzz(1)).toEqual('number');
	});

	test('Should return number 2', () => {
		expect(fizzbuzz(2)).toBe(2);
		expect(fizzbuzz(2)).toEqual(2);
		expect(typeof fizzbuzz(2)).toEqual('number');
	});

	test('Should return Fizz', () => {
		expect(fizzbuzz(3)).toBe('Fizz');
		expect(fizzbuzz(3)).toEqual('Fizz');
		expect(typeof fizzbuzz(3)).toEqual('string');

		expect(fizzbuzz(6)).toBe('Fizz');
		expect(fizzbuzz(6)).toEqual('Fizz');
		expect(typeof fizzbuzz(6)).toEqual('string');
	});

	test('Should return Buzz', () => {
		expect(fizzbuzz(5)).toBe('Buzz');
		expect(fizzbuzz(5)).toEqual('Buzz');
		expect(typeof fizzbuzz(5)).toEqual('string');

		expect(fizzbuzz(10)).toBe('Buzz');
		expect(fizzbuzz(10)).toEqual('Buzz');
		expect(typeof fizzbuzz(10)).toEqual('string');
	});

});