/* Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string. */


function reverseString(str) {
  let arr = [...str];
  let len = arr.length;
  let newStr = "";

  for (let i = 0; i < len; i++) {
    newStr += arr.pop();
  }
  
  return newStr;
}

console.log(reverseString("hello"));
