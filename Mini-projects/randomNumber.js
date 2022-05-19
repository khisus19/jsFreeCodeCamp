function randomNumber(){
    return Math.random();
}

console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());

// Dado de 20 caras usando Math.random()
function diceD20(){
    let result = Math.floor(Math.random() * 20);
    if (result === 0) {
        console.log(`¡Sacaste un 20!`)
    } else {
        console.log(`Sacaste: ${result}`)
    }
}

diceD20()

// Dado de X caras usando Math.random()
function dice(caras){
    let result = Math.floor(Math.random() * caras);
    if (result === 0) {
        console.log(`¡Sacaste un ${caras}!`)
    } else {
        console.log(`Sacaste: ${result}`)
    }
}

dice(6)

// Numeros aleatorios en un rango cualquiera

function randomNumberRange(bottom, top) {
    let randomInRange = Math.floor(Math.random() * (top - bottom + 1) + bottom)
    console.log(randomInRange)
}

for (let i = 0; i < 10; i++) {
    randomNumberRange(10, 20)
}

// Los limites si se incluyen en randomNumberRange [10, 20]