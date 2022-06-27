//Ejercicio 02
const arrTruthy = (arr) => { return arr.filter(Boolean).filter( n => typeof n !== 'number' ) }

const arrDirty = [NaN, 0, 5, false, -1, '',undefined, 3, null, 'test']

console.log(arrTruthy(arrDirty))