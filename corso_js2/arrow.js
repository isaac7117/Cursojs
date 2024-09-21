//funcion expresada

const numAzar = function(min, max){
    return Math.floor(Math.random() * (max - min)) + min
}

const azarplecha = () => {
    return Math.floor(Math.random() * (max - min) + min)
}

console.log(azarplechar(1, 11))