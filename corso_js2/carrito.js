const frutas = []

const fruta = prompt('que deseas comprar??')

frutas.push(fruta)



while(confirm('desea agregar otro elemento?')){
    const fruta = prompt('que fruta quieres comprar?')
    frutas.push(fruta)
}

console.log( 'compraste')
for (let fruta of frutas){
    console.log(fruta)
}