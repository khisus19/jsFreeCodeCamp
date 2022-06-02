// arr.splice(start, deleteCount, item1, itme2)
const arr = [1, 2, 3, 4, 5, 6];

// start positive
console.log(arr.splice(3));
// returns the deleted elements

// start negative
console.log(arr.splice(-1));

// star zero
const arr1 = ["a", "b", "c", "d", "e"]
console.log(arr1.splice(0))

// deleteCount
const arr2 = ["a", "b", "c", "d", "e"]
console.log(arr2.splice(2, 1))
console.log(arr2)

// item1, item2, ... itemN
const arr3 = ["a", "b", "c", "d", "e"]
console.log(arr3.splice(2, 2, 'another c', 'another d'))
console.log(arr3)