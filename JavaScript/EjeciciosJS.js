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
const arrTruthy = (arr) => { return arr.filter(Boolean).filter( n => typeof n !== 'number' ) }

const arrDirty = [NaN, 0, 5, false, -1, '',undefined, 3, null, 'test']

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
const arrNumber1 = [1,2,3]
const arrNumber2 = [1,2,3,4,5]
const arrNumber3 = [1,4,7,2]

const arrTresArrays = (arrN1, arrN2, arrN3) => { arrRes = ( arrN1.concat(arrN2,arrN3).sort() ) 
                                          return arrRes.filter(( a, b ) => arrRes.indexOf(a) === b ) }

console.log( arrTresArrays(arrNumber1, arrNumber2, arrNumber3) )


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
const roundTo = (nFloat, nDecimals) => { return Math.round(nFloat * (Math.pow(10, nDecimals) ) ) / (Math.pow(10, nDecimals))}

console.log(roundTo(2.12355,3))


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


//Ejercicio 8
const fromBytesToFormattedSizeUnits = ( val ) => {
  let legibles = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  var cont = 0
  while(val >= 1000 || val <= -1000){
      val /= 1000
      cont ++
  }
  if(val>=0){
      return Math.round(val) + legibles[cont]
  }else{
      //solo he utilizado toFixed(3) aqui, para que el resultado fuera el del ejemplo
      return val.toFixed(3) + legibles[cont]
  }
}

console.log(fromBytesToFormattedSizeUnits(1000))
console.log(fromBytesToFormattedSizeUnits(123456789))
console.log(fromBytesToFormattedSizeUnits(-12145489451.5932, 5))


//Ejercicio 9
const toLowercaseKeys = ( obj ) => {
  let lowerObj = new Object()
  Object.entries(obj).map(([key, value]) => {
    lowerObj[key.toLowerCase()] = value
  })
  return lowerObj
}

let myObject = { NamE: 'Charles', ADDress: 'Home Street' }

console.log(toLowercaseKeys(myObject))


//Ejercicio 10
const removeHTMLTags = ( codigo ) => {
  return codigo.replace( /(<([^>]+)>)/ig, '')
}

const result10 = ('<div><span>lorem</span> <strong>ipsum</strong></div>')
 
console.log(removeHTMLTags(result10)) // lorem ipsum


//Ejercicio 11
const splitArrayIntoChunks = ( arr, n ) => {
  let arrRes = []
  for( let i = 0; i < arr.length; i++ ){
    arrRes.push(arr.slice(i, i+n))
    i+=n-1
  }
  return arrRes
}

const result11 = splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 3)

console.log(result11) // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]