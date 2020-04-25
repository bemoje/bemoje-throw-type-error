import isType from '@bemoje/is-type'
import throwTypeError from '../src/throw-type-error'

/**
 * Adds a and b
 * @param {number} a - The first number
 * @param {number|string} b - The second number, or a number coercible-string
 */
function add(a, b) {
	// type check 'a'
	if (!isType(Number, a)) {
		throwTypeError(Number, a)
	}

	// type check 'b'
	if (!isType(Number, b) && !isType(String, b)) {
		throwTypeError([Number, String], b)
	}

	// coerce b
	b = Number(b)

	// add
	return a + b
}

describe('throwTypeError', () => {
	test('works', () => {
		expect(() => add(1, 2)).not.toThrow(TypeError)
		expect(() => add(1, '2')).not.toThrow(TypeError)
		expect(() => add('one', 2)).toThrow(TypeError)
		expect(() => add(1, /2/g)).toThrow(TypeError)
	})
})
