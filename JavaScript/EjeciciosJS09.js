//Ejercicio 09
const myObject = { NamE: 'Charles', ADDress: 'Home Street' };
//const myObjLowercase = toLowercaseKeys(myObject);
//console.log(myObjLowercase); // { name: 'Charles', address: 'Home Street' }

const myObjLowercaseKeys = ( obj ) => { for( const key of Object.keys( obj ) ){ 
    obj[key] = obj[key.toLowercase]
    } 
}
console.log(myObject)
console.log(myObjLowercaseKeys(myObject))
//const myLowercaseKey = ( obj ) => { Object.defineProperty( obj, obj[], obj[].toLowercase)}