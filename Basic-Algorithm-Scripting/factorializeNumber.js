// FACTORIALIZE A NUMBER

function factorialize(num) {
    let factor = 1;
    for(let i = 1; i <= num; i++){
        factor *= i;
    }
    return factor;
}
  
console.log(factorialize(0));

// Using recursion
function factorialize(num) {
    if (num === 0) {
      return 1;
    }
    return num * factorialize(num - 1);
}
  
factorialize(5)