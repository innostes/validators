# @innostes/validators

A comprehensive collection of utility functions to validate common Indian documents, data formats, and other general validations. This package provides regular expression-based validators for accurate and quick input validation in your JavaScript or TypeScript projects.

## Features

- **Indian-specific validators**:
  - Mobile Number
  - PAN (Permanent Account Number)
  - Aadhar Number
  - GSTIN (Goods and Services Tax Identification Number)
  - IFSC (Indian Financial System Code)
  - Voter ID
  - PIN Code
  
- **General validators**:
  - Email Address
  - URL
  - Strong Password
  - Alphanumeric String
  - Numeric String
  - Alpha String (with or without spaces)
  - Phone Number

## Installation

You can install the package from npm by running:

```bash
npm install @innostes/validators
```

## Usage

Once the package is installed, you can import and use the validators in your project.

### Example of using validators

```typescript
import {
  validateEmail,
  validateURL,
  validateStrongPassword,
  validateAlphaNumeric,
  validateAlphaWithSpace,
  validateNumeric,
  validateAlphaNumericWithSpecialChars,
  validateAlphaNumericWithSpace,
  validateAlphabets,
  validatePhoneNumber,
  validateIndianMobileNumber,
  validatePAN,
  validateAadhar,
  validatePINCode,
  validateGSTIN,
  validateIFSCCode,
  validateVoterID
} from '@innostes/validators';

// Example: Validating Email
const email = 'user@example.com';
console.log(validateEmail(email)); // true

// Example: Validating URL
const url = 'https://example.com';
console.log(validateURL(url)); // true

// Example: Validating Strong Password
const password = 'P@ssw0rd123';
console.log(validateStrongPassword(password)); // true

// Example: Validating Alphanumeric String
const alphanumeric = 'Hello123';
console.log(validateAlphaNumeric(alphanumeric)); // true

// Example: Validating Indian Mobile Number
const mobileNumber = '9876543210';
console.log(validateIndianMobileNumber(mobileNumber)); // true

// Example: Validating PAN
const pan = 'ABCDE1234F';
console.log(validatePAN(pan)); // true

// Example: Validating Aadhar
const aadhar = '234567890123';
console.log(validateAadhar(aadhar)); // true

// Example: Validating PIN Code
const pinCode = '110001';
console.log(validatePINCode(pinCode)); // true

// Example: Validating GSTIN
const gstin = '27ABCDE1234F1Z5';
console.log(validateGSTIN(gstin)); // true

// Example: Validating IFSC Code
const ifscCode = 'SBIN0001234';
console.log(validateIFSCCode(ifscCode)); // true

// Example: Validating Voter ID
const voterID = 'ABC1234567X';
console.log(validateVoterID(voterID)); // true
```

## API Reference

### `validateEmail(email: string): boolean`
Validates an email address to ensure it follows the standard email format.

- **Parameters**: 
  - `email` (string): The email address to validate.
- **Returns**: 
  - `boolean`: `true` if the email is valid, `false` otherwise.
- **Example**:
  ```typescript
  validateEmail('user@example.com'); // true

### `validateURL(url: string): boolean`
Validates a URL, supporting both `http` and `https` protocols.

- **Parameters**:
  - `url` (string): The URL to validate.
- **Returns**:
  - `boolean`: `true` if the URL is valid, `false` otherwise.
- **Example**:
  ```typescript
  validateURL('https://example.com'); // true
  validateURL('ftp://example.com');  // false
  validateURL('http://example.com'); // true

### `validateStrongPassword(password: string): boolean`
Validates a strong password, requiring at least 8 characters with one uppercase letter, one lowercase letter, one digit, and one special character.

- **Parameters**:
  - `password` (string): The password to validate.
- **Returns**:
  - `boolean`: `true` if the password is strong, `false` otherwise.
- **Example**:
  ```typescript
  validateStrongPassword('P@ssw0rd123'); // true
  validateStrongPassword('password123'); // false
  validateStrongPassword('P@ssword');    // false
  validateStrongPassword('P@ssw0rd');    // true

### `validateAlphaNumeric(value: string): boolean`
Validates if the string contains only alphanumeric characters (letters and numbers).

- **Parameters**:
  - `value` (string): The string to validate.
- **Returns**:
  - `boolean`: `true` if the string is alphanumeric, `false` otherwise.
- **Example**:
  ```typescript
  validateAlphaNumeric('Hello123'); // true
  validateAlphaNumeric('Hello 123'); // false
  validateAlphaNumeric('12345');     // true
  validateAlphaNumeric('Hello!');    // false

