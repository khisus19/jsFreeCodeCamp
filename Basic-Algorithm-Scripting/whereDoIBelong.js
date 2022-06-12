/* Where do I Belong

Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
 */
function getIndexToIns(arr, num) {
    arr.sort((a,b) => a - b);
    let index = arr.findIndex(element => num <= element);
    console.log(index);
    if (index == -1) {
        return arr.length;
    } else {
        return index;
    }
}
  
getIndexToIns([10, 20, 30, 40, 50], 35); //-> 3
getIndexToIns([10, 20, 30, 40, 50], 30); //-> 2
getIndexToIns([40, 60], 50); //-> 1
getIndexToIns([3, 10, 5], 3); //-> 0
getIndexToIns([2, 5, 10], 15); //-> 3

// Using filter
function getIndexToIns(arr, num) {
    return arr.filter(val => num > val).length;
}
/* Code Explanation

    Count the number of entries that are smaller than the new value num
    The new value would be inserted after these values
 */

// Using sort and findIndex in chain
function getIndexToIns(arr, num) {
    // sort and find right index
    let index = arr
      .sort((curr, next) => curr - next)
      .findIndex(currNum => num <= currNum);
    // Returns index or total length of arr
    return index === -1 ? arr.length : index;
}

getIndexToIns([40, 60], 500);
/* Code Explanation

    First sort the array in ascending order, this is currently done using array functions for minimal footprint.
    Once the array is sorted, we directly apply the .findIndex() where we are going to compare every element in the array until we find where num <= currNum - where the number we want to insert is less than or equal to the current number in the iteration.
    Then we use ternary operations to check whether we got an index returned or -1. We only get -1 when the index was not found, meaning when we get a false for all elements in the array, and for such case, it would mean that num should be inserted at the end of the list. Hence, why we use arr.length.
 */

// Solution 4
function getIndexToIns(arr, num) {
    return arr
      .concat(num)
      .sort((a, b) => a - b)
      .indexOf(num);
}
  
getIndexToIns([1, 3, 4], 2);
/* Code Explanation

    We use method-chaining to invoke one method after another to solve the problem in a single line. First we create a new array with the contents of arr and num by using the concat() method
    Then we use sort() with the callback arrow function (a, b) => return a-b to sort the numbers in ascending order
    Lastly we return the position or index of num in the array with the indexOf() method
 */