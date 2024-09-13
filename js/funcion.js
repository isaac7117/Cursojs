function saludar (){
console.log("Bienvenido")

}
saludar ()

function sumar (n1, n2){
    return parseInt(n1) + parseInt(n2)

}

let num1 = prompt('ingrese el primer numero: ')
let num2 = prompt('ingrese el segunndo numero: ')

console.log(sumar(num1, num2))