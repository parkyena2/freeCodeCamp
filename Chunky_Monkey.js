/* Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array. */


function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let i = 0;
  for (let i = 0; i < arr.length; i+=size) {
    let subArr = [];
    for (let j = 0; j < size; j++) {
      if (i+j < arr.length) {
        subArr.push(arr[i+j]);
      } else break;
    }
    newArr.push(subArr);
  }
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
