//Ejercicio 04
const arrNumber1 = [1,2,3]
const arrNumber2 = [1,2,3,4,5]
const arrNumber3 = [1,4,7,2]

const arrTresArrays = (arrN1, arrN2, arrN3) => { arrRes = ( arrN1.concat(arrN2,arrN3).sort() ) 
                                          return arrRes.filter(( a, b ) => arrRes.indexOf(a) === b ) }

console.log( arrTresArrays(arrNumber1, arrNumber2, arrNumber3) )