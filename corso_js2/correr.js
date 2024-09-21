const nombre = 'isaaccc'

const gato = {
    nombre : 'pelusa',
    duerme : true,
    edad : 4,
    enemigos : ['agua', 'mi mamá'],
}
console.log(Object.values(gato))
Object.values(gato).forEach((item) => console.log(item))


const ngato = gato.nombre 
const {nombre : nombresp, duerme} =  gato

console.log(nombresp,ngato)

// for (let propiedad in gato ){
//     console.log(gato[propiedad])
// }


