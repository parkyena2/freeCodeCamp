/* Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2. */




function palindrome(str) {
  const regex = /[^\w]|[_]/g;
  const newStr = str.replace(regex, "").toLowerCase();
  console.log(newStr);
  const halfLen = Math.floor(newStr.length / 2);
  let isPalindrome = true;
  for (let i = 0; i < halfLen; i++) {
    if (newStr[i] != newStr[newStr.length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }
  return isPalindrome;
}

console.log(palindrome("0_0 (: /-\ :) 0-0"));
