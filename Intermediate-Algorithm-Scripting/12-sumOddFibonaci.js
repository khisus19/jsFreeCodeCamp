/* Sum All Odd Fibonacci Numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
 */

function sumFibs(num) {
    let fibos = [1, 1];
    for (let i = 0; fibos[i] + fibos[i + 1] <= num; i++) {
        fibos.push(fibos[i] + fibos[i + 1])
    }
    let result = fibos.filter(number => number % 2 === 1).reduce((prev, curr) => prev + curr)
    console.log(result)
    return result;
}
  
sumFibs(4); //-> 5
sumFibs(1); //-> 2
sumFibs(1000); //-> 1785
sumFibs(4000000); //-> 4613732
sumFibs(75024); //-> 60696