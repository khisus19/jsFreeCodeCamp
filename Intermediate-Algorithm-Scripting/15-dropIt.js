/* Drop it

Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
 */

function dropElements(arr, func) {
    while (!func(arr[0]) && arr.length > 0) { //Important to put arr.length>0 because with an empty array will enter in infinite loop
        arr.shift()
    }
    console.log(arr)
    return arr;
}
  
dropElements([1, 2, 3], function(n) {return n < 3; }); //-> [ 1, 2, 3 ]
dropElements([1, 2, 3, 4], function(n) {return n >= 3;}); //-> [ 3, 4 ]
dropElements([0, 1, 0, 1], function(n) {return n === 1;}); //-> [1, 0, 1]
dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) //-> [7, 4]
dropElements([1, 2, 3, 4], function(n) {return n > 5;}) //-> []

// Other solution
function dropElements2(arr, func) {
    let sliceIndex = arr.findIndex(func);
    return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
}

/* Code Explanation

    Use ES6 findIndex() function to find the index of the element that passes the condition
    Slice the array from the found index until the end
    There is one edge case! if the condition is not met against any of the elements ‘findIndex’ will return -1 which messes up the input to slice(). In this case use a simple conditional operator to return false instead of -1. And the ternary operator returns the found index of required elements when the condition is true, and the length of the array otherwise so that the return value is an empty array as is instructed.
 */