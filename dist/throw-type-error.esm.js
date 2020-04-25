import expectedGot from '@bemoje/expected-got';

/**
 * Throws a TypeError with a generated error message with ANSI-colors for easier console output readability.
 * @param {function} expectedTypeConstructor - The expected type's constructor
 * @param {*} value - The value to evaluate
 * @returns {void}
 */
function throwTypeError(expectedTypeConstructor, value) {
	throw new TypeError(expectedGot(expectedTypeConstructor, value))
}

export default throwTypeError;
