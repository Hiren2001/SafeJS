# SafeJS





Safe.js is a JavaScript library that provides validation and security functions for web applications.

## Features

- Email validation

- Password validation

- URL validation

- Phone number validation

- Input sanitization

- Text encryption and decryption

- Random string generation

- String capitalization

- String reversal

## Installation

You can download Safe.js from the GitHub repository. To use Safe.js in your project, follow these steps:

1. Download the `safe.js` file from the repository.

2. Place the `safe.js` file in your project directory.

## Usage

Once you have included Safe.js in your project, you can start using its functions in your JavaScript code. Here are some examples:

```javascript

// Email validation

const isValidEmail = Safe.validateEmail('test@example.com');

console.log(isValidEmail); // true

// Password validation

const isValidPassword = Safe.validatePassword('StrongPassword123!');

console.log(isValidPassword); // true

// URL validation

const isValidURL = Safe.validateURL('https://www.example.com');

console.log(isValidURL); // true

// Phone number validation

const isValidPhoneNumber = Safe.validatePhoneNumber('+1 (123) 456-7890');

console.log(isValidPhoneNumber); // true

// Input sanitization

const userInput = '<script>alert("Hello!")</script>';

const sanitizedInput = Safe.sanitizeInput(userInput);

console.log(sanitizedInput); // &lt;script&gt;alert(&quot;Hello!&quot;)&lt;/script&gt;

// Text encryption and decryption

const encryptedText = Safe.encryptText('Hello World', 5);

console.log(encryptedText); // Mjqqt%Rjqti

const decryptedText = Safe.decryptText(encryptedText, 5);

console.log(decryptedText); // Hello World

// Random string generation

const randomString = Safe.generateRandomString(10);

console.log(randomString); // g7Tc4fY2zA

// String capitalization

const capitalizedString = Safe.capitalizeString('hello world');

console.log(capitalizedString); // Hello world

// String reversal

const reversedString = Safe.reverseString('Hello');

console.log(reversedString); // olleH

```

Feel free to modify the code snippets as needed to fit your project requirements.

For detailed documentation and additional examples, please refer to the [Safe.js GitHub repository](https://github.com/Hiren2001/SafeJS).

## License

Safe.js is released under the [MIT License](https://opensource.org/licenses/MIT).


