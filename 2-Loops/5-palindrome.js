function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  // Use two pointers technique to compare characters from both ends
  let left = 0;
  let right = cleanStr.length - 1;

  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) {
      return false; // If characters don't match, it's not a palindrome
    }
    left++;
    right--;
  }

  return true; // All characters matched, it's a palindrome
}

// Test cases
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("12321"));   // true
console.log(isPalindrome("Hello World!")); // false
