var miVariableGlobal = 1;

if (true) {
    let miVariableLocal = "loquita"
    console.log("Accediendo a la global desde dentro del block " + miVariableLocal);
}

console.log("Accediendo a la local let desde fuera del block " + miVariableLocal);
