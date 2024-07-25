//

let respuestaCompleta
// --> Se formatean las palabras obtenidas del usuario
function modificarPalabras(palabra1, palabra2, palabra3) {
    let respuestaModificada1 = palabra1.charAt(0).toUpperCase() + palabra1.slice(1)
    let respuestaModificada2 = '-' + palabra2 + '-'
    let respuestaModificada3 = palabra3.toUpperCase()
    respuestaCompleta = respuestaModificada1 + respuestaModificada2 + respuestaModificada3
}

// --> Genera un num random
let numeroRandom = (min, max) => {
    numMin = Math.ceil(min)
    numMax = Math.floor(max)
    return Math.floor(Math.random() * (numMax - numMin + 1)) + min
}

// --> Genera la contraseña con su ID y lo guarda en un objeto
let contraseñaGeneradaObj = {}
let idContador = -1
function generarContraseña(respuestaCompleta, numRandom){
    let contraseña = respuestaCompleta + numRandom + '!'
    generarId = () => {
        idContador = idContador + 1
        console.log('ID generado: '+idContador)
        return idContador
    }
    contraseñaGeneradaObj = {id: generarId(), contraseña: `${contraseña}`}
}

// --> Generamos los eventos para interactuar con las diferentes secciones del DOM
document.querySelector('#irGeneradorBtn').addEventListener('click', function() {
    document.querySelector('.bodyPage').style.display = 'none'
    document.querySelector('.listaPage').style.display = 'none'
    document.querySelector('.formPage').style.display = 'block'
})

document.querySelector('#volverFormBtn').addEventListener('click', function() {
    document.querySelector('.formPage').style.display = 'none'
    document.querySelector('.listaPage').style.display = 'block'
    document.querySelector('.bodyPage').style.display = 'block'
})

document.querySelector('#irListaContraseñasBtn').addEventListener('click', function() {
    document.querySelector('.formPage').style.display = 'none'
    document.querySelector('.bodyPage').style.display = 'none'
    document.querySelector('.listaPage').style.display = 'none'
    document.querySelector('.mostrarContraseñasPage').style.display = 'block'
})

document.querySelector('#volverListaContraseñasBtn').addEventListener('click', function() {
    document.querySelector('.formPage').style.display = 'none'
    document.querySelector('.mostrarContraseñasPage').style.display = 'none'
    document.querySelector('.listaPage').style.display = 'block'
    document.querySelector('.bodyPage').style.display = 'block'
})

// --> Recibimos la contraseña y la subimos al localStorage
let contraseñasLocalStorage = []
function generarContraseñaAleatoria(idInputUno, idInputDos, idInputTres){
    let animalRespuesta = document.querySelector(idInputUno).value
    let colorRespuesta = document.querySelector(idInputDos).value
    let paisRespuesta = document.querySelector(idInputTres).value
    
    modificarPalabras(animalRespuesta, colorRespuesta, paisRespuesta)
    generarContraseña(respuestaCompleta, numeroRandom(1, 99))
    contraseñasLocalStorage.push(contraseñaGeneradaObj)
    localStorage.setItem('contraseñaGenerada', JSON.stringify(contraseñasLocalStorage))
    console.log('Contraseña generada con exito.')
}

// --> Renderizamos las contraseñas generadas en una sección del DOM
const contenedorContraseñas = document.querySelector('#contenedorContraseñas')
function renderizarProductos(array){
        let newDiv = document.createElement("div")
        newDiv.classList.add("passwordBox")
        array.forEach(contraseña => {
            newDiv.id = contraseña.id
            newDiv.innerHTML = `<div id=${contraseña.id} class="contraseñaBox">
                                <li>${contraseña.contraseña} <button class="quitarElemento" id="${contraseña.id}">X</button></li>
                                </div>
                                <br>`
            contenedorContraseñas.appendChild(newDiv)
            console.log('La contraseña generada fue: '+contraseña.contraseña)
        })
}

// --> Muestra un mensaje en la seccion de contraseñas si NO tenemos ninguna guardada/generada.
function verificarCantidadContras(){
    let botonMenuContras = document.querySelector('#irListaContraseñasBtn')
    botonMenuContras.addEventListener('click', function(){
        if(contraseñasLocalStorage.length == 0){
            document.querySelector('.noContraseñas').style.display = 'block'
        }else{
            document.querySelector('.noContraseñas').style.display = 'none'
        }
    })
}
verificarCantidadContras()

// --> Elimina del localStorage y del array local cuando se interactua con el boton 'X' (eliminar contraseña)
function borrarLocalStorage(){
    let quitarButton = document.querySelectorAll('.quitarElemento')
    quitarButton.forEach((boton) => {
        boton.onclick = (x) => {
            const botonId = x.currentTarget.getAttribute('id')
            let contrasLS = JSON.parse(localStorage.getItem('contraseñaGenerada')) || []
            contrasLS = contrasLS.filter((contra) => contra.id !== parseInt(botonId))
            localStorage.setItem('contraseñaGenerada', JSON.stringify(contrasLS))
            console.log('Elemento con id ' + botonId + ' eliminado del localStorage.')
            contraseñasLocalStorage = contraseñasLocalStorage.filter((contra) => contra.id !== parseInt(botonId));
        }
    })
}

// --> Elimina la contraseña mostrada por HTML cuando se clickea en el boton correspondiente
function quitarElementoHtml(selector) {
    document.querySelectorAll(selector).forEach(function (button) {
        button.addEventListener('click', function () {
            let botonId = this.getAttribute('id')
            let elementoBtn = document.getElementById(botonId)
            if (elementoBtn) {
                elementoBtn.remove()
            }
        })
    })
}

// --> Se unifican las funciones que eliminan el HTML y el localStorage (No era necesario pero creo que queda mejor organizado)
function quitarElementoGeneral(selector) {
        //* Eliminar el elemento HTML
        quitarElementoHtml(selector)
        //* Eliminar la contraseña del localStorage
        borrarLocalStorage()
}

// --> Evento tipo 'submit', envia la información del fomrulario al clickear en "enviar"
const getContraseñasGeneradas = localStorage.getItem('contraseñaGenerada')
const formPassword = document.querySelector('#formDatosPassword')
formPassword.addEventListener('submit', function(event) {
    event.preventDefault()
    generarContraseñaAleatoria('#animal', '#color', '#pais')
    renderizarProductos(contraseñasLocalStorage)
    quitarElementoGeneral(".quitarElemento")
    alert('Generando contraseña...')
    alert('Contraseña generada con éxito.')
    console.log('Contraseña aleatoria guardada en Local Storage')
})

// --> Cuando se recarga la pagina, se limpia el local storage.
function clearLocalStorage() {
    localStorage.clear()
    window.onload = clearLocalStorage
}
clearLocalStorage()