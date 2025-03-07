// Copyright (c) 2025 Innostes Solutions.
// All rights reserved.

// Licensed under the MIT License. You may obtain a copy of the License at
// https://opensource.org/licenses/MIT

// This file is a part of the "validators" library, built by Innostes Solutions.
// For more information, visit: https://github.com/innostes/validators

// ================================
// ** Description: Regex validators for common functionality **
// ================================

/**
 * Validates an email address to ensure it follows the standard email format.
 * @param {string} email - The email address to validate.
 * @returns {boolean} - `true` if the email is valid, `false` otherwise.
 * @example
 * validateEmail('user@example.com'); // true
 */
export function validateEmail(email: string): boolean {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
}

/**
 * Validates a URL, supporting both `http` and `https` protocols.
 * @param {string} url - The URL to validate.
 * @returns {boolean} - `true` if the URL is valid, `false` otherwise.
 * @example
 * validateURL('https://example.com'); // true
 */
export function validateURL(url: string): boolean {
  const regex =
    /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z0-9]{2,4}(\/[a-z0-9\-_.~!$&'()*+,;=]*)*(\?[a-z0-9\-_.~!$&'()*+,;=]*)?$/i;
  return regex.test(url);
}

/**
 * Validates a strong password, requiring at least 8 characters with one uppercase letter, one lowercase letter, one digit, and one special character.
 * @param {string} password - The password to validate.
 * @returns {boolean} - `true` if the password is strong, `false` otherwise.
 * @example
 * validateStrongPassword('P@ssw0rd123'); // true
 */
export function validateStrongPassword(password: string): boolean {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(password);
}

/**
 * Validates if the string contains only alphanumeric characters (letters and numbers).
 * @param {string} value - The string to validate.
 * @returns {boolean} - `true` if the string is alphanumeric, `false` otherwise.
 * @example
 * validateAlphaNumeric('Hello123'); // true
 */
export function validateAlphaNumeric(value: string): boolean {
  const regex = /^[a-zA-Z0-9]+$/;
  return regex.test(value);
}

/**
 * Validates if the string contains only alphabetic characters and spaces.
 * @param {string} value - The string to validate.
 * @returns {boolean} - `true` if the string contains only alphabets and spaces, `false` otherwise.
 * @example
 * validateAlphaWithSpace('Hello World'); // true
 */
export function validateAlphaWithSpace(value: string): boolean {
  const regex = /^[a-zA-Z\s]+$/;
  return regex.test(value);
}

/**
 * Validates if the string contains only numeric characters (digits).
 * @param {string} value - The string to validate.
 * @returns {boolean} - `true` if the string is numeric, `false` otherwise.
 * @example
 * validateNumeric('12345'); // true
 */
export function validateNumeric(value: string): boolean {
  const regex = /^[0-9]+$/;
  return regex.test(value);
}

/**
 * Validates if the string contains only alphanumeric characters and special characters like underscore, hyphen, and period.
 * @param {string} value - The string to validate.
 * @returns {boolean} - `true` if the string contains valid characters, `false` otherwise.
 * @example
 * validateAlphaNumericWithSpecialChars('Hello-123_World'); // true
 */
function validateAlphaNumericWithSpecialChars(value: string): boolean {
  const regex = /^[a-zA-Z0-9\s\-_\.]+$/;
  return regex.test(value);
}

/**
 * Validates if the string contains only alphanumeric characters and spaces.
 * @param {string} value - The string to validate.
 * @returns {boolean} - `true` if the string contains only alphanumeric characters and spaces, `false` otherwise.
 * @example
 * validateAlphaNumericWithSpace('Hello 123'); // true
 */
export function validateAlphaNumericWithSpace(value: string): boolean {
  const regex = /^[a-zA-Z0-9\s]+$/;
  return regex.test(value);
}

/**
 * Validates if the string contains only alphabetic characters (no spaces, no digits, no special characters).
 * @param {string} value - The string to validate.
 * @returns {boolean} - `true` if the string contains only alphabets, `false` otherwise.
 * @example
 * validateAlphabets('Hello'); // true
 */
export function validateAlphabets(value: string): boolean {
  const regex = /^[a-zA-Z]+$/;
  return regex.test(value);
}

/**
 * Validates a phone number. It can include an optional international prefix, followed by numbers and possible spaces or hyphens.
 * @param {string} phone - The phone number to validate.
 * @returns {boolean} - `true` if the phone number is valid, `false` otherwise.
 * @example
 * validatePhoneNumber('+1 123-456-7890'); // true
 */
export function validatePhoneNumber(phone: string): boolean {
  const regex = /^[+]*[0-9]{1,4}[ -]?[0-9]{1,4}[ -]?[0-9]{1,4}[ -]?[0-9]{1,4}$/;
  return regex.test(phone);
}
