/* Steamroller

Flatten a nested array. You must account for varying levels of nesting.
 */

// This is my solution and it didn't worked because always return undefined
/* function steamrollArray(arr) {
    let newArr = [];
    arr.map(item => {
        if (Array.isArray(item)) {
            item.map(elem => newArr.push(elem));
        } else {
            newArr.push(item)
        }
    })
    if(newArr.some(item => Array.isArray(item))) {
        steamrollArray(newArr)
    } else {
        console.log(newArr)
        return newArr;
    }
    return newArr
} */
  
steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([[["a"]], [["b"]]]);
steamrollArray([1, [], [3, [[4]]]]);
steamrollArray([1, {}, [3, [[4]]]])

// Fix adding a ternary conditional
function steamrollArray(arr) {
    let newArr = [];
    arr.map(item => {
        if (Array.isArray(item)) {
            item.map(elem => newArr.push(elem));
        } else {
            newArr.push(item)
        }
    })
    return newArr.some(Array.isArray) ? steamrollArray(newArr) : newArr;
}

// A more concise way
function steamrollArray(arr) {
    const flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}