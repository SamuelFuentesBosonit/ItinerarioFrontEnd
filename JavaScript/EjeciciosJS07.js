//Ejercicio 7
const returnFalsyValues = ( obj, type ) => { for( var values in obj ){
  if( type( obj[values] ) ){
     delete obj[values]
     }
	}
	return obj
}

const falsyValues = returnFalsyValues({ a: 1, b: '2', c: 3 }, x => typeof x === 'string')
 
console.log(falsyValues)