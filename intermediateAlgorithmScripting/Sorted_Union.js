/* Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples. */




function uniteUnique(...arr) {
  let newArr = [];
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let subLen = arr[i].length;
    for (let j = 0; j < subLen; j++) {
      if(!newArr.includes(arr[i][j])) {
        newArr.push(arr[i][j]);
      }
    }
  }
  return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
