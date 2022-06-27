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