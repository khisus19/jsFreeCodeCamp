/* Sum All Primes

A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
 */

// Code from stack overflow to find primes in a range
function findPrimeNums(n) { 
    let j, i = 2, primeArr=[2], isPrime;
    for (let x = 3; x <= n; x += 2) {   // Start a for loop from 3 and increment by 2 (3, 5, 7, 9,...)
        j = Math.sqrt(x);               // Calc square root of that intance and put it in 'j' var
        isPrime = true;                 // Boolean that declare if is prime
        for (i = 2; i <= j; i++) {      // Another for loop from 2 to 'j'
            if (x % i == 0) {           // If the odd number 'x' is divisible by 'j' then is not prime and stop looping
                isPrime = false;
                break;
            }
        }
        if(isPrime){                    // If the odd number 'x' changed isPrime to true 
            primeArr.push(x);           // Push that to primeArr
        }
    }
    console.log(primeArr)
    return primeArr;
}

function sumPrimes(num) {
    let j, i = 2, primeArr=[2], isPrime;
    for (let x = 3; x <= num; x += 2) {
        j = Math.sqrt(x);
        isPrime = true;
        for (i = 2; i <= j; i++) {
            if (x % i == 0) {
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            primeArr.push(x);        
        }
    }
    let result = primeArr.reduce((prev, arr) => prev + arr)
    console.log(result);
    return result;
}
sumPrimes(10); //-> 17
sumPrimes(977); //-> 73156

// Sieve of Eratosethenes

function sumPrimes2(num) {
  // Prime number sieve
  let isPrime = Array(num + 1).fill(true);
  // 0 and 1 are not prime
  isPrime[0] = false;
  isPrime[1] = false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (isPrime[i]) {
      // i has not been marked false -- it is prime
      for (let j = i * i; j <= num; j += i)
        isPrime[j] = false;
    }
  }

  // Sum all values still marked prime
  return isPrime.reduce(
    (sum, prime, index) => prime ? sum + index : sum, 0
  );
}
/* Code Explanation
This solution is based on the Sieve of Eratosethenes 4.9k.
We create a boolean array for the primality of each number in our range. All numbers except 0 and 1 are assumed to be prime.
Then, we start with 2 and proceed to num, marking every multiple of a prime number as false, or ‘not prime’.
Finally, we reduce our sieve array, returning the sum of all indices still marked as true or ‘prime’.
Note: many optimizations can be made to improve the efficiency of this sieve, but they have been omitted for the sake of simplicity and readability. */


// Another solution
function sumPrimes3(num) {
    // Helper function to check primality
    function isPrime(num) {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0)
          return false;
      }
      return true;
    }
  
    // Check all numbers for primality
    let sum = 0;
    for (let i = 2; i <= num; i++) {
      if (isPrime(i))
        sum += i;
    }
    return sum;
}

/* Code Explanation
We loop over all values in our range, adding them to the sum if they are prime.
Our primality checking function returns false if the target number is divisible by any number in between 2 and the square root of the target number. We only need to check up to the square root because the square root of a number is the largest possible unique divisor. */