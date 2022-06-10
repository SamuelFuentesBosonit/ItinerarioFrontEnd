/*
    ===== Código de TypeScript =====
*/
//let habilidades: (boolean | string | number)[] = ['Bash', 'Counter', 'Healing', 100];
let habilidades: string[] = ['Bash', 'Counter', 'Healing'];
//habilidades.push()
interface Personaje{
    nombre: string,
    hp: number,
    habilidades: string[],
    puebloNatal?: String// ? para hacerlo opcional.
}
const personaje: Personaje ={
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}
personaje.puebloNatal = 'Pueblo Paleta';
console.table(personaje);
