/* Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function. */



function factorialize(num) {
  if (num <= 1) return 1;
  else {
    for (let i = num - 1; i > 0; i--) {
      num *= i;
    }
    return num;
  }
}

console.log(factorialize(5));
