function minimun(x, y) {
    console.log( x > y ? y : x);
}

minimun(16, 9);


// Multiple conditional operator
function checkSign(num) {
    return (num == 0) ? "zero" 
       : (num > 0) ? "positive"
       : "negative";
   }
   
console.log(checkSign(-10));

// Multiple conditional operator
function compare(num1, num2) {
    return (num1 === num2) ? "equal" 
       : (num1 > num2) ? `${num1} is greater than ${num2}`
       : `${num1} is lower than ${num2}`;
   }
   
console.log(compare(-10, 10));
console.log(compare(10, 10));
console.log(compare(15, 10));