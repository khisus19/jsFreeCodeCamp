function addThree (x, y, z){
    console.log(x+y+z);
}
var arr = [0, 1, 2];
addThree(arr);


// Copy arrays
var arr = [1,2,3];
var arr2 = [...arr];
arr2.push(4);
console.log(arr);
console.log(arr2);

// concatenate arrays
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// arr1.concat(arr2);
arr1 = [...arr1, "freeCodeCamp", ...arr2];
console.log(arr1)

// REST OPERATOR: condense multiple elements into an array
function multiply(multiplier, ...theArgs) {
    return theArgs.map(function(element) {
        return multiplier * element;
    });
}

var arr = multiply(2, 1, 2, 3);
console.log(arr);