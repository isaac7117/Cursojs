let opusuario = prompt(`
    Elija una opcion:
    1: Libros
    2: Peliculas
    3: Juegos
    
    `)
    console.log(opusuario)
    
    switch(opusuario){
        case '1': 
         console.log('principito')
         break;
         case '2': 
         console.log('matrix')
         break;
         case '3': 
         console.log('COD')
         break;
         default:
            console.log('opcionn no valida')

    }

    
