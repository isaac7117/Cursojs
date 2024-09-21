const gato = {
    nombre : 'pelusa',
    duerme : true,
    edad : 4,
    enemigos : ['agua', 'mi mamá'],


    //metodos
    // comer: function(){
    //     console.log('gato comiendo')
    // },
    comerdos(alimento){
        console.log('gato comiendo:  ' + alimento)
    }
    // otros : {
    //     amigos: ['cobarde', 'timidos' ],
    //     favoritos: {
    //         comida: {
    //             frio: 'salmon',
    //             caliente: 'pollo'
    //         }
    //     }
    // }

}


gato.comerdos('pez')
// const amigos = ['cobarde', 'timido'] 
// console.log(amigos.push())

// console.log(gato.otros.favoritos?.comida.frio)
// console.log(gato.otros.favoritos.amigos)
//console.log(gato.nombre)
//console.log(gato['nombre'])
//console.log(gato.duerme)
//console.log(gato.enemigos[0])
//console.log(gato['enemigos'][0])

//gato.color = 'azul'
//gato.edad = 5
//delete gato.duerme


// if(gato.hasOwnProperty('nombre')){
//     gato.nombre = 'flojera'
// }

//console.log(gato.hasOwnProperty('edad'))
