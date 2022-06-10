/*
    ===== Código de TypeScript =====
*/
/*function sumar(a,b){
    return a+b;
}*/
function sumar(a: number,b: number): number{
    return a + b;
}
const sumarFlecha = (a: number,b: number): number => {
    return a + b;
}
function multiplicar(numero: number, otroNumero?: number, base: number=2): number{
    return numero * base;
}
const restMultiplicar = multiplicar(10,20);
console.log(restMultiplicar)
const restMultiplicar2 = multiplicar(10,0,20);
console.log(restMultiplicar2)
//const resultado = sumar('Fernando', ' Herrera');
const resultado = sumar(10,20);
console.log(resultado);

interface PersonajeLOR{
    nombre: string,
    pv: number,
    mostrarHp: () => void;
}
function curar(personaje: PersonajeLOR, curarX: number): void{//void no retorna nada, en js da undefined
    personaje.pv += curarX;
    console.log(personaje);
}
const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp(){
        console.log('Puntos de vida:', this.pv);
    }
}
curar(nuevoPersonaje,20);
nuevoPersonaje.mostrarHp();