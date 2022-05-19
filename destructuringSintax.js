// Sintaxis de desestructuración - Crear variables con los atributos de un objeto
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

const {today, tomorrow} = HIGH_TEMPERATURES;
console.log(today, tomorrow);

// --- Sintaxis de desestructuración - Crear variables con los atributos de un objeto con otro nombre
const HIGH_TEMPERATURES1 = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};
  
const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES1; 
console.log(highToday, highTomorrow);

// --- Sintaxis de desestructuración - Objetos anidados
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};
    
const {today: {low: lowToday, high: highToday1}} = LOCAL_FORECAST;
console.log(lowToday, highToday1);

// --- Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a. ---
let a = 8, b = 6;
console.log("a: " + a, "b: " + b);
[b, a] = [a, b];
console.log("a: " + a, "b: " + b);

// --- Use destructuring assignment with the rest parameter to perform an effective Array.prototype.slice() so that arr is a sub-array of the original array source with the first two elements omitted.

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [, , ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);

// --- Use destructuring assignment within the argument to the function half to send only max and min inside the function.
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

const half = ({max, min}) => {
    return (max + min) / 2.0;
};
console.log(half(stats))