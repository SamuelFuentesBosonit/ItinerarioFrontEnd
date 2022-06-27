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