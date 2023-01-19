// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let num1 = 0;
  let num2 = 0;
  let i = array1.length - 1;
  for (let a1 of array1) {
    num1 += a1 * 10 ** i;
    i--;
  }
  console.log(num1);
  i = array2.length - 1;
  for (let a2 of array2) {
    num2 += a2 * 10 ** i;
    i--;
  }
  console.log(num2);
  return num1 + num2;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let number = value.toString();
  for (let i = 0; i < number.length - i - 1; i++) {
    console.log(number[i]);
    if (number[i] !== number[number.length - i - 1]) return false;
  }
  return true;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input === "" || input === undefined || input == null)
    return "Required field";
  let nr = Number(input);
  console.log(nr);
  if (isNaN(nr) || nr === 0) return "Must be a number besides 0";
  return "";
}
