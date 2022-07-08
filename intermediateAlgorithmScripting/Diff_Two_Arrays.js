/* Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order. */



function diffArray(arr1, arr2) {
  const newArr = [];
  const len1 = arr1.length;
  const len2 = arr2.length;
  const sameIndex = [];
  
//for문을 이용한 포함 검사
  for (let i = 0; i < len1; i++) {
    let isSame = false;
    for (let j = 0; j < len2; j++) {
      if (arr1[i] == arr2[j]) {
        isSame = true;
        sameIndex.push(j);
        break;
      }
    }
    if (!isSame) {
      newArr.push(arr1[i]);
    }
  }
  
//includes 메소드를 이용한 포함 검사
  for (let k = 0; k < len2; k++) {
    if(!sameIndex.includes(k)) {
      newArr.push(arr2[k]);
    }
  }

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
