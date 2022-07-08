/* Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes. */



function spinalCase(str) {
  let arr = str.split(/([A-Z]|\s|\W|_|-)/);
  arr = arr.filter(element => element != "-" && element != '' && element != " " && element != "_");

  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if ((/[A-Z]/).test(arr[i])) {
      arr[i] = arr[i].concat(arr[i+1]);
      arr.splice(i+1, 1);
    }
  }

  arr = arr.map(function(e, i) {
    e = e.toLowerCase();
    if(e != "-") {
      e = e.concat("-");
    }
    return e;
  });

  let newStr = arr.join("");
  newStr = newStr.substring(0, newStr.length-1);

  return newStr;
}

console.log(spinalCase('The_Andy_Griffith_Show'));
