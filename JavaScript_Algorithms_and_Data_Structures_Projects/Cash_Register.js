function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let result = {
    status: "",
    change: []
    };
  let newCid = [...cid];
  let length = newCid.length - 1;
  const units = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]];
  
  while (length >= 0) {
    if (units[length][1] <= change) {
      while (change - units[length][1] >= 0.0 && newCid[length][1] - units[length][1] >= 0.0) {
        change = (change - units[length][1]).toFixed(2);
        newCid[length][1] -= units[length][1];
        if (result.change.indexOf(units[length][0]) == -1) {
          result.change.push(units[length]);
        } else {
          result.change[length][1] += units[length][1];
        }
        }
    }
    if (change == 0) break;
    length--;
  }

  result.change = result.change.filter(function(e) {
    if (e[1] != 0) return true;
  })

  if (change > 0) {
    result.status = "INSUFFICIENT_FUNDS"
  } else {
    const isClosed = newCid.findIndex(function(e){
      if (e[1] != 0) return true;
    });
    if (isClosed == true) {
      result.status = "CLOSED";
    } else {
      result.status = "OPEN";
    }
  }

  return result;
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