### `validateAlphaWithSpace(value: string): boolean`
Validates if the string contains only alphabetic characters and spaces.

- **Parameters**:
  - `value` (string): The string to validate.
- **Returns**:
  - `boolean`: `true` if the string contains only alphabets and spaces, `false` otherwise.
- **Example**:
  ```typescript
  validateAlphaWithSpace('Hello World');  // true
  validateAlphaWithSpace('Hello123');     // false
  validateAlphaWithSpace('Hello World!'); // false
  validateAlphaWithSpace('Hello');        // true

### `validateNumeric(value: string): boolean`
Validates if the string contains only numeric characters (digits).

- **Parameters**:
  - `value` (string): The string to validate.
- **Returns**:
  - `boolean`: `true` if the string is numeric, `false` otherwise.
- **Example**:
  ```typescript
  validateNumeric('12345');    // true
  validateNumeric('123 45');   // false
  validateNumeric('abc123');   // false
  validateNumeric('987654');   // true

### `validateAlphaNumericWithSpecialChars(value: string): boolean`
Validates if the string contains only alphanumeric characters and special characters like underscore, hyphen, and period.

- **Parameters**:
  - `value` (string): The string to validate.
- **Returns**:
  - `boolean`: `true` if the string contains only alphanumeric characters and allowed special characters (`_`, `-`, `.`), `false` otherwise.
- **Example**:
  ```typescript
  validateAlphaNumericWithSpecialChars('Hello_123');      // true
  validateAlphaNumericWithSpecialChars('Hello-123.World'); // true
  validateAlphaNumericWithSpecialChars('Hello@123');      // false
  validateAlphaNumericWithSpecialChars('Hello 123');      // false

### `validateAlphaNumericWithSpace(value: string): boolean`
Validates if the string contains only alphanumeric characters and spaces.

- **Parameters**:
  - `value` (string): The string to validate.
- **Returns**:
  - `boolean`: `true` if the string contains only alphanumeric characters and spaces, `false` otherwise.
- **Example**:
  ```typescript
  validateAlphaNumericWithSpace('Hello 123');    // true
  validateAlphaNumericWithSpace('Hello_123');    // false
  validateAlphaNumericWithSpace('12345');        // true
  validateAlphaNumericWithSpace('Hello World!'); // false

### `validateAlphabets(value: string): boolean`
Validates if the string contains only alphabetic characters (no spaces, no digits, no special characters).

- **Parameters**:
  - `value` (string): The string to validate.
- **Returns**:
  - `boolean`: `true` if the string contains only alphabetic characters, `false` otherwise.
- **Example**:
  ```typescript
  validateAlphabets('Hello');        // true
  validateAlphabets('Hello123');     // false
  validateAlphabets('Hello World'); // false
  validateAlphabets('Hello!');       // false

### `validatePhoneNumber(phone: string): boolean`
Validates a phone number. It can include an optional international prefix, followed by numbers and possible spaces or hyphens.

- **Parameters**:
  - `phone` (string): The phone number to validate.
- **Returns**:
  - `boolean`: `true` if the phone number is valid, `false` otherwise.
- **Example**:
  ```typescript
  validatePhoneNumber('+1 123-456-7890');    // true
  validatePhoneNumber('123-456-7890');       // true
  validatePhoneNumber('1234567890');         // true
  validatePhoneNumber('123-45-6789');        // true
  validatePhoneNumber('123 45 6789');        // true
  validatePhoneNumber('123 45-67890');       // false
  validatePhoneNumber('123abc4567');         // false


### `validateIndianMobileNumber(number: string): boolean`
Validates an Indian mobile number. The number should begin with a digit between 7 and 9, followed by 9 digits.

- **Parameters**:
  - `number` (string): The mobile number to validate.
- **Returns**:
  - `boolean`: `true` if the mobile number is valid, `false` otherwise.
