/* Return a Sorted Array Without Changing the Original Array

A side effect of the sort method is that it changes the order of the elements in the original array. In other words, it mutates the array in place. One way to avoid this is to first concatenate an empty array to the one being sorted (remember that slice and concat return a new array), then run the sort method.

Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable.
 */

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
    let newArr = arr.slice();
    newArr.sort((a, b) => a - b);
    console.log(newArr);
    return newArr;

  // Only change code above this line
}

nonMutatingSort(globalArray); //-> [ 2, 3, 5, 6, 9 ]
nonMutatingSort([1, 30, 4, 21, 100000]); //-> [1, 4, 21, 30, 100000]