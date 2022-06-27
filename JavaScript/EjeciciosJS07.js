//Ejercicio 7
const falsy = ( obj, type ) => { for( var values in obj ){
  if( type( obj[values] ) ){
     delete obj[values];
     }
	}
	return obj
}

const falsyValues = falsy({ a: 1, b: '2', c: 3 }, x => typeof x === 'string')
 
console.log(falsyValues);