/* Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities. */



function convertHTML(str) {
  return str.replace(/[\&|\<|\>|\'"]/g, function(e) {
    switch(e) {
      case "&":
        e = "&amp;";
        break;
      case "\<":
        e = "&lt;";
        break;
      case "\>":
        e = "&gt;";
        break;
      case "\'":
        e = "&apos;";
        break;
      case "\"":
        e = "&quot;";
        break;
    }
    return e;
  });
}

console.log(convertHTML("Schindler's List"));
