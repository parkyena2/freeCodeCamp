/* Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array. */



function dropElements(arr, func) {
  const len = arr.length;
  let ind = null;
  for (let i = 0; i < len; i++) {
    if (func(arr[i])) {
      ind = i;
      break;
    }
  }

  let newArr = [];
  if (ind != null) {
    newArr = arr.slice(ind);
  }

  return newArr;
}

console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));