- **Example**:
  ```typescript
  validateIndianMobileNumber('9876543210');   // true
  validateIndianMobileNumber('9123456789');   // true
  validateIndianMobileNumber('1234567890');   // false
  validateIndianMobileNumber('998877665');    // false
  validateIndianMobileNumber('7896541230');   // true
  validateIndianMobileNumber('123456789');    // false

### `validatePAN(pan: string): boolean`
Validates an Indian Permanent Account Number (PAN). A PAN consists of 5 uppercase letters, 4 digits, and 1 uppercase letter at the end.

- **Parameters**:
  - `pan` (string): The PAN to validate.
- **Returns**:
  - `boolean`: `true` if the PAN is valid, `false` otherwise.
- **Example**:
  ```typescript
  validatePAN('ABCDE1234F');  // true
  validatePAN('A1BCD2345E');  // false
  validatePAN('ABCDE12345');  // false
  validatePAN('ABCDE1234G');  // true
  validatePAN('abcde1234f');  /

### `validateAadhar(aadhar: string): boolean`
Validates an Indian Aadhar number. Aadhar numbers consist of 12 digits, starting with a number between 2 and 9.

- **Parameters**:
  - `aadhar` (string): The Aadhar number to validate.
- **Returns**:
  - `boolean`: `true` if the Aadhar number is valid, `false` otherwise.
- **Example**:
  ```typescript
  validateAadhar('123456789012');  // false
  validateAadhar('234567890123');  // true
  validateAadhar('987654321012');  // true
  validateAadhar('012345678901');  // false
  validateAadhar('1234ABCD5678');  // false

### `validatePINCode(pin: string): boolean`
Validates an Indian PIN code. A valid PIN code consists of 6 digits, with the first digit between 1 and 9.

- **Parameters**:
  - `pin` (string): The PIN code to validate.
- **Returns**:
  - `boolean`: `true` if the PIN code is valid, `false` otherwise.
- **Example**:
  ```typescript
  validatePINCode('110001');    // true
  validatePINCode('123456');    // true
  validatePINCode('000000');    // false
  validatePINCode('987654');    // true
  validatePINCode('12345');     // false
  validatePINCode('123AB6');  

### `validateGSTIN(gstin: string): boolean`
Validates an Indian GSTIN (Goods and Services Tax Identification Number). A valid GSTIN consists of 15 characters in a specific format:

- The first 2 characters are digits (representing the state code).
- The next 10 characters are alphanumeric (representing the PAN number).
- The 13th character is a letter (for the tax payer type).
- The 14th character is a letter or number (for the state code).
- The 15th character is a check digit.

- **Parameters**:
  - `gstin` (string): The GSTIN to validate.
- **Returns**:
  - `boolean`: `true` if the GSTIN is valid, `false` otherwise.
- **Example**:
  ```typescript
  validateGSTIN('22ABCDE1234F1Z5');  // true
  validateGSTIN('29AABCU9603R1Z5');  // true
  validateGSTIN('27AAEPL1234F1Z9');  // true
  validateGST

### `validateIFSCCode(ifscCode: string): boolean`
Validates an Indian IFSC (Indian Financial System Code) code. A valid IFSC code consists of 11 characters:

- The first 4 characters are uppercase letters (representing the bank code).
- The 5th character is always `0` (reserved for future use).
- The last 6 characters are numeric (representing the branch code).

- **Parameters**:
  - `ifscCode` (string): The IFSC code to validate.
- **Returns**:
  - `boolean`: `true` if the IFSC code is valid, `false` otherwise.
- **Example**:
  ```typescript
  validateIFSCCode('HDFC0001234');  // true
  validateIFSCCode('SBI0005678');   // true
  validateIFSCCode('ICIC0001234');  // true
 
### `validateVoterID(voterID: string): boolean`
Validates an Indian Voter ID. A valid Voter ID consists of 10 characters in the following format:

- The first 3 characters are uppercase letters (representing the state code).
- The next 7 characters are digits (representing the unique voter ID number).
- The 10th character is an uppercase letter.

- **Parameters**:
  - `voterID` (string): The Voter ID to validate.
- **Returns**:
  - `boolean`: `true` if the Voter ID is valid, `false` otherwise.
- **Example**:
  ```typescript
  validateVoterID('ABC1234567X');  // true
  validateVoterID('XYZ9876543A');  // true
  validateVoterID('MNP1234567B');  // true
  validateVoterID('ABC1234A67X');  // false
  validateVoterID('A123456789');   // false
  validateVoterID('ABC12345678X'); // false

