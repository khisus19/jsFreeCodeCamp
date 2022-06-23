/* Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.
 */

function destroyer(arr, ...args) {
    let newArr = [...arr];
    let argumentos = [...args];

    let result = newArr.filter(item => !argumentos.includes(item))
    console.log(result)
    console.log(argumentos)
    return result;
}
  
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
destroyer([3, 5, 1, 2, 2], 2, 3, 5);
destroyer([2, 3, 2, 3], 2, 3);

// A more concise way
function destroyer2(arr, ...valsToRemove) {
    return arr.filter(elem => !valsToRemove.includes(elem));
}