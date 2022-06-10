/*
    ===== Código de TypeScript =====
*/
export interface Producto {
    desc: string,
    precio: number
}

const telefono: Producto = {
    desc: "Nokia A1",
    precio:  150
}

const tableta: Producto = {
    desc: "Ipad Air",
    precio:  350
}

/*function calculaISV( productos: Producto[] ):number {
    let total = 0;
    productos.forEach( (producto) => {
        total += producto.precio;
    } )

    return total * 0.15;
}*/

export function calculaISV( productos: Producto[] ): [number, number] {
    let total = 0;
    productos.forEach( ({ precio }) => { //desestructurado
        total += precio;
    } )
    
    return [total, total * 0.15];
}

const articulos = [ telefono, tableta ];

const [ total, isv ] = calculaISV( articulos );

console.log('ISV: ', isv);
console.log('Total: ', total);