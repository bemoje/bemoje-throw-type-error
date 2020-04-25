(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/expected-got')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/expected-got'], factory) :
	(global = global || self, global['throw-type-error'] = factory(global.expectedGot));
}(this, (function (expectedGot) { 'use strict';

	expectedGot = expectedGot && Object.prototype.hasOwnProperty.call(expectedGot, 'default') ? expectedGot['default'] : expectedGot;

	/**
	 * Throws a TypeError with a generated error message with ANSI-colors for easier console output readability.
	 * @param {function} expectedTypeConstructor - The expected type's constructor
	 * @param {*} value - The value to evaluate
	 * @returns {void}
	 */
	function throwTypeError(expectedTypeConstructor, value) {
		throw new TypeError(expectedGot(expectedTypeConstructor, value))
	}

	return throwTypeError;

})));
