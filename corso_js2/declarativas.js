//funcion declarativa 
console.log(numeroal(10,21))
function numeroal(min, max) {
    return Math.floor(Math.random() * (max -min)) + min

}

//funcion expresada
console.log(numAzar(100, 201))
const numAzar = function(min, max){
    return Math.floor(Math.random() * (max - min)) + min
}