/* Flatten a nested array. You must account for varying levels of nesting.
Passed:steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
Passed:steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
Passed:steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
Passed:steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
Passed:Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods. */

function steamrollArray(arr) {
  const stack = []; //검사중이던 배열, 인덱스 저장
  stack.push(...arr);
  const newArr = [];

  while (stack.length > 0) { //스택에 요소가 없을 때까지
    let e = stack[0];
    if (Array.isArray(e)) { //e == 배열이면
      if (e.length == 0) { //e == 빈 배열이면 스택에서 삭제
        stack.shift();
      } else { //e != 빈배열이면 e의 모든 요소를 스택 앞에 넣어줌
        e = stack.shift();
        for (let i = 0; i < e.length; i++) {
          stack.splice(i, 0, e[i]);
        }
      } 
    } else { //e != 배열일 때에만 푸시
      newArr.push(e);
      stack.shift();
    }
  }
  return newArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
