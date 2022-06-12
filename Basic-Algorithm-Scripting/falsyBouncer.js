/* Falsy Bouncer

Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
 */
function bouncer(arr) {
    let newArr = [];
    arr.map(item => {
        if (item) {
            newArr.push(item);
        }
    })
    console.log(newArr);
    return newArr;
}
  
bouncer([7, "ate", "", false, 9]); //-> [ 7, 'ate', 9 ]
bouncer(["a", "b", "c"]); //-> ["a", "b", "c"]
bouncer([false, null, 0, NaN, undefined, ""]); //-> []
bouncer([null, NaN, 1, 2, undefined]); //-> [1, 2]

// With for loop
/* function bouncer(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) newArray.push(arr[i]);
    }
    console.log(newArray);
    return newArray;
} */

// With filter
/* function bouncer(arr) {
    return arr.filter(Boolean);
} */