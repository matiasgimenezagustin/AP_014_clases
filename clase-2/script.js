/* for(let i = 0; i < 10; i++){

} */

/* let condicion = NaN
let condicion2 = ''
 */
/* condicion || condicion2
? console.log('juan') 
: (
    condicion2
    ? console.log('demis')
    : console.log('maria')
) */


/* condicion && console.log('hola') */

/* let puerto = condicion ?? 5000
console.log(puerto)
 */


/* const persona = {
    nombre: 'juan',
    amigo:{
        nombre: 'pepe'

    }
}

console.log(persona.amigo.amigo?.nombre) */

/* 
let condicion = false

console.log(condicion || 'no existe')

console.log(condicion ?? 'no existe')
 */
/* 
const persona = {
    'nombre completo': 'juan',
    apellido: 'diaz',
    edad: 50
}
persona.nombre = 'pepe'





const presentarse  = ({nombre}) =>{
    
    console.log('hola mi nombre es ' + nombre)
}

presentarse(persona)
 */
/* console.log(persona['nombre completo'])

 */


const productos = [
    {
        nombre: 'tv samsung 42\"',
        precio: 600,    
        id: 1
    },
    {
        nombre: 'tv samsung 43\"',
        precio: 650,    
        id: 2
    },
    {
        nombre: 'tv samsung 44\"',
        precio: 700,    
        id: 3
    },
    {
        nombre: 'tv LG 42\"',
        precio: 540,    
        id: 4
    },
]

/* map, filter, find */

/* const productosCaros = productos.filter((loQueSea) =>{
    console.log('me ejecuto')
    return loQueSea.precio > 620
}) */

/* console.log(productosCaros) */


const productosConIva = productos.map((producto) =>{
    return {...producto, precioConIva: producto.precio * 1.21}
})

console.log(productosConIva )

console.log(productos)

const nombres = ['pepe', 'juan', 'maria']

const nombresModificados = nombres.map(nombre => {
    nombre = 'diaz'
    return nombre
})

console.log({nombres})
console.log({nombresModificados})