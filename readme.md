# @bemoje/throw-type-error

Throws a TypeError with a generated error message with ANSI-colors for easier console output readability.

#### Version

<span><a href="https://npmjs.org/@bemoje/throw-type-error" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/throw-type-error" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/throw-type-error" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-throw-type-error.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/throw-type-error" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-throw-type-error.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/throw-type-error" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/throw-type-error" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-throw-type-error/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-throw-type-error" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/throw-type-error
npm install --save @bemoje/throw-type-error
npm install --save-dev @bemoje/throw-type-error
```

## Usage

```javascript
import throwTypeError from '@bemoje/throw-type-error'

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

```


## Tests
Uses *Jest* to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API
### throwTypeError

Throws a TypeError with a generated error message with ANSI-colors for easier console output readability.

##### Parameters

-   `expectedTypeConstructor` **[function][3]** The expected type's constructor

-   `value` **any** The value to evaluate

##### Returns
**void** 

[1]: #throwtypeerror

[2]: #parameters

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function