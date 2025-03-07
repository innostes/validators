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
 * Validates an Indian mobile number. The number must start with digits between 7 and 9 and be followed by 9 digits.
 * @param {string} number - The mobile number to validate.
 * @returns {boolean} - `true` if the number is valid, `false` otherwise.
 * @example
 * validateIndianMobileNumber('9876543210'); // true
 */
export function validateIndianMobileNumber(number: string): boolean {
  const regex = /^[7-9][0-9]{9}$/;
  return regex.test(number);
}

/**
 * Validates an Indian PAN (Permanent Account Number). The PAN must be in the format: 
 * 5 uppercase letters, followed by 4 digits, and ending with 1 uppercase letter.
 * @param {string} pan - The PAN number to validate.
 * @returns {boolean} - `true` if the PAN is valid, `false` otherwise.
 * @example
 * validatePAN('ABCDE1234F'); // true
 */
export function validatePAN(pan: string): boolean {
  const regex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  return regex.test(pan);
}

/**
 * Validates an Indian Aadhar number. The Aadhar number must be 12 digits long, 
 * starting with a digit between 2 and 9.
 * @param {string} aadhar - The Aadhar number to validate.
 * @returns {boolean} - `true` if the Aadhar number is valid, `false` otherwise.
 * @example
 * validateAadhar('234567890123'); // true
 */
export function validateAadhar(aadhar: string): boolean {
  const regex = /^[2-9]{1}[0-9]{11}$/;
  return regex.test(aadhar);
}

/**
 * Validates an Indian PIN code. The PIN code must be a 6-digit number starting with a digit between 1 and 9.
 * @param {string} pin - The PIN code to validate.
 * @returns {boolean} - `true` if the PIN code is valid, `false` otherwise.
 * @example
 * validatePINCode('110001'); // true
 */
export function validatePINCode(pin: string): boolean {
  const regex = /^[1-9][0-9]{5}$/;
  return regex.test(pin);
}

/**
 * Validates an Indian GSTIN (Goods and Services Tax Identification Number). 
 * The GSTIN format is: 2 digits, 5 uppercase letters, 4 digits, 1 uppercase letter, 
 * 1 alphanumeric character, 1 uppercase letter, and 1 digit.
 * @param {string} gstin - The GSTIN to validate.
 * @returns {boolean} - `true` if the GSTIN is valid, `false` otherwise.
 * @example
 * validateGSTIN('27ABCDE1234F1Z5'); // true
 */
export function validateGSTIN(gstin: string): boolean {
  const regex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{1}[A-Z]{1}[0-9]{1}$/;
  return regex.test(gstin);
}

/**
 * Validates an Indian IFSC (Indian Financial System Code) code. 
 * The IFSC code format is: 4 uppercase letters followed by 7 digits.
 * @param {string} ifscCode - The IFSC code to validate.
 * @returns {boolean} - `true` if the IFSC code is valid, `false` otherwise.
 * @example
 * validateIFSCCode('SBIN0001234'); // true
 */
export function validateIFSCCode(ifscCode: string): boolean {
  const regex = /^[A-Za-z]{4}\d{7}$/;
  return regex.test(ifscCode);
}

/**
 * Validates an Indian Voter ID number. The Voter ID must start with 3 uppercase letters, 
 * followed by 7 digits, and end with an uppercase letter.
 * @param {string} voterID - The Voter ID to validate.
 * @returns {boolean} - `true` if the Voter ID is valid, `false` otherwise.
 * @example
 * validateVoterID('ABC1234567X'); // true
 */
export function validateVoterID(voterID: string): boolean {
  const regex = /^[A-Z]{3}[0-9]{7}[A-Z]{1}$/;
  return regex.test(voterID);
}
