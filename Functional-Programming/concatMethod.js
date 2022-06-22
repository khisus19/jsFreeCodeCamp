/* Combine Two Arrays Using the concat Method

Concatenation means to join items end to end. JavaScript offers the concat method for both strings and arrays that work in the same way. For arrays, the method is called on one, then another array is provided as the argument to concat, which is added to the end of the first array. It returns a new array and does not mutate either of the original arrays. Here's an example: */


function nonMutatingConcat(original, attach) {
    // Only change code below this line
    const concatArray = original.concat(attach)
    console.log(concatArray);
    return concatArray;
  
    // Only change code above this line
}

// Function to push items without mutating the original array
function nonMutatingPush(original, newItem) {
    // Only change code below this line
    return original.concat(newItem);
  
    // Only change code above this line
}

const first1 = [1, 2, 3];
const second1 = [4, 5];
nonMutatingPush(first1, second1);

// Concat function without .concat()

function nonMutatingNoConcat(original, attach) {
    // Only change code below this line
    const concatArray = original.slice();
    attach.map((item) => {
      concatArray.push(item)
    })
    console.log(concatArray);
    return concatArray;
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingNoConcat(first, second);