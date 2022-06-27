//Ejercicio 06
const roundTo = (nFloat, nDecimals) => { return Math.round(nFloat * (Math.pow(10, nDecimals) ) ) / (Math.pow(10, nDecimals))}

console.log(roundTo(2.12355,3))