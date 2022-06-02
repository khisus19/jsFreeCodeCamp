// Use of ES6 spread operator

let thisArray = [1, 2, 3, 4];
let thatArray = [...thisArray];
console.log(thatArray)

// Combine arrays

let arr1 = ['sage', 'rosemary', 'parsley', 'thyme'];
let arr2 = ['basil', 'cilantro', ...arr1, 'coriander'];
console.log(arr2);