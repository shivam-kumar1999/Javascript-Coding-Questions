function countOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      count++;
    }
  }
  return count;
}

// Test the function
const inputString = "helllo";
const targetChar = "l";
const occurrences = countOccurrences(inputString, targetChar);
console.log(`The character "${targetChar}" appears ${occurrences} times in the string "${inputString}".`);
