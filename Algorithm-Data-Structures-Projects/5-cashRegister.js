/* Cash Register

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key. */

function reducer(obj) {
    let simplified = [];
    for (let i = 0; 0 < obj.change.length; ) {
        if (obj.change.length === 1) {
            simplified.push(obj.change[0])
            obj.change.shift()
        } else if (obj.change[0][0] === obj.change[1][0]) {
            obj.change[1][1] += Math.round(obj.change[0][1] * 100) / 100;
            obj.change.shift()
        } else if (obj.change[0][0] !== obj.change[1][0]) {
            simplified.push(obj.change[0])
            obj.change.shift()
        }
    }
    obj.change = simplified
    return obj
}

function checkCashRegister(price, cash, cid) {
    let cidCopy = JSON.parse(JSON.stringify(cid))

    let changeDue = cash - price;
    let totalCashInDrawer = 0;
    for (let i = 0; i < cid.length; i++) {
        totalCashInDrawer += cid[i][1]
    }
    totalCashInDrawer = Math.round(totalCashInDrawer * 100) / 100;
    let returnedObj = {status: "", change: []};

    while (changeDue >= 0) {
        if (changeDue > totalCashInDrawer) {
            returnedObj.status = 'INSUFFICIENT_FUNDS'
            returnedObj.change = []
            break;
        } else if (changeDue >= 100 && cid[8][1] > 0) {
            returnedObj.change.push(["ONE HUNDRED", 100])
            cid[8][1] -= 100
            changeDue -= 100
        } else if (changeDue >= 20 && cid[7][1] > 0) {
            returnedObj.change.push(["TWENTY", 20])
            cid[7][1] -= 20
            changeDue = Math.round((changeDue - 20) * 100) / 100;
            totalCashInDrawer = Math.round((totalCashInDrawer - 20) * 100) / 100;
        } else if (changeDue >= 10 && cid[6][1] > 0) {
            returnedObj.change.push(["TEN", 10])
            cid[6][1] = Math.round((cid[6][1] - 10) * 100) / 100;
            changeDue = Math.round((changeDue - 10) * 100) / 100;
            totalCashInDrawer = Math.round((totalCashInDrawer - 10) * 100) / 100;
        } else if (changeDue >= 5 && cid[5][1] > 0) {
            returnedObj.change.push(["FIVE", 5])
            cid[5][1] = Math.round((cid[5][1] - 5) * 100) / 100;
            changeDue = Math.round((changeDue - 5) * 100) / 100;
            totalCashInDrawer = Math.round((totalCashInDrawer - 5) * 100) / 100;
        } else if (changeDue >= 1 && cid[4][1] > 0) {
            returnedObj.change.push(["ONE", 1])
            cid[4][1] = Math.round((cid[4][1] - 1) * 100) / 100;
            changeDue = Math.round((changeDue - 1) * 100) / 100;
            totalCashInDrawer = Math.round((totalCashInDrawer - 1) * 100) / 100;
        } else if (changeDue >= 0.25 && cid[3][1] > 0) {
            returnedObj.change.push(["QUARTER", 0.25])
            cid[3][1] = Math.round((cid[3][1] - 0.25) * 100) / 100;
            changeDue = Math.round((changeDue - 0.25) * 100) / 100;
            totalCashInDrawer = Math.round((totalCashInDrawer - 0.25) * 100) / 100;
        } else if (changeDue >= 0.1 && cid[2][1] > 0) {
            returnedObj.change.push(["DIME", 0.1])
            cid[2][1] = Math.round((cid[2][1] - 0.1) * 100) / 100;
            changeDue = Math.round((changeDue - 0.1) * 100) / 100;
            totalCashInDrawer = Math.round((totalCashInDrawer - 0.1) * 100) / 100;
        } else if (changeDue >= 0.05 && cid[1][1] > 0) {
            returnedObj.change.push(["NICKEL", 0.05])
            cid[1][1] = Math.round((cid[1][1] - 0.05) * 100) / 100;
            changeDue = Math.round((changeDue - 0.05) * 100) / 100;
            totalCashInDrawer = Math.round((totalCashInDrawer - 0.05) * 100) / 100;
        } else if (changeDue >= 0.01 && cid[0][1] > 0) {
            returnedObj.change.push(["PENNY", 0.01])
            cid[0][1] = Math.round((cid[0][1] - 0.01) * 100) / 100;
            changeDue = Math.round((changeDue - 0.01) * 100) / 100;
            totalCashInDrawer = Math.round((totalCashInDrawer - 0.01) * 100) / 100;
        } else if (changeDue === 0 && totalCashInDrawer === 0){
            returnedObj.status = "CLOSED"
            returnedObj.change = cidCopy
            break
        } else if (changeDue > 0){
            returnedObj.status = 'INSUFFICIENT_FUNDS'
            returnedObj.change = []
            break; 
        } else if (changeDue === 0) {
            returnedObj.status = "OPEN"
            break
        }
    }
    let simplified = reducer(returnedObj)
    console.log(simplified)

    return simplified;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])