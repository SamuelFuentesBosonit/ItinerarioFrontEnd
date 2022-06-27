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