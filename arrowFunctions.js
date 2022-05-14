// Función normal

const date = function() {
    return new Date();
};

console.log(date());

// Arrow function

const date1 = () => new Date();

console.log(date1());

// Arrow functions with parameters

const doubler = num => num * 2;

console.log(doubler(2));

// Arrow functions with default parameters
const tripler = (num = 2) => num * 3;

console.log(tripler());