//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

export const rotate = (inputString, rotation) => {
  let rotatedString = "";
  for (let letter of inputString) {
    if (
      letter == " " ||
      letter == "." ||
      /^\d$/.test(letter) ||
      /^['".,:!?]/.test(letter)
    ) {
      rotatedString = rotatedString + letter;
      continue;
    }
    let capitalize = letter == letter.toUpperCase();
    let index = ALPHABET.indexOf(letter.toLowerCase());
    index += rotation;
    index = index >= 26 ? index - 26 : index;
    rotatedString =
      rotatedString +
      (capitalize ? ALPHABET[index].toUpperCase() : ALPHABET[index]);
  }
  return rotatedString;
};
