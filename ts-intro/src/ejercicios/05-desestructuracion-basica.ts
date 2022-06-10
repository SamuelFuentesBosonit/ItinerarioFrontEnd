/*
    ===== Código de TypeScript =====
*/
interface Reproductor{
    volumen: number,
    segundo: number,
    cancion: string,
    detalles: Detalles
}
interface Detalles{
    autor: string,
    anio: number
}
const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}
const { volumen, segundo, cancion, detalles } = reproductor;
//const { volumen: vol, segundo, cancion, detalles } = reproductor;  cambiar el nombre a volumen
//const { volumen, segundo, cancion, detalles: { autor } } = reproductor;
//const { volumen, segundo, cancion, detalles: { autor: autorDetalle } } = reproductor; le cambia el nombre a autor
const { autor } = detalles;

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [, , p3] = dbz;

console.log('Personaje 3:',p3);

//const [p1, p2, p3] = dbz;
//console.log('Personaje 1:',p1);
//console.log('Personaje 2:',p2);
//console.log('Personaje 3:',p3);

//console.log('Personaje 1:',dbz[0]);
//console.log('Personaje 2:',dbz[1]);
//console.log('Personaje 3:',dbz[2]);

//console.log('El volumen actual de: ', volumen);
//console.log('El segundo actual de: ', segundo);
//console.log('La canción actual de: ', cancion);
//console.log('El autor es: ', autor);