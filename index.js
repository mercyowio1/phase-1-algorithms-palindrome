
function isPalindrome(word) {
  // Convert the word to an array, reverse it, and join it back into a string
  return word === word.split("").reverse().join("");
}

/* 
  Pseudocode:
  1. Take the input word.
  2. Reverse the word.
  3. Compare the reversed word with the original word.
  4. If they are the same, return true; otherwise, return false.
*/

/*
  Explanation:
  A palindrome is a word that reads the same forward and backward.
  - First, we split the word into an array of characters.
  - Then, we reverse the array.
  - Next, we join the reversed array back into a string.
  - Finally, we compare the reversed string with the original string.
  If both are equal, the word is a palindrome, so we return `true`.
  Otherwise, we return `false`.
*/

// You can run `node index.js` to test
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;