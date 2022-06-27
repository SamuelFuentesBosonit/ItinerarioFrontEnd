//Ejercicio 06
const toFixed2 = (nFloat, nDecimals) => { return Math.round(nFloat * (Math.pow(10, nDecimals) ) ) / (Math.pow(10, nDecimals))}

console.log(toFixed2(2.12355,3))