/* Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of. */

function titleCase(str) {
  let arr = str.split(" ");
  let newArr = "";
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase();
    let first = arr[i].charAt(0).toUpperCase();
    let others = arr[i].slice(1);
    arr[i] = first + others;
    newArr += arr[i];
    if (i != arr.length - 1) {
      newArr += " ";
    }
  }
  str = newArr;
  return str;
}

console.log(titleCase("I'm a little tea pot"));
