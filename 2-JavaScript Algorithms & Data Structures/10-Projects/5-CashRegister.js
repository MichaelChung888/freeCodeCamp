/*
Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), 
payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

The goal is to return: 
1) Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
2) Return {status: "CLOSED", change: [...]} with cash-in-drawer is equal to the change due, where "..." is the cid
3) Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/

function checkCashRegister(price, cash, cid) {
    var convert = {
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": 0.1,
      "QUARTER": 0.25,
      "ONE": 1,
      "FIVE": 5,
      "TEN": 10,
      "TWENTY": 20,
      "ONE HUNDRED": 100
    };
  
    let changeArr = [];
    let change = cash - price;
    let total = 0;

    //Find the total change in cid
    for(let i = 0; i < cid.length; i++){
      total += cid[i][1];
    }
    total = total.toFixed(2);
  
    if (total == change){
      return ({status: "CLOSED", change: cid}); //if the total change in cid is equal to change 
    }
    else{ //runs a for loop which runs from largest currency to smallest currency, slowly decrements the change by the corresponding amount of currency
      for(let j = cid.length-1; j >= 0; j--){
        let currency = convert[cid[j][0]];
  
        if(change > currency){
          if(cid[j][1] < change){
            changeArr.push([cid[j][0], cid[j][1]]);
            change = (change - cid[j][1]).toFixed(2);
          }
          else {
            changeArr.push([cid[j][0], currency*Math.floor(change/currency)]);
            change = (change%currency).toFixed(2);
          }
        }
      }
    
      //finally once the changeArr is formed, check if the change is 0 or not
      if(change == 0){
        return ({status: "OPEN", change: changeArr});
      }
  
      else {
        return ({status: "INSUFFICIENT_FUNDS", change: []});
      }
  
    }
  }
  
  console.log(checkCashRegister(3.26, 100, 
    [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));