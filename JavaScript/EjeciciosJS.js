//Ejercicio 01
const arrNames = [
  {id: 1, name: 'Pepe'},
  {id: 2, name: 'Juan'},
  {id: 3, name: 'Alba'},
  {id: 4, name: 'Toby'},
  {id: 5, name: 'Lala'}
]

const idElegido = (id) => { return arrNames[id-1] }

console.log(idElegido(3))


//Ejercicio 02
const arrDirty = [NaN, 0, 5, false, -1, '',undefined, 3, null, 'test']
const arrTruthy = (arr) => { return arr.filter(Boolean).filter( n => typeof n !== 'number' ) }

console.log(arrTruthy(arrDirty))


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
const toFixed2 = (nFloat, nDecimals) => { return Math.floor(nFloat * (Math.pow(10, nDecimals) ) ) / (Math.pow(10, nDecimals))}


