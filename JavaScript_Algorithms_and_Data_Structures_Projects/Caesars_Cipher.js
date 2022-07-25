/* One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on. */





function rot13(str) {
  let arr = [...str];
  arr = arr.map(elem => {
    let num = elem.charCodeAt(0);
    if (num >= 65 && num <= 77) {
      num += 13;
    } else if (num >= 78 && num <= 90) {
      num -= 13;
    }
    return String.fromCharCode(num);
  });
  const newStr = arr.join("");
  return newStr;
}

rot13("SERR PBQR PNZC");
