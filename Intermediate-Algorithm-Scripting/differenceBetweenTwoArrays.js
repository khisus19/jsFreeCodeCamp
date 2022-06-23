/* Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
 */

function diffArray(arr1, arr2) {
    const concatArr = arr1.concat(arr2)

    const filtered = concatArr.filter(item => {
        return (arr1.includes(item) && !arr2.includes(item)) || (!arr1.includes(item) && arr2.includes(item)); //This is not accurate since arr1 and arr2 always include item we don't need to add that statement
    })
    
    console.log(filtered);
    return filtered;
}

diffArray2([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray2(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diffArray2(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);

// Another way using if statement and .map
function diffArray2(arr1, arr2) {
    const concatArr = arr1.concat(arr2)
    const newArr = [];

    concatArr.map(item => {
        if (arr1.includes(item) && !arr2.includes(item)) {
            newArr.push(item)
        } else if (!arr1.includes(item) && arr2.includes(item)) {
            newArr.push(item)
        }
    })
    
    console.log('New array from function 2', newArr);
    return newArr;
}

// A better way I didn't saw
function diffArray(arr1, arr2) {
    return arr1
      .concat(arr2)
      .filter(item => !arr1.includes(item) || !arr2.includes(item));
}
  
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Another way using .indexOf()
function diffArray(arr1, arr2) {
    return [...diff(arr1, arr2), ...diff(arr2, arr1)];
  
    function diff(a, b) {
      return a.filter(item => b.indexOf(item) === -1); // Since indexOf return -1 when it can't find the item
    }
}
