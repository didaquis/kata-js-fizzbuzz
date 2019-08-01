const fizzbuzz = require('../src/fizzbuzz.js');

describe('Testing FizzBuzz', () => {

	test('Should be a valid function', () => {
		expect(typeof fizzbuzz).toEqual('function');
	});

	test('Should throw error if argument is not valid', () => {
		expect( () => { fizzbuzz(0); } ).toThrow();
		expect( () => { fizzbuzz(101); } ).toThrow();
		expect( () => { fizzbuzz(-5); } ).toThrow();
		expect( () => { fizzbuzz(); } ).toThrow();
		expect( () => { fizzbuzz('foo'); } ).toThrow();
		expect( () => { fizzbuzz({}); } ).toThrow();
		expect( () => { fizzbuzz([]); } ).toThrow();
		expect( () => { fizzbuzz(null); } ).toThrow();
		expect( () => { fizzbuzz(undefined); } ).toThrow();
		expect( () => { fizzbuzz(NaN); } ).toThrow();
		expect( () => { fizzbuzz(() => {}); } ).toThrow();
	});

	test('Should throw error with detailed error text', () => {
		expect( () => { fizzbuzz(0); } ).toThrow('Invalid argument');
		expect( () => { fizzbuzz(101); } ).toThrow('Invalid argument');
		expect( () => { fizzbuzz(-5); } ).toThrow('Invalid argument');
		expect( () => { fizzbuzz(); } ).toThrow('Invalid argument');
		expect( () => { fizzbuzz('foo'); } ).toThrow('Invalid argument');
		expect( () => { fizzbuzz({}); } ).toThrow('Invalid argument');
		expect( () => { fizzbuzz([]); } ).toThrow('Invalid argument');
		expect( () => { fizzbuzz(null); } ).toThrow('Invalid argument');
		expect( () => { fizzbuzz(undefined); } ).toThrow('Invalid argument');
		expect( () => { fizzbuzz(NaN); } ).toThrow('Invalid argument');
		expect( () => { fizzbuzz(() => {}); } ).toThrow('Invalid argument');
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

	test('Should return number 77', () => {
		expect(fizzbuzz(77)).toBe(77);
		expect(fizzbuzz(77)).toEqual(77);
		expect(typeof fizzbuzz(77)).toEqual('number');
	});

	test('Should return number', () => {
		expect(typeof fizzbuzz(4)).toEqual('number');
		expect(typeof fizzbuzz(7)).toEqual('number');
		expect(typeof fizzbuzz(8)).toEqual('number');
		expect(typeof fizzbuzz(11)).toEqual('number');
		expect(typeof fizzbuzz(13)).toEqual('number');
		expect(typeof fizzbuzz(14)).toEqual('number');
		expect(typeof fizzbuzz(16)).toEqual('number');
		expect(typeof fizzbuzz(17)).toEqual('number');
		expect(typeof fizzbuzz(19)).toEqual('number');
	});

	test('Should return text', () => {
		expect(typeof fizzbuzz(3)).toEqual('string');
		expect(typeof fizzbuzz(5)).toEqual('string');
		expect(typeof fizzbuzz(6)).toEqual('string');
		expect(typeof fizzbuzz(9)).toEqual('string');
		expect(typeof fizzbuzz(10)).toEqual('string');
		expect(typeof fizzbuzz(12)).toEqual('string');
		expect(typeof fizzbuzz(15)).toEqual('string');
		expect(typeof fizzbuzz(18)).toEqual('string');
		expect(typeof fizzbuzz(20)).toEqual('string');
	});

	test('Should return Fizz', () => {
		expect(fizzbuzz(3)).toBe('Fizz');
		expect(fizzbuzz(3)).toEqual('Fizz');
		expect(typeof fizzbuzz(3)).toEqual('string');

		expect(fizzbuzz(6)).toBe('Fizz');
		expect(fizzbuzz(6)).toEqual('Fizz');
		expect(typeof fizzbuzz(6)).toEqual('string');

		expect(fizzbuzz(9)).toBe('Fizz');
		expect(fizzbuzz(9)).toEqual('Fizz');
		expect(typeof fizzbuzz(9)).toEqual('string');

		expect(fizzbuzz(66)).toBe('Fizz');
		expect(fizzbuzz(66)).toEqual('Fizz');
		expect(typeof fizzbuzz(66)).toEqual('string');
	});

	test('Should return Buzz', () => {
		expect(fizzbuzz(5)).toBe('Buzz');
		expect(fizzbuzz(5)).toEqual('Buzz');
		expect(typeof fizzbuzz(5)).toEqual('string');

		expect(fizzbuzz(10)).toBe('Buzz');
		expect(fizzbuzz(10)).toEqual('Buzz');
		expect(typeof fizzbuzz(10)).toEqual('string');

		expect(fizzbuzz(20)).toBe('Buzz');
		expect(fizzbuzz(20)).toEqual('Buzz');
		expect(typeof fizzbuzz(20)).toEqual('string');

		expect(fizzbuzz(80)).toBe('Buzz');
		expect(fizzbuzz(80)).toEqual('Buzz');
		expect(typeof fizzbuzz(80)).toEqual('string');

		expect(fizzbuzz(100)).toBe('Buzz');
		expect(fizzbuzz(100)).toEqual('Buzz');
		expect(typeof fizzbuzz(100)).toEqual('string');
	});

	test('Should return FizzBuzz', () => {
		expect(fizzbuzz(15)).toBe('FizzBuzz');
		expect(fizzbuzz(15)).toEqual('FizzBuzz');
		expect(typeof fizzbuzz(15)).toEqual('string');

		expect(fizzbuzz(30)).toBe('FizzBuzz');
		expect(fizzbuzz(30)).toEqual('FizzBuzz');
		expect(typeof fizzbuzz(30)).toEqual('string');

		expect(fizzbuzz(60)).toBe('FizzBuzz');
		expect(fizzbuzz(60)).toEqual('FizzBuzz');
		expect(typeof fizzbuzz(60)).toEqual('string');

		expect(fizzbuzz(90)).toBe('FizzBuzz');
		expect(fizzbuzz(90)).toEqual('FizzBuzz');
		expect(typeof fizzbuzz(90)).toEqual('string');
	});

});