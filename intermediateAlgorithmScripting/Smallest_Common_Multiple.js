/* Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6. */




function getGCD(a, b) {
  let GCD = 0;
  if (a > b) {
    let tmp = a;
    a = b;
    b = tmp;
  }
  for (let i = 1; i < b; i++) {
    if (a % i == 0 && b % i == 0 && i > GCD) {
      GCD = i;
    }
  }
  return GCD;
}

function smallestCommons(arr) {
  //sort input
  let newArr = [...arr];
  if (arr[0] > arr[1]) {
    newArr = [];
    newArr.push(arr[1]);
    newArr.push(arr[0]);
  }
  
  //initial range array
  const nums = [];
  for (let i = newArr[0]; i <= newArr[1]; i++) {
      nums.push(i);
  }

  let gcd = getGCD(newArr[0], newArr[1]);
  let scm = newArr[0] * newArr[1] / gcd;
  let j = newArr[0] + 1;
  
  while (j < newArr[1]) {
    if (scm % j != 0) {
      scm = scm * j / getGCD(scm, j);
    }
    j++
  }

  return scm;
}

console.log(smallestCommons([23, 18]));
