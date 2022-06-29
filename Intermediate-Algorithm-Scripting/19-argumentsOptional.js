/* Arguments Optional

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function. */

function addTogether(a, b) {
    if(typeof a !== 'number') {
        return undefined
    } else if (typeof a === 'number' && typeof b === 'number') { //This was verbose because everything that passes first if is true for typeof a === 'number'
        return a + b
    } else if (typeof a === 'number' && b === undefined){ //Same here
        return (c) => {
            return typeof c === 'number' ? a + c : undefined;
        }
    }
}

console.log(addTogether(2, 3)); //-> 5
console.log(addTogether(23, 30)); //-> 53
console.log(addTogether(2, "3")); //-> undefined
console.log(addTogether(2)([3])); //-> undefined
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));

// A more precise form of the same solution
function addTogether(a, b) {
    if(typeof a !== 'number') {
        return undefined
    } else if (typeof b === 'number') { 
        return a + b
    } else if (b === undefined){ 
        return (c) => {
            return typeof c === 'number' ? a + c : undefined;
        }
    }
}