/* Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case. */




function convertToRoman(num) {
  const roman_arabic = [
    {r: "M", a: 1000},
    {r: "CM", a: 900},
    {r: "D", a: 500},
    {r: "CD", a: 400},
    {r: "C", a: 100},
    {r: "XC", a: 90},
    {r: "L", a: 50},
    {r: "XL", a: 40},
    {r: "X", a: 10},
    {r: "IX", a: 9},
    {r: "V", a: 5},
    {r: "IV", a: 4},
    {r: "I", a: 1}
  ];
  let calcNum = num;
  let roman = "";
  let i = 0;

  while(calcNum > 0) {
    if (calcNum >= roman_arabic[i].a) {
      roman += roman_arabic[i].r;
      calcNum -= roman_arabic[i].a;
    } else i++;
  };
  
  return roman;
};

console.log(convertToRoman(649));
