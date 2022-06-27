//Ejercicio 8
const test = ( val ) => {
  let legibles = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let cont = 0;
  //trabajamos con negativos menores de 1000 y positivos mayores de 1000
  if(val < -1000 || val > 1000){
    //guardo si es negativo y lo pongo positivo para trabajar
    if(val < 0){
      val *= -1;
      var negativo = true;
    }
    //divido para que me dé la posición en el array y tener el val para ese tipo de unidad
    while(val > 1024){
      val /=1000;
      cont ++;
    }
    //si era negativo, lo vuelvo a poner negativo
    if(negativo){
      val *= -1;
      return (val) + legibles[cont];
    }else{
      return val + legibles[cont];
    }    
  }else{
    return val + legibles[cont];
  }
}
console.log("resultado: " + test(10000000))