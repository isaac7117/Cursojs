
let num_maquina = math.floor(matchMedia.random() * (10 - 1)) + 1
console.log(num_maquina)

let vidas = 3

let num_usuario = parseInt(prompt('adivine el numero del 1 al 10'))


while(num_maquina !== num_usuario &&  vidas > 1 )  {
    console.log('te equibocaste')
    num_maquina = parseInt(prompt('numero del 1 al 10'))
    vidas --
}

if (num_maquina === num_usuario){
    console.log('ganaste')
}else{
    console.log('perdiste')
}



