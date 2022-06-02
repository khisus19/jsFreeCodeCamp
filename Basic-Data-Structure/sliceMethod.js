// Slice method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified. 

const arr1 = ["a", "b", "c", "d", "e"]

console.log(arr1.slice()); // returns ["a", "b", "c", "d", "e"]
let slicito = arr1.slice(3); // -> returns ["d", "e"]
console.log(arr1.slice(1, 3)); //-> returns ["b", "c"]
