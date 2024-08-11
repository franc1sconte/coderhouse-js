// --> Genera un num random
let numeroRandom = (min, max) => {
    numMin = Math.ceil(min)
    numMax = Math.floor(max)
    return Math.floor(Math.random() * (numMax - numMin + 1)) + min
}

//

let respuestaCompleta
// --> Se formatean las palabras obtenidas del usuario
function modificarPalabras(palabra1, palabra2, palabra3) {
    let respuestaModificada1 = palabra1.charAt(0).toUpperCase() + palabra1.slice(1)
    let respuestaModificada2 = '-' + palabra2 + '-'
    let respuestaModificada3 = palabra3.toUpperCase()
    const caracterEspeciales = ['!', '@', '#', '$', '%', '&', '*']
    let caracaterEspecial = caracterEspeciales[Math.floor(Math.random() * caracterEspeciales.length)]
    respuestaCompleta = respuestaModificada1 + respuestaModificada2 + respuestaModificada3 + numeroRandom(1, 99) + caracaterEspecial
}

// --> Genera la contraseña con su ID y lo guarda en un objeto
let contraseñaGeneradaObj = {}
let idContador = -1
function generarContraseña(respuestaCompleta){
    let contraseña = respuestaCompleta
    generarId = () => {
        idContador = idContador + 1
        return idContador
    }
    contraseñaGeneradaObj = {id: generarId(), contraseña: `${contraseña}`}
}

// --> Recibimos la contraseña y la subimos al localStorage
let contraseñasLocalStorage = []
function generarContraseñaAleatoria(idInputUno, idInputDos, idInputTres){
    let animalRespuesta = document.querySelector(idInputUno).value
    let colorRespuesta = document.querySelector(idInputDos).value
    let paisRespuesta = document.querySelector(idInputTres).value
    
    modificarPalabras(animalRespuesta, colorRespuesta, paisRespuesta)
    generarContraseña(respuestaCompleta)
    contraseñasLocalStorage.push(contraseñaGeneradaObj)
    localStorage.setItem('contraseñaGenerada', JSON.stringify(contraseñasLocalStorage))
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
    
})

// --> Cuando se recarga la pagina, se limpia el local storage.
function clearLocalStorage() {
    localStorage.clear()
    window.onload = clearLocalStorage
}
clearLocalStorage()