/*
    ===== Código de TypeScript =====
*/
function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}


@classDecorator
class MiSuperclase{
    public miPropiedad: string = 'ABC123';

    imprimir() {
        console.log('Hola mundo');
    }
}

console.log(MiSuperclase);

const miClase = new MiSuperclase();
console.log(miClase.miPropiedad);