function minimun(x, y) {
    console.log( x > y ? y : x);
}

minimun(16, 9);


// Multiple conditional operator
function checkSign(num) {
    return (num == 0) ? "zero" 
       : (num > 0) ? "positive"
       : "negative"
   }
   
   checkSign(10);