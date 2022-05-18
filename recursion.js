function sum(arr, n) {
    // Only change code below this line
    if (n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
    // Only change code above this line
}

console.log(sum([2,2,3,4], 3));

function countdown(n){
    if (n < 1){
      return [];
    } else {
        const arr = countdown(n - 1);
        arr.unshift(n);
        return arr;
    }
}

console.log(countdown(5));