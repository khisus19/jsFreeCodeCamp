/* Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
 */

function smallestCommons(arr) {
    let rangeArr = [];
    arr.sort((a, b) => a-b);
    for (let i = arr[0]; i <= arr[1]; i++) {
        rangeArr.push(i)
    }
    let multiple = arr[1]
    for (let i = arr[1]; ; i += arr[1]) {
        if (rangeArr.every((value) => {return multiple % value === 0})) {
            break;
        } else {
            multiple += arr[1]
        }
    }
    console.log('Smallest common multiple: ', multiple)
    return multiple;
}
  
smallestCommons([5,1]); //-> 60
smallestCommons([2, 10]); //-> 2520
smallestCommons([1, 13]); //-> 360360
smallestCommons([23, 18]); //-> 6056820

// Another solution using greatest common divisor (GCD) and least common multiple (lcm)

function smallestCommons2(arr) {
    // Setup
    const [min, max] = arr.sort((a, b) => a - b);
    const range = Array(max - min + 1)
      .fill(0)                          //-> Fills the array with zeros
      .map((_, i) => i + min);          //-> Change the zeros for the index + min
    // GCD of two numbers
    // https://en.wikipedia.org/wiki/Greatest_common_divisor#Euclid's_algorithm
    const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);
    // LCM of two numbers
    // https://en.wikipedia.org/wiki/Least_common_multiple#Using_the_greatest_common_divisor
    const lcm = (a, b) => a * b / gcd(a, b);
    // LCM of multiple numbers
    // https://en.wikipedia.org/wiki/Least_common_multiple#Other
    return range.reduce((multiple, curr) => lcm(multiple, curr));
}

/* This solution uses formulae and algorithms for the Greatest Common Divisor and Least Common Multiple off of Wikipedia to compactly and quickly compute the Smallest Common Multiple. */