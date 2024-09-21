const nombre = 'isaaccc'

const gato = {
    nombre : 'pelusa',
    duerme : true,
    edad : 4,
    enemigos : ['agua', 'mi mamá'],
    get nombremay(){
        return this.nombre.toUpperCase()
    },
    set agregarenemigo(nuevoamigo){
        this.enemigos.push(nuevoamigo)
    }
}

console.log(gato.nombremay)
gato.agregaramigo = 'pedrito'

console.log(gato)