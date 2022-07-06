/* Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien. */


function mutation(arr) {
  let arr0 = [...arr[0].toLowerCase()];
  let arr1 = [...arr[1].toLowerCase()];
  let isSame;
  
  for (let i = 0; i < arr1.length; i++) {
    isSame = false;
    for (let j = 0; j < arr0.length; j++) {
      if (arr1[i] == arr0[j]) isSame = true;
    }
    if (!isSame) break;
  }

  return isSame;
}

console.log(mutation(["hello", "neo"]));
