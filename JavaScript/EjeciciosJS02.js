//Ejercicio 02
const arrDirty = [NaN, 0, 5, false, -1, '',undefined, 3, null, 'test']
const arrDirt = [1, 20, 'pikachu']
const arrDir = ['', '', '']
const arrDi = [1,2,3]
const arrD = ['uno', 'dos', 'tres']

const arrTruthy = (arr) => { return arr.filter(Boolean).filter( n => typeof n !== 'number' ) }

console.log(arrTruthy(arrDirty))
console.log(arrTruthy(arrDirt))
console.log(arrTruthy(arrDir))
console.log(arrTruthy(arrDi))
console.log(arrTruthy(arrD))