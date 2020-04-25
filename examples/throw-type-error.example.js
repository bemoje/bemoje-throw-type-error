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

add(1, 2)
//=> 3

add(1, '2')
//=> 3

add('one', 2)
//=> throws TypeError('Expected Number, got String) [IN ANSI COLORED FOR READABILITY]

add(1, /2/g)
//=> throws TypeError('Expected [Number, String], got RegExp) [IN ANSI COLORED FOR READABILITY]
