let respuestas = []
let respuestaModificada1
let respuestaModificada2
let respuestaModificada3
let respuestaCompleta
let nuevaContraseña


alert('Bienvenido al generador de contraseñas "seguras"')

for(i = 0; i <= 3; i++){
    switch (i) {
        case 0:
            respuestas[i] = prompt('Ingrese el animal que mas le guste.')
            break;
        case 1:
            respuestas[i] = prompt('Ahora, ingrese el color que mejor le queda a ese animal')
            break;
        case 2:
            respuestas[i] = prompt('Por ultimo, dime un pais donde pueda encontrar ese animal')
            break;
        default:
            alert('Procesando nueva contraseña segura...')
            break;
    }
}

function modificarPalabras(palabra1, palabra2, palabra3) {
    respuestaModificada1 = palabra1.charAt(0).toUpperCase() + palabra1.slice(1)
    respuestaModificada2 = '-' + palabra2 + '-'
    respuestaModificada3 = palabra3.toUpperCase()
    respuestaCompleta = respuestaModificada1 + respuestaModificada2 + respuestaModificada3
}

let numeroRandom = (min, max) => {
    numMin = Math.ceil(min)
    numMax = Math.floor(max)
    return Math.floor(Math.random() * (numMax - numMin + 1)) + min
}

function generarContraseña(respuestaCompleta, numRandom){ 
    nuevaContraseña = respuestaCompleta + numRandom
}

function mostrarContraseña(contraseña) {
    alert('Su nueva contraseña es: '+contraseña)
}

modificarPalabras(respuestas[0], respuestas[1], respuestas[2])
generarContraseña(respuestaCompleta, numeroRandom(1, 99))
mostrarContraseña(nuevaContraseña)