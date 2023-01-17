//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function singleLine(input) {
  let result = [];
  for (let letter of input) {
    result.push(letter);
  }
  return result;
}

function getMaxLength(input) {
  let maxLength = 0;
  for (let line of input) {
    maxLength = maxLength < line.length ? line.length : maxLength;
  }
  console.log("maxLength: " + maxLength);
  return maxLength;
}

function addPadding(input, maxLength) {
  let index = 0;
  for (let line of input) {
    if (line.length != maxLength) {
      input[index] = line.padEnd(maxLength);
      //   console.debug("line with padding: " + line + " " + line.length);
    }
    index++;
  }
  return input;
}

function squareMultiple(arr) {
  for (let line of arr) {
    console.debug("line with padding: " + line + " " + line.length);
  }
  let result = [];
  for (let i = 0; i < arr[0].length; i++) {
    let text = "";
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][i] != null) text += arr[j][i];
    }
    result.push(text);
  }
  for (let res of result) {
    console.debug(res);
  }
  return result;
}

export const transpose = (arr) => {
  if (arr.length == 1) return singleLine(arr[0]);
  if (arr.length >= 2) {
    arr = addPadding(arr, getMaxLength(arr));
    return squareMultiple(arr);
  }
  return [];
};
