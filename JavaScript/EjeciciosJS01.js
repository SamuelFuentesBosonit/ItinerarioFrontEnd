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