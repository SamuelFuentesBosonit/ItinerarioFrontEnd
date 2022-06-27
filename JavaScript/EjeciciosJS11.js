//Ejercicio11
const splitArray = ( arr, n ) => {
  let arrRes = []
  for( let i = 0; i < arr.length; i++ ){
    arrRes.push(arr.slice(i, i+n))
    i+=n-1
  }
  return arrRes
}


const result = splitArray([1, 2, 3, 4, 5, 6, 7], 3)

console.log(result) // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]