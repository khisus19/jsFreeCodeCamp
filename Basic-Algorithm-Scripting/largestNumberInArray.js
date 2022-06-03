// Return largest numbers in arrays

function largestOfFour(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        let highNumber = 0;
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] >= highNumber){
                highNumber = arr[i][j];
                newArr[i] = highNumber;
            } else if (arr[i][j] < 0 && highNumber == 0) {
                highNumber = arr[i][j];
            }
        }
    }
    return newArr;
}

let result = largestOfFour([[-17, -23, -25, -12], [-25, -7, -34, -48], [4, -10, 18, 21], [-72, -3, -17, -10]]);
console.log(result);

// A better way
function largestOfFour(arr) {
    const results = [];
    for (let i = 0; i < arr.length; i++) {
      let largestNumber = arr[i][0];
      for (let j = 1; j < arr[i].length; j++) {
        if (arr[i][j] > largestNumber) {
          largestNumber = arr[i][j];
        }
      }
      results[i] = largestNumber;
    }
  
    return results;
}

// Declarative aproach
function largestOfFour(arr) {
    return arr.map(function(group) {
      return group.reduce(function(prev, current) {
        return current > prev ? current : prev;
      });
    });
}
/* Code Explanation

    - we map all items within the main array to a new array using Array.prototype.map() and return this array as the final result
    - within each inner array, we reduce its contents down to a single value using Array.prototype.reduce()
    - the callback function passed to the reduce method takes the previous value and the current value and compares the two values
    - if the current value is higher than the previous value we set it as the new previous value for comparison with the next item within the array or returns it to the map method callback if it’s the last item
 */