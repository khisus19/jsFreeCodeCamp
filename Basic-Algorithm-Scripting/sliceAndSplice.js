/* Slice and Splice

You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
 */

function frankenSplice(arr1, arr2, n) {
    let newArr = [...arr2];
    newArr.splice(n, 0, ...arr1)
    console.log(newArr);
    return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1); //-> [ 4, 1, 2, 3, 5, 6 ]
frankenSplice([1, 2], ["a", "b"], 1); //-> [ 'a', 1, 2, 'b' ]
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2); //-> [ 'head', 'shoulders', 'claw', 'tentacle', 'knees', 'toes' ]

// Without spread operator
function frankenSplice2(arr1, arr2, n) {
    let newArr = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
        newArr.splice(n, 0, arr1[i]);
        n++;
    }
    console.log(newArr);
    return newArr;
}
frankenSplice2([1, 2, 3], [4, 5, 6], 1); //-> [ 4, 1, 2, 3, 5, 6 ]
frankenSplice2([1, 2], ["a", "b"], 1); //-> [ 'a', 1, 2, 'b' ]
frankenSplice2(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2); //-> [ 'head', 'shoulders', 'claw', 'tentacle', 'knees', 'toes' ]