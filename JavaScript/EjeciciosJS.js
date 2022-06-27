//Ejercicio 01
const arrNames = [
  {id: 1, name: 'Pepe'},
  {id: 2, name: 'Juan'},
  {id: 3, name: 'Alba'},
  {id: 4, name: 'Toby'},
  {id: 5, name: 'Lala'}
]

const idElegido = (id) => { return arrNames[id-1] }

console.log(idElegido(1))
console.log(idElegido(2))
console.log(idElegido(3))
console.log(idElegido(4))
console.log(idElegido(5))


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

//Ejercicio 03
const arrCities = [
  {city: 'Logroño', country: 'Spain', capital: false},
  {city: 'Paris', country: 'France', capital: true},
  {city: 'Madrid', country: 'Spain', capital: true},
  {city: 'Rome', country: 'Italy', capital: true},
  {city: 'Oslo', country: 'Norway', capital: true},
  {city: 'Jaén', country: 'Spain', capital: false}
]

const notCapitalCitiesFromSpain = (arr) => { return arr.filter( arr => arr.country === 'Spain' && arr.capital === false ).map(arr => arr.city) }

console.log(notCapitalCitiesFromSpain(arrCities))


//Ejercicio 04
const arrNumber1 = [1,2,3];
const arrNumber2 = [1,2,3,4,5];
const arrNumber3 = [1,4,7,2];

//const arrInter = (arrN1, arrN2, arrN3) => { return new Set(arrN1.concat(arrN2,arrN3).sort() ) }
const arrInter = (arrN1, arrN2, arrN3) => { arrRes = ( arrN1.concat(arrN2,arrN3).sort() ) 
                                          return arrRes.filter(( a, b ) => arrRes.indexOf(a) === b ) }

console.log( arrInter(arrNumber1, arrNumber2, arrNumber3) )


//Ejercicio 05
const arrCities2 = [
  {city: 'Logroño', country: 'Spain', capital: false},
  {city: 'Bordeaux', country: 'France', capital: false},
  {city: 'Madrid', country: 'Spain', capital: true},
  {city: 'Florence', country: 'Italy', capital: true},
  {city: 'Oslo', country: 'Norway', capital: true},
  {city: 'Jaén', country: 'Spain', capital: false}
]

const notCapitalCities = (arr) => { 
let arrN = [] 
arr.filter(arr => arr.capital !== true).map( (cities) => { if(cities.country === 'Spain'){
  arrN.push({city: cities.city, 'isSpain': true})
}else{
	arrN.push({city: cities.city, 'isSpain': false})
}})
return arrN
}

console.log(notCapitalCities(arrCities2))


//Ejercicio 06
const toFixed2 = (nFloat, nDecimals) => { return Math.round(nFloat * (Math.pow(10, nDecimals) ) ) / (Math.pow(10, nDecimals))}

console.log(toFixed2(2.12355,3))


//Ejercicio 07
const falsy = ( obj, type ) => { for( var values in obj ){
  if( type( obj[values] ) ){
     delete obj[values]
     }
	}
	return obj
}

const falsyValues = falsy({ a: 1, b: '2', c: 3 }, x => typeof x === 'string')
 
console.log(falsyValues)


//Ejercicio 08
const medidas = ( val ) => {
  let legibles = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let cont = 0;
  if(val < -1000 || val > 1000){
    if(val < 0){
      val *= -1;
      var negativo = true;
    }
    while(val > 1024){
      val /=1000
      cont ++
    }
    if(negativo){
      val *= -1
      return (val) + legibles[cont]
    }else{
      return val + legibles[cont]
    }    
  }else{
    return val + legibles[cont]
  }
}

console.log("resultado: " + medidas(10000000))


//Ejercicio 09
const myObjLowercase = ( obj ) => {
  let lowerObj = new Object();
  Object.entries(obj).map(([key, value]) => {
    lowerObj[key.toLowerCase()] = value
  })
  return lowerObj
}

let myObject = { NamE: 'Charles', ADDress: 'Home Street' };

console.log(myObjLowercase(myObject));


//Ejercicio 10
const removeHTMLTags = ( codigo ) => {
  return codigo.replace( /(<([^>]+)>)/ig, '')
}

const result = ('<div><span>lorem</span> <strong>ipsum</strong></div>');
 
console.log(removeHTMLTags(result)); // lorem ipsum


//Ejercicio11
const splitArray = ( arr, n ) => {
  let arrRes = [];
  for( let i = 0; i < arr.length; i++ ){
    arrRes.push(arr.slice(i, i+n))
    i+=n-1
  }
  return arrRes;
}

const result11 = splitArray([1, 2, 3, 4, 5, 6, 7], 3)

console.log(result) // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]