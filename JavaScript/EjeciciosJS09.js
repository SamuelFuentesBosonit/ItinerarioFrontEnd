//Ejercicio 9

const myObjLowercase = ( obj ) => {
  let lowerObj = new Object();
  Object.entries(obj).map(([key, value]) => {
    lowerObj[key.toLowerCase()] = value
  })
  return lowerObj
}

let myObject = { NamE: 'Charles', ADDress: 'Home Street' };
console.log(myObjLowercase(myObject));